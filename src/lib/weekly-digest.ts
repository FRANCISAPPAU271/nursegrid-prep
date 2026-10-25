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

// ---------------------------------------------------------------------------
// Live teaching. Same three sessions every week, so this is a permanent part of
// the email rather than a line in UPDATES — an update is announced once and
// then removed, and a weekly class that vanishes from the email after a week
// stops being useful.
// ---------------------------------------------------------------------------
export const LIVE_CLASSES: { day: string; time: string }[] = [
    { day: "Wednesday", time: "5pm to 6pm" },
    { day: "Friday", time: "5pm to 6pm" },
    { day: "Saturday", time: "5pm to 6pm" },
];

/**
 * WhatsApp study group for registered students.
 *
 * Kept as a raw URL with real ampersands and escaped at render time, because
 * the HTML needs `&amp;` in an attribute while the plain-text part needs `&`.
 * Hard-coding the entities would silently break the link in the text version.
 */
export const STUDY_GROUP_URL =
    "https://chat.whatsapp.com/Gz8GSdk2mSz7eIdHcMSEUb?s=cl&p=a&mlu=4&ilr=4";

/**
 * Wrap prose for the plain-text alternative.
 *
 * 74 columns is the old convention for a reason: it survives narrow windows and
 * every quoting style in every client. Unbroken tokens — URLs, in practice — are
 * left whole rather than split, because a broken unsubscribe link is useless.
 *
 * Continuation lines are indented to sit under the text, not under the marker,
 * so a wrapped bullet still looks like one bullet.
 */
function wrap(text: string, opts?: { width?: number; first?: string; rest?: string }): string {
    const width = opts?.width ?? 74;
    const first = opts?.first ?? "";
    const rest = opts?.rest ?? "";
    const words = text.split(/\s+/).filter(Boolean);
    const lines: string[] = [];
    let line = "";
    let prefix = first;
    for (const word of words) {
        if (line && prefix.length + line.length + 1 + word.length > width) {
            lines.push(prefix + line);
            line = word;
            prefix = rest;
        } else {
            line = line ? `${line} ${word}` : word;
        }
    }
    if (line) lines.push(prefix + line);
    return lines.join("\n");
}

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
}): { subject: string; html: string; text: string } {
    const { userId, name } = args;
    const updates = args.updates ?? UPDATES;
    const who = firstName(name);
    const unsub = unsubscribeUrl(APP_URL, userId);

    // Inbox preview text. Without one, clients show the first line of the body,
    // which reads as a repetition of the subject.
    const preheader = `What's new this week, and where your access stands.`;

    // Deliberately plain.
    //
    // This message was landing in Gmail's Promotions tab, and its design was a
    // large part of why: a coloured header bar, a tinted card with an uppercase
    // kicker, and a filled green "Subscribe" button are the visual grammar of a
    // marketing campaign. Gmail's classifier reads exactly those signals —
    // templates, buttons, multiple links — and files them accordingly.
    //
    // So this is written the way a person would write to one person: a plain
    // paragraph, a short list, one link to the dashboard, a sign-off. No cards,
    // no buttons, no tracked banner. The subscribe prompt survives as a
    // sentence, because the email's job is still to be useful — but it no
    // longer looks like an advertisement, because it isn't one.
    //
    // The `role="presentation"` table that used to lay out the bullets is gone
    // with the card; a plain <ul> renders correctly in every client that
    // matters and is far less template-like.
    const bullets = updates
        .map(
            (line) =>
                `<li style="margin:0 0 10px;">${line}</li>`,
        )
        .join("");

    // Live teaching. Same plain <ul> as the updates above: it is a schedule, so
    // a list is the honest structure, and it keeps the message looking like a
    // note rather than a campaign.
    const classBullets = LIVE_CLASSES.map(
        (c, i) =>
            `<li style="margin:${i === LIVE_CLASSES.length - 1 ? "0" : "0 0 6px"};">${c.day}, ${c.time}</li>`,
    ).join("");

    // `&` must be `&amp;` inside an HTML attribute; the raw URL is kept
    // elsewhere for the plain-text part.
    const studyGroupHref = STUDY_GROUP_URL.replace(/&/g, "&amp;");

    const html = `
  <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:520px;margin:0 auto;color:#0f172a;font-size:15px;line-height:1.7;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;height:0;width:0;">${preheader}</div>

    <p style="margin:0 0 16px;">Hi ${who},</p>
    <p style="margin:0 0 16px;">Here's what's new at NurseGrid this week:</p>

    <ul style="margin:0 0 18px;padding-left:22px;">${bullets}</ul>

    <p style="margin:0 0 8px;">Live teaching runs every week — join any session:</p>
    <ul style="margin:0 0 18px;padding-left:22px;">${classBullets}</ul>

    <p style="margin:0 0 16px;">
      If you have registered, join the study group:
      <a href="${studyGroupHref}" style="color:#047857;">Join the study group on WhatsApp</a>.
    </p>

    <p style="margin:0 0 16px;">
      Everything is where you left it — your dashboard is at
      <a href="${APP_URL}/dashboard" style="color:#047857;">${APP_URL.replace(/^https?:\/\//, "")}/dashboard</a>.
      If you want to keep every question and mock exam open, you can choose a plan from the
      billing page while you are there.
    </p>

    <p style="margin:0 0 24px;">— NurseGrid Prep</p>

    <p style="color:#94a3b8;font-size:12px;line-height:1.6;margin:0 0 8px;">
      If this arrived in your Promotions tab, drag it into Primary once — Gmail
      remembers, and every later one follows it.
    </p>

    <p style="color:#94a3b8;font-size:12px;line-height:1.6;margin:0;">
      You get this because you created a NurseGrid Prep account. One email a week, nothing else.${
          unsub
              ? `
      <a href="${unsub}" style="color:#94a3b8;text-decoration:underline;">Unsubscribe</a>`
              : ""
      }
    </p>
  </div>`;

    // The plain-text alternative. Spam filters treat HTML-only mail with
    // suspicion, and some people read in clients that never render HTML.
    const text = [
        `Hi ${who},`,
        "",
        "Here's what's new at NurseGrid this week:",
        "",
        ...updates.map((u) => wrap(u, { width: 74, first: "  - ", rest: "    " })),
        "",
        "Live teaching runs every week - join any session:",
        ...LIVE_CLASSES.map((c) =>
            wrap(`${c.day}, ${c.time}`, { width: 74, first: "  - ", rest: "    " }),
        ),
        "",
        wrap(`If you have registered, join the study group: ${STUDY_GROUP_URL}`),
        "",
        wrap(
            `Everything is where you left it - your dashboard is at ${APP_URL}/dashboard. If you want to keep every question (${QUESTION_COUNT_LABEL}) and the mock exams open, you can choose a plan from the billing page while you are there.`,
        ),
        "",
        "- NurseGrid Prep",
        "",
        wrap(
            "If this arrived in your Promotions tab, drag it into Primary once - Gmail remembers, and every later one follows it.",
        ),
        "",
        wrap("You get this because you created a NurseGrid Prep account. One email a week, nothing else."),
        unsub ? `Unsubscribe: ${unsub}` : "",
    ]
        .join("\n")
        .trim();

    return { subject: `${who}, here's what's new at NurseGrid`, html, text };
}
