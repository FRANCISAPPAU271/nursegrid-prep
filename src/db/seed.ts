/* eslint-disable no-console */
import "dotenv/config";
import bcrypt from "bcryptjs";
import { db, pool } from "./index";
import {
  users,
  tasks,
  notes,
  questionCategories,
  questions,
  questionAttempts,
  questionBookmarks,
  strategies,
  strategyBookmarks,
  subscriptions,
  invoices,
  referrals,
  waitlistSignups,
  learningTopics,
  learningBookmarks,
  carePlans,
  momoPaymentRequests,
} from "./schema";

const REFERRAL_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
function generateReferralCode(): string {
  let code = "";
  for (let i = 0; i < 7; i++) code += REFERRAL_ALPHABET[Math.floor(Math.random() * REFERRAL_ALPHABET.length)];
  return `NG-${code}`;
}

import { CATEGORY_DEFS, ARCHETYPES, MAX_VARIANTS_PER_FACT, buildCategoryQuestions, chunk, hashStr, seededShuffle, mulberry32 } from "./question-bank";

// ---------------------------------------------------------------------------
// Strategies library (test-taking strategy articles)
// ---------------------------------------------------------------------------
const STRATEGY_DEFS = [
  {
    slug: "abc-prioritization",
    title: "ABC Prioritization Framework",
    category: "Prioritization",
    summary: "Use Airway, Breathing, and Circulation to decide who or what to address first.",
    content: [
      "When a question asks 'which client should the nurse see first' or 'which finding is priority,' check for airway problems first, then breathing, then circulation.",
      "A client who cannot speak, is choking, or has stridor outranks a client with a breathing problem alone.",
      "A client having sudden difficulty breathing outranks a client with a circulation problem such as bleeding or low blood pressure, unless the bleeding is massive and immediately life-threatening.",
      "Chronic or stable findings (like a well-managed condition) are almost never the priority when an acute ABC problem is present in another option.",
      "If two options both involve breathing, choose the one that is new, sudden, or worsening over one that is chronic or stable.",
    ],
    example: "Four clients: one with stable chronic COPD, one with new stridor, one with a healing incision, and one anxious client. Stridor threatens the airway — see that client first.",
    icon: "triangle",
    readTimeMinutes: 4,
    videoId: "xnlu4S4qjsU",
    videoTitle: "ABC Nursing (Airway Breathing Circulation) prioritization guide",
  },
  {
    slug: "maslows-hierarchy",
    title: "Maslow's Hierarchy for Exam Questions",
    category: "Prioritization",
    summary: "Physiological needs come before safety, and safety comes before psychosocial needs.",
    content: [
      "Rank needs in this order: physiological (oxygen, food, fluids, elimination) → safety → love/belonging → self-esteem → self-actualization.",
      "A physical symptom (pain, shortness of breath, bleeding) almost always outranks an emotional or social concern in a 'priority' question.",
      "Use this alongside ABCs: ABCs help you choose between two physiological problems; Maslow helps you choose between a physiological problem and a psychosocial one.",
      "Don't ignore psychosocial answers completely — if all options are physiologically equal or already addressed, the psychosocial option may be correct.",
    ],
    example: "A client with new chest pain and a client who is anxious about a diagnosis: the chest pain is physiological and takes priority over the anxiety.",
    icon: "layers",
    readTimeMinutes: 3,
    videoId: "NiJOy1SObxM",
    videoTitle: "Maslow’s Hierarchy of Needs: Exam Prioritization Made Simple",
  },
  {
    slug: "nursing-process-adpie",
    title: "The Nursing Process (ADPIE)",
    category: "Prioritization",
    summary: "Assess before you diagnose, plan, implement, or evaluate — unless the client is unsafe.",
    content: [
      "ADPIE stands for Assessment, Diagnosis, Planning, Implementation, and Evaluation.",
      "When choices include both an assessment and an intervention, choose the assessment first — you need data before you act.",
      "Exception: if the client is in immediate danger (choking, cardiac arrest, hemorrhage), intervene immediately rather than continuing to assess.",
      "Evaluation questions ask whether a goal was met — match the evaluation finding directly back to the original goal of care.",
    ],
    example: "A client reports new abdominal pain. Before giving pain medication, first assess the pain (location, quality, severity) unless vital signs indicate an emergency.",
    icon: "compass",
    readTimeMinutes: 4,
    videoId: "am9zN5calho",
    videoTitle: "How to Use the Nursing Process (ADPIE) to Prioritize Care",
  },
  {
    slug: "five-rights-of-delegation",
    title: "The Five Rights of Delegation",
    category: "Delegation",
    summary: "Right task, right circumstance, right person, right direction, right supervision.",
    content: [
      "Right task: only delegate tasks that are within the delegatee's scope of practice and that are routine, stable, and predictable.",
      "Right circumstance: the client's condition must be stable enough for the task to be delegated safely.",
      "Right person: match the task to the right level of training — UAPs can perform basic care (bathing, vital signs, ambulation of a stable client); LPNs can perform many tasks within their scope, including some medication administration depending on state law.",
      "Right direction/communication: give clear, specific instructions about what to do and what to report back.",
      "Right supervision: the RN must follow up, evaluate the outcome, and remains accountable for the delegated task.",
      "Never delegate assessment, evaluation, teaching, or care of unstable clients to unlicensed assistive personnel.",
    ],
    example: "You can delegate bathing a stable client to a UAP, but you cannot delegate assessing a new wound — that requires the RN.",
    icon: "list",
    readTimeMinutes: 5,
    videoId: "JszfqVZ0Ntw",
    videoTitle: "The Five Rights of Nursing Delegation explained",
  },
  {
    slug: "therapeutic-communication",
    title: "Recognizing Therapeutic Communication",
    category: "Communication",
    summary: "Choose responses that are open-ended, empathetic, and client-centered.",
    content: [
      "Favor open-ended questions and reflective statements ('Tell me more about that,' 'It sounds like you're feeling...') over closed yes/no questions.",
      "Avoid answer choices that give advice, judge, offer false reassurance ('everything will be fine'), change the subject, or ask 'why' (which sounds accusatory).",
      "The best answer usually acknowledges the client's feelings before problem-solving.",
      "Silence and active listening are valid therapeutic techniques — don't assume the nurse must always be talking.",
      "When in doubt, choose the response that keeps the focus on the client's feelings and experience.",
    ],
    example: "A client says, 'I'm scared about my surgery.' The best response is 'Tell me what worries you most about the surgery,' not 'Don't worry, you'll be fine.'",
    icon: "message",
    readTimeMinutes: 4,
    videoId: "svMEO66BlJY",
    videoTitle: "Therapeutic Communication Techniques in Nursing",
  },
  {
    slug: "sbar-handoff",
    title: "Using SBAR for Clear Communication",
    category: "Communication",
    summary: "Situation, Background, Assessment, Recommendation — a structure for handoffs and provider calls.",
    content: [
      "Situation: state who you are and briefly describe the current problem.",
      "Background: give relevant history — diagnosis, recent treatments, and baseline status.",
      "Assessment: share your clinical impression, including current vital signs and key findings.",
      "Recommendation: state what you want the listener to do or ask for guidance.",
      "On exam questions about communication or handoff, the best answer usually includes all four SBAR elements rather than an incomplete or disorganized report.",
    ],
    example: "'This is the nurse calling about Mr. Lee in room 4 (S). He had a hip replacement yesterday (B). His blood pressure just dropped to 84/50 and he looks pale (A). I need you to come assess him now (R).'",
    icon: "message",
    readTimeMinutes: 4,
    videoId: "uERVFUMo2Vo",
    videoTitle: "I-SBAR Shift Report Handoff: Nurse-to-Nurse Demonstration",
  },
  {
    slug: "least-restrictive-safety",
    title: "Choosing the Least Restrictive, Safest Option",
    category: "Safety",
    summary: "When several safety interventions are offered, pick the least restrictive one that still keeps the client safe.",
    content: [
      "Restraints and seclusion are always a last resort — try reorientation, environmental changes, and verbal de-escalation first.",
      "For fall risk, choose interventions like a low bed and frequent rounding before restraints.",
      "For a confused client pulling at tubes, try distraction, camouflage, or a sitter before restraints.",
      "If an option is clearly unsafe or violates a client's rights, eliminate it immediately, even if it seems easier for staff.",
    ],
    example: "A confused client keeps trying to remove an IV. Try relocating the client closer to the nurses' station and reorienting frequently before ordering a restraint.",
    icon: "shield",
    readTimeMinutes: 3,
  },
  {
    slug: "eliminate-absolutes-in-teaching",
    title: "Spotting Wrong Answers in Teaching Questions",
    category: "Test-Taking Mindset",
    summary: "Absolute words and unsafe shortcuts are almost always wrong in 'client understands teaching' questions.",
    content: [
      "Be suspicious of options with 'never,' 'always,' 'only,' or 'as long as I feel fine' — real self-care usually has some nuance.",
      "'Needs further teaching' questions ask you to find the INCORRECT statement — read the stem twice to be sure which direction you're looking for.",
      "Correct statements usually match a specific safety teaching point taught for that condition (dosing schedule, warning signs, follow-up).",
      "If a statement describes stopping a medication abruptly without provider guidance, it's almost always incorrect understanding.",
    ],
    example: "'I can stop my antibiotic once I feel better' indicates a need for further teaching, because clients should finish the full antibiotic course.",
    icon: "eye",
    readTimeMinutes: 3,
  },
  {
    slug: "assess-before-you-act",
    title: "Assess Before You Act (Unless It's an Emergency)",
    category: "Prioritization",
    summary: "When choices mix assessment and intervention, gather data first — unless the client is unstable.",
    content: [
      "If one answer choice is 'assess' and another is 'treat,' assess first when the client is stable enough to allow it.",
      "In a true emergency (cardiac arrest, choking, active hemorrhage), skip straight to the life-saving intervention.",
      "Look for clues in the stem such as 'stable,' 'alert,' or normal-sounding vital signs — these suggest time to assess first.",
      "Look for clues such as 'unresponsive,' 'not breathing,' or critical vital signs — these suggest you must act immediately.",
    ],
    example: "A client reports new dizziness with normal vital signs: assess further (orthostatic vitals) before intervening. A client in cardiac arrest: begin CPR immediately.",
    icon: "compass",
    readTimeMinutes: 3,
  },
  {
    slug: "select-all-that-apply-strategy",
    title: "Strategy for Select-All-That-Apply Questions",
    category: "Test-Taking Mindset",
    summary: "Evaluate each option independently as true or false rather than comparing options to each other.",
    content: [
      "Treat every option as its own true/false statement about the scenario — don't assume there's only one correct answer.",
      "There is no partial credit strategy trick — focus on accuracy for each option rather than guessing a 'typical number' of correct answers.",
      "Eliminate options that are absolute, outside the nurse's role, or contradict the scenario.",
      "If you're unsure about an option, ask: 'Is this statement safe, accurate, and directly supported by the scenario?' If yes, select it.",
    ],
    example: "For a select-all question on heart failure teaching, evaluate each statement (diet, weights, medications, activity) individually rather than picking a set number of answers.",
    icon: "list",
    readTimeMinutes: 3,
    videoId: "WfvSEYS0Ntg",
    videoTitle: "Nursing Exam: Select All That Apply (SATA) Questions Strategy",
  },
  {
    slug: "lab-value-quick-reference",
    title: "Quick Reference: Key Lab Values to Memorize",
    category: "Pharmacology",
    summary: "Knowing a handful of critical lab values makes 'priority finding' questions much easier.",
    content: [
      "Sodium: 135-145 mEq/L. Potassium: 3.5-5.0 mEq/L. Calcium: 9-10.5 mg/dL. Magnesium: 1.5-2.5 mEq/L.",
      "Hemoglobin: about 12-16 g/dL (varies by sex). Platelets: 150,000-400,000/mm3. WBC: 5,000-10,000/mm3.",
      "Therapeutic INR on warfarin: usually 2-3. Therapeutic digoxin level: 0.5-2.0 ng/mL. Therapeutic lithium level: 0.6-1.2 mEq/L.",
      "Know which values are critically high or low enough to require immediate action versus values that only need monitoring.",
      "When a question gives you a lab value, decide first whether it's normal, mildly abnormal, or critically abnormal before choosing an answer.",
    ],
    example: "A potassium of 6.8 mEq/L with peaked T waves is a critical value requiring immediate intervention, not routine monitoring.",
    icon: "flask",
    readTimeMinutes: 5,
  },
  {
    slug: "dosage-calculation-strategy",
    title: "A Reliable Approach to Dosage Calculations",
    category: "Pharmacology",
    summary: "Use dimensional analysis and always sanity-check your final answer.",
    content: [
      "Write out the desired dose, the dose on hand, and the quantity, then cancel units step by step (dimensional analysis) rather than memorizing formulas.",
      "Convert all units to the same system before calculating (e.g., convert pounds to kilograms).",
      "After calculating, ask: does this dose make clinical sense? A dose of 40 tablets or 500 mL/hr for a routine medication is a red flag to recheck your math.",
      "For IV drip rates, remember: rate (mL/hr) x drop factor (gtt/mL) ÷ 60 minutes = drops per minute.",
      "Practice with real-world numbers regularly — dosage calculation is a skill that fades quickly without practice.",
    ],
    example: "Order: 500 mL over 4 hours, drop factor 15 gtt/mL. Rate = 500/4 = 125 mL/hr. Drops/min = 125 x 15 ÷ 60 ≈ 31 gtt/min.",
    icon: "flask",
    readTimeMinutes: 5,
    videoId: "Uc-Etqbb24Y",
    videoTitle: "Nursing Dosage Calculations Using 3 Methods: Desired Over Have, Ratio/Proportion, & Dimensional",
  },
  {
    slug: "infection-control-decision-tree",
    title: "Choosing the Right Isolation Precaution",
    category: "Safety",
    summary: "Match the mode of transmission to the correct precaution category.",
    content: [
      "Airborne precautions (N95 + negative pressure room): tuberculosis, measles, varicella (chickenpox).",
      "Droplet precautions (mask within 3-6 feet): influenza, pertussis, mumps, meningitis (bacterial), rubella.",
      "Contact precautions (gown and gloves): MRSA, VRE, C. difficile (use soap and water, not just alcohol sanitizer), scabies.",
      "Standard precautions apply to every client, every time, regardless of diagnosis.",
      "If a question describes the mode of spread (airborne droplet nuclei vs. large droplets vs. direct contact), match it to the correct category rather than memorizing every disease individually.",
    ],
    example: "A client with suspected tuberculosis needs airborne precautions: an N95 respirator and a negative-pressure room.",
    icon: "shield",
    readTimeMinutes: 4,
    videoId: "esE1T39KgqY",
    videoTitle: "Isolation Precautions Mnemonics: Contact, Droplet, and Airborne",
  },
  {
    slug: "time-management-matrix",
    title: "A Prioritization Matrix for a Busy Shift",
    category: "Prioritization",
    summary: "Sort your task list into urgent/important categories to decide what to do first, next, and last.",
    content: [
      "Urgent and important: life-threatening or rapidly changing situations — do these first.",
      "Important but not urgent: scheduled medications, assessments, and treatments — plan these next.",
      "Urgent but less important clinically: call lights, non-urgent requests — delegate these when possible.",
      "Neither urgent nor important: tasks that can wait until later in the shift or be delegated entirely.",
      "Reassess your priorities throughout the shift — a stable client can become unstable and jump to the top of the list.",
    ],
    example: "A new critical lab value takes priority over restocking supplies, even if restocking was next on your list.",
    icon: "clock",
    readTimeMinutes: 4,
  },
  {
    slug: "client-centered-vs-task-centered",
    title: "Choose the Client-Centered Answer",
    category: "Test-Taking Mindset",
    summary: "When in doubt, pick the option that focuses on the client's individual needs over routine or convenience.",
    content: [
      "Exam questions favor answers that individualize care over answers that describe a rigid routine or facility convenience.",
      "Eliminate options that prioritize staff convenience, efficiency, or 'the way it's always done' over client safety or preference.",
      "Look for answers that involve the client in decision-making when appropriate.",
      "If two answers seem clinically similar, pick the one that better respects the client's autonomy and individual situation.",
    ],
    example: "Choosing to ask the client what time they prefer to bathe (client-centered) instead of insisting on the unit's standard bath schedule (task-centered).",
    icon: "target",
    readTimeMinutes: 3,
  },
  {
    slug: "normal-vital-sign-ranges",
    title: "Quick Reference: Normal Adult Vital Sign Ranges",
    category: "Pharmacology",
    summary: "Recognize abnormal vital signs quickly so you can spot the priority finding faster.",
    content: [
      "Temperature: 97.8-99.1°F (36.5-37.3°C) oral average.",
      "Heart rate: 60-100 beats/min. Below 60 is bradycardia; above 100 is tachycardia.",
      "Respiratory rate: 12-20 breaths/min. Below 12 or above 24 needs prompt attention.",
      "Blood pressure: around 90/60 to 120/80 mmHg for most healthy adults; values must be interpreted in context of the client's baseline.",
      "Oxygen saturation: 95-100% is generally normal; below 90% is a priority finding requiring action.",
    ],
    example: "A respiratory rate of 8 breaths/min in a client who just received morphine is a critical finding requiring immediate action.",
    icon: "activity",
    readTimeMinutes: 3,
  },
  {
    slug: "emergency-urgent-nonurgent",
    title: "Sorting Emergency vs. Urgent vs. Non-Urgent",
    category: "Prioritization",
    summary: "Use this three-tier system for triage- and prioritization-style questions.",
    content: [
      "Emergent: immediate threat to life or limb (chest pain, severe bleeding, unresponsiveness) — see or treat right away.",
      "Urgent: needs attention soon but can wait a short time safely (moderate pain, non-life-threatening injury).",
      "Non-urgent: stable clients with minor complaints — see last among competing demands.",
      "When ranking multiple clients, sort them mentally into these three tiers before deciding the exact order.",
    ],
    example: "In an ED triage scenario, chest pain is emergent, a simple fracture is urgent, and a mild rash is non-urgent.",
    icon: "flag",
    readTimeMinutes: 3,
  },
  {
    slug: "test-anxiety-management",
    title: "Managing Test Anxiety on Exam Day",
    category: "Test-Taking Mindset",
    summary: "A calm, steady approach improves recall and reasoning during high-stakes exams.",
    content: [
      "Use slow, deep breathing if you feel your heart racing during the exam — this activates your body's relaxation response.",
      "If you get stuck on a hard question, flag it (if allowed) and keep moving rather than losing time you need for other questions.",
      "Positive self-talk ('I have prepared for this') reduces the stress response that can block memory recall.",
      "The night before the exam, prioritize sleep over last-minute cramming — a rested brain reasons through questions far better.",
      "Remember that one hard question does not determine the outcome — stay focused on the next question in front of you.",
    ],
    example: "After a difficult question, take one slow breath, reset your focus, and move to the next question with a clear mind.",
    icon: "compass",
    readTimeMinutes: 4,
  },
  {
    slug: "process-of-elimination",
    title: "Mastering the Process of Elimination",
    category: "Test-Taking Mindset",
    summary: "Cross out clearly wrong answers first to improve your odds even when you're unsure.",
    content: [
      "Read all four options before choosing — the 'best' answer is a comparative decision, not just a search for a true statement.",
      "Eliminate any option that is unsafe, illegal, or outside the nurse's scope of practice immediately.",
      "Eliminate options that are true in general but do not directly answer the specific question being asked.",
      "Between two reasonable-looking options, look for the one that is more specific and directly tied to the scenario.",
      "If you must guess, guess among your remaining narrowed-down options rather than all four.",
    ],
    example: "Cross out an option involving an action outside the nurse's scope, then compare the remaining three based on priority and safety.",
    icon: "eye",
    readTimeMinutes: 3,
  },
  {
    slug: "read-the-stem-carefully",
    title: "Read the Question Stem Carefully",
    category: "Test-Taking Mindset",
    summary: "Misreading a keyword like 'first,' 'best,' or 'except' is one of the most common causes of missed questions.",
    content: [
      "Underline (mentally or physically) key words such as 'first,' 'priority,' 'best,' 'most appropriate,' or 'further teaching is needed.'",
      "Watch for negative phrasing such as 'which action should the nurse avoid' — these flip the logic of the question.",
      "Make sure you know whether the question wants the correct understanding or the incorrect understanding (needs more teaching).",
      "Reread the stem after choosing an answer to confirm you answered the question that was actually asked.",
    ],
    example: "A question asking 'which statement indicates a need for further teaching' wants you to find the WRONG statement, not the right one.",
    icon: "eye",
    readTimeMinutes: 3,
  },
  {
    slug: "what-not-to-delegate",
    title: "What a Nurse Should Never Delegate",
    category: "Delegation",
    summary: "Assessment, teaching, evaluation, and unstable clients always stay with the RN.",
    content: [
      "The RN cannot delegate the nursing assessment, the plan of care, client teaching, or evaluation of care to unlicensed assistive personnel.",
      "Unstable or complex clients should not be assigned tasks delegated to UAPs, even routine ones, until they are stabilized.",
      "IV medication administration is typically outside a UAP's scope everywhere, and outside an LPN's scope in many states — check the specific task against scope of practice.",
      "When answering delegation questions, ask: 'Is this a stable, routine, predictable task that doesn't require nursing judgment?' If not, keep it with the RN.",
    ],
    example: "A UAP can record a stable client's intake and output, but only the RN can assess and interpret whether the output is adequate.",
    icon: "list",
    readTimeMinutes: 4,
  },
  {
    slug: "cultural-sensitivity-in-answers",
    title: "Selecting Culturally Sensitive Answers",
    category: "Communication",
    summary: "The best exam answer respects a client's cultural and religious preferences whenever it is safe to do so.",
    content: [
      "Avoid answers that impose the nurse's own beliefs or assume all clients want the same type of care.",
      "Whenever an option offers to incorporate the client's cultural, spiritual, or personal preference safely, it is usually the better choice.",
      "Ask the client about their preferences rather than assuming based on their background.",
      "Cultural accommodation should never compromise essential safety — balance respect for preferences with clinical necessity.",
    ],
    example: "Offering to arrange a visit from the client's own spiritual leader shows more cultural sensitivity than assuming what the client needs.",
    icon: "message",
    readTimeMinutes: 3,
  },
  {
    slug: "recognizing-normal-vs-abnormal-newborn",
    title: "Newborn Assessment: Normal vs. Needs Follow-Up",
    category: "Prioritization",
    summary: "Know the expected newborn transition findings so abnormal ones stand out immediately.",
    content: [
      "Expected: acrocyanosis (blue hands/feet) in the first 24 hours, mild jaundice after 24 hours, a heart rate of 110-160, and periodic breathing.",
      "Needs follow-up: central cyanosis at any time, grunting/retractions, jaundice in the first 24 hours, or a temperature below 97.7°F.",
      "Compare each finding to expected newborn transition physiology before deciding if it's a priority.",
      "When several newborn findings are listed, the one that is outside expected transition parameters is usually the priority answer.",
    ],
    example: "Acrocyanosis at 2 hours of age is expected; central (whole-body) cyanosis at any time is not and requires immediate follow-up.",
    icon: "triangle",
    readTimeMinutes: 4,
  },
  {
    slug: "answering-pharmacology-teaching-questions",
    title: "Pharmacology Teaching Question Strategy",
    category: "Pharmacology",
    summary: "Tie every medication back to its most important safety teaching point.",
    content: [
      "For every high-alert medication, know one key monitoring parameter (e.g., apical pulse for digoxin, INR for warfarin, respiratory rate for opioids).",
      "Correct teaching statements usually describe how the client will self-monitor for that specific parameter or warning sign.",
      "Be alert to teaching statements that describe stopping a medication abruptly, doubling a missed dose, or ignoring a warning sign — these usually indicate a need for further teaching.",
      "When unsure, connect the drug to its class first (e.g., beta-blocker, anticoagulant, opioid) — many teaching points apply to the whole class.",
    ],
    example: "For any anticoagulant, the client should know to report unusual bruising or bleeding and use a soft toothbrush — these apply across the whole drug class.",
    icon: "pill",
    readTimeMinutes: 4,
  },
] as const;

// ---------------------------------------------------------------------------
// Learning library: body systems, obstetric anatomy, and the nursing process
// ---------------------------------------------------------------------------
const LEARNING_TOPIC_DEFS = [
  {
    slug: "cardiovascular-system",
    title: "Cardiovascular System",
    category: "Body Systems",
    icon: "heart",
    summary: "The heart and blood vessels that circulate oxygen, nutrients, and waste throughout the body.",
    overview:
      "The cardiovascular system is a closed loop made up of the heart (a four-chambered pump) and blood vessels (arteries, veins, and capillaries). The right side of the heart pumps deoxygenated blood to the lungs (pulmonary circulation), and the left side pumps oxygenated blood to the rest of the body (systemic circulation). Cardiac output depends on heart rate and stroke volume, and stroke volume depends on preload, afterload, and contractility.",
    keyStructures: [
      "Four chambers: right atrium, right ventricle, left atrium, left ventricle.",
      "Four valves: tricuspid, pulmonic, mitral (bicuspid), and aortic — they keep blood flowing in one direction.",
      "Coronary arteries supply the heart muscle itself; the left main coronary artery is sometimes called the 'widow maker' when blocked.",
      "The conduction system: SA node (pacemaker) → AV node → bundle of His → Purkinje fibers.",
      "Arteries carry blood away from the heart (usually oxygenated, except pulmonary artery); veins carry blood back (usually deoxygenated, except pulmonary vein).",
    ],
    normalFindings: [
      "Heart rate: 60–100 beats/min in adults.",
      "Blood pressure: roughly 90/60–120/80 mmHg for most healthy adults.",
      "Capillary refill: less than 3 seconds.",
      "Regular S1 ('lub') and S2 ('dub') heart sounds, no murmurs, rubs, or gallops.",
      "Peripheral pulses (radial, pedal) palpable and equal bilaterally.",
    ],
    nursingNotes: [
      "Always compare blood pressure and heart rate to the client's own baseline, not just 'normal' ranges.",
      "Check apical pulse for a full minute before giving digoxin or other cardiac medications — hold and notify the provider if HR < 60.",
      "Assess for edema, jugular vein distention, and daily weight gain as early signs of fluid overload in heart failure.",
      "Chest pain is never something to 'wait and see' about — get a 12-lead ECG and vital signs immediately.",
      "Teach clients to report new shortness of breath, chest pain, or swelling promptly, not just at the next appointment.",
      "Encourage smoking cessation, a heart-healthy diet, and regular activity as core prevention teaching for every cardiac client.",
    ],
    redFlags: [
      "Crushing, radiating chest pain with diaphoresis — treat as a possible MI until proven otherwise.",
      "New irregular heart rhythm with hypotension or dizziness.",
      "Sudden onset of severe shortness of breath with frothy pink sputum (possible acute pulmonary edema).",
      "Absent or markedly diminished peripheral pulse in an extremity (possible arterial occlusion).",
    ],
    commonConditions: ["Hypertension", "Heart failure", "Myocardial infarction", "Atrial fibrillation", "Coronary artery disease", "Peripheral artery disease"],
    imageUrl: "/images/learning/cardiovascular-system.jpg",
    videoId: "QhiVnFvshZg",
    videoTitle: "Circulatory system and the heart",
    videoSource: "Khan Academy",
  },
  {
    slug: "respiratory-system",
    title: "Respiratory System",
    category: "Body Systems",
    icon: "lungs",
    summary: "The airway and lungs responsible for gas exchange — bringing in oxygen and removing carbon dioxide.",
    overview:
      "The respiratory system includes the upper airway (nose, pharynx, larynx) and lower airway (trachea, bronchi, bronchioles, alveoli). Gas exchange happens at the alveolar-capillary membrane, where oxygen diffuses into the blood and carbon dioxide diffuses out. Breathing is controlled primarily by the respiratory center in the brainstem, which responds mainly to blood CO2 levels (and, in some chronic lung disease clients, to oxygen levels instead).",
    keyStructures: [
      "Upper airway: nose, pharynx, larynx (voice box) — warms, filters, and humidifies air.",
      "Lower airway: trachea branches into the right and left main bronchi, then smaller bronchioles.",
      "Alveoli: tiny air sacs surrounded by capillaries where gas exchange actually happens.",
      "Diaphragm: the main muscle of breathing; contracts to pull air in, relaxes to let air out.",
      "Pleura: a double-layered membrane around the lungs; the pleural space normally has negative pressure.",
    ],
    normalFindings: [
      "Respiratory rate: 12–20 breaths/min in adults.",
      "Oxygen saturation (SpO2): 95–100% on room air.",
      "Breath sounds clear bilaterally in all lung fields, no wheezes, crackles, or rhonchi.",
      "Symmetric chest rise and fall, unlabored breathing at rest.",
      "Pink, dry mucous membranes (in individuals without other pigmentation differences affecting assessment).",
    ],
    nursingNotes: [
      "Always assess breathing (rate, effort, and oxygen saturation) as part of your very first priority check — it's the 'B' in ABC.",
      "Position clients with breathing difficulty upright (high-Fowler's) to maximize lung expansion.",
      "Use pursed-lip breathing teaching for COPD clients to help them exhale more completely.",
      "In COPD clients, use caution with high-flow oxygen — some clients rely on a lower oxygen drive to breathe; monitor closely rather than withholding needed oxygen outright.",
      "Encourage coughing, deep breathing, and incentive spirometer use every 1–2 hours post-op to prevent atelectasis and pneumonia.",
      "A silent chest with no audible breath sounds in a person struggling to breathe is an emergency — it means very little air is moving at all.",
    ],
    redFlags: [
      "Oxygen saturation below 90%, or a significant drop from baseline.",
      "Stridor, use of accessory muscles, or nasal flaring — signs of severe respiratory distress.",
      "Sudden sharp chest pain with shortness of breath (possible pneumothorax or pulmonary embolism).",
      "Cyanosis of the lips or fingertips.",
    ],
    commonConditions: ["Asthma", "COPD", "Pneumonia", "Pulmonary embolism", "Pneumothorax", "Acute respiratory distress syndrome"],
    imageUrl: "/images/learning/respiratory-system.jpg",
    videoId: "qGiPZf7njqY",
    videoTitle: "Meet the lungs",
    videoSource: "Khan Academy",
  },
  {
    slug: "gastrointestinal-system",
    title: "Gastrointestinal System",
    category: "Body Systems",
    icon: "stomach",
    summary: "The digestive tract and accessory organs that break down food, absorb nutrients, and eliminate waste.",
    overview:
      "The GI tract is a long muscular tube from the mouth to the anus: esophagus, stomach, small intestine (duodenum, jejunum, ileum), and large intestine (colon, rectum). Accessory organs — the liver, gallbladder, and pancreas — contribute bile and enzymes that aid digestion. Peristalsis (wave-like muscle contractions) moves food along, and most nutrient absorption happens in the small intestine.",
    keyStructures: [
      "Esophagus carries food to the stomach via peristalsis; the lower esophageal sphincter normally prevents reflux.",
      "Stomach secretes acid and enzymes to begin protein digestion and churns food into chyme.",
      "Small intestine (duodenum, jejunum, ileum) is the primary site of nutrient absorption.",
      "Large intestine absorbs water and electrolytes and forms/stores stool before elimination.",
      "Liver produces bile (stored in the gallbladder) which emulsifies fats; pancreas secretes digestive enzymes and insulin.",
    ],
    normalFindings: [
      "Bowel sounds active in all four quadrants, roughly 5–30 sounds per minute.",
      "Soft, non-tender, non-distended abdomen.",
      "Regular bowel pattern (varies per person — anywhere from 3 times/day to 3 times/week can be normal).",
      "Brown, formed stool without blood, mucus, or excess fat.",
      "No nausea, vomiting, or reflux symptoms.",
    ],
    nursingNotes: [
      "Always auscultate bowel sounds before palpating the abdomen — palpation can artificially change bowel motility.",
      "Assess pain location and character carefully — right lower quadrant pain suggests appendicitis, right upper quadrant suggests gallbladder.",
      "Encourage early ambulation after abdominal surgery to help bowel function return and reduce ileus risk.",
      "Teach clients to increase fiber, fluids, and activity as the first-line approach to constipation before reaching for laxatives.",
      "NPO status must be respected strictly before procedures requiring sedation or surgery — aspiration risk is real.",
      "Monitor for return of bowel sounds and passage of flatus as key signs the GI tract is 'waking up' after surgery or illness.",
    ],
    redFlags: [
      "Absent bowel sounds with a distended, tympanic abdomen (possible bowel obstruction or ileus).",
      "Sudden relief of abdominal pain followed by a rigid, board-like abdomen (possible perforation).",
      "Coffee-ground emesis or black, tarry stools (possible GI bleeding).",
      "High fever with severe localized abdominal pain and rebound tenderness.",
    ],
    commonConditions: ["GERD", "Peptic ulcer disease", "Appendicitis", "Bowel obstruction", "Inflammatory bowel disease", "Cholecystitis"],
    imageUrl: "/images/learning/digestive-system.jpg",
    videoId: "wIN_OwWT2Kk",
    videoTitle: "Human digestive system",
    videoSource: "Khan Academy",
  },
  {
    slug: "renal-urinary-system",
    title: "Renal & Urinary System",
    category: "Body Systems",
    icon: "kidney",
    summary: "The kidneys, ureters, bladder, and urethra that filter blood, balance fluids, and eliminate waste as urine.",
    overview:
      "The kidneys filter blood through millions of nephrons, each with a glomerulus (filters blood) and a series of tubules (reabsorb needed substances, secrete waste). The kidneys regulate fluid balance, electrolytes, acid-base balance, and blood pressure (via the renin-angiotensin-aldosterone system), and produce erythropoietin to stimulate red blood cell production. Urine travels from the kidneys through the ureters to the bladder for storage, then out through the urethra.",
    keyStructures: [
      "Nephron: the functional unit of the kidney, made of the glomerulus, Bowman's capsule, and renal tubules.",
      "Glomerulus: a capillary tuft where blood is filtered under pressure.",
      "Renal tubules (proximal tubule, loop of Henle, distal tubule, collecting duct) reabsorb water, electrolytes, and glucose.",
      "Ureters: transport urine from each kidney to the bladder via peristalsis.",
      "Bladder: a muscular reservoir that stores urine until voiding.",
    ],
    normalFindings: [
      "Urine output: at least 30 mL/hr, or roughly 0.5 mL/kg/hr in adults.",
      "Urine clear to pale yellow, without blood, cloudiness, or strong odor.",
      "BUN and creatinine within normal reference ranges for the lab used.",
      "No costovertebral angle (flank) tenderness.",
      "Balanced intake and output over a 24-hour period.",
    ],
    nursingNotes: [
      "Monitor strict intake and output for any client with kidney concerns — trends matter more than a single number.",
      "A urine output under 30 mL/hr for two consecutive hours should be reported — it may signal impaired kidney perfusion.",
      "Hold or question nephrotoxic medications (like certain antibiotics or contrast dye) in clients with reduced kidney function.",
      "Encourage adequate hydration unless the client is on a fluid restriction — both extremes can harm the kidneys.",
      "Teach clients with chronic kidney disease to watch dietary potassium, phosphorus, and sodium intake.",
      "Assess for the age-related need to void frequently, and don't dismiss it — full-bladder discomfort or retention needs follow-up.",
    ],
    redFlags: [
      "Anuria (no urine output) or a sudden sharp drop in output.",
      "Potassium above 6.0 mEq/L in a client with kidney impairment — risk of dangerous cardiac arrhythmias.",
      "Severe flank pain radiating to the groin (possible kidney stone) with hematuria.",
      "New confusion or edema in a client with known chronic kidney disease.",
    ],
    commonConditions: ["Urinary tract infection", "Acute kidney injury", "Chronic kidney disease", "Kidney stones (nephrolithiasis)", "Benign prostatic hyperplasia"],
    imageUrl: "/images/learning/renal-urinary-system.jpg",
    videoId: "cc8sUv2SuaY",
    videoTitle: "The kidney and nephron",
    videoSource: "Khan Academy",
  },
  {
    slug: "nervous-system",
    title: "Nervous System",
    category: "Body Systems",
    icon: "brain",
    summary: "The brain, spinal cord, and nerves that control movement, sensation, thought, and vital body functions.",
    overview:
      "The nervous system has two main divisions: the central nervous system (brain and spinal cord) and the peripheral nervous system (all the nerves branching out from it). The brain has specialized regions — the cerebrum for thought and voluntary movement, the cerebellum for balance and coordination, and the brainstem for vital functions like breathing and heart rate. The autonomic nervous system (sympathetic 'fight or flight' and parasympathetic 'rest and digest') controls involuntary functions.",
    keyStructures: [
      "Cerebrum: divided into lobes (frontal, parietal, temporal, occipital), responsible for thought, movement, and sensory processing.",
      "Cerebellum: coordinates balance, posture, and fine motor movement.",
      "Brainstem (midbrain, pons, medulla): controls breathing, heart rate, and consciousness — damage here is often life-threatening.",
      "Spinal cord: relays signals between the brain and body, and coordinates reflexes.",
      "Neurons communicate via electrical impulses and chemical neurotransmitters across synapses.",
    ],
    normalFindings: [
      "Alert and oriented to person, place, time, and situation (A&Ox4).",
      "Pupils equal, round, and reactive to light and accommodation (PERRLA).",
      "Glasgow Coma Scale score of 15 (fully alert).",
      "Symmetric strength, sensation, and reflexes bilaterally.",
      "Steady gait and normal coordination (e.g., finger-to-nose testing).",
    ],
    nursingNotes: [
      "Neurologic status can change quickly — reassess often, especially after head injury or stroke symptoms, and always compare to the client's baseline.",
      "Use the Glasgow Coma Scale consistently to communicate changes in level of consciousness clearly to the team.",
      "For suspected stroke, note the exact time symptoms started — this determines treatment eligibility (e.g., thrombolytics).",
      "Elevate the head of the bed 30 degrees and keep the neck neutral for clients at risk of increased intracranial pressure.",
      "Protect the airway and turn a seizing client to the side — never restrain their movements or put anything in their mouth.",
      "Reorient confused clients gently and frequently; keep familiar objects and consistent routines nearby.",
    ],
    redFlags: [
      "Sudden facial droop, slurred speech, or one-sided weakness (classic stroke signs — act fast).",
      "A widening pulse pressure with bradycardia and irregular respirations (Cushing's triad — sign of increased intracranial pressure).",
      "A seizure lasting longer than 5 minutes, or repeated seizures without regaining consciousness (status epilepticus).",
      "A new, severe 'worst headache of my life' (possible subarachnoid hemorrhage).",
    ],
    commonConditions: ["Stroke (CVA)", "Seizure disorder", "Traumatic brain injury", "Parkinson's disease", "Multiple sclerosis", "Increased intracranial pressure"],
    imageUrl: "/images/learning/nervous-system.jpg",
    videoId: "BY8DJeX_tGc",
    videoTitle: "Overview of neuron function",
    videoSource: "Khan Academy",
  },
  {
    slug: "musculoskeletal-system",
    title: "Musculoskeletal System",
    category: "Body Systems",
    icon: "bone",
    summary: "The bones, joints, and muscles that give the body structure, protect organs, and allow movement.",
    overview:
      "The musculoskeletal system includes 206 bones in the adult skeleton, the joints that connect them, and the skeletal muscles that move them. Bones also produce blood cells (in the marrow) and store minerals like calcium. Muscles work in pairs — one contracts while its opposite relaxes — to create smooth, controlled movement. Cartilage cushions joints, and ligaments and tendons stabilize and connect the system together.",
    keyStructures: [
      "Bones: provide structure, protect organs (like the skull protecting the brain), and store calcium.",
      "Joints: where two bones meet; types include hinge (knee), ball-and-socket (hip), and pivot (neck) joints.",
      "Skeletal muscle: voluntary, striated muscle attached to bone via tendons.",
      "Ligaments connect bone to bone; tendons connect muscle to bone.",
      "Bone marrow: the site of blood cell production, found in the center of certain bones.",
    ],
    normalFindings: [
      "Full active range of motion in all joints without pain or crepitus.",
      "Muscle strength 5/5 (full strength against resistance) bilaterally.",
      "No swelling, deformity, or tenderness over bones or joints.",
      "Steady, coordinated gait.",
      "Intact sensation and pulses distal to any extremity injury.",
    ],
    nursingNotes: [
      "Always assess circulation, movement, and sensation (neurovascular checks) distal to a fracture or cast — do this regularly, not just once.",
      "Encourage weight-bearing exercise as tolerated to help maintain bone density, especially in older adults.",
      "After joint replacement surgery, follow the surgeon's positioning precautions closely (e.g., hip precautions to prevent dislocation).",
      "Teach proper body mechanics to clients and staff to prevent back injury during lifting or transfers.",
      "Pain that is sudden, severe, and unrelieved by medication after a cast is applied may signal compartment syndrome — report immediately.",
      "Encourage early mobilization after surgery when appropriate to reduce the risk of blood clots and muscle deconditioning.",
    ],
    redFlags: [
      "A pulseless, pale, or extremely painful extremity distal to a cast or injury (possible compartment syndrome).",
      "Visible bone deformity, shortening, or inability to bear any weight after trauma.",
      "Severe localized bone pain with fever (possible osteomyelitis).",
      "Sudden inability to move a limb after a fall in an older adult (possible hip fracture).",
    ],
    commonConditions: ["Osteoporosis", "Fractures", "Osteoarthritis", "Rheumatoid arthritis", "Compartment syndrome", "Hip fracture"],
    imageUrl: "/images/learning/musculoskeletal-system.jpg",
    videoId: "zGPvAK97jW0",
    videoTitle: "Skeletal Muscle & Muscle Contraction",
    videoSource: "Medical education video",
  },
  {
    slug: "endocrine-system",
    title: "Endocrine System",
    category: "Body Systems",
    icon: "hormone",
    summary: "The glands that release hormones directly into the bloodstream to regulate metabolism, growth, and stress response.",
    overview:
      "The endocrine system is a network of glands — including the hypothalamus, pituitary, thyroid, parathyroid, adrenal glands, pancreas, and gonads — that release hormones into the blood to regulate body-wide processes like metabolism, growth, blood sugar, stress response, and reproduction. The hypothalamus and pituitary gland act as master regulators, often controlling other glands through feedback loops.",
    keyStructures: [
      "Hypothalamus and pituitary gland: the 'master' control center that regulates many other endocrine glands.",
      "Thyroid gland: regulates metabolism via T3 and T4 hormones; the parathyroid glands regulate calcium.",
      "Adrenal glands: produce cortisol (stress hormone) and aldosterone (fluid/electrolyte balance), plus adrenaline.",
      "Pancreas: produces insulin (lowers blood glucose) and glucagon (raises blood glucose).",
      "Hormones work through negative feedback loops — rising hormone levels typically signal the body to slow production.",
    ],
    normalFindings: [
      "Fasting blood glucose: roughly 70–100 mg/dL.",
      "TSH (thyroid-stimulating hormone) within the lab's normal reference range.",
      "Stable weight and energy level without unexplained changes.",
      "Normal growth and development patterns for age.",
      "Stable fluid balance and blood pressure.",
    ],
    nursingNotes: [
      "Never stop corticosteroids abruptly — the adrenal glands may not resume normal cortisol production right away, risking a crisis.",
      "Check blood glucose before giving insulin and treat hypoglycemia (shakiness, diaphoresis, confusion) immediately with fast-acting sugar.",
      "Monitor for signs of thyroid storm (high fever, tachycardia, agitation) in clients with hyperthyroidism, especially during stress or surgery.",
      "Teach clients with diabetes the 'sick day rules' — check glucose more often and never skip insulin entirely, even when not eating normally.",
      "Weigh clients with suspected fluid imbalance (e.g., SIADH, diabetes insipidus) at the same time daily using the same scale.",
      "Encourage consistent timing of hormone-replacement medications (like levothyroxine) for stable blood levels.",
    ],
    redFlags: [
      "Blood glucose below 70 mg/dL with confusion, shakiness, or diaphoresis (hypoglycemia).",
      "Fruity breath odor, rapid deep breathing, and very high blood glucose (possible diabetic ketoacidosis).",
      "Severe hypotension and weakness in a client who recently stopped steroids (possible adrenal/Addisonian crisis).",
      "High fever, severe tachycardia, and altered mental status in hyperthyroidism (possible thyroid storm).",
    ],
    commonConditions: ["Type 1 and type 2 diabetes", "Hypothyroidism", "Hyperthyroidism", "Addison's disease", "Cushing's syndrome"],
    imageUrl: null,
    videoId: "f_Z1zsR9lFM",
    videoTitle: "Intro to the endocrine system",
    videoSource: "Khan Academy",
  },
  {
    slug: "integumentary-system",
    title: "Integumentary System (Skin)",
    category: "Body Systems",
    icon: "skin",
    summary: "The skin, hair, and nails that form the body's first line of defense against infection and injury.",
    overview:
      "The integumentary system consists of the skin (epidermis, dermis, and subcutaneous tissue), hair, and nails. Skin serves as a protective barrier against pathogens and fluid loss, helps regulate body temperature, provides sensation, and synthesizes vitamin D when exposed to sunlight. Skin integrity is a core nursing focus because breakdown can quickly lead to infection.",
    keyStructures: [
      "Epidermis: the outermost layer, providing a waterproof barrier.",
      "Dermis: contains blood vessels, nerve endings, hair follicles, and sweat glands.",
      "Subcutaneous tissue: fatty layer that provides insulation and cushioning.",
      "Skin appendages: hair, nails, sweat glands, and sebaceous (oil) glands.",
      "Skin color, temperature, and turgor provide important clues about circulation and hydration status.",
    ],
    normalFindings: [
      "Skin warm, dry, and intact without lesions, redness, or breakdown.",
      "Good skin turgor — skin returns to place quickly when gently pinched.",
      "Capillary refill under 3 seconds.",
      "Wounds (if present) show progressive healing without increasing redness, warmth, or drainage.",
      "No unusual bruising, rashes, or petechiae.",
    ],
    nursingNotes: [
      "Reposition immobile clients at least every 2 hours to prevent pressure injuries — this is one of the most preventable complications in nursing care.",
      "Use a validated tool (like the Braden Scale) to assess pressure injury risk on admission and regularly afterward.",
      "Keep skin clean and dry, especially in skin folds and incontinent clients, to prevent breakdown.",
      "Document wound characteristics (size, depth, drainage, surrounding skin) consistently so changes over time are easy to track.",
      "Teach clients to inspect their own skin daily, especially those with diabetes or reduced sensation in the feet.",
      "Use pillows and positioning devices to offload pressure from bony prominences (heels, sacrum, elbows).",
    ],
    redFlags: [
      "A stage III or IV pressure injury (exposing deep tissue, muscle, or bone).",
      "Signs of wound infection: increasing redness, warmth, swelling, purulent drainage, or fever.",
      "Sudden widespread rash with swelling of the face or difficulty breathing (possible severe allergic reaction).",
      "Non-blanchable redness over a bony prominence — an early warning sign of pressure injury.",
    ],
    commonConditions: ["Pressure injuries", "Cellulitis", "Skin tears", "Burns", "Allergic dermatitis"],
    imageUrl: null,
    videoId: "4zKjzl0futI",
    videoTitle: "Meet the skin! (Overview)",
    videoSource: "Khan Academy",
  },
  {
    slug: "hematologic-immune-system",
    title: "Hematologic & Immune System",
    category: "Body Systems",
    icon: "blood",
    summary: "The blood components and immune defenses that transport oxygen, fight infection, and support clotting.",
    overview:
      "Blood is made up of plasma, red blood cells (carry oxygen), white blood cells (fight infection), and platelets (support clotting). The immune system includes physical barriers (like skin), innate immunity (immediate, non-specific defense), and adaptive immunity (specific defense built through exposure or vaccination, involving lymphocytes like B cells and T cells). Bone marrow and lymphoid organs (spleen, lymph nodes, thymus) support blood cell production and immune function.",
    keyStructures: [
      "Red blood cells (erythrocytes): carry oxygen via hemoglobin; produced in bone marrow, stimulated by erythropoietin from the kidneys.",
      "White blood cells (leukocytes): include neutrophils, lymphocytes, and others that fight infection.",
      "Platelets (thrombocytes): small cell fragments essential for blood clotting.",
      "Lymphoid organs: spleen filters blood and old red blood cells; lymph nodes filter lymph fluid and house immune cells.",
      "The clotting cascade uses a series of clotting factors to form a stable clot after injury.",
    ],
    normalFindings: [
      "Hemoglobin: roughly 12–16 g/dL (varies by reference range and individual factors).",
      "White blood cell count: roughly 5,000–10,000/mm3.",
      "Platelet count: roughly 150,000–400,000/mm3.",
      "No unusual bruising, bleeding gums, or petechiae.",
      "No palpable, tender, or enlarged lymph nodes.",
    ],
    nursingNotes: [
      "Neutropenic clients (very low white blood cell counts) need protective precautions — limit crowds, fresh flowers, and raw produce.",
      "Monitor for bleeding precautions in clients with low platelet counts: use a soft toothbrush, avoid IM injections when possible, and handle gently.",
      "Watch for transfusion reactions closely in the first 15 minutes of any blood transfusion — stop immediately if signs occur.",
      "Encourage iron-rich foods for clients with iron-deficiency anemia and teach that iron supplements can cause dark stools (expected, not alarming).",
      "A fever in a neutropenic client is always an emergency, even without other symptoms — it may be the only sign of serious infection.",
      "Handle sickle cell crisis with prompt pain control, oxygen, and hydration — pain is real and under-treatment is a common care gap.",
    ],
    redFlags: [
      "Fever in a client with a very low neutrophil count (neutropenic fever) — treat as a medical emergency.",
      "Signs of a transfusion reaction: chills, back pain, hives, or fever shortly after starting a transfusion.",
      "Petechiae, unusual bruising, or active bleeding with a very low platelet count.",
      "Severe pain crisis in a client with sickle cell disease.",
    ],
    commonConditions: ["Anemia", "Leukemia", "Thrombocytopenia", "Sickle cell disease", "Neutropenia", "Deep vein thrombosis"],
    imageUrl: null,
    videoId: "rp7T4IItbtM",
    videoTitle: "Types of immune responses: innate and adaptive, humoral vs. cell-mediated",
    videoSource: "Khan Academy",
  },
  {
    slug: "obstetric-reproductive-anatomy",
    title: "Female Reproductive & Obstetric Anatomy",
    category: "Obstetric & Reproductive",
    icon: "baby",
    summary: "The female reproductive organs, pelvis, placenta, and fetal circulation relevant to pregnancy and childbirth.",
    overview:
      "The female reproductive system includes the ovaries (produce eggs and hormones), fallopian tubes (site of fertilization), uterus (where the fetus develops), cervix, and vagina. During pregnancy, the placenta forms as the vital connection between mother and fetus, delivering oxygen and nutrients and removing waste via the umbilical cord. The fetus has unique circulatory shortcuts — the ductus venosus, foramen ovale, and ductus arteriosus — that bypass the non-functioning fetal lungs and liver before birth, and normally close shortly after delivery.",
    keyStructures: [
      "Ovaries: produce eggs (ova) and the hormones estrogen and progesterone.",
      "Fallopian tubes: capture the released egg and are the usual site of fertilization.",
      "Uterus: a muscular organ (myometrium) lined by the endometrium, where the fertilized egg implants and the fetus develops.",
      "Cervix: the lower, narrow part of the uterus that dilates during labor to allow birth.",
      "Placenta and umbilical cord: exchange oxygen, nutrients, and waste between mother and fetus; the cord typically has two arteries and one vein.",
      "Fetal circulation shortcuts: the foramen ovale (between the atria), ductus arteriosus (connects pulmonary artery to aorta), and ductus venosus (bypasses the liver) — all normally close after birth as the newborn starts breathing air.",
      "Pelvic shape (gynecoid, android, anthropoid, platypelloid) can affect the ease of vaginal delivery; gynecoid is most favorable.",
    ],
    normalFindings: [
      "Fundal height in centimeters roughly matches weeks of gestation between 20–34 weeks.",
      "Fetal heart rate: 110–160 beats/min.",
      "Regular menstrual cycle roughly every 21–35 days (when not pregnant).",
      "Placenta implants in the upper uterus, away from the cervical os.",
      "Amniotic fluid volume within expected range for gestational age.",
    ],
    nursingNotes: [
      "Learn the 3 fetal circulation shortcuts (ductus venosus, foramen ovale, ductus arteriosus) — exams love asking why they close after birth (rising oxygen levels and changing pressures).",
      "Fundal height, fetal heart rate, and fetal movement are quick, reliable ways to screen fetal well-being at each prenatal visit.",
      "Painless, bright red bleeding in the third trimester suggests placenta previa — avoid vaginal exams until previa is ruled out.",
      "Sudden, severe abdominal pain with a rigid uterus and dark red bleeding suggests placental abruption — this is an emergency.",
      "During labor, monitor fetal heart rate patterns alongside contractions to assess how well the fetus is tolerating labor.",
      "After birth, a firm, midline fundus at or near the umbilicus is expected; a boggy fundus needs immediate massage and reassessment.",
    ],
    redFlags: [
      "Painless bright red vaginal bleeding in the third trimester (possible placenta previa).",
      "Sudden severe abdominal pain with a rigid, board-like uterus and dark bleeding (possible placental abruption).",
      "Late decelerations or minimal variability on the fetal heart tracing (possible fetal distress).",
      "A boggy, poorly contracted uterus after birth with heavy bleeding (possible uterine atony/postpartum hemorrhage).",
    ],
    commonConditions: ["Placenta previa", "Placental abruption", "Preeclampsia", "Ectopic pregnancy", "Postpartum hemorrhage", "Gestational diabetes"],
    imageUrl: "/images/learning/obstetric-reproductive-anatomy.jpg",
    videoId: "LjwqNB-WDZE",
    videoTitle: "Female reproductive system",
    videoSource: "Khan Academy",
  },
  {
    slug: "nursing-process-adpie",
    title: "The Nursing Process & Care Plans (ADPIE)",
    category: "Nursing Process",
    icon: "compass",
    summary: "The five-step framework nurses use to organize client care: Assessment, Diagnosis, Planning, Implementation, Evaluation.",
    overview:
      "The nursing process is a systematic, five-step method (remembered as ADPIE) that nurses use to identify and address a client's health needs. It's a continuous, cyclical process — evaluation often leads back to reassessment. A nursing care plan is simply the nursing process written down: it documents what you assessed, what problem you identified, what outcome you're working toward, what you'll do about it, and how you'll know it worked.",
    keyStructures: [
      "A — Assessment: collect subjective (what the client says) and objective (what you observe/measure) data.",
      "D — Diagnosis: identify the client's actual or potential problem using a nursing diagnosis (not a medical diagnosis) — often written as 'Problem related to Etiology as evidenced by Signs/Symptoms.'",
      "P — Planning: set specific, measurable, realistic, time-bound (SMART) goals and expected outcomes.",
      "I — Implementation: carry out nursing interventions, each with a rationale grounded in evidence.",
      "E — Evaluation: determine whether the goal was met, partially met, or not met, and revise the plan as needed.",
    ],
    normalFindings: [],
    nursingNotes: [
      "A nursing diagnosis is different from a medical diagnosis — it describes a human response to a health condition, not the disease itself.",
      "Good goals are SMART: Specific, Measurable, Achievable, Realistic, and Time-bound (e.g., 'Client will ambulate 50 feet with assistance by end of shift').",
      "Every intervention should have a rationale — this is what shows you understand WHY you're doing something, not just following a checklist.",
      "Evaluation isn't the end of the process — if a goal wasn't met, you reassess and revise the plan, not just note the failure.",
      "Prioritize nursing diagnoses using ABCs (airway, breathing, circulation) and Maslow's hierarchy of needs when a client has multiple problems.",
      "Care plans are living documents — update them as the client's condition and needs change throughout their care.",
    ],
    redFlags: [],
    commonConditions: [],
    imageUrl: null,
    videoId: "am9zN5calho",
    videoTitle: "The Nursing Process (ADPIE) explained",
    videoSource: "Nursing education series",
  },
] as const;

// ---------------------------------------------------------------------------
// Main seed routine
// ---------------------------------------------------------------------------
async function main() {
  console.log("Seeding NurseGrid Prep demo data...");

  console.log("Clearing existing data...");
  await db.delete(questionAttempts);
  await db.delete(questionBookmarks);
  await db.delete(strategyBookmarks);
  await db.delete(learningBookmarks);
  await db.delete(carePlans);
  await db.delete(momoPaymentRequests);
  await db.delete(invoices);
  await db.delete(subscriptions);
  await db.delete(referrals);
  await db.delete(waitlistSignups);
  await db.delete(notes);
  await db.delete(tasks);
  await db.delete(questions);
  await db.delete(strategies);
  await db.delete(learningTopics);
  await db.delete(questionCategories);
  await db.delete(users);

  console.log("Inserting question categories...");
  const insertedCategories = await db
    .insert(questionCategories)
    .values(
      CATEGORY_DEFS.map((c, i) => ({
        slug: c.slug,
        name: c.name,
        description: c.description,
        clientNeed: c.clientNeed,
        icon: c.icon,
        sortOrder: i,
      })),
    )
    .returning();
  const categoryIdBySlug = new Map(insertedCategories.map((c) => [c.slug, c.id]));

  console.log("Inserting strategies...");
  await db.insert(strategies).values(
    STRATEGY_DEFS.map((s: any, i) => ({
      slug: s.slug,
      title: s.title,
      category: s.category,
      summary: s.summary,
      content: [...s.content],
      example: s.example,
      icon: s.icon,
      readTimeMinutes: s.readTimeMinutes,
      sortOrder: i,
      videoId: s.videoId || null,
      videoTitle: s.videoTitle || null,
    })),
  );

  console.log("Inserting learning library topics...");
  const insertedLearningTopics = await db
    .insert(learningTopics)
    .values(
      LEARNING_TOPIC_DEFS.map((t, i) => ({
        slug: t.slug,
        title: t.title,
        category: t.category,
        icon: t.icon,
        summary: t.summary,
        overview: t.overview,
        keyStructures: [...t.keyStructures],
        normalFindings: [...t.normalFindings],
        nursingNotes: [...t.nursingNotes],
        redFlags: [...t.redFlags],
        commonConditions: [...t.commonConditions],
        imageUrl: t.imageUrl,
        videoId: t.videoId,
        videoTitle: t.videoTitle,
        videoSource: t.videoSource,
        sortOrder: i,
      })),
    )
    .returning();

  // Target is derived from real content: every unique knowledge point
  // (clinical item × question archetype) appears at most MAX_VARIANTS_PER_FACT
  // times, each with different wording and different distractors. Growing the
  // item banks (see seed-extra-items.ts) automatically grows this number.
  const capacity = CATEGORY_DEFS.reduce(
    (sum, def) => sum + def.items.length * ARCHETYPES.length * MAX_VARIANTS_PER_FACT,
    0,
  );
  console.log(`Generating question bank (${capacity} distinct questions from real content)...`);

  const allInsertedQuestions: { id: string; categoryId: string; correctChoiceId: string }[] = [];

  for (let i = 0; i < CATEGORY_DEFS.length; i++) {
    const def = CATEGORY_DEFS[i];
    const categoryId = categoryIdBySlug.get(def.slug)!;
    const target = def.items.length * ARCHETYPES.length * MAX_VARIANTS_PER_FACT;
    const rows = buildCategoryQuestions([...def.items], target, categoryId, def.slug);

    let insertedForCategory = 0;
    for (const batch of chunk(rows, 500)) {
      const inserted = await db
        .insert(questions)
        .values(batch)
        .returning({ id: questions.id, categoryId: questions.categoryId, correctChoiceId: questions.correctChoiceId });
      allInsertedQuestions.push(...inserted);
      insertedForCategory += inserted.length;
    }
    console.log(`  ${def.name}: ${insertedForCategory} questions`);
  }
  console.log(`Total questions inserted: ${allInsertedQuestions.length}`);

  console.log("Creating demo premium account...");
  const now = Date.now();
  const day = 24 * 60 * 60 * 1000;
  const passwordHash = await bcrypt.hash("password123", 10);
  const premiumSince = new Date(Date.now() - 45 * 24 * 60 * 60 * 1000);
  const answerHash = await bcrypt.hash("spot", 10);
  const [demoUser] = await db
    .insert(users)
    .values({
      name: "Jordan Alvarez",
      email: "demo@nursegrid.app",
      passwordHash,
      school: "Riverbend School of Nursing",
      cohort: "BSN Class of 2027",
      isPremium: true,
      premiumSince,
      referralCode: "NG-DEMO001",
      securityQuestion: "What was the name of your first pet?",
      securityAnswerHash: answerHash,
    })
    .returning();

  // A second, free-tier account so reviewers can see the paywall experience too.
  const [freeUser] = await db
    .insert(users)
    .values({
      name: "Casey Morgan",
      email: "free@nursegrid.app",
      passwordHash: await bcrypt.hash("password123", 10),
      school: "Lakeside Community College",
      cohort: "ADN Class of 2026",
      isPremium: false,
      referralCode: "NG-FREE001",
      securityQuestion: "What was the name of your first pet?",
      securityAnswerHash: await bcrypt.hash("buddy", 10),
    })
    .returning();

  // An admin account that can review and approve/reject MTN MoMo payments
  // from the /dashboard/admin/payments screen.
  const [adminUser] = await db
    .insert(users)
    .values({
      name: "NurseGrid Admin",
      email: "admin@nursegrid.app",
      passwordHash: await bcrypt.hash("password123", 10),
      isPremium: true,
      isAdmin: true,
      premiumSince: new Date(now - 90 * day),
      referralCode: "NG-ADMIN01",
      securityQuestion: "What was the name of your first pet?",
      securityAnswerHash: await bcrypt.hash("rover", 10),
    })
    .returning();

  // A few extra referred accounts so the Invite & Earn page has real history.
  const referredNames = [
    { name: "Taylor Nguyen", email: "taylor.nguyen@example.com", school: "Riverbend School of Nursing" },
    { name: "Sam Whitfield", email: "sam.whitfield@example.com", school: "Riverbend School of Nursing" },
    { name: "Morgan Ellis", email: "morgan.ellis@example.com", school: "Coastal University Nursing" },
  ];
  const referredUsers = [];
  for (const r of referredNames) {
    const [u] = await db
      .insert(users)
      .values({
        name: r.name,
        email: r.email,
        passwordHash: await bcrypt.hash("password123", 10),
        school: r.school,
        isPremium: true,
        premiumSince: new Date(now - 3 * day),
        premiumTrialEndsAt: new Date(now + 11 * day),
        referralCode: generateReferralCode(),
        referredByCode: "NG-DEMO001",
      })
      .returning();
    referredUsers.push(u);
  }
  await db.insert(referrals).values(
    referredUsers.map((u, i) => ({
      referrerUserId: demoUser.id,
      refereeUserId: u.id,
      rewardDays: 14,
      createdAt: new Date(now - (i + 1) * 3 * day),
    })),
  );

  console.log("Seeding demo tasks...");
  await db.insert(tasks).values([
    { userId: demoUser.id, title: "Submit med-surg care plan", description: "Complete and upload the care plan for Mr. Thompson (CHF).", category: "assignment", status: "in_progress", priority: "high", dueDate: new Date(now + 1 * day) },
    { userId: demoUser.id, title: "Clinical rotation — Labor & Delivery", description: "7am arrival, review fetal monitoring strips before pre-conference.", category: "clinical", status: "todo", priority: "high", dueDate: new Date(now + 2 * day) },
    { userId: demoUser.id, title: "Pharmacology unit exam", description: "Covers cardiac, respiratory, and endocrine medications.", category: "exam", status: "todo", priority: "high", dueDate: new Date(now + 5 * day) },
    { userId: demoUser.id, title: "Practice 50 NMC exam questions — Med-Surg", description: "Focus on cardiac and respiratory categories this week.", category: "study", status: "in_progress", priority: "medium", dueDate: new Date(now + 3 * day) },
    { userId: demoUser.id, title: "Skills lab — IV insertion check-off", description: "Bring gloves, tourniquet, and skills packet.", category: "skills_lab", status: "todo", priority: "medium", dueDate: new Date(now + 4 * day) },
    { userId: demoUser.id, title: "Read Ch. 12 — Fluid & Electrolytes", description: "Focus on potassium and sodium imbalances before Friday's quiz.", category: "study", status: "todo", priority: "medium", dueDate: new Date(now + 6 * day) },
    { userId: demoUser.id, title: "Dosage calculation worksheet", description: "20 problems, due before pharmacology lab.", category: "assignment", status: "done", priority: "medium", dueDate: new Date(now - 2 * day) },
    { userId: demoUser.id, title: "Study group — Mental health unit", description: "Meeting at the library with study group at 6pm.", category: "study", status: "done", priority: "low", dueDate: new Date(now - 5 * day) },
    { userId: demoUser.id, title: "Complete HIPAA training module", description: "Required before next clinical rotation.", category: "assignment", status: "todo", priority: "high", dueDate: new Date(now - 1 * day) },
    { userId: demoUser.id, title: "Renew CPR certification", description: "Card expires end of month — schedule a class.", category: "personal", status: "todo", priority: "low", dueDate: new Date(now + 20 * day) },
    { userId: demoUser.id, title: "Review Kaplan diagnostic results", description: "Identify weakest content areas and plan next week's study blocks.", category: "study", status: "in_progress", priority: "medium", dueDate: new Date(now + 2 * day) },
    { userId: demoUser.id, title: "Peds clinical paperwork", description: "Submit growth and development assessment for assigned client.", category: "clinical", status: "done", priority: "medium", dueDate: new Date(now - 7 * day) },
  ]);

  await db.insert(tasks).values([
    { userId: freeUser.id, title: "Complete NMC exam diagnostic quiz", description: "Try a few free preview questions to see where you stand.", category: "exam", status: "todo", priority: "high", dueDate: new Date(now + 2 * day) },
    { userId: freeUser.id, title: "Review med-surg clinical prep packet", description: "Read tomorrow's clinical assignment before pre-conference.", category: "clinical", status: "todo", priority: "medium", dueDate: new Date(now + 5 * day) },
  ]);

  console.log("Seeding demo notes...");
  await db.insert(notes).values([
    { userId: demoUser.id, title: "Digoxin quick facts", content: "Hold if apical pulse < 60. Therapeutic range 0.5-2.0 ng/mL. Watch for visual halos, nausea, and bradycardia as signs of toxicity.", tag: "pharmacology", pinned: true },
    { userId: demoUser.id, title: "Prioritization cheat sheet", content: "ABC first, then Maslow. Acute > chronic. Unexpected > expected. Assess before you act unless it's an emergency.", tag: "fundamentals", pinned: true },
    { userId: demoUser.id, title: "Preeclampsia red flags", content: "BP > 160/110, headache, visual changes, epigastric pain, brisk reflexes. Mag sulfate for seizure prophylaxis — watch respiratory rate and reflexes.", tag: "maternity", pinned: false },
    { userId: demoUser.id, title: "Isolation precautions mnemonic", content: "MTV = Measles, TB, Varicella need AIRBORNE. Everything else contact/droplet by mode of transmission.", tag: "clinical", pinned: false },
    { userId: demoUser.id, title: "Electrolyte panic values", content: "K+ > 6.5 or < 2.5, Na+ > 155 or < 120, Ca2+ critical low with tetany/seizures. Know these cold before exam day.", tag: "med-surg", pinned: false },
    { userId: demoUser.id, title: "Therapeutic communication phrases", content: "'Tell me more about that.' 'It sounds like you are feeling...' Avoid 'why' questions and false reassurance.", tag: "mental-health", pinned: false },
    { userId: demoUser.id, title: "Peds vital sign ranges", content: "Infant HR 100-160, RR 30-60. Toddler HR 90-140, RR 24-40. Always compare to age-appropriate norms, not adult ranges.", tag: "pediatrics", pinned: false },
    { userId: demoUser.id, title: "Delegation quick check", content: "Stable + routine + predictable = can delegate to UAP. Assessment, teaching, evaluation = always RN.", tag: "general", pinned: false },
  ]);

  await db.insert(notes).values([
    {
      userId: freeUser.id,
      title: "Welcome to NurseGrid Prep 👋",
      content: "This is your Notes space. Jot down clinical pearls, drug facts, or reminders here. Try creating a note for each unit exam!",
      tag: "general",
      pinned: true,
    },
  ]);

  console.log("Seeding demo subscription, invoice, attempts, and bookmarks...");
  const [sub] = await db
    .insert(subscriptions)
    .values({
      userId: demoUser.id,
      plan: "annual",
      status: "active",
      amountCents: 900,
      startedAt: premiumSince,
      currentPeriodEnd: new Date(premiumSince.getTime() + 365 * day),
      paymentMethod: "card",
    })
    .returning();

  await db.insert(invoices).values([
    {
      userId: demoUser.id,
      subscriptionId: sub.id,
      amountCents: 900,
      plan: "1 Year",
      status: "paid",
      paymentMethod: "card",
      issuedAt: premiumSince,
    },
  ]);

  // Example of a friend who paid via MTN Mobile Money, to showcase that flow.
  if (referredUsers[0]) {
    const momoStart = new Date(now - 3 * day);
    const [momoSub] = await db
      .insert(subscriptions)
      .values({
        userId: referredUsers[0].id,
        plan: "four_month",
        status: "active",
        amountCents: 500,
        startedAt: momoStart,
        currentPeriodEnd: new Date(momoStart.getTime() + 120 * day),
        paymentMethod: "mtn_momo",
      })
      .returning();
    await db.insert(invoices).values({
      userId: referredUsers[0].id,
      subscriptionId: momoSub.id,
      amountCents: 500,
      plan: "4 Months",
      status: "paid",
      paymentMethod: "mtn_momo",
      momoNumber: "0554123456",
      momoReference: "MP240915.1122.A98213",
      issuedAt: momoStart,
    });

    // Also log this already-approved payment in the review queue so the
    // admin history shows a realistic mix of statuses.
    await db.insert(momoPaymentRequests).values({
      userId: referredUsers[0].id,
      plan: "four_month",
      amountCents: 500,
      momoNumber: "0554123456",
      momoReference: "MP240915.1122.A98213",
      status: "approved",
      reviewedBy: adminUser.id,
      reviewedAt: momoStart,
      subscriptionId: momoSub.id,
      createdAt: momoStart,
    });
  }

  // A couple of MoMo submissions still waiting on admin review, and one that
  // was rejected — so the /dashboard/admin/payments screen looks alive.
  if (referredUsers[1] && referredUsers[2]) {
    await db.insert(momoPaymentRequests).values([
      {
        userId: referredUsers[1].id,
        plan: "annual",
        amountCents: 900,
        momoNumber: "0209876543",
        momoReference: "MP240921.0847.B10492",
        status: "pending",
        createdAt: new Date(now - 3 * 60 * 60 * 1000),
      },
      {
        userId: freeUser.id,
        plan: "four_month",
        amountCents: 500,
        momoNumber: "0244001122",
        momoReference: "MP240921.1930.C55210",
        status: "pending",
        createdAt: new Date(now - 45 * 60 * 1000),
      },
      {
        userId: referredUsers[2].id,
        plan: "four_month",
        amountCents: 500,
        momoNumber: "0271239988",
        momoReference: "INVALID-REF-0001",
        status: "rejected",
        reviewNote: "Reference not found in MoMo transaction history — asked student to resend via WhatsApp.",
        reviewedBy: adminUser.id,
        reviewedAt: new Date(now - 1 * day),
        createdAt: new Date(now - 1 * day - 30 * 60 * 1000),
      },
    ]);
  }

  // Attempts: sample a spread of questions per category with a realistic ~72% accuracy.
  const rand = mulberry32(42);
  const byCategory = new Map<string, typeof allInsertedQuestions>();
  for (const q of allInsertedQuestions) {
    const list = byCategory.get(q.categoryId) ?? [];
    list.push(q);
    byCategory.set(q.categoryId, list);
  }

  const attemptRows: (typeof questionAttempts.$inferInsert)[] = [];
  for (const [categoryId, qs] of byCategory) {
    const sampleSize = Math.min(18, qs.length);
    const sample = seededShuffle(qs, hashStr(categoryId)).slice(0, sampleSize);
    for (const q of sample) {
      const isCorrect = rand() < 0.72;
      const wrongLetters = ["a", "b", "c", "d"].filter((l) => l !== q.correctChoiceId);
      const selectedChoiceId = isCorrect ? q.correctChoiceId : wrongLetters[Math.floor(rand() * wrongLetters.length)];
      const attemptedAt = new Date(now - Math.floor(rand() * 20) * day);
      attemptRows.push({ userId: demoUser.id, questionId: q.id, categoryId, selectedChoiceId, isCorrect, attemptedAt });
    }
  }
  for (const batch of chunk(attemptRows, 500)) {
    await db.insert(questionAttempts).values(batch);
  }

  const bookmarkCandidates = seededShuffle(allInsertedQuestions, 777).slice(0, 12);
  await db.insert(questionBookmarks).values(bookmarkCandidates.map((q) => ({ userId: demoUser.id, questionId: q.id })));

  const allStrategies = await db.select({ id: strategies.id }).from(strategies);
  const strategyBookmarkCandidates = seededShuffle(allStrategies, 321).slice(0, 5);
  await db.insert(strategyBookmarks).values(strategyBookmarkCandidates.map((s) => ({ userId: demoUser.id, strategyId: s.id })));

  console.log("Seeding learning library bookmarks and demo care plans...");
  const learningBookmarkCandidates = seededShuffle(insertedLearningTopics, 555).slice(0, 3);
  await db.insert(learningBookmarks).values(learningBookmarkCandidates.map((t) => ({ userId: demoUser.id, topicId: t.id })));

  await db.insert(carePlans).values([
    {
      userId: demoUser.id,
      title: "Excess Fluid Volume — CHF exacerbation",
      clientInfo: "72 y/o client admitted with heart failure exacerbation, 3-day history of worsening dyspnea and leg swelling.",
      assessment:
        "Subjective: client reports shortness of breath with minimal exertion and 'heavy' swollen legs.\nObjective: bilateral 2+ pitting edema, crackles in bilateral lung bases, weight up 4 lbs from baseline, SpO2 91% on room air.",
      nursingDiagnosis: "Excess Fluid Volume related to compromised regulatory mechanism (heart failure) as evidenced by edema, crackles, and weight gain.",
      goals:
        "Client will exhibit reduced peripheral edema and clear breath sounds within 48 hours.\nClient will maintain stable daily weight (within 2 lbs of dry weight) by discharge.",
      interventions: [
        { action: "Weigh client daily at the same time, same scale, same clothing.", rationale: "Daily weight is the most sensitive indicator of fluid status changes." },
        { action: "Administer diuretics as prescribed and monitor electrolytes.", rationale: "Diuretics promote fluid excretion; monitoring prevents electrolyte imbalance." },
        { action: "Restrict sodium and fluids per prescribed limits and educate the client on why.", rationale: "Reducing sodium and fluid intake decreases fluid retention." },
        { action: "Auscultate lung sounds and assess edema each shift.", rationale: "Tracks response to treatment and detects worsening fluid overload early." },
      ],
      evaluation: "After 48 hours, client's weight decreased by 3 lbs, edema improved to 1+, and lung sounds are clearer. Goal partially met — continue plan.",
      status: "active",
      createdAt: new Date(now - 2 * day),
      updatedAt: new Date(now - 1 * day),
    },
    {
      userId: demoUser.id,
      title: "Risk for Falls — post-op day 1",
      clientInfo: "65 y/o client, post-op day 1 following total hip replacement, first attempt at ambulation today.",
      assessment:
        "Subjective: client states 'I feel a little dizzy when I stand up.'\nObjective: orthostatic blood pressure drop noted, unsteady gait with walker, hip precautions in place.",
      nursingDiagnosis: "Risk for Falls related to orthostatic hypotension and post-surgical mobility impairment.",
      goals: "Client will ambulate with assistive device without falling throughout hospitalization.",
      interventions: [
        { action: "Check orthostatic vital signs before ambulation and have client dangle at bedside first.", rationale: "Identifies orthostatic hypotension before it causes a fall." },
        { action: "Ensure non-slip footwear and use a gait belt during ambulation.", rationale: "Reduces slipping risk and provides secure support if client becomes unsteady." },
        { action: "Keep bed in lowest position with call light within reach.", rationale: "Minimizes injury risk and enables the client to call for help." },
        { action: "Reinforce hip precautions (no crossing legs, no bending past 90 degrees) with each mobility attempt.", rationale: "Prevents hip dislocation while also focusing attention on safe movement." },
      ],
      evaluation: "",
      status: "draft",
      createdAt: new Date(now - 1 * day),
      updatedAt: new Date(now - 1 * day),
    },
  ]);

  console.log("Seeding waitlist signups...");
  await db.insert(waitlistSignups).values([
    { email: "hopeful.nursing.student@example.com", source: "landing", createdAt: new Date(now - 4 * day) },
    { email: "future.rn.2028@example.com", source: "landing", createdAt: new Date(now - 2 * day) },
    { email: "nmc.curious@example.com", source: "landing", createdAt: new Date(now - 1 * day) },
  ]);

  console.log("Seed complete!");
  console.log("Demo premium login: demo@nursegrid.app / password123");
  console.log("Demo free login:    free@nursegrid.app / password123");
  console.log("Admin login:        admin@nursegrid.app / password123");
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
