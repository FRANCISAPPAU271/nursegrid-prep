import type { AuthoredQuestion } from "./authored-bank";

export const TCAM_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-TCAM-001",
    categorySlug: "fundamentals",
    stem: "A nurse is conducting a community health education seminar on healthcare modalities. According to the World Health Organization (WHO) and National Center for Complementary and Integrative Health (NCCIH), what is the definitive distinction between 'Complementary Medicine' and 'Alternative Medicine'?",
    choices: [
      {
        id: "a",
        text: "Complementary medicine refers to non-mainstream healing practices used together WITH conventional biomedical care, whereas alternative medicine refers to non-mainstream practices used IN PLACE OF conventional biomedical care",
      },
      {
        id: "b",
        text: "Complementary medicine is practiced exclusively by surgeons, while alternative medicine is practiced exclusively by psychiatrists",
      },
      {
        id: "c",
        text: "Complementary medicine always involves surgery, while alternative medicine never involves physical touch",
      },
      {
        id: "d",
        text: "There is zero clinical distinction; both terms describe illegal witchcraft practices",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "According to WHO and NCCIH definitions: 1) COMPLEMENTARY MEDICINE involves using non-mainstream healing practices (e.g., acupuncture, herbal teas, guided imagery) alongside and in conjunction with conventional evidence-based medical treatment. 2) ALTERNATIVE MEDICINE involves using non-mainstream practices to substitute for or replace conventional medical treatment (e.g., using a botanical infusion instead of chemotherapy for invasive cancer). 3) INTEGRATIVE HEALTH brings conventional and complementary approaches together in a coordinated, evidence-informed manner. Options b, c, and d mischaracterize both terms.",
    strategy: "TCAM definitions: Complementary = used TOGETHER WITH conventional medicine. Alternative = used INSTEAD OF conventional medicine.",
    difficulty: "easy",
    tags: ["tcam", "complementary-medicine", "alternative-medicine", "who-definitions", "integrative-health"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-002",
    categorySlug: "fundamentals",
    stem: "In Ghana, which statutory regulatory bodies are legally mandated to regulate traditional and herbal medicine practitioners, accredit herbal clinics, and register commercial botanical remedies?",
    choices: [
      {
        id: "a",
        text: "The Environmental Protection Agency (EPA) and the National Petroleum Authority (NPA)",
      },
      {
        id: "b",
        text: "The Traditional Medicine Practice Council (TMPC) under Act 575 (for practitioner and premises licensing) and the Food and Drugs Authority (FDA) Ghana (for herbal product registration and safety certification)",
      },
      {
        id: "c",
        text: "The Ghana Police Service and the Ministry of Foreign Affairs",
      },
      {
        id: "d",
        text: "The Lands Commission and the Forestry Research Institute",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Under Ghanaian statutory law, the Traditional Medicine Practice Act 2000 (Act 575) established the Traditional Medicine Practice Council (TMPC) under the Ministry of Health to set standards, register, license, and regulate traditional medical practitioners (herbalists, bonesetters, naturopaths). Concurrently, the Food and Drugs Authority (FDA) Ghana (under the Public Health Act 851) evaluates the safety, efficacy, quality, toxicology, and labeling of all manufactured commercial herbal products before issuing formal FDA registration numbers (e.g., FDA/HD.xx). The EPA (a), Police (c), and Lands Commission (d) have no mandate over clinical TCAM regulation.",
    strategy: "Ghana TCAM regulation: TMPC regulates practitioners and clinics (Act 575); FDA Ghana evaluates and registers herbal medicines.",
    difficulty: "easy",
    tags: ["tcam", "tmpc", "fda-ghana", "act-575", "traditional-medicine-regulation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-003",
    categorySlug: "fundamentals",
    stem: "A client newly diagnosed with stage III cervical cancer shows the clinic nurse an unlabelled brown plastic jug purchased from a roadside vendor. The vendor promised that drinking three cups daily would 'permanently eradicate all cancer, HIV, and diabetes within 14 days without surgery.' What is the nurse's priority clinical response?",
    choices: [
      {
        id: "a",
        text: "Encourage the client to drink the concoction because roadside herbal remedies are always safe and natural",
      },
      {
        id: "b",
        text: "Take a sip of the herbal liquid to test its flavor before providing clinical advice",
      },
      {
        id: "c",
        text: "Explain that unregulated mixtures lack standardized dosing and quality control, warn against fraudulent 'cure-all' claims, emphasize that delaying proven oncology care allows cancer to metastasize, and inspect for FDA Ghana registration while reinforcing evidence-based therapy",
      },
      {
        id: "d",
        text: "Tell the client to stop all hospital visits because the herbal vendor's promise sounds reasonable",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Unregulated street concoctions present severe health hazards due to unstandardized dosing, microbial contamination, heavy metal adulteration, and dangerous herb-drug interactions. Furthermore, predatory 'cure-all' claims lead clients to abandon life-saving oncology care during curative windows, resulting in preventable metastasis and death. The nurse must validate the client's search for healing, provide objective risk education regarding uncertified remedies, check for FDA registration, and advocate for evidence-based cancer staging and treatment. Endorsing street mixtures (a, d) or tasting client medicines (b) is dangerous and unethical.",
    strategy: "Unregulated herbs: Warn against 'cure-all' claims and lack of quality control, emphasize the fatal risk of delaying conventional oncology treatment, and look for FDA certification.",
    difficulty: "easy",
    tags: ["tcam", "unregulated-herbs", "cancer-fraud", "fda-registration", "patient-advocacy"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-004",
    categorySlug: "fundamentals",
    stem: "A 10-year-old child is brought to the emergency department 5 days after sustaining a closed mid-shaft tibial fracture. The family initially took the child to a traditional bonesetter, who applied tight bamboo splints bound with unyielding rags. The child now has severe, unrelenting leg pain out of proportion to exam, pallor, pulselessness of the dorsalis pedis artery, paresthesias, and a tense, wood-hard calf. Which limb-threatening complication must the nurse recognize immediately?",
    choices: [
      {
        id: "a",
        text: "Normal fracture healing callus formation",
      },
      {
        id: "b",
        text: "Superficial contact dermatitis from bamboo wood",
      },
      {
        id: "c",
        text: "Transient benign muscle cramp requiring warm massage",
      },
      {
        id: "d",
        text: "Acute compartment syndrome secondary to constrictive traditional splinting, requiring immediate splint removal and emergency orthopedic surgical fasciotomy",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Traditional bonesetter gangrene (TBS gangrene) and acute compartment syndrome are well-documented severe pediatric surgical complications in Sub-Saharan Africa. Overly tight, unyielding traditional bamboo or wooden splints encasing an acutely fractured, swelling limb elevate intracompartmental pressures above capillary perfusion pressure. This causes ischemia, nerve necrosis, and muscle infarction (the 6 P's: Pain out of proportion, Pressure/tense calf, Paresthesia, Pallor, Paralysis, Pulselessness). The nurse must immediately cut off constricting splints, notify the orthopedic surgeon, and prepare for emergent surgical fasciotomy to prevent amputation. Option d correctly identifies this surgical emergency.",
    strategy: "Traditional bonesetter injury: Tight wooden splints on fractures cause Acute Compartment Syndrome (the 6 P's). Cut off splints immediately and prepare for emergency fasciotomy.",
    difficulty: "medium",
    tags: ["tcam", "traditional-bonesetter", "compartment-syndrome", "tbs-gangrene", "surgical-emergency"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-005",
    categorySlug: "fundamentals",
    stem: "A primigravida at 41 weeks gestation is brought to the district hospital maternity unit after 28 hours of labor at the home of an untrained Traditional Birth Attendant (TBA). The TBA administered multiple doses of an indigenous herbal uterotonic infusion (*kaligbali* / *aworoworo*) to 'force the baby out.' The nurse notes tetanic uterine contractions without relaxation, fetal heart rate decelerations to 60 beats/min, and severe maternal vaginal bleeding. Which catastrophe is the nurse actively witnessing?",
    choices: [
      {
        id: "a",
        text: "Uterine hyperstimulation and impending uterine rupture secondary to unmonitored herbal oxytocics, requiring immediate tocolysis, oxygen, IV resuscitation, and emergent cesarean delivery",
      },
      {
        id: "b",
        text: "Normal physiological second stage labor progression",
      },
      {
        id: "c",
        text: "Mild braxton-hicks contractions managed by outpatient walking",
      },
      {
        id: "d",
        text: "Expected maternal exhaustion managed by giving another cup of herbal tea",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Indigenous herbal uterotonics (such as *kaligbali*, *aworoworo*, or *Cassia* extracts) contain potent oxytocic alkaloids that cause uncoordinated, tetanic uterine contractions without periods of physiological relaxation. When administered during obstructed or prolonged labor without fetal monitoring, this causes severe placental hypoperfusion, profound fetal bradycardia, and catastrophic uterine rupture with maternal exsanguination. The nurse must call the obstetrician immediately, position left lateral, administer oxygen, start large-bore IV fluid resuscitation, administer tocolytics if protocol directs, and rush the patient to the operating theater. Calling this normal (b, c) is fatal negligence.",
    strategy: "Herbal uterotonics: Indigenous oxytocic herbs administered during labor cause uterine hyperstimulation, fetal asphyxia, and uterine rupture.",
    difficulty: "medium",
    tags: ["tcam", "traditional-birth-attendant", "uterine-rupture", "herbal-uterotonics", "obstetric-emergency"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-006",
    categorySlug: "fundamentals",
    stem: "A hospitalized client receiving intravenous ceftriaxone for severe bacterial pneumonia requests that their church pastor and family prayer group be allowed into the room to perform anointing with holy oil, lay hands, and pray for divine healing. What is the nurse's culturally and clinically competent action?",
    choices: [
      {
        id: "a",
        text: "Call hospital security to arrest the pastor and ban all religious representatives from entering the hospital building",
      },
      {
        id: "b",
        text: "Facilitate the pastoral prayer and anointing visit at a mutually suitable time, ensuring standard infection control (hand hygiene) is maintained, while ensuring that intravenous antibiotics and medical treatments continue uninterrupted",
      },
      {
        id: "c",
        text: "Discontinue the intravenous antibiotic completely because spiritual prayer and biomedical drugs cannot co-exist",
      },
      {
        id: "d",
        text: "Allow the prayer group to disconnect the intravenous line so the oil can be poured into the IV catheter",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "In pluralist healthcare environments, spiritual beliefs and faith-based practices play a vital therapeutic role in client coping, psychological well-being, and hope. The nurse should support beneficial spiritual rituals (prayer, anointing) provided they do not introduce infection risks or disrupt necessary medical therapy. Coordinating visiting times, enforcing hand hygiene, and maintaining continuous antibiotic administration bridges faith and evidence-based science harmoniously. Arresting clergy (a) causes emotional distress; stopping antibiotics (c) leads to septic death; pouring oil into IV lines (d) causes fatal oil embolism and sepsis.",
    strategy: "Faith-based integration: Accommodate and support spiritual rituals that bring comfort while ensuring infection control and uninterrupted medical therapy.",
    difficulty: "easy",
    tags: ["tcam", "faith-healing", "spiritual-care", "holistic-nursing", "cultural-competence"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-007",
    categorySlug: "fundamentals",
    stem: "A client with HIV on a tenofovir/lamivudine/dolutegravir (TLD) antiretroviral regimen starts taking St. John's Wort (*Hypericum perforatum*) tablets purchased online for mild depressive mood. What critical herb-drug pharmacokinetic interaction must the nurse anticipate?",
    choices: [
      {
        id: "a",
        text: "St. John's Wort causes profound renal potassium retention leading to hyperkalemia",
      },
      {
        id: "b",
        text: "St. John's Wort permanently cures human immunodeficiency virus within 48 hours",
      },
      {
        id: "c",
        text: "St. John's Wort is a potent inducer of hepatic cytochrome P450 enzymes (CYP3A4) and intestinal P-glycoprotein, dramatically accelerating the metabolism of antiretrovirals, lowering their plasma concentrations, and leading to treatment failure and viral drug resistance",
      },
      {
        id: "d",
        text: "St. John's Wort has zero pharmacokinetic interactions with any pharmaceutical agents",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "St. John's Wort (*Hypericum perforatum*) is a classic, high-yield NCLEX herb-drug interaction. It is a powerful inducer of hepatic CYP3A4 enzymes and P-glycoprotein (efflux transporter). Co-administration significantly lowers the serum concentration of drugs metabolized by CYP3A4—including antiretrovirals (protease inhibitors, NNRTIs, integrase inhibitors), oral contraceptives (causing unintended pregnancy), cyclosporine/tacrolimus (causing organ transplant rejection), and warfarin. It also causes serotonin syndrome when combined with SSRIs. St. John's Wort does not cure HIV (b) and has extensive interactions (d).",
    strategy: "High-yield NCLEX interaction: St. John's Wort INDUCES CYP3A4 and P-glycoprotein, dropping blood levels of antiretrovirals, birth control, and immunosuppressants.",
    difficulty: "medium",
    tags: ["tcam", "st-johns-wort", "cyp3a4-induction", "antiretrovirals", "herb-drug-interactions"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-008",
    categorySlug: "fundamentals",
    stem: "A client with mechanical heart valve replacement taking chronic oral warfarin therapy begins consuming large daily doses of Ginkgo biloba and high-potency Garlic supplements to 'improve memory and heart health.' When the client reports spontaneous epistaxis and extensive ecchymoses, which herb-drug interaction mechanism must the nurse identify?",
    choices: [
      {
        id: "a",
        text: "Garlic and Ginkgo inhibit vitamin K synthesis in the bone marrow",
      },
      {
        id: "b",
        text: "Ginkgo biloba causes rapid renal potassium wasting",
      },
      {
        id: "c",
        text: "Garlic directly neutralizes the anticoagulant effect of warfarin, causing massive clotting",
      },
      {
        id: "d",
        text: "Ginkgo biloba and Garlic possess intrinsic antiplatelet properties and inhibit platelet aggregation, which synergistically potentiates warfarin anticoagulation and dramatically increases severe hemorrhage risk",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The '4 G's' of herbal medicine—Ginkgo biloba, Garlic, Ginseng, and Ginger (plus Feverfew and Saw Palmetto)—exhibit antiplatelet properties and impair platelet aggregation. When taken concurrently with anticoagulants (warfarin, heparin, NOACs) or antiplatelet agents (aspirin, clopidogrel), they synergistically elevate bleeding risks, manifesting as spontaneous epistaxis, gastrointestinal bleeding, hematuria, or intracranial hemorrhage. The nurse must recognize this synergistic antiplatelet interaction and advise immediate discontinuation. Garlic does not clot blood (c) or inhibit marrow vitamin K (a).",
    strategy: "NCLEX rule: The '4 G's' (Ginkgo, Garlic, Ginseng, Ginger) increase bleeding risk when taken with anticoagulants or antiplatelets.",
    difficulty: "easy",
    tags: ["tcam", "ginkgo-biloba", "garlic", "warfarin-interaction", "bleeding-risk"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-009",
    categorySlug: "fundamentals",
    stem: "A client who consumed a traditional slimming herbal tea for six months presents with bilateral small kidneys on ultrasound, severe normocytic anemia, sterile pyuria, and an elevated serum creatinine of 580 µmol/L (6.5 mg/dL). Toxicological analysis reveals the tea contained *Aristolochia fangchi*. Which specific organ pathology and oncological risk are caused by Aristolochic acid?",
    choices: [
      {
        id: "a",
        text: "Aristolochic Acid Nephropathy (fibrosing interstitial nephritis) leading to end-stage renal disease, alongside a high risk of upper urothelial tract carcinoma",
      },
      {
        id: "b",
        text: "Acute reversible pancreatitis with zero long-term complications",
      },
      {
        id: "c",
        text: "Transient benign myositis that resolves completely with oral hydration",
      },
      {
        id: "d",
        text: "Hypertrophic obstructive cardiomyopathy with aortic stenosis",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Aristolochic acid (found in plants of the *Aristolochia* genus, often used in traditional slimming teas and rheumatic remedies) is a potent nephrotoxin and human carcinogen. It causes Aristolochic Acid Nephropathy (previously known as Chinese Herb Nephropathy or Balkan Endemic Nephropathy), characterized by extensive renal interstitial fibrosis, tubular atrophy without glomerular lesions, and rapid progression to end-stage renal disease (ESRD). Crucially, aristolochic acid forms DNA adducts that induce high rates of upper urinary tract urothelial carcinoma. It does not cause reversible pancreatitis (b) or cardiomyopathy (d).",
    strategy: "Herbal toxicity: Aristolochic acid (*Aristolochia*) is severely nephrotoxic, causing irreversible fibrosing interstitial nephritis and urothelial carcinoma.",
    difficulty: "hard",
    tags: ["tcam", "aristolochic-acid", "nephrotoxicity", "renal-failure", "urothelial-carcinoma"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-010",
    categorySlug: "fundamentals",
    stem: "A 58-year-old client is scheduled for an elective total hip arthroplasty in two weeks. During pre-admission assessment, the client states, 'I take daily St. John's Wort, Ginkgo biloba, and Ginseng capsules.' What instruction must the nurse give the client regarding these herbal supplements prior to surgery?",
    choices: [
      {
        id: "a",
        text: "Double the supplement doses on the morning of surgery to promote wound healing",
      },
      {
        id: "b",
        text: "Discontinue all herbal supplements immediately (at least 2 to 3 weeks prior to elective surgery) to prevent intraoperative hemorrhage, unstable hemodynamic fluctuations, and adverse anesthetic drug interactions",
      },
      {
        id: "c",
        text: "Switch to drinking raw unpasteurized herbal root teas until the night before surgery",
      },
      {
        id: "d",
        text: "Continue taking the supplements secretly without informing the surgical or anesthesia team",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The American Society of Anesthesiologists (ASA) and surgical safety guidelines mandate that all herbal remedies and dietary supplements should be discontinued at least 2 to 3 weeks prior to elective surgery. Herbals pose multiple perioperative hazards: Ginkgo and Ginseng inhibit platelet function and provoke intraoperative hemorrhage; St. John's Wort induces hepatic drug metabolism, altering anesthetic clearance and prolonging sedative recovery; Ephedra/Ginseng can trigger intraoperative cardiac arrhythmias and hypertensive crises. Doubling doses (a) or hiding supplement use (d) creates life-threatening surgical emergencies.",
    strategy: "Perioperative rule: Stop all herbal supplements at least 2 to 3 weeks prior to elective surgery to prevent bleeding and anesthesia interactions.",
    difficulty: "easy",
    tags: ["tcam", "perioperative-care", "herbal-supplements", "surgical-safety", "bleeding-risk"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-011",
    categorySlug: "fundamentals",
    stem: "A woman at 8 weeks gestation asks the prenatal clinic nurse if she can take traditional bitter herbal roots (*Vernonia amygdalina* / *Cryptolepis sanguinolenta*) and Blue Cohosh to treat morning sickness. What is the nurse's priority evidence-based education regarding herbal medicines in early pregnancy?",
    choices: [
      {
        id: "a",
        text: "All herbal preparations are completely safe during pregnancy because plants are natural and chemical-free",
      },
      {
        id: "b",
        text: "Herbal medicines are required by law for all pregnant women to build fetal immunity",
      },
      {
        id: "c",
        text: "Herbal preparations should be strictly avoided in pregnancy unless approved by an obstetric provider, because many herbs contain active chemical compounds with emmenagogue (menstrual-stimulating) or uterotonic properties that trigger uterine contractions, miscarriage, or fetal teratogenicity",
      },
      {
        id: "d",
        text: "Herbs should be mixed with commercial energy drinks to ensure maximum fetal absorption",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Herbal supplements are not inherently safe in pregnancy. Many botanical preparations (e.g., Blue Cohosh, Pennyroyal, *Cryptolepis*, *Cassia*) possess potent emmenagogue, abortifacient, or uterotonic properties that stimulate uterine contractions, precipitate spontaneous abortion, or cause fetal teratogenic malformations. Furthermore, lack of standardization and risk of heavy metal contamination make unmonitored herbal ingestion particularly dangerous during first-trimester organogenesis. The myth that 'natural equals safe' (a) is a widespread misconception that nurses must actively correct.",
    strategy: "Maternal-fetal safety: Avoid unprescribed herbal medicines during pregnancy; many herbs possess uterotonic properties that cause miscarriage or teratogenicity.",
    difficulty: "easy",
    tags: ["tcam", "pregnancy", "herbal-safety", "uterotonics", "teratogenicity"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-012",
    categorySlug: "fundamentals",
    stem: "An oncology client experiencing severe chemotherapy-induced nausea and vomiting asks about complementary therapies. The nurse discusses acupressure at the P6 (Neiguan) pericardium meridian point on the inner wrist. What is the physiological mechanism and evidence supporting acupressure and acupuncture in clinical nursing?",
    choices: [
      {
        id: "a",
        text: "It permanently destroys the vagus nerve through ultrasonic micro-waves",
      },
      {
        id: "b",
        text: "It functions purely as a hypnotic placebo with zero measurable neurochemical response",
      },
      {
        id: "c",
        text: "It paralyzes the skeletal diaphragm to prevent vomiting movements",
      },
      {
        id: "d",
        text: "Stimulating specific neurovascular acupoints modulates autonomic pathways, triggers the release of endogenous endorphins and serotonin, and activates the Gate Control mechanism to suppress central emetic and nociceptive signaling",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Acupuncture and acupressure (such as pressure at the P6 Neiguan point on the anterior forearm) are evidence-supported complementary therapies recognized by the WHO and oncology guidelines for managing postoperative and chemotherapy-induced nausea and pain. Physiological research demonstrates that acupoint stimulation activates A-beta and A-delta sensory fibers, modulates central autonomic nervous system centers, releases endogenous opioids (beta-endorphins, enkephalins), alters serotonin transmission, and engages the Gate Control Theory to blunt emetic and pain pathways. It does not destroy nerves (a) or paralyze the diaphragm (c).",
    strategy: "Complementary therapies: Acupressure/acupuncture stimulates neurovascular pathways, releasing endogenous endorphins and modulating autonomic emetic and pain reflexes.",
    difficulty: "medium",
    tags: ["tcam", "acupressure", "p6-neiguan", "chemotherapy-induced-nausea", "gate-control-theory"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-013",
    categorySlug: "fundamentals",
    stem: "A nurse considers providing gentle back massage (effleurage) to an elderly client to alleviate insomnia and muscle tension. Which clinical condition represents an ABSOLUTE contraindication to localized therapeutic massage?",
    choices: [
      {
        id: "a",
        text: "Active Deep Vein Thrombosis (DVT) in the affected limb, due to the critical risk of dislodging the thrombus and causing a fatal pulmonary embolism",
      },
      {
        id: "b",
        text: "Mild chronic tension headache",
      },
      {
        id: "c",
        text: "Generalized anxiety and restless leg syndrome",
      },
      {
        id: "d",
        text: "Mild post-exercise myofascial soreness",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Therapeutic massage and manual soft tissue therapies are contraindicated in acute Deep Vein Thrombosis (DVT), thrombophlebitis, local burns, infected wounds, and severe bleeding disorders. Massaging an extremity harboring an acute venous thrombus exerts mechanical shearing forces that dislodge the clot into systemic venous circulation, causing acute pulmonary embolism, cardiovascular collapse, and sudden death. Tension headaches (b), anxiety (c), and mild soreness (d) are classic clinical indications for relaxation massage.",
    strategy: "Massage contraindications: NEVER massage an extremity with suspected or diagnosed DVT—mechanical friction dislodges the clot into a fatal pulmonary embolism.",
    difficulty: "easy",
    tags: ["tcam", "therapeutic-massage", "dvt-contraindication", "pulmonary-embolism", "patient-safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-014",
    categorySlug: "fundamentals",
    stem: "A client awaiting invasive cardiac catheterization exhibits tachypnea, tachycardia (HR 118 bpm), and tremulousness due to severe pre-procedural anxiety. The nurse leads the client through a 15-minute session of guided imagery and diaphragmatic breathing. What physiological changes indicate successful elicitation of the 'Relaxation Response'?",
    choices: [
      {
        id: "a",
        text: "A sharp increase in plasma catecholamines, heart rate, and blood pressure",
      },
      {
        id: "b",
        text: "Decreased sympathetic nervous system output, reduced heart rate and respiratory rate, lowered blood pressure, and decreased peripheral muscle tension",
      },
      {
        id: "c",
        text: "Sudden onset of grand mal generalized seizures",
      },
      {
        id: "d",
        text: "Severe metabolic acidosis and hyperventilation tetany",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Herbert Benson's 'Relaxation Response' is the physiological opposite of the sympathetic fight-or-flight stress reaction. Mind-body complementary therapies (guided imagery, progressive muscle relaxation, meditation, deep diaphragmatic breathing) stimulate the parasympathetic nervous system via the vagus nerve. This causes decreased circulating catecholamines (epinephrine, norepinephrine) and cortisol, reduction in heart rate and respiratory rate, decreased blood pressure, dilation of peripheral blood vessels, and relaxation of skeletal muscle tension. Sympathetic surges (a) or acidosis (d) indicate worsening stress or pathology.",
    strategy: "Relaxation response: Elicits parasympathetic activation—decreased heart rate, lower blood pressure, reduced respiratory rate, and muscle relaxation.",
    difficulty: "easy",
    tags: ["tcam", "guided-imagery", "relaxation-response", "parasympathetic-activation", "mind-body"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-015",
    categorySlug: "fundamentals",
    stem: "A nurse is caring for a client with poorly controlled diabetes who regularly consumes an unprescribed indigenous herbal tea. Applying Arthur Kleinman's Explanatory Model of Illness during clinical assessment, which question should the nurse ask to understand the client's perspective?",
    choices: [
      {
        id: "a",
        text: "'Why are you wasting your money on useless grass instead of listening to the doctors?'",
      },
      {
        id: "b",
        text: "'Do you realize that your herbal tea will destroy your liver within a month?'",
      },
      {
        id: "c",
        text: "'What do you call your problem, what do you think caused it, and what kind of treatment do you believe works best for you?'",
      },
      {
        id: "d",
        text: "'Can you sign this document admitting you are non-compliant with standard medical care?'",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Arthur Kleinman's Explanatory Model questions elicit the client's personal understanding and cultural construction of their illness without passing judgment: 'What do you call your problem? What do you think caused it? Why do you think it started when it did? What does your sickness do to your body? What kind of treatment do you think you should receive?' Asking these open-ended, respectful questions uncovers health beliefs, explains herbal remedy use, and creates a non-defensive foundation for collaborative care. Condescending 'Why' questions (a) and threats (b, d) shut down dialogue.",
    strategy: "Kleinman's Explanatory Model: Use open, non-judgmental questions to elicit what the client believes caused their illness and how they think it should be treated.",
    difficulty: "easy",
    tags: ["tcam", "kleinman", "explanatory-model", "cultural-competence", "health-beliefs"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-016",
    categorySlug: "fundamentals",
    stem: "A nurse uses the LEARN communication model (Listen, Explain, Acknowledge, Recommend, Negotiate) when counselling a client with hypertension who wants to replace all prescribed antihypertensives with garlic water and prayer. Which nursing action exemplifies the 'Negotiate' step of the LEARN framework?",
    choices: [
      {
        id: "a",
        text: "Threaten to discharge the client from the hospital immediately unless they obey the physician",
      },
      {
        id: "b",
        text: "Agree that the client can stop all blood pressure medications and rely 100% on garlic water",
      },
      {
        id: "c",
        text: "Refuse to listen to the client's cultural beliefs and demand silent compliance",
      },
      {
        id: "d",
        text: "Collaborate with the client to develop an agreed-upon plan that incorporates safe cultural preferences (such as continuing prayer and moderate culinary garlic in food) while maintaining daily prescribed antihypertensive medication and tracking home blood pressure readings together",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The LEARN model is an evidence-based cross-cultural communication framework: 1) LISTEN with empathy; 2) EXPLAIN your clinical perceptions; 3) ACKNOWLEDGE and discuss differences and similarities; 4) RECOMMEND treatment; 5) NEGOTIATE agreement. In the Negotiation step, the nurse and client collaborate on a culturally acceptable, clinically safe compromise: accommodating the client's cultural and spiritual values (prayer, culinary garlic) while maintaining essential life-saving biomedical therapies (antihypertensive pills). Coercive threats (a, c) provoke rejection; abandoning medicine (b) leads to hypertensive stroke.",
    strategy: "LEARN model: Negotiate a culturally congruent plan that honors the client's values while preserving essential evidence-based medical treatments.",
    difficulty: "medium",
    tags: ["tcam", "learn-model", "cross-cultural-communication", "negotiation", "patient-adherence"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-017",
    categorySlug: "fundamentals",
    stem: "During an admission medication reconciliation, a nurse asks, 'Do you take any medications?' The client responds, 'No, I don't take any pills.' To obtain a truly complete and accurate medication history that captures traditional, complementary, and alternative remedies, what follow-up inquiry must the nurse make?",
    choices: [
      {
        id: "a",
        text: "'Do you take any herbal teas, tonics, roots, vitamins, botanical mixtures, traditional enemas, or dietary supplements that you prepare at home or purchase from herbal practitioners?'",
      },
      {
        id: "b",
        text: "Accept the answer 'No' and leave the medication section blank on the admission form",
      },
      {
        id: "c",
        text: "Assume the client is lying and search their personal luggage without consent",
      },
      {
        id: "d",
        text: "Ask the client's neighbors in the waiting room if the client secretly takes medications",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Clients frequently do not consider herbal teas, roots, tonics, vitamins, dietary supplements, or traditional enemas (*bentua*) to be 'medicines' because they perceive them as natural foods or spiritual preparations. Consequently, simply asking 'Do you take any medications?' yields false negative responses. Best clinical practice requires asking explicit, routine follow-up questions detailing specific modalities: herbal teas, botanical mixtures, roots, enemas, vitamins, and over-the-counter supplements. Leaving records blank (b) misses lethal interactions; searching luggage (c) violates rights.",
    strategy: "Medication reconciliation: Explicitly ask about herbal teas, roots, tonics, enemas, and dietary supplements—clients rarely view these as 'medicines'.",
    difficulty: "easy",
    tags: ["tcam", "medication-reconciliation", "herbal-assessment", "patient-history", "nursing-assessment"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-018",
    categorySlug: "fundamentals",
    stem: "In Ghana, several public regional and district hospitals operate integrated herbal medicine pilot units staffed by Medical Herbalists trained at Kwame Nkrumah University of Science and Technology (KNUST). What is the primary role of the Centre for Plant Medicine Research (CPMR) at Mampong-Akuapem in supporting this integration?",
    choices: [
      {
        id: "a",
        text: "Manufacturing military weapons and surveillance satellites",
      },
      {
        id: "b",
        text: "Conducting scientific research on plant medicines, evaluating botanical safety, toxicology, and efficacy, and standardizing herbal formulations for integration into national healthcare delivery",
      },
      {
        id: "c",
        text: "Banning all traditional healers from living in Ghana",
      },
      {
        id: "d",
        text: "Replacing all surgical operating theaters with open-air herbal steam huts",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The Centre for Plant Medicine Research (CPMR) at Mampong-Akuapem (established in 1975) is Ghana's premier national biomedical research institute dedicated to the scientific investigation of medicinal plants. CPMR conducts rigorous botanical, phytochemical, microbiological, pharmacological, and toxicological analyses on traditional herbal medicines, develops standardized efficacy-tested botanical products (e.g., *Cryptolepis* for malaria), and advises the Ministry of Health and FDA Ghana on safe integration into the public health system. Options a, c, and d are fictional absurdities.",
    strategy: "Ghanaian plant research: The Centre for Plant Medicine Research (CPMR) at Mampong conducts scientific research, safety profiling, and standardization of botanical medicines.",
    difficulty: "easy",
    tags: ["tcam", "cpmr", "mampong-akuapem", "medical-herbalists", "plant-medicine-research"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-019",
    categorySlug: "fundamentals",
    stem: "A client who started taking a commercially packaged herbal mixture for chronic arthritis develops jaundice, dark urine, and markedly elevated liver enzymes (ALT 920 U/L, AST 810 U/L, total bilirubin 110 µmol/L). The nurse recognizes suspected acute drug-induced liver injury (DILI) from herbal hepatotoxicity. Under clinical pharmacovigilance standards, which action must the nurse perform?",
    choices: [
      {
        id: "a",
        text: "Discard the herbal bottle in the general waste bin without recording its name or lot number",
      },
      {
        id: "b",
        text: "Advise the client to double the herbal dose to purge the liver toxins faster",
      },
      {
        id: "c",
        text: "Instruct the client to stop the herbal product immediately, secure the sample and packaging with batch number for laboratory analysis, provide supportive medical care, and complete an Adverse Drug Reaction (ADR) report to the national pharmacovigilance centre (FDA Ghana Safety Watch System)",
      },
      {
        id: "d",
        text: "Conceal the incident from the hospital clinical pharmacy team",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "When an Adverse Drug Reaction (ADR) or toxic organ injury (e.g., herbal hepatotoxicity) is suspected: 1) the offending product must be discontinued immediately; 2) the physical product, packaging, and batch/lot numbers should be preserved for toxicological investigation; 3) medical supportive care initiated; and 4) an official Adverse Drug Reaction (ADR) report submitted to the national regulatory pharmacovigilance authority (such as the FDA Ghana Safety Watch System / Yellow Form). This enables regulatory alerts, recalls of contaminated batches, and public protection. Throwing evidence away (a), doubling toxic doses (b), or hiding events (d) violates pharmacovigilance duty.",
    strategy: "Herbal pharmacovigilance: Stop the offending herbal, preserve product batch details for analysis, and file an official Adverse Drug Reaction (ADR) report with regulatory authorities.",
    difficulty: "medium",
    tags: ["tcam", "pharmacovigilance", "adverse-drug-reaction", "herbal-hepatotoxicity", "fda-safety-watch"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-020",
    categorySlug: "fundamentals",
    stem: "A 46-year-old client with type 1 diabetes mellitus is admitted to the intensive care unit in severe Diabetic Ketoacidosis (blood glucose 36.2 mmol/L [652 mg/dL], arterial pH 7.12, serum bicarbonate 8 mmol/L, positive serum ketones). The client's spouse explains that two weeks ago, a faith-healer instructed the client to stop all subcutaneous insulin injections and drink concentrated bitter leaf and mahogany bark infusions to 'kill the spiritual diabetes root.' Following emergency insulin and fluid resuscitation, how should the nurse approach discharge education?",
    choices: [
      {
        id: "a",
        text: "Verbally abuse the spouse and client, calling them ignorant and irresponsible for trusting traditional healers",
      },
      {
        id: "b",
        text: "Tell the client that insulin is only a temporary drug that can be permanently discontinued whenever faith feels strong",
      },
      {
        id: "c",
        text: "Ban the spouse from visiting the hospital ever again",
      },
      {
        id: "d",
        text: "Provide empathetic, respectful, and culturally congruent education explaining the absolute biological necessity of lifelong insulin replacement for survival in type 1 diabetes (due to total pancreatic beta-cell loss), explore their spiritual beliefs without mockery, and negotiate safe spiritual practices that do not interrupt daily insulin therapy",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "In type 1 diabetes, pancreatic beta-cell destruction causes absolute insulin deficiency; discontinuing insulin is rapidly fatal (DKA). Shaming, insulting, or berating pluralist clients (a) creates deep psychological defensiveness, guilt, and alienation, driving them further away from conventional care. The nurse must validate their desire for spiritual comfort, respectfully explain the pathophysiology of type 1 diabetes (the body requires insulin just like it requires oxygen and water), emphasize that insulin is non-negotiable for life, and negotiate ways their spiritual beliefs and prayers can support their healing while maintaining strict daily insulin adherence. Option d exemplifies holistic, culturally competent nursing advocacy.",
    strategy: "Pluralist health coaching: Respect spiritual beliefs, clearly explain non-negotiable biological therapies (like insulin in type 1 diabetes), and bridge cultural values with medical safety.",
    difficulty: "medium",
    tags: ["tcam", "diabetic-ketoacidosis", "cultural-competence", "type-1-diabetes", "pluralist-care"],
    isFree: true,
  },
];
