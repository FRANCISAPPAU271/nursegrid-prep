import type { Course } from "../types";
import { foundationsOfNursingInformatics } from "./01-foundations-of-nursing-informatics";
import { ehrDocumentation } from "./02-ehr-documentation";
import { privacySecurityEthics } from "./03-privacy-security-ethics";
import { decisionSupportSafety } from "./04-decision-support-safety";
import { evidenceDashboardsQuality } from "./05-evidence-dashboards-quality";
import { digitalProfessionalism } from "./06-digital-professionalism";
import { informaticsCapstone } from "./07-informatics-capstone";

export const nursingInformatics: Course = {
  slug: "nursing-informatics",
  title: "Nursing Informatics",
  code: "NGP-INF-101",
  tagline: "Data with a heartbeat: records, devices, decisions and digital care.",
  description:
    "A curriculum-aligned informatics course for the Registered General Nursing programme. Seven modules cover caring through computers — foundations of nursing informatics (DIKW, roles, competencies); electronic health records and documentation (charting, orders, downtime); data privacy, security and ethics (confidentiality, passwords, Ghana's Data Protection Act); clinical decision support and safety (alerts, barcoding, telehealth, mHealth); evidence, dashboards and quality data (searching, appraising, run charts); digital professionalism (social media, AI, equity, change leadership); plus an informatics capstone with scenarios and exam technique. Each lesson is written for Ghanaian nursing and midwifery students, uses original NurseGrid diagrams, and ends with practice questions drawn from the question bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "💻",
  level: "Intermediate",
  gradient: "from-slate-900 via-sky-700 to-cyan-400",
  creditHours: 2,
  dueInDays: 30,
  outcomes: [
    "Explain the DIKW chain and the nurse's role in every link.",
    "Document safely and completely in electronic health records.",
    "Protect patient privacy under Ghana's Data Protection Act.",
    "Use alerts, barcoding, telehealth and mHealth tools wisely.",
    "Find and appraise evidence; read dashboards and run charts.",
    "Practise digital professionalism and lead informatics change.",
  ],
  audience: [
    "Registered General Nursing students meeting digital documentation on every posting",
    "Practising nurses and midwives charting in LHIMS, DHIMS2, eTracker and paper hybrids",
    "Any nurse preparing for the N&MC licensing examination's informatics and records content",
  ],
  modules: [
    foundationsOfNursingInformatics,
    ehrDocumentation,
    privacySecurityEthics,
    decisionSupportSafety,
    evidenceDashboardsQuality,
    digitalProfessionalism,
    informaticsCapstone,
  ],
  postTest: {
    title: "Post-Test: Nursing Informatics",
    description:
      "Twenty-five questions drawn at random from the informatics pool — DIKW, definitions, roles and competencies; Ghana's digital health systems (LHIMS, DHIMS2, eTracker, mHealth); electronic documentation, orders and downtime; privacy, security and Ghana's Data Protection Act; alerts, barcoding, telehealth and safety; evidence searching, dashboards and run charts; digital professionalism, AI and equity; and informatics scenarios. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["informatics", "DIKW", "documentation", "EHR", "DHIMS2", "LHIMS", "privacy", "confidentiality", "telehealth", "mHealth", "alerts", "dashboard", "evidence", "social media", "AI"],
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
