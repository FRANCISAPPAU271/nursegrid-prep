import type { CourseModule } from "../types";

export const nutrientsAndEnergy: CourseModule = {
  slug: "nutrients-and-energy",
  title: "Nutrients and energy",
  summary:
    "Fuel and builders: carbs, protein and fats with 4-4-9 energy, Ghanaian sources, energy balance across lifecycles, fibre and water rules, glycaemic sense and plate wisdom with poverty-aware counselling — then the micronutrient six (A, iron/folate/B12, calcium/D, iodine/zinc, C/Bs) with deficiency spotting, absorption tricks, supplement counselling, and rainbow meal planning.",
  lessons: [
    {
      slug: "macronutrients-and-energy",
      title: "Macronutrients and energy",
      minutes: 20,
      objectives: [
        "State 4-4-9 with functions and Ghana sources.",
        "Counsel energy balance across needs.",
        "Prescribe fibre and water correctly.",
        "Counsel portions with poverty awareness.",
      ],
      blocks: [
        {
          type: "text",
          heading: "4-4-9: the energy trio",
          paragraphs: [
            "<strong>CARBS 4 kcal/g</strong> (45–65% energy): brain + muscle fuel — whole beats refined: millet, maize, brown rice, oats, sweet potato, yam; LIMIT sugary drinks, sweets, white overload (liquid weight + diabetes fuel). <strong>PROTEIN 4 kcal/g</strong> (10–35%): build + repair + immune (~0.8 g/kg baseline; MORE in pregnancy, lactation, teens, illness, elders — Modules 03/GER): beans, fish, eggs, groundnut, soya, chicken, milk — combine PLANTS daily (beans + maize = complete). <strong>FATS 9 kcal/g</strong> (20–35%): brain, hormones, vitamins A/D/E/K carried — unsaturated wins: groundnut, soya, fish (omega-3), avocado, palm oil MODERATE; LIMIT deep-fried, trans fats, fatty meats. <strong>Energy balance</strong>: IN (food/drink) vs OUT (BMR ~60–70% + activity + digestion) → equal = stable, surplus = gain, deficit = lose. Needs RISE (pregnancy +340–450 kcal, lactation +500, teens, illness, manual work) and FALL (elders, sedentary, small frames) — counsel portions + movement, NEVER starvation (Module 05's re-feeding danger).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-NUT-0001.svg",
          alt: "Three macro panels: carbs 4 kcal with whole sources and sugar limits, protein 4 kcal with requirements and plant combining, fats 9 kcal with unsaturated choices and fried limits. Energy balance equation with rising and falling needs. Fibre 25 to 30 grams with gradual plus water. Water 1.5 to 2 litres with restriction caveat and pale-urine test. Glycaemic sense: pair carbs, whole fruit, breakfast. Ghana plate wisdom: fist palm two-fists portions. Counselling chain: recall praise one-change teach-back review.",
          caption: "4-4-9, fibre 25+, water pale — portions counselled, poverty respected.",
        },
        {
          type: "text",
          heading: "Fibre, water, glycaemic sense",
          paragraphs: [
            "<strong>FIBRE 25–30 g/day</strong>: feeds gut flora, slows sugar spikes, lowers cholesterol, fills cheaply — beans, vegetables, fruits, whole grains, groundnut skins; add GRADUALLY + water (gas fades in weeks). <strong>WATER 1.5–2 L/day</strong>: more in heat, fever, breastfeeding, diarrhoea/vomiting; LESS where restricted (heart/kidney limits HONOURED — check!). Pale urine = hydrated; sugary drinks ≠ water. <strong>Glycaemic sense</strong>: pair carbs with protein/fibre/fat (banku + beans + veg spikes less than banku alone — Module 04 diabetes builds on this), whole fruit > juice (fibre kept, sugar slowed), breakfast EATEN (skippers overeat at night). Ghana plate wisdom: fufu/banku/kenkey + soup with fish/beans + plenty veg is ALREADY balanced — counsel PORTIONS (fist carbs, palm protein, 2 fists veg) + restrained oil + salt-smart, not foreign foods. Festive overload + daily soft drinks = the modern mismatch driving obesity/diabetes (Module 05).",
          ],
        },
        {
          type: "text",
          heading: "Counselling that changes plates",
          paragraphs: [
            "Chain: <strong>24-hour recall</strong> ('what did you eat yesterday? everything, including drinks and snacks') → PRAISE good ('beans daily — excellent protein!') → <strong>ONE change</strong> ('swap afternoon Coke for water + groundnuts') → teach-back ('tell me your swap') → REVIEW date. One change kept beats ten advised-and-ignored. Poverty-aware ALWAYS: beans/eggs/groundnut/small fish = cheap protein; seasonal veg/markets = cheap vitamins; water = free; 'eat more meat' to the trader earning daily is counsel that insults — 'add an egg + beans to what you already cook' respects. Barriers: cost, time, cooking fuel, beliefs ('egg makes children steal' — negotiate gently with evidence + elders' support), illness, teeth (GER M06). Document counsel (what advised, teach-back result, review — PRO-I M5); involve the COOK (mother, wife, chop-bar owner?) — advising the eater while ignoring the cook wastes breath.",
          ],
        },
        {
          type: "table",
          heading: "Plate upgrades: same kitchen, better fuel",
          columns: ["Current plate", "One-change upgrade", "Why it works"],
          rows: [
            ["Big fufu + light soup, little fish", "Fist fufu + palm fish + 2 fists veg", "Portions rebalance; protein + fibre up, spikes down"],
            ["White rice + stew, no veg", "Half rice + beans + side salad/kontomire", "Fibre + protein; same pot, fuller longer"],
            ["Coke + meat pie afternoons", "Water + groundnuts + banana", "Cuts ~300 kcal sugar; adds protein/fibre cheaply"],
            ["Tea + bread only breakfasts", "Add egg + orange", "Protein + C + iron absorption; skips prevented"],
            ["Children: koko only mornings", "Koko + groundnut paste + milk/egg", "Fortified weaning food (M03 builds)"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Nurses model plates",
          body: "Counselled plates start with the counsellor's own: eat breakfast before shift (night-duty nurses who skip binge on ward Milo + pies), drink water visibly (jug at nurses' station), fruit in bag not sweets, walk stairs. Patients watch nurses eat — the diabetic counsellor sipping Coke teaches more than the lecture. Model + counsel + document: lifestyle credibility is clinical equipment. Log diet-counselling sessions as CPD with reflections (PRO-I M7) — which ONE change stuck? why?",
        },
      ],
      keyPoints: [
        "4-4-9: carbs 45–65%, protein 10–35% (~0.8 g/kg+), fats 20–35% unsaturated-first.",
        "Balance: IN vs OUT; needs rise (pregnancy/lactation/teens/illness) and fall (elders/sedentary).",
        "Fibre 25–30 g gradual + water; water 1.5–2 L, pale urine; restrictions honoured.",
        "Glycaemic sense: pair carbs, whole fruit, breakfast eaten; portions fist/palm/2-fists.",
        "Counsel: recall → praise → ONE change → teach-back → review; poverty-aware, cook-involved.",
        "Model plates personally; document counsel; log as CPD.",
      ],
      quiz: {
        keywords: ["carbohydrate", "protein", "fats", "energy", "4-4-9", "BMR", "fibre", "water", "glycaemic", "portions", "recall", "teach-back", "poverty", "counselling", "plate"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "micronutrients-and-balanced-plates",
      title: "Micronutrients and balanced plates",
      minutes: 20,
      objectives: [
        "Name six micronutrient groups with jobs.",
        "Spot deficiencies with the nurse's eye.",
        "Teach absorption tricks and supplements.",
        "Plan rainbow meals for families.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Small doses, giant jobs",
          paragraphs: [
            "<strong>VITAMIN A</strong> (vision + immune + skin): mango, pawpaw, palm oil, orange sweet potato, liver, eggs — lack: night blindness, Bitot spots, xerosis, infections (campaigns dose 6–59 months — M06). <strong>IRON + FOLATE + B12</strong> (blood makers): liver, beans, kontomire + VITAMIN C to absorb (beans + orange!); AWAY from tea/coffee (2-hour gap — tannins block); folate pre/during early pregnancy prevents neural-tube defects; B12 needs ANIMAL foods (vegans/elders/PPI-users supplement). <strong>CALCIUM + D</strong> (bones/teeth/muscle): milk, small fish WITH bones (anchovies!), kontomire + SUNLIGHT (D!) — lack: rickets, fractures, tetany. <strong>IODINE + ZINC</strong> (thyroid + growth + healing): IODISED salt ALWAYS, seafood, meat, beans, nuts — lack: goitre, cretinism, slow healing. <strong>VITAMIN C + Bs</strong> (immune + iron + nerves): citrus, pineapple, veg, whole grains, meat — lack: scurvy, beriberi, pellagra, neuritis. Colour rule: 'eat RAINBOW' — orange (A), dark-green (iron/folate/calcium), red (C), white fish/beans (protein/zinc) — colour carries vitamins.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-NUT-0002.svg",
          alt: "Six panels: vitamin A sources and night-blindness signs; iron folate B12 with C-absorption and tea-gap; calcium D with sunlight and small fish; iodine zinc with iodised salt; C and Bs with citrus and grains; the plate halves-quarters with rainbow rule. Absorption tricks: C with iron, tea gap, D plus sun, fat carries ADEK, B12 animal. Deficiency spotting list ten signs. Supplements: pregnancy iron-folate, vitamin A campaigns, iodised salt, zinc ORS, B12, calcium D with counselling. Meal planning rules.",
          caption: "Colour carries vitamins, C carries iron, sun carries D — food first, pills fill gaps.",
        },
        {
          type: "text",
          heading: "Spotting + absorption tricks",
          paragraphs: [
            "Nurse's eye: pale conjunctiva/tongue + fatigue (ANAEMIA — confirm Hb, find cause: diet? malaria? worms? bleeding? pregnancy?) · night blindness + Bitot spots (A) · bowed legs/wrist widening (D/rickets) · goitre (iodine — check salt!) · bleeding gums + corkscrew hairs (C) · glossitis + mouth cracks (B2/B6/B12) · poor healing + hair loss (zinc/protein) · oedema + flaky-paint skin + reddish hair (KWASHIORKOR — M05) · wasted limbs + old-man face (MARASMUS — M05). <strong>Absorption tricks</strong>: iron + C together; iron AWAY from tea/coffee/dairy (2 h); calcium + D + sunlight trio; FAT with A/D/E/K (oil in stew carries them — fat-free fads harm); B12 via animal foods or supplements; cook smart (short water, covered pots, eat promptly — vitamins leak into discarded water and long heat). Deworm + treat malaria alongside iron (feeding worms wastes iron — M06 community).",
          ],
        },
        {
          type: "text",
          heading: "Supplements + meal planning",
          paragraphs: [
            "Food FIRST, pills fill gaps: <strong>iron+folate in pregnancy</strong> (daily, with C, away from tea; warn dark stools + constipation + manage — adherence dies on unwarned side effects) · <strong>vitamin A campaigns</strong> (6–59 months per schedule — document!) · <strong>iodised salt ALWAYS</strong> (check packets at home visits — M06) · <strong>zinc + ORS</strong> for diarrhoea (M03/M06) · <strong>B12</strong> elders/vegans · <strong>calcium/D</strong> where diet/sun poor. Counsel every supplement (dose, timing, side effects, duration, storage) + teach-back + adherence + document (PRO-I M5). <strong>Meal planning</strong>: 3 meals + 1–2 snacks; protein + veg EVERY meal; whole carbs; water default; market-list by SEASON (cheap + fresh); cook once eat twice (leftovers safe — M06 hygiene); festive foods ENJOYED not daily. 'Eat rainbow, drink water, move daily' — counsel it EVERYWHERE: ANC, OPD, wards, CHPS, schools, churches, markets. Nurses' own lunchboxes preach loudest.",
          ],
        },
        {
          type: "table",
          heading: "Deficiency drills: see it, name it, fix it",
          columns: ["Sign", "Name it", "Fix it"],
          rows: [
            ["Pale conjunctiva, fatigue, Hb 8, pregnant", "Iron-deficiency anaemia", "Iron+folate + C + deworm + malaria check + diet + review"],
            ["Child: night blindness, Bitot spots", "Vitamin A deficiency", "High-dose A per protocol + orange foods + campaign check"],
            ["Bow legs, delayed walking, no sun play", "Rickets (D/calcium)", "D + calcium + sunlight + milk/small fish + refer"],
            ["Neck swelling, non-iodised salt at home", "Goitre (iodine)", "Iodised salt + seafood + refer (function tests)"],
            ["Oedema + flaky skin + red hair, weaning age", "Kwashiorkor (M05!)", "Urgent protocol care — refer + feed per SAM guidelines"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Iron + malaria + worms: treat the trio",
          body: "Pouring iron into a child with untreated malaria and hookworm feeds parasites, not blood — and iron ALONE with fever needs care (malaria protocol first per guidelines). Rule: anaemia workup = diet history + malaria test + deworming + Hb + cause hunt (bleeding? pregnancy? chronic disease?) BEFORE or WITH iron, never iron-blind. Counsel mothers on the trio ('medicine for malaria, medicine for worms, iron for blood, food for strength') with teach-back — anaemia beaten by systems, not syrups alone.",
        },
      ],
      keyPoints: [
        "Six groups: A (orange), iron/folate/B12 (blood), calcium/D (bones+sun), iodine/zinc, C/Bs — rainbow rule.",
        "Spot: pallor, night blindness, rickets, goitre, scurvy, glossitis, kwashiorkor/marasmus flags.",
        "Absorb: C with iron, tea 2-h gap, D+sun+calcium, fat carries ADEK, B12 animal.",
        "Supplements: pregnancy iron-folate, child vitamin A, iodised salt, zinc+ORS — counselled + documented.",
        "Meal plan: 3+1–2, protein+veg each, seasonal market, leftovers safe, rainbow + water + move.",
        "Anaemia: diet + malaria + worms + Hb + cause — trio treated, never iron-blind.",
      ],
      quiz: {
        keywords: ["vitamin A", "iron", "folate", "B12", "calcium", "vitamin D", "iodine", "zinc", "vitamin C", "anaemia", "goitre", "rickets", "supplements", "rainbow", "absorption"],
        categories: ["fundamentals"],
      },
    },
  ],
};
