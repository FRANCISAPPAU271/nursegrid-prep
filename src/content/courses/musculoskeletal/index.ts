import type { Course } from "../types";
import { foundations } from "./01-foundations";
import { fractures } from "./02-fractures";
import { traumaAndInjuries } from "./03-trauma-and-injuries";
import { acrossTheLifespan } from "./04-across-the-lifespan";
import { jointAndBoneDisease } from "./05-joint-and-bone-disease";
import { infectionAndTheSpine } from "./06-infection-and-the-spine";
import { musculoskeletalPharmacologyAndCalculations } from "./07-musculoskeletal-pharmacology-and-calculations";
import { glossary } from "./glossary";

export const musculoskeletalNursing: Course = {
  slug: "musculoskeletal-nursing",
  code: "NGP-MSK-107",
  title: "Musculoskeletal Nursing",
  tagline: "Bones, joints and muscles from structure to failure — the fracture from roadside to union, casts, traction and fixation, compartment syndrome and the hazards of immobility, major trauma and crush injury, the broken hip and the falling elder, the injured child, arthritis and joint replacement, osteoporosis and rickets, bone and joint infection, the injured spine and the aching back, and the drugs and calculations of the orthopaedic ward.",
  description:
    "A structured course covering the structure and function of bone, joint and muscle with calcium and bone health, musculoskeletal assessment and the neurovascular check, fracture types, healing and first aid, casts, splints, traction and internal and external fixation, fracture complications including compartment syndrome, fat embolism and venous thromboembolism and the hazards of immobility, major trauma with the primary survey, pelvic and crush injuries, soft-tissue injuries, dislocations, amputation and rehabilitation, hip fracture, falls and the older adult, the child in orthopaedics with non-accidental injury and congenital conditions, osteoarthritis, joint replacement and mobility aids, rheumatoid arthritis, gout and other inflammatory arthritis, osteoporosis, rickets, osteomalacia and bone tumours, osteomyelitis, septic arthritis, spinal tuberculosis, sickle cell bone disease and tetanus, spinal cord injury, back pain, cauda equina syndrome and safe manual handling, and musculoskeletal pharmacology with the calculations nurses make at the bedside. Each lesson is written for Ghanaian nursing and midwifery students, uses the diagrams from the NurseGrid question bank, and ends with practice questions drawn from the same bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🦴",
  level: "Intermediate",
  gradient: "from-slate-700 via-slate-500 to-stone-300",
  creditHours: 4,
  dueInDays: 30,
  outcomes: [
    "Relate the structure and function of bones, joints and muscles and the regulation of calcium and bone mass to the conditions that follow when they fail, and perform a structured musculoskeletal assessment including the neurovascular check and pain assessment across ages.",
    "Classify fractures, explain healing and its disruption, give safe first aid and splinting, and nurse the patient in a cast, splint, traction or fixation while detecting a tight cast, pin-site infection and loss of circulation early.",
    "Recognise and respond to compartment syndrome, fat embolism, venous thromboembolism, infection, non-union and the hazards of immobility, and apply the prevention bundle for every immobilised patient.",
    "Apply the primary survey to the multiply injured patient, manage pelvic fractures, crush injury and rhabdomyolysis, soft-tissue injuries and dislocations, and care for the patient before and after amputation through to prosthetic rehabilitation.",
    "Deliver the time-critical care of the older adult with hip fracture, assess and prevent falls and delirium, and recognise and manage the fractures, non-accidental injury and congenital conditions of childhood.",
    "Care for patients with osteoarthritis, joint replacement, rheumatoid arthritis, gout and other inflammatory arthritis, osteoporosis, rickets, osteomalacia and bone tumours, including mobility aids, surgical care and the drugs that modify disease.",
    "Recognise and manage osteomyelitis, septic arthritis, spinal tuberculosis, sickle cell bone disease and tetanus, apply spinal precautions and the acute and ongoing care of spinal cord injury, identify back pain red flags and cauda equina syndrome, and move and handle patients safely.",
    "Administer analgesics, NSAIDs, opioids, steroids, DMARDs, gout and bone drugs, antibiotics, tetanus prophylaxis, anticoagulants and local anaesthetics safely, perform the related calculations accurately and apply the safety checks that prevent error.",
  ],
  audience: [
    "Final-year nursing and midwifery students preparing for the N&MC licensing examination",
    "Newly qualified nurses on surgical, orthopaedic, emergency, paediatric and medical placements where fractures, road traffic injuries, arthritis, back pain and bone infection are met every day",
    "Nurses working in or preparing to join orthopaedic, trauma, rehabilitation, rheumatology, community and occupational health services",
  ],
  modules: [
    foundations,
    fractures,
    traumaAndInjuries,
    acrossTheLifespan,
    jointAndBoneDisease,
    infectionAndTheSpine,
    musculoskeletalPharmacologyAndCalculations,
  ],
  postTest: {
    title: "Post-Test: Musculoskeletal Nursing",
    description:
      "Twenty-five questions drawn at random from the musculoskeletal question pool. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["fractur", "orthopaed", "plaster", "splint", "skeletal traction", "in traction", "compartment", "amputat", "arthritis", "osteoporosis", "rickets", "osteomyelitis", "sickle", "spinal cord", "back pain", "joint", "bone", "muscle", "mobility", "crutch", "walking aid", "immobil", "neurovascular", "trauma", "dislocat", "sprain"],
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
