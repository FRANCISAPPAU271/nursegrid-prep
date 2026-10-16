import type { CourseModule } from "../types";

export const endocrineSystem: CourseModule = {
  slug: "endocrine-system",
  title: "The endocrine system: hormones and diabetes",
  summary:
    "The chemical messengers: hormone action versus nerves, the glands with the feedback thermostat, the pituitary's tropic hormones with excess and deficiency — then the thyroid with storm and coma, the adrenals with Cushing, Addison and crisis, the pancreas with glucose control, the three diabetes types with diagnosis and pillars of care, and the hypo/DKA/HHS emergency drills.",
  lessons: [
    {
      slug: "hormones-feedback-and-pituitary",
      title: "Hormones, feedback and the pituitary",
      minutes: 20,
      objectives: [
        "Contrast endocrine with exocrine and nervous signalling.",
        "Locate the glands and explain negative versus positive feedback.",
        "Name the pituitary hormones with excess and deficiency states.",
        "Read primary versus secondary failure from hormone + tropic pairs.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Slow mail versus instant message",
          paragraphs: [
            "Nerves whisper in milliseconds to one address; <strong>hormones</strong> post letters in minutes-to-hours to every cell carrying the <strong>receptor</strong>. <strong>Endocrine</strong> glands are ductless, secreting into blood (pituitary, thyroid, adrenals, pancreas-islets, gonads, parathyroids, pineal); <strong>exocrine</strong> glands keep ducts (sweat, salivary, pancreatic acini — the pancreas does both). Chemically: <strong>peptides/amines</strong> (insulin, ADH, adrenaline — surface receptors, fast, short-lived) versus <strong>steroids/thyroid</strong> (cortisol, oestrogen, T4 — intracellular receptors, slow, long-lived, gene-switching). Cells tune sensitivity by <strong>up/down-regulating receptors</strong> (why chronic high insulin breeds resistance, why beta-blockers rebound on abrupt stop). Half-lives span seconds (adrenaline) to days (T4) — which is why thyroxine forgives a missed dose and insulin never does.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0028.svg",
          alt: "Endocrine glands on a body outline: hypothalamus and pituitary (master), pineal, thyroid with parathyroids, thymus, adrenals, pancreas, ovaries/testes — each with its hormones. Negative feedback loop: hypothalamus releasing hormone to pituitary tropic hormone to target gland hormone, with rising hormone switching the top off. Primary failure shows low hormone with high tropic; secondary shows low with low. Steroids must taper with stress dosing. Positive feedback: oxytocin in labour, LH surge at ovulation.",
          caption: "Glands mapped, thermostat explained — and the lab pattern that locates the failure.",
        },
        {
          type: "text",
          heading: "Feedback: mostly negative, rarely positive",
          paragraphs: [
            "<strong>Negative feedback</strong> rules endocrinology: rising hormone suppresses its own stimulators (cortisol ⊣ ACTH ⊣ CRH; T4 ⊣ TSH ⊣ TRH; testosterone ⊣ LH). Read failure by the pair: <strong>primary</strong> (gland dead — <strong>low hormone, HIGH tropic</strong>, pituitary shouting at a corpse: Hashimoto's high TSH, Addison's high ACTH, menopause high FSH/LH) versus <strong>secondary</strong> (pituitary quiet — <strong>low hormone, LOW tropic</strong>: pituitary tumour, postpartum necrosis/<strong>Sheehan's</strong>, head injury, steroids suppressing ACTH). <strong>Positive feedback</strong> amplifies to an event: <strong>oxytocin</strong> (contraction → stretch → more oxytocin → birth, then bleeding control), <strong>LH surge</strong> (oestrogen peak → LH flood → ovulation), clotting and action potentials. Drugs hijack both: steroids suppress, dopamine agonists (bromocriptine) silence prolactin, GnRH analogues first flare then exhaust — always ask what axis a drug bends before stopping it.",
          ],
        },
        {
          type: "text",
          heading: "The pituitary: master gland, vulnerable tenant",
          paragraphs: [
            "Pea-sized under the <strong>hypothalamus</strong> (which rules it via releasing hormones + dopamine brake), behind the <strong>optic chiasm</strong> — tumours press upward into <strong>bitemporal hemianopia</strong> (can't see out the sides: the comb-your-hair test fails) plus headache and pituitary failure. <strong>Anterior</strong> secretes: <strong>GH</strong> (excess: <strong>gigantism</strong> in children, <strong>acromegaly</strong> in adults — hands, jaw, tongue, organs, diabetes, sleep apnoea; deficiency: short stature — growth charts catch it), <strong>TSH</strong>, <strong>ACTH</strong>, <strong>FSH/LH</strong> (puberty, cycles, fertility), <strong>prolactin</strong> (milk; excess: galactorrhoea + amenorrhoea + infertility — check drugs and TSH first). <strong>Posterior</strong> releases hypothalamic stock: <strong>ADH</strong> (absent: <strong>cranial diabetes insipidus</strong> — litres of dilute urine + thirst; excess/ectopic: <strong>SIADH</strong> — concentrated urine + dilutional hyponatraemia + confusion/seizures — fluid-restrict, find cause: chest/brain/drugs) and <strong>oxytocin</strong> (labour, let-down, bonding). <strong>Pituitary apoplexy</strong> (thunderclap headache + visual loss + collapse) and <strong>Sheehan's</strong> (PPH → pituitary infarct → can't lactate + failure months later) are the emergencies hiding behind headache and haemorrhage.",
          ],
        },
        {
          type: "table",
          heading: "Gland map: excess versus deficiency",
          columns: ["Gland (hormone)", "Too much", "Too little", "Bedside flag"],
          rows: [
            ["Pituitary GH", "Gigantism / acromegaly", "Short stature (child)", "Growth chart + shoe/ring size history"],
            ["Thyroid T4/T3", "Hyperthyroid: hot, thin, tremor, AF", "Hypothyroid: cold, tired, constipated", "Storm (febrile + tachycardic + agitated) vs coma (cold + drowsy)"],
            ["Parathyroid PTH", "Hypercalcaemia (stones/bones/groans)", "Hypocalcaemia (Chvostek/Trousseau)", "Post-thyroidectomy tingling = check Ca²⁺"],
            ["Adrenal cortisol", "Cushing: moon, buffalo, striae, sugar", "Addison: bronze, weak, hypotensive, hyponatraemic", "Crisis (shock + confusion + pain) — hydrocortisone STAT"],
            ["Pancreas insulin", "Hypoglycaemia (too much insulin)", "Diabetes (too little/effective)", "Hypo drill vs DKA/HHS (diagram 0029)"],
            ["Gonads", "Precocious puberty / virilization", "Delayed puberty / infertility", "Puberty timing + periods + libido in every history"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The endocrine history fits in five questions",
          body: "Growth and development (height trajectory, puberty timing, periods/fertility/libido)? Weight, appetite and bowel habit (hyper eats and loses, hypo gains and constipates)? Heat or cold intolerance, sweat, tremor, palpitations? Skin, hair and nails (bronze, striae, thinning, pretibial myxoedema)? Drugs (steroids, amiodarone, lithium, antipsychotics — the great endocrine vandals)? Then examine: vitals + weight, neck (goitre, bruit, nodes), eyes (lid lag, exophthalmos), hands (tremor, sweating, acropachy), reflexes (brisk in hyper, hung-up in hypo) — and growth charts in every child, every time.",
        },
      ],
      keyPoints: [
        "Endocrine = ductless, blood-borne, slow, long; peptides fast/short, steroids slow/gene-switching; receptors up/down-regulate.",
        "Negative feedback rules: primary = low hormone + HIGH tropic; secondary = low + low; positive = oxytocin + LH surge to events.",
        "Anterior pituitary: GH/TSH/ACTH/FSH/LH/prolactin; posterior: ADH + oxytocin; tumours hit vision upward (bitemporal).",
        "GH excess: gigantism/acromegaly; ADH absent: DI (dilute litres); ADH excess: SIADH (concentrated + hypoNa).",
        "Apoplexy (thunderclap + visual loss) and Sheehan's (PPH → no milk + failure) hide behind headache and bleed.",
        "Five-question history + vitals/weight/neck/eyes/hands/reflexes + growth charts in children.",
      ],
      quiz: {
        questionIds: ["NG-MOD-AP3-001","NG-MOD-AP3-002"],
        keywords: ["hormone", "endocrine", "receptor", "feedback", "pituitary", "hypothalamus", "GH", "acromegaly", "prolactin", "ADH", "diabetes insipidus", "SIADH", "Sheehan", "goitre", "growth chart"],
        categories: ["med-surg"],
      },
    },
    {
      slug: "thyroid-adrenals-and-pancreas",
      title: "Thyroid, adrenals and the pancreas",
      minutes: 20,
      objectives: [
        "Contrast hyperthyroidism with hypothyroidism including storm and coma.",
        "Contrast Cushing's with Addison's including crisis and steroid safety.",
        "Explain glucose control and the three diabetes types with diagnosis.",
        "Run the hypo, DKA and HHS drills with sick-day and foot rules.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Thyroid: the metabolic throttle",
          paragraphs: [
            "<strong>T4/T3</strong> (iodine-built; Ghana's iodized salt prevents goitre and cretinism) set metabolic rate; <strong>calcitonin</strong> nudges calcium down (minor player). <strong>HYPER</strong> (Graves autoimmune commonest: <strong>exophthalmos, pretibial myxoedema, bruit</strong>; toxic nodules; thyroiditis; amiodarone): hot, sweaty, thin despite eating, tremor, palpitations/<strong>AF</strong>, lid lag, diarrhoea, anxious — <strong>thyroid storm</strong> (febrile + tachycardic + agitated/confused + vomiting/diarrhoea, triggered by infection/surgery/stopping drugs): cool, fluids, beta-blocker + carbimazole + iodine + steroids per protocol, ICU — mortality without treatment is appalling. <strong>HYPO</strong> (Hashimoto's, iodine lack, post-thyroidectomy/radioiodine, lithium/amiodarone): cold, tired, constipated, gaining, bradycardic, hung-up reflexes, depressed, hypercholesterolaemic — <strong>myxoedema coma</strong> (cold + drowsy + bradycardic + hyponatraemic + hypoglycaemic, triggered by cold/infection/sedatives): warm <strong>slowly</strong>, IV thyroxine + hydrocortisone (adrenals may be failing too), ventilate, ICU. <strong>Thyroidectomy watch</strong>: <strong>haematoma strangling the airway</strong> (stridor + neck swelling — open at bedside per protocol), <strong>recurrent laryngeal nerve</strong> (hoarseness, bovine cough — check voice), <strong>hypocalcaemia</strong> (tingling day 1–3 — Chvostek/Trousseau, IV calcium). Thyroxine lifelong, morning empty stomach, recheck TSH 6-weekly after changes.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0281.svg",
          alt: "Bank diagram of the thyroid axis: hypothalamus TRH to pituitary TSH to thyroid T4/T3 with negative feedback.",
          caption: "The thyroid axis — from the question-bank diagram set; storm and coma above.",
        },
        {
          type: "text",
          heading: "Adrenals: cortex keeps you alive, medulla gets you ready",
          paragraphs: [
            "Cortex (cholesterol → steroids): <strong>cortisol</strong> (stress, glucose, anti-inflammatory, immune-brake), <strong>aldosterone</strong> (Na⁺ in, K⁺/H⁺ out — Module 05 of A&P II), <strong>androgens</strong>. <strong>CUSHING'S</strong> (steroid drugs commonest; pituitary ACTH; adrenal tumour; ectopic ACTH): <strong>moon face, buffalo hump, central obesity with thin limbs, purple striae, hypertension, diabetes, osteoporosis/fractures, thin bruised skin, infections, psychosis</strong> — find the cause, taper drugs never-stop-abruptly, control sugar/BP/clots pre-op. <strong>ADDISON'S</strong> (autoimmune, TB — think Ghana — adrenal bleed, pituitary failure): <strong>bronze pigmentation, weak, weight-losing, hypotensive, hyponatraemic, hyperkalaemic, hypoglycaemic</strong> — <strong>crisis</strong> (shock + confusion + abdominal pain + vomiting, triggered by infection/surgery/stopping steroids): <strong>IV hydrocortisone STAT + aggressive fluids + glucose + find trigger</strong> — the steroid card + MedicAlert + sick-day doubling + emergency injection kit keep these patients alive. Medulla (adrenaline/noradrenaline): <strong>phaeochromocytoma</strong> paroxysms (headache + sweating + palpitations + severe HTN — alpha-blockade BEFORE beta, never biopsy blind). Any patient on steroids >3 weeks needs taper plan + card + sick-day rules documented.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0029.svg",
          alt: "Glucose control seesaw: insulin lowers (fed — glucose into cells, glycogen, fat; absent in type 1, resisted in type 2) versus glucagon raises (fasting — glycogenolysis plus gluconeogenesis, with adrenaline, cortisol and growth hormone). Targets: fasting 4–7, 2-hour under 10, HbA1c under 7 per cent. Emergencies: hypo under 4 (sweaty, confused — 15 g fast sugar if conscious, never oral if unconscious: IM glucagon or IV dextrose); DKA (sugar plus ketones plus acidosis — fluids first, fixed-rate insulin, potassium, trigger hunt); HHS (sugar 30-plus, profoundly dry, no ketones — slow fluids, low-dose insulin, VTE watch). Sick-day rules, foot care, hypo unawareness and admission checks in the footer.",
          caption: "One seesaw, three emergencies — and feet, sick days and insulin charts every admission.",
        },
        {
          type: "text",
          heading: "Diabetes: three types, five pillars, lifelong vigilance",
          paragraphs: [
            "<strong>Type 1</strong> (autoimmune β-cell death, young + lean, DKA-prone): <strong>insulin from diagnosis, for life</strong> — basal-bolus (long-acting background + rapid mealtime), carb counting, DAFNE-style education. <strong>Type 2</strong> (resistance + relative deficiency, older + overweight, HHS-prone): <strong>lifestyle first</strong> (weight, activity 150 min/week, diet), then <strong>metformin</strong> (B12 + eGFR watch, hold for contrast/AKI), then add-ons (sulfonylureas hypo-risk, gliptins, SGLT2 — <strong>euglycaemic DKA + Fournier's/necrotizing warning</strong>, GLP-1 — nausea + weight loss, insulin when failing). <strong>Gestational</strong> (placental hormones resist; screens 24–28 weeks): diet → metformin/insulin per protocol — <strong>macrosomia, polyhydramnios, neonatal hypo, maternal future T2</strong>. Diagnosis: <strong>HbA1c ≥6.5%</strong>, fasting ≥7.0, 2-h OGTT ≥11.1, random ≥11.1 + symptoms (repeat if asymptomatic). Complications: <strong>micro</strong> (eyes/retinopathy screening yearly, kidneys/ACR + eGFR, nerves/feet + erectile, all driven by HbA1c + BP) and <strong>macro</strong> (MI, stroke, PVD — statins + BP + smoking + aspirin where indicated). Five pillars: <strong>diet, activity, monitoring, medication, education</strong> — plus feet, eyes, kidneys, vaccines, smoking, alcohol, preconception (HbA1c <6.5% before conceiving, folate 5 mg, stop teratogens) reviewed <strong>annually minimum</strong>.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Hypo drill: Whipple's triad, 15-15 rule, never oral in coma",
          body: "Low glucose + symptoms + relief by sugar = hypo: conscious and swallowing → 15 g FAST sugar (glucose tablets/juice, not chocolate — fat slows it) → recheck 15 min → repeat if still <4 → then slow carb (bread/banana) once recovered. Drowsy/seizing/coma → recovery position, NOTHING oral (aspiration kills), buccal glucose gel + IM glucagon 1 mg (works only if glycogen stocked — alcoholics/liver failure need IV dextrose), IV dextrose 10–20% per protocol with rechecks, find the cause (missed meal? wrong dose? exercise? alcohol? renal failure prolonging insulin? sulfonylurea needing 24-h watch?). Document time, level, symptoms, treatment, response — and every hypo is a medicines-reconciliation event: adjust the regimen before discharge, not after the next one.",
        },
      ],
      keyPoints: [
        "Hyper: hot/thin/tremor/AF + Graves eyes; storm = febrile + tachycardic + agitated → cool, block, ICU. Hypo: cold/tired/constipated; coma = cold + drowsy → warm slowly + IV thyroxine + hydrocortisone.",
        "Thyroidectomy: haematoma airway, RLN voice, hypocalcaemia tingling — check voice + Ca²⁺ + neck.",
        "Cushing: moon/buffalo/striae/sugar (steroids commonest — taper, never stop). Addison: bronze/weak/hypotensive (crisis: hydrocortisone STAT + fluids + glucose).",
        "Insulin lowers (fed), glucagon raises (fasting); T1 = insulin for life, T2 = lifestyle→metformin→add-ons, gestational = macrosomia watch.",
        "Diagnose: HbA1c ≥6.5; micro (eyes/kidneys/nerves) + macro (MI/stroke/PVD); five pillars + annual review + preconception.",
        "Hypo: 15-15 conscious, glucagon/IV dextrose unconscious, never oral in coma; DKA: fluids→insulin→K⁺→trigger; HHS: slow fluids.",
      ],
      quiz: {
        questionIds: ["NG-MOD-AP3-003"],
        keywords: ["thyroid", "hyperthyroid", "Graves", "thyroid storm", "hypothyroid", "myxoedema", "adrenal", "Cushing", "Addison", "crisis", "steroids", "diabetes", "insulin", "hypo", "DKA"],
        categories: ["med-surg"],
      },
    },
  ],
};
