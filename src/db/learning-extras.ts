import { db } from "@/db";
import { learningTopics } from "@/db/schema";
import { eq } from "drizzle-orm";

// ---------------------------------------------------------------------------
// "Quick Reference" learning topics — the high-yield review content that
// premium competitors bundle with their question banks (lab values, memory
// aids, prioritization frameworks, drug math, lifespan vitals). All content
// is original, written in the NurseGrid house style for the Ghana NMC exam.
//
// Inserted idempotently by slug so this can run safely against production
// without touching existing topics, bookmarks, or users.
// ---------------------------------------------------------------------------

export const EXTRA_LEARNING_TOPICS = [
  {
    slug: "lab-values-quick-reference",
    title: "Lab Values Quick Reference",
    category: "Quick Reference",
    icon: "lab",
    summary: "The normal ranges every exam question assumes you know — electrolytes, blood counts, renal, clotting, and drug levels in one place.",
    overview:
      "Exam questions rarely announce that a value is abnormal — they hand you the number and expect you to recognize it. This page collects the ranges worth memorizing cold. Study tip: learn the NORMAL range first, then learn what the body looks like just outside it on each side. Most lab questions are really asking 'high, low, or normal — and what does the nurse do about it?'",
    keyStructures: [
      "Sodium (Na+): 135–145 mEq/L — the 'water follows sodium' electrolyte; think neuro changes when it drifts.",
      "Potassium (K+): 3.5–5.0 mEq/L — the cardiac electrolyte; both directions cause dangerous rhythms.",
      "Calcium: 9.0–10.5 mg/dL — think muscles and nerves: low = tetany (Trousseau's, Chvostek's), high = weakness and confusion.",
      "Magnesium: 1.3–2.1 mEq/L — low magnesium looks like low calcium (hyperreflexia); high looks like sedation (absent reflexes).",
      "Glucose (fasting): 70–110 mg/dL — pair with HbA1c under ~6.5% for longer-term control.",
      "Hemoglobin: men ~14–18 g/dL, women ~12–16 g/dL; Hematocrit roughly three times the hemoglobin.",
      "WBC: 5,000–10,000/mm³ — under ~2,000 means protect the patient from infection (neutropenic precautions).",
      "Platelets: 150,000–400,000/mm³ — under ~50,000 means bleeding precautions; under 20,000 is critical.",
      "BUN: 10–20 mg/dL and Creatinine: 0.6–1.2 mg/dL — creatinine is the truer kidney marker; BUN also rises with dehydration.",
      "PT: ~11–12.5 sec with INR 2–3 on warfarin; aPTT therapeutic on heparin = 1.5–2× control (roughly 46–70 sec).",
      "Digoxin: 0.5–2.0 ng/mL — toxicity flags: nausea, visual changes, bradycardia; check potassium too.",
      "Lithium: 0.6–1.2 mEq/L — toxicity: diarrhea, vomiting, tremor, ataxia; sodium and fluid changes swing the level.",
      "Albumin: 3.5–5.0 g/dL — low albumin = edema and poor healing; also changes how protein-bound drugs behave.",
    ],
    normalFindings: [
      "ABGs: pH 7.35–7.45, PaCO2 35–45, HCO3 22–26, PaO2 80–100.",
      "Oxygen saturation: 95–100% for most healthy adults.",
      "Urine specific gravity: about 1.005–1.030 — high = concentrated (dehydration), very low = dilute (think DI).",
      "Total cholesterol under 200 mg/dL is the usual screening target.",
    ],
    nursingNotes: [
      "Always interpret a value against the CLIENT'S baseline and clinical picture, not the range alone.",
      "Potassium questions dominate exams: never give IV potassium as a push, and check urine output before adding it to fluids.",
      "A critical value is a report-now event — chart it AND tell the provider; documentation alone is a classic wrong answer.",
      "On anticoagulants, match the lab to the drug: heparin ↔ aPTT (antidote protamine), warfarin ↔ PT/INR (antidote vitamin K).",
      "For narrow-range drugs (digoxin, lithium, theophylline, phenytoin) know the toxicity picture as well as the number.",
    ],
    redFlags: [
      "K+ above ~6.0 or below ~2.5 — cardiac arrest territory; ECG and provider now.",
      "Sodium falling fast below 120 — seizure risk.",
      "Glucose under ~50 with symptoms — treat before you investigate.",
      "Platelets under 20,000 — spontaneous bleeding risk, including intracranial.",
    ],
    commonConditions: ["Hyperkalemia", "Hyponatremia", "Anemia", "Neutropenia", "DKA", "Renal failure", "Warfarin therapy", "Digoxin toxicity"],
    imageUrl: null,
    videoId: null,
    videoTitle: null,
    videoSource: null,
    sortOrder: 20,
  },
  {
    slug: "nursing-mnemonics",
    title: "Mnemonics & Memory Hooks",
    category: "Quick Reference",
    icon: "brain",
    summary: "Short memory hooks for the facts that slip away under exam pressure — assessment order, hypoglycemia, cane walking, gluten grains, and more.",
    overview:
      "A good mnemonic is a rescue rope for exam day: when the mind blanks, the hook pulls the fact back. These are the memory aids our own question rationales lean on, gathered in one place. Say them aloud, write them once, and they stick.",
    keyStructures: [
      "ADPIE — Assessment, Diagnosis, Planning, Implementation, Evaluation: the nursing process order; assessment almost always comes first in 'what should the nurse do first?' questions.",
      "ABC — Airway, Breathing, Circulation: the priority ladder that outranks nearly everything else.",
      "The 6 rights of medication: right patient, drug, dose, route, time — and documentation.",
      "The 5 P's of compartment syndrome: Pain (unrelieved), Pallor, Pulselessness, Paresthesia, Paralysis — pain out of proportion is the earliest.",
      "'Hot and dry — sugar high; cold and clammy — need some candy': hyperglycemia vs hypoglycemia at the bedside.",
      "'Good goes up, bad goes down' — leading leg on stairs with a cane or crutches.",
      "BROW — Barley, Rye, Oats, Wheat: the gluten grains a celiac client must avoid.",
      "FAST — Face drooping, Arm weakness, Speech difficulty, Time to act: stroke recognition.",
      "RICE — Rest, Ice, Compression, Elevation for acute soft-tissue injury.",
      "COAL — Cane Opposite Affected Leg; and remember the nurse stands on the client's weak side.",
      "'Stones, bones, groans, and moans' — the hypercalcemia / hyperparathyroidism picture.",
      "MAOI 'forbidden feast': aged, cured, fermented, and pickled foods carry tyramine — one celebration meal can be a hypertensive crisis.",
    ],
    normalFindings: [],
    nursingNotes: [
      "Mnemonics answer 'what is the list?' — the exam asks 'what comes FIRST on the list?' Practice ranking, not just reciting.",
      "Make your own hook for anything you miss twice; a self-made mnemonic outlasts a borrowed one.",
      "Pair each mnemonic with one practice question so the memory hook connects to a clinical picture.",
    ],
    redFlags: [],
    commonConditions: ["Prioritization", "Medication safety", "Stroke", "Diabetes", "Celiac disease", "Compartment syndrome"],
    imageUrl: null,
    videoId: null,
    videoTitle: null,
    videoSource: null,
    sortOrder: 21,
  },
  {
    slug: "prioritization-frameworks",
    title: "Prioritization Frameworks",
    category: "Quick Reference",
    icon: "target",
    summary: "The decision rules behind every 'who do you see first?' question — ABC, Maslow, acute vs chronic, stable vs unstable, and safe delegation.",
    overview:
      "Prioritization questions are won with frameworks, not memorized answers. When four clients compete for your attention, run them through the same filters in the same order and the answer usually falls out. This page is the filter set.",
    keyStructures: [
      "Filter 1 — ABC: airway beats breathing beats circulation; an unprotected airway outranks almost any other finding.",
      "Filter 2 — Maslow: physiological needs before safety, safety before psychosocial. The crying client waits for the bleeding one.",
      "Filter 3 — Acute vs chronic: a NEW problem beats a long-standing one, even when the chronic one sounds worse.",
      "Filter 4 — Unstable vs stable: trending-worse beats steady. Look for the client whose numbers are MOVING.",
      "Filter 5 — Assess before implement: if you haven't assessed, the assessment option usually wins — unless the scenario is a recognized emergency where action IS the assessment (dystonia, seizure, hemorrhage).",
      "Least restrictive first: verbal de-escalation before medication, medication before restraint — always in that order.",
      "Delegation rule: RNs keep assessment, teaching, evaluation, and unstable clients; LPNs take stable clients with predictable outcomes; assistive personnel take routine care tasks.",
    ],
    normalFindings: [],
    nursingNotes: [
      "'Expected for the condition' findings rarely win a see-first question — hunt the finding that does NOT belong.",
      "In report-style questions, translate each client into one line: What system? Getting worse? New or old? Then rank.",
      "For phone-triage questions, imagine each caller an hour from now — return the call for the client whose next hour could be catastrophic.",
      "Post-op questions: know each surgery's signature complication (thyroidectomy → airway; hip replacement → dislocation; abdominal → hemorrhage then ileus).",
    ],
    redFlags: [
      "Answer choices that medicate away a warning sign (analgesia for unassessed pain under a cast).",
      "Options that pass the buck — calling the physician before your own assessment, when assessment is possible and safe.",
      "Restraint or seclusion options when a lesser step hasn't been tried.",
    ],
    commonConditions: ["Triage", "Delegation", "Report handoff", "Phone triage", "Post-op priorities"],
    imageUrl: null,
    videoId: null,
    videoTitle: null,
    videoSource: null,
    sortOrder: 22,
  },
  {
    slug: "medication-safety-calculations",
    title: "Drug Calculations & Med Safety",
    category: "Quick Reference",
    icon: "calc",
    summary: "The dose formula, drip-rate math, unit conversions, and high-alert drug rules — the numbers side of safe medication practice.",
    overview:
      "Every dosage question is one of a handful of set-ups. Master the basic formula, the drip-rate formula, and a short conversion table, and the math stops being the hard part — leaving you free to focus on the safety judgment the question is really testing.",
    keyStructures: [
      "Basic dose formula: (Desired ÷ Have) × Quantity. Example: order 500 mg, tablets are 250 mg each → (500 ÷ 250) × 1 = 2 tablets.",
      "IV drip rate (gtt/min): (Volume in mL × drop factor) ÷ time in minutes. Example: 1,000 mL over 8 h with a 15 gtt/mL set → (1000 × 15) ÷ 480 ≈ 31 gtt/min.",
      "mL/hour on a pump: total volume ÷ total hours. 1,000 mL over 8 h = 125 mL/h.",
      "Weight-based dosing: convert kg first (divide lb by 2.2), then multiply by the mg/kg order — and check it against the safe range.",
      "Conversions to know: 1 g = 1,000 mg; 1 mg = 1,000 mcg; 1 kg = 2.2 lb; 1 tsp = 5 mL; 1 tbsp = 15 mL; 1 oz = 30 mL; 1 L = 1,000 mL.",
      "Rounding rule of thumb: tablets to the half only if scored; mL doses usually to one decimal; drops to the whole number.",
    ],
    normalFindings: [],
    nursingNotes: [
      "A complete order needs drug, dose, route, and frequency — anything missing goes back for clarification before transcribing.",
      "High-alert families deserve a second check: insulin, anticoagulants, opioids, potassium, and chemotherapy.",
      "Never give IV potassium by push; dilute and use a pump.",
      "Insulin mixing: air into cloudy, air into clear, draw CLEAR (regular) first, then cloudy (NPH) — and match each insulin to ITS ordered units.",
      "If your answer requires a strange number of tablets or a huge volume, recheck the set-up — exam math usually lands on tidy numbers.",
      "Sound-alike drugs are a deliberate trap: read the full generic name, not the first syllable.",
    ],
    redFlags: [
      "Any calculated dose outside the reference safe range — hold and verify before giving.",
      "A verbal order for a high-alert drug without a read-back.",
      "An infusion 'catch-up' after a delay — never double a rate to make up time without an order.",
    ],
    commonConditions: ["Dosage calculation", "IV therapy", "Insulin administration", "Pediatric dosing", "High-alert medications"],
    imageUrl: null,
    videoId: null,
    videoTitle: null,
    videoSource: null,
    sortOrder: 23,
  },
  {
    slug: "vital-signs-lifespan",
    title: "Vital Signs Across the Lifespan",
    category: "Quick Reference",
    icon: "pulse",
    summary: "Normal heart rate, respirations, and blood pressure from newborn to older adult — the age-adjusted numbers behind every 'is this normal?' question.",
    overview:
      "A heart rate of 140 is an emergency in an adult and an ordinary Tuesday for a newborn. Age changes what 'normal' means, and exam writers love to test whether you know whose normal is whose. Anchor these ranges and half the pediatric vital-sign questions answer themselves.",
    keyStructures: [
      "Newborn: heart rate ~120–160/min (sleeping can dip lower), respirations ~30–60/min with brief periodic pauses, BP around 65–95/30–60.",
      "Infant (1–12 months): HR ~100–160, RR ~25–40 (count a FULL minute before disturbing the baby).",
      "Toddler (1–3 y): HR ~90–140, RR ~20–30.",
      "Preschool (3–5 y): HR ~80–120, RR ~20–25.",
      "School age (6–12 y): HR ~70–110, RR ~18–22.",
      "Adolescent to adult: HR ~60–100, RR ~12–20, BP settling toward ~120/80 or below.",
      "Older adults: temperature often runs LOWER (reduced metabolic rate), so 'normal' 37°C may already be a fever for them; BP tends to run higher with vascular stiffening.",
    ],
    normalFindings: [
      "Newborn apnea pauses under 15 seconds are normal periodic breathing — longer than 15 seconds is reportable.",
      "Acrocyanosis (blue hands and feet) is normal in the first hours after birth; central or circumoral cyanosis is not.",
      "Sinus arrhythmia (rate varying with breathing) is a normal finding in children and young adults.",
    ],
    nursingNotes: [
      "In infants, take the least disturbing measurements first: respirations by observation, then apical pulse, invasive temperature last.",
      "Count infant respirations and apical pulses for a FULL minute — their rhythms are naturally irregular.",
      "A child compensates long and crashes fast: a NORMAL blood pressure does not rule out shock; watch the heart rate and perfusion instead.",
      "Compare every reading against the client's own baseline — trend beats snapshot at every age.",
    ],
    redFlags: [
      "Newborn resting respiratory rate above 60 — sepsis or hypoxia sign.",
      "Quietly alert newborn with a heart rate above 160–180 — investigate; crying explains tachycardia, calm does not.",
      "Rising systolic pressure with a widening pulse pressure and slowing pulse after a head injury — increased intracranial pressure.",
      "Bradycardia in an infant is an emergency — their cardiac output depends on rate.",
    ],
    commonConditions: ["Pediatric assessment", "Newborn assessment", "Shock recognition", "Geriatric assessment", "Head injury"],
    imageUrl: null,
    videoId: null,
    videoTitle: null,
    videoSource: null,
    sortOrder: 24,
  },
];

// Insert any missing extra topics (idempotent by slug). Never deletes or
// modifies existing rows — safe to run against production repeatedly.
export async function insertExtraLearningTopics(): Promise<{ inserted: number; skipped: number }> {
  let inserted = 0;
  let skipped = 0;
  for (const t of EXTRA_LEARNING_TOPICS) {
    const existing = await db
      .select({ id: learningTopics.id })
      .from(learningTopics)
      .where(eq(learningTopics.slug, t.slug))
      .limit(1);
    if (existing.length > 0) {
      skipped += 1;
      continue;
    }
    await db.insert(learningTopics).values({
      slug: t.slug,
      title: t.title,
      category: t.category,
      icon: t.icon,
      summary: t.summary,
      overview: t.overview,
      keyStructures: [...t.keyStructures],
      normalFindings: [...t.normalFindings],
      nursingNotes: [...t.nursingNotes],
      redFlags: [...t.redFlags],
      commonConditions: [...t.commonConditions],
      imageUrl: t.imageUrl,
      videoId: t.videoId,
      videoTitle: t.videoTitle,
      videoSource: t.videoSource,
      sortOrder: t.sortOrder,
    });
    inserted += 1;
  }
  return { inserted, skipped };
}
