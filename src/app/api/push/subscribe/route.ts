import { NextResponse } from "next/server";
import { z } from "zod";
import { requireUser, handleApiError } from "@/lib/api";
import { isPushConfigured, removeSubscription, saveSubscription, subscriptionCount } from "@/lib/web-push";

// Browser push subscriptions. The browser hands us an endpoint plus two keys;
// we store them against the signed-in user. No token is trusted for identity —
// the session decides whose row this is, so one user cannot subscribe another.

const schema = z.object({
  endpoint: z.string().url().max(2048),
  keys: z.object({
    p256dh: z.string().min(10).max(512),
    auth: z.string().min(5).max(512),
  }),
});

export async function GET() {
  try {
    const user = await requireUser();
    return NextResponse.json({
      configured: isPushConfigured(),
      subscriptions: await subscriptionCount(user.id),
    });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: Request) {
  try {
    const user = await requireUser();
    if (!isPushConfigured()) {
      return NextResponse.json({ error: "Push is not configured on this deployment" }, { status: 503 });
    }
    const data = schema.parse(await request.json());
    await saveSubscription(user.id, data, request.headers.get("user-agent"));
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}

export async function DELETE(request: Request) {
  try {
    await requireUser();
    const endpoint = schema.pick({ endpoint: true }).parse(await request.json()).endpoint;
    await removeSubscription(endpoint);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
