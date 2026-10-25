import type { Course } from "../types";
import { theChildInGhanaGrowthDevelopmentAndTheFamily } from "./01-the-child-in-ghana-growth-development-and-the-family";
import { theNewbornEssentialCareAndTheSmallOrSickBaby } from "./02-the-newborn-essential-care-and-the-small-or-sick-baby";
import { theExpandedProgrammeOnImmunisation } from "./03-the-expanded-programme-on-immunisation";
import { theSickChildImciInfectionsAndNutrition } from "./04-the-sick-child-imci-infections-and-nutrition";
import { paediatricEmergencies } from "./05-paediatric-emergencies";
import { chronicAndLongTermConditionsOfChildhood } from "./06-chronic-and-long-term-conditions-of-childhood";
import { paediatricPharmacologyAndCalculations } from "./07-paediatric-pharmacology-and-calculations";
import { glossary } from "./glossary";

export const paediatricNursingAndImmunisation: Course = {
  slug: "paediatric-nursing-and-immunisation",
  title: "Paediatric Nursing & Immunisation",
  code: "NGP-PAE-115",
  tagline: "From the first breath to the boarding school — the child, the family and the vaccine that gets there in time.",
  description:
    "A complete course in the nursing care of children for Ghanaian nursing and midwifery practice, built around two of the tricky topics examiners return to: paediatric emergencies and the immunisation schedule. Seven modules cover the child in Ghana — where children die and why, CHPS, the child welfare clinic and the Child Health Record Book, growth monitoring and the three indicators, MUAC, vitamin A and deworming, the principles and milestones of development, corrected age and the red flags — and the hospitalised child: what each age fears, separation anxiety, play and preparation for procedures, pain assessment, family-centred care, consent, assent and adolescent confidentiality under the Children's Act, and recognising and reporting child abuse; the newborn — the Golden Minute, Apgar, delayed cord clamping and the essential newborn care package of chlorhexidine cord care, eye prophylaxis, vitamin K and the birth vaccines, the warm chain, attachment and exclusive breastfeeding, hypothermia and hypoglycaemia, the danger signs, neonatal sepsis, tetanus and ophthalmia, and the small or sick baby: low birth weight and prematurity, kangaroo mother care, the feeding ladder and volumes, jaundice by the clock and Kramer's zones, G6PD deficiency and kernicterus, phototherapy nursing, respiratory distress, bile-stained vomiting and the surgical newborn; the Expanded Programme on Immunisation — the kinds of immunity and herd immunity, the current Ghana schedule antigen by antigen with dose, route and site, catch-up rules and true and false contraindications, the cold chain, VVMs, the shake test and the multi-dose vial policy, running a safe session, AEFI recognition, anaphylaxis and reporting, coverage and dropout, defaulter tracing and Reaching Every District, and the case definitions and surveillance of measles, acute flaccid paralysis, neonatal tetanus, pertussis and diphtheria; the sick child — IMCI danger signs and classification, fever and malaria testing, ACTs and severe malaria with artesunate, meningitis, measles, typhoid and the febrile child with TB or HIV, cough or difficult breathing with the breath counts, pneumonia, oxygen, bronchiolitis, croup, pertussis, the inhaled foreign body and acute asthma, and diarrhoea, the three plans, ORS and zinc, dysentery, persistent diarrhoea and cholera, severe acute malnutrition and the ten steps, CMAM and RUTF and complementary feeding counselling; paediatric emergencies — ETAT triage, why the blood pressure falls last, shock and its fluids with the exceptions, hypoglycaemia, convulsions and status epilepticus, the unconscious child and raised intracranial pressure, anaphylaxis, DKA, the tet spell, splenic sequestration and acute chest syndrome, paediatric basic life support and choking, and the injured child: burns and the Parkland formula, poisoning with kerosene, paracetamol, iron, organophosphates and the button battery, drowning, head injury, snake and dog bites, intussusception, pyloric stenosis, appendicitis, hernia and torsion and preparing a child for surgery; chronic conditions — sickle cell disease from inheritance and newborn screening to penicillin, vaccines, hydroxyurea and the crisis plan, the child with HIV from early infant diagnosis to disclosure, rheumatic and congenital heart disease and the child in heart failure, nephrotic syndrome, glomerulonephritis and urinary infection, type 1 diabetes, epilepsy and long-term steroids, childhood cancer and neutropenic fever, disability and the social model, the adolescent and the dying child; and paediatric pharmacology and calculations — why a child is not a small adult, the forbidden drugs, weight-based dosing and the ten-fold error, the common doses, giving medicines to children, teaching the caregiver, and fluids and feeds by the numbers: Holliday–Segar and 4-2-1, deficit and boluses, drip rates and the burette, transfusion and burn volumes, newborn, low birth weight and SAM feed volumes and formula preparation. Each lesson is written for Ghanaian nursing and midwifery students, uses the diagrams from the NurseGrid question bank, and ends with practice questions drawn from the same bank. The course also covers febrile rashes and adolescent health. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "👶",
  level: "Intermediate",
  gradient: "from-pink-600 via-rose-500 to-amber-300",
  creditHours: 4,
  dueInDays: 30,
  outcomes: [
    "Describe the pattern and causes of child mortality in Ghana and the services built to prevent it, carry out growth monitoring and promotion with the weight chart, MUAC and the three indicators, give vitamin A and deworming on schedule, assess development against limit ages with correction for prematurity, and refer the red flags and any regression.",
    "Nurse the hospitalised child and family according to developmental stage — separation anxiety, play, honest preparation, safe holding and age-appropriate pain assessment — practise family-centred care, apply consent, assent and adolescent confidentiality under the Children's Act and the Patients' Charter, and recognise, document and report suspected child abuse and neglect.",
    "Deliver the first minute and first hour of newborn care including bag-and-mask ventilation within the Golden Minute, the essential newborn care package, thermal protection, breastfeeding support and the recognition and management of hypothermia, hypoglycaemia, the danger signs, neonatal sepsis, tetanus and ophthalmia, and care for the low birth weight, preterm, jaundiced and surgical newborn with kangaroo mother care, correct feed volumes, safe phototherapy and timely referral.",
    "Explain how vaccines produce immunity and why herd immunity thresholds differ, state Ghana's EPI schedule with dose, route and site, apply catch-up rules and the true and false contraindications, maintain the cold chain with VVMs, the shake test and the multi-dose vial policy, run a safe immunisation session, recognise, treat and report adverse events following immunisation, calculate coverage and dropout, trace defaulters, and recognise and notify the vaccine-preventable diseases.",
    "Assess and classify the sick child with IMCI — danger signs, fever with malaria testing and treatment, cough or difficult breathing with the breath counts and oxygen, diarrhoea with the three plans, ORS and zinc — recognise meningitis, measles, typhoid, pneumonia, croup, asthma and the inhaled foreign body, manage severe acute malnutrition through the ten steps and CMAM, and counsel on complementary feeding and prevention.",
    "Triage children with ETAT, recognise compensated shock before the blood pressure falls and treat it with the right fluid and volume including the exceptions, manage hypoglycaemia, convulsions, the unconscious child, anaphylaxis, diabetic ketoacidosis, the hypercyanotic spell and the sickle cell emergencies, perform paediatric basic life support and relieve choking, and give emergency care for burns, poisoning, drowning, head injury, bites and the acute surgical abdomen.",
    "Provide comprehensive care for children with sickle cell disease, HIV, rheumatic and congenital heart disease, nephrotic syndrome, glomerulonephritis, type 1 diabetes, epilepsy, asthma and long-term steroid treatment, recognise and refer childhood cancer and manage neutropenic fever and treatment abandonment, support children with disabilities and their families under the social model and Act 715, deliver adolescent-friendly care and transition, and give palliative and end-of-life care to a child and family.",
    "Explain the pharmacokinetic differences of the newborn and child and the drugs that are forbidden or restricted, calculate weight-based doses and volumes safely with an independent check against the ten-fold error, administer oral, intramuscular, intravenous, rectal and inhaled medicines to children correctly and teach caregivers, and calculate maintenance, deficit, bolus, rehydration, transfusion and burn fluids, drip rates and newborn, low birth weight and SAM feed volumes to a correct answer with units.",
    "Distinguish the febrile rashes of childhood — measles, rubella, chickenpox, scarlet fever and meningococcaemia — isolate, notify and act on the dangerous ones.",
    "Assess the adolescent with HEEADSSS, protect confidentiality within its limits, and support adherence and transition to adult care.",
  ],
  audience: [
    "Final-year nursing and midwifery students preparing for the N&MC licensing examination, in which the EPI schedule, IMCI, newborn care, dehydration plans, malnutrition, paediatric emergencies and weight-based calculations appear in every paper",
    "Newly qualified nurses and midwives on paediatric, neonatal, emergency and maternity units and at child welfare clinics",
    "Community health nurses and officers at CHPS compounds and health centres who run immunisation sessions and outreach, weigh and counsel at the child welfare clinic, trace defaulters and manage the sick child under five with IMCI",
  ],
  modules: [
    theChildInGhanaGrowthDevelopmentAndTheFamily,
    theNewbornEssentialCareAndTheSmallOrSickBaby,
    theExpandedProgrammeOnImmunisation,
    theSickChildImciInfectionsAndNutrition,
    paediatricEmergencies,
    chronicAndLongTermConditionsOfChildhood,
    paediatricPharmacologyAndCalculations,
  ],
  postTest: {
    title: "Post-Test: Paediatric Nursing & Immunisation",
    description:
      "Twenty-five questions drawn at random from the paediatric nursing question pool — growth and development, the hospitalised child, newborn care and the small baby, the EPI schedule, cold chain and AEFI, IMCI, malaria, pneumonia, diarrhoea and malnutrition, paediatric emergencies, injury and poisoning, chronic conditions, cancer, disability, the adolescent, paediatric pharmacology and fluid calculations. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["growth monitoring", "growth chart", "child welfare clinic", "milestone", "vitamin a supplementation", "deworming", "muac", "separation anxiety", "toddler", "school age", "family centred care", "assent", "adolescent confidentiality", "suspected child abuse", "neglect", "newborn care", "apgar", "cord care", "ophthalmia neonatorum", "vitamin k", "exclusive breastfeeding", "breastfeeding attachment", "neonatal hypoglycaemia", "neonatal sepsis", "kangaroo mother care", "low birth weight", "preterm", "neonatal jaundice", "phototherapy", "pyloric stenosis", "bile stained vomiting", "epi schedule", "pentavalent", "bcg", "yellow fever", "herd immunity", "cold chain", "vaccine vial monitor", "reconstitut", "outreach", "anaphylaxis", "pharmacovigilance", "coverage", "notifiable", "measles", "tetanus", "imci", "general danger sign", "severe malaria", "artesunate", "meningitis", "pneumonia", "fast breathing", "chest indrawing", "stridor", "croup", "asthma", "salbutamol", "oral rehydration", "severe dehydration", "skin pinch", "zinc", "severe acute malnutrition", "kwashiorkor", "refeeding", "complementary feeding", "capillary refill", "fluid resuscitation", "febrile convulsion", "diazepam", "status epilepticus", "raised intracranial", "type 1 diabetes", "choking", "paediatric resuscitation", "scald", "parkland", "burn surface area", "poison", "kerosene", "paracetamol overdose", "organophosphate", "snake bite", "rabies", "drowning", "intussusception", "torsion", "sickle cell", "splenic sequestration", "inheritance", "antiretroviral", "disclosure", "rheumatic heart", "nephrotic syndrome", "glomerulonephritis", "epilepsy", "chemotherapy", "neutropeni", "leukaemia", "down syndrome", "cerebral palsy", "disability", "adolescent", "bereavement", "drugs in breastfeeding", "weight based dosing", "mg/kg", "paediatric dose", "decimal", "maintenance fluid", "holliday", "drops per minute", "giving set", "burette", "fluid overload", "nasogastric feed", "dextrose"],
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
