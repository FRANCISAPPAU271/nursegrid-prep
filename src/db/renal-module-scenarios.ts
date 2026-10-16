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
      { id: "a", text: "The doubling of serum creatinine represents an acute loss of approximately 50% of the client's baseline glomerular filtration rate (GFR)" },
      { id: "b", text: "Serum creatinine has fluctuated within normal physiological circadian limits" },
      { id: "c", text: "The elevated creatinine reflects increased dietary protein catabolism with preserved GFR" },
      { id: "d", text: "The finding confirms permanent end-stage renal fibrosis requiring immediate peritoneal dialysis" }
    ],
    correctChoiceId: "a",
    rationale: "Serum creatinine is an inverse biomarker of glomerular filtration rate (GFR). Under steady-state conditions, doubling of serum creatinine (from 1.0 to 2.1 mg/dL) reflects an approximate 50% reduction in GFR and renal functional capacity. In acute dehydration, this elevation points to acute kidney injury (prerenal azotemia) requiring rapid fluid resuscitation before acute tubular necrosis occurs.",
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
      { id: "a", text: "Third-space fluid sequestration with concurrent severe intravascular volume depletion (effective arterial hypovolemia)" },
      { id: "b", text: "True total-body fluid volume deficit across all fluid compartments" },
      { id: "c", text: "Intravascular fluid volume overload with excessive central venous pressure" },
      { id: "d", text: "Intracellular fluid shift causing acute cellular hyperosmolality" }
    ],
    correctChoiceId: "a",
    rationale: "In cirrhosis and severe hypoalbuminemia, loss of plasma oncotic pressure combined with splanchnic arterial vasodilation allows intravascular fluid to transudate into the peritoneal cavity (third-spacing: ascites and interstitial edema). Despite massive total-body fluid accumulation, the client suffers from critical intravascular hypovolemia (manifested by hypotension, tachycardia, and oliguria), creating a prerenal state.",
    strategy: "Third-spacing pathology: Massive fluid trapped in interstitial/peritoneal spaces WHILE intravascular space is empty -> hypotension, tachycardia, oliguria.",
    difficulty: "hard",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:foundations", "lesson:body-fluids-compartments-and-regulation", "third-spacing", "intravascular-depletion", "fluid-compartments"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RENAL-003",
    categorySlug: "fluid-electrolyte",
    stem: "A nurse is evaluating the fluid balance of a client receiving intravenous furosemide for congestive heart failure. Which clinical assessment parameter provides the single MOST sensitive and reliable indicator of acute fluid gain or loss?",
    choices: [
      { id: "a", text: "Daily morning body weight measured at the same time on the same calibrated scale after voiding" },
      { id: "b", text: "Documented 24-hour intake and output volume recorded on the bedside chart" },
      { id: "c", text: "Measurement of skin turgor over the anterior forearm" },
      { id: "d", text: "Visual assessment of ankle peripheral pitting edema" }
    ],
    correctChoiceId: "a",
    rationale: "Daily body weight is the single most sensitive, objective, and accurate indicator of acute fluid balance fluctuations. One kilogram (2.2 lbs) of acute weight change is equivalent to 1,000 mL (1 liter) of retained or lost fluid. Intake and output charts are prone to human measurement error and unrecorded losses (sweat, stool), and physical signs (edema, skin turgor) manifest only after significant volume shifts.",
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
      { id: "a", text: "Establish large-bore intravenous access immediately and rapidly infuse 1,000 mL of Ringer's lactate or 0.9% normal saline over 15 to 30 minutes" },
      { id: "b", text: "Encourage the client to sip 200 mL of oral rehydration solution every 10 minutes" },
      { id: "c", text: "Administer an intramuscular injection of metoclopramide to stop vomiting" },
      { id: "d", text: "Collect a stool specimen for darkfield microscopy before initiating fluid resuscitation" }
    ],
    correctChoiceId: "a",
    rationale: "Severe dehydration with signs of hypovolemic shock (hypotension, thready tachycardia, delayed skin pinch, lethargy) represents a critical medical emergency (WHO Plan C). Oral rehydration alone is insufficient and unsafe in shock or altered consciousness. The immediate priority is rapid intravenous resuscitation with balanced isotonic crystalloids (Ringer's lactate or 0.9% normal saline) through large-bore IV access to restore intravascular volume.",
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
      { id: "a", text: "Position client upright in high-Fowler's, apply high-flow oxygen, stop IV maintenance fluids, and notify provider for emergency hemodialysis/diuretic therapy" },
      { id: "b", text: "Place the client flat in supine position and administer a 500 mL bolus of 5% dextrose in water" },
      { id: "c", text: "Perform vigorous chest percussion and encourage ambulation around the ward" },
      { id: "d", text: "Administer 100 mL of 20% mannitol by rapid IV push without oxygen" }
    ],
    correctChoiceId: "a",
    rationale: "Acute pulmonary edema resulting from iatrogenic fluid overload in an oliguric/anuric client is a life-threatening emergency. Immediate nursing priorities: 1) Position in high-Fowler's with legs dependent to drop cardiac preload and ease ventilation, 2) Apply high-flow oxygen immediately, 3) Shut off IV fluid infusions immediately, and 4) Alert the medical team for urgent loop diuretics or emergent ultrafiltration/hemodialysis.",
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
      { id: "a", text: "Infuse via an electronic infusion pump, monitor neurological status frequently, and ensure serum sodium rises by no more than 8-10 mEq/L in 24 hours" },
      { id: "b", text: "Infuse rapidly by gravity through a 22-gauge peripheral hand vein" },
      { id: "c", text: "Administer the infusion alongside 500 mL of 0.45% hypotonic saline" },
      { id: "d", text: "Instruct the client to drink 2 liters of plain water to accelerate distribution" }
    ],
    correctChoiceId: "a",
    rationale: "Hypertonic saline (3% NaCl) is a high-alert intravenous solution. Rapid correction of chronic hyponatremia causes sudden osmotic dehydration of brain cells, resulting in catastrophic Osmotic Demyelination Syndrome (central pontine myelinolysis), causing irreversible flaccid quadriplegia and 'locked-in' syndrome. Guidelines mandate strictly limiting the sodium correction rate to no more than 8-10 mEq/L over 24 hours, infused via pump with close neuro checks.",
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
      { id: "a", text: "Intravenous 3% hypertonic saline bolus (100 mL over 10-15 minutes) to rapidly alleviate cerebral edema" },
      { id: "b", text: "Intravenous 5% dextrose in water (D5W) at 150 mL/hour" },
      { id: "c", text: "Subcutaneous desmopressin (DDAVP) 4 mcg" },
      { id: "d", text: "Oral sodium chloride tablets with 1 liter of free water" }
    ],
    correctChoiceId: "a",
    rationale: "Severe acute hyponatremia (< 120 mEq/L) with neurological emergencies (seizures, coma, brainstem herniation) is caused by severe cerebral edema from osmotic water entry into brain cells. The emergency intervention is 100-150 mL of IV 3% hypertonic saline infused over 10-15 minutes (repeatable up to 2 times if seizures persist) to acutely raise serum sodium by 4-6 mEq/L, reversing brain swelling and halting seizures.",
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
      { id: "a", text: "Intravenous Calcium gluconate 10% (10 mL infused over 2-3 minutes)" },
      { id: "b", text: "Intravenous Regular insulin 10 units with 50 mL of 50% Dextrose" },
      { id: "c", text: "Oral Sodium polystyrene sulfonate 30 grams" },
      { id: "d", text: "Intravenous Furosemide 40 mg bolus" }
    ],
    correctChoiceId: "a",
    rationale: "In severe hyperkalemia with electrocardiographic changes (peaked T waves, QRS widening), the client is at imminent risk of fatal ventricular fibrillation and asystole. The immediate first-line drug is IV Calcium gluconate (or calcium chloride). Calcium does not lower potassium; it directly antagonizes potassium's membrane-depolarizing effects, stabilizing the myocardial cell membrane within 1-3 minutes. Insulin and dextrose are given next to shift potassium into cells.",
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
      { id: "a", text: "Never administer potassium chloride via direct IV push or bolus; always use an infusion pump and limit peripheral infusion rate to no more than 10 mEq/hour" },
      { id: "b", text: "Administer potassium chloride via rapid direct IV push over 60 seconds" },
      { id: "c", text: "Infuse via gravity drip into a 24-gauge dorsal hand vein" },
      { id: "d", text: "Warm the potassium bag in hot water to eliminate peripheral vein irritation" }
    ],
    correctChoiceId: "a",
    rationale: "Intravenous potassium chloride is a high-alert medication. Direct IV push or rapid bolus administration causes sudden lethal cardiac arrest (used in lethal injection protocols). Safety mandates: 1) NEVER give IV push, 2) Always infuse diluted in IV fluids using a dedicated electronic infusion pump, 3) Limit peripheral infusion rate to a maximum of 10 mEq/hour (maximum 20 mEq/hr via central venous line with continuous cardiac monitoring).",
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
      { id: "a", text: "Patellar deep tendon reflexes (DTRs), respiratory rate, and hourly urine output" },
      { id: "b", text: "Visual acuity and intraocular pressure" },
      { id: "c", text: "Capillary blood glucose every 15 minutes" },
      { id: "d", text: "Bowel sounds in all four quadrants" }
    ],
    correctChoiceId: "a",
    rationale: "During intravenous magnesium sulfate therapy, toxicity manifests progressively: loss of deep tendon reflexes (DTRs) occurs first at serum levels > 4-5 mEq/L, followed by respiratory depression (< 12 breaths/min) at > 8-10 mEq/L, and cardiac arrest at > 12-15 mEq/L. Magnesium is excreted renally; oliguria causes dangerous drug accumulation. The nurse must assess patellar reflexes, respiratory rate, and urine output before and during infusion. Calcium gluconate is the antidote.",
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
      { id: "a", text: "Maintain an unobstructed closed drainage system and keep the drainage collection bag suspended below the level of the bladder at all times" },
      { id: "b", text: "Routinely irrigate the catheter daily with 50 mL of sterile normal saline" },
      { id: "c", text: "Hang the drainage collection bag on the bed side rail when repositioning the client" },
      { id: "d", text: "Disconnect the catheter from the drainage tubing every morning to empty urine" }
    ],
    correctChoiceId: "a",
    rationale: "CAUTI prevention bundle evidence-based guidelines include: 1) Maintain a sterile, continuously closed drainage system (never disconnect tubing), 2) Keep the drainage bag below the level of the bladder at all times to prevent gravity backflow of contaminated urine into the bladder, 3) Hang bag on the bed frame (never on moving side rails or resting on the floor), 4) Secure catheter to the thigh to prevent urethral traction, and 5) Avoid routine antimicrobial bladder irrigation.",
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
      { id: "a", text: "Post-obstructive diuresis, hypotension, and transient hematuria" },
      { id: "b", text: "Immediate oliguria and hyperkalemic cardiac arrest" },
      { id: "c", text: "Acute nephrotic syndrome with severe hypoalbuminemia" },
      { id: "d", text: "Severe metabolic alkalosis from ammonia retention" }
    ],
    correctChoiceId: "a",
    rationale: "Rapid relief of chronic high-pressure urinary retention (> 800-1,000 mL) can trigger two well-known physiological responses: 1) Post-obstructive diuresis—a dramatic polyuric state caused by loss of medullary concentrating gradient and accumulated urea, requiring strict fluid balance monitoring to prevent hypovolemic shock, and 2) Transient hematuria and hypotension from sudden pelvic venous decompression and mucosal stretching.",
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
      { id: "a", text: "Acute post-streptococcal glomerulonephritis (APSGN)" },
      { id: "b", text: "Minimal change nephrotic syndrome" },
      { id: "c", text: "Hemolytic uremic syndrome" },
      { id: "d", text: "Acute bacterial cystitis" }
    ],
    correctChoiceId: "a",
    rationale: "Acute post-streptococcal glomerulonephritis (APSGN) is an immune-complex mediated type III hypersensitivity reaction occurring 1-3 weeks after Group A beta-hemolytic streptococcal pharyngitis or impetigo. Immune complexes deposit in glomerular basement membranes, causing inflammation and red blood cell leakage. Hallmarks: 1) Periorbital edema, 2) Tea- or cola-colored urine (gross hematuria with RBC casts), 3) Hypertension from sodium/water retention, and 4) Mild-to-moderate proteinuria.",
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
      { id: "a", text: "Strict infection prevention precautions and daily abdominal girth and weight measurements" },
      { id: "b", text: "High-sodium diet with liberal fluid intake to restore oncotic pressure" },
      { id: "c", text: "Complete immobilization with strict bedrest for 4 weeks" },
      { id: "d", text: "Administration of high-dose intravenous potassium chloride" }
    ],
    correctChoiceId: "a",
    rationale: "Nephrotic syndrome is characterized by massive proteinuria, severe hypoalbuminemia, generalized edema (anasarca), and hyperlipidemia. Crucial nursing considerations: 1) Infection risk is critically elevated because immunoglobulin G (IgG) and complement proteins are lost in urine, and the child is treated with corticosteroids, 2) Daily weights and abdominal girth measurements track ascites, 3) Sodium restriction reduces edema, and 4) Meticulous skin care prevents breakdown of edematous tissues.",
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
      { id: "a", text: "Take the tablets with meals and snacks so the drug can bind dietary phosphate in the gastrointestinal tract" },
      { id: "b", text: "Take the tablets on an empty stomach at bedtime with a full glass of water" },
      { id: "c", text: "Take the medication 2 hours after breakfast with an iron supplement" },
      { id: "d", text: "Dissolve the tablets in grapefruit juice 1 hour before lunch" }
    ],
    correctChoiceId: "a",
    rationale: "In advanced CKD, failing kidneys cannot excrete phosphorus, causing hyperphosphatemia and secondary hyperparathyroidism. Phosphate binders (calcium acetate, sevelamer) work locally in the gut lumen by binding dietary phosphorus into insoluble, unabsorbable complexes that are excreted in feces. For phosphate binders to be effective, they MUST be taken WITH meals and snacks (during or immediately after eating). If taken on an empty stomach, calcium acetate acts as a systemic calcium supplement without binding phosphorus.",
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
      { id: "a", text: "Palpating a palpable vibration (thrill) and auscultating a continuous blowing vascular sound (bruit) over the fistula site" },
      { id: "b", text: "Observing an absence of pulsation or sound over the anastomosis" },
      { id: "c", text: "Measuring a blood pressure of 120/80 mmHg using a cuff on the left fistula arm" },
      { id: "d", text: "Noting cool, pale skin with absent radial pulses in the left hand" }
    ],
    correctChoiceId: "a",
    rationale: "An arteriovenous fistula surgically anastomoses a high-pressure artery to a low-pressure vein, producing high-velocity turbulent blood flow. Functional patency is confirmed by: 1) Palpating a purring vibration ('thrill'), and 2) Auscultating a continuous whooshing sound ('bruit') over the access site. Absence of a thrill or bruit indicates fistula thrombosis and acute access occlusion, requiring immediate surgical vascular intervention.",
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
      { id: "a", text: "Send a peritoneal effluent fluid sample for cell count and culture, notify the nephrologist, and prepare to initiate intraperitoneal antibiotics for peritonitis" },
      { id: "b", text: "Reassure the client that cloudy fluid is an expected result of dietary protein breakdown" },
      { id: "c", text: "Warm the dialysate bag in a microwave oven before the next dwell cycle" },
      { id: "d", text: "Clamp the catheter permanently and instruct the client to stop fluid exchanges for 1 week" }
    ],
    correctChoiceId: "a",
    rationale: "Cloudy or turbid peritoneal dialysate effluent is the earliest and most classic clinical hallmark of bacterial peritonitis in peritoneal dialysis (most commonly caused by touch contamination of the catheter spike during fluid exchanges). Normal dialysate drainage should be completely clear and straw-colored. The nurse must collect fluid for white blood cell count (> 100/mcL with > 50% neutrophils) and culture, and administer intraperitoneal broad-spectrum antibiotics.",
    strategy: "Peritoneal dialysis red flag: CLOUDY/TURBID effluent drainage + abdominal pain = PERITONITIS. Send fluid for culture and start intraperitoneal antibiotics.",
    difficulty: "medium",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:renal-replacement-therapy", "lesson:dialysis-and-transplant-nursing", "peritoneal-dialysis", "peritonitis", "cloudy-effluent"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RENAL-018",
    categorySlug: "med-surg",
    stem: "Two hours into his very first hemodialysis session, a client with a severely elevated baseline blood urea nitrogen (BUN 148 mg/dL) develops a severe throbbing headache, nausea, restlessness, muscle twitching, and visual blurriness. Telemetry reveals sinus bradycardia and blood pressure climbs to 186/104 mmHg. Which life-threatening complication is this client experiencing?",
    choices: [
      { id: "a", text: "Dialysis Disequilibrium Syndrome (DDS) caused by rapid solute clearance and cerebral edema" },
      { id: "b", text: "Air embolism through the venous bloodline" },
      { id: "c", text: "Acute bacterial pyrogenic endotoxin reaction" },
      { id: "d", text: "Severe hypovolemic circulatory collapse" }
    ],
    correctChoiceId: "a",
    rationale: "Dialysis Disequilibrium Syndrome (DDS) occurs primarily during initial hemodialysis sessions in clients with severely elevated BUN. Rapid clearance of urea from the vascular compartment creates a transient osmotic gradient between the blood and brain cells (where urea clears slowly due to the blood-brain barrier). Free water shifts into brain tissue, causing acute cerebral edema and increased ICP (headache, nausea, confusion, seizures, herniation). Management: slow blood flow, stop dialysis, administer hypertonic saline or mannitol.",
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
    correctChoiceId: "a",
    rationale: "High-dose intravenous loop diuretics (furosemide, bumetanide) can cause permanent sensorineural hearing loss, tinnitus, and ototoxicity if administered too rapidly, especially in clients with impaired renal clearance. Safety standards mandate that high-dose intravenous furosemide must be infused slowly at a controlled rate not exceeding 4 mg/minute (160 mg should be infused over at least 40 minutes, either by slow injection or controlled IV piggyback).",
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
      { id: "a", text: "31 gtt/min" },
      { id: "b", text: "21 gtt/min" },
      { id: "c", text: "42 gtt/min" },
      { id: "d", text: "125 gtt/min" }
    ],
    correctChoiceId: "a",
    rationale: "Standard IV drop rate formula: Drops per minute (gtt/min) = [Total Volume (mL) x Drop Factor (gtt/mL)] ÷ Total Time (minutes). Calculation: 1) Total volume = 1,000 mL. 2) Drop factor = 15 gtt/mL. 3) Total time = 8 hours x 60 minutes = 480 minutes. 4) (1,000 x 15) ÷ 480 = 15,000 ÷ 480 = 31.25 drops/min, which rounds to 31 drops/minute.",
    strategy: "IV Drip Rate Formula: (Volume in mL x Drop factor) / Time in minutes. (1,000 x 15) / 480 = 15,000 / 480 = 31 gtt/min.",
    difficulty: "easy",
    tags: ["course:renal-fluid-and-electrolyte-nursing", "module:renal-pharmacology", "lesson:renal-drugs-and-fluid-calculations", "iv-drip-rate", "drop-factor", "fluid-math"],
    isFree: false,
  }
];
