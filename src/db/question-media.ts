import { db } from "@/db";
import { sql } from "drizzle-orm";

// Explanation media (diagram/table image + caption) attached to a question's
// rationale — the UWorld-style visual explanation. Columns are created
// lazily with the same idempotent pattern as the "source" column
// (src/db/manual-questions.ts) so no formal migration is needed and
// existing SELECTs against the mapped schema are unaffected.
let ensured = false;

export async function ensureMediaColumns(): Promise<void> {
  if (ensured) return;
  await db.execute(sql`ALTER TABLE "questions" ADD COLUMN IF NOT EXISTS "media_url" text`);
  await db.execute(sql`ALTER TABLE "questions" ADD COLUMN IF NOT EXISTS "media_caption" text`);
  ensured = true;
}

export type QuestionMedia = { mediaUrl: string | null; mediaCaption: string | null };

export async function getQuestionMedia(questionId: string): Promise<QuestionMedia> {
  await ensureMediaColumns();
  const result = await db.execute(
    sql`SELECT "media_url", "media_caption" FROM "questions" WHERE "id" = ${questionId} LIMIT 1`,
  );
  const row = result.rows[0] as { media_url: string | null; media_caption: string | null } | undefined;
  return { mediaUrl: row?.media_url ?? null, mediaCaption: row?.media_caption ?? null };
}

export async function setQuestionMedia(
  questionId: string,
  mediaUrl: string | null,
  mediaCaption: string | null,
): Promise<void> {
  await ensureMediaColumns();
  await db.execute(
    sql`UPDATE "questions" SET "media_url" = ${mediaUrl}, "media_caption" = ${mediaCaption} WHERE "id" = ${questionId}`,
  );
}
