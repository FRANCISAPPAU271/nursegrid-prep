import type { AuthoredQuestion } from "./authored-bank";

export const NUTR_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-NUTR-001",
    categorySlug: "fundamentals",
    stem: "A nurse is calculating the total daily caloric intake for a client whose prescribed nutritional meal plan provides 250 g of carbohydrates, 80 g of protein, and 50 g of fat. What is the total energy content provided by this diet?",
    choices: [
      {
        id: "a",
        text: "1,770 kcal",
      },
      {
        id: "b",
        text: "3,420 kcal",
      },
      {
        id: "c",
        text: "1,520 kcal",
      },
      {
        id: "d",
        text: "1,320 kcal",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Nutrient energy calculations use the Atwater physiological fuel values: carbohydrate 4 kcal/g, protein 4 kcal/g, fat 9 kcal/g (alcohol 7 kcal/g). This plan gives carbohydrate 250 g x 4 = 1,000 kcal; protein 80 g x 4 = 320 kcal; fat 50 g x 9 = 450 kcal; total 1,000 + 320 + 450 = 1,770 kcal. Why the other options fail: 3,420 kcal applies 9 kcal/g to every macronutrient, which overstates carbohydrate and protein, both of which yield 4 kcal/g. 1,520 kcal applies 4 kcal/g to fat, understating fat at 9 kcal/g. 1,320 kcal counts only carbohydrate and protein and omits the 450 kcal contributed by fat entirely.",
    strategy: "Macronutrient caloric math: Carbs = 4 kcal/g, Protein = 4 kcal/g, Fat = 9 kcal/g. Multiply each by its multiplier and sum the products.",
    difficulty: "easy",
    tags: ["nutrition", "macronutrients", "caloric-calculation", "energy-metabolism", "dietetics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-002",
    categorySlug: "fundamentals",
    stem: "A client with microcytic iron-deficiency anaemia is prescribed oral ferrous sulphate tablets. The nurse provides dietary guidance to maximize non-heme iron absorption. Which dietary strategy should the nurse recommend?",
    choices: [
      {
        id: "a",
        text: "Take the iron with a vitamin C source such as orange juice or baobab pulp, and keep tea, coffee, milk, and antacids at least 2 hours away from the dose",
      },
      {
        id: "b",
        text: "Take the iron with the largest meal of the day, because food buffers gastric irritation and improves absorption",
      },
      {
        id: "c",
        text: "Take the iron with a glass of milk or a calcium supplement, which coats the stomach and prevents nausea",
      },
      {
        id: "d",
        text: "Take the iron with strong tea or cocoa to disguise the metallic taste, since this improves tolerance of the tablets",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Non-heme iron (plant sources and oral iron supplements) exists in the insoluble ferric (Fe3+) state. Ascorbic acid (vitamin C) reduces ferric iron to the soluble, easily absorbed ferrous (Fe2+) state and prevents formation of unabsorbable complexes, significantly enhancing intestinal absorption. Conversely, polyphenols and tannins (found in tea, coffee, cocoa), phytates (in unrefined bran, whole grains), calcium (in dairy products), and antacids bind iron and inhibit absorption by up to 60–80%. The nurse must teach the client to space tea, coffee, and dairy at least 2 hours away from iron doses. Why the other options fail: taking iron with a meal (option b) is the commonest patient habit and is plausible because it reduces nausea, but food binds the ferrous ion and cuts absorption by roughly 40 to 50 percent, so timing relative to meals matters. Milk and calcium (option c) are the trap of a familiar comfort measure: calcium competes directly with iron for absorption in the enterocyte. Tea and cocoa (option d) are pleasant to take but their polyphenols and tannins complex ferric iron in the gut lumen and can reduce uptake by more than half.",
    strategy: "Iron bioavailability: Vitamin C enhances iron absorption (Fe3+ -> Fe2+). Tannins (tea), phytates (bran), and calcium (milk) inhibit absorption; space by 2 hours.",
    difficulty: "easy",
    tags: ["nutrition", "iron-absorption", "vitamin-c", "tannins", "anaemia"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-003",
    categorySlug: "fundamentals",
    stem: "A nurse conducts a comprehensive nutritional assessment using the ABCD approach (Anthropometric, Biochemical, Clinical, Dietary). Which physical sign observed during the clinical examination strongly suggests severe riboflavin (vitamin B2) or iron deficiency?",
    choices: [
      {
        id: "a",
        text: "Angular cheilitis with fissuring at the mouth corners, together with an atrophic, smooth, beefy-red tongue",
      },
      {
        id: "b",
        text: "Bilateral painless enlargement of the parotid glands, with loss of the buccal fat pad",
      },
      {
        id: "c",
        text: "Transverse white bands across the fingernails, with thinning of the hair and easy pluckability",
      },
      {
        id: "d",
        text: "Swollen, friable gums that bleed on gentle brushing, with loose teeth in otherwise sound molars",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The clinical ('C') component of the ABCD nutritional assessment evaluates physical signs of nutrient deficiency on mucosal surfaces, skin, hair, and nails. Angular cheilitis (stomatitis with fissuring and maceration at labial commissures) and glossitis (inflammation, erythema, and papillary atrophy of the tongue) are classic physical indicators of riboflavin (vitamin B2), pyridoxine (vitamin B6), iron, or folate/B12 deficiencies. Koilonychia (spoon nails) reflects chronic severe iron deficiency, not vitamin C excess. Why the other options fail: bilateral parotid enlargement (option b) is a real nutritional sign but points to bulimia, starvation, or HIV salivary gland disease, none of which the stem describes, and the buccal fat pad is lost in wasting rather than in B2 deficiency. Transverse white nail bands (option c) are Mees' lines, seen after arsenic exposure, severe systemic illness, or chemotherapy, not riboflavin or iron deficiency. Friable bleeding gums with loose teeth (option d) are the gingival picture of scurvy, which is vitamin C deficiency; it is a mucosal sign, but a different nutrient from the one the stem asks about.",
    strategy: "Clinical signs of deficiency: Angular cheilitis and glossitis indicate riboflavin (B2), B-complex, or iron deficiency. Inspect oral mucosa closely.",
    difficulty: "medium",
    tags: ["nutrition", "nutritional-assessment", "abcd-model", "angular-cheilitis", "b-vitamins"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-004",
    categorySlug: "pediatrics",
    stem: "During a community child health outreach, a community health nurse measures the Mid-Upper Arm Circumference (MUAC) of an 18-month-old child using a standard color-banded Shakir strip. The measurement is 11.2 cm (RED zone). How should the nurse triage and manage this child?",
    choices: [
      {
        id: "a",
        text: "Classify as severe acute malnutrition, do an appetite test with ready-to-use therapeutic food, check for pitting oedema and danger signs, and enrol in outpatient or inpatient care",
      },
      {
        id: "b",
        text: "Classify as moderate acute malnutrition, give a single dose of vitamin A, and review the child at the clinic in 4 weeks once the oedema has settled",
      },
      {
        id: "c",
        text: "Enrol the child for outpatient care only if bilateral pitting oedema is absent, and refer for inpatient stabilisation only once MUAC falls below 10.5 cm",
      },
      {
        id: "d",
        text: "Repeat the MUAC measurement after 2 weeks of supplementary feeding at home, and assign a classification only if the value has not improved by then",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "MUAC is a rapid, validated, age-independent screening tool for acute wasting in children aged 6 to 59 months: (1) Red (< 11.5 cm) = Severe Acute Malnutrition (SAM), carrying a 9- to 11-fold increased risk of mortality; (2) Yellow (11.5 to 12.4 cm) = Moderate Acute Malnutrition (MAM); (3) Green (>= 12.5 cm) = Normal nutritional status. A child with a MUAC of 11.2 cm has SAM. Management requires: assessment for bilateral pitting edema, checking for medical complications (fever, hypothermia, severe anemia, hypoglycemia, respiratory distress), conducting an RUTF appetite test, and admitting to Inpatient Stabilization (if complications present or failed appetite test) or Outpatient Therapeutic Program (OTP). Why the other options fail: option b under-calls the severity. The yellow MAM band runs from 11.5 to 12.4 cm, and 11.2 cm sits below it in the red band, so a single vitamin A dose and a four-week review leaves a child with a nine- to eleven-fold mortality risk untreated. Option c invents a threshold that does not exist: MUAC below 10.5 cm is not an admission criterion, and oedema makes a child severely malnourished at any MUAC rather than excluding them from care. Option d delays a decision that must be made now; two weeks of home feeding in a child at this risk is time the child does not have.",
    strategy: "Pediatric MUAC cutoffs: < 11.5 cm = RED (Severe Acute Malnutrition). Urgent appetite test + medical screening -> OTP with RUTF or Inpatient care.",
    difficulty: "easy",
    tags: ["nutrition", "pediatrics", "muac", "sam", "child-health"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-005",
    categorySlug: "fundamentals",
    stem: "A surgical nurse evaluates laboratory nutritional markers for a malnourished client receiving enteral nutrition. Why is serum prealbumin (transthyretin) considered a superior marker for assessing acute nutritional recovery compared to serum albumin?",
    choices: [
      {
        id: "a",
        text: "Prealbumin has a half-life of 2 to 3 days against 20 days for albumin, so it tracks real-time changes in visceral protein synthesis",
      },
      {
        id: "b",
        text: "Albumin responds within 48 hours of adequate intake, so it detects acute nutritional recovery earlier than prealbumin does",
      },
      {
        id: "c",
        text: "Prealbumin is filtered and reabsorbed by the renal tubule, so its serum level reflects glomerular filtration rather than intake",
      },
      {
        id: "d",
        text: "Albumin has a shorter half-life than prealbumin, so it falls faster during acute illness and recovers faster with feeding",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Serum prealbumin (transthyretin) has a short circulating half-life of 2–3 days and a small total body pool, making it highly sensitive to acute changes in protein-calorie intake; levels rise rapidly within 48–72 hours of adequate nutritional support. In contrast, albumin has a long half-life (approximately 20 days) and a large extravascular reserve, making it a poor indicator of acute nutritional change. Furthermore, albumin is a negative acute-phase reactant whose hepatic synthesis is suppressed by cytokines during inflammation, infection, trauma, and liver disease, and serum levels drop dramatically during fluid overload due to hemodilution. Why the other options fail: option b inverts the half-lives. Albumin turns over over about 20 days and sits on a large extravascular reserve, so a nutritional change takes weeks to register. Option c attributes prealbumin's level to renal handling; transthyretin is not a filtration marker in this sense, and its fall reflects reduced hepatic synthesis, not tubular loss. Option d is exactly backwards: albumin's long half-life is why it lags, and its fall during inflammation reflects cytokine suppression of synthesis and haemodilution, not a fast turnover.",
    strategy: "Nutritional biomarkers: Prealbumin half-life = 2-3 days (acute, sensitive). Albumin half-life = 20 days (poor acute marker, confounded by inflammation/hydration).",
    difficulty: "medium",
    tags: ["nutrition", "prealbumin", "albumin", "biochemical-assessment", "protein-synthesis"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-006",
    categorySlug: "maternal-newborn",
    stem: "A 26-year-old woman attends the preconception clinic planning a pregnancy within the next 3 months. She has no chronic medical conditions and no prior affected pregnancies. What folic acid supplementation should the nurse prescribe, and why is periconceptional timing essential?",
    choices: [
      {
        id: "a",
        text: "Folic acid 400 mcg daily from at least 1 month before conception through the first trimester, to prevent neural tube defects",
      },
      {
        id: "b",
        text: "Folic acid 5 mg daily from the first antenatal visit, because the neural tube closes during the second trimester",
      },
      {
        id: "c",
        text: "Folic acid 400 mcg daily once pregnancy is confirmed by ultrasound at 8 weeks, continued until delivery",
      },
      {
        id: "d",
        text: "No supplement is needed when the diet is rich in green leafy vegetables and legumes, provided iron stores are normal",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The embryonic neural tube closes completely between day 21 and day 28 post-conception (approximately 3 to 4 weeks after fertilization), often before a woman realizes she is pregnant. Periconceptional folic acid supplementation (400 mcg or 0.4 mg daily for average-risk women) started at least 1 month prior to conception and continued through the 12th week of gestation reduces the incidence of neural tube defects (spina bifida, anencephaly, encephalocele) by up to 70%. High-risk women (history of previous NTD, maternal diabetes, obesity, sickle cell, or taking antiepileptic drugs) require a higher dose of 4–5 mg daily. Why the other options fail: option b carries the high-risk dose and the wrong clock. Five milligrams is reserved for women with a previous affected pregnancy, diabetes, obesity, sickle cell disease, or anticonvulsant use, and the neural tube is closed by day 28, long before the second trimester. Option c starts after the window has shut; ultrasound confirmation at 8 weeks is five weeks past closure. Option d trusts diet alone, but dietary folate is poorly bioavailable and the protective evidence rests on periconceptional supplementation, so a good diet does not substitute for the tablet.",
    strategy: "Periconceptional folate: 400 mcg daily starting >= 1 month BEFORE conception through 12 weeks gestation. Neural tube closes by day 28 post-conception.",
    difficulty: "easy",
    tags: ["nutrition", "folic-acid", "neural-tube-defects", "preconception-care", "maternal-health"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-007",
    categorySlug: "maternal-newborn",
    stem: "A first-time mother brings her 4-month-old infant to the child welfare clinic. The grandmother advises the mother to give the baby water and thin maize porridge because 'the weather is too hot for breast milk alone.' What evidence-based guidance should the nurse deliver?",
    choices: [
      {
        id: "a",
        text: "Continue exclusive breastfeeding to 6 months; breast milk is about 88% water and meets all fluid and nutrient needs even in hot weather",
      },
      {
        id: "b",
        text: "Give boiled water between feeds in hot weather, because breast milk alone cannot replace the water lost through sweating",
      },
      {
        id: "c",
        text: "Introduce thin maize porridge at 4 months, since breast milk no longer meets energy needs after 3 months of age",
      },
      {
        id: "d",
        text: "Offer sugar water after each feed to prevent hypoglycaemia until the infant is 6 months old and eating solids",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "WHO and UNICEF recommend Exclusive Breastfeeding (EBF) for the first 6 months of life (no other liquids or solids, not even water, except for vitamins, mineral supplements, or oral rehydration salts/medicines). Breast milk is 87–88% water with low osmolarity, satisfying all infant hydration requirements even in arid tropical climates. Giving water, teas, or thin porridges fills the infant's small stomach, decreases breast suckling (lowering maternal prolactin and milk supply), and introduces waterborne pathogens causing diarrhoeal diseases, the leading cause of infant mortality in low-resource settings. Why the other options fail: option b is the grandmother's argument in clinical clothing. It sounds like sensible hydration, but breast milk is low in solute and high in water, so an exclusively breastfed infant in a hot climate is not water-depleted, and top-up water displaces a feed and its protein. Option c brings complementary feeding forward by two months, against WHO guidance, and thin porridge is energy-dilute, which is how infants become malnourished rather than better nourished. Option d adds sugar without protein or micronutrients and fills the small stomach, reducing suckling and therefore prolactin-driven milk production.",
    strategy: "Exclusive breastfeeding: EBF for first 6 months (zero water/solids). Breast milk is 88% water and provides complete hydration even in tropical heat.",
    difficulty: "easy",
    tags: ["nutrition", "exclusive-breastfeeding", "infant-nutrition", "iycf", "health-promotion"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-008",
    categorySlug: "gerontology-community",
    stem: "An 82-year-old client exhibits microcytic anaemia, mild cognitive decline, and bilateral sensory paresthesia in the lower extremities. Serum vitamin B12 level is low. The client eats fish and eggs regularly. What age-related physiological alteration of the gastrointestinal system explains this vitamin B12 deficiency?",
    choices: [
      {
        id: "a",
        text: "Atrophic gastritis with hypochlorhydria reduces acid and pepsin, so protein-bound B12 cannot be cleaved for absorption",
      },
      {
        id: "b",
        text: "Loss of intrinsic factor alone, because parietal cell loss is the sole cause of B12 malabsorption in older adults",
      },
      {
        id: "c",
        text: "Bacterial overgrowth in the small bowel, which competes for dietary B12 before it can reach the terminal ileum",
      },
      {
        id: "d",
        text: "Enhanced renal excretion of transcobalamin-bound B12, secondary to an age-related fall in glomerular filtration",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Age-related atrophic gastritis affects 10–30% of older adults, leading to loss of gastric parietal cells, hypochlorhydria (decreased hydrochloric acid), and diminished pepsin secretion. Dietary vitamin B12 is bound to animal proteins; gastric acid and pepsin are mandatory to cleave B12 from food proteins so it can bind to haptocorrin and subsequently to intrinsic factor for terminal ileal absorption. When gastric acid is low, protein-bound B12 malabsorption develops despite adequate dietary intake. Older adults frequently require crystalline B12 supplements (which do not require acid cleavage) or parenteral B12 injections. Why the other options fail: option b names a genuine mechanism but makes it exclusive. This client eats fish and eggs, so the food-bound fraction is precisely the part that fails first, and intrinsic factor loss is a contributing factor here rather than the sole explanation the stem asks for. Option c is a real cause of B12 deficiency in blind loops and strictures, but nothing in the history suggests stasis, surgery, or a structural lesion. Option d invents a route of loss; B12 is conserved through enterohepatic circulation, and falling filtration rate does not strip transcobalamin-bound vitamin from plasma.",
    strategy: "Geriatric B12 malabsorption: Atrophic gastritis -> hypochlorhydria -> inability to cleave protein-bound B12 -> B12 deficiency and neurological deficits.",
    difficulty: "medium",
    tags: ["nutrition", "gerontology", "vitamin-b12", "atrophic-gastritis", "hypochlorhydria"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-009",
    categorySlug: "fundamentals",
    stem: "A nurse is teaching a newly diagnosed type 2 diabetic client about Medical Nutrition Therapy (MNT) using the 'Plate Method'. How should the nurse instruct the client to divide a standard 9-inch dinner plate for optimal glycemic control?",
    choices: [
      {
        id: "a",
        text: "Half the plate non-starchy vegetables, one quarter lean protein such as fish or beans, and one quarter complex carbohydrate such as boiled yam",
      },
      {
        id: "b",
        text: "Half the plate brown rice and boiled yam, one quarter fruit, and one quarter lean fish or skinless chicken",
      },
      {
        id: "c",
        text: "Half the plate lean protein, one quarter starchy vegetables, and one quarter fruit, with no grain at any meal",
      },
      {
        id: "d",
        text: "The whole plate non-starchy vegetables, with two slices of whole-grain bread and a banana taken on the side",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The Diabetes Plate Method is a visual, practical tool for portion control and carbohydrate consistency: (1) Half the plate (50%) consists of non-starchy vegetables (greens, tomatoes, okra, cabbage, peppers) which are rich in fiber, micronutrients, and water with minimal impact on blood glucose; (2) One quarter (25%) consists of lean protein sources (fish, chicken without skin, legumes, eggs); (3) One quarter (25%) consists of complex, high-fiber, low-glycemic carbohydrates (unrefined grains, brown rice, yam, plantain, whole wheat). This structure prevents postprandial glycemic spikes and promotes satiety. Why the other options fail: option b looks healthier than it is, because brown rice, yam, and fruit are all carbohydrate, so half the plate plus a fruit quarter delivers a carbohydrate load closer to three quarters. Option c over-corrects in the protein direction and still stacks starchy vegetables with fruit, and its ban on grain is not part of the plate method. Option d keeps the vegetables but puts the carbohydrate outside the plate, where it is no longer being portioned, which defeats the visual control the method exists to provide.",
    strategy: "Diabetes plate method: 1/2 non-starchy vegetables + 1/4 lean protein + 1/4 complex carbohydrate. Maximizes fiber and controls postprandial glucose.",
    difficulty: "easy",
    tags: ["nutrition", "diabetes-mnt", "plate-method", "glycemic-control", "carbohydrate-consistency"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-010",
    categorySlug: "fundamentals",
    stem: "A client with essential hypertension is prescribed the Dietary Approaches to Stop Hypertension (DASH) eating plan. Which nutrient profile characterizes the DASH diet, and what is the recommended daily sodium limit for optimal blood pressure reduction?",
    choices: [
      {
        id: "a",
        text: "High in potassium, calcium, magnesium, and fibre, with sodium below 2,300 mg/day and ideally 1,500 mg/day",
      },
      {
        id: "b",
        text: "High in potassium and calcium from fruit and low-fat dairy, with sodium limited to 3,000 mg/day for blood pressure control",
      },
      {
        id: "c",
        text: "Low in saturated fat, but potassium and magnesium are unrestricted because they do not influence blood pressure",
      },
      {
        id: "d",
        text: "Emphasises whole grains and nuts, with sodium replaced at every meal by potassium-based salt substitutes",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The DASH diet is an evidence-based nutritional intervention that lowers systolic blood pressure by 8–14 mmHg. It emphasizes: (1) rich intake of fruits and vegetables (4–5 servings of each daily); (2) low-fat dairy products (providing calcium); (3) whole grains, poultry, fish, and nuts (providing magnesium and potassium); and (4) marked reduction in sodium, red meats, sweets, and saturated fats. Potassium, calcium, and magnesium promote vascular smooth muscle relaxation and urinary sodium excretion. Restricting sodium to < 2,300 mg/day (or <= 1,500 mg/day in hypertensive individuals) provides additive blood pressure lowering. Why the other options fail: option b gets the foods right and the number wrong. Three thousand milligrams is above the upper limit that defines the plan, and the blood-pressure benefit is dose-dependent, which is why 1,500 mg is the stronger target. Option c states the opposite of the mechanism: potassium and magnesium are among the nutrients that lower blood pressure, and their intake is a defining feature of DASH rather than an irrelevance. Option d sounds like DASH but swaps a dietary pattern for a product, and salt substitutes are hazardous in the renal impairment that commonly accompanies hypertension.",
    strategy: "DASH diet: High potassium, magnesium, calcium + high fiber + sodium <= 1,500-2,300 mg/day. Proven to lower BP significantly.",
    difficulty: "easy",
    tags: ["nutrition", "dash-diet", "hypertension", "sodium-reduction", "cardiovascular-health"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-011",
    categorySlug: "fundamentals",
    stem: "A client with Stage 4 Chronic Kidney Disease (CKD; eGFR 22 mL/min/1.73 m², not on dialysis) requires dietary counselling. Which nutritional restrictions must the nurse emphasize to prevent uremic complications, hyperkalaemia, and renal osteodystrophy?",
    choices: [
      {
        id: "a",
        text: "Protein 0.6 to 0.8 g/kg/day, with potassium, phosphorus, and sodium restricted and potassium-based salt substitutes avoided",
      },
      {
        id: "b",
        text: "Increase protein to 1.5 g/kg/day to replace losses, and restrict only sodium and fluid until dialysis begins",
      },
      {
        id: "c",
        text: "Restrict potassium and phosphorus only, since protein does not raise urea until dialysis has been started",
      },
      {
        id: "d",
        text: "Restrict sodium and phosphorus only, and use potassium-based salt substitutes freely to make the diet palatable",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "In advanced pre-dialysis CKD (Stage 4–5): (1) Protein is controlled to 0.6–0.8 g/kg/day to decrease nitrogenous waste production (blood urea nitrogen) and slow renal functional decline (once dialysis begins, protein is increased to 1.2 g/kg to replace dialysate amino acid loss); (2) Potassium restriction (< 2–3 g/day) is essential because failing nephrons cannot excrete potassium, risking fatal cardiac arrhythmias; (3) Phosphorus restriction (< 800–1,000 mg/day) prevents hyperphosphatemia, secondary hyperparathyroidism, and vascular calcification; and (4) Sodium restriction (< 2 g/day) controls fluid retention and hypertension. Why the other options fail: option b imports the dialysis prescription into the pre-dialysis stage. Protein rises to about 1.2 g/kg only once dialysis replaces amino acids lost in the dialysate, and 1.5 g/kg at an eGFR of 22 generates a nitrogen load the failing kidney cannot clear. Option c denies the central mechanism of uraemia, which is protein catabolism raising blood urea nitrogen well before dialysis. Option d removes the two restrictions that matter least here and adds a potassium load, which is the most dangerous omission in a client who cannot excrete potassium.",
    strategy: "CKD pre-dialysis nutrition: Moderate protein (0.6-0.8 g/kg) + restrict potassium + restrict phosphorus + restrict sodium. Avoid potassium salt substitutes.",
    difficulty: "medium",
    tags: ["nutrition", "ckd", "renal-diet", "potassium-restriction", "phosphorus-control"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-012",
    categorySlug: "fundamentals",
    stem: "A 22-year-old client is diagnosed with Celiac Disease (gluten-sensitive enteropathy) confirmed by duodenal biopsy demonstrating villous blunting. Which grains must the nurse instruct the client to eliminate completely from their diet, and which staples are safe alternatives?",
    choices: [
      {
        id: "a",
        text: "Eliminate wheat, rye, barley, and contaminated oats, substituting rice, maize, cassava, yam, millet, and sorghum",
      },
      {
        id: "b",
        text: "Eliminate rice, maize, and cassava, which cross-react with gliadin, while allowing wheat in small amounts",
      },
      {
        id: "c",
        text: "Avoid all grains including rice and millet, and base the diet on oats that have not been certified gluten-free",
      },
      {
        id: "d",
        text: "Eliminate gluten strictly for 6 months, then reintroduce wheat gradually once the villi have recovered",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Celiac disease is an immune-mediated enteropathy triggered by ingestion of gluten storage proteins (gliadin in wheat, secalin in rye, hordein in barley) in genetically susceptible individuals, causing immune-mediated mucosal inflammation, crypt hyperplasia, and villous atrophy in the small intestine. The sole effective treatment is strict, lifelong elimination of all gluten-containing grains: Barley, Rye, Oats (unless certified gluten-free), and Wheat (the 'BROW' mnemonic). Safe naturally gluten-free alternatives include: rice, maize, cassava, yams, plantains, potatoes, soy, millet, sorghum, arrowroot, and buckwheat. Why the other options fail: option b reverses the safe and unsafe lists. Rice, maize, and cassava contain no gluten and do not cross-react with gliadin, while wheat is the single most important grain to remove. Option c is a double error: it eliminates grains that are safe and then builds the diet on ordinary oats, which are routinely contaminated with wheat during milling and transport. Option d treats coeliac disease as a temporary elimination diet, but the enteropathy recurs with any reintroduction, so the restriction is lifelong.",
    strategy: "Celiac disease diet: Eliminate 'BROW' (Barley, Rye, Oats, Wheat). Safe staples = Rice, Maize, Yam, Cassava, Plantain, Millet, Sorghum.",
    difficulty: "easy",
    tags: ["nutrition", "celiac-disease", "gluten-free", "brow-grains", "malabsorption"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-013",
    categorySlug: "pediatrics",
    stem: "A 2-year-old child admitted to the paediatric stabilization unit presents with bilateral lower extremity pitting edema extending to the thighs, a swollen 'moon face', a flaky-paint dermatosis with hyperpigmented peeling skin, distended abdomen with hepatomegaly, and reddish-brown discolored hair that plucks out easily ('flag sign'). The child is apathetic and irritable. How should the nurse classify this form of malnutrition?",
    choices: [
      {
        id: "a",
        text: "Kwashiorkor, the oedematous form of severe acute malnutrition, driven by protein deficiency with hypoalbuminaemic third spacing",
      },
      {
        id: "b",
        text: "Marasmus, because the oedema reflects protein-energy wasting with loss of subcutaneous fat and muscle bulk",
      },
      {
        id: "c",
        text: "Nutritional dwarfism, because the child is short for age with preserved subcutaneous fat and a normal appetite",
      },
      {
        id: "d",
        text: "Moderate acute malnutrition, because the pitting oedema is confined to the lower limbs and the hair changes are reversible",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Kwashiorkor is edematous Severe Acute Malnutrition (SAM) caused by severe dietary protein deficiency relative to energy intake (often occurring when a toddler is weaned abruptly from protein-rich breast milk to a high-carbohydrate starch gruel). Key diagnostic hallmarks include: (1) bilateral pitting nutritional edema (starting in feet/ankles and progressing upwards); (2) 'flaky-paint' / enamel dermatosis (desquamating pigmented skin); (3) sparse, hypopigmented hair ('flag sign'); (4) fatty liver (hepatomegaly) due to impaired apolipoprotein synthesis; and (5) profound apathy and misery. Marasmus, in contrast, presents with severe somatic wasting ('skin and bones'), no edema, and an alert, ravenous child. Why the other options fail: option b is the classic confusion, and it fails on its defining feature. Marasmus is non-oedematous by definition, with gross wasting and an alert, hungry child, whereas this child is oedematous and apathetic. Option c describes stunting, which is linear growth failure with preserved weight for height and no oedema. Option d misreads oedema as a severity marker rather than a category: bilateral pitting oedema of nutritional origin makes a child severely acutely malnourished on its own, whatever the site or the hair findings.",
    strategy: "Kwashiorkor vs Marasmus: Bilateral edema + flaky-paint skin + moon face + plucky hair = Kwashiorkor. Extreme wasting + NO edema = Marasmus.",
    difficulty: "easy",
    tags: ["nutrition", "pediatrics", "kwashiorkor", "sam", "protein-deficiency"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-014",
    categorySlug: "fluid-electrolyte",
    stem: "A chronically starved client with a BMI of 13 kg/m² is admitted for nutritional rehabilitation. Twelve hours after aggressive high-carbohydrate enteral feeding is initiated, the client develops profound muscular weakness, tremors, confusion, respiratory shallowing, and ventricular arrhythmias. Serum phosphorus is critically low at 0.4 mmol/L (normal: 0.8–1.5 mmol/L). What life-threatening syndrome has developed, and what is the underlying mechanism?",
    choices: [
      {
        id: "a",
        text: "Refeeding syndrome: the carbohydrate load triggers insulin release, which drives phosphate, potassium, and magnesium into cells",
      },
      {
        id: "b",
        text: "Hyperkalaemia from the rapid cellular release of potassium and magnesium as feeding is started after starvation",
      },
      {
        id: "c",
        text: "Wernicke encephalopathy from thiamine deficiency, which causes confusion, weakness, and cardiac arrhythmia",
      },
      {
        id: "d",
        text: "Hypoglycaemia from the insulin surge, which depletes serum glucose and causes tremor, confusion, and arrhythmia",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Refeeding syndrome is a potentially fatal metabolic complication occurring when malnourished, starved individuals are refed too rapidly. During prolonged starvation, the body shifts from carbohydrate to fat/ketone metabolism, and total-body electrolyte stores (especially phosphorus, potassium, and magnesium) become profoundly depleted despite near-normal serum levels. Reintroducing carbohydrates triggers a massive surge of endogenous insulin. Insulin stimulates intracellular uptake of glucose, phosphate, potassium, and magnesium. Rapid intracellular phosphorylation of glucose rapidly consumes remaining extracellular phosphate, causing severe hypophosphatemia, impaired ATP production, diaphragmatic weakness, hemolytic anemia, and lethal arrhythmias. Why the other options fail: option b reverses the electrolyte direction. Insulin drives potassium into cells, so refeeding produces hypokalaemia, not hyperkalaemia, and it does not explain a phosphorus of 0.4 mmol/L. Option c is a genuine hazard of refeeding and explains the confusion, but thiamine deficiency does not lower serum phosphate and the stem's laboratory value is the discriminator. Option d names the right hormone and the wrong substrate; glucose is being driven into cells and is generally normal or high, while the measured deficit is phosphate.",
    strategy: "Refeeding syndrome: Rapid feeding -> insulin surge -> intracellular shift of phosphate, potassium, magnesium -> profound hypophosphatemia & cardiac arrest. 'Start low, go slow' + thiamine.",
    difficulty: "hard",
    tags: ["nutrition", "refeeding-syndrome", "hypophosphatemia", "fluid-electrolyte", "critical-care"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-015",
    categorySlug: "health-promotion",
    stem: "A 3-year-old child in a rural community presents with severe night blindness (inability to see in dim light), dry conjunctivae, and distinct, triangular, foamy, silvery-grey plaques on the temporal bulbar conjunctiva (Bitot's spots). What micronutrient deficiency is responsible, and what is the WHO high-dose therapeutic protocol?",
    choices: [
      {
        id: "a",
        text: "Vitamin A deficiency causing xerophthalmia; give 200,000 IU orally on day 1, day 2, and again at least 2 weeks later",
      },
      {
        id: "b",
        text: "Vitamin A deficiency; give a single 200,000 IU dose and repeat only if night blindness persists after 6 weeks",
      },
      {
        id: "c",
        text: "Riboflavin deficiency; give oral riboflavin 5 mg daily until the Bitot's spots have resolved completely",
      },
      {
        id: "d",
        text: "Vitamin A deficiency; apply topical antibiotic ointment to the plaques and review the child in 4 weeks",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Vitamin A is essential for rhodopsin synthesis in retinal rod cells (for scotopic/night vision) and for maintaining epithelial integrity of ocular surfaces. Deficiency causes xerophthalmia: Stage XN (night blindness), Stage X1A (conjunctival xerosis), Stage X1B (Bitot's spots — keratinized epithelial debris on the bulbar conjunctiva), Stage X2 (corneal xerosis), and Stage X3 (corneal ulceration and keratomalacia, resulting in irreversible blindness). WHO treatment protocol for clinical xerophthalmia: 200,000 IU orally (> 12 months; 100,000 IU for infants 6–11 months) immediately on Day 1, Day 2, and Day 14. Why the other options fail: option b gets the drug and the diagnosis right and the schedule wrong. The WHO regimen is three doses, on day 1, day 2, and day 14, because hepatic stores are empty and a single dose does not restore them before the cornea is at risk. Option c treats the eye as a local riboflavin problem; Bitot's spots are keratinised debris of vitamin A deficiency, and riboflavin does not address the corneal melting risk. Option d manages the plaque as an infection, but topical ointment does nothing for the systemic deficiency driving it and the four-week delay risks keratomalacia.",
    strategy: "Vitamin A deficiency (Xerophthalmia): Night blindness + Bitot spots -> WHO high-dose Vitamin A (Day 1, Day 2, and 2 weeks later) prevents permanent corneal melting.",
    difficulty: "medium",
    tags: ["nutrition", "vitamin-a", "xerophthalmia", "bitot-spots", "child-health"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-016",
    categorySlug: "fundamentals",
    stem: "A 45-year-old client with chronic alcoholism and poor dietary intake presents with a symmetric, rough, scaly, hyperpigmented erythematous rash on sun-exposed areas of the neck ('Casal's necklace') and dorsal hands. The client also has chronic watery diarrhea, disorientation, memory deficits, and glossitis. What nutritional deficiency disease is this, and what is the '4 Ds' mnemonic associated with it?",
    choices: [
      {
        id: "a",
        text: "Pellagra from niacin or tryptophan deficiency; the 4 Ds are dermatitis, diarrhoea, dementia, and death",
      },
      {
        id: "b",
        text: "Scurvy from vitamin C deficiency, in which perifollicular haemorrhage, gum disease, and poor wound healing accompany the rash",
      },
      {
        id: "c",
        text: "Beriberi from thiamine deficiency, which produces dermatitis, diarrhoea, and dementia in alcohol-dependent clients",
      },
      {
        id: "d",
        text: "Riboflavin deficiency, which produces a symmetrical photosensitive rash on sun-exposed skin with glossitis",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Pellagra is caused by a severe deficiency of niacin (nicotinic acid / vitamin B3) or its precursor amino acid tryptophan. It is historically associated with diets based almost exclusively on un-nixtamalized maize or chronic alcoholism with poor dietary intake. The hallmark is the classic '4 Ds': (1) Photosensitive Dermatitis (symmetrical, well-demarcated hyperkeratotic rash with burning sensation, classically encircling the neck as 'Casal necklace'); (2) Diarrhea (frequent watery stools, malabsorption, glossitis); (3) Dementia (headache, insomnia, depression, confusion, hallucinations); and (4) Death if untreated. Prompt administration of oral nicotinamide cures the condition. Why the other options fail: option b is tempting because the client is an alcoholic with a poor diet, but scurvy produces perifollicular haemorrhage and gingival disease rather than Casal's necklace, and it has no 4 Ds mnemonic. Option c draws on the same alcohol history and sounds close, yet thiamine deficiency causes peripheral neuropathy and high-output cardiac failure, not a photosensitive rash with diarrhoea and dementia. Option d gets the rash distribution right and the vitamin wrong: riboflavin deficiency causes angular stomatitis and a scrotal or nasolabial dermatitis, not the collar-line plaque the stem describes.",
    strategy: "Pellagra triad/tetrad: Niacin (B3) deficiency -> 4 Ds: Dermatitis (Casal's necklace), Diarrhea, Dementia, Death. Rapid response to nicotinamide.",
    difficulty: "easy",
    tags: ["nutrition", "pellagra", "niacin-b3", "4-ds", "casals-necklace"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-017",
    categorySlug: "safety-infection-control",
    stem: "A community health nurse provides health education to food handlers regarding the WHO 'Five Keys to Safer Food'. What temperature range is designated the 'Temperature Danger Zone' where foodborne bacterial pathogens multiply most rapidly, and what are the safe temperatures for hot holding and cold storage?",
    choices: [
      {
        id: "a",
        text: "Danger zone 5 to 60 °C; hold cold food below 5 °C, hot food above 60 °C, and cook to a core temperature above 70 °C",
      },
      {
        id: "b",
        text: "Danger zone 5 to 60 °C; cold foods may be held at 10 °C and hot foods at 55 °C during service",
      },
      {
        id: "c",
        text: "Danger zone 0 to 5 °C, because bacteria multiply fastest in food held just above freezing point",
      },
      {
        id: "d",
        text: "The danger zone applies only to meat; cooked rice, stews, and soups may be held at room temperature for 6 hours",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Under the WHO 'Five Keys to Safer Food' (Keep clean; Separate raw and cooked; Cook thoroughly; Keep food at safe temperatures; Use safe water and raw materials): The Temperature Danger Zone is 5 °C to 60 °C (41 °F to 140 °F). Within this range, common foodborne bacteria (Salmonella, Staphylococcus aureus, E. coli, Bacillus cereus) divide rapidly, doubling every 20 minutes. Safe food handling rules dictate: (1) hot food must be held above 60 °C; (2) cold food must be chilled below 5 °C; (3) cooked foods must reach a core temperature of >= 70 °C for >= 2 minutes; and (4) perishable foods must never sit in the danger zone for > 2 hours. Why the other options fail: option b quotes the right range and then sets holding temperatures inside it, at 10 °C and 55 °C, which defeats the purpose of naming a zone at all. Option c compresses the zone to the refrigeration range; bacterial growth is not fastest near freezing, it is fastest through the middle of the 5 to 60 °C band. Option d singles out meat, but cooked rice, stews, and gravies support Bacillus cereus and Clostridium perfringens growth, and six hours at room temperature is well beyond the two-hour limit.",
    strategy: "Food safety temperature danger zone: 5 °C to 60 °C. Cold foods < 5 °C, hot foods > 60 °C, thorough cooking core temp >= 70 °C.",
    difficulty: "easy",
    tags: ["nutrition", "food-safety", "who-five-keys", "danger-zone", "foodborne-illness"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-018",
    categorySlug: "fundamentals",
    stem: "A nurse is preparing to administer an intermittent enteral tube feeding via a newly inserted small-bore nasogastric (NG) tube in an alert adult client. What is the gold-standard, evidence-based bedside method to verify proper tube position prior to feeding, and what bed position must be maintained?",
    choices: [
      {
        id: "a",
        text: "Aspirate gastric fluid and confirm pH 5.5 or below, with initial placement checked by X-ray, and keep the head of the bed at 30 to 45 degrees",
      },
      {
        id: "b",
        text: "Confirm placement with the auscultatory whoosh test, and keep the head of the bed flat during and after the feed",
      },
      {
        id: "c",
        text: "Verify by aspirating and checking that the fluid is green or bile-stained, and nurse the client semi-prone",
      },
      {
        id: "d",
        text: "Confirm by X-ray before every feed, and elevate the head of the bed to 15 degrees during the infusion",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Aspiration pneumonia is a major, preventable complication of enteral feeding. Bedside placement confirmation standards: Testing the pH of aspirated fluid (gastric aspirate is acidic, with a pH <= 5.5, whereas respiratory or intestinal secretions typically have a pH >= 6.0–7.0) is the validated bedside standard; abdominal X-ray is the gold standard for initial placement. The auscultatory 'whoosh test' (air insufflation) is unreliable and dangerous because air sounds transmit clearly from the pleural space, bronchus, or esophagus, leading to fatal pulmonary infusion. To minimize aspiration, the head of the bed must remain elevated 30–45 degrees during and for 1 hour after feeding. Why the other options fail: option b is retained practice in many units, which is exactly why it is a good distractor; insufflated air transmits from the pleura and bronchus as readily as from the stomach, so the whoosh test cannot distinguish oesophageal or pulmonary placement and has caused fatal intrapulmonary infusion. Option c substitutes colour for pH, but bile staining is neither sensitive nor specific and says nothing about whether the tip is in the airway. Option d is right about X-ray for initial placement and wrong about doing it before every feed, and 15 degrees is too low to protect against aspiration.",
    strategy: "NG tube feeding safety: Verify position via aspirate pH <= 5.5 (NEVER the whoosh test). Keep head of bed elevated 30-45 degrees to prevent fatal aspiration.",
    difficulty: "medium",
    tags: ["nutrition", "enteral-feeding", "ng-tube-verification", "ph-testing", "aspiration-prevention"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-019",
    categorySlug: "pharmacology-parenteral",
    stem: "A client with extensive small-bowel resection is receiving Total Parenteral Nutrition (TPN) via a central venous catheter. The current TPN infusion bag is running out, and the replacement bag from the pharmacy is delayed by 2 hours. What intravenous fluid must the nurse infuse immediately at the same rate to prevent a life-threatening complication?",
    choices: [
      {
        id: "a",
        text: "Hang 10% dextrose in water at the same rate, because the constant insulin drive will cause rebound hypoglycaemia",
      },
      {
        id: "b",
        text: "Hang 0.9% sodium chloride at the same rate until the new bag arrives, then resume the TPN as prescribed",
      },
      {
        id: "c",
        text: "Pause the infusion and restart the new TPN at half the previous rate once it arrives from the pharmacy",
      },
      {
        id: "d",
        text: "Hang 5% dextrose at the same rate and monitor capillary glucose hourly until the new bag is available",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "TPN solutions contain high concentrations of hypertonic glucose (typically 15–25% dextrose), stimulating constant, high-level endogenous insulin secretion from pancreatic beta cells. If a TPN infusion is suddenly stopped or interrupted without tapering, circulating hyperinsulinaemia persists in the absence of exogenous glucose supply, causing rapid and severe rebound hypoglycemia (diaphoresis, tremors, altered mental status, seizures, and coma). If a TPN bag runs dry and the next bag is unavailable, the nurse must immediately hang 10% Dextrose in Water (D10W) at the existing TPN rate until the new TPN solution arrives. Why the other options fail: option b maintains the line and the volume but not the glucose, and saline does nothing to blunt a hyperinsulinaemic state. Option c is the most dangerous of the three: stopping the infusion abruptly produces the same rebound hypoglycaemia, and restarting at half rate prolongs it. Option d is the strongest distractor because 5% dextrose is a dextrose solution, but it delivers half the glucose of the 10% bag the client was receiving, so the same insulin drive outpaces the replacement.",
    strategy: "TPN interruption protocol: If TPN is interrupted or delayed, hang 10% Dextrose in Water (D10W) immediately to prevent rebound hypoglycemia.",
    difficulty: "easy",
    tags: ["nutrition", "tpn", "rebound-hypoglycemia", "parenteral-nutrition", "central-venous-line"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-NUTR-020",
    categorySlug: "health-promotion",
    stem: "A public health nurse leads a district nutrition advocacy campaign. Which population-level public health nutrition intervention has been proven most cost-effective in preventing endemic goitre, maternal miscarriages, and irreversible congenital neurological impairment (cretinism) in children?",
    choices: [
      {
        id: "a",
        text: "Universal salt iodization, mandatory fortification of all edible commercial salt with potassium iodate",
      },
      {
        id: "b",
        text: "Universal fortification of wheat flour with iodine, supported by annual iodized oil capsules for schoolchildren",
      },
      {
        id: "c",
        text: "Annual oral iodine supplementation for all women of childbearing age, delivered through antenatal clinics",
      },
      {
        id: "d",
        text: "Iodized oil injection campaigns for schoolchildren every 2 years, with no change to household salt",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Iodine is an essential trace element required for thyroid hormone (thyroxine [T4] and triiodothyronine [T3]) synthesis. Iodine Deficiency Disorders (IDD) represent the single greatest cause of preventable brain damage and mental impairment worldwide. Manifestations include endemic goiter, hypothyroidism, impaired cognitive development in children, increased pregnancy loss, stillbirths, and congenital iodine deficiency syndrome (cretinism: severe irreversible cognitive impairment, deaf-mutism, spastic diplegia, and dwarfism). Universal Salt Iodization (USI) is recognized by WHO as the most equitable, cost-effective, and sustainable public health intervention to eliminate IDD globally. Why the other options fail: option b widens the vehicle to a food that is not eaten by everyone in the same quantity as salt and leaves the poorest households uncovered, which is the reason flour fortification is neither sufficient nor the chosen strategy. Option c reaches only women who attend antenatal services, the coverage gap salt iodization exists to close, and oral iodine is not the delivery route used in mass programmes. Option d is a repeated injection campaign that reaches children after the critical neurodevelopmental window has already passed and leaves household salt unfortified.",
    strategy: "Public health nutrition: Universal Salt Iodization is the gold-standard population intervention preventing endemic goiter, cretinism, and cognitive deficits.",
    difficulty: "easy",
    tags: ["nutrition", "public-health", "universal-salt-iodization", "iodine-deficiency", "cretinism"],
    isFree: true,
  },
];
