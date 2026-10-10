import type { CourseModule } from "../types";

export const managingPeopleAndResources: CourseModule = {
  slug: "managing-people-money-and-supplies",
  title: "Managing people, money and supplies",
  summary: "The three staffing questions — how many, which mix, and why they leave — and the roster as a safety document; fatigue, overtime, leave and absence; keeping staff safe from sharps, hepatitis B, violence, back injury and tuberculosis and supporting them after the worst days; then the ward's money and materials: fixed and variable costs, procurement and the law that governs it, conflicts of interest and gifts, petty cash and audit, running a store without stock-outs, equipment that works, and the operations thinking that shortens queues and frees beds.",
  lessons: [
    {
      slug: "staffing-rosters-workforce-and-staff-safety",
      title: "Staffing, rosters, the workforce and staff safety",
      minutes: 17,
      objectives: [
        "Determine how many nurses a ward needs from patient dependency rather than bed numbers, judge skill mix, and recognise missed care as the earliest sign of understaffing.",
        "Write a roster as a safety document — shift patterns, rest between shifts, night duty, leave planning and cover for absence — and explain why routine overtime and fatigue are dangerous.",
        "Describe why Ghanaian nurses leave posts, the levers a manager has for retention, and the cost of turnover.",
        "Protect staff from needlestick injury, hepatitis B, workplace violence, manual-handling injury and tuberculosis, respond to an exposure, and support staff after a death, an assault or a serious incident.",
      ],
      blocks: [
        {
          type: "text",
          heading: "How many nurses does a ward need?",
          paragraphs: [
            "Not a number per bed. The staffing a ward requires is driven by <strong>patient dependency</strong> — how much nursing time each patient actually needs — so <strong>workload measurement</strong> classifies patients as needing total, partial or minimal care and converts the mix into nursing hours. Ten highly dependent patients need more nurses than twenty who are self-caring, and a ward whose establishment was set by counting beds is understaffed on every day that its patients are sicker than average, which on a Ghanaian medical ward is most days. The <strong>acuity</strong> of the patients changes by the hour; the roster is written in advance; the gap between them is managed by the nurse in charge through prioritisation, redeployment and escalation.",
            "The <strong>earliest sign that a ward is chronically understaffed is missed care</strong>: routine turning, mouth care, mobilisation, teaching and timely documentation are omitted because staff protect what is visible, timed and audited — medicines, doctors' instructions, the observation chart. Pressure injuries, falls and complaints follow weeks later. A manager who asks staff to record what could not be done each shift turns an invisible problem into the evidence that changes the establishment.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ADM-1456.svg",
          alt: "The three staffing questions a ward manager is asked — how many (driven by dependency, not bed count), which mix (a cheaper mix is not a saving if registered-nurse tasks pile up, and dilution shows first as missed care) and why they leave (delayed postings and arrears, no accommodation, no study leave or promotion, unsafe workload, lack of recognition) — with the note that a roster is a safety document, not a fairness document.",
          caption: "How many, which mix, and why they leave. Replacing one experienced nurse costs recruitment, orientation, months of reduced productivity and knowledge that no handover captures — retention is usually cheaper than recruitment.",
        },
        {
          type: "table",
          heading: "The roster as a safety document",
          columns: ["Principle", "Why", "In practice"],
          rows: [
            ["<strong>Safe pattern first, fairness within it</strong>", "A roster that is fair but leaves a night with no registered nurse is unsafe; fairness is achieved within the safe pattern, not instead of it.", "Every shift has a registered nurse in charge with the authority to act; skill mix matched to dependency; the establishment, not goodwill, covers predictable absence."],
            ["<strong>Rest between shifts</strong>", "A night shift directly after a late shift leaves too little time for sleep; <strong>insufficient recovery impairs judgement and vigilance</strong>, and the deficit appears as slowed reaction, narrowed attention and errors.", "At least eleven hours between shifts; no more than a set run of nights; forward rotation (morning → afternoon → night) where rotation is used."],
            ["<strong>Overtime is an alarm, not a plan</strong>", "A ward staffed largely through overtime has two problems: <strong>fatigue increases errors</strong>, and the overtime <strong>hides a permanent staffing gap</strong> that should appear in the establishment.", "Track overtime hours and report them with the incident data; use them to justify posts."],
            ["<strong>Leave is planned, not endured</strong>", "Annual leave bunched in December and school holidays empties the ward; leave carried over indefinitely is a fatigue and a liability problem.", "A leave plan agreed early in the year with a maximum number away at once; study leave shared fairly and recorded."],
            ["<strong>Absence is managed</strong>", "Unplanned absence that is not followed up becomes the norm; sudden absence in a reliable nurse often signals illness or crisis.", "Return-to-work conversations after every absence; the policy applied consistently; the manager asks before she warns."],
            ["<strong>The Labour Act, 2003 (Act 651) frames it</strong>", "Maximum normal hours, rest periods, paid annual leave, <strong>twelve weeks of maternity leave</strong>, protection from unfair dismissal and the right to a safe workplace are legal duties, not favours.", "Rosters, overtime and leave are written to comply; disputes go through grievance procedures and, for unionised staff, the union."],
          ],
        },
        {
          type: "text",
          heading: "Why they leave — and what a manager can actually do",
          paragraphs: [
            "Nurses posted to a remote district who repeatedly request transfers are not usually asking for more money. Salary is a hygiene factor: its absence (arrears, delayed postings) causes misery, but <strong>housing, supervision, equipment, safety, workload and career prospects</strong> decide whether people stay. The levers a district or ward manager holds are real even when the pay scale is not hers: <strong>decent accommodation</strong> negotiated with the Assembly, <strong>a functioning supervision visit</strong>, equipment that works, a roster that protects rest, fair access to study leave and in-service training, a visible promotion path, recognition, and a structured <strong>induction with a preceptor</strong> — the factor that most strongly predicts whether a newly posted nurse stays beyond her first year. <strong>Rural retention schemes</strong> add allowances, housing and accelerated study leave; they work best when they are reliable, because an allowance that arrives late is another broken promise.",
            "The <strong>cost of turnover</strong> is routinely underestimated: advertising and recruitment, months of vacancy covered by overtime, orientation, the reduced productivity of a newcomer, the errors of a team that keeps changing, and the local knowledge — which relative to call, which pharmacy stocks the drug, which borehole broke last year — that leaves with the person. Retaining an experienced nurse is almost always cheaper than recruiting a replacement, and an <strong>exit interview</strong> with every leaver tells the manager which lever she failed to pull.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ADM-1478.svg",
          alt: "The staff are also patients — five occupational risks on Ghanaian wards with the control that works: needlestick (never recap, sharps box within reach, fill to three quarters; wash, report, post-exposure prophylaxis within hours), hepatitis B (complete the vaccine course before exposure), under-reporting (loses prophylaxis, compensation and visibility), workplace violence (information for waiting patients) and manual handling (equipment, enough people, bed height).",
          caption: "A service that harms its staff runs short of staff. Each risk has a control that actually works — and none of them is a memo telling people to be careful.",
        },
        {
          type: "table",
          heading: "Occupational risks and the controls that work",
          columns: ["Risk", "The control that works", "After an exposure or incident"],
          rows: [
            ["<strong>Needlestick and sharps injury</strong>", "<strong>A sharps container within arm's reach at the point of use</strong> — injuries cluster in the walk between use and disposal; never recap; fill to three quarters; safety-engineered devices where available; no sharps passed hand to hand.", "Bleed gently under running water, wash with soap, do not squeeze or apply bleach; <strong>report at once</strong>; assess the source; <strong>HIV post-exposure prophylaxis within hours, ideally within 2 and no later than 72</strong>; hepatitis B immunoglobulin and vaccine if not immune; baseline and follow-up tests; document on the injury register."],
            ["<strong>Hepatitis B</strong>", "<strong>Completing the vaccination course before clinical exposure begins</strong> and checking the antibody response; hepatitis B is far more transmissible per injury than HIV, and the unvaccinated nurse is the one at risk.", "Post-exposure vaccine and immunoglobulin according to immune status; test the source; follow up."],
            ["<strong>Under-reporting of injuries</strong>", "A no-blame, simple, fast reporting route and visible action on what is reported; a log with most entries blank is a culture problem, not a safety record.", "An unreported injury <strong>loses prophylaxis, loses compensation and keeps the hazard invisible</strong> — the manager's job is to make reporting easier than not reporting."],
            ["<strong>Workplace violence</strong>", "Assaults are commonest where waiting is long and information scarce: <strong>keeping waiting people informed about delays and the order of care</strong> is a safety measure for the nurse; visible security, a layout with an exit behind the nurse, de-escalation training, no lone working in high-risk areas.", "After an assault: immediate safety, medical care, an incident report, support for the staff member, review of what allowed it, and police involvement where a crime was committed."],
            ["<strong>Manual handling and back injury</strong>", "<strong>Handling aids (hoists, slide sheets) and enough people for each transfer</strong>, adjustable bed height and a no-lift policy; technique training alone has repeatedly failed.", "Report, treat, review the task; back injury is a leading cause of nurses leaving practice."],
            ["<strong>Tuberculosis</strong>", "<strong>Prompt identification and separation of coughing patients and good natural ventilation</strong> (open windows, fans directing air outward), cough etiquette, early GeneXpert and treatment; N95 respirators for high-risk procedures; staff with a cough of two weeks are tested.", "Screen exposed staff; treat latent infection where indicated; staff living with HIV are protected from high-exposure areas."],
            ["<strong>Fire and the physical environment</strong>", "Clear emergency exits, working extinguishers, drills, electrical safety, no overloaded sockets, oxygen stored and handled correctly.", "A blocked exit is <strong>cleared if possible and reported formally</strong> the same day — it only matters on the day it cannot be fixed in time."],
          ],
        },
        {
          type: "text",
          heading: "Supporting staff after the worst days",
          paragraphs: [
            "A nurse who is distressed after a patient dies unexpectedly during her shift, a student visibly upset after her first death, a team after a patient's suicide on the ward or an assault on a colleague — these are the <strong>second victims</strong> of an incident. They are acutely distressed, at higher risk of error in the following hours, and at risk of leaving the profession. The response is <strong>immediate support</strong> — take her out of the clinical area, sit with her, let her talk, do not send her back to the next patient as though nothing happened — and <strong>follow-up as needed</strong>: a debrief for the team within days that is about learning and support rather than blame, access to counselling, and a check on how she is a week later. After a patient suicide the team needs <strong>postvention</strong>: a structured review, support for every member, attention to the other patients who knew him, and care over how the family is told and supported. During a major incident the incident manager <strong>requires an exhausted nurse to rest</strong>, because fatigue causes errors that harm patients, and insisting on continuing is itself a sign that she needs to stop.",
            "<strong>Burnout</strong> — emotional exhaustion, cynicism and a sense of inefficacy — is the chronic form of the same injury. Its drivers are workload, loss of control, insufficient reward, breakdown of community, unfairness and conflict of values, and every one of them is a management variable. The manager who protects rest, shares the unpleasant shifts fairly, recognises effort, deals with conflict and tells the truth is practising staff safety as surely as the one who orders sharps boxes.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "What examiners ask about staffing and staff safety",
          body: "Staffing is driven by patient dependency, not bed count; missed care is the earliest sign of chronic understaffing; replacing registered nurses with assistants leaves registered-nurse tasks undone; an unsafe night staffing level is reported in writing to the manager on call. A night shift after a late shift impairs judgement through insufficient recovery; routine overtime causes fatigue and hides a staffing gap. Nurses leave remote postings for housing, supervision, equipment, safety and career reasons, not salary alone; induction with a preceptor keeps new staff; retention is cheaper than recruitment. Sharps containers at the point of use prevent most needlestick injuries; completing hepatitis B vaccination before exposure protects staff; unreported injuries lose prophylaxis and keep the hazard invisible; information for waiting patients reduces violence; handling aids and enough staff prevent back injury; identifying coughing patients and ventilation reduce tuberculosis transmission; a blocked exit is cleared and reported. Staff distressed after a death receive immediate support and follow-up; an exhausted nurse in a major incident is required to rest.",
        },
      ],
      keyPoints: [
        "Nurse numbers follow patient dependency and acuity, not beds; missed care (turning, mouth care, mobilising, teaching) is the earliest sign of chronic understaffing and should be recorded as evidence.",
        "Skill mix must match the tasks only registered nurses may do; a cheaper mix that leaves assessment and intravenous medicines undone is not a saving, and an unsafe level is escalated in writing at the time.",
        "The roster is a safety document — a registered nurse in charge of every shift, rest of at least eleven hours between shifts, forward rotation, leave planned across the year, absence followed up and the Labour Act (including twelve weeks' maternity leave) respected; routine overtime signals fatigue and a hidden vacancy.",
        "Nurses stay for housing, supervision, equipment, safety, fair workload, study leave, promotion and recognition as much as pay; structured induction with a preceptor is the strongest predictor of retention, and turnover costs far more than it appears.",
        "Needlestick prevention is a sharps box within reach and no recapping; after exposure wash, report, and start HIV post-exposure prophylaxis within hours (no later than 72) with hepatitis B protection according to immune status; the vaccine course is completed before exposure begins.",
        "Violence falls when waiting patients are kept informed; back injury falls with handling aids and enough people; tuberculosis transmission falls with prompt identification of coughers and ventilation; blocked exits are cleared and reported.",
        "Staff are the second victims of deaths, suicides, assaults and errors — immediate support, a learning debrief, follow-up and enforced rest in a major incident protect them and the next patient; burnout is driven by management variables.",
      ],
      quiz: { keywords: ["workload measurement","nursing staff a ward requires","acuity","skill mix","nurse assistants at the same total cost","missed care","chronically understaffed","understaff","short staffed","overtime","task shifting","establishment","staff establishment","duty roster","roster","night shift","night duty","late shift","fatigue","leave planning","annual leave","december period","absent without notice","cost of turnover","turnover","retaining an experienced","recruiting a replacement","rural retention","remote ghanaian district","request transfers","incentive","posting","posted","newly posted","induction of new staff","stays beyond her first year","staff rewards","recognition and morale","morale","needlestick","sharps","sharps box","post exposure","access to post","hepatitis b protection","hepatitis b vaccination","occupationally acquired","never formally reported","workplace violence","verbal abuse","violence","manual handling","back injur","lifting","tuberculosis risk","tuberculosis transmission to staff","crowded ghanaian ward","emergency exit","unsafe environment","fire safety in a health facility","staff support","distressed after","patient suicide","supporting staff","occupational health","occupational needlestick","burnout","staff welfare","salary","forty patients","one registered nurse and three assistants"] },
    },
    {
      slug: "finance-procurement-supplies-and-patient-flow",
      title: "Finance, procurement, supplies and patient flow",
      minutes: 17,
      objectives: [
        "Distinguish fixed from variable and recurrent from capital costs, write a budget request that persuades, handle petty cash and an audit query, and explain why waste and length of stay matter to the ward's money.",
        "Describe how public procurement works in Ghana — the Public Procurement Act, competitive tendering as the default, the single-source exception, segregation of duties, conflicts of interest and gifts from suppliers.",
        "Run a ward or facility store without stock-outs: consumption, lead time, buffer and reorder level, first-expiry-first-out, stock cards and physical counts, discrepancies, expired stock and equipment maintenance.",
        "Apply operations thinking to patient flow — find the bottleneck, smooth demand, plan discharges and coordinate referrals.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The money a ward actually controls",
          paragraphs: [
            "A ward sister does not control the salary bill, but she controls <strong>waste, stock losses, length of stay and the quality of the documentation that becomes a claim</strong>. Each is money. A dressing pack opened for a procedure that is then cancelled, gloves used for tasks that need none, a drug drawn up and discarded because the prescription was unclear, an infusion run through a set that is changed too often, a patient kept an extra day because the discharge letter was not written — under a fixed tariff per episode, <strong>every one of these costs the facility rather than the scheme</strong>, and the sum of them is the difference between a store that is stocked and a store that is empty. Managing resources well <strong>protects the facility's operating budget</strong> and therefore the next patient's care; it is a clinical duty wearing an accountant's coat.",
            "Costs are sorted two ways. <strong>Fixed costs</strong> are paid whether or not any patient attends — rent, salaries, licences, insurance; <strong>variable costs</strong> rise with each patient — dressings, gloves, drugs, laboratory reagents. <strong>Recurrent</strong> costs recur every year and <strong>capital</strong> costs are one-off purchases that last; the two are budgeted and approved through different lines, which is why a request for an oxygen concentrator is written differently from a requisition for gloves. A <strong>budget request</strong> persuades when it states the problem in numbers, the option proposed, the cost, the cost of doing nothing and the outcome that will be measured.",
          ],
        },
        {
          type: "table",
          heading: "Money handling and accountability",
          columns: ["Situation", "Correct handling", "Why"],
          rows: [
            ["<strong>Petty cash</strong> (an imprest for small purchases)", "A fixed float; every payment supported by a receipt or signed voucher; a running balance; replenished against the vouchers; counted and reconciled by someone other than the holder.", "Small sums disappear in unrecorded purchases; the voucher trail is what makes the float auditable."],
            ["<strong>An audit query</strong> (the internal auditor asks why a stock figure does not match)", "Provide the records — stock cards, requisitions, issue vouchers, the physical count — fully and promptly; explain, do not conceal; correct what is wrong with a signed, dated entry; act on the recommendations.", "Audit is a control function that protects honest managers; obstruction turns a discrepancy into a disciplinary matter."],
            ["<strong>A gift or inducement from a supplier</strong>", "Decline anything beyond a token of negligible value; declare it; never accept a personal payment linked to an order.", "A gift creates an obligation that distorts the next purchasing decision — and acceptance is corruption under the Public Procurement Act and the Criminal Offences Act whether or not the order changes."],
            ["<strong>Conflict of interest</strong> (the manager's brother owns a company bidding to supply the ward)", "<strong>Declare the relationship in writing and withdraw from the evaluation and the decision.</strong>", "The decision must not only be fair but be seen to be fair; an undeclared interest voids the process and the manager's integrity with it."],
            ["<strong>Segregation of duties</strong>", "The person who <strong>orders</strong>, the person who <strong>receives and records</strong>, and the person who <strong>counts and pays</strong> are different people.", "One person doing all three can order goods that never arrive and record them as received; separation makes fraud require collusion."],
            ["<strong>Donated money or goods</strong>", "Received against a receipt, entered in the records, used for the stated purpose, reported to the donor.", "Donations outside the books are the commonest route for honest facilities to acquire a theft."],
          ],
        },
        {
          type: "text",
          heading: "Procurement — buying with public money",
          paragraphs: [
            "Purchasing in public health facilities is governed by the <strong>Public Procurement Act, 2003 (Act 663), as amended in 2016 (Act 914)</strong>, administered by the Public Procurement Authority. Its default method above the small-purchase thresholds is <strong>open competitive tendering</strong>: a published invitation, a specification written around the need rather than around one supplier's product, sealed bids opened in public, evaluation against criteria set in advance, award to the bid that offers best value, and a record of every step. Below the thresholds, request-for-quotation from several suppliers applies. <strong>Single-source (sole-source) procurement</strong> is an exception permitted only in defined circumstances — a genuine emergency, a sole supplier, compatibility with existing equipment — and only through the lawful approval route; a manager who is urged to bypass tendering \"because the need is urgent\" <strong>declines and follows the procedure</strong>, because an urgency created by poor planning is not an emergency, and the person who signs the irregular order is the one who answers for it. Each entity has a procurement committee and an annual procurement plan; the health service additionally buys most medicines through the regional medical stores and framework contracts, which is why a facility's drug supply depends on its requisitions and its payments as much as on the market.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ADM-1446.svg",
          alt: "Running a store — a sawtooth stock graph with a reorder level labelled order here, not when empty, and a buffer line; the four numbers (average monthly consumption, lead time, buffer stock, reorder level); first expiry first out; what to do when the count and the card disagree; and separating the roles of ordering, receiving and counting.",
          caption: "A stock-out is almost never a supply problem; it is an arithmetic problem nobody did in time. Order at the reorder level, not when the shelf is empty.",
        },
        {
          type: "list",
          heading: "Running a store — the four numbers and the four habits",
          style: "steps",
          items: [
            "<strong>Average monthly consumption</strong>: counted from the issue records, not guessed. A ward that repeatedly runs out of gloves before the next supply <strong>reviews actual consumption against the quantity requisitioned and adjusts the requisition</strong> — recurrent stock-outs almost always mean the order is based on an outdated figure.",
            "<strong>Lead time</strong>: the weeks between placing an order and receiving it, including the approval and payment steps. Measure it; it is usually longer than anyone believes.",
            "<strong>Buffer (safety) stock</strong>: the cushion for a late delivery or a surge in demand — commonly half to one month's consumption.",
            "<strong>Reorder level</strong> = (consumption during the lead time) + buffer. When stock falls to this level, order. Order quantity brings the stock back to the maximum (often two to three months' supply); holding a very large stock ties up money, occupies space and expires on the shelf.",
            "<strong>First expiry, first out (FEFO)</strong>: issue by expiry date, not arrival date; put the shortest-dated stock at the front; a newly delivered batch may expire before one that has been on the shelf for months. A medicine found expired on the shelf is <strong>removed, quarantined and documented</strong> for disposal through the facility's procedure (expired medicines are not thrown in general refuse or returned to the ward).",
            "<strong>Stock cards and physical counts</strong>: every receipt and issue entered on the card (or bin card) at the time, with a running balance; periodic physical counts. <strong>When the count and the card disagree, do not adjust the card to match the shelf</strong> — investigate (unrecorded issues, breakages, theft, errors), then correct with a signed, dated entry and report a significant discrepancy.",
            "<strong>Controlled drugs</strong> have their own register, locked cupboard, two-person checks and counts at every shift change; a discrepancy here is reported immediately, because diversion is both a crime and a danger.",
            "<strong>Equipment</strong>: an asset register, a planned preventive-maintenance schedule, user training and a fault-reporting route. Donated machines that no longer work because there is no maintenance contract, no spare parts and nobody trained to use them are a lesson in <strong>total cost of ownership</strong> — the purchase price is the smallest part.",
          ],
        },
        {
          type: "text",
          heading: "Operations — why the queue is long when everyone is working hard",
          paragraphs: [
            "An outpatient department is a chain: registration, vital signs, consultation, pharmacy, exit. Registration processes sixty patients an hour, vital signs forty, consultation twelve, pharmacy thirty. The department can move only <strong>twelve patients an hour</strong> — the capacity of its <strong>slowest station, the bottleneck</strong> — however fast registration works, and adding staff anywhere except the constraint only makes the queue in front of the constraint form faster. Find the bottleneck by <strong>walking the pathway and looking for where patients are waiting</strong>, not where staff look busiest. Then <strong>add capacity at the constraint</strong> (a second consulting room, a physician assistant seeing the simple cases), <strong>remove work from the constraint</strong> that someone else could do (the nurse completes the history and the forms; the prescriber only prescribes) and <strong>smooth demand</strong> so that the whole day's patients do not arrive at eight in the morning — appointment slots, a separate stream for reviews and dressings, chronic-disease clinics on fixed days.",
            "Beds follow the same logic. Emergency patients wait on trolleys all morning while beds are empty by four o'clock because <strong>discharges happen late in the day</strong>: plan the discharge the day before, do the discharge round first, write the letter and the prescription early, arrange transport, and the bed exists when the admission arrives. <strong>Length of stay</strong> is the ward's most powerful cost and flow variable, and the commonest reason for a long stay is not illness but a wait — for a result, a review, a letter, a relative with the fare. <strong>Referral coordination</strong> — a telephone call to the receiving facility, a written referral note, feedback down the line — turns the referral system from a pathway into a conversation and stops the patient being turned away at the gate.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ADM-1472.svg",
          alt: "An outpatient department drawn as five boxes — registration sixty an hour, vital signs forty, consultation twelve, pharmacy thirty, exit — with the crowd waiting in front of consultation, labelled the constraint; how to find the constraint by looking for where patients wait; and what helps: capacity at the constraint, removing work from it and smoothing arrivals.",
          caption: "The department moves as many patients per hour as its slowest station. A queue forms at the constraint, not where people work hardest — and speeding up registration is the commonest well-meant mistake.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "What examiners ask about money, procurement and supplies",
          body: "Rent and salaries are fixed costs; dressings and drugs are variable. Recurrent and capital expenditure are budgeted differently. Reducing waste protects the facility's operating budget. Under Ghana's public procurement law the default above the threshold is open competitive tendering; a request to bypass it for urgency is declined; a manager whose brother's company is bidding declares the interest and withdraws; gifts from suppliers are refused; ordering, receiving and counting are separated. Recurrent glove stock-outs are fixed by reviewing actual consumption against the requisition. The reorder level is consumption during the lead time plus buffer. Issue first expiry, first out. When the physical count does not match the stock card, investigate and correct with a signed entry — never alter the card to match the shelf. Holding a very large stock ties up money and expires. The outpatient bottleneck is the slowest station — twelve an hour if consultation manages twelve — and late discharges block flow.",
        },
      ],
      keyPoints: [
        "The ward controls waste, stock losses, length of stay and claim quality — under a fixed tariff per episode each of these costs the facility, so resource management protects the next patient's care.",
        "Fixed costs are paid regardless of patients (rent, salaries, licences); variable costs rise per patient (dressings, drugs); recurrent costs recur yearly and capital costs are one-off, requested and approved through different lines; a budget request states problem, option, cost, cost of inaction and the measure of success.",
        "Petty cash runs on a fixed float with vouchers and independent reconciliation; audit queries are answered with records, not concealment; gifts and inducements are refused; a conflict of interest is declared in writing and the manager withdraws; ordering, receiving and counting are done by different people.",
        "Public procurement follows Act 663 as amended by Act 914 — open competitive tendering by default, quotations below thresholds, single-source only in defined circumstances through the lawful route, and no bypass for self-made urgency.",
        "A store runs on four numbers — average monthly consumption, lead time, buffer stock and the reorder level (lead-time consumption plus buffer) — and four habits: FEFO, stock cards kept at the time, physical counts with discrepancies investigated and corrected by signed entry, and expired stock quarantined for proper disposal.",
        "Recurrent stock-outs are fixed by reviewing actual consumption against the requisition; very large stocks waste money and expire; controlled drugs have their own register and counts; equipment needs an asset register, maintenance and trained users — the purchase price is the smallest part of its cost.",
        "Patient flow is limited by the bottleneck — the slowest station, found where patients wait — so add capacity there, move work off it and smooth arrivals; discharge early in the day, attack avoidable length of stay and coordinate referrals with a call ahead and feedback.",
      ],
      quiz: { keywords: ["fixed cost","variable cost","recurrent and capital","capital expenditure","budget","budget request","persuasive","petty cash","audit query","internal auditor","auditor","gift or inducement","inducement","personal payment","supplier","conflict of interest","brother owns","procurement","tendering","competitive tender","single sourc","segregation of duties","orders supplies","receives and records","stock","stock card","stock discrepancy","physical count","reorder level","reorder","consumption","first expiry","expiry and stock rotation","shorter expiry","expired medicines","expired last month","requisition","runs out of gloves","run out","drug store","ward's stock","equipment maintenance","donated machines","no longer work","cost of waste","protects the facility's operating budget","explaining a shortage","must buy an item","shortage","efficien","bottleneck","throughput","smoothing demand","discharge planning and flow","length of stay","referral coordination","waiting times remain","inventory","financial","diverted","controlled drugs register","vaccine fridge","freezing vaccines","waste of","operating budget","cost of","costs","cheaper","expensive"] },
    },
  ],
};
