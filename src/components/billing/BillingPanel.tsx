"use client";

import { useEffect, useState } from "react";
import type { Invoice, Subscription } from "@/lib/types";
import Modal from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";
import { useRouter, useSearchParams } from "next/navigation";
import { MOMO_RECEIVER_NUMBER, MOMO_RECEIVER_NAME, approxGhsAmount } from "@/lib/momo";
import { buildWhatsAppLink, WHATSAPP_DISPLAY_NUMBER } from "@/lib/contact";

type PlanId = "four_month" | "annual";

const PLANS: { id: PlanId; name: string; price: string; priceCents: number; cadence: string; tag: string | null }[] = [
  { id: "four_month", name: "4 Months", price: "$5.00", priceCents: 500, cadence: "full access for 4 months", tag: null },
  { id: "annual", name: "1 Year", price: "$9.00", priceCents: 900, cadence: "full access for 12 months", tag: "Best value" },
];

function money(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

function fmt(d: string | null) {
  if (!d) return "—";
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(d));
}

function paymentMethodLabel(method: "card" | "mtn_momo") {
  return method === "mtn_momo" ? "MTN Mobile Money" : "Visa Card";
}

function planLabel(plan: string) {
  if (plan === "four_month") return "4 Months";
  if (plan === "annual") return "1 Year";
  return plan;
}

export default function BillingPanel({
  isPremium,
  premiumTrialEndsAt,
  subscriptions,
  invoices,
  stripeEnabled,
}: {
  isPremium: boolean;
  premiumTrialEndsAt: string | null;
  subscriptions: Subscription[];
  invoices: Invoice[];
  stripeEnabled: boolean;
}) {
  const [pickerPlan, setPickerPlan] = useState<(typeof PLANS)[number] | null>(null);
  const [cardModalPlan, setCardModalPlan] = useState<(typeof PLANS)[number] | null>(null);
  const [momoModalPlan, setMomoModalPlan] = useState<(typeof PLANS)[number] | null>(null);
  const [redirecting, setRedirecting] = useState(false);
  const [pendingMomoRequest, setPendingMomoRequest] = useState<{ id: string; plan: string; createdAt: string } | null>(null);
  const toast = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeSub = subscriptions.find((s) => s.status === "active") ?? null;
  const isTrialOnly = isPremium && !activeSub && premiumTrialEndsAt;

  useEffect(() => {
    fetch("/api/billing/momo/checkout")
      .then((res) => res.json())
      .then((data) => {
        const pending = (data.requests ?? []).find((r: { status: string }) => r.status === "pending");
        setPendingMomoRequest(pending ? { id: pending.id, plan: pending.plan, createdAt: pending.createdAt } : null);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const checkout = searchParams.get("checkout");
    const sessionId = searchParams.get("session_id");
    if (checkout === "success" && sessionId) {
      fetch(`/api/billing/stripe/confirm?session_id=${encodeURIComponent(sessionId)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.ok) {
            toast.push("Payment successful — full access unlocked!", "success");
            router.replace("/dashboard/billing");
            router.refresh();
          } else {
            toast.push("We couldn't confirm your payment yet. Please refresh in a moment.", "error");
          }
        })
        .catch(() => toast.push("We couldn't confirm your payment yet. Please refresh in a moment.", "error"));
    } else if (checkout === "cancelled") {
      toast.push("Checkout cancelled — no charge was made.", "info");
      router.replace("/dashboard/billing");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  async function startStripeCheckout(planId: PlanId) {
    setRedirecting(true);
    try {
      const res = await fetch("/api/billing/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: planId }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error ?? "Unable to start checkout");
      window.location.href = data.url;
    } catch (err) {
      toast.push(err instanceof Error ? err.message : "Unable to start checkout", "error");
      setRedirecting(false);
    }
  }

  function chooseVisa(plan: (typeof PLANS)[number]) {
    setPickerPlan(null);
    if (stripeEnabled) {
      startStripeCheckout(plan.id);
    } else {
      setCardModalPlan(plan);
    }
  }

  function chooseMomo(plan: (typeof PLANS)[number]) {
    if (pendingMomoRequest) {
      setPickerPlan(null);
      toast.push("You already have a MoMo payment under review — please wait for it to be verified first.", "info");
      return;
    }
    setPickerPlan(null);
    setMomoModalPlan(plan);
  }

  return (
    <div className="space-y-8">
      {!stripeEnabled && (
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-xs text-slate-500">
          Card payments are running in demo checkout mode. Add a <code className="rounded bg-slate-200 px-1 py-0.5">STRIPE_SECRET_KEY</code>{" "}
          environment variable to accept real Visa/card payments via Stripe Checkout — no code changes needed.
        </div>
      )}

      {isTrialOnly && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm font-bold text-amber-800">🎁 Free premium trial active</p>
          <p className="mt-1 text-sm text-amber-700">
            You have free premium access from referral rewards until {fmt(premiumTrialEndsAt)}. Choose a plan below anytime to keep access after
            it ends.
          </p>
        </div>
      )}

      {pendingMomoRequest && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm font-bold text-amber-800">⏳ MTN Mobile Money payment under review</p>
          <p className="mt-1 text-sm text-amber-700">
            We received your payment submission ({planLabel(pendingMomoRequest.plan)}) on {fmt(pendingMomoRequest.createdAt)}. We&apos;re
            verifying it against our MoMo transaction records and will activate your full access shortly — usually within a few hours.
          </p>
          <p className="mt-2 text-xs text-amber-700">
            Need it faster? Message us on{" "}
            <a
              href={buildWhatsAppLink("Hi NurseGrid Prep! I'd like to check on my MTN Mobile Money payment review status.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline"
            >
              WhatsApp ({WHATSAPP_DISPLAY_NUMBER})
            </a>
            .
          </p>
        </div>
      )}

      <div className={`rounded-2xl border p-5 ${isPremium ? "border-emerald-200 bg-emerald-50" : "border-slate-200 bg-white"}`}>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-slate-500">Current plan</p>
            <p className="mt-1 text-lg font-extrabold text-slate-950">
              {isPremium
                ? `Full Access${activeSub ? ` · ${planLabel(activeSub.plan)} · via ${paymentMethodLabel(activeSub.paymentMethod)}` : " · free trial"}`
                : "Free"}
            </p>
            {activeSub?.currentPeriodEnd && (
              <p className="mt-1 text-sm text-slate-600">Access active until {fmt(activeSub.currentPeriodEnd)}</p>
            )}
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-base font-bold text-slate-950">
          {isPremium && activeSub ? "Renew or extend your access" : "Choose a plan to unlock the full question bank"}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {PLANS.map((plan) => (
            <div key={plan.id} className="relative flex flex-col rounded-2xl border border-emerald-200 bg-white p-6 shadow-sm">
              {plan.tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                  {plan.tag}
                </span>
              )}
              <span className="w-fit rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
                {plan.name}
              </span>
              <p className="mt-3 text-3xl font-extrabold text-slate-950">{plan.price}</p>
              <p className="mt-1 text-sm text-slate-600">{plan.cadence}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                <li>✅ Unlimited access to all 10,000 questions</li>
                <li>✅ Full rationales and strategy tips</li>
                <li>✅ Progress tracking across every category</li>
              </ul>
              <button
                onClick={() => setPickerPlan(plan)}
                disabled={redirecting}
                className="mt-5 rounded-xl bg-emerald-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700 disabled:opacity-70"
              >
                {redirecting ? "Redirecting…" : `Choose ${plan.name} — ${plan.price}`}
              </button>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
          <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5">💳 Visa Card (worldwide)</span>
          <span className="flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-amber-800">📱 MTN Mobile Money (Ghana)</span>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <h2 className="mb-4 text-base font-bold text-slate-950">Payment history</h2>
        {invoices.length === 0 ? (
          <p className="py-6 text-center text-sm text-slate-500">No payments yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-xs uppercase tracking-wide text-slate-400">
                  <th className="pb-2 font-semibold">Date</th>
                  <th className="pb-2 font-semibold">Plan</th>
                  <th className="pb-2 font-semibold">Amount</th>
                  <th className="pb-2 font-semibold">Method</th>
                  <th className="pb-2 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((inv) => (
                  <tr key={inv.id} className="border-b border-slate-50 last:border-0">
                    <td className="py-2.5 text-slate-700">{fmt(inv.issuedAt)}</td>
                    <td className="py-2.5 text-slate-700">{inv.plan}</td>
                    <td className="py-2.5 text-slate-700">{money(inv.amountCents)}</td>
                    <td className="py-2.5 text-slate-700">
                      {paymentMethodLabel(inv.paymentMethod)}
                      {inv.paymentMethod === "mtn_momo" && inv.momoReference && (
                        <span className="ml-1 text-xs text-slate-400">(ref: {inv.momoReference})</span>
                      )}
                    </td>
                    <td className="py-2.5">
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold capitalize text-emerald-700">
                        {inv.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Modal open={Boolean(pickerPlan)} onClose={() => setPickerPlan(null)} title={pickerPlan ? `Pay for ${pickerPlan.name} access` : ""}>
        {pickerPlan && (
          <div className="space-y-3">
            <p className="text-sm text-slate-600">
              {pickerPlan.name} access is <span className="font-bold text-slate-900">{pickerPlan.price}</span>. Choose how you&apos;d like to pay.
            </p>
            <button
              onClick={() => chooseVisa(pickerPlan)}
              className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-4 text-left hover:border-emerald-400 hover:bg-emerald-50/50"
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">💳</span>
                <span>
                  <span className="block text-sm font-bold text-slate-900">Visa Card</span>
                  <span className="block text-xs text-slate-500">Outside Ghana · instant activation</span>
                </span>
              </span>
              <span className="text-slate-400">→</span>
            </button>
            <button
              onClick={() => chooseMomo(pickerPlan)}
              className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-4 text-left hover:border-amber-400 hover:bg-amber-50/50"
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <span>
                  <span className="block text-sm font-bold text-slate-900">MTN Mobile Money</span>
                  <span className="block text-xs text-slate-500">Ghana · send to {MOMO_RECEIVER_NUMBER} · verified within a few hours</span>
                </span>
              </span>
              <span className="text-slate-400">→</span>
            </button>
          </div>
        )}
      </Modal>

      <Modal open={Boolean(cardModalPlan)} onClose={() => setCardModalPlan(null)} title="Pay with Visa Card">
        {cardModalPlan && <CardCheckoutForm plan={cardModalPlan} onClose={() => setCardModalPlan(null)} />}
      </Modal>

      <Modal open={Boolean(momoModalPlan)} onClose={() => setMomoModalPlan(null)} title="Pay with MTN Mobile Money">
        {momoModalPlan && <MomoCheckoutForm plan={momoModalPlan} onClose={() => setMomoModalPlan(null)} />}
      </Modal>
    </div>
  );
}

function CardCheckoutForm({ plan, onClose }: { plan: (typeof PLANS)[number]; onClose: () => void }) {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const toast = useToast();
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/billing/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: plan.id, cardName, cardNumber }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Payment failed");
      toast.push("Payment successful — full access unlocked!", "success");
      onClose();
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Payment failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <p className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-500">
        Demo checkout — this simulates a card payment. Any card number works except 16 zeros.
      </p>
      {error && <div className="rounded-lg bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">{error}</div>}
      <div className="flex items-center justify-between rounded-lg bg-emerald-50 px-4 py-3">
        <span className="text-sm font-semibold text-emerald-800">{plan.name} access</span>
        <span className="text-sm font-bold text-emerald-800">{plan.price}</span>
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Name on card</label>
        <input
          required
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          placeholder="Jordan Rivera"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Card number</label>
        <input
          required
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="4242 4242 4242 4242"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Expiry</label>
          <input
            required
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            placeholder="MM/YY"
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">CVC</label>
          <input
            required
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            placeholder="123"
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
          />
        </div>
      </div>
      <div className="flex justify-end gap-3 pt-2">
        <button type="button" onClick={onClose} className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100">
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 disabled:opacity-70"
        >
          {loading ? "Processing…" : `Pay ${plan.price}`}
        </button>
      </div>
    </form>
  );
}

function MomoCheckoutForm({ plan, onClose }: { plan: (typeof PLANS)[number]; onClose: () => void }) {
  const [momoNumber, setMomoNumber] = useState("");
  const [momoReference, setMomoReference] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const toast = useToast();
  const router = useRouter();
  const ghs = approxGhsAmount(plan.priceCents);

  async function copyNumber() {
    try {
      await navigator.clipboard.writeText(MOMO_RECEIVER_NUMBER);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.push("Could not copy — please copy manually", "error");
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/billing/momo/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: plan.id, momoNumber, momoReference }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Unable to submit payment for review");
      toast.push("Submitted! We'll verify your payment and activate your account shortly.", "success");
      onClose();
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to submit payment for review");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="rounded-xl bg-amber-50 p-4">
        <p className="text-sm font-bold text-amber-900">Step 1 — Send payment</p>
        <p className="mt-1 text-sm text-amber-800">
          Send <span className="font-bold">{plan.price}</span> (approx. ₵{ghs} GHS, rates vary) via MTN Mobile Money for {plan.name} access to:
        </p>
        <div className="mt-3 flex items-center justify-between rounded-lg bg-white px-4 py-3">
          <div>
            <p className="text-lg font-extrabold tracking-wide text-slate-950">{MOMO_RECEIVER_NUMBER}</p>
            <p className="text-xs text-slate-500">{MOMO_RECEIVER_NAME}</p>
          </div>
          <button
            onClick={copyNumber}
            type="button"
            className="rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-600"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <p className="mt-3 text-xs text-amber-700">
          Dial <span className="font-mono">*170#</span> → Transfer Money → Mobile Money User → enter the number above → enter the amount →
          confirm with your MoMo PIN. Or use the MyMTN / MoMo app.
        </p>
      </div>

      <form onSubmit={submit} className="space-y-4">
        <div>
          <p className="text-sm font-bold text-slate-900">Step 2 — Submit for verification</p>
          <p className="mt-1 text-xs text-slate-500">
            Our team manually checks each transaction reference against our MoMo records before granting access — usually within a few hours.
          </p>
        </div>
        {error && <div className="rounded-lg bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">{error}</div>}
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Your MoMo number</label>
          <input
            required
            value={momoNumber}
            onChange={(e) => setMomoNumber(e.target.value)}
            placeholder="024xxxxxxx"
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">Transaction reference</label>
          <input
            required
            value={momoReference}
            onChange={(e) => setMomoReference(e.target.value)}
            placeholder="e.g. from your MoMo confirmation SMS"
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20"
          />
          <p className="mt-1 text-xs text-slate-500">You&apos;ll receive this reference by SMS right after sending the payment.</p>
        </div>
        <div className="flex justify-end gap-3 pt-2">
          <button type="button" onClick={onClose} className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100">
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-amber-600 disabled:opacity-70"
          >
            {loading ? "Submitting…" : "I've paid — submit for review"}
          </button>
        </div>
      </form>

      <p className="text-center text-xs text-slate-400">
        Having trouble with your payment?{" "}
        <a
          href={buildWhatsAppLink("Hi NurseGrid Prep! I need help confirming my MTN Mobile Money payment.")}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-emerald-700 hover:underline"
        >
          Message us on WhatsApp ({WHATSAPP_DISPLAY_NUMBER})
        </a>
      </p>
    </div>
  );
}
