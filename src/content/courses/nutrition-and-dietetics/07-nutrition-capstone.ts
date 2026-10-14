import type { CourseModule } from "../types";

export const nutritionCapstone: CourseModule = {
  slug: "nutrition-capstone",
  title: "Nutrition capstone",
  summary:
    "Food as medicine — proven: five scored scenarios (faltering infant, anaemic mother, new diabetic, oedematous SAM, obese hypertensive) run through the ABCD-to-review formula — then the one-page nutrition canvas, meal-plan craft for every condition, myths bank, 90-day QI menu, 25 tricky points with countdown, STAR interviews, portfolio crown, and the nutrition pledge.",
  lessons: [
    {
      slug: "nutrition-capstone-scenarios",
      title: "Nutrition capstone scenarios",
      minutes: 20,
      objectives: [
        "Run ABCD-to-review on any case.",
        "Classify and flag before counselling.",
        "Counsel ONE change with demos.",
        "Score full marks with cited structure.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The formula: ABCD to review",
          paragraphs: [
            "Every nutrition answer runs: <strong>ABCD</strong> (measure + labs + signs + recall → CLASSIFY: well/at-risk/MAM/SAM/micronutrient/obese) → <strong>red flags</strong> (oedema? severe anaemia? re-feed? DKA? bleed? faltering infant? — ACT first!) → <strong>counsel</strong> (praise + ONE change + teach-back + COOK involved) → <strong>treat + demo</strong> (supplements/feeds/meds + koko/ORS/leach/latch demos!) → <strong>family + safety</strong> (myths negotiated with elders + 5 keys + water chain + money plan) → <strong>review DATED</strong> (weights + diaries + labs + traced if missed). PRO-I's compass runs inside where danger is immediate. Examiners scan for CLASSIFICATION, ONE change, DEMOS, MYTHS, SAFETY and DATES — 'I would advise good nutrition' scores zero; 'MUAC 11.8 + flat WFA + koko-only recall + diarrhoea ×3 = MAM + illness + poor diet; treat + fortify + demo + 2-week review…' scores distinctions. Six sentences, full marks.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-NUT-0013.svg",
          alt: "Nutrition canvas six boxes: ABCD classify, red flags act, counsel one with teach-back, treat plus demo, family safety myths money, review dated traced. Canvas discipline: folder front, handover, audits, tracing. Scenario formula six steps with examiner-scan note. Meal-plan craft skeleton: targets, meals, Ghana foods, portions, fluids, demo, review. QI menu: CWC SAM anaemia HbA1c demos with PDSA crown. Myths bank six entries.",
          caption: "ABCD, flags, ONE counsel, demo, family, review — one page, every client.",
        },
        {
          type: "text",
          heading: "Five scenarios, model reasoning",
          paragraphs: [
            "<strong>1. 9-month-old, WFA sliding −1 → −1.8, breast only, grandmother refuses koko ('too early').</strong> ABCD: faltering pre-cutoff + late complementing + belief barrier → counsel (praise breastfeeding! + ONE: start enriched koko) + DEMO (cook + feed + grandmother tastes!) + hygiene + responsive + 2-WEEK review (never a month — M03!) + vitamin A/deworm check → document + trace if missed. <strong>2. Pregnant 28 weeks, Hb 8.5, pale, tea with meals, pica clay.</strong> ABCD: undernourished + anaemia + blockers → trio (iron+folate + C + tea-gap + clay counsel + malaria/worms!) + gains target + diet recall + grandmother talk + ANC closely → Hb recheck dated → PPH-risk flagged. <strong>3. 52-year-old trader, new diabetes, HbA1c 9, 2 Cokes daily, 'diet is punishment'.</strong> ABCD: obese + hyperglycaemic + sugary habit → ONE change negotiated (Coke→water + groundnuts!) + plate + walks + hypo teaching + family trained + diary + 1-month labs → festivals planned → DKA signs taught. <strong>4. 2-year-old, MUAC 12.8 BUT bilateral oedema, flaky skin, irritable.</strong> RED FLAG: kwashiorkor/SAM (oedema rules!) → appetite test → inpatient if ++++/no-appetite/danger (10 steps: sugar + warmth + ReSoMal + assume infection + F75…) or OTP if eager+alert (RUTF + weekly) → mother partnered + demo + CHPS linked → audit. <strong>5. 45-year-old, BMI 34, BP 170/105, salt-heavy, smokes, 'big is healthy'.</strong> ABCD: obese + hypertensive + smoke + myth → DASH-Ghana (salt-half + herbs + potassium + fish/oats) + smoke counsel + movement + myth negotiated kindly + cook involved + BP log + monthly + dietician → stroke/MI red flags taught.",
          ],
        },
        {
          type: "table",
          heading: "Score your reasoning (examiner's marks)",
          columns: ["Element (marks each)", "What earns it", "What loses it"],
          rows: [
            ["ABCD + classify (2)", "Named measures + labs + signs + recall → classification stated", "'Assess well' with no tool, cutoff or class"],
            ["Flags + treat (2)", "Red flags acted + protocol treats (ReSoMal/F75/trio/RUTF) cited", "Counselling while emergencies (oedema/DKA/bleed) wait"],
            ["ONE counsel (2)", "Praised + single change + teach-back + cook named", "Ten bans listed; no praise, no teach-back, no cook"],
            ["Demo + family (2)", "Named demo + myth negotiated with elders + safety/keys", "Lecture-only; myths mocked or ignored; no demo"],
            ["Review + records (2)", "Dated review + weights/diaries/labs + tracing + document", "'Follow up' with no date, content or trace plan"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The 10-mark paragraph formula",
          body: "For every scenario write: ABCD ('MUAC… Hb… signs… recall… = CLASSIFICATION') → FLAGS ('red flags… acted…') → COUNSEL ('praised… ONE change… teach-back… cook…') → TREAT+DEMO ('protocol… demo…') → FAMILY ('myth… elders… 5 keys… money…') → REVIEW ('dated… weights/diaries/labs… traced…'). Six sentences, ten marks. Meal-plan questions add the craft skeleton (targets → 3+snacks → Ghana foods → portions → fluids → demo → review). Practise all five scenarios aloud until ABCD-thinking runs without notes — that reflex IS nutrition nursing.",
        },
      ],
      keyPoints: [
        "Formula: ABCD → flags → ONE counsel → treat+demo → family+safety → dated review.",
        "Faltering: praise + enriched koko demo + grandmother + 2-week review, never a month.",
        "Anaemia: trio + tea-gap + clay counsel + gains + PPH flag + Hb recheck.",
        "Diabetes: negotiated ONE swap + plate + walks + hypo/family + diary + DKA signs.",
        "Oedema = SAM: appetite test → OTP/RUTF or inpatient 10 steps + mother + audit.",
        "Obesity+HTN: DASH + smoke + myth kindly + cook + BP log + monthly; 10-mark formula aloud.",
      ],
      quiz: {
        keywords: ["capstone", "scenarios", "ABCD", "classify", "faltering", "anaemia", "diabetes", "kwashiorkor", "OTP", "obesity", "formula", "distinction", "reasoning", "canvas", "myths"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "meal-plans-projects-and-exam-prep",
      title: "Meal plans, projects and exam prep",
      minutes: 20,
      objectives: [
        "Build Ghana meal plans for any condition.",
        "Launch a 90-day nutrition QI project.",
        "Master the 25 tricky points.",
        "Execute countdown, STAR and pledge.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Meal-plan craft: skeleton + fillings",
          paragraphs: [
            "Skeleton (EVERY plan): kcal + protein TARGET → 3 meals + 1–2 snacks → GHANA foods (cheap + seasonal!) → PORTIONS (fist/palm/2-fists or therapeutic) → FLUIDS → DEMO + teach-back → REVIEW. Fillings: <strong>DIABETIC</strong> (½-¼-¼, whole carbs, Coke zero — M04) · <strong>RENAL</strong> (staged protein, leached staples, measured fluids — M04) · <strong>PREGNANT</strong> (+450 kcal, iron/C, rainbow — M03) · <strong>CHILD 9 mo</strong> (breast + 3 enriched meals + snacks — M03) · <strong>ELDER</strong> (protein each meal, soft + company + fluids — GER!) · <strong>WEIGHT-LOSS</strong> (500-kcal deficit, plate, walks — M05). Worked day (diabetic trader): breakfast koko + egg + orange; lunch half-rice + beans + double veg + fish; snack groundnuts + banana; supper banku-fist + okra + fish; water always; walk 30 min. Cost it (market prices!), season it (mango months!), cook-involve it, demo it. Examiners award structure + Ghana foods + portions + fluids + demo + review — foreign menus with salmon score zero sympathy.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-NUT-0014.svg",
          alt: "Exam map: M1 fuel 4-4-9 rainbow, M2 measure cutoffs ABCD, M3 life pregnancy IYCF, M4 therapy diabetes kidney, M5 malnutrition SAM obesity re-feed, M6 safe village keys CWC. Twenty-five tricky points listed. Countdown six to day with cards mock. Formula plus meal-plan skeleton plus STAR interview guidance. Portfolio crown contents. Pledge quoted.",
          caption: "Twenty-five killers learned cold — then the countdown, then the pledge.",
        },
        {
          type: "text",
          heading: "90-day project + 25 points + countdown",
          paragraphs: [
            "Pick ONE (PRO-II M4 PDSA + run chart + present): <strong>CWC coverage</strong> (weighed + plotted + counselled %) · <strong>SAM finds→graduation</strong> (MUAC sweeps + OTP outcomes) · <strong>anaemia</strong> (ANC Hb + trio completion) · <strong>HbA1c</strong> (diabetic reviews + diaries) · <strong>demo counts</strong> (koko/ORS/leach demos + teach-backs). Canvas it, board it weekly, present 30/60/90. <strong>25 points cold</strong> (diagram): 4-4-9, C+iron/tea-gap, iodised salt, MUAC+oedema, trends, stunting/wasting, ABCD, ONE+teach-back, kcal ladder, zero alcohol, folate preconception, colostrum hour-1, exclusive-6/koko-6, observe feeds, diabetic plate/Coke-zero, hypo 15-15, salt <1 tsp, leach+measure, allergy strict, appetite divides, ReSoMal slow, iron later, re-feed low+thiamine, 5 keys/2-h, trace kindly. <strong>Countdown</strong>: 6 weeks map 42 + weak; 4 weeks timed past Qs + canvas rationales; 2 weeks cards; 1 week mock + sleep; eve pack + rest; DAY read twice, canvas-structure, cite modules, attempt ALL. <strong>Interviews</strong>: STAR from canvas/project ('our SAM graduation hit 95%…'); 'myths?' = negotiated-with-elders aloud; 'why nutrition?' = one child's curve (de-identified) + rainbow passion.",
          ],
        },
        {
          type: "text",
          heading: "Portfolio crown and pledge",
          paragraphs: [
            "Crown your portfolio (PRO-I M7): nutrition canvas (de-identified) + run charts + QI protocol + demos log + meal plans + reflections (Gibbs: which ONE change stuck? which myth converted? which defaulter returned?) + board/outreach photos (consented!) + CPD entries. Keep serving: ABCD every contact, ONE change kindly, demo always, trace defaulters with love, gardens grown, salt checked. <strong>The pledge</strong> (say it, sign it, file it): 'I will measure honestly, counsel ONE change kindly, demo always, trace defaulters with love — rainbow plates, full dignity, every age. When pressured to rush, shame, skip feet, cook data or write off the obese, the starved or the myth-bound, I will remember the sliding curve, the oedematous feet, the tea-blocked iron — and choose the canvas.'",
          ],
        },
        {
          type: "table",
          heading: "Course map: where everything lives",
          columns: ["Module", "Core tools", "Exam favourite"],
          rows: [
            ["01 Fuel", "4-4-9, rainbow, absorption, counsel", "C+iron/tea-gap + ONE-change chain"],
            ["02 Measure", "MUAC/BMI, charts, ABCD", "Oedema overrules + trends beat points"],
            ["03 Life", "Kcal ladder, IYCF, koko, teens", "Zero alcohol + observe feeds"],
            ["04 Therapy", "Plates, hypo, DASH, leach, allergy", "15-15 + leaching + DKA"],
            ["05 Malnutrition", "SAM steps, blitz, obesity, re-feed", "ReSoMal slow + iron later + thiamine"],
            ["06 Safe+village", "5 keys, CWC, gardens, trace", "2-h rule + aflatoxin + kindly tracing"],
            ["07 Capstone", "Canvas, formula, 25 points", "Scenario reasoning + meal plans"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Course complete: NGP-NUT-101",
          body: "Seven modules, fourteen lessons, fourteen diagrams: fuel → measure → life → therapy → malnutrition → safe+village → capstone. You hold the canvas, the MUAC tape, the koko pot, the leaching bowl and the pledge. File this course in your portfolio, run your 90-day nutrition project, and walk into wards, CWCs and villages as the nurse who feeds futures. Nutrition isn't a topic — it's the breastfed hour-1, the plotted curve climbing, the grandmother converted. Congratulations, feeder of nations.",
        },
      ],
      keyPoints: [
        "Meal plans: targets → 3+snacks → Ghana foods → portions → fluids → demo → review.",
        "90-day project: ONE metric (CWC/SAM/anaemia/HbA1c/demos) + PDSA + board + present.",
        "25 tricky points cold; countdown 6-4-2-1 with mocks + sleep; canvas-structured answers.",
        "Interviews: STAR from project; myths negotiated; why-nutrition with a curve story.",
        "Portfolio crown: canvas + charts + logs + plans + reflections + consented photos.",
        "Pledge signed + filed; project started within 30 days.",
      ],
      quiz: {
        keywords: ["meal plans", "QI project", "PDSA", "tricky points", "countdown", "STAR", "interviews", "pledge", "portfolio", "90 days", "distinction", "canvas", "run chart", "Ghana foods", "portions"],
        categories: ["fundamentals"],
      },
    },
  ],
};
