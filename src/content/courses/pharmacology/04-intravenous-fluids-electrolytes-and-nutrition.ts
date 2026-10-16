import type { CourseModule } from "../types";

export const intravenousFluidsElectrolytesAndNutrition: CourseModule = {
  slug: "intravenous-fluids-electrolytes-and-parenteral-nutrition",
  title: "Intravenous fluids, electrolytes and parenteral nutrition",
  summary: "Intravenous fluid as a prescribed drug — the body's fluid compartments and what moves water between them, crystalloids and colloids and where each one goes, the five reasons to prescribe fluid and the five Rs, choosing the fluid for resuscitation, maintenance and replacement, fluid balance charting, daily weights and the recognition and first management of overload, the patients who overload easily and the children who become hyponatraemic — then the electrolytes: potassium's narrow window and the rules that make its replacement safe, sodium, calcium, magnesium and phosphate replacement, the treatment of hyperkalaemia, and parenteral nutrition with its dedicated line, its monitoring and the refeeding syndrome.",
  lessons: [
    {
      slug: "intravenous-fluid-therapy-choosing-prescribing-and-monitoring-fluids",
      title: "Intravenous fluid therapy — choosing, prescribing and monitoring fluids",
      minutes: 18,
      objectives: [
        "Describe the body's fluid compartments and the forces that move water between them, and explain why isotonic, hypotonic and hypertonic fluids end up in different places.",
        "Compare the crystalloids and colloids in use in Ghana — 0.9% sodium chloride, Ringer's lactate, 5% and 10% dextrose, dextrose saline, hypertonic saline, gelatins and albumin — and choose the right fluid for resuscitation, routine maintenance, replacement of losses and redistribution.",
        "Assess fluid status, keep an accurate fluid balance chart and daily weight, and calculate and interpret a 24-hour balance.",
        "Recognise fluid overload and hyponatraemia early, name the patients who overload easily, and take the first actions when an infusion has become the problem.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Where the water sits and what moves it",
          paragraphs: [
            "Water is about <strong>60% of an adult's body weight</strong> (more in infants, less in older adults and the obese): roughly <strong>two-thirds inside the cells</strong> and one-third outside, and of that outside third about three-quarters sits <strong>between the cells</strong> (interstitial) and only a quarter — about 3 litres of plasma in a 70 kg adult — in the <strong>vessels</strong>. The plasma is the smallest compartment and the only one the blood pressure tells you about. Water follows salt: <strong>sodium</strong> is held outside the cells and <strong>potassium</strong> inside, so a fluid that contains sodium at plasma concentration stays in the extracellular space, while water without salt distributes through all the compartments. Across the capillary wall two forces compete — <strong>hydrostatic pressure</strong> pushes water out (raised in heart failure and venous obstruction) and the <strong>oncotic pressure</strong> of albumin pulls it in (lost in liver disease, nephrotic syndrome and malnutrition) — which is why those conditions produce oedema while the circulation itself may be under-filled.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FLD-2138.svg",
          alt: "Where the water sits and what moves it — total body water about two-thirds of body weight, two-thirds of it inside the cells and the rest between the cells and in the plasma, which is the smallest space and the only one blood pressure measures; hydrostatic pressure pushes water out and oncotic pressure from albumin pulls it in; water follows salt and salt does not follow water.",
          caption: "Blood pressure reports on the smallest box. A patient can be litres overloaded in the interstitial space and still be under-filled in the vessels, and a litre of salt-free water spreads through every compartment so that very little of it stays where a shocked patient needs it.",
        },
        {
          type: "table",
          heading: "The fluids on the shelf — composition and where each one goes",
          columns: ["Fluid", "What it contains (per litre)", "Where it goes and what it is for", "Cautions"],
          rows: [
            ["<strong>0.9% sodium chloride</strong> ('normal saline')", "Sodium 154 mmol, chloride 154 mmol; isotonic (308 mOsm/L).", "Stays in the extracellular space, about a quarter to a third in the vessels — resuscitation, replacement of gastric losses, the diluent for most drugs, the only fluid to run with blood.", "Large volumes cause hyperchloraemic acidosis; it is preferred over Ringer's lactate when the potassium is high; contains no potassium, calcium or glucose."],
            ["<strong>Ringer's lactate</strong> (Hartmann's, compound sodium lactate)", "Sodium 131, chloride 111, potassium 5, calcium 2, lactate 29 mmol; isotonic (278 mOsm/L).", "Balanced crystalloid closest to plasma — resuscitation in shock, trauma, burns, Plan C in children, surgical maintenance; the lactate is metabolised to bicarbonate.", "Contains calcium, so it clots in a line with blood; contains potassium, so caution in hyperkalaemia and renal failure; avoid in severe liver failure (lactate not metabolised)."],
            ["<strong>5% dextrose</strong> (glucose 5%)", "Glucose 50 g (200 kcal), no electrolytes; isotonic in the bag but the glucose is used within minutes, leaving free water.", "Distributes through all compartments — supplies water to a patient who cannot drink and a little energy; the diluent for some drugs.", "<strong>Not a resuscitation fluid</strong> — it does not stay in the circulation and will not restore a blood pressure; excess causes hyponatraemia and cerebral oedema, especially in children and after surgery."],
            ["<strong>Dextrose saline</strong> (4% glucose with 0.18% sodium chloride; or 5% glucose with 0.45% sodium chloride)", "Glucose 40 g, sodium 30 mmol (0.18%); the 0.45% version has sodium 77 mmol.", "Routine maintenance in an adult who cannot eat or drink — water, some sodium and some glucose; the 0.45% version with added potassium is used in some paediatric protocols.", "0.18% saline is hypotonic once the glucose is used and causes hyponatraemia in children — isotonic maintenance fluids with glucose are now preferred for them."],
            ["<strong>10% dextrose</strong>", "Glucose 100 g (400 kcal).", "Treatment of hypoglycaemia (150–200 mL in adults, 2 mL/kg in children) and neonatal maintenance; the bridge when parenteral nutrition stops suddenly.", "Irritant to peripheral veins at high concentrations; 50% dextrose scleroses veins and is used in small volumes only."],
            ["<strong>Hypertonic saline</strong> (3%)", "Sodium 513 mmol.", "Specialist use for symptomatic severe hyponatraemia and raised intracranial pressure, slowly, with hourly sodium checks.", "Rapid correction of sodium causes osmotic demyelination; central line preferred."],
            ["<strong>Colloids</strong> — gelatins (Gelofusine, Haemaccel), albumin 4–5% and 20%", "Large molecules that hold water in the vessels for longer.", "Volume expansion when crystalloid alone is failing and blood is not yet available; albumin in large-volume paracentesis and some nephrotic and burns protocols.", "Anaphylaxis (gelatins), cost, no oxygen-carrying capacity; starches are no longer recommended; colloids do not replace blood in haemorrhage."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MDA-1099.svg",
          alt: "Choosing an intravenous fluid around one question — what has the patient lost and where do you want the fluid to go: isotonic fluids such as 0.9% saline and Ringer's lactate stay in the vessels and are used for shock, bleeding, severe dehydration and burns; hypotonic fluids such as half-strength saline and 5% dextrose once the sugar is used move into the cells and are never given in head injury; hypertonic fluids such as 3% saline and 50% dextrose pull water out of cells and are for specialist use; and why 5% dextrose is not a resuscitation fluid.",
          caption: "Ask what the patient has lost and where you want the fluid to go. Blood and plasma lost from the vessels are replaced with a fluid that stays in the vessels; water lost from the whole body is replaced with water — and 5% dextrose is water once the sugar has gone.",
        },
        {
          type: "text",
          heading: "The five reasons to prescribe fluid — the five Rs",
          paragraphs: [
            "<strong>Resuscitation</strong>: the patient in shock (systolic below 90–100 mmHg, pulse over 100–110, capillary refill over 2 seconds, cold peripheries, reduced consciousness, oliguria) receives an isotonic crystalloid <strong>bolus — 500 mL over 10–15 minutes in an adult (250 mL in heart failure), 20 mL/kg in a child (10 mL/kg in malnutrition, trauma or cardiac disease)</strong> — and is <strong>reassessed</strong> after each bolus for response and for overload; blood replaces blood once it is available, and a patient who needs more than 2 litres without responding needs blood and a surgeon, not a third litre. <strong>Routine maintenance</strong> for an adult who cannot take fluid by mouth is about <strong>25–30 mL/kg/day of water, 1 mmol/kg/day each of sodium and potassium, and 50–100 g/day of glucose</strong> to limit ketosis — roughly 2 litres a day for a 70 kg adult, less in the old, the frail, the cardiac and the renal — given as dextrose saline with potassium or alternating bags, and <strong>reviewed every day</strong> with the question of whether it can stop. <strong>Replacement</strong> adds back measured abnormal losses — vomiting and nasogastric aspirate (water, sodium, chloride, potassium and acid: 0.9% saline with potassium), diarrhoea and stoma output (water, sodium, potassium and bicarbonate: Ringer's lactate), fever, sweating, polyuria, drains and fistulae — and <strong>redistribution</strong> recognises the patient with sepsis, pancreatitis, bowel obstruction or hypoalbuminaemia whose fluid has leaked into the third space and who is oedematous and intravascularly dry at the same time. The fifth R is <strong>reassessment</strong>: every fluid prescription has a review time, and intravenous fluid stops the day the patient can drink.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FLD-3141.svg",
          alt: "Table matching the site of fluid loss to the electrolytes lost and the resulting acid–base disturbance — gastric losses cause a hypochloraemic, hypokalaemic metabolic alkalosis while lower-gut losses cause a hyperkalaemic or hypokalaemic metabolic acidosis with bicarbonate loss.",
          caption: "Replace what was lost: vomiting and nasogastric aspirate lose acid, chloride and potassium; diarrhoea, stomas and fistulae lose bicarbonate and potassium. The site of the loss chooses the replacement fluid.",
        },
        {
          type: "table",
          heading: "Assessing fluid status and keeping the chart",
          columns: ["Element", "What to do", "What it tells you"],
          rows: [
            ["History and examination", "Thirst, intake, urine, vomiting and diarrhoea; pulse, blood pressure lying and standing, capillary refill, jugular venous pressure, skin turgor, mucous membranes, sunken eyes, oedema, lung bases, mental state.", "Depletion: tachycardia, postural drop, dry membranes, slow refill, oliguria, confusion. Overload: raised JVP, basal crackles, oedema, breathlessness."],
            ["<strong>Daily weight</strong>", "Same scale, same time, same clothing, before breakfast, after voiding; charted.", "The most accurate fluid balance measure: <strong>1 kg = 1 litre</strong>. A rise of 1.4 kg in a day is 1.4 litres retained whatever the chart says."],
            ["<strong>Fluid balance chart</strong>", "Record every intake — oral, nasogastric, intravenous fluids and drug volumes, flushes, blood — and every output — urine (measured, not estimated), vomit, aspirate, stool volume if liquid, drains, wound and stoma losses — with running totals; add about 500–800 mL for insensible losses (more with fever, tachypnoea and the tropics) when interpreting.", "A 24-hour intake of 2,400 mL against an output of 900 mL is a <strong>positive balance of about 1,500 mL</strong>; with a weight gain of 1.4 kg it confirms retention and the prescription is reviewed, not continued. Output must be recorded as carefully as intake — a chart with a full intake column and an empty output column is a chart that cannot be interpreted."],
            ["Urine output", "Hourly in the acutely ill (catheter and urometer); minimum 0.5 mL/kg/h in adults, 1 mL/kg/h in children.", "The first sign of inadequate circulation and of improvement; falling output with a rising balance suggests kidney injury or overload, not a need for more fluid."],
            ["Laboratory", "Urea, creatinine, sodium, potassium, chloride, bicarbonate, glucose, haemoglobin; lactate in shock.", "Rising urea out of proportion to creatinine suggests depletion; falling sodium suggests too much free water."],
            ["The infusion itself", "Rate counted hourly, pump totals reconciled with the chart, cannula site inspected, bags labelled with additives, time started and time finished.", "The prescribed volume is not the infused volume; chart what actually went in."],
          ],
        },
        {
          type: "text",
          heading: "Fluid overload and hyponatraemia — the harms of the drip",
          paragraphs: [
            "The commonest fluid error on a ward is <strong>too much, too fast, to the wrong patient</strong>. Overload declares itself as breathlessness that began while the drip was running, a rising pulse and respiratory rate, crackles at both lung bases, distended neck veins, new leg or sacral oedema, a falling saturation and — very late — frothy pink sputum. The elderly man with heart failure who becomes breathless with distended neck veins and bilateral crackles halfway through a litre bag is drowning, and the first actions are to <strong>slow or stop the infusion, sit him up, give oxygen, check the saturation and call the prescriber</strong>, who will usually give intravenous furosemide; the drip is not simply allowed to run through 'because it was prescribed'. The patients who overload easily are the <strong>very old and the very young, heart failure of any cause, kidney failure or anyone passing little urine, severe anaemia</strong> (the heart is already working hard — transfuse slowly, one unit at a time, with furosemide if prescribed) and <strong>severe acute malnutrition</strong>, in whom standard rehydration kills and ReSoMal is given slowly and stopped if the pulse and breathing rise.",
            "<strong>Hyponatraemia</strong> is the other harm. Free water — 5% dextrose, 0.18% saline, large volumes of oral water in a child with gastroenteritis, oxytocin infusions in large volumes of dextrose (oxytocin is an antidiuretic) — dilutes the sodium; the sick child, the post-operative patient and the patient with pneumonia, meningitis or head injury secrete antidiuretic hormone inappropriately and retain the water; and the result is headache, nausea, confusion, seizures and brain swelling, which is fatal in children because the skull leaves no room. Hence the rules: children receive <strong>isotonic maintenance fluid with glucose</strong>, maintenance volumes are reduced to two-thirds where ADH is likely to be high, the sodium is checked in anyone on intravenous fluids for more than a day, oxytocin runs in the smallest practical volume with the intake charted, and hyponatraemia with symptoms is treated slowly with hypertonic saline under senior direction, because correcting it quickly causes osmotic demyelination. Blood is never drawn from the arm with the drip above the cannula — the sample is diluted and the sodium, potassium and glucose results are meaningless.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Five fluid rules that save lives in a district hospital",
          body: "5% dextrose does not treat shock. Ringer's lactate does not run with blood. A child's drip runs through a burette. Breathlessness that started during a drip is the drip until proved otherwise — slow it, sit up, oxygen, call. And every intravenous fluid prescription is reviewed every day with one question: can this patient drink yet?",
        },
        {
          type: "callout",
          tone: "exam",
          title: "What the examiner asks about fluids",
          body: "Which fluid for the hypotensive bleeding man while blood is awaited — Ringer's lactate or 0.9% saline, because they stay in the circulation. Which fluid for routine maintenance in a patient who cannot eat or drink — dextrose saline, which gives water, some sodium and some glucose. Why 5% dextrose is not a resuscitation fluid — the glucose is metabolised and the water spreads through every compartment. Which fluid runs with blood — only 0.9% sodium chloride. How a positive balance of 1,500 mL with a 1.4 kg weight gain is interpreted — fluid retention; review the prescription. What a fluid balance chart must record as carefully as intake — output.",
        },
      ],
      keyPoints: [
        "Two-thirds of body water is inside the cells and only about 3 litres is plasma — the smallest compartment and the only one blood pressure measures; sodium holds water outside the cells, hydrostatic pressure pushes water out of vessels and albumin pulls it in.",
        "0.9% sodium chloride and Ringer's lactate are isotonic crystalloids that stay in the extracellular space and are the resuscitation and replacement fluids; 5% dextrose becomes free water that spreads everywhere and is never a resuscitation fluid; dextrose saline is the adult routine maintenance fluid; Ringer's lactate contains calcium and potassium so it never runs with blood and is used cautiously in hyperkalaemia; colloids expand volume but do not replace blood.",
        "The five Rs: resuscitation (500 mL bolus adult, 20 mL/kg child, reassess after each), routine maintenance (25–30 mL/kg/day water, 1 mmol/kg/day sodium and potassium, 50–100 g/day glucose, reviewed daily), replacement of measured losses matched to their source, redistribution in sepsis and hypoalbuminaemia, and reassessment with a stop date.",
        "Daily weight on the same scale is the most accurate balance measure (1 kg = 1 litre); the fluid balance chart records every intake and every measured output with running totals, insensible losses are allowed for, and a positive balance with weight gain means the prescription is reviewed, not continued.",
        "Overload — breathlessness that began during the infusion, rising pulse and respiratory rate, basal crackles, distended neck veins, oedema — is managed by slowing or stopping the drip, sitting the patient up, giving oxygen and calling; the very old, the very young, cardiac, renal, severely anaemic and severely malnourished patients overload easily and are given fluid slowly and watched.",
        "Free water, inappropriate ADH in the sick child and oxytocin in large volumes cause hyponatraemia and brain swelling: children receive isotonic glucose-containing maintenance fluid at reduced volumes when ADH is likely to be high, sodium is checked in anyone on fluids beyond a day, and correction is slow.",
        "Chart what actually infused, not what was prescribed; never sample blood above a running infusion; and ask every day whether the intravenous fluid can stop because the patient can drink.",
      ],
      quiz: {
        questionIds: ["NG-MOD-PHARM-007"],
        categories: ["pharmacology-parenteral"],
        keywords: ["crystalloid","colloid","isotonic","hypotonic","hypertonic","0.9% sodium chloride","normal saline","ringer","five percent dextrose","dextrose saline","dextrose","maintenance fluid","fluid balance","positive balance","fluid overload","circulatory overload","crackles at both","distended neck veins","insensible","weight has risen","intravenous fluid","fluid should be given","which fluid","water intoxication","oxytocin infusion and water","sampling above","above an infusion","blood is not yet available","awaiting cross","cannot eat or drink","routine maintenance","behaviour of five","intake is 2,400","output as carefully","fluid balance chart","resuscitation fluid","heart failure becomes breathless","overload during","recognising fluid overload","jugular","extracellular","third space","third spacing","total body water","osmo","tonicity","which intravenous fluid","choosing intravenous fluid","compatible fluid with blood","intravenous therapy","intravenous fluids","fluid resuscitation","hypovolaem","circulating volume","fluid status","jugular venous","skin turgor","mucous membranes","daily weight","1 litre","record output","catheter bag","hourly urine","fluid restriction","fluid allowance","breathless with distended"]
      },
    },
    {
      slug: "electrolyte-replacement-and-parenteral-nutrition",
      title: "Electrolyte replacement and parenteral nutrition",
      minutes: 17,
      objectives: [
        "State the normal ranges and the danger thresholds for potassium, sodium, calcium, magnesium and phosphate, and recognise the clinical and ECG signs of deficiency and excess.",
        "Give intravenous potassium safely — concentration, rate, pump, pre-mixed bags, monitoring — and treat hyperkalaemia in the right order, explaining the role of calcium gluconate, insulin with glucose, salbutamol and resonium.",
        "Replace calcium, magnesium, sodium and phosphate correctly, including the magnesium sulphate monitoring checks and the slow correction of sodium.",
        "Care for a patient on parenteral nutrition — the dedicated lumen, asepsis, glucose and electrolyte monitoring, the response when a bag runs out, and the recognition and prevention of refeeding syndrome.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Potassium — the narrowest window in the body",
          paragraphs: [
            "Serum potassium is normally <strong>3.5–5.0 mmol/L</strong>, and both ends of the range stop the heart. <strong>Hypokalaemia</strong> (below 3.5; below 2.5 is an emergency) follows vomiting, diarrhoea, nasogastric aspiration, loop and thiazide diuretics, insulin and salbutamol (which drive potassium into cells), steroids, magnesium deficiency and poor intake; it produces muscle weakness and cramps, constipation and ileus, a flattened T wave, a U wave and arrhythmias, and it potentiates digoxin toxicity — the patient on furosemide and digoxin with nausea and a flat T wave is the classic examination picture. <strong>Hyperkalaemia</strong> (above 5.5; above 6.5 is an emergency) follows kidney failure, crush injury and burns, tissue breakdown, acidosis, massive transfusion, and drugs — ACE inhibitors and angiotensin-receptor blockers, spironolactone, potassium supplements and salt substitutes, trimethoprim, NSAIDs, and the combination of an ACE inhibitor, spironolactone and a potassium supplement in a patient with heart failure is a well-trodden path to a cardiac arrest; it produces weakness, paraesthesia, <strong>tall peaked T waves, a widened QRS</strong>, loss of the P wave and finally a sine wave and asystole. A haemolysed sample, a tight tourniquet and a fist clenched during venepuncture produce a falsely high potassium — repeat the sample before treating a surprising result in a well patient, but never delay treatment in a patient with ECG changes.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FLD-2156.svg",
          alt: "Potassium, the narrowest window in the body — a horizontal bar from low under 3.5 through the normal range of 3.5 to 5.0 to high above 5.0 millimoles per litre, with both ends stopping the heart, the causes and ECG signs of each, and the rules for replacing and treating it.",
          caption: "Below 3.5 the T waves flatten and the digoxin patient becomes toxic; above 5.5 the T waves peak and the QRS widens. The replacement rules — diluted, slow, on a pump, never a bolus — exist because the window is so narrow.",
        },
        {
          type: "table",
          heading: "Replacing potassium safely",
          columns: ["Rule", "Standard", "Why"],
          rows: [
            ["Oral first", "Oral potassium chloride (effervescent or liquid, with food and a full glass of water) or potassium-rich food for mild deficiency in a patient who can eat; slow-release tablets must not be crushed.", "Oral replacement cannot be pushed into the heart; intravenous potassium is reserved for the patient who cannot take it by mouth, who is severely depleted, or who has ECG changes."],
            ["<strong>Never undiluted, never a bolus</strong>", "Concentrated potassium chloride (15% = 20 mmol in 10 mL) is a high-alert medicine kept out of general ward stock; it is always diluted in a large volume and never given by direct intravenous injection.", "An undiluted push causes immediate cardiac arrest; most fatal potassium errors were a nurse 'flushing' with or injecting the concentrate."],
            ["<strong>Concentration</strong>", "Peripheral vein: no more than <strong>40 mmol/L</strong> (20 mmol in 500 mL); higher concentrations only through a central line in a monitored bed.", "Concentrated solutions cause pain, phlebitis and tissue necrosis if they extravasate."],
            ["<strong>Rate</strong>", "No faster than <strong>10 mmol/h</strong> peripherally; up to 20 mmol/h only with continuous ECG monitoring; 40 mmol therefore takes at least 4 hours.", "The heart cannot tolerate a rapid rise in serum potassium however low the starting level."],
            ["<strong>Pre-mixed bags and a pump</strong>", "Use manufacturer pre-mixed bags (0.9% sodium chloride or dextrose saline with 20 or 40 mmol/L) wherever available; if an addition is unavoidable it is made by pharmacy or by two nurses, added to a fresh (not hanging) bag, inverted ten times to mix, labelled with a potassium-additive label, and run through a pump.", "Potassium added to a hanging bag layers at the bottom and the first part of the bag delivers a lethal dose; an unlabelled bag is a trap for the next nurse."],
            ["<strong>Monitoring</strong>", "Serum potassium and creatinine before, and after every 20–40 mmol or at least daily; urine output confirmed before replacement; ECG monitoring at rates above 10 mmol/h; site checked hourly.", "Potassium is excreted by the kidney — the oliguric patient who is replaced on yesterday's result becomes hyperkalaemic today."],
            ["Magnesium alongside", "Check and correct magnesium in refractory hypokalaemia.", "Low magnesium causes renal potassium wasting; the potassium will not stay up until the magnesium is replaced."],
          ],
        },
        {
          type: "list",
          heading: "Hyperkalaemia with ECG changes — the order of treatment",
          style: "steps",
          items: [
            "<strong>Protect the heart</strong>: 10 mL of 10% calcium gluconate intravenously over 5–10 minutes (repeat if the ECG does not improve) — it does not lower the potassium but stabilises the myocardium within minutes; continuous ECG monitoring.",
            "<strong>Shift potassium into the cells</strong>: 10 units of soluble insulin with 25 g of glucose (50 mL of 50% dextrose, or 125 mL of 20%) over 15–30 minutes, with glucose checked hourly for six hours; nebulised salbutamol 10–20 mg; sodium bicarbonate if severely acidotic.",
            "<strong>Remove potassium from the body</strong>: calcium resonium (polystyrene sulphonate) orally or rectally, loop diuretic if passing urine, dialysis for renal failure or refractory hyperkalaemia.",
            "<strong>Stop the cause</strong>: potassium-containing fluids and supplements, ACE inhibitors, spironolactone, NSAIDs, trimethoprim; review the diet (bananas, oranges, coconut water, groundnuts, salt substitutes); treat the acidosis, the dehydration or the obstruction behind the kidney failure.",
            "<strong>Recheck</strong> the potassium at 1–2 hours and again at 4–6 hours, because the shift treatments wear off and the level rebounds.",
          ],
        },
        {
          type: "table",
          heading: "Sodium, calcium, magnesium and phosphate",
          columns: ["Electrolyte and range", "Low — causes, signs, replacement", "High — causes, signs, treatment"],
          rows: [
            ["<strong>Sodium</strong> 135–145 mmol/L", "Hyponatraemia: free water, SIADH, diuretics, vomiting and diarrhoea with water replacement, heart, liver and kidney failure, adrenal insufficiency; headache, nausea, confusion, seizures. Treat the cause and restrict water; hypertonic 3% saline only for seizures or coma, slowly, under senior direction; <strong>correct by no more than 8–10 mmol/L in 24 hours</strong> — faster correction causes osmotic demyelination.", "Hypernatraemia: water loss (diarrhoea in infants, fever, diabetes insipidus, osmotic diuresis), inadequate intake in the dependent elderly, excess sodium; thirst, irritability, lethargy, seizures. Replace water slowly by mouth or 5% dextrose, again no faster than 10 mmol/L a day, because rapid correction causes brain swelling."],
            ["<strong>Calcium</strong> 2.2–2.6 mmol/L (corrected for albumin)", "Hypocalcaemia: after thyroidectomy or parathyroidectomy, vitamin D deficiency, kidney disease, pancreatitis, massive transfusion (citrate), magnesium deficiency; <strong>tingling around the mouth and in the fingers, carpopedal spasm, Trousseau's and Chvostek's signs, tetany, laryngospasm, seizures, prolonged QT</strong>. Symptomatic: 10 mL of 10% calcium gluconate intravenously over 10 minutes with ECG monitoring, then an infusion; oral calcium with vitamin D for the rest.", "Hypercalcaemia: malignancy, hyperparathyroidism, vitamin D excess, immobility; thirst, polyuria, constipation, confusion, bone pain, kidney stones, short QT. Rehydrate with 0.9% sodium chloride first, then bisphosphonate; stop calcium and vitamin D."],
            ["<strong>Magnesium</strong> 0.7–1.0 mmol/L", "Hypomagnesaemia: diarrhoea, malabsorption, alcohol, diuretics, proton pump inhibitors, refeeding; tremor, tetany, arrhythmias and refractory hypokalaemia and hypocalcaemia. Replace with magnesium sulphate 8–20 mmol (2–5 g) intravenously over hours, or orally.", "Hypermagnesaemia: iatrogenic — magnesium sulphate for pre-eclampsia and eclampsia in a woman with oliguria, antacids in renal failure; <strong>loss of the patellar reflex, respiratory depression, hypotension, bradycardia, arrest</strong>. Before every dose or hourly on an infusion: knee jerk present, respiratory rate at least 16 (never below 12), urine output at least 30 mL/h (100 mL in 4 hours); withhold if any fails; the antidote is 10 mL of 10% calcium gluconate at the bedside."],
            ["<strong>Phosphate</strong> 0.8–1.5 mmol/L", "Hypophosphataemia: refeeding syndrome, diabetic ketoacidosis treatment, alcohol, malnutrition; weakness, respiratory and cardiac failure, confusion, haemolysis. Replace orally or by slow infusion per protocol.", "Hyperphosphataemia: chronic kidney disease, tumour lysis; itching, calcium deposition; phosphate binders with meals, dietary restriction, dialysis."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FLD-3140.svg",
          alt: "Flow from projectile vomiting through the loss of hydrogen and chloride ions to a hypochloraemic, hypokalaemic metabolic alkalosis, with the classic clinical picture alongside.",
          caption: "Vomiting loses acid, chloride and potassium together: the alkalotic, hypokalaemic patient is replaced with 0.9% sodium chloride and potassium, and the potassium will not stay up until the chloride and magnesium are replaced as well.",
        },
        {
          type: "text",
          heading: "Parenteral nutrition — feeding through a vein",
          paragraphs: [
            "<strong>Parenteral nutrition</strong> (PN, often called TPN) is a sterile mixture of glucose, amino acids, lipid, electrolytes, vitamins and trace elements given intravenously when the gut cannot be used for more than a few days — prolonged ileus or obstruction, short bowel, high-output fistula, severe pancreatitis, the very premature neonate. It is <strong>never first choice</strong>: enteral feeding is cheaper, safer and keeps the gut alive, so the question 'why can't this patient be fed through the gut?' is asked every day. Full-strength PN is <strong>hypertonic</strong> and must run through a <strong>central venous catheter</strong>, through a <strong>lumen dedicated to it and nothing else</strong> — no drugs, no blood sampling, no other infusions, no 'borrowing' the line by a colleague who needs access — because every break in the circuit is an opportunity for infection and incompatibility. The commonest complication is <strong>catheter-related bloodstream infection</strong>: the glucose-rich solution is a perfect culture medium, so the bag is prepared by pharmacy under laminar flow, hung for no more than 24 hours, connected and disconnected with full aseptic technique, the dressing kept dry and intact, and any fever or rigor in a patient on PN treated as line sepsis until proved otherwise with cultures from the line and a peripheral vein.",
            "Monitoring in the first days is close: <strong>capillary glucose 4–6 hourly</strong> (hyperglycaemia is common and insulin may be needed), <strong>daily electrolytes including potassium, magnesium and phosphate</strong>, urea and creatinine, liver function and triglycerides twice weekly, fluid balance, daily weight and the catheter site. The infusion runs at a constant rate on a pump and is <strong>never 'caught up'</strong>. If the bag finishes and the next is delayed, or the line must be stopped suddenly, the pancreas is still producing insulin for the glucose load that has just vanished and the patient becomes <strong>hypoglycaemic within an hour</strong>: hang <strong>10% dextrose at the same rate</strong> through the same lumen, check the glucose, and never leave the line idle. PN is weaned gradually as enteral intake rises, and the line is removed when it is no longer needed.",
            "<strong>Refeeding syndrome</strong> threatens any starved patient who is fed quickly by any route — severe acute malnutrition, prolonged vomiting or fasting, anorexia, alcohol dependence, the patient who has eaten little for a week before surgery. Feeding switches the body from fat to glucose metabolism, insulin surges, and potassium, magnesium and phosphate rush into the cells, so serum levels crash within 2–4 days, producing arrhythmias, heart and respiratory failure, confusion, seizures and death, while the thiamine demand of glucose metabolism unmasks Wernicke's encephalopathy. Prevention is to identify the at-risk patient, give <strong>thiamine before and during the first days of feeding</strong>, start at <strong>10–20 kcal/kg/day</strong> (or 25% of target) and build up over 4–7 days, replace potassium, magnesium and phosphate before and during feeding, and check them daily — the same principle behind F-75 before F-100 in the malnourished child.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "The three electrolyte emergencies you must recognise without a laboratory",
          body: "Tall peaked T waves and a widening QRS in a patient with kidney failure or crush injury — hyperkalaemia: calcium gluconate, insulin and glucose, salbutamol, call. A woman on magnesium sulphate with no knee jerk and a respiratory rate of 10 — magnesium toxicity: stop the infusion, calcium gluconate 10 mL of 10%, support breathing. Tingling lips, spasm of the hands and stridor the day after a thyroidectomy — hypocalcaemia: calcium gluconate slowly with ECG monitoring. In each case the first dose is the same drug, and it should be at the bedside before it is needed.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Numbers for the examination",
          body: "Potassium 3.5–5.0; peripheral maximum 40 mmol/L and 10 mmol/h; 40 mmol takes 4 hours; never a bolus. Hyperkalaemia with ECG changes: calcium gluconate 10 mL of 10% first, then 10 units of insulin with 25 g of glucose. Sodium corrected by no more than 8–10 mmol/L a day. Magnesium sulphate checks: knee jerk present, respiratory rate at least 16, urine at least 30 mL/h; antidote calcium gluconate. PN: central line, dedicated lumen, glucose 4–6 hourly, 10% dextrose if the bag stops. Refeeding: thiamine first, start at 10–20 kcal/kg, replace potassium, magnesium and phosphate.",
        },
      ],
      keyPoints: [
        "Potassium's normal range is 3.5–5.0 mmol/L; hypokalaemia (diuretics, vomiting, diarrhoea, insulin, salbutamol) flattens T waves and potentiates digoxin; hyperkalaemia (renal failure, crush injury, ACE inhibitors, spironolactone and supplements) peaks T waves and widens the QRS before asystole; a haemolysed sample is repeated but ECG changes are treated at once.",
        "Intravenous potassium is never undiluted and never a bolus: no stronger than 40 mmol/L peripherally, no faster than 10 mmol/h (20 mmol/h only with ECG monitoring centrally), pre-mixed bags on a pump, additions only to a fresh bag that is inverted, labelled and double-checked, with potassium, creatinine and urine output monitored and magnesium corrected alongside.",
        "Hyperkalaemia with ECG changes is treated in order: calcium gluconate 10 mL of 10% to protect the heart, insulin 10 units with 25 g of glucose and nebulised salbutamol to shift potassium into cells, resonium, diuretics or dialysis to remove it, stop the cause, and recheck because the shift wears off.",
        "Sodium is corrected slowly in either direction (no more than 8–10 mmol/L in 24 hours) to avoid osmotic demyelination or brain swelling; symptomatic hypocalcaemia (tingling, carpopedal spasm, Trousseau's and Chvostek's signs after thyroidectomy or massive transfusion) receives calcium gluconate 10 mL of 10% over 10 minutes with ECG monitoring.",
        "Magnesium sulphate is withheld if the knee jerk is absent, the respiratory rate is below 16 or the urine output is below 30 mL/h, and calcium gluconate is the antidote kept at the bedside; low magnesium and low phosphate accompany diarrhoea, alcohol, diuretics and refeeding and must be replaced for potassium to stay normal.",
        "Parenteral nutrition runs through a dedicated lumen of a central line under strict asepsis on a pump that is never caught up, with glucose 4–6 hourly and daily electrolytes; fever on PN is line sepsis until proved otherwise; if the bag stops, 10% dextrose at the same rate prevents hypoglycaemia; the gut is used whenever it works.",
        "Refeeding syndrome follows rapid feeding of the starved by any route — potassium, magnesium and phosphate crash within days — so thiamine is given first, feeding starts at 10–20 kcal/kg and builds over 4–7 days, and electrolytes are replaced and checked daily.",
      ],
      quiz: {
        questionIds: ["NG-MOD-PHARM-009", "NG-MOD-PHARM-010"],
        categories: ["fluid-electrolyte"],
        keywords: ["potassium chloride","potassium infusion","potassium replacement","potassium administration","intravenous potassium","10 mmol","40 mmol","20 mmol","undiluted","rapid intravenous push","concentrated potassium","high alert","hypokalaemia","hyperkalaemia","spironolactone","ace inhibitor","drug induced hyperkalaemia","calcium gluconate","hypocalcaemia","hypercalcaemia","magnesium","phosphate","bicarbonate","parenteral nutrition","tpn","total parenteral","lumen","abrupt cessation","next bag is delayed","bag of parenteral","refeeding","line infection","central line","triple lumen","muscle weakness, cramps","flattened t wave","furosemide for heart failure has","potassium checked","peaked t","tall peaked","ecg changes","hypernatraemia","hyponatraemia","mmol per hour","over how long","duration of a potassium","rate limit for potassium","tingling around the mouth","after thyroidectomy","hypomagnes","magnesium sulphate monitoring","potassium","serum potassium","potassium of","potassium level","high potassium","raised potassium","salbutamol nebul","peripheral line","magnesium sulphate","patellar","hypophosphat","refeeding syndrome","thiamine","hypertonic saline","monitoring during parenteral","tpn line","use that lumen","asks to use that","nutrition running"]
      },
    },
  ],
};
