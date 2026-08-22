import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { learningBookmarks } from "@/db/schema";
import { eq } from "drizzle-orm";
import LearningLibrary from "@/components/learning/LearningLibrary";
import type { LearningTopicSummary } from "@/lib/types";
import { getCachedLearningTopicsList } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export default async function LearningPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const [rows, bookmarkRows] = await Promise.all([
    getCachedLearningTopicsList(),
    db.select({ topicId: learningBookmarks.topicId }).from(learningBookmarks).where(eq(learningBookmarks.userId, user.id)),
  ]);

  const bookmarked = new Set(bookmarkRows.map((b) => b.topicId));
  const initial: LearningTopicSummary[] = rows.map((t) => ({ ...t, isBookmarked: bookmarked.has(t.id) }));

  return (
    <div>
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Learning Library</h1>
        <p className="text-slate-600">
          Simple nursing notes on every body system, obstetric anatomy, and the nursing process — with diagrams and short videos.
        </p>
      </div>
      <LearningLibrary initial={initial} />
    </div>
  );
}
