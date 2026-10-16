import type { AuthoredQuestion } from "./authored-bank";

export const AP1_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-AP1-001",
    categorySlug: "risk-reduction",
    stem: "A nurse is teaching nursing students about physiological homeostasis. Which scenario accurately exemplifies a Negative Feedback homeostatic control mechanism?",
    choices: [
      {
        id: "a",
        text: "Elevated blood glucose triggers pancreatic beta-cells to secrete insulin, which promotes cellular glucose uptake and returns blood glucose back toward normal baseline",
      },
      {
        id: "b",
        text: "Uterine cervical stretch during labor triggers oxytocin secretion, which produces stronger uterine contractions that further increase cervical stretch until delivery",
      },
      {
        id: "c",
        text: "Platelet adhesion to a ruptured vessel wall triggers the release of ADP and thromboxane A2, recruiting more platelets in an accelerating cascade until a clot forms",
      },
      {
        id: "d",
        text: "Lactation suckling stimulates prolactin and oxytocin release, which triggers milk let-down and stimulates further vigorous infant suckling",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "A Negative Feedback mechanism is a primary homeostatic regulatory loop that detects deviations from a set point and triggers biological responses that reverse or oppose the initial stimulus, restoring equilibrium. When blood glucose rises, insulin release lowers glucose back to baseline (opposing the change). In contrast, Positive Feedback mechanisms amplify, reinforce, and accelerate the initial stimulus until a discrete endpoint is reached, as in oxytocin-mediated labor contractions (b), platelet aggregation in hemostasis (c), and the suckling-milk ejection reflex (d).",
    strategy: "Homeostasis: Negative feedback opposes/reverses the stimulus to restore baseline equilibrium (e.g., blood glucose, body temperature). Positive feedback amplifies the stimulus (e.g., labor, clotting).",
    difficulty: "easy",
    tags: ["anatomy-physiology", "homeostasis", "negative-feedback", "insulin", "endocrine-physiology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-002",
    categorySlug: "risk-reduction",
    stem: "A client undergoes a computed tomography (CT) scan of the abdomen. The radiologist describes cross-sectional cross-cuts dividing the body into superior (upper) and inferior (lower) portions. Which anatomical plane was used for these imaging slices?",
    choices: [
      {
        id: "a",
        text: "Midsagittal (median) plane",
      },
      {
        id: "b",
        text: "Transverse (horizontal or axial) plane",
      },
      {
        id: "c",
        text: "Frontal (coronal) plane",
      },
      {
        id: "d",
        text: "Parasagittal plane",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The Transverse plane (also called horizontal or axial plane) runs horizontally, dividing the body or an organ into superior (upper) and inferior (lower) sections; standard axial CT and MRI cross-sections are viewed along this plane. A Sagittal (or midsagittal) plane (a, d) divides the body vertically into right and left halves. A Frontal (or coronal) plane (c) divides the body vertically into anterior (ventral/front) and posterior (dorsal/back) portions.",
    strategy: "Anatomical planes: Transverse (axial) = superior/inferior. Sagittal = right/left. Coronal (frontal) = anterior/posterior.",
    difficulty: "easy",
    tags: ["anatomy-physiology", "anatomical-planes", "transverse-plane", "radiology", "body-planes"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-003",
    categorySlug: "risk-reduction",
    stem: "A client with a penetrating stab wound to the left chest develops severe respiratory distress, tracheal deviation to the right, and absent breath sounds on the left. In anatomical terms, what pathology has occurred in the thoracic serous membranes?",
    choices: [
      {
        id: "a",
        text: "Fluid accumulation inside the retroperitoneal cavity displacing the left kidney",
      },
      {
        id: "b",
        text: "Excessive cerebrospinal fluid accumulating within the subarachnoid space",
      },
      {
        id: "c",
        text: "Air entered the pleural cavity between the visceral pleura and parietal pleura, destroying the normal negative intrapleural pressure and causing tension pneumothorax and lung collapse",
      },
      {
        id: "d",
        text: "Bile accumulation between the visceral and parietal peritoneum",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The lungs are enclosed by a double-layered serous membrane: the visceral pleura (covering the lung surface) and the parietal pleura (lining the thoracic wall), separated by the pleural cavity containing a thin film of serous fluid under negative pressure. When penetrating trauma breaches this seal, air rushes into the potential space (pneumothorax). In a tension pneumothorax, a one-way valve effect traps air, increasing intrapleural pressure, collapsing the ipsilateral lung, shifting the mediastinum and trachea to the opposite side, and compressing the vena cava, causing obstructive shock. Option c accurately describes this pleural pathology.",
    strategy: "Thoracic anatomy: Pleural cavity lies between visceral pleura (on lungs) and parietal pleura (on chest wall). Air entry collapses negative pressure, causing pneumothorax.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "pleural-cavity", "serous-membranes", "tension-pneumothorax", "thoracic-anatomy"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-004",
    categorySlug: "risk-reduction",
    stem: "A client with acute cerebral edema from traumatic brain injury is prescribed an intravenous infusion of 3% Hypertonic Saline. Based on the cellular principles of osmosis and tonicity, what fluid movement occurs across cerebral capillary endothelial cell membranes?",
    choices: [
      {
        id: "a",
        text: "Water moves from the intravascular space into the intracellular brain tissue, causing neurons to swell and lyse",
      },
      {
        id: "b",
        text: "Osmotic pressure remains exactly neutral with zero net fluid movement across the blood-brain barrier",
      },
      {
        id: "c",
        text: "Sodium is actively destroyed by cerebral mitochondria to produce carbon dioxide",
      },
      {
        id: "d",
        text: "Water shifts via osmosis down its concentration gradient from the intracellular and interstitial compartments of swollen brain tissue into the hypertonic intravascular space, reducing cerebral edema and intracranial pressure",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Osmosis is the net movement of water across a semipermeable membrane from an area of lower solute concentration (higher water concentration) to an area of higher solute concentration (lower water concentration). Hypertonic solutions (such as 3% sodium chloride, osmolarity ~1,026 mOsm/L) have a higher solute concentration than normal intracellular fluid (~285 mOsm/L). Infusing 3% saline raises intravascular osmolarity, creating an osmotic gradient that pulls excess water out of swollen brain cells and interstitial tissue into cerebral capillaries, thereby reducing brain volume and intracranial pressure (ICP). Option a describes hypotonic fluids (e.g., 0.45% saline), which would fatally worsen cerebral edema.",
    strategy: "Tonicity & Osmosis: Hypertonic fluids pull water OUT of cells into blood vessels (shrinks swollen cells). Hypotonic fluids push water INTO cells (cells swell).",
    difficulty: "medium",
    tags: ["anatomy-physiology", "osmosis", "tonicity", "hypertonic-saline", "cerebral-edema"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-005",
    categorySlug: "risk-reduction",
    stem: "During acute myocardial infarction, coronary occlusion cuts off oxygen delivery to myocardial cells. What immediate cellular pathophysiological sequence occurs as a result of hypoxia?",
    choices: [
      {
        id: "a",
        text: "Mitochondrial oxidative phosphorylation ceases, cellular ATP production plummets, the membrane Na+/K+ ATPase pump fails, leading to intracellular sodium and water accumulation, cell swelling, and lactic acidosis from anaerobic glycolysis",
      },
      {
        id: "b",
        text: "The cell immediately undergoes rapid meiosis and doubles its chromosome count",
      },
      {
        id: "c",
        text: "Cellular ribosomes synthesize excess hemoglobin to generate internal oxygen molecules",
      },
      {
        id: "d",
        text: "The plasma membrane becomes impenetrable to all ions, preventing any biochemical shifts",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Oxygen is the final electron acceptor in mitochondrial oxidative phosphorylation. Hypoxia causes: 1) cessation of aerobic ATP synthesis; 2) switch to anaerobic glycolysis, generating lactic acid and lowering cellular pH; 3) failure of the ATP-dependent Na+/K+ pump, causing sodium (and obligate water) to accumulate inside the cell while potassium leaks out, leading to hydropic cellular swelling; and 4) influx of extracellular calcium activating destructive intracellular enzymes (proteases, lipases, endonucleases), culminating in irreversible necrosis. Option a accurately details this universal mechanism of hypoxic cell injury.",
    strategy: "Cellular pathophysiology: Hypoxia -> ATP depletion -> Na+/K+ pump failure -> intracellular Na+ and water accumulation -> cell swelling and lactic acidosis.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "cellular-hypoxia", "atp-depletion", "na-k-pump", "cell-injury"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-006",
    categorySlug: "risk-reduction",
    stem: "A bronchial biopsy in a client with a 40-pack-year history of cigarette smoking reveals that the normal pseudostratified ciliated columnar epithelium of the respiratory tract has been replaced by stratified squamous epithelium. What adaptive cellular alteration is this?",
    choices: [
      {
        id: "a",
        text: "Hypertrophy",
      },
      {
        id: "b",
        text: "Metaplasia",
      },
      {
        id: "c",
        text: "Atrophy",
      },
      {
        id: "d",
        text: "Hyperplasia",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Metaplasia is a reversible cellular adaptation in which one adult mature cell type (e.g., pseudostratified ciliated columnar epithelium) is replaced by another mature adult cell type (e.g., stratified squamous epithelium) that is better able to tolerate chronic physical or chemical irritation (such as hot cigarette smoke). However, this adaptation results in the loss of vital mucus secretion and ciliary escalator function, predisposing to chronic bronchitis, and if irritation persists, can progress to dysplasia and bronchogenic squamous cell carcinoma. Hypertrophy (a) is increased cell size; Atrophy (c) is decreased cell size; Hyperplasia (d) is increased cell number.",
    strategy: "Cellular adaptations: Metaplasia = conversion of one mature cell type to another (e.g., respiratory ciliated columnar to stratified squamous in smokers).",
    difficulty: "easy",
    tags: ["anatomy-physiology", "metaplasia", "cellular-adaptation", "epithelial-tissues", "respiratory-histology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-007",
    categorySlug: "risk-reduction",
    stem: "A post-menopausal client with severe osteoporosis asks the nurse how bones maintain their calcium strength. How do Osteoblasts, Osteoclasts, and Parathyroid Hormone (PTH) interact in skeletal calcium homeostasis?",
    choices: [
      {
        id: "a",
        text: "Osteoclasts build new bone matrix, while osteoblasts dissolve bone using gastric acid",
      },
      {
        id: "b",
        text: "PTH inhibits calcium absorption from the intestines and forces all calcium into bone crystals",
      },
      {
        id: "c",
        text: "Osteoblasts synthesize and mineralize new bone matrix, whereas osteoclasts resorb bone tissue; when serum calcium drops, Parathyroid Hormone (PTH) stimulates osteoclasts to resorb bone and release calcium into the bloodstream",
      },
      {
        id: "d",
        text: "Bone remodeling occurs purely through mechanical friction without any cellular or hormonal regulation",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Bone is dynamic living tissue continuously remodeled by two primary cell types: 1) OSTEOBLASTS ('bone builders') synthesize collagen matrix and promote mineral deposition (osteogenesis); 2) OSTEOCLASTS ('bone chewers/resorbers') secrete lysosomal enzymes and acids to break down bone matrix, releasing ionized calcium into systemic circulation. When serum calcium falls below normal, Parathyroid Hormone (PTH) is secreted, stimulating osteoclast activity, renal calcium reabsorption, and vitamin D activation to elevate serum calcium. Calcitonin opposes PTH. In post-menopausal osteoporosis, estrogen deficiency accelerates osteoclastic resorption over osteoblastic formation.",
    strategy: "Bone cells: Osteoblasts = Build bone (deposition). Osteoclasts = Chew/break down bone (resorption). PTH stimulates osteoclasts to raise serum calcium.",
    difficulty: "easy",
    tags: ["anatomy-physiology", "bone-remodeling", "osteoblasts", "osteoclasts", "parathyroid-hormone"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-008",
    categorySlug: "risk-reduction",
    stem: "An 8-year-old child sustains a traumatic fracture through the distal femoral growth plate (epiphyseal plate). Why is an injury to this specific anatomical region of a long bone a critical pediatric orthopedic concern?",
    choices: [
      {
        id: "a",
        text: "The epiphyseal plate produces all red blood cells in childhood, so fracture causes fatal aplastic anemia",
      },
      {
        id: "b",
        text: "The epiphyseal plate is where skeletal muscles attach directly to the bone marrow",
      },
      {
        id: "c",
        text: "Growth plates have zero blood supply and immediately develop malignant sarcomas when fractured",
      },
      {
        id: "d",
        text: "The epiphyseal plate consists of hyaline cartilage responsible for longitudinal bone growth; premature closure or asymmetric fusion can result in permanent limb-length discrepancy or angular skeletal deformity",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "In growing children, longitudinal bone elongation occurs at the epiphyseal plate (growth plate or physis), located between the epiphysis and diaphysis of long bones. It contains active chondrocytes undergoing endochondral ossification. Traumatic disruption (Salter-Harris fracture) can disrupt vascular supply and damage proliferating cartilage, leading to premature bony bridging (epiphyseal arrest), asymmetric bone growth, angular deformities, or significant limb-length discrepancies. Bone marrow in the medullary cavity and flat bones produces RBCs (a); muscles attach to the periosteum via tendons (b).",
    strategy: "Pediatric bone anatomy: Epiphyseal plate fractures (Salter-Harris) damage growth cartilage, risking premature growth arrest and permanent limb discrepancy.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "epiphyseal-plate", "growth-plate-fracture", "pediatric-orthopedics", "bone-growth"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-009",
    categorySlug: "risk-reduction",
    stem: "A nurse is comparing joint pathologies in a medical clinic. Which structural feature and pathophysiology distinguish Osteoarthritis (OA) from Rheumatoid Arthritis (RA) in a synovial joint?",
    choices: [
      {
        id: "a",
        text: "Osteoarthritis is a non-inflammatory degenerative 'wear-and-tear' breakdown of articular hyaline cartilage with subchondral bone remodeling, whereas Rheumatoid Arthritis is a systemic autoimmune disease characterized by chronic inflammation of the synovial membrane (synovitis) and destructive pannus formation",
      },
      {
        id: "b",
        text: "Osteoarthritis is caused by a bacterial infection of the synovial fluid, while rheumatoid arthritis is purely genetic",
      },
      {
        id: "c",
        text: "Rheumatoid arthritis affects only weight-bearing joints unilaterally, while osteoarthritis is always symmetric",
      },
      {
        id: "d",
        text: "Synovial joints lack articular cartilage and rely entirely on skeletal ligaments for cushioning",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "A synovial (diarthrodial) joint consists of articular hyaline cartilage, a fibrous capsule lined by a synovial membrane, and synovial lubricating fluid. OSTEOARTHRITIS is primarily a biomechanical degenerative disorder characterized by progressive degradation of articular cartilage, osteophyte (bone spur) formation, and joint space narrowing, classically exacerbated by weight-bearing and use. RHEUMATOID ARTHRITIS is a systemic autoimmune disease where autoantibodies target the synovial membrane, causing inflammatory synovitis, microvascular proliferation, and invasive hyperplastic pannus that erodes articular cartilage and bone symmetrically. Option a accurately contrasts these conditions.",
    strategy: "Synovial joint pathology: Osteoarthritis = cartilage wear-and-tear (subchondral bone spurs). Rheumatoid arthritis = autoimmune synovial inflammation (pannus formation).",
    difficulty: "medium",
    tags: ["anatomy-physiology", "synovial-joints", "osteoarthritis", "rheumatoid-arthritis", "articular-cartilage"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-010",
    categorySlug: "risk-reduction",
    stem: "During skeletal muscle contraction, what sequence of molecular events occurs according to the Sliding Filament Theory?",
    choices: [
      {
        id: "a",
        text: "Myosin heads dissolve completely and are reconstructed after muscle relaxation",
      },
      {
        id: "b",
        text: "Action potentials traveling down T-tubules stimulate calcium release from the sarcoplasmic reticulum; calcium binds to troponin, causing tropomyosin to shift and expose actin binding sites, allowing myosin heads to form cross-bridges and execute the power stroke using ATP",
      },
      {
        id: "c",
        text: "Actin filaments lengthen by 50% while myosin filaments shorten to zero",
      },
      {
        id: "d",
        text: "Potassium ions directly bind to collagen fibers to cause muscle shortening",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The sliding filament mechanism of skeletal muscle contraction follows a precise molecular sequence: 1) Motor neuron action potential releases acetylcholine at the neuromuscular junction; 2) End-plate depolarization propagates down transverse tubules (T-tubules); 3) Voltage-gated channels trigger calcium release from the sarcoplasmic reticulum; 4) Calcium binds to TROPONIN, inducing a conformational shift in TROPOMYOSIN that uncovers active myosin-binding sites on ACTIN; 5) Energized MYOSIN heads bind to actin, forming cross-bridges; 6) The power stroke pulls actin filaments toward the sarcomere center (M-line), hydrolyzing ATP; 7) New ATP binding releases myosin from actin. Filaments do not change length (c); they slide past each other.",
    strategy: "Muscle contraction sequence: Action potential -> Calcium release from sarcoplasmic reticulum -> Calcium binds troponin -> Tropomyosin moves -> Myosin-actin cross-bridge power stroke.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "sliding-filament-theory", "muscle-contraction", "sarcomere", "calcium-troponin"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-011",
    categorySlug: "risk-reduction",
    stem: "A 32-year-old female presents with fluctuating muscle fatigue, bilateral ptosis, diplopia, and difficulty swallowing that worsens with exertion and improves with rest. The physician diagnoses Myasthenia Gravis. What neuromuscular junction anatomy and pathophysiology underlie this disorder?",
    choices: [
      {
        id: "a",
        text: "Severe destruction of upper motor neurons in the primary motor cortex of the brain",
      },
      {
        id: "b",
        text: "Complete demyelination of peripheral sensory nerves by Epstein-Barr virus",
      },
      {
        id: "c",
        text: "Autoantibodies block and destroy nicotinic Acetylcholine (ACh) receptors on the postsynaptic motor end-plate, impairing neuromuscular transmission and muscle depolarization",
      },
      {
        id: "d",
        text: "Excessive, toxic hyper-secretion of acetylcholine into the synaptic cleft",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Myasthenia Gravis (MG) is an autoimmune disease targeting the neuromuscular junction. Circulating autoantibodies (primarily against the nicotinic acetylcholine receptor [AChR] on the postsynaptic muscle sarcolemma) block acetylcholine binding and accelerate receptor degradation. With repetitive motor neuron firing, acetylcholine stores deplete while fewer functional receptors remain available, resulting in progressive muscle fatigability that worsens with activity and improves with rest (e.g., ptosis, diplopia, dysarthria, dysphagia, and potentially fatal myasthenic respiratory crisis). ALS destroys motor neurons (a); Guillain-Barré causes demyelination (b).",
    strategy: "Neuromuscular junction: Myasthenia Gravis = autoantibodies against postsynaptic acetylcholine receptors -> muscle weakness and fatigability.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "myasthenia-gravis", "neuromuscular-junction", "acetylcholine", "autoimmune"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-012",
    categorySlug: "risk-reduction",
    stem: "A nurse prepares to administer a 3 mL deep intramuscular injection of an irritating viscous medication. Why is the Ventrogluteal site (gluteus medius and minimus) the anatomically preferred site over the Dorsogluteal site for adult intramuscular injections?",
    choices: [
      {
        id: "a",
        text: "The ventrogluteal muscle has no blood supply, preventing systemic drug absorption",
      },
      {
        id: "b",
        text: "The ventrogluteal site contains large superficial nerve branches that speed up drug onset",
      },
      {
        id: "c",
        text: "The dorsogluteal site has a thinner layer of subcutaneous fat than the deltoid",
      },
      {
        id: "d",
        text: "The ventrogluteal site provides a thick, deep muscle mass free of major penetrating nerves and blood vessels, whereas the dorsogluteal site carries a high risk of permanent Sciatic Nerve injury and superior gluteal artery puncture",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Anatomical landmarks make the Ventrogluteal site (comprising the gluteus medius and gluteus minimus muscles, land-marked by the greater trochanter, anterior superior iliac spine, and iliac crest) the gold standard for adult deep IM injections. It provides a deep muscle belly, consistent subcutaneous fat thickness, and is entirely free of major nerves and large blood vessels. In contrast, the traditional Dorsogluteal site carries documented hazards of accidental needle impalement of the Sciatic Nerve (causing permanent foot drop and paralysis) or superior gluteal artery injury, as well as unpredictable deposition into deep adipose tissue rather than muscle.",
    strategy: "IM injection anatomy: Ventrogluteal (gluteus medius/minimus) is safest—deep muscle belly, no major nerves. Dorsogluteal is unsafe due to proximity to the Sciatic Nerve.",
    difficulty: "easy",
    tags: ["anatomy-physiology", "ventrogluteal-site", "sciatic-nerve", "intramuscular-injection", "musculoskeletal-landmarks"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-013",
    categorySlug: "risk-reduction",
    stem: "A client who underwent a total gastrectomy for gastric adenocarcinoma is scheduled for discharge. Based on gastric anatomy and mucosal histology, which lifelong deficiency and hematological disorder will develop unless treated with parenteral replacement?",
    choices: [
      {
        id: "a",
        text: "Pernicious anemia resulting from the loss of gastric Parietal cells, which secrete Intrinsic Factor required for Vitamin B12 absorption in the terminal ileum",
      },
      {
        id: "b",
        text: "Hypercalcemic tetany resulting from the loss of chief cells",
      },
      {
        id: "c",
        text: "Sickle cell crisis resulting from the loss of stomach hydrochloric acid",
      },
      {
        id: "d",
        text: "Acute hemophilia resulting from failure of pepsinogen production",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The gastric mucosa contains specialized secretory glands in the fundus and body: 1) PARIETAL CELLS secrete Hydrochloric Acid (HCl, establishing an acidic pH for pepsin activation and pathogen destruction) and INTRINSIC FACTOR (IF). Intrinsic factor binds dietary Vitamin B12 (cobalamin), protecting it from digestive degradation and facilitating receptor-mediated absorption in the terminal ileum. Following total gastrectomy (or autoimmune destruction of parietal cells in pernicious anemia), intrinsic factor is completely absent, preventing B12 absorption and resulting in macrocytic megaloblastic anemia and progressive neurological demyelination (subacute combined degeneration). Chief cells secrete pepsinogen (b).",
    strategy: "Gastric physiology: Parietal cells secrete HCl and Intrinsic Factor. Intrinsic Factor is mandatory for Vitamin B12 absorption in the terminal ileum.",
    difficulty: "easy",
    tags: ["anatomy-physiology", "parietal-cells", "intrinsic-factor", "vitamin-b12", "pernicious-anemia"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-014",
    categorySlug: "risk-reduction",
    stem: "A client with gallstone obstruction of the common bile duct (choledocholithiasis) presents with clay-colored (acholic) stools, dark amber urine, jaundice, and steatorrhea. Which physiological function of bile and bilirubin excretion has been interrupted?",
    choices: [
      {
        id: "a",
        text: "Bile is synthesized in the pancreas and directly breaks down starch into simple glucose",
      },
      {
        id: "b",
        text: "Bile salts (synthesized by hepatocytes) emulsify dietary fats to facilitate lipase digestion and carry conjugated bilirubin into the duodenum; ductal obstruction prevents bile from entering the intestine, resulting in un-emulsified fat malabsorption (steatorrhea) and lack of stercobilin (clay stools)",
      },
      {
        id: "c",
        text: "Bile acts as an anticoagulant that prevents deep vein thrombosis in the liver",
      },
      {
        id: "d",
        text: "Bile destroys dietary protein in the stomach before acid secretion begins",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Bile is produced continuously by hepatocytes in the liver, concentrated in the gallbladder, and released into the duodenum via the common bile duct in response to cholecystokinin (CCK). Bile salts act as biological detergents, emulsifying large dietary fat globules into microscopic micelles to provide a vast surface area for pancreatic lipase digestion. Bile also excretes conjugated bilirubin into the intestinal lumen, where normal bacterial flora metabolize it into stercobilin (giving feces their brown color). When choledocholithiasis obstructs bile outflow, fats cannot be absorbed (steatorrhea), feces lack stercobilin (clay-colored stools), and water-soluble conjugated bilirubin backs up into circulation, spilling into urine (dark amber) and skin (jaundice).",
    strategy: "Hepatobiliary physiology: Bile emulsifies dietary fats and excretes bilirubin. Common bile duct obstruction causes steatorrhea, clay-colored stools, and jaundice.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "bile-salts", "choledocholithiasis", "biliary-physiology", "steatorrhea"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-015",
    categorySlug: "risk-reduction",
    stem: "A small intestinal biopsy in a client with untreated celiac disease reveals diffuse blunting and total atrophy of the intestinal villi and microvilli across the duodenum and jejunum. How does this structural damage impair physiological nutrition?",
    choices: [
      {
        id: "a",
        text: "Villi produce gastric acid; their loss causes severe hyperchlorhydria",
      },
      {
        id: "b",
        text: "Intestinal villi filter red blood cells; their loss causes systemic hemachromatosis",
      },
      {
        id: "c",
        text: "Villi and microvilli (brush border) dramatically amplify the intestinal mucosal surface area (to roughly the size of a tennis court) for nutrient absorption; their destruction severely diminishes absorptive surface area, causing generalized malabsorption of fats, carbohydrates, proteins, iron, and fat-soluble vitamins",
      },
      {
        id: "d",
        text: "The small intestine relies solely on gravity to drain food into the colon without any mucosal contact",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The small intestine (duodenum, jejunum, ileum) is structurally engineered for maximum nutrient absorption. Three levels of mucosal folding—circular folds (plicae circulares), finger-like mucosal villi, and apical enterocyte microvilli (the brush border)—amplify the internal absorptive surface area hundreds of times. In celiac disease, immune-mediated enteropathy triggered by gluten ingestion destroys enterocytes, blunting villi and causing crypt hyperplasia. This drastic loss of functional surface area and brush border enzymes (lactase, peptidases) causes severe global malabsorption, chronic diarrhea, steatorrhea, iron deficiency anemia, and metabolic bone disease. Villi do not produce acid (a).",
    strategy: "Intestinal histology: Villi and microvilli maximize mucosal absorptive surface area. Villi atrophy in celiac disease causes generalized nutrient malabsorption.",
    difficulty: "easy",
    tags: ["anatomy-physiology", "intestinal-villi", "brush-border", "celiac-disease", "malabsorption"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-016",
    categorySlug: "risk-reduction",
    stem: "A nurse examines the microscopic layers of human epidermis. Which statement accurately describes the dynamic cellular regeneration from the Stratum Basale to the Stratum Corneum?",
    choices: [
      {
        id: "a",
        text: "The stratum corneum is composed of living, rapidly dividing stem cells that synthesize melanin",
      },
      {
        id: "b",
        text: "Keratinocytes are produced exclusively by dermal collagen fibers and migrate inward toward subcutaneous fat",
      },
      {
        id: "c",
        text: "The stratum basale is completely devoid of sensory nerves and melanocytes in all humans",
      },
      {
        id: "d",
        text: "Mitotically active stem cells in the deep Stratum Basale continuously divide, pushing older keratinocytes upward through the spinosum, granulosum, and lucidum, where they accumulate keratin and lipid sealant, die, and form the protective, dead, anucleated Stratum Corneum barrier that constantly sheds",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The epidermis is a keratinized stratified squamous epithelium organized into 5 layers (from deep to superficial: Stratum Basale, Spinosum, Granulosum, Lucidum [thick skin only], and Corneum). The Stratum Basale contains single-layered stem cells undergoing active mitosis. As daughter keratinocytes are pushed superficially, they synthesize keratin intermediate filaments, produce keratohyalin and lamellar lipid granules in the granulosum (providing a hydrophobic water barrier), lose their nuclei and organelles, and flatten into the Stratum Corneum—a tough, horn-like layer of 15–30 sheets of dead keratin-packed squames that desquamates continuously (taking roughly 28–40 days from birth to shed). Option d correctly details this epidermal life cycle.",
    strategy: "Epidermal layers (deep to superficial): Basale (mitosis/stem cells) -> Spinosum -> Granulosum -> Lucidum -> Corneum (dead keratinized protective barrier).",
    difficulty: "easy",
    tags: ["anatomy-physiology", "epidermal-layers", "stratum-basale", "stratum-corneum", "keratinocytes"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-017",
    categorySlug: "risk-reduction",
    stem: "During intense physical exercise in a hot, humid climate, an athlete's core body temperature begins to rise toward 38.5 °C. Which autonomic integumentary thermoregulatory mechanisms are triggered by the preoptic anterior hypothalamus to dissipate heat?",
    choices: [
      {
        id: "a",
        text: "Cutaneous vasodilation (relaxing dermal arteriole smooth muscle to maximize heat radiation from the skin surface) and activation of eccrine sweat glands to promote evaporative cooling",
      },
      {
        id: "b",
        text: "Cutaneous vasoconstriction and activation of piloerection (goosebumps) to trap hot air against the dermis",
      },
      {
        id: "c",
        text: "Suppression of all sweating and shunting of blood entirely to visceral internal organs",
      },
      {
        id: "d",
        text: "Immediate breakdown of subcutaneous adipose tissue to release chilling ice crystals",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The preoptic anterior hypothalamus functions as the body's primary thermoregulatory thermostat. When core temperature rises above the set point, hypothalamic autonomic signaling initiates two primary heat-loss mechanisms: 1) CUTANEOUS VASODILATION: Dermal precapillary sphincters relax, redirecting warm blood from the body core to superficial subpapillary dermal capillary loops, allowing heat to radiate, conduct, and convect into the cooler ambient environment; 2) ECCRINE SWEAT GLAND ACTIVATION: Cholinergic sympathetic nerves stimulate eccrine glands across the body to secrete watery sweat, which absorbs thermal energy (latent heat of vaporization) as it evaporates from the skin. Option b describes heat-retention responses to cold.",
    strategy: "Thermoregulation in heat: Hypothalamus triggers cutaneous vasodilation (radiates heat) and eccrine sweating (evaporative cooling).",
    difficulty: "easy",
    tags: ["anatomy-physiology", "thermoregulation", "cutaneous-vasodilation", "eccrine-sweating", "hypothalamus"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-018",
    categorySlug: "risk-reduction",
    stem: "A client suffers severe full-thickness (third-degree) burns covering both lower extremities. Upon inspecting the wound beds, the nurse observes that the burn tissue is leathery, dry, waxy white, and completely insensitive to pinprick testing (painless). What anatomical depth of integumentary destruction explains these findings?",
    choices: [
      {
        id: "a",
        text: "Destruction confined purely to the superficial stratum corneum with intact basale cells",
      },
      {
        id: "b",
        text: "Complete destruction of both the epidermis and the entire dermis (including dermal microvasculature, hair follicles, sweat glands, and free sensory nerve endings), creating a coagulated, anesthetic eschar",
      },
      {
        id: "c",
        text: "Only subcutaneous fat was destroyed while the epidermis and dermis remained intact",
      },
      {
        id: "d",
        text: "Temporary paralysis of superficial tactile pacinian corpuscles without any cellular death",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Full-thickness (third-degree) burns extend completely through the epidermis and the entire thickness of the dermis, often extending into the underlying hypodermis (subcutaneous tissue). Because all dermal appendages—including the dermal capillary plexus and sensory nerve endings (nociceptors, Meissner's, Merkel's, and free nerve terminals)—are completely incinerated, the wound appears leathery, waxy white, brown, or charred (eschar) and is completely insensitive to light touch and pinprick (anesthetic). However, peripheral zones of partial-thickness burn surrounding the wound remain intensely painful. Option b accurately identifies this full-thickness depth.",
    strategy: "Burn depth anatomy: Full-thickness (3rd degree) destroys epidermis AND dermis, incinerating sensory nerve endings, making the core eschar painless and dry/leathery.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "burn-depth", "full-thickness-burn", "dermis-destruction", "sensory-receptors"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-019",
    categorySlug: "risk-reduction",
    stem: "A 22-year-old trauma client who sustained a closed, displaced femur fracture 36 hours ago suddenly develops acute dyspnea, confusion, agitation, tachypnea, and an SpO2 of 82%. On physical examination, the nurse notes a classic petechial rash across the anterior neck, axillae, and conjunctivae. What pathophysiological syndrome has occurred?",
    choices: [
      {
        id: "a",
        text: "Acute osteomyelitis from Staphylococcus aureus",
      },
      {
        id: "b",
        text: "Spontaneous tension pneumothorax from rib subluxation",
      },
      {
        id: "c",
        text: "Fat Embolism Syndrome (FES), where bone marrow fat globules entered ruptured medullary venous sinusoids, traveled to pulmonary microcirculation causing ventilation-perfusion mismatch, and generated systemic microvascular petechiae",
      },
      {
        id: "d",
        text: "Anaphylactic shock to orthopedic bed linens",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Fat Embolism Syndrome (FES) is a life-threatening systemic complication occurring 24 to 72 hours following closed fractures of major long bones (especially the femur or tibia) or pelvic crush trauma. Disrupted bone marrow adipose tissue and medullary venous sinusoids allow fat globules to enter the systemic venous circulation. These fat emboli occlude pulmonary microvascular capillaries, triggering lipolysis into toxic free fatty acids that induce diffuse alveolar endothelial injury, acute lung injury (ARDS), ventilation-perfusion mismatch (severe hypoxemia), cerebral microvascular occlusion (confusion, altered mental status), and thrombocytopenic microvascular fragility (pathognomonic non-palpable petechiae over the neck, axilla, and chest). Option c correctly identifies FES.",
    strategy: "Trauma complication: Femur fracture + Acute hypoxia + Neurological confusion + Axillary petechial rash = Fat Embolism Syndrome.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "fat-embolism-syndrome", "femur-fracture", "pulmonary-emboli", "clinical-correlation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP1-020",
    categorySlug: "risk-reduction",
    stem: "A client presents with severe colicky abdominal pain, profuse bilious vomiting, obstipation, and abdominal distension. Abdominal auscultation reveals high-pitched, hyperactive tinkling bowel sounds with visible peristaltic rushes proximal to the obstruction, and absent sounds distally. How do gastrointestinal anatomy and motility explain these physical assessment findings in mechanical small bowel obstruction?",
    choices: [
      {
        id: "a",
        text: "The stomach has completely ceased acid production, causing air to ferment into alcohol",
      },
      {
        id: "b",
        text: "The liver has stopped secreting bile, causing the gallbladder to rupture into the colon",
      },
      {
        id: "c",
        text: "The appendix has expanded into the duodenum, creating a mechanical bypass valve",
      },
      {
        id: "d",
        text: "Proximal to the mechanical blockage, smooth muscle in the muscularis layer contracts vigorously against the obstruction, producing high-pitched hyperactive peristaltic sounds; as gas and digestive secretions accumulate, progressive intraluminal distension impedes venous return, triggering massive third-space fluid loss and hypovolemic dehydration",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "In mechanical small bowel obstruction (e.g., from postoperative adhesions or incarcerated hernias), physical blockage prevents the distal progression of chyme. Proximally, the smooth muscle layers (muscularis externa: circular and longitudinal fibers) mount vigorous hyper-peristaltic contractions to overcome the resistance, manifesting early as high-pitched, metallic 'tinkling' sounds and audible peristaltic rushes. Proximal intraluminal accumulation of swallowed air and digestive secretions (7–8 L/day of saliva, gastric juice, bile, and pancreatic fluids) increases wall tension, compresses venous drainage, causes bowel wall edema, and sequesters massive fluid into the third space, leading to hypovolemic shock and electrolyte collapse. Option d accurately explains this pathophysiological trajectory.",
    strategy: "GI obstruction: Muscularis externa contracts vigorously against obstruction -> high-pitched tinkling sounds proximal to obstruction -> intraluminal third-spacing and hypovolemia.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "bowel-obstruction", "muscularis-externa", "peristalsis", "third-spacing"],
    isFree: true,
  },
];
