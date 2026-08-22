"use client";

import { useMemo, useState } from "react";
import type { CarePlan, CarePlanStatus } from "@/lib/types";
import Modal from "@/components/ui/Modal";
import Empty from "@/components/ui/Empty";
import { useToast } from "@/components/ui/Toast";
import CarePlanForm, { type CarePlanFormValues } from "@/components/care-plans/CarePlanForm";

const STATUS_LABEL: Record<CarePlanStatus, string> = {
  draft: "Draft",
  active: "Active",
  completed: "Completed",
};

const STATUS_STYLE: Record<CarePlanStatus, string> = {
  draft: "bg-slate-100 text-slate-600",
  active: "bg-emerald-100 text-emerald-700",
  completed: "bg-blue-100 text-blue-700",
};

function fmt(d: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(d));
}

export default function CarePlanBoard({ initial }: { initial: CarePlan[] }) {
  const [plans, setPlans] = useState<CarePlan[]>(initial);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<CarePlan | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<CarePlanStatus | "all">("all");
  const [saving, setSaving] = useState(false);
  const toast = useToast();

  const filtered = useMemo(() => {
    if (statusFilter === "all") return plans;
    return plans.filter((p) => p.status === statusFilter);
  }, [plans, statusFilter]);

  function openCreate() {
    setEditing(null);
    setModalOpen(true);
  }

  function openEdit(plan: CarePlan) {
    setEditing(plan);
    setModalOpen(true);
  }

  async function handleSubmit(values: CarePlanFormValues) {
    setSaving(true);
    const now = new Date().toISOString();

    if (editing) {
      const previous = plans;
      setPlans((list) => list.map((p) => (p.id === editing.id ? { ...p, ...values, updatedAt: now } : p)));
      try {
        const res = await fetch(`/api/care-plans/${editing.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error((await res.json()).error ?? "Failed to update care plan");
        const data = await res.json();
        setPlans((list) => list.map((p) => (p.id === editing.id ? data.carePlan : p)));
        toast.push("Care plan updated", "success");
        setModalOpen(false);
      } catch (err) {
        setPlans(previous);
        toast.push(err instanceof Error ? err.message : "Failed to update care plan", "error");
      } finally {
        setSaving(false);
      }
      return;
    }

    const tempId = `temp-${Date.now()}`;
    const optimistic: CarePlan = { id: tempId, createdAt: now, updatedAt: now, ...values };
    setPlans((list) => [optimistic, ...list]);
    try {
      const res = await fetch("/api/care-plans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error((await res.json()).error ?? "Failed to create care plan");
      const data = await res.json();
      setPlans((list) => list.map((p) => (p.id === tempId ? data.carePlan : p)));
      toast.push("Care plan created", "success");
      setModalOpen(false);
    } catch (err) {
      setPlans((list) => list.filter((p) => p.id !== tempId));
      toast.push(err instanceof Error ? err.message : "Failed to create care plan", "error");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(plan: CarePlan) {
    const previous = plans;
    setPlans((list) => list.filter((p) => p.id !== plan.id));
    try {
      const res = await fetch(`/api/care-plans/${plan.id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete care plan");
      toast.push("Care plan deleted", "success");
    } catch (err) {
      setPlans(previous);
      toast.push(err instanceof Error ? err.message : "Failed to delete care plan", "error");
    }
  }

  return (
    <div>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {(["all", "draft", "active", "completed"] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold capitalize transition ${
                statusFilter === s ? "border-emerald-600 bg-emerald-600 text-white" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              {s === "all" ? "All" : STATUS_LABEL[s]}
            </button>
          ))}
        </div>
        <button
          onClick={openCreate}
          className="shrink-0 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
        >
          + New care plan
        </button>
      </div>

      {filtered.length === 0 ? (
        <Empty
          icon="🗒️"
          title={plans.length === 0 ? "No care plans yet" : "No care plans match this filter"}
          description={
            plans.length === 0
              ? "Build your first ADPIE-structured nursing care plan — assessment, diagnosis, goals, interventions, and evaluation."
              : "Try a different status filter."
          }
          action={
            plans.length === 0 && (
              <button onClick={openCreate} className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                Create a care plan
              </button>
            )
          }
        />
      ) : (
        <div className="space-y-4">
          {filtered.map((plan) => {
            const isOpen = expanded === plan.id;
            return (
              <div key={plan.id} className="animate-fade-in rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-slate-900">{plan.title}</h3>
                      <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${STATUS_STYLE[plan.status]}`}>
                        {STATUS_LABEL[plan.status]}
                      </span>
                    </div>
                    {plan.clientInfo && <p className="mt-1 text-sm text-slate-500">{plan.clientInfo}</p>}
                    <p className="mt-1 text-xs text-slate-400">Updated {fmt(plan.updatedAt)}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <button onClick={() => openEdit(plan)} className="text-xs font-semibold text-slate-500 hover:text-emerald-700">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(plan)} className="text-xs font-semibold text-slate-500 hover:text-rose-600">
                      Delete
                    </button>
                    <button
                      onClick={() => setExpanded(isOpen ? null : plan.id)}
                      className="rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                    >
                      {isOpen ? "Hide" : "View"}
                    </button>
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-4 space-y-4 border-t border-slate-100 pt-4">
                    <DetailBlock label="1. Assessment" value={plan.assessment} />
                    <DetailBlock label="2. Nursing Diagnosis" value={plan.nursingDiagnosis} />
                    <DetailBlock label="3. Goals / Expected Outcomes" value={plan.goals} />
                    {plan.interventions.length > 0 && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">4. Interventions &amp; Rationale</p>
                        <div className="mt-2 space-y-2">
                          {plan.interventions.map((item, i) => (
                            <div key={i} className="rounded-lg bg-slate-50 p-3 text-sm">
                              <p className="font-semibold text-slate-800">{item.action}</p>
                              {item.rationale && <p className="mt-1 text-slate-600">Rationale: {item.rationale}</p>}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <DetailBlock label="5. Evaluation" value={plan.evaluation} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? "Edit care plan" : "New care plan"} wide>
        <CarePlanForm initial={editing} saving={saving} onCancel={() => setModalOpen(false)} onSubmit={handleSubmit} />
      </Modal>
    </div>
  );
}

function DetailBlock({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 whitespace-pre-line text-sm text-slate-700">{value}</p>
    </div>
  );
}
