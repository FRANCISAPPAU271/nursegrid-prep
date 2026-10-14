import type { CourseModule } from "../types";

export const informaticsCapstone: CourseModule = {
  slug: "informatics-capstone",
  title: "Informatics capstone",
  summary:
    "Data with a heartbeat — proven: five scored scenarios (cloned note, snooping colleague, downtime chaos, alert override, telehealth breach) run through the six-move canvas — then 90-day QI menu, change play, 25 tricky points with countdown, STAR interviews, portfolio crown, and the informatics pledge.",
  lessons: [
    {
      slug: "informatics-capstone-scenarios",
      title: "Informatics capstone scenarios",
      minutes: 20,
      objectives: [
        "Run the 6-move canvas on any case.",
        "Secure safety + privacy first.",
        "Record + evidence + improve always.",
        "Score full marks with cited structure.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The formula: six moves",
          paragraphs: [
            "Every informatics answer runs: <strong>1. DIKW SPOT</strong> (which level? what wisdom is needed?) → <strong>2. SAFETY?</strong> (verify? alert? downtime? patient harmed? — ACT + document!) → <strong>3. PRIVACY?</strong> (consent? need-to-know? Act 843? — breach drill if leaked!) → <strong>4. RECORD IT</strong> (accurate + complete + timely + MY login; addendum if wrong!) → <strong>5. EVIDENCE?</strong> (PICO? guideline? CRAAP? — journal-club it!) → <strong>6. IMPROVE IT</strong> (run chart + PDSA + report + teach — close the loop!). Examiners scan for SAFETY, PRIVACY, RECORD, EVIDENCE and IMPROVEMENT — 'I would document it' scores one mark; 'addendum 15:40 correcting… + supervisor notified + run-chart audit started…' scores distinctions. The classic fail: skipping privacy (M03!) or improvement (M05!) — the canvas FORCES both. Six sentences, full marks — practise aloud until the six questions fire automatically: 'DIKW? safety? privacy? record? evidence? improve?' Tape it to your exam brain (PRO-I's compass runs inside move 2 where danger is immediate; NUT's canvas habit agrees!).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-INF-0013.svg",
          alt: "Six canvas boxes DIKW-spot safety privacy record evidence improve with examples. Canvas discipline with classic-fail warning. Scenario formula six sentences. QI menu seven projects with pick-one guidance. Change play six steps with spread-sustain ending. Cross-course links. Mantra quoted.",
          caption: "Spot it, safe it, lock it, log it, prove it, improve it.",
        },
        {
          type: "text",
          heading: "Five scenarios, model reasoning",
          paragraphs: [
            "<strong>1. Night nurse's note is yesterday's, cloned — 'afebrile' on a febrile child.</strong> DIKW: dead DATA poisoning all above → safety: reassess child NOW, correct care → privacy: n/a, but authorship false → record: fresh accurate entry + ADDENDUM flagging the clone ('10:00 entry carried forward in error — correct values…') → evidence: cloning-error literature for the audit → improve: cloning audit + teaching + report (M02!). <strong>2. Colleague shows you a celebrity's results on her phone.</strong> DIKW: INFORMATION you have no right to → safety: n/a → privacy: BREACH — decline to view, remind (Act 843!), ask deletion, REPORT per policy, document what you saw/did → record: incident report, not the chart → evidence: snooping sanctions precedents → improve: ward re-training on audit trails (M03!). <strong>3. System down, OPD full, verbal orders flying.</strong> DIKW: data capture at risk → safety: downtime drill (forms + census + read-backs + phone results!) → privacy: paper guarded + collected → record: timed/signed paper → batch-enter + reconcile MARs + report gaps → evidence: downtime policies → improve: downtime drill rehearsal + kit check (M02!). <strong>4. You overrode an allergy alert — reaction now brewing.</strong> DIKW: KNOWLEDGE ignored → safety: ABCDE + stop drug + call doctor + antidote ready (PRO-I compass!) → privacy: n/a → record: timed addendum (alert seen? why overridden? HONEST!) + incident report → evidence: alert-fatigue literature → improve: personal override audit + rule-retune request (M04!). <strong>5. SMS results sent to a wrong number.</strong> DIKW: INFORMATION misdirected → safety: recall? re-contact correct patient urgently → privacy: BREACH DRILL (contain + report + assess + notify + learn, same shift!) → record: incident + notifications documented → evidence: mHealth safety guidance → improve: number-verification double-check + template review (M03/M04!).",
          ],
        },
        {
          type: "table",
          heading: "Score your reasoning (examiner's marks)",
          columns: ["Element (marks each)", "What earns it", "What loses it"],
          rows: [
            ["DIKW + safety (2)", "Level spotted + verify/alert/downtime/ABCDE acted", "Discussing policy while patient unsafe"],
            ["Privacy + Act 843 (2)", "Consent/need-to-know/breach drill cited + done", "Ignoring the leak; naming no law"],
            ["Record properly (2)", "Own login + timely + addendum + incident report", "'Document it' with no how/when/what"],
            ["Evidence cited (2)", "PICO/guideline/CRAAP/club named for the case", "Opinion only; no source, no club"],
            ["Improve + sustain (2)", "Run chart/PDSA/audit/training/spread planned", "'Train everyone' with no measure"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The 10-mark paragraph formula",
          body: "For every scenario write: DIKW ('this is… level, wisdom needed…') → SAFETY ('acted…') → PRIVACY ('consent/843/drill…') → RECORD ('login/timely/addendum/incident…') → EVIDENCE ('guideline/PICO…') → IMPROVE ('run chart/PDSA/audit/spread…'). Six sentences, ten marks. Practise all five scenarios aloud until the canvas runs without notes — that reflex IS informatics nursing.",
        },
      ],
      keyPoints: [
        "Formula: DIKW → safety → privacy → record → evidence → improve, six sentences.",
        "Clone: reassess + fresh entry + addendum + audit + teaching.",
        "Snoop: decline + remind + delete + report + document + re-train.",
        "Downtime: drill + guard paper + batch-enter + reconcile + rehearse.",
        "Override: ABCDE + honest addendum + incident + personal audit + retune.",
        "Wrong SMS: recall + breach drill same shift + verification double-check.",
      ],
      quiz: {
        keywords: ["capstone", "scenarios", "canvas", "formula", "cloning", "snooping", "downtime", "override", "breach", "SMS", "distinction", "reasoning", "addendum", "incident", "improve"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "projects-exam-prep-and-pledge",
      title: "Projects, exam prep and pledge",
      minutes: 20,
      objectives: [
        "Launch a 90-day informatics QI project.",
        "Lead change with the play.",
        "Master the 25 tricky points.",
        "Execute countdown, STAR and pledge.",
      ],
      blocks: [
        {
          type: "text",
          heading: "90-day project + change play",
          paragraphs: [
            "Pick ONE (M05 PDSA + run chart + present): <strong>alert-override audit</strong> (rate + reasons + retune!) · <strong>BCMA compliance</strong> (scan rates + workaround hunt) · <strong>downtime readiness</strong> (kit + drill + timings) · <strong>DHIMS2 timeliness</strong> (on-time % + validation errors) · <strong>SMS reminder pilot</strong> (one clinic, defaulter rates!) · <strong>hand-hygiene dashboard</strong> (audits → traffic-lights → action) · <strong>charting completeness</strong> (ADPIE loops closed %). Baseline it (10+ dots!), PDSA it, board it weekly, present at 30/60/90 (PRO-II M4 + NUT's 90-day menu!). Run the <strong>change play</strong> (M06!): why-story → champions + sceptics → elbow training → quick wins publicised → feedback + visible fixes → sustain (audit + onboarding). Every QI answer ends with SPREAD + SUSTAIN — 'we trained everyone' without a chart is hope, not improvement. Worked pitch: 'our override rate is 47% (baseline chart) — I'll audit 100 overrides, retune the top-3 noisy rules with IT, re-train two bays, and re-chart at 30/60/90.' That paragraph wins project approvals, interviews and distinctions — because it speaks DATA with a heartbeat.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-INF-0014.svg",
          alt: "Exam map six module boxes base chart lock guard think shine. Twenty-five tricky points listed. Countdown six to day with cards mock. Formula plus STAR interview guidance. Portfolio crown contents. Pledge quoted. Cross-course links.",
          caption: "Twenty-five killers learned cold — then the countdown, then the pledge.",
        },
        {
          type: "text",
          heading: "25 points + countdown + STAR",
          paragraphs: [
            "<strong>25 points cold</strong> (diagram): DIKW + nurse both ends, definition verbatim, ladder 5 rungs, TIGER 3, LHIMS/DHIMS2/eTracker split, 7 quality dimensions, chart 4 rules, never clone, addendum-not-delete, banned abbreviations, 5 rights + 2 IDs, downtime 5, SBAR + read-back, need-to-know + minimum, Act 843 + Commission, consent scripts, breach 5, snooping price, fatigue fight, BCMA no-bypass, telehealth toolkit, PICO + CRAAP, run-chart rules, pause test, AI verify. <strong>Countdown</strong>: 6 weeks map objectives + weak topics; 4 weeks timed past Qs + canvas-structured answers; 2 weeks cards (lists, steps, rules, 25 points); 1 week mock + sleep; eve pack + rest; DAY read twice, canvas-structure, cite modules, attempt ALL. <strong>Interviews</strong>: STAR from YOUR QI ('our override rate fell 47→12%…'); 'breach?' = drill aloud (contain→report→assess→notify→learn); 'angry doctor, system down?' = downtime + SBAR + safety-first; 'why informatics?' = one statistic (de-identified!) + data-with-heartbeat passion ('behind every coverage figure stands a nurse — I want to be one the nation trusts').",
          ],
        },
        {
          type: "text",
          heading: "Portfolio crown and pledge",
          paragraphs: [
            "Crown your portfolio (PRO-I M7): run charts (annotated!) + QI protocol + journal-club log + change story (why/champions/wins!) + charting audit + reflections (Gibbs: which override taught most? which breach scared straight? which disconnected patient converted?) + CPD entries + consented project photos. Keep serving: enter honestly, verify always, lock every record, read every alert, verify every AI, design for the disconnected. <strong>The pledge</strong> (say it, sign it, file it): 'I will enter honestly, verify always, lock every record, read every alert, verify every AI, design for the disconnected — data with a heartbeat, decided by a nurse. When pressured to clone, snoop, click-through, fabricate or abandon the offline, I will remember the febrile child called afebrile, the screenshot that ended a career, the grandmother without a phone — and choose the canvas.'",
          ],
        },
        {
          type: "table",
          heading: "Course map: where everything lives",
          columns: ["Module", "Core tools", "Exam favourite"],
          rows: [
            ["01 Base", "DIKW, ladder, TIGER, DHIMS2", "Definition verbatim + wisdom overrides"],
            ["02 Chart", "4 rules, clone ban, downtime, SBAR", "Addendum + downtime 5 steps"],
            ["03 Lock", "Act 843, consent, breach drill", "Breach 5 + snooping price"],
            ["04 Guard", "Alerts, BCMA, telehealth", "Fatigue fight + no bypass"],
            ["05 Think", "PICO, CRAAP, run charts", "Shift/trend/runs + annotate"],
            ["06 Shine", "Pause test, AI verify, change", "Rants≠whistleblowing + resistance"],
            ["07 Capstone", "Canvas, formula, 25 points", "Scenario reasoning + QI design"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Course complete: NGP-INF-101",
          body: "Seven modules, fourteen lessons, fourteen diagrams: base → chart → lock → guard → think → shine → capstone. You hold the canvas, the run chart, the breach drill and the pledge. File this course in your portfolio, run your 90-day informatics project, and walk into wards and districts as the nurse the nation's data can trust. Informatics isn't computers — it's the honest keystroke, the read alert, the traced defaulter, the grandmother included. Congratulations, nurse of the digital ward.",
        },
      ],
      keyPoints: [
        "90-day project: ONE metric + baseline + PDSA + board + 30/60/90 present.",
        "Change play: why → champions → elbow → wins → feedback → sustain + spread.",
        "25 tricky points cold; countdown 6-4-2-1 with mocks + sleep; canvas answers.",
        "Interviews: STAR from QI; breach drill aloud; why-informatics with a statistic.",
        "Portfolio crown: charts + protocol + club log + change story + reflections + CPD.",
        "Pledge signed + filed; project started within 30 days.",
      ],
      quiz: {
        keywords: ["QI project", "PDSA", "tricky points", "countdown", "STAR", "interviews", "pledge", "portfolio", "90 days", "distinction", "canvas", "run chart", "change", "spread", "sustain"],
        categories: ["fundamentals"],
      },
    },
  ],
};
