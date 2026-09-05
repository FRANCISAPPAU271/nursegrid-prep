import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { catSessions, questionCategories, questions } from "@/db/schema";
import type { CatHistoryItem } from "@/db/schema";
import { and, eq, notInArray, sql, notLike } from "drizzle-orm";
import { requireUser, handleApiError, ApiError } from "@/lib/api";
import { gradeAnswer } from "@/lib/sata";
import { CAT_FREE_QUESTION_CAP, checkStopCondition, targetDifficulty, updateTheta } from "@/lib/cat";

const schema = z.object({ selectedChoiceId: z.string().min(1) });

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await requireUser();
    const { id } = await params;
    const body = await request.json();
    const { selectedChoiceId } = schema.parse(body);

    const rows = await db
      .select()
      .from(catSessions)
      .where(and(eq(catSessions.id, id), eq(catSessions.userId, user.id)))
      .limit(1);
    const session = rows[0];
    if (!session) throw new ApiError("CAT session not found", 404);
    if (session.status !== "in_progress") throw new ApiError("This CAT session has already ended.", 400);
    if (!session.currentQuestionId) throw new ApiError("No active question on this session.", 400);

    const currentQuestionRows = await db
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
      .where(eq(questions.id, session.currentQuestionId))
      .limit(1);
    const currentQuestion = currentQuestionRows[0];
    if (!currentQuestion) throw new ApiError("The current question could not be found.", 500);

    const isCorrect = gradeAnswer(selectedChoiceId, currentQuestion.correctChoiceId);
    const questionNumber = session.askedQuestionIds.length;
    const newTheta = updateTheta(session.theta, currentQuestion.difficulty, isCorrect, questionNumber);

    const historyItem: CatHistoryItem = {
      questionId: currentQuestion.id,
      categoryId: currentQuestion.categoryId,
      categoryName: currentQuestion.categoryName,
      stem: currentQuestion.stem,
      choices: currentQuestion.choices,
      correctChoiceId: currentQuestion.correctChoiceId,
      selectedChoiceId,
      isCorrect,
      rationale: currentQuestion.rationale,
      strategy: currentQuestion.strategy,
      difficulty: currentQuestion.difficulty,
      thetaAfter: newTheta,
    };
    const newHistory = [...session.history, historyItem];
    const newCorrectCount = session.correctCount + (isCorrect ? 1 : 0);

    // Free-tier cap: let free users try the CAT experience for a handful of
    // questions, then prompt upgrade instead of a pass/fail verdict.
    const freeCapHit = !user.isPremium && questionNumber >= CAT_FREE_QUESTION_CAP;

    const stop = freeCapHit
      ? { shouldStop: true, status: "max_length" as const }
      : checkStopCondition(newTheta, questionNumber, session.minQuestions, session.maxQuestions);

    if (stop.shouldStop) {
      await db
        .update(catSessions)
        .set({
          theta: newTheta,
          history: newHistory,
          correctCount: newCorrectCount,
          status: stop.status ?? "max_length",
          currentQuestionId: null,
          completedAt: new Date(),
        })
        .where(eq(catSessions.id, id));

      return NextResponse.json({
        done: true,
        status: stop.status ?? "max_length",
        locked: freeCapHit,
        result: {
          isCorrect,
          correctChoiceId: currentQuestion.correctChoiceId,
          rationale: currentQuestion.rationale,
          strategy: currentQuestion.strategy,
        },
        summary: {
          questionsAnswered: newHistory.length,
          correctCount: newCorrectCount,
        },
      });
    }

    // Pick the next question: target difficulty from the updated ability
    // estimate, excluding questions already asked in this session.
    const nextDifficulty = targetDifficulty(newTheta);
    const whereParts = [
      eq(questions.difficulty, nextDifficulty),
      notInArray(questions.id, session.askedQuestionIds),
      notLike(questions.correctChoiceId, "%,%"), // no SATA in CAT
    ];
    if (!user.isPremium) whereParts.push(eq(questions.isFree, true));

    let [nextQuestion] = await db
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

    // Fallback: if we've exhausted that difficulty bucket, widen the search
    // to any not-yet-asked question so the session can still continue.
    if (!nextQuestion) {
      const fallbackWhere = [notInArray(questions.id, session.askedQuestionIds), notLike(questions.correctChoiceId, "%,%")];
      if (!user.isPremium) fallbackWhere.push(eq(questions.isFree, true));
      const fallbackRows = await db
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
        .where(and(...fallbackWhere))
        .orderBy(sql`random()`)
        .limit(1);
      nextQuestion = fallbackRows[0];
    }

    if (!nextQuestion) {
      // Truly out of questions — end the session gracefully with a result.
      await db
        .update(catSessions)
        .set({
          theta: newTheta,
          history: newHistory,
          correctCount: newCorrectCount,
          status: newTheta >= 0 ? "passed" : "failed",
          currentQuestionId: null,
          completedAt: new Date(),
        })
        .where(eq(catSessions.id, id));

      return NextResponse.json({
        done: true,
        status: newTheta >= 0 ? "passed" : "failed",
        locked: false,
        result: {
          isCorrect,
          correctChoiceId: currentQuestion.correctChoiceId,
          rationale: currentQuestion.rationale,
          strategy: currentQuestion.strategy,
        },
        summary: { questionsAnswered: newHistory.length, correctCount: newCorrectCount },
      });
    }

    await db
      .update(catSessions)
      .set({
        theta: newTheta,
        history: newHistory,
        correctCount: newCorrectCount,
        currentQuestionId: nextQuestion.id,
        askedQuestionIds: [...session.askedQuestionIds, nextQuestion.id],
      })
      .where(eq(catSessions.id, id));

    return NextResponse.json({
      done: false,
      result: {
        isCorrect,
        correctChoiceId: currentQuestion.correctChoiceId,
        rationale: currentQuestion.rationale,
        strategy: currentQuestion.strategy,
      },
      questionNumber: questionNumber + 1,
      trend: newTheta > session.theta ? "up" : newTheta < session.theta ? "down" : "steady",
      question: {
        id: nextQuestion.id,
        categoryName: nextQuestion.categoryName,
        stem: nextQuestion.stem,
        choices: nextQuestion.choices,
        difficulty: nextQuestion.difficulty,
      },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues[0]?.message ?? "Invalid input" }, { status: 422 });
    }
    return handleApiError(error);
  }
}
