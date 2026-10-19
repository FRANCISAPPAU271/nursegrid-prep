import { NextResponse } from "next/server";
import { handleApiError, ApiError } from "@/lib/api";
import { getCurrentUser } from "@/lib/auth";
import { isPaystackConfigured, verifyTransaction, activatePaidPlan } from "@/lib/paystack";

export const dynamic = "force-dynamic";

// GET /api/billing/paystack/confirm?reference=… — called by the billing page
// after Paystack redirects the customer back. Verifies the transaction
// server-side with Paystack (never trusts the redirect alone) and activates
// the plan instantly. Idempotent with the webhook — whichever arrives first
// activates; the second becomes a no-op.
export async function GET(request: Request) {
  try {
    if (!isPaystackConfigured()) throw new ApiError("Instant payment is not configured.", 503);

    const { searchParams } = new URL(request.url);
    const reference = searchParams.get("reference");
    if (!reference) throw new ApiError("Missing payment reference.", 422);

    const tx = await verifyTransaction(reference);
    if (tx.status !== "success") {
      return NextResponse.json({ ok: false, status: tx.status });
    }
    if (!tx.planId || !tx.userId) throw new ApiError("Payment is missing plan details.", 422);

    // A session is optional here. It used to be required, and that was a hole:
    // the customer pays, Paystack returns them to a host or a moment where the
    // session cookie is absent, requireUser() throws 401, and the money is gone
    // with the plan still inactive - which reads back as "pay again".
    // The reference is verified directly with Paystack and the user id comes
    // from metadata we wrote at initialization, so the reference alone
    // identifies the rightful payer. A session is only used to reject a
    // mismatch.
    const viewer = await getCurrentUser();
    if (viewer && viewer.id !== tx.userId) {
      throw new ApiError("This payment belongs to a different account.", 403);
    }

    const result = await activatePaidPlan({
      userId: tx.userId,
      planId: tx.planId,
      reference: tx.reference,
      channel: tx.channel,
      creditAppliedPesewas: tx.creditAppliedPesewas,
      friendDiscountPesewas: tx.friendDiscountPesewas,
    });

    return NextResponse.json({ ok: true, signedIn: Boolean(viewer), ...result });
  } catch (error) {
    return handleApiError(error);
  }
}
