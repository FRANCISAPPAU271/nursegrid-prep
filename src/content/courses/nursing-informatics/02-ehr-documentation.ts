import type { CourseModule } from "../types";

export const ehrDocumentation: CourseModule = {
  slug: "ehr-documentation",
  title: "EHR documentation",
  summary:
    "The record that defends you: charting's four non-negotiables, structured-plus-narrative notes, copy-paste dangers, amendments and abbreviations — then CPOE verification, the downtime drill, SBAR handovers, audit trails and alert-fatigue preview.",
  lessons: [
    {
      slug: "charting-in-the-ehr",
      title: "Charting in the EHR",
      minutes: 18,
      objectives: [
        "Apply the 4 charting non-negotiables.",
        "Combine structured + narrative notes.",
        "Refuse copy-paste cloning.",
        "Correct errors by addendum, not deletion.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Four non-negotiables",
          paragraphs: [
            "Every entry you type is a legal record, a handover letter and a billing claim in one — so four rules never bend. <strong>ACCURATE</strong>: exact values ('BP 118/74, P 88 reg, R 18, T 36.8, SpO2 97% RA'), quoted patient words ('states \"the pain moved to my shoulder\"'), observed facts not opinions ('skin cool, cap refill 3 sec' — not 'looks unwell'). 'Vitals stable' is NOT charting; it hides the numbers the next nurse needs. <strong>COMPLETE</strong>: assess + act + evaluate — 'pain 7/10 → paracetamol given 10:00 → 3/10 at 11:00' closes the loop; open loops ('pain noted') abandon patients and fail audits. <strong>TIMELY</strong>: real-time or as close as care allows; anything later gets a LATE-ENTRY label with the TRUE time ('late entry 14:20: omitted 10:00 insulin — given, L abdomen, BGL 11.2, recheck 12:00'). Back-charting from memory as if real-time is fabrication (M01's moral!). <strong>YOUR LOGIN</strong>: never chart under another login, never share passwords, LOG OUT every time — borrowed logins forge legal records, hide your learning, and (M03!) end placements and jobs. The EHR remembers what paper forgave: timestamps, authors, edits — all permanent, all discoverable (PRO-I M2 honesty lives here!).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-INF-0003.svg",
          alt: "Four boxes accurate complete timely your login with examples. Four non-negotiables explained with stable-vitals warning. Structured versus narrative guidance. Copy-paste dangers with cloned afebrile example and four rules. Amendments addendum example plus wrong-patient steps. Abbreviations banned list with drop-down advice. Charting by exception conditions. Student own-login rule. Mantra plus PRO-I link.",
          caption: "Accurate, complete, timely, mine — the record that defends you.",
        },
        {
          type: "text",
          heading: "Structure, cloning, corrections",
          paragraphs: [
            "<strong>Structured + narrative</strong>: flow-sheets, tick-boxes and vitals graphs give trends + searchable data ('show all BPs this admission'); narrative notes give STORY ('refused lunch, states nausea since new tablets'). Use BOTH: flow-sheet without story loses meaning; story without numbers loses trends. Chart the nursing process visibly: assessment → diagnosis → plan → intervention → evaluation (ADPIE) — examiners scan for the full loop. <strong>Copy-paste cloning</strong> (exam favourite!): carrying yesterday's note forward carries DEAD facts — 'afebrile, bowels opened' pasted onto a febrile, distended child misleads the doctor, the next nurse and the court. Cloning propagates errors, inflates bills, and auditors flag it. Rules: NEVER copy vitals/assessments forward; verify EVERY carried line as true TODAY; attest only what YOU did; if your facility allows templates, fill them fresh. <strong>Corrections</strong>: never delete, overwrite or back-edit — write an ADDENDUM with date-time-reason ('addendum 15:40: 10:00 entry stated R arm — correction: L arm'). Wrong-patient entry? Flag it, retract per policy, notify the supervisor, document the correction — and learn the 2-identifier habit (M04!). <strong>Abbreviations</strong>: only approved lists — 'U' for units reads as 0, trailing zeros ('5.0 mg') read as 50, 'QD' confuses daily: write 'units', '5 mg', 'daily'. EHR drop-downs exist to PREVENT this — pick the list, don't free-text the danger. Students: your OWN login, co-signed per policy, every time.",
          ],
        },
        {
          type: "table",
          heading: "Charting traps + escapes",
          columns: ["Trap", "Why it harms", "The escape"],
          rows: [
            ["'Vitals stable'", "Hides numbers; trends invisible", "Full values every time"],
            ["Copy-forward note", "Dead facts mislead team", "Fresh entry; verify carried lines"],
            ["Silent back-edit", "Destroys legal trust", "Dated addendum with reason"],
            ["Borrowed login", "Forged authorship", "Own login; log out always"],
            ["'U', '5.0', 'QD'", "Misread doses kill", "Units, 5 mg, daily; use drop-downs"],
            ["Open loop ('pain noted')", "No action, no evaluation", "Assess → act → recheck → close"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The court test",
          body: "Read every note asking: 'would this defend me in court, hand over safely at midnight, and bill honestly?' If yes to all three, sign it. 'If it wasn't documented, it wasn't done' still rules — and the EHR adds: 'if it was documented under YOUR login, YOU did it.' Chart like the auditor, the lawyer and the night nurse are all reading over your shoulder — because eventually, they are.",
        },
      ],
      keyPoints: [
        "Non-negotiables: accurate + complete + timely + your own login, every entry.",
        "Structured flows for trends + narrative for story; chart visible ADPIE loops.",
        "Never clone vitals/assessments; verify carried lines; attest only your work.",
        "Correct by dated addendum; wrong-patient = flag + retract + notify + document.",
        "Approved abbreviations only; use drop-downs; students own login + co-sign.",
        "Court test: defends me, hands over safely, bills honestly — all three.",
      ],
      quiz: {
        keywords: ["charting", "documentation", "accurate", "complete", "timely", "login", "copy-paste", "cloning", "addendum", "late entry", "abbreviations", "ADPIE", "structured", "narrative", "audit"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "orders-downtime-and-handover",
      title: "Orders, downtime and handover",
      minutes: 18,
      objectives: [
        "Verify CPOE orders before acting.",
        "Run the downtime drill.",
        "Hand over with SBAR + read-back.",
        "Respect audit trails.",
      ],
      blocks: [
        {
          type: "text",
          heading: "CPOE: typed orders, verified nurse",
          paragraphs: [
            "Computerised prescriber order entry (<strong>CPOE</strong>) ended the era of lethal handwriting: the prescriber types the order, the system checks it (allergy! dose range! duplicate therapy! interaction!), and the nurse verifies before administering. CPOE cuts transcription errors dramatically — but creates NEW failure modes examiners probe: <strong>wrong-patient clicks</strong> (two 'Ama Serwaa' tabs open — verify 2 identifiers EVERY time!), <strong>drop-down slips</strong> (metformin 500 clicked as 5000 — question weird doses!), <strong>alert fatigue</strong> (override #47 today without reading — M04 drills this!). YOUR shield never changes: the 5 rights (patient, drug, dose, route, time) + 2 identifiers (name + folder number/DOB, never bed number!) + read-back on verbal/telephone orders ('insulin 8 units subcut — confirm?'). A 10x insulin dose on screen is still a 10x dose — STOP, call the prescriber, document the query. The audit trail will show you read the alert at 10:02 and held the drug — trails DEFEND the careful and expose the click-happy. New orders during downtime (below!) go verbal + read-back + written, then transcribed and double-checked when systems return. And remember GER M4 + NUT M4/M5: high-risk drugs (insulin, heparin, chemo, potassium) often need INDEPENDENT double-checks — the EHR reminds, the second nurse confirms.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-INF-0004.svg",
          alt: "Five boxes CPOE verify audit-trail downtime SBAR with key points. CPOE flow with new failure modes and nurse shield. Downtime drill five steps with paper-is-system line. SBAR worked example Kofi plus read-back. Audit trails snoop warning plus defence value. Alert fatigue preview. Cross-course links. Mantra quoted.",
          caption: "Verify before giving, paper when down, SBAR at handover.",
        },
        {
          type: "text",
          heading: "Downtime, SBAR, trails",
          paragraphs: [
            "The <strong>downtime drill</strong> (pure exam — memorise the five steps!): <strong>1.</strong> grab downtime forms + a census/admissions printout (know WHERE they live BEFORE the outage!); <strong>2.</strong> document on paper — timed, signed, complete ('system down' never excuses undocumented care; paper IS the system then); <strong>3.</strong> new orders verbal + read-back + written on downtime sheets; <strong>4.</strong> critical results by PHONE with read-back, logged; <strong>5.</strong> when live: batch-enter everything, VERIFY each entry, reconcile MARs (paper vs electronic — every dose accounted!), report gaps honestly. Practise this in orientation, not in crisis. <strong>SBAR handover</strong> structures every critical conversation — S ('Kofi, 4, post-ORS, now lethargic'), B ('admitted diarrhoea, 3 stools today'), A ('sunken eyes, weak pulse — I think shock'), R ('come now + IV line + fluids'). EHR handover tools and printed summaries structure it; the NURSE still speaks it, with read-back on every critical handoff (PRO-I M5 + GER M6 handover habits apply!). <strong>Audit trails</strong> log every view, click, order and edit — forever. Snoop on a celebrity or neighbour's chart and the trail catches you (M03 consequences!). But trails also defend: questioned about a reaction, you show the alert read, the drug held, the doctor called, the addendum timed. Log out, own your clicks, and let the trail tell the truth.",
          ],
        },
        {
          type: "table",
          heading: "Downtime + handover checks",
          columns: ["Moment", "Do this", "Never this"],
          rows: [
            ["System fails", "Downtime forms + census printout now", "Wait and hope; undocumented gap"],
            ["Paper charting", "Timed, signed, complete entries", "'System was down' as excuse"],
            ["New orders", "Verbal + read-back + written", "Memory-only orders"],
            ["System returns", "Batch-enter + verify + reconcile MARs", "Bulk-click without checking"],
            ["Critical handover", "SBAR spoken + read-back", "Corridor mumble, no confirm"],
            ["Chart access", "Own patients, own login, log out", "Snooping; shared sessions"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Alert fatigue kills quietly",
          body: "Override #47 — 'allergy: penicillin' — clicked past without reading, because the last 46 were trivial. The 47th was real. Preview of M04: read EVERY alert, decide consciously, document WHY you overrode. If alerts are mostly noise, report it (super-user → analyst → fix the rules!) instead of training yourself to ignore them. Overrides need reasons, not reflexes.",
        },
      ],
      keyPoints: [
        "CPOE: system checks + nurse verifies — 5 rights, 2 identifiers, read-back, question weird.",
        "Downtime: forms + census → paper timed/signed → verbal+read-back → batch-enter + reconcile.",
        "SBAR every critical handoff, spoken + read-back; EHR structures, nurse speaks.",
        "Audit trails log everything: snoops caught, careful nurses defended.",
        "Alert fatigue preview: read, decide, document why — never reflex-override.",
        "Links: PRO-I handover/compass, GER meds, NUT precision — safety is one fabric.",
      ],
      quiz: {
        keywords: ["CPOE", "orders", "verify", "5 rights", "identifiers", "read-back", "downtime", "SBAR", "handover", "audit trail", "alert fatigue", "override", "MAR", "reconcile", "wrong-patient"],
        categories: ["fundamentals"],
      },
    },
  ],
};
