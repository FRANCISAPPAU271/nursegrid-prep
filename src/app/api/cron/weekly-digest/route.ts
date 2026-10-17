import { NextResponse } from "next/server";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import { isEmailConfigured, sendEmail } from "@/lib/email";
import { weeklyDigestEmail } from "@/lib/weekly-digest";
import { unsubscribeUrl } from "@/lib/unsubscribe";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

// ---------------------------------------------------------------------------
// Weekly email job: one general reminder to subscribe, plus what's new.
//
// The email itself is identical for everyone, so this route only has to answer
// one question: who has not had this week's email yet? No segments, no
// per-user copy, no subscription lookup.
//
// Runs daily at 07:00 UTC and meters the list across batches, so a long list
// never trips the function timeout or Brevo's 300/day free tier. Each person
// still gets at most ONE email per ISO week, enforced by the primary key on
// weekly_digest_sends — a retry or a manual run cannot double-send.
//
// Fails closed if CRON_SECRET is unset, so it can never become a public
// mail cannon.
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

type Row = { id: string; name: string; email: string };

/**
 * Preflight check, used by `?dryRun=1`.
 *
 * The failure this exists for: a dead provider key used to surface as two
 * hundred identical errors in the response, buried under one another, with
 * nothing saying "the credential is the problem". This asks the provider
 * directly and answers in one line.
 */
async function checkProvider(): Promise<{
  provider: "brevo" | "resend" | "none";
  keyValid: boolean | null;
  senderVerified: boolean | null;
  detail: string;
}> {
  const from = process.env.EMAIL_FROM || "";
  const fromAddress = (from.match(/<([^>]+)>/)?.[1] ?? from).trim();

  if (process.env.BREVO_API_KEY) {
    const key = process.env.BREVO_API_KEY.trim();
    const looksRight = key.startsWith("xkeysib-");
    try {
      const acct = await fetch("https://api.brevo.com/v3/account", {
        headers: { "api-key": key, Accept: "application/json" },
      });
      if (acct.status === 401) {
        return {
          provider: "brevo",
          keyValid: false,
          senderVerified: null,
          detail:
            "Brevo rejected the key (401 Key not found). Generate a new one at Brevo → SMTP & API → API Keys." +
            (looksRight ? "" : " The stored value also does not look like an API key — those start with 'xkeysib-'."),
        };
      }
      if (!acct.ok) {
        return { provider: "brevo", keyValid: null, senderVerified: null, detail: `Brevo account check returned ${acct.status}.` };
      }

      const senders = await fetch("https://api.brevo.com/v3/senders", {
        headers: { "api-key": key, Accept: "application/json" },
      });
      let senderVerified: boolean | null = null;
      if (senders.ok) {
        const list = (await senders.json().catch(() => ({}))) as { senders?: { email?: string; active?: boolean }[] };
        const match = (list.senders ?? []).find((s) => (s.email ?? "").toLowerCase() === fromAddress.toLowerCase());
        senderVerified = Boolean(match?.active);
      }
      return {
        provider: "brevo",
        keyValid: true,
        senderVerified,
        detail: senderVerified
          ? `Key is valid and ${fromAddress} is a verified sender.`
          : senderVerified === false
            ? `Key is valid, but ${fromAddress || "(EMAIL_FROM unset)"} is not a verified, active sender in Brevo.`
            : "Key is valid; could not read the sender list.",
      };
    } catch (e) {
      return { provider: "brevo", keyValid: null, senderVerified: null, detail: `Could not reach Brevo: ${e instanceof Error ? e.message : "unknown"}` };
    }
  }

  if (process.env.RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/domains", {
        headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
      });
      return {
        provider: "resend",
        keyValid: res.ok ? true : res.status === 401 ? false : null,
        senderVerified: null,
        detail: res.ok ? "Resend key is valid." : `Resend returned ${res.status}.`,
      };
    } catch (e) {
      return { provider: "resend", keyValid: null, senderVerified: null, detail: `Could not reach Resend: ${e instanceof Error ? e.message : "unknown"}` };
    }
  }

  return { provider: "none", keyValid: null, senderVerified: null, detail: "No email provider configured." };
}

export async function GET(request: Request) {
  try {
    const secret = process.env.CRON_SECRET;
    const auth = request.headers.get("authorization");
    if (!secret || auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const dryRun = new URL(request.url).searchParams.get("dryRun") === "1";

    if (!isEmailConfigured()) {
      return NextResponse.json({ ok: true, skipped: "email not configured (set BREVO_API_KEY + EMAIL_FROM)" });
    }

    await ensureTables();

    // `?dryRun=1` reports exactly what a real run would do — how many people are
    // due, and whether the provider would accept the message — without sending.
    if (dryRun) {
      const countRow = (
        await db.execute(sql`
          SELECT count(*)::int AS due
          FROM users u
          WHERE u.is_admin = false
            AND u.created_at < ${new Date(Date.now() - 48 * 3600000).toISOString()}::timestamptz
            AND NOT EXISTS (SELECT 1 FROM email_optouts e WHERE lower(e.email) = lower(u.email))
            AND NOT EXISTS (
              SELECT 1 FROM weekly_digest_sends d
              WHERE d.user_id = u.id AND d.kind = 'weekly' AND d.period_key = ${isoWeekKey(new Date())}
            )
        `)
      ).rows[0] as unknown as { due: number };

      const provider = await checkProvider();
      return NextResponse.json({
        ok: provider.keyValid === true && provider.senderVerified !== false,
        dryRun: true,
        week: isoWeekKey(new Date()),
        accountsDue: countRow?.due ?? 0,
        provider,
      });
    }

    const now = new Date();
    const weekKey = isoWeekKey(now);
    const newAccountCutoff = new Date(now.getTime() - 48 * 3600000);

    const rows = (
      await db.execute(sql`
        SELECT u.id, u.name, u.email
        FROM users u
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

    let sent = 0;
    const errors: string[] = [];

    await mapLimit(rows, CONCURRENCY, async (u) => {
      try {
        const { subject, html } = weeklyDigestEmail({ userId: u.id, name: u.name });

        await sendEmail(u.email, subject, html, {
          unsubscribeUrl: unsubscribeUrl(APP_URL, u.id) || undefined,
        });

        await db.execute(sql`
          INSERT INTO weekly_digest_sends (user_id, kind, period_key)
          VALUES (${u.id}, 'weekly', ${weekKey})
          ON CONFLICT DO NOTHING
        `);

        sent += 1;
      } catch (e) {
        errors.push(`digest:${u.id}: ${e instanceof Error ? e.message : "send failed"}`);
      }
    });

    return NextResponse.json({
      ok: true,
      week: weekKey,
      sent,
      batchLimit: MAX_PER_RUN,
      moreQueuedForTomorrow: rows.length === MAX_PER_RUN,
      errors: errors.slice(0, 20),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Weekly email job failed" }, { status: 500 });
  }
}
