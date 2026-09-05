import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { strategyBookmarks } from "@/db/schema";
import { eq } from "drizzle-orm";
import StrategyLibrary from "@/components/strategies/StrategyLibrary";
import type { Strategy } from "@/lib/types";
import { getCachedStrategiesList } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export default async function StrategiesPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const [rows, bookmarkRows] = await Promise.all([
    getCachedStrategiesList(),
    db.select({ strategyId: strategyBookmarks.strategyId }).from(strategyBookmarks).where(eq(strategyBookmarks.userId, user.id)),
  ]);
  const bookmarked = new Set(bookmarkRows.map((b) => b.strategyId));

  const initial: Strategy[] = rows.map((s) => ({
    id: s.id,
    slug: s.slug,
    title: s.title,
    category: s.category,
    summary: s.summary,
    content: s.content,
    example: s.example,
    icon: s.icon,
    readTimeMinutes: s.readTimeMinutes,
    sortOrder: s.sortOrder,
    isBookmarked: bookmarked.has(s.id),
    videoId: s.videoId,
    videoTitle: s.videoTitle,
  }));

  return (
    <div>
      <div className="mb-5 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">
          Test-taking strategies <span className="align-middle text-lg">🎯</span>
        </h1>
        <p className="text-slate-600">Proven frameworks to reason through NMC exam-style questions, free for every student.</p>
      </div>
      <StrategyLibrary initial={initial} />
    </div>
  );
}
