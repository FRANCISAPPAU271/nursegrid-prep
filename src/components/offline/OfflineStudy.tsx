"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useToast } from "@/components/ui/Toast";
import Watermark from "@/components/ui/Watermark";

// ---------------------------------------------------------------------------
// Offline / low-data study mode.
//
// Students in Ghana often face expensive data and unstable connections. This
// page lets them download a pack of questions (with rationales) to the
// device's localStorage, practice with ZERO network usage, and sync attempts
// back to the server automatically when the connection returns.
// ---------------------------------------------------------------------------

const PACK_KEY = "nsg-offline-pack-v1";
const QUEUE_KEY = "nsg-offline-attempts-v1";

type PackQuestion = {
  id: string;
  stem: string;
  choices: { id: string; text: string }[];
  correctChoiceId: string;
  rationale: string;
  strategy: string;
  difficulty: string;
  categoryName: string;
};

type Pack = { downloadedAt: string; isPremium: boolean; questions: PackQuestion[] };
type QueuedAttempt = { questionId: string; selectedChoiceId: string; queuedAt: string };

function loadPack(): Pack | null {
  try {
    const raw = localStorage.getItem(PACK_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Pack;
    if (!Array.isArray(parsed.questions) || parsed.questions.length === 0) return null;
    return parsed;
  } catch {
    return null;
  }
}

function loadQueue(): QueuedAttempt[] {
  try {
    const raw = localStorage.getItem(QUEUE_KEY);
    return raw ? (JSON.parse(raw) as QueuedAttempt[]) : [];
  } catch {
    return [];
  }
}

function saveQueue(queue: QueuedAttempt[]) {
  try {
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  } catch {
    /* storage full — attempts stay in memory for the session */
  }
}

export default function OfflineStudy() {
  const [pack, setPack] = useState<Pack | null>(null);
  const [queue, setQueue] = useState<QueuedAttempt[]>([]);
  const [online, setOnline] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);
  const toast = useToast();

  useEffect(() => {
    setPack(loadPack());
    setQueue(loadQueue());
    setOnline(navigator.onLine);
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);
    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);
    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  const syncQueue = useCallback(
    async (silent = false) => {
      const pending = loadQueue();
      if (pending.length === 0) return;
      setSyncing(true);
      let synced = 0;
      let stopIndex = pending.length; // everything before this index was handled
      for (let i = 0; i < pending.length; i++) {
        const attempt = pending[i];
        try {
          const res = await fetch(`/api/questions/${attempt.questionId}/attempt`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ selectedChoiceId: attempt.selectedChoiceId }),
          });
          if (res.ok) {
            synced += 1;
          } else if (res.status === 401) {
            stopIndex = i; // not logged in — keep this and the rest for later
            break;
          }
          // Other errors (403/404 etc.): drop the attempt rather than retry forever.
        } catch {
          stopIndex = i; // network broke — keep this and the rest
          break;
        }
      }
      const finalQueue = pending.slice(stopIndex);
      saveQueue(finalQueue);
      setQueue(finalQueue);
      setSyncing(false);
      if (synced > 0 && !silent) toast.push(`Synced ${synced} offline answer${synced === 1 ? "" : "s"} ✓`, "success");
    },
    [toast],
  );

  // Auto-sync whenever we come online with a queue.
  useEffect(() => {
    if (online && queue.length > 0 && !syncing) {
      void syncQueue(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [online]);

  async function downloadPack(limit: number) {
    setDownloading(true);
    try {
      const res = await fetch(`/api/offline-pack?limit=${limit}`);
      if (!res.ok) throw new Error("Download failed");
      const data = (await res.json()) as Pack;
      localStorage.setItem(PACK_KEY, JSON.stringify(data));
      setPack(data);
      setIndex(0);
      setSelected(null);
      setRevealed(false);
      setSessionCorrect(0);
      setSessionTotal(0);
      toast.push(`Downloaded ${data.questions.length} questions for offline study ✓`, "success");
    } catch {
      toast.push("Could not download the pack — check your connection.", "error");
    } finally {
      setDownloading(false);
    }
  }

  function deletePack() {
    localStorage.removeItem(PACK_KEY);
    setPack(null);
    setIndex(0);
    setSelected(null);
    setRevealed(false);
  }

  const question = pack?.questions[index] ?? null;
  const isCorrect = useMemo(
    () => (question && selected ? selected === question.correctChoiceId : null),
    [question, selected],
  );

  function submit() {
    if (!question || !selected || revealed) return;
    setRevealed(true);
    setSessionTotal((t) => t + 1);
    if (selected === question.correctChoiceId) setSessionCorrect((c) => c + 1);
    // Queue the attempt for sync.
    const next: QueuedAttempt = { questionId: question.id, selectedChoiceId: selected, queuedAt: new Date().toISOString() };
    const updated = [...loadQueue(), next];
    saveQueue(updated);
    setQueue(updated);
    // If we're online right now, sync immediately in the background.
    if (navigator.onLine) void syncQueue(true);
  }

  function nextQuestion() {
    if (!pack) return;
    setIndex((i) => (i + 1) % pack.questions.length);
    setSelected(null);
    setRevealed(false);
  }

  return (
    <div>
      {/* Status hero */}
      <div className="mb-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">Low-data mode 📶</p>
            <h2 className="mt-1 text-lg font-extrabold tracking-tight text-white">
              {pack ? `${pack.questions.length} questions on this device` : "No pack downloaded yet"}
            </h2>
            <p className="mt-1 text-sm text-slate-300">
              Download once on Wi-Fi or cheap data, then practice anywhere — answers sync automatically when you reconnect.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur ${
                online ? "border-emerald-300/40 bg-emerald-400/15 text-emerald-300" : "border-amber-300/40 bg-amber-400/15 text-amber-300"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${online ? "bg-emerald-400" : "bg-amber-400"}`} />
              {online ? "Online" : "Offline"}
            </span>
            {queue.length > 0 && (
              <button
                onClick={() => syncQueue(false)}
                disabled={!online || syncing}
                className="rounded-full border border-sky-300/40 bg-sky-400/15 px-3 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur transition hover:bg-sky-400/25 disabled:opacity-50"
              >
                {syncing ? "Syncing…" : `⇅ ${queue.length} answer${queue.length === 1 ? "" : "s"} to sync`}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Download controls */}
      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        {[50, 100].map((n) => (
          <button
            key={n}
            onClick={() => downloadPack(n)}
            disabled={downloading || !online}
            className="rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-600/10 disabled:opacity-50 disabled:hover:translate-y-0"
          >
            <p className="text-2xl">📥</p>
            <p className="mt-2 text-sm font-extrabold text-slate-900">
              {downloading ? "Downloading…" : `Download ${n} questions`}
            </p>
            <p className="mt-1 text-xs text-slate-500">Random mix across categories, with full rationales.</p>
          </button>
        ))}
        {pack && (
          <button
            onClick={deletePack}
            className="rounded-3xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-rose-300"
          >
            <p className="text-2xl">🗑️</p>
            <p className="mt-2 text-sm font-extrabold text-slate-900">Delete pack</p>
            <p className="mt-1 text-xs text-slate-500">
              Downloaded {new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric" }).format(new Date(pack.downloadedAt))} · frees device storage.
            </p>
          </button>
        )}
      </div>

      {/* Practice runner */}
      {question ? (
        <div className="secure-content relative rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <Watermark />
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">{question.categoryName}</span>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold capitalize text-slate-500">{question.difficulty}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span>
                Q {index + 1}/{pack!.questions.length}
              </span>
              {sessionTotal > 0 && (
                <span className="rounded-full bg-slate-100 px-2.5 py-1">
                  {sessionCorrect}/{sessionTotal} correct
                </span>
              )}
            </div>
          </div>

          <p className="mt-4 text-base font-semibold leading-relaxed text-slate-900">{question.stem}</p>

          <div className="mt-4 space-y-2">
            {question.choices.map((choice) => {
              const isSelected = selected === choice.id;
              const isAnswer = revealed && choice.id === question.correctChoiceId;
              const isWrongPick = revealed && isSelected && choice.id !== question.correctChoiceId;
              return (
                <button
                  key={choice.id}
                  onClick={() => !revealed && setSelected(choice.id)}
                  disabled={revealed}
                  className={`w-full rounded-2xl border p-3.5 text-left text-sm transition-all ${
                    isAnswer
                      ? "border-emerald-400 bg-emerald-50 font-semibold text-emerald-900"
                      : isWrongPick
                        ? "border-rose-300 bg-rose-50 text-rose-900"
                        : isSelected
                          ? "border-emerald-500 bg-emerald-50/60 text-slate-900"
                          : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300"
                  }`}
                >
                  <span className="mr-2 font-bold uppercase">{choice.id}.</span>
                  {choice.text}
                  {isAnswer && <span className="ml-2">✓</span>}
                  {isWrongPick && <span className="ml-2">✗</span>}
                </button>
              );
            })}
          </div>

          {!revealed ? (
            <button
              onClick={submit}
              disabled={!selected}
              className="mt-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-600/25 transition-all hover:shadow-lg disabled:opacity-40"
            >
              Submit answer
            </button>
          ) : (
            <div className="animate-fade-in mt-5 space-y-4">
              <div
                className={`rounded-2xl border p-4 ${
                  isCorrect ? "border-emerald-200 bg-emerald-50" : "border-rose-200 bg-rose-50"
                }`}
              >
                <p className={`text-sm font-extrabold ${isCorrect ? "text-emerald-800" : "text-rose-800"}`}>
                  {isCorrect ? "✓ Correct!" : "✗ Not quite"}
                </p>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700">{question.rationale}</p>
              </div>
              {question.strategy && (
                <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-sky-700">🧠 Strategy</p>
                  <p className="mt-1 text-sm leading-relaxed text-sky-900">{question.strategy}</p>
                </div>
              )}
              <button
                onClick={nextQuestion}
                className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-600/25 transition-all hover:shadow-lg"
              >
                Next question →
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
          <div className="text-4xl">📶</div>
          <h3 className="mt-3 text-base font-bold text-slate-900">Download a pack to begin</h3>
          <p className="mx-auto mt-1 max-w-md text-sm text-slate-500">
            Grab 50 or 100 questions while you have a connection — then study them anywhere, even with zero network. Your
            answers count toward your Readiness Score once you're back online.
          </p>
        </div>
      )}
    </div>
  );
}
