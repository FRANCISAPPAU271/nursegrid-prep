import { NextResponse } from "next/server";
import { db } from "@/db";
import { users, subscriptions } from "@/db/schema";
import { and, eq, isNull, notInArray, or, sql } from "drizzle-orm";
import { requireAdmin, handleApiError } from "@/lib/api";
import { SIGNUP_TRIAL_DAYS } from "@/lib/referral";

export const dynamic = "force-dynamic";

// POST /api/admin/grant-trials — one-time gesture: give every existing FREE
// user a fresh 3-day premium trial (e.g. to pair with a "we've upgraded!"
// announcement).
//
// Safety rules:
//   • Only touches users who are currently NOT premium.
//   • Never touches users with an active paid subscription (they're already
//     premium; and even in edge states, paid users are excluded explicitly).
//   • Never REDUCES anyone's existing trial: users whose premiumTrialEndsAt
//     is already in the future are skipped.
//   • Admins are skipped (they don't need trials).
//   • Idempotent in practice: a second run within the trial window finds
//     everyone already premium-with-future-trial and grants nothing.
export async function POST() {
  try {
    await requireAdmin();

    const now = new Date();
    const trialEnd = new Date(now.getTime() + SIGNUP_TRIAL_DAYS * 24 * 60 * 60 * 1000);

    // Users with an active paid subscription — excluded belt-and-braces.
    const activeSubRows = await db
      .select({ userId: subscriptions.userId })
      .from(subscriptions)
      .where(eq(subscriptions.status, "active"));
    const paidUserIds = activeSubRows.map((r) => r.userId);

    const conditions = [
      eq(users.isPremium, false),
      eq(users.isAdmin, false),
      // Don't shorten an existing future trial (defensive; free users
      // normally have a past or null trial date).
      or(isNull(users.premiumTrialEndsAt), sql`${users.premiumTrialEndsAt} < now()`),
    ];
    if (paidUserIds.length > 0) {
      conditions.push(notInArray(users.id, paidUserIds));
    }

    const updated = await db
      .update(users)
      .set({
        isPremium: true,
        premiumSince: now,
        premiumTrialEndsAt: trialEnd,
      })
      .where(and(...conditions))
      .returning({ id: users.id });

    return NextResponse.json({
      ok: true,
      granted: updated.length,
      trialDays: SIGNUP_TRIAL_DAYS,
      trialEndsAt: trialEnd.toISOString(),
    });
  } catch (error) {
    return handleApiError(error);
  }
}
