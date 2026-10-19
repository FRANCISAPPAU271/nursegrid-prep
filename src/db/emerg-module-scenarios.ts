import type { AuthoredQuestion } from "./authored-bank";

/**
 * Dedicated NCLEX-style clinical scenario questions for Emergency Nursing modules.
 * Authored specifically for Emergency Nursing course modules to test authentic clinical judgment,
 * emergency triage, primary ABCDE survey, airway and vascular access, shock resuscitation,
 * ACLS/BLS cardiac arrest protocols, trauma interventions, toxicology/antidotes, and critical calculations.
 */
export const EMERG_MODULE_SCENARIOS: AuthoredQuestion[] = [
  // =========================================================================
  // MODULE 01: EMERGENCY FOUNDATIONS, TRIAGE & THE PRIMARY SURVEY
  // =========================================================================
  {
    authoredId: "NG-MOD-EMERG-001",
    categorySlug: "med-surg",
    stem: "A triage nurse responds to a mass-casualty bus collision with multiple victims using the Simple Triage and Rapid Treatment (START) protocol. Which victim should be categorized with a RED (Immediate) triage tag?",
    choices: [
      { id: "a", text: "Open femur fracture, alert, respiratory rate 22/min and capillary refill of 1.5 seconds" },
      { id: "b", text: "Snoring respirations that clear on airway opening, respiratory rate 34/min and a weak rapid radial pulse" },
      { id: "c", text: "Open skull injury with brain matter exposed, apnoeic after two attempts to open the airway" },
      { id: "d", text: "Ambulatory with superficial lacerations and bilateral forearm contusions, walking to the tag point" }
    ],
    correctChoiceId: "b",
    rationale: "Under the START triage algorithm, patients are assessed on three objective physiological criteria: Respirations, Perfusion, and Mental status (RPM). Victims tagged RED (Immediate) have life-threatening injuries that are salvageable with immediate intervention: respiratory rate > 30 breaths/min, absent radial pulse or capillary refill > 2 seconds, or inability to follow simple commands. The 28-year-old has a respiratory rate of 34 bpm and compromised perfusion, requiring immediate red-tag prioritization. The 40-year-old is Yellow (Delayed), the apnoeic client with catastrophic head trauma is Black (Expectant), and the walking wounded client is Green (Minor). Why the other options fail: option a meets no red criterion, since its respiratory rate, perfusion and mentation are all normal, making it Delayed (yellow). Option c is apnoeic after airway opening and is therefore Expectant (black). Option d is walking wounded and is Minor (green).",
    strategy: "START Triage Rules: Walking wounded = Green. Not breathing even after opening airway = Black. Breathing only after opening airway OR RR > 30 OR Cap refill > 2s / no radial pulse OR unable to follow commands = RED (Immediate). All others = Yellow.",
    difficulty: "medium",
    tags: ["emergency", "start-triage", "mass-casualty", "disaster", "triage-tagging"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-EMERG-002",
    categorySlug: "med-surg",
    stem: "An emergency nurse performs a rapid ABCDE primary survey on an unresponsive client brought in following an industrial explosion. Which priority action should the nurse perform FIRST during the 'A' (Airway with Cervical Spine Protection) stage?",
    choices: [
      { id: "a", text: "Auscultate both lung bases for crackles and wheezes before any other assessment is made" },
      { id: "b", text: "Stabilise the cervical spine manually and inspect the oropharynx for blood or a foreign body" },
      { id: "c", text: "Insert two 14-gauge peripheral lines and infuse warmed normal saline under pressure" },
      { id: "d", text: "Score the Glasgow Coma Scale and check both pupils for size and reactivity to light" }
    ],
    correctChoiceId: "b",
    rationale: "In trauma and emergency primary survey, the sequential ABCDE approach dictates that threats to life must be identified and managed immediately before proceeding to the next letter. 'A' stands for Airway assessment and maintenance with Cervical Spine protection. The nurse must establish manual in-line cervical spine stabilization while assessing airway patency, suctioning secretions or blood, and removing foreign material. Breathing auscultation belongs to 'B', IV access belongs to 'C' (Circulation), and GCS scoring belongs to 'D' (Disability). Why the other options fail: option a is the Breathing step, option c is the Circulation step and option d is the Disability step, so each comes after the airway has been secured. None of them opens or protects an airway that is still at risk.",
    strategy: "In trauma resuscitation, Airway and C-spine are inextricably linked in Step A. Never move to Breathing (B) or Circulation (C) until a patent, protected airway is confirmed.",
    difficulty: "easy",
    tags: ["emergency", "primary-survey", "abcde", "airway", "c-spine-immobilization"],
    isFree: true,
  },

  // =========================================================================
  // MODULE 02: AIRWAY, ACCESS & HEMODYNAMIC MONITORING
  // =========================================================================
  {
    authoredId: "NG-MOD-EMERG-003",
    categorySlug: "med-surg",
    stem: "A 30-year-old motor vehicle crash victim is admitted with head and facial trauma. The client is unconscious and snoring loudly. Which airway opening technique must the emergency nurse use?",
    choices: [
      { id: "a", text: "Head-tilt chin-lift maneuver, because the client is unconscious and needs air now" },
      { id: "b", text: "Neck hyperextension with a chin pull, the fastest way to clear a snoring airway" },
      { id: "c", text: "Modified jaw-thrust without neck extension, holding the head in neutral alignment" },
      { id: "d", text: "Prone positioning with the head turned to one side so that secretions can drain away" }
    ],
    correctChoiceId: "c",
    rationale: "In any trauma client with suspected cervical spine injury (such as motor vehicle collisions or head/facial injuries), the modified jaw-thrust maneuver is the only acceptable manual method to open the airway. The head-tilt chin-lift maneuver hyperextends the cervical spine and can sever the spinal cord in the presence of an unstable cervical vertebral fracture. The jaw-thrust lifts the mandible forward, displacing the tongue away from the posterior pharynx without moving the cervical vertebrae. Why the other options fail: options a and b both extend the neck, which can transect a cord already compromised at the fracture. Option d leaves the airway obstructed by the tongue and secretions while preventing reassessment and ventilation.",
    strategy: "Airway opening in trauma: Always JAW-THRUST without head tilt. Head-tilt chin-lift is strictly reserved for non-trauma medical victims.",
    difficulty: "easy",
    tags: ["emergency", "jaw-thrust", "trauma-airway", "cervical-spine", "resuscitation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-EMERG-004",
    categorySlug: "med-surg",
    stem: "The emergency nurse prepares to insert an oropharyngeal airway (OPA) in an adult client. Which statement correctly describes the clinical rule for sizing, inserting, and contraindicating an OPA?",
    choices: [
      { id: "a", text: "Sized from mouth corner to angle of jaw, inserted tip up, rotated 180 degrees, and withheld with a gag reflex" },
      { id: "b", text: "Sized from the tip of the nose to the chin, inserted concave down, and used for conscious clients" },
      { id: "c", text: "Lubricated with petroleum jelly, inserted straight back along the tongue in every adult" },
      { id: "d", text: "Contraindicated in basilar skull fracture, where a nasopharyngeal airway is the preferred adjunct" }
    ],
    correctChoiceId: "a",
    rationale: "An oropharyngeal airway (OPA) is sized by measuring from the corner of the client's mouth to the angle of the jaw (mandible). In adults, it is inserted upside down (tip toward the hard palate) and rotated 180 degrees as it passes the soft palate to prevent pushing the tongue back into the pharynx. An OPA is used ONLY in unconscious/unresponsive clients who lack a gag reflex. Inserting an OPA in a conscious or semi-conscious patient with an intact gag reflex triggers vomiting, laryngospasm, and pulmonary aspiration. Nasopharyngeal airways (NPAs) are contraindicated in basilar skull fractures. Why the other options fail: option b uses nasopharyngeal sizing and the wrong indication, since an oropharyngeal airway is for the unresponsive client. Option c describes unsafe lubrication and insertion. Option d reverses the rule: the oropharyngeal airway is safe in basilar skull fracture, while the nasopharyngeal one is contraindicated.",
    strategy: "OPA rule: Unconscious ONLY (no gag reflex). Correct size: Corner of mouth to angle of jaw. Rotation: Insert tip up, rotate 180 degrees.",
    difficulty: "medium",
    tags: ["emergency", "airway-adjuncts", "opa", "gag-reflex", "intubation"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-EMERG-005",
    categorySlug: "fundamentals",
    stem: "A 45-year-old trauma victim in severe hemorrhagic shock has collapsed peripheral veins. After two unsuccessful peripheral IV attempts over 90 seconds, the resuscitation team orders emergent intraosseous (IO) access. Which anatomical site is the MOST common and preferred insertion location for adult IO access in the emergency setting?",
    choices: [
      { id: "a", text: "Anterior superior iliac spine, entered through the thickest part of the iliac crest" },
      { id: "b", text: "Mid-shaft of the femur, driven through the rectus femoris into the medullary canal" },
      { id: "c", text: "Distal radius, immediately proximal to the styloid process at the wrist joint" },
      { id: "d", text: "Proximal tibia, about 2 cm medial to the tibial tuberosity on the flat anteromedial surface" }
    ],
    correctChoiceId: "d",
    rationale: "When rapid peripheral intravenous access cannot be established within 60 to 90 seconds in a critically ill or shocked adult, intraosseous (IO) access provides an immediate, non-collapsible vascular route that accommodates fluids, blood products, and all resuscitation medications at doses identical to IV administration. The proximal tibia is the primary site: located approximately 2 cm (two fingerbreadths) medial to the tibial tuberosity along the broad, flat anteromedial surface of the tibia. Another common adult site is the proximal humerus. Why the other options fail: option a is not an intraosseous site. Option b is not d site either, and criving through muscle risks fracture and extravasation. Option c is d distal site reserved for when proximal sites are unavailable, so it is not the most common choice.",
    strategy: "IO access anatomical landmark: Proximal tibia (2 cm medial and slightly proximal to the tibial tuberosity, where the bone surface is flat and superficial).",
    difficulty: "medium",
    tags: ["emergency", "intraosseous-access", "vascular-access", "shock", "procedure"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 03: SHOCK PATHOPHYSIOLOGY, RECOGNITION & MANAGEMENT
  // =========================================================================
  {
    authoredId: "NG-MOD-EMERG-006",
    categorySlug: "fluid-electrolyte",
    stem: "A 22-year-old male arrives at the emergency department with a stab wound to the left flank. He is pale, cool, and diaphoretic. Vital signs are: blood pressure 92/70 mmHg, heart rate 136 beats/minute, respiratory rate 28 breaths/minute, and urine output 15 mL over the past hour. The emergency team activates the Massive Transfusion Protocol (MTP). What is the evidence-based product ratio for balanced resuscitation in traumatic hemorrhagic shock?",
    choices: [
      { id: "a", text: "1 unit of packed red cells, 1 unit of fresh frozen plasma and 1 unit of platelets" },
      { id: "b", text: "4 units of 0.9% sodium chloride for every 1 unit of packed red blood cells given" },
      { id: "c", text: "6 units of packed red cells followed by 500 mL of 20% albumin as the only colloid" },
      { id: "d", text: "Cryoprecipitate alone, repeated until the fibrinogen level exceeds 4 g/L" }
    ],
    correctChoiceId: "a",
    rationale: "In severe hemorrhagic shock, modern 'Damage Control Resuscitation' emphasizes early balanced blood component therapy using a 1:1:1 ratio: 1 unit of Packed Red Blood Cells, 1 unit of Fresh Frozen Plasma, and 1 unit of Platelets. This reconstituted whole blood approach prevents the lethal trauma triad (hypothermia, acidosis, and trauma-induced coagulopathy). Infusing large volumes of clear crystalloids (like normal saline) is harmful because it causes dilutional coagulopathy, hypothermia, and disrupts nascent clots. Why the other options fail: option b is crystalloid, which dilutes clotting factors and worsens the lethal triad. Option c transfuses red cells alone with an artificial colloid. Option d replaces one component only, so the coagulopathy of the other two is untouched.",
    strategy: "Massive Transfusion Protocol (MTP) golden ratio: 1:1:1 (1 PRBC : 1 FFP : 1 Platelets) to prevent dilutional coagulopathy and the lethal trauma triad.",
    difficulty: "medium",
    tags: ["emergency", "hemorrhagic-shock", "massive-transfusion", "mtp", "fluid-resuscitation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-EMERG-007",
    categorySlug: "med-surg",
    stem: "A 26-year-old diver is brought to the emergency department after hitting his head on a shallow sandbar. He has flaccid paralysis of all four extremities. Vital signs reveal blood pressure of 80/46 mmHg, heart rate of 48 beats/minute, respiratory rate of 18 breaths/minute, and skin that is pink, warm, and dry below the level of the neck. Which type of shock does this presentation represent?",
    choices: [
      { id: "a", text: "Hypovolaemic shock from an unrecognised internal haemorrhage after the fall" },
      { id: "b", text: "Cardiogenic shock from blunt myocardial contusion at the moment of impact" },
      { id: "c", text: "Septic shock from aspirated water and sand after the immersion" },
      { id: "d", text: "Neurogenic shock from loss of sympathetic outflow above the level of the cord injury" }
    ],
    correctChoiceId: "d",
    rationale: "Neurogenic shock occurs with high spinal cord injuries (typically at or above T6). Disruption of sympathetic outflow causes unopposed vagal (parasympathetic) tone, leading to profound systemic vasodilation and loss of cardiac sympathetic stimulation. The diagnostic hallmark that differentiates neurogenic shock from all other forms of shock is: HYPOTENSION accompanied by BRADYCARDIA (heart rate < 60 bpm) and warm, dry, flushed skin (due to loss of vasomotor tone and blood pooling in the periphery). In hypovolemic or cardiogenic shock, compensatory sympathetic activation causes tachycardia and cool, clammy extremities. Why the other options fail: options a, b and c all preserve sympathetic tone, so each produces tachycardia with cool, clammy skin. Only neurogenic shock removes that tone, and so only it pairs hypotension with bradycardia and warm, dry skin.",
    strategy: "Neurogenic shock hallmark: Hypotension + BRADYCARDIA + Warm, dry skin (caused by sympathetic blockade above T6). All other shocks present with tachycardia and cool clammy skin.",
    difficulty: "medium",
    tags: ["emergency", "neurogenic-shock", "spinal-cord-injury", "hemodynamics", "bradycardia"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-EMERG-008",
    categorySlug: "med-surg",
    stem: "A 32-year-old woman is stung by multiple wasps and arrives at the emergency unit with severe facial edema, hoarseness, inspiratory stridor, widespread urticaria, and a blood pressure of 78/42 mmHg. Which emergency intervention must the nurse administer FIRST without delay?",
    choices: [
      { id: "a", text: "Intramuscular adrenaline 1:1,000, 0.3 to 0.5 mg into the anterolateral mid-thigh" },
      { id: "b", text: "Intravenous diphenhydramine 50 mg, given slowly over five minutes to block histamine" },
      { id: "c", text: "Intravenous hydrocortisone 200 mg, given as the first drug in the anaphylaxis protocol" },
      { id: "d", text: "Nebulised salbutamol, repeated back-to-back until the inspiratory stridor resolves" }
    ],
    correctChoiceId: "a",
    rationale: "Intramuscular Epinephrine (1:1,000 concentration, dose 0.3–0.5 mg in adults) injected into the anterolateral mid-thigh (vastus lateralis) is the single life-saving, first-line medication for anaphylaxis. Epinephrine rapidly stimulates alpha-1 receptors (causing vasoconstriction to reverse hypotension and upper airway edema), beta-1 receptors (increasing cardiac inotropy/chronotropy), and beta-2 receptors (producing profound bronchodilation and inhibiting further mast cell mediator release). Antihistamines and corticosteroids are second-line adjuvant therapies that take 30 to 120 minutes to work and NEVER substitute for prompt epinephrine. Why the other options fail: options b and c are second-line drugs that take 30 to 120 minutes and do not reverse airway oedema or vasodilation. Option d relieves bronchospasm alone and leaves the airway swelling, hypotension and mediator release untreated.",
    strategy: "Anaphylaxis reflex: EPINEPHRINE IM into the outer thigh FIRST. Antihistamines and steroids NEVER come before epinephrine.",
    difficulty: "easy",
    tags: ["emergency", "anaphylaxis", "epinephrine", "airway-emergency", "pharmacology"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 04: CARDIAC ARREST, RESUSCITATION & ECG INTERPRETATION
  // =========================================================================
  {
    authoredId: "NG-MOD-EMERG-009",
    categorySlug: "med-surg",
    stem: "During in-hospital cardiac arrest resuscitation, the defibrillator monitor shows coarse Ventricular Fibrillation (VF). The team delivers an unsynchronized shock at 200 Joules biphasic. What is the immediate NEXT action by the resuscitation team?",
    choices: [
      { id: "a", text: "Pause for ten seconds to palpate a carotid pulse and listen for heart sounds" },
      { id: "b", text: "Give amiodarone 300 mg as an immediate bolus before any further compressions are done" },
      { id: "c", text: "Resume chest compressions at once and continue for two minutes before rechecking the rhythm" },
      { id: "d", text: "Deliver a second shock immediately at 300 Joules, back to back with the first" }
    ],
    correctChoiceId: "c",
    rationale: "According to ACLS and ERC resuscitation guidelines, immediately following any defibrillation shock, the team must resume CPR (chest compressions) immediately without pausing to check the pulse or re-analyze the rhythm. After defibrillation, the stunned myocardium takes time to establish an organized rhythm and adequate perfusion; pausing compressions produces myocardial ischemia. CPR must continue uninterrupted for a full 2-minute cycle (5 cycles of 30:2 or continuous compressions) before pausing for a brief (< 10 second) rhythm and pulse check. Why the other options fail: option a pauses perfusion at the exact moment the myocardium is stunned and delays the compressions that restore flow. Option b spends time on c drug when compressions should already have restarted. Option d exceeds the maximum biphasic energy and back-to-back shocks are not indicated.",
    strategy: "ACLS rule after shock: SHOCK -> IMMEDIATELY RESUME CHEST COMPRESSIONS. Never check a pulse or pause immediately following defibrillation.",
    difficulty: "medium",
    tags: ["emergency", "acls", "cardiac-arrest", "ventricular-fibrillation", "defibrillation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-EMERG-010",
    categorySlug: "med-surg",
    stem: "A monitor displays normal-appearing sinus rhythm at 78 beats/minute on the ECG screen in a client who is unresponsive, apnoeic, and lacks a palpable carotid pulse. The team identifies Pulseless Electrical Activity (PEA). Which management principle is CORRECT for PEA arrest?",
    choices: [
      { id: "a", text: "Synchronised cardioversion at 100 Joules, because an organised rhythm is present" },
      { id: "b", text: "Continue CPR, give adrenaline 1 mg every 3 to 5 minutes, and correct the 5 Hs and 5 Ts" },
      { id: "c", text: "Push amiodarone 300 mg, since PEA is treated like refractory ventricular fibrillation" },
      { id: "d", text: "Apply transcutaneous pacing at 80 mA, because the rhythm is bradycardic and organised" }
    ],
    correctChoiceId: "b",
    rationale: "Pulseless Electrical Activity (PEA) and Asystole are non-shockable cardiac arrest rhythms. Defibrillation is completely ineffective and contraindicated. Management relies on: (1) High-quality chest compressions with minimal interruptions, (2) Epinephrine 1 mg IV/IO administered as early as possible and repeated every 3 to 5 minutes, and (3) Rapid identification and correction of reversible causes: the 5 Hs (Hypovolemia, Hypoxia, Hydrogen ion [acidosis], Hypo/Hyperkalemia, Hypothermia) and 5 Ts (Tension pneumothorax, Tamponade [cardiac], Toxins, Thrombosis [pulmonary PE], Thrombosis [coronary MI]). Why the other options fail: option a cannot help, because there is no pulse to synchronise with and cardioversion requires a perfusing rhythm. Option c has no role in PEA. Option d treats a symptomatic bradycardia with a pulse, not a pulseless arrest.",
    strategy: "PEA & Asystole: NEVER shock! High-quality CPR + Epinephrine 1 mg q3-5min + Find and fix the 5 Hs and 5 Ts (most common causes: hypovolemia and hypoxia).",
    difficulty: "medium",
    tags: ["emergency", "acls", "pea", "5-hs-and-5-ts", "cardiac-arrest"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-EMERG-011",
    categorySlug: "med-surg",
    stem: "Following successful resuscitation from a ventricular fibrillation arrest, a 58-year-old client achieves return of spontaneous circulation (ROSC) but remains comatose and does not follow verbal commands. What is the priority evidence-based post-cardiac arrest intervention to optimize neurological recovery?",
    choices: [
      { id: "a", text: "High-dose intravenous dexamethasone, to suppress cerebral oedema after the arrest" },
      { id: "b", text: "Hyperventilation to keep PaCO2 below 25 mmHg, to constrict the cerebral vessels" },
      { id: "c", text: "Rapid 5% dextrose to keep serum glucose above 14 mmol/L after resuscitation" },
      { id: "d", text: "Targeted temperature management at 32 to 36 degrees Celsius for at least 24 hours" }
    ],
    correctChoiceId: "d",
    rationale: "Targeted Temperature Management (TTM) is the standard of care for comatose adult patients who achieve ROSC after cardiac arrest. Maintaining a constant core body temperature between 32°C and 36°C for at least 24 hours (and actively preventing fever for at least 72 hours) suppresses cerebral metabolic demand, inhibits oxygen free-radical generation, and decreases cerebral apoptosis. Routine steroids are ineffective; hyperventilation causes severe cerebral ischemia; and hyperglycemia exacerbates ischemic brain injury. Why the other options fail: option a has no outcome benefit in post-arrest coma. Option b lowers PaCO2 so far that cerebral flow falls and ischaemia deepens. Option c worsens the injury, because hyperglycaemia after arrest is associated with worse neurological recovery.",
    strategy: "Post-cardiac arrest comatose patient care: Targeted Temperature Management (32–36°C) for 24 hours + Prevent fever + Avoid hyperventilation + Maintain MAP >= 65 mmHg.",
    difficulty: "hard",
    tags: ["emergency", "post-resuscitation", "ttm", "targeted-temperature-management", "neuroprotection"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 05: TRAUMA, ENVIRONMENTAL EMERGENCIES & TOXICOLOGY
  // =========================================================================
  {
    authoredId: "NG-MOD-EMERG-012",
    categorySlug: "med-surg",
    stem: "A 24-year-old victim of a penetrating chest injury presents with acute severe dyspnea, cyanosis, distended jugular veins, tracheal deviation to the right side, and complete absence of breath sounds over the left hemithorax. The blood pressure is 70/40 mmHg with heart rate 142 bpm. What is the nurse's IMMEDIATE life-saving intervention?",
    choices: [
      { id: "a", text: "Decompress with a 14-gauge needle at the second intercostal space, midclavicular line" },
      { id: "b", text: "Send to radiology for an erect chest X-ray to confirm the diagnosis first" },
      { id: "c", text: "Intubate and start high-pressure positive pressure ventilation at once" },
      { id: "d", text: "Infuse two litres of normal saline under pressure to restore the blood pressure" }
    ],
    correctChoiceId: "a",
    rationale: "The presentation (unilateral absent breath sounds, tracheal deviation AWAY from the affected side, hypotension, jugular venous distension) is diagnostic of a left-sided Tension Pneumothorax. Air under positive pressure collapses the lung, shifts the mediastinum, compresses the vena cava, and halts venous return to the heart, leading to imminent arrest. Tension pneumothorax is a CLINICAL diagnosis; waiting for a chest X-ray is fatal. Immediate needle decompression converts the tension pneumothorax into a simple pneumothorax, restoring venous return and hemodynamics, followed by formal tube thoracostomy. Why the other options fail: option b delays treatment for b clinical diagnosis and the client arrests before the film is done. Option c raises intrathoracic pressure and accelerates the tension. Option d cannot relieve the mechanical obstruction to venous return, so the blood pressure does not recover.",
    strategy: "Tension Pneumothorax is a CLINICAL emergency: Tracheal deviation + Absent breath sounds + JVD + Shock. NEVER wait for an X-ray! Decompress immediately with needle thoracostomy.",
    difficulty: "medium",
    tags: ["emergency", "tension-pneumothorax", "needle-decompression", "trauma", "atls"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-EMERG-013",
    categorySlug: "med-surg",
    stem: "A trauma client presents with a sucking chest wound (open pneumothorax) following a stab injury. To prevent the wound from converting into a fatal tension pneumothorax, how should the nurse dress the wound while awaiting chest tube insertion?",
    choices: [
      { id: "a", text: "An occlusive dressing taped on three sides, leaving the fourth side free as a flutter valve" },
      { id: "b", text: "An airtight occlusive dressing taped securely on all four sides to seal the wound" },
      { id: "c", text: "Tightly packed dry sterile gauze, changed every four hours until the chest tube is in" },
      { id: "d", text: "Left open to air, covered only by a loose gauze swab held in place with tape strips" }
    ],
    correctChoiceId: "a",
    rationale: "An open sucking chest wound allows atmospheric air to enter the pleural space during inspiration. The proper initial dressing is a sterile occlusive dressing taped on THREE SIDES only. This creates a one-way flutter-valve mechanism: on inspiration, the dressing sucks against the chest wall to prevent external air from entering the thorax; on expiration, the untaped fourth side flutters open, allowing trapped intrapleural air to escape. Taping all four sides traps escaping air, rapidly converting an open pneumothorax into a life-threatening tension pneumothorax. Why the other options fail: option b seals all four sides, trapping air and converting the open wound into a tension pneumothorax. Option c packs the wound and restricts ventilation without any valve. Option d lets air enter freely on each breath and creates no flutter valve.",
    strategy: "Open 'sucking' chest wound rule: THREE-SIDED dressing (flutter valve). Taping all four sides turns it into a deadly tension pneumothorax!",
    difficulty: "easy",
    tags: ["emergency", "open-pneumothorax", "flutter-valve", "trauma-dressing", "atls"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-EMERG-014",
    categorySlug: "pharmacology-parenteral",
    stem: "An 18-year-old is brought to the emergency department 5 hours after ingesting 25 tablets of 500 mg paracetamol (acetaminophen) in an intentional overdose. The serum paracetamol level drawn at 5 hours plots above the treatment line on the Rumack-Matthew nomogram. Which specific antidote must the nurse administer to prevent fulminant hepatic necrosis?",
    choices: [
      { id: "a", text: "Flumazenil, given as a bolus and repeated until the client is fully alert" },
      { id: "b", text: "Deferoxamine, infused over eight hours with serial iron studies" },
      { id: "c", text: "N-acetylcysteine, started at once and continued on the weight-based regimen" },
      { id: "d", text: "Pralidoxime, with atropine, until the muscarinic effects settle" }
    ],
    correctChoiceId: "c",
    rationale: "N-acetylcysteine (NAC) is the specific antidote for acetaminophen toxicity. In acetaminophen overdose, hepatic glutathione stores are depleted, allowing the toxic metabolite NAPQI (N-acetyl-p-benzoquinone imine) to bind to hepatocellular proteins, causing centrilobular hepatic necrosis. NAC acts as a glutathione precursor and substitute, binding and detoxifying NAPQI. When administered within 8 hours of ingestion, NAC provides near 100% protection against severe hepatotoxicity. Flumazenil reverses benzodiazepines; Deferoxamine chelates iron; Pralidoxime treats organophosphates. Why the other options fail: Flumazenil reverses benzodiazepines and would do nothing to a paracetamol load; deferoxamine chelates iron; atropine with pralidoxime is the organophosphate antidote. None restores glutathione or neutralises NAPQI, so hepatic necrosis would proceed.",
    strategy: "Acetaminophen/Paracetamol antidote = N-ACETYLCYSTEINE (NAC). It replenishes glutathione to neutralize the toxic metabolite NAPQI.",
    difficulty: "easy",
    tags: ["emergency", "toxicology", "paracetamol-overdose", "n-acetylcysteine", "antidotes"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-EMERG-015",
    categorySlug: "pharmacology-parenteral",
    stem: "A 29-year-old client with known opioid use is found unresponsive with pinpoint pupils, cyanotic nail beds, and a respiratory rate of 4 breaths/minute. The nurse administers naloxone. What critical clinical consideration regarding naloxone's pharmacokinetics must the emergency nurse monitor?",
    choices: [
      { id: "a", text: "Its 12 to 24 hour duration means a single dose protects the client through the night" },
      { id: "b", text: "Repeated doses given within six hours cause permanent loss of renal function" },
      { id: "c", text: "Its 30 to 90 minute duration is shorter than most opioids, so respiratory depression can return" },
      { id: "d", text: "It is a partial opioid agonist, so higher doses deepen the sedation and hypoventilation" }
    ],
    correctChoiceId: "c",
    rationale: "Naloxone is a pure opioid competitive antagonist with a relatively short half-life (duration of action typically 30 to 90 minutes). Many opioids (such as methadone, sustained-release oxycodone, or high-dose fentanyl) have half-lives extending for several hours or days. Once naloxone dissociates from the mu-opioid receptors, the patient can rapidly slip back into life-threatening hypoventilation, coma, and apnea ('rebound overdose'). The nurse must continuously monitor respiratory status for at least several hours and prepare for repeat doses or a continuous naloxone infusion. Why the other options fail: option a overstates the duration several-fold. Option b invents a renal toxicity that naloxone does not have. Option d gets the pharmacology wrong, because naloxone is an antagonist and does not sedate or depress respiration.",
    strategy: "Naloxone wears off BEFORE the opioid wears off! Always monitor for rebound respiratory depression as the antidote clears.",
    difficulty: "medium",
    tags: ["emergency", "opioid-overdose", "naloxone", "toxicology", "pharmacokinetics"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-EMERG-016",
    categorySlug: "fluid-electrolyte",
    stem: "A 70 kg firefighter sustains second- and third-degree thermal burns covering 40% of his Total Body Surface Area (TBSA). Using the standard Parkland formula (4 mL x kg x % TBSA burn of Ringer's lactate), how much intravenous fluid should the nurse administer during the FIRST 8 HOURS following the burn injury?",
    choices: [
      { id: "a", text: "2,800 mL" },
      { id: "b", text: "5,600 mL" },
      { id: "c", text: "11,200 mL" },
      { id: "d", text: "1,400 mL" }
    ],
    correctChoiceId: "b",
    rationale: "Using the Parkland formula: Total 24-hour volume = 4 mL x weight (kg) x % TBSA burn. Total 24-hour volume = 4 mL x 70 kg x 40 = 11,200 mL of Ringer's lactate. The Parkland schedule requires: Half (50%) of the total calculated volume administered in the first 8 hours calculated from the TIME OF INJURY: 11,200 mL / 2 = 5,600 mL in the first 8 hours. The remaining half (5,600 mL) is infused over the subsequent 16 hours. Resuscitation is titrated to maintain a minimum adult urine output of 0.5 to 1.0 mL/kg/hour (30–50 mL/hr). Why the other options fail: option c is the full 24-hour total, not the first eight hours. Option a is one quarter of the total and option d is one eighth, so both under-resuscitate the client during the most critical window.",
    strategy: "Parkland Formula: Total = 4 mL x kg x % TBSA. First 8 hours = 50% (half) of total. Next 16 hours = remaining 50%. Total: 4 x 70 x 40 = 11,200 mL. First 8 hours = 5,600 mL.",
    difficulty: "medium",
    tags: ["emergency", "parkland-formula", "burn-resuscitation", "fluid-electrolyte", "dosage-calculation"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 06: CRITICAL CARE, DISASTERS & ETHICS
  // =========================================================================
  {
    authoredId: "NG-MOD-EMERG-017",
    categorySlug: "med-surg",
    stem: "A mechanically ventilated trauma client in the intensive care unit suddenly triggers high-pressure ventilator alarms. The client becomes acutely agitated, cyanotic, and heart rate jumps from 88 to 140 bpm while oxygen saturation drops to 78%. What is the nurse's IMMEDIATE first action?",
    choices: [
      { id: "a", text: "Increase PEEP by 5 cmH2O and reassess the oxygen saturation in five minutes" },
      { id: "b", text: "Give a bolus dose of a neuromuscular blocking agent to stop the agitation first" },
      { id: "c", text: "Silence the alarm and allow the ventilator five minutes to recalibrate on its own" },
      { id: "d", text: "Disconnect from the ventilator and bag manually with 100% oxygen while troubleshooting" }
    ],
    correctChoiceId: "d",
    rationale: "When a ventilated patient suddenly deteriorates and the cause is not immediately obvious, the universal rule of critical care is: Disconnect the patient from the ventilator immediately and begin manual ventilation using a bag-valve-mask (BVM) reservoir connected to 100% high-flow oxygen. This immediately differentiates between a machine/circuit failure and a patient problem. While manually bagging, the nurse troubleshoots using the DOPE mnemonic: Displacement of tube, Obstruction (suction secretions), Pneumothorax (listen for breath sounds), Equipment failure. Why the other options fail: option a raises pressure in d circuit that is already alarming and does not address the obstruction. Option b paralyses the client and hides the deterioration. Option c wastes the minutes in which the cause must be found and corrected.",
    strategy: "Sudden ventilator distress rule: DISCONNECT from ventilator and BAG manually with 100% O2 first! Then troubleshoot using DOPE (Displacement, Obstruction, Pneumothorax, Equipment).",
    difficulty: "medium",
    tags: ["emergency", "critical-care", "mechanical-ventilation", "dope-mnemonic", "airway-emergency"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-EMERG-018",
    categorySlug: "leadership-delegation",
    stem: "Following a catastrophic industrial collapse with dozens of severely injured workers, an emergency department is overwhelmed. Which bioethical principle guides the transition from standard bedside emergency care to crisis standards of care and mass-casualty triage?",
    choices: [
      { id: "a", text: "Autonomy, giving every arrival equal access to intensive care regardless of prognosis" },
      { id: "b", text: "First come, first served, with allocation decided strictly by order of arrival" },
      { id: "c", text: "Utilitarianism, directing scarce resources to the greatest number of salvageable lives" },
      { id: "d", text: "Non-maleficence, withholding invasive care until specialist teams are all assembled" }
    ],
    correctChoiceId: "c",
    rationale: "Under routine emergency conditions, care is guided by individual patient beneficence and autonomy (providing every available resource to the single patient). In disaster mass casualty triage and crisis standards of care, the ethical framework shifts fundamentally to utilitarianism: the duty to allocate scarce medical resources (ventilators, blood, surgical suites, staff) to produce the greatest good for the greatest number of salvageable individuals. Patients with catastrophic injuries who have minimal chance of survival despite maximal resources are categorized as expectant/palliative (black tag) so that available resources save those who can survive. Why the other options fail: option a describes routine autonomy, which cannot be honoured equally once resources are exhausted. Option b allocates by queue position and ignores prognosis. Option d withholds care, which harms the very clients it claims to protect.",
    strategy: "Disaster triage ethics: Utilitarian framework (Greatest good for the greatest number). Focus resources on salvageable patients with highest likelihood of survival.",
    difficulty: "medium",
    tags: ["emergency", "disaster-ethics", "crisis-standards", "triage-principles", "leadership"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 07: EMERGENCY DRUGS & CALCULATIONS
  // =========================================================================
  {
    authoredId: "NG-MOD-EMERG-019",
    categorySlug: "pharmacology-parenteral",
    stem: "A 40-year-old client presents to the emergency unit with narrow-complex Paroxysmal Supraventricular Tachycardia (PSVT) at a rate of 190 beats/minute that fails to convert after vagal maneuvers. The physician orders adenosine 6 mg IV push. How should the nurse administer this medication to ensure therapeutic efficacy?",
    choices: [
      { id: "a", text: "Dilute in 100 mL of normal saline and infuse over 15 minutes through a peripheral line" },
      { id: "b", text: "Inject into the deltoid muscle and massage the site firmly for at least one minute" },
      { id: "c", text: "Slow IV push over two minutes, watching the monitor for a rise in blood pressure" },
      { id: "d", text: "Rapid IV push over 1 to 2 seconds through a large antecubital vein, then a 20 mL saline flush" }
    ],
    correctChoiceId: "d",
    rationale: "Adenosine has an extremely short biological half-life of less than 10 seconds because it is rapidly cleared and taken up by vascular endothelial cells and erythrocytes. To reach the AV node in therapeutic concentration before degrading, it must be administered as an ultra-rapid IV push (over 1 to 2 seconds) through a proximal, large-bore intravenous site (preferably the antecubital fossa), followed immediately by a rapid 20 mL normal saline flush and brief elevation of the arm. The nurse must warn the client about transient feelings of facial flushing, chest tightness, or impending doom, and anticipate a brief period of asystole on the monitor. Why the other options fail: Diluting and infusing over fifteen minutes slows a drug whose half-life is under ten seconds; an intramuscular injection never reaches the atrioventricular node in time; a slow push over two minutes delivers too little, too late.",
    strategy: "Adenosine administration: Rapid IV push (1-2 seconds) + Immediate 20 mL saline flush + Antecubital site (closest to heart). Warn patient of brief chest tightness/asystole.",
    difficulty: "medium",
    tags: ["emergency", "adenosine", "psvt", "arrhythmia", "pharmacology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-EMERG-020",
    categorySlug: "pharmacology-parenteral",
    stem: "A client in septic shock weighing 70 kg is prescribed a norepinephrine infusion at 0.1 mcg/kg/min to maintain Mean Arterial Pressure (MAP) >= 65 mmHg. The pharmacy provides norepinephrine 4 mg in 250 mL of 5% Dextrose in Water (concentration: 16 mcg/mL). What rate in millilitres per hour (mL/hr) should the nurse set on the electronic infusion pump?",
    choices: [
      { id: "a", text: "13.1 mL/hr" },
      { id: "b", text: "26.3 mL/hr" },
      { id: "c", text: "35.0 mL/hr" },
      { id: "d", text: "52.5 mL/hr" }
    ],
    correctChoiceId: "b",
    rationale: "Step 1: Calculate the total mcg per minute required: 70 kg x 0.1 mcg/kg/min = 7 mcg/min. Step 2: Convert mcg/min to mcg/hour: 7 mcg/min x 60 min/hr = 420 mcg/hour. Step 3: Determine the drug concentration in mcg/mL: 4 mg in 250 mL = 4,000 mcg / 250 mL = 16 mcg/mL. Step 4: Calculate the pump rate in mL/hr: 420 mcg/hr / 16 mcg/mL = 26.25 mL/hr (rounds to 26.3 mL/hr). Why the other options fail: options a and d come from using double the true concentration and double the dose respectively. Option c follows a transposed figure in the calculation. Each would deliver a dose other than the prescribed 0.1 mcg/kg/min.",
    strategy: "Vasoactive infusion formula: Rate (mL/hr) = (Dose x Weight x 60) / Concentration. Rate = (0.1 x 70 x 60) / 16 = 420 / 16 = 26.25 mL/hr.",
    difficulty: "hard",
    tags: ["emergency", "norepinephrine", "vasopressor", "infusion-rate-calculation", "critical-care"],
    isFree: false,
  },
];
