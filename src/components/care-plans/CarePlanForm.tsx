"use client";

import { useMemo, useState } from "react";
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
const TEMPLATES: { key: string; label: string; values: CarePlanFormValues }[] = [
  {
    key: "pain",
    label: "🤕 Acute Pain (post-op)",
    values: {
      title: "Acute Pain related to surgical incision",
      clientInfo: "58 y/o client, post-op day 1 following abdominal surgery",
      assessment:
        "Subjective: client reports incisional pain 7/10, worse with movement and coughing.\nObjective: guarding behavior, grimacing, HR 96, BP 138/86, incision clean/dry/intact with staples.",
      nursingDiagnosis:
        "Acute Pain related to surgical tissue trauma as evidenced by client report of pain 7/10 and guarding behavior.",
      goals:
        "Short-term: Client will report pain at 3/10 or less within 1 hour of intervention.\nLong-term: Client will demonstrate use of splinting technique when coughing/moving by end of shift and require decreasing analgesia by discharge.",
      interventions: [
        { action: "Assess pain using a 0-10 scale before and 1 hour after analgesic administration.", rationale: "Establishes a baseline and evaluates effectiveness of pain management." },
        { action: "Administer prescribed analgesic as ordered and monitor for effectiveness and side effects.", rationale: "Pharmacologic management addresses the physiologic source of pain." },
        { action: "Teach and encourage incisional splinting with a pillow when coughing or repositioning.", rationale: "Reduces tension on the incision and decreases pain during movement." },
        { action: "Position client for comfort and reassess response to non-pharmacologic measures.", rationale: "Non-pharmacologic strategies can reduce reliance on medication alone." },
      ],
      evaluation:
        "Client reported pain decreased to 2/10 one hour after analgesic administration and demonstrated correct splinting technique. Goal met.",
      status: "active",
    },
  },
  {
    key: "fluid",
    label: "💧 Deficient Fluid Volume (gastroenteritis)",
    values: {
      title: "Deficient Fluid Volume related to vomiting and diarrhea",
      clientInfo: "24 y/o client admitted with 2 days of vomiting and diarrhea",
      assessment:
        "Subjective: client reports weakness, dizziness on standing, and thirst.\nObjective: dry mucous membranes, poor skin turgor, urine dark and concentrated (SG 1.030), HR 112, BP 98/60, weight down 2 kg from stated baseline.",
      nursingDiagnosis:
        "Deficient Fluid Volume related to excessive gastrointestinal losses as evidenced by tachycardia, hypotension, poor skin turgor, and concentrated urine.",
      goals:
        "Short-term: Client will maintain urine output above 30 mL/hour within 8 hours of starting fluid therapy.\nLong-term: Client will have moist mucous membranes, HR below 100, and stable BP without orthostatic changes within 48 hours.",
      interventions: [
        { action: "Monitor intake and output hourly and record urine specific gravity as ordered.", rationale: "Urine output above 30 mL/hour is the key indicator that vital organs are being perfused." },
        { action: "Administer IV fluids as prescribed and monitor the infusion site and rate.", rationale: "Replaces lost volume; monitoring prevents fluid overload during rehydration." },
        { action: "Check vital signs including orthostatic BP every 4 hours.", rationale: "Rising HR and falling BP are early signs of continued volume deficit." },
        { action: "Offer small, frequent amounts of oral rehydration fluid as tolerated.", rationale: "Oral rehydration restores volume while respecting a recovering gut." },
        { action: "Weigh the client daily on the same scale at the same time.", rationale: "Daily weight is the most sensitive measure of fluid balance — 1 kg equals about 1 liter." },
      ],
      evaluation:
        "After 24 hours: urine output 45 mL/hour, HR 88, BP 112/70 without orthostatic drop, mucous membranes moist. Short-term goal met; continue plan.",
      status: "active",
    },
  },
  {
    key: "infection",
    label: "🦠 Risk for Infection (wound)",
    values: {
      title: "Risk for Infection related to surgical wound",
      clientInfo: "45 y/o client, post-op day 2 with abdominal surgical wound and IV cannula in situ",
      assessment:
        "Objective: surgical incision edges approximated, no drainage, mild peri-incisional redness. Temp 37.2°C, WBC 8,500/mm³. IV site clean, no phlebitis. Client is diabetic (fasting glucose 8.9 mmol/L).",
      nursingDiagnosis:
        "Risk for Infection related to break in skin integrity, invasive lines, and impaired glucose control.",
      goals:
        "Short-term: Client will remain free of local signs of infection (increasing redness, warmth, purulent drainage) throughout admission.\nLong-term: Client will verbalize wound-care and infection warning signs to report before discharge.",
      interventions: [
        { action: "Perform hand hygiene before and after all client contact and use aseptic technique for dressing changes.", rationale: "Hand hygiene is the single most effective measure to prevent healthcare-associated infection." },
        { action: "Assess the wound and IV site every shift for redness, warmth, swelling, drainage, and pain.", rationale: "Early recognition allows treatment before systemic infection develops." },
        { action: "Monitor temperature every 4 hours and review WBC results.", rationale: "Fever and rising WBC are early systemic indicators of infection." },
        { action: "Monitor and support glycemic control per orders.", rationale: "Elevated glucose impairs white-cell function and delays wound healing." },
        { action: "Teach the client wound care, hand hygiene, and the warning signs to report after discharge.", rationale: "The client continues protection at home where most surgical-site infections declare themselves." },
      ],
      evaluation:
        "Day 4: wound edges clean, afebrile, WBC within normal range. Client correctly states three warning signs to report. Goals being met; continue plan.",
      status: "active",
    },
  },
  {
    key: "airway",
    label: "🫁 Ineffective Airway Clearance (pneumonia)",
    values: {
      title: "Ineffective Airway Clearance related to retained secretions",
      clientInfo: "68 y/o client admitted with community-acquired pneumonia",
      assessment:
        "Subjective: client reports difficulty coughing up 'thick' sputum and fatigue.\nObjective: coarse crackles right base, productive cough with thick yellow sputum, RR 26, SpO2 91% on room air, temp 38.4°C.",
      nursingDiagnosis:
        "Ineffective Airway Clearance related to thick tracheobronchial secretions as evidenced by coarse crackles, productive cough, and SpO2 of 91%.",
      goals:
        "Short-term: Client will maintain SpO2 at or above 94% within 24 hours.\nLong-term: Client will demonstrate effective coughing and have clear or clearing breath sounds by discharge.",
      interventions: [
        { action: "Position the client upright (high Fowler's) and reposition every 2 hours.", rationale: "Upright positioning maximizes lung expansion and mobilizes secretions." },
        { action: "Encourage fluid intake of 2-3 liters per day unless contraindicated.", rationale: "Hydration thins secretions so they can be coughed out." },
        { action: "Teach deep breathing, effective coughing, and incentive spirometer use every hour while awake.", rationale: "Sustained maximal inspirations open alveoli and move secretions toward larger airways." },
        { action: "Administer oxygen and prescribed antibiotics/nebulizers as ordered; monitor SpO2 and breath sounds every 4 hours.", rationale: "Treats the infection and bronchospasm while tracking response to therapy." },
      ],
      evaluation:
        "48 hours: SpO2 95% on room air, sputum thinner and lighter, crackles reduced. Short-term goal met; continue toward discharge goal.",
      status: "active",
    },
  },
  {
    key: "anxiety",
    label: "😰 Anxiety (pre-operative)",
    values: {
      title: "Anxiety related to upcoming surgery",
      clientInfo: "35 y/o client scheduled for surgery tomorrow morning, first hospital admission",
      assessment:
        "Subjective: client states 'I can't stop thinking something will go wrong' and reports poor sleep.\nObjective: restlessness, frequent questions, HR 104, BP 142/88, wringing hands.",
      nursingDiagnosis:
        "Anxiety related to anticipated surgery and unfamiliar environment as evidenced by verbalized fear, restlessness, and elevated vital signs.",
      goals:
        "Short-term: Client will verbalize two specific concerns and report anxiety reduced to a manageable level tonight.\nLong-term: Client will demonstrate one coping technique (slow breathing) and describe what to expect before and after surgery prior to transfer to theatre.",
      interventions: [
        { action: "Stay with the client, use a calm voice, and encourage them to express their concerns.", rationale: "Presence and expression reduce anxiety; concerns can't be addressed until they are named." },
        { action: "Provide clear, honest preoperative teaching about what to expect before, during, and after surgery.", rationale: "Fear of the unknown is the largest driver of preoperative anxiety." },
        { action: "Teach and practice slow deep-breathing together.", rationale: "Gives the client a self-controlled tool that lowers the physiologic stress response." },
        { action: "Reduce stimulation at night and cluster care to protect sleep.", rationale: "Rest improves coping capacity and surgical readiness." },
      ],
      evaluation:
        "Client named two concerns, practiced breathing exercise, and stated 'I feel calmer knowing what will happen.' HR 86 at evening check. Goals met.",
      status: "active",
    },
  },
];

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
            ✨ Start from a template — 5 common care plans
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
