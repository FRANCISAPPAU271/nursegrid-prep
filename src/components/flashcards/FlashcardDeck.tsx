"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { SkeletonList } from "@/components/ui/Skeleton";
import { useToast } from "@/components/ui/Toast";
import Watermark from "@/components/ui/Watermark";

type Card = {
  questionId: string;
  box: number;
  timesSeen: number;
  timesCorrect: number;
  stem: string;
  choices: { id: string; text: string }[];
  correctChoiceId: string;
  rationale: string;
  strategy: string;
  difficulty: string;
  categoryName: string;
};

type Stats = { total: number; due: number; mastered: number; learning: number };

const BOX_LABEL: Record<number, string> = {
  1: "Learning",
  2: "Getting there",
  3: "Familiar",
  4: "Almost mastered",
  5: "Mastered",
};

export default function FlashcardDeck() {
  const [cards, setCards] = useState<Card[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [grading, setGrading] = useState(false);
  const [session, setSession] = useState({ reviewed: 0, knew: 0 });
  const toast = useToast();

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/flashcards?limit=30");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Could not load your deck");
      setCards(data.cards);
      setStats(data.stats);
      setIndex(0);
      setFlipped(false);
    } catch (e) {
      toast.push(e instanceof Error ? e.message : "Could not load your deck", "error");
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const current = cards[index];

  const grade = async (gotIt: boolean) => {
    if (!current || grading) return;
    setGrading(true);
    try {
      const res = await fetch("/api/flashcards/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionId: current.questionId, gotIt }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Could not save review");
      setSession((s) => ({ reviewed: s.reviewed + 1, knew: s.knew + (gotIt ? 1 : 0) }));
      if (data.mastered && gotIt) toast.push("Card mastered! 🎓 It graduates from your deck rotation.", "success");
      setFlipped(false);
      setIndex((i) => i + 1);
    } catch (e) {
      toast.push(e instanceof Error ? e.message : "Could not save review", "error");
    } finally {
      setGrading(false);
    }
  };

  if (loading) return <SkeletonList count={3} />;

  const done = !current;
  const correctIds = current ? current.correctChoiceId.split(",") : [];
  const correctChoices = current ? current.choices.filter((c) => correctIds.includes(c.id)) : [];

  return (
    <div className="space-y-5">
      {/* Stats strip */}
      {stats && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard label="Cards in deck" value={stats.total} tone="text-slate-950" />
          <StatCard label="Due now" value={stats.due} tone="text-amber-600" />
          <StatCard label="Still learning" value={stats.learning} tone="text-rose-600" />
          <StatCard label="Mastered" value={stats.mastered} tone="text-emerald-600" />
        </div>
      )}

      {done ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <p className="text-3xl">{stats && stats.total === 0 ? "🃏" : "✅"}</p>
          {stats && stats.total === 0 ? (
            <>
              <h3 className="mt-3 text-lg font-bold text-slate-950">Your deck builds itself</h3>
              <p className="mx-auto mt-1 max-w-md text-sm text-slate-600">
                Every question you get wrong in practice, exams, or mocks automatically becomes a flashcard here.
                Go answer some questions — your misses will be waiting.
              </p>
              <Link
                href="/dashboard/questions"
                className="mt-5 inline-block rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
              >
                Start practicing →
              </Link>
            </>
          ) : (
            <>
              <h3 className="mt-3 text-lg font-bold text-slate-950">
                {session.reviewed > 0
                  ? `Session done — ${session.knew}/${session.reviewed} recalled correctly`
                  : "All caught up!"}
              </h3>
              <p className="mx-auto mt-1 max-w-md text-sm text-slate-600">
                No more cards due right now. Spaced repetition works because of the spacing — come back tomorrow
                and the next batch will be ready.
              </p>
              <button
                onClick={load}
                className="mt-5 rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Check again
              </button>
            </>
          )}
        </div>
      ) : (
        <>
          {/* Card */}
          <div className="relative secure-content rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <Watermark />
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                  {current.categoryName}
                </span>
                <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-[11px] font-semibold text-indigo-700">
                  Box {current.box} · {BOX_LABEL[current.box]}
                </span>
              </div>
              <span className="text-xs font-medium text-slate-400">
                Card {index + 1} of {cards.length}
              </span>
            </div>

            <p className="text-base leading-relaxed text-slate-900">{current.stem}</p>

            {!flipped ? (
              <>
                <ul className="mt-4 space-y-2">
                  {current.choices.map((c) => (
                    <li key={c.id} className="rounded-lg border border-slate-200 px-3.5 py-2.5 text-sm text-slate-700">
                      {c.text}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setFlipped(true)}
                  className="mt-5 w-full rounded-xl bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-800"
                >
                  Flip card — show answer
                </button>
                <p className="mt-2 text-center text-xs text-slate-400">Say your answer out loud first. No guessing credit here — this is recall training.</p>
              </>
            ) : (
              <>
                <div className="mt-4 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3">
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                    {correctChoices.length > 1 ? "Answers (select all that apply)" : "Answer"}
                  </p>
                  {correctChoices.map((c) => (
                    <p key={c.id} className="mt-1 text-sm font-semibold text-emerald-900">✓ {c.text}</p>
                  ))}
                </div>
                <div className="mt-3 rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Rationale</p>
                  <p className="mt-1 text-sm text-slate-700">{current.rationale}</p>
                  <p className="mt-3 text-xs font-bold uppercase tracking-wide text-emerald-700">🎯 Strategy</p>
                  <p className="mt-1 text-sm text-slate-700">{current.strategy}</p>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button
                    onClick={() => grade(false)}
                    disabled={grading}
                    className="rounded-xl border-2 border-rose-300 bg-rose-50 py-3 text-sm font-bold text-rose-700 hover:bg-rose-100 disabled:opacity-60"
                  >
                    ✕ Still shaky
                    <span className="block text-[11px] font-medium text-rose-500">back to box 1 · again in 10 min</span>
                  </button>
                  <button
                    onClick={() => grade(true)}
                    disabled={grading}
                    className="rounded-xl border-2 border-emerald-400 bg-emerald-50 py-3 text-sm font-bold text-emerald-700 hover:bg-emerald-100 disabled:opacity-60"
                  >
                    ✓ I knew it
                    <span className="block text-[11px] font-medium text-emerald-600">
                      moves to box {Math.min(current.box + 1, 5)}
                    </span>
                  </button>
                </div>
              </>
            )}
          </div>

          {session.reviewed > 0 && (
            <p className="text-center text-xs font-semibold text-slate-500">
              This session: {session.knew}/{session.reviewed} recalled correctly
            </p>
          )}
        </>
      )}

      <p className="text-xs text-slate-400">
        How it works: miss a question anywhere in the app and it joins your deck. Recall it correctly and it moves
        up a box (1 → 3 → 7 → 14 → 30 days between reviews). Miss it and it starts over. Box 5 = mastered.
      </p>
    </div>
  );
}

function StatCard({ label, value, tone }: { label: string; value: number; tone: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
      <p className={`text-2xl font-extrabold ${tone}`}>{value.toLocaleString()}</p>
      <p className="text-xs font-medium text-slate-500">{label}</p>
    </div>
  );
}
