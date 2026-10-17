import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { users, referrals } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { generateReferralCode } from "@/lib/referral";
import ReferralPanel from "@/components/referrals/ReferralPanel";
import { creditBalance } from "@/lib/referral-credits";

export const dynamic = "force-dynamic";

export default async function ReferralsPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  let referralCode = (await db.select({ referralCode: users.referralCode }).from(users).where(eq(users.id, user.id)).limit(1))[0]?.referralCode;
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

  const credit = await creditBalance(user.id);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Invite & Earn</h1>
        <p className="text-slate-600">
          Earn GH₵ 20 off your next renewal for every friend who joins and pays — they get GH₵ 10 off their first purchase.
        </p>
      </div>
      <ReferralPanel
        referralCode={referralCode}
        totalReferrals={rows.length}
        totalBonusDays={rows.reduce((sum, r) => sum + r.rewardDays, 0)}
        creditBalancePesewas={credit.balancePesewas}
        creditEarnedPesewas={credit.earnedPesewas}
        referrals={rows.map((r) => ({
          id: r.id,
          rewardDays: r.rewardDays,
          createdAt: r.createdAt.toISOString(),
          refereeName: r.refereeName,
          refereeEmail: r.refereeEmail,
        }))}
      />
    </div>
  );
}
