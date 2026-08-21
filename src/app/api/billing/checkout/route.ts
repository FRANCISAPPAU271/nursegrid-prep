import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { subscriptions, invoices, users } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";
import { FULL_ACCESS_PRICE_CENTS, FULL_ACCESS_LABEL } from "@/lib/stripe";

// This is the fallback demo card checkout used only when Stripe is not
// configured (no STRIPE_SECRET_KEY). Once real Stripe keys are added, the
// billing UI switches automatically to /api/billing/stripe/checkout.
const schema = z.object({
  cardNumber: z.string().trim().min(4).max(30),
  cardName: z.string().trim().min(2).max(80),
});

export async function POST(request: Request) {
  try {
    const user = await requireUser();
    const body = await request.json();
    const data = schema.parse(body);

    // Simulate payment processor latency + a deterministic "decline" only for
    // obviously fake test numbers, otherwise approve (this is a mock gateway).
    await new Promise((resolve) => setTimeout(resolve, 400));
    if (data.cardNumber.replace(/\s/g, "") === "0000000000000000") {
      return NextResponse.json({ error: "Card declined. Please try a different card." }, { status: 402 });
    }

    await db
      .update(subscriptions)
      .set({ status: "canceled", canceledAt: new Date() })
      .where(and(eq(subscriptions.userId, user.id), eq(subscriptions.status, "active")));

    const [subscription] = await db
      .insert(subscriptions)
      .values({
        userId: user.id,
        plan: "lifetime",
        status: "active",
        amountCents: FULL_ACCESS_PRICE_CENTS,
        currentPeriodEnd: null,
        paymentMethod: "card",
      })
      .returning();

    const [invoice] = await db
      .insert(invoices)
      .values({
        userId: user.id,
        subscriptionId: subscription.id,
        amountCents: FULL_ACCESS_PRICE_CENTS,
        plan: FULL_ACCESS_LABEL,
        status: "paid",
        paymentMethod: "card",
      })
      .returning();

    await db
      .update(users)
      .set({ isPremium: true, premiumSince: user.premiumSince ?? new Date() })
      .where(eq(users.id, user.id));

    return NextResponse.json({ subscription, invoice }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
