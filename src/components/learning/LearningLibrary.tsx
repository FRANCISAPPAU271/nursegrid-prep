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
};

export default function LearningLibrary({ initial }: { initial: LearningTopicSummary[] }) {
  const [topics, setTopics] = useState(initial);
  const [category, setCategory] = useState<string>("all");
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const toast = useToast();

  const categories = useMemo(() => ["all", ...Array.from(new Set(initial.map((t) => t.category)))], [initial]);

  const filtered = useMemo(() => {
    return topics.filter((t) => {
      if (category !== "all" && t.category !== category) return false;
      if (onlyBookmarked && !t.isBookmarked) return false;
      return true;
    });
  }, [topics, category, onlyBookmarked]);

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
      <div className="mb-5 flex flex-wrap items-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold capitalize transition ${
              category === c ? "border-emerald-600 bg-emerald-600 text-white" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
            }`}
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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((topic) => (
          <Link
            key={topic.id}
            href={`/dashboard/learning/${topic.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
          >
            <div className="relative h-32 w-full shrink-0 bg-slate-50">
              {topic.imageUrl ? (
                <Image src={topic.imageUrl} alt={`${topic.title} diagram`} fill className="object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-4xl">{ICONS[topic.icon] ?? "📘"}</div>
              )}
              {topic.videoId && (
                <span className="absolute bottom-2 right-2 rounded-full bg-slate-950/70 px-2 py-1 text-[10px] font-bold text-white">
                  ▶ Video
                </span>
              )}
              <button
                onClick={(e) => toggleBookmark(e, topic)}
                aria-label={topic.isBookmarked ? `Remove ${topic.title} bookmark` : `Bookmark ${topic.title}`}
                aria-pressed={topic.isBookmarked}
                className={`absolute top-2 right-2 grid h-7 w-7 place-items-center rounded-full bg-white/90 text-sm shadow ${
                  topic.isBookmarked ? "text-amber-500" : "text-slate-400"
                }`}
              >
                {topic.isBookmarked ? "🔖" : "📑"}
              </button>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">{topic.category}</p>
              <h3 className="mt-1 text-base font-bold text-slate-900 group-hover:text-emerald-700">{topic.title}</h3>
              <p className="mt-1.5 line-clamp-2 flex-1 text-sm text-slate-600">{topic.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
