"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/Toast";
import { formatPesewas } from "@/lib/pricing";

type ReferralItem = {
  id: string;
  createdAt: string;
  refereeName: string;
  refereeEmail: string;
  /** True once this friend's first payment has cleared and the reward landed. */
  creditEarned: boolean;
};

function fmt(d: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(d));
}

function maskEmail(email: string) {
  const [name, domain] = email.split("@");
  if (!domain) return email;
  const visible = name.slice(0, 2);
  return `${visible}${"*".repeat(Math.max(1, name.length - 2))}@${domain}`;
}

export default function ReferralPanel({
  referralCode,
  totalReferrals,
  rewardPesewas,
  creditBalancePesewas,
  creditEarnedPesewas,
  referrals,
}: {
  referralCode: string;
  totalReferrals: number;
  /** What one completed referral is worth, in pesewas. */
  rewardPesewas: number;
  /** Spare credit, applied automatically at the next purchase. */
  creditBalancePesewas: number;
  creditEarnedPesewas: number;
  referrals: ReferralItem[];
}) {
  const [copied, setCopied] = useState<"link" | "code" | null>(null);
  const toast = useToast();
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const link = `${origin || "https://your-nursegrid-domain.com"}/signup?ref=${referralCode}`;

  async function copy(value: string, kind: "link" | "code") {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(kind);
      toast.push("Copied to clipboard", "success");
      setTimeout(() => setCopied(null), 2000);
    } catch {
      toast.push("Could not copy — please copy manually", "error");
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm font-medium text-slate-500">Friends referred</p>
          <p className="mt-2 text-2xl font-extrabold text-slate-950">{totalReferrals}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm font-medium text-slate-500">Credit earned</p>
          <p className="mt-2 text-2xl font-extrabold text-slate-950">{formatPesewas(creditEarnedPesewas)}</p>
        </div>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
          <p className="text-sm font-medium text-emerald-700">Credit for next renewal</p>
          <p className="mt-2 text-2xl font-extrabold text-emerald-800">{formatPesewas(creditBalancePesewas)}</p>
          {creditEarnedPesewas > 0 && (
            <p className="mt-1 text-xs text-emerald-700">
              {formatPesewas(creditEarnedPesewas)} earned in total
            </p>
          )}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-base font-bold text-slate-950">Your referral link</h2>
        <p className="mt-1 text-sm text-slate-600">
          Share this link with classmates. When a friend you invited makes their first payment, you earn{" "}
          <strong className="font-semibold text-slate-800">GH₵ 20</strong> off your next renewal — and they get{" "}
          <strong className="font-semibold text-slate-800">GH₵ 10</strong> off their first purchase. Credit stacks, and it is
          applied automatically at checkout.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            readOnly
            value={link}
            onFocus={(e) => e.target.select()}
            className="w-full flex-1 rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 outline-none"
          />
          <button
            onClick={() => copy(link, "link")}
            className="shrink-0 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            {copied === "link" ? "Copied!" : "Copy link"}
          </button>
        </div>
        <div className="mt-3 flex items-center gap-2 text-sm text-slate-600">
          <span>Or share your code:</span>
          <code className="rounded-md bg-slate-100 px-2 py-1 font-mono font-semibold text-slate-800">{referralCode}</code>
          <button onClick={() => copy(referralCode, "code")} className="text-xs font-semibold text-emerald-700 hover:underline">
            {copied === "code" ? "Copied!" : "Copy code"}
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="mb-4 text-base font-bold text-slate-950">Referral history</h2>
        {referrals.length === 0 ? (
          <p className="py-6 text-center text-sm text-slate-500">
            No referrals yet — share your link above. You earn GH₵ 20 when a friend makes their first payment.
          </p>
        ) : (
          <ul className="divide-y divide-slate-100">
            {referrals.map((r) => (
              <li key={r.id} className="flex items-center justify-between gap-3 py-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{r.refereeName}</p>
                  <p className="text-xs text-slate-500">{maskEmail(r.refereeEmail)}</p>
                </div>
                <div className="text-right">
                  {r.creditEarned ? (
                    <p className="text-xs font-semibold text-emerald-700">+{formatPesewas(rewardPesewas)} earned</p>
                  ) : (
                    <p className="text-xs font-medium text-slate-500">Waiting for their first payment</p>
                  )}
                  <p className="text-xs text-slate-400">{fmt(r.createdAt)}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
