import type { CourseModule } from "../types";

export const pregnancyAndBirth: CourseModule = {
  slug: "pregnancy-and-birth",
  title: "Pregnancy, birth and postnatal",
  summary:
    "The childbearing continuum: dating and trimesters with fetal milestones, the placenta with what crosses it and the teratogens that harm, maternal adaptations system by system, antenatal care with Ghana's screening and prevention package, minor disorders versus red flags, and pre-eclampsia — then labour stages with the partograph, monitoring and pain relief, the newborn's golden minute, postnatal involution and mood, and the PPH drill with cord, shoulder and breech emergencies.",
  lessons: [
    {
      slug: "pregnancy-physiology",
      title: "Pregnancy physiology",
      minutes: 20,
      objectives: [
        "Date pregnancies with Naegele and dating scans and state trimester milestones.",
        "Describe placental exchange with barrier-crossers and teratogens.",
        "Explain maternal adaptations across systems.",
        "Outline antenatal care with screening, prevention and red flags.",
        "Recognize pre-eclampsia, severe features and eclampsia.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Dating and trimesters: the timeline everything hangs on",
          paragraphs: [
            "<strong>Naegele</strong> (LMP − 3 months + 7 days + 1 year) dates until the <strong>dating scan (11–14 weeks, CRL)</strong> corrects it — scan beats memory where they differ by >7 days. <strong>First trimester</strong> (0–13 w): organogenesis (teratogen window), heart flickers ~6 w, nausea peaks ~9 w, miscarriage risk falls after 12 w. <strong>Second</strong> (14–27 w): quickening 16–20 w, anomaly scan 18–22 w, GDM/PE screening 24–28 w, viability ~24 w. <strong>Third</strong> (28–40 w): growth + brain + fat, kicks counted (reduced movements = same-day review), lungs mature ~34 w (<strong>antenatal steroids 24–34 w</strong> where preterm threatens), <strong>term 37–42 w</strong> (early/full/late/post-term counselling). Fundal height (~cm ≈ weeks 20–36, tape-measured, plotted) + growth scans track the fetus; <strong>symmetrical FGR</strong> (early insult: chromosomal, TORCH) versus <strong>asymmetrical</strong> (late placental: head spared, abdomen starved — Doppler + deliver) decide urgency.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0035.svg",
          alt: "Placenta and cord: maternal decidua and intervillous space bathing fetal villi, exchange without blood mixing; cord with 2 arteries and 1 vein in Wharton's jelly (single artery flags anomaly scan). Mother to fetus: oxygen, glucose, amino acids, IgG antibodies, vitamins. Fetus to mother: CO2, urea, bilirubin. Harmful crossers: alcohol, nicotine, TORCH infections, HIV, malaria, and drugs including ACE inhibitors, warfarin, valproate, retinoids. Dating by Naegele corrected by 11–14 week scan; term 37–42; steroids 24–34; folate 5 mg preconception.",
          caption: "Exchange without mixing — until the wrong passengers cross.",
        },
        {
          type: "text",
          heading: "Maternal adaptations: every system volunteers",
          paragraphs: [
            "<strong>Cardiac</strong>: blood volume +50%, CO +40%, HR +15 — <strong>physiological anaemia</strong> (dilutional, Hb ~11 cut-off), systolic murmur + bounding pulses normal, supine hypotension (left tilt from mid-pregnancy). <strong>Respiratory</strong>: tidal volume up, RR same — breathlessness common, wheeze/stridor never normal. <strong>Renal</strong>: GFR +50% (creatinine falls — 90 is high in pregnancy), glycosuria threshold drops, UTIs ascend fast (treat bacteriuria — pyelonephritis triggers labour). <strong>Haem</strong>: hypercoagulable (factors up, protein S down — <strong>VTE</strong>: stockings + mobilize + LMWH where risk). <strong>GI</strong>: progesterone slows all (reflux, constipation, haemorrhoids, gallstones). <strong>MSK</strong>: lordosis + relaxin (backache, symphysis pain, waddle). <strong>Skin</strong>: chloasma, linea nigra, striae — plus <strong>itching palms/soles = obstetric cholestasis until ruled out</strong> (bile acids + stillbirth risk — deliver per protocol, never antihistamine-and-reassure). <strong>Immune</strong>: modulated (UTIs, malaria, flu hit harder — vaccinate: flu, COVID, TT per schedule). Teach the physiology so normal reassures and abnormal alarms.",
          ],
        },
        {
          type: "text",
          heading: "Antenatal care: Ghana's package",
          paragraphs: [
            "Book <strong><12 weeks</strong>: history (obstetric, medical, surgical, drugs, FGM, violence, mental health), <strong>BP + urine + weight</strong> every visit, <strong>FBC + genotype/sickle + blood group + rhesus</strong> (anti-D 28 + 34 w + postnatal if Rh-negative), <strong>HIV + syphilis + HBV + malaria</strong> (test-and-treat: ART, benzathine penicillin, tenofovir-pathway, ACT per trimester), <strong>urine culture</strong>, TB screen, cervical screening if due. Prevent: <strong>TT</strong> (5-dose lifetime), <strong>IPTp-SP</strong> (from 13 w, monthly ×3+), <strong>ITN + repellent</strong>, <strong>iron + folate</strong> (anaemia is Ghana's commonest antenatal finding — treat cause: malaria, hookworm/deworm after 1st trimester, diet, HbSS workup), <strong>calcium</strong> where dietary low, <strong>aspirin 75–150 mg</strong> nightly from 12 w for PE high-risk. Scan: dating 11–14 w (+ aneuploidy counselling), anomaly 18–22 w, growth where indicated. <strong>GDM</strong> (24–28 w OGTT if risk/diabetes history/macrosomia): diet → metformin/insulin — macrosomia + polyhydramnios + neonatal hypo + maternal future T2. Birth plan by 36 w: place, transport, blood donors, danger signs (<strong>bleed, fluid leak, headache/visual, epigastric pain, reduced movements, fever, contractions <37 w, cord/presenting part per vagina</strong>) — every woman leaves every visit able to recite them.",
          ],
        },
        {
          type: "table",
          heading: "Minor disorders versus red flags",
          columns: ["Complaint", "Likely minor (manage)", "Red flag (escalate)", "Rule"],
          rows: [
            ["Nausea/vomiting", "1st-trimester NVP: small meals, ginger, doxylamine/B6, fluids", "Hyperemesis (ketones, weight loss, can't keep fluids), vomiting + headache/visual/epigastric (PE), vomiting + fever/flank (pyelo)", "Ketones + weight + vitals + lytes decide admission"],
            ["Backache/pelvic pain", "Lordosis, SPD: posture, physio, belt, paracetamol", "Constant severe pain + rigid uterus + bleed/shock (abruption), unilateral + syncope (ectopic/rupture), fever + discharge (chorio)", "Vaginal exam NEVER with APH before placenta located (scan first)"],
            ["Swelling", "Dependent ankle oedema, evenings, normal BP/urine", "Face/hands + BP ≥140/90 + proteinuria/headache/visual/epigastric (PE); unilateral leg + pain (DVT)", "PE is multisystem: platelets, LFTs, growth, Dopplers — deliver, don't temporize, at term/severe"],
            ["Discharge/leak", "Physiological leukorrhoea (white, mild, no itch/odour)", "Gush/trickle = ROM (sterile speculum + pooling/nitrazine + antibiotics + steroids + plan); itch/odour (BV/candida/trich — speculum + treat)", "Digital exams forbidden with ROM (infection) — speculum only"],
            ["Reduced movements", "Anterior placenta, busy day — still counts", "Any maternal concern: CTG + scan + Dopplers SAME DAY", "Kicks teaching (28 w+): lie left, count, come in — never 'wait till morning'"],
            ["Headache", "Tension, dehydration, caffeine withdrawal", "PE/HELLP (BP + protein + epigastric + visual + clonus), migraine with aura, meningitis, post-dural puncture", "BP + urine + reflexes + bloods in every pregnant headache — PE kills the reassured"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Pre-eclampsia: the multisystem stalker (and eclampsia to 6 weeks postnatal)",
          body: "BP ≥140/90 + proteinuria/end-organ (platelets <150, creatinine rise, LFTs ×2, pulmonary oedema, headache/visual, epigastric/RUQ pain) after 20 weeks = pre-eclampsia: admit, BP control (methyldopa/nifedipine/hydralazine per protocol — NEVER ACE-i/ARBs), MgSO₄ for severe/eclampsia (Pritchard/Zuspan per protocol with reflexes/RR/urine monitoring + calcium antidote ready), steroids if preterm, fluids restricted (lungs drown easily), delivery definitive (timing by severity + gestation — don't temporize severe). HELLP (haemolysis, elevated LFTs, low platelets) can strike without dramatic BP — epigastric pain + vomiting + malaise in late pregnancy is HELLP until bloods clear it. Eclampsia drill: left lateral, airway, O₂, IV access, MgSO₄ loading, BP control, catheter + strict balance, deliver — and warn every postnatal woman: seizures/headache/visual to 6 WEEKS postnatal need same-day review.",
        },
      ],
      keyPoints: [
        "Naegele until dating scan corrects; trimesters: organogenesis → anomaly/GDM screens → growth + kick counts; term 37–42.",
        "Placenta exchanges without mixing; crosses that harm: alcohol, nicotine, TORCH, HIV, malaria, ACE-i/warfarin/valproate/retinoids.",
        "Maternal: +50% volume (Hb ~11), GFR up (creatinine 90 = high), hypercoagulable (VTE), itchy palms = cholestasis.",
        "Antenatal: book <12 w, BP/urine/weight, FBC/genotype/group, HIV/syphilis/HBV/malaria, TT/IPTp/ITN/iron, aspirin if PE-risk, GDM 24–28 w.",
        "Minor vs red: ketones/vitals/lytes, never VE with APH before scan, ROM = speculum-only, reduced movements same-day, headache = BP + urine + bloods.",
        "PE: ≥140/90 + protein/end-organ; severe/HELLP/eclampsia = MgSO₄ + control + deliver; postnatal seizures to 6 weeks.",
      ],
      quiz: {
        keywords: ["pregnancy", "Naegele", "dating scan", "trimesters", "placenta", "teratogens", "TORCH", "folate", "antenatal", "IPTp", "anaemia", "GDM", "pre-eclampsia", "eclampsia", "MgSO4"],
        categories: ["fundamentals", "medsurg"],
      },
    },
    {
      slug: "labour-birth-and-postnatal",
      title: "Labour, birth and postnatal",
      minutes: 20,
      objectives: [
        "Describe the three labour stages with partograph action lines.",
        "Explain fetal monitoring, pain relief and augmentation simply.",
        "Run the newborn golden minute with APGAR and resuscitation readiness.",
        "Describe postnatal involution, perineal care, mood and PPH drill.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Three stages, one partograph",
          paragraphs: [
            "<strong>1st stage</strong> (0–10 cm): <strong>latent</strong> (0–4, slow, effacement — mobilize, eat/drink, rest, support person present) then <strong>active</strong> (4–10, ~1 cm/h — <strong>partograph/WHO Labour Care Guide</strong>: alert line crossed = reassess + support; action line = intervene — ARM, oxytocin per protocol with <strong>uterine-activity + FHR vigilance</strong>, fluids, bladder, position, analgesia, senior review; arrest + CPD/malposition = section, never heroic pushing). <strong>ROM</strong>: note time/colour (meconium grades vigilance), GBS/antibiotic protocol, avoid digitals. <strong>2nd stage</strong> (10 cm → birth): <strong>passive</strong> descent then <strong>active</strong> pushing (spontaneous urge, upright positions, no directed Valsalva marathons — FHR after each contraction/push; <strong>perineum guarded</strong>, warm compress, controlled head flexion; <strong>episiotomy selective</strong> — fetal distress, instrumental, shoulder history — mediolateral, anaesthetized, repaired in layers). <strong>3rd stage</strong> (birth → placenta): <strong>ACTIVE management</strong> (oxytocin 10 IU IM with anterior shoulder/at birth per protocol + <strong>controlled cord traction</strong> with counter-pressure + uterine massage) then <strong>INSPECT placenta + membranes + cord vessels</strong> (missing lobe = retained tissue = explore/evacuate). <strong>Quantify loss from the first drop</strong> (calibrated drape + weighed pads — eyes halve blood).",
          ],
        },
        {
          type: "text",
          heading: "Monitoring and pain: vigilance with kindness",
          paragraphs: [
            "Low-risk: <strong>Pinard/Doppler q15–30 min 1st stage, q5 min/after each contraction 2nd</strong> (baseline 110–160, accelerations reassure, <strong>decelerations + tachycardia + meconium + reduced variability = intrauterine resuscitation</strong>: left lateral, O₂, fluids, stop oxytocin, tocolysis per protocol, senior + prepare expedited birth). High-risk/oxytocin/meconium/concern: <strong>CTG</strong> (DR C BRAVADO: Define risk, Contractions, Baseline, Variability, Accelerations, Decelerations, Overall — act on the whole picture, not one dip). Pain ladder: <strong>mobility + water + breathing + massage + support person</strong> (continuous support shortens labour and cuts sections — arrange it, don't just allow it) → <strong>pethidine/diamorphine</strong> (nausea + neonatal respiratory depression — naloxone ready, avoid near birth) → <strong>epidural</strong> (sited by anaesthetist, BP/FHR/urine vigilance, top-ups, instrumental rate up, consent + platelets/consent checks). <strong>Augmentation</strong> (ARM + oxytocin infusion): consent, indication (delay + maternal/fetal fitness), <strong>hyperstimulation drill</strong> (stop infusion, left lateral, O₂, fluids, tocolysis, senior) — oxytocin is powerful, titrated and never left running unreviewed.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0036.svg",
          alt: "Labour stages: first (latent 0–4, active 4–10 about 1 cm/h, partograph alert/action, FHR every 15–30), second (10 cm to birth, passive then active pushing, upright positions, perineum guarded, FHR every 5), third (active management: oxytocin, controlled cord traction, massage, placenta inspection). PPH 4 Ts: Tone (massage, oxytocics ladder, balloon, theatre), Trauma (look and repair), Tissue (explore, evacuate), Thrombin (blood products, TXA under 3 h). Golden minute: dry-stimulate-warm, delayed clamping, skin-to-skin, breast within 1 hour, APGAR, vitamin K. Cord prolapse, shoulder dystocia HELPERR, breech drills in footer.",
          caption: "Stages timed, placenta inspected, litres quantified — and drills for cord, shoulder, breech.",
        },
        {
          type: "text",
          heading: "Golden minute and postnatal weeks",
          paragraphs: [
            "Birth: <strong>dry + stimulate + warm</strong> (hat, warmed towels, resuscitaire pre-heated for risk), <strong>delayed cord clamping 1–3 min</strong> (iron + stem cells — early only if resuscitation demands), <strong>skin-to-skin</strong> (thermoregulation + bonding + glucose stability), <strong>breast within 1 h</strong> (positioning + attachment taught hands-on, not leafleted), <strong>APGAR 1/5/10</strong> (Appearance, Pulse, Grimace, Activity, Respiration — resuscitation need, not destiny), <strong>vitamin K + eye prophylaxis + BCG/OPV-0 + weighing + examination</strong> (hips, heart, palate, anus, genitalia, red reflex). Not breathing: <strong>airway (neutral) + bag-mask ventilation (MR SOPA: Mask, Reposition, Suction, Open mouth, Pressure up, Airway adjunct)</strong> — <strong>ventilation before compressions, compressions only if HR <60 despite effective breaths</strong>; call neonatal help at 30 seconds, document times. Postnatal: <strong>involution</strong> (fundus −1 cm/day, <strong>lochia rubra → serosa → alba</strong> over ~4–6 w — <strong>heavy/offensive/secondary PPH = retained/infection: explore + antibiotics + evacuate</strong>), <strong>perineum</strong> (tears 1–4° + episiotomy: ice, analgesia, hygiene front-to-back, pelvic floor, 3rd/4th-degree = consultant repair + antibiotics + follow-up), <strong>bladder/bowel</strong> (void <6 h, constipation regimen), <strong>VTE</strong> (mobilize + LMWH where risk), <strong>mood</strong> (<strong>blues</strong> day 3–5 reassure; <strong>depression</strong> EPDS + refer; <strong>psychosis</strong> — confusion/agitation/delusions, often days 3–14 — <strong>EMERGENCY admission, never leave alone with baby</strong>), <strong>contraception</strong> (fertility returns ~3 w if not breastfeeding — LARC/DMPA/POP quick-start; LAM strict trio), <strong>6-week check</strong> (mother: BP, anaemia, mood, perineum, chronic disease, smear due; baby: weight, feeding, hips/heart/eyes/hearing, vaccines).",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "PPH drill: quantify, resuscitate, 4 Ts, escalate — in parallel",
          body: "Loss ≥500 mL vaginal / ≥1000 CS (or any loss + instability): CALL FOR HELP + 2× large-bore + O₂ + left tilt + warm + bloods (FBC, clotting, crossmatch) + TXA 1 g IV within 3 HOURS + bimanual/uterine massage + bladder emptied. Tone (70%): oxytocin → ergometrine (never hypertensive) → misoprostol/carboprost per protocol → balloon tamponade → theatre (B-Lynch, vessels, hysterectomy last). Trauma: examine (good tone + bleeding = look — tears, haematoma, rupture, inversion). Tissue: explore + evacuate retained; accreta anticipated = consultant + blood + theatre booked. Thrombin: products (FBC/clotting-guided), calcium, warming, labs. Quantify (drape + weighed pads — 1 g ≈ 1 mL), document times/doses/losses/inputs, debrief. Secondary PPH (24 h–12 w): retained/infection — antibiotics + evacuate + resuscitate + VTE watch. Every birth room drills this quarterly — the team that rehearsed bleeds less.",
        },
      ],
      keyPoints: [
        "1st: latent support + active ~1 cm/h with partograph alert→action; 2nd: passive + active pushing, FHR q5; 3rd: oxytocin + CCT + massage + inspect.",
        "Pinard/Doppler low-risk, CTG high-risk (DR C BRAVADO); pain: support/mobility/water → opiates → epidural; oxytocin titrated + hyperstimulation drill.",
        "Golden minute: dry/stimulate/warm → delayed clamping → skin-to-skin → breast <1 h → APGAR → vitamin K; ventilation before compressions (MR SOPA).",
        "Postnatal: lochia stages, perineal degrees, void <6 h, VTE, blues vs depression vs PSYCHOSIS emergency, contraception by 3 w, 6-week check.",
        "PPH: quantify (drape + weigh), 2× access, TXA <3 h, 4 Ts (tone/trauma/tissue/thrombin), escalate early, document, drill quarterly.",
        "Cord prolapse: lift presenting part + emergency CS; shoulder: HELPERR, no fundal pressure; breech: skilled or section.",
      ],
      quiz: {
        keywords: ["labour", "partograph", "contractions", "CTG", "episiotomy", "placenta", "APGAR", "resuscitation", "postnatal", "lochia", "perineal", "psychosis", "PPH", "TXA", "shoulder dystocia"],
        categories: ["fundamentals", "medsurg"],
      },
    },
  ],
};
