import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { subscriptions, invoices, users } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";
import { PLAN_DETAILS } from "@/lib/stripe";
import { MOMO_RECEIVER_NUMBER } from "@/lib/momo";

// NurseGrid Prep does not yet have MTN's Collections API credentials
// (subscription key / API user / API key from momodeveloper.mtn.com), so this
// route implements the common "send + confirm" flow used by many small
// merchants in Ghana: the customer sends payment directly to the MTN Mobile
// Money number, then submits the transaction reference they receive by SMS to
// activate their account. This route records that reference for manual
// reconciliation and unlocks premium immediately.
const schema = z.object({
  plan: z.enum(["four_month", "annual"]),
  momoNumber: z
    .string()
    .trim()
    .min(9, "Enter the mobile money number you paid from")
    .max(20),
  momoReference: z
    .string()
    .trim()
    .min(6, "Enter the transaction reference from your MoMo confirmation SMS")
    .max(40),
});

export async function POST(request: Request) {
  try {
    const user = await requireUser();
    const body = await request.json();
    const data = schema.parse(body);
    const plan = PLAN_DETAILS[data.plan];

    // Simulate a brief verification delay against the reference number.
    await new Promise((resolve) => setTimeout(resolve, 500));

    await db
      .update(subscriptions)
      .set({ status: "canceled", canceledAt: new Date() })
      .where(and(eq(subscriptions.userId, user.id), eq(subscriptions.status, "active")));

    const periodEnd = new Date(Date.now() + plan.days * 24 * 60 * 60 * 1000);

    const [subscription] = await db
      .insert(subscriptions)
      .values({
        userId: user.id,
        plan: data.plan,
        status: "active",
        amountCents: plan.amountCents,
        currentPeriodEnd: periodEnd,
        paymentMethod: "mtn_momo",
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
        paymentMethod: "mtn_momo",
        momoNumber: data.momoNumber,
        momoReference: data.momoReference,
      })
      .returning();

    await db
      .update(users)
      .set({ isPremium: true, premiumSince: user.premiumSince ?? new Date() })
      .where(eq(users.id, user.id));

    return NextResponse.json({ subscription, invoice, receiverNumber: MOMO_RECEIVER_NUMBER }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
