import { NextResponse } from "next/server";
import { z } from "zod";
import { handleApiError } from "@/lib/api";
import { redeemResetToken } from "@/lib/password-reset";

/**
 * The route `ResetPasswordForm` has been posting to all along.
 *
 * It never existed, so every reset-by-email attempt 404'd. Nothing else was
 * missing: the table, the template and the form were all there.
 */

const bodySchema = z.object({
  token: z.string().trim().min(1, "This reset link is incomplete"),
  password: z.string().min(6, "Password must be at least 6 characters").max(72),
});

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const data = bodySchema.parse(body);

    const result = await redeemResetToken(data.token, data.password);

    if (!result.ok) {
      return NextResponse.json(
        {
          error:
            result.reason === "expired"
              ? "That reset link has expired. Request a new one — they last one hour."
              : "That reset link is not valid. It may already have been used. Request a new one.",
        },
        { status: 400 },
      );
    }

    return NextResponse.json({
      ok: true,
      // Signing out everywhere is deliberate: if another person had access,
      // changing the password has to end it.
      signedOutEverywhere: true,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
