import "dotenv/config";
import { db, pool } from "./index";
import { questions, questionCategories, catSessions, users } from "./schema";
import { eq, sql } from "drizzle-orm";
import { AUTHORED_QUESTIONS, AUTHORED_COUNT, AUTHORED_DIAGRAM_COUNT } from "./authored-bank";
import { CATEGORY_META } from "./question-bank";

// ---------------------------------------------------------------------------
// Replace the GENERATED question bank with the AUTHORED one.
//
// Why this exists
// ---------------
// The previous bank was combinatorial: 721 hand-written facts x 4 archetypes
// x 2 variants = 5,768 rows. Every fact was therefore asked eight times, and
// distractors were borrowed from other facts in the same category, so wrong
// answers were just other topics' correct answers. That trains pattern
// matching, not clinical reasoning.
//
// This script installs 2,979 individually authored items. Each has its own
// distractors, a rationale that teaches the principle, an explanation of why
// each wrong option is wrong, and a transferable strategy. 535 carry an
// original diagram.
//
//   KEPT:      users, sessions, subscriptions, invoices, MoMo requests,
//              referrals, tasks, notes, care plans, strategies, learning
//              topics, waitlist.
//   REPLACED:  questions.
//   CASCADED:  question_attempts / question_bookmarks (stats referred to the
//              old repetitive bank).
//   PRESERVED: completed exam_sessions and cat_sessions keep rendering --
//              they store full question snapshots.
//
// Usage:  npx tsx src/db/reseed-authored.ts
// ---------------------------------------------------------------------------

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function main() {
  console.log("Authored-bank reseed starting (users & payments are NOT touched)...");

  // Sanity-check the payload before destroying anything.
  if (AUTHORED_QUESTIONS.length !== AUTHORED_COUNT) {
    throw new Error(`Payload mismatch: ${AUTHORED_QUESTIONS.length} rows vs AUTHORED_COUNT ${AUTHORED_COUNT}`);
  }
  if (AUTHORED_COUNT < 2000) {
    throw new Error(`Refusing to reseed: only ${AUTHORED_COUNT} questions in payload.`);
  }
  for (const q of AUTHORED_QUESTIONS) {
    if (q.choices.length !== 4) throw new Error(`${q.authoredId}: expected 4 choices`);
    if (!q.choices.some((c) => c.id === q.correctChoiceId)) {
      throw new Error(`${q.authoredId}: correctChoiceId ${q.correctChoiceId} not among choices`);
    }
    if (!q.stem.trim() || !q.rationale.trim()) throw new Error(`${q.authoredId}: empty stem/rationale`);
  }
  console.log(`Payload validated: ${AUTHORED_COUNT} questions, ${AUTHORED_DIAGRAM_COUNT} diagrams.`);

  const [{ count: userCount }] = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(users);
  console.log(`Existing users preserved: ${userCount}`);

  // Media columns are created lazily elsewhere; ensure they exist here too.
  await db.execute(sql`ALTER TABLE "questions" ADD COLUMN IF NOT EXISTS "media_url" text`);
  await db.execute(sql`ALTER TABLE "questions" ADD COLUMN IF NOT EXISTS "media_caption" text`);
  await db.execute(sql`ALTER TABLE "questions" ADD COLUMN IF NOT EXISTS "source" text`);
  await db.execute(sql`ALTER TABLE "questions" ADD COLUMN IF NOT EXISTS "authored_id" text`);

  // 1. End in-progress adaptive sessions (their current question disappears).
  const ended = await db
    .update(catSessions)
    .set({ status: "max_length", completedAt: new Date(), currentQuestionId: null })
    .where(eq(catSessions.status, "in_progress"))
    .returning({ id: catSessions.id });
  console.log(`In-progress adaptive sessions closed: ${ended.length}`);

  // 2. Ensure the 12 categories exist (insert missing; never delete).
  const existing = await db.select().from(questionCategories);
  const bySlug = new Map(existing.map((c) => [c.slug, c.id]));
  for (let i = 0; i < CATEGORY_META.length; i++) {
    const c = CATEGORY_META[i];
    if (!bySlug.has(c.slug)) {
      const [row] = await db
        .insert(questionCategories)
        .values({ slug: c.slug, name: c.name, description: c.description, clientNeed: c.clientNeed, icon: c.icon, sortOrder: i })
        .returning();
      bySlug.set(c.slug, row.id);
      console.log(`Created missing category: ${c.slug}`);
    }
  }

  for (const q of AUTHORED_QUESTIONS) {
    if (!bySlug.has(q.categorySlug)) {
      throw new Error(`Unknown category slug in payload: ${q.categorySlug}`);
    }
  }

  // 3. Delete the old generated bank.
  const [{ count: oldCount }] = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(questions);
  console.log(`Deleting old question bank (${oldCount} rows)...`);
  await db.delete(questions);

  // 4. Insert the authored bank.
  console.log(`Inserting ${AUTHORED_QUESTIONS.length} authored questions...`);
  let inserted = 0;
  for (const batch of chunk(AUTHORED_QUESTIONS, 250)) {
    const values = batch.map((q) => ({
      categoryId: bySlug.get(q.categorySlug)!,
      stem: q.stem,
      choices: q.choices,
      correctChoiceId: q.correctChoiceId,
      rationale: q.rationale,
      strategy: q.strategy,
      difficulty: q.difficulty,
      tags: q.tags,
      isFree: q.isFree,
    }));
    const res = await db.insert(questions).values(values).returning({ id: questions.id });

    // Attach provenance + diagram media by position.
    for (let i = 0; i < res.length; i++) {
      const q = batch[i];
      await db.execute(sql`
        UPDATE "questions"
        SET "source" = 'authored',
            "authored_id" = ${q.authoredId},
            "media_url" = ${q.mediaUrl ?? null},
            "media_caption" = ${q.mediaCaption ?? null}
        WHERE "id" = ${res[i].id}
      `);
    }
    inserted += res.length;
    if (inserted % 1000 < 250) console.log(`  ...${inserted}`);
  }

  const [{ count: finalCount }] = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(questions);
  const mediaRes = await db.execute(sql`SELECT count(*)::int AS n FROM "questions" WHERE "media_url" IS NOT NULL`);
  const mediaCount = (mediaRes.rows[0] as { n: number }).n;

  console.log(`Done. ${inserted} inserted; table now holds ${finalCount}; ${mediaCount} with diagrams.`);
  if (finalCount !== AUTHORED_COUNT) throw new Error(`Post-check failed: ${finalCount} != ${AUTHORED_COUNT}`);
  if (mediaCount !== AUTHORED_DIAGRAM_COUNT) throw new Error(`Diagram post-check failed: ${mediaCount} != ${AUTHORED_DIAGRAM_COUNT}`);
  console.log("Users, payments, tasks, notes, and strategies were not modified.");
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
