import "dotenv/config";
import { db, pool } from "./index";
import { AUTHORED_QUESTIONS } from "./authored-bank";
import { questionCategories } from "./schema";
import { sql } from "drizzle-orm";

/**
 * Append only the newest authored items without deleting attempts, bookmarks,
 * exams or CAT sessions. Use after deploying a bank update.
 *
 *   npx tsx src/db/append-authored-batch.ts
 */
async function main() {
  const batch = AUTHORED_QUESTIONS.filter((q) => q.authoredId.startsWith("NG-BATCH2-"));
  if (batch.length !== 50) throw new Error(`Expected 50 batch questions, found ${batch.length}`);

  await db.execute(sql`ALTER TABLE "questions" ADD COLUMN IF NOT EXISTS "media_url" text`);
  await db.execute(sql`ALTER TABLE "questions" ADD COLUMN IF NOT EXISTS "media_caption" text`);
  await db.execute(sql`ALTER TABLE "questions" ADD COLUMN IF NOT EXISTS "source" text`);
  await db.execute(sql`ALTER TABLE "questions" ADD COLUMN IF NOT EXISTS "authored_id" text`);

  const categories = await db.select({ id: questionCategories.id, slug: questionCategories.slug }).from(questionCategories);
  const categoryIds = new Map(categories.map((c) => [c.slug, c.id]));
  const existing = await db.execute(sql`SELECT "authored_id" FROM "questions" WHERE "authored_id" IS NOT NULL`);
  const existingIds = new Set(existing.rows.map((row) => String((row as { authored_id: string }).authored_id)));
  const pending = batch.filter((q) => !existingIds.has(q.authoredId));

  for (const q of pending) {
    const categoryId = categoryIds.get(q.categorySlug);
    if (!categoryId) throw new Error(`Missing category: ${q.categorySlug}`);
    await db.execute(sql`
      INSERT INTO "questions" (
        "category_id", "stem", "choices", "correct_choice_id", "rationale", "strategy",
        "difficulty", "tags", "is_free", "source", "authored_id", "media_url", "media_caption"
      ) VALUES (
        ${categoryId}, ${q.stem}, ${JSON.stringify(q.choices)}::jsonb, ${q.correctChoiceId}, ${q.rationale}, ${q.strategy},
        ${q.difficulty}, ${JSON.stringify(q.tags)}::jsonb, ${q.isFree}, 'authored', ${q.authoredId},
        ${q.mediaUrl ?? null}, ${q.mediaCaption ?? null}
      )
    `);
  }

  console.log(`Authored batch complete: ${pending.length} inserted, ${batch.length - pending.length} already present.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
