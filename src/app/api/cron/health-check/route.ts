import { NextResponse } from "next/server";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import { isEmailConfigured, sendEmail } from "@/lib/email";
import { ensureOpsTables } from "@/lib/ops";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * Daily self-check, and the only thing in this project that tells anybody the
 * system is broken before a student does.
 *
 * Every failure so far was found by a customer: 173 emails accepted and
 * discarded, 44 more throttled while the ledger said "sent", and a password
 * reset that 404'd because the route was never written. None of them produced a
 * signal the operator could see. This is that signal.
 *
 * It reports only what it can prove from the database - it never claims mail was
 * delivered, because with a send-only provider key delivery is not observable
 * from here. Silence means "nothing detected wrong", not "everything worked".
 */

function isoWeekKey(d: Date): string {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((t.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return `${t.getUTCFullYear()}-W${String(week).padStart(2, "0")}`;
}

type Problem = { code: string; detail: string };

export async function GET(request: Request) {
  try {
    const secret = process.env.CRON_SECRET;
    const auth = request.headers.get("authorization");
    if (!secret || auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const params = new URL(request.url).searchParams;
    const dryRun = params.get("dryRun") === "1";

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

    // 5. Accounts with no way back in: no security question and an address that
    //    is known to bounce or is on a reserved domain.
    const stranded = (
      await db.execute(sql`
        SELECT count(*)::int AS n FROM users u
         WHERE u.security_question IS NULL
           AND (
             lower(split_part(u.email,'@',2)) IN ('example.com','example.org','example.net','test','invalid','localhost','nursegrid.app')
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

    // Alert only when there is something to say. A daily all-clear trains the
    // reader to ignore it, which is the failure mode this exists to avoid.
    const to = process.env.ALERT_EMAIL || process.env.EMAIL_REPLY_TO || "";
    const report = {
      ok: problems.length === 0,
      checkedAt: now.toISOString(),
      week,
      sentThisWeek,
      problems,
      alerted: false as boolean,
      alertTo: to ? to.replace(/^(.).*(@.*)$/, "$1…$2") : null,
    };

    if (problems.length > 0 && to && isEmailConfigured() && !dryRun) {
      const list = problems.map((p) => `<li style="margin:0 0 10px"><b>${p.code}</b><br>${p.detail}</li>`).join("");
      const html = `<h2 style="font-size:18px;margin:0 0 12px">NurseGrid Prep — something needs your attention</h2>
        <ul style="padding-left:18px;font-size:14px;line-height:1.6;color:#334155">${list}</ul>
        <p style="font-size:13px;color:#64748b">Checked ${now.toISOString()} (week ${week}, ${sentThisWeek} digest emails recorded this week).</p>
        <p style="font-size:13px;color:#64748b">This is a database check. It proves what the system recorded, not what was delivered.</p>`;
      try {
        await sendEmail(to, `NurseGrid Prep: ${problems.length} issue(s) need attention`, html);
        report.alerted = true;
      } catch (error) {
        // If the alert itself cannot be sent, say so in the response rather
        // than pretending the operator has been told.
        console.error("health alert could not be sent", error);
      }
    }

    return NextResponse.json(report);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Health check failed" }, { status: 500 });
  }
}
