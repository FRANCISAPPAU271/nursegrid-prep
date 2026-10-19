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
      { id: "a", text: "Primary hypothyroidism resulting from intrinsic thyroid gland dysfunction" },
      { id: "b", text: "Secondary hypothyroidism caused by anterior pituitary failure" },
      { id: "c", text: "Tertiary hypothyroidism due to hypothalamic TRH deficiency" },
      { id: "d", text: "Subclinical hyperthyroidism with peripheral hormone resistance" }
    ],
    correctChoiceId: "a",
    rationale: "In the negative feedback loop of the thyroid axis, low circulating free T4 triggers the anterior pituitary gland to release excess TSH to stimulate thyroid hormone production. When the thyroid gland itself fails (primary hypothyroidism, most commonly Hashimoto thyroiditis), T4 remains low despite high TSH stimulation. Conversely, secondary (pituitary) hypothyroidism would present with low or inappropriately normal TSH alongside low T4.",
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
      { id: "a", text: "Collect only the first morning urine specimen each day for three consecutive days" },
      { id: "b", text: "Discard the first morning urine specimen on day one, save all urine for the next 24 hours on ice or refrigerated, and include the first void of day two" },
      { id: "c", text: "Save the first morning urine on day one and stop collecting exactly at midnight" },
      { id: "d", text: "Discard any urine collected after bowel movements to prevent bacterial cross-contamination" }
    ],
    correctChoiceId: "b",
    rationale: "Proper 24-hour urine collection protocol requires starting with an empty bladder: discard the first morning void on day 1 (record start time), then collect all urine produced over the subsequent 24 hours into a preservative container kept on ice or in the refrigerator. Exactly 24 hours from the start time on day 2, the client voids and adds that final specimen to the container.",
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
      { id: "a", text: "Immediately initiate subcutaneous basal-bolus insulin therapy" },
      { id: "b", text: "Reassure the client that an HbA1c below 7.0% excludes diabetes" },
      { id: "c", text: "Repeat the fasting plasma glucose or HbA1c test on a subsequent day to confirm the diagnosis of diabetes mellitus" },
      { id: "d", text: "Order an emergency 72-hour fast to test for pancreatic beta-cell hyperplasia" }
    ],
    correctChoiceId: "c",
    rationale: "According to standard clinical guidelines (ADA / WHO), in the absence of unequivocal symptomatic hyperglycemia (polyuria, polydipsia, unexplained weight loss), a diagnosis of diabetes mellitus requires two abnormal test results from either the same sample or two separate test occasions (e.g., fasting plasma glucose >= 126 mg/dL [7.0 mmol/L], 2-hour OGTT >= 200 mg/dL [11.1 mmol/L], or HbA1c >= 6.5%).",
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
      { id: "a", text: "Administer 4 units of rapid-acting insulin lispro into the thigh to prevent exercise hyperglycemia" },
      { id: "b", text: "Cancel the workout because exercise is strictly contraindicated when blood glucose is below 150 mg/dL" },
      { id: "c", text: "Drink 500 mL of pure water and re-check blood glucose 2 hours after finishing" },
      { id: "d", text: "Consume a 15-to-30-gram carbohydrate snack before starting exercise and keep rapid-acting carbohydrates readily accessible" }
    ],
    correctChoiceId: "d",
    rationale: "Exercise increases skeletal muscle glucose uptake independent of insulin. For clients with type 1 diabetes, exercising when blood glucose is below 100 mg/dL (5.5 mmol/L) creates a severe risk of exercise-induced hypoglycemia. The client should consume a 15-30g complex carbohydrate snack prior to exercise and carry fast-acting glucose. (Exercise is avoided only if blood glucose is > 250 mg/dL WITH ketones present).",
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
      { id: "a", text: "Medical nutrition therapy with carbohydrate distribution, daily physical activity, and blood glucose self-monitoring" },
      { id: "b", text: "Immediate initiation of oral glibenclamide twice daily" },
      { id: "c", text: "Strict bedrest in left lateral position for the remainder of the pregnancy" },
      { id: "d", text: "Scheduled elective cesarean delivery at 32 weeks of gestation" }
    ],
    correctChoiceId: "a",
    rationale: "First-line management for gestational diabetes mellitus (GDM) is medical nutrition therapy (MNT) with personalized carbohydrate distribution across meals/snacks, moderate daily physical activity, and frequent self-monitoring of blood glucose (fasting target < 95 mg/dL; 1-hour postprandial < 140 mg/dL). Pharmacotherapy (subcutaneous insulin) is introduced only if glycemic targets are not achieved with lifestyle modifications.",
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
      { id: "a", text: "Double the metformin dose 2 hours prior to the scan to counteract contrast hyperglycemia" },
      { id: "b", text: "Withhold metformin on the morning of the procedure and for at least 48 hours post-procedure until renal function is verified normal" },
      { id: "c", text: "Administer the metformin dose with an intravenous bolus of 50% dextrose" },
      { id: "d", text: "Continue metformin without alteration because oral biguanides do not interact with iodinated contrast" }
    ],
    correctChoiceId: "b",
    rationale: "Iodinated radiocontrast agents can induce acute contrast-induced nephropathy. In clients taking metformin, decreased renal clearance causes dangerous accumulation of metformin, predisposing to life-threatening lactic acidosis (mortality ~50%). Metformin must be held on the day of the contrast procedure and withheld for at least 48 hours afterward until repeat serum creatinine confirms baseline renal function.",
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
      { id: "b", text: "Withdraw 25 units of NPH -> Withdraw 10 units of Regular without air injection" },
      { id: "c", text: "Inject 25 units of air into NPH -> Inject 10 units of air into Regular -> Withdraw 10 units of Regular -> Withdraw 25 units of NPH" },
      { id: "d", text: "Withdraw 10 units of Regular -> Inject 25 units of air into NPH -> Withdraw 25 units of NPH" }
    ],
    correctChoiceId: "c",
    rationale: "The standard clinical rule for mixing insulins in a single syringe is 'Clear before Cloudy' (Regular is clear; NPH is cloudy). Sequence: 1) Inject air equal to dose into cloudy (NPH) without touching liquid, 2) Inject air equal to dose into clear (Regular), 3) Invert and withdraw exact clear (Regular) dose, 4) Insert needle into cloudy (NPH) and withdraw exact cloudy dose. This prevents contaminating the short-acting regular vial with intermediate protamine.",
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
      { id: "b", text: "Systemic anaphylactic sensitization to the insulin preservative" },
      { id: "c", text: "Permanent atrophy of the rectus abdominis muscle fascial plane" },
      { id: "d", text: "Lipohypertrophy leading to erratic, delayed, and unpredictable insulin absorption" }
    ],
    correctChoiceId: "d",
    rationale: "Repeatedly injecting insulin into the exact same localized area causes lipohypertrophy—a benign accumulation of localized fibrous fat tissue stimulated by the lipogenic action of insulin. Injecting into lipohypertrophic tissue causes erratic, blunted, and unpredictable insulin absorption, leading to unexplained bouts of hyperglycemia and sudden refractory hypoglycemia. Clients must systematically rotate injection sites.",
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
      { id: "a", text: "Administer 15 grams of fast-acting simple carbohydrates (such as 120 mL of fruit juice), wait 15 minutes, and re-check blood glucose" },
      { id: "b", text: "Administer 15 units of subcutaneous regular insulin and re-check blood glucose in 15 minutes" },
      { id: "c", text: "Give the client 150 mL of full-cream milk with two chocolate bars to provide sustained fat calories" },
      { id: "d", text: "Inject 15 mg of intravenous glucagon bolus immediately" }
    ],
    correctChoiceId: "a",
    rationale: "The 'Rule of 15' for conscious hypoglycemia (blood glucose < 70 mg/dL): 1) Administer 15g of simple, fast-acting carbohydrates (120 mL fruit juice or regular soda, 3-4 glucose tablets, or 1 tablespoon honey/sugar), 2) Wait 15 minutes and re-test blood glucose, 3) If blood glucose remains < 70 mg/dL, repeat with another 15g of carbohydrates. High-fat foods (chocolate, whole milk) should be avoided because dietary fat slows glucose absorption.",
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
      { id: "a", text: "Administer an immediate IV bolus of 0.15 units/kg regular insulin followed by continuous infusion" },
      { id: "b", text: "Initiate rapid IV 0.9% normal saline fluid resuscitation and notify the provider to replenish potassium BEFORE starting IV regular insulin" },
      { id: "c", text: "Administer 100 mEq of intravenous sodium bicarbonate push" },
      { id: "d", text: "Administer subcutaneous insulin glargine 30 units into the deltoid" }
    ],
    correctChoiceId: "b",
    rationale: "In DKA, fluid resuscitation with isotonic crystalloids (0.9% NS) is the absolute first priority to restore intravascular volume and renal perfusion. Crucially, insulin drives potassium from the extracellular fluid into cells. Starting insulin when serum potassium is already hypokalemic (< 3.3 mEq/L) will trigger lethal cardiac dysrhythmias and cardiac arrest. Potassium must be repleted >= 3.3 mEq/L before initiating insulin therapy.",
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
      { id: "b", text: "Intravenous Furosemide 80 mg bolus" },
      { id: "c", text: "Intravenous Hydrocortisone sodium succinate (100 mg bolus)" },
      { id: "d", text: "Oral Fludrocortisone acetate 0.1 mg" }
    ],
    correctChoiceId: "c",
    rationale: "The client is in acute adrenal (Addisonian) crisis—a life-threatening shock state precipitated by physiological stress (infection, vomiting) in someone with primary adrenal insufficiency who cannot mount a cortisol response. Hallmarks include refractory distributive shock, severe hyponatremia, and hyperkalemia. Immediate life-saving treatment is rapid high-dose IV Hydrocortisone (100 mg bolus) along with aggressive IV isotonic saline resuscitation.",
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
      { id: "a", text: "A loop diuretic (such as furosemide)" },
      { id: "b", text: "A non-steroidal anti-inflammatory drug (such as ibuprofen)" },
      { id: "c", text: "A calcium supplement with vitamin D" },
      { id: "d", text: "An Angiotensin-Converting Enzyme (ACE) inhibitor (such as lisinopril) or Angiotensin Receptor Blocker (ARB)" }
    ],
    correctChoiceId: "d",
    rationale: "Microalbuminuria is the earliest clinical manifestation of diabetic nephropathy (glomerular hyperfiltration and basement membrane breakdown). ACE inhibitors (lisinopril) and ARBs (losartan) dilate the efferent renal arteriole, reducing intraglomerular hydrostatic pressure. This slows protein leakage and halts progressive renal fibrosis, providing proven renal protection in diabetics even when systemic blood pressure is normal.",
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
      { id: "a", text: "\"I will soak my feet in hot water and Epsom salts for 30 minutes every evening to improve my circulation.\"" },
      { id: "b", text: "\"I will use a hand mirror every day to inspect the bottoms of my feet and between my toes for cuts or blisters.\"" },
      { id: "c", text: "\"I will always wear clean cotton socks and never walk barefoot, even inside my own home.\"" },
      { id: "d", text: "\"I will cut my toenails straight across and file the edges gently with an emery board.\"" }
    ],
    correctChoiceId: "a",
    rationale: "Soaking feet in hot water is strictly contraindicated in diabetic neuropathy because loss of thermal sensation prevents the client from detecting scalding temperatures, causing severe burns. Furthermore, prolonged soaking causes skin maceration, fissuring, and breakdown, creating an entry portal for severe bacterial infection and osteomyelitis. Feet should be washed daily in lukewarm water, dried thoroughly (especially between toes), and never soaked.",
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
      { id: "a", text: "Aspirin induces acute gastrointestinal perforation during thyrotoxicosis" },
      { id: "b", text: "Aspirin displaces thyroid hormone from thyroid-binding globulin, significantly increasing circulating levels of free T3 and T4" },
      { id: "c", text: "Aspirin prevents propranolol from crossing the blood-brain barrier" },
      { id: "d", text: "Aspirin causes immediate paradoxical suppression of TSH receptors" }
    ],
    correctChoiceId: "b",
    rationale: "In thyroid storm, aspirin (acetylsalicylic acid) is strictly contraindicated. Salicylates compete with thyroxine (T4) and triiodothyronine (T3) for binding sites on thyroid-binding globulin (TBG), displacing bound hormone and dramatically elevating circulating free (active) T3/T4 concentrations, exacerbating the hypermetabolic crisis. Paracetamol (acetaminophen) and external cooling blankets are the antipyretics of choice.",
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
      { id: "a", text: "Reinforce the surgical neck dressing with extra pressure gauze wraps" },
      { id: "b", text: "Administer an oral throat lozenge and place an ice collar around the neck" },
      { id: "c", text: "Immediately cut the sutures or open the clips at the bedside to evacuate the compressive neck hematoma and call the surgical team" },
      { id: "d", text: "Encourage the client to cough vigorously to dislodge pooled laryngeal mucus" }
    ],
    correctChoiceId: "c",
    rationale: "Post-thyroidectomy neck hematoma is a catastrophic, rapidly progressive airway emergency. Bleeding into the tight fascial neck compartments compresses the trachea, causing acute mechanical suffocation and death within minutes. External bleeding on the dressing is often minimal. The emergency action is immediate bedside release of the neck incision sutures/clips to evacuate the hematoma and decompress the airway, followed by emergency surgical exploration.",
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
      { id: "a", text: "Addison disease (hypoadrenalism)" },
      { id: "b", text: "Pheochromocytoma" },
      { id: "c", text: "Primary aldosteronism (Conn syndrome)" },
      { id: "d", text: "Cushing syndrome (hypercortisolism)" }
    ],
    correctChoiceId: "d",
    rationale: "Cushing syndrome results from chronic excess glucocorticoids (cortisol). Cortisol stimulates gluconeogenesis and lipogenesis in the trunk while breaking down protein in muscle and connective tissues. Classic signs include: truncal obesity, buffalo hump, moon face, purple abdominal striae, thin fragile skin with ecchymoses, muscle wasting, hyperglycemia, and hypokalemic metabolic alkalosis.",
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
      { id: "a", text: "Central diabetes insipidus (DI); administer subcutaneous or nasal desmopressin (DDAVP)" },
      { id: "b", text: "Syndrome of inappropriate antidiuretic hormone (SIADH); administer hypertonic 3% saline" },
      { id: "c", text: "Acute kidney injury; administer intravenous loop diuretics" },
      { id: "d", text: "Cerebral salt wasting; restrict fluid intake to 500 mL/day" }
    ],
    correctChoiceId: "a",
    rationale: "Surgical manipulation of the posterior pituitary or hypothalamus can disrupt the synthesis and release of antidiuretic hormone (ADH / vasopressin), triggering central Diabetes Insipidus (DI). Lack of ADH impairs renal collecting duct water reabsorption, causing massive dilute polyuria (> 300 mL/hr), low urine specific gravity (< 1.005), low urine osmolality, and systemic hemoconcentration with hypernatremia. Treatment is synthetic ADH (Desmopressin / DDAVP).",
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
      { id: "a", text: "Strict oral fluid restriction to 800 mL/day" },
      { id: "b", text: "Aggressive intravenous hydration with 0.9% normal saline at 200-300 mL/hour followed by loop diuretics" },
      { id: "c", text: "Administration of oral calcium carbonate with meals" },
      { id: "d", text: "Administration of thiazide diuretics to enhance renal clearance" }
    ],
    correctChoiceId: "b",
    rationale: "Severe hypercalcemia (serum calcium > 12 mg/dL) causes nephrogenic diabetes insipidus, volume depletion, and renal failure. The cornerstone of immediate management is rapid IV hydration with 0.9% normal saline (200-300 mL/hr) to expand intravascular volume, restore glomerular filtration, and promote urinary calcium excretion. Loop diuretics (furosemide) can be added once volume is restored; thiazide diuretics are strictly contraindicated because they increase renal calcium reabsorption.",
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
      { id: "a", text: "Take the medication with calcium and iron supplements at bedtime" },
      { id: "b", text: "Crush the tablet and stir it into a cup of hot espresso coffee" },
      { id: "c", text: "Take the medication in the morning on an empty stomach with a full glass of water, at least 30 to 60 minutes before breakfast" },
      { id: "d", text: "Take the medication immediately after dinner with a high-fiber meal" }
    ],
    correctChoiceId: "c",
    rationale: "Levothyroxine oral bioavailability is significantly compromised by food, fiber, caffeine, and polyvalent cations (calcium, iron, antacids). To ensure consistent gastrointestinal absorption and stable serum hormone levels, clients must take levothyroxine on an empty stomach with a full glass of plain water in the morning, at least 30-60 minutes before breakfast (or at bedtime at least 3-4 hours after the last meal). Co-administration with iron or calcium requires a 4-hour separation window.",
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
    correctChoiceId: "d",
    rationale: "Calculation steps: 1) Desired dose per hour: 0.1 units/kg/hour x 70 kg = 7 units/hour. 2) Solution concentration: 250 units in 250 mL = 1 unit/mL. 3) Infusion pump rate: 7 units/hour ÷ 1 unit/mL = 7 mL/hour.",
    strategy: "Insulin drip math: Dose = 0.1 x 70 = 7 units/hr. Concentration = 250 units / 250 mL = 1 unit/mL. Pump rate = 7 mL/hr.",
    difficulty: "easy",
    tags: ["course:endocrine-and-diabetes-nursing", "module:pharmacology-and-calculations", "lesson:endocrine-drugs-and-calculations", "insulin-calculation", "dosage-math", "dka-infusion"],
    isFree: false,
  }
];
