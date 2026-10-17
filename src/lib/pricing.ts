// Deliberately not server-only: the billing screen renders these prices, and
// importing a server marker here would force every consumer onto the server.
// Nothing secret lives in this file — it is arithmetic and formatting.
import type { PlanId } from "@/lib/stripe";

/**
 * The single source of truth for what a plan costs, in Ghana cedis.
 *
 * Before this file the price existed in three places that disagreed:
 *
 *   PLAN_DETAILS.amountCents  500   ("$5.00")
 *   BillingPanel PLANS        GH₵ 80  (hardcoded string)
 *   BillingPanel money()      {500: 80, 900: 140, 1300: 200}
 *
 * The stored "cents" are a legacy USD value that is never charged — the real
 * price has always been the cedi one. A discount cannot be applied honestly on
 * top of that, because checkout, invoice and receipt would each compute the
 * reduction from a different base. Everything now derives from here.
 *
 * Amounts are integers in pesewas (1 GH₵ = 100 pesewas), which is also what
 * Paystack expects, so no rounding happens anywhere in the payment path.
 */

export const PLAN_PRICES_PESEWAS: Record<PlanId, number> = {
    four_month: 80_00, // GH₵ 80
    eight_month: 140_00, // GH₵ 140
    annual: 200_00, // GH₵ 200
};

export const PLAN_PRICES_GHS: Record<PlanId, number> = {
    four_month: 800,
    eight_month: 1400,
    annual: 2000,
};

/** GH₵80.00 → "GH₵ 80" (whole cedis, as every price in the app is whole). */
export function formatPesewas(pesewas: number): string {
    const cedis = pesewas / 100;
    const whole = Math.floor(cedis);
    const minor = Math.round((cedis - whole) * 100);
    const cedisText = new Intl.NumberFormat("en-GH").format(whole);
    return minor === 0 ? `GH₵ ${cedisText}` : `GH₵ ${cedisText}.${String(minor).padStart(2, "0")}`;
}

export function isPlanId(value: string): value is PlanId {
    return value === "four_month" || value === "eight_month" || value === "annual";
}
