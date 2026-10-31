"use client";

import { useEffect, useState } from "react";

/**
 * Add a phone number as a recovery route.
 *
 * A number is the most durable thing a Ghanaian student has: email addresses
 * are typo'd at signup, old phones are lost, but the SIM is kept. Verifying one
 * here means the account can be reached even when the mailbox cannot — and it
 * enables sign-in by SMS code, which needs no password at all.
 */
export default function PhoneRecoveryCard() {
  const [current, setCurrent] = useState<string | null>(null);
  const [available, setAvailable] = useState(true);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [stage, setStage] = useState<"idle" | "sent" | "done">("idle");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/me/phone", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "status" }),
    })
      .then((r) => r.json())
      .then((d) => {
        setCurrent(d.phone ?? null);
        setAvailable(Boolean(d.smsConfigured));
      })
      .catch(() => undefined);
  }, []);

  async function post(body: Record<string, unknown>) {
    const res = await fetch("/api/me/phone", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error ?? "That did not work.");
    return data;
  }

  async function send(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      await post({ action: "send", phone });
      setStage("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "That did not work.");
    } finally {
      setBusy(false);
    }
  }

  async function verify(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const data = await post({ action: "verify", phone, code });
      setCurrent(data.phone ?? phone);
      setStage("done");
      setCode("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "That code was not accepted.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">
      <h2 className="text-base font-bold text-slate-950">Recovery phone</h2>
      <p className="mt-1 text-xs leading-relaxed text-slate-500">
        Add your number so you can sign in with an SMS code when you cannot remember your password or reach your email.
      </p>

      {!available ? (
        <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
          SMS is not available on this server right now. Use the security question or an email sign-in link instead.
        </p>
      ) : current && stage !== "sent" ? (
        <p className="mt-3 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
          ✓ {stage === "done" ? "Number added" : "Linked"}: <span className="font-semibold">{current}</span>. You can now sign in with a
          code sent to it.
        </p>
      ) : stage === "sent" ? (
        <form onSubmit={verify} className="mt-4 space-y-3">
          <p className="text-xs text-slate-600">
            We sent a 6-digit code to <span className="font-semibold">{phone}</span>. Enter it below.
          </p>
          <input
            inputMode="numeric"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="123456"
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
          />
          {error ? <p className="text-xs font-medium text-rose-600">{error}</p> : null}
          <button
            type="submit"
            disabled={busy || code.trim().length < 4}
            className="w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-60"
          >
            {busy ? "Checking…" : "Confirm number"}
          </button>
        </form>
      ) : (
        <form onSubmit={send} className="mt-4 space-y-3">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="024 123 4567"
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
          />
          {error ? <p className="text-xs font-medium text-rose-600">{error}</p> : null}
          <button
            type="submit"
            disabled={busy || !phone.trim()}
            className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
          >
            {busy ? "Sending…" : "Send code"}
          </button>
        </form>
      )}
    </div>
  );
}
