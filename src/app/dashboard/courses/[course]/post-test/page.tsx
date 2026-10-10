import Link from "next/link";
import { notFound } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { getCourse } from "@/content/courses";
import { findActivity, getCourseState, POST_TEST_ACTIVITY } from "@/lib/courses";
import PostTestLauncher from "@/components/courses/PostTestLauncher";
import StatusBadge from "@/components/courses/StatusBadge";

export const dynamic = "force-dynamic";

function formatDateTime(value: Date) {
  return value.toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

export default async function PostTestPage({ params }: { params: Promise<{ course: string }> }) {
  const user = await getCurrentUser();
  if (!user) return null;
  const { course: courseSlug } = await params;
  const course = getCourse(courseSlug);
  if (!course) notFound();

  const state = await getCourseState(user, course);
  const activity = findActivity(state, POST_TEST_ACTIVITY);
  if (!activity) notFound();
  const pt = state.postTest;
  const position = state.activities.findIndex((a) => a.slug === POST_TEST_ACTIVITY) + 1;
  const evaluationHref = `/dashboard/courses/${course.slug}/evaluation`;

  const canStart = !!state.enrollment && activity.status !== "locked" && !activity.premiumLocked && !pt.passed && (pt.inProgressId !== null || pt.attemptsRemaining > 0);

  return (
    <div>
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-x-2 text-xs font-semibold text-emerald-700">
          <Link href="/dashboard/courses" className="hover:underline">My Learning</Link>
          <span className="text-slate-300">/</span>
          <Link href={`/dashboard/courses/${course.slug}`} className="hover:underline">{course.title}</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-500">Activity {position} of {state.activities.length}</span>
        </div>
        <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950">📝 {course.postTest.title}</h1>
        <div className="mt-2 flex items-center gap-2">
          <StatusBadge status={activity.status} />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {/* Pass banner */}
          {pt.passed && (
            <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-6">
              <p className="text-3xl">🎉</p>
              <h2 className="mt-2 text-xl font-extrabold text-emerald-900">Congratulations — you passed the post-test.</h2>
              <p className="mt-1 text-sm text-emerald-800">
                Best score {pt.bestScorePercent}% (pass mark {course.postTest.passMark}%). Complete the course evaluation to receive your certificate.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {state.enrollment?.certificateId ? (
                  <Link href={`/dashboard/courses/${course.slug}/certificate`} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-700">View Certificate</Link>
                ) : (
                  <Link href={evaluationHref} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-700">Continue to Course Evaluation →</Link>
                )}
                <Link href="/dashboard/courses" className="rounded-lg border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-100">Return to To-Do List</Link>
                <Link href="/dashboard/courses?tab=completed" className="rounded-lg border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-100">View Transcript</Link>
              </div>
            </div>
          )}

          {/* Launch card */}
          {!pt.passed && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-extrabold text-slate-950">Before you start</h2>
              <p className="mt-1 text-sm text-slate-600">{course.postTest.description}</p>
              <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Stat label="Questions" value={String(course.postTest.questionCount)} />
                <Stat label="Passing score" value={`${course.postTest.passMark}%`} />
                <Stat label="Attempts left today" value={`${pt.attemptsRemaining} of ${course.postTest.maxAttemptsPer24h}`} />
                <Stat label="Best score" value={pt.bestScorePercent !== null ? `${pt.bestScorePercent}%` : "—"} />
              </dl>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-700">
                <li>• Questions are drawn at random from the cardiovascular pool, so every attempt is different.</li>
                <li>• You see your score, the correct answers and the rationales only after you submit.</li>
                <li>• If you do not pass, review the learning activities before you retake the test.</li>
                <li>• Closing the browser does not lose your attempt — you can resume it from this page.</li>
              </ul>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                {!state.enrollment ? (
                  <Link href={`/dashboard/courses/${course.slug}`} className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700">Enrol first</Link>
                ) : activity.premiumLocked ? (
                  <Link href="/dashboard/billing" className="rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-amber-600">Upgrade to Premium to take the post-test</Link>
                ) : activity.status === "locked" ? (
                  <Link href={state.nextActivity?.href ?? `/dashboard/courses/${course.slug}`} className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-slate-800">
                    🔒 Finish the learning activities first →
                  </Link>
                ) : (
                  <PostTestLauncher courseSlug={course.slug} resume={pt.inProgressId !== null} disabled={!canStart} />
                )}
                {pt.attemptsRemaining === 0 && !pt.inProgressId && pt.nextAttemptAt && (
                  <p className="text-sm font-semibold text-rose-700">
                    All attempts used for today. Next attempt available {formatDateTime(pt.nextAttemptAt)}.
                  </p>
                )}
              </div>
              {activity.status === "failed" && (
                <p className="mt-3 text-xs text-slate-500">
                  Tip: use <Link href={`/dashboard/courses/${course.slug}`} className="font-semibold text-emerald-700 hover:underline">Review</Link> on any completed lesson, then come back.
                </p>
              )}
            </div>
          )}

          {/* Attempt history */}
          <div className="rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-100 px-5 py-3">
              <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">Attempt history</h2>
            </div>
            {pt.attempts.length === 0 && !pt.inProgressId ? (
              <p className="px-5 py-6 text-sm text-slate-500">No attempts yet.</p>
            ) : (
              <table className="w-full text-left text-sm">
                <thead className="text-[11px] font-bold uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-5 py-2">Attempt</th>
                    <th className="px-5 py-2">Date</th>
                    <th className="px-5 py-2">Score</th>
                    <th className="px-5 py-2">Result</th>
                    <th className="px-5 py-2 text-right">Review</th>
                  </tr>
                </thead>
                <tbody>
                  {pt.inProgressId && (
                    <tr className="border-t border-slate-100 bg-amber-50/40">
                      <td className="px-5 py-2.5 font-semibold text-slate-900">{pt.attempts.length + 1}</td>
                      <td className="px-5 py-2.5 text-slate-600">—</td>
                      <td className="px-5 py-2.5 text-slate-600">—</td>
                      <td className="px-5 py-2.5"><StatusBadge status="in-progress" /></td>
                      <td className="px-5 py-2.5 text-right">
                        <Link href={`/dashboard/exams/${pt.inProgressId}?course=${course.slug}`} className="text-xs font-bold text-emerald-700 hover:underline">Resume</Link>
                      </td>
                    </tr>
                  )}
                  {pt.attempts.map((a, i) => (
                    <tr key={a.id} className="border-t border-slate-100">
                      <td className="px-5 py-2.5 font-semibold text-slate-900">{pt.attempts.length - i}</td>
                      <td className="px-5 py-2.5 text-slate-600">{formatDateTime(a.completedAt)}</td>
                      <td className="px-5 py-2.5 font-semibold text-slate-900">{a.correctCount}/{a.totalQuestions} ({a.scorePercent}%)</td>
                      <td className="px-5 py-2.5"><StatusBadge status={a.passed ? "completed" : "failed"} /></td>
                      <td className="px-5 py-2.5 text-right">
                        <Link href={`/dashboard/exams/${a.id}?course=${course.slug}`} className="text-xs font-bold text-emerald-700 hover:underline">View</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">What the test covers</h2>
            <ul className="mt-2 space-y-1.5">
              {course.modules.map((m) => (
                <li key={m.slug} className="flex gap-2 text-sm text-slate-700">
                  <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  {m.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-sm font-extrabold uppercase tracking-wide text-slate-500">After the test</h2>
            <p className="mt-2 text-sm text-slate-700">
              Pass → complete the one-minute course evaluation → your certificate is issued and the course moves to your Completed transcript.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-50 px-3 py-2.5">
      <dt className="text-[11px] font-bold uppercase tracking-wide text-slate-500">{label}</dt>
      <dd className="mt-0.5 text-base font-extrabold text-slate-950">{value}</dd>
    </div>
  );
}
