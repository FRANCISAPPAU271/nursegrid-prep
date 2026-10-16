import type { AuthoredQuestion } from "./authored-bank";

export const INFO_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-INFO-001",
    categorySlug: "leadership-delegation",
    stem: "A registered nurse in an emergency department receives an automated vital signs monitor reading showing a blood pressure of 82/44 mmHg, heart rate of 124 beats/min, respiratory rate of 28 breaths/min, and temperature of 39.2 °C (102.6 °F). Applying the Data-Information-Knowledge-Wisdom (DIKW) framework of nursing informatics, which action exemplifies clinical 'Wisdom'?",
    choices: [
      {
        id: "a",
        text: "Synthesizing the physiological data and contextual clinical knowledge to recognize septic shock immediately, initiating the emergency sepsis resuscitation bundle, and preparing the team for fluid resuscitation and vasopressors",
      },
      {
        id: "b",
        text: "Looking at the numbers on the monitor screen without interpreting their clinical meaning",
      },
      {
        id: "c",
        text: "Writing down 'BP 82/44' on a scratch piece of paper and leaving it on the desk",
      },
      {
        id: "d",
        text: "Silencing the monitor alarms and instructing the client to take deep breaths to lower the heart rate",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The DIKW framework illustrates how raw data transitions into clinical action: 1) DATA = discrete objective facts (BP 82/44, HR 124); 2) INFORMATION = data organized and given context (vital signs show hypotension, tachycardia, tachypnea, and pyrexia); 3) KNOWLEDGE = synthesizing information with nursing science (recognizing that this cluster represents Systemic Inflammatory Response Syndrome / severe sepsis); 4) WISDOM = using clinical knowledge, judgment, and ethics to take optimal, timely clinical action (immediately triggering the sepsis resuscitation bundle, fluids, blood cultures, and antibiotics). Options b, c, and d reflect unprocessed data or negligent avoidance.",
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
        text: "Eliminating the need for registered nurses to write any care plans or assess patients",
      },
      {
        id: "b",
        text: "Providing a structured, interoperable vocabulary that accurately captures nursing diagnoses, interventions, and client outcomes across different software systems to measure nursing care effectiveness and support data-driven quality improvement",
      },
      {
        id: "c",
        text: "Increasing hospital billing revenue by converting all nursing interventions into commercial retail fees",
      },
      {
        id: "d",
        text: "Replacing physician medical diagnoses with informal ward nursing slang",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Standardized nursing terminologies (e.g., International Classification for Nursing Practice [ICNP], SNOMED-CT, NANDA/NIC/NOC) create a consistent, structured language that represents nursing care across multidisciplinary platforms. This standardization ensures semantic interoperability between diverse electronic systems, makes nursing contributions visible in clinical documentation, allows aggregation of Big Data for nursing research, and enables evaluation of nurse-sensitive client outcomes. It does not replace assessment (a), monetize nursing inappropriately (c), or displace medical diagnoses (d).",
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
        text: "It serves as an online social media marketplace for pharmaceutical companies to advertise directly to citizens",
      },
      {
        id: "b",
        text: "It is an unmonitored digital archive designed purely for long-term paper recycling",
      },
      {
        id: "c",
        text: "It aggregates facility- and district-level health data in real time, enabling disease outbreak surveillance, monitoring progress toward health targets (e.g., EPI vaccine coverage, maternal mortality), and informing equitable national resource allocation",
      },
      {
        id: "d",
        text: "It functions solely as an electronic punch clock to monitor nurse attendance and dock wages",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "DHIMS-2 (District Health Information Management System) is the primary web-based platform utilized by the Ghana Health Service (GHS) and Ministry of Health for routine national health information management. Frontline facility data (from CHPS compounds, health centers, and hospitals) are aggregated into DHIMS-2 to monitor disease incidence (e.g., malaria, cholera, vaccine-preventable illnesses), track maternal-child health metrics, evaluate health system performance, and guide targeted budgetary and logistical resource distribution. It is not an ad platform (a) or an employee punch clock (d).",
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
        text: "It wastes excessive hard drive storage space on hospital server computers",
      },
      {
        id: "b",
        text: "It violates international copyright protections held by software engineering corporations",
      },
      {
        id: "c",
        text: "It triggers automatic electrical power surges across the hospital electrical grid",
      },
      {
        id: "d",
        text: "It propagates outdated, inaccurate clinical data, obscures acute clinical deterioration, creates misleading legal records, and constitutes fraudulent charting",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Cloning documentation via 'copy and paste' in the electronic health record is a high-risk practice condemned by regulatory bodies and patient safety organizations. Copying prior assessments propagates outdated physical findings (e.g., documenting surgical dressings as 'clean, dry, and intact' when an incision has actually dehisced or infected), masks acute deterioration, creates inaccurate legal records, and can be considered fraudulent billing in court. Every clinical assessment must reflect contemporaneous, independent evaluation. Server space (a) and copyright laws (b) are not the primary clinical safety concerns.",
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
        text: "It significantly enhances documentation accuracy, reduces recall errors, allows immediate data availability for the entire healthcare team, and promotes client involvement in their care plan",
      },
      {
        id: "b",
        text: "It allows nurses to avoid talking directly with clients by focusing entirely on the computer screen",
      },
      {
        id: "c",
        text: "It guarantees that no medication errors can ever occur anywhere in the hospital",
      },
      {
        id: "d",
        text: "It eliminates the need for nurses to wash hands between client contacts",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Point-of-care documentation involves recording assessments, vital signs, and medication administration in real time at the bedside. Evidence demonstrates that point-of-care charting dramatically reduces cognitive recall errors (which peak during end-of-shift batch charting), ensures real-time availability of critical lab values and vitals across the multidisciplinary team, and invites the client into the care dialogue. It should never replace eye contact or interpersonal connection (b), does not provide absolute immunity from all errors (c), and never waives hand hygiene protocols (d).",
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
        text: "Administer the dose immediately because computerized physician orders cannot contain errors",
      },
      {
        id: "b",
        text: "Withhold the medication, place the order on clinical hold in the electronic system, immediately contact the prescribing provider to clarify the order, and notify the clinical pharmacist",
      },
      {
        id: "c",
        text: "Silently alter the physician's electronic order to 5,000 units without informing anyone",
      },
      {
        id: "d",
        text: "Delete the order completely from the client's medical history so no one sees it",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Computerized Provider Order Entry (CPOE) significantly reduces illegibility errors but does not eliminate prescribing errors (such as wrong dose or wrong frequency selections from drop-down menus). The nurse remains the ultimate safety barrier before medication administration. When an unsafe or questionable order appears in CPOE, the nurse must withhold the drug, flag or hold the order, contact the prescriber for clarification, and consult pharmacy. Assuming computer orders are infallible (a) leads to fatal bleeding; modifying an order without authorization (c) or deleting records (d) violates pharmacy and nursing practice acts.",
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
        text: "Discharge all hospitalized clients immediately to prevent documentation backlog",
      },
      {
        id: "b",
        text: "Cease administering all medications and vital sign monitoring until the electronic servers are restored",
      },
      {
        id: "c",
        text: "Activate the unit downtime protocol, deploy physical paper downtime charts and shadow medication records, and designate staff to track admissions, discharges, and STAT paper orders",
      },
      {
        id: "d",
        text: "Instruct nurses to memorize all vital signs and medications in their heads until tomorrow morning",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "When electronic health systems experience scheduled or unscheduled downtime, clinical operations must maintain uninterrupted patient safety through an established downtime policy and disaster recovery protocol. The charge nurse activates downtime standard operating procedures: accessing downtime emergency paper binders, deploying paper medication administration records (MARs) and progress notes, tracking client movement manually, and utilizing runner messengers for urgent laboratory and pharmacy orders. Ceasing care (b) causes preventable deaths; discharging patients recklessly (a) or relying on human memory (d) causes catastrophic medical errors.",
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
        text: "An admirable demonstration of community holistic caring that should be rewarded",
      },
      {
        id: "b",
        text: "A permissible action provided the nurse did not print out the records or post them on social media",
      },
      {
        id: "c",
        text: "An innocent mistake that carries zero institutional or regulatory liability",
      },
      {
        id: "d",
        text: "An unlawful breach of data privacy laws and professional ethics (violating Role-Based Access Controls and the 'need-to-know' principle) subject to disciplinary termination and regulatory reporting",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Access to electronic protected health information (ePHI) is legally restricted by Role-Based Access Control (RBAC) and the statutory 'need-to-know' principle under data privacy statutes (such as the Ghana Data Protection Act 2012 [Act 843], HIPAA, and GDPR). Healthcare personnel may only open the records of clients directly assigned to their clinical care. Snooping into the records of neighbors, acquaintances, or public figures without clinical justification is an intentional privacy violation resulting in disciplinary action, termination, and professional council investigation.",
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
        text: "Politely decline and log off the workstation, explaining that sharing user credentials violates hospital policy, compromises legal accountability, and creates shared liability for unverified orders",
      },
      {
        id: "b",
        text: "Hand the computer mouse to the physician and walk away to take a 30-minute break",
      },
      {
        id: "c",
        text: "Write down one's username and secret password on a sticky note and paste it on the monitor for all doctors to use",
      },
      {
        id: "d",
        text: "Permit the physician to order the medication, but tell them to sign with the nurse's name",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "In healthcare cybersecurity and electronic documentation law, an individual's unique login credentials (username and password) represent their legal electronic signature. Sharing credentials compromises the entire audit trail, breaches hospital security policies, and legally binds the nurse to any order, medication, or charting entered under their account. The nurse must refuse credential sharing, log out of the computer, and direct the prescriber to IT support or emergency phone/verbal order protocols. Handing over sessions (b) or pasting passwords (c) are severe security violations.",
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
        text: "Personal smartphones have inadequate camera resolution to capture wound margins clearly",
      },
      {
        id: "b",
        text: "Storing client clinical images on an unencrypted personal device and transmitting them via non-compliant consumer messaging apps breaches data privacy legislation, lacks informed consent, risks data leaks, and violates institutional mobile device policies",
      },
      {
        id: "c",
        text: "Taking clinical photos drains smartphone battery life too quickly during shifts",
      },
      {
        id: "d",
        text: "Second opinions from outside clinicians are prohibited under all clinical circumstances",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Capturing client clinical images on personal, unencrypted mobile devices and transmitting them across consumer messaging platforms violates client privacy rights, institutional BYOD (Bring Your Own Device) policies, and statutory health data protection laws. Digital clinical photography requires: 1) explicit informed client consent; 2) utilization of enterprise-secured, encrypted, institutional hardware and HIPAA/Data Protection Act-compliant platforms; and 3) direct storage into the client's official medical record. Camera resolution (a) and battery usage (c) are irrelevant to data privacy laws.",
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
        text: "Automatically click 'Override' without reading the alert because computer pop-ups are almost always false alarms",
      },
      {
        id: "b",
        text: "Turn off the computer screen and administer the ampicillin without delay",
      },
      {
        id: "c",
        text: "Read the alert carefully, withhold the medication immediately, cross-check the allergy history, and contact the prescriber to change the prescription to a safe non-penicillin alternative",
      },
      {
        id: "d",
        text: "Administer the ampicillin together with an oral antacid to prevent the allergic reaction",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Clinical Decision Support Systems (CDSS) provide real-time, evidence-based alerts at the point of care to intercept adverse drug events. High-tier critical alerts (such as severe drug-allergy interactions) represent life-threatening safety hazards. The nurse must not succumb to 'alert fatigue' (mindlessly overriding pop-ups). The nurse must review the alert, withhold the drug, verify the documented penicillin allergy, and notify the prescriber to order a safe therapeutic alternative. Automatic overrides (a) cause fatal anaphylaxis; antacids (d) do not prevent immune-mediated anaphylactic shock.",
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
        text: "An efficient adaptive workflow innovation that should be adopted hospital-wide",
      },
      {
        id: "b",
        text: "A software interoperability upgrade that improves nursing satisfaction",
      },
      {
        id: "c",
        text: "A benign technical malfunction that has zero impact on client safety",
      },
      {
        id: "d",
        text: "A dangerous 'workaround' that bypasses the primary safety barrier of positive bedside client identification, dramatically increasing the risk of wrong-patient medication administration errors",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "A 'workaround' is an informal bypass of an established safety system created by staff to cope with workflow obstacles or save time. Photocopying client barcodes onto carts, badges, or door frames completely dismantles the core safety mechanism of BCMA—which is verifying the Right Patient at the bedside simultaneously with the Right Drug. If a barcode is unreadable, the nurse must reprint and apply a new wristband immediately. Labeling workarounds as innovations (a) or benign (c) ignores root causes of severe wrong-patient medication administration fatalities.",
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
        text: "Recognize acute coronary syndrome as an emergency, instruct the client or family to call emergency medical services (ambulance) immediately, verify the client's exact physical location, remain on the line until responders arrive, and provide first-aid advice (e.g., chew non-enteric coated aspirin if not contraindicated)",
      },
      {
        id: "b",
        text: "Advise the client to book an elective outpatient clinic consultation next week",
      },
      {
        id: "c",
        text: "Tell the client to drink hot herbal soup and perform vigorous physical jumping jacks",
      },
      {
        id: "d",
        text: "Disconnect the call abruptly because telehealth nurses are legally prohibited from managing emergencies",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Telehealth nurses must uphold the same standards of clinical judgment and care as bedside clinicians. When acute life-threatening symptoms (e.g., acute myocardial infarction) are identified during virtual triage, the nurse must: 1) verify the client's physical location/address immediately; 2) coordinate emergency EMS dispatch; 3) provide interim emergency guidance (rest, chew aspirin if protocol allows and no contraindications); and 4) stay on the connection until emergency responders arrive. Delaying care (b), recommending physical exertion (c), or hanging up (d) constitutes gross telehealth malpractice.",
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
        text: "It replaces all clinical midwives with autonomous robotic surgical devices in mud huts",
      },
      {
        id: "b",
        text: "It enables offline data collection, automated clinical decision support for danger sign recognition, automated SMS appointment reminders to mothers, and asynchronous data syncing when network connectivity is restored",
      },
      {
        id: "c",
        text: "It requires rural clients to purchase high-end desktop gaming computers to access basic care",
      },
      {
        id: "d",
        text: "It eliminates all maternal healthcare funding and forces rural clinics to become entirely digital without human staff",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "mHealth (mobile health) applications on portable smartphones and tablets revolutionize rural primary health care (such as CHPS compounds) by supporting: 1) offline functionality with store-and-forward data synchronization; 2) algorithmic point-of-care guidance for early recognition of obstetric and neonatal danger signs; 3) automated SMS text reminders for antenatal care and infant vaccinations; and 4) real-time referral communication with district hospitals. It enhances frontline human care rather than replacing clinicians with robots (a) or imposing unaffordable hardware burdens (c).",
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
        text: "'delirium NOT elderly NOT surgery'",
      },
      {
        id: "b",
        text: "'delirium OR postoperative OR elderly OR non-pharmacological'",
      },
      {
        id: "c",
        text: "'(delirium OR acute confusion) AND (postoperative OR surgical) AND (aged OR elderly OR geriatrics) AND (non-pharmacological OR music therapy OR sleep protocol)'",
      },
      {
        id: "d",
        text: "'give me all good nursing articles about confused old people after operations please'",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Boolean operators (AND, OR, NOT) structure bibliographic database queries: 'OR' broadens a search by including synonyms within a concept (e.g., 'aged OR elderly'); 'AND' narrows the search by requiring that all distinct concepts must be present in the retrieved records. Grouping synonyms in parentheses with OR and connecting the concept sets with AND produces targeted, high-yield results. Using 'NOT' inappropriately (a) excludes the target population; using 'OR' exclusively (b) returns millions of irrelevant records; natural language phrases (d) fail in structured indexing systems.",
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
        text: "Delete the CAUTI tracking metric from the dashboard so the hospital executive committee does not see it",
      },
      {
        id: "b",
        text: "Punish the night shift nurses by docking their pay without investigating catheter utilization",
      },
      {
        id: "c",
        text: "Conclude that hospital dashboards are meaningless and instruct staff to stop using urinary catheters entirely",
      },
      {
        id: "d",
        text: "Form an interprofessional clinical quality improvement team, analyze EHR catheter insertion and dwell-time data, implement an automated electronic nurse-driven catheter removal reminder, and monitor run chart trends post-intervention",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Clinical dashboards aggregate EHR data into visual indicators (run charts, control charts) to monitor nurse-sensitive indicators (e.g., CAUTI, CLABSI, pressure injuries, falls). When run charts demonstrate non-random negative trends (e.g., 6 consecutive points above benchmark), informatics-guided leadership investigates the underlying data (e.g., catheter dwell times), implements evidence-based interventions (such as EHR automated reminders for early catheter removal or nurse-driven discontinuation protocols), and tracks post-intervention metrics. Deleting data (a) is fraudulent; punitive blaming (b) destroys safety culture.",
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
        text: "A catastrophic breach of client confidentiality ('jigsaw identification') and professional ethics; private messaging group chats are not exempt from data privacy laws, and the nurse faces disciplinary sanctions and license revocation",
      },
      {
        id: "b",
        text: "Completely ethical and legal because WhatsApp messages are end-to-end encrypted",
      },
      {
        id: "c",
        text: "Permissible educational peer discussion because the child's full legal name was omitted",
      },
      {
        id: "d",
        text: "A protected whistleblowing disclosure under national labor relations acts",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Confidentiality breaches frequently occur through 'jigsaw identification'—combining indirect identifiers (clinical photograph, specific unit, room number, tribal background, rare congenital defect) that allow community members or hospital staff to readily identify the individual. Furthermore, using consumer messaging apps (even with encryption) to transmit protected patient health data without consent violates national data privacy statutes and professional codes. Omitting names (c) does not prevent identification; regulatory bodies routinely revoke nursing licenses for social media and messaging app disclosures.",
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
        text: "Ignore the AI tool completely and turn off the algorithm because computers cannot understand human biology",
      },
      {
        id: "b",
        text: "Use the AI alert as clinical decision support while applying independent nursing clinical judgment, conducting a comprehensive bedside physical assessment, verifying lab trends, and escalating care appropriately",
      },
      {
        id: "c",
        text: "Blindly obey the AI tool without ever looking at the client or performing a physical exam",
      },
      {
        id: "d",
        text: "Transfer the client directly to the morgue based on the predictive sepsis algorithm",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Artificial Intelligence (AI) and machine learning models in healthcare serve as assistive decision support, NOT replacements for professional clinical judgment. Predictive models identify subtle patterns in massive EHR datasets that human clinicians might overlook (e.g., early sepsis trajectories). The nurse must validate AI alerts by performing an in-person physical assessment, synthesizing clinical context, and verifying objective diagnostic data. Total dismissal of AI (a) misses early warning opportunities; blind subservience to AI (c) risks algorithmic bias and error.",
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
        text: "Pay the ransom immediately using ward petty cash to restore the electronic monitors",
      },
      {
        id: "b",
        text: "Send all hospitalized clients home and lock the hospital gates until the hackers release the files",
      },
      {
        id: "c",
        text: "Initiate emergency manual downtime business continuity procedures, secure physical client safety, transition to paper charting and manual vital sign monitoring, disconnect compromised network cables, and notify hospital incident command",
      },
      {
        id: "d",
        text: "Attempt to hack into the cybercriminals' computer servers from the charge nurse workstation",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "A ransomware cyberattack represents a combined IT disaster and clinical emergency. The nursing team's absolute priority is maintaining client physical safety by transitioning to full manual paper-based business continuity procedures (manual vitals, paper MARs, independent medication double-checks). Concurrently, nursing leadership coordinates with hospital incident command and disconnects devices from network ports to prevent malware propagation. Paying ransoms (a) is a law enforcement decision; abandoning clients (b) or vigilante counter-hacking (d) are dangerous and illegal.",
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
        text: "Completely refuse to chart in the electronic health record and maintain personal secret paper diaries instead",
      },
      {
        id: "b",
        text: "Spend the entire shift typing behind a closed door away from client rooms",
      },
      {
        id: "c",
        text: "Ask the hospital IT department to delete the electronic health record software permanently",
      },
      {
        id: "d",
        text: "Position mobile computers to maintain eye contact with the client, explain what is being entered, engage the client in reviewing their care goals, and prioritize human presence during therapeutic communication",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Technology must serve the patient, not replace the human therapeutic relationship. Nurses can humanize technology by: 1) positioning the computer screen so it does not form a physical barrier between nurse and client; 2) maintaining regular eye contact and verbal communication; 3) explaining what is being documented ('I am entering your blood pressure reading into your electronic chart now'); and 4) actively involving the client in reviewing goals, lab trends, and discharge plans. Refusing to document (a) is illegal negligence; hiding behind computers (b) destroys the therapeutic alliance.",
    strategy: "Human-centered informatics: Position technology to maintain eye contact, narrate your documentation to the client, and keep human connection at the center of care.",
    difficulty: "easy",
    tags: ["nursing-informatics", "patient-centered-care", "technology-integration", "therapeutic-presence", "professionalism"],
    isFree: true,
  },
];
