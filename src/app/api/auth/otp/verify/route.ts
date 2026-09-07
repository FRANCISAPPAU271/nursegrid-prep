import { NextResponse } from "next/server";
import { z } from "zod";
import { handleApiError } from "@/lib/api";
import { isSmsConfigured, normalizeGhPhone } from "@/lib/sms";
import { verifyOtp } from "@/db/phone-otp";

export const dynamic = "force-dynamic";

const schema = z.object({
  phone: z.string().trim().min(9).max(20),
  code: z.string().trim().min(4, "Enter the 6-digit code").max(8),
});

// POST /api/auth/otp/verify — check the 6-digit code the user received.
// A successful verification is remembered for 1 hour so the signup that
// follows can trust it.
export async function POST(request: Request) {
  try {
    if (!isSmsConfigured()) {
      return NextResponse.json({ error: "Phone verification is not available right now." }, { status: 503 });
    }
    const body = await request.json();
    const { phone, code } = schema.parse(body);

    const normalized = normalizeGhPhone(phone);
    if (!normalized) {
      return NextResponse.json({ error: "Enter a valid Ghana number." }, { status: 422 });
    }

    const result = await verifyOtp(normalized, code);
    if (!result.ok) {
      return NextResponse.json({ error: result.error ?? "Verification failed" }, { status: 422 });
    }

    return NextResponse.json({ ok: true, phone: normalized });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
