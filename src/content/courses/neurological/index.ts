import type { Course } from "../types";
import { foundations } from "./01-foundations";
import { raisedIcpAndHeadInjury } from "./02-raised-icp-and-head-injury";
import { stroke } from "./03-stroke";
import { seizuresAndEpilepsy } from "./04-seizures-and-epilepsy";
import { cnsInfectionsAndUnconsciousPatient } from "./05-cns-infections-and-the-unconscious-patient";
import { spinalCordAndChronicDisorders } from "./06-spinal-cord-and-chronic-disorders";
import { pharmacology } from "./07-pharmacology";
import { glossary } from "./glossary";

export const neurologicalNursing: Course = {
  slug: "neurological-nursing",
  code: "NGP-NEU-105",
  title: "Neurological Nursing",
  tagline: "The brain, the cord and the nerves — assessed with the Glasgow Coma Scale, protected from pressure, clot, bleed, seizure and infection, and nursed through the long disorders of movement, memory and mind.",
  description:
    "A structured course covering the anatomy and physiology of the nervous system, neurological assessment and the Glasgow Coma Scale, raised intracranial pressure and head injury, stroke and TIA from recognition through hyperacute care to rehabilitation, seizures and epilepsy with status epilepticus and febrile convulsions, meningitis in the Harmattan belt, encephalitis and cerebral malaria, nursing the unconscious patient, spinal cord injury with neurogenic shock and autonomic dysreflexia, Guillain-Barré syndrome, myasthenia gravis, Bell's palsy, tetanus and peripheral neuropathy, Parkinson's disease, dementia, delirium and headache, and neurological pharmacology with the calculations nurses make at the bedside. Each lesson is written for Ghanaian nursing and midwifery students, uses the diagrams from the NurseGrid question bank, and ends with practice questions drawn from the same bank. The course also covers brain tumours, hydrocephalus and shunts, and headache in its own lesson. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🧠",
  level: "Intermediate",
  gradient: "from-violet-700 via-purple-500 to-fuchsia-400",
  creditHours: 4,
  dueInDays: 30,
  outcomes: [
    "Relate the structure and function of the brain, spinal cord, cranial nerves and autonomic nervous system to the signs produced when each part fails.",
    "Perform and document neurological observations — Glasgow Coma Scale, pupils, limb power and vital signs — and recognise and escalate deterioration early.",
    "Recognise raised intracranial pressure and head injury, deliver the nursing measures and drugs that protect the brain, and prevent secondary injury.",
    "Recognise stroke and TIA, deliver time-critical hyperacute care with blood pressure managed correctly for infarct and haemorrhage, and prevent the complications that kill and disable through organised nursing care and rehabilitation.",
    "Give safe seizure first aid, manage status epilepticus by the clock with correct doses, support people living with epilepsy, and manage febrile convulsions and their parents.",
    "Recognise meningitis in adults and infants, encephalitis and cerebral malaria, start treatment within the hour, apply isolation, chemoprophylaxis, notification and vaccination, and nurse the unconscious patient systematically.",
    "Immobilise and care for the patient with spinal cord injury, recognise neurogenic shock and autonomic dysreflexia, and nurse Guillain-Barré syndrome, myasthenia gravis, Bell's palsy, tetanus and peripheral neuropathy safely.",
    "Care for people with Parkinson's disease, dementia, delirium and headache, avoid the drugs that harm them, and perform neurological drug calculations accurately.",
    "Recognise brain tumours and hydrocephalus, care for the patient with a shunt, and assess headache distinguishing primary syndromes from secondary red flags.",
  ],
  audience: [
    "Final-year nursing and midwifery students preparing for the N&MC licensing examination",
    "Newly qualified nurses on medical, surgical, emergency, intensive care, paediatric and maternity wards where stroke, seizures, head injury, meningitis and coma are met every week",
    "Nurses working in or preparing to join emergency, stroke, neurosurgical, rehabilitation and community health services",
  ],
  modules: [
    foundations,
    raisedIcpAndHeadInjury,
    stroke,
    seizuresAndEpilepsy,
    cnsInfectionsAndUnconsciousPatient,
    spinalCordAndChronicDisorders,
    pharmacology,
  ],
  postTest: {
    title: "Post-Test: Neurological Nursing",
    description:
      "Twenty-five questions drawn at random from the neurological question pool. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["neuro", "stroke", "seizure", "epilep", "convuls", "meningitis", "unconscious", "glasgow", "coma", "spinal", "head injur", "dementia", "delirium", "tetanus", "headache", "intracranial", "pupil"],
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
