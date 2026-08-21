import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { tasks } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { requireUser, handleApiError, ApiError } from "@/lib/api";

const updateSchema = z.object({
  title: z.string().trim().min(2).max(160).optional(),
  description: z.string().trim().max(2000).optional().or(z.literal("")).nullable(),
  category: z.enum(["clinical", "assignment", "study", "exam", "skills_lab", "personal"]).optional(),
  status: z.enum(["todo", "in_progress", "done"]).optional(),
  priority: z.enum(["low", "medium", "high"]).optional(),
  dueDate: z.string().datetime().optional().or(z.literal("")).nullable(),
});

async function loadOwnedTask(userId: string, id: string) {
  const rows = await db
    .select()
    .from(tasks)
    .where(and(eq(tasks.id, id), eq(tasks.userId, userId)))
    .limit(1);
  const task = rows[0];
  if (!task) throw new ApiError("Task not found", 404);
  return task;
}

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireUser();
    const { id } = await params;
    await loadOwnedTask(user.id, id);
    const body = await request.json();
    const data = updateSchema.parse(body);

    const [updated] = await db
      .update(tasks)
      .set({
        ...(data.title !== undefined ? { title: data.title } : {}),
        ...(data.description !== undefined ? { description: data.description || null } : {}),
        ...(data.category !== undefined ? { category: data.category } : {}),
        ...(data.status !== undefined ? { status: data.status } : {}),
        ...(data.priority !== undefined ? { priority: data.priority } : {}),
        ...(data.dueDate !== undefined ? { dueDate: data.dueDate ? new Date(data.dueDate) : null } : {}),
        updatedAt: new Date(),
      })
      .where(eq(tasks.id, id))
      .returning();

    return NextResponse.json({ task: updated });
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
    await loadOwnedTask(user.id, id);
    await db.delete(tasks).where(eq(tasks.id, id));
    return NextResponse.json({ ok: true });
  } catch (error) {
    return handleApiError(error);
  }
}
