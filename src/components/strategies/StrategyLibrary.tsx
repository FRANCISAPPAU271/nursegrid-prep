"use client";

import { useMemo, useState } from "react";
import type { Strategy } from "@/lib/types";
import { useToast } from "@/components/ui/Toast";

const ICONS: Record<string, string> = {
  compass: "🧭",
  scale: "⚖️",
  triangle: "🔺",
  clock: "⏱️",
  message: "💬",
  pill: "💊",
  shield: "🛡️",
  eye: "👁️",
  list: "📋",
  target: "🎯",
  layers: "🗂️",
  flag: "🚩",
};

export default function StrategyLibrary({ initial }: { initial: Strategy[] }) {
  const [list, setList] = useState(initial);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [category, setCategory] = useState<string>("all");
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const toast = useToast();

  const categories = useMemo(() => ["all", ...Array.from(new Set(initial.map((s) => s.category)))], [initial]);

  const filtered = useMemo(() => {
    return list.filter((s) => {
      if (category !== "all" && s.category !== category) return false;
      if (onlyBookmarked && !s.isBookmarked) return false;
      return true;
    });
  }, [list, category, onlyBookmarked]);

  async function toggleBookmark(s: Strategy) {
    const next = !s.isBookmarked;
    setList((items) => items.map((item) => (item.id === s.id ? { ...item, isBookmarked: next } : item)));
    try {
      const res = await fetch(`/api/strategies/${s.id}/bookmark`, { method: next ? "POST" : "DELETE" });
      if (!res.ok) throw new Error("Failed");
    } catch {
      setList((items) => items.map((item) => (item.id === s.id ? { ...item, isBookmarked: !next } : item)));
      toast.push("Failed to update bookmark", "error");
    }
  }

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold capitalize transition ${
              category === c ? "bg-emerald-600 text-white" : "bg-white text-slate-600 hover:bg-slate-100"
            } border border-slate-200`}
          >
            {c}
          </button>
        ))}
        <button
          onClick={() => setOnlyBookmarked((v) => !v)}
          className={`ml-auto rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
            onlyBookmarked ? "border-amber-400 bg-amber-100 text-amber-700" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
          }`}
        >
          🔖 Bookmarked only
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((s) => {
          const isOpen = expanded === s.id;
          return (
            <div key={s.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-xl">
                    {ICONS[s.icon] ?? "🧭"}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">{s.category}</p>
                    <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
                  </div>
                </div>
                <button
                  onClick={() => toggleBookmark(s)}
                  className={`text-lg ${s.isBookmarked ? "text-amber-500" : "text-slate-300 hover:text-amber-400"}`}
                >
                  {s.isBookmarked ? "🔖" : "📑"}
                </button>
              </div>
              <p className="mt-3 text-sm text-slate-600">{s.summary}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-slate-400">{s.readTimeMinutes} min read</span>
                <button
                  onClick={() => setExpanded(isOpen ? null : s.id)}
                  className="text-xs font-semibold text-emerald-700 hover:underline"
                >
                  {isOpen ? "Show less" : "Read strategy"}
                </button>
              </div>
              {isOpen && (
                <div className="animate-fade-in mt-4 space-y-4 border-t border-slate-100 pt-4">
                  {s.videoId && (
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                      <div className="relative aspect-video w-full">
                        <iframe
                          src={`https://www.youtube.com/embed/${s.videoId}`}
                          title={s.videoTitle ?? s.title}
                          className="absolute inset-0 h-full w-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      {s.videoTitle && (
                        <div className="px-3 py-2 text-xs font-semibold text-slate-500 bg-white border-t border-slate-100">
                          🎥 Video Lesson: {s.videoTitle}
                        </div>
                      )}
                    </div>
                  )}
                  <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                    {s.content.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                  {s.example && (
                    <div className="mt-3 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-900">
                      <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">Example</p>
                      <p className="mt-1">{s.example}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
