"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Persistent per-device marker used server-side to guard the free trial
// against repeat signups from the same device. Not personal data — a random
// ID stored only in this browser.
function getDeviceId(): string {
  try {
    const key = "nsg-device-id";
    let id = localStorage.getItem(key);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(key, id);
    }
    return id;
  } catch {
    return "";
  }
}

export default function SignupForm({
  defaultReferralCode = "",
  otpEnabled = false,
}: {
  defaultReferralCode?: string;
  otpEnabled?: boolean;
}) {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    school: "",
    referralCode: defaultReferralCode,
    securityQuestion: "What was the name of your first pet?",
    securityAnswer: "",
  });
  const [deviceId, setDeviceId] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Phone-OTP state (only used when otpEnabled).
  const [phone, setPhone] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpBusy, setOtpBusy] = useState(false);
  const [otpMessage, setOtpMessage] = useState<string | null>(null);

  useEffect(() => {
    setDeviceId(getDeviceId());
  }, []);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function sendOtp() {
    setOtpMessage(null);
    setOtpBusy(true);
    try {
      const res = await fetch("/api/auth/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, deviceId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Could not send the code");
      setOtpSent(true);
      setOtpMessage("Code sent! Check your SMS — it expires in 10 minutes.");
    } catch (err) {
      setOtpMessage(err instanceof Error ? err.message : "Could not send the code");
    } finally {
      setOtpBusy(false);
    }
  }

  async function verifyOtpCode() {
    setOtpMessage(null);
    setOtpBusy(true);
    try {
      const res = await fetch("/api/auth/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, code: otpCode }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Verification failed");
      setOtpVerified(true);
      setOtpMessage("Phone verified ✓");
    } catch (err) {
      setOtpMessage(err instanceof Error ? err.message : "Verification failed");
    } finally {
      setOtpBusy(false);
    }
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, deviceId, phone: otpEnabled ? phone : "" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Unable to create account");
      if (data.referralBonusApplied) {
        sessionStorage.setItem("nsm_referral_bonus", "1");
      }
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to create account");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {error && (
        <div className="rounded-lg bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">{error}</div>
      )}
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Full name</label>
        <input
          required
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Jordan Rivera"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none ring-emerald-500/40 focus:border-emerald-500 focus:ring-4"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Email</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="you@nursingschool.edu"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none ring-emerald-500/40 focus:border-emerald-500 focus:ring-4"
        />
      </div>

      {otpEnabled && (
        <div className={`rounded-xl border p-3.5 ${otpVerified ? "border-emerald-300 bg-emerald-50" : "border-slate-200 bg-slate-50"}`}>
          <label className="mb-1 block text-sm font-semibold text-slate-700">
            Phone number {otpVerified ? <span className="text-emerald-700">✓ verified</span> : <span className="font-normal text-slate-400">(verify to unlock your 3-day free trial)</span>}
          </label>
          {!otpVerified && (
            <>
              <div className="flex gap-2">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="024 123 4567"
                  disabled={otpBusy}
                  className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none ring-emerald-500/40 focus:border-emerald-500 focus:ring-4"
                />
                <button
                  type="button"
                  onClick={sendOtp}
                  disabled={otpBusy || phone.trim().length < 9}
                  className="shrink-0 rounded-lg bg-emerald-600 px-3.5 py-2 text-xs font-bold text-white disabled:opacity-50"
                >
                  {otpBusy && !otpSent ? "Sending…" : otpSent ? "Resend" : "Send code"}
                </button>
              </div>
              {otpSent && (
                <div className="mt-2 flex gap-2">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    placeholder="6-digit code"
                    maxLength={6}
                    className="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2.5 text-sm tracking-widest outline-none ring-emerald-500/40 focus:border-emerald-500 focus:ring-4"
                  />
                  <button
                    type="button"
                    onClick={verifyOtpCode}
                    disabled={otpBusy || otpCode.trim().length < 4}
                    className="shrink-0 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-bold text-white disabled:opacity-50"
                  >
                    {otpBusy && otpSent ? "Checking…" : "Verify"}
                  </button>
                </div>
              )}
            </>
          )}
          {otpMessage && (
            <p className={`mt-1.5 text-xs font-medium ${otpVerified ? "text-emerald-700" : "text-slate-500"}`}>{otpMessage}</p>
          )}
          {!otpVerified && (
            <p className="mt-1.5 text-[11px] text-slate-400">
              You can still create an account without verifying — the free premium trial just won&apos;t be included.
            </p>
          )}
        </div>
      )}
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Nursing school (optional)</label>
        <input
          value={form.school}
          onChange={(e) => update("school", e.target.value)}
          placeholder="State University School of Nursing"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none ring-emerald-500/40 focus:border-emerald-500 focus:ring-4"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Password</label>
        <input
          type="password"
          required
          minLength={6}
          value={form.password}
          onChange={(e) => update("password", e.target.value)}
          placeholder="At least 6 characters"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none ring-emerald-500/40 focus:border-emerald-500 focus:ring-4"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Security Question</label>
          <select
            value={form.securityQuestion}
            onChange={(e) => update("securityQuestion", e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4"
          >
            <option value="What was the name of your first pet?">First pet name?</option>
            <option value="What is your mother's maiden name?">Mother&apos;s maiden name?</option>
            <option value="What was the name of your first elementary school?">First elementary school?</option>
            <option value="In what city were you born?">In what city were you born?</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Security Answer</label>
          <input
            required
            value={form.securityAnswer}
            onChange={(e) => update("securityAnswer", e.target.value)}
            placeholder="Your answer (case-insensitive)"
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">
          Referral code <span className="font-normal text-slate-400">(optional — get 3 days free)</span>
        </label>
        <input
          value={form.referralCode}
          onChange={(e) => update("referralCode", e.target.value.toUpperCase())}
          placeholder="NG-XXXXXXX"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm uppercase outline-none ring-emerald-500/40 focus:border-emerald-500 focus:ring-4"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-200 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Creating account…" : "Create free account"}
      </button>
      <p className="text-center text-xs leading-relaxed text-slate-400">
        By creating an account, you agree to our{" "}
        <Link href="/terms" className="font-semibold text-slate-500 hover:text-emerald-700 hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="font-semibold text-slate-500 hover:text-emerald-700 hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
      <p className="text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-emerald-700 hover:underline">
          Log in
        </Link>
      </p>
    </form>
  );
}
