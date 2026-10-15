import type { Course } from "../types";
import { clinicalJudgementAndPrioritisation } from "./01-clinical-judgement-and-prioritisation";
import { delegationScopeAndSupervision } from "./02-delegation-scope-and-supervision";
import { leadershipManagementAndTheHealthSystem } from "./03-leadership-management-and-the-health-system";
import { managingPeopleAndResources } from "./04-managing-people-and-resources";
import { lawEthicsAndProfessionalRegulation } from "./05-law-ethics-and-professional-regulation";
import { communicationDocumentationQualityAndSafety } from "./06-communication-documentation-quality-and-safety";
import { researchStatisticsAndEntrepreneurship } from "./07-research-statistics-and-entrepreneurship";

export const prioritisationDelegationAndLeadership: Course = {
  slug: "prioritisation-delegation-and-leadership",
  code: "NGP-LDR-113",
  title: "Prioritisation, Delegation & Leadership",
  tagline: "What to do first and how to know, what you may hand to someone else and what you must keep, and how to lead a ward, a team and a service in Ghana — clinical judgement and the priority frameworks, triage and escalation, delegation and scope of practice, supervision and feedback, leadership styles and the functions of management, the Ghana health system and its money, staffing and staff safety, procurement and stores, consent, confidentiality, ethics, negligence and the Nursing and Midwifery Council, communication and documentation, patient safety and quality improvement, research, statistics and the nurse's own business.",
  description:
    "A structured course covering the nursing process as the engine of clinical judgement, nursing versus medical diagnosis, measurable goals and the priority frameworks — ABCDE, Maslow, acute before chronic, unstable before stable, new before old — with the method for answering every 'which patient first' question; triage in the emergency department and the mass-casualty scene, evacuation order, the deteriorating patient, SBAR escalation up the chain, time management on a shift, prioritising when staff do not arrive, and the priorities of home visits, community problems, outpatient flow and discharge; delegation and accountability, the five rights, what may and may not be delegated, scope of practice for every category of Ghanaian nurse and the newly qualified nurse without a PIN, the unsafe instruction, task shifting and skill mix; supportive supervision, induction and preceptorship, feedback, appraisal, progressive discipline, the impaired or dishonest colleague, patient and student teaching and continuing professional development; leadership versus management, the management functions, span of control, unity of command and the chain of command, leadership styles and when each fits, motivation, change, conflict, meetings and managing upwards; the Ministry and the Ghana Health Service, the levels from CHPS to teaching hospital, the district as the planning unit, the planning cycle, SMART objectives, recurrent and capital budgets, where a facility's money comes from, the NHIS and its claims, and the health information that drives planning; staffing by dependency, skill mix, the roster as a safety document, retention and turnover, needlestick, hepatitis B, violence, back injury and tuberculosis, and support for staff after an incident; fixed and variable costs, procurement under Act 663, conflicts of interest, petty cash and audit, running a store without stock-outs, equipment and patient flow; consent, capacity, the age of consent, refusal and self-discharge, confidentiality and its four doors and the Patients' Charter; the four ethical principles and the Ghanaian dilemmas — truth-telling, scarce resources, gifts and boundaries, conscientious objection, assisted dying, FGM, abuse, restraint, the Mental Health Act, disability, culture and grief; negligence, accountability in four directions, the Nursing and Midwifery Council under Act 857, the PIN, misconduct and sanctions, whistleblowing and the laws that frame practice; therapeutic communication and the hard-to-reach patient, breaking bad news, structured handover, telephone orders and critical results, and the principles of documentation; incidents and near misses, just culture, root cause analysis, risk management, quality dimensions, standards and SOPs, audit against research, PDSA, identification and checklists, complaints, maternal death audit and notification; research methods, sampling, ethics and evidence-based practice; levels of measurement, averages, spread, the normal curve, rates and denominators, p values, confidence intervals, correlation and the choice of test; and entrepreneurship — the opportunity, SWOT, the business plan, registration and licensing, capital, pricing and break-even, cash against profit, records, tax and the ethics of advertising and referral. Each lesson is written for Ghanaian nursing and midwifery students, uses the diagrams from the NurseGrid question bank, and ends with practice questions drawn from the same bank. The course also covers being in charge and difficult conversations. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🧭",
  level: "Intermediate",
  gradient: "from-blue-700 via-indigo-500 to-violet-300",
  creditHours: 4,
  dueInDays: 30,
  outcomes: [
    "Apply the nursing process and the priority frameworks — ABCDE, Maslow, acute before chronic, unstable before stable, new before old — to decide which patient to see first and which action to take first, write goals that can be evaluated, use early-warning scores and the IMCI danger signs, triage in the emergency department and the mass-casualty scene, escalate a deteriorating patient with SBAR up the chain, manage a shift and prioritise safely when staff and resources are short.",
    "Delegate safely by applying the five rights, keep what cannot be delegated, state the scope of practice of every category of Ghanaian nurse including the student and the newly qualified nurse without a PIN, respond to an unsafe instruction or an untrained procedure, judge task shifting and skill mix, and supervise, induct, teach, give feedback, appraise and discipline fairly while acting on an impaired or dishonest colleague.",
    "Distinguish leadership from management, apply the management functions, span of control, unity of command and the chain of command, choose the leadership style the situation needs, motivate staff beyond salary, lead change, manage conflict, run productive meetings and make a written case upwards.",
    "Describe Ghana's health system from CHPS to teaching hospital and who manages each level, plan with the planning cycle and SMART objectives, distinguish recurrent from capital budgets, explain where a facility's money comes from and how NHIS claims are paid and rejected, use DHIS2 and coverage indicators, staff a ward by dependency with a safe roster, retain staff, protect them from occupational harm and support them after incidents, and manage procurement, conflicts of interest, petty cash, stores, equipment and patient flow lawfully and efficiently.",
    "Obtain and verify valid consent, apply the rules on capacity, the age of consent, refusal, withdrawal and self-discharge, keep confidentiality and recognise its four lawful exceptions and the everyday breaches, uphold the Patients' Charter, and resolve ethical dilemmas with the four principles — truth-telling, scarce resources, gifts and boundaries, conscientious objection, assisted dying, FGM, abuse, restraint, the Mental Health Act, disability, culture and grief.",
    "Explain the four elements of negligence and the nurse's accountability to the patient, the employer, the Nursing and Midwifery Council and the courts, describe registration, the PIN, CPD, misconduct and sanctions under Act 857, act correctly after an error and under the Whistleblower Act, and name the laws that frame Ghanaian nursing practice.",
    "Communicate therapeutically with every patient including the deaf, the aphasic, the confused and the patient who speaks another language, break bad news, hand over with SBAR, handle telephone orders and critical results, document to the standard that stands up in court and in an NHIS claim, respond to incidents and near misses in the right order within a just culture, manage risk, run audit and PDSA cycles, handle complaints, and support maternal death audit and disease notification.",
    "Read and conduct research — the process, designs, sampling, measurement, ethics and evidence-based practice — interpret the statistics nurses meet (levels of measurement, mean, median and mode, standard deviation and the normal curve, rates and denominators, p values, confidence intervals, correlation and the choice of test, honest graphs), and plan a lawful, viable nursing business with SWOT, a business plan, registration and licensing, pricing, break-even, cash-flow, records, tax and ethical marketing.",
    "Take charge of a shift — handover, allocation, flow and escalation — and navigate difficult conversations with structure and candour.",
  ],
  audience: [
    "Final-year nursing and midwifery students preparing for the N&MC licensing examination, in which prioritisation, delegation, management, ethics, law, research and entrepreneurship questions appear in every paper",
    "Newly qualified nurses and midwives taking charge of a shift for the first time, supervising nurse assistants and students, and answering to the Council for their own practice",
    "Nurses in charge of wards, health centres and CHPS zones, sub-district and district team members, and nurses planning private practice who manage staff, money, supplies, quality and the law in Ghana",
  ],
  modules: [
    clinicalJudgementAndPrioritisation,
    delegationScopeAndSupervision,
    leadershipManagementAndTheHealthSystem,
    managingPeopleAndResources,
    lawEthicsAndProfessionalRegulation,
    communicationDocumentationQualityAndSafety,
    researchStatisticsAndEntrepreneurship,
  ],
  postTest: {
    title: "Post-Test: Prioritisation, Delegation & Leadership",
    description:
      "Twenty-five questions drawn at random from the prioritisation, delegation, leadership, management, law, ethics, communication, quality, research, statistics and entrepreneurship question pool. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["leadership delegation", "prioritization", "prioritisation", "delegate", "scope of practice", "nurse in charge", "ward manager", "triage", "mass casualty", "consent", "confidential", "negligen", "accountab", "the council", "continuing professional development", "whistleblow", "documentation", "handover", "sbar", "incident report", "near miss", "just culture", "root cause", "audit", "quality improvement", "complaint", "nhis", "budget", "procurement", "stock card", "reorder level", "first expiry", "roster", "skill mix", "needlestick", "research", "sampling", "hypothesis", "standard deviation", "median", "confidence interval", "p value", "correlation", "incidence", "prevalence", "business plan", "swot", "break even", "contribution", "cash flow"],
  },
  evaluation: {
    title: "Course Evaluation",
    description: "Your feedback shapes the next version of this course. The evaluation takes about one minute and is required before your certificate is issued.",
    items: [
      { id: "objectives", prompt: "The course met the stated learning outcomes." },
      { id: "content", prompt: "The content was accurate, clear and relevant to nursing and midwifery practice in Ghana." },
      { id: "diagrams", prompt: "The diagrams and tables helped me understand the material." },
      { id: "questions", prompt: "The practice questions and post-test reflected what was taught." },
      { id: "recommend", prompt: "I would recommend this course to a colleague or classmate." },
    ],
    commentPrompt: "What should we add, remove or explain better?",
  },
};
