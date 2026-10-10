import type { CourseModule } from "../types";

export const communicationDocumentationQualityAndSafety: CourseModule = {
  slug: "communication-documentation-quality-and-patient-safety",
  title: "Communication, documentation, quality and patient safety",
  summary: "The information that keeps patients safe — therapeutic communication and the patient who is hard to reach, breaking bad news, structured handover with SBAR, escalation and telephone communication, the critical result, written reports, and the rules of documentation that stand up in court and in an NHIS claim; then patient safety as a system: incidents and near misses, just culture, root cause analysis, risk management, quality dimensions, standards and SOPs, audit against research, the audit cycle and PDSA, patient identification and checklists, complaints, maternal death audit and disease notification.",
  lessons: [
    {
      slug: "communication-handover-and-documentation",
      title: "Communication, handover and documentation",
      minutes: 18,
      objectives: [
        "Use therapeutic communication — and recognise the blocks — with the frightened, the grieving, the angry, the deaf, the aphasic, the confused, the intellectually disabled and the patient who speaks another language.",
        "Give and receive a structured handover with SBAR, communicate by telephone safely including verbal orders and critical results, and write a nursing report that is factual and free of opinion.",
        "Apply the principles of documentation — contemporaneous, factual, legible, signed, dated and timed, corrected by single line, never in advance and never for care not given — to notes, charts, registers and electronic records.",
        "Document the difficult situations correctly: the wrong patient's notes, a late entry, a refusal, a difficult conversation, an allergy, a risk assessment, seclusion, and a telephone order.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Therapeutic communication — the answer keeps the patient talking",
          paragraphs: [
            "In examination options the therapeutic answer is almost always the one that <strong>keeps the patient talking</strong>. The blocks end a conversation: <strong>false reassurance</strong> (\"don't worry, everything will be fine\"), <strong>advising</strong> (\"if I were you…\"), <strong>asking why</strong> (which demands a defence), <strong>changing the subject</strong>, <strong>judging or minimising</strong> (\"others are far worse off\") and <strong>a run of closed questions</strong>. The openers carry it on: <strong>open questions</strong> (\"tell me what that has been like\"), <strong>reflecting</strong> (\"you sound frightened of going home\"), <strong>clarifying</strong> (\"when you say empty, what do you mean?\"), <strong>silence</strong> — waiting and letting the patient fill it — <strong>offering yourself</strong> (\"I will sit with you for a while\") and <strong>summarising</strong>. The test for any option: what can the patient say next? If the honest answer is nothing, or just yes, it is a block however kind it sounds. A patient who falls silent during a conversation about a bereavement is given the silence; a woman after a suicide attempt who says her family would be better off without her is asked directly about suicidal thoughts, not reassured.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MHN-0798.svg",
          alt: "Two columns of therapeutic communication — blocks that end a conversation (false reassurance, advising, asking why, changing the subject, judging or minimising, closed questions in a row) and openers that carry it on (open questions, reflecting, clarifying, silence, offering yourself, summarising) — with the test: what can the patient say next?",
          caption: "Ask what the patient can say next. If the honest answer is nothing, or just yes, it is a block however kind it sounds.",
        },
        {
          type: "table",
          heading: "The patient who is hard to reach",
          columns: ["Patient", "What works", "What does not"],
          rows: [
            ["<strong>Speaks a language none of the staff understands</strong>", "A trained interpreter or a staff member competent in the language; speak to the patient, not the interpreter; short sentences; check understanding by teach-back.", "A child as interpreter; a relative for anything sensitive; speaking louder in English."],
            ["<strong>Profoundly deaf, attending alone</strong>", "Face the patient in good light, normal lip movement, written notes and pictures, a sign-language interpreter arranged for the consultation; ask how she prefers to communicate.", "Shouting; turning away while speaking; a mask that hides the lips without an alternative."],
            ["<strong>Aphasia after a stroke</strong>", "Yes/no questions, a picture or alphabet board, gestures, time to respond, one idea at a time; assume comprehension may be intact even when speech is not.", "Finishing her sentences; talking about her to the relative as though she were not there; assuming confusion."],
            ["<strong>Confused or living with dementia</strong>", "Approach from the front, use her name, short simple sentences, one step at a time, orientating cues, a calm tone, reminiscence; respond to the feeling behind the words rather than arguing with the content.", "Correcting every error; asking \"do you remember?\"; multiple instructions at once; restraint instead of communication."],
            ["<strong>Intellectual disability</strong>", "Speak to the person, use plain language and pictures, allow time, involve the carer as a resource not a substitute, explain each step before touching.", "Talking only to the carer; assuming inability to consent without assessing."],
            ["<strong>Cannot read</strong>", "Pictorial instructions, colour coding, pill boxes, demonstration and teach-back, a family member who can read enlisted with permission.", "A written leaflet alone; \"do you understand?\""],
            ["<strong>Angry or complaining</strong>", "Listen without interrupting, acknowledge the feeling, apologise for the experience, move to a private space, find out what he wants, explain what you can do and do it.", "Defending, arguing, matching the volume, continuing at the nurses' station in front of the ward."],
            ["<strong>Frightened before a procedure</strong>", "Ask what specifically worries him, give honest information about what he will feel, agree a signal to pause, stay.", "\"There is nothing to worry about.\""],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-TRD-2095.svg",
          alt: "Getting an honest answer about herbal use — questions that close the conversation (you are not taking any of that herbal thing, are you; why would you take that; stop all of it immediately) and questions that open it (many people use something from home — what have you been taking; anything you drink, chew, rub on or take as an enema; bring the bottle; who advised it) — normalise first, then ask what rather than whether.",
          caption: "The question decides the answer. Normalise first, then ask what rather than whether — and the same technique gets an honest answer about adherence, alcohol, sex and money.",
        },
        {
          type: "text",
          heading: "Breaking bad news",
          paragraphs: [
            "Find a private place and sit down. Ask what she already understands. Ask how much she wants to know. Give a warning (\"I am afraid the news is not what we hoped\"), then the news in plain words without euphemism. Stop talking and let the silence do its work. Respond to the feeling before the facts. Agree what happens next and say when you will return — and return. Most of breaking bad news is asking and waiting rather than telling. A doctor usually gives a diagnosis; the nurse is there before, during and afterwards, answers the questions that come an hour later, and never contradicts or pre-empts what the patient has been told. When a woman has just been told her husband has died in the emergency department, the nurse's job is presence, a private space, practical help with the next steps and the family she wants called — not sedation and not platitudes.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MAN-0864.svg",
          alt: "Structured handover using SBAR — Situation (who, where, what is wrong now), Background (the context), Assessment (the numbers and what you think is happening) and Recommendation (what you want and by when) — with the warning never to end a handover with only a description but with a request and a time.",
          caption: "The R is the part most often left out and the part that gets the patient seen. Never end a handover or an escalation call with a description — end it with a request and a time.",
        },
        {
          type: "text",
          heading: "Handover, escalation and the telephone",
          paragraphs: [
            "Handover is a high-risk moment: a great many serious incidents involve information that was known to one shift and never reached the next. A <strong>structured format</strong> — SBAR, or a ward sheet built around it — <strong>transfers critical information in a predictable order without omission</strong>: who the patient is and what is wrong now, the relevant background, the current assessment and the plan with outstanding tasks, risks and what to escalate. <strong>Bedside handover</strong> adds the patient's own account and a look at the drip, the drain and the chart, and it includes the patient in a conversation about himself. Handover <strong>from theatre or recovery to the ward</strong> covers the operation, anaesthetic, blood loss, fluids, analgesia, drains, specific instructions and the first observations; handover of the acutely ill patient to a receiving unit is done nurse to nurse at the bedside, not by leaving a folder.",
            "A <strong>telephone call</strong> about a deteriorating patient follows SBAR and ends with a request and a time. A <strong>verbal or telephone order</strong> is accepted only when a written one is impossible, never for high-risk drugs where policy forbids it: the nurse writes it down as it is given, <strong>reads it back</strong> in full — drug, dose, route, frequency, patient — has it confirmed, records it as a telephone order with the prescriber's name, date and time, and the prescriber signs it at the earliest opportunity. A <strong>critical result</strong> telephoned by the laboratory — a potassium of 6.8, a haemoglobin of 4, a positive blood culture — is written down, read back, the patient identified by two identifiers, the time and the caller's name recorded, and <strong>the prescriber informed immediately</strong>, with the action documented; a critical result that sits in a tray until the ward round is a critical result nobody received.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-CLP-2789.svg",
          alt: "Full blood count indices with likely causes in Ghana, white-cell differential interpretation, the results that require urgent telephone notification, and the sample-quality questions to ask before believing any result.",
          caption: "Some results cannot wait for the round. A critical value telephoned to the ward is written down, read back, attributed to the right patient, and acted on now — and the time, the caller and the action are recorded.",
        },
        {
          type: "list",
          heading: "The principles of documentation",
          style: "steps",
          items: [
            "<strong>Contemporaneous</strong>: write at the time or as soon as possible afterwards; the timing of documentation is itself evidence. A <strong>late entry</strong> is written when it is written, labelled \"late entry\" with the actual time of the event and the time of writing — never inserted into a gap as though it had been written then.",
            "<strong>Factual, specific and free of opinion</strong>: what you saw, heard, measured and did, and the patient's response; the patient's own words in quotation marks. \"Patient abusive\" is an opinion; \"patient shouted 'get out', threw the cup, declined medication\" is a record. Subjective data is what the patient reports; objective data is what you measured or observed.",
            "<strong>Legible, in permanent ink, signed with name and designation, dated and timed</strong> (24-hour clock), with no blank lines a later writer could fill, and approved abbreviations only.",
            "<strong>Corrections by a single line</strong> through the error so that it remains readable, the word \"error\" or \"written in error\", the correction, and your signature, date and time. <strong>Never</strong> erase, overwrite, use correction fluid, tear out a page or alter a record after an incident. An entry written in the <strong>wrong patient's notes</strong> is ruled through, annotated \"written in error — wrong patient\", signed, dated and timed, and the correct entry written in the correct notes; the error is disclosed to the person in charge.",
            "<strong>Never in advance, never for care not given</strong>: do not pre-sign the medicine chart for the round you are about to do or the observations you intend to take; do not sign for a colleague's observations; do not record \"observations stable\" for a patient you did not see.",
            "<strong>Complete</strong>: the assessment, the problem, what was done, who was informed and when, the patient's response, and the plan — including refusals, the advice given and the risks explained, consent discussions, teaching and teach-back, allergies in the designated place on every chart, risk assessments with the score and the action, seclusion or restraint with the reason, authorisation, times and observations, and any telephone order with the read-back.",
            "<strong>Secure and accessible</strong>: case notes kept where those involved in care can reach them and nobody else can; electronic records accessed only under your own login, never shared passwords, never left open on a screen; records belong to the facility and the information to the patient, who may ask to see it.",
          ],
        },
        {
          type: "text",
          heading: "Charts, registers and the written report",
          paragraphs: [
            "The <strong>observation chart</strong> shows the trend, so each value is plotted at its true time and an abnormal value is accompanied by the action and the escalation. The <strong>fluid balance chart</strong> records every input and output with volumes, not ticks, and small volumes are measured, not estimated. The <strong>medicine chart</strong> is signed immediately after each administration, with the reason for any omission coded and the prescriber informed. The <strong>care plan</strong> is individualised, reviewed and dated. The <strong>ward registers</strong> — admissions and discharges, deliveries, deaths, procedures, immunisation tallies — feed DHIS2 and determine next year's drugs and staff, so they are completed daily and reconciled against the notes. A <strong>nursing report</strong> (the end-of-shift written report, an incident statement, a report to the manager) is factual, chronological, in the first person for what you did and saw, free of opinion and blame, names those informed and the times, and is signed. A report written days later from memory is worth less than a contemporaneous note of three lines.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "What examiners ask about communication and documentation",
          body: "The therapeutic option keeps the patient talking — reflect, clarify, allow silence — never false reassurance or \"why\". Use a trained interpreter or competent staff member, never a child; communicate with a deaf patient in writing and pictures and arrange a sign-language interpreter. A structured handover transfers critical information in a predictable order without omission; end every escalation call with a request and a time. A telephone order is written, read back, confirmed and countersigned; a critical result is written down, read back and the prescriber informed immediately. Documentation is contemporaneous, factual, legible, signed, dated and timed; an entry in the wrong patient's notes is ruled through with a single line, annotated, signed and the correct notes written; late entries are labelled; nothing is written in advance or for care not given; the most appropriate entry records what was observed in the patient's words, not the nurse's opinion. Case notes are kept secure and accessible only to those involved in care; ward registers feed the district information system.",
        },
      ],
      keyPoints: [
        "Therapeutic communication keeps the patient talking — open questions, reflecting, clarifying, silence, offering yourself and summarising — while false reassurance, advising, asking why, changing the subject, judging and runs of closed questions end it.",
        "Hard-to-reach patients need a method, not volume: trained interpreters (never children), writing, pictures and sign-language for the deaf, boards and time for aphasia, calm orientation for confusion, plain language and the person first for intellectual disability, and listening, acknowledgement and privacy for anger.",
        "Bad news is given sitting down in private, after asking what the patient understands and wants to know, with a warning, plain words, silence, a response to feeling and an agreed next step; the nurse's role afterwards is presence and honest answers.",
        "Handover and escalation use SBAR and end with a request and a time; bedside and theatre-to-ward handovers include the patient, the chart and the specific instructions; a verbal or telephone order is written, read back, confirmed and countersigned; a critical result is written, read back and acted on immediately with the prescriber informed.",
        "Documentation is contemporaneous, factual and free of opinion (the patient's own words in quotes), legible, in ink, signed with designation, dated and timed, complete, never pre-signed and never for care not given.",
        "Errors are corrected by a single line, annotation, signature, date and time — never erased or overwritten; an entry in the wrong notes is annotated and the correct notes written; a late entry is labelled with both times.",
        "Charts record true times and trends with actions, fluid charts record measured volumes, medicine charts are signed at administration, care plans are individualised and reviewed, registers feed DHIS2, and written reports are factual, chronological, first-person and signed; records are secure, accessed under your own login and available only to those involved in care.",
      ],
      quiz: { keywords: ["therapeutic communication","clarif","silence","listen","rapport","communicating with","communication with","communication after","communication","aphasia","deaf","hearing loss","intellectual","communicating with a patient with dement","interpreter","plain language","cannot read","literacy","written instructions","teach back","handover","hand over","structured format","sbar","from theatre to ward","recovery handover","handover after","handover of the acutely","clinical handover","escalating a concern","by telephone","telephones the","telephones a","critical result","written communication","factual and free of opinion","nursing report","documenting","documentation","principles of documentation","timing of documentation","documenting assessment findings","documenting wound assessment","documenting a difficult","documenting a procedure","documenting an allergy","documenting risk","documenting nutritional care","documenting herbal use","recording conscious level","recording nasogastric drainage","recording seclusion","recording small fluid volumes","entry records","written an entry","wrong patient's chart","wrong patient's notes","correct it","erase","abbreviation","legibility","contemporaneous","retrospective","signature","blank","subjective and objective","objective data","observation chart","charts","electronic record","case notes","confidentiality of records","verbal order","breaking bad news","bad news","family centred care","identifying the carer","family case study","presenting a family case study","admission procedure","choosing a communication channel","choosing a communication approach","social and behaviour change","communication with the public","rumour","health talk","cannot say what","understood his discharge","ward round","nurses' station","corridor"] },
    },
    {
      slug: "patient-safety-incidents-quality-improvement-and-complaints",
      title: "Patient safety, incidents, quality improvement and complaints",
      minutes: 18,
      objectives: [
        "Respond to an incident and a near miss in the right order, explain just culture and why punishing individuals makes a ward less safe, and describe root cause analysis and the systems approach to error.",
        "Apply risk management to a hazard, name the dimensions of quality, and explain how standards, standard operating procedures, guidelines and checklists make care consistent.",
        "Distinguish clinical audit from research, run the audit cycle to re-audit, and improve care with small-scale plan–do–study–act cycles measured against a baseline.",
        "Handle a complaint, support patient identification and the surgical safety checklist, and describe maternal death audit, disease notification and the committees through which a facility governs quality.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Incidents, near misses and the first duty",
          paragraphs: [
            "A nurse gives a drug to the wrong patient, who is unharmed. The order of her actions is fixed: <strong>assess and monitor the patient first</strong>, then <strong>inform the prescriber and the nurse in charge</strong>, then <strong>document factually and complete an incident report</strong>, and be open with the patient. The incident form is not a confession; it is <strong>how the ward learns without another patient paying</strong>. A <strong>near miss</strong> — the wrong drug drawn up and caught at the bedside check, the mislabelled sample intercepted by the laboratory — is reported with the same seriousness, because it is a free lesson about a hole in the system that will not be caught next time. <strong>Adverse events</strong> are harm from care rather than disease; <strong>never events</strong> (wrong-site surgery, a retained swab, the wrong blood) are so preventable that one is too many; <strong>sentinel events</strong> trigger an immediate investigation.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MAN-0873.svg",
          alt: "Blame culture versus just culture — the same drug error handled two ways: who did this (nurse disciplined, reporting falls, near misses go quiet, the system unchanged, the next nurse makes the same error) against what allowed this (patient told and treated, incident reported, look-alike labels, staffing, interruptions and unclear prescriptions examined, the system changed and checked; reckless acts still dealt with individually).",
          caption: "Errors do not fall under a blame culture; they go quiet. Just culture asks what allowed this, fixes the system, and still holds reckless or deliberate acts to account — so a rise in reports is good news.",
        },
        {
          type: "text",
          heading: "Just culture and the systems approach",
          paragraphs: [
            "<strong>Punishing individual nurses for errors makes a ward less safe</strong>: everyone learns that reporting costs something, near misses stop being reported, the system that allowed the error is left exactly as it was, and the next nurse makes the same error and nobody sees it coming. <strong>Just culture</strong> asks \"what allowed this?\" — the look-alike labels, the interruption in the middle of the round, the illegible prescription, the two nurses for thirty patients — and changes the system, then checks that the change worked. It is <strong>not the absence of accountability</strong>: honest error (a slip under pressure) is met with support and system change; <strong>at-risk behaviour</strong> (a shortcut that has become normal) with coaching and removal of the incentive; <strong>reckless or deliberate acts</strong> (practising intoxicated, falsifying records, ignoring a known safety rule) are dealt with individually and, where necessary, before the Council.",
            "<strong>Root cause analysis</strong> after a serious incident is a structured search for the underlying system causes — asking \"why\" repeatedly past the person to the process, the equipment, the environment, the training, the staffing and the policy — so that <strong>the system can be changed to prevent recurrence</strong>, not so that someone can be named. The Swiss cheese model explains why: harm reaches the patient only when the holes in several layers of defence line up, and a safe system adds and tightens layers rather than relying on one perfect nurse. <strong>Human factors</strong> — fatigue, interruption, distraction, poor design, hierarchy that silences the junior — are the holes, and they are designed out: a quiet medicine round, tall-man lettering for look-alike names, a second independent check for high-alert drugs, a standard layout for every resuscitation trolley.",
          ],
        },
        {
          type: "text",
          heading: "Risk management and the dimensions of quality",
          paragraphs: [
            "A ward floor becomes slippery whenever it rains because the roof leaks. <strong>Risk management</strong> identifies the hazard, assesses its likelihood and severity, <strong>enters it on the risk register and acts to remove or reduce it</strong> — the leak repaired, and until then a warning sign, a mop rota and a report to estates — then reviews. Warning staff to be careful is not a control. Risk assessment is also applied to individual patients: falls risk, pressure injury risk, venous thromboembolism risk, suicide risk, each with a score and an action and a documented review.",
            "<strong>Quality</strong> has dimensions that can each be measured: <strong>safe</strong> (no avoidable harm), <strong>effective</strong> (care based on evidence that achieves its outcome), <strong>patient-centred</strong> (respectful of preferences, needs and values), <strong>timely</strong> (no harmful delay), <strong>efficient</strong> (no waste) and <strong>equitable</strong> (the same quality regardless of who the patient is). Measures are sorted into <strong>structure</strong> (staff, equipment, policies), <strong>process</strong> (what was done — hand hygiene compliance, partograph completion) and <strong>outcome</strong> (what happened to the patient — infection rate, maternal deaths, satisfaction). A <strong>standard</strong> states the expected level of performance; a <strong>standard operating procedure</strong> states exactly how a task is done here, so that <strong>care is consistent between staff and between shifts</strong> and the newcomer at three in the morning does it the same way as the sister did at ten; a <strong>guideline</strong> summarises the evidence for a clinical decision and allows judgement; a <strong>checklist</strong> forces the critical steps to happen in order when memory under pressure would miss one.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MSN-2745.svg",
          alt: "The perioperative journey — fasting intervals and the harms of over-fasting, pre-operative checks, the three pauses of the WHO surgical safety checklist (sign in, time out, sign out) and the post-operative priorities in order.",
          caption: "The surgical safety checklist is quality improvement you can hold: three pauses — before anaesthesia, before the incision, before the patient leaves — each confirming identity, site, procedure, consent, allergies, counts and the plan out loud.",
        },
        {
          type: "table",
          heading: "Audit, research and quality improvement — three different activities",
          columns: ["Activity", "Question it answers", "How it works"],
          rows: [
            ["<strong>Clinical audit</strong>", "<strong>Are we doing what we already know we should be doing?</strong> — practice measured against an existing standard.", "Set or adopt the standard (e.g. hand hygiene at the five moments, 100 per cent) → measure current practice → compare and identify the gap → change something (the cause, not the memo) → <strong>re-audit</strong> to see whether compliance actually improved → sustain. An audit without re-audit is a survey. No ethics approval is needed because nothing new is done to patients, but confidentiality still applies."],
            ["<strong>Research</strong>", "<strong>What should we be doing?</strong> — creates new generalisable knowledge.", "A research question, a design, ethical approval before any data, informed consent, analysis chosen in advance, dissemination (module 7)."],
            ["<strong>Quality improvement (PDSA)</strong>", "<strong>How do we close the gap, here, now?</strong>", "<strong>Plan</strong> — the problem in numbers and one change to try. <strong>Do</strong> — try it <strong>small</strong>: one ward, one week, one shift. <strong>Study</strong> — measure again and ask whether the number moved. <strong>Act</strong> — adopt, adapt or abandon, then go round again. Measure a <strong>baseline before you change anything</strong> or you can never prove it worked. A memo telling staff to try harder is not a change."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MAN-0878.svg",
          alt: "The plan–do–study–act cycle — plan the problem in numbers and one change, do it small on one ward for one week, study whether the number moved, act to adopt, adapt or abandon, then go round again — with the warning that you must measure before you change and that a memo is not a change.",
          caption: "A small change, measured and repeated, beats a policy issued from an office. Measure before you change anything; change something about the system, not the exhortation.",
        },
        {
          type: "text",
          heading: "Using data honestly",
          paragraphs: [
            "A matron who asks for a report that shows her ward \"in the best possible light\" before an inspection is asking for the data to be presented <strong>honestly, with its limitations, and in context</strong> — the same denominators, the same definitions, the trend rather than the best month. Selective reporting hides the problem the inspection exists to find and, if discovered, destroys the credibility of every true figure. A rise in reported incidents after a just-culture initiative is a success, not a failure; a fall in reported needlestick injuries while sharps-box use is unchanged is under-reporting, not safety. <strong>Benchmarks</strong> compare a unit with others and <strong>run charts</strong> show whether a change in the number is real or noise; both are the subject of lesson 7.2.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-RSM-0983.svg",
          alt: "The hierarchy of evidence drawn as a pyramid — systematic review at the apex, then randomised controlled trials, cohort and case-control studies, cross-sectional studies and case series, and at the base expert opinion and custom — with the reminder that evidence is one of three, alongside the patient's values and clinical judgement.",
          caption: "Standards and guidelines should rest as high up the pyramid as the evidence allows. \"We have always done it this way\" sits at the bottom — and is still the commonest reason given on a ward.",
        },
        {
          type: "table",
          heading: "Safety practices every ward runs",
          columns: ["Practice", "The rule", "Why"],
          rows: [
            ["<strong>Patient identification</strong>", "Two identifiers — the patient states full name and date of birth, checked against the wristband and the chart — before every medicine, specimen, transfusion, procedure and transfer; never the bed number, never \"is this Mr Mensah?\".", "Wrong-patient errors begin with an assumption; the wristband is applied on admission and replaced if removed."],
            ["<strong>Specimen labelling</strong>", "Labelled at the bedside immediately after collection, by the person who collected it, with the identifiers, date, time and signature; one patient at a time.", "A pre-labelled tube or a sample labelled at the station is how the wrong blood is transfused."],
            ["<strong>Medication safety</strong>", "The rights, the independent second check for high-alert drugs, no interruptions during the round, generic names, a zero before a decimal and none after, tall-man lettering, ask rather than guess.", "Most medication errors are system failures that a defence can catch."],
            ["<strong>Falls and pressure-injury prevention</strong>", "Risk assessed on admission and on change, with the action documented — bed low, call bell within reach, non-slip footwear, toileting round, repositioning schedule, surface, nutrition.", "The risk assessment without the action is paperwork."],
            ["<strong>Emergency readiness</strong>", "The resuscitation trolley checked and signed every shift with a standard layout and a seal; suction and oxygen tested; the emergency drugs in date; staff know the call system; drills.", "A cardiac arrest is the wrong time to discover the laryngoscope battery is flat."],
            ["<strong>Safe environment</strong>", "Hazards reported and fixed, exits clear, oxygen stored safely, waste segregated, sharps boxes within reach, and a reporting route everyone uses.", "The environment is a layer of defence."],
          ],
        },
        {
          type: "text",
          heading: "Complaints, maternal death audit and notification",
          paragraphs: [
            "A relative <strong>complains angrily at the nurses' station</strong>. The nurse in charge <strong>takes him to a private place, listens without interrupting, acknowledges the feeling, apologises for the experience, establishes the facts and what he wants, explains what can be done and does it</strong>, records the complaint and the response, and follows the facility's complaints procedure for anything she cannot resolve — the Patients' Charter promises a procedure, a response and no prejudice to care. A complaint is free information about a failure the ward did not see; the dissatisfied patient who complains is more valuable than the one who simply does not come back.",
            "<strong>Maternal death audit</strong> (maternal death surveillance and response) reviews every maternal death — a confidential, <strong>no-blame</strong> review of the sequence of events, the delays (in deciding to seek care, in reaching care, in receiving care) and the system changes that would prevent the next death; its purpose is learning, and it is undermined the moment it becomes a trial. Perinatal and child death audits follow the same model, as do morbidity and mortality meetings. <strong>Notifiable diseases</strong> are reported under the Integrated Disease Surveillance and Response system — the immediately notifiable (cholera, measles, meningitis, yellow fever, viral haemorrhagic fevers, acute flaccid paralysis, maternal death among them) within 24 hours by the fastest means, the rest weekly, and <strong>zero reporting</strong> when there are none, because a missing report cannot be distinguished from a report of nothing. A facility governs all of this through its <strong>quality assurance committee</strong>, <strong>infection prevention and control committee</strong>, <strong>drugs and therapeutics committee</strong> and <strong>mortality review</strong>, under the licensing and inspection of <strong>HeFRA</strong>.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "What examiners ask about safety and quality",
          body: "After a wrong-patient drug error with no harm: assess the patient first, then inform the prescriber, then document and report. Punishing individuals for errors reduces reporting and leaves the system unchanged; root cause analysis identifies system causes to prevent recurrence. A slippery floor goes on the risk register with action to remove the hazard. Standard operating procedures make care consistent between staff and shifts. Audit measures practice against an existing standard; research creates new knowledge; after training to improve hand hygiene, the next step is re-audit to see whether compliance improved. Quality improvement tests a small change and measures it against a baseline. A relative complaining angrily is taken somewhere private and listened to. Maternal death audit is a no-blame learning review. Notifiable diseases are reported immediately or weekly with zero reporting. Ward registers and honest data presentation underpin all of it.",
        },
      ],
      keyPoints: [
        "After an incident: patient first (assess and treat), then prescriber and nurse in charge, then factual documentation and the incident form, then openness with the patient; near misses are reported with the same seriousness because they are free lessons.",
        "Just culture asks what allowed the error, fixes the system and checks the fix, supports honest error, coaches at-risk behaviour and holds reckless or deliberate acts individually accountable; blame culture silences reporting and leaves the hole for the next nurse.",
        "Root cause analysis searches past the person to process, equipment, environment, training, staffing and policy; the Swiss cheese model and human factors explain why safety is built from layers of defence designed around fatigue, interruption and poor design.",
        "Risk management identifies, assesses, registers, controls and reviews hazards — warning staff is not a control; quality is safe, effective, patient-centred, timely, efficient and equitable, measured by structure, process and outcome, and made consistent by standards, SOPs, guidelines and checklists such as the WHO surgical safety checklist.",
        "Audit asks whether we do what we already know we should and is a cycle that ends in re-audit; research creates new knowledge; quality improvement runs small plan–do–study–act cycles against a measured baseline — and a memo to try harder is not a change.",
        "Two identifiers before every medicine, specimen, transfusion and procedure; bedside specimen labelling; the independent second check; risk assessments with actions; a checked resuscitation trolley; and honest data presentation are the everyday mechanics of safety.",
        "Complaints are heard privately, acknowledged, investigated, answered and recorded under the Charter; maternal, perinatal and child death audits are confidential no-blame learning reviews of the three delays; notifiable diseases are reported under IDSR immediately or weekly with zero reporting; quality, IPC, drugs and mortality committees govern the facility under HeFRA licensing.",
      ],
      quiz: { keywords: ["incident","incident report","near miss","reporting a near miss","adverse event","medication error","unharmed","wrong patient","wrong drug","just culture","punishing","blame","root cause","root cause analysis","risk management","slippery","quality improvement","quality as a","small scale","clinical audit","audit cycle","audit","hand hygiene compliance","compliance is poor","standards and protocols","standard operating","guideline","evaluating a service","satisfaction","complaint","complains about","wishes to complain","complains angrily","dissatisfied","relative complains","responding to a complaint","handling a patient complaint","managing a complaint","handling a dissatisfied","patient safety","specimen labelling and identification","wristband","surgical safety checklist","checklist","time out","falls prevention","falls risk","whistleblow","reporting an unsafe","maternal death audit","notifiable","notifiable disease","disease notification","zero reporting","surveillance data quality","infection control audit","infection prevention leadership","infection prevention committee","peer review","learning from","baseline","using data for improvement","presenting data honestly","error disclosure","interruption","double check","second check","prescription legibility","cannot read the name of a drug","critical result handling","handling critical results","resuscitation trolley","oxygen concentrator","power outage","disaster preparedness","simulation","incident reporting"] },
    },
  ],
};
