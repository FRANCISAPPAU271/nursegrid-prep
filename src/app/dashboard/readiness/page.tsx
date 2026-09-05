import { getCurrentUser } from "@/lib/auth";
import { computeReadiness } from "@/lib/readiness";
import Link from "next/link";

export const dynamic = "force-dynamic";

const BAND_STYLE: Record<string, { ring: string; text: string; chip: string }> = {
  building: { ring: "stroke-rose-500", text: "text-rose-600", chip: "bg-rose-100 text-rose-700" },
  developing: { ring: "stroke-amber-500", text: "text-amber-600", chip: "bg-amber-100 text-amber-700" },
  approaching: { ring: "stroke-yellow-500", text: "text-yellow-600", chip: "bg-yellow-100 text-yellow-700" },
  on_track: { ring: "stroke-emerald-500", text: "text-emerald-600", chip: "bg-emerald-100 text-emerald-700" },
  exam_ready: { ring: "stroke-emerald-600", text: "text-emerald-700", chip: "bg-emerald-600 text-white" },
};

export default async function ReadinessPage() {
  const user = await getCurrentUser();
  if (!user) return null;

  const r = await computeReadiness(user.id);
  const style = BAND_STYLE[r.band];
  const circumference = 2 * Math.PI * 52;
  const dash = (r.score / 100) * circumference;

  const componentRows = [
    { label: "Recent accuracy", detail: r.components.recentAccuracy.value === null ? "Not enough data yet" : `${r.components.recentAccuracy.value}% over your last answers`, points: r.components.recentAccuracy.points, max: r.components.recentAccuracy.max },
    { label: "Category coverage", detail: `${r.components.coverage.practicedCategories} of ${r.components.coverage.totalCategories} categories practiced (20+ questions each)`, points: r.components.coverage.points, max: r.components.coverage.max },
    { label: "Practice volume", detail: `${r.components.volume.attempts.toLocaleString()} questions answered`, points: r.components.volume.points, max: r.components.volume.max },
    { label: "Adaptive ability (CAT)", detail: r.components.adaptive.bestTheta === null ? "No completed CAT session yet" : `Best ability estimate: ${r.components.adaptive.bestTheta.toFixed(2)}`, points: r.components.adaptive.points, max: r.components.adaptive.max },
    { label: "Exam stamina", detail: r.components.stamina.bestLongExamAccuracy === null ? "No 50+ question exam completed yet" : `Best long-exam score: ${r.components.stamina.bestLongExamAccuracy}%`, points: r.components.stamina.points, max: r.components.stamina.max },
  ];

  return (
    <div>
      <div className="mb-6 flex flex-col gap-1">
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">Readiness Score</h1>
        <p className="text-slate-600">
          An honest estimate of your exam readiness, computed from your own practice — and exactly how to raise it.
        </p>
      </div>

      {/* Score dial + band */}
      <div className="mb-6 grid gap-4 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6">
          <svg viewBox="0 0 120 120" className="h-40 w-40 -rotate-90">
            <circle cx="60" cy="60" r="52" fill="none" strokeWidth="10" className="stroke-slate-100" />
            <circle
              cx="60" cy="60" r="52" fill="none" strokeWidth="10" strokeLinecap="round"
              strokeDasharray={`${dash} ${circumference - dash}`}
              className={style.ring}
            />
          </svg>
          <p className={`-mt-24 text-4xl font-extrabold ${style.text}`}>{r.score}</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">out of 100</p>
          <span className={`mt-10 rounded-full px-4 py-1.5 text-sm font-extrabold ${style.chip}`}>{r.bandLabel}</span>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 lg:col-span-2">
          <h2 className="text-base font-bold text-slate-950">How your score is built</h2>
          <ul className="mt-3 space-y-3">
            {componentRows.map((c) => (
              <li key={c.label}>
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">{c.label}</p>
                  <p className="text-sm font-bold text-slate-600">{c.points}/{c.max}</p>
                </div>
                <p className="text-xs text-slate-500">{c.detail}</p>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-emerald-500" style={{ width: `${(c.points / c.max) * 100}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Advice */}
      <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
        <h2 className="text-base font-bold text-emerald-900">📋 Your next moves</h2>
        <ul className="mt-2 space-y-1.5">
          {r.advice.map((a, i) => (
            <li key={i} className="text-sm text-emerald-900">• {a}</li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/dashboard/study-plan" className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-700">
            Build my study plan →
          </Link>
          <Link href="/dashboard/exams" className="rounded-xl border border-emerald-300 bg-white px-4 py-2 text-sm font-bold text-emerald-700 hover:bg-emerald-100">
            Sit a mock exam
          </Link>
        </div>
      </div>

      {/* Weakest categories */}
      {r.weakest.length > 0 && (
        <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5">
          <h2 className="text-base font-bold text-slate-950">🎯 Focus here first</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {r.weakest.map((c) => (
              <Link key={c.categoryId} href="/dashboard/questions" className="rounded-xl border border-slate-200 p-4 transition hover:border-emerald-300 hover:shadow-md">
                <p className="text-sm font-bold text-slate-900">{c.name}</p>
                <p className={`mt-1 text-2xl font-extrabold ${c.accuracy !== null && c.accuracy < 60 ? "text-rose-600" : "text-amber-600"}`}>
                  {c.accuracy}%
                </p>
                <p className="text-xs text-slate-500">{c.attempted} answered{c.recentAccuracy !== null ? ` · ${c.recentAccuracy}% recently` : ""}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <p className="text-xs text-slate-400">
        The Readiness Score is a study guide computed from your practice on NurseGrid Prep. It is not a prediction or
        guarantee of your result in the NMC licensing examination.
      </p>
    </div>
  );
}
