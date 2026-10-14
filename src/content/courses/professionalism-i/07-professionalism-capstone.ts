import type { CourseModule } from "../types";

export const professionalismCapstone: CourseModule = {
  slug: "professionalism-capstone",
  title: "Professionalism capstone",
  summary:
    "Everything integrated: the six-step professionalism compass run against night-shift capstone scenarios (deterioration, refusal, error, short-staffing, aggression), scored reasoning with model answers — then the Gibbs reflective cycle, a tribunal-ready professional portfolio, CPD discipline, and the licensing-exam countdown with 20 tricky points and the professional pledge.",
  lessons: [
    {
      slug: "capstone-scenarios",
      title: "Capstone scenarios",
      minutes: 20,
      objectives: [
        "Run the six-step compass on any dilemma.",
        "Prioritize deterioration, refusal, error and aggression.",
        "Produce scored model reasoning for five scenarios.",
        "Defend decisions with Acts, Code and ethics cited.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The compass: six steps, every dilemma",
          paragraphs: [
            "Modules 01–06 converge into one drill: <strong>1. SAFETY FIRST</strong> — stop harm now (ABCs, isolate, make safe; Module 02/04 duties) → <strong>2. LAW CHECK</strong> — statute permits/requires/forbids? (Act numbers from Module 06) → <strong>3. ETHICS FILTER</strong> — six principles + 4-box (Module 02) → <strong>4. CODE + SCOPE</strong> — within PIN/scope? delegate right? escalate (Module 03) → <strong>5. ACT + HANDOVER</strong> — ISBAR, closed-loop, bedside, referrals (Module 05) → <strong>6. RECORD + LEARN</strong> — eight rules, incident chain, reflection, system fix (Modules 05/03). Stuck between steps? Senior + ethics committee + NMC guidance — <strong>never improvise alone</strong>: isolation is where dilemmas become disasters. Run it in minutes at bedsides (deterioration), hours in incidents (errors), days in tribunals (statements) — same compass, different clocks. Examiners reward cited structure ('per Act 560… applying non-maleficence… within my scope I… ISBAR handover… documented per…') over vague virtue ('I would do my best'). Best is unmarked; compass-scored is distinctions.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0013.svg",
          alt: "Professionalism compass: 1 Safety first (stop harm, ABCs, make safe), 2 Law check (statute permits, requires or forbids with Act numbers), 3 Ethics filter (six principles plus 4-box), 4 Code plus scope (within PIN, delegate right, escalate), 5 Act plus handover (ISBAR, closed-loop, bedside), 6 Record plus learn (eight rules, incident chain, reflection, system fix). Stuck: senior plus ethics plus NMC, never improvise alone.",
          caption: "One compass for bedsides, incidents and tribunals — structure beats virtue under pressure.",
        },
        {
          type: "text",
          heading: "Five scenarios, model reasoning",
          paragraphs: [
            "<strong>1. Night shift, 2 nurses/40 patients, post-op bleeding suspected (Bed 4), relative shouting at station.</strong> Compass: SAFETY — Bed 4 first (ABCs, vitals, drain check, NBM, IV, urgent ISBAR to doctor — Module 05 worry-first); LAW — duty of care + staffing escalation (Modules 03/06); ETHICS — triage justice (sickest first) + non-maleficence; CODE — within scope, escalate doctor; ACT — delegate junior: calm relative (acknowledge, promise update time, security if threatening — Module 04 de-escalation), written staffing escalation same shift; RECORD — Bed 4 obs/actions/handovers + incident for staffing + reflection. <strong>2. Jehovah's Witness, Hb 4, refusing blood, conscious adult.</strong> SAFETY — optimize (oxygen, tranexamic per order, surgeon review); LAW — competent refusal is lawful (Module 06, assault if forced); ETHICS — autonomy beats beneficence here; CODE — respect + document; ACT — ISBAR surgeon/anaesthetist, bloodless options, family meeting with consent; RECORD — verbatim refusal + capacity + options offered. <strong>3. You gave 10× digoxin; patient bradycardic.</strong> SAFETY — ABCs, stop drug, call doctor, antidote levels; LAW — civil/tribunal possible, manage via honesty; ETHICS — candour (Module 02); CODE — beyond nothing, own it; ACT — ISBAR + monitoring + family disclosure (what/harm/next/apology); RECORD — facts, incident chain, reflection, system fix (storage/separation). <strong>4. Colleague slaps confused elder; family didn't see.</strong> SAFETY — check elder now (injury, fear); LAW — assault + Act 732 vulnerable adult + whistle (720); ETHICS — non-maleficence + advocacy (Module 04); CODE — report colleague (Module 03 duty); ACT — in-charge + safeguarding + DOVVSU/police per policy, support elder + family disclosure; RECORD — verbatim, body map, incident, ladder in writing. <strong>5. Doctor orders antibiotic despite documented anaphylaxis; dismisses your challenge.</strong> SAFETY — DO NOT GIVE (non-maleficence + scope: administering known allergen is outside safe practice); LAW — negligence elements + assault; ETHICS — 4-box (medical indication fails); CODE — escalate (second doctor, pharmacist, in-charge — Module 05 closed-loop); ACT — document challenge + refusal + escalation + outcome; RECORD — full chain. Refusing an unsafe order is professionalism's bravest act — and its most examined.",
          ],
        },
        {
          type: "table",
          heading: "Score your reasoning (examiner's marks)",
          columns: ["Element (marks each)", "What earns it", "What loses it"],
          rows: [
            ["Safety first (2)", "Immediate harm-stopping actions named specifically", "Starting with paperwork, policy quotes or feelings"],
            ["Law cited (2)", "Act numbers + correct application (refusal lawful, assault, reporting)", "Vague 'it's illegal' / wrong Act / ignoring statute"],
            ["Ethics applied (2)", "Named principles + 4-box reasoning, collisions resolved", "Listing principles without applying to facts"],
            ["Code + scope (2)", "Scope judgment + escalation + delegation rights where apt", "Acting beyond scope or silent obedience to unsafe orders"],
            ["Handover + record (2)", "ISBAR, disclosure, eight rules, incident chain", "'Document everything' with no content specified"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The 10-mark paragraph formula",
          body: "For every scenario question write: SAFETY ('First I would [3 specific actions] because…') → LAW ('Under [Act + number]…') → ETHICS ('Applying [principles], the collision between X and Y resolves toward… because…') → CODE ('Within my scope I…; I would escalate to… because…') → HANDOVER ('I would ISBAR… disclose…') → RECORD ('I would document… file… reflect…'). Six sentences, ten marks, every time. Examiners scan for structure + citations + specifics — the compass IS the mark scheme. Practise all five scenarios aloud until the six steps run without notes.",
        },
      ],
      keyPoints: [
        "Compass: safety → law → ethics → code/scope → act/handover → record/learn; never improvise alone.",
        "Triage: sickest first, written staffing escalation, de-escalate relatives with promised updates.",
        "Competent refusal stands (assault if forced); optimize + document verbatim + offer alternatives.",
        "Own errors: ABCs, ISBAR, disclose (what/harm/next/apology), incident chain, system fix.",
        "Report colleague harm (assault + whistle); refuse unsafe orders — bravest, most-examined act.",
        "10-mark formula: six cited sentences; structure + specifics = distinctions.",
      ],
      quiz: {
        keywords: ["compass", "triage", "refusal", "disclosure", "candour", "escalation", "unsafe orders", "whistleblower", "scenarios", "reasoning", "ISBAR", "incident", "scope", "ethics", "negligence"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "portfolio-cpd-and-exam-prep",
      title: "Portfolio, CPD and exam prep",
      minutes: 20,
      objectives: [
        "Reflect with the Gibbs six-stage cycle.",
        "Build a tribunal-ready professional portfolio.",
        "Run CPD discipline with quarterly updates.",
        "Execute the licensing-exam countdown and pledge.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Gibbs: reflection that changes practice",
          paragraphs: [
            "<strong>Description</strong> (what happened — who/when/where, facts, no judgment yet) → <strong>Feelings</strong> (before/during/after — honest: fear, anger, shame are data) → <strong>Evaluation</strong> (what went well/badly — objectively, evidence-based) → <strong>Analysis</strong> (WHY — theory, Code articles, ethics principles, systems factors: staffing? equipment? hierarchy?) → <strong>Conclusion</strong> (what learned, what else was possible) → <strong>Action plan</strong> (next time I will… + date + evidence of change). Write monthly (one incident, one dilemma, one triumph — triumphs reflect too: what made excellence possible?), <strong>de-identify patients ALWAYS</strong> ('68-year-old post-op patient', never names/beds/dates — Modules 04/06, Act 843). Weak reflection describes ('busy shift, managed'); strong reflection analyzes ('my deference to hierarchy delayed challenge 20 minutes — Module 05 assertiveness tools + rehearsed phrases will close that gap; evidence: next ward round I questioned one order kindly'). Tribunals and interview panels read reflections as character X-rays — honest + analytical + changed beats perfect-every-time.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0014.svg",
          alt: "Gibbs cycle: Description, Feelings, Evaluation, Analysis, Conclusion, Action plan with dates and evidence. Portfolio: PIN plus renewals, CPD log with certificates and reflections, appraisals, signed competencies, incident learnings, compliments and complaints, teaching, audits; quarterly updates, monthly reflection, de-identified patients. Exam countdown from six weeks to exam day plus STAR interviews. Twenty tricky points listed cold.",
          caption: "Reflect monthly, file quarterly, count down weekly — and twenty killers learned cold.",
        },
        {
          type: "text",
          heading: "Portfolio and CPD discipline",
          paragraphs: [
            "Your <strong>portfolio</strong> (physical file + backup): PIN + all renewals, licensing certificates, <strong>CPD log</strong> (every course/workshop/online module: date, hours, provider, certificate, one-paragraph reflection on practice change), appraisals + PDPs, <strong>signed competencies</strong> (procedures, drug rounds, mentorship), incident learnings (forms + reflections + system fixes you drove), compliments + complaints with your responses, teaching delivered, audits/quality projects joined, immunizations + mandatory training (BLS, infection control, safeguarding, fire). <strong>CPD discipline</strong>: log within 48 hours (memory fades, marks don't), link every entry to Code articles + patient impact, quarterly portfolio review (gaps → next quarter's plan), annual summary for appraisal/renewal. NMC renewals + employers + interview panels all ask 'show me' — the nurse with the fat honest file wins jobs, survives tribunals, and (best) actually grows. Start TODAY: file this course (14 lessons, 7 modules, reflections drafted) as CPD entry one.",
          ],
        },
        {
          type: "text",
          heading: "Countdown, interviews, pledge",
          paragraphs: [
            "<strong>6 weeks</strong>: syllabus-map all 42 lesson objectives (this course) + weak topics flagged; <strong>4 weeks</strong>: past questions timed with written rationales (compass-structured); <strong>2 weeks</strong>: rapid-review cards (Act numbers, 4-box, ISBAR, 8 rules, 5 delegation rights, 4 negligence elements, 20 tricky points); <strong>1 week</strong>: mock under exam conditions + sleep hygiene (cramming curdles judgment); <strong>eve</strong>: pack (PIN slip, ID, pens), rest; <strong>day</strong>: read twice, answer what's asked, compass-structure, cite Acts + Code, attempt ALL, review. <strong>Interviews</strong>: STAR stories (Situation-Task-Action-Result) harvested from Gibbs reflections; 'ethical dilemma?' = compass aloud; 'weakness?' = real gap + action plan + evidence. <strong>The pledge</strong> (say it, sign it, file it): 'I will put patients first, practise within my scope, keep confidences, document honestly, escalate danger, report harm, keep learning, and hold my PIN as the public's trust — not my property. When pressured to cut corners, I will remember Bed 4, the refused blood, the misheard dose, and choose the compass.'",
          ],
        },
        {
          type: "table",
          heading: "Course map: where everything lives",
          columns: ["Module", "Core tools", "Exam favourite"],
          rows: [
            ["01 Profession", "Regulation, roles, identity", "NMC functions + title protection"],
            ["02 Ethics", "6 principles, 4-box, consent, candour", "Autonomy collisions + DNAR + disclosure"],
            ["03 Code", "Scope, 5 delegation rights, 4 negligence elements", "Unsafe orders + vicarious liability + tribunal ladder"],
            ["04 Rights", "8-rights charter, confidentiality lights, advocacy", "DOVVSU breaks + restraint rules + complaint ladder"],
            ["05 Records/team", "8 rules, SOAPIE, ISBAR, incident chain", "Banned abbreviations + verbal orders + read-back"],
            ["06 Law", "7 Acts, 4 tracks, concern ladder", "Act numbers + whistle rungs + defamation"],
            ["07 Capstone", "Compass, Gibbs, portfolio", "Scenario reasoning + 20 tricky points"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Course complete: NGP-PRO-101",
          body: "Seven modules, fourteen lessons, fourteen diagrams: profession → ethics → code → rights → records → law → capstone. You hold the compass, the Act numbers, the formats, the ladders and the pledge. File this course in your portfolio, run the countdown, and walk into wards, exams and interviews as the nurse who structures under pressure. Professionalism isn't a module — it's the PIN in your pocket and the patient in your hands. Congratulations, colleague.",
        },
      ],
      keyPoints: [
        "Gibbs: description → feelings → evaluation → analysis → conclusion → action plan; monthly, de-identified.",
        "Portfolio: PIN, CPD log with reflections, competencies, learnings, compliments/complaints — quarterly reviews.",
        "CPD: log in 48h, link to Code + impact; file this course as entry one.",
        "Countdown: 6-map, 4-past-questions, 2-cards, 1-mock+sleep, eve-pack, day-compass-structure.",
        "Interviews: STAR from reflections; dilemma = compass aloud; weakness = gap + plan + evidence.",
        "Pledge signed + filed: patients first, scope honest, danger escalated, learning lifelong.",
      ],
      quiz: {
        keywords: ["Gibbs", "reflection", "portfolio", "CPD", "appraisal", "competencies", "licensing exam", "OSCE", "STAR", "interviews", "pledge", "countdown", "rapid review", "tribunal", "distinction"],
        categories: ["fundamentals"],
      },
    },
  ],
};
