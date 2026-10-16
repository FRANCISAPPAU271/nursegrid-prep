import type { CourseModule } from "../types";

export const psychosocialAbuseAndEndOfLife: CourseModule = {
  slug: "psychosocial-abuse-and-end-of-life",
  title: "Psychosocial care, abuse and end-of-life",
  summary:
    "Hearts, homes and safety: loneliness screening with social prescribing, structured family meetings with conflict tools, caregiver burden as the second patient with respite and training maps, grief before and after death — then five abuse types with see-alone detection, body-map evidence, DOVVSU/Welfare reporting, witchcraft-accusation response, and end-of-life essentials from surprise question to good-death checklist.",
  lessons: [
    {
      slug: "loneliness-family-and-caregivers",
      title: "Loneliness, family and caregivers",
      minutes: 20,
      objectives: [
        "Screen loneliness and prescribe connection.",
        "Run structured family meetings.",
        "Treat caregiver burden early.",
        "Support grief across the dying arc.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Loneliness: the silent comorbidity",
          paragraphs: [
            "Loneliness kills like smoking 15 cigarettes a day — driving depression (M03), cognitive decline, non-adherence (M04), falls and early death. Screen simply: 'Do you feel lonely? Who visits weekly? Who would you call at midnight?' Then PRESCRIBE connection like drugs: worship attendance + roles (usher, choir, prayer leader — participation pillar, M01), market-day routines, grandchild time (homework help, stories), elder groups/associations, phone credit + charged phone + taught contacts, radio programmes, befriender volunteers, day centres where available. Urban elders (children abroad, compound empty) and bereaved elders need proactive befriending — CHPS registers should flag the alone (M01 outreach). Re-screen mood (GDS, M02) where loneliness persists — isolation ferments into depression and suicide risk. Document social prescriptions and follow them up: 'joined Tuesday fellowship — mood 4/10 → 7/10' is outcome nursing.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-GRN-0009.svg",
          alt: "Loneliness screen plus social prescriptions listed. Family meeting flow: invite, one-page agenda, elder first, plain facts, honest options, decide document review, caucuses for conflict. Caregiver triad: spot burden with exhaustion tears anger, relieve with respite rota day-care, equip with training aids numbers. Ghana support map: family rota neighbours worship CHPS welfare NHIS LEAP vetted help. Communication: elder direct, SPIKES bad news, scheduled dementia updates, early money talk. Grief: anticipatory normal, widowhood risks, rituals honoured, complicated grief referred.",
          caption: "Loneliness screened, families met, carers treated as second patients.",
        },
        {
          type: "text",
          heading: "Family meetings + the second patient",
          paragraphs: [
            "Run meetings, don't dread them: invite (elder + key kin + decision-maker — ask 'who decides when money is needed?') → ONE-page agenda (facts → options → decision) → elder speaks FIRST (autonomy, PRO-I M2/M4) → facts plain (diagnosis, trajectory, costs) → options honest (home-with-support vs admit vs palliative — with trade-offs) → decide + document (who/what/when) + review date. Conflicts: private caucuses ('tell me what worries you most'), 'what would Mama want?' reframes, mediator/social welfare if stuck. <strong>Caregivers = second patients</strong>: SPOT burden (exhaustion, tears, anger, own illness, 'can't cope', Zarit-4 where used) → RELIEVE (respite hours→weeks, family rota sharing nights/bathing/market, day care, home help) → EQUIP (train lifts/meds/dementia tips with teach-back, aids, emergency numbers). Support map (Ghana-real): family rota + neighbours + worship + CHPS visits + welfare + NHIS + LEAP/disability where apt + VETTED hired help (licence-checked, PRO-II M6). Unsupported carers break — and broken carers harm (next lesson's neglect). Review carer + map monthly.",
          ],
        },
        {
          type: "text",
          heading: "Grief across the arc",
          paragraphs: [
            "Grief starts BEFORE death: anticipatory grief (mourning the declining person — the husband grieving his wife's dementia-self) is NORMAL — name it, normalise it, support it ('many families feel this — loving and grieving together'). After death: acute grief (waves, yearning, intact self-worth) vs depression (flat, worthless, hopeless — M03 screens) vs COMPLICATED grief (stuck months, can't function — refer). Widowhood risks: depression, suicide, self-neglect, financial shock — schedule follow-up VISITS, not condolences alone. Honour rituals: washing, prayers, lying-in-state, funerals — Ghana's goodbyes matter enormously; ask 'what does your family need from us?' and facilitate (timely certification, body care, belongings listed, space for prayer). Support juniors too: first deaths need debriefs (PRO-II M02) — unprocessed grief becomes cynicism or exit. Document grief support given; log family-meeting skills as CPD.",
          ],
        },
        {
          type: "table",
          heading: "Family flashpoints: nurse moves",
          columns: ["Flashpoint", "What's underneath", "Nurse's move"],
          rows: [
            ["Sons disagree: operate vs 'take her home'", "Fear + money + guilt + love, differently mixed", "Meeting: facts + options + costs + 'what would SHE want?' + decide + review"],
            ["Daughter exhausted, shouting at father", "Burden + no respite + guilt loop", "Carer triage: respite NOW + rota + training; watch for abuse line"],
            ["Family hides diagnosis from elder", "'Protecting' + collusion habit", "Negotiate truth-telling: elder's right + coping evidence + staged telling"],
            ["Nobody pays bills; discharge stuck", "Money shame + diffusion ('brother will…')", "Early money talk + named payer + NHIS/exemptions + documented plan"],
            ["Relatives demand futile CPR at 94", "Love + guilt + no prior conversation", "Goals talk + DNAR discussion + document; chaplain/imam support"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Elder speaks first — always",
          body: "Open every family meeting, ward round and discharge plan with the elder's voice ('Mama, tell us what matters most to you') BEFORE kin speak — first-speaker advantage protects autonomy against well-meaning takeover. Where cognition limits, still include (simple choices, familiar faces, best-interest + prior-wishes reasoning documented — PRO-I M2/M4). Families that hear the elder's goals align faster; elders heard once speak up forever. Autonomy survives grey hair, tubes and accents — chair for it.",
        },
      ],
      keyPoints: [
        "Loneliness kills — screen simply, prescribe connection, re-screen mood.",
        "Family meetings: invite right people, elder FIRST, one-page agenda, decide + document + review.",
        "Caregivers are second patients: spot → relieve (respite/rota) → equip (train/aids/numbers).",
        "Support map written + shared + monthly-reviewed; unsupported carers break and harm.",
        "Grief spans pre/post death; widowhood needs visits; rituals honoured; juniors debriefed.",
        "Money talk early; bad news SPIKES-style; elder's voice opens everything.",
      ],
      quiz: {
        questionIds: ["NG-MOD-GERO-013"],
        categories: ["leadership-delegation"],
        keywords: ["loneliness", "social prescribing", "family meeting", "caregiver", "burden", "respite", "Zarit", "grief", "widowhood", "rituals", "autonomy", "SPIKES", "conflict", "support map", "CHPS"],
      },
    },
    {
      slug: "elder-abuse-and-end-of-life",
      title: "Elder abuse and end-of-life",
      minutes: 20,
      objectives: [
        "Name five abuse types with signs.",
        "Detect abuse seeing elders alone.",
        "Protect and report via Welfare/DOVVSU.",
        "Nurse good deaths with checklists.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Five abuses, one duty",
          paragraphs: [
            "<strong>PHYSICAL</strong> (hits, burns, rough restraint, over-sedation — injury PATTERNS: bilateral bruises, finger-marks, burns, fractures with vague stories) · <strong>EMOTIONAL</strong> (threats, insults, isolation, infantilising — fear, withdrawal, flinching at carer's voice) · <strong>FINANCIAL</strong> (pension theft, forced land sales, 'fees' skimmed, signatures coerced — missing money + new poverty) · <strong>NEGLECT</strong> (unfed, dirty, pressure ulcers, missed meds/visits — including SELF-neglect: squalor, refusal) · <strong>SEXUAL</strong> (any non-consensual contact — believe, forensic pathway, DOVVSU urgent). Risk flags: dementia + dependence + carer burden + isolation + poverty + prior family violence + witchcraft accusations (elder women branded witches — abuse + banishment: protect + refer + challenge with chiefs/welfare). Detect: SEE ALONE ('routine check — family wait outside, please') → ASK kindly ('do you feel safe at home? who hurts or frightens you? who handles your money?') → EXAMINE (body map, photos per protocol, VERBATIM quotes) → PROTECT (admit if unsafe; NEVER confront abuser with elder present) → REPORT (in-charge + Social Welfare + DOVVSU/police — Acts 560/732, PRO-I M4/M6: protection beats secrecy) → FOLLOW UP (review date, safe discharge ONLY). Document forensically (PRO-I M5: facts, quotes, maps).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-GRN-0010.svg",
          alt: "Five abuse panels with signs: physical injury patterns, emotional fear withdrawal, financial missing money, neglect including self-neglect, sexual with forensic DOVVSU. Detect-protect-report chain: see alone, ask kindly, examine with body map, protect by admission, report to Welfare DOVVSU, follow up; witchcraft accusations flagged. End-of-life: surprise question, goals talk with DNAR, palliate five symptoms, comfort, after-death protocol. Advance care plans, capacity, futile CPR conversations, stopping burdens. Good-death checklist nine items. Coroner rules noted.",
          caption: "See alone, ask kindly, protect first, report always — and nurse good deaths.",
        },
        {
          type: "text",
          heading: "Recognising dying + planning",
          paragraphs: [
            "<strong>Surprise question</strong>: 'would I be surprised if they died in 12 months?' — if NO, start planning (goals talk, advance care plan, palliative links). <strong>Goals talk</strong>: where to be cared for? who present? what matters (pain-free? conscious? home? prayers? funeral wishes?) → DNAR discussed + documented per policy (PRO-I M2: conversation, not surprise) → <strong>ADVANCE CARE PLAN</strong> written while capacitous (place, treatments wanted/refused, who decides, funeral) — reviewed yearly; capacity per decision (PRO-I M2/M4); family guided by 'what would THEY want?' Stopping burdens (dialysis, admissions, tubes, restraints) with consent + comfort = CARE, not killing — document reasoning + family discussion. Futile CPR avoided by conversation: explain what CPR does to frail bodies (ribs, ICU, rare success) + offer what WILL be done (comfort, presence, prayers) — most families choose comfort when honestly informed. Palliate five: pain (M03 ladder) + breathlessness (position, fan, oxygen, opioids per doctor) + secretions (position, antisecretory) + nausea (cause + antiemetic) + agitation (cause? pain? retention? fear? — treat + soothe + family voice).",
          ],
        },
        {
          type: "text",
          heading: "The good-death checklist",
          paragraphs: [
            "Good deaths are NURSED: pain 0–3? breath settled? mouth moist (sips/swabs if wanted)? positioned? family CALLED (early — 'come now' beats 'too late')? prayers/rituals offered (imam/pastor/traditional as THEY wish)? light + quiet + presence? belongings safe? juniors supported (first deaths witnessed kindly)? SELF debriefed? After: verify death per protocol + inform doctor (certification — PRO-I M6; expected vs reportable rules) → wash + lay out + honour rituals → belongings LISTED + handed with receipt → family: grief + practical help (certificates, mortuary, funeral, NHIS/death benefits info) → staff debrief (M02 PRO-II) → reflect + file (Gibbs, CPD). Dying elders teach nursing's heart: the nurse who sat through the night shift death, morphine titrated, family singing softly, mouth moist, dignity intact — that nurse knows why the uniform matters. Log end-of-life care in portfolios (PRO-I M7); run ward after-death audits (PRO-II M4) so every death improves the next.",
          ],
        },
        {
          type: "table",
          heading: "Dying-phase problems: comfort moves",
          columns: ["Problem", "Comfort moves", "Notes"],
          rows: [
            ["Pain, grimacing, restless", "Ladder + breakthrough doses + positioning + reassess hourly", "PAINAD guides (M03); never 'too sleepy for analgesia'"],
            ["Breathless + noisy secretions", "Sit up, fan, oxygen, opioids/antisecretory per doctor, suction gentle", "Explain rattle kindly; family presence calms most"],
            ["Agitated + picking + fearful", "Cause hunt (pain? retention? constipation?) + light + voice + family", "Delirium-at-dying common; sedate ONLY per doctor + review"],
            ["Family demands admission/CPR at end", "Goals talk + prior wishes + comfort offer + chaplain support", "Document discussion; futile CPR harms dignity + staff"],
            ["Junior traumatised after death", "Same-shift debrief + normalize + mentor + follow-up", "Unprocessed deaths become cynicism or exits"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Never discharge to danger",
          body: "An elder disclosing abuse, showing patterned injuries, or terrified of the collecting 'nephew' is NOT discharged to that home — admit, refer (Welfare/DOVVSU), arrange safe placement, document. Pressure to free beds never overrides protection (PRO-I compass: safety first; Acts 560/732; NMC accountability). Handover danger explicitly (ISBAR + written + named receiver — PRO-I M5) so night staff and CHPS follow-up guard the plan. The discharge summary of an abused elder should read like a protection order with dates — because it is one.",
        },
      ],
      keyPoints: [
        "Five abuses: physical, emotional, financial, neglect (+self), sexual — patterns + fear + poverty flag.",
        "See ALONE, ask kindly, body-map + verbatim, protect (admit), report (Welfare/DOVVSU), follow up.",
        "Witchcraft accusations = abuse: protect + refer + engage chiefs/welfare.",
        "Surprise question triggers planning: goals + ACP + DNAR talk + palliate five symptoms.",
        "Stopping burdens with consent + comfort = care; futile CPR avoided by honest conversation.",
        "Good-death checklist + after-death protocol + debriefs; never discharge to danger.",
      ],
      quiz: {
        questionIds: ["NG-MOD-GERO-012", "NG-MOD-GERO-014"],
        categories: ["gerontology-community"],
        keywords: ["elder abuse", "DOVVSU", "Welfare", "neglect", "financial abuse", "body map", "witchcraft", "surprise question", "advance care", "DNAR", "palliative", "good death", "grief", "debrief", "protection"],
      },
    },
  ],
};
