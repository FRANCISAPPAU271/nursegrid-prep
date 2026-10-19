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
      { id: "a", text: "A 28-year-old client with severe facial trauma and snoring respirations that immediately clear when the airway is opened, respiratory rate of 34 breaths/minute, and a radial pulse that is weak and rapid" },
      { id: "b", text: "A 40-year-old client with an open femur fracture who is alert, breathing at 22 breaths/minute, with a capillary refill of 1.5 seconds" },
      { id: "c", text: "A 55-year-old client with catastrophic open skull injury, brain matter exposed, who remains apnoeic after two manual attempts to open the airway" },
      { id: "d", text: "A 19-year-old client who walked away from the vehicle with superficial lacerations and bilateral forearm contusions" }
    ],
    correctChoiceId: "a",
    rationale: "Under the START triage algorithm, patients are assessed on three objective physiological criteria: Respirations, Perfusion, and Mental status (RPM). Victims tagged RED (Immediate) have life-threatening injuries that are salvageable with immediate intervention: respiratory rate > 30 breaths/min, absent radial pulse or capillary refill > 2 seconds, or inability to follow simple commands. The 28-year-old has a respiratory rate of 34 bpm and compromised perfusion, requiring immediate red-tag prioritization. The 40-year-old is Yellow (Delayed), the apnoeic client with catastrophic head trauma is Black (Expectant), and the walking wounded client is Green (Minor).",
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
      { id: "a", text: "Auscultate bilateral lung bases for crackles and wheezes" },
      { id: "b", text: "Manually stabilize the cervical spine in a neutral alignment and inspect the oropharynx for blood, vomitus, or foreign body obstruction" },
      { id: "c", text: "Establish two 14-gauge peripheral intravenous lines and infuse warm normal saline" },
      { id: "d", text: "Measure the client's Glasgow Coma Scale (GCS) score and assess pupil reactivity" }
    ],
    correctChoiceId: "b",
    rationale: "In trauma and emergency primary survey, the sequential ABCDE approach dictates that threats to life must be identified and managed immediately before proceeding to the next letter. 'A' stands for Airway assessment and maintenance with Cervical Spine protection. The nurse must establish manual in-line cervical spine stabilization while assessing airway patency, suctioning secretions or blood, and removing foreign material. Breathing auscultation belongs to 'B', IV access belongs to 'C' (Circulation), and GCS scoring belongs to 'D' (Disability).",
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
      { id: "a", text: "Head-tilt chin-lift maneuver" },
      { id: "b", text: "Neck hyperextension with chin pull" },
      { id: "c", text: "Modified jaw-thrust maneuver without hyperextending the neck" },
      { id: "d", text: "Placing the client in a prone position with head turned to the side" }
    ],
    correctChoiceId: "c",
    rationale: "In any trauma client with suspected cervical spine injury (such as motor vehicle collisions or head/facial injuries), the modified jaw-thrust maneuver is the only acceptable manual method to open the airway. The head-tilt chin-lift maneuver hyperextends the cervical spine and can sever the spinal cord in the presence of an unstable cervical vertebral fracture. The jaw-thrust lifts the mandible forward, displacing the tongue away from the posterior pharynx without moving the cervical vertebrae.",
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
      { id: "a", text: "An OPA is sized from the tip of the nose to the chin, inserted concave down, and is indicated for conscious clients with severe asthma" },
      { id: "b", text: "An OPA should be lubricated with petroleum jelly and inserted straight back along the tongue with the tip pointed downward in all adults" },
      { id: "c", text: "An OPA is contraindicated in clients with basilar skull fractures, for whom a nasopharyngeal airway is the preferred adjunct" },
      { id: "d", text: "An OPA is sized from the corner of the mouth to the angle of the jaw, inserted with the tip pointing toward the hard palate and rotated 180 degrees, and is strictly contraindicated in clients with an intact gag reflex" }
    ],
    correctChoiceId: "d",
    rationale: "An oropharyngeal airway (OPA) is sized by measuring from the corner of the client's mouth to the angle of the jaw (mandible). In adults, it is inserted upside down (tip toward the hard palate) and rotated 180 degrees as it passes the soft palate to prevent pushing the tongue back into the pharynx. An OPA is used ONLY in unconscious/unresponsive clients who lack a gag reflex. Inserting an OPA in a conscious or semi-conscious patient with an intact gag reflex triggers vomiting, laryngospasm, and pulmonary aspiration. Nasopharyngeal airways (NPAs) are contraindicated in basilar skull fractures.",
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
      { id: "a", text: "Proximal tibia, approximately 2 cm medial to the tibial tuberosity on the flat anteromedial surface" },
      { id: "b", text: "Anterior superior iliac spine" },
      { id: "c", text: "Mid-shaft of the femur directly through the rectus femoris muscle" },
      { id: "d", text: "Distal radius immediately proximal to the styloid process" }
    ],
    correctChoiceId: "a",
    rationale: "When rapid peripheral intravenous access cannot be established within 60 to 90 seconds in a critically ill or shocked adult, intraosseous (IO) access provides an immediate, non-collapsible vascular route that accommodates fluids, blood products, and all resuscitation medications at doses identical to IV administration. The proximal tibia is the primary site: located approximately 2 cm (two fingerbreadths) medial to the tibial tuberosity along the broad, flat anteromedial surface of the tibia. Another common adult site is the proximal humerus.",
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
      { id: "a", text: "4 units of 0.9% Normal Saline to each 1 unit of Packed Red Blood Cells" },
      { id: "b", text: "1 unit of Packed Red Blood Cells (PRBCs) to 1 unit of Fresh Frozen Plasma (FFP) to 1 unit of Platelets (1:1:1 ratio)" },
      { id: "c", text: "6 units of PRBCs followed by 500 mL of 20% Albumin" },
      { id: "d", text: "Cryoprecipitate exclusively until fibrinogen exceeds 4 g/L" }
    ],
    correctChoiceId: "b",
    rationale: "In severe hemorrhagic shock, modern 'Damage Control Resuscitation' emphasizes early balanced blood component therapy using a 1:1:1 ratio: 1 unit of Packed Red Blood Cells, 1 unit of Fresh Frozen Plasma, and 1 unit of Platelets. This reconstituted whole blood approach prevents the lethal trauma triad (hypothermia, acidosis, and trauma-induced coagulopathy). Infusing large volumes of clear crystalloids (like normal saline) is harmful because it causes dilutional coagulopathy, hypothermia, and disrupts nascent clots.",
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
      { id: "a", text: "Hypovolaemic shock" },
      { id: "b", text: "Cardiogenic shock" },
      { id: "c", text: "Neurogenic shock" },
      { id: "d", text: "Septic shock" }
    ],
    correctChoiceId: "c",
    rationale: "Neurogenic shock occurs with high spinal cord injuries (typically at or above T6). Disruption of sympathetic outflow causes unopposed vagal (parasympathetic) tone, leading to profound systemic vasodilation and loss of cardiac sympathetic stimulation. The diagnostic hallmark that differentiates neurogenic shock from all other forms of shock is: HYPOTENSION accompanied by BRADYCARDIA (heart rate < 60 bpm) and warm, dry, flushed skin (due to loss of vasomotor tone and blood pooling in the periphery). In hypovolemic or cardiogenic shock, compensatory sympathetic activation causes tachycardia and cool, clammy extremities.",
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
      { id: "a", text: "Intravenous diphenhydramine 50 mg over 5 minutes" },
      { id: "b", text: "Intravenous hydrocortisone 200 mg" },
      { id: "c", text: "Inhaled salbutamol nebulization" },
      { id: "d", text: "Intramuscular Epinephrine (adrenaline) 1:1,000 (0.3 to 0.5 mg) injected into the anterolateral mid-thigh" }
    ],
    correctChoiceId: "d",
    rationale: "Intramuscular Epinephrine (1:1,000 concentration, dose 0.3–0.5 mg in adults) injected into the anterolateral mid-thigh (vastus lateralis) is the single life-saving, first-line medication for anaphylaxis. Epinephrine rapidly stimulates alpha-1 receptors (causing vasoconstriction to reverse hypotension and upper airway edema), beta-1 receptors (increasing cardiac inotropy/chronotropy), and beta-2 receptors (producing profound bronchodilation and inhibiting further mast cell mediator release). Antihistamines and corticosteroids are second-line adjuvant therapies that take 30 to 120 minutes to work and NEVER substitute for prompt epinephrine.",
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
      { id: "a", text: "Immediately resume high-quality chest compressions starting with compressions for 2 minutes before re-checking the rhythm" },
      { id: "b", text: "Pause for 10 seconds to palpate the carotid pulse and auscultate heart sounds" },
      { id: "c", text: "Administer an immediate intravenous bolus of 300 mg amiodarone" },
      { id: "d", text: "Deliver a second immediate back-to-back shock at 300 Joules" }
    ],
    correctChoiceId: "a",
    rationale: "According to ACLS and ERC resuscitation guidelines, immediately following any defibrillation shock, the team must resume CPR (chest compressions) immediately without pausing to check the pulse or re-analyze the rhythm. After defibrillation, the stunned myocardium takes time to establish an organized rhythm and adequate perfusion; pausing compressions produces myocardial ischemia. CPR must continue uninterrupted for a full 2-minute cycle (5 cycles of 30:2 or continuous compressions) before pausing for a brief (< 10 second) rhythm and pulse check.",
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
      { id: "a", text: "Deliver an immediate synchronized cardioversion shock at 100 Joules" },
      { id: "b", text: "PEA is a non-shockable rhythm; continue high-quality CPR, administer epinephrine 1 mg IV every 3 to 5 minutes, and aggressively identify and reverse the underlying cause (5 Hs and 5 Ts)" },
      { id: "c", text: "Administer an immediate intravenous push of 300 mg amiodarone" },
      { id: "d", text: "Apply transcutaneous pacing patches and pace at 80 mA" }
    ],
    correctChoiceId: "b",
    rationale: "Pulseless Electrical Activity (PEA) and Asystole are non-shockable cardiac arrest rhythms. Defibrillation is completely ineffective and contraindicated. Management relies on: (1) High-quality chest compressions with minimal interruptions, (2) Epinephrine 1 mg IV/IO administered as early as possible and repeated every 3 to 5 minutes, and (3) Rapid identification and correction of reversible causes: the 5 Hs (Hypovolemia, Hypoxia, Hydrogen ion [acidosis], Hypo/Hyperkalemia, Hypothermia) and 5 Ts (Tension pneumothorax, Tamponade [cardiac], Toxins, Thrombosis [pulmonary PE], Thrombosis [coronary MI]).",
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
      { id: "a", text: "Administer high-dose intravenous dexamethasone boluses to suppress cerebral edema" },
      { id: "b", text: "Hyperventilate the client to maintain PaCO2 below 25 mmHg to induce cerebral vasoconstriction" },
      { id: "c", text: "Initiate Targeted Temperature Management (TTM) maintaining a constant core body temperature between 32 and 36 degrees Celsius for at least 24 hours" },
      { id: "d", text: "Infuse 5% Dextrose in water rapidly to maintain serum glucose levels above 14 mmol/L" }
    ],
    correctChoiceId: "c",
    rationale: "Targeted Temperature Management (TTM) is the standard of care for comatose adult patients who achieve ROSC after cardiac arrest. Maintaining a constant core body temperature between 32°C and 36°C for at least 24 hours (and actively preventing fever for at least 72 hours) suppresses cerebral metabolic demand, inhibits oxygen free-radical generation, and decreases cerebral apoptosis. Routine steroids are ineffective; hyperventilation causes severe cerebral ischemia; and hyperglycemia exacerbates ischemic brain injury.",
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
      { id: "a", text: "Transport the client to the radiology suite for an emergent upright chest X-ray" },
      { id: "b", text: "Endotracheally intubate the client and initiate high-pressure positive-pressure mechanical ventilation" },
      { id: "c", text: "Administer a rapid infusion of 2 liters of normal saline under pressure" },
      { id: "d", text: "Perform immediate needle thoracostomy decompression using a 14-gauge needle in the 2nd intercostal space at the midclavicular line (or 5th ICS anterior axillary line) on the left side" }
    ],
    correctChoiceId: "d",
    rationale: "The presentation (unilateral absent breath sounds, tracheal deviation AWAY from the affected side, hypotension, jugular venous distension) is diagnostic of a left-sided Tension Pneumothorax. Air under positive pressure collapses the lung, shifts the mediastinum, compresses the vena cava, and halts venous return to the heart, leading to imminent arrest. Tension pneumothorax is a CLINICAL diagnosis; waiting for a chest X-ray is fatal. Immediate needle decompression converts the tension pneumothorax into a simple pneumothorax, restoring venous return and hemodynamics, followed by formal tube thoracostomy.",
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
      { id: "a", text: "Cover the wound with a sterile non-adherent dressing taped on three sides, creating a flutter-valve effect" },
      { id: "b", text: "Cover the wound with a completely airtight occlusive dressing taped securely on all four sides" },
      { id: "c", text: "Pack the wound cavity tightly with dry sterile gauze sponges" },
      { id: "d", text: "Leave the wound open to air without any covering" }
    ],
    correctChoiceId: "a",
    rationale: "An open sucking chest wound allows atmospheric air to enter the pleural space during inspiration. The proper initial dressing is a sterile occlusive dressing taped on THREE SIDES only. This creates a one-way flutter-valve mechanism: on inspiration, the dressing sucks against the chest wall to prevent external air from entering the thorax; on expiration, the untaped fourth side flutters open, allowing trapped intrapleural air to escape. Taping all four sides traps escaping air, rapidly converting an open pneumothorax into a life-threatening tension pneumothorax.",
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
      { id: "a", text: "Flumazenil" },
      { id: "b", text: "N-acetylcysteine (NAC)" },
      { id: "c", text: "Deferoxamine" },
      { id: "d", text: "Pralidoxime" }
    ],
    correctChoiceId: "b",
    rationale: "N-acetylcysteine (NAC) is the specific antidote for acetaminophen toxicity. In acetaminophen overdose, hepatic glutathione stores are depleted, allowing the toxic metabolite NAPQI (N-acetyl-p-benzoquinone imine) to bind to hepatocellular proteins, causing centrilobular hepatic necrosis. NAC acts as a glutathione precursor and substitute, binding and detoxifying NAPQI. When administered within 8 hours of ingestion, NAC provides near 100% protection against severe hepatotoxicity. Flumazenil reverses benzodiazepines; Deferoxamine chelates iron; Pralidoxime treats organophosphates.",
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
      { id: "a", text: "Naloxone has a duration of action of 12 to 24 hours, so a single dose provides complete protection" },
      { id: "b", text: "Naloxone causes permanent loss of renal function if repeated within 6 hours" },
      { id: "c", text: "Naloxone's duration of action (30 to 90 minutes) is shorter than that of most opioids, placing the client at high risk of rebound respiratory depression once the naloxone wears off" },
      { id: "d", text: "Naloxone is an opioid agonist that causes profound sedation and respiratory depression at higher doses" }
    ],
    correctChoiceId: "c",
    rationale: "Naloxone is a pure opioid competitive antagonist with a relatively short half-life (duration of action typically 30 to 90 minutes). Many opioids (such as methadone, sustained-release oxycodone, or high-dose fentanyl) have half-lives extending for several hours or days. Once naloxone dissociates from the mu-opioid receptors, the patient can rapidly slip back into life-threatening hypoventilation, coma, and apnea ('rebound overdose'). The nurse must continuously monitor respiratory status for at least several hours and prepare for repeat doses or a continuous naloxone infusion.",
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
      { id: "b", text: "11,200 mL" },
      { id: "c", text: "1,400 mL" },
      { id: "d", text: "5,600 mL" }
    ],
    correctChoiceId: "d",
    rationale: "Using the Parkland formula: Total 24-hour volume = 4 mL x weight (kg) x % TBSA burn. Total 24-hour volume = 4 mL x 70 kg x 40 = 11,200 mL of Ringer's lactate. The Parkland schedule requires: Half (50%) of the total calculated volume administered in the first 8 hours calculated from the TIME OF INJURY: 11,200 mL / 2 = 5,600 mL in the first 8 hours. The remaining half (5,600 mL) is infused over the subsequent 16 hours. Resuscitation is titrated to maintain a minimum adult urine output of 0.5 to 1.0 mL/kg/hour (30–50 mL/hr).",
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
      { id: "a", text: "Immediately disconnect the client from the mechanical ventilator and ventilate manually with a bag-valve-mask device attached to 100% oxygen" },
      { id: "b", text: "Increase the ventilator positive end-expiratory pressure (PEEP) setting by 5 cmH2O" },
      { id: "c", text: "Administer an intravenous neuromuscular blocking agent bolus" },
      { id: "d", text: "Silence the alarm and wait 5 minutes for the ventilator to recalibrate" }
    ],
    correctChoiceId: "a",
    rationale: "When a ventilated patient suddenly deteriorates and the cause is not immediately obvious, the universal rule of critical care is: Disconnect the patient from the ventilator immediately and begin manual ventilation using a bag-valve-mask (BVM) reservoir connected to 100% high-flow oxygen. This immediately differentiates between a machine/circuit failure and a patient problem. While manually bagging, the nurse troubleshoots using the DOPE mnemonic: Displacement of tube, Obstruction (suction secretions), Pneumothorax (listen for breath sounds), Equipment failure.",
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
      { id: "a", text: "Individual autonomy, granting each arriving client equal access to intensive care resources regardless of prognosis" },
      { id: "b", text: "Utilitarianism, prioritizing resource allocation to provide the greatest good for the greatest number of salvageable lives" },
      { id: "c", text: "First-come, first-served allocation based strictly on arrival order at the facility" },
      { id: "d", text: "Non-maleficence, withholding all invasive procedures until full specialist teams assemble" }
    ],
    correctChoiceId: "b",
    rationale: "Under routine emergency conditions, care is guided by individual patient beneficence and autonomy (providing every available resource to the single patient). In disaster mass casualty triage and crisis standards of care, the ethical framework shifts fundamentally to utilitarianism: the duty to allocate scarce medical resources (ventilators, blood, surgical suites, staff) to produce the greatest good for the greatest number of salvageable individuals. Patients with catastrophic injuries who have minimal chance of survival despite maximal resources are categorized as expectant/palliative (black tag) so that available resources save those who can survive.",
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
      { id: "a", text: "Dilute in 100 mL normal saline and infuse slowly over 15 minutes via a dedicated peripheral line" },
      { id: "b", text: "Inject intramuscularly into the deltoid muscle followed by vigorous massage" },
      { id: "c", text: "Administer as a rapid intravenous push over 1 to 2 seconds through a large-bore antecubital IV, followed immediately by a rapid 20 mL normal saline flush" },
      { id: "d", text: "Administer as a slow IV push over 2 minutes while monitoring for hypertension" }
    ],
    correctChoiceId: "c",
    rationale: "Adenosine has an extremely short biological half-life of less than 10 seconds because it is rapidly cleared and taken up by vascular endothelial cells and erythrocytes. To reach the AV node in therapeutic concentration before degrading, it must be administered as an ultra-rapid IV push (over 1 to 2 seconds) through a proximal, large-bore intravenous site (preferably the antecubital fossa), followed immediately by a rapid 20 mL normal saline flush and brief elevation of the arm. The nurse must warn the client about transient feelings of facial flushing, chest tightness, or impending doom, and anticipate a brief period of asystole on the monitor.",
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
      { id: "b", text: "35.0 mL/hr" },
      { id: "c", text: "52.5 mL/hr" },
      { id: "d", text: "26.3 mL/hr" }
    ],
    correctChoiceId: "d",
    rationale: "Step 1: Calculate the total mcg per minute required: 70 kg x 0.1 mcg/kg/min = 7 mcg/min. Step 2: Convert mcg/min to mcg/hour: 7 mcg/min x 60 min/hr = 420 mcg/hour. Step 3: Determine the drug concentration in mcg/mL: 4 mg in 250 mL = 4,000 mcg / 250 mL = 16 mcg/mL. Step 4: Calculate the pump rate in mL/hr: 420 mcg/hr / 16 mcg/mL = 26.25 mL/hr (rounds to 26.3 mL/hr).",
    strategy: "Vasoactive infusion formula: Rate (mL/hr) = (Dose x Weight x 60) / Concentration. Rate = (0.1 x 70 x 60) / 16 = 420 / 16 = 26.25 mL/hr.",
    difficulty: "hard",
    tags: ["emergency", "norepinephrine", "vasopressor", "infusion-rate-calculation", "critical-care"],
    isFree: false,
  },
];
