import type { GlossaryEntry } from "../types";

// Glossary — Respiratory Nursing.
// Authored against this course's own lessons.

export const glossary: GlossaryEntry[] = [
  {
    term: "Acidosis",
    definition:
      "An arterial pH below 7.35. It is respiratory when carbon dioxide is being retained and metabolic when bicarbonate is being lost or acid gained; the two can coexist, and compensation is never complete.",
    lesson: "acid-base-imbalances-and-nursing-care",
  },
  {
    term: "Alkalosis",
    definition:
      "An arterial pH above 7.45. Respiratory alkalosis comes from breathing too fast and blowing off carbon dioxide; metabolic alkalosis from losing acid, usually through prolonged vomiting.",
    lesson: "acid-base-imbalances-and-nursing-care",
  },
  {
    term: "Anaphylaxis",
    definition:
      "A severe systemic allergic reaction with airway swelling, bronchospasm and a falling blood pressure. Adrenaline into the outer thigh is the treatment and is given before anything else; antihistamines and steroids are not a substitute and act too slowly.",
    lesson: "respiratory-failure-choking-and-anaphylaxis",
  },
  {
    term: "Arterial blood gas",
    alsoKnownAs: ["ABG"],
    definition:
      "A blood sample taken from an artery that reports pH, carbon dioxide, oxygen, bicarbonate and base excess together. It is interpreted as a set — the pH says whether the patient is acidotic, and the carbon dioxide and bicarbonate say which system is responsible.",
    lesson: "arterial-blood-gas-interpretation",
  },
  {
    term: "Asthma",
    definition:
      "Reversible narrowing of the airways from inflammation and bronchospasm, producing wheeze, cough and breathlessness that varies over time. A silent chest in an attack is a warning, not an improvement — it means too little air is moving to make a sound.",
    lesson: "asthma",
  },
  {
    term: "Base excess",
    definition:
      "The amount of acid or base needed to return a blood sample to normal pH, reported in mmol/L. A negative base excess indicates a metabolic acidosis and is often easier to see than the bicarbonate alone.",
    lesson: "arterial-blood-gas-interpretation",
  },
  {
    term: "Bronchodilator",
    definition:
      "A drug that relaxes the muscle around the airways, widening them within minutes — salbutamol being the familiar example. It relieves the tightness of an attack but does nothing to the underlying inflammation, which is why the inhaled steroid is the drug that keeps the patient out of hospital.",
    lesson: "respiratory-drugs-and-safe-monitoring",
  },
  {
    term: "Chronic obstructive pulmonary disease",
    alsoKnownAs: ["COPD"],
    definition:
      "Persistent airflow obstruction that is not fully reversible, from emphysema, chronic bronchitis or both, usually after years of smoke exposure. The lungs are damaged rather than inflamed alone, so the aim is to slow decline and manage exacerbations, not to restore normal function.",
    lesson: "copd",
  },
  {
    term: "Compensation",
    definition:
      "The body's attempt to correct an acid-base disturbance — faster breathing to blow off carbon dioxide, or the kidney retaining bicarbonate. It limits the change but does not remove the cause, so a compensated result is still an abnormal one.",
    lesson: "abg-drill-mixed-disorders-and-traps",
  },
  {
    term: "Compliance",
    definition:
      "How easily the lung inflates for a given change in pressure. Stiff lungs with low compliance — fibrosis, pulmonary oedema — need far more effort to breathe, which is why such patients tire quickly and why exhaustion is a danger sign.",
    lesson: "respiratory-anatomy-and-physiology",
  },
  {
    term: "Continuous positive airway pressure",
    alsoKnownAs: ["CPAP"],
    definition:
      "Delivering a steady pressure to keep the airways and air sacs open throughout the breath. It is used in obstructive sleep apnoea and in some breathless patients, and the mask fit matters as much as the pressure setting.",
    lesson: "oxygen-therapy-and-delivery-devices",
  },
  {
    term: "Dead space",
    definition:
      "The part of each breath that fills the conducting airways and never reaches an air sac, so it takes no part in gas exchange. Anything that increases dead space — a long tube between mask and patient, for instance — makes the patient work harder for the same oxygen.",
    lesson: "respiratory-anatomy-and-physiology",
  },
  {
    term: "FiO2",
    alsoKnownAs: ["fraction of inspired oxygen"],
    definition:
      "The percentage of oxygen in the air a patient is breathing, written as a decimal or a percentage — room air is 0.21. Every oxygen device delivers a particular FiO2 range, and the range is part of the prescription.",
    lesson: "oxygen-therapy-and-delivery-devices",
  },
  {
    term: "Haemoptysis",
    definition:
      "Coughing up blood from the respiratory tract, which ranges from streaked sputum to frank bleeding. In a smoker with weight loss it demands investigation for lung cancer, and massive haemoptysis is an airway emergency.",
    lesson: "lung-cancer",
  },
  {
    term: "Hypercapnia",
    definition:
      "Too much carbon dioxide in the arterial blood, from inadequate ventilation rather than inadequate oxygen. It produces headache, drowsiness, a flushed face and a bounding pulse, and it is the finding that distinguishes type 2 respiratory failure.",
    lesson: "respiratory-failure-choking-and-anaphylaxis",
  },
  {
    term: "Hypoxaemia",
    definition:
      "Low oxygen in the arterial blood, as distinct from hypoxia, which is inadequate oxygen reaching the tissues. It is measured by PaO2 on a blood gas; pulse oximetry is a bedside estimate and can be misleading.",
    lesson: "focused-respiratory-assessment",
  },
  {
    term: "Nasal cannula",
    alsoKnownAs: ["nasal prongs"],
    definition:
      "The simplest oxygen device: two prongs into the nostrils delivering a low, variable fraction of oxygen, roughly 24 to 44 per cent. It is comfortable and lets the patient eat and speak, but it delivers less than a mask at the same flow.",
    lesson: "oxygen-therapy-and-delivery-devices",
  },
  {
    term: "Non-rebreather mask",
    definition:
      "A mask with a reservoir bag that delivers the highest concentration of oxygen short of intubation, close to 90 to 100 per cent. The bag must be inflated before it is placed on the patient, or the first breath is of room air.",
    lesson: "oxygen-therapy-and-delivery-devices",
  },
  {
    term: "Oxygen toxicity",
    definition:
      "Lung damage caused by breathing a high concentration of oxygen for too long. It is the reason oxygen is prescribed to a target saturation rather than given as much as possible, and why the target range is documented.",
    lesson: "oxygen-therapy-and-delivery-devices",
  },
  {
    term: "Pleural effusion",
    definition:
      "Fluid collecting between the lung and the chest wall, which compresses the lung and dulls the base on examination. A large one is drained, and the fluid is sent for analysis rather than simply discarded.",
    lesson: "pleural-disorders-and-chest-drains",
  },
  {
    term: "Pneumonia",
    definition:
      "Infection of the lung tissue itself, with fever, cough, purulent sputum and focal signs on examination. The respiratory rate is the most useful measure of severity at the bedside, and a rising rate is a reason to escalate rather than wait.",
    lesson: "pneumonia",
  },
  {
    term: "Pneumothorax",
    definition:
      "Air in the pleural space, which collapses the lung and produces sudden breathlessness and pleuritic pain. A tension pneumothorax additionally shifts the mediastinum, drops the blood pressure and kills quickly unless the pressure is released.",
    lesson: "pulmonary-embolism-and-pneumothorax",
  },
  {
    term: "Pulmonary embolism",
    alsoKnownAs: ["PE"],
    definition:
      "A clot lodging in the pulmonary circulation, producing sudden breathlessness, chest pain and hypoxia, often with a clear chest on examination. A normal chest X-ray in a very breathless patient is the finding that should raise the suspicion.",
    lesson: "pulmonary-embolism-and-pneumothorax",
  },
  {
    term: "Respiratory failure",
    definition:
      "Failure of the lungs to keep the arterial gases normal. Type 1 is low oxygen alone with a normal or low carbon dioxide; type 2 is low oxygen with a raised carbon dioxide, and needs ventilatory support rather than oxygen alone.",
    lesson: "respiratory-failure-choking-and-anaphylaxis",
  },
  {
    term: "Respiratory rate",
    definition:
      "Breaths per minute, counted over a full minute because the rate is irregular and often missed in a fifteen-second count. It is the earliest and most sensitive indicator of a deteriorating patient, and the observation most often estimated instead of measured.",
    lesson: "recognising-respiratory-deterioration",
  },
  {
    term: "Shunt",
    definition:
      "Blood that passes through the lung without picking up oxygen, because the air sacs it should have reached are collapsed or filled with fluid. It is the reason a severely consolidated patient does not improve much when extra oxygen is added.",
    lesson: "respiratory-anatomy-and-physiology",
  },
  {
    term: "Silent chest",
    definition:
      "An asthmatic patient who is no longer wheezing because too little air is moving to make a sound. It signals a life-threatening attack and is treated as an emergency — it is the opposite of improvement.",
    lesson: "asthma",
  },
  {
    term: "Spacer",
    alsoKnownAs: ["valved holding chamber"],
    definition:
      "A chamber between a metered-dose inhaler and the mouth that holds the aerosol long enough to be breathed in slowly. It improves how much medicine reaches the lung and reduces throat deposition, and in an acute attack it is as effective as a nebuliser.",
    lesson: "asthma",
  },
  {
    term: "Spirometry",
    definition:
      "A breathing test measuring how much air a patient can force out and how quickly, used to confirm obstruction and to see whether it reverses after a bronchodilator. Reversibility is what separates asthma from COPD.",
    lesson: "focused-respiratory-assessment",
  },
  {
    term: "Suctioning",
    definition:
      "Clearing secretions from an airway with negative pressure, applied only as the catheter is withdrawn and only for as long as necessary. Prolonged suction removes oxygen as well as secretions and damages the mucosa, so it is done on indication, not on a timetable.",
    lesson: "airway-clearance-suctioning-and-tracheostomy-care",
  },
  {
    term: "Target oxygen saturation",
    definition:
      "The range a patient's oxygen saturation should be kept within, written on the prescription — commonly 94 to 98 per cent for most patients, and 88 to 92 per cent for those at risk of carbon dioxide retention. Without a target, oxygen becomes a drug given without a dose.",
    lesson: "oxygen-therapy-and-delivery-devices",
  },
  {
    term: "Tension pneumothorax",
    definition:
      "Air trapped in the pleural space that cannot escape, pushing the heart and great vessels aside. The signs are severe breathlessness, a falling blood pressure, distended neck veins and tracheal deviation; it is relieved before any X-ray is taken.",
    lesson: "pulmonary-embolism-and-pneumothorax",
  },
  {
    term: "Tracheostomy",
    definition:
      "An artificial opening into the trachea to bypass an obstruction or support prolonged ventilation. Its emergencies are a blocked tube and a tube that comes out, and both are managed from the equipment kept at the bedside.",
    lesson: "airway-clearance-suctioning-and-tracheostomy-care",
  },
  {
    term: "Tuberculosis",
    alsoKnownAs: ["TB"],
    definition:
      "Infection with Mycobacterium tuberculosis, spread by droplet nuclei from a patient with pulmonary disease. Diagnosis rests on sputum testing and treatment is prolonged and must be completed; stopping early is how resistance is made.",
    lesson: "tuberculosis",
  },
  {
    term: "Ventilation-perfusion mismatch",
    alsoKnownAs: ["V/Q mismatch"],
    definition:
      "Air reaching parts of the lung that have no blood flow, or blood flowing through parts that have no air. It is the commonest mechanism of low oxygen in lung disease, and the reason some hypoxia responds to oxygen while shunt does not.",
    lesson: "respiratory-anatomy-and-physiology",
  },
  {
    term: "Venturi mask",
    definition:
      "A mask with a colour-coded jet that entrains a fixed, predictable fraction of oxygen regardless of the patient's breathing pattern. It is chosen when a precise concentration matters, particularly in a patient who retains carbon dioxide.",
    lesson: "oxygen-therapy-and-delivery-devices",
  },
];
