import { NextResponse } from "next/server";
import { db } from "@/db";
import { momoPaymentRequests, subscriptions, invoices, users } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { requireAdmin, handleApiError, ApiError } from "@/lib/api";
import { PLAN_DETAILS, type PlanId } from "@/lib/stripe";

export async function POST(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const admin = await requireAdmin();
    const { id } = await params;

    const rows = await db.select().from(momoPaymentRequests).where(eq(momoPaymentRequests.id, id)).limit(1);
    const reqRow = rows[0];
    if (!reqRow) throw new ApiError("Payment request not found", 404);
    if (reqRow.status !== "pending") throw new ApiError("This request has already been reviewed.", 400);

    const plan = PLAN_DETAILS[reqRow.plan as PlanId];
    if (!plan) throw new ApiError("Unrecognized plan on this request.", 400);

    // Cancel any existing active subscription before starting the new one,
    // same behavior as the automatic card/demo checkout flows.
    await db
      .update(subscriptions)
      .set({ status: "canceled", canceledAt: new Date() })
      .where(and(eq(subscriptions.userId, reqRow.userId), eq(subscriptions.status, "active")));

    const periodEnd = new Date(Date.now() + plan.days * 24 * 60 * 60 * 1000);

    const [subscription] = await db
      .insert(subscriptions)
      .values({
        userId: reqRow.userId,
        plan: reqRow.plan,
        status: "active",
        amountCents: reqRow.amountCents,
        currentPeriodEnd: periodEnd,
        paymentMethod: "mtn_momo",
      })
      .returning();

    await db.insert(invoices).values({
      userId: reqRow.userId,
      subscriptionId: subscription.id,
      amountCents: reqRow.amountCents,
      plan: plan.label,
      status: "paid",
      paymentMethod: "mtn_momo",
      momoNumber: reqRow.momoNumber,
      momoReference: reqRow.momoReference,
    });

    const userRows = await db.select({ premiumSince: users.premiumSince }).from(users).where(eq(users.id, reqRow.userId)).limit(1);
    await db
      .update(users)
      .set({ isPremium: true, premiumSince: userRows[0]?.premiumSince ?? new Date() })
      .where(eq(users.id, reqRow.userId));

    const [updatedRequest] = await db
      .update(momoPaymentRequests)
      .set({
        status: "approved",
        reviewedBy: admin.id,
        reviewedAt: new Date(),
        subscriptionId: subscription.id,
      })
      .where(eq(momoPaymentRequests.id, id))
      .returning();

    return NextResponse.json({ request: updatedRequest, subscription });
  } catch (error) {
    return handleApiError(error);
  }
}
