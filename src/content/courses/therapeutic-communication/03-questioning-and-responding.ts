import type { CourseModule } from "../types";

export const questioningAndResponding: CourseModule = {
  slug: "questioning-and-responding",
  title: "Questioning and responding",
  summary:
    "Questions that open, responses that prove listening: the open-probe-closed funnel, banned question traps, scale and miracle questions — then the paraphrase-reflect-clarify-summarise ladder, teach-back, kindly confrontation and rare self-disclosure.",
  lessons: [
    {
      slug: "questions-that-open-doors",
      title: "Questions that open doors",
      minutes: 18,
      objectives: [
        "Run the funnel: open→probe→closed.",
        "Aim 70% open/probe.",
        "Ban leading/multiple/why-bombs.",
        "Use scale + miracle questions.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Funnel order",
          paragraphs: [
            "Questions are doors: OPEN questions swing wide ('tell me about your pain…', 'what's it like living with this…?', 'what matters most to you today…?') — stories, feelings, THEIR words, their priorities. PROBES go gently deeper on ONE thread ('help me understand the fear…', 'say more about the night it worsened…', 'what was the hardest part…?'). CLOSED questions count and confirm ('how many stools? what time? which leg? pain 0–10?'). The <strong>FUNNEL</strong>: open FIRST (their story!) → probe (one thread!) → closed LAST (facts!). Reversed funnels — 20 closed questions before 'tell me' — INTERROGATE; funnels HEAR. Ratio aim: 70% open/probe, 30% closed — emergencies excepted (bleeding first, stories later!). Why order matters: open questions reveal what THEY fear (the 'chest pain' that's really terror of dying like father!); closed-first nursing diagnoses the chart, not the person. Exams test sequencing: 'best FIRST question?' — eliminate closed/leading options, pick the opener. Then <strong>BANNED traps</strong> (exam favourites!): LEADING ('you took your drugs, right?' — coerces lies! → 'how have the drugs been going?'); MULTIPLE ('pain? fever? appetite? bowels?' — pick ONE, let it land!); WHY-BOMBS ('why did you default?!' — ACCUSES! → 'what made it hard to come?' HEALS!); JARGON ('describe your micturition' — 'how is passing urine?' works!); DOUBLE-NEGATIVES ('you don't not want surgery…?' — huh?!). Each banned form has a therapeutic twin — learn the twins, and 'rephrase this question' items answer themselves.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-COM-0005.svg",
          alt: "Funnel three tiers open probe closed with example questions. Funnel order with ratio aim and reversal warning. Openers probes closed lists. Banned five traps with twins. Scale questions plus miracle question. Children elders language adaptations. Cross-course links. Mantra quoted.",
          caption: "Open the door, follow one thread, count last.",
        },
        {
          type: "text",
          heading: "Scales, miracles, adaptations",
          paragraphs: [
            "<strong>Scale questions</strong> turn fog into numbers: 'pain 0–10?' · 'worry 0–10?' · 'confidence taking these meds 0–10?' · 'hope 0–10?' Numbers TRACK change ('7 last week, 4 today — what's helping?') and OPEN talk ('a 7! what would make it a 5?' — small-steps thinking!). The <strong>miracle question</strong> (solution-focused therapy's gift): 'if tonight, while you slept, one thing got fixed — what would tomorrow morning look like?' Reveals TRUE goals (not 'lower HbA1c' but 'play with grandchildren without breathlessness' — counsel to THAT!). Follow-ups: 'what's already a 3 not a 0?' (strengths!), 'one small step this week?' (ONE change — NUT's chain!). <strong>Adaptations</strong>: CHILDREN — one question + play + parent-triangulate ('show teddy where it hurts!' — M05!); ELDERS — slow + loud-clear + ONE at a time + write key words (GER M3!); LANGUAGE GAPS — short sentences + trained interpreter + teach-back, never shouting (volume ≠ translation! — M05!); DISTRESS — feelings-first, facts later (M02!). Document questions that mattered: 'asked miracle question — goal: walk to farm; plan built around it.' And interview gold: 'how do you assess a new patient?' — 'open story first, probe one thread, closed facts last, feelings throughout — funnel, not interrogation.'",
          ],
        },
        {
          type: "table",
          heading: "Rephrase the trap",
          columns: ["Banned", "Why it fails", "Therapeutic twin"],
          rows: [
            ["'You took your drugs, right?'", "Leading — coerces 'yes'", "'How have the drugs been going?'"],
            ["'Why did you default?!'", "Why-bomb — accuses", "'What made it hard to come?'"],
            ["'Pain? fever? appetite?'", "Multiple — overwhelms", "'Tell me about the pain first…'"],
            ["'Describe micturition'", "Jargon — confuses", "'How is passing urine?'"],
            ["'You don't not want it?'", "Double-negative — huh?", "'How do you feel about it?'"],
            ["'Don't worry, ok?'", "Closed + dismissal", "'What worries you most?'"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The funnel drill",
          body: "Next admission: ask ONE open question first ('tell me what brought you…') and let 60 uninterrupted seconds follow (M02's challenge!). Then ONE probe on the thread that glowed. THEN your closed checklist. Compare with your usual closed-first history — notice what the funnel catches that interrogation misses: fears, goals, truths. Funnels take no longer; they just listen first.",
        },
      ],
      keyPoints: [
        "Funnel: open (story!) → probe (one thread!) → closed (facts!); 70/30 ratio.",
        "Openers reveal THEIR fears/goals; closed-first diagnoses charts, not people.",
        "Banned: leading, multiple, why-bombs, jargon, double-negatives — learn the twins.",
        "Scales track + open ('a 7! what'd make it 5?'); miracle reveals true goals.",
        "Adapt: children play-triangulate; elders slow-one; language short + interpreter.",
        "Document key questions + answers; funnel language wins interviews.",
      ],
      quiz: {
        keywords: ["funnel", "open questions", "closed questions", "probes", "leading", "why", "multiple", "jargon", "scale", "miracle question", "solution-focused", "goals", "rephrase", "ratio", "interrogation"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "reflect-paraphrase-summarise",
      title: "Reflect, paraphrase, summarise",
      minutes: 18,
      objectives: [
        "Climb the responding ladder.",
        "Check every mirror.",
        "Teach-back all teaching.",
        "Confront discrepancies kindly.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The responding ladder",
          paragraphs: [
            "Listening proves itself in RESPONDING — the <strong>ladder</strong> (exam core!): <strong>PARAPHRASE</strong> — content mirror, shorter, plainer: 'so the pain started low, then moved to your shoulder yesterday…' Proves listening, invites correction, slows rushing minds. <strong>REFLECT</strong> — feelings mirror, gently, tentatively: 'sounds frightening…', 'you feel guilty about the fall…', 'part of you wants the surgery, part dreads it…' Feelings NAMED with 'sounds/seems' — never declared ('you ARE depressed' diagnoses from a chair!). <strong>CLARIFY</strong> — fuzzy words pinned: 'when you say \"dizzy\", spinning or faint…?', 'tell me what \"not serious\" means to you…', 'how much is \"small\" bleeding — pads per hour?' Vague words KILL assessments — dizzy? tired? weak? 'a little' what?! <strong>SUMMARISE</strong> — whole picture + CHECK: 'so far: 3 days of shoulder-moving pain, scared it's your heart, missing market days — did I get it? what should we tackle first?' Mid-talk summaries refocus; end-talk summaries close (M01 termination!); handover summaries save lives (M06 SBAR!). EVERY mirror ends with a CHECK ('did I get that right?') — corrections are GIFTS, not failures ('no — it's my LEFT shoulder!' saves the diagnosis!). Ladder order in exams: paraphrase before interpreting, reflect before advising, clarify before assuming, summarise before closing. Responding proves the listening M02 taught — unmirrored listening feels, to patients, like unheard silence.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-COM-0006.svg",
          alt: "Four ladder boxes paraphrase reflect clarify summarise with examples. Ladder order with check-every-mirror rule. Paraphrase content-mirror guidance. Reflect feelings tentative wording. Clarify fuzzy-words examples. Summarise mid end handover uses. Teach-back MY-teaching framing. Kindly confrontation facts-curiosity formula. Self-disclosure tiny-rare rules. Cross-course links. Mantra quoted.",
          caption: "Mirror content, name feelings, check fuzzy, sum + verify.",
        },
        {
          type: "text",
          heading: "Teach-back, confrontation, disclosure",
          paragraphs: [
            "<strong>TEACH-BACK</strong> (NUT's gift to all nursing!): 'to be sure I explained WELL — how will you take these?' Frames the check on MY teaching, never their brains. Failed teach-back = re-teach DIFFERENTLY (pictures! demos! simpler words! family included!) — never repeat louder. Every teaching ends here: meds, wounds, feeds, red flags, devices. <strong>CONFRONT KINDLY</strong>: discrepancies named with facts + curiosity, NEVER accusation — 'you say the drugs are fine, but the packet is full — help me understand…' / 'you smile saying \"I'm fine\", but your hands shake — what's underneath?' Gentle confrontation OPENS truth; harsh confrontation ('you're LYING about the drugs!') slams it shut. Timing: trust FIRST (M01!), privacy ALWAYS, support READY. <strong>SELF-DISCLOSURE</strong>: tiny + rare + FOR them — 'I felt scared before my surgery too — what worries you most?' (normalises, then RETURNS to them!). Never story-swapping ('that reminds me of MY…') — their stage, always. Test: does sharing serve THEM? Would silence serve better? When unsure, don't. Exam scenarios: 'best response to \"I can't cope\"?' — reflect + explore ('sounds overwhelming — tell me the hardest part'), never reassure/advise/judge (M01 flags!). 'Patient contradicts self?' — kindly confrontation. 'Teaching done?' — teach-back. The ladder + these three = the responding toolkit complete.",
          ],
        },
        {
          type: "table",
          heading: "Responding moves",
          columns: ["Move", "Sounds like", "Check"],
          rows: [
            ["Paraphrase", "'So the pain moved up yesterday…'", "'Did I get that right?'"],
            ["Reflect", "'Sounds frightening…'", "Tentative; await confirm/correct"],
            ["Clarify", "'Spinning or faint dizzy?'", "Pin EVERY fuzzy word"],
            ["Summarise", "'So far: … what first?'", "Mid + end + handover"],
            ["Teach-back", "'How will YOU take these?'", "Re-teach failures differently"],
            ["Confront", "'Packet full — help me see…'", "Facts + curiosity, private, trust first"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The mirror week",
          body: "This week: end every patient conversation with a summary + check ('so: … — did I miss anything?'). Count the corrections you receive — each one is an error PREVENTED, a trust DROP earned, a diagnosis sharpened. Summarising feels slow; it is the fastest safety tool in nursing. Mirror content, name feelings, check fuzzy, sum + verify.",
        },
      ],
      keyPoints: [
        "Ladder: paraphrase (content!) → reflect (feelings!) → clarify (fuzzy!) → summarise (picture!).",
        "Every mirror ends with a check — corrections are gifts, not failures.",
        "Reflect tentatively ('sounds…'); never declare diagnoses from chairs.",
        "Teach-back frames MY teaching; failed = re-teach differently, never louder.",
        "Confront: facts + curiosity, private, trust-first, support-ready — never accuse.",
        "Disclose tiny + rare + for them; their stage, always.",
      ],
      quiz: {
        keywords: ["paraphrase", "reflect", "clarify", "summarise", "ladder", "teach-back", "confrontation", "discrepancy", "self-disclosure", "mirror", "tentative", "fuzzy", "corrections", "check", "responding"],
        categories: ["fundamentals"],
      },
    },
  ],
};
