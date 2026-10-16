import type { CourseModule } from "../types";

export const foundationsOfTherapeuticCommunication: CourseModule = {
  slug: "foundations-of-therapeutic-communication",
  title: "Foundations of therapeutic communication",
  summary:
    "Talk that heals: what makes communication therapeutic, Peplau's three phases with the roles you play, empathy versus sympathy, the trust formula and non-therapeutic flags — then barriers versus builders, non-verbal dominance, congruence and Ghana's realities.",
  lessons: [
    {
      slug: "what-makes-communication-therapeutic",
      title: "What makes communication therapeutic",
      minutes: 18,
      objectives: [
        "Define therapeutic communication + goals.",
        "Run Peplau's 3 phases.",
        "Play the 6 Peplau roles.",
        "Choose empathy over sympathy.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Healing talk, not small talk",
          paragraphs: [
            "Social chat pleases; <strong>therapeutic communication</strong> HEALS — every conversation aims at a patient outcome: TRUST (they believe you), UNDERSTANDING (their story, beliefs, fears — and yours of them), INFORMED DECISIONS (consent that means something), COPING (strength for the road), ADHERENCE (medicines taken, reviews kept), DIGNITY (personhood intact). That is the exam definition: purposeful, patient-centred interaction promoting health and coping. Hildegard Peplau gave it the journey map — <strong>three phases</strong> (exam core!). <strong>1. ORIENTATION:</strong> 'hello, I'm Ama, your nurse — this is how we'll work together.' Introduce, contract (what to expect, visiting, call bell!), meet the stranger with respect, build FIRST trust. Skipped orientation = stranger-care: procedures on a body, not a person. <strong>2. WORKING:</strong> the care itself — assess deeply, plan together, act, teach, counsel, confront kindly ('you missed 3 doses — help me understand'). Trust deepens; the real fears surface here. <strong>3. TERMINATION:</strong> summarise gains ('your BP fell 180 to 140!'), agree the plan (meds, reviews, red flags), say GOODBYE properly, transfer trust ('nurse Kofi continues — I've told him everything'). Skipped termination = abandonment feelings, lost follow-up. Even 5-minute contacts run all three — orient in seconds ('I'm Ama, checking your wound — this takes 5 minutes'), work, terminate ('healing well — see you Thursday!'). Peplau's <strong>six roles</strong> (exam list!) ride the phases: stranger (respect the unknown person!) → resource (answers!) → teacher (skills!) → counsellor (feelings!) → surrogate (stand-in strength!) → leader (direction!). Match role to phase: orienting strangers need WELCOME, not lectures; grieving families need counsellor, not teacher.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-COM-0001.svg",
          alt: "Three phase boxes orientation working termination with scripts. Three phases explained with skip warnings and 5-minute version. Goals six listed with heals line. Six Peplau roles with phase matching. Empathy versus sympathy contrast with banned phrase. Trust formula five parts with drops-buckets line. Non-therapeutic flags six listed. Cross-course links. Mantra quoted.",
          caption: "Orient warmly, work honestly, end kindly — every contact, all three.",
        },
        {
          type: "text",
          heading: "Empathy, trust, flags",
          paragraphs: [
            "<strong>EMPATHY vs SYMPATHY</strong> (exam favourite — they WILL quiz this!): empathy = 'I hear how frightening this diagnosis is for you' — WITH them, in THEIR shoes, their feelings centred. Sympathy = 'oh poor you, I feel so bad' — ABOVE them, YOUR feelings centred, pitying distance. Empathy heals; sympathy distances. And NEVER 'I know how you feel' — you don't; her cancer, his amputation, their stillbirth are THEIRS. Alternatives: 'help me understand what this is like for you', 'that sounds overwhelming', silence + hand + presence (M02!). The <strong>TRUST FORMULA</strong>: competence (know your work!) + honesty (admit limits — 'I don't know, I'll find out' BUILDS trust!) + consistency (same nurse, same story — handover well, INF/PRO-I!) + respect (their values, elders, faith!) + time (SIT down — standing says 'hurry'!). Trust builds in DROPS and breaks in BUCKETS: one lie ('this won't hurt' — it does!), one mockery, one abandonment empties months. Finally the <strong>NON-THERAPEUTIC FLAGS</strong> (spot-the-worst-response questions!): false reassurance ('you'll be fine!' — you can't promise!), advice-giving ('if I were you…' — you're not!), judging ('you should have come earlier!' — shame silences!), changing subject (dodging feelings!), defending ('the doctor is busy!' — dismissing!), probing (curiosity, not care!). When exams ask 'best response?', eliminate flags first — the therapeutic answer is what's left standing.",
          ],
        },
        {
          type: "table",
          heading: "Therapeutic or toxic?",
          columns: ["Nurse says", "Verdict", "Why / better"],
          rows: [
            ["'You'll be fine, don't worry!'", "TOXIC — false reassurance", "'Worrying is natural — tell me your fears'"],
            ["'I hear how scary this is'", "THERAPEUTIC — empathy", "Their shoes, their words centred"],
            ["'If I were you, I'd…' ", "TOXIC — advice-giving", "'What matters most to you in this choice?'"],
            ["'You should have come sooner'", "TOXIC — judging", "'You're here now — let's work from today'"],
            ["'The doctor is very busy'", "TOXIC — defending", "'Waiting is hard — I'll chase your review'"],
            ["'Help me understand…'", "THERAPEUTIC — exploring", "Opens story; honours their expertise"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The exam elimination trick",
          body: "Stuck on 'best response?' questions? Strike any option with false reassurance, advice ('if I were you'), judgment ('you should'), subject-changing or defending the team. Of what's left, pick empathy + exploration ('that sounds…', 'tell me more…', 'help me understand…'). This trick alone passes half the communication paper — then learn WHY each winner heals.",
        },
      ],
      keyPoints: [
        "Therapeutic = purposeful talk aiming at trust, understanding, decisions, coping, adherence, dignity.",
        "Peplau 3 phases: orientation (welcome + contract) → working (care + counsel) → termination (gains + goodbye).",
        "Six roles: stranger → resource → teacher → counsellor → surrogate → leader; match to phase.",
        "Empathy WITH them ('I hear…'); sympathy ABOVE them ('poor you'); never 'I know how you feel'.",
        "Trust: competence + honesty + consistency + respect + time; drops build, buckets break.",
        "Flags: false reassurance, advice, judging, subject-change, defending, probing — eliminate first.",
      ],
      quiz: {
        questionIds: ["NG-MOD-TCOM-001", "NG-MOD-TCOM-002"],
        keywords: ["therapeutic", "Peplau", "orientation", "working", "termination", "roles", "empathy", "sympathy", "trust", "false reassurance", "advice", "judging", "goals", "stranger", "counsellor"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "barriers-builders-and-body-language",
      title: "Barriers, builders and body language",
      minutes: 18,
      objectives: [
        "Audit barriers before clinical talk.",
        "Read + use non-verbal 70%.",
        "Stay congruent always.",
        "Adapt to Ghana's realities.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Knock down, build up",
          paragraphs: [
            "Before ANY clinical talk, audit the contact: which BARRIERS are up? Standing over the bed (towering!), shouting over ward noise, English to a Twi-only elder, pain screaming louder than your words, fear freezing her ears — knock at least ONE down before teaching, consenting or counselling. Unheard messages are UNSPOKEN ones. <strong>Patient-side barriers</strong>: pain (treat FIRST, talk after — agony hears nothing!), fear, shame (STI? fistula? mental illness? teen pregnancy? — privacy + normalising open these!), low literacy (pictures + demos + teach-back, NUT's method!), deafness (face + light + write!), denial (don't bulldoze — M04!). <strong>Nurse-side barriers</strong>: rushing ('I have 40 patients' shows in every gesture!), jargon ('hypertension' → 'BP high — blood pushing too hard!'; 'oedema' → 'swelling with water!'), assumptions ('illiterate = unintelligent' — NEVER; market queens calculate faster than calculators!), fatigue, prejudice (tribal, religious, moral — check yourself AT THE CURTAIN). <strong>Builders cost nothing</strong>: a CHAIR (sitting = 'you matter' — the single mightiest builder!), a curtain (privacy!), a greeting in THEIR language ('maakye!' melts Accra mornings!), unhurried eyes, plain words, appropriate humour, honest hope. Ghana's realities (exam gold!): 80+ LANGUAGES — learn greetings, use trained interpreters, NEVER children for bad news (M05!); COMMUNAL decisions — family meetings, elder respect, 'let me discuss with my husband' is process, not refusal!; SPIRITUAL framing — 'by God's grace' walks WITH medicine, never versus ('God AND the drip are working!'); HIERARCHY — kneel/greet elders properly, titles matter ('Maame', 'Nana', 'Pastor').",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-COM-0002.svg",
          alt: "Four boxes barriers builders non-verbal-70 congruence with examples. Audit guidance with builders list. Non-verbal channels face eyes posture touch space time. Congruence lying example. Ghana realities languages communal spiritual hierarchy. Patient-side barriers six with responses. Nurse-side barriers five with translations. Mantra quoted.",
          caption: "Sit, greet, curtain, plain words — then clinical talk.",
        },
        {
          type: "text",
          heading: "The 70% you don't say",
          paragraphs: [
            "Non-verbal carries ~70% of meaning — patients believe your BODY over your words. Channels: FACE (warmth and worry LEAK — arrange concern, never disgust, whatever the wound!); EYES (attention vs screen-staring — look, then chart!); POSTURE (lean in, uncross arms — open body, open nurse!); GESTURES (open palms, nodding — not pointing, not crossed!); TOUCH (hand on forearm = courage; shoulder = solidarity — but ask CULTURE + consent: some faiths, genders and traumas restrict touch — 'may I hold your hand?' honours all!); SPACE (bedside-close, eye-level — not towering over the pillow!); TIME (sitting even 2 minutes says 'you matter' louder than 10 standing minutes!). Then <strong>CONGRUENCE</strong>: words + face + tone must MATCH — 'I'm listening' with eyes on the phone is a LIE the patient believes over the words. Incongruence destroys trust faster than silence: smiling while giving bad news, hurrying while saying 'take your time', frowning while saying 'no problem'. When feelings leak (shock at a wound, tears at a stillbirth), honesty beats acting: 'this moves me too — I'm here with you' (congruent humanity!). Exam scenarios test: 'nurse says X while doing Y — problem?' — answer: INCONGRUENCE, trust damage, fix by aligning (stop, sit, eyes, honesty). And document the non-verbal you observed ('clenched fists, tearful, avoiding eye contact') — it IS assessment data (INF M02!). Mantra: 'sit, greet, curtain, plain words — then clinical talk.'",
          ],
        },
        {
          type: "table",
          heading: "Body-language checks",
          columns: ["Channel", "Therapeutic", "Trust-killer"],
          rows: [
            ["Position", "Sit, eye-level, bedside-close", "Tower over bed; doorway hovering"],
            ["Eyes", "Attentive gaze + notes pause", "Phone-screen nursing"],
            ["Face/tone", "Warm, matching gravity", "Smiling bad news; snapping answers"],
            ["Touch", "Consented hand/forearm/shoulder", "Unasked grabbing; flinching away"],
            ["Words", "Plain + their language + teach-back", "Jargon + rushing + no check"],
            ["Setting", "Curtain + chair + privacy", "Corridor consults; audience care"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The chair challenge",
          body: "This week: sit for EVERY patient conversation, however brief. Notice what changes — longer stories, named fears, thanked nurses. Time studies prove it: sitting FEELS longer to patients while taking no extra minutes. The cheapest therapeutic tool in nursing is a chair — pull it up, lean in, and watch trust build in drops.",
        },
      ],
      keyPoints: [
        "Audit barriers first: pain, fear, shame, literacy, language, noise — meet barrier before message.",
        "Nurse barriers: rushing, jargon, assumptions, fatigue, prejudice — checked at the curtain.",
        "Builders: chair + curtain + their-language greeting + eyes + plain words + humour + hope.",
        "Non-verbal 70%: face, eyes, posture, gestures, consented touch, space, sitting time.",
        "Congruence: words + face + tone match — incongruence kills trust faster than silence.",
        "Ghana: 80+ languages, communal decisions, spiritual framing, elder hierarchy — exam gold.",
      ],
      quiz: {
        questionIds: ["NG-MOD-TCOM-003"],
        keywords: ["barriers", "builders", "non-verbal", "congruence", "jargon", "literacy", "teach-back", "touch", "consent", "languages", "interpreters", "communal", "spiritual", "chair", "privacy"],
        categories: ["fundamentals"],
      },
    },
  ],
};
