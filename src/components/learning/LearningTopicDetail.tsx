"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { LearningTopicDetail as LearningTopicDetailType } from "@/lib/types";
import { useToast } from "@/components/ui/Toast";

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
      <div className="mb-6 flex flex-col gap-1">
        <Link href="/dashboard/learning" className="text-xs font-semibold text-emerald-700 hover:underline">
          ← Learning Library
        </Link>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">{topic.category}</p>
            <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">{topic.title}</h1>
            <p className="mt-1 text-slate-600">{topic.summary}</p>
          </div>
          <button
            onClick={toggleBookmark}
            className={`shrink-0 rounded-full border px-3 py-2 text-sm font-semibold ${
              topic.isBookmarked ? "border-amber-300 bg-amber-50 text-amber-700" : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
            }`}
          >
            {topic.isBookmarked ? "🔖 Saved" : "📑 Save"}
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {topic.imageUrl && (
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="relative h-64 w-full sm:h-80">
                <Image src={topic.imageUrl} alt={topic.title} fill className="object-cover" />
              </div>
            </div>
          )}

          {topic.videoId && (
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
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
                <div className="border-t border-slate-100 px-4 py-2 text-xs text-slate-500">
                  {topic.videoTitle}
                  {topic.videoSource ? ` · ${topic.videoSource}` : ""}
                </div>
              )}
            </div>
          )}

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-base font-bold text-slate-950">Overview</h2>
            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700">{topic.overview}</p>
          </div>

          {topic.keyStructures.length > 0 && (
            <Section title="Key structures & anatomy" icon="🧬">
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-slate-700">
                {topic.keyStructures.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Section>
          )}

          {topic.nursingNotes.length > 0 && (
            <Section title="Simple nursing notes" icon="📝" tone="emerald">
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-emerald-900">
                {topic.nursingNotes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Section>
          )}

          {topic.redFlags.length > 0 && (
            <Section title="Priority / red-flag findings" icon="🚩" tone="rose">
              <ul className="list-disc space-y-1.5 pl-5 text-sm text-rose-900">
                {topic.redFlags.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Section>
          )}
        </div>

        <div className="space-y-6">
          {topic.normalFindings.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-sm font-bold text-slate-950">Normal findings</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
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
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-sm font-bold text-slate-950">Common conditions</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {topic.commonConditions.map((item, i) => (
                  <span key={i} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {topic.category === "Nursing Process" && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h2 className="text-sm font-bold text-emerald-900">Put it into practice</h2>
              <p className="mt-1 text-sm text-emerald-800">
                Use the Care Plans tool to build your own ADPIE-structured care plan for a clinical client.
              </p>
              <Link
                href="/dashboard/care-plans"
                className="mt-3 inline-block rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
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
      ? "border-emerald-200 bg-emerald-50"
      : tone === "rose"
        ? "border-rose-200 bg-rose-50"
        : "border-slate-200 bg-white";
  return (
    <div className={`rounded-2xl border p-6 ${toneClasses}`}>
      <h2 className="flex items-center gap-2 text-base font-bold text-slate-950">
        <span>{icon}</span> {title}
      </h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
