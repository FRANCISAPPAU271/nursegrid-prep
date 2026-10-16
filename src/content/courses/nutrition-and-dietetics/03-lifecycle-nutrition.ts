import type { CourseModule } from "../types";

export const lifecycleNutrition: CourseModule = {
  slug: "lifecycle-nutrition",
  title: "Lifecycle nutrition",
  summary:
    "Feeding every age: pregnancy gains with iron/folate/calcium, zero-alcohol rules, nausea/pica/GDM handling, lactation fuel with myth negotiation — then exclusive breastfeeding craft with problem-solving, complementary feeding from enriched koko to family pot, school-age and teen needs with body-image care, elder links, and failure-to-thrive hunts with observed feeds.",
  lessons: [
    {
      slug: "pregnancy-and-lactation",
      title: "Pregnancy and lactation",
      minutes: 20,
      objectives: [
        "Counsel gains, kcal and key nutrients.",
        "Prevent and treat pregnancy anaemia.",
        "Enforce avoid-lists kindly and firmly.",
        "Fuel lactation and bust myths.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Eating better, not twice",
          paragraphs: [
            "Needs: +340 kcal/day (2nd trimester), +450 (3rd), +500 lactation; protein +25 g; iron/folate/calcium/iodine UP; fluids UP. <strong>Gain targets</strong> (term): normal BMI 11.5–16 kg; underweight 12.5–18; overweight 7–11.5; obese 5–9 — track ANC monthly; flat/falling gain = feed + hunt (anaemia? malaria? worms? twins? hypertension?). <strong>Iron+folate DAILY</strong> (ANC supply; with vitamin C, away from tea; warn dark stools/constipation + manage — unwarned side effects kill adherence); folate ideally PRECONCEPTION (neural-tube defects prevented in weeks 3–4, often before ANC booking — counsel all reproductive-age women!). <strong>Calcium</strong> (milk/small fish with bones/kontomire + sun; low intake linked to pre-eclampsia risk — supplement gaps) + <strong>IODISED salt</strong> + vitamin D/sun. Anaemia = PPH risk: Hb each trimester + trio treated (iron + malaria + worms — M01), severe cases escalated. 'Eat down to ease labour' STARVES mothers into bleeds and tears — counsel gains proudly, involve grandmothers.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-NUT-0005.svg",
          alt: "Three need panels: extra kcal protein fluids with better-not-twice, iron folate with C timing and PPH warning, calcium iodine D with pre-eclampsia link. Gain targets by BMI with flat-gain hunt. Avoid list: alcohol zero, smoking, raw foods, unpasteurised milk, big fish mercury, excess A, risky herbs. Nausea pica Hb management. GDM flag refer diet. Lactation fuel with rest-support. Myths negotiated: eggs, eat-down, pepper milk, colostrum.",
          caption: "Better not twice, iron with C, zero alcohol — grandmothers counselled too.",
        },
        {
          type: "text",
          heading: "Avoids, discomforts, GDM",
          paragraphs: [
            "<strong>AVOID</strong>: alcohol — NO safe amount (fetal alcohol syndrome: lifelong brain harm; counsel abstinence plainly + support) · smoking (growth restriction, stillbirth) · raw/undercooked meat-fish-eggs + unpasteurised milk (listeria/toxo/salmonella) · high-mercury big fish (moderate small fish encouraged — omega-3!) · excess vitamin A PILLS + frequent liver feasts (teratogenic doses; food-variety vitamin A fine) · 'herbs to widen the birth canal' (unproven + risky — counsel kindly, involve elders/TBAs as allies). <strong>Discomforts</strong>: nausea (small frequent dry-ish meals, ginger, B6 foods, reassure — hyperemesis referred), pica clay/ice (iron hunt + counsel: clay blocks iron + parasites!), constipation (fluids + fibre + movement), heartburn (small + upright + avoid late meals). <strong>GDM</strong>: flag risk (obese, prior big baby/GDM, family diabetes) → screen per protocol → diabetic plate + daily walks (M04) + glucose watched → prevents macrosomia/shoulder dystocia. Pre-eclampsia: BP + urine + calcium + REFER fast — diet supports, delivery cures.",
          ],
        },
        {
          type: "text",
          heading: "Lactation fuel + myth work",
          paragraphs: [
            "Lactation: +500 kcal + protein + fluids (drink to thirst, pale urine) + CONTINUE iron/folate 3 months + iodised salt + calcium/D + RAINBOW (milk quality follows diet) + REST + SUPPORT (stress/exhaustion dry more breasts than diet does — prescribe family help: 'husband fetches water, grandmother holds baby while mother eats/sleeps'). NO alcohol (passes freely; abstinence counselled) + medication check (most compatible — verify, don't guess). <strong>Myths negotiated, never mocked</strong>: 'egg = big baby/thief' (eggs = brain food — demo + elder allies) · 'pepper spoils milk' (eat normally, watch baby) · 'colostrum dirty — squeeze out' (LIQUID GOLD: first vaccine, laxative, gut-sealer — next lesson's craft!) · 'small breasts = little milk' (size ≠ supply — suckling rules). Counsel mother + grandmother + father TOGETHER where possible — feeding decisions are family decisions; the nurse who converts the grandmother feeds the baby.",
          ],
        },
        {
          type: "table",
          heading: "ANC nutrition contacts: what each visit adds",
          columns: ["Visit", "Nutrition action", "Counsel + document"],
          rows: [
            ["Booking", "BMI/MUAC + Hb + diet recall + supplements start", "Gains target + iron/C/tea-gap + avoids + teach-back"],
            ["2nd trimester", "Gain trend + Hb + malaria/worms + GDM risk", "+340 kcal ideas + nausea fixes + pica ask"],
            ["3rd trimester", "Gain + Hb + oedema/BP/urine + birth plan", "+450 kcal + birth-prep foods + breastfeeding intent + colostrum!"],
            ["Postnatal", "Mother diet + fluids + rest + Hb + mood", "Lactation fuel + family support rota + 6-mo exclusive plan"],
            ["Any red flag", "Poor gain/anaemia/GDM/BP/oedema", "Escalate + feed + follow closely + document all"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Zero alcohol, zero debate",
          body: "No safe amount, no safe trimester, no 'small stout for blood' — alcohol crosses the placenta freely and injures developing brains permanently (growth restriction, facial anomalies, lifelong learning/behaviour harm). Counsel EVERY pregnant woman plainly and kindly, screen use without judgment ('many women drank before knowing — stopping now still helps greatly'), involve partners/families (home supply matters), refer dependence. Document counsel given. Pito, beer, spirits, 'medicinal' bitters — all count, all stop. Foetal brains have no spokesperson — be theirs.",
        },
      ],
      keyPoints: [
        "+340/+450/+500 kcal ladder; protein +25 g; gains by BMI tracked monthly.",
        "Iron+folate daily with C, away tea; folate preconception; anaemia trio treated; PPH link.",
        "Calcium + D + sun + iodised salt; avoids: alcohol ZERO, smoking, raw foods, excess A, risky herbs.",
        "Nausea/pica/constipation managed; pica = iron hunt; GDM flagged + dieted + watched.",
        "Lactation: fuel + fluids + rest + support + continued supplements; myths negotiated with elders.",
        "Colostrum previewed at ANC; counsel documented; family converted feeds baby.",
      ],
      quiz: {
        questionIds: ["NG-MOD-NUTR-006", "NG-MOD-NUTR-007"],
        categories: ["maternal-newborn"],
        keywords: ["pregnancy", "lactation", "weight gain", "iron", "folate", "calcium", "anaemia", "alcohol", "FAS", "pica", "GDM", "pre-eclampsia", "myths", "colostrum", "ANC"],
      },
    },
    {
      slug: "infants-children-teens-and-elders",
      title: "Infants, children, teens and elders",
      minutes: 20,
      objectives: [
        "Protect exclusive breastfeeding to 6 months.",
        "Guide complementary feeding to family pot.",
        "Fuel school-age and teens wisely.",
        "Catch failure-to-thrive with observed feeds.",
      ],
      blocks: [
        {
          type: "text",
          heading: "0–6 months: exclusive means exclusive",
          paragraphs: [
            "Breast within 1 HOUR (colostrum = first vaccine + laxative + gut-sealer — NEVER squeezed out!), EXCLUSIVE to 6 months (nothing else — not even water; breastmilk is 88% water + complete), on demand 8–12 feeds/day + night, correct attachment (mouth wide, chin in, lower lip out, more areola below — MOST problems are latch problems). Solve: sore nipples (latch fix + air + lanolin), engorgement (frequent + warm + express), mastitis (CONTINUE feeding + antibiotics + refer abscess), 'not enough milk' (MORE suckling + rest + fluids + confidence — 99% supply meets demand; weigh baby, count wet diapers, reassure with DATA). HIV: ART-adherent mothers counselled per current guideline (exclusive + adherent + monitored). Working mothers: express + store (clean containers, cool, use within hours/days per guidance) + caregiver cup-feeds (cups > bottles — hygiene + nipple confusion). Formula only where indicated + safe water + correct mixing + counselled cost — unnecessary formula in poor hygiene kills (diarrhoea + cost + dilution). Document latch demos + weights + counsel (PRO-I M5).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-NUT-0006.svg",
          alt: "Three IYCF panels: exclusive 0-6, complementary 6-24 with responsive, family pot 2-5 with own bowl. Complementary detail: start 6 months, enriched koko recipe, progression, frequency, hygiene, responsive. Breastfeeding craft: hour-1, attachment, frequency, four problems solved, HIV note. School-age: breakfast lunchbox deworm. Teens: spurt iron calcium image junk-talk. Elders GER link. Failure-to-thrive hunt: feed observed, illness, home, plan, SAM admit.",
          caption: "Exclusive to 6, enriched koko at 6, family pot by 1 — responsive always.",
        },
        {
          type: "text",
          heading: "6–24 months: complement with love",
          paragraphs: [
            "START at 6 months (not before — gut/kidney unready; not late — breast alone insufficient after 6): thick enriched koko (groundnut paste + milk/egg + palm oil + mashed fruit — SPOON-THICK, not watery!), then mashed family foods (yam + beans + veg + fish), finger foods (banana, soft veg), family pot by 12 months. Frequency: 2–3 meals (6–8 mo) → 3–4 (9–24 mo) + 1–2 snacks; CONTINUE breastfeeding to 2 years+. HYGIENE (M06!): handwash, fresh-cooked, covered, reheated ONCE steaming, clean water/cups — diarrhoea undoes feeding. RESPONSIVE: eye contact, patience, encouragement, own bowl (SEE intake!), no force (force-feeding breeds refusal + aspiration). 2–5 years: 3 meals + 2 snacks from family pot + own bowl + vitamin A + deworm + growth plotted (M02). Demo feeds at CWC (cook + feed + watch mother repeat — teach-back with spoons!). Fathers/grandmothers included — the demo watched by grandmother gets repeated at home.",
          ],
        },
        {
          type: "text",
          heading: "Teens, elders, faltering",
          paragraphs: [
            "SCHOOL-AGE: breakfast DAILY (fed learners learn — koko + egg + fruit beats empty stomach), lunchbox/pack (protein + fruit + water), deworm + vision/hearing, sweets/sodas limited (teeth + weight — counsel swaps not bans). TEENS: growth-spurt fuel (protein + iron — menstruating girls! + calcium for peak bone) + sport food + BODY-IMAGE care (screen eating disorders kindly: secret vomiting? meal skipping? over-exercise? — refer + support, never shame) + junk-talk (kelewele/shito joy + balance). ELDERS: GER M06 full (protein each meal, calcium/D, fibre, fluids, teeth, company, MUST). <strong>FAILURE-TO-THRIVE</strong> (flat/falling curve — M02!): feed ASSESSED (recall + OBSERVE A FEED — technique reveals all) + illness HUNTED (diarrhoea? TB? HIV? UTI? worms? malaria? otitis?) + home VISITED (who feeds? how often? beliefs? money? hygiene?) + plan (fortify + treat + demo feeds + 2-WEEK review) + admit SAM (M05). Never 'come back in a month' to a faltering infant — fortnights decide futures.",
          ],
        },
        {
          type: "table",
          heading: "Feeding problems: observe, name, fix",
          columns: ["Observation", "Name it", "Fix it"],
          rows: [
            ["Watery koko, bottle, 4-mo-old 'hungry'", "Too-early + thin + bottle risks", "Back to exclusive + latch + weight checks + grandmother talk"],
            ["8-mo, breast only, flat curve", "Late complementing", "Start enriched koko NOW + demo + 2-week review"],
            ["2-yr, shared bowl, picks, snacks only", "No-intake + junk displacement", "Own bowl + meal routine + snacks timed + deworm"],
            ["Teen girl, pale, skips meals, 'fat'", "Anaemia + body-image risk", "Iron + diet + kindly screen + refer + follow (no shame)"],
            ["6-mo, diarrhoea ×3, feeds diluted", "Hygiene + dilution", "WASH + correct mix + zinc/ORS + demo + review"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Observe a feed — always",
          body: "Diet recalls lie politely; observed feeds tell truth: positioning, latch, thickness, quantity, hygiene, responsiveness, duration — five watched minutes outperform fifty asked questions. Observe at CWC, OPD, home visits and wards; praise first ('lovely patience!'), adjust kindly ('let's thicken it like this — see?'), get teach-back by return-demo. Log observed feeds as CPD (PRO-I M7) — feeding craftsmanship is nursing craftsmanship. The nurse who watches babies eat catches what questionnaires miss, every time.",
        },
      ],
      keyPoints: [
        "Hour-1 colostrum, exclusive 6 mo, on-demand 8–12; latch fixes most problems.",
        "'Not enough' = more suckling + rest + data; mastitis continues + treats; formula only indicated.",
        "Complement at 6: thick enriched koko → family pot by 12; 3–4 meals + snacks; hygiene + responsive.",
        "School: breakfast + lunchbox + deworm; teens: spurt fuel + iron + image care.",
        "Elders per GER M06; faltering: observe feed + hunt illness + visit home + 2-week review.",
        "Demo + grandmothers + fathers; document IYCF; log observed feeds as CPD.",
      ],
      quiz: {
        questionIds: ["NG-MOD-NUTR-008"],
        categories: ["gerontology-community"],
        keywords: ["breastfeeding", "exclusive", "colostrum", "latch", "mastitis", "complementary", "koko", "responsive", "IYCF", "school feeding", "teens", "anaemia", "failure-to-thrive", "demo", "deworm"],
      },
    },
  ],
};
