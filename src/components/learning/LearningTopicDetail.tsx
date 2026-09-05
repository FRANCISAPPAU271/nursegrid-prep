"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { LearningTopicDetail as LearningTopicDetailType } from "@/lib/types";
import { useToast } from "@/components/ui/Toast";
import Watermark from "@/components/ui/Watermark";

export default function LearningTopicDetail({ initial }: { initial: LearningTopicDetailType }) {
  const [topic, setTopic] = useState(initial);
  const [busy, setBusy] = useState(false);
  const toast = useToast();

  async function toggleBookmark() {
    if (busy) return;
    setBusy(true);
    const next = !topic.isBookmarked;
    setTopic((t) => ({ ...t, isBookmarked: next }));
    try {
      const res = await fetch(`/api/learning/${topic.id}/bookmark`, { method: next ? "POST" : "DELETE" });
      if (!res.ok) throw new Error("Failed");
    } catch {
      setTopic((t) => ({ ...t, isBookmarked: !next }));
      toast.push("Failed to update bookmark", "error");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      {/* Modern gradient hero header */}
      <div className="relative mb-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-6 sm:p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-teal-400/10 blur-3xl"
        />
        <div className="relative">
          <Link
            href="/dashboard/learning"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur transition hover:bg-white/15"
          >
            ← Learning Library
          </Link>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                {topic.category}
              </span>
              <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{topic.title}</h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">{topic.summary}</p>
            </div>
            <button
              onClick={toggleBookmark}
              aria-pressed={topic.isBookmarked}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-bold backdrop-blur transition-all hover:scale-105 active:scale-95 ${
                topic.isBookmarked
                  ? "border-amber-300/60 bg-amber-400/20 text-amber-200"
                  : "border-white/15 bg-white/10 text-slate-200 hover:bg-white/15"
              }`}
            >
              {topic.isBookmarked ? "🔖 Saved" : "📑 Save topic"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="relative secure-content space-y-6 lg:col-span-2">
          <Watermark />
          {topic.imageUrl && (
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative h-64 w-full sm:h-80">
                <Image src={topic.imageUrl} alt={topic.title} fill className="object-cover" />
              </div>
            </div>
          )}

          {topic.videoId && (
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${topic.videoId}`}
                  title={topic.videoTitle ?? topic.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              {topic.videoTitle && (
                <div className="flex items-center gap-2 border-t border-slate-100 px-4 py-2.5 text-xs text-slate-500">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-rose-100 text-[9px] text-rose-600">▶</span>
                  <span className="font-medium text-slate-600">{topic.videoTitle}</span>
                  {topic.videoSource ? <span className="text-slate-400">· {topic.videoSource}</span> : null}
                </div>
              )}
            </div>
          )}

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2.5 text-base font-extrabold tracking-tight text-slate-950">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 text-lg">📖</span>
              Overview
            </h2>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-700">{topic.overview}</p>
          </div>

          {topic.keyStructures.length > 0 && (
            <Section title="Key structures & anatomy" icon="🧬">
              <ul className="space-y-2 text-sm text-slate-700">
                {topic.keyStructures.map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {topic.nursingNotes.length > 0 && (
            <Section title="Simple nursing notes" icon="📝" tone="emerald">
              <ul className="space-y-2 text-sm text-emerald-900">
                {topic.nursingNotes.map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {topic.redFlags.length > 0 && (
            <Section title="Priority / red-flag findings" icon="🚩" tone="rose">
              <ul className="space-y-2 text-sm text-rose-900">
                {topic.redFlags.map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}
        </div>

        <div className="space-y-6">
          {topic.normalFindings.length > 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="flex items-center gap-2 text-sm font-extrabold tracking-tight text-slate-950">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-100 text-sm">✅</span>
                Normal findings
              </h2>
              <ul className="mt-3 space-y-2.5 text-sm text-slate-700">
                {topic.normalFindings.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-emerald-500">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {topic.commonConditions.length > 0 && (
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="flex items-center gap-2 text-sm font-extrabold tracking-tight text-slate-950">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-sky-100 text-sm">🩺</span>
                Common conditions
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {topic.commonConditions.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Study smarter card */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-emerald-600 to-teal-700 p-5 text-white shadow-sm">
            <h2 className="text-sm font-extrabold tracking-tight">⚡ Study smarter</h2>
            <p className="mt-1.5 text-sm text-emerald-50">
              Lock this topic in — practice targeted questions and flip flashcards on what you just read.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/dashboard/practice"
                className="rounded-xl bg-white px-4 py-2.5 text-center text-sm font-bold text-emerald-700 transition hover:bg-emerald-50"
              >
                Practice questions →
              </Link>
              <Link
                href="/dashboard/flashcards"
                className="rounded-xl border border-white/30 bg-white/10 px-4 py-2.5 text-center text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Review flashcards
              </Link>
            </div>
          </div>

          {topic.category === "Nursing Process" && (
            <div className="rounded-3xl border border-violet-200 bg-violet-50 p-5">
              <h2 className="text-sm font-extrabold tracking-tight text-violet-900">🗂️ Put it into practice</h2>
              <p className="mt-1 text-sm text-violet-800">
                Use the Care Plans tool to build your own ADPIE-structured care plan for a clinical client.
              </p>
              <Link
                href="/dashboard/care-plans"
                className="mt-3 inline-block rounded-xl bg-violet-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-violet-700"
              >
                Open Care Plans →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  icon,
  tone = "default",
  children,
}: {
  title: string;
  icon: string;
  tone?: "default" | "emerald" | "rose";
  children: React.ReactNode;
}) {
  const toneClasses =
    tone === "emerald"
      ? "border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50/50"
      : tone === "rose"
        ? "border-rose-200 bg-gradient-to-br from-rose-50 to-orange-50/50"
        : "border-slate-200 bg-white";
  const iconBg = tone === "emerald" ? "bg-emerald-100" : tone === "rose" ? "bg-rose-100" : "bg-gradient-to-br from-slate-100 to-slate-200";
  return (
    <div className={`rounded-3xl border p-6 shadow-sm ${toneClasses}`}>
      <h2 className="flex items-center gap-2.5 text-base font-extrabold tracking-tight text-slate-950">
        <span className={`grid h-9 w-9 place-items-center rounded-xl text-lg ${iconBg}`}>{icon}</span>
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
