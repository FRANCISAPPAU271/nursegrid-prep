"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/Toast";

type PastMock = {
  id: string;
  totalQuestions: number;
  correctCount: number;
  status: "in_progress" | "completed";
  startedAt: string;
  completedAt: string | null;
};

export function mockVerdict(pct: number): { label: string; tone: string; message: string } {
  if (pct >= 75)
    return { label: "PASS — Strong", tone: "text-emerald-700 bg-emerald-100", message: "Comfortably above the pass region. Keep sharp with mixed practice." };
  if (pct >= 60)
    return { label: "PASS — Borderline", tone: "text-amber-700 bg-amber-100", message: "In the pass region, but without much margin. Target your weakest categories this week." };
  if (pct >= 50)
    return { label: "BORDERLINE", tone: "text-orange-700 bg-orange-100", message: "On the edge. Focus on rationales and re-sit a mock within two weeks." };
  return { label: "NOT YET", tone: "text-rose-700 bg-rose-100", message: "Below the pass region today — which is exactly what mocks are for. Follow your study plan and re-test." };
}

export default function MockExamLauncher({ isPremium, pastMocks }: { isPremium: boolean; pastMocks: PastMock[] }) {
  const [starting, setStarting] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const start = async () => {
    setStarting(true);
    try {
      const res = await fetch("/api/exams/mock", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Could not start the mock exam");
      router.push(`/dashboard/exams/${data.examId}?mock=1`);
    } catch (e) {
      toast.push(e instanceof Error ? e.message : "Could not start the mock exam", "error");
      setStarting(false);
    }
  };

  const completed = pastMocks.filter((m) => m.status === "completed");
  const inProgress = pastMocks.find((m) => m.status === "in_progress");
  const best = completed.length > 0 ? Math.max(...completed.map((m) => Math.round((m.correctCount / m.totalQuestions) * 100))) : null;

  return (
    <div className="space-y-6">
      {/* Launch card */}
      <div className="rounded-3xl border-2 border-emerald-600 bg-[#04120d] p-6 text-emerald-50 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-widest text-lime-400">Exam conditions</p>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight">150 questions · 150 minutes</h2>
            <ul className="mt-3 space-y-1 text-sm text-emerald-100/80">
              <li>✓ Balanced across all 12 exam categories, shuffled like the real paper</li>
              <li>✓ Countdown timer — it auto-submits when time runs out</li>
              <li>✓ No rationales until you finish (just like exam day)</li>
              <li>✓ Verdict, score report, and full review at the end</li>
            </ul>
          </div>
          <div className="shrink-0">
            {inProgress ? (
              <Link
                href={`/dashboard/exams/${inProgress.id}?mock=1`}
                className="block rounded-2xl bg-amber-400 px-6 py-3.5 text-center text-base font-extrabold text-slate-950 hover:bg-amber-300"
              >
                Resume mock in progress →
              </Link>
            ) : isPremium ? (
              <button
                onClick={start}
                disabled={starting}
                className="rounded-2xl bg-lime-400 px-6 py-3.5 text-base font-extrabold text-slate-950 hover:bg-lime-300 disabled:opacity-70"
              >
                {starting ? "Building your paper…" : "Start Mock Exam"}
              </button>
            ) : (
              <Link
                href="/dashboard/billing"
                className="block rounded-2xl bg-lime-400 px-6 py-3.5 text-center text-base font-extrabold text-slate-950 hover:bg-lime-300"
              >
                Unlock with any plan →
              </Link>
            )}
            {best !== null && (
              <p className="mt-2 text-center text-xs text-emerald-100/60">Personal best: {best}%</p>
            )}
          </div>
        </div>
      </div>

      {/* Past mocks */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="text-base font-bold text-slate-950">Your mock history</h2>
        {completed.length === 0 ? (
          <p className="py-6 text-center text-sm text-slate-500">
            No completed mocks yet. Your first one sets the baseline — most students improve 10-20 points between
            their first and third mock.
          </p>
        ) : (
          <ul className="mt-3 divide-y divide-slate-100">
            {completed.map((m) => {
              const pct = Math.round((m.correctCount / m.totalQuestions) * 100);
              const v = mockVerdict(pct);
              return (
                <li key={m.id} className="flex items-center justify-between gap-3 py-3">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900">
                      {new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(new Date(m.startedAt))}
                      <span className="ml-2 text-slate-500">· {m.correctCount}/{m.totalQuestions} ({pct}%)</span>
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-extrabold ${v.tone}`}>{v.label}</span>
                    <Link href={`/dashboard/exams/${m.id}`} className="text-sm font-bold text-emerald-700 hover:text-emerald-800">
                      Review →
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <p className="text-xs text-slate-400">
        The verdict bands are study guidance based on your mock performance. They are not an official prediction of
        your NMC licensing examination result.
      </p>
    </div>
  );
}
