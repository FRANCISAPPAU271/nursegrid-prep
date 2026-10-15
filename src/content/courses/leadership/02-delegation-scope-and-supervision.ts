import type { CourseModule } from "../types";

export const delegationScopeAndSupervision: CourseModule = {
  slug: "delegation-scope-of-practice-and-supervision",
  title: "Delegation, scope of practice and supervision",
  summary: "What a registered nurse may hand to someone else and what she must keep — the five rights of delegation, the tasks that can never be delegated, scope of practice for the registered nurse, the midwife, the enrolled and community health nurse, the nurse assistant, the student and the unregistered worker, the newly qualified nurse without a PIN, the unsafe instruction, task shifting, accountability after a delegated task goes wrong — and then the other side of the relationship: supportive supervision, feedback, appraisal, progressive discipline, the impaired or dishonest colleague, teaching patients and students, and continuing professional development.",
  lessons: [
    {
      slug: "delegation-and-scope-of-practice",
      title: "Delegation and scope of practice — what you may hand over, and what you must keep",
      minutes: 18,
      objectives: [
        "Define delegation, distinguish responsibility from accountability, and apply the five rights of delegation to a ward assignment.",
        "State what a registered nurse may delegate to a trained nurse assistant and what can never be delegated, and justify the decision by the stability and predictability of the patient.",
        "Describe scope of practice in Ghana for the registered nurse and midwife, the enrolled and community health nurse, the nurse assistant, the student and the unregistered worker, including the newly qualified nurse who has not yet received a PIN.",
        "Respond correctly to an unsafe instruction, a request to perform a procedure outside your training, task shifting in a district service, and the delegated task that is done incorrectly.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Delegation — the task moves, the accountability does not",
          paragraphs: [
            "Delegation is the transfer of <strong>a task, the authority to perform it, and responsibility for performing it properly and reporting back</strong> from a registered nurse to another person who is competent to do it. What does not move is <strong>accountability</strong>: the registered nurse remains answerable for deciding that it was safe to delegate — that the task was appropriate, the person competent, the patient suitable, the instruction clear and the supervision adequate. The assistant answers for the quality of her own performance within the task she accepted. When a health care assistant performs a delegated task incorrectly, both are accountable, each for a different thing: <strong>the nurse for the decision to delegate, the assistant for the performance</strong>.",
            "This is why \"years of experience\" and \"the ward is short-staffed\" never appear in a correct answer about delegation. Experience does not widen a legal scope of practice, and a staffing crisis does not convert an unsafe delegation into a safe one — it makes escalation of the shortfall the right answer instead.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MAN-0857.svg",
          alt: "Delegation diagram — what moves to the other person (the task, the authority, responsibility to do it properly and report back) and what stays with you (accountability for the outcome, choosing the right person, supervising and checking), the five rights of delegation, and the tasks never to delegate: assessment of an unstable patient, first evaluation, teaching, care planning and any registered judgement.",
          caption: "You can delegate the task; you can never delegate the accountability. Five questions before you hand anything over: right task, right person, right patient, right instruction, right supervision.",
        },
        {
          type: "table",
          heading: "The five rights of delegation",
          columns: ["Right", "The question to ask", "Where it goes wrong"],
          rows: [
            ["<strong>Right task</strong>", "Is this task routine, predictable, with an established procedure and an expected outcome — and within this category of worker's training and the facility's policy?", "Delegating a task because it is time-consuming rather than because it is suitable: a first dressing assessment, an intravenous push, the first feed after a stroke."],
            ["<strong>Right circumstance / right patient</strong>", "Is this patient stable and predictable enough that the task will go as expected? Is the setting safe — equipment, supervision, help nearby?", "Delegating routine observations on a patient who is deteriorating; sending an assistant to bathe a post-operative patient whose blood pressure is falling."],
            ["<strong>Right person</strong>", "Can this particular individual do it today — trained, assessed as competent, not already overloaded, confident enough to say when she is unsure?", "Assuming every assistant has the same skills; delegating to a new worker without checking what she has been taught."],
            ["<strong>Right direction / instruction</strong>", "Did I say exactly what, for whom, how, by when, what to look for, and what to report back immediately?", "\"Do the obs on bay two\" — with no parameters, no time and no instruction to report a pulse above 110 or a saturation below 94 per cent."],
            ["<strong>Right supervision and evaluation</strong>", "How will I check, when will she report back, and did I actually look at the result and act on it?", "Delegating and forgetting: the recorded blood pressure of 80/50 sits in the chart for three hours because nobody asked."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MAN-0012.svg",
          alt: "A decision tree — is the patient predictable? Yes: may delegate stable routine care with an established plan and expected outcome. No: the registered nurse keeps the first assessment, blood or intravenous push, teaching and the unstable patient — captioned years of experience never widen a legal scope of practice.",
          caption: "The one question that decides most delegation: is the patient predictable? Stable, routine, established plan — delegate with instructions and follow-up. Unstable, first assessment, teaching, intravenous medicines — the registered nurse keeps it.",
        },
        {
          type: "text",
          heading: "What may be delegated and what may not",
          paragraphs: [
            "<strong>May be delegated to a trained nurse assistant or health care assistant, with instructions and follow-up</strong>: assisting a stable patient to bathe, dress and mobilise; routine vital signs on a stable patient with clear parameters for reporting; recording intake and output; feeding a patient without swallowing difficulty; bed-making, positioning and pressure-area care on a stable patient; collecting a urine specimen; escorting a stable patient; cleaning and restocking. The common thread is <strong>routine, predictable, within the assistant's training, and a stable patient</strong>.",
            "<strong>Never delegated, because they require registered judgement</strong>: the <strong>initial and ongoing assessment</strong> of a patient; the <strong>first</strong> evaluation of any new or changed problem; <strong>care planning</strong> and the <strong>evaluation</strong> of whether care worked; <strong>patient and family teaching</strong>; care of the <strong>unstable</strong> or deteriorating patient; <strong>medication administration</strong> beyond the assistant's legal scope — and always intravenous medicines, blood, controlled drugs and the first dose of a new drug; interpretation of observations; triage; taking a telephone or verbal order; and anything the facility's policy or the Nursing and Midwifery Council's scope of practice reserves to the registered nurse. Interpreting an assistant's finding — the blood pressure of 80/50 — is itself an assessment, and it is the nurse's.",
          ],
        },
        {
          type: "table",
          heading: "Scope of practice in Ghana — who may do what",
          columns: ["Category", "Registration", "Scope, in brief"],
          rows: [
            ["<strong>Registered general nurse / registered midwife</strong> (also registered mental and community health nurses with professional registration)", "Professional register of the Nursing and Midwifery Council; practises on a valid <strong>PIN</strong> renewed each year", "Full nursing process; assessment, planning, delegation and supervision; medicines administration by all routes within prescription and training; the midwife additionally manages normal pregnancy, labour and the puerperium independently and prescribes within the midwifery formulary and protocols."],
            ["<strong>Enrolled nurse / community health nurse (certificate)</strong>", "Register of the Council (auxiliary/enrolled grades); PIN or AIN as the Council directs", "Nursing care under the direction of a registered nurse; medicines within training and protocol; community health nurses deliver CHPS services — immunisation, growth monitoring, antenatal and postnatal follow-up, home visits — under the sub-district team, referring beyond protocol."],
            ["<strong>Nurse assistant (clinical / preventive — NAC, NAP)</strong>", "Auxiliary register; <strong>AIN</strong> (assistant identification number) renewed annually; 10 CPD credits", "Assists the registered nurse with routine, delegated, predictable care of stable patients and with preventive and community activities; does not assess, plan, teach or give intravenous medicines; works under supervision and reports back."],
            ["<strong>Student nurse / midwife</strong>", "Indexed with the Council as a student; not registered", "Practises only under the supervision of a registered nurse or midwife; new skills — the first intramuscular injection outside the skills laboratory — under <strong>direct</strong> supervision with each step checked; never counted in the staffing numbers; never left in charge; never signs alone for medicines or observations."],
            ["<strong>Newly qualified nurse awaiting PIN</strong>", "Passed the licensing examination but <strong>not yet registered</strong>", "Cannot practise independently until registration is complete — may assist under the supervision of a registered nurse but may not independently administer intravenous medication, take charge or sign as a registered nurse, however short-staffed the ward. The employer's rota is not a licence."],
            ["<strong>Unregistered worker</strong> (ward aide, orderly, cleaner, volunteer)", "None", "Non-clinical support — cleaning, portering, errands, restocking; may assist a stable patient with simple tasks only under direct instruction; never observations, medicines, feeding a patient with swallowing risk or anything requiring recording in the clinical record."],
          ],
        },
        {
          type: "text",
          heading: "The instruction you should not follow",
          paragraphs: [
            "A nurse is asked to carry out a procedure she has never been trained to perform, and the doctor says he will supervise. The answer is to <strong>decline until she has been trained and assessed as competent</strong>, and to say so plainly; the doctor's presence does not confer her competence, and the harm, if it occurs, is hers before the Council. A doctor instructs a dose she is confident is ten times too high: she <strong>withholds the dose, states her concern, asks the prescriber to re-check, escalates to a senior prescriber or pharmacist if the instruction is repeated, and records what she did</strong>. \"The doctor wrote it\" has never been a defence, because the nurse who administers a medicine is accountable for the act of administering it. Refusing is not insubordination when the task is outside your competence or clearly unsafe — carrying it out is the offence.",
            "The same logic protects the newly qualified nurse. A ward sister asks a nurse who is still awaiting her PIN to administer intravenous medication independently because the ward is short-staffed. She explains that she <strong>cannot practise independently until registration is complete and offers to assist under supervision</strong>. The pressure is real; the answer does not change.",
          ],
        },
        {
          type: "text",
          heading: "Task shifting and skill mix — delegation at the level of the service",
          paragraphs: [
            "Ghana, like every country with too few doctors, <strong>shifts tasks</strong> down the ladder: midwives manage normal birth and prescribe within a formulary, nurses initiate antiretroviral therapy and manage uncomplicated malaria under the Standard Treatment Guidelines, community health officers run CHPS compounds and nurse assistants take on routine care. Task shifting is legitimate and well evidenced — <strong>provided it is a designed system</strong>: defined training, written protocols that state what to do and when to refer, assessment of competence, clear clinical support and supervision, and a legal and policy framework that recognises the new role. Task shifting without these is simply unsupervised practice with a new name.",
            "<strong>Skill mix</strong> is the proportion of registered nurses to assistants on a shift. Replacing two registered nurses with three assistants at the same cost looks efficient, but the tasks that only a registered nurse may perform — assessment, intravenous medicines, the deteriorating patient, decisions — <strong>accumulate undone</strong>, and dilution shows first as missed care rather than as an obvious incident. A night shift with one registered nurse and three assistants for forty patients is reported <strong>in writing to the manager on call</strong> at the time, because the registered nurse cannot delegate her way out of a staffing level that leaves her unable to assess the patients she is accountable for.",
          ],
        },
        {
          type: "list",
          heading: "Allocating the morning workload — a worked example",
          style: "steps",
          items: [
            "<strong>Know the team</strong>: one registered nurse (you), one enrolled nurse, one nurse assistant, two second-year students, and a ward aide. Know the patients: twenty-four, of whom three are post-operative day one, one is being transfused, one is confused and at risk of falling, two are for discharge, and the rest are stable.",
            "<strong>Keep for yourself</strong>: the assessment round, the transfusion checks and observations, the intravenous and controlled medicines, the confused patient's reassessment, the new admission, and the decision about every change reported to you.",
            "<strong>Enrolled nurse</strong>: oral medicines within her scope, dressings with established plans, the discharge teaching that you have planned and will confirm, with a specific instruction to report any wound that looks different from yesterday.",
            "<strong>Nurse assistant</strong>: hygiene, mobilisation and routine observations on the stable patients, with written parameters — report at once any pulse above 110, systolic pressure below 100, saturation below 94 per cent, temperature above 38 °C or any patient who \"is not himself\" — and the intake and output charts.",
            "<strong>Students</strong>: paired with a registered or enrolled nurse, never alone with a patient group; new skills under direct supervision; their learning objectives for the day agreed at the start.",
            "<strong>Ward aide</strong>: environment, supplies, errands and escorting a stable, ambulant patient — nothing that is recorded in the clinical notes.",
            "<strong>Close the loop</strong>: a time for each to report back, and you go and look at the results — the observation chart, the dressing, the drain — because delegation ends when you have evaluated the outcome, not when you have given the instruction.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "What examiners ask about delegation and scope",
          body: "A registered nurse may delegate assisting a stable patient to bathe and recording intake and output; she may not delegate assessment, teaching, evaluation, care planning, intravenous medicines or the unstable patient. When a delegated task is done incorrectly, the nurse is accountable for the decision to delegate and the assistant for the performance. A newly qualified nurse without a PIN cannot administer intravenous medication independently and offers to assist under supervision. A nurse asked to perform an untrained procedure declines until trained and assessed as competent, even if the doctor offers to supervise. A dose believed to be ten times too high is withheld and queried with the prescriber. A student gives her first intramuscular injection under direct supervision with each step checked. Task shifting must be accompanied by defined training, written protocols and clinical support. An unsafe skill mix is reported in writing to the manager on call.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Three phrases that should make you suspicious of an option",
          body: "\"Because the ward is short-staffed\" — staffing never widens scope. \"She has years of experience\" — experience never widens a legal scope either. \"The doctor said he would take responsibility\" — nobody can take your accountability from you; it is yours before the patient, the employer, the Council and the court.",
        },
      ],
      keyPoints: [
        "Delegation transfers the task, the authority and the responsibility to perform and report back; accountability for deciding it was safe to delegate stays with the registered nurse, and the assistant is accountable for her own performance.",
        "Five rights: right task (routine, predictable, within training), right circumstance and patient (stable), right person (competent today), right direction (what, how, by when, what to report) and right supervision (check and act on the result).",
        "Delegable: hygiene, mobilising and routine observations on stable patients with parameters, intake and output, feeding without swallowing risk, specimens, escorts; never delegable: assessment, first evaluation, care planning, teaching, the unstable patient, intravenous medicines, blood, controlled drugs, interpretation of findings and verbal orders.",
        "Scope in Ghana is set by the Nursing and Midwifery Council: registered nurses and midwives practise on a valid PIN; enrolled and community health nurses work under direction; nurse assistants hold an AIN and assist with delegated routine care; students practise only under supervision; the newly qualified nurse without a PIN may assist but not practise independently.",
        "An untrained procedure is declined until competence is assessed, whoever offers to supervise; an unsafe dose is withheld, queried, escalated and recorded; refusing an unsafe task is not insubordination — carrying it out is the offence.",
        "Task shifting is safe only as a designed system — training, written protocols with referral points, assessed competence, supervision and legal recognition; skill-mix dilution shows first as missed care, and an unsafe mix is reported in writing at the time.",
        "Delegation ends when the registered nurse has evaluated the result and acted on it — a delegated observation nobody looked at is an assessment nobody made.",
      ],
      quiz: { keywords: ["delegate","delegated","delegation and accountability","delegation and scope","scope of practice","nurse's scope","health care assistant","nurse assistant","nursing assistant","assistant to","task shifting","task shift","skill mix","awaiting her pin","newly qualified","never been trained","beyond her","unsafe instruction","ten times too high","accountability in delegation","accountability for a delegated","what cannot be delegated","appropriately delegate","allocating the morning workload","assignment","supervision","under supervision","supervis","student nurse","practised only in the s","enrolled nurse","registered nurse","verbal order","professional accountability","responding to an unsafe instruction","theatre team roles","scope of practice in private practice","prescribe medicines beyond","nurse's scope regarding herbal","refusing to care","community health officer","role of the community health officer","working with volunteers","selection of community health volunteers"] },
    },
    {
      slug: "supervision-teaching-feedback-and-performance",
      title: "Supervision, teaching, feedback and performance — growing the people you lead",
      minutes: 17,
      objectives: [
        "Distinguish supportive supervision from inspection, and describe orientation, induction, preceptorship and mentoring for new staff and students.",
        "Give feedback that changes behaviour, conduct a developmental appraisal, apply progressive discipline fairly, and manage absence, lateness and the poor performer.",
        "Act correctly when a colleague is impaired, dishonest or unsafe — the colleague who smells of alcohol, the falsified chart, the request to sign for care not given.",
        "Teach patients and students effectively — assessing readiness and barriers, teach-back and return demonstration — and meet the Council's continuing professional development requirements.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Supervision that helps rather than inspects",
          paragraphs: [
            "Traditional inspection <strong>finds fault, records it and departs</strong>; staff learn to prepare a performance for the visit and to hide what is wrong. <strong>Supportive supervision</strong> is different in purpose and in method: the supervisor observes practice alongside the staff, uses a checklist as a conversation rather than a scorecard, <strong>identifies problems and helps staff solve them on the spot</strong>, teaches, recognises what is done well, agrees actions with dates, and follows up at the next visit. It is how the sub-district team supervises CHPS zones, how the district supervises health centres and how a ward manager supervises a shift. The test of good supervision is that staff want the supervisor to come.",
            "Supervision begins before the first shift. <strong>Orientation</strong> to a new ward or post — the layout, the emergency equipment, the policies, the people, who to call and how — prevents the errors that come from not knowing where the resuscitation trolley is, and a structured <strong>induction</strong> with a named <strong>preceptor</strong> is the factor that most strongly determines whether a newly posted nurse stays beyond her first year. A preceptor teaches the role for a defined period; a <strong>mentor</strong> is a longer, chosen relationship that supports career growth. Students placed in large groups overwhelm a ward: the manager protects both learning and care by agreeing numbers with the school, allocating each student to a named supervisor and planning objectives for the placement.",
          ],
        },
        {
          type: "table",
          heading: "Feedback, appraisal and discipline — three different conversations",
          columns: ["Conversation", "Purpose and method", "The rule"],
          rows: [
            ["<strong>Feedback</strong> (a nurse documented late; a student missed a step)", "Prompt, <strong>private</strong>, specific to the <strong>observable behaviour</strong> and its effect on the patient or team, not to character; ask for the person's account; agree what will change and when; recognise good practice just as specifically.", "Praise in public, correct in private. \"You recorded the 06:00 observations at 09:30, so the doctor reviewed the wrong figures\" — not \"you are careless\"."],
            ["<strong>Appraisal</strong> (annual, structured)", "A <strong>developmental process</strong>: review performance against the objectives agreed at the start of the period, recognise achievement, identify learning needs, agree new objectives and a development plan. It is not primarily a tool for pay or punishment, and nothing in it should be a surprise if feedback has been given through the year.", "Declare a conflict of interest — a close relative or friend — and ask another manager to conduct it, because an appraisal that cannot be seen as impartial protects nobody."],
            ["<strong>Progressive discipline</strong> (repeated lateness, repeated unexplained absence, performance below standard despite feedback)", "<strong>Informal discussion</strong> → <strong>formal verbal warning</strong> → <strong>written warning</strong> → <strong>final written warning</strong> → <strong>dismissal</strong>, each step following the facility's disciplinary procedure, with the person told the concern, allowed to respond and be accompanied, and the outcome recorded. Gross misconduct — assault, theft, falsifying records, practising while intoxicated — may justify suspension and a formal inquiry at once.", "Procedure protects both sides: a dismissal that skipped the steps is overturned, and the unsafe nurse returns. Absence that is sudden and out of character is explored first — illness, bereavement, a problem at home — before it is disciplined."],
          ],
        },
        {
          type: "text",
          heading: "The poor performer, the absent nurse and the one who is always late",
          paragraphs: [
            "A nurse whose clinical performance remains below standard despite feedback needs a <strong>structured performance improvement plan</strong>: the specific standards expected, the support that will be provided (supervised practice, training, a preceptor), the time allowed, how performance will be measured and what happens if it does not improve. Patient safety may require <strong>restricting her duties</strong> meanwhile. Only when a fair plan has failed does the matter move into the disciplinary route. A <strong>normally reliable nurse who is suddenly absent without notice</strong> several times in a month is spoken to privately and asked what has changed — the manager's first tool is curiosity, not a warning — and the facility's absence policy (certification, return-to-work interviews) is then applied consistently to everyone.",
            "<strong>Repeated lateness despite an informal discussion</strong> moves to a <strong>formal verbal warning under the disciplinary procedure</strong> — not a shouted rebuke at handover, not silence, and not a written warning that skips a step.",
          ],
        },
        {
          type: "text",
          heading: "When a colleague is unsafe",
          paragraphs: [
            "A colleague who <strong>smells strongly of alcohol at the start of a shift</strong> is removed from patient care immediately — the nurse in charge is told, the colleague is not allowed to practise, and the matter is reported through the facility's procedure. The priority is the patients she would otherwise have cared for; concern for the colleague's welfare and career comes second and is addressed through support and, where appropriate, referral for help. <strong>Collegial loyalty does not outrank patient safety</strong>.",
            "A senior colleague is seen <strong>repeatedly falsifying observation charts</strong>. Falsified observations mean clinical decisions are being made on invented data; the nurse <strong>reports it through the proper channel</strong> — the nurse in charge or the manager, in writing, with dates and facts — and if the facility does not act, the Whistleblower Act, 2006 (Act 720) protects a disclosure made in good faith to a listed recipient. A colleague who asks you to <strong>sign that observations were done</strong> during a busy shift when they were not is declined: you record only what you did and observed, because signing for care not given is falsification and professional misconduct, however ordinary the request sounds.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-JUS-2222.svg",
          alt: "Your licence and what to do the moment you make a mistake — PIN for nurses and midwives, AIN for nurse assistants, renewal by 31 January, CPD credits of 10, 15 and 20 by grade, the offence of practising on a lapsed PIN under Act 857, the Council's sanctions, and the order after an error: patient, then prescriber, then paper.",
          caption: "Staying on the register is a yearly act: renew by 31 January, meet the CPD requirement for your grade, and tell the Registrar when your name or address changes. The employer's rota is not a licence.",
        },
        {
          type: "text",
          heading: "Continuing professional development",
          paragraphs: [
            "Registration with the Nursing and Midwifery Council is valid for twelve months and is <strong>renewed by 31 January</strong> each year, on evidence that the practitioner has earned the required <strong>continuing professional development credits</strong>: <strong>ten</strong> for nurse assistants, <strong>fifteen</strong> for staff nurses and midwives through the officer grades, and <strong>twenty</strong> for senior officers, tutors and above. The requirement rises with seniority because greater responsibility and influence over others' practice demand more updating. Credits come from accredited workshops, in-service training, conferences, online modules, teaching and publication; the certificates are kept and uploaded at renewal.",
            "CPD is not paperwork. Practice changes — the cord-care recommendation, the antimalarial of choice, the HPV schedule, the sepsis bundle — and a nurse whose knowledge stopped at graduation is practising yesterday's medicine on today's patients. A manager who plans <strong>in-service training from identified training needs</strong> (incident patterns, audit results, new services, staff requests) rather than from whatever course is on offer, and who records attendance for CPD, is supervising as well as developing.",
          ],
        },
        {
          type: "text",
          heading: "Teaching patients and families — knowing is not doing",
          paragraphs: [
            "Most failed health teaching assumed the problem was ignorance. It usually is not. A person who does not act on what she knows may <strong>not believe it applies to her</strong>, may face a <strong>cost, distance or time</strong> she cannot meet, may have <strong>someone whose opinion matters who disapproves</strong>, or may live where the behaviour is simply <strong>not possible</strong>. More information changes none of these. Effective teaching therefore starts with assessment: what does she already know and believe, what is stopping her, is she ready to change (not thinking about it, thinking, ready, already doing it), can she read, which language does she think in, who makes decisions in her household, and what does a day's lost trading cost her?",
            "Then the method: one or two key messages rather than ten; plain language and pictures for those who cannot read; the patient's own supplies in her hands (the inhaler, the insulin pen, the ORS packet); a <strong>return demonstration</strong> for any skill — the daughter who must dress her mother's leg ulcer shows the nurse she can do it before the nurse leaves; and <strong>teach-back</strong> for any information — \"so that I know I explained it well, tell me how you will take these tablets\" — because \"do you understand?\" has only one polite answer. The best check that a patient has understood his discharge instructions is to ask him to explain them in his own words. Record what was taught, to whom, how it was checked and what remains to be done.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-HCB-1307.svg",
          alt: "Why knowing is not doing — four reasons a person does not act on what she knows (does not believe it applies to her, cost or distance or time, disapproval of someone who matters, not possible where she lives), what moves a decision, and how to meet people at each stage of readiness.",
          caption: "Before you teach, find out which of the four barriers you are facing — more information changes none of them. Then meet the person where she is: raise the issue, explore what holds her back, agree one small step, or plan for the relapse.",
        },
        {
          type: "diagram",
          src: "/diagrams/NG-CPD-1983.svg",
          alt: "The adolescent in hospital — a consultation that works (part of the visit without the parent, confidentiality and its limits explained first), why adolescents stop taking medicines, how to ask about adherence without producing a polite lie, and transition to adult services planned over years.",
          caption: "Teaching an adolescent: privacy, honesty and some control. Normalise missed doses, ask which days she missed and what got in the way — and never ask \"you are taking your medicines, aren't you?\"",
        },
        {
          type: "list",
          heading: "Supervising a student — the sequence for a new skill",
          style: "steps",
          items: [
            "<strong>Check what she has done before</strong>: a student who has practised an intramuscular injection only in the skills laboratory is at her first live attempt whatever her year.",
            "<strong>Prepare together</strong>: the prescription, the drug, the dose, the site, the equipment, the patient's consent to a student performing the procedure under supervision.",
            "<strong>Allow it under direct supervision</strong>, at the bedside, <strong>checking each step before it is performed</strong> — the registered nurse can intervene before harm, not after.",
            "<strong>Debrief immediately and privately</strong>: what went well, what to change, what to practise; sign the competency record only for what you actually observed.",
            "<strong>Never</strong> leave a student to perform a new skill alone, count a student in the staffing numbers, or let a student sign for medicines or observations without the supervising nurse's countersignature.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "What examiners ask about supervision, feedback and CPD",
          body: "Supportive supervision identifies problems and helps staff solve them on the spot, unlike inspection, which finds fault and departs. Effective feedback is private, specific to the behaviour and its effect, and ends in an agreed change. Appraisal reviews performance against agreed objectives and plans development; a manager appraising a close relative declares the conflict and hands the appraisal to another manager. Repeated lateness after an informal discussion earns a formal verbal warning under the disciplinary procedure. A colleague who smells of alcohol is removed from duty and reported; falsified charts are reported through the proper channel; you never sign for observations you did not do. Structured induction with a preceptor is what most strongly determines whether a newly posted nurse stays. CPD credits are 10 (nurse assistants), 15 (staff nurse to officer) and 20 (senior officer and above); registration is renewed by 31 January. The best check of understanding is teach-back — the patient explains in his own words.",
        },
      ],
      keyPoints: [
        "Supportive supervision observes, teaches, solves problems on the spot and follows up; inspection finds fault and leaves — and teaches staff to perform for the visit.",
        "Structured orientation and induction with a named preceptor prevent early errors and are the strongest predictor that a newly posted nurse stays; students are allocated to named supervisors in numbers the ward can teach.",
        "Feedback is prompt, private, specific to observable behaviour and its effect, and ends in an agreed change; appraisal is developmental and reviews agreed objectives; conflicts of interest are declared and handed on.",
        "Discipline is progressive and procedural — informal discussion, formal verbal warning, written warning, final warning, dismissal — with the person heard at each step; gross misconduct may justify immediate suspension and inquiry; sudden out-of-character absence is explored before it is disciplined.",
        "An impaired colleague is removed from patient care and reported; falsified records are reported through the proper channel, with the Whistleblower Act protecting good-faith disclosure; nobody signs for care not given.",
        "Registration is renewed by 31 January each year on evidence of CPD — 10 credits for nurse assistants, 15 for staff nurse to officer grades, 20 for senior officer, tutor and above; in-service training is planned from identified needs.",
        "Teaching starts with assessment of belief, barriers, literacy, language, readiness and who decides at home; it uses few messages, the patient's own supplies, return demonstration for skills and teach-back for information; students perform new skills only under direct, step-by-step supervision.",
      ],
      quiz: { keywords: ["supportive supervision","giving feedback","feedback","performance appraisal","appraisal","progressive discipline","repeatedly late","late for duty","poor performer","below standard","absence management","absent without","orientation of new staff","orientation","induction","newly posted","teaching a family carer","teaching a patient","patient teaching","teach back","student supervision","large groups of students","student on placement","student nurse","competenc","continuing professional development","credit requirement","impaired","smells strongly of alcohol","falsifying","falsif","whistle","colleague who","senior colleague","friend or relative at work","close family relation","recognition and morale","motivating a small team","motivation and retention","no budget for staff rewards","praise","team briefing","effective meetings","ward meeting","supporting staff after a death","staff support after","visibly upset","evaluating a nutrition education session","evaluating health promotion"] },
    },
  ],
};
