import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { catSessions } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import CatDashboard from "@/components/cat/CatDashboard";
import type { CatListItem } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function CatPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const rows = await db
    .select({
      id: catSessions.id,
      status: catSessions.status,
      correctCount: catSessions.correctCount,
      askedQuestionIds: catSessions.askedQuestionIds,
      minQuestions: catSessions.minQuestions,
      maxQuestions: catSessions.maxQuestions,
      startedAt: catSessions.startedAt,
      completedAt: catSessions.completedAt,
    })
    .from(catSessions)
    .where(eq(catSessions.userId, user.id))
    .orderBy(desc(catSessions.startedAt))
    .limit(50);

  const sessions: CatListItem[] = rows.map((r) => ({
    id: r.id,
    status: r.status,
    correctCount: r.correctCount,
    questionsAnswered: r.askedQuestionIds.length,
    minQuestions: r.minQuestions,
    maxQuestions: r.maxQuestions,
    startedAt: r.startedAt.toISOString(),
    completedAt: r.completedAt ? r.completedAt.toISOString() : null,
  }));

  return (
    <div>
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Adaptive Test (CAT) Practice</h1>
        <p className="text-slate-600">
          A simplified simulation of computerized adaptive testing — question difficulty adjusts based on your answers, and the exam ends once a
          confidence-based pass/fail estimate is reached.
        </p>
      </div>
      <CatDashboard isPremium={user.isPremium} sessions={sessions} />
    </div>
  );
}
