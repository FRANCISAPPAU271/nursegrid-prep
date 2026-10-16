import type { AuthoredQuestion } from "./authored-bank";

export const CHN_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-CHN-001",
    categorySlug: "gerontology-community",
    stem: "A newly appointed Community Health Officer (CHO) arrives at a rural community to establish primary healthcare activities at a new Community-based Health Planning and Services (CHPS) compound. What is the mandatory first step the nurse must undertake according to standard community entry protocols?",
    choices: [
      {
        id: "a",
        text: "Pay a formal courtesy visit to the Chief, council of elders, Queen Mother, Assembly Member, and Unit Committee to explain the mission and seek royal blessing and cooperation",
      },
      {
        id: "b",
        text: "Begin door-to-door immunization and clinical assessments immediately without informing local leadership",
      },
      {
        id: "c",
        text: "Organize an evening social party for youth in the village square to build quick rapport",
      },
      {
        id: "d",
        text: "Directly assemble community mothers at the market to distribute family planning commodities",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Community entry is the formal, socially accepted process of entering a community to initiate public health programmes. In Ghana and West African community health practice, the nurse must first pay a formal courtesy call on traditional authority figures (the Chief, elders, Queen Mother) alongside elected political representatives (Assembly Member, Unit Committee members). Bypassing traditional authority breaches cultural protocol, generates community distrust, and leads to resistance to health initiatives. Once permission, blessing, and partnership are secured, a community durbar is organized to introduce health staff to the wider community.",
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
        text: "Community ownership and intersectoral partnership, with community members actively planning, mobilizing local resources, and overseeing health facility operations",
      },
      {
        id: "b",
        text: "Sole clinical supervision of the nurse's medical prescriptions and diagnostic decisions",
      },
      {
        id: "c",
        text: "Collecting revenue exclusively to fund external political campaigns in the district",
      },
      {
        id: "d",
        text: "Serving as full-time paid hospital employees managing surgical operations",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Under the Alma-Ata declaration and the Ghana CHPS policy, Primary Health Care relies heavily on community participation and intersectoral collaboration. The Community Health Management Committee (CHMC) consists of respected, diverse community representatives (women leaders, youth representatives, elders, teachers). Their role is to foster community ownership, maintain the CHPS compound, mobilize communal labor and local resources, support community emergency transport systems (CETS), and provide liaison between community members and health staff.",
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
        text: "To systematically identify geographical boundaries, household locations, water sources, vulnerable groups, and community resources to plan targeted public health interventions",
      },
      {
        id: "b",
        text: "To assess property values for the district assembly to levy household taxes",
      },
      {
        id: "c",
        text: "To report illegal structures to municipal building code enforcement agencies",
      },
      {
        id: "d",
        text: "To determine which households should be excluded from free immunization services",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "A community profile and social mapping exercise is a participatory epidemiological assessment conducted by the Community Health Officer with community volunteers. It maps out geographical zones, household distribution, pregnant women, under-five children, water points, latrines, refuse dumps, and local resources. This enables the CHO to establish a functional household register, plan outreach routes, track defaulters, and prioritize high-risk families.",
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
        text: "Advocating for national policies and municipal legislation that ban trans-fats and enforce high taxes on tobacco and sugar-sweetened beverages",
      },
      {
        id: "b",
        text: "Administering the measles-rubella vaccine to infants at 9 months of age",
      },
      {
        id: "c",
        text: "Performing random blood glucose screening at a community health fair",
      },
      {
        id: "d",
        text: "Providing limb physical therapy and occupational rehabilitation for an elder after a cerebrovascular accident",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Primordial prevention targets the underlying economic, social, environmental, and behavioral conditions and policies to prevent the emergence and establishment of risk factors themselves (e.g., legislation banning trans-fats, taxing tobacco/sugary drinks, urban planning for sidewalks). Primary prevention prevents disease onset in individuals who already possess or are exposed to risk factors (e.g., vaccination, bed nets). Secondary prevention involves early detection and prompt treatment (e.g., screenings). Tertiary prevention aims to reduce disability and rehabilitate established illness.",
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
      "The Infant Mortality Rate (IMR) is defined as the number of deaths of infants under one year of age per 1,000 live births in a given population during a specific year. Formula: (Number of infant deaths under 1 year / Total live births) * 1,000. Here, (1,200 / 20,000) * 1,000 = 60 deaths per 1,000 live births. IMR is universally recognized as one of the most sensitive indicators of general community health, socioeconomic development, and healthcare system quality. (Note: Maternal Mortality Ratio uses a multiplier of 100,000).",
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
        text: "Isolate and rehydrate patients, notify the District Disease Control Officer immediately, establish a working case definition, and line-list cases by time, place, and person",
      },
      {
        id: "b",
        text: "Wait until at least 50 cases are admitted before creating an outbreak line list or alerting authorities",
      },
      {
        id: "c",
        text: "Immediately publish an alert on social media warning tourists to avoid the region",
      },
      {
        id: "d",
        text: "Discontinue clinical care to conduct environmental river inspections alone",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The initial steps in outbreak investigation demand parallel action: (1) provide immediate clinical care and infection control (rehydration and isolation), (2) notify the District Health Management Team (DHMT) within 24 hours, (3) verify the diagnosis with laboratory stool specimens (Cary-Blair medium), (4) establish a clear case definition, and (5) construct a line list characterizing cases by person (age, sex, occupation), place (hamlet, water source), and time (date and hour of onset) to construct an epidemic curve and identify the source of exposure.",
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
        text: "The 'walk of praise and shame' (transect walk) to open defecation sites, followed by placing fresh feces next to a plate of food to demonstrate fly transmission",
      },
      {
        id: "b",
        text: "Imposing heavy monetary police fines on households without completed water closets",
      },
      {
        id: "c",
        text: "Delivering a 2-hour formal lecture on micro-organisms using a textbook projector",
      },
      {
        id: "d",
        text: "Providing free government contractors to construct flush toilets for every resident",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Community-Led Total Sanitation (CLTS) is an innovative methodology for mobilizing communities to completely eliminate open defecation without external subsidies. The triggering process uses participatory rural appraisal tools: the transect walk ('walk of shame/praise') where villagers guide facilitators to open defecation areas, calculation of medical costs, feces calculation (tons produced annually), and the 'food and shit' demonstration where flies move from feces directly onto food. Triggering collective shame and disgust prompts the community to declare an emergency action plan to achieve Open Defecation Free (ODF) status using locally available materials.",
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
        text: "Bring water to a rolling boil for at least 1 minute, allow it to cool, and store it in a clean, covered, narrow-necked container with a dispensing tap or ladle",
      },
      {
        id: "b",
        text: "Leave water in an open bucket in the sun for 10 minutes to kill all cysts and helminth eggs",
      },
      {
        id: "c",
        text: "Strain water through a single layer of nylon mesh and drink immediately without chemical disinfection or boiling",
      },
      {
        id: "d",
        text: "Add kerosene drops to clear the sediment before serving to young infants",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Boiling water to a vigorous rolling boil for at least 1 minute (or 3 minutes at high altitudes) kills bacteria, viruses, and protozoan cysts (including Giardia and Cryptosporidium). Safe storage is equally vital to prevent recontamination: water must be stored in a clean, covered container with a narrow neck or a fitted tap. If wide-mouthed buckets are used, unwashed hands dipping cups into the water introduce pathogens. Water treatment without safe storage fails to interrupt the faecal-oral cycle.",
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
        text: "Remove all food, cooking utensils, and pets from the house, cover heavy furniture, remain outside for at least 2 hours after spraying, and avoid plastering or washing sprayed walls for 6 months",
      },
      {
        id: "b",
        text: "Wash down and scrub the sprayed internal walls with soap and water immediately after the team leaves",
      },
      {
        id: "c",
        text: "Keep all windows and doors tightly sealed for 48 hours without entering the compound",
      },
      {
        id: "d",
        text: "Repaint the walls with white latex paint within 24 hours to lock in the chemical",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Indoor Residual Spraying (IRS) applies a long-lasting insecticide to the interior walls and ceilings where endophilic Anopheles mosquitoes rest after a blood meal. Community preparation requires: (1) removing food, water, utensils, and animals; (2) moving heavy furniture to the center and covering it; (3) sweeping floors before spraying; (4) remaining outside for 2 hours post-spraying; and (5) critically, refraining from washing, scrubbing, plastering, or repainting sprayed walls for at least 6 months to maintain the residual insecticide deposit.",
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
        text: "The infant is exhibiting growth faltering (growth stagnation), which is an early danger signal requiring comprehensive feeding assessment and intervention",
      },
      {
        id: "b",
        text: "The infant's growth is optimal because the weight remains above the -2 SD malnutrition line",
      },
      {
        id: "c",
        text: "The infant is gaining excess adipose tissue and requires strict dietary calorie restriction",
      },
      {
        id: "d",
        text: "This represents normal physiological plateauing that requires no investigation or follow-up",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Growth monitoring evaluates the trajectory (trend) of growth over time, not merely a single point in time. A horizontal or downward curve on the growth chart signifies growth faltering (growth stagnation), which precedes clinical wasting or stunting. Even if the weight point is currently within the 'green' or normal zone, failure to gain weight over consecutive months indicates inadequate energy intake, recurrent subclinical infection (e.g., giardiasis, urinary infection), or poor complementary feeding. The nurse must explore complementary feeding practices, check for illness, and schedule a 2-week follow-up.",
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
        text: "Identify defaulters using the child register and mobile phone numbers, and coordinate with community health volunteers to conduct home-tracing visits to complete missed doses",
      },
      {
        id: "b",
        text: "Discontinue all outreach immunization sessions until mothers apologize for missing clinic dates",
      },
      {
        id: "c",
        text: "Restart the entire pentavalent immunization series from dose 1 for any child who missed a scheduled date",
      },
      {
        id: "d",
        text: "Report the community to the district police for failing to achieve national immunization targets",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "An EPI dropout rate (Penta 1 to Penta 3) exceeding 10% indicates poor service utilization, accessibility barriers, or loss to follow-up. National EPI protocols mandate active defaulter tracing using the clinic immunization register, appointment tickler files, and Community Health Volunteers (CHVs). CHVs trace caregivers at home to identify barriers (e.g., maternal illness, relocation, fear of adverse events) and encourage attendance. Missed doses are given immediately without restarting the primary series.",
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
        text: "Assess newborn breathing, temperature, breastfeeding latch, and umbilical cord stump, while checking maternal uterine involution, lochia flow, and blood pressure",
      },
      {
        id: "b",
        text: "Administer adult oral contraceptives to the mother and introduce infant cereal porridge",
      },
      {
        id: "c",
        text: "Collect payment for unregistered home delivery and advise the mother to stay indoors for 40 days without opening windows",
      },
      {
        id: "d",
        text: "Bathe the newborn in ice-cold herbal water to strengthen the infant's skin",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The first 48 hours postpartum carry the highest risk of neonatal and maternal mortality. Recommended postnatal home visits occur on day 1 (within 24 hours), day 3, day 7, and at 6 weeks. The CHO must examine the newborn for danger signs (tachypnoea > 60 bpm, chest indrawing, hypothermia < 36.5 °C, lethargy, poor sucking, cord bleeding/pus) and promote chlorhexidine 7.1% or clean dry cord care and exclusive breastfeeding. The mother is evaluated for postpartum haemorrhage, uterine tone, foul lochia, puerperal sepsis, and elevated blood pressure.",
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
        text: "Progestin-only injectable (DMPA), progestin subdermal implant, or copper intrauterine device (IUD)",
      },
      {
        id: "b",
        text: "Combined oral contraceptive (COC) pills containing ethinylestradiol and levonorgestrel",
      },
      {
        id: "c",
        text: "Combined transdermal contraceptive patch",
      },
      {
        id: "d",
        text: "Monthly combined injectable contraceptive (estrogen and progestin)",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "According to the WHO Medical Eligibility Criteria (MEC), estrogen-containing contraceptives (combined oral contraceptives, combined injectables, and contraceptive patches) are Category 4 (unacceptable health risk) in the first 3 weeks postpartum and Category 3 (risks outweigh benefits) between 3 weeks and 6 weeks (or 6 months if exclusively breastfeeding) because estrogens suppress breast milk volume and composition and increase venous thromboembolism risk. In contrast, progestin-only methods (DMPA injections, levonorgestrel/etonogestrel implants, progestin-only pills) and copper IUDs do not impair lactation and are MEC Category 1 or 2 at 6 weeks postpartum.",
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
        text: "Enroll in the Outpatient Therapeutic Programme (OTP) for home management with weekly Ready-to-Use Therapeutic Food (RUTF), a 7-day course of oral amoxicillin, and weekly follow-up",
      },
      {
        id: "b",
        text: "Immediately admit to an inpatient stabilization center (SC) for intensive intravenous dextrose resuscitation",
      },
      {
        id: "c",
        text: "Discharge home with standard family porridge and schedule review in 6 months",
      },
      {
        id: "d",
        text: "Administer high-dose intravenous furosemide to prevent congestive heart failure",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Under CMAM protocols, Severe Acute Malnutrition (SAM) is defined as MUAC < 11.5 cm (red) or weight-for-height Z-score < -3 SD or bilateral pitting edema. Children with SAM who are alert, clinically stable, have no medical complications, and pass the appetite test (eagerly consuming RUTF) are managed as outpatients in the Outpatient Therapeutic Programme (OTP). Management includes: weekly weight-based sachets of RUTF (Plumpy'Nut), a routine 7-day course of oral amoxicillin, single-dose deworming, Vitamin A (if not given in past month), and weekly clinic monitoring.",
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
        text: "Keep the child warm, provide initial 10% oral glucose/sugar water to prevent hypoglycaemia, and arrange urgent referral to an Inpatient Stabilization Center (SC) for F-75 therapeutic formula feeding",
      },
      {
        id: "b",
        text: "Give the mother two cartons of RUTF and instruct her to force-feed the child at home",
      },
      {
        id: "c",
        text: "Administer a rapid 20 mL/kg normal saline IV bolus over 15 minutes to wash out edema",
      },
      {
        id: "d",
        text: "Advise the mother that the swelling is normal puppy fat and discharge the child",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Severe Acute Malnutrition (SAM) with complications (severe +3 edema, failed appetite test, hypothermia, lethargy, or severe infection) cannot be managed safely in the community. Such children have reductive adaptation, impaired hepatic/cardiac function, and are at high risk of sudden death from hypothermia, hypoglycaemia, and fluid overload. The CHO must warm the child (skin-to-skin or warm clothing), give 10% oral glucose or sugar water (50 mL) to prevent hypoglycaemia during transit, and immediately refer to an Inpatient Stabilization Center where feeding starts with starter formula F-75. Rapid IV fluid boluses are strictly contraindicated in kwashiorkor due to acute heart failure.",
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
        text: "Explain the findings, recommend reducing salt and salted bouillon seasoning cubes, encourage daily physical activity, advise avoiding tobacco and excess alcohol, and schedule a confirmatory blood pressure evaluation within 1 to 2 weeks",
      },
      {
        id: "b",
        text: "Tell the farmer that asymptomatic high blood pressure is harmless and requires no dietary modification",
      },
      {
        id: "c",
        text: "Administer sublingual nifedipine immediately and send the patient home without review",
      },
      {
        id: "d",
        text: "Advise the farmer to stop drinking plain water to reduce blood volume",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Hypertension is termed the 'silent killer' because it is usually asymptomatic until target-organ damage occurs (stroke, heart failure, chronic kidney disease). In West Africa, high dietary sodium from processed foods and bouillon seasoning cubes is a major contributor to hypertension. The nurse should explain the reading clearly, advise dietary modification (DASH approach, reducing sodium, increasing fruits/vegetables), smoking cessation, alcohol reduction, and regular exercise. The patient requires scheduled confirmatory re-evaluation within 1–2 weeks before establishing a formal diagnosis and pharmacological initiation.",
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
        text: "Place the bag on a clean paper or plastic barrier laid over a flat elevated surface, perform hand hygiene before opening the bag, remove only needed items to a clean area, and disinfect equipment before returning it to the bag",
      },
      {
        id: "b",
        text: "Place the bag directly on the floor near the client's bed and wash hands only after leaving the home",
      },
      {
        id: "c",
        text: "Leave all scissors and thermometers inside the bag while performing wound dressings",
      },
      {
        id: "d",
        text: "Keep used dirty wound dressings inside the main compartment of the bag for disposal at the health center",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The community nursing bag is a vital tool that carries essential clinical instruments into home environments. Bag technique is an infection control procedure designed to prevent cross-contamination between households. Key principles: (1) place the bag on a clean plastic/paper barrier on an elevated dry surface (never directly on the floor); (2) perform hand hygiene before opening the bag; (3) extract only needed equipment onto a clean field; (4) used items (thermometer, scissors) must be cleaned and disinfected before returning to the bag; (5) contaminated biological waste is packaged separately and never placed inside the clean bag.",
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
        text: "Administer mass school deworming with single-dose oral albendazole (400 mg), treat affected pupils and their entire households simultaneously with topical permethrin, and notify parents discretely to preserve dignity",
      },
      {
        id: "b",
        text: "Publicly shame and isolate affected children in front of the school assembly to encourage cleanliness",
      },
      {
        id: "c",
        text: "Permanently expel all children with skin lesions from the school system",
      },
      {
        id: "d",
        text: "Spray the school classrooms with DDT pesticide while students are seated inside",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "School health services provide screening, preventive treatment, health education, and a healthy school environment. Helminth infections cause iron-deficiency anaemia and cognitive impairment; routine school mass deworming with single-dose oral albendazole 400 mg (or mebendazole 500 mg) is standard. Scabies requires treating the affected pupils and all household members simultaneously with 5% permethrin cream (or benzyl benzoate) while washing and sun-drying bedclothes. Actions must preserve pupil dignity and confidentiality to avoid stigmatization and school dropouts.",
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
        text: "Gently clean off the substances with clean water, explain the risk of neonatal tetanus, demonstrate clean dry cord care or 7.1% chlorhexidine gel application, and engage the grandmother respectfully as a key care partner",
      },
      {
        id: "b",
        text: "Arrest the grandmother immediately with local police for child abuse",
      },
      {
        id: "c",
        text: "Encourage the practice as an authentic traditional heritage custom and take no action",
      },
      {
        id: "d",
        text: "Instruct the mother to ignore the grandmother and lock the infant in a separate room",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Applying substances like cow dung, ash, or mud to the umbilical stump introduces Clostridium tetani spores, causing neonatal tetanus (trismus, inability to suck, spasms, and high mortality). The nurse must provide culturally sensitive health education without belittling elders: gently wash away the substance, educate the family on the link between unsterile applications and tetanus, demonstrate the proper use of 7.1% chlorhexidine digluconate gel (or clean dry cord care), and empower the grandmother by involving her in safe newborn care.",
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
        text: "Advocate for the client's safety and human rights, alert the local police, Assembly Member, and Social Welfare Department, and provide health education explaining the biological causes of cerebral malaria to dispel supernatural myths",
      },
      {
        id: "b",
        text: "Agree with the community mob and assist in evicting the widow to maintain popularity on the unit",
      },
      {
        id: "c",
        text: "Remain silent because traditional spiritual beliefs fall completely outside the nurse's professional mandate",
      },
      {
        id: "d",
        text: "Advise the widow to confess to the accusations to appease the community leaders",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Community health nurses are ethical advocates for human rights, vulnerable populations, and social justice. Witchcraft accusations in rural West Africa frequently target vulnerable, destitute elderly women with dementia, depression, or eccentricities. The nurse has a duty to protect the client by immediately contacting local law enforcement, community leadership (Chief, Assembly Member), and the Department of Social Welfare. Concurrently, the nurse conducts public health education explaining the medical etiology of illnesses like severe malaria, meningitis, and stroke to dismantle harmful supernatural scapegoating.",
    strategy: "Community advocacy: Protect vulnerable clients against human rights abuses, engage law enforcement/social welfare, and demystify illness etiology through health education.",
    difficulty: "medium",
    tags: ["community-health", "ethics", "advocacy", "vulnerable-populations", "human-rights"],
    isFree: true,
  },
];
