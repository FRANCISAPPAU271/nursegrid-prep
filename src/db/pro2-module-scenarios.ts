import type { AuthoredQuestion } from "./authored-bank";

export const PRO2_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-PRO2-001",
    categorySlug: "leadership-delegation",
    stem: "A multidisciplinary resuscitation team is managing a sudden pulseless ventricular fibrillation arrest in an adult client. Which leadership style is most effective and appropriate for the team leader during this acute crisis resuscitation?",
    choices: [
      {
        id: "a",
        text: "Democratic leadership, with the team voting on each shock energy before it is delivered",
      },
      {
        id: "b",
        text: "Laissez-faire leadership, with each member acting on their own judgement and reporting later",
      },
      {
        id: "c",
        text: "Transformational leadership, with the leader motivating the team by long-term vision",
      },
      {
        id: "d",
        text: "Autocratic leadership, with brief orders, named roles and closed-loop communication",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "In acute life-or-death resuscitations where seconds dictate survival, an autocratic (directive) leadership style is clinically indicated. The code leader must maintain command, make rapid high-stakes decisions, assign clear roles (chest compressions, airway, defibrillator, medication recorder), and demand closed-loop communication. Laissez-faire leads to chaos and delayed defibrillation; democratic consensus voting wastes critical seconds when immediate CPR is required; transformational lecturing is completely inappropriate during an emergency arrest. Why the other options fail: option a removes the leader in an arrest, when seconds decide the outcome. Option b puts a vote where a decision is needed. Option c motivates over the long term, which is not what a pulseless patient needs in the next thirty seconds.",
    strategy: "Leadership styles: Use autocratic (directive) leadership in immediate life-threatening crises; use democratic/transformational leadership for policy creation, change management, and unit committees.",
    difficulty: "easy",
    tags: ["leadership", "management", "leadership-styles", "code-blue", "crisis-management"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-002",
    categorySlug: "leadership-delegation",
    stem: "At the start of a night shift, the charge nurse of a 30-bed surgical unit learns that two scheduled nurses called in sick, leaving only two registered nurses and one healthcare assistant on duty. How should the charge nurse manage this critical staffing shortage?",
    choices: [
      {
        id: "a",
        text: "Assess acuity, prioritise time-critical care, delegate basic care and escalate the shortfall in writing",
      },
      {
        id: "b",
        text: "Ask the assistant to take the stable patients and give antibiotics while nurses do dressings",
      },
      {
        id: "c",
        text: "Lock the unit doors and refuse emergency transfers until the manager has been contacted",
      },
      {
        id: "d",
        text: "Do the work of three nurses without escalation, because reporting looks like incompetence",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "When faced with an acute staffing shortage, the charge nurse must: 1) re-triage and prioritize care by client acuity, protecting time-critical treatments (airway, urgent medications, vital signs, post-op monitoring); 2) delegate routine, non-complex tasks within assistive personnel scope; and 3) escalate the staffing crisis formally and in writing to nursing management/supervision to seek float coverage. Delegating IV medications to an assistant is illegal malpractice; unilaterally locking doors violates institutional emergency response; abandoning the shift constitutes gross patient abandonment. Why the other options fail: option b gives an unqualified assistant a delegated clinical task while the two nurses split across tasks. Option c closes the unit to emergencies, which is not within the charge nurse's authority. Option d abandons the unit and the licence.",
    strategy: "Managing understaffing: Prioritize essential care by acuity, delegate within legal scope, and formally escalate the shortage to nursing administration in writing.",
    difficulty: "medium",
    tags: ["leadership", "ward-management", "staffing", "prioritization", "escalation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-003",
    categorySlug: "leadership-delegation",
    stem: "A registered nurse prepares to administer 2 mg of IV morphine from a 10 mg/mL glass ampoule. The client receives the ordered 2 mg dose. What is the mandatory legal and regulatory procedure for discarding the remaining 8 mg of morphine?",
    choices: [
      {
        id: "a",
        text: "Discard it alone at the sink and document the waste later in the same shift",
      },
      {
        id: "b",
        text: "Return the 8 mg to pharmacy at the end of the shift for credit against ward stock",
      },
      {
        id: "c",
        text: "Waste the 8 mg into the approved receptacle with a second nurse watching, then both co-sign",
      },
      {
        id: "d",
        text: "Keep the remaining 8 mg in a labelled syringe for the client's next scheduled dose",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Controlled substances (such as opioids) are subject to strict statutory chain-of-custody protocols to prevent diversion and abuse. Any unused portion of a single-use narcotic must be destroyed immediately in the presence of a second licensed healthcare professional (RN or pharmacist). Both practitioners must directly witness the physical destruction and immediately sign/authenticate the narcotic record. Stashing leftover narcotics in pockets is illegal and facilitates diversion; un-witnessed sink wasting violates drug regulations; giving hospital narcotics to families constitutes illicit drug trafficking. Why the other options fail: option a wastes without a witness and documents after the fact. Option b returns a controlled drug to stock, which breaks the chain of custody. Option d gives a controlled drug to a family member, which is diversion.",
    strategy: "Controlled substances rule: Wastage of any unused portion requires immediate direct witnessing by a second licensed nurse and simultaneous co-signing of the narcotic register.",
    difficulty: "easy",
    tags: ["leadership", "controlled-substances", "opioid-wastage", "medication-security", "legal-nursing"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-004",
    categorySlug: "leadership-delegation",
    stem: "A nurse educator is designing a clinical skills update for experienced registered nurses returning to critical care practice. According to Malcolm Knowles' Adult Learning Theory (Andragogy), which instructional strategy will result in the highest engagement and learning retention?",
    choices: [
      {
        id: "a",
        text: "A lecture series covering the protocols from first principles, with a written exam at the end",
      },
      {
        id: "b",
        text: "Self-directed reading of the unit policies, with a short quiz at the start of each shift",
      },
      {
        id: "c",
        text: "Problem-centred simulation built on their own clinical experience, with self-directed solving",
      },
      {
        id: "d",
        text: "Observing a senior clinician for two weeks, with no set objectives and no feedback",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Malcolm Knowles' Andragogy theory emphasizes that adult learners: 1) are self-directed and internally motivated; 2) bring rich, diverse life and clinical experience that serves as a foundation for new learning; 3) are problem-centered and task-oriented (preferring real clinical dilemmas over theoretical rote memorization); and 4) learn best when the information has immediate, practical clinical utility. Passive rote lectures, infantilizing adult practitioners, and punitive shaming create hostility and inhibit adult learning. Why the other options fail: option a teaches protocols from first principles to people who already hold them. Option b leaves learning to reading with no application. Option d offers exposure without objectives or feedback.",
    strategy: "Knowles' Adult Learning Principles: Adults are self-directed, experience-driven, problem-centered, and value immediate clinical relevance.",
    difficulty: "medium",
    tags: ["leadership", "andragogy", "adult-learning", "knowles", "clinical-education"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-005",
    categorySlug: "leadership-delegation",
    stem: "A hospital introduces a formal preceptorship program for newly registered nurses, alongside a voluntary professional mentorship initiative. How do the primary goals and structures of preceptorship and mentorship differ?",
    choices: [
      {
        id: "a",
        text: "Preceptorship is a formal teaching qualification, while mentorship is informal peer support",
      },
      {
        id: "b",
        text: "Preceptorship is for new graduates only, while mentorship is for failed competency reviews",
      },
      {
        id: "c",
        text: "Both are structured programmes of the same length, differing only in whether they are paid",
      },
      {
        id: "d",
        text: "Preceptorship is time-limited and competence-focused; mentorship is long-term and career-focused",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Preceptorship is a formal, assigned, time-limited partnership between an experienced staff nurse (preceptor) and a novice nurse/student to teach clinical skills, socialize them into the unit, ensure patient safety, and verify clinical competence. In contrast, mentorship is typically an ongoing, voluntary, mutually agreed-upon professional relationship focused on long-term career growth, leadership development, scholarly aspirations, and personal fulfillment. Why the other options fail: option a turns preceptorship into a qualification and strips mentorship of any purpose. Option b invents eligibility rules for both. Option c makes them identical, which is the distinction the question asks for.",
    strategy: "Preceptorship = formal, time-limited, competency and skill-focused onboarding. Mentorship = long-term, voluntary, holistic professional career guidance.",
    difficulty: "easy",
    tags: ["leadership", "preceptorship", "mentorship", "professional-development", "clinical-teaching"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-006",
    categorySlug: "leadership-delegation",
    stem: "A preceptor observes that a new graduate nurse struggles with maintaining sterile technique during urinary catheter insertion, contaminating the sterile gloves before insertion. Which feedback approach by the preceptor best promotes learning and psychological safety?",
    choices: [
      {
        id: "a",
        text: "Stop the procedure and send the new nurse out while a senior colleague finishes the catheter",
      },
      {
        id: "b",
        text: "Say nothing during the procedure and raise it at the next annual appraisal",
      },
      {
        id: "c",
        text: "Correct the technique at the bedside in front of the client so that it is remembered",
      },
      {
        id: "d",
        text: "Pause to protect sterility, restore asepsis, then debrief privately using the SBI framework",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "When a break in sterility occurs, the preceptor's first duty is client safety—gently stopping the breach and replacing sterile supplies without shaming the novice in front of the client. Afterward, constructive feedback should occur in a private, supportive setting using structured models like SBI (Situation: during catheter insertion; Behavior: touching the unsterile bed rail with sterile gloves; Impact: introduces infection risk). This preserves psychological safety and fosters clinical growth. Public humiliation damages morale; ignoring contamination causes CAUTI; jumping to board revocation is inappropriate for a learning error. Why the other options fail: option a removes the learner from the procedure, so no learning occurs. Option b delays the feedback until it cannot change behaviour. Option c corrects in front of the client, which teaches fear rather than technique.",
    strategy: "Feedback principle: Intervene immediately to maintain client safety, then deliver formative feedback privately, objectively, and constructively.",
    difficulty: "easy",
    tags: ["leadership", "constructive-feedback", "preceptorship", "sbi-model", "patient-safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-007",
    categorySlug: "leadership-delegation",
    stem: "A nurse leader is formulating an evidence-based practice (EBP) question to evaluate whether chlorhexidine skin prep reduces central line-associated bloodstream infections (CLABSI) compared to povidone-iodine in adult ICU clients. Using the PICO framework, which element represents the 'C'?",
    choices: [
      {
        id: "a",
        text: "Adult intensive care clients with central venous catheters, which is the population",
      },
      {
        id: "b",
        text: "2% chlorhexidine gluconate in 70% isopropyl alcohol, which is the intervention",
      },
      {
        id: "c",
        text: "Povidone-iodine topical skin preparation, the comparison intervention",
      },
      {
        id: "d",
        text: "The incidence of catheter-related bloodstream infection, which is the outcome",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The PICO framework structures clinical research questions: P = Population/Patient problem (Adult ICU clients with central lines); I = Intervention (Chlorhexidine skin prep); C = Comparison/Control intervention (Povidone-iodine); O = Outcome (CLABSI incidence rate). In this scenario, povidone-iodine is the standard/comparator intervention ('C'). Why the other options fail: option a is the population, which is the P. Option b is the intervention, the I rather than the C. Option d is the outcome, the O.",
    strategy: "Remember PICO: P = Population, I = Intervention, C = Comparison, O = Outcome. Identify each component methodically.",
    difficulty: "easy",
    tags: ["leadership", "pico", "evidence-based-practice", "research-methods", "clabsi"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-008",
    categorySlug: "leadership-delegation",
    stem: "When evaluating clinical evidence to update a hospital's clinical guideline on pressure injury prevention, which source represents the highest level of evidence (Level I) on the evidence-based practice hierarchy pyramid?",
    choices: [
      {
        id: "a",
        text: "A single large randomised controlled trial published in a high-impact journal",
      },
      {
        id: "b",
        text: "A systematic review and meta-analysis of several rigorous randomised trials",
      },
      {
        id: "c",
        text: "A prospective cohort study of two thousand patients followed for five years",
      },
      {
        id: "d",
        text: "An expert consensus guideline written by a national professional body",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "In the hierarchy of clinical evidence, systematic reviews and meta-analyses of randomized controlled trials (RCTs) occupy the peak (Level I) because they synthesize data across multiple high-powered, rigorously controlled experimental studies, minimizing bias. Single case-control studies and qualitative phenomenological reports provide lower levels of evidence (Levels IV–VI). Expert opinion, editorials, and blogs reside at the very bottom (Level VII). Why the other options fail: option a is a single trial, which sits below a synthesis of trials. Option c is observational, which sits below any randomised design. Option d is expert opinion, which sits near the base of the pyramid.",
    strategy: "Hierarchy of evidence: Systematic reviews and meta-analyses of RCTs sit at the apex (Level I), while expert opinion and anecdotes sit at the base (Level VII).",
    difficulty: "easy",
    tags: ["leadership", "evidence-hierarchy", "systematic-review", "rct", "evidence-based-practice"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-009",
    categorySlug: "leadership-delegation",
    stem: "A nurse researcher is conducting an experimental clinical trial evaluating a new wound dressing in vulnerable, economically disadvantaged clients. Which protocol requirement is mandatory under the Declaration of Helsinki and Institutional Review Board (IRB) ethical standards?",
    choices: [
      {
        id: "a",
        text: "Written consent taken by the ward clerk on the day, with the risks explained afterwards",
      },
      {
        id: "b",
        text: "Verbal consent from a relative, because the client is poor and may not understand the form",
      },
      {
        id: "c",
        text: "A consent form with the risks left out, so that the client is not frightened away",
      },
      {
        id: "d",
        text: "Voluntary written consent, with risks, benefits and the right to withdraw explained",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The Declaration of Helsinki and modern Institutional Review Board (IRB) codes mandate that human clinical research must uphold participant autonomy through voluntary informed consent, full disclosure of risks and benefits, and guarantees that participants may withdraw at any time without compromising clinical care. Coercive financial incentives, withholding standard curative care from control groups as in the unethical Tuskegee study, and publishing confidential identifiers are gross violations of bioethics and international human rights law. Why the other options fail: Taking written consent through the ward clerk on the day and explaining the risks afterwards inverts the order; verbal consent from a relative is not the client's consent; leaving the risks out so the client is not frightened voids the consent.",
    strategy: "Research ethics: Voluntary informed consent, IRB approval, full risk disclosure, protection of vulnerable populations, and zero penalty for study withdrawal.",
    difficulty: "easy",
    tags: ["leadership", "research-ethics", "irb", "declaration-of-helsinki", "informed-consent"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-010",
    categorySlug: "leadership-delegation",
    stem: "A hospital quality improvement (QI) team seeks to reduce medication administration turnaround times on an inpatient ward. According to the Plan-Do-Study-Act (PDSA) quality improvement cycle, what should the team do during the 'Do' phase?",
    choices: [
      {
        id: "a",
        text: "Define the problem, set the aim and identify the root causes of the delay",
      },
      {
        id: "b",
        text: "Analyse the results of the pilot and compare them against the predicted baseline",
      },
      {
        id: "c",
        text: "Implement the change across the whole hospital as a standing policy",
      },
      {
        id: "d",
        text: "Run the change as a small pilot, document what happens and note unexpected problems",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The Deming/IHI PDSA cycle operates as follows: 1) PLAN = define the problem, aim, metrics, and intervention; 2) DO = test the change on a small scale (pilot), execute the plan, and record observations/obstacles; 3) STUDY = analyze post-intervention data against baseline and evaluate lessons learned; 4) ACT = decide whether to adopt, adapt, or abandon the change based on results. Why the other options fail: Defining the problem and the aim is the Plan phase, which comes before the test; analysing the pilot results is Study, which follows it; rolling the change across the whole hospital is Act, which waits for the study.",
    strategy: "PDSA cycle stages: Plan (design), Do (test small pilot), Study (analyze results), Act (adopt, adapt, or abandon).",
    difficulty: "medium",
    tags: ["leadership", "pdsa", "quality-improvement", "patient-safety", "change-cycles"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-011",
    categorySlug: "leadership-delegation",
    stem: "A post-surgical client receives an accidental tenfold overdose of intravenous insulin due to a combination of look-alike packaging, an un-calibrated infusion pump, nurse fatigue from a 16-hour mandatory shift, and a distracting ward environment. According to James Reason's Swiss Cheese Model of system accidents, how are these contributory factors categorized?",
    choices: [
      {
        id: "a",
        text: "Individual carelessness by the nurse, to be handled through the disciplinary process",
      },
      {
        id: "b",
        text: "Active failures alone, because latent conditions cannot contribute to one overdose",
      },
      {
        id: "c",
        text: "Latent system conditions that aligned with active failures to defeat the defences",
      },
      {
        id: "d",
        text: "An unforeseeable event, which no model of accident causation can explain",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "James Reason's Swiss Cheese Model posits that complex organizational accidents rarely stem from isolated individual carelessness. Instead, defense barriers (layers of cheese) contain inherent holes (latent failures: look-alike drug packaging, poor equipment maintenance, excessive mandatory overtime, poor lighting/distractions). When these holes align across multiple institutional defenses, an active human error penetrates and harms the client. System engineering focuses on eliminating latent hazards rather than merely blaming the last human touchpoint. Why the other options fail: Blaming individual carelessness stops the analysis where the model begins; separating active failures from latent conditions contradicts the model, which holds that they align; an unforeseeable event is not what the model finds when the defences were defeated.",
    strategy: "Swiss Cheese Model: Complex medical errors result from alignment of latent system failures (organizational defects) and active human errors across defense barriers.",
    difficulty: "medium",
    tags: ["leadership", "swiss-cheese-model", "james-reason", "system-failure", "patient-safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-012",
    categorySlug: "leadership-delegation",
    stem: "Under a Just Culture patient safety framework, a nurse accidentally misprograms an intravenous infusion pump because two software menus looked virtually identical on a new monitor. In the Just Culture decision matrix, which categorization and management response are appropriate?",
    choices: [
      {
        id: "a",
        text: "At-risk behaviour: coach the nurse and remove the confusing menu in the next update",
      },
      {
        id: "b",
        text: "Reckless behaviour: refer the nurse for a fitness-to-practise review",
      },
      {
        id: "c",
        text: "Human error: console the nurse, examine the pump interface and add a safeguard",
      },
      {
        id: "d",
        text: "Sabotage: remove the nurse from clinical duties pending the investigation",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Just Culture categorizes workplace behaviors into three distinct categories: 1) Human error (inadvertent mistake, slip, or lapse while performing care) -> console the worker and fix system/device vulnerabilities; 2) At-risk behavior (taking shortcuts where risk is mistakenly believed to be negligible or justified) -> coach the worker and remove incentives for shortcuts; 3) Reckless behavior (conscious, intentional disregard of substantial, unjustifiable risk) -> disciplinary sanction. Misprogramming due to confusing user-interface design is a classic human error deserving consolation and system redesign. Why the other options fail: option a is at-risk behaviour, which requires a known risk the nurse accepted. Option b is reckless behaviour, which requires conscious disregard. Option d is sabotage, which requires intent to harm.",
    strategy: "Just Culture framework: Human error = Console and redesign system; At-risk behavior = Coach; Reckless behavior = Discipline.",
    difficulty: "medium",
    tags: ["leadership", "just-culture", "human-error", "patient-safety", "root-cause-analysis"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-013",
    categorySlug: "leadership-delegation",
    stem: "In Ghana's primary health care system, a Community Health Officer (CHO) at a CHPS (Community-based Health Planning and Services) compound identifies a pregnant woman in labour exhibiting signs of severe pre-eclampsia (BP 170/110 mmHg, 3+ proteinuria, hyperreflexia). What is the CHO's appropriate management and referral action?",
    choices: [
      {
        id: "a",
        text: "Give magnesium sulphate and an antihypertensive, stabilise, then refer urgently with handover",
      },
      {
        id: "b",
        text: "Give magnesium and keep her at the CHPS compound until the blood pressure settles",
      },
      {
        id: "c",
        text: "Give oral antihypertensives and send her home to return if the headache worsens",
      },
      {
        id: "d",
        text: "Arrange a taxi to the district hospital without magnesium, since loading needs a hospital",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Under Ghana Health Service primary care and CHPS protocols, severe pre-eclampsia is an obstetric emergency requiring urgent stabilization followed by expedited referral up the healthcare cascade. The Community Health Officer administers a loading dose of magnesium sulphate (anticonvulsant) and rapid-acting antihypertensive (such as oral labetalol or hydralazine) within standing orders, secures transport, notifies the receiving District Hospital, and accompanies or coordinates skilled handover. Retaining the patient at CHPS causes eclamptic seizures and maternal death; discharging home is fatal malpractice; uncoordinated commercial transport fails basic emergency transfer standards. Why the other options fail: option b delays referral for a condition that can progress to eclampsia within hours. Option c sends a woman with severe pre-eclampsia home. Option d moves her without the loading dose that standing orders permit.",
    strategy: "CHPS referral pathway: Stabilize with protocol emergency therapy (magnesium sulphate), communicate with receiving facility, and ensure rapid escorted transfer.",
    difficulty: "medium",
    tags: ["leadership", "chps", "ghana-health-service", "primary-health-care", "referral-pathway"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-014",
    categorySlug: "leadership-delegation",
    stem: "A nurse leader is advocating for community enrollment in the National Health Insurance Scheme (NHIS) in a peri-urban district. What is the fundamental socioeconomic and health policy objective of the NHIS in advancing Universal Health Coverage (UHC)?",
    choices: [
      {
        id: "a",
        text: "Removing financial barriers at the point of care and preventing catastrophic out-of-pocket payment",
      },
      {
        id: "b",
        text: "Free care for registered members, with the cost recovered from higher non-member charges",
      },
      {
        id: "c",
        text: "A contributory scheme that covers the formal sector and expands to the informal sector",
      },
      {
        id: "d",
        text: "A basic package for every citizen, funded from general taxation with no contribution",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The National Health Insurance Scheme (NHIS) was established (under Act 650, revised Act 852) to eliminate the punitive 'cash-and-carry' system that forced patients to pay out-of-pocket before receiving emergency or essential healthcare. Its primary objective is risk pooling and social financial protection to ensure that all citizens, especially the vulnerable and indigent, can access essential healthcare without experiencing catastrophic poverty, advancing Universal Health Coverage (UHC). NHIS is a social public health protection mechanism, not a private for-profit venture. Why the other options fail: Recovering the cost from non-member charges is the opposite of removing a financial barrier; contributory cover that stops at the formal sector leaves the informal majority outside; a tax-funded basic package is a different financing model, not the removal of point-of-care fees.",
    strategy: "Health financing policy: NHIS eliminates 'cash-and-carry' and prevents catastrophic out-of-pocket spending to achieve Universal Health Coverage.",
    difficulty: "easy",
    tags: ["leadership", "nhis", "universal-health-coverage", "health-policy", "ghana"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-015",
    categorySlug: "leadership-delegation",
    stem: "A senior nurse is appointed to the District Health Management Team (DHMT). How can the nurse leader most effectively exercise policy voice to improve maternal and neonatal survival across the district?",
    choices: [
      {
        id: "a",
        text: "Present the mortality figures to the assembly and ask the members to fund a new vehicle",
      },
      {
        id: "b",
        text: "Use district data to find the worst maternal outcomes, target resources there and build transport",
      },
      {
        id: "c",
        text: "Lobby for more midwives at the district hospital, where most deliveries take place",
      },
      {
        id: "d",
        text: "Campaign for a maternity wing at every facility, starting nearest the district capital",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Nurses in health administration and policy leadership exercise policy voice by using empirical public health data (such as DHIMS-2 metrics) to highlight healthcare disparities, maternal-neonatal morbidity trends, and resource bottlenecks. Advocating for targeted resource allocation, ambulance networks, and training for frontline primary healthcare providers drives systemic population-level improvements. Apathy, urban misallocation, and eliminating nursing cadres actively worsen health outcomes. Why the other options fail: Presenting mortality figures to ask for a vehicle does not target the worst outcomes; concentrating midwives at the district hospital ignores where the deaths are occurring; a maternity wing in every facility spreads resources evenly rather than toward the worst outcomes.",
    strategy: "Nursing policy voice: Leverage epidemiological health data (DHIMS-2) to advocate for equitable resource allocation and address maternal-child health disparities.",
    difficulty: "medium",
    tags: ["leadership", "health-policy", "dhmt", "dhims2", "policy-advocacy"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-016",
    categorySlug: "leadership-delegation",
    stem: "An experienced certified midwife wishes to establish an independent, private maternity home in an underserved rural district. Which regulatory standard must the practitioner fulfill before legally admitting clients and providing obstetric care?",
    choices: [
      {
        id: "a",
        text: "Register the business with the assembly and open after an environmental health inspection",
      },
      {
        id: "b",
        text: "HeFRA facility accreditation, NMC good standing, and practice within scope and referral protocols",
      },
      {
        id: "c",
        text: "Confirm NMC registration and open, since a licence to practise licenses the facility",
      },
      {
        id: "d",
        text: "Obtain HeFRA accreditation and open, since the facility regulator also covers the nurse",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Health entrepreneurship requires strict adherence to statutory regulatory frameworks. Under Ghanaian law (Health Institutions and Facilities Act 829), all healthcare facilities—including nurse/midwife-led private clinics and maternity homes—must be inspected, accredited, and licensed by the Health Facilities Regulatory Agency (HeFRA). Furthermore, the practitioner must maintain active licensure and good standing with the Nursing and Midwifery Council (NMC), ensure a defined clinical scope, and maintain formal emergency referral links with a higher-level facility. Operating without HeFRA licensing is illegal and subject to criminal closure. Why the other options fail: option a registers a business without licensing the facility or checking professional standing. Option c treats a personal licence as a facility licence. Option d accredits the building and leaves the practitioner unchecked.",
    strategy: "Health entrepreneurship: Private health facilities require formal licensing from regulatory authorities (HeFRA) and active council registration (NMC).",
    difficulty: "medium",
    tags: ["leadership", "entrepreneurship", "hefra", "regulation", "advanced-practice"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-017",
    categorySlug: "leadership-delegation",
    stem: "A nurse leader observes that mainstream news media frequently portrays nurses as passive, subservient handmaidens with low technical competence. Which professional initiative most effectively elevates the public image and voice of the nursing profession?",
    choices: [
      {
        id: "a",
        text: "Publish research, write in the media, and join policy panels and professional associations",
      },
      {
        id: "b",
        text: "A national advertising campaign showing nurses at work, funded by the association",
      },
      {
        id: "c",
        text: "Speak only through the ministry's communications office so the message stays consistent",
      },
      {
        id: "d",
        text: "Focus on clinical work and let the image improve as patients experience good care",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The public image of nursing directly influences public trust, recruitment of top candidates, legislative healthcare funding, and the profession's policy-making influence. The International Council of Nurses (ICN) and national associations advocate for proactive media engagement: publishing clinical research, writing thought-leadership articles, speaking as expert panelists on national health topics, and showcasing nursing's scientific, autonomous clinical contributions. Silence and unkempt presentation perpetuate harmful stereotypes. Why the other options fail: An advertising campaign spends money on image rather than on evidence and expertise; speaking only through the ministry's communications office channels the profession's voice through another body; waiting for patients to notice good care assumes an image changes by itself.",
    strategy: "Professional image: Elevate nursing through thought leadership, clinical research publication, media engagement, and professional association advocacy.",
    difficulty: "easy",
    tags: ["leadership", "professional-image", "grna", "icn", "advocacy"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-018",
    categorySlug: "leadership-delegation",
    stem: "A nurse manager notes that several staff nurses on a high-mortality oncology unit are demonstrating emotional exhaustion, cynicism, chronic absenteeism, and detachment from client suffering (compassion fatigue and burnout). Which organizational strategy is most effective in combating burnout?",
    choices: [
      {
        id: "a",
        text: "Structured debriefing, safe staffing ratios, confidential counselling and peer support",
      },
      {
        id: "b",
        text: "Mandatory resilience training for the nurses, with attendance recorded and appraised",
      },
      {
        id: "c",
        text: "A roster giving each nurse three consecutive days off every month",
      },
      {
        id: "d",
        text: "Rotate staff through the oncology unit quickly so no one is exposed for long",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Compassion fatigue and burnout are occupational hazards in high-stress, emotionally demanding healthcare specialties. Evidence-based organizational interventions include: regular clinical multidisciplinary debriefings (such as Schwartz Center Rounds) to discuss emotional aspects of care, ensuring safe staffing ratios, providing confidential mental health support programs (EAP), and fostering peer support. Punitive threats, increasing workload, and demanding emotional apathy exacerbate psychological trauma and accelerate nurse turnover. Why the other options fail: Mandatory resilience training makes the individual responsible for a system problem; three consecutive days off every month adds rest without changing the workload that caused the exhaustion; rotating staff quickly reduces exposure instead of fixing it and spreads the burnout.",
    strategy: "Combating burnout: Address systemic staffing ratios, offer structured emotional debriefings (Schwartz rounds), and provide confidential employee counseling.",
    difficulty: "easy",
    tags: ["leadership", "burnout", "compassion-fatigue", "occupational-health", "nurse-retention"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-019",
    categorySlug: "leadership-delegation",
    stem: "A nurse manager intends to introduce a new computerized barcode medication administration (BCMA) system on a medical ward where nurses have used paper charts for 25 years. The staff express strong anxiety and resistance. Applying Kurt Lewin's 3-Step Change Model, what should the manager do during the 'Unfreezing' stage?",
    choices: [
      {
        id: "a",
        text: "Implement the system overnight and train afterwards, so no one has time to resist",
      },
      {
        id: "b",
        text: "Help staff see the limits of paper charting and address their anxieties, creating readiness",
      },
      {
        id: "c",
        text: "Set a compliance target and audit it monthly, reporting the results to the manager",
      },
      {
        id: "d",
        text: "Set up a staff committee to decide whether the system should be introduced at all",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Kurt Lewin's 3-Step Change Theory consists of: 1) UNFREEZING = creating motivation and readiness for change by challenging the status quo, showing the need for innovation (e.g., highlighting medication error risks in paper records), and addressing emotional resistance; 2) MOVING (CHANGING) = executing the transition, providing hands-on training, and coaching through the new workflow; 3) REFREEZING = stabilizing and institutionalizing the change into permanent standard operating procedures. Why the other options fail: Implementing overnight and training afterwards skips unfreezing and guarantees resistance; a compliance target audited monthly is refreezing, which comes after the change; a staff committee deciding whether to introduce the system delegates a decision the manager has already been given.",
    strategy: "Lewin's Change Theory: Unfreezing (create awareness and readiness), Moving (implement change and train), Refreezing (institutionalize and sustain).",
    difficulty: "medium",
    tags: ["leadership", "lewin-change-model", "unfreezing", "change-management", "innovation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO2-020",
    categorySlug: "leadership-delegation",
    stem: "A clinical governance committee conducts a clinical audit on post-operative surgical site infection (SSI) rates in a regional hospital. The audit reveals an SSI rate of 14%, well above the national benchmark of 4%. To complete the clinical audit cycle and improve client outcomes, what is the mandatory next step?",
    choices: [
      {
        id: "a",
        text: "Present the findings to the surgical team and agree to review the rate again next year",
      },
      {
        id: "b",
        text: "Analyse causes, apply evidence-based changes, and re-audit after a set period to close the loop",
      },
      {
        id: "c",
        text: "Introduce the WHO checklist and record compliance, without repeating the audit",
      },
      {
        id: "d",
        text: "Refer the unit for external accreditation review, since internal audit cannot change practice",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "A clinical audit is a quality improvement process that seeks to improve client care and outcomes through systematic review of care against explicit criteria and the implementation of change. The complete clinical audit cycle requires: 1) identifying standard criteria; 2) measuring current practice; 3) comparing results with standards; 4) implementing corrective evidence-based changes; and 5) re-auditing practice to verify that improvements occurred ('closing the audit loop'). Hiding the report or falsifying data violates clinical governance and ethics. Why the other options fail: option a records the finding without changing anything. Option c introduces the change but never measures it, so the loop stays open. Option d hands the problem to another body, which does not close the cycle.",
    strategy: "Clinical audit cycle: Measure practice against standards, implement evidence-based corrective changes, and re-audit to close the audit loop.",
    difficulty: "medium",
    tags: ["leadership", "clinical-audit", "clinical-governance", "audit-loop", "quality-improvement"],
    isFree: true,
  },
];
