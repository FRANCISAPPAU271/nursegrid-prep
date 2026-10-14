import type { CourseModule } from "../types";

export const urinarySystem: CourseModule = {
  slug: "urinary-system",
  title: "The urinary system: kidneys, fluids and electrolytes",
  summary:
    "The fluid-and-salt authority: the urinary tract with UTI and catheter logic, kidney gross structure, the nephron segment by segment, filtration-reabsorption-secretion with ADH and aldosterone, concentration and output targets, urinalysis reading and AKI recognition — then body fluids with dehydration versus overload, IV fluid choices, the five key electrolytes with their emergencies, acid-base with compensation, and fluid-balance discipline.",
  lessons: [
    {
      slug: "kidneys-and-the-nephron",
      title: "Kidneys and the nephron",
      minutes: 20,
      objectives: [
        "Trace the urinary tract and explain female UTI risk and CAUTI prevention.",
        "Describe kidney gross structure and the nephron's segments.",
        "Explain filtration, reabsorption and secretion with ADH and aldosterone.",
        "Read urinalysis, state output targets, and recognize AKI.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The tract: make it, move it, store it, release it",
          paragraphs: [
            "The <strong>kidneys</strong> (retroperitoneal, T12–L3, right lower under the liver) filter blood; <strong>ureters</strong> (25 cm of peristalsis) militate urine to the <strong>bladder</strong> (detrusor muscle + <strong>trigone</strong> landmarks, 400–600 mL functional capacity); the <strong>urethra</strong> releases it — <strong>~4 cm in women, ~20 cm in men</strong>, which is why women collect <strong>UTIs</strong> (short ascent from bowel flora): dysuria, frequency, urgency, suprapubic pain, cloudy/foul urine, confusion in elders without fever. <strong>CAUTI prevention</strong> is catheter discipline: avoid unless indicated, aseptic insertion, closed drainage below bladder level, unobstructed flow, daily necessity review, remove at the earliest hour. <strong>Micturition</strong> is a spinal reflex (detrusor squeezes, internal sphincter opens) under voluntary external-sphincter control — lost in cord injury, confused by retention (palpable bladder, overflow dribbling, agitation — <strong>bladder scan, then catheterize per protocol</strong>) and the incontinences: <strong>stress</strong> (cough/sneeze — pelvic floor), <strong>urge</strong> (detrusor overactivity), <strong>overflow</strong> (retention), <strong>functional</strong> (can't reach the toilet) — each managed differently, none managed by indwelling catheter by default.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0088.svg",
          alt: "Bank diagram of the nephron: glomerulus and Bowman's capsule, proximal tubule, loop of Henle, distal tubule and collecting duct.",
          caption: "The nephron's anatomy — from the question-bank diagram set; function follows below.",
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0022.svg",
          alt: "Nephron function map. Glomerulus filters 180 litres a day: water and small solutes out, cells and protein stay; GFR about 125 mL/min tracked by creatinine. Proximal tubule reabsorbs 65 per cent including all glucose, sodium, water and bicarbonate. Loop descending limb lets water out; ascending limb pumps sodium, potassium and chloride out (furosemide blocks here). Distal tubule reabsorbs sodium chloride (thiazides block here) and calcium under PTH. Collecting duct: ADH admits water, aldosterone admits sodium while excreting potassium and hydrogen (spironolactone blocks). One to two litres of urine a day; output targets 0.5 mL/kg/h adults, 1.0 children.",
          caption: "Filter 180 litres, keep all but one or two — every segment with its hormone and drug site.",
        },
        {
          type: "text",
          heading: "Formation: filter bulk, reclaim value, secrete trouble",
          paragraphs: [
            "<strong>Filtration</strong> at the glomerulus: pressure forces water + small solutes through a size-and-charge barrier (cells and albumin stay — <strong>proteinuria means barrier breach</strong>: glomerulonephritis, pre-eclampsia, diabetic nephropathy). <strong>GFR ~125 mL/min</strong> (~180 L/day) falls with hypotension, NSAIDs, ACE-inhibitors in bilateral stenosis, and obstruction — <strong>creatinine</strong> rises as GFR falls (muscle-made, steadily produced; eGFR stages CKD). <strong>Reabsorption</strong> reclaims ~99%: PCT takes glucose <strong>100%</strong> (threshold ~180 mg/dL — beyond it <strong>glycosuria</strong> drags water: osmotic diuresis of hyperglycaemia), Na⁺, water, HCO₃⁻; the loop builds the <strong>medullary gradient</strong> (countercurrent multiplier) that <strong>ADH</strong> exploits to concentrate urine (no ADH = litres of dilute urine: <strong>diabetes insipidus</strong>); <strong>aldosterone</strong> (RAAS) trades Na⁺ in for K⁺/H⁺ out. <strong>Secretion</strong> dumps K⁺, H⁺, creatinine, uric acid and <strong>drugs</strong> (penicillin, diuretics reach their luminal sites this way — renal failure doses must shrink). Final output <strong>1–2 L/day</strong>; targets <strong>≥0.5 mL/kg/h adults, ≥1.0 children</strong> — below is <strong>oliguria</strong>, below 100 mL/day <strong>anuria</strong>, and either with rising creatinine is <strong>AKI</strong>: prerenal (dry/hypotensive — fluids), renal (toxins, ischaemia, glomerular — stop the insult), postrenal (blocked — catheter, stones, prostate) — plus the hyperkalaemia drill from the diagram below.",
          ],
        },
        {
          type: "table",
          heading: "Urinalysis: read the dipstick",
          columns: ["Finding", "Normal", "Abnormal means", "Nursing angle"],
          rows: [
            ["Colour / clarity", "Straw, clear", "Dark = concentrated; red = blood; brown = bile/myoglobin; cloudy = pus/crystals", "Hydration story first; red urine + transfusion = reaction drill (Module 01)"],
            ["Specific gravity", "1.005–1.030", "High = concentrated/dehydrated; fixed 1.010 = kidneys can't concentrate", "First-morning sample concentrates best; contrast and protein skew readings"],
            ["Protein", "Negative/trace", "+ and above = glomerular leak (pre-eclampsia, GN, diabetic, fever, exercise)", "Pre-eclampsia + hypertension + proteinuria = emergency pathway"],
            ["Glucose", "Negative", "Positive = blood glucose over threshold (~180) or tubular fault", "Check blood glucose; glycosuria + ketones + acidosis = DKA"],
            ["Ketones", "Negative", "Fat-burning: DKA, starvation, hyperemesis, low-carb + illness", "DKA needs fluids + insulin + K⁺ protocol, not just glucose correction"],
            ["Blood (Hb/RBC)", "Negative", "Stones, UTI, tumours, GN, trauma, menses contamination, sickle crisis", "Visible haematuria with clots can block the bladder — irrigate per protocol"],
            ["Leukocytes + nitrites", "Negative", "Both positive ≈ UTI (nitrites = gram-negatives); leukocytes alone = inflammation/stones/TB", "Clean-catch midstream before antibiotics; culture before first dose"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "AKI: the kidneys file their complaint in creatinine and potassium",
          body: "Rising creatinine + falling output + hyperkalaemia + metabolic acidosis + fluid overload = acute kidney injury: find the prerenal (dry? hypotensive? septic? — cautious fluids with lung checks), stop the renal insults (NSAIDs, aminoglycosides, contrast, rhabdomyolysis fluids), relieve the postrenal (bladder scan, catheter, prostate, stones). Hyperkalaemia kills first — run the diagram-0023 ladder. Daily weights, strict balance, nephrotoxin review on every drug chart, and contrast procedures need pre/post hydration per protocol. Dialysis indications (AEIOU: acidosis, electrolytes, ingestions, overload, uraemia) are medical decisions — the nurse's job is spotting the patient sliding toward them.",
        },
      ],
      keyPoints: [
        "Tract: kidneys → ureters → bladder → urethra; short female urethra invites UTI; catheters need daily necessity review.",
        "Nephron: glomerulus filters 180 L/day (GFR 125); PCT reclaims 65% + all glucose; loop builds the gradient; ADH/aldosterone fine-tune.",
        "Creatinine tracks GFR; proteinuria = barrier breach; glycosuria = threshold crossed; output ≥0.5 adult / ≥1.0 child mL/kg/h.",
        "Dipstick: colour/SG (hydration), protein (glomeruli), glucose + ketones (DKA), blood, leukocytes + nitrites (UTI).",
        "AKI: prerenal (fill), renal (stop insult), postrenal (unblock) — hyperkalaemia kills first, overload drowns second.",
        "Anatomy: bank 0088; function + drugs: 0022 — read every diuretic by its segment.",
      ],
      quiz: {
        keywords: ["kidney", "ureter", "bladder", "urethra", "UTI", "catheter", "nephron", "glomerulus", "GFR", "creatinine", "ADH", "aldosterone", "urinalysis", "proteinuria", "AKI"],
        categories: ["medsurg", "fundamentals"],
      },
    },
    {
      slug: "fluids-electrolytes-and-acid-base",
      title: "Fluids, electrolytes and acid-base",
      minutes: 20,
      objectives: [
        "Describe body-fluid compartments with ADH, aldosterone and thirst control.",
        "Contrast dehydration with overload and choose IV fluids simply.",
        "State the five key electrolytes with hypo/hyper signs and ECG changes.",
        "Explain buffers, compensation and the anion gap with a worked ABG.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Water: compartments, controllers, catastrophes",
          paragraphs: [
            "Total body water (~<strong>60% men, ~50% women/elders</strong>, ~75% infants — the small and old dehydrate fastest) splits <strong>ICF ⅔ / ECF ⅓</strong>, ECF into <strong>plasma : interstitial ≈ 1:3</strong>. <strong>Osmolality (~285)</strong> is guarded by <strong>thirst + ADH</strong> (water in/out) and <strong>aldosterone</strong> (Na⁺ in, K⁺/H⁺ out), with <strong>ANP</strong> dumping Na⁺ when stretched. <strong>Dehydration</strong>: thirst, dry mucosae, tenting, tachycardia, postural hypotension, oliguria, confusion — BUN rises faster than creatinine, SG high. <strong>Overload</strong>: crackles, JVP up, S3, oedema, weight gain, breathlessness — lungs before ankles in acute overload. <strong>Third-spacing</strong> (burns, peritonitis, pancreatitis, hypoalbuminaemia) hides fluid where it can't circulate — oedematous AND hypotensive together. IV fluids simply: <strong>normal saline</strong> (resuscitation, hyponatraemia — but acidotic + hyperchloraemic in litres), <strong>Ringer's lactate/Hartmann's</strong> (balanced resuscitation, burns, DKA after initial NS), <strong>dextrose</strong> (free water + calories — never resuscitation, hyponatraemic risk), <strong>blood products</strong> (bleeding — the only fluid carrying oxygen). Prescribe like drugs: type, rate, volume, duration, review — <strong>maintenance is not 3 litres of saline for everyone</strong>.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0023.svg",
          alt: "Potassium and calcium emergencies. Potassium 3.5–5.0: hypo shows U waves, cramps, ileus and arrest — replace slowly and fix magnesium; hyper over 5.5 is an emergency with peaked T to wide QRS to sine wave — ladder is calcium STAT, shift inside with insulin-glucose/bicarbonate/salbutamol, then remove via resins or dialysis; never push IV potassium. Calcium 2.1–2.6 corrected for albumin: hypo is twitchy with Chvostek/Trousseau/tetany — IV calcium slow; hyper is sleepy with stones/bones/groans/moans — fluids plus furosemide. Sodium: correct hypo slowly (pontine myelinolysis), replace water in hyper. Magnesium: replete before potassium holds. Phosphate crashes in refeeding.",
          caption: "Potassium stops hearts at both ends, calcium twitches low and sleeps high — ladders beat panic.",
        },
        {
          type: "text",
          heading: "The five electrolytes that rule the ward",
          paragraphs: [
            "<strong>Sodium 135–145</strong> (water's master): <strong>hypo</strong> — nauseated, confused → seizures (correct <strong>slowly</strong>, ≤8–10 mmol/day: <strong>central pontine myelinolysis</strong> punishes rushing); <strong>hyper</strong> — thirsty, febrile, irritable (water loss, diabetes insipidus — replace <strong>water</strong>, find the loss). <strong>Potassium 3.5–5.0</strong> (the cardiac ion): both ends arrest — hypo flattens (U waves, ileus, digoxin toxicity) and hyper peaks (<strong>peaked T → wide QRS → sine → PEA</strong>); IV replacement <strong>never pushed, ≤20 mmol/h peripheral with ECG monitoring</strong>. <strong>Calcium 2.1–2.6</strong> (correct for albumin): hypo <strong>twitches</strong> (perioral tingling, <strong>Chvostek/Trousseau</strong>, tetany, long QT — post-thyroidectomy watch), hyper <strong>sleeps</strong> (stones/bones/groans/moans, short QT — fluids + furosemide + treat cause: malignancy, hyperparathyroidism). <strong>Magnesium 0.7–1.0</strong>: low mimics low K⁺ + low Ca²⁺ <strong>plus torsades</strong> — replete Mg²⁺ or K⁺ won't hold; high flattens reflexes then breathing (renal failure, excess infusion — calcium antagonizes). <strong>Phosphate</strong> (inverse of Ca²⁺): <strong>refeeding crashes it</strong> — cardiac + respiratory failure in the starved: feed slowly with thiamine + monitoring. Recheck every replacement: electrolytes move, kidneys fail, gut absorbs unpredictably.",
          ],
        },
        {
          type: "table",
          heading: "Acid-base with compensation (ROME + direction)",
          columns: ["Disorder", "Numbers", "Compensation", "Bedside direction"],
          rows: [
            ["Respiratory acidosis", "↓pH, ↑PaCO₂", "Kidneys retain HCO₃⁻ (slow, days)", "Ventilate the cause: bronchodilate, clear secretions, NIV/ventilation, reverse opiates"],
            ["Respiratory alkalosis", "↑pH, ↓PaCO₂", "Kidneys dump HCO₃⁻ (slow)", "Calm/sedate, treat pain/fever, find sepsis/PE — rebreathe only for pure panic"],
            ["Metabolic acidosis", "↓pH, ↓HCO₃⁻", "Lungs blow off CO₂ — Kussmaul (fast)", "High gap (DKA, lactic, renal, toxins): treat cause + fluids; normal gap (diarrhoea): replace bicarb/water"],
            ["Metabolic alkalosis", "↑pH, ↑HCO₃⁻", "Lungs retain CO₂ — hypoventilation (limited)", "Stop the loss (vomit/NG/diuretics), replace Cl⁻/K⁺, watch calcium effects"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Fluid balance: the chart that prevents both drownings",
          body: "Record EVERYTHING in (oral, IV, drugs/dilutions, feeds, blood) and EVERYTHING out (urine, vomit, drains, stool estimate, insensible ~500 mL/day + fever/sweat), running cumulative balance per shift; weigh daily — same scale, time, clothes (1 kg ≈ 1 L); dipstick + SG the urine; watch lungs, JVP, oedema, BP/HR, U&Es and confusion as the balance moves. Escalate triggers: output <0.5 mL/kg/h × 2 h, +2 kg in 24 h, new crackles/raised JVP, Na⁺/K⁺ out of range, or any patient whose balance you cannot explain. The chart is a clinical tool, not admin — audit it like observations.",
        },
      ],
      keyPoints: [
        "TBW 60/50/75% (men/women+elders/infants); ICF ⅔, ECF ⅓; ADH + thirst guard osmolality, aldosterone guards Na⁺.",
        "Dehydration: dry, tenting, tachycardic, oliguric; overload: crackles, JVP, oedema, weight; third-spacing does both.",
        "NS resuscitates, RL/Hartmann's balances, dextrose never resuscitates, only blood carries oxygen — prescribe fluids.",
        "Na⁺ (correct hypo slowly), K⁺ (both ends arrest — ladder, never push), Ca²⁺ (twitchy low, sleepy high), Mg²⁺ (replete first), Phos (refeeding).",
        "Buffers instant, lungs minutes, kidneys days; ROME + compensation direction; anion gap splits metabolic acidosis.",
        "Balance charts: all in, all out, cumulative, daily weights (1 kg ≈ 1 L), escalate on output/weight/lungs/electrolytes.",
      ],
      quiz: {
        keywords: ["fluids", "dehydration", "overload", "third-spacing", "IV fluids", "sodium", "potassium", "calcium", "magnesium", "phosphate", "acid-base", "compensation", "anion gap", "fluid balance", "daily weights"],
        categories: ["medsurg", "fundamentals"],
      },
    },
  ],
};
