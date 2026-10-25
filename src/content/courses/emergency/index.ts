import type { Course } from "../types";
import { emergencyNursingFoundations } from "./01-emergency-nursing-and-the-deteriorating-patient";
import { airwayAccessAndMonitoring } from "./02-airway-access-and-monitoring";
import { shock } from "./03-shock";
import { cardiacArrestAndEcg } from "./04-cardiac-arrest-and-ecg";
import { traumaEnvironmentalAndPoisoning } from "./05-trauma-environmental-and-poisoning";
import { criticalCareDisastersAndEthics } from "./06-critical-care-disasters-and-ethics";
import { emergencyDrugsAndCalculations } from "./07-emergency-drugs-and-calculations";
import { glossary } from "./glossary";

export const shockEmergencyAndCriticalCareNursing: Course = {
  slug: "shock-emergency-and-critical-care-nursing",
  code: "NGP-EMC-111",
  title: "Shock, Emergency & Critical Care Nursing",
  tagline: "From the triage desk to the intensive care bed — the first minutes that decide whether a patient lives: triage and the primary survey, recognising the deteriorating patient, airway, oxygen and vascular access, every type of shock, basic and advanced life support and the rhythms that go with them, trauma, burns, drowning, snakebite and poisoning, ventilated and unconscious patients, mass casualties and disasters, safe transfer, the law of the emergency department, and the emergency drugs and calculations that must be right the first time.",
  description:
    "A structured course covering emergency care in Ghana and the chain of survival, triage systems and the ABCDE primary survey, early warning scores, SBAR and escalation, the paediatric and obstetric patient who is deteriorating, airway assessment and manoeuvres, adjuncts and suction, oxygen delivery devices and ventilation with a bag-valve-mask, choking, peripheral and intraosseous access, resuscitation fluids and the fluid challenge, blood and massive transfusion, invasive and non-invasive haemodynamic monitoring, the pathophysiology, stages and classification of shock and the recognition of each type — hypovolaemic and haemorrhagic, septic, anaphylactic, neurogenic, cardiogenic and obstructive — with their management in adults, children and pregnant women, basic and advanced life support for adults, children and newborns, defibrillation and the shockable and non-shockable algorithms, reversible causes, post-resuscitation care and when to stop, ECG recognition of the emergency rhythms and ST elevation, hyperkalaemia and the drug-induced changes, the trauma primary survey, chest, abdominal, pelvic, head, spinal and limb injuries, compartment syndrome and non-accidental injury, burns first aid and Parkland resuscitation, drowning, heat stroke, hypothermia, electrical injury, snakebite and antivenom, scorpion and bee stings, dog bites and rabies post-exposure prophylaxis, tetanus, poisoning and overdose with the toxidromes, decontamination and the antidotes, the care of the patient who has harmed themselves, intensive care nursing with the ventilator and its alarms, the VAP bundle, sedation and delirium, blood gases, tracheostomy and line care, the care of the unconscious patient and the limits of treatment, mass-casualty START triage and the hospital major incident plan, the public health of disasters and psychological first aid, safe inter-facility transfer through the Ghana Health Service referral pyramid, consent and refusal, the police and the forensic case, death in the emergency department and breaking bad news, and the emergency drugs and the calculations — adrenaline strengths, infusions in micrograms per kilogram per minute, WETFLAG, drip rates, oxygen cylinder duration, mean arterial pressure, the shock index, artesunate and quinine, potassium, verbal orders and controlled drugs. Each lesson is written for Ghanaian nursing and midwifery students, uses the diagrams from the NurseGrid question bank, and ends with practice questions drawn from the same bank. The course also covers acute pain and procedural sedation. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🚑",
  level: "Intermediate",
  gradient: "from-red-700 via-orange-600 to-amber-300",
  creditHours: 4,
  dueInDays: 30,
  outcomes: [
    "Describe emergency care in Ghana and the chain of survival, triage patients with a recognised system, perform the ABCDE primary survey, use early warning scores and SBAR to recognise and escalate the deteriorating adult, child and pregnant woman, and avoid the failures of recognition and escalation that precede most avoidable deaths.",
    "Assess and open the airway, use adjuncts, suction, oxygen delivery devices and bag-valve-mask ventilation, manage choking, obtain peripheral and intraosseous access, give resuscitation fluids and blood safely, and interpret non-invasive and invasive haemodynamic monitoring.",
    "Explain the pathophysiology, stages and classification of shock, recognise hypovolaemic, haemorrhagic, septic, anaphylactic, neurogenic, cardiogenic and obstructive shock in adults, children and pregnant women, and deliver the first hour of management for each, including the sepsis bundle, intramuscular adrenaline, massive transfusion and the search for the reversible cause.",
    "Perform basic and advanced life support for adults, children and newborns, operate a defibrillator safely, follow the shockable and non-shockable algorithms with their drugs and reversible causes, provide post-resuscitation care, and recognise the emergency rhythms, ST elevation and the ECG changes of hyperkalaemia and drug toxicity.",
    "Manage the trauma patient from the roadside to the ward with the C-ABCDE survey, spinal precautions, control of haemorrhage, recognition of the lethal chest injuries and hidden abdominal and pelvic bleeding, head and spinal injury observation, limb injuries and compartment syndrome, wound and tetanus care, and recognition of non-accidental injury.",
    "Deliver first aid and emergency management for burns, drowning, heat stroke, hypothermia, electrical injury, snakebite, scorpion and bee stings, dog bites with rabies prophylaxis and tetanus, and manage poisoning and overdose with the five principles, safe decontamination, the toxidromes and antidotes, and compassionate care and risk assessment of the patient who has harmed themselves.",
    "Nurse the ventilated and unconscious patient safely in intensive and high-dependency care — ventilator settings and alarms, DOPE, the VAP bundle, sedation and delirium, blood gases, tracheostomy, lines and tubes, essential care, limits of treatment and the ethics of the scarce bed — and lead START triage in a mass-casualty incident, apply the public health priorities of a disaster, transfer critically ill patients safely, and act within the law on consent, refusal, the police, forensic evidence and death in the emergency department.",
    "Give the emergency drugs correctly — adrenaline in its two strengths and three uses, the arrest and peri-arrest drugs, the antidotes, infusions in micrograms per kilogram per minute, artesunate and quinine, potassium and the high-alert drugs — and calculate weight-based doses, WETFLAG, Parkland, drip and pump rates, oxygen cylinder duration, mean arterial pressure and the shock index accurately, with verbal orders, controlled drugs and the resuscitation trolley handled safely.",
    "Assess and treat acute pain by ladder and protocol with reassessment, and deliver safe procedural sedation with monitoring and rescue.",
  ],
  audience: [
    "Final-year nursing and midwifery students preparing for the N&MC licensing examination",
    "Newly qualified nurses and midwives on emergency, accident and emergency, high-dependency, intensive care, theatre recovery, trauma and acute medical and surgical placements",
    "Nurses and midwives at CHPS compounds, health centres and district hospitals who must recognise, resuscitate, stabilise and refer the critically ill and injured without a doctor present",
  ],
  modules: [
    emergencyNursingFoundations,
    airwayAccessAndMonitoring,
    shock,
    cardiacArrestAndEcg,
    traumaEnvironmentalAndPoisoning,
    criticalCareDisastersAndEthics,
    emergencyDrugsAndCalculations,
  ],
  postTest: {
    title: "Post-Test: Shock, Emergency & Critical Care Nursing",
    description:
      "Twenty-five questions drawn at random from the shock, emergency and critical care question pool. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["shock", "sepsis", "septic", "anaphyla", "cardiac arrest", "resuscitat", "triage", "unconscious", "glasgow", "burns", "scald", "snakebite", "snake bite", "poison", "overdose", "naloxone", "adrenaline", "defibrillat", "trauma", "fracture", "head injury", "drowning", "tetanus", "rabies", "ventilat", "intensive care", "airway", "mass casualty", "disaster", "kerosene", "hypothermia", "organophosphate", "recovery position", "choking", "early warning", "deteriorat", "pulse oximet", "parkland", "rule of nines", "compartment", "primary survey", "spinal injury", "pneumothorax", "chest drain", "capillary refill", "drip rate", "drops per minute", "artesunate", "quinine", "status epilepticus", "hypoglyc", "ketoacidosis", "ecg", "lactate", "urine output", "haemorrhag", "hypotens", "oxygen", "consent", "referral", "blood transfusion", "cannula"],
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
