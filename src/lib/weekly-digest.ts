import "server-only";
import { QUESTION_COUNT_LABEL } from "@/lib/question-count";
import { unsubscribeUrl, examRegisteredUrl } from "@/lib/unsubscribe";
import { NMC_PORTAL_URL, type RegistrationStatus } from "@/content/exam-calendar";

/**
 * The weekly email.
 *
 * Every registered account gets one a week. Each one carries the same two
 * things the user asked for — a reminder to REGISTER for the NMC licensing
 * examination, and a "new this week" updates block — wrapped around copy that
 * depends on what the student has actually done in the app.
 *
 * The registration block never invents a deadline. When the Council has not
 * published a closing date, it says so and sends the student to the official
 * portal. See src/content/exam-calendar.ts.
 *
 * "New updates" comes from CHANGELOG below. Add an entry at the top when you
 * ship something and it appears in next week's email automatically.
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
    body: "Every lesson is wired to questions written for that exact topic, so a lesson quiz no longer pulls in questions from somewhere else.",
  },
  {
    title: "Better on a phone held upright",
    body: "Tables fold into readable cards and nothing needs rotating. Practise one-handed on the trotro.",
  },
  {
    title: "Weekly progress email",
    body: "You're reading it. Every week we'll send your numbers plus anything to know before the exam.",
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

function cta(href: string, label: string, colour = "#059669"): string {
  return `<p style="text-align:center;margin:26px 0;">
      <a href="${href}" style="background:${colour};color:#fff;text-decoration:none;padding:13px 26px;border-radius:10px;font-weight:700;display:inline-block;">${label}</a>
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

// ---------------------------------------------------------------------------
// The registration reminder — the part that appears in every single email.
// ---------------------------------------------------------------------------
function registrationBlock(args: {
  userId: string;
  status: RegistrationStatus;
  alreadyRegistered: boolean;
}): string {
  const { status, userId, alreadyRegistered } = args;
  const sitting = status.sitting.label;

  // Already told us they've registered: acknowledge it, don't nag, and point at
  // the next step instead — checking the timetable and admission status.
  if (alreadyRegistered) {
    return `<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:14px;padding:18px;margin:0 0 8px;">
        <p style="margin:0 0 6px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#1d4ed8;">Registration</p>
        <p style="margin:0 0 6px;font-size:13.5px;line-height:1.65;color:#1e3a8a;">
          You've told us you're registered for the <b>${sitting}</b> sitting — good. Keep your index number
          and results slip somewhere safe, and check the portal for your exam timetable and centre
          once the Council publishes it.
        </p>
        <p style="margin:4px 0 0;">
          <a href="${NMC_PORTAL_URL}" style="color:#1d4ed8;font-weight:700;font-size:13px;text-decoration:underline;">Check my timetable on the N&amp;MC portal →</a>
        </p>
      </div>`;
  }

  let headline: string;
  let detail: string;
  let bg = "#fffbeb";
  let border = "#fde68a";
  let labelColour = "#b45309";

  if (status.urgency === "imminent") {
    headline = `Registration closes in ${status.daysLeft} ${status.daysLeft === 1 ? "day" : "days"}`;
    detail = `The closing date for the <b>${sitting}</b> licensing examination is
      <b>${status.sitting.registrationCloses}</b>. If you have not registered, do it today — the
      Council does not accept late entries.`;
  } else if (status.urgency === "soon") {
    headline = `${status.daysLeft} days left to register`;
    detail = `Registration for the <b>${sitting}</b> sitting closes on
      <b>${status.sitting.registrationCloses}</b>. Worth clearing this week rather than leaving it.`;
  } else if (status.urgency === "plenty") {
    headline = `Register for the ${sitting} examination`;
    detail = `Registration is open and closes on <b>${status.sitting.registrationCloses}</b>. Doing it
      early means one less thing to think about closer to the paper.`;
  } else if (status.urgency === "closed") {
    bg = "#fef2f2";
    border = "#fecaca";
    labelColour = "#b91c1c";
    headline = `Registration for ${sitting} has closed`;
    detail = `If you have not registered, contact the Council directly — do not assume you can enter late.
      The next sitting is listed on the N&MC portal.`;
  } else {
    // No published deadline. Say so plainly rather than guessing.
    headline = `Register for the ${sitting} NMC examination`;
    detail = `The Council has not published the closing date for this sitting yet. Registration runs
      through the N&MC Candidates Portal — check it, register as soon as it opens, and don't rely on
      word of mouth for the deadline.`;
  }

  const markLink = examRegisteredUrl(APP_URL, userId);
  const mark = markLink
    ? `<p style="margin:10px 0 0;font-size:11.5px;color:#92400e;">
         Already registered? <a href="${markLink}" style="color:#92400e;text-decoration:underline;">Tell us</a>
         and we'll stop reminding you.
       </p>`
    : "";

  return `<div style="background:${bg};border:1px solid ${border};border-radius:14px;padding:18px;margin:0 0 8px;">
      <p style="margin:0 0 6px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:${labelColour};">Exam registration</p>
      <p style="margin:0 0 6px;font-size:15px;font-weight:800;line-height:1.35;">${headline}</p>
      <p style="margin:0;font-size:13.5px;line-height:1.65;color:#334155;">${detail}</p>
      <p style="margin:12px 0 0;">
        <a href="${NMC_PORTAL_URL}" style="background:${labelColour};color:#fff;text-decoration:none;padding:10px 18px;border-radius:9px;font-weight:700;font-size:13px;display:inline-block;">Open the N&amp;MC portal →</a>
      </p>
      ${mark}
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
  segment: DigestSegment;
  stats: DigestStats;
  isPremium: boolean;
  registration: RegistrationStatus;
  alreadyRegistered: boolean;
  updates?: DigestUpdates;
}): { subject: string; html: string } {
  const { userId, name, segment, stats, registration, alreadyRegistered } = args;
  const updates = args.updates ?? CHANGELOG.slice(0, 3);
  const who = firstName(name);
  const sitting = registration.sitting.label;

  const reg = registrationBlock({ userId, status: registration, alreadyRegistered });

  // The subject line carries both halves of what the email is for.
  const regSubject = alreadyRegistered
    ? `Updates`
    : registration.urgency === "imminent"
      ? `${registration.daysLeft} days left to register`
      : registration.urgency === "soon"
        ? `${registration.daysLeft} days to register`
        : `Register for the ${sitting} exam`;

  // --- Never started -------------------------------------------------------
  if (segment === "never_started") {
    return {
      subject: `${regSubject} · ${who}, start your ${QUESTION_COUNT_LABEL} questions`,
      html: shell(
        `<h1 style="font-size:20px;margin:0 0 16px;">Two things this week, ${who}.</h1>
         ${reg}
         <div style="margin-top:22px;">
           <p style="margin:0 0 8px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#047857;">Your prep</p>
           <p style="font-size:14px;line-height:1.7;color:#334155;margin:0;">
             Your account is ready but you haven't answered a question yet. Registration and readiness are
             two separate deadlines — the exam does not care how early you registered, only how ready you
             are on the day.
           </p>
           <p style="font-size:14px;line-height:1.7;color:#334155;margin:10px 0 0;">
             Five questions takes about four minutes. That's one trotro ride.
           </p>
           ${cta(`${APP_URL}/dashboard/questions`, "Answer your first 5 questions")}
         </div>
         ${updatesBlock(updates)}`,
        userId,
      ),
    };
  }

  // --- Lapsed --------------------------------------------------------------
  if (segment === "lapsed") {
    const gap = stats.daysSinceLastAnswer ?? 0;
    return {
      subject: `${regSubject} · ${who}, pick your prep back up`,
      html: shell(
        `<h1 style="font-size:20px;margin:0 0 16px;">Two things this week, ${who}.</h1>
         ${reg}
         <div style="margin-top:22px;">
           <p style="margin:0 0 8px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#047857;">Your prep</p>
           <p style="font-size:14px;line-height:1.7;color:#334155;margin:0;">
             You've answered <b>${stats.totalAnswered.toLocaleString()}</b> questions so far
             (${Math.round((stats.correct / Math.max(stats.totalAnswered, 1)) * 100)}% correct).
             ${gap >= 21 ? `It's been ${gap} days since the last one.` : "You last practised a few days ago."}
           </p>
           <p style="font-size:14px;line-height:1.7;color:#334155;margin:10px 0 0;">
             Your progress, bookmarks and readiness history are exactly where you left them. Ten questions
             today is enough to make this week count.
           </p>
           ${cta(`${APP_URL}/dashboard/questions`, "Continue where I stopped")}
         </div>
         ${updatesBlock(updates)}`,
        userId,
      ),
    };
  }

  // --- Active --------------------------------------------------------------
  const accuracy = Math.round((stats.correct / Math.max(stats.totalAnswered, 1)) * 100);
  return {
    subject: `${regSubject} · ${stats.answeredThisWeek} questions this week`,
    html: shell(
      `<h1 style="font-size:20px;margin:0 0 16px;">Good week, ${who}. Two things.</h1>
       ${reg}
       <div style="margin-top:22px;">
         <p style="margin:0 0 10px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#047857;">Your prep</p>
         <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 14px;">
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
         <p style="font-size:14px;line-height:1.7;color:#334155;margin:0;">
           Consistency beats cramming on this exam. A short set today is worth more than four hours the
           night before.
         </p>
         ${cta(`${APP_URL}/dashboard/questions`, "Do today's set")}
       </div>
       ${updatesBlock(updates)}`,
      userId,
    ),
  };
}

/**
 * Separate, quieter email for people whose trial ended without taking a plan.
 * Sent at most once a fortnight, and it still carries the registration
 * reminder because that deadline is theirs regardless of what they pay us.
 */
export function trialEndedNudgeEmail(args: {
  userId: string;
  name: string;
  registration: RegistrationStatus;
  alreadyRegistered: boolean;
}): { subject: string; html: string } {
  const who = firstName(args.name);
  const reg = registrationBlock({
    userId: args.userId,
    status: args.registration,
    alreadyRegistered: args.alreadyRegistered,
  });

  return {
    subject: `Your premium access has ended · ${who}`,
    html: shell(
      `<h1 style="font-size:20px;margin:0 0 16px;">Your trial has ended, ${who}</h1>
       ${reg}
       <div style="margin-top:22px;">
         <p style="font-size:14px;line-height:1.7;color:#334155;margin:0;">
           Your 3 free days of full premium are over, so the question bank is back to the free preview
           set. Your progress and bookmarks are saved.
         </p>
         <p style="font-size:14px;line-height:1.7;color:#334155;margin:10px 0 0;">
           If NurseGrid was helping, you can pick up an access period with one MoMo payment — one time,
           never auto-billed. If it wasn't, that's fair too, and the task board stays free either way.
         </p>
         ${cta(`${APP_URL}/dashboard/billing`, "See how to continue")}
       </div>
       <p style="color:#64748b;font-size:12px;line-height:1.6;">
         Not interested? Ignore this and we'll stop nudging you about it.
       </p>`,
      args.userId,
    ),
  };
}
