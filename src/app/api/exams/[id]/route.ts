import { NextResponse } from "next/server";
import { db } from "@/db";
import { examSessions } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { requireUser, handleApiError, ApiError } from "@/lib/api";

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireUser();
    const { id } = await params;
    const rows = await db
      .select({ id: examSessions.id })
      .from(examSessions)
      .where(and(eq(examSessions.id, id), eq(examSessions.userId, user.id)))
      .limit(1);
    if (!rows[0]) throw new ApiError("Exam not found", 404);
    await db.delete(examSessions).where(eq(examSessions.id, id));
    return NextResponse.json({ ok: true });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireUser();
    const { id } = await params;

    const rows = await db
      .select()
      .from(examSessions)
      .where(and(eq(examSessions.id, id), eq(examSessions.userId, user.id)))
      .limit(1);
    const exam = rows[0];
    if (!exam) throw new ApiError("Exam not found", 404);

    if (exam.status === "completed") {
      // Full review: every question with the student's answer, the correct
      // answer, and the rationale/strategy.
      const answerMap = new Map(exam.answers.map((a) => [a.questionId, a]));
      const review = exam.questionSnapshot.map((q) => {
        const answer = answerMap.get(q.id);
        return {
          ...q,
          selectedChoiceId: answer?.selectedChoiceId ?? null,
          isCorrect: answer?.isCorrect ?? false,
        };
      });
      return NextResponse.json({
        exam: {
          id: exam.id,
          title: exam.title,
          status: exam.status,
          totalQuestions: exam.totalQuestions,
          correctCount: exam.correctCount,
          startedAt: exam.startedAt,
          completedAt: exam.completedAt,
        },
        review,
      });
    }

    // Still in progress: return safe (answer-free) questions so the client
    // can resume.
    const safeQuestions = exam.questionSnapshot.map((q) => ({
      id: q.id,
      categoryId: q.categoryId,
      categoryName: q.categoryName,
      stem: q.stem,
      choices: q.choices,
      difficulty: q.difficulty,
    }));
    return NextResponse.json({
      exam: {
        id: exam.id,
        title: exam.title,
        status: exam.status,
        totalQuestions: exam.totalQuestions,
        correctCount: exam.correctCount,
        startedAt: exam.startedAt,
        completedAt: exam.completedAt,
      },
      questions: safeQuestions,
    });
  } catch (error) {
    return handleApiError(error);
  }
}
