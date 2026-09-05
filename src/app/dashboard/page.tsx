import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { tasks, notes, questionAttempts, questionCategories, questions } from "@/db/schema";
import { and, eq, sql } from "drizzle-orm";
import GettingStarted from "@/components/dashboard/GettingStarted";

export const dynamic = "force-dynamic";

function fmtDate(d: Date | null) {
  if (!d) return "No due date";
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(d);
}

export default async function OverviewPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  // Run all independent read queries concurrently instead of sequentially —
  // this page issues six unrelated queries, and awaiting them one at a time
  // would multiply round-trip latency to the database for no benefit.
  const [taskStatsRows, noteStatsRows, questionStatsRows, totalQuestionsRows, upcoming, dailyQuestionRows] = await Promise.all([
    db
      .select({
        total: sql<number>`count(*)`.mapWith(Number),
        done: sql<number>`count(*) filter (where ${tasks.status} = 'done')`.mapWith(Number),
        overdue: sql<number>`count(*) filter (where ${tasks.status} != 'done' and ${tasks.dueDate} is not null and ${tasks.dueDate} < now())`.mapWith(Number),
      })
      .from(tasks)
      .where(eq(tasks.userId, user.id)),
    db
      .select({ total: sql<number>`count(*)`.mapWith(Number) })
      .from(notes)
      .where(eq(notes.userId, user.id)),
    db
      .select({
        attempted: sql<number>`count(*)`.mapWith(Number),
        correct: sql<number>`count(*) filter (where ${questionAttempts.isCorrect} = true)`.mapWith(Number),
      })
      .from(questionAttempts)
      .where(eq(questionAttempts.userId, user.id)),
    db.select({ totalQuestions: sql<number>`count(*)`.mapWith(Number) }).from(questions),
    db
      .select()
      .from(tasks)
      .where(and(eq(tasks.userId, user.id), sql`${tasks.status} != 'done'`))
      .orderBy(sql`${tasks.dueDate} asc nulls last`)
      .limit(5),
    db
      .select({
        id: questions.id,
        stem: questions.stem,
        categoryName: questionCategories.name,
      })
      .from(questions)
      .innerJoin(questionCategories, eq(questions.categoryId, questionCategories.id))
      .where(eq(questions.isFree, true))
      .orderBy(sql`random()`)
      .limit(1),
  ]);

  const [taskStats] = taskStatsRows;
  const [noteStats] = noteStatsRows;
  const [questionStats] = questionStatsRows;
  const [{ totalQuestions }] = totalQuestionsRows;
  const [dailyQuestion] = dailyQuestionRows;

  const accuracy = questionStats.attempted > 0 ? Math.round((questionStats.correct / questionStats.attempted) * 100) : null;
  const completion = taskStats.total > 0 ? Math.round((taskStats.done / taskStats.total) * 100) : 0;

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold text-emerald-700">Welcome back</p>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">Hi {user.name.split(" ")[0]} 👋</h1>
        <p className="mt-1 text-slate-600">Here&apos;s how your study plan is shaping up.</p>
      </div>

      <GettingStarted
        attempted={questionStats.attempted}
        tasksTotal={taskStats.total}
        notesTotal={noteStats.total}
        isPremium={user.isPremium}
      />

      {!user.isPremium && (
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-white p-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-bold text-amber-800">Unlock the full {totalQuestions.toLocaleString()}-question bank</p>
            <p className="mt-1 text-sm text-amber-700">
              You&apos;re on the free plan. Get full access from just $5 for 4 months, $9 for 8 months, or $13 for a full year with rationales and strategies.
            </p>
          </div>
          <Link
            href="/dashboard/billing"
            className="shrink-0 rounded-lg bg-amber-500 px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-amber-600"
          >
            Get full access — from $5
          </Link>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Tasks completed" value={`${taskStats.done}/${taskStats.total}`} sub={`${completion}% complete`} icon="✅" />
        <StatCard label="Overdue tasks" value={String(taskStats.overdue)} sub={taskStats.overdue > 0 ? "Needs attention" : "All caught up"} icon="⏰" tone={taskStats.overdue > 0 ? "warn" : "good"} />
        <StatCard label="Study notes" value={String(noteStats.total)} sub="saved notes" icon="📝" />
        <StatCard
          label="NMC exam accuracy"
          value={accuracy === null ? "—" : `${accuracy}%`}
          sub={`${questionStats.attempted} questions answered`}
          icon="🧠"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-bold text-slate-950">Next up</h2>
            <Link href="/dashboard/tasks" className="text-sm font-semibold text-emerald-700 hover:underline">
              View all tasks
            </Link>
          </div>
          {upcoming.length === 0 ? (
            <p className="py-8 text-center text-sm text-slate-500">
              Nothing scheduled. Head to Tasks to add your next clinical or study session.
            </p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {upcoming.map((t) => (
                <li key={t.id} className="flex items-center justify-between gap-4 py-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900">{t.title}</p>
                    <p className="text-xs capitalize text-slate-500">{t.category.replace("_", " ")}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <PriorityBadge priority={t.priority} />
                    <span className="text-xs font-medium text-slate-500">{fmtDate(t.dueDate)}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-base font-bold text-slate-950">Question of the day</h2>
            {dailyQuestion ? (
              <>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  {dailyQuestion.categoryName}
                </p>
                <p className="mt-2 text-sm text-slate-700">{dailyQuestion.stem}</p>
                <Link
                  href="/dashboard/questions"
                  className="mt-4 inline-block rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-800"
                >
                  Answer it now
                </Link>
              </>
            ) : (
              <p className="mt-2 text-sm text-slate-500">Question bank is warming up.</p>
            )}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-base font-bold text-slate-950">Quick links</h2>
            <div className="mt-3 space-y-2">
              <QuickLink href="/dashboard/exams" icon="📝" label="Build a custom exam from any category" />
              <QuickLink href="/dashboard/cat" icon="📊" label="Try an adaptive (CAT) practice test" />
              <QuickLink href="/dashboard/learning" icon="📚" label="Study body systems in the Learning Library" />
              <QuickLink href="/dashboard/care-plans" icon="🗒️" label="Build a nursing care plan" />
              <QuickLink href="/dashboard/strategies" icon="🎯" label="Browse test-taking strategies" />
              <QuickLink href="/dashboard/questions/bookmarks" icon="🔖" label="Review bookmarked questions" />
              <QuickLink href="/dashboard/progress" icon="📈" label="See progress by category" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  sub,
  icon,
  tone = "default",
}: {
  label: string;
  value: string;
  sub: string;
  icon: string;
  tone?: "default" | "warn" | "good";
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <span className="text-lg">{icon}</span>
      </div>
      <p className="mt-2 text-2xl font-extrabold text-slate-950">{value}</p>
      <p
        className={`mt-1 text-xs font-medium ${
          tone === "warn" ? "text-amber-600" : tone === "good" ? "text-emerald-600" : "text-slate-500"
        }`}
      >
        {sub}
      </p>
    </div>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const styles: Record<string, string> = {
    high: "bg-rose-100 text-rose-700",
    medium: "bg-amber-100 text-amber-700",
    low: "bg-slate-100 text-slate-600",
  };
  return <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${styles[priority]}`}>{priority}</span>;
}

function QuickLink({ href, icon, label }: { href: string; icon: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
    >
      <span>{icon}</span>
      {label}
    </Link>
  );
}
