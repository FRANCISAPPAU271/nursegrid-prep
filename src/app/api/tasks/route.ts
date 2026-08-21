import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { tasks } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";

const createSchema = z.object({
  title: z.string().trim().min(2).max(160),
  description: z.string().trim().max(2000).optional().or(z.literal("")),
  category: z.enum(["clinical", "assignment", "study", "exam", "skills_lab", "personal"]).default("study"),
  status: z.enum(["todo", "in_progress", "done"]).default("todo"),
  priority: z.enum(["low", "medium", "high"]).default("medium"),
  dueDate: z.string().datetime().optional().or(z.literal("")).nullable(),
});

export async function GET() {
  try {
    const user = await requireUser();
    const rows = await db
      .select()
      .from(tasks)
      .where(eq(tasks.userId, user.id))
      .orderBy(desc(tasks.createdAt));
    return NextResponse.json({ tasks: rows });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: Request) {
  try {
    const user = await requireUser();
    const body = await request.json();
    const data = createSchema.parse(body);

    const [task] = await db
      .insert(tasks)
      .values({
        userId: user.id,
        title: data.title,
        description: data.description || null,
        category: data.category,
        status: data.status,
        priority: data.priority,
        dueDate: data.dueDate ? new Date(data.dueDate) : null,
      })
      .returning();

    return NextResponse.json({ task }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
