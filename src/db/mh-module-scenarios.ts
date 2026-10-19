import type { AuthoredQuestion } from "./authored-bank";

/**
 * Dedicated NCLEX-style clinical scenario questions for Mental Health Nursing modules.
 * Authored specifically for Mental Health Nursing course modules to test authentic clinical judgment,
 * psychiatric law and ethics (Mental Health Act 846), therapeutic communication, schizophrenia and psychosis,
 * mood disorders and suicide precautions, anxiety and personality disorders, addiction and withdrawal,
 * perinatal mental health, and psychopharmacologic emergencies (NMS, serotonin syndrome, lithium toxicity).
 */
export const MH_MODULE_SCENARIOS: AuthoredQuestion[] = [
  // =========================================================================
  // MODULE 01: MENTAL HEALTH LAW, RIGHTS & DE-ESCALATION
  // =========================================================================
  {
    authoredId: "NG-MOD-MH-001",
    categorySlug: "mental-health",
    stem: "A 32-year-old client with bipolar disorder is brought to the psychiatric emergency unit by family. The client has not slept for 4 days, is pacing continuously, giving away life savings to strangers, and threatening to jump off a balcony because 'angels will catch me.' The client refuses voluntary admission. Under the provisions of Ghana's Mental Health Act (Act 846) and international mental health standards, which legal criterion justifies temporary involuntary admission?",
    choices: [
      { id: "a", text: "The client has a confirmed mental disorder and presents an imminent risk of serious bodily harm to self or others, or severe self-neglect" },
      { id: "b", text: "The client lacks financial insight and is depleting family resources" },
      { id: "c", text: "The family requests admission because they can no longer cope with the client's home behaviour" },
      { id: "d", text: "The client has stopped taking prescribed oral psychiatric medications against medical advice" }
    ],
    correctChoiceId: "a",
    rationale: "Under Ghana's Mental Health Act 2012 (Act 846) and standard bioethical principles, involuntary admission overrides an individual's civil liberties and is legally justified ONLY when: (1) the person has a recognized mental disorder, and (2) as a result of that disorder, presents an imminent risk of serious physical harm to self (e.g., suicide or reckless life-threatening behavior) or to others, or is incapable of caring for basic survival needs. Refusing medication, squandering money, or family distress alone does not fulfill legal criteria for involuntary confinement.",
    strategy: "Involuntary psychiatric commitment requires: Mental disorder + IMMINENT RISK OF HARM TO SELF OR OTHERS. Financial waste or eccentric behavior alone does not justify depriving a patient of freedom.",
    difficulty: "medium",
    tags: ["mental-health", "mental-health-act", "involuntary-admission", "ethics", "patient-rights"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-MH-002",
    categorySlug: "mental-health",
    stem: "A client admitted to the acute psychiatric unit becomes increasingly agitated, pacing rapidly in the corridor, shouting profanities, clenching fists, and invading other clients' personal space. What is the nurse's FIRST action using non-restrictive verbal de-escalation?",
    choices: [
      { id: "a", text: "Summon security personnel immediately to place the client in four-point physical restraints" },
      { id: "b", text: "Stand at a safe distance in an open posture, speak in a calm low-pitched voice, acknowledge the client's distress, and invite the client to a quiet area" },
      { id: "c", text: "Confront the client firmly and explain that shouting will result in the loss of ward privileges" },
      { id: "d", text: "Administer rapid intramuscular sedation without attempting verbal engagement" }
    ],
    correctChoiceId: "b",
    rationale: "Least Restrictive Care dictates that verbal de-escalation must always be attempted before physical or chemical restraints. The nurse should: (1) Maintain personal safety by standing at an angle outside the client's personal space (at least two arm's lengths away) with hands visible and uncrossed; (2) Speak in a calm, controlled, non-threatening, low-pitched voice; (3) Validate the client's emotional distress ('I see that you are very upset'); and (4) Offer to move together to a low-stimulus environment. Confrontation escalates violence, while physical restraint is an emergency measure of last resort.",
    strategy: "De-escalation hierarchy: Verbal de-escalation & low-stimulus environment FIRST -> PRN oral medication -> Seclusion/Physical restraint ONLY as an absolute last resort when imminent violence occurs.",
    difficulty: "easy",
    tags: ["mental-health", "de-escalation", "aggression", "least-restrictive-environment", "therapeutic-communication"],
    isFree: true,
  },

  // =========================================================================
  // MODULE 02: THERAPEUTIC RELATIONSHIP & PSYCHIATRIC ASSESSMENT
  // =========================================================================
  {
    authoredId: "NG-MOD-MH-003",
    categorySlug: "mental-health",
    stem: "A 45-year-old client diagnosed with severe major depression sits weeping with head down on the ward bed and whispers, \"I have failed my entire family. Everyone would be so much better off if I were dead.\" Which nursing response exemplifies THERAPEUTIC communication?",
    choices: [
      { id: "a", text: "\"You have a wonderful family who loves you dearly; you shouldn't think that way.\"" },
      { id: "b", text: "\"Why do you believe you have failed your family? Everything will look brighter tomorrow.\"" },
      { id: "c", text: "\"You are feeling overwhelmed and worthless right now. Are you thinking about ending your life?\"" },
      { id: "d", text: "\"I understand exactly how you feel; I felt the same way when I went through difficult times.\"" }
    ],
    correctChoiceId: "c",
    rationale: "Therapeutic communication acknowledges and reflects the client's feelings without judgment, minimization, or false reassurance, while directly addressing suicide risk. When a client expresses hopeless thoughts ('everyone would be better off if I were dead'), the nurse must directly assess suicidal ideation ('Are you thinking about ending your life?'). Option A minimizes feelings; Option B uses non-therapeutic 'why' probing and false reassurance; Option D shifts focus to the nurse; and Option E changes the subject to deflect from the client's pain.",
    strategy: "NCLEX Rule for Suicide Assessment: ALWAYS ask DIRECT, explicit questions about suicidal intent. Acknowledge feelings and never give false reassurance ('everything will be fine') or ask 'why' questions.",
    difficulty: "medium",
    tags: ["mental-health", "therapeutic-communication", "depression", "suicide-assessment", "peplau"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-MH-004",
    categorySlug: "mental-health",
    stem: "A client admitted following a near-lethal paracetamol overdose tells the night nurse, \"I am planning to finish what I started once everyone goes to sleep.\" What is the HIGHEST priority nursing intervention?",
    choices: [
      { id: "a", text: "Assign a nursing assistant to conduct 15-minute scheduled visual safety checks" },
      { id: "b", text: "Administer prescribed oral lorazepam to induce sleep" },
      { id: "c", text: "Have the client sign a written 'no-harm' safety contract and document it in the chart" },
      { id: "d", text: "Place the client on continuous one-to-one (1:1) direct visual observation within arm's reach and remove all potential environmental hazards" }
    ],
    correctChoiceId: "d",
    rationale: "When a client communicates explicit, active suicidal intent with a plan, the client requires immediate, continuous One-to-One (1:1) direct visual observation. The staff member must remain within arm's length at all times, including during bathroom and hygiene routines. The environment must be thoroughly searched to eliminate strangulation hazards (belts, shoelaces, bedsheets, cords), glass, plastic bags, and sharps. Periodic 15-minute checks leave unsupervised windows where suicide can occur. 'No-harm contracts' have no proven efficacy in preventing suicide in high-risk patients.",
    strategy: "Active suicidal intent + plan = MANDATORY 1:1 continuous visual observation within arm's reach. 15-minute checks are unsafe for actively suicidal patients.",
    difficulty: "easy",
    tags: ["mental-health", "suicide-prevention", "one-to-one-observation", "patient-safety", "crisis-intervention"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 03: PSYCHOSIS & MOOD DISORDERS
  // =========================================================================
  {
    authoredId: "NG-MOD-MH-005",
    categorySlug: "mental-health",
    stem: "A client diagnosed with paranoid schizophrenia turns suddenly toward the corner of the dayroom, appears frightened, and covers his ears shouting, \"Stop screaming at me! I won't do it!\" What is the nurse's MOST appropriate initial response?",
    choices: [
      { id: "a", text: "\"I do not hear any voices, but I see that you are frightened. What are the voices telling you to do?\"" },
      { id: "b", text: "\"There is nobody in that corner shouting at you; you are imagining things.\"" },
      { id: "c", text: "\"Why don't you tell the voices to go away and leave you alone?\"" },
      { id: "d", text: "\"I hear the shouting too, but we are safe in the hospital so do not worry.\"" }
    ],
    correctChoiceId: "a",
    rationale: "When responding to auditory hallucinations, the nurse should: (1) Validate the client's reality and feeling while stating the nurse's reality ('I do not hear any voices, but I see that you are frightened'), and (2) Immediately assess for COMMAND hallucinations ('What are the voices telling you to do?'). Command hallucinations instructing self-harm or violence represent a psychiatric emergency. The nurse must never validate the hallucination as real (Option D), brgue or mock the client (Option B), or give advice to talk to the voices (Option C).",
    strategy: "Hallucination protocol: Present reality calmly ('I don't hear them') + Validate emotion ('I see you are frightened') + ASSESS CONTENT ('What are they telling you to do?') to rule out command hallucinations.",
    difficulty: "medium",
    tags: ["mental-health", "schizophrenia", "hallucinations", "command-hallucinations", "therapeutic-response"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-MH-006",
    categorySlug: "mental-health",
    stem: "A client with schizophrenia refuses to eat meals, stating, \"The kitchen staff are poisoning my food with radioactive chemicals on orders from the government.\" Which nursing strategy is MOST effective?",
    choices: [
      { id: "a", text: "Taste a spoonful of the food in front of the client to prove that it is not poisoned" },
      { id: "b", text: "Acknowledge the client's fear, avoid arguing about the delusion, and provide pre-packaged, factory-sealed foods or let the client select unopened containers" },
      { id: "c", text: "Explain that the kitchen staff are highly trained professionals who would never poison food" },
      { id: "d", text: "Withhold all food until the client accepts that the delusion is irrational" }
    ],
    correctChoiceId: "b",
    rationale: "Delusions are fixed, false beliefs that cannot be corrected by logical reasoning, debate, or proof. Arguing or trying to 'prove' the food is safe (e.g., tasting it) reinforces the delusional dynamic or suggests the nurse is in collusion. The therapeutic approach is to validate the underlying emotion ('It must be terrifying to feel unsafe about what you eat') without validating the false belief, and offer pragmatic solutions such as unopened, factory-sealed packages (e.g., unopened cans, bread, fruit in peels) that the client can inspect and open personally.",
    strategy: "Managing delusions of poisoning: Do not argue or debate. Offer factory-sealed, unopened foods/containers so the client feels safe eating.",
    difficulty: "medium",
    tags: ["mental-health", "delusions", "schizophrenia", "persecutory-delusions", "nutrition"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-MH-007",
    categorySlug: "mental-health",
    stem: "A client admitted with Bipolar I Disorder in an acute manic state is singing loudly, pacing the ward continuously without sleeping, wearing flamboyant mismatched clothing, and interrupting other patients' meals. Which nursing intervention is the HIGHEST priority for this client's physiological wellbeing?",
    choices: [
      { id: "a", text: "Insist that the client sit quietly at the dining table for 30 minutes during every meal" },
      { id: "b", text: "Engage the client in competitive group sports in the recreation hall to burn off excess energy" },
      { id: "c", text: "Provide high-calorie, high-protein finger foods and fortified juices that can be eaten while walking, in a low-stimulus environment" },
      { id: "d", text: "Place the client in four-point physical restraints until hyperactivity ceases" }
    ],
    correctChoiceId: "c",
    rationale: "During an acute manic phase, clients experience extreme hyperactivity, shortened attention span, and poor nutritional intake, placing them at severe risk of physical exhaustion, severe dehydration, and cardiovascular collapse. The priority physiological intervention is providing frequent, high-calorie, high-protein 'finger foods' (sandwiches, boiled eggs, fruit, cheese sticks) and fortified fluids that the client can consume on the move without sitting. Competitive sports are overstimulating and provoke aggression; insisting on sitting at a table causes escalation.",
    strategy: "Manic patient care: High-calorie finger foods + Portable drinks + Low-stimulus private room. Manic clients can die from physical exhaustion and dehydration.",
    difficulty: "medium",
    tags: ["mental-health", "bipolar-disorder", "acute-mania", "nutrition", "nursing-priorities"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-MH-008",
    categorySlug: "mental-health",
    stem: "A client with severe major depressive disorder has been withdrawn, mute, and bedbound for two weeks. On the third day after starting antidepressant therapy, the client suddenly appears cheerful, well-groomed, energetic, and begins giving away personal possessions to roommates. What is the nurse's PRIORITY clinical interpretation of this sudden behavior change?",
    choices: [
      { id: "a", text: "The antidepressant medication has successfully cured the depressive episode" },
      { id: "b", text: "The client has transitioned into a bipolar hypomanic episode requiring lithium titration" },
      { id: "c", text: "The client is ready for immediate discharge to outpatient community care" },
      { id: "d", text: "The client is at imminent risk for suicide because the energy level has improved sufficiently to execute a finalized suicide plan" }
    ],
    correctChoiceId: "d",
    rationale: "A sudden, dramatic lift in mood, uncharacteristic cheerfulness, and giving away prized possessions in a severely depressed client (especially shortly after starting antidepressants or during early recovery) is a classic warning sign of impending suicide. When severe depression begins to lift, the patient's psychomotor retardation improves before mood improves; the patient now possesses the physical energy and cognitive focus required to execute a previously formulated suicide plan. Giving away possessions signifies finalizing personal affairs. Suicide precautions must be intensified immediately.",
    strategy: "NCLEX Classic Trap: Sudden improvement in depression + giving away possessions = HIGHEST RISK OF SUICIDE. Energy returned before hopelessness resolved.",
    difficulty: "hard",
    tags: ["mental-health", "depression", "suicide-risk", "antidepressants", "warning-signs"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 04: ANXIETY, TRAUMA, EATING & PERSONALITY DISORDERS
  // =========================================================================
  {
    authoredId: "NG-MOD-MH-009",
    categorySlug: "mental-health",
    stem: "A client in the emergency room experiences a sudden acute panic attack with hyperventilation, trembling, chest tightness, palpitations, and intense terror of 'losing my mind or dying.' What is the nurse's MOST effective immediate action?",
    choices: [
      { id: "a", text: "Stay with the client, speak in short simple sentences, maintain a calm presence, and guide slow deep diaphragmatic breathing" },
      { id: "b", text: "Leave the client alone in an empty room to reduce external sensory stimulation" },
      { id: "c", text: "Explain the complex neurobiology of the fight-or-flight sympathetic nervous system" },
      { id: "d", text: "Tell the client firmly that the physical sensations are harmless and to snap out of it" }
    ],
    correctChoiceId: "a",
    rationale: "During panic-level anxiety, perceptual fields are drastically narrowed, cognitive processing is severely impaired, and the client feels imminent doom. The nurse must: (1) STAY with the client (never leave a panicked client alone; physical presence provides safety), (2) Speak in short, simple, calm phrases, (3) Reduce ambient noise and lighting, and (4) Model and coach slow, deep diaphragmatic breathing to counter respiratory alkalosis from hyperventilation. Detailed psychoeducation (Option C) is impossible during panic and should occur only after anxiety decreases to mild levels.",
    strategy: "Severe panic intervention: STAY with the patient + Short, calm sentences + Breathe with them. Never leave them alone and never attempt teaching during panic.",
    difficulty: "easy",
    tags: ["mental-health", "panic-attack", "anxiety-disorders", "hyperventilation", "crisis-management"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-MH-010",
    categorySlug: "mental-health",
    stem: "A newly admitted client with Obsessive-Compulsive Disorder (OCD) spends 45 minutes washing hands repeatedly before each meal, causing severe redness and skin breakdown. How should the nurse plan the initial care regarding this ritualistic behavior during the first days of admission?",
    choices: [
      { id: "a", text: "Physically lock the bathroom door before meals to extinguish the handwashing behavior immediately" },
      { id: "b", text: "Allow sufficient time for the ritual initially while scheduling meal times earlier, then gradually set agreed limits on washing time as coping strategies are developed" },
      { id: "c", text: "Confront the client with the irrationality of spending 45 minutes washing hands" },
      { id: "d", text: "Require the client to clean the entire ward kitchen whenever handwashing exceeds 5 minutes" }
    ],
    correctChoiceId: "b",
    rationale: "Compulsive rituals in OCD serve as a psychological defense mechanism to neutralize overwhelming anxiety generated by intrusive obsessive thoughts. Abruptly blocking or forbidding the ritual in the early stages of hospitalization triggers panic-level anxiety. The nurse should initially accommodate the ritual by planning the schedule around it (e.g., starting earlier), ensure skin protection, and establish a trusting relationship. Subsequently, the multidisciplinary team works collaboratively with the client to gradually limit ritual time (exposure and response prevention) while teaching alternative anxiety-reduction strategies.",
    strategy: "OCD initial rule: Allow time for the ritual early in admission to prevent panic, then gradually negotiate limits while teaching new coping mechanisms. Never abruptly stop rituals on Day 1.",
    difficulty: "medium",
    tags: ["mental-health", "ocd", "rituals", "anxiety", "care-planning"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-MH-011",
    categorySlug: "mental-health",
    stem: "A 17-year-old female weighing 36 kg (BMI 13.8 kg/m2) is admitted to the eating disorder unit with Anorexia Nervosa, bradycardia (HR 42 bpm), and hypothermia (35.2 degrees Celsius). Which nursing intervention is mandatory to prevent secret purging and ensure safe refeeding?",
    choices: [
      { id: "a", text: "Allow the client to eat meals alone in her bedroom to minimize social anxiety" },
      { id: "b", text: "Offer high-calorie milkshakes whenever the client requests them between midnight and dawn" },
      { id: "c", text: "Maintain direct 1-to-1 observation during all meals and continuously for at least 1 hour following meals, with bathroom visits strictly supervised" },
      { id: "d", text: "Weigh the client three times daily immediately after each meal" }
    ],
    correctChoiceId: "c",
    rationale: "In the inpatient management of severe anorexia nervosa, clients frequently experience overwhelming guilt following food consumption and may attempt to purge (vomiting), discard food in napkins, or engage in vigorous compensatory exercise. Direct nursing supervision is mandatory during meals (typically 30–45 minutes) and for at least 60 minutes postprandially. Bathrooms must be locked or supervised to prevent vomiting or water-loading. Daily weighing is conducted once in the morning upon waking, after voiding, wearing only a hospital gown, not after meals.",
    strategy: "Anorexia postprandial rule: Observe client during meal AND for 1 hour after meal to prevent vomiting/purging or hiding food.",
    difficulty: "medium",
    tags: ["mental-health", "anorexia-nervosa", "eating-disorders", "purging-prevention", "refeeding"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-MH-012",
    categorySlug: "mental-health",
    stem: "A client with Borderline Personality Disorder tells the day nurse, \"You are the only compassionate nurse on this entire unit; the night nurse is cruel and incompetent, and I want her reported.\" What is the nurse's BEST response to address this 'splitting' behavior?",
    choices: [
      { id: "a", text: "\"I agree; the night nurse has a harsh communication style that many patients complain about.\"" },
      { id: "b", text: "\"You should be grateful that anyone is willing to care for you on this unit.\"" },
      { id: "c", text: "\"I will ensure that the night nurse is never assigned to care for you again.\"" },
      { id: "d", text: "\"The entire nursing team works together following your single agreed care plan. If you have concerns about night care, let us discuss them together with the team.\"" }
    ],
    correctChoiceId: "d",
    rationale: "Clients with Borderline Personality Disorder (BPD) frequently use the primitive defense mechanism of 'splitting' (viewing people as entirely all-good or all-bad), which creates conflict, manipulation, and division among nursing staff. The therapeutic response to splitting is team solidarity and consistency: non-defensively stating that all staff adhere to a unified treatment plan, refusing to accept flattery that disparages colleagues, and redirecting the client to address concerns openly with the team. Never agree with the client's criticism of other staff members.",
    strategy: "Borderline splitting response: Staff consistency + Neutral boundary. State that all team members follow the same care plan; never take sides or validate idealization/devaluation.",
    difficulty: "medium",
    tags: ["mental-health", "borderline-personality", "splitting", "defense-mechanisms", "boundaries"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 05: SUBSTANCE USE, DELIRIUM & THE OLDER ADULT
  // =========================================================================
  {
    authoredId: "NG-MOD-MH-013",
    categorySlug: "mental-health",
    stem: "A 48-year-old client admitted for an elective hernia repair 48 hours ago becomes tremulous, profusely diaphoretic, agitated, and shouts that spiders are crawling on the bedsheets. Vital signs: blood pressure 178/104 mmHg, heart rate 128 bpm, temperature 38.4 degrees Celsius. What acute condition is this client experiencing?",
    choices: [
      { id: "a", text: "Alcohol withdrawal delirium (Delirium Tremens)" },
      { id: "b", text: "Postoperative paralytic ileus with sepsis" },
      { id: "c", text: "Acute opioid withdrawal" },
      { id: "d", text: "Akathisia from antiemetic medication" }
    ],
    correctChoiceId: "a",
    rationale: "Delirium Tremens (DTs) is a medical emergency that typically emerges 48 to 72 (up to 96) hours after the last alcoholic drink in alcohol-dependent individuals. Diagnostic features include autonomic hyperactivity (severe hypertension, tachycardia, fever, drenching sweats), gross coarse tremors, severe agitation, disorientation, and perceptual disturbances (vivid visual or tactile hallucinations, such as insects or animals). Untreated DTs has a mortality rate of up to 15% from cardiac arrhythmias or hyperthermia. Immediate treatment requires parenteral benzodiazepines (e.g., diazepam, lorazepam).",
    strategy: "Alcohol withdrawal timeline: Tremors/anxiety at 6–12 hrs; Seizures at 12–48 hrs; Delirium Tremens (fever + tachycardia + tactile/visual hallucinations) at 48–72 hrs. Treatment: Benzodiazepines.",
    difficulty: "medium",
    tags: ["mental-health", "alcohol-withdrawal", "delirium-tremens", "ciwa", "substance-use"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-MH-014",
    categorySlug: "mental-health",
    stem: "A client with severe chronic alcohol dependence is admitted with malnutrition, confusion, ataxia, and horizontal nystagmus (Wernicke encephalopathy). Why must intravenous thiamine (Vitamin B1) ALWAYS be administered BEFORE or concurrently with intravenous dextrose infusions?",
    choices: [
      { id: "a", text: "Dextrose neutralizes thiamine and makes it therapeutically inert" },
      { id: "b", text: "Glucose metabolism consumes residual thiamine stores as a cofactor, which can precipitate acute irreversible Wernicke-Korsakoff syndrome and death" },
      { id: "c", text: "Thiamine is required to convert glucose into fat cells to prevent hypertriglyceridemia" },
      { id: "d", text: "Thiamine enhances insulin secretion to prevent diabetic ketoacidosis" }
    ],
    correctChoiceId: "b",
    rationale: "Thiamine (vitamin B1) is an essential cofactor for enzymes in glucose carbohydrate metabolism (pyruvate dehydrogenase and transketolase). In thiamine-deficient patients with alcohol use disorder, infusing intravenous glucose without thiamine stimulates rapid carbohydrate oxidation, which completely depletes the body's remaining trace thiamine stores. This triggers acute cerebral metabolic failure, hemorrhagic necrosis of the mamillary bodies, and irreversible Korsakoff psychosis (anterograde amnesia and confabulation) or fatal coma. Thiamine must always precede or accompany glucose.",
    strategy: "Alcoholism resuscitation rule: THIAMINE BEFORE DEXTROSE (T before D). Giving sugar first depletes B1 and destroys the mamillary bodies.",
    difficulty: "hard",
    tags: ["mental-health", "wernicke-korsakoff", "thiamine", "alcohol-dependence", "pharmacology"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-MH-015",
    categorySlug: "mental-health",
    stem: "An 82-year-old hospitalized client with mild baseline memory loss suddenly becomes acutely confused, incoherent, and hallucinating over the past 8 hours. The client is restless, picking at the bedsheets, and unable to maintain attention during conversation. How should the nurse distinguish this acute presentation of DELIRIUM from progressive DEMENTIA?",
    choices: [
      { id: "a", text: "Delirium has an insidious, gradual onset over years and is completely irreversible" },
      { id: "b", text: "Dementia features prominent visual hallucinations in the early stages, whereas delirium never causes perceptual disturbances" },
      { id: "c", text: "Delirium has an acute onset, fluctuating course over 24 hours, marked inattention and altered level of consciousness, and is secondary to a treatable physiological cause (such as infection or medication)" },
      { id: "d", text: "Delirium presents with normal vital signs, while dementia presents with severe hypertension" }
    ],
    correctChoiceId: "c",
    rationale: "The key clinical discriminators: (1) Delirium: ACUTE onset (hours to days), fluctuating course, impaired attention, altered level of consciousness (hyperactive or hypoactive), perceptual disturbances (hallucinations), and typically reversible once the underlying trigger (UTI, pneumonia, electrolyte disturbance, medication anticholinergic toxicity) is resolved; (2) Dementia: INSIDIOUS onset (months to years), progressive decline in memory and executive function, stable level of consciousness until late stages, and irreversible.",
    strategy: "Delirium vs Dementia: Delirium = ACUTE + FLUCTUATING + INATTENTION + REVERSIBLE (find the cause: UTI, sepsis, meds). Dementia = CHRONIC + GRADUAL + IRREVERSIBLE.",
    difficulty: "medium",
    tags: ["mental-health", "delirium", "dementia", "gerontology", "differential-diagnosis"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 06: CHILD, ADOLESCENT, PERINATAL & EMERGENCIES
  // =========================================================================
  {
    authoredId: "NG-MOD-MH-016",
    categorySlug: "mental-health",
    stem: "On postpartum day 6, a mother refuses to hold her infant, appears terrified, has not slept for 3 days, and tells the visiting midwife, \"The baby is a demonic spirit that must be sacrificed to cleanse our lineage.\" What is the midwife's PRIORITY clinical action?",
    choices: [
      { id: "a", text: "Reassure the mother that 'postpartum baby blues' are normal and will resolve spontaneously by week two" },
      { id: "b", text: "Instruct the family to leave mother and baby alone in a dark room to encourage maternal-infant bonding" },
      { id: "c", text: "Prescribe an over-the-counter herbal calming tea and schedule routine follow-up in one month" },
      { id: "d", text: "Immediately ensure the infant's safety by placing the baby in the care of a responsible family member, and arrange emergent psychiatric evaluation and hospitalization for Postpartum Psychosis" }
    ],
    correctChoiceId: "d",
    rationale: "The presentation (delusions involving the infant, paranoia, extreme insomnia, command thoughts of infanticide) represents Postpartum Psychosis, an acute psychiatric emergency affecting approximately 1 to 2 per 1,000 childbirths. It carries a severe risk of infanticide (up to 4%) and maternal suicide (up to 5%). The absolute priority is immediate physical separation of the infant into safe protective family care (never leave mother and infant alone) and emergent psychiatric hospitalization for antipsychotic and mood-stabilizing treatment.",
    strategy: "Postpartum Psychosis = PSYCHIATRIC EMERGENCY. Delusions of infant harm/demonization carry high risk of infanticide and suicide. Protect the baby immediately and admit mother.",
    difficulty: "medium",
    tags: ["mental-health", "postpartum-psychosis", "perinatal-mental-health", "infanticide-prevention", "emergencies"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-MH-017",
    categorySlug: "mental-health",
    stem: "A 9-year-old boy is prescribed methylphenidate (Ritalin) for Attention-Deficit/Hyperactivity Disorder (ADHD). Which parent education guideline should the paediatric mental health nurse emphasize regarding safe administration and side-effect monitoring?",
    choices: [
      { id: "a", text: "Give the medication in the morning immediately after breakfast, and regularly monitor the child's height, weight, and blood pressure" },
      { id: "b", text: "Administer the dose at bedtime to promote deep restorative sleep" },
      { id: "c", text: "Crush the extended-release tablet and mix with evening cocoa drink" },
      { id: "d", text: "Double the dose on weekends if the child displays excessive boisterous play" }
    ],
    correctChoiceId: "a",
    rationale: "Central nervous system stimulants (such as methylphenidate and dextroamphetamine) can cause anorexia, weight loss, growth suppression, insomnia, and tachycardia/hypertension. To prevent insomnia, stimulants should be administered in the morning with or immediately after breakfast (food helps minimize gastrointestinal distress and appetite suppression). Pediatric nurses must regularly plot height and weight on standardized growth charts and monitor cardiovascular parameters (blood pressure and heart rate). Crushing extended-release formulations is contraindicated.",
    strategy: "ADHD stimulants (Methylphenidate): Give in morning with/after food (prevents insomnia & anorexia) + Monitor GROWTH (height & weight) and blood pressure.",
    difficulty: "medium",
    tags: ["mental-health", "adhd", "methylphenidate", "pediatric-pharmacology", "growth-monitoring"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 07: PSYCHOPHARMACOLOGY, EPS & EMERGENCIES
  // =========================================================================
  {
    authoredId: "NG-MOD-MH-018",
    categorySlug: "pharmacology-parenteral",
    stem: "A client receiving high-potency haloperidol for acute psychosis develops sudden extreme muscle rigidity ('lead-pipe' rigidity), a temperature spike to 40.1 degrees Celsius (104.2 degrees Fahrenheit), blood pressure fluctuations of 190/110 mmHg, tachycardia at 130 bpm, and profuse diaphoresis. Serum creatine kinase (CK) is 25,000 U/L. What life-threatening drug reaction should the nurse immediately act upon?",
    choices: [
      { id: "a", text: "Tardive dyskinesia" },
      { id: "b", text: "Neuroleptic Malignant Syndrome (NMS)" },
      { id: "c", text: "Acute dystonic reaction" },
      { id: "d", text: "Serotonin syndrome" }
    ],
    correctChoiceId: "b",
    rationale: "Neuroleptic Malignant Syndrome (NMS) is a life-threatening idiosyncratic reaction to dopamine-receptor antagonists (antipsychotics, particularly typical agents like haloperidol and fluphenazine). Hallmark clinical tetrad: (1) Severe 'lead-pipe' muscle rigidity, (2) Hyperthermia (> 38°C, often > 40°C), (3) Autonomic instability (labile blood pressure, tachycardia, diaphoresis, tachypnea), and (4) Altered mental status, accompanied by rhabdomyolysis (massively elevated serum CK) and acute kidney injury. Immediate action: STOP the neuroleptic immediately, initiate aggressive cooling and IV hydration, and transfer to ICU for dantrolene or bromocriptine therapy.",
    strategy: "Neuroleptic Malignant Syndrome (NMS) tetrad: FEVER = Fever (hyperthermia) + Encephalopathy + Vitals unstable + Elevated CK + Rigidity ('lead-pipe'). Action: STOP drug immediately!",
    difficulty: "hard",
    tags: ["mental-health", "nms", "neuroleptic-malignant-syndrome", "antipsychotics", "adverse-effects"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-MH-019",
    categorySlug: "pharmacology-parenteral",
    stem: "A client with bipolar disorder has taken lithium carbonate for 6 months. During a clinic follow-up, the client reports nausea, severe watery diarrhea, coarse hand tremors, unsteady gait (ataxia), and slurred speech. What should the nurse suspect, and what is the priority action?",
    choices: [
      { id: "a", text: "Mild benign side effects; advise the client to drink a strong cup of black tea" },
      { id: "b", text: "Acute manic relapse; increase the lithium dose by 300 mg daily" },
      { id: "c", text: "Lithium toxicity; withhold the next dose, notify the physician immediately, and draw an urgent serum lithium level" },
      { id: "d", text: "Hyponatremia requiring immediate fluid restriction" }
    ],
    correctChoiceId: "c",
    rationale: "Lithium has an extremely narrow therapeutic index (therapeutic maintenance: 0.6 to 1.2 mEq/L). Early toxicity begins at levels > 1.5 mEq/L, presenting with gastrointestinal distress (nausea, vomiting, diarrhea), coarse hand tremors (contrasted with mild fine tremors seen at therapeutic levels), slurred speech, lethargy, muscle weakness, and ataxia. Severe toxicity (> 2.0–2.5 mEq/L) causes seizures, coma, renal failure, and arrhythmias. The nurse must hold the lithium, check an emergent serum level, hydrate the client, and promote lithium excretion. Dehydration and low sodium intake drastically increase lithium toxicity risk.",
    strategy: "Lithium toxicity signs: COARSE hand tremor + Vomiting/Diarrhea + Ataxia/Slurred speech. Normal therapeutic range: 0.6–1.2 mEq/L. Above 1.5 = TOXICITY.",
    difficulty: "medium",
    tags: ["mental-health", "lithium-toxicity", "therapeutic-drug-monitoring", "bipolar-disorder", "pharmacology"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-MH-020",
    categorySlug: "pharmacology-parenteral",
    stem: "A client taking sertraline (an SSRI) for depression is admitted to the emergency unit after starting an over-the-counter herbal supplement (St. John's wort) and taking tramadol for back pain. The nurse notes agitation, hyperreflexia, spontaneous ocular clonus, shivering, dilated pupils, and diarrhea. What distinguishes SEROTONIN SYNDROME from Neuroleptic Malignant Syndrome (NMS)?",
    choices: [
      { id: "a", text: "Serotonin syndrome features hyporeflexia and hypothermia, whereas NMS features hyperreflexia" },
      { id: "b", text: "Serotonin syndrome occurs only with antipsychotic medications, whereas NMS occurs with antidepressants" },
      { id: "c", text: "Serotonin syndrome is treated with dantrolene, while NMS is treated with cyproheptadine" },
      { id: "d", text: "Serotonin syndrome features neuromuscular hyperreactivity (hyperreflexia, clonus, tremor), rapid onset within hours, and dilated pupils, whereas NMS features 'lead-pipe' rigidity, hyporeflexia, and develops over days to weeks" }
    ],
    correctChoiceId: "d",
    rationale: "Both Serotonin Syndrome (SS) and Neuroleptic Malignant Syndrome (NMS) present with hyperthermia and autonomic instability, but key distinguishing features exist: (1) Serotonin Syndrome: RAPID onset (within hours of combining serotonergic agents like SSRIs, MAOIs, tramadol, St. John's wort), neuromuscular HYPERACTIVITY with hyperreflexia, shivering, and spontaneous clonus, hyperactive bowel sounds/diarrhea, and mydriasis (dilated pupils); treated with cyproheptadine. (2) NMS: gradual onset over days, profound 'lead-pipe' muscle rigidity with hyporeflexia, normal pupils, and normal bowel sounds; treated with dantrolene/bromocriptine.",
    strategy: "SS vs NMS: Serotonin Syndrome = HYPER-reflexia + CLONUS + Dilated pupils (fast onset). NMS = Lead-pipe RIGIDITY + Hyporeflexia (slower onset).",
    difficulty: "hard",
    tags: ["mental-health", "serotonin-syndrome", "ssri", "nms-differential", "pharmacology"],
    isFree: false,
  },
];
