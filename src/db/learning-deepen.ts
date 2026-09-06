import { db } from "@/db";
import { learningTopics } from "@/db/schema";
import { eq } from "drizzle-orm";

// ---------------------------------------------------------------------------
// Deep-content upgrade for the core Learning Library topics.
//
// Each entry REPLACES the overview/keyStructures/normalFindings/nursingNotes/
// redFlags of the existing topic (matched by slug) with substantially richer,
// original content: pathophysiology, assessment detail, medication pearls,
// and complication management written for the Ghana NMC exam.
//
// Applied idempotently via the admin endpoint — safe to run repeatedly.
// ---------------------------------------------------------------------------

type DeepTopic = {
  slug: string;
  overview: string;
  keyStructures: string[];
  normalFindings: string[];
  nursingNotes: string[];
  redFlags: string[];
  commonConditions: string[];
};

export const DEEP_TOPICS: DeepTopic[] = [
  {
    slug: "cardiovascular-system",
    overview:
      "The cardiovascular system is a closed loop: the right heart receives deoxygenated blood and pumps it through the lungs (pulmonary circulation); the left heart receives oxygenated blood and drives it through the body (systemic circulation). Cardiac output = heart rate × stroke volume, and stroke volume depends on three levers: PRELOAD (the volume stretching the ventricle before contraction), AFTERLOAD (the resistance the ventricle pumps against), and CONTRACTILITY (the force of the squeeze). Almost every cardiac drug and intervention works on one of these three levers — nitrates and diuretics drop preload, antihypertensives drop afterload, digoxin and dobutamine raise contractility.\n\nWhen the pump fails, the direction of backup tells the story. LEFT-sided heart failure backs blood into the LUNGS: dyspnea, orthopnea, crackles, frothy pink sputum in acute pulmonary edema. RIGHT-sided failure backs blood into the BODY: jugular vein distention, hepatomegaly, ascites, dependent peripheral edema, weight gain. Remember: Left = Lungs, Right = Rest of body. The most common cause of right-sided failure is left-sided failure.\n\nIn coronary artery disease, atherosclerotic plaque narrows the coronary arteries until demand outstrips supply. Stable angina is predictable, exertional, and relieved by rest and nitroglycerin within minutes. Unstable angina arrives at rest and lasts longer — an emergency. Myocardial infarction means muscle is dying: crushing substernal pain radiating to jaw/arm, diaphoresis, nausea; women, the elderly and diabetics often present atypically with fatigue, epigastric discomfort or silent infarcts. Time is muscle — the treatment window drives every priority.",
    keyStructures: [
      "Four chambers: right atrium and ventricle (pulmonary side), left atrium and ventricle (systemic side); the left ventricle is the thick-walled workhorse.",
      "Four valves keep flow one-way: tricuspid and pulmonic on the right, mitral (bicuspid) and aortic on the left — 'Try Pulling My Aorta' traces the flow order.",
      "Conduction pathway: SA node (60–100/min, the natural pacemaker) → AV node (40–60 intrinsic) → bundle of His → Purkinje fibers (20–40 intrinsic). Rhythm problems are located along this wiring.",
      "Coronary arteries fill during DIASTOLE — tachycardia shortens diastole and starves the heart muscle exactly when it works hardest.",
      "Arteries carry blood away from the heart; veins return it. Exceptions: pulmonary artery (deoxygenated) and pulmonary veins (oxygenated).",
      "Baroreceptors in the carotid sinus and aortic arch adjust heart rate and vessel tone to blood pressure changes within seconds.",
      "The renin-angiotensin-aldosterone system (RAAS) defends blood pressure by retaining sodium and water and constricting vessels — the target of ACE inhibitors ('-pril'), ARBs ('-sartan'), and spironolactone.",
      "ECG basics: P wave = atrial depolarization; QRS = ventricular depolarization (< 0.12 s); T wave = ventricular repolarization; PR interval 0.12–0.20 s. Rate on a 6-second strip = complexes × 10.",
    ],
    normalFindings: [
      "Heart rate 60–100/min, regular; blood pressure roughly 90/60–120/80 mmHg in healthy adults.",
      "S1 ('lub' — mitral/tricuspid closing) loudest at the apex; S2 ('dub' — aortic/pulmonic closing) loudest at the base; no murmurs, rubs, or gallops.",
      "Apical impulse (PMI) at the 5th intercostal space, midclavicular line — displacement suggests an enlarged heart.",
      "Capillary refill under 3 seconds; peripheral pulses 2+ and symmetrical; no peripheral edema.",
      "Jugular veins flat at 45 degrees head elevation.",
      "An S3 sound can be normal in children and young adults but signals fluid overload/heart failure in older adults; S4 suggests a stiff ventricle.",
    ],
    nursingNotes: [
      "Chest pain protocol: 12-lead ECG within 10 minutes, vital signs, oxygen only if SpO2 is low, aspirin (chewed) and nitroglycerin per order, IV access, continuous monitoring. Never 'wait and see' with chest pain.",
      "Nitroglycerin: up to 3 sublingual doses 5 minutes apart, seated or lying (it drops blood pressure). Burning under the tongue means the tablet is active. Headache is expected; hypotension is the danger — check BP before each dose. No nitrates within 24–48 h of erectile dysfunction drugs.",
      "Digoxin: take the APICAL pulse for a FULL minute before giving; hold and notify if < 60/min. Therapeutic level 0.5–2.0 ng/mL. Toxicity: anorexia, nausea, visual changes (halos), bradycardia and arrhythmias — and HYPOKALEMIA dramatically increases toxicity risk, so watch potassium whenever the client is also on a loop diuretic.",
      "Heart failure daily management: same-scale daily weights (report gain > 1 kg overnight or > 2.3 kg in a week), sodium restriction, fluid limits per order, and energy conservation. Weight is the most sensitive fluid gauge — 1 kg ≈ 1 liter.",
      "Loop diuretics (furosemide) waste potassium: teach potassium-rich foods, watch for weakness and cramps, and give IV furosemide slowly (fast pushes risk ototoxicity). Spironolactone SPARES potassium — no bananas advice there; watch for hyperkalemia instead.",
      "ACE inhibitors: a dry persistent cough is the classic side effect (switch to an ARB); angioedema is the emergency; first-dose hypotension means rise slowly. Monitor potassium — they raise it.",
      "Warfarin ↔ PT/INR (target INR 2–3; antidote vitamin K; steady vitamin K diet). Heparin ↔ aPTT 1.5–2× control (antidote protamine sulfate). Never confuse the pairs.",
      "Post-MI activity progresses gradually; teach clients to stop at chest pain, dyspnea, or palpitations. Cardiac rehab, smoking cessation, low-fat/low-sodium diet, and stress management are the core secondary-prevention package.",
      "After cardiac catheterization: keep the limb straight, check the puncture site AND distal pulses/warmth/color; numbness or a cool pale limb distal to the site = circulation problem = notify immediately. Push fluids to flush the dye; watch urine output (dye is nephrotoxic).",
      "Peripheral ARTERIAL disease: pain with walking relieved by rest (claudication), legs DOWN (dangling) improve flow, no heat pads on numb feet, walk-rest-walk builds collaterals. Peripheral VENOUS disease: aching relieved by ELEVATION, compression stockings, brown skin discoloration. Arterial down, venous up.",
      "In shock, the earliest clues are rising pulse and falling urine output — blood pressure is a LATE sign because compensation holds it up until it can't. Urine ≥ 30 mL/h means the kidneys (and therefore vital organs) are perfused.",
    ],
    redFlags: [
      "Crushing chest pain with diaphoresis and nausea — treat as MI until proven otherwise; do not let the client walk to the toilet.",
      "Sudden dyspnea with frothy pink sputum and crackles — acute pulmonary edema: sit upright, legs dependent, oxygen, call for orders (diuretic, morphine).",
      "New irregular rhythm with hypotension, dizziness, or syncope; any pulse below a pacemaker's set rate.",
      "A cold, pale, pulseless extremity — acute arterial occlusion; hours matter.",
      "Unilateral calf swelling, warmth and tenderness — possible DVT: do NOT massage the leg; anticoagulate per order and watch for sudden dyspnea (pulmonary embolism).",
      "Widening pulse pressure with bradycardia in a neuro client is Cushing's response (raised ICP) — not a cardiac problem; escalate immediately.",
      "Digoxin toxicity picture (nausea + visual halos + bradycardia), especially with low potassium.",
    ],
    commonConditions: ["Hypertension", "Heart failure", "Myocardial infarction", "Angina", "Atrial fibrillation", "DVT", "Peripheral artery disease", "Endocarditis", "Cardiogenic shock"],
  },
  {
    slug: "respiratory-system",
    overview:
      "The respiratory system moves oxygen in and carbon dioxide out through three linked processes: VENTILATION (air moving in and out — a mechanics problem), DIFFUSION (gas exchange across the alveolar-capillary membrane — a surface problem), and PERFUSION (blood flow past the alveoli — a circulation problem). A client can fail at any of the three, and the fix differs: ventilation failure needs airway and breathing support; diffusion failure (pneumonia, pulmonary edema, fibrosis) needs the membrane problem treated; perfusion failure (pulmonary embolism) needs the clot addressed.\n\nCO2 is the respiratory system's chemical messenger. Rising CO2 makes blood acidic (respiratory acidosis — think hypoventilation: opioids, COPD, splinted breathing after surgery); falling CO2 makes it alkalotic (respiratory alkalosis — think hyperventilation from anxiety or pain). Read every ABG in that light: pH tells the direction, CO2 tells whether the lungs caused it, HCO3 tells whether the kidneys did.\n\nIn COPD, chronically damaged airways trap air, the chest becomes barrel-shaped, and the client learns to exhale through pursed lips to splint airways open. The classic exam theme: give oxygen at LOW flow (1–2 L/min starting point) and titrate to the prescribed target — but never withhold oxygen from a hypoxic client; hypoxia kills before hypercapnia does. In asthma, reversible bronchospasm plus mucus narrows airways; the silent chest — wheezing that STOPS while distress continues — signals near-total obstruction, not improvement.",
    keyStructures: [
      "Upper airway (nose, pharynx, larynx) warms, humidifies, and filters; the epiglottis guards the trachea during swallowing.",
      "The trachea splits at the carina into right and left mainstem bronchi — the RIGHT is wider and straighter, which is why aspirated objects and misplaced ET tubes go right.",
      "Alveoli are the exchange surface (~300 million); surfactant keeps them open by lowering surface tension — premature babies lack it, causing respiratory distress syndrome.",
      "The diaphragm does most of the work of quiet breathing (phrenic nerve, C3–C5 — 'C3, 4, 5 keeps the diaphragm alive'; cord injuries above this level threaten breathing).",
      "The pleural space is a vacuum-sealed potential space; break the seal (pneumothorax) and the lung collapses — a chest tube with a water seal restores the negative pressure.",
      "Normal drive to breathe is CO2 level; in some chronic CO2 retainers the hypoxic drive matters more — the basis of careful oxygen titration in COPD.",
      "V/Q matching: ventilation and perfusion must meet. Positioning matters — 'good lung DOWN' in unilateral lung disease maximizes perfusion to the healthy lung.",
    ],
    normalFindings: [
      "Respiratory rate 12–20/min in adults, quiet and effortless; SpO2 95–100% (COPD clients may live at 88–92% per order).",
      "ABGs: pH 7.35–7.45, PaCO2 35–45, HCO3 22–26, PaO2 80–100.",
      "Vesicular breath sounds over lung fields; resonant percussion; symmetrical chest expansion; trachea midline.",
      "Ratio of anteroposterior to lateral chest diameter about 1:2 (barrel chest approaches 1:1).",
      "Sputum, if any, is clear to white and scant.",
    ],
    nursingNotes: [
      "The airway outranks everything (the A of ABC). A talking client has an airway; a snoring, gurgling, or silent-but-struggling client may not.",
      "Post-op atelectasis prevention: incentive spirometer (sustained maximal INHALATION — the client who blows into it needs re-teaching), splinted coughing, early ambulation, position changes every 2 hours. High abdominal and thoracic incisions carry the biggest risk.",
      "Chest tube care: water-seal chamber should show gentle rise-and-fall with breathing (tidaling); CONTINUOUS bubbling in the water seal = air leak. Suction chamber bubbles gently all the time — that's normal. Keep the system below the chest; never clamp during transport; if tubing disconnects, put the end in sterile water/saline as an emergency seal.",
      "Suctioning rules everywhere: pre-oxygenate, insert WITHOUT suction, suction on withdrawal only, keep passes to 10–15 seconds, and suction PRN — never on a fixed schedule (each pass costs oxygen and irritates mucosa).",
      "Bronchodilator sequencing: short-acting beta-agonist (salbutamol) FIRST to open the airways, then the corticosteroid inhaler — and rinse the mouth after steroids to prevent oral thrush. Tremor and tachycardia are expected beta-agonist effects.",
      "TB care: airborne precautions (N95, negative-pressure room), sputum specimens in the early morning, therapy runs months — the biggest threat is non-adherence. Rifampin turns urine/tears orange (harmless); isoniazid needs B6 and no alcohol (neuropathy and hepatitis); ethambutol threatens color vision.",
      "Pneumonia recovery reads in the sputum: thick and colored (yellow/green/rust) = active infection; thinning and whitening = improving. Push fluids to keep secretions mobile.",
      "After thoracentesis or bronchoscopy: no food or fluid until the GAG REFLEX returns (bronchoscopy), and watch for tachypnea, tracheal shift, and falling SpO2 (pneumothorax after thoracentesis).",
      "Tracheostomy: keep the same-size spare tube AND obturator at the bedside; fresh-tube dislodgement is an airway emergency — reinsert first, assess after.",
      "Pulmonary embolism presents suddenly: dyspnea, pleuritic chest pain, tachycardia, anxiety, sometimes hemoptysis — often in a client with a DVT, recent surgery, immobility, or long bone fracture (fat embolism adds confusion and petechiae). Sit upright, oxygen, call immediately.",
    ],
    redFlags: [
      "Silent chest in an asthmatic still in distress — obstruction so severe air no longer moves; prepare for rapid deterioration.",
      "Use of accessory muscles, tripod position, one-word answers — impending respiratory failure regardless of the numbers.",
      "Tracheal deviation with absent breath sounds on one side and hypotension — tension pneumothorax; needle decompression is coming, call now.",
      "Restlessness and rising heart rate are the EARLIEST hypoxia signs; cyanosis is late. Treat the restless tachycardic client, don't wait for blue.",
      "Frothy pink sputum = pulmonary edema, not a lung infection.",
      "Respiratory rate above 60 in a neonate at rest, or apnea beyond 15 seconds.",
      "Stridor after extubation, thyroidectomy, or a burn to the face/neck — the airway is narrowing; escalate immediately.",
    ],
    commonConditions: ["Pneumonia", "COPD", "Asthma", "Tuberculosis", "Pneumothorax", "Pulmonary embolism", "Respiratory failure", "Lung cancer", "Sleep apnea"],
  },
  {
    slug: "gastrointestinal-system",
    overview:
      "The GI tract is a muscular tube running mouth to anus, with the liver, gallbladder, and pancreas as its chemical support crew. Digestion is mechanical (chewing, churning, peristalsis) and chemical (acid, enzymes, bile). The stomach's acid bath begins protein digestion and kills microbes; the small intestine — duodenum, jejunum, ileum — does nearly all nutrient absorption; the colon reclaims water and forms stool. Anything that speeds transit (diarrhea) steals water and electrolytes; anything that slows it (opioids, immobility, low fiber) produces constipation.\n\nThe liver is the body's chemical factory: it makes albumin (oncotic pressure — low albumin means edema), clotting factors (liver failure means bleeding), detoxifies drugs and ammonia, stores glycogen, and produces bile. When it fails, the failures map to those jobs: ascites and edema (albumin), bruising and hemorrhage (clotting), encephalopathy (ammonia), jaundice (bilirubin). Portal hypertension backs blood into fragile esophageal varices — the GI bleed that kills fastest.\n\nPeptic ulcer disease is usually an infection (H. pylori) or an injury (NSAIDs) to the mucosal defense. Gastric ulcer pain classically worsens WITH food; duodenal ulcer pain arrives 2–4 hours AFTER meals and at night, relieved by eating. The complications to watch: bleeding (melena — black tarry stools; coffee-ground emesis), perforation (sudden rigid 'board-like' abdomen — emergency), and obstruction.",
    keyStructures: [
      "Route: mouth → esophagus → stomach → duodenum → jejunum → ileum → cecum → colon → rectum. The lower esophageal sphincter failing = reflux (GERD); the pyloric sphincter controls stomach emptying.",
      "Liver functions to memorize: albumin, clotting factors, detoxification (drugs, ammonia → urea), bile production, glucose storage. Every cirrhosis complication traces to one of these.",
      "Gallbladder stores and concentrates bile; fatty meals trigger its contraction — hence RUQ pain after fried food in cholecystitis, sometimes referred to the right shoulder.",
      "Pancreas is dual: exocrine enzymes (amylase, lipase — elevated in pancreatitis) and endocrine islets (insulin, glucagon). Pancreatitis is autodigestion: the enzymes turn on the gland itself.",
      "Peritoneum: perforation spills GI contents into it → peritonitis → rigid abdomen, rebound tenderness, absent bowel sounds, fever — a surgical emergency managed in semi-Fowler's to localize contamination.",
      "Bowel sounds: normal every 5–30 seconds; listen up to 5 full minutes before charting 'absent.' High-pitched tinkling above a silent zone suggests obstruction.",
      "Stool tells stories: black tarry (upper GI bleed or iron), bright red (lower GI or hemorrhoids), clay/pale (bile blocked), fatty floating (malabsorption).",
    ],
    normalFindings: [
      "Abdomen soft, non-tender, non-distended; bowel sounds active in all four quadrants.",
      "Assessment order for the abdomen is unique: inspect → AUSCULTATE → percuss → palpate (palpating first alters bowel sounds). Painful areas last.",
      "Brown, formed stool; individual patterns from three times daily to three times weekly are all normal.",
      "Key labs: albumin 3.5–5.0 g/dL, total bilirubin ~0.3–1.2 mg/dL, amylase/lipase within lab range, ammonia normal.",
    ],
    nursingNotes: [
      "NG tube essentials: verify placement before EVERY use (aspirate and check pH ≤ 5; x-ray is the gold standard initially) — auscultating air is outdated. Keep the head of the bed at 30–45° during and after feeds. The Salem sump's blue pigtail stays open to air, above stomach level, and never gets fluid.",
      "Tube feeding: check residuals per protocol and RETURN them (they're electrolytes and acid); flush before and after; supine position is the aspiration setup to intervene on.",
      "Post-op ileus watch: bowel sounds return in 24–72 h; ambulation is the best peristalsis medicine and the answer to gas pain. Nausea + vomiting + increasing distention days after abdominal surgery = paralytic ileus — report.",
      "GI bleed action: black tarry stools or coffee-ground emesis with abdominal pain gets the provider called first; anticipate IV access, labs (Hb, type & cross), NPO. Prokinetics (metoclopramide) are CONTRAINDICATED in active bleeding — never stimulate a bleeding gut.",
      "Cirrhosis care bundle: daily weight and girth (ascites), low sodium, monitor ammonia and mentation (asterixis — flapping tremor — is early encephalopathy), lactulose titrated to 2–3 soft stools/day, bleeding precautions, no alcohol and no unapproved drugs (the liver can't clear them).",
      "Hepatitis A spreads fecal-orally: handwashing, no food handling, protect the household. Hepatitis B/C spread by blood and body fluids. In ANY hepatitis: rest, small high-calorie meals, and zero alcohol or hepatotoxic drugs (watch paracetamol totals).",
      "Ostomy care: a healthy stoma is pink-red and moist; dusky/purple/black = ischemia, report immediately. Ileostomy output is liquid and constant (watch fluid-electrolytes, no enteric-coated meds); sigmoid colostomy stool is formed and may be regulated by irrigation — no more than once daily. Empty pouches at one-third full; change every 3–7 days or when leaking.",
      "Appendicitis: RLQ (McBurney's) pain, rebound tenderness, low fever, anorexia. NO heat pads, NO enemas, NO laxatives — all risk rupture. Sudden pain relief may mean perforation, not recovery.",
      "Pancreatitis: severe epigastric pain boring to the back, worse supine; keep NPO to rest the gland, manage pain, watch calcium (fat necrosis binds it) and glucose. Alcohol is the biggest modifiable cause.",
      "Low-residue diet after bowel surgery/flares: white rice and bread, tender baked meats, no whole grains, raw vegetables, or seeds. High-fiber for constipation and diverticulOSIS; seeds and nuts are the caution in diverticular disease.",
    ],
    redFlags: [
      "Rigid, board-like abdomen — perforation/peritonitis until proven otherwise; NPO, semi-Fowler's, call the surgeon.",
      "Vomiting blood or coffee-ground material; black tarry stools — active upper GI bleeding.",
      "Hematemesis in a known cirrhotic — think ruptured esophageal varices: massive-bleed protocol.",
      "Sudden relief of severe appendicitis pain followed by rising fever and distention — rupture.",
      "New confusion or day-night reversal in liver disease — early hepatic encephalopathy; check ammonia, review protein intake and lactulose.",
      "Dusky or black stoma; no ileostomy output with cramping (blockage).",
      "Bowel obstruction picture: colicky pain, distention, vomiting (may be feculent), no flatus or stool.",
    ],
    commonConditions: ["GERD", "Peptic ulcer disease", "Cirrhosis", "Hepatitis", "Appendicitis", "Cholecystitis", "Pancreatitis", "Bowel obstruction", "IBD", "Diverticulitis", "Colorectal cancer"],
  },
  {
    slug: "renal-urinary-system",
    overview:
      "The kidneys filter roughly 180 liters of plasma daily into about 1.5 liters of urine, and in doing so they regulate fluid volume, electrolytes, acid-base balance, and blood pressure, activate vitamin D, and secrete erythropoietin. That job list predicts every renal-failure complication: fluid overload and hypertension (volume), hyperkalemia (electrolytes), metabolic acidosis (acid-base), renal bone disease (vitamin D/calcium/phosphate), and anemia (erythropoietin).\n\nAcute kidney injury is classified by location of the insult: PRERENAL (the pump/pipes before the kidney — hypovolemia, shock, heart failure: the most common and most reversible cause), INTRARENAL (the kidney tissue itself — nephrotoxins like aminoglycosides, NSAIDs and contrast dye; crush-injury myoglobin; glomerulonephritis), and POSTRENAL (obstruction after the kidney — stones, enlarged prostate). Oliguria below 30 mL/h is the universal alarm threshold.\n\nChronic kidney disease progresses silently until most nephron function is lost. Management shifts by stage, but the nursing constants are: guard the potassium (the killer electrolyte), control fluid between dialysis runs (weigh before and after), protect the vascular access with your life, and restrict what the kidneys can no longer excrete — potassium, phosphate, sodium, and (per stage) protein.",
    keyStructures: [
      "Nephron = glomerulus (filter) + tubules (reabsorb and secrete). About a million per kidney; damaged nephrons don't regenerate.",
      "GFR is the master number of kidney function; creatinine is its everyday stand-in (0.6–1.2 mg/dL) — creatinine rises as function falls. BUN (10–20) also rises with dehydration and GI bleeding, so creatinine is the truer kidney marker.",
      "ADH (from the pituitary) reabsorbs water in the collecting ducts: too little = diabetes insipidus (liters of dilute urine, SG < 1.005); too much (SIADH) = concentrated scant urine and dilutional hyponatremia.",
      "Aldosterone retains sodium (and water) and excretes potassium — Addison's disease (no aldosterone) means hyperkalemia and salt-wasting; Cushing's/steroids mean sodium-water retention and hypokalemia.",
      "The bladder holds 300–500 mL comfortably; post-void residual over ~100 mL suggests retention.",
      "Urine output minimum: 30 mL/h — the perfusion gauge for the whole body.",
    ],
    normalFindings: [
      "Urine clear, pale-to-amber yellow, faintly aromatic; output roughly 1,500–2,000 mL/day on normal intake.",
      "Specific gravity 1.005–1.030: high = concentrated (dehydration, SIADH), fixed-low = dilute (DI, failing concentration ability).",
      "Urinalysis: no protein, glucose, ketones, blood, or bacteria. Protein in urine is an early kidney-damage flag (classic in preeclampsia and diabetic nephropathy).",
      "Voiding without pain, urgency, hesitancy, or nocturia; bladder non-palpable after voiding.",
    ],
    nursingNotes: [
      "Catheter-associated infections are largely preventable: sterile insertion, closed system maintained, bag below the bladder and off the floor, secure the tubing, daily meatal hygiene, and remove the catheter as soon as possible. Cloudy foul urine on a catheter = push fluids and notify; routine irrigation breaks the closed system.",
      "UTI teaching: fluids 2–3 L/day, void frequently and after intercourse, wipe front-to-back, complete the full antibiotic course. Phenazopyridine turns urine orange — warn, don't alarm. In the ELDERLY, new confusion is often the only UTI sign.",
      "Renal calculi: strain ALL urine (the stone's composition dictates the diet), aggressive fluids 3–4 L/day, manage the notoriously severe colicky flank-to-groin pain. Changing pain location means the stone is moving; sudden relief may mean passage.",
      "Hemodialysis access (fistula/graft) is sacred: no BP, no venipuncture, no tight sleeves on that arm — ever. Check the THRILL (feel) and BRUIT (hear) every shift; their absence means clotting — report immediately. Expect hypotension, fatigue, and cramping post-dialysis; hold dialyzable meds (and often antihypertensives) until after the run per order.",
      "Peritoneal dialysis: warm the dialysate (never microwave in some protocols — follow policy), strict asepsis at the catheter, and CLOUDY OUTFLOW = peritonitis until proven otherwise — the complication to report on sight. Slow outflow: reposition the client first, check for kinks, keep the bag below the abdomen.",
      "Hyperkalemia in renal failure: peaked T waves, weakness, arrhythmias. Emergency ladder: calcium gluconate protects the heart, insulin+glucose shifts K into cells, kayexalate/dialysis removes it. Chronic defense: low-potassium diet (limit oranges, bananas, tomatoes) and never IV potassium by push, anywhere, ever.",
      "Nephrotoxin vigilance: aminoglycosides (also ototoxic — tinnitus/hearing checks), NSAIDs, contrast dye (hydrate before and after; screen metformin and allergies first). In any renal client, check every drug's renal dosing.",
      "BPH and post-TURP: continuous bladder irrigation keeps clots from blocking the catheter — titrate to keep outflow light pink; bright red with clots = faster irrigation and notify; blocked outflow with bladder spasm = check patency first. Straining and heavy lifting stay banned for weeks.",
      "Incontinence types drive treatment: stress (leak with cough/sneeze — pelvic floor exercises), urge (overactive bladder — bladder training, scheduled voiding), overflow (retention dribble — check residuals), functional (can't reach the toilet — fix the environment).",
      "Bladder retraining begins with data: a fluid intake and voiding diary FIRST, then scheduled voids every 2 hours, stretching gradually to 3–4.",
    ],
    redFlags: [
      "Urine output below 30 mL/h — the kidney is whispering that perfusion is failing; investigate volume, pump, and obstruction.",
      "Absent thrill/bruit over a dialysis access — clotted access, report now.",
      "Cloudy peritoneal dialysis outflow, abdominal pain, fever — peritonitis.",
      "Hyperkalemia signs in a renal client: muscle weakness, paresthesia, bradycardia, peaked T waves.",
      "Anuria or new flank pain with a solitary kidney or transplant.",
      "Post-obstruction diuresis after catheterizing a distended bladder — massive output can crash the pressure; monitor closely.",
      "Periorbital edema and tea-colored urine 1–3 weeks after a strep skin/throat infection (post-streptococcal glomerulonephritis, especially in children).",
    ],
    commonConditions: ["UTI", "Acute kidney injury", "Chronic kidney disease", "Renal calculi", "BPH", "Glomerulonephritis", "Nephrotic syndrome", "Incontinence", "Bladder cancer"],
  },
  {
    slug: "nervous-system",
    overview:
      "The nervous system runs on one non-negotiable requirement: constant oxygen and glucose. The brain has no fuel reserves, which is why hypoxia and hypoglycemia both present as confusion — and why 'new confusion' is always a symptom to investigate, never a personality trait to accept. Level of consciousness is the earliest and most sensitive indicator of neurological change: a client sliding from alert → responds-to-voice → responds-to-pain is declaring an emergency in the clearest language the nervous system has.\n\nThe skull is a closed box holding brain, blood, and cerebrospinal fluid. When anything expands (bleeding, swelling, tumor), pressure rises — intracranial pressure (ICP). The care bundle follows the physics: head of bed 30°, head midline (kinked neck veins trap blood in the skull), minimal brief suctioning, no clustered stressful care, treat fever and seizures, avoid Valsalva. The late, ominous vital-sign signature is Cushing's triad: rising systolic pressure with widening pulse pressure, bradycardia, and irregular respirations.\n\nStroke splits into two opposite emergencies with identical faces: ISCHEMIC (a clot — the majority; thrombolytics may reverse it inside the time window) and HEMORRHAGIC (a bleed — thrombolytics would be fatal). That's why the emergency sequence is FAST recognition → immediate CT → then treatment. Deficits mirror the damaged side: right-brain stroke = left-body weakness, impulsivity, neglect of the left side; left-brain stroke = right-body weakness and language problems (aphasia). Damage on one side, deficits on the other.",
    keyStructures: [
      "CNS (brain, spinal cord) and PNS (everything else). The blood-brain barrier shields the CNS — and blocks many drugs.",
      "Lobes in one line each: frontal (judgment, movement, personality), parietal (sensation), temporal (hearing, memory, speech comprehension — Wernicke), occipital (vision). Broca's area (frontal) produces speech; damage = knows what to say, can't say it.",
      "Cerebellum = balance and coordination (Romberg test, finger-to-nose); brainstem = the vital centers for breathing and heart rate — pressure here kills.",
      "Glasgow Coma Scale 3–15 (eyes 4, verbal 5, motor 6): ≤ 8 classically means the airway is at risk. Trend matters more than any single score.",
      "Autonomic split: sympathetic (fight-or-flight — dilated pupils, fast heart, shunted blood) vs parasympathetic (rest-and-digest). Spinal injuries above T6 can fire autonomic dysreflexia: a full bladder triggers pounding headache, hypertension, sweating above the lesion — find and remove the trigger (bladder first, bowel second, skin third).",
      "Reflex arcs bypass the brain; testing them locates spinal levels. Babinski (toes fan up) is normal only under ~1–2 years — abnormal beyond that.",
      "PERRLA: pupils equal, round, reactive to light and accommodation. A newly blown (fixed, dilated) unilateral pupil = herniation pressure on cranial nerve III — emergency.",
    ],
    normalFindings: [
      "Alert and oriented to person, place, and time; speech clear; memory intact.",
      "Pupils equal (3–5 mm) and briskly reactive; extraocular movements full.",
      "Strength 5/5 and symmetrical; gait steady; sensation intact; reflexes 2+.",
      "In infants: anterior fontanel soft and flat (bulging = pressure; sunken = dehydration), age-appropriate reflexes that disappear on schedule (extrusion ~4 months, Moro 4–6 months, Babinski by ~12 months).",
    ],
    nursingNotes: [
      "Neuro checks are trend detection: LOC first and always, pupils, motor strength bilaterally, vitals. Report any decline immediately — 'a bit sleepier than an hour ago' is data, not reassurance.",
      "Seizure care: DURING — stay, protect from injury, time it, nothing in the mouth, no restraint; loosen tight clothing. AFTER — side-lying to protect the airway, suction ready, reorient, document onset, spread, duration, and post-ictal state. Status epilepticus (>5 min or back-to-back seizures) is an emergency: IV benzodiazepine per order.",
      "Phenytoin pearls: therapeutic 10–20 mcg/mL; gum hyperplasia (meticulous oral care), ataxia/nystagmus = toxicity; category D in pregnancy — report a missed period; never stop antiepileptics abruptly.",
      "Stroke positioning and swallow: NPO until a swallow screen passes; upright for meals, chin tuck, food to the STRONG side of the mouth; thickened liquids per assessment. Approach clients with neglect from their intact side, then teach scanning to the affected side.",
      "Aphasia communication: unhurried, short sentences, yes/no questions for expressive aphasia, gestures and picture boards; never pretend to understand. Frustration is part of the injury — patience is a clinical intervention.",
      "Spinal cord injury acute phase: immobilize, log-roll only, watch respiratory function with lesions near the diaphragm's nerve roots. Later: skin (no sensation = no warning), bladder/bowel programs, and autonomic dysreflexia vigilance above T6 — sit them up and hunt the trigger.",
      "Parkinson's: levodopa reduces tremor and rigidity to improve FUNCTION (it does not cure — evaluate by 'more ambulatory,' never 'tremor-free'); give time to move, fall-proof the home, thicken fluids late-stage, ROM to prevent contractures.",
      "Myasthenia gravis: anticholinesterase drugs ON TIME to the minute — the swallowing muscles depend on the previous dose; avoid heat, crowds/infection, and stress. Distinguish myasthenic crisis (too little drug) from cholinergic crisis (too much) — both weaken; the edrophonium response historically separates them.",
      "Meningitis: droplet isolation until 24 h of effective antibiotics; dark quiet room (seizure and stimulation control); fluids often restricted for cerebral edema; nuchal rigidity, Kernig's and Brudzinski's signs; petechial rash + fever = act immediately.",
      "Increased ICP never gets: routine suctioning, flat or head-flexed positioning, clustered care, Valsalva, or hypotonic IV fluids. It always gets: HOB 30°, midline head, calm environment, stool softeners, and seizure precautions.",
      "Bell's palsy priority is the EYE the lid can't close: artificial tears on schedule, ointment and patch at night — the cornea is the preventable casualty. Reassure: most recover.",
    ],
    redFlags: [
      "Any drop in level of consciousness — the earliest sign of neuro deterioration; escalate, don't observe.",
      "Sudden worst-ever headache (possible subarachnoid hemorrhage); new headache with fever and stiff neck (meningitis).",
      "Unilateral fixed dilated pupil; Cushing's triad (systolic up, pulse pressure widening, bradycardia, irregular breathing) — herniation territory.",
      "FAST positives: facial droop, arm drift, slurred speech — time the onset and move; the thrombolytic window is unforgiving.",
      "Clear fluid from nose or ears after head trauma (CSF leak — test for glucose/halo; no nose-blowing, no packing).",
      "Post-fracture confusion + petechiae + dyspnea = fat embolism, not 'just anxiety.'",
      "Pounding headache with sweating and hypertension in a cord injury above T6 — autonomic dysreflexia: sit up, check the catheter NOW.",
    ],
    commonConditions: ["Stroke (CVA)", "Seizure disorders", "Meningitis", "Head injury / raised ICP", "Spinal cord injury", "Parkinson's disease", "Multiple sclerosis", "Myasthenia gravis", "Bell's palsy", "Guillain-Barré"],
  },
  {
    slug: "musculoskeletal-system",
    overview:
      "Bones, joints, muscles, tendons and ligaments give the body structure, movement, mineral storage (99% of body calcium), and blood-cell production (marrow). Bone is living tissue in constant renovation: osteoblasts build, osteoclasts demolish. Weight-bearing activity is the signal that tells bone to build — which is why immobility and weightlessness thin bones, and why walking is a prescription in osteoporosis, not just advice.\n\nFracture healing needs alignment, immobilization, blood supply, and time — but the nurse's first job is protecting everything around the break. The neurovascular check (the 5–6 P's: Pain, Pallor, Pulselessness, Paresthesia, Paralysis, and Pressure) is the exam's favorite skill because it catches COMPARTMENT SYNDROME: swelling inside an unyielding fascial compartment or cast strangles muscle and nerve. The earliest, most reliable sign is pain out of proportion and unrelieved by analgesia — pulselessness is a late, limb-losing sign. Never elevate above the heart or ice a suspected compartment syndrome (both reduce arterial inflow); loosen constriction and call.\n\nTraction and casting have their own laws: weights hang FREE and are never lifted or removed without order; countertraction (usually the client's body, sometimes the tilted bed) keeps the pull effective; casts must dry supported on palms (not fingertips), and nothing — ever — goes down a cast to scratch.",
    keyStructures: [
      "Long-bone anatomy: the shaft (diaphysis) and the growth plates (epiphyseal plates) in children — fractures through growth plates threaten future growth.",
      "Synovial joints move; cartilage cushions; bursae reduce friction (bursitis = inflamed bursa).",
      "Fracture vocabulary: closed vs open/compound (bone through skin = infection risk, osteomyelitis watch), greenstick (children's incomplete bend-break), comminuted (fragments), spiral (twisting — in children consider non-accidental injury).",
      "Long-bone and pelvis fractures carry FAT EMBOLISM risk in the first 24–72 h: confusion and restlessness FIRST, then dyspnea, then the petechial rash across chest and axillae.",
      "Hip fracture pattern: the affected leg is shortened, ADDucted and EXTERNALLY rotated. Post-repair, dislocation precautions rule life: no hip flexion beyond 90°, no crossing legs, no internal rotation — abduction pillow between the knees.",
      "Calcium-vitamin D-parathyroid axis: PTH raids bone for calcium; hyperparathyroidism = 'stones, bones, groans, and moans.'",
      "Rheumatoid arthritis is systemic autoimmune (symmetrical small joints, morning stiffness > 1 hour, warm boggy joints, systemic fatigue); osteoarthritis is local wear-and-tear (asymmetric weight-bearing joints, pain worse WITH use, brief stiffness). The treatments differ accordingly.",
    ],
    normalFindings: [
      "Full range of motion without pain or crepitus; muscle strength 5/5 and symmetric.",
      "Straight spine without lateral curvature (screen adolescents bending forward for scoliosis).",
      "Neurovascular baseline distal to any injury: warm, pink, brisk capillary refill, palpable pulses, intact sensation and movement — always compare to the other limb.",
      "Serum calcium 9.0–10.5 mg/dL.",
    ],
    nursingNotes: [
      "Neurovascular checks distal to every cast, splint, and traction: color, warmth, capillary refill, pulses, sensation, movement — on a schedule, and always against the opposite limb. Pain unrelieved by prescribed analgesia is the alarm: assess, loosen, notify — never just re-medicate.",
      "Fresh cast care: hot spots or a foul odor signal infection beneath; 'hot and painful under the cast' hours after application = pressure — check circulation and reposition first, medicate second. Elevate a fresh casted limb (unless compartment syndrome is suspected) and never insert objects to scratch.",
      "Skin vs skeletal traction: Buck's (skin) has NO pins — assess the elastic bandages for tightness and the skin beneath; skeletal traction HAS pins — pin-site care per protocol and infection watch. Sliding down the bed defeats the pull: elevate the FOOT of the bed for countertraction, keep the leg aligned — never raise the knee gatch or pillow-prop the limb sideways.",
      "Crutch and cane rules: weight on HANDS, not axillae (radial nerve palsy); cane on the STRONG side (COAL — Cane Opposite Affected Leg); stairs 'good goes up, bad goes down'; nurse stands on the client's WEAK side slightly behind.",
      "Post-hip replacement transfers: raise HOB first (orthostatics), chair at 90° on the operative side of the workflow, caregiver on the AFFECTED side, pivot on the strong leg. Report sudden severe pain with a shortened, rotated leg — dislocation.",
      "Amputation care: phantom limb pain is REAL — acknowledge and treat it; activity reduces episodes. Stump elevation on a pillow is for the FIRST 24 hours only (contracture risk after); prone positioning daily stretches the hip flexors; shape the stump per protocol for prosthesis fitting.",
      "Osteoporosis prescription: weight-bearing exercise is the bone-builder; calcium and vitamin D supply the materials; fall-proof the home. Bisphosphonates: take on an empty stomach with a full glass of water and stay UPRIGHT 30 minutes (esophageal erosion).",
      "Osteomyelitis (often after open fractures): weeks of IV antibiotics, immobilize, and treat pain — adherence to the full course is the teaching hill to die on.",
      "RA management: balance rest and activity, heat for stiffness, cold for acute flares, fewer repetitions when inflammation is active, joint-protecting techniques and assistive devices. Never 'exercise through' severely inflamed joints. Methotrexate needs labs and contraception; NSAIDs need GI and renal watchfulness.",
      "Gout: acute attacks (often the great toe, exquisitely tender) get NSAIDs/colchicine and rest; prevention means allopurinol, fluids, and limiting purines (organ meats, some seafood, beer).",
    ],
    redFlags: [
      "The compartment syndrome cluster: escalating pain unrelieved by analgesia, tense swelling, pallor, paresthesia — pulses can persist until damage is irreversible. Loosen, position at heart level, call urgently.",
      "New confusion, tachycardia and dyspnea in the first days after a long-bone fracture — fat embolism; get gases and oxygen, escalate.",
      "Sudden severe pain + shortened, internally rotated leg after hip replacement — dislocation.",
      "Fever, increasing pain, foul drainage or odor at a fracture/pin/cast site — infection/osteomyelitis.",
      "Hot, swollen single joint with fever — septic arthritis until proven otherwise (do not just treat as gout).",
      "Calf pain/swelling in any immobilized orthopedic client — DVT; no massage.",
    ],
    commonConditions: ["Fractures", "Osteoporosis", "Osteoarthritis", "Rheumatoid arthritis", "Gout", "Osteomyelitis", "Hip replacement", "Amputation", "Compartment syndrome", "Scoliosis"],
  },
  {
    slug: "endocrine-system",
    overview:
      "The endocrine system governs by hormone: chemical messengers released into blood, acting on distant targets, controlled mostly by negative feedback (rising hormone shuts off its own production — like a thermostat). Exam questions live at the extremes: for every gland, know the too-much and too-little picture, and remember that treatment of one extreme can overshoot into the other.\n\nDiabetes mellitus dominates the specialty. Type 1 is absolute insulin deficiency (autoimmune, usually younger, ketosis-prone); Type 2 is insulin resistance (usually older, heavier, ketosis-rare). The acute emergencies are opposite: HYPOGLYCEMIA is fast and loud — cold, clammy, shaky, confused ('cold and clammy, need some candy') — treat immediately, glucose before investigations; conscious clients get 15 g fast carbohydrate, unconscious get glucagon/IV dextrose, never oral. HYPERGLYCEMIA is slower — hot dry skin, polyuria, polydipsia; in Type 1 it can become DKA (ketones, Kussmaul breathing, fruity breath, dehydration — treat with fluids first, then insulin, and watch potassium crash as insulin drives K into cells); in older Type 2 it can become HHS/HHNK — profound dehydration and very high glucose WITHOUT ketones.\n\nThyroid sets the metabolic speed: HYPERthyroid (Graves') runs hot — weight loss, tachycardia, heat intolerance, exophthalmos (protect those eyes), tremor; treatment overshoot or thyroidectomy can flip it. HYPOthyroid runs cold — fatigue, weight gain, cold intolerance, constipation, coarse skin; levothyroxine wakes the metabolism (success = pulse and energy rising toward normal; nervousness and insomnia = overdose). After THYROIDECTOMY the exam's three complications: airway (swelling — trach set at the bedside), hemorrhage (check behind the neck), and TETANY from accidental parathyroid removal (Trousseau's/Chvostek's signs — calcium gluconate ready).",
    keyStructures: [
      "Hypothalamus → pituitary → target gland axes: the pituitary is 'master gland,' but it takes orders from the hypothalamus.",
      "Posterior pituitary releases ADH and oxytocin. ADH failure = diabetes insipidus (liters of dilute urine, specific gravity < 1.005 — a classic after cranial surgery near the pituitary); ADH excess = SIADH (retained water, concentrated urine, dilutional hyponatremia, seizure risk).",
      "Pancreatic islets: beta cells make insulin (glucose INTO cells), alpha cells make glucagon (glucose OUT of storage).",
      "Adrenal cortex steroids: cortisol (stress, glucose-raising, immune-suppressing) and aldosterone (save sodium/water, dump potassium). Addison's = deficiency (bronze skin, hypotension, hyponatremia, HYPERkalemia; crisis under stress); Cushing's = excess (moon face, buffalo hump, central obesity, thin skin, hyperglycemia, hypertension, infection-prone, HYPOkalemia).",
      "Adrenal medulla: catecholamines — pheochromocytoma = paroxysmal severe hypertension, headache, sweating, palpitations.",
      "Parathyroids and calcium: PTH raises serum calcium. Hypoparathyroid = low calcium = TETANY (perioral tingling, Trousseau's cuff spasm, Chvostek's facial twitch, laryngospasm risk); hyperparathyroid = 'stones, bones, groans, moans' + pathological fractures.",
      "Insulin timing table to memorize: rapid (onset ~15 min — food must be THERE), regular (30–60 min; the only IV insulin), NPH (intermediate; the cloudy one), glargine (long, no true peak, never mixed). Mixing: air into cloudy, air into clear, draw CLEAR then CLOUDY — and match each insulin to ITS ordered units.",
    ],
    normalFindings: [
      "Fasting glucose 70–110 mg/dL (know your lab's range); HbA1c reflecting ~3 months of control, target commonly < 6.5–7%.",
      "TSH/T3/T4 within range; no palpable thyroid nodules; thyroid exam done with a sip of water (the gland rises on swallowing).",
      "Serum calcium 9.0–10.5 mg/dL; sodium 135–145; potassium 3.5–5.0.",
      "Stable weight, energy, temperature tolerance, and menstrual patterns — the everyday face of endocrine balance.",
    ],
    nursingNotes: [
      "Hypoglycemia drill: check, treat with 15 g fast carbohydrate, recheck in 15 minutes, follow with protein/complex carbohydrate once recovered. Signs 30–90 minutes after regular insulin injection = suspect hypoglycemia and act on the clinical picture; treatment beats waiting for the lab. Beta-blockers can MASK the warning signs — teach those clients to rely on monitoring.",
      "Sick-day rules for diabetics: NEVER stop insulin (illness raises glucose even without food), check glucose (and ketones in Type 1) frequently, push fluids hard, use liquid carbohydrates when solids won't stay down. Vomiting + diabetes = dehydration on a countdown.",
      "Insulin administration: rotate within one region rather than region-hopping daily; room-temperature insulin hurts less; NEVER shake (roll NPH); the abdomen absorbs fastest. Exercise lowers glucose — plan snacks around activity peaks.",
      "Foot care is amputation prevention: inspect DAILY (mirror for soles), never barefoot, well-fitting shoes, trim nails straight across, no self-surgery on corns, report any wound that isn't healing. Neuropathy hides injuries; vascular disease slows healing — the combination is the danger.",
      "DKA management order: isotonic fluids FIRST (they're liters down), regular insulin infusion second, and potassium replacement as insulin pushes K into cells — a normal-looking K on arrival can crash within hours. Kussmaul respirations are the body's compensation; don't 'treat' the breathing, treat the acidosis.",
      "Steroid therapy rules: take WITH food in the MORNING (mirrors cortisol rhythm, protects sleep and stomach); NEVER stop abruptly (adrenal crisis); dose rises under stress/illness per order; watch glucose, blood pressure, infection signs (masked!), mood, and long-term bone/skin changes. Addison's clients carry the same rules for life plus an emergency injection plan.",
      "Post-thyroidectomy station: hourly respiratory checks, trach set/oxygen/suction and calcium gluconate at the bedside, semi-Fowler's with head supported, check dressings AND behind the neck, listen for voice changes (recurrent laryngeal nerve), and test for tingling/twitching (calcium).",
      "Levothyroxine: morning on an empty stomach, same time daily, lifelong; report chest pain/palpitations (overdose accelerates the heart — dangerous with coronary disease); effects build over weeks — persistent fatigue at day four is patience, nervousness and insomnia is overdose.",
      "Hyperthyroid support pending definitive treatment: high-calorie nutrition, cool low-stimulation environment, eye protection for exophthalmos (drops, elevate HOB, sunglasses), no caffeine/stimulants. Thyroid storm = fever + extreme tachycardia + agitation after stress/surgery — emergency.",
      "SIADH vs DI at the bedside: SIADH = scant concentrated urine, falling sodium, seizure watch, fluid RESTRICTION; DI = flooding dilute urine, rising sodium, dehydration watch, fluids + desmopressin. Post-craniotomy output of 4 L/day with low specific gravity = DI — report.",
      "Pheochromocytoma: no palpating the abdomen (can trigger a crisis), no stimulants; control pressure before surgery.",
    ],
    redFlags: [
      "Unconscious or seizing diabetic — treat as hypoglycemia (IV dextrose/glucagon) when in doubt; glucose kills faster when absent than when excessive.",
      "Fruity breath, deep sighing respirations, dehydration in a Type 1 — DKA. Sunken eyes + fruity breath at clinic triage = see FIRST.",
      "Falling insulin requirements in the third trimester of a diabetic pregnancy — placental failure, not improvement.",
      "Tetany signs after thyroid/neck surgery: perioral tingling, Trousseau's, Chvostek's — calcium emergency.",
      "Addisonian crisis: hypotension, vomiting, hypoglycemia in a steroid-dependent client who stopped medication or hit sudden stress.",
      "Thyroid storm: hyperpyrexia, HR through the roof, delirium — post-op or post-stress in a hyperthyroid client.",
      "A steroid/Cushing's client 'not worried about infections' — cortisol masks the classic signs; low-grade changes ARE the warning.",
    ],
    commonConditions: ["Diabetes mellitus", "DKA", "HHS/HHNK", "Hypoglycemia", "Hyperthyroidism", "Hypothyroidism", "Cushing's syndrome", "Addison's disease", "SIADH", "Diabetes insipidus", "Pheochromocytoma"],
  },
  {
    slug: "integumentary-system",
    overview:
      "Skin is the body's largest organ and its first defense: barrier against microbes and water loss, thermostat (vessels and sweat), sensor (touch, pain, temperature — the warning system), vitamin D factory, and identity. Every break in it — surgical, traumatic, pressure-made or burn-made — is an open door for infection, and most skin nursing is really infection prevention plus perfusion protection.\n\nPressure injuries are the signature preventable harm: unrelieved pressure over bony prominences (sacrum, heels, trochanters, occiput) chokes capillary flow; shear and moisture accelerate the damage. Staging in one line each: Stage 1 = intact skin, non-blanchable redness; Stage 2 = partial-thickness open (blister/abrasion); Stage 3 = full-thickness into fat; Stage 4 = down to muscle/bone; unstageable = base hidden by slough/eschar. Prevention is the whole job: reposition every 2 hours (the mattress buys time, never replaces turning), lift-don't-drag (shear), keep skin dry and nourished (protein!), and inspect at every turn.\n\nBurns are skin loss at scale, and the timeline is everything. First 24–48 hours: massive fluid SHIFTS out of vessels — hypovolemia, hemoconcentration, HYPERkalemia (cells release K); resuscitate by formula and judge success by urine output. Around day 3: fluid returns to circulation — diuresis and HYPOkalemia (weakness and lethargy are its face). Throughout: airway first if the face/neck/enclosed-space history suggests inhalation (hoarseness, singed nasal hair, soot = airway before everything), infection control forever after, then the long war of nutrition, positioning against contractures, and pain management (burn debridement is among the most painful procedures in medicine — plan time AND emotional support).",
    keyStructures: [
      "Layers: epidermis (barrier, regenerates), dermis (vessels, nerves, glands, hair — the living machinery), subcutaneous fat (insulation, cushioning).",
      "Burn depth in nursing terms: superficial (epidermis — red, painful, no blister: sunburn), partial-thickness (into dermis — blistered, weeping, VERY painful), full-thickness (all layers — white/charred/leathery and PAINLESS in the center because nerve endings are gone; edges still hurt).",
      "Extent estimation: Rule of Nines for adults (head 9, each arm 9, each leg 18, trunk front 18, back 18, perineum 1); children carry proportionally bigger heads.",
      "Wound healing phases: hemostasis → inflammation (redness/warmth for days is NORMAL early) → proliferation (granulation: beefy red = healthy) → maturation. Protein, vitamin C, and zinc are the building materials; glucose control is the enabler.",
      "Healing intentions: primary (approximated surgical edges), secondary (open wound fills from the base — pressure ulcers), tertiary (delayed closure).",
      "Melanoma warning: ABCDE — Asymmetry, Border irregularity, Color variation, Diameter > 6 mm, Evolving.",
    ],
    normalFindings: [
      "Skin warm, dry, intact; turgor elastic (tenting = dehydration, but less reliable in the elderly); capillary refill < 3 seconds.",
      "Wound edges approximated, without spreading redness, warmth, purulence, or odor; scant serous or serosanguineous drainage early post-op is expected.",
      "Elderly skin is normally thinner, drier, less elastic, slower to heal — a reason for gentler handling, not a disease.",
      "Newborns: acrocyanosis in the first hours and drying cord care (clean, dry, exposed, diaper folded below) are normal-care facts.",
    ],
    nursingNotes: [
      "Pressure injury prevention bundle: risk-score on admission (Braden), reposition q2h with a written schedule, heels FLOATED off the bed, lift sheets not dragging, moisture managed at once (barrier creams for incontinence), nutrition pushed (protein), and skin inspected at every reposition. Document what you see precisely — measurements, base color, drainage, edges.",
      "Never massage reddened bony prominences (it worsens deep damage), never doughnut cushions (they ring-pressure the tissue).",
      "Wet-to-dry debridement logic: pack moist, let it DRY, remove DRY — the removal is the debridement; wetting an adhered dressing 'for comfort' cancels the therapy. Newer moist-wound-healing dressings follow the opposite logic — know which order you're executing.",
      "Wound infection vs normal healing: expanding redness, increasing pain after day 2–3, purulent or foul drainage, fever = infection. Warmth and redness in the first 48 h at the margins = inflammation phase.",
      "Dehiscence/evisceration: wound 'gave way' feeling, sudden drainage, visible bowel = cover with STERILE SALINE-MOISTENED gauze, low Fowler's with knees flexed, NPO, call the surgeon — never push anything back or pack the wound.",
      "Burn first-aid teaching: cool running water (not ice), remove constricting items before swelling, cover loosely with clean dry cloth; NO butter/oils/toothpaste — grease seals in heat and seeds infection (a burn dressed in cooking fat needs washing with soap and water on arrival, especially in the immunosuppressed).",
      "Burn fluid phase nursing: urine output is the resuscitation gauge (≥ 30 mL/h adult; ~0.5–1 mL/kg/h child); watch the K flip (high early, low at diuresis ~day 3 — weakness/lethargy is the report); Curling's stress ulcer prophylaxis (falling gastric pH is the early clue).",
      "Burn wounds: strict asepsis, hydrotherapy/debridement with pre-medication and scheduled generosity of TIME plus emotional support, position joints EXTENDED/neutral against contractures (burned neck extended, axilla abducted), pressure garments later for scarring.",
      "Shingles (herpes zoster): the chickenpox virus reawakened along a nerve — vesicles in a one-sided band (dermatome), pain that may precede the rash. Contagious to varicella-susceptible people until crusted; staff with localized covered lesions can work with LOW-risk clients only; immunocompromised staff with zoster stay away from patient care until crusted.",
      "Wound cultures BEFORE the first antibiotic dose; cleanse from clean to dirty, center outward, one stroke per gauze.",
      "Itching (pruritus) care: cool environment, cotton next to skin, short nails, moisturize, tepid baths — heat and soap-scrubbing amplify itch (vaginal itching adds: cotton underwear, no douching, no repeated soap-washing).",
    ],
    redFlags: [
      "Rapidly spreading redness with fever, streaking, or crepitus — deep or systemic infection (cellulitis, necrotizing) — escalate immediately.",
      "Hoarseness, stridor, facial burns, singed nasal hairs, sooty sputum — inhalation injury; the airway can close within hours.",
      "Circumferential burn on a limb or chest — expanding eschar tourniquets circulation or breathing; escharotomy watch.",
      "Non-blanchable redness on a pressure point — Stage 1 pressure injury has already happened; the plan changes today.",
      "Wound edges separating with a gush of serosanguineous fluid — dehiscence; visible organs — evisceration: sterile moist cover and the surgeon.",
      "Petechiae that don't blanch + fever, especially in a child — think meningococcus; act now.",
      "A mole hitting ABCDE criteria or any wound that refuses to heal — biopsy conversation (aspirin and bleeding-risk drugs are the pre-biopsy report items).",
    ],
    commonConditions: ["Pressure injuries", "Burns", "Cellulitis", "Surgical wounds", "Herpes zoster", "Dermatitis", "Skin cancer", "Wound dehiscence", "Impetigo"],
  },
  {
    slug: "hematologic-immune-system",
    overview:
      "Blood is a transport and defense fluid with three cell lines, each with its own failure story. RED CELLS carry oxygen on hemoglobin: too few = anemia = tissue hypoxia, and the body compensates with a faster pulse and respirations, pallor and fatigue — read the compensation, not just the count. WHITE CELLS fight infection: below ~2,000 (and especially low neutrophils) the client cannot mount a defense, so FEVER MAY BE THE ONLY SIGN of a raging infection — hence temperature checks are the first nursing action with a low count, and neutropenic precautions guard the door. PLATELETS clot: under 50,000 means bleeding precautions; under 20,000 means spontaneous bleeding — including into the brain — can begin uninvited.\n\nLeukemia crowds the marrow with useless blasts, sinking ALL THREE lines at once: anemia (gas-exchange problems from lost oxygen-carriers), infection risk, and bleeding risk. The nursing diagnosis follows the presenting data, not the textbook list. Chemotherapy deepens the same three troughs and adds mucositis, nausea, and alopecia (prepare clients BEFORE hair falls — a wig matched to their own hair is bought in week one, not week five).\n\nIn sickle cell disease, deoxygenated hemoglobin S deforms red cells into rigid sickles that jam small vessels — vaso-occlusive crisis: pain, swelling, organ ischemia. The triggers are the teaching list: dehydration, hypoxia, infection, cold, stress, overexertion. Crisis treatment is the reversal of triggers: HYDRATION aggressively (a keep-open IV rate in crisis is an order to question), oxygen, warmth, rest, and real analgesia (opioids as prescribed — never aspirin in children, and undertreating sickle pain is a classic failure). HIV/AIDS nursing centers on protecting a defenseless immune system: infection prevention in every choice — food safety, no litter boxes/pet excreta, soft toothbrush oral care several times daily, small frequent meals, low-microbe environment — plus adherence to therapy and zero-judgment care.",
    keyStructures: [
      "Marrow is the factory; spleen the quality-control filter (splenectomy = lifelong encapsulated-organism risk — vaccines and fever vigilance); lymph nodes the immune checkpoints.",
      "Normal counts to anchor: Hb ~12–16 (women)/14–18 (men) g/dL; WBC 5,000–10,000/mm³; platelets 150,000–400,000/mm³. Hematocrit ≈ 3 × hemoglobin.",
      "Iron-deficiency anemia (microcytic): iron with vitamin C/orange juice (never with coffee/tea/milk — absorption blockers), dark stools are expected, liquid iron through a straw (teeth staining). Pediatric prevention: iron-fortified foods; excess cow's milk crowds out iron.",
      "B12 deficiency (pernicious anemia): add NEUROLOGIC signs — paresthesia, balance trouble; lifelong B12 injections when intrinsic factor is missing.",
      "Blood types: O- universal red-cell donor, AB+ universal recipient; type-and-cross before transfusion; two-nurse verification at the bedside.",
      "Immunity flavors: active natural (had the disease), active artificial (vaccine), passive natural (mother→baby), passive artificial (immunoglobulin). LIVE vaccines (OPV, MMR, varicella) are contraindicated in the immunocompromised and in pregnancy — questioning such an order is the nurse's duty.",
      "Anaphylaxis chain: allergen → massive histamine → airway swelling + vasodilation shock. Lip/facial swelling after a sting or new drug is the callback to return FIRST; epinephrine is the answer, speed is the dose.",
    ],
    normalFindings: [
      "Counts within the ranges above; no unusual bruising, petechiae, or bleeding gums.",
      "Lymph nodes small, mobile, non-tender (fixed hard nodes are the concerning kind).",
      "Afebrile; wounds healing on schedule; no recurrent or opportunistic infections.",
      "Transfusion running with baseline vitals taken, started slow for the first 15 minutes with the nurse in the room — the reaction window.",
    ],
    nursingNotes: [
      "Neutropenic precautions: private room, strict hand hygiene, no fresh flowers/standing water, no raw fruits/vegetables per policy, screen every visitor and staff member for illness (a staff member with diarrhea or a child's chickenpox exposure is reassigned — the nursery/immunocompromised rule), daily site inspections of every line and orifice, and treat ANY fever as an emergency culture-and-antibiotics event.",
      "Bleeding precautions (platelets low): soft toothbrush, electric razor, no IM injections when avoidable (small gauge + pressure when not), no rectal temps/suppositories/enemas, fall-proof the room, guard against straining (stool softeners), and watch for the deadly bleed — level-of-consciousness changes on anticoagulants or low platelets = intracranial bleeding until proven otherwise.",
      "Transfusion reactions: fever/chills, low back pain, hypotension, dyspnea, hives — STOP the blood, keep the line open with saline via new tubing, vitals, notify, recheck identifiers, send the unit and specimens per policy. Volume overload from fast transfusion (crackles, dyspnea) slows the rate and sits the client up.",
      "Sickle cell home teaching: hydrate generously every day, avoid altitude/cold/overexertion, treat infections early, prescribed analgesia (no aspirin in children), and come in EARLY in a crisis. In hospital: fluids first-line, oxygen, warmth (no cold packs on painful areas), and adequate opioid dosing.",
      "Anemia nursing reads compensations: pulse and respirations up, pallor, fatigue — pace activities, prioritize oxygenation, and investigate the cause (iron? B12? bleeding? chronic disease?). A cancer client's rising pulse with Hb 9 is expected physiology to monitor, not a mystery.",
      "Chemotherapy weeks: know the nadir (the count trough) timing — that's when precautions tighten; mouth care with soft brush and saline rinses (no alcohol mouthwash) for mucositis; antiemetics BEFORE nausea peaks; small frequent bland meals; reproductive counseling and contraception discussions per protocol.",
      "HIV/AIDS daily care package: medication adherence above all (resistance grows in missed doses), food safety (no raw/undercooked), no cat-litter or pet-excreta handling (toxoplasmosis), soft toothbrush several times daily, small frequent high-calorie meals, bowel regularity programs, skin and mouth inspected daily, and standard precautions — which protect adequately without isolation-theater (pregnant staff can safely care for CMV/HIV clients using standard precautions).",
      "Kaposi's and open lesions in AIDS: gentle soap-and-water cleansing, cover with sterile dressing — never scrubbing, never open-to-air on broken skin.",
      "Latex and drug allergies belong at the front of every chart and every dye-study checklist (iodine/shellfish/contrast).",
    ],
    redFlags: [
      "Fever in neutropenia — a medical emergency measured in hours: cultures and antibiotics, no waiting.",
      "Spontaneous bruising, petechiae, bleeding gums, black stools with platelets falling — and ANY new confusion or headache in a bleeding-risk client (intracranial bleed).",
      "Transfusion reaction signs in the first 15 minutes — stop the blood first, ask questions after.",
      "Lip/tongue/facial swelling, stridor, hives spreading after a bite/sting/new drug — anaphylaxis trajectory; epinephrine and emergency care now.",
      "Sickle crisis with chest pain and dyspnea — acute chest syndrome, the killer complication; escalate.",
      "In a splenectomized or immunocompromised client, ANY fever is a different, more dangerous animal.",
    ],
    commonConditions: ["Anemia (iron, B12)", "Sickle cell disease", "Leukemia", "Lymphoma", "Thrombocytopenia", "HIV/AIDS", "Anaphylaxis", "Transfusion reactions", "Neutropenia"],
  },
  {
    slug: "obstetric-reproductive-anatomy",
    overview:
      "Pregnancy re-engineers the body around the placenta — the organ that feeds, breathes, and excretes for the fetus, and pumps out the hormones that maintain the pregnancy (and, in diabetics, drive rising insulin resistance: insulin needs should CLIMB through pregnancy — a third-trimester diabetic needing LESS insulin means the placenta is failing, not the diabetes improving). Signs of pregnancy come in three certainty grades: presumptive (the mother feels — amenorrhea, nausea, quickening), probable (the examiner finds — Hegar's sign, positive test, Braxton Hicks), positive (the fetus proven — heartbeat heard ~12 weeks by Doppler, ultrasound visualization, examiner-felt movement). Dating without a reliable LMP leans on the positive signs' timelines; with an LMP, Naegele's rule: LMP − 3 months + 7 days (+ 1 year).\n\nLabor's stages carry stage-specific nursing: FIRST stage (onset → 10 cm) includes the brutal TRANSITION phase (8–10 cm: irritability, nausea, 'I can't do this' — support and breathing coaching; NO opioids this late, they depress the newborn's breathing; and NO pushing before full dilation — pant instead, the cervix swells if you push on it). SECOND stage: pushing and birth — once the head delivers, check for a nuchal cord before the shoulders come. THIRD stage: placenta. FOURTH: the recovery hours where HEMORRHAGE is the enemy — the assessment chain is lochial flow first, fundus second (firm = fine; boggy = massage, empty the bladder, escalate).\n\nThe fetal monitor speaks a three-word language: EARLY decelerations mirror contractions = head compression = normal; VARIABLE decelerations = cord compression = reposition and check for prolapse; LATE decelerations (after the contraction peak) = placental insufficiency = intrauterine resuscitation NOW — left side, oxygen, IV fluids, stop oxytocin, call. A sustained contraction over ~90 seconds on oxytocin means STOP the infusion (piggybacked on a pump precisely so it can be stopped in seconds); FHR of 60 in labor = left side + O2 + IV as one reflex.",
    keyStructures: [
      "Placenta: gas/nutrient/waste exchange + hormone factory (hCG, progesterone, estrogen, hPL). Two arteries + one vein in the cord (AVA); fewer vessels = anomaly workup.",
      "Amniotic fluid cushions, allows movement and symmetrical growth, stabilizes temperature — 'dry labor' is a myth to dispel; membranes are often ruptured deliberately to help labor. After ANY rupture: check FHR and for cord prolapse FIRST.",
      "Uterine layers and involution: after birth the fundus is felt at the umbilicus, descending about a fingerbreadth daily; boggy = atony = bleed.",
      "Cervical language of labor: dilation (0–10 cm), effacement (%), station (presenting part vs ischial spines; + numbers = descending).",
      "Fetal positioning: vertex is business as usual; breech and transverse change the delivery plan; a multipara at 8 cm with vertex at +2 delivers SOON — bedside now.",
      "Lochia sequence: rubra (red, days 1–3) → serosa (pink-brown) → alba (white-yellow); back-tracking to bright red or foul odor = report.",
      "Newborn vitals and norms: HR 120–160, RR 30–60 with brief periodic pauses (report apnea > 15 s), head circumference 32–36 cm (chest ~2 cm less; a 40 cm head = report — hydrocephalus watch), weight doubles by ~5–6 months, triples by a year.",
    ],
    normalFindings: [
      "Pregnancy weight gain: ~2–5 lb first trimester then ~1 lb/week (25–35 lb total for normal BMI); 14 lb by month five computes as NORMAL — do the math before labeling.",
      "Fetal heart rate 110–160 bpm with moderate variability and accelerations; fetal movement felt daily (kick counts are the home fetal-wellbeing monitor; movement typically DECREASES near labor onset — increase is not a labor sign).",
      "Common discomforts vs danger: constipation/hemorrhoids, leg cramps, Braxton Hicks tensing = normal; hot flashes WITH CHILLS (fever/infection), headache with visual changes, bleeding, or gush of fluid = report.",
      "Postpartum: firm midline fundus, lochia rubra moderate, afterpains (stronger in multiparas and while breastfeeding), voiding within 6–8 hours.",
    ],
    nursingNotes: [
      "Pregnancy medication defaults: aspirin, diuretics and most drugs avoided unless prescribed; live vaccines (MMR/rubella) NEVER during pregnancy — a low rubella titer means avoid exposure now, immunize immediately postpartum. Iron: with orange juice (vitamin C), not antacids; dark stools expected.",
      "Supine hypotension (vena-caval syndrome): a term uterus on the vena cava crashes the BP — LEFT lateral position is both prevention and the first treatment for maternal hypotension and most fetal distress pictures.",
      "Preeclampsia/PIH watchlist: rising BP, proteinuria, headache, visual changes, epigastric pain, sudden edema/weight gain. Admission priority = baseline vitals (everything after is measured against them). Magnesium sulfate safety trio EVERY check: respirations > 12, reflexes present, urine > 30 mL/h — falling urine output is the toxicity gateway (renally excreted); hypertonic reflexes suggest the level is LOW, not high; calcium gluconate is the antidote.",
      "Oxytocin laws: always piggybacked, always on a pump; sustained contraction > 90 s or fetal distress = STOP the infusion entirely (reducing the rate still feeds the problem), then left side, oxygen, notify.",
      "Epidural aftermath: hypotension is the signature side effect — BP first and frequently, preload/maintain IV fluids, left-tilt ready.",
      "Postpartum hemorrhage chain: check FLOW → FUNDUS (massage if boggy) → BLADDER (a full bladder displaces the uterus up and sideways and blocks contraction) → vitals → escalate. Diuresis and 200 mL/2 h outputs after diuretics/delivery get REPORTED forward — trends continue across shifts.",
      "Breastfeeding vs suppression: nursing mothers get lactation support and can safely take heparin (doesn't cross into milk) but NOT combined oral contraceptives (estrogen suppresses supply — barrier methods or POPs instead). Bottle-feeding mothers get the OPPOSITE of stimulation: supportive bra continuously, ice, analgesics — no pumping, no warm water on the breasts, no massage (all signal 'keep producing').",
      "Newborn care essentials: airway/warmth/APGAR; eye prophylaxis and vitamin K per protocol; cord = clean, dry, exposed, diaper folded below; report feeding refusal, projectile vomiting more than once, temperature > 38.3 °C (101 °F), apnea > 15 s, or fewer wet nappies than expected. Infant of a diabetic mother: watch glucose AND calcium (jitteriness can be either; calcium 7.0 = calcium gluconate anticipation).",
      "Fetal monitoring responses table: early decels = document; variables = reposition, check cord; lates or bradycardia = left side + O2 + IV + stop oxytocin + notify — in that spirit and nearly that order.",
      "NST vs CST: nonstress test watches accelerations with movement (no drugs involved — 'stop the Pitocin' is a trap; ANY decelerations in an NST go to the provider); contraction stress test uses stimulation.",
      "Emergency birth priorities: support the head, check for nuchal cord once the head is out, dry and warm the baby on the mother's chest, no cord traction; hemorrhage watch while awaiting transport.",
    ],
    redFlags: [
      "Unilateral lower abdominal pain in early pregnancy — ectopic until proven otherwise; can rupture before it 'looks' serious — this phone call comes in FIRST.",
      "Painless bright-red bleeding late in pregnancy = previa (no vaginal exams!); painful rigid abdomen with dark bleeding = abruption. COMPLETE previa at term in labor = cesarean, full stop.",
      "Cord visible or palpable after membranes rupture — prolapse: knee-chest/Trendelenburg, lift the presenting part off the cord, call for emergency delivery.",
      "Late decelerations, prolonged bradycardia (FHR ~60), or absent variability — intrauterine resuscitation and escalation.",
      "Boggy fundus with heavy flow; saturated pad in minutes; clots larger than expected — postpartum hemorrhage in motion.",
      "Postpartum fever, foul lochia, uterine tenderness — endometritis; burning on urination before discharge = the referral that outranks routine cases.",
      "Magnesium client: respirations < 12, absent reflexes, urine < 30 mL/h — stop and antidote territory.",
      "PPH risk factors on the board: big baby, long labor, multiparity, oxytocin induction — assign vigilance accordingly.",
    ],
    commonConditions: ["Preeclampsia/PIH", "Placenta previa", "Abruption", "Ectopic pregnancy", "Postpartum hemorrhage", "Gestational diabetes", "Cord prolapse", "Preterm labor", "Endometritis", "Newborn hypoglycemia"],
  },
  {
    slug: "nursing-process-adpie",
    overview:
      "The nursing process — Assessment, Diagnosis, Planning, Implementation, Evaluation — is both how nurses think and how the exam thinks. Most 'what should the nurse do FIRST?' questions are really asking 'where are we in ADPIE?' The default rule: if you have not assessed, assess — an unexplained symptom gets data-gathering before intervention. The exceptions are the recognized emergencies where the picture IS the assessment and action saves the airway/life: an active seizure (protect), acute dystonia (give the anticholinergic), evisceration (cover with moist sterile gauze), a dislodged fresh trach (reinsert), an obstructed airway from a displaced esophageal balloon (cut and remove). Learn the pattern AND its exceptions.\n\nASSESSMENT splits into subjective (what the client says — charted as quotes: the chief complaint is the client's own words, 'My stomach hurts after dinner every night') and objective (what you measure and observe). Good documentation is the assessment made permanent: measurable, observable, quantified — '60 feet, gait steady, respirations 14 unlabored' survives scrutiny; 'ambulated well, did not appear fatigued' does not. DIAGNOSIS is the nursing problem in PES format: Problem related to Etiology as evidenced by Signs/symptoms — and the RIGHT diagnosis is the one your assessment data actually support, not the most textbook-famous one for the disease.\n\nPLANNING writes SMART goals (specific, measurable, achievable, realistic, time-bound) — set WITH the client, because participation is commitment; short-term and long-term. IMPLEMENTATION includes safe delegation: RNs keep assessment, teaching, evaluation, judgment and unstable clients; LPNs take stable clients with predictable outcomes and technical skills; assistants take routine care — and experience never rewrites scope. EVALUATION closes the loop against the goal's own metric: met, partially met, not met — and when an intervention fails (guided imagery leaves the laboring client MORE agitated), the professional move is switching interventions, not repeating the failed one louder. Goals must also fit the client's reality: a disoriented client's feeding success is 'feeds self with cueing,' not 'explains nutrition principles.'",
    keyStructures: [
      "A: collect subjective + objective; interview COMPLETES before the physical exam begins (a concerning statement mid-history deepens questioning — it doesn't teleport you to the scale).",
      "Physical exam order: inspect → palpate → percuss → auscultate — EXCEPT the abdomen: inspect → AUSCULTATE → percuss → palpate (touch changes bowel sounds); painful areas last; children get least-invasive-first (observe respirations before anything touches them; rectal temperature dead last); always compare paired limbs/joints.",
      "D: PES format; 'Risk for…' diagnoses have no 'as evidenced by' (nothing has happened yet). Prioritize diagnoses by ABC → Maslow → safety.",
      "P: SMART goals, client participation first (goal-setting IS the first step of teaching self-care), short- and long-term.",
      "I: interventions carry rationales — the 'why' is what separates nursing from task-doing; independent (nurse-initiated: positioning, teaching, fluids-for-catheter-sediment) vs dependent (order-required: IVs, medications) matters in 'implement FIRST' questions about nursing orders.",
      "E: compare outcome to goal; revise the PLAN, not the client. Concrete beats vague: 'ate half of all meals, drank 2,000 mL' is evaluation; 'seems better' is not.",
      "Prioritization stack in one breath: ABC → Maslow (physiological before safety before psychosocial) → acute over chronic → unstable over stable → assess before implement (with the emergency exceptions).",
    ],
    normalFindings: [
      "A complete database: history, medications (ASK ABOUT HERBALS — appetite-suppressant supplements before surgery are a notify-the-provider find), allergies (the FIRST question before any dye study or new antibiotic), baselines, psychosocial and support systems (who appears in the client's worries, and as comfort or threat?).",
      "Documentation that quotes the subjective, quantifies the objective, and never charts interpretations as facts ('patient is very sad' fails; the quote and the tear-streaked face pass).",
      "Orders verified complete before transcription: drug, dose, ROUTE, frequency — 'haloperidol 5 mg' is a clarification call, not a guess.",
      "Identity verified at every medication pass and at the OR-transport threshold — the five rights never take a day off, and a confused client's 'these pills look funny' stops the pass for a recheck, every time.",
    ],
    nursingNotes: [
      "Assessment-first exemplars the exam loves: knee 'doesn't feel right' → INSPECT and compare with the other knee; repeated self-transfers to the floor → OBSERVE the transfer before call lights, footrests, or (last of all) restraints; morning hyperglycemia in a tight-control child → CHECK 3 AM glucose before touching the regimen (Somogyi vs dawn); sibling acting out after a diagnosis → 'did this happen before?'; hip-fracture client 'cleaning the kitchen' the morning after surgery → blood gases (fat embolism), not scolding.",
      "Action-first exemplars (the exceptions): seizure → protect; torticollis/oculogyric crisis on antipsychotics → PRN anticholinergic NOW; NMS (105 °F + rigidity) → HOLD the drug and call STAT; visible bowel → moist sterile cover; FHR 60 → position/O2/IV; hemorrhage → pressure and escalation.",
      "Delegation drills: the LPN takes the stable dressing change and the routine medications; the RN keeps the blood transfusion, the pre-op teaching, the hospice transition, the new-pain assessment; the assistant takes hygiene, ambulation-with-walker, urinals, feeding (never medications — in ANY setting, including home care).",
      "Question-the-order muscle: propranolol in wheezing COPD; lidocaine in complete heart block (it silences the escape rhythm that's keeping the client alive); prokinetics in GI bleeding; live vaccine in an immunosuppressed infant; KVO fluids in sickle crisis; analgesia at 9 cm dilation (notify with the labor status, don't silently hold); DTP after a 40 °C fever (ask about DT without pertussis).",
      "Communication is implementation: reflect feelings, open-ended beats yes/no, no 'why' interrogations, no false reassurance, no buck-passing to social workers/physicians before you've listened; name inappropriate behavior + state the expected change; with delusions — validate the FEELING, present reality, never explore the content; with escalating anger — help identify and express the feelings before any seclusion conversation.",
      "Teaching evaluation = behavior, not attendance: the celiac family names the BROW grains; the T-tube client cancels the swimming laps; the colostomy client stops irrigating after every meal; the MAOI client cancels the pepperoni-and-wine celebration. 'Further teaching needed' questions hide ONE wrong behavior among three correct ones — find the rule it breaks.",
      "Legal-ethical rapid file: consents are signed UNMEDICATED (premedicated consent = call the surgeon; married minors sign their own); psychiatric admission keeps civil rights (mail uncensored, calls, voting — route the caller to the patient); refusal of restraints by a non-dangerous wanderer = frequent checks and alternatives, never force; confidentiality is enforced mid-cafeteria ('continue this in private'), and information flows within the care team, not by promise of secrecy.",
      "Incident response: assess the client, notify the provider, file the report — never silent-fix the schedule; suspected impaired colleague = report objective, verifiable observations up the line.",
      "Evaluation resets plans: pain unrelieved after the intervention window → reassess and change strategy; a care plan's goals must match capacity (cued self-feeding for the disoriented; 'more ambulatory' for Parkinson's — never 'symptom-free').",
    ],
    redFlags: [
      "Any option that medicates away an unassessed symptom (analgesia for new cast pain, sedation for new confusion) — the masking trap.",
      "Charting an interpretation as a fact, or an incomplete order transcribed 'as best I could.'",
      "Delegating assessment, teaching, or an unstable client downward — or letting 15 years of LPN experience take the transfusion.",
      "Skipping identity verification because the client is confused, rushed, or 'known.'",
      "Repeating a failed intervention instead of switching; setting goals the client's condition makes impossible.",
      "Keeping a client's disclosure 'just between us' — the promise you cannot keep.",
      "Restraining first: force, seclusion, or vest restraints before less-restrictive steps have failed (and been documented failing).",
    ],
    commonConditions: ["Prioritization", "Delegation", "Documentation", "Medication safety", "Informed consent", "Client rights", "Therapeutic communication", "Teaching & evaluation", "Incident reporting"],
  },
];

// Update existing topics in place (matched by slug). Only the content fields
// are touched — title, category, icon, images, videos, bookmarks and sort
// order are preserved. Idempotent and safe to run repeatedly.
export async function applyDeepContent(): Promise<{ updated: number; missing: string[] }> {
  let updated = 0;
  const missing: string[] = [];
  for (const t of DEEP_TOPICS) {
    const existing = await db
      .select({ id: learningTopics.id })
      .from(learningTopics)
      .where(eq(learningTopics.slug, t.slug))
      .limit(1);
    if (!existing[0]) {
      missing.push(t.slug);
      continue;
    }
    await db
      .update(learningTopics)
      .set({
        overview: t.overview,
        keyStructures: [...t.keyStructures],
        normalFindings: [...t.normalFindings],
        nursingNotes: [...t.nursingNotes],
        redFlags: [...t.redFlags],
        commonConditions: [...t.commonConditions],
      })
      .where(eq(learningTopics.id, existing[0].id));
    updated += 1;
  }
  return { updated, missing };
}
