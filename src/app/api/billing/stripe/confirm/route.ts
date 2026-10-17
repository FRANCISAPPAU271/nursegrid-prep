import { NextResponse } from "next/server";
import { db } from "@/db";
import { users, subscriptions, invoices } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { requireUser, handleApiError, ApiError } from "@/lib/api";
import { getStripe, isStripeConfigured, PLAN_DETAILS, isValidPlanId } from "@/lib/stripe";
import { awardReferralCredit, recordInvoiceDiscount, spendCredit } from "@/lib/referral-credits";

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

    const [invoice] = await db
      .insert(invoices)
      .values({
        userId: user.id,
        subscriptionId: subscription.id,
        amountCents: plan.amountCents,
        plan: plan.label,
        status: "paid",
        paymentMethod: "card",
      })
      .returning({ id: invoices.id });

    // Settle the referral wallet from what the checkout actually charged.
    // Stripe's metadata is all strings, so coerce before doing arithmetic.
    // Both helpers are idempotent, so a webhook arriving for the same session
    // can settle it again without paying anybody twice.
    const creditAppliedPesewas = Number(session.metadata?.creditAppliedPesewas) || 0;
    const friendDiscountPesewas = Number(session.metadata?.friendDiscountPesewas) || 0;
    if (invoice?.id) {
      await recordInvoiceDiscount(invoice.id, creditAppliedPesewas + friendDiscountPesewas);
      await spendCredit({ userId: user.id, amountPesewas: creditAppliedPesewas, invoiceId: invoice.id });
    }
    await awardReferralCredit(user.id);

    await db
      .update(users)
      .set({ isPremium: true, premiumSince: user.premiumSince ?? new Date() })
      .where(eq(users.id, user.id));

    return NextResponse.json({ ok: true, subscription });
  } catch (error) {
    return handleApiError(error);
  }
}
