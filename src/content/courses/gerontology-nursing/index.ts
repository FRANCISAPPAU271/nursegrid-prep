import type { Course } from "../types";
import { ageingProcess } from "./01-ageing-process";
import { geriatricAssessment } from "./02-geriatric-assessment";
import { threeDsAndChronicConditions } from "./03-three-ds-and-chronic-conditions";
import { medicationsAndPolypharmacy } from "./04-medications-and-polypharmacy";
import { psychosocialAbuseAndEndOfLife } from "./05-psychosocial-abuse-and-end-of-life";
import { nutritionMobilityAndRehabilitation } from "./06-nutrition-mobility-and-rehabilitation";
import { gerontologyCapstone } from "./07-gerontology-capstone";
import { glossary } from "./glossary";

export const gerontologyNursing: Course = {
  slug: "gerontology-nursing",
  title: "Gerontology Nursing",
  code: "NGP-GRN-101",
  tagline: "Grey hair, full dignity: assessing, protecting and promoting health in older adults.",
  description:
    "A curriculum-aligned gerontology course for the Registered General Nursing programme. Seven modules follow the older adult's journey — the ageing process (theories, physiological changes, healthy ageing); comprehensive geriatric assessment (frailty, function, falls, cognition, mood); the 3Ds and chronic conditions (dementia, delirium, depression, incontinence, pain, sensory loss); medications and polypharmacy (Beers criteria, adherence, deprescribing); psychosocial care, family and elder abuse (loneliness, caregivers, safeguarding, end-of-life); nutrition, mobility and rehabilitation (diet, exercise, assistive devices, home safety); plus a gerontology capstone with scenarios and exam technique. Each lesson is written for Ghanaian nursing and midwifery students, uses original NurseGrid diagrams, and ends with practice questions drawn from the question bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🧓",
  level: "Intermediate",
  gradient: "from-amber-900 via-amber-700 to-yellow-400",
  creditHours: 2,
  dueInDays: 30,
  outcomes: [
    "Explain biological and psychosocial theories of ageing with physiological changes by system.",
    "Promote healthy ageing with screening, vaccination and lifestyle counselling.",
    "Perform comprehensive geriatric assessment: frailty, function, falls, cognition and mood.",
    "Distinguish dementia, delirium and depression and manage chronic geriatric conditions.",
    "Review polypharmacy with Beers criteria and support adherence and deprescribing.",
    "Support families and caregivers, detect elder abuse, and provide end-of-life care.",
    "Advise on nutrition, mobility, assistive devices and home safety for older adults.",
  ],
  audience: [
    "Registered General Nursing students meeting older adults on wards, OPD and community postings",
    "Practising nurses and midwives caring for ageing parents, medical-ward elders and CHPS communities",
    "Any nurse preparing for the N&MC licensing examination's gerontology and medical-surgical content",
  ],
  modules: [
    ageingProcess,
    geriatricAssessment,
    threeDsAndChronicConditions,
    medicationsAndPolypharmacy,
    psychosocialAbuseAndEndOfLife,
    nutritionMobilityAndRehabilitation,
    gerontologyCapstone,
  ],
  postTest: {
    title: "Post-Test: Gerontology Nursing",
    description:
      "Twenty-five questions drawn at random from the gerontology pool — theories and physiology of ageing; healthy ageing and screening; comprehensive geriatric assessment; dementia, delirium and depression; incontinence, pain and sensory loss; polypharmacy and Beers criteria; caregivers, elder abuse and end-of-life; nutrition, mobility and home safety; and gerontology scenarios. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["ageing", "elderly", "geriatric", "frailty", "dementia", "delirium", "falls", "polypharmacy", "Beers", "incontinence", "caregiver", "elder abuse", "screening", "function"],
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
