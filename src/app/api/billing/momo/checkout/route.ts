import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { momoPaymentRequests } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";
import { PLAN_DETAILS } from "@/lib/stripe";
import { MOMO_RECEIVER_NUMBER } from "@/lib/momo";

export async function GET() {
  try {
    const user = await requireUser();
    const rows = await db
      .select()
      .from(momoPaymentRequests)
      .where(eq(momoPaymentRequests.userId, user.id))
      .orderBy(desc(momoPaymentRequests.createdAt))
      .limit(10);
    return NextResponse.json({ requests: rows });
  } catch (error) {
    return handleApiError(error);
  }
}

// NurseGrid Prep does not yet have MTN's Collections API credentials
// (subscription key / API user / API key from momodeveloper.mtn.com), so this
// route implements the common "send + confirm" flow used by many small
// merchants in Ghana: the customer sends payment directly to the MTN Mobile
// Money number, then submits the transaction reference they receive by SMS.
// Rather than trusting that submission blindly, it creates a PENDING request
// that an admin reviews against the actual MoMo transaction history/SMS
// before granting premium access — see /dashboard/admin/payments.
const schema = z.object({
  plan: z.enum(["four_month", "eight_month", "annual"]),
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

    const [pendingRequest] = await db
      .insert(momoPaymentRequests)
      .values({
        userId: user.id,
        plan: data.plan,
        amountCents: plan.amountCents,
        momoNumber: data.momoNumber,
        momoReference: data.momoReference,
        status: "pending",
      })
      .returning();

    return NextResponse.json(
      { request: pendingRequest, receiverNumber: MOMO_RECEIVER_NUMBER },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
