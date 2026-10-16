import type { AuthoredQuestion } from "./authored-bank";

/**
 * Dedicated NCLEX-style clinical scenario questions for Paediatric Nursing modules.
 * Authored specifically for Paediatric Nursing course modules to test authentic clinical
 * judgment, developmental stages, IMCI guidelines, neonatal resuscitation, emergency protocols,
 * and pediatric weight-based calculations.
 */
export const PAED_MODULE_SCENARIOS: AuthoredQuestion[] = [
  // =========================================================================
  // MODULE 01: GROWTH, DEVELOPMENT & FAMILY-CENTRED CARE
  // =========================================================================
  {
    authoredId: "NG-MOD-PAED-001",
    categorySlug: "pediatrics",
    stem: "During a routine 9-month well-child examination at the Child Welfare Clinic, a mother is concerned about her infant's developmental progress. Which developmental milestone, if ABSENT in a 9-month-old infant, requires immediate referral for formal developmental evaluation?",
    choices: [
      { id: "a", text: "Speaking three distinct two-syllable words with specific meaning" },
      { id: "b", text: "Sitting unsupported with steady head and trunk control" },
      { id: "c", text: "Walking independently while holding onto furniture" },
      { id: "d", text: "Building a tower of three small wooden blocks" }
    ],
    correctChoiceId: "b",
    rationale: "By 8 to 9 months of age, an infant should be able to sit unsupported without hand propping (tripod sitting is expected by 6 months; stable independent sitting by 8-9 months). Inability to sit steadily without support at 9 months represents a significant gross motor delay requiring immediate developmental and neurological evaluation. Walking independently (12–15 months), building a 3-block tower (15–18 months), and speaking multiple specific words (12 months) are developmental milestones expected at later stages.",
    strategy: "Recall key gross motor milestones: rolling at 4-5 months, sitting unsupported by 8-9 months, cruising/standing by 9-10 months, and independent walking by 12-15 months.",
    difficulty: "medium",
    tags: ["pediatrics", "growth-and-development", "milestones", "infancy", "assessment"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PAED-002",
    categorySlug: "pediatrics",
    stem: "A 2-year-old toddler is admitted to the paediatric ward for intravenous antibiotics. When the mother briefly leaves the bedside to speak with the doctor, the toddler screams violently, kicks the cot rails, and refuses to let the nurse approach. The nurse recognizes this behaviour as which phase of separation anxiety?",
    choices: [
      { id: "a", text: "Despair" },
      { id: "b", text: "Detachment (denial)" },
      { id: "c", text: "Protest" },
      { id: "d", text: "Regression" }
    ],
    correctChoiceId: "c",
    rationale: "Separation anxiety in toddlers typically progresses through three distinct phases: (1) Protest: crying loudly, screaming, kicking, clinging to parents, and rejecting stranger contact; (2) Despair: quiet, withdrawn, crying silently, depressed, and disinterested in toys or environment; and (3) Detachment (denial): superficial adjustment where the toddler interacts with caregivers but shows indifference or avoidance when the parent returns. Regression is a coping mechanism (e.g., bedwetting or demanding a bottle), not a primary stage of separation anxiety.",
    strategy: "Identify the active, aggressive behaviour (screaming, kicking, clinging) as the initial 'Protest' phase. Despair is passive sadness; Detachment is artificial indifference.",
    difficulty: "easy",
    tags: ["pediatrics", "hospitalized-child", "separation-anxiety", "toddler", "family-centred-care"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PAED-003",
    categorySlug: "health-promotion",
    stem: "A community health nurse evaluates the Road to Health (Child Health Record) growth chart of a 7-month-old infant. The chart indicates that the infant's weight-for-age curve was previously following the 50th percentile but has flattened horizontally over the past two monthly visits. What is the nurse's priority action?",
    choices: [
      { id: "a", text: "Reassure the mother that growth naturally plateaus during the second half of infancy" },
      { id: "b", text: "Perform a detailed feeding assessment, screen for recent illnesses, and counsel on energy-dense complementary foods" },
      { id: "c", text: "Immediately admit the infant to the inpatient nutritional stabilization centre" },
      { id: "d", text: "Advise the mother to discontinue breastfeeding and switch entirely to cow's milk formula" }
    ],
    correctChoiceId: "b",
    rationale: "A flat (horizontal) growth curve on the Road to Health chart indicates growth faltering (failure to gain weight), which is a critical early warning sign of impending undernutrition. The priority intervention is to take an in-depth nutritional history, assess the frequency, consistency, and energy density of complementary feeding (which begins around 6 months), screen for recent diarrhea or fever, and provide practical infant feeding counselling. Routine inpatient admission is reserved for severe acute malnutrition with complications. Discontinuing breastfeeding is contraindicated.",
    strategy: "Growth curve direction matters more than a single spot measurement. A horizontal curve indicates growth faltering requiring urgent diet assessment and feeding intervention before severe wasting develops.",
    difficulty: "medium",
    tags: ["pediatrics", "growth-chart", "nutrition", "complementary-feeding", "child-welfare"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 02: ESSENTIAL NEWBORN CARE & THE SMALL OR SICK BABY
  // =========================================================================
  {
    authoredId: "NG-MOD-PAED-004",
    categorySlug: "pediatrics",
    stem: "Immediately following vaginal delivery of a term neonate, the midwife dries the infant and provides tactile stimulation. The neonate remains apnoeic with a heart rate of 72 beats/minute on auscultation. Which action should the resuscitation team take FIRST?",
    choices: [
      { id: "a", text: "Initiate chest compressions at a 3:1 compression-to-ventilation ratio" },
      { id: "b", text: "Initiate positive-pressure ventilation (PPV) with a bag-mask device at 40 to 60 breaths/minute" },
      { id: "c", text: "Administer intravenous adrenaline (epinephrine) 1:10,000 via the umbilical vein" },
      { id: "d", text: "Apply high-flow blow-by oxygen at 10 L/minute" }
    ],
    correctChoiceId: "b",
    rationale: "According to the Neonatal Resuscitation Program (NRP) and WHO Helping Babies Breathe guidelines, if a newborn is gasping, apnoeic, or has a heart rate below 100 beats/minute after initial drying, warming, and positioning, the single most critical and immediate step is positive-pressure ventilation (PPV) with room air (21% O2 for term infants) at 40–60 breaths/min. Chest compressions are indicated ONLY if the heart rate remains below 60 beats/minute despite 30 seconds of effective positive-pressure ventilation with chest rise.",
    strategy: "Airway and effective ventilation are the cornerstone of newborn resuscitation. PPV is started when HR < 100 bpm; chest compressions are added only when HR remains < 60 bpm after effective ventilation.",
    difficulty: "hard",
    tags: ["pediatrics", "neonatal-resuscitation", "nrp", "airway", "newborn-care"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PAED-005",
    categorySlug: "pediatrics",
    stem: "A preterm neonate born at 33 weeks gestation weighing 1,600 grams is clinically stable and breathing spontaneously. The nurse initiates Kangaroo Mother Care (KMC). Which instruction should the nurse emphasize to the mother regarding safe KMC positioning?",
    choices: [
      { id: "a", text: "Keep the baby flat in a prone position with the neck flexed tightly against the mother's chest" },
      { id: "b", text: "Position the baby upright between the mother's breasts, skin-to-skin, with the head turned to one side and slightly extended" },
      { id: "c", text: "Dress the infant in two thick cotton shirts before securing the baby to the mother's chest" },
      { id: "d", text: "Maintain KMC for no more than 30 minutes at a time to prevent maternal fatigue" }
    ],
    correctChoiceId: "b",
    rationale: "Proper Kangaroo Mother Care (KMC) positioning requires placing the infant upright (vertical) between the maternal breasts with continuous skin-to-skin contact (infant dressed only in a nappy, cap, and socks). The baby's head must be turned to one side in a 'sniffing' position (slightly extended, neither hyperextended nor flexed) to keep the airway completely patent, with the hips and arms in a flexed 'frog' posture. Neck flexion obstructs the small infant's airway. KMC should be as continuous as possible (ideally 20+ hours/day).",
    strategy: "In newborn care, neck flexion compromises airway patency. The head must be turned to the side with slight neck extension to maintain an open airway.",
    difficulty: "medium",
    tags: ["pediatrics", "kangaroo-mother-care", "prematurity", "thermoregulation", "newborn"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-PAED-006",
    categorySlug: "pediatrics",
    stem: "A 2-day-old term neonate with ABO incompatibility develops significant scleral and facial jaundice. The serum total bilirubin is 290 mcmol/L (17 mg/dL), and phototherapy is initiated. Which nursing intervention is essential while the infant is undergoing phototherapy?",
    choices: [
      { id: "a", text: "Apply moisturizing oil to the infant's skin to prevent photo-induced drying" },
      { id: "b", text: "Cover the infant's eyes with opaque eye shields and leave only the diaper area covered" },
      { id: "c", text: "Turn off phototherapy during night hours to establish normal circadian rhythms" },
      { id: "d", text: "Restrict enteral feeds to reduce frequent loose greenish stools" }
    ],
    correctChoiceId: "b",
    rationale: "During phototherapy, maximum skin surface exposure is required to convert unconjugated bilirubin into water-soluble photo-isomers (lumirubin). The infant should wear only a small diaper. Opaque eye patches must be securely applied over closed eyes to prevent retinal damage from the blue light spectrum. Oils or lotions must never be applied because they can cause severe skin burns. Phototherapy should be continuous except during feeding, and enteral feeding should be encouraged to promote stooling and bilirubin excretion.",
    strategy: "Phototherapy essentials: Eye shields (retinal protection) + Maximum skin exposure (diaper only) + No oils/lotions (prevents burns) + Frequent feeding (clears bilirubin in stool).",
    difficulty: "medium",
    tags: ["pediatrics", "neonatal-jaundice", "phototherapy", "hyperbilirubinemia", "safety"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 03: EXPANDED PROGRAMME ON IMMUNISATION (EPI) & COLD CHAIN
  // =========================================================================
  {
    authoredId: "NG-MOD-PAED-007",
    categorySlug: "safety-infection-control",
    stem: "A public health nurse inspects the top-opening ice-lined vaccine refrigerator at a health centre. Which finding indicates a critical breach in vaccine cold-chain management requiring immediate corrective action?",
    choices: [
      { id: "a", text: "The internal thermometer reads 4.5 degrees Celsius" },
      { id: "b", text: "Pentavalent (DTP-HepB-Hib) vaccine vials are stored directly touching the ice-lining evaporator plates" },
      { id: "c", text: "Oral Polio Vaccine (OPV) is stored on the top shelf" },
      { id: "d", text: "Water bottles are stored in the bottom compartment to maintain thermal inertia" }
    ],
    correctChoiceId: "b",
    rationale: "Adsorbed vaccines containing aluminium adjuvants (such as Pentavalent, PCV, Td, and Hepatitis B) are freeze-sensitive and lose potency permanently if frozen. Placing these vials in direct contact with cold evaporator plates or frozen icepacks causes accidental freezing and adjuvant precipitation. Freeze-sensitive vaccines must be kept between +2°C and +8°C, buffered away from freezing zones. The 'shake test' is used to verify freeze damage. OPV and measles vaccines are heat-sensitive and tolerate freezing.",
    strategy: "Remember freeze-sensitive vs heat-sensitive vaccines: Pentavalent/PCV/Hepatitis B must NEVER freeze (keep away from freezer plates). OPV and Measles tolerate freezing but degrade with heat.",
    difficulty: "hard",
    tags: ["pediatrics", "cold-chain", "vaccines", "epi", "safety"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-PAED-008",
    categorySlug: "pediatrics",
    stem: "A mother brings her 10-week-old infant to the Child Welfare Clinic. Due to travel, the infant received only the birth doses (BCG and OPV 0) and has not received any 6-week vaccines. According to EPI catch-up guidelines, what should the nurse do?",
    choices: [
      { id: "a", text: "Restart the entire immunisation schedule from the birth doses" },
      { id: "b", text: "Administer the 6-week vaccines (Pentavalent 1, PCV 1, OPV 1, Rota 1) today and schedule the 10-week doses 4 weeks later" },
      { id: "c", text: "Administer both the 6-week and 10-week vaccines simultaneously in different limbs" },
      { id: "d", text: "Withhold all vaccines until the child reaches 14 weeks of age to align with the final scheduled doses" }
    ],
    correctChoiceId: "b",
    rationale: "In routine immunisation schedules, an interrupted or delayed schedule is never restarted; previous valid doses always count. The nurse should administer the overdue 6-week vaccines (Pentavalent 1, PCV 1, OPV 1, Rotavirus 1) today. The minimum recommended interval between sequential multi-dose vaccines (such as Pentavalent 1 and 2) is 4 weeks; therefore, the 10-week doses should be scheduled 4 weeks after today's administration.",
    strategy: "Golden rule of immunisation: NEVER restart a vaccine series due to a delay. Give the next due dose immediately and maintain the minimum interval (typically 4 weeks) before the subsequent dose.",
    difficulty: "medium",
    tags: ["pediatrics", "immunisation", "epi-schedule", "catch-up", "public-health"],
    isFree: true,
  },

  // =========================================================================
  // MODULE 04: IMCI, CHILDHOOD INFECTIONS & NUTRITION
  // =========================================================================
  {
    authoredId: "NG-MOD-PAED-009",
    categorySlug: "pediatrics",
    stem: "A 14-month-old child is brought to the outpatient clinic with high fever and cough. According to the Integrated Management of Childhood Illness (IMCI) guidelines, which clinical finding is categorized as a General Danger Sign requiring immediate urgent referral?",
    choices: [
      { id: "a", text: "Temperature of 39.2 degrees Celsius" },
      { id: "b", text: "Respiratory rate of 46 breaths/minute" },
      { id: "c", text: "Inability to drink or breastfeed" },
      { id: "d", text: "Maculopapular rash on the trunk" }
    ],
    correctChoiceId: "c",
    rationale: "According to IMCI guidelines, the four universal General Danger Signs in children aged 2 months to 5 years are: (1) Inability to drink or breastfeed, (2) Vomiting everything, (3) History of convulsions during the current illness, and (4) Abnormally sleepy, lethargic, or unconscious. The presence of ANY general danger sign classifies the child as having a very severe disease requiring urgent pre-referral treatment (e.g., initial antibiotic, rectal artesunate) and immediate hospital referral.",
    strategy: "Memorize the 4 IMCI General Danger Signs: Cannot drink/breastfeed, Vomits everything, Convulsions, and Lethargic/unconscious. Fast breathing alone without chest indrawing or danger signs is classified as pneumonia, not severe illness.",
    difficulty: "medium",
    tags: ["pediatrics", "imci", "danger-signs", "triage", "emergency"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PAED-010",
    categorySlug: "fluid-electrolyte",
    stem: "An 18-month-old child presents with watery diarrhoea and vomiting for 2 days. On examination, the child is lethargic, has deeply sunken eyes, and a skin pinch on the abdomen goes back very slowly (longer than 2 seconds). The child cannot drink fluids. What is the priority nursing intervention according to IMCI Plan C?",
    choices: [
      { id: "a", text: "Administer 75 mL/kg of oral rehydration salts (ORS) solution over 4 hours" },
      { id: "b", text: "Start intravenous Ringer's lactate 100 mL/kg immediately (30 mL/kg in the first 30 minutes, then 70 mL/kg over 2.5 hours)" },
      { id: "c", text: "Insert a nasogastric tube and administer ORS solution at 20 mL/kg/hour" },
      { id: "d", text: "Administer intramuscular loperamide and ondansetron" }
    ],
    correctChoiceId: "b",
    rationale: "The child exhibits classic signs of Severe Dehydration (lethargy, sunken eyes, skin pinch > 2 seconds, unable to drink), which falls under IMCI Plan C. Severe dehydration is a medical emergency requiring rapid intravenous fluid resuscitation with Ringer's lactate or normal saline at 100 mL/kg: for children aged 12 months to 5 years, give 30 mL/kg over 30 minutes, followed by 70 mL/kg over 2.5 hours. Oral rehydration (Plan B) is impossible because the lethargic child cannot drink.",
    strategy: "IMCI Dehydration classifications: Some dehydration (restless/irritable, drinks eagerly) = Plan B (ORS 75 mL/kg over 4 hours). Severe dehydration (lethargic, unable to drink, skin pinch > 2s) = Plan C (IV Ringer's lactate 100 mL/kg).",
    difficulty: "hard",
    tags: ["pediatrics", "dehydration", "fluid-electrolyte", "imci", "diarrhea"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-PAED-011",
    categorySlug: "pediatrics",
    stem: "A 2-year-old child with severe acute malnutrition is admitted to the nutritional stabilization unit with bilateral pitting oedema of the feet and lower legs, hair discoloration, and apathy. In the initial stabilization phase (Days 1 to 2), which clinical management rule must the nurse strictly adhere to?",
    choices: [
      { id: "a", text: "Administer high-protein, high-calorie catch-up feeds immediately to reverse wasting" },
      { id: "b", text: "Feed with F-75 therapeutic formula (low protein, low sodium) in small, frequent amounts day and night" },
      { id: "c", text: "Administer high-dose intravenous iron dextran to correct severe anaemia" },
      { id: "d", text: "Infuse rapid intravenous fluid boluses of 0.9% normal saline to expand circulating volume" }
    ],
    correctChoiceId: "b",
    rationale: "During the initial stabilization phase (Phase 1) of Severe Acute Malnutrition (SAM / Kwashiorkor), the child's metabolic systems are fragile with reduced sodium pumps and impaired hepatic/cardiac function. Starting high-protein feeds or rapid IV fluids causes fatal refeeding syndrome and acute heart failure. The child must be started on starter formula F-75 (75 kcal and 0.9 g protein per 100 mL), fed every 2 to 3 hours day and night to prevent hypoglycaemia and hypothermia. Iron supplementation is contraindicated in Phase 1 because free iron promotes bacterial proliferation.",
    strategy: "In SAM stabilization: F-75 first (NOT high-protein F-100 or solid food). NO iron in Phase 1. Prevent the 3 deadly H's: Hypoglycaemia, Hypothermia, and Heart failure.",
    difficulty: "hard",
    tags: ["pediatrics", "malnutrition", "kwashiorkor", "imci", "refeeding-syndrome"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-PAED-012",
    categorySlug: "pediatrics",
    stem: "A 10-month-old infant is brought to the clinic with fever and cough. The nurse counts the infant's respiratory rate for a full minute while the child is calm and finds it to be 54 breaths/minute. Chest inspection reveals lower chest wall indrawing, but no stridor is heard at rest. How should the nurse classify this child's condition under IMCI guidelines?",
    choices: [
      { id: "a", text: "No pneumonia: cough or cold" },
      { id: "b", text: "Pneumonia" },
      { id: "c", text: "Severe pneumonia or very severe disease" },
      { id: "d", text: "Acute bronchiolitis without respiratory distress" }
    ],
    correctChoiceId: "c",
    rationale: "Under IMCI guidelines, fast breathing thresholds are: >= 50 breaths/min for infants 2–11 months, and >= 40 breaths/min for children 12–59 months. Although this 10-month-old has fast breathing (54 bpm), the presence of chest indrawing (the lower chest wall moves IN when the child breathes in) automatically elevates the classification to 'Severe Pneumonia or Very Severe Disease'. This classification requires immediate urgent referral to hospital and an initial pre-referral dose of intramuscular/intravenous antibiotic (e.g., ampicillin plus gentamicin or ceftriaxone).",
    strategy: "IMCI Respiratory Hierarchy: Fast breathing only = Pneumonia (oral amoxicillin). Fast breathing + Chest indrawing OR stridor at rest OR danger sign = Severe Pneumonia (urgent pre-referral antibiotic and hospital admission).",
    difficulty: "medium",
    tags: ["pediatrics", "imci", "pneumonia", "respiratory", "assessment"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 05: PAEDIATRIC EMERGENCIES
  // =========================================================================
  {
    authoredId: "NG-MOD-PAED-013",
    categorySlug: "pediatrics",
    stem: "A 3-year-old boy is brought to the emergency department actively convulsing with generalized tonic-clonic activity that has lasted for 8 minutes. The child is febrile at 39.6 degrees Celsius. Which emergency nursing intervention is the HIGHEST priority?",
    choices: [
      { id: "a", text: "Insert a padded tongue blade between the teeth to protect the tongue from laceration" },
      { id: "b", text: "Place the child in a lateral recovery position, maintain airway patency, administer high-flow oxygen, and administer prescribed anticonvulsant (rectal diazepam or IV midazolam)" },
      { id: "c", text: "Submerge the child in an ice-water bath to rapidly reduce the body temperature" },
      { id: "d", text: "Restrain the child's limbs firmly to stop the motor jerking" }
    ],
    correctChoiceId: "b",
    rationale: "A seizure lasting longer than 5 minutes represents status epilepticus requiring immediate emergency termination. Priority nursing care includes positioning the child on their side (lateral recovery position) to maintain an open airway and prevent aspiration, administering high-flow oxygen, suctioning secretions gently, and administering first-line anticonvulsant therapy (e.g., rectal diazepam 0.5 mg/kg or IV/buccal midazolam). Never insert anything into the mouth (risk of tooth fracture and airway obstruction), never restrain the child, and never use cold/ice baths (causes shivering and peripheral vasoconstriction).",
    strategy: "Seizure management: Airway + Side-lying recovery position + Oxygen + Anticonvulsant (if > 5 min). Never put objects into the mouth and never restrain limbs.",
    difficulty: "easy",
    tags: ["pediatrics", "seizures", "status-epilepticus", "emergency", "airway"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PAED-014",
    categorySlug: "pediatrics",
    stem: "A 4-year-old child presents to the emergency room sitting upright in a 'tripod' position, leaning forward with neck hyperextended, drooling saliva, and demonstrating severe inspiratory stridor. The child is anxious and toxic-appearing. Which action is strictly CONTRAINDICATED?",
    choices: [
      { id: "a", text: "Inspecting the posterior pharynx using a tongue depressor to visualize the epiglottis" },
      { id: "b", text: "Allowing the parent to hold the child quietly while providing humidified blow-by oxygen" },
      { id: "c", text: "Alerting the anaesthetist and ENT surgeon for emergent airway management" },
      { id: "d", text: "Preparing emergency endotracheal intubation equipment" }
    ],
    correctChoiceId: "a",
    rationale: "The presentation (tripod position, drooling, dysphagia, distress, inspiratory stridor, high fever) is classic for acute epiglottitis (a medical airway emergency typically caused by Haemophilus influenzae type b or Streptococcus). Inspecting the throat with a tongue depressor or attempting invasive oral procedures can trigger sudden, fatal complete laryngospasm and airway closure. The nurse must keep the child calm in the parent's arms, avoid agitating procedures (no oral exams, no painful IV attempts until airway is secured), administer blow-by oxygen, and mobilize the airway team immediately.",
    strategy: "Suspected epiglottitis (drooling + tripod + stridor): NEVER use a tongue depressor or inspect the throat! Doing so triggers catastrophic complete airway obstruction.",
    difficulty: "hard",
    tags: ["pediatrics", "epiglottitis", "airway-emergency", "croup", "safety"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-PAED-015",
    categorySlug: "pediatrics",
    stem: "A 5-year-old child weighing 18 kg is admitted with severe sepsis, cool extremities, weak thready pulses, and a capillary refill time of 5 seconds. In accordance with Paediatric Advanced Life Support (PALS) shock resuscitation guidelines, what is the initial fluid bolus volume and infusion rate?",
    choices: [
      { id: "a", text: "90 mL of 5% Dextrose in water over 1 hour" },
      { id: "b", text: "360 mL of 0.9% Normal Saline or Ringer's Lactate infused rapidly over 10 to 20 minutes" },
      { id: "c", text: "1,800 mL of 0.45% Saline over 24 hours" },
      { id: "d", text: "180 mL of 20% Albumin over 4 hours" }
    ],
    correctChoiceId: "b",
    rationale: "In pediatric hypovolemic or septic shock, immediate fluid resuscitation requires 20 mL/kg of an isotonic crystalloid solution (0.9% Normal Saline or Ringer's Lactate) administered as a rapid intravenous/intraosseous push or pressure-bag infusion over 10 to 20 minutes. For an 18 kg child: 18 kg x 20 mL/kg = 360 mL. Dextrose solutions are contraindicated for volume resuscitation because rapid infusion causes osmotic diuresis and dangerous fluid shifts. The child must be reassessed immediately after the bolus for signs of fluid responsiveness or overload (hepatomegaly, crackles).",
    strategy: "PALS Shock Fluid Rule: 20 mL/kg of isotonic crystalloid (NS or LR) over 10–20 minutes. Calculate: 18 kg x 20 mL/kg = 360 mL.",
    difficulty: "medium",
    tags: ["pediatrics", "pals", "shock", "fluid-resuscitation", "emergency"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 06: CHRONIC AND LONG-TERM CONDITIONS OF CHILDHOOD
  // =========================================================================
  {
    authoredId: "NG-MOD-PAED-016",
    categorySlug: "pediatrics",
    stem: "A 10-month-old infant with diagnosed Tetralogy of Fallot begins crying vigorously after a blood draw and suddenly becomes intensely cyanotic, tachypnoeic, and agitated (hypercyanotic 'Tet' spell). Which action should the nurse perform FIRST?",
    choices: [
      { id: "a", text: "Place the infant in a knee-to-chest position" },
      { id: "b", text: "Administer intravenous digoxin" },
      { id: "c", text: "Initiate bag-mask ventilation with 100% oxygen" },
      { id: "d", text: "Infuse a 20 mL/kg bolus of normal saline" }
    ],
    correctChoiceId: "a",
    rationale: "During a hypercyanotic ('Tet') spell in Tetralogy of Fallot, infundibular spasm increases right-to-left shunting across the ventricular septal defect, causing severe hypoxaemia. The FIRST and most immediate nursing action is placing the child in the knee-to-chest position (or holding an older child in a deep squat). This increases systemic vascular resistance (afterload), which reverses the shunt by forcing deoxygenated blood through the pulmonary vasculature to be oxygenated. Subsequent steps include high-flow calm oxygen, subcutaneous/IV morphine, and IV fluid.",
    strategy: "Tet spell reflex action: KNEE-TO-CHEST position first. It immediately raises systemic vascular resistance, decreasing right-to-left shunting of deoxygenated blood into the aorta.",
    difficulty: "medium",
    tags: ["pediatrics", "tetralogy-of-fallot", "congenital-heart-disease", "tet-spell", "cardiac"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PAED-017",
    categorySlug: "pediatrics",
    stem: "An 8-year-old child with sickle cell disease (HbSS) is admitted with an acute vaso-occlusive crisis presenting with severe bilateral femur pain. Which nursing prescription is the MOST appropriate cornerstone of clinical care?",
    choices: [
      { id: "a", text: "Apply cold ice packs directly to the painful femurs to reduce local inflammation" },
      { id: "b", text: "Administer aggressive intravenous hydration and scheduled opioid analgesia around the clock" },
      { id: "c", text: "Enforce strict fluid restriction to prevent splenic sequestration" },
      { id: "d", text: "Administer PRN oral paracetamol only when the pain score exceeds 8 out of 10" }
    ],
    correctChoiceId: "b",
    rationale: "The cornerstone of managing an acute vaso-occlusive pain crisis in sickle cell disease is: (1) vigorous intravenous and oral hydration (typically 1.5 times maintenance) to decrease blood viscosity and prevent erythrocyte sickling in microvessels, and (2) prompt, aggressive analgesia using scheduled (around-the-clock) opioids (such as IV morphine) with adjuvant NSAIDs for severe pain. Ice packs or cold compresses are strictly contraindicated because cold causes vasoconstriction, worsening microvascular occlusion and infarction. Warm compresses are soothing and safe.",
    strategy: "Sickle cell vaso-occlusive crisis treatment: HOP = Hydration + Oxygen (if hypoxic) + Pain relief (scheduled opioids). Never apply cold/ice packs!",
    difficulty: "easy",
    tags: ["pediatrics", "sickle-cell", "vaso-occlusive-crisis", "pain-management", "haematology"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-PAED-018",
    categorySlug: "pediatrics",
    stem: "A 4-year-old child is admitted with massive generalized edema (anasarca), periorbital puffiness, frothy urine, and severe hypoalbuminaemia (serum albumin 18 g/L). Urinalysis reveals 4+ proteinuria without hematuria. The physician diagnoses primary nephrotic syndrome. Which potential complication is this child at greatest risk for during the active phase of the disease?",
    choices: [
      { id: "a", text: "Acute bacterial peritonitis and encapsulated bacterial infections" },
      { id: "b", text: "Severe polycythemia and hypercalcemia" },
      { id: "c", text: "Acute post-streptococcal hypertension crisis" },
      { id: "d", text: "Metabolic alkalosis secondary to hypokalemia" }
    ],
    correctChoiceId: "a",
    rationale: "Children with active nephrotic syndrome are highly vulnerable to life-threatening bacterial infections, particularly spontaneous bacterial peritonitis and pneumonia caused by encapsulated organisms like Streptococcus pneumoniae. This heightened susceptibility results from: (1) massive urinary loss of immunoglobulins (IgG) and complement proteins (factor B), (2) immunosuppressive corticosteroid therapy, and (3) ascites fluid acting as a culture medium. Prompt antibiotic therapy and pneumococcal vaccination are essential preventive measures.",
    strategy: "Nephrotic syndrome triad: Massive proteinuria, Hypoalbuminemia, and Severe edema. Greatest risk: Severe infection (loss of immunoglobulins in urine) and thromboembolism (loss of antithrombin III).",
    difficulty: "medium",
    tags: ["pediatrics", "nephrotic-syndrome", "renal", "infection-risk", "pediatric-complications"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 07: PAEDIATRIC PHARMACOLOGY & CALCULATIONS
  // =========================================================================
  {
    authoredId: "NG-MOD-PAED-019",
    categorySlug: "fluid-electrolyte",
    stem: "A 7-year-old child weighing 24 kg requires maintenance intravenous fluid therapy after abdominal surgery. Using the standard Holliday-Segar (100/50/20) formula, what is this child's total 24-hour maintenance fluid volume and corresponding hourly infusion rate?",
    choices: [
      { id: "a", text: "1,200 mL/day at 50 mL/hour" },
      { id: "b", text: "1,580 mL/day at 66 mL/hour" },
      { id: "c", text: "2,400 mL/day at 100 mL/hour" },
      { id: "d", text: "1,920 mL/day at 80 mL/hour" }
    ],
    correctChoiceId: "b",
    rationale: "Using the Holliday-Segar method for a 24 kg child: First 10 kg: 10 kg x 100 mL/kg = 1,000 mL. Next 10 kg (11-20 kg): 10 kg x 50 mL/kg = 500 mL. Remaining 4 kg (21-24 kg): 4 kg x 20 mL/kg = 80 mL. Total 24-hour maintenance volume = 1,000 + 500 + 80 = 1,580 mL/day. Hourly infusion rate = 1,580 mL / 24 hours = 65.8 mL/hour (rounds to 66 mL/hour). Using the 4-2-1 hourly rule gives: (10 x 4) + (10 x 2) + (4 x 1) = 40 + 20 + 4 = 64–66 mL/hour.",
    strategy: "Holliday-Segar calculation: 1st 10 kg = 1,000 mL; 2nd 10 kg = 500 mL; Each additional kg = 20 mL. For 24 kg: 1,000 + 500 + (4 x 20) = 1,580 mL/day (~66 mL/hr).",
    difficulty: "medium",
    tags: ["pediatrics", "fluid-calculations", "holliday-segar", "maintenance-fluids", "dosage-calculation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PAED-020",
    categorySlug: "pharmacology-parenteral",
    stem: "A physician prescribes oral amoxicillin suspension 45 mg/kg/day divided into three equal doses every 8 hours for a 4-year-old child weighing 16 kg who has acute otitis media. The pharmacy provides amoxicillin oral suspension labelled 250 mg/5 mL. How many millilitres should the nurse administer per dose?",
    choices: [
      { id: "a", text: "4.8 mL per dose" },
      { id: "b", text: "7.2 mL per dose" },
      { id: "c", text: "9.6 mL per dose" },
      { id: "d", text: "14.4 mL per dose" }
    ],
    correctChoiceId: "a",
    rationale: "Step 1: Calculate total daily dose: 16 kg x 45 mg/kg/day = 720 mg/day. Step 2: Divide into 3 equal doses (every 8 hours): 720 mg / 3 doses = 240 mg per dose. Step 3: Calculate liquid volume using formula (Desired / Have) x Volume: (240 mg / 250 mg) x 5 mL = 0.96 x 5 mL = 4.8 mL per dose.",
    strategy: "Always check whether the dose is total daily dose or per dose. Step 1: 16 x 45 = 720 mg/day. Step 2: 720 / 3 = 240 mg/dose. Step 3: (240 / 250) x 5 mL = 4.8 mL.",
    difficulty: "medium",
    tags: ["pediatrics", "pediatric-pharmacology", "dosage-calculation", "antibiotic", "safety"],
    isFree: false,
  },
];
