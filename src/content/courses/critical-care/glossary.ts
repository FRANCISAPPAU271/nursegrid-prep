import type { GlossaryEntry } from "../types";

// Glossary — Critical Care Nursing.
// Authored against this course's own lessons. Shock, ABG and life support are
// taught in the Emergency course as well; where they meet, the wording here
// matches it rather than competing with it.

export const glossary: GlossaryEntry[] = [
  {
    term: "Acute kidney injury",
    definition:
      "A sudden fall in kidney filtration, recognised from a rising creatinine or a falling urine output, common in critical illness. The nurse's contribution is measuring the output hourly, guarding the patient's volume state, and stopping nephrotoxic drugs.",
    lesson: "renal-metabolic-and-gastrointestinal-crises",
  },
  {
    term: "Acute respiratory distress syndrome",
    alsoKnownAs: ["ARDS"],
    definition:
      "Diffuse inflammatory injury to the lungs making them stiff and waterlogged, so oxygen cannot cross into the blood. It is recognised by a rapid onset, low oxygen despite oxygen therapy, and bilateral shadowing not explained by the heart — and it is ventilated gently, because the treatment itself can damage the lung.",
    lesson: "acute-respiratory-failure-ards-asthma-copd-pneumonia-and-chest-drains",
  },
  {
    term: "Airway pressure",
    definition:
      "The pressure the ventilator applies to move gas into the lung, watched because too much of it damages the lung and too little fails to ventilate. Peak and plateau values are read together, since the gap between them shows resistance.",
    lesson: "oxygenation-and-mechanical-ventilation-in-depth",
  },
  {
    term: "Anion gap",
    definition:
      "The difference between measured cations and measured anions, used to spot a metabolic acidosis caused by an acid rather than by bicarbonate loss. It is the calculation that separates a ketone or lactate acidosis from diarrhoea.",
    lesson: "arterial-blood-gas-interpretation-for-the-critical-care-nurse",
  },
  {
    term: "Arterial line",
    alsoKnownAs: ["arterial catheter"],
    definition:
      "A catheter in an artery giving continuous blood pressure and easy access to arterial blood for gases. It is more accurate than a cuff in a shocked patient and lets the waveform show the response to a fluid bolus, but it is an invasive line with its own risks of bleeding and infection.",
    lesson: "haemodynamic-monitoring-and-vasoactive-drugs",
  },
  {
    term: "Central venous catheter",
    alsoKnownAs: ["central line", "CVC"],
    definition:
      "A line whose tip sits in a large vein near the heart, used for vasoactive drugs, concentrated solutions and central venous pressure measurement. It carries a real infection risk, so its insertion and daily care are governed by a bundle rather than by habit.",
    lesson: "icu-procedures-devices-and-safe-transport",
  },
  {
    term: "Delirium",
    definition:
      "An acute, fluctuating disturbance of attention and awareness, common in the ICU and often the only sign that a patient is hypoxic, in pain, in retention or withdrawing from alcohol. It is not dementia, and treating it as such stops the search for a cause.",
    lesson: "neurocritical-care-brain-injury-stroke-seizures-neuromuscular-failure-and-delirium",
  },
  {
    term: "Driving pressure",
    definition:
      "The difference between the pressure at the top of a breath and the pressure at the end of it, reflecting how hard the ventilator is stretching the lung. It is the number most closely tied to ventilator-induced lung injury, which is why small breaths matter more than large pressures.",
    lesson: "oxygenation-and-mechanical-ventilation-in-depth",
  },
  {
    term: "Early goal-directed therapy",
    definition:
      "A resuscitation approach that targets specific endpoints — blood pressure, urine output, and markers of perfusion — within defined time limits rather than waiting for a general impression to improve. Its modern form keeps the speed and drops the invasive monitoring that was not shown to help.",
    lesson: "sepsis-and-life-threatening-infections-in-the-icu",
  },
  {
    term: "Extubation",
    definition:
      "Removing a breathing tube once the patient can breathe and protect their own airway. It is a planned assessment — conscious level, cough strength, secretions, oxygen requirement after a trial of breathing — not simply a decision that the patient looks ready.",
    lesson: "oxygenation-and-mechanical-ventilation-in-depth",
  },
  {
    term: "Fluid responsiveness",
    definition:
      "Whether the patient's output will actually improve if more fluid is given. Giving fluid to a patient who is not fluid responsive adds oedema and not perfusion, so the question is asked before each bolus rather than after.",
    lesson: "fluid-and-electrolyte-emergencies-in-the-critically-ill",
  },
  {
    term: "Haemodynamic monitoring",
    definition:
      "Watching the circulation closely enough to know whether the patient is perfusing — blood pressure, heart rate, urine output and, where available, central venous pressure, cardiac output or a waveform. The purpose is to see a trend early, not to collect numbers.",
    lesson: "haemodynamic-monitoring-and-vasoactive-drugs",
  },
  {
    term: "Hour-one bundle",
    definition:
      "The set of actions to be completed within the first hour of recognising sepsis: measure lactate, take blood cultures, give broad-spectrum antibiotics, give fluids for hypotension or a high lactate, and start a vasopressor if the pressure does not respond. Each hour of delay raises mortality.",
    lesson: "sepsis-and-life-threatening-infections-in-the-icu",
  },
  {
    term: "Intracranial pressure",
    alsoKnownAs: ["ICP"],
    definition:
      "The pressure inside the skull, normally under about 15 mmHg. Because the skull is a closed box, anything added — blood, swelling, cerebrospinal fluid — raises it and reduces blood flow to the brain; the signs are a falling conscious level, a rising blood pressure with a slow pulse, and unequal pupils.",
    lesson: "neurocritical-care-brain-injury-stroke-seizures-neuromuscular-failure-and-delirium",
  },
  {
    term: "Levels of critical care",
    definition:
      "The accepted division of critical care by intensity — level 1 for enhanced observation, 2 for one failing organ, 3 for multiple organ support or invasive ventilation. It determines staffing, and the bed a patient is admitted to should match the need.",
    lesson: "critical-care-nursing-in-ghana-and-the-systematic-icu-assessment",
  },
  {
    term: "Maternal collapse",
    definition:
      "Sudden loss of consciousness and circulation in a pregnant or recently pregnant woman, from haemorrhage, embolism, sepsis, eclampsia or the heart. Resuscitation follows the usual sequence with the uterus displaced to the left, because a pregnant uterus compresses the inferior vena cava and blocks the return of blood.",
    lesson: "paediatric-and-obstetric-critical-care",
  },
  {
    term: "Mean arterial pressure",
    alsoKnownAs: ["MAP"],
    definition:
      "The average pressure driving blood through the tissues over the whole cardiac cycle, approximated as diastolic plus one third of the pulse pressure. It is the number resuscitation is aimed at, because organs are perfused by the mean rather than the peak — about 65 mmHg is the usual floor.",
    lesson: "haemodynamic-monitoring-and-vasoactive-drugs",
  },
  {
    term: "Mechanical ventilation",
    definition:
      "Supporting or replacing the patient's breathing with a machine. It buys time for the underlying problem to be treated, but it also removes the patient's own cough and humidification, so sedation, position, mouth care and weaning are active nursing work rather than waiting.",
    lesson: "oxygenation-and-mechanical-ventilation-in-depth",
  },
  {
    term: "Non-invasive ventilation",
    alsoKnownAs: ["NIV", "BiPAP", "CPAP"],
    definition:
      "Supporting breathing through a tight-fitting mask rather than a tube, used in a conscious patient who can protect their own airway. It avoids the complications of intubation but fails if the mask leaks, if the patient fights it, or if it is started too late.",
    lesson: "oxygenation-and-mechanical-ventilation-in-depth",
  },
  {
    term: "PaO2 and FiO2 ratio",
    definition:
      "The arterial oxygen divided by the fraction of inspired oxygen, used to grade how severely the lung is failing to transfer oxygen. A low ratio on a high FiO2 is a failing lung, and the trend matters more than a single value.",
    lesson: "arterial-blood-gas-interpretation-for-the-critical-care-nurse",
  },
  {
    term: "Post-intensive care syndrome",
    alsoKnownAs: ["PICS"],
    definition:
      "The lasting problems survivors carry after critical illness: weakness, poor memory and concentration, anxiety, and reduced function for months or years. It is why sedation is kept light, why patients are mobilised early, and why follow-up matters after discharge.",
    lesson: "end-of-life-care-ethics-and-quality-in-the-icu",
  },
  {
    term: "Prone positioning",
    definition:
      "Turning a ventilated patient face down, which improves oxygen uptake in ARDS by recruiting the parts of the lung that were compressed by the heart and abdomen. It is done as a planned manoeuvre with a team and a checklist, because of the risk to the airway and the lines.",
    lesson: "acute-respiratory-failure-ards-asthma-copd-pneumonia-and-chest-drains",
  },
  {
    term: "Sedation holiday",
    alsoKnownAs: ["daily sedation interruption"],
    definition:
      "Deliberately lightening sedation each day to see whether the patient can breathe and interact without it. It shortens time on the ventilator and reduces delirium, and it is safe only with a plan for what to do if the patient does not tolerate it.",
    lesson: "oxygenation-and-mechanical-ventilation-in-depth",
  },
  {
    term: "Sepsis",
    definition:
      "Life-threatening organ dysfunction caused by a dysregulated response to infection. It is a medical emergency in which the first hour matters most — cultures, antibiotics, fluids and oxygen begin before the diagnosis is confirmed.",
    lesson: "sepsis-and-life-threatening-infections-in-the-icu",
  },
  {
    term: "Status epilepticus",
    definition:
      "A seizure lasting more than five minutes, or repeated seizures without recovery between. It is a medical emergency because the brain is being deprived of oxygen and glucose; time the seizure and call for help rather than waiting to see.",
    lesson: "neurocritical-care-brain-injury-stroke-seizures-neuromuscular-failure-and-delirium",
  },
  {
    term: "Tamponade",
    alsoKnownAs: ["cardiac tamponade"],
    definition:
      "Fluid in the pericardium compressing the heart so it cannot fill, producing a falling blood pressure, distended neck veins and muffled heart sounds. It is relieved by draining the fluid, and no amount of fluid given to the patient will fix it.",
    lesson: "acute-coronary-syndromes-heart-failure-and-cardiac-emergencies-in-the-icu",
  },
  {
    term: "Tertiary survey",
    definition:
      "A second, systematic head-to-toe examination in trauma, done after the immediate threats are treated, to find the injuries that were missed the first time. Injuries hide behind more obvious ones, so the survey is repeated rather than assumed.",
    lesson: "major-trauma-massive-haemorrhage-and-the-burns-icu",
  },
  {
    term: "Third space loss",
    definition:
      "Fluid that has moved out of the circulation into tissue that no longer functions, as in bowel obstruction, burns or major trauma. It is invisible on the fluid balance chart and shows instead as a falling urine output and a rising pulse despite adequate intake.",
    lesson: "fluid-and-electrolyte-emergencies-in-the-critically-ill",
  },
  {
    term: "Toxidrome",
    definition:
      "A recognisable pattern of signs pointing to a class of poison — for example the anticholinergic picture of dry skin, dilated pupils, agitation and retention. Identifying the toxidrome guides treatment before any drug level returns.",
    lesson: "toxicology-and-environmental-critical-care",
  },
  {
    term: "Vasoactive drug",
    definition:
      "A drug that alters the diameter of blood vessels or the force of the heart — noradrenaline, adrenaline, dobutamine and others. These are given through a central line wherever possible, never stopped abruptly, and titrated against a pressure target with the patient being watched, not the pump.",
    lesson: "haemodynamic-monitoring-and-vasoactive-drugs",
  },
  {
    term: "Ventilator-associated pneumonia",
    alsoKnownAs: ["VAP"],
    definition:
      "Pneumonia developing after more than two days of ventilation, from secretions pooling above the cuff and running down into the lung. It is prevented by keeping the head up, doing mouth care, managing secretions and daily assessment of whether the tube is still needed.",
    lesson: "oxygenation-and-mechanical-ventilation-in-depth",
  },
  {
    term: "Weight-based dosing",
    definition:
      "Calculating a child's drug dose from body weight rather than scaling an adult dose down. The arithmetic is checked by a second person, because in paediatrics a decimal error is a large multiple of the intended dose rather than a small one.",
    lesson: "paediatric-and-obstetric-critical-care",
  },
  {
    term: "Withdrawal of treatment",
    definition:
      "Stopping an intervention that is not achieving the goals the patient would accept, while continuing comfort care. It is an ethical decision made with the family and the team, recorded, and communicated to every shift — it is never the same thing as stopping care.",
    lesson: "end-of-life-care-ethics-and-quality-in-the-icu",
  },
];
