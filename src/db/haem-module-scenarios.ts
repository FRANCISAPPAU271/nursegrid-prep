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
      { id: "a", text: "Microcytic and hypochromic, from chronic occult blood loss or iron deficiency" },
      { id: "b", text: "Macrocytic and normochromic, typical of vitamin B12 or folate deficiency" },
      { id: "c", text: "Normocytic and normochromic, as in acute haemorrhage with volume loss" },
      { id: "d", text: "Haemolytic, with normal red cell morphology and a raised corpuscular volume" },
    ],
    correctChoiceId: "a",
    rationale: "An MCV below 80 fL defines microcytosis (abnormally small red blood cells), and an MCH below 27 pg reflects hypochromia (pale red blood cells with reduced hemoglobin content). Microcytic, hypochromic anemia is classically caused by iron deficiency anemia (often secondary to occult gastrointestinal bleeding or heavy menorrhagia) or thalassemia. Macrocytic anemia exhibits an MCV > 100 fL (e.g., B12 or folate deficiency), whereas acute blood loss initially presents with normocytic, normochromic indices. Why the other options fail: option b describes an MCV above 100, when this client's is 68. Option c describes the picture of acute blood loss, which is normocytic until iron stores fall. Option d invents a haemolytic picture, which would usually raise the MCV rather than lower it.",
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
      { id: "a", text: "Your marrow has failed entirely, so it releases non-viable cellular debris" },
      { id: "b", text: "This high percentage means severe marrow suppression and incipient aplasia" },
      { id: "c", text: "Your kidneys have stopped making erythropoietin, so red cells mature badly" },
      { id: "d", text: "Your marrow is releasing immature red cells to replace the ones being destroyed" },
    ],
    correctChoiceId: "d",
    rationale: "Reticulocytes are immature red blood cells released into the circulation from the bone marrow. A markedly elevated reticulocyte count (reticulocytosis) indicates an active, compensatory erythropoietic response by healthy bone marrow trying to overcome peripheral erythrocyte loss (such as in acute hemolysis, sickle cell crisis, or acute blood loss) or an effective response to iron/B12 therapy. Conversely, a low reticulocyte count in the presence of severe anemia indicates impaired bone marrow production (such as in aplastic anemia or renal failure). Why the other options fail: option a has the marrow failing outright, which lowers the count rather than raising it. Option b calls the rise marrow suppression, which would again give a low count. Option c blames erythropoietin, which depresses the count rather than lifting it.",
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
      { id: "a", text: "Take each tablet with a large glass of whole milk so that it coats the stomach" },
      { id: "b", text: "Take it with calcium carbonate and an antacid to relieve the gastric cramping" },
      { id: "c", text: "Crush the tablet and dissolve it in hot black tea to improve the dissolution" },
      { id: "d", text: "Take it with orange juice, on an empty stomach, and expect dark black stools" },
    ],
    correctChoiceId: "d",
    rationale: "Oral iron (ferrous sulfate) is absorbed best in an acidic environment; co-administering with ascorbic acid (vitamin C or citrus juice) significantly enhances absorption. Iron should ideally be taken on an empty stomach (1 hour before or 2 hours after meals). Clients must be informed that iron turns stools dark green or black (a harmless expected effect, distinguishing it from melena). Calcium, dairy products, antacids, coffee, and tea bind iron and drastically inhibit its absorption. Never crush enteric-coated or sustained-release iron tablets. Why the other options fail: option a coats the stomach with milk, whose calcium binds the iron. Option b adds calcium carbonate and an antacid, both of which inhibit absorption. Option c crushes the tablet into hot tea, whose tannins chelate the iron.",
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
      { id: "a", text: "Folate deficiency from chronic alcohol use, without neurological signs" },
      { id: "b", text: "Chronic lead poisoning, which gives basophilic stippling of the red cells" },
      { id: "c", text: "Vitamin B12 deficiency with demyelination of the spinal cord" },
      { id: "d", text: "Aplastic anaemia from direct cytotoxic failure of the stem cells" },
    ],
    correctChoiceId: "c",
    rationale: "Both vitamin B12 (cobalamin) and folate deficiencies cause megaloblastic macrocytic anemia and glossitis, but ONLY vitamin B12 deficiency produces neurological manifestations (paresthesias, peripheral neuropathy, loss of vibratory and position sense, ataxia, and subacute combined degeneration of the spinal cord). Folate deficiency lacks these neurocognitive symptoms. Pernicious anemia results from autoimmune destruction of gastric parietal cells, causing a lack of intrinsic factor required for ileal B12 absorption, necessitating lifelong parenteral (IM) or high-dose oral vitamin B12 therapy. Why the other options fail: option a is folate deficiency, which explains the anaemia but spares the cord and so cannot produce numb feet. Option b is lead poisoning, which is not macrocytic. Option d is aplastic anaemia, which gives a pancytopenia rather than an isolated megaloblastic anaemia.",
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
      { id: "a", text: "Give high-dose intramuscular analgesia every four hours for the fatigue" },
      { id: "b", text: "Protective isolation, bleeding precautions and no rectal procedures" },
      { id: "c", text: "Encourage vigorous flossing twice a day to prevent oral candidiasis" },
      { id: "d", text: "Lay the client flat and restrict oral fluids to five hundred millilitres a day" },
    ],
    correctChoiceId: "b",
    rationale: "Aplastic anemia results in bone marrow failure and severe pancytopenia (profound reduction in red blood cells, white blood cells, and platelets). With an ANC < 500/mcL, the client is at extreme risk of life-threatening opportunistic infections and septic shock; protective isolation, strict hand hygiene, and a low-microbial diet are mandatory. With platelets < 20,000/mcL, spontaneous fatal intracranial or gastrointestinal bleeding can occur; bleeding precautions (soft toothbrush, no razors, no IM injections, no rectal thermometers/suppositories) are essential. Why the other options fail: option a gives intramuscular injections to a client whose platelets cannot seal the track. Option c traumatises gums that will bleed. Option d restricts fluid and lies the client flat without addressing either the infection or the bleeding risk.",
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
      { id: "a", text: "Intravenous fluids and scheduled intravenous opioid analgesia" },
      { id: "b", text: "High-flow oxygen by non-rebreather mask and oral aspirin for the pain" },
      { id: "c", text: "Intravenous pethidine as a bolus, with ice packs over the painful bones" },
      { id: "d", text: "Splint all four limbs and place the client on strict fluid restriction" },
    ],
    correctChoiceId: "a",
    rationale: "The cornerstones of acute sickle cell vaso-occlusive crisis management are aggressive intravenous hydration and prompt, scheduled intravenous opioid analgesia (morphine or hydromorphone). IV hydration reduces blood viscosity, reverses erythrocyte sickling, and restores microvascular perfusion. Opioids control severe ischemic bone pain. Supplemental oxygen is only indicated if the client is hypoxic (SpO2 < 95%), as oxygen in non-hypoxic clients suppresses erythropoiesis. Meperidine (pethidine) is strictly contraindicated because its active metabolite (normeperidine) accumulates, causing central nervous system excitation and seizures. Cold/ice causes vasoconstriction and worsens sickling. Why the other options fail: option b gives oxygen to a client already saturating at 97%, and aspirin does not touch vaso-occlusive pain. Option c uses pethidine, whose metabolite lowers the seizure threshold, and ice constricts vessels that are already occluded. Option d splints every limb and restricts the fluids that the crisis needs.",
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
      { id: "a", text: "A spontaneous pneumothorax, given the sudden pleuritic chest pain" },
      { id: "b", text: "Acute chest syndrome, the leading cause of death in sickle cell disease" },
      { id: "c", text: "An isolated viral bronchitis, given the blood-tinged sputum and cough" },
      { id: "d", text: "Sickle cell osteomyelitis of the ribs, given the fever and chest pain" },
    ],
    correctChoiceId: "b",
    rationale: "Acute Chest Syndrome (ACS) is the leading cause of mortality in clients with sickle cell disease. It is defined as a new pulmonary infiltrate on chest radiograph accompanied by respiratory signs/symptoms: fever, chest pain, tachypnea, cough, and hypoxemia. ACS results from pulmonary microvascular occlusion, fat embolism from necrotic bone marrow, and secondary infectious pneumonia. Immediate treatment includes high-flow oxygen, aggressive incentive spirometry (10 breaths every 2 hours while awake), empiric broad-spectrum IV antibiotics, analgesia, and urgent transfusion therapy (exchange transfusion). Why the other options fail: option a is a pneumothorax, which gives hyper-resonance without consolidation. Option c is viral bronchitis, which does not explain a new lobar infiltrate with hypoxaemia in sickle cell disease. Option d is infection of bone and produces no pulmonary infiltrate.",
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
      { id: "a", text: "It corrects the defective beta-globin gene, so it cures the disease itself" },
      { id: "b", text: "It can be stopped safely once the joint pain has settled for three weeks" },
      { id: "c", text: "It raises fetal haemoglobin, and the blood count must be checked regularly" },
      { id: "d", text: "It is completely safe to continue if the client becomes pregnant" },
    ],
    correctChoiceId: "c",
    rationale: "Hydroxyurea increases the concentration of fetal hemoglobin (HbF, which does not sickle), diluting HbS and dramatically reducing the frequency of painful vaso-occlusive crises, acute chest syndrome episodes, and transfusion requirements. Its major dose-limiting adverse effect is bone marrow suppression (leukopenia, thrombocytopenia, and anemia); therefore, regular complete blood count monitoring is mandatory. Hydroxyurea is teratogenic; effective contraception is required during treatment and for several months following discontinuation. Why the other options fail: option a claims a cure that hydroxyurea does not offer. Option b stops a disease-modifying drug during a pain-free interval. Option d ignores the teratogenicity that makes the drug unsafe in pregnancy.",
    strategy: "Identify key hydroxyurea facts: Increases fetal hemoglobin (HbF) → prevents sickling; Major side effect = bone marrow suppression (monitor CBC); Teratogenic.",
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
      { id: "a", text: "Vigorous passive range of motion to stop the joint stiffening into contracture" },
      { id: "b", text: "Oral aspirin three hundred and twenty-five milligrams for the pain" },
      { id: "c", text: "A warm heating pad held continuously over the swollen knee" },
      { id: "d", text: "Give the prescribed recombinant factor VIII concentrate immediately" },
    ],
    correctChoiceId: "d",
    rationale: "In hemophilia A, acute bleeding into a joint space (hemarthrosis) causes painful distension and permanent destruction of cartilage and bone if untreated. The immediate priority is IV infusion of recombinant Factor VIII concentrate to replace the missing clotting factor and achieve hemostasis. Concurrently, the joint is immobilized, elevated, and ice is applied (RICE protocol). Passive range-of-motion is strictly contraindicated during acute bleeding (may worsen hemorrhage); gentle active ROM is started only after bleeding has ceased. Aspirin and NSAIDs inhibit platelet aggregation and are strictly contraindicated. Why the other options fail: option a forces movement into a joint that is actively bleeding. Option b gives aspirin, an antiplatelet drug, in a clotting factor deficiency. Option c applies heat, which increases bleeding and swelling.",
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
      { id: "a", text: "Intravenous methylprednisolone sixty milligrams once a day" },
      { id: "b", text: "Intravenous immune globulin at one gram per kilogram of body weight" },
      { id: "c", text: "The intramuscular ketorolac prescribed for headache" },
      { id: "d", text: "A daily stool softener so that straining at stool is avoided" },
    ],
    correctChoiceId: "c",
    rationale: "In severe thrombocytopenia (platelets < 20,000/mcL), intramuscular (IM) injections are strictly contraindicated because the vascular puncture cannot clot effectively, leading to deep, massive intramuscular hematomas. Furthermore, ketorolac is a nonsteroidal anti-inflammatory drug (NSAID) that inhibits platelet COX-1 and platelet aggregation, compounding the bleeding risk. Finally, a new severe headache in a severely thrombocytopenic client suggests life-threatening intracranial hemorrhage, requiring immediate non-contrast brain CT rather than analgesics. Why the other options fail: option a is a standard treatment for immune thrombocytopenia. Option b is also standard and raises the count quickly. Option d prevents straining, which is desirable at this count. Only the ketorolac option pairs an intramuscular injection with an antiplatelet drug in a client who is thrombocytopenic.",
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
      { id: "a", text: "Isolated vitamin K deficiency, which responds to oral supplementation" },
      { id: "b", text: "Disseminated intravascular coagulation, with consumption coagulopathy" },
      { id: "c", text: "Mild heparin-induced thrombocytopenia, without a systemic coagulopathy" },
      { id: "d", text: "Polycythaemia vera, which raises viscosity and so predisposes to clotting" },
    ],
    correctChoiceId: "b",
    rationale: "Disseminated Intravascular Coagulation (DIC) is a catastrophic consumptive thrombo-hemorrhagic disorder triggered by massive systemic inflammation (most commonly sepsis). Widespread intravascular thrombin activation leads to microvascular clotting (organ ischemia), which completely consumes platelets and clotting factors (platelets < 50,000, low fibrinogen, prolonged PT and aPTT). Concurrently, extensive secondary fibrinolysis occurs, generating massive amounts of fibrin degradation products and D-dimer, culminating in diffuse clinical hemorrhage (IV site oozing, hematuria, petechiae). Why the other options fail: option a is isolated vitamin K deficiency, which prolongs the PT but leaves platelets and fibrinogen normal. Option c is heparin-induced thrombocytopenia, which causes thrombosis with only a modest platelet fall. Option d is polycythaemia vera, which raises haemoglobin and haematocrit and is not a consumptive coagulopathy.",
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
      { id: "a", text: "A second qualified provider checks identity and unit details at the bedside" },
      { id: "b", text: "Dilute the unit with 5% dextrose in water to stop the cells clumping" },
      { id: "c", text: "Warm the unit in a microwave for thirty seconds to bring it to body heat" },
      { id: "d", text: "Program the pump to give the whole 300 mL within the first fifteen minutes" },
    ],
    correctChoiceId: "a",
    rationale: "The most critical step in preventing fatal ABO-incompatible hemolytic transfusion reactions is the bedside two-person independent verification of the client's identification band, full name, medical record number, unit identification number, ABO group and Rh type, and expiration date. PRBCs must only be co-infused with 0.9% normal saline (dextrose solutions cause red cell hemolysis, and lactated Ringer's causes clotting due to calcium). Blood must never be heated in a microwave (causes massive hemolysis). Infusions must start slowly (about 2 mL/min or 50 mL/hr) during the first 15 minutes while the nurse monitors for acute reactions. Why the other options fail: option b uses dextrose, which haemolyses red cells. Option c heats the unit far beyond the 37 degrees that a blood warmer is limited to. Option d runs the unit at a rate that would flood the circulation.",
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
      { id: "a", text: "Slow the rate to ten millilitres an hour and give oral paracetamol" },
      { id: "b", text: "Stop the transfusion, disconnect it, run saline through new tubing, notify" },
      { id: "c", text: "Flush the blood tubing with the primary line and tilt the bed head-down" },
      { id: "d", text: "Give intravenous diphenhydramine and finish the unit within the hour" },
    ],
    correctChoiceId: "b",
    rationale: "Flushing, fever, chills, tachycardia, hypotension, and acute lower back (flank) pain during the first minutes of a transfusion are the hallmark signs of an acute hemolytic transfusion reaction (usually due to ABO incompatibility). Host antibodies destroy donor red blood cells, triggering systemic shock, renal failure, and DIC. The nurse must STOP the transfusion immediately, disconnect the entire blood set from the IV cannula (to prevent infusing any residual blood remaining in the tubing), attach fresh tubing to infuse 0.9% normal saline to support blood pressure and renal perfusion, notify the provider/blood bank, and send the blood bag, tubing, and client blood/urine samples to the lab. Why the other options fail: option a continues an incompatible transfusion at a slower rate and treats a haemolytic reaction as a mild febrile one. Option c keeps the residual blood in the tubing and lays the client head-down. Option d finishes the unit that is causing the reaction.",
    strategy: "Cardinal rule of any acute transfusion reaction: STOP THE INFUSION IMMEDIATELY → Disconnect tubing at catheter hub → Run normal saline with NEW tubing → Notify provider/lab.",
    difficulty: "medium",
    tags: ["haematology", "transfusion-reaction", "acute-hemolytic", "emergency"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-HAEM-014",
    categorySlug: "med-surg",
    stem: "An 82-year-old client with chronic heart failure and severe anemia is receiving a unit of packed red blood cells. Two hours into the transfusion, the client develops sudden severe dyspnea, orthopnea, a blood pressure rise from 130/74 to 178/96 mm Hg, jugular venous distension, and coarse bilateral crackles throughout both lung bases. The nurse recognizes transfusion-associated circulatory overload (TACO). What should the nurse do first?",
    choices: [
      { id: "a", text: "Increase the rate so that the unit finishes before more fluid shifts" },
      { id: "b", text: "Give subcutaneous adrenaline and intravenous diphenhydramine for anaphylaxis" },
      { id: "c", text: "Stop or pause it, sit the client upright, and give intravenous furosemide" },
      { id: "d", text: "Lay the client flat and raise both legs above the level of the head" },
    ],
    correctChoiceId: "c",
    rationale: "Transfusion-Associated Circulatory Overload (TACO) occurs when blood products are infused faster than the client's cardiovascular system can accommodate, precipitating acute cardiogenic pulmonary edema. Features include acute respiratory distress, hypertension (differentiating it from TRALI, which presents with hypotension), elevated jugular venous pressure, and pulmonary crackles. The nurse must stop or pause the transfusion, elevate the head of the bed to high-Fowler with feet dangling (to decrease venous return and pulmonary vascular congestion), administer supplemental oxygen, and administer prescribed loop diuretics (IV furosemide) to promote rapid diuresis. Why the other options fail: option a accelerates the overload that is already present. Option b treats anaphylaxis, which presents with hypotension rather than a rising blood pressure. Option d increases venous return to lungs that are already flooded.",
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
      { id: "a", text: "Allow fresh potted plants and cut flowers in the room to lift morale" },
      { id: "b", text: "A private room, hand hygiene, no flowers, and no rectal procedures" },
      { id: "c", text: "Serve fresh unwashed garden salad and raw unpasteurised cheeses" },
      { id: "d", text: "Take a rectal temperature every two hours to catch fever early" },
    ],
    correctChoiceId: "b",
    rationale: "An Absolute Neutrophil Count (ANC) < 500/mcL represents severe neutropenia, placing the client at imminent risk of life-threatening opportunistic bacterial and fungal sepsis. Protective neutropenic precautions include: private room, strict hand hygiene for all entering, prohibiting fresh flowers, plants, and soil (sources of Aspergillus and Pseudomonas), serving thoroughly cooked foods (no raw fruits, raw vegetables, or unpasteurized dairy), avoiding all invasive rectal procedures (temperatures, enemas, suppositories) due to risk of mucosal tears and bacteremia, and reporting any temperature of 38.0 degrees Celsius (100.4 degrees Fahrenheit) immediately. Why the other options fail: option a introduces the soil and water organisms that cause invasive aspergillosis and pseudomonas sepsis. Option c serves raw foods that carry the same risk. Option d breaks the mucosa with a thermometer when the client cannot mount a fever response.",
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
      { id: "a", text: "Non-Hodgkin lymphoma, which also presents with painless nodes" },
      { id: "b", text: "Chronic lymphocytic leukaemia, which causes marrow replacement" },
      { id: "c", text: "Infectious mononucleosis, which causes atypical lymphocytes" },
      { id: "d", text: "Hodgkin lymphoma, confirmed by Reed-Sternberg cells" },
    ],
    correctChoiceId: "d",
    rationale: "The pathognomonic hallmark of Hodgkin's lymphoma is the identification of Reed-Sternberg cells (abnormal, giant, multinucleated B lymphocytes with prominent nucleoli resembling owl eyes) on lymph node biopsy. Hodgkin's lymphoma typically arises in young adults, presenting with painless, non-tender cervical or supraclavicular lymphadenopathy and systemic 'B symptoms' (drenching night sweats, unexplained fever above 38.0 degrees Celsius, and weight loss of more than 10% over 6 months). Non-Hodgkin's lymphoma lacks Reed-Sternberg cells and exhibits diffuse nodal and extranodal involvement. Why the other options fail: option a is non-Hodgkin lymphoma, which lacks Reed-Sternberg cells. Option b is chronic lymphocytic leukaemia, a marrow disease rather than a nodal one. Option c is infectious mononucleosis, which gives atypical lymphocytes of a viral illness and not multinucleated giant cells.",
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
      { id: "a", text: "Encourage weight-lifting and restrict oral fluids to eight hundred millilitres" },
      { id: "b", text: "Give oral calcium carbonate with every meal to correct the low calcium" },
      { id: "c", text: "Two to three litres of fluid daily and gentle log-rolling when turning" },
      { id: "d", text: "Keep the client on strict bed rest, without any repositioning at all" },
    ],
    correctChoiceId: "c",
    rationale: "Multiple myeloma features neoplastic proliferation of plasma cells in the bone marrow, causing excessive osteoclast stimulation. This leads to the 'CRAB' syndrome: hyperCalcemia, Renal insufficiency, Anemia, and Bone lesions. Aggressive hydration (2 to 3 L/day) is critical to flush out free light chains (Bence Jones proteins) that clog renal tubules and to dilute serum calcium. Because widespread osteolytic bone destruction predisposes clients to severe pathological fractures with minimal trauma, nurses must handle clients gently, avoid pulling limbs, and use log-rolling techniques during repositioning. Why the other options fail: option a loads bone that is already eaten away and restricts the fluids needed to clear light chains. Option b adds calcium to a client who is already hypercalcaemic. Option d prevents the repositioning that protects skin and lungs.",
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
    stem: "A patient is starting unfractionated heparin. Which platelet monitoring should the nurse arrange?",
    choices: [
      { id: "a", text: "A baseline count, then a count every two to three days from day four until day fourteen" },
      { id: "b", text: "A count every day for the first three days, then none unless he starts to bleed or bruise at a puncture site" },
      { id: "c", text: "A count only when a dose is changed, and again when the heparin is stopped" },
      { id: "d", text: "A count once weekly for the duration of the treatment, and once more at discharge" },
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"A baseline count, then a count every two to three days from day four until day fourteen\". Heparin-induced thrombocytopenia is immune-mediated, and the antibody takes about five days to appear on a first exposure, so the danger window opens on day four or five and runs to about day fourteen. A baseline count gives the comparison that makes a 50 per cent fall visible; sampling every two to three days across the window catches it while it is still a number rather than a thrombosed leg. A patient who has had heparin in the past three months can fall within a day, so an early count is added for them.\n\nWhy the other options fail:\n• B — Daily counts for three days then nothing watches the window that matters least and stops watching before the risk begins.\n• C — Tying the count to dose changes misses the fall entirely, because the antibody does not follow the dose.\n• D — Weekly sampling can miss a fall that develops and thromboses inside a few days.\n\nReference: British Society for Haematology — HIT guidelines; Ghana STG — anticoagulation\n",
    strategy: "Watch the window, not the dose. Baseline, then every two to three days from day four to day fourteen.",
    difficulty: "hard",
    tags: ["haematology", "heparin", "hit", "thrombocytopenia", "pharmacology", "safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-HAEM-019",
    categorySlug: "med-surg",
    stem: "A nurse provides discharge teaching to a client with non-valvular atrial fibrillation who is prescribed warfarin. The client's target International Normalized Ratio (INR) is 2.0 to 3.0. Which dietary instruction regarding vitamin K intake is correct?",
    choices: [
      { id: "a", text: "Cut out all green leafy vegetables, such as spinach, kale and broccoli" },
      { id: "b", text: "Eat a large serving of kale or spinach whenever the INR runs high" },
      { id: "c", text: "Double the warfarin dose on any day when no vegetables are eaten" },
      { id: "d", text: "Keep vitamin K intake about the same from day to day" },
    ],
    correctChoiceId: "d",
    rationale: "Warfarin acts as a vitamin K antagonist, inhibiting the hepatic synthesis of vitamin K-dependent clotting factors (II, VII, IX, X). Sudden fluctuations in dietary vitamin K alter the anticoagulant efficacy of warfarin: a sudden increase in vitamin K intake (e.g., eating large amounts of spinach, kale, or collard greens) decreases the INR, increasing thrombosis risk, while sudden restriction increases the INR, predisposing to hemorrhage. Clients are instructed to maintain a consistent dietary intake of vitamin K from day to day so the warfarin dose can be accurately calibrated. Why the other options fail: option a removes vitamin K entirely, which destabilises the INR in the other direction. Option b lets diet swing the INR instead of treating it. Option c adjusts a narrow-therapeutic drug on dietary guesswork.",
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
    rationale: "Step 1: Calculate total prescribed volume: Total volume = 10 mL/kg × 8.4 kg = 84 mL. Step 2: Calculate the hourly infusion rate: Rate (mL/hr) = Total volume (mL) / Time (hr) = 84 mL / 3 hr = 28 mL/hr. In pediatric transfusions, precise volume calculations using electronic infusion syringe pumps or volumetric infusion devices are essential to prevent both under-transfusion and volume overload. Why the other options fail: option b doubles the rate and would give the volume in an hour and a half. Option c gives the full volume in one hour. Option d would take six hours, half the prescribed rate.",
    strategy: "Step 1: 10 mL/kg × 8.4 kg = 84 mL. Step 2: 84 mL ÷ 3 hours = 28 mL/hr.",
    difficulty: "easy",
    tags: ["haematology", "pediatrics", "calculations", "infusion-rate", "transfusion"],
    isFree: false,
  },
];
