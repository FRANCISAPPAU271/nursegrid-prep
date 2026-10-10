"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/Toast";

const SCALE = [
  { value: 1, label: "Strongly disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly agree" },
];

export default function EvaluationForm({
  courseSlug,
  items,
  commentPrompt,
}: {
  courseSlug: string;
  items: { id: string; prompt: string }[];
  commentPrompt: string;
}) {
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [comment, setComment] = useState("");
  const [busy, setBusy] = useState(false);
  const router = useRouter();
  const toast = useToast();
  const complete = items.every((i) => ratings[i.id]);

  async function submit() {
    if (!complete) {
      toast.push("Please rate every statement.", "error");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch(`/api/courses/${courseSlug}/evaluation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ratings, comment }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Unable to submit the evaluation");
      toast.push("Thank you — your certificate is ready.", "success");
      router.push(`/dashboard/courses/${courseSlug}/certificate`);
      router.refresh();
    } catch (err) {
      toast.push(err instanceof Error ? err.message : "Unable to submit the evaluation", "error");
      setBusy(false);
    }
  }

  return (
    <div className="space-y-5">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="hidden grid-cols-[1fr_repeat(5,minmax(0,72px))] gap-2 border-b border-slate-200 bg-slate-50 px-5 py-3 text-[11px] font-bold uppercase tracking-wide text-slate-500 md:grid">
          <span>Statement</span>
          {SCALE.map((s) => (
            <span key={s.value} className="text-center">
              {s.label}
            </span>
          ))}
        </div>
        {items.map((item, idx) => (
          <fieldset key={item.id} className={`grid gap-3 px-5 py-4 md:grid-cols-[1fr_repeat(5,minmax(0,72px))] md:items-center ${idx > 0 ? "border-t border-slate-100" : ""}`}>
            <legend className="sr-only">{item.prompt}</legend>
            <p className="text-sm font-semibold text-slate-900">{item.prompt}</p>
            <div className="contents">
              {SCALE.map((s) => {
                const active = ratings[item.id] === s.value;
                return (
                  <label key={s.value} className="flex cursor-pointer items-center gap-2 md:justify-center">
                    <input
                      type="radio"
                      name={item.id}
                      value={s.value}
                      checked={active}
                      onChange={() => setRatings((r) => ({ ...r, [item.id]: s.value }))}
                      className="h-4 w-4 accent-emerald-600"
                    />
                    <span className="text-xs text-slate-600 md:hidden">{s.label}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div>
        <label htmlFor="evaluation-comment" className="block text-sm font-semibold text-slate-900">
          {commentPrompt} <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <textarea
          id="evaluation-comment"
          value={comment}
          onChange={(e) => setComment(e.target.value.slice(0, 2000))}
          rows={4}
          className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
          placeholder="Your comments go straight to the NurseGrid content team."
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-slate-500">{Object.keys(ratings).length} of {items.length} statements rated</p>
        <button
          onClick={submit}
          disabled={busy || !complete}
          className="rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {busy ? "Submitting…" : "Submit evaluation and get certificate →"}
        </button>
      </div>
    </div>
  );
}
