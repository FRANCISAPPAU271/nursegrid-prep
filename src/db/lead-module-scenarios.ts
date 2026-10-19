import type { AuthoredQuestion } from "./authored-bank";

export const LEAD_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-LEAD-001",
    categorySlug: "leadership-delegation",
    stem: "A registered nurse receives handoff report on four clients at the change of shift. Based on principles of prioritization (ABCs, acute vs chronic, unstable vs stable), which client must the nurse assess first?",
    choices: [
      {
        id: "a",
        text: "A 16-year-old with acute asthma whose wheezing has stopped, who is restless, gasping and unable to speak in sentences",
      },
      {
        id: "b",
        text: "A 58-year-old client with chronic stable angina who reports dull retrosternal discomfort relieved by sublingual nitroglycerin 30 minutes ago",
      },
      {
        id: "c",
        text: "A 42-year-old client with type 1 diabetes whose pre-meal capillary blood glucose is 12.2 mmol/L (220 mg/dL) awaiting scheduled subcutaneous insulin",
      },
      {
        id: "d",
        text: "A 68-year-old client post-operative day 3 from elective knee replacement requesting assistance to walk to the bathroom",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Using the Airway, Breathing, Circulation (ABC) and acute-versus-chronic prioritization frameworks, the client with acute asthma whose wheezing has stopped (the 'silent chest' phenomenon) has impending fatal respiratory failure. The cessation of wheezing in a severely dyspneic, restless asthmatic client reflects severe airway constriction, muscular fatigue, and critical hypoventilation—an immediate airway and breathing emergency requiring rapid bronchodilator nebulization, oxygen, and preparation for emergent endotracheal intubation. The other three clients represent chronic stable conditions or non-immediate needs. Why the other options fail: option b describes angina that has already been relieved, which is a stable pattern rather than the most urgent problem. Option c is a glucose of 12.2 mmol/L awaiting a scheduled dose, high but not immediately life-threatening. Option d is a routine request for help to walk on post-operative day 3. None of the three carries an airway or breathing threat.",
    strategy: "Prioritization rule: Acute ABC threats outrank chronic stable conditions. A silent chest in severe asthma indicates imminent asphyxiation and respiratory arrest.",
    difficulty: "easy",
    tags: ["leadership", "prioritization", "abcs", "asthma", "clinical-judgement"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-002",
    categorySlug: "leadership-delegation",
    stem: "A nurse notices that a post-operative surgical client's respiratory rate has climbed from 16 to 30 breaths/min over 2 hours, heart rate is 118 beats/min, and the client has become acutely restless and diaphoretic. The nurse calls the on-call surgical registrar. Which structured communication tool should the nurse use to convey this physiological deterioration effectively?",
    choices: [
      {
        id: "a",
        text: "A narrative account of the shift so far, given in the order the events happened, and ending with the vital signs",
      },
      {
        id: "b",
        text: "SBAR: state the respiratory compromise, the surgical history, the vital-sign trend, and a clear request for immediate review",
      },
      {
        id: "c",
        text: "A handwritten memo left in the registrar's pigeonhole, to be read at the start of the next working day",
      },
      {
        id: "d",
        text: "A message passed on through a colleague, asking the registrar to call the ward when it is convenient",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "SBAR (Situation, Background, Assessment, Recommendation) is the validated, standard healthcare communication framework designed to deliver critical, concise, and actionable clinical information between professionals during urgent clinical deterioration: (1) Situation: Introduce oneself, client, unit, and the immediate problem (e.g., acute tachypnoea and tachycardia); (2) Background: Relevant admission diagnosis, surgical date, and baseline status; (3) Assessment: Current objective findings, vital sign trends, and clinical judgment; and (4) Recommendation: Explicit request for action (e.g., 'I need you to evaluate this client at the bedside immediately'). Why the other options fail: option a narrates the shift in chronological order and buries the vital signs at the end, which is the opposite of what an urgent call needs. Option c puts the request in writing for the next day, which is useless in a deterioration happening now. Option d hands the urgency to a third party and asks for a call at the registrar's convenience.",
    strategy: "Clinical escalation: SBAR framework standardizes urgent communication. Rising respiratory rate is the earliest and most sensitive predictor of arrest.",
    difficulty: "easy",
    tags: ["leadership", "sbar", "clinical-escalation", "deteriorating-patient", "communication"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-003",
    categorySlug: "leadership-delegation",
    stem: "A registered nurse (RN) plans the shift delegation for an Unlicensed Assistive Personnel (UAP / Healthcare Assistant). According to the Five Rights of Delegation and nursing scope of practice, which task is appropriate for the RN to delegate to the UAP?",
    choices: [
      {
        id: "a",
        text: "Performing the initial comprehensive admission assessment on a newly arrived heart failure client",
      },
      {
        id: "b",
        text: "Providing discharge dietary teaching regarding a low-sodium diet to a diabetic hypertensive client",
      },
      {
        id: "c",
        text: "Measure and record routine vital signs and the volume drained from an indwelling catheter in a stable client",
      },
      {
        id: "d",
        text: "Evaluating the efficacy of intravenous morphine administered 30 minutes ago for severe acute pancreatitis",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The registered nurse cannot delegate tasks requiring nursing clinical judgment, critical thinking, or professional evaluation. The classic 'E-A-T' mnemonic reminds nurses that the RN must never delegate: Evaluation, Assessment, or Teaching. Collecting routine objective data (e.g., vital signs, measuring urine output from a drainage bag) and assisting with basic Activities of Daily Living on stable clients are within the UAP's role. Performing admission assessments, formulating nursing care plans, client education, and evaluating medication efficacy are exclusive legal responsibilities of the licensed professional nurse. Why the other options fail: option a is an initial assessment, which only the registered nurse can perform. Option b is teaching, which the nurse cannot delegate. Option d is evaluation of a drug's effect, which requires nursing judgement about efficacy. All three fall under the assess-evaluate-teach exclusion.",
    strategy: "Delegation rules: Do NOT delegate 'E-A-T' (Evaluation, Assessment, Teaching). UAP can perform routine vital signs, hygiene, and output measurement on STABLE clients.",
    difficulty: "easy",
    tags: ["leadership", "delegation", "scope-of-practice", "uap", "five-rights"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-004",
    categorySlug: "leadership-delegation",
    stem: "A charge nurse is assigning client care duties to a team consisting of a Registered Nurse (RN), a Licensed Practical/Vocational Nurse (LPN/LVN), and a nursing assistant (UAP). Which client assignment is most appropriate for the LPN/LVN?",
    choices: [
      {
        id: "a",
        text: "A newly admitted unstable client presenting with diabetic ketoacidosis on an intravenous regular insulin titration infusion",
      },
      {
        id: "b",
        text: "A critically ill trauma client receiving ongoing massive blood transfusions and invasive arterial monitoring",
      },
      {
        id: "c",
        text: "A client newly diagnosed with acute leukemia requiring initial chemotherapy education and psychological crisis intervention",
      },
      {
        id: "d",
        text: "A stable client 3 days after laparoscopic cholecystectomy needing routine oral medicines and a dry dressing change",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The scope of practice for the LPN/LVN focuses on providing routine care for stable clients with predictable clinical outcomes under the supervision of an RN. LPNs/LVNs can administer oral, subcutaneous, and intramuscular medications (in most jurisdictions, excluding IV push high-alert drugs or complex titration infusions), perform sterile dressing changes on healing wounds, monitor findings, and perform routine catheter care. Unstable clients, complex IV titration infusions (e.g., DKA insulin titrations), initial clinical assessments, and complex discharge/chemotherapy teaching must be managed directly by the RN. Why the other options fail: option a is an unstable client on a titrated insulin infusion, which needs the registered nurse. Option b is a trauma client on massive transfusion with invasive monitoring, which needs critical care competence. Option c needs initial chemotherapy teaching and crisis intervention, which the licensed practical nurse cannot provide.",
    strategy: "LPN/LVN scope: Stable clients with predictable outcomes. Administer routine oral/IM meds and perform standard wound dressings. RN takes unstable clients and IV titrations.",
    difficulty: "medium",
    tags: ["leadership", "delegation", "lpn-scope", "team-nursing", "workload-allocation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-005",
    categorySlug: "leadership-delegation",
    stem: "While doing walk-rounds, the charge nurse observes a newly hired healthcare assistant (UAP) transferring a hemiplegic stroke client without applying the client's gait belt, attempting to lift the client solely by pulling on the flaccid, paralyzed arm. What is the charge nurse's immediate action?",
    choices: [
      {
        id: "a",
        text: "Step in at once and help with the transfer using a gait belt and safe technique, then teach the assistant in private",
      },
      {
        id: "b",
        text: "Stop the transfer and correct the assistant in front of the client and visitors, so that everyone learns from the mistake",
      },
      {
        id: "c",
        text: "Say nothing at the time and raise it at the assistant's next annual appraisal, to avoid undermining her confidence",
      },
      {
        id: "d",
        text: "Ask the client to say if the arm hurts, and record the incident in the ward diary at the end of the shift",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Supervision is the fifth right of delegation and requires active monitoring of delegated care and immediate intervention when client safety is jeopardized. Pulling on a hemiplegic arm risks shoulder joint dislocation (subluxation) and severe brachial plexus traction injury. The nurse's immediate priority is client safety: intervene calmly and physically assist with the transfer using proper biomechanics and gait belt. Once the client is safe and settled, the nurse provides private, professional, constructive feedback and re-education regarding transfer techniques. Why the other options fail: option b corrects the assistant in public, which damages the working relationship and the client's confidence in both of them. Option c defers the correction for two weeks while the unsafe practice continues. Option d shifts responsibility for safety onto the client, who cannot prevent a shoulder injury.",
    strategy: "Supervisory intervention: Protect client safety FIRST by stepping in immediately -> Provide corrective instruction in PRIVATE (never embarrass in public).",
    difficulty: "easy",
    tags: ["leadership", "supervision", "delegation", "patient-safety", "constructive-feedback"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-006",
    categorySlug: "leadership-delegation",
    stem: "During a sudden, unexpected in-hospital cardiac arrest in the medical ward, the charge nurse steps forward, gives clear, direct, non-negotiable verbal orders to team members, designates specific roles (compressions, airway, defibrillation, recorder), and strictly manages resuscitation choreography. Which leadership style is being demonstrated, and why is it indicated here?",
    choices: [
      {
        id: "a",
        text: "Laissez-faire: each team member works from their own judgement, which keeps the team flexible when the situation changes",
      },
      {
        id: "b",
        text: "Autocratic leadership: in an arrest, rapid decisions and fixed roles save lives, and debate has no place until it is over",
      },
      {
        id: "c",
        text: "Democratic: a quick show of hands decides the next intervention, so that everyone is committed to the plan",
      },
      {
        id: "d",
        text: "Transactional: each member is assigned a task and rewarded for completing it, which is what fixes the roles",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Leadership styles are situational: (1) Autocratic (authoritarian) leadership is characterized by centralized decision-making, top-down directives, and strict task allocation. While suboptimal for routine team morale, it is the most effective and essential leadership style in acute resuscitations, cardiac arrests, trauma codes, and disasters where immediate, synchronized, decisive execution is necessary to preserve life. (2) Democratic leadership promotes shared governance and consensus-building, ideal for unit quality improvement. (3) Transformational leadership inspires long-term innovation and organizational growth. (4) Laissez-faire provides minimal direction, leading to chaos in emergencies. Why the other options fail: option a leaves the team to improvise in an arrest, which produces duplicated and missed actions. Option c puts a vote in the middle of a resuscitation, when decisions are needed in seconds. Option d describes a transactional assignment of tasks, which does not capture the directive style an arrest requires.",
    strategy: "Leadership styles: Autocratic = Emergency/cardiac arrest (rapid decisive direction). Democratic = Quality improvement/team consensus. Transformational = Vision/change.",
    difficulty: "easy",
    tags: ["leadership", "leadership-styles", "autocratic", "emergency-management", "code-team"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-007",
    categorySlug: "leadership-delegation",
    stem: "A community health nurse working at a Community-based Health Planning and Services (CHPS) compound assesses a multigravida with severe pre-eclampsia (BP 178/114 mmHg, 3+ proteinuria, hyperreflexia). The facility lacks parenteral magnesium sulphate and operative surgical capability. What is the nurse's priority management under the national Primary Health Care referral pathway?",
    choices: [
      {
        id: "a",
        text: "Keep her at the CHPS compound on bed rest, repeat the blood pressure in 24 hours, and send for magnesium if it rises",
      },
      {
        id: "b",
        text: "Discharge her home with a referral letter and ask her to attend the district hospital if a seizure begins",
      },
      {
        id: "c",
        text: "Give the available antihypertensives, call the district hospital, arrange an escorted ambulance, and complete the referral form",
      },
      {
        id: "d",
        text: "Give magnesium sulphate if any can be found in the store, and deliver the baby at the compound if she convulses",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "In the tiered health system (CHPS -> Health Centre -> District Hospital -> Regional/Teaching Hospital), primary care nurses must promptly identify conditions that exceed the structural and legal scope of their facility. Severe pre-eclampsia carries immediate risks of eclamptic convulsions, stroke, and maternal/fetal mortality. Effective referral coordination mandates: (1) prompt clinical stabilization within facility capability (e.g., initial oral labetalol/nifedipine or loading magnesium sulphate if trained and equipped); (2) early notification of the receiving facility ('warm handover' call ahead); (3) securing dedicated transport with a trained clinical escort; and (4) complete handover documentation. Why the other options fail: option a keeps a woman with severe pre-eclampsia at a facility that cannot treat her and reviews her a day later. Option b sends her home to travel during a seizure. Option d proposes treatment beyond both the facility's supply and its scope of practice.",
    strategy: "Health system referral: Stabilize within capability -> Call receiving hospital ahead -> Arrange emergency transport with clinical escort -> Document handover.",
    difficulty: "easy",
    tags: ["leadership", "health-systems", "primary-health-care", "referral-pathway", "emergency-transfer"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-008",
    categorySlug: "leadership-delegation",
    stem: "Due to acute hospital-wide sickness, an experienced medical-surgical nurse is floated to the Intensive Care Unit (ICU) for a night shift. How should the ICU charge nurse assign patients to the floated medical-surgical nurse?",
    choices: [
      {
        id: "a",
        text: "A septic shock client on three titrated inotropes who is stable at present but needs frequent titration",
      },
      {
        id: "b",
        text: "Give the floated nurse one stable ICU client and ask her to manage the ventilator settings independently",
      },
      {
        id: "c",
        text: "Send her home if no ICU-trained nurse can supervise her, and cover the shift with the remaining staff",
      },
      {
        id: "d",
        text: "A stable client awaiting ward transfer who needs core medical-surgical skills, with an ICU nurse as resource",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "When allocating assignments to a 'floating' nurse, the charge nurse must evaluate the nurse's competencies, licensure, and experience relative to client acuity. A floated medical-surgical nurse has core competencies in medication administration, assessment, and routine post-operative/medical care, but lacks specialized training in critical care technologies (e.g., CRRT, intracranial pressure monitoring, complex vasoactive inotrope titration). The charge nurse should assign the most stable, low-acuity clients on the unit (e.g., stable 'step-down' clients awaiting transfer) and designate a permanent unit nurse as a mentor and clinical resource. Why the other options fail: option a gives the floated nurse an unstable client on three inotropes, which is beyond her competence and unsafe for the client. Option b asks her to manage ventilator settings independently. Option c removes a pair of hands from the unit and leaves it below minimum staffing.",
    strategy: "Floating nurse assignment: Match assignment to core competencies. Assign the most STABLE clients with predictable needs. Never assign high-acuity specialized devices.",
    difficulty: "medium",
    tags: ["leadership", "floating-nurse", "staffing", "workload-allocation", "patient-safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-009",
    categorySlug: "leadership-delegation",
    stem: "Two staff nurses on a surgical ward disagree intensely over how to organize the morning medication rounds and dressing schedules, leading to delayed patient treatments. The nurse manager convenes both nurses to address the issue. Which conflict management strategy represents a 'Collaborating' approach that achieves a win-win resolution?",
    choices: [
      {
        id: "a",
        text: "Collaborating: both nurses examine the workload and co-design a joint schedule, so that neither loses and patients gain",
      },
      {
        id: "b",
        text: "Avoiding: the manager separates the nurses onto different shifts, so the disagreement no longer delays the rounds",
      },
      {
        id: "c",
        text: "Competing: the senior nurse sets the schedule herself and tells the junior to follow it without discussion",
      },
      {
        id: "d",
        text: "Accommodating: the junior nurse lets the senior have her way, and raises it again if the delay recurs",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Under the Thomas-Kilmann Conflict Mode Instrument, five modes exist: Competing, Accommodating, Avoiding, Compromising, and Collaborating. Collaborating represents high assertiveness and high cooperation (the 'win-win' approach). Both parties work together to explore mutual concerns, identify root problems, and create an integrative solution where neither party compromises core clinical standards. It fosters trust, enhances teamwork, and yields long-lasting resolutions in healthcare settings. Why the other options fail: option b avoids the conflict by separating the nurses, so the underlying scheduling problem stays. Option c is competing: one nurse wins and the other complies under threat, which does not fix the workflow. Option d is accommodating: one nurse gives way and the delays continue.",
    strategy: "Conflict resolution: Collaborating = Win-Win. Joint problem-solving to address root concerns and create an optimal integrated solution.",
    difficulty: "easy",
    tags: ["leadership", "conflict-resolution", "collaborating", "thomas-kilmann", "teamwork"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-010",
    categorySlug: "leadership-delegation",
    stem: "A staff nurse notices that a colleague has become increasingly withdrawn, frequently takes extended unannounced breaks, volunteers repeatedly to administer intravenous opioids for other nurses' clients, and has multiple documented instances of signing out narcotics without co-signatures. The colleague appears drowsy with constricted pupils and slurred speech. What is the nurse's mandatory professional and ethical responsibility?",
    choices: [
      {
        id: "a",
        text: "Confront her privately and insist on a urine drug screen before she takes another shift",
      },
      {
        id: "b",
        text: "Report the observations confidentially to the nurse manager at once, so that clients are protected and she can be helped",
      },
      {
        id: "c",
        text: "Say nothing until there is proof, so that a colleague is not wrongly accused of diverting drugs",
      },
      {
        id: "d",
        text: "Tell the other staff on the ward quietly, so that they check her narcotic counts after every shift",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Impaired nursing practice due to substance use disorder directly threatens client safety and patient outcomes. Warning signs include: mood changes, frequent bathroom breaks, offering to medicate colleagues' patients for pain, discrepancies in controlled drug counts, and signs of intoxication (miosis, somnolence, ataxia). The nurse's paramount ethical, legal, and professional duty is patient protection. The nurse must NOT ignore, confront in anger, or cover up for the colleague. The nurse must report the objective, factual observations promptly to the nurse manager or nursing supervisor through institutional reporting channels. Why the other options fail: option a confronts and demands a sample, which risks a scene on the ward and is not the nurse's role. Option c waits for proof and leaves clients exposed to a colleague who is diverting opioids now. Option d broadcasts the suspicion, which destroys the colleague's reputation and the investigation.",
    strategy: "Impaired practice: Immediate confidential reporting to the nurse manager/supervisor is mandatory. Client protection is the #1 ethical duty.",
    difficulty: "easy",
    tags: ["leadership", "impaired-practice", "substance-abuse", "ethics", "professional-reporting"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-011",
    categorySlug: "leadership-delegation",
    stem: "An adult client is scheduled for an elective total abdominal hysterectomy. The surgeon explains the procedure, and the nurse enters the room to witness the client's signature on the surgical consent form. The client states, 'The doctor talked fast, and I really don't understand what organs are being removed or what other options I had.' What is the nurse's legal and professional responsibility?",
    choices: [
      {
        id: "a",
        text: "Ask the client to sign now, and have the surgeon answer her questions when he sees her in the anaesthetic room",
      },
      {
        id: "b",
        text: "Explain the surgery and its risks yourself, then witness the signature once she says she is satisfied",
      },
      {
        id: "c",
        text: "Do not witness the form: tell the surgeon the client does not understand and needs further explanation before signing",
      },
      {
        id: "d",
        text: "Witness the signature on the client's behalf and record that the surgeon explained the risks at the bedside",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Informed consent is the legal and ethical responsibility of the practitioner performing the procedure (the surgeon/physician). The surgeon must disclose the nature of the surgery, specific risks, anticipated benefits, alternatives, and consequences of refusal. The nurse's role in informed consent is strictly limited to: (1) witnessing the client's signature; (2) verifying that the client has decisional capacity; and (3) confirming that consent is voluntary. If the client expresses lack of understanding, the nurse must NOT explain the surgical procedure or obtain signature; the nurse must withhold witnessing and notify the surgeon to return and provide full informed disclosure. Why the other options fail: option a obtains a signature that is not informed, which is the situation the nurse is there to prevent. Option b has the nurse give the surgical explanation, which belongs to the surgeon and exceeds the nursing role. Option d signs on the client's behalf, which is forgery and voids the consent.",
    strategy: "Informed consent roles: Physician/surgeon EXPLAINS procedure, risks, and alternatives. Nurse WITNESSES signature and confirms voluntary consent. If client has doubts -> Call surgeon.",
    difficulty: "easy",
    tags: ["leadership", "informed-consent", "legal-nursing", "patient-advocacy", "ethics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-012",
    categorySlug: "leadership-delegation",
    stem: "An 84-year-old client with terminal metastatic pancreatic cancer has an active, documented Do-Not-Resuscitate (DNR) order and a valid Advance Directive executed while competent. The client experiences sudden cardiac arrest. The client's visiting adult child becomes hysterical, screams, and demands that the nursing staff 'do CPR and shock my parent.' How must the nurse respond?",
    choices: [
      {
        id: "a",
        text: "Start compressions at once, because a family member present at the arrest can override a written DNR order",
      },
      {
        id: "b",
        text: "Run a slow code: assemble the team and go through the motions of resuscitation without chest compressions",
      },
      {
        id: "c",
        text: "Ask security to remove the daughter from the unit, then start resuscitation once she has gone",
      },
      {
        id: "d",
        text: "Honour the DNR order, start no CPR or defibrillation, and support the daughter calmly and privately in her grief",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "A valid Do-Not-Resuscitate (DNR) order and advance directive represent the legally binding autonomous choices of a competent individual. Family members cannot legally revoke or override a capacitous adult's prior living will or DNR order when cardiac arrest occurs. Initiating CPR against a valid DNR violates client autonomy and constitutes battery. Performing a 'slow code' (faking resuscitation) is deceitful, unethical, and legally impermissible. The nurse must uphold the client's documented autonomous wishes, gently withhold resuscitation, support the family through the acute shock of bereavement, and contact the palliative or chaplaincy team. Why the other options fail: option a lets a relative override a valid written order at the bedside, which no relative can do. Option b performs a sham resuscitation, which deceives the family and is professionally indefensible. Option c removes the daughter so that CPR can start, which ignores the order entirely.",
    strategy: "DNR & Advance Directives: Legally valid DNR orders MUST be honoured. Family wishes cannot override a patient's documented advance directive. No 'slow codes'.",
    difficulty: "medium",
    tags: ["leadership", "dnr", "advance-directives", "autonomy", "end-of-life-ethics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-013",
    categorySlug: "leadership-delegation",
    stem: "A nurse is administering morning medications. One client asks, 'Is this little blue pill the blood pressure medication that made me so dizzy yesterday?' The nurse knows the pill is indeed the antihypertensive, and that disclosing this might cause the client to refuse it. Which ethical principle dictates that the nurse must tell the absolute truth to the client?",
    choices: [
      {
        id: "a",
        text: "Veracity (the ethical duty to tell the truth and not intentionally deceive clients)",
      },
      {
        id: "b",
        text: "Non-maleficence (the duty to do no harm)",
      },
      {
        id: "c",
        text: "Distributive justice (the fair allocation of healthcare resources)",
      },
      {
        id: "d",
        text: "Paternalism (the belief that health workers always know best regardless of client views)",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The foundational bioethical principles in nursing are: (1) Veracity: The moral obligation to tell the truth, be transparent, and avoid deception or intentional omission. The client has the right to know what medication is being administered and its intended purpose. (2) Autonomy: The right of self-determination and to accept or refuse treatment. (3) Beneficence: Doing good and acting in the client's best interest. (4) Non-maleficence: The duty to do no harm. (5) Justice: Fairness in distribution of care. (6) Fidelity: Faithfulness to commitments and promises. Why the other options fail: option b is the duty to avoid harm, and the question is specifically about telling the truth. Option c concerns fair distribution of resources, which is not at issue. Option d is the opposite of the principle being tested, because it would justify withholding the information.",
    strategy: "Bioethics definitions: Veracity = Truth-telling. Autonomy = Self-determination. Beneficence = Doing good. Non-maleficence = Do no harm. Fidelity = Keeping promises.",
    difficulty: "easy",
    tags: ["leadership", "bioethics", "veracity", "autonomy", "nursing-ethics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-014",
    categorySlug: "leadership-delegation",
    stem: "A hospitalized client falls out of bed and fractures a hip. The family files a malpractice lawsuit against the hospital and the assigned nurse. To successfully prove professional negligence (malpractice), which four legal elements must the plaintiff establish?",
    choices: [
      {
        id: "a",
        text: "Duty, negligence, foreseeability and a written expert opinion that the standard of care was not met",
      },
      {
        id: "b",
        text: "Duty of care, breach of the standard of care, causation linking the breach to the injury, and actual damages",
      },
      {
        id: "c",
        text: "Breach of duty, injury, a complaint made within 1 year, and a finding by the hospital's quality committee",
      },
      {
        id: "d",
        text: "Duty, breach, causation and a formal apology from the nurse to the family",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "In healthcare law, establishing professional negligence (nursing malpractice) requires proving four essential legal elements: (1) Duty of care: A formal professional nurse-patient relationship existed; (2) Breach of duty: The nurse failed to conform to the accepted professional standard of care (did what a reasonably prudent nurse would not do, or failed to do what a prudent nurse would do); (3) Causation (proximate cause): The nurse's breach was the direct, foreseeable cause of the client's injury; and (4) Damages / Harm: The client suffered actual physical, psychological, or economic injury. Why the other options fail: option a lists criminal concepts that have no place in a negligence claim. Option c mixes administrative steps with the elements, and neither a time limit nor a committee finding creates liability. Option d substitutes an apology for damages, and a sympathetic gesture is not proof of harm.",
    strategy: "Malpractice elements (the 4 Ds): Duty -> Dereliction (breach) -> Direct causation -> Damages. All four must be proven.",
    difficulty: "medium",
    tags: ["leadership", "malpractice", "negligence", "legal-elements", "standards-of-care"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-015",
    categorySlug: "leadership-delegation",
    stem: "Following a tragic sentinel event where a client received a ten-fold overdose of concentrated intravenous potassium chloride due to look-alike packaging, the quality management committee convenes. In accordance with 'Just Culture' principles, what is the primary focus of the Root Cause Analysis (RCA)?",
    choices: [
      {
        id: "a",
        text: "Identify the nurse who prepared the dose and take disciplinary action, which shows that the standard is enforced",
      },
      {
        id: "b",
        text: "Restrict the investigation to the pharmacy, since the packaging and storage of the drug are its responsibility",
      },
      {
        id: "c",
        text: "A blameless multidisciplinary review of the system: packaging, storage, ordering and checking, not the individual nurse",
      },
      {
        id: "d",
        text: "Require a second nurse to check every intravenous drug for 6 months, then review whether errors have fallen",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "A Just Culture balances individual accountability with a non-punitive focus on systemic latent errors. When a sentinel event occurs, conducting a Root Cause Analysis (RCA) seeks to answer 'What happened? Why did it happen? What systems can be redesigned to prevent recurrence?' Studies demonstrate that over 85–90% of medical errors stem from faulty system designs (e.g., concentrated potassium stocked on general wards, look-alike ampoules, unverified verbal orders, noisy medication rooms) rather than reckless personal sabotage. Punitive scapegoating drives errors underground, destroying safety reporting cultures. Why the other options fail: option a is the blame response that Just Culture exists to replace, and it leaves the packaging unchanged. Option b protects the organisation's records instead of the next patient and conceals the evidence the analysis needs. Option d moves the task to another group without changing the system that allowed the overdose.",
    strategy: "Just culture & Root Cause Analysis: System-level focus on latent vulnerabilities (storage, packaging, workflows) rather than individual blame. Drives safety improvement.",
    difficulty: "easy",
    tags: ["leadership", "just-culture", "root-cause-analysis", "sentinel-events", "quality-improvement"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-016",
    categorySlug: "leadership-delegation",
    stem: "A nurse accidentally administers 500 mg of amoxicillin to a client who had a documented allergy to penicillins. The client develops a mild itchy rash, which responds promptly to oral cetirizine. The nurse completes an institutional Incident / Variance Report. How should the nurse handle the documentation regarding this report?",
    choices: [
      {
        id: "a",
        text: "Note in the progress record that an incident report was filed, so that the next shift knows the event is being investigated",
      },
      {
        id: "b",
        text: "File a copy of the incident report in the chart, so that the clinical and safety records stay together",
      },
      {
        id: "c",
        text: "Leave the allergy out of the record until the investigation is complete, so that the entries cannot be used in court",
      },
      {
        id: "d",
        text: "Record the drug given, the assessment, the prescriber's notification and the treatment; never mention the incident report in the chart",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Incident (variance/occurrence) reports are internal, confidential administrative tools used by hospital risk management and quality improvement to identify safety vulnerabilities. In the patient's medical record, the nurse documents only objective, clinical facts: drug given, client physical findings, notification of prescriber, orders received, client response, and ongoing monitoring. Crucially, the nurse must NEVER record in the clinical chart that an incident report was completed or filed (e.g., 'Incident report completed'). Mentioning the report in the clinical chart can compromise attorney-client privilege and makes the internal risk document discoverable in legal litigation. Why the other options fail: option a mentions the report in the clinical record, which makes a privileged internal document discoverable. Option b files the report in the chart for the same reason, and mixes two records with different purposes. Option c removes the allergy from the record, which is falsification and would endanger the client if the drug were offered again.",
    strategy: "Incident report rules: Document objective facts, client assessment, and treatments in medical record. NEVER mention or file the incident report in the patient chart.",
    difficulty: "medium",
    tags: ["leadership", "incident-reporting", "risk-management", "documentation-standards", "legal-protection"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-017",
    categorySlug: "leadership-delegation",
    stem: "During a nursing unit change-of-shift handover, which communication practice best ensures continuity of care, reduces medical errors, and empowers the client?",
    choices: [
      {
        id: "a",
        text: "Bedside handover with SBAR, so both nurses see the client and lines together and the client can take part",
      },
      {
        id: "b",
        text: "A recorded voice note at the desk, replayed by the incoming nurse when the ward is quiet",
      },
      {
        id: "c",
        text: "A written summary left in the Kardex, with the incoming nurse reading it before the round",
      },
      {
        id: "d",
        text: "A verbal report in the treatment room, kept short so that neither nurse is away from the ward too long",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Bedside shift handover is an established patient safety practice endorsed by accreditation bodies (Joint Commission, WHO). Performing handover at the bedside: (1) enables direct visualization of the client, checking IV infusion rates, surgical dressings, and drain outputs simultaneously; (2) uses standardized communication tools (SBAR); (3) allows immediate two-way verification and clarifying questions between outgoing and incoming nurses; and (4) engages the patient and family as active partners in their care plan, eliminating discrepancies. Why the other options fail: option b gives a recorded message with no chance to ask questions and no view of the client. Option c leaves the incoming nurse to read a document alone, without the outgoing nurse's knowledge of what changed. Option d keeps the report short by holding it away from the bedside, where the lines and the client cannot be checked.",
    strategy: "Handoff best practice: Bedside shift report using SBAR. Allows direct visualization of patient/lines, two-way questioning, and patient engagement.",
    difficulty: "easy",
    tags: ["leadership", "handoff", "bedside-shift-report", "sbar", "continuity-of-care"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-018",
    categorySlug: "leadership-delegation",
    stem: "A nurse clinician leads an Evidence-Based Practice (EBP) committee seeking to reduce central line-associated bloodstream infections (CLABSI) in the ICU. When constructing a searchable clinical question using the PICO framework, which element corresponds to the 'I' component?",
    choices: [
      {
        id: "a",
        text: "Population: the adult ICU clients with non-tunneled central venous catheters who are being studied",
      },
      {
        id: "b",
        text: "Intervention: the procedure or bundle being tested, such as chlorhexidine-impregnated dressings",
      },
      {
        id: "c",
        text: "Comparison: the standard non-medicated transparent film dressing already in use on the unit",
      },
      {
        id: "d",
        text: "Outcome: the incidence of laboratory-confirmed CLABSI per 1,000 central line days",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The PICO(T) format is the standard methodological framework for structuring clinical questions in Evidence-Based Practice (EBP): (1) P = Patient / Population / Problem (the clinical group of interest); (2) I = Intervention / Indicator (the new treatment, procedure, exposure, or clinical bundle being evaluated); (3) C = Comparison / Control (the current standard of practice or alternative intervention); (4) O = Outcome (the measurable clinical result desired); and (5) T = Timeframe (optional duration of evaluation). Why the other options fail: option a is the P of PICO, the population. Option c is the C, the comparison already in use. Option d is the O, the measured outcome. None of them names the intervention being tested.",
    strategy: "PICO format: P = Population, I = Intervention, C = Comparison, O = Outcome. Formulates structured search queries for evidence-based practice.",
    difficulty: "easy",
    tags: ["leadership", "evidence-based-practice", "pico", "research-methods", "clinical-inquiry"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-019",
    categorySlug: "leadership-delegation",
    stem: "A nurse manager is implementing a hospital-wide electronic barcode medication administration (BCMA) system to replace paper charts. According to Kurt Lewin's classic 3-Stage Model of Change, in which stage does the leader create urgency, share error data, and help staff recognize the need to abandon outdated habits?",
    choices: [
      {
        id: "a",
        text: "Moving (changing) stage",
      },
      {
        id: "b",
        text: "Refreezing stage",
      },
      {
        id: "c",
        text: "Unfreezing stage",
      },
      {
        id: "d",
        text: "Stagnation stage",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Kurt Lewin's classic planned change theory consists of three sequential stages: (1) Unfreezing: Overcoming inertia and resistance by breaking down existing mindsets, establishing a sense of urgency, sharing safety audit data, and demonstrating why change is vital; (2) Moving (Changing): Executing the planned change through education, coaching, workflow pilot testing, and implementing new behaviors (e.g., scanning barcodes); and (3) Refreezing: Integrating the new practice into permanent organizational culture through ongoing audits, policies, praise, and performance standards. Why the other options fail: option a is where the change is executed, not where the need is created. Option b is where the new practice is embedded after the change, not where it starts. Option d is not one of Lewin's stages at all.",
    strategy: "Lewin's change theory: 1. Unfreezing (create urgency, break old habits) -> 2. Moving (implement change, train) -> 3. Refreezing (institutionalize and sustain).",
    difficulty: "easy",
    tags: ["leadership", "change-management", "lewins-model", "unfreezing", "organizational-change"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-LEAD-020",
    categorySlug: "leadership-delegation",
    stem: "A nurse working on a medical ward finishes reviewing laboratory results on an Electronic Health Record (EHR) workstation in the corridor. What is the nurse's immediate action before stepping away to answer a client's call bell?",
    choices: [
      {
        id: "a",
        text: "Ask the visitor sitting nearest the desk to keep an eye on the screen until you come back",
      },
      {
        id: "b",
        text: "Write the password on a note beside the monitor, so that the next nurse can log in quickly",
      },
      {
        id: "c",
        text: "Photograph the results on your phone so that you can review them while you answer the call bell",
      },
      {
        id: "d",
        text: "Log off or lock the terminal immediately, so that protected health information cannot be seen by anyone else",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Protection of digital health data under data protection acts and privacy legislation (e.g., Ghana Data Protection Act 2012 / Act 843, HIPAA) is a strict professional and legal requirement. Leaving an active, logged-in computer workstation unattended exposes confidential patient health data to unauthorized visitors, staff, and other clients. The nurse must lock or log off the terminal screen every time they step away, even momentarily. Passwords must never be shared or displayed, and photographing patient records on personal mobile devices is a gross privacy violation. Why the other options fail: option a hands custody of the screen to a visitor, who has no authority to see it. Option b exposes the password to anyone who passes the desk. Option c copies protected information onto a personal device, which is a disclosure as well as a security breach.",
    strategy: "EHR security: Always log off or lock terminals before stepping away. Never share passwords or post patient data on mobile devices.",
    difficulty: "easy",
    tags: ["leadership", "informatics", "data-privacy", "confidentiality", "ehr-security"],
    isFree: true,
  },
];
