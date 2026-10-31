"use client";

import { useState } from "react";

/**
 * The page an admin opens when a student says "I can't get in".
 *
 * One box for the address, two buttons: mail them a fresh link, or generate a
 * password to read out over the phone. It exists because every automated
 * recovery route depends on something the student may no longer have - access
 * to the mailbox, the answer they set years ago, a linked phone - and when all
 * three fail there was previously nothing anybody could do.
 */
export default function PasswordHelpForm() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState<null | "send-link" | "temp-password">(null);
  const [result, setResult] = useState<{ ok: boolean; title: string; body: string; secret?: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function run(action: "send-link" | "temp-password") {
    setBusy(action);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/admin/password-help", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), action }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error ?? "That did not work.");

      if (action === "send-link") {
        setResult({
          ok: true,
          title: "Reset link sent",
          body: `${data.name || "The student"} will get a link at ${data.sentTo}. It lasts 24 hours. ${data.note ?? ""}`,
        });
      } else {
        setResult({
          ok: true,
          title: "Temporary password created",
          body: `Read this to ${data.name || "the student"} on ${data.email}. All their sessions are signed out.`,
          secret: data.password,
        });
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "That did not work.");
    } finally {
      setBusy(null);
    }
  }

  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-semibold text-slate-700">
          Student&apos;s email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="student@gmail.com"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
        />
      </div>

      {error ? (
        <div className="rounded-lg bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">{error}</div>
      ) : null}

      {result ? (
        <div className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          <p className="font-semibold">{result.title}</p>
          <p className="mt-1 leading-relaxed">{result.body}</p>
          {result.secret ? (
            <p className="mt-3 rounded-lg bg-white px-3 py-2 font-mono text-lg font-bold tracking-wide text-slate-900">
              {result.secret}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          disabled={!email.trim() || busy !== null}
          onClick={() => run("send-link")}
          className="flex-1 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-60"
        >
          {busy === "send-link" ? "Sending…" : "Email a reset link"}
        </button>
        <button
          type="button"
          disabled={!email.trim() || busy !== null}
          onClick={() => run("temp-password")}
          className="flex-1 rounded-lg border-2 border-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 disabled:opacity-60"
        >
          {busy === "temp-password" ? "Creating…" : "Create a temporary password"}
        </button>
      </div>

      <p className="text-xs leading-relaxed text-slate-500">
        Try the link first: it is safe and the student keeps their own password. Use a temporary password only when the
        link cannot arrive — a typo&apos;d address, a mailbox they can no longer open, or no phone linked. Every use is
        recorded against your admin account.
      </p>
    </div>
  );
}
