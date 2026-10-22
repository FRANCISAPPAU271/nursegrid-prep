import type { AuthoredQuestion } from "./authored-bank";

/**
 * Dedicated NCLEX-style clinical scenario questions for Renal, Fluid & Electrolyte Nursing modules.
 * Authored specifically to test clinical judgment, bedside fluid management,
 * electrolyte emergencies, acute kidney injury, dialysis care, and NMC competencies.
 */
export const RENAL_MODULE_SCENARIOS: AuthoredQuestion[] = [
  // ==========================================
  // MODULE 1: FOUNDATIONS & ASSESSMENT (3 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-RENAL-001",
    categorySlug: "med-surg",
    stem: "A 64-year-old client with chronic hypertension has a baseline serum creatinine of 1.0 mg/dL (88 mcmol/L). Following an episode of severe dehydration, repeat testing reveals a serum creatinine of 2.1 mg/dL (186 mcmol/L) and blood urea nitrogen (BUN) of 42 mg/dL. How should the nurse interpret this rise in serum creatinine?",
    choices: [
      { id: "a", text: "Doubling of creatinine represents an acute loss of about 50% of the baseline glomerular filtration rate" },
      { id: "b", text: "A circadian fluctuation, since creatinine varies through the day within its normal physiological limits in health" },
      { id: "c", text: "Increased dietary protein catabolism, with a preserved glomerular filtration rate" },
      { id: "d", text: "Permanent end-stage renal fibrosis, which now requires immediate peritoneal dialysis" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Doubling of creatinine represents an acute loss of about 50% of the baseline glomerular filtration rate\" Serum creatinine is an inverse biomarker of glomerular filtration rate (GFR). Under steady-state conditions, doubling of serum creatinine (from 1.0 to 2.1 mg/dL) reflects an approximate 50% reduction in GFR and renal functional capacity. In acute dehydration, this elevation points to acute kidney injury (prerenal azotemia) requiring rapid fluid resuscitation before acute tubular necrosis occurs. Why the other options fail: option b calls a doubling of creatinine a circadian variation, when normal variation is a few micromoles and never a doubling in one illness. Option c blames dietary protein for a change that dehydration explains, and BUN rises with protein while creatinine does not. Option d diagnoses irreversible fibrosis from a single acute value, before any attempt at resuscitation.",
    strategy: "Renal Physiology Rule: Serum creatinine has an inverse relationship with GFR. A doubling of creatinine signifies an approximate 50% drop in renal filtration rate.",
    difficulty: "medium",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:foundations", "lesson:renal-anatomy-and-physiology", "serum-creatinine", "gfr", "renal-function"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RENAL-002",
    categorySlug: "fluid-electrolyte",
    stem: "A client with decompensated cirrhosis has massive abdominal ascites and 3+ bilateral pedal edema. Vital signs are: blood pressure 88/54 mmHg, pulse 112 beats/min, and urine output 18 mL/hour. Which fluid compartment imbalance does this clinical scenario represent?",
    choices: [
      { id: "a", text: "True total-body fluid deficit across all compartments, which would explain both the ascites and the pedal oedema" },
      { id: "b", text: "Intravascular overload with a raised central venous pressure, since the client is oedematous" },
      { id: "c", text: "Third-space sequestration of fluid with severe intravascular depletion, or effective arterial hypovolaemia" },
      { id: "d", text: "An intracellular shift causing cellular hyperosmolality, which would draw fluid out of the vessels" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Third-space sequestration of fluid with severe intravascular depletion, or effective arterial hypovolaemia\" In cirrhosis and severe hypoalbuminemia, loss of plasma oncotic pressure combined with splanchnic arterial vasodilation allows intravascular fluid to transudate into the peritoneal cavity (third-spacing: ascites and interstitial edema). Despite massive total-body fluid accumulation, the client suffers from critical intravascular hypovolemia (manifested by hypotension, tachycardia, and oliguria), creating a prerenal state. Why the other options fail: option a denies the ascites and oedema that show total body fluid is increased, not reduced. Option b reads oedema as intravascular filling, when the pressure and the urine output show the vessels are empty. Option d invents an intracellular shift, which would not produce ascites or a low blood pressure.",
    strategy: "Third-spacing pathology: Massive fluid trapped in interstitial/peritoneal spaces WHILE intravascular space is empty -> hypotension, tachycardia, oliguria.",
    difficulty: "hard",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:foundations", "lesson:body-fluids-compartments-and-regulation", "third-spacing", "intravascular-depletion", "fluid-compartments"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RENAL-003",
    categorySlug: "fluid-electrolyte",
    stem: "A patient returns to the ward after a percutaneous renal biopsy. What is the nurse's priority in the first few hours?",
    choices: [
      { id: "a", text: "Keep the patient lying flat, watch the puncture site and check each urine specimen for blood" },
      { id: "b", text: "Encourage the patient to walk about early so that the kidney does not become stiff" },
      { id: "c", text: "Withhold all oral fluids for twenty-four hours after the procedure so that the kidney can rest completely" },
      { id: "d", text: "Send the patient home as soon as the puncture wound is dry, with no further observation needed" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — “Keep the patient lying flat, watch the puncture site and check each urine specimen for blood”. A renal biopsy passes a needle through the skin and muscle into a kidney that is rich in blood at systemic pressure, so the complication to fear is bleeding — into the urine, around the kidney as a perirenal haematoma, or into the retroperitoneum. Lying flat for several hours reduces the chance of re-bleeding and keeps the patient still. The nurse then watches the puncture site for swelling or oozing, checks the pulse and blood pressure for a fall, asks about flank or back pain, and inspects every specimen of urine for frank or microscopic blood. Oral fluids are encouraged, not withheld, so that the urinary tract is flushed through, and the patient avoids lifting and straining for about a week. Why the other options fail: early walking raises the risk of bleeding from the puncture (B); fluid restriction concentrates the urine and makes haematuria harder to detect while doing nothing to rest the kidney (C); and discharging the patient as soon as the skin is dry ignores the internal bleeding that is the real hazard (D).",
    strategy: "Fluid monitoring gold standard: Daily body weight (same scale, same time, after voiding). 1 kg weight change = 1 liter (1,000 mL) of fluid.",
    difficulty: "easy",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:foundations", "lesson:renal-and-fluid-assessment", "daily-weight", "fluid-monitoring", "assessment"],
    isFree: true,
  },

  // ==========================================
  // MODULE 2: FLUID IMBALANCE & IV THERAPY (3 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-RENAL-004",
    categorySlug: "fluid-electrolyte",
    stem: "A 32-year-old presents to the cholera treatment centre with severe 'rice-water' diarrhea and vomiting for 14 hours. Assessment reveals: profound lethargy, sunken eyes, skin tenting persisting for > 3 seconds, radial pulses faint and thready at 138 beats/min, blood pressure 74/42 mmHg, and dry mucous membranes. What is the immediate priority intervention?",
    choices: [
      { id: "a", text: "Give oral rehydration solution, 200 mL by cup every 10 minutes, and reassess the skin pinch after an hour" },
      { id: "b", text: "Give intramuscular metoclopramide to stop the vomiting before replacing fluid" },
      { id: "c", text: "Establish large-bore IV access and give 1,000 mL of Ringer's lactate or 0.9% saline over 15 to 30 minutes" },
      { id: "d", text: "Collect a stool specimen for dark-field microscopy before starting resuscitation" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Establish large-bore IV access and give 1,000 mL of Ringer's lactate or 0.9% saline over 15 to 30 minutes\" Severe dehydration with signs of hypovolemic shock (hypotension, thready tachycardia, delayed skin pinch, lethargy) represents a critical medical emergency (WHO Plan C). Oral rehydration alone is insufficient and unsafe in shock or altered consciousness. The immediate priority is rapid intravenous resuscitation with balanced isotonic crystalloids (Ringer's lactate or 0.9% normal saline) through large-bore IV access to restore intravascular volume. Why the other options fail: option a gives oral fluid to a lethargic client in shock, which is unsafe and far too slow. Option b treats the vomiting and leaves the circulation empty. Option d puts a laboratory test ahead of resuscitation in a client with a systolic pressure of 74 mmHg.",
    strategy: "Severe dehydration shock (Plan C): Large-bore IV access -> Rapid bolus of isotonic crystalloids (Ringer's lactate / Normal Saline) immediately.",
    difficulty: "easy",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:fluid-imbalances-and-iv-therapy", "lesson:dehydration-and-hypovolaemia", "hypovolemic-shock", "fluid-resuscitation", "cholera"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RENAL-005",
    categorySlug: "med-surg",
    stem: "Anuric acute kidney injury occurs in a client who received 4 liters of intravenous fluids over 12 hours. Assessment reveals: severe dyspnea, orthopnea, jugular venous distention to the angle of the jaw at 45 degrees, S3 gallop, and diffuse wet crackles across bilateral lower and middle lung fields. Oxygen saturation is 84% on room air. What are the nurse's immediate priority actions?",
    choices: [
      { id: "a", text: "Lay the client flat and give a 500 mL bolus of 5% dextrose, to support the circulation while the cause is being found" },
      { id: "b", text: "Perform chest percussion and walk the client round the ward to clear the secretions" },
      { id: "c", text: "Give 100 mL of 20% mannitol by rapid intravenous push, and withhold oxygen until the provider reviews" },
      { id: "d", text: "Sit the client upright, give high-flow oxygen, stop the IV fluids, and call the provider for diuretic or dialysis" }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Sit the client upright, give high-flow oxygen, stop the IV fluids, and call the provider for diuretic or dialysis\" Acute pulmonary edema resulting from iatrogenic fluid overload in an oliguric/anuric client is a life-threatening emergency. Immediate nursing priorities: 1) Position in high-Fowler's with legs dependent to drop cardiac preload and ease ventilation, 2) Apply high-flow oxygen immediately, 3) Shut off IV fluid infusions immediately, and 4) Alert the medical team for urgent loop diuretics or emergent ultrafiltration/hemodialysis. Why the other options fail: option a lies the client flat, which increases venous return into already flooded lungs, and gives more fluid. Option b exercises a hypoxic client and does nothing for the oedema. Option c gives an osmotic load by push and withholds oxygen from a client saturating at 84%.",
    strategy: "Fluid overload pulmonary edema sequence: High-Fowler's position -> Stop IV fluids -> Apply High-flow O2 -> Urgent dialysis/diuretics.",
    difficulty: "medium",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:fluid-imbalances-and-iv-therapy", "lesson:fluid-overload-and-oedema", "pulmonary-edema", "anuria", "fluid-overload"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RENAL-006",
    categorySlug: "pharmacology-parenteral",
    stem: "A client with symptomatic severe hyponatremia is prescribed an intravenous infusion of 3% sodium chloride (hypertonic saline) at 40 mL/hour. Which nursing intervention is mandatory to ensure patient safety during the infusion?",
    choices: [
      { id: "a", text: "Infuse by pump, check neurological status often, and keep the sodium rise within 8 to 10 mEq/L in 24 hours" },
      { id: "b", text: "Run it by gravity through a 22-gauge hand vein, so that the infusion can be stopped quickly" },
      { id: "c", text: "Run it alongside 500 mL of 0.45% saline, so that the sodium is corrected more evenly" },
      { id: "d", text: "Tell the client to drink two litres of water, so that the sodium is distributed harmlessly through the body" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Infuse by pump, check neurological status often, and keep the sodium rise within 8 to 10 mEq/L in 24 hours\" Hypertonic saline (3% NaCl) is a high-alert intravenous solution. Rapid correction of chronic hyponatremia causes sudden osmotic dehydration of brain cells, resulting in catastrophic Osmotic Demyelination Syndrome (central pontine myelinolysis), causing irreversible flaccid quadriplegia and 'locked-in' syndrome. Guidelines mandate strictly limiting the sodium correction rate to no more than 8-10 mEq/L over 24 hours, infused via pump with close neuro checks. Why the other options fail: option b gives a high-alert solution by gravity through a small peripheral vein, which cannot control the rate. Option c adds hypotonic fluid to a hypertonic infusion, which defeats the correction. Option d gives free water to a client who is already water-loaded.",
    strategy: "3% Hypertonic Saline rule: High-alert infusion! Max correction rate: 8-10 mEq/L per 24 hours. Rapid correction causes fatal osmotic demyelination syndrome.",
    difficulty: "hard",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:fluid-imbalances-and-iv-therapy", "lesson:intravenous-fluid-therapy", "hypertonic-saline", "osmotic-demyelination", "infusion-safety"],
    isFree: false,
  },

  // ==========================================
  // MODULE 3: ELECTROLYTE IMBALANCES (4 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-RENAL-007",
    categorySlug: "fluid-electrolyte",
    stem: "A client with small cell lung cancer develops Syndrome of Inappropriate Antidiuretic Hormone (SIADH). Serum sodium drops to 116 mEq/L (reference 135-145 mEq/L), and the client becomes disoriented, obtunded, and develops generalized tonic-clonic seizures. What is the immediate pharmacological intervention?",
    choices: [
      { id: "a", text: "5% dextrose at 150 mL/hour, to dilute the sodium and relieve the cerebral oedema" },
      { id: "b", text: "A 100 mL bolus of 3% hypertonic saline over 10 to 15 minutes, to relieve the cerebral oedema" },
      { id: "c", text: "Subcutaneous desmopressin 4 micrograms, to stop the inappropriate antidiuresis" },
      { id: "d", text: "Oral sodium chloride tablets with 1 litre of free water, which is safer than hypertonic saline" }
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"A 100 mL bolus of 3% hypertonic saline over 10 to 15 minutes, to relieve the cerebral oedema\" Severe acute hyponatremia (< 120 mEq/L) with neurological emergencies (seizures, coma, brainstem herniation) is caused by severe cerebral edema from osmotic water entry into brain cells. The emergency intervention is 100-150 mL of IV 3% hypertonic saline infused over 10-15 minutes (repeatable up to 2 times if seizures persist) to acutely raise serum sodium by 4-6 mEq/L, reversing brain swelling and halting seizures. Why the other options fail: option a gives free water, which lowers the sodium further and worsens the cerebral oedema. Option c treats the antidiuresis rather than the emergency, and subcutaneous desmopressin acts too slowly. Option d gives salt with a litre of water, which does not raise the sodium when the client is already retaining water.",
    strategy: "Severe hyponatremic seizures (< 120 mEq/L): Immediate IV 3% hypertonic saline bolus to shrink cerebral edema and arrest seizures.",
    difficulty: "hard",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:electrolyte-imbalances", "lesson:sodium-imbalances", "hyponatremia", "siadh", "seizures"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RENAL-008",
    categorySlug: "pharmacology-parenteral",
    stem: "A client in oliguric acute kidney injury has a serum potassium level of 7.1 mEq/L (reference 3.5-5.0 mEq/L). The telemetry monitor reveals tall, peaked T waves, a prolonged PR interval, and widening of the QRS complex. What is the FIRST medication the nurse must administer immediately?",
    choices: [
      { id: "a", text: "Intravenous calcium gluconate 10%, 10 mL infused over 2 to 3 minutes to stabilise the myocardium" },
      { id: "b", text: "Insulin 10 units with 50 mL of 50% dextrose, which shifts the potassium into the cells faster than any other drug" },
      { id: "c", text: "Oral sodium polystyrene sulfonate 30 g, which removes potassium from the body" },
      { id: "d", text: "Intravenous furosemide 40 mg as a bolus, which excretes the potassium in the urine" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Intravenous calcium gluconate 10%, 10 mL infused over 2 to 3 minutes to stabilise the myocardium\" In severe hyperkalemia with electrocardiographic changes (peaked T waves, QRS widening), the client is at imminent risk of fatal ventricular fibrillation and asystole. The immediate first-line drug is IV Calcium gluconate (or calcium chloride). Calcium does not lower potassium; it directly antagonizes potassium's membrane-depolarizing effects, stabilizing the myocardial cell membrane within 1-3 minutes. Insulin and dextrose are given next to shift potassium into cells. Why the other options fail: option b is the correct second drug, but it shifts potassium over 15 to 30 minutes and does not protect the myocardium now. Option c works over hours in the gut. Option d depends on kidneys that are not making urine. Only calcium stabilises the membrane within minutes.",
    strategy: "Hyperkalemia emergency sequence: 1) IV Calcium gluconate FIRST (stabilizes heart membrane), 2) IV Insulin + D50 (shifts K+ into cells), 3) Eliminate K+ (dialysis / kayexalate).",
    difficulty: "hard",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:electrolyte-imbalances", "lesson:potassium-imbalances", "hyperkalemia", "calcium-gluconate", "cardiac-emergency"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RENAL-009",
    categorySlug: "pharmacology-parenteral",
    stem: "A provider prescribes intravenous potassium chloride (KCl) 20 mEq in 250 mL of normal saline for a client with severe hypokalemia (potassium 2.7 mEq/L). Which nursing safety rule is absolute regarding intravenous potassium administration?",
    choices: [
      { id: "a", text: "Give it as a slow direct push over 60 seconds, which is safe when the volume is small" },
      { id: "b", text: "Run it by gravity through a 24-gauge vein in the dorsum of the hand, to dilute it quickly" },
      { id: "c", text: "Warm the bag in hot water first, since warmth prevents the painful vein irritation that potassium causes" },
      { id: "d", text: "Never give it as a push or bolus: use a pump and keep the peripheral rate at or below 10 mEq/hour" }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Never give it as a push or bolus: use a pump and keep the peripheral rate at or below 10 mEq/hour\" Intravenous potassium chloride is a high-alert medication. Direct IV push or rapid bolus administration causes sudden lethal cardiac arrest (used in lethal injection protocols). Safety mandates: 1) NEVER give IV push, 2) Always infuse diluted in IV fluids using a dedicated electronic infusion pump, 3) Limit peripheral infusion rate to a maximum of 10 mEq/hour (maximum 20 mEq/hr via central venous line with continuous cardiac monitoring). Why the other options fail: option a is a direct push, which is the lethal practice the item tests. Option b uses gravity through the smallest available cannula, so neither the rate nor the dilution can be controlled. Option c warms a high-alert solution without addressing the rate, and warmth does not prevent phlebitis from potassium.",
    strategy: "IV Potassium safety rule: NEVER IV PUSH (causes immediate cardiac arrest!). Max peripheral rate = 10 mEq/hour. Always use an infusion pump.",
    difficulty: "easy",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:electrolyte-imbalances", "lesson:potassium-imbalances", "hypokalemia", "potassium-chloride", "medication-safety"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RENAL-010",
    categorySlug: "med-surg",
    stem: "A client with chronic alcohol dependence presents with tremors, hyperactive deep tendon reflexes, and a serum magnesium level of 1.1 mg/dL (reference 1.7-2.2 mg/dL). When the blood pressure cuff is inflated on the upper arm, carpal spasm occurs. While infusing intravenous magnesium sulfate, which assessment parameter must the nurse monitor continuously to detect hypermagnesemic toxicity?",
    choices: [
      { id: "a", text: "Visual acuity and intraocular pressure, which fall early in magnesium toxicity" },
      { id: "b", text: "Patellar deep tendon reflexes, respiratory rate and hourly urine output" },
      { id: "c", text: "Capillary glucose every 15 minutes, which detects the hypoglycaemia magnesium causes" },
      { id: "d", text: "Bowel sounds in all four quadrants, which disappear as magnesium accumulates" }
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Patellar deep tendon reflexes, respiratory rate and hourly urine output\" During intravenous magnesium sulfate therapy, toxicity manifests progressively, and the thresholds should be read in the same units as the reference range: loss of the deep tendon reflexes occurs first, at about 5 mg/dL and above; respiratory depression below 12 breaths a minute follows as the level approaches 10 mg/dL; and cardiac arrest comes above about 15 mg/dL. That is why the patellar reflex is the earliest bedside warning, and why it is checked before the rate is increased. Magnesium is excreted renally; oliguria causes dangerous drug accumulation. The nurse must assess patellar reflexes, respiratory rate, and urine output before and during infusion. Calcium gluconate is the antidote. Why the other options fail: option a describes parameters that magnesium does not affect early, and the eye is not the target organ. Option c looks for hypoglycaemia, which is not the recognised toxicity pattern. Option d is a late and non-specific finding, whereas reflexes are lost first and are the earliest reliable sign.",
    strategy: "Magnesium toxicity surveillance: Loss of Deep Tendon Reflexes (DTRs) is the EARLIEST sign! Stop infusion and give IV Calcium gluconate.",
    difficulty: "medium",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:electrolyte-imbalances", "lesson:calcium-magnesium-and-phosphate", "hypomagnesemia", "magnesium-toxicity", "deep-tendon-reflexes"],
    isFree: false,
  },

  // ==========================================
  // MODULE 4: URINARY TRACT DISORDERS (2 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-RENAL-011",
    categorySlug: "safety-infection-control",
    stem: "A nurse is providing catheter care for a bedridden client with an indwelling Foley urinary catheter. Which action by the nurse represents an evidence-based practice in the catheter-associated urinary tract infection (CAUTI) prevention bundle?",
    choices: [
      { id: "a", text: "Irrigate the catheter daily with 50 mL of sterile saline, to keep the lumen clear" },
      { id: "b", text: "Hang the bag on the side rail while repositioning the client, so that it is not left standing on the floor" },
      { id: "c", text: "Disconnect the catheter from the tubing each morning, to empty and measure the urine" },
      { id: "d", text: "Keep the system closed and unobstructed, and hang the bag below the level of the bladder" }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Keep the system closed and unobstructed, and hang the bag below the level of the bladder\" CAUTI prevention bundle evidence-based guidelines include: 1) Maintain a sterile, continuously closed drainage system (never disconnect tubing), 2) Keep the drainage bag below the level of the bladder at all times to prevent gravity backflow of contaminated urine into the bladder, 3) Hang bag on the bed frame (never on moving side rails or resting on the floor), 4) Secure catheter to the thigh to prevent urethral traction, and 5) Avoid routine antimicrobial bladder irrigation. Why the other options fail: option a irrigates a closed system routinely, which introduces organisms. Option b hangs the bag on a moving rail, where it can rise above the bladder and allow backflow. Option c breaks the closed system daily, which is the single commonest route to infection.",
    strategy: "CAUTI prevention rules: Bag ALWAYS below bladder level -> Keep system closed -> Secure to thigh -> Never hang on moving side rails.",
    difficulty: "easy",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:urinary-tract-disorders", "lesson:urinary-tract-infection-and-catheter-care", "cauti", "catheter-care", "infection-prevention"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RENAL-012",
    categorySlug: "med-surg",
    stem: "An older adult male with benign prostatic hyperplasia (BPH) has not voided for 16 hours. Assessment reveals intense suprapubic pain, agitation, and a palpable dull bladder extending above the umbilicus. A bladder ultrasound scanner estimates 950 mL of retained urine. When inserting an indwelling catheter, what should the nurse anticipate and monitor for following the release of this large volume?",
    choices: [
      { id: "a", text: "Immediate oliguria with hyperkalaemic cardiac arrest, because an obstructed kidney cannot excrete the potassium load at all after relief" },
      { id: "b", text: "Acute nephrotic syndrome with severe hypoalbuminaemia, from heavy glomerular protein loss during the decompression" },
      { id: "c", text: "Post-obstructive diuresis with hypotension and transient haematuria, as the decompressed tract loses its concentrating gradient" },
      { id: "d", text: "Severe metabolic alkalosis from retained ammonia, because the overdistended bladder reabsorbs urea into the bloodstream" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Post-obstructive diuresis with hypotension and transient haematuria, as the decompressed tract loses its concentrating gradient\" Rapid relief of chronic high-pressure urinary retention (> 800-1,000 mL) can trigger two well-known physiological responses: 1) Post-obstructive diuresis—a dramatic polyuric state caused by loss of medullary concentrating gradient and accumulated urea, requiring strict fluid balance monitoring to prevent hypovolemic shock, and 2) Transient hematuria and hypotension from sudden pelvic venous decompression and mucosal stretching. Why the other options fail: option a describes the opposite problem, since the risk after relief is polyuria rather than oliguria. Option b is a glomerular disease unrelated to decompression. Option d describes an acid-base consequence of vomiting or diuretics, not of relieving retention.",
    strategy: "Severe urinary retention decompression: Monitor for post-obstructive diuresis (massive urine output leading to volume depletion and hypotension).",
    difficulty: "medium",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:urinary-tract-disorders", "lesson:retention-incontinence-prostate-stones-and-schistosomiasis", "urinary-retention", "post-obstructive-diuresis", "bph"],
    isFree: false,
  },

  // ==========================================
  // MODULE 5: KIDNEY DISEASE (3 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-RENAL-013",
    categorySlug: "pediatrics",
    stem: "An 8-year-old child is brought to the clinic 2 weeks after recovering from an untreated streptococcal pharyngitis (strep throat). The parents report that the child has puffy swollen eyes in the morning, reduced urine output, and dark 'tea-colored / cola-colored' urine. Blood pressure is elevated at 134/86 mmHg. Which clinical condition does the nurse suspect?",
    choices: [
      { id: "a", text: "Minimal change nephrotic syndrome, which gives heavy proteinuria and no red cells on the dipstick" },
      { id: "b", text: "Haemolytic uraemic syndrome, which follows bloody diarrhoea with anaemia and a low platelet count" },
      { id: "c", text: "Acute post-streptococcal glomerulonephritis, two weeks after an untreated streptococcal pharyngitis" },
      { id: "d", text: "Acute bacterial cystitis, which gives dysuria and frequency but no oedema, hypertension or haematuria" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Acute post-streptococcal glomerulonephritis, two weeks after an untreated streptococcal pharyngitis\" Acute post-streptococcal glomerulonephritis (APSGN) is an immune-complex mediated type III hypersensitivity reaction occurring 1-3 weeks after Group A beta-hemolytic streptococcal pharyngitis or impetigo. Immune complexes deposit in glomerular basement membranes, causing inflammation and red blood cell leakage. Hallmarks: 1) Periorbital edema, 2) Tea- or cola-colored urine (gross hematuria with RBC casts), 3) Hypertension from sodium/water retention, and 4) Mild-to-moderate proteinuria. Why the other options fail: option a gives proteinuria without haematuria, and the cola-coloured urine is blood. Option b follows a diarrhoeal illness with anaemia and a low platelet count, not a sore throat two weeks earlier. Option d causes dysuria and frequency without oedema, hypertension or haematuria.",
    strategy: "APSGN triad: Recent strep infection + Tea/cola-colored urine (hematuria) + Periorbital edema & hypertension. Contrast with Nephrotic (massive proteinuria, no gross blood).",
    difficulty: "easy",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:kidney-disease", "lesson:glomerulonephritis-and-nephrotic-syndrome", "apsgn", "glomerulonephritis", "hematuria"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RENAL-014",
    categorySlug: "med-surg",
    stem: "A 4-year-old child is admitted with massive generalized edema (anasarca), severe ascites, and facial swelling. Urinalysis demonstrates 4+ proteinuria (> 3.5 g/24 hours) and oval fat bodies, but no red blood cells. Serum albumin is profoundly low at 1.8 g/dL (reference 3.5-5.0 g/dL), and serum cholesterol is elevated at 340 mg/dL. Which nursing intervention is essential in the care of this child with Nephrotic Syndrome?",
    choices: [
      { id: "a", text: "A high-sodium diet with liberal fluid, to restore the oncotic pressure" },
      { id: "b", text: "Strict infection precautions, with daily weight and abdominal girth measurements" },
      { id: "c", text: "Complete immobilisation with strict bed rest for 4 weeks, to reduce protein loss" },
      { id: "d", text: "High-dose intravenous potassium chloride, to replace the losses in the urine" }
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Strict infection precautions, with daily weight and abdominal girth measurements\" Nephrotic syndrome is characterized by massive proteinuria, severe hypoalbuminemia, generalized edema (anasarca), and hyperlipidemia. Crucial nursing considerations: 1) Infection risk is critically elevated because immunoglobulin G (IgG) and complement proteins are lost in urine, and the child is treated with corticosteroids, 2) Daily weights and abdominal girth measurements track ascites, 3) Sodium restriction reduces edema, and 4) Meticulous skin care prevents breakdown of edematous tissues. Why the other options fail: option a adds sodium and fluid to a child who is already anasarcous. Option c imposes immobility, which increases the risk of thrombosis and skin breakdown in oedematous tissue. Option d gives potassium to a child who has not been shown to be hypokalaemic, and the risk here is infection.",
    strategy: "Nephrotic Syndrome hallmarks: Massive Proteinuria + Hypoalbuminemia + Severe Edema (anasarca). Priority: Protect from infection (lost antibodies in urine).",
    difficulty: "medium",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:kidney-disease", "lesson:glomerulonephritis-and-nephrotic-syndrome", "nephrotic-syndrome", "proteinuria", "anasarca"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RENAL-015",
    categorySlug: "med-surg",
    stem: "A client with Chronic Kidney Disease (CKD) Stage 5 has a serum phosphorus level of 6.8 mg/dL (reference 2.5-4.5 mg/dL) and is prescribed oral calcium acetate (a phosphate binder) 667 mg tablets. Which instruction must the nurse give regarding the timing of this medication?",
    choices: [
      { id: "a", text: "Take them on an empty stomach at bedtime, with a full glass of water" },
      { id: "b", text: "Take them 2 hours after breakfast, together with the iron supplement" },
      { id: "c", text: "Dissolve the tablets in grapefruit juice an hour before lunch, which improves absorption" },
      { id: "d", text: "Take the tablets with meals and snacks, so that they bind dietary phosphate in the gut" }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Take the tablets with meals and snacks, so that they bind dietary phosphate in the gut\" In advanced CKD, failing kidneys cannot excrete phosphorus, causing hyperphosphatemia and secondary hyperparathyroidism. Phosphate binders (calcium acetate, sevelamer) work locally in the gut lumen by binding dietary phosphorus into insoluble, unabsorbable complexes that are excreted in feces. For phosphate binders to be effective, they MUST be taken WITH meals and snacks (during or immediately after eating). If taken on an empty stomach, calcium acetate acts as a systemic calcium supplement without binding phosphorus. Why the other options fail: option a takes the binder on an empty stomach, when there is no dietary phosphate for it to bind. Option b separates it from the meal and adds iron, which it can also bind. Option c dissolves it in juice before food, which achieves the same failure.",
    strategy: "Phosphate binder golden rule: Take WITH MEALS AND SNACKS! It must bind the food phosphorus in the gut before it gets absorbed.",
    difficulty: "easy",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:kidney-disease", "lesson:chronic-kidney-disease", "phosphate-binders", "hyperphosphatemia", "ckd"],
    isFree: false,
  },

  // ==========================================
  // MODULE 6: RENAL REPLACEMENT THERAPY (3 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-RENAL-016",
    categorySlug: "med-surg",
    stem: "A client who will receive hemodialysis has a newly created left radiocephalic arteriovenous (AV) fistula. Which nursing assessment verifies that the vascular access is patent and functioning properly?",
    choices: [
      { id: "a", text: "An absence of pulsation or sound over the anastomosis, which shows the vein is not distended" },
      { id: "b", text: "A blood pressure of 120/80 measured with a cuff on the fistula arm, which shows flow" },
      { id: "c", text: "Cool, pale skin with absent radial pulses in the left hand, which shows a steal" },
      { id: "d", text: "Palpate a palpable thrill and auscultate a continuous blowing bruit over the fistula site" }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Palpate a palpable thrill and auscultate a continuous blowing bruit over the fistula site\" An arteriovenous fistula surgically anastomoses a high-pressure artery to a low-pressure vein, producing high-velocity turbulent blood flow. Functional patency is confirmed by: 1) Palpating a purring vibration ('thrill'), and 2) Auscultating a continuous whooshing sound ('bruit') over the access site. Absence of a thrill or bruit indicates fistula thrombosis and acute access occlusion, requiring immediate surgical vascular intervention. Why the other options fail: option a describes the absence of flow, which is the sign of a thrombosed fistula. Option b takes a blood pressure on the access arm, which can occlude the fistula and should never be done. Option c describes steal or occlusion, not patency.",
    strategy: "AV Fistula patency: 'Feel the thrill, hear the bruit!' No thrill or bruit = clotted access (vascular emergency!). Never take BP or draw blood from fistula arm.",
    difficulty: "easy",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:renal-replacement-therapy", "lesson:dialysis-and-transplant-nursing", "av-fistula", "hemodialysis", "vascular-access"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RENAL-017",
    categorySlug: "med-surg",
    stem: "A client performing continuous ambulatory peritoneal dialysis (CAPD) at home presents to the renal unit reporting generalized abdominal pain and fever. The nurse inspects the drained peritoneal dialysate effluent bag and notes that the fluid is cloudy, turbid, and yellow, whereas it was previously crystal clear. What is the nurse's priority action?",
    choices: [
      { id: "a", text: "Send the effluent for cell count and culture, notify the nephrologist, and start intraperitoneal antibiotics" },
      { id: "b", text: "Reassure the client that cloudy fluid is expected from dietary protein breakdown" },
      { id: "c", text: "Warm the dialysate bag in a microwave before the next dwell, to dissolve the sediment" },
      { id: "d", text: "Clamp the catheter permanently and stop all exchanges for a week, so that the peritoneum can rest and settle by itself" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Send the effluent for cell count and culture, notify the nephrologist, and start intraperitoneal antibiotics\" Cloudy or turbid peritoneal dialysate effluent is the earliest and most classic clinical hallmark of bacterial peritonitis in peritoneal dialysis (most commonly caused by touch contamination of the catheter spike during fluid exchanges). Normal dialysate drainage should be completely clear and straw-colored. The nurse must collect fluid for white blood cell count (> 100/mcL with > 50% neutrophils) and culture, and administer intraperitoneal broad-spectrum antibiotics. Why the other options fail: option b treats a sign of infection as normal, which delays treatment of peritonitis. Option c warms the bag in a microwave, which damages the glucose in the dialysate and does not treat infection. Option d stops dialysis altogether, which leaves the infection untreated and the client without clearance.",
    strategy: "Peritoneal dialysis red flag: CLOUDY/TURBID effluent drainage + abdominal pain = PERITONITIS. Send fluid for culture and start intraperitoneal antibiotics.",
    difficulty: "medium",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:renal-replacement-therapy", "lesson:dialysis-and-transplant-nursing", "peritoneal-dialysis", "peritonitis", "cloudy-effluent"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RENAL-018",
    categorySlug: "med-surg",
    stem: "Two hours into their very first haemodialysis session, a client with a severely elevated baseline blood urea nitrogen (BUN 148 mg/dL) develops a severe throbbing headache, nausea, restlessness, muscle twitching, and visual blurriness. Telemetry reveals sinus bradycardia and blood pressure climbs to 186/104 mmHg. Which life-threatening complication is this client experiencing?",
    choices: [
      { id: "a", text: "Air embolism through the venous line, which presents with sudden dyspnoea and chest pain" },
      { id: "b", text: "An acute pyrogenic reaction to endotoxin in the dialysate, with rigors and fever" },
      { id: "c", text: "Dialysis disequilibrium syndrome, from rapid solute clearance and cerebral oedema" },
      { id: "d", text: "Severe hypovolaemic collapse from excessive ultrafiltration during the session" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Dialysis disequilibrium syndrome, from rapid solute clearance and cerebral oedema\" Dialysis Disequilibrium Syndrome (DDS) occurs primarily during initial hemodialysis sessions in clients with severely elevated BUN. Rapid clearance of urea from the vascular compartment creates a transient osmotic gradient between the blood and brain cells (where urea clears slowly due to the blood-brain barrier). Free water shifts into brain tissue, causing acute cerebral edema and increased ICP (headache, nausea, confusion, seizures, herniation). Management: slow blood flow, stop dialysis, administer hypertonic saline or mannitol. Why the other options fail: option a presents with sudden dyspnoea and chest pain, not headache and hypertension. Option b produces rigors and fever at the start of the session, not focal neurology. Option d produces hypotension, whereas this client is hypertensive and bradycardic.",
    strategy: "Dialysis Disequilibrium Syndrome: First-time dialysis + severe BUN -> rapid urea drop -> cerebral edema (headache, nausea, seizures). Prevent by slow initial dialysis.",
    difficulty: "hard",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:renal-replacement-therapy", "lesson:dialysis-emergencies-drill", "dialysis-disequilibrium-syndrome", "cerebral-edema", "hemodialysis-complication"],
    isFree: false,
  },

  // ==========================================
  // MODULE 7: RENAL PHARMACOLOGY & FLUID MATH (2 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-RENAL-019",
    categorySlug: "pharmacology-parenteral",
    stem: "A client with acute oliguric renal failure has severe fluid overload and is prescribed intravenous furosemide 160 mg. Which administration technique is critical to prevent permanent ototoxicity?",
    choices: [
      { id: "a", text: "Administer the IV furosemide slowly at a rate not exceeding 4 mg/minute" },
      { id: "b", text: "Administer the entire 160 mg dose as a rapid IV push over 15 seconds" },
      { id: "c", text: "Mix the furosemide in 50 mL of 10% dextrose and infuse over 1 minute" },
      { id: "d", text: "Combine the furosemide in the same syringe with an aminoglycoside antibiotic" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Administer the IV furosemide slowly at a rate not exceeding 4 mg/minute\" High-dose intravenous loop diuretics (furosemide, bumetanide) can cause permanent sensorineural hearing loss, tinnitus, and ototoxicity if administered too rapidly, especially in clients with impaired renal clearance. Safety standards mandate that high-dose intravenous furosemide must be infused slowly at a controlled rate not exceeding 4 mg/minute (160 mg should be infused over at least 40 minutes, either by slow injection or controlled IV piggyback). Why the other options fail: option b pushes a high dose in 15 seconds, which is the fastest way to cause the ototoxicity the item is about. Option c still runs the dose in a minute, which far exceeds 4 mg/min. Option d mixes a loop diuretic with an aminoglycoside in one syringe, which compounds the same toxicity.",
    strategy: "IV Furosemide rate limit: Never exceed 4 mg/min! Rapid bolus causes permanent ototoxicity (tinnitus and deafness), especially in renal impairment.",
    difficulty: "medium",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:renal-pharmacology", "lesson:renal-drugs-and-fluid-calculations", "furosemide", "ototoxicity", "iv-push-rate"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RENAL-020",
    categorySlug: "pharmacology-parenteral",
    stem: "A physician prescribes 1,000 mL of 0.9% normal saline to be infused intravenously over 8 hours for a dehydrated client. The infusion administration set has a drop factor (calibration) of 15 drops/mL (gtt/mL). At what drop rate in drops per minute (gtt/min) should the nurse regulate the gravity IV infusion?",
    choices: [
      { id: "a", text: "21 gtt/min" },
      { id: "b", text: "31 gtt/min" },
      { id: "c", text: "42 gtt/min" },
      { id: "d", text: "125 gtt/min" }
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"31 gtt/min\" Standard IV drop rate formula: Drops per minute (gtt/min) = [Total Volume (mL) x Drop Factor (gtt/mL)] ÷ Total Time (minutes). Calculation: 1) Total volume = 1,000 mL. 2) Drop factor = 15 gtt/mL. 3) Total time = 8 hours x 60 minutes = 480 minutes. 4) (1,000 x 15) ÷ 480 = 15,000 ÷ 480 = 31.25 drops/min, which rounds to 31 drops/minute. Why the other options fail: option a uses a 10 gtt/mL set for the calculation. Option c doubles the volume to 2,000 mL. Option d divides by the drop factor instead of multiplying. The rate follows only from 1,000 mL times 15 gtt/mL over 480 minutes.",
    strategy: "IV Drip Rate Formula: (Volume in mL x Drop factor) / Time in minutes. (1,000 x 15) / 480 = 15,000 / 480 = 31 gtt/min.",
    difficulty: "easy",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:renal-pharmacology", "lesson:renal-drugs-and-fluid-calculations", "iv-drip-rate", "drop-factor", "fluid-math"],
    isFree: false,
  }
];
