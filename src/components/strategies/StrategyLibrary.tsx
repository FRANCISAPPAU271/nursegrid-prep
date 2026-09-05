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

// Deterministic modern gradient per category so icon tiles feel designed.
const CATEGORY_GRADIENTS: Record<string, string> = {
  Prioritization: "from-rose-400 to-orange-500",
  Communication: "from-sky-400 to-blue-600",
  Safety: "from-amber-400 to-orange-600",
  Pharmacology: "from-violet-400 to-purple-600",
  Delegation: "from-teal-400 to-cyan-600",
  "Test-Taking Mindset": "from-emerald-400 to-teal-600",
};

function gradientFor(category: string) {
  return CATEGORY_GRADIENTS[category] ?? "from-emerald-400 to-teal-600";
}

export default function StrategyLibrary({ initial }: { initial: Strategy[] }) {
  const [list, setList] = useState(initial);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [category, setCategory] = useState<string>("all");
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const [query, setQuery] = useState("");
  const toast = useToast();

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const s of initial) counts.set(s.category, (counts.get(s.category) ?? 0) + 1);
    return [
      { name: "all", count: initial.length },
      ...Array.from(counts.entries()).map(([name, count]) => ({ name, count })),
    ];
  }, [initial]);

  const bookmarkedCount = useMemo(() => list.filter((s) => s.isBookmarked).length, [list]);
  const totalMinutes = useMemo(() => initial.reduce((sum, s) => sum + (s.readTimeMinutes || 0), 0), [initial]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return list.filter((s) => {
      if (category !== "all" && s.category !== category) return false;
      if (onlyBookmarked && !s.isBookmarked) return false;
      if (q && !`${s.title} ${s.summary} ${s.category}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [list, category, onlyBookmarked, query]);

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
      {/* Hero strip: search + quick stats */}
      <div className="mb-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search strategies, frameworks, categories…"
              className="w-full rounded-2xl border border-white/10 bg-white/10 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-400 outline-none backdrop-blur transition focus:border-emerald-400/60 focus:bg-white/15"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur">
              🎯 {initial.length} strategies
            </span>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur">
              ⏱️ ~{totalMinutes} min total
            </span>
            <button
              onClick={() => setOnlyBookmarked((v) => !v)}
              aria-pressed={onlyBookmarked}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur transition ${
                onlyBookmarked
                  ? "border-amber-300/60 bg-amber-400/20 text-amber-200"
                  : "border-white/10 bg-white/10 text-slate-300 hover:bg-white/15"
              }`}
            >
              🔖 Saved · {bookmarkedCount}
            </button>
          </div>
        </div>
      </div>

      {/* Category pills */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((c) => (
          <button
            key={c.name}
            onClick={() => setCategory(c.name)}
            className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-bold capitalize transition-all ${
              category === c.name
                ? "border-transparent bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/25"
                : "border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700"
            }`}
          >
            {c.name === "all" ? "All strategies" : c.name}
            <span className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] ${category === c.name ? "bg-white/20" : "bg-slate-100 text-slate-500"}`}>
              {c.count}
            </span>
          </button>
        ))}
      </div>

      {/* Strategy cards */}
      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
          <div className="text-4xl">🔎</div>
          <h3 className="mt-3 text-base font-bold text-slate-900">No strategies found</h3>
          <p className="mt-1 text-sm text-slate-500">
            {onlyBookmarked ? "You haven't saved any strategies matching this filter yet." : "Try a different search or category."}
          </p>
          <button
            onClick={() => {
              setQuery("");
              setCategory("all");
              setOnlyBookmarked(false);
            }}
            className="mt-4 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-700"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((s) => {
            const isOpen = expanded === s.id;
            return (
              <div
                key={s.id}
                className={`group rounded-3xl border bg-white p-5 shadow-sm transition-all duration-300 ${
                  isOpen
                    ? "border-emerald-300 shadow-lg shadow-emerald-600/10 md:col-span-2"
                    : "border-slate-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-600/10"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br text-xl text-white shadow-md transition-transform duration-300 group-hover:scale-105 ${gradientFor(s.category)}`}
                    >
                      {ICONS[s.icon] ?? "🧭"}
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">{s.category}</p>
                      <h3 className="text-base font-extrabold tracking-tight text-slate-900">{s.title}</h3>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleBookmark(s)}
                    aria-label={s.isBookmarked ? `Remove ${s.title} bookmark` : `Bookmark ${s.title}`}
                    aria-pressed={s.isBookmarked}
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-sm shadow-sm transition-all hover:scale-110 active:scale-95 ${
                      s.isBookmarked ? "bg-amber-400 text-white" : "bg-slate-100 text-slate-400 hover:text-amber-500"
                    }`}
                  >
                    {s.isBookmarked ? "🔖" : "📑"}
                  </button>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.summary}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-500">
                      ⏱️ {s.readTimeMinutes} min
                    </span>
                    {s.videoId && (
                      <span className="flex items-center gap-1 rounded-full bg-rose-50 px-2.5 py-1 text-[11px] font-semibold text-rose-600">
                        <span className="grid h-3 w-3 place-items-center rounded-full bg-rose-500 text-[6px] text-white">▶</span>
                        Video
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setExpanded(isOpen ? null : s.id)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                      isOpen
                        ? "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        : "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm shadow-emerald-600/25 hover:shadow-md"
                    }`}
                  >
                    {isOpen ? "Show less ↑" : "Read strategy →"}
                  </button>
                </div>
                {isOpen && (
                  <div className="animate-fade-in mt-4 space-y-4 border-t border-slate-100 pt-4">
                    {s.videoId && (
                      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
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
                          <div className="flex items-center gap-2 border-t border-slate-100 bg-white px-3 py-2.5 text-xs text-slate-500">
                            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-rose-100 text-[9px] text-rose-600">▶</span>
                            <span className="font-medium text-slate-600">{s.videoTitle}</span>
                          </div>
                        )}
                      </div>
                    )}
                    <ul className="space-y-2 text-sm text-slate-700">
                      {s.content.map((line, i) => (
                        <li key={i} className="flex gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    {s.example && (
                      <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50/50 p-4 text-sm text-emerald-900">
                        <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700">
                          💡 Example
                        </p>
                        <p className="mt-1.5 leading-relaxed">{s.example}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
