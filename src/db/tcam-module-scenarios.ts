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
        text: "Complementary medicine is used IN PLACE OF conventional treatment and replaces it entirely, whereas alternative medicine is used ALONGSIDE conventional treatment and never instead of it",
      },
      {
        id: "c",
        text: "Complementary medicine refers only to mind-body therapies such as meditation and yoga, whereas alternative medicine refers only to herbal products and traditional botanical preparations",
      },
      {
        id: "d",
        text: "The two terms are interchangeable in everyday clinical use, and the only real distinction is whether the practitioner holds a current state licence to treat clients",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "According to WHO and NCCIH definitions: 1) COMPLEMENTARY MEDICINE involves using non-mainstream healing practices (e.g., acupuncture, herbal teas, guided imagery) alongside and in conjunction with conventional evidence-based medical treatment. 2) ALTERNATIVE MEDICINE involves using non-mainstream practices to substitute for or replace conventional medical treatment (e.g., using a botanical infusion instead of chemotherapy for invasive cancer). 3) INTEGRATIVE HEALTH brings conventional and complementary approaches together in a coordinated, evidence-informed manner. Options b, c, and d mischaracterize both terms. Why the other options fail: option b reverses the two definitions; option c assigns each term to a therapy type rather than describing how it is used with or instead of conventional care; option d denies a distinction that both WHO and NCCIH define.",
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
        text: "The Medical and Dental Council together with the Pharmacy Council, which license both the individual practitioners and the herbal products they sell in their clinics",
      },
      {
        id: "b",
        text: "The Traditional Medicine Practice Council (TMPC) under Act 575 (for practitioner and premises licensing) and the Food and Drugs Authority (FDA) Ghana (for herbal product registration and safety certification)",
      },
      {
        id: "c",
        text: "The Ghana Health Service together with the Ministry of Chieftaincy and Religious Affairs, which jointly oversee all traditional healing practice and its premises",
      },
      {
        id: "d",
        text: "The Food and Drugs Authority acting alone, which registers herbal products for sale and also licenses traditional practitioners and accredits their clinics",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Under Ghanaian statutory law, the Traditional Medicine Practice Act 2000 (Act 575) established the Traditional Medicine Practice Council (TMPC) under the Ministry of Health to set standards, register, license, and regulate traditional medical practitioners (herbalists, bonesetters, naturopaths). Concurrently, the Food and Drugs Authority (FDA) Ghana (under the Public Health Act 851) evaluates the safety, efficacy, quality, toxicology, and labeling of all manufactured commercial herbal products before issuing formal FDA registration numbers (e.g., FDA/HD.xx). The EPA, Police, and Lands Commission have no mandate over clinical TCAM regulation. Why the other options fail: professional councils license clinicians, not herbal products or traditional practitioners; the Ghana Health Service delivers care rather than registering remedies; and the FDA registers products but does not license traditional practitioners.",
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
        text: "Respect the client's autonomy by making no comment on the vendor's claims, record the conversation accurately in the nursing notes, and let the oncology team raise the issue at the next scheduled review",
      },
      {
        id: "b",
        text: "Ask the client to postpone the next oncology review for two weeks so that the herbal mixture can be given a fair trial before any further imaging or chemotherapy is arranged",
      },
      {
        id: "c",
        text: "Explain that unregulated mixtures lack standardized dosing and quality control, warn against fraudulent 'cure-all' claims, emphasize that delaying proven oncology care allows cancer to metastasize, and inspect for FDA Ghana registration while reinforcing evidence-based therapy",
      },
      {
        id: "d",
        text: "Confiscate the jug and tell the client that all herbal products are toxic and should never be used for any reason, since no amount of regulation can make a botanical preparation safe",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Unregulated street concoctions present severe health hazards due to unstandardized dosing, microbial contamination, heavy metal adulteration, and dangerous herb-drug interactions. Furthermore, predatory 'cure-all' claims lead clients to abandon life-saving oncology care during curative windows, resulting in preventable metastasis and death. The nurse must validate the client's search for healing, provide objective risk education regarding uncertified remedies, check for FDA registration, and advocate for evidence-based cancer staging and treatment. Endorsing street mixtures or tasting client medicines is dangerous and unethical. Why the other options fail: saying nothing leaves a fraudulent cure claim unchallenged during a curative treatment window; postponing oncology review spends that window; and condemning all herbal products is both inaccurate and likely to end the conversation.",
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
        text: "Deep vein thrombosis of the calf; keep the limb elevated above the level of the heart and start anticoagulation with low-molecular-weight heparin",
      },
      {
        id: "b",
        text: "Acute compartment syndrome secondary to constrictive traditional splinting, requiring immediate splint removal and emergency orthopedic surgical fasciotomy",
      },
      {
        id: "c",
        text: "Cellulitis complicating the splint; cut the splint off, elevate the limb and start intravenous antibiotics",
      },
      {
        id: "d",
        text: "Delayed union of the tibial shaft; continue immobilisation in the same splint and arrange orthopaedic clinic review in six weeks",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Traditional bonesetter gangrene (TBS gangrene) and acute compartment syndrome are well-documented severe pediatric surgical complications in Sub-Saharan Africa. Overly tight, unyielding traditional bamboo or wooden splints encasing an acutely fractured, swelling limb elevate intracompartmental pressures above capillary perfusion pressure. This causes ischemia, nerve necrosis, and muscle infarction (the 6 P's: Pain out of proportion, Pressure/tense calf, Paresthesia, Pallor, Paralysis, Pulselessness). The nurse must immediately cut off constricting splints, notify the orthopedic surgeon, and prepare for emergent surgical fasciotomy to prevent amputation. Why the other options fail: DVT does not render a limb pulseless and anticoagulation would not relieve compartment pressure; cellulitis does not cause pulselessness; and delayed union is a late radiographic finding, not an acute limb-threatening event.",
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
        text: "Normal active first stage of labour; encourage ambulation and oral fluids while awaiting the next vaginal examination and partograph plotting",
      },
      {
        id: "c",
        text: "Obstructed labour from cephalopelvic disproportion; prepare for an assisted vaginal delivery in theatre with neonatal resuscitation available",
      },
      {
        id: "d",
        text: "Uterine atony with postpartum haemorrhage; start an oxytocin infusion, massage the fundus and prepare for blood transfusion",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Indigenous herbal uterotonics (such as *kaligbali*, *aworoworo*, or *Cassia* extracts) contain potent oxytocic alkaloids that cause uncoordinated, tetanic uterine contractions without periods of physiological relaxation. When administered during obstructed or prolonged labor without fetal monitoring, this causes severe placental hypoperfusion, profound fetal bradycardia, and catastrophic uterine rupture with maternal exsanguination. The nurse must call the obstetrician immediately, position left lateral, administer oxygen, start large-bore IV fluid resuscitation, administer tocolytics if protocol directs, and rush the patient to the operating theater. Calling this normal is fatal negligence. Why the other options fail: normal labour does not produce tetanic contractions with a fetal heart rate of 60 beats/min; cephalopelvic disproportion does not itself cause tetanic contraction; and oxytocin in an already hyperstimulated uterus increases the risk of rupture.",
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
        text: "Allow the prayer and anointing straight away, since spiritual rituals carry no infection risk and delaying them would show disrespect for the family's faith at a frightening time",
      },
      {
        id: "b",
        text: "Decline the visit until the client is discharged, because religious gatherings are a recognised source of hospital-acquired infection on inpatient wards and in side rooms",
      },
      {
        id: "c",
        text: "Facilitate the pastoral prayer and anointing visit at a mutually suitable time, ensuring standard infection control (hand hygiene) is maintained, while ensuring that intravenous antibiotics and medical treatments continue uninterrupted",
      },
      {
        id: "d",
        text: "Postpone the visit until the antibiotic course is finished, so that prayer does not interfere with the action of the intravenous antibiotic or reduce its effectiveness",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "In pluralist healthcare environments, spiritual beliefs and faith-based practices play a vital therapeutic role in client coping, psychological well-being, and hope. The nurse should support beneficial spiritual rituals (prayer, anointing) provided they do not introduce infection risks or disrupt necessary medical therapy. Coordinating visiting times, enforcing hand hygiene, and maintaining continuous antibiotic administration bridges faith and evidence-based science harmoniously. Arresting clergy causes emotional distress; stopping antibiotics leads to septic death; pouring oil into IV lines causes fatal oil embolism and sepsis. Why the other options fail: spiritual rituals are not risk-free and still require infection control; refusing the visit confuses infection prevention with spiritual care; and prayer does not interfere with antibiotic action.",
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
        text: "St John's Wort is a potent inhibitor of hepatic CYP3A4 and raises dolutegravir concentrations, risking central nervous system toxicity, insomnia and abnormal dreams within the first fortnight",
      },
      {
        id: "b",
        text: "St John's Wort has no pharmacokinetic interaction with antiretroviral drugs at all, but it commonly causes photosensitivity and should be stopped for that reason alone",
      },
      {
        id: "c",
        text: "St John's Wort chelates dolutegravir in the gut lumen, and separating the two doses by at least two hours completely prevents the interaction from occurring",
      },
      {
        id: "d",
        text: "St John's Wort is a potent inducer of CYP3A4 and intestinal P-glycoprotein, accelerating antiretroviral metabolism, lowering plasma concentrations, and leading to treatment failure and viral drug resistance",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "St. John's Wort (*Hypericum perforatum*) is a classic, high-yield NCLEX herb-drug interaction. It is a powerful inducer of hepatic CYP3A4 enzymes and P-glycoprotein (efflux transporter). Co-administration significantly lowers the serum concentration of drugs metabolized by CYP3A4—including antiretrovirals (protease inhibitors, NNRTIs, integrase inhibitors), oral contraceptives (causing unintended pregnancy), cyclosporine/tacrolimus (causing organ transplant rejection), and warfarin. It also causes serotonin syndrome when combined with SSRIs. St. John's Wort does not cure HIV and has extensive interactions. Why the other options fail: St John's Wort induces rather than inhibits CYP3A4, so concentrations fall; it is not pharmacokineticially inert; and the interaction is enzyme induction, not gut chelation, so separating doses does not correct it.",
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
        text: "Garlic and ginkgo induce hepatic CYP2C9 and lower the INR, so the warfarin dose should be increased and the INR rechecked after one week of combined use",
      },
      {
        id: "b",
        text: "Garlic is rich in vitamin K and directly antagonises warfarin, reducing its anticoagulant effect and raising the risk of valve thrombosis",
      },
      {
        id: "c",
        text: "Ginkgo biloba and Garlic possess intrinsic antiplatelet properties and inhibit platelet aggregation, which synergistically potentiates warfarin anticoagulation and dramatically increases severe hemorrhage risk",
      },
      {
        id: "d",
        text: "Ginkgo and garlic have no measurable effect on haemostasis at all; only dietary vitamin K alters the INR during chronic warfarin therapy in a stable client",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The '4 G's' of herbal medicine—Ginkgo biloba, Garlic, Ginseng, and Ginger (plus Feverfew and Saw Palmetto)—exhibit antiplatelet properties and impair platelet aggregation. When taken concurrently with anticoagulants (warfarin, heparin, NOACs) or antiplatelet agents (aspirin, clopidogrel), they synergistically elevate bleeding risks, manifesting as spontaneous epistaxis, gastrointestinal bleeding, hematuria, or intracranial hemorrhage. The nurse must recognize this synergistic antiplatelet interaction and advise immediate discontinuation. Garlic does not clot blood or inhibit marrow vitamin K. Why the other options fail: the interaction is pharmacodynamic antiplatelet additivity, not CYP2C9 induction; garlic does not contain vitamin K; and haemostasis is affected well beyond dietary vitamin K.",
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
        text: "Chronic interstitial nephritis that carries no malignant potential once the offending tea is stopped and renal function is supported",
      },
      {
        id: "b",
        text: "Acute tubular necrosis that recovers fully after withdrawal of the tea, with normal renal function documented at follow-up",
      },
      {
        id: "c",
        text: "Membranous nephropathy with nephrotic-range proteinuria but preserved glomerular filtration rate and no cancer risk",
      },
      {
        id: "d",
        text: "Aristolochic Acid Nephropathy (fibrosing interstitial nephritis) leading to end-stage renal disease, alongside a high risk of upper urothelial tract carcinoma",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Aristolochic acid (found in plants of the *Aristolochia* genus, often used in traditional slimming teas and rheumatic remedies) is a potent nephrotoxin and human carcinogen. It causes Aristolochic Acid Nephropathy (previously known as Chinese Herb Nephropathy or Balkan Endemic Nephropathy), characterized by extensive renal interstitial fibrosis, tubular atrophy without glomerular lesions, and rapid progression to end-stage renal disease (ESRD). Crucially, aristolochic acid forms DNA adducts that induce high rates of upper urinary tract urothelial carcinoma. It does not cause reversible pancreatitis or cardiomyopathy. Why the other options fail: aristolochic acid nephropathy is fibrosing and irreversible with a documented urothelial cancer risk; it is not acute tubular necrosis that recovers; and it is not a podocytopathy with preserved filtration.",
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
        text: "Continue the supplements and simply tell the anaesthetist on the morning of surgery that they have been taken, so the team can plan around them",
      },
      {
        id: "b",
        text: "Stop only St John's Wort and continue ginkgo and ginseng up to the day of surgery, since only the antidepressant herb affects anaesthesia",
      },
      {
        id: "c",
        text: "Discontinue all herbal supplements immediately (at least 2 to 3 weeks prior to elective surgery) to prevent intraoperative hemorrhage, unstable hemodynamic fluctuations, and adverse anesthetic drug interactions",
      },
      {
        id: "d",
        text: "Continue all three but halve the dose for the week before surgery, so that the blood-thinning effect falls without losing the memory benefit",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The American Society of Anesthesiologists (ASA) and surgical safety guidelines mandate that all herbal remedies and dietary supplements should be discontinued at least 2 to 3 weeks prior to elective surgery. Herbals pose multiple perioperative hazards: Ginkgo and Ginseng inhibit platelet function and provoke intraoperative hemorrhage; St. John's Wort induces hepatic drug metabolism, altering anesthetic clearance and prolonging sedative recovery; Ephedra/Ginseng can trigger intraoperative cardiac arrhythmias and hypertensive crises. Doubling doses or hiding supplement use creates life-threatening surgical emergencies. Why the other options fail: disclosure on the morning of surgery is too late to reverse platelet inhibition or enzyme induction; leaving ginkgo and ginseng in place preserves the bleeding risk; and dose reduction does not remove the interaction.",
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
        text: "Herbal teas are acceptable in pregnancy provided they are taken as dilute infusions rather than concentrated capsules, since the active dose delivered to the fetus is much lower",
      },
      {
        id: "b",
        text: "Only herbs traditionally used for morning sickness are safe during the first trimester, because their safety in that specific indication is well established in practice",
      },
      {
        id: "c",
        text: "Herbal preparations should be strictly avoided in pregnancy unless approved by an obstetric provider, because many herbs contain active compounds with emmenagogue or uterotonic properties that trigger uterine contractions, miscarriage, or fetal teratogenicity",
      },
      {
        id: "d",
        text: "Herbal remedies are acceptable after 12 weeks of gestation, once organogenesis is complete and the fetus is no longer vulnerable to malformation",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Herbal supplements are not inherently safe in pregnancy. Many botanical preparations (e.g., Blue Cohosh, Pennyroyal, *Cryptolepis*, *Cassia*) possess potent emmenagogue, abortifacient, or uterotonic properties that stimulate uterine contractions, precipitate spontaneous abortion, or cause fetal teratogenic malformations. Furthermore, lack of standardization and risk of heavy metal contamination make unmonitored herbal ingestion particularly dangerous during first-trimester organogenesis. The myth that 'natural equals safe' is a widespread misconception that nurses must actively correct. Why the other options fail: infusion form does not make a uterotonic herb safe; herbs used for morning sickness include known emmenagogues; and organogenesis is not the only period of risk, because uterine activity can still cause loss later in pregnancy.",
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
        text: "Stimulating specific neurovascular acupoints modulates autonomic pathways, triggers the release of endogenous endorphins and serotonin, and activates the Gate Control mechanism to suppress emetic and nociceptive signalling",
      },
      {
        id: "b",
        text: "It stimulates the vagus nerve directly at the wrist point, producing bradycardia and abolishing the vomiting reflex at its source in the medulla oblongata",
      },
      {
        id: "c",
        text: "It works purely as a placebo; controlled trials show no measurable neurochemical or autonomic change beyond the psychological ritual of treatment itself",
      },
      {
        id: "d",
        text: "It blocks the phrenic nerve on the affected side, paralysing the diaphragm and preventing the physical movement of vomiting",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Acupuncture and acupressure (such as pressure at the P6 Neiguan point on the anterior forearm) are evidence-supported complementary therapies recognized by the WHO and oncology guidelines for managing postoperative and chemotherapy-induced nausea and pain. Physiological research demonstrates that acupoint stimulation activates A-beta and A-delta sensory fibers, modulates central autonomic nervous system centers, releases endogenous opioids (beta-endorphins, enkephalins), alters serotonin transmission, and engages the Gate Control Theory to blunt emetic and pain pathways. It does not destroy nerves or paralyze the diaphragm. Why the other options fail: acupressure does not stimulate the vagus directly to produce bradycardia; trial evidence shows measurable autonomic and neurochemical effects rather than pure placebo; and it does not paralyse the diaphragm.",
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
        text: "Chronic venous insufficiency with long-standing ankle oedema and brown skin staining of the lower leg",
      },
      {
        id: "b",
        text: "Active DVT in the affected limb, due to the risk of dislodging the thrombus and causing a fatal pulmonary embolism",
      },
      {
        id: "c",
        text: "Osteoarthritis of the hip with restricted range of movement, morning stiffness and crepitus",
      },
      {
        id: "d",
        text: "Type 2 diabetes with symmetrical peripheral neuropathy and reduced sensation in both feet",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Therapeutic massage and manual soft tissue therapies are contraindicated in acute Deep Vein Thrombosis (DVT), thrombophlebitis, local burns, infected wounds, and severe bleeding disorders. Massaging an extremity harboring an acute venous thrombus exerts mechanical shearing forces that dislodge the clot into systemic venous circulation, causing acute pulmonary embolism, cardiovascular collapse, and sudden death. Tension headaches, anxiety, and mild soreness are classic clinical indications for relaxation massage. Why the other options fail: venous insufficiency, osteoarthritis and diabetic neuropathy are relative cautions at most, and massage is commonly used for each; only an active thrombus carries the dislodgement risk that makes massage absolute.",
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
        text: "A sharp rise in plasma catecholamines with increased heart rate, raised blood pressure and cold, clammy hands",
      },
      {
        id: "b",
        text: "No measurable physiological change at all; the benefit of guided imagery is entirely subjective and cannot be measured",
      },
      {
        id: "c",
        text: "Marked parasympathetic excess with a heart rate below 50 beats/min, hypotension and dizziness needing intravenous fluids",
      },
      {
        id: "d",
        text: "Decreased sympathetic nervous system output, reduced heart rate and respiratory rate, lowered blood pressure, and decreased peripheral muscle tension",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Herbert Benson's 'Relaxation Response' is the physiological opposite of the sympathetic fight-or-flight stress reaction. Mind-body complementary therapies (guided imagery, progressive muscle relaxation, meditation, deep diaphragmatic breathing) stimulate the parasympathetic nervous system via the vagus nerve. This causes decreased circulating catecholamines (epinephrine, norepinephrine) and cortisol, reduction in heart rate and respiratory rate, decreased blood pressure, dilation of peripheral blood vessels, and relaxation of skeletal muscle tension. Sympathetic surges or acidosis indicate worsening stress or pathology. Why the other options fail: a catecholamine surge is the stress response being treated, not the relaxation response; the effect is measurable rather than purely subjective; and symptomatic bradycardia with hypotension indicates overstimulation, not a normal relaxation response.",
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
        text: "Why did you stop listening to your doctor and start drinking herbal tea instead of taking the prescribed medication?",
      },
      {
        id: "b",
        text: "'What do you call your problem, what do you think caused it, and what kind of treatment do you believe works best for you?'",
      },
      {
        id: "c",
        text: "Do you understand that continuing this herbal tea will damage your liver within a month if you do not stop it now?",
      },
      {
        id: "d",
        text: "Can you sign this form confirming that you have refused standard medical advice and accept the consequences?",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Arthur Kleinman's Explanatory Model questions elicit the client's personal understanding and cultural construction of their illness without passing judgment: 'What do you call your problem? What do you think caused it? Why do you think it started when it did? What does your sickness do to your body? What kind of treatment do you think you should receive?' Asking these open-ended, respectful questions uncovers health beliefs, explains herbal remedy use, and creates a non-defensive foundation for collaborative care. Condescending 'Why' questions and threats shut down dialogue. Why the other options fail: the remaining three options are judgemental or confrontational and close the interview; Kleinman's model requires open questions about the client's own explanation of the illness.",
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
        text: "Explain the risks of uncontrolled hypertension, including stroke and kidney damage, and tell the client that the tablets must be taken exactly as prescribed",
      },
      {
        id: "b",
        text: "Collaborate with the client on an agreed plan that keeps safe cultural preferences such as prayer and culinary garlic while maintaining daily antihypertensives and shared home blood pressure monitoring",
      },
      {
        id: "c",
        text: "Listen carefully to the client's concerns about the tablets, then recommend the standard regimen without any further discussion of herbal alternatives",
      },
      {
        id: "d",
        text: "Acknowledge the client's cultural beliefs, then agree to withhold antihypertensives for one month while the garlic water is given a fair trial",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The LEARN model is an evidence-based cross-cultural communication framework: 1) LISTEN with empathy; 2) EXPLAIN your clinical perceptions; 3) ACKNOWLEDGE and discuss differences and similarities; 4) RECOMMEND treatment; 5) NEGOTIATE agreement. In the Negotiation step, the nurse and client collaborate on a culturally acceptable, clinically safe compromise: accommodating the client's cultural and spiritual values (prayer, culinary garlic) while maintaining essential life-saving biomedical therapies (antihypertensive pills). Coercive threats provoke rejection; abandoning medicine leads to hypertensive stroke. Why the other options fail: explaining and instructing is the Explain and Recommend steps rather than Negotiate; recommending without discussion is also Recommend; and agreeing to withhold antihypertensives abandons the clinical bottom line instead of negotiating around it.",
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
        text: "Record 'no medications' exactly as stated and revisit the medication history at the point of discharge, when the client is less anxious",
      },
      {
        id: "c",
        text: "Ask only about prescription medicines, since herbal products and traditional preparations are not medicines and do not need recording",
      },
      {
        id: "d",
        text: "Ask whether the client takes any supplements at all, without naming specific examples or asking where they were obtained",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Clients frequently do not consider herbal teas, roots, tonics, vitamins, dietary supplements, or traditional enemas (*bentua*) to be 'medicines' because they perceive them as natural foods or spiritual preparations. Consequently, simply asking 'Do you take any medications?' yields false negative responses. Best clinical practice requires asking explicit, routine follow-up questions detailing specific modalities: herbal teas, botanical mixtures, roots, enemas, vitamins, and over-the-counter supplements. Leaving records blank misses lethal interactions; searching luggage violates rights. Why the other options fail: recording a bare 'no' produces a false-negative history; restricting the question to prescription medicines reproduces the original error; and a general prompt about supplements does not cue traditional teas, roots or enemas.",
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
        text: "Conducting scientific research on plant medicines, evaluating botanical safety, toxicology and efficacy, and standardising herbal formulations for national healthcare delivery",
      },
      {
        id: "b",
        text: "Licensing traditional medical practitioners, accrediting their premises and disciplining those who practise without valid registration",
      },
      {
        id: "c",
        text: "Supplying free herbal alternatives to public hospitals and clinics whenever conventional medicines are out of stock",
      },
      {
        id: "d",
        text: "Setting the retail price of imported herbal products and approving the advertising claims that manufacturers make for them",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The Centre for Plant Medicine Research (CPMR) at Mampong-Akuapem (established in 1975) is Ghana's premier national biomedical research institute dedicated to the scientific investigation of medicinal plants. CPMR conducts rigorous botanical, phytochemical, microbiological, pharmacological, and toxicological analyses on traditional herbal medicines, develops standardized efficacy-tested botanical products (e.g., *Cryptolepis* for malaria), and advises the Ministry of Health and FDA Ghana on safe integration into the public health system. Options b, c, bnd d are fictional absurdities. Why the other options fail: practitioner licensing is the TMPC's role; supplying medicines is a procurement function; and price setting is not a research function.",
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
        text: "Stop the product and advise the client to return to clinic if the jaundice deepens or confusion develops over the following week",
      },
      {
        id: "b",
        text: "Continue the product at a reduced dose, stop alcohol, and monitor liver enzymes monthly until they return to normal",
      },
      {
        id: "c",
        text: "Report the reaction only if a second client presents with the same pattern of liver injury within the same month",
      },
      {
        id: "d",
        text: "Stop the product, secure the packaging and batch number for laboratory analysis, give supportive care, and file an Adverse Drug Reaction report with FDA Ghana",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "When an Adverse Drug Reaction (ADR) or toxic organ injury (e.g., herbal hepatotoxicity) is suspected: 1) the offending product must be discontinued immediately; 2) the physical product, packaging, and batch/lot numbers should be preserved for toxicological investigation; 3) medical supportive care initiated; and 4) an official Adverse Drug Reaction (ADR) report submitted to the national regulatory pharmacovigilance authority (such as the FDA Ghana Safety Watch System / Yellow Form). This enables regulatory alerts, recalls of contaminated batches, and public protection. Throwing evidence away, doubling toxic doses, or hiding events violates pharmacovigilance duty. Why the other options fail: watchful waiting delays the regulatory report that protects other clients; continuing the product sustains the injury; and waiting for a second case defeats the purpose of spontaneous reporting.",
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
        text: "Respect the family's spiritual beliefs and delay insulin until the prayer sessions and any associated fasting are complete",
      },
      {
        id: "b",
        text: "Ask the spouse to leave the unit and exclude the family from all further discharge teaching about insulin and monitoring",
      },
      {
        id: "c",
        text: "Explain that faith and insulin are incompatible and ask the client to choose one approach or the other before discharge",
      },
      {
        id: "d",
        text: "Provide empathetic, culturally congruent education on the lifelong necessity of insulin in type 1 diabetes, explore their beliefs without mockery, and negotiate spiritual practices that do not interrupt insulin",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "In type 1 diabetes, pancreatic beta-cell destruction causes absolute insulin deficiency; discontinuing insulin is rapidly fatal (DKA). Shaming, insulting, or berating pluralist clients creates deep psychological defensiveness, guilt, and alienation, driving them further away from conventional care. The nurse must validate their desire for spiritual comfort, respectfully explain the pathophysiology of type 1 diabetes (the body requires insulin just like it requires oxygen and water), emphasize that insulin is non-negotiable for life, and negotiate ways their spiritual beliefs and prayers can support their healing while maintaining strict daily insulin adherence. Why the other options fail: delaying insulin in DKA is lethal; excluding the family removes the people who administer care at home; and framing faith and insulin as incompatible forces a choice the client does not have to make.",
    strategy: "Pluralist health coaching: Respect spiritual beliefs, clearly explain non-negotiable biological therapies (like insulin in type 1 diabetes), and bridge cultural values with medical safety.",
    difficulty: "medium",
    tags: ["tcam", "diabetic-ketoacidosis", "cultural-competence", "type-1-diabetes", "pluralist-care"],
    isFree: true,
  },
];
