"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CatHistoryEntry, CatQuestion, CatStatus } from "@/lib/types";
import { SkeletonList } from "@/components/ui/Skeleton";
import { useToast } from "@/components/ui/Toast";

type SessionMeta = {
  id: string;
  status: CatStatus;
  correctCount: number;
  questionsAnswered: number;
  minQuestions: number;
  maxQuestions: number;
  startedAt: string;
  completedAt: string | null;
};

const DIFFICULTY_STYLE: Record<string, string> = {
  easy: "bg-emerald-100 text-emerald-700",
  medium: "bg-amber-100 text-amber-700",
  hard: "bg-rose-100 text-rose-700",
};

const STATUS_COPY: Record<string, { title: string; tone: string; message: string }> = {
  passed: {
    title: "🎉 Likely pass",
    tone: "border-emerald-200 bg-emerald-50 text-emerald-900",
    message: "Your performance trended clearly above the passing standard with high confidence.",
  },
  failed: {
    title: "📚 Needs more review",
    tone: "border-rose-200 bg-rose-50 text-rose-900",
    message: "Your performance trended below the passing standard — review the categories below and try again.",
  },
  max_length: {
    title: "🏁 Maximum length reached",
    tone: "border-amber-200 bg-amber-50 text-amber-900",
    message: "The test reached its maximum length without a clear pass/fail signal. Review your answers below.",
  },
};

export default function CatSessionRunner({ sessionId }: { sessionId: string }) {
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState<SessionMeta | null>(null);
  const [question, setQuestion] = useState<CatQuestion | null>(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [history, setHistory] = useState<CatHistoryEntry[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<{ isCorrect: boolean; correctChoiceId: string; rationale: string; strategy: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [finalStatus, setFinalStatus] = useState<CatStatus | null>(null);
  const [locked, setLocked] = useState(false);
  const toast = useToast();

  useEffect(() => {
    fetch(`/api/cat/${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.session) {
          setMeta(data.session);
          if (data.session.status !== "in_progress") setFinalStatus(data.session.status);
        }
        if (data.question) setQuestion(data.question);
        if (data.questionNumber) setQuestionNumber(data.questionNumber);
        if (data.history) setHistory(data.history);
      })
      .finally(() => setLoading(false));
  }, [sessionId]);

  async function submitAnswer(choiceId: string) {
    if (!question || submitting) return;
    setSelected(choiceId);
    setSubmitting(true);
    try {
      const res = await fetch(`/api/cat/${sessionId}/answer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ selectedChoiceId: choiceId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Unable to submit answer");
      setResult(data.result);

      if (data.done) {
        setFinalStatus(data.status);
        setLocked(Boolean(data.locked));
        setMeta((m) => (m ? { ...m, correctCount: data.summary.correctCount, questionsAnswered: data.summary.questionsAnswered } : m));
      } else {
        setMeta((m) => (m ? { ...m, questionsAnswered: data.questionNumber - 1 } : m));
      }
    } catch (err) {
      toast.push(err instanceof Error ? err.message : "Unable to submit answer", "error");
      setSelected(null);
    } finally {
      setSubmitting(false);
    }
  }

  function goToNext() {
    if (!result) return;
    // The answer route already advanced state server-side; fetch fresh state.
    setSelected(null);
    setResult(null);
    setLoading(true);
    fetch(`/api/cat/${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.session) setMeta(data.session);
        if (data.question) setQuestion(data.question);
        if (data.questionNumber) setQuestionNumber(data.questionNumber);
        if (data.history) setHistory(data.history);
      })
      .finally(() => setLoading(false));
  }

  if (loading) {
    return (
      <div>
        <HeaderBar />
        <SkeletonList count={3} />
      </div>
    );
  }

  if (!meta) {
    return (
      <div>
        <HeaderBar />
        <p className="text-sm text-slate-500">This session could not be found.</p>
      </div>
    );
  }

  // ----- Finished: show verdict + full history review -----
  if (finalStatus) {
    const copy = locked
      ? { title: "🔒 Free preview complete", tone: "border-amber-200 bg-amber-50 text-amber-900", message: "Upgrade to unlock the full 15–50 question adaptive experience." }
      : STATUS_COPY[finalStatus] ?? STATUS_COPY.max_length;
    return (
      <div>
        <HeaderBar />
        <div className={`mb-6 rounded-2xl border p-6 text-center ${copy.tone}`}>
          <h2 className="text-2xl font-extrabold">{copy.title}</h2>
          <p className="mt-2 text-sm">{copy.message}</p>
          <p className="mt-3 text-sm font-semibold">
            {meta.correctCount}/{meta.questionsAnswered} correct across {meta.questionsAnswered} questions
          </p>
          {locked && (
            <Link href="/dashboard/billing" className="mt-4 inline-block rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-amber-600">
              Get full access — from $5
            </Link>
          )}
        </div>

        <h3 className="mb-3 text-base font-bold text-slate-950">Question review</h3>
        <div className="space-y-4">
          {history.map((h, i) => (
            <div key={h.questionId} className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400">Q{i + 1}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${DIFFICULTY_STYLE[h.difficulty]}`}>{h.difficulty}</span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">{h.categoryName}</span>
                </div>
                <span className={`text-sm font-bold ${h.isCorrect ? "text-emerald-600" : "text-rose-600"}`}>{h.isCorrect ? "✓ Correct" : "✕ Incorrect"}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-900">{h.stem}</p>
              <div className="mt-3 space-y-2">
                {h.choices.map((choice) => {
                  const isCorrectChoice = choice.id === h.correctChoiceId;
                  const isYourWrongChoice = choice.id === h.selectedChoiceId && !h.isCorrect;
                  return (
                    <div
                      key={choice.id}
                      className={`rounded-lg border px-3 py-2 text-sm ${
                        isCorrectChoice
                          ? "border-emerald-400 bg-emerald-50 text-emerald-900"
                          : isYourWrongChoice
                            ? "border-rose-400 bg-rose-50 text-rose-900"
                            : "border-slate-200 text-slate-600"
                      }`}
                    >
                      {isCorrectChoice ? "✓ " : isYourWrongChoice ? "✕ " : ""}
                      {choice.text}
                    </div>
                  );
                })}
              </div>
              <div className="mt-3 rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Rationale</p>
                <p className="mt-1 text-sm text-slate-700">{h.rationale}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-emerald-700">🎯 Strategy</p>
                <p className="mt-1 text-sm text-slate-700">{h.strategy}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link href="/dashboard/cat" className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">
            Back to CAT practice
          </Link>
        </div>
      </div>
    );
  }

  // ----- Live adaptive test -----
  return (
    <div>
      <HeaderBar />
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-700">
        <span>
          Question {questionNumber} <span className="font-normal text-slate-400">({meta.minQuestions}–{meta.maxQuestions} range)</span>
        </span>
        <span>
          {meta.correctCount}/{meta.questionsAnswered} correct so far
        </span>
      </div>

      {question && (
        <div className="animate-fade-in rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center gap-2">
            <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${DIFFICULTY_STYLE[question.difficulty]}`}>{question.difficulty}</span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">{question.categoryName}</span>
          </div>
          <p className="text-base leading-relaxed text-slate-900">{question.stem}</p>
          <div className="mt-5 space-y-2.5">
            {question.choices.map((choice) => {
              const isSelected = selected === choice.id;
              const isCorrectChoice = result && choice.id === result.correctChoiceId;
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
                      isCorrectChoice ? "border-emerald-500 bg-emerald-500 text-white" : isWrongSelected ? "border-rose-500 bg-rose-500 text-white" : "border-slate-300"
                    }`}
                  >
                    {isCorrectChoice ? "✓" : isWrongSelected ? "✕" : ""}
                  </span>
                  <span>{choice.text}</span>
                </button>
              );
            })}
          </div>

          {result && (
            <div className="mt-5 space-y-3 rounded-xl bg-slate-50 p-4">
              <p className={`text-sm font-bold ${result.isCorrect ? "text-emerald-700" : "text-rose-700"}`}>{result.isCorrect ? "Correct!" : "Not quite."}</p>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Rationale</p>
                <p className="mt-1 text-sm text-slate-700">{result.rationale}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">🎯 Test-taking strategy</p>
                <p className="mt-1 text-sm text-slate-700">{result.strategy}</p>
              </div>
              <div className="flex justify-end pt-1">
                <button onClick={goToNext} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700">
                  Next question →
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function HeaderBar() {
  return (
    <div className="mb-6">
      <Link href="/dashboard/cat" className="text-xs font-semibold text-emerald-700 hover:underline">
        ← CAT practice
      </Link>
      <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">Adaptive Test (CAT)</h1>
    </div>
  );
}
