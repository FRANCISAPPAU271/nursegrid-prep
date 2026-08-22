import { NextResponse } from "next/server";
import { db } from "@/db";
import { catSessions, questionCategories, questions } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { requireUser, handleApiError, ApiError } from "@/lib/api";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireUser();
    const { id } = await params;

    const rows = await db
      .select()
      .from(catSessions)
      .where(and(eq(catSessions.id, id), eq(catSessions.userId, user.id)))
      .limit(1);
    const session = rows[0];
    if (!session) throw new ApiError("CAT session not found", 404);

    let currentQuestion = null;
    if (session.status === "in_progress" && session.currentQuestionId) {
      const qRows = await db
        .select({
          id: questions.id,
          categoryName: questionCategories.name,
          stem: questions.stem,
          choices: questions.choices,
          difficulty: questions.difficulty,
        })
        .from(questions)
        .innerJoin(questionCategories, eq(questions.categoryId, questionCategories.id))
        .where(eq(questions.id, session.currentQuestionId))
        .limit(1);
      currentQuestion = qRows[0] ?? null;
    }

    return NextResponse.json({
      session: {
        id: session.id,
        status: session.status,
        correctCount: session.correctCount,
        questionsAnswered: session.askedQuestionIds.length,
        minQuestions: session.minQuestions,
        maxQuestions: session.maxQuestions,
        startedAt: session.startedAt,
        completedAt: session.completedAt,
      },
      questionNumber: session.askedQuestionIds.length,
      question: currentQuestion,
      history: session.history,
    });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireUser();
    const { id } = await params;
    const rows = await db
      .select({ id: catSessions.id })
      .from(catSessions)
      .where(and(eq(catSessions.id, id), eq(catSessions.userId, user.id)))
      .limit(1);
    if (!rows[0]) throw new ApiError("CAT session not found", 404);
    await db.delete(catSessions).where(eq(catSessions.id, id));
    return NextResponse.json({ ok: true });
  } catch (error) {
    return handleApiError(error);
  }
}
