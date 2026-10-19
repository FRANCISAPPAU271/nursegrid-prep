import type { AuthoredQuestion } from "./authored-bank";

export const CHN_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-CHN-001",
    categorySlug: "gerontology-community",
    stem: "A newly appointed Community Health Officer (CHO) arrives at a rural community to establish primary healthcare activities at a new Community-based Health Planning and Services (CHPS) compound. What is the mandatory first step the nurse must undertake according to standard community entry protocols?",
    choices: [
      {
        id: "a",
        text: "Pay a formal courtesy visit to the chief, elders, queen mother, assembly member and unit committee, explaining the mission and asking their cooperation",
      },
      {
        id: "b",
        text: "Begin door-to-door immunisation and household assessment straight away, and introduce yourself to the elders at the first community durbar",
      },
      {
        id: "c",
        text: "Meet the district assembly first and let its officers inform the chief, since the CHPS compound is a government facility",
      },
      {
        id: "d",
        text: "Hold an open meeting at the market for mothers, since the women are the main users of the service and their consent is sufficient",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Community entry is the formal, socially accepted process of entering a community to initiate public health programmes. In Ghana and West African community health practice, the nurse must first pay a formal courtesy call on traditional authority figures (the Chief, elders, Queen Mother) alongside elected political representatives (Assembly Member, Unit Committee members). Bypassing traditional authority breaches cultural protocol, generates community distrust, and leads to resistance to health initiatives. Once permission, blessing, and partnership are secured, a community durbar is organized to introduce health staff to the wider community. Why the other options fail: option b skips the courtesy call that secures permission and trust, and a later durbar cannot repair the breach. Option c routes the entry through the district assembly and leaves out the traditional authority the community actually looks to. Option d assumes that mothers' attendance substitutes for the chief's consent, which it does not.",
    strategy: "Community entry protocol: Always start with traditional leadership (Chief, Queen Mother, elders) and local governance representatives before initiating any field activities.",
    difficulty: "easy",
    tags: ["community-health", "chps", "community-entry", "primary-health-care", "leadership"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-002",
    categorySlug: "gerontology-community",
    stem: "A Community Health Officer is facilitating the establishment of a Community Health Management Committee (CHMC) in a CHPS zone. Which principle best reflects the primary function and composition of this committee under the Primary Health Care (PHC) framework?",
    choices: [
      {
        id: "a",
        text: "Clinical supervision of the nurse's prescriptions and diagnostic decisions, through a committee of senior clinicians",
      },
      {
        id: "b",
        text: "Community ownership and intersectoral partnership, with members planning, mobilising local resources and overseeing the facility",
      },
      {
        id: "c",
        text: "Collection of user fees to fund the district health directorate's outreach programme and staff allowances",
      },
      {
        id: "d",
        text: "Day-to-day management of the CHPS compound's paid staff, including recruitment, postings and discipline",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Under the Alma-Ata declaration and the Ghana CHPS policy, Primary Health Care relies heavily on community participation and intersectoral collaboration. The Community Health Management Committee (CHMC) consists of respected, diverse community representatives (women leaders, youth representatives, elders, teachers). Their role is to foster community ownership, maintain the CHPS compound, mobilize communal labor and local resources, support community emergency transport systems (CETS), and provide liaison between community members and health staff. Why the other options fail: option a gives the committee clinical authority it does not have, because supervision of practice belongs to the health system rather than to community representatives. Option c turns a community body into a revenue collector for the directorate, which is not its function. Option d gives it employment powers over staff, which belong to the district health administration.",
    strategy: "PHC principles: Community Health Management Committees (CHMC) represent community participation and ownership, not clinical supervision.",
    difficulty: "medium",
    tags: ["community-health", "chmc", "primary-health-care", "community-participation", "governance"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-003",
    categorySlug: "gerontology-community",
    stem: "In operationalizing a Community-based Health Planning and Services (CHPS) zone, what is the core purpose of conducting a community profile and social mapping exercise?",
    choices: [
      {
        id: "a",
        text: "To assess property values so that the district assembly can levy household rates on the community",
      },
      {
        id: "b",
        text: "To identify illegal structures for referral to the municipal building inspector before services begin",
      },
      {
        id: "c",
        text: "To map boundaries, household locations, water sources, vulnerable groups and local resources, so that interventions can be targeted",
      },
      {
        id: "d",
        text: "To decide which households should pay for services and which should be excluded from free immunisation",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "A community profile and social mapping exercise is a participatory epidemiological assessment conducted by the Community Health Officer with community volunteers. It maps out geographical zones, household distribution, pregnant women, under-five children, water points, latrines, refuse dumps, and local resources. This enables the CHO to establish a functional household register, plan outreach routes, track defaulters, and prioritize high-risk families. Why the other options fail: option a turns a public health exercise into a tax assessment and guarantees resistance. Option b turns it into code enforcement, which is not its purpose and would deter households from being mapped at all. Option d uses the profile to exclude households from services, when its purpose is to find the ones that need them.",
    strategy: "Social mapping: Tool to visualize community layout, household populations, vulnerable groups, and public health risks for targeted outreach.",
    difficulty: "medium",
    tags: ["community-health", "chps", "social-mapping", "epidemiology", "planning"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-004",
    categorySlug: "health-promotion",
    stem: "A public health nurse is designing disease prevention interventions for a municipal health directorate. Which intervention correctly exemplifies PRIMORDIAL prevention?",
    choices: [
      {
        id: "a",
        text: "Administering measles-rubella vaccine to infants at 9 months and vitamin A to children under five",
      },
      {
        id: "b",
        text: "Screening random blood glucose at a community health fair and referring raised readings for confirmation",
      },
      {
        id: "c",
        text: "Providing physiotherapy and occupational rehabilitation to an elder after a stroke",
      },
      {
        id: "d",
        text: "Advocating for national and municipal policies that ban trans fats and tax tobacco and sugar-sweetened drinks",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Primordial prevention targets the underlying economic, social, environmental, and behavioral conditions and policies to prevent the emergence and establishment of risk factors themselves (e.g., legislation banning trans-fats, taxing tobacco/sugary drinks, urban planning for sidewalks). Primary prevention prevents disease onset in individuals who already possess or are exposed to risk factors (e.g., vaccination, bed nets). Secondary prevention involves early detection and prompt treatment (e.g., screenings). Tertiary prevention aims to reduce disability and rehabilitate established illness. Why the other options fail: option a is primary prevention, immunising an infant before exposure. Option b is secondary prevention, detecting disease early in an asymptomatic person. Option c is tertiary prevention, limiting disability after a stroke. None acts on the risk factors before they become established.",
    strategy: "Prevention levels: Primordial = policies/laws stopping risk factors from emerging; Primary = stopping disease before it begins; Secondary = screening; Tertiary = rehabilitation.",
    difficulty: "medium",
    tags: ["community-health", "levels-of-prevention", "primordial-prevention", "health-promotion", "policy"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-005",
    categorySlug: "health-promotion",
    stem: "In a district with 20,000 live births in a calendar year, 1,200 infants die before reaching their first birthday. How should the public health nurse calculate and interpret the Infant Mortality Rate (IMR)?",
    choices: [
      {
        id: "a",
        text: "IMR = (1,200 / 20,000) * 1,000 = 60 infant deaths per 1,000 live births",
      },
      {
        id: "b",
        text: "IMR = (1,200 / 20,000) * 100,000 = 6,000 infant deaths per 100,000 population",
      },
      {
        id: "c",
        text: "IMR = (20,000 / 1,200) * 1,000 = 16.6 per 1,000 live births",
      },
      {
        id: "d",
        text: "IMR = (1,200 / 18,800) * 100 = 6.38 percent mortality",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The Infant Mortality Rate (IMR) is defined as the number of deaths of infants under one year of age per 1,000 live births in a given population during a specific year. Formula: (Number of infant deaths under 1 year / Total live births) * 1,000. Here, (1,200 / 20,000) * 1,000 = 60 deaths per 1,000 live births. IMR is universally recognized as one of the most sensitive indicators of general community health, socioeconomic development, and healthcare system quality. (Note: Maternal Mortality Ratio uses a multiplier of 100,000). Why the other options fail: option b multiplies by 100,000, the convention for the maternal mortality ratio, not the infant rate. Option c inverts the fraction and divides births by deaths. Option d divides deaths by survivors and multiplies by 100, which is neither the rate nor a percentage of live births.",
    strategy: "IMR calculation: (Deaths under 1 year / Live births) * 1,000. Expressed per 1,000 live births.",
    difficulty: "easy",
    tags: ["community-health", "epidemiology", "infant-mortality-rate", "vital-statistics", "public-health"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-006",
    categorySlug: "safety-infection-control",
    stem: "Within 48 hours, 14 villagers from three neighboring hamlets visit the CHPS compound with sudden, copious watery diarrhoea and severe dehydration. What is the nurse's immediate sequence of actions to investigate this potential waterborne outbreak?",
    choices: [
      {
        id: "a",
        text: "Wait for laboratory confirmation of at least 50 cases before opening a line list or alerting the district team",
      },
      {
        id: "b",
        text: "Rehydrate and isolate patients, notify the district disease control officer, define a case, and line-list by time, place and person",
      },
      {
        id: "c",
        text: "Send the stool specimens first and begin the case search only after the laboratory reports the organism",
      },
      {
        id: "d",
        text: "Inspect the river and the water sources first, and begin clinical care once the source has been confirmed",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The initial steps in outbreak investigation demand parallel action: (1) provide immediate clinical care and infection control (rehydration and isolation), (2) notify the District Health Management Team (DHMT) within 24 hours, (3) verify the diagnosis with laboratory stool specimens (Cary-Blair medium), (4) establish a clear case definition, and (5) construct a line list characterizing cases by person (age, sex, occupation), place (hamlet, water source), and time (date and hour of onset) to construct an epidemic curve and identify the source of exposure. Why the other options fail: option a waits for a case count that no protocol sets and delays the notification that starts the investigation. Option c puts laboratory confirmation ahead of the case search, so the outbreak grows while the results are awaited. Option d investigates the environment before treating patients, when care, notification and the line list run in parallel and come first.",
    strategy: "Outbreak investigation sequence: Treat and isolate -> notify DHMT immediately -> establish case definition -> line list cases (time, place, person).",
    difficulty: "medium",
    tags: ["community-health", "outbreak-investigation", "epidemiology", "idsr", "waterborne-disease"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-007",
    categorySlug: "safety-infection-control",
    stem: "During a Community-Led Total Sanitation (CLTS) triggering session in an open-defecation endemic community, which participatory activity is designed to evoke the 'gross/disgust' factor to motivate the community to build their own household latrines?",
    choices: [
      {
        id: "a",
        text: "Imposing fines on households that have not built a latrine, collected by the unit committee",
      },
      {
        id: "b",
        text: "A lecture on faecal-oral transmission illustrated with a projector, delivered at the community centre",
      },
      {
        id: "c",
        text: "The transect walk to open defecation sites, followed by placing fresh faeces beside food to show fly transmission",
      },
      {
        id: "d",
        text: "Distributing free cement and slabs to every household so that latrines can be built without cost",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Community-Led Total Sanitation (CLTS) is an innovative methodology for mobilizing communities to completely eliminate open defecation without external subsidies. The triggering process uses participatory rural appraisal tools: the transect walk ('walk of shame/praise') where villagers guide facilitators to open defecation areas, calculation of medical costs, feces calculation (tons produced annually), and the 'food and shit' demonstration where flies move from feces directly onto food. Triggering collective shame and disgust prompts the community to declare an emergency action plan to achieve Open Defecation Free (ODF) status using locally available materials. Why the other options fail: option a substitutes a penalty for participation, which is a subsidy by another name and does not create collective motivation. Option b is a lecture, and CLTS works through the community's own discovery rather than being told. Option d provides hardware, which is the one thing CLTS deliberately withholds.",
    strategy: "CLTS triggering: Uses participatory demonstrations (transect walk, fly-feces-food demo) to ignite collective disgust and community-led latrine building.",
    difficulty: "easy",
    tags: ["community-health", "clts", "wash", "sanitation", "open-defecation-free"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-008",
    categorySlug: "safety-infection-control",
    stem: "A community health nurse teaches mothers at a Child Welfare Clinic how to treat drinking water collected from a local stream. Which instruction on household water treatment and storage is evidence-based and correct?",
    choices: [
      {
        id: "a",
        text: "Leave water in an open bucket in the sun for 10 minutes, which is enough to kill cysts and helminth eggs before drinking",
      },
      {
        id: "b",
        text: "Strain water through a single layer of nylon mesh and drink it immediately, without boiling or disinfection",
      },
      {
        id: "c",
        text: "Add a few drops of kerosene to settle the sediment, then pour off the clear water for infants to drink",
      },
      {
        id: "d",
        text: "Bring water to a rolling boil for at least 1 minute, cool it, and store it covered in a narrow-necked container with a tap or ladle",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Boiling water to a vigorous rolling boil for at least 1 minute (or 3 minutes at high altitudes) kills bacteria, viruses, and protozoan cysts (including Giardia and Cryptosporidium). Safe storage is equally vital to prevent recontamination: water must be stored in a clean, covered container with a narrow neck or a fitted tap. If wide-mouthed buckets are used, unwashed hands dipping cups into the water introduce pathogens. Water treatment without safe storage fails to interrupt the faecal-oral cycle. Why the other options fail: option a relies on ten minutes of sun in an open bucket, which does not inactivate cysts or helminth eggs. Option b strains out debris but removes neither bacteria nor viruses, and drinking immediately adds recontamination. Option c adds kerosene, which clears the appearance of the water and poisons the infant.",
    strategy: "Household water safety: Rolling boil for 1 minute + safe storage in narrow-necked covered container with tap to prevent recontamination.",
    difficulty: "easy",
    tags: ["community-health", "wash", "water-treatment", "hygiene", "child-health"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-009",
    categorySlug: "health-promotion",
    stem: "Prior to the deployment of Indoor Residual Spraying (IRS) by the National Malaria Elimination Programme, what essential instructions must the community health nurse provide to household heads?",
    choices: [
      {
        id: "a",
        text: "Remove food, utensils and animals, cover furniture, stay out for 2 hours, and do not wash or plaster the walls for 6 months",
      },
      {
        id: "b",
        text: "Wash and scrub the sprayed internal walls with soap and water as soon as the team has left, so that children do not touch the deposit",
      },
      {
        id: "c",
        text: "Seal every window and door for 48 hours and keep the household out of the compound for that time",
      },
      {
        id: "d",
        text: "Repaint the walls with white latex within 24 hours, which seals the insecticide into the plaster and prolongs its effect",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Indoor Residual Spraying (IRS) applies a long-lasting insecticide to the interior walls and ceilings where endophilic Anopheles mosquitoes rest after a blood meal. Community preparation requires: (1) removing food, water, utensils, and animals; (2) moving heavy furniture to the center and covering it; (3) sweeping floors before spraying; (4) remaining outside for 2 hours post-spraying; and (5) critically, refraining from washing, scrubbing, plastering, or repainting sprayed walls for at least 6 months to maintain the residual insecticide deposit. Why the other options fail: option b washes the insecticide off the walls within hours and removes the residual effect the spray is meant to give. Option c seals the house and keeps the family out, which is neither necessary nor safe. Option d paints over the deposit, which hides it from the mosquito as effectively as washing it off.",
    strategy: "IRS community education: Protect food/pets, vacate for 2 hours, and DO NOT wash, plaster, or paint walls for 6 months.",
    difficulty: "medium",
    tags: ["community-health", "malaria-control", "indoor-residual-spraying", "vector-control", "health-education"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-010",
    categorySlug: "pediatrics",
    stem: "At a monthly Child Welfare Clinic (CWC), a nurse weighs an 8-month-old infant whose weight has plotted along the exact same horizontal line (7.2 kg) for three consecutive months on the Road to Health growth chart. The infant's weight still falls between the median and -2 SD lines. How should the nurse interpret this finding?",
    choices: [
      {
        id: "a",
        text: "Optimal growth, because a weight between the median and -2 SD lines is within the normal range",
      },
      {
        id: "b",
        text: "Growth faltering: a flat weight curve over 3 months is an early danger sign and needs a feeding assessment and follow-up",
      },
      {
        id: "c",
        text: "Excess adipose tissue, which needs calorie restriction and a reduction in the number of breast feeds",
      },
      {
        id: "d",
        text: "Normal plateauing at this age, which needs no investigation and can be reviewed at the next routine visit",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Growth monitoring evaluates the trajectory (trend) of growth over time, not merely a single point in time. A horizontal or downward curve on the growth chart signifies growth faltering (growth stagnation), which precedes clinical wasting or stunting. Even if the weight point is currently within the 'green' or normal zone, failure to gain weight over consecutive months indicates inadequate energy intake, recurrent subclinical infection (e.g., giardiasis, urinary infection), or poor complementary feeding. The nurse must explore complementary feeding practices, check for illness, and schedule a 2-week follow-up. Why the other options fail: option a reads a single point as normal and ignores the flat trajectory, which is the finding. Option c diagnoses overfeeding in a child who is not gaining weight at all. Option d calls three months without weight gain normal plateauing, when growth faltering is the earlier and treatable signal.",
    strategy: "Growth chart interpretation: The DIRECTION of the curve matters most. A flat or falling line means growth faltering regardless of where it plots.",
    difficulty: "medium",
    tags: ["community-health", "cwc", "growth-monitoring", "child-health", "nutrition"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-011",
    categorySlug: "pediatrics",
    stem: "While reviewing the EPI tally register and tickler box at a health center, the CHO observes that 45 infants received Pentavalent 1 at 6 weeks, but only 28 completed Pentavalent 3 at 14 weeks, representing a 37.8% dropout rate. What is the nurse's priority public health action?",
    choices: [
      {
        id: "a",
        text: "Restart the whole pentavalent series from dose 1 for every child who missed a date, so that immunity is complete",
      },
      {
        id: "b",
        text: "Suspend outreach sessions until attendance improves, so that staff time is not wasted on small numbers",
      },
      {
        id: "c",
        text: "Trace defaulters through the child register and phone numbers, and send community volunteers to bring them for the missed doses",
      },
      {
        id: "d",
        text: "Report the community to the district assembly for failing to meet the national immunisation coverage target",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "An EPI dropout rate (Penta 1 to Penta 3) exceeding 10% indicates poor service utilization, accessibility barriers, or loss to follow-up. National EPI protocols mandate active defaulter tracing using the clinic immunization register, appointment tickler files, and Community Health Volunteers (CHVs). CHVs trace caregivers at home to identify barriers (e.g., maternal illness, relocation, fear of adverse events) and encourage attendance. Missed doses are given immediately without restarting the primary series. Why the other options fail: option a restarts a series that does not need restarting, which wastes vaccine and gives children doses they do not need. Option b suspends the service that defaulters need in order to return. Option d treats a health-system problem as a community offence.",
    strategy: "EPI dropout management: A dropout rate > 10% requires active defaulter tracking through home visits by volunteers. Never restart missed vaccine series.",
    difficulty: "easy",
    tags: ["community-health", "epi", "immunization", "defaulter-tracing", "public-health"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-012",
    categorySlug: "maternal-newborn",
    stem: "A Community Health Officer performs a home visit on day 2 (36 hours post-delivery) to a mother who delivered at home. Which set of assessments must the nurse prioritize to prevent neonatal and maternal mortality?",
    choices: [
      {
        id: "a",
        text: "Give the mother a contraceptive and start the infant on cereal porridge, since breastfeeding alone is not enough by day 2",
      },
      {
        id: "b",
        text: "Advise the mother to stay indoors for 40 days without opening the windows, which protects her from cold and evil spirits",
      },
      {
        id: "c",
        text: "Bathe the newborn in cold herbal water, which hardens the skin and prevents rash in the first week",
      },
      {
        id: "d",
        text: "Assess the newborn's breathing, temperature, feeding and cord, and the mother's involution, lochia and blood pressure",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The first 48 hours postpartum carry the highest risk of neonatal and maternal mortality. Recommended postnatal home visits occur on day 1 (within 24 hours), day 3, day 7, and at 6 weeks. The CHO must examine the newborn for danger signs (tachypnoea > 60 bpm, chest indrawing, hypothermia < 36.5 °C, lethargy, poor sucking, cord bleeding/pus) and promote chlorhexidine 7.1% or clean dry cord care and exclusive breastfeeding. The mother is evaluated for postpartum haemorrhage, uterine tone, foul lochia, puerperal sepsis, and elevated blood pressure. Why the other options fail: option a adds a contraceptive and complementary food to a visit whose purpose is to find danger signs in the first 48 hours. Option b imposes a 40-day confinement without examining either patient. Option c applies cold herbal water to a newborn, which causes hypothermia rather than preventing rash.",
    strategy: "Postnatal home visit priorities: Evaluate maternal bleeding/uterus/BP and newborn breathing/temperature/breastfeeding/cord care.",
    difficulty: "easy",
    tags: ["community-health", "postnatal-care", "home-visiting", "maternal-newborn", "neonatal-danger-signs"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-013",
    categorySlug: "maternal-newborn",
    stem: "A 22-year-old mother attending a 6-week postnatal clinic exclusively breastfeeds her infant and requests a reliable modern family planning method. According to the WHO Medical Eligibility Criteria (MEC) for contraceptive use, which contraceptive choice is most appropriate?",
    choices: [
      {
        id: "a",
        text: "A progestogen-only injectable, implant or copper IUD, all of which are safe during exclusive breastfeeding",
      },
      {
        id: "b",
        text: "A combined oral contraceptive, started now, because oestrogen does not affect milk supply after 6 weeks",
      },
      {
        id: "c",
        text: "A combined transdermal patch, which avoids the liver and therefore the effect on breast milk",
      },
      {
        id: "d",
        text: "A monthly combined injectable, which gives steadier hormone levels than a daily pill",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "According to the WHO Medical Eligibility Criteria (MEC), estrogen-containing contraceptives (combined oral contraceptives, combined injectables, and contraceptive patches) are Category 4 (unacceptable health risk) in the first 3 weeks postpartum and Category 3 (risks outweigh benefits) between 3 weeks and 6 weeks (or 6 months if exclusively breastfeeding) because estrogens suppress breast milk volume and composition and increase venous thromboembolism risk. In contrast, progestin-only methods (DMPA injections, levonorgestrel/etonogestrel implants, progestin-only pills) and copper IUDs do not impair lactation and are MEC Category 1 or 2 at 6 weeks postpartum. Why the other options fail: option b is an oestrogen-containing method in a mother who is exclusively breastfeeding, where combined methods are not first-line. Option c wrongly assumes that a transdermal route spares lactation, when the oestrogen still enters the circulation. Option d is a combined method by another route, with the same objection.",
    strategy: "Contraception in breastfeeding mothers: Estrogen suppresses milk production (Category 3/4). Choose progestin-only methods (implants, DMPA, POPs) or copper IUDs.",
    difficulty: "medium",
    tags: ["community-health", "family-planning", "who-mec", "breastfeeding", "reproductive-health"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-014",
    categorySlug: "pediatrics",
    stem: "During an outreach growth monitoring session, a nurse assesses a 15-month-old child whose Mid-Upper Arm Circumference (MUAC) measures 11.1 cm (red band). The child is alert, has no bilateral pitting edema, has a normal body temperature, and eagerly eats Ready-to-Use Therapeutic Food (passed appetite test). How should this child be managed under the Community-based Management of Acute Malnutrition (CMAM) guidelines?",
    choices: [
      {
        id: "a",
        text: "Admit for inpatient stabilisation with intravenous dextrose, because a MUAC below 11.5 cm always requires admission",
      },
      {
        id: "b",
        text: "Enrol in the outpatient therapeutic programme: weekly RUTF, a 7-day course of oral amoxicillin, and weekly review",
      },
      {
        id: "c",
        text: "Give the mother a 2-week supply of fortified porridge and review the child at the next monthly clinic",
      },
      {
        id: "d",
        text: "Give a single dose of vitamin A and deworming and discharge, since the child has no oedema and is alert",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Under CMAM protocols, Severe Acute Malnutrition (SAM) is defined as MUAC < 11.5 cm (red) or weight-for-height Z-score < -3 SD or bilateral pitting edema. Children with SAM who are alert, clinically stable, have no medical complications, and pass the appetite test (eagerly consuming RUTF) are managed as outpatients in the Outpatient Therapeutic Programme (OTP). Management includes: weekly weight-based sachets of RUTF (Plumpy'Nut), a routine 7-day course of oral amoxicillin, single-dose deworming, Vitamin A (if not given in past month), and weekly clinic monitoring. Why the other options fail: option a admits a child who meets the criteria for outpatient care, which separates him from his family and uses a bed he does not need. Option c offers no therapeutic food and sets a review a month away. Option d gives micronutrients alone and treats severe acute malnutrition as if the problem were a deficiency.",
    strategy: "CMAM triage: SAM (MUAC < 11.5 cm) + PASSED appetite test + NO medical complications = Outpatient Therapeutic Programme (OTP) with RUTF.",
    difficulty: "medium",
    tags: ["community-health", "cmam", "muac", "severe-acute-malnutrition", "rutf"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-015",
    categorySlug: "pediatrics",
    stem: "A 2-year-old child brought to the CHPS compound has a MUAC of 10.8 cm, severe bilateral pitting edema extending to the knees and face (+3 edema / kwashiorkor), hypothermia (axillary temperature 35.2 °C), and refuses to eat any Ready-to-Use Therapeutic Food (failed appetite test). What is the nurse's immediate priority action?",
    choices: [
      {
        id: "a",
        text: "Give the mother two cartons of RUTF and ask her to feed the child by spoon every 2 hours at home, day and night",
      },
      {
        id: "b",
        text: "Give a rapid 20 mL/kg bolus of normal saline over 15 minutes to correct the hypovolaemia caused by oedema",
      },
      {
        id: "c",
        text: "Keep the child warm, give 10% glucose or sugar water, and refer urgently to an inpatient centre for F-75 feeding",
      },
      {
        id: "d",
        text: "Give oral amoxicillin and a vitamin A dose and review in 3 days, since the oedema will resolve with treatment",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Severe Acute Malnutrition (SAM) with complications (severe +3 edema, failed appetite test, hypothermia, lethargy, or severe infection) cannot be managed safely in the community. Such children have reductive adaptation, impaired hepatic/cardiac function, and are at high risk of sudden death from hypothermia, hypoglycaemia, and fluid overload. The CHO must warm the child (skin-to-skin or warm clothing), give 10% oral glucose or sugar water (50 mL) to prevent hypoglycaemia during transit, and immediately refer to an Inpatient Stabilization Center where feeding starts with starter formula F-75. Rapid IV fluid boluses are strictly contraindicated in kwashiorkor due to acute heart failure. Why the other options fail: option a sends a child who failed the appetite test home with food he will not eat. Option b gives a rapid bolus that is contraindicated in kwashiorkor, where the myocardium cannot tolerate a sudden volume load. Option d treats a complicated case as if it could be managed at home, and misses the hypothermia, oedema and failed appetite test that define a complication.",
    strategy: "SAM with complications: Failed appetite test or +3 edema = Inpatient Stabilization Center referral. Keep warm, give sugar water, NO rapid IV boluses.",
    difficulty: "medium",
    tags: ["community-health", "cmam", "kwashiorkor", "inpatient-stabilization", "pediatrics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-016",
    categorySlug: "health-promotion",
    stem: "During a community health screening durbar, an asymptomatic 54-year-old cocoa farmer has a blood pressure reading of 164/98 mmHg. The repeat reading after 15 minutes of rest is 162/96 mmHg. What lifestyle and clinical counseling should the community health nurse prioritize?",
    choices: [
      {
        id: "a",
        text: "Reassure him that a reading without symptoms needs no treatment, and repeat the measurement at the next annual screening",
      },
      {
        id: "b",
        text: "Give sublingual nifedipine to bring the pressure down at once, then discharge him without a review appointment",
      },
      {
        id: "c",
        text: "Advise him to stop drinking plain water and to take only small amounts of fluid, so that blood volume falls",
      },
      {
        id: "d",
        text: "Explain the reading, advise less salt and fewer bouillon cubes, more activity and no tobacco, and confirm the diagnosis within 2 weeks",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Hypertension is termed the 'silent killer' because it is usually asymptomatic until target-organ damage occurs (stroke, heart failure, chronic kidney disease). In West Africa, high dietary sodium from processed foods and bouillon seasoning cubes is a major contributor to hypertension. The nurse should explain the reading clearly, advise dietary modification (DASH approach, reducing sodium, increasing fruits/vegetables), smoking cessation, alcohol reduction, and regular exercise. The patient requires scheduled confirmatory re-evaluation within 1–2 weeks before establishing a formal diagnosis and pharmacological initiation. Why the other options fail: option a repeats the silent-killer error, treating the absence of symptoms as the absence of disease. Option b treats a raised reading with a single dose and removes the follow-up, which is the opposite of what the reading needs. Option c reduces fluid rather than sodium, which does not lower blood pressure and risks dehydration.",
    strategy: "Community hypertension screening: Educate on asymptomatic nature, promote dietary sodium reduction (bouillon cubes), and book confirmatory recheck.",
    difficulty: "easy",
    tags: ["community-health", "hypertension", "ncd", "health-promotion", "lifestyle-modification"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-017",
    categorySlug: "fundamentals",
    stem: "A public health nurse arrives at a client's home for a domiciliary visit carrying the standard community health nursing bag. How should the nurse execute the proper 'bag technique'?",
    choices: [
      {
        id: "a",
        text: "Place the bag on a clean barrier on a raised surface, clean your hands, take out only what is needed, and disinfect items before they go back",
      },
      {
        id: "b",
        text: "Place the bag on the floor beside the bed so that it does not soil the client's table, and wash your hands when you leave",
      },
      {
        id: "c",
        text: "Keep the bag open during care so that items can be reached quickly, and wipe the outside with a damp cloth afterwards",
      },
      {
        id: "d",
        text: "Put used dressings in the main compartment and dispose of them at the health centre, so that the household bin is not contaminated",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The community nursing bag is a vital tool that carries essential clinical instruments into home environments. Bag technique is an infection control procedure designed to prevent cross-contamination between households. Key principles: (1) place the bag on a clean plastic/paper barrier on an elevated dry surface (never directly on the floor); (2) perform hand hygiene before opening the bag; (3) extract only needed equipment onto a clean field; (4) used items (thermometer, scissors) must be cleaned and disinfected before returning to the bag; (5) contaminated biological waste is packaged separately and never placed inside the clean bag. Why the other options fail: option b puts a contaminated bag on the floor and cleans your hands only after you leave, so the next household is contaminated from the first touch. Option c leaves the bag open and wipes the outside afterwards, which does not clean the items inside it. Option d stores used dressings in the bag that carries clean equipment into the next home.",
    strategy: "Bag technique: Elevated surface + clean paper barrier + hand hygiene BEFORE opening bag + disinfect equipment before replacing.",
    difficulty: "easy",
    tags: ["community-health", "bag-technique", "home-visiting", "infection-control", "fundamentals"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-018",
    categorySlug: "health-promotion",
    stem: "The school health team conducts an annual health appraisal at a local basic school. During physical inspection, several pupils exhibit intensely itchy papules in the finger webs and wrists (scabies) and pale conjunctivae. Which comprehensive school health package should the nurse implement?",
    choices: [
      {
        id: "a",
        text: "Exclude affected pupils until the rash has cleared, and tell the assembly why, so that other parents are reassured",
      },
      {
        id: "b",
        text: "Give single-dose albendazole to all pupils, treat affected children and their households with permethrin, and tell parents privately",
      },
      {
        id: "c",
        text: "Treat only the pupils with visible lesions, since scabies spreads through direct contact and not through households",
      },
      {
        id: "d",
        text: "Spray the classrooms with insecticide while the pupils are seated, which kills the mites in the desks and floors",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "School health services provide screening, preventive treatment, health education, and a healthy school environment. Helminth infections cause iron-deficiency anaemia and cognitive impairment; routine school mass deworming with single-dose oral albendazole 400 mg (or mebendazole 500 mg) is standard. Scabies requires treating the affected pupils and all household members simultaneously with 5% permethrin cream (or benzyl benzoate) while washing and sun-drying bedclothes. Actions must preserve pupil dignity and confidentiality to avoid stigmatization and school dropouts. Why the other options fail: option a isolates children for a condition that is curable within a day and announces it publicly, which drives families away from treatment. Option c treats only the visible cases and leaves the household reservoir untreated, so reinfection follows. Option d sprays an insecticide into an occupied classroom, which does not kill mites living in skin and exposes children to a pesticide.",
    strategy: "School health: Annual mass deworming (albendazole 400 mg) + simultaneous household treatment for scabies + anti-stigma protection.",
    difficulty: "easy",
    tags: ["community-health", "school-health", "deworming", "scabies", "health-promotion"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-019",
    categorySlug: "maternal-newborn",
    stem: "During a home visit, a community nurse observes a grandmother applying a paste of cow dung, charcoal ash, and herbs onto a 4-day-old infant's umbilical cord stump to 'make the cord fall off faster.' What is the nurse's most effective culturally safe and life-saving intervention?",
    choices: [
      {
        id: "a",
        text: "Report the grandmother to the police for child abuse, and remove the infant from the family's care pending investigation",
      },
      {
        id: "b",
        text: "Leave the practice alone, because traditional cord care is a cultural right and challenging it would damage trust",
      },
      {
        id: "c",
        text: "Clean the cord with clean water, explain the tetanus risk, demonstrate clean dry cord care or chlorhexidine gel, and involve the grandmother",
      },
      {
        id: "d",
        text: "Tell the mother to keep the grandmother away from the infant, and give the family no further explanation",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Applying substances like cow dung, ash, or mud to the umbilical stump introduces Clostridium tetani spores, causing neonatal tetanus (trismus, inability to suck, spasms, and high mortality). The nurse must provide culturally sensitive health education without belittling elders: gently wash away the substance, educate the family on the link between unsterile applications and tetanus, demonstrate the proper use of 7.1% chlorhexidine digluconate gel (or clean dry cord care), and empower the grandmother by involving her in safe newborn care. Why the other options fail: option a turns a health problem into a criminal case before anyone has explained it, and removes the infant from the family. Option b leaves a practice that causes neonatal tetanus unchallenged in the name of culture. Option d separates the grandmother from the infant without teaching anyone, so the practice returns when the nurse leaves.",
    strategy: "Harmful traditional practices: Educate with cultural humility, clean the contamination, demonstrate safe alternatives (chlorhexidine), and partner with family elders.",
    difficulty: "medium",
    tags: ["community-health", "cord-care", "neonatal-tetanus", "cultural-safety", "health-education"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CHN-020",
    categorySlug: "leadership-delegation",
    stem: "An elderly widow living alone in a farming community is accused of witchcraft by neighbors after a child dies of cerebral malaria in the village. A mob threatens to expel her from her home. What is the community health nurse's legal, ethical, and professional responsibility?",
    choices: [
      {
        id: "a",
        text: "Persuade her to leave the village quietly for a few weeks, so that the tension settles without involving the authorities",
      },
      {
        id: "b",
        text: "Refer the case to the chief and elders and accept their ruling, since witchcraft accusations fall under customary law",
      },
      {
        id: "c",
        text: "Explain that the accusation is not a health matter and confine your role to treating the child's malaria",
      },
      {
        id: "d",
        text: "Protect her safety and rights, alert the police, assembly member and social welfare, and teach the community how malaria is transmitted",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Community health nurses are ethical advocates for human rights, vulnerable populations, and social justice. Witchcraft accusations in rural West Africa frequently target vulnerable, destitute elderly women with dementia, depression, or eccentricities. The nurse has a duty to protect the client by immediately contacting local law enforcement, community leadership (Chief, Assembly Member), and the Department of Social Welfare. Concurrently, the nurse conducts public health education explaining the medical etiology of illnesses like severe malaria, meningitis, and stroke to dismantle harmful supernatural scapegoating. Why the other options fail: option a removes the client from her home and rewards the accusation with her absence. Option b hands the case to customary arbitration, which cannot protect her from a mob. Option c confines the nurse to prescribing for malaria and abandons the advocacy duty that the threat makes immediate.",
    strategy: "Community advocacy: Protect vulnerable clients against human rights abuses, engage law enforcement/social welfare, and demystify illness etiology through health education.",
    difficulty: "medium",
    tags: ["community-health", "ethics", "advocacy", "vulnerable-populations", "human-rights"],
    isFree: true,
  },
];
