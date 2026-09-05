"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { LearningTopicSummary } from "@/lib/types";
import { useToast } from "@/components/ui/Toast";

const ICONS: Record<string, string> = {
  heart: "❤️",
  lungs: "🫁",
  stomach: "🍽️",
  kidney: "💧",
  brain: "🧠",
  bone: "🦴",
  hormone: "⚗️",
  skin: "🧴",
  blood: "🩸",
  baby: "🤰",
  compass: "🧭",
  lab: "🧪",
  target: "🎯",
  calc: "🧮",
  pulse: "💓",
};

// Deterministic modern gradient per category so covers feel designed, not random.
const CATEGORY_GRADIENTS: Record<string, string> = {
  "Body Systems": "from-emerald-400/90 via-teal-500/90 to-cyan-600/90",
  "Obstetric & Reproductive": "from-rose-400/90 via-pink-500/90 to-fuchsia-600/90",
  "Nursing Process": "from-violet-400/90 via-purple-500/90 to-indigo-600/90",
  "Quick Reference": "from-amber-400/90 via-orange-500/90 to-rose-500/90",
};
const FALLBACK_GRADIENTS = [
  "from-amber-400/90 via-orange-500/90 to-rose-500/90",
  "from-sky-400/90 via-blue-500/90 to-indigo-600/90",
  "from-lime-400/90 via-emerald-500/90 to-teal-600/90",
];

function gradientFor(category: string) {
  if (CATEGORY_GRADIENTS[category]) return CATEGORY_GRADIENTS[category];
  let hash = 0;
  for (let i = 0; i < category.length; i++) hash = (hash * 31 + category.charCodeAt(i)) >>> 0;
  return FALLBACK_GRADIENTS[hash % FALLBACK_GRADIENTS.length];
}

export default function LearningLibrary({ initial }: { initial: LearningTopicSummary[] }) {
  const [topics, setTopics] = useState(initial);
  const [category, setCategory] = useState<string>("all");
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const [query, setQuery] = useState("");
  const toast = useToast();

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    for (const t of initial) counts.set(t.category, (counts.get(t.category) ?? 0) + 1);
    return [
      { name: "all", count: initial.length },
      ...Array.from(counts.entries()).map(([name, count]) => ({ name, count })),
    ];
  }, [initial]);

  const bookmarkedCount = useMemo(() => topics.filter((t) => t.isBookmarked).length, [topics]);
  const videoCount = useMemo(() => initial.filter((t) => t.videoId).length, [initial]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return topics.filter((t) => {
      if (category !== "all" && t.category !== category) return false;
      if (onlyBookmarked && !t.isBookmarked) return false;
      if (q && !`${t.title} ${t.summary} ${t.category}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [topics, category, onlyBookmarked, query]);

  async function toggleBookmark(e: React.MouseEvent, topic: LearningTopicSummary) {
    e.preventDefault();
    e.stopPropagation();
    const next = !topic.isBookmarked;
    setTopics((list) => list.map((t) => (t.id === topic.id ? { ...t, isBookmarked: next } : t)));
    try {
      const res = await fetch(`/api/learning/${topic.id}/bookmark`, { method: next ? "POST" : "DELETE" });
      if (!res.ok) throw new Error("Failed");
    } catch {
      setTopics((list) => list.map((t) => (t.id === topic.id ? { ...t, isBookmarked: !next } : t)));
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
              placeholder="Search body systems, notes, conditions…"
              className="w-full rounded-2xl border border-white/10 bg-white/10 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-400 outline-none backdrop-blur transition focus:border-emerald-400/60 focus:bg-white/15"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur">
              📚 {initial.length} topics
            </span>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur">
              ▶ {videoCount} videos
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
            {c.name === "all" ? "All topics" : c.name}
            <span className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] ${category === c.name ? "bg-white/20" : "bg-slate-100 text-slate-500"}`}>
              {c.count}
            </span>
          </button>
        ))}
      </div>

      {/* Topic cards */}
      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
          <div className="text-4xl">🔎</div>
          <h3 className="mt-3 text-base font-bold text-slate-900">No topics found</h3>
          <p className="mt-1 text-sm text-slate-500">
            {onlyBookmarked ? "You haven't saved any topics matching this filter yet." : "Try a different search or category."}
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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((topic) => (
            <Link
              key={topic.id}
              href={`/dashboard/learning/${topic.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-600/10"
            >
              <div className="relative h-36 w-full shrink-0 overflow-hidden">
                {topic.imageUrl ? (
                  <Image
                    src={topic.imageUrl}
                    alt={`${topic.title} diagram`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradientFor(topic.category)}`}>
                    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/25 text-4xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      {ICONS[topic.icon] ?? "📘"}
                    </span>
                  </div>
                )}
                {topic.videoId && (
                  <span className="absolute bottom-2.5 left-2.5 flex items-center gap-1 rounded-full bg-slate-950/70 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur">
                    <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-rose-500 text-[7px]">▶</span>
                    Video
                  </span>
                )}
                <button
                  onClick={(e) => toggleBookmark(e, topic)}
                  aria-label={topic.isBookmarked ? `Remove ${topic.title} bookmark` : `Bookmark ${topic.title}`}
                  aria-pressed={topic.isBookmarked}
                  className={`absolute right-2.5 top-2.5 grid h-8 w-8 place-items-center rounded-full text-sm shadow-md backdrop-blur transition-all hover:scale-110 active:scale-95 ${
                    topic.isBookmarked ? "bg-amber-400 text-white" : "bg-white/90 text-slate-400 hover:text-amber-500"
                  }`}
                >
                  {topic.isBookmarked ? "🔖" : "📑"}
                </button>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">{topic.category}</p>
                <h3 className="mt-1 text-base font-extrabold tracking-tight text-slate-900 transition-colors group-hover:text-emerald-700">
                  {topic.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">{topic.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-emerald-700 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Open topic <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
