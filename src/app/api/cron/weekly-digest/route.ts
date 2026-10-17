import { NextResponse } from "next/server";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import { isEmailConfigured, sendEmail } from "@/lib/email";
import { weeklyDigestEmail, trialEndedNudgeEmail, type DigestSegment } from "@/lib/weekly-digest";
import { unsubscribeUrl } from "@/lib/unsubscribe";
import { registrationStatus } from "@/content/exam-calendar";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

// ---------------------------------------------------------------------------
// Weekly digest job.
//
// Runs daily rather than weekly on purpose. Every user gets at most ONE email
// per ISO week, but the list is split across the week in daily batches, which
// keeps each run inside Vercel's function limit and inside Brevo's free tier
// (300 sends/day). On a small list the whole thing completes in a single run;
// as the list grows it simply spreads itself out.
//
// Idempotency: "weekly_digest_sends" has a primary key on
// (user_id, kind, period_key). A retry, a double invocation or a manual run
// can never email the same person twice for the same week.
//
// Auth: same contract as the reminder job — Vercel cron sends
// "Authorization: Bearer $CRON_SECRET". With no secret set the job fails
// closed rather than becoming a public email cannon.
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
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "exam_registered" (
      "user_id" text PRIMARY KEY,
      "sitting" text,
      "created_at" timestamptz NOT NULL DEFAULT now()
    )
  `);
  tablesEnsured = true;
}

/** Monday-based ISO week key, e.g. "2026-W42". One digest per key per user. */
function isoWeekKey(d: Date): string {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((t.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${t.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

/** Run tasks with bounded concurrency so a big batch can't blow the timeout. */
async function mapLimit<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let cursor = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (cursor < items.length) {
      const i = cursor++;
      out[i] = await fn(items[i]);
    }
  });
  await Promise.all(workers);
  return out;
}

type Row = {
  id: string;
  name: string;
  email: string;
  is_premium: boolean;
  trial_ends_at: string | null;
  total: number;
  correct: number;
  week: number;
  last_at: string | null;
  already_registered: boolean;
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
    // Same deadline for everyone in this run; the per-user copy only differs by
    // whether they have already told us they registered.
    const examStatus = registrationStatus(now);
    const weekAgo = new Date(now.getTime() - 7 * 86400000);
    const newAccountCutoff = new Date(now.getTime() - 48 * 3600000);

    // ---- 1) People whose trial ended and who never picked up a plan --------
    // At most once a fortnight, and it replaces that week's digest so nobody
    // receives two emails in one week.
    const lapsedTrials = (
      await db.execute(sql`
        SELECT u.id, u.name, u.email,
               (r.user_id IS NOT NULL) AS already_registered
        FROM users u
        LEFT JOIN exam_registered r ON r.user_id = u.id
        WHERE u.is_admin = false
          AND u.is_premium = false
          AND u.premium_trial_ends_at IS NOT NULL
          AND u.premium_trial_ends_at < ${now.toISOString()}::timestamptz
          AND u.created_at < ${newAccountCutoff.toISOString()}::timestamptz
          AND NOT EXISTS (SELECT 1 FROM email_optouts e WHERE lower(e.email) = lower(u.email))
          AND NOT EXISTS (
            SELECT 1 FROM weekly_digest_sends d
            WHERE d.user_id = u.id AND d.kind = 'trial_nudge'
              AND d.sent_at > ${new Date(now.getTime() - 14 * 86400000).toISOString()}::timestamptz
          )
          AND NOT EXISTS (
            SELECT 1 FROM weekly_digest_sends d
            WHERE d.user_id = u.id AND d.kind = 'weekly' AND d.period_key = ${weekKey}
          )
        ORDER BY u.premium_trial_ends_at ASC
        LIMIT ${Math.floor(MAX_PER_RUN / 4)}
      `)
    ).rows as unknown as { id: string; name: string; email: string; already_registered: boolean }[];

    let nudged = 0;
    const errors: string[] = [];

    await mapLimit(lapsedTrials, CONCURRENCY, async (u) => {
      try {
        const { subject, html } = trialEndedNudgeEmail({
          userId: u.id,
          name: u.name,
          registration: examStatus,
          alreadyRegistered: Boolean(u.already_registered),
        });
        await sendEmail(u.email, subject, html, { unsubscribeUrl: unsubscribeUrl(APP_URL, u.id) || undefined });
        await db.execute(sql`
          INSERT INTO weekly_digest_sends (user_id, kind, period_key)
          VALUES (${u.id}, 'trial_nudge', ${weekKey})
          ON CONFLICT DO NOTHING
        `);
        // Also burn this week's digest slot so they are not emailed twice.
        await db.execute(sql`
          INSERT INTO weekly_digest_sends (user_id, kind, period_key)
          VALUES (${u.id}, 'weekly', ${weekKey})
          ON CONFLICT DO NOTHING
        `);
        nudged += 1;
      } catch (e) {
        errors.push(`nudge:${u.id}: ${e instanceof Error ? e.message : "send failed"}`);
      }
    });

    // ---- 2) The digest itself ---------------------------------------------
    const rows = (
      await db.execute(sql`
        SELECT u.id,
               u.name,
               u.email,
               u.is_premium,
               u.premium_trial_ends_at AS trial_ends_at,
               COALESCE(a.total, 0)::int   AS total,
               COALESCE(a.correct, 0)::int AS correct,
               COALESCE(a.week, 0)::int    AS week,
               a.last_at,
               (r.user_id IS NOT NULL)     AS already_registered
        FROM users u
        LEFT JOIN exam_registered r ON r.user_id = u.id
        LEFT JOIN (
          SELECT user_id,
                 COUNT(*)::int                                   AS total,
                 COUNT(*) FILTER (WHERE is_correct)::int          AS correct,
                 COUNT(*) FILTER (WHERE attempted_at > ${weekAgo.toISOString()}::timestamptz)::int AS week,
                 MAX(attempted_at)                               AS last_at
          FROM question_attempts
          GROUP BY user_id
        ) a ON a.user_id = u.id
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

    const sent: Record<string, number> = { never_started: 0, lapsed: 0, active: 0 };

    await mapLimit(rows, CONCURRENCY, async (u) => {
      try {
        const total = Number(u.total) || 0;
        const correct = Number(u.correct) || 0;
        const thisWeek = Number(u.week) || 0;
        const lastAt = u.last_at ? new Date(u.last_at) : null;
        const daysSince = lastAt ? Math.floor((now.getTime() - lastAt.getTime()) / 86400000) : null;

        const segment: DigestSegment =
          total === 0 ? "never_started" : thisWeek === 0 ? "lapsed" : "active";

        const { subject, html } = weeklyDigestEmail({
          userId: u.id,
          name: u.name,
          segment,
          stats: {
            totalAnswered: total,
            correct,
            answeredThisWeek: thisWeek,
            daysSinceLastAnswer: daysSince,
          },
          isPremium: Boolean(u.is_premium),
          registration: examStatus,
          alreadyRegistered: Boolean(u.already_registered),
        });

        await sendEmail(u.email, subject, html, { unsubscribeUrl: unsubscribeUrl(APP_URL, u.id) || undefined });
        await db.execute(sql`
          INSERT INTO weekly_digest_sends (user_id, kind, period_key)
          VALUES (${u.id}, 'weekly', ${weekKey})
          ON CONFLICT DO NOTHING
        `);
        sent[segment] += 1;
      } catch (e) {
        errors.push(`digest:${u.id}: ${e instanceof Error ? e.message : "send failed"}`);
      }
    });

    const totalSent = nudged + sent.never_started + sent.lapsed + sent.active;

    return NextResponse.json({
      ok: true,
      week: weekKey,
      examRegistration: {
        sitting: examStatus.sitting.label,
        closingDate: examStatus.sitting.registrationCloses,
        urgency: examStatus.urgency,
      },
      sent: { total: totalSent, trialNudge: nudged, ...sent },
      batchLimit: MAX_PER_RUN,
      remainingThisWeek: rows.length === MAX_PER_RUN ? "more queued for tomorrow's run" : 0,
      errors: errors.slice(0, 20),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Weekly digest job failed" }, { status: 500 });
  }
}
