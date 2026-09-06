import "server-only";
import { db } from "@/db";
import { subscriptions, invoices, users } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { PLAN_DETAILS, type PlanId } from "@/lib/stripe";

// ---------------------------------------------------------------------------
// Paystack integration — instant activation for Ghana payments.
//
// Paystack supports MTN MoMo (and cards) in Ghana and confirms payment via
// webhook + server-side verification, so accounts activate in seconds with
// no admin review. Set PAYSTACK_SECRET_KEY in Vercel to enable; without it
// the app silently falls back to the existing manual MoMo flow.
//
// Fixed GHS pricing (in pesewas) matches the advertised GH₵ prices rather
// than a floating FX conversion.
// ---------------------------------------------------------------------------

export function isPaystackConfigured(): boolean {
  return Boolean(process.env.PAYSTACK_SECRET_KEY);
}

export const PLAN_GHS_PESEWAS: Record<PlanId, number> = {
  four_month: 80_00, // GH₵ 80
  eight_month: 140_00, // GH₵ 140
  annual: 200_00, // GH₵ 200
};

const API = "https://api.paystack.co";

function secretKey(): string {
  const key = process.env.PAYSTACK_SECRET_KEY;
  if (!key) throw new Error("PAYSTACK_SECRET_KEY is not configured");
  return key;
}

export async function initializeTransaction(params: {
  email: string;
  planId: PlanId;
  userId: string;
  callbackUrl: string;
}): Promise<{ authorizationUrl: string; reference: string }> {
  const res = await fetch(`${API}/transaction/initialize`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: params.email,
      amount: PLAN_GHS_PESEWAS[params.planId],
      currency: "GHS",
      callback_url: params.callbackUrl,
      channels: ["mobile_money", "card"],
      metadata: {
        userId: params.userId,
        planId: params.planId,
        product: "nursegrid-premium",
      },
    }),
  });
  const data = await res.json();
  if (!res.ok || !data.status) {
    throw new Error(data.message || "Could not start the Paystack checkout");
  }
  return { authorizationUrl: data.data.authorization_url, reference: data.data.reference };
}

export type VerifiedTransaction = {
  reference: string;
  status: string; // "success" when paid
  amount: number; // pesewas
  currency: string;
  channel: string; // "mobile_money" | "card" | ...
  userId: string | null;
  planId: PlanId | null;
};

export async function verifyTransaction(reference: string): Promise<VerifiedTransaction> {
  const res = await fetch(`${API}/transaction/verify/${encodeURIComponent(reference)}`, {
    headers: { Authorization: `Bearer ${secretKey()}` },
    cache: "no-store",
  });
  const data = await res.json();
  if (!res.ok || !data.status) {
    throw new Error(data.message || "Could not verify the transaction");
  }
  const t = data.data;
  const meta = t.metadata || {};
  const planId: PlanId | null =
    meta.planId === "four_month" || meta.planId === "eight_month" || meta.planId === "annual" ? meta.planId : null;
  return {
    reference: t.reference,
    status: t.status,
    amount: t.amount,
    currency: t.currency,
    channel: t.channel,
    userId: typeof meta.userId === "string" ? meta.userId : null,
    planId,
  };
}

// Activate a plan for a user after a VERIFIED payment. Idempotent by
// payment reference: if an invoice with this reference already exists,
// activation already happened (webhook and redirect-confirm can both fire).
export async function activatePaidPlan(params: {
  userId: string;
  planId: PlanId;
  reference: string;
  channel: string;
}): Promise<{ activated: boolean; alreadyProcessed: boolean }> {
  const existing = await db
    .select({ id: invoices.id })
    .from(invoices)
    .where(eq(invoices.momoReference, params.reference))
    .limit(1);
  if (existing.length > 0) return { activated: true, alreadyProcessed: true };

  const plan = PLAN_DETAILS[params.planId];
  const paymentMethod = params.channel === "card" ? ("card" as const) : ("mtn_momo" as const);

  // Cancel any existing active subscription (same behavior as other flows).
  await db
    .update(subscriptions)
    .set({ status: "canceled", canceledAt: new Date() })
    .where(and(eq(subscriptions.userId, params.userId), eq(subscriptions.status, "active")));

  const periodEnd = new Date(Date.now() + plan.days * 24 * 60 * 60 * 1000);

  const [subscription] = await db
    .insert(subscriptions)
    .values({
      userId: params.userId,
      plan: params.planId,
      status: "active",
      amountCents: plan.amountCents,
      currentPeriodEnd: periodEnd,
      paymentMethod,
    })
    .returning();

  await db.insert(invoices).values({
    userId: params.userId,
    subscriptionId: subscription.id,
    amountCents: plan.amountCents,
    plan: plan.label,
    status: "paid",
    paymentMethod,
    momoReference: params.reference,
  });

  const userRows = await db
    .select({ premiumSince: users.premiumSince })
    .from(users)
    .where(eq(users.id, params.userId))
    .limit(1);
  await db
    .update(users)
    .set({ isPremium: true, premiumSince: userRows[0]?.premiumSince ?? new Date() })
    .where(eq(users.id, params.userId));

  return { activated: true, alreadyProcessed: false };
}
