import { NextResponse } from "next/server";
import crypto from "crypto";
import { verifyTransaction, activatePaidPlan, isPaystackConfigured } from "@/lib/paystack";

export const dynamic = "force-dynamic";

// POST /api/billing/paystack/webhook — Paystack calls this the moment a
// payment succeeds, even if the customer never returns to the site.
// Security: the x-paystack-signature header is an HMAC-SHA512 of the raw
// body using the secret key — reject anything that doesn't match. Belt and
// braces: we ALSO re-verify the transaction with Paystack's API before
// activating, so a forged body can never grant premium.
export async function POST(request: Request) {
  try {
    if (!isPaystackConfigured()) {
      return NextResponse.json({ ok: true, skipped: "not configured" });
    }

    const rawBody = await request.text();
    const signature = request.headers.get("x-paystack-signature") ?? "";
    const expected = crypto
      .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY as string)
      .update(rawBody)
      .digest("hex");
    if (!signature || signature !== expected) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(rawBody);
    if (event.event !== "charge.success") {
      return NextResponse.json({ ok: true, ignored: event.event });
    }

    const reference: string | undefined = event.data?.reference;
    if (!reference) return NextResponse.json({ ok: true, ignored: "no reference" });

    // Re-verify with Paystack's API before touching the database.
    const tx = await verifyTransaction(reference);
    if (tx.status !== "success" || !tx.userId || !tx.planId) {
      return NextResponse.json({ ok: true, ignored: "unverified or missing metadata" });
    }

    const result = await activatePaidPlan({
      userId: tx.userId,
      planId: tx.planId,
      reference: tx.reference,
      channel: tx.channel,
    });

    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    console.error("Paystack webhook error:", error);
    // Return 200 so Paystack doesn't retry forever on our internal errors;
    // the redirect-confirm path provides the safety net.
    return NextResponse.json({ ok: false });
  }
}
