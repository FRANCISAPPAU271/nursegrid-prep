import type { Course } from "../types";
import { foundations } from "./01-foundations";
import { diabetesFoundations } from "./02-diabetes-foundations";
import { diabetesTreatment } from "./03-diabetes-treatment";
import { diabeticEmergencies } from "./04-diabetic-emergencies";
import { chronicComplications } from "./05-chronic-complications";
import { thyroidAdrenalPituitary } from "./06-thyroid-adrenal-pituitary";
import { pharmacology } from "./07-pharmacology";

export const endocrineAndDiabetesNursing: Course = {
  slug: "endocrine-and-diabetes-nursing",
  code: "NGP-END-104",
  title: "Endocrine & Diabetes Nursing",
  tagline: "Insulin, glucose, thyroid, cortisol and water — the hormones that run the body, the diseases of too much and too little, and the emergencies the examination always asks about.",
  description:
    "A structured course covering endocrine anatomy, physiology and feedback, endocrine assessment and investigations, the types and diagnosis of diabetes mellitus and its burden in Ghana, diet built from local foods, activity, self-monitoring, education and sick-day rules, diabetes in pregnancy from screening to the newborn, non-insulin glucose-lowering drugs, insulin types, regimens, injection technique, storage, hospital and perioperative use, hypoglycaemia, diabetic ketoacidosis and the hyperosmolar hyperglycaemic state, the crashing endocrine patient, microvascular and macrovascular complications and the annual review, the diabetic foot, hypo- and hyperthyroidism with thyroid storm and myxoedema coma, nursing the thyroidectomy patient, Cushing's syndrome, Addison's disease, adrenal crisis and steroid safety, pituitary disorders, diabetes insipidus and SIADH, calcium and parathyroid disorders, and endocrine pharmacology with the calculations nurses make at the bedside. Each lesson is written for Ghanaian nursing and midwifery students, uses the diagrams from the NurseGrid question bank, and ends with practice questions drawn from the same bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🩸",
  level: "Intermediate",
  gradient: "from-amber-600 via-orange-500 to-yellow-400",
  creditHours: 5,
  dueInDays: 30,
  outcomes: [
    "Explain how the hypothalamus, pituitary and target glands regulate each other by negative feedback, and interpret paired hormone results to locate the fault.",
    "Take an endocrine history, examine for the signs of thyroid, adrenal, pituitary and diabetic disease, prepare patients correctly for endocrine tests and recognise results that need action today.",
    "Classify and diagnose diabetes mellitus using the correct thresholds, and deliver education on diet from local foods, activity, self-monitoring and sick-day rules.",
    "Administer non-insulin agents and insulin safely — action profiles, regimens, injection technique, storage, mixing, infusions and perioperative care — and avoid the errors that harm patients.",
    "Recognise and treat hypoglycaemia in adults, children and neonates, manage diabetic ketoacidosis and the hyperosmolar hyperglycaemic state in the correct sequence with the correct monitoring, and discriminate all six endocrine crises at the bedside.",
    "Screen for and manage diabetes in pregnancy, nurse labour, birth and the postpartum period, anticipate the problems of the newborn, and counsel every diabetic woman before conception.",
    "Recognise and treat hypo- and hypercalcaemia — including tingling after thyroid surgery and the hypercalcaemic emergency — and explain how parathyroid hormone, vitamin D and magnesium interact.",
    "Screen for and manage the long-term complications of diabetes, assess and grade the diabetic foot, and care for foot ulcers to prevent amputation.",
    "Recognise and nurse hypothyroidism, hyperthyroidism, thyroid storm, myxoedema coma and the thyroidectomy patient, including the timeline of post-operative complications.",
    "Recognise Cushing's syndrome, adrenal insufficiency and adrenal crisis, teach steroid safety rules, differentiate diabetes insipidus from SIADH, and perform endocrine drug calculations accurately.",
  ],
  audience: [
    "Final-year nursing and midwifery students preparing for the N&MC licensing examination",
    "Newly qualified nurses on medical, surgical, emergency, paediatric and maternity wards where diabetes and steroid therapy are met every shift",
    "Nurses working in or preparing to join diabetes, endocrine and NCD clinics",
  ],
  modules: [
    foundations,
    diabetesFoundations,
    diabetesTreatment,
    diabeticEmergencies,
    chronicComplications,
    thyroidAdrenalPituitary,
    pharmacology,
  ],
  postTest: {
    title: "Post-Test: Endocrine & Diabetes Nursing",
    description:
      "Twenty-five questions drawn at random from the endocrine and diabetes question pool. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["diabet", "insulin", "glucose", "hypoglyc", "thyroid", "adrenal", "steroid", "pituitary", "hormone", "endocrine"],
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
