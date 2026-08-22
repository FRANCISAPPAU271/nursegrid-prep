import { NextResponse } from "next/server";
import { db } from "@/db";
import { learningBookmarks } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import { requireUser, handleApiError } from "@/lib/api";

// Note: this dynamic segment is named [slug] to match the sibling
// /api/learning/[slug] route (Next.js requires consistent dynamic segment
// names at the same path level), but the value passed here is actually the
// learning topic's id (see LearningLibrary/LearningTopicDetail components).
export async function POST(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const user = await requireUser();
    const { slug: topicId } = await params;
    await db.insert(learningBookmarks).values({ userId: user.id, topicId }).onConflictDoNothing();
    return NextResponse.json({ bookmarked: true });
  } catch (error) {
    return handleApiError(error);
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const user = await requireUser();
    const { slug: topicId } = await params;
    await db.delete(learningBookmarks).where(and(eq(learningBookmarks.userId, user.id), eq(learningBookmarks.topicId, topicId)));
    return NextResponse.json({ bookmarked: false });
  } catch (error) {
    return handleApiError(error);
  }
}
