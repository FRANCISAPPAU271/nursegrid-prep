import { NextResponse } from "next/server";
import { z } from "zod";
import { isEmailConfigured, sendEmail } from "@/lib/email";
import { issueSignInToken, signInUrl, SIGNIN_TTL_MINUTES } from "@/lib/signin-link";

export const dynamic = "force-dynamic";

/**
 * "Email me a sign-in link" - passwordless entry.
 *
 * Answers identically for every address, so it cannot be used to discover who
 * has an account. The link is the only thing that differs, and only its owner
 * sees it.
 */

const schema = z.object({ email: z.string().trim().toLowerCase().email("Enter a valid email") });

function emailHtml(url: string, minutes: number): { subject: string; html: string; text: string } {
  const subject = "Your NurseGrid Prep sign-in link";
  const text = [
    "Sign in to NurseGrid Prep",
    "",
    `Open this link to sign in: ${url}`,
    "",
    `It works once and expires in ${minutes} minutes.`,
    "If you did not ask for this, ignore this message - nobody can sign in without the link.",
  ].join("\n");

  const html = `<!doctype html><html><body style="margin:0;padding:0;background:#f6f8f7;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#0f172a">
  <div style="max-width:520px;margin:0 auto;padding:32px 20px">
    <div style="font-size:18px;font-weight:700;letter-spacing:-0.01em;padding-bottom:24px">🩺 NurseGrid Prep</div>
    <div style="background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:28px">
      <h1 style="margin:0 0 12px;font-size:20px">Sign in — no password needed</h1>
      <p style="margin:0 0 22px;font-size:14px;line-height:1.6;color:#334155">
        Tap the button and you are in. You do not need to remember or type a password.
      </p>
      <p style="margin:0 0 22px">
        <a href="${url}" style="display:inline-block;background:#059669;color:#fff;text-decoration:none;font-weight:600;font-size:14px;padding:12px 20px;border-radius:10px">Sign in to NurseGrid Prep</a>
      </p>
      <p style="margin:0 0 8px;font-size:13px;line-height:1.6;color:#64748b">The link works once and expires in ${minutes} minutes.</p>
      <p style="margin:0;font-size:13px;line-height:1.6;color:#64748b">Did not ask for this? Ignore it — nobody can get in without the link.</p>
    </div>
  </div>
</body></html>`;
  return { subject, html, text };
}

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Enter a valid email" }, { status: 422 });
  }

  if (!isEmailConfigured()) {
    return NextResponse.json(
      { error: "Email is not configured on this server, so sign-in links cannot be sent. Use your password, or your security question." },
      { status: 503 },
    );
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://nursegridprep.com";

  try {
    const issued = await issueSignInToken(parsed.data.email);
    if (issued) {
      const mail = emailHtml(signInUrl(appUrl, issued.token), SIGNIN_TTL_MINUTES);
      await sendEmail(parsed.data.email, mail.subject, mail.html, { text: mail.text });
    }
  } catch (error) {
    console.error("sign-in link request failed", error);
  }

  return NextResponse.json({
    ok: true,
    message: `If that address has an account, a sign-in link is on its way. It lasts ${SIGNIN_TTL_MINUTES} minutes and works once.`,
  });
}
