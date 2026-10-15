"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type CourseStateResponse = {
  course: { slug: string; title: string; passMark: number; maxAttemptsPer24h: number };
  status: string;
  certificateId: string | null;
  postTest: { passed: boolean; bestScorePercent: number | null; attemptsRemaining: number; nextAttemptAt: string | null };
  nextActivity: { slug: string; title: string; href: string } | null;
};

/**
 * Shown at the top of a completed post-test review instead of the generic
 * score card: a clear pass/fail verdict against the course pass mark and the
 * learning-centre style next steps (return to To-Do, certificate, transcript,
 * or review-then-retake).
 */
export default function PostTestResultBanner({
  courseSlug,
  correctCount,
  totalQuestions,
}: {
  courseSlug: string;
  correctCount: number;
  totalQuestions: number;
}) {
  const [state, setState] = useState<CourseStateResponse | null>(null);
  const pct = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  useEffect(() => {
    fetch(`/api/courses/${courseSlug}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => setState(data))
      .catch(() => setState(null));
  }, [courseSlug]);

  const passMark = state?.course.passMark ?? 80;
  const passed = pct >= passMark;
  const courseHref = `/dashboard/courses/${courseSlug}`;
  const title = state?.course.title ?? "this course";

  if (passed) {
    return (
      <div className="mb-6 rounded-2xl border border-emerald-300 bg-emerald-50 p-6 text-center">
        <p className="text-3xl">🎉</p>
        <h2 className="mt-2 text-2xl font-extrabold text-emerald-900">
          Passed — {correctCount}/{totalQuestions} ({pct}%)
        </h2>
        <p className="mt-1 text-sm text-emerald-800">
          Congratulations! You met the {passMark}% pass mark for {title}.
          {state?.certificateId ? " Your certificate is ready." : " Complete the short course evaluation to receive your certificate."}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {state?.certificateId ? (
            <Link href={`${courseHref}/certificate`} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-700">View Certificate</Link>
          ) : (
            <Link href={`${courseHref}/evaluation`} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-700">Continue to Course Evaluation →</Link>
          )}
          <Link href="/dashboard/courses" className="rounded-lg border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-100">Return to To-Do List</Link>
          <Link href="/dashboard/courses?tab=completed" className="rounded-lg border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-100">View Transcript</Link>
        </div>
        <p className="mt-3 text-xs text-emerald-800">Review every question and rationale below.</p>
      </div>
    );
  }

  const remaining = state?.postTest.attemptsRemaining;
  return (
    <div className="mb-6 rounded-2xl border border-rose-300 bg-rose-50 p-6 text-center">
      <p className="text-3xl">📚</p>
      <h2 className="mt-2 text-2xl font-extrabold text-rose-900">
        Not passed — {correctCount}/{totalQuestions} ({pct}%)
      </h2>
      <p className="mt-1 text-sm text-rose-800">
        The pass mark for {title} is {passMark}%. Go through the rationales below, review the learning activities, then retake the test.
        {typeof remaining === "number" && (remaining > 0 ? ` You have ${remaining} attempt${remaining === 1 ? "" : "s"} left in the next 24 hours.` : " You have used today’s attempts — the test reopens 24 hours after your first attempt.")}
      </p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <Link href={courseHref} className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white hover:bg-slate-800">Review Course Activities</Link>
        <Link href={`${courseHref}/post-test`} className="rounded-lg border border-rose-600 px-4 py-2 text-sm font-semibold text-rose-800 hover:bg-rose-100">
          {typeof remaining === "number" && remaining === 0 ? "Post-test details" : "Retake Post-Test"}
        </Link>
        <Link href="/dashboard/courses" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-white">Return to To-Do List</Link>
      </div>
    </div>
  );
}
