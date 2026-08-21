import { NextResponse } from "next/server";
import { z } from "zod";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";

export async function GET() {
  const user = await getCurrentUser();
  return NextResponse.json({ user });
}

const updateSchema = z.object({
  name: z.string().trim().min(2).max(80).optional(),
  school: z.string().trim().max(120).optional().or(z.literal("")),
  cohort: z.string().trim().max(60).optional().or(z.literal("")),
});

export async function PATCH(request: Request) {
  try {
    const user = await requireUser();
    const body = await request.json();
    const data = updateSchema.parse(body);
    const [updated] = await db
      .update(users)
      .set({
        ...(data.name !== undefined ? { name: data.name } : {}),
        ...(data.school !== undefined ? { school: data.school || null } : {}),
        ...(data.cohort !== undefined ? { cohort: data.cohort || null } : {}),
      })
      .where(eq(users.id, user.id))
      .returning({ id: users.id, name: users.name, email: users.email, school: users.school, cohort: users.cohort });
    return NextResponse.json({ user: updated });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
