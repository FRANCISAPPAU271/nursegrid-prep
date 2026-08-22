import { NextResponse } from "next/server";
import { db } from "@/db";
import { users, subscriptions, invoices } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { requireUser, handleApiError, ApiError } from "@/lib/api";
import { getStripe, isStripeConfigured, PLAN_DETAILS, isValidPlanId } from "@/lib/stripe";

export async function GET(request: Request) {
  try {
    if (!isStripeConfigured()) {
      throw new ApiError("Stripe is not configured on this server yet.", 503);
    }
    const user = await requireUser();
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("session_id");
    if (!sessionId) throw new ApiError("Missing session_id", 400);

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.client_reference_id !== user.id) {
      throw new ApiError("This checkout session does not belong to your account.", 403);
    }
    if (session.payment_status !== "paid") {
      return NextResponse.json({ ok: false, status: session.payment_status });
    }

    // Idempotency: if we've already recorded this session, just return success.
    const already = await db
      .select({ id: subscriptions.id })
      .from(subscriptions)
      .where(eq(subscriptions.stripeCheckoutSessionId, sessionId))
      .limit(1);

    if (already.length > 0) {
      return NextResponse.json({ ok: true, alreadyProcessed: true });
    }

    const planIdRaw = session.metadata?.plan ?? "four_month";
    const planId = isValidPlanId(planIdRaw) ? planIdRaw : "four_month";
    const plan = PLAN_DETAILS[planId];
    const periodEnd = new Date(Date.now() + plan.days * 24 * 60 * 60 * 1000);

    await db
      .update(subscriptions)
      .set({ status: "canceled", canceledAt: new Date() })
      .where(and(eq(subscriptions.userId, user.id), eq(subscriptions.status, "active")));

    const [subscription] = await db
      .insert(subscriptions)
      .values({
        userId: user.id,
        plan: planId,
        status: "active",
        amountCents: plan.amountCents,
        currentPeriodEnd: periodEnd,
        stripeSubscriptionId: typeof session.subscription === "string" ? session.subscription : null,
        stripeCheckoutSessionId: sessionId,
        paymentMethod: "card",
      })
      .returning();

    await db.insert(invoices).values({
      userId: user.id,
      subscriptionId: subscription.id,
      amountCents: plan.amountCents,
      plan: plan.label,
      status: "paid",
      paymentMethod: "card",
    });

    await db
      .update(users)
      .set({ isPremium: true, premiumSince: user.premiumSince ?? new Date() })
      .where(eq(users.id, user.id));

    return NextResponse.json({ ok: true, subscription });
  } catch (error) {
    return handleApiError(error);
  }
}
