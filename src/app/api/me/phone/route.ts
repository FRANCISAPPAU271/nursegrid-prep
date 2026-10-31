import { NextResponse } from "next/server";
import { z } from "zod";
import { sql } from "drizzle-orm";
import { db } from "@/db";
import { requireUser, handleApiError, ApiError } from "@/lib/api";
import { isSmsConfigured, normalizeGhPhone, sendSms } from "@/lib/sms";
import { createOtp, verifyOtp, linkPhoneToUser, phoneForUser } from "@/db/phone-otp";

export const dynamic = "force-dynamic";

/**
 * Add a phone number to an existing account.
 *
 * A verified phone is the most durable recovery anchor this product can offer:
 * students change phones, share phones and lose access to old email addresses,
 * but the number they registered with is the one they still hold. Until now a
 * number could only be attached during signup as a side effect of claiming a
 * trial, so an existing customer had no way to gain this route back in.
 */

const schema = z.object({
  action: z.enum(["send", "verify", "status"]),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  code: z.string().trim().min(4).max(8).optional(),
});

export async function POST(request: Request) {
  try {
    const user = await requireUser();
    const data = schema.parse(await request.json().catch(() => ({})));

    if (data.action === "status") {
      return NextResponse.json({
        phone: await phoneForUser(user.id),
        smsConfigured: isSmsConfigured(),
      });
    }

    if (!isSmsConfigured()) {
      throw new ApiError("Phone sign-in is not available right now.", 503);
    }

    const phone = normalizeGhPhone(data.phone ?? "");
    if (!phone) throw new ApiError("Enter a valid Ghana phone number, e.g. 024 123 4567.", 422);

    if (data.action === "send") {
      // A number already belonging to a different account must not be hijacked
      // by attaching it here: the owner would lose their own recovery route.
      const taken = await db.execute(sql`
        SELECT "user_id" FROM "verified_phones" WHERE "phone" = ${phone} AND "user_id" IS NOT NULL LIMIT 1
      `);
      const owner = (taken.rows[0] as { user_id?: string } | undefined)?.user_id;
      if (owner && owner !== user.id) {
        throw new ApiError(
          "That number is already linked to another NurseGrid Prep account. Contact support if it is yours.",
          409,
        );
      }

      const result = await createOtp(phone, null);
      if ("error" in result) throw new ApiError(result.error, 429);
      await sendSms(phone, `Your NurseGrid Prep verification code is ${result.code}. It expires in 10 minutes. Never share this code.`);
      return NextResponse.json({ ok: true, sent: true, phone });
    }

    // verify
    const verification = await verifyOtp(phone, data.code ?? "");
    if (!verification.ok) throw new ApiError(verification.error ?? "Verification failed.", 422);

    // Only one recovery number per account: replace the previous one so the
    // student is not left guessing which number still works.
    await db.execute(sql`UPDATE "verified_phones" SET "user_id" = NULL WHERE "user_id" = ${user.id}`);
    await linkPhoneToUser(phone, user.id);

    return NextResponse.json({ ok: true, phone, linked: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
