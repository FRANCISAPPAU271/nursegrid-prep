// NMC Ghana licensing examination calendar.
//
// The Council runs licensing examinations several times a year — the official
// cycle is February/March, June/July, August and November/December
// (nmc.gov.gh). Candidates register through the N&MC Candidates Portal at
// nmc.gov.gh/exam-registration, and separately complete professional
// registration at a regional office after passing.
//
// IMPORTANT: only fill in a date here once you have seen it announced by the
// Council. When `registrationCloses` is null the weekly email does NOT invent a
// deadline — it says the closing date has not been published and sends the
// student to the portal instead. Halved information is worse than none: a
// wrong deadline either panics someone into missing it or reassures them past
// it.

export const NMC_PORTAL_URL = "https://nmc.gov.gh/exam-registration/";

export type ExamSitting = {
  /** Human label, e.g. "November/December 2026". */
  label: string;
  /** ISO date registration closes. null = not yet published by the Council. */
  registrationCloses: string | null;
  /** ISO date of the first MCQ paper. null = not yet published. */
  firstPaper: string | null;
  /** Set true once you have confirmed the dates against an official source. */
  confirmed: boolean;
  /** Optional note shown in the email, e.g. programme-specific dates. */
  note?: string;
};

/**
 * Sittings, soonest first. Keep at least the current and next sitting so the
 * email always has something truthful to say.
 *
 * Left unconfirmed on purpose — the Council announces each sitting on its own
 * timetable and the dates move (the 2025 cycle was postponed by the Ministry of
 * Health). Fill these in as each one is announced.
 */
export const EXAM_SITTINGS: ExamSitting[] = [
  {
    label: "November/December 2026",
    registrationCloses: null,
    firstPaper: null,
    confirmed: false,
    note: "The Council publishes each sitting's timetable separately, and programme dates differ.",
  },
  {
    label: "February/March 2027",
    registrationCloses: null,
    firstPaper: null,
    confirmed: false,
  },
];

export type RegistrationStatus = {
  sitting: ExamSitting;
  /** Whole days until registration closes, or null when not published. */
  daysLeft: number | null;
  /** True when the closing date has already passed but the paper is still ahead. */
  closed: boolean;
  /** 0-100 urgency band used to pick the copy. */
  urgency: "unknown" | "plenty" | "soon" | "imminent" | "closed";
};

function daysBetween(from: Date, toIso: string): number {
  const to = new Date(toIso);
  return Math.ceil((to.getTime() - from.getTime()) / 86400000);
}

/**
 * Pick the sitting a student should be thinking about right now.
 * Skips sittings whose paper date has already passed.
 */
export function registrationStatus(now: Date = new Date()): RegistrationStatus {
  const upcoming =
    EXAM_SITTINGS.find((s) => !s.firstPaper || new Date(s.firstPaper).getTime() > now.getTime()) ??
    EXAM_SITTINGS[EXAM_SITTINGS.length - 1];

  if (!upcoming.registrationCloses) {
    return { sitting: upcoming, daysLeft: null, closed: false, urgency: "unknown" };
  }

  const daysLeft = daysBetween(now, upcoming.registrationCloses);
  if (daysLeft < 0) return { sitting: upcoming, daysLeft, closed: true, urgency: "closed" };
  if (daysLeft <= 7) return { sitting: upcoming, daysLeft, closed: false, urgency: "imminent" };
  if (daysLeft <= 21) return { sitting: upcoming, daysLeft, closed: false, urgency: "soon" };
  return { sitting: upcoming, daysLeft, closed: false, urgency: "plenty" };
}
