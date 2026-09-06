import "server-only";
import { Resend } from "resend";

// ---------------------------------------------------------------------------
// Email delivery. Two providers supported, checked in order:
//   1. Brevo (BREVO_API_KEY) — free tier sends 300 emails/day and only needs
//      a verified SENDER ADDRESS (e.g. a Gmail), no custom domain required.
//      That fits NurseGrid today (nursegrid.vercel.app is not a verifiable
//      domain for DNS-based providers).
//   2. Resend (RESEND_API_KEY) — kept as a fallback for when a custom domain
//      exists later.
// EMAIL_FROM sets the sender, e.g.  NurseGrid Prep <you@gmail.com>
// ---------------------------------------------------------------------------

const FROM_ADDRESS = process.env.EMAIL_FROM || "NurseGrid Prep <onboarding@resend.dev>";

export function isEmailConfigured(): boolean {
  return Boolean(process.env.BREVO_API_KEY || process.env.RESEND_API_KEY);
}

function parseFrom(from: string): { name: string; email: string } {
  const match = from.match(/^(.*)<(.+)>\s*$/);
  if (match) return { name: match[1].trim().replace(/^"|"$/g, "") || "NurseGrid Prep", email: match[2].trim() };
  return { name: "NurseGrid Prep", email: from.trim() };
}

export async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  if (process.env.BREVO_API_KEY) {
    const sender = parseFrom(FROM_ADDRESS);
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        sender,
        to: [{ email: to }],
        subject,
        htmlContent: html,
      }),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`Brevo send failed (${res.status}): ${body.slice(0, 200)}`);
    }
    return;
  }

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({ from: FROM_ADDRESS, to, subject, html });
    return;
  }

  throw new Error("No email provider configured (set BREVO_API_KEY or RESEND_API_KEY)");
}

// ---------------------------------------------------------------------------
// Shared layout + templates
// ---------------------------------------------------------------------------

const APP_URL = "https://nursegrid.vercel.app";

function layout(inner: string): string {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; color: #0f172a;">
      <div style="background:#059669;height:6px;border-radius:6px;margin-bottom:24px;"></div>
      ${inner}
      <hr style="border:none;border-top:1px solid #e2e8f0;margin:28px 0 12px;" />
      <p style="color:#94a3b8;font-size:12px;">
        NurseGrid Prep — exam prep for Ghana's NMC licensing exam · <a href="${APP_URL}" style="color:#059669;">nursegrid.vercel.app</a>
      </p>
    </div>
  `;
}

function button(href: string, label: string): string {
  return `
    <p style="text-align:center;margin:28px 0;">
      <a href="${href}" style="background:#059669;color:#fff;text-decoration:none;padding:12px 24px;border-radius:10px;font-weight:600;display:inline-block;">
        ${label}
      </a>
    </p>
  `;
}

export function trialEndingEmail(name: string): { subject: string; html: string } {
  return {
    subject: "⏳ Your free premium trial ends tomorrow",
    html: layout(`
      <h1 style="font-size:20px;">Your trial ends tomorrow, ${name || "there"} ⏳</h1>
      <p>Your 3-day full-premium trial on NurseGrid Prep is almost over. Right now you still have access to
      all 6,600+ NMC-style questions, mock exams, adaptive testing, and your Readiness Score.</p>
      <p><b>Keep everything from just $5 (about GH₵ 80) for 4 full months</b> — one MoMo payment, never auto-billed.</p>
      ${button(`${APP_URL}/dashboard/billing`, "Keep my premium access")}
      <p style="color:#64748b;font-size:13px;">If you let the trial end, your account stays free with 40 practice questions — your progress is saved either way.</p>
    `),
  };
}

export function subscriptionExpiringEmail(
  name: string,
  daysLeft: number,
  endDateText: string,
): { subject: string; html: string } {
  const urgency = daysLeft <= 1 ? "ends tomorrow" : `ends in ${daysLeft} days`;
  return {
    subject: daysLeft <= 1 ? "🚨 Your NurseGrid plan ends tomorrow" : `Your NurseGrid plan ends in ${daysLeft} days`,
    html: layout(`
      <h1 style="font-size:20px;">Your premium plan ${urgency}</h1>
      <p>Hi ${name || "there"},</p>
      <p>Your NurseGrid Prep premium access ends on <b>${endDateText}</b>. After that, your account returns to the
      free tier (40 questions) — your progress, streak, and readiness history stay saved.</p>
      <p><b>Renew now so your exam prep never skips a beat</b> — from $5 (about GH₵ 80) for 4 months, paid with MoMo in minutes.</p>
      ${button(`${APP_URL}/dashboard/billing`, "Renew my plan")}
      <p style="color:#64748b;font-size:13px;">Questions? Just reply to this email or message us on WhatsApp from the app.</p>
    `),
  };
}

export async function sendPasswordResetEmail(to: string, name: string, resetUrl: string) {
  await sendEmail(
    to,
    "Reset your NurseGrid Prep password",
    layout(`
      <h1 style="font-size: 20px;">Reset your password</h1>
      <p>Hi ${name || "there"},</p>
      <p>We received a request to reset your NurseGrid Prep password. Click the button below to choose a new one. This link expires in 1 hour.</p>
      ${button(resetUrl, "Reset password")}
      <p style="color:#64748b;font-size:13px;">If you didn't request this, you can safely ignore this email — your password will stay the same.</p>
      <p style="color:#94a3b8;font-size:12px;word-break:break-all;">Or copy this link: ${resetUrl}</p>
    `),
  );
}
