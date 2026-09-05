import "server-only";
import { db } from "@/db";
import { sql } from "drizzle-orm";

// ---------------------------------------------------------------------------
// Manual (admin-authored) questions live in the same `questions` table as
// generated ones, distinguished by a `source` column ('generated' | 'manual').
//
// The column is intentionally NOT part of the drizzle schema mapping so that
// databases created before this feature keep working untouched; instead it is
// created lazily here with ADD COLUMN IF NOT EXISTS the first time any
// manual-question or reseed route runs. Reseeds only ever delete rows where
// source = 'generated', so manually uploaded questions survive every future
// question drop.
// ---------------------------------------------------------------------------

let ensured = false;

export async function ensureSourceColumn(): Promise<void> {
  if (ensured) return;
  await db.execute(
    sql`ALTER TABLE "questions" ADD COLUMN IF NOT EXISTS "source" text NOT NULL DEFAULT 'generated'`,
  );
  ensured = true;
}

export type ManualQuestionInput = {
  categoryId: string;
  stem: string;
  choices: { id: string; text: string }[];
  correctChoiceId: string;
  rationale: string;
  strategy: string;
  difficulty: "easy" | "medium" | "hard";
  isFree: boolean;
};

export function validateManualQuestion(input: ManualQuestionInput): string | null {
  if (input.stem.trim().length < 10) return "The question stem must be at least 10 characters.";
  if (input.choices.length < 2 || input.choices.length > 6) return "Provide between 2 and 6 answer choices.";
  const texts = input.choices.map((c) => c.text.trim());
  if (texts.some((t) => t.length === 0)) return "Every answer choice needs text.";
  if (new Set(texts.map((t) => t.toLowerCase())).size !== texts.length) return "Answer choices must be distinct.";
  if (!input.choices.some((c) => c.id === input.correctChoiceId)) return "Select which choice is correct.";
  if (input.rationale.trim().length < 10) return "Add a rationale — it is what makes the question teach.";
  return null;
}
