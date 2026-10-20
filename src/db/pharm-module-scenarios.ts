import type { AuthoredQuestion } from "./authored-bank";

export const PHARM_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-PHARM-001",
    categorySlug: "pharmacology-parenteral",
    stem: "A patient with severe acute pain is transitioned from intravenous morphine (4 mg IV every 3 hours) to oral morphine tablets. The nurse notes that the physician prescribes oral morphine at 15 mg every 4 hours. The patient asks why the oral dose is nearly four times larger than the IV dose. What pharmacological concept explains this dosage difference?",
    choices: [
      {
        id: "a",
        text: "Oral morphine is cleared by renal tubular secretion before it can reach the systemic circulation",
      },
      {
        id: "b",
        text: "Intravenous morphine is largely inactivated by plasma esterases before it reaches opioid receptors",
      },
      {
        id: "c",
        text: "Extensive hepatic first-pass metabolism lowers the systemic bioavailability of oral morphine",
      },
      {
        id: "d",
        text: "Binding excipients in the tablet neutralise a large part of the active drug before absorption",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "First-pass metabolism occurs when an orally administered drug is absorbed from the gastrointestinal tract into the portal circulation and undergoes significant enzymatic metabolism in the liver before reaching systemic circulation. Morphine has a low oral bioavailability (approximately 20% to 40%) due to extensive first-pass hepatic glucuronidation. Consequently, the oral dose must be substantially higher (roughly 3 times the parenteral dose) to achieve equivalent therapeutic blood levels and analgesia. IV administration bypasses the portal circulation, providing 100% bioavailability. Why the other options fail: option a moves the loss to the kidney, but morphine's problem is what the liver does to it before it reaches the systemic circulation. Option b invents plasma esterase inactivation, which is the route for remifentanil and not for morphine. Option d blames excipients for neutralising the drug, when the difference is metabolic and predictable.",
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
        text: "Withhold the next dose and check the pulse every 4 hours, telling the prescriber only if it falls below 40",
      },
      {
        id: "b",
        text: "Assess pulse, blood pressure and consciousness, notify the prescriber, monitor for bradycardia, and file an incident report",
      },
      {
        id: "c",
        text: "Give activated charcoal if the client is alert, then record the dose as given on the medication chart",
      },
      {
        id: "d",
        text: "Give atropine 1 mg intravenously now, before assessing the pulse, to pre-empt any bradycardia",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "When a medication error occurs, patient safety is the paramount priority. The nurse must immediately: (1) assess the patient's physiological status (vital signs, heart rate, rhythm, blood pressure), (2) alert the prescribing physician and charge nurse with objective assessment data, (3) implement prescribed monitoring or corrective interventions, and (4) complete an internal incident/variance report. Incident reports are quality improvement tools and must never be referenced in the patient's legal medical record or used punitively in a just culture. Why the other options fail: option a delays both assessment and disclosure, so the client is unwatched during the period of greatest risk. Option c records the dose given as though it were the dose prescribed, which is falsification. Option d gives an antidote before assessing the client and without an order.",
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
        text: "Ask for immediate-release or liquid alternatives, flush with 15 to 30 mL of water before and between drugs, and give each separately",
      },
      {
        id: "b",
        text: "Crush the extended-release metoprolol into a fine powder and dissolve it in warm water before giving it down the tube",
      },
      {
        id: "c",
        text: "Open the omeprazole capsule, crush the enteric granules finely, and mix them with the paracetamol elixir",
      },
      {
        id: "d",
        text: "Add all three medicines to the enteral feed bag and let them infuse together over the next 24 hours",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Enteral tube medication safety principles require: (1) NEVER crushing enteric-coated (EC), delayed-release, or extended-release (ER/XR/XL/SR) medications, as destroying their release matrix causes rapid absorption, potential toxicity ('dose dumping'), and tube occlusion; (2) consulting the pharmacy for liquid, dispersible, or immediate-release substitutes; (3) administering medications separately rather than mixing them together; (4) flushing the tube with 15–30 mL of water before the first drug, 5–10 mL between drugs, and 15–30 mL after the last drug; and (5) never mixing medications directly into enteral feeding formula. Why the other options fail: option b destroys an extended-release matrix and releases the whole dose at once, which can cause toxicity and occlude the tube. Option c crushes enteric granules that exist to protect the drug from gastric acid, and mixes drugs that should be given separately. Option d puts medicines into a feed running for 24 hours, so the dose is neither complete nor timed.",
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
        text: "Take two rapid shallow breaths through the nose immediately after actuating the canister into the spacer",
      },
      {
        id: "b",
        text: "Swallow the water used for mouth rinsing, so that none of the corticosteroid dose is wasted",
      },
      {
        id: "c",
        text: "Actuate four puffs into the spacer in quick succession, then take one deep breath from it",
      },
      {
        id: "d",
        text: "Exhale fully, actuate once, inhale slowly over 3 to 5 seconds, hold for 10 seconds, then rinse the mouth and spit",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Correct MDI technique with a spacer requires: shaking the inhaler, exhaling completely away from the mouthpiece, placing the mouthpiece in the mouth with a tight seal, actuating ONE puff into the spacer, inhaling slowly and deeply over 3–5 seconds, and holding the breath for up to 10 seconds to allow drug deposition in lower airways. When using inhaled corticosteroids, the patient must rinse the mouth thoroughly with water and SPIT IT OUT to prevent local immunosuppression leading to oropharyngeal candidiasis (thrush) and dysphonia. Multiple puffs must be taken one at a time with a 1-minute interval. Why the other options fail: option a takes rapid shallow breaths through the nose, which deposits the drug in the oropharynx rather than the airways. Option b swallows the rinse water, which is exactly how local steroid exposure causes thrush. Option c actuates four puffs before inhaling, so most of the dose settles on the chamber walls.",
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
        text: "Expel the air bubble from the prefilled syringe before injecting, to avoid an air embolism",
      },
      {
        id: "b",
        text: "Inject into the anterolateral abdominal wall at 90 degrees, keep the air bubble, and do not rub the site",
      },
      {
        id: "c",
        text: "Aspirate for blood before injecting, then massage the site for 2 minutes to speed absorption",
      },
      {
        id: "d",
        text: "Inject within 1 cm of the umbilicus at 45 degrees, which is the preferred site in an obese client",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Enoxaparin injection guidelines specify: (1) inject subcutaneously into the 'love handles' (anterolateral or posterolateral abdominal wall at least 2 inches away from the umbilicus); (2) DO NOT expel the air bubble from the pre-filled manufacturer syringe, as the bubble seals the medication path upon needle withdrawal to prevent tracking into dermis and bruising; (3) pinch a skinfold and insert at 90 degrees; (4) DO NOT aspirate (causes tissue trauma); and (5) DO NOT rub or massage the injection site (causes extensive subcutaneous haematoma and bruising). Why the other options fail: option a expels the bubble that seals the track and stops the drug leaking back into the dermis. Option c aspirates, which traumatises tissue, and massages, which causes bruising and haematoma. Option d injects too close to the umbilicus and at an angle that does not reach subcutaneous fat reliably.",
    strategy: "Enoxaparin technique: Abdomen (love handles) -> 90 degrees -> DO NOT expel air bubble -> DO NOT aspirate -> DO NOT rub.",
    difficulty: "easy",
    tags: ["pharmacology", "enoxaparin", "subcutaneous", "anticoagulants", "dvt-prophylaxis"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-006",
    categorySlug: "pediatrics",
    stem: "A man with gout and a high urate level is starting allopurinol, and he is also taking azathioprine for another condition. What must the nurse check before he starts?",
    choices: [
      {
        id: "a",
        text: "Nothing, as long as the dose is increased quickly to bring the urate down within a week",
      },
      {
        id: "b",
        text: "That the azathioprine dose is reviewed, since allopurinol raises its level dangerously",
      },
      {
        id: "c",
        text: "That he stops allopurinol as soon as the joint pain starts, because that shows it is working",
      },
      {
        id: "d",
        text: "That the allopurinol is given only during an attack, which is when the urate is highest",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — \"That the azathioprine dose is reviewed, since allopurinol raises its level dangerously\". Allopurinol blocks xanthine oxidase, and xanthine oxidase is one of the enzymes that clears azathioprine's active metabolites, so the two together can drive the marrow into profound suppression — the azathioprine has to be reduced or stopped, and the prescriber must decide before the first dose. The same review applies to mercaptopurine. Allopurinol itself is started at a low dose and built up slowly, is not started or stopped around an acute attack without advice, and any rash is a reason to stop and report rather than to carry on.\n\nWhy the other options fail:\n• A — Rapid escalation is not safe; the dose is titrated against urate over weeks.\n• C — Joint pain does not mean it is working; continuing through a new rash could allow a severe hypersensitivity reaction.\n• D — Treatment is continuous; starting and stopping with attacks causes urate swings and more attacks.\n\nReference: BNF — allopurinol interactions; Ghana STG — gout\n",
    strategy: "Allopurinol plus azathioprine is a marrow-suppression pair. Check the azathioprine first, and build allopurinol up slowly.",
    difficulty: "medium",
    tags: ["pharmacology", "drug-calculations", "paediatric-dosing", "antibiotics", "math"],
    isFree: true,
  },
{
    authoredId: "NG-MOD-PHARM-007",
    categorySlug: "pharmacology-parenteral",
    stem: "A client is to receive 100 mL of fluid over 1 hour through a microdrip set that delivers 60 drops per millilitre. At how many drops per minute should the nurse run the infusion?",
    choices: [
      {
        id: "a",
        text: "60 drops per minute",
      },
      {
        id: "b",
        text: "50 drops per minute",
      },
      {
        id: "c",
        text: "100 drops per minute",
      },
      {
        id: "d",
        text: "16 drops per minute",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "CORRECT — 100 drops per minute. With a microdrip set the drop factor is 60 gtt/mL, so 100 mL over 60 minutes = 1.67 mL per minute, and 1.67 x 60 = 100 drops per minute. There is a useful shortcut with microdrip tubing: drops per minute equals millilitres per hour, because the drop factor and the minutes in an hour are both 60. Why the other options fail: option a applies the shortcut to 60 mL rather than to the 100 mL prescribed. Option b would deliver only 50 mL in the hour, half the prescription. Option d is what a 10 gtt/mL paediatric set would give for 100 mL over an hour, so it belongs to a different drop factor. Always state the drop factor before calculating, because a microdrip and a macrodrip set give very different rates for the same volume.",
    strategy: "Microdrip tubing is 60 gtt/mL, so drops per minute equals millilitres per hour.",
    difficulty: "easy",
    tags: ["pharmacology", "drug-calculations", "iv-drip-rate", "microdrip", "math"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PHARM-008",
    categorySlug: "pharmacology-parenteral",
    stem: "The nurse is preparing to administer intravenous ampicillin 750 mg to a hospitalized client. The medication vial contains 1 g of ampicillin powder. The manufacturer instructions state: 'Reconstitute with 3.5 mL of sterile water for injection to yield a final concentration of 250 mg/mL.' How many milliliters (mL) of reconstituted solution should the nurse draw up to deliver the prescribed 750 mg dose?",
    choices: [
      {
        id: "a",
        text: "2.6 mL",
      },
      {
        id: "b",
        text: "3.5 mL",
      },
      {
        id: "c",
        text: "3.0 mL",
      },
      {
        id: "d",
        text: "0.75 mL",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "When calculating dosage from reconstituted powders, always use the final concentration specified by the manufacturer rather than the diluent volume added (powder displacement increases the total liquid volume). Prescribed dose = 750 mg. Resulting concentration = 250 mg/mL. Volume = Prescribed dose / Available concentration = 750 mg / 250 mg/mL = 3.0 mL. The nurse draws up exactly 3.0 mL. Why the other options fail: option a divides by the diluent volume rather than the final concentration, which ignores powder displacement. Option b draws the whole 3.5 mL, which delivers 875 mg rather than the prescribed 750 mg. Option d divides the dose by the grams in the vial instead of by the concentration in mg/mL.",
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
        text: "Draw up the 40 mEq into a 10 mL syringe and give it over 2 minutes, to correct the ECG changes quickly",
      },
      {
        id: "b",
        text: "Give the potassium deep intramuscularly into the dorsogluteal site, since the peripheral route is too slow",
      },
      {
        id: "c",
        text: "Add the potassium to the unit of packed cells and run it rapidly, so that the infusion is not delayed",
      },
      {
        id: "d",
        text: "Never give it as a bolus: dilute it, infuse by pump at no more than 10 mEq/h peripherally, and monitor the ECG",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Potassium chloride is a high-alert medication that is LETHAL if given by direct intravenous push or rapid bolus (it halts myocardial electrical conduction in diastole, causing instant asystole). Safety standards mandate: (1) NEVER give IV push; (2) always dilute in compatible IV solutions; (3) maximum peripheral infusion rate is 10 mEq/hour (up to 20 mEq/hour via central venous catheter with continuous ECG monitoring); (4) always use an electronic infusion pump; (5) maximum peripheral concentration is 40 mEq/L; and (6) verify adequate renal function and urine output before administration. Why the other options fail: option a is the direct push that stops the heart in diastole. Option b puts a hypertonic irritant into muscle, which causes necrosis and does not correct the deficit. Option c co-infuses potassium with blood, which is incompatible and can haemolyse the cells, and running it rapidly compounds the danger.",
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
        text: "0.9% Normal Saline at a keep-vein-open (TKO) rate of 10 mL/h",
      },
      {
        id: "b",
        text: "10% Dextrose in Water (D10W) at the same infusion rate",
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
    correctChoiceId: "b",
    rationale:
      "TPN solutions contain high concentrations of dextrose (typically 20% to 50%), which stimulates continuous high endogenous insulin secretion by pancreatic beta cells. If TPN is abruptly stopped, circulating hyperinsulinaemia persists in the absence of exogenous glucose, precipitating severe rebound hypoglycaemia (diaphoresis, confusion, seizures, coma). If a TPN bag runs out or the pump fails, the nurse must immediately infuse 10% Dextrose in Water (D10W) centrally (or 5% Dextrose peripherally) at the same infusion rate until the new TPN solution is ready. Why the other options fail: option a contains no glucose, so it does nothing to prevent the hypoglycaemia that follows abrupt withdrawal of a high-dextrose infusion. Option c gives fluid without dextrose at a bolus volume that risks overload. Option d is hypotonic and would cause haemolysis; it is never used as a replacement fluid.",
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
        text: "Slow the infusion to 10 mL/h and give oral paracetamol for the fever, then reassess in 30 minutes",
      },
      {
        id: "b",
        text: "Stop the transfusion, disconnect the blood tubing, and run normal saline through new tubing to keep the vein open",
      },
      {
        id: "c",
        text: "Flush the blood tubing with 50 mL of sterile water to clear any micro-clots before continuing the unit",
      },
      {
        id: "d",
        text: "Reassure the client that back pain is a common reaction, and continue the transfusion at half the rate",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The client is experiencing an Acute Haemolytic Transfusion Reaction (AHTR), a medical emergency typically caused by ABO/Rh incompatibility. Host antibodies attack donor red cells, causing rapid intravascular haemolysis, hemoglobinuria (reddish urine), flank/back pain, hypotension, DIC, and acute renal failure. Immediate management: (1) STOP the transfusion immediately; (2) disconnect the blood tubing at the cannula hub (do NOT flush remaining blood in the tubing into the patient); (3) connect a new sterile IV line with 0.9% normal saline to maintain vascular access; (4) notify physician and blood bank; (5) send the remaining blood unit, tubing, and fresh blood/urine samples to the lab for workup. Why the other options fail: option a leaves the incompatible blood running while haemolysis continues. Option c flushes the remaining donor cells into the circulation, which increases the antigen load. Option d continues a transfusion through a reaction that can progress to renal failure and DIC.",
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
        text: "TACO: stop the transfusion, sit the client upright with the legs dependent, give oxygen and IV furosemide as ordered",
      },
      {
        id: "b",
        text: "TRALI: give a 1-litre bolus of normal saline and lay the client flat, since the lungs are under-perfused",
      },
      {
        id: "c",
        text: "Febrile non-haemolytic reaction: give oral diphenhydramine, restart the transfusion, and monitor the temperature",
      },
      {
        id: "d",
        text: "Anaphylaxis: give subcutaneous adrenaline, then resume the transfusion at full rate once the pressure settles",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Transfusion-Associated Circulatory Overload (TACO) occurs when blood products are infused faster than the circulatory system can accommodate, especially in elderly, cardiac, or renal patients. Manifestations include acute pulmonary edema: tachypnoea, hypoxaemia, hypertension, elevated JVD, and bilateral crackles. In contrast, TRALI features acute non-cardiogenic pulmonary edema with hypotension and fever. Interventions for TACO: stop the transfusion, place the patient upright with legs dependent (reduces venous return/preload), apply high-flow oxygen, and administer intravenous loop diuretics (furosemide). Why the other options fail: option b treats a hypertensive, fluid-overloaded client with more fluid. Option c names a febrile reaction when the picture is pulmonary oedema, and restarting the unit would worsen it. Option d names anaphylaxis, which presents with hypotension and wheeze rather than hypertension and raised venous pressure.",
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
        text: "Add 5% dextrose to the intravenous fluid and continue the insulin, so that ketones clear without hypoglycaemia",
      },
      {
        id: "b",
        text: "Stop the insulin infusion and give oral orange juice, since the glucose has fallen below the target range",
      },
      {
        id: "c",
        text: "Double the insulin rate to drive the glucose below 100 mg/dL, and withhold dextrose until it does",
      },
      {
        id: "d",
        text: "Switch the fluid to sterile water and give subcutaneous glargine to cover the next 24 hours",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "In DKA management, when serum blood glucose reaches approximately 200–250 mg/dL (11.1–13.9 mmol/L), 5% to 10% dextrose MUST be added to intravenous fluids (e.g., D5 0.45% NaCl). The insulin infusion rate is continued or adjusted to maintain glucose between 150 and 200 mg/dL until acidosis and ketosis resolve (anion gap normalizes, venous pH > 7.30, serum bicarbonate >= 18 mEq/L). Stopping insulin prematurely causes rebound ketoacidosis, whereas failing to add dextrose causes precipitously dropping plasma osmolality and lethal cerebral edema. Why the other options fail: option b stops the insulin while ketones are still present, which allows ketoacidosis to rebound. Option c drives the glucose down without adding substrate, risking cerebral oedema and hypoglycaemia. Option d gives hypotonic fluid and long-acting insulin, neither of which addresses the acute deficit.",
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
        text: "Immune thrombocytopenia: increase the heparin rate to overcome antibody consumption, and check the count in 48 hours",
      },
      {
        id: "b",
        text: "Dilutional thrombocytopenia: transfuse two units of platelets and continue the heparin at the current rate",
      },
      {
        id: "c",
        text: "Warfarin-induced skin necrosis: stop the heparin and start oral aspirin instead",
      },
      {
        id: "d",
        text: "HIT: stop all heparin at once, including line flushes, and start a non-heparin anticoagulant such as argatroban",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Heparin-Induced Thrombocytopenia (HIT) is an immune-mediated drug reaction caused by antibodies against platelet factor 4 (PF4)-heparin complexes. It typically develops 5 to 10 days after heparin initiation, marked by a >= 50% drop in platelet count. Rather than causing bleeding, HIT is a pro-thrombotic emergency: antibodies cause widespread platelet activation leading to venous and arterial thrombosis (DVT, PE, stroke, limb gangrene). Immediate action: STOP all heparin products (including heparin line flushes), record heparin allergy, avoid platelet transfusions (fuels thrombosis), and initiate a non-heparin direct thrombin inhibitor (e.g., argatroban, bivalirudin) or fondaparinux. Why the other options fail: option a is the opposite of the required action, because HIT is prothrombotic and more heparin worsens it. Option b transfuses platelets into a syndrome driven by platelet activation, which can fuel the thrombosis. Option c is the wrong diagnosis, and aspirin does not treat HIT.",
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
        text: "Give small titrated IV doses, 0.04 to 0.1 mg every 2 to 3 minutes, enough to restore breathing without full reversal",
      },
      {
        id: "b",
        text: "Give a rapid 2 mg intravenous bolus straight from the vial, which reverses the opioid effect completely and at once",
      },
      {
        id: "c",
        text: "Give naloxone as a 500 mL subcutaneous infusion over 24 hours, so that the reversal is sustained through the night",
      },
      {
        id: "d",
        text: "Mix naloxone with a further dose of morphine, so that receptor occupancy is balanced between the two drugs",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "In postoperative clients who are opioid-dependent or require analgesia, administering high-dose rapid boluses of naloxone (e.g., 2 mg IV push) causes immediate, complete reversal of analgesia, precipitating severe pain, agitation, sympathetic surge (tachycardia, hypertensive crisis, pulmonary edema), and cardiac arrest. The recommended practice is to dilute 0.4 mg of naloxone in 9 mL of normal saline (giving 0.04 mg/mL) and administer small incremental doses (0.04 to 0.1 mg) every 2–3 minutes until ventilation improves (respiratory rate >= 10–12 bpm) while preserving analgesia. Because naloxone has a shorter half-life (30–90 min) than most opioids, monitoring for resedation is critical. Why the other options fail: option b fully reverses the opioid and precipitates acute pain, agitation and a sympathetic surge. Option c cannot titrate an emergency, and subcutaneous absorption is far too slow for respiratory depression. Option d adds more opioid to a client who is already over-sedated.",
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
        text: "Confirm that the client has eaten within the past hour, so that muscle glycogen can sustain the diaphragm",
      },
      {
        id: "b",
        text: "Confirm that sedation and analgesia are running continuously and that the airway is secured on the ventilator",
      },
      {
        id: "c",
        text: "Disconnect the monitoring, so that electrical interference from the pump does not disturb the drug delivery",
      },
      {
        id: "d",
        text: "Stop the sedative infusion, so that the client can signal distress by hand movements while paralysed",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Neuromuscular blocking agents (paralytics such as vecuronium, rocuronium, cisatracurium) induce complete skeletal muscle flaccidity, including the diaphragm and intercostal muscles. Crucially, paralytics possess ZERO analgesic, sedative, or anxiolytic properties. Administering a paralytic to an awake, inadequately sedated patient causes conscious paralysis, horror, and profound psychological trauma. The nurse must verify that: (1) an advanced airway is secured on mechanical ventilation, (2) adequate continuous IV sedation and analgesia are actively infusing, and (3) emergency bag-valve-mask equipment and suction are immediately operational. Why the other options fail: option a has no bearing on paralysis and risks aspiration. Option c removes the monitoring that a paralysed client depends on entirely. Option d withdraws sedation, which leaves a paralysed client conscious, the very harm the item tests.",
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
        text: "Exactly 30 minutes after the infusion is complete, which is when the peak is drawn",
      },
      {
        id: "b",
        text: "Midway through the 8-hour interval, at the fourth hour after the dose",
      },
      {
        id: "c",
        text: "Within 30 minutes, immediately before the next scheduled dose",
      },
      {
        id: "d",
        text: "At any time during the shift, provided the sample is sent promptly",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Therapeutic drug monitoring for aminoglycosides (gentamicin, tobramycin, amikacin) and glycopeptides (vancomycin) requires drawing peak and trough levels to maximize bactericidal efficacy and prevent toxicity. The TROUGH level reflects the lowest drug concentration in the body and is drawn within 30 minutes immediately prior to the next scheduled dose. An elevated trough level indicates impaired drug clearance and is the most sensitive predictor of aminoglycoside-induced nephrotoxicity (acute tubular necrosis) and irreversible ototoxicity (vestibular and cochlear damage). The PEAK level is drawn 30 minutes after completion of an IV infusion. Why the other options fail: option a is when the peak is drawn, not the trough. Option b samples the middle of the interval, where the level reflects neither peak nor trough. Option d ignores timing altogether, so the result cannot be interpreted against a therapeutic range.",
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
        text: "Age-related cataract, which explains the halos and the blurred vision, with a routine optometry referral",
      },
      {
        id: "b",
        text: "Viral gastroenteritis, which explains the nausea and anorexia, treated with oral rehydration salts",
      },
      {
        id: "c",
        text: "Digoxin toxicity worsened by diuretic-induced hypokalaemia: hold the digoxin, notify the prescriber, and monitor the ECG",
      },
      {
        id: "d",
        text: "Acute hyperkalaemia, treated at once with oral sodium polystyrene sulfonate and a glucose-insulin infusion",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Digoxin has a narrow therapeutic index (0.5 to 2.0 ng/mL, with optimal heart failure levels 0.5–0.9 ng/mL). Potassium competes with digoxin for binding at the myocardial Na+/K+ ATPase pump. When serum potassium is low (hypokalaemia from loop diuretics like furosemide), more digoxin binds to the pump, dramatically potentiating toxicity even at normal serum digoxin levels. Classic signs of digoxin toxicity include gastrointestinal upset (anorexia, nausea, vomiting), neurological/visual disturbances (yellow-green halos, blurred vision), and cardiac dysrhythmias (bradycardia, heart blocks, ventricular ectopy). Immediate action: hold digoxin, check digoxin/electrolyte levels, replace potassium, and prepare antidote Digoxin Immune Fab (Digibind) if life-threatening dysrhythmias occur. Why the other options fail: option a attributes a drug effect to cataract and misses the bradycardia and the potassium. Option b treats the nausea and ignores the pulse and the visual halos. Option d inverts the electrolyte problem, since a potassium of 3.1 is low and the drug to give is potassium, not a binder.",
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
        text: "Lisinopril is teratogenic at every stage and must stop now; switch to labetalol, nifedipine or methyldopa",
      },
      {
        id: "b",
        text: "Lisinopril is safe until the third trimester, so it can be continued and stopped at 28 weeks",
      },
      {
        id: "c",
        text: "Double the lisinopril dose, since better blood pressure control lowers the risk of pre-eclampsia",
      },
      {
        id: "d",
        text: "Switch to losartan, because ARBs are safer in pregnancy than ACE inhibitors and carry no fetal risk",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Angiotensin-Converting Enzyme (ACE) inhibitors (e.g., lisinopril, enalapril) and Angiotensin Receptor Blockers (ARBs, e.g., losartan) are strictly contraindicated in all trimesters of pregnancy. They cause severe fetopathy, including renal dysgenesis, fetal oligohydramnios (leading to pulmonary hypoplasia and limb contractures), skull hypoplasia, intrauterine growth restriction, and fetal death. The nurse must notify the provider immediately to discontinue the ACE inhibitor and transition to safe, first-line antihypertensive agents approved in pregnancy: labetalol, extended-release nifedipine, or methyldopa. Why the other options fail: option b delays the switch into the period when fetal renal damage occurs. Option c raises the dose of the drug that must be stopped. Option d swaps one renally acting blocker for another of the same class, both of which cause fetal renal failure.",
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
        text: "Typical progression of Alzheimer's disease, unrelated to the recent medication changes",
      },
      {
        id: "b",
        text: "An acute cholinergic toxidrome from organophosphate pesticide exposure at home or in the garden",
      },
      {
        id: "c",
        text: "Serotonin syndrome, which needs high-dose bromocriptine without waiting for the clonus to appear",
      },
      {
        id: "d",
        text: "Cumulative anticholinergic toxicity from two Beers-listed drugs, diphenhydramine and amitriptyline",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The Beers Criteria (American Geriatrics Society) identifies medications that pose high risks of adverse drug events in older adults. First-generation antihistamines (diphenhydramine) and tricyclic antidepressants (amitriptyline) possess potent anticholinergic properties. In elderly patients, reduced cholinergic receptor density and slower drug clearance lead to cumulative anticholinergic burden: central effects (acute delirium, confusion, memory impairment, sedation) and peripheral effects (urinary retention, dry mouth, blurred vision, constipation, tachycardia, orthostatic hypotension, and falls). Management requires deprescribing inappropriate anticholinergics and adopting non-pharmacological sleep hygiene. Why the other options fail: option a ignores the temporal relationship to two new drugs and calls it progression. Option b names the opposite toxidrome; organophosphates cause bradycardia, salivation and diarrhoea, not dry mouth and retention. Option c treats serotonin syndrome, which this client does not have and for which bromocriptine is not the first choice.",
    strategy: "Geriatric pharmacology (Beers Criteria): Anticholinergics (diphenhydramine, amitriptyline) cause acute confusion, urinary retention, and falls in older adults.",
    difficulty: "medium",
    tags: ["pharmacology", "beers-criteria", "geriatrics", "anticholinergic-burden", "fall-prevention"],
    isFree: true,
  },
];
