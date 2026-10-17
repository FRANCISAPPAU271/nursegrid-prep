import { NextResponse } from "next/server";
import { requireUser, handleApiError } from "@/lib/api";
import { checkoutTotals } from "@/lib/referral-credits";
import { PLAN_PRICES_PESEWAS, formatPesewas } from "@/lib/pricing";

// One place for the UI to ask "what will this cost me?" — so the amount on the
// button, the amount in the MoMo instructions and the amount heading for the
// gateway are the same number, computed by the same function the checkout
// routes use. Never let the browser do this arithmetic from a list price.
export async function GET() {
  try {
    const user = await requireUser();

    const plans = Object.keys(PLAN_PRICES_PESEWAS);
    const entries = await Promise.all(
      plans.map(async (planId) => {
        const t = await checkoutTotals(user.id, planId as keyof typeof PLAN_PRICES_PESEWAS);
        return [
          planId,
          {
            ...t,
            listLabel: formatPesewas(t.listPesewas),
            payableLabel: formatPesewas(t.payablePesewas),
            creditAppliedLabel: formatPesewas(t.creditAppliedPesewas),
            friendDiscountLabel: formatPesewas(t.friendDiscountPesewas),
            creditBalanceLabel: formatPesewas(t.creditBalancePesewas),
          },
        ] as const;
      }),
    );

    return NextResponse.json({ plans: Object.fromEntries(entries) });
  } catch (error) {
    return handleApiError(error);
  }
}
