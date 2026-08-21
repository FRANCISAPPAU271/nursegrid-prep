import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";
import { hashPassword, verifyPassword } from "@/lib/auth";

const schema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(6).max(72),
});

export async function POST(request: Request) {
  try {
    const user = await requireUser();
    const body = await request.json();
    const data = schema.parse(body);

    const rows = await db.select().from(users).where(eq(users.id, user.id)).limit(1);
    const record = rows[0];
    if (!record) throw new Error("User not found");

    const valid = await verifyPassword(data.currentPassword, record.passwordHash);
    if (!valid) {
      return NextResponse.json({ error: "Current password is incorrect." }, { status: 401 });
    }

    const passwordHash = await hashPassword(data.newPassword);
    await db.update(users).set({ passwordHash }).where(eq(users.id, user.id));

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
