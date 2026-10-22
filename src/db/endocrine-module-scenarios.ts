import type { AuthoredQuestion } from "./authored-bank";

/**
 * Dedicated NCLEX-style clinical scenario questions for Endocrine & Diabetes Nursing modules.
 * Authored specifically to test clinical judgment, bedside endocrine emergencies,
 * insulin pharmacokinetics, and NMC competencies.
 */
export const ENDOCRINE_MODULE_SCENARIOS: AuthoredQuestion[] = [
  // ==========================================
  // MODULE 1: FOUNDATIONS & ASSESSMENT (2 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-ENDO-001",
    categorySlug: "med-surg",
    stem: "A 45-year-old female presents with persistent fatigue, 6 kg weight gain, constipation, and cold intolerance. Serum laboratory testing reveals: elevated Thyroid-Stimulating Hormone (TSH) at 14.8 mIU/L (reference 0.4-4.0 mIU/L) and low free thyroxine (free T4) at 0.5 ng/dL (reference 0.8-1.8 ng/dL). Based on the hypothalamic-pituitary-thyroid negative feedback axis, how should the nurse interpret these findings?",
    choices: [
      { id: "a", text: "Secondary hypothyroidism caused by anterior pituitary failure" },
      { id: "b", text: "Tertiary hypothyroidism due to hypothalamic TRH deficiency" },
      { id: "c", text: "Primary hypothyroidism resulting from intrinsic thyroid gland dysfunction" },
      { id: "d", text: "Subclinical hyperthyroidism with peripheral hormone resistance at the receptor" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Primary hypothyroidism resulting from intrinsic thyroid gland dysfunction\" In the negative feedback loop of the thyroid axis, low circulating free T4 triggers the anterior pituitary gland to release excess TSH to stimulate thyroid hormone production. When the thyroid gland itself fails (primary hypothyroidism, most commonly Hashimoto thyroiditis), T4 remains low despite high TSH stimulation. Conversely, secondary (pituitary) hypothyroidism would present with low or inappropriately normal TSH alongside low T4. Why the other options fail: option a describes secondary hypothyroidism, in which the pituitary fails and TSH is low or inappropriately normal, not high. Option b puts the lesion in the hypothalamus, which would also leave TSH low. Option d puts the error at the receptor and predicts high T4 with high TSH, not low T4, and subclinical hyperthyroidism by definition has a low TSH.",
    strategy: "Endocrine Feedback Rule: High TSH + Low Free T4 = Primary Hypothyroidism (the problem is at the thyroid gland; pituitary is trying hard to stimulate it).",
    difficulty: "medium",
    tags: ["course:endocrine-and-diabetes-nursing", "module:foundations", "lesson:endocrine-anatomy-physiology-and-feedback", "hypothyroidism", "tsh", "negative-feedback"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-ENDO-002",
    categorySlug: "med-surg",
    stem: "A nurse is instructing a client on the correct collection procedure for a 24-hour urinary free cortisol test to evaluate for suspected Cushing syndrome. Which instruction is essential for diagnostic accuracy?",
    choices: [
      { id: "a", text: "Discard the first void on day one, then collect all urine for 24 hours, including day two's first void" },
      { id: "b", text: "Collect only the first morning urine specimen each day for three consecutive days and send them together" },
      { id: "c", text: "Save the first morning urine on day one and stop collecting exactly at midnight that night" },
      { id: "d", text: "Keep the 24-hour container at room temperature and shake it well before each void" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Discard the first void on day one, then collect all urine for 24 hours, including day two's first void\" Proper 24-hour urine collection protocol requires starting with an empty bladder: discard the first morning void on day 1 (record start time), then collect all urine produced over the subsequent 24 hours into a preservative container kept on ice or in the refrigerator. Exactly 24 hours from the start time on day 2, the client voids and adds that final specimen to the container. Why the other options fail: option b collects three first-morning specimens, which measure spot cortisol on three days rather than a 24-hour integral. Option c stops at midnight, which collects a daytime fraction, not 24 hours. Option d leaves the container at room temperature, which allows cortisol degradation; it must be kept on ice or refrigerated.",
    strategy: "24-hour urine collection rule: Discard 1st morning void -> collect ALL urine for 24h on ice -> include final void at 24h mark.",
    difficulty: "easy",
    tags: ["course:endocrine-and-diabetes-nursing", "module:foundations", "lesson:endocrine-assessment-and-investigations", "24-hour-urine", "cortisol", "diagnostic-testing"],
    isFree: true,
  },

  // ==========================================
  // MODULE 2: DIABETES FOUNDATIONS & PREGNANCY (3 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-ENDO-003",
    categorySlug: "med-surg",
    stem: "An asymptomatic 48-year-old executive undergoes a routine wellness health screening. Laboratory results show a fasting plasma glucose of 134 mg/dL (7.4 mmol/L) and a glycated hemoglobin (HbA1c) of 6.8%. What is the appropriate clinical follow-up regarding diagnostic confirmation of diabetes mellitus?",
    choices: [
      { id: "a", text: "Immediately start subcutaneous basal-bolus insulin and arrange diabetes education" },
      { id: "b", text: "Reassure the client that an HbA1c below 7.0% excludes diabetes" },
      { id: "c", text: "Arrange a 2-week lifestyle trial and repeat the HbA1c in three months" },
      { id: "d", text: "Repeat the fasting glucose or HbA1c on a subsequent day to confirm the diagnosis" }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Repeat the fasting glucose or HbA1c on a subsequent day to confirm the diagnosis\" According to standard clinical guidelines (ADA / WHO), in the absence of unequivocal symptomatic hyperglycemia (polyuria, polydipsia, unexplained weight loss), a diagnosis of diabetes mellitus requires two abnormal test results from either the same sample or two separate test occasions (e.g., fasting plasma glucose >= 126 mg/dL [7.0 mmol/L], 2-hour OGTT >= 200 mg/dL [11.1 mmol/L], or HbA1c >= 6.5%). Why the other options fail: option a treats a diagnosis that has not been confirmed, and insulin is not started on one abnormal screen. Option b uses the treatment target of 7.0% as a diagnostic threshold, which it is not; the diagnostic cut-off is 6.5%. Option c postpones confirmation for three months, when a single repeat test on another day settles it now.",
    strategy: "Diabetes diagnostic criteria: Fasting glucose >= 126 mg/dL (7.0 mmol/L) or HbA1c >= 6.5%. If asymptomatic, confirm with repeat testing on a separate day.",
    difficulty: "medium",
    tags: ["course:endocrine-and-diabetes-nursing", "module:diabetes-foundations", "lesson:types-diagnosis-and-risk", "diabetes-diagnosis", "hba1c", "fasting-blood-glucose"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-ENDO-004",
    categorySlug: "med-surg",
    stem: "A 22-year-old collegiate athlete with type 1 diabetes is planning an afternoon 60-minute vigorous cardiovascular workout. Pre-exercise blood glucose is 92 mg/dL (5.1 mmol/L), and urine ketones are negative. Which instruction should the nurse provide to ensure exercise safety?",
    choices: [
      { id: "a", text: "Give 4 units of rapid-acting lispro into the thigh before the workout to prevent hyperglycaemia" },
      { id: "b", text: "Cancel the workout, because exercise is contraindicated below 150 mg/dL" },
      { id: "c", text: "Halve the next insulin dose and start the workout without eating anything" },
      { id: "d", text: "Eat a 15-30 g carbohydrate snack before exercise and carry rapid-acting glucose" }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Eat a 15-30 g carbohydrate snack before exercise and carry rapid-acting glucose\" Exercise increases skeletal muscle glucose uptake independent of insulin. For clients with type 1 diabetes, exercising when blood glucose is below 100 mg/dL (5.5 mmol/L) creates a severe risk of exercise-induced hypoglycemia. The client should consume a 15-30g complex carbohydrate snack prior to exercise and carry fast-acting glucose. (Exercise is avoided only if blood glucose is > 250 mg/dL WITH ketones present). Why the other options fail: option a adds insulin when the glucose is already 92 mg/dL and exercise is about to start, which compounds the risk of hypoglycaemia. Option b cancels exercise on a threshold that does not exist; 92 mg/dL is safe once carbohydrate is taken. Option c halves insulin but gives no carbohydrate, so the fall in glucose is unopposed.",
    strategy: "Type 1 diabetes & exercise: If pre-exercise BG < 100 mg/dL, eat a 15g carb snack first! Never inject insulin into active exercising limbs.",
    difficulty: "easy",
    tags: ["course:endocrine-and-diabetes-nursing", "module:diabetes-foundations", "lesson:living-well-with-diabetes", "exercise-safety", "hypoglycemia-prevention", "type-1-diabetes"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-ENDO-005",
    categorySlug: "maternal-newborn",
    stem: "A pregnant client at 26 weeks of gestation undergoes a 75-gram 2-hour oral glucose tolerance test (OGTT). Results reveal: fasting glucose 102 mg/dL, 1-hour glucose 194 mg/dL, and 2-hour glucose 162 mg/dL, confirming gestational diabetes mellitus (GDM). What is the nurse's priority initial teaching for this client?",
    choices: [
      { id: "a", text: "Immediate twice-daily glibenclamide alongside the current diet" },
      { id: "b", text: "Medical nutrition therapy, daily activity, and blood glucose self-monitoring" },
      { id: "c", text: "Begin NPH insulin at bedtime tonight and continue the current diet completely unchanged" },
      { id: "d", text: "Admit for inpatient continuous glucose monitoring until delivery" }
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Medical nutrition therapy, daily activity, and blood glucose self-monitoring\" First-line management for gestational diabetes mellitus (GDM) is medical nutrition therapy (MNT) with personalized carbohydrate distribution across meals/snacks, moderate daily physical activity, and frequent self-monitoring of blood glucose (fasting target < 95 mg/dL; 1-hour postprandial < 140 mg/dL). Pharmacotherapy (subcutaneous insulin) is introduced only if glycemic targets are not achieved with lifestyle modifications. Why the other options fail: option a starts a sulfonylurea before lifestyle change has been tried, and glibenclamide is not first-line in GDM. Option c starts insulin without addressing diet, which is the first intervention and often sufficient on its own. Option d admits the client for monitoring that is done at home, without changing the glycaemia.",
    strategy: "Gestational diabetes first step: Nutritional counseling + glucose self-monitoring + moderate exercise. Insulin is added if lifestyle alone fails.",
    difficulty: "medium",
    tags: ["course:endocrine-and-diabetes-nursing", "module:diabetes-foundations", "lesson:diabetes-in-pregnancy", "gestational-diabetes", "antenatal-care", "medical-nutrition-therapy"],
    isFree: false,
  },

  // ==========================================
  // MODULE 3: DIABETES PHARMACOLOGY & HOSPITAL CARE (3 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-ENDO-006",
    categorySlug: "pharmacology-parenteral",
    stem: "A 58-year-old client with type 2 diabetes managed with oral metformin 1,000 mg twice daily is scheduled for an elective contrast-enhanced abdominal computerized tomography (CT) scan tomorrow. What is the priority nursing action regarding metformin administration?",
    choices: [
      { id: "a", text: "Reduce metformin to 500 mg on the morning of the scan and then resume the full dose at the next meal" },
      { id: "b", text: "Stop metformin 24 hours before the scan and restart it as soon as the scan is finished" },
      { id: "c", text: "Withhold metformin on the day of the scan and for 48 hours after, until renal function is normal" },
      { id: "d", text: "Continue metformin unchanged, because biguanides do not interact with iodinated contrast" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Withhold metformin on the day of the scan and for 48 hours after, until renal function is normal\" Iodinated radiocontrast agents can induce acute contrast-induced nephropathy. In clients taking metformin, decreased renal clearance causes dangerous accumulation of metformin, predisposing to life-threatening lactic acidosis (mortality ~50%). Metformin must be held on the day of the contrast procedure and withheld for at least 48 hours afterward until repeat serum creatinine confirms baseline renal function. Why the other options fail: option a reduces the dose when the drug must be stopped entirely for the procedure. Option b stops only 24 hours before and restarts immediately after the scan, when the risk window is the 48 hours after contrast while creatinine is still rising. Option d states a false premise; the danger is to the kidney, not a reaction with the contrast molecule.",
    strategy: "Metformin + Contrast Rule: Stop metformin on procedure day and hold for 48 hours post-contrast until renal function is verified normal. Prevents lactic acidosis.",
    difficulty: "medium",
    tags: ["course:endocrine-and-diabetes-nursing", "module:diabetes-treatment", "lesson:non-insulin-glucose-lowering-drugs", "metformin", "contrast-media", "lactic-acidosis"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-ENDO-007",
    categorySlug: "pharmacology-parenteral",
    stem: "A nurse is preparing to administer 10 units of regular insulin and 25 units of NPH insulin subcutaneously in a single syringe to a client with diabetes. Which sequence demonstrates correct medication preparation technique?",
    choices: [
      { id: "a", text: "Inject 10 units of air into Regular -> Inject 25 units of air into NPH -> Withdraw 25 units of NPH -> Withdraw 10 units of Regular" },
      { id: "b", text: "Inject 25 units of air into NPH -> Inject 10 units of air into Regular -> Withdraw 10 units of Regular -> Withdraw 25 units of NPH" },
      { id: "c", text: "Withdraw 25 units of NPH -> Withdraw 10 units of Regular without air injection" },
      { id: "d", text: "Withdraw 10 units of Regular -> Inject 25 units of air into NPH -> Withdraw 25 units of NPH" }
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Inject 25 units of air into NPH -> Inject 10 units of air into Regular -> Withdraw 10 units of Regular -> Withdraw 25 units of NPH\" The standard clinical rule for mixing insulins in a single syringe is 'Clear before Cloudy' (Regular is clear; NPH is cloudy). Sequence: 1) Inject air equal to dose into cloudy (NPH) without touching liquid, 2) Inject air equal to dose into clear (Regular), 3) Invert and withdraw exact clear (Regular) dose, 4) Insert needle into cloudy (NPH) and withdraw exact cloudy dose. This prevents contaminating the short-acting regular vial with intermediate protamine. Why the other options fail: option a withdraws NPH before regular, which contaminates the clear vial with protamine and makes the short-acting dose unreliable. Option c omits the air injections, so neither vial is pressurised and the measured doses drift. Option d draws regular before NPH without the air-transfer step and leaves cloudy insulin in the needle.",
    strategy: "Insulin mixing rule: RN (Regular before NPH) / 'Clear before Cloudy'. Inject air into NPH, air into Regular, draw Regular, draw NPH.",
    difficulty: "medium",
    tags: ["course:endocrine-and-diabetes-nursing", "module:diabetes-treatment", "lesson:insulin-therapy", "insulin-mixing", "regular-insulin", "nph-insulin"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-ENDO-008",
    categorySlug: "pharmacology-parenteral",
    stem: "A client with diabetes performs subcutaneous insulin injections exclusively into the right periumbilical area every morning because \"it doesn't hurt as much there.\" Assessment reveals a raised, spongy, indurated fibrous mass beneath the skin at that site. What is the primary clinical complication of this practice?",
    choices: [
      { id: "a", text: "Severe bacterial cellulitis requiring surgical incision and drainage" },
      { id: "b", text: "Lipohypertrophy leading to erratic, delayed, and unpredictable insulin absorption" },
      { id: "c", text: "Insulin antibody formation at the site, causing resistance and rising dose requirements" },
      { id: "d", text: "Local fat necrosis with chronic discharge and sinus formation" }
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Lipohypertrophy leading to erratic, delayed, and unpredictable insulin absorption\" Repeatedly injecting insulin into the exact same localized area causes lipohypertrophy—a benign accumulation of localized fibrous fat tissue stimulated by the lipogenic action of insulin. Injecting into lipohypertrophic tissue causes erratic, blunted, and unpredictable insulin absorption, leading to unexplained bouts of hyperglycemia and sudden refractory hypoglycemia. Clients must systematically rotate injection sites. Why the other options fail: option a describes infection, which this lesion is not; lipohypertrophy is firm, spongy and non-tender, without erythema or warmth. Option c describes immune-mediated resistance, which is systemic and not caused by using one site. Option d describes fat necrosis, which follows trauma and leaves a depressed scar, not a raised spongy mass.",
    strategy: "Lipohypertrophy = rubbery lump from repeated injections in one spot -> erratic insulin absorption. Rotate sites within anatomical zones.",
    difficulty: "easy",
    tags: ["course:endocrine-and-diabetes-nursing", "module:diabetes-treatment", "lesson:insulin-therapy", "lipohypertrophy", "insulin-injection", "site-rotation"],
    isFree: false,
  },

  // ==========================================
  // MODULE 4: DIABETIC & ENDOCRINE EMERGENCIES (3 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-ENDO-009",
    categorySlug: "med-surg",
    stem: "A conscious, alert client with type 1 diabetes complains of sudden shakiness, diaphoresis, palpitations, and intense hunger. Capillary point-of-care blood glucose is 52 mg/dL (2.9 mmol/L). Following the clinical \"Rule of 15,\" which nursing intervention is correct?",
    choices: [
      { id: "a", text: "Give a complex carbohydrate meal with protein and re-check in one hour" },
      { id: "b", text: "Give 150 mL of full-cream milk with two chocolate bars for sustained calories" },
      { id: "c", text: "Give 15 mg of intravenous glucagon now, since the client cannot be trusted to eat" },
      { id: "d", text: "Give 15 g of fast-acting carbohydrate, wait 15 minutes, then re-check the glucose" }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Give 15 g of fast-acting carbohydrate, wait 15 minutes, then re-check the glucose\" The 'Rule of 15' for conscious hypoglycemia (blood glucose < 70 mg/dL): 1) Administer 15g of simple, fast-acting carbohydrates (120 mL fruit juice or regular soda, 3-4 glucose tablets, or 1 tablespoon honey/sugar), 2) Wait 15 minutes and re-test blood glucose, 3) If blood glucose remains < 70 mg/dL, repeat with another 15g of carbohydrates. High-fat foods (chocolate, whole milk) should be avoided because dietary fat slows glucose absorption. Why the other options fail: option a gives carbohydrate bound with fat and protein, which is absorbed too slowly to correct a glucose of 52 mg/dL. Option b is high in fat, and fat slows gastric emptying and glucose absorption, which is why chocolate is excluded. Option c gives glucagon by a route and dose for an unconscious client; this client is alert and can swallow.",
    strategy: "Hypoglycemia Rule of 15: Give 15g fast-acting simple carbs -> wait 15 min -> recheck BG -> repeat if < 70. Avoid fats (chocolate) which delay absorption.",
    difficulty: "easy",
    tags: ["course:endocrine-and-diabetes-nursing", "module:diabetic-emergencies", "lesson:hypoglycaemia", "hypoglycemia", "rule-of-15", "acute-nursing"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-ENDO-010",
    categorySlug: "med-surg",
    stem: "A 21-year-old with type 1 diabetes is admitted with Diabetic Ketoacidosis (DKA). Vital signs: blood pressure 88/54 mmHg, pulse 136 bpm, respirations 32 breaths/min (Kussmaul breathing). Blood glucose is 560 mg/dL, and serum potassium is 3.1 mEq/L. Which clinical action should the nurse prioritize FIRST?",
    choices: [
      { id: "a", text: "Start 0.9% saline resuscitation and have the provider replete potassium before insulin" },
      { id: "b", text: "Give an immediate IV bolus of 0.15 units/kg regular insulin, then start the infusion" },
      { id: "c", text: "Give 100 mEq of intravenous sodium bicarbonate as a slow push" },
      { id: "d", text: "Start the insulin infusion at 0.1 units/kg/hour without waiting for the potassium result" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Start 0.9% saline resuscitation and have the provider replete potassium before insulin\" In DKA, fluid resuscitation with isotonic crystalloids (0.9% NS) is the absolute first priority to restore intravascular volume and renal perfusion. Crucially, insulin drives potassium from the extracellular fluid into cells. Starting insulin when serum potassium is already hypokalemic (< 3.3 mEq/L) will trigger lethal cardiac dysrhythmias and cardiac arrest. Potassium must be repleted >= 3.3 mEq/L before initiating insulin therapy. Why the other options fail: option b starts insulin when the potassium is 3.1 mEq/L, which drives potassium into cells and can arrest the heart, and boluses are no longer used. Option c treats acidosis that will correct with fluids and insulin, and bicarbonate is reserved for severe acidaemia. Option d repeats option b's mistake in a slower form: insulin is started without correcting the potassium, which must reach 3.3 mEq/L before any insulin runs.",
    strategy: "DKA Golden Rule: Fluids (0.9% NS) first! Check K+ before insulin: if K+ < 3.3 mEq/L, hold insulin and replace potassium first to prevent fatal arrhythmias.",
    difficulty: "hard",
    tags: ["course:endocrine-and-diabetes-nursing", "module:diabetic-emergencies", "lesson:diabetic-ketoacidosis-and-hyperosmolar-state", "dka", "hypokalemia-safety", "fluid-resuscitation"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-ENDO-011",
    categorySlug: "med-surg",
    stem: "A 42-year-old client with Addison disease who has been taking daily oral hydrocortisone for 5 years contracts acute bacterial gastroenteritis with persistent vomiting. The client arrives at the emergency department lethargic, hypotensive at 72/40 mmHg, pulse 128 bpm, serum sodium 124 mEq/L, and serum potassium 6.2 mEq/L. Which medication must the nurse prepare for immediate intravenous push?",
    choices: [
      { id: "a", text: "Intravenous Regular insulin with 50% dextrose bolus" },
      { id: "b", text: "Intravenous 3% hypertonic saline 100 mL bolus to correct the sodium" },
      { id: "c", text: "Intravenous Hydrocortisone sodium succinate (100 mg bolus)" },
      { id: "d", text: "Oral Fludrocortisone acetate 0.1 mg" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Intravenous Hydrocortisone sodium succinate (100 mg bolus)\" The client is in acute adrenal (Addisonian) crisis—a life-threatening shock state precipitated by physiological stress (infection, vomiting) in someone with primary adrenal insufficiency who cannot mount a cortisol response. Hallmarks include refractory distributive shock, severe hyponatremia, and hyperkalemia. Immediate life-saving treatment is rapid high-dose IV Hydrocortisone (100 mg bolus) along with aggressive IV isotonic saline resuscitation. Why the other options fail: option a treats the potassium with insulin and dextrose, which does lower potassium but does nothing for the hypotension and adds hypoglycaemia to a patient who cannot mount a cortisol response. Option b corrects the sodium before the cortisol, and the hyponatraemia of adrenal crisis resolves with hydrocortisone and saline. Option d is an oral mineralocorticoid, which a vomiting, hypotensive patient cannot absorb and which acts too slowly.",
    strategy: "Addisonian Crisis Triad: Severe hypotension + Hyponatremia + Hyperkalemia. Immediate life-saving drug is IV Hydrocortisone stat.",
    difficulty: "hard",
    tags: ["course:endocrine-and-diabetes-nursing", "module:diabetic-emergencies", "lesson:the-crashing-endocrine-patient", "addisonian-crisis", "hydrocortisone", "adrenal-emergency"],
    isFree: false,
  },

  // ==========================================
  // MODULE 5: CHRONIC COMPLICATIONS (2 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-ENDO-012",
    categorySlug: "med-surg",
    stem: "A client with a 10-year history of type 2 diabetes has a routine annual screening showing an elevated urine albumin-to-creatinine ratio (microalbuminuria) of 180 mg/g (normal < 30 mg/g). Blood pressure is 128/78 mmHg. Which medication class should the nurse anticipate being prescribed specifically for renal protection?",
    choices: [
      { id: "a", text: "A loop diuretic such as furosemide to lower the blood pressure" },
      { id: "b", text: "An NSAID such as ibuprofen, which reduces glomerular hyperfiltration" },
      { id: "c", text: "An ACE inhibitor such as lisinopril, or an ARB such as losartan" },
      { id: "d", text: "A thiazide diuretic such as hydrochlorothiazide to reduce intraglomerular pressure" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"An ACE inhibitor such as lisinopril, or an ARB such as losartan\" Microalbuminuria is the earliest clinical manifestation of diabetic nephropathy (glomerular hyperfiltration and basement membrane breakdown). ACE inhibitors (lisinopril) and ARBs (losartan) dilate the efferent renal arteriole, reducing intraglomerular hydrostatic pressure. This slows protein leakage and halts progressive renal fibrosis, providing proven renal protection in diabetics even when systemic blood pressure is normal. Why the other options fail: option a lowers systemic pressure but not intraglomerular pressure, and does not reduce albuminuria. Option b names the wrong mechanism: NSAIDs block prostaglandin-mediated afferent dilation, which lowers filtration and can precipitate acute kidney injury. Option d lowers pressure but has no effect on the efferent arteriole, so the albumin leak continues.",
    strategy: "Diabetic nephropathy early sign: Microalbuminuria. Renal protective drug of choice: ACE inhibitors or ARBs (lowers intraglomerular pressure).",
    difficulty: "medium",
    tags: ["course:endocrine-and-diabetes-nursing", "module:chronic-complications", "lesson:microvascular-and-macrovascular-complications", "diabetic-nephropathy", "microalbuminuria", "ace-inhibitors"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-ENDO-013",
    categorySlug: "health-promotion",
    stem: "The nurse conducts discharge teaching on daily foot care for a client with diabetic peripheral sensory neuropathy. Which self-care behavior by the client indicates a need for FURTHER instruction?",
    choices: [
      { id: "a", text: "\"I will use a hand mirror every day to inspect the bottoms of my feet and between my toes for cuts or blisters.\"" },
      { id: "b", text: "I will soak my feet in hot water and Epsom salts for 30 minutes every evening to improve my circulation." },
      { id: "c", text: "\"I will always wear clean cotton socks and never walk barefoot, even inside my own home.\"" },
      { id: "d", text: "\"I will cut my toenails straight across and file the edges gently with an emery board.\"" }
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"I will soak my feet in hot water and Epsom salts for 30 minutes every evening to improve my circulation.\" Soaking feet in hot water is strictly contraindicated in diabetic neuropathy because loss of thermal sensation prevents the client from detecting scalding temperatures, causing severe burns. Furthermore, prolonged soaking causes skin maceration, fissuring, and breakdown, creating an entry portal for severe bacterial infection and osteomyelitis. Feet should be washed daily in lukewarm water, dried thoroughly (especially between toes), and never soaked. Why the other options fail: option a is the correct technique for finding lesions the client cannot feel. Option c is correct footwear practice. Option d is the correct way to cut nails, and curved cutting is what risks an ingrowing nail.",
    strategy: "Diabetic foot safety rules: NEVER soak feet, NEVER walk barefoot, NEVER use hot water bottles, ALWAYS inspect with a mirror, cut nails straight across.",
    difficulty: "easy",
    tags: ["course:endocrine-and-diabetes-nursing", "module:chronic-complications", "lesson:the-diabetic-foot", "diabetic-foot-care", "neuropathy", "patient-education"],
    isFree: false,
  },

  // ==========================================
  // MODULE 6: THYROID, ADRENAL & PITUITARY (5 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-ENDO-014",
    categorySlug: "med-surg",
    stem: "A client with Graves disease develops high fever (40.2°C), marked tachycardia (162 bpm), agitation, and profuse diaphoresis following a pulmonary infection. The medical team diagnoses thyroid storm (thyrotoxic crisis). When ordering antipyretic therapy, why must the nurse ensure that ASPIRIN is NOT administered?",
    choices: [
      { id: "a", text: "Aspirin stimulates thyroid peroxidase directly and drives further hormone synthesis in the gland" },
      { id: "b", text: "Aspirin prevents propranolol from crossing the blood-brain barrier" },
      { id: "c", text: "Aspirin displaces thyroid hormone from binding globulin and raises free T3 and T4" },
      { id: "d", text: "Aspirin blocks peripheral conversion of T4 to T3 and deepens the crisis" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Aspirin displaces thyroid hormone from binding globulin and raises free T3 and T4\" In thyroid storm, aspirin (acetylsalicylic acid) is strictly contraindicated. Salicylates compete with thyroxine (T4) and triiodothyronine (T3) for binding sites on thyroid-binding globulin (TBG), displacing bound hormone and dramatically elevating circulating free (active) T3/T4 concentrations, exacerbating the hypermetabolic crisis. Paracetamol (acetaminophen) and external cooling blankets are the antipyretics of choice. Why the other options fail: option a describes hormone synthesis, which is not how salicylates act and not a mechanism of aspirin at antipyretic doses. Option b is a drug interaction that does not exist; propranolol is given in thyroid storm and reaches its target. Option d reverses the physiology, because blocking T4-to-T3 conversion is therapeutic and is exactly what aspirin does not do.",
    strategy: "Thyroid storm fever rule: Use Paracetamol (acetaminophen), NEVER Aspirin! Aspirin displaces T3/T4 from binding proteins, worsening the storm.",
    difficulty: "hard",
    tags: ["course:endocrine-and-diabetes-nursing", "module:thyroid-adrenal-and-pituitary", "lesson:thyroid-disorders", "thyroid-storm", "aspirin-contraindication", "graves-disease"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-ENDO-015",
    categorySlug: "med-surg",
    stem: "Four hours after undergoing a total thyroidectomy for toxic multinodular goiter, a client complains of rapidly worsening neck tightness and difficulty swallowing. The surgical dressing has a small nickel-sized stain, but the nurse observes that the client's anterior neck circumference has noticeably swollen, and high-pitched stridor is audible on inspiration. What is the priority emergency action?",
    choices: [
      { id: "a", text: "Reinforce the neck dressing with extra pressure gauze and elevate the head of the bed" },
      { id: "b", text: "Apply an ice collar and give an oral lozenge to reduce the swelling" },
      { id: "c", text: "Encourage vigorous coughing to clear pooled mucus from the larynx" },
      { id: "d", text: "Open the neck incision at the bedside to evacuate the haematoma and call the surgeon" }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Open the neck incision at the bedside to evacuate the haematoma and call the surgeon\" Post-thyroidectomy neck hematoma is a catastrophic, rapidly progressive airway emergency. Bleeding into the tight fascial neck compartments compresses the trachea, causing acute mechanical suffocation and death within minutes. External bleeding on the dressing is often minimal. The emergency action is immediate bedside release of the neck incision sutures/clips to evacuate the hematoma and decompress the airway, followed by emergency surgical exploration. Why the other options fail: option a presses on a neck that is already tense and adds dressing bulk over the airway. Option b treats the pain and not the compression, and an oral lozenge cannot relieve stridor from an obstructed trachea. Option c uses coughing against an obstruction that is outside the trachea, which raises the pressure in the bleeding tissue.",
    strategy: "Post-thyroidectomy hematoma: Neck swelling + stridor = mechanical tracheal compression. Cut bedside sutures stat to relieve pressure. Keep suture removal kit at bedside.",
    difficulty: "hard",
    tags: ["course:endocrine-and-diabetes-nursing", "module:thyroid-adrenal-and-pituitary", "lesson:nursing-the-thyroidectomy-patient", "neck-hematoma", "tracheal-compression", "thyroidectomy-emergency"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-ENDO-016",
    categorySlug: "med-surg",
    stem: "A client presents with central truncal obesity, thin extremities, purple abdominal striae, facial rounding (\"moon facies\"), and easy bruising. Laboratory testing demonstrates elevated fasting blood glucose, hypokalemia, and elevated 24-hour urinary free cortisol. Which clinical condition corresponds to these features?",
    choices: [
      { id: "a", text: "Cushing syndrome (hypercortisolism)" },
      { id: "b", text: "Addison disease (hypoadrenalism)" },
      { id: "c", text: "Pheochromocytoma" },
      { id: "d", text: "Primary aldosteronism (Conn syndrome)" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Cushing syndrome (hypercortisolism)\" Cushing syndrome results from chronic excess glucocorticoids (cortisol). Cortisol stimulates gluconeogenesis and lipogenesis in the trunk while breaking down protein in muscle and connective tissues. Classic signs include: truncal obesity, buffalo hump, moon face, purple abdominal striae, thin fragile skin with ecchymoses, muscle wasting, hyperglycemia, and hypokalemic metabolic alkalosis. Why the other options fail: option b is the mirror image, insufficient cortisol, which gives hypotension, hyperkalaemia and weight loss rather than striae and moon face. Option c is catecholamine excess, which gives episodic hypertension, palpitations and sweating. Option d is aldosterone excess, which gives hypertension and hypokalaemia with normal cortisol and no striae.",
    strategy: "Cushing syndrome hallmarks: 'Cushion of fat' (moon face, buffalo hump, purple striae), high glucose, low potassium, thin skin.",
    difficulty: "easy",
    tags: ["course:endocrine-and-diabetes-nursing", "module:thyroid-adrenal-and-pituitary", "lesson:adrenal-disorders", "cushing-syndrome", "hypercortisolism", "assessment-findings"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-ENDO-017",
    categorySlug: "med-surg",
    stem: "Following transsphenoidal hypophysectomy for a pituitary adenoma, a client's urinary output increases to 600 mL/hour of pale, water-clear urine for 3 consecutive hours. Serum sodium is 152 mEq/L, and urine specific gravity is 1.002. Which clinical condition and pharmacological treatment should the nurse anticipate?",
    choices: [
      { id: "a", text: "Syndrome of inappropriate antidiuretic hormone (SIADH); administer hypertonic 3% saline" },
      { id: "b", text: "Central diabetes insipidus (DI); administer subcutaneous or nasal desmopressin (DDAVP)" },
      { id: "c", text: "Acute kidney injury from surgical hypoperfusion; give intravenous loop diuretics" },
      { id: "d", text: "Cerebral salt wasting; restrict all fluid intake to 500 mL per day" }
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Central diabetes insipidus (DI); administer subcutaneous or nasal desmopressin (DDAVP)\" Surgical manipulation of the posterior pituitary or hypothalamus can disrupt the synthesis and release of antidiuretic hormone (ADH / vasopressin), triggering central Diabetes Insipidus (DI). Lack of ADH impairs renal collecting duct water reabsorption, causing massive dilute polyuria (> 300 mL/hr), low urine specific gravity (< 1.005), low urine osmolality, and systemic hemoconcentration with hypernatremia. Treatment is synthetic ADH (Desmopressin / DDAVP). Why the other options fail: option a follows the opposite physiology, because SIADH gives concentrated urine and low sodium, not dilute urine at 600 mL/hour with a sodium of 152. Option c would give oliguria with a rising creatinine, not a specific gravity of 1.002. Option d wastes salt and is treated with saline, and fluid restriction is the treatment for SIADH, not for this picture.",
    strategy: "Diabetes Insipidus (DI) = 'Dry Inside' (High urinary volume + Low urine specific gravity < 1.005 + High serum Na+). Treat with Desmopressin (DDAVP).",
    difficulty: "medium",
    tags: ["course:endocrine-and-diabetes-nursing", "module:thyroid-adrenal-and-pituitary", "lesson:pituitary-disorders-and-water-balance", "diabetes-insipidus", "desmopressin", "transsphenoidal-hypophysectomy"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-ENDO-018",
    categorySlug: "med-surg",
    stem: "A client with primary hyperparathyroidism presents with kidney stones, bone pain, muscle weakness, and abdominal constipation (\"stones, bones, groans, and psychic moans\"). Serum calcium is elevated at 12.8 mg/dL (reference 8.5-10.5 mg/dL). Which initial intervention is paramount to promote calcium excretion and prevent acute renal injury?",
    choices: [
      { id: "a", text: "Aggressive IV 0.9% saline at 200-300 mL/hour, then a loop diuretic" },
      { id: "b", text: "Strict oral fluid restriction to 800 mL a day to reduce the calcium load" },
      { id: "c", text: "Subcutaneous calcitonin 4 units/kg every 12 hours as the only initial measure" },
      { id: "d", text: "Thiazide diuretics, which enhance renal calcium clearance" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Aggressive IV 0.9% saline at 200-300 mL/hour, then a loop diuretic\" Severe hypercalcemia (serum calcium > 12 mg/dL) causes nephrogenic diabetes insipidus, volume depletion, and renal failure. The cornerstone of immediate management is rapid IV hydration with 0.9% normal saline (200-300 mL/hr) to expand intravascular volume, restore glomerular filtration, and promote urinary calcium excretion. Loop diuretics (furosemide) can be added once volume is restored; thiazide diuretics are strictly contraindicated because they increase renal calcium reabsorption. Why the other options fail: option b restricts the fluid needed to excrete the calcium and would deepen both the dehydration and the hypercalcaemia. Option c is an adjunct given after volume is restored, not a first measure, and it does not correct the dehydration. Option d is the wrong diuretic class, because thiazides increase calcium reabsorption and worsen hypercalcaemia.",
    strategy: "Hypercalcemia management: 1) Normal saline IV hydration first (dilutes and flushes Ca2+), 2) Loop diuretics (furosemide). Never use Thiazides (which raise Ca2+).",
    difficulty: "hard",
    tags: ["course:endocrine-and-diabetes-nursing", "module:thyroid-adrenal-and-pituitary", "lesson:calcium-and-parathyroid-disorders", "hypercalcemia", "hyperparathyroidism", "fluid-hydration"],
    isFree: false,
  },

  // ==========================================
  // MODULE 7: PHARMACOLOGY & CALCULATIONS (2 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-ENDO-019",
    categorySlug: "pharmacology-parenteral",
    stem: "A client newly diagnosed with primary hypothyroidism is prescribed oral levothyroxine 75 mcg once daily. Which patient education instruction is essential to ensure maximum gastrointestinal absorption?",
    choices: [
      { id: "a", text: "In the morning on an empty stomach, 30 to 60 minutes before breakfast" },
      { id: "b", text: "Take the medication together with your calcium and iron supplements at bedtime each night" },
      { id: "c", text: "Crush the tablet and stir it into a cup of hot espresso coffee" },
      { id: "d", text: "Take it immediately after dinner with a high-fibre meal" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"In the morning on an empty stomach, 30 to 60 minutes before breakfast\" Levothyroxine oral bioavailability is significantly compromised by food, fiber, caffeine, and polyvalent cations (calcium, iron, antacids). To ensure consistent gastrointestinal absorption and stable serum hormone levels, clients must take levothyroxine on an empty stomach with a full glass of plain water in the morning, at least 30-60 minutes before breakfast (or at bedtime at least 3-4 hours after the last meal). Co-administration with iron or calcium requires a 4-hour separation window. Why the other options fail: option b puts polyvalent cations in the same swallow, and calcium and iron both bind levothyroxine and block absorption. Option c destroys part of the dose with heat and adds caffeine, which the same rationale names as an absorption problem. Option d adds dietary fibre at the moment of absorption, which binds the tablet in the gut.",
    strategy: "Levothyroxine administration rule: Take in morning on an EMPTY STOMACH with water 30-60 min before breakfast. Separate from Calcium/Iron by at least 4 hours.",
    difficulty: "easy",
    tags: ["course:endocrine-and-diabetes-nursing", "module:pharmacology-and-calculations", "lesson:endocrine-drugs-and-calculations", "levothyroxine", "drug-absorption", "patient-teaching"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-ENDO-020",
    categorySlug: "pharmacology-parenteral",
    stem: "A provider prescribes an intravenous regular insulin infusion for a client in Diabetic Ketoacidosis (DKA) at 0.1 units/kg/hour. The client weighs 70 kg. The pharmacy delivers a 250 mL bag of 0.9% normal saline containing 250 units of regular insulin (concentration: 1 unit/mL). At what rate in mL/hour should the nurse program the infusion pump?",
    choices: [
      { id: "a", text: "14 mL/hour" },
      { id: "b", text: "70 mL/hour" },
      { id: "c", text: "0.7 mL/hour" },
      { id: "d", text: "7 mL/hour" }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"7 mL/hour\" Calculation steps: 1) Desired dose per hour: 0.1 units/kg/hour x 70 kg = 7 units/hour. 2) Solution concentration: 250 units in 250 mL = 1 unit/mL. 3) Infusion pump rate: 7 units/hour ÷ 1 unit/mL = 7 mL/hour. Why the other options fail: option a is a tenfold error, because 14 mL/hour delivers 0.2 units/kg/hour, twice the prescribed rate. Option b mistakes the patient's weight for the rate and would deliver 70 units/hour. Option c is a decimal slip that delivers 0.01 units/kg/hour, one tenth of the order.",
    strategy: "Insulin drip math: Dose = 0.1 x 70 = 7 units/hr. Concentration = 250 units / 250 mL = 1 unit/mL. Pump rate = 7 mL/hr.",
    difficulty: "easy",
    tags: ["course:endocrine-and-diabetes-nursing", "module:pharmacology-and-calculations", "lesson:endocrine-drugs-and-calculations", "insulin-calculation", "dosage-math", "dka-infusion"],
    isFree: false,
  }
];
