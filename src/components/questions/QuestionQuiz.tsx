"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { AttemptResult, QuestionPreview } from "@/lib/types";
import Empty from "@/components/ui/Empty";
import { SkeletonList } from "@/components/ui/Skeleton";
import { useToast } from "@/components/ui/Toast";
import Watermark from "@/components/ui/Watermark";
import { RichText } from "@/components/questions/RichText";
import { EmphasisedText } from "./EmphasisedText";
import { OptionBadge } from "@/components/questions/OptionBadge";
import DiagramLightbox from "@/components/questions/DiagramLightbox";

const DIFFICULTY_STYLE: Record<string, string> = {
  easy: "bg-emerald-100 text-emerald-700",
  medium: "bg-amber-100 text-amber-700",
  hard: "bg-rose-100 text-rose-700",
};

// Timed mode: the real CBT gives roughly this long per question; practicing
// with the clock builds exam pacing. Persisted preference in localStorage.
const TIMED_SECONDS = 72;
const TIMED_PREF_KEY = "nsg-timed-mode";

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
  // Absolute position of items[0] in the set. Normally 0, but after a resume
  // the first loaded page is the one that contains the saved position.
  const [baseOffset, setBaseOffset] = useState(0);
  // Server-derived key for this practice set (null for shuffled/bookmark
  // sets, which cannot be resumed). Progress is saved after every answer.
  const [progressKey, setProgressKey] = useState<string | null>(null);
  const [resumedAt, setResumedAt] = useState<number | null>(null);
  const [restarting, setRestarting] = useState(false);
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
  const [reportSent, setReportSent] = useState(false);
  const [timedMode, setTimedMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIMED_SECONDS);
  const [timedOut, setTimedOut] = useState(false);
  const [swipeHint, setSwipeHint] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const toast = useToast();
  const limit = 20;

  // ---- Swipe left → next question (mobile). Only after the answer is
  // revealed, so a stray swipe can never skip an unanswered question. The
  // vertical threshold keeps normal scrolling from triggering it.
  function onTouchStart(e: React.TouchEvent) {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }

  function onTouchMove(e: React.TouchEvent) {
    if (!touchStart.current || !result || loadingMore) return;
    const t = e.touches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = Math.abs(t.clientY - touchStart.current.y);
    setSwipeHint(dx < -40 && dy < 60);
  }

  function onTouchEnd(e: React.TouchEvent) {
    const start = touchStart.current;
    touchStart.current = null;
    setSwipeHint(false);
    if (!start || !result || loadingMore) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = Math.abs(t.clientY - start.y);
    if (dx < -70 && dy < 80) {
      void goNext();
    }
  }

  // Restore the student's timed-mode preference.
  useEffect(() => {
    try {
      setTimedMode(localStorage.getItem(TIMED_PREF_KEY) === "1");
    } catch {
      /* ignore */
    }
  }, []);

  function toggleTimedMode() {
    setTimedMode((v) => {
      const next = !v;
      try {
        localStorage.setItem(TIMED_PREF_KEY, next ? "1" : "0");
      } catch {
        /* ignore */
      }
      return next;
    });
  }

  type BatchResponse = {
    questions: QuestionPreview[];
    total?: number;
    locked?: boolean;
    offset?: number;
    progressKey?: string | null;
    resume?: { position: number; answered: number; correct: number } | null;
  };

  const loadBatch = useCallback(
    async (nextOffset: number, replace: boolean, resume = false): Promise<BatchResponse> => {
      const sep = queryString ? "&" : "";
      const res = await fetch(
        `/api/questions?${queryString}${sep}limit=${limit}&offset=${nextOffset}${resume ? "&resume=1" : ""}`,
      );
      const data = (await res.json()) as BatchResponse;
      const list = Array.isArray(data.questions) ? data.questions : [];
      setTotal(data.total ?? 0);
      setLocked(Boolean(data.locked));
      setProgressKey(data.progressKey ?? null);
      setItems((prev) => (replace ? list : [...prev, ...list]));
      return { ...data, questions: list };
    },
    [queryString],
  );

  // First load (and whenever the set changes): ask the server for the page
  // that holds the student's saved position so they continue where they
  // stopped instead of starting at question 1 every time.
  const startSet = useCallback(
    async (resume: boolean) => {
      setLoading(true);
      setIndex(0);
      setOffset(0);
      setBaseOffset(0);
      setResumedAt(null);
      setSelected(null);
      setMultiSelected([]);
      setResult(null);
      setScore({ correct: 0, total: 0 });
      try {
        const data = await loadBatch(0, true, resume);
        const pageOffset = data.offset ?? 0;
        setOffset(pageOffset);
        setBaseOffset(pageOffset);
        if (resume && data.resume && data.resume.position >= pageOffset && data.resume.position - pageOffset < data.questions.length) {
          setIndex(data.resume.position - pageOffset);
          setScore({ correct: data.resume.correct, total: data.resume.answered });
          setResumedAt(data.resume.position);
        }
      } finally {
        setLoading(false);
      }
    },
    [loadBatch],
  );

  useEffect(() => {
    void startSet(true);
  }, [startSet]);

  // Persist the position after every answer (fire-and-forget; keepalive lets
  // the request finish even if the tab is closed straight after answering).
  function saveProgress(nextPosition: number, nextScore: { correct: number; total: number }) {
    if (!progressKey) return;
    try {
      void fetch("/api/questions/progress", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
        body: JSON.stringify({ key: progressKey, position: nextPosition, answered: nextScore.total, correct: nextScore.correct }),
      }).catch(() => {
        /* progress is a convenience — never interrupt practice over it */
      });
    } catch {
      /* ignore */
    }
  }

  async function startOver(confirmFirst = false) {
    if (restarting) return;
    if (confirmFirst && typeof window !== "undefined" && !window.confirm("Start this set again from question 1? Your saved position will be cleared (your answer history is kept).")) {
      return;
    }
    setRestarting(true);
    try {
      if (progressKey) {
        await fetch(`/api/questions/progress?key=${encodeURIComponent(progressKey)}`, { method: "DELETE" }).catch(() => undefined);
      }
      await startSet(false);
    } finally {
      setRestarting(false);
    }
  }

  const current = items[index];
  const isSataQuestion = Boolean(current?.isSata);

  // Timed-mode countdown: reset for each new unanswered question; stop when
  // answered or when the mode is switched off; auto-flag at zero.
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setTimedOut(false);
    setTimeLeft(TIMED_SECONDS);
    if (!timedMode || !current || result) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          setTimedOut(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timedMode, index, items, Boolean(result)]);

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
      const nextScore = { correct: score.correct + (data.isCorrect ? 1 : 0), total: score.total + 1 };
      setScore(nextScore);
      saveProgress(baseOffset + index + 1, nextScore);
    } catch (err) {
      toast.push(err instanceof Error ? err.message : "Unable to submit answer", "error");
      setSelected(null);
    } finally {
      setSubmitting(false);
    }
  }

  async function reportQuestion(reason: string) {
    if (!current || reportSent) return;
    try {
      const res = await fetch(`/api/questions/${current.id}/report`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ reason }) });
      if (!res.ok) throw new Error();
      setReportSent(true);
    } catch {
      toast.push("Could not submit the report", "error");
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
    setReportSent(false);
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
      const batch = await loadBatch(nextOffset, false);
      setOffset(nextOffset);
      if (batch.questions.length > 0) setIndex((i) => i + 1);
      setLoadingMore(false);
    } else {
      setIndex((i) => i + 1);
    }
  }

  if (loading) {
    return (
      <div>
        <QuizHeader title={title} subtitle={subtitle} score={score} timedMode={timedMode} onToggleTimed={toggleTimedMode} />
        <SkeletonList count={3} />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div>
        <QuizHeader title={title} subtitle={subtitle} score={score} timedMode={timedMode} onToggleTimed={toggleTimedMode} />
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
  const position = baseOffset + index; // absolute 0-based position in the set
  const canResume = Boolean(progressKey);
  const progressPct = total > 0 ? Math.min(100, Math.round((Math.min(position, total) / total) * 100)) : 0;

  return (
    <div>
      <QuizHeader title={title} subtitle={subtitle} score={score} timedMode={timedMode} onToggleTimed={toggleTimedMode} />

      {canResume && total > 0 && !finished && (
        <div className="mb-3 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-xs font-semibold text-slate-600">
            <span>
              Question {Math.min(position + 1, total)} of {total}
              {resumedAt !== null && position === resumedAt && (
                <span className="ml-2 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
                  ↻ Resumed where you left off
                </span>
              )}
            </span>
            {position > 0 && (
              <button
                onClick={() => void startOver(true)}
                disabled={restarting || loadingMore}
                className="font-bold text-slate-500 hover:text-rose-600 disabled:opacity-50"
                title="Forget your saved position and start this set from question 1"
              >
                {restarting ? "Restarting…" : "↺ Start over"}
              </button>
            )}
          </div>
          <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${progressPct}%` }} />
          </div>
        </div>
      )}

      {!finished && current && (
        <div
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className={`animate-fade-in relative secure-content rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm transition-transform duration-150 ${
            swipeHint ? "-translate-x-2 opacity-90" : ""
          }`}
        >
          <Watermark />
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
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
            <div className="flex items-center gap-2 shrink-0">
              {timedMode && !result && (
                <span
                  className={`rounded-full px-2.5 py-1 font-mono text-xs font-bold tabular-nums ${
                    timedOut
                      ? "bg-rose-100 text-rose-700"
                      : timeLeft <= 15
                        ? "animate-pulse bg-rose-100 text-rose-700"
                        : timeLeft <= 30
                          ? "bg-amber-100 text-amber-700"
                          : "bg-slate-100 text-slate-600"
                  }`}
                >
                  ⏱ {timedOut ? "Time!" : `${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, "0")}`}
                </span>
              )}
              <button
                onClick={toggleBookmark}
                title={current.isBookmarked ? "Remove bookmark" : "Bookmark"}
                className={`text-lg ${current.isBookmarked ? "text-amber-500" : "text-slate-300 hover:text-amber-400"}`}
              >
                {current.isBookmarked ? "🔖" : "📑"}
              </button>
            </div>
          </div>

          {timedMode && timedOut && !result && (
            <div className="mb-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-2.5 text-sm font-semibold text-rose-700">
              ⏱ Time&apos;s up — on the real exam you&apos;d move on. Answer anyway to learn, but note this one ran long.
            </div>
          )}

          <p className="text-[15px] sm:text-base leading-relaxed text-slate-900"><EmphasisedText text={current.stem} /></p>

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
                    className={`flex w-full items-start gap-2.5 sm:gap-3 rounded-xl border px-3.5 py-3 sm:px-4 text-left text-[13px] sm:text-sm leading-snug sm:leading-normal transition disabled:cursor-default ${
                      isCorrectChoice
                        ? "border-emerald-400 bg-emerald-50 text-emerald-900"
                        : isWrongTicked
                          ? "border-rose-400 bg-rose-50 text-rose-900"
                          : isTicked
                            ? "border-indigo-400 bg-indigo-50 text-indigo-900"
                            : "border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40"
                    }`}
                  >
                    <OptionBadge
                      label={choice.id}
                      shape="square"
                      state={isCorrectChoice ? "correct" : isWrongTicked ? "wrong" : isMissedCorrect ? "missed" : isTicked ? "selected" : "default"}
                    />
                    <span className="pt-0.5">{choice.text}</span>
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
                  className={`flex w-full items-start gap-2.5 sm:gap-3 rounded-xl border px-3.5 py-3 sm:px-4 text-left text-[13px] sm:text-sm leading-snug sm:leading-normal transition disabled:cursor-default ${
                    isCorrectChoice
                      ? "border-emerald-400 bg-emerald-50 text-emerald-900"
                      : isWrongSelected
                        ? "border-rose-400 bg-rose-50 text-rose-900"
                        : isSelected
                          ? "border-slate-400 bg-slate-50"
                          : "border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40"
                  }`}
                >
                  <OptionBadge
                    label={choice.id}
                    state={isCorrectChoice ? "correct" : isWrongSelected ? "wrong" : isSelected ? "selected" : "default"}
                  />
                  <span className="pt-0.5">{choice.text}</span>
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
                <RichText text={result.rationale} className="mt-1 text-sm leading-relaxed text-slate-700" />
              </div>
              {result.mediaUrl && (
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <DiagramLightbox src={result.mediaUrl} alt={result.mediaCaption ?? "Visual explanation"} caption={result.mediaCaption} />
                </div>
              )}
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">🎯 Test-taking strategy</p>
                <RichText text={result.strategy} className="mt-1 text-sm leading-relaxed text-slate-700" />
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-slate-200 pt-3">
                <span className="text-xs text-slate-400">Something wrong?</span>
                {reportSent ? <span className="text-xs font-semibold text-emerald-700">Report received — thank you.</span> : <select onChange={(e) => { if (e.target.value) void reportQuestion(e.target.value); }} defaultValue="" className="rounded-lg border border-slate-200 px-2 py-1.5 text-xs text-slate-600"><option value="">Report this question…</option><option value="incorrect">Answer may be incorrect</option><option value="unclear">Wording is unclear</option><option value="broken_diagram">Diagram is broken</option><option value="duplicate">Duplicate question</option><option value="outdated">Information may be outdated</option></select>}
              </div>
              <div className="flex items-center justify-between gap-2 pt-1">
                <span className="text-[11px] font-medium text-slate-400 md:hidden">← Swipe left for next</span>
                <button
                  onClick={goNext}
                  disabled={loadingMore}
                  className="ml-auto rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 disabled:opacity-70"
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
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
              {canResume && (
                <button
                  onClick={() => void startOver()}
                  disabled={restarting}
                  className="rounded-lg border border-emerald-600 px-5 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 disabled:opacity-60"
                >
                  {restarting ? "Restarting…" : "↺ Practise this set again"}
                </button>
              )}
              <Link
                href="/dashboard/questions"
                className="inline-block rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Back to question bank
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function QuizHeader({
  title,
  subtitle,
  score,
  timedMode,
  onToggleTimed,
}: {
  title: string;
  subtitle: string;
  score: { correct: number; total: number };
  timedMode?: boolean;
  onToggleTimed?: () => void;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <Link href="/dashboard/questions" className="text-xs font-semibold text-emerald-700 hover:underline">
          ← Question bank
        </Link>
        <h1 className="mt-1 text-xl sm:text-2xl font-extrabold tracking-tight text-slate-950">{title}</h1>
        <p className="text-xs sm:text-sm text-slate-600">{subtitle}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {onToggleTimed && (
          <button
            onClick={onToggleTimed}
            aria-pressed={timedMode}
            title={`Timed mode: ${TIMED_SECONDS} seconds per question — real exam pacing`}
            className={`rounded-xl px-3.5 py-2 text-sm font-bold transition ${
              timedMode
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/25"
                : "border border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:text-emerald-700"
            }`}
          >
            ⏱ Timed {timedMode ? "ON" : "OFF"}
          </button>
        )}
        {score.total > 0 && (
          <div className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            Score so far: {score.correct}/{score.total}
          </div>
        )}
      </div>
    </div>
  );
}
