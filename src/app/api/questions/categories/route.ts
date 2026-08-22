import { NextResponse } from "next/server";
import { db } from "@/db";
import { questionAttempts } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";
import { getCachedCategorySummaries } from "@/lib/catalog";

export async function GET() {
  try {
    const user = await requireUser();

    const [categoryRows, progressRows] = await Promise.all([
      getCachedCategorySummaries(),
      db
        .select({
          categoryId: questionAttempts.categoryId,
          attempted: sql<number>`count(*)`.mapWith(Number),
          correct: sql<number>`count(*) filter (where ${questionAttempts.isCorrect} = true)`.mapWith(Number),
        })
        .from(questionAttempts)
        .where(eq(questionAttempts.userId, user.id))
        .groupBy(questionAttempts.categoryId),
    ]);

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
