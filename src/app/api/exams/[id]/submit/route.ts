import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { examSessions, questionAttempts } from "@/db/schema";
import type { ExamAnswer } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { requireUser, handleApiError, ApiError } from "@/lib/api";

const schema = z.object({
  answers: z.array(z.object({ questionId: z.string(), selectedChoiceId: z.string() })).min(1),
});

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireUser();
    const { id } = await params;
    const body = await request.json();
    const { answers } = schema.parse(body);

    const rows = await db
      .select()
      .from(examSessions)
      .where(and(eq(examSessions.id, id), eq(examSessions.userId, user.id)))
      .limit(1);
    const exam = rows[0];
    if (!exam) throw new ApiError("Exam not found", 404);
    if (exam.status === "completed") throw new ApiError("This exam has already been submitted.", 400);

    const answerMap = new Map(answers.map((a) => [a.questionId, a.selectedChoiceId]));
    const gradedAnswers: ExamAnswer[] = [];
    let correctCount = 0;

    for (const q of exam.questionSnapshot) {
      const selectedChoiceId = answerMap.get(q.id);
      if (!selectedChoiceId) continue; // unanswered question
      const isCorrect = selectedChoiceId === q.correctChoiceId;
      if (isCorrect) correctCount++;
      gradedAnswers.push({ questionId: q.id, selectedChoiceId, isCorrect });
    }

    const [updated] = await db
      .update(examSessions)
      .set({
        answers: gradedAnswers,
        correctCount,
        status: "completed",
        completedAt: new Date(),
      })
      .where(eq(examSessions.id, id))
      .returning();

    // Also log each answer as a question attempt so category progress stats
    // (used elsewhere in the app) stay consistent with custom exam activity.
    if (gradedAnswers.length > 0) {
      await db.insert(questionAttempts).values(
        gradedAnswers.map((a) => {
          const snap = exam.questionSnapshot.find((q) => q.id === a.questionId)!;
          return {
            userId: user.id,
            questionId: a.questionId,
            categoryId: snap.categoryId,
            selectedChoiceId: a.selectedChoiceId,
            isCorrect: a.isCorrect,
          };
        }),
      );
    }

    const answerMapById = new Map(gradedAnswers.map((a) => [a.questionId, a]));
    const review = exam.questionSnapshot.map((q) => {
      const answer = answerMapById.get(q.id);
      return {
        ...q,
        selectedChoiceId: answer?.selectedChoiceId ?? null,
        isCorrect: answer?.isCorrect ?? false,
      };
    });

    return NextResponse.json({
      exam: {
        id: updated.id,
        title: updated.title,
        status: updated.status,
        totalQuestions: updated.totalQuestions,
        correctCount: updated.correctCount,
        startedAt: updated.startedAt,
        completedAt: updated.completedAt,
      },
      review,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
