"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is the NMC licensing exam and how does this app help me prepare?",
    a: "The Nursing and Midwifery Council of Ghana licensing examination is the final hurdle between nursing or midwifery school and your professional PIN. It tests clinical judgement, not just recall — which is exactly what our rationale-first questions, strategy library, Custom Exam builder, and adaptive-difficulty practice mode train you for.",
  },
  {
    q: "How many questions are included — and are they real exam questions?",
    a: "NurseGrid Prep includes 10,000 original licensing-style questions covering every major category: med-surg, pharmacology, maternal-newborn, paediatrics, mental health, fundamentals, safety, and leadership. They are written to mirror the exam's style and difficulty — we never sell leaked content, because pattern mastery is what actually gets you through unseen questions. Every question ships with a detailed rationale and a test-taking strategy tip.",
  },
  {
    q: "What's included in the free plan?",
    a: "Tasks and notes are completely free, forever — you can plan clinicals, assignments, and study sessions with no limits. You'll also get a free preview set of questions in every category and full access to the strategy library, so you can try before you pay.",
  },
  {
    q: "How much does full access cost?",
    a: "Choose the plan that fits you: $5 for 4 months of full access, or $9 for a full year (best value). Both unlock unlimited access to all 10,000 questions, rationales, strategies, and progress tracking for the length of the plan.",
  },
  {
    q: "Will I be charged again automatically?",
    a: "No. Both plans are a single payment for a fixed period (4 months or 1 year) — there are no auto-renewals or surprise charges. When your access period ends, you can simply choose a plan again to continue.",
  },
  {
    q: "How can I pay?",
    a: "You can pay with a Visa card (processed securely through Stripe) from anywhere in the world, or with MTN Mobile Money if you're in Ghana — just send payment to 0598872146 and confirm your transaction reference in the app. Our team verifies each MoMo payment and activates your account, usually within a few hours.",
  },
  {
    q: "Is NurseGrid Prep affiliated with the Nursing and Midwifery Council of Ghana?",
    a: "No. NurseGrid Prep is an independent study tool built to help nursing students practise exam-style reasoning. It is not affiliated with, endorsed by, or sponsored by the Nursing and Midwifery Council of Ghana or any official examination body, and our questions are original study material, not leaked exam content.",
  },
  {
    q: "Do you offer referral rewards?",
    a: "Yes! Every account gets a personal referral link. When a friend signs up using your link, you both automatically receive 14 days of free premium access — no limit on how many friends you invite.",
  },
  {
    q: "How can I get help or contact support?",
    a: "The fastest way is WhatsApp — tap the chat button in the corner of the screen, or message us directly at +233 54 242 8075. You can also email support@nursegridprep.app.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-slate-900">{item.q}</span>
              <span className={`shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>
            {isOpen && <p className="animate-fade-in px-5 pb-4 text-sm text-slate-600">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
