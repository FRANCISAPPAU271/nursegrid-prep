import type { AuthoredQuestion } from "./authored-bank";

export const PHARM_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-PHARM-001",
    categorySlug: "pharmacology-parenteral",
    stem: "A patient with severe acute pain is transitioned from intravenous morphine (4 mg IV every 3 hours) to oral morphine tablets. The nurse notes that the physician prescribes oral morphine at 15 mg every 4 hours. The patient asks why the oral dose is nearly four times larger than the IV dose. What pharmacological concept explains this dosage difference?",
    choices: [
      {
        id: "a",
        text: "Extensive hepatic first-pass metabolism significantly reduces the systemic bioavailability of orally administered morphine",
      },
      {
        id: "b",
        text: "Oral morphine is eliminated rapidly by renal tubular secretion before reaching the bloodstream",
      },
      {
        id: "c",
        text: "Intravenous morphine is largely inactivated by plasma esterases before reaching opioid receptors",
      },
      {
        id: "d",
        text: "Oral tablets contain large amounts of binding excipients that permanently neutralize the active drug",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "First-pass metabolism occurs when an orally administered drug is absorbed from the gastrointestinal tract into the portal circulation and undergoes significant enzymatic metabolism in the liver before reaching systemic circulation. Morphine has a low oral bioavailability (approximately 20% to 40%) due to extensive first-pass hepatic glucuronidation. Consequently, the oral dose must be substantially higher (roughly 3 times the parenteral dose) to achieve equivalent therapeutic blood levels and analgesia. IV administration bypasses the portal circulation, providing 100% bioavailability.",
    strategy: "First-pass effect: Oral drugs absorbed through portal vein are metabolized by the liver before entering systemic circulation, requiring higher doses than IV.",
    difficulty: "easy",
    tags: ["pharmacology", "pharmacokinetics", "first-pass-effect", "bioavailability", "morphine"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-002",
    categorySlug: "leadership-delegation",
    stem: "A nurse realizes that she inadvertently administered 50 mg of oral metoprolol tartrate to a client whose MAR called for 25 mg. What is the nurse's immediate priority sequence of professional actions?",
    choices: [
      {
        id: "a",
        text: "Assess the client's vital signs (apical pulse, blood pressure, and level of consciousness), notify the attending physician immediately, monitor for bradycardia and hypotension, and file an incident report according to institutional policy",
      },
      {
        id: "b",
        text: "Wait 4 hours to see if the client's heart rate drops below 40 bpm before telling anyone",
      },
      {
        id: "c",
        text: "Induce emesis with ipecac syrup immediately and erase the MAR charting",
      },
      {
        id: "d",
        text: "Administer 1 mg of intravenous atropine prophylactically before checking the pulse",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "When a medication error occurs, patient safety is the paramount priority. The nurse must immediately: (1) assess the patient's physiological status (vital signs, heart rate, rhythm, blood pressure), (2) alert the prescribing physician and charge nurse with objective assessment data, (3) implement prescribed monitoring or corrective interventions, and (4) complete an internal incident/variance report. Incident reports are quality improvement tools and must never be referenced in the patient's legal medical record or used punitively in a just culture.",
    strategy: "Medication error response: ASSESS THE PATIENT FIRST -> Notify physician -> Implement corrective care -> Document and submit incident report.",
    difficulty: "easy",
    tags: ["pharmacology", "medication-errors", "patient-safety", "beta-blockers", "just-culture"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-003",
    categorySlug: "pharmacology-parenteral",
    stem: "A nurse prepares to administer medications via a fine-bore nasogastric feeding tube to a client receiving continuous enteral nutrition. The MAR includes: omeprazole delayed-release capsule, metoprolol succinate extended-release tablet, and paracetamol elixir. Which action by the nurse represents safe enteral medication administration?",
    choices: [
      {
        id: "a",
        text: "Contact the pharmacist/physician to replace the delayed-release and extended-release formulations with immediate-release or liquid alternatives, flush the tube with 15 to 30 mL of sterile water before and between medications, and administer each drug separately",
      },
      {
        id: "b",
        text: "Crush the metoprolol succinate extended-release tablet into a fine powder and dissolve it in hot water",
      },
      {
        id: "c",
        text: "Open the omeprazole capsule, crush the enteric-coated micro-granules vigorously, and mix them together with the paracetamol elixir",
      },
      {
        id: "d",
        text: "Pour all medications directly into the enteral nutrition feeding bag to infuse continuously over 24 hours",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Enteral tube medication safety principles require: (1) NEVER crushing enteric-coated (EC), delayed-release, or extended-release (ER/XR/XL/SR) medications, as destroying their release matrix causes rapid absorption, potential toxicity ('dose dumping'), and tube occlusion; (2) consulting the pharmacy for liquid, dispersible, or immediate-release substitutes; (3) administering medications separately rather than mixing them together; (4) flushing the tube with 15–30 mL of water before the first drug, 5–10 mL between drugs, and 15–30 mL after the last drug; and (5) never mixing medications directly into enteral feeding formula.",
    strategy: "Enteral tube medications: Never crush ER/EC formulations (request liquid/immediate-release). Administer separately and flush with water between drugs.",
    difficulty: "medium",
    tags: ["pharmacology", "enteral-feeding", "medication-safety", "nasogastric-tube", "drug-administration"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-004",
    categorySlug: "pharmacology-parenteral",
    stem: "A client with persistent asthma is prescribed an inhaled corticosteroid (fluticasone propionate) via a metered-dose inhaler (MDI) with a valved holding chamber (spacer). Which step in the client's return demonstration indicates that the nurse's teaching was effective?",
    choices: [
      {
        id: "a",
        text: "The client exhales completely, actuates the inhaler once, inhales slowly and deeply over 3 to 5 seconds, holds breath for 10 seconds, and rinses the mouth with water and spits it out",
      },
      {
        id: "b",
        text: "The client takes rapid, shallow breaths through the nose immediately after actuating the canister",
      },
      {
        id: "c",
        text: "The client swallows the water used to rinse the mouth to ensure no steroid dose is wasted",
      },
      {
        id: "d",
        text: "The client actuates 4 puffs rapidly into the spacer before taking a single breath",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Correct MDI technique with a spacer requires: shaking the inhaler, exhaling completely away from the mouthpiece, placing the mouthpiece in the mouth with a tight seal, actuating ONE puff into the spacer, inhaling slowly and deeply over 3–5 seconds, and holding the breath for up to 10 seconds to allow drug deposition in lower airways. When using inhaled corticosteroids, the patient must rinse the mouth thoroughly with water and SPIT IT OUT to prevent local immunosuppression leading to oropharyngeal candidiasis (thrush) and dysphonia. Multiple puffs must be taken one at a time with a 1-minute interval.",
    strategy: "Inhaled corticosteroid technique: Slow deep inhalation -> 10-second breath-hold -> RINSE AND SPIT to prevent oral thrush.",
    difficulty: "easy",
    tags: ["pharmacology", "mdi", "inhaler", "corticosteroids", "asthma"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-005",
    categorySlug: "pharmacology-parenteral",
    stem: "A nurse is administering low-molecular-weight heparin (enoxaparin 40 mg) subcutaneously to a postoperative client for deep vein thrombosis prophylaxis. Which technique should the nurse employ?",
    choices: [
      {
        id: "a",
        text: "Inject into the anterolateral or posterolateral abdominal wall at a 90-degree angle, do not expel the pre-filled air bubble, and do not rub the site after injection",
      },
      {
        id: "b",
        text: "Expel the air bubble completely from the pre-filled syringe before injecting to prevent an air embolism",
      },
      {
        id: "c",
        text: "Aspirate for blood return before injecting and massage the site vigorously for 2 minutes afterwards",
      },
      {
        id: "d",
        text: "Inject within 1 cm of the umbilicus and use a 45-degree angle in an obese client",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Enoxaparin injection guidelines specify: (1) inject subcutaneously into the 'love handles' (anterolateral or posterolateral abdominal wall at least 2 inches away from the umbilicus); (2) DO NOT expel the air bubble from the pre-filled manufacturer syringe, as the bubble seals the medication path upon needle withdrawal to prevent tracking into dermis and bruising; (3) pinch a skinfold and insert at 90 degrees; (4) DO NOT aspirate (causes tissue trauma); and (5) DO NOT rub or massage the injection site (causes extensive subcutaneous haematoma and bruising).",
    strategy: "Enoxaparin technique: Abdomen (love handles) -> 90 degrees -> DO NOT expel air bubble -> DO NOT aspirate -> DO NOT rub.",
    difficulty: "easy",
    tags: ["pharmacology", "enoxaparin", "subcutaneous", "anticoagulants", "dvt-prophylaxis"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-006",
    categorySlug: "pediatrics",
    stem: "A 4-year-old child weighing 33 lbs is prescribed oral cefuroxime axetil suspension for acute otitis media. The order reads: 30 mg/kg/day divided into 2 equal doses every 12 hours. The pharmacy dispenses cefuroxime suspension labeled 125 mg/5 mL. How many milliliters (mL) should the nurse administer per dose?",
    choices: [
      {
        id: "a",
        text: "9.0 mL",
      },
      {
        id: "b",
        text: "18.0 mL",
      },
      {
        id: "c",
        text: "4.5 mL",
      },
      {
        id: "d",
        text: "12.0 mL",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Step 1: Convert weight from pounds to kilograms: 33 lbs / 2.2 = 15 kg. Step 2: Calculate total daily dose: 15 kg * 30 mg/kg/day = 450 mg/day. Step 3: Calculate dose per administration (divided into 2 equal doses): 450 mg / 2 = 225 mg per dose. Step 4: Calculate volume using available concentration (125 mg / 5 mL = 25 mg/mL): Volume = 225 mg / 25 mg/mL = 9.0 mL per dose. (Or: [225 mg / 125 mg] * 5 mL = 9.0 mL).",
    strategy: "Paediatric dosing: Convert lbs to kg -> multiply by mg/kg/day -> divide by number of daily doses -> calculate volume from concentration.",
    difficulty: "medium",
    tags: ["pharmacology", "drug-calculations", "paediatric-dosing", "antibiotics", "math"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-007",
    categorySlug: "pharmacology-parenteral",
    stem: "A physician prescribes 1,000 mL of 0.9% Normal Saline to infuse intravenously over 8 hours for a dehydrated client in a rural clinic without electronic infusion pumps. The nurse selects a standard gravity administration set with a drop factor of 15 drops/mL (gtt/mL). At what rate in drops per minute (gtt/min) should the nurse regulate the gravity drip?",
    choices: [
      {
        id: "a",
        text: "31 gtt/min",
      },
      {
        id: "b",
        text: "42 gtt/min",
      },
      {
        id: "c",
        text: "21 gtt/min",
      },
      {
        id: "d",
        text: "125 gtt/min",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Formula for gravity IV drip rate: Drip rate (gtt/min) = (Total volume in mL * Drop factor in gtt/mL) / Time in minutes. Volume = 1,000 mL; Drop factor = 15 gtt/mL; Time = 8 hours * 60 minutes = 480 minutes. Calculation: (1,000 * 15) / 480 = 15,000 / 480 = 31.25 drops/min. Rounding to the nearest whole drop yields 31 gtt/min. (125 mL/hr is the hourly volumetric rate, not the gravity drop rate).",
    strategy: "IV drop rate formula: (Volume in mL * Drop factor) / Time in minutes = (1,000 * 15) / 480 = 31 gtt/min.",
    difficulty: "easy",
    tags: ["pharmacology", "drug-calculations", "iv-drip-rate", "gravity-set", "math"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-008",
    categorySlug: "pharmacology-parenteral",
    stem: "The nurse is preparing to administer intravenous ampicillin 750 mg to a hospitalized client. The medication vial contains 1 g of ampicillin powder. The manufacturer instructions state: 'Reconstitute with 3.5 mL of sterile water for injection to yield a final concentration of 250 mg/mL.' How many milliliters (mL) of reconstituted solution should the nurse draw up to deliver the prescribed 750 mg dose?",
    choices: [
      {
        id: "a",
        text: "3.0 mL",
      },
      {
        id: "b",
        text: "2.6 mL",
      },
      {
        id: "c",
        text: "3.5 mL",
      },
      {
        id: "d",
        text: "0.75 mL",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "When calculating dosage from reconstituted powders, always use the final concentration specified by the manufacturer rather than the diluent volume added (powder displacement increases the total liquid volume). Prescribed dose = 750 mg. Resulting concentration = 250 mg/mL. Volume = Prescribed dose / Available concentration = 750 mg / 250 mg/mL = 3.0 mL. The nurse draws up exactly 3.0 mL.",
    strategy: "Reconstitution calculations: Divide prescribed dose by the stated final concentration (not diluent volume): 750 mg / 250 mg/mL = 3.0 mL.",
    difficulty: "easy",
    tags: ["pharmacology", "drug-calculations", "reconstitution", "antibiotics", "math"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-009",
    categorySlug: "fluid-electrolyte",
    stem: "A hospitalized client has a severe serum potassium level of 2.7 mEq/L with flattened T waves and prominent U waves on ECG. The physician orders 40 mEq of potassium chloride IV to be administered. Which nursing practice is vital to prevent fatal iatrogenic cardiac arrest?",
    choices: [
      {
        id: "a",
        text: "Never administer potassium chloride as an IV push or rapid bolus; dilute in IV fluids, infuse via an electronic infusion pump at a rate not exceeding 10 mEq/h on a peripheral line, and monitor cardiac rhythm continuously",
      },
      {
        id: "b",
        text: "Draw up the 40 mEq directly into a 10 mL syringe and inject over 2 minutes to rapidly restore normal ECG waves",
      },
      {
        id: "c",
        text: "Administer the potassium chloride intramuscularly deep into the dorsogluteal muscle",
      },
      {
        id: "d",
        text: "Add potassium chloride to a hanging bag of blood products to co-infuse rapidly",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Potassium chloride is a high-alert medication that is LETHAL if given by direct intravenous push or rapid bolus (it halts myocardial electrical conduction in diastole, causing instant asystole). Safety standards mandate: (1) NEVER give IV push; (2) always dilute in compatible IV solutions; (3) maximum peripheral infusion rate is 10 mEq/hour (up to 20 mEq/hour via central venous catheter with continuous ECG monitoring); (4) always use an electronic infusion pump; (5) maximum peripheral concentration is 40 mEq/L; and (6) verify adequate renal function and urine output before administration.",
    strategy: "IV Potassium safety: NEVER give IV push. Max peripheral rate is 10 mEq/hr on an electronic infusion pump with cardiac monitoring.",
    difficulty: "easy",
    tags: ["pharmacology", "potassium", "high-alert-medications", "electrolyte-safety", "cardiac-arrest"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-010",
    categorySlug: "fluid-electrolyte",
    stem: "A client who has been receiving Total Parenteral Nutrition (TPN) via a central venous catheter for 10 days has the infusion abruptly interrupted because the infusion pump malfunctions and shuts off. A replacement pump will take 45 minutes to arrive from central supply. What solution should the nurse hang immediately via gravity to prevent a life-threatening complication?",
    choices: [
      {
        id: "a",
        text: "10% Dextrose in Water (D10W) at the same infusion rate",
      },
      {
        id: "b",
        text: "0.9% Normal Saline at a keep-vein-open (TKO) rate of 10 mL/h",
      },
      {
        id: "c",
        text: "Lactated Ringer's solution bolus of 500 mL",
      },
      {
        id: "d",
        text: "Sterile water for injection without additives",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "TPN solutions contain high concentrations of dextrose (typically 20% to 50%), which stimulates continuous high endogenous insulin secretion by pancreatic beta cells. If TPN is abruptly stopped, circulating hyperinsulinaemia persists in the absence of exogenous glucose, precipitating severe rebound hypoglycaemia (diaphoresis, confusion, seizures, coma). If a TPN bag runs out or the pump fails, the nurse must immediately infuse 10% Dextrose in Water (D10W) centrally (or 5% Dextrose peripherally) at the same infusion rate until the new TPN solution is ready.",
    strategy: "TPN interruption: Abrupt cessation causes severe rebound hypoglycaemia. Always hang 10% Dextrose in Water (D10W) immediately.",
    difficulty: "medium",
    tags: ["pharmacology", "tpn", "hypoglycaemia", "central-line", "nutrition"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-011",
    categorySlug: "med-surg",
    stem: "Ten minutes after the start of a packed red blood cell transfusion, the client suddenly complains of severe lower back pain, chills, shortness of breath, and chest tightness. The temperature rises from 37.0 °C to 38.9 °C, blood pressure drops from 120/78 to 86/48 mmHg, and the Foley catheter drains reddish-brown urine. What is the nurse's immediate priority action?",
    choices: [
      {
        id: "a",
        text: "Stop the transfusion immediately, disconnect the blood tubing from the IV cannula, infuse normal saline using entirely NEW IV tubing to maintain vein patency, and alert the provider and blood bank",
      },
      {
        id: "b",
        text: "Slow the infusion rate to 10 mL/h and administer oral paracetamol for the fever",
      },
      {
        id: "c",
        text: "Flush the blood tubing vigorously with 50 mL of sterile water to clear any micro-clots",
      },
      {
        id: "d",
        text: "Reassure the client that back pain is a common harmless reaction and continue the transfusion",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The client is experiencing an Acute Haemolytic Transfusion Reaction (AHTR), a medical emergency typically caused by ABO/Rh incompatibility. Host antibodies attack donor red cells, causing rapid intravascular haemolysis, hemoglobinuria (reddish urine), flank/back pain, hypotension, DIC, and acute renal failure. Immediate management: (1) STOP the transfusion immediately; (2) disconnect the blood tubing at the cannula hub (do NOT flush remaining blood in the tubing into the patient); (3) connect a new sterile IV line with 0.9% normal saline to maintain vascular access; (4) notify physician and blood bank; (5) send the remaining blood unit, tubing, and fresh blood/urine samples to the lab for workup.",
    strategy: "Transfusion reaction: STOP transfusion -> Disconnect tubing at catheter hub -> Run normal saline with NEW tubing -> Notify provider and blood bank.",
    difficulty: "easy",
    tags: ["pharmacology", "blood-transfusion", "transfusion-reaction", "acute-haemolytic", "patient-safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-012",
    categorySlug: "med-surg",
    stem: "An 82-year-old client with chronic renal failure and heart failure is receiving their second unit of packed red blood cells. Midway through the transfusion, the client develops tachypnoea (32 bpm), oxygen saturation drops from 97% to 86%, blood pressure rises from 130/80 to 178/96 mmHg, jugular venous distension is visible, and bibasilar crackles are auscultated. Which condition is the client experiencing, and what is the primary intervention?",
    choices: [
      {
        id: "a",
        text: "Transfusion-Associated Circulatory Overload (TACO); stop the transfusion, place the client upright with feet dangling, administer oxygen, and give intravenous furosemide as ordered",
      },
      {
        id: "b",
        text: "Transfusion-Related Acute Lung Injury (TRALI); administer a 1-litre bolus of normal saline and place the client supine",
      },
      {
        id: "c",
        text: "Febrile Non-Haemolytic Transfusion Reaction; administer oral diphenhydramine and restart the infusion",
      },
      {
        id: "d",
        text: "Anaphylactic transfusion shock; administer subcutaneous adrenaline and resume the blood at full speed",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Transfusion-Associated Circulatory Overload (TACO) occurs when blood products are infused faster than the circulatory system can accommodate, especially in elderly, cardiac, or renal patients. Manifestations include acute pulmonary edema: tachypnoea, hypoxaemia, hypertension, elevated JVD, and bilateral crackles. In contrast, TRALI features acute non-cardiogenic pulmonary edema with hypotension and fever. Interventions for TACO: stop the transfusion, place the patient upright with legs dependent (reduces venous return/preload), apply high-flow oxygen, and administer intravenous loop diuretics (furosemide).",
    strategy: "TACO vs TRALI: TACO features hypertension + elevated JVD + bibasilar crackles (hypervolaemia). Treat by sitting upright, oxygen, and IV furosemide.",
    difficulty: "medium",
    tags: ["pharmacology", "blood-transfusion", "taco", "circulatory-overload", "furosemide"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-013",
    categorySlug: "med-surg",
    stem: "A client with diabetic ketoacidosis (DKA) is receiving a continuous intravenous regular insulin infusion at 0.1 units/kg/h. The latest hourly capillary blood glucose level drops to 240 mg/dL (13.3 mmol/L). What is the mandatory next step in intravenous fluid and insulin management?",
    choices: [
      {
        id: "a",
        text: "Add 5% Dextrose to the intravenous fluids (such as D5 0.45% NS) while continuing the insulin infusion to clear ketones and avoid rapid cerebral edema and hypoglycaemia",
      },
      {
        id: "b",
        text: "Stop the insulin infusion immediately and give oral orange juice",
      },
      {
        id: "c",
        text: "Double the insulin infusion rate to rapidly drive glucose below 100 mg/dL",
      },
      {
        id: "d",
        text: "Change IV fluids to sterile water and administer 10 units of subcutaneous glargine",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "In DKA management, when serum blood glucose reaches approximately 200–250 mg/dL (11.1–13.9 mmol/L), 5% to 10% dextrose MUST be added to intravenous fluids (e.g., D5 0.45% NaCl). The insulin infusion rate is continued or adjusted to maintain glucose between 150 and 200 mg/dL until acidosis and ketosis resolve (anion gap normalizes, venous pH > 7.30, serum bicarbonate >= 18 mEq/L). Stopping insulin prematurely causes rebound ketoacidosis, whereas failing to add dextrose causes precipitously dropping plasma osmolality and lethal cerebral edema.",
    strategy: "DKA insulin titration: When blood glucose reaches ~250 mg/dL, add 5% Dextrose to IV fluids and CONTINUE insulin to clear ketoacidosis safely.",
    difficulty: "medium",
    tags: ["pharmacology", "dka", "insulin-infusion", "high-alert-medications", "fluid-management"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-014",
    categorySlug: "med-surg",
    stem: "A client receiving intravenous unfractionated heparin for a pulmonary embolism has a baseline platelet count of 280,000/mm3. On day 6 of therapy, the platelet count drops to 110,000/mm3 (a > 60% decline), and the client reports new swelling and tenderness in the right calf. What clinical syndrome should the nurse suspect, and what is the immediate action?",
    choices: [
      {
        id: "a",
        text: "Heparin-Induced Thrombocytopenia (HIT); immediately discontinue all heparin products, alert the physician, and anticipate starting a non-heparin anticoagulant such as argatroban or bivalirudin",
      },
      {
        id: "b",
        text: "Idiopathic immune thrombocytopenia; increase the heparin infusion rate to overcome antibody consumption",
      },
      {
        id: "c",
        text: "Benign dilution; transfuse 2 units of platelets and continue current heparin dosing",
      },
      {
        id: "d",
        text: "Warfarin-induced necrosis; switch immediately to oral aspirin",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Heparin-Induced Thrombocytopenia (HIT) is an immune-mediated drug reaction caused by antibodies against platelet factor 4 (PF4)-heparin complexes. It typically develops 5 to 10 days after heparin initiation, marked by a >= 50% drop in platelet count. Rather than causing bleeding, HIT is a pro-thrombotic emergency: antibodies cause widespread platelet activation leading to venous and arterial thrombosis (DVT, PE, stroke, limb gangrene). Immediate action: STOP all heparin products (including heparin line flushes), record heparin allergy, avoid platelet transfusions (fuels thrombosis), and initiate a non-heparin direct thrombin inhibitor (e.g., argatroban, bivalirudin) or fondaparinux.",
    strategy: "Heparin-Induced Thrombocytopenia (HIT): Platelets drop > 50% after 5-10 days + thrombosis. STOP ALL HEPARIN immediately; switch to argatroban.",
    difficulty: "hard",
    tags: ["pharmacology", "heparin", "hit", "thrombocytopenia", "anticoagulants"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-015",
    categorySlug: "pharmacology-parenteral",
    stem: "A postoperative client receiving hydromorphone via a patient-controlled analgesia (PCA) pump is found somnolent and difficult to arouse. The respiratory rate is 6 breaths per minute, oxygen saturation is 84% on room air, and pupils are constricted (pinpoint). The nurse prepares to administer naloxone. How should the nurse administer this opioid antagonist?",
    choices: [
      {
        id: "a",
        text: "Administer small, titrated intravenous doses (e.g., 0.04 to 0.1 mg every 2 to 3 minutes) diluted in normal saline, aiming to reverse respiratory depression without triggering severe acute withdrawal pain and sympathetic crisis",
      },
      {
        id: "b",
        text: "Administer a rapid 2 mg IV push bolus directly from the vial",
      },
      {
        id: "c",
        text: "Administer naloxone as a 500 mL subcutaneous continuous infusion over 24 hours",
      },
      {
        id: "d",
        text: "Give naloxone mixed with additional morphine to balance receptor occupancy",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "In postoperative clients who are opioid-dependent or require analgesia, administering high-dose rapid boluses of naloxone (e.g., 2 mg IV push) causes immediate, complete reversal of analgesia, precipitating severe pain, agitation, sympathetic surge (tachycardia, hypertensive crisis, pulmonary edema), and cardiac arrest. The recommended practice is to dilute 0.4 mg of naloxone in 9 mL of normal saline (giving 0.04 mg/mL) and administer small incremental doses (0.04 to 0.1 mg) every 2–3 minutes until ventilation improves (respiratory rate >= 10–12 bpm) while preserving analgesia. Because naloxone has a shorter half-life (30–90 min) than most opioids, monitoring for resedation is critical.",
    strategy: "Naloxone titration in post-op: Titrate small incremental doses (0.04-0.1 mg) to restore adequate breathing without precipitating acute pain crisis.",
    difficulty: "medium",
    tags: ["pharmacology", "naloxone", "opioid-reversal", "pca", "respiratory-depression"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-016",
    categorySlug: "safety-infection-control",
    stem: "In the Intensive Care Unit, a newly transferred physician verbally requests the nurse to administer 10 mg of intravenous vecuronium to a mechanically ventilated client who is restless. What critical safety prerequisite must the critical care nurse verify before administering any neuromuscular blocking agent (paralytic)?",
    choices: [
      {
        id: "a",
        text: "Verify that the client is receiving adequate concurrent continuous sedation and analgesia, and that invasive mechanical ventilation with an advanced airway is fully secure",
      },
      {
        id: "b",
        text: "Ensure the client has consumed a full meal within the past hour to maintain muscle glycogen",
      },
      {
        id: "c",
        text: "Check that the client is completely unmonitored to prevent electrical interference",
      },
      {
        id: "d",
        text: "Discontinue all sedative infusions so the client can communicate via hand gestures",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Neuromuscular blocking agents (paralytics such as vecuronium, rocuronium, cisatracurium) induce complete skeletal muscle flaccidity, including the diaphragm and intercostal muscles. Crucially, paralytics possess ZERO analgesic, sedative, or anxiolytic properties. Administering a paralytic to an awake, inadequately sedated patient causes conscious paralysis, horror, and profound psychological trauma. The nurse must verify that: (1) an advanced airway is secured on mechanical ventilation, (2) adequate continuous IV sedation and analgesia are actively infusing, and (3) emergency bag-valve-mask equipment and suction are immediately operational.",
    strategy: "Neuromuscular blocker safety: Paralytics do NOT sedate or relieve pain. ALWAYS ensure adequate sedation/analgesia and secure mechanical ventilation.",
    difficulty: "easy",
    tags: ["pharmacology", "neuromuscular-blockers", "paralytics", "sedation", "critical-care-safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-017",
    categorySlug: "pharmacology-parenteral",
    stem: "A client with severe Gram-negative osteomyelitis is receiving intravenous gentamicin every 8 hours. The nurse is scheduled to draw a serum trough level. When should the nurse schedule the blood collection to obtain an accurate trough level?",
    choices: [
      {
        id: "a",
        text: "Within 30 minutes immediately prior to administering the next scheduled dose",
      },
      {
        id: "b",
        text: "Exactly 30 minutes after completing the intravenous infusion",
      },
      {
        id: "c",
        text: "Midway through the 8-hour dosing interval (at 4 hours)",
      },
      {
        id: "d",
        text: "At random anytime during the hospital shift",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Therapeutic drug monitoring for aminoglycosides (gentamicin, tobramycin, amikacin) and glycopeptides (vancomycin) requires drawing peak and trough levels to maximize bactericidal efficacy and prevent toxicity. The TROUGH level reflects the lowest drug concentration in the body and is drawn within 30 minutes immediately prior to the next scheduled dose. An elevated trough level indicates impaired drug clearance and is the most sensitive predictor of aminoglycoside-induced nephrotoxicity (acute tubular necrosis) and irreversible ototoxicity (vestibular and cochlear damage). The PEAK level is drawn 30 minutes after completion of an IV infusion.",
    strategy: "Trough drug levels: Always draw within 30 minutes IMMEDIATELY BEFORE the next dose. High troughs predict nephrotoxicity and ototoxicity.",
    difficulty: "easy",
    tags: ["pharmacology", "aminoglycosides", "gentamicin", "trough-level", "therapeutic-drug-monitoring"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-018",
    categorySlug: "med-surg",
    stem: "A 74-year-old client with chronic heart failure has been taking digoxin 0.25 mg daily and furosemide 40 mg daily. The client reports new-onset anorexia, nausea, fatigue, and seeing 'yellow-green halos' around light fixtures. The apical pulse is 48 bpm and irregular. Serum potassium is 3.1 mEq/L. What is the nurse's priority interpretation of these findings?",
    choices: [
      {
        id: "a",
        text: "Digoxin toxicity precipitated by loop diuretic-induced hypokalaemia; hold digoxin, notify the provider, monitor ECG for dysrhythmias, and anticipate potassium replacement and possible Digoxin Immune Fab",
      },
      {
        id: "b",
        text: "Normal age-related cataract progression requiring an optometrist referral",
      },
      {
        id: "c",
        text: "Gastrointestinal viral gastroenteritis; encourage oral electrolyte rehydration solutions",
      },
      {
        id: "d",
        text: "Acute hyperkalaemia; administer sodium polystyrene sulfonate immediately",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Digoxin has a narrow therapeutic index (0.5 to 2.0 ng/mL, with optimal heart failure levels 0.5–0.9 ng/mL). Potassium competes with digoxin for binding at the myocardial Na+/K+ ATPase pump. When serum potassium is low (hypokalaemia from loop diuretics like furosemide), more digoxin binds to the pump, dramatically potentiating toxicity even at normal serum digoxin levels. Classic signs of digoxin toxicity include gastrointestinal upset (anorexia, nausea, vomiting), neurological/visual disturbances (yellow-green halos, blurred vision), and cardiac dysrhythmias (bradycardia, heart blocks, ventricular ectopy). Immediate action: hold digoxin, check digoxin/electrolyte levels, replace potassium, and prepare antidote Digoxin Immune Fab (Digibind) if life-threatening dysrhythmias occur.",
    strategy: "Digoxin toxicity: Hypokalaemia potentiates toxicity. Look for GI upset + yellow halos + bradycardia. Hold drug and check levels.",
    difficulty: "medium",
    tags: ["pharmacology", "digoxin", "furosemide", "hypokalaemia", "toxicity"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-019",
    categorySlug: "maternal-newborn",
    stem: "A 28-year-old woman with chronic essential hypertension takes lisinopril 20 mg daily. During a clinic visit, a urine pregnancy test confirms she is 6 weeks pregnant. What essential guidance must the nurse provide regarding her antihypertensive medication?",
    choices: [
      {
        id: "a",
        text: "Lisinopril (an ACE inhibitor) is teratogenic throughout pregnancy and must be discontinued immediately and switched to a safe alternative such as labetalol, nifedipine, or methyldopa",
      },
      {
        id: "b",
        text: "Lisinopril is safe in the first trimester and should only be stopped after 28 weeks of gestation",
      },
      {
        id: "c",
        text: "Double the lisinopril dose to prevent pre-eclampsia during pregnancy",
      },
      {
        id: "d",
        text: "Switch to an angiotensin receptor blocker (ARB) like losartan, which carries no fetal risk",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Angiotensin-Converting Enzyme (ACE) inhibitors (e.g., lisinopril, enalapril) and Angiotensin Receptor Blockers (ARBs, e.g., losartan) are strictly contraindicated in all trimesters of pregnancy. They cause severe fetopathy, including renal dysgenesis, fetal oligohydramnios (leading to pulmonary hypoplasia and limb contractures), skull hypoplasia, intrauterine growth restriction, and fetal death. The nurse must notify the provider immediately to discontinue the ACE inhibitor and transition to safe, first-line antihypertensive agents approved in pregnancy: labetalol, extended-release nifedipine, or methyldopa.",
    strategy: "Pregnancy contraindications: ACE inhibitors and ARBs are teratogenic (cause fetal renal failure and oligohydramnios). Switch to labetalol, nifedipine, or methyldopa.",
    difficulty: "easy",
    tags: ["pharmacology", "ace-inhibitors", "pregnancy", "teratogenicity", "hypertension"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-020",
    categorySlug: "gerontology-community",
    stem: "An 81-year-old client is admitted to the medical ward with acute confusion, urinary retention, dry mouth, blurred vision, and orthostatic dizziness resulting in a fall. The family reports the client recently started taking over-the-counter diphenhydramine for insomnia and amitriptyline for diabetic neuropathic pain. Which pharmacological concept and guideline explains this client's presentation?",
    choices: [
      {
        id: "a",
        text: "Cumulative anticholinergic toxicity in an older adult from medications highlighted on the Beers Criteria for Potentially Inappropriate Medication Use in Older Adults",
      },
      {
        id: "b",
        text: "Typical progression of Alzheimer's disease unrelated to pharmacological therapy",
      },
      {
        id: "c",
        text: "Acute cholinergic toxidrome resulting from organophosphate pesticide exposure",
      },
      {
        id: "d",
        text: "Serotonin syndrome requiring immediate administration of high-dose bromocriptine",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The Beers Criteria (American Geriatrics Society) identifies medications that pose high risks of adverse drug events in older adults. First-generation antihistamines (diphenhydramine) and tricyclic antidepressants (amitriptyline) possess potent anticholinergic properties. In elderly patients, reduced cholinergic receptor density and slower drug clearance lead to cumulative anticholinergic burden: central effects (acute delirium, confusion, memory impairment, sedation) and peripheral effects (urinary retention, dry mouth, blurred vision, constipation, tachycardia, orthostatic hypotension, and falls). Management requires deprescribing inappropriate anticholinergics and adopting non-pharmacological sleep hygiene.",
    strategy: "Geriatric pharmacology (Beers Criteria): Anticholinergics (diphenhydramine, amitriptyline) cause acute confusion, urinary retention, and falls in older adults.",
    difficulty: "medium",
    tags: ["pharmacology", "beers-criteria", "geriatrics", "anticholinergic-burden", "fall-prevention"],
    isFree: true,
  },
];
