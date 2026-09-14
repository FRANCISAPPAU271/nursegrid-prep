import { NextResponse } from "next/server";
import { z } from "zod";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { handleApiError } from "@/lib/api";
import { createSession } from "@/lib/auth";
import { isSmsConfigured, normalizeGhPhone, sendSms } from "@/lib/sms";
import { createOtp, verifyOtp } from "@/db/phone-otp";

export const dynamic = "force-dynamic";

const schema = z.object({
  action: z.enum(["send", "verify"]),
  phone: z.string().trim().min(9).max(20),
  code: z.string().trim().min(4).max(8).optional(),
});

/** Sign in an existing account with its verified Ghana phone and a one-time code. */
export async function POST(request: Request) {
  try {
    if (!isSmsConfigured()) {
      return NextResponse.json({ error: "Phone sign-in is not available right now." }, { status: 503 });
    }
    const data = schema.parse(await request.json());
    const phone = normalizeGhPhone(data.phone);
    if (!phone) return NextResponse.json({ error: "Enter a valid Ghana number." }, { status: 422 });

    if (data.action === "send") {
      const result = await createOtp(phone, null);
      if ("error" in result) return NextResponse.json({ error: result.error }, { status: 429 });
      await sendSms(phone, `Your NurseGrid Prep sign-in code is ${result.code}. It expires in 10 minutes. Never share this code.`);
      return NextResponse.json({ ok: true });
    }

    const verification = await verifyOtp(phone, data.code ?? "");
    if (!verification.ok) return NextResponse.json({ error: verification.error ?? "Verification failed." }, { status: 422 });

    const rows = await db.execute(sql`
      SELECT "user_id" FROM "verified_phones" WHERE "phone" = ${phone} AND "user_id" IS NOT NULL LIMIT 1
    `);
    const userId = (rows.rows[0] as { user_id?: string } | undefined)?.user_id;
    if (!userId) {
      return NextResponse.json({ error: "No NurseGrid account is linked to that phone. Try your registered email or contact support." }, { status: 404 });
    }

    await createSession(userId, {
      userAgent: request.headers.get("user-agent"),
      ipAddress: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    return handleApiError(error);
  }
}
