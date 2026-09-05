"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { AttemptResult, QuestionPreview } from "@/lib/types";
import Empty from "@/components/ui/Empty";
import { SkeletonList } from "@/components/ui/Skeleton";
import { useToast } from "@/components/ui/Toast";
import Watermark from "@/components/ui/Watermark";

const DIFFICULTY_STYLE: Record<string, string> = {
  easy: "bg-emerald-100 text-emerald-700",
  medium: "bg-amber-100 text-amber-700",
  hard: "bg-rose-100 text-rose-700",
};

export default function QuestionQuiz({
  title,
  subtitle,
  queryString,
  isPremiumUser,
}: {
  title: string;
  subtitle: string;
  queryString: string;
  isPremiumUser: boolean;
}) {
  const [items, setItems] = useState<QuestionPreview[]>([]);
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [locked, setLocked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [multiSelected, setMultiSelected] = useState<string[]>([]);
  const [result, setResult] = useState<AttemptResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [bookmarkBusy, setBookmarkBusy] = useState(false);
  const toast = useToast();
  const limit = 20;

  const loadBatch = useCallback(
    async (nextOffset: number, replace: boolean) => {
      const sep = queryString ? "&" : "";
      const res = await fetch(`/api/questions?${queryString}${sep}limit=${limit}&offset=${nextOffset}`);
      const data = await res.json();
      setTotal(data.total ?? 0);
      setLocked(Boolean(data.locked));
      setItems((prev) => (replace ? data.questions : [...prev, ...data.questions]));
      return data.questions.length as number;
    },
    [queryString],
  );

  useEffect(() => {
    setLoading(true);
    setIndex(0);
    setOffset(0);
    setSelected(null);
    setMultiSelected([]);
    setResult(null);
    setScore({ correct: 0, total: 0 });
    loadBatch(0, true).finally(() => setLoading(false));
  }, [loadBatch]);

  const current = items[index];
  const isSataQuestion = Boolean(current?.isSata);

  function toggleMultiChoice(choiceId: string) {
    if (result) return;
    setMultiSelected((prev) => (prev.includes(choiceId) ? prev.filter((c) => c !== choiceId) : [...prev, choiceId]));
  }

  async function submitSata() {
    if (!current || submitting || multiSelected.length === 0) return;
    await submitAnswer([...multiSelected].sort().join(","));
  }

  async function submitAnswer(choiceId: string) {
    if (!current || submitting) return;
    setSelected(choiceId);
    setSubmitting(true);
    try {
      const res = await fetch(`/api/questions/${current.id}/attempt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ selectedChoiceId: choiceId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Unable to submit answer");
      setResult(data);
      setScore((s) => ({ correct: s.correct + (data.isCorrect ? 1 : 0), total: s.total + 1 }));
    } catch (err) {
      toast.push(err instanceof Error ? err.message : "Unable to submit answer", "error");
      setSelected(null);
    } finally {
      setSubmitting(false);
    }
  }

  async function toggleBookmark() {
    if (!current || bookmarkBusy) return;
    setBookmarkBusy(true);
    const nextState = !current.isBookmarked;
    setItems((list) => list.map((q, i) => (i === index ? { ...q, isBookmarked: nextState } : q)));
    try {
      const res = await fetch(`/api/questions/${current.id}/bookmark`, { method: nextState ? "POST" : "DELETE" });
      if (!res.ok) throw new Error("Failed to update bookmark");
    } catch {
      setItems((list) => list.map((q, i) => (i === index ? { ...q, isBookmarked: !nextState } : q)));
      toast.push("Failed to update bookmark", "error");
    } finally {
      setBookmarkBusy(false);
    }
  }

  async function goNext() {
    setSelected(null);
    setMultiSelected([]);
    setResult(null);
    if (index + 1 < items.length) {
      setIndex((i) => i + 1);
      return;
    }
    if (offset + limit < total) {
      setLoadingMore(true);
      const nextOffset = offset + limit;
      const count = await loadBatch(nextOffset, false);
      setOffset(nextOffset);
      if (count > 0) setIndex((i) => i + 1);
      setLoadingMore(false);
    } else {
      setIndex((i) => i + 1);
    }
  }

  if (loading) {
    return (
      <div>
        <QuizHeader title={title} subtitle={subtitle} score={score} />
        <SkeletonList count={3} />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div>
        <QuizHeader title={title} subtitle={subtitle} score={score} />
        <Empty
          icon="🔖"
          title="Nothing here yet"
          description="Try bookmarking a few questions while you practice, or pick a different category."
          action={
            <Link href="/dashboard/questions" className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
              Back to question bank
            </Link>
          }
        />
      </div>
    );
  }

  const finished = index >= items.length;

  return (
    <div>
      <QuizHeader title={title} subtitle={subtitle} score={score} />

      {!finished && current && (
        <div className="animate-fade-in relative secure-content rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <Watermark />
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${DIFFICULTY_STYLE[current.difficulty]}`}>
                {current.difficulty}
              </span>
              {!current.isFree && (
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-700">Premium</span>
              )}
              {isSataQuestion && (
                <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[11px] font-bold text-indigo-700">Select all that apply</span>
              )}
              <span className="text-xs font-medium text-slate-400">
                Question {offset + index + 1} of {total.toLocaleString()}
              </span>
            </div>
            <button
              onClick={toggleBookmark}
              title={current.isBookmarked ? "Remove bookmark" : "Bookmark"}
              className={`text-lg ${current.isBookmarked ? "text-amber-500" : "text-slate-300 hover:text-amber-400"}`}
            >
              {current.isBookmarked ? "🔖" : "📑"}
            </button>
          </div>

          <p className="text-base leading-relaxed text-slate-900">{current.stem}</p>

          <div className="mt-5 space-y-2.5">
            {current.choices.map((choice) => {
              const correctIds = result ? result.correctChoiceId.split(",") : [];
              if (isSataQuestion) {
                const isTicked = multiSelected.includes(choice.id);
                const isCorrectChoice = result && correctIds.includes(choice.id);
                const isWrongTicked = result && isTicked && !correctIds.includes(choice.id);
                const isMissedCorrect = result && !isTicked && correctIds.includes(choice.id);
                return (
                  <button
                    key={choice.id}
                    disabled={Boolean(result)}
                    onClick={() => toggleMultiChoice(choice.id)}
                    className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition disabled:cursor-default ${
                      isCorrectChoice
                        ? "border-emerald-400 bg-emerald-50 text-emerald-900"
                        : isWrongTicked
                          ? "border-rose-400 bg-rose-50 text-rose-900"
                          : isTicked
                            ? "border-indigo-400 bg-indigo-50 text-indigo-900"
                            : "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40"
                    }`}
                  >
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border text-[11px] font-bold ${
                        isCorrectChoice
                          ? "border-emerald-500 bg-emerald-500 text-white"
                          : isWrongTicked
                            ? "border-rose-500 bg-rose-500 text-white"
                            : isTicked
                              ? "border-indigo-500 bg-indigo-500 text-white"
                              : "border-slate-300 text-slate-500"
                      }`}
                    >
                      {result ? (isCorrectChoice ? "✓" : isWrongTicked ? "✕" : isMissedCorrect ? "!" : "") : isTicked ? "✓" : ""}
                    </span>
                    <span>{choice.text}</span>
                  </button>
                );
              }
              const isSelected = selected === choice.id;
              const isCorrectChoice = result && correctIds.includes(choice.id);
              const isWrongSelected = result && isSelected && !result.isCorrect;
              return (
                <button
                  key={choice.id}
                  disabled={Boolean(selected)}
                  onClick={() => submitAnswer(choice.id)}
                  className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition disabled:cursor-default ${
                    isCorrectChoice
                      ? "border-emerald-400 bg-emerald-50 text-emerald-900"
                      : isWrongSelected
                        ? "border-rose-400 bg-rose-50 text-rose-900"
                        : isSelected
                          ? "border-slate-400 bg-slate-50"
                          : "border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40"
                  }`}
                >
                  <span
                    className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border text-[11px] font-bold ${
                      isCorrectChoice
                        ? "border-emerald-500 bg-emerald-500 text-white"
                        : isWrongSelected
                          ? "border-rose-500 bg-rose-500 text-white"
                          : "border-slate-300 text-slate-500"
                    }`}
                  >
                    {isCorrectChoice ? "✓" : isWrongSelected ? "✕" : ""}
                  </span>
                  <span>{choice.text}</span>
                </button>
              );
            })}
          </div>

          {isSataQuestion && !result && (
            <button
              onClick={submitSata}
              disabled={multiSelected.length === 0 || submitting}
              className="mt-4 w-full rounded-xl bg-indigo-600 py-3 text-sm font-bold text-white hover:bg-indigo-700 disabled:opacity-50"
            >
              {submitting
                ? "Checking…"
                : multiSelected.length === 0
                  ? "Tick every answer that applies"
                  : `Submit ${multiSelected.length} selected`}
            </button>
          )}

          {result && (
            <div className="mt-5 space-y-3 rounded-xl bg-slate-50 p-4">
              <p className={`text-sm font-bold ${result.isCorrect ? "text-emerald-700" : "text-rose-700"}`}>
                {result.isCorrect ? "Correct!" : isSataQuestion ? "Not quite — SATA is all-or-nothing. The ✓ marks show the full correct set." : "Not quite."}
              </p>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Rationale</p>
                <p className="mt-1 text-sm text-slate-700">{result.rationale}</p>
              </div>
              {result.mediaUrl && (
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={result.mediaUrl}
                    alt={result.mediaCaption ?? "Visual explanation"}
                    className="w-full object-contain"
                    loading="lazy"
                  />
                  {result.mediaCaption && (
                    <p className="border-t border-slate-100 px-3 py-2 text-xs font-medium text-slate-500">
                      📊 {result.mediaCaption}
                    </p>
                  )}
                </div>
              )}
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">🎯 Test-taking strategy</p>
                <p className="mt-1 text-sm text-slate-700">{result.strategy}</p>
              </div>
              <div className="flex justify-end pt-1">
                <button
                  onClick={goNext}
                  disabled={loadingMore}
                  className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 disabled:opacity-70"
                >
                  {loadingMore ? "Loading…" : "Next question →"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {finished && (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <p className="text-3xl">🎉</p>
          <h3 className="mt-3 text-lg font-bold text-slate-950">
            You scored {score.correct}/{score.total}
          </h3>
          <p className="mt-1 text-sm text-slate-600">
            {locked
              ? "That's the end of your free preview for this set."
              : "You've completed every question currently available in this set."}
          </p>
          {locked && !isPremiumUser ? (
            <Link
              href="/dashboard/billing"
              className="mt-5 inline-block rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-amber-600"
            >
              Get full access — from $5
            </Link>
          ) : (
            <Link
              href="/dashboard/questions"
              className="mt-5 inline-block rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Back to question bank
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

function QuizHeader({ title, subtitle, score }: { title: string; subtitle: string; score: { correct: number; total: number } }) {
  return (
    <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <Link href="/dashboard/questions" className="text-xs font-semibold text-emerald-700 hover:underline">
          ← Question bank
        </Link>
        <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">{title}</h1>
        <p className="text-slate-600">{subtitle}</p>
      </div>
      {score.total > 0 && (
        <div className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
          Session score: {score.correct}/{score.total}
        </div>
      )}
    </div>
  );
}
