import { QUESTION_COUNT_LABEL } from "@/lib/question-count";

// Single source of truth for the landing-page FAQ.
//
// Both the visible accordion (components/marketing/Faq.tsx) and the
// FAQPage structured data (components/marketing/FaqSchema.tsx) read from this
// list. Google requires the marked-up answer to match the answer a visitor can
// actually read, so keeping two hand-maintained copies is a penalty waiting to
// happen — the schema silently drifts the first time someone edits the copy.
export type FaqItem = { q: string; a: string };

export const FAQS: FaqItem[] = [
  {
    q: "What is the NMC licensing exam and how does this app help me prepare?",
    a: "The Nursing and Midwifery Council licensing examination is the final hurdle between nursing or midwifery school and your professional PIN. It tests clinical judgement, not just recall — which is exactly what our rationale-first questions, strategy library, Custom Exam builder, and adaptive-difficulty practice mode train you for.",
  },
  {
    q: "How many questions are included — and are they real exam questions?",
    a: `NurseGrid Prep includes ${QUESTION_COUNT_LABEL} licensing-style questions covering every major category: med-surg, pharmacology, maternal-newborn, paediatrics, mental health, fundamentals, safety, and leadership. They are written by us against the NMC Ghana syllabus — they are not past papers and not copied from any published bank. Every question ships with a full rationale, an explanation of why each wrong option is wrong, and a 20-second strategy tip. We never sell leaked content, because pattern mastery is what actually gets you through unseen questions, and the bank grows with new question drops.`,
  },
  {
    q: "What's included in the free plan?",
    a: "Tasks and notes are completely free, forever — you can plan clinicals, assignments, and study sessions with no limits. You'll also get a free preview set of questions in every category and full access to the strategy library, so you can try before you pay.",
  },
  {
    q: "How does premium access work?",
    a: `Start with a 3-day full premium trial — no card required. You get unlimited access to all ${QUESTION_COUNT_LABEL} unique licensing-style questions, rationales, strategies, mock exams, and progress tracking. Flexible access options are available directly in your dashboard once you create an account.`,
  },
  {
    q: "Will I be charged again automatically?",
    a: "No. All access plans are single one-time payments for a fixed period — there are zero auto-renewals or unexpected charges.",
  },
  {
    q: "How can I pay?",
    a: "Pay with MTN Mobile Money from any phone, or with a Visa card if you prefer. Mobile Money is verified against our records and access is usually activated within minutes, well inside the one-hour promise. No bank account or card is required to start.",
  },
  {
    q: "How can I upgrade my account?",
    a: "Upgrade options and secure payment methods are available directly inside your dashboard once you create an account. All access is one-time with zero automatic renewals or hidden charges.",
  },
  {
    q: "Is NurseGrid Prep affiliated with the Nursing and Midwifery Council?",
    a: "No. NurseGrid Prep is an independent study tool built to help nursing students practise exam-style reasoning. It is not affiliated with, endorsed by, or sponsored by the Nursing and Midwifery Council or any official examination body, and our questions are original study material, not leaked exam content.",
  },
  {
    q: "Do you offer referral rewards?",
    a: "Yes! Every account gets a personal referral link. When a friend signs up using your link, you both automatically receive 3 days of free premium access — no limit on how many friends you invite.",
  },
  {
    q: "How can I get help or contact support?",
    a: "The fastest way is WhatsApp — tap the chat button on the screen to reach support directly, or email support@nursegridprep.app.",
  },
];
