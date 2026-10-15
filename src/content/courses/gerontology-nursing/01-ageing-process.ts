import type { CourseModule } from "../types";

export const ageingProcess: CourseModule = {
  slug: "ageing-process",
  title: "The ageing process",
  summary:
    "Grey hair, full dignity: biological and psychosocial theories of ageing with physiological changes by system and the nurse's bedside eye, golden rules (reserve, blunted presentation, function over age), Ghana's ageing picture and myth-busting — then WHO's three healthy-ageing pillars, yearly screening plus vaccines, written lifestyle prescriptions, and the ageism bias check with CHPS/OPD prevention roles.",
  lessons: [
    {
      slug: "theories-and-physiology-of-ageing",
      title: "Theories and physiology of ageing",
      minutes: 20,
      objectives: [
        "Compare biological and psychosocial ageing theories.",
        "Describe physiological changes by system.",
        "Apply golden rules: reserve, blunting, function.",
        "Bust ageing myths with facts.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Why we age: two theory families",
          paragraphs: [
            "<strong>Biological</strong>: programmed/genetic (ageing clock in genes — species lifespans fixed), wear-and-tear (use wears parts out — joints, arteries), free-radical (oxidant damage accumulates — antioxidants + exercise slow it), cross-link (proteins stiffen — lenses cloud, arteries harden), immunological (defences fade — infections + cancers rise). <strong>Psychosocial</strong>: disengagement (mutual withdrawal of elder and society — dated; never impose 'rest'), activity (stay busy, stay well — mostly true: roles protect health), continuity (keep identity, habits, relationships — best fit: the farmer farms smaller, the trader advises). Exam pairs: biological explains BODIES, psychosocial explains LIVES — nursing needs both (the stiff knee needs physio AND the title 'family head' needs honouring). Ghana ages fast: 60+ population growing, NCDs rising, urban elders isolated and rural elders farming into their 80s — gerontology is every nurse's near future, not a specialty's hobby.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-GRN-0001.svg",
          alt: "Six system panels: heart-vessels with postural drops and lie-sit-stand BPs; lungs-kidney with weak cough falling GFR and kidney-dosed drugs; bones-muscle with sarcopenia and fall-proofing; brain-senses with glasses and hearing aids on; skin-gut with moisturise offload fibre; immune-glands with vaccinate and afebrile warning. Theories listed biological and psychosocial. Golden rules: ageing not disease, reserve shrinks, presentation blunts, recovery slows, variability rules. Ghana ageing noted. Four myths busted.",
          caption: "Assess function, not candles — frailty beats age at every bedside.",
        },
        {
          type: "text",
          heading: "Changes by system + the nursing eye",
          paragraphs: [
            "<strong>Heart/vessels</strong>: stiff arteries → systolic hypertension; slow baroreflex → postural drops — lie-sit-stand BPs, rise slowly, hydrate. <strong>Lungs/kidney</strong>: stiff chest + weak cough → pneumonia risk; GFR falls ~1%/year, thirst blunted — chest care, push fluids (unless restricted), DOSE BY KIDNEY (Module 04). <strong>Bones/muscle</strong>: bone loss + sarcopenia + stiff joints + slow gait — calcium + D, resistance exercise (sarcopenia REVERSES), fall-proofing (Module 06). <strong>Brain/senses</strong>: slower recall + poor sleep normal; presbyopia, cataract, presbycusis, taste loss — glasses + hearing aids ON, face the patient, light the room, repeat kindly. <strong>Skin/gut</strong>: thin dry slow-healing skin; teeth loss + slow gut + constipation — moisturise, offload pressure areas, fibre + fluids + movement. <strong>Immune/glands</strong>: weak defences + poor fever — vaccinate; <strong>afebrile ≠ well</strong>: new confusion, falls or 'off legs' IS the fever (Module 03's delirium). Golden rules: ageing ≠ disease (slower recall normal; getting lost is NOT); reserve shrinks (UTI → delirium); recovery slows (mobilise from DAY 1); variability rules (assess FUNCTION).",
          ],
        },
        {
          type: "table",
          heading: "Normal ageing vs warning signs",
          columns: ["Finding", "Normal ageing", "Warning — assess urgently"],
          rows: [
            ["Memory", "Slower recall, mislaid keys, remembered later", "Getting lost, repeating hours, unsafe stove/meds (M03: 3Ds)"],
            ["Mobility", "Slower gait, stairs careful, stick helps", "New falls, 'off legs', one-sided weakness (stroke? fracture?)"],
            ["Continence", "Night frequency, urgency with prostate", "New incontinence, retention, burning + fever (M03)"],
            ["Mood/sleep", "Earlier bedtimes, lighter sleep", "Withdrawn, hopeless, appetite gone (M03: depression)"],
            ["Appetite/weight", "Smaller meals, taste duller", "Unplanned loss, dysphagia, vomiting blood (red flags)"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Function is the vital sign of ageing",
          body: "In older adults, the sharpest 'observation' is functional change: the elder who walked to the farm yesterday and can't rise today is ACUTELY ILL until proven otherwise — infection, MI, stroke, bleed, metabolic crash. Teach families this one rule ('new can't-do = hospital NOW, even without fever or pain') and you will catch the silent MIs, afebrile sepses and strokes that kill Ghana's elders quietly. Document baseline function on every admission (walks? dresses? continent? confused?) — without baselines, change is invisible (Module 02's assessment).",
        },
      ],
      keyPoints: [
        "Biological: programmed, wear-and-tear, free-radical, cross-link, immunological.",
        "Psychosocial: disengagement (dated), activity (roles protect), continuity (identity kept).",
        "System changes each carry a nursing action: BPs, fluids, kidney dosing, aids ON, offload, vaccinate.",
        "Golden rules: ageing ≠ disease; reserve shrinks; presentation blunts; mobilise day 1; function over age.",
        "Afebrile ≠ well — new confusion/falls/'off legs' is the fever; baseline function always documented.",
        "Ghana ages fast with NCDs rising; NHIS covers 70+ premiums — register, don't bill.",
      ],
      quiz: {
        keywords: ["theories", "programmed", "wear-and-tear", "free-radical", "disengagement", "activity", "continuity", "sarcopenia", "presbycusis", "cataract", "GFR", "reserve", "afebrile", "function", "myths"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "healthy-ageing-and-health-promotion",
      title: "Healthy ageing and health promotion",
      minutes: 20,
      objectives: [
        "Apply WHO's three healthy-ageing pillars.",
        "Run yearly screening plus vaccines.",
        "Prescribe lifestyle like drugs.",
        "Detect and ban ageism in self and ward.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Health, participation, security",
          paragraphs: [
            "WHO's active-ageing pillars: <strong>HEALTH</strong> (move 150 min/week, eat colourful, sleep well, no smoke, little alcohol, vaccinate — Module 06 details), <strong>PARTICIPATION</strong> (family decisions, worship, welcome work, voting, volunteering, grandparenting LOUD — roles protect cognition and mood; retirement without roles risks decline), <strong>SECURITY</strong> (income/pension, safe home, active NHIS, abuse-free life — Module 05, will written). Nurses promote all three: the diabetic elder gets glucose control AND the market-stall role protected AND the NHIS card renewed. <strong>Screening yearly (60+)</strong>: BP + weight + glucose/HbA1c, lipids, vision (cataract/glaucoma — operable blindness is a nursing referral triumph), hearing, dental, feet (diabetics EVERY visit), cognition + mood (Module 02 tools), falls + frailty review, prostate/breast/cervical per protocol, TB screen if coughing, FULL MEDS REVIEW (Module 04). <strong>Vaccines</strong>: influenza yearly, pneumococcal, COVID boosters, tetanus boosters, hepatitis B if at risk — chart + recall + consent + explain (PRO-I consent rules).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-GRN-0002.svg",
          alt: "Three pillars: health with move eat sleep vaccinate, participation with family worship work vote volunteer, security with income safe-home NHIS abuse-free will. Screening schedule yearly: BP glucose lipids vision hearing dental feet cognition mood falls frailty cancers TB meds review. Vaccines: influenza pneumococcal COVID tetanus hepatitis B. Lifestyle prescriptions: walk strength balance plate sleep brain teeth. Ageism checks: never too-old-for, never elderspeak, always direct consent, always ask goals. CHPS OPD prevention roles listed.",
          caption: "Health + participation + security — screen yearly, prescribe lifestyle, ban ageism.",
        },
        {
          type: "text",
          heading: "Lifestyle, written like drugs",
          paragraphs: [
            "Prescriptions elders keep: <strong>WALK</strong> (brisk 30 min × 5/week — with friend/stick where needed; walking groups beat solo resolve) + <strong>STRENGTH</strong> (bands/weights 2×/week — sarcopenia REVERSES at any age) + <strong>BALANCE</strong> (heel-toe stands, one-leg holds — falls halve) + <strong>PLATE</strong> (protein each meal, calcium + D, 5 veg/fruit, salt-smart, fluids 1.5–2 L unless restricted — Module 06) + <strong>SLEEP</strong> (routine, daylight, less caffeine/naps — hypnotics LAST resort, Module 04) + <strong>BRAIN</strong> (read, worship, games, grandchildren's homework — novelty grows reserve) + <strong>TEETH</strong> (brush + fitted dentures + yearly dentist — chewing = nutrition; toothless elders starve politely). Write them DOWN (paper the fridge), involve family, review monthly. CHPS/OPD role: keep elder registers, recall defaulters, vaccinate outreaches, screen at markets/mosques/churches, teach families (Module 05). Document promotion given (PRO-I M5: unrecorded teaching is untaught at audits and tribunals). Prevention creates the healthy 80-year-olds who teach YOU tomorrow.",
          ],
        },
        {
          type: "table",
          heading: "Ageism: spot it, stop it",
          columns: ["Ageist moment", "Why it harms", "Professional replacement"],
          rows: [
            ["'Too old for surgery/rehab/hearing aids'", "Denies proven benefit by candles not fitness", "Assess fitness (frailty, function — M02), offer equally"],
            ["Elderspeak: 'sweetie/sit down, dear'", "Patronises, disempowers, confuses", "Name + title, adult pace, verify understanding"],
            ["Talking to the child, not the elder", "Steals autonomy; elder disengages", "Address elder first; family included WITH consent"],
            ["'Pain/confusion normal at your age'", "Masks treatable disease (M03)", "Assess every symptom; normal ageing never anywhere near this"],
            ["Rest prescribed instead of rehab", "Deconditions; dependence cements", "Mobilise day 1, aids + physio, goals that matter to THEM"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Ask goals, not just history",
          body: "'What matters to YOU this year?' — farming? the granddaughter's wedding? walking to mosque? independence from the chamber pot? Care aims THERE: the rehab goal is 'walk to the farm gate', not 'improve quadriceps 20%'; the discharge plan protects the wedding trip, not just the wound. Goal-asked elders adhere, mobilise and thrive; goal-ignored elders comply briefly and fade. Record the goal on the care plan's first line (Modules 02–03 build on it) and let every student, doctor and relative read it. Dignity is care pointed at a person's own north star.",
        },
      ],
      keyPoints: [
        "Pillars: health (move/eat/sleep/vaccinate), participation (roles), security (income/safety/NHIS/will).",
        "Screen yearly: BP, glucose, lipids, vision, hearing, dental, feet, cognition, mood, falls, cancers, meds.",
        "Vaccinate: influenza, pneumococcal, COVID, tetanus — chart + recall + consent.",
        "Prescribe lifestyle in writing: walk, strength, balance, plate, sleep, brain, teeth.",
        "Ban ageism: never 'too old for', never elderspeak, always direct consent, always ask goals.",
        "CHPS/OPD: registers, recalls, outreaches, family teaching — document all promotion.",
      ],
      quiz: {
        keywords: ["healthy ageing", "pillars", "participation", "screening", "vaccines", "influenza", "pneumococcal", "lifestyle", "exercise", "sarcopenia", "balance", "ageism", "elderspeak", "goals", "CHPS"],
        categories: ["fundamentals"],
      },
    },
  ],
};
