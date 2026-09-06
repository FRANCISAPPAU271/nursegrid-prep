import { NextResponse } from "next/server";
import { db } from "@/db";
import { users, subscriptions } from "@/db/schema";
import { and, eq, gt, isNotNull, lt, sql } from "drizzle-orm";
import { isEmailConfigured, sendEmail, trialEndingEmail, subscriptionExpiringEmail } from "@/lib/email";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

// ---------------------------------------------------------------------------
// Daily reminder job. Called by Vercel Cron (see vercel.json) or manually.
// Auth: Vercel cron sends  Authorization: Bearer ${CRON_SECRET}  when the
// CRON_SECRET env var is set on the project.
//
// Two reminder types, deduplicated via the email_reminders tracking table so
// nobody is emailed twice for the same event:
//   • trial_ending      — free-trial premium ends within the next 24 hours
//   • subscription_3d   — paid plan ends within 3 days
//   • subscription_1d   — paid plan ends within 1 day (second, urgent nudge)
// ---------------------------------------------------------------------------

let tableEnsured = false;
async function ensureReminderTable() {
  if (tableEnsured) return;
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "email_reminders" (
      "user_id" text NOT NULL,
      "kind" text NOT NULL,
      "period_end" timestamptz NOT NULL,
      "sent_at" timestamptz NOT NULL DEFAULT now(),
      PRIMARY KEY ("user_id", "kind", "period_end")
    )
  `);
  tableEnsured = true;
}

async function alreadySent(userId: string, kind: string, periodEnd: Date): Promise<boolean> {
  const result = await db.execute(sql`
    SELECT 1 FROM "email_reminders"
    WHERE "user_id" = ${userId} AND "kind" = ${kind} AND "period_end" = ${periodEnd.toISOString()}
    LIMIT 1
  `);
  return result.rows.length > 0;
}

async function markSent(userId: string, kind: string, periodEnd: Date) {
  await db.execute(sql`
    INSERT INTO "email_reminders" ("user_id", "kind", "period_end")
    VALUES (${userId}, ${kind}, ${periodEnd.toISOString()})
    ON CONFLICT DO NOTHING
  `);
}

export async function GET(request: Request) {
  try {
    // Authorize: accept Vercel cron's bearer secret; refuse everything else
    // when a secret is configured. Without CRON_SECRET set, refuse always
    // (fail closed) unless email isn't configured anyway.
    const secret = process.env.CRON_SECRET;
    const auth = request.headers.get("authorization");
    if (!secret || auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!isEmailConfigured()) {
      return NextResponse.json({ ok: true, skipped: "email not configured (set BREVO_API_KEY + EMAIL_FROM)" });
    }

    await ensureReminderTable();

    const now = new Date();
    const in24h = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    const in3d = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);

    let sent = 0;
    const errors: string[] = [];

    // ---- 1) Trials ending within 24 hours ----
    const trialUsers = await db
      .select({ id: users.id, name: users.name, email: users.email, trialEnd: users.premiumTrialEndsAt })
      .from(users)
      .where(
        and(
          eq(users.isPremium, true),
          isNotNull(users.premiumTrialEndsAt),
          gt(users.premiumTrialEndsAt, now),
          lt(users.premiumTrialEndsAt, in24h),
        ),
      )
      .limit(100);

    // Skip trial users who actually have an active paid subscription.
    const activeSubs = await db
      .select({ userId: subscriptions.userId, periodEnd: subscriptions.currentPeriodEnd })
      .from(subscriptions)
      .where(eq(subscriptions.status, "active"));
    const paidUserIds = new Set(activeSubs.map((s) => s.userId));

    for (const u of trialUsers) {
      if (!u.trialEnd || paidUserIds.has(u.id)) continue;
      if (await alreadySent(u.id, "trial_ending", u.trialEnd)) continue;
      try {
        const { subject, html } = trialEndingEmail(u.name);
        await sendEmail(u.email, subject, html);
        await markSent(u.id, "trial_ending", u.trialEnd);
        sent += 1;
      } catch (e) {
        errors.push(`trial:${u.id}: ${e instanceof Error ? e.message : "send failed"}`);
      }
    }

    // ---- 2) Paid subscriptions expiring within 3 days (and a 1-day nudge) ----
    const expiring = await db
      .select({
        userId: subscriptions.userId,
        periodEnd: subscriptions.currentPeriodEnd,
        name: users.name,
        email: users.email,
      })
      .from(subscriptions)
      .innerJoin(users, eq(subscriptions.userId, users.id))
      .where(
        and(
          eq(subscriptions.status, "active"),
          isNotNull(subscriptions.currentPeriodEnd),
          gt(subscriptions.currentPeriodEnd, now),
          lt(subscriptions.currentPeriodEnd, in3d),
        ),
      )
      .limit(200);

    for (const s of expiring) {
      if (!s.periodEnd) continue;
      const msLeft = s.periodEnd.getTime() - now.getTime();
      const daysLeft = Math.ceil(msLeft / (24 * 60 * 60 * 1000));
      const kind = daysLeft <= 1 ? "subscription_1d" : "subscription_3d";
      if (await alreadySent(s.userId, kind, s.periodEnd)) continue;
      try {
        const endText = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(s.periodEnd);
        const { subject, html } = subscriptionExpiringEmail(s.name, daysLeft, endText);
        await sendEmail(s.email, subject, html);
        await markSent(s.userId, kind, s.periodEnd);
        sent += 1;
      } catch (e) {
        errors.push(`sub:${s.userId}: ${e instanceof Error ? e.message : "send failed"}`);
      }
    }

    return NextResponse.json({ ok: true, sent, checkedTrials: trialUsers.length, checkedSubs: expiring.length, errors });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Reminder job failed" }, { status: 500 });
  }
}
