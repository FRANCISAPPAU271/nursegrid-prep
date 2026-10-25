import type { Course } from "../types";
import { foundations } from "./01-foundations";
import { fluidImbalance } from "./02-fluid-imbalance";
import { electrolytes } from "./03-electrolytes";
import { urinaryTract } from "./04-urinary-tract";
import { kidneyDisease } from "./05-kidney-disease";
import { renalReplacement } from "./06-renal-replacement";
import { pharmacology } from "./07-pharmacology";
import { glossary } from "./glossary";

export const renalFluidElectrolyteNursing: Course = {
  slug: "renal-fluid-and-electrolyte-nursing",
  code: "NGP-RFE-103",
  title: "Renal, Fluid & Electrolyte Nursing",
  tagline: "Water, salt, potassium and the kidneys that balance them — the fluid and electrolyte nursing that the licensing examination tests hardest.",
  description:
    "A structured course covering renal anatomy and physiology, body fluid compartments and their regulation, renal and fluid assessment, dehydration and oral and intravenous rehydration in children and adults, fluid overload and restriction, intravenous fluid therapy and infusion calculations, sodium, potassium, calcium, magnesium and phosphate imbalances, urinary tract infection and catheter care, retention, incontinence, prostate disease, stones and schistosomiasis, glomerulonephritis and nephrotic syndrome, acute kidney injury, chronic kidney disease, dialysis and transplantation, and renal pharmacology. Each lesson is written for Ghanaian nursing and midwifery students, uses the diagrams from the NurseGrid question bank, and ends with practice questions drawn from the same bank. The course also includes a drill on responding to dialysis emergencies. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "💧",
  level: "Intermediate",
  gradient: "from-indigo-600 via-blue-500 to-cyan-400",
  creditHours: 4,
  dueInDays: 30,
  outcomes: [
    "Explain how the nephron makes urine and how the kidney regulates volume, electrolytes, acid–base, blood pressure, red cells and bone — and link each to a complication of kidney failure.",
    "Describe the body's fluid compartments and the forces that move water, and predict where each intravenous fluid will go.",
    "Assess fluid status, collect and interpret urine specimens, keep an accurate fluid balance chart and act on abnormal urine output, creatinine and electrolytes.",
    "Classify and treat dehydration in children and adults using WHO Plans A, B and C and safe intravenous resuscitation, and recognise and respond to fluid overload.",
    "Recognise and manage sodium, potassium, calcium, magnesium and phosphate imbalances, including the emergency treatment of hyperkalaemia and safe potassium replacement.",
    "Prevent and manage urinary tract infection, catheter-associated infection, retention, incontinence, prostate disease, stones and schistosomiasis.",
    "Differentiate nephritic and nephrotic syndromes, acute kidney injury and chronic kidney disease, and deliver the nursing care, teaching and prevention each requires.",
    "Care for patients on haemodialysis, peritoneal dialysis and after transplantation, respond to dialysis emergencies, and administer renal and fluid drugs safely with correct calculations and renal dose adjustment.",
  ],
  audience: [
    "Final-year nursing and midwifery students preparing for the N&MC licensing examination",
    "Newly qualified nurses on medical, surgical, paediatric and emergency wards where fluids and electrolytes are managed every shift",
    "Nurses working in or preparing to join renal and dialysis units",
  ],
  modules: [
    foundations,
    fluidImbalance,
    electrolytes,
    urinaryTract,
    kidneyDisease,
    renalReplacement,
    pharmacology,
  ],
  postTest: {
    title: "Post-Test: Renal, Fluid & Electrolyte Nursing",
    description:
      "Twenty-five questions drawn at random from the renal, fluid and electrolyte question pool. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["kidney", "renal", "fluid", "electrolyte", "potassium", "sodium", "dehydrat", "urinary", "dialysis", "diuretic"],
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
  glossary,
};
