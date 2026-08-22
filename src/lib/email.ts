import "server-only";
import { Resend } from "resend";

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

const FROM_ADDRESS = process.env.EMAIL_FROM || "NurseGrid Prep <onboarding@resend.dev>";

export async function sendPasswordResetEmail(to: string, name: string, resetUrl: string) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: FROM_ADDRESS,
    to,
    subject: "Reset your NurseGrid Prep password",
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; color: #0f172a;">
        <div style="background:#059669;height:6px;border-radius:6px;margin-bottom:24px;"></div>
        <h1 style="font-size: 20px;">Reset your password</h1>
        <p>Hi ${name || "there"},</p>
        <p>We received a request to reset your NurseGrid Prep password. Click the button below to choose a new one. This link expires in 1 hour.</p>
        <p style="text-align:center;margin:32px 0;">
          <a href="${resetUrl}" style="background:#059669;color:#fff;text-decoration:none;padding:12px 24px;border-radius:10px;font-weight:600;display:inline-block;">
            Reset password
          </a>
        </p>
        <p style="color:#64748b;font-size:13px;">If you didn't request this, you can safely ignore this email — your password will stay the same.</p>
        <p style="color:#94a3b8;font-size:12px;word-break:break-all;">Or copy this link: ${resetUrl}</p>
      </div>
    `,
  });
}
