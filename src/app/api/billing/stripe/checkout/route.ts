import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";
import { getStripe, isStripeConfigured, PLAN_DETAILS } from "@/lib/stripe";

const schema = z.object({ plan: z.enum(["four_month", "eight_month", "annual"]) });

export async function POST(request: Request) {
  try {
    if (!isStripeConfigured()) {
      return NextResponse.json({ error: "Stripe is not configured on this server yet." }, { status: 503 });
    }

    const user = await requireUser();
    const body = await request.json();
    const { plan: planId } = schema.parse(body);
    const plan = PLAN_DETAILS[planId];
    const stripe = getStripe();
    const origin = new URL(request.url).origin;

    let customerId = (await db.select({ stripeCustomerId: users.stripeCustomerId }).from(users).where(eq(users.id, user.id)).limit(1))[0]?.stripeCustomerId;
    if (!customerId) {
      const customer = await stripe.customers.create({ email: user.email, name: user.name, metadata: { userId: user.id } });
      customerId = customer.id;
      await db.update(users).set({ stripeCustomerId: customerId }).where(eq(users.id, user.id));
    }

    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: plan.amountCents,
            product_data: { name: `NurseGrid Prep — ${plan.label} access` },
          },
          quantity: 1,
        },
      ],
      success_url: `${origin}/dashboard/billing?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/dashboard/billing?checkout=cancelled`,
      client_reference_id: user.id,
      metadata: { userId: user.id, plan: planId },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
