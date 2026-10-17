import { NextResponse } from "next/server";
import { db } from "@/db";
import { referrals, users } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";
import { generateReferralCode } from "@/lib/referral";
import {
  creditBalance,
  ensureTables,
  paidOutReferralIds,
  REFERRAL_REWARD_PESEWAS,
} from "@/lib/referral-credits";

export async function GET() {
  try {
    const user = await requireUser();
    await ensureTables();

    // Backfill a referral code for accounts created before this feature shipped.
    let referralCode = user.referralCode;
    if (!referralCode) {
      referralCode = generateReferralCode();
      await db.update(users).set({ referralCode }).where(eq(users.id, user.id));
    }

    const [rows, credit, paidOut] = await Promise.all([
      db
        .select({
          id: referrals.id,
          createdAt: referrals.createdAt,
          refereeName: users.name,
          refereeEmail: users.email,
        })
        .from(referrals)
        .innerJoin(users, eq(referrals.refereeUserId, users.id))
        .where(eq(referrals.referrerUserId, user.id))
        .orderBy(desc(referrals.createdAt)),
      creditBalance(user.id),
      paidOutReferralIds(user.id),
    ]);

    return NextResponse.json({
      referralCode,
      totalReferrals: rows.length,
      rewardPesewas: REFERRAL_REWARD_PESEWAS,
      creditEarnedPesewas: credit.earnedPesewas,
      creditBalancePesewas: credit.balancePesewas,
      // A referral is created at signup but only pays out on the friend's
      // first payment, so each row says which of the two it is.
      referrals: rows.map((r) => ({ ...r, creditEarned: paidOut.has(r.id) })),
      isPremium: user.isPremium,
      premiumTrialEndsAt: user.premiumTrialEndsAt,
    });
  } catch (error) {
    return handleApiError(error);
  }
}
