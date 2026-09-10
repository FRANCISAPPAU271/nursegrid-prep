"use client";

import { useMemo, useState } from "react";
import type { CarePlan, CarePlanIntervention, CarePlanStatus } from "@/lib/types";
import { CARE_PLAN_TEMPLATES } from "@/components/care-plans/care-plan-templates";

export type CarePlanFormValues = {
  title: string;
  clientInfo: string;
  assessment: string;
  nursingDiagnosis: string;
  goals: string;
  interventions: CarePlanIntervention[];
  evaluation: string;
  status: CarePlanStatus;
};

// ---------------------------------------------------------------------------
// Common nursing diagnosis starters (standard NANDA-style problem labels).
// Selecting one inserts a PES-format scaffold the student completes:
// Problem related to (Etiology) as evidenced by (Signs/Symptoms).
// ---------------------------------------------------------------------------
const DIAGNOSIS_STARTERS = [
  "Acute Pain",
  "Ineffective Airway Clearance",
  "Impaired Gas Exchange",
  "Deficient Fluid Volume",
  "Excess Fluid Volume",
  "Risk for Infection",
  "Risk for Falls",
  "Impaired Skin Integrity",
  "Impaired Physical Mobility",
  "Activity Intolerance",
  "Imbalanced Nutrition: Less Than Body Requirements",
  "Anxiety",
  "Deficient Knowledge",
  "Ineffective Coping",
  "Disturbed Sleep Pattern",
  "Constipation",
  "Hyperthermia",
  "Ineffective Tissue Perfusion",
  "Self-Care Deficit",
  "Risk for Impaired Skin Integrity",
];

// ---------------------------------------------------------------------------
// Template library — original example plans for the conditions students are
// asked to write about most often in Ghanaian nursing programs.
// ---------------------------------------------------------------------------
// Ghana-mapped care plan templates live in their own module so this
// component stays readable and the content can be reviewed on its own.
const TEMPLATES = CARE_PLAN_TEMPLATES;


export default function CarePlanForm({
  initial,
  saving,
  onCancel,
  onSubmit,
}: {
  initial: CarePlan | null;
  saving: boolean;
  onCancel: () => void;
  onSubmit: (values: CarePlanFormValues) => void;
}) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [clientInfo, setClientInfo] = useState(initial?.clientInfo ?? "");
  const [assessment, setAssessment] = useState(initial?.assessment ?? "");
  const [nursingDiagnosis, setNursingDiagnosis] = useState(initial?.nursingDiagnosis ?? "");
  const [goals, setGoals] = useState(initial?.goals ?? "");
  const [interventions, setInterventions] = useState<CarePlanIntervention[]>(
    initial?.interventions && initial.interventions.length > 0 ? initial.interventions : [{ action: "", rationale: "" }],
  );
  const [evaluation, setEvaluation] = useState(initial?.evaluation ?? "");
  const [status, setStatus] = useState<CarePlanStatus>(initial?.status ?? "draft");
  const [showTemplates, setShowTemplates] = useState(false);
  const [diagnosisPick, setDiagnosisPick] = useState("");

  function loadTemplate(values: CarePlanFormValues) {
    setTitle(values.title);
    setClientInfo(values.clientInfo);
    setAssessment(values.assessment);
    setNursingDiagnosis(values.nursingDiagnosis);
    setGoals(values.goals);
    setInterventions(values.interventions.map((i) => ({ ...i })));
    setEvaluation(values.evaluation);
    setStatus(values.status);
    setShowTemplates(false);
  }

  function insertDiagnosisStarter(problem: string) {
    if (!problem) return;
    setNursingDiagnosis(`${problem} related to [etiology — the cause] as evidenced by [signs and symptoms from your assessment].`);
    if (!title.trim()) setTitle(problem);
  }

  function updateIntervention(index: number, field: keyof CarePlanIntervention, value: string) {
    setInterventions((list) => list.map((item, i) => (i === index ? { ...item, [field]: value } : item)));
  }

  function addIntervention() {
    setInterventions((list) => [...list, { action: "", rationale: "" }]);
  }

  function removeIntervention(index: number) {
    setInterventions((list) => (list.length > 1 ? list.filter((_, i) => i !== index) : list));
  }

  // Completeness meter — one point per meaningfully filled ADPIE section.
  const completeness = useMemo(() => {
    const filledInterventions = interventions.filter((i) => i.action.trim().length > 0);
    const withRationales = filledInterventions.length > 0 && filledInterventions.every((i) => i.rationale.trim().length > 0);
    const checks = [
      { label: "Assessment", done: assessment.trim().length >= 20 },
      { label: "Diagnosis (PES format)", done: /related to/i.test(nursingDiagnosis) && /as evidenced by|risk for/i.test(nursingDiagnosis + " " + title) },
      { label: "Measurable goals", done: goals.trim().length >= 20 },
      { label: "2+ interventions", done: filledInterventions.length >= 2 },
      { label: "Every intervention has a rationale", done: withRationales },
      { label: "Evaluation", done: evaluation.trim().length >= 15 },
    ];
    const done = checks.filter((c) => c.done).length;
    return { checks, done, total: checks.length, pct: Math.round((done / checks.length) * 100) };
  }, [assessment, nursingDiagnosis, title, goals, interventions, evaluation]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          title,
          clientInfo,
          assessment,
          nursingDiagnosis,
          goals,
          interventions: interventions.filter((i) => i.action.trim().length > 0),
          evaluation,
          status,
        });
      }}
      className="space-y-4"
    >
      {!initial && (
        <div>
          <button
            type="button"
            onClick={() => setShowTemplates((v) => !v)}
            className="w-full rounded-xl border border-dashed border-emerald-300 bg-emerald-50 px-3 py-2.5 text-xs font-bold text-emerald-700 transition hover:bg-emerald-100"
          >
            {`✨ Start from a template — ${TEMPLATES.length} Ghana care plans`}
          </button>
          {showTemplates && (
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {TEMPLATES.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => loadTemplate(t.values)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-left text-xs font-semibold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  {t.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Completeness meter */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold text-slate-600">Care plan completeness</p>
          <p className={`text-xs font-extrabold ${completeness.pct === 100 ? "text-emerald-600" : "text-slate-500"}`}>
            {completeness.done}/{completeness.total} {completeness.pct === 100 ? "✓ Complete" : ""}
          </p>
        </div>
        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className={`h-full rounded-full transition-all duration-500 ${completeness.pct === 100 ? "bg-emerald-500" : "bg-amber-400"}`}
            style={{ width: `${Math.max(completeness.pct, 4)}%` }}
          />
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {completeness.checks.map((c) => (
            <span
              key={c.label}
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                c.done ? "bg-emerald-100 text-emerald-700" : "bg-white text-slate-400 border border-slate-200"
              }`}
            >
              {c.done ? "✓" : "○"} {c.label}
            </span>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Title</label>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Acute Pain related to surgical incision"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Client info</label>
        <input
          value={clientInfo}
          onChange={(e) => setClientInfo(e.target.value)}
          placeholder="e.g. 58 y/o, post-op day 1 following abdominal surgery"
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
        />
      </div>

      <FieldGroup
        label="1. Assessment 🔍"
        hint="Subjective (what the client says) & objective (what you observe/measure) data"
        value={assessment}
        onChange={setAssessment}
        placeholder="Subjective: client reports... Objective: vital signs, observations, labs..."
      />

      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">2. Nursing Diagnosis 🩺</label>
        <p className="mb-1 text-xs text-slate-400">
          PES format: <b>P</b>roblem <i>related to</i> <b>E</b>tiology <i>as evidenced by</i> <b>S</b>igns/Symptoms
        </p>
        <div className="mb-2 flex gap-2">
          <select
            value={diagnosisPick}
            onChange={(e) => {
              setDiagnosisPick(e.target.value);
              insertDiagnosisStarter(e.target.value);
            }}
            className="w-full rounded-lg border border-emerald-200 bg-emerald-50/60 px-3 py-2 text-xs font-semibold text-emerald-800 outline-none focus:border-emerald-500"
          >
            <option value="">💡 Pick a common diagnosis to start from…</option>
            {DIAGNOSIS_STARTERS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <textarea
          value={nursingDiagnosis}
          onChange={(e) => setNursingDiagnosis(e.target.value)}
          rows={2}
          placeholder="e.g. Acute Pain related to surgical tissue trauma as evidenced by..."
          className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
        />
      </div>

      <FieldGroup
        label="3. Goals / Expected Outcomes 🎯"
        hint="Make them SMART: Specific, Measurable, Achievable, Realistic, Time-bound. Write a short-term AND a long-term goal."
        value={goals}
        onChange={setGoals}
        rows={3}
        placeholder={"Short-term: Client will report pain at 3/10 or less within 1 hour...\nLong-term: Client will ambulate 50 meters independently by discharge..."}
      />

      <div>
        <div className="mb-1 flex items-center justify-between">
          <label className="block text-sm font-semibold text-slate-700">4. Interventions & Rationale ⚡</label>
          <button type="button" onClick={addIntervention} className="text-xs font-semibold text-emerald-700 hover:underline">
            + Add intervention
          </button>
        </div>
        <p className="mb-2 text-xs text-slate-400">
          Aim for at least 3-4. Every intervention needs a rationale — the &ldquo;why&rdquo; is what your tutor marks.
        </p>
        <div className="space-y-3">
          {interventions.map((item, i) => (
            <div key={i} className="rounded-lg border border-slate-200 p-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Intervention {i + 1}</span>
                {interventions.length > 1 && (
                  <button type="button" onClick={() => removeIntervention(i)} className="text-xs font-semibold text-rose-500 hover:underline">
                    Remove
                  </button>
                )}
              </div>
              <textarea
                value={item.action}
                onChange={(e) => updateIntervention(i, "action", e.target.value)}
                rows={2}
                placeholder="Nursing action / intervention"
                className="mt-2 w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
              />
              <textarea
                value={item.rationale}
                onChange={(e) => updateIntervention(i, "rationale", e.target.value)}
                rows={2}
                placeholder="Rationale — why this intervention helps"
                className="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
              />
            </div>
          ))}
        </div>
      </div>

      <FieldGroup
        label="5. Evaluation ✅"
        hint="Compare the outcome against each goal: goal met, partially met, or not met — and what happens to the plan next"
        value={evaluation}
        onChange={setEvaluation}
        rows={2}
        placeholder="e.g. Client reported pain decreased to 2/10 after intervention. Goal met — continue plan."
      />

      <div>
        <label className="mb-1 block text-sm font-semibold text-slate-700">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as CarePlanStatus)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500"
        >
          <option value="draft">Draft</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <button type="button" onClick={onCancel} className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100">
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 disabled:opacity-70"
        >
          {saving ? "Saving…" : initial ? "Save changes" : "Create care plan"}
        </button>
      </div>
    </form>
  );
}

function FieldGroup({
  label,
  hint,
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  label: string;
  hint: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  rows?: number;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-slate-700">{label}</label>
      <p className="mb-1 text-xs text-slate-400">{hint}</p>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        placeholder={placeholder}
        className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20"
      />
    </div>
  );
}
