import type { AuthoredQuestion } from "./authored-bank";

export const INFO_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-INFO-001",
    categorySlug: "leadership-delegation",
    stem: "A registered nurse in an emergency department receives an automated vital signs monitor reading showing a blood pressure of 82/44 mmHg, heart rate of 124 beats/min, respiratory rate of 28 breaths/min, and temperature of 39.2 °C (102.6 °F). Applying the Data-Information-Knowledge-Wisdom (DIKW) framework of nursing informatics, which action exemplifies clinical 'Wisdom'?",
    choices: [
      {
        id: "a",
        text: "Recognising that the readings are abnormal and alerting the team before the end of the shift",
      },
      {
        id: "b",
        text: "Synthesising the data with clinical knowledge to recognise septic shock and start the sepsis bundle",
      },
      {
        id: "c",
        text: "Documenting the vital signs accurately in the electronic record so the trend can be reviewed later",
      },
      {
        id: "d",
        text: "Checking the monitor calibration and repeating the observations to confirm the readings are real",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The DIKW framework illustrates how raw data transitions into clinical action: 1) DATA = discrete objective facts (BP 82/44, HR 124); 2) INFORMATION = data organized and given context (vital signs show hypotension, tachycardia, tachypnea, and pyrexia); 3) KNOWLEDGE = synthesizing information with nursing science (recognizing that this cluster represents Systemic Inflammatory Response Syndrome / severe sepsis); 4) WISDOM = using clinical knowledge, judgment, and ethics to take optimal, timely clinical action (immediately triggering the sepsis resuscitation bundle, fluids, blood cultures, and antibiotics). Options a, c, bnd d reflect unprocessed data or negligent avoidance. Why the other options fail: option a is data without interpretation. Option c is data transcribed onto paper, which is information at most. Option d suppresses the signal and treats the heart rate as anxiety, which is the opposite of clinical wisdom.",
    strategy: "DIKW framework: Data (raw numbers) -> Information (numbers in context) -> Knowledge (understanding clinical significance) -> Wisdom (applying judgment to intervene for optimal patient outcomes).",
    difficulty: "medium",
    tags: ["nursing-informatics", "dikw-framework", "clinical-judgement", "sepsis", "leadership"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-002",
    categorySlug: "leadership-delegation",
    stem: "A national health ministry is integrating electronic health records across regional hospitals. The informatics nurse advocates for implementing standardized nursing terminologies (such as ICNP, NANDA-I, NIC, NOC, and SNOMED-CT). What is the primary clinical advantage of standardized nursing languages in the electronic health record?",
    choices: [
      {
        id: "a",
        text: "A coding scheme that shortens documentation by allowing nurses to enter single numbers instead of sentences",
      },
      {
        id: "b",
        text: "A billing structure that converts nursing interventions into chargeable items for reimbursement",
      },
      {
        id: "c",
        text: "A shared vocabulary that lets diagnoses, interventions and outcomes be compared across systems and used for quality measurement",
      },
      {
        id: "d",
        text: "A translation tool that converts nursing notes into medical diagnoses for the physician record",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Standardized nursing terminologies (e.g., International Classification for Nursing Practice [ICNP], SNOMED-CT, NANDA/NIC/NOC) create a consistent, structured language that represents nursing care across multidisciplinary platforms. This standardization ensures semantic interoperability between diverse electronic systems, makes nursing contributions visible in clinical documentation, allows aggregation of Big Data for nursing research, and enables evaluation of nurse-sensitive client outcomes. It does not replace assessment, monetize nursing inappropriately, or displace medical diagnoses. Why the other options fail: A billing structure turns documentation into a charging exercise rather than a clinical record; a coding scheme of single numbers is shorthand, not a terminology; a translator that converts nursing notes into medical diagnoses loses the nursing content in the medical model.",
    strategy: "Informatics principle: Standardized nursing terminologies enable interoperability, make nursing care visible and quantifiable, and drive evidence-based outcomes.",
    difficulty: "easy",
    tags: ["nursing-informatics", "standardized-terminologies", "icnp", "interoperability", "data-standards"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-003",
    categorySlug: "leadership-delegation",
    stem: "A public health nurse in Ghana inputs monthly immunization and infectious disease morbidity records into DHIMS-2 (District Health Information Management System). How does DHIMS-2 primarily support national health governance and epidemiology?",
    choices: [
      {
        id: "a",
        text: "It links the payroll and attendance records of health staff to the national human resource database",
      },
      {
        id: "b",
        text: "It aggregates facility and district data so outbreaks can be detected and coverage and resources tracked nationally",
      },
      {
        id: "c",
        text: "It stores the monthly returns so that facilities can print their own reports at the end of the year",
      },
      {
        id: "d",
        text: "It replaces the paper register at facility level, with the national office collecting the forms quarterly",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "DHIMS-2 (District Health Information Management System) is the primary web-based platform utilized by the Ghana Health Service (GHS) and Ministry of Health for routine national health information management. Frontline facility data (from CHPS compounds, health centers, and hospitals) are aggregated into DHIMS-2 to monitor disease incidence (e.g., malaria, cholera, vaccine-preventable illnesses), track maternal-child health metrics, evaluate health system performance, and guide targeted budgetary and logistical resource distribution. It is not an ad platform or an employee punch clock. Why the other options fail: option b treats DHIMS-2 as an advertising platform. Option c describes an archive with no analysis. Option d reduces it to attendance monitoring.",
    strategy: "Public health informatics: DHIMS-2 collects and aggregates population-level health data to enable disease surveillance and evidence-based health policy planning.",
    difficulty: "easy",
    tags: ["nursing-informatics", "dhims2", "ghana-health-service", "epidemiology", "health-systems"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-004",
    categorySlug: "leadership-delegation",
    stem: "While documenting on an inpatient surgical unit, a nurse notices that several colleagues routinely use the 'Copy and Paste' (copy-forward or cloning) function in the electronic health record, duplicating the previous shift's physical assessment note verbatim into the current shift. What is the major client safety hazard associated with this practice?",
    choices: [
      {
        id: "a",
        text: "It carries forward findings that may no longer be true, masks deterioration and creates a record that misrepresents the assessment",
      },
      {
        id: "b",
        text: "It duplicates the previous shift's work, so the same assessment is charged to the client twice",
      },
      {
        id: "c",
        text: "It slows the record down and consumes storage, so the system becomes unusable over time",
      },
      {
        id: "d",
        text: "It breaches the software licence, because the documentation belongs to the vendor rather than the clinician",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Cloning documentation via 'copy and paste' in the electronic health record is a high-risk practice condemned by regulatory bodies and patient safety organizations. Copying prior assessments propagates outdated physical findings (e.g., documenting surgical dressings as 'clean, dry, and intact' when an incision has actually dehisced or infected), masks acute deterioration, creates inaccurate legal records, and can be considered fraudulent billing in court. Every clinical assessment must reflect contemporaneous, independent evaluation. Server space and copyright laws are not the primary clinical safety concerns. Why the other options fail: option a confuses storage with safety. Option c invents a copyright claim over clinical text. Option d invents an electrical effect. The harm is that yesterday's findings are presented as today's assessment.",
    strategy: "EHR safety rule: Never copy and paste prior clinical assessment notes. Chart real-time, independent findings to avoid propagating clinical errors.",
    difficulty: "easy",
    tags: ["nursing-informatics", "ehr-documentation", "copy-paste", "patient-safety", "chart-cloning"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-005",
    categorySlug: "leadership-delegation",
    stem: "A hospital transition team encourages nurses to perform electronic documentation at the point-of-care (at the bedside using mobile workstations or handheld tablets) rather than delayed batch charting at the nurses' station at the end of a 12-hour shift. What is the evidenced-based clinical rationale for point-of-care electronic charting?",
    choices: [
      {
        id: "a",
        text: "It improves accuracy and timeliness, makes the data available to the team at once and involves the client",
      },
      {
        id: "b",
        text: "It shortens the shift by removing the end-of-shift documentation period, so nurses can leave on time",
      },
      {
        id: "c",
        text: "It guarantees that no medication errors can occur, because every dose is scanned at the bedside",
      },
      {
        id: "d",
        text: "It removes the need to wash hands between clients, because the device is cleaned between uses",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Point-of-care documentation involves recording assessments, vital signs, and medication administration in real time at the bedside. Evidence demonstrates that point-of-care charting dramatically reduces cognitive recall errors (which peak during end-of-shift batch charting), ensures real-time availability of critical lab values and vitals across the multidisciplinary team, and invites the client into the care dialogue. It should never replace eye contact or interpersonal connection, does not provide absolute immunity from all errors, and never waives hand hygiene protocols. Why the other options fail: option b shortens the shift, which is a convenience and not the rationale. Option c promises something no system can guarantee. Option d removes hand hygiene, which no documentation method can do.",
    strategy: "Point-of-care charting: Real-time documentation at the bedside improves clinical accuracy, minimizes memory lapses, and ensures timely interdisciplinary communication.",
    difficulty: "easy",
    tags: ["nursing-informatics", "point-of-care", "bedside-charting", "documentation-accuracy", "ehr"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-006",
    categorySlug: "leadership-delegation",
    stem: "A registered nurse reviews computerized provider orders (CPOE) and notes an electronic prescription for 'Heparin 25,000 units subcutaneous injection every 4 hours.' The nurse recognizes that this is an excessively high dose that poses severe hemorrhage risk. What is the nurse's immediate action regarding this electronic order?",
    choices: [
      {
        id: "a",
        text: "Administer the dose as prescribed, because the prescriber is accountable for the order",
      },
      {
        id: "b",
        text: "Change the order to 5,000 units yourself and document the correction in the progress note",
      },
      {
        id: "c",
        text: "Withhold the dose, hold the order in the system, contact the prescriber and notify the pharmacist",
      },
      {
        id: "d",
        text: "Cancel the order without telling anyone, because no dose has been given",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Computerized Provider Order Entry (CPOE) significantly reduces illegibility errors but does not eliminate prescribing errors (such as wrong dose or wrong frequency selections from drop-down menus). The nurse remains the ultimate safety barrier before medication administration. When an unsafe or questionable order appears in CPOE, the nurse must withhold the drug, flag or hold the order, contact the prescriber for clarification, and consult pharmacy. Assuming computer orders are infallible leads to fatal bleeding; modifying an order without authorization or deleting records violates pharmacy and nursing practice acts. Why the other options fail: Changing the order to five thousand units without the prescriber is practising medicine and hides the error; giving it because the prescriber is accountable assumes an electronic order is correct, which is the assumption computerised ordering exists to end; cancelling silently leaves the error in the record for the next nurse to repeat.",
    strategy: "CPOE safety: Computerized orders can still contain human selection errors. Always verify clinical appropriateness; withhold and clarify unsafe orders immediately.",
    difficulty: "medium",
    tags: ["nursing-informatics", "cpoe", "medication-safety", "heparin", "order-verification"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-007",
    categorySlug: "leadership-delegation",
    stem: "During a busy afternoon shift, the hospital's central electronic health record (EHR) server crashes unannounced due to a severed fiber-optic cable, initiating an unscheduled total electronic downtime. What is the charge nurse's immediate priority action under the hospital's business continuity and downtime plan?",
    choices: [
      {
        id: "a",
        text: "Ask the nurses to record observations and doses on their phones and enter them when the system returns",
      },
      {
        id: "b",
        text: "Activate the downtime protocol, move to paper charts and shadow records, and designate staff to track orders and admissions",
      },
      {
        id: "c",
        text: "Stop giving medicines and stop monitoring vital signs until the servers are restored",
      },
      {
        id: "d",
        text: "Discharge the stable clients so the unit has fewer records to reconstruct when the system returns",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "When electronic health systems experience scheduled or unscheduled downtime, clinical operations must maintain uninterrupted patient safety through an established downtime policy and disaster recovery protocol. The charge nurse activates downtime standard operating procedures: accessing downtime emergency paper binders, deploying paper medication administration records (MARs) and progress notes, tracking client movement manually, and utilizing runner messengers for urgent laboratory and pharmacy orders. Ceasing care causes preventable deaths; discharging patients recklessly or relying on human memory causes catastrophic medical errors. Why the other options fail: Recording observations on personal phones is not an approved downtime record and puts protected health information on an unmanaged device; stopping medicines and monitoring because the computer is down harms clients; discharging stable clients to shrink the reconstruction workload transfers risk to them.",
    strategy: "EHR downtime response: Activate the facility downtime protocol immediately, deploy standardized paper charts and MARs, and maintain rigorous manual documentation.",
    difficulty: "medium",
    tags: ["nursing-informatics", "downtime-protocol", "business-continuity", "disaster-preparedness", "patient-safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-008",
    categorySlug: "leadership-delegation",
    stem: "A hospital's information security officer audits access logs and identifies that a staff nurse accessed the electronic medical records of five different clients who were admitted to a different ward and not assigned to the nurse's care. When questioned, the nurse explains that the clients were neighbors and friends. How does healthcare data regulation categorize this behavior?",
    choices: [
      {
        id: "a",
        text: "An unlawful breach of role-based access and need-to-know, subject to discipline and regulatory reporting",
      },
      {
        id: "b",
        text: "An acceptable practice, because the nurse knows the clients personally and meant no harm",
      },
      {
        id: "c",
        text: "A breach only if the records were printed or shared on social media, and not otherwise",
      },
      {
        id: "d",
        text: "A minor policy deviation that carries no institutional or regulatory liability",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Access to electronic protected health information (ePHI) is legally restricted by Role-Based Access Control (RBAC) and the statutory 'need-to-know' principle under data privacy statutes (such as the Ghana Data Protection Act 2012 [Act 843], HIPAA, and GDPR). Healthcare personnel may only open the records of clients directly assigned to their clinical care. Snooping into the records of neighbors, acquaintances, or public figures without clinical justification is an intentional privacy violation resulting in disciplinary action, termination, and professional council investigation. Why the other options fail: Treating the access as acceptable because the nurse knows the clients ignores role-based access and need-to-know; making it a breach only when records are printed or posted misstates where the breach occurs; calling it a minor deviation ignores that the access was deliberate.",
    strategy: "Data privacy rule: You may ONLY access health records of clients currently assigned to your direct clinical care. Browsing unassigned records is illegal snooping.",
    difficulty: "easy",
    tags: ["nursing-informatics", "data-privacy", "rbac", "audit-logs", "confidentiality"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-009",
    categorySlug: "leadership-delegation",
    stem: "A nurse is working on a mobile workstation on wheels (WOW) in a busy corridor. A physician approaches and says, 'My account is locked; please let me use your active login to quickly prescribe an antibiotic so I don't have to call IT support.' What is the nurse's correct response?",
    choices: [
      {
        id: "a",
        text: "Log in for the physician but stay at the keyboard while the order is entered",
      },
      {
        id: "b",
        text: "Write the username and password on a note beside the workstation for the team to use",
      },
      {
        id: "c",
        text: "Let the physician enter the order under the nurse's name and countersign it themselves afterwards",
      },
      {
        id: "d",
        text: "Decline, log off the workstation, and explain that sharing credentials breaks accountability and policy",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "In healthcare cybersecurity and electronic documentation law, an individual's unique login credentials (username and password) represent their legal electronic signature. Sharing credentials compromises the entire audit trail, breaches hospital security policies, and legally binds the nurse to any order, medication, or charting entered under their account. The nurse must refuse credential sharing, log out of the computer, and direct the prescriber to IT support or emergency phone/verbal order protocols. Handing over sessions or pasting passwords are severe security violations. Why the other options fail: option a leaves the session open and the physician unverified. Option b publishes credentials, which is worse than sharing them once. Option c attributes the order to the wrong clinician, which is the harm the nurse is avoiding.",
    strategy: "Cybersecurity standard: Never share login credentials or leave active electronic sessions unlocked. Your login is your legal electronic signature.",
    difficulty: "easy",
    tags: ["nursing-informatics", "cybersecurity", "credential-sharing", "electronic-signature", "workstation-security"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-010",
    categorySlug: "leadership-delegation",
    stem: "A nurse on a surgical unit encounters an unusual, complex stage 4 pressure injury. To get a second opinion from a colleague working at another hospital, the nurse takes a photograph of the wound with their personal smartphone and sends it via an unencrypted consumer messaging app (such as personal WhatsApp). Why is this action a severe violation of professional and digital health standards?",
    choices: [
      {
        id: "a",
        text: "The image is likely to be of poor quality, so the second opinion would be unreliable",
      },
      {
        id: "b",
        text: "The photograph is stored on a device the hospital cannot back up, so it may be lost before review",
      },
      {
        id: "c",
        text: "Personal devices and consumer messaging apps are not encrypted or approved, so the image breaches privacy law and policy",
      },
      {
        id: "d",
        text: "Second opinions are not permitted for a client who has not been formally transferred to another facility",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Capturing client clinical images on personal, unencrypted mobile devices and transmitting them across consumer messaging platforms violates client privacy rights, institutional BYOD (Bring Your Own Device) policies, and statutory health data protection laws. Digital clinical photography requires: 1) explicit informed client consent; 2) utilization of enterprise-secured, encrypted, institutional hardware and HIPAA/Data Protection Act-compliant platforms; and 3) direct storage into the client's official medical record. Camera resolution and battery usage are irrelevant to data privacy laws. Why the other options fail: Backup of a hospital device addresses resilience, not consent or encryption; image quality is a diagnostic concern, not the privacy question; requiring a formal transfer for a second opinion overstates a rule that only requires consent and a lawful channel.",
    strategy: "Digital privacy: Never photograph clients or transmit clinical images using personal smartphones and consumer messaging apps. Use institutional secure platforms only.",
    difficulty: "easy",
    tags: ["nursing-informatics", "clinical-photography", "mobile-security", "data-protection", "smartphone-ethics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-011",
    categorySlug: "leadership-delegation",
    stem: "While verifying a computerized medication order, a nurse receives an automated Clinical Decision Support System (CDSS) pop-up warning stating: 'CRITICAL ALERT: Client has a documented anaphylactic allergy to penicillin. Prescribed drug is Ampicillin.' How should the nurse manage this decision support alert?",
    choices: [
      {
        id: "a",
        text: "Give the ampicillin with an antihistamine premedication, so any reaction is blunted",
      },
      {
        id: "b",
        text: "Override the alert after checking that the dose lies within the normal range for the client",
      },
      {
        id: "c",
        text: "Dismiss the alert because documented allergies are often out of date and the reaction is usually mild",
      },
      {
        id: "d",
        text: "Read the alert, withhold the ampicillin, recheck the allergy record and ask the prescriber for a non-penicillin drug",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Clinical Decision Support Systems (CDSS) provide real-time, evidence-based alerts at the point of care to intercept adverse drug events. High-tier critical alerts (such as severe drug-allergy interactions) represent life-threatening safety hazards. The nurse must not succumb to 'alert fatigue' (mindlessly overriding pop-ups). The nurse must review the alert, withhold the drug, verify the documented penicillin allergy, and notify the prescriber to order a safe therapeutic alternative. Automatic overrides cause fatal anaphylaxis; antacids do not prevent immune-mediated anaphylactic shock. Why the other options fail: Overriding the alert after checking the dose leaves the documented anaphylaxis unresolved; dismissing the allergy as stale or mild is not a judgement the nurse may make at the keyboard; premedicating and giving the drug anyway blunts nothing and risks the reaction.",
    strategy: "CDSS alerts: Never bypass or override critical clinical decision support alerts without reading and investigating. Overriding allergy alerts causes fatal anaphylaxis.",
    difficulty: "easy",
    tags: ["nursing-informatics", "cdss", "clinical-decision-support", "alert-fatigue", "anaphylaxis"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-012",
    categorySlug: "leadership-delegation",
    stem: "A hospital utilizes Barcode Medication Administration (BCMA) scanning technology. During a busy morning medication pass, a nurse finds that an uncooperative client's wristband barcode is wrinkled and fails to scan. To save time, the nurse photocopies the client's barcode onto a plastic badge card and scans the badge at the medication cart instead of the client's wristband. What is this practice called, and what safety hazard does it introduce?",
    choices: [
      {
        id: "a",
        text: "A benign technical malfunction with no implication for patient safety, because the nurse knows the client",
      },
      {
        id: "b",
        text: "An efficient adaptation to a damaged wristband, provided the copied barcode is legible and matches the client",
      },
      {
        id: "c",
        text: "A software interoperability problem, since the scanner cannot read a wrinkled label, and not a nursing practice issue",
      },
      {
        id: "d",
        text: "A dangerous workaround that bypasses bedside patient identification and raises the risk of a wrong-patient error",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "A 'workaround' is an informal bypass of an established safety system created by staff to cope with workflow obstacles or save time. Photocopying client barcodes onto carts, badges, or door frames completely dismantles the core safety mechanism of BCMA—which is verifying the Right Patient at the bedside simultaneously with the Right Drug. If a barcode is unreadable, the nurse must reprint and apply a new wristband immediately. Labeling workarounds as innovations or benign ignores root causes of severe wrong-patient medication administration fatalities. Why the other options fail: Calling the shortcut efficient is how workarounds spread; blaming the scanner makes a software problem of a substitution the nurse chose; treating it as benign because the nurse knows the client is the assumption bedside scanning exists to remove.",
    strategy: "BCMA safety: Never use workarounds (such as scanning surrogate barcodes away from the bedside). Always scan the client's actual wristband at the bedside.",
    difficulty: "medium",
    tags: ["nursing-informatics", "bcma", "workarounds", "medication-errors", "patient-identification"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-013",
    categorySlug: "leadership-delegation",
    stem: "A registered nurse conducts a synchronous video telehealth triage consultation with a client complaining of acute, severe central chest pressure radiating to the left jaw and diaphoresis. What is the nurse's priority clinical responsibility during this virtual consultation?",
    choices: [
      {
        id: "a",
        text: "Arrange an elective appointment with the client's physician and advise rest until then, since the consultation is virtual",
      },
      {
        id: "b",
        text: "Recognise possible ACS, tell the client to call emergency services, confirm the exact location, stay on the line and advise aspirin if safe",
      },
      {
        id: "c",
        text: "Ask the client to take an antacid and call back if the pain has not settled within the hour",
      },
      {
        id: "d",
        text: "End the call and document it, because a telehealth service cannot take responsibility for an emergency",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Telehealth nurses must uphold the same standards of clinical judgment and care as bedside clinicians. When acute life-threatening symptoms (e.g., acute myocardial infarction) are identified during virtual triage, the nurse must: 1) verify the client's physical location/address immediately; 2) coordinate emergency EMS dispatch; 3) provide interim emergency guidance (rest, chew aspirin if protocol allows and no contraindications); and 4) stay on the connection until emergency responders arrive. Delaying care, recommending physical exertion, or hanging up constitutes gross telehealth malpractice. Why the other options fail: option a delays care that must happen in minutes. Option c treats chest pain with an antacid and a callback. Option d abandons the client, when the nurse is the only clinician present.",
    strategy: "Telehealth triage: Verify physical location first in all consultations. When red-flag emergency symptoms arise, initiate emergency dispatch and stay on the line.",
    difficulty: "medium",
    tags: ["nursing-informatics", "telehealth", "tele-triage", "acute-coronary-syndrome", "emergency-response"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-014",
    categorySlug: "leadership-delegation",
    stem: "In a rural primary healthcare network in Ghana, Community Health Officers use mobile health (mHealth) applications on tablets to track pregnant women and register child immunizations in remote villages. How does mHealth technology address geographical health disparities in resource-limited environments?",
    choices: [
      {
        id: "a",
        text: "It replaces paper registers entirely, because tablets work in every setting and need no network at all",
      },
      {
        id: "b",
        text: "It moves the burden of record keeping to the mother, who reports her own visits through the application",
      },
      {
        id: "c",
        text: "It provides real-time video consultation with specialists, which is the only way to close the rural gap",
      },
      {
        id: "d",
        text: "It allows offline data capture and decision support on the tablet, with records synchronised when connectivity returns",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "mHealth (mobile health) applications on portable smartphones and tablets revolutionize rural primary health care (such as CHPS compounds) by supporting: 1) offline functionality with store-and-forward data synchronization; 2) algorithmic point-of-care guidance for early recognition of obstetric and neonatal danger signs; 3) automated SMS text reminders for antenatal care and infant vaccinations; and 4) real-time referral communication with district hospitals. It enhances frontline human care rather than replacing clinicians with robots or imposing unaffordable hardware burdens. Why the other options fail: Moving record keeping onto the mother transfers the burden of documentation; real-time video is only one channel and is not what offline capability gives; replacing paper registers entirely overstates it, because tablets need power, maintenance and eventually a network.",
    strategy: "mHealth advantages: Portable, offline-capable data collection, algorithmic decision support, and SMS patient reminders in resource-constrained environments.",
    difficulty: "easy",
    tags: ["nursing-informatics", "mhealth", "chps", "primary-health-care", "digital-health"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-015",
    categorySlug: "leadership-delegation",
    stem: "A nurse researcher is searching the electronic biomedical database CINAHL/PubMed to locate evidence on non-pharmacological interventions for post-operative delirium in elderly clients. Which search query correctly applies Boolean logic to yield the most targeted, relevant evidence?",
    choices: [
      {
        id: "a",
        text: "Use Boolean AND to combine every synonym of the topic, then truncate each term to capture variants",
      },
      {
        id: "b",
        text: "Use NOT to exclude irrelevant populations, so the search returns only postoperative delirium studies",
      },
      {
        id: "c",
        text: "Use OR within each concept and AND between concepts, so that each concept is captured without losing studies",
      },
      {
        id: "d",
        text: "Use phrase searching in quotation marks alone, which returns the most precise set with no Boolean operators",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Boolean operators (AND, OR, NOT) structure bibliographic database queries: 'OR' broadens a search by including synonyms within a concept (e.g., 'aged OR elderly'); 'AND' narrows the search by requiring that all distinct concepts must be present in the retrieved records. Grouping synonyms in parentheses with OR and connecting the concept sets with AND produces targeted, high-yield results. Using 'NOT' inappropriately excludes the target population; using 'OR' exclusively returns millions of irrelevant records; natural language phrases fail in structured indexing systems. Why the other options fail: option a ANDs every synonym, which returns almost nothing. Option b uses NOT on the very population the question is about. Option d writes a sentence rather than a query and uses no Boolean logic at all.",
    strategy: "Boolean logic: Use 'OR' to combine synonyms within a concept (broadens); use 'AND' to combine different concepts together (narrows).",
    difficulty: "medium",
    tags: ["nursing-informatics", "boolean-operators", "literature-search", "cinahl", "pubmed"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-016",
    categorySlug: "leadership-delegation",
    stem: "A medical-surgical unit nurse manager reviews the electronic quality dashboard and notices a run chart displaying six consecutive monthly data points where the unit's Catheter-Associated Urinary Tract Infection (CAUTI) rate is above the national benchmark. What is the manager's best evidence-based informatics action?",
    choices: [
      {
        id: "a",
        text: "Dock the pay of the night shift nurses until the rate falls below the national benchmark",
      },
      {
        id: "b",
        text: "Withdraw the metric from the dashboard until the rate has returned to the benchmark on its own",
      },
      {
        id: "c",
        text: "Introduce a policy restricting catheter use and audit compliance monthly, without examining the existing data",
      },
      {
        id: "d",
        text: "Form an interprofessional improvement team, analyse insertion and dwell-time data, and trial a nurse-driven removal reminder",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Clinical dashboards aggregate EHR data into visual indicators (run charts, control charts) to monitor nurse-sensitive indicators (e.g., CAUTI, CLABSI, pressure injuries, falls). When run charts demonstrate non-random negative trends (e.g., 6 consecutive points above benchmark), informatics-guided leadership investigates the underlying data (e.g., catheter dwell times), implements evidence-based interventions (such as EHR automated reminders for early catheter removal or nurse-driven discontinuation protocols), and tracks post-intervention metrics. Deleting data is fraudulent; punitive blaming destroys safety culture. Why the other options fail: Withdrawing the metric removes the signal without changing the rate; auditing a new policy without examining the existing data repeats the gap; docking pay punishes staff before the cause is investigated.",
    strategy: "Clinical dashboards: Transform electronic clinical metrics into targeted quality improvement initiatives and monitor trend shifts on run charts.",
    difficulty: "medium",
    tags: ["nursing-informatics", "clinical-dashboards", "cauti", "quality-indicators", "run-charts"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-017",
    categorySlug: "leadership-delegation",
    stem: "A group of nurses on a pediatric ward creates a private, password-protected WhatsApp group chat to discuss difficult shifts. One evening, a nurse shares a photo of an unusual pediatric congenital defect and details the child's room number and mother's tribal background, asking for advice. Although the child's name was omitted, how is this action judged under professional digital conduct codes?",
    choices: [
      {
        id: "a",
        text: "A confidentiality breach by jigsaw identification; private chats are not exempt and the nurse faces discipline",
      },
      {
        id: "b",
        text: "Acceptable, because the messages are end-to-end encrypted and the name was left out",
      },
      {
        id: "c",
        text: "Acceptable educational discussion, because no full name, date of birth or address was included",
      },
      {
        id: "d",
        text: "A protected disclosure, because the nurse was raising a clinical concern in good faith",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Confidentiality breaches frequently occur through 'jigsaw identification'—combining indirect identifiers (clinical photograph, specific unit, room number, tribal background, rare congenital defect) that allow community members or hospital staff to readily identify the individual. Furthermore, using consumer messaging apps (even with encryption) to transmit protected patient health data without consent violates national data privacy statutes and professional codes. Omitting names does not prevent identification; regulatory bodies routinely revoke nursing licenses for social media and messaging app disclosures. Why the other options fail: option b confuses encryption in transit with lawful use. Option c assumes that omitting the name is sufficient, when the room, the defect and the background identify the child. Option d is not a protected disclosure, because the nurse was seeking advice rather than reporting wrongdoing.",
    strategy: "Digital professionalism: Never post client information, photos, or indirect identifiers in messaging groups or social media. Jigsaw identification constitutes a major regulatory violation.",
    difficulty: "easy",
    tags: ["nursing-informatics", "social-media", "digital-professionalism", "jigsaw-identification", "ethics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-018",
    categorySlug: "leadership-delegation",
    stem: "A hospital integrates an Artificial Intelligence (AI) predictive triage algorithm designed to identify clients at risk for septic shock. The algorithm issues a high-risk sepsis alert for an elderly client whose vital signs appear borderline. How should the triage nurse utilize this AI decision-support tool?",
    choices: [
      {
        id: "a",
        text: "Ignore the alert, because an algorithm cannot interpret borderline vital signs in an older adult",
      },
      {
        id: "b",
        text: "Follow the alert without assessment, because the algorithm has been validated on a large dataset",
      },
      {
        id: "c",
        text: "Use the alert as decision support, assess the client at the bedside, check the labs and escalate as the findings warrant",
      },
      {
        id: "d",
        text: "Repeat the observations until the algorithm withdraws the alert, then continue routine care",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Artificial Intelligence (AI) and machine learning models in healthcare serve as assistive decision support, NOT replacements for professional clinical judgment. Predictive models identify subtle patterns in massive EHR datasets that human clinicians might overlook (e.g., early sepsis trajectories). The nurse must validate AI alerts by performing an in-person physical assessment, synthesizing clinical context, and verifying objective diagnostic data. Total dismissal of AI misses early warning opportunities; blind subservience to AI risks algorithmic bias and error. Why the other options fail: Following the alert without assessment is automation bias; ignoring a validated alert discards a signal the bedside assessment is meant to test; repeating observations until the alert withdraws treats the alert as noise rather than a finding to act on.",
    strategy: "AI in nursing: AI serves as augmented decision support. The nurse retains final clinical accountability through independent assessment and professional judgment.",
    difficulty: "medium",
    tags: ["nursing-informatics", "artificial-intelligence", "machine-learning", "clinical-judgement", "sepsis-prediction"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-019",
    categorySlug: "leadership-delegation",
    stem: "A hospital experiences a targeted ransomware cyberattack that encrypts all electronic health records, medication administration systems, and bedside monitoring networks across the enterprise. The screens display extortion demands, and all computers lock. What is the nursing leadership team's immediate clinical management priority?",
    choices: [
      {
        id: "a",
        text: "Move to manual downtime procedures, protect patients, switch to paper, disconnect the network and notify incident command",
      },
      {
        id: "b",
        text: "Transfer every inpatient to another facility and close the unit until the systems are restored",
      },
      {
        id: "c",
        text: "Pay the ransom from petty cash so that monitoring is restored as quickly as possible",
      },
      {
        id: "d",
        text: "Keep charting electronically on the ward computers, since the encryption affects only the servers",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "A ransomware cyberattack represents a combined IT disaster and clinical emergency. The nursing team's absolute priority is maintaining client physical safety by transitioning to full manual paper-based business continuity procedures (manual vitals, paper MARs, independent medication double-checks). Concurrently, nursing leadership coordinates with hospital incident command and disconnects devices from network ports to prevent malware propagation. Paying ransoms is a law enforcement decision; abandoning clients or vigilante counter-hacking are dangerous and illegal. Why the other options fail: Paying the ransom funds criminals and restores nothing quickly; transferring every inpatient and closing the unit abandons a hospital that can still function on paper; charting on ward computers that depend on the encrypted servers records nothing that will survive.",
    strategy: "Cyberattack response: Protect client physical safety first, activate emergency manual paper downtime operations, and collaborate with incident command.",
    difficulty: "medium",
    tags: ["nursing-informatics", "cyberattack", "ransomware", "business-continuity", "incident-command"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INFO-020",
    categorySlug: "leadership-delegation",
    stem: "A newly qualified nurse expresses feeling overwhelmed by the volume of electronic health record documentation, stating, 'I feel like I spend all my time clicking checkboxes on a screen instead of caring for my patients.' Which approach best integrates electronic health technology with compassionate, patient-centered nursing care?",
    choices: [
      {
        id: "a",
        text: "Ask the client to enter their own history into the tablet while the nurse attends to other tasks",
      },
      {
        id: "b",
        text: "Position the mobile computer so eye contact is kept, explain what is being entered and involve the client in the plan",
      },
      {
        id: "c",
        text: "Chart at the bedside without speaking, so the record is finished before the conversation begins",
      },
      {
        id: "d",
        text: "Complete the documentation after the shift from memory, so the whole shift is spent with clients",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Technology must serve the patient, not replace the human therapeutic relationship. Nurses can humanize technology by: 1) positioning the computer screen so it does not form a physical barrier between nurse and client; 2) maintaining regular eye contact and verbal communication; 3) explaining what is being documented ('I am entering your blood pressure reading into your electronic chart now'); and 4) actively involving the client in reviewing goals, lab trends, and discharge plans. Refusing to document is illegal negligence; hiding behind computers destroys the therapeutic alliance. Why the other options fail: Delegating the history to the client's own tablet loses the clinical interview; charting at the bedside without speaking is the behaviour the nurse complained about; reconstructing the shift from memory produces inaccuracy.",
    strategy: "Human-centered informatics: Position technology to maintain eye contact, narrate your documentation to the client, and keep human connection at the center of care.",
    difficulty: "easy",
    tags: ["nursing-informatics", "patient-centered-care", "technology-integration", "therapeutic-presence", "professionalism"],
    isFree: true,
  },
];
