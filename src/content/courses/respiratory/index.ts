import type { Course } from "../types";
import { foundations } from "./01-foundations";
import { oxygenAndAirway } from "./02-oxygen-airway";
import { acidBase } from "./03-acid-base";
import { obstructive } from "./04-obstructive";
import { infectionsAndPleura } from "./05-infections-pleura";
import { emergencies } from "./06-emergencies";
import { pharmacology } from "./07-pharmacology";

export const respiratoryNursing: Course = {
  slug: "respiratory-nursing",
  code: "NGP-RSP-102",
  title: "Respiratory Nursing",
  tagline: "Oxygen, airways, blood gases and the chest diseases that fill Ghanaian wards — taught in the order you meet them at the bedside.",
  description:
    "A structured course covering respiratory anatomy and physiology, focused chest assessment, oxygen therapy and airway care, recognising deterioration, arterial blood gas interpretation and acid–base balance, asthma, COPD, pneumonia, tuberculosis, pleural disease and chest drains, pulmonary embolism, pneumothorax, respiratory failure, choking, anaphylaxis and respiratory pharmacology with calculations. Each lesson is written for Ghanaian nursing and midwifery students, uses the diagrams from the NurseGrid question bank, and ends with practice questions drawn from the same bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🫁",
  level: "Intermediate",
  gradient: "from-sky-600 via-cyan-500 to-teal-400",
  creditHours: 4,
  dueInDays: 30,
  outcomes: [
    "Explain ventilation, diffusion, perfusion and gas transport, and link each to the disease that disrupts it.",
    "Perform and document a focused respiratory assessment and recognise the early signs of deterioration in adults and children.",
    "Prescribe-to-target oxygen therapy safely — choosing the device, humidifying, monitoring and weaning — and care for the airway with suction, adjuncts and tracheostomy care.",
    "Interpret an arterial blood gas in six steps and plan nursing care for each of the four acid–base disturbances.",
    "Grade and treat an acute asthma attack and manage a COPD exacerbation with controlled oxygen, bronchodilators, steroids and non-invasive ventilation.",
    "Assess pneumonia with CURB-65, screen, diagnose and support six months of tuberculosis treatment, and apply droplet and airborne precautions correctly.",
    "Care for a patient with a pleural effusion or chest drain and recognise pulmonary embolism, tension pneumothorax, respiratory failure, choking and anaphylaxis as the emergencies they are.",
    "Administer respiratory drugs safely with correct inhaler technique, monitoring and dose calculations.",
  ],
  audience: [
    "Final-year nursing and midwifery students preparing for the N&MC licensing examination",
    "Newly qualified nurses rotating through medical, emergency, paediatric and chest wards",
    "Nurses in TB and HIV clinics, and anyone who gives oxygen and needs to do it well",
  ],
  modules: [
    foundations,
    oxygenAndAirway,
    acidBase,
    obstructive,
    infectionsAndPleura,
    emergencies,
    pharmacology,
  ],
  postTest: {
    title: "Post-Test: Respiratory Nursing",
    description:
      "Twenty-five questions drawn at random from the respiratory question pool. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["respiratory", "breathing", "lung", "oxygen", "airway", "asthma", "tuberculosis", "pneumonia", "dyspnoea", "cough"],
  },
  evaluation: {
    title: "Course Evaluation",
    description: "Your feedback shapes the next version of this course. The evaluation takes about one minute and is required before your certificate is issued.",
    items: [
      { id: "objectives", prompt: "The course met the stated learning outcomes." },
      { id: "content", prompt: "The content was accurate, clear and relevant to nursing practice in Ghana." },
      { id: "diagrams", prompt: "The diagrams and tables helped me understand the material." },
      { id: "questions", prompt: "The practice questions and post-test reflected what was taught." },
      { id: "recommend", prompt: "I would recommend this course to a colleague or classmate." },
    ],
    commentPrompt: "What should we add, remove or explain better?",
  },
};
