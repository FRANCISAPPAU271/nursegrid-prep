import type { Course } from "../types";
import { nursingProfession } from "./01-nursing-profession";
import { ethicalPrinciples } from "./02-ethical-principles";
import { codeAndAccountability } from "./03-code-and-accountability";
import { patientsRightsAndAdvocacy } from "./04-patients-rights-and-advocacy";
import { documentationHandoverTeamwork } from "./05-documentation-and-teamwork";
import { lawForNurses } from "./06-law-for-nurses";
import { professionalismCapstone } from "./07-professionalism-capstone";

export const professionalismI: Course = {
  slug: "professionalism-in-nursing-i",
  title: "Professionalism in Nursing I",
  code: "NGP-PRO-101",
  tagline: "The profession, its ethics and its law — what makes a nurse a professional in Ghana.",
  description:
    "The first of two professionalism courses, aligned to the Nursing and Midwifery Council's Registered General Nursing curriculum. Seven modules cover the nursing profession — what makes nursing a profession, its history in Ghana, its cadres and settings, and the regulator versus the association; regulation and the licence — the NMC's mandate, indexing, training, the licensure examination, registration with the PIN, renewal with CPD, and fitness-to-practice; ethical principles — autonomy, beneficence, non-maleficence, justice, fidelity and veracity with values and moral distress; the code of conduct and accountability — the NMC code, scope of practice, accountability and delegation, negligence and consent; patients' rights and advocacy — the rights charter, privacy and confidentiality, vulnerable patients and the nurse as advocate; documentation, handover and teamwork — legal documentation, SBAR handover, incident reporting and interprofessional collaboration; and the law for nurses — Ghana's legal basics, tort and crime, the key Acts, whistleblowing and giving evidence; plus a capstone of ethical dilemmas with exam technique. Each lesson is written for Ghanaian nursing and midwifery students, uses original NurseGrid diagrams, and ends with practice questions drawn from the question bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "⚖️",
  level: "Foundation",
  gradient: "from-indigo-900 via-indigo-700 to-violet-400",
  creditHours: 2,
  dueInDays: 30,
  outcomes: [
    "Explain what makes nursing a profession and trace its history, cadres and settings in Ghana.",
    "Describe NMC regulation: indexing, licensure, registration, renewal, CPD and fitness-to-practice.",
    "Apply the six ethical principles with professional values to bedside situations.",
    "Explain the code of conduct, scope of practice, accountability, delegation, negligence and consent.",
    "Uphold patients' rights, privacy and confidentiality, and advocate for vulnerable patients.",
    "Document legally, hand over with SBAR, report incidents and collaborate interprofessionally.",
    "Outline Ghana's legal basics for nurses, the key Acts, whistleblowing and giving evidence.",
  ],
  audience: [
    "First-year Registered General Nursing students and final-year students revising professionalism for the N&MC licensing examination",
    "Enrolled nursing and nurse assistant students who need the ethics, code and law behind the uniform",
    "Any nurse or midwife preparing for NMC processes — licensure, renewal, verification or tribunal",
  ],
  modules: [
    nursingProfession,
    ethicalPrinciples,
    codeAndAccountability,
    patientsRightsAndAdvocacy,
    documentationHandoverTeamwork,
    lawForNurses,
    professionalismCapstone,
  ],
  postTest: {
    title: "Post-Test: Professionalism in Nursing I",
    description:
      "Twenty-five questions drawn at random from the professionalism pool — the profession, its history, cadres and settings; NMC regulation, licensure, registration and discipline; the six ethical principles; the code, scope, accountability and negligence; patients' rights, confidentiality and advocacy; documentation, handover and teamwork; and Ghana's law for nurses with dilemmas. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["professionalism", "NMC", "licence", "registration", "ethics", "autonomy", "consent", "accountability", "negligence", "confidentiality", "advocacy", "documentation", "SBAR", "law", "dilemma"],
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
};
