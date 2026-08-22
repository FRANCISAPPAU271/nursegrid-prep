import { notFound } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { learningTopics, learningBookmarks } from "@/db/schema";
import { and, eq } from "drizzle-orm";
import LearningTopicDetail from "@/components/learning/LearningTopicDetail";
import type { LearningTopicDetail as LearningTopicDetailType } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function LearningTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const user = await getCurrentUser();
  if (!user) return null;
  const { slug } = await params;

  const rows = await db.select().from(learningTopics).where(eq(learningTopics.slug, slug)).limit(1);
  const topic = rows[0];
  if (!topic) notFound();

  const bookmarkRows = await db
    .select({ topicId: learningBookmarks.topicId })
    .from(learningBookmarks)
    .where(and(eq(learningBookmarks.userId, user.id), eq(learningBookmarks.topicId, topic.id)))
    .limit(1);

  const initial: LearningTopicDetailType = {
    id: topic.id,
    slug: topic.slug,
    title: topic.title,
    category: topic.category,
    icon: topic.icon,
    summary: topic.summary,
    overview: topic.overview,
    keyStructures: topic.keyStructures,
    normalFindings: topic.normalFindings,
    nursingNotes: topic.nursingNotes,
    redFlags: topic.redFlags,
    commonConditions: topic.commonConditions,
    imageUrl: topic.imageUrl,
    videoId: topic.videoId,
    videoTitle: topic.videoTitle,
    videoSource: topic.videoSource,
    sortOrder: topic.sortOrder,
    isBookmarked: bookmarkRows.length > 0,
  };

  return <LearningTopicDetail initial={initial} />;
}
