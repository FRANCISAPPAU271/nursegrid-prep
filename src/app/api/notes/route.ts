import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { notes } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";

const createSchema = z.object({
  title: z.string().trim().min(1).max(160),
  content: z.string().trim().max(8000).optional().or(z.literal("")),
  tag: z.string().trim().max(40).optional().or(z.literal("")),
  pinned: z.boolean().optional(),
});

export async function GET() {
  try {
    const user = await requireUser();
    const rows = await db
      .select()
      .from(notes)
      .where(eq(notes.userId, user.id))
      .orderBy(desc(notes.pinned), desc(notes.updatedAt));
    return NextResponse.json({ notes: rows });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: Request) {
  try {
    const user = await requireUser();
    const body = await request.json();
    const data = createSchema.parse(body);
    const [note] = await db
      .insert(notes)
      .values({
        userId: user.id,
        title: data.title,
        content: data.content || "",
        tag: data.tag || "general",
        pinned: data.pinned ?? false,
      })
      .returning();
    return NextResponse.json({ note }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
