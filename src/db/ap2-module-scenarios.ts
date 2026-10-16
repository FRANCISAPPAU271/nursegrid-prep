import type { AuthoredQuestion } from "./authored-bank";

export const AP2_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-AP2-001",
    categorySlug: "fluid-electrolyte",
    stem: "A client with blood type O positive accidentally receives an intravenous infusion of type A positive packed red blood cells. Within 10 minutes, the client complains of crushing chest pain, dyspnea, severe bilateral flank pain, and fever. What immunological and physiological mechanism causes this acute hemolytic transfusion reaction (AHTR)?",
    choices: [
      {
        id: "a",
        text: "The recipient's preformed anti-A IgM isohemagglutinins bind to foreign type A antigens on donor red blood cells, activating the classical complement cascade and causing immediate intravascular hemolysis, systemic microvascular occlusion, and free hemoglobin nephrotoxicity",
      },
      {
        id: "b",
        text: "The donor blood contains high concentrations of potassium that precipitate as calcium stones in the ureters",
      },
      {
        id: "c",
        text: "Type O recipients have excessive albumin that neutralizes donor white blood cells in lung tissue",
      },
      {
        id: "d",
        text: "The donor blood causes an immediate genetic mutation in recipient bone marrow stem cells",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Individuals with type O blood produce pre-formed naturally occurring IgM antibodies (isohemagglutinins) against both A and B erythrocyte surface antigens. When type A red blood cells are erroneously infused, recipient anti-A IgM antibodies immediately bind to the donor red cell A antigens, triggering the classical complement pathway (membrane attack complex C5b-9). This causes rapid, catastrophic intravascular hemolysis, releasing free hemoglobin into plasma (causing hemoglobinuria and acute tubular necrosis/flank pain), activating clotting factor XII (disseminated intravascular coagulation), and releasing inflammatory anaphylatoxins (C3a, C5a) that produce hypotension, bronchospasm, and shock. Option a accurately details this life-threatening pathophysiology.",
    strategy: "Transfusion immunology: Type O recipients have anti-A and anti-B antibodies. Infusing type A blood causes immediate complement-mediated intravascular hemolysis, shock, and acute renal failure.",
    difficulty: "easy",
    tags: ["anatomy-physiology", "blood-groups", "hemolytic-transfusion-reaction", "complement-system", "intravascular-hemolysis"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-002",
    categorySlug: "fluid-electrolyte",
    stem: "A nurse is teaching nursing students about the physiology of physiological hemostasis. What molecular event marks the critical final common pathway of secondary hemostasis (the coagulation cascade)?",
    choices: [
      {
        id: "a",
        text: "Platelets dissolve their cell membranes to release nitric oxide into surrounding tissues",
      },
      {
        id: "b",
        text: "Activated Factor X (Factor Xa) converts prothrombin (Factor II) into thrombin (Factor IIa), which then cleaves soluble fibrinogen (Factor I) into insoluble fibrin strands that cross-link to form a stable hemostatic clot",
      },
      {
        id: "c",
        text: "Albumin crystallizes in the blood vessel wall to form a mechanical plug",
      },
      {
        id: "d",
        text: "Endothelial cells destroy all circulating von Willebrand factor to prevent vasodilation",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Hemostasis occurs in two interconnected phases: 1) Primary hemostasis involves transient vasoconstriction, von Willebrand factor binding to exposed subendothelial collagen, and platelet adhesion, activation, and aggregation to form an unstable platelet plug; 2) Secondary hemostasis involves the coagulation cascade (intrinsic and extrinsic pathways), which converge at the common pathway: Factor X is activated to Factor Xa (with Factor Va, calcium, and phospholipids forming the prothrombinase complex). This complex converts prothrombin into active THROMBIN. Thrombin then cleaves soluble circulating FIBRINOGEN into insoluble FIBRIN monomers, which are cross-linked by Factor XIIIa into a resilient, insoluble fibrin mesh that stabilizes the clot. Option b accurately identifies this core biochemical step.",
    strategy: "Coagulation cascade: The common pathway converges on Factor Xa converting Prothrombin to Thrombin, which cleaves Fibrinogen into stable Fibrin mesh.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "hemostasis", "coagulation-cascade", "thrombin", "fibrinogen"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-003",
    categorySlug: "fluid-electrolyte",
    stem: "A client in septic shock from severe Gram-negative bacteremia develops Disseminated Intravascular Coagulation (DIC). Physical assessment reveals profuse bleeding from IV puncture sites, hematuria, ecchymoses, and digital ischemia. What dual hematological paradox characterizes DIC pathophysiology?",
    choices: [
      {
        id: "a",
        text: "Excessive red blood cell production leads to severe polycythemia and dehydration",
      },
      {
        id: "b",
        text: "Total destruction of vascular smooth muscle causing permanent vasodilation without clotting",
      },
      {
        id: "c",
        text: "Widespread, uncontrolled systemic microvascular thrombus formation consumes and depletes circulating platelets and coagulation factors (fibrinogen, prothrombin), paradoxically resulting in catastrophic, uncontrollable systemic hemorrhage",
      },
      {
        id: "d",
        text: "Immediate conversion of circulating fibrinogen into gastric acid within arteries",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Disseminated Intravascular Coagulation (DIC) is a complex consumptive coagulopathy triggered by systemic endothelial injury, endotoxins, or tissue factor release in severe sepsis, trauma, or obstetric emergencies. Massive systemic activation of thrombin creates widespread microvascular fibrin thrombi that occlude small arterioles and capillaries, causing end-organ ischemia and tissue infarction (e.g., gangrene of digits, renal cortical necrosis). Paradoxically, this relentless micro-thrombosis completely exhausts the body's circulating stores of platelets, fibrinogen, and clotting factors (consumptive phase), while secondary hyperfibrinolysis generates high levels of fibrin degradation products (D-dimer) that act as potent anticoagulants, producing catastrophic spontaneous hemorrhage (oozing from IV sites, mucosal bleeding, internal hematomas). Option c correctly explains this paradox.",
    strategy: "DIC pathophysiology: Widespread microvascular thrombosis -> consumption of platelets and clotting factors -> simultaneous thrombosis and severe hemorrhagic bleeding.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "disseminated-intravascular-coagulation", "dic", "consumption-coagulopathy", "sepsis"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-004",
    categorySlug: "fluid-electrolyte",
    stem: "A client with severe coronary artery disease develops supraventricular tachycardia with a sustained ventricular rate of 180 beats per minute, accompanied by crushing substernal chest pressure and ST-segment depression. Based on coronary circulatory physiology, why does severe tachycardia precipitate acute myocardial ischemia?",
    choices: [
      {
        id: "a",
        text: "Coronary arteries fill exclusively during ventricular systole when the aortic valve is wide open",
      },
      {
        id: "b",
        text: "Tachycardia forces coronary arteries to switch to retrograde flow toward the brain",
      },
      {
        id: "c",
        text: "High heart rates cause coronary veins to absorb all systemic oxygen before it reaches myocytes",
      },
      {
        id: "d",
        text: "Coronary artery perfusion occurs predominantly during ventricular DIASTOLE; extreme tachycardia drastically shortens diastolic filling time while exponentially increasing myocardial oxygen demand, causing severe supply-demand mismatch",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Unlike all other systemic vascular beds which are perfused during systole, the left ventricular myocardium is perfused almost entirely during ventricular DIASTOLE. During systole, high intramyocardial compressive forces compress subendocardial coronary capillaries, and open aortic valve leaflets partially shield the coronary ostia. When the aortic valve closes in diastole, coronary perfusion pressure peaks. At rapid heart rates (e.g., >150–180 bpm), the cardiac cycle shortens primarily at the expense of diastolic duration (diastolic filling time plummets), severely curtailing coronary perfusion time. Simultaneously, tachycardia skyrockets myocardial metabolic oxygen consumption (MVO2), producing acute supply-demand mismatch and profound subendocardial ischemia (angina and ST depressions). Option d is physiologically correct.",
    strategy: "Coronary physiology: Coronary blood flow occurs during DIASTOLE. Tachycardia shortens diastolic time + increases oxygen demand -> triggers myocardial ischemia.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "coronary-perfusion", "diastole", "tachycardia", "myocardial-ischemia"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-005",
    categorySlug: "fluid-electrolyte",
    stem: "A client with a history of rheumatic fever presents with severe Mitral Valve Stenosis. Auscultation reveals a low-pitched diastolic rumbling murmur and an opening snap at the cardiac apex. How does this valvular pathology alter upstream cardiovascular pressures?",
    choices: [
      {
        id: "a",
        text: "Impaired left ventricular inflow causes blood to back up into the left atrium, elevating left atrial pressure and retrograde pulmonary venous pressure, leading to pulmonary capillary congestion, dyspnea, pulmonary edema, and eventual right ventricular failure",
      },
      {
        id: "b",
        text: "Directly causes massive dilation of the abdominal aorta and lower extremity arterial ulcers",
      },
      {
        id: "c",
        text: "Prevents venous blood from returning to the right atrium from the inferior vena cava",
      },
      {
        id: "d",
        text: "Increases left ventricular systolic pressure to over 300 mmHg without affecting the lungs",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The mitral (bicuspid) valve separates the left atrium from the left ventricle. In mitral stenosis, fusion and calcification of the valve leaflets obstruct blood flow during diastole from the left atrium into the left ventricle. This anatomical restriction creates a high pressure gradient, causing marked left atrial dilation and elevated left atrial pressure. Because pulmonary veins lack valves, this elevated pressure transmits retrograde directly into the pulmonary venous circulation and pulmonary capillaries. When hydrostatic capillary pressure exceeds plasma oncotic pressure (~25 mmHg), fluid transudates into the pulmonary interstitium and alveoli (orthopnea, dyspnea, crackles, pulmonary edema). Chronic pulmonary venous hypertension induces pulmonary arteriolar remodeling, pulmonary arterial hypertension, and secondary right ventricular hypertrophy and failure. Option a correctly charts this hemodynamic pathway.",
    strategy: "Valvular hemodynamics: Mitral stenosis -> elevated left atrial pressure -> retrograde pulmonary venous congestion -> pulmonary edema and right heart failure.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "mitral-stenosis", "pulmonary-hypertension", "cardiac-valves", "hemodynamics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-006",
    categorySlug: "fluid-electrolyte",
    stem: "A client in acute decompensated heart failure has a low cardiac output (CO = 2.4 L/min) and severe pulmonary congestion. The physician orders intravenous Nitroglycerin (a potent venous vasodilator). How does reducing Preload (end-diastolic volume) benefit this failing heart according to the Frank-Starling Law?",
    choices: [
      {
        id: "a",
        text: "Preload reduction permanently paralyzes the SA node to prevent premature beats",
      },
      {
        id: "b",
        text: "Venodilation increases venous capacitance and decreases venous return to the right heart, reducing excessive ventricular end-diastolic filling pressure and wall stress, relieving pulmonary congestion without increasing myocardial oxygen demand",
      },
      {
        id: "c",
        text: "Decreasing preload quadruples afterload, forcing the heart to beat against 200 mmHg pressure",
      },
      {
        id: "d",
        text: "Preload reduction replaces depleted red blood cells with plasma proteins",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Cardiac Output is determined by Heart Rate and Stroke Volume (CO = HR x SV). Stroke volume depends on PRELOAD (ventricular stretch/end-diastolic volume), AFTERLOAD (resistance to ventricular ejection), and CONTRACTILITY. According to the Frank-Starling law, physiological stretching of myocardial fibers optimizes sarcomere actin-myosin overlap. However, in decompensated heart failure, excessive volume overload stretches fibers past their optimal length onto the descending limb of the Starling curve, producing severe wall stress and pulmonary venous congestion. Venodilators like nitroglycerin pool blood in peripheral capacitance veins, decreasing venous return (preload) to the heart. This relieves excessive ventricular end-diastolic wall tension and pulmonary capillary wedge pressure, alleviating dyspnea and pulmonary edema without imposing extra metabolic workload. Option b accurately explains this hemodynamic mechanism.",
    strategy: "Cardiac output determinants: Preload = ventricular end-diastolic volume/stretch. Nitroglycerin venodilation reduces venous return (preload), lowering pulmonary congestion.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "cardiac-output", "preload", "frank-starling-law", "nitroglycerin"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-007",
    categorySlug: "fluid-electrolyte",
    stem: "A client experiences acute hemorrhagic blood loss of 1,000 mL following a motor vehicle collision. Carotid sinus and aortic arch arterial baroreceptors immediately sense the precipitous fall in blood pressure. What neurovascular compensatory reflex is activated to restore Mean Arterial Pressure (MAP)?",
    choices: [
      {
        id: "a",
        text: "Baroreceptors stimulate the vagus nerve to induce profound bradycardia and asystole",
      },
      {
        id: "b",
        text: "Baroreceptors trigger massive release of histamine, causing widespread peripheral vasodilation",
      },
      {
        id: "c",
        text: "Decreased stretch of baroreceptor nerve endings decreases afferent firing to the medullary cardiovascular center, which disinhibits sympathetic outflow, increasing heart rate, myocardial contractility, and peripheral arteriolar vasoconstriction (increasing Systemic Vascular Resistance)",
      },
      {
        id: "d",
        text: "The baroreceptor reflex operates only when blood pressure exceeds 200 mmHg",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Arterial baroreceptors (stretch-sensitive mechanoreceptors located within the carotid sinus [innervated by CN IX] and aortic arch [innervated by CN X]) constantly monitor arterial wall distension. In acute hemorrhage, decreased intravascular volume lowers mean arterial pressure and decreases wall stretch, leading to a marked decrease in afferent nerve firing to the nucleus tractus solitarius in the medulla oblongata. This loss of inhibitory input disinhibits sympathetic autonomic outflow while simultaneously withdrawing parasympathetic (vagal) tone. Sympathetic stimulation releases norepinephrine at beta-1 receptors (causing compensatory tachycardia and increased stroke volume) and alpha-1 receptors (causing arteriolar vasoconstriction, elevating systemic vascular resistance, and venous constriction to autotransfuse blood to the central core). Option c accurately describes the baroreflex.",
    strategy: "Baroreceptor reflex: Hypovolemia -> decreased baroreceptor stretch -> sympathetic activation (tachycardia, vasoconstriction, increased contractility) to support MAP.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "baroreceptor-reflex", "blood-pressure-regulation", "sympathetic-nervous-system", "hypovolemia"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-008",
    categorySlug: "fluid-electrolyte",
    stem: "A client in progressive (decompensated) shock has a blood pressure of 78/42 mmHg, heart rate of 138 bpm, cold mottled extremities, oliguria, and a serum lactate of 6.2 mmol/L. At the cellular and microvascular level, what physiological breakdown defines this stage of shock?",
    choices: [
      {
        id: "a",
        text: "Cells have reverted completely to aerobic metabolism and are producing excess ATP",
      },
      {
        id: "b",
        text: "Precapillary sphincters are tightly constricted while postcapillary venules are wide open",
      },
      {
        id: "c",
        text: "Glomerular filtration rate has doubled, causing severe polyuria",
      },
      {
        id: "d",
        text: "Prolonged hypoperfusion forces widespread anaerobic glycolysis, generating systemic lactic acidosis; cellular ATP depletion causes failure of precapillary sphincters (which dilate) while postcapillary venules remain constricted, causing massive capillary sludging, hydrostatic fluid extravasation into interstitial spaces, and microvascular thrombosis",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "In the progressive (decompensated) stage of shock, homeostatic compensatory reflexes are overwhelmed. Persistent severe tissue hypoperfusion starves cells of oxygen, forcing prolonged anaerobic metabolism that produces heavy lactic acidosis (lactate >4–6 mmol/L). Local acidemia and hyperkalemia paralyze the precapillary arteriolar sphincters (causing them to dilate), while postcapillary venules remain constricted due to sympathetic acidosis resistance. This anatomical imbalance skyrockets hydrostatic capillary pressure, driving fluid and plasma proteins out of the vascular space into the interstitium (third-spacing and hemoconcentration). Sludged red cells aggregate in microvessels, producing microthrombi and irreversible end-organ cellular necrosis (MODS). Option d correctly explains progressive shock microvascular failure.",
    strategy: "Stages of shock: Progressive stage = compensatory failure -> anaerobic lactic acidosis -> precapillary sphincter failure with postcapillary venular constriction -> massive capillary leak and MODS.",
    difficulty: "hard",
    tags: ["anatomy-physiology", "stages-of-shock", "progressive-shock", "lactic-acidosis", "microcirculation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-009",
    categorySlug: "fluid-electrolyte",
    stem: "A client who underwent a modified radical mastectomy with complete Axillary Lymph Node Dissection 6 months ago develops significant, non-pitting edema of the ipsilateral arm. What anatomical and physiological disruption of Starling forces produces this secondary lymphedema?",
    choices: [
      {
        id: "a",
        text: "Surgical excision of axillary lymphatics permanently destroys the low-pressure drainage pathway responsible for returning filtered interstitial fluid and large plasma proteins back into the subclavian venous circulation, leading to high-protein fluid accumulation and progressive fibroadipose tissue proliferation",
      },
      {
        id: "b",
        text: "Lymph nodes produce systemic albumin; removing them drops plasma oncotic pressure to zero throughout the entire body",
      },
      {
        id: "c",
        text: "The surgical incision directly severed the brachial artery, eliminating arterial blood flow to the limb",
      },
      {
        id: "d",
        text: "The ipsilateral arm develops retrograde arterial blood flow that drowns skeletal muscle",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Under normal microvascular Starling equilibrium, capillary hydrostatic pressure filtration slightly exceeds plasma colloid osmotic reabsorption, resulting in an obligate net filtration of 2 to 4 liters of fluid per day into the interstitial space. The lymphatic system functions as the exclusive drainage network that vacuums up this fluid and extravasated macromolecules (proteins, fats, cellular debris) and channels it back into the venous circulation via the thoracic duct and right lymphatic duct into the subclavian veins. Surgical resection or radiation of axillary lymph nodes obliterates this anatomical drainage conduit. High-protein fluid stagnates in subcutaneous tissue, elevating tissue oncotic pressure, attracting more fluid, triggering chronic inflammation, fibroblast activation, and progressive fibroadipose deposition (lymphedema). This is why no blood pressure cuffs, IV insertions, or venipunctures are permitted on the affected arm. Option a is correct.",
    strategy: "Lymphatic physiology: Lymphatics return interstitial fluid and extravasated proteins to the venous circulation. Resection causes high-protein interstitial accumulation (lymphedema).",
    difficulty: "easy",
    tags: ["anatomy-physiology", "lymphatic-drainage", "lymphedema", "mastectomy", "starling-forces"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-010",
    categorySlug: "fluid-electrolyte",
    stem: "A premature infant born at 28 weeks of gestation exhibits severe grunting, nasal flaring, intercostal retractions, and cyanosis shortly after birth. The neonatologist diagnoses Neonatal Respiratory Distress Syndrome (NRDS) due to surfactant deficiency. Based on the Law of Laplace (Pressure = 2 x Surface Tension / Radius), how does pulmonary surfactant prevent alveolar collapse?",
    choices: [
      {
        id: "a",
        text: "Surfactant acts as a thick glue that adheres the visceral pleura to the parietal pleura permanently",
      },
      {
        id: "b",
        text: "Synthesized by Type II alveolar cells (pneumocytes), surfactant contains dipalmitoylphosphatidylcholine, which disrupts water molecule hydrogen bonding at the air-liquid interface, dramatically decreasing alveolar surface tension and preventing smaller alveoli from collapsing at end-expiration",
      },
      {
        id: "c",
        text: "Surfactant transforms carbon dioxide directly into liquid glucose inside the bronchial tree",
      },
      {
        id: "d",
        text: "Surfactant completely solidifies the alveoli so they cannot expand during inspiration",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The Law of Laplace states that the collapsing inward pressure (P) inside an elastic sphere is directly proportional to surface tension (T) and inversely proportional to radius (r): P = 2T / r. Without surfactant, smaller alveoli (smaller r) would generate much higher collapsing pressures than larger alveoli, causing smaller alveoli to empty their air into larger ones and collapse completely (diffuse micro-atelectasis). Pulmonary surfactant (a complex lipoprotein predominantly dipalmitoylphosphatidylcholine secreted by Type II alveolar pneumocytes beginning around 24–28 weeks and maturing around 35 weeks) intersperses between water molecules at the alveolar air-liquid interface. It markedly reduces surface tension, equalizes pressure across alveoli of varying sizes, increases pulmonary compliance, and prevents end-expiratory collapse. In NRDS, lack of surfactant causes massive atelectasis, severe V/Q mismatch, and respiratory failure. Option b accurately explains this biophysics.",
    strategy: "Alveolar biophysics: Type II pneumocytes secrete surfactant (dipalmitoylphosphatidylcholine), which reduces alveolar surface tension (Laplace law) and prevents end-expiratory atelectasis.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "pulmonary-surfactant", "type-ii-pneumocytes", "law-of-laplace", "respiratory-distress-syndrome"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-011",
    categorySlug: "fluid-electrolyte",
    stem: "A septic, febrile client in the ICU has arterial blood gas results showing severe metabolic acidosis (pH 7.21, PaCO2 48 mmHg, PaO2 80 mmHg, Temperature 39.4 °C). How do these physiological conditions alter the Oxyhemoglobin Dissociation Curve, and what is the clinical effect on tissue oxygen delivery?",
    choices: [
      {
        id: "a",
        text: "They shift the curve sharply to the left, locking oxygen onto hemoglobin and preventing any release to peripheral tissues",
      },
      {
        id: "b",
        text: "They destroy hemoglobin molecules so that oxygen cannot be carried in the blood at all",
      },
      {
        id: "c",
        text: "They shift the curve to the RIGHT (the Bohr effect), decreasing hemoglobin's affinity for oxygen and facilitating the offloading and release of oxygen molecules to hypermetabolic, ischemic peripheral tissues",
      },
      {
        id: "d",
        text: "The oxyhemoglobin dissociation curve is completely fixed and unaffected by pH, CO2, or temperature",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The oxyhemoglobin dissociation curve describes the relationship between partial pressure of oxygen (PaO2) and percentage of hemoglobin saturation (SaO2). A shift to the RIGHT (Bohr effect) occurs when tissues are metabolically active and starved for oxygen, triggered by: 1) Decreased pH (acidosis / elevated H+); 2) Increased PaCO2 (hypercapnia); 3) Increased temperature (fever/hyperthermia); and 4) Increased 2,3-diphosphoglycerate (2,3-DPG). A rightward shift lowers hemoglobin's binding affinity for oxygen, meaning hemoglobin more readily releases and unloads oxygen into ischemic capillary beds at any given PaO2. Conversely, a shift to the LEFT (caused by alkalosis, hypothermia, hypocapnia, or carboxyhemoglobin) increases oxygen affinity, holding oxygen tightly and impairing tissue offloading. Option c correctly describes this physiological adaptation.",
    strategy: "Oxyhemoglobin curve: CADET face RIGHT (CO2, Acidity/H+, 2,3-DPG, Exercise, Temp). Right shift = decreased affinity = easier O2 unloading to tissues.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "oxyhemoglobin-dissociation-curve", "bohr-effect", "acidosis", "oxygen-unloading"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-012",
    categorySlug: "fluid-electrolyte",
    stem: "Under normal physiological conditions in a healthy individual at rest, which chemical parameter and anatomical receptor provide the primary homeostatic stimulus to regulate respiratory rate and depth (ventilation)?",
    choices: [
      {
        id: "a",
        text: "Serum potassium concentration sensed by baroreceptors in the renal glomerulus",
      },
      {
        id: "b",
        text: "Arterial oxygen saturation (SaO2) below 95% sensed by tactile pacinian corpuscles in the skin",
      },
      {
        id: "c",
        text: "Blood glucose fluctuations sensed by hypothalamic osmoreceptors",
      },
      {
        id: "d",
        text: "Arterial carbon dioxide tension (PaCO2), which diffuses across the blood-brain barrier into cerebrospinal fluid, generating hydrogen ions that stimulate Central Chemoreceptors in the ventrolateral medulla oblongata",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "In healthy individuals, the primary chemical driver of ventilation is arterial PaCO2 (normal 35–45 mmHg), not oxygen. Carbon dioxide is lipid-soluble and diffuses freely across the blood-brain barrier into cerebrospinal fluid (CSF). In CSF, CO2 hydrates to form carbonic acid (H2CO3), which dissociates into bicarbonate (HCO3-) and hydrogen ions (H+). Because CSF contains minimal protein buffering capacity, even minor rises in PaCO2 (hypercapnia) cause rapid drops in CSF pH. These free H+ ions directly excite Central Chemoreceptors situated on the ventrolateral surface of the medulla oblongata, signaling the respiratory rhythmicity center to increase minute ventilation (rate and tidal volume) to blow off excess CO2. Peripheral chemoreceptors (carotid and aortic bodies) respond primarily to severe hypoxemia (PaO2 < 60 mmHg). Option d is physiologically correct.",
    strategy: "Control of ventilation: Primary chemical drive is PaCO2 stimulating central chemoreceptors in the medulla oblongata via CSF pH/H+ changes.",
    difficulty: "easy",
    tags: ["anatomy-physiology", "control-of-breathing", "central-chemoreceptors", "medulla-oblongata", "paco2-drive"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-013",
    categorySlug: "fluid-electrolyte",
    stem: "An elderly client with baseline chronic kidney disease and mild dehydration is prescribed a high-dose nonsteroidal anti-inflammatory drug (NSAID) and an Angiotensin-Converting Enzyme (ACE) inhibitor simultaneously. Within 5 days, the client's serum creatinine jumps from 1.1 mg/dL to 3.8 mg/dL. How do these medications disrupt glomerular hemodynamics and Glomerular Filtration Rate (GFR)?",
    choices: [
      {
        id: "a",
        text: "NSAIDs inhibit vasodilatory prostaglandins, constricting the AFFERENT arteriole, while ACE inhibitors block angiotensin II, dilating the EFFERENT arteriole; this eliminates the intraglomerular hydrostatic pressure gradient necessary to drive filtration, triggering acute renal failure",
      },
      {
        id: "b",
        text: "NSAIDs cause immediate destruction of the loop of Henle by generating stomach acid in the kidneys",
      },
      {
        id: "c",
        text: "ACE inhibitors cause renal collecting ducts to rupture into the peritoneal cavity",
      },
      {
        id: "d",
        text: "The combination converts all circulating creatinine into toxic bile crystals",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Glomerular Filtration Rate (GFR) depends on intraglomerular capillary hydrostatic pressure, which is regulated by opposing tone in the afferent (inflow) and efferent (outflow) arterioles. 1) Renal prostaglandins (PGE2, PGI2) selectively vasodilate the AFFERENT arteriole to maintain inflow during low perfusion states. NSAIDs inhibit cyclooxygenase (COX), blocking prostaglandin synthesis, causing afferent vasoconstriction and starving the glomerulus of blood flow; 2) Angiotensin II selectively vasoconstricts the EFFERENT arteriole, maintaining intraglomerular pressure (like putting a thumb on a garden hose). ACE inhibitors block angiotensin II, causing efferent vasodilation and depressurizing the glomerular capillary bed. Combining NSAIDs (afferent clamp) and ACE inhibitors/ARBs (efferent open) destroys intraglomerular pressure, precipitating acute prerenal kidney injury ('triple whammy' with diuretics). Option a is correct.",
    strategy: "Renal hemodynamics: Prostaglandins dilate Afferent arteriole; Angiotensin II constricts Efferent arteriole. NSAID (afferent constriction) + ACEI (efferent dilation) collapses GFR.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "glomerular-filtration-rate", "afferent-efferent-arteriole", "nsaids-ace-inhibitors", "renal-hemodynamics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-014",
    categorySlug: "fluid-electrolyte",
    stem: "A client experiences acute renal hypoperfusion from severe dehydration. What sequential hormonal cascade is triggered by the Juxtaglomerular Apparatus (JGA) to conserve volume and restore systemic arterial pressure?",
    choices: [
      {
        id: "a",
        text: "The kidney synthesizes insulin to lower intravascular volume and reduce vascular resistance",
      },
      {
        id: "b",
        text: "Juxtaglomerular cells secrete Renin, which cleaves liver Angiotensinogen to Angiotensin I; pulmonary ACE converts it to Angiotensin II, a potent systemic vasoconstrictor that stimulates adrenal Aldosterone release, promoting renal sodium and water reabsorption while excreting potassium",
      },
      {
        id: "c",
        text: "Renal collecting ducts release parathyroid hormone to dump all sodium into urine",
      },
      {
        id: "d",
        text: "The glomerulus destroys antidiuretic hormone to cause profuse diuresis",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The Renin-Angiotensin-Aldosterone System (RAAS) is the body's primary long-term regulator of blood pressure and extracellular fluid volume: 1) Juxtaglomerular granular cells in the afferent arteriole detect decreased renal perfusion pressure (and macula densa senses low tubular NaCl), releasing the enzyme RENIN; 2) Renin cleaves hepatically produced Angiotensinogen into Angiotensin I; 3) Angiotensin-Converting Enzyme (ACE, predominantly in pulmonary vascular endothelium) cleaves Angiotensin I into ANGIOTENSIN II; 4) Angiotensin II exerts potent systemic vasoconstriction, stimulates hypothalamic thirst and ADH release, and stimulates the adrenal cortex (zona glomerulosa) to secrete ALDOSTERONE; 5) Aldosterone upregulates Na+/K+ ATPase pumps in distal tubules and collecting ducts, reabsorbing sodium and water while excreting potassium and H+. Option b accurately traces this cascade.",
    strategy: "RAAS cascade: Low renal perfusion -> Renin -> Angiotensin I -> ACE -> Angiotensin II (vasoconstriction) -> Aldosterone (Na+/H2O retention, K+ excretion).",
    difficulty: "easy",
    tags: ["anatomy-physiology", "raas", "renin", "angiotensin-ii", "aldosterone"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-015",
    categorySlug: "fluid-electrolyte",
    stem: "A client with acute Diabetic Ketoacidosis (DKA) presents with arterial blood gas (ABG) values: pH 7.15, PaCO2 24 mmHg, HCO3- 8 mEq/L. The nurse observes rapid, deep, labored breathing (Kussmaul respirations). What physiological acid-base compensatory mechanism is occurring?",
    choices: [
      {
        id: "a",
        text: "The kidneys are dumping bicarbonate into urine to make the blood more acidic",
      },
      {
        id: "b",
        text: "The lungs are holding onto carbon dioxide to create more carbonic acid",
      },
      {
        id: "c",
        text: "Metabolic acidosis (accumulation of ketoacids consuming bicarbonate) is being compensated by rapid respiratory hyperventilation (Kussmaul breathing) to blow off carbon dioxide, reducing carbonic acid and shifting the equilibrium to raise systemic pH toward normal",
      },
      {
        id: "d",
        text: "The client is experiencing primary uncompensated respiratory alkalosis",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The carbonic acid-bicarbonate buffer system operates according to the equilibrium: CO2 + H2O <-> H2CO3 <-> H+ + HCO3-. In DKA, excessive ketoacids (acetoacetic acid, beta-hydroxybutyric acid) dissociate into hydrogen ions (H+), which bind to and consume circulating bicarbonate (HCO3-), causing a primary severe metabolic acidosis (pH 7.15, HCO3- 8 mEq/L). The respiratory center in the brainstem detects the high arterial H+ and responds rapidly by triggering Kussmaul respirations (deep, rapid breathing). Blowing off CO2 lowers arterial PaCO2 (24 mmHg), which pulls the chemical equilibrium to the left, decreasing H2CO3 and free H+ ions and elevating pH back toward normal physiological range (partial respiratory compensation). Option c correctly identifies this physiological compensatory mechanism.",
    strategy: "Acid-base compensation: Primary metabolic acidosis triggers respiratory hyperventilation (Kussmaul breathing) to blow off CO2 and reduce carbonic acid/H+ concentration.",
    difficulty: "easy",
    tags: ["anatomy-physiology", "acid-base-balance", "kussmaul-respirations", "metabolic-acidosis", "carbonic-acid-bicarbonate-buffer"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-016",
    categorySlug: "fluid-electrolyte",
    stem: "A client with an acute intracranial epidural hematoma rapidly deteriorates. Based on the Monro-Kellie Hypothesis, why does an expanding intracranial mass eventually cause catastrophic, precipitous spikes in Intracranial Pressure (ICP)?",
    choices: [
      {
        id: "a",
        text: "The cranial vault expands like an elastic balloon to accommodate unlimited fluid volumes",
      },
      {
        id: "b",
        text: "Brain tissue dissolves completely into air whenever blood touches the meninges",
      },
      {
        id: "c",
        text: "Intracranial pressure is regulated exclusively by atmospheric barometric pressure",
      },
      {
        id: "d",
        text: "The rigid, non-compliant adult skull has a fixed internal volume consisting of brain tissue (80%), blood (10%), and cerebrospinal fluid (10%); once initial compensatory displacement of CSF into the spinal subarachnoid space and venous blood displacement are exhausted, any further volume expansion causes an exponential spike in ICP and brain herniation",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The Monro-Kellie doctrine states that the rigid, inelastic cranial vault is a closed box containing a constant total volume comprised of three distinct compartments: Brain parenchymal tissue (~80%), Intravascular blood (~10%), and Cerebrospinal fluid (CSF, ~10%). Because the skull cannot expand, an increase in the volume of one component (or an added mass like a hematoma or tumor) must be compensated by an equal decrease in the volume of the other components to maintain normal ICP (5–15 mmHg). Early compensation occurs by displacing CSF into the thecal sac and compressing cerebral venous sinuses. Once these compensatory buffers are exhausted (the compliance curve breakpoint), even a tiny addition of 1 to 2 mL of volume causes an exponential, catastrophic surge in ICP, collapsing cerebral perfusion pressure and causing fatal brainstem herniation. Option d is correct.",
    strategy: "Neurophysiology: Monro-Kellie hypothesis = rigid skull contains fixed volume (brain 80%, blood 10%, CSF 10%). Once CSF/blood displacement buffers fail, ICP spikes exponentially.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "monro-kellie-doctrine", "intracranial-pressure", "cerebral-perfusion", "epidural-hematoma"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-017",
    categorySlug: "fluid-electrolyte",
    stem: "A nurse is teaching nursing students to contrast the physiological responses of the Sympathetic and Parasympathetic divisions of the Autonomic Nervous System (ANS). Which table accurately depicts their respective receptor types, neurotransmitters, and end-organ effects?",
    choices: [
      {
        id: "a",
        text: "Sympathetic division: Adrenergic neurotransmitters (norepinephrine/epinephrine) acting on alpha and beta receptors produce pupillary dilation (mydriasis), tachycardia, bronchodilation, and glycogenolysis. Parasympathetic division: Cholinergic neurotransmitter (acetylcholine) acting on muscarinic receptors produces pupillary constriction (miosis), bradycardia, bronchoconstriction, and stimulated gastrointestinal motility and digestion",
      },
      {
        id: "b",
        text: "Sympathetic division: Cholinergic nerves cause profound bradycardia and heavy urination. Parasympathetic division: Adrenergic nerves cause tachycardia and pupil dilation",
      },
      {
        id: "c",
        text: "Both divisions produce identical physiological actions through histamine release",
      },
      {
        id: "d",
        text: "The sympathetic system controls only skeletal muscles under voluntary motor cortex command",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The Autonomic Nervous System consists of two anatomically and functionally distinct branches: 1) SYMPATHETIC ('fight-or-flight', thoracolumbar outflow): Postganglionic fibers release norepinephrine (and adrenal medulla releases epinephrine) targeting alpha-1 (vasoconstriction, mydriasis), beta-1 (increased heart rate and myocardial contractility), and beta-2 receptors (bronchodilation, hepatic glycogenolysis, decreased gut motility); 2) PARASYMPATHETIC ('rest-and-digest', craniosacral outflow via CN III, VII, IX, X and pelvic splanchnic nerves): Postganglionic fibers release Acetylcholine targeting Muscarinic receptors (M1–M5), producing pupillary constriction (miosis), lacrimation, salivation, vagal bradycardia, bronchoconstriction, and stimulation of peristalsis and bladder emptying. Option a accurately details these opposite actions.",
    strategy: "Autonomic nervous system: Sympathetic = Adrenergic (norepinephrine) -> fight-or-flight (mydriasis, tachycardia, bronchodilation). Parasympathetic = Cholinergic (ACh) -> rest-and-digest (bradycardia, miosis, digestion).",
    difficulty: "easy",
    tags: ["anatomy-physiology", "autonomic-nervous-system", "sympathetic-vs-parasympathetic", "adrenergic-cholinergic", "neurophysiology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-018",
    categorySlug: "fluid-electrolyte",
    stem: "A client with traumatic head injury demonstrates a unilateral, non-reactive, dilated (blown) right pupil measuring 7 mm, with an intact, briskly reactive left pupil measuring 3 mm. What neuroanatomical structure and cranial nerve are being mechanically compressed against the tentorium cerebelli by an uncal herniation?",
    choices: [
      {
        id: "a",
        text: "Cranial Nerve I (Olfactory) in the cribriform plate",
      },
      {
        id: "b",
        text: "Cranial Nerve III (Oculomotor nerve), specifically its superficial parasympathetic pupilloconstrictor fibers running along its outer perimeter",
      },
      {
        id: "c",
        text: "Cranial Nerve VIII (Vestibulocochlear nerve) within the internal auditory meatus",
      },
      {
        id: "d",
        text: "Cranial Nerve XII (Hypoglossal nerve) at the base of the tongue",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The pupillary light reflex relies on afferent signaling via the Optic nerve (CN II) and efferent parasympathetic motor signaling via the Oculomotor nerve (CN III). The parasympathetic fibers responsible for pupillary constriction (innervating the iris sphincter pupillae muscle) travel on the outer, superficial perimeter of the third cranial nerve. In uncal (transtentorial) herniation, the medial aspect of the temporal lobe (uncus) herniates downward across the rigid edge of the tentorial notch, directly compressing the ipsilateral CN III against the petroclinoid ligament. Because pupilloconstrictor fibers lie on the outside of the nerve trunk, external mechanical compression selectively knocks them out first, allowing unopposed sympathetic pupillodilator action and producing an ipsilateral fixed, dilated 'blown' pupil (an ominous sign of impending brainstem failure). Option b correctly identifies this anatomical localization.",
    strategy: "Neuroanatomy: Uncal herniation compresses Cranial Nerve III (Oculomotor nerve) parasympathetic fibers against the tentorium -> ipsilateral dilated, fixed (blown) pupil.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "cranial-nerve-iii", "oculomotor-nerve", "uncal-herniation", "blown-pupil"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-019",
    categorySlug: "fluid-electrolyte",
    stem: "A neuro-trauma client with severe cerebral contusions exhibits progressive neurological decline: blood pressure rises from 124/80 to 198/62 mmHg (widening pulse pressure), heart rate drops from 86 to 44 beats/min (bradycardia), and the respiratory pattern becomes slow, deep, and irregular (ataxic). What pathophysiological triad is this, and what does it indicate?",
    choices: [
      {
        id: "a",
        text: "Beck's Triad, indicating acute cardiac tamponade from pericardial effusion",
      },
      {
        id: "b",
        text: "Virchow's Triad, indicating deep vein thrombosis of the femoral vein",
      },
      {
        id: "c",
        text: "Cushing's Triad, indicating severe, life-threatening intracranial hypertension with critical brainstem ischemia and impending fatal herniation through the foramen magnum",
      },
      {
        id: "d",
        text: "Charcot's Triad, indicating acute ascending bacterial cholangitis",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Cushing's Triad is a classic physiological response to terminal intracranial hypertension and medullary ischemia: 1) Severe Systolic Hypertension with WIDENING PULSE PRESSURE: When ICP approaches mean arterial pressure, brainstem hypoperfusion and ischemia trigger a massive sympathetic surge (Cushing reflex) to forcibly drive blood flow into cerebral circulation; 2) BRADYCARDIA: Extreme systemic hypertension stimulates carotid and aortic baroreceptors, triggering intense vagal outflow to slow the heart rate; 3) IRREGULAR RESPIRATIONS (Cheyne-Stokes or ataxic breathing): Mechanical compression and distortion of the respiratory centers in the medulla oblongata and pons cause erratic breathing. Cushing's triad is a late, grave clinical sign indicating impending or ongoing cerebral herniation requiring emergency hyperosmolar therapy (mannitol/3% saline) and neurosurgical decompression. Option c is correct.",
    strategy: "Neurological emergencies: Cushing's Triad = Systolic hypertension with widening pulse pressure + Bradycardia + Irregular respirations = severe intracranial hypertension / impending herniation.",
    difficulty: "easy",
    tags: ["anatomy-physiology", "cushings-triad", "intracranial-hypertension", "brainstem-ischemia", "herniation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP2-020",
    categorySlug: "fluid-electrolyte",
    stem: "A nurse is evaluating two clients in shock. Client 1 has cold, pale, clammy extremities, jugular venous distension (JVD), pulmonary crackles, elevated pulmonary capillary wedge pressure (PCWP), and low Cardiac Index (CI). Client 2 has warm, flushed extremities, bounding pulses, low systemic vascular resistance (SVR), and low PCWP. How do cardiovascular pathophysiology and hemodynamic profiles differentiate these shock states?",
    choices: [
      {
        id: "a",
        text: "Client 1 has septic shock from fungal bacteremia; Client 2 has hemorrhagic shock from arterial laceration",
      },
      {
        id: "b",
        text: "Client 1 has neurogenic shock from spinal trauma; Client 2 has obstructive shock from tension pneumothorax",
      },
      {
        id: "c",
        text: "Both clients have identical hypovolemic dehydration that should be treated with immediate fluid restriction",
      },
      {
        id: "d",
        text: "Client 1 exhibits Cardiogenic Shock (myocardial pump failure causing backward venous congestion, high preload, low cardiac output, and compensatory peripheral vasoconstriction), whereas Client 2 exhibits Distributive/Septic Shock (systemic endotoxin-mediated vasodilation causing low afterload/SVR, peripheral blood pooling, and a warm hyperdynamic phase)",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Shock is classified into distinct hemodynamic profiles based on Cardiac Output (CO), Preload (CVP/PCWP), and Afterload (SVR): 1) CARDIOGENIC SHOCK (Client 1): Primary myocardial pump failure (e.g., massive anterior MI). Stroke volume plummets (low CI), blood backs up into the pulmonary circulation (elevated PCWP) and systemic venous circulation (elevated CVP/JVD), and sympathetic compensatory reflex vasoconstricts peripheral arterioles (high SVR), causing cold, clammy, cyanotic extremities; 2) DISTRIBUTIVE / SEPTIC SHOCK (Client 2): Inflammatory cytokines and nitric oxide induce widespread peripheral vasodilation (profoundly low SVR/afterload). Blood pools peripherally, making skin warm, flushed, and bounding early on (hyperdynamic warm shock), with low filling pressures (low CVP/PCWP). Option d correctly contrasts these hemodynamic mechanisms.",
    strategy: "Hemodynamic profiles: Cardiogenic = pump failure -> high preload (PCWP/JVD), low CO, high SVR (cold/clammy). Distributive/Septic = vasodilation -> low SVR, low preload, warm/flushed peripheries.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "cardiogenic-shock", "septic-shock", "hemodynamic-profiles", "systemic-vascular-resistance"],
    isFree: true,
  },
];
