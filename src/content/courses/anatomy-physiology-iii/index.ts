import type { Course } from "../types";
import { endocrineSystem } from "./01-endocrine-system";
import { reproductiveAnatomy } from "./02-reproductive-anatomy";
import { menstrualCycleAndContraception } from "./03-cycle-fertilisation-contraception";
import { pregnancyAndBirth } from "./04-pregnancy-and-birth";
import { geneticsAndDevelopment } from "./05-genetics-and-development";
import { specialSenses } from "./06-special-senses";
import { bedsideApplicationIII } from "./07-bedside-application";
import { glossary } from "./glossary";

export const anatomyPhysiologyIII: Course = {
  slug: "human-anatomy-and-physiology-iii",
  title: "Human Anatomy and Physiology III",
  code: "NGP-ANP-103",
  tagline: "Hormones, reproduction, pregnancy, genetics and the senses — taught the way nurses and midwives use them.",
  description:
    "The third of three anatomy and physiology courses, aligned to the Nursing and Midwifery Council's Registered General Nursing curriculum. Seven modules cover the endocrine system — hormone action and feedback, the pituitary, thyroid, adrenals and pancreas with diabetes and its emergencies; the reproductive systems — male and female anatomy with the breast; the menstrual cycle with fertilisation and contraception; pregnancy, birth and the postnatal period with newborn adaptation; genetics and development — inheritance, embryology and congenital conditions; the special senses — the eye, the ear, smell and taste with their bedside tests; and bedside application — endocrine emergencies, obstetric red flags, neonatal resuscitation readiness and SBAR escalation. Each lesson is written for Ghanaian nursing and midwifery students, uses original NurseGrid diagrams, and ends with practice questions drawn from the question bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🧬",
  level: "Foundation",
  gradient: "from-violet-800 via-purple-700 to-fuchsia-400",
  creditHours: 3,
  dueInDays: 30,
  outcomes: [
    "Explain hormone action and feedback, and describe the pituitary, thyroid, adrenal and pancreatic disorders with their emergencies.",
    "Describe male and female reproductive anatomy with the breast and its examination.",
    "Explain the menstrual cycle, fertilisation and contraceptive mechanisms.",
    "Describe pregnancy physiology, labour stages, postnatal changes and newborn adaptation.",
    "Explain inheritance patterns and embryology, and list common congenital conditions with their screening.",
    "Describe the eye, ear, smell and taste with bedside tests and red flags.",
    "Recognize endocrine and obstetric emergencies and the deteriorating neonate, and escalate with SBAR.",
  ],
  audience: [
    "First-year Registered General Nursing students and final-year students revising the foundations for the N&MC licensing examination",
    "Midwifery and enrolled nursing students who need hormones, reproduction and pregnancy physiology in plain language tied to care",
    "Any nurse or midwife who wants the physiology behind endocrine, reproductive and neonatal emergencies",
  ],
  modules: [
    endocrineSystem,
    reproductiveAnatomy,
    menstrualCycleAndContraception,
    pregnancyAndBirth,
    geneticsAndDevelopment,
    specialSenses,
    bedsideApplicationIII,
  ],
  postTest: {
    title: "Post-Test: Human Anatomy and Physiology III",
    description:
      "Twenty-five questions drawn at random from the anatomy and physiology pool — hormones, feedback and the glands; diabetes and its emergencies; reproductive anatomy; the menstrual cycle, fertilisation and contraception; pregnancy, labour, postnatal and newborn adaptation; inheritance, embryology and congenital conditions; the eye, ear, smell and taste; and bedside recognition of endocrine, obstetric and neonatal emergencies. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["anatomy", "physiology", "hormone", "pituitary", "thyroid", "adrenal", "diabetes", "insulin", "reproductive", "menstrual", "pregnancy", "labour", "genetics", "eye", "ear"],
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
