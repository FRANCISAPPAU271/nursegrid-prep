import "server-only";
import Stripe from "stripe";

let stripeClient: Stripe | null = null;

export function isStripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

export function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not configured");
  }
  if (!stripeClient) {
    stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY);
  }
  return stripeClient;
}

export type PlanId = "four_month" | "eight_month" | "annual";

export const PLAN_DETAILS: Record<PlanId, { label: string; amountCents: number; days: number }> = {
  four_month: { label: "4 Months", amountCents: 500, days: 120 }, // $5.00 USD
  eight_month: { label: "8 Months", amountCents: 900, days: 240 }, // $9.00 USD
  annual: { label: "1 Year", amountCents: 1300, days: 365 }, // $13.00 USD
};

export function isValidPlanId(value: string): value is PlanId {
  return value === "four_month" || value === "eight_month" || value === "annual";
}
