"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/Toast";

type NextActivity = { slug: string; title: string; href: string; kind: string } | null;

/**
 * Marks the lesson "started" when it opens and offers the HLC-style
 * "Complete and continue" button at the end. Completion is recorded on the
 * server, which also enforces the in-order rule.
 */
export default function LessonProgress({
  courseSlug,
  lessonSlug,
  initiallyCompleted,
  nextHref,
  nextTitle,
}: {
  courseSlug: string;
  lessonSlug: string;
  initiallyCompleted: boolean;
  nextHref: string | null;
  nextTitle: string | null;
}) {
  const [completed, setCompleted] = useState(initiallyCompleted);
  const [next, setNext] = useState<NextActivity>(nextHref ? { slug: "", title: nextTitle ?? "Next activity", href: nextHref, kind: "" } : null);
  const [busy, setBusy] = useState(false);
  const started = useRef(false);
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    if (started.current || initiallyCompleted) return;
    started.current = true;
    fetch(`/api/courses/${courseSlug}/activities/${lessonSlug}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "start" }),
    }).catch(() => undefined);
  }, [courseSlug, lessonSlug, initiallyCompleted]);

  async function complete() {
    setBusy(true);
    try {
      const res = await fetch(`/api/courses/${courseSlug}/activities/${lessonSlug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "complete" }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Unable to save your progress");
      setCompleted(true);
      setNext(data.nextActivity ?? null);
      toast.push("Lesson completed.", "success");
      router.refresh();
      if (data.nextActivity?.href) router.push(data.nextActivity.href);
      else router.push(`/dashboard/courses/${courseSlug}`);
    } catch (err) {
      toast.push(err instanceof Error ? err.message : "Unable to save your progress", "error");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
      {completed ? (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-extrabold text-emerald-900">✓ You have completed this learning activity.</p>
            <p className="text-xs text-emerald-800">You can review it any time — it stays on your transcript.</p>
          </div>
          <div className="flex gap-2">
            {next?.href && (
              <Link href={next.href} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-700">
                Continue → {next.title}
              </Link>
            )}
            <Link href={`/dashboard/courses/${courseSlug}`} className="rounded-lg border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-100">
              Course details
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-extrabold text-emerald-900">Finished reading?</p>
            <p className="text-xs text-emerald-800">Mark this activity complete to unlock the next one. Try the practice questions above first.</p>
          </div>
          <button
            onClick={complete}
            disabled={busy}
            className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 disabled:opacity-60"
          >
            {busy ? "Saving…" : "Complete and continue →"}
          </button>
        </div>
      )}
    </div>
  );
}
