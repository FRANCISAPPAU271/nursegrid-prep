import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { questions, questionCategories, catSessions, users } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { buildCategoryQuestions, CATEGORY_DEFS, CATEGORY_META, chunk, ARCHETYPES, MAX_VARIANTS_PER_FACT } from "@/db/question-bank";
import { ensureSourceColumn } from "@/db/manual-questions";

export const dynamic = "force-dynamic";
// Stay within the Vercel Hobby function limit; the route also self-limits
// with its own time budget below so a response is always returned in time.
export const maxDuration = 60;

// Stop starting new categories once this much time has elapsed, so the
// response is always returned well before any platform timeout. Progress is
// saved per category — visiting the URL again resumes where it left off.
const TIME_BUDGET_MS = 40_000;

// ---------------------------------------------------------------------------
// Admin action: safely replace the question bank in production, one category
// at a time so it can never hit a function timeout.
//
//   KEPT:     users, payments, subscriptions, tasks, notes, strategies, etc.
//   REPLACED: questions (regenerated with the current generator).
//   CASCADED: old question attempts/bookmarks are removed automatically.
//
// Resumable: each visit processes as many categories as fit in the time
// budget. If the response says done: false, simply refresh the page until
// done: true. Categories already matching the new bank are skipped, so
// re-running is always safe.
//
// Protected: requires a signed-in admin account. Visit while logged in as
// admin:  https://nursegrid.vercel.app/api/admin/reseed-questions
// ---------------------------------------------------------------------------
export async function GET() {
  const startedAt = Date.now();
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  if (!user.isAdmin) return NextResponse.json({ error: "Admins only" }, { status: 403 });

  // Manual (admin-uploaded) questions carry source='manual' and are never
  // touched by reseeds; only generated rows are counted and replaced.
  await ensureSourceColumn();

  const [{ count: userCount }] = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(users);

  // 1. Close any in-progress adaptive sessions (their current question may
  //    disappear). Cheap and idempotent, so it runs on every visit.
  const ended = await db
    .update(catSessions)
    .set({ status: "max_length", completedAt: new Date(), currentQuestionId: null })
    .where(eq(catSessions.status, "in_progress"))
    .returning({ id: catSessions.id });

  // 2. Ensure all categories exist (insert missing ones; never delete).
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
    }
  }

  // 3. Current per-category counts, to detect which categories still need work.
  const countRows = await db
    .select({ categoryId: questions.categoryId, count: sql<number>`count(*)`.mapWith(Number) })
    .from(questions)
    .where(sql`${questions}."source" = 'generated'`)
    .groupBy(questions.categoryId);
  const countByCategoryId = new Map(countRows.map((r) => [r.categoryId, r.count]));

  // 4. Replace one category at a time, newest generator output each time.
  //    A category whose row count already equals the expected new count is
  //    considered done and skipped (the new bank's per-category counts differ
  //    from every previous version, so a stale category never matches).
  const completed: string[] = [];
  const skipped: string[] = [];
  const remaining: string[] = [];
  let inserted = 0;
  let removed = 0;

  for (const def of CATEGORY_DEFS) {
    const categoryId = bySlug.get(def.slug);
    if (!categoryId) continue; // cannot happen; step 2 guarantees presence

    const target = def.items.length * ARCHETYPES.length * MAX_VARIANTS_PER_FACT;
    const rows = buildCategoryQuestions([...def.items], target, categoryId, def.slug);
    const current = countByCategoryId.get(categoryId) ?? 0;

    if (current === rows.length) {
      skipped.push(def.slug);
      continue;
    }

    if (Date.now() - startedAt > TIME_BUDGET_MS) {
      remaining.push(def.slug);
      continue;
    }

    const del = await db
      .delete(questions)
      .where(sql`${questions}."category_id" = ${categoryId} AND ${questions}."source" = 'generated'`)
      .returning({ id: questions.id });
    removed += del.length;
    for (const batch of chunk(rows, 250)) {
      const res = await db.insert(questions).values(batch).returning({ id: questions.id });
      inserted += res.length;
    }
    completed.push(def.slug);
  }

  const done = remaining.length === 0;
  const [{ count: totalNow }] = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(questions);

  return NextResponse.json({
    ok: true,
    done,
    message: done
      ? "Question bank fully replaced. Users, payments, and manually uploaded questions were not touched."
      : `Progress saved. ${remaining.length} categor${remaining.length === 1 ? "y" : "ies"} remaining — refresh this page to continue.`,
    totalQuestionsNow: totalNow,
    categoriesReplacedThisVisit: completed,
    categoriesAlreadyUpToDate: skipped,
    categoriesRemaining: remaining,
    questionsInsertedThisVisit: inserted,
    oldQuestionsRemovedThisVisit: removed,
    usersPreserved: userCount,
    inProgressAdaptiveSessionsClosed: ended.length,
  });
}
