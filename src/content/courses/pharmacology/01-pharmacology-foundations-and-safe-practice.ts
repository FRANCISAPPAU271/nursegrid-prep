import type { CourseModule } from "../types";

export const pharmacologyFoundationsAndSafePractice: CourseModule = {
  slug: "pharmacology-foundations-and-safe-medication-practice",
  title: "Pharmacology foundations and safe medication practice",
  summary: "How drugs move through the body and act on it — absorption, first pass, distribution, metabolism, excretion, half-life, loading doses, receptors, therapeutic index and drug monitoring — the adverse reactions and interactions that follow from those principles, who governs medicines in Ghana, and then the daily discipline that keeps medicines safe: the rights of administration, the prescription, the traps that cause errors and the systems that prevent them, what to do when an error happens, medication reconciliation and patient teaching, storage, the cold chain, expiry, substandard and falsified medicines, and the controlled-drug chain that must never break.",
  lessons: [
    {
      slug: "how-drugs-work-pharmacokinetics-pharmacodynamics-and-medicines-regulation-in-ghana",
      title: "How drugs work — pharmacokinetics, pharmacodynamics and medicines regulation in Ghana",
      minutes: 18,
      objectives: [
        "Describe absorption, distribution, metabolism and excretion, explain first-pass metabolism, bioavailability, protein binding, half-life, steady state and loading doses, and use them to explain why doses, routes and timings differ between drugs and between patients.",
        "Explain agonists, antagonists, the therapeutic index and therapeutic drug monitoring, including when a trough level is taken, and name the drugs that need it.",
        "Distinguish type A from type B adverse drug reactions, allergy from intolerance, and side effect from adverse reaction, and explain the three mechanisms of drug interaction with Ghanaian examples — rifampicin and the pill, fluconazole and warfarin, antacids and ciprofloxacin.",
        "Name the bodies that govern medicines in Ghana and what each does, explain the Essential Medicines List, the NHIS Medicines List, generic prescribing and the rational use of medicines, and state the nurse's scope and accountability in medicines administration.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Why a nurse needs pharmacology, not just a drug list",
          paragraphs: [
            "A nurse gives more doses of medicine in a career than any other health worker, and almost every question an examiner can ask about a medicine — why this dose, why this route, why this time, why this patient needs less, what to watch for, what went wrong — is answered by a small number of principles rather than by memorising thousands of drugs. <strong>Pharmacokinetics</strong> is what the <strong>body does to the drug</strong>: how it gets in, where it goes, how it is broken down and how it leaves. <strong>Pharmacodynamics</strong> is what the <strong>drug does to the body</strong>: the receptor it binds, the effect it produces and the dose at which that effect becomes harm. Learn the system and the list follows.",
            "Every medicine has a <strong>generic name</strong> (the international non-proprietary name — paracetamol, amoxicillin, artemether-lumefantrine) and one or more <strong>brand names</strong> chosen by manufacturers. Ghana's policy is generic prescribing: the generic name is the same everywhere, generics cost less, and using it prevents the commonest double-dosing error — a patient taking the same drug twice under two brand names. A patient who is alarmed that this month's tablets are a different colour from last month's needs the explanation that generic versions contain the <strong>same active ingredient at the same strength</strong> and have shown bioequivalence to the original, even though shape, colour and inactive ingredients differ.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PKD-1188.svg",
          alt: "The journey of a drug in four stages — absorption, distribution, metabolism and excretion — with the first-pass effect explaining why the oral dose is bigger than the injected one, and half-life deciding the dosing timetable.",
          caption: "Absorption gets the drug into the blood (food, vomiting and antacids interfere); distribution carries it to the tissues (only the unbound drug acts, so albumin matters); the liver metabolises it into something excretable; the kidney excretes it (poor kidneys mean accumulation). A swallowed drug passes through the liver before it reaches the body — the first pass — which is why oral morphine is a larger dose than intravenous morphine, and why the sublingual, rectal and intravenous routes bypass it.",
        },
        {
          type: "table",
          heading: "Pharmacokinetics — the four stages and what changes them",
          columns: ["Stage", "What happens", "What alters it", "What it means at the bedside"],
          rows: [
            ["<strong>Absorption</strong>", "Drug moves from the site of administration into the blood. Intravenous drugs skip this step entirely.", "Food (slows or blocks some drugs, improves others — artemether-lumefantrine needs fat), gastric pH, vomiting and diarrhoea, gut motility, antacids, iron and calcium (bind tetracyclines and ciprofloxacin), blood flow to the site (an intramuscular injection into a shocked, vasoconstricted patient is absorbed unpredictably).", "'Empty stomach' and 'with food' instructions matter; separate interacting medicines by two hours; use the intravenous route in shock."],
            ["<strong>Bioavailability and first pass</strong>", "The fraction of a dose that reaches the systemic circulation unchanged. Swallowed drugs travel from the gut through the portal vein to the liver, which destroys part of the dose before it reaches the body.", "Route: sublingual, buccal, rectal, transdermal, inhaled and intravenous routes avoid first pass; liver disease reduces first-pass metabolism so oral doses act more strongly.", "Oral doses of morphine, glyceryl trinitrate and propranolol are much larger than parenteral doses; a sublingual tablet that is swallowed may do nothing; never convert a dose from one route to another by assuming they are equal."],
            ["<strong>Distribution</strong>", "Drug is carried in the plasma to the tissues; many drugs travel bound to albumin and only the <strong>free (unbound) fraction</strong> is active.", "Low albumin (malnutrition, liver disease, nephrotic syndrome, severe illness) leaves more free drug — phenytoin and warfarin act more strongly; body fat and water content (infants, older adults, pregnancy) change where the drug goes; the blood–brain and placental barriers.", "A malnourished patient on a highly protein-bound drug is at risk of toxicity from a 'normal' dose; pregnancy changes doses of some drugs; lipid-soluble sedatives linger in older adults."],
            ["<strong>Metabolism</strong>", "Mostly in the liver, by enzymes (the cytochrome P450 family) that convert the drug into water-soluble metabolites for excretion; some metabolites are active (codeine → morphine) or toxic (paracetamol in overdose).", "Enzyme <strong>inducers</strong> (rifampicin, carbamazepine, phenytoin, phenobarbitone) speed the breakdown of other drugs so they fail; enzyme <strong>inhibitors</strong> (fluconazole, ketoconazole, erythromycin, clarithromycin, metronidazole, cimetidine, grapefruit juice) slow it so other drugs accumulate; genetic variation (codeine works poorly in slow metabolisers and dangerously in ultra-rapid ones); liver disease; age.", "Ask what else the patient takes before any new drug is started; counsel the woman on the pill who starts rifampicin; watch the INR when an antifungal or antibiotic is added to warfarin."],
            ["<strong>Excretion</strong>", "Mostly by the kidney, unchanged or as metabolites; also bile and faeces, lungs (anaesthetic gases), breast milk, sweat.", "Reduced kidney function (age, chronic kidney disease, dehydration, shock) — the drug stays longer and accumulates; urine pH; dialysis removes some drugs.", "Doses of gentamicin, digoxin, metformin, enoxaparin, many antibiotics and morphine must be reduced or the interval lengthened when the estimated glomerular filtration rate falls; weigh the patient and know their creatinine."],
          ],
        },
        {
          type: "text",
          heading: "Half-life, steady state, loading doses and dosing intervals",
          paragraphs: [
            "The <strong>half-life</strong> of a drug is the time it takes for its plasma concentration to fall by half. It decides the timetable: a drug with a half-life of 8 hours is given about three times a day, one with a half-life of 24 hours once a day, and that is why one of a patient's tablets is taken once daily and another three times daily. On regular dosing the level climbs until the amount given each day equals the amount eliminated — the <strong>steady state</strong> — which takes <strong>about four to five half-lives</strong>; a drug with an 8-hour half-life therefore reaches steady state in roughly 32–40 hours, and it takes the same four to five half-lives for the drug to wash out after it is stopped. A drug with a long half-life (amiodarone, digoxin, phenytoin, levothyroxine) would take days or weeks to reach a useful level, so a larger <strong>loading dose</strong> is given first to fill the body quickly, followed by the smaller <strong>maintenance dose</strong> that replaces what is eliminated each day. Loading doses are used for digoxin, phenytoin, magnesium sulphate, quinine, aminophylline and many antibiotics in sepsis.",
            "A drug with a <strong>narrow therapeutic index</strong> has a small gap between the dose that works and the dose that harms — digoxin, phenytoin, lithium, gentamicin, warfarin, theophylline, aminophylline. These are the drugs that need <strong>therapeutic drug monitoring</strong> by blood level, careful attention to kidney function and interactions, and an independent second check. Most drugs have a wide margin and are never measured. When a level is requested, the timing of the sample is everything: a <strong>trough</strong> level is taken <strong>immediately before the next dose</strong> (the lowest point, used for gentamicin and vancomycin to confirm the drug is clearing), a <strong>peak</strong> level at a defined time after the dose, and digoxin at least six hours after a dose. A level taken at the wrong time is worse than no level, because it will be acted on.",
          ],
        },
        {
          type: "text",
          heading: "Pharmacodynamics — receptors, agonists, antagonists and dose–response",
          paragraphs: [
            "Most drugs act by binding to a <strong>receptor</strong>, an enzyme, an ion channel or a transporter. An <strong>agonist</strong> binds and activates the receptor to produce the natural effect (salbutamol at beta-2 receptors opens the airways; morphine at opioid receptors relieves pain); an <strong>antagonist</strong> binds and blocks it so the natural messenger cannot act (propranolol blocks beta receptors and slows the heart; naloxone displaces morphine from opioid receptors and reverses respiratory depression; atropine blocks acetylcholine). A <strong>partial agonist</strong> (buprenorphine) activates the receptor less than fully. The <strong>dose–response curve</strong> explains why increasing a dose beyond a point adds toxicity without adding benefit — a ceiling effect — and why morphine, which has no ceiling for pain relief, is titrated to effect while paracetamol is not.",
            "<strong>Tolerance</strong> is the need for a higher dose to achieve the same effect after repeated use — expected with long-term morphine and benzodiazepines and not a sign of addiction. <strong>Physical dependence</strong> means withdrawal symptoms if the drug is stopped suddenly, which is why opioids, benzodiazepines, corticosteroids, beta-blockers and antiepileptics are tapered rather than stopped. <strong>Addiction</strong> is compulsive use despite harm, and it is rare when opioids are used for genuine pain. Confusing these three words leads nurses to under-treat pain and families to fear morphine.",
          ],
        },
        {
          type: "table",
          heading: "Adverse drug reactions and interactions — the vocabulary examiners test",
          columns: ["Term", "Meaning", "Examples"],
          rows: [
            ["<strong>Side effect</strong>", "A predictable, usually mild, unwanted effect at normal doses, arising from the drug's own pharmacology.", "Drowsiness with chlorpheniramine, fine tremor with salbutamol, nausea with oral iron, dry cough with an ACE inhibitor."],
            ["<strong>Type A adverse reaction</strong> ('augmented')", "Dose-related and predictable from the pharmacology; common; usually managed by lowering the dose.", "Bleeding on warfarin, hypoglycaemia on insulin or glibenclamide, bradycardia on a beta-blocker, respiratory depression on morphine, digoxin toxicity."],
            ["<strong>Type B adverse reaction</strong> ('bizarre')", "Not dose-related, unpredictable, uncommon and often serious — immunological or genetic.", "Penicillin anaphylaxis, Stevens–Johnson syndrome with sulphonamides or nevirapine, agranulocytosis with carbimazole or clozapine, haemolysis with primaquine or dapsone in G6PD deficiency, malignant hyperthermia."],
            ["<strong>Allergy versus intolerance</strong>", "Allergy is an immune reaction (rash, urticaria, swelling of lips or face, wheeze, anaphylaxis) and bars the drug and its relatives for life; intolerance is an unpleasant but non-immune effect (nausea, headache) that does not forbid future use.", "A patient who calls nausea on amoxicillin an 'allergy' may be denied penicillins for life and given broader, costlier antibiotics; record exactly what happened, when, and how it was treated."],
            ["<strong>Pharmacokinetic interaction</strong>", "One drug changes the absorption, metabolism or excretion of another.", "Antacid, iron or calcium taken with ciprofloxacin or tetracycline binds it in the gut; rifampicin induces the enzymes that clear the combined pill, dolutegravir and warfarin; fluconazole or metronidazole inhibits the enzymes that clear warfarin and the patient bleeds; NSAIDs reduce the excretion of lithium."],
            ["<strong>Pharmacodynamic interaction</strong>", "Two drugs act on the same system, adding to or opposing each other.", "Two drugs that prolong the QT interval (ondansetron, haloperidol, erythromycin, quinine) risk a fatal arrhythmia; two serotonergic drugs (tramadol plus fluoxetine) cause serotonin syndrome; an ACE inhibitor plus spironolactone plus a potassium supplement causes hyperkalaemia; NSAIDs oppose antihypertensives; a beta-blocker masks the warning signs of hypoglycaemia."],
            ["<strong>Drug–food, drug–alcohol and drug–herb interactions</strong>", "Diet, alcohol and herbal preparations behave like drugs.", "Vitamin K-rich leafy vegetables reduce the effect of warfarin; alcohol with metronidazole causes flushing, vomiting and palpitations (a disulfiram-like reaction); grapefruit juice raises levels of some calcium-channel blockers and statins; herbal preparations lower antiretroviral and antiepileptic levels and increase bleeding with anticoagulants."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-DRG-1020.svg",
          alt: "Drug interactions — the liver either speeds up or slows down: enzyme inducers such as rifampicin, carbamazepine, phenytoin and phenobarbitone clear the other drug so it fails over days to weeks; enzyme inhibitors such as erythromycin, clarithromycin, fluconazole, ketoconazole, metronidazole and cimetidine make the other drug pile up within days; and the interaction that causes pregnancies in Ghana — rifampicin and the combined pill.",
          caption: "Most dangerous interactions are one drug changing how fast the liver clears another. The woman on the combined pill who starts rifampicin for tuberculosis needs an additional method of contraception and to be told why; the stable patient on warfarin who is given fluconazole will bleed unless the INR is checked.",
        },
        {
          type: "diagram",
          src: "/diagrams/NG-DRG-1024.svg",
          alt: "The same dose is not the same dose in every patient — the older patient whose kidneys clear more slowly and whose brain is more sensitive to sedatives, the child who is dosed by today's weight and is not a small adult, the pregnant or breastfeeding woman who must be asked before prescribing and dispensing, and the patient with kidney or liver failure in whom the drug stays longer.",
          caption: "Age, pregnancy, liver and kidney all change what the body does to a drug. Start low, go slow and review in the older adult; weigh the child today; ask every woman of childbearing age; and when the kidney or the liver fails, reduce the dose or lengthen the interval.",
        },
        {
          type: "text",
          heading: "Who governs medicines in Ghana",
          paragraphs: [
            "Four bodies with four different jobs are regularly confused in examinations. The <strong>Food and Drugs Authority (FDA)</strong>, established under the Public Health Act 2012 (Act 851), <strong>registers every medicine, herbal product, vaccine and medical device before it may be sold</strong>, inspects manufacturers and importers, recalls unsafe or substandard batches, and runs the <strong>national pharmacovigilance centre</strong> that receives adverse drug reaction reports. The <strong>Pharmacy Council</strong>, under the Health Professions Regulatory Bodies Act 2013 (Act 857), <strong>registers the people and the premises</strong> — pharmacists, pharmacy technicians, pharmacies and licensed over-the-counter medicine sellers — and decides who may dispense and where. The <strong>Nursing and Midwifery Council</strong> registers nurses and midwives and defines their scope of practice, including what a nurse may do with medicines. The <strong>Narcotics Control Commission</strong> oversees the import, custody and use of controlled (narcotic and psychotropic) medicines. A medicine bought from a street hawker has passed through none of these systems, which is why it may contain the wrong drug, the wrong dose or nothing at all.",
            "Two lists shape what is actually available. The <strong>Essential Medicines List</strong>, published by the Ministry of Health alongside the <strong>Standard Treatment Guidelines</strong>, sets out the medicines that should always be available at each level of care — CHPS compound, health centre, district, regional and teaching hospital — chosen for public-health need, evidence of efficacy and safety, and cost. The <strong>NHIS Medicines List</strong> sets out what the National Health Insurance Scheme will pay for and at what price; a medicine can be essential and still not be reimbursed, which is why an insured patient is sometimes asked to pay. <strong>Rational use of medicines</strong> means the right medicine for the right patient at the right dose for the right duration at the lowest cost — not the newest, the strongest or the one the patient demands — and it is the foundation of antibiotic stewardship.",
            "In Ghana medicines are <strong>prescribed</strong> by medical officers, physician assistants and, within protocols, by midwives and community health nurses treating defined conditions under the Standard Treatment Guidelines at CHPS compounds and health centres. A registered nurse who <strong>administers</strong> a medicine is professionally accountable for that act: 'the doctor wrote it' is not a defence. If a prescribed dose appears ten times too high, the nurse <strong>withholds the dose and queries it directly with the prescriber</strong>, escalating if the answer does not resolve the concern, and may neither give it nor quietly alter it. Knowing the pharmacology is what gives a nurse the confidence to make that call.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PKD-1223.svg",
          alt: "How medicines are governed in Ghana — the Food and Drugs Authority registers the product, inspects, recalls and receives adverse reaction reports; the Pharmacy Council registers the people and the premises; the Essential Medicines List sets out what should always be available at each level of care; the NHIS Medicines List sets out what the insurance scheme pays for; and generic prescribing is policy.",
          caption: "Four bodies, four jobs: the FDA governs the product, the Pharmacy Council governs the people and premises, the Essential Medicines List governs availability and the NHIS list governs reimbursement. A medicine can be essential and still not be reimbursed.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "The principles examiners dress up as drug questions",
          body: "Why is oral morphine a bigger dose than intravenous morphine? First pass. Why is glyceryl trinitrate given under the tongue? First pass. Why is the intramuscular route unreliable in shock? Poor perfusion slows absorption. Why does a malnourished patient become toxic on a normal dose of phenytoin? Low albumin, more free drug. Why does the woman on the pill who starts rifampicin become pregnant? Enzyme induction. Why does the stable warfarin patient given fluconazole bleed? Enzyme inhibition. Why a loading dose? Long half-life. When is a trough level taken? Immediately before the next dose. Why does the older adult need a smaller dose? Slower renal clearance and a more sensitive brain. Name the principle and the answer follows.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Reading a prescription with pharmacology in mind",
          body: "Before giving any medicine ask yourself five quick questions: What is this drug for in this patient (right reason)? Is the dose sensible for this weight, age, kidney and liver? Does the route and timing fit the drug (empty stomach, with fat, before food, morning for steroids and furosemide, night for statins)? What else is on the chart or in the patient's bag at home that interacts with it? What will I look for afterwards to know it worked or harmed (right response)? Those questions are the whole of this lesson applied in thirty seconds.",
        },
      ],
      keyPoints: [
        "Pharmacokinetics is what the body does to the drug (absorption, distribution, metabolism, excretion); pharmacodynamics is what the drug does to the body (receptors, agonists, antagonists, dose–response). Learn the system and the drug list follows.",
        "First-pass metabolism explains why oral doses of morphine and glyceryl trinitrate are larger than parenteral doses and why the sublingual, rectal and intravenous routes bypass the liver; shock makes intramuscular absorption unreliable; low albumin leaves more free drug and causes toxicity on normal doses.",
        "Half-life sets the dosing interval; steady state takes four to five half-lives; drugs with long half-lives are given a loading dose; narrow-therapeutic-index drugs (digoxin, phenytoin, lithium, gentamicin, warfarin, theophylline) need therapeutic drug monitoring, with trough levels taken immediately before the next dose.",
        "Type A reactions are dose-related and predictable (bleeding on warfarin, hypoglycaemia on insulin); type B are unpredictable and often immune or genetic (penicillin anaphylaxis, G6PD haemolysis, Stevens–Johnson syndrome); allergy must be recorded accurately and distinguished from intolerance.",
        "Enzyme inducers (rifampicin, carbamazepine, phenytoin, phenobarbitone) make other drugs fail; inhibitors (fluconazole, metronidazole, macrolides) make them accumulate; antacids, iron and calcium bind tetracyclines and ciprofloxacin; alcohol with metronidazole causes a disulfiram-like reaction; herbal preparations interact like drugs.",
        "The FDA registers products and runs pharmacovigilance; the Pharmacy Council registers people and premises; the Essential Medicines List sets what should be available; the NHIS Medicines List sets what is reimbursed; generic prescribing is national policy and generics are bioequivalent.",
        "The nurse who administers a medicine is accountable for it: a dose that seems ten times too high is withheld and queried, never given on trust and never quietly altered; nurses and midwives prescribe only within the Standard Treatment Guidelines and facility protocols that define their scope.",
      ],
      quiz: {
        questionIds: ["NG-MOD-PHARM-001"],
        categories: ["pharmacology-parenteral"],
        keywords: ["pharmacokinetic","pharmacodynamic","first pass","bioavailab","half life","steady state","loading dose","protein bound","protein binding","low albumin","enzyme induc","enzyme inhib","therapeutic index","therapeutic drug monitoring","trough","drug level","agonist","antagonist","receptor","tolerance","dependence","type b","type a and","adverse drug reaction","adverse reaction","side effect","intolerance","interaction","generic","brand name","brand","essential medicines","essential lists","food and drugs authority","rational use","sublingual","under the tongue","metabolis","excret","absorption","dosing interval","once daily","three times daily","qt","serotonin","antacid","ciprofloxacin","drug name","cannot read the name","glyceryl trinitrate","intramuscular absorption","intramuscular route unreliable","oral dose of morphine","intravenous dose of a drug","why one of his tablets","lower dose than a younger","same weight","malnourished patient with a low","blood levels measured","digoxin and phenytoin","distinguishing allergy","calls it an allergy","allergy from intolerance","registering a medicine","before it may be sold","essential medicines list","cost and adherence","tablets only every other day","insurance and essential","still pay","medicines list","kidney function","renal impairment and dosing","dose adjustment in renal","excreted unchanged","liver disease","hepatic impairment","first dose hypotension","why is the oral dose","why is the intravenous dose","why is a loading dose","what is meant by the half","receptor antagonist"]
      },
    },
    {
      slug: "safe-medication-administration-errors-storage-and-controlled-drugs",
      title: "Safe medication administration — the rights, errors, storage and controlled drugs",
      minutes: 18,
      objectives: [
        "Apply the rights of medication administration and the three checks, verify identity with two identifiers and the allergy status, read a prescription critically, and handle verbal orders, illegible or unusual prescriptions, interruptions and look-alike sound-alike medicines safely.",
        "Recognise where medication errors actually happen, act correctly in the first minutes after an error or near miss — patient first, then prescriber, then record and report, then disclose — and explain just culture.",
        "Take a medication history and reconcile medicines on admission, teach a patient a new regimen and confirm understanding with teach-back, and respond to a patient who refuses a dose or cannot afford or read their medicines.",
        "Store medicines correctly in Ghana's climate including the cold chain for vaccines, insulin and oxytocics, rotate stock by expiry, recognise and report substandard and falsified medicines, dispose of expired medicines, and keep the controlled-drug chain unbroken.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The rights — a thinking checklist, not a ritual",
          paragraphs: [
            "The classic five rights — <strong>right patient, right drug, right dose, right route, right time</strong> — have grown to ten because errors kept slipping past them: <strong>right documentation</strong> (sign immediately after giving, never before), <strong>right reason</strong> (know why this patient has this drug — a nurse who does not know why she is giving a tablet cannot notice that it is wrong), <strong>right response</strong> (check that the analgesic relieved the pain, that the antihypertensive did not drop the pressure), <strong>right education</strong> (tell the patient what it is and what to expect) and the <strong>right to refuse</strong> (a competent adult may decline; the nurse explores why, explains, records and informs the prescriber — she does not hide the tablet in food). The rights are applied through <strong>three checks</strong>: when the medicine is taken from the shelf, when the dose is prepared against the prescription, and at the bedside before it is given.",
            "<strong>Right patient</strong> means <strong>two identifiers</strong> — ask the patient to state their full name and date of birth (or check the folder number) and compare with the identity band and the chart, never 'Are you Mr Mensah?', never the bed number, never relying on memory of a face on a busy ward with two patients of the same surname. <strong>Right drug</strong> means reading the <strong>generic name</strong>, strength and form on the container against the prescription every time, and discarding any container whose label is torn, faded or illegible rather than guessing — a partly torn label is a drug you cannot identify. <strong>Allergy status</strong> is confirmed from the patient and the chart before every first dose: a patient who reports a rash and lip swelling after a previous injection of penicillin does not receive the intravenous antibiotic until the prescriber has been told, whatever the chart says.",
            "The nurse who <strong>prepares</strong> a dose <strong>administers</strong> it and <strong>signs</strong> for it. A syringe drawn up by a colleague who has gone off duty is discarded and a fresh dose prepared, because nobody can verify the contents of a syringe they did not draw up. Medicines are never left at the bedside 'to take later' unless self-administration has been formally agreed, and a dose that is not given — refused, nil by mouth, patient away, withheld because the pulse is 48 — is <strong>documented with the reason</strong> and reported, never signed as given.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-DRC-2423.svg",
          alt: "The five rights of medication administration plus documentation, reason and response, the patient's right to refuse, and the correct order of actions after an error.",
          caption: "Patient, drug, dose, route and time — then documentation, reason and response. The patient may refuse; the nurse explores, explains, records and informs. After an error the order is always the patient first, then the prescriber, then the record and the report.",
        },
        {
          type: "table",
          heading: "Reading a prescription — what must be there and what must make you stop",
          columns: ["Element", "A safe prescription has…", "Stop and query when…"],
          rows: [
            ["Patient", "Full name, folder number, date of birth, ward; weight for every child and for weight-based adult drugs; allergy status recorded.", "No weight on a paediatric chart; allergy box blank; two patients with the same name on the ward."],
            ["Drug", "Generic name written in full, in capitals, legibly.", "You cannot read the name — never guess from the first letters or the dose; telephone the prescriber. Abbreviations or brand names only."],
            ["Dose", "Figures with units written in full — <strong>micrograms</strong>, <strong>units</strong>, <strong>international units</strong> (never μg, mcg, U or IU, which are misread as mg and 0); a <strong>leading zero</strong> before a decimal (0.5 mg) and <strong>no trailing zero</strong> (5 mg, never 5.0 mg).", "'.25 mg' or '5.0 mg' — a missed point gives a tenfold overdose; 'insulin 10 U' can be read as 100; a dose far outside the usual range for this weight or age (eight tablets of an adult preparation for a child is a calculation error, not a prescription)."],
            ["Route and form", "Oral, sublingual, rectal, subcutaneous, intramuscular, intravenous, topical, inhaled — written in full; the form (tablet, suspension, modified-release).", "A route the preparation cannot be given by (an oral suspension 'IV'; an intramuscular-only preparation 'IV')."],
            ["Frequency and timing", "Clear frequency with times, or 'once only' or 'as required' with the maximum dose in 24 hours and the indication.", "'As required' with no maximum or indication; a once-only dose written on the regular chart."],
            ["Prescriber", "Signature, name, date; stop or review date for antibiotics, anticoagulants and steroids.", "Unsigned or undated orders; a verbal order written up by nobody."],
          ],
        },
        {
          type: "text",
          heading: "Verbal orders, interruptions and look-alike sound-alike medicines",
          paragraphs: [
            "A <strong>verbal or telephone order</strong> is accepted only in a genuine emergency when the prescriber cannot write it. The nurse <strong>writes the order down as it is given, reads it back</strong> word for word including the spelling of the drug, dose, route and frequency, has a <strong>second nurse listen</strong> where possible, records it as a verbal order with the prescriber's name, the time and both nurses' signatures, and ensures the prescriber <strong>signs it within the time the facility policy sets</strong> (usually within 24 hours). Telephone orders for controlled drugs, chemotherapy or a drug the nurse does not recognise are refused politely and firmly. Where no doctor is present — a CHPS compound at night — the midwife or community health nurse works from the Standard Treatment Guidelines and standing orders, not from a telephone conversation that nobody can later verify.",
            "<strong>Interruption</strong> is the commonest cause of a dose given to the wrong patient or given twice: a nurse who answers an unrelated question halfway through preparing a dose returns to the task at the wrong step. Do not answer unrelated questions during a medicine round, wear the 'do not disturb' tabard where the ward uses one, prepare one patient's medicines at a time, and if interrupted go back to the beginning of the check. <strong>Look-alike sound-alike (LASA)</strong> medicines — chlorpromazine and chlorpheniramine, dopamine and dobutamine, hydralazine and hydroxyzine, oxytocin and ergometrine ampoules, the different strengths of adrenaline, insulins with similar names, vincristine and vinblastine — are <strong>stored apart</strong>, labelled with 'tall man' lettering (chlorproMAZINE / chlorphenIRAMINE), and read twice. A pharmacy that finds nurses repeatedly confusing two similar-looking products changes the storage and the labelling; it does not simply tell everyone to be more careful.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PKD-1227.svg",
          alt: "Where medication errors actually happen — names that look or sound alike, a decimal point in the wrong place, interruption in the middle of a round, and a generic and a brand of the same drug; what works — reading the generic name, a zero before the decimal, a second check for high-risk drugs and asking rather than guessing; the drugs that deserve a second pair of eyes — insulin, heparin and anticoagulants, concentrated potassium, opioids, chemotherapy and any calculated paediatric dose; and what to do if you think a dose is wrong — withhold and ask.",
          caption: "Errors are almost never because the nurse did not care and nearly always because the system allowed it. The four traps are predictable, so the defences can be built in advance: generic names, leading zeros, no interruptions and an independent second check for the drugs that kill when the error is small.",
        },
        {
          type: "list",
          heading: "The first minutes after a medication error — in this order",
          style: "steps",
          items: [
            "<strong>Check and treat the patient.</strong> Take observations, assess for harm, and start whatever the specific error requires — glucose for an insulin error, naloxone and airway support for an opioid error, ECG monitoring for a potassium error. The patient comes before the paperwork and before your own fear.",
            "<strong>Tell the prescriber and the nurse in charge straight away.</strong> Speed limits the harm: an antidote or a change to the next dose may be needed within minutes. Concealment is the only part of an error that ends careers.",
            "<strong>Record what happened factually in the notes</strong> — the drug, dose, route, time, what was intended, what was given, the patient's condition and the actions taken — and <strong>complete the incident form</strong>. The incident form is how the ward learns without another patient paying; it is not a confession.",
            "<strong>Be open with the patient and family.</strong> After the error has been managed and reported, the patient who asks what happened is told honestly and simply what occurred, what was done about it and what will happen next, with an apology. Disclosure is a professional duty and it preserves trust.",
            "<strong>Report near misses too.</strong> A wrongly prepared dose caught before it reached the patient is reported through the same system, because the trap that nearly caught you will catch the next nurse. A ward where reports rise and harm falls is a safe ward.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MAN-0873.svg",
          alt: "Two ways of responding when something goes wrong — blame culture asks who did this, disciplines the nurse, near misses stop being reported and the system is left as it was; just culture asks what allowed this, tells and treats the patient first, reports the incident, looks for look-alike labels, staffing, interruptions and unclear prescriptions, changes the system and still deals individually with reckless or deliberate acts.",
          caption: "The same drug error handled two ways produces opposite results a year later. Just culture is not the absence of accountability: it separates honest error, which the system must learn from, from recklessness, which is still dealt with individually.",
        },
        {
          type: "text",
          heading: "Medication reconciliation, teaching and the patient who refuses",
          paragraphs: [
            "On admission the nurse takes a <strong>full medication history</strong> — every prescribed medicine, every medicine bought from a pharmacy, chemical seller or hawker, every herbal or traditional preparation, enema or 'tonic', every inhaler, cream, eye drop and injection, with doses, times and what was actually taken rather than what was prescribed — and <strong>reconciles</strong> it against the new chart so that nothing is accidentally stopped, duplicated or combined dangerously. An older man who 'also takes herbal medicine' has given you essential information, not an admission to be scolded. The same reconciliation happens again at discharge: the patient leaves with one list, not three.",
            "<strong>Teaching</strong> a medicine means the name and purpose, how much and when, with or without food, what to expect, what to report, what to do about a missed dose, how to store it and when it will be reviewed. Understanding is confirmed by <strong>teach-back</strong> — 'Show me how you will take these tomorrow' — not by 'Do you understand?', which has only one socially acceptable answer. A farmer who cannot read and goes home on four medicines with different timings needs a <strong>pictorial schedule</strong> (sun, midday, moon), colour-coded containers, the first doses demonstrated, a relative who can read taught alongside him, and a follow-up date. A patient who takes his blood-pressure tablets every other day because of cost has a <strong>cost problem</strong>, not a motivation problem — the remedy is a cheaper generic, the NHIS list or a social worker, not a lecture.",
            "A patient who <strong>refuses</strong> her evening antihypertensive because it makes her dizzy when she stands is describing a real side effect with a real solution. The nurse does not override her, does not simply record 'refused' and walk away, and does not abandon the drug: she explores the reason, checks a lying and standing blood pressure, reassures, documents the refusal and the reason, and reports it so that the prescriber can change the timing or the drug. Dizziness on standing in an older person is a fall waiting to happen, so the refusal was useful information.",
          ],
        },
        {
          type: "table",
          heading: "Storage — Ghana's climate, the cold chain and the shelf",
          columns: ["Situation", "Standard", "What goes wrong and what to do"],
          rows: [
            ["Room-temperature medicines in the tropics", "Below 25–30 °C, dry, out of direct sunlight, in the original container with the lid closed; dispersible and effervescent tablets protected from humidity; glyceryl trinitrate tablets in their dark glass bottle, discarded 8 weeks after opening.", "Heat and humidity degrade antibiotics, hormones and dispersible tablets: tablets that have changed colour, crumbled or stuck together are substandard even if the expiry date has not passed — quarantine and report, do not dispense."],
            ["Cold chain (2–8 °C)", "Vaccines, insulin, oxytocin, ergometrine (also protected from light), some antibiotics and anti-D; fridge thermometer read and recorded <strong>twice daily</strong>; items in the body of the fridge, never the door; ice packs conditioned until they sweat before packing a carrier; no food in the vaccine fridge.", "A fridge at <strong>11 °C</strong>: move the contents to a working fridge, quarantine them, report the breach and let pharmacy or the EPI focal person decide. A fridge at <strong>minus 2 °C</strong> is as serious as one that is too warm — freezing permanently destroys pentavalent, hepatitis B, HPV, PCV, rotavirus, tetanus and IPV vaccines and insulin, and the vial looks normal afterwards. A fridge found switched off overnight: quarantine the stock, label 'do not use', seek guidance."],
            ["Vaccine vial monitor", "The inner square lighter than the outer circle means the vial may be used; the inner square the same colour as or darker than the circle means <strong>discard whatever the expiry date says</strong>.", "The monitor records cumulative heat exposure; the expiry date does not. Read it before every dose."],
            ["Expiry and stock rotation", "First expiry, first out (FEFO): the stock that expires soonest is issued first; a monthly expiry check of every shelf and emergency box; short-dated items flagged.", "A medicine that expired last month still on the shelf is removed, quarantined and returned to pharmacy for documented disposal — never given 'because it is only a month' and never thrown in the ward bin or down the drain."],
            ["Opened containers", "Date and sign multidose vials when opened and discard within the manufacturer's in-use period (often 28 days); insulin in use at room temperature up to 28 days; reconstituted antibiotics used within the stated time; eye drops discarded 28 days after opening.", "A multidose vial opened eight days ago with no date recorded is discarded — its safe period cannot be confirmed."],
            ["Medicines in the home", "Cool, dry, dark place; original labelled containers; out of reach and sight of children, preferably locked; insulin without a refrigerator kept in a damp clay pot in the shade, never frozen.", "Paracetamol syrup, iron tablets and chloroquine are common childhood poisonings in Ghana — teach every parent about locked storage."],
          ],
        },
        {
          type: "text",
          heading: "Substandard and falsified medicines",
          paragraphs: [
            "A <strong>substandard</strong> medicine is a genuine product that fails to meet its quality standard — made badly, or degraded by heat, humidity or age. A <strong>falsified</strong> (counterfeit) medicine deliberately misrepresents its identity, composition or source and may contain no active ingredient, the wrong one, a toxic one or a fraction of the dose. Antimalarials and antibiotics are the most falsified medicines in West Africa, and a batch of an antimalarial that 'does not seem to work' in several patients is a quality signal to be <strong>reported to the FDA</strong>, not shrugged off as resistance. Suspect a falsified product when the packaging has spelling errors or poor printing, there is <strong>no FDA registration number</strong>, batch number or expiry date, the tablets look, smell or taste different from usual, the blister seals are broken, or the price is far below the market. The FDA recalls and publicises; the nurse quarantines the product, keeps the packaging, documents the batch number and reports. The same reasoning is the basis for discouraging patients from buying medicines from street hawkers: the product has passed through no regulated chain, has been carried in the sun, and nobody is accountable for it.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MDS-1672.svg",
          alt: "Controlled drugs — why the rules are shaped the way they are: a locked cupboard with one key holder per shift, a register with a running balance, two nurses checking and both signing, a count at every shift change, any waste witnessed and recorded; when the count is wrong, do not adjust the register, do not wait and do not replace the dose — report the discrepancy at once in writing; and the fear that harms patients — morphine titrated against pain in the dying does not shorten life.",
          caption: "Every controlled-drug rule exists because the drug is both genuinely needed and genuinely diverted. The balance in the register must always equal the stock on the shelf, and a discrepancy is reported before the nurse leaves the ward — delay is what turns an error into suspicion.",
        },
        {
          type: "list",
          heading: "The controlled-drug chain — morphine, pethidine, fentanyl, ketamine, diazepam and the other scheduled medicines",
          items: [
            "<strong>Custody</strong>: a locked cupboard (double-locked where required) used for nothing else, with the key held by the nurse in charge or a designated registered nurse for the shift and never left in the lock or in a pocket that goes home.",
            "<strong>The register</strong>: a bound book with a page per drug and strength, a running balance, and an entry for every receipt and every dose — date, time, patient, dose given, dose wasted, balance remaining, two signatures. Entries are in ink, never erased; a mistake is bracketed, initialled and corrected on the next line.",
            "<strong>Two nurses check</strong> the prescription, the stock, the dose drawn up and the patient, both witness the administration and both sign; a learner may be the second checker only under the facility's policy and always with a registered nurse.",
            "<strong>Counting</strong>: the stock is counted against the register balance at every shift change by the outgoing and incoming key holders; a mismatch is reported at once, in writing, to the nurse in charge and pharmacy — the register is never 'adjusted' to match the shelf and the shortfall is never quietly replaced.",
            "<strong>Wasting</strong>: when only part of an ampoule is needed (pethidine 75 mg from a 100 mg in 2 mL ampoule; morphine 7.5 mg from 10 mg), the remainder is discarded in the presence of the second nurse and the waste recorded with both signatures; a prepared controlled drug that the patient then refuses is likewise witnessed, discarded and recorded.",
            "<strong>Returns and expiry</strong>: expired or unwanted controlled drugs are returned to pharmacy against a signed record, never destroyed on the ward alone.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Five situations where the right action is to stop",
          body: "A label you cannot fully read. A prescription you cannot read or that seems far outside the usual dose. A syringe you did not draw up. A verbal order for a controlled drug or a drug you do not know. An interruption in the middle of preparing a dose — go back to the start. In each case the medicine waits; the patient is safer for the delay than for the guess.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "What the examiner wants after an error",
          body: "The first action after giving the wrong drug or a double dose is to assess and treat the patient, then inform the prescriber, then document and complete the incident form, then tell the patient. The approach that most reduces repeated errors on a ward is a just culture that looks for the system causes — look-alike packaging, interruptions, unclear prescriptions, staffing — not disciplining the individual. Near misses are reported. Decimal points: 0.5 mg not .5 mg; 5 mg not 5.0 mg; 'units' and 'micrograms' in full.",
        },
      ],
      keyPoints: [
        "The ten rights — patient, drug, dose, route, time, documentation, reason, response, education and the right to refuse — are applied through three checks and two patient identifiers; the nurse who prepares a dose gives it and signs for it immediately afterwards, and a dose not given is documented with the reason.",
        "A prescription needs the generic name in full, the dose with units written out ('micrograms', 'units'), a leading zero and no trailing zero, the route, frequency, prescriber's signature and the patient's weight for children; anything illegible or far outside the usual dose is withheld and queried, never guessed.",
        "Verbal orders are for genuine emergencies only — write, read back, second listener, prescriber signs within policy time; interruptions cause errors so prepare one patient's medicines at a time and restart the check if disturbed; look-alike sound-alike medicines are stored apart and labelled with tall-man lettering.",
        "After an error: treat the patient, tell the prescriber, record and complete the incident form, disclose to the patient — in that order — and report near misses too; just culture asks what allowed the error and fixes the system while still holding reckless acts to account.",
        "Reconcile every medicine on admission and discharge including herbal preparations and medicines bought outside, teach with teach-back, give the non-reader a pictorial schedule, treat cost as a cost problem, and treat a refusal as information to explore, document and report.",
        "The cold chain is 2–8 °C with twice-daily readings and nothing in the door; 11 °C and minus 2 °C are both breaches — quarantine and report; read the vaccine vial monitor before every dose; rotate stock first-expiry-first-out; a tablet that has changed colour or crumbled is substandard regardless of date; falsified medicines are reported to the FDA with the batch number.",
        "Controlled drugs: locked cupboard and one key holder, a register with a running balance and two signatures for every dose, a count at every shift change, witnessed and recorded wasting of part-ampoules and refused doses, and any discrepancy reported in writing before leaving the ward — never adjusted or replaced.",
      ],
      quiz: {
        questionIds: ["NG-MOD-PHARM-002"],
        categories: ["leadership-delegation"],
        keywords: ["rights of medication","the rights of","wristband","medication error","drug error","wrong drug","wrong patient","double the prescribed","near miss","incident report","just culture","blame","medication error disclosure","telling the patient about an error","drug round","medicine round","interruptions during","interrupted three times","look alike","sound alike","similar names","verbal order","telephones the ward","over the telephone","by telephone","trailing zero","decimal point",".25 mg","5.0 mg","abbreviation","cannot read","legib","ten times","far higher","seems far","second check","independent second","double check","high risk drug","high alert","controlled drug","register balance","controlled drugs register","two nurses","remainder","discrepancy","refuses it","medication history","reconciliation","usual medicines","teach back","adherence","every other day","expired","expiry","stock rotation","first expiry","cold chain","refrigerator","11°c","minus 2","freez","vaccine vial monitor","tropics","storage","hawker","falsified","counterfeit","substandard","crumbling","changed colour","batch","multidose","multi dose","prepared and drawn up","drawn up earlier","colleague who has gone","label on the container","partly torn","allergy verification","documenting an allergy","allergy history","rash as a child","allergic to penicillin","drug storage","medicine storage","storage of medicines","safe medication","medication safety","medication administration","drug administration","checking a prescription","prescription specifies","nurse's authority","stock management","issue ahead","expired medicines","units be written","insulin 10 u","written in full","medicines reconciliation","medication reconciliation","patient medicine education","confirm that a patient understands","understands his discharge","discharge medicines","four medicines","refuses her evening","dizzy when she stands","prescription legib","action after a medication error","another patient's","reporting a near miss","before it reaches the patient","wrongly prepared","wasting a controlled","witness"]
      },
    },
  ],
};
