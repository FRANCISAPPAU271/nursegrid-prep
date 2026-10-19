import type { AuthoredQuestion } from "./authored-bank";

/**
 * Dedicated NCLEX-style clinical scenario questions for Fundamentals of Nursing modules.
 * Authored specifically for Fundamentals of Nursing course modules to test authentic clinical judgment,
 * vital sign measurement and auscultatory gap, nursing process (ADPIE), infection control and restraints,
 * body mechanics and pressure injury staging, enteral feeding and elimination, parenteral medication routes
 * (ventrogluteal Z-track, IV phlebitis vs infiltration), and care of the unconscious/dying patient.
 */
export const FUND_MODULE_SCENARIOS: AuthoredQuestion[] = [
  // =========================================================================
  // MODULE 01: THE PROFESSION, NURSING PROCESS & COMMUNICATION
  // =========================================================================
  {
    authoredId: "NG-MOD-FUND-001",
    categorySlug: "fundamentals",
    stem: "A nurse admits an 84-year-old client with pneumonia and dehydration. During the planning phase of the nursing process, which proposed patient outcome is correctly written as a SMART (Specific, Measurable, Achievable, Realistic, Timed) goal?",
    choices: [
      { id: "a", text: "The client will understand the importance of drinking adequate fluids by discharge" },
      { id: "b", text: "The client will maintain oral intake of at least 1,500 mL of fluids every 24 hours within 48 hours of admission" },
      { id: "c", text: "The nurse will administer 2 liters of normal saline intravenously over 24 hours" },
      { id: "d", text: "The client will show no signs of dehydration and feel much better tomorrow" }
    ],
    correctChoiceId: "b",
    rationale: "In the nursing process, a measurable patient-centered outcome goal must contain a specific action, measurable criteria, a realistic target, and a defined timeframe. Option B clearly specifies who (the client), what action (maintain oral intake of at least 1,500 mL of fluids), and the exact timeframe (every 24 hours within 48 hours of admission). Option A is vague ('understand' is not directly measurable); Option C describes a nurse's action rather than a patient outcome; and Option D uses subjective criteria ('feel much better') lacking objective parameters.",
    strategy: "SMART outcome goals: Must be CLIENT-centered (not nurse-centered), measurable (numbers/quantities), and include a specific TIMEFRAME.",
    difficulty: "medium",
    tags: ["fundamentals", "nursing-process", "smart-goals", "care-planning", "adpie"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-FUND-002",
    categorySlug: "leadership-delegation",
    stem: "A 56-year-old client scheduled for an elective laparoscopic cholecystectomy tells the circulating nurse in the holding area, \"The doctor rushed through the explanation, and I honestly don't understand the risks or why I can't just have medication instead. I don't feel ready to sign anything.\" The consent form remains unsigned. What is the nurse's PRIORITY legal and professional responsibility?",
    choices: [
      { id: "a", text: "Explain the surgical procedure, risks, and alternatives to the client, and obtain the client's signature" },
      { id: "b", text: "Notify the operating surgeon immediately that the client has unanswered questions and withholds consent" },
      { id: "c", text: "Reassure the client that laparoscopic surgery is routine and persuade the client to sign to avoid cancelling the theatre list" },
      { id: "d", text: "Have the client's adult daughter sign the informed consent form on the client's behalf" }
    ],
    correctChoiceId: "b",
    rationale: "The legal duty to provide information regarding surgical indications, risks, complications, and non-surgical alternatives rests exclusively with the healthcare provider performing the procedure (the surgeon). The nurse's role is to advocate for the client, verify that the client has received the required information, and witness the voluntary signature. When a client expresses lack of understanding or hesitation, the nurse must never explain surgical risks or persuade the client; the nurse must stop the process and notify the surgeon immediately.",
    strategy: "Informed consent rule: The SURGEON explains the procedure, risks, and alternatives. The NURSE only witnesses the signature. If the patient has questions or hesitates, call the surgeon back!",
    difficulty: "easy",
    tags: ["fundamentals", "informed-consent", "patient-advocacy", "ethics", "legal-nursing"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-FUND-003",
    categorySlug: "fundamentals",
    stem: "A client newly diagnosed with inoperable lung cancer sits staring out the hospital window. When the nurse enters the room, the client murmurs, \"I don't know what I am going to do. I haven't even told my children yet.\" Which response by the nurse exemplifies THERAPEUTIC communication?",
    choices: [
      { id: "a", text: "\"You must be strong for your children right now; they need your courage.\"" },
      { id: "b", text: "\"Why have you waited so long to talk to your family about your diagnosis?\"" },
      { id: "c", text: "\"You are carrying a very heavy burden right now. Would you like to talk about what feels hardest about telling them?\"" },
      { id: "d", text: "\"Don't worry, modern chemotherapy has made miraculous advances recently.\"" }
    ],
    correctChoiceId: "c",
    rationale: "Therapeutic communication acknowledges and validates the client's emotional distress while using open-ended reflection to invite further exploration at the client's own pace. Option C reflects the client's heavy emotional state and offers supportive presence without judgment. Option A gives unsolicited advice and imposes guilt; Option B uses an accusatory, non-therapeutic 'why' question; and Option D provides false reassurance, deflecting from the client's existential grief.",
    strategy: "Therapeutic communication: Eliminate options that give false reassurance ('don't worry'), give advice ('you should'), or ask 'why' questions. Choose the response that reflects emotion and opens communication.",
    difficulty: "easy",
    tags: ["fundamentals", "therapeutic-communication", "active-listening", "empathy", "palliative"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 02: HEALTH ASSESSMENT & VITAL SIGNS
  // =========================================================================
  {
    authoredId: "NG-MOD-FUND-004",
    categorySlug: "fundamentals",
    stem: "A nurse prepares to measure the blood pressure of an obese adult client. Which equipment error will result in a FALSELY ELEVATED (falsely high) blood pressure reading?",
    choices: [
      { id: "a", text: "Using a blood pressure cuff that is too narrow or too small for the circumference of the client's arm" },
      { id: "b", text: "Using a blood pressure cuff that is too wide or too large for the client's arm" },
      { id: "c", text: "Positioning the client's arm elevated above heart level during measurement" },
      { id: "d", text: "Deflating the cuff at a rate faster than 5 mmHg per second" }
    ],
    correctChoiceId: "a",
    rationale: "Proper blood pressure cuff sizing requires the bladder width to be approximately 40% of the upper arm circumference and the bladder length to encircle at least 80% of the arm. Using a cuff that is too narrow or too small requires excessive pressure to occlude the brachial artery, resulting in a FALSELY HIGH blood pressure reading. Conversely, using a cuff that is too wide results in a falsely low reading; positioning the arm above heart level yields a falsely low reading; and positioning the arm below heart level yields a falsely high reading.",
    strategy: "Blood pressure cuff errors: Cuff too small/narrow = Falsely HIGH reading. Cuff too large/wide = Falsely LOW reading. Arm below heart level = Falsely HIGH. Arm above heart level = Falsely LOW.",
    difficulty: "medium",
    tags: ["fundamentals", "vital-signs", "blood-pressure", "cuff-sizing", "clinical-measurement"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-FUND-005",
    categorySlug: "fundamentals",
    stem: "Two nurses simultaneously assess the apical and radial pulses of a client with atrial fibrillation. Over a full 60 seconds, Nurse A counts an apical heart rate of 104 beats/minute while Nurse B counts a radial pulse rate of 82 beats/minute. What does the calculated difference of 22 beats/minute represent, and what is its clinical significance?",
    choices: [
      { id: "a", text: "A normal physiological pulse variation caused by respiratory sinus arrhythmia" },
      { id: "b", text: "A pulse deficit of 22 beats/minute, indicating that ineffective cardiac contractions fail to transmit peripheral arterial pressure waves" },
      { id: "c", text: "Measurement error requiring both nurses to re-measure simultaneously for 15 seconds" },
      { id: "d", text: "An auscultatory gap indicating severe aortic stenosis" }
    ],
    correctChoiceId: "b",
    rationale: "A pulse deficit occurs when the apical heart rate exceeds the peripheral radial pulse rate (Apical rate - Radial rate = Pulse deficit: 104 - 82 = 22 bpm). It signifies that rapid, uncoordinated ventricular contractions (as in atrial fibrillation) pump insufficient stroke volumes to generate palpable peripheral pulse waves at the radial artery. It indicates hemodynamic compromise and inefficient cardiac output. Measurement must be performed by two clinicians simultaneously over a full 60 seconds using the same watch.",
    strategy: "Pulse deficit formula: Apical pulse MINUS Radial pulse. Apical is always >= Radial. Difference = Pulse Deficit (indicates unperfused weak heart beats).",
    difficulty: "medium",
    tags: ["fundamentals", "vital-signs", "pulse-deficit", "apical-pulse", "cardiac-assessment"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-FUND-006",
    categorySlug: "fundamentals",
    stem: "A nurse observes a client's respiratory pattern. The client demonstrates breathing that gradually increases in rate and depth, reaches a crescendo peak, gradually decreases in rate and depth, and is followed by a period of apnoea lasting 20 seconds before the cycle repeats. Which breathing pattern is this client exhibiting?",
    choices: [
      { id: "a", text: "Kussmaul respirations" },
      { id: "b", text: "Cheyne-Stokes respirations" },
      { id: "c", text: "Biot's (ataxic) respirations" },
      { id: "d", text: "Obstructive apnoea" }
    ],
    correctChoiceId: "b",
    rationale: "Cheyne-Stokes respiration is an abnormal breathing pattern characterized by a rhythmic waxing and waning of tidal volume: a gradual increase in respiratory rate and depth, followed by a gradual decrease in depth, ending in a period of apnea (typically 15 to 30 seconds) before repeating. It is commonly observed in severe congestive heart failure, severe neurological injury (bilateral cortical or basal forebrain lesions), and near the end of life. Kussmaul breathing is deep, rapid, unvarying hyperventilation characteristic of metabolic acidosis (diabetic ketoacidosis). Biot's respirations are irregular periods of apnea alternating with disorganized breaths of identical depth.",
    strategy: "Respiratory patterns: Cheyne-Stokes = Waxing and waning + periodic apnea (crescendo-decrescendo). Kussmaul = Deep, rapid, labored breathing (DKA).",
    difficulty: "medium",
    tags: ["fundamentals", "vital-signs", "respiratory-assessment", "cheyne-stokes", "kussmaul"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 03: SAFE, CLEAN & COMFORTABLE ENVIRONMENT
  // =========================================================================
  {
    authoredId: "NG-MOD-FUND-007",
    categorySlug: "safety-infection-control",
    stem: "An 80-year-old client with mild vascular dementia is admitted to an acute medical ward following a mechanical fall at home. The Morse Fall Scale score places the client at high risk for falls. Which nursing intervention is MOST effective and appropriate for fall prevention?",
    choices: [
      { id: "a", text: "Keep all four side rails in the raised position continuously while the client is in bed" },
      { id: "b", text: "Place the bed in the lowest position, lock wheels, ensure call light is within easy reach, and apply non-skid footwear" },
      { id: "c", text: "Administer a nightly sedative hypnotic to prevent the client from getting out of bed" },
      { id: "d", text: "Apply bilateral wrist restraints whenever nursing staff leave the room" }
    ],
    correctChoiceId: "b",
    rationale: "Evidence-based fall prevention includes: placing the bed in its lowest position, locking bed wheels, keeping the call light and personal items within immediate reach, providing non-skid socks or shoes, ensuring adequate room lighting, and scheduling regular toileting assistance. Raising all four side rails is considered a physical restraint; in confused older adults, it significantly increases injury severity because clients attempt to climb over the elevated rails and fall from a greater height. Sedatives increase delirium, ataxia, and fall risk.",
    strategy: "Fall prevention: Bed low + wheels locked + call bell in reach + non-skid socks. Raising all 4 side rails is a restraint and increases fall injury severity!",
    difficulty: "easy",
    tags: ["fundamentals", "fall-prevention", "patient-safety", "morse-fall-scale", "gerontology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-FUND-008",
    categorySlug: "safety-infection-control",
    stem: "A disoriented client repeatedly attempts to pull out an endotracheal tube and central venous catheter. Non-restrictive de-escalation measures fail, and bilateral soft wrist restraints are applied. Which nursing action is mandatory to ensure client safety and regulatory compliance?",
    choices: [
      { id: "a", text: "Tie the restraint straps securely to the movable side rails using a square double knot" },
      { id: "b", text: "Assess neurovascular status and skin integrity every 30 minutes, release restraints every 2 hours for range of motion, and secure straps to the bed frame with a quick-release knot" },
      { id: "c", text: "Maintain the restraints continuously for 72 hours under a single PRN (as-needed) physician order" },
      { id: "d", text: "Keep the restraints tight enough that no fingers can fit under the cuff to prevent slipping" }
    ],
    correctChoiceId: "b",
    rationale: "Standards of care for physical restraints require: (1) Securing restraint straps to the movable bed frame (NEVER to side rails, as moving the rail causes limb traction and injury), (2) Using a quick-release knot (slip knot) to allow immediate release in an emergency (such as vomiting or cardiac arrest), (3) Ensuring two fingers can easily slide under the restraint cuff to prevent circulatory compromise, (4) Assessing neurovascular status (circulation, movement, sensation) and skin integrity every 15–30 minutes, and (5) Removing the restraints every 2 hours for skin assessment, toileting, and range-of-motion exercises. Restraint orders cannot be written PRN and must be re-evaluated every 24 hours.",
    strategy: "Restraint safety essentials: Quick-release knot + Tied to BED FRAME (never side rails) + 2 fingers fit under cuff + Release q2h + Never PRN.",
    difficulty: "medium",
    tags: ["fundamentals", "restraints", "patient-safety", "neurovascular-assessment", "ethics"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 04: MOBILITY, POSITIONING & SKIN INTEGRITY
  // =========================================================================
  {
    authoredId: "NG-MOD-FUND-009",
    categorySlug: "fundamentals",
    stem: "A nurse assesses a sacral pressure injury on a bedridden client. The wound bed displays full-thickness tissue loss with visible subcutaneous fat. Slough is present, but neither bone, tendon, nor skeletal muscle is exposed. Undermining is noted along the wound edges. How should the nurse stage this pressure injury?",
    choices: [
      { id: "a", text: "Stage 1" },
      { id: "b", text: "Stage 2" },
      { id: "c", text: "Stage 3" },
      { id: "d", text: "Stage 4" }
    ],
    correctChoiceId: "c",
    rationale: "According to NPUAP/EPUAP staging guidelines: Stage 1 is non-blanchable erythema of intact skin; Stage 2 is partial-thickness skin loss with exposed dermis (or intact/ruptured serum-filled blister); Stage 3 is full-thickness skin loss in which adipose (subcutaneous fat) is visible, with granulation tissue, slough, or epibole (rolled edges), but NO bone, tendon, or muscle is exposed; Stage 4 involves full-thickness skin and tissue loss with exposed or directly palpable fascia, muscle, tendon, ligament, cartilage, or bone. Unstageable occurs when slough or eschar completely obscures the wound bed extent.",
    strategy: "Pressure Injury Staging Guide: Stage 1 = Red intact skin. Stage 2 = Blister / dermis loss. Stage 3 = Subcutaneous fat visible. Stage 4 = Muscle, tendon, or bone exposed.",
    difficulty: "medium",
    tags: ["fundamentals", "pressure-injury", "wound-care", "staging", "skin-integrity"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-FUND-010",
    categorySlug: "fundamentals",
    stem: "A client who is hemiplegic following an ischemic stroke is positioned in bed. Which evidence-based positioning strategy is MOST effective in preventing both sacral pressure injuries and shear stress?",
    choices: [
      { id: "a", text: "Maintain the head of the bed in high Fowler's position (90 degrees) continuously" },
      { id: "b", text: "Reposition the client at least every 2 hours using a 30-degree lateral tilted position and maintain the head of the bed at or below 30 degrees when resting" },
      { id: "c", text: "Turn the client strictly onto the 90-degree lateral side with weight resting directly on the greater trochanter" },
      { id: "d", text: "Massage reddened bony prominences vigorously every 4 hours to stimulate capillary blood flow" }
    ],
    correctChoiceId: "b",
    rationale: "To prevent pressure injuries and shear force, the head of the bed should be kept at or below 30 degrees (unless contraindicated by feeding or aspiration risk) because elevating the head higher causes gravitational sliding, generating intense shear stress on sacral capillaries. When repositioning sideways, the 30-degree lateral tilted position (supported with pillows under the back and between knees) is preferred over direct 90-degree lateral positioning, which places excessive pressure on the greater trochanter. Massaging reddened bony prominences is contraindicated because it damages fragile capillaries and accelerates deep tissue necrosis.",
    strategy: "Pressure ulcer prevention: Turn q2h + 30-degree lateral tilt + HOB <= 30 degrees. NEVER massage reddened bony prominences!",
    difficulty: "medium",
    tags: ["fundamentals", "positioning", "pressure-injury-prevention", "shear-force", "body-mechanics"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-FUND-011",
    categorySlug: "fundamentals",
    stem: "A nurse prepares to assist a client with right-sided hemiparesis from the bed into a wheelchair. Which body mechanics and transfer technique demonstrates correct clinical practice?",
    choices: [
      { id: "a", text: "Position the wheelchair on the client's weak (right) side at a 90-degree angle" },
      { id: "b", text: "Position the wheelchair on the client's strong (left) side at a 45-degree angle, lock the wheelchair brakes, apply a gait belt, and instruct the client to pivot on the stronger leg" },
      { id: "c", text: "Lift the client by pulling upward under the client's axillae while bending at the waist" },
      { id: "d", text: "Keep knees straight and twist the torso while transferring the client" }
    ],
    correctChoiceId: "b",
    rationale: "Safe client transfer technique requires: (1) Placing the wheelchair on the client's STRONGER (unaffected) side facing the bed at a 45-degree angle so the client moves toward their functional side; (2) Locking the wheels of both the bed and wheelchair; (3) Using a transfer/gait belt around the client's waist; (4) Having the client pivot on the stronger foot; and (5) The nurse must maintain a wide base of support, bend at the knees and hips (not the waist), and pivot their own body rather than twisting the spine. Pulling under the axillae causes severe shoulder subluxation and brachial plexus trauma.",
    strategy: "Safe transfer rule: Wheelchair on the STRONGER side at 45 degrees. Pivot on the strong foot. Use a gait belt; never pull under the armpits!",
    difficulty: "easy",
    tags: ["fundamentals", "transfers", "body-mechanics", "hemiparesis", "gait-belt"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 05: NUTRITION, FLUIDS & ELIMINATION
  // =========================================================================
  {
    authoredId: "NG-MOD-FUND-012",
    categorySlug: "fundamentals",
    stem: "A nurse has just inserted a small-bore nasogastric (NG) feeding tube in an adult client. Which method is the GOLD STANDARD to verify correct tube placement in the stomach prior to administering the first enteral feeding or medication?",
    choices: [
      { id: "a", text: "Auscultating a rushing sound over the epigastrium while injecting 30 mL of air through the tube" },
      { id: "b", text: "Obtaining an immediate post-insertion abdominal/chest X-ray confirming tube tip location in the gastric body" },
      { id: "c", text: "Placing the proximal end of the NG tube into a cup of water to check for bubbling" },
      { id: "d", text: "Observing whether the client can speak without coughing or choking" }
    ],
    correctChoiceId: "b",
    rationale: "Radiographic (X-ray) confirmation is the absolute gold standard to confirm proper tube tip positioning in the stomach prior to initiating the first enteral feed or medication. Auscultating air insufflation ('whoosh' test) is unreliable and dangerous because air sounds transmit clearly even when the tube is misplaced in the bronchus or pleural space. Placing the tube end in water ('bubble test') can cause pulmonary aspiration if the patient inhales. Once placement is radiographically verified, ongoing bedside verification before each feed is done by aspirating gastric secretions and testing pH (gastric aspirate pH is typically <= 5.5).",
    strategy: "NG Tube Placement: Initial gold standard = X-RAY. Ongoing bedside check = Gastric aspirate pH <= 5.5. The air 'whoosh' test is outdated and unsafe.",
    difficulty: "easy",
    tags: ["fundamentals", "ng-tube", "enteral-feeding", "x-ray-confirmation", "patient-safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-FUND-013",
    categorySlug: "fundamentals",
    stem: "A client has an indwelling urinary (Foley) catheter following prostate surgery. Which nursing action represents correct evidence-based care to prevent Catheter-Associated Urinary Tract Infections (CAUTI)?",
    choices: [
      { id: "a", text: "Disconnect the catheter from the drainage tubing every morning to irrigate the bladder with normal saline" },
      { id: "b", text: "Keep the catheter drainage bag suspended below the level of the bladder at all times and off the floor, maintaining a sterile closed drainage system" },
      { id: "c", text: "Collect routine urine culture specimens by opening the junction between the catheter and the drainage bag" },
      { id: "d", text: "Apply topical antibacterial povidone-iodine ointment around the urethral meatus during daily hygiene" }
    ],
    correctChoiceId: "b",
    rationale: "CAUTI prevention guidelines dictate maintaining an uninterrupted sterile closed drainage system and keeping the collection bag continuously BELOW the level of the bladder (to prevent retrograde reflux of colonized urine) and suspended off the floor (to prevent contamination). Disconnecting the closed system for routine irrigation dramatically increases infection risk; specimens must be aspirated aseptically from the needleless sampling port (never by breaking the catheter-tubing junction); and meatal cleaning should be performed with standard soap and water, as topical antiseptics cause chemical irritation.",
    strategy: "CAUTI prevention bundle: Closed sterile system + Drainage bag BELOW bladder and off the floor + Specimen from sampling port only + Clean with soap and water.",
    difficulty: "easy",
    tags: ["fundamentals", "cauti", "urinary-catheter", "infection-prevention", "bladder-care"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-FUND-014",
    categorySlug: "fundamentals",
    stem: "A nurse prepares to administer a prescribed 750 mL cleansing tap-water enema to an adult client experiencing severe constipation. During the infusion, the client suddenly complains of acute abdominal cramping and fullness. What should the nurse do FIRST?",
    choices: [
      { id: "a", text: "Increase the height of the enema solution container to speed up completion" },
      { id: "b", text: "Stop the infusion temporarily by clamping the tubing or lowering the bag, instruct the client to take slow deep breaths, and resume at a slower rate once cramps subside" },
      { id: "c", text: "Remove the rectal tube immediately and assist the client to the commode" },
      { id: "d", text: "Tell the client to hold their breath and bear down through the discomfort" }
    ],
    correctChoiceId: "b",
    rationale: "Abdominal cramping during an enema infusion is usually caused by intestinal distension from rapid fluid flow or cold solution. The nurse should immediately clamp the tubing or lower the container to halt or slow the flow, allowing the intestinal wall to adapt and the spasm to pass, while coaching the client to take slow, deep diaphragmatic breaths through the mouth. Once the cramping abates, the infusion can resume at a slower flow rate. Elevating the container increases flow rate and worsens cramping. Removing the tube prematurely prevents adequate administration.",
    strategy: "Enema cramping reflex: CLAMP or LOWER the bag immediately! Pause flow, breathe slowly, then restart at a slower rate.",
    difficulty: "medium",
    tags: ["fundamentals", "enema-administration", "bowel-elimination", "procedure", "constipation"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 06: OXYGENATION, MEDICINES & CLINICAL PROCEDURES
  // =========================================================================
  {
    authoredId: "NG-MOD-FUND-015",
    categorySlug: "pharmacology-parenteral",
    stem: "A nurse is ordered to administer 3 mL of an irritating deep intramuscular (IM) iron injection to an adult client. Which anatomical site and injection technique is the SAFEST and most appropriate choice?",
    choices: [
      { id: "a", text: "Dorsogluteal site using standard perpendicular injection" },
      { id: "b", text: "Ventrogluteal site using the Z-track technique" },
      { id: "c", text: "Deltoid muscle using a 45-degree angle" },
      { id: "d", text: "Vastus lateralis using a rapid darting technique with skin pinched tightly" }
    ],
    correctChoiceId: "b",
    rationale: "The Ventrogluteal site (gluteus medius and minimus) is the preferred, safest intramuscular site for adults: it is situated away from major blood vessels and the sciatic nerve, has a thick muscle belly, and accommodates volumes up to 3–4 mL. The Z-track technique is mandatory for irritating or staining medications (such as iron dextran) because pulling the skin and subcutaneous tissue 2.5–3.5 cm laterally before needle insertion creates a zigzag track when released, effectively sealing the medication deep within the muscle and preventing leakage into subcutaneous tissue. The dorsogluteal site is no longer recommended due to high risk of sciatic nerve injury.",
    strategy: "Deep IM injections: VENTROGLUTEAL is the safest site (no major nerves/vessels). Use Z-TRACK for irritating/staining drugs to lock medicine in muscle.",
    difficulty: "medium",
    tags: ["fundamentals", "intramuscular-injection", "ventrogluteal-site", "z-track", "medication-administration"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-FUND-016",
    categorySlug: "pharmacology-parenteral",
    stem: "A nurse assesses a client's peripheral intravenous infusion site and notes that the skin around the cannula insertion site is cool to the touch, pale, and noticeably swollen with edema. The infusion has slowed to a sluggish drip. What complication has occurred, and what is the nurse's immediate action?",
    choices: [
      { id: "a", text: "Phlebitis; apply warm moist heat and increase the infusion rate to flush the vein" },
      { id: "b", text: "Infiltration; stop the infusion, remove the IV cannula immediately, elevate the extremity, and apply a cool or warm compress depending on the solution" },
      { id: "c", text: "Venous thrombosis; flush the catheter vigorously with 10 mL of normal saline" },
      { id: "d", text: "Local infection; apply an antibiotic ointment over the insertion site while leaving the cannula in place" }
    ],
    correctChoiceId: "b",
    rationale: "Infiltration occurs when IV fluid leaks into surrounding subcutaneous tissue, characterized by COOLNESS to the touch, PALLOR, EDEMA/swelling, and sluggish infusion. The immediate nursing response: STOP the infusion immediately, REMOVE the IV cannula, ELEVATE the affected limb above heart level to promote fluid reabsorption, and apply a compress. In contrast, Phlebitis presents with ERYTHEMA, WARMTH, tenderness, and a palpable cord along the vein path. Flushing a sluggish line is dangerous as it dislodges clots or forces fluid deeper into tissues.",
    strategy: "IV Complications: Infiltration = COOL, PALE, SWOLLEN (discontinue, elevate). Phlebitis = WARM, RED, TENDER CORD (discontinue, warm compress).",
    difficulty: "easy",
    tags: ["fundamentals", "iv-therapy", "infiltration", "phlebitis", "patient-safety"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-FUND-017",
    categorySlug: "fundamentals",
    stem: "A client with severe chronic obstructive pulmonary disease (COPD) and chronic hypercapnia requires precise low-flow supplemental oxygen therapy to maintain SpO2 between 88% and 92%. Which oxygen delivery device is the MOST appropriate to deliver a precise, fixed concentration of oxygen (FiO2)?",
    choices: [
      { id: "a", text: "Simple face mask" },
      { id: "b", text: "Venturi mask" },
      { id: "c", text: "Non-rebreather mask with reservoir bag" },
      { id: "d", text: "Standard nasal cannula at 6 L/minute" }
    ],
    correctChoiceId: "b",
    rationale: "The Venturi mask is a high-flow oxygen delivery system that uses calibrated color-coded jet adaptors to entrain a specific proportion of room air with oxygen, delivering an exact, precise fraction of inspired oxygen (FiO2 from 24% to 50%) regardless of the patient's respiratory rate or depth. This precision is critical in clients with chronic CO2 retention (severe COPD) whose hypoxic respiratory drive can be blunted by uncontrolled high-flow oxygen. Simple masks and nasal cannulae provide variable, unpredictable FiO2, while non-rebreather masks deliver high concentrations (80–95%).",
    strategy: "COPD precise oxygen delivery: VENTURI MASK. It delivers an EXACT, fixed FiO2 (prevents CO2 narcosis and hypoventilation).",
    difficulty: "medium",
    tags: ["fundamentals", "oxygen-therapy", "venturi-mask", "copd", "respiratory-care"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 07: PAIN, UNCONSCIOUS PATIENT, LOSS & FIRST AID
  // =========================================================================
  {
    authoredId: "NG-MOD-FUND-018",
    categorySlug: "fundamentals",
    stem: "A nurse provides hygiene and preventative care for an unconscious, comatose client following a severe traumatic brain injury. Which nursing intervention is ESSENTIAL to protect the client's eyes from corneal ulceration and abrasion?",
    choices: [
      { id: "a", text: "Instill prescribed lubricating eye drops or ointment and apply eye shields or tape eyelids gently closed with paper tape" },
      { id: "b", text: "Irrigate the eyes daily with 50 mL of tap water" },
      { id: "c", text: "Keep the eyelids propped open with gauze pads to allow pupillary monitoring" },
      { id: "d", text: "Apply dry sterile cotton gauze sponges directly onto the cornea" }
    ],
    correctChoiceId: "a",
    rationale: "Comatose clients often lose the protective corneal (blink) reflex and may have incomplete eyelid closure (lagophthalmos), leading to severe corneal drying, keratitis, and permanent corneal ulceration. The nurse must instill prescribed sterile lubricating eye drops or methylcellulose ointment every 2 to 4 hours and tape the eyelids gently closed across the orbital rim using hypo-allergenic paper tape, or apply moisture chambers. Tap water is non-sterile and irritating; dry gauze scratches the delicate corneal epithelium.",
    strategy: "Care of unconscious client eyes: Lubricating drops/ointment + Eyelids gently closed with paper tape or moisture chamber to prevent corneal drying and blindness.",
    difficulty: "easy",
    tags: ["fundamentals", "unconscious-patient", "eye-care", "corneal-protection", "comatose-client"],
    isFree: true,
  },
{
    authoredId: "NG-MOD-FUND-019",
    categorySlug: "fundamentals",
    stem: "A patient has died and the family is coming to view the body. What should the nurse do about the patient's dentures?",
    choices: [
      { id: "a", text: "Insert them before rigor mortis sets in and leave them in place for the viewing" },
      { id: "b", text: "Discard them, because they are personal property" },
      { id: "c", text: "Send them to the mortuary separately and out of view" },
      { id: "d", text: "Leave them out and explain that this is hospital policy" },
    ],
    correctChoiceId: "a",
    rationale: "Dentures are inserted before rigor mortis develops, because afterwards the jaw cannot be opened without force, and leaving them in restores the familiar appearance of the face for the family and reduces the visible change caused by death. They are personal property and should be accounted for, not discarded, and if they cannot be inserted they must be labelled and sent with the body. Sending them out of view removes something that belongs with the patient, and there is no policy that requires dentures to be left out.",
    strategy: "Insert dentures before rigor: the family should see the face they know.",
    difficulty: "easy",
    tags: ["post-mortem-care", "death", "fundamentals"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-FUND-020",
    categorySlug: "safety-infection-control",
    stem: "A nurse sitting in the hospital cafeteria observes a visitor suddenly stand up, clutch their throat with both hands (universal sign of choking), and become unable to speak or cough. What sequence of first aid actions should the nurse perform?",
    choices: [
      { id: "a", text: "Offer the visitor a glass of water to wash down the obstruction" },
      { id: "b", text: "Perform a blind finger sweep into the oropharynx immediately" },
      { id: "c", text: "Stand behind the victim, lean them forward, deliver up to 5 firm back blows between the shoulder blades, followed by up to 5 abdominal thrusts (Heimlich maneuver), repeating until the object is expelled or the victim becomes unresponsive" },
      { id: "d", text: "Place the victim in a supine position and initiate rescue breathing immediately" }
    ],
    correctChoiceId: "c",
    rationale: "For a responsive adult experiencing severe foreign body airway obstruction (unable to speak, cough, or breathe; clutching throat), standard first aid guidelines (ERC/AHA) recommend delivering up to 5 sharp back blows between the shoulder blades with the heel of the hand, followed by up to 5 abdominal thrusts (Heimlich maneuver: subdiaphragmatic inward and upward thrusts). Repeat this cycle until the object is relieved. If the victim becomes unresponsive, lower them safely to the floor and immediately begin CPR (30 compressions, then open airway and look for object before rescue breaths). Never perform blind finger sweeps (pushes object deeper).",
    strategy: "Severe choking management: 5 Back blows -> 5 Abdominal thrusts (repeat). If patient goes unconscious -> Begin CPR (compressions first). NEVER do blind finger sweeps!",
    difficulty: "easy",
    tags: ["fundamentals", "first-aid", "choking", "heimlich-maneuver", "airway-obstruction"],
    isFree: false,
  },
];
