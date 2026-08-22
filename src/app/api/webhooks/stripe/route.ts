import { NextResponse } from "next/server";
import { db } from "@/db";
import { users, subscriptions, invoices } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { getStripe, isStripeConfigured, PLAN_DETAILS, isValidPlanId } from "@/lib/stripe";
import type Stripe from "stripe";

// Optional webhook endpoint for production robustness (e.g. if a customer closes
// the tab before the success redirect fires). Configure STRIPE_WEBHOOK_SECRET
// and point your Stripe dashboard's webhook at /api/webhooks/stripe to enable
// server-to-server confirmation in addition to the client-side confirm route.
export async function POST(request: Request) {
  if (!isStripeConfigured()) {
    return NextResponse.json({ error: "Stripe is not configured" }, { status: 503 });
  }

  const stripe = getStripe();
  const signature = request.headers.get("stripe-signature");
  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    if (process.env.STRIPE_WEBHOOK_SECRET && signature) {
      event = stripe.webhooks.constructEvent(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET);
    } else {
      event = JSON.parse(rawBody) as Stripe.Event;
    }
  } catch (err) {
    console.error("Stripe webhook signature verification failed", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.client_reference_id ?? session.metadata?.userId;
      if (userId && session.payment_status === "paid") {
        const existing = await db
          .select({ id: subscriptions.id })
          .from(subscriptions)
          .where(eq(subscriptions.stripeCheckoutSessionId, session.id))
          .limit(1);

        if (existing.length === 0) {
          const planIdRaw = session.metadata?.plan ?? "four_month";
          const planId = isValidPlanId(planIdRaw) ? planIdRaw : "four_month";
          const plan = PLAN_DETAILS[planId];
          const periodEnd = new Date(Date.now() + plan.days * 24 * 60 * 60 * 1000);

          await db
            .update(subscriptions)
            .set({ status: "canceled", canceledAt: new Date() })
            .where(and(eq(subscriptions.userId, userId), eq(subscriptions.status, "active")));

          const [subscription] = await db
            .insert(subscriptions)
            .values({
              userId,
              plan: planId,
              status: "active",
              amountCents: plan.amountCents,
              currentPeriodEnd: periodEnd,
              stripeSubscriptionId: typeof session.subscription === "string" ? session.subscription : null,
              stripeCheckoutSessionId: session.id,
              paymentMethod: "card",
            })
            .returning();

          await db.insert(invoices).values({
            userId,
            subscriptionId: subscription.id,
            amountCents: plan.amountCents,
            plan: plan.label,
            status: "paid",
            paymentMethod: "card",
          });

          await db.update(users).set({ isPremium: true, premiumSince: new Date() }).where(eq(users.id, userId));
        }
      }
    }

    if (event.type === "customer.subscription.deleted") {
      const stripeSub = event.data.object as Stripe.Subscription;
      const rows = await db
        .select({ id: subscriptions.id, userId: subscriptions.userId })
        .from(subscriptions)
        .where(eq(subscriptions.stripeSubscriptionId, stripeSub.id))
        .limit(1);
      const row = rows[0];
      if (row) {
        await db.update(subscriptions).set({ status: "canceled", canceledAt: new Date() }).where(eq(subscriptions.id, row.id));
        await db.update(users).set({ isPremium: false }).where(eq(users.id, row.userId));
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook handler error", error);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
  }
}
