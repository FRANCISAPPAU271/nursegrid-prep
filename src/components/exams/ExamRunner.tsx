"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { mockVerdict } from "@/components/exams/MockExamLauncher";
import type { ExamQuestion, ExamReviewQuestion } from "@/lib/types";
import { SkeletonList } from "@/components/ui/Skeleton";
import { useToast } from "@/components/ui/Toast";
import Watermark from "@/components/ui/Watermark";

type ExamMeta = {
  id: string;
  title: string;
  status: "in_progress" | "completed";
  totalQuestions: number;
  correctCount: number;
  startedAt: string;
  completedAt: string | null;
};

const DIFFICULTY_STYLE: Record<string, string> = {
  easy: "bg-emerald-100 text-emerald-700",
  medium: "bg-amber-100 text-amber-700",
  hard: "bg-rose-100 text-rose-700",
};

export default function ExamRunner({ examId }: { examId: string }) {
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState<ExamMeta | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [review, setReview] = useState<ExamReviewQuestion[] | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [current, setCurrent] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const toast = useToast();
  const searchParams = useSearchParams();
  const isMock = searchParams.get("mock") === "1" || (meta?.title ?? "").startsWith("Mock NMC Exam");
  // Mock timer: 150 minutes from the exam's startedAt timestamp.
  const deadline = useMemo(() => {
    if (!meta || meta.status !== "in_progress" || !isMock) return null;
    return new Date(meta.startedAt).getTime() + 150 * 60 * 1000;
  }, [meta, isMock]);
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!deadline) return;
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, [deadline]);
  const remainingMs = deadline ? Math.max(0, deadline - now) : null;

  useEffect(() => {
    fetch(`/api/exams/${examId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.exam) setMeta(data.exam);
        if (data.questions) setQuestions(data.questions);
        if (data.review) setReview(data.review);
      })
      .finally(() => setLoading(false));
  }, [examId]);

  function selectAnswer(questionId: string, choiceId: string) {
    setAnswers((a) => ({ ...a, [questionId]: choiceId }));
  }

  // SATA: toggle a choice inside a comma-joined multi-answer value.
  function toggleSataAnswer(questionId: string, choiceId: string) {
    setAnswers((a) => {
      const currentIds = (a[questionId] ?? "").split(",").filter(Boolean);
      const next = currentIds.includes(choiceId)
        ? currentIds.filter((c) => c !== choiceId)
        : [...currentIds, choiceId].sort();
      const rest = { ...a };
      if (next.length === 0) {
        delete rest[questionId];
        return rest;
      }
      return { ...rest, [questionId]: next.join(",") };
    });
  }

  // Auto-submit the mock when the countdown hits zero.
  useEffect(() => {
    if (remainingMs === 0 && meta?.status === "in_progress" && !submitting) {
      toast.push("Time is up — submitting your mock exam.", "info");
      submitExam();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingMs]);

  async function submitExam() {
    setSubmitting(true);
    try {
      const payload = Object.entries(answers).map(([questionId, selectedChoiceId]) => ({ questionId, selectedChoiceId }));
      const res = await fetch(`/api/exams/${examId}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: payload }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Unable to submit exam");
      setMeta(data.exam);
      setReview(data.review);
    } catch (err) {
      toast.push(err instanceof Error ? err.message : "Unable to submit exam", "error");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div>
        <HeaderBar title="Loading exam…" />
        <SkeletonList count={4} />
      </div>
    );
  }

  if (!meta) {
    return (
      <div>
        <HeaderBar title="Exam not found" />
        <p className="text-sm text-slate-500">This exam may have been deleted.</p>
      </div>
    );
  }

  // ----- Review mode (after submission) -----
  if (meta.status === "completed" && review) {
    const pct = meta.totalQuestions > 0 ? Math.round((meta.correctCount / meta.totalQuestions) * 100) : 0;
    return (
      <div>
        <HeaderBar title={meta.title} />
        <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
          <p className="text-3xl">{isMock ? "🎓" : "🎉"}</p>
          <h2 className="mt-2 text-2xl font-extrabold text-slate-950">
            You scored {meta.correctCount}/{meta.totalQuestions} ({pct}%)
          </h2>
          {isMock && (() => {
            const v = mockVerdict(pct);
            return (
              <div className="mt-3">
                <span className={`inline-block rounded-full px-4 py-1.5 text-sm font-extrabold ${v.tone}`}>{v.label}</span>
                <p className="mx-auto mt-2 max-w-md text-sm text-slate-700">{v.message}</p>
              </div>
            );
          })()}
          <p className="mt-2 text-sm text-emerald-800">Review every question, your answer, the correct answer, and the rationale below.</p>
        </div>

        <div className="space-y-4">
          {review.map((q, i) => (
            <div key={q.id} className="relative secure-content rounded-2xl border border-slate-200 bg-white p-5">
              <Watermark />
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400">Q{i + 1}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${DIFFICULTY_STYLE[q.difficulty]}`}>
                    {q.difficulty}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">{q.categoryName}</span>
                </div>
                <span className={`text-sm font-bold ${q.isCorrect ? "text-emerald-600" : "text-rose-600"}`}>
                  {q.isCorrect ? "✓ Correct" : q.selectedChoiceId ? "✕ Incorrect" : "— Unanswered"}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-900">{q.stem}</p>
              <div className="mt-3 space-y-2">
                {q.choices.map((choice) => {
                  const correctIds = q.correctChoiceId.split(",");
                  const selectedIds = (q.selectedChoiceId ?? "").split(",");
                  const isCorrectChoice = correctIds.includes(choice.id);
                  const isYourWrongChoice = selectedIds.includes(choice.id) && !correctIds.includes(choice.id);
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
                <p className="mt-1 text-sm text-slate-700">{q.rationale}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-emerald-700">🎯 Strategy</p>
                <p className="mt-1 text-sm text-slate-700">{q.strategy}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link href="/dashboard/exams" className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">
            Back to exam builder
          </Link>
        </div>
      </div>
    );
  }

  // ----- Taking the exam (no feedback shown until final submit) -----
  const q = questions[current];
  const answeredCount = Object.keys(answers).length;

  return (
    <div>
      <HeaderBar title={meta.title} />

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-700">
        <span>
          Question {current + 1} of {questions.length}
        </span>
        <span className="flex items-center gap-3">
          {remainingMs !== null && (
            <span
              className={`rounded-lg px-2.5 py-1 font-mono text-sm font-bold tabular-nums ${
                remainingMs < 10 * 60 * 1000 ? "bg-rose-100 text-rose-700" : "bg-slate-900 text-lime-300"
              }`}
            >
              ⏱ {String(Math.floor(remainingMs / 3600000)).padStart(2, "0")}:
              {String(Math.floor((remainingMs % 3600000) / 60000)).padStart(2, "0")}:
              {String(Math.floor((remainingMs % 60000) / 1000)).padStart(2, "0")}
            </span>
          )}
          <span>{answeredCount} answered</span>
        </span>
      </div>

      {q && (
        <div className="relative secure-content rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <Watermark />
          <div className="mb-3 flex items-center gap-2">
            <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${DIFFICULTY_STYLE[q.difficulty]}`}>{q.difficulty}</span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">{q.categoryName}</span>
            {q.isSata && (
              <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[11px] font-bold text-indigo-700">Select all that apply</span>
            )}
          </div>
          <p className="text-base leading-relaxed text-slate-900">{q.stem}</p>
          <div className="mt-5 space-y-2.5">
            {q.choices.map((choice) => {
              const selected = q.isSata
                ? (answers[q.id] ?? "").split(",").includes(choice.id)
                : answers[q.id] === choice.id;
              return (
                <button
                  key={choice.id}
                  onClick={() => (q.isSata ? toggleSataAnswer(q.id, choice.id) : selectAnswer(q.id, choice.id))}
                  className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${
                    selected
                      ? q.isSata
                        ? "border-indigo-500 bg-indigo-50 text-indigo-900"
                        : "border-emerald-500 bg-emerald-50 text-emerald-900"
                      : "border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40"
                  }`}
                >
                  <span
                    className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center border text-[11px] font-bold ${
                      q.isSata ? "rounded-md" : "rounded-full"
                    } ${
                      selected
                        ? q.isSata
                          ? "border-indigo-500 bg-indigo-500 text-white"
                          : "border-emerald-500 bg-emerald-500 text-white"
                        : "border-slate-300"
                    }`}
                  >
                    {selected ? "✓" : ""}
                  </span>
                  <span>{choice.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-5 flex items-center justify-between gap-3">
        <button
          onClick={() => setCurrent((i) => Math.max(0, i - 1))}
          disabled={current === 0}
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 disabled:opacity-40"
        >
          ← Previous
        </button>

        <div className="flex flex-wrap justify-center gap-1.5 px-2">
          {questions.map((qq, i) => (
            <button
              key={qq.id}
              onClick={() => setCurrent(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === current ? "bg-emerald-600" : answers[qq.id] ? "bg-emerald-300" : "bg-slate-200"
              }`}
              aria-label={`Go to question ${i + 1}`}
            />
          ))}
        </div>

        {current + 1 < questions.length ? (
          <button
            onClick={() => setCurrent((i) => Math.min(questions.length - 1, i + 1))}
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={submitExam}
            disabled={submitting}
            className="rounded-lg bg-emerald-600 px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 disabled:opacity-70"
          >
            {submitting ? "Submitting…" : "Submit exam →"}
          </button>
        )}
      </div>

      {answeredCount < questions.length && (
        <p className="mt-3 text-center text-xs text-slate-400">
          {questions.length - answeredCount} question{questions.length - answeredCount === 1 ? "" : "s"} left unanswered — you can still submit,
          unanswered questions will be marked incorrect.
        </p>
      )}
    </div>
  );
}

function HeaderBar({ title }: { title: string }) {
  return (
    <div className="mb-6">
      <Link href="/dashboard/exams" className="text-xs font-semibold text-emerald-700 hover:underline">
        ← Custom exams
      </Link>
      <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">{title}</h1>
    </div>
  );
}
