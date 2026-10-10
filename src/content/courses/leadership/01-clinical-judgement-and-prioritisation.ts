import type { CourseModule } from "../types";

export const clinicalJudgementAndPrioritisation: CourseModule = {
  slug: "clinical-judgement-and-prioritisation",
  title: "Clinical judgement and prioritisation",
  summary: "How a nurse decides what to do first — the nursing process as the engine of clinical judgement, nursing versus medical diagnosis, goals that can be evaluated, the priority frameworks (ABC, Maslow, acute before chronic, unstable before stable, new before old), the patient who should be seen first, triage in the emergency department and the disaster, the deteriorating patient and how to escalate, time management on a shift, prioritising with too few staff, and the priorities of the community nurse.",
  lessons: [
    {
      slug: "the-nursing-process-clinical-judgement-and-setting-priorities",
      title: "The nursing process, clinical judgement and setting priorities",
      minutes: 18,
      objectives: [
        "Describe the five steps of the nursing process as a cycle, distinguish a nursing diagnosis from a medical diagnosis, and write a goal that can actually be evaluated.",
        "Apply the priority frameworks — airway, breathing, circulation, disability and exposure; Maslow's hierarchy; acute before chronic; unstable before stable; actual before potential; new or changing before old and expected — to a single patient and to a group of patients.",
        "Recognise the cue words examiners use (first, priority, most urgent, immediately, which patient) and the traps they set, including the quiet patient who is deteriorating and the loud patient who is stable.",
        "Use the IMCI general danger signs, the ABCDE approach and an early-warning score as structured tools for deciding who needs attention now.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Why prioritisation is examined so heavily",
          paragraphs: [
            "Every nurse has more to do than time to do it. On a thirty-bed ward with three nurses, in an outpatient queue of two hundred, or at a CHPS compound with one community health officer, the quality of care is decided less by what the nurse knows than by <strong>the order in which she does things</strong>. Prioritisation is the skill of putting the right task first, and because it cannot be looked up in a book it is what licensing examinations test when they ask <strong>\"which action first\"</strong>, <strong>\"which patient should the nurse see first\"</strong> or <strong>\"what is the priority\"</strong>.",
            "Prioritisation rests on <strong>clinical judgement</strong>: noticing the cue that matters, interpreting what it means, deciding what to do and then checking whether it worked. The nursing process is the structured version of that judgement, and the priority frameworks below are the rules of thumb that make the ordering defensible. Together they answer the two questions this course keeps returning to — <strong>what should I do first, and how do I know?</strong>",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PFC-0639.svg",
          alt: "The nursing process drawn as a cycle — assess, diagnose, plan, implement, evaluate and reassess — with a contrast between a nursing diagnosis such as risk of falls related to weakness and poor vision and a medical diagnosis such as stroke or pneumonia.",
          caption: "The nursing process is a cycle, not a list. Skip assessment and everything after it is a guess; skip evaluation and you never find out whether the plan worked.",
        },
        {
          type: "table",
          heading: "The nursing process — what each step is, and the error examiners look for",
          columns: ["Step", "What it means", "The classic error"],
          rows: [
            ["<strong>Assessment</strong> (always first)", "Collecting subjective data (what the patient says — pain, fear, \"I feel something is wrong\") and objective data (what you measure or observe — pulse, blood pressure, wound, behaviour), then validating and clustering it.", "Acting before assessing — giving analgesia for abdominal pain before examining the abdomen, or recording \"patient comfortable\" without looking. Options that start with \"assess\", \"check\" or \"ask\" are usually the first action when the patient is not in immediate danger."],
            ["<strong>Nursing diagnosis</strong>", "Naming the human response the nurse can treat — <em>ineffective airway clearance related to thick secretions</em>, <em>risk of falls related to weakness and poor vision</em>, <em>deficient knowledge related to new insulin</em>. Written as problem, related factor and evidence.", "Writing the medical diagnosis (stroke, diabetes, pneumonia) as the nursing diagnosis. The disease is the doctor's to treat; the response to it is the nurse's."],
            ["<strong>Planning</strong>", "Setting priorities among the diagnoses, writing patient-centred goals that are specific, measurable, achievable, relevant and time-bound, and choosing interventions with a rationale.", "Goals written as nurse actions (\"nurse will give oxygen\") or with no measure or deadline (\"patient will be comfortable\")."],
            ["<strong>Implementation</strong>", "Carrying out the plan — direct care, teaching, delegating appropriate tasks, coordinating with the team — and documenting what was done and the patient's response.", "Doing the plan without re-checking that it is still right; documenting before the care is given."],
            ["<strong>Evaluation</strong>", "Comparing the outcome with the goal by the deadline, then continuing, modifying or discontinuing the plan — which is reassessment, and the cycle begins again.", "Evaluating the nurse's effort (\"analgesia given\") instead of the patient's outcome (\"pain 2/10 at 14:00\")."],
          ],
        },
        {
          type: "text",
          heading: "The frameworks that decide what comes first",
          paragraphs: [
            "<strong>ABCDE.</strong> Airway, then breathing, then circulation, then disability (conscious level, glucose, pupils), then exposure. A problem higher on the list kills faster than one lower down, so an obstructed airway beats hypoxia, which beats haemorrhage, which beats a Glasgow Coma Scale that is falling, which beats everything else including pain. The order is the order in which these problems kill, which is why it is also the order of the primary survey and of the resuscitation algorithms.",
            "<strong>Maslow's hierarchy.</strong> Physiological needs (oxygen, fluid, nutrition, elimination, temperature, pain relief) before safety (falls, infection, medication safety), before love and belonging (family, communication), before esteem (dignity, independence) and self-actualisation (teaching for the future). It explains why oxygen comes before a discharge teaching session — but note that the hierarchy ranks <em>categories</em>; within the physiological category ABC still applies.",
            "<strong>Acute before chronic, unstable before stable, actual before potential, new before old.</strong> A patient whose condition has <strong>changed</strong> — new confusion, a pulse that was 80 and is now 120, a wound that was dry and is now bleeding — outranks a patient who is very ill but exactly as ill as he was at the last round. A problem that <strong>exists now</strong> outranks one that might develop. The exception is a potential problem that is both likely and lethal — the post-operative patient who is \"fine\" but whose airway will obstruct if he is left supine — which is why potential airway and breathing problems still sit near the top.",
            "<strong>Safety and risk.</strong> When two patients are equally stable, the one at greater risk of harm — the confused patient climbing over bed rails, the child who has swallowed a tablet, the patient with a suspected transfusion reaction — comes first. And when a task is urgent but not important (a report that is due, a visitor who is complaining, a doctor who wants a form signed), it waits behind a task that is both urgent and important (a patient who is deteriorating).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FUN-0013.svg",
          alt: "A four-step priority ladder — airway obstructed or at risk, then breathing with hypoxia or new distress, then circulation with shock or bleeding, then everything else including pain, comfort and tasks — captioned new and deteriorating beats severe and stable.",
          caption: "The ladder in one line: new and deteriorating beats severe and stable. A patient three days post-laparotomy whose breathing has worsened in the last hour comes before a patient with a long-standing, unchanged problem however impressive its name.",
        },
        {
          type: "list",
          heading: "Reading a \"which patient first\" question — the method",
          style: "steps",
          items: [
            "<strong>Find the cue words</strong>: <em>first</em>, <em>priority</em>, <em>most urgent</em>, <em>immediately</em>, <em>initial</em>. They tell you the question is about order, not about everything that should eventually be done — every option may be correct, and you are choosing the one that must happen before the others.",
            "<strong>Sort the patients by ABCDE</strong>, not by diagnosis. Noisy breathing, a rising respiratory rate, oxygen saturation that has fallen, new chest pain, bleeding, a pulse above 120 or a systolic pressure below 90, new confusion or drowsiness — any of these outranks a label such as \"post-operative day one\" or \"diabetic\".",
            "<strong>Look for change.</strong> \"Was alert, now drowsy\"; \"pain that has suddenly worsened\"; \"the oxygen concentrator has stopped and the patient is restless\". The word <em>new</em> or <em>sudden</em> in a stem is a signal. Restlessness and agitation in a patient who was settled is hypoxia or haemorrhage until proved otherwise, not a behaviour problem.",
            "<strong>Beware the loud distractor.</strong> The patient shouting for analgesia, the relative demanding to be seen and the discharge that is waiting for a letter all pull at the nurse, but a competent, complaining patient is demonstrating an open airway and adequate perfusion. The quiet patient in the corner bed who has stopped asking for anything may be the one who is dying.",
            "<strong>Among stable patients, choose the one at greatest risk</strong> — the one whose intravenous potassium is due, whose insulin was given and whose breakfast has not arrived, who is confused and unattended, or who is about to go to theatre without a consent conversation.",
            "<strong>Then act in the right order within that patient</strong>: assess (unless the danger is obvious and immediate), take the life-saving action, call for help or escalate, and only then document. Patient, then prescriber, then paper.",
          ],
        },
        {
          type: "table",
          heading: "Worked examples — who is seen first, and why",
          columns: ["The four patients", "First", "Reasoning"],
          rows: [
            ["A: day three post-laparotomy, breathless in the last hour, respirations 32. B: known heart failure, stable on his usual dose. C: asking for analgesia, pain 6/10. D: due for discharge, waiting for a letter.", "<strong>A</strong>", "A new breathing problem (B of ABCDE) beats a severe but unchanged condition (B's heart failure), a comfort need (C) and a task (D)."],
            ["A: child with diarrhoea who is drinking eagerly. B: child with cough and fast breathing who is unable to drink and is lethargic. C: child with a fever and a runny nose. D: child due for a vaccine.", "<strong>B</strong>", "Inability to drink and lethargy are IMCI general danger signs — assess airway and breathing and refer urgently. A is \"some dehydration\" and is treated after B."],
            ["A: a patient on the night shift whose oxygen concentrator has stopped in a power cut and who is now restless and has sickle cell disease. B: a patient whose intravenous fluids have finished. C: a patient asking for a sleeping tablet. D: a confused patient who is calling out but sitting safely in bed.", "<strong>A</strong>", "Loss of oxygen in a hypoxia-prone patient with new restlessness is an airway-and-breathing emergency; the others are circulation maintenance, comfort and safety, in that order."],
            ["A: postpartum woman with a boggy uterus and heavy bleeding. B: woman at 34 weeks with painless bright-red bleeding who is comfortable. C: woman in early labour requesting analgesia. D: woman awaiting a postnatal check before discharge.", "<strong>A</strong>", "Active haemorrhage with an atonic uterus is circulation now — massage the fundus, call for help, oxytocic. B is placenta praevia until proved otherwise and is next (no vaginal examination), but she is not yet shocked."],
          ],
        },
        {
          type: "text",
          heading: "Structured tools that turn judgement into a shared language",
          paragraphs: [
            "<strong>Early warning scores</strong> (such as NEWS2) assign points to respiratory rate, oxygen saturation, supplemental oxygen, temperature, systolic blood pressure, pulse and conscious level. The total converts a nurse's feeling that \"he does not look right\" into a number that triggers a defined response — more frequent observations, review by the nurse in charge, urgent review by a doctor, or the emergency team. The score does not replace judgement: <strong>any single very abnormal value, or any nurse's concern, escalates regardless of the total</strong>.",
            "<strong>IMCI general danger signs</strong> — unable to drink or breastfeed, vomits everything, convulsions, lethargic or unconscious — are assessed in <strong>every</strong> sick child before anything else, because any one of them means the child is severely ill and must be referred urgently after pre-referral treatment. They are a priority tool as much as a classification tool.",
            "<strong>Triage categories</strong> in the emergency department (immediate, very urgent, urgent, standard, non-urgent, or the red–yellow–green–black of the mass-casualty scene) are the same logic applied at the door, and are the subject of the next lesson. Whatever the tool, the principle is identical: <strong>a structured assessment, applied the same way by everyone, finds the sickest patient faster than instinct does</strong>.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "What examiners ask about the nursing process and priorities",
          body: "The first step of the nursing process is always assessment. A nursing diagnosis names a response the nurse can treat (risk of falls related to weakness), never the disease. Objective data is what is measured or observed; subjective data is what the patient reports. A usable goal is specific, measurable, achievable, relevant and time-bound and is written as what the patient will do. Priority order is airway, breathing, circulation, then disability, then everything else; new and deteriorating beats severe and stable; the deteriorating patient comes before reports, visitors and routine tasks because urgency and importance both apply. In any sick child the IMCI general danger signs are assessed before anything else.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "The traps",
          body: "\"Document\" is almost never the first action. \"Notify the doctor\" is not the first action when there is something the nurse can do now for the airway, breathing or circulation — but it comes immediately after, and failing to escalate is as dangerous as failing to act. \"Reassure the patient\" is not an intervention for a physiological problem. And \"severe\" is not the same as \"urgent\": the patient with the most impressive diagnosis is not automatically the patient to see first.",
        },
      ],
      keyPoints: [
        "The nursing process — assess, diagnose, plan, implement, evaluate, reassess — is a cycle; assessment is always first, and evaluation compares the patient's outcome with a measurable, time-bound, patient-centred goal.",
        "A nursing diagnosis names a human response the nurse can treat (problem, related factor, evidence); a medical diagnosis names the disease and belongs to the doctor.",
        "Priority frameworks: ABCDE; Maslow (physiological, safety, belonging, esteem, self-actualisation); acute before chronic; unstable before stable; actual before potential unless the potential problem is likely and lethal; new or changing before old and expected.",
        "New and deteriorating beats severe and stable — a change in respiratory rate, saturation, pulse, blood pressure, conscious level or behaviour outranks any diagnosis label.",
        "The loud patient is usually safe (open airway, perfused brain); the quiet, restless or newly drowsy patient may be dying — restlessness is hypoxia or haemorrhage until proved otherwise.",
        "Within one patient the order is assess, act on the life threat, escalate, then document — patient, then prescriber, then paper.",
        "Early warning scores, the IMCI general danger signs and triage categories are structured ways of applying the same judgement so that the sickest patient is found first by everyone, every time.",
      ],
      quiz: { keywords: ["nursing process","first step of the nursing process","nursing versus medical diagnosis","nursing diagnosis","individualised care planning","writing a measurable goal","smart objectives","objective set by","subjective and objective data","assess first","priority","prioriti","prioritisation using abc","prioritising a patient assignment","most urgent","first action","nursing priority","priority observation","priority nursing","priorities in poisoning","which patient","deteriorat","early warning","clinical judgement","quiet patient","worsening","life threatening","danger sign","general danger","stable patient","abc","evaluating a nutrition care plan","evaluating patient and family","care plan"] },
    },
    {
      slug: "prioritising-patients-time-and-limited-resources",
      title: "Prioritising patients, time and limited resources — triage, escalation and the shift that will not fit",
      minutes: 18,
      objectives: [
        "Apply triage categories in the emergency department and the mass-casualty scene, explain why disaster triage reverses the everyday rule, and order an evacuation correctly.",
        "Recognise the deteriorating patient early and escalate effectively — up the chain, with SBAR, with a specific request and a time — and know what to do when the first call is not answered.",
        "Manage a shift: plan the work, protect time-critical care, handle interruptions and competing demands, and prioritise safely when the ward is short of staff or the nurse is alone.",
        "Prioritise beyond the ward — home visits, community problems with limited resources, patient flow through an outpatient department and the discharges that free beds.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Triage — the same judgement at the door",
          paragraphs: [
            "Triage sorts patients by <strong>urgency of need</strong>, not by order of arrival, age, status or who is shouting loudest. In an emergency department it is done at the entrance by a trained nurse using a structured scale: a patient who is not breathing adequately, is bleeding heavily, is shocked, is fitting or has a threatened airway is <strong>immediate</strong>; a patient with severe pain, moderate blood loss, a possible fracture or a fever with warning signs is <strong>very urgent or urgent</strong> and is seen within minutes rather than hours; a patient who is walking, talking and has a minor complaint is <strong>standard or non-urgent</strong> and may safely wait. The category is written down, the patient is <strong>re-triaged</strong> if the wait is long or the condition changes, and nobody waits in a queue with an unassessed problem.",
            "<strong>Everyday triage treats the sickest first.</strong> The red patient with a blocked airway gets the only doctor, and the green patient waits all afternoon if necessary, because resources are enough to reach everyone eventually.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-EMG-0073.svg",
          alt: "Four triage categories — red immediate for blocked airway, severe bleeding, shock and tension pneumothorax; yellow delayed for long-bone fracture, stable abdominal injury and large burn breathing well; green minor for the walking wounded; black expectant for no breathing after the airway is opened or unsurvivable injury.",
          caption: "Red, yellow, green, black. In everyday care you treat the sickest first; in a disaster you treat the most salvageable first — and you re-triage often, because categories change.",
        },
        {
          type: "text",
          heading: "Mass-casualty triage — when need exceeds resources",
          paragraphs: [
            "When a bus overturns on the Accra–Kumasi road and forty casualties arrive at a district hospital with two doctors, the rule changes. The goal becomes <strong>the greatest good for the greatest number</strong>: resources go to those <strong>most likely to survive with the least intervention</strong>. A casualty who is not breathing after the airway has been opened, or whose injuries are unsurvivable in this place with these resources, is tagged <strong>black (expectant)</strong> and given comfort care, because the hour spent on a resuscitation that will fail is an hour in which three salvageable red patients die. This is the hardest decision in nursing, and it is made by the triage officer, documented on the tag, and <strong>revisited as resources arrive</strong>.",
            "A simple sieve does it in under a minute per casualty: can he walk? — <strong>green</strong>. Is he breathing? If not, open the airway; still not breathing — <strong>black</strong>. Breathing faster than 30 or slower than 10, or no radial pulse, or capillary refill over two seconds, or unable to obey commands — <strong>red</strong>. Otherwise — <strong>yellow</strong>. Counter-intuitive cases: the walking casualty with a chest wound is green until he stops walking; the unconscious patient who is breathing is red; the screaming patient is usually yellow or green because screaming needs an airway and a perfused brain.",
            "The scene is run by a <strong>single incident commander</strong> so that police, fire service, ambulance and hospital do not act at cross purposes, and the hospital activates its <strong>major incident plan</strong>: a triage area at the door, the emergency department emptied of stable patients, theatres and blood alerted, a staff call-in list, a documentation system of numbered tags because names are unknown, a single spokesperson for the public and the press, and <strong>staff rotation and rest</strong> because an exhausted nurse makes errors. Evacuation of a ward in a fire moves <strong>those nearest the danger first regardless of mobility</strong>; where the whole ward must move with no immediate threat, ambulant patients go first, then those needing assistance, then the fully dependent, so that the exits are not blocked by stretchers.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FND-2666.svg",
          alt: "Mass-casualty triage categories — red immediate, yellow delayed, green minor and black expectant — with the reversal of ordinary clinical priority, the counter-intuitive cases and the order of evacuation.",
          caption: "Disaster triage reverses ordinary priority: the most salvageable are treated first, the expectant are made comfortable, and everyone is re-triaged as the picture changes.",
        },
        {
          type: "diagram",
          src: "/diagrams/NG-CLP-2862.svg",
          alt: "Post-disaster mortality drivers and the ordered priorities in a relief camp — water and sanitation first, then shelter, food, measles vaccination and surveillance — with the two persistent errors of dead-body myths and poor rumour management.",
          caption: "After the flood, the priorities are ordered by what kills next: water and sanitation, then shelter and food, measles vaccination and surveillance. Dead bodies do not cause epidemics; rumours and dirty water do.",
        },
        {
          type: "text",
          heading: "The deteriorating patient and how to escalate",
          paragraphs: [
            "Most in-hospital cardiac arrests are preceded by <strong>hours of abnormal observations that were recorded but not acted on</strong>. A rising respiratory rate is the earliest and most neglected sign; falling blood pressure is the latest. The nurse who notices the trend — or who simply feels that the patient does not look right — must <strong>escalate</strong>: increase the frequency of observations, start what she can (oxygen, position, intravenous access, glucose), and get a senior clinician to the bedside.",
            "Escalation fails in two predictable ways. The first is <strong>hinting instead of asking</strong>: \"Mr Owusu does not look very well\" leaves the listener to guess how worried you are. Use SBAR and <strong>end with a specific request and a time</strong> — \"please review him within ten minutes; may I start oxygen now?\" The second is <strong>stopping when the first call is unanswered</strong>. If the doctor has not responded to two calls, the nurse goes <strong>up the chain</strong> — the nurse in charge, the senior nurse on duty, the registrar, the consultant on call, the emergency team — stating clearly what she needs. Following the chain of command is right for a routine administrative concern; a deteriorating patient is escalated to <strong>whoever can act now</strong>, and the fact that the usual doctor was busy is never a defence.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PFC-0646.svg",
          alt: "The SBAR tool — Situation, Background, Assessment, Recommendation — with a worked example of a post-laparotomy patient whose breathing has worsened and the point that the recommendation must state what you want and by when.",
          caption: "Situation, Background, Assessment, Recommendation. The R is the part most often left out and the part that gets the patient seen: say what you want, by when, and escalate if you do not get it.",
        },
        {
          type: "list",
          heading: "Managing a shift — time management for the nurse",
          style: "steps",
          items: [
            "<strong>Take a structured handover and walk the ward.</strong> See every patient within the first half hour — a quick look at breathing, colour, drips, drains and the observation chart — so that the plan for the shift is built on what is true now, not on what was true at six o'clock.",
            "<strong>Sort the work into four boxes.</strong> Urgent and important (the deteriorating patient, a time-critical drug, a patient going to theatre) — do now. Important but not urgent (teaching, discharge planning, care plans, the pressure-area round) — schedule and protect. Urgent but not important (a form, a phone call, a report that is due) — do quickly, delegate or defer. Neither — drop. Reports are often urgent but not clinically important, and they crowd out the work that matters.",
            "<strong>Protect time-critical care.</strong> Antibiotics in sepsis within the hour, insulin before the meal, anticonvulsants and antiparkinsonian drugs on time, the two-hourly turn, the 15-minute observations after a transfusion starts. Build the shift around these fixed points.",
            "<strong>Cluster and delegate.</strong> Do several things at one bedside in one visit; delegate the stable, routine and predictable to the assistant with clear instructions and a time to report back (the subject of the next module); keep assessment, the unstable patient, teaching and evaluation.",
            "<strong>Expect interruptions and defend the dangerous moments.</strong> A medicine round is not interrupted for a non-urgent question; a \"do not disturb\" tabard or a protected round is a safety measure, not rudeness. When interrupted, finish the step you are on or start the check again.",
            "<strong>Re-prioritise every time something changes</strong> — a new admission, a deterioration, a nurse called away — and <strong>escalate the shortfall</strong> when the plan no longer fits the staff. Say what cannot be done safely rather than silently leaving it undone.",
          ],
        },
        {
          type: "text",
          heading: "When there are not enough staff",
          paragraphs: [
            "Two nurses fail to report for the night shift on a busy ward. The nurse in charge does not simply spread the same work over fewer people. She <strong>assesses the workload and the dependency of the patients present, re-prioritises so that essential and time-critical care is protected, and escalates the shortfall formally</strong> — by telephone and in writing — to the manager on call, who can redeploy staff or authorise cover. The written report matters: it creates a record, transfers the decision about acceptable risk to the person with authority to act on it, and protects the nurse who did her best with what she had.",
            "The nurse who is the <strong>only qualified member of staff</strong> on a thirty-bed ward prioritises exactly as she would in a disaster: the patient whose oxygen has stopped and who is restless comes before the intravenous fluids that have finished, which come before the sleeping tablet, which comes before the routine documentation. <strong>Missed care</strong> — the turn, the mouth care, the walk to the toilet — is the earliest sign of chronic understaffing, and it is reported, not hidden, because the register of what could not be done is the evidence that changes the roster.",
          ],
        },
        {
          type: "table",
          heading: "Prioritising beyond the ward",
          columns: ["Setting", "How to prioritise", "Example"],
          rows: [
            ["<strong>Home visits</strong> (a community health nurse can make only a few this week)", "By risk and time-sensitivity, exactly like clinical triage — the newborn in the first week, the postnatal mother with warning signs, the defaulting tuberculosis patient, the child who missed a vaccine, then routine follow-up.", "A newborn discharged two days ago whose mother reports feeding difficulty is visited before a stable hypertensive who missed one clinic visit."],
            ["<strong>Community problems</strong> (a community assessment finds many problems and few resources)", "Weigh how <strong>common</strong> and how <strong>serious</strong> each problem is against what can actually be <strong>changed</strong> with the resources available and what the <strong>community itself</strong> sees as important — magnitude, severity, feasibility and community concern.", "Diarrhoea in under-fives from a broken borehole (common, serious, fixable, felt by the community) is tackled before a rare condition that needs a tertiary hospital."],
            ["<strong>Outpatient flow</strong>", "Find the <strong>bottleneck</strong> — the slowest station, where the queue forms — and add capacity there, remove work from it that someone else could do, and smooth arrivals with appointments. Speeding up registration when consultation is the constraint only makes the queue in front of consultation form faster.", "Registration processes sixty patients an hour and consultation twelve: the department's real capacity is twelve an hour, whatever registration does."],
            ["<strong>Bed flow</strong>", "Emergency patients wait for beds although beds are empty by mid-afternoon because discharges happen late. Plan discharges the day before, do the discharge round first, write the letter early, and the morning bed exists when the morning admission arrives.", "A ward that discharges by ten o'clock admits from the emergency department at eleven instead of at seven in the evening."],
            ["<strong>Referral</strong>", "Refer up when the case exceeds the capacity of this level, with a written note and a telephone call ahead; feed back down so follow-up happens near home. Bypassing a level overloads the hospital and empties the clinic built to protect it.", "A district hospital that telephones the regional hospital before sending a patient is not turned away at the gate."],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Prioritisation with limited resources — the examiner's favourite shape",
          body: "Four options; all are things a good nurse would do; one of them protects life or prevents imminent harm and the other three are comfort, maintenance or paperwork. Choose the one that addresses airway, breathing, circulation or a new deterioration. If none does, choose the one that prevents the most serious likely harm. If the question is about a manager rather than a bedside nurse, the answer is usually to assess, re-prioritise against patient safety and clinical need, and escalate in writing — not to work harder in silence.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "What examiners ask about triage, escalation and time",
          body: "In a mass-casualty incident the aim is the greatest good for the greatest number — treat those most likely to survive with the available resources; a casualty who makes no respiratory effort after the airway is opened is black (expectant); a man with noisy partial airway obstruction and a rising respiratory rate is red. A single incident commander provides one point of coordination. A fire drill is the preparedness phase of the disaster cycle; building a flood-resistant health centre is mitigation. In a fire, evacuate those closest to the fire first regardless of mobility; in a general evacuation, ambulant first, then assisted, then dependent. A nurse who has worked eighteen hours in a major incident is required to rest. When a doctor has not answered two calls, escalate to the next senior person and state clearly what you need. When two nurses fail to report, assess the workload, re-prioritise care and escalate the shortfall to management.",
        },
      ],
      keyPoints: [
        "Triage sorts by urgency, not arrival: immediate, very urgent, urgent, standard, non-urgent — assessed by a trained nurse at the door, written down and repeated if the wait is long or the patient changes.",
        "Disaster triage reverses the everyday rule: the greatest good for the greatest number, the most salvageable treated first, red–yellow–green–black with a one-minute sieve (walking, breathing after airway opened, respiratory rate, radial pulse or capillary refill, obeys commands), the expectant made comfortable and everyone re-triaged.",
        "A major incident needs one incident commander, an activated hospital plan, numbered tags, a single spokesperson and enforced staff rest; evacuate those nearest the danger first, otherwise ambulant, then assisted, then dependent.",
        "Deterioration announces itself hours before arrest — a rising respiratory rate first, falling blood pressure last; escalate with SBAR, end with a specific request and a time, and go up the chain to whoever can act now if the first call is not answered.",
        "Manage a shift by seeing every patient early, sorting work into urgent-and-important, important, urgent-only and neither, protecting time-critical care, clustering, delegating the routine, defending the medicine round from interruption and re-prioritising whenever something changes.",
        "When staff fail to arrive, the nurse in charge assesses workload and dependency, re-prioritises to protect essential care and escalates the shortfall formally and in writing; missed care is reported, not hidden.",
        "Beyond the ward, prioritise home visits by risk and time-sensitivity, community problems by magnitude, severity, feasibility and community concern, and patient flow by finding the bottleneck, discharging early and referring with a call ahead.",
      ],
      quiz: { keywords: ["triage","mass casualty","disaster","evacuation","incident command","flood response","relief camp","fire safety","fire drill","fire breaks out","hospital evacuation","psychological first aid","limited resources","resource constraints","competing demands","time management","workload","staff shortage","fail to report for a shift","interruption","escalat","chain of command","has not responded","two calls","deteriorating patient","home visiting priorities","purpose of the home visit","prioritising community","community problems","bottleneck","identifying a bottleneck","improving throughput","smoothing demand","waiting time","discharge planning","home circumstances and discharge","continuity of care after discharge","length of stay","referral coordination","referral practice","referral pathway","referral within the health system","queue","sixty patients","before eight in the morning","ward bed","turned away","documentation in emergencies","documentation in an incident","dead body management","communication with the public","staff welfare in disasters","only qualified staff member"] },
    },
  ],
};
