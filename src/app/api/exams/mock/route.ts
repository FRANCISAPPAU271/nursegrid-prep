import { NextResponse } from "next/server";
import { db } from "@/db";
import { examSessions, questionCategories, questions } from "@/db/schema";
import type { ExamQuestionSnapshot } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { requireUser, handleApiError, ApiError } from "@/lib/api";

// ---------------------------------------------------------------------------
// Mock NMC Exam: a full-length dress rehearsal.
//  - 150 questions sampled evenly across ALL 12 categories (like the real
//    exam, which tests the whole syllabus)
//  - intended to be sat in one timed sitting (timer handled client-side,
//    150 minutes — about 1 minute per question)
//  - graded with a verdict band on submission (handled by the standard
//    submit endpoint + verdict computed on the results screen)
//  - premium only: it draws on the full bank; the 40 free-preview questions
//    cannot fill a balanced 150-question paper.
// ---------------------------------------------------------------------------

const MOCK_TOTAL_QUESTIONS = 150;
const MOCK_MINUTES = 150;

export async function POST() {
  try {
    const user = await requireUser();
    if (!user.isPremium) {
      throw new ApiError("The full Mock Exam needs the complete question bank. Upgrade on the Billing page to unlock it.", 403);
    }

    const categories = await db
      .select({ id: questionCategories.id, name: questionCategories.name })
      .from(questionCategories)
      .orderBy(questionCategories.sortOrder);
    if (categories.length === 0) throw new ApiError("No categories found", 500);

    const perCategory = Math.floor(MOCK_TOTAL_QUESTIONS / categories.length);
    let remainder = MOCK_TOTAL_QUESTIONS - perCategory * categories.length;

    const snapshot: ExamQuestionSnapshot[] = [];
    for (const cat of categories) {
      const take = perCategory + (remainder > 0 ? 1 : 0);
      if (remainder > 0) remainder--;
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
        })
        .from(questions)
        .where(eq(questions.categoryId, cat.id))
        .orderBy(sql`random()`)
        .limit(take);
      for (const r of rows) snapshot.push({ ...r, categoryName: cat.name });
    }

    if (snapshot.length < MOCK_TOTAL_QUESTIONS * 0.8) {
      throw new ApiError("Not enough questions available to build a full mock exam.", 500);
    }

    // Shuffle so categories are interleaved like the real paper.
    for (let i = snapshot.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [snapshot[i], snapshot[j]] = [snapshot[j], snapshot[i]];
    }

    const [exam] = await db
      .insert(examSessions)
      .values({
        userId: user.id,
        title: `Mock NMC Exam · ${snapshot.length} questions`,
        categorySlugs: [],
        questionSnapshot: snapshot,
        totalQuestions: snapshot.length,
      })
      .returning();

    return NextResponse.json(
      { examId: exam.id, title: exam.title, totalQuestions: snapshot.length, minutes: MOCK_MINUTES },
      { status: 201 },
    );
  } catch (error) {
    return handleApiError(error);
  }
}
