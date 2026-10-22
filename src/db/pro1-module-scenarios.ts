import type { AuthoredQuestion } from "./authored-bank";

export const PRO1_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-PRO1-001",
    categorySlug: "leadership-delegation",
    stem: "A registered general nurse realizes that their professional practicing licence and PIN from the regulatory nursing council expired two months ago. The nurse is currently scheduled to manage a busy medical ward shift. What is the nurse's immediate legal and professional obligation?",
    choices: [
      {
        id: "a",
        text: "Carry on working the rota as normal while the council's annual audit cycle comes round",
      },
      {
        id: "b",
        text: "Notify the manager, stop practising until the licence is renewed, and expedite renewal",
      },
      {
        id: "c",
        text: "Chart under a colleague's registration PIN on the electronic medication record until renewal",
      },
      {
        id: "d",
        text: "Do only non-invasive tasks, and hand all intravenous medicines to the student nurses",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — \"Notify the manager, stop practising until the licence is renewed, and expedite renewal\" Practicing nursing without an active, unencumbered professional licence violates national nursing statutory laws and professional regulations (such as the Health Professions Regulatory Bodies Act and Nursing & Midwifery Council standards). Practicing with an expired licence constitutes illegal, unauthorized practice, exposing the individual to criminal penalties, disciplinary sanctions, and loss of professional indemnity coverage. The nurse must notify their supervisor immediately and step down from clinical practice until the licence is restored. Continuing to practice, charting under a colleague's credentials, or practicing selectively are fraudulent, unlawful, and breach professional standards. Why the other options fail: option a leaves the nurse in unlawful practice. Option c uses another person's registration, which is fraudulent. Option d still delivers nursing care without a licence, whatever the task.",
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
        text: "Take routine baseline observations once the initial assessment has been documented",
      },
      {
        id: "b",
        text: "Help the client with perineal hygiene and change the bed linen after the ward round",
      },
      {
        id: "c",
        text: "Carry a clean urine specimen bottle down to the hospital pathology laboratory",
      },
      {
        id: "d",
        text: "The assessment, the care plan and the evaluation of the response to nitroglycerin",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — \"The assessment, the care plan and the evaluation of the response to nitroglycerin\" According to professional practice acts and regulatory delegation guidelines, the registered nurse cannot delegate tasks that require specialized nursing knowledge, clinical judgment, comprehensive assessment, care planning, or clinical evaluation (the 'E-A-T' principle: Evaluate, Assess, Teach). An unstable client requires ongoing registered nurse assessment and titration of high-alert cardiovascular medications. Routine vital sign checks on stable clients, personal hygiene, and specimen transport can be safely delegated to assistive personnel within their designated job descriptions. Why the other options fail: option a is routine work that can be delegated once the assessment is written. Options b and c are personal care and portering tasks that sit within the assistant's role.",
    strategy: "Delegation rule: The RN cannot delegate Assessment, Teaching, or Evaluation (E-A-T) or any care for an unstable, complex client.",
    difficulty: "easy",
    tags: ["professionalism", "delegation", "scope-of-practice", "cadres", "leadership"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PRO1-003",
    categorySlug: "leadership-delegation",
    stem: "A nurse is reviewing regulatory requirements for annual licence renewal and professional re-registration. Which statement accurately describes the core purpose and requirement of Continuous Professional Development (CPD)?",
    choices: [
      {
        id: "a",
        text: "An optional academic pursuit for nurses who hope to become university lecturers",
      },
      {
        id: "b",
        text: "A mandatory requirement for lifelong learning, with verified competence credits",
      },
      {
        id: "c",
        text: "Awarded automatically after a number of consecutive years of clinical employment",
      },
      {
        id: "d",
        text: "Intended to replace the undergraduate pre-service nursing curriculum entirely",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — \"A mandatory requirement for lifelong learning, with verified competence credits\" Continuous Professional Development (CPD) is a statutory regulatory mandate, and in Ghana the NMC licence and PIN run for 12 months and are renewed by 31 January each year against a CPD credit requirement established by nursing regulatory councils (including the Ghana NMC, UK NMC, and US State Boards). Its primary mission is public protection by ensuring that registered practitioners continuously maintain, update, and enhance clinical knowledge, evidence-based skills, and professional ethics throughout their careers. It is not optional, cannot be acquired passively through tenure alone, and does not replace pre-service training. Why the other options fail: option a makes continuing development optional. Option c awards credit for time served without any learning. Option d confuses professional development with pre-registration training.",
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
        text: "Autonomy",
      },
      {
        id: "b",
        text: "Paternalism",
      },
      {
        id: "c",
        text: "Beneficence",
      },
      {
        id: "d",
        text: "Non-maleficence",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — \"Autonomy\" Autonomy is the ethical and legal principle that recognizes an individual's right to self-determination, bodily integrity, and independent decision-making regarding their own medical care, provided they possess decision-making capacity. A competent adult has the absolute legal and ethical right to refuse any medical treatment, even life-sustaining interventions like blood transfusions. Paternalism overrides client choices for their perceived good. Beneficence promotes well-being, but does not legally or ethically supersede a competent client's autonomous refusal. Non-maleficence means doing no harm. Why the other options fail: option b overrides the client's choice for what others judge to be their good. Option c is the duty to promote welfare, and it does not override a competent refusal. Option d is the duty not to harm, which here means informing and supporting the decision.",
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
        text: "Conceal the error and withhold the next scheduled dose to balance the day's total",
      },
      {
        id: "b",
        text: "Wait quietly to see whether the client develops sweating and tremor before acting",
      },
      {
        id: "c",
        text: "Change the medication record to five units before anyone reviews the chart",
      },
      {
        id: "d",
        text: "Assess and monitor, tell the prescriber, tell the client, treat and document",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — \"Assess and monitor, tell the prescriber, tell the client, treat and document\" Veracity is the obligation to tell the truth and avoid deception; Non-maleficence is the duty to prevent harm. When a medication error occurs, the nurse's first duty is client safety (frequent monitoring, providing oral glucose as ordered/protocol, physician notification) and honest disclosure to both the clinical team and the client. Falsifying documentation, concealing the error, or waiting for symptomatic hypoglycemic brain injury violates professional ethics, medical candor, and criminal law. Why the other options fail: option a hides the error and unbalances the day's dosing. Option b waits for harm instead of preventing it. Option c falsifies the record, which is a separate offence.",
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
        text: "Turn off the ventilator unilaterally to end the client's suffering, without telling anyone",
      },
      {
        id: "b",
        text: "Walk off the shift at once without handing over care, to protest the decisions",
      },
      {
        id: "c",
        text: "Post about the team's ethics on public social media to rally community pressure",
      },
      {
        id: "d",
        text: "Consult the ethics committee, present the directive and request a palliative conference",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — \"Consult the ethics committee, present the directive and request a palliative conference\" Moral distress occurs when a healthcare professional knows the ethically correct action but feels powerless to act due to systemic or institutional constraints. Constructive resolution involves utilizing established institutional mechanisms: engaging the hospital ethics committee, reviewing and advocating for the client's documented advance directives, and requesting an interdisciplinary conference including palliative specialists and the family. Euthanasia/unilateral withdrawal without legal orders is illegal homicide; abandoning a shift constitutes patient abandonment; public social media venting breaches confidentiality and professional codes. Why the other options fail: option a withdraws treatment without any lawful authority. Option b abandons the client. Option c breaches confidentiality and the professional code.",
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
        text: "Duty, breach of duty, causation and actual damages",
      },
      {
        id: "b",
        text: "Intent, malice, a criminal record and the medical expenses incurred",
      },
      {
        id: "c",
        text: "Informed consent, a written contract, a bad outcome and high hospital fees",
      },
      {
        id: "d",
        text: "Assault, battery, slander and the emotional distress that followed",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — \"Duty, breach of duty, causation and actual damages\" The four essential legal elements of nursing malpractice (professional negligence) are: 1) Duty of care (a legal obligation to adhere to a standard of care created by the nurse-client relationship); 2) Breach of duty (failure to meet the accepted standard of care); 3) Causation/Proximate cause (a direct causal link showing that the breach caused the harm); and 4) Actual damages/injury (measurable physical, emotional, or financial harm). Malice or intent are elements of intentional torts or crimes, not negligence. An unfortunate outcome without a breach of duty does not constitute malpractice. Why the other options fail: option b lists criminal and financial elements. Option c confuses consent with negligence, since a bad outcome alone is not malpractice. Option d lists intentional torts.",
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
        text: "The registered nurse bears no responsibility, because the task was fully transferred",
      },
      {
        id: "b",
        text: "The hospital chief executive is solely accountable for anything that happens inside it",
      },
      {
        id: "c",
        text: "The registered nurse keeps accountability for supervising and evaluating the task",
      },
      {
        id: "d",
        text: "The client is mainly at fault for not reporting the early symptoms of hunger",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — \"The registered nurse keeps accountability for supervising and evaluating the task\" A core tenet of nursing delegation is that while authority and responsibility for carrying out a task can be delegated to another worker, professional accountability for the overall outcome of nursing care cannot be delegated away. The delegating nurse remains legally and professionally accountable for appropriate delegation (assessing competency, communicating clearly, supervising, and timely follow-up/evaluation). Shifting 100% of blame to the assistant, the CEO, or the victim ignores statutory professional accountability. Why the other options fail: option a mistakes delegation for a transfer of accountability. Option b misstates who carries professional responsibility. Option d blames the client for a failure of supervision.",
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
        text: "The nurse is immune, because nurses are legally obliged to obey written orders blindly",
      },
      {
        id: "b",
        text: "Only the hospital pharmacy is liable, because the pharmacist dispenses every ward medicine and checks every dose before it leaves",
      },
      {
        id: "c",
        text: "The nurse is immune under respondeat superior, since the doctor is captain of the ship",
      },
      {
        id: "d",
        text: "The nurse is personally liable, because a nurse must question a lethal order and withhold it",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — \"The nurse is personally liable, because a nurse must question a lethal order and withhold it\" A registered nurse is an autonomous licensed professional, not an agent who blindly executes orders. Under the law and nursing practice acts, a nurse has an independent legal and ethical duty to protect client safety, which includes recognizing lethal or unreasonable medication doses, withholding them, clarifying with the prescriber, and escalating up the chain of command if necessary. Administering a patently lethal order makes the nurse personally liable for professional negligence and wrongful death. The 'captain of the ship' doctrine does not protect nurses from individual accountability for gross clinical errors. Why the other options fail: option a assumes that an order indemnifies the nurse. Option b shares liability with the pharmacy but does not remove the nurse's. Option c does not protect gross error.",
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
        text: "Explain the risks, the benefits and the alternatives, and answer the surgical questions",
      },
      {
        id: "b",
        text: "Guarantee to the client that no complication or surgical error will occur",
      },
      {
        id: "c",
        text: "Confirm competence, the authenticity of the signature and that consent was voluntary",
      },
      {
        id: "d",
        text: "Sign as the surrogate decision-maker if the client hesitates about the operation",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — \"Confirm competence, the authenticity of the signature and that consent was voluntary\" When witnessing a consent form, the nurse's legal responsibility is limited to three specific elements: 1) confirming the client is mentally competent to sign; 2) verifying the authenticity of the signature; and 3) verifying that consent was given voluntarily without coercion. Explaining the surgical procedure, risks, benefits, and alternatives is the non-delegable legal responsibility of the healthcare provider performing the surgery (the surgeon). The nurse never guarantees outcomes and cannot sign as a surrogate. If the client does not understand the surgery, the nurse must notify the surgeon to return and provide further explanation before signing. Why the other options fail: option a is the surgeon's non-delegable duty. Option b is a guarantee that no one can give. Option d makes the nurse the decision-maker, which the witness never is.",
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
        text: "An intentional privacy breach and gross misconduct, with discipline and regulatory referral",
      },
      {
        id: "b",
        text: "Acceptable, because every member of staff signs a general confidentiality agreement on appointment and is therefore covered",
      },
      {
        id: "c",
        text: "Acceptable educational practice, provided the findings are not shared with journalists",
      },
      {
        id: "d",
        text: "A minor administrative infraction that needs no action unless the client complains",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — \"An intentional privacy breach and gross misconduct, with discipline and regulatory referral\" Accessing a client's electronic protected health information (ePHI) without a legitimate clinical 'need to know' directly violates data protection laws (e.g., Ghana Data Protection Act, HIPAA, GDPR) and nursing professional codes of conduct. Clinical staff may only access the records of clients directly assigned to their care. Snooping into records out of curiosity is an intentional privacy breach that triggers automatic audit alerts, immediate disciplinary termination, and referral to the nursing regulatory board for professional sanctions. Why the other options fail: option b ignores the need-to-know rule. Option c treats curiosity as a clinical need. Option d waits for a complaint that privacy law does not require.",
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
        text: "Follow the children's instructions, because adult children hold authority over parents",
      },
      {
        id: "b",
        text: "Support the client's choice, convene a family meeting and arrange home-based support",
      },
      {
        id: "c",
        text: "Sedate the client to prevent resistance and move her to the nursing home smoothly",
      },
      {
        id: "d",
        text: "Refuse to speak to the client or the family until a guardianship hearing is held",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — \"Support the client's choice, convene a family meeting and arrange home-based support\" Patient advocacy is a cornerstone of professional nursing practice. The nurse must defend the client's right to self-determination and voice their preferences when capable of expressing them, regardless of family pressure. Having mild impairment does not strip an individual of legal competence to choose their living arrangements. The nurse advocates for the client by organizing a multidisciplinary family meeting and coordinating safe home health services. Assuming family supremacy or chemically restraining the client violates fundamental human rights and professional codes. Why the other options fail: option a gives the children an authority they do not have. Option c is chemical restraint. Option d abandons the client while a dispute is settled.",
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
        text: "Squeeze the entry into the margin beside the 08:30 notes in tiny handwriting, and date it for the morning",
      },
      {
        id: "b",
        text: "Use correction fluid to erase another nurse's entry and write the dose over it",
      },
      {
        id: "c",
        text: "Write a late entry with the writing time, the actual time, the drug and dose, and sign it",
      },
      {
        id: "d",
        text: "Discard the chart page and rewrite the whole shift's notes from memory",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — \"Write a late entry with the writing time, the actual time, the drug and dose, and sign it\" Legal documentation standards require that records are accurate, contemporaneous, and unadulterated. When charting is omitted, the nurse must record a 'Late Entry'. The entry must state the current date and time of writing, reference the exact time the event occurred ('Late entry for 08:30: Administered morphine 5 mg IM.'), record factual clinical details, and be signed with professional credentials. Squeezing notes into margins, using white correction fluid, or recreating chart pages are considered fraudulent record tampering in court and can lead to criminal charges and license suspension. Why the other options fail: option a makes the note appear contemporaneous when it is not. Option b alters a colleague's entry. Option d destroys the original record.",
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
        text: "Chart that an incident report was filed with the risk management committee after the fall",
      },
      {
        id: "b",
        text: "Document the facts in the record and file the incident report separately",
      },
      {
        id: "c",
        text: "Put a carbon copy of the completed incident report in the client's bedside binder",
      },
      {
        id: "d",
        text: "Leave the fall out of the notes if there was no laceration and no fracture",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — \"Document the facts in the record and file the incident report separately\" An incident report (variance/occurrence report) is an internal administrative quality improvement and risk management tool designed to identify system defects; it is protected under institutional quality assurance legal privilege. Documenting in the client's medical chart that an incident report was completed or filing a copy in the medical record can make the internal investigative document discoverable in a malpractice lawsuit. The nurse documents objective clinical facts (fall, assessment, physician notification, vitals, interventions) in the chart and submits the incident report separately. Concealing the fall is illegal fraud. Why the other options fail: options a and c put the internal report into the clinical record, where it becomes discoverable. Option d conceals an event that the record must show.",
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
        text: "Accept the resident's judgement and wait for the morning surgical round to reassess",
      },
      {
        id: "b",
        text: "Escalate the chain of command: attending surgeon, rapid response, nursing supervisor",
      },
      {
        id: "c",
        text: "Leave the client alone and walk the corridors looking for the resident so the concern can be raised face to face",
      },
      {
        id: "d",
        text: "Give an unprescribed intravenous sedative to calm the client's breathing",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — \"Escalate the chain of command: attending surgeon, rapid response, nursing supervisor\" When a client is deteriorating and the primary provider fails or refuses to respond appropriately, the nurse has an affirmative legal and professional duty to activate the organizational chain of command. Post-thyroidectomy neck hematoma and stridor represent an imminent, life-threatening airway emergency. The nurse must call the emergency rapid response team, contact the attending surgeon or surgical chief directly, and notify the nursing supervisor. Waiting for rounds or giving sedatives that cause fatal respiratory arrest is gross clinical malpractice. Why the other options fail: option a waits on an airway that is closing. Option c abandons a deteriorating client. Option d sedates a client who needs an airway, and does so outside any order.",
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
        text: "Assault and battery",
      },
      {
        id: "b",
        text: "Defamation and slander",
      },
      {
        id: "c",
        text: "Invasion of privacy and libel",
      },
      {
        id: "d",
        text: "Breach of contract and strict liability",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — \"Assault and battery\" Assault is an intentional act that creates an apprehension or fear of immediate harmful or offensive contact (e.g., threatening the client with security guards to force compliance). Battery is the actual unauthorized, intentional, offensive, or harmful physical contact with another person without consent (e.g., forcibly administering an intramuscular injection over a competent client's explicit refusal). Forcing medical treatment on a competent individual without legal/emergency authorization constitutes both civil and criminal battery. Defamation involves harming reputation; libel is written defamation. Why the other options fail: option b concerns reputation and spoken words, not contact. Option c concerns privacy and publication. Option d concerns agreements and product liability.",
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
        text: "Malice aforethought",
      },
      {
        id: "b",
        text: "Involuntary manslaughter",
      },
      {
        id: "c",
        text: "False imprisonment",
      },
      {
        id: "d",
        text: "Breach of confidentiality",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — \"False imprisonment\" False imprisonment is the unlawful intentional confinement, restraint, or restriction of an individual's freedom of movement without legal authorization, clinical justification, or consent. Applying physical restraints (or four raised side rails to prevent exit) without clinical necessity, less restrictive alternatives, or a valid time-limited provider order constitutes false imprisonment. Restraints may only be used when an imminent risk of physical harm to self or others exists, and they require strict protocols, ongoing documentation, and timely orders. Why the other options fail: option a requires an intent to kill. Option b requires a death. Option d concerns information rather than movement.",
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
        text: "Confront the parent angrily in the waiting area and demand a signed confession",
      },
      {
        id: "b",
        text: "Stay silent, to preserve the parent's confidentiality under the privacy charter",
      },
      {
        id: "c",
        text: "Wait six months until the next vaccination visit to see whether more injuries appear",
      },
      {
        id: "d",
        text: "Report at once to child protection and the police, as a mandatory reporter",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — \"Report at once to child protection and the police, as a mandatory reporter\" Healthcare professionals are legally designated mandatory reporters under national child protection statutes (such as the Children's Act). When a nurse has reasonable cause to suspect child abuse or neglect based on clinical findings (such as patterned burns and multiple fractures in varying stages of healing incompatible with the reported history), the nurse is legally mandated to report immediately to child welfare authorities or police. Good-faith reporting is legally protected from civil liability. Maintaining confidentiality does not apply in child abuse; delay endangers the child's life. Why the other options fail: option a risks the child and contaminates any case. Option b treats confidentiality as a shield for abuse, which it is not. Option c leaves the child at risk for half a year.",
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
        text: "Tell the charge nurse at once and remove the colleague from client care",
      },
      {
        id: "b",
        text: "Ignore the signs, because confronting a colleague damages morale and team solidarity",
      },
      {
        id: "c",
        text: "Give the colleague strong coffee and send them for a nap in the staff break room",
      },
      {
        id: "d",
        text: "Search the colleague's locker and car boot without telling them, to find evidence",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — \"Tell the charge nurse at once and remove the colleague from client care\" Client safety is the nurse's paramount professional and ethical responsibility. When a colleague exhibits signs of chemical impairment on duty, the nurse has an urgent ethical and legal obligation to report the behavior immediately to the supervisor or charge nurse so that the impaired individual is safely relieved of client care duties. Suspected drug diversion also requires formal investigation and drug screening according to institutional policy. Covering up, looking away, or conducting private vigilante searches enables ongoing endangerment of vulnerable clients. Why the other options fail: option b leaves impaired practice in place. Option c leaves the colleague in clinical contact and does nothing about the missing opioids. Option d is a search with no authority behind it.",
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
        text: "An inspiring act of health promotion that the hospital press office should commend",
      },
      {
        id: "b",
        text: "Completely acceptable, since the child's record number was not written in the post",
      },
      {
        id: "c",
        text: "A serious confidentiality and boundary breach that warrants disciplinary action",
      },
      {
        id: "d",
        text: "Permissible if the nurse deletes the post within twenty-four hours",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — \"A serious confidentiality and boundary breach that warrants disciplinary action\" Posting photographs, videos, or identifiable descriptions of clients on personal social media accounts—regardless of intent or whether the client's name is explicitly stated—is a flagrant breach of privacy laws (HIPAA, Data Protection Act) and nursing regulatory standards. The child's image and hospital unit constitute personally identifiable protected health information. Regulatory councils (NMC, NCSBN, State Boards) impose severe disciplinary penalties, including suspension or revocation of registration, for social media boundary violations. Deleting the post later does not erase the violation. Why the other options fail: option a ignores consent and the child's privacy. Option b is wrong because the image and the unit identify the child. Option d treats deletion as an undo, when publication has already happened.",
    strategy: "Social media ethics: Never photograph clients or post any clinical client information on social media. Zero exceptions.",
    difficulty: "easy",
    tags: ["professionalism", "social-media", "confidentiality", "professional-boundaries", "regulation"],
    isFree: true,
  },
];
