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
    rationale: "In the nursing process, a measurable patient-centered outcome goal must contain a specific action, measurable criteria, a realistic target, and a defined timeframe. Why the other options fail: option a uses 'understand', which cannot be observed or measured, so the goal can never be scored as met or unmet. Option c is written from the nurse's side of the plan, describing an intervention rather than a change in the client, which is the commonest error in outcome writing. Option d contains two vague criteria, 'no signs of dehydration' and 'feel much better', neither of which has a definition or a deadline attached to it.",
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
    rationale: "The legal duty to provide information regarding surgical indications, risks, complications, and non-surgical alternatives rests exclusively with the healthcare provider performing the procedure (the surgeon). The nurse's role is to advocate for the client, verify that the client has received the required information, and witness the voluntary signature. When a client expresses lack of understanding or hesitation, the nurse must never explain surgical risks or persuade the client; the nurse must stop the process and notify the surgeon immediately. Why the other options fail: option a has the nurse explain the risks, which is outside the nursing role and invalidates the consent even if the client signs. Option c avoids the cancellation by persuading a client who has just said they do not understand, which is coercion rather than consent. Option d does not work at all in law: a relative cannot consent for a competent adult, so a signature from the daughter records nothing of value.",
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
      { id: "a", text: "Tell the client to be strong for the children, because they will need their parent's courage now more than ever and breaking down in front of them will frighten them" },
      { id: "b", text: "Ask why the client has waited this long to tell the family, since an earlier conversation would have given the children more time to prepare and to ask questions" },
      { id: "c", text: "\"You are carrying a very heavy burden right now. Would you like to talk about what feels hardest about telling them?\"" },
      { id: "d", text: "Reassure the client that modern chemotherapy has made enormous advances and that many people with this diagnosis now live for years, so there is no need to worry yet" }
    ],
    correctChoiceId: "c",
    rationale: "Therapeutic communication acknowledges and validates the client's emotional distress while using open-ended reflection to invite further exploration at the client's own pace. Why the other options fail: option a imposes a duty to be strong and tells the client how to feel, which closes the conversation at the moment the client has opened it. Option b asks a 'why' question that carries blame, and the client has just said why: they have not told the children yet. Option d offers false reassurance about chemotherapy, which deflects from the grief the client is actually describing and answers a question that was not asked.",
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
    rationale: "Proper blood pressure cuff sizing requires the bladder width to be approximately 40% of the upper arm circumference and the bladder length to encircle at least 80% of the arm. Using a cuff that is too narrow or too small requires excessive pressure to occlude the brachial artery, resulting in a FALSELY HIGH blood pressure reading. Conversely, using a cuff that is too wide results in a falsely low reading; positioning the arm above heart level yields a falsely low reading; and positioning the arm below heart level yields a falsely high reading. Why the other options fail: option b produces a falsely LOW reading, because an oversized bladder transmits pressure to a wider length of artery and needs less cuff pressure to occlude it. Option c lowers the reading by removing the hydrostatic head between the arm and the heart. Option d is a real source of error and affects accuracy, but a fast deflation rate tends to underestimate rather than elevate the systolic value.",
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
      { id: "a", text: "A normal physiological variation caused by respiratory sinus arrhythmia, in which the radial rate rises on inspiration and falls on expiration in a healthy heart" },
      { id: "b", text: "A pulse deficit of 22 beats/minute, indicating that ineffective cardiac contractions fail to transmit peripheral arterial pressure waves" },
      { id: "c", text: "A measurement error, since a deficit of this size cannot occur in a conscious client, and both nurses should re-measure simultaneously over 15 seconds and average the two counts" },
      { id: "d", text: "An auscultatory gap indicating severe aortic stenosis, in which the narrowing of the valve reduces the peripheral pulse volume and produces a silent interval between phases" }
    ],
    correctChoiceId: "b",
    rationale: "A pulse deficit occurs when the apical heart rate exceeds the peripheral radial pulse rate (Apical rate - Radial rate = Pulse deficit: 104 - 82 = 22 bpm). It signifies that rapid, uncoordinated ventricular contractions (as in atrial fibrillation) pump insufficient stroke volumes to generate palpable peripheral pulse waves at the radial artery. It indicates hemodynamic compromise and inefficient cardiac output. Measurement must be performed by two clinicians simultaneously over a full 60 seconds using the same watch. Why the other options fail: option a describes sinus arrhythmia, in which the radial rate varies with breathing but remains equal to the apical rate; a 22-beat difference is not respiration. Option c dismisses a finding that is expected in atrial fibrillation and is the whole point of doing a simultaneous count. Option d misattributes the deficit to a valvular lesion, but a pulse deficit measures beats that did not eject a palpable stroke volume, not a silent interval between Korotkoff phases.",
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
    rationale: "Cheyne-Stokes respiration is an abnormal breathing pattern characterized by a rhythmic waxing and waning of tidal volume: a gradual increase in respiratory rate and depth, followed by a gradual decrease in depth, ending in a period of apnea (typically 15 to 30 seconds) before repeating. It is commonly observed in severe congestive heart failure, severe neurological injury (bilateral cortical or basal forebrain lesions), and near the end of life. Kussmaul breathing is deep, rapid, unvarying hyperventilation characteristic of metabolic acidosis (diabetic ketoacidosis). Biot's respirations are irregular periods of apnea alternating with disorganized breaths of identical depth. Why the other options fail: option a is deep, rapid and unvarying, without the crescendo or the apnoeic pause that the stem describes in detail. Option c alternates periods of apnoea with breaths of similar depth, not with a smooth waxing and waning pattern. Option d produces apnoea during sleep from upper airway collapse, but the breathing between events is normal rather than crescendo-decrescendo.",
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
    rationale: "Evidence-based fall prevention includes: placing the bed in its lowest position, locking bed wheels, keeping the call light and personal items within immediate reach, providing non-skid socks or shoes, ensuring adequate room lighting, and scheduling regular toileting assistance. Raising all four side rails is considered a physical restraint; in confused older adults, it significantly increases injury severity because clients attempt to climb over the elevated rails and fall from a greater height. Sedatives increase delirium, ataxia, and fall risk. Why the other options fail: option a is a restraint when all four rails are up, and in a confused older adult it raises the height of a fall as well as the risk of one. Option c treats a fall risk with a sedative that worsens delirium and ataxia, which is how a single fall becomes a fractured hip. Option d restrains a client whose only risk factor is falling, and restraints are neither indicated nor lawful for that purpose.",
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
      { id: "a", text: "Tie the restraint straps securely to the movable side rail using a square double knot, so that the rail moves with the client and the limb cannot be pulled against the bed" },
      { id: "b", text: "Assess neurovascular status and skin integrity every 30 minutes, release restraints every 2 hours for range of motion, and secure straps to the bed frame with a quick-release knot" },
      { id: "c", text: "Maintain the restraints continuously for 72 hours under a single as-needed order, renewed at the end of the period if the client is still attempting to remove the devices" },
      { id: "d", text: "Apply the restraints tightly enough that no fingers can be slipped under the cuff, since a restraint the client can work loose offers no protection against self-extubation" }
    ],
    correctChoiceId: "b",
    rationale: "Standards of care for physical restraints require: (1) Securing restraint straps to the movable bed frame (NEVER to side rails, as moving the rail causes limb traction and injury), (2) Using a quick-release knot (slip knot) to allow immediate release in an emergency (such as vomiting or cardiac arrest), (3) Ensuring two fingers can easily slide under the restraint cuff to prevent circulatory compromise, (4) Assessing neurovascular status (circulation, movement, sensation) and skin integrity every 15–30 minutes, and (5) Removing the restraints every 2 hours for skin assessment, toileting, and range-of-motion exercises. Restraint orders cannot be written PRN and must be re-evaluated every 24 hours. Why the other options fail: option a ties to a moving part, so raising or lowering the rail pulls the limb, and a square knot cannot be released in an emergency. Option c breaks two rules at once: restraint orders cannot be written as needed, and they cannot run for 72 hours without re-evaluation. Option d produces the circulatory and nerve injury the checks exist to prevent, and two fingers must always fit under the cuff.",
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
    rationale: "According to NPUAP/EPUAP staging guidelines: Stage 1 is non-blanchable erythema of intact skin; Stage 2 is partial-thickness skin loss with exposed dermis (or intact/ruptured serum-filled blister); Stage 3 is full-thickness skin loss in which adipose (subcutaneous fat) is visible, with granulation tissue, slough, or epibole (rolled edges), but NO bone, tendon, or muscle is exposed; Stage 4 involves full-thickness skin and tissue loss with exposed or directly palpable fascia, muscle, tendon, ligament, cartilage, or bone. Unstageable occurs when slough or eschar completely obscures the wound bed extent. Why the other options fail: option a describes intact skin with non-blanchable erythema and no loss of tissue. Option b is partial-thickness loss with exposed dermis, which does not reach fat. Option d requires exposed or directly palpable fascia, muscle, tendon, cartilage or bone, and the stem states that none of these is visible.",
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
      { id: "a", text: "Maintain the head of the bed at 90 degrees continuously, so that the client sits upright and the weight of the trunk falls through the ischial tuberosities rather than the sacrum" },
      { id: "b", text: "Reposition the client at least every 2 hours using a 30-degree lateral tilted position and maintain the head of the bed at or below 30 degrees when resting" },
      { id: "c", text: "Turn the client strictly onto the 90-degree lateral position with the weight resting directly on the greater trochanter, which is a broad bony surface better able to bear load" },
      { id: "d", text: "Massage the reddened bony prominences vigorously every four hours to stimulate capillary blood flow and disperse the metabolic waste that has accumulated in the ischaemic tissue" }
    ],
    correctChoiceId: "b",
    rationale: "To prevent pressure injuries and shear force, the head of the bed should be kept at or below 30 degrees (unless contraindicated by feeding or aspiration risk) because elevating the head higher causes gravitational sliding, generating intense shear stress on sacral capillaries. When repositioning sideways, the 30-degree lateral tilted position (supported with pillows under the back and between knees) is preferred over direct 90-degree lateral positioning, which places excessive pressure on the greater trochanter. Massaging reddened bony prominences is contraindicated because it damages fragile capillaries and accelerates deep tissue necrosis. Why the other options fail: option a converts body weight into shear across the sacrum and ischaemia at the ischial tuberosities, the two mechanisms the plan is meant to avoid. Option c puts the full weight on the greater trochanter, a small bony prominence poorly designed to bear it. Option d massages tissue that may already be damaged, rupturing capillaries and extending the injury into deeper layers.",
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
      { id: "a", text: "Position the wheelchair on the client's weak right side at a 90-degree angle, so that the client turns towards the paralysed side and brings it into use during the transfer" },
      { id: "b", text: "Position the wheelchair on the client's strong (left) side at a 45-degree angle, lock the wheelchair brakes, apply a gait belt, and instruct the client to pivot on the stronger leg" },
      { id: "c", text: "Lift the client upwards by pulling under both axillae while bending at the waist, which keeps the client's weight close to the nurse and shortens the distance to the chair" },
      { id: "d", text: "Keep the knees straight and twist the torso while transferring, so that the legs stay clear of the chair and the turning force is carried by the stronger trunk muscles" }
    ],
    correctChoiceId: "b",
    rationale: "Safe client transfer technique requires: (1) Placing the wheelchair on the client's STRONGER (unaffected) side facing the bed at a 45-degree angle so the client moves toward their functional side; (2) Locking the wheels of both the bed and wheelchair; (3) Using a transfer/gait belt around the client's waist; (4) Having the client pivot on the stronger foot; and (5) The nurse must maintain a wide base of support, bend at the knees and hips (not the waist), and pivot their own body rather than twisting the spine. Pulling under the axillae causes severe shoulder subluxation and brachial plexus trauma. Why the other options fail: option a brings the chair to the paralysed side, so the client must move away from their functional side and pivot on the weak leg. Option c pulls under the axillae, a recognised cause of brachial plexus injury and shoulder subluxation, and bends at the waist rather than the knees. Option d keeps the knees straight and twists the spine, the posture most associated with nursing back injury.",
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
    rationale: "Radiographic (X-ray) confirmation is the absolute gold standard to confirm proper tube tip positioning in the stomach prior to initiating the first enteral feed or medication. Auscultating air insufflation ('whoosh' test) is unreliable and dangerous because air sounds transmit clearly even when the tube is misplaced in the bronchus or pleural space. Placing the tube end in water ('bubble test') can cause pulmonary aspiration if the patient inhales. Once placement is radiographically verified, ongoing bedside verification before each feed is done by aspirating gastric secretions and testing pH (gastric aspirate pH is typically <= 5.5). Why the other options fail: option a is the whoosh test, which cannot distinguish gastric from bronchial or pleural placement because air transmits through all of them. Option c is the bubble test, which proves only that the tube is patent and risks aspiration. Option d is unreliable, since a tube in the oesophagus also allows normal speech, and a tube in the airway may present with cough only intermittently.",
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
    rationale: "CAUTI prevention guidelines dictate maintaining an uninterrupted sterile closed drainage system and keeping the collection bag continuously BELOW the level of the bladder (to prevent retrograde reflux of colonized urine) and suspended off the floor (to prevent contamination). Disconnecting the closed system for routine irrigation dramatically increases infection risk; specimens must be aspirated aseptically from the needleless sampling port (never by breaking the catheter-tubing junction); and meatal cleaning should be performed with standard soap and water, as topical antiseptics cause chemical irritation. Why the other options fail: option a breaks the closed system, which is the single strongest predictor of CAUTI, and routine irrigation is not indicated. Option c collects the specimen by opening the junction, which lets organisms in at exactly the point the sample is being taken. Option d applies an antiseptic that irritates the meatus; evidence supports plain soap and water rather than topical antimicrobials.",
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
      { id: "a", text: "Raise the enema container higher to speed the infusion to completion, since finishing quickly shortens the time the client has to endure the cramping and the urge to defecate" },
      { id: "b", text: "Stop the infusion temporarily by clamping the tubing or lowering the bag, instruct the client to take slow deep breaths, and resume at a slower rate once cramps subside" },
      { id: "c", text: "Remove the rectal tube immediately and assist the client to the commode, because cramping and fullness mean the solution has already reached the sigmoid colon and done its work" },
      { id: "d", text: "Tell the client to hold their breath and bear down through the discomfort, which splints the abdominal wall and helps the fluid to pass the point of resistance more quickly" }
    ],
    correctChoiceId: "b",
    rationale: "Abdominal cramping during an enema infusion is usually caused by intestinal distension from rapid fluid flow or cold solution. The nurse should immediately clamp the tubing or lower the container to halt or slow the flow, allowing the intestinal wall to adapt and the spasm to pass, while coaching the client to take slow, deep diaphragmatic breaths through the mouth. Once the cramping abates, the infusion can resume at a slower flow rate. Elevating the container increases flow rate and worsens cramping. Removing the tube prematurely prevents adequate administration. Why the other options fail: option a raises the flow rate and worsens the distension causing the cramp, which is the opposite of what the colon is signalling for. Option c removes the tube before the prescribed volume is delivered, so the enema is wasted and has to be repeated. Option d asks the client to bear down against a distended colon, which increases pressure and pain rather than relieving either.",
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
    rationale: "The Ventrogluteal site (gluteus medius and minimus) is the preferred, safest intramuscular site for adults: it is situated away from major blood vessels and the sciatic nerve, has a thick muscle belly, and accommodates volumes up to 3–4 mL. The Z-track technique is mandatory for irritating or staining medications (such as iron dextran) because pulling the skin and subcutaneous tissue 2.5–3.5 cm laterally before needle insertion creates a zigzag track when released, effectively sealing the medication deep within the muscle and preventing leakage into subcutaneous tissue. The dorsogluteal site is no longer recommended due to high risk of sciatic nerve injury. Why the other options fail: option a uses the site with the highest risk of sciatic nerve injury and omits the Z-track that an irritating preparation requires. Option c uses a 45-degree angle in the deltoid, which is too shallow for a 3 mL deep intramuscular dose and too small a muscle to take it. Option d pinches the skin for a deep intramuscular injection, which is a subcutaneous technique, and a darting injection of a viscous irritant increases tracking.",
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
      { id: "a", text: "Phlebitis; apply warm moist heat along the vein and increase the infusion rate to flush the irritant solution through the inflamed segment and dilute it in the general circulation" },
      { id: "b", text: "Infiltration; stop the infusion, remove the IV cannula immediately, elevate the extremity, and apply a cool or warm compress depending on the solution" },
      { id: "c", text: "Venous thrombosis; flush the catheter vigorously with 10 mL of normal saline to dislodge any clot at the tip and restore flow through the occluded segment of the vein" },
      { id: "d", text: "Local infection; apply antibacterial ointment over the insertion site and leave the cannula in place so that the antibiotic reaches the colonised tissue surrounding the tip" }
    ],
    correctChoiceId: "b",
    rationale: "Infiltration occurs when IV fluid leaks into surrounding subcutaneous tissue, characterized by COOLNESS to the touch, PALLOR, EDEMA/swelling, and sluggish infusion. The immediate nursing response: STOP the infusion immediately, REMOVE the IV cannula, ELEVATE the affected limb above heart level to promote fluid reabsorption, and apply a compress. In contrast, Phlebitis presents with ERYTHEMA, WARMTH, tenderness, and a palpable cord along the vein path. Flushing a sluggish line is dangerous as it dislodges clots or forces fluid deeper into tissues. Why the other options fail: option a describes phlebitis, which presents warm and red with a palpable cord rather than cool and pale, and increasing the rate worsens infiltration. Option c flushes a sluggish line, which forces fluid further into the tissue and can dislodge a clot. Option d treats a sterile fluid collection as an infection and leaves the offending cannula in place while the infiltration continues.",
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
    rationale: "The Venturi mask is a high-flow oxygen delivery system that uses calibrated color-coded jet adaptors to entrain a specific proportion of room air with oxygen, delivering an exact, precise fraction of inspired oxygen (FiO2 from 24% to 50%) regardless of the patient's respiratory rate or depth. This precision is critical in clients with chronic CO2 retention (severe COPD) whose hypoxic respiratory drive can be blunted by uncontrolled high-flow oxygen. Simple masks and nasal cannulae provide variable, unpredictable FiO2, while non-rebreather masks deliver high concentrations (80–95%). Why the other options fail: option a delivers a variable and unpredictable concentration that depends on the client's inspiratory flow. Option c delivers 80 to 95 per cent, far above the 88 to 92 per cent saturation target, and the reservoir bag needs a tight seal to work at all. Option d at 6 L per minute dries the mucosa, delivers an inexact fraction, and exceeds the low-flow range intended for a CO2 retainer.",
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
      { id: "b", text: "Irrigate the eyes daily with 50 mL of tap water to wash away the accumulating secretions, and leave the lids open afterwards so that the cornea can be inspected at each shift" },
      { id: "c", text: "Keep the eyelids propped open with gauze pads so that the pupils can be monitored hourly for the changes in size and reactivity that signal raised intracranial pressure" },
      { id: "d", text: "Apply dry sterile cotton gauze sponges directly onto the cornea and change them every two hours, so that the moisture that collects under the dressing keeps the surface wet" }
    ],
    correctChoiceId: "a",
    rationale: "Comatose clients often lose the protective corneal (blink) reflex and may have incomplete eyelid closure (lagophthalmos), leading to severe corneal drying, keratitis, and permanent corneal ulceration. The nurse must instill prescribed sterile lubricating eye drops or methylcellulose ointment every 2 to 4 hours and tape the eyelids gently closed across the orbital rim using hypo-allergenic paper tape, or apply moisture chambers. Tap water is non-sterile and irritating; dry gauze scratches the delicate corneal epithelium. Why the other options fail: option b uses non-sterile water on an unprotected cornea and the daily frequency is far too infrequent for a client who cannot blink. Option c removes the only protection the eye has, and corneal drying begins within minutes when the lids are held open. Option d puts dry gauze in direct contact with the epithelium, which abrades it and, once moistened, provides a warm surface for bacterial growth.",
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
      { id: "b", text: "Discard them, because dentures are personal property and the family will not expect to see them, and a poorly fitting set can obstruct the airway during the viewing" },
      { id: "c", text: "Send them to the mortuary separately and out of view, so that they travel with the body for the funeral director to fit at the funeral home before the family arrives" },
      { id: "d", text: "Leave them out and explain that this is hospital policy, since inserting a personal item into a body after death requires written consent from the next of kin" },
    ],
    correctChoiceId: "a",
    rationale: "Dentures are inserted before rigor mortis develops, because afterwards the jaw cannot be opened without force, and leaving them in restores the familiar appearance of the face for the family and reduces the visible change caused by death. They are personal property and should be accounted for, not discarded, and if they cannot be inserted they must be labelled and sent with the body. Sending them out of view removes something that belongs with the patient, and there is no policy that requires dentures to be left out. Why the other options fail: option b treats a personal possession as waste, and dentures that are not inserted must still be labelled and sent with the body. Option c separates them from the patient at the point where they are most useful, which is restoring the face the family recognises. Option d invents a consent requirement; inserting dentures is routine post-mortem care, not a procedure needing authorisation.",
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
      { id: "a", text: "Offer the visitor a glass of water and encourage them to take small sips, since the fluid will lubricate the pharynx and help the obstructing bolus to pass down into the stomach" },
      { id: "b", text: "Perform a blind finger sweep into the oropharynx immediately, because a bolus lodged at the level of the larynx can usually be hooked out before the victim loses consciousness" },
      { id: "c", text: "Stand behind the victim, lean them forward, deliver up to 5 firm back blows between the shoulder blades, followed by up to 5 abdominal thrusts (Heimlich maneuver), repeating until the object is expelled or the victim becomes unresponsive" },
      { id: "d", text: "Place the victim supine and begin rescue breathing immediately, since the obstruction is preventing oxygen from reaching the lungs and ventilation must be restored first" }
    ],
    correctChoiceId: "c",
    rationale: "For a responsive adult experiencing severe foreign body airway obstruction (unable to speak, cough, or breathe; clutching throat), standard first aid guidelines (ERC/AHA) recommend delivering up to 5 sharp back blows between the shoulder blades with the heel of the hand, followed by up to 5 abdominal thrusts (Heimlich maneuver: subdiaphragmatic inward and upward thrusts). Repeat this cycle until the object is relieved. If the victim becomes unresponsive, lower them safely to the floor and immediately begin CPR (30 compressions, then open airway and look for object before rescue breaths). Never perform blind finger sweeps (pushes object deeper). Why the other options fail: option a gives fluid to a person who cannot swallow, which adds aspiration to an existing obstruction. Option b is the blind finger sweep, which is no longer recommended because it can drive the object deeper and injure the pharynx. Option d attempts ventilation before relieving a mechanical obstruction, so the breath cannot reach the lungs and time is lost before compressions would be effective.",
    strategy: "Severe choking management: 5 Back blows -> 5 Abdominal thrusts (repeat). If patient goes unconscious -> Begin CPR (compressions first). NEVER do blind finger sweeps!",
    difficulty: "easy",
    tags: ["fundamentals", "first-aid", "choking", "heimlich-maneuver", "airway-obstruction"],
    isFree: false,
  },
];
