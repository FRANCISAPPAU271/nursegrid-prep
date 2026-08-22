"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { ExamListItem } from "@/lib/types";
import Empty from "@/components/ui/Empty";
import { useToast } from "@/components/ui/Toast";

type Category = { id: string; slug: string; name: string; icon: string; totalQuestions: number };

const ICONS: Record<string, string> = {
  stethoscope: "🩺",
  pill: "💊",
  heart: "❤️",
  baby: "👶",
  brain: "🧠",
  shield: "🛡️",
  droplet: "💧",
  clipboard: "📋",
  users: "🧑‍🤝‍🧑",
  activity: "📈",
  flask: "🧪",
  sunrise: "🌅",
};

const PRESETS = [10, 25, 50, 75, 100];

function fmt(d: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(d));
}

export default function ExamBuilder({
  categories,
  isPremium,
  pastExams,
}: {
  categories: Category[];
  isPremium: boolean;
  pastExams: ExamListItem[];
}) {
  const router = useRouter();
  const toast = useToast();
  const maxAllowed = isPremium ? 100 : 20;
  const [questionCount, setQuestionCount] = useState(50);
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([]);
  const [creating, setCreating] = useState(false);

  const availableForSelection = useMemo(() => {
    if (selectedSlugs.length === 0) return categories.reduce((sum, c) => sum + c.totalQuestions, 0);
    return categories.filter((c) => selectedSlugs.includes(c.slug)).reduce((sum, c) => sum + c.totalQuestions, 0);
  }, [categories, selectedSlugs]);

  function toggleCategory(slug: string) {
    setSelectedSlugs((list) => (list.includes(slug) ? list.filter((s) => s !== slug) : [...list, slug]));
  }

  async function startExam() {
    setCreating(true);
    try {
      const res = await fetch("/api/exams", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionCount: Math.min(questionCount, maxAllowed),
          categorySlugs: selectedSlugs,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Unable to start exam");
      router.push(`/dashboard/exams/${data.examId}`);
    } catch (err) {
      toast.push(err instanceof Error ? err.message : "Unable to start exam", "error");
    } finally {
      setCreating(false);
    }
  }

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-base font-bold text-slate-950">1. How many questions?</h2>
        {!isPremium && (
          <p className="mt-1 text-xs font-medium text-amber-700">
            Free accounts can build exams of up to {maxAllowed} questions using free-preview questions.{" "}
            <Link href="/dashboard/billing" className="underline">
              Upgrade
            </Link>{" "}
            for up to 100 questions from the full bank.
          </p>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {PRESETS.map((n) => (
            <button
              key={n}
              onClick={() => setQuestionCount(n)}
              disabled={n > maxAllowed}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 ${
                questionCount === n ? "border-emerald-600 bg-emerald-600 text-white" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <input
            type="range"
            min={5}
            max={maxAllowed}
            step={5}
            value={Math.min(questionCount, maxAllowed)}
            onChange={(e) => setQuestionCount(Number(e.target.value))}
            className="w-full accent-emerald-600"
          />
          <span className="w-16 shrink-0 rounded-lg bg-slate-100 px-2 py-1 text-center text-sm font-bold text-slate-700">
            {Math.min(questionCount, maxAllowed)}
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-slate-950">2. Which categories?</h2>
          {selectedSlugs.length > 0 && (
            <button onClick={() => setSelectedSlugs([])} className="text-xs font-semibold text-emerald-700 hover:underline">
              Clear selection (use all)
            </button>
          )}
        </div>
        <p className="mt-1 text-xs text-slate-500">
          Leave everything unchecked to pull questions from a mix of all categories, or pick specific ones to focus your exam.
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const active = selectedSlugs.includes(c.slug);
            return (
              <button
                key={c.id}
                onClick={() => toggleCategory(c.slug)}
                className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm transition ${
                  active ? "border-emerald-500 bg-emerald-50" : "border-slate-200 bg-white hover:bg-slate-50"
                }`}
              >
                <span className="text-lg">{ICONS[c.icon] ?? "🩺"}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-semibold text-slate-800">{c.name}</span>
                  <span className="block text-xs text-slate-400">{c.totalQuestions.toLocaleString()} questions</span>
                </span>
                {active && <span className="text-emerald-600">✓</span>}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-slate-500">
          {selectedSlugs.length === 0 ? "All categories selected" : `${selectedSlugs.length} categor${selectedSlugs.length === 1 ? "y" : "ies"} selected`}{" "}
          · {availableForSelection.toLocaleString()} questions available in this pool
        </p>
      </div>

      <button
        onClick={startExam}
        disabled={creating}
        className="w-full rounded-xl bg-emerald-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700 disabled:opacity-70 sm:w-auto"
      >
        {creating ? "Building your exam…" : `Start ${Math.min(questionCount, maxAllowed)}-question exam →`}
      </button>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="mb-4 text-base font-bold text-slate-950">Past exams</h2>
        {pastExams.length === 0 ? (
          <Empty icon="📝" title="No custom exams yet" description="Build your first exam above to see it appear here." />
        ) : (
          <ul className="divide-y divide-slate-100">
            {pastExams.map((exam) => {
              const pct = exam.totalQuestions > 0 ? Math.round((exam.correctCount / exam.totalQuestions) * 100) : 0;
              return (
                <li key={exam.id} className="flex items-center justify-between gap-4 py-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900">{exam.title}</p>
                    <p className="text-xs text-slate-500">
                      {fmt(exam.startedAt)} ·{" "}
                      {exam.status === "completed" ? `${exam.correctCount}/${exam.totalQuestions} (${pct}%)` : "In progress"}
                    </p>
                  </div>
                  <Link
                    href={`/dashboard/exams/${exam.id}`}
                    className="shrink-0 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    {exam.status === "completed" ? "Review" : "Resume"}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
