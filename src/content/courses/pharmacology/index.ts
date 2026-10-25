import type { Course } from "../types";
import { pharmacologyFoundationsAndSafePractice } from "./01-pharmacology-foundations-and-safe-practice";
import { routesAndTechniquesOfAdministration } from "./02-routes-and-techniques";
import { drugCalculations } from "./03-drug-calculations";
import { intravenousFluidsElectrolytesAndNutrition } from "./04-intravenous-fluids-electrolytes-and-nutrition";
import { bloodTransfusion } from "./05-blood-transfusion";
import { highAlertMedications } from "./06-high-alert-medications";
import { drugClassesAndSpecialPopulations } from "./07-drug-classes-and-special-populations";
import { glossary } from "./glossary";

export const pharmacologyAndMedicationCalculations: Course = {
  slug: "pharmacology-and-medication-calculations",
  code: "NGP-PHC-112",
  title: "Pharmacology & Medication Calculations",
  tagline: "Every medicine a nurse gives, made safe — how drugs work and why doses differ between patients, the rights of administration and the errors that get past them, every route and the technique that makes it safe, drug calculations and infusion rates that must be right every time, intravenous fluids, electrolytes and parenteral nutrition, blood transfusion from sample to completion, the high-alert medicines and their antidotes, the drug classes Ghanaian nurses give most, the patients in whom the same dose is not the same dose, herbal medicine, and pharmacovigilance.",
  description:
    "A structured course covering pharmacokinetics and pharmacodynamics — absorption, first pass, distribution, metabolism, excretion, half-life, loading doses, receptors, therapeutic index and drug monitoring — adverse reactions and interactions with Ghanaian examples, the bodies that govern medicines in Ghana and the Essential Medicines and NHIS lists; the ten rights, the prescription, verbal orders, look-alike sound-alike medicines, the first minutes after an error, just culture, medication reconciliation and teach-back, storage in the tropics and the cold chain, substandard and falsified medicines and the controlled-drug chain; oral, enteral, sublingual, rectal, topical, transdermal, eye, ear, nasal and inhaled routes and oxygen as a drug; intradermal, subcutaneous and intramuscular injections with their sites, angles and volumes, reconstitution and displacement, intravenous boluses and infusions, pumps and their alarms, phlebitis, infiltration, extravasation, air embolism and sharps safety; dose calculations in units, tablets, liquids and injections, percentages and ratios, weight-based and surface-area doses and the sense check; infusion rates in millilitres per hour and drops per minute and the dose-per-time infusions of heparin, insulin, dopamine, oxytocin, magnesium and aminophylline; paediatric maintenance, deficit, ORS and Plan C volumes, Parkland, urine output targets, fluid allowances, body mass index, energy and RUTF and everyday clinical arithmetic; the fluid compartments, crystalloids and colloids, the five Rs of fluid prescribing, fluid balance charting and the recognition of overload and hyponatraemia; potassium replacement and the treatment of hyperkalaemia, sodium, calcium, magnesium and phosphate, parenteral nutrition and refeeding syndrome; blood groups and components, the transfusion process, the reactions and massive transfusion; insulin, oral hypoglycaemics, heparin and warfarin, opioids and the analgesic ladder, sedatives and anaesthetic drugs, digoxin, magnesium sulphate, oxytocin, concentrated electrolytes, cytotoxics and neuromuscular blockers and the system defences for high-alert medicines; antibiotics and stewardship, the tuberculosis regimen, antimalarials, antiretrovirals, antifungals and anthelmintics; cardiovascular, respiratory, endocrine, gastrointestinal, psychiatric and neurological drugs with the observation and counselling point each demands; medicines in pregnancy, breastfeeding, childhood, old age and kidney and liver impairment; herbal and traditional medicine and its regulation in Ghana; and pharmacovigilance reporting to the Food and Drugs Authority. Each lesson is written for Ghanaian nursing and midwifery students, uses the diagrams from the NurseGrid question bank, and ends with practice questions drawn from the same bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "💊",
  level: "Intermediate",
  gradient: "from-teal-700 via-emerald-500 to-lime-300",
  creditHours: 4,
  dueInDays: 30,
  outcomes: [
    "Explain pharmacokinetics and pharmacodynamics — first pass, bioavailability, protein binding, half-life, steady state, loading doses, receptors and the therapeutic index — distinguish type A from type B adverse reactions and allergy from intolerance, predict the common interactions, and describe how medicines are governed in Ghana and the nurse's accountability within that system.",
    "Administer medicines safely by applying the ten rights, reading a prescription critically, handling verbal orders, interruptions and look-alike sound-alike medicines, acting correctly after an error or near miss, reconciling medicines and teaching patients, storing medicines and vaccines correctly in Ghana's climate, recognising substandard and falsified products, and keeping the controlled-drug chain unbroken.",
    "Give medicines by every route with the correct technique — oral, enteral tube, sublingual, rectal, topical, transdermal, eye, ear, nasal, inhaled and oxygen; intradermal, subcutaneous and intramuscular injections at the right site, angle and volume; intravenous boluses and infusions with compatibility, flushing, pumps and the recognition and management of phlebitis, infiltration, extravasation and air embolism.",
    "Calculate doses, volumes, infusion rates and dose-per-time infusions accurately — units and conversions, tablets, liquids and injections, reconstitution, percentages and ratios, mg/kg and surface-area doses, drops per minute and millilitres per hour, heparin, insulin, inotrope and oxytocin infusions, paediatric maintenance and deficit, Parkland, urine targets, fluid allowances and nutritional requirements — sense-check every answer and apply the independent second check.",
    "Deliver fluid therapy safely: choose the right intravenous fluid for resuscitation, maintenance and replacement, keep an accurate fluid balance and daily weight, recognise overload and hyponatraemia, replace potassium and the other electrolytes safely, treat hyperkalaemia in the right order, and care for a patient on parenteral nutrition while preventing refeeding syndrome.",
    "Transfuse blood and blood products safely from the bedside-labelled sample through the two-person check, the giving set, the time limits and the observations to completion, recognise and respond to every transfusion reaction with the single first response, manage massive transfusion, and adapt transfusion to the frail, the child, the sickle-cell patient and the patient who refuses blood.",
    "Give the high-alert medicines — insulin and oral hypoglycaemics, heparin and warfarin, opioids and analgesics, sedatives and anaesthetic drugs, digoxin, magnesium sulphate, oxytocin, concentrated electrolytes, cytotoxics and neuromuscular blockers — with the pre-dose checks, monitoring, antidotes and system defences each demands, and treat drug-induced anaphylaxis with intramuscular adrenaline first.",
    "Administer and counsel on the drug classes Ghanaian nurses give most — antibiotics with stewardship, the tuberculosis regimen, antimalarials, antiretrovirals, antifungals and anthelmintics, and the cardiovascular, respiratory, endocrine, gastrointestinal, psychiatric and neurological drugs — adjust for pregnancy, breastfeeding, childhood, old age and kidney and liver impairment, ask about and manage herbal medicine use, and report adverse reactions, vaccine events and failed products to the Food and Drugs Authority within the required times.",
  ],
  audience: [
    "Final-year nursing and midwifery students preparing for the N&MC licensing examination",
    "Newly qualified nurses and midwives on medical, surgical, paediatric, maternity, emergency, intensive care and outpatient placements who give medicines, run infusions and transfuse blood every shift",
    "Nurses and midwives at CHPS compounds, health centres and district hospitals who manage medicines, the cold chain and controlled drugs, treat within the Standard Treatment Guidelines and report to the Food and Drugs Authority",
  ],
  modules: [
    pharmacologyFoundationsAndSafePractice,
    routesAndTechniquesOfAdministration,
    drugCalculations,
    intravenousFluidsElectrolytesAndNutrition,
    bloodTransfusion,
    highAlertMedications,
    drugClassesAndSpecialPopulations,
  ],
  postTest: {
    title: "Post-Test: Pharmacology & Medication Calculations",
    description:
      "Twenty-five questions drawn at random from the pharmacology, medication safety and calculation question pool. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["pharmacology parenteral", "drug calculations", "dosage calculation", "infusion rate", "drops per ml", "medication error", "medication safety", "medication administration", "controlled drug", "high alert", "insulin", "warfarin", "heparin", "digoxin", "morphine", "opioid", "naloxone", "paracetamol", "antibiotic", "gentamicin", "penicillin", "metronidazole", "rifampicin", "isoniazid", "artesunate", "artemether", "antiretroviral", "potassium chloride", "hypokalaemia", "hyperkalaemia", "transfusion", "blood group", "intravenous fluid", "normal saline", "ringer", "dextrose", "fluid balance", "parenteral nutrition", "extravasat", "phlebitis", "cannula site", "intramuscular", "subcutaneous", "intradermal", "inhaler", "nebulis", "nasogastric tube", "eye drop", "suppositor", "cold chain", "vaccine vial monitor", "expired", "falsified", "substandard", "pharmacovigilance", "adverse drug reaction", "food and drugs authority", "essential medicines", "herbal", "traditional medicine", "breastfeeding mother", "polypharm", "renal impairment", "half life", "loading dose", "first pass", "enzyme induc", "therapeutic index", "anaphylaxis", "adrenaline", "magnesium sulphate", "oxytocin infusion", "corticosteroid", "prednisolone", "levothyroxine", "salbutamol", "antihypertensive", "ace inhibitor", "beta blocker", "furosemide", "diuretic", "statin", "glyceryl", "omeprazole", "antiemetic", "metoclopramide", "antipsychotic", "lithium", "antidepressant", "phenytoin", "valproate", "benzodiazepine", "chlorpheniramine", "anticholinergic", "mg/kg", "what volume", "how many tablets", "holliday", "parkland", "body mass index", "calcium gluconate"],
  },
  evaluation: {
    title: "Course Evaluation",
    description: "Your feedback shapes the next version of this course. The evaluation takes about one minute and is required before your certificate is issued.",
    items: [
      { id: "objectives", prompt: "The course met the stated learning outcomes." },
      { id: "content", prompt: "The content was accurate, clear and relevant to nursing and midwifery practice in Ghana." },
      { id: "diagrams", prompt: "The diagrams and tables helped me understand the material." },
      { id: "questions", prompt: "The practice questions and post-test reflected what was taught." },
      { id: "recommend", prompt: "I would recommend this course to a colleague or classmate." },
    ],
    commentPrompt: "What should we add, remove or explain better?",
  },
  glossary,
};
