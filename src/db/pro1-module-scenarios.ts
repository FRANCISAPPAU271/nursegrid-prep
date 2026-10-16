import type { AuthoredQuestion } from "./authored-bank";

export const PRO1_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-PRO1-001",
    categorySlug: "leadership-delegation",
    stem: "A registered general nurse realizes that their professional practicing licence and PIN from the regulatory nursing council expired two months ago. The nurse is currently scheduled to manage a busy medical ward shift. What is the nurse's immediate legal and professional obligation?",
    choices: [
      {
        id: "a",
        text: "Notify the nurse manager immediately, refrain from practicing clinical nursing until the licence is formally renewed or temporary authorization is granted, and expedite renewal",
      },
      {
        id: "b",
        text: "Continue working scheduled shifts normally while waiting for the regulatory body's annual audit cycle",
      },
      {
        id: "c",
        text: "Work under a colleague's registration PIN on the electronic medication administration record until renewal is processed",
      },
      {
        id: "d",
        text: "Perform only non-invasive procedures and delegate all intravenous medications to student nurses",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Practicing nursing without an active, unencumbered professional licence violates national nursing statutory laws and professional regulations (such as the Health Professions Regulatory Bodies Act and Nursing & Midwifery Council standards). Practicing with an expired licence constitutes illegal, unauthorized practice, exposing the individual to criminal penalties, disciplinary sanctions, and loss of professional indemnity coverage. The nurse must notify their supervisor immediately and step down from clinical practice until the licence is restored. Continuing to practice (b), charting under a colleague's credentials (c), or practicing selectively (d) are fraudulent, unlawful, and breach professional standards.",
    strategy: "Professional regulation standard: Active licensure is a mandatory legal prerequisite for clinical practice. Practicing with an expired license is illegal.",
    difficulty: "easy",
    tags: ["professionalism", "licensure", "regulation", "legal-nursing", "nmc"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-002",
    categorySlug: "leadership-delegation",
    stem: "A registered general nurse (RGN) is supervising a nursing team that includes an enrolled nurse (EN) and a healthcare assistant (HCA). When planning care for a newly admitted client experiencing unstable acute coronary syndrome, which responsibility must the registered nurse retain?",
    choices: [
      {
        id: "a",
        text: "Obtaining routine baseline vital signs after the initial clinical assessment has been documented",
      },
      {
        id: "b",
        text: "Comprehensive nursing assessment, developing the nursing care plan, and evaluating the client's clinical response to intravenous nitroglycerin",
      },
      {
        id: "c",
        text: "Assisting the client with perineal hygiene and changing bed linens",
      },
      {
        id: "d",
        text: "Delivering a clean urine specimen bottle to the hospital pathology laboratory",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "According to professional practice acts and regulatory delegation guidelines, the registered nurse cannot delegate tasks that require specialized nursing knowledge, clinical judgment, comprehensive assessment, care planning, or clinical evaluation (the 'E-A-T' principle: Evaluate, Assess, Teach). An unstable client requires ongoing registered nurse assessment and titration of high-alert cardiovascular medications. Routine vital sign checks on stable clients (a), personal hygiene (c), and specimen transport (d) can be safely delegated to assistive personnel within their designated job descriptions.",
    strategy: "Delegation rule: The RN cannot delegate Assessment, Teaching, or Evaluation (E-A-T) or any care for an unstable, complex client.",
    difficulty: "easy",
    tags: ["professionalism", "delegation", "scope-of-practice", "cadres", "leadership"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-003",
    categorySlug: "leadership-delegation",
    stem: "A nurse is reviewing regulatory requirements for biennial licence renewal and professional re-registration. Which statement accurately describes the core purpose and requirement of Continuous Professional Development (CPD)?",
    choices: [
      {
        id: "a",
        text: "CPD is an optional academic pursuit designed solely for nurses seeking promotion to university professorships",
      },
      {
        id: "b",
        text: "CPD points are granted automatically based purely on consecutive years of clinical employment without formal educational activities",
      },
      {
        id: "c",
        text: "CPD is a mandatory regulatory requirement to ensure lifelong learning, maintenance of clinical competence, and safe public protection through verified educational credits",
      },
      {
        id: "d",
        text: "CPD programs are intended exclusively to replace undergraduate pre-service nursing education curricula",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Continuous Professional Development (CPD) is a statutory regulatory mandate established by nursing regulatory councils (including the Ghana NMC, UK NMC, and US State Boards). Its primary mission is public protection by ensuring that registered practitioners continuously maintain, update, and enhance clinical knowledge, evidence-based skills, and professional ethics throughout their careers. It is not optional (a), cannot be acquired passively through tenure alone (b), and does not replace pre-service training (d).",
    strategy: "Regulatory principle: CPD is mandatory for all licensed nurses to guarantee ongoing competence and protect public safety.",
    difficulty: "easy",
    tags: ["professionalism", "cpd", "lifelong-learning", "regulation", "licensure"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-004",
    categorySlug: "leadership-delegation",
    stem: "An alert, mentally competent 45-year-old adult client with severe gastrointestinal bleeding from a peptic ulcer refuses a prescribed blood transfusion due to deeply held religious convictions, despite being fully informed that refusal could lead to hypovolemic shock and death. Which ethical principle dictates the nurse's primary duty to respect this client's decision?",
    choices: [
      {
        id: "a",
        text: "Paternalism",
      },
      {
        id: "b",
        text: "Beneficence",
      },
      {
        id: "c",
        text: "Non-maleficence",
      },
      {
        id: "d",
        text: "Autonomy",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Autonomy is the ethical and legal principle that recognizes an individual's right to self-determination, bodily integrity, and independent decision-making regarding their own medical care, provided they possess decision-making capacity. A competent adult has the absolute legal and ethical right to refuse any medical treatment, even life-sustaining interventions like blood transfusions. Paternalism (a) overrides client choices for their perceived good. Beneficence (b) promotes well-being, but does not legally or ethically supersede a competent client's autonomous refusal. Non-maleficence (c) means doing no harm.",
    strategy: "Ethical rule: Autonomy grants mentally competent adults the absolute right to refuse medical interventions, even when providers believe the choice is unwise or fatal.",
    difficulty: "medium",
    tags: ["professionalism", "autonomy", "ethics", "informed-refusal", "bioethics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-005",
    categorySlug: "leadership-delegation",
    stem: "A nurse inadvertently administers 10 units of regular insulin instead of the prescribed 5 units to a client with diabetes mellitus. Upon realizing the error 10 minutes later, the client appears asymptomatic with a blood glucose of 6.2 mmol/L (112 mg/dL). Which action aligns with the ethical principles of Veracity and Non-maleficence?",
    choices: [
      {
        id: "a",
        text: "Assess the client, monitor capillary blood glucose frequently, notify the physician immediately, inform the client honestly, provide fast-acting carbohydrates, and document the incident objectively",
      },
      {
        id: "b",
        text: "Conceal the error and withhold the next scheduled dose of insulin to balance out the cumulative daily dose",
      },
      {
        id: "c",
        text: "Wait silently to see if the client develops diaphoresis and tremors before taking any clinical action",
      },
      {
        id: "d",
        text: "Alter the medication administration record to reflect 5 units to protect the nurse's employment record from disciplinary inquiry",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Veracity is the obligation to tell the truth and avoid deception; Non-maleficence is the duty to prevent harm. When a medication error occurs, the nurse's first duty is client safety (frequent monitoring, providing oral glucose as ordered/protocol, physician notification) and honest disclosure to both the clinical team and the client. Falsifying documentation (d), concealing the error (b), or waiting for symptomatic hypoglycemic brain injury (c) violates professional ethics, medical candor, and criminal law.",
    strategy: "Medication error protocol: Prioritize client safety, notify provider, practice veracity (honest disclosure), and document objectively. Never conceal or falsify records.",
    difficulty: "easy",
    tags: ["professionalism", "veracity", "non-maleficence", "medication-error", "candour"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-006",
    categorySlug: "leadership-delegation",
    stem: "A staff nurse caring for a comatose client with multi-organ failure and terminal metastatic cancer experiences profound moral distress because the attending team continues painful invasive procedures despite prior documented advance directives expressing wishes for comfort care only. What is the most appropriate professional action for the nurse to take?",
    choices: [
      {
        id: "a",
        text: "Unplug the client's mechanical ventilator unilaterally to end the client's suffering without informing anyone",
      },
      {
        id: "b",
        text: "Consult the hospital ethics committee, present the documented advance directive to the care team, and advocate for an interdisciplinary palliative care conference",
      },
      {
        id: "c",
        text: "Abandon the shift immediately without handing over care to protest the medical decisions",
      },
      {
        id: "d",
        text: "Complain about the medical team's lack of ethics on public social media forums to rally community pressure",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Moral distress occurs when a healthcare professional knows the ethically correct action but feels powerless to act due to systemic or institutional constraints. Constructive resolution involves utilizing established institutional mechanisms: engaging the hospital ethics committee, reviewing and advocating for the client's documented advance directives, and requesting an interdisciplinary conference including palliative specialists and the family. Euthanasia/unilateral withdrawal without legal orders (a) is illegal homicide; abandoning a shift (c) constitutes patient abandonment; public social media venting (d) breaches confidentiality and professional codes.",
    strategy: "Managing moral distress: Utilize institutional ethics committees and interprofessional case conferences to advocate for client advance directives.",
    difficulty: "medium",
    tags: ["professionalism", "moral-distress", "ethics-committee", "advance-directives", "palliative-care"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-007",
    categorySlug: "leadership-delegation",
    stem: "In a medical malpractice lawsuit against a registered nurse, the plaintiff alleges negligent post-operative care following an orthopedic surgery. To establish civil liability for nursing malpractice in a court of law, which four legal elements must the plaintiff prove?",
    choices: [
      {
        id: "a",
        text: "Intent, malice, criminal record, and medical expenses",
      },
      {
        id: "b",
        text: "Informed consent, written contract, bad outcome, and high hospital fees",
      },
      {
        id: "c",
        text: "Duty of care, Breach of duty, Causation (proximate cause), and Actual damages (injury)",
      },
      {
        id: "d",
        text: "Assault, battery, slander, and emotional distress",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The four essential legal elements of nursing malpractice (professional negligence) are: 1) Duty of care (a legal obligation to adhere to a standard of care created by the nurse-client relationship); 2) Breach of duty (failure to meet the accepted standard of care); 3) Causation/Proximate cause (a direct causal link showing that the breach caused the harm); and 4) Actual damages/injury (measurable physical, emotional, or financial harm). Malice or intent (a) are elements of intentional torts or crimes, not negligence. An unfortunate outcome without a breach of duty (b) does not constitute malpractice.",
    strategy: "Remember the 4 D's of malpractice: Duty, Dereliction (Breach), Direct cause (Causation), and Damage (Injury).",
    difficulty: "medium",
    tags: ["professionalism", "malpractice", "negligence", "legal-nursing", "standards-of-care"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-008",
    categorySlug: "leadership-delegation",
    stem: "A registered nurse delegates the task of obtaining hourly blood glucose measurements for a client on an intravenous insulin infusion to an experienced healthcare assistant (HCA). Two hours later, the client suffers severe hypoglycemia and loses consciousness because the HCA failed to check the blood glucose. Regarding professional accountability, which statement is legally and ethically true?",
    choices: [
      {
        id: "a",
        text: "The registered nurse has zero responsibility because the task was completely transferred to the assistant",
      },
      {
        id: "b",
        text: "The hospital CEO is the sole person accountable for any untoward event occurring inside the facility",
      },
      {
        id: "c",
        text: "The client is primarily at fault for failing to notify the staff when early symptoms of hunger appeared",
      },
      {
        id: "d",
        text: "The registered nurse retains overall accountability for supervising the delegated task, ensuring timely execution, and evaluating client outcomes",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "A core tenet of nursing delegation is that while authority and responsibility for carrying out a task can be delegated to another worker, professional accountability for the overall outcome of nursing care cannot be delegated away. The delegating nurse remains legally and professionally accountable for appropriate delegation (assessing competency, communicating clearly, supervising, and timely follow-up/evaluation). Shifting 100% of blame to the assistant (a), the CEO (b), or the victim (c) ignores statutory professional accountability.",
    strategy: "Delegation law: Responsibility can be delegated, but professional accountability always remains with the registered nurse.",
    difficulty: "easy",
    tags: ["professionalism", "accountability", "delegation", "supervision", "legal-duty"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-009",
    categorySlug: "leadership-delegation",
    stem: "A physician writes a telephone order for '100 mg IV digoxin STAT' for a client in atrial fibrillation. The nurse recognizes that this dosage is roughly 400 times the standard therapeutic dose (0.25 mg). The nurse administers the 100 mg dose as written, and the client dies of digoxin toxicity. What is the nurse's legal liability?",
    choices: [
      {
        id: "a",
        text: "The nurse is personally legally liable for malpractice because a licensed nurse has an independent professional duty to question and withhold unsafe, lethal prescriptions",
      },
      {
        id: "b",
        text: "The nurse has complete immunity because nurses are legally obligated to obey all written physician orders blindly",
      },
      {
        id: "c",
        text: "Only the hospital pharmacy is liable because pharmacists dispense all floor medications",
      },
      {
        id: "d",
        text: "The nurse is immune under the doctrine of respondeat superior since the doctor is the captain of the ship",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "A registered nurse is an autonomous licensed professional, not an agent who blindly executes orders. Under the law and nursing practice acts, a nurse has an independent legal and ethical duty to protect client safety, which includes recognizing lethal or unreasonable medication doses, withholding them, clarifying with the prescriber, and escalating up the chain of command if necessary. Administering a patently lethal order makes the nurse personally liable for professional negligence and wrongful death. The 'captain of the ship' doctrine (b and d) does not protect nurses from individual accountability for gross clinical errors.",
    strategy: "Legal rule: Licensed nurses are independently accountable for every medication they administer. Blindly following an obviously unsafe physician order results in nurse malpractice liability.",
    difficulty: "hard",
    tags: ["professionalism", "independent-liability", "medication-safety", "legal-precedent", "malpractice"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-010",
    categorySlug: "leadership-delegation",
    stem: "A registered nurse is asked by a surgeon to witness a client's signature on a consent form for an elective laparoscopic cholecystectomy. What is the legal scope of the nurse's role when witnessing an informed consent document?",
    choices: [
      {
        id: "a",
        text: "Explaining the surgical risks, potential benefits, alternative medical therapies, and answering all surgical procedural questions",
      },
      {
        id: "b",
        text: "Confirming that the client is competent, that the signature is authentic, and that the client gave consent voluntarily without coercion",
      },
      {
        id: "c",
        text: "Guaranteeing to the client that no complications or surgical errors will occur during the procedure",
      },
      {
        id: "d",
        text: "Signing as the legal surrogate decision-maker if the client expresses hesitation or doubt about the operation",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "When witnessing a consent form, the nurse's legal responsibility is limited to three specific elements: 1) confirming the client is mentally competent to sign; 2) verifying the authenticity of the signature; and 3) verifying that consent was given voluntarily without coercion. Explaining the surgical procedure, risks, benefits, and alternatives (a) is the non-delegable legal responsibility of the healthcare provider performing the surgery (the surgeon). The nurse never guarantees outcomes (c) and cannot sign as a surrogate (d). If the client does not understand the surgery, the nurse must notify the surgeon to return and provide further explanation before signing.",
    strategy: "Informed consent rule: The physician/surgeon explains risks, benefits, and alternatives. The nurse witnesses the signature, verifies competence, and ensures voluntary consent.",
    difficulty: "medium",
    tags: ["professionalism", "informed-consent", "witnessing", "patient-advocacy", "legal-duty"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-011",
    categorySlug: "leadership-delegation",
    stem: "A popular political figure is admitted to the intensive care unit following a motor vehicle collision. A staff nurse working in the outpatient clinic on the ground floor logs into the hospital's electronic health record (EHR) using their personal credentials to read the politician's trauma scans and laboratory results out of personal curiosity. How should this action be evaluated?",
    choices: [
      {
        id: "a",
        text: "Acceptable practice because all hospital staff are bound by general employee confidentiality agreements anyway",
      },
      {
        id: "b",
        text: "Acceptable educational practice provided the nurse does not share the information with news journalists",
      },
      {
        id: "c",
        text: "An intentional violation of data privacy laws and professional ethics that constitutes gross misconduct subject to immediate termination and regulatory sanction",
      },
      {
        id: "d",
        text: "A minor administrative infraction that requires no action unless the client files a formal complaint",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Accessing a client's electronic protected health information (ePHI) without a legitimate clinical 'need to know' directly violates data protection laws (e.g., Ghana Data Protection Act, HIPAA, GDPR) and nursing professional codes of conduct. Clinical staff may only access the records of clients directly assigned to their care. Snooping into records out of curiosity is an intentional privacy breach that triggers automatic audit alerts, immediate disciplinary termination, and referral to the nursing regulatory board for professional sanctions.",
    strategy: "Data privacy rule: Access patient health records ONLY when directly involved in their clinical care ('need-to-know' basis). Snooping out of curiosity is illegal.",
    difficulty: "easy",
    tags: ["professionalism", "confidentiality", "data-protection", "hipaa", "ehr-security"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-012",
    categorySlug: "leadership-delegation",
    stem: "A 70-year-old alert client diagnosed with mild cognitive impairment but intact decision-making capacity states firmly to the nurse, 'I want to go home with visiting nurse support. I do not want to go to a nursing home.' The client's adult children demand that the nurse disregard the client's wishes and initiate immediate nursing home placement papers. What is the nurse's role as a patient advocate?",
    choices: [
      {
        id: "a",
        text: "Follow the children's instructions because adult children automatically possess supreme legal authority over elderly parents",
      },
      {
        id: "b",
        text: "Sedate the client to prevent resistance and coordinate the nursing home transfer smoothly",
      },
      {
        id: "c",
        text: "Refuse to speak with either the client or the family until a formal court guardianship trial occurs",
      },
      {
        id: "d",
        text: "Support the client's autonomous choice, facilitate a family care conference, and collaborate with medical social work to explore home-based support options",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Patient advocacy is a cornerstone of professional nursing practice. The nurse must defend the client's right to self-determination and voice their preferences when capable of expressing them, regardless of family pressure. Having mild impairment does not strip an individual of legal competence to choose their living arrangements. The nurse advocates for the client by organizing a multidisciplinary family meeting and coordinating safe home health services. Assuming family supremacy (a) or chemically restraining the client (b) violates fundamental human rights and professional codes.",
    strategy: "Advocacy rule: The nurse advocates for the client's expressed wishes and autonomy, not the family's convenience or desires.",
    difficulty: "medium",
    tags: ["professionalism", "patient-advocacy", "autonomy", "gerontology", "patient-rights"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-013",
    categorySlug: "leadership-delegation",
    stem: "While reviewing paper medical charts at 14:00, a nurse realizes that an intramuscular analgesic injection administered at 08:30 was never charted in the client's progress notes. Which method of correcting this omission adheres to legal documentation standards?",
    choices: [
      {
        id: "a",
        text: "Write a 'Late Entry' with the current date and time (14:00), clearly identify the actual administration time (08:30), document the medication and dose objectively, and sign the entry",
      },
      {
        id: "b",
        text: "Squeeze the documentation into the margin next to the 08:30 entries using microscopic handwriting to make it appear contemporaneous",
      },
      {
        id: "c",
        text: "Use white correction fluid to erase another nurse's entry and write the analgesic record over it",
      },
      {
        id: "d",
        text: "Discard the chart page and re-copy the entire shift notes from memory to hide the omission",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Legal documentation standards require that records are accurate, contemporaneous, and unadulterated. When charting is omitted, the nurse must record a 'Late Entry'. The entry must state the current date and time of writing, reference the exact time the event occurred ('Late entry for 08:30: Administered morphine 5 mg IM...'), record factual clinical details, and be signed with professional credentials. Squeezing notes into margins (b), using white correction fluid (c), or recreating chart pages (d) are considered fraudulent record tampering in court and can lead to criminal charges and license suspension.",
    strategy: "Legal documentation: When adding omitted information, label it as a 'Late Entry' with current date/time, reference the event time, and sign. Never erase, squeeze, or white-out.",
    difficulty: "easy",
    tags: ["professionalism", "documentation", "late-entry", "legal-records", "charting"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-014",
    categorySlug: "leadership-delegation",
    stem: "A post-operative client falls in the bathroom while attempting to ambulate unassisted. The nurse assists the client back to bed, completes a thorough head-to-toe physical assessment, and notifies the physician. When documenting the event and filing an incident/variance report, which nursing action is legally and professionally correct?",
    choices: [
      {
        id: "a",
        text: "Document in the client's official medical record: 'Incident report filed with hospital risk management committee due to patient fall.'",
      },
      {
        id: "b",
        text: "Record the objective facts of the event, assessment findings, and interventions in the medical record, and complete the incident report as an internal administrative document without mentioning it in the chart",
      },
      {
        id: "c",
        text: "Place a carbon copy of the completed incident report into the client's bedside binder for family review",
      },
      {
        id: "d",
        text: "Omit any mention of the fall from the client's medical chart if no visible laceration or fracture occurred",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "An incident report (variance/occurrence report) is an internal administrative quality improvement and risk management tool designed to identify system defects; it is protected under institutional quality assurance legal privilege. Documenting in the client's medical chart that an incident report was completed (a) or filing a copy in the medical record (c) can make the internal investigative document discoverable in a malpractice lawsuit. The nurse documents objective clinical facts (fall, assessment, physician notification, vitals, interventions) in the chart and submits the incident report separately. Concealing the fall (d) is illegal fraud.",
    strategy: "Documentation standard: Document objective facts in the client's medical record. NEVER document that an incident report was completed in the chart.",
    difficulty: "medium",
    tags: ["professionalism", "incident-reporting", "risk-management", "documentation", "legal-nursing"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-015",
    categorySlug: "leadership-delegation",
    stem: "A client who underwent a subtotal thyroidectomy 6 hours ago develops increasing stridor, respiratory rate of 34 breaths/min, and severe neck swelling. The bedside nurse calls the surgical resident twice over 20 minutes, but the resident dismisses the concern and refuses to evaluate the client. What is the nurse's immediate professional and legal responsibility?",
    choices: [
      {
        id: "a",
        text: "Accept the resident's judgment and wait until morning surgical rounds to reassess the airway",
      },
      {
        id: "b",
        text: "Leave the client unattended to search the hospital corridors for the resident",
      },
      {
        id: "c",
        text: "Immediately escalate up the administrative and clinical chain of command (contact the attending surgeon, rapid response team, and charge nurse/nursing supervisor) to secure urgent airway intervention",
      },
      {
        id: "d",
        text: "Administer an unprescribed intravenous sedative to calm the client's breathing efforts",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "When a client is deteriorating and the primary provider fails or refuses to respond appropriately, the nurse has an affirmative legal and professional duty to activate the organizational chain of command. Post-thyroidectomy neck hematoma and stridor represent an imminent, life-threatening airway emergency. The nurse must call the emergency rapid response team, contact the attending surgeon or surgical chief directly, and notify the nursing supervisor. Waiting for rounds (a) or giving sedatives that cause fatal respiratory arrest (d) is gross clinical malpractice.",
    strategy: "Chain of command rule: When a client is deteriorating and a physician fails to respond, escalate up the chain of command immediately. Never abandon a compromised airway.",
    difficulty: "medium",
    tags: ["professionalism", "chain-of-command", "escalation", "airway-emergency", "patient-advocacy"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-016",
    categorySlug: "leadership-delegation",
    stem: "A nurse is administering morning medications. A competent client with full decision-making capacity states, 'I do not want that injection; stop and do not touch me!' The nurse responds, 'If you do not cooperate, I will have the security guards hold you down,' and forcibly administers the injection into the client's deltoid. Which intentional torts has the nurse committed?",
    choices: [
      {
        id: "a",
        text: "Defamation and slander",
      },
      {
        id: "b",
        text: "Invasion of privacy and libel",
      },
      {
        id: "c",
        text: "Breach of contract and strict liability",
      },
      {
        id: "d",
        text: "Assault and battery",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Assault is an intentional act that creates an apprehension or fear of immediate harmful or offensive contact (e.g., threatening the client with security guards to force compliance). Battery is the actual unauthorized, intentional, offensive, or harmful physical contact with another person without consent (e.g., forcibly administering an intramuscular injection over a competent client's explicit refusal). Forcing medical treatment on a competent individual without legal/emergency authorization constitutes both civil and criminal battery. Defamation (a) involves harming reputation; libel (b) is written defamation.",
    strategy: "Legal tort definitions: Assault is the threat that causes apprehension of harm; Battery is the actual unauthorized physical contact.",
    difficulty: "medium",
    tags: ["professionalism", "intentional-torts", "assault-and-battery", "legal-nursing", "patient-rights"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-017",
    categorySlug: "leadership-delegation",
    stem: "To prevent an alert, elderly client who is mildly restless from getting out of bed without assistance, a nurse raises all four bedrails, ties the client's wrists to the bedframe with gauze bandages, and places a bedside table tightly across the bed, all without a physician's order or clinical emergency indication. Which legal tort has been committed?",
    choices: [
      {
        id: "a",
        text: "False imprisonment",
      },
      {
        id: "b",
        text: "Malice aforethought",
      },
      {
        id: "c",
        text: "Involuntary manslaughter",
      },
      {
        id: "d",
        text: "Breach of confidentiality",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "False imprisonment is the unlawful intentional confinement, restraint, or restriction of an individual's freedom of movement without legal authorization, clinical justification, or consent. Applying physical restraints (or four raised side rails to prevent exit) without clinical necessity, less restrictive alternatives, or a valid time-limited provider order constitutes false imprisonment. Restraints may only be used when an imminent risk of physical harm to self or others exists, and they require strict protocols, ongoing documentation, and timely orders.",
    strategy: "Restraint law: Unlawfully restraining a client or restricting their physical freedom without justification or orders constitutes False Imprisonment.",
    difficulty: "easy",
    tags: ["professionalism", "false-imprisonment", "restraints", "intentional-torts", "patient-rights"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-018",
    categorySlug: "leadership-delegation",
    stem: "During a pediatric wellness examination, a nurse observes multiple circular burn marks resembling cigarette burns on a 3-year-old child's back, along with unexplained bilateral spiral fractures of different healing stages on X-ray. The parent claims the injuries occurred from 'falling down carpeted stairs.' What is the nurse's statutory legal obligation?",
    choices: [
      {
        id: "a",
        text: "Confront the parent angrily in the clinic waiting area and demand an immediate signed confession",
      },
      {
        id: "b",
        text: "Immediately report the suspected child abuse to child protective services and law enforcement authorities as a statutory mandatory reporter",
      },
      {
        id: "c",
        text: "Remain silent to preserve the parent's confidentiality under the patient privacy charter",
      },
      {
        id: "d",
        text: "Wait six months until the next scheduled vaccination visit to see if additional injuries occur",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Healthcare professionals are legally designated mandatory reporters under national child protection statutes (such as the Children's Act). When a nurse has reasonable cause to suspect child abuse or neglect based on clinical findings (such as patterned burns and multiple fractures in varying stages of healing incompatible with the reported history), the nurse is legally mandated to report immediately to child welfare authorities or police. Good-faith reporting is legally protected from civil liability. Maintaining confidentiality (c) does not apply in child abuse; delay (d) endangers the child's life.",
    strategy: "Mandatory reporting: Nurses are legally obligated to report suspected child or elder abuse immediately. Patient confidentiality does not protect abuse.",
    difficulty: "easy",
    tags: ["professionalism", "mandatory-reporting", "child-abuse", "pediatrics", "statutory-duty"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-019",
    categorySlug: "leadership-delegation",
    stem: "A nurse notices that a colleague on the night shift has slurred speech, an unsteady gait, smells faintly of alcohol, and has repeatedly signed out intravenous opioids from the automated dispensing cabinet for clients who later report receiving no pain relief. What is the nurse's immediate priority professional duty?",
    choices: [
      {
        id: "a",
        text: "Ignore the signs because confronting a peer harms team morale and nursing solidarity",
      },
      {
        id: "b",
        text: "Offer the colleague strong black coffee and tell them to take a nap in the staff breakroom",
      },
      {
        id: "c",
        text: "Immediately notify the charge nurse or nursing supervisor to remove the colleague from client care and ensure client safety",
      },
      {
        id: "d",
        text: "Search the colleague's personal locker and car trunk without their knowledge to gather forensic evidence",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Client safety is the nurse's paramount professional and ethical responsibility. When a colleague exhibits signs of chemical impairment on duty, the nurse has an urgent ethical and legal obligation to report the behavior immediately to the supervisor or charge nurse so that the impaired individual is safely relieved of client care duties. Suspected drug diversion also requires formal investigation and drug screening according to institutional policy. Covering up (b), looking away (a), or conducting private vigilante searches (d) enables ongoing endangerment of vulnerable clients.",
    strategy: "Impaired nurse protocol: Protect client safety first by immediately reporting signs of impairment to the nursing supervisor.",
    difficulty: "easy",
    tags: ["professionalism", "impaired-nurse", "substance-abuse", "client-safety", "ethics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-020",
    categorySlug: "leadership-delegation",
    stem: "A newly graduated registered nurse takes a selfie on a clinical pediatric ward showing a smiling child in the background receiving chemotherapy and posts it to a public social media page with the caption: 'So blessed to care for my brave little cancer warrior on 4-West today! #nurselife #oncology'. No name is written in the post. How does professional regulation view this behavior?",
    choices: [
      {
        id: "a",
        text: "An inspiring act of health promotion that should be commended by the hospital public relations team",
      },
      {
        id: "b",
        text: "Completely acceptable under privacy laws since the child's full medical record number was omitted",
      },
      {
        id: "c",
        text: "A permissible action if the nurse deletes the post within 24 hours before many followers see it",
      },
      {
        id: "d",
        text: "A severe breach of client confidentiality, privacy, and professional boundaries that violates regulatory standards and warrants disciplinary action",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Posting photographs, videos, or identifiable descriptions of clients on personal social media accounts—regardless of intent or whether the client's name is explicitly stated—is a flagrant breach of privacy laws (HIPAA, Data Protection Act) and nursing regulatory standards. The child's image and hospital unit constitute personally identifiable protected health information. Regulatory councils (NMC, NCSBN, State Boards) impose severe disciplinary penalties, including suspension or revocation of registration, for social media boundary violations. Deleting the post later (c) does not erase the violation.",
    strategy: "Social media ethics: Never photograph clients or post any clinical client information on social media. Zero exceptions.",
    difficulty: "easy",
    tags: ["professionalism", "social-media", "confidentiality", "professional-boundaries", "regulation"],
    isFree: true,
  },
];
