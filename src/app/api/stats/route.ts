import { NextResponse } from "next/server";
import { db } from "@/db";
import { tasks, notes, questionAttempts } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";

export async function GET() {
  try {
    const user = await requireUser();

    const [taskStats] = await db
      .select({
        total: sql<number>`count(*)`.mapWith(Number),
        done: sql<number>`count(*) filter (where ${tasks.status} = 'done')`.mapWith(Number),
        inProgress: sql<number>`count(*) filter (where ${tasks.status} = 'in_progress')`.mapWith(Number),
        overdue: sql<number>`count(*) filter (where ${tasks.status} != 'done' and ${tasks.dueDate} is not null and ${tasks.dueDate} < now())`.mapWith(Number),
      })
      .from(tasks)
      .where(eq(tasks.userId, user.id));

    const [noteStats] = await db
      .select({ total: sql<number>`count(*)`.mapWith(Number) })
      .from(notes)
      .where(eq(notes.userId, user.id));

    const [questionStats] = await db
      .select({
        attempted: sql<number>`count(*)`.mapWith(Number),
        correct: sql<number>`count(*) filter (where ${questionAttempts.isCorrect} = true)`.mapWith(Number),
      })
      .from(questionAttempts)
      .where(eq(questionAttempts.userId, user.id));

    const upcomingTasks = await db
      .select()
      .from(tasks)
      .where(eq(tasks.userId, user.id))
      .orderBy(tasks.dueDate)
      .limit(50);

    const nextUp = upcomingTasks
      .filter((t) => t.status !== "done")
      .sort((a, b) => {
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return a.dueDate.getTime() - b.dueDate.getTime();
      })
      .slice(0, 5);

    return NextResponse.json({
      tasks: taskStats,
      notes: noteStats,
      questions: questionStats,
      nextUp,
      isPremium: user.isPremium,
    });
  } catch (error) {
    return handleApiError(error);
  }
}
