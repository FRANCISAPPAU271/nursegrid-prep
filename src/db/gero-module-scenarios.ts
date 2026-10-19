import type { AuthoredQuestion } from "./authored-bank";

export const GERO_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-GERO-001",
    categorySlug: "gerontology-community",
    stem: "An 82-year-old female resident of a nursing home is brought to the clinic because she suddenly became confused, disoriented to time, and experienced two uncharacteristic falls yesterday. She has no fever (oral temperature 36.6 °C), no cough, and denies pain. The nurse notes mild suprapubic tenderness and foul-smelling urine. What physiological reality of ageing best explains this presentation?",
    choices: [
      {
        id: "a",
        text: "Age-related decline in immune and thermoregulatory reserves leads to atypical presentations of infection, where acute delirium and falls often manifest before fever or localizing symptoms",
      },
      {
        id: "b",
        text: "The patient is experiencing normal, expected cognitive deterioration inherent to chronological ageing",
      },
      {
        id: "c",
        text: "The patient is feigning confusion to receive extra attention from nursing staff",
      },
      {
        id: "d",
        text: "A normal body temperature of 36.6 °C completely excludes any systemic bacterial infection",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "A hallmark of geriatric medicine is atypical presentation of illness. In older adults, blunted hypothalamic thermoregulation, decreased interleukin/cytokine response, and diminished physiological reserve often prevent the development of a classic febrile response. Consequently, common infections (such as urinary tract infections or pneumonia) frequently present without fever or tachypnoea, instead manifesting as acute delirium, functional decline, anorexia, lethargy, or new-onset falls ('off legs'). The nurse must recognize sudden acute confusion in an elder as an emergency medical trigger until proven otherwise.",
    strategy: "Atypical presentation in elders: Blunted febrile response means infections often present as acute delirium, functional decline, or falls rather than fever.",
    difficulty: "easy",
    tags: ["gerontology", "atypical-presentation", "delirium", "urinary-tract-infection", "ageing-physiology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-002",
    categorySlug: "gerontology-community",
    stem: "A nurse is communicating with an 86-year-old hospitalized client who has moderate presbycusis (age-related sensorineural hearing loss). Which communication approach by the nurse is therapeutic and respectful, avoiding ageist 'elderspeak'?",
    choices: [
      {
        id: "a",
        text: "Use a high-pitched, sing-song voice and refer to the client as 'sweetie' and 'grandma' to comfort them",
      },
      {
        id: "b",
        text: "Face the client directly at eye level in good lighting, minimize background noise, speak clearly in a normal conversational volume with a lower pitch, and confirm understanding",
      },
      {
        id: "c",
        text: "Shout loudly directly into the client's ear canal while standing behind them",
      },
      {
        id: "d",
        text: "Direct all communication exclusively to the client's adult children without addressing the client",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Presbycusis involves progressive loss of high-frequency hearing and impaired speech discrimination. Shouting or using high-pitched sing-song tones ('elderspeak') actually distorts sound frequencies and is patronizing, causing diminished self-esteem. Therapeutic communication requires facing the patient directly so visual lip-reading cues can assist, ensuring good lighting, reducing ambient noise, and speaking clearly in a deeper (lower-pitched), normal-volume voice. Elderspeak (e.g., using terms like 'sweetie', 'honey', using collective pronouns like 'did we take our pills?') is an insidious form of ageism associated with increased resistance to care.",
    strategy: "Geriatric communication: Face directly at eye level, reduce ambient noise, lower voice pitch (not volume/shouting), and NEVER use patronizing elderspeak.",
    difficulty: "easy",
    tags: ["gerontology", "communication", "presbycusis", "elderspeak", "ageism"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-003",
    categorySlug: "gerontology-community",
    stem: "During a comprehensive geriatric assessment, the community health nurse evaluates an 80-year-old client living alone. The nurse distinguishes between Activities of Daily Living (ADLs) and Instrumental Activities of Daily Living (IADLs). Which task is classified as an IADL?",
    choices: [
      {
        id: "a",
        text: "Transferring independently from a bed into an armchair",
      },
      {
        id: "b",
        text: "Bathing oneself safely in the shower",
      },
      {
        id: "c",
        text: "Managing financial affairs, balancing a chequebook, and handling monthly utility bills",
      },
      {
        id: "d",
        text: "Maintaining urinary and fecal continence",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Basic Activities of Daily Living (ADLs, measured by the Katz Index) encompass fundamental self-care tasks essential for survival: bathing, dressing, toileting, transferring, continence, and feeding. In contrast, Instrumental Activities of Daily Living (IADLs, measured by the Lawton scale) require higher-order executive functioning and neuropsychological integration to live independently in the community: managing finances, using the telephone, shopping, meal preparation, housekeeping, laundry, transportation, and managing medications. Loss of IADLs typically occurs before loss of basic ADLs in progressive cognitive decline.",
    strategy: "ADLs vs IADLs: Basic ADLs = fundamental self-care (bathing, feeding, toileting). IADLs = community living skills (finances, cooking, phone, medications).",
    difficulty: "easy",
    tags: ["gerontology", "geriatric-assessment", "adls", "iadls", "functional-assessment"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-004",
    categorySlug: "gerontology-community",
    stem: "The nurse performs a Timed Up and Go (TUG) test to evaluate mobility and fall risk in a 78-year-old client. The client takes 19 seconds to rise from an armchair, walk 3 meters, turn, walk back, and sit down. How should the nurse interpret this result, and what intervention is indicated?",
    choices: [
      {
        id: "a",
        text: "A time of 19 seconds represents superior athletic agility; discharge without walking aids",
      },
      {
        id: "b",
        text: "The test indicates severe paralysis; immediately place the client on total bed rest with bilateral wrist restraints",
      },
      {
        id: "c",
        text: "The test is invalid unless repeated exactly 10 times consecutively on the same morning",
      },
      {
        id: "d",
        text: "A completion time greater than 12 seconds indicates high fall risk; initiate a multifactorial fall prevention bundle including medication review, physical therapy for balance, and home hazard modification",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The Timed Up and Go (TUG) test is a validated clinical screening tool for balance, gait speed, and fall risk in older adults. Most community-dwelling older adults complete the TUG in under 10–12 seconds. A score of >= 12 seconds (or >= 14 seconds depending on guideline cutoff) indicates clinically significant gait instability, frailty, and high risk of falling. Interventions must be multifactorial: comprehensive medication review (especially psychotropics and antihypertensives), referral to physical therapy for balance/strength training, environmental hazard abatement (loose rugs, grab bars), and proper walking aid fitting.",
    strategy: "TUG test: Scores >= 12 seconds indicate high fall risk requiring a multifactorial fall prevention bundle. Never restrict mobility with bed rest.",
    difficulty: "medium",
    tags: ["gerontology", "fall-risk", "tug-test", "mobility", "fall-prevention"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-005",
    categorySlug: "gerontology-community",
    stem: "An 84-year-old client has experienced an unintentional weight loss of 6 kg (8% of body weight) over the past 3 months. Physical examination reveals temporal hollowing, prominent clavicles, and reduced handgrip strength, confirming sarcopenia. Which dietary strategy should the gerontological nurse prioritize?",
    choices: [
      {
        id: "a",
        text: "Provide high-protein (1.2 to 1.5 g/kg/day), energy-dense small frequent meals, incorporate oral nutritional supplements between meals, and address dental/chewing barriers",
      },
      {
        id: "b",
        text: "Prescribe strict calorie restriction and low-protein vegetarian broths to protect renal glomeruli",
      },
      {
        id: "c",
        text: "Immediately insert a permanent percutaneous endoscopic gastrostomy (PEG) feeding tube without attempting oral feeding",
      },
      {
        id: "d",
        text: "Advise the client to drink 2 liters of plain water before each meal to expand stomach volume",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Involuntary weight loss and sarcopenia in older adults lead to immune dysfunction, pressure injuries, fall-related fractures, and increased mortality. Age-related anabolic resistance requires higher protein intake (1.2–1.5 g/kg/day in older adults with acute or chronic illness, compared to 0.8 g/kg in younger adults) along with progressive resistance exercises. Strategies include: energy- and protein-dense foods (eggs, milk, groundnut paste, fish), small frequent meals, pleasant dining environments, oral nutritional supplements between meals (so appetite for regular meals is not blunted), and inspecting the oral cavity for poorly fitting dentures or stomatitis.",
    strategy: "Geriatric malnutrition & sarcopenia: Higher protein needs (1.2-1.5 g/kg/day) + small frequent energy-dense meals + check oral/denture health.",
    difficulty: "medium",
    tags: ["gerontology", "nutrition", "sarcopenia", "weight-loss", "frailty"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-006",
    categorySlug: "mental-health",
    stem: "A gerontological nurse evaluates an older client brought to the memory clinic. Which clinical feature best distinguishes DELIRIUM from DEMENTIA and DEPRESSION (the 3 Ds)?",
    choices: [
      {
        id: "a",
        text: "Insidious onset (months to years) with progressive memory loss and clear consciousness throughout early stages",
      },
      {
        id: "b",
        text: "Acute onset (hours to days) with a fluctuating course, marked inattention, and altered level of consciousness triggered by an underlying medical condition",
      },
      {
        id: "c",
        text: "Subacute onset accompanied by prominent feelings of worthlessness, slowed speech, and answering 'I don't know' on cognitive tests",
      },
      {
        id: "d",
        text: "Permanent irreversible brain atrophy that never resolves with treatment",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Differentiating the '3 Ds' is critical in gerontological nursing: Delirium has an ACUTE onset (hours to days), a fluctuating course throughout the day, altered level of consciousness (hyperactive, hypoactive, or mixed), severe inattention, and is a medical emergency caused by reversible underlying physiological insults (infection, medications, hypoxia, electrolyte shifts). In contrast, Dementia has an INSIDIOUS, gradual onset (months to years), progressive decline in memory and executive function, with preserved alertness until late stages. Depression has a subacute onset, prominent dysphoria, vegetative signs, and clients often answer cognitive questions with 'I don't know' (pseudodementia).",
    strategy: "The 3 Ds: Delirium = Acute + Fluctuating + Altered consciousness/inattention. Dementia = Insidious + Progressive + Clear consciousness.",
    difficulty: "easy",
    tags: ["gerontology", "delirium", "dementia", "depression", "3-ds"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-007",
    categorySlug: "gerontology-community",
    stem: "A 79-year-old client 2 days post-repair of a fractured neck of femur develops acute hyperactive delirium, attempting to climb out of bed and pulling at the IV cannula. Which nursing intervention is most appropriate and evidence-based?",
    choices: [
      {
        id: "a",
        text: "Apply bilateral wrist restraints tightly to the bed rails to prevent dislodging lines",
      },
      {
        id: "b",
        text: "Administer high-dose intravenous lorazepam every 2 hours without investigating underlying physiological triggers",
      },
      {
        id: "c",
        text: "Assign a continuous one-on-one companion, provide gentle reorientation, ensure sensory aids (glasses and hearing aids) are in place, treat pain and urinary retention, and avoid physical restraints",
      },
      {
        id: "d",
        text: "Turn off all room lights and close the door completely to isolate the client from stimulation",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Physical restraints are strictly contraindicated as first-line management in delirium; they increase agitation, injury, strangulation, pressure ulcers, and functional decline. Evidence-based delirium care prioritizes multicomponent non-pharmacological interventions: one-on-one observation/family presence, frequent gentle reorientation, using sensory aids (glasses, hearing aids), early mobilization, optimizing hydration, assessing for constipation or urinary retention, treating uncontrolled pain (a major delirium driver), and avoiding deliriogenic medications (such as benzodiazepines and anticholinergics).",
    strategy: "Delirium management: NEVER restrain (escalates agitation). Reorient, place glasses/hearing aids, treat pain/retention, ensure continuous companion.",
    difficulty: "medium",
    tags: ["gerontology", "delirium", "restraint-reduction", "post-op-care", "non-pharmacological"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-008",
    categorySlug: "mental-health",
    stem: "A family caring for an 83-year-old relative with moderate Alzheimer's disease at home reports that every evening around sunset, the client becomes severely agitated, paces restlessly, attempts to leave the house, and experiences hallucinations (sundowning syndrome). Which environmental strategy should the nurse recommend?",
    choices: [
      {
        id: "a",
        text: "Keep the client in bed all day in a dark room so they will sleep through the evening",
      },
      {
        id: "b",
        text: "Give the client caffeinated beverages in the late afternoon to keep them alert",
      },
      {
        id: "c",
        text: "Confront and argue with the client's hallucinations to re-establish objective reality",
      },
      {
        id: "d",
        text: "Maximize daytime sunlight exposure, maintain a predictable daily routine, turn on indoor lights before dusk, and create a calm evening environment with soothing music and reduced noise",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Sundowning is a circadian rhythm disruption common in dementia, characterized by worsening confusion, agitation, and motor restlessness in the late afternoon and evening. Effective non-pharmacological interventions include: (1) maximizing exposure to bright natural sunlight in the morning to stabilize the circadian pacemaker; (2) maintaining a consistent, structured daily schedule for meals, exercise, and activities; (3) turning on indoor lighting before sunset to prevent shadows and perceptual illusions; (4) minimizing evening noise and visitors; and (5) avoiding caffeine or daytime napping. Arguing with hallucinations triggers catastrophic emotional reactions.",
    strategy: "Sundowning interventions: Morning sunlight, turn on lights BEFORE sunset, structured routine, calm quiet evening, avoid confrontation.",
    difficulty: "easy",
    tags: ["gerontology", "alzheimers", "sundowning", "dementia", "circadian-rhythm"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-009",
    categorySlug: "pharmacology-parenteral",
    stem: "A 76-year-old client is started on amlodipine for hypertension. Three weeks later, the client develops bilateral dependent ankle edema. Instead of recognizing this as a common calcium channel blocker side effect, the provider diagnoses new heart failure and adds furosemide. Furosemide induces hypokalaemia and orthostatic hypotension, causing the client to fall and fracture a wrist. What geriatric pharmacological concept does this scenario represent?",
    choices: [
      {
        id: "a",
        text: "The prescribing cascade",
      },
      {
        id: "b",
        text: "Tachyphylaxis",
      },
      {
        id: "c",
        text: "Idiosyncratic allergic reaction",
      },
      {
        id: "d",
        text: "First-pass bioequivalence failure",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "A prescribing cascade occurs when an adverse drug effect is misinterpreted as a new, unrelated medical condition, prompting the prescription of a second medication to treat the side effect of the first. The second drug exposes the vulnerable older adult to additional adverse effects and drug interactions (e.g., amlodipine peripheral vasodilation edema -> furosemide added -> hypokalaemia/dehydration -> orthostatic fall). The gerontological nurse must always consider: 'Could this new symptom be an adverse effect of an existing medication?' before accepting a new diagnosis and additional prescriptions.",
    strategy: "Prescribing cascade: When a drug side effect is misdiagnosed as a new illness and treated with another drug. Always review the drug chart first.",
    difficulty: "easy",
    tags: ["gerontology", "polypharmacy", "prescribing-cascade", "medication-safety", "pharmacology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-010",
    categorySlug: "gerontology-community",
    stem: "An 85-year-old client reports chronic insomnia. The nurse reviews the discharge medication list and notes a new prescription for diazepam 5 mg at bedtime. According to the Beers Criteria for Potentially Inappropriate Medication Use in Older Adults, why is this prescription dangerous?",
    choices: [
      {
        id: "a",
        text: "Diazepam causes immediate, irreversible renal cortical necrosis in older adults",
      },
      {
        id: "b",
        text: "Long-acting benzodiazepines have prolonged half-lives in older adults due to increased volume of distribution and decreased hepatic clearance, causing severe daytime sedation, ataxia, cognitive impairment, and hip fractures",
      },
      {
        id: "c",
        text: "Benzodiazepines are rapidly metabolized in older adults, rendering them completely ineffective",
      },
      {
        id: "d",
        text: "Diazepam produces severe acute hyperthermia and malignant hypertension",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The Beers Criteria strongly advises against using benzodiazepines (especially long-acting agents like diazepam, flurazepam, or chlordiazepoxide) for insomnia in older adults. Age-related changes in body composition (increased proportion of body fat, decreased body water) expand the volume of distribution for lipid-soluble drugs, while reduced hepatic cytochrome P450 oxidation dramatically prolongs elimination half-lives (diazepam's half-life can exceed 100 hours in frail elders). This leads to accumulation, prolonged hangover sedation, impaired motor coordination, confusion, and more than a twofold increased risk of falls and hip fractures.",
    strategy: "Beers criteria & benzodiazepines: Lipid-soluble long-acting drugs linger for days in older bodies, causing daytime ataxia, confusion, and hip fractures.",
    difficulty: "medium",
    tags: ["gerontology", "beers-criteria", "benzodiazepines", "polypharmacy", "fall-risk"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-011",
    categorySlug: "pharmacology-parenteral",
    stem: "An 88-year-old frail female weighing 42 kg has a serum creatinine of 0.8 mg/dL (within normal lab reference limits). The physician prescribes a standard full-dose regimen of enoxaparin. Why must the gerontological nurse question this order and calculate the estimated creatinine clearance (CrCl)?",
    choices: [
      {
        id: "a",
        text: "A serum creatinine of 0.8 mg/dL always reflects hyperactive, superior renal filtration",
      },
      {
        id: "b",
        text: "Enoxaparin is solely eliminated by hepatic biliary excretion and unaffected by kidney function",
      },
      {
        id: "c",
        text: "In frail older adults with reduced skeletal muscle mass (sarcopenia), serum creatinine is falsely low despite significant age-related decline in glomerular filtration, masking severe renal impairment",
      },
      {
        id: "d",
        text: "Normal creatinine values indicate that the client requires twice the standard therapeutic dose",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Creatinine is an endogenous breakdown product of skeletal muscle. In frail, sarcopenic older adults, muscle mass is markedly reduced; therefore, baseline creatinine production is very low. Even when Glomerular Filtration Rate (GFR) drops by 50% or more due to normal renal ageing, serum creatinine may remain within 'normal' reference limits (e.g., 0.8 mg/dL). Clinicians who rely solely on serum creatinine overlook severe renal impairment. Calculating CrCl using the Cockcroft-Gault formula reveals the true impairment, avoiding fatal accumulation of renally cleared drugs like enoxaparin, digoxin, and aminoglycosides.",
    strategy: "Geriatric renal clearance: Sarcopenia masks renal impairment with falsely normal serum creatinine. Always calculate CrCl (Cockcroft-Gault) for drug dosing.",
    difficulty: "hard",
    tags: ["gerontology", "pharmacology", "renal-clearance", "sarcopenia", "creatinine-clearance"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-012",
    categorySlug: "gerontology-community",
    stem: "During a routine home visit to a bedridden 82-year-old elder, the community nurse observes that the client is emaciated, wearing heavily soiled clothing, has two unstageable sacral pressure injuries covered in dry feces, and has an empty water cup out of reach. The primary family caregiver appears overwhelmed, hostile, and admits to using the elder's monthly pension for personal gambling. What is the nurse's legal and professional responsibility?",
    choices: [
      {
        id: "a",
        text: "Ignore the situation because family domestic care is strictly private and protected from health worker interference",
      },
      {
        id: "b",
        text: "Confront the caregiver with verbal insults and physically remove the elder without official authorization",
      },
      {
        id: "c",
        text: "Advise the caregiver to lock the elder in a back bedroom to avoid social embarrassment",
      },
      {
        id: "d",
        text: "Provide immediate wound care and hydration, document all objective physical and environmental findings in detail, and report suspected elder neglect and financial exploitation to the Social Welfare Department and protective authorities",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Nurses have a legal, ethical, and professional duty as mandated reporters of suspected elder abuse and neglect. The physical signs (multiple severe pressure ulcers, fecal soiling, emaciation, dehydration) demonstrate severe neglect (the failure of a caregiver to provide necessary food, shelter, hygiene, or medical care). Diverting the client's pension constitutes financial exploitation. The nurse's immediate actions are: (1) provide emergency clinical stabilization (first aid, wound cleansing, hydration); (2) objectively photograph (with consent) and document injuries; and (3) notify the Department of Social Welfare and adult protective authorities.",
    strategy: "Elder abuse & neglect: Mandated reporting obligation. Provide immediate clinical care -> Document objective findings -> Report to Social Welfare.",
    difficulty: "easy",
    tags: ["gerontology", "elder-abuse", "neglect", "social-welfare", "ethics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-013",
    categorySlug: "leadership-delegation",
    stem: "An 80-year-old alert client with Parkinson's disease has mild gait freezing and a moderate fall risk. The client's adult son demands that the nursing staff keep his father in a wheelchair with a seat belt at all times. The client states clearly, 'I want to walk to the dining room using my rollator walker; it keeps my legs alive.' How should the nurse resolve this ethical tension between autonomy and beneficence?",
    choices: [
      {
        id: "a",
        text: "Respect the client's autonomous choice, conduct a collaborative risk-enablement assessment, implement safety measures (physical therapy supervision, non-skid footwear), and educate the son that restraining a capacitous adult is unlawful",
      },
      {
        id: "b",
        text: "Follow the son's instructions and lock the wheelchair belt because family wishes override client decisions",
      },
      {
        id: "c",
        text: "Administer a chemical sedative so the client forgets his desire to ambulate",
      },
      {
        id: "d",
        text: "Discharge the client immediately for non-compliance with the son's safety preferences",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "A cognitively competent adult possesses the legal and ethical right to make autonomous decisions regarding their body and mobility, including accepting reasonable, informed risks (risk enablement/dignity of risk). Relatives cannot override the capacitous choices of an adult. Enclosing the client in a wheelchair with a belt constitutes unlawful physical restraint (false imprisonment). The nurse acts as patient advocate: respects the client's autonomy, implements risk-reduction strategies (physical therapy, balance training, escort supervision), and educates the family on the hazards of forced immobility (deconditioning, depression, contractures).",
    strategy: "Autonomy vs Beneficence: Competent adults have the right to informed risk (dignity of risk). Relatives cannot mandate physical restraints.",
    difficulty: "medium",
    tags: ["gerontology", "ethics", "autonomy", "dignity-of-risk", "restraint-free"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-014",
    categorySlug: "gerontology-community",
    stem: "A 90-year-old client with end-stage dementia is bedbound, non-verbal, and has developed severe dysphagia with coughing on all oral intake. The family asks the nurse whether a percutaneous endoscopic gastrostomy (PEG) feeding tube should be placed to prevent aspiration pneumonia and prolong life. Based on clinical evidence and geriatric guidelines, what guidance should the nurse provide?",
    choices: [
      {
        id: "a",
        text: "PEG tube feeding is mandatory in all dementia patients to guarantee longevity and cure swallowing impairment",
      },
      {
        id: "b",
        text: "Evidence shows that PEG tubes in advanced dementia do NOT prevent aspiration pneumonia, prolong life, or improve quality of life; recommend gentle, comfort-focused oral assisted feeding and palliative mouth care",
      },
      {
        id: "c",
        text: "PEG tubes completely eliminate the physiological risk of bacterial pneumonia",
      },
      {
        id: "d",
        text: "Withhold all food, fluids, and mouth care completely and allow no oral contact",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Extensive clinical trials and professional guidelines (American Geriatrics Society, British Geriatrics Society) demonstrate that enteral tube feeding (PEG tubes) in advanced dementia does NOT prolong survival, does not improve nutritional status, does not prevent aspiration (patients aspirate oropharyngeal secretions and gastric contents), and does not reduce pressure ulcers. Tube feeding often leads to physical restraints to prevent tube pulling, fluid overload, and loss of the pleasure of taste. Geriatric palliative care recommends 'careful hand feeding' (comfort-focused oral feeding for pleasure) and meticulous oral hygiene.",
    strategy: "Advanced dementia & tube feeding: PEG tubes do NOT prevent aspiration or prolong life. Evidence supports careful comfort hand feeding.",
    difficulty: "medium",
    tags: ["gerontology", "palliative-care", "dementia", "peg-tube", "end-of-life"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-015",
    categorySlug: "health-promotion",
    stem: "A 77-year-old community-dwelling elder is recovering from pneumonia and shows marked quadriceps weakness, slow gait speed, and difficulty standing from a low chair. Which exercise prescription is most effective in reversing sarcopenia and improving functional mobility in older adults?",
    choices: [
      {
        id: "a",
        text: "Passive bed rest for 4 weeks with no active joint movement",
      },
      {
        id: "b",
        text: "Exclusively sitting in an armchair while performing deep breathing exercises",
      },
      {
        id: "c",
        text: "Progressive resistance (strength) training targeting major muscle groups 2 to 3 days per week, combined with balance training and adequate dietary protein",
      },
      {
        id: "d",
        text: "Rapid high-impact plyometric jumping for 60 minutes daily",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Progressive resistance training (PRT) is the gold standard, evidence-based intervention to stimulate muscle protein synthesis, reverse muscle atrophy (sarcopenia), and restore functional independence in older adults, even in nonagenarians. Resistance training (using body weight, resistance bands, or light weights) 2–3 times weekly increases myofibrillar cross-sectional area and neuromuscular coordination. Combining PRT with balance exercises (e.g., tandem stance, tai chi) and dietary protein (1.2–1.5 g/kg/day) provides maximal protection against falls and fractures.",
    strategy: "Reversing sarcopenia: Progressive resistance/strength training 2-3 times/week + balance exercises + adequate protein. Bed rest accelerates atrophy.",
    difficulty: "easy",
    tags: ["gerontology", "sarcopenia", "resistance-training", "rehabilitation", "health-promotion"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-016",
    categorySlug: "gerontology-community",
    stem: "An 83-year-old female client in an assisted living facility experiences involuntary urine leakage. She reports a sudden, intense desire to void that she cannot suppress, followed by large-volume leakage before reaching the toilet. Which type of urinary incontinence is this client exhibiting, and what is the primary nursing intervention?",
    choices: [
      {
        id: "a",
        text: "Stress incontinence; instruct the client to cough vigorously while sneezing",
      },
      {
        id: "b",
        text: "Overflow incontinence; insert an indwelling Foley catheter permanently",
      },
      {
        id: "c",
        text: "Reflex incontinence; restrict all daily fluid intake to less than 300 mL",
      },
      {
        id: "d",
        text: "Urge incontinence (overactive bladder); initiate a timed voiding schedule, bladder retraining, pelvic floor muscle exercises, and eliminate bladder irritants (caffeine and alcohol)",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Urge incontinence is characterized by sudden, involuntary detrusor muscle contractions causing an uncontrollable urge to void followed by leakage of moderate-to-large amounts of urine (overactive bladder). First-line interventions are behavioral: bladder retraining (gradually increasing intervals between scheduled voiding), pelvic floor muscle (Kegel) training, prompt toileting, and avoiding dietary bladder irritants (caffeine, artificial sweeteners, alcohol). Stress incontinence involves small-volume leakage during exertion/coughing; functional incontinence is due to physical/cognitive barriers to reaching the toilet.",
    strategy: "Incontinence types: Sudden intense urge + large leak = Urge incontinence (overactive detrusor). Treat with bladder training, Kegels, avoid caffeine.",
    difficulty: "medium",
    tags: ["gerontology", "urinary-incontinence", "urge-incontinence", "bladder-retraining", "functional-health"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-017",
    categorySlug: "fundamentals",
    stem: "A 75-year-old client with severe right knee osteoarthritis is learning to ambulate using a single-point walking cane. How should the nurse instruct the client to use the cane for optimal biomechanical support?",
    choices: [
      {
        id: "a",
        text: "Hold the cane in the LEFT hand (opposite the affected side), advance the cane and the right leg forward together, then follow with the left leg",
      },
      {
        id: "b",
        text: "Hold the cane in the right hand (same side as the affected knee) and advance it after both legs have moved",
      },
      {
        id: "c",
        text: "Lean the entire chest over the cane while keeping both elbows completely locked",
      },
      {
        id: "d",
        text: "Advance the unaffected leg first while leaving the cane behind",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Proper cane technique requires holding the cane on the UNAFFECTED (stronger) side (the 'COAL' acronym: Cane Opposite Affected Leg). This widens the base of support and shifts the body's center of gravity away from the damaged joint. Sequence of ambulation: (1) advance the cane and the affected (weaker) leg forward simultaneously, distributing body weight between the cane and the weak leg; (2) step forward with the unaffected (stronger) leg past the cane. When navigating stairs, remember: 'Up with the good (strong leg leads), down with the bad (cane and weak leg lead)'.",
    strategy: "Cane ergonomics: Hold on UNAFFECTED (strong) side (COAL). Move cane and weak leg forward together, then follow with strong leg.",
    difficulty: "easy",
    tags: ["gerontology", "assistive-devices", "cane-technique", "mobility", "biomechanics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-018",
    categorySlug: "gerontology-community",
    stem: "An 81-year-old client recovering from an ischaemic stroke is being discharged home to live with an elderly spouse. What is the most critical element of the transitional care discharge plan to prevent readmission within 30 days?",
    choices: [
      {
        id: "a",
        text: "Hand the spouse a 40-page textbook on neurological rehabilitation at the hospital exit door",
      },
      {
        id: "b",
        text: "Complete comprehensive medication reconciliation, conduct a home safety hazard check, train the spouse on transfers and swallowing precautions, and ensure a home visit or telephone follow-up within 48 to 72 hours",
      },
      {
        id: "c",
        text: "Instruct the client not to contact the health center unless a catastrophic emergency occurs",
      },
      {
        id: "d",
        text: "Discontinue all blood pressure and antiplatelet medications prior to discharge",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Care transitions between hospital and home are high-risk periods for frail elders; nearly 20% of discharged older adults experience hospital readmission within 30 days. Evidence-based transitional care bundles emphasize: (1) comprehensive medication reconciliation to resolve discrepancies and educate on new prescriptions; (2) practical caregiver training on transfers, positioning, and dysphagia precautions; (3) home hazard evaluation (grab bars, lighting, tripping hazards); (4) scheduling follow-up medical visits; and (5) proactive post-discharge follow-up (home visit by community nurse or telephone call) within 48–72 hours.",
    strategy: "Transitional care in elders: Medication reconciliation + caregiver transfer/swallow training + follow-up within 48-72 hours prevent 30-day readmissions.",
    difficulty: "medium",
    tags: ["gerontology", "discharge-planning", "transitional-care", "stroke-rehabilitation", "caregiver-support"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-019",
    categorySlug: "safety-infection-control",
    stem: "A hospitalized 84-year-old client with mild vascular dementia is restless, repeatedly attempts to unfasten the nasal cannula, and wanders toward the hallway. Which restraint-free strategy should the nurse implement first?",
    choices: [
      {
        id: "a",
        text: "Tie both hands to the bed rails using double-loop cotton restraints",
      },
      {
        id: "b",
        text: "Attach a vest restraint and raise all four full-length bed rails",
      },
      {
        id: "c",
        text: "Investigate and meet underlying unmet physical needs (pain, thirst, toilet urge, room temperature), relocate the client closer to the nurses' station, and engage the client with meaningful tactile tasks (folding towels)",
      },
      {
        id: "d",
        text: "Administer 5 mg of haloperidol intramuscularly every 4 hours around the clock",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "In dementia and delirium, motor restlessness and wandering are purposeful expressions of unmet physical or emotional needs (pain, full bladder/bowel, thirst, hunger, boredom, or fear). Restraint-free care requires investigating and satisfying these underlying needs first: offer fluids, assist with toileting, evaluate pain, optimize lighting, move the client closer to the nursing desk for visibility, and provide therapeutic diversion (folding towels, sorting socks, listening to favorite music). Restraints and 4 bed rails increase entrapment, asphyxiation, and fall injuries.",
    strategy: "Restraint alternatives: Address unmet physical needs (toileting, pain, thirst), place close to nurses' station, and use purposeful tactile tasks.",
    difficulty: "easy",
    tags: ["gerontology", "restraint-alternatives", "patient-safety", "dementia-care", "nursing-interventions"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GERO-020",
    categorySlug: "leadership-delegation",
    stem: "An 82-year-old client newly diagnosed with early-stage Alzheimer's disease is fully oriented and asks the nurse, 'I want to make sure my daughter can make medical decisions for me when my memory completely fades, and I don't want machines keeping my heart beating if I'm brain dead.' What legal and clinical process should the nurse guide the client to complete now?",
    choices: [
      {
        id: "a",
        text: "Advise the client to wait until severe dementia develops before discussing medical preferences",
      },
      {
        id: "b",
        text: "Instruct the daughter to verbally override all future choices without any formal documentation",
      },
      {
        id: "c",
        text: "Inform the client that advance directives are illegal and forbidden under medical ethics",
      },
      {
        id: "d",
        text: "Advance Care Planning (ACP), including executing an Advance Directive (Living Will) and appointing a Durable Power of Attorney for Healthcare (Healthcare Proxy) while the client retains decisional capacity",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Advance Care Planning (ACP) enables individuals to articulate their values and preferences regarding future medical treatments and to appoint a substitute decision-maker (Durable Power of Attorney for Healthcare / Healthcare Proxy). This must be initiated EARLY in the disease course while the individual retains decisional legal capacity. Key components include: (1) a Living Will detailing preferences regarding life-sustaining treatments (CPR, mechanical ventilation, artificial feeding); and (2) designating a trusted healthcare proxy. Once capacity is lost, the patient can no longer legally execute these advance instruments.",
    strategy: "Advance care planning: Must be established EARLY while the client has decisional capacity. Designate Healthcare Proxy and document treatment preferences.",
    difficulty: "easy",
    tags: ["gerontology", "advance-directives", "living-will", "healthcare-proxy", "ethics"],
    isFree: true,
  },
];
