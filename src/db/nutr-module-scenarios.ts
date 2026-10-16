import type { AuthoredQuestion } from "./authored-bank";

export const NUTR_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-NUTR-001",
    categorySlug: "fundamentals",
    stem: "A nurse is calculating the total daily caloric intake for a client whose prescribed nutritional meal plan provides 250 g of carbohydrates, 80 g of protein, and 50 g of fat. What is the total energy content provided by this diet?",
    choices: [
      {
        id: "a",
        text: "1,770 kcal (Carbohydrates: 250 x 4 = 1,000 kcal; Protein: 80 x 4 = 320 kcal; Fat: 50 x 9 = 450 kcal; Total = 1,770 kcal)",
      },
      {
        id: "b",
        text: "3,420 kcal (all macronutrients provide 9 kcal per gram)",
      },
      {
        id: "c",
        text: "1,520 kcal (all macronutrients provide 4 kcal per gram)",
      },
      {
        id: "d",
        text: "850 kcal (only carbohydrates yield measurable energy)",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Nutrient energy calculations are based on Atwater physiological fuel values: Carbohydrates yield 4 kcal/g, Proteins yield 4 kcal/g, Fats (lipids) yield 9 kcal/g, and Alcohol yields 7 kcal/g. Calculating for this meal plan: Carbohydrates = 250 g x 4 kcal/g = 1,000 kcal; Protein = 80 g x 4 kcal/g = 320 kcal; Fat = 50 g x 9 kcal/g = 450 kcal. Sum of energy: 1,000 + 320 + 450 = 1,770 kcal.",
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
        text: "Take iron supplements with a source of ascorbic acid (vitamin C, such as orange juice or baobab pulp), and avoid consuming black tea, coffee, milk, or antacids within 2 hours of iron intake",
      },
      {
        id: "b",
        text: "Take iron tablets immediately following a large cup of strong, tannic black tea",
      },
      {
        id: "c",
        text: "Swallow iron tablets with a high-calcium dairy milkshake to protect gastric mucosa",
      },
      {
        id: "d",
        text: "Crush the iron tablets and mix them thoroughly with bran cereal rich in phytates",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Non-heme iron (plant sources and oral iron supplements) exists in the insoluble ferric (Fe3+) state. Ascorbic acid (vitamin C) reduces ferric iron to the soluble, easily absorbed ferrous (Fe2+) state and prevents formation of unabsorbable complexes, significantly enhancing intestinal absorption. Conversely, polyphenols and tannins (found in tea, coffee, cocoa), phytates (in unrefined bran, whole grains), calcium (in dairy products), and antacids bind iron and inhibit absorption by up to 60–80%. The nurse must teach the client to space tea, coffee, and dairy at least 2 hours away from iron doses.",
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
        text: "Angular cheilitis (erythematous fissures and cracking at the corners of the mouth) and atrophic glossitis (smooth, swollen, beefy red tongue)",
      },
      {
        id: "b",
        text: "Bilateral enlarged parotid glands",
      },
      {
        id: "c",
        text: "Koilonychia with spoon-shaped nails caused by excess vitamin C",
      },
      {
        id: "d",
        text: "Severe dental caries caused exclusively by iodine deficiency",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The clinical ('C') component of the ABCD nutritional assessment evaluates physical signs of nutrient deficiency on mucosal surfaces, skin, hair, and nails. Angular cheilitis (stomatitis with fissuring and maceration at labial commissures) and glossitis (inflammation, erythema, and papillary atrophy of the tongue) are classic physical indicators of riboflavin (vitamin B2), pyridoxine (vitamin B6), iron, or folate/B12 deficiencies. Koilonychia (spoon nails) reflects chronic severe iron deficiency, not vitamin C excess.",
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
        text: "Classify as Severe Acute Malnutrition (SAM); immediately perform an appetite test with Ready-to-Use Therapeutic Food (RUTF), check for bilateral pitting edema and medical danger signs, and enroll into outpatient or inpatient therapeutic care",
      },
      {
        id: "b",
        text: "Reassure the mother that a MUAC of 11.2 cm is healthy and robust for a toddler",
      },
      {
        id: "c",
        text: "Advise the mother to feed only clear boiled water for 3 days and return in 6 months",
      },
      {
        id: "d",
        text: "Classify as Moderate Acute Malnutrition and discharge with a single deworming tablet",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "MUAC is a rapid, validated, age-independent screening tool for acute wasting in children aged 6 to 59 months: (1) Red (< 11.5 cm) = Severe Acute Malnutrition (SAM), carrying a 9- to 11-fold increased risk of mortality; (2) Yellow (11.5 to 12.4 cm) = Moderate Acute Malnutrition (MAM); (3) Green (>= 12.5 cm) = Normal nutritional status. A child with a MUAC of 11.2 cm has SAM. Management requires: assessment for bilateral pitting edema, checking for medical complications (fever, hypothermia, severe anemia, hypoglycemia, respiratory distress), conducting an RUTF appetite test, and admitting to Inpatient Stabilization (if complications present or failed appetite test) or Outpatient Therapeutic Program (OTP).",
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
        text: "Prealbumin has a much shorter biological half-life (2 to 3 days vs 20 days for albumin), allowing it to reflect rapid, real-time changes in visceral protein synthesis and nutritional replenishment",
      },
      {
        id: "b",
        text: "Serum albumin is completely unaffected by systemic inflammation, sepsis, or fluid resuscitation",
      },
      {
        id: "c",
        text: "Prealbumin is only found in bone marrow and never circulates in peripheral blood",
      },
      {
        id: "d",
        text: "Albumin levels double every 12 hours in response to dietary amino acid intake",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Serum prealbumin (transthyretin) has a short circulating half-life of 2–3 days and a small total body pool, making it highly sensitive to acute changes in protein-calorie intake; levels rise rapidly within 48–72 hours of adequate nutritional support. In contrast, albumin has a long half-life (approximately 20 days) and a large extravascular reserve, making it a poor indicator of acute nutritional change. Furthermore, albumin is a negative acute-phase reactant whose hepatic synthesis is suppressed by cytokines during inflammation, infection, trauma, and liver disease, and serum levels drop dramatically during fluid overload due to hemodilution.",
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
        text: "Folic acid 400 mcg (0.4 mg) daily initiated at least 1 month prior to conception and continued throughout the first trimester to prevent Neural Tube Defects (NTDs, such as spina bifida and anencephaly)",
      },
      {
        id: "b",
        text: "Folic acid 5 mg daily starting after the 20th week of gestation when the neural tube begins closing",
      },
      {
        id: "c",
        text: "Folic acid is only required in women over 45 years of age",
      },
      {
        id: "d",
        text: "Folic acid supplementation is replaced by drinking raw cow's milk daily",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The embryonic neural tube closes completely between day 21 and day 28 post-conception (approximately 3 to 4 weeks after fertilization), often before a woman realizes she is pregnant. Periconceptional folic acid supplementation (400 mcg or 0.4 mg daily for average-risk women) started at least 1 month prior to conception and continued through the 12th week of gestation reduces the incidence of neural tube defects (spina bifida, anencephaly, encephalocele) by up to 70%. High-risk women (history of previous NTD, maternal diabetes, obesity, sickle cell, or taking antiepileptic drugs) require a higher dose of 4–5 mg daily.",
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
        text: "Uphold exclusive breastfeeding for the first 6 months of life; breast milk contains over 87% water and provides all hydration, nutrients, and immune antibodies needed even in hot climates, whereas supplementary water and porridge introduce diarrhoea and malnutrition",
      },
      {
        id: "b",
        text: "Agree with the grandmother and advise adding sugar water between breastfeeding sessions",
      },
      {
        id: "c",
        text: "Stop breastfeeding immediately and switch to commercial whole cow's milk",
      },
      {
        id: "d",
        text: "Start solid meat stews immediately to accelerate muscular growth",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "WHO and UNICEF recommend Exclusive Breastfeeding (EBF) for the first 6 months of life (no other liquids or solids, not even water, except for vitamins, mineral supplements, or oral rehydration salts/medicines). Breast milk is 87–88% water with low osmolarity, satisfying all infant hydration requirements even in arid tropical climates. Giving water, teas, or thin porridges fills the infant's small stomach, decreases breast suckling (lowering maternal prolactin and milk supply), and introduces waterborne pathogens causing diarrhoeal diseases, the leading cause of infant mortality in low-resource settings.",
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
        text: "Atrophic gastritis with age-related hypochlorhydria, leading to reduced gastric acid and pepsin secretion needed to cleave protein-bound vitamin B12, often compounded by diminished intrinsic factor synthesis",
      },
      {
        id: "b",
        text: "Excessive gastric hyperacidity that destroys cyanocobalamin molecules before entering the duodenum",
      },
      {
        id: "c",
        text: "Accelerated small intestinal transit time causing instantaneous diarrhea",
      },
      {
        id: "d",
        text: "Complete loss of pancreatic amylase secretion",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Age-related atrophic gastritis affects 10–30% of older adults, leading to loss of gastric parietal cells, hypochlorhydria (decreased hydrochloric acid), and diminished pepsin secretion. Dietary vitamin B12 is bound to animal proteins; gastric acid and pepsin are mandatory to cleave B12 from food proteins so it can bind to haptocorrin and subsequently to intrinsic factor for terminal ileal absorption. When gastric acid is low, protein-bound B12 malabsorption develops despite adequate dietary intake. Older adults frequently require crystalline B12 supplements (which do not require acid cleavage) or parenteral B12 injections.",
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
        text: "Fill 1/2 of the plate with non-starchy vegetables (e.g., gboma, spinach, cabbage, tomatoes), 1/4 with lean protein (fish, skinless poultry, eggs, beans), and 1/4 with complex quality carbohydrates (brown rice, boiled yam, plantain)",
      },
      {
        id: "b",
        text: "Fill 3/4 of the plate with polished white rice and cassava dough, and 1/4 with fried meat",
      },
      {
        id: "c",
        text: "Fill the entire plate exclusively with tropical fruit salads dressed in honey",
      },
      {
        id: "d",
        text: "Eliminate all food groups except pure vegetable cooking oil",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The Diabetes Plate Method is a visual, practical tool for portion control and carbohydrate consistency: (1) Half the plate (50%) consists of non-starchy vegetables (greens, tomatoes, okra, cabbage, peppers) which are rich in fiber, micronutrients, and water with minimal impact on blood glucose; (2) One quarter (25%) consists of lean protein sources (fish, chicken without skin, legumes, eggs); (3) One quarter (25%) consists of complex, high-fiber, low-glycemic carbohydrates (unrefined grains, brown rice, yam, plantain, whole wheat). This structure prevents postprandial glycemic spikes and promotes satiety.",
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
        text: "High in potassium, calcium, magnesium, and dietary fiber from fruits, vegetables, and low-fat dairy; low in saturated fats and sodium (limited to less than 2,300 mg/day, with further reduction to 1,500 mg/day yielding greater BP lowering)",
      },
      {
        id: "b",
        text: "Extremely high in sodium chloride (minimum 8,000 mg/day) and low in potassium",
      },
      {
        id: "c",
        text: "Strictly carnivorous with high intake of processed smoked meats and trans-fatty pastries",
      },
      {
        id: "d",
        text: "A zero-calorie liquid fast lasting 90 consecutive days",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The DASH diet is an evidence-based nutritional intervention that lowers systolic blood pressure by 8–14 mmHg. It emphasizes: (1) rich intake of fruits and vegetables (4–5 servings of each daily); (2) low-fat dairy products (providing calcium); (3) whole grains, poultry, fish, and nuts (providing magnesium and potassium); and (4) marked reduction in sodium, red meats, sweets, and saturated fats. Potassium, calcium, and magnesium promote vascular smooth muscle relaxation and urinary sodium excretion. Restricting sodium to < 2,300 mg/day (or <= 1,500 mg/day in hypertensive individuals) provides additive blood pressure lowering.",
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
        text: "Moderate dietary protein restriction (0.6 to 0.8 g/kg/day), restrict dietary potassium (limit plantains, bananas, oranges, tomatoes), restrict dietary phosphorus (limit dairy, colas, nuts), and limit sodium to less than 2 g/day",
      },
      {
        id: "b",
        text: "High-protein diet (3.0 g/kg/day) with massive ingestion of potassium chloride salt substitutes",
      },
      {
        id: "c",
        text: "Unrestricted phosphate intake with high-potassium energy drinks",
      },
      {
        id: "d",
        text: "Complete elimination of all dietary carbohydrates and water",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "In advanced pre-dialysis CKD (Stage 4–5): (1) Protein is controlled to 0.6–0.8 g/kg/day to decrease nitrogenous waste production (blood urea nitrogen) and slow renal functional decline (once dialysis begins, protein is increased to 1.2 g/kg to replace dialysate amino acid loss); (2) Potassium restriction (< 2–3 g/day) is essential because failing nephrons cannot excrete potassium, risking fatal cardiac arrhythmias; (3) Phosphorus restriction (< 800–1,000 mg/day) prevents hyperphosphatemia, secondary hyperparathyroidism, and vascular calcification; and (4) Sodium restriction (< 2 g/day) controls fluid retention and hypertension.",
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
        text: "Eliminate Wheat, Rye, Barley, and contaminated Oats (the 'BROW' grains); substitute with naturally gluten-free staples such as rice, maize (corn), cassava, yam, plantain, millet, and sorghum",
      },
      {
        id: "b",
        text: "Eliminate all white rice, yam, and plantain; eat only whole wheat bread and barley soup",
      },
      {
        id: "c",
        text: "Gluten is only present in animal red meat; all grains are completely safe",
      },
      {
        id: "d",
        text: "Eliminate all vegetables, fruits, and dietary water permanently",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Celiac disease is an immune-mediated enteropathy triggered by ingestion of gluten storage proteins (gliadin in wheat, secalin in rye, hordein in barley) in genetically susceptible individuals, causing immune-mediated mucosal inflammation, crypt hyperplasia, and villous atrophy in the small intestine. The sole effective treatment is strict, lifelong elimination of all gluten-containing grains: Barley, Rye, Oats (unless certified gluten-free), and Wheat (the 'BROW' mnemonic). Safe naturally gluten-free alternatives include: rice, maize, cassava, yams, plantains, potatoes, soy, millet, sorghum, arrowroot, and buckwheat.",
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
        text: "Kwashiorkor (edematous severe acute malnutrition characterized by severe protein deficiency, hypoalbuminaemic third-spacing, and oxidative stress)",
      },
      {
        id: "b",
        text: "Marasmus (non-edematous severe acute malnutrition with extreme wasting of muscle and fat)",
      },
      {
        id: "c",
        text: "Isolated primary vitamin D toxicity",
      },
      {
        id: "d",
        text: "Congenital hypothyroidism with cretinism",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Kwashiorkor is edematous Severe Acute Malnutrition (SAM) caused by severe dietary protein deficiency relative to energy intake (often occurring when a toddler is weaned abruptly from protein-rich breast milk to a high-carbohydrate starch gruel). Key diagnostic hallmarks include: (1) bilateral pitting nutritional edema (starting in feet/ankles and progressing upwards); (2) 'flaky-paint' / enamel dermatosis (desquamating pigmented skin); (3) sparse, hypopigmented hair ('flag sign'); (4) fatty liver (hepatomegaly) due to impaired apolipoprotein synthesis; and (5) profound apathy and misery. Marasmus, in contrast, presents with severe somatic wasting ('skin and bones'), no edema, and an alert, ravenous child.",
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
        text: "Refeeding syndrome; carbohydrate feeding stimulates insulin secretion, which drives phosphate, potassium, and magnesium into cells for glycolysis and ATP synthesis, causing precipitous extracellular depletion and cardiac failure",
      },
      {
        id: "b",
        text: "Acute hyperosmolar hyperglycemic state resulting from renal glucosuria",
      },
      {
        id: "c",
        text: "Hepatic encephalopathy caused by excess branched-chain amino acids",
      },
      {
        id: "d",
        text: "Hypovolaemic shock secondary to excessive sodium diuresis",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Refeeding syndrome is a potentially fatal metabolic complication occurring when malnourished, starved individuals are refed too rapidly. During prolonged starvation, the body shifts from carbohydrate to fat/ketone metabolism, and total-body electrolyte stores (especially phosphorus, potassium, and magnesium) become profoundly depleted despite near-normal serum levels. Reintroducing carbohydrates triggers a massive surge of endogenous insulin. Insulin stimulates intracellular uptake of glucose, phosphate, potassium, and magnesium. Rapid intracellular phosphorylation of glucose rapidly consumes remaining extracellular phosphate, causing severe hypophosphatemia, impaired ATP production, diaphragmatic weakness, hemolytic anemia, and lethal arrhythmias.",
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
        text: "Vitamin A deficiency (Xerophthalmia); administer high-dose oral vitamin A (100,000 to 200,000 IU) immediately on Day 1, Day 2, and a third dose at least 2 weeks later",
      },
      {
        id: "b",
        text: "Vitamin D deficiency; administer oral calcitriol and isolate from sunlight",
      },
      {
        id: "c",
        text: "Vitamin K deficiency; administer intravenous phytomenadione daily for 6 months",
      },
      {
        id: "d",
        text: "Zinc excess; induce immediate gastric emesis with warm soapy water",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Vitamin A is essential for rhodopsin synthesis in retinal rod cells (for scotopic/night vision) and for maintaining epithelial integrity of ocular surfaces. Deficiency causes xerophthalmia: Stage XN (night blindness), Stage X1A (conjunctival xerosis), Stage X1B (Bitot's spots — keratinized epithelial debris on the bulbar conjunctiva), Stage X2 (corneal xerosis), and Stage X3 (corneal ulceration and keratomalacia, resulting in irreversible blindness). WHO treatment protocol for clinical xerophthalmia: 200,000 IU orally (> 12 months; 100,000 IU for infants 6–11 months) immediately on Day 1, Day 2, and Day 14.",
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
        text: "Pellagra caused by Niacin (Vitamin B3) or tryptophan deficiency; characterized by the classic 4 Ds: Dermatitis, Diarrhea, Dementia, and Death if untreated",
      },
      {
        id: "b",
        text: "Scurvy caused by Vitamin C deficiency; characterized by the 4 Ds: Dyspnea, Dysphagia, Dysuria, and Dislocation",
      },
      {
        id: "c",
        text: "Beriberi caused by Thiamine (Vitamin B1) deficiency; characterized by isolated hypertension",
      },
      {
        id: "d",
        text: "Rickets caused by Vitamin D deficiency; characterized by microcephalic skull closure",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Pellagra is caused by a severe deficiency of niacin (nicotinic acid / vitamin B3) or its precursor amino acid tryptophan. It is historically associated with diets based almost exclusively on un-nixtamalized maize or chronic alcoholism with poor dietary intake. The hallmark is the classic '4 Ds': (1) Photosensitive Dermatitis (symmetrical, well-demarcated hyperkeratotic rash with burning sensation, classically encircling the neck as 'Casal necklace'); (2) Diarrhea (frequent watery stools, malabsorption, glossitis); (3) Dementia (headache, insomnia, depression, confusion, hallucinations); and (4) Death if untreated. Prompt administration of oral nicotinamide cures the condition.",
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
        text: "Danger zone: 5 °C to 60 °C (41 °F to 140 °F); keep cold foods below 5 °C (in refrigeration) and hold hot cooked foods above 60 °C; cook foods thoroughly to a core temperature of at least 70 °C",
      },
      {
        id: "b",
        text: "Danger zone: 0 °C to 4 °C; keep all foods warm at room temperature for 72 hours",
      },
      {
        id: "c",
        text: "Danger zone: 80 °C to 100 °C; bacterial pathogens reproduce fastest in boiling water",
      },
      {
        id: "d",
        text: "There is no temperature danger zone; bacterial growth is unaffected by temperature",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Under the WHO 'Five Keys to Safer Food' (Keep clean; Separate raw and cooked; Cook thoroughly; Keep food at safe temperatures; Use safe water and raw materials): The Temperature Danger Zone is 5 °C to 60 °C (41 °F to 140 °F). Within this range, common foodborne bacteria (Salmonella, Staphylococcus aureus, E. coli, Bacillus cereus) divide rapidly, doubling every 20 minutes. Safe food handling rules dictate: (1) hot food must be held above 60 °C; (2) cold food must be chilled below 5 °C; (3) cooked foods must reach a core temperature of >= 70 °C for >= 2 minutes; and (4) perishable foods must never sit in the danger zone for > 2 hours.",
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
        text: "Aspirate gastric secretions and verify pH <= 5.5 using visual pH indicator paper (initial placement confirmed by radiographic X-ray), and maintain the head of the bed elevated at 30 to 45 degrees during and for at least 1 hour post-feeding",
      },
      {
        id: "b",
        text: "Inject 30 mL of air through the tube while listening with a stethoscope over the epigastrium (the 'whoosh' test) and place the patient completely flat in supine position",
      },
      {
        id: "c",
        text: "Place the distal tube end into a cup of water and watch for bubbles while lying prone",
      },
      {
        id: "d",
        text: "Begin the enteral feed at maximum speed immediately without checking placement",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Aspiration pneumonia is a major, preventable complication of enteral feeding. Bedside placement confirmation standards: Testing the pH of aspirated fluid (gastric aspirate is acidic, with a pH <= 5.5, whereas respiratory or intestinal secretions typically have a pH >= 6.0–7.0) is the validated bedside standard; abdominal X-ray is the gold standard for initial placement. The auscultatory 'whoosh test' (air insufflation) is unreliable and dangerous because air sounds transmit clearly from the pleural space, bronchus, or esophagus, leading to fatal pulmonary infusion. To minimize aspiration, the head of the bed must remain elevated 30–45 degrees during and for 1 hour after feeding.",
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
        text: "Infuse 10% Dextrose in Water (D10W) at the same infusion rate to prevent profound rebound hypoglycemia",
      },
      {
        id: "b",
        text: "Infuse 0.45% normal saline rapidly to induce hyperosmolar diuresis",
      },
      {
        id: "c",
        text: "Cap the central line with a heparin lock and give no intravenous fluids",
      },
      {
        id: "d",
        text: "Infuse concentrated potassium chloride directly into the catheter",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "TPN solutions contain high concentrations of hypertonic glucose (typically 15–25% dextrose), stimulating constant, high-level endogenous insulin secretion from pancreatic beta cells. If a TPN infusion is suddenly stopped or interrupted without tapering, circulating hyperinsulinaemia persists in the absence of exogenous glucose supply, causing rapid and severe rebound hypoglycemia (diaphoresis, tremors, altered mental status, seizures, and coma). If a TPN bag runs dry and the next bag is unavailable, the nurse must immediately hang 10% Dextrose in Water (D10W) at the existing TPN rate until the new TPN solution arrives.",
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
        text: "Universal Salt Iodization (mandatory fortification of all edible commercial salt with potassium iodate)",
      },
      {
        id: "b",
        text: "Encouraging the general public to consume raw unpasteurized goat milk",
      },
      {
        id: "c",
        text: "Replacing dietary salt with pure granulated cane sugar",
      },
      {
        id: "d",
        text: "Mandatory restriction of all dietary trace minerals across schools",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Iodine is an essential trace element required for thyroid hormone (thyroxine [T4] and triiodothyronine [T3]) synthesis. Iodine Deficiency Disorders (IDD) represent the single greatest cause of preventable brain damage and mental impairment worldwide. Manifestations include endemic goiter, hypothyroidism, impaired cognitive development in children, increased pregnancy loss, stillbirths, and congenital iodine deficiency syndrome (cretinism: severe irreversible cognitive impairment, deaf-mutism, spastic diplegia, and dwarfism). Universal Salt Iodization (USI) is recognized by WHO as the most equitable, cost-effective, and sustainable public health intervention to eliminate IDD globally.",
    strategy: "Public health nutrition: Universal Salt Iodization is the gold-standard population intervention preventing endemic goiter, cretinism, and cognitive deficits.",
    difficulty: "easy",
    tags: ["nutrition", "public-health", "universal-salt-iodization", "iodine-deficiency", "cretinism"],
    isFree: true,
  },
];
