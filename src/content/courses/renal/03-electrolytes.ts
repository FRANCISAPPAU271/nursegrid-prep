import type { CourseModule } from "../types";

export const electrolytes: CourseModule = {
  slug: "electrolyte-imbalances",
  title: "Electrolyte imbalances",
  summary: "Sodium, potassium, calcium, magnesium and phosphate — the normal ranges, the causes and bedside signs of too little and too much, the treatments, and the nursing rules that stop a correction from becoming the next emergency.",
  lessons: [
    {
      slug: "sodium-imbalances",
      title: "Sodium: hyponatraemia and hypernatraemia",
      minutes: 14,
      objectives: [
        "Explain why sodium disorders are really water disorders and why the brain is the organ at risk.",
        "Classify hyponatraemia by volume status and identify the common causes on a Ghanaian ward.",
        "Describe safe correction of low and high sodium and the dangers of correcting too fast.",
        "Plan nursing care and seizure precautions for the patient with a sodium disturbance.",
      ],
      blocks: [
        {
          type: "text",
          heading: "A water problem wearing a salt label",
          paragraphs: [
            "Serum sodium (normal <strong>135–145 mmol/L</strong>) is a concentration — sodium relative to water. It falls when the body holds too much water relative to salt and rises when it loses water faster than salt. Because water follows the sodium gradient across every cell membrane, a low sodium makes brain cells swell and a high sodium makes them shrink; the symptoms of both are neurological — headache, nausea, confusion, drowsiness, seizures, coma — and the speed of change matters more than the number.",
            "Sodium disorders are among the commonest laboratory abnormalities in hospital, most often caused by the fluids and drugs we give. Hyponatraemia below 125 mmol/L, hypernatraemia above 155, or a change of more than 10 mmol/L in a day, needs urgent attention.",
          ],
        },
        {
          type: "table",
          heading: "Hyponatraemia (sodium below 135 mmol/L) — classify by the patient's volume",
          columns: ["Volume status", "Mechanism", "Common causes", "Treatment principle"],
          rows: [
            ["Hypovolaemic (dry)", "Salt and water lost; water partly replaced", "Vomiting, diarrhoea, burns, thiazide and loop diuretics, Addison's disease (adrenal failure — low sodium, high potassium, low glucose, shock), cerebral salt wasting", "Isotonic saline replaces both; stop the diuretic; hydrocortisone if adrenal failure"],
            ["Euvolaemic (normal volume)", "Water retained without oedema", "<strong>SIADH</strong> — pneumonia, TB, head injury, stroke, meningitis, lung and other cancers, pain, nausea, post-operative state, drugs (carbamazepine, SSRIs, cyclophosphamide, chlorpropamide); hypothyroidism; excess dextrose 5% infusion; psychogenic polydipsia; beer potomania", "<strong>Fluid restriction</strong> 800–1 000 mL/day; treat the cause; salt tablets or demeclocycline/tolvaptan in resistant cases"],
            ["Hypervolaemic (oedematous)", "Salt and water retained, water more than salt", "Heart failure, liver cirrhosis, nephrotic syndrome, advanced kidney failure", "Fluid and salt restriction, loop diuretic, treat the cause; do not give saline"],
            ["Pseudo / translocational", "Lab artefact or glucose", "Severe hyperglycaemia (water pulled into vessels — sodium falls about 2.4 mmol/L for every 10 mmol/L of glucose above normal), high lipids or proteins, sample taken from a drip arm", "Correct the glucose; repeat the sample properly"],
          ],
        },
        {
          type: "list",
          heading: "Recognising and managing low sodium",
          items: [
            "<strong>Mild (130–135) or chronic:</strong> often no symptoms, or tiredness, nausea, unsteadiness and falls in older people — a common hidden cause of a confused elderly patient on a thiazide.",
            "<strong>Moderate (125–130):</strong> headache, nausea and vomiting, confusion, muscle cramps.",
            "<strong>Severe (below 125) or acute (within 48 hours):</strong> drowsiness, seizures, coma, respiratory arrest from cerebral oedema — <strong>an emergency</strong>: call for help, protect the airway, seizure precautions, and give <strong>hypertonic saline 3%</strong> (150 mL over 20 minutes, repeated once or twice) on senior prescription with sodium checked after each bolus, aiming for a rise of about 5 mmol/L to stop the symptoms.",
            "<strong>Correct slowly after that: no more than 8–10 mmol/L in 24 hours</strong> in chronic hyponatraemia. Too fast a rise causes <strong>osmotic demyelination</strong> (central pontine myelinolysis) — paralysis, dysphagia, locked-in state, appearing days later and irreversible. Check sodium every 2–4 hours during active correction; if it overshoots, the doctor may give dextrose 5% or desmopressin to bring it back.",
            "Nursing: accurate fluid balance and daily weight; implement the restriction (see Module 2); stop or query the dextrose 5% infusion and the thiazide; neurological observations — GCS, pupils, new headache or vomiting; falls and seizure precautions; review drugs with the pharmacist; urine and serum osmolality and urine sodium samples before treatment where available.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ADV-0103.svg",
          alt: "Three fluid types compared: isotonic fluids expand the circulation, hypotonic fluids swell cells with a danger of cerebral oedema, hypertonic fluids such as 3% saline shrink cells",
          caption: "Hypotonic fluids (and excess dextrose 5%) cause hyponatraemia and brain swelling; hypertonic 3% saline is the emergency treatment for seizures from low sodium — given slowly, with sodium checked after every dose.",
        },
        {
          type: "table",
          heading: "Hypernatraemia (sodium above 145 mmol/L)",
          columns: ["Mechanism", "Causes", "Clinical picture", "Treatment"],
          rows: [
            ["Water loss not replaced (the usual cause)", "Patients who cannot drink or ask — infants, the unconscious, the confused elderly, stroke; fever, hot weather, hyperventilation; diarrhoea (especially with hypertonic home-made solutions); osmotic diuresis in hyperglycaemia; burns; <strong>diabetes insipidus</strong> (no ADH after head injury or pituitary surgery, or kidneys unresponsive — lithium) with litres of dilute urine", "Intense thirst (if able to feel it), dry sticky mucosa, doughy skin, restlessness and irritability progressing to lethargy, twitching, seizures and coma; brain shrinkage can tear bridging veins — intracranial haemorrhage in infants", "Replace water: by mouth or nasogastric tube where possible; IV dextrose 5% or 0.45% saline; isotonic saline first if shocked. <strong>Lower sodium by no more than 10 mmol/L in 24 hours</strong> (0.5 mmol/L/hour) — too fast causes cerebral oedema and seizures. Desmopressin for central diabetes insipidus"],
            ["Salt gain", "Hypertonic saline or sodium bicarbonate infusions, wrongly mixed ORS or infant formula, near-drowning in sea water, salt poisoning, Conn's and Cushing's syndromes", "As above, with overload", "Stop the salt; water replacement; loop diuretic with water if overloaded"],
          ],
        },
        {
          type: "list",
          heading: "Nursing the patient with high sodium",
          items: [
            "Offer water regularly to anyone who cannot ask — hourly drinks rounds, a jug within reach, nasogastric water boluses for the unconscious or tube-fed (feeds are concentrated and need free-water flushes).",
            "Strict input and output; urine specific gravity (very low in diabetes insipidus, very high in dehydration); daily weight; sodium at least every 6–12 hours during correction.",
            "Neurological observations; seizure and fall precautions; mouth care; skin care of dry skin.",
            "Check how ORS and feeds are mixed at home — a sachet in half the water is a common cause of hypernatraemic dehydration in infants; teach exact measurement.",
            "Head-injured and post-neurosurgical patients: urine output above 200–300 mL/hour for two hours with rising sodium means diabetes insipidus — report immediately.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Speed limits",
          body: "Low sodium with seizures: 3% saline 150 mL over 20 minutes, repeat once or twice, then no more than 8–10 mmol/L rise in 24 hours (osmotic demyelination). High sodium: water, lowering by no more than 10 mmol/L in 24 hours (cerebral oedema). SIADH = fluid restriction; dry hyponatraemia = isotonic saline; oedematous hyponatraemia = restrict and diurese.",
        },
      ],
      keyPoints: [
        "Sodium disorders are water disorders; symptoms are neurological and depend on how fast the sodium changed.",
        "Classify hyponatraemia by volume: dry (losses, diuretics, Addison's) → saline; normal volume (SIADH, excess dextrose) → fluid restriction; oedematous (heart, liver, kidney) → restrict and diurese.",
        "Severe symptomatic hyponatraemia gets 3% saline in small boluses; otherwise correct no faster than 8–10 mmol/L a day to avoid osmotic demyelination.",
        "Hypernatraemia is usually water loss in someone who cannot drink; replace water slowly — no more than 10 mmol/L a day — and look for diabetes insipidus after head injury.",
        "Nursing: offer fluids, enforce restrictions, strict balance, daily weight, neurological observations, seizure precautions and sodium rechecks every few hours during correction.",
      ],
      quiz: {
        keywords: ["hyponatraemia", "hypernatraemia", "sodium", "siadh", "diabetes insipidus", "hypertonic saline", "fluid restriction", "desmopressin", "cerebral oedema", "osmolality", "confusion", "seizure", "thiazide", "dextrose"],
        categories: ["fluid-electrolyte"],
        questionIds: ["NG-MOD-RENAL-007"],
      },
    },
    {
      slug: "potassium-imbalances",
      title: "Potassium: the narrowest window in the body",
      minutes: 16,
      objectives: [
        "State the normal potassium range and the values that constitute an emergency.",
        "Recognise hypokalaemia and hyperkalaemia from the history, examination and ECG.",
        "Give the emergency treatment of hyperkalaemia in the right order and explain what each step does.",
        "Replace potassium safely and apply the rules that prevent fatal errors.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Both ends stop the heart",
          paragraphs: [
            "Only about 2% of the body's potassium is in the blood; 98% sits inside cells, and the difference across the cell membrane sets the resting electrical potential of every nerve, muscle fibre and heart cell. The serum range is narrow — <strong>3.5–5.0 mmol/L</strong> — and small shifts between the compartments (insulin, adrenaline, salbutamol and alkalosis push potassium into cells; acidosis, cell damage and tissue breakdown push it out) change the number without changing total body potassium.",
            "The kidney is the only significant route of excretion, under the control of aldosterone. That is why kidney failure, ACE inhibitors, spironolactone and Addison's disease raise potassium, and why diuretics, vomiting and diarrhoea lower it.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FLD-2156.svg",
          alt: "Potassium scale from low to high with the causes and signs of each, the lethal pairing of low potassium with digoxin, the order of treatment for hyperkalaemia and the rule never to give potassium as a bolus",
          caption: "Low: vomiting, diarrhoea, diuretics, insulin — weak muscles, ileus, flat T and U waves; dangerous with digoxin. High: kidney failure, crush, acidosis, stored blood, ACE inhibitors — peaked T waves then arrest. Never push concentrated potassium.",
        },
        {
          type: "table",
          heading: "Hypokalaemia (below 3.5 mmol/L; below 2.5 is an emergency)",
          columns: ["Aspect", "Detail"],
          rows: [
            ["Causes", "<strong>Gut losses</strong> — vomiting, diarrhoea, cholera, nasogastric suction, laxative abuse, fistulae; <strong>renal losses</strong> — loop and thiazide diuretics, steroids, hyperaldosteronism, magnesium deficiency, amphotericin, gentamicin, renal tubular acidosis, the recovery phase of acute kidney injury; <strong>shift into cells</strong> — insulin (DKA treatment), salbutamol, adrenaline, alkalosis, refeeding; <strong>poor intake</strong> — starvation, alcohol dependence, prolonged IV fluids without potassium"],
            ["Signs", "Muscle weakness and cramps, fatigue, constipation and <strong>paralytic ileus</strong>, nausea, polyuria, palpitations; severe — flaccid paralysis, respiratory muscle weakness, rhabdomyolysis, arrhythmias (ectopics, atrial fibrillation, torsades, ventricular fibrillation)"],
            ["ECG", "<strong>Flattened or inverted T waves, prominent U waves</strong>, ST depression, prolonged QT; digoxin toxicity is precipitated — the lethal pairing"],
            ["Treatment", "Mild (3.0–3.5) and able to eat: oral potassium chloride (Slow-K 600 mg = 8 mmol; effervescent or syrup 2–3 times daily with food and water) plus potassium-rich foods — banana, orange, pawpaw, coconut water, beans, kontomire, groundnuts, tomatoes. Moderate to severe, symptomatic, ECG changes, on digoxin or unable to take oral: <strong>IV potassium chloride diluted in a bag</strong> — usually 20–40 mmol in 500–1 000 mL of saline, <strong>maximum 10 mmol/hour peripherally</strong> (20 mmol/hour only with cardiac monitoring and a central or large vein), <strong>maximum concentration 40 mmol/L peripherally</strong>. Check magnesium and replace it — potassium will not correct while magnesium is low. Recheck potassium after every 20–40 mmol"],
            ["Nursing", "Cardiac monitor if below 3.0 or on digoxin; use pre-mixed bags; mix additives thoroughly and label; infusion pump; check the cannula (potassium burns — extravasation causes necrosis); monitor urine output (do not give potassium to the anuric patient); watch for respiratory weakness; bowel sounds; fall precautions"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ELE-2980.svg",
          alt: "ECG tracings contrasting the tall peaked T wave of hyperkalaemia with the flattened T wave and U wave of hypokalaemia",
          caption: "High potassium: tall tented T waves, then a wide QRS, then a sine wave, then asystole. Low potassium: flat T, U wave, ST depression.",
        },
        {
          type: "table",
          heading: "Hyperkalaemia (above 5.0 mmol/L; above 6.0, or any ECG change, is an emergency)",
          columns: ["Aspect", "Detail"],
          rows: [
            ["Causes", "<strong>Reduced excretion</strong> — acute and chronic kidney failure (the commonest), ACE inhibitors and ARBs, spironolactone and amiloride, NSAIDs, trimethoprim, Addison's disease; <strong>release from cells</strong> — crush injury and rhabdomyolysis, burns, tumour lysis, haemolysis (including <strong>stored blood transfused in volume</strong>), acidosis including DKA before insulin, succinylcholine; <strong>intake</strong> — potassium supplements and salt substitutes, excessive IV potassium; <strong>false</strong> — haemolysed sample from a tight tourniquet, small needle, fist clenching or delayed transport: always repeat an unexpected high result <em>while</em> preparing to treat"],
            ["Signs", "Often <strong>none until the arrest</strong>; muscle weakness, paraesthesia, nausea, slow or irregular pulse, hypotension"],
            ["ECG — changes first", "<strong>Tall peaked (tented) T waves → flattened P waves and prolonged PR → widened QRS → sine wave → ventricular fibrillation or asystole</strong>. Do an ECG and attach a monitor the moment a high result is seen"],
            ["Emergency treatment — in this order", "1. <strong>Protect the heart:</strong> calcium gluconate 10% <strong>10 mL IV over 5–10 minutes</strong> (or calcium chloride 10 mL via a central line), repeated if the ECG has not improved in 5–10 minutes — works in minutes, lasts 30–60 minutes, does <em>not</em> lower potassium. 2. <strong>Shift potassium into cells:</strong> soluble insulin <strong>10 units in 50 mL of 50% dextrose</strong> (or 25 g glucose) IV over 15–30 minutes — lowers potassium by about 1 mmol/L within 15–30 minutes for 4–6 hours; check glucose every 30 minutes for 6 hours (late hypoglycaemia is common); nebulised salbutamol 10–20 mg adds a further 0.5–1 mmol/L fall; sodium bicarbonate only if severely acidotic. 3. <strong>Remove potassium:</strong> loop diuretic if passing urine, cation-exchange resin (calcium resonium 15 g orally 3–4 times daily or 30 g rectally) or newer binders — slow, hours to days; <strong>haemodialysis</strong> for kidney failure, refractory or recurrent hyperkalaemia. 4. <strong>Stop the cause:</strong> ACE inhibitor, spironolactone, NSAID, supplements, potassium-containing fluids; treat the acidosis, the dehydration or the obstruction"],
            ["Nursing", "Continuous cardiac monitoring; 12-lead ECG before and after calcium; two IV lines; glucose checks after insulin; repeat potassium at 1–2 hours and 4–6 hours; strict fluid balance and urine output; low-potassium diet (no coconut water, bananas, oranges, groundnuts, tomatoes, beans, salt substitutes; soak and boil vegetables and discard the water); check every infusion and drug chart for hidden potassium; prepare for dialysis"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "The rule that kills patients when it is broken",
          body: "Concentrated potassium chloride is never given as a rapid push or bolus — it causes cardiac arrest. It is always diluted in a bag, mixed thoroughly, labelled, run through a pump at no more than 10 mmol/hour on a general ward (20 mmol/hour with cardiac monitoring), at no more than 40 mmol/L through a peripheral vein, and checked by two nurses. Store concentrated ampoules separately from sodium chloride and water for injection — they look alike.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Three numbers and three drugs",
          body: "Normal 3.5–5.0; below 2.5 or above 6.0 is an emergency. Hyperkalaemia with ECG changes: calcium gluconate 10% 10 mL first (protects), insulin 10 units in 50 mL 50% dextrose second (shifts), then resin/diuretic/dialysis (removes). Hypokalaemia: oral if mild, IV diluted at ≤10 mmol/hour, check magnesium, watch digoxin.",
        },
      ],
      keyPoints: [
        "Potassium 3.5–5.0 mmol/L; shifts into cells with insulin, salbutamol and alkalosis, out with acidosis and cell damage; excreted only by the kidney under aldosterone.",
        "Hypokalaemia: weakness, ileus, flat T and U waves, arrhythmias, digoxin toxicity — from gut and renal losses and diuretics; replace orally if mild, IV diluted and slow if severe, and correct magnesium.",
        "Hyperkalaemia is silent until the ECG changes: tented T waves, wide QRS, sine wave, arrest — from kidney failure, ACE inhibitors, spironolactone, acidosis, crush and stored blood.",
        "Treat hyperkalaemia in order: calcium gluconate to protect, insulin–dextrose (and salbutamol) to shift, diuretic, resin or dialysis to remove, and stop the cause; check glucose afterwards.",
        "Never bolus potassium: diluted, mixed, labelled, pumped at no more than 10 mmol/hour peripherally, 40 mmol/L, double-checked.",
      ],
      quiz: {
        keywords: ["potassium", "hyperkalaemia", "hypokalaemia", "calcium gluconate", "peaked t", "tented t", "u wave", "insulin and dextrose", "resonium", "digoxin toxicity", "spironolactone", "furosemide", "ace inhibitor", "ecg"],
        categories: ["fluid-electrolyte", "pharmacology-parenteral"],
        questionIds: ["NG-MOD-RENAL-008", "NG-MOD-RENAL-009"],
      },
    },
    {
      slug: "calcium-magnesium-and-phosphate",
      title: "Calcium, magnesium and phosphate",
      minutes: 15,
      objectives: [
        "State the normal ranges and the hormones that regulate calcium and phosphate.",
        "Recognise hypocalcaemia (including Trousseau's and Chvostek's signs) and hypercalcaemia and describe their treatment.",
        "Monitor a patient receiving magnesium sulphate and recognise and reverse toxicity.",
        "Explain the calcium–phosphate problem of chronic kidney disease and the refeeding syndrome.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Three minerals that move together",
          paragraphs: [
            "Calcium (normal <strong>2.2–2.6 mmol/L</strong>, corrected for albumin), phosphate (<strong>0.8–1.5 mmol/L</strong>) and magnesium (<strong>0.7–1.0 mmol/L</strong>) are controlled by <strong>parathyroid hormone</strong> (raises calcium by taking it from bone, retaining it in the kidney and activating vitamin D; lowers phosphate), <strong>active vitamin D</strong> (made in the kidney; absorbs calcium and phosphate from the gut) and <strong>calcitonin</strong> (lowers calcium). Half the plasma calcium is bound to albumin, so a low albumin gives a falsely low total — correct it, or measure ionised calcium. Alkalosis increases binding and lowers ionised calcium, which is why the hyperventilating patient gets tingling fingers.",
            "Magnesium is the quiet partner: it is needed for parathyroid hormone to work and for the cell pumps that hold potassium, so <strong>low magnesium causes low calcium and low potassium that will not correct until the magnesium is replaced</strong>.",
          ],
        },
        {
          type: "table",
          heading: "Calcium",
          columns: ["", "Hypocalcaemia (below 2.2 mmol/L corrected)", "Hypercalcaemia (above 2.6 mmol/L)"],
          rows: [
            ["Causes", "<strong>After thyroidectomy or parathyroidectomy</strong> (parathyroid glands removed or bruised — check calcium at 6 and 24 hours), chronic kidney disease (no active vitamin D, high phosphate), vitamin D deficiency and rickets/osteomalacia (dark skin, covered skin, poor diet, malabsorption), hypomagnesaemia, acute pancreatitis, massive transfusion (citrate binds calcium), tumour lysis, loop diuretics, bisphosphonates, alkalosis (ionised only), sepsis", "<strong>Malignancy</strong> (myeloma, breast, lung, bone metastases — the commonest in hospital), <strong>primary hyperparathyroidism</strong> (the commonest in outpatients), immobilisation, thiazides, excess vitamin D or calcium supplements and antacids, sarcoidosis, TB, thyrotoxicosis, Addison's disease"],
            ["Signs", "Neuromuscular excitability: perioral and fingertip tingling, cramps, <strong>carpopedal spasm</strong>, <strong>Trousseau's sign</strong> (hand spasm when a blood-pressure cuff is inflated above systolic for 3 minutes), <strong>Chvostek's sign</strong> (facial twitch when the facial nerve is tapped in front of the ear), laryngospasm and stridor, bronchospasm, seizures, anxiety and confusion, prolonged QT and arrhythmias; chronic — brittle nails, dry skin, cataracts, dental problems, rickets in children", "'Stones, bones, groans, thrones and psychiatric overtones': kidney stones, bone pain and fractures, abdominal pain, constipation, nausea, pancreatitis and peptic ulcer, polyuria and thirst (nephrogenic diabetes insipidus) leading to dehydration and kidney injury, weakness, depression, confusion and coma; short QT, bradycardia, digoxin sensitivity; above 3.5 mmol/L is a medical emergency"],
            ["Treatment", "Symptomatic or below 1.9: <strong>calcium gluconate 10% 10–20 mL IV over 10 minutes</strong> (cardiac monitor; never faster; extravasation causes necrosis), then an infusion if needed; oral calcium carbonate 1–2 g daily with vitamin D (colecalciferol, or alfacalcidol/calcitriol in kidney disease) for chronic cases; correct magnesium; treat the cause", "<strong>Rehydrate with IV normal saline 3–4 litres a day</strong> (the first and most important step — it dilutes calcium and restores kidney excretion), then a <strong>bisphosphonate</strong> (zoledronic acid or pamidronate IV — works over 2–4 days), calcitonin for rapid short-term effect, steroids for myeloma, sarcoid and vitamin D excess, stop thiazides and supplements, mobilise, treat the cancer; parathyroidectomy for hyperparathyroidism; dialysis if severe with kidney failure"],
            ["Nursing", "Seizure precautions and a quiet environment; keep the airway equipment at hand after neck surgery (stridor from laryngospasm); test for Trousseau's and Chvostek's each shift post-thyroidectomy; ECG monitoring; give oral calcium between meals (absorbed better) but separate from iron, levothyroxine and tetracyclines; teach calcium- and vitamin D-rich foods (milk, small dried fish eaten with bones, kontomire, beans) and safe sun exposure", "Strict fluid balance and daily weights during saline loading — watch for overload in the old and in heart failure; mobilise; encourage 3 litres of oral fluid if able; low-calcium diet is rarely needed; monitor calcium daily; safety — confusion and weakness increase falls; pain control; bowel care"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MAT-2290.svg",
          alt: "Pre-eclampsia recognition, the magnesium sulphate Pritchard regimen with the checks before every dose, and the first response to eclampsia",
          caption: "Before every magnesium dose: respiratory rate at least 16, patellar reflex present, urine output at least 100 mL in the last 4 hours (or 30 mL/hour). Calcium gluconate 10% 10 mL at the bedside is the antidote.",
        },
        {
          type: "table",
          heading: "Magnesium",
          columns: ["", "Hypomagnesaemia (below 0.7 mmol/L)", "Hypermagnesaemia (above 1.0 mmol/L)"],
          rows: [
            ["Causes", "Diarrhoea, malabsorption, malnutrition and alcohol dependence, refeeding, loop and thiazide diuretics, proton-pump inhibitors long term, gentamicin and amphotericin, DKA treatment, pancreatitis, prolonged IV fluids without magnesium", "<strong>Magnesium sulphate therapy for pre-eclampsia and eclampsia</strong> — especially with reduced urine output; kidney failure with magnesium-containing antacids or laxatives (milk of magnesia); tumour lysis"],
            ["Signs", "Like hypocalcaemia — tremor, tetany, Trousseau's and Chvostek's signs, seizures, confusion, arrhythmias (torsades de pointes, digoxin toxicity), <strong>refractory hypokalaemia and hypocalcaemia</strong>", "Progressive: nausea, flushing and warmth, drowsiness, <strong>loss of the patellar (knee) reflex (at about 3.5–5 mmol/L)</strong>, muscle weakness, slurred speech, <strong>respiratory depression (above 5)</strong>, hypotension, bradycardia, heart block and cardiac arrest (above 7)"],
            ["Treatment", "Oral magnesium (causes diarrhoea) for mild; IV magnesium sulphate 2 g (8 mmol) over 20–60 minutes, or 20 mmol over 12–24 hours, for symptomatic or severe; replace potassium and calcium at the same time", "<strong>Stop the infusion</strong>; <strong>calcium gluconate 10% 10 mL IV over 10 minutes</strong> as the antidote; oxygen, airway support and ventilation if needed; IV saline and furosemide to increase excretion if kidneys work; dialysis in kidney failure"],
            ["Nursing in pre-eclampsia", "Magnesium sulphate (Pritchard: 4 g IV slowly plus 10 g IM — 5 g in each buttock — then 5 g IM 4-hourly; or Zuspan: 4 g IV then 1 g/hour infusion) continues for 24 hours after delivery or the last seizure. <strong>Before every dose check: respiratory rate at least 16/min, patellar reflex present, urine output at least 100 mL in the previous 4 hours</strong> — withhold the dose and call if any is abnormal. Keep <strong>calcium gluconate 10% 10 mL</strong> drawn up or at the bedside. Observations every 15–30 minutes; blood pressure, consciousness, fetal heart; magnesium levels where available (therapeutic 2–3.5 mmol/L)", ""],
          ],
        },
        {
          type: "table",
          heading: "Phosphate",
          columns: ["", "Hypophosphataemia (below 0.8 mmol/L)", "Hyperphosphataemia (above 1.5 mmol/L)"],
          rows: [
            ["Causes", "<strong>Refeeding syndrome</strong> (starvation, severe malnutrition, alcohol dependence, anorexia — when feeding restarts, insulin drives phosphate, potassium and magnesium into cells), DKA treatment, respiratory alkalosis, hyperparathyroidism, vitamin D deficiency, phosphate binders and antacids, burns, sepsis", "<strong>Chronic kidney disease</strong> (cannot excrete it), tumour lysis, rhabdomyolysis, hypoparathyroidism, phosphate enemas (Fleet) in children and kidney disease, excess vitamin D"],
            ["Signs", "Muscle weakness including respiratory and heart failure, confusion, seizures, haemolysis, rhabdomyolysis; refeeding syndrome — oedema, heart failure, arrhythmias and sudden death in the first week of feeding", "Itching, calcium deposits in vessels, skin and joints (calciphylaxis), and secondary hyperparathyroidism with bone disease; signs of the accompanying low calcium"],
            ["Treatment and nursing", "Oral or IV phosphate; for refeeding risk — start feeds at no more than 10 kcal/kg/day (5 in the very malnourished), give thiamine before feeding, check phosphate, potassium and magnesium daily for the first week and replace them; weigh daily; cardiac monitor in high risk", "Low-phosphate diet (limit dairy, offal, nuts, cola, processed foods), <strong>phosphate binders with meals</strong> (calcium carbonate or acetate, sevelamer, lanthanum — chew or take at the start of food), vitamin D analogues, dialysis; monitor calcium × phosphate product"],
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Signs and antidotes",
          body: "Trousseau's (cuff → hand spasm) and Chvostek's (tap → facial twitch) = low calcium (or low magnesium): calcium gluconate 10% 10 mL over 10 minutes. Hypercalcaemia: saline first, then bisphosphonate. Magnesium toxicity: lost knee reflex, respiratory rate under 16, urine under 100 mL in 4 hours — stop and give calcium gluconate. Refeeding: phosphate falls — thiamine first, feed slowly, check daily.",
        },
      ],
      keyPoints: [
        "Calcium 2.2–2.6 (correct for albumin), phosphate 0.8–1.5, magnesium 0.7–1.0 mmol/L; parathyroid hormone and kidney-made vitamin D control them; low magnesium blocks correction of calcium and potassium.",
        "Hypocalcaemia — tingling, spasm, Trousseau's and Chvostek's signs, laryngospasm, seizures — is a post-thyroidectomy and CKD problem; calcium gluconate IV slowly.",
        "Hypercalcaemia — stones, bones, groans, thirst, confusion — is cancer or hyperparathyroidism; saline rehydration first, then a bisphosphonate.",
        "Magnesium sulphate in pre-eclampsia: check respiratory rate, patellar reflex and urine output before every dose; calcium gluconate is the antidote.",
        "CKD raises phosphate and lowers calcium — binders with meals and vitamin D analogues; refeeding syndrome drops phosphate — thiamine, slow feeding and daily checks.",
      ],
      quiz: {
        keywords: ["calcium", "hypocalcaemia", "hypercalcaemia", "magnesium", "hypomagnes", "phosphat", "trousseau", "chvostek", "tetany", "calcium gluconate", "patellar reflex", "magnesium sulphate", "refeeding", "parathyroid", "thyroidectomy", "bisphosphonate"],
        categories: ["fluid-electrolyte", "pharmacology-parenteral"],
        questionIds: ["NG-MOD-RENAL-010"],
      },
    },
  ],
};
