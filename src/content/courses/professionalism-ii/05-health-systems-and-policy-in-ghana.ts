import type { CourseModule } from "../types";

export const healthSystemsAndPolicyInGhana: CourseModule = {
  slug: "health-systems-and-policy-in-ghana",
  title: "Health systems and policy in Ghana",
  summary:
    "The system you serve: Ghana's five care levels from CHPS doorstep to teaching hospitals with governance (MOH, GHS, HeFRA, NMC, FDA) and referral rules with counter-referral loops — then NHIS money-in-to-care-out with exemptions and claims discipline, financing mix with UHC/SDG 3, the policy cycle, the nurse's voice ladder from ward data to parliament, and GRNA versus NMC roles.",
  lessons: [
    {
      slug: "ghanas-health-system",
      title: "Ghana's health system",
      minutes: 20,
      objectives: [
        "Name the five care levels and their roles.",
        "Map governance: MOH, GHS, HeFRA, NMC, FDA.",
        "Refer up safely and feed back down.",
        "Defend gatekeeping against bypassing.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Five levels, one ladder",
          paragraphs: [
            "<strong>CHPS compounds</strong> (community doorstep): home visits, immunisation, family planning, health talks, first aid, growth monitoring — <strong>nurses (CHOs) lead here</strong>, the system's widest base. <strong>Health centres + clinics</strong> (sub-district): OPD, ANC/PNC, deliveries, minor ailments, labs — refer up appropriately. <strong>District hospitals</strong> (first referral): surgery, obstetrics, paediatrics, internal medicine — the district backbone every Ghanaian should reach within range. <strong>Regional hospitals</strong> (secondary): specialists, ICU/HDU, referral hub per region. <strong>Teaching/specialist hospitals</strong> (tertiary): Korle-Bu, KATH, Tamale, Cape Coast, Ho — advanced care + training + research. Plus <strong>CHAG/faith-based</strong> (huge rural share), <strong>private</strong> (clinics to hospitals), <strong>quasi-government</strong> (police, military, mines, universities). Nurses staff EVERY level — the only cadre present from CHPS zone to ICU, which is why system failures land on nurses first and nurse voices must shape systems most.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0023.svg",
          alt: "Pyramid: teaching/specialist tertiary at top, regional secondary, district first-referral backbone, health centres sub-district, CHPS community doorstep nurse-led base. Governance: MOH policy, GHS delivery cascade, teaching boards, CHAG private quasi, HeFRA facilities, NMC professionals, FDA drugs, NHIA insurance. Referral: stabilise first, letter plus reason, feedback down via counter-referral; bypassing chokes tertiary; emergencies jump queues.",
          caption: "Nurses oil every hinge of this ladder — from CHPS zones to ICUs.",
        },
        {
          type: "text",
          heading: "Who governs what",
          paragraphs: [
            "<strong>MOH</strong> (Ministry of Health): policy, oversight, budgets — sets direction. <strong>GHS</strong> (Ghana Health Service): public delivery cascade — national → regional → district → sub-district; implements policy, runs facilities, employs most public-sector nurses. <strong>Teaching hospitals</strong>: own boards, semi-autonomous — tertiary care + training. <strong>HeFRA</strong>: licenses and inspects FACILITIES (standards, closures). <strong>NMC</strong>: licenses PROFESSIONALS (PRO-I M1/M6: Act 857 — your PIN, not the building's). <strong>FDA</strong>: drugs, food, devices safety. <strong>NHIA</strong>: insurance fund (next lesson). <strong>Mental Health Authority</strong>: Act 846 services. Mix-ups cost marks and jobs: HeFRA closes wards, NMC strikes nurses — complain to the right body (PRO-I M6's concern ladder: Rung 3 needs precision). Districts plan (DHMT), regions coordinate, national strategizes — nurses sit at each table where invited, and should push where absent: no workforce plans without the workforce's largest cadre.",
          ],
        },
        {
          type: "text",
          heading: "Referral: up safe, back wiser",
          paragraphs: [
            "<strong>Referring UP</strong>: decide (beyond my level's capacity — skill, equipment, blood, ICU), <strong>stabilise FIRST</strong> (ABCs, IV, oxygen, bleeding controlled, NBM — never 'go and come' unstable; the ambulance is not an ICU), communicate (call ahead — ISBAR, PRO-I M5 — bed confirmed, team expecting), document (referral letter: history, findings, treatment given, reason for referral, copies kept), escort (nurse/midwife for the unstable — handover en route + on arrival), inform family (where, why, what to carry, costs). <strong>Feedback DOWN</strong> (counter-referral): receiving facility writes back — what was done, diagnosis, what continues — the loop that TEACHES lower levels and retains trust. <strong>Bypassing</strong> (CHPS → teaching direct) chokes tertiary care: educate gatekeeping kindly ('the district hospital manages this excellently and faster — here's your letter if needed'), never punish the fearful. Emergencies jump queues; paperwork follows patients, never precedes them — the bleeding mother moves NOW, forms catch up. Audit referrals monthly: appropriateness, stability, feedback rates — the ladder's oil-change.",
          ],
        },
        {
          type: "table",
          heading: "Level to role: placement drill",
          columns: ["Level", "Nurse's flagship roles", "Common failure + fix"],
          rows: [
            ["CHPS", "Home visits, immunisation, FP, first aid, surveillance", "Isolation + stock-outs → supervision visits + buffer stocks + phone credit"],
            ["Health centre", "ANC/PNC, deliveries, OPD triage, referrals", "Delivery complications → drills + partograph + referral readiness box"],
            ["District hospital", "Wards, theatre, emergency, mentoring students", "Overload + all-junior nights → rosters + skill mix (M01)"],
            ["Regional", "Specialist support, ICU/HDU, referrals hub", "Equipment downtime → maintenance log + biomedical SLA (M04 whys)"],
            ["Teaching", "Tertiary care, training, research, policy pilots", "Bypass overload → gatekeeping education + feedback loops"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Learn the ladder by walking it",
          body: "Before you criticize any level, spend time there: join a CHPS home-visit day, sit in district OPD triage, follow a referral letter to its destination and back. Nurses who have walked the ladder refer wisely (right level, right letter, right stabilisation), receive graciously (feedback that teaches), and advocate credibly ('I have seen the CHPS drug gap' beats 'I heard'). Log ladder-walks as CPD with Gibbs reflections (PRO-I M7) — systems insight is leadership's raw material (M01).",
        },
      ],
      keyPoints: [
        "Levels: CHPS (nurse-led base) → health centres → district (backbone) → regional → teaching.",
        "Governance: MOH policy, GHS delivery, HeFRA facilities, NMC professionals, FDA drugs, NHIA fund.",
        "Refer up: decide → stabilise FIRST → call ahead → letter → escort → inform family.",
        "Counter-referral feeds learning down; audit referrals monthly.",
        "Bypassing chokes tertiary — gatekeep kindly, never punish fear.",
        "Emergencies move now, paperwork follows; walk the ladder to lead it.",
      ],
      quiz: {
        keywords: ["CHPS", "health centre", "district hospital", "regional", "teaching hospital", "MOH", "GHS", "HeFRA", "CHAG", "referral", "counter-referral", "stabilise", "gatekeeping", "bypassing", "DHMT"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "financing-nhis-and-policy-voice",
      title: "Financing, NHIS and policy voice",
      minutes: 20,
      objectives: [
        "Trace NHIS money from levies to benefits.",
        "Register exemptions and bill transparently.",
        "Link financing mix to UHC/SDG 3.",
        "Climb the nurse's policy ladder with data.",
      ],
      blocks: [
        {
          type: "text",
          heading: "NHIS: money in, care out",
          paragraphs: [
            "<strong>IN</strong>: NHI levy (on VAT), SSNIT share, premiums, government/donor top-ups — pooled nationally. <strong>POOL</strong>: NHIA fund + district schemes + claims vetting (submitted → vetted → paid; accurate claims pay first). <strong>OUT</strong>: benefits — OPD, admissions, maternity, surgeries, drugs on the list, diagnostics per tariff. <strong>EXEMPT from premiums</strong>: under-18s, 70+, indigents, pregnant women (free maternal care), SSNIT pensioners, LEAP/disability per policy — <strong>REGISTER them, don't bill them</strong>; every exempt patient wrongly billed is a system theft from the poorest. <strong>Excluded</strong>: cosmetics, optics beyond list, most cancers beyond protocol, VIP extras, non-list drugs — explain BEFORE care, consent to costs, bill transparently (no surprise bills at discharge — PRO-I M4 dignity). <strong>Claims discipline</strong>: document → code accurately → submit promptly — PRO-I M5's records ARE revenue; upcoding, ghost patients and drug diversion are FRAUD that prosecutes and drains the pool nurses' own patients need. Delayed reimbursements strain facilities — accurate, prompt claims are frontline finance.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0024.svg",
          alt: "NHIS flow: levies premiums SSNIT in, NHIA pool with vetting, benefits out. Exemptions listed: under-18, elderly, indigents, pregnant, pensioners. Exclusions explained before care. Claims document-code-vet-pay with fraud warning. Financing mix: tax levies premiums donors shrinking out-of-pocket toward UHC and SDG 3. Stewardship: STG generics no waste. Policy cycle: agenda formulate adopt implement evaluate revise. Nurse ladder: ward data to parliament. GRNA welfare-voice versus NMC licence-discipline. Strikes last resort with minimum service. Migration debate noted.",
          caption: "Nurses deliver policy at bedsides — and must write it in boardrooms.",
        },
        {
          type: "text",
          heading: "Financing, UHC and stewardship",
          paragraphs: [
            "Ghana's mix: <strong>tax + levies + premiums + donors + out-of-pocket</strong> — shrinking out-of-pocket is the UHC mission (<strong>SDG 3</strong>: healthy lives for all — everyone covered, protected from financial ruin, quality assured). Nurses are UHC's workforce: most numerous, most rural, most trusted — every exemption registered, every generic prescribed per STG, every waste prevented extends the pool. <strong>Stewardship</strong> at bedside: right test (not every test), right drug (STG generics first), right quantity (par levels, FEFO — M01), no waste (opened-but-unused supplies audit), energy + water sense. Cost-conscious ≠ care-cutting: the unnecessary IV line removed saves cedis AND infections; the needed transfusion never delayed for cost — escalate, document, treat (PRO-I compass: safety first, always). Donor verticals (malaria, TB, HIV, immunisation) fund much — align ward work to their indicators honestly (never data-cook for targets: falsified coverage kills planning and prosecutes).",
          ],
        },
        {
          type: "text",
          heading: "The policy cycle and your ladder",
          paragraphs: [
            "Policy cycle: <strong>agenda</strong> (problem + data + story — your ward statistics + one human story) → <strong>formulate</strong> (draft + consult — respond to consultations!) → <strong>adopt</strong> (approve + fund) → <strong>implement</strong> (train + supply + supervise — where nurses make-or-break policy) → <strong>evaluate</strong> (did it work? audit! — M04) → <strong>revise</strong>. Nurse's ladder: <strong>ward data</strong> (your audits, QI charts) → <strong>facility meeting</strong> (present, propose, own actions) → <strong>district/regional forums</strong> (DHMT, reviews — volunteer papers) → <strong>GRNA + NMC position papers</strong> (association channels) → <strong>MOH consultations</strong> (submit memoranda) → <strong>media + MPs</strong> (evidence + stories + specific asks — PRO-I M6: lawful channels, no patient data). <strong>GRNA</strong> (association: welfare + voice — join, pay dues, vote, volunteer) ≠ <strong>NMC</strong> (regulator: licence + discipline — PRO-I M1). <strong>Strikes</strong>: last resort, legal procedure, <strong>minimum service</strong> for the dying — ethics outlast disputes (abandonment never lawful). <strong>Migration</strong>: push (pay, conditions, safety) vs pull (abroad) — debated nationally; serve, learn, return-or-remit: the brain-drain conversation needs nurse voices most, not politician slogans.",
          ],
        },
        {
          type: "table",
          heading: "Policy moments: nurse moves",
          columns: ["Moment", "Nurse's move", "Evidence to carry"],
          rows: [
            ["New protocol lands, no training", "Request training + pilot ward + feedback memo", "Error rates pre/post, staff confidence survey"],
            ["Exempt patients billed at OPD", "Alert management + register drive + poster", "Billed-exempt count, NHIS rules citation"],
            ["Drug stock-outs monthly", "Log + escalate written + buffer proposal", "Stock-out days, deferred-care records (M01/M04)"],
            ["Staffing ratio unsafe", "Written escalation + data + GRNA channel", "Ratios, acuity, incident links (PRO-I M5/M6)"],
            ["MOH calls consultation", "Submit ward-data memorandum via GRNA/facility", "Your audits + QI charts + one human story"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Data-cooking: the policy poison",
          body: "Fabricating coverage, attendance or outcome figures for targets, donors or inspections is fraud (PRO-I M3/M6) that kills planning: ghost immunisations hide outbreaks, invented deliveries mask maternal deaths, cooked attendance steals pay. Pressure to 'meet targets' is real — answer with honest data + written explanations of gaps + improvement plans (M04 tools). Managers who demand cooked figures join PRO-I M6's concern ladder (Rung 2→3, written, copied). True numbers that embarrass beat false numbers that kill — always, everywhere, no exceptions.",
        },
      ],
      keyPoints: [
        "NHIS: levies/premiums/SSNIT → NHIA pool → benefits; accurate claims pay first.",
        "Exemptions registered never billed; exclusions explained before care, billed transparently.",
        "Fraud (upcoding, ghosts, diversion) prosecutes and drains patients' pool.",
        "UHC/SDG 3: coverage + protection + quality; nurses are its workforce via stewardship.",
        "Policy cycle: agenda → formulate → adopt → implement → evaluate → revise.",
        "Ladder: ward data → facility → district/region → GRNA → MOH → media/MPs; GRNA≠NMC; data never cooked.",
      ],
      quiz: {
        keywords: ["NHIS", "NHIA", "exemptions", "premiums", "levy", "claims", "benefits", "financing", "UHC", "SDG", "policy cycle", "GRNA", "advocacy", "stewardship", "data integrity"],
        categories: ["fundamentals"],
      },
    },
  ],
};
