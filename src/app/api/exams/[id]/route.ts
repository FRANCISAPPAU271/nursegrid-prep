import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { examSessions } from "@/db/schema";
import type { ExamAnswer } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { requireStudyAccess, handleApiError, ApiError } from "@/lib/api";
import { gradeAnswer, isSata } from "@/lib/sata";
import { getMediaForQuestions } from "@/db/question-media";

// Draft autosave while an exam is in progress. The runner sends the full set
// of answers so far (debounced, and again when the tab is hidden/closed);
// we grade them against the snapshot and store them in `answers`, which the
// final submit overwrites. The status guard in the WHERE clause means a late
// autosave can never clobber a submitted paper.
const draftSchema = z.object({
  answers: z.array(z.object({ questionId: z.string().min(1).max(64), selectedChoiceId: z.string().min(1).max(64) })).max(500),
});

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireStudyAccess();
    const { id } = await params;
    const { answers } = draftSchema.parse(await request.json());

    const rows = await db
      .select({ id: examSessions.id, status: examSessions.status, questionSnapshot: examSessions.questionSnapshot })
      .from(examSessions)
      .where(and(eq(examSessions.id, id), eq(examSessions.userId, user.id)))
      .limit(1);
    const exam = rows[0];
    if (!exam) throw new ApiError("Exam not found", 404);
    if (exam.status !== "in_progress") {
      return NextResponse.json({ ok: false, status: exam.status, error: "This exam has already been submitted." }, { status: 409 });
    }

    const byId = new Map(exam.questionSnapshot.map((q) => [q.id, q]));
    const seen = new Set<string>();
    const draft: ExamAnswer[] = [];
    for (const a of answers) {
      const q = byId.get(a.questionId);
      if (!q || seen.has(a.questionId)) continue;
      seen.add(a.questionId);
      draft.push({ questionId: a.questionId, selectedChoiceId: a.selectedChoiceId, isCorrect: gradeAnswer(a.selectedChoiceId, q.correctChoiceId) });
    }

    const updated = await db
      .update(examSessions)
      .set({ answers: draft })
      .where(and(eq(examSessions.id, id), eq(examSessions.userId, user.id), eq(examSessions.status, "in_progress")))
      .returning({ id: examSessions.id });
    if (updated.length === 0) {
      return NextResponse.json({ ok: false, status: "completed", error: "This exam has already been submitted." }, { status: 409 });
    }
    return NextResponse.json({ ok: true, saved: draft.length });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireStudyAccess();
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
    const user = await requireStudyAccess();
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
      const mediaMap = await getMediaForQuestions(exam.questionSnapshot.map((q) => q.id));
      const review = exam.questionSnapshot.map((q) => {
        const answer = answerMap.get(q.id);
        const media = mediaMap.get(q.id);
        return {
          ...q,
          selectedChoiceId: answer?.selectedChoiceId ?? null,
          isCorrect: answer?.isCorrect ?? false,
          mediaUrl: media?.mediaUrl ?? null,
          mediaCaption: media?.mediaCaption ?? null,
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

    // Still in progress: return safe (answer-free) questions plus the
    // student's autosaved draft selections (never isCorrect) so the runner
    // can resume exactly where they stopped.
    const draftAnswers = exam.answers.map((a) => ({ questionId: a.questionId, selectedChoiceId: a.selectedChoiceId }));
    const safeQuestions = exam.questionSnapshot.map((q) => ({
      id: q.id,
      categoryId: q.categoryId,
      categoryName: q.categoryName,
      stem: q.stem,
      choices: q.choices,
      difficulty: q.difficulty,
      isSata: isSata(q.correctChoiceId),
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
      answers: draftAnswers,
    });
  } catch (error) {
    return handleApiError(error);
  }
}
