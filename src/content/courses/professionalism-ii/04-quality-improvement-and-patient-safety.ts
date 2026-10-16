import type { CourseModule } from "../types";

export const qualityImprovementAndPatientSafety: CourseModule = {
  slug: "quality-improvement-and-patient-safety",
  title: "Quality improvement and patient safety",
  summary:
    "Making care safer by design: quality's six dimensions with PDSA cycles, fishbone and 5-whys diagnosis, run charts and Pareto measurement, the closed audit cycle with spread and sustain — then Reason's Swiss cheese, just culture with stop-the-line rights, four all-or-nothing safety bundles, never events with RCA, and human-factors design for tired humans.",
  lessons: [
    {
      slug: "quality-improvement-cycles",
      title: "Quality improvement cycles",
      minutes: 20,
      objectives: [
        "State quality's six dimensions.",
        "Diagnose problems with fishbone and 5 whys.",
        "Test changes with PDSA and run charts.",
        "Close audit cycles and sustain spread.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Six dimensions, one aim",
          paragraphs: [
            "Quality care is <strong>Safe</strong> (avoids harm), <strong>Timely</strong> (waits kill — triage, sepsis, PPH clocks), <strong>Effective</strong> (evidence-based — Module 03's pyramid), <strong>Efficient</strong> (no waste — every wasted cannula is a missing glove), <strong>Equitable</strong> (the farmer's mother gets the minister's mother's standard), and <strong>Patient-centred</strong> (respect, information, involvement — PRO-I Module 04). Every improvement project should lift at least two: cutting triage waits (timely + equitable), auditing partographs (safe + effective), teaching discharges (patient-centred + efficient via fewer readmissions). Start with an <strong>AIM, SMART and dated</strong>: 'cut Bay B falls 50% in 90 days' — not 'improve falls'. Vague aims produce vague effort; measured aims produce morning-huddle attention. Then diagnose BEFORE prescribing: the ward that jumps to solutions ('more staff!') without diagnosis often treats symptoms while roots keep harming.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0021.svg",
          alt: "PDSA: Plan with aim measure change idea, Do pilot small one bay two weeks, Study data versus aim with run chart, Act adopt adapt or abandon. Fishbone six bones: people process place protocols products pressure. Five whys example drilling a fall to no maintenance owner. Run charts with median shifts and trends, Pareto tall bars first, SMART aims. Audit cycle: standard, measure, compare, change, re-audit, sustain, publish. Sample twenty to thirty, blame-free. Spread: pilot prove package spread sustain. STEEEP dimensions listed.",
          caption: "Diagnose with bones and whys, test with PDSA, prove with run charts, lock with re-audit.",
        },
        {
          type: "text",
          heading: "Bones, whys, PDSA, charts",
          paragraphs: [
            "<strong>Fishbone</strong> (6 bones): People · Process · Place/equipment · Protocols · Products/drugs · Pressure (workload) — brainstorm every fall, error or infection onto bones with the WHOLE team (cleaners see what doctors miss), then vote the top 3. <strong>5 whys</strong> drill to root: 'fall at 02:00' → dark + no bell → bell broken 3 weeks → reported verbally only → no maintenance log → nobody owns it → FIX: log + owner + weekly check. Symptoms seduce; roots cure. <strong>PDSA</strong>: <strong>Plan</strong> (aim + measure + ONE change idea) → <strong>Do</strong> (pilot SMALL — one bay, two weeks — small failures teach cheaply) → <strong>Study</strong> (data vs aim on a <strong>run chart</strong>: dots over time, median line — shifts/trends = real change, wobbles = noise) → <strong>Act</strong> (adopt / adapt / abandon — abandoning honestly is success, not shame). <strong>Pareto</strong>: 20% of causes drive 80% of harm — fix the tall bars first (three bays cause most falls; two drugs cause most queries). Prediction discipline: state what you EXPECT before each cycle — surprise is data, but only predicted-then-tested learning compounds.",
          ],
        },
        {
          type: "text",
          heading: "Audit: close every loop",
          paragraphs: [
            "The <strong>audit cycle</strong>: set standard (protocol/guideline — 'partograph plotted half-hourly in active labour') → measure practice (sample 20–30: enough to act, small enough to finish) → compare (gap as %: '41% compliant') → change (ONE fix, owned, dated: 'in-charge demos plotting at handover, daily, Ama owns') → <strong>RE-AUDIT</strong> (same tool, same place: '79%') → sustain (protocol + induction + spot-checks + board visibility) → publish (ward board + meeting + CPD log). Unaudited changes evaporate; un-re-audited audits decorate walls. Rich audit topics: hand hygiene (5 moments), drug-chart completeness, triage waits, vital-sign frequency on NEWS, documentation (PRO-I's 8 rules), discharge teaching (Module 02's teach-back), catheter necessity. <strong>Blame-free always</strong>: audit systems, not names — named-and-shamed wards falsify the next audit. <strong>Spread</strong>: pilot → prove (data!) → package (1-page protocol + 10-minute training) → spread bay → ward → hospital with champions each site → sustain (induction, audits, celebrate streaks: '60 fall-free days!').",
          ],
        },
        {
          type: "table",
          heading: "QI starter projects: ward-ready",
          columns: ["Project", "Measure", "Likely first PDSA"],
          rows: [
            ["Cut Bay B falls", "Falls/100 bed-days weekly run chart", "Call bells in reach + night lights + footwear check at bedtime"],
            ["Complete drug charts", "% charts with allergy box + signatures (n=30)", "Pharmacist flags gaps at 10:00; in-charge countersigns by noon"],
            ["Speed triage waits", "Median door-to-triage minutes daily", "Second triage chair at peak + visible queue numbers"],
            ["Teach every discharge", "% discharges with teach-back documented", "One-page med sheets + teach-back box on discharge form"],
            ["Hand hygiene moments", "% compliant covert observations", "Pocket sanitizer for all + moment-2 posters at bedsides"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Your QI portfolio piece",
          body: "One finished PDSA with a run chart and re-audit outranks ten attended workshops: photograph the board (de-identified), file aim → fishbone → PDSA → chart → re-audit → protocol as CPD + appraisal + interview evidence (PRO-I M7). Present at ward meeting, then hospital QI forum — visibility spreads the fix AND your reputation. Start this month: pick the smallest harm you can measure weekly, run one 2-week PDSA, and study honestly. Improvers are made by cycles completed, not courses attended.",
        },
      ],
      keyPoints: [
        "STEEEP: safe, timely, effective, efficient, equitable, patient-centred — lift two per project.",
        "Aims SMART + dated; diagnose before prescribing (symptoms seduce, roots cure).",
        "Fishbone 6 bones + team brainstorm; 5 whys to the ownable root.",
        "PDSA: plan, pilot small, study on run charts, adopt/adapt/abandon honestly.",
        "Audit: standard → measure → compare → change → RE-AUDIT → sustain → publish; blame-free.",
        "Spread: prove → package → champions → induction + streaks; one finished cycle = portfolio gold.",
      ],
      quiz: {
        questionIds: ["NG-MOD-PRO2-010"],
        keywords: ["quality", "STEEEP", "PDSA", "fishbone", "5 whys", "run chart", "Pareto", "audit", "re-audit", "SMART aim", "spread", "sustain", "measurement", "improvement", "champions"],
        categories: ["leadership-delegation"],
      },
    },
    {
      slug: "patient-safety-culture",
      title: "Patient safety culture",
      minutes: 20,
      objectives: [
        "Explain Reason's Swiss cheese with ward slices.",
        "Build just culture with stop-the-line rights.",
        "Apply four safety bundles all-or-nothing.",
        "Run RCA on never events and serious harm.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Harm needs aligned holes",
          paragraphs: [
            "Reason's <strong>Swiss cheese</strong>: every defence is a slice with holes — <strong>policies</strong> (outdated protocols), <strong>checks</strong> (rushed double-checks), <strong>people</strong> (fatigued vigilance, poor handover), <strong>technology</strong> (ignored alarms, dead batteries). Harm flies straight ONLY when holes align: the outdated heparin protocol + skipped double-check + night-shift fatigue + silenced pump alarm = overdose. Safety work = <strong>add slices, shrink holes, never rely on one</strong>. Blaming the nurse at the sharp end ('she gave it') ignores the blunt end that loaded every slice: staffing, stock, training, hierarchy, equipment. <strong>Just culture</strong> balances: report freely (errors + near-misses welcomed as free lessons), console the human error, coach the at-risk behaviour, <strong>discipline the reckless</strong> (PRO-I M3's ladder: deliberate violation, impairment, falsification still answer individually). Wards choose daily: high-reporting wards look 'worse' on paper and ARE safer in beds — leaders must praise reporters, especially when reports implicate the ward itself.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0022.svg",
          alt: "Swiss cheese four slices: policies with outdated holes, checks with rushed holes, people with fatigue holes, technology with ignored holes; harm passes only when aligned. Bundles: medication safety with ten rights plus high-alert double-check; infection prevention with five moments plus reviews; falls plus pressure with risk scores and re-assessment; surgical plus ID with WHO time-out and two identifiers. Just culture, huddles, good-catch awards. Never events: wrong-site surgery, ABO blood, retained instruments, hanging, infant mix, tenfold overdoses; RCA timeline to shared learning. Human factors and stop-the-line for all.",
          caption: "Safety is designed in slices — and everyone holds a stop card.",
        },
        {
          type: "text",
          heading: "Bundles: all or nothing",
          paragraphs: [
            "Bundles work only complete — 4 of 5 elements ≈ 0: <strong>Medication</strong>: 10 rights (patient, drug, dose, route, time, reason, refusal, response, documentation, education) + <strong>high-alert double-check</strong> (insulin, heparin, chemotherapy, concentrated KCl, opioids — independent second nurse, both sign) + LASA separation (look-alike/sound-alike stored APART, tall-man labels). <strong>Infection</strong>: 5 hand-hygiene moments + asepsis + PPE + waste segregation + <strong>device necessity reviews</strong> (catheters/lines reviewed daily — removal is the best prevention). <strong>Falls + pressure</strong>: risk score on admission + care plan (bell, light, footwear / turning, mattress, nutrition) + <strong>re-assess each shift</strong>. <strong>Surgical + ID</strong>: WHO time-out (sign-in/time-out/sign-out) + <strong>2 identifiers before EVERY</strong> drug/blood/sample/procedure + site marking + swab/instrument counts. Audit bundles as all-or-nothing (Module 4.1 tools); display compliance; celebrate streaks. The nurse who skips 'just one element' for speed has dismantled the slice — and owns the hole.",
          ],
        },
        {
          type: "text",
          heading: "Never events, RCA, human factors",
          paragraphs: [
            "<strong>Never events</strong> (should NEVER happen — each triggers full investigation): wrong-site/patient/procedure surgery, ABO-incompatible transfusion, retained instruments, inpatient suicide by hanging (ligature points), infant abduction or discharge-to-wrong-family, 10× insulin/heparin overdoses. <strong>RCA</strong> (root cause analysis): timeline (minute-by-minute facts) → fishbone/5-whys (Module 4.1) → contributory SYSTEMS (not culprits) → actions (owned, dated, funded) → <strong>shared learning</strong> (ward + hospital + national where apt — learning hoarded is learning wasted). <strong>Human factors</strong>: design for tired humans, not ideal ones — fatigue rostering (M01), interruption shields (drug-round tabards/zones), LASA storage, hierarchy flatteners ('say it, whatever your rank'), readable labels, working alarms. <strong>Stop-the-line</strong>: ANYONE halts unsafe care — student, cleaner, relative — no rank needed, no punishment ever: the cleaner who stops a wrong-blood transfusion is the day's hero, awarded publicly. Daily rituals: safety huddles (5 min: today's risks), leadership walks (ask 'what keeps you up at night?'), good-catch awards (the caught error celebrated like the goal that won the match).",
          ],
        },
        {
          type: "table",
          heading: "Safety traps and slices",
          columns: ["Trap", "Hole it opens", "Slice that closes it"],
          rows: [
            ["Verbal order, no read-back", "Misheard drug/dose", "Read-back + document + countersign (PRO-I M5)"],
            ["Interruptions on drug round", "Skipped rights, wrong patient", "Tabard/zone + deferred non-urgent queries"],
            ["LASA drugs side by side", "Grab-and-give error", "Separate storage + tall-man labels + double-check"],
            ["Silenced/ignored alarms", "Unnoticed deterioration", "Alarm policy + response times audited + staffing"],
            ["Hierarchy silence ('can't question doctor')", "Unsafe order executed", "Stop-the-line + graded assertiveness (CUSS) culture"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "CUSS: graded assertiveness that saves lives",
          body: "When something feels unsafe, escalate in four steps: Concern ('I'm CONCERNED about this BP…') → Uncomfortable ('I'm UNCOMFORTABLE giving this dose…') → Safety ('This is a SAFETY issue — let's stop and check…') → Stop ('I need us to STOP now'). Each step raises volume without raising voice; jumping straight to STOP is allowed in imminent danger. Teach CUSS to every student and junior — then HONOUR it when aimed at you. The hierarchy that punishes CUSS gets silence; the one that thanks it gets survivors.",
        },
      ],
      keyPoints: [
        "Swiss cheese: harm needs aligned holes — add slices, shrink holes, never rely on one.",
        "Just culture: report freely, console error, coach risk, discipline recklessness.",
        "Bundles all-or-nothing: meds (10 rights + high-alert), infection, falls/pressure, surgical/ID.",
        "Never events trigger RCA: timeline → systems causes → owned actions → shared learning.",
        "Human factors: design for tired humans — fatigue, interruptions, LASA, hierarchy.",
        "Stop-the-line for all ranks; CUSS graded assertiveness; celebrate good catches.",
      ],
      quiz: {
        questionIds: ["NG-MOD-PRO2-011","NG-MOD-PRO2-012"],
        keywords: ["Swiss cheese", "Reason", "just culture", "bundles", "10 rights", "high-alert", "LASA", "never events", "RCA", "human factors", "stop-the-line", "CUSS", "handover", "alarms", "good catch"],
        categories: ["leadership-delegation"],
      },
    },
  ],
};
