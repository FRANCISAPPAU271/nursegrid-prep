import type { CourseModule } from "../types";

export const bedsideCapstone: CourseModule = {
  slug: "bedside-capstone",
  title: "Bedside capstone",
  summary:
    "Everything, everywhere, all at once: four complex pluralist cases worked through the capstone wheel — ASK, SAFETY, SORT, SHARE, BRIDGE, SUSTAIN — then the full exam map, likely OSCE stations, and the TCAM-ready nurse's lifelong habits.",
  lessons: [
    {
      slug: "complex-pluralist-cases",
      title: "Complex pluralist cases",
      minutes: 20,
      objectives: [
        "Spin the full wheel.",
        "Juggle multi-risks.",
        "Negotiate hard cases.",
        "Defend every decision.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Wheel + cases",
          paragraphs: [
            "Real patients never carry ONE issue — meet the wheel: <strong>ASK → SAFETY → SORT → SHARE → BRIDGE → SUSTAIN</strong>. <strong>CASE 1 — diabetic elder, bitters + fasting + prayer camp</strong>: ASK — 'sugar disease from worry; bitters bd from herbalist; dry fasts Wednesdays; camp weekends; fears insulin = dying'. SAFETY — bitters + metformin = hypo risk! fasting + drugs = hypo! camp = missed doses! SORT — bitters: sequence (test + dose-adjust, FDA check!); fasting: SUBSTITUTE modified fast + dawn/dusk dosing ('God excuses the sick!'); camp: negotiate take-drugs + return dates. SHARE — LEARN with elder + daughter + pastor: 'tablets AND prayer — God guides the drip!' BRIDGE — note to herbalist (reduce bitter dose? licensed?) + pastor looped. SUSTAIN — 5-line note + hypo teach-back + Friday review + bring ALL bottles. <strong>CASE 2 — pregnant woman, herbalist oxytocics + ANC</strong>: ASK — 'quick-labour herbs from TBA; fears hospital episiotomy; previous stillbirth at camp'. SAFETY — RED: unmeasured oxytocics = rupture! previous stillbirth = HIGH RISK! SORT — herbs: REFUSE with reason + substitute (dates? walking? prayer!) + facility delivery negotiated. SHARE — LEARN + TBA escort deal ('you bring her, we deliver together, you cut cord!'). BRIDGE — TBA thanked + red-flag taught + number exchanged. SUSTAIN — birth plan written + danger signs + TBA feedback after delivery.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-TCM-0013.svg",
          alt: "Six boxes capstone wheel with mantra bar. Ask Kleinman plus inventory. Safety interactions plus holds. Sort welcome-sequence-substitute-refuse. Share LEARN plus both-and. Bridge loop plus notes plus feedback. Sustain five-line plus audit. Mantra quoted.",
          caption: "Six spokes, every case — skip one and the wheel wobbles.",
        },
        {
          type: "text",
          heading: "More cases",
          paragraphs: [
            "<strong>CASE 3 — hypertensive man, MLM pills + stroke fear</strong>: ASK — 'pressure from thinking too much; GH₵400/month miracle capsules (no FDA number!); stopped amlodipine; fears stroke like father'. SAFETY — uncontrolled HTN + mystery capsules (caffeine? diuretics? steroids!) + cost harm (NHIS lapsed!). SORT — 4Q check: help? unproven! harm? unknown contents! DELAY? yes — drugs stopped! afford? no! → negotiate STOP capsules + RESTART amlodipine + report seller via FDA channels. SHARE — LEARN + budget maths ('capsules = 8 months of NHIS + drugs!') + wife looped. BRIDGE — refer to hospital herbal unit if he insists on 'natural' (safe adjuncts!). SUSTAIN — BP diary + 2-week review + teach-back. <strong>CASE 4 — febrile child, razor marks + convulsions</strong>: ASK — 'fits from evil eye; razor cuts by mallam; herbal enema given; fears hospital injections'. SAFETY — EMERGENCY: ABCs + antipyretic + malaria/RDT + sepsis screen! cuts = infection/tetanus risk! enema = dehydration! SORT — cuts/enemas: REFUSE harm + substitute (anointing + prayer AT bedside!). SHARE — LEARN fast + blame-free ('the cuts show love — now let's fight the fever together!') + father looped. BRIDGE — mallam engaged later ('refer fits EARLY — Allah rewards swift care!'). SUSTAIN — tetanus check + wound care + convulsion plan + follow-up. Exam: defend EACH spoke aloud — safety FIRST, respect ALWAYS, documentation CLOSING.",
          ],
        },
        {
          type: "table",
          heading: "Case wheels",
          columns: ["Case", "Sharpest risk", "Key move"],
          rows: [
            ["Diabetic + bitters + fast", "Hypo + missed doses", "Modified fast + dawn/dusk + pastor"],
            ["Pregnant + oxytocic herbs", "Rupture + stillbirth repeat", "Refuse + TBA escort deal"],
            ["HTN + MLM capsules", "Stroke + cost harm", "4Q check + budget maths + restart"],
            ["Febrile fits + razor cuts", "Sepsis + tetanus + dehydration", "ABCs + substitute rites + mallam loop"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Work one real case",
          body: "This week: pick your ward's most complex pluralist patient and spin the FULL wheel on paper — all six spokes, written. Present it at handover in three minutes. One fully-worked case teaches more than ten skimmed chapters — and handovers that hear wheels start spinning them.",
        },
      ],
      keyPoints: [
        "Wheel: ASK → SAFETY → SORT → SHARE → BRIDGE → SUSTAIN — every case, all spokes.",
        "Diabetic: bitters sequence + modified fast + pastor loop + hypo teach-back.",
        "Pregnant: refuse oxytocics + substitute + TBA escort deal + birth plan.",
        "HTN: 4Q-check MLM + budget maths + restart drugs + report seller.",
        "Fits: ABCs first + refuse cuts blame-free + substitute rites + mallam loop.",
        "Defend aloud: safety first + respect always + documentation closing.",
      ],
      quiz: {
        keywords: ["capstone", "wheel", "diabetic", "fasting", "pregnant", "oxytocic", "MLM", "budget", "convulsion", "ABCs", "tetanus", "escort", "defend", "spokes", "complex"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "exam-map-and-tcam-ready-nurse",
      title: "Exam map and TCAM-ready nurse",
      minutes: 16,
      objectives: [
        "Map all seven modules.",
        "Rehearse OSCE stations.",
        "Audit yourself ready.",
        "Keep lifelong habits.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Exam map",
          paragraphs: [
            "Walk in MAPPED. <strong>M01</strong> — define TCAM + medical pluralism; why patients combine (access! cost! belief! trust!); nurse's bridging role. <strong>M02</strong> — healer types + crafts (bonesetters! TBAs! spiritualists!); five remedy families (leaves! barks! bitters! topical! ritual!) + belief roots. <strong>M03</strong> — interaction TRIADS: warfarin + bitters/garlic/ginkgo; diabetes drugs + moringa/bitter leaf; BP drugs + garlic/hibiscus/liquorice; pregnancy RED list (unmeasured oxytocics! purgatives! lead powders!) + surgery stops (2 weeks! bleeding!). <strong>M04</strong> — massage 7 contraindications (DVT legs NEVER! fractures! infection! cancer sites! bleeding! first-trimester abdomen! refusal!); breathing 4-2-6; 4Q evidence check (help? harm? DELAY? afford?); scope line (does/refers/refuses). <strong>M05</strong> — Kleinman 8; LEARN 5; barriers + fixes; disclosure rules (blame substance never mother!); 5-line note. <strong>M06</strong> — Act 595 + Council; FDA numbers; two-way referrals + bridge rules; ward checklist; reporting channels. <strong>M07</strong> — capstone wheel, six spokes, defended aloud. Cross-cutting examiners LOVE: both-and language · quoted beliefs · review dates · teach-back · harm refused + documented + reported. Marking order: SAFETY first, RESPECT second, DOCUMENTATION third — structure EVERY long answer that way.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-TCM-0014.svg",
          alt: "Two boxes exam map plus OSCE stations. Module must-knows M01 to M07 plus cross-cutting lines. OSCE six stations listed. Marking order quoted.",
          caption: "Seven modules mapped, six stations rehearsed — walk in ready.",
        },
        {
          type: "text",
          heading: "TCAM-ready nurse",
          paragraphs: [
            "Certificates fade — HABITS stay. <strong>SELF-AUDIT</strong> (score yourself honestly!): I ask EVERY admission about TM use ☐ · I can run Kleinman 8 in under 6 minutes ☐ · I know my 3 nearest trusted healers by NAME ☐ · I check FDA numbers before nodding ☐ · I write 5-line negotiated notes ☐ · I set review dates, not vague returns ☐ · I report harm via channels, never freelance ☐ · I teach-back every discharge ☐. 8/8 = TCAM-ready; below 6 = REVISIT the weak module this week. <strong>LIFELONG HABITS</strong>: monthly ward audit (admissions asked? plans listing? discharges counselled?) · quarterly healer greetings (numbers stay warm!) · yearly Council/FDA updates (lists change!) · every handover a Kleinman story ('her model was… so we…') — stories recruit colleagues faster than lectures. <strong>FINAL WORD</strong>: Ghana's patients were pluralist before you qualified and will be after you retire. The question was never 'hospital OR healer?' — it is 'safe AND respected?' The TCAM-ready nurse answers YES at every bedside: warm questions, sharp safety, honest negotiation, faithful documentation. Spin the wheel. 🌿",
          ],
        },
        {
          type: "table",
          heading: "Readiness audit",
          columns: ["Habit", "Ready looks like", "Fix if weak"],
          rows: [
            ["Admission asking", "100% asked + quoted", "Clipboard prompt + M05"],
            ["Kleinman speed", "8 Qs < 6 min", "Practise 3 patients + M05"],
            ["Healer map", "3 names + phones", "Visit + greet + M06"],
            ["FDA checking", "Number + expiry always", "Market walk + M06"],
            ["Negotiated notes", "5 lines every plan", "Template + M05"],
            ["Review dates", "Fixed, never vague", "Diary habit + M05"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Teach one colleague",
          body: "Graduation task: teach ONE colleague the capstone wheel this week — six spokes on one page, one case worked. Teaching fixes learning permanently, and every colleague taught doubles your ward's TCAM safety. The course ends; the bridging begins. 🌿",
        },
      ],
      keyPoints: [
        "Map: M01 define + M02 healers/remedies + M03 triads/reds/stops + M04 DVT-NEVER/4Qs.",
        "Map: M05 Kleinman/LEARN/note + M06 Act-595/FDA/bridge + M07 wheel defended.",
        "Marking order: SAFETY → RESPECT → DOCUMENTATION — structure every answer so.",
        "OSCE: bitters counsel + TM history + camp discharge + breathing + FDA + note.",
        "Audit 8 habits; below 6 = revisit weak module this week.",
        "Lifelong: monthly audits + quarterly greetings + yearly updates + handover stories.",
      ],
      quiz: {
        keywords: ["exam", "OSCE", "audit", "ready", "habits", "map", "marking", "safety", "respect", "documentation", "teach", "lifelong", "stories", "colleague", "wheel"],
        categories: ["fundamentals"],
      },
    },
  ],
};
