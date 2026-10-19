import type { AuthoredQuestion } from "./authored-bank";

/**
 * Dedicated NCLEX-style clinical scenario questions for Respiratory Nursing modules.
 * Authored specifically to test clinical judgment, bedside airway management,
 * gas exchange pathophysiology, and NMC competencies.
 */
export const RESPIRATORY_MODULE_SCENARIOS: AuthoredQuestion[] = [
  // ==========================================
  // MODULE 1: FOUNDATIONS & ASSESSMENT (2 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-RESP-001",
    categorySlug: "med-surg",
    stem: "A 62-year-old client with severe right lower lobe lobar pneumonia has an oxygen saturation of 88% while lying on his right side. When the nurse assists the client to turn onto his left side (left lateral position), the oxygen saturation improves to 95% within 5 minutes on the same 2 L/min nasal cannula. What is the physiological explanation for this improvement?",
    choices: [
      { id: "a", text: "Gravity increases blood perfusion to the healthy dependent left lung, improving ventilation-perfusion (V/Q) matching" },
      { id: "b", text: "Turning to the left increases airway resistance in the right bronchus to prevent shunting" },
      { id: "c", text: "The left lateral position compresses the heart, increasing left ventricular stroke volume" },
      { id: "d", text: "Lying on the left lung reduces surfactant breakdown in the diseased right alveoli" }
    ],
    correctChoiceId: "a",
    rationale: "In unilateral lung disease, positioning the healthy, unaffected lung in the dependent (downward) position promotes gravity-dependent blood flow to the well-ventilated healthy lung tissue. This optimizes ventilation-perfusion (V/Q) matching and maximizes systemic oxygenation ('good lung down'). Placing the diseased lung downward causes blood to perfuse poorly ventilated alveoli, causing intrapulmonary shunting and hypoxemia.",
    strategy: "Unilateral lung disease positioning rule: 'Good lung down' (dependent). Gravity maximizes blood flow to the well-ventilated lung, improving V/Q ratio.",
    difficulty: "medium",
    tags: ["course:respiratory", "module:foundations", "lesson:respiratory-anatomy-and-gas-exchange", "good-lung-down", "ventilation-perfusion", "hypoxemia"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-RESP-002",
    categorySlug: "med-surg",
    stem: "The nurse performs a focused physical examination on a client with dense right middle lobe pneumonia. Which constellation of assessment findings should the nurse anticipate over the consolidated lung region?",
    choices: [
      { id: "a", text: "Decreased tactile fremitus, hyperresonance to percussion, and absent breath sounds" },
      { id: "b", text: "Increased tactile fremitus, dullness to percussion, and bronchial breath sounds with egophony" },
      { id: "c", text: "Decreased tactile fremitus, tympany to percussion, and low-pitched musical rhonchi" },
      { id: "d", text: "Absent tactile fremitus, stony dullness to percussion, and faint tracheal breath sounds" }
    ],
    correctChoiceId: "b",
    rationale: "Alveolar consolidation (fluid, exudate, and cellular debris replacing air in pneumonia) conducts sound vibrations better than normal air-filled lung tissue. Hallmarks over consolidated tissue: increased tactile fremitus (enhanced vibration on palpation), dullness to percussion (fluid-filled tissue), loud bronchial breath sounds (high-pitched tubular sounds heard in peripheral fields), and positive egophony (spoken 'ee' sounds like 'ay').",
    strategy: "Consolidation physics: Dense liquid conducts sound better than air -> increased fremitus, dull percussion, bronchial breath sounds, egophony.",
    difficulty: "medium",
    tags: ["course:respiratory", "module:foundations", "lesson:assessing-respiratory-function", "pneumonia-assessment", "tactile-fremitus", "adventitious-sounds"],
    isFree: true,
  },

  // ==========================================
  // MODULE 2: OXYGEN & AIRWAY (3 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-RESP-003",
    categorySlug: "med-surg",
    stem: "A 68-year-old client with end-stage chronic obstructive pulmonary disease (COPD) and chronic carbon dioxide retention arrives at the emergency unit in respiratory distress. An emergency responder placed the client on a 100% non-rebreather mask at 15 L/min. Thirty minutes later, the client becomes severely lethargic, difficult to arouse, and respirations drop to 8 breaths/min. What is the nurse's priority action?",
    choices: [
      { id: "a", text: "Increase oxygen flow to 20 L/min and administer a bolus of intravenous naloxone" },
      { id: "b", text: "Instruct the client to breathe into a paper bag to retain exhaled carbon dioxide" },
      { id: "c", text: "Replace the non-rebreather mask with a Venturi mask titrated to maintain SpO2 between 88% and 92%, and prepare for ventilatory support" },
      { id: "d", text: "Administer an intravenous sedative to treat oxygen-induced panic syndrome" }
    ],
    correctChoiceId: "c",
    rationale: "In chronic CO2 retainers with advanced COPD, central chemoreceptors become desensitized to chronic hypercapnia, and hypoxemia becomes a major respiratory drive. Indiscriminate high-flow oxygen blunts this hypoxic drive and worsens ventilation-perfusion mismatch (halting hypoxic vasoconstriction and dead space ventilation), causing acute hypercapnic respiratory failure (CO2 narcosis). The nurse must switch to controlled, precise oxygen delivery (Venturi mask targeting SpO2 88-92%) and prepare for non-invasive positive-pressure ventilation.",
    strategy: "CO2 retention / COPD target: SpO2 88-92% via Venturi mask. Sudden somnolence and bradypnea on high-flow O2 indicates acute CO2 narcosis.",
    difficulty: "hard",
    tags: ["course:respiratory", "module:oxygen-airway", "lesson:oxygen-therapy-delivery-and-safety", "copd-oxygen", "co2-narcosis", "venturi-mask"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RESP-004",
    categorySlug: "safety-infection-control",
    stem: "A nurse is performing endotracheal suctioning on an intubated client in the intensive care unit. During the procedure, which action by the nurse represents correct clinical practice to prevent hypoxemia and mucosal trauma?",
    choices: [
      { id: "a", text: "Apply continuous suction pressure at 180 mmHg while inserting the catheter down the endotracheal tube" },
      { id: "b", text: "Instill 10 mL of sterile normal saline into the tube prior to suctioning to loosen thick secretions" },
      { id: "c", text: "Rotate the catheter continuously for 30 seconds while applying maximum suction" },
      { id: "d", text: "Pre-oxygenate with 100% oxygen for at least 30-60 seconds and limit suction catheter application to 10-15 seconds only during withdrawal" }
    ],
    correctChoiceId: "d",
    rationale: "Evidence-based endotracheal suctioning guidelines mandate: 1) Pre-oxygenate with 100% O2 for 30-60 seconds, 2) Advance catheter without applying suction until resistance or carina is reached, then pull back 1-2 cm, 3) Apply intermittent suction only while withdrawing and rotating the catheter, 4) Limit suction duration to no more than 10-15 seconds to avoid severe hypoxemia and vagal bradycardia, and 5) Maintain suction pressure between 80-120 mmHg. Routine saline instillation is contraindicated because it dislodges bacteria into lower airways.",
    strategy: "Suction safety rules: Pre-oxygenate 100% -> No suction on insertion -> Max 10-15 seconds on withdrawal -> No routine saline instillation.",
    difficulty: "easy",
    tags: ["course:respiratory", "module:oxygen-airway", "lesson:airway-clearance-and-suctioning", "tracheostomy-suction", "endotracheal", "suction-safety"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RESP-005",
    categorySlug: "med-surg",
    stem: "On postoperative day 2 following a surgical tracheostomy, an alert client has a violent coughing fit and completely expels the tracheostomy tube onto the bed sheets. The client is tachypneic, in acute respiratory distress, and stridor is audible at the stoma. What is the nurse's immediate sequence of actions?",
    choices: [
      { id: "a", text: "Call for immediate emergency help, extend the client's neck, open the stoma with a tracheal dilator, and gently reinsert a spare lubricated tube with the obturator" },
      { id: "b", text: "Cover the stoma with an airtight occlusive dressing and instruct the client to breathe deeply through the mouth" },
      { id: "c", text: "Insert a large nasogastric tube into the stoma to maintain airway patency until the surgical team arrives" },
      { id: "d", text: "Place the client in prone position and administer oral sips of water to lubricate the larynx" }
    ],
    correctChoiceId: "a",
    rationale: "Accidental decannulation in an immature tracheostomy tract (under 7 days post-op) is a critical airway emergency because the stomal tract collapses rapidly. The nurse must immediately call for assistance, maintain neck extension to open the stoma, gently grasp stay sutures or use a tracheal dilator to spread the stoma, and insert the spare lubricated tracheostomy tube with the obturator (removing the obturator immediately once inserted). If reinsertion is impossible, ventilate via bag-valve-mask over the stoma or mouth.",
    strategy: "Fresh tracheostomy decannulation: Immediate help -> extend neck -> use dilator / stay sutures -> insert spare tube with obturator. Always keep spare tube and obturator at bedside.",
    difficulty: "hard",
    tags: ["course:respiratory", "module:oxygen-airway", "lesson:tracheostomy-care-and-emergencies", "tracheostomy-decannulation", "airway-emergency", "obturator"],
    isFree: false,
  },

  // ==========================================
  // MODULE 3: ACID-BASE & ABGs (3 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-RESP-006",
    categorySlug: "med-surg",
    stem: "An arterial blood gas (ABG) sample drawn from a postoperative client who received excessive intravenous opioid analgesia reveals: pH 7.26, PaCO2 58 mmHg, PaO2 72 mmHg, HCO3 24 mEq/L. How should the nurse interpret this acid-base imbalance?",
    choices: [
      { id: "a", text: "Compensated metabolic acidosis" },
      { id: "b", text: "Uncompensated respiratory acidosis" },
      { id: "c", text: "Partially compensated respiratory alkalosis" },
      { id: "d", text: "Uncompensated metabolic alkalosis" }
    ],
    correctChoiceId: "b",
    rationale: "Step-by-step ABG analysis: 1) pH 7.26 is below 7.35, indicating acidosis. 2) PaCO2 58 mmHg is above 45 mmHg (acidic), indicating that respiratory retention of carbon dioxide is the primary cause of the acidosis. 3) HCO3 24 mEq/L is within normal limits (22-26 mEq/L), meaning renal compensation has not yet occurred. Therefore, this is uncompensated respiratory acidosis secondary to opioid-induced hypoventilation.",
    strategy: "ABG Drill: pH < 7.35 (acidosis) + high PaCO2 (respiratory) + normal HCO3 (uncompensated) = Uncompensated Respiratory Acidosis.",
    difficulty: "easy",
    tags: ["course:respiratory", "module:acid-base", "lesson:understanding-arterial-blood-gases", "abg-interpretation", "respiratory-acidosis", "hypoventilation"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RESP-007",
    categorySlug: "med-surg",
    stem: "A 20-year-old student brought to the clinic during an acute anxiety panic attack is hyperventilating at 38 breaths/min with circumoral numbness and carpal spasms. An arterial blood gas shows: pH 7.54, PaCO2 25 mmHg, HCO3 23 mEq/L. Which physiological mechanism and nursing intervention are indicated?",
    choices: [
      { id: "a", text: "Metabolic acidosis from lactic accumulation; administer IV sodium bicarbonate" },
      { id: "b", text: "Respiratory acidosis from alveolar fatigue; initiate immediate mechanical ventilation" },
      { id: "c", text: "Respiratory alkalosis from excessive CO2 exhalation; coach the client in slow, controlled diaphragmatic breathing" },
      { id: "d", text: "Metabolic alkalosis from gastric acid loss; infuse 1 L of normal saline rapidly" }
    ],
    correctChoiceId: "c",
    rationale: "Tachypnea and hyperventilation blow off excessive carbon dioxide (hypocapnia, PaCO2 25 mmHg), driving blood pH up to 7.54 (respiratory alkalosis). Hypocapnia induces cerebral vasoconstriction (lightheadedness) and acute hypocalcemia from increased albumin-calcium binding (perioral tingling, tetany). The primary intervention is coaching the client into calm, slow, deep abdominal breathing or rebreathing to restore normal arterial PaCO2.",
    strategy: "Hyperventilation = blowing off CO2 -> low PaCO2 + high pH = Respiratory Alkalosis. Calming breathing coach is first-line.",
    difficulty: "medium",
    tags: ["course:respiratory", "module:acid-base", "lesson:respiratory-acidosis-and-alkalosis", "respiratory-alkalosis", "hyperventilation", "panic-attack"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RESP-008",
    categorySlug: "med-surg",
    stem: "A 24-year-old client with diabetic ketoacidosis (DKA) is observed breathing with deep, rapid, regular respirations at 32 breaths/min (Kussmaul respirations). Arterial blood gas results show: pH 7.24, PaCO2 28 mmHg, HCO3 11 mEq/L. Which statement accurately describes the clinical picture?",
    choices: [
      { id: "a", text: "Primary respiratory alkalosis causing compensatory renal bicarbonate excretion" },
      { id: "b", text: "Uncompensated respiratory acidosis requiring immediate endotracheal intubation" },
      { id: "c", text: "Fully compensated metabolic alkalosis with secondary alveolar hypoventilation" },
      { id: "d", text: "Partially compensated metabolic acidosis, with Kussmaul respirations acting as the compensatory respiratory mechanism to blow off CO2" }
    ],
    correctChoiceId: "d",
    rationale: "The primary pathology is metabolic acidosis driven by ketoacid accumulation: pH 7.24 (acidosis) and HCO3 11 mEq/L (severely depressed). In response, the medullary respiratory center stimulates Kussmaul breathing (deep, rapid respirations) to eliminate carbonic acid as CO2. Because PaCO2 is lowered to 28 mmHg in an attempt to normalize pH, but pH remains below 7.35, this is partially compensated metabolic acidosis.",
    strategy: "Kussmaul breathing is the body's compensatory respiratory response to severe metabolic acidosis (DKA). It blows off volatile acid (CO2) to raise pH.",
    difficulty: "hard",
    tags: ["course:respiratory", "module:acid-base", "lesson:metabolic-acidosis-and-alkalosis", "kussmaul-breathing", "dka", "metabolic-acidosis", "abg-drill"],
    isFree: false,
  },

  // ==========================================
  // MODULE 4: OBSTRUCTIVE AIRWAY DISEASES (2 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-RESP-009",
    categorySlug: "med-surg",
    stem: "A 17-year-old client with an acute severe asthma attack has been receiving back-to-back nebulized salbutamol and ipratropium. On re-assessment, the nurse observes that the client's previously loud, high-pitched expiratory wheezing has completely disappeared, but the client is drowsy, using sternocleidomastoid accessory muscles, and breath sounds are barely audible. What does this change signify?",
    choices: [
      { id: "a", text: "Imminent respiratory arrest due to severe airflow limitation and alveolar exhaustion ('silent chest')" },
      { id: "b", text: "Rapid clinical improvement following bronchodilator treatment" },
      { id: "c", text: "Resolution of bronchospasm allowing laminative airflow" },
      { id: "d", text: "Spontaneous conversion from asthma to bronchitis" }
    ],
    correctChoiceId: "a",
    rationale: "The 'silent chest' is an ominous, life-threatening emergency sign in acute severe asthma. The complete cessation of wheezing in an exhausted, drowsy client does NOT indicate recovery; it indicates that bronchospasm, mucus plugging, and muscle fatigue have so severely reduced airflow that the client cannot move enough air to create wheezing sounds. Immediate endotracheal intubation and mechanical ventilation are required.",
    strategy: "Asthma warning sign: The 'silent chest' (disappearance of wheezing with continued distress/exhaustion) signals impending respiratory arrest!",
    difficulty: "medium",
    tags: ["course:respiratory", "module:obstructive", "lesson:asthma-pathophysiology-and-acute-exacerbation", "asthma-emergency", "silent-chest", "status-asthmaticus"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RESP-010",
    categorySlug: "med-surg",
    stem: "A nurse is teaching breathing techniques to a client with chronic obstructive pulmonary disease (COPD) who suffers from severe air trapping and dynamic hyperinflation. How does pursed-lip breathing benefit this client?",
    choices: [
      { id: "a", text: "It stimulates the diaphragm to contract at twice its normal velocity" },
      { id: "b", text: "It creates positive expiratory backpressure in the airways, preventing premature bronchiolar collapse during exhalation" },
      { id: "c", text: "It increases rapid dead space ventilation to blow off residual nitrogen" },
      { id: "d", text: "It directly relaxes the vascular smooth muscle of the pulmonary capillary bed" }
    ],
    correctChoiceId: "b",
    rationale: "In COPD, loss of lung elastic recoil leads to dynamic collapse of small, floppy bronchioles during expiration, trapping air inside hyperinflated alveoli. Pursed-lip breathing (inhaling through the nose for 2 seconds, exhaling slowly through pursed lips for 4 seconds) creates positive expiratory backpressure throughout the airways, splinting them open, promoting alveolar emptying, and reducing work of breathing.",
    strategy: "Pursed-lip breathing mechanism: Generates positive end-expiratory pressure (PEEP) to prevent airway collapse and reduce air trapping.",
    difficulty: "easy",
    tags: ["course:respiratory", "module:obstructive", "lesson:copd-management-and-nursing-care", "pursed-lip-breathing", "copd-rehabilitation", "air-trapping"],
    isFree: false,
  },

  // ==========================================
  // MODULE 5: INFECTIONS & PLEURA (6 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-RESP-011",
    categorySlug: "med-surg",
    stem: "A 74-year-old client is admitted to the medical ward with community-acquired pneumonia, temperature 39.1°C, and confusion. The medical officer prescribes: intravenous ceftriaxone 1 g, blood cultures x 2, sputum for culture and sensitivity, supplemental O2 at 2 L/min, and paracetamol 1 g. In which sequence should the nurse execute these interventions?",
    choices: [
      { id: "a", text: "Administer IV ceftriaxone -> Apply oxygen -> Collect blood cultures -> Administer paracetamol" },
      { id: "b", text: "Administer paracetamol -> Collect blood cultures -> Administer IV ceftriaxone -> Apply oxygen" },
      { id: "c", text: "Apply oxygen -> Collect blood and sputum cultures -> Administer IV ceftriaxone -> Administer paracetamol" },
      { id: "d", text: "Collect sputum culture in 24 hours -> Administer IV ceftriaxone immediately -> Apply oxygen" }
    ],
    correctChoiceId: "c",
    rationale: "Priority sequence: 1) Oxygenation first (ABC principle) to relieve hypoxemia. 2) Diagnostic microbiologic specimens (blood cultures from two separate sites and sputum culture) MUST be collected BEFORE initiating antimicrobial therapy to avoid sterilizing specimens and compromising organism identification. 3) Initiate broad-spectrum antibiotics promptly within 1-2 hours. 4) Administer antipyretic for symptom relief.",
    strategy: "Sepsis & Pneumonia rule: Oxygen first -> Cultures BEFORE antibiotics -> Start antibiotics promptly. Never give antibiotics before drawing cultures.",
    difficulty: "medium",
    tags: ["course:respiratory", "module:infections-pleura", "lesson:pneumonia-assessment-and-nursing-care", "pneumonia-priority", "blood-cultures", "antibiotic-timing"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RESP-012",
    categorySlug: "safety-infection-control",
    stem: "A client with productive cough, night sweats, weight loss, and suspected active pulmonary tuberculosis is admitted to the hospital. Which infection prevention precautions are mandatory?",
    choices: [
      { id: "a", text: "Droplet precautions with private room, surgical mask within 3 feet, and eye protection" },
      { id: "b", text: "Contact precautions with gown and gloves upon entering the room" },
      { id: "c", text: "Standard precautions with regular adult surgical mask for nursing staff" },
      { id: "d", text: "Airborne Infection Isolation Room (AIIR) with negative air pressure, fit-tested N95 respirator mask for staff, and surgical mask on client during transport" }
    ],
    correctChoiceId: "d",
    rationale: "Mycobacterium tuberculosis is transmitted via droplet nuclei (< 5 micrometers) that remain suspended in the air. Mandatory airborne precautions include: 1) Negative-pressure airborne infection isolation room (AIIR) exhausting at least 6-12 air changes/hour, 2) Healthcare personnel must wear a fit-tested particulate respirator (N95 or higher) prior to entering, and 3) The client wears a standard surgical mask if leaving the room for essential transport.",
    strategy: "Tuberculosis transmission = AIRBORNE. Requires: Negative-pressure room (AIIR) + N95 respirator mask for staff + surgical mask on patient during transport.",
    difficulty: "easy",
    tags: ["course:respiratory", "module:infections-pleura", "lesson:tuberculosis-transmission-precautions-and-dots", "tuberculosis", "airborne-precautions", "n95-mask"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RESP-013",
    categorySlug: "pharmacology-parenteral",
    stem: "A client newly initiated on first-line anti-tuberculosis therapy (Rifampicin, Isoniazid, Pyrazinamide, and Ethambutol) contacts the chest clinic in distress, stating: \"My urine and tears have turned bright reddish-orange!\" What is the nurse's best response?",
    choices: [
      { id: "a", text: "\"This reddish-orange discoloration is an expected, harmless side effect of Rifampicin and is not a sign of bleeding or drug toxicity.\"" },
      { id: "b", text: "\"Stop taking all medications immediately and come to the emergency room for acute renal failure testing.\"" },
      { id: "c", text: "\"This indicates severe hepatic failure from Pyrazinamide toxicity; double your fluid intake.\"" },
      { id: "d", text: "\"Take two iron tablets daily to replace the lost hemoglobin in your urine.\"" }
    ],
    correctChoiceId: "a",
    rationale: "Rifampicin causes benign reddish-orange discoloration of all bodily fluids (urine, sweat, saliva, tears, feces). It may permanently stain soft contact lenses. The nurse should reassure the client that this is harmless and does not indicate hematuria or liver damage. In contrast, hepatitis (yellow jaundice) or Ethambutol-induced optic neuritis (loss of red-green visual acuity) requires immediate medical evaluation.",
    strategy: "Rifampicin = Red/Orange body fluids (benign!). Ethambutol = Eyes (optic neuritis). Isoniazid = INH -> Neuropathy (give B6 / pyridoxine).",
    difficulty: "easy",
    tags: ["course:respiratory", "module:infections-pleura", "lesson:tuberculosis-transmission-precautions-and-dots", "rifampicin", "antitubercular", "drug-side-effects"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RESP-014",
    categorySlug: "med-surg",
    stem: "A nurse is assisting a physician with a diagnostic thoracentesis for a client with a large left pleural effusion. How should the nurse position the client during the procedure?",
    choices: [
      { id: "a", text: "Left lateral decubitus position with the diseased lung dependent against the mattress" },
      { id: "b", text: "Sitting upright on the edge of the bed, leaning forward over an overbed table padded with pillows" },
      { id: "c", text: "Flat supine with legs elevated in Trendelenburg position" },
      { id: "d", text: "Prone position with a pillow beneath the abdomen" }
    ],
    correctChoiceId: "b",
    rationale: "The optimal position for thoracentesis is upright sitting on the edge of the bed, leaning forward with arms resting on a pillow-padded overbed table. This position widens the intercostal spaces, spreads the ribs, allows fluid to pool at the base of the pleural space, and provides safe access for needle insertion while minimizing visceral pleural puncture.",
    strategy: "Thoracentesis positioning: Upright, leaning forward over a padded bedside table (opens intercostal spaces and pools fluid at the base).",
    difficulty: "easy",
    tags: ["course:respiratory", "module:infections-pleura", "lesson:pleural-effusion-and-thoracentesis", "thoracentesis", "client-positioning", "pleural-effusion"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RESP-015",
    categorySlug: "med-surg",
    stem: "A client with a right-sided chest tube connected to a closed three-chamber drainage system is receiving mechanical ventilation. The nurse notes continuous, vigorous bubbling in the water-seal chamber. What does this observation indicate?",
    choices: [
      { id: "a", text: "The chest tube is functioning normally with complete re-expansion of the lung" },
      { id: "b", text: "The suction control chamber is set to an inadequate negative pressure" },
      { id: "c", text: "An air leak is present in the drainage system or pleural space" },
      { id: "d", text: "Subcutaneous emphysema is resolving into the intrapleural space" }
    ],
    correctChoiceId: "c",
    rationale: "In a closed underwater-seal drainage system: Tidaling (fluid fluctuations with respirations) is normal. Intermittent bubbling on exhalation is expected initially when air is evacuated from a pneumothorax. Continuous, vigorous bubbling in the water-seal chamber indicates an air leak—either in the system tubing/connections or inside the client's chest (bronchopleural fistula or unresolved large pleural tear). The nurse must locate the leak immediately.",
    strategy: "Chest drain chamber rule: Continuous bubbling in WATER-SEAL chamber = AIR LEAK. Continuous bubbling in SUCTION control chamber = NORMAL suction.",
    difficulty: "medium",
    tags: ["course:respiratory", "module:infections-pleura", "lesson:chest-drains-and-underwater-seal-management", "chest-tube", "water-seal-chamber", "air-leak"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RESP-016",
    categorySlug: "med-surg",
    stem: "While turning a client with a chest tube, the chest tube accidentally pulls completely out of the pleural insertion site. What is the nurse's immediate priority intervention?",
    choices: [
      { id: "a", text: "Immediately re-insert the expelled chest tube into the stoma with sterile forceps" },
      { id: "b", text: "Apply an airtight occlusive dressing taped securely on all four sides with heavy silk tape" },
      { id: "c", text: "Clamp the remaining tubing and submerge the tip in sterile water" },
      { id: "d", text: "Cover the insertion site immediately with a sterile petroleum gauze dressing taped on THREE sides" }
    ],
    correctChoiceId: "d",
    rationale: "When a chest tube is accidentally dislodged, the priority is to seal the wound while preventing tension pneumothorax. Cover the site immediately with sterile petrolatum gauze taped on THREE sides. This creates a one-way flutter valve: it prevents external atmospheric air from being sucked into the pleural cavity during inspiration, but allows trapped intrapleural air to escape during expiration, averting tension pneumothorax.",
    strategy: "Accidental chest tube removal drill: Sterile gauze taped on 3 SIDES (flutter valve avoids tension pneumothorax). If tube disconnects from unit, submerge in sterile water.",
    difficulty: "hard",
    tags: ["course:respiratory", "module:infections-pleura", "lesson:chest-drains-and-underwater-seal-management", "chest-tube-emergency", "flutter-valve", "pneumothorax-prevention"],
    isFree: false,
  },

  // ==========================================
  // MODULE 6: EMERGENCIES & CRITICAL CARE (2 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-RESP-017",
    categorySlug: "med-surg",
    stem: "A 54-year-old client on bedrest following major pelvic surgery abruptly develops sharp right-sided pleuritic chest pain, dyspnea, and apprehension. Vital signs are: heart rate 124 beats/min, respiratory rate 30 breaths/min, blood pressure 102/64 mmHg, and SpO2 86% on room air. The nurse suspects acute pulmonary embolism. What should the nurse do FIRST?",
    choices: [
      { id: "a", text: "Elevate the head of the bed to high-Fowler's position, apply high-flow oxygen, and activate the rapid response team" },
      { id: "b", text: "Transport the client to the ultrasound room for lower extremity Doppler imaging" },
      { id: "c", text: "Administer an oral dose of aspirin 300 mg with a glass of water" },
      { id: "d", text: "Instruct the client to cough vigorously to clear suspected mucus plugs" }
    ],
    correctChoiceId: "a",
    rationale: "Acute pulmonary embolism causes sudden obstruction of pulmonary arterial blood flow, producing acute alveolar dead space, severe hypoxemia, and acute right heart strain. Immediate priority nursing actions: 1) Position in high-Fowler's to maximize diaphragmatic excursion and ease breathing mechanics, 2) Apply high-flow oxygen immediately to treat tissue hypoxia, 3) Activate emergency/rapid response team, and 4) Establish IV access for anticoagulation (unfractionated heparin).",
    strategy: "Suspected PE sequence: High-Fowler's position -> High-flow Oxygen -> Activate Rapid Response Team. Never leave patient or delay O2 for imaging.",
    difficulty: "easy",
    tags: ["course:respiratory", "module:emergencies", "lesson:pulmonary-embolism", "pulmonary-embolism", "respiratory-emergency", "oxygen-therapy"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RESP-018",
    categorySlug: "med-surg",
    stem: "A client with acute respiratory distress syndrome (ARDS) secondary to severe sepsis remains hypoxemic with PaO2 56 mmHg despite mechanical ventilation with 80% FiO2 and 14 cmH2O positive end-expiratory pressure (PEEP). The critical care team plans to initiate prone positioning. What is the therapeutic rationale for proning this client?",
    choices: [
      { id: "a", text: "Prone positioning increases cardiac preload by compressing the inferior vena cava" },
      { id: "b", text: "Prone positioning recruits collapsed dorsal lung units and improves ventilation-perfusion matching" },
      { id: "c", text: "Prone positioning decreases tidal volume to prevent pneumothorax" },
      { id: "d", text: "Prone positioning halts alveolar exudate secretion by hydrostatic gravity" }
    ],
    correctChoiceId: "b",
    rationale: "In ARDS, alveolar collapse and inflammatory consolidation occur predominantly in dependent, dorsal lung regions. In the supine position, the weight of the heart and ventral tissue further compresses these dorsal lung units. Placing the client in the prone position (proning) relieves cardiac compression, recruits large dorsal alveolar regions, and redistributes pulmonary blood flow, markedly improving ventilation-perfusion matching and arterial oxygenation.",
    strategy: "ARDS proning rationale: Recruits collapsed dorsal lung alveoli, relieves heart compression on lung bases, and enhances V/Q matching.",
    difficulty: "hard",
    tags: ["course:respiratory", "module:emergencies", "lesson:acute-respiratory-distress-syndrome-and-mechanical-ventilation", "ards", "prone-positioning", "mechanical-ventilation"],
    isFree: false,
  },

  // ==========================================
  // MODULE 7: PHARMACOLOGY (2 Questions)
  // ==========================================
  {
    authoredId: "NG-MOD-RESP-019",
    categorySlug: "pharmacology-parenteral",
    stem: "A 14-year-old client with persistent asthma is prescribed inhaled fluticasone propionate twice daily using a metered-dose inhaler (MDI) with a spacer. Which instruction is essential to prevent local adverse drug reactions?",
    choices: [
      { id: "a", text: "Swallow a glass of warm milk immediately following the second puff" },
      { id: "b", text: "Inhale rapidly through the mouth and exhale immediately through the nose" },
      { id: "c", text: "Rinse mouth thoroughly with water and spit it out after each inhalation" },
      { id: "d", text: "Use the fluticasone inhaler only as a rescue medication when wheezing starts" }
    ],
    correctChoiceId: "c",
    rationale: "Inhaled corticosteroids (fluticasone, budesonide) deposit small drug particles onto the oral pharyngeal mucosa, which can suppress local immunity and cause oral candidiasis (thrush) and dysphonia (hoarseness). Using a spacer device reduces oropharyngeal deposition, and rinsing the mouth with water and spitting it out immediately after each use clears residual steroid particles from oral tissues.",
    strategy: "Inhaled steroid rule: Use spacer + RINSE AND SPIT after inhalation to prevent oral thrush and hoarseness. Steroids are maintainers, not rescue bronchodilators.",
    difficulty: "easy",
    tags: ["course:respiratory", "module:pharmacology", "lesson:respiratory-drugs-inhaler-technique-and-safety", "inhaled-corticosteroids", "fluticasone", "oral-candidiasis"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-RESP-020",
    categorySlug: "pharmacology-parenteral",
    stem: "A client with acute bronchospasm is receiving a continuous intravenous infusion of aminophylline. During morning rounds, the client reports nausea, severe tremors, insomnia, and palpitations. Cardiac telemetry shows sinus tachycardia at 134 beats/min with frequent premature ventricular contractions (PVCs). What is the nurse's immediate priority action?",
    choices: [
      { id: "a", text: "Increase the infusion rate by 5 mL/hour to overcome tachyphylaxis" },
      { id: "b", text: "Administer an oral antiemetic and reassure the client that tremors are expected" },
      { id: "c", text: "Administer 100 mg of oral potassium chloride for suspected hypokalemia" },
      { id: "d", text: "Stop the aminophylline infusion immediately, notify the prescriber, and anticipate a stat serum theophylline level" }
    ],
    correctChoiceId: "d",
    rationale: "Aminophylline/theophylline has a narrow therapeutic range (typically 10-20 mcg/mL). Toxicity manifests initially with gastrointestinal symptoms (nausea, vomiting), neurological excitation (tremors, restlessness, seizures), and cardiovascular dysrhythmias (tachycardia, PVCs, ventricular tachycardia). The nurse must immediately stop the infusion, alert the physician, obtain a stat serum theophylline concentration, and prepare supportive antidotes (activated charcoal, beta-blockers).",
    strategy: "Theophylline toxicity signs: Nausea/vomiting + tremors + tachycardia/PVCs (narrow therapeutic window 10-20 mcg/mL). Stop infusion stat.",
    difficulty: "medium",
    tags: ["course:respiratory", "module:pharmacology", "lesson:respiratory-drugs-inhaler-technique-and-safety", "theophylline", "aminophylline-toxicity", "narrow-therapeutic-index"],
    isFree: false,
  }
];
