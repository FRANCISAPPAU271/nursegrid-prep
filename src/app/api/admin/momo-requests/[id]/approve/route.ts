import { NextResponse } from "next/server";
import { db } from "@/db";
import { momoPaymentRequests, subscriptions, invoices, users } from "@/db/schema";
import { and, eq, sql } from "drizzle-orm";
import { requireAdmin, handleApiError, ApiError } from "@/lib/api";
import { PLAN_DETAILS, type PlanId } from "@/lib/stripe";
import { isEmailConfigured, momoPaymentStatusEmail, sendEmail } from "@/lib/email";
import { awardReferralCredit, ensureTables, recordInvoiceDiscount, spendCredit } from "@/lib/referral-credits";

export async function POST(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const admin = await requireAdmin();
    const { id } = await params;

    // select() names every declared column, including the discount columns
    // that only exist once the runtime DDL has run. A pending request created
    // before this deploy could otherwise be impossible to approve.
    await ensureTables();

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

    const [invoice] = await db.insert(invoices).values({
      userId: reqRow.userId,
      subscriptionId: subscription.id,
      amountCents: reqRow.amountCents,
      plan: plan.label,
      status: "paid",
      paymentMethod: "mtn_momo",
      momoNumber: reqRow.momoNumber,
      momoReference: reqRow.momoReference,
    }).returning({ id: invoices.id });

    // A real payment just landed, so this is the moment to credit whoever
    // referred this customer. Idempotent: approving twice cannot pay twice.
    const referralReward = await awardReferralCredit(reqRow.userId);

    // Draw down the credit that was offered on the payment screen.
    if (invoice?.id) {
      await recordInvoiceDiscount(invoice.id, reqRow.discountPesewas ?? 0);
      await spendCredit({
        userId: reqRow.userId,
        amountPesewas: reqRow.creditAppliedPesewas ?? 0,
        invoiceId: invoice.id,
      });
    }

    const userRows = await db.select({ premiumSince: users.premiumSince, name: users.name, email: users.email }).from(users).where(eq(users.id, reqRow.userId)).limit(1);
    await db
      .update(users)
      .set({ isPremium: true, premiumSince: userRows[0]?.premiumSince ?? new Date() })
      .where(eq(users.id, reqRow.userId));

    await db.execute(sql`CREATE TABLE IF NOT EXISTS "payment_audit_events" ("id" text PRIMARY KEY DEFAULT md5(random()::text || clock_timestamp()::text), "request_id" text NOT NULL, "user_id" text NOT NULL, "admin_id" text NOT NULL, "action" text NOT NULL, "amount_cents" integer NOT NULL, "plan" text NOT NULL, "note" text, "created_at" timestamptz NOT NULL DEFAULT now())`);
    await db.execute(sql`INSERT INTO "payment_audit_events" ("request_id", "user_id", "admin_id", "action", "amount_cents", "plan") VALUES (${id}, ${reqRow.userId}, ${admin.id}, 'approved', ${reqRow.amountCents}, ${plan.label})`);

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

    // The payment has committed by this point, so a failed email must not fail
    // the request. But it must not disappear either: an admin who believes the
    // customer was told, when they were not, has no reason to follow up, and
    // that silence is why a rejected sender went unnoticed for so long.
    let notified = false;
    let notifyError: string | null = null;
    if (isEmailConfigured() && userRows[0]?.email) {
      try {
        const message = momoPaymentStatusEmail(userRows[0].name, "approved", plan.label);
        await sendEmail(userRows[0].email, message.subject, message.html);
        notified = true;
      } catch (emailError) {
        notifyError = emailError instanceof Error ? emailError.message : "email failed";
        console.error("Payment approval email failed", emailError);
      }
    } else {
      notifyError = userRows[0]?.email ? "email is not configured" : "no email address on the account";
    }

    return NextResponse.json({
      request: updatedRequest,
      subscription,
      invoiceId: invoice?.id ?? null,
      referralCreditAwarded: referralReward.awarded,
      notified,
      notifyError,
    });
  } catch (error) {
    return handleApiError(error);
  }
}
