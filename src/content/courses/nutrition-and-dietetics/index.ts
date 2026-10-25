import type { Course } from "../types";
import { nutrientsAndEnergy } from "./01-nutrients-and-energy";
import { nutritionAssessment } from "./02-nutrition-assessment";
import { lifecycleNutrition } from "./03-lifecycle-nutrition";
import { therapeuticDiets } from "./04-therapeutic-diets";
import { malnutritionInAllForms } from "./05-malnutrition-in-all-forms";
import { foodSafetyAndCommunityNutrition } from "./06-food-safety-and-community-nutrition";
import { nutritionCapstone } from "./07-nutrition-capstone";
import { glossary } from "./glossary";

export const nutritionAndDietetics: Course = {
  slug: "nutrition-and-dietetics",
  title: "Nutrition & Dietetics",
  code: "NGP-NUT-101",
  tagline: "Food as medicine: nutrients, plates, lifecycles, therapeutic diets and safe feeding.",
  description:
    "A curriculum-aligned nutrition course for the Registered General Nursing programme. Seven modules cover eating for life — nutrients and energy (macros, micros, balanced plates); nutrition assessment (anthropometry, BMI/MUAC, diet histories, deficiency signs); lifecycle nutrition (pregnancy, lactation, infancy, childhood, adolescence, old age); therapeutic diets (diabetes, hypertension, kidney, liver, gut, gout, allergy); malnutrition in all forms (marasmus, kwashiorkor, micronutrient gaps, obesity, re-feeding); food safety, hygiene and community nutrition (handling, breastfeeding, school feeding, outreach); plus a nutrition capstone with meal plans, scenarios and exam technique. Each lesson is written for Ghanaian nursing and midwifery students, uses original NurseGrid diagrams, and ends with practice questions drawn from the question bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🥗",
  level: "Foundation",
  gradient: "from-lime-900 via-green-700 to-emerald-400",
  creditHours: 2,
  dueInDays: 30,
  outcomes: [
    "Explain macro- and micronutrient functions with Ghanaian food sources.",
    "Build balanced plates and counsel energy balance for all ages.",
    "Assess nutrition with anthropometry, BMI, MUAC and diet histories.",
    "Advise lifecycle nutrition from pregnancy through old age.",
    "Prescribe therapeutic diets for diabetes, hypertension, kidney, liver and gut disease.",
    "Recognise and manage undernutrition, deficiencies, obesity and re-feeding risk.",
    "Practise food safety and lead community nutrition actions.",
  ],
  audience: [
    "Registered General Nursing students on medical, paediatric, maternity and community postings",
    "Practising nurses and midwives counselling mothers, diabetics, hypertensives and elders on diet",
    "Any nurse preparing for the N&MC licensing examination's nutrition and medical-surgical content",
  ],
  modules: [
    nutrientsAndEnergy,
    nutritionAssessment,
    lifecycleNutrition,
    therapeuticDiets,
    malnutritionInAllForms,
    foodSafetyAndCommunityNutrition,
    nutritionCapstone,
  ],
  postTest: {
    title: "Post-Test: Nutrition & Dietetics",
    description:
      "Twenty-five questions drawn at random from the nutrition pool — macronutrients, energy and fibre; vitamins and minerals with deficiency signs; balanced plates and meal planning; anthropometry, BMI, MUAC and diet histories; pregnancy, lactation, infant, child and elder feeding; therapeutic diets for major diseases; marasmus, kwashiorkor, obesity and re-feeding; food safety and community nutrition; and nutrition scenarios. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["nutrition", "protein", "carbohydrate", "fats", "vitamins", "iron", "anaemia", "BMI", "MUAC", "breastfeeding", "diabetes diet", "hypertension", "kwashiorkor", "marasmus", "obesity"],
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
