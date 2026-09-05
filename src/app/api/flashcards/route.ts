import { NextResponse } from "next/server";
import { db } from "@/db";
import { sql } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";
import { ensureFlashcardTable, syncMissedQuestionsIntoDeck } from "@/db/flashcards";

// GET /api/flashcards
//  → syncs missed questions into the deck, then returns due cards (question +
//    choices + answer + rationale — flashcards show the answer on flip, so
//    including it is intentional) plus deck stats.
export async function GET(request: Request) {
  try {
    const user = await requireUser();
    await ensureFlashcardTable();
    await syncMissedQuestionsIntoDeck(user.id);

    const { searchParams } = new URL(request.url);
    const limit = Math.min(Math.max(Number(searchParams.get("limit") ?? 20), 1), 50);

    const due = await db.execute(sql`
      SELECT fr."question_id" AS id, fr."box", fr."times_seen", fr."times_correct",
             q."stem", q."choices", q."correct_choice_id", q."rationale", q."strategy",
             q."difficulty", q."is_free", qc."name" AS category_name
      FROM "flashcard_reviews" fr
      JOIN "questions" q ON q."id" = fr."question_id"
      JOIN "question_categories" qc ON qc."id" = q."category_id"
      WHERE fr."user_id" = ${user.id} AND fr."next_due_at" <= now()
      ORDER BY fr."box" ASC, fr."next_due_at" ASC
      LIMIT ${limit}
    `);

    const stats = await db.execute(sql`
      SELECT
        count(*)::int AS total,
        count(*) FILTER (WHERE "next_due_at" <= now())::int AS due,
        count(*) FILTER (WHERE "box" >= 5)::int AS mastered,
        count(*) FILTER (WHERE "box" = 1)::int AS learning
      FROM "flashcard_reviews"
      WHERE "user_id" = ${user.id}
    `);

    type DueRow = {
      id: string;
      box: number;
      times_seen: number;
      times_correct: number;
      stem: string;
      choices: { id: string; text: string }[];
      correct_choice_id: string;
      rationale: string;
      strategy: string;
      difficulty: string;
      is_free: boolean;
      category_name: string;
    };

    const cards = (due.rows as DueRow[])
      // Free users only review cards from free questions (same access rule as
      // everywhere else in the app).
      .filter((r) => user.isPremium || r.is_free)
      .map((r) => ({
        questionId: r.id,
        box: r.box,
        timesSeen: r.times_seen,
        timesCorrect: r.times_correct,
        stem: r.stem,
        choices: r.choices,
        correctChoiceId: r.correct_choice_id,
        rationale: r.rationale,
        strategy: r.strategy,
        difficulty: r.difficulty,
        categoryName: r.category_name,
      }));

    const s = stats.rows[0] as { total: number; due: number; mastered: number; learning: number };
    return NextResponse.json({ cards, stats: s });
  } catch (error) {
    return handleApiError(error);
  }
}
