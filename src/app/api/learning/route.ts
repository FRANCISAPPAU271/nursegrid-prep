import { NextResponse } from "next/server";
import { db } from "@/db";
import { learningBookmarks } from "@/db/schema";
import { eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";
import { getCachedLearningTopicsList } from "@/lib/catalog";

export async function GET() {
  try {
    const user = await requireUser();

    const [topics, bookmarkRows] = await Promise.all([
      getCachedLearningTopicsList(),
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
