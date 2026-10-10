import Link from "next/link";
import { notFound } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { courseMinutes, flattenLessons, getCourse } from "@/content/courses";
import { getCourseState, type ActivityView } from "@/lib/courses";
import StatusBadge from "@/components/courses/StatusBadge";
import EnrollButton from "@/components/courses/EnrollButton";

export const dynamic = "force-dynamic";

function formatDate(value: Date | null | undefined) {
  if (!value) return "—";
  return value.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

const KIND_ICON: Record<ActivityView["kind"], string> = {
  lesson: "📖",
  "post-test": "📝",
  evaluation: "⭐",
  certificate: "🎓",
};

export default async function CourseDetailsPage({ params }: { params: Promise<{ course: string }> }) {
  const user = await getCurrentUser();
  if (!user) return null;
  const { course: courseSlug } = await params;
  const course = getCourse(courseSlug);
  if (!course) notFound();

  const state = await getCourseState(user, course);
  const lessons = flattenLessons(course);
  const minutes = courseMinutes(course);
  const enrolled = !!state.enrollment;

  return (
    <div>
      <Link href="/dashboard/courses" className="text-xs font-semibold text-emerald-700 hover:underline">
        ← My Learning
      </Link>

      {/* Cover */}
      <div className={`mt-2 overflow-hidden rounded-2xl bg-gradient-to-br text-white ${course.gradient}`}>
        <div className="px-6 py-7 sm:px-8">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-white/80">
            <span className="rounded-full bg-white/20 px-2.5 py-1">{course.code}</span>
            <span className="rounded-full bg-white/20 px-2.5 py-1">{course.level}</span>
            <span className="rounded-full bg-white/20 px-2.5 py-1">{course.creditHours} contact hours</span>
          </div>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
            <span className="mr-2">{course.icon}</span>
            {course.title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-white/90 sm:text-base">{course.tagline}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {!enrolled ? (
              <EnrollButton courseSlug={course.slug} label="Enroll in this course" className="!bg-white !text-slate-950 hover:!bg-slate-100" />
            ) : state.status === "completed" ? (
              <Link href={`/dashboard/courses/${course.slug}/certificate`} className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-slate-950 hover:bg-slate-100">
                View Certificate
              </Link>
            ) : state.nextActivity ? (
              <Link href={state.nextActivity.href} className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-slate-950 hover:bg-slate-100">
                {state.status === "not-started" ? "Start course →" : `Resume: ${state.nextActivity.title} →`}
              </Link>
            ) : null}
            <span className="text-xs text-white/80">
              {lessons.length} lessons · about {Math.round((minutes / 60) * 10) / 10} hours of reading · post-test · evaluation
            </span>
          </div>
        </div>
      </div>

      {/* Enrolment status strip */}
      {enrolled && state.enrollment && (
        <div className="mt-4 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Status</p>
            <div className="mt-1 flex items-center gap-2">
              <StatusBadge status={state.status} />
              {state.overdue && <StatusBadge status="overdue" />}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Enrolled</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{formatDate(state.enrollment.enrolledAt)}</p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">{state.status === "completed" ? "Completed" : "Due"}</p>
            <p className={`mt-1 text-sm font-semibold ${state.overdue ? "text-rose-700" : "text-slate-900"}`}>
              {state.status === "completed" ? formatDate(state.enrollment.completedAt) : formatDate(state.enrollment.dueAt)}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Progress</p>
            <div className="mt-1.5 flex items-center gap-2">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full rounded-full bg-emerald-500" style={{ width: `${state.progressPercent}%` }} />
              </div>
              <span className="text-xs font-bold text-slate-700">{state.progressPercent}%</span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Learning activities */}
        <section>
          <div className="mb-3 flex items-end justify-between">
            <div>
              <h2 className="text-lg font-extrabold tracking-tight text-slate-950">Learning Activities</h2>
              <p className="text-xs text-slate-500">Complete the activities in order. Each one unlocks the next.</p>
            </div>
            <span className="text-xs font-semibold text-slate-500">
              {state.completedCount}/{state.totalCount} complete
            </span>
          </div>

          {!enrolled && (
            <div className="mb-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              Enrol to unlock the learning activities. The first lesson is free; the rest of the course is part of Premium.
            </div>
          )}

          <ol className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {state.activities.map((a, i) => (
              <ActivityRow key={a.slug} activity={a} index={i} enrolled={enrolled} />
            ))}
          </ol>
        </section>

        {/* Overview */}
        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">About this course</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{course.description}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">Course outcomes</h2>
            <ol className="mt-2 space-y-2">
              {course.outcomes.map((o, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-800">{i + 1}</span>
                  <span>{o}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">Who it is for</h2>
            <ul className="mt-2 space-y-1.5">
              {course.audience.map((a, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-700">
                  <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">Completion requirements</h2>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
              <li>• Open and complete every lesson in order</li>
              <li>
                • Score {course.postTest.passMark}% or more on the {course.postTest.questionCount}-question post-test (up to {course.postTest.maxAttemptsPer24h} attempts per 24 hours)
              </li>
              <li>• Submit the course evaluation</li>
              <li>• Certificate: {course.creditHours} contact hours, added to your transcript</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ActivityRow({ activity: a, index, enrolled }: { activity: ActivityView; index: number; enrolled: boolean }) {
  const locked = a.status === "locked";
  const interactive = enrolled && !locked;
  let actionLabel: string | null = null;
  if (interactive) {
    if (a.kind === "lesson") actionLabel = a.status === "completed" ? "Review" : a.status === "in-progress" ? "Resume" : "Start";
    else if (a.kind === "post-test") actionLabel = a.status === "completed" ? "View results" : a.status === "in-progress" ? "Resume" : a.status === "failed" ? "Retake" : "Start";
    else if (a.kind === "evaluation") actionLabel = a.status === "completed" ? "View" : "Start";
    else actionLabel = a.status === "completed" ? "View Certificate" : null;
  }

  return (
    <li className={`flex items-center gap-3 px-4 py-3.5 sm:px-5 ${index > 0 ? "border-t border-slate-100" : ""} ${locked ? "bg-slate-50/60" : "bg-white"}`}>
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base ${
          a.status === "completed" ? "bg-emerald-100" : a.status === "failed" ? "bg-rose-100" : locked ? "bg-slate-100 grayscale" : "bg-slate-100"
        }`}
        aria-hidden
      >
        {a.status === "completed" ? "✓" : locked ? "🔒" : KIND_ICON[a.kind]}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className={`truncate text-sm font-bold ${locked ? "text-slate-500" : "text-slate-900"}`}>{a.title}</p>
          <StatusBadge status={a.status} />
          {a.premiumLocked && a.kind !== "certificate" && (
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-800">Premium</span>
          )}
          {a.kind === "lesson" && a.lesson?.index === 1 && (
            <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[11px] font-bold text-sky-800">Free</span>
          )}
        </div>
        <p className="truncate text-xs text-slate-500">
          {a.subtitle}
          {a.minutes > 0 ? ` · ${a.minutes} min` : ""}
          {a.completedAt ? ` · completed ${a.completedAt.toLocaleDateString("en-GB", { day: "numeric", month: "short" })}` : ""}
        </p>
      </div>
      <div className="shrink-0">
        {interactive && actionLabel ? (
          a.premiumLocked ? (
            <Link href="/dashboard/billing" className="rounded-lg bg-amber-500 px-3.5 py-2 text-xs font-bold text-white hover:bg-amber-600">
              Upgrade
            </Link>
          ) : (
            <Link
              href={a.href}
              className={`rounded-lg px-3.5 py-2 text-xs font-bold ${
                a.status === "completed" ? "border border-slate-200 text-slate-700 hover:bg-slate-50" : "bg-emerald-600 text-white hover:bg-emerald-700"
              }`}
            >
              {actionLabel}
            </Link>
          )
        ) : (
          <span className="text-[11px] font-semibold text-slate-400">{enrolled ? "Locked" : ""}</span>
        )}
      </div>
    </li>
  );
}
