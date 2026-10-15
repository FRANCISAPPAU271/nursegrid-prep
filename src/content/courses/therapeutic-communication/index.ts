import type { Course } from "../types";
import { foundationsOfTherapeuticCommunication } from "./01-foundations-of-therapeutic-communication";
import { listeningAndAttending } from "./02-listening-and-attending";
import { questioningAndResponding } from "./03-questioning-and-responding";
import { difficultConversations } from "./04-difficult-conversations";
import { specialPopulations } from "./05-special-populations";
import { teamCommunication } from "./06-team-communication";
import { communicationCapstone } from "./07-communication-capstone";

export const therapeuticCommunication: Course = {
  slug: "therapeutic-communication",
  title: "Therapeutic Communication",
  code: "NGP-COM-101",
  tagline: "Words that heal: listening, trust, honesty and presence.",
  description:
    "A curriculum-aligned communication course for the Registered General Nursing programme. Seven modules cover healing through words — foundations of therapeutic communication (goals, Peplau's phases, empathy); listening and attending skills (active listening, SOLER, silence, presence); questioning and responding (open questions, paraphrasing, reflecting, summarising); difficult conversations (breaking bad news, anger, denial, grief, complaints); special populations (children, elders, language barriers, sensory loss, intercultural care); team communication (SBAR, handover, assertiveness, conflict); plus a communication capstone with scenarios and exam technique. Each lesson is written for Ghanaian nursing and midwifery students, uses original NurseGrid diagrams, and ends with practice questions drawn from the question bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "💬",
  level: "Foundation",
  gradient: "from-rose-900 via-pink-700 to-fuchsia-400",
  creditHours: 2,
  dueInDays: 30,
  outcomes: [
    "Explain therapeutic communication goals and Peplau's relationship phases.",
    "Listen actively with SOLER attending and therapeutic silence.",
    "Question, paraphrase, reflect and summarise with skill.",
    "Navigate bad news, anger, grief and complaints safely.",
    "Adapt communication for children, elders and language barriers.",
    "Hand over with SBAR and resolve team conflict assertively.",
  ],
  audience: [
    "Registered General Nursing students building bedside rapport on every posting",
    "Practising nurses and midwives counselling patients, families and teams across Ghana",
    "Any nurse preparing for the N&MC licensing examination's communication content",
  ],
  modules: [
    foundationsOfTherapeuticCommunication,
    listeningAndAttending,
    questioningAndResponding,
    difficultConversations,
    specialPopulations,
    teamCommunication,
    communicationCapstone,
  ],
  postTest: {
    title: "Post-Test: Therapeutic Communication",
    description:
      "Twenty-five questions drawn at random from the communication pool — goals, Peplau's phases and empathy; active listening, SOLER, silence and presence; open questions, paraphrasing, reflecting, clarifying and summarising; SPIKES bad news, anger, denial, grief and complaints; children, elders, language barriers, sensory loss and intercultural care; SBAR, handover, assertiveness and conflict resolution; and communication scenarios. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["communication", "therapeutic", "Peplau", "empathy", "listening", "SOLER", "paraphrasing", "SBAR", "bad news", "SPIKES", "grief", "assertiveness", "handover", "barriers", "trust"],
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
};
