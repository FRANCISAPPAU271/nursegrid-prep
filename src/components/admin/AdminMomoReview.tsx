"use client";

import { useMemo, useState } from "react";
import type { MomoPaymentRequest, MomoRequestStatus } from "@/lib/types";
import Empty from "@/components/ui/Empty";
import Modal from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";

const STATUS_STYLE: Record<MomoRequestStatus, string> = {
  pending: "bg-amber-100 text-amber-700",
  approved: "bg-emerald-100 text-emerald-700",
  rejected: "bg-rose-100 text-rose-700",
};

const PLAN_LABEL: Record<string, string> = { four_month: "4 Months", annual: "1 Year" };

function money(cents: number) {
  return `$${(cents / 100).toFixed(2)}`;
}

function fmt(d: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" }).format(
    new Date(d),
  );
}

export default function AdminMomoReview({ initial }: { initial: MomoPaymentRequest[] }) {
  const [requests, setRequests] = useState<MomoPaymentRequest[]>(initial);
  const [filter, setFilter] = useState<MomoRequestStatus | "all">("pending");
  const [busyId, setBusyId] = useState<string | null>(null);
  const [rejectTarget, setRejectTarget] = useState<MomoPaymentRequest | null>(null);
  const [reviewNote, setReviewNote] = useState("");
  const toast = useToast();

  const counts = useMemo(() => {
    return {
      pending: requests.filter((r) => r.status === "pending").length,
      approved: requests.filter((r) => r.status === "approved").length,
      rejected: requests.filter((r) => r.status === "rejected").length,
    };
  }, [requests]);

  const filtered = useMemo(() => {
    if (filter === "all") return requests;
    return requests.filter((r) => r.status === filter);
  }, [requests, filter]);

  async function approve(request: MomoPaymentRequest) {
    setBusyId(request.id);
    const previous = requests;
    setRequests((list) =>
      list.map((r) => (r.id === request.id ? { ...r, status: "approved", reviewedAt: new Date().toISOString() } : r)),
    );
    try {
      const res = await fetch(`/api/admin/momo-requests/${request.id}/approve`, { method: "POST" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to approve payment");
      toast.push(`Approved — ${request.userName} now has premium access`, "success");
    } catch (err) {
      setRequests(previous);
      toast.push(err instanceof Error ? err.message : "Failed to approve payment", "error");
    } finally {
      setBusyId(null);
    }
  }

  function openReject(request: MomoPaymentRequest) {
    setReviewNote("");
    setRejectTarget(request);
  }

  async function confirmReject() {
    if (!rejectTarget) return;
    const request = rejectTarget;
    setBusyId(request.id);
    const previous = requests;
    setRequests((list) =>
      list.map((r) => (r.id === request.id ? { ...r, status: "rejected", reviewNote: reviewNote || null, reviewedAt: new Date().toISOString() } : r)),
    );
    setRejectTarget(null);
    try {
      const res = await fetch(`/api/admin/momo-requests/${request.id}/reject`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reviewNote }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to reject payment");
      toast.push(`Rejected — ${request.userName} was not granted access`, "info");
    } catch (err) {
      setRequests(previous);
      toast.push(err instanceof Error ? err.message : "Failed to reject payment", "error");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div>
      <div className="mb-5 grid gap-4 sm:grid-cols-3">
        <StatCard label="Pending review" value={counts.pending} tone="amber" />
        <StatCard label="Approved" value={counts.approved} tone="emerald" />
        <StatCard label="Rejected" value={counts.rejected} tone="rose" />
      </div>

      <div className="mb-5 flex flex-wrap items-center gap-2">
        {(["pending", "approved", "rejected", "all"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold capitalize transition ${
              filter === s ? "border-emerald-600 bg-emerald-600 text-white" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
            }`}
          >
            {s === "all" ? "All" : s}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <Empty
          icon="✅"
          title={filter === "pending" ? "No pending payments" : "Nothing here"}
          description={filter === "pending" ? "All caught up! New MoMo submissions will appear here." : "No requests match this filter."}
        />
      ) : (
        <div className="space-y-3">
          {filtered.map((r) => (
            <div key={r.id} className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold text-slate-900">{r.userName}</p>
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ${STATUS_STYLE[r.status]}`}>{r.status}</span>
                  </div>
                  <p className="text-xs text-slate-500">{r.userEmail}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900">{money(r.amountCents)}</p>
                  <p className="text-xs text-slate-500">{PLAN_LABEL[r.plan] ?? r.plan}</p>
                </div>
              </div>

              <div className="mt-3 grid gap-2 rounded-lg bg-slate-50 p-3 text-sm sm:grid-cols-2">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Paid from (MoMo number)</p>
                  <p className="font-mono text-slate-800">{r.momoNumber}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Transaction reference</p>
                  <p className="font-mono text-slate-800">{r.momoReference}</p>
                </div>
              </div>

              <p className="mt-2 text-xs text-slate-400">Submitted {fmt(r.createdAt)}</p>

              {r.status !== "pending" && (
                <p className="mt-1 text-xs text-slate-500">
                  {r.status === "approved" ? "Approved" : "Rejected"}
                  {r.reviewedAt ? ` on ${fmt(r.reviewedAt)}` : ""}
                  {r.reviewNote ? ` — "${r.reviewNote}"` : ""}
                </p>
              )}

              {r.status === "pending" && (
                <div className="mt-4 flex justify-end gap-3 border-t border-slate-100 pt-3">
                  <button
                    onClick={() => openReject(r)}
                    disabled={busyId === r.id}
                    className="rounded-lg border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-50 disabled:opacity-60"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => approve(r)}
                    disabled={busyId === r.id}
                    className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 disabled:opacity-70"
                  >
                    {busyId === r.id ? "Approving…" : "Approve & grant access"}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <Modal open={Boolean(rejectTarget)} onClose={() => setRejectTarget(null)} title="Reject this payment?">
        {rejectTarget && (
          <div className="space-y-4">
            <p className="text-sm text-slate-600">
              Rejecting means <strong>{rejectTarget.userName}</strong> will not be granted premium access for this submission. This is
              typically used when the transaction reference doesn&apos;t match your MoMo records.
            </p>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">Note (optional, visible to your records only)</label>
              <textarea
                value={reviewNote}
                onChange={(e) => setReviewNote(e.target.value)}
                rows={3}
                placeholder="e.g. Reference not found in MoMo statement"
                className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-rose-500 focus:ring-4 focus:ring-rose-500/20"
              />
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button onClick={() => setRejectTarget(null)} className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100">
                Cancel
              </button>
              <button onClick={confirmReject} className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-700">
                Confirm rejection
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

function StatCard({ label, value, tone }: { label: string; value: number; tone: "amber" | "emerald" | "rose" }) {
  const toneClasses = {
    amber: "border-amber-200 bg-amber-50 text-amber-800",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-800",
    rose: "border-rose-200 bg-rose-50 text-rose-800",
  }[tone];
  return (
    <div className={`rounded-2xl border p-4 ${toneClasses}`}>
      <p className="text-xs font-semibold uppercase tracking-wide opacity-70">{label}</p>
      <p className="mt-1 text-2xl font-extrabold">{value}</p>
    </div>
  );
}
