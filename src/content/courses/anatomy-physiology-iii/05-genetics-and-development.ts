import type { CourseModule } from "../types";

export const geneticsAndDevelopment: CourseModule = {
  slug: "genetics-and-development",
  title: "Genetics, embryology and congenital conditions",
  summary:
    "From genes to babies: DNA and chromosomes with meiosis and nondisjunction, Punnett squares, the three inheritance patterns with pedigrees and recurrence risks, sickle cell disease in depth for Ghana, and genetic counselling — then gastrulation and germ layers, organogenesis week by week, critical periods with teratogens, the common congenital conditions with screening, and newborn red flags.",
  lessons: [
    {
      slug: "genetics-and-inheritance",
      title: "Genetics and inheritance",
      minutes: 20,
      objectives: [
        "Explain chromosomes, genes, alleles and meiosis with nondisjunction.",
        "Draw Punnett squares and quote recurrence risks for three patterns.",
        "Read pedigrees with standard symbols.",
        "Describe sickle cell disease fully with screening and counselling.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Chromosomes to alleles: the vocabulary",
          paragraphs: [
            "46 chromosomes (23 pairs: 22 autosomes + XX/XY) carry ~20,000 <strong>genes</strong>; each gene's variants are <strong>alleles</strong>. <strong>Genotype</strong> (the letters: AA/Aa/aa) versus <strong>phenotype</strong> (the show: affected or not); <strong>homozygous</strong> (same twice) versus <strong>heterozygous</strong> (mixed — the <strong>carrier</strong> in recessive disease). <strong>Meiosis</strong> (A&P I, Module 02) halves to 23 per gamete and shuffles by crossing-over — errors (<strong>nondisjunction</strong>) add or drop whole chromosomes: <strong>trisomy 21 (Down)</strong>, 18 (Edwards), 13 (Patau), XO (Turner), XXY (Klinefelter). Risk rises with <strong>maternal age</strong> (Down ~1:1500 at 20 → ~1:100 at 40) — but most affected babies are born to younger mothers because most babies are. <strong>Mosaicism</strong> (mixed cell lines, milder/variable) and <strong>translocation Down</strong> (~4% — hereditary, needs parental karyotypes + family counselling) complete the trisomy story: always ask which type before quoting recurrence.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0300.svg",
          alt: "Bank diagram of the Punnett square: allele crosses with genotype and phenotype ratios.",
          caption: "Punnett squares — from the question-bank diagram set; patterns and risks below.",
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0037.svg",
          alt: "Three inheritance patterns with pedigrees. Autosomal dominant: affected parent Aa with unaffected aa gives 50 per cent affected each child, both sexes, vertical — Huntington's, achondroplasia. Autosomal recessive: two carriers give 25 per cent affected, 50 per cent carrier, 25 per cent clear — sickle cell, cystic fibrosis; both AS parents face 1 in 4 SS every pregnancy. X-linked recessive: carrier mother gives 50 per cent of sons affected and 50 per cent of daughters carriers — haemophilia, Duchenne. Pedigree symbols, trisomy age risks, and screening ladder (combined, NIPT, amnio/CVS) in the footer.",
          caption: "50%, 25%, sons-of-carriers — risks quoted per pregnancy, never per family.",
        },
        {
          type: "text",
          heading: "Sickle cell disease: Ghana's genetic priority",
          paragraphs: [
            "One base swapped (GAG→GTG, glutamate→valine): <strong>HbS polymerizes in low oxygen</strong> — crescents block vessels (<strong>vaso-occlusive crises</strong>: bone/hand-foot/dactylitis pain, chest syndrome, stroke, priapism) and haemolyze (<strong>anaemia, jaundice, gallstones, aplastic crises</strong> with parvovirus). Ghana: trait (AS) ~25%, disease (SS/SC) ~2% of births — <strong>newborn screening</strong> (heel-prick) + <strong>penicillin prophylaxis + vaccines</strong> (pneumococcal, Hib, meningococcal, annual flu) + <strong>folate + hydroxyurea</strong> (raises HbF, halves crises) + transfusion where indicated + <strong>transcranial Doppler stroke screening</strong> transform survival. Crises: <strong>ABCs + high-flow O₂ + aggressive fluids + pain ladder (paracetamol/NSAID → opiates, intranasal diamorphine where available) + treat trigger (infection screen + antibiotics if febrile — fever in SS is emergency until cultures clear)</strong> + incentive spirometry (chest syndrome kills quietly) + VTE watch. Counsel: <strong>1 in 4 SS per pregnancy for AS×AS</strong> (and AS×SS: 50% SS), trait is healthy (malaria-protected, extremes caution: severe dehydration/hypoxia), <strong>never blame</strong> (no parent chose alleles), partner testing + prenatal options + family cascade screening. The nurse who knows hydroxyurea, penicillin and TCD saves more life-years here than anywhere else in genetics.",
          ],
        },
        {
          type: "table",
          heading: "Common conditions at a glance",
          columns: ["Condition", "Pattern", "Key features", "Nursing angle"],
          rows: [
            ["Sickle cell (SS/SC)", "AR", "Crises, chest syndrome, stroke, anaemia, jaundice, dactylitis", "Newborn screen, penicillin, vaccines, hydroxyurea, fever = emergency, TCD"],
            ["Cystic fibrosis", "AR", "Thick secretions: chest infections, pancreatic insufficiency, salty sweat, infertility", "Physiotherapy, enzymes with food, high-calorie, modulators (ivacaftor-era), cross-infection bar"],
            ["Huntington's", "AD", "Chorea + cognitive + psychiatric, onset 30–50, anticipation", "Predictive testing consent + support; no cure — MDT + family counselling"],
            ["Haemophilia A/B", "XLR", "VIII/IX deficiency: haemarthrosis, muscle bleeds, post-op oozing", "Factor replacement, tranexamic, avoid IM/NSAIDs, MedicAlert, carrier daughters counselled"],
            ["Duchenne muscular dystrophy", "XLR", "Gower's sign, calf pseudohypertrophy, wheelchair ~12, cardiac/respiratory", "Steroids + physio + cardiac/resp surveillance + wheelchair/ventilation planning"],
            ["Down syndrome (T21)", "Trisomy (usually nondisjunction)", "Hypotonia, single palmar crease, cardiac (AVSD), duodenal atresia, leukaemia risk", "Cardiac echo, thyroid, hearing/vision, growth charts (Down-specific), early intervention, family support"],
            ["Turner (XO) / Klinefelter (XXY)", "Sex-chromosome", "Turner: short, webbed neck, coarctation, ovarian failure; Klinefelter: tall, gynaecomastia, infertility", "Growth hormone/oestrogen (Turner), testosterone (Klinefelter), cardiac/renal screen, fertility counsel"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Counsel genetics, don't just quote it",
          body: "Three-generation pedigree (pregnancies, losses, stillbirths, consanguinity, ages at onset/death), ethnic-specific risks (sickle, thalassaemia, Tay-Sachs), teratogen/medication review, screening options with honest limits (combined → NIPT → amnio/CVS 0.5–1% loss), recurrence risks per pregnancy (gambler's fallacy kills understanding: 1 in 4 means every pregnancy, not one in four children), non-directive counselling (inform values, never steer), written summary + family letter for cascade screening, and referral to clinical genetics where available. Document pedigree, risks quoted, options offered, decisions made — genetics litigates on what was written.",
        },
      ],
      keyPoints: [
        "46 chromosomes; genotype letters vs phenotype show; meiosis errors → trisomies; maternal age raises risk; translocation Down needs karyotypes.",
        "AD: 50% each child, vertical. AR: 25/50/25, skips, consanguinity. XLR: carrier mothers, 50% sons affected, no male-to-male.",
        "Pedigree: squares/circles, shaded affected, half carrier, double-line consanguineous; risks per pregnancy, not per family.",
        "Sickle: HbS sickles + haemolyzes — crises, chest, stroke; screen newborns, penicillin, vaccines, hydroxyurea, TCD; fever = emergency.",
        "AS×AS = 1 in 4 SS every pregnancy; trait healthy + malaria-protected; never blame; cascade-screen families.",
        "Counsel: 3-generation pedigree, honest screening ladder, non-directive, written summary, refer genetics, document all.",
      ],
      quiz: {
        questionIds: ["NG-MOD-AP3-013","NG-MOD-AP3-014"],
        keywords: ["genetics", "chromosomes", "alleles", "meiosis", "nondisjunction", "Punnett", "dominant", "recessive", "X-linked", "pedigree", "sickle cell", "hydroxyurea", "Down syndrome", "NIPT", "counselling"],
        categories: ["med-surg"],
      },
    },
    {
      slug: "embryology-and-congenital-conditions",
      title: "Embryology and congenital conditions",
      minutes: 20,
      objectives: [
        "Describe gastrulation, the three germ layers and organogenesis weeks.",
        "Explain critical periods with teratogen examples.",
        "List common congenital conditions with screening and management.",
        "Perform the newborn check and escalate red flags.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Three weeks that build a body",
          paragraphs: [
            "Week 1–2: fertilisation → morula → <strong>blastocyst</strong> → implantation (day 6–7) → <strong>bilaminar disc</strong> — the <strong>all-or-none</strong> fortnight (insult loses the pregnancy or leaves no trace). <strong>Week 3 (gastrulation)</strong>: the primitive streak lays <strong>three germ layers</strong> — <strong>ectoderm</strong> (skin, nails, hair, brain, cord, nerves, lens, enamel), <strong>mesoderm</strong> (muscle, bone, heart, blood, vessels, kidneys, gonads), <strong>endoderm</strong> (gut lining, liver, pancreas, lungs, bladder, thyroid) — plus the <strong>notochord</strong> inducing the neural plate. <strong>Weeks 4–8 (organogenesis)</strong>: <strong>neurulation</strong> (neural tube closes day 26–28 — <strong>folate</strong>), heart tube loops + beats week 4, limb buds 4–8, face fuses 4–9, palate 6–9, genitalia differentiate 7–12. <strong>Weeks 9–40</strong>: growth + maturation — brain wiring, surfactant 24–34, fat 32+, testes descend 28–40. Dating matters because vulnerability does: the same drug harmless at 30 weeks devastates at 5.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0038.svg",
          alt: "Germ layers: ectoderm (skin, brain, nerves), mesoderm (muscle, bone, heart, blood, kidneys), endoderm (gut, liver, pancreas, lungs, bladder). Timeline: weeks 1–2 all-or-none, weeks 3–8 organogenesis most vulnerable (neurulation 3–4 with folate, heart beats week 4, limbs 4–8, face/palate 4–9), weeks 9–40 growth. Preconception counselling, teratogen list, screening schedule, newborn check items, and escalation flags in the footer.",
          caption: "Three layers, six vulnerable weeks — and damage done before most women know.",
        },
        {
          type: "text",
          heading: "Teratogens: timing is the poison",
          paragraphs: [
            "<strong>Alcohol</strong> (no safe dose: <strong>fetal alcohol syndrome</strong> — smooth philtrum, thin vermilion, small palpebral fissures + growth restriction + neurodevelopmental injury, lifelong), <strong>smoking</strong> (FGR, abruption, preterm, SIDS — cessation at ANY gestation helps), <strong>valproate</strong> (neural-tube + face + neurodevelopmental — switch preconception where possible), <strong>warfarin</strong> (nasal hypoplasia + stippled bones + brain — heparin bridges pregnancy), <strong>retinoids</strong> (CNS + cardiac + face — pregnancy-test programmes), <strong>ACE-i/ARBs</strong> (renal failure + oligohydramnios — stop at positive test), <strong>tetracycline</strong> (teeth), <strong>NSAIDs 3rd trimester</strong> (ductus closes early), <strong>radiation</strong> (dose + gestation — shield + justify), <strong>maternal disease</strong> (uncontrolled diabetes: cardiac + NTDs + macrosomia; PKU: microcephaly + cardiac; hypo/hyperthyroid: neurodevelopmental — control BEFORE conception). TORCH recap (Module 04): toxo (cat litter, undercooked meat), rubella (vaccinate preconception, never in pregnancy — live), CMV (toddlers' urine/saliva hygiene), HSV (shedding at birth = section), syphilis (screen + penicillin — stillbirth preventable), parvovirus (fetal anaemia + hydrops — refer), Zika/malaria per region. Counsel preconception or counsel too late.",
          ],
        },
        {
          type: "table",
          heading: "Congenital conditions: spot, screen, manage",
          columns: ["Condition", "Spot it", "Screen / confirm", "Manage"],
          rows: [
            ["Neural-tube defects (anencephaly, spina bifida)", "Anencephaly lethal; bifida: sac ± neurology, hydrocephalus", "Folate 5 mg preconception; anomaly scan; AFP/amnio", "Sterile cover + prone + neurosurgery; latex precautions; folate 5 mg next pregnancy"],
            ["Cardiac (VSD, ASD, PDA, TOF, coarctation)", "Murmur + poor feeds/sweating/failure to thrive; cyanosis; absent femorals (coarctation)", "Antenatal cardiac views; postnatal echo + sats + 4-limb BP", "Prostaglandin keeps ductus open in duct-dependent lesions; cardiology + surgery pathway"],
            ["Cleft lip ± palate", "Visible lip; palate FELT (finger sweep every newborn)", "Anomaly scan (lip; palate often missed)", "Feeding support (squeezable bottles, upright) + ENT/hearing + staged surgery + speech therapy"],
            ["Down syndrome", "Hypotonia, single palmar crease, Brushfield spots, cardiac", "Combined/NIPT/amnio; postnatal karyotype", "Echo + thyroid + hearing/vision + Down growth charts + early intervention + family support"],
            ["DDH / clubfoot", "DDH: Barlow/Ortolani clunks, leg-length/asymmetry; clubfoot: fixed equinovarus", "Risk-based ultrasound (breech, family, oligohydramnios); hips re-examined 6–8 w", "Pavlik harness <6 mo; Ponseti casting for clubfoot — early = casts, late = surgery"],
            ["GI atresias/fistulae (oesophageal, duodenal, anorectal)", "TOF: drooling + choking + can't pass NG; duodenal: double-bubble + bilious vomit; anorectal: no anus/stool", "Polyhydramnios antenatally; NG + X-ray postnatally", "NBM + NG on free drainage + IV fluids + urgent surgical referral — VACTERL association hunt"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Newborn red flags: escalate same-shift, every one",
          body: "Apnoeas/cyanosis/persistent distress; murmur with poor feeds, sweating or absent femorals; bilious vomiting or no stool by 48 h; jaundice under 24 h (haemolysis — DAT, FBC, bilirubin, lights ± exchange per chart); jittery/lethargic/poor-feeding hypoglycaemia (at-risk: preterm, SGA, IDM — feed + glucose protocol); fever or hypothermia with poor tone (sepsis — cultures + antibiotics within the hour, never wait); dysmorphic features + hypotonia (karyotype + echo + feeding support); ambiguous genitalia (no gender assignment rush — senior + genetics + urology + family support); seizures (glucose, calcium, sepsis, HIE workup). Document the check head-to-toe with femorals, palate, anus, testes and red reflex — the missed finding is always the unexamined one.",
        },
      ],
      keyPoints: [
        "Weeks 1–2 all-or-none; week 3 gastrulation (ecto/meso/endo + notochord); weeks 4–8 organogenesis; 9–40 growth.",
        "Neural tube closes day 26–28 (folate); heart beats week 4; limbs 4–8; face/palate 4–9; vulnerability tracks dating.",
        "Teratogens: alcohol (FAS), smoking, valproate, warfarin, retinoids, ACE-i, TORCH, maternal diabetes/PKU/thyroid — counsel PREconception.",
        "NTDs (folate + cover + neurosurgery), cardiac (prostaglandin + echo), cleft (feed + staged repair), Down (echo + thyroid + charts).",
        "DDH (Barlow/Ortolani + Pavlik), clubfoot (Ponseti early), atresias (NBM + NG + surgical) — VACTERL hunt.",
        "Red flags: distress, murmur + poor feeds, bilious/no stool, jaundice <24 h, hypo, sepsis, dysmorphic, ambiguous — same-shift escalation.",
      ],
      quiz: {
        questionIds: ["NG-MOD-AP3-015"],
        keywords: ["embryology", "gastrulation", "germ layers", "organogenesis", "neural tube", "folate", "teratogens", "fetal alcohol", "cleft", "Down syndrome", "DDH", "clubfoot", "atresia", "newborn exam", "APGAR"],
        categories: ["med-surg"],
      },
    },
  ],
};
