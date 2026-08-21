import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { notes } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { requireUser, handleApiError, ApiError } from "@/lib/api";

const updateSchema = z.object({
  title: z.string().trim().min(1).max(160).optional(),
  content: z.string().trim().max(8000).optional().or(z.literal("")),
  tag: z.string().trim().max(40).optional().or(z.literal("")),
  pinned: z.boolean().optional(),
});

async function loadOwnedNote(userId: string, id: string) {
  const rows = await db
    .select()
    .from(notes)
    .where(and(eq(notes.id, id), eq(notes.userId, userId)))
    .limit(1);
  const note = rows[0];
  if (!note) throw new ApiError("Note not found", 404);
  return note;
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireUser();
    const { id } = await params;
    await loadOwnedNote(user.id, id);
    const body = await request.json();
    const data = updateSchema.parse(body);

    const [updated] = await db
      .update(notes)
      .set({
        ...(data.title !== undefined ? { title: data.title } : {}),
        ...(data.content !== undefined ? { content: data.content } : {}),
        ...(data.tag !== undefined ? { tag: data.tag || "general" } : {}),
        ...(data.pinned !== undefined ? { pinned: data.pinned } : {}),
        updatedAt: new Date(),
      })
      .where(eq(notes.id, id))
      .returning();

    return NextResponse.json({ note: updated });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireUser();
    const { id } = await params;
    await loadOwnedNote(user.id, id);
    await db.delete(notes).where(eq(notes.id, id));
    return NextResponse.json({ ok: true });
  } catch (error) {
    return handleApiError(error);
  }
}
