import { NextResponse } from "next/server";
import { db } from "@/db";
import { catSessions, questionCategories, questions } from "@/db/schema";
import { and, desc, eq, sql, notLike } from "drizzle-orm";
import { requireUser, handleApiError, ApiError } from "@/lib/api";
import { CAT_MAX_QUESTIONS, CAT_MIN_QUESTIONS, targetDifficulty } from "@/lib/cat";

export async function GET() {
  try {
    const user = await requireUser();
    const rows = await db
      .select({
        id: catSessions.id,
        status: catSessions.status,
        theta: catSessions.theta,
        correctCount: catSessions.correctCount,
        askedQuestionIds: catSessions.askedQuestionIds,
        minQuestions: catSessions.minQuestions,
        maxQuestions: catSessions.maxQuestions,
        startedAt: catSessions.startedAt,
        completedAt: catSessions.completedAt,
      })
      .from(catSessions)
      .where(eq(catSessions.userId, user.id))
      .orderBy(desc(catSessions.startedAt))
      .limit(50);

    return NextResponse.json({
      sessions: rows.map((r) => ({
        id: r.id,
        status: r.status,
        correctCount: r.correctCount,
        questionsAnswered: r.askedQuestionIds.length,
        minQuestions: r.minQuestions,
        maxQuestions: r.maxQuestions,
        startedAt: r.startedAt,
        completedAt: r.completedAt,
      })),
    });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function POST() {
  try {
    const user = await requireUser();

    // Only one active CAT session at a time per user — clear any stale
    // in-progress session before starting a fresh one.
    const existing = await db
      .select({ id: catSessions.id })
      .from(catSessions)
      .where(and(eq(catSessions.userId, user.id), eq(catSessions.status, "in_progress")))
      .limit(1);
    if (existing[0]) {
      await db.delete(catSessions).where(eq(catSessions.id, existing[0].id));
    }

    const startingDifficulty = targetDifficulty(0);
    // SATA questions are excluded from CAT: all-or-nothing multi-select
    // items would distort the single-answer difficulty model.
    const whereParts = [eq(questions.difficulty, startingDifficulty), notLike(questions.correctChoiceId, "%,%")];
    if (!user.isPremium) whereParts.push(eq(questions.isFree, true));

    const [firstQuestion] = await db
      .select({
        id: questions.id,
        categoryId: questions.categoryId,
        categoryName: questionCategories.name,
        stem: questions.stem,
        choices: questions.choices,
        difficulty: questions.difficulty,
      })
      .from(questions)
      .innerJoin(questionCategories, eq(questions.categoryId, questionCategories.id))
      .where(and(...whereParts))
      .orderBy(sql`random()`)
      .limit(1);

    if (!firstQuestion) throw new ApiError("No questions are available to start a CAT session yet.", 404);

    const [session] = await db
      .insert(catSessions)
      .values({
        userId: user.id,
        theta: 0,
        minQuestions: CAT_MIN_QUESTIONS,
        maxQuestions: CAT_MAX_QUESTIONS,
        currentQuestionId: firstQuestion.id,
        askedQuestionIds: [firstQuestion.id],
      })
      .returning();

    return NextResponse.json(
      {
        sessionId: session.id,
        minQuestions: session.minQuestions,
        maxQuestions: session.maxQuestions,
        questionNumber: 1,
        question: {
          id: firstQuestion.id,
          categoryName: firstQuestion.categoryName,
          stem: firstQuestion.stem,
          choices: firstQuestion.choices,
          difficulty: firstQuestion.difficulty,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    return handleApiError(error);
  }
}
