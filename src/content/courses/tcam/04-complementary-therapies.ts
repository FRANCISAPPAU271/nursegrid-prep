import type { CourseModule } from "../types";

export const complementaryTherapies: CourseModule = {
  slug: "complementary-therapies",
  title: "Complementary therapies",
  summary:
    "Healing hands and honest welcomes: nurse-scope massage with contraindications, breathing and relaxation prescriptions, family teaching — then faith partnership, supplement counselling, other therapies awareness, the 4-question evidence check and the scope line.",
  lessons: [
    {
      slug: "massage-touch-and-relaxation",
      title: "Massage, touch and relaxation",
      minutes: 18,
      objectives: [
        "Give hand/foot/back massage.",
        "Teach breathing + relaxation.",
        "Respect contraindications.",
        "Consent + document touch.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Massage in scope",
          paragraphs: [
            "Therapeutic massage sits INSIDE nursing scope — prescribed like medicine, documented like interventions. <strong>HAND massage</strong> (chemo nausea! anxiety! agitation! — 5 min, lotion, slow circles!) · <strong>FOOT massage</strong> (sleep! labour! dying elders! — shea butter, thumbs along soles!) · <strong>BACK/SHOULDER</strong> (tension! grief-held bodies! night-shift backs!) — 5–15 minutes, warm hands, consent, quiet. HOW: warm hands + oil/shea butter + SLOW strokes toward the heart + ask pressure ('more? less?') + breathe TOGETHER + 5-minute minimum + close ('rest now — I'll check soon'). Teach FAMILY: labour back-rubs! dying foot-rubs! colicky-baby tummy circles! — skills that OUTLAST shifts and bond families into care. <strong>BREATHING</strong>: in-4, hold-2, OUT-6 (long OUT calms the vagus!) — panic (breathe WITH them, count aloud! — BEH!), labour (slow rhythm + partner counts!), pain (breath + imagery — 'blow the pain away'!), hypertension (daily practice lowers readings!). Teach + PRACTISE + cue cards ('fridge: breathe 4-2-6!'). <strong>RELAXATION</strong>: progressive tense-RELEASE (feet → face, hold 5, release!) · guided IMAGERY (river! farm! beach! church peace!) · MUSIC (gospel! highlife softly! — patient-chosen!) · prayer-MEDITATION (faith-framed calm — next lesson!). Prescribe SESSIONS: 'insomnia: imagery + music nightly 2 weeks — diary!' — reviewed like drugs.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-TCM-0007.svg",
          alt: "Five boxes massage breathing relaxation contraindications consent-culture. Massage three sites with family teaching. How-to steps plus document response. Breathing technique plus panic labour pain uses. Relaxation four methods plus prescription. Contraindications seven with check-then-touch. Consent culture gender chaperone document. Mantra quoted.",
          caption: "Warm hands, slow breath, consent first, document response.",
        },
        {
          type: "text",
          heading: "Safety + consent",
          paragraphs: [
            "<strong>CONTRAINDICATIONS</strong> (exam!): DVT/clots — NEVER massage legs (embolus!) · fractures/dislocations · skin INFECTION/burns/open wounds · CANCER sites (ask doctor — lymphoedema rules!) · BLEEDING disorders/anticoagulants (gentle only!) · first-trimester ABDOMEN · any patient REFUSAL (always final!). CHECK, then touch — 'clots? fractures? skin? cancer? blood thinners…?' <strong>CONSENT + CULTURE</strong> (COM!): 'may I massage your feet…?' + GENDER match offered ('prefer a female nurse?') + faith respected + chaperone where apt + DOCUMENT consent + response (pain 7→4! slept 2h!). Touch HEALS; unconsented touch HARMS — same hands, different ethics. <strong>Exam favourites</strong>: 'massage for DVT leg?' — NEVER + explain + alternatives (breathing! other limb!). 'Labour pain, no drugs?' — back pressure + breathing + partner + positions + prayer. 'Dying elder, restless?' — foot massage + presence + family taught + music. 'Chemo nausea?' — hand massage + ginger (M02!) + breathing. <strong>Document</strong> (INF!): consent + site + minutes + technique + response + teaching ('consented foot massage 10 min — pain 7→4, slept — daughter taught'). Complementary therapies charted = complementary therapies COUNTED — counted ones get prescribed, funded, sustained.",
          ],
        },
        {
          type: "table",
          heading: "Touch prescriptions",
          columns: ["Needs", "Prescribe", "Watch"],
          rows: [
            ["Labour pain", "Back pressure + breathing + partner", "Consent + positions + progress"],
            ["Chemo nausea/anxiety", "Hand massage + ginger + breath", "Counts? skin? fatigue?"],
            ["Dying restlessness", "Foot massage + presence + music", "Family taught + grief held"],
            ["Panic attack", "Breathe WITH + count + ground", "Medical causes? follow-up?"],
            ["Insomnia/HTN", "Imagery + music nightly + diary", "Review 2 weeks + adjust"],
            ["DVT leg pain", "NEVER massage — elevate + doctor", "Explain + other-limb comfort"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Five-minute hands",
          body: "This week: give THREE 5-minute hand or foot massages — one anxious, one sleepless, one grieving patient. Document consent + response. Watch pain scores fall, sleep come, thanks flow. Five-minute hands convert task-nurses into healers — and families taught convert wards into healing homes.",
        },
      ],
      keyPoints: [
        "Massage: hand/foot/back 5-15 min + shea + consent — prescribe + document response.",
        "Teach family: labour backs + dying feet + colic tummies — skills outlast shifts.",
        "Breathing 4-2-6: panic + labour + pain + HTN — teach + practise + cue cards.",
        "Relaxation: tense-release + imagery + music + prayer-calm — sessions like drugs.",
        "Contraindications: DVT legs NEVER + fractures + skin + cancer sites + refusal final.",
        "Consent + culture + chaperone + document — touch heals, unconsented harms.",
      ],
      quiz: {
        keywords: ["massage", "shea", "breathing", "relaxation", "imagery", "music", "DVT", "contraindications", "consent", "labour", "panic", "insomnia", "document", "family", "vagus"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "faith-supplements-and-other-therapies",
      title: "Faith, supplements and other therapies",
      minutes: 18,
      objectives: [
        "Partner faith healing.",
        "Counsel supplements.",
        "Know cupping/aroma/acu basics.",
        "Hold the scope line.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Faith + supplements",
          paragraphs: [
            "FAITH is Ghana's #1 complementary therapy — partner it EXPERTLY: pray WITH consent ('shall we pray before theatre…? your pastor or me…?') · clergy WELCOMED (visiting flexed! bedside space!) · fasting SCHEDULED with drugs (dawn/dusk dosing! exemptions taught — 'God excuses the sick!') · holy water/oils ALLOWED where harmless · healing SERVICES + treatment TOGETHER ('both — God guides the drip!'). Refuse ONLY harm: stopped DRUGS ('faith without medicine here kills — let's do both!') · CHAINING/beating (Mental Health Act! BEH!) · STARVATION fasts (negotiate modified!) · detention (treat-here-pray-here deals!). <strong>SUPPLEMENTS</strong>: vitamins (D? iron? B12? — TEST deficiencies, NUT!) · 'miracle' MLM pills (CHECK: FDA number? cost? DELAYS real care?! — sellers profit from hope!) · protein powders (kidneys? cost vs eggs/beans?!) · 'blood tonics' (alcohol? sugar? REAL iron?). Counsel: FOOD first (NUT! — 'moringa + beans beat bottles!') · deficiencies TESTED not guessed · claims VERIFIED ('shrinks fibroids?' — evidence?) · budgets GUARDED (pills vs school fees vs NHIS renewal — help prioritise!). Sellers target fear + hope + queues — nurses target TRUTH + budgets + timing ('buy AFTER the scan, not instead!').",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-TCM-0008.svg",
          alt: "Five boxes faith supplements others evidence-check scope-line. Faith six partnership moves plus harm-refusals. Supplements four types plus food-first counsel plus budget guard. Others cupping aroma acupuncture chiropractic homeopathy with cautions. Evidence 4Qs help harm delay afford. Scope nurse-does refers refuses plus document. Cross-course links. Mantra quoted.",
          caption: "Welcome the harmless, check the costly, refuse the harmful.",
        },
        {
          type: "text",
          heading: "Others + scope line",
          paragraphs: [
            "<strong>OTHERS — know + refer, never DIY</strong>: CUPPING (hygiene? sterile cups? ANAEMIA screened? — blood loss + infection risks!) · AROMATHERAPY (lavender calm? eucalyptus steam? — ALLERGIES! asthma! babies!) · ACUPUNCTURE (trained + sterile needles ONLY — refer to qualified, hepatitis/HIV risks from quacks!) · CHIROPRACTIC (backs? — NECK manipulation danger! refer carefully!) · HOMEOPATHY (harmless dilutions? — DELAYS real care? cost?). Know enough to COUNSEL + REFER safely; practise NONE without training + licence. <strong>EVIDENCE CHECK — 4 questions</strong> (every therapy!): does it HELP (what proof — trials? experience? hope?) · does it HARM (direct? side-effects? cost-harm?) · does it DELAY needed care (THE killer question — 'meanwhile the cancer grows!') · can they AFFORD it (vs food/fees/drugs — opportunity cost kills!). Help + harmless + affordable = WELCOME ('massage + drugs together!'); delays care = negotiate URGENTLY (M05!). <strong>SCOPE LINE</strong> (PRO-I!): NURSE DOES — massage + breathing + relaxation + pray-with + education + coordination. REFERS — acupuncture + chiropractic + herbalist-prescribing + intense rites + complex fasting. REFUSES — chaining/beating + starvation + secret injections + 'stop drugs' orders + anything harming — with REASON documented + alternatives offered. Exam: 'pastor says stop ARVs?' — negotiate both + elder meeting + document + follow-up. 'MLM pills instead of chemo?' — evidence 4Qs + costs + delays + negotiate + document.",
          ],
        },
        {
          type: "table",
          heading: "Complement checks",
          columns: ["Patient wants", "4Q check", "Nurse does"],
          rows: [
            ["Prayer + chemo", "Helps spirit; harmless; no delay", "Welcome + clergy + coordinate"],
            ["MLM pills INSTEAD of drugs", "Delays! costly! unproven!", "Evidence talk + negotiate both + follow"],
            ["Cupping for back pain", "Hygiene? anaemia? delay?", "Screen + sterile-only + refer + review"],
            ["Fasting vs diabetic drugs", "Hypo! harm!", "Modified fast + dosing + pastor loop"],
            ["Acupuncture, chronic pain", "Trained? sterile? adjunct?", "Refer qualified + continue meds"],
            ["'Stop drugs, faith only'", "Delay = danger!", "Negotiate both + elders + document"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Both-and language",
          body: "Banish 'either-or' from TCAM talk: every counsel ends 'BOTH' — 'prayer AND drugs', 'massage AND analgesia', 'fasting AND dawn-dosing', 'herbs AND hospital'. Both-and keeps patients inside care; either-or exiles them. Practise the sentence this week: 'God guides the drip — let's do both.' Watch shoulders drop and trust rise.",
        },
      ],
      keyPoints: [
        "Faith #1: pray-with + clergy + fasting scheduled + services-together; refuse only harm.",
        "Supplements: food first + test don't guess + verify claims + guard budgets.",
        "Others: cupping/aroma/acu/chiro/homeo — know + refer, DIY never.",
        "4Qs: help? harm? DELAY? afford? — delays-care = negotiate urgently.",
        "Scope: nurse does touch/breath/prayer/educate; refers acu/chiro/Rx; refuses harm + documents.",
        "Both-and language every counsel: 'prayer AND drugs' keeps patients inside care.",
      ],
      quiz: {
        keywords: ["faith", "prayer", "clergy", "fasting", "supplements", "MLM", "cupping", "aromatherapy", "acupuncture", "evidence", "delays", "scope", "both-and", "budgets", "refer"],
        categories: ["fundamentals"],
      },
    },
  ],
};
