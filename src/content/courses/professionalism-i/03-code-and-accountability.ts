import type { CourseModule } from "../types";

export const codeAndAccountability: CourseModule = {
  slug: "code-and-accountability",
  title: "Code of conduct, accountability and negligence",
  summary:
    "The rules that bind: the NMC code's six duties, scope of practice as register plus competence plus context with standing orders and the emergency doctrine, and professional boundaries from gifts to social media — then the four faces of accountability, delegation by five rights with what never delegates, negligence by four elements with Bolam and res ipsa, the liability ladder from error to crime, and documentation as the defence.",
  lessons: [
    {
      slug: "the-code-and-scope-of-practice",
      title: "The code and scope of practice",
      minutes: 20,
      objectives: [
        "State the NMC code's six duties with bedside examples.",
        "Define scope as register + competence + context with standing orders.",
        "Apply the emergency doctrine for beyond-scope acts.",
        "Hold boundaries: gifts, relationships, dual roles, social media.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Six duties, every shift",
          paragraphs: [
            "The NMC <strong>code of conduct and ethics</strong> binds every registrant (and, by adoption, every student): <strong>prioritize people</strong> — treat each as an individual, uphold dignity, listen, advocate, act without delay on risk; <strong>practise effectively</strong> — evidence-based, in-competence care, clear communication, proper referral, lifelong learning; <strong>preserve safety</strong> — recognize and act on risk, be candid about errors, never practise impaired, raise staffing concerns through channels; <strong>communicate</strong> — clear, kind, timely, recorded, complete handovers; <strong>be open and candid</strong> — duty of candour: admit mistakes, disclose to patients, apologize, learn, file incident reports; <strong>uphold trust and lead</strong> — integrity inside and outside uniform, role-model, mentor juniors, report concerns about colleagues. Breach the code and the tribunal beckons (Module 01's exit door) — the code is quoted in charges, so quote it in practice: 'per NMC code, I escalated…' is both ethics and armour.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0005.svg",
          alt: "Code domains: prioritize people, practise effectively, preserve safety, communicate, be open (candour), uphold trust and lead. Scope triangle: register (cadre plus PIN), competence (trained plus current), context (orders plus setting). Boundaries: token gifts shared OK, money never; sexual relationships with patients mean erasure; no patients or cases on social media; no money, preaching or politics at bedside. Emergency doctrine: beyond-scope acts defensible only in true emergency with best ability, immediate referral and documented necessity; standing orders extend scope lawfully.",
          caption: "Six duties bind, three sides scope — and emergencies forgive only the documented necessary.",
        },
        {
          type: "text",
          heading: "Scope: triangle, orders, emergencies",
          paragraphs: [
            "Scope of practice = <strong>register</strong> (your cadre's legal remit + current PIN) + <strong>competence</strong> (trained, assessed, current — skills decay: the midwife ten years from delivery suite re-trains before catching) + <strong>context</strong> (setting, resources, <strong>standing orders/protocols</strong>). Standing orders lawfully EXTEND scope: CHPS prescribing schedules, immunization protocols, emergency-contraception provision, malaria/RDT algorithms — follow them exactly, document under them ('per standing order…'), escalate the instant the case leaves their lines. <strong>Expanded roles</strong> (nurse anaesthesia, prescribing cadres, sonography) need accredited courses + registration endorsement — enthusiasm never substitutes. The <strong>emergency doctrine</strong>: in TRUE emergency (no competent help available, immediate action needed — roadside, ward arrest, lone CHPS night), acts beyond routine scope are defensible when within your best ability, with <strong>referral the instant help arrives</strong> and <strong>necessity documented</strong> ('no doctor available, bleeding controlled by…'). Routine beyond-scope work — the ward aide suturing because 'the doctor is busy' — is indefensible and erasure-level.",
          ],
        },
        {
          type: "table",
          heading: "Boundaries: scenarios and responses",
          columns: ["Scenario", "Professional response", "Why"],
          rows: [
            ["Grateful family offers cash 'for your kindness'", "Decline kindly ('your thanks is enough'), document offer + decline, inform in-charge if pressure", "Money buys favouritism next time; code forbids financial gain from patients"],
            ["Patient sends friend request + nightly messages", "Decline, explain policy, keep all contact on clinical channels, inform in-charge", "Dual relationships corrupt judgment; tribunals erase for less"],
            ["Attractive patient flirts; colleague jokes 'lucky you'", "Maintain therapeutic stance, reassign if objectivity threatened, never reciprocate, document if persistent", "Sexual relationships with current patients = erasure, consent irrelevant (power imbalance)"],
            ["Relative asks you to treat family at home privately", "Decline clinical care (assess/refer properly); general advice only within competence, documented", "Objectivity + records + indemnity all fail in informal family care"],
            ["You want to post the 'miracle save' story online", "Don't — no patients, cases, photos, ward rants; de-identified teaching only per policy + consent", "Jigsaw identification is real; NMC and employers dismiss for posts"],
            ["Pastor/imam patient asks you to pray/campaign", "Respect faith, facilitate chaplain/family, never impose or refuse care over belief", "Spiritual care = facilitate theirs, never recruit to yours"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Tribunal patterns: the posts and affairs that end careers",
          body: "Erasure files repeat: ward photos with patients (even 'consented' selfies — consent under power imbalance fails), clinical rants naming wards/dates ('guess what walked into OPD'), dating current patients (consent no defence), falsified CPD/hours, practising while suspended, theft of drugs/money, abusive messages to colleagues. Think-before-post: would this identify anyone? Would the NMC panel smile? Would my mother approve? Private accounts, nicknames and 'friends-only' fool nobody — screenshots travel. The uniform's reputation is collective: one viral disgrace stains every PIN.",
        },
      ],
      keyPoints: [
        "Code: prioritize people, practise effectively, preserve safety, communicate, be candid, uphold trust + lead — quoted in charges.",
        "Scope = register + competence + context; standing orders extend lawfully (follow exactly, document under, escalate outside).",
        "Expanded roles need accredited endorsement; emergency doctrine defends only true-emergency, best-ability, referred, documented acts.",
        "Gifts: token shared OK, money never; relationships with patients = erasure; family treated formally or not at all.",
        "Social media: no patients/cases/photos/rants — jigsaw identification + screenshots end careers.",
        "Spiritual care facilitates theirs, never recruits; objections referred (Module 02), never imposed.",
      ],
      quiz: {
        keywords: ["code of conduct", "candour", "scope of practice", "competence", "standing orders", "CHPS", "emergency doctrine", "boundaries", "gifts", "dual relationships", "social media", "erasure", "trust", "dignity", "referral"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "accountability-delegation-and-negligence",
      title: "Accountability, delegation and negligence",
      minutes: 20,
      objectives: [
        "Explain accountability's four faces with responsibility vs authority.",
        "Delegate by five rights and state what never delegates.",
        "Prove negligence by four elements with Bolam and res ipsa.",
        "Climb the liability ladder and document the defence.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Accountability: four faces, no transfer",
          paragraphs: [
            "Accountability answers four ways: <strong>personal</strong> (to conscience and values), <strong>professional</strong> (to NMC code + tribunal), <strong>employer</strong> (to contracts, policies, appraisal, dismissal), <strong>legal</strong> (to courts — civil compensation, criminal prosecution). Distinguish: <strong>responsibility</strong> (the task assigned), <strong>authority</strong> (the power granted), <strong>accountability</strong> (the answer owed — <strong>never delegated away</strong>). The delegator stays accountable for the DECISION to delegate (right task/person/supervision); the delegatee becomes accountable for the ACT performed. Students are accountable from indexing (Module 01) — supervised, but answering for every act within taught competence. Defences that fail: 'I was told to' (following unlawful/unsafe orders compounds guilt — refuse + escalate + document), 'short-staffed' (escalate in writing, prioritize transparently, never silently absorb), 'new on the ward' (orientation requested, limits declared), 'the doctor prescribed it' (nurses independently check prescriptions — the administering nurse owns the dose).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0006.svg",
          alt: "Delegation five rights: right task (delegable — vitals, hygiene, feeds, never judgment), right context (stable, ordered), right person (trained, competent, willing), right direction (what, when, limits, report-back), right supervision (direct/indirect, check, evaluate). Negligence four elements: duty (nurse-patient link), breach (below Bolam reasonable nurse), causation (but-for plus contribution), damage (real harm). Footer: never-delegate list, refusal rights, dual liability (delegator decision plus delegatee act, employer vicarious plus nurse personal), res ipsa examples, defences, documentation defence, indemnity, crime versus negligence.",
          caption: "Tasks move down, answers stay put — and four elements make or break every claim.",
        },
        {
          type: "text",
          heading: "Delegation: five rights, hard limits",
          paragraphs: [
            "Delegate by <strong>five rights</strong>: <strong>task</strong> (delegable — vitals, hygiene, feeds, mobilization, observations with triggers; complexity + unpredictability argue against), <strong>circumstances</strong> (stable patient, clear orders, right setting — never delegate into instability), <strong>person</strong> (trained, assessed competent, willing — check, don't assume; students only within taught skills), <strong>direction</strong> (what, when, how, limits, report-back triggers — 'call me if…' specified), <strong>supervision</strong> (direct eyes-on vs indirect available — matched to risk, with checking + feedback + evaluation). <strong>NEVER delegate</strong>: assessment, nursing judgment/diagnosis, discharge decisions, prescribing responsibility, complex evaluation, breaking bad news alone, anything beyond the delegatee's competence. The delegatee may — must — <strong>refuse</strong> beyond competence; refusal is professionalism, retaliation is bullying (report it). <strong>Supervision</strong> levels documented; handback accepted gracefully. Employer <strong>vicarious liability</strong> covers acts in employment — but the nurse's <strong>personal liability</strong> runs alongside: claimants sue both, tribunals charge the nurse regardless.",
          ],
        },
        {
          type: "table",
          heading: "Liability ladder: error to crime",
          columns: ["Rung", "Example", "Forum + consequence"],
          rows: [
            ["Near-miss / no-harm error", "Wrong drug caught at bedside check; fall without injury", "Incident form + disclosure + learning; no liability, reflection logged"],
            ["Harmful error, system-shared", "Overdose via look-alike packaging + unchecked prescription", "Employer inquiry + NMC possible; compensation; system fixes (storage, double-checks)"],
            ["Negligence (4 elements met)", "Unchecked allergy → anaphylaxis death; unmonitored sedated child falls", "Civil court: damages; NMC tribunal: conditions/suspension/erasure"],
            ["Misconduct (code breach)", "Abuse, fraud, falsified records, practising suspended, affair with patient", "NMC tribunal: suspension/erasure; employer: dismissal; civil where harm"],
            ["Crime (intent/recklessness)", "Assault, theft, drug diversion, record falsification, manslaughter (gross negligence)", "Police + criminal court: fines/imprisonment; NMC erasure follows conviction"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Documentation: the defence you write daily",
          body: "Contemporaneous (at the time, or marked late-entry with reason), factual (seen/heard/measured — not 'rude' or 'difficult'), timed + dated + signed (name + PIN + cadre), complete (assessments, decisions, consent, advice given, refusals, escalations, handovers), unaltered (single line through errors, initialled, never Tipp-Ex/overwrite/delete), legible, confidential. 'Not documented, not done' rules courts AND tribunals — the brilliant care nobody wrote down loses to the mediocre care fully recorded. Incident forms + open disclosure + personal reflection: file all three, hide nothing, learn visibly. Your notes are exhibit A — write every entry as if the panel reads it aloud.",
        },
      ],
      keyPoints: [
        "Accountability: personal + professional + employer + legal; responsibility assigned, authority granted, accountability never transferred.",
        "'Told to / short-staffed / new / doctor prescribed' excuse nothing — refuse unsafe, escalate in writing, document.",
        "Delegate: right task/context/person/direction/supervision; never assessment, judgment, discharge, prescribing responsibility.",
        "Refusal beyond competence is professionalism; delegator owns decision, delegatee owns act; employer vicarious + nurse personal.",
        "Negligence: duty + breach (Bolam) + causation + damage; res ipsa presumes (swab, wrong limb); document the defence.",
        "Ladder: near-miss → error → negligence → misconduct → crime; records contemporaneous, factual, signed, unaltered.",
      ],
      quiz: {
        keywords: ["accountability", "responsibility", "authority", "delegation", "supervision", "vicarious liability", "negligence", "duty", "Bolam", "causation", "res ipsa", "misconduct", "documentation", "incident", "disclosure"],
        categories: ["fundamentals"],
      },
    },
  ],
};
