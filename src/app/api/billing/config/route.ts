import { NextResponse } from "next/server";
import { isStripeConfigured } from "@/lib/stripe";
import { isPaystackConfigured } from "@/lib/paystack";

export async function GET() {
  return NextResponse.json({
    stripeEnabled: isStripeConfigured(),
    paystackEnabled: isPaystackConfigured(),
  });
}
