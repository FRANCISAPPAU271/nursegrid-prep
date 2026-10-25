import type { Course } from "../types";
import { foundationsOfTcam } from "./01-foundations-of-tcam";
import { ghanaianTraditionalMedicine } from "./02-ghanaian-traditional-medicine";
import { herbalMedicineSafety } from "./03-herbal-medicine-safety";
import { complementaryTherapies } from "./04-complementary-therapies";
import { pluralistCounselling } from "./05-counselling-pluralist-patients";
import { integratingPractice } from "./06-integrating-tcam-into-practice";
import { bedsideCapstone } from "./07-bedside-capstone";
import { glossary } from "./glossary";

export const tcam: Course = {
  slug: "tcam",
  title: "Traditional, Complementary & Alternative Medicine",
  code: "NGP-TCM-101",
  tagline: "Two medicines, one patient: herbs, healers and hospitals together.",
  description:
    "A curriculum-aligned TCAM course for the Registered General Nursing programme. Seven modules cover nursing across medical worlds — foundations (definitions, WHO strategy, why nurses must know); Ghanaian traditional medicine (herbalists, TBAs, bone-setters, spiritualists, common remedies); herbal medicine safety (uses, interactions, toxicity, pregnancy dangers); complementary therapies (massage, relaxation, faith healing, supplements); counselling pluralist patients (Kleinman, disclosure, negotiation, documentation); ethics, regulation and referral (Act 575, TMPC, FDA registration, harmful practices); plus a TCAM capstone with scenarios and exam technique. Each lesson is written for Ghanaian nursing and midwifery students, uses original NurseGrid diagrams, and ends with practice questions drawn from the question bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🌿",
  level: "Intermediate",
  gradient: "from-stone-900 via-amber-700 to-yellow-400",
  creditHours: 2,
  dueInDays: 30,
  outcomes: [
    "Define traditional, complementary, alternative and integrative medicine.",
    "Describe Ghana's traditional practitioners, remedies and beliefs.",
    "Screen herbal use for interactions, toxicity and pregnancy risk.",
    "Offer safe complementary therapies within nursing scope.",
    "Counsel pluralist patients with Kleinman negotiation.",
    "Apply Act 575, TMPC/FDA rules and refer safely.",
  ],
  audience: [
    "Registered General Nursing students meeting traditional medicine on every posting",
    "Practising nurses and midwives caring for herb-using, pluralist patients across Ghana",
    "Any nurse preparing for the N&MC licensing examination's TCAM content",
  ],
  modules: [
    foundationsOfTcam,
    ghanaianTraditionalMedicine,
    herbalMedicineSafety,
    complementaryTherapies,
    pluralistCounselling,
    integratingPractice,
    bedsideCapstone,
  ],
  postTest: {
    title: "Post-Test: Traditional, Complementary & Alternative Medicine",
    description:
      "Twenty-five questions drawn at random from the TCAM pool — definitions, WHO strategy and why nurses must know; Ghanaian practitioners, remedies and beliefs; herbal uses, interactions, toxicity and pregnancy dangers; massage, relaxation, faith healing and supplements; Kleinman, disclosure, negotiation and documentation; Act 575, TMPC, FDA registration, harmful practices and referral; and TCAM scenarios. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["TCAM", "traditional", "herbal", "healers", "Act 575", "TMPC", "interactions", "toxicity", "pregnancy", "massage", "faith", "Kleinman", "negotiation", "referral", "pluralism"],
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
