"use client";

import { useState } from "react";
import type { CarePlan, CarePlanIntervention, CarePlanStatus } from "@/lib/types";

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

const EXAMPLE: CarePlanFormValues = {
  title: "Example: Acute Pain related to surgical incision",
  clientInfo: "58 y/o client, post-op day 1 following abdominal surgery",
  assessment:
    "Subjective: client reports incisional pain 7/10, worse with movement and coughing.\nObjective: guarding behavior, grimacing, HR 96, BP 138/86, incision clean/dry/intact with staples.",
  nursingDiagnosis: "Acute Pain related to surgical tissue trauma as evidenced by client report of pain 7/10 and guarding behavior.",
  goals: "Client will report pain at 3/10 or less within 1 hour of intervention.\nClient will demonstrate use of splinting technique when coughing/moving by end of shift.",
  interventions: [
    { action: "Assess pain using a 0-10 scale before and 1 hour after analgesic administration.", rationale: "Establishes a baseline and evaluates effectiveness of pain management." },
    { action: "Administer prescribed analgesic as ordered and monitor for effectiveness and side effects.", rationale: "Pharmacologic management addresses the physiologic source of pain." },
    { action: "Teach and encourage incisional splinting with a pillow when coughing or repositioning.", rationale: "Reduces tension on the incision and decreases pain during movement." },
    { action: "Position client for comfort and reassess response to non-pharmacologic measures.", rationale: "Non-pharmacologic strategies can reduce reliance on medication alone." },
  ],
  evaluation:
    "Client reported pain decreased to 2/10 one hour after analgesic administration and demonstrated correct splinting technique. Goal met.",
  status: "active",
};

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

  function loadExample() {
    setTitle(EXAMPLE.title);
    setClientInfo(EXAMPLE.clientInfo);
    setAssessment(EXAMPLE.assessment);
    setNursingDiagnosis(EXAMPLE.nursingDiagnosis);
    setGoals(EXAMPLE.goals);
    setInterventions(EXAMPLE.interventions);
    setEvaluation(EXAMPLE.evaluation);
    setStatus(EXAMPLE.status);
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
        <button
          type="button"
          onClick={loadExample}
          className="w-full rounded-lg border border-dashed border-emerald-300 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-100"
        >
          ✨ Load an example ADPIE care plan
        </button>
      )}

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
        label="1. Assessment"
        hint="Subjective & objective data"
        value={assessment}
        onChange={setAssessment}
        placeholder="Subjective: client reports... Objective: vital signs, observations, labs..."
      />

      <FieldGroup
        label="2. Nursing Diagnosis"
        hint="NANDA-style: Problem related to Etiology as evidenced by Signs/Symptoms"
        value={nursingDiagnosis}
        onChange={setNursingDiagnosis}
        rows={2}
        placeholder="e.g. Acute Pain related to surgical tissue trauma as evidenced by..."
      />

      <FieldGroup
        label="3. Goals / Expected Outcomes"
        hint="Specific, measurable, realistic, time-bound"
        value={goals}
        onChange={setGoals}
        rows={2}
        placeholder="e.g. Client will report pain at 3/10 or less within 1 hour..."
      />

      <div>
        <div className="mb-1 flex items-center justify-between">
          <label className="block text-sm font-semibold text-slate-700">4. Interventions & Rationale</label>
          <button type="button" onClick={addIntervention} className="text-xs font-semibold text-emerald-700 hover:underline">
            + Add intervention
          </button>
        </div>
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
        label="5. Evaluation"
        hint="Was the goal met? What did you observe?"
        value={evaluation}
        onChange={setEvaluation}
        rows={2}
        placeholder="e.g. Client reported pain decreased to 2/10 after intervention. Goal met."
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
