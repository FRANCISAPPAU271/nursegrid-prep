"use client";

import { useMemo, useState } from "react";
import type { CarePlan, CarePlanStatus } from "@/lib/types";
import Modal from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";
import Watermark from "@/components/ui/Watermark";
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

const STATUS_DOT: Record<CarePlanStatus, string> = {
  draft: "bg-slate-400",
  active: "bg-emerald-500",
  completed: "bg-blue-500",
};

const ADPIE_STEPS = [
  { key: "A", label: "Assess", icon: "🔍" },
  { key: "D", label: "Diagnose", icon: "🩺" },
  { key: "P", label: "Plan", icon: "🎯" },
  { key: "I", label: "Implement", icon: "⚡" },
  { key: "E", label: "Evaluate", icon: "✅" },
];

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

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: plans.length, draft: 0, active: 0, completed: 0 };
    for (const p of plans) c[p.status] = (c[p.status] ?? 0) + 1;
    return c;
  }, [plans]);

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

  // Copy the plan as clean formatted text — for submitting to a tutor via
  // WhatsApp/email or pasting into an assignment document.
  async function handleCopy(plan: CarePlan) {
    const lines: string[] = [
      `NURSING CARE PLAN — ${plan.title}`,
      plan.clientInfo ? `Client: ${plan.clientInfo}` : "",
      "",
      "1. ASSESSMENT",
      plan.assessment || "—",
      "",
      "2. NURSING DIAGNOSIS",
      plan.nursingDiagnosis || "—",
      "",
      "3. GOALS / EXPECTED OUTCOMES",
      plan.goals || "—",
      "",
      "4. INTERVENTIONS & RATIONALE",
      ...(plan.interventions.length > 0
        ? plan.interventions.map((it, i) => `${i + 1}. ${it.action}${it.rationale ? `\n   Rationale: ${it.rationale}` : ""}`)
        : ["—"]),
      "",
      "5. EVALUATION",
      plan.evaluation || "—",
      "",
      `Status: ${STATUS_LABEL[plan.status]} · Updated ${fmt(plan.updatedAt)}`,
      "Prepared with NurseGrid Prep",
    ];
    try {
      await navigator.clipboard.writeText(lines.filter((l, i, a) => !(l === "" && a[i - 1] === "")).join("\n"));
      toast.push("Care plan copied — paste it anywhere 📋", "success");
    } catch {
      toast.push("Could not copy — your browser blocked clipboard access", "error");
    }
  }

  return (
    <div>
      {/* Hero strip: ADPIE tracker + new plan CTA */}
      <div className="mb-6 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-5 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">The nursing process</p>
            <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
              {ADPIE_STEPS.map((step, i) => (
                <div key={step.key} className="flex items-center gap-1.5">
                  <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
                    <span>{step.icon}</span>
                    <span className="hidden sm:inline">{step.label}</span>
                    <span className="sm:hidden">{step.key}</span>
                  </span>
                  {i < ADPIE_STEPS.length - 1 && <span className="text-slate-500">→</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur">
              🗂️ {plans.length} plan{plans.length === 1 ? "" : "s"}
            </span>
            <button
              onClick={openCreate}
              className="shrink-0 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 hover:shadow-emerald-500/40 active:scale-95"
            >
              + New care plan
            </button>
          </div>
        </div>
      </div>

      {/* Status filter pills */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {(["all", "draft", "active", "completed"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setStatusFilter(s)}
            className={`shrink-0 rounded-full border px-3.5 py-2 text-xs font-bold capitalize transition-all ${
              statusFilter === s
                ? "border-transparent bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/25"
                : "border-slate-200 bg-white text-slate-600 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700"
            }`}
          >
            {s === "all" ? "All" : STATUS_LABEL[s]}
            <span className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[10px] ${statusFilter === s ? "bg-white/20" : "bg-slate-100 text-slate-500"}`}>
              {counts[s] ?? 0}
            </span>
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-16 text-center">
          <div className="text-4xl">🗒️</div>
          <h3 className="mt-3 text-base font-bold text-slate-900">
            {plans.length === 0 ? "No care plans yet" : "No care plans match this filter"}
          </h3>
          <p className="mx-auto mt-1 max-w-md text-sm text-slate-500">
            {plans.length === 0
              ? "Build your first ADPIE-structured nursing care plan — assessment, diagnosis, goals, interventions, and evaluation."
              : "Try a different status filter."}
          </p>
          {plans.length === 0 && (
            <button
              onClick={openCreate}
              className="mt-4 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-emerald-600/25 transition hover:shadow-lg"
            >
              Create a care plan
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((plan) => {
            const isOpen = expanded === plan.id;
            return (
              <div
                key={plan.id}
                className={`animate-fade-in rounded-3xl border bg-white p-5 shadow-sm transition-all duration-300 ${
                  isOpen ? "border-emerald-300 shadow-lg shadow-emerald-600/10" : "border-slate-200 hover:border-emerald-200 hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-extrabold tracking-tight text-slate-900">{plan.title}</h3>
                      <span className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${STATUS_STYLE[plan.status]}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[plan.status]}`} />
                        {STATUS_LABEL[plan.status]}
                      </span>
                    </div>
                    {plan.clientInfo && <p className="mt-1 text-sm text-slate-500">{plan.clientInfo}</p>}
                    <p className="mt-1 text-xs text-slate-400">Updated {fmt(plan.updatedAt)}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      onClick={() => handleCopy(plan)}
                      aria-label={`Copy ${plan.title} as text`}
                      title="Copy as text — for WhatsApp, email, or your assignment"
                      className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-sm text-slate-500 transition hover:bg-sky-100 hover:text-sky-700"
                    >
                      📋
                    </button>
                    <button
                      onClick={() => openEdit(plan)}
                      aria-label={`Edit ${plan.title}`}
                      className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-sm text-slate-500 transition hover:bg-emerald-100 hover:text-emerald-700"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleDelete(plan)}
                      aria-label={`Delete ${plan.title}`}
                      className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-sm text-slate-500 transition hover:bg-rose-100 hover:text-rose-600"
                    >
                      🗑️
                    </button>
                    <button
                      onClick={() => setExpanded(isOpen ? null : plan.id)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                        isOpen
                          ? "bg-slate-100 text-slate-600 hover:bg-slate-200"
                          : "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm shadow-emerald-600/25 hover:shadow-md"
                      }`}
                    >
                      {isOpen ? "Hide ↑" : "View →"}
                    </button>
                  </div>
                </div>

                {isOpen && (
                  <div className="secure-content relative mt-4 space-y-3 border-t border-slate-100 pt-4">
                    <Watermark />
                    <DetailBlock step="1" icon="🔍" label="Assessment" value={plan.assessment} />
                    <DetailBlock step="2" icon="🩺" label="Nursing Diagnosis" value={plan.nursingDiagnosis} />
                    <DetailBlock step="3" icon="🎯" label="Goals / Expected Outcomes" value={plan.goals} />
                    {plan.interventions.length > 0 && (
                      <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
                        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                          <span className="grid h-6 w-6 place-items-center rounded-lg bg-white text-sm shadow-sm">⚡</span>
                          4. Interventions &amp; Rationale
                        </p>
                        <div className="mt-2.5 space-y-2">
                          {plan.interventions.map((item, i) => (
                            <div key={i} className="rounded-xl border border-slate-100 bg-white p-3 text-sm shadow-sm">
                              <p className="font-semibold text-slate-800">{item.action}</p>
                              {item.rationale && (
                                <p className="mt-1 text-slate-600">
                                  <span className="font-semibold text-emerald-700">Rationale:</span> {item.rationale}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <DetailBlock step="5" icon="✅" label="Evaluation" value={plan.evaluation} />
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

function DetailBlock({ step, icon, label, value }: { step: string; icon: string; label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
        <span className="grid h-6 w-6 place-items-center rounded-lg bg-white text-sm shadow-sm">{icon}</span>
        {step}. {label}
      </p>
      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700">{value}</p>
    </div>
  );
}
