import type { CourseModule } from "../types";

export const therapeuticDiets: CourseModule = {
  slug: "therapeutic-diets",
  title: "Therapeutic diets",
  summary:
    "Food as prescription: the diabetic plate with carb sense and 15-15 hypo rescue, DASH-Ghana salt-smart heart eating with potassium, sick-day rules and red flags — then kidney diets with leaching and measured fluids, liver feeding with zero alcohol, gut plans for diarrhoea/constipation/ulcer/reflux, gout moderation, and allergy-versus-intolerance with anaphylaxis readiness.",
  lessons: [
    {
      slug: "diabetes-and-heart-healthy-eating",
      title: "Diabetes and heart-healthy eating",
      minutes: 20,
      objectives: [
        "Build diabetic plates with carb sense.",
        "Rescue hypoglycaemia with 15-15.",
        "Counsel DASH-Ghana salt-smart eating.",
        "Run sick-day rules and red-flag referrals.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The diabetic plate + carb sense",
          paragraphs: [
            "Plate: HALF vegetables + QUARTER whole carbs (brown rice, millet, oats, sweet potato, whole-maize banku) + QUARTER lean protein (fish, beans, eggs, chicken) + water; consistent carbs meal-to-meal (no feast-famine); paired (protein/fibre/fat slow spikes — M01 glycaemic sense); breakfast EATEN; whole fruit 2/day (not juice); SUGARY DRINKS ZERO (single biggest win — counsel swaps: water + groundnuts + fruit). Fist carbs per meal; spread through day; alcohol cautious (hypo risk + empty kcal — advise limits/abstinence, never on empty stomach). Meds + food + movement trio: tabs/insulin TIMED with meals (sulfonylurea/insulin without food = hypo — GER M04!); 150 min/week walks (post-meal strolls blunt spikes beautifully); weight 5–10% loss transforms control (M05). Diaries (glucose + food + meds) reviewed WITH patient — data guides, never judges ('Fridays spike — what's Friday? naming ceremony rice! plan: small portion + dance + meds on time').",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-NUT-0007.svg",
          alt: "Three panels: diabetic plate halves-quarters with zero sugary drinks, hypo 15-15 rescue with unconscious emergency rule, DASH-Ghana heart with salt potassium fish. Carb sense and salt sense rows: fists, pairing, breakfast, flavour swaps, stock-cube halves, label sodium, potassium caveat. Sick-day foot follow-up box. Weight link. Counselling chain with festival planning. Family hypo training. Red flags: unconscious hypo, DKA, foot ulcer, chest pain, BP crisis.",
          caption: "Half veg, fist carbs, zero Coke — and every family trained for hypo.",
        },
        {
          type: "text",
          heading: "Hypo rescue + sick days + feet",
          paragraphs: [
            "<strong>HYPO (15-15)</strong>: shaky/sweaty/hungry/confused → 15 g FAST sugar (3 glucose tabs / half glass juice / 3 tsp honey-sugar water) → wait 15 min → recheck → repeat if low → then MEAL (slow carbs + protein); UNCONSCIOUS/seizing: NOTHING by mouth (aspiration!) — recovery position + emergency + glucagon where available + hospital. Train FAMILY (sugar kept bedside + farm + school; children told simply). Causes hunted: missed meal? extra exercise? wrong dose? alcohol? (adjust + document + teach). <strong>SICK DAYS</strong>: NEVER stop insulin/tabs without advice; sip fluids; eat little-often (koko, banana, ORS if diarrhoea); monitor glucose; seek care EARLY (vomiting/ketones/deep-breath/fruity = DKA emergency!). <strong>FEET DAILY</strong>: wash + dry + lotion (not between toes) + fitting shoes + never barefoot + callus/cut reported SAME-day (M01/GER screens) — foot ulcers amputate where checks lapse. Clinic reviews: HbA1c + BP + lipids + weight + eyes + feet + diaries — trend everything.",
          ],
        },
        {
          type: "text",
          heading: "DASH-Ghana: salt-smart hearts",
          paragraphs: [
            "<strong>Salt <1 tsp/day total</strong>: flavour with pepper/onion/garlic/ginger/herbs; stock cubes HALVED; salted fish/meats rinsed + reduced; chop-bar 'taste before salt'; bread/pastries/cheese counted; teach label 'sodium'. <strong>Potassium HELPS BP</strong> (beans, banana, veg, oranges) — UNLESS kidney limits (next lesson's leaching!). Less fried/fatty (grill/boil/steam); fish + oats + beans welcomed; alcohol limited; smoke ZERO; weight + movement as diabetes. Hypertension + diabetes twins counselled TOGETHER (same plate, same walks, same diaries + BP log). Counsel: recall → praise → ONE change ('salt-half', 'Coke→water', 'evening walk') → teach-back → COOK involved (whoever seasons the pot!) → review dated. Festivals: enjoy + PLAN (small portions + dance + meds on time) — bans fail, plans stick. Red flags: chest pain, BP crisis + symptoms, foot black/ulcer, DKA signs — emergency pathways; diet never delays hospital.",
          ],
        },
        {
          type: "table",
          heading: "Counsel swaps that stick",
          columns: ["Habit", "Swap", "Win"],
          rows: [
            ["2 Cokes daily", "Water + groundnuts + banana", "~600 kcal sugar gone; HbA1c falls"],
            ["Full cube + table salt", "Half cube + herbs + taste-first", "Salt halved; BP follows in weeks"],
            ["Big white rice + little stew", "Half rice + beans + double veg", "Fibre/protein up; spikes flattened"],
            ["No breakfast, huge supper", "Koko+egg morning + lighter night", "Spread carbs; nights safer (hypo)"],
            ["Sitting all day trader", "30-min evening walk + post-meal strolls", "Glucose + BP + mood + sleep improve"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "DKA: the missed killer",
          body: "Diabetic ketoacidosis (thirst + polyuria + vomiting + abdominal pain + DEEP sighing breath + fruity breath + drowsiness) kills in hours — infection, missed insulin, new diabetes, pregnancy. Nurses: suspect in EVERY drowsy diabetic + every 'gastroenteritis' with deep breathing + fruity smell; check glucose + ketones where available; fluids + insulin per protocol + URGENT referral — never 'ORS and observe'. Teach families the pattern ('sweet breath + deep breath = RUSH'). DKA awareness at OPD triage saves more diabetics than any diet sheet.",
        },
      ],
      keyPoints: [
        "Diabetic plate: ½ veg + ¼ whole carbs + ¼ lean protein; consistent, paired, spread; Coke zero.",
        "Hypo 15-15 + meal; unconscious = recovery + emergency, nothing by mouth; family trained.",
        "Sick days: meds continue + fluids + little-often + early care; DKA = emergency.",
        "Feet daily + fitting shoes + same-day cuts; clinic trends HbA1c/BP/lipids/eyes/feet.",
        "DASH-Ghana: salt <1 tsp + herbs, potassium (kidney-permitting), fish/oats/beans, smoke zero.",
        "Counsel: ONE change + cook + festivals planned; red flags rush, never diet-first.",
      ],
      quiz: {
        questionIds: ["NG-MOD-NUTR-009", "NG-MOD-NUTR-010"],
        categories: ["fundamentals"],
        keywords: ["diabetes", "plate", "carbohydrate", "hypo", "15-15", "DKA", "insulin", "feet", "DASH", "salt", "potassium", "sick-day", "HbA1c", "weight", "festival"],
      },
    },
    {
      slug: "kidney-liver-gut-and-allergy-diets",
      title: "Kidney, liver, gut and allergy diets",
      minutes: 20,
      objectives: [
        "Moderate kidney diets without starving.",
        "Feed liver disease with zero alcohol.",
        "Plan gut diets for diarrhoea to reflux.",
        "Separate allergy danger from intolerance.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Kidney: restrict smart, never starve",
          paragraphs: [
            "CKD: protein MODERATED per stage/dialysis (doctor/dietician set — too little wastes muscle; dialysis needs MORE) · salt LOW (<1 tsp, no table salt) · <strong>potassium LOW</strong> (failing kidneys can't excrete — weak/palpitations/arrest!): LEACH veg (peel + soak + boil + DISCARD water — yam/plantain/cocoyam!), limit banana/orange/coconut where advised · <strong>phosphate LOW</strong> (dairy/nuts/cola limited; binders WITH meals) · <strong>fluids MEASURED</strong> (prior-day urine + ~500 mL typical — FOLLOW the order!; daily weights + BP + oedema watched). Demo leaching (show, teach-back, cook trained!); written eat/avoid lists; labs trended (K+, creatinine, eGFR, phosphate). AKI: cause treated + nephrotoxins held + fluids per protocol (triple-whammy watch — GER M04!). Dialysis days: eat after (appetite + time), protein priorities, fluid discipline between sessions. Explain by REASON ('potassium stops hearts when kidneys fail — leaching protects you') — reasoned restrictions stick; unexplained bans break at the first craving.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-NUT-0008.svg",
          alt: "Three diet panels: kidney with protein salt potassium-leach phosphate fluids, liver with zero alcohol adequate protein low-salt ascites small-frequent thiamine, gut with diarrhoea ORS keep-feeding constipation ulcer rules. Gout moderation and drugs-control. Allergy versus intolerance: speed, danger, adrenaline plan versus reduce-lactase. Kidney detail: protein stages, leaching method, fluid formula, binders, weights. Dysphagia reflux post-op pancreatitis rows. Counselling: reasons demo lists cook review pair-stop-with-start. Red flags: K+ overload bleed anaphylaxis ascites.",
          caption: "Leach the potassium, measure the fluids, zero the alcohol — reasons counselled.",
        },
        {
          type: "text",
          heading: "Liver + gut plans",
          paragraphs: [
            "<strong>LIVER</strong>: alcohol ZERO (all types, forever — thiamine where alcohol history!); protein ADEQUATE (never starve — muscle wastes, healing fails; encephalopathy adjusts type/timing per doctor, not zero); salt LOW in ascites/oedema; small frequent meals (+ bedtime snack — overnight fasts harm cirrhotics); fluids/ascites per order; constipation avoided (lactulose per doctor — gut toxins + encephalopathy link). <strong>GUT</strong>: diarrhoea (ORS + ZINC + KEEP FEEDING — starving guts heal slower!; M03/M06) · constipation (fibre + fluids + movement + toilet routine — NUT M01/GER) · ulcer (regular meals, NSAIDs/smoke/alcohol OUT, H. pylori treated) · reflux/hiatus (small + upright + late-meals out + weight down) · post-op gut (advance as ordered + protein for healing) · pancreatitis (NBM → low-fat advance per doctor) · dysphagia (GER M06: NBM→screen→textures→refer). <strong>GOUT</strong>: fluids UP + weight down + beer/alcohol down + red-meat/seafood moderate + veg/cherries welcome — diet HELPS flares, drugs (allopurinol/colchicine) CONTROL disease; counsel both.",
          ],
        },
        {
          type: "text",
          heading: "Allergy vs intolerance + counselling craft",
          paragraphs: [
            "<strong>ALLERGY</strong> (immune, FAST — minutes: hives, lip/tongue swelling, wheeze, vomiting, collapse): avoid trigger STRICTLY (groundnut? egg? fish? milk? — confirm + document + alert band!), label-read taught, adrenaline auto-injector where prescribed + ACTION PLAN (family/school trained: jab + call + hospital), review/emergency drills. <strong>INTOLERANCE</strong> (slow, gut-led — lactose: bloating/diarrhoea after milk): reduce/lactase/small-with-meals/fermented (yoghurt often tolerated) — uncomfortable, not deadly; calcium replaced (small fish/kontomire). Different danger, different diet — never confuse (allergy 'little bit' can kill; intolerance bans without replacement starve calcium). <strong>Craft</strong>: every 'stop X' paired with 'eat Y instead' (stop banana → eat apple/pawpaw; stop salt → herbs; stop milk → small fish + yoghurt trial); demos (leaching! label-reading! ORS!); written lists; cook trained; review + labs; document diet + demos + teach-back + review (PRO-I M5). Red flags: K+ weakness/palpitations, overload breathless/gain, GI bleed, anaphylaxis, ascites fever/confusion — emergency, diet never delays.",
          ],
        },
        {
          type: "table",
          heading: "Therapeutic pairs: stop + start",
          columns: ["Condition", "Stop/limit", "Start instead"],
          rows: [
            ["CKD high K+", "Banana/orange/coconut + salt + cola", "Apple/pawpaw + leached staples + herbs"],
            ["Ascites", "Salt + alcohol + big late meals", "Herbs + small frequent + bedtime snack"],
            ["Gout flare", "Beer + red-meat feasts + dehydration", "Water + veg + cherries + meds on time"],
            ["Lactose intolerance", "Big plain milk glasses", "Yoghurt + small-with-meals + small fish calcium"],
            ["Groundnut allergy", "Groundnut + oils + 'may contain'", "Soya/beans protein + label drill + adrenaline plan"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Demo beats lecture: leaching day",
          body: "Run a monthly 20-minute kidney-diet demo at OPD/medical ward: peel + soak + boil + discard (show the discarded brown water — 'that's the potassium leaving!'), taste herbs-vs-salt stews, read a cola label's phosphate, measure a day's fluids into bottles. Patients who SEE leaching leach; patients TOLD about leaching nod and forget. Invite cooks, photograph steps for the ward wall (consented), log as CPD + QI (PRO-II M4: audit K+ admissions before/after). Therapeutic diets are nursing procedures — demo them like cannulation.",
        },
      ],
      keyPoints: [
        "CKD: protein staged, salt low, K+ leached, phosphate low, fluids measured, weights/BP daily.",
        "Liver: alcohol ZERO + thiamine, protein adequate, salt low in ascites, small frequent + bedtime snack.",
        "Gut: diarrhoea ORS+zinc+feed; constipation fibre/fluids/move; ulcer regular + NSAID/smoke out.",
        "Gout: fluids + weight + less beer/meat; diet helps, meds control.",
        "Allergy (fast, deadly, strict avoid + adrenaline) ≠ intolerance (slow, reduce + replace calcium).",
        "Every stop paired with start; demo + lists + cook + review; red flags rush.",
      ],
      quiz: {
        questionIds: ["NG-MOD-NUTR-011", "NG-MOD-NUTR-012"],
        categories: ["fundamentals"],
        keywords: ["CKD", "potassium", "leaching", "phosphate", "fluids", "dialysis", "liver", "ascites", "thiamine", "diarrhoea", "ORS", "ulcer", "gout", "allergy", "anaphylaxis", "lactose"],
      },
    },
  ],
};
