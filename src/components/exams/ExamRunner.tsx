"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { mockVerdict } from "@/components/exams/MockExamLauncher";
import type { ExamQuestion, ExamReviewQuestion } from "@/lib/types";
import { SkeletonList } from "@/components/ui/Skeleton";
import { useToast } from "@/components/ui/Toast";
import Watermark from "@/components/ui/Watermark";
import { RichText } from "@/components/questions/RichText";
import { EmphasisedText } from "../questions/EmphasisedText";
import { OptionBadge } from "@/components/questions/OptionBadge";
import ExamReviewSummary from "@/components/exams/ExamReviewSummary";
import PostTestResultBanner from "@/components/courses/PostTestResultBanner";

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

function serializeAnswers(answers: Record<string, string>): string {
  return JSON.stringify(Object.entries(answers).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)));
}

export default function ExamRunner({ examId }: { examId: string }) {
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState<ExamMeta | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [review, setReview] = useState<ExamReviewQuestion[] | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [current, setCurrent] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  // Draft autosave: answers are PATCHed to the server shortly after every
  // change (and immediately when the tab is hidden/closed) so an exam can be
  // resumed on any device without losing a single selection.
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const answersRef = useRef<Record<string, string>>({});
  const dirtyRef = useRef(false);
  const hydratedRef = useRef(false);
  // Canonical serialisation of the answers last confirmed on the server, so
  // we never re-send an identical draft (e.g. right after restoring one).
  const lastSavedRef = useRef<string>(serializeAnswers({}));
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toast = useToast();
  const searchParams = useSearchParams();
  const isMock = searchParams.get("mock") === "1" || (meta?.title ?? "").startsWith("Mock NMC Exam");
  // Course post-tests reuse the exam runner; ?course=<slug> switches the
  // header link and the result banner to the learning-centre flow.
  const courseSlug = searchParams.get("course");
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
        // Resume: restore autosaved selections and open the first question
        // that still has no answer (or the last one when all are answered,
        // so the Submit button is right there).
        if (Array.isArray(data.answers) && Array.isArray(data.questions)) {
          const restored: Record<string, string> = {};
          for (const a of data.answers as { questionId: string; selectedChoiceId: string }[]) {
            if (a?.questionId && a?.selectedChoiceId) restored[a.questionId] = a.selectedChoiceId;
          }
          if (Object.keys(restored).length > 0) {
            answersRef.current = restored;
            lastSavedRef.current = serializeAnswers(restored);
            setAnswers(restored);
            const list = data.questions as { id: string }[];
            const firstOpen = list.findIndex((q) => !restored[q.id]);
            setCurrent(firstOpen === -1 ? Math.max(0, list.length - 1) : firstOpen);
            setSaveState("saved");
          }
        }
        hydratedRef.current = true;
      })
      .finally(() => setLoading(false));
  }, [examId]);

  const saveDraft = useCallback(
    async (keepalive = false) => {
      if (!dirtyRef.current) return;
      const snapshot = serializeAnswers(answersRef.current);
      const payload = Object.entries(answersRef.current).map(([questionId, selectedChoiceId]) => ({ questionId, selectedChoiceId }));
      dirtyRef.current = false;
      setSaveState("saving");
      try {
        const res = await fetch(`/api/exams/${examId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          keepalive,
          body: JSON.stringify({ answers: payload }),
        });
        if (res.ok) lastSavedRef.current = snapshot;
        setSaveState(res.ok ? "saved" : "error");
        if (!res.ok) dirtyRef.current = true;
      } catch {
        dirtyRef.current = true;
        setSaveState("error");
      }
    },
    [examId],
  );

  // Debounced autosave whenever the answers change (after the initial load).
  useEffect(() => {
    answersRef.current = answers;
    if (!hydratedRef.current || !meta || meta.status !== "in_progress") return;
    if (serializeAnswers(answers) === lastSavedRef.current) return;
    dirtyRef.current = true;
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      saveTimerRef.current = null;
      void saveDraft();
    }, 1200);
    return () => {
      if (saveTimerRef.current) {
        clearTimeout(saveTimerRef.current);
        saveTimerRef.current = null;
      }
    };
  }, [answers, meta, saveDraft]);

  // Flush pending changes when the student leaves (tab hidden, app closed,
  // navigation away) — keepalive lets the request outlive the page.
  useEffect(() => {
    const flush = () => {
      if (document.visibilityState === "hidden") void saveDraft(true);
    };
    const onPageHide = () => void saveDraft(true);
    document.addEventListener("visibilitychange", flush);
    window.addEventListener("pagehide", onPageHide);
    return () => {
      document.removeEventListener("visibilitychange", flush);
      window.removeEventListener("pagehide", onPageHide);
      void saveDraft(true);
    };
  }, [saveDraft]);

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
    // The final submission carries every answer, so a pending draft save is
    // redundant (and the server refuses drafts once the exam is completed).
    if (saveTimerRef.current) {
      clearTimeout(saveTimerRef.current);
      saveTimerRef.current = null;
    }
    dirtyRef.current = false;
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
        <HeaderBar title="Loading exam…" courseSlug={courseSlug} />
        <SkeletonList count={4} />
      </div>
    );
  }

  if (!meta) {
    return (
      <div>
        <HeaderBar title="Exam not found" courseSlug={courseSlug} />
        <p className="text-sm text-slate-500">This exam may have been deleted.</p>
      </div>
    );
  }

  // ----- Review mode (after submission) -----
  if (meta.status === "completed" && review) {
    const pct = meta.totalQuestions > 0 ? Math.round((meta.correctCount / meta.totalQuestions) * 100) : 0;
    return (
      <div>
        <HeaderBar title={meta.title} courseSlug={courseSlug} />
        {courseSlug ? (
          <PostTestResultBanner courseSlug={courseSlug} correctCount={meta.correctCount} totalQuestions={meta.totalQuestions} />
        ) : (
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
        )}

        <ExamReviewSummary review={review} />

        <div className="space-y-4">
          {review.map((q, i) => (
            <div key={q.id} className="relative secure-content rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
              <Watermark />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="text-xs font-bold text-slate-400">Q{i + 1}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${DIFFICULTY_STYLE[q.difficulty]}`}>
                    {q.difficulty}
                  </span>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">{q.categoryName}</span>
                </div>
                <span className={`text-xs sm:text-sm font-bold ${q.isCorrect ? "text-emerald-600" : "text-rose-600"}`}>
                  {q.isCorrect ? "✓ Correct" : q.selectedChoiceId ? "✕ Incorrect" : "— Unanswered"}
                </span>
              </div>
              <p className="mt-3 text-[14px] sm:text-sm leading-relaxed text-slate-900"><EmphasisedText text={q.stem} /></p>
              <div className="mt-3 space-y-2">
                {q.choices.map((choice) => {
                  const correctIds = q.correctChoiceId.split(",");
                  const selectedIds = (q.selectedChoiceId ?? "").split(",");
                  const isCorrectChoice = correctIds.includes(choice.id);
                  const isYourWrongChoice = selectedIds.includes(choice.id) && !correctIds.includes(choice.id);
                  return (
                    <div
                      key={choice.id}
                      className={`rounded-lg border px-3 py-2 text-xs sm:text-sm ${
                        isCorrectChoice
                          ? "border-emerald-400 bg-emerald-50 text-emerald-900"
                          : isYourWrongChoice
                            ? "border-rose-400 bg-rose-50 text-rose-900"
                            : "border-slate-200 text-slate-600"
                      }`}
                    >
                      <span className="flex items-start gap-2.5 sm:gap-3">
                        <OptionBadge label={choice.id} state={isCorrectChoice ? "correct" : isYourWrongChoice ? "wrong" : "default"} />
                        <span className="pt-0.5 leading-snug">{choice.text}</span>
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-3 rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Rationale</p>
                <RichText text={q.rationale} className="mt-1 text-sm leading-relaxed text-slate-700" />
                {q.mediaUrl && (
                  <div className="mt-3 overflow-hidden rounded-xl border border-slate-200 bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={q.mediaUrl} alt={q.mediaCaption ?? "Visual explanation"} className="w-full object-contain" loading="lazy" />
                    {q.mediaCaption && (
                      <p className="border-t border-slate-100 px-3 py-2 text-xs font-medium text-slate-500">📊 {q.mediaCaption}</p>
                    )}
                  </div>
                )}
                <p className="mt-2 text-xs font-bold uppercase tracking-wide text-emerald-700">🎯 Strategy</p>
                <RichText text={q.strategy} className="mt-1 text-sm leading-relaxed text-slate-700" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          {courseSlug ? (
            <Link href={`/dashboard/courses/${courseSlug}/post-test`} className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">
              Return to course
            </Link>
          ) : (
            <Link href="/dashboard/exams" className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">
              Back to exam builder
            </Link>
          )}
        </div>
      </div>
    );
  }

  // ----- Taking the exam (no feedback shown until final submit) -----
  const q = questions[current];
  const answeredCount = Object.keys(answers).length;

  return (
    <div>
      <HeaderBar title={meta.title} courseSlug={courseSlug} />

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
          {saveState !== "idle" && (
            <span
              className={`text-xs font-semibold ${
                saveState === "error" ? "text-rose-600" : saveState === "saving" ? "text-slate-400" : "text-emerald-600"
              }`}
              title="Your answers are saved as you go, so you can leave and resume this exam later."
            >
              {saveState === "saving" ? "Saving…" : saveState === "error" ? "Not saved — check connection" : "✓ Saved"}
            </span>
          )}
        </span>
      </div>

      {q && (
        <div className="relative secure-content rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
          <Watermark />
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${DIFFICULTY_STYLE[q.difficulty]}`}>{q.difficulty}</span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">{q.categoryName}</span>
            {q.isSata && (
              <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[11px] font-bold text-indigo-700">Select all that apply</span>
            )}
          </div>
          <p className="text-[15px] sm:text-base leading-relaxed text-slate-900"><EmphasisedText text={q.stem} /></p>
          <div className="mt-5 space-y-2.5">
            {q.choices.map((choice) => {
              const selected = q.isSata
                ? (answers[q.id] ?? "").split(",").includes(choice.id)
                : answers[q.id] === choice.id;
              return (
                <button
                  key={choice.id}
                  onClick={() => (q.isSata ? toggleSataAnswer(q.id, choice.id) : selectAnswer(q.id, choice.id))}
                  className={`flex w-full items-start gap-2.5 sm:gap-3 rounded-xl border px-3.5 py-3 sm:px-4 text-left text-[13px] sm:text-sm leading-snug sm:leading-normal transition ${
                    selected
                      ? q.isSata
                        ? "border-indigo-500 bg-indigo-50 text-indigo-900"
                        : "border-emerald-500 bg-emerald-50 text-emerald-900"
                      : "border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40"
                  }`}
                >
                  <OptionBadge label={choice.id} shape={q.isSata ? "square" : "circle"} state={selected ? "selected" : "default"} />
                  <span className="pt-0.5">{choice.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-5 flex items-center justify-between gap-2 sm:gap-3">
        <button
          onClick={() => setCurrent((i) => Math.max(0, i - 1))}
          disabled={current === 0}
          className="rounded-xl border border-slate-200 px-3.5 sm:px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 shrink-0"
        >
          ← Prev
        </button>

        {/* Mobile portrait progress indicator */}
        <div className="flex sm:hidden flex-col items-center justify-center text-center px-1">
          <span className="text-xs font-bold text-slate-800 tabular-nums">
            {current + 1} / {questions.length}
          </span>
          <span className="text-[10px] text-slate-500 tabular-nums">
            {answeredCount} done
          </span>
        </div>

        {/* Tablet & Desktop dot grid */}
        <div className="hidden sm:flex flex-wrap justify-center gap-1.5 px-2 max-h-24 overflow-y-auto">
          {questions.map((qq, i) => (
            <button
              key={qq.id}
              onClick={() => setCurrent(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === current ? "bg-emerald-600 ring-2 ring-emerald-300" : answers[qq.id] ? "bg-emerald-300" : "bg-slate-200"
              }`}
              aria-label={`Go to question ${i + 1}`}
            />
          ))}
        </div>

        {current + 1 < questions.length ? (
          <button
            onClick={() => setCurrent((i) => Math.min(questions.length - 1, i + 1))}
            className="rounded-xl bg-slate-900 px-4 sm:px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 shrink-0"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={submitExam}
            disabled={submitting}
            className="rounded-xl bg-emerald-600 px-4 sm:px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 disabled:opacity-70 shrink-0"
          >
            {submitting ? "Submitting…" : "Submit →"}
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

function HeaderBar({ title, courseSlug }: { title: string; courseSlug?: string | null }) {
  return (
    <div className="mb-6">
      {courseSlug ? (
        <Link href={`/dashboard/courses/${courseSlug}/post-test`} className="text-xs font-semibold text-emerald-700 hover:underline">
          ← Course post-test
        </Link>
      ) : (
        <Link href="/dashboard/exams" className="text-xs font-semibold text-emerald-700 hover:underline">
          ← Custom exams
        </Link>
      )}
      <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">{title}</h1>
    </div>
  );
}
