import type { CourseModule } from "../types";

export const bedsideApplicationII: CourseModule = {
  slug: "bedside-application",
  title: "Bedside application: vitals, ABCs and failing systems",
  summary:
    "The capstone: full vital-sign technique with adult ranges and red thresholds, early-warning scores with escalation rules, the ABCDE assessment step by step — then the four failures (shock, respiratory failure, AKI, coma) with recognition and first actions, sepsis and arrest, ceilings of care, and documentation that stands up.",
  lessons: [
    {
      slug: "vital-signs-and-abcde",
      title: "Vital signs and the ABCDE assessment",
      minutes: 20,
      objectives: [
        "Take a full vital-sign set with correct technique for each parameter.",
        "State adult normal ranges and the thresholds that trigger escalation.",
        "Explain early-warning scoring and the escalation rules.",
        "Run the ABCDE assessment in order with reassessment.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The full set, done right",
          paragraphs: [
            "<strong>Temperature</strong> (oral/axillary/tympanic/rectal — know each site's offset; fever ≥38, hypothermia <35, patterns: spiking, remittent, relapsing), <strong>pulse</strong> (rate + <strong>rhythm + volume</strong>, full minute if irregular; tachy >100, brady <60 with symptoms), <strong>respirations</strong> (<strong>full minute</strong>, counted discreetly — rate + depth + rhythm + <strong>effort</strong>; 12–20 adult, tachypnoea >20 is the earliest warning of most deterioration), <strong>BP</strong> (technique from Module 03 — rest, position, cuff size, arm documented; MAP ≥65 perfuses organs), <strong>SpO₂</strong> (<strong>with the waveform</strong> — no waveform, no reading; targets 94–98%, 88–92% retainers; probes fail in cold/shock/nail polish/CO poisoning), <strong>pain</strong> (0–10 + PQRST + face/behavioural scales where speech fails), <strong>consciousness</strong> (AVPU every set, GCS where neuro), <strong>glucose</strong> (hypo mimics everything neuro), <strong>urine output</strong> (≥0.5 mL/kg/h — the kidney's continuous commentary). Take them in the same order every time, <strong>equipment checked first</strong> (cuff, probe, thermometer, glucometer calibrated), patient rested and explained — rushed obs are fiction with decimal points.",
          ],
        },
        {
          type: "table",
          heading: "Adult ranges and red thresholds",
          columns: ["Parameter", "Normal adult", "Escalate (single-parameter reds)", "Technique trap"],
          rows: [
            ["Respiratory rate", "12–20/min", "≤8 or ≥25 (≥30 emergency)", "Counted 15 s × 4 while patient talks — always full minute, discreetly"],
            ["SpO₂", "94–98% (88–92% retainers)", "≤91% on air, or new O₂ need, or waveform lost", "Cold hands, polish, motion, CO — check the waveform, warm the hand"],
            ["Temperature", "36.1–37.2°C", "≤35 or ≥39.1 (≥38 + failure = sepsis bundle)", "Site offsets differ; recent hot/cold drinks fool oral readings"],
            ["Systolic BP", "90–140 mmHg", "≤90 or ≥220 (or ≥180/120 + organ damage)", "Wrong cuff size (small = high); arm, position, rest documented"],
            ["Heart rate", "60–100/min", "≤40 or ≥131 (≥91 + infection = sepsis flag)", "Radial misses weak beats in AF — apical-radial deficit, full minute"],
            ["Consciousness", "Alert (GCS 15)", "New confusion/agitation or GCS drop ≥2", "Hypo + sedation + sepsis all look alike — glucose first, assume reversible"],
            ["Urine output", "≥0.5 mL/kg/h", "<0.5 × 2 h, or anuric, or new incontinence/retention", "Blocked catheter lies — flush/assess patency before believing anuria"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0026.svg",
          alt: "ABCDE bedside poster. A: look and listen for stridor, gurgling, silence — head tilt-chin lift (jaw thrust if trauma), suction, airway adjuncts, C-spine. B: rate, effort, sats, sounds — sit up, oxygen to target, listen, gases, cause treatment. C: pulse, BP, refill, urine, ECG — access, fluids or blood per type, lactate, cultures if septic. D: GCS, pupils, glucose — glucose now, antidotes, seizure protocol, CT. E: temperature, rash, fluids, pain, lines — cultures, antibiotics, analgesia, bladder, dignity. Never pass uncorrected A or B; reassess after every intervention; SBAR handover with trend; document times.",
          caption: "In order, every time — A before B before C, and reassess after everything.",
        },
        {
          type: "text",
          heading: "Early warning: the score summons help",
          paragraphs: [
            "<strong>NEWS2</strong> scores six parameters (RR, SpO₂ + air-or-oxygen, temperature, systolic BP, heart rate, consciousness) 0–3 each: <strong>0–4 = routine monitoring</strong> (frequency per protocol), <strong>5–6 or any 3 = urgent review</strong> (nurse in charge + doctor, obs hourly), <strong>≥7 = emergency</strong> (critical-care team, continuous monitoring). <strong>Scale 2</strong> recalibrates SpO₂ for chronic hypoxic retainers — confirm the target scale on admission, don't improvise. But scores assist, never replace: <strong>clinical concern overrides any number</strong> — the patient \"just isn't right\" with a score of 2 still earns escalation, and the score that jumps 3 points overnight matters more than its absolute value. Document the <strong>score + the action + who was told + when + response</strong>; incomplete obs sets (no RR, no consciousness) are the commonest audit failure — the two most predictive parameters, skipped most often. Count the rate, wake the patient, score the set.",
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Resus readiness: the 60-second trolley check",
          body: "Every shift, every ward: defibrillator on and charged, suction working with catheters, oxygen connected with masks, airway bag (OPAs/NPAs, bag-valve-mask, ET tubes + laryngoscope where skilled), emergency drugs in date (adrenaline, atropine, amiodarone, glucose, naloxone, salbutamol, aspirin), IV access kit + fluids, monitor leads, and the arrest bleep number posted. The check takes a minute; the missing suction during a vomit-filled arrest costs a life. Sign the checklist — it is a legal document.",
        },
      ],
      keyPoints: [
        "Full set in fixed order: T, pulse (rate/rhythm/volume), RR (full minute + effort), BP (technique), SpO₂ + waveform, pain, consciousness, glucose, urine.",
        "RR is the earliest warning; SpO₂ without waveform is fiction; MAP ≥65 perfuses; urine ≥0.5 mL/kg/h narrates.",
        "NEWS2: 5–6 urgent review, ≥7 emergency; Scale 2 for retainers; concern overrides scores; trend beats snapshot.",
        "ABCDE: assess → treat → reassess, never past uncorrected A/B; SBAR handover with trend + pending.",
        "Document score + action + who + when + response; missing RR/consciousness is the classic audit fail.",
        "Resus check every shift: defib, suction, O₂, airway bag, drugs in date, access kit — signed, legal.",
      ],
      quiz: {
        keywords: ["vital signs", "respiratory rate", "SpO2", "blood pressure", "MAP", "NEWS2", "early warning", "ABCDE", "GCS", "urine output", "escalation", "SBAR", "resuscitation", "defibrillator", "handover"],
        categories: ["fundamentals", "medsurg"],
      },
    },
    {
      slug: "recognizing-the-failing-systems",
      title: "Recognizing the failing systems",
      minutes: 20,
      objectives: [
        "Recognize shock, respiratory failure, AKI and coma with first actions for each.",
        "Run the sepsis overlap: cultures, antibiotics, fluids, lactate.",
        "Describe arrest roles, shockable rhythms and the 4 Hs + 4 Ts.",
        "Explain ceilings of care, DNAR and documentation that stands up.",
      ],
      blocks: [
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0027.svg",
          alt: "Four failures grid. Shock: tachycardia, tachypnoea, cool/mottled, falling urine with BP lying early — ABCs plus oxygen plus access, 500 mL fluids with reassessment, type-specific treatment plus lactate plus SBAR. Respiratory failure: type 1 low oxygen (pneumonia, PE, ARDS) — sit up, oxygen to target, gases, CXR, cause treatment; type 2 high CO2 with drowsiness — controlled oxygen 88–92 plus NIV plus senior help. AKI: output under 0.5 for 2 hours with rising creatinine — ABCs plus bladder scan, fluids if dry, stop nephrotoxins, potassium and balance plus SBAR. Coma: falling GCS, blown pupil, posturing — ABCs plus glucose now, nil by mouth, antidotes, CT plus neuro obs. Sepsis overlaps all four; arrest needs compressions, defibrillation of shockables, adrenaline, and the 4 Hs and 4 Ts; DNAR is not do-not-treat.",
          caption: "Four failures, three actions each — and sepsis hiding behind any of them.",
        },
        {
          type: "text",
          heading: "Shock and respiratory failure: perfusion and gases",
          paragraphs: [
            "<strong>Shock</strong> (Module 03's ladder): catch it compensated — tachycardia, tachypnoea, cool peripheries, narrow pulse pressure, falling urine — and act while BP still lies: ABCs, high-flow O₂, <strong>two large-bore accesses</strong>, <strong>500 mL fluid challenge + reassess</strong> (lungs? JVP? BP? urine? — drowning lungs stop fluids), blood if bleeding (transfuse to target per protocol, keep warm, calcium with massive transfusion), <strong>type-specific treatment</strong> (antibiotics/sepsis, adrenaline/anaphylaxis, sit-up/cardiogenic, relieve/obstructive), lactate + cultures + SBAR. <strong>Respiratory failure</strong>: <strong>Type 1</strong> (PaO₂ low, CO₂ normal/low — pneumonia, PE, ARDS, pulmonary oedema, pneumothorax): sit up, O₂ to target, listen, ABG/VBG + CXR + ECG, cause treatment (antibiotics, diuretics, anticoagulation, drainage). <strong>Type 2</strong> (PaO₂ low + <strong>PaCO₂ high</strong> — COPD, fatigue, opiates, neuromuscular, chest wall): drowsy + bounding pulse + flapping tremor + warm hands — <strong>controlled O₂ 88–92%</strong> (Venturi), <strong>NIV</strong> where indicated, reverse opiates, rest the exhausted (intubation threshold low), senior help immediately. <strong>Exhaustion + falling rate + rising CO₂ = pre-arrest</strong> in both types.",
          ],
        },
        {
          type: "text",
          heading: "AKI, DKA and coma: output, sugar, brain",
          paragraphs: [
            "<strong>AKI drill</strong>: ABCs + bladder scan (retention? blocked catheter?) → fluids <strong>if dry</strong> with lung checks → <strong>stop nephrotoxins</strong> (NSAIDs, aminoglycosides, contrast, ACE-i) → K⁺/acid/gases + ECG → weights + strict balance + SBAR (Module 05's ladder for hyperK). <strong>DKA drill</strong> (glucose high + ketones + acidotic + dehydrated + Kussmaul): <strong>fluids first</strong> (shock kills before sugar), then <strong>fixed-rate insulin</strong> per protocol with <strong>potassium replaced as it falls</strong> (insulin + correction drive K⁺ down — arrest territory), hourly glucose/ketones/gases, <strong>find the trigger</strong> (infection, missed insulin, MI, pancreatitis, steroids) — cerebral oedema watch in children. <strong>Coma drill</strong>: ABCs (airway + <strong>GCS ≤8 = intubate</strong>) + <strong>glucose NOW</strong> + sats + NBM + recovery/head-up positioning + <strong>naloxone</strong> (pinpoint + slow) / <strong>thiamine</strong> (alcoholic + confused) + seizure protocol + CT + neuro obs + neurosurgical SBAR. All three drills share one rule: <strong>reversible causes first, in parallel with resuscitation, never after it</strong>.",
          ],
        },
        {
          type: "text",
          heading: "Arrest: roles, rhythms, reversibles",
          paragraphs: [
            "Unresponsive + <strong>no normal breathing + no pulse</strong> (10-second check): call the arrest team, start <strong>compressions 100–120/min, 5–6 cm, full recoil, minimal interruptions</strong>, defibrillator on — <strong>shock VF/pulseless VT</strong> (charge during compressions, clear, shock, immediate resume), <strong>adrenaline 1 mg q3–5 min</strong>, <strong>amiodarone after 3rd shock</strong> per algorithm, airway + high-flow O₂ + IV/IO access + ABG/VBG + continuous capnography (EtCO₂ <10 = poor compressions or tiring team — swap compressors q2 min). Meanwhile hunt the <strong>4 Hs + 4 Ts</strong>: <strong>hypoxia, hypo/hyperkalaemia, hypovolaemia, hypothermia; tamponade, tension, toxins, thrombosis (coronary/pulmonary)</strong> — arrests with found causes survive. Roles: <strong>compressor, airway, defib/monitor, drugs/scribe, team leader</strong> (hands-off, deciding) — closed-loop communication (\"adrenaline 1 mg given\" — \"1 mg given, 10:42\"). And <strong>post-ROSC</strong>: ABCs, 12-lead ECG, targeted temperature/BP/glucose/sats control, cause treatment, ICU — survival continues past the pulse.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Ceilings, DNAR and the record that stands up",
          body: "Not every patient is for everything: Treatment Escalation Plans / ReSPECT set ceilings (ward-based care? NIV? ICU? CPR?) through clinician-patient-family discussion — the nurse checks the ceiling BEFORE the emergency, advocates where none exists, and honours it under pressure. DNAR means no chest compressions/defibrillation — it NEVER means no antibiotics, fluids, analgesia or escalation within the ceiling. Document every emergency in real time: times (found, called, arrived, rhythms, shocks, drugs, ROSC/death), who did what, who witnessed, family informed by whom, equipment batch numbers where relevant — contemporaneous, legible, signed. Then debrief the team (what helped? what hindered?), support the family (quiet room, belongings, chaplaincy, follow-up), complete incident/exception reporting honestly, and look after yourself — cumulative arrests wound nurses silently. Reflection, supervision and rest are clinical duties too.",
        },
      ],
      keyPoints: [
        "Shock: compensated signs → access + 500 mL + reassess + type-specific Rx + lactate; drowning lungs stop fluids.",
        "Type 1 failure: O₂ + cause Rx; Type 2 (↑CO₂, drowsy): controlled O₂ 88–92 + NIV + seniors; exhaustion = pre-arrest.",
        "AKI: scan, fluids-if-dry, stop nephrotoxins, K⁺ ladder. DKA: fluids → insulin → K⁺ → trigger. Coma: ABCs + glucose + antidotes + CT.",
        "Arrest: 100–120/min, 5–6 cm, shock VF/VT, adrenaline, amiodarone, 4 Hs + 4 Ts, roles + closed loop, post-ROSC care.",
        "Ceilings (TEP/ReSPECT) checked before emergencies; DNAR ≠ do-not-treat; document times/rhythms/drugs/witnesses live.",
        "Debrief the team, support the family, report honestly, rest deliberately — the capstone of A&P II.",
      ],
      quiz: {
        keywords: ["shock", "fluid challenge", "respiratory failure", "NIV", "AKI", "DKA", "coma", "cardiac arrest", "defibrillation", "adrenaline", "reversible causes", "ROSC", "DNAR", "ceilings of care", "debrief"],
        categories: ["medsurg", "fundamentals"],
      },
    },
  ],
};
