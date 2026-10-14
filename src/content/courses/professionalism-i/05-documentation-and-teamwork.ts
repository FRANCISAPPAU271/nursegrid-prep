import type { CourseModule } from "../types";

export const documentationHandoverTeamwork: CourseModule = {
  slug: "documentation-handover-teamwork",
  title: "Documentation, handover and teamwork",
  summary:
    "The paper that protects: documentation's six purposes with eight rules, SOAPIE/DAR/FOCUS formats, banned abbreviations, student countersigning and e-record discipline — then ISBAR handover with bedside practice and read-back, referrals, the six-link incident chain with open disclosure, interprofessional collaboration with rounds and conflict, and staffing-concern escalation in writing.",
  lessons: [
    {
      slug: "legal-documentation",
      title: "Legal documentation",
      minutes: 20,
      objectives: [
        "State documentation's six purposes with legal weight.",
        "Apply the eight rules to every entry.",
        "Write in SOAPIE, DAR and FOCUS formats.",
        "Practise e-record discipline: passwords, copy-paste, downtime.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Six purposes, one exhibit A",
          paragraphs: [
            "Records serve: <strong>communication</strong> (the team reads what hands can't say), <strong>legal evidence</strong> (courts + tribunals treat notes as the care's shadow — 'not documented, not done'), <strong>continuity</strong> (night nurse inherits day's reasoning), <strong>audit + quality</strong> (indicators, maternal reviews, accreditation), <strong>billing + NHIS claims</strong> (undocumented care is unclaimable), <strong>research + teaching</strong> (de-identified). Because purpose two rules disputes, write every entry as if the panel reads it aloud: the brilliant unwritten allergy check loses to the mediocre fully-recorded one. Document: assessments, decisions + reasoning, consent/refusal, advice given, education, medications (5 rights + batch where policy), procedures, observations with actions on abnormal, escalations (who/when/response), handovers given/received, incidents, and complaints with responses.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0009.svg",
          alt: "Documentation rules: contemporaneous, factual, complete, timed/dated/signed with name/PIN/cadre, legible with no blanks or gaps, unaltered (single line plus initial, never correction fluid), countersigned for students, confidential. Formats: SOAPIE for care plans, DAR for progress notes, FOCUS per problem for complex patients. E-records: own passwords, log off, copy-paste forbidden, templates completed, downtime paper. Banned abbreviations: U, IU, trailing zeros, naked decimals, QD/QOD, drug shortenings. Retention per policy; audit own notes monthly.",
          caption: "Eight rules, three formats, zero correction fluid — notes the panel reads with approval.",
        },
        {
          type: "text",
          heading: "Formats and the banned list",
          paragraphs: [
            "<strong>SOAPIE</strong> (Subjective — patient's words quoted; Objective — measured/seen; Assessment — nursing judgment; Plan; Intervention; Evaluation) suits care plans and reviews — the E closes the loop (re-assessed pain 3/10 post-analgesia, not just 'given'). <strong>DAR</strong> (Data/Action/Response) keeps progress notes tight and event-linked. <strong>FOCUS</strong> (problem-titled DARs) organizes complex multi-issue patients. Whichever the ward uses, use it FULLY — half-SOAP without Evaluation is half a defence. <strong>Banned abbreviations</strong> (ward list only, but universally): <strong>U</strong> (units — write 'units'; '4U' insulin kills), <strong>IU</strong>, <strong>trailing zeros</strong> ('5.0' → '50'), <strong>naked decimals</strong> ('.5' → '5'), <strong>QD/QOD</strong> (daily/every-other-day confusion), drug-name shortenings. <strong>Students</strong>: entries <strong>checked + countersigned</strong> same shift by supervisor (who owns verification); unsigned student notes are orphans at tribunals. <strong>Late entries</strong>: headed 'LATE ENTRY' with actual time + reason, never back-timed into sequence — honesty about delay beats fabricated contemporaneity.",
          ],
        },
        {
          type: "text",
          heading: "E-records: logins are signatures",
          paragraphs: [
            "Electronic records audit everything: <strong>own password, never shared</strong> (entries are legally SIGNED by your login — a colleague's 'quick entry' under your name is forgery), <strong>log off every exit</strong> (walk-away screens invite impersonation + snooping), <strong>copy-paste FORBIDDEN</strong> (yesterday's 'lungs clear' pasted onto today's pneumonia kills — re-assess, re-enter, every time), templates <strong>completed thoughtfully</strong> (clicked-through normal boxes on an abnormal patient are fraud-adjacent), <strong>downtime paper</strong> per protocol (then transcribed + reconciled, never double-dosed). Print sparingly, collect immediately, shred securely. System slow? Report + paper-bridge per policy — never 'document later from memory' (Module 03's contemporaneous rule has no IT exception). And remember Module 04: access logs catch every snoop — open only your patients' files.",
          ],
        },
        {
          type: "table",
          heading: "Write this, not that",
          columns: ["Instead of (vague/unsafe)", "Write (factual/defensible)", "Why it matters"],
          rows: [
            ["'Patient rude, refused meds'", "'At 10:20 offered amlodipine 5 mg PO; patient stated \"it makes me dizzy, I won't take it\"; explained risks; declined; Dr informed 10:25, reviewing; vitals...'", "Quotes + actions + escalation; labels ('rude') inflame panels and prove bias"],
            ["'Seems better'", "'Pain 3/10 (was 7/10 at 08:00 post 1 g paracetamol PO 08:05); mobilized to chair; afebrile 36.8; engaging, requesting discharge info'", "Measured change + intervention + response = Evaluation done"],
            ["Blank wound box", "'Sacral pressure area 2 cm, Stage 2, slough-free, dressed hydrocolloid per protocol; offload plan + dietician referred; photo per consent filed'", "Blanks read as 'not assessed' — pressure ulcers litigate on gaps"],
            ["'Informed doctor' (no name/time)", "'Dr Mensah informed 14:20 re rigid abdomen + obs; agreed immediate review; NBM + IV NS commenced 14:25'", "Handover needs who/when/what/agreed — 'informed doctor' evaporates"],
            ["Back-timed 08:00 note at 14:00", "'LATE ENTRY 14:00 (event 08:00, delayed by emergency): ...'", "Honest delay beats fabricated timing — forensic ink/metadata expose lies"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The monthly self-audit: ten charts, ten minutes",
          body: "Pull ten of your recent entries and score: timed/dated/signed? factual not labelled? consent/refusal recorded? abnormal obs acted on? escalations named? handover noted? formats complete (E in SOAPIE)? countersigned where needed? Would the panel reading aloud embarrass or exonerate you? Fix patterns (always missing Evaluation? always vague nights?) with one habit change monthly. Nurses who audit themselves never meet the tribunal's reader unprepared.",
        },
      ],
      keyPoints: [
        "Purposes: communication, legal evidence, continuity, audit, billing, research — write for the panel reading aloud.",
        "Eight rules: contemporaneous, factual, complete, signed, legible, unaltered, countersigned, confidential.",
        "SOAPIE (close with Evaluation), DAR (event-linked), FOCUS (multi-problem) — half-formats are half-defences.",
        "Banned: U, IU, trailing zeros, naked decimals, QD/QOD, drug shortenings; students countersigned same shift.",
        "E-records: own login = signature, log off, no copy-paste, downtime paper; access logs catch snoopers.",
        "Late entries headed + reasoned, never back-timed; self-audit ten charts monthly.",
      ],
      quiz: {
        keywords: ["documentation", "SOAPIE", "DAR", "FOCUS", "contemporaneous", "countersign", "abbreviations", "e-records", "copy-paste", "audit", "late entry", "retention", "evidence", "handover", "tribunal"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "handover-incidents-and-teamwork",
      title: "Handover, incidents and teamwork",
      minutes: 20,
      objectives: [
        "Hand over with ISBAR plus read-back at bedside.",
        "Write referrals that get answered.",
        "Run the six-link incident chain with disclosure.",
        "Collaborate interprofessionally and escalate staffing in writing.",
      ],
      blocks: [
        {
          type: "text",
          heading: "ISBAR: structured urgency, read back",
          paragraphs: [
            "<strong>Identify</strong> (you + patient with 2 identifiers + role + location) → <strong>Situation</strong> (what's happening NOW + urgency — lead with the worry, not the history) → <strong>Background</strong> (relevant history, trend, treatment so far — brief, pertinent) → <strong>Assessment</strong> (YOUR impression — nurses diagnose concern: 'I think he's bleeding') → <strong>Recommendation + Read-back</strong> (what you need + when, then confirm: 'coming now, crossmatch 4, 10:42'). Phone handovers add: spell names, read numbers digit-wise, state callbacks. <strong>Bedside handover</strong> (shift change AT the bed): introduce, invite patient corrections ('anything to add, Maame?'), verify drips/drains/wounds/obs together, curtain sensitive items — safer (errors spotted), shorter (no double-handling), trusted (patients hear honesty). Never hand over unverified ('I think the Hb…') — check first or flag openly; never accept unquestioned — the receiving nurse's questions are the last safety net. Document handover given/received (who/when/key points) — Module 03's defence needs it.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0010.svg",
          alt: "ISBAR: Identify (you, patient two identifiers, role, location), Situation (now plus urgency), Background (history, trend, treatment), Assessment (your impression), Recommendation plus Read-back (need plus confirm) — with a bleeding post-op worked example. Incident chain: detect, make safe, inform, form same shift, open disclosure, learn. Bedside handover with patient consent and corrections; never hand over unverified or accept unquestioned; staffing concerns escalated in writing.",
          caption: "Lead with the worry, close with the read-back — and incidents chained, never buried.",
        },
        {
          type: "text",
          heading: "Referrals and the incident chain",
          paragraphs: [
            "<strong>Referrals</strong> (doctor, physio, dietitian, social welfare, DOVVSU) answer five questions: <strong>who</strong> (identifiers + location + contact), <strong>why now</strong> (trigger + urgency), <strong>what's known</strong> (history, obs, results — attached, not 'see folder'), <strong>what's asked</strong> (review? procedure? opinion? timeframe), <strong>what's pending</strong> (NBM? consent? family informed?). Vague referrals ('please see') queue-jump nobody; precise ones move. Chase + document chase ('called X 11:00 + 13:30, attending 14:00'). <strong>Incident chain</strong> (falls, errors, pressure damage, aggression, near-misses, equipment failure): <strong>detect → make safe FIRST</strong> (patient stable, drug stopped, spill contained, aggressor managed) → <strong>inform</strong> (in-charge + doctor same-shift) → <strong>form</strong> (facts, times, witnesses, no blame-words like 'caused by' or 'negligent' — describe, don't judge) → <strong>open disclosure</strong> (patient/family: what happened, harm, next steps, apology for experience, contact — Module 02's candour) → <strong>learn</strong> (debrief, reflection, system fix tracked: storage moved? protocol rewritten? training done?). No-blame culture reports MORE (learning) — but reckless/falsified acts still discipline individually (Module 03's ladder). File near-misses too: the caught error teaches free.",
          ],
        },
        {
          type: "text",
          heading: "Teamwork: rounds, respect, conflict",
          paragraphs: [
            "Interprofessional collaboration runs on: <strong>known roles</strong> (who does what — pharmacist dosing, physio mobilizing, lab resulting, porter transporting; nurses coordinate, not command), <strong>ward rounds with nursing voice</strong> (present ISBAR-style, question plans kindly, confirm orders read-back — silent nurses co-own bad plans), <strong>respect rituals</strong> (names, greetings, thanks, handover punctuality — hierarchy without humiliation), <strong>closed-loop communication</strong> ('give 10 units' → '10 units, drawing now' → 'given 10:42'), <strong>conflict handled early</strong> (private, specific, soon: 'when X happened I felt… patient risk was… I suggest…' — then in-charge, then mediation, documented; shouting matches at bedsides traumatize patients and evidence poorly). <strong>Students/juniors</strong>: orient, buddy, check, debrief — today's patience is tomorrow's workforce. <strong>Staffing-unsafe</strong>: escalate <strong>IN WRITING</strong> (in-charge → management: numbers, acuity, risks, requests), prioritize transparently (ABCs + time-critical first, document deferred care + reason), never silently absorb — verbal warnings evaporate at tribunals, written ones protect patients and PINs alike.",
          ],
        },
        {
          type: "table",
          heading: "Teamwork traps and escapes",
          columns: ["Trap", "Why it harms", "Escape"],
          rows: [
            ["Verbal order, no read-back", "Misheard doses kill (units, names, numbers)", "Read back ALL verbal/phone orders + document + prescriber countersigns"],
            ["'Doctor knows best' silence", "Nurses spot what prescribers miss (allergy, trend, context)", "Challenge kindly + firmly: 'concern + evidence + suggestion'; escalate if dismissed"],
            ["Handover by the station, patient unseen", "Drips/drains/wounds/identity errors survive", "Bedside verification handover; unseen = unverified = unsafe"],
            ["Blame culture after incidents", "Hiding replaces reporting; next patient pays", "Facts-first forms, systems fixes, debrief support — discipline recklessness, learn errors"],
            ["Absorbing unsafe staffing silently", "Harm + personal liability (Module 03: no excuse)", "Written escalation + visible prioritizing + documented deferred care"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Verbal orders: the killing shortcut",
          body: "Verbal/phone orders are emergency-only: prescriber states, nurse READS BACK (drug, dose digit-wise, route, time), prescriber confirms, nurse documents ('verbal order Dr X 10:42, read back, confirmed') and acts, prescriber countersigns promptly per policy. Never accept verbal orders for chemotherapy, high-risk infusions or restraints beyond policy; never act on overheard/relay orders ('tell her the doctor said…'). The nurse who misheard shares the grave — read back every time, no exceptions, no embarrassment.",
        },
      ],
      keyPoints: [
        "ISBAR: Identify → Situation (worry first) → Background → Assessment (your impression) → Recommendation + Read-back.",
        "Bedside handover with patient corrections + verification; never hand over unverified, never accept unquestioned.",
        "Referrals: who, why-now, what's-known, what's-asked, what's-pending — precise moves, vague queues.",
        "Incident chain: make safe → inform → form (facts, no blame) → disclose → learn; file near-misses too.",
        "Teamwork: known roles, nursing voice on rounds, closed-loop, early private conflict, juniors mentored.",
        "Unsafe staffing escalated IN WRITING with visible prioritizing; verbal orders emergency-only with read-back.",
      ],
      quiz: {
        keywords: ["ISBAR", "SBAR", "handover", "read-back", "bedside", "referral", "incident", "disclosure", "near-miss", "teamwork", "rounds", "closed-loop", "conflict", "staffing", "verbal orders"],
        categories: ["fundamentals"],
      },
    },
  ],
};
