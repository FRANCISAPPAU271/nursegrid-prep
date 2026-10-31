import { NextResponse } from "next/server";
import { z } from "zod";
import { isEmailConfigured, sendPasswordResetEmail } from "@/lib/email";
import { issueResetToken, resetUrl } from "@/lib/password-reset";
import { recordEvent, ensureOpsTables } from "@/lib/ops";
import { db } from "@/db";
import { sql } from "drizzle-orm";

/**
 * Ask for a reset link by email.
 *
 * The response is deliberately identical whether or not the address has an
 * account. Varying it would turn this endpoint into a way to check who has
 * signed up — which for an exam-prep product aimed at students is nobody's
 * business but theirs.
 */

const bodySchema = z.object({
  email: z.string().trim().toLowerCase().email("Enter a valid email"),
});

const SAME_ANSWER = {
  ok: true,
  message:
    "If that address has a NurseGrid Prep account, a reset link is on its way. It is valid for 24 hours. Check spam if it is not there in a minute.",
};

/**
 * Is outbound email currently broken for everyone?
 *
 * This exists because of the worst kind of support loop: the send fails, the
 * endpoint answers "check spam" because it must not reveal whether the address
 * has an account, the student waits for a message that was never sent, and
 * nobody learns anything.
 *
 * The check is global on purpose - a failure recorded for any address in the
 * last quarter of an hour - so telling the user email is degraded reveals
 * nothing about their own account.
 */
async function emailIsDegraded(): Promise<boolean> {
  try {
    const rows = (
      await db.execute(sql`
        SELECT count(*)::int AS n FROM ops_events
         WHERE kind = 'email_send_failed' AND created_at > now() - interval '15 minutes'
      `)
    ).rows as unknown as { n: number }[];
    return (rows[0]?.n ?? 0) > 0;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Enter a valid email" }, { status: 422 });
  }

  if (!isEmailConfigured()) {
    // Say so plainly - the recovery path being offline is an operational
    // problem the operator needs to see, not a secret.
    return NextResponse.json(
      { error: "Email is not configured on this server, so reset links cannot be sent. Please contact support on WhatsApp." },
      { status: 503 },
    );
  }

  // Read before attempting, so the answer is the same whether or not this
  // particular address has an account.
  const degraded = await emailIsDegraded();
  if (degraded) {
    return NextResponse.json({
      ok: true,
      degraded: true,
      message:
        "Email is having trouble right now, so a link may not arrive. Use \"Forgot password\" and your security question instead, or sign in with your phone number.",
    });
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://nursegridprep.com";

  try {
    const issued = await issueResetToken(parsed.data.email);
    if (issued) {
      try {
        await sendPasswordResetEmail(parsed.data.email, issued.name, resetUrl(appUrl, issued.token));
      } catch (error) {
        // The caller still gets the neutral answer - telling the internet that
        // an address exists is worse than one person retrying. But the failure
        // is recorded, because a reset that silently never arrives is exactly
        // how someone ends up locked out with no explanation.
        await recordEvent(
          "email_send_failed",
          `password reset: ${error instanceof Error ? error.message : "unknown"}`,
        );
      }
    }
  } catch (error) {
    // Logged, never surfaced: the caller still gets the neutral answer above.
    console.error("password reset request failed", error);
  }

  return NextResponse.json(SAME_ANSWER);
}
