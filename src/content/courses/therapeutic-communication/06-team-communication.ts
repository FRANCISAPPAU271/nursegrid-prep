import type { CourseModule } from "../types";

export const teamCommunication: CourseModule = {
  slug: "team-communication",
  title: "Team communication",
  summary:
    "Talk that teams trust: SBAR handovers with read-back, bedside inclusion, CUS escalation and interprofessional respect — then assertive styles, DESC scripts, graded speaking-up, win-win conflict, bullying response and SBI feedback.",
  lessons: [
    {
      slug: "sbar-and-handover",
      title: "SBAR and handover",
      minutes: 18,
      objectives: [
        "Deliver 60-second SBAR.",
        "Close loops with read-back.",
        "Hand over at bedsides.",
        "Escalate with CUS.",
      ],
      blocks: [
        {
          type: "text",
          heading: "SBAR + read-back",
          paragraphs: [
            "<strong>SBAR</strong> (exam pure!): <strong>S — SITUATION:</strong> who + what's wrong NOW ('Kofi, 4, post-ORS, now lethargic — I need you now!') · <strong>B — BACKGROUND:</strong> admission + course ('admitted diarrhoea, 3 stools today, ORS since morning') · <strong>A — ASSESSMENT:</strong> YOUR findings + worry ('sunken eyes, weak pulse — I think shock') · <strong>R — RECOMMENDATION:</strong> what you NEED ('come now + IV line + fluids — shall I prepare?'). 60 seconds, SPOKEN + read-back. <strong>ISBAR</strong> adds I — IDENTIFY ('Ama, RN, ward B!'). Situation FIRST, never story-first — night doctors decide from sentence one. <strong>READ-BACK</strong> closes every loop: orders + critical values repeated ('insulin 8 units subcut — confirm?') + CONFIRMED ('confirmed!'). No read-back = open loop = error hunting ground (INF M02!). Phone SBAR adds: 'when will you come? what do I do meanwhile?' + NAME taken + all DOCUMENTED. Worked call: 'Doctor, Ama RN ward B — Maame Serwaa, 68, post-op day 1, BP dropping 90/60, bleeding on dressing — I think haemorrhage — come now? I'll keep NPO + vitals 5-minutely — your name please?' Situation, background, assessment, recommendation, meanwhile-plan, name — 30 seconds, life saved. Handover sheets carry SBAR in WRITING: same headings every shift, allergies/FALLS/NPO flagged, pending tasks boxed — memory-only handover is a malpractice invitation.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-COM-0011.svg",
          alt: "Four SBAR letter boxes situation background assessment recommend with Kofi example. SBAR spelled with 60-second ISBAR note. Read-back closed-loop rule. Bedside handover catches errors builds trust teaches. Structured tools sheets boards huddles. Escalation CUS with chain of command. Interprofessional respect rounds disagree-privately. Phone SBAR checklist. Cross-course links. Mantra quoted.",
          caption: "SBAR it, read it back, bedside it, escalate it.",
        },
        {
          type: "text",
          heading: "Bedside, escalation, team",
          paragraphs: [
            "<strong>BEDSIDE HANDOVER</strong>: at the bed + patient INCLUDED ('anything to add, Maame?') + charts + pumps + wounds checked TOGETHER. Catches errors (wrong fluids! missed doses! unmarked allergies!), builds trust ('they talk WITH me!'), teaches juniors live. Sensitive news aside FIRST — dignity before process ('Maame, a private word before handover…'). <strong>STRUCTURED TOOLS</strong>: written sheets (same headings!), EHR summaries (INF M02!), whiteboards (allergies! falls! NPO! discharges!), safety HUDDLES (5-min start-of-shift: 'who's sickest? what's pending? who's new?'). <strong>ESCALATION — CUS</strong> (graded assertiveness!): 'I'm CONCERNED (this dose looks 10x…)… I'm UNCOMFORTABLE (please recheck before I give)… this is a SAFETY issue (I'm stopping + calling senior NOW)!' Rising firmness + CHAIN of command (senior → doctor → matron → medical director). Silence kills: unvoiced worry is unwitnessed harm (PRO-I compass!). DOCUMENT every escalation: who, when, what, response. <strong>INTERPROFESSIONAL</strong>: first names + roles + respect ('Doctor, 60 seconds about…?') · pharmacist/physio/dietician consulted EARLY (not rescue-late!) · ward rounds: NURSE PRESENTS (you know the patient MOST — own it!) · disagree PRIVATELY, unite PUBLICLY ('doctor, a quick word…' — never patient-side battles!). Hierarchy never outranks safety — the cleaner who spots a fallen patient outranks every title in that moment.",
          ],
        },
        {
          type: "table",
          heading: "Handover checks",
          columns: ["Moment", "Do this", "Never this"],
          rows: [
            ["Calling doctor", "ISBAR + situation first + meanwhile-plan", "Story-first ramble; no name taken"],
            ["Taking orders", "Read-back + confirm + write now", "Memory orders; 'yes doctor' mumble"],
            ["Shift change", "Bedside + patient + charts + pumps", "Corridor speed-mumble, no check"],
            ["Worried, dismissed", "CUS up the chain + document", "Silent worry; 'doctor knows best'"],
            ["New admission rush", "Huddle: sickest? pending? new?", "Everyone assumes someone knows"],
            ["Sensitive patient", "Private word before bedside talk", "Broadcast news at open bed"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Silence kills",
          body: "Every inquiry into harm finds the same ghost: someone worried, nobody spoke. The junior who saw the wrong drug, the student who counted wrong, the nurse who felt 'something's off' — silent. CUS exists so juniors can stop seniors: concerned, uncomfortable, SAFETY issue. Use it. Document it. The patient you save may never know your name — speak anyway.",
        },
      ],
      keyPoints: [
        "SBAR: situation first + background + YOUR assessment + recommendation — 60 seconds + read-back.",
        "ISBAR adds identify; phone adds when-coming + meanwhile + name + document.",
        "Read-back every order + critical value — open loops breed errors.",
        "Bedside handover: patient included + checked together; sensitive news aside first.",
        "CUS escalation: concerned → uncomfortable → SAFETY + chain + document.",
        "Nurse presents rounds; disagree privately; hierarchy never outranks safety.",
      ],
      quiz: {
        keywords: ["SBAR", "ISBAR", "read-back", "bedside", "handover", "CUS", "escalation", "chain of command", "huddle", "whiteboard", "rounds", "interprofessional", "silence", "phone", "document"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "assertiveness-and-conflict",
      title: "Assertiveness and conflict",
      minutes: 18,
      objectives: [
        "Choose assertive always.",
        "Script courage with DESC.",
        "Resolve conflict win-win.",
        "Answer bullying + feedback.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Styles + DESC",
          paragraphs: [
            "Three styles, one safe: <strong>PASSIVE</strong> — silent, resentful, unsafe ('fine, whatever…' while patients suffer!) · <strong>ASSERTIVE ★</strong> — clear + kind + firm ('I see it differently — here's the risk — let's…') — patients SAFEST with assertive nurses! · <strong>AGGRESSIVE</strong> — loud, feared ('DO IT NOW!' — errors HIDE from shouters, juniors freeze!). Exam: 'best response?' = assertive option, ALWAYS. 'I' language + facts + request + respect: 'I'M concerned about this dose (fact: 10x usual) — please recheck with me.' <strong>DESC scripts courage</strong>: <strong>D — DESCRIBE</strong> facts ('the 10:00 drugs weren't given…') · <strong>E — EXPRESS</strong> impact ('…I'm worried for the patient and for us…') · <strong>S — SPECIFY</strong> need ('…please prioritise med rounds — can I help reorganise…?') · <strong>C — CONSEQUENCES</strong> ('…so patients stay safe and we pass audit'). Private, calm, witnessed if serious. DESC handles: lazy handovers, skipped checks, rude tones, unsafe shortcuts — facts without venom. <strong>SPEAKING UP = CUS</strong> (last lesson!): concern → discomfort → SAFETY-issue stop. Graded assertiveness saves lives because it gives juniors WORDS against hierarchy: 'I'm uncomfortable giving this — please come and see' stops more harm than silent obedience ever will. Practise DESC aloud — scripts in calm become reflexes in crisis.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-COM-0012.svg",
          alt: "Three style boxes passive assertive-star aggressive. Three styles with exam rule and I-language. DESC spelled with med-rounds example. Speaking up CUS graded. Conflict six steps with never-list. Bullying name record report zero tolerance with cohort line. Feedback SBI with praise-correct rule. Mantra quoted.",
          caption: "Clear + kind + firm — patients safest with assertive nurses.",
        },
        {
          type: "text",
          heading: "Conflict, bullying, feedback",
          paragraphs: [
            "<strong>CONFLICT steps</strong> (win-win!): private room · EACH story uninterrupted (M02 listening!) · feelings named ('you feel undermined; she feels overloaded') · PATIENT-first frame ('what serves Maame best?') · options brainstormed · AGREED fix + review date · documented. NEVER corridor shouting, never patient-side battles, never grudges nursed into sabotage. Most ward conflicts are SYSTEM conflicts (short staff, unclear roles, dead equipment) wearing personal faces — fix systems AND feelings. <strong>BULLYING / lateral violence</strong>: name it plainly ('shouting at me is unacceptable — speak respectfully') · RECORD dates/quotes/witnesses · REPORT (senior → matron → union → N&MC if needed) · SUPPORT victims publicly · ZERO tolerance. 'Nurses eat their young' ENDS with your cohort — precept juniors kindly (PRO-I M6 + PRO-II M6!). Exam: 'senior shouts at student' — intervene safely + support + report + document. <strong>FEEDBACK — SBI</strong>: <strong>S</strong>ituation ('on Tuesday's round…') · <strong>B</strong>ehaviour ('…you presented SBAR clearly…') · <strong>I</strong>mpact ('…the doctor decided fast — patient safer!'). Praise PUBLICLY, correct PRIVATELY, always SBI — vagueness ('good job' / 'be better') teaches NOTHING. Give juniors daily SBI ('your cannulation: calm explanation — she relaxed — first-attempt success!') and watch confidence grow. Teams that SBAR, CUS, DESC and SBI don't just communicate — they protect.",
          ],
        },
        {
          type: "table",
          heading: "Team talk moves",
          columns: ["Need", "Tool", "Sounds like"],
          rows: [
            ["Urgent handover", "SBAR + read-back", "'Kofi, 4, shock? — diarrhoea day 2 — weak pulse — come + IV!'"],
            ["Stopped by hierarchy", "CUS", "'Concerned… uncomfortable… SAFETY issue — stopping now!'"],
            ["Unsafe habit", "DESC", "'Drugs missed — I'm worried — prioritise? — patients safe.'"],
            ["Colleague clash", "Win-win 6 steps", "'Private talk? Each story? What serves Maame?'"],
            ["Bullying", "Name + record + report", "'Unacceptable — dates logged — reporting.'"],
            ["Growing juniors", "SBI daily", "'Tuesday: SBAR clear — doctor fast — safer!'"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "SBI someone today",
          body: "Catch ONE colleague or junior doing something right today — and SBI them on the spot: situation, behaviour, impact. Specific praise rewires wards: people repeat what's noticed. Assertive teams aren't born; they're feedback-built, one 'Tuesday's round, SBAR clear, patient safer' at a time.",
        },
      ],
      keyPoints: [
        "Assertive ★: clear + kind + firm + 'I' language; passive unsafe, aggressive hides errors.",
        "DESC: describe + express + specify + consequences — private, calm, facts no venom.",
        "CUS speaking-up: concerned → uncomfortable → SAFETY stop + chain + document.",
        "Conflict: private + both stories + patient-first + agreed fix + review + document.",
        "Bullying: name + record + report + support; 'eat their young' ends here.",
        "SBI feedback: situation + behaviour + impact; praise public, correct private.",
      ],
      quiz: {
        keywords: ["assertive", "passive", "aggressive", "DESC", "CUS", "conflict", "win-win", "bullying", "lateral violence", "SBI", "feedback", "speaking up", "hierarchy", "precept", "document"],
        categories: ["fundamentals"],
      },
    },
  ],
};
