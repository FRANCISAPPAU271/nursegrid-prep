import { NextResponse } from "next/server";
import { db } from "@/db";
import { learningTopics, learningBookmarks } from "@/db/schema";
import { asc, eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";

export async function GET() {
  try {
    const user = await requireUser();

    const [topics, bookmarkRows] = await Promise.all([
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
      db.select({ topicId: learningBookmarks.topicId }).from(learningBookmarks).where(eq(learningBookmarks.userId, user.id)),
    ]);

    const bookmarked = new Set(bookmarkRows.map((b) => b.topicId));

    return NextResponse.json({
      topics: topics.map((t) => ({ ...t, isBookmarked: bookmarked.has(t.id) })),
    });
  } catch (error) {
    return handleApiError(error);
  }
}
