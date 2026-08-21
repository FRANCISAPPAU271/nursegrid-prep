"use client";

import { useState, type FormEvent } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "landing" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      setStatus("done");
      setMessage(data.alreadyJoined ? "You're already on the list!" : "You're on the list! We'll email you exam tips and new features.");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-xl bg-emerald-600/10 px-4 py-3 text-sm font-semibold text-emerald-800">✅ {message}</div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@nursingschool.edu"
        className="w-full flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-70"
      >
        {status === "loading" ? "Joining…" : "Join the waitlist"}
      </button>
      {status === "error" && <p className="text-xs font-medium text-rose-600 sm:hidden">{message}</p>}
    </form>
  );
}
