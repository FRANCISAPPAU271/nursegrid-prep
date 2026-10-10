import type { Course } from "../types";
import { foundations } from "./01-foundations";
import { assessment } from "./02-assessment";
import { hypertension } from "./03-hypertension";
import { coronary } from "./04-coronary";
import { heartFailure } from "./05-heart-failure";
import { emergencies } from "./06-emergencies";
import { valvularAndVascular } from "./07-valvular-vascular";
import { pharmacology } from "./08-pharmacology";

export const cardiovascularNursing: Course = {
  slug: "cardiovascular-nursing",
  code: "NGP-CVN-101",
  title: "Cardiovascular Nursing",
  tagline: "From the anatomy of the heart to the drug chart — the cardiac nursing the licensing examination expects you to know.",
  description:
    "A structured course covering cardiac anatomy and physiology, focused assessment, hypertension, coronary artery disease, heart failure, dysrhythmias and cardiac emergencies, rheumatic and valvular disease, vascular disorders and cardiovascular pharmacology. Each lesson is written for Ghanaian nursing and midwifery students, uses the diagrams from the NurseGrid question bank, and ends with practice questions drawn from the same bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🫀",
  level: "Intermediate",
  gradient: "from-rose-600 via-red-500 to-orange-400",
  creditHours: 5,
  dueInDays: 30,
  outcomes: [
    "Explain how the heart generates cardiac output and blood pressure, and link that physiology to the signs of failure and shock.",
    "Perform and document a focused cardiovascular assessment, including accurate blood pressure measurement and recognition of red-flag findings.",
    "Describe the diagnosis, staging and nursing management of hypertension, including lifestyle counselling and adherence support in the Ghanaian context.",
    "Recognise angina and acute coronary syndrome, and deliver the first ten minutes of care safely.",
    "Explain left- and right-sided heart failure and manage fluid, drugs, activity and discharge teaching for a patient with heart failure.",
    "Identify the common dysrhythmias and respond correctly to cardiac arrest, the four types of shock and cardiac tamponade.",
    "Describe rheumatic fever, rheumatic heart disease, infective endocarditis, pericarditis and peripheral vascular disease, and the prevention measures that matter most.",
    "Administer cardiovascular drugs safely — with the right pre-administration check, the right calculation and the right patient teaching.",
  ],
  audience: [
    "Final-year nursing and midwifery students preparing for the N&MC licensing examination",
    "Newly qualified nurses rotating through medical, emergency and cardiac wards",
    "Nurses returning to practice who want a structured cardiovascular refresher",
  ],
  modules: [
    foundations,
    assessment,
    hypertension,
    coronary,
    heartFailure,
    emergencies,
    valvularAndVascular,
    pharmacology,
  ],
  postTest: {
    title: "Post-Test: Cardiovascular Nursing",
    description:
      "Twenty-five questions drawn at random from the cardiovascular question pool. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["cardiac", "cardiovascular", "heart", "myocardial", "angina", "blood pressure", "hypertension", "ecg"],
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
