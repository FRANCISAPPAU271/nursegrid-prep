import { NextResponse } from "next/server";
import { db } from "@/db";
import { questionCategories, questions, questionBookmarks } from "@/db/schema";
import { and, asc, eq, inArray, sql, type SQL } from "drizzle-orm";
import { requireUser, handleApiError, ApiError } from "@/lib/api";
import { isSata } from "@/lib/sata";

export async function GET(request: Request) {
  try {
    const user = await requireUser();
    const { searchParams } = new URL(request.url);
    const categorySlug = searchParams.get("category");
    const limit = Math.min(Math.max(Number(searchParams.get("limit") ?? 20), 1), 50);
    const offset = Math.max(Number(searchParams.get("offset") ?? 0), 0);
    const onlyBookmarked = searchParams.get("bookmarked") === "true";
    const random = searchParams.get("random") === "true";

    let categoryId: string | undefined;
    let categoryLocked = false;
    if (categorySlug) {
      const cat = await db
        .select()
        .from(questionCategories)
        .where(eq(questionCategories.slug, categorySlug))
        .limit(1);
      if (!cat[0]) throw new ApiError("Category not found", 404);
      categoryId = cat[0].id;
    }

    const conditions: SQL[] = [];
    if (categoryId) conditions.push(eq(questions.categoryId, categoryId));
    if (!user.isPremium) {
      conditions.push(eq(questions.isFree, true));
      categoryLocked = true;
    }

    if (onlyBookmarked) {
      const bookmarkRows = await db
        .select({ questionId: questionBookmarks.questionId })
        .from(questionBookmarks)
        .where(eq(questionBookmarks.userId, user.id));
      const ids = bookmarkRows.map((b) => b.questionId);
      if (ids.length === 0) {
        return NextResponse.json({ questions: [], total: 0, locked: categoryLocked });
      }
      conditions.push(inArray(questions.id, ids));
    }

    const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

    const [{ count }] = await db
      .select({ count: sql<number>`count(*)`.mapWith(Number) })
      .from(questions)
      .where(whereClause);

    const rows = await db
      .select({
        id: questions.id,
        categoryId: questions.categoryId,
        stem: questions.stem,
        choices: questions.choices,
        correctChoiceId: questions.correctChoiceId,
        rationale: questions.rationale,
        strategy: questions.strategy,
        difficulty: questions.difficulty,
        tags: questions.tags,
        isFree: questions.isFree,
      })
      .from(questions)
      .where(whereClause)
      .orderBy(random ? sql`random()` : asc(questions.createdAt))
      .limit(limit)
      .offset(random ? 0 : offset);

    const bookmarkRows = await db
      .select({ questionId: questionBookmarks.questionId })
      .from(questionBookmarks)
      .where(
        and(
          eq(questionBookmarks.userId, user.id),
          inArray(
            questionBookmarks.questionId,
            rows.map((r) => r.id),
          ),
        ),
      );
    const bookmarkedSet = new Set(bookmarkRows.map((b) => b.questionId));

    // Hide the correct answer + rationale/strategy until the client submits an attempt.
    const safeRows = rows.map((r) => ({
      id: r.id,
      categoryId: r.categoryId,
      stem: r.stem,
      choices: r.choices,
      difficulty: r.difficulty,
      tags: r.tags,
      isFree: r.isFree,
      isBookmarked: bookmarkedSet.has(r.id),
      isSata: isSata(r.correctChoiceId),
    }));

    return NextResponse.json({ questions: safeRows, total: count, locked: categoryLocked });
  } catch (error) {
    return handleApiError(error);
  }
}
