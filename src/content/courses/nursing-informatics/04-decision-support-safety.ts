import type { CourseModule } from "../types";

export const decisionSupportSafety: CourseModule = {
  slug: "decision-support-safety",
  title: "Decision support and safety",
  summary:
    "Machines that guard: CDSS alerts, reminders, order sets and calculators, the alert-fatigue fight, BCMA scanning discipline and automation bias — then telehealth's four modes, the virtual toolkit, mHealth rules, remote monitoring and the equity check.",
  lessons: [
    {
      slug: "alerts-reminders-and-barcoding",
      title: "Alerts, reminders and barcoding",
      minutes: 18,
      objectives: [
        "Name CDSS tools + what each catches.",
        "Fight alert fatigue with discipline.",
        "Scan BCMA without workarounds.",
        "Reject automation bias.",
      ],
      blocks: [
        {
          type: "text",
          heading: "CDSS: the tireless second checker",
          paragraphs: [
            "Clinical decision support systems (<strong>CDSS</strong>) watch every order you will ever give: <strong>alerts</strong> (allergy! overdose! duplicate therapy! dangerous interaction!), <strong>reminders</strong> (vaccines due, screens overdue, BGL recheck at 12:00), <strong>order sets</strong> (sepsis bundles, DKA protocols pre-built so nothing is forgotten), <strong>calculators</strong> (paediatric doses, BMI, drip rates), and <strong>guideline links</strong> at the point of care. CDSS catches what tired humans miss at 3 am — but ONLY if humans listen. Enter <strong>alert fatigue</strong> (exam core!): 100 alerts a day, 95 of them trivial ('patient is 65 — falls risk!'), and the brain learns to click-through ALL of them — including alert #96, the REAL penicillin allergy. The override that kills is never the first; it is the forty-seventh, clicked without reading. Fight back with discipline: READ every alert, DECIDE consciously, DOCUMENT the override reason ('allergy alert reviewed: reaction 2019 was nausea, not anaphylaxis — prescriber aware, proceeding per order'), and REPORT noisy rules up the chain (super-user → analyst → retune the rule!). 'Click-through nursing' is indefensible; overrides need REASONS, not reflexes. Facilities should tier alerts (hard stops for lethal clashes, soft whispers for trivia) — and nurses should demand it, with incident reports as evidence (PRO-II QI voice!).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-INF-0007.svg",
          alt: "Five boxes alerts reminders order-sets fatigue-fight BCMA-scan with examples. CDSS definition with catches and fails. Fatigue mechanism 100 alerts with four-part fight. BCMA scan flow with killer workarounds and dead-scanner fallback. Smart pumps calculators weight warning plus high-risk double-checks. Automation bias discharge example. Cross-course links. Mantra quoted.",
          caption: "Read it, scan it, verify it — then give it.",
        },
        {
          type: "text",
          heading: "BCMA, pumps and bias",
          paragraphs: [
            "Bar-code medication administration (<strong>BCMA</strong>) closes the loop CPOE opened: scan the WRISTBAND + scan the PACKET + system matches the ORDER = the 5 rights verified electronically at the bedside. Beautiful — until workarounds gut it. Killer bypasses examiners list: <strong>pre-scanned wristbands</strong> (band on the trolley, patient in bed — scanning furniture!), <strong>scan-then-carry</strong> (verified at the station, given three beds away), <strong>'scanner broken, skip it'</strong> becoming permanent habit. Each bypass deletes the safety net and the audit trail PROVES it (M02!). Scanner truly dead? Full manual 5-rights + 2 identifiers + report + document — never a silent skip. <strong>Smart pumps</strong> carry drug libraries that refuse lethal infusion rates; <strong>calculators</strong> need VERIFIED weights (wrong weight = wrong everything — NUT M2's measure!). High-risk drugs still demand INDEPENDENT double-checks: insulin, heparin, chemo, potassium infusions (GER M4 polypharmacy!). And the deepest trap: <strong>automation bias</strong> — 'the computer said so' replacing nursing judgment. System says discharge + your gut says deteriorating? M01 wisdom wins: reassess, escalate, document WHY. Computers suggest; nurses decide; audit trails remember who clicked. Mantra: 'read it, scan it, verify it — then give it.'",
          ],
        },
        {
          type: "table",
          heading: "Safety tech + nurse discipline",
          columns: ["Technology", "What it guards", "Your discipline"],
          rows: [
            ["Allergy/dose alerts", "Clashes, overdoses, duplicates", "Read + decide + reason every override"],
            ["Reminders", "Vaccines, screens, rechecks", "Act or consciously defer + document"],
            ["Order sets", "Bundle completeness (sepsis, DKA)", "Follow; question omissions/additions"],
            ["BCMA scanning", "5 rights at bedside", "Band + packet + patient TOGETHER, no bypass"],
            ["Smart pumps", "Infusion rate limits", "Right library + verified weight + double-check"],
            ["Discharge predictors", "Risk flags, not verdicts", "Assess; override with documented reason"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Override #47",
          body: "The fatal override is never dramatic — it is the forty-seventh click of a long shift, on an alert that looked like the last forty-six. Build the reflex: pause, read, decide, reason. If the noise is unbearable, report the RULE, don't mute your brain — retuned alerts save the next nurse's patient too. Alert fatigue is a SYSTEM problem you manage with PERSONAL discipline while fighting for the fix.",
        },
      ],
      keyPoints: [
        "CDSS: alerts + reminders + order sets + calculators + guidelines at point of care.",
        "Fatigue: 100 alerts → mute-all → real one kills; read, decide, reason, report noise.",
        "BCMA: wristband + packet + order together; workarounds delete the net — never bypass.",
        "Pumps/calculators: verified weights + libraries + independent double-checks high-risk.",
        "Automation bias: computer suggests, nurse decides — reassess, escalate, document.",
        "Mantra: read it, scan it, verify it — then give it.",
      ],
      quiz: {
        questionIds: ["NG-MOD-INFO-011","NG-MOD-INFO-012"],
        keywords: ["CDSS", "alerts", "reminders", "order sets", "calculators", "alert fatigue", "override", "BCMA", "bar-code", "workarounds", "smart pumps", "automation bias", "double-check", "sepsis", "bundles"],
        categories: ["leadership-delegation"],
      },
    },
    {
      slug: "telehealth-and-mhealth",
      title: "Telehealth and mHealth",
      minutes: 18,
      objectives: [
        "Name telehealth's 4 modes + Ghana uses.",
        "Run safe virtual encounters.",
        "Apply mHealth messaging rules.",
        "Check equity before going digital.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Four modes, one standard",
          paragraphs: [
            "Telehealth extends the nurse beyond walls in <strong>four modes</strong> (exam list!): <strong>synchronous video</strong> (live consults, triage, follow-ups), <strong>store-and-forward</strong> (wound photos, ECGs, labs sent for specialist review), <strong>mHealth</strong> (SMS reminders, apps, hotlines, wearables), and <strong>remote monitoring</strong> (home BP cuffs, glucometers, oximeters streaming data in). Ghana's wins: specialist consults beamed into district hospitals, ANC/CWC SMS reminders cutting defaulters (NUT M6 tracing!), chronic-disease follow-ups without 200-km journeys, outbreak hotlines, CHPS supervision at distance. But distance changes NOTHING about standards — the <strong>virtual toolkit</strong>: confirm IDENTITY (2 identifiers on EVERY call — 'wrong-phone results' are M03 breaches!), obtain CONSENT for virtual care, ensure PRIVACY both ends ('are you somewhere private? anyone listening?'), assess with STRUCTURE (SBAR thinking + red-flag questions, since hands can't palpate), give a clear ESCALATION plan ('go to OPD NOW if breathless, bleeding, or…'), and DOCUMENT like a ward visit (mode, consent, findings, advice, follow-up!). A phone review is a CLINICAL ENCOUNTER — chart it fully (M02's rules!). Limits examiners probe: no palpation, no smell, fragile rapport — examine in person when unsure; emergencies go to facilities, not video queues.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-INF-0008.svg",
          alt: "Five boxes live-video store-forward mHealth remote-monitor safety-first with examples. Four modes with Ghana wins listed. Virtual toolkit identity consent privacy SBAR escalation document with encounter rule. mHealth rules verified numbers plain language no-diagnosis SMS with example. Remote monitoring teach thresholds response failures with DIKW note. Equity check alternatives. Limits palpation emergencies. Mantra quoted.",
          caption: "Identify, consent, assess, document, escalate — distance changes nothing.",
        },
        {
          type: "text",
          heading: "mHealth, monitoring, equity",
          paragraphs: [
            "<strong>mHealth rules</strong>: VERIFY numbers before sending (one wrong digit = another family's results — M03 breach!); plain language + local languages + teach-back (NUT's method!); NEVER diagnoses or sensitive results by bulk SMS ('Your labs are ready, please come' — NOT 'your HIV result…'); LOG every message thread in the record. Appointment reminders, medication prompts, health education, hotline triage — all documented encounters. <strong>Remote monitoring</strong>: teach the DEVICE + technique + logbook (hypertension BP diaries, diabetic BGL logs!), set ALERT thresholds ('call if above 180/110'), define RESPONSE times ('readings reviewed each morning — emergencies still go to OPD!'), and plan device/power/network failures. Data flows in — the NURSE still triages it (M01 DIKW: readings are data; 'this trend needs a visit' is wisdom!). Then the <strong>equity check</strong> (M06 deepens it!): no smartphone? no network? no literacy? no privacy at home? — offer ALTERNATIVES: voice calls, CHPS visits, paper logs, family-supported routines. Digital care must NEVER abandon the disconnected; the grandmother without a phone deserves the same follow-up as the app user. Telehealth EXTENDS the nurse; it never replaces her — and informed consent + confidentiality + documentation follow the patient across every kilometre.",
          ],
        },
        {
          type: "table",
          heading: "Virtual care checks",
          columns: ["Moment", "Do this", "Never this"],
          rows: [
            ["Call starts", "2 identifiers + consent + privacy check", "Assume the voice; discuss openly"],
            ["Assessment", "Structured questions + red flags + escalation plan", "Casual chat; no safety-netting"],
            ["After call", "Full documentation: mode/consent/findings/advice", "Uncharted 'quick call'"],
            ["SMS reminders", "Verified number + plain words + log thread", "Results/diagnoses by text"],
            ["Home devices", "Teach + thresholds + response plan + failure plan", "Device dumped, no follow-up"],
            ["No-phone patient", "Voice/CHPS/paper alternatives, same standard", "Digital-only or nothing"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The safety-net sentence",
          body: "End EVERY virtual encounter with: 'Go to OPD or call back immediately if [3 named red flags] — otherwise I'll [review/call/see you] on [date].' Then document that you said it. Safety-netting converts a phone call from friendly chat into defensible care — and examiners award it explicitly. Distance changes the medium; never the standard.",
        },
      ],
      keyPoints: [
        "Four modes: live video + store-forward + mHealth + remote monitoring; know Ghana uses.",
        "Virtual toolkit: 2 identifiers + consent + privacy + structured assess + escalation + full chart.",
        "mHealth: verified numbers, plain/local words, no results by SMS, log threads.",
        "Monitoring: teach + thresholds + response times + failure plans; nurse triages data.",
        "Equity: voice/CHPS/paper alternatives — never abandon the disconnected.",
        "Limits: no hands/eyes-on; in-person when unsure; emergencies to facilities.",
      ],
      quiz: {
        questionIds: ["NG-MOD-INFO-013","NG-MOD-INFO-014"],
        keywords: ["telehealth", "telemedicine", "mHealth", "SMS", "store-and-forward", "remote monitoring", "virtual", "safety-netting", "escalation", "wearables", "hotlines", "equity", "digital divide", "documentation", "red flags"],
        categories: ["leadership-delegation"],
      },
    },
  ],
};
