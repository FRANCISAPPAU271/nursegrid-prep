import type { SessionUser } from "@/lib/auth";

export const TRIAL_DURATION_MS = 3 * 24 * 60 * 60 * 1000;

/**
 * Study access is intentionally stricter than the user's legacy isPremium flag.
 * The first 72 hours after account creation are available as a trial; after
 * that, only an admin or a confirmed premium entitlement may continue.
 */
export function hasStudyAccess(user: Pick<SessionUser, "createdAt" | "isPremium" | "isAdmin">, now = Date.now()) {
  if (user.isAdmin || user.isPremium) return true;
  return now < user.createdAt.getTime() + TRIAL_DURATION_MS;
}

export function trialEndsAt(user: Pick<SessionUser, "createdAt">) {
  return new Date(user.createdAt.getTime() + TRIAL_DURATION_MS);
}
