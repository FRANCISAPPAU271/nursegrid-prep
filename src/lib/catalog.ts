import "server-only";
import { unstable_cache } from "next/cache";
import { db } from "@/db";
import { questionCategories, questions, strategies, learningTopics } from "@/db/schema";
import { asc, eq, sql } from "drizzle-orm";

// ---------------------------------------------------------------------------
// These catalog datasets (question categories + counts, strategies, learning
// topics) are identical for every user and change extremely rarely (only
// when the content itself is edited), yet were previously re-queried from
// Postgres on every single dashboard page load and every API call. Wrapping
// them in Next.js's data cache with a short revalidation window turns
// repeat requests into in-memory hits instead of a network round trip to the
// database — a meaningful, low-risk speed win since per-user data (bookmarks,
// progress) is still always fetched fresh and merged in separately.
// ---------------------------------------------------------------------------

export const getCachedCategorySummaries = unstable_cache(
  async () => {
    return db
      .select({
        id: questionCategories.id,
        slug: questionCategories.slug,
        name: questionCategories.name,
        description: questionCategories.description,
        clientNeed: questionCategories.clientNeed,
        icon: questionCategories.icon,
        sortOrder: questionCategories.sortOrder,
        totalQuestions: sql<number>`count(distinct ${questions.id})`.mapWith(Number),
        freeQuestions: sql<number>`count(distinct ${questions.id}) filter (where ${questions.isFree} = true)`.mapWith(Number),
      })
      .from(questionCategories)
      .leftJoin(questions, eq(questions.categoryId, questionCategories.id))
      .groupBy(questionCategories.id)
      .orderBy(questionCategories.sortOrder);
  },
  ["catalog-category-summaries"],
  { revalidate: 300, tags: ["categories"] },
);

export const getCachedStrategiesList = unstable_cache(
  async () => db.select().from(strategies).orderBy(asc(strategies.sortOrder)),
  ["catalog-strategies-list"],
  { revalidate: 300, tags: ["strategies"] },
);

export const getCachedLearningTopicsList = unstable_cache(
  async () =>
    db
      .select({
        id: learningTopics.id,
        slug: learningTopics.slug,
        title: learningTopics.title,
        category: learningTopics.category,
        icon: learningTopics.icon,
        summary: learningTopics.summary,
        imageUrl: learningTopics.imageUrl,
        videoId: learningTopics.videoId,
        sortOrder: learningTopics.sortOrder,
      })
      .from(learningTopics)
      .orderBy(asc(learningTopics.sortOrder)),
  ["catalog-learning-topics-list"],
  { revalidate: 300, tags: ["learning-topics"] },
);

export const getCachedLearningTopicBySlug = unstable_cache(
  async (slug: string) => {
    const rows = await db.select().from(learningTopics).where(eq(learningTopics.slug, slug)).limit(1);
    return rows[0] ?? null;
  },
  ["catalog-learning-topic-by-slug"],
  { revalidate: 300, tags: ["learning-topics"] },
);
