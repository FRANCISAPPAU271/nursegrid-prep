import type { CourseModule } from "../types";

export const nutritionAssessment: CourseModule = {
  slug: "nutrition-assessment",
  title: "Nutrition assessment",
  summary:
    "Measure, read, act: BMI and MUAC cutoffs with oedema overrules, WHO growth charts with trend-reading, calibrated technique and documentation that teaches mothers — then the ABCD framework with 15-minute diet histories, labs that confirm, head-to-toe clinical signs, synthesis into classified action with referral chains, and special passes for pregnancy, elders and illness.",
  lessons: [
    {
      slug: "anthropometry-and-growth",
      title: "Anthropometry and growth",
      minutes: 20,
      objectives: [
        "Apply BMI and MUAC cutoffs correctly.",
        "Read WHO growth charts by trend.",
        "Measure with calibrated technique.",
        "Document and teach chart-reading.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Cutoffs that triage",
          paragraphs: [
            "<strong>BMI</strong> (adults, kg/m²): <18.5 underweight (<16 severe thinness), 18.5–24.9 healthy, 25–29.9 overweight, ≥30 obese — FAILS in pregnancy, athletes, oedema and elders with kyphosis (use MUAC/clinical instead). <strong>MUAC 6–59 months</strong>: <11.5 cm RED = SAM, 11.5–12.5 YELLOW = MAM, ≥12.5 GREEN — PLUS <strong>oedema check both feet</strong> (press 3 s; pit = SAM at ANY MUAC — Module 05 protocol!). <strong>MUAC older</strong>: 5–9 y <13.5 low; adults <23 low; pregnancy <23 at-risk (feed + follow — Module 03). <strong>Waist</strong>: men >102 cm, women >88 cm = metabolic risk (Module 05 obesity). <strong>Weight trend</strong>: 5% unintentional in 3 months = red flag (MUST — GER M06). Left arm, midpoint, tape flat and snug-not-tight; same time of day; light clothes; zeroed scales. Wrong measure = wrong child: the 11.4 read as 11.6 misses SAM; the oedema unchecked misses kwashiorkor entirely.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-NUT-0003.svg",
          alt: "Three cutoff panels: adult BMI bands with failure groups, child MUAC traffic lights with oedema overrule, older MUAC bands with technique. Growth charts: WFA HFA WFH head circumference with minus-2 and minus-3 lines, plotting rules, length versus height technique. Technique box: calibration, oedema press. Adult extras: waist, trend, grip, pregnancy. Reading rules: trends, stunting chronic, wasting acute, double burden. Documentation and mother-teaching listed.",
          caption: "Measure twice, plot always, read trends — oedema overrules every tape.",
        },
        {
          type: "text",
          heading: "Growth charts: lines that talk",
          paragraphs: [
            "WHO under-5 charts: <strong>weight-for-age</strong> (underweight), <strong>height-for-age</strong> (STUNTING — chronic story: feed + infections + care history), <strong>weight-for-height</strong> (WASTING — acute: food NOW + illness hunt), <strong>head circumference</strong> (brain growth). Below −2 SD = malnourished, below −3 SD = SEVERE. <strong>Plot EVERY visit</strong> — flat or falling lines alarm BEFORE cutoffs do (the child sliding from −1 to −1.8 is failing while 'normal'). Length <2 years lying (two measurers for squirmers), height ≥2 standing, shoes off, Frankfurt gaze (eyes forward). Stunting = months of deficit (counsel + infections + deworm + follow — M03/M06); wasting = weeks (therapeutic feeds per protocol — M05); BOTH + oedema = SAM emergency. Ghana's double burden appears on one chart set: stunted toddler, overweight mother — counsel the HOUSEHOLD (M01 plates + M05), not just the child.",
          ],
        },
        {
          type: "text",
          heading: "Technique + documentation + mothers",
          paragraphs: [
            "Calibrate scales MONTHLY (known weight test); replace stretched MUAC tapes and torn charts — equipment lies kill quietly. Repeat odd readings; read eye-level; record immediately (memory invents). <strong>Document</strong>: date, weight, height/length, MUAC, oedema Y/N, z-scores, chart plotted + filed, classification, action + review date (PRO-I M5). <strong>Teach mothers to READ</strong>: 'line going UP = growing well; flat/falling = come back SOON' — demonstrate on HER child's chart, teach-back, praise attendance. Literate mothers return; lectured mothers default. Weighing days (CWC/outreach) are retention engines: fast queues, kind words, plotted charts handed over, defaulters traced (M06 community). Audit your measures (PRO-II M4): re-measure 5% (supervisor check), track SAM-detection rates — quality anthropometry finds the hidden hungry.",
          ],
        },
        {
          type: "table",
          heading: "Reading drills: what the chart says",
          columns: ["Finding", "Read it", "Do it"],
          rows: [
            ["MUAC 11.2, no oedema, alert, eating", "SAM, uncomplicated", "OTP/RUTF per protocol + counsel + weekly review (M05)"],
            ["MUAC 12.8 BUT bilateral pitting oedema", "SAM (kwashiorkor) — oedema rules", "Urgent protocol care + refer (M05); never 'green, go home'"],
            ["WFA sliding −1 → −1.8 over 3 visits", "Faltering, pre-cutoff", "Diet + illness hunt + deworm + 2-week review, not reassurance"],
            ["HFA −2.6, WFH normal, frequent diarrhoea", "Stunting, chronic", "Feed + WASH + deworm + follow growth (M03/M06)"],
            ["BMI 32, waist 96, mother of stunted child", "Obesity + household double burden", " counsel mother (M05) + feed child — same kitchen, two plans"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Oedema overrules every tape",
          body: "Bilateral pitting oedema = kwashiorkor/SAM at ANY MUAC, ANY weight — the chubby-cheeked 'healthy' toddler with swollen feet is an emergency, not a reassurance. Check feet on EVERY under-5 contact (press both dorsums 3 seconds), document Y/N always, and act same-day per SAM protocol (Module 05). Nurses who skip feet miss kwashiorkor; nurses who check feet save the children scales call 'fine'. Feet first, tape second, chart always.",
        },
      ],
      keyPoints: [
        "BMI bands + failures (pregnancy/athletes/oedema); MUAC traffic lights + oedema = SAM any tape.",
        "Growth: WFA/HFA/WFH/HC with −2/−3 lines; plot every visit; trends beat points.",
        "Stunting = chronic story; wasting = acute action; double burden counsels households.",
        "Technique: calibrated, repeated, eye-level, two measurers; feet pressed 3 s always.",
        "Document ABCD-ready (date, measures, z-scores, action, review); teach mothers to read charts.",
        "Audit measures; trace defaulters; weighing days retain with kindness + speed.",
      ],
      quiz: {
        questionIds: ["NG-MOD-NUTR-003", "NG-MOD-NUTR-004"],
        categories: ["fundamentals", "pediatrics"],
        keywords: ["BMI", "MUAC", "SAM", "MAM", "oedema", "kwashiorkor", "growth chart", "z-score", "stunting", "wasting", "underweight", "waist", "calibrate", "trend", "CWC"],
      },
    },
    {
      slug: "diet-histories-labs-and-signs",
      title: "Diet histories, labs and signs",
      minutes: 20,
      objectives: [
        "Take 15-minute kindly diet histories.",
        "Order and chase confirming labs.",
        "Run head-to-toe clinical passes.",
        "Synthesize ABCD into dated action.",
      ],
      blocks: [
        {
          type: "text",
          heading: "ABCD: the full assessment",
          paragraphs: [
            "<strong>A — Anthropometric</strong> (last lesson: weight, height, MUAC, BMI, oedema, trends) + <strong>B — Biochemical</strong> (labs confirm: Hb/Hct anaemia + cause hunt — M01 trio; albumin/prealbumin protein stores slow/fast; glucose/HbA1c — M04; lipids; K+/Na/Mg/PO4 re-feeding + diuretics — M05; creatinine/eGFR; iron/B12/folate/D as indicated; stool worms; malaria where febrile) + <strong>C — Clinical</strong> (head-to-toe: hair red/easy-pluck protein; eyes pale/Bitot/night-blind; mouth glossitis/cracks/thrush/dentures; skin flaky-paint/poor-heal/oedema; nails spoon/pale; thyroid goitre; nerves numbness/reflexes B1/B12; muscle/fat wasting temples/shoulders/buttocks + grip) + <strong>D — Dietary</strong> (below). Labs CONFIRM, nurses' eyes SUSPECT — order with reason ('Hb: pale + pregnant + pica'), chase results (unread labs harm twice), act + document. Special passes: pregnancy (gain + Hb + BP + urine — M03), elders (MUST + teeth + swallow + loneliness — GER), illness (appetite + losses + needs UP), post-op (protein + healing).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-NUT-0004.svg",
          alt: "ABCD panels: anthropometric measures, biochemical lab list, clinical head-to-toe signs, dietary history domains. Diet history chain: recall frequency money beliefs cook-teeth-appetite with no-shame rule. Labs-that-matter list with order-chase-act rule. Clinical pass linked to Module 1 signs. Synthesis chain: ABCD plus MUST to classify counsel treat refer review with same-day red flags. Special passes: pregnancy elders illness post-op.",
          caption: "ABCD every assessment — labs confirm, eyes suspect, diet explains, action dated.",
        },
        {
          type: "text",
          heading: "The kindly diet history",
          paragraphs: [
            "15 minutes: <strong>24-hour recall</strong> ('everything yesterday — drinks, snacks, bites, tastes while cooking') → <strong>frequency</strong> (protein/veg/fruit/eggs/milk WEEKLY? — gaps pattern here) → <strong>money</strong> (food budget? seasons? hungry months? who eats first/last?) → <strong>beliefs</strong> (taboos? fasting? 'hot/cold' foods? egg/meat myths? — negotiate WITH elders, never mock) → <strong>cook + teeth + swallow + appetite + bowels + alcohol</strong>. NO SHAME — shame starves honesty ('we eat well' hides one meal). Cross-check kindly ('and the children — same pot?'). Involve the COOK (M01). Poverty-map solutions: hungry season (stored grains + dried fish + groundnut reserves), market days (buy seasonal glut), school feeding (enrol + verify eating — M06), garden (kontomire/moringa/orange-flesh potato near the house — M06 community). History explains the anthropometry: wasting + 'one meal' + diarrhoea = feed + WASH + deworm + follow.",
          ],
        },
        {
          type: "text",
          heading: "Synthesis: classify, counsel, refer",
          paragraphs: [
            "ABCD + MUST/MNA (GER M06) → <strong>classify</strong> (well-nourished / at-risk / malnourished — SAM/MAM/micronutrient / overweight-obese) → <strong>counsel</strong> (M01 chain: praise + ONE change + teach-back + review) → <strong>treat</strong> (supplements per protocol, deworm, therapeutic feeds — M05, re-feed rules — M05/GER) → <strong>REFER</strong> (dietician where available, doctor (anaemia/diabetes/SAM complications), welfare (food insecurity), SAM/OTP unit, diabetes/HTN clinic — M04, dentist, speech/swallow) → <strong>REVIEW dated</strong> (weights + diaries + labs rechecked). <strong>Same-day red flags</strong>: SAM/oedema, severe anaemia (Hb <7/pregnant breathless), re-feed risk starting feeds, dysphagia + weight loss, pregnancy + poor gain/bleeding/oedema+BP, infant faltering/flat curve, suspected abuse-neglect (M05 GER: see alone + report). Document the synthesis (classification + counsel + referrals + review — PRO-I M5); hand over ABCD summaries (ISBAR + canvas — PRO-I/GER capstones).",
          ],
        },
        {
          type: "table",
          heading: "ABCD synthesis drills",
          columns: ["ABCD snapshot", "Classify", "Action + review"],
          rows: [
            ["MUAC 11.8, flat WFA, recall: koko only + diarrhoea ×3", "MAM + illness + poor diet", "Treat diarrhoea + deworm + fortify koko + 2-week weight review"],
            ["BMI 17, Hb 8.5, pale, pregnant 28 wks, tea with meals", "Undernourished + anaemia", "Iron+folate + C + tea-gap + malaria/worms + ANC closely (M03)"],
            ["BMI 31, HbA1c 8.2, Coke daily, no veg", "Obese + diabetes", "M04 diet + movement + clinic + 1-change counsel + 1-month labs"],
            ["Elder: MUST 3, dentures broken, eats alone, GDS 7", "High risk + mouth + mood", "GER full: dentist + company meals + mood + weekly weights"],
            ["Child: Bitot spots + MUAC 12.0 + no orange foods", "MAM + vitamin A gap", "High-dose A + orange foods + campaign check + monthly plot"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The ABCD one-pager",
          body: "Keep a one-page ABCD form (Anthro boxes + labs + clinical tick-list + diet prompts + classification + action + review) at OPD/CWC/ANC — tick-and-write beats blank pages for completeness and audits. File it in the folder, trend it across visits, hand it over on referral. Students: run 10 supervised ABCDs (5 children, 3 pregnant, 2 elders) and log as CPD with reflections (PRO-I M7) — assessment fluency is counselled credibility. Wards that ABCD admit fewer surprises and discharge better-fed patients.",
        },
      ],
      keyPoints: [
        "ABCD: anthro + biochemical + clinical + dietary — every assessment, every age.",
        "Diet history: recall → frequency → money → beliefs → cook/teeth/appetite; shame-free.",
        "Labs confirm (Hb, albumin, glucose, lipids, electrolytes, cause-hunts); chase + act.",
        "Clinical pass links M01 signs head-to-toe with wasting eyeball + grip.",
        "Synthesize: classify → counsel (ONE change) → treat → refer → dated review.",
        "Red flags same-day; one-page ABCD forms; 10 supervised assessments for fluency.",
      ],
      quiz: {
        questionIds: ["NG-MOD-NUTR-005"],
        categories: ["fundamentals"],
        keywords: ["ABCD", "diet history", "24-hour recall", "labs", "albumin", "HbA1c", "clinical signs", "glossitis", "koilonychia", "classify", "referral", "beliefs", "taboos", "review", "documentation"],
      },
    },
  ],
};
