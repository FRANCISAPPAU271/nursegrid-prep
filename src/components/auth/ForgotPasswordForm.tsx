"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/contact";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"email" | "question" | "success">("email");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Step 1: Submit email to retrieve their security question
  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`/api/auth/forgot-password?email=${encodeURIComponent(email)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Could not find account.");
      setQuestion(data.securityQuestion);
      setStep("question");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  // Step 2: Answer the question and reset the password
  async function handleResetSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          securityAnswer: answer,
          newPassword,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to reset password.");
      setStep("success");
      setTimeout(() => router.push("/login"), 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  if (step === "success") {
    return (
      <div className="space-y-4 text-center">
        <div className="rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
          ✅ Password reset successful! Redirecting you to log in…
        </div>
        <Link href="/login" className="text-sm font-semibold text-emerald-700 hover:underline">
          Go to log in now
        </Link>
      </div>
    );
  }

  if (step === "question") {
    return (
      <form onSubmit={handleResetSubmit} className="space-y-4">
        {error && <div className="rounded-lg bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">{error}</div>}
        <div className="rounded-lg bg-slate-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Security Question</p>
          <p className="mt-1 text-sm font-semibold text-slate-800">{question}</p>
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Your answer</label>
          <input
            required
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Answer your security question"
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Choose new password</label>
          <input
            required
            type="password"
            minLength={6}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="At least 6 characters"
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Confirm new password</label>
          <input
            required
            type="password"
            minLength={6}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter your new password"
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setStep("email")}
            className="flex-1 rounded-lg border border-slate-200 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex-1 rounded-lg bg-emerald-600 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-70"
          >
            {loading ? "Resetting…" : "Reset password"}
          </button>
        </div>
        <p className="text-center text-xs text-slate-400">
          Forgot your answer?{" "}
          <a
            href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-700 hover:underline"
          >
            Message support on WhatsApp
          </a>
        </p>
      </form>
    );
  }

  return (
    <form onSubmit={handleEmailSubmit} className="space-y-4">
      {error && <div className="rounded-lg bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">{error}</div>}
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@nursingschool.edu"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-200 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Checking…" : "Find my account"}
      </button>
      <p className="text-center text-sm text-slate-600">
        Remembered your password?{" "}
        <Link href="/login" className="font-semibold text-emerald-700 hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
}
