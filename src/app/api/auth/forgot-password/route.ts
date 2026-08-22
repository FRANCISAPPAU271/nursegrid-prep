import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { users, passwordResetTokens } from "@/db/schema";
import { eq } from "drizzle-orm";
import { handleApiError } from "@/lib/api";
import { isEmailConfigured, sendPasswordResetEmail } from "@/lib/email";

const schema = z.object({ email: z.string().trim().toLowerCase().email("Enter a valid email") });

const RESET_TOKEN_TTL_MS = 60 * 60 * 1000; // 1 hour

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = schema.parse(body);

    const rows = await db.select({ id: users.id, name: users.name }).from(users).where(eq(users.email, email)).limit(1);
    const user = rows[0];

    // Always respond with the same generic message whether or not the email
    // exists, so we don't leak which emails have accounts.
    const genericResponse = {
      ok: true,
      message: "If an account exists for that email, a password reset link has been sent.",
    };

    if (!user) {
      return NextResponse.json(genericResponse);
    }

    const token = crypto.randomUUID() + crypto.randomUUID();
    const expiresAt = new Date(Date.now() + RESET_TOKEN_TTL_MS);
    await db.insert(passwordResetTokens).values({ token, userId: user.id, expiresAt });

    const origin = new URL(request.url).origin;
    const resetUrl = `${origin}/reset-password?token=${token}`;

    if (isEmailConfigured()) {
      await sendPasswordResetEmail(email, user.name, resetUrl);
      return NextResponse.json(genericResponse);
    }

    // Fallback for when no email provider (RESEND_API_KEY) is configured yet:
    // return the reset link directly in the response so the flow is still
    // fully testable end-to-end. Clearly flagged as a dev/demo fallback.
    return NextResponse.json({
      ...genericResponse,
      devResetUrl: resetUrl,
      devNote: "Email sending isn't configured yet, so here's your reset link directly. Add RESEND_API_KEY to send real emails instead.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
