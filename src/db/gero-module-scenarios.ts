import type { AuthoredQuestion } from "./authored-bank";

export const GERO_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-GERO-001",
    categorySlug: "gerontology-community",
    stem: "An 82-year-old female resident of a nursing home is brought to the clinic because she suddenly became confused, disoriented to time, and experienced two uncharacteristic falls yesterday. She has no fever (oral temperature 36.6 °C), no cough, and denies pain. The nurse notes mild suprapubic tenderness and foul-smelling urine. What physiological reality of ageing best explains this presentation?",
    choices: [
      {
        id: "a",
        text: "Normal cognitive ageing, because memory and orientation decline steadily and falls become more common in the eighties",
      },
      {
        id: "b",
        text: "Anxiety related to the move into residential care, since disorientation and falls often follow a change of environment",
      },
      {
        id: "c",
        text: "An absence of infection, because a temperature of 36.6 C makes a urinary tract infection unlikely in an older adult",
      },
      {
        id: "d",
        text: "Blunted immune and thermoregulatory responses mean infection can present as delirium and falls before fever appears",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — \"Blunted immune and thermoregulatory responses mean infection can present as delirium and falls before fever appears\" A hallmark of geriatric medicine is atypical presentation of illness. In older adults, blunted hypothalamic thermoregulation, decreased interleukin/cytokine response, and diminished physiological reserve often prevent the development of a classic febrile response. Consequently, common infections (such as urinary tract infections or pneumonia) frequently present without fever or tachypnoea, instead manifesting as acute delirium, functional decline, anorexia, lethargy, or new-onset falls ('off legs'). The nurse must recognize sudden acute confusion in an elder as an emergency medical trigger until proven otherwise. Why the other options fail: option a treats a change that happened in a day as normal ageing, when normal ageing does not produce acute confusion, and delirium is a medical emergency. Option b attributes the presentation to attention-seeking, which no assessment finding supports and which delays treatment of an infection. Option c treats a normal temperature as proof against infection, when blunted thermoregulation is precisely why older adults do not mount a fever.",
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
        text: "Face the client at eye level in good light, reduce background noise, speak clearly at a normal volume in a lower pitch, and check understanding",
      },
      {
        id: "b",
        text: "Use a high-pitched, sing-song voice and call the client sweetie or grandma, because warmth and familiarity are said to aid her comprehension of what is being said",
      },
      {
        id: "c",
        text: "Raise your voice and stand behind the client, since speaking loudly into the better ear compensates for high-frequency loss",
      },
      {
        id: "d",
        text: "Ask the client's adult children what is needed and address replies to them, so that information is not misunderstood",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — \"Face the client at eye level in good light, reduce background noise, speak clearly at a normal volume in a lower pitch, and check understanding\" Presbycusis involves progressive loss of high-frequency hearing and impaired speech discrimination. Shouting or using high-pitched sing-song tones ('elderspeak') actually distorts sound frequencies and is patronizing, causing diminished self-esteem. Therapeutic communication requires facing the patient directly so visual lip-reading cues can assist, ensuring good lighting, reducing ambient noise, and speaking clearly in a deeper (lower-pitched), normal-volume voice. Elderspeak (e.g., using terms like 'sweetie', 'honey', using collective pronouns like 'did we take our pills?') is an insidious form of ageism associated with increased resistance to care. Why the other options fail: option b uses the high-pitched voice and the endearments that define elderspeak, both of which distort speech and reduce the client to a child. Option c shouts from behind, which removes the lip-reading and visual cues she depends on and distorts the sound further. Option d removes the client from the conversation altogether, which is exclusion rather than a communication strategy.",
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
        text: "Managing finances, balancing a chequebook and paying monthly utility bills",
      },
      {
        id: "b",
        text: "Transferring independently from bed to armchair, using a frame or the bed rail",
      },
      {
        id: "c",
        text: "Bathing safely in the shower without help, once grab rails have been fitted",
      },
      {
        id: "d",
        text: "Maintaining urinary and faecal continence through the day and night",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — \"Managing finances, balancing a chequebook and paying monthly utility bills\" Basic Activities of Daily Living (ADLs, measured by the Katz Index) encompass fundamental self-care tasks essential for survival: bathing, dressing, toileting, transferring, continence, and feeding. In contrast, Instrumental Activities of Daily Living (IADLs, measured by the Lawton scale) require higher-order executive functioning and neuropsychological integration to live independently in the community: managing finances, using the telephone, shopping, meal preparation, housekeeping, laundry, transportation, and managing medications. Loss of IADLs typically occurs before loss of basic ADLs in progressive cognitive decline. Why the other options fail: option b is a basic ADL, transferring on the Katz index. Option c is a basic ADL, bathing. Option d is a basic ADL, continence. All three are self-care tasks needed for survival and none requires the executive planning that defines an instrumental activity.",
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
        text: "Under 20 seconds is normal for a client of this age, so reassure her and give no walking aid until the time exceeds 30 seconds",
      },
      {
        id: "b",
        text: "The result is not interpretable without knowing her gait speed, so repeat the test on three separate mornings before acting",
      },
      {
        id: "c",
        text: "Over 12 seconds means high fall risk; begin a multifactorial bundle: medication review, balance training and home hazard modification",
      },
      {
        id: "d",
        text: "Nineteen seconds indicates a low risk of falling, because the accepted threshold for referral is 30 seconds in community-dwelling elders",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — \"Over 12 seconds means high fall risk; begin a multifactorial bundle: medication review, balance training and home hazard modification\" The Timed Up and Go (TUG) test is a validated clinical screening tool for balance, gait speed, and fall risk in older adults. Most community-dwelling older adults complete the TUG in under 10–12 seconds. A score of >= 12 seconds (or >= 14 seconds depending on guideline cutoff) indicates clinically significant gait instability, frailty, and high risk of falling. Interventions must be multifactorial: comprehensive medication review (especially psychotropics and antihypertensives), referral to physical therapy for balance/strength training, environmental hazard abatement (loose rugs, grab bars), and proper walking aid fitting. Why the other options fail: option a inverts the threshold and would delay a walking aid for a client who is already slow. Option b invents a repeat-testing requirement, when the TUG is validated as a single measurement. Option d quotes a 30-second threshold that belongs to no version of the test, and would reassure a client who needs intervention now.",
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
        text: "A low-protein, calorie-restricted diet to protect the glomeruli from hyperfiltration, with protein given mainly as clear broth and vegetables",
      },
      {
        id: "b",
        text: "A trial of oral feeding for 2 weeks, then a percutaneous endoscopic gastrostomy if the weight continues to fall",
      },
      {
        id: "c",
        text: "High-protein energy-dense meals in small frequent portions, oral supplements between meals, and treatment of dental or denture problems",
      },
      {
        id: "d",
        text: "Two litres of water before each meal to distend the stomach, which is the standard first step for weight loss in older adults",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — \"High-protein energy-dense meals in small frequent portions, oral supplements between meals, and treatment of dental or denture problems\" Involuntary weight loss and sarcopenia in older adults lead to immune dysfunction, pressure injuries, fall-related fractures, and increased mortality. Age-related anabolic resistance requires higher protein intake (1.2–1.5 g/kg/day in older adults with acute or chronic illness, compared to 0.8 g/kg in younger adults) along with progressive resistance exercises. Strategies include: energy- and protein-dense foods (eggs, milk, groundnut paste, fish), small frequent meals, pleasant dining environments, oral nutritional supplements between meals (so appetite for regular meals is not blunted), and inspecting the oral cavity for poorly fitting dentures or stomatitis. Why the other options fail: option a prescribes the opposite of what sarcopenia needs, and protein restriction accelerates muscle loss. Option b moves to tube feeding before oral strategies have been tried, which guidelines reserve for their failure. Option d fills the stomach with water before meals, which reduces intake in a client whose intake is already inadequate.",
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
        text: "Insidious onset over months to years with progressive memory loss and a clear level of consciousness until the late stages of the illness",
      },
      {
        id: "b",
        text: "Acute onset over hours to days, a fluctuating course, marked inattention and altered consciousness, triggered by a medical cause",
      },
      {
        id: "c",
        text: "Subacute onset with prominent worthlessness, slowed speech and 'I don't know' answers on cognitive testing",
      },
      {
        id: "d",
        text: "A permanent and irreversible decline in cognition that does not resolve when the underlying illness is treated",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — \"Acute onset over hours to days, a fluctuating course, marked inattention and altered consciousness, triggered by a medical cause\" Differentiating the '3 Ds' is critical in gerontological nursing: Delirium has an ACUTE onset (hours to days), a fluctuating course throughout the day, altered level of consciousness (hyperactive, hypoactive, or mixed), severe inattention, and is a medical emergency caused by reversible underlying physiological insults (infection, medications, hypoxia, electrolyte shifts). In contrast, Dementia has an INSIDIOUS, gradual onset (months to years), progressive decline in memory and executive function, with preserved alertness until late stages. Depression has a subacute onset, prominent dysphoria, vegetative signs, and clients often answer cognitive questions with 'I don't know' (pseudodementia). Why the other options fail: option a describes dementia, with its insidious onset and preserved consciousness until late. Option c describes depression, with its subacute onset, worthlessness and 'I don't know' answers. Option d gives permanence, which is the opposite of delirium's defining reversibility.",
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
        text: "Apply bilateral wrist restraints to the bed rails, releasing them every 2 hours, to protect the cannula and prevent a fall from the bed",
      },
      {
        id: "b",
        text: "Give intravenous lorazepam every 2 hours until the agitation settles, then review the precipitating cause",
      },
      {
        id: "c",
        text: "Assign one-to-one supervision, reorient gently, replace glasses and hearing aids, treat pain and retention, and avoid restraints",
      },
      {
        id: "d",
        text: "Dim the room and close the door to reduce stimulation, and nurse the client in a side room away from the desk",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — \"Assign one-to-one supervision, reorient gently, replace glasses and hearing aids, treat pain and retention, and avoid restraints\" Physical restraints are strictly contraindicated as first-line management in delirium; they increase agitation, injury, strangulation, pressure ulcers, and functional decline. Evidence-based delirium care prioritizes multicomponent non-pharmacological interventions: one-on-one observation/family presence, frequent gentle reorientation, using sensory aids (glasses, hearing aids), early mobilization, optimizing hydration, assessing for constipation or urinary retention, treating uncontrolled pain (a major delirium driver), and avoiding deliriogenic medications (such as benzodiazepines and anticholinergics). Why the other options fail: option a uses physical restraint, which is contraindicated in delirium and increases agitation, injury and strangulation. Option b sedates a client whose delirium has an untreated cause, and benzodiazepines are themselves deliriogenic. Option d isolates a client who needs supervision and orientation, and removes the sensory cues that keep him oriented.",
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
        text: "Keep the client in bed in a darkened room during the whole day, so that sleep pressure builds and the evening restlessness finally settles",
      },
      {
        id: "b",
        text: "Offer tea or coffee in the late afternoon to keep the client alert, so that agitation does not build before bedtime",
      },
      {
        id: "c",
        text: "Correct the hallucinations firmly each time they occur, so that the client learns to distinguish them from reality",
      },
      {
        id: "d",
        text: "Maximise morning daylight, keep a predictable routine, light the room before dusk, and keep evenings calm with music and low noise",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — \"Maximise morning daylight, keep a predictable routine, light the room before dusk, and keep evenings calm with music and low noise\" Sundowning is a circadian rhythm disruption common in dementia, characterized by worsening confusion, agitation, and motor restlessness in the late afternoon and evening. Effective non-pharmacological interventions include: (1) maximizing exposure to bright natural sunlight in the morning to stabilize the circadian pacemaker; (2) maintaining a consistent, structured daily schedule for meals, exercise, and activities; (3) turning on indoor lighting before sunset to prevent shadows and perceptual illusions; (4) minimizing evening noise and visitors; and (5) avoiding caffeine or daytime napping. Arguing with hallucinations triggers catastrophic emotional reactions. Why the other options fail: option a removes daytime light and activity, which weakens the circadian signal and makes the evening worse. Option b adds a stimulant at the time of day the client is already over-aroused. Option c confronts the hallucination, which provokes a catastrophic reaction in a client who cannot test reality.",
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
        text: "Tachyphylaxis",
      },
      {
        id: "b",
        text: "The prescribing cascade",
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
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — \"The prescribing cascade\" A prescribing cascade occurs when an adverse drug effect is misinterpreted as a new, unrelated medical condition, prompting the prescription of a second medication to treat the side effect of the first. The second drug exposes the vulnerable older adult to additional adverse effects and drug interactions (e.g., amlodipine peripheral vasodilation edema -> furosemide added -> hypokalaemia/dehydration -> orthostatic fall). The gerontological nurse must always consider: 'Could this new symptom be an adverse effect of an existing medication?' before accepting a new diagnosis and additional prescriptions. Why the other options fail: option a is loss of response to a drug over time, which is not what happened here. Option c is an immune-mediated reaction, whereas ankle oedema from amlodipine is a predictable pharmacological effect. Option d concerns the fraction of a dose reaching the circulation after first-pass metabolism, which does not explain a new diagnosis and a second drug.",
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
        text: "Diazepam is cleared only by the kidneys, and the reduced renal blood flow of older adults allows the drug to reach toxic concentrations within a single dose",
      },
      {
        id: "b",
        text: "Older adults metabolise benzodiazepines faster, so a 5 mg dose is ineffective and a higher dose would be needed for sleep",
      },
      {
        id: "c",
        text: "Diazepam causes acute hyperthermia and malignant hypertension in older adults, which is why it is listed as potentially inappropriate",
      },
      {
        id: "d",
        text: "Long-acting benzodiazepines accumulate in older adults because fat mass is higher and hepatic clearance is lower, causing sedation, ataxia and fractures",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — \"Long-acting benzodiazepines accumulate in older adults because fat mass is higher and hepatic clearance is lower, causing sedation, ataxia and fractures\" The Beers Criteria strongly advises against using benzodiazepines (especially long-acting agents like diazepam, flurazepam, or chlordiazepoxide) for insomnia in older adults. Age-related changes in body composition (increased proportion of body fat, decreased body water) expand the volume of distribution for lipid-soluble drugs, while reduced hepatic cytochrome P450 oxidation dramatically prolongs elimination half-lives (diazepam's half-life can exceed 100 hours in frail elders). This leads to accumulation, prolonged hangover sedation, impaired motor coordination, confusion, and more than a twofold increased risk of falls and hip fractures. Why the other options fail: option a invents an irreversible renal injury that diazepam does not cause and places the clearance in the wrong organ. Option b reverses the pharmacokinetics, since clearance falls rather than rises with age. Option c attributes hyperthermia and malignant hypertension to a drug whose toxicity is sedation, ataxia and respiratory depression.",
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
        text: "A creatinine of 0.8 mg/dL confirms normal filtration in this frail client, so the standard dose can be given without any dose adjustment at all",
      },
      {
        id: "b",
        text: "Reduced muscle mass lowers creatinine production, so a normal creatinine can hide a substantially reduced glomerular filtration rate",
      },
      {
        id: "c",
        text: "Enoxaparin is cleared by the liver and bile, so renal function does not influence its dose or accumulation",
      },
      {
        id: "d",
        text: "A normal creatinine means the dose should be doubled, because low muscle mass also lowers the volume of distribution",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — \"Reduced muscle mass lowers creatinine production, so a normal creatinine can hide a substantially reduced glomerular filtration rate\" Creatinine is an endogenous breakdown product of skeletal muscle. In frail, sarcopenic older adults, muscle mass is markedly reduced; therefore, baseline creatinine production is very low. Even when Glomerular Filtration Rate (GFR) drops by 50% or more due to normal renal ageing, serum creatinine may remain within 'normal' reference limits (e.g., 0.8 mg/dL). Clinicians who rely solely on serum creatinine overlook severe renal impairment. Calculating CrCl using the Cockcroft-Gault formula reveals the true impairment, avoiding fatal accumulation of renally cleared drugs like enoxaparin, digoxin, and aminoglycosides. Why the other options fail: option a reads a single normal value as proof of normal filtration, which is the error the item tests. Option c is wrong about the route, since enoxaparin is renally cleared and accumulates in renal impairment. Option d doubles a dose on the strength of a value that may be masking impairment, which would increase the risk of bleeding.",
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
        text: "Respect the family's privacy, record the observations without comment, and raise the concern at the next routine review, since the caregiver is present",
      },
      {
        id: "b",
        text: "Remove the elder to a place of safety immediately and without notifying any authority, because the danger to her is obvious",
      },
      {
        id: "c",
        text: "Give wound care and fluids, document the findings, and report suspected neglect and financial exploitation to social welfare and adult protection",
      },
      {
        id: "d",
        text: "Confront the caregiver, demand return of the pension and give 24 hours to clean the room before deciding whether to report",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — \"Give wound care and fluids, document the findings, and report suspected neglect and financial exploitation to social welfare and adult protection\" Nurses have a legal, ethical, and professional duty as mandated reporters of suspected elder abuse and neglect. The physical signs (multiple severe pressure ulcers, fecal soiling, emaciation, dehydration) demonstrate severe neglect (the failure of a caregiver to provide necessary food, shelter, hygiene, or medical care). Diverting the client's pension constitutes financial exploitation. The nurse's immediate actions are: (1) provide emergency clinical stabilization (first aid, wound cleansing, hydration); (2) objectively photograph (with consent) and document injuries; and (3) notify the Department of Social Welfare and adult protective authorities. Why the other options fail: option a defers a mandated report to a routine review and leaves the client in danger. Option b removes the client without notifying anyone, which bypasses the protective authorities the nurse is required to involve. Option d negotiates with the caregiver and delays the report, giving time for evidence to be lost and for retaliation against the client.",
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
        text: "Follow the son's instruction and belt him into the wheelchair, because a concerned family member is entitled to consent to a restraint on the client's behalf",
      },
      {
        id: "b",
        text: "Respect his decision, reduce the risk with supervision, physiotherapy and non-skid footwear, and explain that restraining a capacitous adult is unlawful",
      },
      {
        id: "c",
        text: "Convene a best-interest meeting and keep him in the wheelchair until the meeting agrees that he may walk again",
      },
      {
        id: "d",
        text: "Ask him to sign a form accepting all risk, then allow walking only when his son is not on the unit to see it",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — \"Respect his decision, reduce the risk with supervision, physiotherapy and non-skid footwear, and explain that restraining a capacitous adult is unlawful\" A cognitively competent adult possesses the legal and ethical right to make autonomous decisions regarding their body and mobility, including accepting reasonable, informed risks (risk enablement/dignity of risk). Relatives cannot override the capacitous choices of an adult. Enclosing the client in a wheelchair with a belt constitutes unlawful physical restraint (false imprisonment). The nurse acts as patient advocate: respects the client's autonomy, implements risk-reduction strategies (physical therapy, balance training, escort supervision), and educates the family on the hazards of forced immobility (deconditioning, depression, contractures). Why the other options fail: option a lets a relative consent to restraint on behalf of a capacitous adult, which no relative can do. Option c defers the decision to a meeting while the restraint continues, which is detention by another name. Option d makes walking conditional on his son's absence, conceding the autonomy the nurse is meant to protect.",
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
        text: "PEG feeding does not prevent aspiration, prolong life or improve comfort in advanced dementia; offer careful hand feeding and mouth care",
      },
      {
        id: "b",
        text: "Place the PEG now, because tube feeding is the only reliable way to prevent further aspiration in a client who coughs on every attempt at oral intake",
      },
      {
        id: "c",
        text: "Place the PEG, because it removes the risk of aspiration pneumonia by bypassing the pharynx entirely",
      },
      {
        id: "d",
        text: "Withhold all food, fluid and mouth care, and allow no oral contact, to avoid provoking another aspiration event",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — \"PEG feeding does not prevent aspiration, prolong life or improve comfort in advanced dementia; offer careful hand feeding and mouth care\" Extensive clinical trials and professional guidelines (American Geriatrics Society, British Geriatrics Society) demonstrate that enteral tube feeding (PEG tubes) in advanced dementia does NOT prolong survival, does not improve nutritional status, does not prevent aspiration (patients aspirate oropharyngeal secretions and gastric contents), and does not reduce pressure ulcers. Tube feeding often leads to physical restraints to prevent tube pulling, fluid overload, and loss of the pleasure of taste. Geriatric palliative care recommends 'careful hand feeding' (comfort-focused oral feeding for pleasure) and meticulous oral hygiene. Why the other options fail: option b offers a benefit the evidence does not support, since a tube does not stop aspiration of oral secretions. Option c claims the tube removes aspiration risk, when gastric reflux and oropharyngeal secretions remain. Option d withdraws comfort as well as nutrition, when hand feeding and mouth care are the recommended alternative.",
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
        text: "Four weeks of bed rest with passive range-of-motion only, so that the muscles recover before any loading begins",
      },
      {
        id: "b",
        text: "Seated deep-breathing exercises three times a day, which improve oxygen delivery to the quadriceps and rebuild strength",
      },
      {
        id: "c",
        text: "Daily high-impact plyometric jumping for 60 minutes, which loads the muscle most and builds strength fastest",
      },
      {
        id: "d",
        text: "Progressive resistance training for the major muscle groups 2 to 3 days a week, with balance work and adequate protein",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — \"Progressive resistance training for the major muscle groups 2 to 3 days a week, with balance work and adequate protein\" Progressive resistance training (PRT) is the gold standard, evidence-based intervention to stimulate muscle protein synthesis, reverse muscle atrophy (sarcopenia), and restore functional independence in older adults, even in nonagenarians. Resistance training (using body weight, resistance bands, or light weights) 2–3 times weekly increases myofibrillar cross-sectional area and neuromuscular coordination. Combining PRT with balance exercises (e.g., tandem stance, tai chi) and dietary protein (1.2–1.5 g/kg/day) provides maximal protection against falls and fractures. Why the other options fail: option a imposes the immobility that caused the weakness and will worsen it. Option b does not load the muscle, so it cannot reverse sarcopenia. Option c applies high-impact loading that a frail, deconditioned client cannot tolerate and that risks injury without building strength.",
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
        text: "Stress incontinence; teach pelvic floor exercises and advise her to cough before she stands up",
      },
      {
        id: "b",
        text: "Overflow incontinence; teach her to void by suprapubic pressure and review her anticholinergic burden",
      },
      {
        id: "c",
        text: "Functional incontinence; restrict all oral fluids to under 300 mL a day so that the bladder never fills up enough to leak",
      },
      {
        id: "d",
        text: "Urge incontinence; start timed voiding, bladder retraining, pelvic floor exercises and removal of caffeine and alcohol",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — \"Urge incontinence; start timed voiding, bladder retraining, pelvic floor exercises and removal of caffeine and alcohol\" Urge incontinence is characterized by sudden, involuntary detrusor muscle contractions causing an uncontrollable urge to void followed by leakage of moderate-to-large amounts of urine (overactive bladder). First-line interventions are behavioral: bladder retraining (gradually increasing intervals between scheduled voiding), pelvic floor muscle (Kegel) training, prompt toileting, and avoiding dietary bladder irritants (caffeine, artificial sweeteners, alcohol). Stress incontinence involves small-volume leakage during exertion/coughing; functional incontinence is due to physical/cognitive barriers to reaching the toilet. Why the other options fail: option a describes stress incontinence, which leaks small volumes on exertion rather than after an uncontrollable urge. Option b describes overflow incontinence, which presents as constant dribbling from an over-distended bladder. Option c mislabels the problem as functional and answers it with fluid restriction, which concentrates the urine and irritates the bladder further.",
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
        text: "Hold the cane in the right hand, on the same side as the affected knee, and advance the cane only after both of the legs have moved forward first",
      },
      {
        id: "b",
        text: "Hold the cane in the left hand but advance it with the left leg, so that the stronger side leads every step",
      },
      {
        id: "c",
        text: "Hold the cane in the left hand, opposite the affected knee; move the cane and the right leg together, then step through with the left",
      },
      {
        id: "d",
        text: "Hold the cane in the right hand and advance it first, then bring the right leg up to the cane before the left",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — \"Hold the cane in the left hand, opposite the affected knee; move the cane and the right leg together, then step through with the left\" Proper cane technique requires holding the cane on the UNAFFECTED (stronger) side (the 'COAL' acronym: Cane Opposite Affected Leg). This widens the base of support and shifts the body's center of gravity away from the damaged joint. Sequence of ambulation: (1) advance the cane and the affected (weaker) leg forward simultaneously, distributing body weight between the cane and the weak leg; (2) step forward with the unaffected (stronger) leg past the cane. When navigating stairs, remember: 'Up with the good (strong leg leads), down with the bad (cane and weak leg lead)'. Why the other options fail: option a holds the cane on the affected side, which increases the load through the painful knee. Option b advances the cane with the stronger leg, which removes support at the moment the weak leg takes weight. Option d advances the cane first and then the affected leg, a sequence that does not distribute weight safely.",
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
        text: "Reconcile the medicines, check the home for hazards, train the spouse in transfers and swallowing, and follow up within 48 to 72 hours",
      },
      {
        id: "b",
        text: "Give the spouse a written rehabilitation manual at discharge and ask her to telephone the ward with any question",
      },
      {
        id: "c",
        text: "Arrange a clinic review at 6 weeks and advise her to call the emergency services if anything changes before then",
      },
      {
        id: "d",
        text: "Stop the antihypertensive and antiplatelet drugs at discharge, so that falls and bleeding are not compounded for him once he is at home",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — \"Reconcile the medicines, check the home for hazards, train the spouse in transfers and swallowing, and follow up within 48 to 72 hours\" Care transitions between hospital and home are high-risk periods for frail elders; nearly 20% of discharged older adults experience hospital readmission within 30 days. Evidence-based transitional care bundles emphasize: (1) comprehensive medication reconciliation to resolve discrepancies and educate on new prescriptions; (2) practical caregiver training on transfers, positioning, and dysphagia precautions; (3) home hazard evaluation (grab bars, lighting, tripping hazards); (4) scheduling follow-up medical visits; and (5) proactive post-discharge follow-up (home visit by community nurse or telephone call) within 48–72 hours. Why the other options fail: option b hands over information without teaching or follow-up, which is a handout rather than a transition plan. Option c leaves a 6-week gap across the highest-risk period, when most readmissions occur. Option d stops the secondary prevention that prevents the next stroke and would raise rather than lower the risk.",
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
        text: "Investigate unmet needs such as pain, thirst and a full bladder, move him near the nurses' station, and give purposeful activity",
      },
      {
        id: "b",
        text: "Apply double-loop cotton restraints to both wrists so that the cannula is not pulled out, and check them hourly",
      },
      {
        id: "c",
        text: "Fit a vest restraint and raise all four bed rails, which is the least restrictive option that prevents wandering",
      },
      {
        id: "d",
        text: "Give intramuscular haloperidol every 4 hours around the clock, which settles the agitation and prevents any night wandering down the corridor",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — \"Investigate unmet needs such as pain, thirst and a full bladder, move him near the nurses' station, and give purposeful activity\" In dementia and delirium, motor restlessness and wandering are purposeful expressions of unmet physical or emotional needs (pain, full bladder/bowel, thirst, hunger, boredom, or fear). Restraint-free care requires investigating and satisfying these underlying needs first: offer fluids, assist with toileting, evaluate pain, optimize lighting, move the client closer to the nursing desk for visibility, and provide therapeutic diversion (folding towels, sorting socks, listening to favorite music). Restraints and 4 bed rails increase entrapment, asphyxiation, and fall injuries. Why the other options fail: option b restrains both wrists, which increases agitation and injury and is not a first-line measure. Option c adds a vest and four rails, the most restrictive combination, and carries entrapment risk. Option d sedates an older adult with dementia around the clock and masks the unmet need instead of meeting it.",
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
        text: "Wait until the dementia is severe, because preferences expressed now cannot cover decisions that arise later",
      },
      {
        id: "b",
        text: "Advance care planning now: execute a living will and appoint a durable power of attorney for healthcare while he still has capacity",
      },
      {
        id: "c",
        text: "Ask the daughter to confirm his wishes verbally at the time of each decision, which is sufficient without any written document being made now",
      },
      {
        id: "d",
        text: "Explain that advance directives cannot be used in Ghana and that the family will decide by consensus instead",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — \"Advance care planning now: execute a living will and appoint a durable power of attorney for healthcare while he still has capacity\" Advance Care Planning (ACP) enables individuals to articulate their values and preferences regarding future medical treatments and to appoint a substitute decision-maker (Durable Power of Attorney for Healthcare / Healthcare Proxy). This must be initiated EARLY in the disease course while the individual retains decisional legal capacity. Key components include: (1) a Living Will detailing preferences regarding life-sustaining treatments (CPR, mechanical ventilation, artificial feeding); and (2) designating a trusted healthcare proxy. Once capacity is lost, the patient can no longer legally execute these advance instruments. Why the other options fail: option a waits for capacity to be lost, at which point the instruments can no longer be executed. Option c relies on a verbal instruction given in crisis, which carries no legal weight and invites family conflict. Option d would leave the client with no documented voice in his own care, which is exactly the outcome advance care planning exists to prevent.",
    strategy: "Advance care planning: Must be established EARLY while the client has decisional capacity. Designate Healthcare Proxy and document treatment preferences.",
    difficulty: "easy",
    tags: ["gerontology", "advance-directives", "living-will", "healthcare-proxy", "ethics"],
    isFree: true,
  },
];
