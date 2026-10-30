import { NextResponse } from "next/server";
import { z } from "zod";
import { isEmailConfigured, sendPasswordResetEmail } from "@/lib/email";
import { issueResetToken, resetUrl } from "@/lib/password-reset";

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
  message: "If that address has a NurseGrid Prep account, a reset link is on its way. Check spam if it is not there in a minute.",
};

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

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://nursegridprep.com";

  try {
    const issued = await issueResetToken(parsed.data.email);
    if (issued) {
      await sendPasswordResetEmail(parsed.data.email, issued.name, resetUrl(appUrl, issued.token));
    }
  } catch (error) {
    // Logged, never surfaced: the caller still gets the neutral answer above.
    console.error("password reset request failed", error);
  }

  return NextResponse.json(SAME_ANSWER);
}
