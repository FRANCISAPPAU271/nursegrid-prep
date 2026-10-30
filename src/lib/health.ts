import "server-only";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { isEmailConfigured, sendEmail } from "@/lib/email";
import { ensureOpsTables } from "@/lib/ops";

/**
 * The daily self-check, as a function rather than a schedule.
 *
 * It began life as its own cron entry, which was a mistake: Vercel's Hobby plan
 * allows only two cron jobs per project and this one already used both. Rather
 * than bet the monitoring on a plan tier, the checks run at the end of the
 * existing reminders job — one fewer moving part, and it works on any plan.
 *
 * The HTTP route still exists so it can be triggered by hand, but nothing
 * depends on it being scheduled.
 */

function isoWeekKey(d: Date): string {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((t.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${t.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

export type Problem = { code: string; detail: string };

export type HealthReport = {
  ok: boolean;
  checkedAt: string;
  week: string;
  sentThisWeek: number;
  problems: Problem[];
};

export async function runHealthChecks(): Promise<HealthReport> {
  await ensureOpsTables();

    const now = new Date();
    const week = isoWeekKey(now);
    const problems: Problem[] = [];

    // 1. Did this week's digest reach anyone? Checked from Monday 08:00 only,
    //    because the job legitimately has not run before 07:00.
    const minutesIntoWeek = ((now.getUTCDay() || 7) - 1) * 1440 + now.getUTCHours() * 60 + now.getUTCMinutes();
    const digestRows = (
      await db.execute(sql`
        SELECT count(*)::int AS n FROM weekly_digest_sends WHERE period_key = ${week} AND kind = 'weekly'
      `)
    ).rows as unknown as { n: number }[];
    const sentThisWeek = digestRows[0]?.n ?? 0;
    if (minutesIntoWeek > 8 * 60 && sentThisWeek === 0) {
      problems.push({
        code: "digest_sent_nothing",
        detail: `No weekly digest has been recorded for ${week}, and it is past Monday 08:00 UTC. Either the cron did not run or every send failed.`,
      });
    }

    // 2. What the last run reported.
    const lastRun = (
      await db.execute(sql`
        SELECT ran_at, accepted, failed, quota_halted FROM digest_runs ORDER BY ran_at DESC LIMIT 1
      `)
    ).rows as unknown as { ran_at: string; accepted: number; failed: number; quota_halted: string | null }[];

    if (lastRun[0]) {
      const run = lastRun[0];
      if (run.failed > 0) {
        problems.push({
          code: "digest_partial_failure",
          detail: `The last digest run (${new Date(run.ran_at).toISOString()}) accepted ${run.accepted} and failed ${run.failed}.`,
        });
      }
      if (run.quota_halted) {
        problems.push({
          code: "digest_quota_halted",
          detail: `The last digest run stopped early: ${run.quota_halted}`,
        });
      }
    }

    // 3. Transactional mail that never left - resets and receipts.
    const failures24h = (
      await db.execute(sql`
        SELECT count(*)::int AS n FROM ops_events
         WHERE kind = 'email_send_failed' AND created_at > now() - interval '24 hours'
      `)
    ).rows as unknown as { n: number }[];
    if ((failures24h[0]?.n ?? 0) > 0) {
      problems.push({
        code: "transactional_mail_failed",
        detail: `${failures24h[0].n} transactional email(s) failed in the last 24 hours — password resets or receipts may not have reached people.`,
      });
    }

    // 4. Nobody has signed in for a week: either the product is down, or the
    //    login path is refusing everybody.
    const logins = (
      await db.execute(sql`
        SELECT count(*)::int AS n FROM login_events WHERE created_at > now() - interval '7 days'
      `)
    ).rows as unknown as { n: number }[];
    if ((logins[0]?.n ?? 0) === 0) {
      problems.push({
        code: "no_logins",
        detail: "No successful sign-in has been recorded in seven days.",
      });
    }

    // 5. Accounts with no way back in.
    //
    //    Reserved and demonstration domains are excluded on purpose: the seeded
    //    rows at @example.com are not people, and counting them would make this
    //    alert fire every single day about accounts that do not exist. An alert
    //    that is always on is an alert nobody reads, which is precisely the
    //    failure this whole route exists to prevent.
    //
    //    What is counted: an address on a real-looking domain that cannot
    //    receive (the owner's own abandoned @nursegrid.app setup is the case
    //    that prompted this), or one the provider has already hard-bounced.
    const stranded = (
      await db.execute(sql`
        SELECT count(*)::int AS n FROM users u
         WHERE u.security_question IS NULL
           AND lower(split_part(u.email,'@',2)) NOT IN ('example.com','example.org','example.net','test','invalid','localhost')
           AND (
             lower(split_part(u.email,'@',2)) = 'nursegrid.app'
             OR EXISTS (SELECT 1 FROM email_bounces b WHERE lower(b.email) = lower(u.email))
           )
      `)
    ).rows as unknown as { n: number }[];
    if ((stranded[0]?.n ?? 0) > 0) {
      problems.push({
        code: "accounts_without_recovery",
        detail: `${stranded[0].n} account(s) have no security question and an unreachable email address, so they cannot recover access without help.`,
      });
    }

  return { ok: problems.length === 0, checkedAt: now.toISOString(), week, sentThisWeek, problems };
}

/**
 * Email the operator, but only when something is wrong. A daily all-clear
 * trains the reader to ignore the alert, which defeats the purpose.
 */
export async function alertIfNeeded(report: HealthReport): Promise<boolean> {
  if (report.problems.length === 0) return false;

  const to = process.env.ALERT_EMAIL || process.env.EMAIL_REPLY_TO || "";
  if (!to || !isEmailConfigured()) return false;

  const list = report.problems
    .map((p) => `<li style="margin:0 0 10px"><b>${p.code}</b><br>${p.detail}</li>`)
    .join("");
  const html = `<h2 style="font-size:18px;margin:0 0 12px">NurseGrid Prep — something needs your attention</h2>
    <ul style="padding-left:18px;font-size:14px;line-height:1.6;color:#334155">${list}</ul>
    <p style="font-size:13px;color:#64748b">Checked ${report.checkedAt} (week ${report.week}, ${report.sentThisWeek} digest emails recorded this week).</p>
    <p style="font-size:13px;color:#64748b">This is a database check. It proves what the system recorded, not what was delivered.</p>`;

  try {
    await sendEmail(to, `NurseGrid Prep: ${report.problems.length} issue(s) need attention`, html);
    return true;
  } catch (error) {
    console.error("health alert could not be sent", error);
    return false;
  }
}
