"use client";

import { useState } from "react";

/**
 * "Send a real email and watch what happens."
 *
 * The health page used to check the database and stop there, which cannot tell
 * anybody whether a reset link actually reaches a student. This sends one
 * message and prints the provider's own answer - accepted with an id, or refused
 * with the reason.
 *
 * The wording matters: a provider accepting a message is not proof of arrival,
 * and this card says so instead of showing a green tick and moving on.
 */

type Readiness = {
  configured: boolean;
  provider: string;
  from: string;
  domain: string;
  domainStatus: string;
  summary: string;
};

type Result = { ok: boolean; id?: string; error?: string };

export function EmailDeliveryCheck({ readiness }: { readiness: Readiness }) {
  const [to, setTo] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [message, setMessage] = useState("");

  async function send() {
    setBusy(true);
    setResult(null);
    setMessage("");
    try {
      const response = await fetch("/api/admin/email-test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ to }),
      });
      const body = (await response.json()) as Result & { error?: string; readiness?: Readiness };
      if (!response.ok) {
        setMessage(body.error ?? "The request failed.");
      } else {
        setResult(body);
      }
    } catch {
      setMessage("Could not reach the server at all.");
    } finally {
      setBusy(false);
    }
  }

  const domainOk = readiness.domainStatus === "verified";
  const domainUnknown = readiness.domainStatus === "unknown" || readiness.provider !== "resend";

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-bold text-slate-900">Email delivery</p>
          <p className="mt-1 text-sm text-slate-500">
            Reset links and sign-in links reach students through {readiness.provider === "none" ? "no provider" : readiness.provider}.
          </p>
        </div>
        <span
          className={`mt-1 h-3 w-3 shrink-0 rounded-full ${
            !readiness.configured ? "bg-rose-500" : domainUnknown ? "bg-amber-400" : domainOk ? "bg-emerald-500" : "bg-rose-500"
          }`}
        />
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">{readiness.summary}</p>
      <p className="mt-2 font-mono text-xs text-slate-400">from: {readiness.from}</p>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          value={to}
          onChange={(event) => setTo(event.target.value)}
          placeholder="you@example.com"
          className="min-w-0 flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-500"
          aria-label="Address to send the test email to"
        />
        <button
          type="button"
          onClick={send}
          disabled={busy || !to.trim()}
          className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
        >
          {busy ? "Sending…" : "Send a test email"}
        </button>
      </div>

      {message ? <p className="mt-3 rounded-xl bg-rose-50 p-3 text-sm text-rose-700">{message}</p> : null}

      {result?.ok ? (
        <div className="mt-3 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-900">
          <p className="font-semibold">The provider accepted it{result.id ? ` (id ${result.id})` : ""}.</p>
          <p className="mt-1 leading-relaxed">
            That proves the provider took the message — <b>not</b> that it landed. Now open the inbox. If it is not
            there in a minute, check the spam folder and the provider&apos;s dashboard for a bounce; a refused or
            bounced message is the real answer.
          </p>
        </div>
      ) : null}

      {result && !result.ok ? (
        <div className="mt-3 rounded-xl bg-rose-50 p-3 text-sm text-rose-900">
          <p className="font-semibold">The provider refused it.</p>
          <p className="mt-1 leading-relaxed">Its exact words: <span className="font-mono text-xs">{result.error}</span></p>
          <p className="mt-1 leading-relaxed">
            While this is failing, nobody can reset a password or request a sign-in link. Fix this before anything else.
          </p>
        </div>
      ) : null}
    </div>
  );
}
