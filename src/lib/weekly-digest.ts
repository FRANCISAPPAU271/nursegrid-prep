import "server-only";
import { QUESTION_COUNT_LABEL } from "@/lib/question-count";
import { unsubscribeUrl } from "@/lib/unsubscribe";

/**
 * The weekly digest.
 *
 * One email a week to every registered account, built from what the user has
 * actually done rather than a single broadcast. A student who has never
 * answered a question needs a different message from one who practises daily,
 * and both need a reason to open it — so the copy is segmented on real attempt
 * data (see the cron route) and every variant ends with the same small ask:
 * come back and do a few questions.
 *
 * "New updates" comes from CHANGELOG below. Add an entry at the top when you
 * ship something; the digest automatically shows the newest few.
 */

export type DigestSegment = "never_started" | "lapsed" | "active";

export type DigestStats = {
  totalAnswered: number;
  correct: number;
  answeredThisWeek: number;
  daysSinceLastAnswer: number | null;
};

export type DigestUpdates = { title: string; body: string }[];

// ---------------------------------------------------------------------------
// What's new. Newest first. Keep entries short — this is an email, not a blog.
// ---------------------------------------------------------------------------
export const CHANGELOG: DigestUpdates = [
  {
    title: "28 course modules now have their own questions",
    body: "Every lesson in every course is wired to questions written for that exact topic, so a lesson quiz no longer pulls in questions from somewhere else.",
  },
  {
    title: "Works better on a phone in portrait",
    body: "Tables fold into readable cards and the layout no longer needs rotating. Practise one-handed on the trotro.",
  },
  {
    title: "Faster billing screen",
    body: "MoMo and card checkout cleaned up, with a clearer payment history.",
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
  return `<div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:14px;padding:18px;margin:24px 0;">
      <p style="margin:0 0 12px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#047857;">New this week</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">${rows}</table>
    </div>`;
}

function firstName(name: string): string {
  const trimmed = (name || "").trim();
  if (!trimmed) return "there";
  return trimmed.split(/\s+/)[0];
}

/**
 * Build the digest for one user.
 * Returns null when there is nothing worth sending (safety valve).
 */
export function weeklyDigestEmail(args: {
  userId: string;
  name: string;
  segment: DigestSegment;
  stats: DigestStats;
  isPremium: boolean;
  trialEnded: boolean;
  updates?: DigestUpdates;
}): { subject: string; html: string } {
  const { userId, name, segment, stats, isPremium, trialEnded } = args;
  const updates = args.updates ?? CHANGELOG.slice(0, 3);
  const who = firstName(name);

  // --- Never started: the account exists, the work hasn't begun ------------
  if (segment === "never_started") {
    return {
      subject: `${who}, your ${QUESTION_COUNT_LABEL} questions are still waiting`,
      html: shell(
        `<h1 style="font-size:20px;margin:0 0 14px;">You're registered. Now let's get you started, ${who}.</h1>
         <p style="font-size:14px;line-height:1.7;color:#334155;">
           Your NurseGrid Prep account is ready, but you haven't answered a question yet — and the
           licensing exam does not care how early you registered, only how ready you are on the day.
         </p>
         <p style="font-size:14px;line-height:1.7;color:#334155;">
           Five questions takes about four minutes. That's a trotro ride. Start there and the habit
           builds itself.
         </p>
         ${cta(`${APP_URL}/dashboard/questions`, "Answer your first 5 questions")}
         ${updatesBlock(updates)}`,
        userId,
      ),
    };
  }

  // --- Lapsed: has practised before, has stopped ---------------------------
  if (segment === "lapsed") {
    const gap = stats.daysSinceLastAnswer ?? 0;
    return {
      subject:
        gap >= 21
          ? `${who}, it's been ${gap} days — your streak is recoverable`
          : `${who}, pick up where you left off`,
      html: shell(
        `<h1 style="font-size:20px;margin:0 0 14px;">Your questions haven't gone anywhere, ${who}.</h1>
         <p style="font-size:14px;line-height:1.7;color:#334155;">
           You've answered <b>${stats.totalAnswered.toLocaleString()}</b> questions so far
           (${Math.round((stats.correct / Math.max(stats.totalAnswered, 1)) * 100)}% correct).
           ${gap >= 21 ? `It's been ${gap} days since the last one.` : "You last practised a few days ago."}
         </p>
         <p style="font-size:14px;line-height:1.7;color:#334155;">
           You don't restart from zero — your progress, bookmarks and readiness history are exactly
           where you left them. Ten questions today is enough to make this week count.
         </p>
         ${cta(`${APP_URL}/dashboard/questions`, "Continue where I stopped")}
         ${updatesBlock(updates)}`,
        userId,
      ),
    };
  }

  // --- Active: keep the momentum, show the numbers -------------------------
  const accuracy = Math.round((stats.correct / Math.max(stats.totalAnswered, 1)) * 100);
  return {
    subject: `${who}, ${stats.answeredThisWeek} questions this week — keep it going`,
    html: shell(
      `<h1 style="font-size:20px;margin:0 0 14px;">Good week, ${who}. Here's where you stand.</h1>
       <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 18px;">
         <tr>
           <td style="width:33%;padding:12px;background:#f0fdf4;border-radius:12px;text-align:center;">
             <p style="margin:0;font-size:22px;font-weight:800;color:#047857;">${stats.answeredThisWeek}</p>
             <p style="margin:2px 0 0;font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;">this week</p>
           </td>
           <td style="width:8px;"></td>
           <td style="width:33%;padding:12px;background:#f0fdf4;border-radius:12px;text-align:center;">
             <p style="margin:0;font-size:22px;font-weight:800;color:#047857;">${accuracy}%</p>
             <p style="margin:2px 0 0;font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;">accuracy</p>
           </td>
           <td style="width:8px;"></td>
           <td style="width:33%;padding:12px;background:#f0fdf4;border-radius:12px;text-align:center;">
             <p style="margin:0;font-size:22px;font-weight:800;color:#047857;">${stats.totalAnswered.toLocaleString()}</p>
             <p style="margin:2px 0 0;font-size:11px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;">all time</p>
           </td>
         </tr>
       </table>
       <p style="font-size:14px;line-height:1.7;color:#334155;">
         Consistency beats cramming on this exam. A short set today is worth more than a four-hour
         session the night before.
       </p>
       ${cta(`${APP_URL}/dashboard/questions`, "Do today's set")}
       ${updatesBlock(updates)}`,
      userId,
    ),
  };
}

/**
 * Separate, deliberately quiet email for people whose trial has ended and who
 * are not on a paid plan. Sent at most once a fortnight so it reads as a
 * reminder rather than a chase.
 */
export function trialEndedNudgeEmail(args: { userId: string; name: string }): { subject: string; html: string } {
  const who = firstName(args.name);
  return {
    subject: `${who}, your premium access has ended`,
    html: shell(
      `<h1 style="font-size:20px;margin:0 0 14px;">Your trial has ended, ${who}</h1>
       <p style="font-size:14px;line-height:1.7;color:#334155;">
         Your 3 free days of full premium are over, so the question bank is back to the free preview
         set. Your progress and bookmarks are saved.
       </p>
       <p style="font-size:14px;line-height:1.7;color:#334155;">
         If NurseGrid was helping, you can pick up an access period with one MoMo payment — one time,
         never auto-billed. If it wasn't, that's fair too, and the task board stays free either way.
       </p>
       ${cta(`${APP_URL}/dashboard/billing`, "See how to continue")}
       <p style="color:#64748b;font-size:12px;line-height:1.6;">
         Not interested? Ignore this and we'll stop nudging you about it.
       </p>`,
      args.userId,
    ),
  };
}
