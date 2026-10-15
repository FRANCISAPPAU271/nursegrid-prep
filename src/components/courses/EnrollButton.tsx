"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/Toast";

export default function EnrollButton({ courseSlug, label = "Enroll", className = "" }: { courseSlug: string; label?: string; className?: string }) {
  const [busy, setBusy] = useState(false);
  const router = useRouter();
  const toast = useToast();

  async function enroll() {
    setBusy(true);
    try {
      const res = await fetch(`/api/courses/${courseSlug}/enroll`, { method: "POST" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "Unable to enrol");
      toast.push("Added to your To-Do list. Work through the learning activities in order.", "success");
      router.push(`/dashboard/courses/${courseSlug}`);
      router.refresh();
    } catch (err) {
      toast.push(err instanceof Error ? err.message : "Unable to enrol", "error");
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      onClick={enroll}
      disabled={busy}
      className={`rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 disabled:opacity-60 ${className}`}
    >
      {busy ? "Enrolling…" : label}
    </button>
  );
}
