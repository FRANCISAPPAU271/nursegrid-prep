import type { GlossaryEntry } from "../types";

// Glossary — Nursing Procedures.
// Authored against this course's own lessons. Terms already defined in
// Fundamentals are carried across unchanged (aseptic technique, positioning,
// pressure injury, catheterisation) — a term has one definition, not one per
// course that mentions it. Where this course teaches something deeper than
// Fundamentals does, the deeper text lives here and Fundamentals points at it.

export const glossary: GlossaryEntry[] = [
  {
    term: "ANTT",
    alsoKnownAs: ["aseptic non-touch technique"],
    definition:
      "A single, standardised way of doing an aseptic procedure: identify the key parts and key sites, protect them from touch, and sequence the work so contamination cannot creep in. The point of a standard is that two nurses doing the same dressing do it the same way.",
    lesson: "anatomy-of-a-safe-procedure-identification-consent-asepsis-sharps-and-the-record",
  },
  {
    term: "Apical-radial pulse",
    definition:
      "Counting the pulse at the heart and the wrist at the same time, used when a rhythm is irregular or a drug such as digoxin is being started. A deficit between the two means some beats are too weak to reach the wrist, and the number recorded is the apical one.",
    lesson: "vital-signs-anthropometry-pain-and-neurological-observation-current-technique",
  },
  {
    term: "Bed bath",
    definition:
      "Washing a dependent patient in bed, done as much for assessment as for cleanliness — the skin, the pressure areas and the patient's mood are all seen during it, which is why it is not delegated without thought.",
    lesson: "admission-transfer-discharge-and-bed-making-procedures",
  },
  {
    term: "Bladder scan",
    alsoKnownAs: ["ultrasound bladder volume"],
    definition:
      "A bedside ultrasound estimate of how much urine is in the bladder, used to confirm retention before a catheter is passed and to check residual volume after a trial without catheter. It replaces guessing from symptoms, and it saves the patient a catheter when there is nothing to drain.",
    lesson: "urinary-elimination-procedures-bedpans-catheterisation-catheter-care-removal-and-bladder-irrigation",
  },
  {
    term: "Blood culture",
    definition:
      "A blood sample taken into bottles that allow organisms to grow, used to find the cause of a systemic infection. The skin must be cleaned and allowed to dry first, and the sample taken before antibiotics — a culture taken after the first dose usually grows nothing.",
    lesson: "specimen-collection-point-of-care-testing-and-the-twelve-lead-ecg",
  },
  {
    term: "CAUTI bundle",
    alsoKnownAs: ["catheter-associated urinary tract infection bundle"],
    definition:
      "The set of practices that keep a catheter from causing infection: insert only when indicated, use aseptic technique, keep the bag below bladder level, never break the closed system, and remove it as soon as it is no longer needed. The single most effective element is that last one.",
    lesson: "urinary-elimination-procedures-bedpans-catheterisation-catheter-care-removal-and-bladder-irrigation",
  },
  {
    term: "Closed suction",
    alsoKnownAs: ["closed suction system", "in-line catheter"],
    definition:
      "A suction catheter enclosed in a sleeve attached to the airway, used repeatedly without disconnecting the patient from the ventilator. It keeps the circuit closed and the pressure stable, which matters most in a patient who cannot tolerate a broken circuit.",
    lesson: "oxygen-therapy-airway-adjuncts-suctioning-tracheostomy-care-chest-drains-and-chest-physiotherapy-procedures",
  },
  {
    term: "Colostomy",
    definition:
      "A stoma formed from the colon, producing formed stool and requiring a pouch that is emptied rather than drained continuously. It is distinguished from an ileostomy, which produces liquid effluent and needs more careful fluid and salt monitoring.",
    lesson: "bowel-procedures-enemas-suppositories-digital-evacuation-flatus-tube-stoma-care-and-diarrhoea",
  },
  {
    term: "Digital rectal examination",
    alsoKnownAs: ["DRE", "PR examination"],
    definition:
      "Examining the rectum with a gloved finger to feel for faecal loading, impaction, blood or a mass. It is a procedure with consent, privacy and lubrication, not an incidental part of turning a patient.",
    lesson: "bowel-procedures-enemas-suppositories-digital-evacuation-flatus-tube-stoma-care-and-diarrhoea",
  },
  {
    term: "Discharge against medical advice",
    definition:
      "The patient leaving before the team considers it safe, which is their right once they have capacity. The nurse's task is to make sure they understand the risk, offer what can be offered, and record that the conversation happened.",
    lesson: "admission-transfer-discharge-and-bed-making-procedures",
  },
  {
    term: "Doffing order",
    alsoKnownAs: ["PPE removal order"],
    definition:
      "The sequence for removing personal protective equipment so that nothing contaminated touches the skin: gloves first, then gown, then eye protection, then mask — with hand hygiene between each and at the end. The commonly skipped step is the hand hygiene after the mask.",
    lesson: "anatomy-of-a-safe-procedure-identification-consent-asepsis-sharps-and-the-record",
  },
  {
    term: "Donning order",
    definition:
      "The sequence for putting protective equipment on: gown, mask, eye protection, then gloves last so that the glove cuffs overlap the gown. It is the mirror of the removal order, and getting one wrong is how a clean procedure becomes a contaminated one.",
    lesson: "anatomy-of-a-safe-procedure-identification-consent-asepsis-sharps-and-the-record",
  },
  {
    term: "Early warning score",
    alsoKnownAs: ["NEWS", "MEWS", "EWS"],
    definition:
      "A number calculated from routine observations — respiratory rate, oxygen saturation, temperature, blood pressure, pulse and conscious level — that rises as a patient deteriorates. The score exists so that escalation is triggered by a number rather than by a nurse noticing something she cannot name.",
    lesson: "vital-signs-anthropometry-pain-and-neurological-observation-current-technique",
  },
  {
    term: "Enema",
    definition:
      "Liquid introduced into the rectum to soften stool, stimulate movement or empty the bowel. It is given at body temperature, slowly, at a height that does not force it, and with the patient positioned on the left side so it follows the curve of the colon.",
    lesson: "bowel-procedures-enemas-suppositories-digital-evacuation-flatus-tube-stoma-care-and-diarrhoea",
  },
  {
    term: "Flatus tube",
    alsoKnownAs: ["rectal tube"],
    definition:
      "A tube passed into the rectum to release trapped gas, used when a patient is distended and uncomfortable. It relieves the symptom but changes nothing about the cause, so a repeated need for it is a finding to report rather than a routine to repeat.",
    lesson: "bowel-procedures-enemas-suppositories-digital-evacuation-flatus-tube-stoma-care-and-diarrhoea",
  },
  {
    term: "Fluid balance chart",
    definition:
      "The 24-hour record of everything taken in and everything lost, with insensible loss from skin and lungs allowed for rather than measured. It is only as good as the recording: an unmeasured drink or an unrecorded vomit turns the chart into fiction.",
    lesson: "feeding-the-swallow-screen-nasogastric-and-gastrostomy-tubes-parenteral-nutrition-and-fluid-balance",
  },
  {
    term: "Gastrostomy",
    definition:
      "A tube placed directly through the abdominal wall into the stomach for feeding, used when long-term feeding is needed and the swallowing route is unsafe. The stoma site needs daily inspection, and the tube is flushed before and after every use.",
    lesson: "feeding-the-swallow-screen-nasogastric-and-gastrostomy-tubes-parenteral-nutrition-and-fluid-balance",
  },
  {
    term: "Heimlich manoeuvre",
    definition:
      "Abdominal thrusts to clear a complete airway obstruction in a conscious adult. It is not used in an infant, where back blows and chest thrusts are used instead, and not in a late pregnancy, where chest thrusts replace it.",
    lesson: "emergency-procedures-basic-life-support-with-an-aed-choking-anaphylaxis-and-first-aid-for-burns-bleeding-snakebite-seizures-and-poisoning",
  },
  {
    term: "Infiltration",
    definition:
      "Fluid leaking from a cannula into the tissue around the vein, producing a cool, pale, swollen area and tightness. The infusion is stopped at once, the cannula removed, and the limb observed — the fluid does not belong there.",
    lesson: "peripheral-cannulation-intravenous-infusions-and-drugs-infusion-arithmetic-and-blood-transfusion",
  },
  {
    term: "Intermittent self-catheterisation",
    alsoKnownAs: ["ISC"],
    definition:
      "The patient passing a catheter to empty the bladder several times a day and then removing it, rather than keeping one in place. It gives independence and avoids the constant infection risk of an indwelling catheter, and it is the option most patients can be taught.",
    lesson: "urinary-elimination-procedures-bedpans-catheterisation-catheter-care-removal-and-bladder-irrigation",
  },
  {
    term: "Last offices",
    definition:
      "The care given to a body after death: washing, closing the eyes and mouth, removing tubes and lines as policy allows, and identifying the body correctly. It is done with the same dignity as care in life, and cultural and religious wishes are honoured where practicable.",
    lesson: "care-of-the-dying-person-verification-of-death-last-offices-and-the-nursing-record-confidentiality-and-accountability",
  },
  {
    term: "Nasogastric tube confirmation",
    definition:
      "Proving a nasogastric tube is in the stomach before anything is put down it — by testing the aspirate with pH paper (below 5.5) or by radiography. Auscultating a whoosh of injected air is not confirmation and has killed patients; it is not used for any tube used for feeding.",
    lesson: "feeding-the-swallow-screen-nasogastric-and-gastrostomy-tubes-parenteral-nutrition-and-fluid-balance",
  },
  {
    term: "Order of draw",
    definition:
      "The sequence in which blood tubes are filled during venepuncture, set to prevent additive from one tube contaminating the next. Getting it wrong produces results that look real and are wrong, and the error is invisible once the blood has clotted.",
    lesson: "specimen-collection-point-of-care-testing-and-the-twelve-lead-ecg",
  },
  {
    term: "Phlebitis",
    definition:
      "Inflammation of the vein from a cannula, scored by redness, pain, swelling and a palpable cord. It is a reason to remove and re-site the cannula, not to slow the infusion.",
    lesson: "peripheral-cannulation-intravenous-infusions-and-drugs-infusion-arithmetic-and-blood-transfusion",
  },
  {
    term: "Pin site care",
    definition:
      "Cleaning around the wire of an external fixator or a skeletal traction pin, which passes through the skin into bone. Infection travels down the pin to bone, so the site is inspected every shift and any crusting, redness or discharge is reported.",
    lesson: "assisting-with-lumbar-puncture-paracentesis-pleural-aspiration-bone-marrow-and-minor-surgery-and-orthopaedic-nursing-of-fractures-and-traction",
  },
  {
    term: "Positioning for lumbar puncture",
    definition:
      "Lying the patient on the side with the back curved and the chin to the chest, so the spaces between the vertebrae open. Getting it right matters because a failed first attempt means a second needle; keeping still afterwards matters because it reduces the headache that follows.",
    lesson: "assisting-with-lumbar-puncture-paracentesis-pleural-aspiration-bone-marrow-and-minor-surgery-and-orthopaedic-nursing-of-fractures-and-traction",
  },
  {
    term: "Postural drainage",
    definition:
      "Positioning the patient so gravity moves secretions from a particular part of the lung toward the airway, where they can be coughed or suctioned out. The position is chosen from the lobe involved, and it is tiring — so it is timed around meals, not after them.",
    lesson: "oxygen-therapy-airway-adjuncts-suctioning-tracheostomy-care-chest-drains-and-chest-physiotherapy-procedures",
  },
  {
    term: "Recovery handover",
    definition:
      "The structured transfer from theatre or recovery to the ward: procedure performed, anaesthetic, drugs given, blood loss, fluids, drains and lines, and what the ward nurse must watch for in the next hour. Written, and given face to face, not remembered.",
    lesson: "pre-operative-preparation-theatre-checklist-sterile-supplies-recovery-handover-and-post-operative-care-procedures",
  },
  {
    term: "Restraint",
    definition:
      "Any method that stops a patient moving freely, and a last resort with a strict legal and ethical limit. It is considered only when every less restrictive option has failed, for the shortest time, with observation and documentation throughout.",
    lesson: "positioning-safer-moving-walking-aids-falls-restraint-and-heat-and-cold-applications",
  },
  {
    term: "Sharps injury",
    definition:
      "A puncture from a needle or blade, which transmits blood-borne infection. The response is immediate: wash, encourage bleeding, report and start post-exposure prophylaxis assessment within hours — and never recap a needle by hand, which is how most of them happen.",
    lesson: "anatomy-of-a-safe-procedure-identification-consent-asepsis-sharps-and-the-record",
  },
  {
    term: "Skin prep",
    definition:
      "Cleaning the skin before an invasive procedure with the correct agent, in the correct expanding circles, and allowing it to dry. The drying time is part of the antisepsis — a wet skin surface carries bacteria that the alcohol has not yet killed.",
    lesson: "pre-operative-preparation-theatre-checklist-sterile-supplies-recovery-handover-and-post-operative-care-procedures",
  },
  {
    term: "Snakebite first aid",
    definition:
      "Immobilise the limb, keep the patient still and get to hospital — no tourniquet, no incision, no sucking. Antivenom is the treatment, and the time taken to reach it determines the outcome.",
    lesson: "emergency-procedures-basic-life-support-with-an-aed-choking-anaphylaxis-and-first-aid-for-burns-bleeding-snakebite-seizures-and-poisoning",
  },
  {
    term: "SSKIN bundle",
    alsoKnownAs: ["SSKIN"],
    definition:
      "The five checks that prevent a pressure injury: Surface (the right support), Skin inspection, Keep moving, Incontinence and nutrition, and Note and escalate. It turns prevention into a checklist a night shift can actually complete.",
    lesson: "hygiene-procedures-bed-bath-perineal-oral-eye-ear-hair-nail-and-pressure-area-care",
  },
  {
    term: "Sterile field",
    definition:
      "The area of a sterile drape on which sterile items may be placed and used. It is contaminated by touch, by a non-sterile item, by fluid striking it, or by the nurse turning away from it — and once contaminated, it stays contaminated.",
    lesson: "wound-assessment-aseptic-dressing-technique-dressing-selection-suture-and-staple-removal-surgical-drains-and-casts",
  },
  {
    term: "Swallow screen",
    definition:
      "A bedside assessment of whether a patient can swallow safely before oral intake is started, looking at alertness, voice, tongue movement, cough and handling of saliva or water. It exists to prevent aspiration in a patient after stroke or prolonged intubation.",
    lesson: "feeding-the-swallow-screen-nasogastric-and-gastrostomy-tubes-parenteral-nutrition-and-fluid-balance",
  },
  {
    term: "Three checks of medicine administration",
    definition:
      "Checking the medicine against the prescription when it is taken from storage, again when it is prepared, and again at the bedside. Each check is a separate chance to catch a different mistake.",
    lesson: "medicine-administration-by-every-route-rights-oral-topical-eye-ear-nasal-inhaled-rectal-vaginal-and-injections",
  },
  {
    term: "Transdermal patch",
    definition:
      "A patch that delivers drug through the skin over hours or days. The old patch is removed before the new one goes on, the site is rotated, and the date is written on it — a double dose from two patches is easy to create.",
    lesson: "medicine-administration-by-every-route-rights-oral-topical-eye-ear-nasal-inhaled-rectal-vaginal-and-injections",
  },
  {
    term: "Trial without catheter",
    alsoKnownAs: ["TWOC"],
    definition:
      "Removing an indwelling catheter and measuring what the patient passes, to see whether normal voiding has returned. It is a planned test with a volume measurement and a bladder scan afterwards — not simply taking the catheter out and hoping.",
    lesson: "urinary-elimination-procedures-bedpans-catheterisation-catheter-care-removal-and-bladder-irrigation",
  },
  {
    term: "Underwater seal drain",
    alsoKnownAs: ["chest drain", "intercostal drain"],
    definition:
      "A chest tube whose end sits under water, letting air escape from the pleural space but not let back in. It must stay upright and below the chest, must never be clamped during a check by habit, and continuous bubbling in the water seal suggests a leak.",
    lesson: "oxygen-therapy-airway-adjuncts-suctioning-tracheostomy-care-chest-drains-and-chest-physiotherapy-procedures",
  },
  {
    term: "Verification of death",
    definition:
      "The formal confirmation that a person has died: no response, no breath sounds for a defined period, no central pulse, fixed pupils. It is a clinical procedure with a record, distinct from certifying the cause of death, which is the doctor's task.",
    lesson: "care-of-the-dying-person-verification-of-death-last-offices-and-the-nursing-record-confidentiality-and-accountability",
  },
  {
    term: "Walking aid fitting",
    definition:
      "Matching a stick, frame or crutch to the patient's height so the hand grips at the level of the wrist crease. A badly fitted aid shifts weight wrongly and causes falls and nerve pressure in the armpit.",
    lesson: "positioning-safer-moving-walking-aids-falls-restraint-and-heat-and-cold-applications",
  },
];
