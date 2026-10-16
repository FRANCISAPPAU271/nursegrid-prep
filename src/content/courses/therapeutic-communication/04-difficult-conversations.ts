import type { CourseModule } from "../types";

export const difficultConversations: CourseModule = {
  slug: "difficult-conversations",
  title: "Difficult conversations",
  summary:
    "When words carry weight: SPIKES bad-news delivery with warning shots, pacing, culture and the stayer role — then LEAP de-escalation, grief tasks versus stages, denial handling, HEAR complaints and the duty of candour.",
  lessons: [
    {
      slug: "breaking-bad-news-spikes",
      title: "Breaking bad news (SPIKES)",
      minutes: 20,
      objectives: [
        "Run SPIKES 6 steps.",
        "Warn, plain-speak, pause.",
        "Hold emotions without fixing.",
        "Plan with honest hope.",
      ],
      blocks: [
        {
          type: "text",
          heading: "SPIKES six steps",
          paragraphs: [
            "Baile's <strong>SPIKES</strong> (exam pure — spell it!): <strong>S — SETTING:</strong> private room (never corridors/wards!), sit down, phones off, tissues near, 'who should stay with you?' Relatives present per patient wish. <strong>P — PERCEPTION:</strong> 'what have you understood about your illness so far…?' Start from THEIR map — correcting beats assuming ('I thought it was just an ulcer!' changes everything!). <strong>I — INVITATION:</strong> 'shall I explain everything today, or the headlines first…?' Some want all; some want drops — ASK (culture note below!). <strong>K — KNOWLEDGE:</strong> warning shot FIRST ('I'm afraid the results are serious…') — then PAUSE — then ONE plain fact ('the cancer has spread beyond the breast') — then SILENCE. Plain words: 'spread', not 'metastatic progression'; 'died', not 'passed' (families mishear euphemisms!). Shock hears ONE sentence — repeat visits beat information dumps. <strong>E — EMOTIONS:</strong> reflect ('this is devastating…') + presence + tissue-near + hand-offered + NO fixing ('don't cry' BANNED!). Tears? silence. Anger at YOU? don't defend — 'I hear your fury…' (next lesson's LEAP!). Denial? don't bulldoze — 'take time; I'll return.' <strong>S — STRATEGY + SUMMARY:</strong> plan + teach-back + follow-up: 'next: pain team Thursday, scan review Monday — what questions for then? Here's my number.' The nurse is often the STAYER — doctor delivers, nurse REMAINS: 'what did you hear…? what scares you most…?' Clarify, comfort, connect (doctor/chaplain/social worker), REVISIT tomorrow — bad news needs encores.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-COM-0007.svg",
          alt: "Six SPIKES letter boxes setting perception invitation knowledge emotions strategy. SPIKES spelled with scripts. Warning shot plus plain words plus one-sentence shock rule. Emotions reflect presence anger denial handling. Culture who-decides faith interpreters documentation. Nurse stayer role clarify comfort connect revisit. Strategy hope-honesty plus written plan. Debrief note. Cross-course links. Mantra quoted.",
          caption: "Private, perceive, invite, warn-plain-pause, hold, plan.",
        },
        {
          type: "text",
          heading: "Culture, hope, debrief",
          paragraphs: [
            "<strong>Culture FIRST:</strong> 'who decides and who hears?' — patient alone? spouse? family elder? 'Shall we call your…?' Honour faith framing ('God and medicine together' — never versus!); use ADULT trained interpreters, NEVER children, for bad news (M05!); document WHO was told WHAT in whose presence (INF M02!). Some families beg 'don't tell him!' — negotiate: explore fears, propose joint telling, respect competent patients' right to know (PRO-I autonomy!) while pacing gently. <strong>STRATEGY = hope + honesty TOGETHER:</strong> 'we can't cure, but we CAN control pain, keep you home, support your family, fight for good days' — REALISTIC hope. Never false hope ('you'll beat this for sure!') — it robs planning and trust. Give written summaries + next contact + red flags + 'questions for next time' — shock deletes memory. <strong>DEBRIEF YOU</strong> (M02!): bad-news conversations wound GIVERS too — shaking hands, sleepless replays, dread of the next one. Share with seniors, reflect (Gibbs!), recover — unprocessed delivery-grief becomes avoidance ('let the doctor do all talking'). Exam scenarios: 'patient asks nurse \"am I dying?\"' — don't lie, don't dump: 'that's the deepest question — what have the doctors said so far…? shall we talk together with…?' (perception + invitation + honesty + support!). 'Family says don't tell' — negotiate + autonomy + pace. SPIKES answers score when EVERY letter shows.",
          ],
        },
        {
          type: "table",
          heading: "SPIKES checks",
          columns: ["Step", "Do this", "Never this"],
          rows: [
            ["Setting", "Private + sit + chosen company", "Corridor/ward announcements"],
            ["Perception", "'What've you understood…?'", "Assume + dump from zero"],
            ["Invitation", "'All today or headlines?'", "Force-feed full details"],
            ["Knowledge", "Warning shot + ONE plain fact + pause", "Jargon avalanche, no silence"],
            ["Emotions", "Reflect + presence + no fixing", "'Don't cry' / defend / bulldoze"],
            ["Strategy", "Honest hope + written plan + revisit", "False hope + 'any questions?' exit"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "The stayer's burden",
          body: "After delivering or witnessing bad news: don't rush to the next task. Breathe, note your own feelings, share with a colleague, check the family in an hour, revisit tomorrow. Nurses who absorb grief without debriefing either burn out or go numb — and numb nurses can't SPIKES. Care for the giver, and the giving stays human.",
        },
      ],
      keyPoints: [
        "SPIKES: setting + perception + invitation + knowledge + emotions + strategy — spell all six.",
        "Warning shot + ONE plain fact + silence; shock hears one sentence — revisit, don't dump.",
        "Emotions: reflect + presence + no fixing; anger→LEAP, denial→patience, never bulldoze.",
        "Culture: who decides/hears first; faith honoured; adult interpreters; document all.",
        "Nurse = stayer: clarify + comfort + connect + revisit; 'what did you hear…?'",
        "Strategy: realistic hope + written plan + red flags + debrief yourself.",
      ],
      quiz: {
        questionIds: ["NG-MOD-TCOM-010"],
        keywords: ["SPIKES", "Baile", "bad news", "warning shot", "perception", "invitation", "emotions", "strategy", "stayer", "euphemisms", "culture", "hope", "honesty", "debrief", "revisit"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "anger-grief-and-complaints",
      title: "Anger, grief and complaints",
      minutes: 20,
      objectives: [
        "De-escalate with LEAP.",
        "Support grief tasks.",
        "Handle denial gently.",
        "HEAR complaints + own errors.",
      ],
      blocks: [
        {
          type: "text",
          heading: "LEAP + grief tasks",
          paragraphs: [
            "Anger is fear/grief/pain wearing armour — <strong>LEAP</strong> through it: <strong>L — LISTEN</strong> fully (don't interrupt rage — interruption detonates!) · <strong>E — EMPATHISE</strong> ('waiting 6 hours with a sick child IS infuriating…' — name it truly!) · <strong>A — AGREE</strong> where true ('you're right — this failed; I'm sorry') · <strong>P — PARTNER</strong> ('let's fix the next step together — I can…'). Rules: NEVER match volume (one calm voice de-escalates; two shouting voices summon security!); never defend/judge ('calm down!' BANNED — it inflames!); name feelings; offer CHOICES ('speak here or my office?'); keep exits available + help near; threats/weapons = security + report, not heroics. Document FACTS + quotes ('stated \"…\", offered …, accepted/declined'). <strong>GRIEF</strong>: teach Worden's TASKS (active!), not just Kübler-Ross's stages — accept REALITY ('saying goodbye to the body helps…') · FEEL the pain (tears welcomed, not medicated away!) · ADJUST to new roles (widow, carer-less, childless-home) · RELOCATE the bond + LIVE on (photos, rituals, 'she'd want…' — continuing bonds heal!). Kübler-Ross (denial/anger/bargaining/depression/acceptance) = FLUID WAVES, never stairs — 'stuck at anger' language HURTS. Support: presence (M02!) + rituals honoured (prayers, washing, wailing — make ROOM!) + practical help (certificates, transport!) + follow-up WEEKS later (grief peaks AFTER funerals when crowds leave!). Complicated grief (frozen, self-harm, can't function months on) → REFER (counsellor/psychiatry/pastor).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-COM-0008.svg",
          alt: "Five boxes LEAP anger grief-tasks HEAR complaints denial candour with examples. LEAP spelled with safety note. Anger rules volume defend choices exits document. Grief tasks four with Ross-fluid warning plus support plus complicated referral. Denial drip-feed guidance. HEAR spelled with free-audit line. Candour disclosure formula with cover-up warning. Cross-course links. Mantra quoted.",
          caption: "Leap with anger, walk with grief, thank complaints, own errors.",
        },
        {
          type: "text",
          heading: "Denial, complaints, candour",
          paragraphs: [
            "<strong>DENIAL</strong> is a protective shock-absorber, not disobedience: 'take your time — the treatment waits; I'll return tomorrow' + revisit + DRIP-FEED facts ('the scan shows… shall I explain what it means for the plan?'). Bulldozing ('accept it — you have CANCER!') breaks trust, not denial. Watch for denial MASKING understanding (cracking jokes while planning funerals = coping, not ignorance!). <strong>HEAR complaints</strong>: <strong>H</strong>ear fully (WRITE as they speak — visible seriousness!) · <strong>E</strong>mpathise ('I'd be upset too…') · <strong>A</strong>ct (fix what's fixable NOW + escalate the rest + give DEADLINES!) · <strong>R</strong>ecord (incident + response + follow-up + learning!). Complaints are FREE AUDITS — thank them ('thank you for telling me — this helps us improve'), never punish complainers (PRO-II QI!). Exam: 'relative shouts at desk' — LEAP + private room + HEAR + resolve/escalate + document + debrief. <strong>CANDOUR</strong> (duty!): errors disclosed honestly + PROMPTLY — what happened, why, what we do NOW, how we PREVENT it — plus sincere SORRY ('I'm sorry this happened' — remorse, not always liability-admission; follow policy + legal guidance!) plus DOCUMENTATION. Cover-ups end careers (INF M03!); candour + fix + learning rebuild trust (PRO-I M6!). Mantra: 'leap with anger, walk with grief, thank complaints, own errors.'",
          ],
        },
        {
          type: "table",
          heading: "Stormy moments",
          columns: ["Storm", "First move", "Follow-through"],
          rows: [
            ["Shouting relative", "LEAP + private room", "Fix/escalate + deadline + document"],
            ["Weeping new widow", "Sit + silence + presence", "Rituals + practicals + weeks-later call"],
            ["'It's not cancer!'", "Drip-feed + revisit, no bulldoze", "Pace facts; support coping"],
            ["Written complaint", "Thank + HEAR + investigate", "Respond + fix + share learning"],
            ["Your medication error", "Safety first + candour + sorry", "Report + prevent + debrief"],
            ["Threats/violence", "Exit + help + security", "Report + support + review safety"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The complaint gift",
          body: "Every complaint names a system crack: long waits, rude tones, lost results, dirty toilets. Log them, count them, chart them (INF M05 run charts!) — 'complaints fell 12 to 3 after triage changes' is QI gold and interview glory. Thank complainers sincerely: they audit free, while silent sufferers just never return.",
        },
      ],
      keyPoints: [
        "LEAP: listen + empathise + agree-true + partner; never match volume; safety + document.",
        "Grief = Worden tasks (accept, feel, adjust, relocate); Ross = fluid waves, never stairs.",
        "Support: presence + rituals + practicals + weeks-later follow-up; complicated → refer.",
        "Denial: shock-absorber — time + revisit + drip-feed; bulldozing breaks trust.",
        "HEAR: hear-write + empathise + act-deadline + record; complaints = free audits.",
        "Candour: prompt honest disclosure + sorry + fix + prevent + document; cover-ups kill careers.",
      ],
      quiz: {
        questionIds: ["NG-MOD-TCOM-011", "NG-MOD-TCOM-012"],
        keywords: ["LEAP", "anger", "de-escalation", "grief", "Worden", "Kubler-Ross", "denial", "complaints", "HEAR", "candour", "sorry", "errors", "volume", "rituals", "follow-up"],
        categories: ["fundamentals"],
      },
    },
  ],
};
