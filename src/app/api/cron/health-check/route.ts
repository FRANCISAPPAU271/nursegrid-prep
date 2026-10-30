import { NextResponse } from "next/server";
import { runHealthChecks, alertIfNeeded } from "@/lib/health";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * Manual trigger for the daily self-check.
 *
 * The checks themselves run at the end of the reminders cron, because Vercel's
 * Hobby plan allows only two scheduled jobs and both were already in use. This
 * endpoint exists so the same checks can be run on demand without waiting for
 * the next day.
 */
export async function GET(request: Request) {
  try {
    const secret = process.env.CRON_SECRET;
    const auth = request.headers.get("authorization");
    if (!secret || auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const report = await runHealthChecks();
    const dryRun = new URL(request.url).searchParams.get("dryRun") === "1";
    const alerted = dryRun ? false : await alertIfNeeded(report);

    return NextResponse.json({
      ...report,
      alerted,
      alertTo: (process.env.ALERT_EMAIL || process.env.EMAIL_REPLY_TO || "")
        ? (process.env.ALERT_EMAIL || process.env.EMAIL_REPLY_TO || "").replace(/^(.).*(@.*)$/, "$1…$2")
        : null,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Health check failed" }, { status: 500 });
  }
}
