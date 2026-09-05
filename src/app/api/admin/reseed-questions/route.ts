import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { questions, questionCategories, catSessions, users } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { buildAllQuestionRows, CATEGORY_META, chunk } from "@/db/question-bank";

export const dynamic = "force-dynamic";
// Allow up to 60s (Vercel Hobby limit) for the delete + 3,848 inserts.
export const maxDuration = 60;

// ---------------------------------------------------------------------------
// One-time admin action: safely replace the question bank in production.
//
//   KEPT:     users, payments, subscriptions, tasks, notes, strategies, etc.
//   REPLACED: questions (regenerated with the low-repetition generator).
//   CASCADED: old question attempts/bookmarks are removed automatically.
//
// Protected: requires a signed-in admin account. Visit while logged in as
// admin:  https://nursegrid.vercel.app/api/admin/reseed-questions
// ---------------------------------------------------------------------------
export async function GET() {
  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  if (!user.isAdmin) return NextResponse.json({ error: "Admins only" }, { status: 403 });

  const [{ count: userCount }] = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(users);

  const [{ count: oldCount }] = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(questions);

  // 1. Close any in-progress adaptive sessions (their current question is
  //    about to disappear).
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

  // 3. Replace the question bank.
  await db.delete(questions);
  const rows = buildAllQuestionRows(bySlug);
  let inserted = 0;
  for (const batch of chunk(rows, 500)) {
    const res = await db.insert(questions).values(batch).returning({ id: questions.id });
    inserted += res.length;
  }

  return NextResponse.json({
    ok: true,
    message: "Question bank replaced successfully. Users and payments were not touched.",
    usersPreserved: userCount,
    oldQuestionsRemoved: oldCount,
    newQuestionsInserted: inserted,
    inProgressAdaptiveSessionsClosed: ended.length,
  });
}
