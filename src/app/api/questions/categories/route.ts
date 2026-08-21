import { NextResponse } from "next/server";
import { db } from "@/db";
import { questionCategories, questions, questionAttempts } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";

export async function GET() {
  try {
    const user = await requireUser();

    const categoryRows = await db
      .select({
        id: questionCategories.id,
        slug: questionCategories.slug,
        name: questionCategories.name,
        description: questionCategories.description,
        clientNeed: questionCategories.clientNeed,
        icon: questionCategories.icon,
        sortOrder: questionCategories.sortOrder,
        totalQuestions: sql<number>`count(distinct ${questions.id})`.mapWith(Number),
        freeQuestions: sql<number>`count(distinct ${questions.id}) filter (where ${questions.isFree} = true)`.mapWith(Number),
      })
      .from(questionCategories)
      .leftJoin(questions, eq(questions.categoryId, questionCategories.id))
      .groupBy(questionCategories.id)
      .orderBy(questionCategories.sortOrder);

    const progressRows = await db
      .select({
        categoryId: questionAttempts.categoryId,
        attempted: sql<number>`count(*)`.mapWith(Number),
        correct: sql<number>`count(*) filter (where ${questionAttempts.isCorrect} = true)`.mapWith(Number),
      })
      .from(questionAttempts)
      .where(eq(questionAttempts.userId, user.id))
      .groupBy(questionAttempts.categoryId);

    const progressMap = new Map(progressRows.map((p) => [p.categoryId, p]));

    const categories = categoryRows.map((c) => ({
      ...c,
      attempted: progressMap.get(c.id)?.attempted ?? 0,
      correct: progressMap.get(c.id)?.correct ?? 0,
    }));

    return NextResponse.json({ categories, isPremium: user.isPremium });
  } catch (error) {
    return handleApiError(error);
  }
}
