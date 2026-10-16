import type { CourseModule } from "../types";

export const leadershipManagementAndTheHealthSystem: CourseModule = {
  slug: "leadership-management-and-the-ghana-health-system",
  title: "Leadership, management and the Ghana health system",
  summary: "Leadership as influence and management as getting the work done through others — the styles and when each fits, the functions of management, span of control, unity of command and the chain of command, motivation, change, conflict, meetings and managing upwards; then the system a Ghanaian nurse leads within: the Ministry and the Service, the levels from CHPS to teaching hospital, the district as the planning unit, the planning cycle and SMART objectives, budgets, where a facility's money comes from, the NHIS and its claims, and the health information that drives it all.",
  lessons: [
    {
      slug: "leadership-styles-and-the-functions-of-management",
      title: "Leadership styles and the functions of management",
      minutes: 17,
      objectives: [
        "Distinguish leadership from management, describe the classical functions of management with ward examples, and apply the principles of span of control, unity of command and the chain of command.",
        "Compare autocratic, democratic, laissez-faire, transactional, transformational, servant and situational leadership, and choose the style that fits the situation and the team.",
        "Explain what motivates nurses beyond salary, why staff resist change and how to lead it, and how to manage conflict between staff.",
        "Run a productive meeting, brief a team at the start of a shift, communicate assertively and make a case upwards in writing.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Leadership and management are not the same job — and a ward needs both",
          paragraphs: [
            "<strong>Management</strong> is about getting the work done through others within the structure that exists: planning the shift, organising people and supplies, directing, controlling quality, accounting for the budget. Its authority comes from the <strong>position</strong>. <strong>Leadership</strong> is about influence and direction: setting a vision of what good care looks like here, inspiring people to want it, modelling it, and changing the structure when the structure is the problem. Its authority comes from <strong>trust</strong>, and it can be exercised by a staff nurse with no title at all. A ward manager who only manages keeps the roster full and the store stocked while standards quietly drift; a leader who cannot manage inspires a team that runs out of gloves. The examination question \"what distinguishes leadership from management?\" is answered by <strong>influence and vision versus position and control of resources</strong>.",
          ],
        },
        {
          type: "table",
          heading: "The functions of management, with ward examples",
          columns: ["Function", "What it means", "On a Ghanaian ward"],
          rows: [
            ["<strong>Planning</strong>", "Deciding what is to be achieved and how — objectives, priorities, resources, timelines; the first function because the others depend on it.", "Setting the ward's objective to raise hand-hygiene compliance from 55 to 80 per cent within six months and deciding the steps."],
            ["<strong>Organising</strong>", "Arranging people, tasks, authority and resources so the plan can happen — structure, allocation, coordination.", "<strong>Allocating staff to shifts and assigning specific patients to each nurse</strong>; deciding who holds the drug keys; arranging the store."],
            ["<strong>Staffing</strong>", "Having the right number and mix of people, recruited, inducted, developed and retained.", "Requesting an establishment review with dependency data; inducting the new staff nurse; planning study leave."],
            ["<strong>Directing</strong> (leading)", "Guiding and motivating people to do the work — communication, supervision, delegation, decision-making.", "The morning briefing; supportive supervision of the assistants; the feedback conversation about late documentation."],
            ["<strong>Controlling</strong>", "Measuring performance against the standard and correcting the gap — audit, monitoring, evaluation.", "Monthly audit of drug-chart completion; reviewing incident reports; checking the stock card against the shelf."],
            ["<strong>Budgeting and reporting</strong>", "Planning and accounting for money and resources, and reporting upward.", "A written budget request for a second pulse oximeter with the incidents that justify it; the monthly ward report."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PFC-0642.svg",
          alt: "A goal that cannot be evaluated — patient will be comfortable — compared with one that can — patient will report pain of three or less out of ten within one hour of analgesia — with the SMART criteria: specific, measurable, achievable, relevant, time-bound.",
          caption: "Planning produces objectives that can be checked. The same SMART test applies to a patient's goal and a ward's annual objective: what will change, in whom, measured how, by when.",
        },
        {
          type: "text",
          heading: "Principles that keep an organisation workable",
          paragraphs: [
            "<strong>Span of control</strong> is the number of people one supervisor directs. Beyond a workable number — which is smaller when the work is complex and the staff inexperienced — supervision becomes nominal: the supervisor cannot give each person adequate attention, errors go unseen and new staff are left to learn by accident. A ward with one sister supervising thirty staff across three shifts has, in practice, no supervision at nights. <strong>Unity of command</strong> means each person reports to <strong>one</strong> immediate superior; a nurse who receives conflicting instructions from two senior officers cannot obey both, wastes time reconciling them and is blamed whichever she follows — the principle tells her to refer the conflict upward for the two to resolve, not to choose. The <strong>chain of command</strong> is the line of authority from the bedside to the director: routine administrative concerns go up it one step at a time, so that each level can act within its authority; a deteriorating patient, as the previous module made clear, is escalated to whoever can act now. <strong>Delegation of authority</strong> means that when a task is handed down, the authority to do it is handed down with it — a nurse in charge of a shift without the authority to call in staff or move a patient is responsible without power.",
          ],
        },
        {
          type: "table",
          heading: "Leadership styles — and when each one fits",
          columns: ["Style", "How it works", "Fits", "Fails"],
          rows: [
            ["<strong>Autocratic / directive</strong>", "The leader decides and instructs; communication is downward; little consultation.", "<strong>Emergencies</strong> — a cardiac arrest, a fire, a major incident — where one person must direct, instructions must be unambiguous and there is no time for discussion; very inexperienced teams needing structure.", "Everyday ward life: it suppresses initiative, hides problems, breeds resentment and drives experienced staff away."],
            ["<strong>Democratic / participative</strong>", "The leader consults, the team contributes to decisions, the leader decides and takes responsibility.", "Most ward decisions — rosters, new procedures, quality improvement — where commitment matters and staff know things the leader does not.", "Genuine crises; teams that use consultation to avoid decisions."],
            ["<strong>Laissez-faire</strong>", "The leader delegates almost everything and intervenes rarely.", "Experienced, self-directed professionals who need freedom more than direction.", "A busy ward with junior staff: <strong>standards drift because nobody sets direction or checks the work</strong>; conflicts fester; the loudest person leads by default."],
            ["<strong>Transactional</strong>", "Clear expectations, rewards for meeting them and correction for not; management by exception.", "Routine, measurable work; keeping a system running to standard.", "Innovation and commitment beyond the job description."],
            ["<strong>Transformational</strong>", "A compelling vision, individual attention to each person's growth, intellectual challenge, the leader as a model of the values.", "Changing a culture — raising standards, building a safety culture, a ward that has lost its pride.", "When the leader's vision is not matched by the resources to achieve it; charisma without management."],
            ["<strong>Servant leadership</strong>", "The leader's job is to remove obstacles and meet the team's needs so they can serve the patient.", "Building trust and retention; teams exhausted by top-down pressure.", "When hard decisions are avoided to keep people comfortable."],
            ["<strong>Situational</strong>", "The leader adjusts between directing, coaching, supporting and delegating according to the competence and commitment of the person for the task.", "Everywhere — a new student needs directing; an experienced nurse on a new machine needs coaching; a senior colleague needs delegating to.", "Leaders who have only one style."],
          ],
        },
        {
          type: "text",
          heading: "Motivation — why salary alone does not keep nurses",
          paragraphs: [
            "Herzberg's distinction is the one to remember. <strong>Hygiene factors</strong> — salary, working conditions, security, policies — cause dissatisfaction when they are absent but do not create commitment when they are present; a nurse paid regularly will still leave a district posting that has <strong>no accommodation, no supervision, no equipment, an unsafe workload and no career prospects</strong>. <strong>Motivators</strong> — achievement, recognition, responsibility, growth, meaningful work — are what produce discretionary effort. In a small team with no budget for rewards, morale is sustained by <strong>being respected, developed and told how the work affects the patients</strong>: specific public recognition, a chance to lead something, study leave fairly shared, a manager who shields the team from unreasonable demands and tells the truth about why things are as they are.",
            "Maslow's hierarchy applies to staff as it does to patients: a nurse who is hungry, unsafe on the night walk home or in salary arrears cannot be motivated by esteem. Fix the hygiene factors you can, be honest about the ones you cannot, and then lead.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MEN-3185.svg",
          alt: "Table of the stages of behaviour change — pre-contemplation, contemplation, preparation, action, maintenance and relapse — with what the person typically says and the matching response at each stage.",
          caption: "People — patients and staff — change in stages, not on instruction. Match the response to the stage: raise the issue, explore the ambivalence, agree a first step, support the action, plan for relapse.",
        },
        {
          type: "text",
          heading: "Leading change",
          paragraphs: [
            "Staff resist a new documentation system introduced on the ward. The most likely reason is <strong>rational</strong>: they were <strong>not involved in the decision and do not see what problem it solves</strong>; it was imposed, its benefit is unclear, it adds work and nobody asked them. Lewin's three stages name the remedy. <strong>Unfreeze</strong>: create a shared understanding that the current way is a problem — show the audit result, the incident, the claim rejected for a missing diagnosis — and involve the people who will do the work in designing the change. <strong>Change</strong>: pilot it small, train, support, listen, adjust, and have respected opinion leaders go first. <strong>Refreeze</strong>: make it the policy, build it into orientation and audit, and celebrate what improved. A memo telling staff to try harder is not a change; a change alters something about the system.",
          ],
        },
        {
          type: "text",
          heading: "Conflict, meetings and managing upwards",
          paragraphs: [
            "Two nurses in <strong>open conflict</strong> that is affecting the team are not ignored, and not told to \"sort it out\". Unresolved conflict spreads and reaches patients through poor handover and withheld information. The manager <strong>meets each privately, then both together, identifies the real issue and agrees a way forward</strong>, documenting what was agreed. Conflict is managed by collaborating (both needs met — the best outcome when time allows), compromising (each gives something), accommodating (when the relationship matters more than the issue), avoiding (only when the issue is trivial or tempers need to cool) or competing (when a safety rule is not negotiable). Choose deliberately.",
            "A <strong>productive meeting</strong> has an <strong>agenda circulated beforehand</strong>, starts and ends on time, and ends with <strong>decisions recorded with named actions and dates</strong>; the minutes are circulated and the actions are checked at the next meeting. A <strong>team briefing</strong> at the start of a shift — who is here, who is sick, what is expected today, which patients worry us, who is on break when — is the single practice that most improves coordination on a busy ward. <strong>Managing upwards</strong> means giving the people above you what they need to act: a ward manager whose verbal requests for an additional nurse have been ignored <strong>submits a written case with workload data, incidents and the specific risk</strong>, because verbal requests compete with everything else a manager hears and leave no record. <strong>Assertive communication</strong> — stating the problem, the effect and the request calmly and specifically — is what makes both the escalation call and the budget request work; passive communication is ignored and aggressive communication is resisted.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "What examiners ask about leadership and management",
          body: "Leadership is influence and vision; management is position and control of resources. Allocating staff to shifts and assigning patients is the function of organising. A wide span of control weakens supervision because the supervisor cannot give each person adequate attention. Conflicting instructions from two superiors breach unity of command. An autocratic style is appropriate in a cardiac arrest or other emergency; laissez-faire on a busy ward with junior staff lets standards drift. Salary is a hygiene factor — housing, supervision, equipment, safety and career prospects also drive retention. Staff resist change when they were not involved and do not see the problem it solves. Conflict is handled by meeting each privately, then together. A productive meeting has a circulated agenda and recorded decisions with named actions. When verbal requests are ignored, submit a written case with data.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "The style question — how to choose",
          body: "Ask what the situation needs: speed and clarity (emergency) → directive; commitment and knowledge spread across the team (most decisions) → participative; experienced self-directed staff → delegate; a culture to change → transformational; a person new to a task → coach. The wrong answer in an examination is usually the style that ignores the situation — autocratic for a routine roster, laissez-faire for a ward of students.",
        },
      ],
      keyPoints: [
        "Management gets work done through others within the structure (planning, organising, staffing, directing, controlling, budgeting); leadership influences people toward a vision and can be exercised without a title — a ward needs both.",
        "Span of control limits how many people one person can genuinely supervise; unity of command means one boss per person and conflicting instructions are referred upward; the chain of command handles routine concerns step by step while deterioration is escalated to whoever can act now.",
        "Autocratic leadership fits emergencies, democratic fits most ward decisions, laissez-faire fits only experienced self-directed teams and lets standards drift on a busy ward, transformational changes cultures, servant leadership removes obstacles, and situational leadership matches the style to the person and the task.",
        "Salary and conditions are hygiene factors that prevent dissatisfaction; recognition, growth, responsibility and meaningful work motivate — in a team with no budget, respect, development and feedback about impact sustain morale.",
        "Resistance to change is usually rational — people were not involved and do not see the problem; lead change by unfreezing with evidence and involvement, piloting small with support, and refreezing into policy, orientation and audit.",
        "Conflict between staff is met privately with each, then together, to find the real issue and agree a way forward; the approach (collaborate, compromise, accommodate, avoid, compete) is chosen deliberately.",
        "Productive meetings have circulated agendas and recorded actions; a start-of-shift briefing improves coordination most; requests upward are written with workload data, incidents and the specific risk; assertive communication states the problem, the effect and the request.",
      ],
      quiz: {
        questionIds: ["NG-MOD-LEAD-006"],
        categories: ["leadership-delegation"],
        keywords: ["autocratic","laissez","directive","management versus leadership","distinguishes leadership from management","functions of management","function of organising","organising","planning cycle","span of control","unity of command","conflicting instructions","chain of command","managing change","resist a new","managing conflict","open conflict","conflict","team briefing","motivat","morale","managing upwards","ignored","written request","effective meetings","meeting","assertive","ward manager","nurse in charge","in charge","manager","ward sister","matron","staff resist","new documentation system","two senior officers","most powerful","power outage","time management","theatre team roles","working with traditional leaders","community participation in planning"]
      },
    },
    {
      slug: "the-ghana-health-system-planning-and-health-financing",
      title: "The Ghana health system, planning and health financing",
      minutes: 18,
      objectives: [
        "Describe the structure of Ghana's health system — the Ministry of Health, the Ghana Health Service and the other agencies, the levels of care from CHPS to teaching hospital, and who manages and supervises each.",
        "Explain the district as the planning unit, the planning cycle beginning with situation analysis, SMART objectives, recurrent and capital budgets, and how a ward manager makes a case within resource constraints.",
        "Describe where a Ghanaian facility's money comes from, how the National Health Insurance Scheme pays providers and why claims are rejected, and the ward's influence on claims, waste and length of stay.",
        "Use routine health information — ward registers, DHIS2, coverage indicators and service evaluation — to plan and to judge whether a service is achieving its purpose.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The Ministry sets policy; the Service delivers care",
          paragraphs: [
            "The <strong>Ministry of Health</strong> is the policy and financing arm of government for health: it sets national health policy, mobilises and allocates resources, regulates through its agencies and monitors the sector. The <strong>Ghana Health Service</strong>, created by the Ghana Health Service and Teaching Hospitals Act, 1996 (Act 525), is the largest implementing agency: it <strong>delivers public health and clinical services</strong> through regional and district directorates, hospitals, health centres and CHPS zones. The teaching hospitals (Korle Bu, Komfo Anokye, Tamale, Cape Coast, Ho and the newer ones) have their own boards under the same Act and sit outside the regional structure. Alongside them are the <strong>Christian Health Association of Ghana</strong> facilities, which deliver a large share of rural care in partnership with government, quasi-government and private facilities, the regulators (the Nursing and Midwifery Council and the other councils under Act 857, the Health Facilities Regulatory Agency under Act 829, the Food and Drugs Authority under Act 851) and the <strong>National Health Insurance Authority</strong> under Act 852, which purchases care on behalf of the insured.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MAN-0838.svg",
          alt: "The Ghana Health Service levels of care and who manages each — teaching hospitals with their own boards, regional hospitals under the Regional Health Directorate, district hospitals under the District Health Management Team led by the District Director of Health Services, health centres at sub-district level supervising CHPS zones with a community health officer and volunteers — referral up, supervision and supplies down.",
          caption: "Referral goes up; supervision and supplies come down; the district is where planning actually happens. A typical district of a hundred thousand people has one hospital, about five health centres and ten to fifteen CHPS zones.",
        },
        {
          type: "table",
          heading: "Levels of care — what each does and who runs it",
          columns: ["Level", "Services", "Managed by"],
          rows: [
            ["<strong>CHPS zone</strong> (community)", "The lowest level and closest to the household: a <strong>community health officer</strong> living in the zone with trained <strong>community health volunteers</strong> — home visits, immunisation, growth monitoring, antenatal and postnatal follow-up, family planning, treatment of common conditions by protocol, health education, community-based surveillance, referral to the health centre. Born at Navrongo; national policy since 1999.", "Sub-district health team; the community health management committee gives the community a voice."],
            ["<strong>Health centre / polyclinic</strong> (sub-district)", "Outpatient care, maternity (normal delivery), minor procedures, laboratory basics, outreach to the CHPS zones, supervision of CHPS.", "Sub-district health team, led by the physician assistant or senior nurse/midwife in charge."],
            ["<strong>District hospital</strong>", "First referral level: inpatient care, theatre, caesarean section, blood transfusion, laboratory and imaging, specialist outreach; the hub of the district.", "Medical superintendent and hospital management team; the whole district is run by the <strong>District Health Management Team</strong>, led by the <strong>District Director of Health Services</strong>, which plans, budgets, supervises and reports for every facility in the district."],
            ["<strong>Regional hospital</strong>", "Secondary referral for the region's districts: specialists, intensive care, more complex surgery, training.", "Regional Health Directorate, led by the Regional Director, which coordinates and supervises the districts (sixteen regions)."],
            ["<strong>Teaching hospital</strong>", "Tertiary and specialist care, training, research.", "Own board under Act 525; not under a region."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PUB-0627.svg",
          alt: "A pyramid of the Ghana Health Service levels — teaching hospitals at the apex, regional hospitals, district hospitals as first referral with theatre and blood, health centres and clinics at sub-district level, and the widest base of CHPS zones where a community health officer lives in the community.",
          caption: "The pyramid is widest at the bottom because that is where most care should happen. Referral runs upward when a case exceeds the capacity of a level — and back down with a written reply so that follow-up happens near home.",
        },
        {
          type: "text",
          heading: "Decentralisation and the district as the planning unit",
          paragraphs: [
            "Ghana's health system is <strong>decentralised</strong>: policy is national, but planning, budgeting and management happen at the <strong>district</strong>, where the DHMT knows the population, the disease pattern, the facilities and the gaps. The District Assembly — the local government — holds the political and development mandate for the same population, so health works <strong>intersectorally</strong> with the Assembly, education, water and sanitation, agriculture and the traditional authorities: a borehole that keeps breaking is a health problem whose solution lies with the Assembly and the water agency, and <strong>advocacy</strong> to them is a nursing action. <strong>Community entry</strong> — meeting the chief, elders, assembly member and opinion leaders before any activity begins — is the first step of any community programme, because a service the community did not agree to is a service the community will not use.",
          ],
        },
        {
          type: "list",
          heading: "The planning cycle",
          style: "steps",
          items: [
            "<strong>Situation analysis first</strong>: what do the data say about the population, disease burden, coverage (immunisation, skilled delivery, antenatal attendance), service performance, staff, supplies and money, and which problems matter most to the community? A district health team preparing its annual plan <strong>assesses the current health situation and identifies the priority problems before anything else</strong>.",
            "<strong>Prioritise</strong> the problems by magnitude, severity, feasibility and community concern (lesson 1.2).",
            "<strong>Set objectives</strong> that are <strong>SMART</strong> — \"to raise hand-hygiene compliance from 55 to 80 per cent within six months\" names the baseline, the target and the deadline; \"to improve hand hygiene\" names nothing that can be checked.",
            "<strong>Choose strategies and activities</strong>, assign responsibility and dates, and <strong>cost them</strong> — a budget is a plan expressed in money.",
            "<strong>Implement</strong> with supervision, and <strong>monitor</strong> with indicators collected routinely (DHIS2) rather than with a survey at the end.",
            "<strong>Evaluate</strong> against the objectives, feed the result into the next situation analysis, and go round again — the planning cycle is the nursing process applied to a population.",
          ],
        },
        {
          type: "text",
          heading: "Budgets and resource constraints",
          paragraphs: [
            "A budget separates <strong>recurrent expenditure</strong> — salaries, drugs, consumables, utilities, fuel, maintenance, the costs that recur every year — from <strong>capital expenditure</strong> — buildings, vehicles, equipment, the one-off purchases that last for years. A ward manager must know the difference because they are <strong>funded, requested and approved through different lines</strong>: an oxygen concentrator is a capital request justified by need and lifetime cost, while the gloves it is used with are recurrent and are requisitioned against consumption. When the budget will not cover everything requested, the manager <strong>prioritises according to patient safety and the greatest clinical need</strong>, explicitly and in writing, rather than cutting everything by the same percentage or buying what was requested loudest. A persuasive budget request states the problem in numbers (incidents, delays, patients affected), the option proposed, its cost and the cost of doing nothing. Of every shortage, ask three questions: is there no money, has the money not arrived, or was it never requested in the plan?",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ADM-1438.svg",
          alt: "Where a Ghanaian facility's money comes from — government salaries paid centrally, NHIS claims reimbursement as the largest but slowest source of operating cash, internally generated funds from uninsured patients, and donor and programme funds tied to one disease — with the claims cycle and what the ward sister controls: waste, stock losses, length of stay and claim quality.",
          caption: "Four streams with four masters, only one of which arrives predictably. The claims cycle is why the store is empty: a form with a missing diagnosis, an unsigned page or a wrong tariff is rejected, and the facility treated that patient for nothing.",
        },
        {
          type: "table",
          heading: "Health financing — where the money comes from and what the ward controls",
          columns: ["Source", "Character", "What the nurse influences"],
          rows: [
            ["<strong>Government budget</strong>", "Pays the salaries of established staff centrally; reliable but outside the facility's control; some capital projects.", "Little — except by making the case for establishment posts with workload data."],
            ["<strong>NHIS reimbursement</strong>", "The <strong>largest source of operating cash</strong> for most public hospitals and the slowest to arrive. Ghana pays providers a <strong>bundled tariff per diagnosis-related group (G-DRG)</strong> with medicines claimed separately against the NHIS medicines list; a capitation pilot for primary care was tried in Ashanti. Claims are vetted against the recorded diagnosis, tariff and medicines; <strong>claims submitted after the stipulated period are rejected outright</strong>, and the commonest cause of a high rejection rate is <strong>incomplete or inaccurate documentation on the claim form</strong>.", "Everything about documentation: a legible diagnosis, signed entries, the correct folder number and NHIS number, the medicines recorded as given — clinical documentation is a financial act. Because the tariff is fixed per episode, <strong>inefficiency — a long stay, repeated investigations, waste — costs the facility, not the scheme</strong>."],
            ["<strong>Internally generated funds</strong>", "Cash paid by uninsured patients at the point of care; immediate and flexible, but the money the poorest cannot pay, and the reason cost is a barrier to care.", "Charging an insured patient for an item the scheme covers is <strong>improper and is reported to management</strong>; exemptions (under-18s, over-70s, pregnant women, indigents, SSNIT pensioners) are explained, not assumed."],
            ["<strong>Donor and programme funds</strong>", "Vaccines, antiretrovirals, tuberculosis drugs, bed nets, project money — free at the point of use, tied to one disease, time-limited.", "Accurate programme reporting keeps the supply coming; stock-outs of a donated commodity are usually a reporting or forecasting failure."],
          ],
        },
        {
          type: "text",
          heading: "Health information — the numbers that run the system",
          paragraphs: [
            "Every ward register, consulting-room register, delivery book and immunisation tally feeds the <strong>District Health Information Management System (DHIS2)</strong>. Those figures <strong>flow upward and determine planning, staffing and supply allocation</strong>: the vaccines a district receives next quarter are forecast from this quarter's tallies; the drugs a health centre is allocated reflect the attendances it reported; the maternal mortality ratio that triggers an audit is built from delivery registers. An incomplete register is therefore not an administrative lapse — it is an under-supplied clinic six months later. <strong>Data quality</strong> is checked by comparing registers with tally sheets and DHIS2 entries, by looking for sudden jumps (a rise in reported malaria after new test kits arrive is better detection, not an outbreak) and by remembering the <strong>limitations of facility data</strong>: they count the people who came, not the people who needed to come.",
            "<strong>Evaluating a service</strong> means sorting measures into inputs (supplies, staff), activities (clinics held), outputs (patients seen) and <strong>outcomes</strong>. The best evidence that a new outreach clinic is achieving its purpose is not that it is well supplied or busy but <strong>the proportion of eligible people in the catchment now receiving care</strong> — a coverage indicator with the catchment population as its denominator. The denominator decides what any number means, which is the subject of lesson 7.2.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-EPH-2042.svg",
          alt: "Numbers that describe a community — incidence as new cases in a period, prevalence as all existing cases at one moment, case fatality as deaths among those with the disease, and the attack rate in an outbreak worked as thirty ill of one hundred and twenty exposed equals twenty-five per cent.",
          caption: "Three rates, three questions: incidence asks whether the problem is still spreading, prevalence asks how much care the service must provide, case fatality asks how deadly it is. The denominator decides what the number means.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "What examiners ask about the system, planning and money",
          body: "The Ministry of Health sets policy and finances it; the Ghana Health Service delivers care. The CHPS zone, staffed by a community health officer living in the community, is the lowest level. The District Director of Health Services leads the District Health Management Team. Planning starts with situation analysis. A correctly written objective names baseline, target and deadline. Recurrent and capital expenditure are funded and requested differently. Within resource constraints, prioritise by patient safety and clinical need. NHIS reimbursement is the largest source of operating cash; late claims are rejected outright; most rejections are due to incomplete or inaccurate claim documentation; under a fixed tariff, inefficiency costs the facility. Charging an insured patient for a covered item is improper and reported. Ward registers feed DHIS2 and determine planning, staffing and supplies. The best measure that an outreach clinic is achieving its purpose is the proportion of eligible people in the catchment receiving care.",
        },
      ],
      keyPoints: [
        "The Ministry of Health sets policy, finances and regulates; the Ghana Health Service (Act 525) delivers care through regions, districts, hospitals, health centres and CHPS; teaching hospitals have their own boards; CHAG, private facilities, the regulators and the NHIA complete the system.",
        "Levels of care run from the CHPS zone (community health officer and volunteers, the lowest level) through health centre, district hospital (first referral, DHMT led by the District Director), regional hospital (Regional Health Directorate) to teaching hospital; referral goes up with a note and a call, supervision and supplies come down.",
        "The district is the planning unit of a decentralised system and works intersectorally with the District Assembly; community entry precedes every community programme.",
        "The planning cycle begins with situation analysis, prioritises by magnitude, severity, feasibility and community concern, sets SMART objectives with baseline, target and deadline, costs the activities, monitors with routine indicators and evaluates into the next cycle.",
        "Recurrent expenditure recurs (salaries, drugs, consumables); capital expenditure is one-off (buildings, equipment); within constraints, prioritise by patient safety and clinical need, in writing, with a costed case.",
        "A facility's money comes from government salaries, NHIS reimbursement (largest, slowest, paid per G-DRG with medicines separate, rejected if late or incomplete), internally generated funds and donor programmes; documentation quality, waste, stock losses and length of stay are what the ward controls.",
        "Ward registers feed DHIS2 and drive planning, staffing and supplies; data are checked for quality and interpreted with their limitations; a service is judged by outcomes — coverage of the eligible population — not by inputs or activity.",
      ],
      quiz: {
        questionIds: ["NG-MOD-LEAD-007"],
        categories: ["leadership-delegation"],
        keywords: ["ministry of health","ghana health service","levels of the health system","health system structure","lowest level","chps zone","the chps zone","purpose of chps","chps and community entry","sub district","district health management team","health system","planning cycle","annual plan","budget","budgeting","recurrent and capital","capital expenditure","resource constraints","will not cover","nhis","national health insurance","claims","claim","claims rejection","stipulated period","tariff","diagnosis based","bundled","premium","exempt","insured patient","charging insured","sources of facility funding","operating cash","evaluating a service","achieving its purpose","outreach clinic","outreach planning","dhis","ward registers","health information","data quality","surveillance data","using data at district level","use of routine health data","facility versus community data","limitations of facility data","primary health care","alma ata","community health officer","community health volunteer","who leads","intersectoral","district assembly","assembly","leap","referral practice","referral pathway","referral within the health system","cost as a barrier","health insurance"]
      },
    },
  ],
};
