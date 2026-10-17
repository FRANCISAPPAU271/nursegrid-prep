import { NextResponse } from "next/server";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import { isEmailConfigured, sendEmail } from "@/lib/email";
import { weeklyDigestEmail } from "@/lib/weekly-digest";
import { unsubscribeUrl } from "@/lib/unsubscribe";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

// ---------------------------------------------------------------------------
// Weekly email job: a general reminder to subscribe, plus what's new.
//
// Runs daily at 07:00 UTC (07:00 Ghana) rather than weekly. Each user gets at
// most ONE email per ISO week, but the list is metered across daily batches,
// which keeps every run inside the function limit and inside Brevo's 300/day
// free tier. On a small list it finishes in a single run.
//
// Idempotency: weekly_digest_sends is keyed on
// (user_id, kind, period_key), so a retry or a manual invocation can never
// email the same person twice for the same week.
//
// Auth: Vercel cron sends "Authorization: Bearer $CRON_SECRET". With no
// secret set the job fails closed rather than becoming a public mail cannon.
// ---------------------------------------------------------------------------

const MAX_PER_RUN = Number(process.env.WEEKLY_DIGEST_BATCH ?? 200);
const CONCURRENCY = 6;
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://nursegridprep.com";

let tablesEnsured = false;

async function ensureTables() {
  if (tablesEnsured) return;
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "weekly_digest_sends" (
      "user_id" text NOT NULL,
      "kind" text NOT NULL,
      "period_key" text NOT NULL,
      "sent_at" timestamptz NOT NULL DEFAULT now(),
      PRIMARY KEY ("user_id", "kind", "period_key")
    )
  `);
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "email_optouts" (
      "email" text PRIMARY KEY,
      "reason" text,
      "created_at" timestamptz NOT NULL DEFAULT now()
    )
  `);
  tablesEnsured = true;
}

/** Monday-based ISO week key, e.g. "2026-W42". One email per key per user. */
function isoWeekKey(d: Date): string {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((t.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${t.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

/** Bounded concurrency so a large batch can't blow the function timeout. */
async function mapLimit<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let cursor = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (cursor < items.length) {
        const i = cursor++;
        out[i] = await fn(items[i]);
      }
    }),
  );
  return out;
}

type Row = {
  id: string;
  name: string;
  email: string;
  is_premium: boolean;
  access_ends_on: string | null;
};

export async function GET(request: Request) {
  try {
    const secret = process.env.CRON_SECRET;
    const auth = request.headers.get("authorization");
    if (!secret || auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!isEmailConfigured()) {
      return NextResponse.json({ ok: true, skipped: "email not configured (set BREVO_API_KEY + EMAIL_FROM)" });
    }

    await ensureTables();

    const now = new Date();
    const weekKey = isoWeekKey(now);
    const newAccountCutoff = new Date(now.getTime() - 48 * 3600000);

    const rows = (
      await db.execute(sql`
        SELECT u.id,
               u.name,
               u.email,
               u.is_premium,
               s.current_period_end AS access_ends_on
        FROM users u
        LEFT JOIN LATERAL (
          SELECT current_period_end
          FROM subscriptions
          WHERE user_id = u.id AND status = 'active'
          ORDER BY current_period_end DESC
          LIMIT 1
        ) s ON true
        WHERE u.is_admin = false
          AND u.created_at < ${newAccountCutoff.toISOString()}::timestamptz
          AND NOT EXISTS (SELECT 1 FROM email_optouts e WHERE lower(e.email) = lower(u.email))
          AND NOT EXISTS (
            SELECT 1 FROM weekly_digest_sends d
            WHERE d.user_id = u.id AND d.kind = 'weekly' AND d.period_key = ${weekKey}
          )
        ORDER BY u.created_at ASC
        LIMIT ${MAX_PER_RUN}
      `)
    ).rows as unknown as Row[];

    const sent = { premium: 0, free: 0 };
    const errors: string[] = [];

    const fmt = (iso: string | null) =>
      iso
        ? new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso))
        : null;

    await mapLimit(rows, CONCURRENCY, async (u) => {
      try {
        const isPremium = Boolean(u.is_premium);
        const { subject, html } = weeklyDigestEmail({
          userId: u.id,
          name: u.name,
          isPremium,
          accessEndsOn: fmt(u.access_ends_on),
        });

        await sendEmail(u.email, subject, html, {
          unsubscribeUrl: unsubscribeUrl(APP_URL, u.id) || undefined,
        });

        await db.execute(sql`
          INSERT INTO weekly_digest_sends (user_id, kind, period_key)
          VALUES (${u.id}, 'weekly', ${weekKey})
          ON CONFLICT DO NOTHING
        `);

        if (isPremium) sent.premium += 1;
        else sent.free += 1;
      } catch (e) {
        errors.push(`digest:${u.id}: ${e instanceof Error ? e.message : "send failed"}`);
      }
    });

    return NextResponse.json({
      ok: true,
      week: weekKey,
      sent: { total: sent.premium + sent.free, ...sent },
      batchLimit: MAX_PER_RUN,
      remainingThisWeek: rows.length === MAX_PER_RUN ? "more queued for tomorrow's run" : 0,
      errors: errors.slice(0, 20),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Weekly email job failed" }, { status: 500 });
  }
}
