import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdmin, handleApiError } from "@/lib/api";
import { emailReadiness, sendTestEmail } from "@/lib/email-diagnose";

export const dynamic = "force-dynamic";

const schema = z.object({ to: z.string().trim().toLowerCase().email("Enter a valid email address") });

/** GET — what the provider thinks of our sending domain. Sends nothing. */
export async function GET() {
  try {
    await requireAdmin();
    return NextResponse.json(await emailReadiness());
  } catch (error) {
    return handleApiError(error);
  }
}

/**
 * POST — send one real message and report the provider's reply verbatim.
 *
 * Admin-only, and deliberately on demand rather than on a schedule: it spends a
 * slot from the daily sending quota, and the point is for a human to watch an
 * inbox and see whether the message lands.
 */
export async function POST(request: Request) {
  try {
    await requireAdmin();
    const parsed = schema.safeParse(await request.json().catch(() => ({})));
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Enter a valid email address" }, { status: 422 });
    }

    const readiness = await emailReadiness();
    if (!readiness.configured) {
      return NextResponse.json({ ok: false, error: readiness.summary, readiness }, { status: 503 });
    }

    const result = await sendTestEmail(parsed.data.to);
    return NextResponse.json({ ...result, readiness });
  } catch (error) {
    return handleApiError(error);
  }
}
