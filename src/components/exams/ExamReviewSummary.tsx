import type { ExamReviewQuestion } from "@/lib/types";

export default function ExamReviewSummary({ review }: { review: ExamReviewQuestion[] }) {
  const groups = new Map<string, { total: number; correct: number }>();
  for (const q of review) {
    const current = groups.get(q.categoryName) ?? { total: 0, correct: 0 };
    current.total += 1;
    if (q.isCorrect) current.correct += 1;
    groups.set(q.categoryName, current);
  }
  const rows = [...groups.entries()].map(([name, value]) => ({ name, ...value, pct: Math.round((value.correct / value.total) * 100) })).sort((a, b) => a.pct - b.pct);
  const weakest = rows[0];

  return (
    <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <div><h2 className="text-base font-bold text-slate-950">Your exam review</h2><p className="mt-1 text-sm text-slate-600">Use the lowest-scoring topic as your next revision target.</p></div>
        {weakest && <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">Next focus: {weakest.name}</span>}
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map((row) => <div key={row.name} className="rounded-xl bg-slate-50 p-3"><div className="flex justify-between gap-2"><p className="truncate text-xs font-bold text-slate-800">{row.name}</p><span className={`text-xs font-extrabold ${row.pct >= 70 ? "text-emerald-600" : row.pct >= 50 ? "text-amber-600" : "text-rose-600"}`}>{row.pct}%</span></div><p className="mt-1 text-[11px] text-slate-500">{row.correct}/{row.total} correct</p><div className="mt-2 h-1.5 rounded-full bg-slate-200"><div className={`h-full rounded-full ${row.pct >= 70 ? "bg-emerald-500" : row.pct >= 50 ? "bg-amber-500" : "bg-rose-500"}`} style={{ width: `${row.pct}%` }} /></div></div>)}
      </div>
    </div>
  );
}
