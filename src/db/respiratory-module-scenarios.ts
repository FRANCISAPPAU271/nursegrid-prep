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
      { id: "a", text: "Turning to the left splints the right bronchus and increases its airway resistance, which diverts blood away from the diseased lobe and towards the healthy one" },
      { id: "b", text: "The left lateral position compresses the heart against the mattress and increases left ventricular stroke volume, which raises pulmonary blood flow to both lungs" },
      { id: "c", text: "Lying on the left lung reduces surfactant breakdown in the diseased right alveoli, because the healthy lung takes over the work of surfactant production" },
      { id: "d", text: "Gravity increases blood perfusion to the healthy dependent left lung, improving ventilation-perfusion (V/Q) matching" }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Gravity increases blood perfusion to the healthy dependent left lung, improving ventilation-perfusion (V/Q) matching\" In unilateral lung disease, positioning the healthy, unaffected lung in the dependent (downward) position promotes gravity-dependent blood flow to the well-ventilated healthy lung tissue. This optimizes ventilation-perfusion (V/Q) matching and maximizes systemic oxygenation ('good lung down'). Placing the diseased lung downward causes blood to perfuse poorly ventilated alveoli, causing intrapulmonary shunting and hypoxemia. Why the other options fail: option a treats the good result as a mechanical splinting of the diseased bronchus, but airway resistance is not what determines where blood flows; hypoxic vasoconstriction is, and it is opposed by gravity. Option b invents a stroke volume effect that would not raise saturation this quickly or this selectively. Option c gives a surfactant explanation for a change that occurred within five minutes, far too fast for surfactant turnover to alter.",
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
      { id: "b", text: "Decreased tactile fremitus, tympany to percussion, and low-pitched musical rhonchi" },
      { id: "c", text: "Absent tactile fremitus, stony dullness to percussion, and faint tracheal breath sounds over the effusion" },
      { id: "d", text: "Increased tactile fremitus, dullness to percussion, and bronchial breath sounds with egophony" }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Increased tactile fremitus, dullness to percussion, and bronchial breath sounds with egophony\" Alveolar consolidation (fluid, exudate, and cellular debris replacing air in pneumonia) conducts sound vibrations better than normal air-filled lung tissue. Hallmarks over consolidated tissue: increased tactile fremitus (enhanced vibration on palpation), dullness to percussion (fluid-filled tissue), loud bronchial breath sounds (high-pitched tubular sounds heard in peripheral fields), and positive egophony (spoken 'ee' sounds like 'ay'). Why the other options fail: option a describes a pneumothorax, where air in the pleural space both reduces the transmission of sound and hyper-resonates on percussion. Option b mixes decreased fremitus with tympany, the percussion note of a hyperinflated or gas-filled space rather than consolidated lung. Option c describes a large pleural effusion, where fluid blocks transmission completely and gives stony dullness.",
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
      { id: "b", text: "Instruct the client to breathe into a paper bag to retain carbon dioxide, since the somnolence suggests the carbon dioxide level has fallen too far on high-flow oxygen" },
      { id: "c", text: "Replace the non-rebreather mask with a Venturi mask titrated to maintain SpO2 between 88% and 92%, and prepare for ventilatory support" },
      { id: "d", text: "Administer an intravenous sedative to treat oxygen-induced panic, because the agitation and resistiveness suggest the client is fighting the mask" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Replace the non-rebreather mask with a Venturi mask titrated to maintain SpO2 between 88% and 92%, and prepare for ventilatory support\" In chronic CO2 retainers with advanced COPD, central chemoreceptors become desensitized to chronic hypercapnia, and hypoxemia becomes a major respiratory drive. Indiscriminate high-flow oxygen blunts this hypoxic drive and worsens ventilation-perfusion mismatch (halting hypoxic vasoconstriction and dead space ventilation), causing acute hypercapnic respiratory failure (CO2 narcosis). The nurse must switch to controlled, precise oxygen delivery (Venturi mask targeting SpO2 88-92%) and prepare for non-invasive positive-pressure ventilation. Why the other options fail: option a increases the oxygen that caused the problem and adds naloxone, which reverses opioids and not carbon dioxide. Option b is the rebreathing treatment for hyperventilation, which is the opposite acid-base disturbance. Option d sedates a client whose respiratory drive is already failing, which risks respiratory arrest rather than treating the cause.",
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
      { id: "a", text: "Pre-oxygenate with 100% oxygen for at least 30-60 seconds and limit suction catheter application to 10-15 seconds only during withdrawal" },
      { id: "b", text: "Apply continuous suction pressure at 180 mmHg throughout insertion and withdrawal, since a higher pressure removes thick secretions more completely and shortens the time the catheter is in the airway" },
      { id: "c", text: "Instil 10 mL of sterile normal saline into the tube before suctioning to loosen thick secretions, since moistening the mucus makes it easier to clear and reduces the number of passes required" },
      { id: "d", text: "Rotate the catheter continuously for 30 seconds while applying maximum suction" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Pre-oxygenate with 100% oxygen for at least 30-60 seconds and limit suction catheter application to 10-15 seconds only during withdrawal\" Evidence-based endotracheal suctioning guidelines mandate: 1) Pre-oxygenate with 100% O2 for 30-60 seconds, 2) Advance catheter without applying suction until resistance or carina is reached, then pull back 1-2 cm, 3) Apply intermittent suction only while withdrawing and rotating the catheter, 4) Limit suction duration to no more than 10-15 seconds to avoid severe hypoxemia and vagal bradycardia, and 5) Maintain suction pressure between 80-120 mmHg. Routine saline instillation is contraindicated because it dislodges bacteria into lower airways. Why the other options fail: option b applies suction during insertion at a pressure above the recommended range, which strips oxygen and traumatises the mucosa on the way down. Option c instils saline routinely, which is no longer recommended because it dislodges biofilm into the lower airways. Option d applies maximum suction for 30 seconds, twice the safe duration, and risks hypoxaemia and vagal bradycardia.",
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
      { id: "b", text: "Cover the stoma completely with an airtight occlusive dressing and instruct the client to breathe deeply through the mouth, since the trachea will re-open spontaneously" },
      { id: "c", text: "Insert a large nasogastric tube into the stoma to hold the airway patent, since the tube will stent the tract open until the surgical team arrives" },
      { id: "d", text: "Place the client in the prone position and give small oral sips of water to lubricate the larynx, so that the upper airway can open and airflow resumes" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Call for immediate emergency help, extend the client's neck, open the stoma with a tracheal dilator, and gently reinsert a spare lubricated tube with the obturator\" Accidental decannulation in an immature tracheostomy tract (under 7 days post-op) is a critical airway emergency because the stomal tract collapses rapidly. The nurse must immediately call for assistance, maintain neck extension to open the stoma, gently grasp stay sutures or use a tracheal dilator to spread the stoma, and insert the spare lubricated tracheostomy tube with the obturator (removing the obturator immediately once inserted). If reinsertion is impossible, ventilate via bag-valve-mask over the stoma or mouth. Why the other options fail: option b seals the only route the client has for breathing, which converts a partial obstruction into a complete one. Option c passes a feeding tube into an airway that has no cartilage to hold it, which neither stents the tract nor delivers oxygen. Option d puts a distressed client face down and gives fluid by mouth, both of which worsen an airway that is already compromised.",
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
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Uncompensated respiratory acidosis\" Step-by-step ABG analysis: 1) pH 7.26 is below 7.35, indicating acidosis. 2) PaCO2 58 mmHg is above 45 mmHg (acidic), indicating that respiratory retention of carbon dioxide is the primary cause of the acidosis. 3) HCO3 24 mEq/L is within normal limits (22-26 mEq/L), meaning renal compensation has not yet occurred. Therefore, this is uncompensated respiratory acidosis secondary to opioid-induced hypoventilation. Why the other options fail: option a is wrong on both counts, since the pH is acidotic rather than compensated and the bicarbonate is normal rather than raised. Option c treats a high carbon dioxide with a low pH as alkalosis, which confuses the direction of the primary change. Option d names metabolic alkalosis, which would require a raised bicarbonate and an alkaline pH.",
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
      { id: "a", text: "Respiratory alkalosis from excessive CO2 exhalation; coach the client in slow, controlled diaphragmatic breathing" },
      { id: "b", text: "Metabolic acidosis from lactic acid accumulation during the panic attack, which requires intravenous sodium bicarbonate to correct the pH before the underlying anxiety is addressed" },
      { id: "c", text: "Respiratory acidosis from alveolar fatigue; initiate immediate mechanical ventilation" },
      { id: "d", text: "Metabolic alkalosis from gastric acid loss during the episode, which requires a litre of normal saline infused rapidly to restore the chloride and correct the bicarbonate" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Respiratory alkalosis from excessive CO2 exhalation; coach the client in slow, controlled diaphragmatic breathing\" Tachypnea and hyperventilation blow off excessive carbon dioxide (hypocapnia, PaCO2 25 mmHg), driving blood pH up to 7.54 (respiratory alkalosis). Hypocapnia induces cerebral vasoconstriction (lightheadedness) and acute hypocalcemia from increased albumin-calcium binding (perioral tingling, tetany). The primary intervention is coaching the client into calm, slow, deep abdominal breathing or rebreathing to restore normal arterial PaCO2. Why the other options fail: option b attributes the picture to lactic acidosis, but the pH is high and the bicarbonate is normal, which rules out a metabolic cause. Option c calls a high pH with a low carbon dioxide respiratory acidosis, inverting the finding. Option d invents gastric acid loss and answers it with a fluid bolus that does nothing for a respiratory alkalosis driven by hyperventilation.",
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
      { id: "a", text: "Primary respiratory alkalosis driving compensatory renal bicarbonate excretion, because the deep rapid breathing has lowered the carbon dioxide and the kidneys are shedding bicarbonate in response" },
      { id: "b", text: "Partially compensated metabolic acidosis, with Kussmaul respirations acting as the compensatory respiratory mechanism to blow off CO2" },
      { id: "c", text: "Uncompensated respiratory acidosis requiring immediate endotracheal intubation, because the carbon dioxide of 28 with a pH of 7.24 indicates the lungs are failing to clear sufficient acid" },
      { id: "d", text: "Fully compensated metabolic alkalosis with secondary alveolar hypoventilation, because both the bicarbonate and the carbon dioxide are abnormal and neither value has returned to its reference range" }
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Partially compensated metabolic acidosis, with Kussmaul respirations acting as the compensatory respiratory mechanism to blow off CO2\" The primary pathology is metabolic acidosis driven by ketoacid accumulation: pH 7.24 (acidosis) and HCO3 11 mEq/L (severely depressed). In response, the medullary respiratory center stimulates Kussmaul breathing (deep, rapid respirations) to eliminate carbonic acid as CO2. Because PaCO2 is lowered to 28 mmHg in an attempt to normalize pH, but pH remains below 7.35, this is partially compensated metabolic acidosis. Why the other options fail: option a reverses the direction of the primary disorder; a bicarbonate of 11 with a pH of 7.24 is a metabolic acidosis, and the low carbon dioxide is compensation rather than a primary alkalosis. Option c calls it respiratory even though the carbon dioxide is falling and the bicarbonate is the abnormal value. Option d describes metabolic alkalosis, which would show a raised bicarbonate and an alkaline pH.",
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
      { id: "a", text: "Rapid clinical improvement after the bronchodilator, because the disappearance of wheeze means the bronchospasm has been reversed by the salbutamol" },
      { id: "b", text: "Resolution of the bronchospasm allowing laminar airflow, since a quiet chest is the finding that shows the airways are no longer narrowed" },
      { id: "c", text: "Imminent respiratory arrest due to severe airflow limitation and alveolar exhaustion ('silent chest')" },
      { id: "d", text: "Spontaneous conversion of asthma to bronchitis, since the change from wheeze to a quiet chest suggests the inflammation has moved to the larger airways" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Imminent respiratory arrest due to severe airflow limitation and alveolar exhaustion ('silent chest')\" The 'silent chest' is an ominous, life-threatening emergency sign in acute severe asthma. The complete cessation of wheezing in an exhausted, drowsy client does NOT indicate recovery; it indicates that bronchospasm, mucus plugging, and muscle fatigue have so severely reduced airflow that the client cannot move enough air to create wheezing sounds. Immediate endotracheal intubation and mechanical ventilation are required. Why the other options fail: option a reads the disappearance of wheeze as improvement, which is the classic error the item is testing; in an exhausted client a silent chest means airflow has fallen too low to generate sound. Option b gives the same misreading a physiological justification that does not hold. Option d invents a change of diagnosis, when what has changed is the movement of air.",
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
      { id: "a", text: "It stimulates the diaphragm to contract at twice its normal velocity, which increases the volume of air moved with each breath and reduces the respiratory rate" },
      { id: "b", text: "It increases rapid dead space ventilation to blow off residual nitrogen, which resets the respiratory centre and reduces the sensation of breathlessness" },
      { id: "c", text: "It creates positive expiratory backpressure in the airways, preventing premature bronchiolar collapse during exhalation" },
      { id: "d", text: "It directly relaxes the vascular smooth muscle of the pulmonary capillary bed, which lowers pulmonary artery pressure and improves gas exchange" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"It creates positive expiratory backpressure in the airways, preventing premature bronchiolar collapse during exhalation\" In COPD, loss of lung elastic recoil leads to dynamic collapse of small, floppy bronchioles during expiration, trapping air inside hyperinflated alveoli. Pursed-lip breathing (inhaling through the nose for 2 seconds, exhaling slowly through pursed lips for 4 seconds) creates positive expiratory backpressure throughout the airways, splinting them open, promoting alveolar emptying, and reducing work of breathing. Why the other options fail: option a attributes a velocity change to the diaphragm that pursed-lip breathing does not produce. Option b describes increased dead space and nitrogen elimination, neither of which is the mechanism and both of which would worsen gas exchange. Option d locates the effect in the pulmonary vasculature, whereas the benefit is in the airways, where the back pressure holds collapsing bronchioles open.",
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
      { id: "a", text: "Administer IV ceftriaxone -> Apply oxygen -> Collect the blood cultures after the antibiotic -> Administer paracetamol" },
      { id: "b", text: "Apply oxygen -> Collect blood and sputum cultures -> Administer IV ceftriaxone -> Administer paracetamol" },
      { id: "c", text: "Administer paracetamol -> Collect blood cultures -> Administer IV ceftriaxone -> Apply oxygen" },
      { id: "d", text: "Collect sputum culture in 24 hours -> Administer IV ceftriaxone immediately -> Apply oxygen" }
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Apply oxygen -> Collect blood and sputum cultures -> Administer IV ceftriaxone -> Administer paracetamol\" Priority sequence: 1) Oxygenation first (ABC principle) to relieve hypoxemia. 2) Diagnostic microbiologic specimens (blood cultures from two separate sites and sputum culture) MUST be collected BEFORE initiating antimicrobial therapy to avoid sterilizing specimens and compromising organism identification. 3) Initiate broad-spectrum antibiotics promptly within 1-2 hours. 4) Administer antipyretic for symptom relief. Why the other options fail: option a gives the antibiotic before the cultures, which sterilises the specimen the team is about to take. Option c postpones oxygen behind three other tasks, when the client is hypoxaemic and confused. Option d delays the sputum specimen by 24 hours, which is the opposite of the same error: a specimen taken that late is likely to grow nothing.",
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
      { id: "a", text: "Airborne Infection Isolation Room (AIIR) with negative air pressure, fit-tested N95 respirator mask for staff, and surgical mask on client during transport" },
      { id: "b", text: "Droplet precautions in a private room with a surgical mask for staff within three feet of the client, eye protection for airway procedures, and the door kept closed during care" },
      { id: "c", text: "Contact precautions with gown and gloves on entering the room, a dedicated stethoscope left inside the room, and hand hygiene before and after every contact with the client" },
      { id: "d", text: "Standard precautions with a regular adult surgical mask for all nursing staff, gloves for body fluid contact, and no restriction on the client moving around the ward" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Airborne Infection Isolation Room (AIIR) with negative air pressure, fit-tested N95 respirator mask for staff, and surgical mask on client during transport\" Mycobacterium tuberculosis is transmitted via droplet nuclei (< 5 micrometers) that remain suspended in the air. Mandatory airborne precautions include: 1) Negative-pressure airborne infection isolation room (AIIR) exhausting at least 6-12 air changes/hour, 2) Healthcare personnel must wear a fit-tested particulate respirator (N95 or higher) prior to entering, and 3) The client wears a standard surgical mask if leaving the room for essential transport. Why the other options fail: option b uses droplet precautions, which suit organisms spread by large droplets over short distances, not the small droplet nuclei of tuberculosis. Option c uses contact precautions, which do not address airborne transmission at all. Option d offers standard precautions with a surgical mask, which does not filter the particle size that carries tuberculosis and is fitted to no one.",
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
      { id: "a", text: "Stop all the medications immediately and attend the emergency department for renal function tests, since discoloured urine indicates acute renal failure" },
      { id: "b", text: "This indicates severe hepatic failure from pyrazinamide, so double the fluid intake and return to the clinic for liver function tests in the morning" },
      { id: "c", text: "Take two iron tablets daily to replace the haemoglobin being lost in the urine, and increase dietary protein until the colour returns to normal" },
      { id: "d", text: "This reddish-orange discoloration is an expected, harmless side effect of Rifampicin and is not a sign of bleeding or drug toxicity." }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"This reddish-orange discoloration is an expected, harmless side effect of Rifampicin and is not a sign of bleeding or drug toxicity.\" Rifampicin causes benign reddish-orange discoloration of all bodily fluids (urine, sweat, saliva, tears, feces). It may permanently stain soft contact lenses. The nurse should reassure the client that this is harmless and does not indicate hematuria or liver damage. In contrast, hepatitis (yellow jaundice) or Ethambutol-induced optic neuritis (loss of red-green visual acuity) requires immediate medical evaluation. Why the other options fail: option a stops therapy on the basis of a harmless effect, which risks resistance and relapse. Option b attributes the colour to hepatic failure, which does not discolour urine orange and would come with jaundice rather than a red-orange tint. Option c treats an imagined haemoglobin loss with iron, which does not change the colour and duplicates a drug the client may already be taking.",
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
      { id: "a", text: "Left lateral decubitus with the diseased lung dependent, so that gravity holds the fluid against the chest wall and away from the mediastinum" },
      { id: "b", text: "Flat supine with the legs elevated in Trendelenburg, so that the effusion pools away from the diaphragm and the needle can be inserted lower" },
      { id: "c", text: "Sitting upright on the edge of the bed, leaning forward over an overbed table padded with pillows" },
      { id: "d", text: "Prone with a pillow beneath the abdomen, so that the weight of the chest falls forward and widens the posterior intercostal spaces" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Sitting upright on the edge of the bed, leaning forward over an overbed table padded with pillows\" The optimal position for thoracentesis is upright sitting on the edge of the bed, leaning forward with arms resting on a pillow-padded overbed table. This position widens the intercostal spaces, spreads the ribs, allows fluid to pool at the base of the pleural space, and provides safe access for needle insertion while minimizing visceral pleural puncture. Why the other options fail: option a lies the client on the diseased side, which lets the effusion pool against the site of puncture and restricts breathing on the good side. Option b positions the client head-down, which pushes the diaphragm and the effusion upwards into the field and makes the tap more difficult. Option d places the client face down, which neither widens the intercostal spaces nor gives access to the posterior chest.",
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
      { id: "a", text: "The chest tube is functioning normally and the lung has fully re-expanded, since bubbling shows that air is moving freely through the system" },
      { id: "b", text: "An air leak is present in the drainage system or pleural space" },
      { id: "c", text: "The suction control chamber is set to an inadequate negative pressure, so the wall suction should be turned up until the bubbling stops" },
      { id: "d", text: "Subcutaneous emphysema is resolving into the intrapleural space, which is why the bubbling has become continuous rather than intermittent" }
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"An air leak is present in the drainage system or pleural space\" In a closed underwater-seal drainage system: Tidaling (fluid fluctuations with respirations) is normal. Intermittent bubbling on exhalation is expected initially when air is evacuated from a pneumothorax. Continuous, vigorous bubbling in the water-seal chamber indicates an air leak—either in the system tubing/connections or inside the client's chest (bronchopleural fistula or unresolved large pleural tear). The nurse must locate the leak immediately. Why the other options fail: option a treats continuous bubbling as evidence of re-expansion, when it is the sign of an ongoing air leak. Option c confuses the water-seal chamber with the suction control chamber; bubbling in the latter is normal and bubbling in the former is not. Option d invents a mechanism by which subcutaneous emphysema would resolve into the pleural space, which is not how gas moves.",
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
      { id: "b", text: "Apply an airtight occlusive dressing and tape it securely on all four sides with heavy adhesive silk tape" },
      { id: "c", text: "Clamp the remaining tubing and submerge the tip in sterile water" },
      { id: "d", text: "Cover the insertion site immediately with a sterile petroleum gauze dressing taped on THREE sides" }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Cover the insertion site immediately with a sterile petroleum gauze dressing taped on THREE sides\" When a chest tube is accidentally dislodged, the priority is to seal the wound while preventing tension pneumothorax. Cover the site immediately with sterile petrolatum gauze taped on THREE sides. This creates a one-way flutter valve: it prevents external atmospheric air from being sucked into the pleural cavity during inspiration, but allows trapped intrapleural air to escape during expiration, averting tension pneumothorax. Why the other options fail: option a re-inserts a contaminated tube into the pleural space, which risks infection and creates a fresh tract. Option b seals the wound on all four sides, which prevents inspired air escaping and can produce the tension pneumothorax the dressing is meant to avoid. Option c clamps and submerges, which is the correct response to a tube that has disconnected from the drain, not one that has come out of the client.",
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
      { id: "a", text: "Transport the client to the ultrasound room for lower limb Doppler imaging, since confirming the diagnosis before treatment avoids unnecessary anticoagulation" },
      { id: "b", text: "Give oral aspirin 300 mg with water, since platelet inhibition limits further clot propagation and can be given without waiting for imaging" },
      { id: "c", text: "Instruct the client to cough vigorously to clear a suspected mucus plug, since the sudden dyspnoea and pleuritic pain suggest large airway obstruction" },
      { id: "d", text: "Elevate the head of the bed to high-Fowler's position, apply high-flow oxygen, and activate the rapid response team" }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Elevate the head of the bed to high-Fowler's position, apply high-flow oxygen, and activate the rapid response team\" Acute pulmonary embolism causes sudden obstruction of pulmonary arterial blood flow, producing acute alveolar dead space, severe hypoxemia, and acute right heart strain. Immediate priority nursing actions: 1) Position in high-Fowler's to maximize diaphragmatic excursion and ease breathing mechanics, 2) Apply high-flow oxygen immediately to treat tissue hypoxia, 3) Activate emergency/rapid response team, and 4) Establish IV access for anticoagulation (unfractionated heparin). Why the other options fail: option a leaves a hypoxaemic client with a heart rate of 124 to go for a leg scan before receiving oxygen. Option b gives an antiplatelet that does not treat a pulmonary embolus and delays oxygen and anticoagulation. Option c mistakes a vascular emergency for a mucus plug and asks the client to cough while severely hypoxaemic.",
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
      { id: "a", text: "Prone positioning increases cardiac preload by compressing the inferior vena cava, which raises the pressure driving blood through the pulmonary circulation" },
      { id: "b", text: "Prone positioning decreases tidal volume, which reduces barotrauma and the risk of pneumothorax in already stiff ARDS lungs" },
      { id: "c", text: "Prone positioning recruits collapsed dorsal lung units and improves ventilation-perfusion matching" },
      { id: "d", text: "Prone positioning halts alveolar exudate secretion by reversing the hydrostatic gradient, so that fluid stops leaking into the alveolar spaces" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Prone positioning recruits collapsed dorsal lung units and improves ventilation-perfusion matching\" In ARDS, alveolar collapse and inflammatory consolidation occur predominantly in dependent, dorsal lung regions. In the supine position, the weight of the heart and ventral tissue further compresses these dorsal lung units. Placing the client in the prone position (proning) relieves cardiac compression, recruits large dorsal alveolar regions, and redistributes pulmonary blood flow, markedly improving ventilation-perfusion matching and arterial oxygenation. Why the other options fail: option a describes a compression that would reduce, not increase, venous return and has no relation to shunt physiology. Option b presents a reduction in tidal volume as the goal, when lung-protective ventilation already sets it and proning does not lower it. Option d attributes the improvement to a change in fluid secretion, whereas proning works by opening dorsal lung units that were perfused but not ventilated.",
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
      { id: "a", text: "Swallow a glass of warm milk immediately after the second puff, since the milk coats the pharynx and washes the steroid off the mucosa" },
      { id: "b", text: "Rinse mouth thoroughly with water and spit it out after each inhalation" },
      { id: "c", text: "Inhale rapidly through the mouth and exhale immediately through the nose, since a fast inhalation delivers more of the drug to the lower airways" },
      { id: "d", text: "Use the fluticasone inhaler only as a rescue medication when wheezing starts, since using it every day leads to tolerance of its effect" }
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Rinse mouth thoroughly with water and spit it out after each inhalation\" Inhaled corticosteroids (fluticasone, budesonide) deposit small drug particles onto the oral pharyngeal mucosa, which can suppress local immunity and cause oral candidiasis (thrush) and dysphonia (hoarseness). Using a spacer device reduces oropharyngeal deposition, and rinsing the mouth with water and spitting it out immediately after each use clears residual steroid particles from oral tissues. Why the other options fail: option a coats the mucosa with milk rather than removing the drug from it. Option c describes a rapid inhalation, which increases oropharyngeal deposition and worsens the very problem the rinse is meant to solve. Option d treats a daily maintenance corticosteroid as a rescue bronchodilator, which both under-treats the asthma and exposes the client to thrush daily.",
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
      { id: "a", text: "Stop the aminophylline infusion immediately, notify the prescriber, and anticipate a stat serum theophylline level" },
      { id: "b", text: "Increase the infusion rate by 5 mL per hour to overcome tachyphylaxis, since the return of wheeze means the current dose is no longer adequate" },
      { id: "c", text: "Administer an oral antiemetic and reassure the client that the tremor is an expected effect, since it usually settles after the first week of therapy" },
      { id: "d", text: "Administer 100 mg of oral potassium chloride for suspected hypokalaemia, since theophylline drives potassium into cells and causes the arrhythmia" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Stop the aminophylline infusion immediately, notify the prescriber, and anticipate a stat serum theophylline level\" Aminophylline/theophylline has a narrow therapeutic range (typically 10-20 mcg/mL). Toxicity manifests initially with gastrointestinal symptoms (nausea, vomiting), neurological excitation (tremors, restlessness, seizures), and cardiovascular dysrhythmias (tachycardia, PVCs, ventricular tachycardia). The nurse must immediately stop the infusion, alert the physician, obtain a stat serum theophylline concentration, and prepare supportive antidotes (activated charcoal, beta-blockers). Why the other options fail: option b increases the dose of the drug producing the toxicity. Option c treats the nausea and leaves the infusion running, when the serum level is likely above the therapeutic range. Option d assumes a hypokalaemia that theophylline does not reliably cause in this way, and gives potassium without a level while ignoring the drug that is actually responsible.",
    strategy: "Theophylline toxicity signs: Nausea/vomiting + tremors + tachycardia/PVCs (narrow therapeutic window 10-20 mcg/mL). Stop infusion stat.",
    difficulty: "medium",
    tags: ["course:respiratory", "module:pharmacology", "lesson:respiratory-drugs-inhaler-technique-and-safety", "theophylline", "aminophylline-toxicity", "narrow-therapeutic-index"],
    isFree: false,
  }
];
