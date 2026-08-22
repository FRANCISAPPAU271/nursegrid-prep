"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { CatListItem } from "@/lib/types";
import Empty from "@/components/ui/Empty";
import { useToast } from "@/components/ui/Toast";

function fmt(d: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(d));
}

const STATUS_STYLE: Record<string, string> = {
  in_progress: "bg-slate-100 text-slate-600",
  passed: "bg-emerald-100 text-emerald-700",
  failed: "bg-rose-100 text-rose-700",
  max_length: "bg-amber-100 text-amber-700",
};

const STATUS_LABEL: Record<string, string> = {
  in_progress: "In progress",
  passed: "Likely pass",
  failed: "Needs more review",
  max_length: "Max length reached",
};

export default function CatDashboard({ isPremium, sessions }: { isPremium: boolean; sessions: CatListItem[] }) {
  const router = useRouter();
  const toast = useToast();
  const [starting, setStarting] = useState(false);

  const inProgress = sessions.find((s) => s.status === "in_progress");

  async function startSession() {
    setStarting(true);
    try {
      const res = await fetch("/api/cat", { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Unable to start CAT session");
      router.push(`/dashboard/cat/${data.sessionId}`);
    } catch (err) {
      toast.push(err instanceof Error ? err.message : "Unable to start CAT session", "error");
    } finally {
      setStarting(false);
    }
  }

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">How it works</span>
        <h2 className="mt-3 text-xl font-extrabold text-slate-950">Practice under adaptive conditions</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          <li>🎯 Questions start at medium difficulty and adjust up or down based on whether you answer correctly.</li>
          <li>📏 The test runs a minimum of 15 questions and a maximum of 50.</li>
          <li>🏁 It ends early once your performance clearly trends above or below the passing standard, or at the maximum length.</li>
          <li>📖 You'll get a full rationale review of every question once the session ends.</li>
        </ul>
        <p className="mt-4 text-xs text-slate-500">
          This is a simplified practice simulation built to help you get comfortable with adaptive-difficulty testing — it does not reproduce the
          NCSBN&apos;s official NCLEX algorithm or guarantee real exam results.
        </p>
        {!isPremium && (
          <p className="mt-3 text-xs font-semibold text-amber-700">
            Free accounts can try {10} adaptive questions per session.{" "}
            <Link href="/dashboard/billing" className="underline">
              Upgrade
            </Link>{" "}
            for the full 15–50 question adaptive experience.
          </p>
        )}
        <button
          onClick={startSession}
          disabled={starting}
          className="mt-6 rounded-xl bg-emerald-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700 disabled:opacity-70"
        >
          {starting ? "Starting…" : inProgress ? "Resume adaptive test →" : "Start adaptive test →"}
        </button>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="mb-4 text-base font-bold text-slate-950">Past sessions</h2>
        {sessions.length === 0 ? (
          <Empty icon="📊" title="No CAT sessions yet" description="Start your first adaptive practice test above." />
        ) : (
          <ul className="divide-y divide-slate-100">
            {sessions.map((s) => (
              <li key={s.id} className="flex items-center justify-between gap-4 py-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${STATUS_STYLE[s.status]}`}>{STATUS_LABEL[s.status]}</span>
                    <span className="text-xs text-slate-400">{fmt(s.startedAt)}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">
                    {s.correctCount}/{s.questionsAnswered} correct · {s.questionsAnswered} of {s.minQuestions}–{s.maxQuestions} questions
                  </p>
                </div>
                <Link
                  href={`/dashboard/cat/${s.id}`}
                  className="shrink-0 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  {s.status === "in_progress" ? "Resume" : "Review"}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
