import type { CourseModule } from "../types";

export const leadershipCapstone: CourseModule = {
  slug: "leadership-capstone",
  title: "Leadership capstone",
  summary:
    "Leading it all together: five scored leadership scenarios (failing ward, doctor-nurse conflict, chronic stock-outs, unsafe night cover, student crisis) run through the seven-thread formula — then the one-page change canvas weaving all six modules, resistance handling, the 25 tricky points with exam countdown, interview STAR, and the leader's pledge.",
  lessons: [
    {
      slug: "leadership-capstone-scenarios",
      title: "Leadership capstone scenarios",
      minutes: 20,
      objectives: [
        "Run the seven-thread formula on any scenario.",
        "Turn around failing wards with data and vision.",
        "Resolve conflicts, stock-outs and cover crises.",
        "Score full marks with cited structure.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The seven-thread formula",
          paragraphs: [
            "Every PRO-II scenario answer weaves seven threads: <strong>diagnose</strong> (fishbone/5-whys/Pareto — M04) → <strong>lead</strong> (situational style + EI + Lewin — M01) → <strong>teach</strong> (demo/feedback/debrief — M02) → <strong>evidence</strong> (PICO + guideline — M03) → <strong>quality</strong> (PDSA + measure + bundles — M04) → <strong>system</strong> (cost, escalate, refer, policy — M05) → <strong>career</strong> (file, reflect, CPD — M06/PRO-I M7). PRO-I's compass (safety → law → ethics → scope → handover → record) runs INSIDE every answer where patients face immediate risk — capstones stack, they don't replace. Examiners reward <strong>cited structure + specifics + measurement</strong>: 'I would run a fishbone with the team (M04), lead democratically to diagnose then transformationally to launch (M01/Lewin), PDSA a bedtime safety check with weekly run charts (M04), cost falls for the DHMT brief (M05), and file the canvas as CPD (M06).' Seven threads, full marks — the question names the ward, you name the system.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0027.svg",
          alt: "Change canvas six boxes with falls example: problem plus SMART aim, stakeholders with champion and sponsor, diagnosis via fishbone whys Pareto, PDSA change bedtime safety check, weekly run-chart measure on board, sustain via protocol induction audits streaks. Six threads: leadership style per phase with Lewin, teaching demo plus SBI, evidence PICO plus journal club, safety good-catch plus CUSS, system costing plus DHMT brief, career portfolio crown. Resistance: listen co-design pilot show-data celebrate.",
          caption: "One page, six boxes, six threads — the capstone made visible.",
        },
        {
          type: "text",
          heading: "Five scenarios, model reasoning",
          paragraphs: [
            "<strong>1. New in-charge, failing ward: cover-ups, complaints, resignations.</strong> Diagnose: listen first (anonymous start/stop/continue — M01), data (incidents, complaints, turnover, audits). Lead: transformational (vision + quick wins) + EI (grief acknowledged); Lewin: unfreeze with data+story. Teach: pearls daily, skills gaps drilled. Evidence: benchmarks + guidelines for failing bundles. Quality: ONE PDSA (e.g. handover ISBAR — PRO-I M5) with run chart; good-catch awards. System: cost harm for management; escalate staffing written (M05/M01). Career: log turnaround as portfolio crown. <strong>2. Doctor shouts at junior on rounds; juniors now silent.</strong> Diagnose: 5 whys (hierarchy? stress? pattern?). Lead: competing NOW (safety — 'let's pause') then collaborating privately with doctor (SBI — M02) + support junior (debrief, CUSS coaching — M04). Teach: assertiveness drills. Quality: incident the behaviour; audit round safety. System: policy reminder; escalate pattern written. Career: reflect + file (difficult conversation evidence). <strong>3. Oxytocin/MgSO4 stock-outs monthly.</strong> Diagnose: fishbone (ordering? funds? supplier? theft? — M04) + Pareto. Lead: democratic task team + sponsor. Evidence: STG + protocols quantify need. Quality: par levels + FEFO + weekly counts PDSA (M01/M04). System: written escalation + buffer proposal + DHMT costs (extra referrals, near-misses — M05); NHIS claims prompt. Career: QI piece filed. <strong>4. Management demands all-junior nights.</strong> Diagnose: acuity + incident data. Lead: EI + firm (competing — safety non-negotiable). PRO-I compass: safety first, law (duty), ethics (non-maleficence). System: written refusal-with-alternatives (skill-mix options, costs of harm — M05); GRNA channel if forced. Quality: risk log + deferred-care documentation. Career: file as courage evidence. <strong>5. Final-year student falsified vitals; pleads 'don't fail me'.</strong> Diagnose: welfare? knowledge? (M02 — curiosity first, safety always). Lead: supervisory hat (accountable) + mentor heart. Teach: support plan if remediable; remove from risk NOW. PRO-I: honesty + records + NMC signature rules. Quality: incident per policy; re-check affected patients. Career: document due process (warn → plan → re-assess → decide — M02). Passing the unsafe endangers hundreds — fail honestly if unchanged.",
          ],
        },
        {
          type: "table",
          heading: "Score your reasoning (examiner's marks)",
          columns: ["Element (marks each)", "What earns it", "What loses it"],
          rows: [
            ["Diagnosis (2)", "Named tools (fishbone/whys/Pareto/data) applied to facts", "Jumping to solutions without diagnosis"],
            ["Leadership (2)", "Situational style + EI + Lewin steps, phase-matched", "'Good leadership' with no style or steps named"],
            ["Teaching + evidence (2)", "Demo/feedback + PICO/guideline cited specifically", "Generic 'train staff' / 'use evidence' with no content"],
            ["Quality + system (2)", "PDSA + measure + costs/escalation/referral", "Ward-only thinking; no measurement, no upward loop"],
            ["PRO-I safety core (2)", "Compass inside answers: safety, law, ethics, records", "Forgetting patients while managing systems"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The 10-mark paragraph formula",
          body: "For every scenario write: DIAGNOSE ('I would fishbone/5-whys with the team to find…') → LEAD ('…leading [style] because [situation], Lewin unfreeze with…') → TEACH ('…train via demo/return-demo + SBI…') → EVIDENCE ('…PICO… guideline…') → QUALITY ('…PDSA… run chart… bundle…') → SYSTEM ('…cost… escalate written… brief…') → FILE ('…portfolio + reflection + CPD'). Seven sentences, ten marks. PRO-I compass sentences slot first wherever patients face immediate risk ('First, ABCs/stop harm…'). Practise all five scenarios aloud until threads weave without notes.",
        },
      ],
      keyPoints: [
        "Formula: diagnose → lead → teach → evidence → quality → system → file; PRO-I compass inside.",
        "Failing wards: listen + data → transformational + quick wins → one PDSA → cost upward.",
        "Hierarchy abuse: pause now, SBI privately, CUSS-coach juniors, incident patterns.",
        "Stock-outs: fishbone + par-level PDSA + written escalation + buffer proposal.",
        "All-junior nights refused in writing with alternatives; falsification: remove, remediate, decide honestly.",
        "10-mark formula: seven cited sentences; structure + specifics + measurement = distinctions.",
      ],
      quiz: {
        keywords: ["capstone", "scenarios", "turnaround", "conflict", "stock-outs", "staffing", "falsification", "formula", "Lewin", "PDSA", "escalation", "CUSS", "portfolio", "reasoning", "distinction"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "change-project-and-exam-prep",
      title: "Change project and exam prep",
      minutes: 20,
      objectives: [
        "Design a one-page change canvas.",
        "Handle resistance with co-design and data.",
        "Master the 25 tricky points.",
        "Execute the countdown and sign the pledge.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The change canvas: your ward fix on one page",
          paragraphs: [
            "Six boxes (worked falls example in the diagram): <strong>1. Problem + AIM</strong> ('Bay B: 6 falls/quarter; AIM: cut 50% in 90 days' — data + story + SMART). <strong>2. Stakeholders</strong> (nurses, doctor, physio, cleaners, relatives, maintenance — name a <strong>champion</strong> + a <strong>sponsor</strong>). <strong>3. Diagnosis</strong> (fishbone + 5 whys + Pareto: bells, light, footwear = 80%). <strong>4. Change (PDSA)</strong> (bedtime safety check: bell-light-footwear-toilet; 2-week pilot). <strong>5. Measure</strong> (falls/100 bed-days, weekly run chart ON THE WARD BOARD). <strong>6. Sustain</strong> (protocol + induction + spot audits + streak parties). Six module-threads weave through: leadership style per phase (M01) + training/feedback (M02) + PICO/journal club (M03) + good-catch/CUSS (M04) + costing/DHMT brief (M05) + portfolio crown (M06). <strong>Resistance?</strong> Listen (fear? workload? past failures?) → co-design (their fingerprints on the fix) → pilot tiny → show data → celebrate adopters — never mandate what evidence + invitation can win. Canvas on the board, updated weekly, owned by NAME — 'someone should…' improves nothing.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0028.svg",
          alt: "Exam map: M1 styles situation POSDCORB EI, M2 Knowles Bloom SBI fail-fair, M3 PICO five steps designs ethics, M4 PDSA audit cheese RCA, M5 levels NHIS referral policy, M6 ladder licence enterprise image. Twenty-five tricky points listed. Countdown: six weeks map, four weeks timed questions, two weeks cards, one week mock plus sleep, eve pack, day structure. Scenario formula seven threads. Leader pledge quoted.",
          caption: "Twenty-five killers learned cold — then the countdown, then the pledge.",
        },
        {
          type: "text",
          heading: "25 tricky points + countdown",
          paragraphs: [
            "Learn cold (diagram lists all): style fits SITUATION; laissez-faire never novices/crises; rosters fair+safe+early; never all-junior nights; conflict private+soon+specific; Knowles need/experience/problems; teach-back every discharge; SBI + Pendleton learner-first; never sign unseen; warn-in-writing before failing; ethics approval BEFORE data; PICO every question; appraise valid/big/useful-HERE; verify indexing (predators); PDSA pilot small + abandon honestly; re-audit or it didn't happen; bundles all-or-nothing; CUSS + stop-the-line any rank; HeFRA=facilities/NMC=people; stabilise BEFORE referral + counter-refer back; exemptions registered never billed; data-cooking = fraud; GRNA≠NMC; licence order NMC→HeFRA→tax→NHIS→protocols→insurance; image phone-down + patients-off-socials. <strong>Countdown</strong>: 6 weeks — map 42 objectives + weak topics; 4 weeks — timed past questions + compass/canvas rationales; 2 weeks — cards (styles, PICO, PDSA, bundles, ladders, 25 points); 1 week — mock under conditions + sleep; eve — pack + rest; DAY — read twice, structure (canvas!), cite modules, attempt ALL, review. <strong>Interviews</strong>: STAR from canvas + portfolio; 'tell me about a change you led' = canvas aloud; 'your ward is failing, you have 90 days' = scenario 1 with dates.",
          ],
        },
        {
          type: "text",
          heading: "Portfolio crown and pledge",
          paragraphs: [
            "Crown your portfolio (PRO-I M7 + M06): the canvas + run charts + protocol + stakeholder list + DHMT brief + reflections (Gibbs: what resisted? what converted? what next?) + photos of the board (de-identified) + CPD log entries. One finished change project outranks ten certificates: interview panels lean forward for 'falls fell 58% in 90 days — here's the canvas' and glaze at certificate lists. Keep leading after the course: found the journal club (M03), run the quarterly audit (M04), mentor one junior deliberately (M02), submit one memorandum upward yearly (M05), review the five-year plan with your mentor (M06). <strong>The pledge</strong> (say it, sign it, file it): 'I will lead fairly, teach kindly, obey evidence, design safety, serve the system, and grow deliberately — the compass (PRO-I) in hand, the canvas (PRO-II) on the wall. When pressured to cut corners, silence juniors, cook data or abandon nights, I will remember Bay B's falls, the shouted-down junior, the empty oxytocin shelf — and choose the threads.'",
          ],
        },
        {
          type: "table",
          heading: "Course map: where everything lives",
          columns: ["Module", "Core tools", "Exam favourite"],
          rows: [
            ["01 Leadership", "4 styles, EI, Lewin, POSDCORB, conflict", "Style × situation + never all-junior nights"],
            ["02 Teaching", "Knowles, Bloom, ladder, SBI/Pendleton", "Teach-back + never sign unseen + honest fails"],
            ["03 Evidence", "6 research steps, PICO, 5 EBP steps", "Designs + appraisal + predators"],
            ["04 Quality", "PDSA, fishbone/whys, audit, cheese, RCA", "Re-audit + bundles + CUSS"],
            ["05 System", "5 levels, NHIS, referral, policy cycle", "HeFRA≠NMC + exemptions + data-cooking"],
            ["06 Career", "Ladder, education, licence order, image", "Bonds + ventures + moonlighting theft"],
            ["07 Capstone", "7-thread formula, canvas, 25 points", "Scenario reasoning + change design"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Course complete: NGP-PRO-102",
          body: "Seven modules, fourteen lessons, fourteen diagrams: leadership → teaching → evidence → quality → systems → career → capstone. You hold the canvas, the formula, the Act numbers (PRO-I), the bundles and the pledge. File this course in your portfolio, run your first change project within 90 days, and walk into in-charge roles, interviews and boardrooms as the nurse who weaves systems under pressure. Leadership isn't a rank — it's the junior you built, the fall you prevented, the data you refused to cook. Congratulations, leader.",
        },
      ],
      keyPoints: [
        "Canvas: aim → stakeholders → diagnosis → PDSA → measure → sustain; six threads woven.",
        "Resistance: listen → co-design → pilot tiny → show data → celebrate; never mandate first.",
        "25 tricky points learned cold; countdown 6-4-2-1 with mocks + sleep.",
        "Interviews: STAR from canvas; 'change you led' = canvas aloud with dates + data.",
        "Portfolio crown: canvas + charts + protocol + brief + reflections + board photos.",
        "Pledge signed + filed; first change project within 90 days of finishing.",
      ],
      quiz: {
        keywords: ["change canvas", "resistance", "co-design", "champion", "sponsor", "tricky points", "countdown", "STAR", "interviews", "pledge", "portfolio", "90 days", "distinction", "leader", "sustain"],
        categories: ["fundamentals"],
      },
    },
  ],
};
