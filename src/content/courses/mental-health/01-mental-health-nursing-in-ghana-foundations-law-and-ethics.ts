import type { CourseModule } from "../types";

export const mentalHealthNursingInGhanaFoundationsLawAndEthics: CourseModule = {
  slug: "mental-health-nursing-in-ghana-foundations-law-and-ethics",
  title: "Mental health nursing in Ghana: foundations, law and ethics",
  summary: "What mental health and mental illness are, how common they are in Ghana and why so few people are treated; the biopsychosocial and stress–vulnerability models; the spiritual explanations, prayer camps and chaining that shape help-seeking; stigma and the language that feeds it; the services, policy and workforce — then the Mental Health Act 846: voluntary and involuntary admission and the clock, the certificate of urgency, the tribunal, rights, consent and capacity, confidentiality and its four doors, seclusion and restraint, and the ethical principles that decide the hard cases.",
  lessons: [
    {
      slug: "mental-health-and-mental-illness-in-ghana",
      title: "Mental health and mental illness in Ghana",
      minutes: 18,
      objectives: [
        "Define mental health and mental illness, describe the burden of mental health conditions in Ghana and explain the treatment gap and its causes.",
        "Explain the biopsychosocial and stress–vulnerability models of mental illness and name the biological, psychological and social factors that raise or lower risk in a Ghanaian context.",
        "Describe the explanatory models Ghanaians bring to mental illness — spiritual, social and biomedical — and respond to prayer camps, traditional healers and the practice of chaining in a way that keeps the family's trust while protecting the patient.",
        "Recognise public, self and structural stigma including stigma among health workers, use person-first language, and describe Ghana's mental health services, policy and the roles of the mental health nurse within them.",
      ],
      blocks: [
        {
          type: "text",
          heading: "There is no health without mental health",
          paragraphs: [
            "The World Health Organization defines <strong>mental health</strong> as a state of well-being in which a person realises her own abilities, can cope with the normal stresses of life, can work productively and is able to contribute to her community. It is not merely the absence of illness: a market woman who has lost a child and is grieving is not mentally ill, and a man with well-controlled schizophrenia who trades, prays and raises his children is not without mental health. Mental health runs on a continuum from flourishing through ordinary distress to disorder, and most people move along it during a lifetime.",
            "A <strong>mental illness</strong> (mental disorder) is a clinically significant disturbance of thinking, emotion, perception or behaviour that causes distress or impairs the person's ability to function, and that is not simply an expected response to a life event or a culturally accepted practice. The common disorders — depression, anxiety, the psychoses, bipolar disorder, substance use disorders, dementia — are recognisable, diagnosable and, with few exceptions, treatable. Epilepsy is a neurological condition, but in Ghana it has always been managed within the mental health programme by community psychiatric nurses, carries the same stigma and appears in the same examinations, so it is taught in this course.",
            "The burden is large and mostly invisible. About <strong>one Ghanaian in five</strong> will experience a mental health condition in a lifetime; WHO estimates that about <strong>2.3 million Ghanaians are living with a mental health condition</strong> at any time, several hundred thousand of them severe. Yet only around <strong>2 per cent receive treatment</strong> from a health facility — a <strong>treatment gap of about 98 per cent</strong>. The country had 39 psychiatrists in 2022 and about 80 by 2025 for a population of over 30 million; the rest of the work is done by registered mental nurses (RMNs), community psychiatric nurses (CPNs), community mental health officers, clinical psychologists, medical assistants and general nurses who meet mental illness on every ward whether or not they were trained for it.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-HPR-0409.svg",
          alt: "Concentric layers around a person showing the determinants of health: at the centre age, sex and genes, which are fixed; around that lifestyle — diet, exercise, alcohol, smoking and sleep; then social and community networks including family, neighbours, church, social support and stigma; then living and working conditions — water, sanitation, housing, food, education, work, health services and transport; and outermost the general conditions of economy, culture, environment, policy and law. Health care is only one layer and not the widest one.",
          caption: "Mental health is made in the outer layers — poverty, unemployment, violence, migration, stigma, law — long before a person reaches a clinic. Telling someone to 'stop worrying' while ignoring the layers around her is why advice so often fails.",
        },
        {
          type: "text",
          heading: "Why people become ill — the biopsychosocial and stress–vulnerability models",
          paragraphs: [
            "No single cause explains mental illness. The <strong>biopsychosocial model</strong> holds that biological, psychological and social factors interact in every case and must all be assessed and treated. <strong>Biological</strong> factors include inheritance (a first-degree relative with schizophrenia raises lifetime risk from about 1 per cent to about 10 per cent), disturbances of brain chemistry — dopamine in psychosis, serotonin and noradrenaline in depression and anxiety, GABA in anxiety and alcohol withdrawal — and physical insults to the brain: birth asphyxia, cerebral malaria, meningitis, HIV, head injury, epilepsy, thyroid disease and the substances people take, especially alcohol, cannabis and tramadol. <strong>Psychological</strong> factors include early loss, childhood abuse or neglect, a harsh or chaotic upbringing, learned ways of coping and the meaning a person gives to events. <strong>Social</strong> factors include poverty, unemployment, debt, migration to the city, overcrowding, violence, bereavement, marital conflict, discrimination and the isolation that follows stigma.",
            "The <strong>stress–vulnerability model</strong> explains why one person breaks down and another does not. Each of us carries a level of vulnerability set by genes and early life; stress — illness, loss, exams, childbirth, substance use, sleeplessness — is added on top. Illness appears when the combination crosses a threshold. The model is useful at the bedside because it tells you where to work: you cannot change a person's genes, but you can lower stress (money, sleep, conflict, substances), raise coping (problem-solving, support, faith community) and, with medication, raise the threshold itself. It also explains relapse: a patient who is well on treatment relapses when a new stress arrives or when the medicine that was raising his threshold is stopped.",
            "<strong>Protective factors</strong> matter as much as risks and are often stronger in Ghana than in the textbooks written elsewhere: an extended family that absorbs a crisis, a church or mosque community, meaningful work, a stable marriage, religious faith as a source of hope, and the community's expectation that the ill person belongs. Good assessment records both columns.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0093.svg",
          alt: "A neurone drawn left to right: dendrites receive, the cell body contains the nucleus, the axon is wrapped in a myelin sheath with nodes of Ranvier that speed conduction, and the terminals release neurotransmitter. An arrow shows the impulse running dendrite to cell body to axon to terminal.",
          caption: "Every psychotropic drug acts at the synapse: antipsychotics block dopamine receptors, antidepressants raise serotonin and noradrenaline in the gap, benzodiazepines strengthen GABA. The side effects are the same actions arriving where they were not wanted.",
        },
        {
          type: "table",
          heading: "Three explanatory models that meet at the bedside in Ghana",
          columns: ["Model", "What causes mental illness", "Where help is sought first", "What the nurse does"],
          rows: [
            ["<strong>Spiritual or supernatural</strong>", "A curse, witchcraft, ancestral punishment, a broken taboo, 'spiritual attack', possession, 'juju' sent by a rival", "Prayer camps, pastors and prophets, mallams, shrines, traditional healers; often for months or years before a hospital", "Never ridicule the belief; ask what the family thinks caused it and what has been tried; explain that the illness is in the brain and treatable without demanding that they abandon prayer; agree that spiritual and medical care can run together provided nothing harmful is done."],
            ["<strong>Social or moral</strong>", "Bad character, weakness, drug use, laziness, a family that 'has it in the blood', punishment for wrongdoing", "The family hides the person at home, sends him to the village, or expels him; the chronically ill end up on the streets", "Counter blame with facts; involve the family in psychoeducation; protect the person's rights to work, marry and belong; identify the carer who is exhausted."],
            ["<strong>Biomedical</strong>", "Inherited vulnerability plus brain chemistry, physical illness, substances and stress", "Health centre, district hospital mental health unit, psychiatric hospital, CPN", "Assess, treat, monitor and follow up — and remember that a purely biomedical explanation that ignores the family's meaning is usually abandoned at the first relapse."],
          ],
        },
        {
          type: "text",
          heading: "Prayer camps, healers and chains — the reality the nurse must work with",
          paragraphs: [
            "Most Ghanaians with a severe mental illness are first taken not to a hospital but to a <strong>prayer camp</strong>, a healer or a herbalist, because the illness is understood as spiritual, because the camp is near and the hospital is far, and because the family has seen prayer help before. Some camps provide food, rest and a community that accepts the person. Others hold people in <strong>chains or shackles</strong>, deny them food and water as a form of fasting, beat them to drive out spirits, and keep them for years. Chaining also happens at home, by families who fear the person will wander, be injured or shame them, and who have nowhere else to turn.",
            "The Mental Health Act 846 prohibits inhuman and degrading treatment and brings prayer camps and traditional healers under the oversight of the Mental Health Authority. The nurse's response has three parts. First, <strong>understand before you judge</strong>: a family chaining a relative is usually frightened and unsupported, not cruel, and the reaction that unchains the patient is one that offers them something better — assessment, medication, follow-up and a plan for when he wanders. Second, <strong>act and report</strong>: chaining, beating and starvation are harmful practices that must be reported to the district mental health coordinator, the Mental Health Authority or the police when a life is at risk. Third, <strong>collaborate</strong>: outreach by CPNs to camps, so that people are assessed and treated where they are, has released many people from chains and changed how camp leaders work. A family who wishes to continue spiritual care alongside hospital treatment should be supported to do so; it is the harm, not the prayer, that you oppose.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-TRD-2130.svg",
          alt: "Traditional practices sorted into three columns before judging them. Harmless, leave them alone: naming ceremonies, prayer, blessing and holy water, beads and protective threads, herbal baths for a well baby — opposing these costs the trust you need for the rest. Negotiable, keep but modify: birth at home, bone setting for a simple fracture, herbal treatment of minor illness — agree the danger signs and the route to the facility. Harmful, act and report: cutting the uvula, anything applied into a baby's eye, cord dressings, infant enemas, shared blades, and chaining or beating a mentally ill person.",
          caption: "Prayer, holy water and a protective thread cost nothing and keep the family with you. Chains, beatings and starvation are in the third column: act, report and offer the alternative.",
        },
        {
          type: "text",
          heading: "Stigma — the illness behind the illness",
          paragraphs: [
            "<strong>Stigma</strong> is a mark of disgrace attached to a condition that leads to prejudice and discrimination. <strong>Public stigma</strong> is what the community believes and does: that the mentally ill are dangerous, incurable, to blame, or 'abodam' and fit only for the streets. <strong>Self-stigma</strong> (internalised stigma) is what the person comes to believe about herself — that she is worthless, will never marry or work, and should hide. <strong>Structural stigma</strong> lives in the system: the smallest budget line, the oldest buildings, the drugs that run out first, the ward in the furthest corner of the hospital, and the laws that until 2023 made a suicide attempt a crime.",
            "Stigma changes the course of illness. People present <strong>late</strong>, often after years at camps, when psychosis has become entrenched and jobs and marriages are lost. Families hide the ill person and conceal the diagnosis from employers and in-laws. The patient stops medication rather than be seen collecting it. Relatives are blamed, siblings become unmarriageable, and the exhausted carer has no one to tell. The question 'why do many Ghanaians with mental illness present only after long delay?' has one examination answer: stigma and the belief that the cause is spiritual, compounded by cost and distance.",
            "Health workers carry stigma too. <strong>Diagnostic overshadowing</strong> — attributing a physical complaint to the mental illness, so that the woman with schizophrenia and severe abdominal pain is sent back to the ward until her appendix ruptures — kills people with severe mental illness, who die on average fifteen to twenty years earlier than the general population, mostly of treatable physical disease. Language is where stigma is practised and where it can be unlearned: use <strong>person-first</strong> language ('a man with schizophrenia', 'a patient with alcohol dependence', never 'a schizophrenic', 'a mad man', 'an addict'), and challenge labels in handover and on the ward. Stigma is reduced by <strong>contact</strong> (meeting recovered people who work and lead), by <strong>education</strong> (the illness is in the brain and treatable) and by <strong>protest</strong> (refusing to accept abuse). The nurse who greets the patient from the psychiatric unit by name in the market is doing anti-stigma work.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Three questions that recur",
          body: "(1) Why do people present late? — stigma, belief in a spiritual cause, prayer camps and healers first, cost and distance. (2) What is the best response to a family who asks whether their son's schizophrenia was caused by a curse? — do not ridicule the belief; explain that schizophrenia is a treatable illness of the brain, that nobody is to blame, and that treatment and prayer can continue together. (3) Why is mental health care being integrated into general health facilities rather than concentrated in the three psychiatric hospitals? — to bring care near home, reduce stigma, treat the many who never reach Accra, Pantang or Ankaful, and manage physical and mental illness together.",
        },
        {
          type: "text",
          heading: "Services, policy and the workforce",
          paragraphs: [
            "Ghana's three <strong>psychiatric hospitals</strong> — Accra Psychiatric Hospital, Pantang Hospital in Greater Accra and Ankaful Psychiatric Hospital near Cape Coast — long carried almost the whole service and still take the most severe cases, but policy since the <strong>Mental Health Act 846 (2012)</strong> has been to <strong>decentralise and integrate</strong>: mental health units in regional and district hospitals staffed by mental health nurses, psychiatric outpatient clinics, <strong>community psychiatric nurses</strong> and community mental health officers at sub-district level who run clinics, home visits and depot injection rounds, and CHPS compounds that identify, refer and follow up. The <strong>National Mental Health Policy 2019–2030</strong> sets out this community-based, rights-based direction.",
            "Three international programmes shape practice. The WHO <strong>mhGAP</strong> (Mental Health Gap Action Programme) trains non-specialist health workers — medical assistants, general nurses, midwives — to recognise and manage priority conditions such as depression, psychosis, epilepsy and alcohol use at district level. WHO <strong>QualityRights</strong> trains staff, service users and families in human rights and recovery and assesses facilities against rights standards; Ghana has been one of its lead countries. The WHO <strong>Special Initiative for Mental Health</strong>, launched in Ghana in July 2022, aims to bring integrated, person-centred care to an additional 5.2 million Ghanaians over five years.",
            "Money remains the constraint. Mental health receives a very small share of the health budget; public psychiatric hospitals do not charge for care in principle, but medicines run out and families buy them privately, and the Mental Health Fund created by the Act still awaits a dependable source of revenue. In practice the nurse often works out which drugs are in stock before deciding what to teach a family to expect.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PUB-0627.svg",
          alt: "A pyramid of the levels of the Ghana Health Service: teaching hospitals at the top providing tertiary and specialist care, regional hospitals providing secondary referral, district hospitals as the first referral point and hub of the district, health centres and clinics at sub-district level providing outpatient care, maternity and outreach, and at the wide base the CHPS zone where a community health officer lives in the community and carries out home visits. Referral runs upward when a case exceeds the capacity of a level and back down with a written reply so that follow-up happens near home.",
          caption: "Mental health care is meant to run through every level of this pyramid — identification and follow-up at CHPS, clinics and depot rounds at the sub-district, a mental health unit in the district hospital — with the psychiatric hospitals reserved for the few who need them.",
        },
        {
          type: "list",
          heading: "What the mental health nurse does in Ghana",
          items: [
            "<strong>Assessment</strong> — history, mental state examination and risk assessment, and the physical examination that excludes a bodily cause (Lesson 2.2).",
            "<strong>The therapeutic relationship</strong> — the main instrument of care, built with communication skills that can be learned (Lesson 2.1).",
            "<strong>Medication</strong> — administering oral and depot psychotropics, monitoring side effects and blood tests, and teaching patients and families what to expect (Lesson 7.1).",
            "<strong>Psychoeducation and family work</strong> — explaining the illness, the treatment and the relapse signature to the people who will do most of the caring.",
            "<strong>Community work</strong> — home visits, clinics, defaulter tracing, outreach to prayer camps and schools, and liaison with chiefs, pastors, imams and assembly members (Lesson 7.2).",
            "<strong>Advocacy and protection</strong> — knowing the Mental Health Act well enough to use it, reporting chaining and abuse, and ensuring the patient on the medical ward is examined rather than overshadowed.",
            "<strong>Safety</strong> — assessing and managing risk of suicide, violence, self-neglect and exploitation, and managing emergencies (Lessons 3.2 and 6.2).",
            "<strong>Record keeping and self-care</strong> — accurate contemporaneous notes, and looking after your own mental health and your colleagues'.",
          ],
        },
        {
          type: "text",
          heading: "Recovery — the aim of everything else",
          paragraphs: [
            "<strong>Clinical recovery</strong> means symptoms gone and function restored. <strong>Personal recovery</strong>, the aim of modern mental health care, means living a satisfying, hopeful and contributing life even where symptoms persist — the trader who still hears an occasional voice but has her stall back and her children in school. The elements are summarised as <strong>CHIME</strong>: connectedness, hope, identity (being a person, not a diagnosis), meaning and empowerment. A recovery-oriented service asks the patient what matters to him, plans care with him rather than about him, builds on strengths, expects him to return to work and family, and treats a relapse as a setback to learn from rather than a failure. For the nurse, recovery orientation means that discharge planning starts at admission and that 'stable on medication' is the beginning of the goal, not the end of it.",
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The mental health of the health worker",
          body: "Nurses carry heavy loads, witness death and violence, and work in understaffed units; burnout, depression, anxiety and harmful drinking are common and hidden. A colleague who has become withdrawn, irritable and frequently absent since a difficult period on the ward is showing the signs you were trained to recognise in patients: approach her privately, listen without judging, name your concern and encourage her to seek help, and tell the manager if her safety or patients' safety is at risk. After a patient suicide or an assault on staff the team needs a structured debrief and support, not silence or blame. A colleague who comes to work impaired by alcohol or drugs must be stopped from practising that day and reported — that is protection of patients and of the colleague, not betrayal.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Numbers and names worth carrying",
          body: "One in five Ghanaians affected in a lifetime; about 2.3 million living with a condition; about 2 per cent treated (a 98 per cent gap); 39 psychiatrists in 2022, about 80 by 2025; three psychiatric hospitals (Accra, Pantang, Ankaful); the Mental Health Act 2012 is Act 846 and created the Mental Health Authority; the policy is the National Mental Health Policy 2019–2030; attempted suicide ceased to be a crime in March 2023; mhGAP trains non-specialists, QualityRights protects rights; people with severe mental illness die fifteen to twenty years early, mostly of physical disease.",
        },
      ],
      keyPoints: [
        "Mental health is a state of well-being, not merely the absence of illness; it runs on a continuum and about one Ghanaian in five will have a mental health condition in a lifetime.",
        "About 2.3 million Ghanaians live with a mental health condition and only about 2 per cent receive facility treatment — a 98 per cent gap caused by stigma, spiritual explanations, prayer camps and healers as the first port of call, cost, distance and a tiny specialist workforce.",
        "The biopsychosocial model says every case has biological, psychological and social causes that must all be assessed; the stress–vulnerability model explains onset and relapse and tells you where to intervene — lower stress, raise coping, raise the threshold with medication.",
        "Respect spiritual belief without endorsing harm: support prayer alongside treatment, negotiate what can be modified, and act on and report chaining, beating and starvation, which the Mental Health Act prohibits.",
        "Stigma — public, self and structural — delays presentation, breaks adherence and isolates families; health-worker stigma shows as diagnostic overshadowing, which is why people with severe mental illness die fifteen to twenty years early of treatable physical disease.",
        "Services are being decentralised from the three psychiatric hospitals into district mental health units, community psychiatric nurses and CHPS under Act 846 and the National Mental Health Policy 2019–2030, supported by mhGAP, QualityRights and the WHO Special Initiative.",
        "Recovery is the aim: a satisfying, hopeful and contributing life planned with the patient around connectedness, hope, identity, meaning and empowerment — and the nurse's own mental health is part of the work.",
      ],
      quiz: { keywords: ["stigma","prayer camp","faith heal","herbalist","spiritual","curse","witchcraft","mental illness","psychiatr","chained","chaining","integrating mental health","community based mental","community mental","mental health of health workers","health seeking","determinants of health","discriminat","long delay","psychosis"," psychotic","possessed","traditional and faith","traditional beliefs about illness","cultural beliefs and treatment","recovery oriented","rehabilitation and recovery","burnout","definition of health","mental health act","act 846","stress response","late stage","pastor","dopamine","mental health policy","psychiatric hospital","stigma in epilepsy","internalised stigma","disability and poverty","attitudes as barriers","respecting belief","inclusive language","person first","diagnostic overshadowing"] },
    },
    {
      slug: "the-mental-health-act-846-rights-ethics-and-the-law",
      title: "The Mental Health Act 846: rights, ethics and the law",
      minutes: 18,
      objectives: [
        "Describe the structure and purpose of the Mental Health Act 2012 (Act 846) and distinguish voluntary, involuntary and emergency admission, including who authorises each and the time limits that apply.",
        "Apply the presumption of capacity and the four-part capacity test, obtain valid consent, and explain when treatment may lawfully be given without consent.",
        "State the rights of a person with mental illness under the Act, apply the four lawful routes of disclosure of confidential information, and describe the conditions under which seclusion and restraint may be used.",
        "Use the four ethical principles to analyse common dilemmas in mental health nursing and identify the correct action in frequently examined legal situations.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Why there is an Act, and what it built",
          paragraphs: [
            "Mental health is the one area of nursing in which the law allows a person to be admitted and treated against her will. That power is dangerous, so it is hedged with procedure, time limits and rights of appeal; a nurse who does not know the procedure cannot protect the patient from its misuse and cannot protect herself from acting unlawfully. The <strong>Mental Health Act 2012 (Act 846)</strong> replaced the Mental Health Decree of 1972 (NRCD 30), which treated the mentally ill as people to be confined. The new Act is <strong>rights-based</strong>: it starts from the presumption that the person has the same rights as everyone else, requires the <strong>least restrictive</strong> form of care that is effective, favours treatment in the community over institutions, and regulates the places — hospitals, prayer camps and healers' compounds — where people with mental illness are kept.",
            "The Act created the <strong>Mental Health Authority</strong>, a corporate body with a governing board and Chief Executive that plans, regulates and inspects mental health services, licenses facilities and oversees traditional and faith-based practitioners who treat the mentally ill; regional <strong>Mental Health Review Tribunals</strong> (sections 24–26) that review every involuntary admission and hear appeals from patients and relatives; <strong>Visiting Committees</strong> that inspect facilities and talk to patients; and a <strong>Mental Health Fund</strong> to finance care. It defines the roles of the mental health practitioner, requires that patients be informed of their rights on admission, and makes inhuman and degrading treatment — chaining, beating, forced labour, denial of food — an offence wherever it happens.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PSY-1423.svg",
          alt: "A timeline of detention under Ghana's Mental Health Act 846. Voluntary admission under sections 39 to 41: the person asks for admission, consents to treatment and may leave; a written request to leave must be granted within 24 hours. Emergency admission under sections 48 and 49: a certificate of urgency allows up to 72 hours, during which a court order must be sought or the person released or converted to voluntary. Safe custody outside a mental health facility is limited to 48 hours. Involuntary admission under sections 42 to 44: a court order on the recommendation of a medical practitioner and a mental health practitioner, for up to one month, extendable to a prolonged order of up to twelve months reviewed at six; the head of facility reviews monthly under section 45; the Mental Health Review Tribunal reviews every involuntary admission and the patient or a relative may appeal.",
          caption: "Learn the clock: 24 hours to honour a voluntary patient's written request to leave; 48 hours in safe custody outside a facility; 72 hours on a certificate of urgency; one month on a court order; twelve months prolonged, reviewed at six; and a monthly review by the head of facility throughout.",
        },
        {
          type: "table",
          heading: "Three routes into care",
          columns: ["Route", "Who decides and on what", "How long", "What the nurse must know"],
          rows: [
            ["<strong>Voluntary (sections 39–41)</strong>", "The person herself asks for admission, or agrees to it, and consents to each treatment. A child is admitted on the consent of a parent or guardian.", "As long as she agrees. A <strong>written request to be discharged must be granted within 24 hours</strong> unless the criteria for involuntary admission are met and the procedure is started.", "A voluntary patient may refuse medication; you may not give it covertly or by force. If she becomes a danger to herself or others, the doctor is called to consider conversion to involuntary status — by procedure, not by locking the door."],
            ["<strong>Involuntary (sections 42–44)</strong>", "A <strong>court order</strong> on the application of a relative, carer, head of facility or police, supported by the recommendations of a <strong>medical practitioner and a mental health practitioner</strong> who have examined the person and found a mental disorder with risk to self or others or serious deterioration, where she lacks capacity to consent.", "Temporary treatment order up to <strong>one month</strong>; a <strong>prolonged treatment order</strong> up to <strong>twelve months</strong>, reviewed at <strong>six</strong>; the head of facility reviews every involuntary patient <strong>monthly</strong> (section 45) and must discharge when the criteria no longer hold.", "She must be told, in a language she understands, why she is detained, her right to appeal to the <strong>Mental Health Review Tribunal</strong> and her right to a representative; the tribunal reviews every involuntary admission. Telling her is part of admitting her, not an optional extra."],
            ["<strong>Emergency (sections 48–49)</strong>", "A medical practitioner or mental health practitioner issues a <strong>certificate of urgency</strong> where there is an imminent danger and no time for a court order; the police may bring a person found wandering and apparently mentally ill to a facility.", "Detention on the certificate for up to <strong>72 hours</strong>; a person held in <strong>safe custody outside a mental health facility</strong> (a police cell, a general ward) for no more than <strong>48 hours</strong>. By the end the person is released, becomes voluntary, or an application for a court order has been made.", "Assess and document the danger; treat what is necessary to prevent harm; start the paperwork at once because the 72 hours run from arrival, not from when the doctor is free."],
          ],
        },
        {
          type: "text",
          heading: "Rights under the Act",
          paragraphs: [
            "The Act lists the rights of a person with mental disorder, and the examiner expects them: the right to <strong>humane and dignified treatment</strong> and freedom from torture, cruelty, forced labour, exploitation and abuse; the right to <strong>the least restrictive</strong> care appropriate to the condition, as near home as possible; the right to <strong>information</strong> about the diagnosis, treatment and one's rights, in a language one understands; the right to <strong>consent</strong> to or refuse treatment where one has capacity, and to be involved in the care plan; the right to <strong>confidentiality</strong> and privacy; the right to <strong>communicate</strong> — to receive visitors, send and receive letters and use a telephone, subject only to clinical safety; the right to <strong>legal representation</strong> and to appeal to the tribunal; freedom from discrimination in <strong>employment, housing, education, marriage and voting</strong>; and specific protections for children, who must be kept <strong>separate from adults</strong> (section 65), for women, who are entitled to privacy and to care in pregnancy and after birth, and for older people and prisoners.",
            "A right is only real if the nurse knows it exists. The patient who is told nothing, whose letters are opened, whose visitors are turned away as 'a disturbance', who is made to wash the ward as 'therapy' while staff rest, and who is not told she can appeal has lost rights the law gave her — on the nurse's shift.",
          ],
        },
        {
          type: "text",
          heading: "Consent and capacity",
          paragraphs: [
            "Valid consent has three parts: the person has <strong>capacity</strong>, has been given the <strong>information</strong> a reasonable person would need (what, why, benefits, risks, alternatives, consequences of refusal), and decides <strong>voluntarily</strong>, free of threats or pressure from staff or family. The Act <strong>presumes capacity</strong> (section 97): a diagnosis of mental illness does not remove it. A man with schizophrenia who understands that his appendix is inflamed, that surgery will remove it, that without surgery it may rupture, and who can weigh this and tell you his decision, consents to his own operation; his brother cannot consent for him and the hospital cannot proceed because 'he is a psychiatric patient'.",
            "Capacity is <strong>decision-specific and time-specific</strong>. The four-part test asks whether the person can <strong>understand</strong> the information relevant to this decision, <strong>retain</strong> it long enough to decide, <strong>use or weigh</strong> it, and <strong>communicate</strong> a choice. A person may have capacity to choose her meals but not to manage a land sale; may lack capacity today in acute mania and regain it next week. An <strong>unwise decision is not evidence of incapacity</strong> — people are allowed to make choices you would not make. Capacity is lost when the illness itself corrupts the weighing: the man who refuses the operation because the surgeons are agents sent to implant a transmitter is not weighing, he is deluding.",
            "Where a person lacks capacity, treatment for the mental disorder proceeds under the Act's procedures, with the consent of a personal representative or next of kin where the Act requires it, and always in the person's <strong>best interests</strong> and in the least restrictive way. Treatment for a physical illness in a person lacking capacity is given in her best interests after consulting the family, documenting the assessment and the reasons. In a <strong>life-threatening emergency</strong> where consent cannot be obtained, the treatment immediately necessary to save life or prevent serious harm may be given, documented, and explained to the patient afterwards. The age of consent to medical treatment in Ghana is <strong>18</strong>; for a child a parent or guardian consents, the child's own view is sought and recorded, and a parent may not refuse treatment that is necessary to save the child's life. Two things are never consent: silence, and the agreement of a frightened patient who has been told the injection will be given anyway.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-JUS-2188.svg",
          alt: "Consent set out as three things that must all be present: capacity, information and voluntariness. Capacity is presumed in an adult and is decision-specific; the age of consent to medical treatment in Ghana is eighteen, with a parent or guardian consenting for a child and the child's assent sought. Information means the nature, purpose, benefits, risks and alternatives of the treatment and the consequences of refusal, in a language the person understands. Voluntariness means no coercion by staff or relatives. A signed form is evidence of a conversation, not a substitute for it, and consent may be withdrawn at any time.",
          caption: "Capacity, information, voluntariness. A diagnosis removes none of them automatically, and a signature obtained from a patient who did not understand or was threatened with the injection is a form, not consent.",
        },
        {
          type: "text",
          heading: "Confidentiality and its four doors",
          paragraphs: [
            "Everything a patient tells you, everything in her record and the fact of her admission itself are <strong>confidential</strong> — a right in the Patients' Charter, the Act, the nursing code and the law. In mental health the stakes are higher because disclosure costs jobs, marriages and safety. Information passes through only four doors. <strong>Consent</strong>: the patient agrees, ideally in writing, to what is told to whom. <strong>The care team</strong>: those directly involved in her care, on a need-to-know basis — which does not include the cleaner, the nurse on another ward or your own family. <strong>The law requires it</strong>: a court order, a statutory notification, a lawful request under the Act. <strong>Serious risk of harm</strong> to the patient or an identifiable other person that cannot be managed any other way — the patient who tells you he intends to kill a named neighbour, the driver with uncontrolled psychosis who is about to take passengers.",
            "When you must disclose, disclose the <strong>minimum necessary, to the person who needs it</strong>, through the proper channel (the doctor and head of facility, who may involve the police), tell the patient where it is safe to do so, and document what you told, to whom and why. Three traps catch nurses. An employer or relative telephones to ask whether so-and-so is on the ward: you <strong>neither confirm nor deny</strong> and offer to pass a message. A patient asks you to promise to keep a secret before she tells you: you cannot promise, and you say so warmly — 'I will keep what you tell me private unless someone's life is at risk, and if that happens I will tell you first.' A patient's progress discussed on WhatsApp, a photograph of the ward, a case story told at church with enough detail to identify the person: each is a breach, and each has ended careers.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-JUS-2206.svg",
          alt: "Confidentiality drawn as a locked room with four doors through which information may lawfully pass: the patient's consent; sharing within the care team on a need-to-know basis; a legal requirement such as a court order or statutory notification; and the prevention of serious harm to the patient or another person. Everything else — curious relatives, employers, the press, colleagues not involved, social media — stays outside. Disclosure through any door is limited to the minimum necessary and is recorded.",
          caption: "Four doors and no windows. The relative who telephones, the employer, the pastor and your own family are outside all four; when a life is at risk the fourth door opens — the minimum, through the right channel, documented.",
        },
        {
          type: "text",
          heading: "Seclusion and restraint (section 58)",
          paragraphs: [
            "<strong>Restraint</strong> is any restriction of a person's free movement — holding, mechanical devices, a locked room (<strong>seclusion</strong>) or medication given primarily to control behaviour (chemical restraint). Under section 58 these may be used <strong>only where there is imminent danger</strong> of harm to the patient or others, <strong>only when less restrictive measures have failed or are not possible</strong>, <strong>only on the authority of the head of the facility or the senior nurse in charge</strong>, for the <strong>shortest time necessary</strong>, with <strong>continuous observation</strong> and attention to physical needs, and with a <strong>written record</strong> of the reason, the authority, the start and end times and the observations made. Restraint may <strong>never be used as punishment, for the convenience of staff</strong>, because the ward is short, or to make a patient take medication she has lawfully refused. Patients have died in restraint from positional asphyxia, dehydration and untreated physical illness; the observing nurse is there to prevent exactly that.",
            "Chaining is restraint without any of these conditions and is unlawful everywhere — in a camp, at home and on a ward. The least restrictive principle applies before the emergency: a ward that talks early, reduces noise and crowding, gives patients something to do and treats pain and withdrawal uses far less restraint than one that waits for the fight.",
          ],
        },
        {
          type: "table",
          heading: "The four principles at work on a psychiatric ward",
          columns: ["Principle", "Meaning", "A mental health example", "Where it conflicts"],
          rows: [
            ["<strong>Autonomy</strong>", "Respect the capable person's right to decide for herself", "A voluntary patient with capacity refuses her evening dose; you record the refusal, explore the reason and inform the prescriber — you do not hide it in her porridge", "With beneficence, when the decision looks harmful; autonomy wins while capacity is intact and nobody else is endangered"],
            ["<strong>Beneficence</strong>", "Act for the patient's good", "Persuading, educating and offering a depot to a man who relapses every time he stops tablets", "With autonomy, when 'for his own good' becomes coercion"],
            ["<strong>Non-maleficence</strong>", "First do no harm", "Not restraining for convenience; monitoring lithium levels; checking for dystonia after haloperidol", "With beneficence, when a treatment has serious side effects — the balance is explained and shared"],
            ["<strong>Justice</strong>", "Fairness in access and in the use of scarce resources", "Giving the patient with schizophrenia the same examination for chest pain as any other patient; allocating the last bed by need, not by who is related to whom", "With everything, when resources run out; justice is also the argument for community care over three hospitals"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-JUS-2193.svg",
          alt: "The four principles of health care ethics — autonomy, beneficence, non-maleficence and justice — drawn as four pillars, with a note on tie-breaking: when principles conflict the nurse identifies which are in tension, asks whether the person has capacity, chooses the option that respects autonomy where capacity is present and nobody else is endangered, chooses the least harmful effective option where it is not, and documents the reasoning. Veracity and fidelity, truthfulness and keeping promises, support all four.",
          caption: "Most dilemmas in mental health are autonomy against beneficence. The tie-breaker is capacity: a capable adult may refuse what is good for her; a person whose illness has removed her capacity is protected, by procedure, in the least restrictive way.",
        },
        {
          type: "list",
          heading: "Legal situations the examiner likes — and the correct action",
          items: [
            "<strong>A voluntary patient with capacity refuses medication.</strong> Explore the reason, inform the prescriber, document the refusal; no covert or forced medication. If she becomes dangerous, the procedure for involuntary admission is started by the doctor.",
            "<strong>A voluntary patient hands you a written request to go home.</strong> Inform the doctor immediately; the request must be granted within 24 hours unless the criteria for involuntary admission are met and the procedure begun. The door is not simply locked.",
            "<strong>Relatives want to take an acutely psychotic patient to a prayer camp.</strong> A capable voluntary patient may leave; if he lacks capacity and is in danger the doctor is called regarding a certificate of urgency or court order. Explain, do not threaten; offer the family continued spiritual care alongside treatment; chaining at the camp would be reportable.",
            "<strong>A 15-year-old needs admission.</strong> A parent or guardian consents; the child's own view is sought and recorded; she is nursed separately from adult patients (section 65).",
            "<strong>A police officer asks informally whether a named person is a patient.</strong> Neither confirm nor deny; refer the officer to the head of facility; a lawful written request or court order opens the door, a conversation at the gate does not.",
            "<strong>A patient discloses a plan to kill a named person.</strong> Serious risk opens the fourth door: inform the doctor and head of facility at once, who involve the police and the person at risk as the law requires; increase observation; document.",
            "<strong>An involuntary patient absconds.</strong> Search, inform the head of facility and the doctor, notify the family and police as the facility's procedure requires, document times; on return assess for injury, substances and the reason he left.",
            "<strong>A person lacking capacity needs surgery.</strong> Best-interests decision by the treating team after consulting the family, documented; capacity is reassessed as the mental state improves.",
            "<strong>A patient is brought in after a suicide attempt and the family fear arrest.</strong> Attempted suicide ceased to be a criminal offence in March 2023 when Parliament amended the Criminal Offences Act; she is a patient, not a suspect. Aiding or encouraging suicide remains a serious crime.",
            "<strong>A woman accused of witchcraft is brought to the unit.</strong> Assess for mental illness (dementia, depression and psychosis are common among the accused) and for injury; involve social welfare and the police where she has been assaulted or expelled; know that the law on witchcraft accusation has been changing and check its current position before advising the family.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Treatment without valid consent is assault",
          body: "Outside the three lawful situations — a capable patient's consent, treatment of a person lacking capacity in her best interests through the procedures of the Act, and the immediate treatment needed to save life in an emergency — giving an injection, a tablet or a restraint is an assault, however kind the intention. 'The doctor ordered it' does not protect the nurse who administers it; neither does 'the family agreed' when the patient is a capable adult. Document capacity, the information given, the decision and who authorised what, with times. In mental health the record is the only evidence that rights were respected.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "The Act in ten facts",
          body: "Act 846 of 2012 replaced NRCD 30 of 1972. It created the Mental Health Authority, regional Review Tribunals, Visiting Committees and a Mental Health Fund. Voluntary admission: sections 39–41, written discharge request granted within 24 hours. Involuntary: sections 42–44, court order plus two recommendations (medical practitioner and mental health practitioner), up to one month, prolonged order up to twelve months reviewed at six, monthly review by the head of facility (section 45). Emergency: certificate of urgency (sections 48–49) up to 72 hours; safe custody outside a facility 48 hours. Children separate (section 65). Capacity presumed (section 97). Seclusion and restraint (section 58): imminent danger, less restrictive measures failed, authorised by head or senior nurse, never punishment or convenience, observed and recorded.",
        },
      ],
      keyPoints: [
        "Act 846 (2012) is rights-based and least-restrictive; it created the Mental Health Authority, regional Review Tribunals that review every involuntary admission, Visiting Committees and a Mental Health Fund, and it outlaws chaining and inhuman treatment wherever they occur.",
        "Voluntary patients (ss. 39–41) consent to each treatment, may refuse, and a written request to leave must be honoured within 24 hours unless the involuntary procedure is lawfully started.",
        "Involuntary admission (ss. 42–44) needs a court order supported by a medical practitioner and a mental health practitioner: up to one month, prolonged to twelve months reviewed at six, monthly review by the head of facility, and the patient must be told of her right to appeal to the tribunal.",
        "The emergency clock: certificate of urgency (ss. 48–49) up to 72 hours; safe custody outside a mental health facility no more than 48 hours — then release, voluntary status or a court order.",
        "Capacity is presumed (s. 97), decision- and time-specific, and tested by understand–retain–weigh–communicate; an unwise choice is not incapacity; valid consent needs capacity, information and voluntariness; the age of consent is 18; only an emergency to save life permits treatment without it.",
        "Confidentiality has four doors — consent, care team on need-to-know, legal requirement, serious risk to the patient or an identifiable other — and disclosure is always the minimum necessary, through the proper channel, documented; neither confirm nor deny to callers and never promise secrecy.",
        "Seclusion and restraint (s. 58) are for imminent danger only, after less restrictive measures, authorised by the head of facility or senior nurse, time-limited, continuously observed and recorded — never punishment or convenience; and the ethical tie-breaker in most dilemmas is whether the patient has capacity.",
      ],
      quiz: { keywords: ["act 846","mental health act","voluntary patient","certificate of urgency","detain","detention","involuntar","seclusion","restrain","least restrictive","capacity","consent","confidential","duty to warn","secrecy","rights of a voluntary","informing a patient of her rights","advocacy for a patient","autonomy","refusal of treatment","refuses her medication","refuses his prescribed","refuses a depot","written request","discharge against","police","lawful","age of consent","gillick","dignity","employer","brother asks","child requiring psychiatric","coerc","surgery for appendicitis","who consents","treatment without consent","chaining and restraint","recording seclusion","preserving dignity","an unwise decision","presumption of capacity","capacity is decision","assault","duty of confidenti","disclosure to a relative","confidentiality and disclosure","police request","whistleblow","truth telling","justice in allocating","ethics"] },
    },
  ],
};
