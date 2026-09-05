import Link from "next/link";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/db";
import { tasks, notes, questionAttempts, questionCategories, questions } from "@/db/schema";
import { and, eq, sql } from "drizzle-orm";
import GettingStarted from "@/components/dashboard/GettingStarted";
import { getUserExamDate } from "@/db/user-exam-date";
import { buildWhatsAppLink } from "@/lib/contact";

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
  const [taskStatsRows, noteStatsRows, questionStatsRows, totalQuestionsRows, upcoming, dailyQuestionRows, examDate, streakResult] = await Promise.all([
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
    getUserExamDate(user.id),
    // Study streak: consecutive calendar days with at least one question
    // attempt, counted backwards from the most recent practice day. The
    // streak is "alive" only if that day is today or yesterday (yesterday
    // keeps the flame lit until the student practices today).
    db.execute(sql`
      WITH days AS (
        SELECT DISTINCT date_trunc('day', "attempted_at")::date AS d
        FROM "question_attempts"
        WHERE "user_id" = ${user.id}
      ),
      numbered AS (
        SELECT d, row_number() OVER (ORDER BY d DESC) AS rn
        FROM days
      )
      SELECT CASE
        WHEN (SELECT max(d) FROM days) IS NULL THEN 0
        WHEN (SELECT max(d) FROM days) < current_date - 1 THEN 0
        ELSE (
          SELECT count(*) FROM numbered
          WHERE d = (SELECT max(d) FROM days) - (rn - 1)::int
        )
      END AS streak
    `),
  ]);

  const [taskStats] = taskStatsRows;
  const [noteStats] = noteStatsRows;
  const [questionStats] = questionStatsRows;
  const [{ totalQuestions }] = totalQuestionsRows;
  const [dailyQuestion] = dailyQuestionRows;
  const streak = Number((streakResult.rows[0] as { streak?: string | number } | undefined)?.streak ?? 0);

  const accuracy = questionStats.attempted > 0 ? Math.round((questionStats.correct / questionStats.attempted) * 100) : null;
  const completion = taskStats.total > 0 ? Math.round((taskStats.done / taskStats.total) * 100) : 0;

  // Exam countdown (only future dates count).
  let daysLeft: number | null = null;
  if (examDate) {
    const ms = new Date(`${examDate}T09:00:00Z`).getTime() - Date.now();
    const d = Math.ceil(ms / (24 * 60 * 60 * 1000));
    if (d >= 0) daysLeft = d;
  }

  // Free-trial countdown: user is premium purely from the signup/referral
  // trial (premiumTrialEndsAt in the future) — show days remaining + upgrade CTA.
  let trialDaysLeft: number | null = null;
  if (user.isPremium && user.premiumTrialEndsAt) {
    const ms = user.premiumTrialEndsAt.getTime() - Date.now();
    if (ms > 0) trialDaysLeft = Math.ceil(ms / (24 * 60 * 60 * 1000));
  }

  const communityLink = buildWhatsAppLink(
    "Hi NurseGrid Prep! I'd like to join the student study community.",
  );
  const testimonialLink = buildWhatsAppLink(
    "Hi NurseGrid Prep! I passed my NMC exam and I'd love to share my story: ",
  );

  // Show the testimonial ask only to engaged students — those with real
  // practice history are the ones with stories worth telling.
  const showTestimonialAsk = questionStats.attempted >= 100;

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

      {/* Free premium trial countdown */}
      {trialDaysLeft !== null && (
        <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-teal-50 to-white p-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25">
              <div className="text-center">
                <p className="text-lg font-extrabold leading-none">{trialDaysLeft}</p>
                <p className="text-[8px] font-bold uppercase tracking-widest">day{trialDaysLeft === 1 ? "" : "s"}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-extrabold text-emerald-900">🎁 Free premium trial — {trialDaysLeft} day{trialDaysLeft === 1 ? "" : "s"} left</p>
              <p className="mt-0.5 text-sm text-emerald-800">
                You have FULL access right now: all {totalQuestions.toLocaleString()} questions, mock exams, CAT, readiness &amp; more.
                Make it count — then keep it from just $5.
              </p>
            </div>
          </div>
          <Link
            href="/dashboard/billing"
            className="shrink-0 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/25 transition-all hover:scale-105 active:scale-95"
          >
            Keep premium — from $5
          </Link>
        </div>
      )}

      {/* Exam countdown banner */}
      {daysLeft !== null && (
        <div className="flex flex-col items-start justify-between gap-4 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-5 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/10 backdrop-blur">
              <div className="text-center">
                <p className="text-lg font-extrabold leading-none text-white">{daysLeft}</p>
                <p className="text-[8px] font-bold uppercase tracking-widest text-emerald-300">days</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">NMC exam countdown</p>
              <p className="text-base font-extrabold text-white">
                {daysLeft === 0 ? "Exam day is here — you've got this! 💪" : `${daysLeft} day${daysLeft === 1 ? "" : "s"} until your exam`}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Link
              href="/dashboard/readiness"
              className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95"
            >
              Check readiness →
            </Link>
            <Link
              href="/dashboard/study-plan"
              className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              Study plan
            </Link>
          </div>
        </div>
      )}

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
        <StatCard
          label="Study streak"
          value={streak > 0 ? `${streak} day${streak === 1 ? "" : "s"}` : "—"}
          sub={streak > 0 ? "Answer a question today to keep it alive" : "Answer 1 question to start a streak"}
          icon="🔥"
          tone={streak >= 3 ? "good" : "default"}
        />
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

          {/* WhatsApp study community */}
          <div className="overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-600 to-teal-700 p-5 text-white">
            <h2 className="text-base font-extrabold tracking-tight">💬 Join the study community</h2>
            <p className="mt-1.5 text-sm text-emerald-50">
              Study with fellow Ghanaian nursing students — share tips, ask questions, and stay motivated for the NMC exam together.
            </p>
            <a
              href={communityLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50"
            >
              Join on WhatsApp →
            </a>
          </div>

          {/* Testimonial collection — only shown to engaged students */}
          {showTestimonialAsk && (
            <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5">
              <h2 className="text-base font-extrabold tracking-tight text-slate-950">🌟 Passed your exam?</h2>
              <p className="mt-1.5 text-sm text-slate-600">
                Your story could help another student believe they can do it too. Share how NurseGrid Prep helped you —
                we may feature it (with your permission).
              </p>
              <a
                href={testimonialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-amber-600"
              >
                Share my story →
              </a>
            </div>
          )}
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
