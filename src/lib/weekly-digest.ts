import "server-only";
import { QUESTION_COUNT_LABEL } from "@/lib/question-count";
import { unsubscribeUrl } from "@/lib/unsubscribe";

/**
 * The weekly email.
 *
 * Deliberately simple. Two things, every week, to every registered account:
 *
 *   1. A general reminder to subscribe (or keep their access going).
 *   2. What's new in the app.
 *
 * No deadlines, no exam calendar, no per-user segments to maintain — those
 * were more machinery than the message needed. One template, one CHANGELOG
 * list, one unsubscribe link.
 *
 * "New updates" comes from CHANGELOG below. Add an entry at the top when you
 * ship something and it appears in next week's email automatically.
 */

export type DigestUpdates = { title: string; body: string }[];

// ---------------------------------------------------------------------------
// What's new. Newest first. Keep entries short — this is an email, not a blog.
// ---------------------------------------------------------------------------
export const CHANGELOG: DigestUpdates = [
  {
    title: "28 course modules now have their own questions",
    body: "Every lesson is wired to questions written for that exact topic, so a lesson quiz no longer pulls in questions from somewhere else.",
  },
  {
    title: "Better on a phone held upright",
    body: "Tables fold into readable cards and nothing needs rotating. Practise one-handed on the trotro.",
  },
  {
    title: "Weekly email",
    body: "You're reading it. Every week we'll send what's new, plus a note about your access.",
  },
];

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://nursegridprep.com";

function shell(inner: string, userId: string): string {
  const unsub = unsubscribeUrl(APP_URL, userId);
  const unsubBlock = unsub
    ? `<p style="color:#94a3b8;font-size:11px;line-height:1.6;margin-top:10px;">
         You get this because you created a NurseGrid Prep account. One email a week, nothing else.
         <a href="${unsub}" style="color:#94a3b8;text-decoration:underline;">Unsubscribe</a>
       </p>`
    : "";

  return `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:480px;margin:0 auto;color:#0f172a;">
    <div style="background:#059669;height:6px;border-radius:6px;margin-bottom:24px;"></div>
    ${inner}
    <hr style="border:none;border-top:1px solid #e2e8f0;margin:28px 0 12px;" />
    <p style="color:#94a3b8;font-size:12px;line-height:1.6;">
      NurseGrid Prep — exam prep for Ghana's NMC licensing exam ·
      <a href="${APP_URL}" style="color:#059669;">nursegridprep.com</a>
    </p>
    ${unsubBlock}
  </div>`;
}

function cta(href: string, label: string): string {
  return `<p style="text-align:center;margin:26px 0;">
      <a href="${href}" style="background:#059669;color:#fff;text-decoration:none;padding:13px 26px;border-radius:10px;font-weight:700;display:inline-block;">${label}</a>
    </p>`;
}

function updatesBlock(updates: DigestUpdates): string {
  if (!updates.length) return "";
  const rows = updates
    .map(
      (u) => `<tr>
        <td style="padding:0 0 14px;">
          <p style="margin:0;font-weight:700;font-size:14px;">${u.title}</p>
          <p style="margin:4px 0 0;color:#475569;font-size:13px;line-height:1.6;">${u.body}</p>
        </td>
      </tr>`,
    )
    .join("");
  return `<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:14px;padding:18px;margin:24px 0 0;">
      <p style="margin:0 0 12px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#047857;">New this week</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">${rows}</table>
    </div>`;
}

function firstName(name: string): string {
  const trimmed = (name || "").trim();
  if (!trimmed) return "there";
  return trimmed.split(/\s+/)[0];
}

export function weeklyDigestEmail(args: {
  userId: string;
  name: string;
  isPremium: boolean;
  accessEndsOn: string | null;
  updates?: DigestUpdates;
}): { subject: string; html: string } {
  const { userId, name, isPremium, accessEndsOn } = args;
  const updates = args.updates ?? CHANGELOG.slice(0, 3);
  const who = firstName(name);

  // ---- The subscribe block: the same ask either way -----------------------
  const subscribe = isPremium
    ? `<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:14px;padding:20px;">
         <p style="margin:0 0 6px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#047857;">Your access</p>
         <p style="margin:0;font-size:15px;font-weight:800;line-height:1.4;">Full access is active${accessEndsOn ? ` until ${accessEndsOn}` : ""}</p>
         <p style="margin:8px 0 0;font-size:13.5px;line-height:1.65;color:#334155;">
           Everything is unlocked — all ${QUESTION_COUNT_LABEL} questions, mock exams, readiness scoring
           and the strategy library. Extend whenever you like; it's one payment, never auto-billed.
         </p>
         ${cta(`${APP_URL}/dashboard/billing`, "Manage or extend my access")}
       </div>`
    : `<div style="background:#fffbeb;border:1px solid #fde68a;border-radius:14px;padding:20px;">
         <p style="margin:0 0 6px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#b45309;">Your access</p>
         <p style="margin:0;font-size:15px;font-weight:800;line-height:1.4;">You're on the free preview</p>
         <p style="margin:8px 0 0;font-size:13.5px;line-height:1.65;color:#334155;">
           Subscribing unlocks all ${QUESTION_COUNT_LABEL} questions, every rationale, mock exams,
           readiness scoring and the strategy library. One payment for the access period you choose —
           never auto-billed, no card needed to start.
         </p>
         ${cta(`${APP_URL}/dashboard/billing`, "See the access options")}
       </div>`;

  return {
    subject: isPremium
      ? `What's new on NurseGrid this week`
      : `${who}, unlock the full question bank`,
    html: shell(
      `<h1 style="font-size:20px;margin:0 0 8px;">Hi ${who},</h1>
       <p style="font-size:14px;line-height:1.7;color:#334155;margin:0 0 20px;">
         A short weekly note: what's new in NurseGrid, and a reminder about your access.
       </p>
       ${subscribe}
       ${updatesBlock(updates)}`,
      userId,
    ),
  };
}
