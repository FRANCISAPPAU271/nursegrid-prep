import type { CourseModule } from "../types";

export const blood: CourseModule = {
  slug: "blood",
  title: "Blood: cells, clotting and safe transfusion",
  summary:
    "The body's transport medium: plasma and the formed elements, red cells and haemoglobin with erythropoiesis and the anaemias including sickle cell, blood groups with the compatibility grid and the transfusion-reaction drill — then white cells and the differential, platelets, the three steps of haemostasis with the clotting cascade, and bleeding versus clotting at the bedside.",
  lessons: [
    {
      slug: "blood-composition-red-cells-and-groups",
      title: "Blood: composition, red cells and groups",
      minutes: 20,
      objectives: [
        "State the functions and composition of blood with normal volumes and haematocrit.",
        "Describe red cells, haemoglobin and erythropoiesis with iron, B12 and folate.",
        "Classify the common anaemias and explain sickle cell disease.",
        "Apply ABO and Rh grouping to transfusion and run the reaction drill.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Five litres doing three jobs",
          paragraphs: [
            "Blood — about <strong>5–6 litres</strong> in the adult — <strong>transports</strong> (oxygen, nutrients, hormones, wastes), <strong>regulates</strong> (temperature, pH, fluid balance) and <strong>protects</strong> (white cells, antibodies, clotting). Spin it and it separates: <strong>plasma (~55%)</strong> — 90% water carrying <strong>albumin</strong> (holds fluid in vessels — low albumin oedemas), <strong>globulins</strong> (antibodies, transport) and <strong>fibrinogen</strong> (clotting), plus nutrients, electrolytes, hormones and wastes; the <strong>buffy coat (<1%)</strong> of white cells and platelets; and <strong>red cells (~45%)</strong>, the <strong>haematocrit</strong> (~45% men, ~40% women — high in dehydration and polycythaemia, low in anaemia and overhydration, so always read it with the patient's fluid story). Serum is plasma minus the clotting factors — the tube the laboratory wanted matters.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0014.svg",
          alt: "Blood composition and ABO compatibility. Spun blood separates into plasma 55 per cent (water, albumin, globulins, fibrinogen, nutrients), buffy coat under 1 per cent (white cells and platelets), and red cells about 45 per cent (haematocrit: men about 45, women about 40). Compatibility grid donor to recipient: group O gives to all; A gives to A and AB; B gives to B and AB; AB gives to AB only. O negative is the universal donor, AB positive the universal recipient, Rh negative never takes Rh positive, and ABO never replaces a crossmatch.",
          caption: "Spin it to see it, group it to give it — and the grid never replaces a crossmatch.",
        },
        {
          type: "text",
          heading: "Red cells: built to carry, born in marrow",
          paragraphs: [
            "Each <strong>red cell</strong> is a biconcave disc with no nucleus — all room for <strong>haemoglobin</strong>: four globin chains, four haem groups, four oxygen molecules per molecule (normal Hb <strong>14–18 g/dL men, 12–16 women</strong>). They are born in <strong>red marrow</strong> under <strong>erythropoietin (EPO)</strong> from oxygen-hungry <strong>kidneys</strong> — which is why chronic kidney disease anaemias — and built with <strong>iron</strong> (haem), <strong>B12 and folate</strong> (DNA for division). After ~120 days the <strong>spleen and liver</strong> recycle them; haem becomes <strong>bilirubin</strong>, excreted in bile — overload or blockage yellows the patient (Module 07 of A&P I, jaundice). <strong>Anaemia</strong> (low Hb) sorts by cell size: <strong>microcytic</strong> (small — iron deficiency from blood loss, pregnancy, hookworm; thalassaemia), <strong>macrocytic</strong> (large — B12/folate deficiency; B12 needs intrinsic factor and years of stores), <strong>normocytic</strong> (chronic disease, kidney failure, acute bleed before the marrow responds). And <strong>sickle cell disease</strong> — one amino acid swapped in globin — polymerizes haemoglobin in low oxygen: crescents that block vessels (painful crises, chest syndrome, stroke) and haemolyze (anaemia, jaundice, gallstones). Ghana screens newborns; nurses hydrate, oxygenate, treat pain and fever fast, and counsel carriers without stigma.",
          ],
        },
        {
          type: "table",
          heading: "Anaemia patterns at a glance",
          columns: ["Pattern (MCV)", "Classic cause", "Bedside clues", "Nursing angle"],
          rows: [
            ["Microcytic (small)", "Iron deficiency — bleeding, pregnancy, hookworm, poor intake", "Pallor, fatigue, koilonychia, pica, heavy menses", "Find the blood loss; iron with vitamin C, away from tea/antacids; deworming"],
            ["Macrocytic (large)", "B12 or folate deficiency; alcohol; some drugs", "Smooth sore tongue, numbness/tingling (B12), fatigue", "B12 lifelong if pernicious anaemia; folate in pregnancy prevents neural-tube defects"],
            ["Normocytic + sickling", "Sickle cell disease", "Pain crises, jaundice, dactylitis in children, chest signs", "Hydrate, oxygen, pain ladder, fever = emergency (sepsis workup), vaccines + penicillin prophylaxis"],
            ["Normocytic + sudden drop", "Acute bleed; haemolysis; marrow failure", "Tachycardia, hypotension, breathlessness on effort", "ABCs, find the source, group and crossmatch, transfuse per protocol"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Transfusion-reaction drill: stop, keep, call",
          body: "Fever, chills, rash, itch, back or flank pain, breathlessness, hypotension, dark or red urine, \"a sense of doom\" — during ANY transfusion, STOP the blood immediately, keep the line open with normal saline, call the doctor and the blood bank, recheck identity (right patient? right unit?), monitor vitals, and send blood and urine samples. Most fatal reactions are ABO incompatibility from identification error, not rare immunology — the two-nurse bedside check is the safety device. TACO (overload — breathless, hypertensive, crackles) slows or stops the transfusion with the patient sat up; suspected TRALI or anaphylaxis escalates as an emergency.",
        },
      ],
      keyPoints: [
        "Blood transports, regulates and protects: plasma 55%, buffy <1%, red cells ~45% (haematocrit M ~45, F ~40).",
        "Red cells: no nucleus, haemoglobin carries 4 O₂; born in marrow under kidney EPO with iron/B12/folate; recycled to bilirubin.",
        "Anaemia by MCV: microcytic (iron), macrocytic (B12/folate), normocytic (chronic disease, bleed, sickle cell).",
        "Sickle cell: one amino acid, sickling in low O₂ — crises, chest syndrome, stroke; hydrate, oxygenate, pain relief, fever = emergency.",
        "O gives to all, AB receives from all; O− universal donor, AB+ universal recipient; Rh− never takes Rh+; always crossmatch.",
        "Reaction drill: STOP the blood, saline open, call doctor + blood bank, recheck identity, vitals, samples.",
      ],
      quiz: {
        keywords: ["blood", "plasma", "albumin", "haematocrit", "red cells", "haemoglobin", "erythropoietin", "iron", "B12", "folate", "anaemia", "sickle cell", "ABO", "transfusion", "crossmatch"],
        categories: ["fundamentals", "medsurg"],
      },
    },
    {
      slug: "white-cells-platelets-and-haemostasis",
      title: "White cells, platelets and haemostasis",
      minutes: 20,
      objectives: [
        "Read the white-cell differential: the five types and what each rise means.",
        "State normal platelet ranges and the bleeding versus clotting risks.",
        "Explain the three steps of haemostasis and the clotting cascade simply.",
        "Apply the science to bleeding patients, clotting patients and anticoagulants.",
      ],
      blocks: [
        {
          type: "text",
          heading: "White cells: read the differential, name the enemy",
          paragraphs: [
            "White cells (<strong>4–11 × 10⁹/L</strong>) defend, and the <strong>differential</strong> names the enemy. <strong>Neutrophils (60–70%)</strong> eat bacteria and die as <strong>pus</strong> — raised in bacterial infection, with immature <strong>bands</strong> (\"left shift\") in severe sepsis; destroyed by chemotherapy and some drugs (<strong>neutropenia</strong> — fever becomes an emergency behind reverse-barrier precautions). <strong>Lymphocytes (20–30%)</strong> run viral, chronic and antibody defence — raised in viral illness, TB, leukaemia; <strong>low CD4</strong> tracks HIV. <strong>Monocytes</strong> become tissue <strong>macrophages</strong>, the clean-up crew. <strong>Eosinophils</strong> fight <strong>parasites</strong> (worms — think eosinophilia in the Ghanaian child) and drive <strong>allergy and asthma</strong>. <strong>Basophils</strong> release <strong>histamine</strong> in allergy and inflammation. Total <strong>leukocytosis</strong> usually means infection, inflammation, steroids or leukaemia; <strong>leukopenia</strong> means marrow suppression, overwhelming sepsis or autoimmune destruction — and the trend across days matters more than any single count.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0015.svg",
          alt: "Haemostasis: vessel injury exposes collagen; step 1 vascular spasm clamps the vessel; step 2 platelets stick into a plug (aspirin blocks this); step 3 the coagulation cascade converges intrinsic and extrinsic paths on factor X, making thrombin then a fibrin mesh (warfarin, heparin and DOACs block here). The clot retracts, squeezing out serum and pulling edges together; fibrinolysis by plasmin later dissolves the fibrin and reopens the vessel while D-dimers rise. Labs map to steps: low platelets break step 2, raised PT/INR or APTT break step 3; vitamin K builds factors II, VII, IX and X; haemophilia A and B are X-linked factor VIII and IX deficiencies; Virchow's triad of stasis, vessel injury and hypercoagulability sits behind every DVT.",
          caption: "Spasm, plug, fibrin — then retract and dissolve; every drug and every lab maps to a step.",
        },
        {
          type: "text",
          heading: "Haemostasis in three steps (plus cleanup)",
          paragraphs: [
            "Bleeding stops in order: <strong>1. Vascular spasm</strong> — torn smooth muscle clamps the vessel within seconds. <strong>2. Platelet plug</strong> — platelets stick to exposed collagen, summon more, and plug the gap (normal platelets <strong>150–400 × 10⁹/L</strong>; low counts ooze and spot <strong>petechiae</strong>). <strong>3. Coagulation</strong> — the cascade: <strong>intrinsic</strong> (contact with collagen) and <strong>extrinsic</strong> (tissue factor from damaged tissue) paths converge on <strong>factor X</strong>, which makes <strong>thrombin</strong>, which weaves <strong>fibrin</strong> through the plug. <strong>Vitamin K</strong> builds factors <strong>II, VII, IX, X</strong> (newborns get it at birth — sterile gut, no vitamin K, bleeding risk); <strong>haemophilia A (VIII)</strong> and <strong>B (IX)</strong> are X-linked — boys bleed into joints and muscle, mothers carry. Then <strong>clot retraction</strong> (serum out, edges together) and <strong>fibrinolysis</strong> (<strong>plasmin</strong> dissolves fibrin; <strong>D-dimers</strong> rise — sensitive for clot, nonspecific everywhere: pregnancy, inflammation, cancer). The mirror image is <strong>Virchow's triad</strong> — <strong>stasis, vessel injury, hypercoagulability</strong> — behind every DVT: the immobile leg, the post-op patient, the oestrogen pill, the long flight. Nursing prevention is mechanical (mobilize, stockings, hydration) before it is pharmacological.",
          ],
        },
        {
          type: "table",
          heading: "Bleeding versus clotting: labs and levers",
          columns: ["Side", "Labs that warn", "Drugs that push this way", "Nursing actions"],
          rows: [
            ["Bleeding risk", "Platelets <150, raised PT/INR or APTT, low fibrinogen", "Warfarin, heparin, DOACs, aspirin, clopidogrel, thrombolytics", "Soft toothbrush, electric razor, pressure after punctures, watch gums/nose/urine/stool, vitamin K / reversal per protocol"],
            ["Clotting risk", "D-dimers up (with symptoms), polycythaemia, dehydration markers", "Oestrogens, some chemotherapy, tranexamic acid (intended)", "Mobilize early, TEDS/SCDs, hydration, leg checks (pain, swelling, warmth, redness), never massage a suspected DVT"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Anticoagulants: know the antidote before the dose",
          body: "Warfarin (INR 2–3 for most indications; vitamin K + PCC reverse it; watch leafy greens, antibiotics, alcohol), heparin infusions and LMWH (APTT or anti-Xa; protamine reverses heparin; watch platelets — HIT), DOACs (no routine monitoring; specific reversals exist — know your hospital's stock), aspirin/clopidogrel (antiplatelet — bleeding time, not INR). Before any invasive procedure, the question is always: what is the patient on, when was the last dose, and what do the latest clotting labs say?",
        },
      ],
      keyPoints: [
        "Differential: neutrophils = bacteria/pus (bands = severe), lymphocytes = viral/chronic, monocytes = cleanup, eosinophils = worms/allergy, basophils = histamine.",
        "Neutropenia + fever = emergency; the trend across days beats any single count.",
        "Haemostasis: vascular spasm → platelet plug → fibrin cascade (X → thrombin → fibrin) → retraction → fibrinolysis.",
        "Vitamin K builds II/VII/IX/X; haemophilia A/B are X-linked VIII/IX deficiencies; D-dimers are sensitive, nonspecific.",
        "Virchow's triad (stasis, injury, hypercoagulability) explains every DVT — mobilize, stockings, hydrate.",
        "Bleeding side: low platelets, raised INR/APTT; clotting side: D-dimers + symptoms; know each anticoagulant's antidote.",
      ],
      quiz: {
        keywords: ["white cells", "differential", "neutrophils", "lymphocytes", "eosinophils", "neutropenia", "platelets", "haemostasis", "fibrin", "thrombin", "vitamin K", "haemophilia", "DVT", "anticoagulant", "warfarin"],
        categories: ["fundamentals", "medsurg"],
      },
    },
  ],
};
