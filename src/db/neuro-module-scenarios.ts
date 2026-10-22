import { AuthoredQuestion } from "./authored-bank";

/**
 * 20 Original NCLEX-style clinical scenario practice questions
 * meticulously authored for Neurological Nursing course modules:
 * - Module 01: Foundations & Neurological Assessment (NG-MOD-NEURO-001 - 003)
 * - Module 02: Raised ICP & Head Injury (NG-MOD-NEURO-004 - 006)
 * - Module 03: Stroke & Cerebrovascular Disorders (NG-MOD-NEURO-007 - 009)
 * - Module 04: Seizures & Epilepsy (NG-MOD-NEURO-010 - 012)
 * - Module 05: CNS Infections & The Unconscious Patient (NG-MOD-NEURO-013 - 014)
 * - Module 06: Spinal Cord Injury & Chronic Neuromuscular Disorders (NG-MOD-NEURO-015 - 018)
 * - Module 07: Neuro Pharmacology & Emergency Nursing Calculations (NG-MOD-NEURO-019 - 020)
 */
export const NEURO_MODULE_SCENARIOS: AuthoredQuestion[] = [
  // ---------------------------------------------------------------------------
  // MODULE 01: Foundations & Neurological Assessment
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-NEURO-001",
    categorySlug: "med-surg",
    stem: "A nurse in the emergency department assesses a client admitted after a motor vehicle collision. The client opens their eyes only in response to a painful sternal rub, utters incomprehensible sounds, and abnormally flexes their upper extremities toward the core (decorticate posturing) when noxious stimuli are applied. What is this client's Glasgow Coma Scale (GCS) score, and what is the nurse's immediate priority?",
    choices: [
      { id: "a", text: "GCS is 11; place the client in a high-Fowler position and administer oral analgesics" },
      { id: "b", text: "GCS is 5; place the client in the Trendelenburg position to optimize cerebral perfusion" },
      { id: "c", text: "GCS is 9; perform hourly neurological assessments and request a routine brain MRI" },
      { id: "d", text: "GCS is 7; prepare for endotracheal intubation and definitive airway protection" },
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"GCS is 7; prepare for endotracheal intubation and definitive airway protection\" The Glasgow Coma Scale (GCS) assesses eye opening (1–4), verbal response (1–5), and motor response (1–6). In this client: eye opening to pain = 2; incomprehensible sounds = 2; decorticate abnormal flexion = 3, yielding a total GCS of 7 (2 + 2 + 3 = 7). A GCS score of 8 or less indicates severe traumatic brain injury and comatose state, carrying an inability to maintain or protect the airway. The clinical rule is 'GCS 8 or less, intubate.' Trendelenburg position is contraindicated because it increases intracranial pressure. Oral medications are strictly contraindicated in an unconscious client. Why the other options fail: A score of eleven would need a much higher verbal and motor response than this client shows; nine would mean the client is not yet at the intubation threshold; five would be a deeper coma than the described responses give. Eye opening to pain (2), incomprehensible sounds (2) and decorticate flexion (3) add to seven, at which the airway must be protected.",
    strategy: "Calculate each GCS component: Eye to pain = 2, Verbal incomprehensible = 2, Motor flexion = 3 (Total = 7). Recall the foundational emergency axiom: GCS ≤ 8 demands immediate airway protection.",
    difficulty: "medium",
    tags: ["neurological", "assessment", "gcs", "tbi", "critical-care"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NEURO-002",
    categorySlug: "med-surg",
    stem: "A nurse cares for a client who suffered a brainstem infarction. During the initial cranial nerve assessment, the nurse notes asymmetric uvular elevation, absence of a gag reflex, and a hoarse, wet voice. Which nursing action is the highest priority?",
    choices: [
      { id: "a", text: "Provide thin liquids through a straw in order to assess independent swallowing function" },
      { id: "b", text: "Place the client on strict NPO status and keep emergency suction at the bedside" },
      { id: "c", text: "Position the client flat on their back to facilitate bilateral airway drainage" },
      { id: "d", text: "Encourage frequent sips of ice water to stimulate thermal vocal cord reflexes" },
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Place the client on strict NPO status and keep emergency suction at the bedside\" Impairment of cranial nerves IX (glossopharyngeal) and X (vagus) compromises pharyngeal motor and sensory innervation, abolishing the gag reflex and causing dysphagia with high risk of silent pulmonary aspiration. The highest nursing priority is maintaining strict NPO status until a formal swallow assessment is performed and ensuring functional bedside suction is immediately available. Thin liquids through a straw significantly increase aspiration risk. A flat supine position impairs clearance of secretions and promotes aspiration. Why the other options fail: Thin liquids through a straw are the most likely to be aspirated, not a test of swallowing; lying flat encourages aspiration rather than drainage; ice water sips do not test or protect a compromised pharyngeal swallow. Nil by mouth with suction ready is the safe response.",
    strategy: "Relate the cranial nerves to clinical safety: Cranial nerves IX and X protect the airway and swallow reflex. Absence of gag reflex = immediate NPO + suction ready.",
    difficulty: "easy",
    tags: ["neurological", "cranial-nerves", "aspiration-precaution", "stroke"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-NEURO-003",
    categorySlug: "med-surg",
    stem: "While assessing a client with severe closed head trauma in the intensive care unit, the nurse applies a painful peripheral stimulus. The client rigidly extends both arms, pronates the forearms, flexes the wrists downward, and extends the legs with plantar flexion. How should the nurse document and interpret this finding?",
    choices: [
      { id: "a", text: "Decorticate posturing, indicating a superficial cerebral hemisphere cortical lesion" },
      { id: "b", text: "Purposive withdrawal response, indicating intact spinal reflexes and gradually improving cognition" },
      { id: "c", text: "Decerebrate posturing, indicating deeper, severe dysfunction of the midbrain or brainstem" },
      { id: "d", text: "Positive Babinski sign, indicating an isolated lower motor neuron peripheral injury" },
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Decerebrate posturing, indicating deeper, severe dysfunction of the midbrain or brainstem\" Decerebrate (extensor) posturing is characterized by rigid extension and adduction of the arms, pronation of the forearms, flexion of the wrists/fingers, and plantar extension of the feet. It signifies severe injury or herniation affecting the midbrain or upper brainstem and carries a worse prognosis than decorticate (flexor) posturing, where arms flex inward toward the chest ('core'). It is an ominous clinical sign requiring immediate physician notification. Why the other options fail: Decorticate posturing is flexion of the arms with internal rotation, which is a hemispheric lesion rather than this picture; purposive withdrawal means the client localises or withdraws meaningfully, which is not what extension and pronation show; a Babinski sign is a plantar response and does not describe the limbs.",
    strategy: "Differentiate posturing: Decorticate brings hands to the 'cord/core' (flexion); Decerebrate has lots of 'e's for Extension away from the body, indicating midbrain/brainstem injury.",
    difficulty: "medium",
    tags: ["neurological", "assessment", "posturing", "brainstem", "icp"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 02: Raised ICP & Head Injury
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-NEURO-004",
    categorySlug: "med-surg",
    stem: "A client who sustained a severe traumatic brain injury 24 hours ago is monitored in the neuro-intensive care unit. Over the last 30 minutes, the nurse notes the client's blood pressure has changed from 132/76 mm Hg to 184/60 mm Hg, heart rate has decreased from 78 to 46 beats/min, and respirations have become irregular and shallow at 10 breaths/min. Which emergency condition does the nurse recognize?",
    choices: [
      { id: "a", text: "Neurogenic shock requiring immediate rapid crystalloid fluid resuscitation" },
      { id: "b", text: "Spinal shock characterized by complete flaccidity and a transient hyperdynamic circulation with a wide pulse pressure" },
      { id: "c", text: "Autonomic dysreflexia triggered by uninhibited sympathetic outflow from fecal impaction" },
      { id: "d", text: "Cushing's triad, signaling life-threatening elevated intracranial pressure and impending brain herniation" },
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Cushing's triad, signaling life-threatening elevated intracranial pressure and impending brain herniation\" Cushing's triad is a classic, late physiological response to significantly increased intracranial pressure (ICP) and impending brainstem herniation. It consists of: (1) severe systolic hypertension with a widening pulse pressure (184/60 represents a pulse pressure of 124 mm Hg), (2) profound bradycardia (HR 46 beats/min), and (3) irregular respirations (such as Cheyne-Stokes breathing). It requires emergency interventions: elevating the head of the bed 30 degrees with head midline, hyperosmolar therapy (mannitol or 3% hypertonic saline), and urgent neurosurgical consultation. Neurogenic shock presents with hypotension, not hypertension. Why the other options fail: Neurogenic shock gives hypotension with bradycardia and warm dry skin, not a rising pressure with a widening pulse; autonomic dysreflexia occurs in spinal cord injury above T6 and is triggered by a noxious stimulus; spinal shock is flaccidity with absent reflexes, not a hyperdynamic circulation. The pattern is Cushing's triad.",
    strategy: "Memorize Cushing's triad: Hypertension with wide pulse pressure + Bradycardia + Irregular respirations. Contrast this with shock (hypotension + tachycardia).",
    difficulty: "hard",
    tags: ["neurological", "icp", "cushings-triad", "herniation", "emergency"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NEURO-005",
    categorySlug: "med-surg",
    stem: "A 22-year-old cyclist who was not wearing a helmet struck a concrete barrier. At the scene, the cyclist experienced a brief loss of consciousness for 2 minutes, woke up completely oriented, and declined emergency medical transport. Three hours later at home, the client developed a severe headache, nausea, and acute left pupil dilation with right-sided hemiparesis. What traumatic intracranial bleed should the nurse immediately suspect?",
    choices: [
      { id: "a", text: "Chronic subdural hematoma involving slow bridging cortical venous bleeding" },
      { id: "b", text: "Subarachnoid hemorrhage secondary to a ruptured anterior communicating aneurysm" },
      { id: "c", text: "Epidural hematoma involving rapid middle meningeal arterial laceration" },
      { id: "d", text: "Diffuse axonal injury with microscopic shearing of white matter tracts" },
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Epidural hematoma involving rapid middle meningeal arterial laceration\" The hallmark clinical presentation of an epidural hematoma is a brief initial loss of consciousness, followed by a temporary period of lucidity ('lucid interval'), followed by rapid neurological collapse as the arterial hematoma expands within the tight skull cavity. Epidural bleeds typically result from a temporal bone fracture lacerating the middle meningeal artery. The expanding high-pressure arterial bleed leads to uncal herniation, presenting with an ipsilateral dilated, fixed pupil (compression of CN III) and contralateral hemiparesis. It is a surgical emergency requiring immediate emergent craniotomy/burr hole decompression. Why the other options fail: A chronic subdural develops over weeks from venous bleeding in an older client; a subarachnoid haemorrhage from an aneurysm gives a sudden thunderclap headache without a lucid interval; diffuse axonal injury gives immediate and prolonged coma with no lucid interval. A brief loss of consciousness followed by a lucid interval is the epidural signature.",
    strategy: "Identify the buzzword phrase: 'brief loss of consciousness followed by a lucid interval and rapid collapse' = Epidural hematoma (arterial, middle meningeal artery).",
    difficulty: "medium",
    tags: ["neurological", "head-trauma", "epidural-hematoma", "emergency"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-NEURO-006",
    categorySlug: "med-surg",
    stem: "A client who sustained facial and basilar skull trauma has clear, watery drainage trickling from the left nostril. Which action by the nurse is safe and indicated?",
    choices: [
      { id: "a", text: "Insert a nasogastric tube to decompress the stomach and prevent vomiting" },
      { id: "b", text: "Collect the drainage on a sterile gauze pad to inspect for a classic halo ring sign" },
      { id: "c", text: "Instruct the client to blow their nose forcefully into a sterile specimen container" },
      { id: "d", text: "Pack the left nostril tightly with sterile petroleum gauze to tamponade fluid leakage" },
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Collect the drainage on a sterile gauze pad to inspect for a classic halo ring sign\" Clear fluid draining from the nose (rhinorrhea) or ears (otorrhea) following basilar skull fracture is cerebrospinal fluid (CSF) leaking through a dural tear. The nurse should collect the drainage on a sterile gauze; if CSF is mixed with blood, the blood coalesces in the center and a yellowish ring forms around the perimeter ('halo sign' or 'target sign'). A chemical strip can also check for glucose (CSF contains glucose, unlike nasal mucus). Nasogastric tubes, nasal packing, and forceful nose-blowing are strictly contraindicated because they can increase intracranial pressure, introduce bacteria directly into the subarachnoid space causing meningitis, or penetrate the cribriform plate into the brain. Why the other options fail: A nasogastric tube can pass through a fractured cribriform plate into the brain; packing the nostril traps contaminated fluid and invites meningitis; blowing the nose forces air and bacteria into the cranial cavity. Inspecting the drainage for a halo sign is safe and diagnostic.",
    strategy: "Rule out interventions that violate dural tear safety: never pack the nose, never insert NG tubes in basilar skull fracture, and never have the client blow their nose. Test for CSF with the halo sign or glucose strip.",
    difficulty: "medium",
    tags: ["neurological", "basilar-fracture", "csf-leak", "safety"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 03: Stroke & Cerebrovascular Disorders
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-NEURO-007",
    categorySlug: "pharmacology-parenteral",
    stem: "An emergency department nurse prepares to initiate intravenous alteplase (tissue plasminogen activator [tPA]) for a client with an acute ischemic stroke whose symptoms started 2 hours ago. On reassessment prior to starting the infusion, the client's blood pressure is 196/114 mm Hg. Which action must the nurse take first?",
    choices: [
      { id: "a", text: "Start the alteplase infusion immediately so that the strict three-hour therapeutic window is not missed while the pressure is managed" },
      { id: "b", text: "Administer prescribed intravenous antihypertensive therapy (e.g., labetalol or nicardipine) to reduce blood pressure below 185/110 mm Hg before infusion" },
      { id: "c", text: "Cancel the alteplase infusion permanently, because a blood pressure at this level is regarded as an absolute contraindication to thrombolysis in acute stroke" },
      { id: "d", text: "Give subcutaneous heparin to provide alternative anticoagulation while the alteplase decision is deferred until the stroke team reviews" },
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Administer prescribed intravenous antihypertensive therapy (e.g., labetalol or nicardipine) to reduce blood pressure below 185/110 mm Hg before infusion\" To safely administer IV alteplase for acute ischemic stroke, blood pressure must be maintained below 185/110 mm Hg before starting the infusion and below 180/105 mm Hg for at least 24 hours after infusion. Uncontrolled hypertension during thrombolysis dramatically increases the risk of catastrophic intracranial hemorrhage. The nurse should promptly administer prescribed IV antihypertensives (such as labetalol or nicardipine). Alteplase is not cancelled unless the blood pressure cannot be maintained below 185/110 mm Hg despite treatment. Why the other options fail: Infusing into a pressure above the threshold raises the bleeding risk and breaches protocol; cancelling permanently is wrong, because the pressure can be lowered and the drug then given; heparin adds bleeding risk and does not treat the pressure. The pressure is brought down first and the infusion follows.",
    strategy: "Recall the exact BP parameter for tPA in acute stroke: Blood pressure must be < 185/110 mm Hg before starting thrombolytic therapy. If elevated, treat BP first, then infuse tPA.",
    difficulty: "hard",
    tags: ["neurological", "stroke", "alteplase", "pharmacology", "blood-pressure"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NEURO-008",
    categorySlug: "med-surg",
    stem: "A client is admitted to the neurological step-down unit following a subarachnoid hemorrhage (SAH) caused by a ruptured intracranial berry aneurysm. The healthcare provider prescribes oral nimodipine 60 mg every 4 hours. The client asks the nurse why this medication is necessary. What is the nurse's best explanation?",
    choices: [
      { id: "a", text: "It dissolves the microscopic blood clots that have formed within the arachnoid villi, so that the circulation of cerebrospinal fluid is restored" },
      { id: "b", text: "It stimulates the bone marrow to produce clotting factors, which then seal the dome of the ruptured aneurysm" },
      { id: "c", text: "It prevents and relieves cerebral arterial vasospasm to protect brain tissue from secondary ischemic injury." },
      { id: "d", text: "It acts as a potent osmotic diuretic that draws excess fluid out of the brain parenchyma and into the circulation" },
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"It prevents and relieves cerebral arterial vasospasm to protect brain tissue from secondary ischemic injury.\" Subarachnoid hemorrhage exposes cerebral arteries to free hemoglobin and breakdown products, which frequently triggers severe cerebral arterial vasospasm between days 3 and 14 post-bleed, leading to secondary ischemic brain damage or stroke. Nimodipine is a dihydropyridine calcium channel blocker with high lipophilicity that selectively relaxes cerebral vasculature, preventing and treating delayed cerebral ischemia from vasospasm. It does not dissolve clots, seal aneurysms, or act as an osmotic diuretic. Why the other options fail: Nimodipine does not dissolve clot in the arachnoid villi, stimulate clotting factor production, or act as an osmotic diuretic. It is a calcium channel blocker given after subarachnoid haemorrhage to prevent the delayed cerebral vasospasm that causes secondary ischaemia.",
    strategy: "Associate nimodipine specifically with subarachnoid hemorrhage: Nimodipine = prevention of cerebral vasospasm and secondary ischemic deficits.",
    difficulty: "medium",
    tags: ["neurological", "sah", "nimodipine", "pharmacology", "stroke"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-NEURO-009",
    categorySlug: "med-surg",
    stem: "A nurse assists with feeding a client recovering from a right hemispheric ischemic stroke who has mild left-sided facial weakness and dysphagia. Which nursing intervention most effectively minimizes the client's risk of pulmonary aspiration during oral intake?",
    choices: [
      { id: "a", text: "Direct the client to flex their neck and tuck their chin toward the chest when swallowing" },
      { id: "b", text: "Instruct the client to tilt their head backward and chin upward while swallowing" },
      { id: "c", text: "Place the client in a semi-Fowler position at a 30-degree incline" },
      { id: "d", text: "Provide liquids through a flexible drinking straw placed on the weak, affected left side of the mouth" },
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Direct the client to flex their neck and tuck their chin toward the chest when swallowing\" The chin-tuck maneuver (flexing the neck and tucking the chin toward the chest during swallowing) widens the vallecular space and pushes the epiglottis backward over the laryngeal opening, protecting the airway and directing food safely into the esophagus. Clients should sit upright at 90 degrees (high-Fowler) during meals and for at least 30 minutes afterward. Tilting the head back opens the airway and drastically increases aspiration risk. Drinking straws and placing food on the weak/affected side both promote pocketing and aspiration. Why the other options fail: A thirty-degree semi-Fowler position is too low and does not protect the airway; tilting the head back and lifting the chin opens the airway for breathing but is the opposite of a safe swallow; a straw on the weak side delivers fluid where sensation and control are poorest. A chin tuck protects the airway during the swallow.",
    strategy: "Identify the protective biomechanics of swallowing: Chin-tuck closes the trachea and widens the esophagus. Sitting upright at 90° with food placed on the unaffected side.",
    difficulty: "easy",
    tags: ["neurological", "stroke", "dysphagia", "aspiration-precaution"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 04: Seizures & Epilepsy
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-NEURO-010",
    categorySlug: "med-surg",
    stem: "A nurse witnesses a hospitalized client suddenly cry out, lose consciousness, and develop generalized stiffening of all extremities followed by violent rhythmic muscle contractions. What is the nurse's priority action during the active convulsive phase?",
    choices: [
      { id: "a", text: "Force a padded wooden tongue blade between the teeth in order to protect the tongue from lacerations" },
      { id: "b", text: "Turn the client onto their side and remove hard or sharp objects from the immediate vicinity" },
      { id: "c", text: "Restrain the client's extremities firmly to the bed rails to prevent orthopedic fractures" },
      { id: "d", text: "Administer 50 mL of oral glucose solution to reverse potential acute hypoglycemia" },
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Turn the client onto their side and remove hard or sharp objects from the immediate vicinity\" During an active generalized tonic-clonic seizure, the priority nursing interventions are airway maintenance and physical safety: turn the client onto their side (lateral recovery position) to allow saliva/emesis to drain and prevent tongue occlusion of the airway, protect the head, loosen constrictive clothing, and remove hard or dangerous objects. Never force anything into the client's mouth (can cause dental fractures, aspiration, or airway obstruction), never forcefully restrain limbs (increases risk of bone fractures and tendon tears), and never give oral substances to an unconscious client. Why the other options fail: A tongue blade forced between the teeth can break teeth and obstruct the airway; restraining the limbs against the rails risks fracture and does not stop the seizure; oral glucose cannot be swallowed safely during a convulsion. Turning the client and clearing the area protects the airway and the head.",
    strategy: "Follow seizure safety ABCs: Turn on side, clear hazards, never insert anything into mouth, never restrain extremities.",
    difficulty: "easy",
    tags: ["neurological", "seizures", "safety", "emergency"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NEURO-011",
    categorySlug: "pharmacology-parenteral",
    stem: "A nurse cares for a client who is experiencing continuous generalized tonic-clonic seizure activity lasting 7 minutes without regaining consciousness. The client is in status epilepticus. After securing oxygen and establishing intravenous access, which medication should the nurse anticipate administering first?",
    choices: [
      { id: "a", text: "Intravenous lorazepam bolus" },
      { id: "b", text: "Oral carbamazepine suspension via feeding tube" },
      { id: "c", text: "Subcutaneous regular insulin" },
      { id: "d", text: "Intramuscular morphine sulfate" },
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Intravenous lorazepam bolus\" Status epilepticus is a medical emergency defined as continuous seizure activity lasting 5 minutes or longer, or recurrent seizures without regaining baseline consciousness between episodes. The first-line pharmacological treatment is a rapid-acting IV benzodiazepine—specifically intravenous lorazepam (or IV diazepam) to rapidly terminate neuronal hyperexcitability by enhancing GABA activity. Once the seizure is aborted, a longer-acting antiepileptic drug (e.g., levetiracetam, fosphenytoin, or valproate) is infused to prevent seizure recurrence. Oral medications cannot be administered during active status epilepticus. Why the other options fail: An oral suspension through a feeding tube is far too slow for status epilepticus and absorption is unreliable; insulin has no role; intramuscular morphine neither stops seizures nor acts quickly enough. A benzodiazepine given intravenously is the first-line termination.",
    strategy: "Recall the status epilepticus drug ladder: Benzodiazepine (IV lorazepam) FIRST to stop the seizure, followed by longer-acting antiepileptics (levetiracetam/fosphenytoin) to keep it stopped.",
    difficulty: "medium",
    tags: ["neurological", "status-epilepticus", "lorazepam", "pharmacology", "emergency"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-NEURO-012",
    categorySlug: "pharmacology-parenteral",
    stem: "A client with newly diagnosed epilepsy is prescribed oral phenytoin 100 mg three times daily. When providing discharge education, which instruction should the nurse emphasize to prevent a common adverse effect and ensure therapeutic safety?",
    choices: [
      { id: "a", text: "Stop taking the medication immediately as soon as you have been seizure-free for 7 consecutive days." },
      { id: "b", text: "Practice meticulous daily flossing and soft-bristle toothbrushing to reduce gingival hyperplasia." },
      { id: "c", text: "Double your dose if you experience morning drowsiness or mild coordination changes." },
      { id: "d", text: "Restrict your dietary intake of calcium and vitamin D to avoid medication binding." },
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Practice meticulous daily flossing and soft-bristle toothbrushing to reduce gingival hyperplasia.\" Gingival hyperplasia (overgrowth of gum tissue) is a frequent and well-documented adverse effect of long-term phenytoin therapy, occurring in up to 50% of clients. Meticulous dental hygiene, regular brushing with a soft toothbrush, daily flossing, and routine dental visits significantly minimize gum overgrowth. Phenytoin must never be abruptly discontinued because sudden withdrawal can precipitate status epilepticus. Drowsiness and ataxia are signs of phenytoin toxicity (therapeutic level is 10–20 mcg/mL), requiring provider notification and serum level testing rather than dose escalation. Why the other options fail: Stopping the drug when seizure-free withdraws the treatment and invites recurrence; doubling the dose for drowsiness increases toxicity rather than managing it; restricting calcium and vitamin D does not prevent binding and risks bone loss. Gum overgrowth is the adverse effect to watch for.",
    strategy: "Connect phenytoin with its signature adverse effect: Phenytoin = gingival hyperplasia (good oral hygiene) + narrow therapeutic range (10-20 mcg/mL).",
    difficulty: "easy",
    tags: ["neurological", "phenytoin", "pharmacology", "patient-education", "oral-care"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 05: CNS Infections & The Unconscious Patient
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-NEURO-013",
    categorySlug: "med-surg",
    stem: "A 19-year-old university student is admitted with a high fever (39.5°C [103.1°F]), severe photophobia, nuchal rigidity, and positive Kernig's and Brudzinski's signs. Bacterial meningitis is suspected. Which clinical action must the nurse implement first?",
    choices: [
      { id: "a", text: "Administer oral antipyretics and dim the room lights" },
      { id: "b", text: "Transport the client to the radiology department for a non-contrast brain CT scan" },
      { id: "c", text: "Place the client on droplet transmission precautions in a private room" },
      { id: "d", text: "Prepare the client for a diagnostic lumbar puncture before initiating any isolation" },
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Place the client on droplet transmission precautions in a private room\" Bacterial meningitis (commonly caused by Neisseria meningitidis or Streptococcus pneumoniae) is highly contagious and transmitted via respiratory droplets. The immediate priority upon clinical suspicion is instituting droplet transmission precautions (private room, surgical mask for healthcare personnel within 3 feet, client masked during transport) to prevent hospital outbreaks. Once isolation is secured, blood cultures should be drawn, followed immediately by empiric broad-spectrum IV antibiotics and dexamethasone—without delaying therapy for lumbar puncture or CT imaging if delays occur. Why the other options fail: A CT scan and a lumbar puncture are both needed, but neither comes before source isolation; antipyretics and dim lights are comfort measures; a lumbar puncture performed before isolation exposes staff and other clients. Droplet precautions come first.",
    strategy: "Prioritize infection control: When suspected infectious airborne or droplet disease enters the hospital, isolation precautions come first before diagnostic workups.",
    difficulty: "medium",
    tags: ["neurological", "meningitis", "infection-control", "droplet-precautions"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NEURO-014",
    categorySlug: "fundamentals",
    stem: "A nurse is caring for a comatose client in the intensive care unit who has lost the spontaneous corneal blink reflex and whose eyelids remain partially open. Which nursing intervention is essential to prevent permanent visual impairment?",
    choices: [
      { id: "a", text: "Administer systemic ophthalmic mydriatic eye drops to constrict pupils" },
      { id: "b", text: "Irrigate both eyes vigorously with sterile tap water every 2 hours" },
      { id: "c", text: "Apply high-flow humidified blow-by oxygen directly over the client's open orbits throughout the shift" },
      { id: "d", text: "Instill prescribed preservative-free artificial tear drops and apply protective eye shields" },
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Instill prescribed preservative-free artificial tear drops and apply protective eye shields\" In an unconscious or comatose client with incomplete eyelid closure (lagophthalmos) and absent corneal reflex, the corneal surface dries out rapidly, predisposing the client to corneal abrasions, ulcerations, scarring, and permanent blindness. The nurse must instill prescribed artificial tear drops during the day, apply lubricating ophthalmic ointment at night, and cover the eyes with sterile moisture chambers or protective eye patches. Tap water irrigation causes corneal irritation and introduces waterborne pathogens. Blowing oxygen directly onto the eyes exacerbates corneal desiccation. Why the other options fail: Tap water is not sterile and repeated irrigation injures the cornea; oxygen blown over open orbits dries them further; mydriatic drops dilate the pupil and do not close the lids or moisten the eye. Artificial tears with protective shields address the exposure.",
    strategy: "Identify the vulnerability: Loss of blink reflex leaves the cornea exposed to drying. Essential prevention = artificial tears and eye lubrication/shielding.",
    difficulty: "easy",
    tags: ["neurological", "comatose", "corneal-care", "fundamentals"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 06: Spinal Cord Injury & Chronic Neuromuscular Disorders
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-NEURO-015",
    categorySlug: "med-surg",
    stem: "A client with a complete T4 spinal cord injury who has been hospitalized for 3 weeks suddenly reports a throbbing, pounding headache and blurred vision. The nurse notes the client's blood pressure is 214/110 mm Hg, heart rate is 50 beats/min, and the skin above T4 is flushed and drenched in sweat while the lower extremities are pale and cold. Which action should the nurse take first?",
    choices: [
      { id: "a", text: "Give an extra intravenous bolus of normal saline to raise the blood pressure and relieve the headache" },
      { id: "b", text: "Place the client in the Trendelenburg position so that venous return to the heart and brain is improved" },
      { id: "c", text: "Immediately elevate the head of the bed to 90 degrees (high-Fowler) and loosen tight clothing" },
      { id: "d", text: "Obtain a twelve-lead electrocardiogram and send blood for cardiac enzymes before doing anything else" },
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Immediately elevate the head of the bed to 90 degrees (high-Fowler) and loosen tight clothing\" This client is exhibiting textbook signs of autonomic dysreflexia (hyperreflexia), an acute, life-threatening medical emergency occurring in spinal cord injury at or above T6. Noxious stimuli below the lesion (most commonly bladder distension/blocked Foley or bowel impaction) trigger massive uninhibited sympathetic discharge, causing severe vasoconstriction, dangerous hypertension, and diaphoresis above the injury, while the intact vagal nerve causes reflexive bradycardia. The immediate first action is to sit the client upright at 90 degrees (high-Fowler) with legs dangling if possible (to induce orthostatic blood pooling and lower intracranial arterial pressure), loosen all constricting garments, and immediately check the urinary catheter for kinks or distension. Why the other options fail: Trendelenburg worsens the raised pressure the dysreflexia has produced; a fluid bolus does not remove the triggering stimulus; an ECG and enzymes investigate the wrong problem. Sitting the client upright lowers the pressure while the cause, usually a full bladder or bowel, is found and relieved.",
    strategy: "Remember the first action in autonomic dysreflexia: Sit them UP (90 degrees) to lower BP gravitationally, loosen tight clothes, and search for the trigger (check bladder/Foley first).",
    difficulty: "medium",
    tags: ["neurological", "spinal-cord", "autonomic-dysreflexia", "emergency"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NEURO-016",
    categorySlug: "med-surg",
    stem: "A client admitted following a cervical spine injury at C6 presents with a blood pressure of 82/44 mm Hg, heart rate of 48 beats/min, respiratory rate of 16 breaths/min, and extremities that are warm and dry to the touch. How should the nurse distinguish this condition from hypovolemic shock?",
    choices: [
      { id: "a", text: "Neurogenic shock causes loss of sympathetic vasomotor tone, leading to vasodilation, warm skin, and bradycardia" },
      { id: "b", text: "Hypovolemic shock produces marked bradycardia with dry skin, whereas this client is displaying true neurogenic shock" },
      { id: "c", text: "This condition represents septic shock caused by immediate wound infection at the spinal injury site" },
      { id: "d", text: "This client is experiencing cardiogenic shock caused by acute anterior myocardial infarction" },
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Neurogenic shock causes loss of sympathetic vasomotor tone, leading to vasodilation, warm skin, and bradycardia\" Neurogenic shock results from disruption of descending sympathetic outflow in cervical or high-thoracic spinal cord injuries (T6 and above). The unopposed parasympathetic tone produces profound systemic vasodilation (relative hypovolemia), venous pooling, warm and dry extremities (due to vasodilation rather than peripheral vasoconstriction), hypotension, and bradycardia (loss of sympathetic cardiac accelerator fibers). In contrast, hypovolemic and cardiogenic shock present with compensatory tachycardia, cool, clammy extremities, and delayed capillary refill due to intense peripheral vasoconstriction. Why the other options fail: Hypovolaemic shock gives tachycardia and cool clammy skin, not bradycardia with warm dry skin; sepsis gives fever and warm skin with tachycardia; cardiogenic shock gives cool skin with pulmonary congestion. Loss of sympathetic tone gives vasodilation, bradycardia and warm dry skin.",
    strategy: "Contrast shock states: Classic hypovolemia = hypotension + tachycardia + cool/clammy skin. Neurogenic shock = hypotension + bradycardia + warm/dry skin.",
    difficulty: "medium",
    tags: ["neurological", "spinal-cord", "neurogenic-shock", "critical-care"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-NEURO-017",
    categorySlug: "pharmacology-parenteral",
    stem: "A nurse provides medication instructions to a client newly diagnosed with myasthenia gravis who is prescribed oral pyridostigmine. To promote safe nutrition and prevent aspiration, when should the nurse instruct the client to schedule their medication doses?",
    choices: [
      { id: "a", text: "Take the medication 30 to 45 minutes before meals" },
      { id: "b", text: "Take the medication immediately after completing large meals" },
      { id: "c", text: "Take the medication right before going to sleep at night" },
      { id: "d", text: "Take the medication only when feeling severe muscle exhaustion" },
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Take the medication 30 to 45 minutes before meals\" Pyridostigmine is an acetylcholinesterase inhibitor that enhances neuromuscular transmission by preventing acetylcholine breakdown. In myasthenia gravis, chewing and swallowing muscles fatigue quickly. Administering pyridostigmine 30 to 45 minutes prior to meals ensures that the peak therapeutic effect coincides exactly with mealtime, maximizing muscle strength for chewing and swallowing and drastically reducing the risk of choking and aspiration. Taking it after meals leaves the client vulnerable to fatigue and aspiration during eating. Why the other options fail: Taking it after large meals delays the effect until the meal is over; taking it at bedtime leaves the client weakest in the morning; taking it only when exhausted means the drug is used as a rescue rather than to enable eating. Thirty to forty-five minutes before meals peaks the effect at mealtime.",
    strategy: "Connect the timing to eating: Pyridostigmine must peak when the client is chewing. Peak onset is ~30-45 minutes; therefore, take 30-45 min BEFORE meals.",
    difficulty: "medium",
    tags: ["neurological", "myasthenia-gravis", "pyridostigmine", "pharmacology", "aspiration-precaution"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-NEURO-018",
    categorySlug: "med-surg",
    stem: "A client hospitalized with Guillain-Barré syndrome has developed progressive ascending weakness that now involves the upper extremities and trunk. Which clinical assessment parameter is the most critical for the nurse to monitor serially to detect impending respiratory failure?",
    choices: [
      { id: "a", text: "Bilateral pupillary light reflexes and accommodation" },
      { id: "b", text: "Hourly deep tendon reflex grading in the lower extremities" },
      { id: "c", text: "Daily serum blood urea nitrogen and creatinine clearance" },
      { id: "d", text: "Forced vital capacity (FVC) and negative inspiratory force" },
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Forced vital capacity (FVC) and negative inspiratory force\" Guillain-Barré syndrome (GBS) features acute inflammatory demyelinating polyneuropathy causing symmetric ascending paralysis. When the paralysis ascends to involve the intercostal nerves and diaphragm (phrenic nerve, C3–C5), respiratory failure can occur rapidly. Serial monitoring of bedside pulmonary mechanics—specifically forced vital capacity (FVC) and negative inspiratory force (NIF)—is the gold standard to detect diaphragmatic weakness before severe hypoxia occurs. An FVC falling below 15–20 mL/kg or NIF less negative than -20 cm H2O indicates urgent need for endotracheal intubation. Why the other options fail: Reflex grading tracks the neuropathy but says nothing about the respiratory failure that kills in Guillain-Barré; renal function is not the threatened system; pupillary reflexes do not predict respiratory decline. Vital capacity and inspiratory force are what decide when ventilation is needed.",
    strategy: "Associate Guillain-Barré with respiratory monitoring: GBS ascends; when it reaches the diaphragm, respiratory arrest threatens. Monitor forced vital capacity (FVC).",
    difficulty: "medium",
    tags: ["neurological", "guillain-barre", "respiratory-monitoring", "critical-care"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 07: Neuro Pharmacology & Emergency Calculations
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-NEURO-019",
    categorySlug: "pharmacology-parenteral",
    stem: "A client with cerebral edema following surgical evacuation of an acute intracranial hematoma is prescribed an intravenous infusion of 20% mannitol 100 g over 60 minutes. Which nursing intervention is essential during the preparation and administration of this medication?",
    choices: [
      { id: "a", text: "Withhold all neurological assessments during the infusion in order to avoid any stimulation of the client" },
      { id: "b", text: "Administer the solution through a rapid IV push over 30 seconds without a pump" },
      { id: "c", text: "Infuse the drug concurrently with 5% dextrose in water through the same primary line" },
      { id: "d", text: "Warm the vial and inspect for microscopic crystals, and use a dedicated in-line IV filter" },
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Warm the vial and inspect for microscopic crystals, and use a dedicated in-line IV filter\" Mannitol is a potent hyperosmolar sugar alcohol that crystallizes readily at cooler room temperatures or higher concentrations (such as 20% or 25%). The nurse must inspect the vial carefully for crystals before administration; if crystals are present, the vial should be warmed and shaken until redissolved, then cooled to body temperature. An in-line IV filter (typically 5-micron) must always be used during administration to prevent microscopic crystals from entering the client's circulation and causing microembolism. Rapid IV push without an infusion device can cause acute circulatory overload and pulmonary edema. Why the other options fail: A rapid push without a pump risks a bolus that defeats the controlled osmotic effect; dextrose in the same line promotes crystallisation and incompatibility; withholding neurological assessments removes the very monitoring the infusion requires. Warming and filtering the solution prevents crystal infusion.",
    strategy: "Remember the technical administration rule for mannitol: Mannitol crystallizes easily. Always inspect for crystals, warm if needed, and administer using an in-line IV filter.",
    difficulty: "medium",
    tags: ["neurological", "mannitol", "pharmacology", "icp", "safety"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-NEURO-020",
    categorySlug: "pharmacology-parenteral",
    stem: "A healthcare provider prescribes intravenous phenytoin 250 mg for a client experiencing cluster seizures. When preparing to administer this medication through a peripheral intravenous catheter, which nursing practice is mandatory to prevent cardiovascular collapse and catheter precipitation?",
    choices: [
      { id: "a", text: "Dilute the phenytoin exclusively in 0.9% sodium chloride and infuse at a rate not exceeding 50 mg/min" },
      { id: "b", text: "Mix the phenytoin in 5% dextrose in water (D5W) and infuse as a rapid 1-minute bolus" },
      { id: "c", text: "Administer the medication via continuous infusion over 24 hours without cardiac monitoring" },
      { id: "d", text: "Flush the intravenous line with lactated Ringer's solution immediately before and immediately after the injection" },
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Dilute the phenytoin exclusively in 0.9% sodium chloride and infuse at a rate not exceeding 50 mg/min\" Intravenous phenytoin is chemically incompatible with dextrose solutions (it will rapidly precipitate into insoluble crystals) and must only be mixed or flushed with 0.9% normal saline. Furthermore, rapid peripheral IV administration causes severe hypotension, sinus bradycardia, heart blocks, and fatal ventricular arrhythmias due to propylene glycol toxicity. Therefore, the maximum peripheral infusion rate is strictly limited to 50 mg/min in adults (often 25 mg/min in older adults), requiring continuous cardiac and blood pressure monitoring throughout the infusion. Why the other options fail: Dextrose makes phenytoin precipitate, and a one-minute bolus risks hypotension and arrhythmia; a twenty-four-hour infusion without monitoring ignores the maximum rate and the cardiac risk; lactated Ringer's is incompatible and will precipitate the drug. Normal saline at no more than 50 mg/min is correct.",
    strategy: "Recall the two inviolable rules of IV phenytoin: (1) Normal saline ONLY (never dextrose, which precipitates); (2) Never infuse faster than 50 mg/minute (prevents fatal arrhythmias/hypotension).",
    difficulty: "hard",
    tags: ["neurological", "phenytoin", "pharmacology", "iv-safety", "calculations"],
    isFree: false,
  },
];
