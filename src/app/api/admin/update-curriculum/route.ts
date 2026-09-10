import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { strategies, learningTopics } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { STRATEGY_DEFS } from "@/db/strategy-defs";
import { EXTRA_LEARNING_TOPICS } from "@/db/learning-extras";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

// ---------------------------------------------------------------------------
// Admin action: update the strategies and learning library from the shipped
// definitions, without running the full seed.
//
// Why this exists
// ---------------
// Strategies and learning topics are inserted by src/db/seed.ts, which also
// deletes and recreates users, questions, care plans and payment records.
// Running that against production to pick up content edits would be
// catastrophic. This route touches exactly two tables and nothing else.
//
// It UPSERTS by slug rather than deleting:
//   * an existing slug has its content updated in place, so the row id is
//     preserved and every strategy_bookmarks / learning_bookmarks row that
//     points at it survives
//   * a new slug is inserted
//   * a slug that exists in the database but not in the code is left alone,
//     never deleted, so nothing a student bookmarked can vanish
//
// That makes it safe to run repeatedly. Read-only until ?apply=1.
// ---------------------------------------------------------------------------
export async function GET(request: Request) {
  const startedAt = Date.now();

  const user = await getCurrentUser();
  if (!user) return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  if (!user.isAdmin) return NextResponse.json({ error: "Admins only" }, { status: 403 });

  const apply = new URL(request.url).searchParams.get("apply") === "1";

  // ---- What is in the database now? ---------------------------------------
  const existingStrategies = await db
    .select({ id: strategies.id, slug: strategies.slug })
    .from(strategies);
  const strategyBySlug = new Map(existingStrategies.map((s) => [s.slug, s.id]));

  const existingTopics = await db
    .select({ id: learningTopics.id, slug: learningTopics.slug })
    .from(learningTopics);
  const topicBySlug = new Map(existingTopics.map((t) => [t.slug, t.id]));

  const strategiesToAdd = STRATEGY_DEFS.filter((s) => !strategyBySlug.has(s.slug)).map((s) => s.slug);
  const strategiesToUpdate = STRATEGY_DEFS.filter((s) => strategyBySlug.has(s.slug)).map((s) => s.slug);
  const topicsToAdd = EXTRA_LEARNING_TOPICS.filter((t) => !topicBySlug.has(t.slug)).map((t) => t.slug);
  const topicsToUpdate = EXTRA_LEARNING_TOPICS.filter((t) => topicBySlug.has(t.slug)).map((t) => t.slug);

  if (!apply) {
    return NextResponse.json({
      ok: true,
      mode: "inspect",
      message:
        "Nothing has been changed. Re-run with ?apply=1 to update the strategies and learning library.",
      strategies: {
        inDatabase: existingStrategies.length,
        inCode: STRATEGY_DEFS.length,
        willUpdate: strategiesToUpdate.length,
        willAdd: strategiesToAdd,
      },
      learningTopics: {
        inDatabase: existingTopics.length,
        inCodeExtras: EXTRA_LEARNING_TOPICS.length,
        willUpdate: topicsToUpdate.length,
        willAdd: topicsToAdd,
      },
      note: "Rows are matched by slug and updated in place, so bookmarks are preserved. Nothing is ever deleted.",
      applyUrl: "/api/admin/update-curriculum?apply=1",
    });
  }

  // ---- Apply --------------------------------------------------------------
  let strategiesUpdated = 0;
  let strategiesInserted = 0;

  for (let i = 0; i < STRATEGY_DEFS.length; i++) {
    const s = STRATEGY_DEFS[i];
    const values = {
      slug: s.slug,
      title: s.title,
      category: s.category,
      summary: s.summary,
      content: [...s.content],
      example: s.example,
      icon: s.icon,
      readTimeMinutes: s.readTimeMinutes,
      sortOrder: i,
      videoId: s.videoId ?? null,
      videoTitle: s.videoTitle ?? null,
    };

    const existingId = strategyBySlug.get(s.slug);
    if (existingId) {
      await db.update(strategies).set(values).where(eq(strategies.id, existingId));
      strategiesUpdated++;
    } else {
      await db.insert(strategies).values(values);
      strategiesInserted++;
    }
  }

  let topicsUpdated = 0;
  let topicsInserted = 0;

  for (const t of EXTRA_LEARNING_TOPICS) {
    const values = {
      slug: t.slug,
      title: t.title,
      category: t.category,
      icon: t.icon,
      summary: t.summary,
      overview: t.overview,
      keyStructures: [...t.keyStructures],
      normalFindings: [...t.normalFindings],
      nursingNotes: [...t.nursingNotes],
      redFlags: [...t.redFlags],
      commonConditions: [...t.commonConditions],
      sortOrder: t.sortOrder,
    };

    const existingId = topicBySlug.get(t.slug);
    if (existingId) {
      await db.update(learningTopics).set(values).where(eq(learningTopics.id, existingId));
      topicsUpdated++;
    } else {
      await db.insert(learningTopics).values(values);
      topicsInserted++;
    }
  }

  const [{ count: strategyCount }] = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(strategies);
  const [{ count: topicCount }] = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(learningTopics);

  return NextResponse.json({
    ok: true,
    mode: "apply",
    message: `Updated. ${strategyCount} strategies and ${topicCount} learning topics are now live. Bookmarks, users, questions and care plans were not touched.`,
    strategies: {
      updated: strategiesUpdated,
      inserted: strategiesInserted,
      totalNow: strategyCount,
    },
    learningTopics: {
      updated: topicsUpdated,
      inserted: topicsInserted,
      totalNow: topicCount,
    },
    elapsedMs: Date.now() - startedAt,
  });
}
