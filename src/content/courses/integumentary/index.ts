import type { Course } from "../types";
import { foundations } from "./01-foundations";
import { woundCare } from "./02-wound-care";
import { burns } from "./03-burns";
import { skinInfectionsAndInfestations } from "./04-skin-infections-and-infestations";
import { inflammatoryAllergicAndMalignantSkinDisease } from "./05-inflammatory-allergic-and-malignant-skin-disease";
import { skinAcrossTheLifespan } from "./06-skin-across-the-lifespan";
import { dermatologicalPharmacologyAndCalculations } from "./07-dermatological-pharmacology-and-calculations";
import { glossary } from "./glossary";

export const integumentaryNursing: Course = {
  slug: "integumentary-nursing",
  code: "NGP-SKN-108",
  title: "Integumentary Nursing",
  tagline: "The skin from structure to breakdown — assessment across skin tones, wound healing, the dressing trolley, pressure injuries and the bundle that prevents them, leg ulcers and the diabetic foot, Buruli ulcer and the swollen limb, burns from first aid to grafting, the infections and infestations of the skin, eczema, psoriasis and skin bleaching, anaphylaxis and Stevens-Johnson syndrome, the skin cancers of dark skin, the skin of the newborn, the elder and the person with HIV, and the drugs and calculations of skin care.",
  description:
    "A structured course covering the structure and function of the skin and its assessment across skin tones, wound healing and wound assessment, aseptic technique, cleansing, debridement, dressing selection and the care of surgical wounds, drains and sutures, pressure injury risk, staging, prevention and management with moisture and device-related damage, venous, arterial and neuropathic leg ulcers, the diabetic foot, Buruli ulcer, filarial lymphoedema and other tropical wounds, burns first aid, depth and area assessment, Parkland resuscitation, burn wound care, complications and rehabilitation, bacterial, fungal and mycobacterial skin infections including leprosy, yaws and tetanus, viral skin infections, scabies, lice, tungiasis and onchocerciasis with their isolation and notification rules, eczema, psoriasis, urticaria, acne, keloid and skin bleaching, drug eruptions, anaphylaxis, Stevens-Johnson syndrome and toxic epidermal necrolysis, skin cancer on dark skin, the skin of the newborn and child including malnutrition and child abuse, the ageing skin, skin tears, the skin in systemic disease and HIV and the fungating wound, and dermatological pharmacology with the calculations nurses make at the bedside. Each lesson is written for Ghanaian nursing and midwifery students, uses the diagrams from the NurseGrid question bank, and ends with practice questions drawn from the same bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🩹",
  level: "Intermediate",
  gradient: "from-rose-700 via-pink-500 to-orange-300",
  creditHours: 4,
  dueInDays: 30,
  outcomes: [
    "Relate the structure and functions of the skin to the conditions that follow when they fail, perform a structured skin assessment that reads colour change, perfusion, hydration and lesions correctly on dark skin, and describe and document wounds using a systematic framework.",
    "Explain the phases of wound healing and the factors that delay it, perform wound dressings with aseptic non-touch technique, select cleansing solutions, debridement methods and dressings by wound bed and exudate, and care for surgical wounds, drains and sutures while recognising dehiscence, evisceration and surgical site infection.",
    "Assess pressure injury risk, stage pressure injuries including on dark skin, deliver the SSKIN prevention bundle, distinguish and manage moisture and device-related damage, and meet reporting and documentation duties.",
    "Distinguish venous, arterial and neuropathic leg ulcers, apply compression only after an ankle-brachial pressure index, assess, grade and manage the diabetic foot and teach foot care, and recognise and manage Buruli ulcer, sickle cell ulcers, filarial lymphoedema and other tropical wounds.",
    "Give correct burn first aid, assess depth and area in adults and children, recognise inhalation injury and the need for escharotomy, calculate and titrate Parkland resuscitation, and care for the burn wound, prevent infection and contracture, feed the hypermetabolic patient and support grafting, scar management and recovery.",
    "Recognise and manage bacterial, fungal, mycobacterial, viral and parasitic skin diseases and infestations common in Ghana, apply the correct isolation, household treatment, immunisation and notification measures, and administer tetanus prophylaxis correctly.",
    "Manage eczema, psoriasis, urticaria, acne and keloid, counsel on skin bleaching and its complications, treat anaphylaxis with adrenaline, recognise and manage Stevens-Johnson syndrome and toxic epidermal necrolysis, report adverse drug reactions, and identify the skin cancers and suspicious lesions that need biopsy.",
    "Care for the skin of the newborn, child, older adult and person living with HIV, recognise malnutrition, abuse and systemic disease in the skin, manage skin tears and fungating wounds, and administer topical and systemic dermatological drugs safely with accurate calculations.",
  ],
  audience: [
    "Final-year nursing and midwifery students preparing for the N&MC licensing examination",
    "Newly qualified nurses on surgical, medical, paediatric, emergency, community and outpatient placements where wounds, pressure injuries, burns, skin infections and rashes are met every day",
    "Nurses working in or preparing to join wound care, burns, dermatology, HIV, neglected tropical disease, community and public health services",
  ],
  modules: [
    foundations,
    woundCare,
    burns,
    skinInfectionsAndInfestations,
    inflammatoryAllergicAndMalignantSkinDisease,
    skinAcrossTheLifespan,
    dermatologicalPharmacologyAndCalculations,
  ],
  postTest: {
    title: "Post-Test: Integumentary Nursing",
    description:
      "Twenty-five questions drawn at random from the integumentary question pool. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["wound", "dressing", "pressure ulcer", "pressure area", "burns", "a burn", "scald", "ulcer on", "leg ulcer", "diabetic foot", "scabies", "ringworm", "impetigo", "cellulitis", "measles", "chickenpox", "zoster", "eczema", "dermatitis", "urticaria", "anaphyla", "stevens", "kaposi", "leprosy", "buruli", "yaws", "tetanus", "skin tear", "jaundice", "nappy", "keloid", "itchy", "a rash", "lesion"],
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
