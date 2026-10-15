import type { CourseModule } from "../types";

export const foundationsOfTcam: CourseModule = {
  slug: "foundations-of-tcam",
  title: "Foundations of TCAM",
  summary:
    "Two medicines, one patient: the four TCAM terms with Ghana examples, WHO strategy and Ghana's lead, why every nurse must know (80%, silence, interactions, delays) — then Act 575, TMPC, FDA product registration, practitioner map, integration points and quack flags.",
  lessons: [
    {
      slug: "what-tcam-is",
      title: "What TCAM is",
      minutes: 18,
      objectives: [
        "Define the 4 TCAM terms.",
        "Quote WHO strategy + Ghana lead.",
        "Argue why nurses must know.",
        "Map pluralism without mocking.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Four terms, one patient",
          paragraphs: [
            "<strong>FOUR TERMS</strong> (exam — define + differentiate with Ghana examples!): <strong>TRADITIONAL</strong> medicine — indigenous systems: Ghanaian herbalists, TBAs, bone-setters, spiritualists, asram remedies, neem, moringa, prekese. <strong>COMPLEMENTARY</strong> — used ALONGSIDE orthodox: prayer + drip, massage + analgesia, ginger tea + ORS. <strong>ALTERNATIVE</strong> — used INSTEAD of orthodox: concoction INSTEAD of ARVs, prayer camp INSTEAD of stroke unit, herbs INSTEAD of insulin — where DANGER lives (delays! interactions! abandonment!). <strong>INTEGRATIVE ★</strong> — BEST of both, evidence-led: hospital + registered herbalist + pastor COORDINATED, safety-checked, mutually referred. The nurse's job: move patients from alternative → INTEGRATIVE, never mock the journey ('us OR them' loses patients to 'them'!). WHO's Traditional Medicine Strategy: SAFE + EFFECTIVE + QUALITY + REGULATED + INTEGRATED traditional medicine — research it, regulate it, respect knowledge-holders, protect medicinal species. Ghana LEADS Africa: Act 575 (2000) + TMPC + herbal pharmacopoeia + KNUST herbal-medicine degrees + hospital herbal units — quote it with PRIDE (examiners love Ghana-first answers!).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-TCM-0001.svg",
          alt: "Four term boxes traditional complementary alternative integrative-star with examples. Four terms with nurse's move. WHO strategy with Ghana lead list. Why-nurses-know five reasons. Pluralism map-coordinate rule. Orthodox blind spots five. Exam moves two. Cross-course links. Mantra quoted.",
          caption: "Traditional honoured, complementary welcomed, alternative negotiated, care integrated.",
        },
        {
          type: "text",
          heading: "Why nurses must know",
          paragraphs: [
            "FIVE reasons (exam!): <strong>80%</strong> of Ghanaians use traditional medicine — your 'orthodox-only' ward is a fantasy. <strong>SILENCE</strong> — most NEVER tell hospitals (fear of scolding! 'nurse will shout!') — so ASK routinely ('what else are you taking…? herbs? prayers?'). <strong>INTERACTIONS</strong> — herbs + drugs = bleeding (garlic + warfarin!), cancelled ARVs (St John's wort!), liver injury, hypoglycaemia (bitter leaf + insulin!) — M03 drills all. <strong>DELAYS</strong> — stroke 3 days at prayer camp, obstructed labour with TBA 2 days, cancer 'shrunk' by herbs till stage 4 — negotiation SAVES (M05!). <strong>ADHERENCE</strong> — beliefs DRIVE pill-taking; Kleinman-mapped, negotiated patients adhere; mocked ones vanish (BEH/COM!). <strong>PLURALISM</strong> (BEH M01!): hospital + herbalist + pastor TOGETHER is normal, ancient, RATIONAL — each covers gaps others leave. Map it, safety-check it, COORDINATE it. And humility: orthodox BLIND SPOTS TCAM fills — MEANING ('why ME?' — pastors answer!), CHRONICITY (diabetes forever — herbs promise hope!), ACCESS (herbalist next door, hospital 40km + 40 cedis!), COST (herbs cheaper!), HUMANITY (time + touch + prayer vs 3-minute OPD!). Fix OUR gaps too — access + kindness + meaning KEEP patients better than scolding ever will.",
          ],
        },
        {
          type: "table",
          heading: "Term checks",
          columns: ["Patient does", "Term", "Nurse does"],
          rows: [
            ["Neem + ORS for diarrhoea", "COMPLEMENTARY ★", "Welcome + check safety + document"],
            ["Herbs INSTEAD of ARVs", "ALTERNATIVE ⚠", "Negotiate back: ARVs + safe herbs"],
            ["Prayer + chemo together", "INTEGRATIVE ★", "Coordinate + bless + support"],
            ["TBA birth, hospital backup", "INTEGRATIVE ★", "Partner + referral slips + respect"],
            ["'Drips kill!' camp 3 days", "ALTERNATIVE ⚠ + quack?", "Urgent negotiate + warn + report?"],
            ["Hides herbs, fears shouting", "PLURALISM silent", "Ask kindly + safety-check + thank honesty"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The routine ask",
          body: "Add to EVERY history: 'what else are you taking or doing for this — herbs, mixtures, prayers, visits?' Asked warmly, routinely, without eyebrow-raising. Log what you hear for a week — the hidden pluralism will astonish you, and your safety-checking will start saving lives immediately. Asked kindly, patients tell; told safety, they negotiate.",
        },
      ],
      keyPoints: [
        "4 terms: traditional (indigenous!) + complementary (WITH!) + alternative (INSTEAD!) + integrative★ (BEST!).",
        "Nurse moves alternative → integrative; 'us OR them' loses patients.",
        "WHO: safe + effective + quality + regulated + integrated; Ghana leads (575/TMPC/KNUST!).",
        "Know because: 80% + silence + interactions + delays + adherence.",
        "Pluralism normal + rational: map + safety-check + coordinate, mock never.",
        "Fix orthodox gaps too: access + kindness + meaning keep patients.",
      ],
      quiz: {
        keywords: ["TCAM", "traditional", "complementary", "alternative", "integrative", "WHO", "pluralism", "interactions", "delays", "adherence", "KNUST", "Act 575", "silence", "meaning", "80%"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "tcam-in-ghana-law-and-landscape",
      title: "TCAM in Ghana: law and landscape",
      minutes: 18,
      objectives: [
        "State Act 575 + TMPC roles.",
        "Explain FDA herbal registration.",
        "Map 5 practitioner types.",
        "Flag quacks + report.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Law + council + products",
          paragraphs: [
            "<strong>ACT 575</strong> (Traditional Medicine Practice Act, 2000 — exam!): LICENCES practitioners, sets practice STANDARDS, defines offences, punishes QUACKS. <strong>TMPC</strong> (Traditional Medicine Practice Council): REGISTERS practitioners (certificates + licence books!) + INSPECTS premises + DISCIPLINES misconduct + PROMOTES safe practice + keeps the REGISTER. Nurse move: 'is your herbalist TMPC-registered…? may I see the licence…?' — registered = trained + traceable + accountable; unregistered = unknown + unfindable if harm follows. <strong>FDA GHANA</strong> registers herbal PRODUCTS (registration NUMBERS on labels!): confirms identity + quality + basic safety; does NOT guarantee cure-claims ('shrinks fibroids in 7 days!' = marketing, not medicine!). Teach label-reading: FDA number + ingredients + directions + EXPIRY + batch + 'report bad reactions!' Unregistered mixtures = UNKNOWN contents + dose + contaminants (lead! steroids! orthodox drugs secretly added! Alles!). Report adverse reactions (M03!) — nurses' reports BUILD the safety database. Exam: 'regulate TCAM in Ghana' = Act 575 (practitioners!) + TMPC (register/discipline!) + FDA (products!) + pharmacopoeia (standards!) + KNUST degrees (training!) — five pillars, one answer.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-TCM-0002.svg",
          alt: "Five boxes Act-575 TMPC FDA practitioners nurse-role. Act 575 TMPC roles plus licence-ask. FDA product registration plus label-teaching plus unregistered dangers. Practitioner map five types with partnership notes. Integration points five with bridge role. Quack flags six plus report guidance. Cross-course links. Mantra quoted.",
          caption: "Licensed healers welcomed, secret cures questioned, quacks reported.",
        },
        {
          type: "text",
          heading: "Practitioners + quacks",
          paragraphs: [
            "<strong>PRACTITIONER MAP</strong> (know your district's trusted names!): <strong>HERBALISTS</strong> — plant medicines, biggest group; many TMPC-registered, skilled, referable — PARTNERS. <strong>TBAs</strong> (traditional birth attendants) — trusted, near, affordable; partner DON'T war: train + equip + REFERRAL SLIPS + delivery incentives for COMPLICATION referrals ('bleeding? prolonged? cord? — hospital NOW, transport arranged!'). <strong>BONE-SETTERS</strong> — fractures + sprains; praise closed-simple successes, REFER open/complex/neurovascular ('numb? pale? — hospital TODAY!') + gangrene watch. <strong>SPIRITUALISTS</strong> — prayer, rituals, 'spiritual' illness; coordinate (chaining/beating REFUSED — Mental Health Act! BEH M06!). <strong>Itinerant DRUG PEDDLERS</strong> — bus-station 'doctors', unregulated mixtures + antibiotics abused — WARN patients, REPORT. <strong>INTEGRATION POINTS</strong>: herbal units in SOME hospitals (refer BOTH ways!) · TBA training + slips · bone-setter workshops · KNUST degrees · pharmacopoeia monographs. Nurses BRIDGE: ask + respect + coordinate + refer + document. <strong>QUACK FLAGS</strong>: SECRET formulas ('can't tell!') + 'CURES AIDS/cancer/diabetes!' + NO licence + NO fixed place + UPFRONT fortunes + FORBIDS hospitals ('drips kill!') + threats for leaving. Warn patients ('secret + cure-all + no licence = danger!') + REPORT (TMPC! police! FDA!). Hope sold without honesty is fraud; fraud with illness kills — reporting protects the next victim.",
          ],
        },
        {
          type: "table",
          heading: "Partner or report?",
          columns: ["Healer shows", "Verdict", "Nurse does"],
          rows: [
            ["TMPC licence + fixed shop", "PARTNER ★", "Greet + coordinate + refer both ways"],
            ["TBA + referral slips", "PARTNER ★", "Train + equip + thank referrals"],
            ["'Cures AIDS!' no licence", "QUACK ⚠", "Warn patient + report TMPC/police"],
            ["Secret mix, forbids hospital", "DANGER ⚠", "Negotiate return + document + report?"],
            ["Bone-setter, simple fracture", "PARTNER", "Respect + refer complex + gangrene watch"],
            ["Bus-station mixture seller", "PEDDLER ⚠", "Warn + teach labels + report FDA"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Forbidding hospitals kills",
          body: "'Drips kill! Hospitals harvest organs! Leave and die!' — healers who FORBID orthodox care while patients deteriorate cross from alternative into harm. Negotiate urgently ('both together — drip AND prayers!'), document, escalate (family meeting! seniors! TMPC/police if detention!). Freedom of belief ends where preventable death begins — the nurse stands in that gap.",
        },
      ],
      keyPoints: [
        "Act 575: licences + standards + offences; TMPC: registers + inspects + disciplines.",
        "FDA registers PRODUCTS (numbers on labels!); unregistered = unknown + Alles.",
        "Teach labels: FDA no. + ingredients + directions + expiry + report reactions.",
        "Map: herbalists + TBAs + bone-setters + spiritualists + peddlers — partner 4, warn 1.",
        "Integrate: hospital units + TBA slips + workshops + degrees; nurses bridge.",
        "Quacks: secret + cure-all + no licence + forbids hospital → warn + report.",
      ],
      quiz: {
        keywords: ["Act 575", "TMPC", "FDA", "licence", "registration", "herbalists", "TBAs", "bone-setters", "spiritualists", "peddlers", "quacks", "labels", "integration", "referral", "pharmacopoeia"],
        categories: ["fundamentals"],
      },
    },
  ],
};
