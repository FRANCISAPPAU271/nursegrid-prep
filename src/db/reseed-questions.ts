import "dotenv/config";
import { db, pool } from "./index";
import { questions, questionCategories, catSessions, users } from "./schema";
import { eq, sql } from "drizzle-orm";

// ---------------------------------------------------------------------------
// SAFE questions-only re-seed.
//
// Unlike seed.ts (which wipes EVERYTHING including users and payments), this
// script only replaces the question bank:
//
//   KEPT:    users, sessions, subscriptions, invoices, MoMo requests,
//            referrals, tasks, notes, care plans, strategies, learning
//            topics, waitlist — all untouched.
//   REPLACED: questions (regenerated with the new low-repetition generator
//            + expanded item banks).
//   CASCADED: question_attempts and question_bookmarks are removed by the
//            database automatically when old questions are deleted (their
//            stats were based on the old repetitive bank anyway).
//   PRESERVED: completed exam_sessions and cat_sessions keep working —
//            they store full question snapshots, so past reviews still
//            render. In-progress adaptive sessions are marked complete
//            because their current question will no longer exist.
//
// Usage:  npx tsx src/db/reseed-questions.ts
// ---------------------------------------------------------------------------

// Re-use the generator + item banks from seed.ts by duplicating the tiny
// helpers here (seed.ts runs main() on import, so we cannot import from it).
import {
  buildAllQuestionRows,
  CATEGORY_META,
} from "./question-bank";

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function main() {
  console.log("Questions-only re-seed starting (users & payments are NOT touched)...");

  const [{ count: userCount }] = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(users);
  console.log(`Existing users preserved: ${userCount}`);

  // 1. End any in-progress adaptive sessions cleanly (their current question
  //    is about to disappear).
  const ended = await db
    .update(catSessions)
    .set({ status: "max_length", completedAt: new Date(), currentQuestionId: null })
    .where(eq(catSessions.status, "in_progress"))
    .returning({ id: catSessions.id });
  console.log(`In-progress adaptive sessions closed: ${ended.length}`);

  // 2. Ensure categories exist (insert any missing; never delete).
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

  // 3. Delete old questions (attempts/bookmarks cascade in the database).
  console.log("Deleting old question bank...");
  await db.delete(questions);

  // 4. Insert the new bank.
  const rows = buildAllQuestionRows(bySlug);
  console.log(`Inserting ${rows.length} new questions...`);
  let inserted = 0;
  for (const batch of chunk(rows, 500)) {
    const res = await db.insert(questions).values(batch).returning({ id: questions.id });
    inserted += res.length;
  }
  console.log(`Done. ${inserted} questions inserted.`);
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
