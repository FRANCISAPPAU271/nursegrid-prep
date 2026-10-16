import type { CourseModule } from "../types";

export const foundationsOfNursingInformatics: CourseModule = {
  slug: "foundations-of-nursing-informatics",
  title: "Foundations of nursing informatics",
  summary:
    "From keystroke to wisdom: the DIKW chain with a hyperkalaemia story, what informatics really means, the roles ladder and TIGER competencies — then Ghana's digital health landscape (LHIMS, DHIMS2, eTracker, mHealth), power-and-network realities, and the nurse's data-quality duties.",
  lessons: [
    {
      slug: "what-nursing-informatics-is",
      title: "What nursing informatics is",
      minutes: 18,
      objectives: [
        "Climb the DIKW chain with examples.",
        "Define nursing informatics precisely.",
        "Name the roles ladder and TIGER skills.",
        "Defend nurse wisdom over system output.",
      ],
      blocks: [
        {
          type: "text",
          heading: "DIKW: the hyperkalaemia story",
          paragraphs: [
            "Midnight, medical ward. You type <strong>DATA</strong>: 'K+ 6.1', 'T-wave peaked', 'BP 90/60' — raw facts, meaningless alone. The system links them into <strong>INFORMATION</strong>: this result + this tracing + this pressure = a pattern (hyperkalaemia with cardiac effects and shock). The protocol supplies <strong>KNOWLEDGE</strong>: 'K+ above 6 with ECG changes = emergency — calcium, insulin/glucose, nebulised salbutamol, urgent review'. But only YOU supply <strong>WISDOM</strong>: you look at the sweaty, bradycardic man, hold his spironolactone, call the doctor NOW, wheel the ECG machine yourself. The chain is DATA → INFORMATION → KNOWLEDGE → WISDOM, and the nurse stands at BOTH ends — feeding the data in, and deciding what it means. Garbage typed in = garbage wisdom out: your keystrokes ARE patient safety. Examiners love 'classify this statement into DIKW' — practise: 'Hb 7.2' (data), 'anaemia worsening over 3 visits' (information), 'transfuse below 7 with symptoms' (knowledge), 'this breathless woman needs blood tonight, not morning' (wisdom).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-INF-0001.svg",
          alt: "DIKW pyramid read upward: data raw facts typed in, information lab plus ECG linked, knowledge protocol rules, wisdom nurse decides hold the dose. Read-up explanation with garbage-in warning. Informatics definition people data technology. Roles ladder bedside to CNIO with TIGER competencies. Wisdom test overriding discharge suggestion. Mantra quoted.",
          caption: "Nurses stand at both ends of DIKW — feeding data, forging wisdom.",
        },
        {
          type: "text",
          heading: "Definition, ladder and TIGER",
          paragraphs: [
            "Nursing informatics = <strong>integrating nursing science with information and technology to manage data, support decisions and improve care</strong> (IMIA/ANA wording examiners quote — learn it!). It is NOT 'IT for nurses' and NOT 'typing instead of writing': it is nursing judgment expressed through digital tools. Every chart entry, alert answered, DHIMS2 tally and SMS reminder is informatics in action — you have been an informaticist since your first vital-signs chart. The <strong>roles ladder</strong>: bedside nurse (accurate data entry + alert response) → super-user/champion (ward trainer, first-line troubleshooter) → analyst (builds reports and dashboards) → informatics nurse specialist (designs workflows and systems) → CNIO — Chief Nursing Information Officer (leads digital strategy). Exams ask the ORDER and what each rung does; interviews ask 'which rung are you on, and where next?' — 'bedside expert aiming at super-user, already orienting juniors on LHIMS' is a hireable sentence. The <strong>TIGER competencies</strong> (Technology Informatics Guiding Education Reform): basic computer skills, information literacy (finding + judging information), and information management (collecting, processing, presenting data) — every nurse needs all three at bedside level. And the wisdom test that closes every informatics exam answer: system suggests, NURSE decides — 'system said discharge, my assessment said deteriorating, so I reassessed, escalated and documented why' (PRO-I courage + GER handover + NUT canvas all agree!).",
          ],
        },
        {
          type: "table",
          heading: "DIKW drill + ladder check",
          columns: ["Prompt", "Answer", "Why it matters"],
          rows: [
            ["'Temp 39.2, pulse 128' — which level?", "DATA — raw, unlinked facts", "Entry must be exact; errors here poison everything above"],
            ["'Fever + tachycardia + post-op day 2'?", "INFORMATION — linked pattern", "Systems flag it; nurses must NOTICE the flag"],
            ["'Sepsis bundle within 1 hour'?", "KNOWLEDGE — protocol rule", "Alerts embed it; still needs a nurse to ACT"],
            ["'Start fluids, call doctor, blood cultures first'?", "WISDOM — judged action", "Context + patient + timing = only human"],
            ["Ward LHIMS trainer = which rung?", "Super-user/champion", "Bedside credibility + teaching = change engine"],
            ["System vs gut conflict — who wins?", "Assessed nurse judgment, documented", "Computers suggest; nurses decide; records prove"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Learn the definition verbatim",
          body: "'Nursing informatics integrates nursing science with information management and analytical sciences to identify, define, manage and communicate data, information, knowledge and wisdom in nursing practice.' That sentence (IMIA/ANA) opens distinction answers — then illustrate with YOUR ward: one DIKW story beats three quoted textbooks. Mantra for the module: 'right data, right person, right time — decided by the right nurse.'",
        },
      ],
      keyPoints: [
        "DIKW: data → information → knowledge → wisdom; nurses feed and forge both ends.",
        "Informatics = nursing science + information + technology improving care (IMIA/ANA).",
        "Ladder: bedside → super-user → analyst → specialist → CNIO; know each rung's job.",
        "TIGER: computer skills + information literacy + information management for all.",
        "System suggests, nurse decides: reassess, escalate, document WHY.",
        "Mantra: right data, right person, right time — decided by the right nurse.",
      ],
      quiz: {
        questionIds: ["NG-MOD-INFO-001","NG-MOD-INFO-002"],
        keywords: ["DIKW", "data", "information", "knowledge", "wisdom", "informatics", "IMIA", "TIGER", "competencies", "super-user", "CNIO", "ladder", "hyperkalaemia", "definition", "judgment"],
        categories: ["leadership-delegation"],
      },
    },
    {
      slug: "ghanas-digital-health-landscape",
      title: "Ghana's digital health landscape",
      minutes: 18,
      objectives: [
        "Trace data from ward to national policy.",
        "Name LHIMS, DHIMS2, eTracker, mHealth roles.",
        "Plan for power, network and literacy gaps.",
        "Apply the 7 data-quality dimensions.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Your keystrokes reach Accra",
          paragraphs: [
            "Follow one CWC weight: you weigh Ama's baby and type it into <strong>eTracker</strong> (longitudinal, individual record — same child, every visit, ANC to CWC to TB/HIV care). Month-end, the facility tallies all weights into <strong>DHIMS2</strong> (aggregate reporting — district totals, coverage rates, trends). The district validates; the region compiles; <strong>national dashboards</strong> at Ghana Health Service show 'exclusive breastfeeding 62%, vitamin A coverage 71%' — and THOSE numbers order vaccines, post nurses, fund outreach. Meanwhile in the hospital, <strong>LHIMS/HIMS</strong> runs the wards: admissions, orders, vitals, pharmacy, labs, billing — one patient, one record, every department reading the same page. Around them hum <strong>mHealth</strong> tools: SMS appointment reminders, MoTeCH maternal messaging, clinician hotlines, and growing <strong>telemedicine</strong> links beaming specialists into district hospitals. The exam diagram is a FLOW: ward/community systems → DHIMS2 → national policy — and the moral: one invented tally multiplies into national lies ('coverage 95%!' while fridges stand empty). If you didn't weigh her, don't tally her — data quality is patient advocacy at scale.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-INF-0002.svg",
          alt: "Three source boxes ward LHIMS, community eTracker mHealth, district DHIMS2 feeding national GHS policy box with wrong-tally warning. Flow explanation with moral quoted. Systems list LHIMS DHIMS2 eTracker mHealth telemedicine paper hybrids. Ghana realities power network literacy with blackout answer. Nurse data duties enter validate query never fabricate feedback. Seven quality dimensions with mnemonic advice. Power line quoted.",
          caption: "Ward to nation in four hops — every hop trusts your honesty.",
        },
        {
          type: "text",
          heading: "Realities, duties and dimensions",
          paragraphs: [
            "Ghana's digital wards run on hope and generators — plan for it. <strong>Power cuts</strong>: save constantly, keep devices charged, know the paper backup forms (downtime documentation is examinable — M02 drills it!). <strong>Patchy network</strong>: enter offline where allowed, SYNC before leaving, verify uploads, never lose a batch. <strong>Shared computers</strong>: LOG OUT every time (privacy + accountability — M03!). <strong>Low digital literacy</strong>: teach patients SMS reminders with teach-back (NUT's method works everywhere!); use audio/visual aids across language gaps. Exam favourite: 'the light is off and OPD is full — how do data keep flowing?' Answer: paper backup → batch entry when power returns → verify on sync → report gaps honestly → never back-fill from memory as fact. Your <strong>data duties</strong>: enter completely, accurately, ON TIME; validate before submitting; QUERY weird figures (200 ANC visits in a 50-bed week? ask, don't forward!); NEVER fabricate; and close the loop — read YOUR facility's dashboard monthly, because trends you see save lives you know (PRO-II QI + NUT records-into-action!). The <strong>7 quality dimensions</strong> (pure exam list): accuracy, completeness, timeliness, consistency, relevance, accessibility, confidentiality — invent a mnemonic and keep it ('All Care Teams Create Records Accurately, Completely'… make yours stickier!). Behind every national health statistic stands a nurse with a pen or phone — be one the nation can trust.",
          ],
        },
        {
          type: "table",
          heading: "Systems + blackout playbook",
          columns: ["System / situation", "What it does", "Your duty"],
          rows: [
            ["LHIMS / HIMS", "Hospital EHR: orders, vitals, pharmacy, labs, billing", "Real-time entry; log out; downtime forms"],
            ["DHIMS2", "Aggregate monthly reporting to district→national", "Complete, validated, on-time tallies"],
            ["eTracker", "Individual longitudinal (ANC, CWC, TB, HIV)", "Same client, linked visits, no duplicates"],
            ["mHealth / SMS", "Reminders, education, hotlines", "Confirm numbers; teach-back; document sent"],
            ["Light off, OPD full", "Paper backup → batch entry → verify → report gaps", "Never invent; label back-entries honestly"],
            ["Dashboard says odd things", "200 visits in a 50-bed week?", "Query before forwarding; fix at source"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Fabrication kills at scale",
          body: "Invented tallies order wrong vaccines, hide outbreaks, starve wards of staff — and examiners treat data fabrication as a PROFESSIONALISM failure (PRO-I M2 honesty + M6 accountability). Behind on tallies? Report the gap, request support, back-enter from REAL source documents only. An honest gap can be fixed; a pretty lie poisons policy. 'If you didn't weigh her, don't tally her.'",
        },
      ],
      keyPoints: [
        "Flow: LHIMS/eTracker → DHIMS2 → national dashboards → vaccines, staff, policy.",
        "LHIMS = hospital EHR; DHIMS2 = aggregates; eTracker = individuals; mHealth = reach.",
        "Blackout playbook: paper backup → batch entry → verify sync → report gaps honestly.",
        "Duties: complete + accurate + timely; validate; query weird; never fabricate; read dashboards.",
        "7 dimensions: accuracy, completeness, timeliness, consistency, relevance, accessibility, confidentiality.",
        "Behind every statistic stands a nurse — be one the nation can trust.",
      ],
      quiz: {
        questionIds: ["NG-MOD-INFO-003"],
        keywords: ["DHIMS2", "LHIMS", "eTracker", "mHealth", "telemedicine", "Ghana", "data quality", "dimensions", "fabrication", "downtime", "dashboard", "tallies", "coverage", "MoTeCH", "SMS"],
        categories: ["leadership-delegation"],
      },
    },
  ],
};
