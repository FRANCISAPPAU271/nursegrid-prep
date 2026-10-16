import type { CourseModule } from "../types";

export const evidenceDashboardsQuality: CourseModule = {
  slug: "evidence-dashboards-quality",
  title: "Evidence, dashboards and quality data",
  summary:
    "Think with evidence, steer with data: PICO questions, search skills, hierarchies, CRAAP appraisal and journal clubs — then run-chart rules, dashboard discipline, PDSA measurement, DHIMS2 feedback loops and honest presenting.",
  lessons: [
    {
      slug: "finding-and-judging-evidence",
      title: "Finding and judging evidence",
      minutes: 18,
      objectives: [
        "Build PICO questions.",
        "Search databases with skill.",
        "Apply hierarchy + CRAAP.",
        "Start a journal club.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Ask, find, judge, apply",
          paragraphs: [
            "Evidence-based practice (<strong>EBP</strong>) runs four moves: ASK a searchable question → FIND the best evidence → JUDGE its quality → APPLY it with the patient and EVALUATE. 'We've always done it this way' is not evidence; neither is a confident blog or a drug rep's leaflet. <strong>ASK with PICO</strong>: Patient/population, Intervention, Comparison, Outcome — 'In post-op adults (P), does chewing gum (I) versus nil-by-mouth (C) speed bowel recovery (O)?' Searchable words fall straight out: gum, ileus, post-operative, RCT. Every clinical puzzle converts: dressings, positions, feeds, teaching methods — PICO them all. <strong>FIND with skill</strong>: keywords + synonyms + AND/OR + filters (free full text, last 5 years, humans) → scan abstracts → fetch the 3 best → appraise. Ghana shortcut ORDER: national protocols + WHO guidelines FIRST (context-fitted and free!), then <strong>HINARI</strong> full-texts (free journal access for Ghana institutions — register through your school!), then PubMed abstracts, then CINAHL via libraries. Ten focused minutes beats an hour of scrolling; save searches and set alerts on your topic. <strong>JUDGE with hierarchy + CRAAP</strong>: systematic reviews and guidelines top the <strong>hierarchy</strong> (then RCTs → cohort → case-control → case series → expert opinion), and every source faces the <strong>CRAAP test</strong> — Currency (2024 beats 1998!), Relevance (Ghana wards, not Minnesota ICUs?), Authority (who wrote? funded by whom?), Accuracy (methods sound? numbers honest?), Purpose (inform or sell?). Fail any two — find better. Predatory journals flatter ('publish in 3 days!'): pay, no review, no value — check before citing. <strong>APPLY with judgment</strong>: evidence + patient values + YOUR expertise + setting reality (M01 wisdom!). The RCT says drug X; the patient can't afford it; the guideline offers affordable Y — Y with follow-up IS evidence-based care. Then EVALUATE: did it work? Document, share, adjust.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-INF-0009.svg",
          alt: "Four boxes ask-PICO find judge apply with examples. EBP four moves with always-done warning. PICO worked example gum ileus. Hierarchy top-down with Ghana shortcut order. CRAAP five letters with predatory warning. Apply-with-judgment affordable-Y example plus evaluate. Search skills exam recipe. Journal club format. Cross-course links. Mantra quoted.",
          caption: "Ask it, find it, judge it, use it — then check it worked.",
        },
        {
          type: "text",
          heading: "Journal clubs that change wards",
          paragraphs: [
            "One paper + one ward question + 30 minutes monthly = a unit EBP culture. Format that works: present the PICO, the DESIGN (RCT? review? guideline?), the RESULTS in plain words ('falls halved — 8 to 4 per month'), then the vote: 'should WE change?' If yes — PILOT small, MEASURE (next lesson's run charts!), review in 90 days (PRO-II M4 PDSA + NUT's 90-day projects!). Rotate presenters (students included — presenting builds the ladder, M01!); keep a club log (date, paper, decision, outcome) as portfolio gold (PRO-I M7!); invite the doctor, pharmacist, dietician — evidence is multiprofessional. Exam angles: 'critique this abstract' (design? sample? results? Ghana relevance?), 'PICO this scenario', 'CRAAP this source'. Interview angle: 'tell us about evidence you applied' — one journal-club story ('we PICO'd night sedation, found the review, cut night doses, falls fell') outranks ten certificates. And remember the humility rule: today's evidence updates yesterday's — the nurse who reads keeps healing; the nurse who 'knows' fossilises. Link every EBP answer to M01's DIKW (research is KNOWLEDGE; your applied decision is WISDOM) and PRO-II's research module for methods depth.",
          ],
        },
        {
          type: "table",
          heading: "EBP toolkit",
          columns: ["Tool", "Use it for", "Watch out for"],
          rows: [
            ["PICO", "Turning puzzles into searches", "Vague O — name measurable outcomes"],
            ["WHO/national guidelines", "First-line, context-fitted answers", "Check edition year; old protocols expire"],
            ["HINARI / PubMed", "Free full-texts / abstracts", "Abstracts ≠ papers; read methods"],
            ["Hierarchy", "Weighting conflicting sources", "One RCT < one good review"],
            ["CRAAP", "Killing weak sources fast", "Predatory journals; funded 'reviews'"],
            ["Journal club", "Unit culture + portfolio", "Talk without pilots — always vote + measure"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Register for HINARI this week",
          body: "If your school or hospital has HINARI access, register NOW — thousands of journals free. Pair it with PubMed alerts on two topics you care about (e.g. 'pressure injury prevention', 'postpartum haemorrhage') and a monthly journal-club date. Six months of that routine, and you will answer 'how do you keep current?' with a system, not a shrug.",
        },
      ],
      keyPoints: [
        "EBP: ask (PICO) → find (skilled search) → judge (hierarchy + CRAAP) → apply + evaluate.",
        "Find order: national/WHO guidelines → HINARI → PubMed → CINAHL; filters + alerts.",
        "Hierarchy: reviews/guidelines → RCTs → cohort → case-control → series → opinion.",
        "CRAAP: currency, relevance, authority, accuracy, purpose — fail two, find better.",
        "Apply: evidence + values + expertise + setting; affordable-Y with follow-up counts.",
        "Journal club monthly: PICO + design + plain results + vote + pilot + measure.",
      ],
      quiz: {
        questionIds: ["NG-MOD-INFO-015"],
        keywords: ["EBP", "PICO", "hierarchy", "CRAAP", "HINARI", "PubMed", "CINAHL", "systematic review", "RCT", "guidelines", "journal club", "predatory", "search", "appraisal", "evidence"],
        categories: ["leadership-delegation"],
      },
    },
    {
      slug: "dashboards-run-charts-and-qi-data",
      title: "Dashboards, run charts and QI data",
      minutes: 18,
      objectives: [
        "Read run charts by rule.",
        "Run dashboard discipline.",
        "Measure PDSA with data.",
        "Present data honestly.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Run charts: hear data speak",
          paragraphs: [
            "A <strong>run chart</strong> is dots over time with a MEDIAN line — the cheapest, mightiest QI tool in nursing (PRO-II M4's engine!). Three rules detect real change (exam-gold — memorise!): <strong>SHIFT</strong> — 6 or more consecutive points on ONE side of the median: something CHANGED (new triage? new staff? new protocol?). <strong>TREND</strong> — 5 or more consecutively climbing or falling: a DRIFT needing early action (infections creeping up? satisfaction sliding?). <strong>RUNS</strong> — too FEW median crossings for the dot count: a hidden pattern, dig deeper. No rules broken = common-cause variation: don't overreact to one bad month, don't celebrate one good dot. Rules broken = INVESTIGATE + ACT. Then <strong>ANNOTATE</strong>: mark interventions ON the chart ('night rounding started →', 'PDSA 2 →') so cause meets effect visually — an annotated chart tells the story; a bare chart whispers. Plot MONTHLY dots minimum (weekly for fast cycles); 10+ dots before judging; same definitions throughout ('falls' means the same in January and June!). Worked reading: 'falls 8,7,9,8,7,8 → 4,3,4,2,3,4 after night rounding (shift: 6 below median — REAL improvement, sustain it!)'. Examiners show charts and ask 'shift? trend? action?' — count, name the rule, state the move. Link NUT M2: growth-chart thinking (trends beat points!) is run-chart thinking for bodies.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-INF-0010.svg",
          alt: "Four boxes shift-6 trend-5 runs-few annotate with examples. Reading rule with variation guidance and dot minimum. Dashboard discipline metrics traffic-lights monthly one-action. PDSA plus data with hope-not-improvement line. DHIMS2 loop printout meetings. Presenting rules one-message annotated plain. Benchmark honesty like-with-like. Cross-course links. Mantra quoted.",
          caption: "Plot it, read it, act it, share it — data that rests, rots.",
        },
        {
          type: "text",
          heading: "Dashboards, PDSA, presenting",
          paragraphs: [
            "<strong>Dashboard discipline</strong>: pick 5–7 ward metrics (falls, pressure injuries, hand-hygiene %, discharge-before-noon, med errors, patient satisfaction), traffic-light them (red/amber/green vs target), review MONTHLY as a team, and take ONE action per red. Dashboards nobody reads are wallpaper — put them where handover happens, not in a folder. <strong>PDSA + data</strong>: Plan (baseline run chart!) → Do (small test, one bay, two weeks) → Study (chart moved? rules broken?) → Act (adopt, adapt, abandon). 'We trained everyone' without a chart is HOPE, not improvement — QI without measures is motion without movement (PRO-II M4!). <strong>DHIMS2 feedback loop</strong>: your tallies → district tables → back to YOUR facility review: coverage falling? defaulters rising? stock-outs patterned by month? Bring the printout to staff meetings — data you collected should change care you give (NUT M6 records-into-action!). <strong>Presenting data</strong>: one message per slide, BIG annotated charts, plain words ('falls halved since night rounding — 8 to 4'), no 3D pies, no walls of tables — tell the STORY the chart tells. <strong>Benchmark honestly</strong>: compare like-with-like (district hospitals vs district peers, not teaching hospitals!) — celebrate publicly, investigate privately. Data shames nobody and hides nothing. Mantra: 'plot it, read it, act it, share it — data that rests, rots.'",
          ],
        },
        {
          type: "table",
          heading: "QI data moves",
          columns: ["Move", "How", "Classic error"],
          rows: [
            ["Baseline", "10+ dots + median before change", "Judging from 2 dots"],
            ["Detect", "Shift 6+ / trend 5+ / runs few", "Reacting to common variation"],
            ["Annotate", "Mark every intervention on chart", "Bare chart, forgotten causes"],
            ["Dashboard", "5–7 metrics, traffic-lights, monthly", "40 metrics nobody reads"],
            ["PDSA", "Small test → chart → adopt/adapt", "Facility-wide launch, no measure"],
            ["Present", "One message + big chart + plain words", "Table walls + 3D pies"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Your first run chart",
          body: "Pick ONE ward metric this week (falls? late meds? hand-hygiene audits?), gather 10 past values, plot dots + median, annotate what you remember. Bring it to the next staff meeting with one sentence: 'here's our last 10 months — shall we improve the next 3?' That single chart makes you the ward's data person — the first rung of M01's ladder, climbed with a pen.",
        },
      ],
      keyPoints: [
        "Run-chart rules: shift 6+ one side, trend 5+ climbing, runs too few — then investigate.",
        "Annotate interventions; 10+ dots; same definitions; monthly minimum.",
        "Dashboards: 5–7 metrics, traffic-lights, monthly team review, one action per red.",
        "PDSA measured: baseline → small test → chart → adopt/adapt/abandon.",
        "DHIMS2 loop: printout to meetings; collected data must change given care.",
        "Present: one message + big annotated chart + plain words; benchmark like-with-like.",
      ],
      quiz: {
        questionIds: ["NG-MOD-INFO-016"],
        keywords: ["run chart", "median", "shift", "trend", "runs", "annotate", "dashboard", "metrics", "PDSA", "baseline", "variation", "benchmark", "presenting", "DHIMS2", "QI"],
        categories: ["leadership-delegation"],
      },
    },
  ],
};
