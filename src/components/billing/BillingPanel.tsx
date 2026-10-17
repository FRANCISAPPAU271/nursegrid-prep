"use client";

import { useEffect, useState } from "react";
import type { Invoice, Subscription } from "@/lib/types";
import Modal from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";
import { useRouter, useSearchParams } from "next/navigation";
import { MOMO_RECEIVER_NUMBER, MOMO_RECEIVER_NAME } from "@/lib/momo";
import { buildWhatsAppLink, WHATSAPP_DISPLAY_NUMBER } from "@/lib/contact";
import { QUESTION_COUNT_LABEL } from "@/lib/question-count";
import { PLAN_PRICES_PESEWAS, formatPesewas } from "@/lib/pricing";

type PlanId = "four_month" | "eight_month" | "annual";

/** What /api/billing/totals returns per plan (pesewas + preformatted labels). */
type PlanTotals = {
  listPesewas: number;
  listLabel: string;
  friendDiscountPesewas: number;
  friendDiscountLabel: string;
  creditAppliedPesewas: number;
  creditAppliedLabel: string;
  payablePesewas: number;
  payableLabel: string;
  creditBalancePesewas: number;
  creditBalanceLabel: string;
  firstPurchase: boolean;
};
// Prices come from one place. They used to be typed out here and again in
// money() below, which meant a discount could be calculated against a
// different number than the one on the screen.
const PLANS: { id: PlanId; name: string; price: string; priceCents: number; cadence: string; tag: string | null }[] = [
  { id: "four_month", name: "4 Months", price: formatPesewas(PLAN_PRICES_PESEWAS.four_month), priceCents: 500, cadence: "full access for 4 months", tag: null },
  { id: "eight_month", name: "8 Months", price: formatPesewas(PLAN_PRICES_PESEWAS.eight_month), priceCents: 900, cadence: "full access for 8 months", tag: null },
  { id: "annual", name: "1 Year", price: formatPesewas(PLAN_PRICES_PESEWAS.annual), priceCents: 1300, cadence: "full access for 12 months", tag: "Best value" },
];

// Invoices still carry the historical USD-cent amount; this maps it to the
// cedi price it has always represented.
const CENTS_TO_PESEWAS: Record<number, number> = {
  500: PLAN_PRICES_PESEWAS.four_month,
  900: PLAN_PRICES_PESEWAS.eight_month,
  1300: PLAN_PRICES_PESEWAS.annual,
};

function money(cents: number) {
  if (CENTS_TO_PESEWAS[cents]) return formatPesewas(CENTS_TO_PESEWAS[cents]);
  return formatPesewas(cents);
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
  if (plan === "eight_month") return "8 Months";
  if (plan === "annual") return "1 Year";
  return plan;
}

export default function BillingPanel({
  isPremium,
  premiumTrialEndsAt,
  subscriptions,
  invoices,
  stripeEnabled,
  creditBalancePesewas = 0,
}: {
  isPremium: boolean;
  premiumTrialEndsAt: string | null;
  subscriptions: Subscription[];
  invoices: Invoice[];
  stripeEnabled: boolean;
  /** Referral credit waiting to be applied to the next purchase. */
  creditBalancePesewas?: number;
}) {
  const [pickerPlan, setPickerPlan] = useState<(typeof PLANS)[number] | null>(null);
  const [cardModalPlan, setCardModalPlan] = useState<(typeof PLANS)[number] | null>(null);
  const [momoModalPlan, setMomoModalPlan] = useState<(typeof PLANS)[number] | null>(null);
  const [redirecting, setRedirecting] = useState(false);
  // Live totals from the server — the single source of truth for what this
  // account actually pays, so a plan card can never advertise a price the
  // checkout will not honour.
  const [totals, setTotals] = useState<Record<string, PlanTotals> | null>(null);
  const [pendingMomoRequest, setPendingMomoRequest] = useState<{ id: string; plan: string; createdAt: string } | null>(null);
  const toast = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeSub = subscriptions.find((s) => s.status === "active") ?? null;
  const isTrialOnly = isPremium && !activeSub && premiumTrialEndsAt;

  useEffect(() => {
    let alive = true;
    fetch("/api/billing/totals")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (alive && d?.plans) setTotals(d.plans as Record<string, PlanTotals>);
      })
      .catch(() => {
        /* the cards fall back to list price; checkout recomputes server-side regardless */
      });
    return () => {
      alive = false;
    };
  }, []);

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
            You have full premium access — every question, mock exams, readiness and more — until {fmt(premiumTrialEndsAt)}.
            Choose a plan below anytime to keep access after it ends.
          </p>
        </div>
      )}

      {pendingMomoRequest && (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm font-bold text-amber-800">⏳ MTN Mobile Money payment under review</p>
          <p className="mt-1 text-sm text-amber-700">
            We received your payment submission ({planLabel(pendingMomoRequest.plan)}) on {fmt(pendingMomoRequest.createdAt)}. We&apos;re
            verifying it against our MoMo records — access is activated <b>within 1 hour, usually within minutes</b>.
          </p>
          <a
            href={buildWhatsAppLink(
              `Hi NurseGrid Prep! I submitted a MoMo payment for the ${planLabel(pendingMomoRequest.plan)} plan and I'd love a quick activation. Thank you! 🙏`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-white transition hover:bg-amber-600"
          >
            💬 Nudge the admin on WhatsApp ({WHATSAPP_DISPLAY_NUMBER})
          </a>
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

        {creditBalancePesewas > 0 && (
          <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
            <p className="text-sm font-semibold text-emerald-900">
              You have {formatPesewas(creditBalancePesewas)} in referral credit
            </p>
            <p className="mt-1 text-xs text-emerald-800">
              It is taken off automatically when you choose a plan — no code to enter. Earn more by{" "}
              <a href="/dashboard/referrals" className="font-semibold underline">
                inviting classmates
              </a>
              .
            </p>
          </div>
        )}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              {(() => {
                const t = totals?.[plan.id];
                const discounted = t ? t.payablePesewas < t.listPesewas : false;
                return (
                  <>
                    <p className="mt-3 text-3xl font-extrabold text-slate-950">
                      {t ? t.payableLabel : plan.price}
                      {discounted && (
                        <span className="ml-2 text-base font-semibold text-slate-400 line-through">{t!.listLabel}</span>
                      )}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">{plan.cadence}</p>
                    {discounted && (
                      <p className="mt-2 text-xs font-semibold text-emerald-700">
                        {t!.friendDiscountPesewas > 0 && <>First-purchase {t!.friendDiscountLabel} off</>}
                        {t!.friendDiscountPesewas > 0 && t!.creditAppliedPesewas > 0 && " + "}
                        {t!.creditAppliedPesewas > 0 && <>{t!.creditAppliedLabel} credit applied</>}
                      </p>
                    )}
                  </>
                );
              })()}
              <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                <li>✅ Unlimited access to all {QUESTION_COUNT_LABEL} unique questions</li>
                <li>✅ Full rationales and strategy tips</li>
                <li>✅ Progress tracking across every category</li>
              </ul>
              <button
                onClick={() => setPickerPlan(plan)}
                disabled={redirecting}
                className="mt-5 rounded-xl bg-emerald-600 px-6 py-3 text-base font-bold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700 disabled:opacity-70"
              >
                {redirecting
                  ? "Redirecting…"
                  : `Choose ${plan.name} — ${totals?.[plan.id]?.payableLabel ?? plan.price}`}
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
                    <td className="py-2.5 text-slate-700">
                      {(() => {
                        // The invoice row is a receipt, so it has to show what
                        // left the customer's account — not the list price the
                        // discount was taken off.
                        const discount = inv.discountPesewas ?? 0;
                        if (discount <= 0) return money(inv.amountCents);
                        const listPesewas = CENTS_TO_PESEWAS[inv.amountCents] ?? inv.amountCents;
                        return (
                          <>
                            {formatPesewas(Math.max(0, listPesewas - discount))}
                            <span className="ml-1 text-xs text-slate-400 line-through">{formatPesewas(listPesewas)}</span>
                            <span className="block text-[11px] font-semibold text-emerald-700">
                              saved {formatPesewas(discount)}
                            </span>
                          </>
                        );
                      })()}
                    </td>
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
      <Modal
        open={Boolean(pickerPlan)}
        onClose={() => setPickerPlan(null)}
        title={pickerPlan ? `Pay for ${pickerPlan.name} access` : ""}
      >
        {pickerPlan && (
          <div className="space-y-3">
            <p className="text-sm text-slate-600">
              {pickerPlan.name} access is{" "}
              <span className="font-bold text-slate-900">
                {totals?.[pickerPlan.id]?.payableLabel ?? pickerPlan.price}
              </span>
              {totals?.[pickerPlan.id] && totals[pickerPlan.id].payablePesewas < totals[pickerPlan.id].listPesewas && (
                <>
                  {" "}
                  <span className="text-slate-400 line-through">{totals[pickerPlan.id].listLabel}</span>
                </>
              )}
              . Choose how you&apos;d like to pay.
            </p>

            <p className="rounded-xl bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-800">
              Manual MTN Mobile Money payments are verified against our actual
              MoMo records before access is activated.
            </p>

            <button
              type="button"
              onClick={() => chooseMomo(pickerPlan)}
              className="flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-4 text-left hover:border-amber-400 hover:bg-amber-50/50"
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl">📱</span>
                <span>
                  <span className="block text-sm font-bold text-slate-900">
                    MTN Mobile Money
                  </span>
                  <span className="block text-xs text-slate-500">
                    Ghana — send to {MOMO_RECEIVER_NUMBER} — verified within a
                    few hours
                  </span>
                </span>
              </span>
              <span className="text-slate-400">→</span>
            </button>
          </div>
        )}
      </Modal>

      <Modal open={Boolean(cardModalPlan)} onClose={() => setCardModalPlan(null)} title="Pay with Visa Card">
        {cardModalPlan && <CardCheckoutForm plan={cardModalPlan} planTotals={totals?.[cardModalPlan.id]} onClose={() => setCardModalPlan(null)} />}
      </Modal>

      <Modal open={Boolean(momoModalPlan)} onClose={() => setMomoModalPlan(null)} title="Pay with MTN Mobile Money">
        {momoModalPlan && <MomoCheckoutForm plan={momoModalPlan} planTotals={totals?.[momoModalPlan.id]} onClose={() => setMomoModalPlan(null)} />}
      </Modal>
    </div>
  );
}

function CardCheckoutForm({
  plan,
  planTotals,
  onClose,
}: {
  plan: (typeof PLANS)[number];
  planTotals?: PlanTotals;
  onClose: () => void;
}) {
  const payableLabel = planTotals?.payableLabel ?? plan.price;
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
        <span className="text-sm font-bold text-emerald-800">{payableLabel}</span>
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
          {loading ? "Processing…" : `Pay ${payableLabel}`}
        </button>
      </div>
    </form>
  );
}

function MomoCheckoutForm({
  plan,
  planTotals,
  onClose,
}: {
  plan: (typeof PLANS)[number];
  planTotals?: PlanTotals;
  onClose: () => void;
}) {
  const [momoNumber, setMomoNumber] = useState("");
  // plan.price is the list price; with referral credit or a first-purchase
  // discount it is not the amount that should arrive on the MoMo line.
  const totals = planTotals ?? null;
  const payableLabel = totals?.payableLabel ?? plan.price;
  const discounted = totals ? totals.payablePesewas < totals.listPesewas : false;
  const [momoReference, setMomoReference] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const toast = useToast();
  const router = useRouter();

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
      setSubmitted(true);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to submit payment for review");
    } finally {
      setLoading(false);
    }
  }

  // ----- Success step: reference + activation window + notify-admin tap -----
  // The student's own WhatsApp message doubles as an instant admin
  // notification, so activation happens in minutes instead of hours.
  if (submitted) {
    const notifyMessage =
      `Hi NurseGrid Prep! I just paid for the ${plan.name} plan via MTN MoMo.\n` +
      `• Amount: ${payableLabel}\n` +
      `• From MoMo number: ${momoNumber}\n` +
      `• Transaction ref: ${momoReference}\n` +
      `Please activate my account. Thank you! 🙏`;
    return (
      <div className="space-y-4">
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center">
          <div className="text-4xl">✅</div>
          <p className="mt-2 text-base font-extrabold text-emerald-900">Payment submitted!</p>
          <p className="mt-1 text-sm text-emerald-800">
            {plan.name} plan · ref <span className="font-mono font-bold">{momoReference}</span>
          </p>
          <p className="mt-2 text-sm text-emerald-800">
            Your access is activated <b>within 1 hour — usually within minutes</b> once we match your reference against
            our MoMo records.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-sm font-bold text-slate-900">⚡ Want it activated faster?</p>
          <p className="mt-1 text-xs text-slate-500">
            Tap below to notify the admin on WhatsApp right now — your payment details are pre-filled, just press send.
          </p>
          <a
            href={buildWhatsAppLink(notifyMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-xl bg-emerald-600 px-4 py-3 text-center text-sm font-bold text-white shadow-sm transition hover:bg-emerald-700"
          >
            💬 Notify admin on WhatsApp →
          </a>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100"
          >
            Done
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="rounded-xl bg-amber-50 p-4">
        <p className="text-sm font-bold text-amber-900">Step 1 — Send payment</p>
        <p className="mt-1 text-sm text-amber-800">
          Send <span className="font-bold">{payableLabel}</span> via MTN Mobile Money for {plan.name} access to:
        </p>
        {discounted && totals && (
          <p className="mt-1 text-xs font-semibold text-emerald-800">
            {totals.listLabel}
            {totals.friendDiscountPesewas > 0 && <> − {totals.friendDiscountLabel} first-purchase discount</>}
            {totals.creditAppliedPesewas > 0 && <> − {totals.creditAppliedLabel} referral credit</>} = {totals.payableLabel}
          </p>
        )}
        <p className="mt-1 text-[11px] text-amber-700">
          Send exactly this amount — an admin matches it against the MoMo confirmation before activating access.
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
            We check your transaction reference against our MoMo records and activate your access{" "}
            <b>within 1 hour — usually within minutes</b>. After submitting, you can notify the admin on WhatsApp with one tap.
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






