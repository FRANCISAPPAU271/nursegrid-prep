"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/Toast";

export default function PostTestLauncher({
  courseSlug,
  resume,
  disabled,
}: {
  courseSlug: string;
  resume: boolean;
  disabled?: boolean;
}) {
  const [busy, setBusy] = useState(false);
  const router = useRouter();
  const toast = useToast();

  async function start() {
    setBusy(true);
    try {
      const res = await fetch(`/api/courses/${courseSlug}/post-test`, { method: "POST" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Unable to start the post-test");
      router.push(`/dashboard/exams/${data.examId}?course=${encodeURIComponent(courseSlug)}`);
    } catch (err) {
      toast.push(err instanceof Error ? err.message : "Unable to start the post-test", "error");
      setBusy(false);
    }
  }

  return (
    <button
      onClick={start}
      disabled={busy || disabled}
      className="rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {busy ? "Preparing your test…" : resume ? "Resume Test →" : "Start Test →"}
    </button>
  );
}
