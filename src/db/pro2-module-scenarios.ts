import type { AuthoredQuestion } from "./authored-bank";

export const PRO2_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-PRO2-001",
    categorySlug: "leadership-delegation",
    stem: "A multidisciplinary resuscitation team is managing a sudden pulseless ventricular fibrillation arrest in an adult client. Which leadership style is most effective and appropriate for the team leader during this acute crisis resuscitation?",
    choices: [
      {
        id: "a",
        text: "Autocratic (directive) leadership, providing rapid, clear, unambiguous direct orders and assigning explicit roles with closed-loop communication",
      },
      {
        id: "b",
        text: "Laissez-faire leadership, allowing every team member to independently choose what interventions they feel like performing",
      },
      {
        id: "c",
        text: "Democratic leadership, calling for a majority consensus vote on each defibrillation energy setting before shocking",
      },
      {
        id: "d",
        text: "Transformational leadership, spending 30 minutes inspiring the resuscitation team with the hospital's long-term corporate vision",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "In acute life-or-death resuscitations where seconds dictate survival, an autocratic (directive) leadership style is clinically indicated. The code leader must maintain command, make rapid high-stakes decisions, assign clear roles (chest compressions, airway, defibrillator, medication recorder), and demand closed-loop communication. Laissez-faire (b) leads to chaos and delayed defibrillation; democratic consensus voting (c) wastes critical seconds when immediate CPR is required; transformational lecturing (d) is completely inappropriate during an emergency arrest.",
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
        text: "Instruct the healthcare assistant to administer intravenous antibiotics while the two nurses perform dressing changes",
      },
      {
        id: "b",
        text: "Assess client acuity, prioritize essential time-critical care, delegate appropriate basic care to the assistant, and formally escalate the unsafe staffing shortfall in writing to the nursing supervisor",
      },
      {
        id: "c",
        text: "Lock the ward doors and refuse to admit any emergency transfers without notifying nursing leadership",
      },
      {
        id: "d",
        text: "Abandon the unit immediately and go home to avoid personal malpractice liability for understaffed care",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "When faced with an acute staffing shortage, the charge nurse must: 1) re-triage and prioritize care by client acuity, protecting time-critical treatments (airway, urgent medications, vital signs, post-op monitoring); 2) delegate routine, non-complex tasks within assistive personnel scope; and 3) escalate the staffing crisis formally and in writing to nursing management/supervision to seek float coverage. Delegating IV medications to an assistant (a) is illegal malpractice; unilaterally locking doors (c) violates institutional emergency response; abandoning the shift (d) constitutes gross patient abandonment.",
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
        text: "Save the remaining 8 mg in a capped syringe in the nurse's pocket for the client's next scheduled dose",
      },
      {
        id: "b",
        text: "Pour the unused 8 mg into the ward sink alone at the end of the shift and document it the next morning",
      },
      {
        id: "c",
        text: "Immediately discard the unused 8 mg into an approved pharmaceutical disposal receptacle while a second licensed nurse directly witnesses the waste, followed by immediate co-signing of the narcotic register",
      },
      {
        id: "d",
        text: "Hand the remaining 8 mg to the client's visiting family member to take home for future pain flare-ups",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Controlled substances (such as opioids) are subject to strict statutory chain-of-custody protocols to prevent diversion and abuse. Any unused portion of a single-use narcotic must be destroyed immediately in the presence of a second licensed healthcare professional (RN or pharmacist). Both practitioners must directly witness the physical destruction and immediately sign/authenticate the narcotic record. Stashing leftover narcotics in pockets (a) is illegal and facilitates diversion; un-witnessed sink wasting (b) violates drug regulations; giving hospital narcotics to families (d) constitutes illicit drug trafficking.",
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
        text: "Delivering an 8-hour passive lecture where learners sit silently and memorize hospital protocols word for word",
      },
      {
        id: "b",
        text: "Treating adult learners like children who have zero prior knowledge or clinical intuition to contribute",
      },
      {
        id: "c",
        text: "Testing learners unannounced with punitive surprise quizzes designed to shame underperforming participants publicly",
      },
      {
        id: "d",
        text: "Utilizing problem-centered clinical simulation case studies that draw upon learners' prior clinical experience, allowing self-directed problem solving and immediate real-world clinical application",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Malcolm Knowles' Andragogy theory emphasizes that adult learners: 1) are self-directed and internally motivated; 2) bring rich, diverse life and clinical experience that serves as a foundation for new learning; 3) are problem-centered and task-oriented (preferring real clinical dilemmas over theoretical rote memorization); and 4) learn best when the information has immediate, practical clinical utility. Passive rote lectures (a), infantilizing adult practitioners (b), and punitive shaming (c) create hostility and inhibit adult learning.",
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
        text: "Preceptorship is a structured, time-limited clinical relationship focused on clinical competence, onboarding, and role transition; mentorship is a longer-term, mutually chosen, supportive relationship focused on broader personal and professional career development",
      },
      {
        id: "b",
        text: "Preceptorship is exclusively for nursing professors, whereas mentorship is solely for student nurses in primary school",
      },
      {
        id: "c",
        text: "Mentorship involves daily formal clinical evaluation and grade assignment, while preceptorship has zero educational accountability",
      },
      {
        id: "d",
        text: "Preceptorship and mentorship are identical terms with no structural or functional distinction in healthcare",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Preceptorship is a formal, assigned, time-limited partnership between an experienced staff nurse (preceptor) and a novice nurse/student to teach clinical skills, socialize them into the unit, ensure patient safety, and verify clinical competence. In contrast, mentorship is typically an ongoing, voluntary, mutually agreed-upon professional relationship focused on long-term career growth, leadership development, scholarly aspirations, and personal fulfillment. Option a correctly outlines these distinct professional development models.",
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
        text: "Loudly scold the graduate nurse at the bedside in front of the awake client and visitors",
      },
      {
        id: "b",
        text: "Pause the procedure gently at the bedside to protect client sterility, re-establish asepsis, and debrief privately after the procedure using the Situation-Behavior-Impact (SBI) framework with constructive coaching",
      },
      {
        id: "c",
        text: "Ignore the break in sterility completely so the new nurse does not feel embarrassed or anxious",
      },
      {
        id: "d",
        text: "Report the new graduate to the state regulatory board for immediate license revocation without speaking to them",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "When a break in sterility occurs, the preceptor's first duty is client safety—gently stopping the breach and replacing sterile supplies without shaming the novice in front of the client. Afterward, constructive feedback should occur in a private, supportive setting using structured models like SBI (Situation: during catheter insertion; Behavior: touching the unsterile bed rail with sterile gloves; Impact: introduces infection risk). This preserves psychological safety and fosters clinical growth. Public humiliation (a) damages morale; ignoring contamination (c) causes CAUTI; jumping to board revocation (d) is inappropriate for a learning error.",
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
        text: "Adult intensive care unit (ICU) clients with central venous catheters",
      },
      {
        id: "b",
        text: "2% chlorhexidine gluconate in 70% isopropyl alcohol skin preparation",
      },
      {
        id: "c",
        text: "Povidone-iodine topical skin preparation",
      },
      {
        id: "d",
        text: "Incidence rate of central line-associated bloodstream infections (CLABSI)",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The PICO framework structures clinical research questions: P = Population/Patient problem (Adult ICU clients with central lines); I = Intervention (Chlorhexidine skin prep); C = Comparison/Control intervention (Povidone-iodine); O = Outcome (CLABSI incidence rate). In this scenario, povidone-iodine is the standard/comparator intervention ('C'). Option a is the Population ('P'), option b is the Intervention ('I'), and option d is the Outcome ('O').",
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
        text: "An anecdotal clinical opinion blog post written by a retired hospital administrator",
      },
      {
        id: "b",
        text: "A qualitative exploratory study based on interviews with 8 nursing students",
      },
      {
        id: "c",
        text: "A single non-randomized, retrospective case-control observational report",
      },
      {
        id: "d",
        text: "A systematic review and meta-analysis of multiple rigorous randomized controlled trials (RCTs)",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "In the hierarchy of clinical evidence, systematic reviews and meta-analyses of randomized controlled trials (RCTs) occupy the peak (Level I) because they synthesize data across multiple high-powered, rigorously controlled experimental studies, minimizing bias. Single case-control studies (c) and qualitative phenomenological reports (b) provide lower levels of evidence (Levels IV–VI). Expert opinion, editorials, and blogs (a) reside at the very bottom (Level VII).",
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
        text: "Obtaining voluntary, informed, written consent with explicit disclosure of risks, benefits, and the right to withdraw at any time without penalty or loss of standard medical care",
      },
      {
        id: "b",
        text: "Offering excessive monetary stipends that coerce impoverished clients into enduring dangerous, unmonitored procedures",
      },
      {
        id: "c",
        text: "Withholding proven standard curative wound treatments from the control group to observe how severe infections become",
      },
      {
        id: "d",
        text: "Publishing participants' full names and home addresses in medical journals to ensure transparency",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The Declaration of Helsinki and modern Institutional Review Board (IRB) codes mandate that human clinical research must uphold participant autonomy through voluntary informed consent, full disclosure of risks and benefits, and guarantees that participants may withdraw at any time without compromising clinical care. Coercive financial incentives (b), withholding standard curative care from control groups as in the unethical Tuskegee study (c), and publishing confidential identifiers (d) are gross violations of bioethics and international human rights law.",
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
        text: "Brainstorm problem statements, define measurable aim objectives, and identify root causes",
      },
      {
        id: "b",
        text: "Implement the proposed intervention on a small-scale pilot unit, carry out the test of change, and document observations and unexpected issues",
      },
      {
        id: "c",
        text: "Analyze collected post-pilot metrics and compare results against baseline predictions",
      },
      {
        id: "d",
        text: "Adopt the change hospital-wide as a permanent institutional policy based on successful study data",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The Deming/IHI PDSA cycle operates as follows: 1) PLAN = define the problem, aim, metrics, and intervention; 2) DO = test the change on a small scale (pilot), execute the plan, and record observations/obstacles; 3) STUDY = analyze post-intervention data against baseline and evaluate lessons learned; 4) ACT = decide whether to adopt, adapt, or abandon the change based on results. Option b describes the 'Do' stage. Option a is 'Plan', option c is 'Study', and option d is 'Act'.",
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
        text: "Solely individual negligence by the bedside nurse that should be punished with termination",
      },
      {
        id: "b",
        text: "Random, unpredictable acts of fate that cannot be prevented by healthcare engineering",
      },
      {
        id: "c",
        text: "Latent system conditions and organizational vulnerabilities that aligned with active failures to allow harm to penetrate defense barriers",
      },
      {
        id: "d",
        text: "A non-reportable minor event because the patient did not immediately experience cardiac arrest",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "James Reason's Swiss Cheese Model posits that complex organizational accidents rarely stem from isolated individual carelessness. Instead, defense barriers (layers of cheese) contain inherent holes (latent failures: look-alike drug packaging, poor equipment maintenance, excessive mandatory overtime, poor lighting/distractions). When these holes align across multiple institutional defenses, an active human error penetrates and harms the client. System engineering focuses on eliminating latent hazards rather than merely blaming the last human touchpoint.",
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
        text: "Reckless behavior; suspend the nurse without pay and report them to criminal prosecutors",
      },
      {
        id: "b",
        text: "At-risk behavior; sanction the nurse by revoking clinical privileges for 6 months",
      },
      {
        id: "c",
        text: "Willful sabotage; terminate the nurse immediately to deter other staff members",
      },
      {
        id: "d",
        text: "Human error; console and support the nurse, analyze the pump interface design, and implement systemic engineering safeguards",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Just Culture categorizes workplace behaviors into three distinct categories: 1) Human error (inadvertent mistake, slip, or lapse while performing care) -> console the worker and fix system/device vulnerabilities; 2) At-risk behavior (taking shortcuts where risk is mistakenly believed to be negligible or justified) -> coach the worker and remove incentives for shortcuts; 3) Reckless behavior (conscious, intentional disregard of substantial, unjustifiable risk) -> disciplinary sanction. Misprogramming due to confusing user-interface design is a classic human error deserving consolation and system redesign.",
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
        text: "Administer loading-dose magnesium sulphate and antihypertensive therapy per standing orders, stabilize the client, arrange immediate transport, and communicate with the District Hospital referral team",
      },
      {
        id: "b",
        text: "Keep the woman at the CHPS compound and attempt a non-augmented vaginal delivery with herbal infusions",
      },
      {
        id: "c",
        text: "Send the client home on bed rest and instruct her to return after 3 days if her headache does not resolve",
      },
      {
        id: "d",
        text: "Instruct the family to find a commercial taxi and walk the client to a regional hospital without clinical stabilization",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Under Ghana Health Service primary care and CHPS protocols, severe pre-eclampsia is an obstetric emergency requiring urgent stabilization followed by expedited referral up the healthcare cascade. The Community Health Officer administers a loading dose of magnesium sulphate (anticonvulsant) and rapid-acting antihypertensive (such as oral labetalol or hydralazine) within standing orders, secures transport, notifies the receiving District Hospital, and accompanies or coordinates skilled handover. Retaining the patient at CHPS (b) causes eclamptic seizures and maternal death; discharging home (c) is fatal malpractice; uncoordinated commercial transport (d) fails basic emergency transfer standards.",
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
        text: "Maximizing cash revenue collection for private commercial health insurance stockholders",
      },
      {
        id: "b",
        text: "Removing financial barriers at the point of service and eliminating catastrophic out-of-pocket expenditures for basic and essential healthcare services",
      },
      {
        id: "c",
        text: "Restricting medical treatment exclusively to employed civil servants in the capital city",
      },
      {
        id: "d",
        text: "Replacing all public hospitals with fee-for-service cosmetic surgical centers",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The National Health Insurance Scheme (NHIS) was established (under Act 650, revised Act 852) to eliminate the punitive 'cash-and-carry' system that forced patients to pay out-of-pocket before receiving emergency or essential healthcare. Its primary objective is risk pooling and social financial protection to ensure that all citizens, especially the vulnerable and indigent, can access essential healthcare without experiencing catastrophic poverty, advancing Universal Health Coverage (UHC). NHIS is a social public health protection mechanism, not a private for-profit venture (a).",
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
        text: "Refuse to attend DHMT meetings because clinical nurses should never be involved in administrative or public health policy",
      },
      {
        id: "b",
        text: "Insist that the district budget allocate 100% of all health funds exclusively to urban executive air-conditioned offices",
      },
      {
        id: "c",
        text: "Utilize district health information data (DHIMS-2) to identify high-maternal-mortality clusters, advocate for equitable resource distribution to rural CHPS zones, and establish emergency transport networks",
      },
      {
        id: "d",
        text: "Lobby the district assembly to eliminate all midwives and community health nurses from district payrolls",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Nurses in health administration and policy leadership exercise policy voice by using empirical public health data (such as DHIMS-2 metrics) to highlight healthcare disparities, maternal-neonatal morbidity trends, and resource bottlenecks. Advocating for targeted resource allocation, ambulance networks, and training for frontline primary healthcare providers drives systemic population-level improvements. Apathy (a), urban misallocation (b), and eliminating nursing cadres (d) actively worsen health outcomes.",
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
        text: "Simply open the clinic doors without inspection because licensed midwives have automatic nationwide private practice clearance",
      },
      {
        id: "b",
        text: "Obtain a business permit from the local market traders association and begin performing cesarean sections independently",
      },
      {
        id: "c",
        text: "Purchase prescription antibiotics from street vendors to avoid formal pharmaceutical supply inspections",
      },
      {
        id: "d",
        text: "Obtain formal facility accreditation and licensing from the Health Facilities Regulatory Agency (HeFRA), verify professional good standing with the Nursing and Midwifery Council (NMC), and adhere to established clinical scope and referral protocols",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Health entrepreneurship requires strict adherence to statutory regulatory frameworks. Under Ghanaian law (Health Institutions and Facilities Act 829), all healthcare facilities—including nurse/midwife-led private clinics and maternity homes—must be inspected, accredited, and licensed by the Health Facilities Regulatory Agency (HeFRA). Furthermore, the practitioner must maintain active licensure and good standing with the Nursing and Midwifery Council (NMC), ensure a defined clinical scope, and maintain formal emergency referral links with a higher-level facility. Operating without HeFRA licensing (a) is illegal and subject to criminal closure.",
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
        text: "Proactively publishing nursing research, authoring clinical opinion pieces in major media outlets, presenting evidence-based health policies, and participating actively in national health panels and professional associations (GRNA/ICN)",
      },
      {
        id: "b",
        text: "Banning nurses from speaking in public or granting interviews to any educational institutions",
      },
      {
        id: "c",
        text: "Encouraging nurses to wear unkempt, dirty uniforms in public to show how difficult ward work can be",
      },
      {
        id: "d",
        text: "Accepting subservient stereotypes silently because media depictions have zero impact on healthcare funding or professional autonomy",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The public image of nursing directly influences public trust, recruitment of top candidates, legislative healthcare funding, and the profession's policy-making influence. The International Council of Nurses (ICN) and national associations advocate for proactive media engagement: publishing clinical research, writing thought-leadership articles, speaking as expert panelists on national health topics, and showcasing nursing's scientific, autonomous clinical contributions. Silence (d) and unkempt presentation (c) perpetuate harmful stereotypes.",
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
        text: "Threaten to dock the nurses' monthly salaries unless they smile more during client interactions",
      },
      {
        id: "b",
        text: "Implement structured Schwartz Center clinical debriefing rounds, enforce safe nurse-to-patient staffing ratios, provide access to confidential employee assistance counseling, and promote team peer support",
      },
      {
        id: "c",
        text: "Mandate that burnt-out nurses work double shifts so they stay too busy to feel depressed",
      },
      {
        id: "d",
        text: "Instruct the nurses to stop caring about clients completely because emotional detachment is the only solution",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Compassion fatigue and burnout are occupational hazards in high-stress, emotionally demanding healthcare specialties. Evidence-based organizational interventions include: regular clinical multidisciplinary debriefings (such as Schwartz Center Rounds) to discuss emotional aspects of care, ensuring safe staffing ratios, providing confidential mental health support programs (EAP), and fostering peer support. Punitive threats (a), increasing workload (c), and demanding emotional apathy (d) exacerbate psychological trauma and accelerate nurse turnover.",
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
        text: "Immediately penalize any nurse who asks a question about the transition",
      },
      {
        id: "b",
        text: "Solidify the new process into permanent institutional policy and conduct annual compliance audits",
      },
      {
        id: "c",
        text: "Help staff recognize the limitations and safety risks of paper charting (e.g., medication errors, illegible handwriting), build driving forces for change, and address staff anxieties to create readiness for innovation",
      },
      {
        id: "d",
        text: "Deploy the new computerized system overnight without prior communication or training",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Kurt Lewin's 3-Step Change Theory consists of: 1) UNFREEZING = creating motivation and readiness for change by challenging the status quo, showing the need for innovation (e.g., highlighting medication error risks in paper records), and addressing emotional resistance; 2) MOVING (CHANGING) = executing the transition, providing hands-on training, and coaching through the new workflow; 3) REFREEZING = stabilizing and institutionalizing the change into permanent standard operating procedures. Option c describes Unfreezing. Option b is Refreezing.",
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
        text: "File the audit document in a locked drawer and keep the results confidential from surgical ward staff",
      },
      {
        id: "b",
        text: "Falsify the surgical site infection numbers in the official ledger to match the 4% national benchmark",
      },
      {
        id: "c",
        text: "Permanently close all operating theaters and refer all surgical cases to a neighboring country",
      },
      {
        id: "d",
        text: "Analyze root causes, implement targeted evidence-based clinical interventions (e.g., WHO surgical safety checklist, chlorhexidine prep, timely prophylactic antibiotics), and re-audit after a specified period to 'close the audit loop'",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "A clinical audit is a quality improvement process that seeks to improve client care and outcomes through systematic review of care against explicit criteria and the implementation of change. The complete clinical audit cycle requires: 1) identifying standard criteria; 2) measuring current practice; 3) comparing results with standards; 4) implementing corrective evidence-based changes; and 5) re-auditing practice to verify that improvements occurred ('closing the audit loop'). Hiding the report (a) or falsifying data (b) violates clinical governance and ethics.",
    strategy: "Clinical audit cycle: Measure practice against standards, implement evidence-based corrective changes, and re-audit to close the audit loop.",
    difficulty: "medium",
    tags: ["leadership", "clinical-audit", "clinical-governance", "audit-loop", "quality-improvement"],
    isFree: true,
  },
];
