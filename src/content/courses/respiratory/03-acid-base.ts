import type { CourseModule } from "../types";

export const acidBase: CourseModule = {
  slug: "arterial-blood-gases-and-acid-base",
  title: "Arterial blood gases and acid–base balance",
  summary: "Taking and reading a blood gas in six steps, and the four acid–base disturbances — what causes them, what they look like at the bedside and what the nurse does about each — then an advanced drill on mixed disorders, compensation checks and traps.",
  lessons: [
    {
      slug: "arterial-blood-gas-interpretation",
      title: "Arterial blood gas interpretation",
      minutes: 16,
      objectives: [
        "State the normal values for pH, PaCO2, HCO3, PaO2 and SaO2 in both unit systems.",
        "Interpret any blood gas in six steps and identify compensation.",
        "Explain how the body buffers acid and why the lungs respond in minutes and the kidneys in days.",
        "Prepare the patient for arterial sampling and care for the puncture site.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Why nurses must read gases",
          paragraphs: [
            "A blood gas result arrives at the bedside, not in the doctor's office. The nurse who can read it knows whether the oxygen is too much or too little, whether the breathless patient is tiring, whether the diabetic patient is in ketoacidosis and whether the vomiting patient is becoming alkalotic — and escalates with the right words. Guessing from the pH alone is the commonest error; a six-step method removes the guessing.",
            "The chemistry is one equation: <strong>CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3−</strong>. Carbon dioxide is an acid controlled by the <strong>lungs</strong> within minutes; bicarbonate is a base controlled by the <strong>kidneys</strong> over hours to days. pH is the balance between them.",
          ],
        },
        {
          type: "table",
          heading: "Normal values",
          columns: ["Measure", "Normal range", "Meaning"],
          rows: [
            ["pH", "7.35–7.45", "Below 7.35 acidaemia; above 7.45 alkalaemia. Life is difficult outside 6.8–7.8"],
            ["PaCO2", "4.7–6.0 kPa (35–45 mmHg)", "The respiratory component: high = hypoventilation (acid); low = hyperventilation (base)"],
            ["HCO3− (bicarbonate)", "22–26 mmol/L", "The metabolic component: low = metabolic acidosis or renal compensation; high = metabolic alkalosis or renal compensation"],
            ["Base excess", "−2 to +2 mmol/L", "A second view of the metabolic side: negative = acid; positive = base"],
            ["PaO2", "10.6–13.3 kPa (80–100 mmHg) on air", "Below 8 kPa (60 mmHg) = hypoxaemia and type 1 respiratory failure; interpret against the oxygen being given"],
            ["SaO2", "95–100%", "Should agree with the pulse oximeter; a big gap suggests poor perfusion or carbon monoxide"],
            ["Lactate", "0.5–2.0 mmol/L", "Raised in shock, sepsis, seizures and severe hypoxia; the acid behind most metabolic acidosis in emergencies"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MED-0314.svg",
          alt: "Reading a blood gas in three steps: pH, then PaCO2, then bicarbonate, with normal values",
          caption: "pH first, then the respiratory number, then the metabolic number. Whichever abnormal number points the same way as the pH is the primary problem.",
        },
        {
          type: "list",
          heading: "The six steps",
          style: "steps",
          items: [
            "<strong>pH</strong> — acidaemia (below 7.35), alkalaemia (above 7.45) or normal? A normal pH with abnormal CO2 and HCO3 means a fully compensated disorder or a mixed one; a pH of 7.38 is on the acid side of normal, 7.43 on the alkaline side — note which.",
            "<strong>PaCO2</strong> — high (acid) or low (base)? Remember <strong>ROME</strong>: <strong>R</strong>espiratory <strong>O</strong>pposite — in a respiratory problem the CO2 moves in the opposite direction to the pH (CO2 up, pH down).",
            "<strong>HCO3−</strong> — low (acid) or high (base)? <strong>M</strong>etabolic <strong>E</strong>qual — in a metabolic problem the bicarbonate moves in the same direction as the pH (HCO3 down, pH down).",
            "<strong>Which one matches the pH?</strong> That is the primary disorder. If pH is low and CO2 is high → respiratory acidosis. If pH is low and HCO3 is low → metabolic acidosis. If both are abnormal in the acid direction → a mixed disorder (for example cardiac arrest: CO2 up and lactate up).",
            "<strong>Compensation</strong> — has the other system moved to pull the pH back? Uncompensated: the other value is normal. Partially compensated: the other value is abnormal but pH is still outside range. Fully compensated: pH back inside range. The lungs compensate within minutes to hours; the kidneys take 2–5 days, so a compensated respiratory acidosis means a <em>chronic</em> problem (COPD) and a sudden high CO2 with normal bicarbonate is <em>acute</em>.",
            "<strong>Oxygenation</strong> — PaO2 and SaO2 against the oxygen the patient was on. A PaO2 of 10 kPa on 60% oxygen is not normal; it is severe lung disease.",
          ],
        },
        {
          type: "table",
          heading: "Worked examples",
          columns: ["Gas", "Reading", "Interpretation"],
          rows: [
            ["pH 7.25, PaCO2 8.5 kPa (64 mmHg), HCO3 26, PaO2 7.0 kPa on 2 L", "Acid; CO2 high (opposite to pH); HCO3 normal", "Acute uncompensated respiratory acidosis with hypoxaemia — type 2 respiratory failure. Think opioids, exhaustion in asthma, COPD exacerbation. Needs ventilatory support, not just more oxygen"],
            ["pH 7.36, PaCO2 8.0 kPa (60 mmHg), HCO3 34, PaO2 7.8 kPa on air", "pH low-normal; CO2 high; HCO3 high", "Chronic fully compensated respiratory acidosis — the stable COPD retainer. Target 88–92%; this patient's baseline is not 98%"],
            ["pH 7.15, PaCO2 2.8 kPa (21 mmHg), HCO3 8, glucose 28, ketones ++", "Acid; HCO3 low (same direction as pH); CO2 low = respiratory compensation", "Partially compensated metabolic acidosis — diabetic ketoacidosis; the low CO2 is Kussmaul breathing blowing off acid. Fluids and insulin, potassium watch"],
            ["pH 7.52, PaCO2 6.5 kPa (49 mmHg), HCO3 38, K+ 2.8", "Alkaline; HCO3 high (same direction); CO2 slightly high = compensation by hypoventilation", "Partially compensated metabolic alkalosis — days of vomiting or nasogastric suction; replace saline and potassium"],
            ["pH 7.50, PaCO2 3.5 kPa (26 mmHg), HCO3 23, PaO2 13 kPa", "Alkaline; CO2 low (opposite); HCO3 normal", "Acute respiratory alkalosis — hyperventilation from anxiety, pain, early sepsis or pulmonary embolism. Treat the cause; do not assume anxiety until PE and sepsis are excluded"],
          ],
        },
        {
          type: "list",
          heading: "Sampling and site care",
          items: [
            "Usual site is the <strong>radial artery</strong>; perform the <strong>modified Allen's test</strong> first — occlude both radial and ulnar arteries while the patient clenches the fist, release the ulnar only: the palm should flush within 5–10 seconds, proving collateral supply. If it does not, use the other arm or another site.",
            "Pre-heparinised syringe, expel air bubbles immediately, cap, roll between the palms, label with the time, temperature and the oxygen the patient was receiving, and analyse within 10–15 minutes (on ice if there is a delay). Air bubbles falsely raise PaO2 and lower PaCO2; delay lowers pH and PaO2.",
            "Afterwards apply <strong>firm pressure for at least 5 minutes</strong> — 10–15 minutes if the patient is anticoagulated or has a bleeding tendency — then check the site and distal circulation (colour, warmth, pulse, sensation). Report haematoma, pain, pallor or numbness.",
            "Arterial sampling is painful; local anaesthetic or a cold spray may be used; explain beforehand and keep the arm still. Venous and capillary gases are increasingly used for pH, CO2 and bicarbonate when oxygenation is already known from the oximeter.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "ROME in one line",
          body: "Respiratory Opposite (pH and CO2 move apart), Metabolic Equal (pH and HCO3 move together). Lungs compensate in minutes, kidneys in days — so a compensated respiratory acidosis is chronic.",
        },
      ],
      keyPoints: [
        "Normal: pH 7.35–7.45, PaCO2 4.7–6.0 kPa (35–45 mmHg), HCO3 22–26, PaO2 10.6–13.3 kPa (80–100 mmHg).",
        "Six steps: pH → CO2 → HCO3 → which matches the pH → compensation → oxygenation against the oxygen given.",
        "ROME: respiratory disorders move CO2 opposite to pH; metabolic disorders move HCO3 with pH.",
        "Full compensation of a respiratory acidosis means a chronic retainer; an acute high CO2 with normal bicarbonate is an emergency.",
        "Allen's test before radial puncture; expel air, analyse quickly, press for 5 minutes (longer if anticoagulated) and check the hand.",
      ],
      quiz: {
        keywords: ["arterial blood gas", "abg", "paco2", "pao2", "hco3", "bicarbonate", "acidosis", "alkalosis", "allen", "compensat", "radial artery", "blood gas"],
      },
    },
    {
      slug: "acid-base-imbalances-and-nursing-care",
      title: "The four acid–base imbalances and their nursing care",
      minutes: 16,
      objectives: [
        "List the common causes of respiratory and metabolic acidosis and alkalosis.",
        "Recognise each disturbance from the history and bedside signs before the gas is back.",
        "Explain the link between acid–base balance and potassium and calcium.",
        "Plan nursing care and recognise the treatments for each imbalance.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Think of the cause, not just the chemistry",
          paragraphs: [
            "Every acid–base disorder is a symptom of something else: a lung that cannot blow off CO2, a kidney that cannot excrete acid, a gut losing bicarbonate downwards or acid upwards, or tissues starved of oxygen making lactic acid. The treatment is almost always the cause — insulin for ketoacidosis, ventilation for hypoventilation, fluids for shock, saline and potassium for vomiting. Bicarbonate infusions are rarely the answer and can harm.",
          ],
        },
        {
          type: "table",
          heading: "The four disturbances",
          columns: ["Disorder", "Gas pattern", "Common causes", "Bedside picture", "Treatment and nursing care"],
          rows: [
            ["Respiratory acidosis (hypoventilation — CO2 retained)", "pH ↓, PaCO2 ↑; HCO3 ↑ if chronic", "COPD exacerbation, severe asthma late (exhaustion), opioid or sedative overdose, anaesthesia, obesity hypoventilation, Guillain–Barré and other neuromuscular weakness, chest-wall deformity, flail chest, airway obstruction, pneumonia in a tired patient", "Drowsiness, headache, confusion, flapping tremor, bounding pulse, warm flushed skin, slow or shallow breathing (or fast but ineffective), eventual coma; hyperkalaemia", "Improve ventilation: sit up, clear the airway, suction, bronchodilators, <strong>naloxone</strong> for opioids, controlled oxygen 88–92% if a retainer, non-invasive ventilation (BiPAP) for COPD with pH below 7.35, intubation if failing. Monitor rate, depth, consciousness and repeat gases. Avoid further sedation"],
            ["Respiratory alkalosis (hyperventilation — CO2 blown off)", "pH ↑, PaCO2 ↓; HCO3 ↓ if prolonged", "Anxiety and panic, pain, fever, early sepsis, pulmonary embolism, pneumonia and asthma early (hypoxia drives breathing), salicylate overdose, pregnancy, high altitude, over-ventilation on a ventilator, liver failure, brain injury", "Rapid deep breathing, light-headedness, perioral and fingertip tingling, carpopedal spasm and tetany (ionised calcium falls as pH rises), palpitations, syncope", "Find and treat the cause — <strong>exclude PE, sepsis and hypoxia before labelling it anxiety</strong>. Calm reassurance, coach slow breathing, analgesia, antipyretics, oxygen if hypoxic. Rebreathing into a paper bag is no longer recommended (it can worsen hypoxia). Adjust ventilator settings"],
            ["Metabolic acidosis (acid gained or bicarbonate lost)", "pH ↓, HCO3 ↓; PaCO2 ↓ as compensation", "Diabetic ketoacidosis, lactic acidosis (shock, sepsis, cardiac arrest, severe anaemia, seizures, metformin), renal failure, severe diarrhoea and pancreatic or biliary fistulae (bicarbonate loss), aspirin and methanol poisoning, starvation ketosis", "<strong>Kussmaul</strong> deep sighing breathing, nausea and vomiting, abdominal pain (DKA), warm vasodilated then shocked, confusion, arrhythmias from hyperkalaemia; fruity breath in DKA", "Treat the cause: IV fluids and insulin for DKA, fluids and antibiotics for sepsis, oxygen and perfusion for lactic acidosis, dialysis for renal failure, rehydration with ORS or IV for diarrhoea. Monitor potassium closely (it falls as acidosis corrects, especially with insulin), cardiac monitoring, hourly observations, glucose and ketones. Sodium bicarbonate only for severe acidosis (pH below 7.1) on medical instruction"],
            ["Metabolic alkalosis (acid lost or base gained)", "pH ↑, HCO3 ↑; PaCO2 ↑ as compensation", "Prolonged vomiting or nasogastric suction (loss of hydrochloric acid), loop and thiazide diuretics, hypokalaemia, excess antacids or bicarbonate, Cushing's syndrome and steroids, massive blood transfusion (citrate)", "Slow shallow breathing (compensation), muscle cramps, tetany, tingling, weakness, confusion, arrhythmias; hypokalaemia and hypocalcaemia", "Treat the cause: antiemetics, stop or reduce suction, <strong>replace chloride and potassium</strong> with normal saline and potassium chloride, review diuretics and antacids. Monitor potassium, calcium, ECG, respiratory rate and consciousness"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FLD-3141.svg",
          alt: "Table matching the site of fluid loss to the electrolytes lost and the resulting acid–base disturbance",
          caption: "Where the fluid left the body tells you what left with it: vomiting loses acid (alkalosis); diarrhoea loses bicarbonate (acidosis); diuretics lose potassium and chloride (alkalosis).",
        },
        {
          type: "list",
          heading: "Acid–base and the electrolytes",
          items: [
            "<strong>Potassium:</strong> in acidosis, hydrogen ions move into cells and potassium moves out — <strong>acidosis causes hyperkalaemia</strong>; correcting the acidosis (insulin, bicarbonate, ventilation) drives potassium back in and can cause sudden <strong>hypokalaemia</strong>. In alkalosis the reverse: hypokalaemia. Watch the ECG and the potassium on every repeat gas.",
            "<strong>Calcium:</strong> alkalosis increases the binding of calcium to albumin, lowering ionised calcium — tingling, carpopedal spasm and tetany in the hyperventilating patient even though the total calcium is normal.",
            "<strong>Chloride:</strong> lost with vomiting; needed to correct metabolic alkalosis — which is why normal saline, not dextrose, is the fluid of choice.",
            "<strong>Anion gap</strong> (Na − [Cl + HCO3], normal 8–12) separates metabolic acidosis with added acid (DKA, lactate, renal failure, poisons — high gap) from bicarbonate loss (diarrhoea, renal tubular acidosis — normal gap).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ELE-2981.svg",
          alt: "Column diagram showing sodium balanced against chloride and bicarbonate, with the unmeasured anion gap",
          caption: "A raised anion gap means an acid has been added — ketones, lactate, uraemic acids or a poison. A normal gap means bicarbonate has been lost.",
        },
        {
          type: "list",
          heading: "Nursing priorities common to every imbalance",
          items: [
            "Airway and breathing first: position, oxygen to target, suction, and the ability to ventilate if breathing fails.",
            "Continuous or frequent monitoring: respiratory rate and pattern, SpO2, consciousness, ECG for potassium effects, fluid balance, glucose.",
            "Safety: confused or drowsy patients need bed rails, observation and no sedatives; tetany and seizures need a safe environment.",
            "Accurate fluid balance including vomit and nasogastric aspirate — the volumes explain the chemistry.",
            "Repeat the gas after every significant intervention and report the trend, not just the number.",
            "Teach prevention: insulin never omitted when ill (DKA), ORS early in diarrhoea, inhaler adherence and early review in COPD, no self-medication with large doses of antacids or aspirin.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Pairs to memorise",
          body: "Vomiting → metabolic alkalosis → low potassium → give saline and potassium. Diarrhoea → metabolic acidosis. DKA → metabolic acidosis → Kussmaul breathing → potassium falls with insulin. Opioid overdose → respiratory acidosis → naloxone. Panic → respiratory alkalosis → tingling and spasm — but exclude PE first.",
        },
      ],
      keyPoints: [
        "Respiratory acidosis is hypoventilation: drowsiness, flapping tremor, bounding pulse — improve ventilation and reverse sedatives.",
        "Respiratory alkalosis is hyperventilation: tingling and spasm — treat the cause and exclude PE, sepsis and hypoxia before calling it anxiety.",
        "Metabolic acidosis: DKA, lactic acidosis, renal failure, diarrhoea — Kussmaul breathing; treat the cause and watch potassium fall as it corrects.",
        "Metabolic alkalosis: vomiting, NG suction, diuretics — replace saline and potassium.",
        "Acidosis raises potassium; alkalosis lowers potassium and ionised calcium.",
      ],
      quiz: {
        keywords: ["acidosis", "alkalosis", "kussmaul", "hyperventilat", "hypoventilat", "bicarbonate", "compensat", "anion gap", "ketoacidosis", "lactate", "nasogastric suction", "tetany", "hyperkalaemia", "hypokalaemia", "naloxone"],
      },
    },
    {
      slug: "abg-drill-mixed-disorders-and-traps",
      title: "ABG drill: mixed disorders, compensation checks and traps",
      minutes: 18,
      objectives: [
        "Judge whether compensation is adequate using Winter's formula and the acute–chronic rules.",
        "Unmask a second metabolic disorder with the anion gap, corrected bicarbonate and delta ratio.",
        "Work through mixed and complex gases to a verdict and an action, as in the examination and the ICU.",
        "Avoid sampling and interpretation traps, and escalate the red-flag gas without delay.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Beyond single disorders",
          paragraphs: [
            "The six steps handle one disorder at a time — but sick patients mix them. The diabetic patient vomits (ketoacidosis plus metabolic alkalosis), the COPD patient takes diuretics (chronic carbon dioxide retention plus metabolic alkalosis), the septic patient stops making urine (lactic acidosis plus renal acidosis), the overdose patient hyperventilates and poisons metabolism at once. Mixed disorders are the rule in emergencies, and the examination tests them with gases whose pH looks deceptively normal.",
            "Two extra skills separate the nurse who reads gases from the nurse who trusts them. First, <strong>compensation has limits</strong>: the lungs and kidneys move the numbers only so far, so a compensation that overshoots — or fails to appear — is itself a second disorder. Second, <strong>a normal pH never means a normal patient</strong>: two opposing disorders (acidosis plus alkalosis) can cancel each other arithmetically while the patient deteriorates. This lesson drills both skills on ten gases.",
          ],
        },
        {
          type: "table",
          heading: "Is the compensation adequate?",
          columns: ["Primary disorder", "Expected compensation", "Mismatch means"],
          rows: [
            ["Metabolic acidosis", "<strong>Winter's formula:</strong> expected PaCO2 = 1.5 × HCO3 + 8 mmHg (± 2); divide by 7.5 for kPa. Example: HCO3 8 → expected CO2 about 20 mmHg (2.7 kPa)", "Actual CO2 <strong>higher</strong> than expected = added respiratory acidosis — the patient is tiring and needs ventilatory support. Actual CO2 <strong>lower</strong> = added respiratory alkalosis (pain, sepsis, salicylates)"],
            ["Metabolic alkalosis", "PaCO2 rises roughly 5 mmHg (0.7 kPa) for every 10 mmol/L of HCO3 above 24 — hypoventilation holds CO2 to balance the base", "PaCO2 above about 55 mmHg (7.3 kPa) = added respiratory acidosis. PaCO2 below expected = added respiratory alkalosis"],
            ["Acute respiratory acidosis", "HCO3 rises about <strong>1 mmol/L for every 10 mmHg</strong> of CO2 above 40 (about 1 per 1.3 kPa) — the kidneys have not had time", "HCO3 much higher than that = the retention is <strong>chronic</strong> (a retainer) or a metabolic alkalosis coexists. HCO3 lower than expected = added metabolic acidosis"],
            ["Chronic respiratory acidosis", "HCO3 rises about <strong>3–4 mmol/L for every 10 mmHg</strong> of CO2 above 40 — full renal compensation over days", "pH still below 7.35 despite this = <strong>acute on chronic</strong> — the exacerbation on top of the baseline. A common examination gas"],
            ["Acute respiratory alkalosis", "HCO3 falls about <strong>2 mmol/L for every 10 mmHg</strong> of CO2 below 40", "HCO3 lower than that = added metabolic acidosis (think salicylates, sepsis with lactate). HCO3 higher = added metabolic alkalosis"],
            ["Chronic respiratory alkalosis", "HCO3 falls about <strong>4–5 mmol/L for every 10 mmHg</strong> of CO2 below 40 — pregnancy, high altitude, chronic liver disease", "Pregnancy resets the baseline: a PaCO2 near 4.0 kPa (30 mmHg) is normal there, so do not over-ventilate a pregnant woman to 'correct' it"],
          ],
        },
        {
          type: "list",
          heading: "Unmasking the second metabolic disorder",
          style: "steps",
          items: [
            "Calculate the <strong>anion gap</strong> (sodium minus chloride plus bicarbonate; normal 8–12). A raised gap means an acid has been added — ketones, lactate, uraemic acids, methanol, salicylates. A normal gap with a low bicarbonate means bicarbonate was <strong>lost</strong> — diarrhoea, pancreatic fistula, renal tubular acidosis, litres of normal saline.",
            "Correct the bicarbonate: <strong>corrected HCO3 = measured HCO3 + (anion gap − 12)</strong>. This reconstructs what the bicarbonate was before the high-gap acid consumed it. Corrected HCO3 above 26 = a hidden <strong>metabolic alkalosis</strong> (vomiting, diuretics) underneath. Below 22 = a hidden <strong>normal-gap acidosis</strong> (diarrhoea, saline resuscitation) as well.",
            "Check the <strong>delta ratio</strong> = (anion gap − 12) ÷ (24 − HCO3): below 0.4 is a pure normal-gap acidosis; 0.4–0.8 mixed normal- and high-gap; 0.8–2.0 a pure high-gap acidosis; <strong>above 2.0 a high-gap acidosis plus a metabolic alkalosis</strong>. The ratio and the corrected bicarbonate answer the same question two ways.",
            "Work it once: a vomiting diabetic patient has pH 7.40, HCO3 20 and anion gap 22. The gap says ketoacidosis is present; corrected HCO3 = 20 + 10 = 30 says vomiting alkalosis hides it; delta ratio = 10 ÷ 4 = 2.5 confirms both. Treat the DKA <strong>and</strong> replace the saline and potassium — treating one half leaves the patient ill.",
          ],
        },
        {
          type: "table",
          heading: "Drill: the metabolic cases",
          columns: ["Gas and story", "Steps", "Verdict and action"],
          rows: [
            ["Fever, rigors, low blood pressure; pH 7.28, PaCO2 4.0 kPa (30 mmHg), HCO3 14, lactate 5.5, K+ 5.8", "Acid; HCO3 low (metabolic); Winter's expected CO2 = 1.5 × 14 + 8 = 29 mmHg — matches, so compensation adequate; single high-gap (lactate) disorder", "Septic lactic acidosis with adequate respiratory compensation. Sepsis six: blood cultures, lactate, fluids, antibiotics within the hour, oxygen, urine output — and watch potassium fall as perfusion returns"],
            ["Vomiting diabetic patient; pH 7.40, PaCO2 5.3 kPa (40 mmHg), HCO3 20, glucose 26, ketones ++, anion gap 22", "pH normal — the trap. Gap raised (ketoacidosis present); corrected HCO3 = 30; delta ratio 2.5", "Mixed high-gap acidosis (DKA) plus metabolic alkalosis (vomiting) cancelling the pH. Full DKA treatment <strong>plus</strong> saline and potassium replacement for the alkalosis; the normal pH must not reassure anyone"],
            ["Three days of watery diarrhoea; pH 7.30, PaCO2 4.3 kPa (32 mmHg), HCO3 16, anion gap 10, K+ 3.0", "Acid; HCO3 low; Winter's expected ≈ 32 mmHg — matches; gap normal", "Pure normal-gap metabolic acidosis from bicarbonate loss in stool, with hypokalaemia. Oral rehydration salts or IV fluids, replace potassium, treat the cause — and no bicarbonate infusion"],
            ["Collapsed after illicit gin; confusion, blurred vision; pH 7.22, PaCO2 3.5 kPa (26 mmHg), HCO3 12, anion gap 24, osmolar gap raised", "Acid; high gap; Winter's expected = 26 mmHg — matches; vision plus high gap plus osmolar gap", "Methanol poisoning — a high-gap acidosis with an osmolar gap and visual symptoms. This is an emergency: ethanol or fomepizole to block metabolism, bicarbonate, haemodialysis, ophthalmology — and report the batch, because others will follow"],
            ["DKA on treatment, now alert; pH 7.34, HCO3 17, glucose 9, ketones trace, anion gap 11, chloride 114", "pH nearly normal; gap <strong>closed</strong> (11) though HCO3 still low; chloride high", "Resolving DKA with a treatment-emergent hyperchloraemic (normal-gap) acidosis from saline resuscitation — the DKA itself is over. Continue fluids (balanced crystalloid preferred), do not chase the bicarbonate, and convert to subcutaneous insulin by protocol"],
          ],
        },
        {
          type: "table",
          heading: "Drill: the carbon dioxide and double disorders",
          columns: ["Gas and story", "Steps", "Verdict and action"],
          rows: [
            ["Known COPD, worse breathlessness; pH 7.30, PaCO2 9.0 kPa (68 mmHg), HCO3 32, PaO2 7.5 kPa on air", "Acid; CO2 very high (respiratory); chronic rule predicts HCO3 ≈ 24 + 4 × 2.8 ≈ 35 — close, but pH still acid", "Acute-on-chronic respiratory acidosis — the exacerbation on top of retention. Controlled oxygen 88–92%, bronchodilators, steroids, antibiotics if infective, BiPAP if pH below 7.35 after treatment — never high-flow oxygen to 'fix' the saturation"],
            ["Severe asthma, now drowsy; earlier CO2 3.5 kPa, now pH 7.32, PaCO2 6.0 kPa (45 mmHg), wheeze quieter", "pH acid; CO2 'normal' — the deadliest trap in asthma: a CO2 that <strong>rises to normal</strong> means exhaustion, not recovery", "Tiring asthmatic approaching respiratory arrest. ICU now: continuous nebulisers, magnesium, senior review, prepare for intubation — a 'normal' CO2 with a silent chest and drowsiness is a peri-arrest gas"],
            ["Overdose, sweating, ringing in the ears, fever; pH 7.45, PaCO2 3.0 kPa (23 mmHg), HCO3 16, anion gap 18, glucose low-normal", "Alkaline; CO2 low (respiratory alkalosis) — but HCO3 far lower than the acute rule predicts, and the gap is raised", "Salicylate double disorder: respiratory alkalosis <strong>plus</strong> high-gap metabolic acidosis — the classic combined gas. Activated charcoal if early, urinary alkalinisation, correct glucose and potassium, haemodialysis if severe; young patients deteriorate fast"],
            ["COPD retainer on thiazides, now vomiting; pH 7.48, PaCO2 8.0 kPa (60 mmHg), HCO3 40, K+ 2.9", "Alkaline despite CO2 retention; HCO3 far above the chronic rule; potassium low", "Chronic respiratory acidosis plus diuretic- and vomiting-driven metabolic alkalosis — the alkalosis worsens CO2 narcosis and apnoea. Stop the thiazide, replace saline and potassium cautiously, monitor breathing and consciousness continuously"],
            ["After resuscitation from cardiac arrest; pH 7.18, PaCO2 7.5 kPa (56 mmHg), HCO3 14, lactate 9", "Acid; CO2 high <strong>and</strong> HCO3 low — both sides acid together", "Mixed respiratory and metabolic (lactic) acidosis of the arrest: no circulation cleared CO2 or lactate. Ventilate to normal CO2 (avoid hyperventilation), restore perfusion, find the cause — and expect the lactate to wash out over hours if circulation recovers"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-LAB-0148.svg",
          alt: "Three steps for blood gases: pH, then carbon dioxide, then bicarbonate, with normal ranges and the compensation rule",
          caption: "Keep this reference card beside every drill gas: pH first, then the respiratory number, then the metabolic number — whichever moved with the pH is the cause, the other moving back is compensation.",
        },
        {
          type: "list",
          heading: "Traps that fake a gas",
          items: [
            "<strong>Venous mistaken for arterial:</strong> venous pH runs 0.03–0.05 lower and PCO2 about 0.7–1.0 kPa higher; bicarbonate is close enough to use. A 'respiratory acidosis' in a well patient with an easy bleed is usually a venous sample — check the label before acting.",
            "<strong>Air bubbles and delay:</strong> bubbles falsely raise PaO2 and lower PaCO2; a warm delay of more than 15 minutes lowers pH and PaO2 as cells keep breathing. Excess liquid heparin dilutes everything and lowers pH and CO2.",
            "<strong>Litres of normal saline:</strong> large volumes of 0.9% saline cause a hyperchloraemic normal-gap acidosis of their own — the resuscitation becomes the disorder. Balanced crystalloids (Ringer's lactate, Hartmann's) avoid it where available.",
            "<strong>Potassium on the gas:</strong> a high K+ in a well patient with a difficult, slow bleed is haemolysis until proven otherwise — repeat before treating. But a high K+ with peaked T waves or a wide QRS is treated first and repeated after.",
            "<strong>The oximeter gap:</strong> in carbon monoxide poisoning the PaO2 is normal while the patient is confused and acidotic, and the pulse oximeter reads falsely reassuring — only co-oximetry shows the carboxyhaemoglobin. Suspect it with headaches in several people, a running engine or charcoal indoors, and cherry-red skin late.",
            "<strong>Lactate after seizures:</strong> a fit floods lactate transiently — recheck after an hour of quiet before launching a sepsis workup on lactate alone.",
            "<strong>Read the whole slip:</strong> glucose, potassium, ionised calcium, haemoglobin and lactate come free with the gas — the DKA diagnosis, the transfusion trigger and the potassium emergency are all printed together.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Numbers to remember",
          body: "Winter's: expected CO2 = 1.5 × HCO3 + 8 mmHg (± 2), divide by 7.5 for kPa. Anion gap 8–12; corrected HCO3 = measured + (gap − 12): above 26 hides an alkalosis, below 22 hides a normal-gap acidosis; delta ratio above 2 means both. Acute CO2 shifts move HCO3 by 1–2 per 10 mmHg; chronic shifts move it 3–5. Red flags: pH below 7.20 or above 7.60, lactate above 4, potassium below 2.5 or above 6.5, acute CO2 above 8 kPa, or any CO2 rising toward normal in a severe asthmatic.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Mixed means sick — escalate",
          body: "A single disorder has one cause and one treatment; a mixed gas means a sick patient with several things wrong at once. Escalate every mixed disorder, every pH outside 7.20–7.60, every tiring patient and every potassium extreme to senior help and critical care outreach early — and treat the causes in parallel, not one after another.",
        },
      ],
      keyPoints: [
        "Check compensation adequacy: Winter's formula for metabolic acidosis, the acute (+1–2) and chronic (+3–5) bicarbonate rules for CO2 disorders — overshoot or failure means a second disorder.",
        "Corrected bicarbonate = measured HCO3 + (anion gap − 12): above 26 hides a metabolic alkalosis, below 22 hides a normal-gap acidosis; a delta ratio above 2 confirms both.",
        "Classic mixed gases: DKA with vomiting, acute-on-chronic COPD, salicylate double disorder, post-arrest CO2 plus lactate, and recovering DKA with a hyperchloraemic tail — each half needs its own treatment.",
        "A normal pH can hide two opposing disorders; a 'normal' CO2 in a severe asthmatic means exhaustion, not recovery.",
        "Traps: venous samples, air bubbles and delay, saline-induced acidosis, haemolysed potassium, the carbon monoxide oximeter gap, and post-seizure lactate.",
        "Mixed disorders, pH outside 7.20–7.60, lactate above 4, potassium extremes and tiring patients all escalate early.",
      ],
      quiz: {
        keywords: ["abg", "arterial blood gas", "blood gas", "acidosis", "alkalosis", "metabolic acidosis", "respiratory acidosis", "metabolic alkalosis", "respiratory alkalosis", "bicarbonate", "base excess", "anion gap", "delta gap", "lactate", "ketoacidosis", "dka", "compensation", "compensated", "winter", "hyperventilation", "hypoventilation", "hypercapnia", "salicylate", "methanol", "renal failure", "copd", "asthma", "sepsis", "ph 7"],
      },
    },
  ],
};
