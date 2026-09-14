"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"email" | "phone">("email");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Unable to log in");
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to log in");
    } finally {
      setLoading(false);
    }
  }

  async function onPhoneSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/phone-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: codeSent ? "verify" : "send", phone, code: codeSent ? code : undefined }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Unable to use phone sign-in");
      if (!codeSent) setCodeSent(true);
      else { router.push("/dashboard"); router.refresh(); }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to use phone sign-in");
    } finally {
      setLoading(false);
    }
  }

  if (mode === "phone") {
    return (
      <form onSubmit={onPhoneSubmit} className="space-y-4">
        {error && <div className="rounded-lg bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">{error}</div>}
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Verified Ghana phone number</label>
          <input required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="024 123 4567" className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20" />
        </div>
        {codeSent && <div><label className="mb-1 block text-sm font-semibold text-slate-700">SMS code</label><input required value={code} onChange={(e) => setCode(e.target.value)} inputMode="numeric" placeholder="6-digit code" className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20" /></div>}
        <button type="submit" disabled={loading} className="flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-70">{loading ? "Please wait…" : codeSent ? "Sign in with code" : "Send sign-in code"}</button>
        <button type="button" onClick={() => { setMode("email"); setError(null); }} className="w-full text-center text-sm font-semibold text-emerald-700 hover:underline">Use email and password instead</button>
        <p className="text-center text-xs text-slate-500">This works only for a phone number previously verified and linked to a NurseGrid account.</p>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {error && (
        <div className="rounded-lg bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">{error}</div>
      )}
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@nursingschool.edu"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none ring-emerald-500/40 focus:border-emerald-500 focus:ring-4"
        />
      </div>
      <div>
        <div className="mb-1 flex items-center justify-between">
          <label className="block text-sm font-semibold text-slate-700">Password</label>
          <Link href="/forgot-password" className="text-xs font-semibold text-emerald-700 hover:underline">
            Forgot password?
          </Link>
        </div>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none ring-emerald-500/40 focus:border-emerald-500 focus:ring-4"
        />
      </div>
      <button type="button" onClick={() => { setMode("phone"); setError(null); }} className="w-full text-center text-sm font-semibold text-emerald-700 hover:underline">Can’t find your email? Sign in with verified phone</button>
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-200 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Signing in…" : "Log in"}
      </button>
      <div className="rounded-lg border border-dashed border-emerald-300 bg-emerald-50 px-4 py-3 text-xs text-emerald-800">
        <p className="font-semibold">Demo accounts</p>
        <p>Premium: demo@nursegrid.app / password123</p>
        <p>Free: free@nursegrid.app / password123</p>
      </div>
      <p className="text-center text-[11px] text-slate-400">
        🔒 For your security, only one device can be signed in per account at a time.
      </p>
      <p className="text-center text-sm text-slate-600">
        New here?{" "}
        <Link href="/signup" className="font-semibold text-emerald-700 hover:underline">
          Create a free account
        </Link>
      </p>
    </form>
  );
}
