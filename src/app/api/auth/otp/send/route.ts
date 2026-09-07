import { NextResponse } from "next/server";
import { z } from "zod";
import { handleApiError } from "@/lib/api";
import { isSmsConfigured, normalizeGhPhone, sendSms } from "@/lib/sms";
import { createOtp } from "@/db/phone-otp";

export const dynamic = "force-dynamic";

const schema = z.object({
  phone: z.string().trim().min(9, "Enter your phone number").max(20),
  deviceId: z.string().trim().max(80).optional().or(z.literal("")),
});

// POST /api/auth/otp/send — send a 6-digit verification code to a Ghanaian
// phone number ahead of signup. No-ops with a clear message when SMS isn't
// configured, so the client can hide the whole step.
export async function POST(request: Request) {
  try {
    if (!isSmsConfigured()) {
      return NextResponse.json({ error: "Phone verification is not available right now." }, { status: 503 });
    }
    const body = await request.json();
    const { phone, deviceId } = schema.parse(body);

    const normalized = normalizeGhPhone(phone);
    if (!normalized) {
      return NextResponse.json(
        { error: "Enter a valid Ghana number, e.g. 024 123 4567." },
        { status: 422 },
      );
    }

    const result = await createOtp(normalized, deviceId?.trim() || null);
    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: 429 });
    }

    await sendSms(
      normalized,
      `Your NurseGrid Prep verification code is ${result.code}. It expires in 10 minutes. Never share this code.`,
    );

    return NextResponse.json({ ok: true, phone: normalized });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
