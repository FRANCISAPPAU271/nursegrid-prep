import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { questionAttempts } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { getCachedCategorySummaries } from "@/lib/catalog";

export const dynamic = "force-dynamic";

const ICONS: Record<string, string> = {
  stethoscope: "🩺",
  pill: "💊",
  heart: "❤️",
  baby: "👶",
  brain: "🧠",
  shield: "🛡️",
  droplet: "💧",
  clipboard: "📋",
  users: "🧑‍🤝‍🧑",
  activity: "📈",
  flask: "🧪",
  sunrise: "🌅",
};

export default async function QuestionBankPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  // Category catalog data is cached (rarely changes); only the user's own
  // attempt progress needs a fresh, per-request query.
  const [categoryRows, progressRows] = await Promise.all([
    getCachedCategorySummaries(),
    db
      .select({
        categoryId: questionAttempts.categoryId,
        attempted: sql<number>`count(*)`.mapWith(Number),
        correct: sql<number>`count(*) filter (where ${questionAttempts.isCorrect} = true)`.mapWith(Number),
      })
      .from(questionAttempts)
      .where(eq(questionAttempts.userId, user.id))
      .groupBy(questionAttempts.categoryId),
  ]);

  const progressMap = new Map(progressRows.map((p) => [p.categoryId, p]));
  const totalQuestions = categoryRows.reduce((sum, c) => sum + c.totalQuestions, 0);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">NMC Exam Question Bank</h1>
        <p className="text-slate-600">
          {totalQuestions.toLocaleString()} questions across {categoryRows.length} categories, each with a rationale and strategy tip.
        </p>
      </div>

      {!user.isPremium && (
        <div className="mb-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-white p-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold text-amber-800">You&apos;re previewing the free tier</p>
            <p className="mt-1 text-sm text-amber-700">
              Free accounts can practice a preview set in every category. Get full access to all {totalQuestions.toLocaleString()} questions from just $5.
            </p>
          </div>
          <Link href="/dashboard/billing" className="shrink-0 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-amber-600">
            Get full access — from $5
          </Link>
        </div>
      )}

      <div className="mb-6 flex flex-wrap gap-3">
        <Link
          href="/dashboard/questions/practice"
          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:border-emerald-300 hover:text-emerald-700"
        >
          🎲 Mixed random practice
        </Link>
        <Link
          href="/dashboard/questions/bookmarks"
          className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm hover:border-emerald-300 hover:text-emerald-700"
        >
          🔖 Bookmarked questions
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categoryRows.map((c) => {
          const progress = progressMap.get(c.id);
          const accuracy = progress && progress.attempted > 0 ? Math.round((progress.correct / progress.attempted) * 100) : null;
          const attemptPct = c.totalQuestions > 0 ? Math.min(100, Math.round(((progress?.attempted ?? 0) / c.totalQuestions) * 100)) : 0;
          return (
            <Link
              key={c.id}
              href={`/dashboard/questions/${c.slug}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-xl">
                  {ICONS[c.icon] ?? "🩺"}
                </span>
                {!user.isPremium && <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500">{c.freeQuestions} free</span>}
              </div>
              <h3 className="mt-3 text-base font-bold text-slate-900 group-hover:text-emerald-700">{c.name}</h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{c.clientNeed}</p>
              <p className="mt-2 line-clamp-2 text-sm text-slate-600">{c.description}</p>
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{c.totalQuestions.toLocaleString()} questions</span>
                  <span>{accuracy === null ? "Not started" : `${accuracy}% correct`}</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-emerald-500" style={{ width: `${attemptPct}%` }} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
