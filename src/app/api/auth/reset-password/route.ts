import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { users, passwordResetTokens, sessions } from "@/db/schema";
import { eq } from "drizzle-orm";
import { handleApiError, ApiError } from "@/lib/api";
import { hashPassword } from "@/lib/auth";

const schema = z.object({
  token: z.string().trim().min(10),
  password: z.string().min(6, "Password must be at least 6 characters").max(72),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { token, password } = schema.parse(body);

    const rows = await db.select().from(passwordResetTokens).where(eq(passwordResetTokens.token, token)).limit(1);
    const record = rows[0];

    if (!record) throw new ApiError("This reset link is invalid. Please request a new one.", 400);
    if (record.usedAt) throw new ApiError("This reset link has already been used. Please request a new one.", 400);
    if (record.expiresAt.getTime() < Date.now()) {
      throw new ApiError("This reset link has expired. Please request a new one.", 400);
    }

    const passwordHash = await hashPassword(password);
    await db.update(users).set({ passwordHash }).where(eq(users.id, record.userId));
    await db.update(passwordResetTokens).set({ usedAt: new Date() }).where(eq(passwordResetTokens.token, token));

    // Invalidate all existing sessions for this user as a security measure
    // now that the password has changed.
    await db.delete(sessions).where(eq(sessions.userId, record.userId));

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
