import "server-only";
import { db } from "@/db";
import { sql } from "drizzle-orm";

// ---------------------------------------------------------------------------
// Flashcards: spaced repetition (Leitner boxes) over questions the student
// answered incorrectly. The deck builds itself — every missed question is
// added automatically as a box-1 card.
//
// The table is created lazily with CREATE TABLE IF NOT EXISTS the first time
// a flashcard route runs (same pattern as the questions.source column), so no
// migration step is needed in production.
//
// Boxes & intervals: getting a card right moves it up a box; getting it
// wrong sends it back to box 1 and re-queues it in 10 minutes.
//   box 1 → due again in 1 day
//   box 2 → 3 days
//   box 3 → 7 days
//   box 4 → 14 days
//   box 5 → 30 days ("mastered")
// ---------------------------------------------------------------------------

let ensured = false;

export async function ensureFlashcardTable(): Promise<void> {
  if (ensured) return;
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS "flashcard_reviews" (
      "user_id" text NOT NULL,
      "question_id" text NOT NULL,
      "box" integer NOT NULL DEFAULT 1,
      "times_seen" integer NOT NULL DEFAULT 0,
      "times_correct" integer NOT NULL DEFAULT 0,
      "next_due_at" timestamptz NOT NULL DEFAULT now(),
      "last_reviewed_at" timestamptz,
      "created_at" timestamptz NOT NULL DEFAULT now(),
      PRIMARY KEY ("user_id", "question_id")
    )
  `);
  await db.execute(
    sql`CREATE INDEX IF NOT EXISTS "flashcard_user_due_idx" ON "flashcard_reviews" ("user_id", "next_due_at")`,
  );
  ensured = true;
}

export const BOX_INTERVALS_DAYS = [1, 3, 7, 14, 30] as const; // index = box - 1
export const MAX_BOX = 5;

/** Adds every question the user has ever missed to their deck (box 1, due now). */
export async function syncMissedQuestionsIntoDeck(userId: string): Promise<void> {
  await db.execute(sql`
    INSERT INTO "flashcard_reviews" ("user_id", "question_id")
    SELECT DISTINCT qa."user_id", qa."question_id"
    FROM "question_attempts" qa
    JOIN "questions" q ON q."id" = qa."question_id"
    WHERE qa."user_id" = ${userId} AND qa."is_correct" = false
    ON CONFLICT ("user_id", "question_id") DO NOTHING
  `);
}
