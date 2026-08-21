import { NextResponse } from "next/server";
import { db } from "@/db";
import { referrals, users } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";
import { generateReferralCode } from "@/lib/referral";

export async function GET() {
  try {
    const user = await requireUser();

    // Backfill a referral code for accounts created before this feature shipped.
    let referralCode = user.referralCode;
    if (!referralCode) {
      referralCode = generateReferralCode();
      await db.update(users).set({ referralCode }).where(eq(users.id, user.id));
    }

    const rows = await db
      .select({
        id: referrals.id,
        rewardDays: referrals.rewardDays,
        createdAt: referrals.createdAt,
        refereeName: users.name,
        refereeEmail: users.email,
      })
      .from(referrals)
      .innerJoin(users, eq(referrals.refereeUserId, users.id))
      .where(eq(referrals.referrerUserId, user.id))
      .orderBy(desc(referrals.createdAt));

    return NextResponse.json({
      referralCode,
      totalReferrals: rows.length,
      totalBonusDays: rows.reduce((sum, r) => sum + r.rewardDays, 0),
      referrals: rows,
      isPremium: user.isPremium,
      premiumTrialEndsAt: user.premiumTrialEndsAt,
    });
  } catch (error) {
    return handleApiError(error);
  }
}
