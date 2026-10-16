import type { CourseModule } from "../types";

export const specialPopulations: CourseModule = {
  slug: "special-populations",
  title: "Special populations",
  summary:
    "Every person, their language: play-based child talk, respectful teen privacy, paced elder communication, deaf/blind/aphasia adaptations — then interpreter drills, cultural humility, literacy precautions and mental-health basics.",
  lessons: [
    {
      slug: "children-elders-and-sensory-loss",
      title: "Children, elders and sensory loss",
      minutes: 18,
      objectives: [
        "Talk play with children.",
        "Pace with elders; skip elderspeak.",
        "Adapt for deaf/blind/aphasia.",
        "Triangulate child-parent-nurse.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Child to elder",
          paragraphs: [
            "<strong>CHILDREN</strong>: play IS their language — teddy gets the injection FIRST (demo + desensitise!), dolls wear bandages, drawings explain 'where it hurts'. One question at a time, CONCRETE words ('a small ouch like an ant bite' — not 'minor discomfort'!), HONEST always ('this will hurt a little, then it's done' — lies destroy ALL future trust, including vaccinations for years!). Offer CHOICES ('left arm or right? mum holds which hand?') — control calms. Parents as PARTNERS: triangulate child + parent + nurse (parent holds, nurse does, child chooses!). NEVER threaten ('injection if you cry!' — cruelty that breeds needle-phobia!). Adolescents need PRIVACY ('shall mum step out for a minute?') + STRAIGHT talk (no babying, no preaching!) + confidentiality explained ('I'll keep what you say private — except if you're in danger…') — respect converts to adherence. <strong>ELDERS</strong> (GER M3!): SLOW pace + LOUD-CLEAR (face them, lower pitch carries — never SHOUT, it distorts!) + ONE question at a time + hearing aids IN + glasses ON + written KEYWORDS to take away + NO elderspeak ('sweetie/dearie' INSULTS accomplished adults!). Talk TO them, never past them to relatives ('Mama, how is YOUR appetite?' — eyes on HER!). Dementia: short + calm + one-step instructions + validate FEELINGS ('you miss home — tell me about it' — don't argue memory! — GER M5!). Rushing elders = the commonest ward cruelty — sit, slow, listen (M02!).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-COM-0009.svg",
          alt: "Five boxes child-play teen-respect elder-pace deaf-face blind-narrate with examples. Children play teddy honesty choices triangulate threat-ban. Teens privacy straight confidentiality. Elders pace aids elderspeak-ban talk-to dementia validate. Deaf face light write interpreter shout-ban. Blind narrate guide large-print. Aphasia confusion guidance. Cross-course links. Mantra quoted.",
          caption: "Play with children, pace with elders, face the deaf, narrate the blind.",
        },
        {
          type: "text",
          heading: "Sensory + speech adaptations",
          paragraphs: [
            "<strong>DEAF / HARD-HEARING:</strong> FACE them (lips visible!) + light on YOUR face + slow + normal volume (NEVER shout — distortion!) + write KEYWORDS + diagrams + gestures + trained interpreter for big news (consent! diagnoses! — next lesson's drill!). Talk to THEM, never to the companion ('ask HER…'). Check aids: batteries? fitted? whistling? Loop systems where available. <strong>BLIND / LOW-VISION:</strong> ANNOUNCE entry/exit ('I'm Ama — I'm leaving now, Kofi stays') + NARRATE actions ('I'm taking your BP — cuff going on your arm now') + guide by OFFERED elbow (never grab!) + orient the room ('water right, bell left') + large-print/audio instructions + meds organisers explained by touch. <strong>APHASIA / STROKE:</strong> yes-no questions + picture boards + ONE idea + PATIENCE (never finish sentences! — M02 killer!) + celebrate tries + assume INTELLIGENCE intact (talk ADULT, not baby!). <strong>CONFUSION / DELIRIUM:</strong> reorient kindly + short sentences + family voices + glasses/aids on + calm routine (GER M5!). Document adaptations: 'hearing-impaired — faced, wrote keywords, teach-back passed.' Exam scenarios: 'deaf patient nods blankly' — stop, face, write, interpreter, teach-back. 'Blind patient startled' — announce + narrate from now on. 'Child screaming at injections' — play-demo + honesty + choices + parent-hold. Adaptation isn't extra credit — it IS the care.",
          ],
        },
        {
          type: "table",
          heading: "Adaptation checks",
          columns: ["Person", "Do this", "Never this"],
          rows: [
            ["Frightened 4-year-old", "Teddy demo + honest ouch + choices", "Threats, lies, surprise jabs"],
            ["Silent teen", "Privacy + straight talk + confidentiality", "Babying, preaching, parent-only"],
            ["Deaf elder", "Face + light + write + interpreter", "Shout at companion instead"],
            ["Blind adult", "Announce + narrate + elbow-guide", "Silent grabbing; moved belongings"],
            ["Aphasic stroke", "Yes-no + pictures + patience", "Finish sentences; baby talk"],
            ["Confused elder", "Reorient + short + family + aids", "Argue memory; rush; restrain-talk"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The adaptation audit",
          body: "Next ward round: spot one patient straining to understand — the nodding-but-lost elder, the lip-reading mother, the terrified child. Adapt on the spot: face, write, demo, slow. Document what worked. Adaptation audits, done daily, convert 'difficult patients' into 'mismatched methods' — and the fix is always yours to make.",
        },
      ],
      keyPoints: [
        "Children: play-language + teddy demos + honest ouch + choices + parent-partners; never threaten.",
        "Teens: privacy + straight talk + confidentiality explained; respect = adherence.",
        "Elders: slow + loud-clear + one-at-a-time + aids/glasses + written words; zero elderspeak.",
        "Deaf: face + light + write + interpreter; never shout or companion-talk.",
        "Blind: announce + narrate + elbow-offer + orient + large-print; never grab.",
        "Aphasia/confusion: yes-no + pictures + patience + reorient; assume intelligence.",
      ],
      quiz: {
        questionIds: ["NG-MOD-TCOM-013", "NG-MOD-TCOM-014"],
        keywords: ["children", "play", "teddy", "honesty", "choices", "teens", "privacy", "elders", "elderspeak", "deaf", "blind", "aphasia", "dementia", "adaptations", "triangulate"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "language-barriers-and-intercultural-care",
      title: "Language barriers and intercultural care",
      minutes: 18,
      objectives: [
        "Run the interpreter drill.",
        "Practise cultural humility.",
        "Apply literacy precautions.",
        "Ask suicide directly.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Bridge languages",
          paragraphs: [
            "Ghana's 80+ languages meet every ward — mismatch is NORMAL, mismanagement is not. The <strong>INTERPRETER DRILL</strong> (exam pure!): BRIEF before ('sensitive diagnosis — translate EXACTLY, add nothing, keep confidential') · speak to the PATIENT ('how are YOU feeling?' — EYES on them, not the interpreter!) · SHORT chunks · PAUSE for translation · debrief AFTER ('anything unclear? how are YOU feeling?' — interpreters absorb trauma too!). NEVER children as interpreters (trauma + bias + role-reversal cruelty!), never pressed cleaners/guards for sensitive news, never FAMILY for bad news/STI/abuse (bias + shame + danger!). Document interpreter NAME + relationship + key points translated. NO interpreter available? Greetings in THEIR tongue ('maakye!' opens hearts!) + SHORT sentences + mime + PICTURES + demos + translation apps (verify BACK via teach-back!) + find a trained one ASAP for consent/bad news. SHOUTING ≠ translating — volume never converts language (M01 barrier!). <strong>CULTURAL HUMILITY</strong>: ASK, don't assume — 'what matters most in your care…? who decides…? what should I know about food/prayer/touch/dying…?' Negotiate hospital + tradition TOGETHER where safe (prayer times + drug rounds scheduled around; pastor visits welcomed!); explain KINDLY where unsafe + offer alternatives (NUT's myth-negotiation!). Communal decisions respected ('let me discuss with my husband' = process, not refusal!); elders honoured; dying rituals made ROOM for (wailing, washing, prayers — GER M6!).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-COM-0010.svg",
          alt: "Five boxes interpreter plain-show culture-ask literacy-universal mental-health with examples. Interpreter drill brief eyes chunks debrief plus never-list plus document. No-interpreter toolkit plus shout-ban. Cultural humility questions plus negotiate plus communal plus rituals. Literacy universal precautions plus shame-free script. Mental health direct suicide question plus psychosis plus refer. Stigma language guidance. Mantra quoted.",
          caption: "Eyes on patient, plain + pictures, ask culture, ask suicide.",
        },
        {
          type: "text",
          heading: "Literacy + mental health",
          paragraphs: [
            "<strong>LITERACY — universal precautions:</strong> assume NOTHING about reading — professors nod blankly at 'titrate' too! Pictures + demos + teach-back for EVERYONE: 'many people find this confusing — let me SHOW you…' shames nobody. Write simplified take-homes (big letters, numbered steps, pictures!), use pill organisers + marked syringes, involve literate family WITH consent. Shame hides illiteracy ('I'll read it at home' = can't!) — normalise, never test publicly. <strong>MENTAL HEALTH basics</strong> every nurse needs: CALM voice + DIRECT questions — 'are you thinking of harming yourself?' ASKED PLAINLY (asking does NOT plant suicide — it OPENS rescue!). Listen without judging, SAFETY first (means restricted? person watched? referred TODAY?), REFER promptly (psychiatry/counsellor/pastor + medical!), FOLLOW UP personally ('I'll call Thursday' — then CALL!). Psychosis: SHORT + simple + don't argue delusions ('that sounds frightening — I'm here to keep you safe') + meet needs (food? sleep? fear?) + urgent referral. <strong>STIGMA FIGHT</strong>: normalise ('many mothers feel this after birth…') + privacy FIERCE + language KIND ('person with schizophrenia', never 'schizo'/'mad'!). Words wound or heal — in mental health, they decide whether sufferers SEEK help or HIDE. Exam: 'patient hints at suicide' — direct ask + safety + refer + follow-up + document. 'Hears voices' — calm + safety + needs + urgent refer, never argue/ridicule.",
          ],
        },
        {
          type: "table",
          heading: "Bridge checks",
          columns: ["Gap", "Bridge", "Never"],
          rows: [
            ["Twi-only elder, Ewe nurse", "Trained interpreter + drill + document", "Child translating; shouting English"],
            ["Consent, no interpreter", "Delay non-urgent; find one; pictures meanwhile", "Rushed X on unread form"],
            ["Food/prayer clash", "Ask + negotiate + schedule around", "Mock, forbid, ignore beliefs"],
            ["'I'll read at home'", "Assume can't; demo + pictures + teach-back", "Public reading test; shame"],
            ["'Better off dead' hint", "Direct suicide ask + safety + refer + follow-up", "Minimise, gossip, delay referral"],
            ["Hearing voices", "Calm + safety + needs + urgent refer", "Argue delusions; ridicule; restrain-talk"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Ask the question",
          body: "'Are you thinking of harming yourself?' — seven words that open rescue. Euphemisms ('dark thoughts?') get euphemistic answers; directness gets truth. Ask privately, listen fully, act TODAY: safety + referral + follow-up + documentation. A nurse who asks directly has never caused a suicide; nurses who hinted around have missed them. Ask.",
        },
      ],
      keyPoints: [
        "Interpreter: brief + eyes-on-patient + chunks + debrief; never children/family-for-sensitive.",
        "No interpreter: greetings + short + mime + pictures + apps + find one for consent/news.",
        "Humility: ask matters/deciders/customs; negotiate hospital + tradition; honour rituals.",
        "Literacy universal: pictures + demos + teach-back for all; 'many find this confusing…'.",
        "Suicide: ASK directly + safety + refer today + follow-up + document; never minimise.",
        "Psychosis/stigma: calm + needs + urgent refer; kind language; privacy fierce.",
      ],
      quiz: {
        questionIds: ["NG-MOD-TCOM-015"],
        keywords: ["interpreters", "languages", "cultural humility", "literacy", "teach-back", "pictures", "suicide", "self-harm", "psychosis", "stigma", "negotiate", "rituals", "Ewe", "Twi", "communal"],
        categories: ["fundamentals"],
      },
    },
  ],
};
