import "server-only";
import { QUESTION_COUNT_LABEL } from "@/lib/question-count";
import { unsubscribeUrl } from "@/lib/unsubscribe";

/**
 * The weekly email — deliberately one generic email, the same for everybody.
 *
 * Two things only:
 *   1. A general reminder to subscribe.
 *   2. What's new.
 *
 * There is no per-user branching in here: no free/paid variants, no dates, no
 * segments. That keeps the template readable and means a change to the wording
 * is a one-line edit rather than three.
 *
 * To announce something, add a line to UPDATES below. It goes out next week.
 */

// ---------------------------------------------------------------------------
// What's new. Newest first, plain sentences. Written for a student, not for us:
// "more questions on X" rather than which files changed.
// ---------------------------------------------------------------------------
export const UPDATES: string[] = [
    "Every one of the 35 course modules now has its own question set, written for that exact topic.",
    "New scenario questions across the renal, neurological, gastrointestinal and musculoskeletal modules.",
    "Fresh questions in respiratory and endocrine, each with a full rationale.",
    "619 questions now carry an original diagram — label it yourself, then check.",
];

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://nursegridprep.com";

function firstName(name: string): string {
    const trimmed = (name || "").trim();
    if (!trimmed) return "there";
    return trimmed.split(/\s+/)[0];
}

export function weeklyDigestEmail(args: {
    userId: string;
    name: string;
    updates?: string[];
}): { subject: string; html: string } {
    const { userId, name } = args;
    const updates = args.updates ?? UPDATES;
    const who = firstName(name);
    const unsub = unsubscribeUrl(APP_URL, userId);

    const updateRows = updates
        .map(
            (line) => `<tr>
        <td style="padding:0 8px 10px 0;vertical-align:top;color:#059669;font-weight:800;">•</td>
        <td style="padding:0 0 10px;color:#334155;font-size:13.5px;line-height:1.65;">${line}</td>
      </tr>`,
        )
        .join("");

    const html = `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:480px;margin:0 auto;color:#0f172a;">
    <div style="background:#059669;height:6px;border-radius:6px;margin-bottom:24px;"></div>

    <h1 style="font-size:20px;margin:0 0 8px;">Hi ${who},</h1>
    <p style="font-size:14px;line-height:1.7;color:#334155;margin:0 0 22px;">
      Here's what's new at NurseGrid this week.
    </p>

    <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:14px;padding:18px 20px;">
      <p style="margin:0 0 12px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#047857;">New this week</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">${updateRows}</table>
    </div>

    <div style="border:1px solid #e2e8f0;border-radius:14px;padding:20px;margin-top:22px;">
      <p style="margin:0 0 6px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#64748b;">Keep your access going</p>
      <p style="margin:0;font-size:13.5px;line-height:1.65;color:#334155;">
        Subscribing keeps all ${QUESTION_COUNT_LABEL} questions, every rationale, the mock exams
        and the readiness scoring open. One payment for the period you choose — never auto-billed.
      </p>
      <p style="text-align:left;margin:18px 0 0;">
        <a href="${APP_URL}/dashboard/billing" style="background:#059669;color:#fff;text-decoration:none;padding:12px 24px;border-radius:10px;font-weight:700;display:inline-block;">Subscribe</a>
      </p>
    </div>

    <hr style="border:none;border-top:1px solid #e2e8f0;margin:28px 0 12px;" />
    <p style="color:#94a3b8;font-size:12px;line-height:1.6;margin:0;">
      NurseGrid Prep — exam prep for Ghana's NMC licensing exam ·
      <a href="${APP_URL}" style="color:#059669;">nursegridprep.com</a>
    </p>
    ${unsub
            ? `<p style="color:#94a3b8;font-size:11px;line-height:1.6;margin-top:10px;">
             You get this because you created a NurseGrid Prep account. One email a week, nothing else.
             <a href="${unsub}" style="color:#94a3b8;text-decoration:underline;">Unsubscribe</a>
           </p>`
            : ""}
  </div>`;

    return { subject: `${who}, here's what's new at NurseGrid`, html };
}
