import type { CourseModule } from "../types";

export const acidBase: CourseModule = {
  slug: "arterial-blood-gases-and-acid-base",
  title: "Arterial blood gases and acid–base balance",
  summary: "Taking and reading a blood gas in six steps, and the four acid–base disturbances — what causes them, what they look like at the bedside and what the nurse does about each.",
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
  ],
};
