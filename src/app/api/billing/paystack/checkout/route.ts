import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser, handleApiError, ApiError } from "@/lib/api";
import { isPaystackConfigured, initializeTransaction } from "@/lib/paystack";

export const dynamic = "force-dynamic";

const schema = z.object({ plan: z.enum(["four_month", "eight_month", "annual"]) });

// POST /api/billing/paystack/checkout — start an instant MoMo/card payment.
// Returns the Paystack authorization URL the client is redirected to; after
// paying, Paystack redirects back to /dashboard/billing?paystack=1&reference=…
// where the confirm endpoint verifies and activates in seconds.
export async function POST(request: Request) {
  try {
    const user = await requireUser();
    if (!isPaystackConfigured()) {
      throw new ApiError("Instant payment is not configured yet — use the manual MoMo option.", 503);
    }
    const body = await request.json();
    const { plan } = schema.parse(body);

    const origin = new URL(request.url).origin;
    const { authorizationUrl, reference } = await initializeTransaction({
      email: user.email,
      planId: plan,
      userId: user.id,
      callbackUrl: `${origin}/dashboard/billing?paystack=1`,
    });

    return NextResponse.json({ authorizationUrl, reference });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
