import type { Course } from "../types";
import { leadershipAndWardManagement } from "./01-leadership-and-ward-management";
import { teachingMentorshipPreceptorship } from "./02-teaching-mentorship-preceptorship";
import { researchAndEvidenceBasedPractice } from "./03-research-and-evidence-based-practice";
import { qualityImprovementAndPatientSafety } from "./04-quality-improvement-and-patient-safety";
import { healthSystemsAndPolicyInGhana } from "./05-health-systems-and-policy-in-ghana";
import { careerEntrepreneurshipAndImage } from "./06-career-entrepreneurship-and-image";
import { leadershipCapstone } from "./07-leadership-capstone";
import { glossary } from "./glossary";

export const professionalismII: Course = {
  slug: "professionalism-in-nursing-ii",
  title: "Professionalism in Nursing II",
  code: "NGP-PRO-102",
  tagline: "From bedside nurse to leader: leading wards, teaching juniors, using evidence, improving quality, shaping policy.",
  description:
    "The second professionalism course, aligned to the Nursing and Midwifery Council's Registered General Nursing curriculum. Seven modules carry the professional nurse beyond the bedside — leadership and ward management (styles, emotional intelligence, rosters, supervision, conflict); teaching, mentorship and preceptorship (adult learning, clinical teaching, feedback); research and evidence-based practice (the research process, EBP steps, critiquing, guidelines); quality improvement and patient safety (PDSA cycles, audits, safety culture); health systems and policy in Ghana (GHS structure, NHIS, financing, UHC); career growth, entrepreneurship and professional image (pathways, further education, private practice, associations); plus a leadership capstone with change projects and exam technique. Each lesson is written for Ghanaian nursing and midwifery students, uses original NurseGrid diagrams, and ends with practice questions drawn from the question bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🧭",
  level: "Intermediate",
  gradient: "from-emerald-900 via-emerald-700 to-teal-400",
  creditHours: 2,
  dueInDays: 30,
  outcomes: [
    "Compare leadership styles and apply situational leadership with emotional intelligence.",
    "Manage a ward: rosters, supervision, delegation, supplies and conflict resolution.",
    "Teach, mentor and precept students and juniors with adult-learning methods and feedback.",
    "Explain the research process and apply the five steps of evidence-based practice.",
    "Run quality-improvement cycles and audits that strengthen patient safety culture.",
    "Describe Ghana's health system, financing, NHIS and the nurse's policy voice.",
    "Plan career growth, further education and ethical entrepreneurship with a proud professional image.",
  ],
  audience: [
    "Second-year and final-year Registered General Nursing students preparing for leadership roles and the N&MC licensing examination",
    "Practising enrolled and registered nurses moving into ward-in-charge, mentorship or quality roles",
    "Any nurse or midwife planning postgraduate study, private practice or health-policy engagement",
  ],
  modules: [
    leadershipAndWardManagement,
    teachingMentorshipPreceptorship,
    researchAndEvidenceBasedPractice,
    qualityImprovementAndPatientSafety,
    healthSystemsAndPolicyInGhana,
    careerEntrepreneurshipAndImage,
    leadershipCapstone,
  ],
  postTest: {
    title: "Post-Test: Professionalism in Nursing II",
    description:
      "Twenty-five questions drawn at random from the professionalism pool — leadership styles and ward management; teaching, mentorship and feedback; research and evidence-based practice; quality improvement and patient safety; Ghana's health system, NHIS and policy; career growth, entrepreneurship and image; and leadership scenarios. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["leadership", "management", "mentorship", "preceptorship", "research", "EBP", "quality", "PDSA", "patient safety", "GHS", "NHIS", "policy", "career", "entrepreneurship"],
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
