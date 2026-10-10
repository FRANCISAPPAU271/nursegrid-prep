import Link from "next/link";
import { notFound } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { getCourse } from "@/content/courses";
import { findActivity, getCourseState, EVALUATION_ACTIVITY } from "@/lib/courses";
import EvaluationForm from "@/components/courses/EvaluationForm";
import StatusBadge from "@/components/courses/StatusBadge";

export const dynamic = "force-dynamic";

export default async function EvaluationPage({ params }: { params: Promise<{ course: string }> }) {
  const user = await getCurrentUser();
  if (!user) return null;
  const { course: courseSlug } = await params;
  const course = getCourse(courseSlug);
  if (!course) notFound();

  const state = await getCourseState(user, course);
  const activity = findActivity(state, EVALUATION_ACTIVITY);
  if (!activity) notFound();
  const position = state.activities.findIndex((a) => a.slug === EVALUATION_ACTIVITY) + 1;
  const submitted = state.enrollment?.evaluation ?? null;

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
        <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-950">⭐ {course.evaluation.title}</h1>
        <p className="mt-1 text-sm text-slate-600">{course.evaluation.description}</p>
        <div className="mt-2"><StatusBadge status={activity.status} /></div>
      </div>

      {submitted ? (
        <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-6">
          <h2 className="text-lg font-extrabold text-emerald-900">Thank you — your evaluation was submitted.</h2>
          <p className="mt-1 text-sm text-emerald-800">
            Submitted {new Date(submitted.submittedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}.
          </p>
          <dl className="mt-4 space-y-1.5 text-sm text-emerald-950">
            {course.evaluation.items.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-4">
                <dt>{item.prompt}</dt>
                <dd className="font-bold">{submitted.ratings[item.id] ?? "—"}/5</dd>
              </div>
            ))}
          </dl>
          {submitted.comment && <p className="mt-3 rounded-xl bg-white/70 p-3 text-sm italic text-slate-700">“{submitted.comment}”</p>}
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href={`/dashboard/courses/${course.slug}/certificate`} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-700">View Certificate</Link>
            <Link href="/dashboard/courses?tab=completed" className="rounded-lg border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-100">View Transcript</Link>
          </div>
        </div>
      ) : activity.status === "locked" ? (
        <div className="flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
          <span className="text-4xl">🔒</span>
          <h2 className="mt-3 text-lg font-extrabold text-slate-950">Pass the post-test first</h2>
          <p className="mt-1 max-w-md text-sm text-slate-600">The evaluation opens once you have passed the post-test. It is the last step before your certificate.</p>
          <Link href={state.nextActivity?.href ?? `/dashboard/courses/${course.slug}`} className="mt-5 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700">
            Go to: {state.nextActivity?.title ?? "Course details"} →
          </Link>
        </div>
      ) : (
        <EvaluationForm courseSlug={course.slug} items={course.evaluation.items} commentPrompt={course.evaluation.commentPrompt} />
      )}
    </div>
  );
}
