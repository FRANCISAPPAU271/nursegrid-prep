import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { examSessions, questionCategories, questions } from "@/db/schema";
import type { ExamQuestionSnapshot } from "@/db/schema";
import { and, desc, eq, inArray, sql } from "drizzle-orm";
import { requireUser, handleApiError, ApiError } from "@/lib/api";
import { isSata } from "@/lib/sata";

const FREE_MAX_QUESTIONS = 20;
const PREMIUM_MAX_QUESTIONS = 100;
const MIN_QUESTIONS = 5;

const createSchema = z.object({
  questionCount: z.number().int().min(MIN_QUESTIONS).max(PREMIUM_MAX_QUESTIONS),
  categorySlugs: z.array(z.string()).optional(), // empty/omitted = all categories
});

export async function GET() {
  try {
    const user = await requireUser();
    const rows = await db
      .select({
        id: examSessions.id,
        title: examSessions.title,
        categorySlugs: examSessions.categorySlugs,
        totalQuestions: examSessions.totalQuestions,
        correctCount: examSessions.correctCount,
        status: examSessions.status,
        startedAt: examSessions.startedAt,
        completedAt: examSessions.completedAt,
      })
      .from(examSessions)
      .where(eq(examSessions.userId, user.id))
      .orderBy(desc(examSessions.startedAt))
      .limit(50);
    return NextResponse.json({ exams: rows });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST(request: Request) {
  try {
    const user = await requireUser();
    const body = await request.json();
    const data = createSchema.parse(body);

    const maxAllowed = user.isPremium ? PREMIUM_MAX_QUESTIONS : FREE_MAX_QUESTIONS;
    const questionCount = Math.min(data.questionCount, maxAllowed);

    let categoryFilter: string[] | undefined;
    let categoryLabel = "Mixed categories";
    if (data.categorySlugs && data.categorySlugs.length > 0) {
      const cats = await db
        .select({ id: questionCategories.id, name: questionCategories.name, slug: questionCategories.slug })
        .from(questionCategories)
        .where(inArray(questionCategories.slug, data.categorySlugs));
      if (cats.length === 0) throw new ApiError("No matching categories found", 400);
      categoryFilter = cats.map((c) => c.id);
      categoryLabel = cats.length === 1 ? cats[0].name : `${cats.length} categories`;
    }

    const whereParts = [];
    if (categoryFilter) whereParts.push(inArray(questions.categoryId, categoryFilter));
    if (!user.isPremium) whereParts.push(eq(questions.isFree, true));

    const whereClause = whereParts.length > 0 ? and(...whereParts) : undefined;

    const rows = await db
      .select({
        id: questions.id,
        categoryId: questions.categoryId,
        categoryName: questionCategories.name,
        stem: questions.stem,
        choices: questions.choices,
        correctChoiceId: questions.correctChoiceId,
        rationale: questions.rationale,
        strategy: questions.strategy,
        difficulty: questions.difficulty,
      })
      .from(questions)
      .innerJoin(questionCategories, eq(questions.categoryId, questionCategories.id))
      .where(whereClause)
      .orderBy(sql`random()`)
      .limit(questionCount);

    if (rows.length === 0) {
      throw new ApiError("No questions are available for the selected categories yet.", 404);
    }

    const snapshot: ExamQuestionSnapshot[] = rows.map((r) => ({
      id: r.id,
      categoryId: r.categoryId,
      categoryName: r.categoryName,
      stem: r.stem,
      choices: r.choices,
      correctChoiceId: r.correctChoiceId,
      rationale: r.rationale,
      strategy: r.strategy,
      difficulty: r.difficulty,
    }));

    const title = `${categoryLabel} · ${rows.length} questions`;

    const [exam] = await db
      .insert(examSessions)
      .values({
        userId: user.id,
        title,
        categorySlugs: data.categorySlugs ?? [],
        questionSnapshot: snapshot,
        totalQuestions: rows.length,
      })
      .returning();

    const safeQuestions = snapshot.map((q) => ({
      id: q.id,
      categoryId: q.categoryId,
      categoryName: q.categoryName,
      stem: q.stem,
      choices: q.choices,
      difficulty: q.difficulty,
      isSata: isSata(q.correctChoiceId),
    }));

    return NextResponse.json({ examId: exam.id, title: exam.title, questions: safeQuestions }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
