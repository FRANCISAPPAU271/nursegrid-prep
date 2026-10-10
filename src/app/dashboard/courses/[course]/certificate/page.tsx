import Link from "next/link";
import { notFound } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";
import { getCourse } from "@/content/courses";
import { getCourseState } from "@/lib/courses";
import AllowPrint from "@/components/courses/AllowPrint";
import PrintButton from "@/components/courses/PrintButton";

export const dynamic = "force-dynamic";

export default async function CertificatePage({ params }: { params: Promise<{ course: string }> }) {
  const user = await getCurrentUser();
  if (!user) return null;
  const { course: courseSlug } = await params;
  const course = getCourse(courseSlug);
  if (!course) notFound();

  const state = await getCourseState(user, course);
  const enrollment = state.enrollment;

  if (!enrollment?.certificateId || !enrollment.completedAt) {
    return (
      <div>
        <Link href={`/dashboard/courses/${course.slug}`} className="text-xs font-semibold text-emerald-700 hover:underline">← {course.title}</Link>
        <div className="mt-4 flex flex-col items-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
          <span className="text-4xl">🎓</span>
          <h1 className="mt-3 text-xl font-extrabold text-slate-950">Your certificate is not ready yet</h1>
          <p className="mt-1 max-w-md text-sm text-slate-600">
            Complete every learning activity, pass the post-test with {course.postTest.passMark}% or more and submit the course evaluation. The certificate is issued automatically.
          </p>
          <Link href={state.nextActivity?.href ?? `/dashboard/courses/${course.slug}`} className="mt-5 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700">
            {state.nextActivity ? `Continue: ${state.nextActivity.title} →` : "Back to course"}
          </Link>
        </div>
      </div>
    );
  }

  const completed = enrollment.completedAt.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const score = state.postTest.bestScorePercent ?? 0;

  return (
    <div>
      <AllowPrint />
      <div className="print-hide mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link href="/dashboard/courses?tab=completed" className="text-xs font-semibold text-emerald-700 hover:underline">← Transcript</Link>
          <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">Certificate of Completion</h1>
          <p className="text-sm text-slate-600">Print it or save it as a PDF for your records. The certificate ID can be quoted to verify it.</p>
        </div>
        <div className="flex gap-2">
          <PrintButton />
          <Link href={`/dashboard/courses/${course.slug}`} className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Course details</Link>
        </div>
      </div>

      <div id="certificate" className="mx-auto max-w-3xl rounded-2xl border-[6px] border-double border-emerald-700 bg-white p-8 shadow-sm sm:p-12 print:max-w-none print:rounded-none print:shadow-none">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-emerald-700">NurseGrid Prep</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">Certificate of Completion</h2>
          <p className="mt-4 text-sm text-slate-600">This is to certify that</p>
          <p className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">{user.name}</p>
          <p className="mt-4 text-sm text-slate-600">has successfully completed all learning activities, passed the post-test and submitted the evaluation for</p>
          <p className="mt-2 text-xl font-extrabold text-emerald-800 sm:text-2xl">
            {course.icon} {course.title}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{course.code} · {course.level}</p>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-200 pt-6 text-center sm:grid-cols-4">
          <div>
            <dt className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Completed</dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">{completed}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Post-test score</dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">{score}% (pass mark {course.postTest.passMark}%)</dd>
          </div>
          <div>
            <dt className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Contact hours</dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">{course.creditHours}</dd>
          </div>
          <div>
            <dt className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Certificate ID</dt>
            <dd className="mt-1 font-mono text-xs font-semibold text-slate-900">{enrollment.certificateId}</dd>
          </div>
        </dl>

        <div className="mt-8 flex items-end justify-between gap-6 border-t border-slate-200 pt-6">
          <div className="text-xs text-slate-500">
            <p className="font-semibold text-slate-700">Course outcomes achieved</p>
            <ul className="mt-1 space-y-0.5">
              {course.outcomes.slice(0, 4).map((o, i) => (
                <li key={i}>• {o}</li>
              ))}
              {course.outcomes.length > 4 && <li>• …and {course.outcomes.length - 4} more</li>}
            </ul>
          </div>
          <div className="shrink-0 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-emerald-700 text-2xl">🫀</div>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-wide text-emerald-800">NurseGrid Prep</p>
            <p className="text-[10px] text-slate-500">nursegridprep.com</p>
          </div>
        </div>

        <p className="mt-6 text-center text-[10px] leading-relaxed text-slate-400">
          This certificate records completion of a NurseGrid Prep self-study course. It is not an award of the Nursing and Midwifery Council of Ghana and does not by itself confer licensure or CPD points; present it to your institution for recognition according to its own policy.
        </p>
      </div>
    </div>
  );
}
