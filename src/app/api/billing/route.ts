import { NextResponse } from "next/server";
import { db } from "@/db";
import { subscriptions, invoices } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";
import { isStripeConfigured } from "@/lib/stripe";

export async function GET() {
  try {
    const user = await requireUser();
    const subRows = await db
      .select()
      .from(subscriptions)
      .where(eq(subscriptions.userId, user.id))
      .orderBy(desc(subscriptions.createdAt));
    const invoiceRows = await db
      .select()
      .from(invoices)
      .where(eq(invoices.userId, user.id))
      .orderBy(desc(invoices.issuedAt));

    const activeSubscription = subRows.find((s) => s.status === "active") ?? null;

    return NextResponse.json({
      isPremium: user.isPremium,
      premiumSince: user.premiumSince,
      premiumTrialEndsAt: user.premiumTrialEndsAt,
      activeSubscription,
      subscriptions: subRows,
      invoices: invoiceRows,
      stripeEnabled: isStripeConfigured(),
    });
  } catch (error) {
    return handleApiError(error);
  }
}
