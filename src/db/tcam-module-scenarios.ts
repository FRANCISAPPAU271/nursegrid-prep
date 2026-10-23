import type { AuthoredQuestion } from "./authored-bank";

export const TCAM_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-TCAM-001",
    categorySlug: "fundamentals",
    stem: "A nurse is conducting a community health education seminar on healthcare modalities. According to the World Health Organization (WHO) and National Center for Complementary and Integrative Health (NCCIH), what is the definitive distinction between 'Complementary Medicine' and 'Alternative Medicine'?",
    choices: [
      {
        id: "a",
        text: "Complementary medicine is used together WITH conventional biomedical care, while alternative medicine is used IN PLACE OF it",
      },
      {
        id: "b",
        text: "Complementary medicine is used IN PLACE OF conventional treatment, while alternative medicine is used ALONGSIDE it",
      },
      {
        id: "c",
        text: "Complementary medicine means only mind-body therapies such as meditation, while alternative medicine means only herbal products",
      },
      {
        id: "d",
        text: "The two terms are interchangeable in ordinary clinical use, and the only real distinction is whether the practitioner holds a licence",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — \"Complementary medicine is used together WITH conventional biomedical care, while alternative medicine is used IN PLACE OF it\". The distinction turns on how a non-mainstream practice is used, not on what the practice is. WHO and the National Center for Complementary and Integrative Health define complementary medicine as a non-mainstream practice used *together with* conventional care — acupuncture alongside analgesia, herbal tea alongside antihypertensives — and alternative medicine as a non-mainstream practice used *in place of* conventional care, such as a botanical infusion taken instead of chemotherapy for a curable cancer. Integrative health, the third term, is the coordinated use of both under one evidence-informed plan. Why the other options fail: option B reverses the two definitions exactly, so it gives the correct words in the wrong order (B); option C sorts the two terms by the type of therapy rather than by how it is used, and both mind-body therapies and herbal products can be either complementary or alternative depending on the context (C); and option D denies a distinction that both bodies do define, with the licensing of the practitioner being a separate question from the classification of the therapy (D). Reference: WHO traditional medicine strategy; NCCIH definitions.",
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
        text: "The Medical and Dental Council with the Pharmacy Council, which license the individual practitioners and the herbal products they sell in their clinics",
      },
      {
        id: "b",
        text: "The Traditional Medicine Practice Council under Act 575 for practitioners and premises, and the Food and Drugs Authority for product registration",
      },
      {
        id: "c",
        text: "The Ghana Health Service with the Ministry of Chieftaincy and Religious Affairs, which jointly oversee all traditional healing practice and premises",
      },
      {
        id: "d",
        text: "The Food and Drugs Authority acting alone, which registers herbal products and also licenses traditional practitioners and their clinics",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — \"The Traditional Medicine Practice Council under Act 575 for practitioners and premises, and the Food and Drugs Authority for product registration\". Two statutes split the work. The Traditional Medicine Practice Act 2000 (Act 575) created the Traditional Medicine Practice Council under the Ministry of Health, and the Council sets standards and registers, licenses and regulates traditional medical practitioners — herbalists, bonesetters and naturopaths — together with their premises and clinics. The Food and Drugs Authority, acting under the Public Health Act 2012 (Act 851), reviews the safety, efficacy, quality and labelling of manufactured herbal products and issues the registration number that a commercial remedy must carry before it can be sold. Practitioner regulation and product regulation are therefore two different authorities doing two different jobs. Why the other options fail: the Medical and Dental Council and the Pharmacy Council regulate doctors, dentists and pharmacists, not traditional practitioners (A); the Ghana Health Service delivers services and the Ministry of Chieftaincy and Religious Affairs has no statutory licensing role over healing practice (C); and the FDA registers products but does not license traditional practitioners or accredit their clinics, which is the Council's function (D). Reference: Traditional Medicine Practice Act 2000 (Act 575); Public Health Act 2012 (Act 851).",
    strategy: "Ghana TCAM regulation: TMPC regulates practitioners and clinics (Act 575); FDA Ghana evaluates and registers herbal medicines.",
    difficulty: "easy",
    tags: ["tcam", "tmpc", "fda-ghana", "act-575", "traditional-medicine-regulation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-003",
    categorySlug: "fundamentals",
    stem: "A client with stage III cervical cancer shows the nurse an unlabelled bottle from a roadside vendor, who promised it would cure cancer, HIV and diabetes within fourteen days without surgery. What should the nurse do?",
    choices: [
      {
        id: "a",
        text: "Make no comment, respect the client's autonomy and let the oncology team raise it at the next review",
      },
      {
        id: "b",
        text: "Ask the client to postpone the next oncology review for two weeks so the mixture can be fairly tried",
      },
      {
        id: "c",
        text: "Explain that it is unregulated, check for FDA Ghana registration and warn that delay lets cancer spread",
      },
      {
        id: "d",
        text: "Confiscate the bottle and tell the client that all herbal products are toxic and should never be used at all",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — “Explain that it is unregulated, check for FDA Ghana registration and warn that delay lets cancer spread”. Three things are wrong with the bottle and the nurse addresses all three: it has no label, so the dose and the contents are unknown; it makes a cure-all claim, which no single preparation can support; and it is being offered as a substitute for treatment in a cancer that is still treatable. The nurse is honest about the risk of delaying oncology care, checks whether the product carries Ghana FDA registration, and keeps the door open so the client does not simply stop attending. Why the other options fail: A — saying nothing is not respect, it is abandonment of a client about to make a dangerous choice; B — a two-week trial of an unproven mixture is exactly the delay that allows a treatable cancer to metastasise; D — confiscation is not the nurse's to do and the blanket claim that all herbals are toxic is false, which costs the nurse credibility.",
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
        text: "Deep vein thrombosis of the calf; keep the limb elevated above the level of the heart and start anticoagulation with low-molecular-weight heparin without delay",
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
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — \"Acute compartment syndrome secondary to constrictive traditional splinting, requiring immediate splint removal and emergency orthopedic surgical fasciotomy\". Traditional bonesetter gangrene (TBS gangrene) and acute compartment syndrome are well-documented severe pediatric surgical complications in Sub-Saharan Africa. Overly tight, unyielding traditional bamboo or wooden splints encasing an acutely fractured, swelling limb elevate intracompartmental pressures above capillary perfusion pressure. This causes ischemia, nerve necrosis, and muscle infarction (the 6 P's: Pain out of proportion, Pressure/tense calf, Paresthesia, Pallor, Paralysis, Pulselessness). The nurse must immediately cut off constricting splints, notify the orthopedic surgeon, and prepare for emergent surgical fasciotomy to prevent amputation. Why the other options fail: DVT does not render a limb pulseless and anticoagulation would not relieve compartment pressure; cellulitis does not cause pulselessness; and delayed union is a late radiographic finding, not an acute limb-threatening event.",
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
        text: "Uterine hyperstimulation and impending rupture from unmonitored herbal oxytocics, needing tocolysis, oxygen and emergency caesarean",
      },
      {
        id: "b",
        text: "Normal active first stage of labour; encourage walking and oral fluids while waiting for the next vaginal examination and partograph",
      },
      {
        id: "c",
        text: "Obstructed labour from cephalopelvic disproportion; prepare for an assisted vaginal delivery in theatre with neonatal resuscitation",
      },
      {
        id: "d",
        text: "Uterine atony with postpartum haemorrhage; start an oxytocin infusion, massage the fundus and prepare for blood transfusion",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — \"Uterine hyperstimulation and impending rupture from unmonitored herbal oxytocics, needing tocolysis, oxygen and emergency caesarean\". Indigenous herbal uterotonics such as kaligbali and aworoworo contain oxytocic alkaloids of unknown dose, and this woman has had repeated doses over twenty-eight hours with no fetal monitoring. The result is uncoordinated, tetanic uterine contraction with no relaxation between contractions: placental perfusion falls, the fetal heart rate decelerates, and the uterus can rupture, which is catastrophic and can kill the mother through exsanguination. The nurse's immediate job is to call the obstetrician, position her on the left side, give oxygen, start large-bore intravenous fluids, give a tocolytic if the protocol directs, and move her to theatre for caesarean delivery. Why the other options fail: calling a tetanic, non-relaxing uterus a normal first stage is the most dangerous error available here, and partograph plotting cannot make an over-contracted uterus normal (B); cephalopelvic disproportion does not produce tetanic contractions without relaxation, and an assisted vaginal birth in the presence of fetal decelerations and a contracting uterus would be unsafe (C); and atony produces a soft, boggy uterus after delivery, whereas this uterus is contracting continuously before delivery (D). Reference: Ghana STG — obstructed and prolonged labour; management of uterine hyperstimulation.",
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
        text: "Allow the prayer and anointing at once, since spiritual rituals carry no infection risk and delay is disrespectful",
      },
      {
        id: "b",
        text: "Decline the visit until discharge, because religious gatherings are a recognised source of hospital infection",
      },
      {
        id: "c",
        text: "Arrange the prayer at a suitable time, keep hand hygiene, and let the antibiotics continue uninterrupted",
      },
      {
        id: "d",
        text: "Postpone the visit until the antibiotic course is finished, so that prayer cannot reduce its effectiveness",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — “Arrange the prayer at a suitable time, keep hand hygiene, and let the antibiotics continue uninterrupted”. Spiritual care is part of nursing, and a request for prayer and anointing at a frightening time is reasonable. The nurse makes it possible: a mutually suitable time, the fewest people needed, hand hygiene before and after, and the infusion and antibiotics running to schedule. Nothing about the ritual interferes with the treatment, and refusing it would damage trust for no clinical gain. Why the other options fail: A — allowing a group in without any thought about hand hygiene or crowding ignores a real infection risk in a patient with severe pneumonia; B — refusing outright is not justified, since the risk is manageable; D — prayer has no effect on the action of ceftriaxone, so postponing the visit has no clinical basis and simply withholds support the patient asked for.",
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
        text: "St John's Wort is a potent inhibitor of hepatic CYP3A4 and raises dolutegravir concentrations, risking central nervous system toxicity, insomnia and abnormal dreams within the first fortnight of use as the concentration accumulates",
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
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — \"St John's Wort is a potent inducer of CYP3A4 and intestinal P-glycoprotein, accelerating antiretroviral metabolism, lowering plasma concentrations, and leading to treatment failure and viral drug resistance\". St. John's Wort (*Hypericum perforatum*) is a classic, high-yield NCLEX herb-drug interaction. It is a powerful inducer of hepatic CYP3A4 enzymes and P-glycoprotein (efflux transporter). Co-administration significantly lowers the serum concentration of drugs metabolized by CYP3A4—including antiretrovirals (protease inhibitors, NNRTIs, integrase inhibitors), oral contraceptives (causing unintended pregnancy), cyclosporine/tacrolimus (causing organ transplant rejection), and warfarin. It also causes serotonin syndrome when combined with SSRIs. St. John's Wort does not cure HIV and has extensive interactions. Why the other options fail: St John's Wort induces rather than inhibits CYP3A4, so concentrations fall; it is not pharmacokineticially inert; and the interaction is enzyme induction, not gut chelation, so separating doses does not correct it.",
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
        text: "Garlic and ginkgo induce hepatic CYP2C9 and lower the INR, so increase the warfarin dose and recheck in a week",
      },
      {
        id: "b",
        text: "Garlic is rich in vitamin K and antagonises warfarin, reducing its effect and risking valve thrombosis",
      },
      {
        id: "c",
        text: "Ginkgo and garlic both inhibit platelet aggregation, which adds to warfarin and greatly raises bleeding risk",
      },
      {
        id: "d",
        text: "Neither herb affects haemostasis; only dietary vitamin K alters the INR during stable warfarin therapy",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — “Ginkgo and garlic both inhibit platelet aggregation, which adds to warfarin and greatly raises bleeding risk”. Ginkgo, garlic, ginseng and ginger all reduce platelet aggregation, and taken with warfarin they add a second anticoagulant effect on top of the first. In a patient with a mechanical valve the result is epistaxis and bruising at an INR that may look acceptable, so the herbs are stopped and the bleeding is assessed rather than the warfarin simply increased. Why the other options fail: A — the interaction is on platelets, not on CYP2C9 induction, and increasing the dose would make the bleeding worse; B — garlic does not contain enough vitamin K to antagonise warfarin, and this reverses the mechanism; D — both herbs measurably affect haemostasis, which is precisely why the bleeding occurred.",
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
        text: "Chronic interstitial nephritis that carries no malignant potential once the offending tea is stopped and renal function is supported with fluids and blood pressure control",
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
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — \"Aristolochic Acid Nephropathy (fibrosing interstitial nephritis) leading to end-stage renal disease, alongside a high risk of upper urothelial tract carcinoma\". Aristolochic acid (found in plants of the *Aristolochia* genus, often used in traditional slimming teas and rheumatic remedies) is a potent nephrotoxin and human carcinogen. It causes Aristolochic Acid Nephropathy (previously known as Chinese Herb Nephropathy or Balkan Endemic Nephropathy), characterized by extensive renal interstitial fibrosis, tubular atrophy without glomerular lesions, and rapid progression to end-stage renal disease (ESRD). Crucially, aristolochic acid forms DNA adducts that induce high rates of upper urinary tract urothelial carcinoma. It does not cause reversible pancreatitis or cardiomyopathy. Why the other options fail: aristolochic acid nephropathy is fibrosing and irreversible with a documented urothelial cancer risk; it is not acute tubular necrosis that recovers; and it is not a podocytopathy with preserved filtration.",
    strategy: "Herbal toxicity: Aristolochic acid (*Aristolochia*) is severely nephrotoxic, causing irreversible fibrosing interstitial nephritis and urothelial carcinoma.",
    difficulty: "hard",
    tags: ["tcam", "aristolochic-acid", "nephrotoxicity", "renal-failure", "urothelial-carcinoma"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-010",
    categorySlug: "fundamentals",
    stem: "A woman in a village has been in labour for twelve hours with the traditional birth attendant and the baby has still not been born. What should the attendant do?",
    choices: [
      {
        id: "a",
        text: "Continue to wait, because a first labour commonly lasts longer than twelve hours",
      },
      {
        id: "b",
        text: "Give her a herbal preparation to strengthen the contractions and keep waiting at home",
      },
      {
        id: "c",
        text: "Arrange immediate referral to the health centre and send a note of the labour with her",
      },
      {
        id: "d",
        text: "Ask the family to bring a second attendant who has more experience of difficult births",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — “Arrange immediate referral to the health centre and send a note of the labour with her”. Twelve hours without delivery is prolonged labour, and the attendants at a village birth are judged on recognising it early rather than on finishing at home. The woman is referred without delay to the health centre, with a note of when labour began, the membranes, the contractions and any bleeding, and someone goes with her. Why the other options fail: A — waiting turns a delay into an obstructed labour, which is where ruptured uterus and stillbirth come from; B — herbal oxytocics can cause a hypertonic uterus or rupture and keep the woman away from care; D — a second attendant at home does not provide the monitoring or the theatre that a prolonged labour may need.",
    strategy: "Perioperative rule: Stop all herbal supplements at least 2 to 3 weeks prior to elective surgery to prevent bleeding and anesthesia interactions.",
    difficulty: "easy",
    tags: ["tcam", "perioperative-care", "herbal-supplements", "surgical-safety", "bleeding-risk"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-011",
    categorySlug: "fundamentals",
    stem: "A woman at 8 weeks' gestation asks the antenatal nurse whether she may take bitter herbal roots and blue cohosh for morning sickness. What should the nurse advise?",
    choices: [
      {
        id: "a",
        text: "Dilute infusions are safe in pregnancy because the dose reaching the fetus is much lower than the mother's",
      },
      {
        id: "b",
        text: "Only herbs traditionally used for morning sickness are safe during the first trimester of pregnancy",
      },
      {
        id: "c",
        text: "Avoid all herbal preparations unless an obstetric provider approves them, since many are uterotonic",
      },
      {
        id: "d",
        text: "Herbal remedies may be started after 12 weeks, once organogenesis is complete in the fetus",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — “Avoid all herbal preparations unless an obstetric provider approves them, since many are uterotonic”. Herbal does not mean harmless, and pregnancy is the time when that matters most. Blue cohosh, pennyroyal, cassia and many bitter roots contain emmenagogue or uterotonic compounds that stimulate the uterus, and some are teratogenic; the dose in a cup of infusion is not standardised, so nobody can say how much the woman or the fetus received. The safe answer is that nothing is taken in pregnancy unless the obstetric team has approved it, and the woman is told why rather than simply told no. Why the other options fail: A — dilution does not make an active compound inactive, and the fetal dose is exactly what is unknown; B — a herb being traditional for morning sickness says nothing about its safety in pregnancy, and several traditional remedies are precisely the abortifacients; D — twelve weeks is when major organ formation ends, but growth, brain development and uterine sensitivity continue, so the risk does not switch off.",
    strategy: "Maternal-fetal safety: Avoid unprescribed herbal medicines during pregnancy; many herbs possess uterotonic properties that cause miscarriage or teratogenicity.",
    difficulty: "easy",
    tags: ["tcam", "pregnancy", "herbal-safety", "uterotonics", "teratogenicity"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCAM-012",
    categorySlug: "fundamentals",
    stem: "A client receiving chemotherapy has severe nausea and asks about acupressure at the P6 point on the inner wrist. How should the nurse explain its action?",
    choices: [
      {
        id: "a",
        text: "It stimulates acupoints that modulate autonomic pathways and release endorphins and serotonin",
      },
      {
        id: "b",
        text: "It stimulates the vagus nerve at the wrist, slowing the heart and abolishing the vomiting reflex",
      },
      {
        id: "c",
        text: "It acts purely as a placebo; trials show no measurable neurochemical or autonomic change at all",
      },
      {
        id: "d",
        text: "It blocks the phrenic nerve, paralysing the diaphragm and so preventing the physical act of vomiting",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — “It stimulates acupoints that modulate autonomic pathways and release endorphins and serotonin”. Acupressure at P6 is one of the complementary measures that guidelines accept alongside antiemetics, not instead of them. The best current explanation is that stimulating the point alters autonomic signalling and triggers release of endogenous opioids and serotonin, which dampens the emetic and pain pathways at the level of the brainstem and the gate in the dorsal horn. Why the other options fail: B — the vagus is not stimulated at the wrist in this way, and abolishing the reflex outright is not what acupressure does; C — controlled trials do report measurable effects and guideline bodies do recommend it, so calling it pure placebo overstates the evidence in the other direction; D — the phrenic nerve supplies the diaphragm from the neck and has nothing to do with the wrist point, and paralysing the diaphragm would be a catastrophe rather than a treatment.",
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
        text: "Chronic venous insufficiency with long-standing ankle oedema and brown skin staining of the lower leg, which makes the tissue fragile over the shin",
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
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — \"Active DVT in the affected limb, due to the risk of dislodging the thrombus and causing a fatal pulmonary embolism\". Therapeutic massage and manual soft tissue therapies are contraindicated in acute Deep Vein Thrombosis (DVT), thrombophlebitis, local burns, infected wounds, and severe bleeding disorders. Massaging an extremity harboring an acute venous thrombus exerts mechanical shearing forces that dislodge the clot into systemic venous circulation, causing acute pulmonary embolism, cardiovascular collapse, and sudden death. Tension headaches, anxiety, and mild soreness are classic clinical indications for relaxation massage. Why the other options fail: venous insufficiency, osteoarthritis and diabetic neuropathy are relative cautions at most, and massage is commonly used for each; only an active thrombus carries the dislodgement risk that makes massage absolute.",
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
        text: "Marked parasympathetic excess with a heart rate below 50 beats/min, hypotension and dizziness needing intravenous fluids to restore the blood pressure",
      },
      {
        id: "d",
        text: "Decreased sympathetic nervous system output, reduced heart rate and respiratory rate, lowered blood pressure, and decreased peripheral muscle tension",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — \"Decreased sympathetic nervous system output, reduced heart rate and respiratory rate, lowered blood pressure, and decreased peripheral muscle tension\". Herbert Benson's 'Relaxation Response' is the physiological opposite of the sympathetic fight-or-flight stress reaction. Mind-body complementary therapies (guided imagery, progressive muscle relaxation, meditation, deep diaphragmatic breathing) stimulate the parasympathetic nervous system via the vagus nerve. This causes decreased circulating catecholamines (epinephrine, norepinephrine) and cortisol, reduction in heart rate and respiratory rate, decreased blood pressure, dilation of peripheral blood vessels, and relaxation of skeletal muscle tension. Sympathetic surges or acidosis indicate worsening stress or pathology. Why the other options fail: a catecholamine surge is the stress response being treated, not the relaxation response; the effect is measurable rather than purely subjective; and symptomatic bradycardia with hypotension indicates overstimulation, not a normal relaxation response.",
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
        text: "Why did you stop listening to your doctor and start drinking herbal tea instead of taking the prescribed medication that was controlling your sugar",
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
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — \"'What do you call your problem, what do you think caused it, and what kind of treatment do you believe works best for you?'\". Arthur Kleinman's Explanatory Model questions elicit the client's personal understanding and cultural construction of their illness without passing judgment: 'What do you call your problem? What do you think caused it? Why do you think it started when it did? What does your sickness do to your body? What kind of treatment do you think you should receive?' Asking these open-ended, respectful questions uncovers health beliefs, explains herbal remedy use, and creates a non-defensive foundation for collaborative care. Condescending 'Why' questions and threats shut down dialogue. Why the other options fail: the remaining three options are judgemental or confrontational and close the interview; Kleinman's model requires open questions about the client's own explanation of the illness.",
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
        text: "Explain the risks of uncontrolled hypertension, such as stroke and kidney damage, and insist that the tablets be taken as prescribed",
      },
      {
        id: "b",
        text: "Collaborate on an agreed plan that keeps prayer and culinary garlic while maintaining daily antihypertensives and home checks",
      },
      {
        id: "c",
        text: "Listen carefully to the client's concerns about the tablets, then recommend the standard regimen without discussing herbal alternatives",
      },
      {
        id: "d",
        text: "Acknowledge the client's cultural beliefs, then agree to withhold antihypertensives for a month while the garlic water gets a fair trial",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — \"Collaborate on an agreed plan that keeps prayer and culinary garlic while maintaining daily antihypertensives and home checks\". LEARN is a five-step cross-cultural consultation: Listen to the client's own account of the illness and its meaning, Explain your clinical view in plain words, Acknowledge where the two accounts differ and what is at stake, Recommend a plan you can defend clinically, and then Negotiate. Negotiation is the step where the nurse and client build a plan together that is acceptable to the client and safe: prayer and garlic as culinary seasoning can stay, because neither harms the client and refusing them would end the conversation, while the antihypertensives and the home blood pressure record remain the non-negotiable core of the plan. Why the other options fail: explaining the risks and insisting on the tablets is the Explain and Recommend steps delivered as an instruction, with no negotiation in it (A); listening and then recommending without discussing the alternatives is also Recommend, and it wastes the listening (C); and agreeing to stop the tablets for a month gives away the part of the plan that cannot be given away, which is a failure to negotiate rather than a success at it (D).",
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
        text: "Do you take any herbal teas, roots, tonics, traditional enemas, vitamins or supplements you make or buy?",
      },
      {
        id: "b",
        text: "Record 'no medications' as stated and revisit the medication history at discharge, when the client is less anxious",
      },
      {
        id: "c",
        text: "Ask only about prescription medicines, since herbal products and traditional preparations are not medicines",
      },
      {
        id: "d",
        text: "Ask whether the client takes any supplements at all, without naming examples or asking where they came from",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — \"Do you take any herbal teas, roots, tonics, traditional enemas, vitamins or supplements you make or buy?\". Clients do not count herbal teas, roots, tonics, vitamins, dietary supplements or traditional enemas (bentua) as medicines, because they think of them as foods, tonics or spiritual preparations, so the bare question \"Do you take any medications?\" produces a confident and wrong \"none\". The nurse has to name the categories: ask about herbal teas and roots, tonics, botanical mixtures, traditional enemas, vitamins and over-the-counter supplements, and ask whether they are made at home or bought from a herbal practitioner. Only a named and specific prompt retrieves these, and the answer matters, because several of them interact with prescribed drugs. Why the other options fail: recording a bare \"no\" as stated leaves a false-negative history and is the very error being corrected (B); limiting the question to prescription medicines repeats the assumption that only pills are medicines (C); and a vague prompt about supplements does not cue teas, roots or enemas, which the client does not classify as supplements at all (D). Reference: Ghana STG — traditional and complementary medicine; medication reconciliation.",
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
        text: "Researching plant medicines, assessing botanical safety, toxicology and efficacy, and standardising herbal formulations",
      },
      {
        id: "b",
        text: "Licensing traditional medical practitioners, accrediting their premises and disciplining those who practise without registration",
      },
      {
        id: "c",
        text: "Supplying free herbal alternatives to public hospitals and clinics whenever the conventional medicines run out of stock",
      },
      {
        id: "d",
        text: "Setting the retail price of imported herbal products and approving the advertising claims that the manufacturers make",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — \"Researching plant medicines, assessing botanical safety, toxicology and efficacy, and standardising herbal formulations\". The Centre for Plant Medicine Research at Mampong-Akuapem was established in 1975 and is Ghana's national institute for the scientific study of medicinal plants. Its work is research: botanical and phytochemical analysis, microbiology, pharmacology and toxicology on the plants that traditional healers actually use, the development of standardised and efficacy-tested products such as Cryptolepis for malaria, and technical advice to the Ministry of Health and the Food and Drugs Authority on how herbal medicine can be integrated into public care safely. That is why the pilot units in regional and district hospitals can be staffed by KNUST-trained medical herbalists and still operate to a standard the hospital can defend. Why the other options fail: licensing practitioners, accrediting premises and disciplining the unregistered is the statutory work of the Traditional Medicine Practice Council under Act 575, not of a research institute (B); supplying medicines to hospitals is a procurement and supply-chain function of the Ghana Health Service, not research (C); and setting retail prices and approving advertising claims belongs to the FDA and the Ministry of Trade, not to CPMR (D). Reference: Centre for Plant Medicine Research, Mampong-Akuapem; Traditional Medicine Practice Act 2000 (Act 575).",
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
        text: "Stop the product and advise the client to return to the clinic if the jaundice deepens or confusion develops over the following week, so that the liver can be watched",
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
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — \"Stop the product, secure the packaging and batch number for laboratory analysis, give supportive care, and file an Adverse Drug Reaction report with FDA Ghana\". When an Adverse Drug Reaction (ADR) or toxic organ injury (e.g., herbal hepatotoxicity) is suspected: 1) the offending product must be discontinued immediately; 2) the physical product, packaging, and batch/lot numbers should be preserved for toxicological investigation; 3) medical supportive care initiated; and 4) an official Adverse Drug Reaction (ADR) report submitted to the national regulatory pharmacovigilance authority (such as the FDA Ghana Safety Watch System / Yellow Form). This enables regulatory alerts, recalls of contaminated batches, and public protection. Throwing evidence away, doubling toxic doses, or hiding events violates pharmacovigilance duty. Why the other options fail: watchful waiting delays the regulatory report that protects other clients; continuing the product sustains the injury; and waiting for a second case defeats the purpose of spontaneous reporting.",
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
        text: "Respect the family's beliefs and delay insulin until the prayer sessions are over",
      },
      {
        id: "b",
        text: "Ask the spouse to leave and exclude the family from any discharge teaching",
      },
      {
        id: "c",
        text: "Explain that faith and insulin are incompatible and ask the client to choose",
      },
      {
        id: "d",
        text: "Give culturally congruent teaching and negotiate the spiritual practice",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — \"Give culturally congruent teaching and negotiate the spiritual practice\". In type 1 diabetes, pancreatic beta-cell destruction causes absolute insulin deficiency; discontinuing insulin is rapidly fatal (DKA). Shaming, insulting, or berating pluralist clients creates deep psychological defensiveness, guilt, and alienation, driving them further away from conventional care. The nurse must validate their desire for spiritual comfort, respectfully explain the pathophysiology of type 1 diabetes (the body requires insulin just like it requires oxygen and water), emphasize that insulin is non-negotiable for life, and negotiate ways their spiritual beliefs and prayers can support their healing while maintaining strict daily insulin adherence. Why the other options fail: delaying insulin in DKA is lethal; excluding the family removes the people who administer care at home; and framing faith and insulin as incompatible forces a choice the client does not have to make.",
    strategy: "Pluralist health coaching: Respect spiritual beliefs, clearly explain non-negotiable biological therapies (like insulin in type 1 diabetes), and bridge cultural values with medical safety.",
    difficulty: "medium",
    tags: ["tcam", "diabetic-ketoacidosis", "cultural-competence", "type-1-diabetes", "pluralist-care"],
    isFree: true,
  },
];
