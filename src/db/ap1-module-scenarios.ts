import type { AuthoredQuestion } from "./authored-bank";

export const AP1_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-AP1-001",
    categorySlug: "risk-reduction",
    stem: "A nurse is teaching nursing students about physiological homeostasis. Which scenario accurately exemplifies a Negative Feedback homeostatic control mechanism?",
    choices: [
      {
        id: "a",
        text: "Uterine cervical stretch during labour triggers oxytocin secretion, which produces stronger uterine contractions that further increase cervical stretch until the baby is delivered",
      },
      {
        id: "b",
        text: "Platelet adhesion to a ruptured vessel wall triggers the release of ADP and thromboxane A2, recruiting more platelets in an accelerating cascade until a clot forms",
      },
      {
        id: "c",
        text: "Elevated blood glucose triggers pancreatic beta-cells to secrete insulin, which promotes cellular glucose uptake and returns blood glucose back toward normal baseline",
      },
      {
        id: "d",
        text: "Lactation suckling stimulates prolactin and oxytocin release, which triggers milk let-down and then stimulates further vigorous infant suckling at the breast",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — “Elevated blood glucose triggers pancreatic beta-cells to secrete insulin, which promotes cellular glucose uptake and returns blood glucose back toward normal baseline”. A Negative Feedback mechanism is a primary homeostatic regulatory loop that detects deviations from a set point and triggers biological responses that reverse or oppose the initial stimulus, restoring equilibrium. When blood glucose rises, insulin release lowers glucose back to baseline (opposing the change). In contrast, Positive Feedback mechanisms amplify, reinforce, and accelerate the initial stimulus until a discrete endpoint is reached, as in oxytocin-mediated labor contractions, platelet aggregation in hemostasis, and the suckling-milk ejection reflex. Why the other options fail: option a is a positive feedback loop, because contractions increase the stimulus that produced them. Option b is also positive feedback, with each platelet recruiting more. Option d is positive feedback again, since suckling begets more suckling rather than returning the system to baseline.",
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
        text: "Midsagittal (median) plane, dividing the body into equal right and left halves through the midline",
      },
      {
        id: "b",
        text: "Frontal (coronal) plane, dividing the body into anterior and posterior portions from head to foot",
      },
      {
        id: "c",
        text: "Parasagittal plane, dividing the body into unequal right and left portions off the midline",
      },
      {
        id: "d",
        text: "Transverse (horizontal or axial) plane, dividing the body into superior and inferior portions",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — “Transverse (horizontal or axial) plane, dividing the body into superior and inferior portions”. The Transverse plane (also called horizontal or axial plane) runs horizontally, dividing the body or an organ into superior (upper) and inferior (lower) sections; standard axial CT and MRI cross-sections are viewed along this plane. A Sagittal (or midsagittal) plane divides the body vertically into right and left halves. A Frontal (or coronal) plane divides the body vertically into anterior (ventral/front) and posterior (dorsal/back) portions. Why the other options fail: option a splits the body into right and left halves, not upper and lower. Option b splits it into anterior and posterior. Option c is a vertical cut parallel to the midline, which still produces left and right portions.",
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
        text: "Air entered the pleural cavity between the visceral and parietal pleura, abolishing the negative intrapleural pressure and collapsing the lung on that side",
      },
      {
        id: "b",
        text: "Fluid accumulating in the retroperitoneal space behind the abdomen, displacing the left kidney upwards and splinting the diaphragm from below throughout the illness",
      },
      {
        id: "c",
        text: "Air trapped in the subarachnoid space after a dural tear, raising intracranial pressure and splinting the chest wall indirectly",
      },
      {
        id: "d",
        text: "Bile leaking between the visceral and parietal peritoneum, irritating the undersurface of the diaphragm and causing referred chest pain at rest",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — “Air entered the pleural cavity between the visceral and parietal pleura, abolishing the negative intrapleural pressure and collapsing the lung on that side”. The lungs are enclosed by a double-layered serous membrane: the visceral pleura (covering the lung surface) and the parietal pleura (lining the thoracic wall), separated by the pleural cavity containing a thin film of serous fluid under negative pressure. When penetrating trauma breaches this seal, air rushes into the potential space (pneumothorax). In a tension pneumothorax, a one-way valve effect traps air, increasing intrapleural pressure, collapsing the ipsilateral lung, shifting the mediastinum and trachea to the opposite side, and compressing the vena cava, causing obstructive shock. Why the other options fail: option b puts fluid in the retroperitoneum, which lies behind the abdominal cavity and does not collapse the lung. Option c puts air in the subarachnoid space, which is inside the skull and spinal canal. Option d puts bile in the peritoneum, which irritates the diaphragm but leaves the pleural space intact.",
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
        text: "Water moves from the intravascular space into the already swollen brain cells, because the hypertonic fluid cannot cross the capillary wall at all",
      },
      {
        id: "b",
        text: "Water moves from the swollen brain interstitium into the hypertonic intravascular space, reducing cerebral oedema and intracranial pressure",
      },
      {
        id: "c",
        text: "Sodium pulls water into the brain interstitium first, and the oedema resolves only when the kidneys excrete the excess sodium and water",
      },
      {
        id: "d",
        text: "The hypertonic gradient draws sodium into the brain cells, and water follows the sodium, so the intracellular volume rises further",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — “Water moves from the swollen brain interstitium into the hypertonic intravascular space, reducing cerebral oedema and intracranial pressure”. Osmosis is the net movement of water across a semipermeable membrane from an area of lower solute concentration (higher water concentration) to an area of higher solute concentration (lower water concentration). Hypertonic solutions (such as 3% sodium chloride, osmolarity ~1,026 mOsm/L) have a higher solute concentration than normal intracellular fluid (~285 mOsm/L). Infusing 3% saline raises intravascular osmolarity, creating an osmotic gradient that pulls excess water out of swollen brain cells and interstitial tissue into cerebral capillaries, thereby reducing brain volume and intracranial pressure (ICP). Why the other options fail: option a reverses the gradient, because water leaves the brain when the plasma is hypertonic. Option c describes a delayed renal effect rather than the immediate osmotic shift. Option d moves sodium and water into the cells, which is the effect of hypotonic fluid.",
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
        text: "ATP depletion opens the potassium channels first, so potassium enters the cell and water follows it in, causing the cell to swell and burst",
      },
      {
        id: "b",
        text: "Oxidative phosphorylation stops, ATP falls, the sodium-potassium pump fails, so sodium and water enter and the cell swells and acidifies",
      },
      {
        id: "c",
        text: "Anaerobic glycolysis raises ATP above its normal level, and the excess energy drives calcium into the cell from the extracellular fluid",
      },
      {
        id: "d",
        text: "The cell membrane becomes impermeable to all ions after hypoxia, so the cell can no longer regulate its volume and swells",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — “Oxidative phosphorylation stops, ATP falls, the sodium-potassium pump fails, so sodium and water enter and the cell swells and acidifies”. Oxygen is the final electron acceptor in mitochondrial oxidative phosphorylation. Hypoxia causes: 1) cessation of aerobic ATP synthesis; 2) switch to anaerobic glycolysis, generating lactic acid and lowering cellular pH; 3) failure of the ATP-dependent Na+/K+ pump, causing sodium (and obligate water) to accumulate inside the cell while potassium leaks out, leading to hydropic cellular swelling; and 4) influx of extracellular calcium activating destructive intracellular enzymes (proteases, lipases, endonucleases), culminating in irreversible necrosis. Why the other options fail: option a has potassium entering the cell first, when the failing pump loses its gradient and sodium accumulates inside. Option c has anaerobic glycolysis raising ATP, which it cannot do as efficiently as oxidation. Option d makes the membrane impermeable to ions, which is the opposite of pump failure.",
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
        text: "Metaplasia",
      },
      {
        id: "b",
        text: "Hypertrophy",
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
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — “Metaplasia”. Metaplasia is a reversible cellular adaptation in which one adult mature cell type (e.g., pseudostratified ciliated columnar epithelium) is replaced by another mature adult cell type (e.g., stratified squamous epithelium) that is better able to tolerate chronic physical or chemical irritation (such as hot cigarette smoke). However, this adaptation results in the loss of vital mucus secretion and ciliary escalator function, predisposing to chronic bronchitis, and if irritation persists, can progress to dysplasia and bronchogenic squamous cell carcinoma. Hypertrophy is increased cell size; Atrophy is decreased cell size; Hyperplasia is increased cell number. Why the other options fail: option b increases cell size without changing cell type. Option c shrinks cells without changing type. Option d increases the number of the same cells, which is not the substitution of one mature epithelium for another that the biopsy shows.",
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
        text: "Osteoblasts resorb bone while osteoclasts build it, and PTH lowers serum calcium by blocking the action of both cell types",
      },
      {
        id: "b",
        text: "PTH raises serum calcium by increasing intestinal absorption of calcium alone, without acting on the bone cells at any stage",
      },
      {
        id: "c",
        text: "Osteoclasts both build and resorb bone, and PTH simply switches them from one role to the other as the calcium level changes",
      },
      {
        id: "d",
        text: "Osteoblasts build bone, osteoclasts resorb it, and PTH drives osteoclastic resorption to raise serum calcium when it falls",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — “Osteoblasts build bone, osteoclasts resorb it, and PTH drives osteoclastic resorption to raise serum calcium when it falls”. Bone is dynamic living tissue continuously remodeled by two primary cell types: 1) OSTEOBLASTS ('bone builders') synthesize collagen matrix and promote mineral deposition (osteogenesis); 2) OSTEOCLASTS ('bone chewers/resorbers') secrete lysosomal enzymes and acids to break down bone matrix, releasing ionized calcium into systemic circulation. When serum calcium falls below normal, Parathyroid Hormone (PTH) is secreted, stimulating osteoclast activity, renal calcium reabsorption, and vitamin D activation to elevate serum calcium. Calcitonin opposes PTH. In post-menopausal osteoporosis, estrogen deficiency accelerates osteoclastic resorption over osteoblastic formation. Why the other options fail: option A reverses the two cells, since osteoblasts build bone and osteoclasts resorb it, so the sentence inverts the basic anatomy (A); option B gives PTH an intestinal action only and denies it any effect on bone, whereas PTH acts on the kidney and, through signalling from osteoblasts, on bone to drive resorption (B); and option C makes one cell type do both jobs, when building and resorbing belong to two separate lineages that PTH coordinates rather than converts (C).",
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
        text: "The plate fuses by about eight years of age, so an injury after that age cannot affect growth or the final length of the limb at all",
      },
      {
        id: "b",
        text: "The plate is the growth zone, and injury can cause premature or asymmetric closure with length discrepancy or angulation",
      },
      {
        id: "c",
        text: "The plate is the weakest part of the bone, so fractures there heal more slowly than shaft fractures",
      },
      {
        id: "d",
        text: "The plate carries the blood supply to the epiphysis, so injury causes avascular necrosis of the whole bone",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — “The plate is the growth zone, and injury can cause premature or asymmetric closure with length discrepancy or angulation”. In a growing child, longitudinal bone growth happens only at the epiphyseal plate, the physis, where columns of chondrocytes proliferate and are then replaced by bone through endochondral ossification. That is why an injury which would be trivial in an adult shaft is critical here: a Salter-Harris fracture can tear across the proliferative zone, disturb its blood supply, and then heal by laying down bone where cartilage should be, a premature epiphyseal arrest. If the whole plate closes the limb ends up short; if only part of it closes, growth continues unevenly and the bone angulates, and the younger the child the more remaining growth is at risk. Why the other options fail: the physis does not fuse at eight years, and the distal femoral growth plate stays open into the mid-teens, so the remaining growth is precisely what puts the child at risk (A); the plate is indeed the weakest part of a child's long bone, but that is why it fractures readily rather than slowly, and the concern is disordered growth rather than delayed union (C); and while the physis does have its own blood supply, injury does not as a rule produce avascular necrosis of the whole bone, which is the risk at the femoral head and the scaphoid (D).",
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
        text: "Osteoarthritis follows a low-grade synovial infection, while rheumatoid arthritis is a purely genetic disorder with no inflammatory component",
      },
      {
        id: "b",
        text: "Osteoarthritis is degenerative cartilage loss with subchondral remodelling, while rheumatoid arthritis is an autoimmune synovitis",
      },
      {
        id: "c",
        text: "Rheumatoid arthritis affects the weight-bearing joints asymmetrically, while osteoarthritis is always symmetric and spares the hands",
      },
      {
        id: "d",
        text: "Osteoarthritis affects the synovium first, while rheumatoid arthritis begins in the subchondral bone and spares the synovium entirely",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — “Osteoarthritis is degenerative cartilage loss with subchondral remodelling, while rheumatoid arthritis is an autoimmune synovitis”. A synovial (diarthrodial) joint consists of articular hyaline cartilage, a fibrous capsule lined by a synovial membrane, and synovial lubricating fluid. OSTEOARTHRITIS is primarily a biomechanical degenerative disorder characterized by progressive degradation of articular cartilage, osteophyte (bone spur) formation, and joint space narrowing, classically exacerbated by weight-bearing and use. RHEUMATOID ARTHRITIS is a systemic autoimmune disease where autoantibodies target the synovial membrane, causing inflammatory synovitis, microvascular proliferation, and invasive hyperplastic pannus that erodes articular cartilage and bone symmetrically. Why the other options fail: option A makes osteoarthritis an infection and rheumatoid arthritis a purely genetic disease, when osteoarthritis is mechanical and degenerative and rheumatoid arthritis is autoimmune and inflammatory (A); option C reverses the distribution, since rheumatoid arthritis is characteristically symmetric and involves the small joints of the hands, while osteoarthritis favours weight-bearing joints and is often asymmetric (C); and option D puts each disease in the wrong tissue, because both destroy articular cartilage and rheumatoid arthritis begins in the synovium rather than sparing it (D).",
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
        text: "Calcium binds tropomyosin, which pulls troponin aside so that the myosin heads can bind actin and shorten the sarcomere during a contraction",
      },
      {
        id: "b",
        text: "ATP hydrolysis extends the actin filaments while the myosin filaments shorten, which draws the Z lines closer together in the sarcomere",
      },
      {
        id: "c",
        text: "Sodium entering through the T-tubules binds troponin and exposes the actin sites for the myosin heads to attach to during a contraction",
      },
      {
        id: "d",
        text: "Calcium released from the sarcoplasmic reticulum binds troponin, moving tropomyosin so myosin heads cross-bridge and shorten the sarcomere",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — “Calcium released from the sarcoplasmic reticulum binds troponin, moving tropomyosin so myosin heads cross-bridge and shorten the sarcomere”. The sliding filament mechanism of skeletal muscle contraction follows a precise molecular sequence: 1) Motor neuron action potential releases acetylcholine at the neuromuscular junction; 2) End-plate depolarization propagates down transverse tubules (T-tubules); 3) Voltage-gated channels trigger calcium release from the sarcoplasmic reticulum; 4) Calcium binds to TROPONIN, inducing a conformational shift in TROPOMYOSIN that uncovers active myosin-binding sites on ACTIN; 5) Energized MYOSIN heads bind to actin, forming cross-bridges; 6) The power stroke pulls actin filaments toward the sarcomere center (M-line), hydrolyzing ATP; 7) New ATP binding releases myosin from actin. Filaments do not change length; they slide past each other. Why the other options fail: option a dissolves the myosin heads, which are not consumed by contraction. Option b lengthens actin and shortens myosin, when the filaments slide past each other without changing length. Option c gives the trigger to sodium and collagen, when calcium and troponin are the switch.",
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
        text: "Autoantibodies block the nicotinic acetylcholine receptors at the motor end-plate, so the muscle membrane cannot depolarise properly",
      },
      {
        id: "b",
        text: "Excess acetylcholinesterase at the end-plate breaks down acetylcholine before it can act on the muscle membrane at all during a contraction",
      },
      {
        id: "c",
        text: "Autoantibodies destroy the presynaptic calcium channels, so acetylcholine is never released into the synaptic cleft at any point in the disease",
      },
      {
        id: "d",
        text: "Autoantibodies block the muscarinic receptors on the muscle membrane, preventing depolarisation of the muscle fibre during voluntary effort",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — “Autoantibodies block the nicotinic acetylcholine receptors at the motor end-plate, so the muscle membrane cannot depolarise properly”. Myasthenia Gravis (MG) is an autoimmune disease targeting the neuromuscular junction. Circulating autoantibodies (primarily against the nicotinic acetylcholine receptor [AChR] on the postsynaptic muscle sarcolemma) block acetylcholine binding and accelerate receptor degradation. With repetitive motor neuron firing, acetylcholine stores deplete while fewer functional receptors remain available, resulting in progressive muscle fatigability that worsens with activity and improves with rest (e.g., ptosis, diplopia, dysarthria, dysphagia, and potentially fatal myasthenic respiratory crisis). ALS destroys motor neurons; Guillain-Barré causes demyelination. Why the other options fail: Excess acetylcholinesterase would break acetylcholine down faster than it is released, which is not the antibody mechanism; destruction of the presynaptic calcium channels is Lambert-Eaton, which improves with use; muscarinic blockade on the muscle membrane is not how the end-plate fails.",
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
        text: "It lies away from the sciatic nerve and major vessels, and has thick muscle for a viscous drug",
      },
      {
        id: "b",
        text: "It has fewer nerve endings, so an irritating drug causes less pain and is absorbed more slowly",
      },
      {
        id: "c",
        text: "It avoids the superior gluteal artery, and it lies within the safe triangle bounded by the iliac crest",
      },
      {
        id: "d",
        text: "It lies over the gluteus maximus, which has a larger surface area than the dorsogluteal site",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — “It lies away from the sciatic nerve and major vessels, and has thick muscle for a viscous drug”. The ventrogluteal site places the needle into gluteus medius and minimus, in the wedge held between the palm on the greater trochanter and the index finger on the anterior superior iliac spine, with the middle finger spread back towards the iliac crest. That wedge is thick muscle under a fairly consistent layer of fat, and it lies well clear of the sciatic nerve — the structure the dorsogluteal site puts at risk, with foot drop as the injury. Dose volume matters here: 3 mL of an irritating drug needs a deep belly with good blood flow, not a thin sheet of muscle over bone. Why the other options fail: a site is not chosen for having fewer nerve endings, and slowing the absorption of an irritant does not protect the tissue (B); the ventrogluteal site is not preferred specifically for avoiding the superior gluteal artery, which is one of the hazards of the dorsogluteal route, and the triangle it sits in is defined by the anterior superior iliac spine, the iliac crest and the greater trochanter rather than by the iliac crest alone (C); and the site lies over gluteus medius and minimus, so its surface area is smaller than the dorsogluteal area over gluteus maximus, not larger (D). Reference: Ghana nursing procedure manual — intramuscular injection; site selection.",
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
        text: "Loss of chief cells removes pepsinogen, so protein cannot be digested and iron absorption falls, causing a microcytic anaemia over time",
      },
      {
        id: "b",
        text: "Loss of acid allows bacterial overgrowth in the small bowel, which consumes vitamin B12 and causes a macrocytic anaemia over months",
      },
      {
        id: "c",
        text: "Loss of intrinsic factor reduces folate absorption in the jejunum, causing a macrocytic anaemia that responds to folate therapy alone",
      },
      {
        id: "d",
        text: "Loss of parietal cells removes intrinsic factor, so vitamin B12 cannot be absorbed in the terminal ileum, causing a macrocytic anaemia",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — “Loss of parietal cells removes intrinsic factor, so vitamin B12 cannot be absorbed in the terminal ileum, causing a macrocytic anaemia”. The gastric mucosa contains specialized secretory glands in the fundus and body: 1) PARIETAL CELLS secrete Hydrochloric Acid (HCl, establishing an acidic pH for pepsin activation and pathogen destruction) and INTRINSIC FACTOR (IF). Intrinsic factor binds dietary Vitamin B12 (cobalamin), protecting it from digestive degradation and facilitating receptor-mediated absorption in the terminal ileum. Following total gastrectomy (or autoimmune destruction of parietal cells in pernicious anemia), intrinsic factor is completely absent, preventing B12 absorption and resulting in macrocytic megaloblastic anemia and progressive neurological demyelination (subacute combined degeneration). Chief cells secrete pepsinogen. Why the other options fail: option a blames chief cells and pepsinogen for calcium, which they do not regulate. Option b blames acid loss for sickle cell disease, which is inherited. Option c blames pepsinogen for haemophilia, which is a clotting factor deficiency.",
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
        text: "Bile salts from the gallbladder emulsify fat, so obstruction causes steatorrhoea, while bilirubin is excreted by the kidney",
      },
      {
        id: "b",
        text: "Bile salts are needed for fat digestion, but bilirubin reaches the gut in the blood and is excreted in the urine instead",
      },
      {
        id: "c",
        text: "Bile salts from the liver emulsify fat and carry bilirubin into the gut, so obstruction causes steatorrhoea and pale stools",
      },
      {
        id: "d",
        text: "Bile acids activate pancreatic lipase in the duodenum, and obstruction blocks the enzyme rather than the bile",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — “Bile salts from the liver emulsify fat and carry bilirubin into the gut, so obstruction causes steatorrhoea and pale stools”. Bile is produced continuously by hepatocytes in the liver, concentrated in the gallbladder, and released into the duodenum via the common bile duct in response to cholecystokinin (CCK). Bile salts act as biological detergents, emulsifying large dietary fat globules into microscopic micelles to provide a vast surface area for pancreatic lipase digestion. Bile also excretes conjugated bilirubin into the intestinal lumen, where normal bacterial flora metabolize it into stercobilin (giving feces their brown color). When choledocholithiasis obstructs bile outflow, fats cannot be absorbed (steatorrhea), feces lack stercobilin (clay-colored stools), and water-soluble conjugated bilirubin backs up into circulation, spilling into urine (dark amber) and skin (jaundice). Why the other options fail: option A attributes bile production to the gallbladder and sends bilirubin to the kidney, but the liver makes bile and obstruction backs conjugated bilirubin into the blood, which is what turns the urine dark (A); option B sends bilirubin to the gut through the bloodstream, which is not a route it takes, and still treats the gallbladder as the source of bile (B); and option D gives bile acids a job in activating pancreatic lipase and then blames the enzyme rather than the blocked duct, when lipase is activated by colipase and the problem here is that no bile reaches the gut at all (D).",
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
        text: "Loss of villi removes brush border enzymes and surface area, so fat, carbohydrate, protein and iron all malabsorb",
      },
      {
        id: "b",
        text: "Loss of villi reduces the surface area for water absorption alone, producing diarrhoea without nutrient loss",
      },
      {
        id: "c",
        text: "The villi regenerate within days after gluten withdrawal, so the absorptive defect is transient and self-limiting",
      },
      {
        id: "d",
        text: "Villous atrophy blocks the lymphatic lacteals, so only fat is malabsorbed while sugars and proteins are spared",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — “Loss of villi removes brush border enzymes and surface area, so fat, carbohydrate, protein and iron all malabsorb”. The small bowel multiplies its absorptive surface three times over — circular folds, then villi, then the microvilli of the brush border — until it is many hundreds of times the area of a plain tube. In untreated coeliac disease the immune response to gluten destroys enterocytes, the villi flatten and the crypts lengthen, and both things that matter are lost together: the surface itself, and the disaccharidases and peptidases mounted on it. The result is global malabsorption rather than one deficiency — fat causes steatorrhoea, carbohydrate and protein are poorly taken up, and iron and folate are absorbed in the upper bowel that has been worst damaged, so anaemia and weight loss follow. Why the other options fail: water absorption is not the only function lost, and a patient with coeliac disease loses nutrients as well as fluid (B); the mucosa does recover on a strict gluten-free diet, but over weeks to months rather than days, and not while gluten continues (C); and the lacteals are not blocked — this is a mucosal absorptive failure, not lymphatic obstruction, so fat is not the only nutrient affected (D). Reference: Ghana STG — coeliac disease; intestinal histology.",
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
        text: "Stem cells in the basal layer divide and migrate upward, keratinise and die to form the dead, anucleate stratum corneum",
      },
      {
        id: "b",
        text: "The corneum retains living nuclei and divides to replace cells lost from the basal layer",
      },
      {
        id: "c",
        text: "Keratinocytes are produced by the dermal collagen and migrate inward toward the subcutaneous fat",
      },
      {
        id: "d",
        text: "The basal layer contains melanocytes but no dividing cells, so the epidermis is renewed from the dermis",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The epidermis is a keratinized stratified squamous epithelium organized into 5 layers (from deep to superficial: Stratum Basale, Spinosum, Granulosum, Lucidum [thick skin only], and Corneum). The Stratum Basale contains single-layered stem cells undergoing active mitosis. As daughter keratinocytes are pushed superficially, they synthesize keratin intermediate filaments, produce keratohyalin and lamellar lipid granules in the granulosum (providing a hydrophobic water barrier), lose their nuclei and organelles, and flatten into the Stratum Corneum—a tough, horn-like layer of 15–30 sheets of dead keratin-packed squames that desquamates continuously (taking roughly 28–40 days from birth to shed). Why the other options fail: option a puts living dividing cells in the corneum, which is dead. Option c moves keratinocyte production to the dermis and reverses the direction of migration. Option d denies the dividing stem cells and melanocytes that the basal layer contains.",
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
        text: "Cutaneous vasoconstriction and piloerection trap warm air against the skin and conserve heat",
      },
      {
        id: "b",
        text: "Sweating is suppressed and blood is shunted to the viscera, so heat is retained in the core",
      },
      {
        id: "c",
        text: "Cutaneous vasodilation increases skin blood flow and eccrine sweating drives evaporative cooling",
      },
      {
        id: "d",
        text: "Eccrine glands secrete a hypertonic fluid that cools the skin by conduction rather than evaporation",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The preoptic anterior hypothalamus functions as the body's primary thermoregulatory thermostat. When core temperature rises above the set point, hypothalamic autonomic signaling initiates two primary heat-loss mechanisms: 1) CUTANEOUS VASODILATION: Dermal precapillary sphincters relax, redirecting warm blood from the body core to superficial subpapillary dermal capillary loops, allowing heat to radiate, conduct, and convect into the cooler ambient environment; 2) ECCRINE SWEAT GLAND ACTIVATION: Cholinergic sympathetic nerves stimulate eccrine glands across the body to secrete watery sweat, which absorbs thermal energy (latent heat of vaporization) as it evaporates from the skin. Why the other options fail: option a constricts the skin vessels and raises the hairs, which conserves heat rather than losing it. Option b suppresses sweating and sends blood to the viscera, which is the cold response. Option d has sweat cooling by conduction and being hypertonic, when sweat is hypotonic and cools by evaporation.",
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
        text: "Full-thickness loss of the epidermis and dermis, including nerves and appendages, leaving a leathery insensate eschar",
      },
      {
        id: "b",
        text: "Destruction of the epidermis and the upper dermis only, with pain preserved because the nerve endings remain",
      },
      {
        id: "c",
        text: "Destruction of the epidermis alone, with the dermis intact and the wound moist and painful",
      },
      {
        id: "d",
        text: "Destruction of the dermis and subcutaneous fat, with the epidermis spared and the surface blistered",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Full-thickness (third-degree) burns extend completely through the epidermis and the entire thickness of the dermis, often extending into the underlying hypodermis (subcutaneous tissue). Because all dermal appendages—including the dermal capillary plexus and sensory nerve endings (nociceptors, Meissner's, Merkel's, and free nerve terminals)—are completely incinerated, the wound appears leathery, waxy white, brown, or charred (eschar) and is completely insensitive to light touch and pinprick (anesthetic). However, peripheral zones of partial-thickness burn surrounding the wound remain intensely painful. Why the other options fail: Epidermis and upper dermis only is a partial-thickness burn with pain preserved; epidermis alone is superficial and stays moist and painful; dermis and fat with the epidermis spared and a blistered surface is not a leathery insensate eschar.",
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
        text: "Acute respiratory distress syndrome from the trauma itself, which gives bilateral infiltrates without petechiae",
      },
      {
        id: "b",
        text: "Fat embolism syndrome: marrow fat enters torn venous sinusoids, lodges in the pulmonary capillaries and causes petechiae",
      },
      {
        id: "c",
        text: "Pulmonary embolism from a deep vein thrombosis, which gives dyspnoea and hypoxia but no petechial rash",
      },
      {
        id: "d",
        text: "Sepsis from osteomyelitis at the fracture site, which gives fever and hypotension but not the rash",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Fat Embolism Syndrome (FES) is a life-threatening systemic complication occurring 24 to 72 hours following closed fractures of major long bones (especially the femur or tibia) or pelvic crush trauma. Disrupted bone marrow adipose tissue and medullary venous sinusoids allow fat globules to enter the systemic venous circulation. These fat emboli occlude pulmonary microvascular capillaries, triggering lipolysis into toxic free fatty acids that induce diffuse alveolar endothelial injury, acute lung injury (ARDS), ventilation-perfusion mismatch (severe hypoxemia), cerebral microvascular occlusion (confusion, altered mental status), and thrombocytopenic microvascular fragility (pathognomonic non-palpable petechiae over the neck, axilla, and chest). Why the other options fail: ARDS from the trauma gives bilateral infiltrates without petechiae; pulmonary embolism from a deep vein thrombosis gives dyspnoea and hypoxia without a rash; osteomyelitis sepsis gives fever and hypotension without the petechiae that appear with the confusion.",
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
        text: "Hyperactive sounds reflect increased secretion rather than contraction, and the fluid loss is into the peritoneum",
      },
      {
        id: "b",
        text: "The bowel proximal to the block dilates and becomes atonic, so sounds are absent above and tinkling below",
      },
      {
        id: "c",
        text: "Proximal muscle contracts against the block while distal bowel is quiet, and fluid is lost into the lumen",
      },
      {
        id: "d",
        text: "The obstruction reverses peristalsis, so the bowel empties proximally and the abdomen becomes silent",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "In mechanical small bowel obstruction (e.g., from postoperative adhesions or incarcerated hernias), physical blockage prevents the distal progression of chyme. Proximally, the smooth muscle layers (muscularis externa: circular and longitudinal fibers) mount vigorous hyper-peristaltic contractions to overcome the resistance, manifesting early as high-pitched, metallic 'tinkling' sounds and audible peristaltic rushes. Proximal intraluminal accumulation of swallowed air and digestive secretions (7–8 L/day of saliva, gastric juice, bile, and pancreatic fluids) increases wall tension, compresses venous drainage, causes bowel wall edema, and sequesters massive fluid into the third space, leading to hypovolemic shock and electrolyte collapse. Why the other options fail: An atonic bowel above the block reverses the findings, because the bowel above is hyperactive and the bowel below is quiet; sounds of increased secretion misread peristalsis; reversed peristalsis with a silent abdomen is not the high-pitched rush of mechanical obstruction.",
    strategy: "GI obstruction: Muscularis externa contracts vigorously against obstruction -> high-pitched tinkling sounds proximal to obstruction -> intraluminal third-spacing and hypovolemia.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "bowel-obstruction", "muscularis-externa", "peristalsis", "third-spacing"],
    isFree: true,
  },
];
