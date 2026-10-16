import type { CourseModule } from "../types";

export const integratingPractice: CourseModule = {
  slug: "integrating-tcam-into-practice",
  title: "Integrating TCAM into nursing practice",
  summary:
    "Safe traffic, not roadblocks: two-way referrals between hospital and healer, bridge rules that earn trust, Ghana's licensing and product-safety frame, and the ward checklist that weaves TCAM into admission, drug rounds, visiting, discharge and incident reporting.",
  lessons: [
    {
      slug: "working-with-healers-and-referrals",
      title: "Working with healers and referrals",
      minutes: 18,
      objectives: [
        "Refer both directions.",
        "Name bridge rules.",
        "Welcome healers wisely.",
        "Chase feedback loops.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Two-way bridge",
          paragraphs: [
            "Patients ALREADY combine hospital + healer — secretly when we sneer, safely when we BRIDGE. <strong>HOSPITAL → HEALER</strong>: refer OUT for chronic pain needing massage, grief/spiritual distress beyond ward chaplains, stable patients requesting blessed rites — HOW: name a TRUSTED healer (know them! visited! licensed where apt!), written note ('Madam Ama, BP stable on amlodipine — massage welcome, drugs CONTINUE, review Friday'), drugs continue, review date FIXED — never a vague 'go and see someone' (abandonment!). <strong>HEALER → HOSPITAL</strong>: teach healers RED FLAGS — bleeding, breathing trouble, fits, labour delay, high fever, 'no better in 3 DAYS', ANY sick baby — HOW: THANK the healer openly ('you acted fast — that saved her!'), treat FAST, send FEEDBACK ('she is stable — your quick referral worked'), invite DIALOGUE (durbar talks! TBA meetings! mosque health nights!). Feedback is the bridge's mortar: healers who hear outcomes refer EARLIER next time; healers met with contempt delay until corpses. Joint wins to copy: TBA + midwife co-deliveries (TBAs escort, midwives deliver!) · pastors + ARV adherence ('tablets are God's provision!') · mallams + ITN/burial-teams during outbreaks. Exam favourite: 'herbalist brings bleeding postpartum mother?' — thank + resuscitate + feedback + invite — NEVER scold the herbalist first!",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-TCM-0011.svg",
          alt: "Two boxes referral directions plus bridge rules. Hospital-to-healer cases with how-to steps. Healer-to-hospital red flags with thank-treat-feedback steps. Rules three with joint wins. Mantra quoted.",
          caption: "Refer out with notes, receive with thanks, always feed back.",
        },
        {
          type: "text",
          heading: "Bridge rules",
          paragraphs: [
            "<strong>RULE 1 — know them BY NAME</strong>: map your catchment's healers, TBAs, pastors, mallams — VISIT, greet, exchange numbers, invite to facility durbars. A nurse who knows the herbalist negotiates doses; a stranger only forbids. <strong>RULE 2 — never MOCK</strong>: mock a healer to a patient and you lose the PATIENT, not the healer ('the nurse insulted my pastor — I'm not going back!'). Disagree with respect: 'I worry about the razor cuts because of infection — can we anoint instead?' <strong>RULE 3 — welcome WISELY</strong>: facility visiting rules for clergy/healers — prayer YES, whispered bedside YES, holy water on skin YES; live coals NO (fire!), feared 'deliverance' beatings NO, secret medicines NO, detention 'until healed' NO. Post the rules, explain kindly, enforce evenly. <strong>RULE 4 — chase FEEDBACK</strong>: every referral out gets a return date; every referral in gets thanks + outcome news. Log both (INF!): 'referred to TBA Grace Mensah for massage — returned Friday, pain 8→3' — logs prove the bridge WORKS and defend it at reviews. <strong>When bridges FAIL</strong>: harmful healer (beatings? chaining? starvation? fake injections?) — patient safety FIRST: treat, document, report via facility channels (Council/FDA/police — next lesson) — and NEVER send patients back into harm. Bridge-building is strategy, not surrender: respect flows both ways, but SAFETY is non-negotiable.",
          ],
        },
        {
          type: "table",
          heading: "Bridge scenarios",
          columns: ["Situation", "Bridge move", "Never"],
          rows: [
            ["Stable elder wants blessed rites", "Written note + drugs continue + review date", "Vague 'go see someone'"],
            ["Herbalist brings fitting child", "Thank + treat fast + feedback + invite", "Scold herbalist first"],
            ["Pastor prays loudly at night", "Welcome + quiet-hours deal + side room", "Ban all clergy"],
            ["TBA keeps labouring mother 2 days", "Escort deal + red-flag teaching + thanks", "Report before teaching"],
            ["Healer chains psychotic man", "Treat + document + report via channels", "Send patient back"],
            ["Mallam requests burial-team role", "Train + equip + public thanks", "Exclude from planning"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Map three healers",
          body: "This week: list THREE trusted healers/TBAs/clergy near your facility — names, phones, strengths. Greet one in person. Propose one bridge: escort deal, feedback note, or durbar invite. Nurses who map healers stop fighting ghosts and start coordinating care — and maternal/child outcomes notice within months.",
        },
      ],
      keyPoints: [
        "Patients combine both worlds — bridge secretly-used into safely-managed.",
        "Hospital→healer: named + trusted + written note + drugs continue + review fixed.",
        "Healer→hospital: red flags taught + thank + treat fast + FEEDBACK + dialogue.",
        "Rules: know by name + never mock + welcome wisely + chase feedback logs.",
        "Visiting: prayer/water YES — coals/beatings/secrets/detention NO, posted + even.",
        "Harmful healer: safety first + treat + document + report — never send back.",
      ],
      quiz: {
        questionIds: ["NG-MOD-TCAM-018"],
        keywords: ["referral", "healer", "bridge", "feedback", "TBA", "pastor", "red", "flags", "mock", "visiting", "thanks", "dialogue", "escort", "outcomes", "trust"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "policy-law-and-ward-integration",
      title: "Policy, law and ward integration",
      minutes: 18,
      objectives: [
        "Cite Ghana's TCAM frame.",
        "Check licences + FDA numbers.",
        "Run the ward checklist.",
        "Report adverse events.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Ghana's frame",
          paragraphs: [
            "Ghana LEADS Africa in TCAM regulation — know the frame, use it daily. <strong>TRADITIONAL MEDICINE PRACTICE ACT 2000 (ACT 595)</strong>: licences practitioners via the Traditional Medicine Practice Council — herbalists, bonesetters, birth attendants, spiritualists. Licensed = trained + registered + bound by ethics; UNLICENSED = practising illegally. Nurses: know how to VERIFY ('Council licence? show me — I'll note the number'), and refer patients TOWARD licensed healers. <strong>FDA GHANA</strong>: registers herbal PRODUCTS — every legit bottle carries an FDA number + expiry + dosage. Check them! ('No FDA number? No expiry? — don't buy, report!'). Fake/expired herbals flood markets and kill quietly — nurses are the last checkpoint before swallowing. <strong>WHO TRADITIONAL MEDICINE STRATEGY</strong>: integrate safe, effective TCAM into health systems — Ghana's herbal units in hospitals + KNUST training + Council licensing put policy into FLESH. <strong>KNOW THE LINE</strong>: licensed healer ≠ anything goes — HARM is harm whoever causes it (beatings, chaining, starvation, fake injections — REPORT!); unlicensed + harmful practice → Council, FDA, police VIA FACILITY CHANNELS (matron → medical superintendent → district — never freelance raids!); NURSE SCOPE (PRO-I!): support + counsel + refer — NEVER prescribe herbs, perform rites, or bless products. Exam: 'patient asks which herbalist is genuine?' — Council licence check + FDA numbers + refer to hospital herbal unit where available.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-TCM-0012.svg",
          alt: "Two boxes Ghana frame plus know-the-line with checklist panel. Act 595 licensing plus FDA numbers plus WHO strategy. Harm reporting plus channels plus nurse scope. Ward checklist six points. Mantra quoted.",
          caption: "Act 595, FDA numbers, facility channels — policy at the bedside.",
        },
        {
          type: "text",
          heading: "Ward checklist",
          paragraphs: [
            "Policy without bedside habits is WALLPAPER — run the checklist EVERY shift. <strong>ADMIT</strong>: ask TM use (M05 Kleinman!) — herbs? healers? camps? creams? — record verbatim. <strong>PLAN</strong>: remedies IN the care plan ('bitter leaf wash bd — check skin; pastor visits evenings — welcome') — invisible remedies interact invisibly! <strong>DRUG ROUND</strong>: interaction check (M03!) — bitters + warfarin? garlic + antihypertensives? moringa + diabetes drugs? — hold + consult + document. <strong>VISITORS</strong>: clergy/healer rules posted + enforced kindly — prayer yes, coals no. <strong>DISCHARGE</strong>: herb-drug counsel ('finish tablets AND herbs — which first? show me!') + review date + danger signs + 'bring ALL bottles Friday'. <strong>INCIDENT</strong>: adverse events REPORTED — FDA adverse-reaction forms + facility incident book + handover ('allergic rash after new bitters — stopped, reported, counselled'). Audit the checklist monthly: % admissions asked? % plans listing TM? % discharges counselled? — numbers defend the program and delight supervisors. Integration = policy on paper AND questions at the bedside — nurses deliver BOTH.",
          ],
        },
        {
          type: "table",
          heading: "Shift integration",
          columns: ["Moment", "TCAM task", "Proof"],
          rows: [
            ["Admission", "Ask + record all TM use", "Quoted in notes"],
            ["Care plan", "Remedies written into plan", "Plan lists them"],
            ["Drug round", "Interaction check", "Held/consulted/documented"],
            ["Visiting hours", "Clergy/healer rules kindly kept", "Posted + logged"],
            ["Discharge", "Herb-drug counsel + review", "Teach-back + date"],
            ["Adverse event", "FDA form + book + handover", "Filed + followed"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Audit one week",
          body: "This week: audit YOUR ward for seven days — admissions asked? plans listing? discharges counselled? Score it, share it at handover, fix the weakest link. One audited week converts TCAM from 'sister's interest' into ward routine — and routine is what survives your transfer.",
        },
      ],
      keyPoints: [
        "Act 595: Council licences healers — verify + refer toward licensed.",
        "FDA Ghana: product numbers + expiry + dosage — last checkpoint before swallowing.",
        "WHO strategy: integrate safe TCAM — Ghana's herbal units + KNUST + Council.",
        "Line: harm reported via channels; nurse supports + refers, never prescribes rites.",
        "Checklist: admit-ask + plan-list + round-check + visitors-rule + discharge-counsel.",
        "Incidents: FDA forms + book + handover; audit monthly — routine outlives you.",
      ],
      quiz: {
        questionIds: ["NG-MOD-TCAM-019"],
        keywords: ["Act", "595", "Council", "licence", "FDA", "adverse", "checklist", "admission", "discharge", "audit", "report", "channels", "scope", "policy", "integration"],
        categories: ["fundamentals"],
      },
    },
  ],
};
