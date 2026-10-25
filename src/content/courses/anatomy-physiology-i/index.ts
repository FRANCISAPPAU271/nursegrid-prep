import type { Course } from "../types";
import { organizationPositionsPlanesCavities } from "./01-organization-positions-planes-cavities";
import { cellsDivisionAndTissues } from "./02-cells-division-and-tissues";
import { skeletalSystemAndJoints } from "./03-skeletal-system-and-joints";
import { muscularSystem } from "./04-muscular-system";
import { digestiveSystem } from "./05-digestive-system";
import { integumentarySystem } from "./06-integumentary-system";
import { bedsideApplication } from "./07-bedside-application";
import { glossary } from "./glossary";

export const anatomyPhysiologyI: Course = {
  slug: "human-anatomy-and-physiology-i",
  title: "Human Anatomy and Physiology I",
  code: "NGP-ANP-101",
  tagline: "The body's building blocks and scaffolding — cells, tissues, bones, muscles, the gut and the skin — taught the way nurses use them.",
  description:
    "The first of three anatomy and physiology courses, aligned to the Nursing and Midwifery Council's Registered General Nursing curriculum. Seven modules cover the organized body — what anatomy and physiology study, the six levels of organization, the eleven organ systems, the survival needs and homeostasis with negative and positive feedback; the anatomical position, directional terms, body planes and sections, and the dorsal and ventral cavities with their membranes; cells and tissues — the structures of the cell and what each does, mitosis and meiosis, and the four tissue types with their locations; the skeletal system — bone shapes and markings, the microscopic and gross structure of bone, ossification and remodelling, calcium balance, the axial and appendicular divisions, and joints by structure and movement with the common disorders; the muscular system — the three muscle types, the neuromuscular junction and sliding-filament contraction, energy for contraction, and the major skeletal muscles with their actions; the digestive system — the tract from mouth to anus with the accessory organs, peristalsis and segmentation, and the digestion and absorption of carbohydrates, proteins and fats with their enzymes; the integumentary system — epidermis, dermis and hypodermis, hair, nails and glands, the functions of the skin, wound healing, burns and thermoregulation; and bedside application — inspecting, palpating and testing the musculoskeletal, digestive and integumentary systems, recognizing the abnormalities that matter, and keeping the patient safe and comfortable throughout. Each lesson is written for Ghanaian nursing and midwifery students, uses original NurseGrid diagrams, and ends with practice questions drawn from the question bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🦴",
  level: "Foundation",
  gradient: "from-slate-700 via-sky-700 to-cyan-400",
  creditHours: 3,
  dueInDays: 30,
  outcomes: [
    "Explain the levels of structural organization, the organ systems, the survival needs and homeostasis, and use the anatomical position, directional terms, planes and cavities correctly in description and documentation.",
    "Describe the cell and its organelles, compare mitosis with meiosis, and classify the four tissue types with their locations and the membranes they form.",
    "Describe bone structure, formation and remodelling, divide the skeleton into axial and appendicular bones, classify joints, and explain fractures, osteoporosis, arthritis and rickets in structural terms.",
    "Compare skeletal, cardiac and smooth muscle, explain neuromuscular excitation and sliding-filament contraction, and name the major skeletal muscles with their actions.",
    "Trace the digestive tract and its accessory organs, explain motility and the roles of enzymes, bile and absorption, and describe how carbohydrates, proteins and fats are digested and absorbed.",
    "Describe the layers of the skin and its appendages, explain protection, sensation and thermoregulation, and classify burns and the phases of wound healing.",
    "Perform a basic bedside assessment of the musculoskeletal, digestive and integumentary systems, recognize the abnormalities that need escalation, and maintain safety and comfort throughout.",
  ],
  audience: [
    "First-year Registered General Nursing students and final-year students revising the foundations for the N&MC licensing examination",
    "Nurse assistant and enrolled nursing students who need the body's structure and function in plain language tied to bedside care",
    "Any nurse or midwife who wants the anatomy behind the procedures — why the landmark sits where it sits and what fails when a structure fails",
  ],
  modules: [
    organizationPositionsPlanesCavities,
    cellsDivisionAndTissues,
    skeletalSystemAndJoints,
    muscularSystem,
    digestiveSystem,
    integumentarySystem,
    bedsideApplication,
  ],
  postTest: {
    title: "Post-Test: Human Anatomy and Physiology I",
    description:
      "Twenty-five questions drawn at random from the anatomy and physiology pool — levels of organization, organ systems and homeostasis; the anatomical position, directional terms, planes and cavities; cells, mitosis and meiosis, tissues and membranes; bone structure, formation and remodelling, the skeleton, joints and their disorders; muscle types, contraction and the major muscles; the digestive tract, enzymes and absorption; the skin, burns, wound healing and thermoregulation; and bedside assessment of the three systems. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["anatomy", "physiology", "cell", "tissue", "mitosis", "bone", "joint", "fracture", "muscle", "contraction", "digestive", "absorption", "enzyme", "skin", "burns", "wound healing", "thermoregulation"],
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
