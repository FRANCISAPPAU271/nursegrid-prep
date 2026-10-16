import { AuthoredQuestion } from "./authored-bank";

/**
 * 20 Original NCLEX-style clinical scenario practice questions
 * meticulously authored for Haematological Nursing course modules:
 * - Module 01: Foundations & FBC Interpretation (NG-MOD-HAEM-001 - 002)
 * - Module 02: Anaemias & Bone Marrow Failure (NG-MOD-HAEM-003 - 005)
 * - Module 03: Sickle Cell Disease & Haemoglobinopathies (NG-MOD-HAEM-006 - 008)
 * - Module 04: Bleeding & Clotting Disorders (NG-MOD-HAEM-009 - 011)
 * - Module 05: Blood Transfusion Safety & Reactions (NG-MOD-HAEM-012 - 014)
 * - Module 06: Malignancy & Immunology (NG-MOD-HAEM-015 - 017)
 * - Module 07: Haematological Pharmacology & Calculations (NG-MOD-HAEM-018 - 020)
 */
export const HAEM_MODULE_SCENARIOS: AuthoredQuestion[] = [
  // ---------------------------------------------------------------------------
  // MODULE 01: Foundations & FBC Interpretation
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-HAEM-001",
    categorySlug: "med-surg",
    stem: "A nurse reviews the complete blood count (CBC) of a 46-year-old client who presents with chronic fatigue and exertional dyspnea: Hemoglobin 8.2 g/dL, Hematocrit 25%, Mean Corpuscular Volume (MCV) 68 fL (reference range: 80–100 fL), and Mean Corpuscular Hemoglobin (MCH) 22 pg (reference range: 27–33 pg). How should the nurse interpret these erythrocyte indices?",
    choices: [
      { id: "a", text: "Microcytic, hypochromic anemia, most commonly caused by chronic occult blood loss or severe iron deficiency" },
      { id: "b", text: "Macrocytic, normochromic anemia, typical of vitamin B12 or folate deficiency" },
      { id: "c", text: "Normocytic, normochromic anemia, characteristic of acute hypovolemic hemorrhage" },
      { id: "d", text: "Hemolytic anemia associated with normal erythrocyte morphology and elevated mean corpuscular volume" },
    ],
    correctChoiceId: "a",
    rationale: "An MCV below 80 fL defines microcytosis (abnormally small red blood cells), and an MCH below 27 pg reflects hypochromia (pale red blood cells with reduced hemoglobin content). Microcytic, hypochromic anemia is classically caused by iron deficiency anemia (often secondary to occult gastrointestinal bleeding or heavy menorrhagia) or thalassemia. Macrocytic anemia exhibits an MCV > 100 fL (e.g., B12 or folate deficiency), whereas acute blood loss initially presents with normocytic, normochromic indices.",
    strategy: "Analyze the red blood cell indices: MCV < 80 = Microcytic; MCH < 27 = Hypochromic. The most common cause is iron deficiency from chronic blood loss.",
    difficulty: "easy",
    tags: ["haematology", "fbc", "mcv", "iron-deficiency", "assessment"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-HAEM-002",
    categorySlug: "med-surg",
    stem: "A client who presented with acute autoimmune hemolytic anemia has a significantly elevated reticulocyte count of 8.5% (reference range: 0.5%–2.5%). How should the nurse explain this laboratory finding to the client?",
    choices: [
      { id: "a", text: "\"Your bone marrow is responding appropriately by rapidly producing and releasing immature red blood cells to replace those being destroyed.\"" },
      { id: "b", text: "\"Your bone marrow has failed completely, resulting in premature release of non-viable cellular debris.\"" },
      { id: "c", text: "\"This high percentage indicates severe bone marrow suppression and impending aplastic anemia.\"" },
      { id: "d", text: "\"Your kidneys have stopped manufacturing erythropoietin, leading to irregular erythrocyte maturation.\"" },
    ],
    correctChoiceId: "a",
    rationale: "Reticulocytes are immature red blood cells released into the circulation from the bone marrow. A markedly elevated reticulocyte count (reticulocytosis) indicates an active, compensatory erythropoietic response by healthy bone marrow trying to overcome peripheral erythrocyte loss (such as in acute hemolysis, sickle cell crisis, or acute blood loss) or an effective response to iron/B12 therapy. Conversely, a low reticulocyte count in the presence of severe anemia indicates impaired bone marrow production (such as in aplastic anemia or renal failure).",
    strategy: "Recall the physiological role of reticulocytes: High reticulocytes = Active, working bone marrow compensating for blood destruction or loss.",
    difficulty: "medium",
    tags: ["haematology", "reticulocytes", "hemolysis", "bone-marrow"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 02: Anaemias & Bone Marrow Failure
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-HAEM-003",
    categorySlug: "pharmacology-parenteral",
    stem: "A nurse provides discharge education to a client diagnosed with iron deficiency anemia who is prescribed oral ferrous sulfate 325 mg three times daily. Which instruction is essential to ensure maximum gastrointestinal absorption and patient safety?",
    choices: [
      { id: "a", text: "Take each tablet with a large glass of whole milk to coat the stomach" },
      { id: "b", text: "Take the tablet with orange juice or a vitamin C supplement on an empty stomach, and expect dark black or green-tinged stools" },
      { id: "c", text: "Take the medication concurrently with calcium carbonate and antacids to alleviate gastric cramping" },
      { id: "d", text: "Crush the tablet and dissolve it in hot black tea to enhance chemical dissolution" },
    ],
    correctChoiceId: "b",
    rationale: "Oral iron (ferrous sulfate) is absorbed best in an acidic environment; co-administering with ascorbic acid (vitamin C or citrus juice) significantly enhances absorption. Iron should ideally be taken on an empty stomach (1 hour before or 2 hours after meals). Clients must be informed that iron turns stools dark green or black (a harmless expected effect, distinguishing it from melena). Calcium, dairy products, antacids, coffee, and tea bind iron and drastically inhibit its absorption. Never crush enteric-coated or sustained-release iron tablets.",
    strategy: "Remember iron absorption rules: Acid enhances absorption (Vitamin C/orange juice); Calcium, milk, and tea inhibit absorption. Dark green/black stools are expected.",
    difficulty: "easy",
    tags: ["haematology", "iron-supplementation", "pharmacology", "patient-education"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-HAEM-004",
    categorySlug: "med-surg",
    stem: "A client presents with extreme fatigue, beefy-red smooth tongue (glossitis), bilateral lower-extremity numbness, tingling in the hands and feet, and an unsteady ataxic gait. Laboratory testing reveals megaloblastic macrocytic anemia. Which etiology should the nurse recognize as the cause of this client's presentation?",
    choices: [
      { id: "a", text: "Folic acid deficiency secondary to chronic alcohol use disorder" },
      { id: "b", text: "Vitamin B12 deficiency (pernicious anemia) with neurological demyelination" },
      { id: "c", text: "Chronic lead poisoning causing basophilic stippling" },
      { id: "d", text: "Aplastic anemia caused by direct cytotoxic stem cell failure" },
    ],
    correctChoiceId: "b",
    rationale: "Both vitamin B12 (cobalamin) and folate deficiencies cause megaloblastic macrocytic anemia and glossitis, but ONLY vitamin B12 deficiency produces neurological manifestations (paresthesias, peripheral neuropathy, loss of vibratory and position sense, ataxia, and subacute combined degeneration of the spinal cord). Folate deficiency lacks these neurocognitive symptoms. Pernicious anemia results from autoimmune destruction of gastric parietal cells, causing a lack of intrinsic factor required for ileal B12 absorption, necessitating lifelong parenteral (IM) or high-dose oral vitamin B12 therapy.",
    strategy: "Differentiate B12 from Folate deficiency: B12 deficiency causes NEUROLOGICAL symptoms (tingling, ataxia, numbness); Folate deficiency does NOT cause neurological deficits.",
    difficulty: "medium",
    tags: ["haematology", "vitamin-b12", "pernicious-anemia", "neurological", "differential-diagnosis"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-HAEM-005",
    categorySlug: "med-surg",
    stem: "A client with idiopathic aplastic anemia is admitted to the medical unit. The client's complete blood count reveals severe pancytopenia: Hemoglobin 6.8 g/dL, Absolute Neutrophil Count (ANC) 380/mcL, and Platelet count 14,000/mcL. Which nursing intervention is the highest priority?",
    choices: [
      { id: "a", text: "Administer high-dose intramuscular analgesics every 4 hours for generalized fatigue" },
      { id: "b", text: "Place the client on protective neutropenic isolation, enforce strict bleeding precautions, and prohibit rectal procedures" },
      { id: "c", text: "Encourage vigorous flossing twice daily to prevent oral candidiasis" },
      { id: "d", text: "Position the client flat on their back and restrict daily oral fluid intake to 500 mL" },
    ],
    correctChoiceId: "b",
    rationale: "Aplastic anemia results in bone marrow failure and severe pancytopenia (profound reduction in red blood cells, white blood cells, and platelets). With an ANC < 500/mcL, the client is at extreme risk of life-threatening opportunistic infections and septic shock; protective isolation, strict hand hygiene, and a low-microbial diet are mandatory. With platelets < 20,000/mcL, spontaneous fatal intracranial or gastrointestinal bleeding can occur; bleeding precautions (soft toothbrush, no razors, no IM injections, no rectal thermometers/suppositories) are essential.",
    strategy: "Recognize pancytopenia risks: Low WBC = infection risk (neutropenic precautions); Low Platelets = bleeding risk (bleeding precautions). Prohibit IM injections and rectal procedures.",
    difficulty: "medium",
    tags: ["haematology", "aplastic-anemia", "pancytopenia", "infection-control", "bleeding-precautions"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 03: Sickle Cell Disease & Haemoglobinopathies
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-HAEM-006",
    categorySlug: "med-surg",
    stem: "An 18-year-old client with sickle cell anemia (HbSS) is admitted to the emergency department in an acute vaso-occlusive pain crisis, reporting severe 10/10 pain in the bilateral femurs and lower back. Vital signs: BP 118/72 mm Hg, HR 108 beats/min, RR 20 breaths/min, SpO2 97% on room air. What is the nurse's priority sequence of collaborative interventions?",
    choices: [
      { id: "a", text: "Apply high-flow oxygen via non-rebreather mask and administer oral aspirin" },
      { id: "b", text: "Initiate aggressive intravenous fluid hydration and administer scheduled intravenous opioid analgesia (e.g., morphine or hydromorphone)" },
      { id: "c", text: "Administer intravenous meperidine bolus and apply ice packs directly to the painful bony areas" },
      { id: "d", text: "Immobilize all four extremities in bilateral splints and place on strict fluid restriction" },
    ],
    correctChoiceId: "b",
    rationale: "The cornerstones of acute sickle cell vaso-occlusive crisis management are aggressive intravenous hydration and prompt, scheduled intravenous opioid analgesia (morphine or hydromorphone). IV hydration reduces blood viscosity, reverses erythrocyte sickling, and restores microvascular perfusion. Opioids control severe ischemic bone pain. Supplemental oxygen is only indicated if the client is hypoxic (SpO2 < 95%), as oxygen in non-hypoxic clients suppresses erythropoiesis. Meperidine (pethidine) is strictly contraindicated because its active metabolite (normeperidine) accumulates, causing central nervous system excitation and seizures. Cold/ice causes vasoconstriction and worsens sickling.",
    strategy: "Recall the sickle cell crisis management triad: Hydration (IV fluids) + scheduled Opioid Analgesia (never meperidine) + Warmth (never ice/cold).",
    difficulty: "medium",
    tags: ["haematology", "sickle-cell", "vaso-occlusive-crisis", "pain-management", "safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-HAEM-007",
    categorySlug: "med-surg",
    stem: "A client hospitalized for a sickle cell pain crisis on day 2 suddenly develops a fever of 38.9°C (102°F), acute pleuritic chest pain, dyspnea, and a cough producing blood-tinged sputum. Assessment reveals tachypnea at 30 breaths/min and an SpO2 that has fallen from 98% to 88%. A chest radiograph demonstrates a new consolidation in the right middle lobe. What life-threatening complication must the nurse recognize and act upon immediately?",
    choices: [
      { id: "a", text: "Acute chest syndrome" },
      { id: "b", text: "Spontaneous pneumothorax" },
      { id: "c", text: "Isolated viral bronchitis" },
      { id: "d", text: "Simple sickle cell osteomyelitis of the ribs" },
    ],
    correctChoiceId: "a",
    rationale: "Acute Chest Syndrome (ACS) is the leading cause of mortality in clients with sickle cell disease. It is defined as a new pulmonary infiltrate on chest radiograph accompanied by respiratory signs/symptoms: fever, chest pain, tachypnea, cough, and hypoxemia. ACS results from pulmonary microvascular occlusion, fat embolism from necrotic bone marrow, and secondary infectious pneumonia. Immediate treatment includes high-flow oxygen, aggressive incentive spirometry (10 breaths every 2 hours while awake), empiric broad-spectrum IV antibiotics, analgesia, and urgent transfusion therapy (exchange transfusion).",
    strategy: "Connect the diagnostic criteria: Sickle cell disease + New pulmonary infiltrate on CXR + Fever/chest pain/hypoxia = Acute Chest Syndrome.",
    difficulty: "medium",
    tags: ["haematology", "sickle-cell", "acute-chest-syndrome", "emergency", "critical-care"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-HAEM-008",
    categorySlug: "pharmacology-parenteral",
    stem: "A client with sickle cell anemia who has experienced four severe vaso-occlusive pain crises over the past year is prescribed daily oral hydroxyurea. When providing education regarding this medication, which teaching point should the nurse emphasize?",
    choices: [
      { id: "a", text: "\"Hydroxyurea cures the genetic mutation by correcting the defective beta-globin gene.\"" },
      { id: "b", text: "\"Hydroxyurea stimulates your body to produce fetal hemoglobin (HbF), reducing sickling; you must have regular blood tests because it suppresses bone marrow production.\"" },
      { id: "c", text: "\"You can safely discontinue this medication as soon as your joint pain resolves for 3 weeks.\"" },
      { id: "d", text: "\"This medication is completely safe to take if you become pregnant.\"" },
    ],
    correctChoiceId: "b",
    rationale: "Hydroxyurea increases the concentration of fetal hemoglobin (HbF, which does not sickle), diluting HbS and dramatically reducing the frequency of painful vaso-occlusive crises, acute chest syndrome episodes, and transfusion requirements. Its major dose-limiting adverse effect is bone marrow suppression (leukopenia, thrombocytopenia, and anemia); therefore, regular complete blood count monitoring is mandatory. Hydroxyurea is teratogenic; effective contraception is required during treatment and for several months following discontinuation.",
    strategy: "Identify key hydroxyurea facts: Increases fetal hemoglobin (HbF) $\\rightarrow$ prevents sickling; Major side effect = bone marrow suppression (monitor CBC); Teratogenic.",
    difficulty: "medium",
    tags: ["haematology", "sickle-cell", "hydroxyurea", "pharmacology", "patient-education"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 04: Bleeding & Clotting Disorders
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-HAEM-009",
    categorySlug: "pediatrics",
    stem: "A 9-year-old child with severe hemophilia A (Factor VIII deficiency) trips on the playground and sustains a blunt injury to the right knee. Within an hour, the knee is hot, tensely swollen, and exquisitely painful, consistent with acute hemarthrosis. What is the nurse's priority action?",
    choices: [
      { id: "a", text: "Administer prescribed intravenous recombinant Factor VIII concentrate immediately" },
      { id: "b", text: "Perform vigorous passive range-of-motion exercises to prevent joint contracture" },
      { id: "c", text: "Administer oral aspirin 325 mg to alleviate severe inflammatory pain" },
      { id: "d", text: "Apply a warm heating pad continuously over the swollen knee" },
    ],
    correctChoiceId: "a",
    rationale: "In hemophilia A, acute bleeding into a joint space (hemarthrosis) causes painful distension and permanent destruction of cartilage and bone if untreated. The immediate priority is IV infusion of recombinant Factor VIII concentrate to replace the missing clotting factor and achieve hemostasis. Concurrently, the joint is immobilized, elevated, and ice is applied (RICE protocol). Passive range-of-motion is strictly contraindicated during acute bleeding (may worsen hemorrhage); gentle active ROM is started only after bleeding has ceased. Aspirin and NSAIDs inhibit platelet aggregation and are strictly contraindicated.",
    strategy: "Recall the hemophilia priority rule: Factor replacement FIRST! Factor VIII stops the bleeding. Never use aspirin/NSAIDs, and do not perform passive ROM during active hemarthrosis.",
    difficulty: "easy",
    tags: ["haematology", "hemophilia", "pediatrics", "factor-viii", "hemarthrosis"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-HAEM-010",
    categorySlug: "med-surg",
    stem: "A client with chronic immune thrombocytopenic purpura (ITP) has a platelet count of 18,000/mcL. The nurse enters the room and notes petechiae covering the lower extremities and active epistaxis. Which prescription should the nurse immediately question and clarify with the provider?",
    choices: [
      { id: "a", text: "Intravenous methylprednisolone 60 mg daily" },
      { id: "b", text: "Intramuscular ketorolac 30 mg every 6 hours PRN for severe headache" },
      { id: "c", text: "Intravenous immune globulin (IVIG) 1 g/kg infusion" },
      { id: "d", text: "Daily stool softener to prevent straining" },
    ],
    correctChoiceId: "b",
    rationale: "In severe thrombocytopenia (platelets < 20,000/mcL), intramuscular (IM) injections are strictly contraindicated because the vascular puncture cannot clot effectively, leading to deep, massive intramuscular hematomas. Furthermore, ketorolac is a nonsteroidal anti-inflammatory drug (NSAID) that inhibits platelet COX-1 and platelet aggregation, compounding the bleeding risk. Finally, a new severe headache in a severely thrombocytopenic client suggests life-threatening intracranial hemorrhage, requiring immediate non-contrast brain CT rather than analgesics.",
    strategy: "Safety rules in severe thrombocytopenia: (1) NO intramuscular injections; (2) NO NSAIDs/aspirin; (3) Severe headache = possible intracranial bleed, requiring immediate provider evaluation.",
    difficulty: "medium",
    tags: ["haematology", "itp", "thrombocytopenia", "safety", "pharmacology"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-HAEM-011",
    categorySlug: "med-surg",
    stem: "A client in the intensive care unit with gram-negative urosepsis develops oozing of dark blood from peripheral IV sites, petechiae, ecchymoses, and gross hematuria. Laboratory results show: Platelets 28,000/mcL, Fibrinogen 65 mg/dL (low), D-dimer markedly elevated at > 5,000 ng/mL, and Prothrombin Time (PT) 28 seconds (elevated). How should the nurse interpret these findings?",
    choices: [
      { id: "a", text: "Disseminated intravascular coagulation (DIC) characterized by microvascular thrombosis and secondary consumption coagulopathy" },
      { id: "b", text: "Isolated vitamin K deficiency responsive to oral supplementation" },
      { id: "c", text: "Mild heparin-induced thrombocytopenia without systemic coagulopathy" },
      { id: "d", text: "Primary polycythemia vera complicated by physiological hypercoagulability" },
    ],
    correctChoiceId: "a",
    rationale: "Disseminated Intravascular Coagulation (DIC) is a catastrophic consumptive thrombo-hemorrhagic disorder triggered by massive systemic inflammation (most commonly sepsis). Widespread intravascular thrombin activation leads to microvascular clotting (organ ischemia), which completely consumes platelets and clotting factors (platelets < 50,000, low fibrinogen, prolonged PT and aPTT). Concurrently, extensive secondary fibrinolysis occurs, generating massive amounts of fibrin degradation products and D-dimer, culminating in diffuse clinical hemorrhage (IV site oozing, hematuria, petechiae).",
    strategy: "Identify the diagnostic laboratory pattern of DIC: High D-dimer + Low Platelets + Low Fibrinogen + Prolonged PT/PTT in a septic client.",
    difficulty: "hard",
    tags: ["haematology", "dic", "sepsis", "critical-care", "coagulopathy"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 05: Blood Transfusion Safety & Reactions
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-HAEM-012",
    categorySlug: "fundamentals",
    stem: "A nurse is preparing to administer one unit of packed red blood cells (PRBCs) to a client. Which action is mandatory before spiking and infusing the blood product?",
    choices: [
      { id: "a", text: "Have a second qualified healthcare provider independently verify the client's identity, blood unit number, ABO/Rh compatibility, and expiration date at the bedside" },
      { id: "b", text: "Dilute the blood unit with 5% dextrose in water (D5W) to prevent cellular clumping" },
      { id: "c", text: "Warm the blood unit in a microwave oven for 30 seconds to bring it to body temperature" },
      { id: "d", text: "Program the infusion pump to deliver the entire 300 mL unit within the first 15 minutes" },
    ],
    correctChoiceId: "a",
    rationale: "The most critical step in preventing fatal ABO-incompatible hemolytic transfusion reactions is the bedside two-person independent verification of the client's identification band, full name, medical record number, unit identification number, ABO group and Rh type, and expiration date. PRBCs must only be co-infused with 0.9% normal saline (dextrose solutions cause red cell hemolysis, and lactated Ringer's causes clotting due to calcium). Blood must never be heated in a microwave (causes massive hemolysis). Infusions must start slowly (about 2 mL/min or 50 mL/hr) during the first 15 minutes while the nurse monitors for acute reactions.",
    strategy: "Recall the cardinal blood transfusion rules: (1) Two-person bedside check; (2) Normal saline ONLY; (3) Start slow (first 15 min), stay at bedside; (4) Complete within 4 hours.",
    difficulty: "easy",
    tags: ["haematology", "transfusion", "safety", "two-person-check", "fundamentals"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-HAEM-013",
    categorySlug: "med-surg",
    stem: "Seven minutes after starting an infusion of packed red blood cells, a client complains of severe lumbar lower back pain, dyspnea, and sudden chills. The nurse observes facial flushing, a pulse of 124 beats/min, and a blood pressure drop from 126/80 to 88/50 mm Hg. What is the nurse's immediate sequence of actions?",
    choices: [
      { id: "a", text: "Stop the transfusion immediately, disconnect the blood tubing from the IV catheter hub, infuse 0.9% normal saline with new tubing, and notify the provider and blood bank" },
      { id: "b", text: "Slow the infusion rate to 10 mL/hr and administer oral acetaminophen" },
      { id: "c", text: "Flush the blood tubing with the primary IV line and reposition the client in Trendelenburg position" },
      { id: "d", text: "Administer intravenous diphenhydramine and complete the unit within 1 hour" },
    ],
    correctChoiceId: "a",
    rationale: "Flushing, fever, chills, tachycardia, hypotension, and acute lower back (flank) pain during the first minutes of a transfusion are the hallmark signs of an acute hemolytic transfusion reaction (usually due to ABO incompatibility). Host antibodies destroy donor red blood cells, triggering systemic shock, renal failure, and DIC. The nurse must STOP the transfusion immediately, disconnect the entire blood set from the IV cannula (to prevent infusing any residual blood remaining in the tubing), attach fresh tubing to infuse 0.9% normal saline to support blood pressure and renal perfusion, notify the provider/blood bank, and send the blood bag, tubing, and client blood/urine samples to the lab.",
    strategy: "Cardinal rule of any acute transfusion reaction: STOP THE INFUSION IMMEDIATELY $\\rightarrow$ Disconnect tubing at catheter hub $\\rightarrow$ Run normal saline with NEW tubing $\\rightarrow$ Notify provider/lab.",
    difficulty: "medium",
    tags: ["haematology", "transfusion-reaction", "acute-hemolytic", "emergency"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-HAEM-014",
    categorySlug: "med-surg",
    stem: "An 82-year-old client with chronic heart failure and severe anemia is receiving a unit of packed red blood cells. Two hours into the transfusion, the client develops sudden severe dyspnea, orthopnea, a blood pressure rise from 130/74 to 178/96 mm Hg, jugular venous distension, and coarse bilateral crackles throughout both lung bases. The nurse recognizes transfusion-associated circulatory overload (TACO). What should the nurse do first?",
    choices: [
      { id: "a", text: "Stop or pause the transfusion, place the client upright in high-Fowler position with feet dangling, and administer prescribed IV furosemide" },
      { id: "b", text: "Increase the infusion rate to finish the unit before fluid shifts occur" },
      { id: "c", text: "Administer subcutaneous epinephrine and IV diphenhydramine for anaphylaxis" },
      { id: "d", text: "Place the client in the supine position with legs elevated above the head" },
    ],
    correctChoiceId: "a",
    rationale: "Transfusion-Associated Circulatory Overload (TACO) occurs when blood products are infused faster than the client's cardiovascular system can accommodate, precipitating acute cardiogenic pulmonary edema. Features include acute respiratory distress, hypertension (differentiating it from TRALI, which presents with hypotension), elevated jugular venous pressure, and pulmonary crackles. The nurse must stop or pause the transfusion, elevate the head of the bed to high-Fowler with feet dangling (to decrease venous return and pulmonary vascular congestion), administer supplemental oxygen, and administer prescribed loop diuretics (IV furosemide) to promote rapid diuresis.",
    strategy: "Recognize TACO: Fluid overload with hypertension + JVD + crackles. Priority: Stop transfusion, sit upright (high-Fowler), give IV furosemide.",
    difficulty: "medium",
    tags: ["haematology", "taco", "circulatory-overload", "transfusion", "gerontology"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 06: Malignancy & Immunology
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-HAEM-015",
    categorySlug: "safety-infection-control",
    stem: "A client with acute lymphoblastic leukemia (ALL) receiving induction chemotherapy develops profound neutropenia with an Absolute Neutrophil Count (ANC) of 250/mcL. Which infection-control measure must the nurse enforce to protect this immunocompromised client?",
    choices: [
      { id: "a", text: "Place the client in a private room, practice meticulous hand hygiene, prohibit fresh flowers and unpasteurized foods, and avoid all rectal procedures" },
      { id: "b", text: "Allow fresh potted plants and cut flowers in the room to boost morale" },
      { id: "c", text: "Serve fresh unwashed garden salads and raw unpasteurized cheeses" },
      { id: "d", text: "Check rectal temperatures every 2 hours to detect early fevers" },
    ],
    correctChoiceId: "a",
    rationale: "An Absolute Neutrophil Count (ANC) < 500/mcL represents severe neutropenia, placing the client at imminent risk of life-threatening opportunistic bacterial and fungal sepsis. Protective neutropenic precautions include: private room, strict hand hygiene for all entering, prohibiting fresh flowers, plants, and soil (sources of Aspergillus and Pseudomonas), serving thoroughly cooked foods (no raw fruits, raw vegetables, or unpasteurized dairy), avoiding all invasive rectal procedures (temperatures, enemas, suppositories) due to risk of mucosal tears and bacteremia, and reporting any temperature $\\ge 38.0^\\circ\\text{C}$ ($100.4^\\circ\\text{F}$) immediately.",
    strategy: "Neutropenic precautions checklist: ANC < 500 = Private room, meticulous hand hygiene, NO flowers/plants, NO raw foods, NO rectal temps/suppositories. Fever = emergency!",
    difficulty: "easy",
    tags: ["haematology", "neutropenia", "leukemia", "infection-control", "anc"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-HAEM-016",
    categorySlug: "med-surg",
    stem: "A 23-year-old client presents with a painless, firm, enlarged lymph node in the left supraclavicular area that has persisted for 2 months. An excisional lymph node biopsy demonstrates large, multinucleated giant cells with an 'owl-eye' appearance known as Reed-Sternberg cells. Which malignancy does this pathological finding confirm?",
    choices: [
      { id: "a", text: "Hodgkin's lymphoma" },
      { id: "b", text: "Non-Hodgkin's lymphoma" },
      { id: "c", text: "Chronic lymphocytic leukemia" },
      { id: "d", text: "Infectious mononucleosis" },
    ],
    correctChoiceId: "a",
    rationale: "The pathognomonic hallmark of Hodgkin's lymphoma is the identification of Reed-Sternberg cells (abnormal, giant, multinucleated B lymphocytes with prominent nucleoli resembling owl eyes) on lymph node biopsy. Hodgkin's lymphoma typically arises in young adults, presenting with painless, non-tender cervical or supraclavicular lymphadenopathy and systemic 'B symptoms' (drenching night sweats, unexplained fever $> 38.0^\\circ\\text{C}$, and weight loss $> 10\\%$ over 6 months). Non-Hodgkin's lymphoma lacks Reed-Sternberg cells and exhibits diffuse nodal and extranodal involvement.",
    strategy: "Associate Reed-Sternberg cells with Hodgkin's: Reed-Sternberg cells = Hodgkin's lymphoma. Painless lymphadenopathy + B symptoms (fever, night sweats, weight loss).",
    difficulty: "easy",
    tags: ["haematology", "hodgkins-lymphoma", "reed-sternberg", "oncology"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-HAEM-017",
    categorySlug: "med-surg",
    stem: "A 66-year-old client is diagnosed with multiple myeloma. The nurse reviews the client's diagnostic workup and notes osteolytic punched-out lesions on skull radiographs, elevated serum calcium of 12.2 mg/dL, elevated serum creatinine of 2.6 mg/dL, and Bence Jones proteinuria. Which nursing intervention is essential to prevent renal failure and pathological skeletal fractures in this client?",
    choices: [
      { id: "a", text: "Encourage vigorous weight-lifting and restrict oral fluid intake to 800 mL/day" },
      { id: "b", text: "Maintain aggressive intravenous hydration of 2 to 3 liters daily and handle the client with gentle log-rolling maneuvers during repositioning" },
      { id: "c", text: "Administer oral calcium carbonate supplements with each meal" },
      { id: "d", text: "Place the client on strict complete bed rest without any repositioning" },
    ],
    correctChoiceId: "b",
    rationale: "Multiple myeloma features neoplastic proliferation of plasma cells in the bone marrow, causing excessive osteoclast stimulation. This leads to the 'CRAB' syndrome: hyperCalcemia, Renal insufficiency, Anemia, and Bone lesions. Aggressive hydration (2 to 3 L/day) is critical to flush out free light chains (Bence Jones proteins) that clog renal tubules and to dilute serum calcium. Because widespread osteolytic bone destruction predisposes clients to severe pathological fractures with minimal trauma, nurses must handle clients gently, avoid pulling limbs, and use log-rolling techniques during repositioning.",
    strategy: "Recall Multiple Myeloma CRAB priorities: Hypercalcemia + Bone lytic lesions + Renal failure. Interventions: Aggressive fluids (flushes calcium and light chains) + Gentle handling (prevents fractures).",
    difficulty: "medium",
    tags: ["haematology", "multiple-myeloma", "hypercalcemia", "pathological-fractures", "renal"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 07: Haematological Pharmacology & Calculations
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-HAEM-018",
    categorySlug: "pharmacology-parenteral",
    stem: "A client receiving a continuous intravenous unfractionated heparin infusion for an acute deep vein thrombosis has their heparin protocol reassessed on day 6 of therapy. Baseline platelet count was 260,000/mcL; today's platelet count is 110,000/mcL. What critical complication must the nurse suspect, and what is the required nursing action?",
    choices: [
      { id: "a", text: "Heparin-induced thrombocytopenia (HIT); immediately discontinue the heparin infusion and notify the provider" },
      { id: "b", text: "Expected mild dilutional thrombocytopenia; increase the heparin rate by 200 units/hr" },
      { id: "c", text: "Acute hemolytic anemia; administer prescribed protamine sulfate and continue heparin" },
      { id: "d", text: "Spontaneous autoimmune recovery; prepare to discharge the client on oral aspirin" },
    ],
    correctChoiceId: "a",
    rationale: "Heparin-Induced Thrombocytopenia (HIT) is a life-threatening, immune-mediated adverse reaction caused by antibodies against heparin-platelet factor 4 (PF4) complexes. It is characterized by an acute drop in platelet count of 50% or more from baseline, typically occurring 5 to 10 days after starting heparin. Rather than bleeding, HIT triggers paradoxical, catastrophic venous and arterial thrombosis. The nurse's immediate priority is stopping ALL heparin products (including heparin flushes) and immediately notifying the provider so an alternative non-heparin anticoagulant (such as argatroban or fondaparinux) can be initiated.",
    strategy: "Identify Heparin-Induced Thrombocytopenia (HIT): Platelet drop $\\ge 50\\%$ 5-10 days into heparin therapy $\\rightarrow$ STOP ALL HEPARIN IMMEDIATELY (risk of massive thrombosis).",
    difficulty: "hard",
    tags: ["haematology", "heparin", "hit", "thrombocytopenia", "pharmacology", "safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-HAEM-019",
    categorySlug: "med-surg",
    stem: "A nurse provides discharge teaching to a client with non-valvular atrial fibrillation who is prescribed warfarin. The client's target International Normalized Ratio (INR) is 2.0 to 3.0. Which dietary instruction regarding vitamin K intake is correct?",
    choices: [
      { id: "a", text: "\"Completely eliminate all green leafy vegetables (such as spinach, kale, and broccoli) from your diet permanently.\"" },
      { id: "b", text: "\"Maintain a consistent, steady intake of vitamin K-rich foods from day to day rather than making drastic dietary changes.\"" },
      { id: "c", text: "\"Eat large amounts of kale and spinach whenever your INR becomes slightly elevated.\"" },
      { id: "d", text: "\"Double your warfarin dose on days when you do not consume any vegetables.\"" },
    ],
    correctChoiceId: "b",
    rationale: "Warfarin acts as a vitamin K antagonist, inhibiting the hepatic synthesis of vitamin K-dependent clotting factors (II, VII, IX, X). Sudden fluctuations in dietary vitamin K alter the anticoagulant efficacy of warfarin: a sudden increase in vitamin K intake (e.g., eating large amounts of spinach, kale, or collard greens) decreases the INR, increasing thrombosis risk, while sudden restriction increases the INR, predisposing to hemorrhage. Clients are instructed to maintain a consistent dietary intake of vitamin K from day to day so the warfarin dose can be accurately calibrated.",
    strategy: "Remember warfarin dietary rules: Consistency is key! Do NOT avoid green leafy vegetables completely; keep vitamin K intake STEADY and CONSISTENT every day.",
    difficulty: "easy",
    tags: ["haematology", "warfarin", "inr", "vitamin-k", "pharmacology", "patient-education"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-HAEM-020",
    categorySlug: "pediatrics",
    stem: "A pediatrician prescribes packed red blood cells (PRBCs) at 10 mL/kg for an anemic infant who weighs 8.4 kg. The total volume is to be infused via an electronic volumetric infusion pump over 3 hours. At what rate in milliliters per hour (mL/hr) should the nurse program the infusion pump?",
    choices: [
      { id: "a", text: "28 mL/hr" },
      { id: "b", text: "42 mL/hr" },
      { id: "c", text: "84 mL/hr" },
      { id: "d", text: "14 mL/hr" },
    ],
    correctChoiceId: "a",
    rationale: "Step 1: Calculate total prescribed volume: Total volume = 10 mL/kg × 8.4 kg = 84 mL. Step 2: Calculate the hourly infusion rate: Rate (mL/hr) = Total volume (mL) / Time (hr) = 84 mL / 3 hr = 28 mL/hr. In pediatric transfusions, precise volume calculations using electronic infusion syringe pumps or volumetric infusion devices are essential to prevent both under-transfusion and volume overload.",
    strategy: "Step 1: 10 mL/kg × 8.4 kg = 84 mL. Step 2: 84 mL ÷ 3 hours = 28 mL/hr.",
    difficulty: "easy",
    tags: ["haematology", "pediatrics", "calculations", "infusion-rate", "transfusion"],
    isFree: false,
  },
];
