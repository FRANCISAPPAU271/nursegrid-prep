import type { AuthoredQuestion } from "./authored-bank";

export const CC_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-CC-001",
    categorySlug: "med-surg",
    stem: "The charge nurse in an 8-bed Intensive Care Unit (ICU) has only one available bed remaining. Four requests for admission are received simultaneously from the emergency department and inpatient floors. Which patient should the charge nurse prioritize for immediate ICU admission?",
    choices: [
      {
        id: "a",
        text: "A 48-year-old patient with severe sepsis, blood pressure 82/46 mmHg despite 2 L crystalloid resuscitation, and serum lactate 4.8 mmol/L",
      },
      {
        id: "b",
        text: "An 82-year-old patient with metastatic lung cancer admitted with somnolence and comfort measures only requested by family",
      },
      {
        id: "c",
        text: "A 24-year-old alert patient with an isolated non-displaced radial fracture awaiting surgical pin placement",
      },
      {
        id: "d",
        text: "A 62-year-old patient 48 hours post-elective uncomplicated hip arthroplasty with mild postoperative pain",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "ICU triage prioritizes critically ill patients with acute, reversible organ dysfunction who derive the greatest survival benefit from invasive monitoring and continuous titration of life-sustaining therapy (Priority 1). The 48-year-old patient is in septic shock refractory to initial fluid boluses with elevated lactate and urgently requires continuous vasopressor infusion and central venous/arterial line monitoring. Comfort-care patients are managed in palliative units; non-displaced fractures and uncomplicated post-op patients do not meet critical care admission criteria. Why the other options fail: option b has comfort measures only requested, which makes this a palliative admission rather than a critical care one. Option c has an isolated non-displaced fracture and is waiting for a minor procedure, which is ward care. Option d is 48 hours after an uncomplicated arthroplasty with mild pain, which is routine postoperative ward care.",
    strategy: "Triage prioritization: Target reversible acute physiological collapse (septic shock) over futile terminal illness or non-critical stable conditions.",
    difficulty: "medium",
    tags: ["critical-care", "triage", "prioritization", "septic-shock", "icu-admission"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-002",
    categorySlug: "safety-infection-control",
    stem: "During night shift in the intensive care unit, a nurse notices frequent false pulse oximetry alarms sounding for a restless patient with peripheral vasoconstriction, leading to alarm fatigue on the unit. Which action by the nurse is most appropriate?",
    choices: [
      {
        id: "a",
        text: "Silence the audible alarm permanently to prevent disturbing other patients on the unit",
      },
      {
        id: "b",
        text: "Relocate the sensor to the forehead or earlobe and individualise alarm limits within orders",
      },
      {
        id: "c",
        text: "Set the low SpO2 alarm threshold to 70% so the alarm will only trigger during true catastrophic desaturations",
      },
      {
        id: "d",
        text: "Discontinue continuous pulse oximetry monitoring entirely since the patient is awake and restless",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Mitigating alarm fatigue without compromising patient safety requires addressing technical causes of artifact and individualizing alarm limits based on the patient's baseline. In vasoconstricted or hypoperfused patients, digits often produce weak plethysmographic signals; moving the sensor to a centrally perfused site (forehead or earlobe) improves accuracy. Permanently silencing alarms or dropping thresholds below safe limits (such as 70%) violates patient safety standards and risks undetected hypoxic arrest. Why the other options fail: option a removes the alarm altogether, and with it the safety net. Option c sets the threshold at 70%, which permits profound hypoxaemia before anything sounds. Option d abandons monitoring on a patient whose restlessness may itself be hypoxia.",
    strategy: "Alarm fatigue: Address signal artifacts at the sensor source (central vs peripheral site) rather than disabling safety thresholds.",
    difficulty: "medium",
    tags: ["critical-care", "alarm-fatigue", "pulse-oximetry", "patient-safety", "monitoring"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-003",
    categorySlug: "med-surg",
    stem: "A 64-year-old patient with acute exacerbation of chronic obstructive pulmonary disease (COPD) has the following arterial blood gas (ABG) results on 2 L/min nasal cannula: pH 7.23, PaCO2 70 mmHg, PaO2 54 mmHg, HCO3- 26 mEq/L, and SaO2 84%. How should the critical care nurse interpret this ABG?",
    choices: [
      {
        id: "a",
        text: "Fully compensated metabolic alkalosis with hypercapnia",
      },
      {
        id: "b",
        text: "Partially compensated respiratory alkalosis with hypoxaemia",
      },
      {
        id: "c",
        text: "Uncompensated metabolic acidosis with compensatory hypoventilation",
      },
      {
        id: "d",
        text: "Uncompensated respiratory acidosis with severe hypoxaemia",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "A pH of 7.23 is acidic (normal 7.35–7.45). The PaCO2 of 70 mmHg is markedly elevated (normal 35–45 mmHg), which explains the acidaemia, confirming a respiratory cause. The serum bicarbonate (HCO3-) of 26 mEq/L is within normal limits (22–26 mEq/L), demonstrating that renal compensation has not yet occurred (uncompensated). PaO2 of 54 mmHg represents acute hypoxaemic failure. The patient requires immediate escalation (e.g., non-invasive positive pressure ventilation such as BiPAP or invasive mechanical ventilation). Why the other options fail: option a pairs a raised bicarbonate with a raised CO2, which is the compensation pattern of metabolic alkalosis, not an acute respiratory acidosis. Option b has a pH above 7.45. Option c makes bicarbonate the primary abnormality, but here the bicarbonate is normal at 26 and the CO2 is the problem.",
    strategy: "ABG analysis: pH < 7.35 (acidosis) + high PaCO2 matches acidosis (respiratory) + normal HCO3 (uncompensated).",
    difficulty: "easy",
    tags: ["critical-care", "abg", "respiratory-acidosis", "copd", "blood-gas"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-004",
    categorySlug: "fluid-electrolyte",
    stem: "A 28-year-old patient in the ICU is being treated for diabetic ketoacidosis (DKA). Arterial blood gas analysis reveals: pH 7.28, PaCO2 29 mmHg, PaO2 96 mmHg, and HCO3- 13 mEq/L. The patient exhibits deep, rapid respirations (Kussmaul breathing). Which interpretation and clinical understanding should guide the nurse's evaluation?",
    choices: [
      {
        id: "a",
        text: "Uncompensated respiratory acidosis; tachypnoea indicates imminent respiratory muscle failure requiring immediate paralytic intubation",
      },
      {
        id: "b",
        text: "Fully compensated metabolic acidosis; the low bicarbonate has restored blood pH to the physiological reference range",
      },
      {
        id: "c",
        text: "Partially compensated metabolic acidosis; hyperventilation is a physiological compensatory mechanism to blow off carbon dioxide",
      },
      {
        id: "d",
        text: "Primary respiratory alkalosis caused by acute hyperventilation syndrome",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The pH is 7.28 (acidic), and HCO3- is 13 mEq/L (markedly low), indicating primary metabolic acidosis from ketoacid accumulation. The PaCO2 is 29 mmHg (low, normal 35–45 mmHg), showing that the respiratory system is attempting to compensate by blowing off volatile acid (Kussmaul respirations). Because the pH has not fully normalized, this represents partially compensated metabolic acidosis. Kussmaul breathing is an appropriate protective compensatory response and should not be suppressed. Why the other options fail: option a mistakes the primary disorder, because the bicarbonate of 13 identifies the metabolic process and the CO2 is falling to compensate. Option b calls it fully compensated, but the pH is still 7.28. Option d puts the pH on the wrong side of 7.35 and ignores the bicarbonate.",
    strategy: "DKA compensation: Low HCO3 matches low pH (metabolic acidosis); low PaCO2 shows active respiratory blowing off of acid.",
    difficulty: "medium",
    tags: ["critical-care", "dka", "metabolic-acidosis", "kussmaul", "abg"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-005",
    categorySlug: "med-surg",
    stem: "A critical care nurse performs a passive leg raise (PLR) challenge to evaluate dynamic fluid responsiveness in a mechanically ventilated patient with septic shock. Which haemodynamic finding indicates that the patient will benefit from an additional IV crystalloid bolus?",
    choices: [
      {
        id: "a",
        text: "An immediate drop in mean arterial pressure (MAP) accompanied by reflex bradycardia",
      },
      {
        id: "b",
        text: "A marked rise in central venous pressure (CVP) with no change in pulse contour stroke volume",
      },
      {
        id: "c",
        text: "A rise in cardiac output or stroke volume of at least 10% to 15% during leg elevation",
      },
      {
        id: "d",
        text: "An increase in systemic vascular resistance (SVR) of greater than 30%",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Passive leg raising (PLR) shifts approximately 300 mL of venous blood from the lower extremities to the intrathoracic compartment, acting as a reversible 'autologous fluid bolus'. A transient increase in stroke volume or cardiac output of >= 10–15% within 60–90 seconds confirms preload responsiveness on the Frank-Starling curve, demonstrating that administering additional crystalloids will improve perfusion without precipitating pulmonary edema. Unchanged stroke volume despite elevated filling pressures indicates non-responsiveness. Why the other options fail: option a describes a fall in pressure with bradycardia, which is a vagal response, not a preload response. Option b describes a rise in filling pressure without a rise in stroke volume, which is the pattern of a patient who will not respond. Option d describes a rise in resistance, which is the afterload effect of a vasopressor, not the effect of raising the legs.",
    strategy: "Dynamic fluid responsiveness: Look for an increase in stroke volume/cardiac output >= 10-15% during reversible autotransfusion (PLR).",
    difficulty: "hard",
    tags: ["critical-care", "haemodynamics", "passive-leg-raise", "fluid-responsiveness", "shock"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-006",
    categorySlug: "med-surg",
    stem: "The ICU nurse notes that a patient's radial arterial line monitor display shows an overdamped arterial waveform (flattened dicrotic notch, falsely low systolic and falsely high diastolic pressures). After ensuring the pressure bag is inflated to 300 mmHg, which step should the nurse perform next?",
    choices: [
      {
        id: "a",
        text: "Immediately discontinue the arterial catheter without physician consultation",
      },
      {
        id: "b",
        text: "Re-zero the transducer while holding it at the level of the patient's ear",
      },
      {
        id: "c",
        text: "Administer a rapid bolus of 500 mL normal saline through the arterial catheter",
      },
      {
        id: "d",
        text: "Check the tubing for air bubbles, clots, or kinks and perform a fast-flush square-wave test",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Overdamping of an arterial line is commonly caused by compliance dampeners such as air bubbles in the transducer tubing, blood clots at the catheter tip, loose connections, or anatomical kinks. The nurse should inspect the entire pressure tubing system, eliminate microbubbles, check catheter position, and execute a fast-flush (square-wave) test to evaluate dynamic system response. Fluids and medications must NEVER be bolused through an arterial line due to severe risk of limb ischaemia and arterial thrombosis. Why the other options fail: option a removes the line and the monitoring with it, before the cause is found. Option b zeroes the transducer at the wrong reference, which must be the phlebostatic axis at the level of the right atrium. Option c injects fluid into an artery, which risks limb ischaemia and is never done through an arterial line.",
    strategy: "Arterial line troubleshooting: Overdamping = bubbles/clots/kinks. Inspect tubing and run square-wave test; NEVER bolus through an A-line.",
    difficulty: "medium",
    tags: ["critical-care", "arterial-line", "haemodynamics", "monitoring", "square-wave"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-007",
    categorySlug: "pharmacology-parenteral",
    stem: "A patient in refractory septic shock is receiving norepinephrine via a peripheral 20-gauge IV cannula in the forearm while awaiting central line placement. The nurse inspects the site and observes pallor, severe coldness, swelling, and firm induration around the insertion site. What is the nurse's immediate priority action?",
    choices: [
      {
        id: "a",
        text: "Stop the infusion, leave the cannula to aspirate residual drug, and prepare phentolamine for local infiltration",
      },
      {
        id: "b",
        text: "Increase the infusion rate to clear the peripheral vein and apply ice packs tightly over the forearm",
      },
      {
        id: "c",
        text: "Immediately pull out the cannula and apply firm direct manual pressure over the site for 15 minutes",
      },
      {
        id: "d",
        text: "Flush the line vigorously with 20 mL of sterile water to dilute the vasopressor in local tissues",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Norepinephrine is a potent alpha-1 adrenergic agonist; peripheral extravasation causes intense local vasoconstriction leading to ischaemic tissue necrosis and gangrene. Immediate management: stop the infusion, leave the catheter in place to aspirate any residual vesicant, notify the provider, and administer the specific antidote phentolamine mesylate (an alpha-adrenergic antagonist) subcutaneously in a circle around the extravasated area to reverse vasoconstriction. Ice and vigorous flushing are contraindicated. Why the other options fail: option b increases the infusion of the vesicant and adds ice, which worsens vasoconstriction and necrosis. Option c removes the only route for aspirating the drug before it is absorbed. Option d dilutes with sterile water, which is not the antidote and adds volume to the injured tissue.",
    strategy: "Vasopressor extravasation: Stop immediately, do NOT pull catheter before aspirating, inject phentolamine (alpha-blocker) antidote.",
    difficulty: "hard",
    tags: ["critical-care", "norepinephrine", "extravasation", "phentolamine", "vasopressors"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-008",
    categorySlug: "pharmacology-parenteral",
    stem: "A patient with cardiogenic shock secondary to acute myocardial infarction is started on a continuous intravenous infusion of dobutamine at 5 mcg/kg/min. Which adverse effect should the critical care nurse monitor for most closely during titration?",
    choices: [
      {
        id: "a",
        text: "Severe peripheral vasoconstriction and cold digits from alpha-1 receptor activation",
      },
      {
        id: "b",
        text: "Significant bradycardia with complete heart block and asystole",
      },
      {
        id: "c",
        text: "Hypoglycaemia with metabolic alkalosis and hypokalaemia",
      },
      {
        id: "d",
        text: "Ventricular tachyarrhythmias and tachycardia from beta-1 stimulation",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Dobutamine is a synthetic inotrope with predominantly beta-1 adrenergic receptor agonist activity (and mild beta-2 and alpha-1 activity). By augmenting myocardial contractility and AV nodal conduction, it increases myocardial oxygen consumption and can provoke sinus tachycardia, premature ventricular contractions (PVCs), and ventricular tachyarrhythmias. Continuous cardiac rhythm monitoring and blood pressure surveillance are mandatory. Why the other options fail: option a describes the effect of norepinephrine, an alpha agonist, not dobutamine. Option b describes a beta-blocker or a vagal effect, and dobutamine raises the heart rate. Option c describes neither the receptor profile nor the metabolic effect of a beta-1 agonist, which raises glucose rather than lowering it.",
    strategy: "Inotrope pharmacology: Beta-1 agonists (dobutamine) increase contractility but carry high arrhythmogenic risk (tachycardia, PVCs, VT).",
    difficulty: "medium",
    tags: ["critical-care", "dobutamine", "inotropes", "cardiogenic-shock", "dysrhythmias"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-009",
    categorySlug: "med-surg",
    stem: "A mechanically ventilated patient with acute respiratory failure suddenly triggers the high peak inspiratory pressure alarm. The ventilator waveform indicates elevated airway resistance. What sequence of actions should the critical care nurse perform first?",
    choices: [
      {
        id: "a",
        text: "Silence the alarm and raise the high-pressure limit to 80 cmH2O so the set volume is delivered",
      },
      {
        id: "b",
        text: "Give a double dose of neuromuscular blocker without performing a physical assessment",
      },
      {
        id: "c",
        text: "Extubate at the bedside immediately and place a non-rebreather mask",
      },
      {
        id: "d",
        text: "Assess chest rise, check for tube biting or secretions, auscultate, then bag-ventilate if distress persists",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "When a high-pressure ventilator alarm triggers, the nurse first assesses the patient (DOPE mnemonic: Dislodgement, Obstruction, Pneumothorax, Equipment). Common causes of high peak pressure include airway secretions (needing suctioning), patient biting the tube (needing a bite block), tubing kink, bronchospasm, or tension pneumothorax. If the cause is not immediately identifiable or the patient deteriorates, the nurse must immediately disconnect the patient from the ventilator and manually ventilate with 100% O2 via bag-valve-mask to assess lung compliance and maintain oxygenation. Why the other options fail: option a silences the alarm and raises the limit, which lets the ventilator push against an obstruction and cause barotrauma. Option b paralyses a patient who may have a blocked tube, which removes the only sign of distress. Option c extubates a patient who may still need the tube, without finding out why the pressure rose.",
    strategy: "Ventilator emergencies: Check patient first (DOPE: tube biting, secretions, pneumothorax). If distress continues, disconnect and manually bag with 100% O2.",
    difficulty: "medium",
    tags: ["critical-care", "mechanical-ventilation", "high-pressure-alarm", "airway", "dope"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-010",
    categorySlug: "med-surg",
    stem: "A 56-year-old patient with severe acute respiratory distress syndrome (ARDS) from viral pneumonia is intubated in the ICU. Which ventilator strategy is established as lung-protective ventilation to reduce mortality in ARDS?",
    choices: [
      {
        id: "a",
        text: "High tidal volumes of 12-15 mL/kg to re-expand collapsed alveoli and keep PaCO2 below 30 mmHg",
      },
      {
        id: "b",
        text: "Zero end-expiratory pressure to prevent barotrauma and right ventricular strain",
      },
      {
        id: "c",
        text: "Low tidal volumes of 4-6 mL/kg of predicted body weight, plateau pressure at or below 30 cmH2O, titrated PEEP",
      },
      {
        id: "d",
        text: "Hyperventilation to induce a respiratory alkalosis with a target pH above 7.55",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The ARDSNet protocol establishes that lung-protective ventilation utilizing low tidal volumes (4–8 mL/kg, targeting 6 mL/kg of predicted/ideal body weight) and keeping inspiratory plateau pressures <= 30 cmH2O significantly reduces mortality by mitigating ventilator-induced lung injury (volutrauma, barotrauma, biotrauma). PEEP is titrated to maintain alveolar recruitment and prevent atelectotrauma. Permissive hypercapnia is tolerated as long as severe acidaemia (pH < 7.15–7.20) is avoided. Why the other options fail: option a uses high tidal volumes, the strategy that causes volutrauma and the one ARDSNet abandoned. Option b removes PEEP, which lets the recruited alveoli collapse again with every breath. Option d targets an alkalosis that is not a goal, because permissive hypercapnia is accepted instead.",
    strategy: "ARDSNet standard: 6 mL/kg ideal body weight + plateau pressure <= 30 cmH2O + permissive hypercapnia to protect fragile lung tissue.",
    difficulty: "medium",
    tags: ["critical-care", "ards", "lung-protective-ventilation", "peep", "mechanical-ventilation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-011",
    categorySlug: "med-surg",
    stem: "The ICU team conducts a daily spontaneous breathing trial (SBT) for an intubated patient. Five minutes into the trial on T-piece with 40% FiO2, the patient develops a respiratory rate of 38 breaths/min, oxygen saturation falls to 86%, heart rate rises from 82 to 124 beats/min, and intercostal retractions are noted. Which action should the nurse take?",
    choices: [
      {
        id: "a",
        text: "Continue the trial for the full 30 minutes because transient tachypnoea is expected during weaning",
      },
      {
        id: "b",
        text: "Stop the trial, return to the previous ventilator settings, reassure the patient, and look for the cause",
      },
      {
        id: "c",
        text: "Give 10 mg of intravenous morphine to calm the patient and continue the trial",
      },
      {
        id: "d",
        text: "Extubate the patient straight to non-invasive positive pressure ventilation",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Criteria for failing a spontaneous breathing trial (SBT) include tachypnoea (respiratory rate > 35 breaths/min for >= 5 min), hypoxaemia (SpO2 < 88–90%), tachycardia (HR > 120 or >= 20% increase), accessory muscle use/paradoxical abdominal breathing, diaphoresis, and acute agitation or somnolence. The nurse must terminate the trial immediately, reconnect the patient to full ventilator support, provide reassurance, and investigate reversible causes (e.g., fatigue, secretions, bronchospasm, anxiety, electrolyte imbalances) before reattempting the next day. Why the other options fail: option a continues a trial that is failing, which exhausts the patient and delays the return to support. Option c sedates the respiratory distress instead of treating it and masks the failure. Option d extubates a patient who has just failed the test of breathing without the tube.",
    strategy: "Weaning safety: RR > 35, SpO2 < 90%, HR > 120, or retractions = abort SBT immediately and restore full resting support.",
    difficulty: "medium",
    tags: ["critical-care", "weaning", "spontaneous-breathing-trial", "mechanical-ventilation", "extubation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-012",
    categorySlug: "med-surg",
    stem: "A patient with severe traumatic brain injury has an intraparenchymal catheter displaying an intracranial pressure (ICP) of 22 mmHg. The arterial line displays a blood pressure of 106/58 mmHg (mean arterial pressure, MAP = 74 mmHg). What is the calculated cerebral perfusion pressure (CPP), and what clinical action is indicated?",
    choices: [
      {
        id: "a",
        text: "CPP is 96 mmHg; the nurse should administer an antihypertensive agent to prevent cerebral hyperperfusion",
      },
      {
        id: "b",
        text: "CPP is 52 mmHg; the nurse should notify the physician because CPP is below the target threshold of 60 to 70 mmHg",
      },
      {
        id: "c",
        text: "CPP is 74 mmHg; the nurse should document that perfusion is optimal and maintain current management",
      },
      {
        id: "d",
        text: "CPP is 22 mmHg; the nurse should hyperventilate the patient to a PaCO2 of 20 mmHg",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Cerebral Perfusion Pressure is calculated as MAP minus ICP (CPP = MAP - ICP). Here, CPP = 74 mmHg - 22 mmHg = 52 mmHg. Evidence-based neurocritical care guidelines (Brain Trauma Foundation) recommend maintaining CPP between 60 and 70 mmHg to prevent secondary ischaemic brain injury. A CPP of 52 mmHg with elevated ICP (> 20 mmHg) requires immediate intervention, which may include titrating vasopressors to elevate MAP, administering hyperosmolar therapy (hypertonic saline or mannitol), and maintaining head-of-bed elevation. Why the other options fail: option a adds rather than subtracts, and 74 plus 22 is not a CPP of 96. Option c reports the MAP as if it were the CPP. Option d subtracts in the wrong order and hyperventilates to a CO2 of 20, which reduces cerebral blood flow further.",
    strategy: "CPP formula: CPP = MAP - ICP. Target CPP is 60-70 mmHg; < 60 leads to secondary cerebral ischaemia.",
    difficulty: "medium",
    tags: ["critical-care", "neurology", "cpp", "icp", "traumatic-brain-injury"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-013",
    categorySlug: "med-surg",
    stem: "An adult patient is admitted from the emergency department with suspected septic shock: temperature 39.2 °C, heart rate 128 beats/min, blood pressure 84/42 mmHg, and respiratory rate 26 breaths/min. According to the Surviving Sepsis Campaign 1-Hour Bundle, which set of interventions must be initiated within 60 minutes of recognition?",
    choices: [
      {
        id: "a",
        text: "Give high-dose dexamethasone, wait 4 hours for urine cultures, and fluid-restrict to prevent pulmonary oedema",
      },
      {
        id: "b",
        text: "Give a 500 mL fluid challenge over two hours and reassess before starting antibiotics",
      },
      {
        id: "c",
        text: "Measure lactate, obtain cultures before antibiotics, give broad-spectrum IV antibiotics, then 30 mL/kg crystalloid",
      },
      {
        id: "d",
        text: "Give norepinephrine first and defer all fluids until the central line is in place",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The Surviving Sepsis Campaign 1-Hour Bundle mandates five key actions initiated immediately upon recognizing sepsis/septic shock: (1) measure serum lactate (remeasure within 2–4 hours if elevated), (2) obtain blood cultures prior to administering antimicrobials, (3) administer broad-spectrum IV antimicrobials, (4) begin rapid administration of 30 mL/kg IV crystalloids for hypotension (MAP < 65) or lactate >= 4 mmol/L, and (5) apply vasopressors (norepinephrine first-line) if fluid resuscitation does not restore MAP >= 65 mmHg. Why the other options fail: option a delays antibiotics for cultures already drawn, gives steroids to every septic patient, and restricts fluid in one who needs it. Option b delays the antibiotics and gives a fraction of the 30 mL/kg that the bundle requires. Option d starts a vasopressor before the fluid bolus and waits on a line.",
    strategy: "Surviving Sepsis 1-Hour Bundle: Lactate + blood cultures BEFORE antibiotics + broad-spectrum IV antibiotics + 30 mL/kg crystalloids.",
    difficulty: "medium",
    tags: ["critical-care", "septic-shock", "surviving-sepsis", "lactate", "bundle"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-014",
    categorySlug: "med-surg",
    stem: "A patient with acute kidney injury and fluid overload in the ICU is receiving Continuous Veno-Venous Haemofiltration (CVVH). The dialysis machine alarm sounds, displaying an elevated Transmembrane Pressure (TMP) and rising filter pressure drop. What does this finding indicate to the critical care nurse?",
    choices: [
      {
        id: "a",
        text: "A significant air embolism entering the arterial access catheter",
      },
      {
        id: "b",
        text: "Impending clotting of the haemofilter, needing a circuit check and possible filter change",
      },
      {
        id: "c",
        text: "Excessive systemic hypocoagulation with risk of major haemorrhage",
      },
      {
        id: "d",
        text: "Patient hypovolaemia requiring an immediate 1-litre saline bolus through the access line",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Transmembrane Pressure (TMP) represents the hydrostatic pressure difference across the semipermeable haemofilter membrane. A steadily rising TMP combined with an increasing filter pressure drop indicates protein layering and microthrombus formation within the hollow fibers (impending filter clotting). The nurse should assess the circuit, check anticoagulation delivery (e.g., regional citrate or heparin), and prepare to change the circuit if clotting progresses to avoid losing blood sequestered in a clotted filter. Why the other options fail: option a would show as a pressure drop with an air alarm, not a rising transmembrane pressure. Option c describes systemic coagulopathy, which is a bleeding risk in the patient and is not read from filter pressures. Option d describes hypovolaemia, which lowers the pressures rather than raising the TMP.",
    strategy: "CRRT alarms: Elevated TMP and rising filter pressure drop indicate circuit/filter clotting.",
    difficulty: "hard",
    tags: ["critical-care", "crrt", "cvvh", "transmembrane-pressure", "acute-kidney-injury"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-015",
    categorySlug: "pharmacology-parenteral",
    stem: "A patient with septic shock remains hypotensive (MAP 58 mmHg) despite receiving 4 L of balanced crystalloids, norepinephrine at 0.35 mcg/kg/min, and vasopressin at 0.03 units/min. What is the clinical rationale when the intensivist orders intravenous hydrocortisone 200 mg/day continuous infusion?",
    choices: [
      {
        id: "a",
        text: "To sterilise the bloodstream directly and replace broad-spectrum antimicrobial therapy",
      },
      {
        id: "b",
        text: "To rapidly lower blood glucose and promote an osmotic diuresis",
      },
      {
        id: "c",
        text: "To induce systemic sedation and lower cerebral metabolic demand",
      },
      {
        id: "d",
        text: "To reverse vasopressor-refractory shock caused by critical illness-related steroid insufficiency",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "In septic shock refractory to fluid resuscitation and escalating doses of vasopressors (norepinephrine >= 0.25 mcg/kg/min plus vasopressin), Surviving Sepsis guidelines recommend intravenous hydrocortisone at 200 mg per day. Critical illness-related corticosteroid insufficiency (CIRCI) and down-regulated vascular adrenergic receptors are common in severe sepsis. Low-dose hydrocortisone restores vascular tone, upregulates alpha-1 adrenergic receptors, and accelerates shock reversal without inducing immunosuppressive harm. Why the other options fail: option a gives hydrocortisone a sterilising role it does not have, and it never replaces antibiotics. Option b describes insulin, not hydrocortisone. Option c describes sedation, which is the opposite of what a patient in refractory shock needs.",
    strategy: "Refractory shock: IV hydrocortisone (200 mg/day) treats CIRCI and restores vascular responsiveness to catecholamines.",
    difficulty: "medium",
    tags: ["critical-care", "hydrocortisone", "septic-shock", "circi", "pharmacology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-016",
    categorySlug: "fluid-electrolyte",
    stem: "A severely injured trauma patient has received 8 units of packed red blood cells (PRBCs) and 6 units of fresh frozen plasma (FFP) within 2 hours under the Massive Transfusion Protocol. The nurse monitors the ECG monitor and observes a prolonged QT interval and frequent muscle twitching when inflating the blood pressure cuff. Which electrolyte disturbance should the nurse suspect?",
    choices: [
      {
        id: "a",
        text: "Acute hypocalcaemia caused by citrate binding to circulating ionized calcium",
      },
      {
        id: "b",
        text: "Severe hypercalcaemia from excessive bone resorption during massive transfusion",
      },
      {
        id: "c",
        text: "Hypernatraemia resulting from high sodium content in packed red cells",
      },
      {
        id: "d",
        text: "Severe hypokalaemia caused by rapid red cell potassium uptake",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Stored blood products contain sodium citrate as an anticoagulant. When massive volumes are infused rapidly (e.g., > 1 unit every 5 minutes), the liver's metabolic capacity to clear citrate is overwhelmed, particularly in hypothermic or shocked patients. Citrate chelates circulating ionized calcium, causing acute hypocalcaemia characterized by QT prolongation, neuromuscular excitability (Trousseau sign, Chvostek sign, twitching), decreased cardiac contractility, and hypotension. The nurse should anticipate IV calcium chloride or calcium gluconate replacement. Why the other options fail: option b is the opposite calcium change, which follows immobilisation or malignancy rather than rapid transfusion. Option c misplaces the sodium load, which is real but gives hypernatraemia without the QT prolongation and twitching described. Option d is the wrong direction for potassium and is not caused by citrate.",
    strategy: "Massive transfusion complication: Citrate toxicity binds ionized calcium -> hypocalcaemia (long QT, twitching/Trousseau sign). Treat with IV calcium.",
    difficulty: "medium",
    tags: ["critical-care", "massive-transfusion", "citrate-toxicity", "hypocalcaemia", "blood-products"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-017",
    categorySlug: "med-surg",
    stem: "In caring for a critically injured polytrauma patient undergoing resuscitation in the intensive care unit, the nurse implements aggressive warming, rapid correction of blood pH, and balanced haemostatic resuscitation. Which lethal triad of trauma is this coordinated strategy specifically designed to arrest?",
    choices: [
      {
        id: "a",
        text: "Hypertension, bradycardia, and irregular respirations",
      },
      {
        id: "b",
        text: "Hypothermia, metabolic acidosis, and coagulopathy",
      },
      {
        id: "c",
        text: "Hyperkalaemia, hypercalcaemia, and hypermagnesaemia",
      },
      {
        id: "d",
        text: "Tachycardia, hypoxaemia, and hypocapnia",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The 'lethal triad' of trauma consists of hypothermia, metabolic acidosis, and coagulopathy. Each component exacerbates the others: hypothermia impairs coagulation enzyme cascades and platelet function; hypoperfusion causes lactic acidosis; and acidosis further inhibits thrombin generation. Failure to interrupt this vicious cycle leads to uncontrollable microvascular bleeding and death. Management requires active rewarming, damage control surgery, dynamic fluid resuscitation, and balanced blood component transfusion (1:1:1 PRBCs, FFP, platelets). Why the other options fail: option a lists hypertension and bradycardia, the opposite of the shocked trauma patient. Option c lists three electrolyte rises, and none of them is part of the triad. Option d describes a respiratory picture; tachycardia and hypocapnia may accompany shock but are not what drives the bleeding.",
    strategy: "Trauma lethal triad: Hypothermia + Acidosis + Coagulopathy. Break the cycle with rewarming, perfusion restoration, and balanced transfusion.",
    difficulty: "easy",
    tags: ["critical-care", "trauma", "lethal-triad", "hypothermia", "coagulopathy"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-018",
    categorySlug: "pharmacology-parenteral",
    stem: "Three days after a paracetamol overdose a patient becomes drowsy and jaundiced. Which set of results tells the nurse that his liver is failing?",
    choices: [
      {
        id: "a",
        text: "A falling international normalised ratio, a rising blood glucose and a raised plasma bicarbonate level",
      },
      {
        id: "b",
        text: "A rising platelet count, a falling white cell count and a normal serum bilirubin level",
      },
      {
        id: "c",
        text: "A rising international normalised ratio, a falling blood glucose and a rising blood ammonia level",
      },
      {
        id: "d",
        text: "A raised amylase, a low serum calcium and a clotting screen that is entirely normal",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — \"A rising international normalised ratio, a falling blood glucose and a rising blood ammonia level\". A liver that is failing stops doing the three things this set measures. It stops making clotting factors, so the international normalised ratio climbs and the patient bleeds; it stops making glucose, so the blood glucose falls; and it stops clearing ammonia through the urea cycle, so ammonia rises and the drowsiness deepens into encephalopathy. Jaundice on day three, falling glucose and a widening INR together define acute liver failure, and this patient needs referral to a unit that can manage it, not another paracetamol level.\n\nWhy the other options fail:\n• A — This reverses every one of the three; a failing liver does not shorten the INR or raise the glucose.\n• B — The platelet count may fall rather than rise, and the bilirubin in a jaundiced patient is not normal.\n• D — Amylase and calcium are not the markers of hepatic synthetic failure, and the clotting screen would not be normal in a failing liver.\n\nReference: Ghana STG — poisoning; WHO/International Programme on Chemical Safety — paracetamol overdose\n",
    strategy: "Synthetic failure shows as a rising INR, falling glucose and rising ammonia. In liver failure the clotting time lengthens, it does not shorten.",
    difficulty: "easy",
    tags: ["critical-care", "toxicology", "acetaminophen", "n-acetylcysteine", "antidote"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-019",
    categorySlug: "mental-health",
    stem: "The ICU nurse uses the Confusion Assessment Method for the ICU (CAM-ICU) to evaluate a mechanically ventilated patient who was previously alert and cooperative. The assessment shows an acute change in mental status, fluctuating attention during the letter 'A' tapping test, and disorganized thinking. What is the nurse's first-line management approach?",
    choices: [
      {
        id: "a",
        text: "Identify and treat the medical triggers, reorient the patient, promote sleep, and mobilise early",
      },
      {
        id: "b",
        text: "Immediately administer high-dose intravenous haloperidol every 2 hours without investigating underlying physiological causes",
      },
      {
        id: "c",
        text: "Apply four-point leather restraints and keep the window blinds closed",
      },
      {
        id: "d",
        text: "Initiate continuous deep benzodiazepine sedation targeting a RASS score of -5",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "ICU delirium is a clinical syndrome of acute brain dysfunction characterized by fluctuating inattention and altered awareness. First-line management focuses on non-pharmacological interventions and identifying modifiable physiological causes (hypoxia, sepsis, metabolic derangements, pain, anticholinergic/sedative medications, urinary retention). Evidence-based bundles (ABCDEF bundle) emphasize pain control, daily sedation vacation, spontaneous breathing trials, delirium monitoring, early physical mobilization, and sleep optimization. Benzodiazepines and unnecessary restraints worsen delirium. Why the other options fail: option b sedates with an antipsychotic before the cause is found, and haloperidol prolongs the QT without treating the hypoxia or the sepsis. Option c restrains and darkens the room, which worsens disorientation. Option d deepens sedation to a RASS of -5, which is a coma and the opposite of the early mobilisation the bundle requires.",
    strategy: "ICU delirium (CAM-ICU positive): Non-pharmacologic bundle first (treat causes, mobilize, reorient, optimize sleep). Avoid benzodiazepines.",
    difficulty: "medium",
    tags: ["critical-care", "cam-icu", "delirium", "icu-psychosis", "sedation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-CC-020",
    categorySlug: "med-surg",
    stem: "A patient with devastating traumatic brain injury is declared brain dead by clinical criteria and apnea testing. The family consents to deceased organ donation. While waiting for the transplant surgical team, what haemodynamic and physiological goals should the critical care nurse maintain (donor management)?",
    choices: [
      {
        id: "a",
        text: "Keep systolic pressure above 100 mmHg, urine output 1-3 mL/kg/h, PaO2 above 100 mmHg, and normothermia",
      },
      {
        id: "b",
        text: "Permit profound hypotension and hypothermia to slow down organ cellular metabolism",
      },
      {
        id: "c",
        text: "Restrict all intravenous fluids and stop mechanical ventilation before the operating room",
      },
      {
        id: "d",
        text: "Maintain continuous deep sedation with high-dose propofol and fentanyl infusions",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Brain death produces autonomic storm followed by loss of sympathetic vascular tone, diabetes insipidus, poikilothermia, and endocrine failure. To preserve organ viability for transplantation, the nurse maintains optimal physiological goals (often remembered as the 'Rule of 100s'): systolic blood pressure >= 100 mmHg (MAP >= 65), PaO2 >= 100 mmHg (SaO2 >= 95%), urine output 100–200 mL/h (or 1–3 mL/kg/h), blood glucose 100–150 mg/dL, and core body temperature > 36 °C. Hormonal resuscitation (levothyroxine/T4, methylprednisolone, vasopressin) is standard. Why the other options fail: option b permits the hypotension and hypothermia that injure the organs being preserved. Option c withdraws the ventilation and fluids that maintain oxygenation and perfusion. Option d deepens sedation, which suppresses the neurological assessment and the sympathetic tone the donor depends on.",
    strategy: "Organ donor management (Rule of 100s): SBP > 100, PaO2 > 100, urine output 100 mL/h (1-3 mL/kg/h), normothermia.",
    difficulty: "medium",
    tags: ["critical-care", "brain-death", "organ-donation", "haemodynamics", "end-of-life"],
    isFree: true,
  },
];
