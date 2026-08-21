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

// NurseGrid Prep is priced as a single one-time payment — no recurring plans.
export const FULL_ACCESS_PRICE_CENTS = 500; // $5.00 USD
export const FULL_ACCESS_LABEL = "Full Access (lifetime)";
