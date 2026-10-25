import type { Course } from "../types";
import { foundationsOfBehaviouralScience } from "./01-foundations-of-behavioural-science";
import { growthAndDevelopment } from "./02-growth-and-development";
import { stressCopingAdaptation } from "./03-stress-coping-adaptation";
import { socialDeterminantsCulture } from "./04-social-determinants-culture";
import { behaviourChangeMotivation } from "./05-behaviour-change-motivation";
import { mentalHealthEssentials } from "./06-mental-health-essentials";
import { behaviouralCapstone } from "./07-behavioural-capstone";
import { glossary } from "./glossary";

export const behaviouralSciences: Course = {
  slug: "behavioural-sciences",
  title: "Behavioural Sciences",
  code: "NGP-BEH-101",
  tagline: "Minds, lives, societies: why people heal the way they do.",
  description:
    "A curriculum-aligned behavioural science course for the Registered General Nursing programme. Seven modules cover the human side of healing — foundations (biopsychosocial model, mind-body links, the three lenses); growth and development across the lifespan (attachment, Piaget, Erikson, ageing); stress, coping and adaptation (stress theories, coping, crisis, defence mechanisms); social determinants and culture (SDH, family systems, health beliefs); behaviour change and motivation (health belief model, stages of change, motivational interviewing); mental health essentials (common disorders, stigma, suicide, referral); plus a behavioural capstone with scenarios and exam technique. Each lesson is written for Ghanaian nursing and midwifery students, uses original NurseGrid diagrams, and ends with practice questions drawn from the question bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🧠",
  level: "Foundation",
  gradient: "from-indigo-900 via-violet-700 to-purple-400",
  creditHours: 2,
  dueInDays: 30,
  outcomes: [
    "Apply the biopsychosocial model to every patient story.",
    "Trace growth and development from attachment to ageing.",
    "Assess stress and strengthen coping in crisis.",
    "Map social determinants, family systems and health beliefs.",
    "Move patients through stages of change with MI spirit.",
    "Recognise common mental disorders and refer safely.",
  ],
  audience: [
    "Registered General Nursing students meeting human behaviour on every posting",
    "Practising nurses and midwives counselling patients, families and communities across Ghana",
    "Any nurse preparing for the N&MC licensing examination's behavioural science content",
  ],
  modules: [
    foundationsOfBehaviouralScience,
    growthAndDevelopment,
    stressCopingAdaptation,
    socialDeterminantsCulture,
    behaviourChangeMotivation,
    mentalHealthEssentials,
    behaviouralCapstone,
  ],
  postTest: {
    title: "Post-Test: Behavioural Sciences",
    description:
      "Twenty-five questions drawn at random from the behavioural pool — biopsychosocial model, mind-body links and the three lenses; attachment, Piaget, Erikson and ageing; stress theories, coping, crisis and defence mechanisms; social determinants, family systems, culture and health beliefs; health belief model, stages of change and motivational interviewing; depression, anxiety, psychosis, stigma, suicide and referral; and behavioural scenarios. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["behaviour", "biopsychosocial", "Erikson", "Piaget", "attachment", "stress", "coping", "defence", "determinants", "culture", "motivation", "depression", "anxiety", "stigma", "suicide"],
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
