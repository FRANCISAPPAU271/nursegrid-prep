import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { questionCategories, questionAttempts, questions } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import Empty from "@/components/ui/Empty";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function ProgressPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const categoryRows = await db
    .select({
      id: questionCategories.id,
      name: questionCategories.name,
      icon: questionCategories.icon,
      totalQuestions: sql<number>`count(distinct ${questions.id})`.mapWith(Number),
    })
    .from(questionCategories)
    .leftJoin(questions, eq(questions.categoryId, questionCategories.id))
    .groupBy(questionCategories.id)
    .orderBy(questionCategories.sortOrder);

  const progressRows = await db
    .select({
      categoryId: questionAttempts.categoryId,
      attempted: sql<number>`count(*)`.mapWith(Number),
      correct: sql<number>`count(*) filter (where ${questionAttempts.isCorrect} = true)`.mapWith(Number),
    })
    .from(questionAttempts)
    .where(eq(questionAttempts.userId, user.id))
    .groupBy(questionAttempts.categoryId);

  const progressMap = new Map(progressRows.map((p) => [p.categoryId, p]));
  const totalAttempted = progressRows.reduce((s, p) => s + p.attempted, 0);
  const totalCorrect = progressRows.reduce((s, p) => s + p.correct, 0);
  const overallAccuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : null;

  const ranked = categoryRows
    .map((c) => {
      const p = progressMap.get(c.id);
      const accuracy = p && p.attempted > 0 ? Math.round((p.correct / p.attempted) * 100) : null;
      return { ...c, attempted: p?.attempted ?? 0, correct: p?.correct ?? 0, accuracy };
    })
    .filter((c) => c.attempted > 0)
    .sort((a, b) => (a.accuracy ?? 100) - (b.accuracy ?? 100));

  return (
    <div>
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Progress</h1>
        <p className="text-slate-600">Track your accuracy across every NCLEX client-needs category.</p>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm font-medium text-slate-500">Questions answered</p>
          <p className="mt-2 text-2xl font-extrabold text-slate-950">{totalAttempted.toLocaleString()}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm font-medium text-slate-500">Correct answers</p>
          <p className="mt-2 text-2xl font-extrabold text-slate-950">{totalCorrect.toLocaleString()}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm font-medium text-slate-500">Overall accuracy</p>
          <p className="mt-2 text-2xl font-extrabold text-slate-950">{overallAccuracy === null ? "—" : `${overallAccuracy}%`}</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="mb-4 text-base font-bold text-slate-950">Accuracy by category</h2>
        {ranked.length === 0 ? (
          <Empty
            icon="📈"
            title="No attempts yet"
            description="Answer a few questions in the question bank to see your progress broken down by category."
            action={
              <Link href="/dashboard/questions" className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                Start practicing
              </Link>
            }
          />
        ) : (
          <div className="space-y-4">
            {ranked.map((c) => (
              <div key={c.id}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-800">{c.name}</span>
                  <span className="text-slate-500">
                    {c.correct}/{c.attempted} · {c.accuracy}%
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full ${
                      (c.accuracy ?? 0) >= 80 ? "bg-emerald-500" : (c.accuracy ?? 0) >= 60 ? "bg-amber-500" : "bg-rose-500"
                    }`}
                    style={{ width: `${c.accuracy}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
