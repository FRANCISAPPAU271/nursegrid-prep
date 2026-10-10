import { db } from "@/db";
import { sql } from "drizzle-orm";

// ---------------------------------------------------------------------------
// Question-bank "resume where you left off".
//
// Category practice walks the bank in a fixed order (created_at, id), twenty
// questions at a time. Before this table existed the position only lived in
// React state, so closing the tab, switching device or just coming back the
// next day always restarted the category from question 1. We now keep one
// tiny row per (user, practice set): the index of the next question to show
// plus the running score, written after every answered question.
//
// The table is created lazily with CREATE TABLE IF NOT EXISTS — the same
// idempotent pattern as the "source" and media columns (see
// src/db/manual-questions.ts / src/db/question-media.ts) — so no formal
// migration step is needed on Preview or Production.
// ---------------------------------------------------------------------------

export type PracticeProgress = {
  position: number; // index of the next question to show (0 = nothing answered yet)
  answered: number; // questions answered so far in this set
  correct: number; // of which correct
  updatedAt: string;
};

// Keys are derived on the server from the practice query (category / lesson /
// everything) with a ":free" suffix for free-tier users, whose set only
// contains the free preview questions and therefore has a different order.
export const PRACTICE_KEY_PATTERN = /^(all|category:[a-z0-9-]{1,80}|lesson:[a-z0-9-]{1,80}\/[a-z0-9-]{1,120})(:free)?$/;

export function practiceSetKey(opts: {
  categorySlug?: string | null;
  courseSlug?: string | null;
  lessonSlug?: string | null;
  random?: boolean;
  bookmarked?: boolean;
  isPremium: boolean;
}): string | null {
  // A shuffled or bookmark-driven set has no stable order to come back to.
  if (opts.random || opts.bookmarked) return null;
  let base: string;
  if (opts.courseSlug && opts.lessonSlug) base = `lesson:${opts.courseSlug}/${opts.lessonSlug}`;
  else if (opts.categorySlug) base = `category:${opts.categorySlug}`;
  else base = "all";
  const key = opts.isPremium ? base : `${base}:free`;
  return PRACTICE_KEY_PATTERN.test(key) ? key : null;
}

let ensured = false;

export async function ensurePracticeProgressTable(): Promise<void> {
  if (ensured) return;
  try {
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS "practice_progress" (
        "user_id" text NOT NULL REFERENCES "users"("id") ON DELETE CASCADE,
        "set_key" text NOT NULL,
        "position" integer NOT NULL DEFAULT 0,
        "answered" integer NOT NULL DEFAULT 0,
        "correct" integer NOT NULL DEFAULT 0,
        "updated_at" timestamptz NOT NULL DEFAULT now(),
        PRIMARY KEY ("user_id", "set_key")
      )
    `);
  } catch (error) {
    // Two cold serverless instances can race on the first create; whichever
    // loses sees "already exists" / a duplicate pg_type key — the table is
    // there either way.
    const message = error instanceof Error ? error.message : String(error);
    if (!/already exists|duplicate key/i.test(message)) throw error;
  }
  ensured = true;
}

type Row = { position: number; answered: number; correct: number; updated_at: string | Date };

function toProgress(row: Row): PracticeProgress {
  return {
    position: Number(row.position),
    answered: Number(row.answered),
    correct: Number(row.correct),
    updatedAt: new Date(row.updated_at).toISOString(),
  };
}

export async function getPracticeProgress(userId: string, setKey: string): Promise<PracticeProgress | null> {
  await ensurePracticeProgressTable();
  const result = await db.execute(sql`
    SELECT "position", "answered", "correct", "updated_at"
    FROM "practice_progress"
    WHERE "user_id" = ${userId} AND "set_key" = ${setKey}
    LIMIT 1
  `);
  const row = result.rows[0] as Row | undefined;
  return row ? toProgress(row) : null;
}

// Every saved set for one user — used by the question-bank overview to show
// "Resume at question N" on the category cards.
export async function listPracticeProgress(userId: string): Promise<Map<string, PracticeProgress>> {
  await ensurePracticeProgressTable();
  const result = await db.execute(sql`
    SELECT "set_key", "position", "answered", "correct", "updated_at"
    FROM "practice_progress"
    WHERE "user_id" = ${userId}
  `);
  const map = new Map<string, PracticeProgress>();
  for (const r of result.rows) {
    const row = r as Row & { set_key: string };
    map.set(row.set_key, toProgress(row));
  }
  return map;
}

export async function savePracticeProgress(
  userId: string,
  setKey: string,
  progress: { position: number; answered: number; correct: number },
): Promise<void> {
  await ensurePracticeProgressTable();
  await db.execute(sql`
    INSERT INTO "practice_progress" ("user_id", "set_key", "position", "answered", "correct", "updated_at")
    VALUES (${userId}, ${setKey}, ${progress.position}, ${progress.answered}, ${progress.correct}, now())
    ON CONFLICT ("user_id", "set_key") DO UPDATE
      SET "position" = EXCLUDED."position",
          "answered" = EXCLUDED."answered",
          "correct" = EXCLUDED."correct",
          "updated_at" = now()
  `);
}

export async function clearPracticeProgress(userId: string, setKey: string): Promise<void> {
  await ensurePracticeProgressTable();
  await db.execute(sql`DELETE FROM "practice_progress" WHERE "user_id" = ${userId} AND "set_key" = ${setKey}`);
}
