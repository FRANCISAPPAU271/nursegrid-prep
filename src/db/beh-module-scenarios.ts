import type { AuthoredQuestion } from "./authored-bank";

export const BEH_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-BEH-001",
    categorySlug: "mental-health",
    stem: "A client with poorly controlled type 2 diabetes repeatedly misses follow-up clinic visits and has an elevated HbA1c of 11.4%. When the nurse explores the situation using George Engel's Biopsychosocial Model rather than a narrow biomedical lens, which assessment focus is prioritized?",
    choices: [
      {
        id: "a",
        text: "Exploring the interaction between the client's biological disease, psychological stressors (such as depression and low health literacy), and social factors (such as job insecurity and lack of family support)",
      },
      {
        id: "b",
        text: "Focusing exclusively on pancreatic beta-cell dysfunction and immediately tripling the insulin dosage",
      },
      {
        id: "c",
        text: "Labeling the client as deliberately non-compliant and discharging them from the health center",
      },
      {
        id: "d",
        text: "Assuming the client lacks intelligence and ordering an unindicated head CT scan",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "George Engel's Biopsychosocial Model posits that health, illness, and healthcare delivery cannot be fully understood by biological pathology alone. It requires examining the dynamic interplay of biological factors (glycemic control, genetics), psychological components (illness perceptions, coping styles, emotional distress, self-efficacy), and social determinants (socioeconomic status, family dynamics, work schedule, cultural beliefs). Narrow biomedical reductionism (b) ignores the real-world behavioral drivers of chronic disease; shaming the client (c) and unwarranted neuroimaging (d) are non-therapeutic.",
    strategy: "Biopsychosocial Model: Always assess biological, psychological, and social dimensions concurrently to understand client health behaviors.",
    difficulty: "easy",
    tags: ["behavioural-sciences", "biopsychosocial-model", "chronic-illness", "health-behaviour", "mental-health"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-002",
    categorySlug: "mental-health",
    stem: "According to Talcott Parsons' sociological concept of the 'Sick Role', which right and corresponding obligation apply to a client diagnosed with an acute medical illness?",
    choices: [
      {
        id: "a",
        text: "The right to permanent financial independence from society without any obligation to seek medical treatment",
      },
      {
        id: "b",
        text: "The right to be temporarily exempted from normal social and occupational roles, accompanied by the obligation to view sickness as undesirable and actively cooperate with healthcare professionals to get well",
      },
      {
        id: "c",
        text: "The obligation to self-medicate with street drugs while continuing heavy physical labor at work",
      },
      {
        id: "d",
        text: "The absolute right to dictate hospital administrative policies and hire or fire nursing staff",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Talcott Parsons' functionalist sociological model describes the 'Sick Role' as carrying two institutionalized rights and two core obligations: Rights: 1) The sick person is exempt from normal social and work responsibilities (proportional to illness severity); 2) The sick person is not blamed or held morally responsible for their condition. Obligations: 1) The person must define sickness as undesirable and want to get well; 2) The person must seek competent professional medical help and cooperate with the treatment regimen. Option b correctly pairs these rights and obligations.",
    strategy: "Parsons' Sick Role: Exemption from normal duties (right) paired with the duty to seek professional help and strive for recovery (obligation).",
    difficulty: "medium",
    tags: ["behavioural-sciences", "sick-role", "sociology", "talcott-parsons", "illness-behaviour"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-003",
    categorySlug: "mental-health",
    stem: "An immigrant client newly diagnosed with essential hypertension tells the nurse, 'My elevated pressure is caused by a spiritual imbalance and trapped heat inside my head; taking pharmaceuticals will cool my body down too rapidly.' Utilizing Arthur Kleinman's Explanatory Model of Illness, what should the nurse do first?",
    choices: [
      {
        id: "a",
        text: "Tell the client their cultural beliefs are completely primitive and scientifically absurd",
      },
      {
        id: "b",
        text: "Refuse to provide any antihypertensive education until the client abandons their religious worldview",
      },
      {
        id: "c",
        text: "Elicit the client's personal explanatory model by asking open-ended questions about what they believe caused the problem, how it affects them, and what treatment they expect, then negotiate a culturally congruent care plan",
      },
      {
        id: "d",
        text: "Agree that modern antihypertensives are toxic and advise the client to avoid all conventional medicine",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Arthur Kleinman's Explanatory Model framework encourages clinicians to explore how clients and families understand their sickness: etiology, timing, pathophysiology, severity, and acceptable treatment. Eliciting the client's perspective fosters trust and cultural humility, enabling the nurse to bridge clinical recommendations with the client's cultural framework (negotiating safe medical adherence while respecting spiritual practices that do not cause harm). Ridiculing the client (a) or issuing ultimatums (b) causes immediate care disengagement. Endorsing abandonment of evidence-based therapy (d) is dangerous malpractice.",
    strategy: "Kleinman's Explanatory Model: Understand the client's perspective on illness etiology and treatment expectations before negotiating medical therapy.",
    difficulty: "medium",
    tags: ["behavioural-sciences", "kleinman", "explanatory-model", "cultural-competence", "anthropology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-004",
    categorySlug: "mental-health",
    stem: "A nurse is preparing a 9-year-old child for a closed forearm reduction and cast application following a distal radius fracture. According to Jean Piaget's theory of cognitive development, in which stage is this school-age child, and how should the nurse explain the procedure?",
    choices: [
      {
        id: "a",
        text: "Sensorimotor stage; demonstrate the procedure using tactile sensations and infant rattle toys",
      },
      {
        id: "b",
        text: "Formal operational stage; deliver an abstract medical seminar on orthopedic biomechanics and tensor stresses",
      },
      {
        id: "c",
        text: "Preoperational stage; explain that breaking the bone was a punishment for not eating vegetables",
      },
      {
        id: "d",
        text: "Concrete operational stage; use clear, logical explanations, anatomical models, and show the plaster casting material so the child can see and touch how the bone will be stabilized",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Children aged 7 to 11 years are in Piaget's Concrete Operational stage of cognitive development. They can perform logical operations on tangible, concrete objects and understand cause-and-effect, conservation, and physical realities, but they struggle with purely abstract hypotheses. Explaining procedures with tangible models, letting them handle plaster casting gauze, and explaining how the cast holds the bone straight matches their cognitive capabilities. Sensorimotor (a) is ages 0–2; Preoperational (c) is ages 2–7 (prone to magical thinking and guilt); Formal operational (b) begins around age 12 with abstract deductive reasoning.",
    strategy: "Piaget's stages: Sensorimotor (0–2), Preoperational (2–7), Concrete Operational (7–11: logical, tangible objects/models), Formal Operational (12+: abstract reasoning).",
    difficulty: "easy",
    tags: ["behavioural-sciences", "piaget", "cognitive-development", "pediatrics", "concrete-operational"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-005",
    categorySlug: "mental-health",
    stem: "An 18-month-old toddler is hospitalized for severe rotavirus gastroenteritis. When the parents leave the bedside to use the hospital cafeteria, the child screams inconsolably, kicks the crib rails, and rejects comfort from the nurse. According to John Bowlby's Attachment Theory, which phase of separation anxiety is this toddler demonstrating?",
    choices: [
      {
        id: "a",
        text: "Protest",
      },
      {
        id: "b",
        text: "Despair",
      },
      {
        id: "c",
        text: "Detachment (Denial)",
      },
      {
        id: "d",
        text: "Autistic isolation",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "John Bowlby and James Robertson described three sequential stages of separation anxiety in young children (especially 6 to 30 months): 1) PROTEST: The child vigorously cries, screams, clings, watches eagerly for parents, and angrily rejects unfamiliar caregivers; 2) DESPAIR: The crying stops, motor activity declines, and the child appears depressed, withdrawn, sad, and apathetic; 3) DETACHMENT (Denial): The child superficially adapts, appears interested in toys, but shows detachment from returning parents (a defense mechanism against deep emotional pain). Option a accurately describes the protest stage.",
    strategy: "Bowlby's separation anxiety stages: Protest (screaming, kicking, crying) -> Despair (quiet sadness, withdrawal) -> Detachment (superficial adjustment, ignoring parents).",
    difficulty: "easy",
    tags: ["behavioural-sciences", "attachment-theory", "bowlby", "separation-anxiety", "pediatrics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-006",
    categorySlug: "mental-health",
    stem: "A 15-year-old adolescent with newly diagnosed type 1 diabetes mellitus refuses to administer insulin injections at secondary boarding school because 'my friends will see me and think I am a freak.' According to Erik Erikson's stages of psychosocial development, which core developmental conflict is this adolescent navigating?",
    choices: [
      {
        id: "a",
        text: "Trust versus Mistrust",
      },
      {
        id: "b",
        text: "Identity versus Role Confusion",
      },
      {
        id: "c",
        text: "Initiative versus Guilt",
      },
      {
        id: "d",
        text: "Generativity versus Stagnation",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Adolescents (ages 12 to 18 years) navigate Erikson's developmental stage of Identity versus Role Confusion. The primary developmental task is developing a sense of self, personal values, and peer group belonging. Fitting in with peers is paramount; chronic illnesses and visible regimens (like injections or blood glucose testing) threaten peer conformity and identity formation. The nurse should address this by integrating peer support groups, exploring discrete injection routines, and empowering autonomous self-care. Trust vs Mistrust (a) is infancy; Initiative vs Guilt (c) is early childhood (3–6 yrs); Generativity vs Stagnation (d) is middle adulthood (40–65 yrs).",
    strategy: "Erikson's stages: Adolescence (12–18) = Identity vs. Role Confusion. Peer conformity and fitting in are critical drivers of health behaviors.",
    difficulty: "easy",
    tags: ["behavioural-sciences", "erikson", "identity-vs-role-confusion", "adolescence", "psychosocial"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-007",
    categorySlug: "mental-health",
    stem: "An 84-year-old hospitalized client frequently engages the nurse in extensive conversations reflecting on their past career, family accomplishments, and missed opportunities, stating, 'I am looking back on my life trying to find peace with how it all turned out.' According to Erikson, which psychosocial crisis is this client resolving?",
    choices: [
      {
        id: "a",
        text: "Autonomy versus Shame and Doubt",
      },
      {
        id: "b",
        text: "Industry versus Inferiority",
      },
      {
        id: "c",
        text: "Ego Integrity versus Despair",
      },
      {
        id: "d",
        text: "Intimacy versus Isolation",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Older adulthood (65+ years) centers on Erikson's stage of Ego Integrity versus Despair. The developmental task is life review: looking back over one's life to achieve a sense of fulfillment, meaning, and coherence (Ego Integrity) versus experiencing bitter regret, despair, and fear of impending death. Engaging in life review is a healthy, therapeutic process that nurses should facilitate through active listening and validation. Autonomy vs Shame (a) is toddlerhood (1–3 yrs); Industry vs Inferiority (b) is school age (6–12 yrs); Intimacy vs Isolation (d) is young adulthood (18–40 yrs).",
    strategy: "Erikson's stages: Older adult (65+) = Ego Integrity vs. Despair. Life review and reflecting on one's life story are core developmental milestones.",
    difficulty: "easy",
    tags: ["behavioural-sciences", "erikson", "ego-integrity", "gerontology", "psychosocial-development"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-008",
    categorySlug: "mental-health",
    stem: "A client who has experienced severe unmanaged physiological and emotional stress for six continuous months following major trauma presents with persistent hypotension, profound hypoglycemia, hypothermia, immune collapse, and adrenal atrophy. According to Hans Selye's General Adaptation Syndrome (GAS), in which stage of stress adaptation is this client?",
    choices: [
      {
        id: "a",
        text: "Alarm reaction phase",
      },
      {
        id: "b",
        text: "Eustress compensation phase",
      },
      {
        id: "c",
        text: "Resistance phase",
      },
      {
        id: "d",
        text: "Exhaustion phase",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Hans Selye's General Adaptation Syndrome (GAS) comprises three distinct biological stages: 1) ALARM REACTION: Acute 'fight-or-flight' activation of the sympathetic nervous system and hypothalamic-pituitary-adrenal (HPA) axis (tachycardia, hypertension, hyperglycemia); 2) RESISTANCE: Sustained corticosteroid release and physiological adaptation to resist the ongoing stressor; 3) EXHAUSTION: Depletion of adaptive energy reserves following prolonged, relentless stress, resulting in organ system breakdown, adrenal insufficiency, blunted immune function, shock, or death. Option d accurately describes this terminal decompensatory phase.",
    strategy: "Selye's GAS stages: Alarm (acute fight-or-flight) -> Resistance (coping/adaptation) -> Exhaustion (depletion of physiological reserves, collapse).",
    difficulty: "medium",
    tags: ["behavioural-sciences", "general-adaptation-syndrome", "selye", "stress-theory", "exhaustion"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-009",
    categorySlug: "mental-health",
    stem: "A client who received an unfavorable performance appraisal and salary deduction from their corporate employer arrives at the medical clinic and verbally abuses the triage nurse, screaming that the nursing staff is incompetent and sluggish. Which ego defense mechanism is this client demonstrating?",
    choices: [
      {
        id: "a",
        text: "Displacement",
      },
      {
        id: "b",
        text: "Sublimation",
      },
      {
        id: "c",
        text: "Reaction Formation",
      },
      {
        id: "d",
        text: "Intellectualization",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Displacement is an unconscious defense mechanism in which emotional anger, hostility, or distress triggered by a powerful, threatening person or situation (e.g., the corporate employer) is redirected onto a less threatening, safer substitute target (e.g., the triage nurse). Sublimation (b) is redirecting unacceptable impulses into socially constructive pursuits (e.g., vigorous exercise). Reaction Formation (c) is expressing the exact opposite of unconscious unacceptable feelings (e.g., behaving with fawning affection toward someone you detest). Intellectualization (d) is analyzing an emotional event purely through sterile logic to avoid feeling.",
    strategy: "Defense mechanism definitions: Displacement shifts emotions from the true target to a safer, vulnerable target.",
    difficulty: "easy",
    tags: ["behavioural-sciences", "defense-mechanisms", "displacement", "psychology", "coping"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-010",
    categorySlug: "mental-health",
    stem: "A 5-year-old child who has been fully daytime and nighttime toilet trained for two years is admitted to the hospital with acute pneumonia. On hospital day two, the parents note with distress that the child has begun bedwetting, sucking their thumb, and demanding a baby feeding bottle. How should the nurse explain this behavior to the parents?",
    choices: [
      {
        id: "a",
        text: "The child has developed severe neurological brain injury from the pneumonia and requires emergency neurosurgery",
      },
      {
        id: "b",
        text: "This is Regression, a common and temporary psychological defense mechanism where a child retreats to an earlier developmental stage to cope with the overwhelming stress and fear of hospitalization",
      },
      {
        id: "c",
        text: "The parents should punish the child severely and withhold privileges to stop the bedwetting immediately",
      },
      {
        id: "d",
        text: "The child is deliberately displaying oppositional defiant disorder to manipulate hospital staff",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Regression is a common, adaptive, and temporary ego defense mechanism in young children facing severe stress, physical illness, hospitalization, or separation from family. The child retreats to behaviors associated with an earlier, safer developmental stage (e.g., thumb-sucking, enuresis, wanting a bottle) where they felt completely nurtured and protected. Reassuring parents that this behavior is normal and will resolve as health and security return prevents punitive parental reactions that worsen distress. Punishment (c) increases anxiety; attributing this to brain damage (a) or manipulation (d) is clinically inaccurate.",
    strategy: "Defense mechanisms: Regression is retreating to an earlier developmental milestone during acute stress. It is normal and temporary in hospitalized children.",
    difficulty: "easy",
    tags: ["behavioural-sciences", "regression", "defense-mechanisms", "pediatrics", "hospitalization-stress"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-011",
    categorySlug: "mental-health",
    stem: "A client who lost their home and business in an urban marketplace fire presents to the emergency room in an acute situational crisis, pacing, hyperventilating, and wringing their hands. When applying Donna Aguilera's Crisis Intervention Model, which three 'balancing factors' must the nurse evaluate to assess whether a crisis resolves or deepens?",
    choices: [
      {
        id: "a",
        text: "Net financial worth, credit score, and commercial insurance policies",
      },
      {
        id: "b",
        text: "Blood alcohol concentration, serum cortisol levels, and white blood cell count",
      },
      {
        id: "c",
        text: "Realistic perception of the event, adequate situational supports, and effective coping mechanisms",
      },
      {
        id: "d",
        text: "Criminal history, political affiliations, and educational pedigree",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Donna Aguilera's Crisis Intervention methodology identifies three critical 'balancing factors' that determine whether a stressful life event triggers a state of emotional equilibrium or decompensates into a psychological crisis: 1) Realistic perception of the event (accurate understanding without catastrophic distortion or denial); 2) Adequate situational supports (available family, friends, community, and social resources to buffer distress); and 3) Adequate coping mechanisms (positive past behavioral strategies for problem-solving and emotional regulation). If any balancing factors are absent, crisis ensues. Financial metrics (a) and lab values (b) do not constitute Aguilera's model.",
    strategy: "Aguilera's 3 Balancing Factors in Crisis: 1) Realistic perception, 2) Situational support, 3) Coping mechanisms.",
    difficulty: "medium",
    tags: ["behavioural-sciences", "crisis-intervention", "aguilera", "balancing-factors", "mental-health"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-012",
    categorySlug: "mental-health",
    stem: "A low-income single mother with three children fails to attend four consecutive prenatal clinic appointments. The clinic records label the client as 'unmotivated and non-compliant.' Applying the World Health Organization (WHO) Social Determinants of Health (SDOH) framework, which intervention should the community health nurse prioritize?",
    choices: [
      {
        id: "a",
        text: "Report the mother to police authorities for non-attendance at health appointments",
      },
      {
        id: "b",
        text: "Send a threatening legal letter stating that missing appointments will result in an immediate fine",
      },
      {
        id: "c",
        text: "Discharge the client permanently from the district health registry",
      },
      {
        id: "d",
        text: "Conduct a supportive home visit to assess structural barriers such as lack of transportation, childcare constraints, clinic operating hours, and poverty, and link the family with community health workers and social assistance",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The WHO Social Determinants of Health (SDOH) emphasizes that conditions in which people are born, grow, live, work, and age (e.g., poverty, transport deficits, childcare lack, insecure employment) drive more than 80% of health outcomes and clinic non-attendance. Labeling individuals 'non-compliant' ignores structural inequities. A compassionate home visit uncovers real barriers and allows tailored solutions (CHPS home visits, mobile outreach, transport subsidies, flexible clinic hours). Punitive threats (a and b) and patient abandonment (c) worsen maternal-fetal mortality and violate human rights.",
    strategy: "SDOH principle: Before attributing missed care to poor personal motivation, identify and address structural socioeconomic barriers.",
    difficulty: "easy",
    tags: ["behavioural-sciences", "social-determinants", "sdoh", "health-equity", "community-health"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-013",
    categorySlug: "mental-health",
    stem: "A hospitalized client with congestive heart failure drinks a traditional herbal tea brought in by family members, believing it will strengthen their cardiac energy. The herbal tea contains licorice root (glycyrrhizin), which causes sodium retention and hypokalemia. What is the nurse's most culturally competent and therapeutically effective response?",
    choices: [
      {
        id: "a",
        text: "Respectfully explain the pharmacological interaction between licorice root, fluid retention, and heart failure medications, validate their desire to regain strength, and collaborate with the client and family on safe traditional dietary alternatives that do not cause harm",
      },
      {
        id: "b",
        text: "Snatch the herbal tea bottle away angrily and pour it down the toilet while reprimanding the family",
      },
      {
        id: "c",
        text: "Say nothing and allow the client to drink as much herbal tea as they want to preserve rapport",
      },
      {
        id: "d",
        text: "Call hospital security to have the family permanently ejected and banned from visiting",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Cultural competence requires balancing respect for traditional cultural health practices with patient physiological safety. Licorice root contains glycyrrhizin, which inhibits 11-beta-hydroxysteroid dehydrogenase, leading to mineralocorticoid excess, severe hypokalemia, hypertension, and heart failure decompensation. The nurse explains the mechanism respectfully without denigrating their beliefs, validates their positive intention to heal, and negotiates safe alternatives (e.g., safe herbal teas without cardiac interactions or prayer/rituals). Aggressive confiscation (b) destroys trust; passive negligence (c) precipitates fatal heart failure; security ejection (d) alienates the support system.",
    strategy: "Negotiating cultural health practices: Respect the intention, educate on specific physiological risks, and negotiate safe cultural practices that avoid harm.",
    difficulty: "medium",
    tags: ["behavioural-sciences", "cultural-competence", "herbal-medicine", "drug-herb-interactions", "patient-education"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-014",
    categorySlug: "mental-health",
    stem: "A 48-year-old client with a 30-pack-year smoking history is admitted for an elective inguinal hernia repair. When the nurse asks about smoking cessation, the client laughs and says, 'My grandfather smoked two packs a day and lived to be 95. Smoking relaxes me, and I have zero intention of ever quitting.' According to Prochaska and DiClemente's Transtheoretical Stages of Change, which stage is this client in?",
    choices: [
      {
        id: "a",
        text: "Preparation",
      },
      {
        id: "b",
        text: "Precontemplation",
      },
      {
        id: "c",
        text: "Contemplation",
      },
      {
        id: "d",
        text: "Maintenance",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The Transtheoretical Model (TTM) stages are: 1) PRECONTEMPLATION: No intention to change behavior in the foreseeable future (typically defined as within the next 6 months); unaware or in denial of negative consequences; 2) CONTEMPLATION: Aware a problem exists and seriously considering change within 6 months, but ambivalent; 3) PREPARATION: Intending to take action within the next 30 days and taking initial small steps; 4) ACTION: Actively modifying behavior (within the past 6 months); 5) MAINTENANCE: Sustaining behavior change for over 6 months and preventing relapse. This client has zero intention to quit, fitting Precontemplation.",
    strategy: "Stages of Change: Precontemplation = No intention to change ('I don't have a problem'); Contemplation = Ambivalent, thinking about change; Preparation = Planning to change soon.",
    difficulty: "easy",
    tags: ["behavioural-sciences", "stages-of-change", "transtheoretical-model", "precontemplation", "smoking-cessation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-015",
    categorySlug: "mental-health",
    stem: "A community health nurse is conducting an educational session on cervical cancer screening (pap smears and HPV testing). An asymptomatic woman states, 'I feel perfectly healthy, so cancer cannot happen to me, and screening clinics are too far away anyway.' Which concepts of the Health Belief Model (HBM) must the nurse address to encourage screening uptake?",
    choices: [
      {
        id: "a",
        text: "Unconscious id impulses and Oedipal complexes",
      },
      {
        id: "b",
        text: "Classical conditioning and extinction schedules",
      },
      {
        id: "c",
        text: "Perceived Susceptibility (helping her recognize that cervical cancer develops silently without early symptoms) and Perceived Barriers (assisting with transport and mobile clinic access)",
      },
      {
        id: "d",
        text: "Maslow's hierarchy of self-actualization peaks",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The Health Belief Model (HBM) posits that health-seeking behavior depends on: 1) Perceived Susceptibility (belief about chances of contracting a condition); 2) Perceived Severity (belief about seriousness and consequences); 3) Perceived Benefits (belief in efficacy of advised action); 4) Perceived Barriers (tangible and psychological costs of the action); 5) Cues to Action; and 6) Self-Efficacy. The woman exhibits low perceived susceptibility ('I feel healthy, so it can't happen to me') and high perceived barriers ('clinics are too far'). Psychoanalytic (a) and Pavlovian (b) models do not guide health screening behavior.",
    strategy: "Health Belief Model: Health action requires sufficient Perceived Susceptibility and Severity, recognized Benefits, and low Perceived Barriers.",
    difficulty: "medium",
    tags: ["behavioural-sciences", "health-belief-model", "cervical-cancer", "perceived-susceptibility", "screening"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-016",
    categorySlug: "mental-health",
    stem: "A client with alcohol use disorder states to the nurse, 'Part of me knows alcohol is destroying my liver and my marriage, but another part of me needs a drink just to get through the workday.' Using Motivational Interviewing (MI) principles, how should the nurse respond to elicit 'change talk'?",
    choices: [
      {
        id: "a",
        text: "'You are an alcoholic in complete denial, and you will die of cirrhosis if you don't stop today!'",
      },
      {
        id: "b",
        text: "'Drinking to get through work is totally fine as long as you switch from hard spirits to beer.'",
      },
      {
        id: "c",
        text: "'Why can't you just exercise more self-discipline like normal responsible adults?'",
      },
      {
        id: "d",
        text: "'You are wrestling with a difficult conflict. On one hand, drinking feels like a way to cope with daily stress, but on the other hand, you value your marriage and health deeply. What steps have you thought about that might help protect your family?'",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Motivational Interviewing (MI) is a collaborative, person-centered counseling approach designed to strengthen personal motivation for and commitment to change by resolving ambivalence. Key principles include expressing empathy, developing discrepancy between current behavior and core values, rolling with resistance, and supporting self-efficacy. Reflecting ambivalence ('On one hand... but on the other hand...') and asking an open question invites the client to voice their own arguments for change ('change talk'). Confrontational labeling (a), minimizing alcoholism (b), and shaming (c) trigger defensiveness and entrench resistance.",
    strategy: "Motivational Interviewing: Reflect ambivalence without judgment, align with client values, and ask open-ended questions that elicit the client's own reasons for change.",
    difficulty: "medium",
    tags: ["behavioural-sciences", "motivational-interviewing", "change-talk", "substance-use", "ambivalence"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-017",
    categorySlug: "mental-health",
    stem: "A 42-year-old client visits the primary care clinic reporting persistent depressed mood, profound anhedonia (inability to feel pleasure), insomnia, fatigue, feelings of worthlessness, and a 6 kg unintentional weight loss over the past 6 weeks. The nurse administers the PHQ-9 (Patient Health Questionnaire-9). Which score and clinical determination indicate severe depression requiring urgent psychiatric intervention?",
    choices: [
      {
        id: "a",
        text: "A PHQ-9 score of 21 (severe depression), accompanied by active suicidal thoughts",
      },
      {
        id: "b",
        text: "A PHQ-9 score of 2 (minimal depression), indicating normal everyday workplace stress",
      },
      {
        id: "c",
        text: "A PHQ-9 score of 6 (mild depression) requiring immediate involuntary electroconvulsive therapy",
      },
      {
        id: "d",
        text: "A PHQ-9 score of 0, indicating malingering behavior that warrants clinic discharge",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The PHQ-9 is a standardized 9-item depression screening tool scored from 0 to 27: 0–4 = minimal/none; 5–9 = mild; 10–14 = moderate; 15–19 = moderately severe; 20–27 = severe depression. A score of 20 or higher signifies severe major depressive disorder. Any endorsement of item 9 (thoughts of being better off dead or hurting oneself) demands immediate comprehensive suicide risk assessment and emergency psychiatric referral. Involuntary ECT (c) is never indicated for mild depression; discharging a suffering client (d) constitutes medical negligence.",
    strategy: "PHQ-9 interpretation: Scores 20–27 represent severe depression. Item 9 mandates immediate, direct suicide risk assessment.",
    difficulty: "easy",
    tags: ["behavioural-sciences", "depression", "phq-9", "mental-health-screening", "psychiatric-nursing"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-018",
    categorySlug: "mental-health",
    stem: "During a psychiatric intake assessment, a client with major depression whispers, 'Nothing matters anymore, and everyone would be much better off if I were gone.' What is the nurse's immediate, priority assessment action?",
    choices: [
      {
        id: "a",
        text: "Reassure the client cheerfully that tomorrow is a brand new day with sunshine and smiles",
      },
      {
        id: "b",
        text: "Ask direct, explicit questions: 'Are you having thoughts of ending your life? Do you have a specific plan, and do you have access to the means to carry it out?' and maintain immediate one-to-one safety observation",
      },
      {
        id: "c",
        text: "Promise the client that this disclosure will be kept completely secret between the two of them",
      },
      {
        id: "d",
        text: "Leave the client alone in an unmonitored private room so they can have privacy to cry",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Suicide risk assessment requires direct, unambiguous, objective questioning. Asking directly about suicidal ideation does NOT plant the idea in a person's head; rather, it provides relief and opens communication. The nurse must assess: 1) ideation; 2) plan specificity; 3) lethality of chosen method; and 4) immediate access to means. If risk is present, the client must never be left alone (initiating continuous 1-to-1 visual observation and removing environmental hazards). False reassurance (a) trivializes despair; promising secrecy (c) is dangerous malpractice; leaving the client alone (d) allows suicide completion.",
    strategy: "Suicide assessment rule: Ask directly about suicidal thoughts, plan, and means. Never promise secrecy, and never leave an actively suicidal client alone.",
    difficulty: "easy",
    tags: ["behavioural-sciences", "suicide-assessment", "patient-safety", "psychosocial", "crisis-intervention"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-019",
    categorySlug: "mental-health",
    stem: "A 28-year-old client diagnosed with schizophrenia lives with their extended family in a rural Ghanaian community. The family stops the client's antipsychotic injections and takes the client to a spiritual prayer camp, stating that mental illness is caused exclusively by generational ancestral curses. Applying culturally congruent behavioural health nursing, how should the psychiatric community nurse intervene?",
    choices: [
      {
        id: "a",
        text: "Arrive with armed police, insult the spiritual elders, and forcibly drag the client away",
      },
      {
        id: "b",
        text: "Abandon the case permanently because spiritual beliefs make medical intervention impossible",
      },
      {
        id: "c",
        text: "Engage the family and prayer camp leaders respectfully, provide psychoeducation demystifying psychosis as a manageable neurochemical imbalance, and negotiate a collaborative model where spiritual prayers continue alongside maintenance antipsychotic medication",
      },
      {
        id: "d",
        text: "Advise the family that prayer is 100% curative and that antipsychotics are poison",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "In many West African settings, mental health care intersects with deeply rooted traditional and faith-based healing frameworks. Antagonistic approaches or police raids (a) alienate families and drive patients into hiding. Complete abandonment (b) leaves vulnerable clients without care. The evidenced-based, culturally congruent approach championed by the Mental Health Authority and WHO is intersectoral collaboration: engaging faith leaders and family elders respectfully, delivering non-shaming psychoeducation, and negotiating co-existence (allowing prayers/supportive faith rituals to continue while ensuring continuous medical antipsychotic therapy).",
    strategy: "Intercultural mental health: Collaborate with community faith leaders to bridge traditional frameworks with continuous evidence-based psychotropic therapy.",
    difficulty: "medium",
    tags: ["behavioural-sciences", "cultural-mental-health", "schizophrenia", "stigma", "community-psychiatry"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-BEH-020",
    categorySlug: "mental-health",
    stem: "A client in an outpatient clinic suddenly experiences a severe panic attack, with hyperventilation, diaphoresis, trembling, palpitations, and screams, 'I am having a heart attack! I am dying right now!' Which nursing intervention is most therapeutic during panic-level anxiety?",
    choices: [
      {
        id: "a",
        text: "Deliver an extensive 30-minute educational lecture on autonomic nervous system anatomy",
      },
      {
        id: "b",
        text: "Leave the room and shut the door so the client can calm down without being observed",
      },
      {
        id: "c",
        text: "Shout loudly into the client's ear to snap them out of the hysterical episode",
      },
      {
        id: "d",
        text: "Stay with the client in a quiet, low-stimulus environment, speak in short, simple, calm sentences, and guide slow, rhythmic breathing ('Breathe in with me... breathe out slowly. You are safe.')",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "During panic-level anxiety (the highest level on Peplau's anxiety continuum), perceptual fields are completely closed, logical reasoning is suspended, and the individual experiences terror and physiological fight-or-flight surges. The nurse must: 1) stay with the client (never abandon someone in panic); 2) reduce environmental stimuli (dim lights, quiet room); 3) use a calm, low, reassuring tone; 4) speak in concise, simple sentences; and 5) guide physical breathing to reverse respiratory alkalosis from hyperventilation. Lengthy teaching (a) cannot be processed; leaving the client alone (b) intensifies terror; shouting (c) escalates panic.",
    strategy: "Interventions for panic-level anxiety: Stay with the client, minimize environmental stimuli, speak in short, calm, simple sentences, and guide slow rhythmic breathing.",
    difficulty: "easy",
    tags: ["behavioural-sciences", "panic-attack", "anxiety-levels", "peplau", "crisis-management"],
    isFree: true,
  },
];
