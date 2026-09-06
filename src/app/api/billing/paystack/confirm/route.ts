import { NextResponse } from "next/server";
import { requireUser, handleApiError, ApiError } from "@/lib/api";
import { isPaystackConfigured, verifyTransaction, activatePaidPlan } from "@/lib/paystack";

export const dynamic = "force-dynamic";

// GET /api/billing/paystack/confirm?reference=… — called by the billing page
// after Paystack redirects the customer back. Verifies the transaction
// server-side with Paystack (never trusts the redirect alone) and activates
// the plan instantly. Idempotent with the webhook — whichever arrives first
// activates; the second becomes a no-op.
export async function GET(request: Request) {
  try {
    const user = await requireUser();
    if (!isPaystackConfigured()) throw new ApiError("Instant payment is not configured.", 503);

    const { searchParams } = new URL(request.url);
    const reference = searchParams.get("reference");
    if (!reference) throw new ApiError("Missing payment reference.", 422);

    const tx = await verifyTransaction(reference);
    if (tx.status !== "success") {
      return NextResponse.json({ ok: false, status: tx.status });
    }
    if (!tx.planId || !tx.userId) throw new ApiError("Payment is missing plan details.", 422);
    // The payer must be the logged-in user this payment was initialized for.
    if (tx.userId !== user.id) throw new ApiError("This payment belongs to a different account.", 403);

    const result = await activatePaidPlan({
      userId: tx.userId,
      planId: tx.planId,
      reference: tx.reference,
      channel: tx.channel,
    });

    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    return handleApiError(error);
  }
}
