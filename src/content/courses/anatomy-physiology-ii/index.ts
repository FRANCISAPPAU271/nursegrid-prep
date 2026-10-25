import type { Course } from "../types";
import { blood } from "./01-blood";
import { heart } from "./02-heart";
import { vesselsShockAndLymphatics } from "./03-vessels-shock-and-lymphatics";
import { respiratorySystem } from "./04-respiratory-system";
import { urinarySystem } from "./05-urinary-system";
import { nervousSystem } from "./06-nervous-system";
import { bedsideApplicationII } from "./07-bedside-application";
import { glossary } from "./glossary";

export const anatomyPhysiologyII: Course = {
  slug: "human-anatomy-and-physiology-ii",
  title: "Human Anatomy and Physiology II",
  code: "NGP-ANP-102",
  tagline: "The transport and control systems — blood, heart, vessels, lungs, kidneys and nerves — taught the way nurses use them.",
  description:
    "The second of three anatomy and physiology courses, aligned to the Nursing and Midwifery Council's Registered General Nursing curriculum. Seven modules cover blood — plasma and the formed elements, red cells and haemoglobin, white cells and the differential, platelets, haemostasis and the clotting cascade, blood groups and safe transfusion; the heart — chambers, valves and coronary supply, the conduction system, the cardiac cycle and heart sounds, cardiac output and its control; blood vessels and lymphatics — arteries, capillaries and veins, blood pressure and its regulation, the circulation through the body, shock in its four forms, and the lymphatic system with immunity; the respiratory system — the airways, the alveoli, the mechanics of breathing, gas exchange and transport, and the control of ventilation; the urinary system — the kidneys and the nephron, glomerular filtration, tubular reabsorption and secretion, urine concentration, fluid and electrolyte balance, and acid-base control; the nervous system — neurones and glia, the central and peripheral divisions, reflexes, the autonomic balance of sympathetic and parasympathetic, and the cranial nerves at a glance; and bedside application — vital signs and the ABCs, recognizing shock, respiratory distress, acute kidney injury and altered consciousness, and escalating with SBAR. Each lesson is written for Ghanaian nursing and midwifery students, uses original NurseGrid diagrams, and ends with practice questions drawn from the question bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🩸",
  level: "Foundation",
  gradient: "from-rose-800 via-red-700 to-amber-400",
  creditHours: 3,
  dueInDays: 30,
  outcomes: [
    "Describe blood composition, red cells and haemoglobin, the white-cell differential, platelets and haemostasis, and apply blood-group science to safe transfusion.",
    "Describe the chambers, valves, conduction system and cardiac cycle, and explain cardiac output and its control.",
    "Compare arteries, capillaries and veins, explain blood-pressure regulation and the four forms of shock, and describe lymphatic drainage and immunity.",
    "Trace the airways to the alveoli, explain the mechanics of breathing, gas exchange and transport, and the control of ventilation.",
    "Describe the nephron and urine formation, and explain fluid, electrolyte and acid-base balance with the nurse's monitoring role.",
    "Describe neurones, the central and peripheral divisions, reflexes and the autonomic nervous system, and list the cranial nerves' bedside tests.",
    "Take and interpret vital signs, recognize shock, respiratory distress, acute kidney injury and altered consciousness, and escalate with SBAR.",
  ],
  audience: [
    "First-year Registered General Nursing students and final-year students revising the foundations for the N&MC licensing examination",
    "Nurse assistant and enrolled nursing students who need the body's transport and control systems in plain language tied to bedside care",
    "Any nurse or midwife who wants the physiology behind the observations — why the numbers move and what to do when they do",
  ],
  modules: [
    blood,
    heart,
    vesselsShockAndLymphatics,
    respiratorySystem,
    urinarySystem,
    nervousSystem,
    bedsideApplicationII,
  ],
  postTest: {
    title: "Post-Test: Human Anatomy and Physiology II",
    description:
      "Twenty-five questions drawn at random from the anatomy and physiology pool — blood, haemostasis and transfusion; the heart, conduction and cardiac output; vessels, blood pressure, shock and lymphatics; the airways, breathing mechanics, gas exchange and transport; the nephron, urine formation, fluids, electrolytes and acid-base; neurones, the divisions of the nervous system, reflexes and the autonomic balance; and bedside recognition of shock, respiratory distress, kidney injury and altered consciousness. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["anatomy", "physiology", "blood", "haemoglobin", "transfusion", "heart", "cardiac output", "blood pressure", "shock", "lymphatic", "breathing", "alveoli", "nephron", "electrolyte", "neurone", "autonomic", "vital signs"],
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
