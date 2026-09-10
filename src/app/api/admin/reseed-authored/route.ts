import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { questions, questionCategories, catSessions, users } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { AUTHORED_QUESTIONS, AUTHORED_COUNT, AUTHORED_DIAGRAM_COUNT } from "@/db/authored-bank";
import { CATEGORY_META } from "@/db/question-bank";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

// Stop starting new batches once this much time has elapsed, so a response is
// always returned well before the platform timeout. Progress is saved after
// every batch, so refreshing the page resumes exactly where it stopped.
const TIME_BUDGET_MS = 40_000;
const BATCH_SIZE = 250;

// ---------------------------------------------------------------------------
// Admin action: install the AUTHORED question bank in production, from the
// browser, with no terminal required.
//
// This is the browser equivalent of `npm run reseed:authored`. It exists
// because the CLI script requires a local Node install and the production
// DATABASE_URL, which is stored as a Vercel "Sensitive" variable.
//
//   KEPT:      users, sessions, subscriptions, invoices, MoMo requests,
//              referrals, tasks, notes, care plans, strategies, learning
//              topics, waitlist.
//   REPLACED:  questions.
//   CASCADED:  question_attempts / question_bookmarks (the old stats referred
//              to the old repetitive bank and cannot be carried over).
//   PRESERVED: completed exam_sessions and cat_sessions keep rendering --
//              they store full question snapshots.
//
// NOTE: this is NOT /api/admin/reseed-questions. That older route rebuilds the
// GENERATED bank (5,768 combinatorial rows) and is exactly what this replaces.
//
// Resumable: each visit inserts as many questions as fit in the time budget.
// If the response says done: false, just refresh until done: true.
// Safe to re-run: already-inserted authored rows are counted and skipped.
//
// Protected: requires a signed-in admin account.
// ---------------------------------------------------------------------------
export async function GET() {
  const startedAt = Date.now();

  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  if (!user.isAdmin) return NextResponse.json({ error: "Admins only" }, { status: 403 });

  // ---- Sanity-check the payload before destroying anything ----------------
  if (AUTHORED_QUESTIONS.length !== AUTHORED_COUNT) {
    return NextResponse.json(
      { error: `Payload mismatch: ${AUTHORED_QUESTIONS.length} rows vs AUTHORED_COUNT ${AUTHORED_COUNT}` },
      { status: 500 },
    );
  }
  if (AUTHORED_COUNT < 2000) {
    return NextResponse.json(
      { error: `Refusing to reseed: only ${AUTHORED_COUNT} questions in payload.` },
      { status: 500 },
    );
  }

  // Columns used for provenance and diagrams; created lazily so this works on
  // databases built before they existed.
  await db.execute(sql`ALTER TABLE "questions" ADD COLUMN IF NOT EXISTS "media_url" text`);
  await db.execute(sql`ALTER TABLE "questions" ADD COLUMN IF NOT EXISTS "media_caption" text`);
  await db.execute(sql`ALTER TABLE "questions" ADD COLUMN IF NOT EXISTS "source" text`);
  await db.execute(sql`ALTER TABLE "questions" ADD COLUMN IF NOT EXISTS "authored_id" text`);

  const [{ count: userCount }] = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(users);

  // ---- Ensure the 12 categories exist (insert missing; never delete) ------
  const existing = await db.select().from(questionCategories);
  const bySlug = new Map(existing.map((c) => [c.slug, c.id]));
  const createdCategories: string[] = [];
  for (let i = 0; i < CATEGORY_META.length; i++) {
    const c = CATEGORY_META[i];
    if (!bySlug.has(c.slug)) {
      const [row] = await db
        .insert(questionCategories)
        .values({
          slug: c.slug,
          name: c.name,
          description: c.description,
          clientNeed: c.clientNeed,
          icon: c.icon,
          sortOrder: i,
        })
        .returning();
      bySlug.set(c.slug, row.id);
      createdCategories.push(c.slug);
    }
  }
  for (const q of AUTHORED_QUESTIONS) {
    if (!bySlug.has(q.categorySlug)) {
      return NextResponse.json(
        { error: `Unknown category slug in payload: ${q.categorySlug}` },
        { status: 500 },
      );
    }
  }

  // ---- How far along are we? ---------------------------------------------
  const doneRes = await db.execute(
    sql`SELECT count(*)::int AS n FROM "questions" WHERE "source" = 'authored'`,
  );
  const alreadyAuthored = (doneRes.rows[0] as { n: number }).n;

  // First visit only: clear the old generated bank. Once authored rows exist
  // we must never delete again, or a refresh would wipe our own progress.
  let removed = 0;
  let endedSessions = 0;
  if (alreadyAuthored === 0) {
    // End in-progress adaptive sessions; their current question disappears.
    const ended = await db
      .update(catSessions)
      .set({ status: "max_length", completedAt: new Date(), currentQuestionId: null })
      .where(eq(catSessions.status, "in_progress"))
      .returning({ id: catSessions.id });
    endedSessions = ended.length;

    const del = await db.delete(questions).returning({ id: questions.id });
    removed = del.length;
  }

  // ---- Insert the remaining authored questions ----------------------------
  let inserted = 0;
  let cursor = alreadyAuthored;

  while (cursor < AUTHORED_QUESTIONS.length) {
    if (Date.now() - startedAt > TIME_BUDGET_MS) break;

    const batch = AUTHORED_QUESTIONS.slice(cursor, cursor + BATCH_SIZE);
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
    cursor += res.length;
  }

  // ---- Report -------------------------------------------------------------
  const [{ count: totalNow }] = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(questions);
  const mediaRes = await db.execute(
    sql`SELECT count(*)::int AS n FROM "questions" WHERE "media_url" IS NOT NULL`,
  );
  const mediaCount = (mediaRes.rows[0] as { n: number }).n;

  const done = cursor >= AUTHORED_QUESTIONS.length;
  const countsMatch = totalNow === AUTHORED_COUNT && mediaCount === AUTHORED_DIAGRAM_COUNT;

  return NextResponse.json({
    ok: true,
    done,
    message: done
      ? countsMatch
        ? `Done. The authored bank is installed: ${totalNow} questions, ${mediaCount} with diagrams. Users, payments, tasks and notes were not touched.`
        : `Finished inserting, but the totals look wrong: expected ${AUTHORED_COUNT}/${AUTHORED_DIAGRAM_COUNT}, found ${totalNow}/${mediaCount}. Do not treat this as successful.`
      : `Progress saved: ${cursor} of ${AUTHORED_QUESTIONS.length} installed. Refresh this page to continue.`,
    progress: `${cursor}/${AUTHORED_QUESTIONS.length}`,
    insertedThisVisit: inserted,
    oldQuestionsRemovedThisVisit: removed,
    totalQuestionsNow: totalNow,
    diagramsNow: mediaCount,
    expected: { questions: AUTHORED_COUNT, diagrams: AUTHORED_DIAGRAM_COUNT },
    countsMatch,
    categoriesCreated: createdCategories,
    usersPreserved: userCount,
    inProgressAdaptiveSessionsClosed: endedSessions,
  });
}
