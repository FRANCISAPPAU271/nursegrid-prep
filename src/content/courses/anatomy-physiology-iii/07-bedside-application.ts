import type { CourseModule } from "../types";

export const bedsideApplicationIII: CourseModule = {
  slug: "bedside-application",
  title: "Bedside application: endocrine, obstetric and neonatal emergencies",
  summary:
    "The capstone: glucose emergencies with monitoring sets, thyroid storm and myxoedema coma, Addisonian crisis, calcium and sodium crises, and insulin safety — then maternal bleeding and collapse, the neonatal resuscitation algorithm with the golden minute, ongoing neonatal care from RDS to sepsis, and the SBAR, drills and debrief culture that holds it all together.",
  lessons: [
    {
      slug: "endocrine-and-metabolic-emergencies",
      title: "Endocrine and metabolic emergencies",
      minutes: 20,
      objectives: [
        "Run the hypo, DKA and HHS drills with monitoring sets.",
        "Recognize thyroid storm, myxoedema coma and Addisonian crisis.",
        "Manage calcium and sodium crises simply.",
        "Apply insulin safety: rights, checks, kits and protocols.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Glucose emergencies: fast killers, protocol fixes",
          paragraphs: [
            "<strong>HYPO (<4)</strong>: Whipple's triad (low + symptoms + relief by sugar) — conscious: <strong>15 g fast sugar, recheck 15 min, repeat, then slow carb</strong>; unconscious/seizing: <strong>recovery position, NOTHING oral, buccal gel + IM glucagon 1 mg</strong> (needs stocked glycogen — alcoholics/liver failure go straight to <strong>IV dextrose 10–20%</strong>), rechecks, cause hunt (missed meal, wrong dose, exercise, alcohol, renal failure, <strong>sulfonylurea = 24-hour watch</strong> — long tail, recurrent dips). <strong>DKA</strong> (sugar + ketones + acidotic + dehydrated + Kussmaul): <strong>fluids FIRST</strong> (shock kills before sugar), <strong>fixed-rate insulin</strong> per protocol, <strong>potassium replaced as it falls</strong> (insulin + correction drive K⁺ down — arrest territory), hourly glucose/ketones/gases/lytes, <strong>find the trigger</strong> (infection, missed insulin, MI, pancreatitis, steroids, SGLT2-euglycaemic), cerebral-oedema watch in children. <strong>HHS</strong> (sugar 30+ + profoundly dry + confused + NO ketones, usually elder + T2): <strong>SLOW fluids</strong> (osmolality falls fast = cerebral oedema), low-dose insulin, VTE prophylaxis, trigger hunt. All three: <strong>hourly obs + strict balance + ECG + neuro watch + SBAR + documented times</strong> — and <strong>sick-day rules</strong> (never stop insulin when ill, monitor 2-hourly, hydrate, ketones, seek help for vomiting/DKA signs) taught before discharge, every admission.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0041.svg",
          alt: "Six endocrine emergency boxes. Hypo under 4: 15 g fast sugar if conscious, never oral if unconscious (IM glucagon or IV dextrose), sulfonylurea needs 24-hour watch. DKA: fluids first, fixed-rate insulin, potassium as it falls, hourly gases, trigger hunt. HHS: slow fluids, low-dose insulin, VTE watch. Thyroid storm: cool, fluids, beta-block, carbimazole, iodine, steroids, ICU. Myxoedema coma: warm slowly, IV thyroxine, hydrocortisone, ventilate. Addisonian: hydrocortisone STAT, aggressive fluids, glucose, trigger hunt. Footer: hypercalcaemia, hyponatraemia, monitoring set, insulin safety, phaeochromocytoma alpha-first.",
          caption: "Six crashes, six ladders — and triggers hunted while protocols run.",
        },
        {
          type: "text",
          heading: "Thyroid and adrenal crises",
          paragraphs: [
            "<strong>THYROID STORM</strong> (febrile + tachycardic/AF + agitated/confused + vomiting/diarrhoea + goitre/eyes, triggered by infection/surgery/trauma/stopped drugs — Burch-Wartofsky scores it): <strong>cool + aggressive fluids + beta-blockade</strong> (propranolol/esmolol per protocol — rate kills) + <strong>carbimazole/PTU</strong> (block new hormone) + <strong>iodine/Lugol's</strong> (block release — AFTER antithyroid, never before) + <strong>hydrocortisone</strong> (adrenals + conversion block) + treat trigger + ICU — mortality untreated is appalling, treated still serious. <strong>MYXOEDEMA COMA</strong> (cold + drowsy/coma + bradycardic + hypotensive + hyponatraemic + hypoglycaemic + hypoventilating, triggered by cold/infection/sedatives): <strong>warm SLOWLY</strong> (blankets, warm room — rapid warming vasodilates to arrest), <strong>IV levothyroxine + hydrocortisone</strong> (before/with T4 — adrenals may fail too), ventilate (CO₂ retainers), glucose + fluids cautiously (hyponatraemia + overload risk), trigger hunt + ICU. <strong>ADDISONIAN CRISIS</strong> (shock + confusion + abdominal pain + vomiting + fever, bronze? — triggered by infection/surgery/trauma/stopped steroids): <strong>IV hydrocortisone 100 mg STAT</strong> (before bloods return — draw ACTH/cortisol first if instant, never delay treatment), <strong>aggressive isotonic fluids</strong> (litres), <strong>glucose</strong>, trigger hunt + antibiotics where septic, <strong>steroid card + MedicAlert + sick-day doubling + emergency kit</strong> counselling before discharge. All three share one law: <strong>hormone + fluids + trigger + ICU-level monitoring</strong> — and the drug chart reviewed for what suppressed, stopped or precipitated.",
          ],
        },
        {
          type: "text",
          heading: "Calcium and sodium crises",
          paragraphs: [
            "<strong>HYPERCALCAEMIA CRISIS</strong> (>3.0–3.5 + stones/bones/groans/moans + polyuria + confusion/coma + short QT/bradycardia — malignancy, hyperparathyroidism, granulomas, thiazides, lithium, milk-alkali): <strong>aggressive isotonic fluids</strong> (corrects + calciuresis) + <strong>furosemide AFTER rehydrated</strong> (never dry) + <strong>bisphosphonate</strong> (takes days — bridge with fluids/calcitonin per protocol) + mobilize + treat cause; recheck Ca²⁺/renal/ECG — the confused elder with constipation and polyuria is hypercalcaemic until bloods clear it. <strong>HYPONATRAEMIC SEIZURES</strong> (<120 + confusion/fits/coma — SIADH, diuretics, gut losses replaced with water, psychogenic polydipsia, post-op fluids): <strong>hypertonic saline per protocol for seizures/coma</strong> (100–150 mL boluses to stop fits, not to normalize), then <strong>SLOW correction ≤8–10 mmol/day</strong> (<strong>central pontine myelinolysis</strong> — locked-in, dead — punishes rushing), fluid-restrict SIADH, find cause (chest/brain/drugs/pain/nausea all secrete ADH). <strong>HYPERKALAEMIA</strong> recap (A&P II, Module 05): <strong>peaked T → wide QRS → sine → PEA</strong> — calcium STAT + shift (insulin-glucose/bicarb/salbutamol) + remove (resins/dialysis) + recheck. Electrolyte emergencies share monitoring: <strong>ECG + neuro obs + strict balance + serial bloods</strong> — and the cause treated alongside the number.",
          ],
        },
        {
          type: "table",
          heading: "Emergency monitoring set",
          columns: ["Parameter", "Frequency in crisis", "Target / trigger", "Nursing note"],
          rows: [
            ["Glucose + ketones", "Hourly (DKA/HHS/hypo protocols)", "Glucose falling 3–5/h DKA; ketones clearing; hypo recheck 15 min", "Bedside meter + lab correlation; document insulin/fluids alongside, never separately"],
            ["ABG/VBG + lactate", "Hourly till stable, then 2–4 h", "pH/HCO₃⁻ rising DKA; lactate <2 perfused; CO₂ in coma/storm", "Venous gases suffice for pH/HCO₃⁻/lactate — spare arteries except hypoxia workup"],
            ["U&E + Mg/Phos", "1–2 h initially", "K⁺ 4–5 DKA (replace as falls); Na⁺ slow; Mg/Phos replete", "DKA potassium FALLS with treatment — the normal K⁺ on arrival is a liar"],
            ["ECG continuous", "Continuous", "Peaked/wide (K⁺), short QT (Ca²⁺), AF (storm), bradycardia (coma)", "Print + file rhythm strips at changes — the trace is the timeline"],
            ["Fluids + weights + urine", "Hourly balance; daily weights", "DKA/HHS positive then euvolemic; output ≥0.5 mL/kg/h; lungs clear", "1 kg ≈ 1 L; crackles/JVP stop fluids; bladder scan before believing anuria"],
            ["Neuro obs + temp", "15–60 min per protocol", "GCS trend; storm cooling; coma slow-warming; seizure watch", "GCS drop 2, blown pupil, posturing, Cushing's = emergency (A&P II, Module 07)"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Insulin safety: the drug that kills by decimal point",
          body: "Five rights PLUS type + dose + time; INDEPENDENT double-check (two nurses, chart-to-patient, no prompting); NEVER abbreviate units ('U' kills — write 'units'); basal-bolus not sliding-scale-alone; overlap basal when stopping infusions (DKA rebound in hours without it); hypo kit (fast sugar + glucagon + dextrose protocol) wherever insulin lives; renal failure/illness/steroids/enteral-feed changes all demand dose review; pre-op plans written (which insulin, when held, what fluids/glucose target); discharge with regimen + sick-day rules + sharps + follow-up reconciled. Every hypo is a medicines-reconciliation event — adjust before discharge, audit the cluster, and report harm honestly.",
        },
      ],
      keyPoints: [
        "Hypo: 15-15 conscious, glucagon/dextrose unconscious (never oral), sulfonylurea 24-h watch, cause + regimen fixed.",
        "DKA: fluids → fixed insulin → K⁺ as falls → hourly gases → trigger; HHS: slow fluids + low-dose insulin + VTE watch.",
        "Storm: cool + fluids + beta-block + carbimazole + iodine + steroids + ICU. Coma: warm slowly + IV T4 + hydrocortisone + ventilate.",
        "Addisonian: hydrocortisone STAT + litres + glucose + trigger; steroid card + kit + doubling rules for life.",
        "HyperCa: fluids + furosemide-after + bisphosphonate; hypoNa fits: hypertonic bolus then ≤8–10/day; hyperK: calcium + shift + remove.",
        "Monitor: glucose/ketones, gases, U&E/Mg/Phos, ECG, balance/weights, neuro obs — insulin by double-check, never 'U'.",
      ],
      quiz: {
        keywords: ["hypo", "DKA", "HHS", "thyroid storm", "myxoedema", "Addisonian", "hydrocortisone", "hypercalcaemia", "hyponatraemia", "hyperkalaemia", "insulin safety", "fluids", "monitoring", "sick-day", "trigger"],
        categories: ["medsurg", "fundamentals"],
      },
    },
    {
      slug: "obstetric-and-neonatal-emergencies",
      title: "Obstetric and neonatal emergencies",
      minutes: 20,
      objectives: [
        "Manage APH, PPH, ectopic and uterine emergencies simply.",
        "Recognize eclampsia, collapse, embolus and maternal sepsis.",
        "Run the neonatal resuscitation algorithm with doses.",
        "Describe RDS, hypoglycaemia, jaundice, HIE and neonatal sepsis.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Maternal bleeding: locate before you touch",
          paragraphs: [
            "<strong>APH (bleed ≥24 w)</strong>: <strong>placenta praevia</strong> (painless, bright, recurrent — <strong>NO vaginal exam until scan locates the placenta</strong>, resuscitate, steroids, deliver by section where covering) versus <strong>abruption</strong> (painful + rigid/woody uterus + distress ± revealed/concealed bleed + shock + DIC — resuscitate, blood + TXA, deliver urgently, watch <strong>Couvelaire/coagulopathy</strong>) versus vasa praevia (ruptured vessels + fetal bradycardia = crash section) versus local causes (show, cervicitis — speculum only). <strong>PPH</strong> recap (Module 04): quantify + 2× access + TXA <3 h + 4 Ts + escalate. <strong>Ruptured ectopic</strong> (amenorrhoea + syncope + shoulder-tip + shock ± vaginal bleed): pregnancy test + resuscitate + blood + laparoscopy/laparotomy — the ED's can't-miss in every reproductive-age collapse. <strong>Uterine rupture</strong> (scarred uterus + hyperstimulation/trauma + constant pain + loss of station + shock + abnormal CTG): crash section + blood + repair/hysterectomy. <strong>Inversion</strong> (fundus inside-out + shock + bradycardia/vagal): <strong>replace immediately</strong> (Johnson manoeuvre + tocolysis per protocol), resuscitate, antibiotics. All bleeds: <strong>left tilt, warm, blood products + calcium, TXA, bladder emptied, times documented</strong> — and the placenta inspected after every birth, every time.",
          ],
        },
        {
          type: "text",
          heading: "Maternal collapse: eclampsia, embolus, sepsis",
          paragraphs: [
            "<strong>ECLAMPSIA</strong> (seizures ± known PE, to 6 weeks postnatal): left lateral + airway + O₂ + IV access + <strong>MgSO₄ loading + maintenance</strong> (reflexes/RR/urine monitoring, <strong>calcium antidote</strong> ready) + BP control + catheter + strict balance + <strong>deliver</strong> (stabilize then deliver — don't temporize) + baby team + HDU/ICU. <strong>AMNIOTIC FLUID EMBOLUS</strong> (sudden collapse + hypoxia + DIC +seizures during labour/birth/ROM/manipulation): resuscitate + 100% O₂ + blood products + deliver if viable + ICU — <strong>mortality appalling, speed everything</strong>. <strong>PE</strong> (breathless + tachycardic + pleuritic + collapse, pregnancy/hypercoagulable/postnatal): heparinize per protocol + CTPA + resuscitate + filter where indicated + delivery planning with haematology. <strong>SEPSIS</strong> (chorioamnionitis: fever + tachycardia + tender uterus + offensive liquor + fetal tachycardia → <strong>deliver + broad antibiotics</strong>; endometritis postnatal: fever + offensive lochia + tender uterus → cultures + antibiotics + retained-tissue hunt; wound/UTI/mastitis sources): <strong>Surviving Sepsis adapted</strong> (cultures, lactate, antibiotics <1 h, fluids with lung watch, source control, SBAR). <strong>VTE prophylaxis</strong>: risk-assess EVERY admission + postnatal (LMWH + stockings + mobilize) — embolus remains the direct killer most preventable by prescribing.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0042.svg",
          alt: "Neonatal resuscitation flowchart: dry, warm and stimulate at birth; if breathing with tone and heart rate over 100, routine care with delayed clamping and skin-to-skin. If not: airway plus PPV 40–60 per minute with chest rise (MR SOPA correctives); heart rate under 100 gets correctives plus oxygen up plus senior help; under 60 gets 3:1 compressions with 100 per cent oxygen; still under 60 gets IV/IO adrenaline 10 mcg/kg plus 10 mL/kg volume plus glucose. Meconium, preterm, cord gases, APGAR, equipment check and times in the footer.",
          caption: "Air before algebra — ventilation first, compressions only on failure, drugs last.",
        },
        {
          type: "text",
          heading: "Ongoing neonatal care: the first days decide",
          paragraphs: [
            "<strong>RDS</strong> (preterm + grunting/flaring/recessing + O₂ need): <strong>CPAP early + surfactant per protocol + antenatal-steroid history checked</strong> + gentle ventilation + caffeine + fluids/nutrition + infection vigilance — <strong>chronic lung disease</strong> follows oxygen + barotrauma: target sats per gestation (usually 91–95% preterm), wean aggressively. <strong>HYPOGLYCAEMIA</strong> (at-risk: preterm, SGA, IDM, cold/stressed — jittery/lethargic/poor-feeding/apnoeic): <strong>feed + glucose protocol</strong> (buccal gel + IV dextrose per threshold chart), rechecks, cause hunt — brains burn glucose or burn out. <strong>JAUNDICE</strong>: <24 h <strong>PATHOLOGICAL</strong> (haemolysis: rhesus/ABO/G6PD/spherocytosis — DAT + FBC + bilirubin + lights ± exchange per gestation chart) versus 2–4 d physiological/breastfeeding versus prolonged >14 d (biliary atresia if PALE STOOLS + dark urine — stool-colour cards catch it — plus hypothyroid/UTI/breast-milk workup); <strong>kernicterus</strong> (lethargy → arching → deafness/CP) is the missed-bilirubin catastrophe — chart, don't eyeball. <strong>SEPSIS</strong> (poor tone + temp instability + poor feeds + apnoeas + glucose lability — GBS/E. coli/Listeria): <strong>cultures + antibiotics <1 h</strong> (benzylpenicillin + gentamicin per protocol), fluids/glucose support, LP where indicated. <strong>HIE</strong> (cord gases + encephalopathy staging after resuscitation): <strong>cooling criteria + referral <6 h</strong> — passive cooling starts while arranging transfer. All: <strong>thermoregulation + feeding + weights + cord/eye care + vaccines + hearing + hips/heart/palate checks + parent teaching + SBAR handover</strong>.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Drills, trolleys, SBAR, debrief: the culture that saves mothers and babies",
          body: "Obstetric + neonatal emergency trolleys checked EVERY shift (PPH drugs + TXA + balloons, MgSO₄ + calcium, resuscitaire + bag-masks + ET + adrenaline + fluids + warming); PROMPT-style multidisciplinary drills QUARTERLY (PPH, eclampsia, shoulder, breech, cord, collapse, neonatal resus — timed, debriefed, action-logged); SBAR handover with times for every emergency (called/arrived/drugs/doses/losses/births/scores); contemporaneous documentation (partograph, resus sheet, drug chart, incident report); family communication (honest, compassionate, interpreter where needed, belongings + memory-making in loss); perinatal/maternal audit (every death and near-miss reviewed without blame, lessons implemented); and STAFF debrief (cumulative obstetric trauma wounds midwives silently — supervision, rest and reflection are clinical duties). The unit that drills together bleeds less, seizes less and loses fewer babies.",
        },
      ],
      keyPoints: [
        "APH: praevia painless (no VE before scan) vs abruption painful/rigid/DIC; ectopic = syncope + shoulder-tip + shock; inversion replaced immediately.",
        "Eclampsia: lateral + airway + MgSO₄ + BP control + deliver; AFE/PE: resuscitate + products + deliver; sepsis: cultures + antibiotics <1 h + source.",
        "Neonatal: dry/warm/stimulate → PPV 40–60 (MR SOPA) → HR<60 compressions 3:1 → adrenaline 10 mcg/kg + volume + glucose.",
        "RDS: CPAP + surfactant + gestation sats; hypo: feed + gel + IV per chart; jaundice <24 h pathological (DAT + lights ± exchange).",
        "Neonatal sepsis: cultures + antibiotics <1 h; HIE: cooling <6 h; pale stools + dark urine = biliary atresia hunt.",
        "Trolleys checked, drills quarterly, SBAR + times, honest audit, family care, staff debrief — culture saves lives.",
      ],
      quiz: {
        keywords: ["APH", "abruption", "praevia", "ectopic", "eclampsia", "MgSO4", "embolus", "sepsis", "neonatal resuscitation", "PPV", "APGAR", "RDS", "jaundice", "kernicterus", "cooling"],
        categories: ["medsurg", "fundamentals"],
      },
    },
  ],
};
