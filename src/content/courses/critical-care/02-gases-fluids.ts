import type { CourseModule } from "../types";

export const bloodGasesFluidsAndElectrolytes: CourseModule = {
  slug: "blood-gases-fluids-and-electrolytes-in-critical-illness",
  title: "Blood gases, fluids and electrolytes in critical illness",
  summary: "Arterial blood gas interpretation from the sample to the decision — taking and handling the sample, the normal values in kPa and mmHg, the three-step method for pH, carbon dioxide and bicarbonate, compensation and its limits, the anion gap, lactate and base excess, oxygenation indices including the PaO₂/FiO₂ ratio, mixed disorders, the venous gas, and the common ICU pictures from diabetic ketoacidosis and cholera to the exhausted asthmatic and the over-ventilated patient; then the fluid and electrolyte emergencies of the critically ill — body fluid compartments and the fluids that fill them, assessing volume status and fluid responsiveness, the four phases of fluid therapy and the harm of fluid overload, potassium at both ends with the hyperkalaemia algorithm and the rules for replacement, sodium with the correction limits that protect the brain, magnesium, calcium and phosphate, refeeding syndrome, and the blood products of the massive transfusion.",
  lessons: [
    {
      slug: "arterial-blood-gas-interpretation-for-the-critical-care-nurse",
      title: "Arterial blood gas interpretation for the critical care nurse",
      minutes: 18,
      objectives: [
        "Obtain, handle and run an arterial blood gas sample correctly and state the normal values for pH, PaCO₂, PaO₂, bicarbonate, base excess and lactate in the units used in Ghana.",
        "Interpret a blood gas with the three-step method — pH, the culprit, compensation — and classify respiratory and metabolic acidosis and alkalosis with their common ICU causes.",
        "Use the anion gap, lactate, base excess, the PaO₂/FiO₂ ratio and the venous gas to refine the picture, and recognise mixed disorders and the limits of compensation.",
        "Translate the result into nursing action for the common pictures — diabetic ketoacidosis, cholera, sepsis, the exhausted asthmatic, the COPD patient on too much oxygen, the vomiting patient and the ventilated patient whose settings are wrong.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Why the critical care nurse reads the gas",
          paragraphs: [
            "An arterial blood gas is the fastest laboratory test in the hospital and the one that most often changes what happens in the next ten minutes. It tells you whether the patient is ventilating (PaCO₂), oxygenating (PaO₂ and saturation), perfusing (lactate and base excess) and whether the kidneys and lungs are coping with the acid load (pH and bicarbonate), and most analysers add haemoglobin, potassium, sodium, ionised calcium, glucose and chloride within two minutes. In many Ghanaian units the nurse takes the sample from the arterial line, runs it, and is the first person to see the result; a nurse who cannot read it will either miss a pH of 7.1 or wake the doctor for a pH of 7.38. This lesson makes you the first reader. It builds on the single blood-gas block in EMC-111 and goes as far as the mixed disorder and the ventilator adjustment.",
            "The <strong>sample</strong> is taken from an arterial line (discard the first 3 to 5 mL to clear flush solution, then draw 1 to 2 mL into a heparinised syringe, flush the line and check the trace returns) or by radial puncture after a positive modified Allen's test, with the needle at 45 degrees and firm pressure for five minutes afterwards — longer in anticoagulated patients. Air bubbles are expelled at once (air lowers the PaCO₂ and raises the PaO₂), the syringe is capped and rolled to mix the heparin, and it is analysed within ten to fifteen minutes or kept on ice. The form or the analyser must record the FiO₂ and the ventilator settings at the moment of sampling and the patient's temperature, because a PaO₂ of 12 kPa means very different things on air and on 100 per cent oxygen. A venous gas gives a usable pH (about 0.03 to 0.05 lower than arterial), bicarbonate and lactate, and a PaCO₂ roughly 0.5 to 1 kPa higher than arterial; it is useless for oxygenation.",
          ],
        },
        {
          type: "table",
          heading: "Normal values — know them in both units",
          columns: ["Parameter", "Normal range", "What it reflects"],
          rows: [
            ["pH", "7.35–7.45", "The net acid–base state; below 7.35 acidaemia, above 7.45 alkalaemia; survival is unusual outside 6.8–7.8"],
            ["PaCO₂", "4.7–6.0 kPa (35–45 mmHg)", "Alveolar ventilation — high means hypoventilation, low means hyperventilation; the respiratory component, adjusted in minutes"],
            ["PaO₂", "11–13 kPa (80–100 mmHg) breathing air; falls with age", "Oxygenation; interpret against the FiO₂ — on 60 per cent oxygen a healthy lung should give a PaO₂ above 40 kPa"],
            ["SaO₂", "95–100 per cent", "Haemoglobin saturation measured by the analyser (not estimated by the oximeter)"],
            ["HCO₃⁻ (bicarbonate)", "22–26 mmol/L", "The metabolic component, adjusted by the kidneys over hours to days"],
            ["Base excess", "−2 to +2 mmol/L", "The amount of acid or base needed to return the blood to pH 7.4 at normal PaCO₂; more negative than −2 (a base deficit) means metabolic acidosis"],
            ["Lactate", "0.5–2.0 mmol/L", "Anaerobic metabolism from poor perfusion (shock) or, less often, liver failure, seizures, metformin, salbutamol; above 4 mmol/L in sepsis defines a high-risk patient"],
            ["Anion gap", "8–12 mmol/L (varies with analyser; up to 16 with potassium included)", "Unmeasured anions — raised when an acid has been added (ketones, lactate, toxins, uraemia)"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FLD-2168.svg",
          alt: "Reading a blood gas in three steps. Lungs move carbon dioxide in minutes; kidneys move bicarbonate over days. Step 1, look at the pH: below 7.35 acidotic, above 7.45 alkalotic; the pH tells you which way, not which organ. Step 2, who caused it? Carbon dioxide normal 4.7 to 6.0 kPa, bicarbonate normal 22 to 26 mmol/L — whichever has moved the same way as the pH is the culprit; low pH with high CO₂ is respiratory acidosis. Step 3, is the other one compensating? If the other value has moved the opposite way the body is trying to correct; pH still abnormal is partial compensation, pH back to normal is full compensation; compensation never overshoots. The four pictures: metabolic acidosis — low pH, low bicarbonate — cholera, severe diarrhoea, DKA, sepsis, kidney failure; metabolic alkalosis — high pH, high bicarbonate — prolonged vomiting, pyloric obstruction, water tablets; respiratory acidosis — low pH, high CO₂ — not ventilating: opioids, severe asthma, exhaustion; respiratory alkalosis — high pH, low CO₂ — over-breathing: pain, anxiety, early sepsis, salicylate. Deep sighing breathing in a dehydrated child is the lungs blowing off acid; treat the cause, not the breathing.",
          caption: "The three steps never change: which way, who caused it, is the other system compensating. Carbon dioxide is the respiratory acid and moves in minutes; bicarbonate is the metabolic base and moves over days — which is why a metabolic acidosis is already partly compensated by fast breathing when you meet it, and a sudden respiratory acidosis is not compensated at all.",
        },
        {
          type: "list",
          heading: "The method, step by step",
          style: "steps",
          items: [
            "Look at the patient and the oxygen first. A gas is interpreted in a context: respiratory rate, work of breathing, conscious level, FiO₂, ventilator settings, temperature.",
            "<strong>pH.</strong> Below 7.35 is acidaemia; above 7.45 alkalaemia. A normal pH does not exclude a disorder — it may be fully compensated or mixed.",
            "<strong>PaCO₂.</strong> If it has moved in the direction that explains the pH (high with a low pH, low with a high pH) the primary problem is respiratory.",
            "<strong>Bicarbonate (or base excess).</strong> If it has moved in the direction that explains the pH (low with a low pH, high with a high pH) the primary problem is metabolic.",
            "<strong>Compensation.</strong> Has the other system moved the opposite way? Respiratory compensation for a metabolic acidosis is rapid — the expected PaCO₂ in kPa is roughly (0.2 × bicarbonate) + 1 (Winter's formula in mmHg: 1.5 × HCO₃⁻ + 8 ± 2). Renal compensation for a respiratory disorder takes two to five days; an acute respiratory acidosis has a near-normal bicarbonate, a chronic one (COPD) a raised bicarbonate. Compensation never overshoots and never fully normalises a severe disorder — if the pH is on the far side of normal there are two primary problems.",
            "<strong>Anion gap</strong> in every metabolic acidosis: sodium − (chloride + bicarbonate). A high gap means an acid has been added — ketones, lactate, uraemic acids, methanol, salicylate, ethylene glycol; a normal gap means bicarbonate has been lost — diarrhoea, ileostomy, fistula, renal tubular acidosis, or large volumes of 0.9 per cent saline (hyperchloraemic acidosis).",
            "<strong>Oxygenation.</strong> Compare the PaO₂ with the FiO₂: the PaO₂/FiO₂ ratio (PaO₂ in kPa × 7.5 ÷ FiO₂ as a decimal, or PaO₂ in mmHg ÷ FiO₂) above 40 kPa (300 mmHg) is normal; below 300 mmHg is mild ARDS, below 200 moderate and below 100 severe, with PEEP of at least 5 cmH₂O. A quick bedside rule: on supplemental oxygen the PaO₂ in kPa should be roughly 10 less than the percentage of oxygen being given.",
            "<strong>Lactate, glucose, potassium, haemoglobin.</strong> Read the rest of the printout. A lactate above 2 mmol/L in a patient who is not shocked is a warning; above 4 is a crisis. The potassium on the gas is the fastest potassium you will get in a hyperkalaemic arrest.",
            "Decide and act. A gas that is not followed by a decision — oxygen up or down, ventilator rate changed, fluid, insulin, a call — was not worth the blood.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ELE-2981.svg",
          alt: "Anion gap: sorting a metabolic acidosis. Gap equals sodium minus (chloride plus bicarbonate), normal 8 to 12 mmol/L; for example sodium 140 minus chloride 104 and bicarbonate 24 gives a gap of 12 from unmeasured anions. High gap means acid added: ketones, lactate, urate, salicylate, methanol. Normal gap means bicarbonate lost: diarrhoea, ileostomy, renal tubular acidosis.",
          caption: "The gap sorts the metabolic acidosis into two families with different treatments: acid added (treat the source — insulin for ketones, perfusion for lactate, dialysis or antidote for toxins) or bicarbonate lost (replace what the gut lost). Cholera is the Ghanaian normal-gap acidosis; diabetic ketoacidosis and septic shock are the high-gap ones.",
        },
        {
          type: "table",
          heading: "The four disorders, their causes on a Ghanaian unit, and what the nurse does",
          columns: ["Disorder", "Gas pattern", "Common causes here", "Nursing priorities"],
          rows: [
            ["Respiratory acidosis", "pH low, PaCO₂ high; bicarbonate normal if acute, raised if chronic", "Opioid or sedative overdose, exhaustion in severe asthma, COPD exacerbation and uncontrolled oxygen, Guillain–Barré, myasthenic crisis, tetanus, head injury, obesity, under-ventilation on the ventilator, pneumothorax", "Increase ventilation: stimulate, reverse opioids (naloxone), bilevel NIV for COPD, prepare for intubation; on the ventilator raise rate or tidal volume; controlled oxygen 88–92 per cent in CO₂ retainers; a rising CO₂ with a falling conscious level is an emergency, not a trend"],
            ["Respiratory alkalosis", "pH high, PaCO₂ low", "Pain, anxiety, fever, early sepsis, pulmonary embolism, hypoxia (altitude, pneumonia), salicylate poisoning, liver failure, pregnancy, over-ventilation on the ventilator, deliberate hyperventilation in raised intracranial pressure", "Treat the cause — analgesia, reassurance, oxygen; look for sepsis and embolism before calling it anxiety; reduce ventilator rate or volume; paraesthesia and carpopedal spasm come from the fall in ionised calcium"],
            ["Metabolic acidosis", "pH low, bicarbonate low, base deficit; PaCO₂ low from compensation (Kussmaul breathing)", "High gap: diabetic ketoacidosis, lactic acidosis of shock and sepsis, severe malaria, acute kidney injury, methanol, metformin, salicylate; normal gap: cholera and severe diarrhoea, fistula, renal tubular acidosis, saline overload", "Perfuse (fluids, vasopressors), treat the cause (insulin, antibiotics, antidote, dialysis); do not sedate the deep breathing — it is the compensation; bicarbonate only for severe acidaemia (pH below 7.1) with specific indications, and never as a substitute for ventilation; watch potassium, which rises as hydrogen ions move into cells and then falls as acidosis corrects"],
            ["Metabolic alkalosis", "pH high, bicarbonate high; PaCO₂ slightly raised", "Prolonged vomiting, nasogastric drainage, pyloric stenosis, loop and thiazide diuretics, hypokalaemia, excess bicarbonate or antacids, steroid excess", "Replace chloride and potassium (0.9 per cent saline with potassium chloride), stop or reduce diuretics, treat the vomiting; the alkalosis holds potassium low and the hypokalaemia sustains the alkalosis"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FLD-3140.svg",
          alt: "Why vomiting the stomach alkalinises the blood. Projectile vomiting of gastric contents only, no bile, loses hydrogen and chloride ions — the acid leaves the body — producing metabolic alkalosis with low chloride and low potassium. The classic picture: 3 to 6 weeks old, hungry after vomiting, vomit never bile-stained, olive-shaped mass and visible waves, pH high, chloride low, potassium low, paradoxical aciduria late on. Correct fluid and chloride first; this is never a surgical emergency. The site of the loss predicts the chemistry: lose acid from above the pylorus and the blood turns alkaline; lose alkali below and it turns acid.",
          caption: "The site of the loss predicts the gas: acid lost from above the pylorus (vomiting, nasogastric suction) gives a hypochloraemic, hypokalaemic metabolic alkalosis; alkali lost below it (diarrhoea, fistula, ileostomy) gives a normal-gap metabolic acidosis. Replace what the lost fluid contained.",
        },
        {
          type: "text",
          heading: "Mixed disorders and the limits of compensation",
          paragraphs: [
            "Critically ill patients rarely have one problem. A patient with septic shock and pneumonia may have a metabolic acidosis from lactate <em>and</em> a respiratory acidosis from exhaustion; the pH is then very low and the PaCO₂, instead of being low in compensation, is normal or high — a sign that the respiratory pump is failing and intubation is close. A vomiting patient with diabetic ketoacidosis may have a metabolic acidosis and a metabolic alkalosis at once, with a deceptively normal bicarbonate but a high anion gap. A patient with COPD (chronic respiratory acidosis, bicarbonate 34) who develops diarrhoea may present with a 'normal' pH that hides two serious disorders. The clues to a mixed picture are a compensation that does not match the formula, a pH on the wrong side of normal for the apparent compensation, an anion gap that does not fit, and a clinical story that explains more than one process. When the gas does not make sense, take another in an hour and look at the trend — and look harder at the patient.",
            "Two warnings about compensation. First, respiratory compensation has a floor: a patient cannot breathe fast enough to compensate for a bicarbonate of 5, and exhaustion follows — the child with cholera and Kussmaul breathing who 'settles' may be tiring, not improving. Second, a ventilated patient cannot compensate at all: his PaCO₂ is whatever the ventilator makes it, so a metabolic acidosis in a ventilated patient needs the nurse to recognise it and the rate to be increased, or the pH will fall unopposed. Conversely, when the ventilator is set to a 'normal' PaCO₂ in a patient with chronic retention and a bicarbonate of 34, the result is a severe alkalosis.",
          ],
        },
        {
          type: "table",
          heading: "Worked examples — interpret before you read the answer",
          columns: ["Patient and gas", "Interpretation", "Action"],
          rows: [
            ["A 24-year-old with type 1 diabetes, vomiting, breathing deeply: pH 7.12, PaCO₂ 2.4 kPa, HCO₃⁻ 7, Na 134, Cl 98, K 5.8, glucose 29, lactate 2.1", "Severe metabolic acidosis with respiratory compensation; anion gap 29 — diabetic ketoacidosis; potassium high now but total body potassium is low", "Fluids, fixed-rate insulin, potassium added once urine output confirmed and K below 5.5, hourly glucose and 2-hourly gas and potassium (lesson 5.2); do not sedate the breathing"],
            ["A 66-year-old with COPD, drowsy on a reservoir mask at 15 L/min: pH 7.22, PaCO₂ 10.4 kPa, PaO₂ 14, HCO₃⁻ 33", "Acute-on-chronic respiratory acidosis — the raised bicarbonate shows chronic retention; uncontrolled oxygen has removed his drive and he is retaining CO₂ to the point of narcosis", "Controlled oxygen by Venturi to SpO₂ 88–92 per cent; bilevel NIV now; repeat gas in one hour; prepare for intubation if pH falls or conscious level worsens"],
            ["A 35-year-old market woman, day 2 of cholera: pH 7.21, PaCO₂ 3.0, HCO₃⁻ 9, Na 136, Cl 112, K 2.9, lactate 1.4", "Normal-gap (hyperchloraemic) metabolic acidosis from bicarbonate loss, with hypokalaemia — the loss is from below the pylorus", "Rapid Ringer's lactate (which contains lactate the liver converts to bicarbonate), potassium replacement, ORS as soon as she can drink, strict output measurement"],
            ["A 50-year-old ventilated after a laparotomy for perforation, on noradrenaline: pH 7.18, PaCO₂ 6.2, HCO₃⁻ 16, lactate 6.8, base excess −11", "Metabolic (lactic) acidosis of septic shock, with no respiratory compensation because the ventilator rate is fixed — effectively a mixed picture", "Call the doctor: increase the ventilator rate, review perfusion — fluid responsiveness, vasopressor dose, source control, antibiotics — and repeat the lactate in two hours; a lactate that is not falling means the plan is not working"],
            ["A 28-year-old with asthma, now quiet and sleepy after two hours of nebulisers: pH 7.30, PaCO₂ 6.5, PaO₂ 9 on 60 per cent, HCO₃⁻ 24", "Early respiratory acidosis in acute severe asthma — the CO₂ should be low in an asthmatic who is working; a 'normal' or rising CO₂ means exhaustion and impending arrest", "This is life-threatening asthma: senior help, prepare for intubation, continuous nebulisation, magnesium, do not leave the bedside"],
            ["A 19-year-old after a road crash, restless: pH 7.52, PaCO₂ 3.2, HCO₃⁻ 23, lactate 3.5, Hb 7", "Respiratory alkalosis from pain, anxiety and hypoxia, with a rising lactate — concealed haemorrhage until proved otherwise", "Analgesia, oxygen, two large cannulae, cross-match, look for the bleeding; repeat lactate and haemoglobin"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Three mistakes the gas does not forgive",
          body: "Treating the number instead of the patient: a bicarbonate infusion for a lactic acidosis treats the printout and leaves the shock. Reassurance from a normal pH: a normal pH with an abnormal CO₂ and bicarbonate is a compensated or mixed disorder, and a 'normal' CO₂ in a tiring asthmatic or a child with severe acidosis is the warning before the arrest. And forgetting the oxygen: a PaO₂ of 10 kPa is acceptable on air and a disaster on 80 per cent oxygen — always read the PaO₂ against the FiO₂ and write both down.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "How the examiner tests this lesson",
          body: "You will be given a set of values and asked to name the disorder — apply the three steps and the answer falls out: pH 7.25, PaCO₂ 8.0, HCO₃⁻ 26 is acute respiratory acidosis; pH 7.50, PaCO₂ 5.5, HCO₃⁻ 34 is metabolic alkalosis; pH 7.36, PaCO₂ 8.5, HCO₃⁻ 36 is compensated (chronic) respiratory acidosis; pH 7.28, PaCO₂ 3.0, HCO₃⁻ 10 is metabolic acidosis with respiratory compensation. Know the normal ranges in kPa and mmHg, the anion gap formula and its two families, Kussmaul breathing as compensation rather than disease, the raised bicarbonate as the mark of the chronic CO₂ retainer, the one-hour repeat after starting NIV, the venous gas as adequate for pH and bicarbonate but not oxygen, and the sample rules: expel air, mix, run within 15 minutes or ice, record the FiO₂, press the radial site for five minutes.",
        },
      ],
      keyPoints: [
        "Normals: pH 7.35–7.45, PaCO₂ 4.7–6.0 kPa (35–45 mmHg), PaO₂ 11–13 kPa (80–100 mmHg) on air, bicarbonate 22–26 mmol/L, base excess −2 to +2, lactate below 2 mmol/L, anion gap 8–12; sample without air, mixed, run within 15 minutes or iced, FiO₂ recorded; radial site pressed for five minutes.",
        "Three steps: pH says which way; the value that moved the same way as the pH (CO₂ = respiratory, bicarbonate = metabolic) is the culprit; the other value moving the opposite way is compensation — partial if the pH is still abnormal, complete if normal, never overshooting; the lungs compensate in minutes, the kidneys in days.",
        "The anion gap (Na − [Cl + HCO₃]) sorts every metabolic acidosis: high gap means acid added (ketones, lactate, uraemia, methanol, salicylate, metformin); normal gap means bicarbonate lost (cholera and diarrhoea, fistula, renal tubular acidosis, saline overload).",
        "Respiratory acidosis is hypoventilation (opioids, exhaustion, COPD on uncontrolled oxygen, neuromuscular disease, a ventilator set too low) and is treated by ventilating, not by more oxygen; respiratory alkalosis is hyperventilation from pain, anxiety, fever, early sepsis, embolism or an over-set ventilator.",
        "Metabolic acidosis is treated by perfusion and the cause — never by sedating the Kussmaul breathing and rarely by bicarbonate; metabolic alkalosis from vomiting, gastric drainage or diuretics is corrected with chloride and potassium; potassium rises in acidosis and falls as it corrects.",
        "Oxygenation is read against the FiO₂: PaO₂ in kPa should be roughly the oxygen percentage minus 10; a PaO₂/FiO₂ ratio below 300 mmHg on PEEP of 5 is ARDS (below 200 moderate, below 100 severe); a venous gas serves for pH, bicarbonate and lactate but not oxygen.",
        "Mixed disorders are suspected when compensation does not fit, the pH sits on the wrong side, or the gap does not match; a ventilated patient cannot compensate so his rate must be adjusted for him; a normal or rising CO₂ in a tiring asthmatic or an acidotic child is the sign of impending arrest, and a lactate that does not fall means the treatment is not working.",
      ],
      quiz: {
        questionIds: ["NG-MOD-CC-003", "NG-MOD-CC-004"],
        categories: ["med-surg", "fluid-electrolyte"],
        keywords: ["blood gas","abg","acidosis","alkalosis","paco2","bicarbonate","anion gap","compensat","lactate of","base excess","hypoxaemia","hypercapn","respiratory acidosis","metabolic acidosis","respiratory alkalosis","metabolic alkalosis","ketoacidosis","carbon dioxide retention","hyperkal","hypokal","oxygen saturation","pulse oximet","rib fracture","spo2","hyperventilat","ketone","arrhythm","salbutamol","obstruction","ileus"]
      },
    },
    {
      slug: "fluid-and-electrolyte-emergencies-in-the-critically-ill",
      title: "Fluid and electrolyte emergencies in the critically ill: volume status, fluid responsiveness, potassium, sodium, magnesium, calcium and phosphate",
      minutes: 18,
      objectives: [
        "Describe the body fluid compartments, where each intravenous fluid goes, and the four phases of fluid therapy in critical illness — resuscitation, optimisation, stabilisation and de-escalation.",
        "Assess volume status and fluid responsiveness at the bedside and recognise and manage fluid overload.",
        "Manage hyperkalaemia and hypokalaemia safely, including the ECG changes, the treatment sequence and the rules for potassium replacement.",
        "Correct sodium, magnesium, calcium and phosphate disorders within the limits that protect the brain and the heart, and prevent and recognise refeeding syndrome.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Where the water is, and where the fluid you hang goes",
          paragraphs: [
            "About 60 per cent of an adult's weight is water — roughly 42 litres in a 70-kg man — two-thirds of it inside the cells and one-third outside; of the outside third, three-quarters is interstitial and only one-quarter, about 3 litres, is plasma. Everything you can measure at the bedside — blood pressure, capillary refill, jugular venous pressure, urine output — reports on that smallest box. Water follows sodium, and plasma is held in the vessels by albumin's oncotic pull against the hydrostatic push; when hydrostatic pressure rises (heart failure, a litre too many), when albumin falls (sepsis, liver failure, malnutrition, nephrotic syndrome) or when the capillary wall leaks (sepsis, burns, pancreatitis, anaphylaxis), water moves into the interstitium and the patient swells while the circulation empties. Critical illness is largely the story of a leaking capillary.",
            "<strong>Isotonic crystalloids</strong> — 0.9 per cent saline, Ringer's lactate — stay in the extracellular space, so of a litre infused only about a quarter remains in the plasma after an hour and the rest is interstitial; this is why resuscitation needs volume, and why oedema follows. Balanced solutions (Ringer's lactate, Hartmann's) are preferred for most resuscitation because large volumes of 0.9 per cent saline cause hyperchloraemic acidosis and worsen kidney injury; saline remains the fluid for hypochloraemic alkalosis (vomiting), for raised intracranial pressure and for running with blood. <strong>Hypotonic fluids</strong> — 5 per cent dextrose, 0.45 per cent saline — distribute into total body water, two-thirds of it into cells, so they expand the circulation hardly at all and swell the brain: never for resuscitation, dangerous in head injury and hyponatraemia, useful as maintenance water and as the vehicle for drugs. <strong>Hypertonic saline</strong> (3 per cent) pulls water out of cells and is a specialist drug for raised intracranial pressure and severe symptomatic hyponatraemia. <strong>Colloids</strong> — albumin, gelatins — stay longer in the plasma in theory but leak in sepsis; starches are no longer used because they damage kidneys; albumin has a place in cirrhosis and after large-volume paracentesis. Blood is the fluid for haemorrhage (lesson 6.1).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FLD-2138.svg",
          alt: "Where the water sits and what moves it. Water follows salt; salt does not follow water. Total body water is roughly two-thirds of you: about two-thirds inside the cells, the rest between cells (interstitial) and in plasma, the smallest space and the one you can measure — blood pressure tells you about the small box only. Two forces: hydrostatic pressure pushes water out and rises in heart failure and venous obstruction; oncotic pressure from albumin pulls water in and falls in liver disease, kidney loss and malnutrition; oedema happens when pushing out beats pulling in — a child with kwashiorkor and a man in heart failure both swell, for opposite reasons. What each fluid does: isotonic (normal saline, Ringer's lactate) stays in the space you put it in and expands the circulation — the default resuscitation fluid; hypotonic (0.45 per cent saline, 5 per cent dextrose once the sugar is used) moves water into cells — never for shock, dangerous if the brain is swollen; hypertonic 3 per cent saline pulls water out of cells — specialist use, slow, with close monitoring.",
          caption: "Plasma is the smallest compartment and the only one the monitor sees. Isotonic fluid expands it; hypotonic fluid swells cells including brain cells; hypertonic fluid shrinks them. Oedema in the ICU is usually a leaking capillary plus the litres that were needed to keep the small box full.",
        },
        {
          type: "text",
          heading: "The four phases of fluid therapy, and the harm of too much",
          paragraphs: [
            "Fluid is a drug with a dose, an indication and a toxicity, and its use in critical illness follows four phases, remembered as <strong>ROSE</strong>. <em>Resuscitation</em> — the first minutes to hours of shock: boluses of 250 to 500 mL of balanced crystalloid (10 to 20 mL/kg in a child, with the cautions of lesson 7.1), each followed by reassessment, aiming at perfusion rather than a number. <em>Optimisation</em> — the next hours: fluid given only when the patient is shown to be fluid-responsive, titrated to lactate, urine output and the vasopressor requirement. <em>Stabilisation</em> — days: maintenance and replacement of measured losses only, with a neutral balance. <em>Evacuation</em> (de-escalation) — removal of the accumulated excess by diuretics or ultrafiltration once the shock has resolved. A positive balance of several litres by day three of sepsis is associated with longer ventilation, kidney injury, poor wound healing, abdominal compartment syndrome and death; the fluid that saved the patient on day one is the fluid that is drowning him on day four.",
            "<strong>Maintenance</strong> for an adult who cannot drink is about 25 to 30 mL/kg/day of water with 1 mmol/kg/day each of sodium and potassium and 50 to 100 g of glucose, reduced in heart or kidney failure and in the elderly; the ward habit of 'a litre eight-hourly of normal saline' for every patient gives 3 litres and 460 mmol of sodium a day and causes the oedema and hyperchloraemia the ward then treats with diuretics. Measured losses — vomit, nasogastric aspirate, diarrhoea, stoma, fistula, drains, burns, polyuria — are replaced with a fluid that contains what was lost.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FLD-3141.svg",
          alt: "Read the site of the loss. Vomiting and gastric aspirate lose hydrogen, chloride and potassium — alkalosis. Diarrhoea, ileostomy and fistula lose bicarbonate, potassium and sodium — acidosis. Sweat, burns and fever lose water, sodium and chloride — volume depletion. Loop and thiazide diuretics lose potassium, sodium, magnesium and hydrogen — alkalosis and low potassium. Replace what that fluid actually contained: gastric losses need chloride and potassium; lower gut losses need bicarbonate.",
          caption: "Replacement fluid matches the loss: 0.9 per cent saline with potassium for gastric losses, Ringer's lactate for diarrhoea and fistula, and potassium and magnesium together for the patient on diuretics.",
        },
        {
          type: "text",
          heading: "Assessing volume status and fluid responsiveness",
          paragraphs: [
            "No single sign tells you whether a critically ill patient needs fluid. The <strong>history</strong> (losses, intake, fever, surgery), the <strong>examination</strong> (thirst, dry axillae and mucosae, reduced skin turgor on the sternum, cool mottled peripheries, capillary refill above 2 to 3 seconds, collapsed neck veins, postural fall in pressure, oliguria) and the <strong>chart</strong> (cumulative balance, daily weight — the most honest record of fluid in the ICU — and the trend in heart rate and pressure) are read together. Signs of overload are a raised jugular venous pressure, new crackles at the lung bases, a third heart sound, worsening oxygenation, peripheral and sacral oedema, a rising central venous pressure and a weight above admission. The central venous pressure as a single number predicts neither; its trend after a bolus is more useful.",
            "<strong>Fluid responsiveness</strong> means that a bolus will increase the stroke volume — only about half of hypotensive ICU patients are responders, and fluid given to a non-responder adds oedema without perfusion. Bedside tests: the <em>passive leg raise</em> — from semi-recumbent, lower the head to flat and raise the legs to 45 degrees for one to two minutes, returning about 300 mL of blood to the heart; a rise in pulse pressure or stroke volume of more than 10 per cent (or, less reliably, in blood pressure) predicts a response and the 'bolus' is reversible; the <em>mini fluid challenge</em> — 250 mL over five to ten minutes with the same measurement; and, on the arterial line of a ventilated patient in sinus rhythm with no spontaneous breaths, the <em>pulse pressure variation</em> with the respiratory cycle, above 12 to 13 per cent indicating responsiveness. Ultrasound of the inferior vena cava and the heart is increasingly available. The nurse's part is to perform the manoeuvre correctly, record the response and stop the fluid when the patient stops responding or shows overload.",
          ],
        },
        {
          type: "text",
          heading: "Potassium: both ends stop the heart",
          paragraphs: [
            "Serum potassium is 3.5 to 5.0 mmol/L and represents 2 per cent of the body's store; the rest is inside cells, which is why serum values move fast and why insulin, salbutamol, alkalosis and adrenaline (all of which drive potassium into cells) can lower it within an hour while acidosis, cell breakdown and stored blood raise it. <strong>Hyperkalaemia</strong> (above 5.5; severe above 6.5 or with ECG changes) comes from acute and chronic kidney injury, potassium-sparing diuretics, ACE inhibitors, crush and burns, rhabdomyolysis, tumour lysis, acidosis including DKA, massive transfusion, suxamethonium, and from the sample — haemolysis, a tight tourniquet, a fist clenched — which is why an unexpected result is repeated on a gas while treatment starts. The ECG moves through tall peaked T waves, flattened P waves and a prolonged PR, a widening QRS, a sine wave and asystole or ventricular fibrillation; the serum level at which this happens varies, so the ECG is treated, not only the number. The sequence is <strong>protect, shift, remove</strong>: 10 mL of 10 per cent calcium gluconate (or calcium chloride) over five to ten minutes with cardiac monitoring, repeated until the QRS narrows — it stabilises the myocardium for 30 to 60 minutes and does nothing to the potassium; then 10 units of soluble insulin in 25 g of glucose (50 mL of 50 per cent dextrose, or 125 mL of 20 per cent) over 15 to 30 minutes, lowering potassium by about 1 mmol/L for several hours, with hourly glucose for six hours because late hypoglycaemia is common; nebulised salbutamol 10 to 20 mg as an adjunct; then removal — loop diuretic if passing urine, a potassium binder, and dialysis for the anuric or refractory patient. Stop every source: supplements, the drugs, the potassium in the feed and the fluids.",
            "<strong>Hypokalaemia</strong> (below 3.5; severe below 2.5) follows vomiting, diarrhoea, nasogastric drainage, loop and thiazide diuretics, insulin and salbutamol, alkalosis, refeeding, poor intake and magnesium deficiency; it causes weakness, ileus, cramps, a flattened T wave with a U wave, a prolonged QT, arrhythmias and makes digoxin toxic at normal doses. Oral replacement is preferred when the gut works. Intravenous potassium is <strong>never given as a push or bolus</strong>: it is diluted (not more than 40 mmol in a litre peripherally), infused by pump at no more than 10 mmol/h through a peripheral line, and up to 20 mmol/h only through a central line with continuous ECG monitoring in a high-dependency setting; the bag is labelled, the urine output is confirmed before it starts, and the magnesium is checked and replaced, because potassium will not correct while magnesium is low. Pre-mixed bags are safer than adding ampoules at the bedside; concentrated potassium chloride ampoules are stored separately and treated as a controlled drug.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FLD-2156.svg",
          alt: "Potassium: the narrowest window in the body. Normal 3.5 to 5.0 mmol/L; both ends stop the heart. Too low — causes: vomiting, diarrhoea, water tablets, poor intake, insulin, salbutamol; signs: weak floppy muscles, cramps, ileus, palpitations, flattened T wave with a U wave; the lethal pairing is low potassium plus digoxin; check magnesium too — potassium will not correct while magnesium is low. Too high — causes: kidney failure, crush injury, burns, acidosis, stored blood, some blood pressure tablets; signs: often none until the arrest; ECG first: tall peaked T waves, then a wide QRS, then a sine wave, then asystole; order of treatment: calcium to protect the heart, then insulin with glucose to move it into cells, then something to remove it from the body. The rule that kills patients when it is broken: concentrated potassium is never given as a rapid push or bolus — always diluted, always infused slowly, peripherally not faster than about 10 mmol per hour; faster rates need a central line, cardiac monitoring and a high-dependency setting; check the urine output first.",
          caption: "Protect, shift, remove: calcium for the heart, insulin with glucose and salbutamol to move potassium into cells, diuretic, binder or dialysis to remove it. And the replacement rule: diluted, by pump, 10 mmol per hour peripherally, never a bolus.",
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FLUID-0002.svg",
          alt: "Hyperkalaemia with ECG changes: peaked T waves — give intravenous calcium first to stabilise the myocardium.",
          caption: "The ECG, not the laboratory value, decides the urgency. Tall peaked T waves or a widening QRS mean calcium now, under monitoring, before the result is even repeated.",
        },
        {
          type: "table",
          heading: "Sodium, magnesium, calcium and phosphate — the ICU emergencies",
          columns: ["Disorder", "Causes in the critically ill", "Danger and signs", "Treatment and the limits"],
          rows: [
            ["Hyponatraemia (Na below 135; severe below 120 or symptomatic)", "Excess water: SIADH (pneumonia, brain injury, drugs), hypotonic fluids, heart, liver and kidney failure, diuretics (thiazides), adrenal insufficiency, hypothyroidism, polydipsia, cerebral salt wasting after brain injury", "Brain swelling: nausea, headache, confusion, seizures, coma; acute (under 48 hours) is more dangerous than chronic", "Symptomatic or acute: 150 mL of 3 per cent saline over 20 minutes, repeated to raise sodium by 4–6 mmol/L and stop seizures. Otherwise treat the cause and restrict water. Never correct by more than 8–10 mmol/L in 24 hours (6 in high-risk patients) — overcorrection causes osmotic demyelination with permanent paralysis; check sodium 2–4-hourly and, if it overshoots, give 5 per cent dextrose or desmopressin on medical instruction"],
            ["Hypernatraemia (Na above 145; severe above 160)", "Water loss: fever, burns, diarrhoea, osmotic diuresis (hyperglycaemia, mannitol), diabetes insipidus after brain injury; too little water in tube feeds; sodium loading (bicarbonate, saline)", "Thirst, lethargy, irritability, seizures, intracranial haemorrhage from brain shrinkage", "Replace water — enterally where possible, or 5 per cent dextrose or 0.45 per cent saline — lowering sodium by no more than 10 mmol/L in 24 hours (about 0.5 mmol/L/h) to avoid cerebral oedema; treat diabetes insipidus with desmopressin; measure urine output hourly"],
            ["Hypomagnesaemia (Mg below 0.7 mmol/L)", "Diarrhoea, diuretics, alcohol, refeeding, proton pump inhibitors, aminoglycosides, DKA, severe malnutrition", "Arrhythmias (torsades de pointes), refractory hypokalaemia and hypocalcaemia, tremor, tetany, seizures", "Intravenous magnesium sulphate 8–20 mmol (2–5 g) over 20 minutes to several hours by pump; faster (2 g over 10 minutes) for torsades or seizures; monitor reflexes, respiration and blood pressure; the oral route for mild deficiency; replace with potassium"],
            ["Hypocalcaemia (ionised Ca below 1.1 mmol/L)", "Massive transfusion (citrate), sepsis, pancreatitis, rhabdomyolysis, after thyroid or parathyroid surgery, vitamin D deficiency, hypomagnesaemia, alkalosis", "Perioral tingling, carpopedal spasm, Trousseau's and Chvostek's signs, laryngospasm, prolonged QT, hypotension, seizures", "10–20 mL of 10 per cent calcium gluconate over 10 minutes then an infusion; through a large vein — extravasation causes necrosis; use ionised calcium on the gas, not total calcium corrected for albumin, in the critically ill"],
            ["Hypercalcaemia (corrected Ca above 2.6; severe above 3.5)", "Malignancy (myeloma, breast, lung, HTLV-1-associated lymphoma in Ghana), primary hyperparathyroidism, immobilisation, vitamin D excess", "Polyuria and dehydration, confusion, constipation, pancreatitis, short QT, arrest", "Litres of 0.9 per cent saline first, then bisphosphonate (zoledronic acid); calcitonin for rapid effect; stop calcium and vitamin D; loop diuretic only after rehydration"],
            ["Hypophosphataemia (PO₄ below 0.8; severe below 0.3 mmol/L)", "Refeeding, DKA treatment, alcohol withdrawal, respiratory alkalosis, sepsis, diuretics, continuous renal replacement", "Respiratory muscle weakness and failure to wean, rhabdomyolysis, haemolysis, cardiac failure, confusion", "Intravenous phosphate (for example 20–30 mmol over 6–12 hours) with calcium monitoring; oral or enteral for mild cases"],
          ],
        },
        {
          type: "text",
          heading: "Refeeding syndrome — the patient who was starving",
          paragraphs: [
            "A patient who has eaten little for five days or more — the malnourished child, the man with oesophageal cancer, the woman after weeks of vomiting, the alcohol-dependent patient, the patient who has been nil by mouth on 5 per cent dextrose for a week — has depleted intracellular phosphate, potassium and magnesium with normal or near-normal serum levels. When carbohydrate arrives, insulin surges and drives glucose, phosphate, potassium and magnesium into cells and water follows; within one to three days the serum phosphate collapses and the patient develops weakness, respiratory failure, arrhythmias, heart failure, confusion, seizures and sometimes death. Thiamine is consumed in the burst of carbohydrate metabolism and Wernicke's encephalopathy can be precipitated. <strong>Prevention</strong>: identify the at-risk patient (little intake for five days, BMI below 18.5 or 16, unintentional weight loss, low electrolytes before feeding, alcohol, insulin, diuretics); give thiamine 200 to 300 mg before the first feed and daily for ten days with a multivitamin; start feeding at 10 to 20 kcal/kg/day (as low as 5 in the highest-risk) and build to target over four to seven days; check phosphate, potassium, magnesium and glucose daily for the first week and replace before and during feeding; and avoid the dextrose drip that starts refeeding by accident. The treatment of established refeeding is to slow the feed, not stop it, and to replace the electrolytes aggressively.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "How the examiner tests this lesson",
          body: "The first drug for hyperkalaemia with ECG changes is calcium gluconate (it protects the heart; it does not lower the potassium); insulin with glucose shifts; dialysis removes. The potassium replacement rules are examined every year: never a bolus, maximum 10 mmol per hour peripherally, 40 mmol per litre, by pump, after confirming urine output, with magnesium checked. Sodium correction is limited to 8–10 mmol/L per 24 hours (demyelination if hyponatraemia is corrected too fast; cerebral oedema if hypernatraemia is). Hypotonic fluids are never used for shock or head injury; 0.9 per cent saline in large volumes causes hyperchloraemic acidosis; a passive leg raise is a reversible fluid challenge; daily weight is the most reliable record of fluid balance; and refeeding syndrome is prevented with thiamine before feeding, a slow start and daily phosphate.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "The nurse's fluid round",
          body: "Every shift, for every patient: cumulative balance since admission, today's weight against admission weight, the rate and content of every bag and whether it is still prescribed and still needed, the measured losses and what is replacing them, the potassium, sodium, magnesium and phosphate on today's results against yesterday's, the glucose if insulin is running, and the one question that prevents most harm — is this patient still in the resuscitation phase, or are we now giving fluid out of habit?",
        },
      ],
      keyPoints: [
        "Plasma is about 3 litres of a 42-litre total; isotonic crystalloid stays extracellular (a quarter remains in plasma after an hour), balanced solutions are preferred for resuscitation, large volumes of 0.9 per cent saline cause hyperchloraemic acidosis, hypotonic fluids swell cells and are never used for shock or head injury, 3 per cent saline is a specialist drug, and blood is the fluid for haemorrhage.",
        "Fluid therapy has four phases — resuscitation (250–500 mL boluses with reassessment), optimisation (only to fluid responders), stabilisation (neutral balance) and evacuation (remove the excess); a positive balance of litres by day three worsens ventilation, kidney injury and survival; maintenance is 25–30 mL/kg/day with 1 mmol/kg of sodium and potassium, and losses are replaced with what they contained.",
        "Volume status is read from history, examination, cumulative balance and daily weight together; fluid responsiveness is tested by a passive leg raise or a 250-mL mini-challenge with a 10 per cent rise in pulse pressure or stroke volume, or pulse pressure variation above 12–13 per cent on the arterial line of a ventilated patient in sinus rhythm; only half of hypotensive patients respond.",
        "Hyperkalaemia (above 6.5 or ECG changes — peaked T, wide QRS, sine wave) is treated by protect (10 mL 10 per cent calcium gluconate, repeat until the QRS narrows), shift (10 units insulin in 25 g glucose, hourly glucose for six hours; nebulised salbutamol) and remove (diuretic, binder, dialysis), with every source stopped and the sample repeated on a gas.",
        "Intravenous potassium is never a bolus: diluted to no more than 40 mmol/L, by pump at no more than 10 mmol/h peripherally (20 mmol/h centrally with monitoring), after confirming urine output and with magnesium replaced; hypokalaemia with digoxin is a lethal pairing.",
        "Sodium is corrected slowly — hyponatraemia by no more than 8–10 mmol/L in 24 hours (osmotic demyelination), with 150 mL of 3 per cent saline only for seizures or severe symptoms; hypernatraemia by no more than 10 mmol/L in 24 hours (cerebral oedema) with water, enterally where possible; magnesium is replaced by pump with reflexes watched, ionised calcium is used in the critically ill and calcium gluconate given through a large vein, and hypophosphataemia weakens the respiratory muscles and prevents weaning.",
        "Refeeding syndrome follows carbohydrate after five or more days of little intake: phosphate, potassium and magnesium collapse within one to three days; prevent it with thiamine before feeding, a start at 10–20 kcal/kg/day building over four to seven days, daily electrolytes for a week and replacement before and during feeding; slow the feed, do not stop it.",
      ],
      quiz: {
        questionIds: ["NG-MOD-CC-005", "NG-MOD-CC-016"],
        categories: ["fluid-electrolyte", "med-surg"],
        keywords: ["potassium","hyperkal","hypokal","calcium gluconate","qrs","t wave","hyponatr","hypernatr","sodium","hypertonic saline","hypomagnes","refeeding","fluid balance","fluid overload","central venous","ringer","albumin","colloid","crystalloid","dextrose","osmol","siadh","tonicity","isotonic","third space","diuretic","furosemide","frusemide","hypovolaemic","infusion rate","drops per minute","cross-match","blood products","transfusion reaction","massive transfusion","creatinine","urea","capillary refill","fluid restriction","daily weight","dehydrat","rehydrat","pitting","compensated"]
      },
    },
  ],
};
