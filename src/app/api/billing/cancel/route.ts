import { NextResponse } from "next/server";
import { db } from "@/db";
import { subscriptions } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";

// POST /api/billing/cancel — turn off auto-renew.
//
// This used to set users.is_premium = false in the same breath. Cancelling a
// subscription means "do not bill me again", not "take back what I already
// paid for": a customer who cancelled on day 2 of a 120-day plan lost access
// immediately and was shown the paywall asking for money they had already
// spent. Access now runs to the end of the period they paid for, and
// getCurrentUser() expires it afterwards on the normal schedule.
export async function POST() {
  try {
    const user = await requireUser();

    await db
      .update(subscriptions)
      .set({ status: "canceled", canceledAt: new Date() })
      .where(and(eq(subscriptions.userId, user.id), eq(subscriptions.status, "active")));

    // Deliberately no isPremium write. The subscription row keeps its
    // current_period_end, so entitlement survives until that date passes.
    return NextResponse.json({ ok: true });
  } catch (error) {
    return handleApiError(error);
  }
}
