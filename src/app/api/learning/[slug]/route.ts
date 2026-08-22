import { NextResponse } from "next/server";
import { db } from "@/db";
import { learningTopics, learningBookmarks } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { requireUser, handleApiError, ApiError } from "@/lib/api";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const user = await requireUser();
    const { slug } = await params;

    const rows = await db.select().from(learningTopics).where(eq(learningTopics.slug, slug)).limit(1);
    const topic = rows[0];
    if (!topic) throw new ApiError("Topic not found", 404);

    const bookmarkRows = await db
      .select({ topicId: learningBookmarks.topicId })
      .from(learningBookmarks)
      .where(and(eq(learningBookmarks.userId, user.id), eq(learningBookmarks.topicId, topic.id)))
      .limit(1);

    return NextResponse.json({ topic: { ...topic, isBookmarked: bookmarkRows.length > 0 } });
  } catch (error) {
    return handleApiError(error);
  }
}
