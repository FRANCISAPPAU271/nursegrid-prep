import type { SessionUser } from "@/lib/auth";

export const TRIAL_DURATION_MS = 3 * 24 * 60 * 60 * 1000;

/**
 * Study access is intentionally stricter than the user's legacy isPremium flag.
 * The first 72 hours after account creation are available as a trial; after
 * that, only an admin or a confirmed premium entitlement may continue.
 */
export function hasStudyAccess(
  user: Pick<SessionUser, "createdAt" | "isPremium" | "isAdmin" | "premiumTrialEndsAt">,
  now = Date.now(),
) {
  if (user.isAdmin || user.isPremium) return true;
  // A granted trial is a grant. This used to read only createdAt, so anyone
  // given a trial longer than the signup 3 days was locked out on day 4 and
  // shown the paywall with their trial still running.
  if (user.premiumTrialEndsAt && user.premiumTrialEndsAt.getTime() > now) return true;
  return now < user.createdAt.getTime() + TRIAL_DURATION_MS;
}

export function trialEndsAt(user: Pick<SessionUser, "createdAt">) {
  return new Date(user.createdAt.getTime() + TRIAL_DURATION_MS);
}
