import type { AuthoredQuestion } from "./authored-bank";

export const AP2_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-AP2-001",
    categorySlug: "fluid-electrolyte",
    stem: "A client with blood type O positive accidentally receives an intravenous infusion of type A positive packed red blood cells. Within 10 minutes, the client complains of crushing chest pain, dyspnea, severe bilateral flank pain, and fever. What immunological and physiological mechanism causes this acute hemolytic transfusion reaction (AHTR)?",
    choices: [
      {
        id: "a",
        text: "Preformed anti-A IgM binds donor A antigen, fixes complement and lyses red cells intravascularly, releasing free haemoglobin",
      },
      {
        id: "b",
        text: "Donor red cells contain potassium that precipitates with calcium in the renal tubules, causing flank pain and oliguria",
      },
      {
        id: "c",
        text: "Donor white cells release cytokines that activate recipient complement and cause pulmonary capillary leak",
      },
      {
        id: "d",
        text: "Recipient antibodies coat donor platelets, causing their sequestration in the spleen and a febrile reaction",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Individuals with type O blood produce pre-formed naturally occurring IgM antibodies (isohemagglutinins) against both A and B erythrocyte surface antigens. When type A red blood cells are erroneously infused, recipient anti-A IgM antibodies immediately bind to the donor red cell A antigens, triggering the classical complement pathway (membrane attack complex C5b-9). This causes rapid, catastrophic intravascular hemolysis, releasing free hemoglobin into plasma (causing hemoglobinuria and acute tubular necrosis/flank pain), activating clotting factor XII (disseminated intravascular coagulation), and releasing inflammatory anaphylatoxins (C3a, C5a) that produce hypotension, bronchospasm, and shock. Option a accurately details this life-threatening pathophysiology. Why the other options fail: option b invents potassium-calcium stones, which are not a transfusion reaction. Option c blames albumin neutralising white cells, which is not a mechanism. Option d has donor blood mutating recipient marrow, which cannot happen within ten minutes or at all.",
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
        text: "Platelets expose phospholipid and release calcium, which converts prothrombin directly into fibrin",
      },
      {
        id: "b",
        text: "Thrombin activates protein C, which cleaves fibrinogen into the insoluble mesh that forms the clot",
      },
      {
        id: "c",
        text: "Factor Xa converts prothrombin to thrombin, which cleaves fibrinogen into cross-linked fibrin strands",
      },
      {
        id: "d",
        text: "Tissue factor converts fibrinogen directly into fibrin without the need for thrombin",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Hemostasis occurs in two interconnected phases: 1) Primary hemostasis involves transient vasoconstriction, von Willebrand factor binding to exposed subendothelial collagen, and platelet adhesion, activation, and aggregation to form an unstable platelet plug; 2) Secondary hemostasis involves the coagulation cascade (intrinsic and extrinsic pathways), which converge at the common pathway: Factor X is activated to Factor Xa (with Factor Va, calcium, and phospholipids forming the prothrombinase complex). This complex converts prothrombin into active THROMBIN. Thrombin then cleaves soluble circulating FIBRINOGEN into insoluble FIBRIN monomers, which are cross-linked by Factor XIIIa into a resilient, insoluble fibrin mesh that stabilizes the clot. Option c accurately identifies this core biochemical step. Why the other options fail: option a stops at platelet phospholipid and converts prothrombin without thrombin. Option b uses protein C, which is an anticoagulant and does the opposite. Option d skips thrombin, and fibrinogen cannot be converted to fibrin without it.",
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
        text: "Widespread coagulation consumes platelets and factors, so the patient bleeds while clots form in the microcirculation",
      },
      {
        id: "b",
        text: "Vasodilation and capillary leak produce the bleeding, while the coagulation cascade remains inactive throughout",
      },
      {
        id: "c",
        text: "Microthrombi consume platelets and factors, but fibrinolysis is suppressed, so the patient clots without bleeding",
      },
      {
        id: "d",
        text: "Fibrinogen is consumed faster than the liver can replace it, so bleeding occurs while coagulation tests stay normal",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Disseminated Intravascular Coagulation (DIC) is a complex consumptive coagulopathy triggered by systemic endothelial injury, endotoxins, or tissue factor release in severe sepsis, trauma, or obstetric emergencies. Massive systemic activation of thrombin creates widespread microvascular fibrin thrombi that occlude small arterioles and capillaries, causing end-organ ischemia and tissue infarction (e.g., gangrene of digits, renal cortical necrosis). Paradoxically, this relentless micro-thrombosis completely exhausts the body's circulating stores of platelets, fibrinogen, and clotting factors (consumptive phase), while secondary hyperfibrinolysis generates high levels of fibrin degradation products (D-dimer) that act as potent anticoagulants, producing catastrophic spontaneous hemorrhage (oozing from IV sites, mucosal bleeding, internal hematomas). Option b correctly explains this paradox. Why the other options fail: option a describes polycythaemia, the opposite of the consumptive thrombocytopenia of DIC. Option c suppresses fibrinolysis, but DIC produces both clotting and bleeding. Option d turns fibrinogen into gastric acid, which is not a process.",
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
        text: "Tachycardia increases blood velocity, which shears red cells and reduces oxygen delivery",
      },
      {
        id: "b",
        text: "Tachycardia shortens diastole, when most coronary flow and ventricular filling occur, while oxygen demand rises",
      },
      {
        id: "c",
        text: "Tachycardia compresses the coronary arteries during systole and reduces flow to the subendocardium",
      },
      {
        id: "d",
        text: "Tachycardia increases oxygen extraction to its maximum, so any further demand cannot be met",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Unlike all other systemic vascular beds which are perfused during systole, the left ventricular myocardium is perfused almost entirely during ventricular DIASTOLE. During systole, high intramyocardial compressive forces compress subendocardial coronary capillaries, and open aortic valve leaflets partially shield the coronary ostia. When the aortic valve closes in diastole, coronary perfusion pressure peaks. At rapid heart rates (e.g., >150–180 bpm), the cardiac cycle shortens primarily at the expense of diastolic duration (diastolic filling time plummets), severely curtailing coronary perfusion time. Simultaneously, tachycardia skyrockets myocardial metabolic oxygen consumption (MVO2), producing acute supply-demand mismatch and profound subendocardial ischemia (angina and ST depressions). Option a is physiologically correct. Why the other options fail: option c puts the compression in systole, but coronary flow is predominantly diastolic, which is the point. Option d says extraction is already maximal, which is true at rest but is not the supply-demand mechanism asked for. Option a invokes shear haemolysis, which does not occur at this rate.",
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
        text: "Obstruction raises left ventricular end-diastolic pressure, which backs up into the pulmonary veins",
      },
      {
        id: "b",
        text: "Obstruction causes blood to back up into the vena cavae, raising jugular venous pressure before the lungs are affected",
      },
      {
        id: "c",
        text: "Obstruction increases left ventricular systolic pressure, causing concentric hypertrophy and aortic dilatation",
      },
      {
        id: "d",
        text: "Obstruction to left ventricular filling raises left atrial and pulmonary venous pressures, causing congestion and later right heart failure",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The mitral (bicuspid) valve separates the left atrium from the left ventricle. In mitral stenosis, fusion and calcification of the valve leaflets obstruct blood flow during diastole from the left atrium into the left ventricle. This anatomical restriction creates a high pressure gradient, causing marked left atrial dilation and elevated left atrial pressure. Because pulmonary veins lack valves, this elevated pressure transmits retrograde directly into the pulmonary venous circulation and pulmonary capillaries. When hydrostatic capillary pressure exceeds plasma oncotic pressure (~25 mmHg), fluid transudates into the pulmonary interstitium and alveoli (orthopnea, dyspnea, crackles, pulmonary edema). Chronic pulmonary venous hypertension induces pulmonary arteriolar remodeling, pulmonary arterial hypertension, and secondary right ventricular hypertrophy and failure. Option d correctly charts this hemodynamic pathway. Why the other options fail: option a puts the obstruction after the ventricle, but the block is at the mitral valve, so ventricular filling pressure is low, not high. Option b backs blood into the vena cavae first, which happens late and only after the lungs. Option c raises systolic pressure, which stenosis does not do.",
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
        text: "Venodilation reduces afterload so the left ventricle empties more completely, and the failing ventricle recovers its stroke volume",
      },
      {
        id: "b",
        text: "Venodilation increases venous capacitance, so venous return falls, end-diastolic pressure drops and pulmonary congestion eases",
      },
      {
        id: "c",
        text: "Venodilation dilates the pulmonary arterioles directly, so blood is redistributed away from the congested alveoli",
      },
      {
        id: "d",
        text: "Venodilation increases coronary perfusion pressure, so the ischaemic myocardium recovers its contractility",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Cardiac Output is determined by Heart Rate and Stroke Volume (CO = HR x SV). Stroke volume depends on PRELOAD (ventricular stretch/end-diastolic volume), AFTERLOAD (resistance to ventricular ejection), and CONTRACTILITY. According to the Frank-Starling law, physiological stretching of myocardial fibers optimizes sarcomere actin-myosin overlap. However, in decompensated heart failure, excessive volume overload stretches fibers past their optimal length onto the descending limb of the Starling curve, producing severe wall stress and pulmonary venous congestion. Venodilators like nitroglycerin pool blood in peripheral capacitance veins, decreasing venous return (preload) to the heart. This relieves excessive ventricular end-diastolic wall tension and pulmonary capillary wedge pressure, alleviating dyspnea and pulmonary edema without imposing extra metabolic workload. Option b accurately explains this hemodynamic mechanism. Why the other options fail: option a reduces afterload rather than preload, which is the effect of an arterial dilator. Option c dilates the pulmonary arterioles, which is not what nitroglycerin does at venous doses. Option d improves coronary perfusion, which is not the Frank-Starling mechanism asked for.",
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
        text: "Baroreceptors fire more rapidly when the pressure falls, driving vagal bradycardia and vasodilation",
      },
      {
        id: "b",
        text: "Falling stretch reduces afferent firing, disinhibiting the medulla, so sympathetic outflow raises rate, contractility and resistance",
      },
      {
        id: "c",
        text: "Baroreceptors trigger histamine release, producing vasodilation and capillary leak that restore flow",
      },
      {
        id: "d",
        text: "Baroreceptors stop firing at low pressure, so the medulla loses all control of vascular tone until volume is restored",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Arterial baroreceptors (stretch-sensitive mechanoreceptors located within the carotid sinus [innervated by CN IX] and aortic arch [innervated by CN X]) constantly monitor arterial wall distension. In acute hemorrhage, decreased intravascular volume lowers mean arterial pressure and decreases wall stretch, leading to a marked decrease in afferent nerve firing to the nucleus tractus solitarius in the medulla oblongata. This loss of inhibitory input disinhibits sympathetic autonomic outflow while simultaneously withdrawing parasympathetic (vagal) tone. Sympathetic stimulation releases norepinephrine at beta-1 receptors (causing compensatory tachycardia and increased stroke volume) and alpha-1 receptors (causing arteriolar vasoconstriction, elevating systemic vascular resistance, and venous constriction to autotransfuse blood to the central core). Option b accurately describes the baroreflex. Why the other options fail: option a has the receptors firing faster as pressure falls, when stretch falls and firing stops. Option c brings in histamine, which is not part of the baroreflex. Option d says the reflex stops working at low pressure, when that is exactly when it is most active.",
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
        text: "Compensatory vasoconstriction fails in the arterioles, but the venules constrict and the back-pressure forces fluid into the tissues",
      },
      {
        id: "b",
        text: "Anaerobic glycolysis lowers ATP, the precapillary sphincters dilate while venules stay constricted, so fluid leaks and sludges",
      },
      {
        id: "c",
        text: "Prolonged hypoperfusion causes vasodilation of both arterioles and venules, so the pressure falls without capillary leak",
      },
      {
        id: "d",
        text: "ATP depletion opens capillary beds but the venules dilate first, so blood pools and lactate falls as flow improves",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "In the progressive (decompensated) stage of shock, homeostatic compensatory reflexes are overwhelmed. Persistent severe tissue hypoperfusion starves cells of oxygen, forcing prolonged anaerobic metabolism that produces heavy lactic acidosis (lactate >4–6 mmol/L). Local acidemia and hyperkalemia paralyze the precapillary arteriolar sphincters (causing them to dilate), while postcapillary venules remain constricted due to sympathetic acidosis resistance. This anatomical imbalance skyrockets hydrostatic capillary pressure, driving fluid and plasma proteins out of the vascular space into the interstitium (third-spacing and hemoconcentration). Sludged red cells aggregate in microvessels, producing microthrombi and irreversible end-organ cellular necrosis (MODS). Option a correctly explains progressive shock microvascular failure. Why the other options fail: option b dilates both sides of the capillary bed, which would not produce the sludging and leak described. Option d has lactate falling as flow improves, when the patient is worsening. Option a constricts the venules only, which overstates one half of the picture and misses the sphincter failure.",
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
        text: "Lymph nodes produce albumin, so removing them lowers plasma oncotic pressure throughout the body",
      },
      {
        id: "b",
        text: "Axillary lymphatics removed, so protein-rich interstitial fluid cannot drain and accumulates, with later fibroadipose thickening",
      },
      {
        id: "c",
        text: "The incision severed the brachial artery, so arterial inflow stops and the limb swells",
      },
      {
        id: "d",
        text: "Lymphatic obstruction raises capillary hydrostatic pressure by increasing venous pressure in the limb",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Under normal microvascular Starling equilibrium, capillary hydrostatic pressure filtration slightly exceeds plasma colloid osmotic reabsorption, resulting in an obligate net filtration of 2 to 4 liters of fluid per day into the interstitial space. The lymphatic system functions as the exclusive drainage network that vacuums up this fluid and extravasated macromolecules (proteins, fats, cellular debris) and channels it back into the venous circulation via the thoracic duct and right lymphatic duct into the subclavian veins. Surgical resection or radiation of axillary lymph nodes obliterates this anatomical drainage conduit. High-protein fluid stagnates in subcutaneous tissue, elevating tissue oncotic pressure, attracting more fluid, triggering chronic inflammation, fibroblast activation, and progressive fibroadipose deposition (lymphedema). This is why no blood pressure cuffs, IV insertions, or venipunctures are permitted on the affected arm. Option b is correct. Why the other options fail: option a has lymph nodes making albumin, which they do not. Option c severs the brachial artery, which would cause ischaemia, not oedema. Option d raises capillary hydrostatic pressure, which is the mechanism of venous oedema, not of lymphatic obstruction.",
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
        text: "Surfactant is produced by type II cells and lowers surface tension, so small alveoli do not collapse at end-expiration",
      },
      {
        id: "b",
        text: "Surfactant increases surface tension in small alveoli so that they empty into larger ones and equalise pressure",
      },
      {
        id: "c",
        text: "Surfactant is a lipoprotein that keeps the alveolar walls adherent, preventing them from separating during inspiration",
      },
      {
        id: "d",
        text: "Surfactant is produced by type I cells and coats the alveoli, preventing them from over-expanding during inspiration",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The Law of Laplace states that the collapsing inward pressure (P) inside an elastic sphere is directly proportional to surface tension (T) and inversely proportional to radius (r): P = 2T / r. Without surfactant, smaller alveoli (smaller r) would generate much higher collapsing pressures than larger alveoli, causing smaller alveoli to empty their air into larger ones and collapse completely (diffuse micro-atelectasis). Pulmonary surfactant (a complex lipoprotein predominantly dipalmitoylphosphatidylcholine secreted by Type II alveolar pneumocytes beginning around 24–28 weeks and maturing around 35 weeks) intersperses between water molecules at the alveolar air-liquid interface. It markedly reduces surface tension, equalizes pressure across alveoli of varying sizes, increases pulmonary compliance, and prevents end-expiratory collapse. In NRDS, lack of surfactant causes massive atelectasis, severe V/Q mismatch, and respiratory failure. Option d accurately explains this biophysics. Why the other options fail: option d gives surfactant to type I cells, which cover the gas-exchange surface and do not secrete it. Option b raises surface tension, which is the opposite of surfactant action. Option c makes the alveolar walls adherent, which would prevent expansion rather than collapse.",
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
        text: "The curve shifts right as pH falls and temperature rises, so haemoglobin releases oxygen more readily to the tissues",
      },
      {
        id: "b",
        text: "The curve shifts left as carbon dioxide rises, so oxygen is held more tightly by haemoglobin in the tissues",
      },
      {
        id: "c",
        text: "The curve shifts right, but the effect is small and oxygen delivery is unchanged while the acidosis persists",
      },
      {
        id: "d",
        text: "The curve is unaffected by pH, because only 2,3-DPG changes the affinity of haemoglobin",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The oxyhemoglobin dissociation curve describes the relationship between partial pressure of oxygen (PaO2) and percentage of hemoglobin saturation (SaO2). A shift to the RIGHT (Bohr effect) occurs when tissues are metabolically active and starved for oxygen, triggered by: 1) Decreased pH (acidosis / elevated H+); 2) Increased PaCO2 (hypercapnia); 3) Increased temperature (fever/hyperthermia); and 4) Increased 2,3-diphosphoglycerate (2,3-DPG). A rightward shift lowers hemoglobin's binding affinity for oxygen, meaning hemoglobin more readily releases and unloads oxygen into ischemic capillary beds at any given PaO2. Conversely, a shift to the LEFT (caused by alkalosis, hypothermia, hypocapnia, or carboxyhemoglobin) increases oxygen affinity, holding oxygen tightly and impairing tissue offloading. Option c correctly describes this physiological adaptation. Why the other options fail: option a shifts the curve left, which would hold oxygen and worsen delivery. Option b shifts it left as carbon dioxide rises, when carbon dioxide shifts it right. Option d denies the effect of pH, carbon dioxide and temperature altogether.",
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
        text: "Arterial carbon dioxide, sensed by central chemoreceptors in the medulla that respond to the hydrogen ions it generates",
      },
      {
        id: "b",
        text: "Arterial oxygen saturation, sensed by peripheral chemoreceptors that fire when saturation falls below 95%",
      },
      {
        id: "c",
        text: "Arterial pH alone, sensed by aortic baroreceptors that adjust both rate and depth",
      },
      {
        id: "d",
        text: "Carbon dioxide, sensed by carotid body chemoreceptors that respond directly to the gas itself",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "In healthy individuals, the primary chemical driver of ventilation is arterial PaCO2 (normal 35–45 mmHg), not oxygen. Carbon dioxide is lipid-soluble and diffuses freely across the blood-brain barrier into cerebrospinal fluid (CSF). In CSF, CO2 hydrates to form carbonic acid (H2CO3), which dissociates into bicarbonate (HCO3-) and hydrogen ions (H+). Because CSF contains minimal protein buffering capacity, even minor rises in PaCO2 (hypercapnia) cause rapid drops in CSF pH. These free H+ ions directly excite Central Chemoreceptors situated on the ventrolateral surface of the medulla oblongata, signaling the respiratory rhythmicity center to increase minute ventilation (rate and tidal volume) to blow off excess CO2. Peripheral chemoreceptors (carotid and aortic bodies) respond primarily to severe hypoxemia (PaO2 < 60 mmHg). Option d is physiologically correct. Why the other options fail: option a senses potassium in the kidney, which does not drive ventilation. Option b uses tactile corpuscles for oxygen saturation, which do not exist. Option c uses glucose and hypothalamic osmoreceptors, which regulate thirst and ADH, not breathing.",
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
        text: "NSAIDs constrict the efferent arteriole while the ACE inhibitor dilates the afferent, so blood is shunted from the cortex",
      },
      {
        id: "b",
        text: "Both drugs constrict the afferent arteriole, so renal blood flow falls and creatinine rises without a change in filtration pressure",
      },
      {
        id: "c",
        text: "NSAIDs constrict the afferent arteriole by removing prostaglandins, and the ACE inhibitor dilates the efferent, so filtration pressure collapses",
      },
      {
        id: "d",
        text: "The ACE inhibitor reduces aldosterone, so sodium loss drops the blood pressure and the creatinine rises from prerenal causes alone",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Glomerular Filtration Rate (GFR) depends on intraglomerular capillary hydrostatic pressure, which is regulated by opposing tone in the afferent (inflow) and efferent (outflow) arterioles. 1) Renal prostaglandins (PGE2, PGI2) selectively vasodilate the AFFERENT arteriole to maintain inflow during low perfusion states. NSAIDs inhibit cyclooxygenase (COX), blocking prostaglandin synthesis, causing afferent vasoconstriction and starving the glomerulus of blood flow; 2) Angiotensin II selectively vasoconstricts the EFFERENT arteriole, maintaining intraglomerular pressure (like putting a thumb on a garden hose). ACE inhibitors block angiotensin II, causing efferent vasodilation and depressurizing the glomerular capillary bed. Combining NSAIDs (afferent clamp) and ACE inhibitors/ARBs (efferent open) destroys intraglomerular pressure, precipitating acute prerenal kidney injury ('triple whammy' with diuretics). Option c is correct. Why the other options fail: option a reverses the arterioles, giving the NSAID the efferent and the ACE inhibitor the afferent. Option b makes both drugs constrict the afferent, which is not how ACE inhibitors act. Option d explains the creatinine by prerenal volume loss alone, which cannot account for a rise this size in five days.",
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
        text: "Juxtaglomerular cells release renin, which converts angiotensinogen to angiotensin I; ACE in the lung converts it to angiotensin II, which constricts vessels and drives aldosterone",
      },
      {
        id: "b",
        text: "The macula densa releases aldosterone, which drives sodium reabsorption and raises the blood pressure",
      },
      {
        id: "c",
        text: "Renin from juxtaglomerular cells activates angiotensinogen directly to angiotensin II, bypassing the pulmonary step",
      },
      {
        id: "d",
        text: "Juxtaglomerular cells release ADH, which retains water and restores volume without changing vascular tone",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The Renin-Angiotensin-Aldosterone System (RAAS) is the body's primary long-term regulator of blood pressure and extracellular fluid volume: 1) Juxtaglomerular granular cells in the afferent arteriole detect decreased renal perfusion pressure (and macula densa senses low tubular NaCl), releasing the enzyme RENIN; 2) Renin cleaves hepatically produced Angiotensinogen into Angiotensin I; 3) Angiotensin-Converting Enzyme (ACE, predominantly in pulmonary vascular endothelium) cleaves Angiotensin I into ANGIOTENSIN II; 4) Angiotensin II exerts potent systemic vasoconstriction, stimulates hypothalamic thirst and ADH release, and stimulates the adrenal cortex (zona glomerulosa) to secrete ALDOSTERONE; 5) Aldosterone upregulates Na+/K+ ATPase pumps in distal tubules and collecting ducts, reabsorbing sodium and water while excreting potassium and H+. Option c accurately traces this cascade. Why the other options fail: option c skips the pulmonary step, but angiotensin I is inactive until ACE converts it. Option b gives aldosterone to the macula densa, which releases no hormone. Option d uses ADH from the juxtaglomerular cells, which do not store it.",
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
        text: "The ketoacids consume bicarbonate, and the lungs blow off carbon dioxide so carbonic acid falls and pH rises toward normal",
      },
      {
        id: "b",
        text: "The ketoacids consume bicarbonate, and the lungs retain carbon dioxide to replace the lost buffer",
      },
      {
        id: "c",
        text: "The low bicarbonate is the compensation for a primary respiratory alkalosis, and the lungs are still overventilating",
      },
      {
        id: "d",
        text: "The kidneys excrete hydrogen ions and regenerate bicarbonate, which is the only compensation in DKA",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The carbonic acid-bicarbonate buffer system operates according to the equilibrium: CO2 + H2O <-> H2CO3 <-> H+ + HCO3-. In DKA, excessive ketoacids (acetoacetic acid, beta-hydroxybutyric acid) dissociate into hydrogen ions (H+), which bind to and consume circulating bicarbonate (HCO3-), causing a primary severe metabolic acidosis (pH 7.15, HCO3- 8 mEq/L). The respiratory center in the brainstem detects the high arterial H+ and responds rapidly by triggering Kussmaul respirations (deep, rapid breathing). Blowing off CO2 lowers arterial PaCO2 (24 mmHg), which pulls the chemical equilibrium to the left, decreasing H2CO3 and free H+ ions and elevating pH back toward normal physiological range (partial respiratory compensation). Option d correctly identifies this physiological compensatory mechanism. Why the other options fail: option b retains carbon dioxide, which would add acid rather than remove it. Option d makes renal compensation the only mechanism, when the Kussmaul breathing is the immediate one. Option c calls the picture a respiratory alkalosis, when the bicarbonate of 8 identifies the metabolic process.",
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
        text: "The skull is rigid and its three contents have a fixed volume, so once CSF and venous blood are displaced, any added volume raises pressure steeply",
      },
      {
        id: "b",
        text: "The skull expands slowly like an elastic shell, so pressure rises only after the vault reaches its limit",
      },
      {
        id: "c",
        text: "Pressure rises only when the mass exceeds the volume of the whole cranial cavity, so the curve is flat until herniation begins",
      },
      {
        id: "d",
        text: "Pressure rises because brain tissue swells and displaces CSF into the spinal canal faster than it can be reabsorbed",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The Monro-Kellie doctrine states that the rigid, inelastic cranial vault is a closed box containing a constant total volume comprised of three distinct compartments: Brain parenchymal tissue (~80%), Intravascular blood (~10%), and Cerebrospinal fluid (CSF, ~10%). Because the skull cannot expand, an increase in the volume of one component (or an added mass like a hematoma or tumor) must be compensated by an equal decrease in the volume of the other components to maintain normal ICP (5–15 mmHg). Early compensation occurs by displacing CSF into the thecal sac and compressing cerebral venous sinuses. Once these compensatory buffers are exhausted (the compliance curve breakpoint), even a tiny addition of 1 to 2 mL of volume causes an exponential, catastrophic surge in ICP, collapsing cerebral perfusion pressure and causing fatal brainstem herniation. Option c is correct. Why the other options fail: option a treats the skull as elastic, when the whole point is that it is rigid. Option b has brain tissue dissolving into air, which is not a mechanism. Option c makes the pressure-volume curve flat until herniation, when it becomes exponential before that point.",
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
        text: "Sympathetic: adrenergic, alpha and beta, mydriasis, tachycardia, bronchodilation, glycogenolysis. Parasympathetic: cholinergic, muscarinic, miosis, bradycardia, digestion",
      },
      {
        id: "b",
        text: "Sympathetic: cholinergic, miosis, bradycardia, digestion. Parasympathetic: adrenergic, mydriasis, tachycardia, bronchodilation",
      },
      {
        id: "c",
        text: "Sympathetic: adrenergic, beta only, tachycardia and bronchodilation. Parasympathetic: cholinergic, muscarinic, bradycardia and miosis",
      },
      {
        id: "d",
        text: "Sympathetic: adrenergic, alpha only, vasoconstriction and mydriasis. Parasympathetic: cholinergic, nicotinic, all gut and bladder effects",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The Autonomic Nervous System consists of two anatomically and functionally distinct branches: 1) SYMPATHETIC ('fight-or-flight', thoracolumbar outflow): Postganglionic fibers release norepinephrine (and adrenal medulla releases epinephrine) targeting alpha-1 (vasoconstriction, mydriasis), beta-1 (increased heart rate and myocardial contractility), and beta-2 receptors (bronchodilation, hepatic glycogenolysis, decreased gut motility); 2) PARASYMPATHETIC ('rest-and-digest', craniosacral outflow via CN III, VII, IX, X and pelvic splanchnic nerves): Postganglionic fibers release Acetylcholine targeting Muscarinic receptors (M1–M5), producing pupillary constriction (miosis), lacrimation, salivation, vagal bradycardia, bronchoconstriction, and stimulation of peristalsis and bladder emptying. Option a accurately details these opposite actions. Why the other options fail: option b swaps the two divisions completely. Option c limits the sympathetic side to beta receptors, which omits alpha-mediated vasoconstriction and mydriasis. Option d limits it to alpha receptors, which omits beta-mediated tachycardia and bronchodilation.",
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
        text: "Cranial nerve III, whose superficial pupilloconstrictor fibres are compressed against the tentorial edge",
      },
      {
        id: "b",
        text: "Cranial nerve II, whose crossing fibres are stretched as the temporal lobe is pushed medially",
      },
      {
        id: "c",
        text: "Cranial nerve VI, which is stretched along the clivus as the brainstem shifts posteriorly",
      },
      {
        id: "d",
        text: "Cranial nerve IV, which is compressed in the ambient cistern as the midbrain rotates",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The pupillary light reflex relies on afferent signaling via the Optic nerve (CN II) and efferent parasympathetic motor signaling via the Oculomotor nerve (CN III). The parasympathetic fibers responsible for pupillary constriction (innervating the iris sphincter pupillae muscle) travel on the outer, superficial perimeter of the third cranial nerve. In uncal (transtentorial) herniation, the medial aspect of the temporal lobe (uncus) herniates downward across the rigid edge of the tentorial notch, directly compressing the ipsilateral CN III against the petroclinoid ligament. Because pupilloconstrictor fibers lie on the outside of the nerve trunk, external mechanical compression selectively knocks them out first, allowing unopposed sympathetic pupillodilator action and producing an ipsilateral fixed, dilated 'blown' pupil (an ominous sign of impending brainstem failure). Option b correctly identifies this anatomical localization. Why the other options fail: option b blames the optic nerve, which carries vision and does not constrict the pupil. Option c names the vestibulocochlear nerve, which carries hearing and balance. Option d names the hypoglossal nerve, which moves the tongue.",
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
        text: "Virchow triad: stasis, hypercoagulability and endothelial injury, from immobility after head injury",
      },
      {
        id: "b",
        text: "Cushing triad: hypertension with a widened pulse pressure, bradycardia and irregular breathing, from rising intracranial pressure",
      },
      {
        id: "c",
        text: "Beck triad: hypotension, muffled heart sounds and distended neck veins, from pericardial tamponade",
      },
      {
        id: "d",
        text: "Charcot triad: fever, jaundice and right upper quadrant pain, from ascending cholangitis",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Cushing's Triad is a classic physiological response to terminal intracranial hypertension and medullary ischemia: 1) Severe Systolic Hypertension with WIDENING PULSE PRESSURE: When ICP approaches mean arterial pressure, brainstem hypoperfusion and ischemia trigger a massive sympathetic surge (Cushing reflex) to forcibly drive blood flow into cerebral circulation; 2) BRADYCARDIA: Extreme systemic hypertension stimulates carotid and aortic baroreceptors, triggering intense vagal outflow to slow the heart rate; 3) IRREGULAR RESPIRATIONS (Cheyne-Stokes or ataxic breathing): Mechanical compression and distortion of the respiratory centers in the medulla oblongata and pons cause erratic breathing. Cushing's triad is a late, grave clinical sign indicating impending or ongoing cerebral herniation requiring emergency hyperosmolar therapy (mannitol/3% saline) and neurosurgical decompression. Option a is correct. Why the other options fail: option c describes tamponade, which gives hypotension rather than hypertension. Option a describes the clotting triad, which has nothing to do with a rising blood pressure and a slowing pulse. Option d describes cholangitis, which gives fever and jaundice.",
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
        text: "Client 1 has low-output cardiogenic shock with congestion; client 2 has high-output distributive shock with low resistance",
      },
      {
        id: "b",
        text: "Client 1 has obstructive shock from tamponade; client 2 has hypovolaemic shock with low filling pressures",
      },
      {
        id: "c",
        text: "Both are hypovolaemic, but client 1 is colder because the vasoconstriction is more intense",
      },
      {
        id: "d",
        text: "Client 1 has septic shock in its cold phase; client 2 has neurogenic shock from loss of sympathetic tone",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Shock is classified into distinct hemodynamic profiles based on Cardiac Output (CO), Preload (CVP/PCWP), and Afterload (SVR): 1) CARDIOGENIC SHOCK (Client 1): Primary myocardial pump failure (e.g., massive anterior MI). Stroke volume plummets (low CI), blood backs up into the pulmonary circulation (elevated PCWP) and systemic venous circulation (elevated CVP/JVD), and sympathetic compensatory reflex vasoconstricts peripheral arterioles (high SVR), causing cold, clammy, cyanotic extremities; 2) DISTRIBUTIVE / SEPTIC SHOCK (Client 2): Inflammatory cytokines and nitric oxide induce widespread peripheral vasodilation (profoundly low SVR/afterload). Blood pools peripherally, making skin warm, flushed, and bounding early on (hyperdynamic warm shock), with low filling pressures (low CVP/PCWP). Option d correctly contrasts these hemodynamic mechanisms. Why the other options fail: option b makes client 1 obstructive, but tamponade raises filling pressures on both sides and does not give the warm low-resistance profile of client 2. Option c calls both hypovolaemic, which cannot explain a warm vasodilated client. Option d puts client 2 in neurogenic shock, which gives bradycardia and warm skin without the low resistance described.",
    strategy: "Hemodynamic profiles: Cardiogenic = pump failure -> high preload (PCWP/JVD), low CO, high SVR (cold/clammy). Distributive/Septic = vasodilation -> low SVR, low preload, warm/flushed peripheries.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "cardiogenic-shock", "septic-shock", "hemodynamic-profiles", "systemic-vascular-resistance"],
    isFree: true,
  },
];
