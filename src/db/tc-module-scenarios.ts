import type { AuthoredQuestion } from "./authored-bank";

export const TC_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-TCOM-001",
    categorySlug: "fundamentals",
    stem: "A registered nurse is conducting the initial admission assessment for a client scheduled for major abdominal surgery tomorrow. During Hildegard Peplau's orientation phase of the therapeutic nurse-client relationship, which intervention should the nurse prioritize?",
    choices: [
      {
        id: "a",
        text: "Introduce oneself by name and role, establish the purpose and duration of the interaction, and identify the client's immediate concerns and expectations",
      },
      {
        id: "b",
        text: "Provide reassuring statements that modern anesthesia and surgical procedures are completely safe and complication-free",
      },
      {
        id: "c",
        text: "Conduct an exhaustive 45-minute lecture on deep breathing and incentive spirometry exercises before assessing current anxiety",
      },
      {
        id: "d",
        text: "Advise the client that anxiety elevates blood pressure and encourage them to suppress all emotional distress",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Peplau's orientation phase is the foundational stage of the therapeutic relationship where the nurse introduces themselves by name and professional role, sets boundaries, establishes the contract (purpose, parameters, and time frame), clarifies roles, and assesses the client's perceptions, immediate concerns, and expectations. Establishing trust during this phase is essential for subsequent therapeutic work. False reassurance (b), premature didactic instruction without assessing the client's readiness or anxiety (c), and minimizing or suppressing emotions (d) are non-therapeutic barriers that undermine trust.",
    strategy: "In Peplau's framework, the orientation phase focuses on contracting, defining roles, establishing trust, and identifying the client's presenting concerns.",
    difficulty: "easy",
    tags: ["therapeutic-communication", "peplau", "orientation-phase", "fundamentals", "nurse-client-relationship"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-002",
    categorySlug: "fundamentals",
    stem: "A 34-year-old client diagnosed with invasive malignant melanoma tearfully confides to the nurse, 'I have two young children at home. I am terrified that I won't live to see them finish school.' Which response by the nurse demonstrates therapeutic empathy?",
    choices: [
      {
        id: "a",
        text: "'I know exactly what you are going through; my own sister had cancer and our family struggled terribly.'",
      },
      {
        id: "b",
        text: "'It sounds like you are carrying a profound weight of fear about your children's future right now. Would you like to talk more about what scares you most?'",
      },
      {
        id: "c",
        text: "'You should not think about worst-case scenarios when immunotherapy has produced miraculous outcomes.'",
      },
      {
        id: "d",
        text: "'Try to stay positive for your children's sake; worrying won't change your biopsy results.'",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Empathy involves understanding and validating the client's emotional experience from their perspective and communicating that understanding without judgment ('It sounds like you are carrying a profound weight of fear...'). It centers the client and invites further exploration. Telling the client 'I know exactly what you are going through' (a) is sympathy or nurse-centered countertransference—every client's experience is unique. False reassurance and dismissive toxic positivity (c and d) invalidate genuine fear and shut down meaningful therapeutic dialogue.",
    strategy: "Therapeutic communication rule: Acknowledge, validate, and explore the client's feelings. Eliminate responses that shift focus to the nurse ('I know how you feel') or dismiss emotions with false cheer.",
    difficulty: "medium",
    tags: ["therapeutic-communication", "empathy", "non-therapeutic-communication", "active-listening"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-003",
    categorySlug: "fundamentals",
    stem: "A nurse enters the room of a client newly diagnosed with congestive heart failure to discuss lifestyle modifications and low-sodium nutrition. To foster an open environment and demonstrate congruent, attending non-verbal communication, which action should the nurse take?",
    choices: [
      {
        id: "a",
        text: "Stand at the foot of the bed with arms crossed over the chest while reviewing the printed pamphlet",
      },
      {
        id: "b",
        text: "Stand in the doorway with one hand on the door handle to signal that the interaction will be concise and focused",
      },
      {
        id: "c",
        text: "Pull up a chair, sit down at eye level at an angled distance of approximately 3 to 4 feet, and maintain an open posture",
      },
      {
        id: "d",
        text: "Continually look at the bedside electronic computer monitor while dictating instructions to optimize chart accuracy",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Non-verbal communication conveys more than 70% of interpersonal meaning. Sitting down at eye level conveys that the nurse is not rushed and is fully present for the client, reducing power asymmetries and fostering comfort. An open posture (uncrossed arms/legs) invites interaction. Standing over a seated or bedridden client (a) reinforces hierarchy and dominance. Standing at the door (b) signals hurriedness and impatience. Focusing on a screen rather than the client (d) conveys emotional detachment and disinterest.",
    strategy: "Eye-level positioning and open posture (sitting rather than standing over the client) significantly increase client perception of nurse caring and engagement.",
    difficulty: "easy",
    tags: ["therapeutic-communication", "non-verbal-communication", "soler", "attending-behaviors"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-004",
    categorySlug: "fundamentals",
    stem: "A client who has just been informed that their chronic lymphocytic leukemia has progressed to blast crisis lowers their head, weeps quietly, and stops speaking. What is the most therapeutic initial nursing action?",
    choices: [
      {
        id: "a",
        text: "Ask immediately: 'Why are you crying when we still have bone marrow transplantation to discuss?'",
      },
      {
        id: "b",
        text: "Quickly change the subject to the client's evening meal choices to distract them from overwhelming sorrow",
      },
      {
        id: "c",
        text: "Maintain a calm, attentive physical presence in silence, allowing the client time to process emotions and cry without interruption",
      },
      {
        id: "d",
        text: "Hand the client a box of tissues, pat their back vigorously, and say, 'Everything happens for a reason.'",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Therapeutic silence is an active nursing intervention that gives the client space, permission, and time to experience, process, and express deep emotional reactions without feeling rushed or judged. Sitting quietly with the client provides therapeutic presence. Asking 'Why' questions (a) prompts defensiveness and intellectualization. Changing the subject (b) is non-therapeutic avoidance by a nurse uncomfortable with grief. Platitudes like 'everything happens for a reason' (d) invalidate suffering and minimize personal tragedy.",
    strategy: "Silence is therapeutic when a client is overwhelmed or weeping. Do not rush to fill silence with words, platitudes, or topic changes.",
    difficulty: "medium",
    tags: ["therapeutic-communication", "silence", "holding-space", "grief-support"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-005",
    categorySlug: "fundamentals",
    stem: "A nurse is conducting a psychosocial assessment using the SOLER active listening framework. Which physical behavior by the nurse correctly aligns with this evidenced-based communication model?",
    choices: [
      {
        id: "a",
        text: "Stand with arms folded tightly across the chest to portray clinical authority and emotional self-control",
      },
      {
        id: "b",
        text: "Maintain unbroken, fixed staring directly into the client's pupils for the entire duration of the interview",
      },
      {
        id: "c",
        text: "Recline backward with hands clasped behind the head to demonstrate total casualness and relaxation",
      },
      {
        id: "d",
        text: "Sit squarely facing the client, maintain an Open posture, Lean slightly toward the client, make appropriate Eye contact, and remain Relaxed",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The SOLER acronym for active attending behaviors stands for: S = Sit squarely facing the client (signals involvement); O = Open posture (uncrossed arms and legs; non-defensive); L = Lean slightly forward toward the client (signals attentiveness and interest); E = Eye contact (appropriate, intermittent, culturally respectful); R = Relaxed posture (communicates ease and presence). Folded arms (a) indicate defensiveness or disengagement; continuous unblinking staring (b) is intimidating and aggressive; excessive slouching/reclining (c) indicates indifference or unprofessionalism.",
    strategy: "Remember the SOLER acronym: Squarely face the client, Open posture, Lean forward, Eye contact, Relaxed.",
    difficulty: "easy",
    tags: ["therapeutic-communication", "soler", "active-listening", "body-language"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-006",
    categorySlug: "fundamentals",
    stem: "A nurse is caring for an elderly client who is trembling with intense emotional grief following the sudden death of their spouse. The nurse considers using touch to communicate comfort. Which clinical principle must guide the nurse's use of therapeutic touch?",
    choices: [
      {
        id: "a",
        text: "Touch is universally interpreted as soothing across all cultures, so verbal consent is never necessary",
      },
      {
        id: "b",
        text: "Assess the client's cultural background, personal boundaries, and comfort level, asking permission before placing a gentle hand on the client's forearm or hand",
      },
      {
        id: "c",
        text: "Touch should be entirely avoided in nursing care because it always crosses professional boundaries and risks legal liability",
      },
      {
        id: "d",
        text: "Administer a sudden, tight hug to the client without warning to provide rapid emotional grounding",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Therapeutic touch can convey profound empathy and comfort, particularly during acute grief or severe anxiety. However, touch is deeply personal and interpreted through cultural, gender, personal trauma, and religious lenses. The nurse should always assess the client's readiness and obtain verbal or clear non-verbal permission before touching (e.g., placing a gentle hand on the hand or forearm). Assuming universal comfort (a) can trigger re-traumatization; completely eliminating touch (c) strips nursing of a vital human element; and invasive unannounced hugs (d) breach physical boundaries.",
    strategy: "Touch requires clinical assessment of cultural, personal, and trauma histories. Always gauge readiness and obtain permission for therapeutic touch.",
    difficulty: "medium",
    tags: ["therapeutic-communication", "therapeutic-touch", "cultural-competence", "boundaries"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-007",
    categorySlug: "fundamentals",
    stem: "A client newly diagnosed with essential hypertension states, 'I threw the prescription pills into the trash because I do not believe in putting toxic chemicals into my body.' Which response by the nurse represents the most therapeutic open-ended exploration?",
    choices: [
      {
        id: "a",
        text: "'Can you share with me what concerns or beliefs you have about taking blood pressure medications?'",
      },
      {
        id: "b",
        text: "'Why would you throw away life-saving medication when you know unmanaged hypertension leads to strokes?'",
      },
      {
        id: "c",
        text: "'Do you understand that high blood pressure is called a silent killer for a reason?'",
      },
      {
        id: "d",
        text: "'You really should listen to your physician if you expect your cardiovascular health to improve.'",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Open-ended questioning invites the client to elaborate, share underlying beliefs, and articulate values without feeling judged or cornered ('Can you share with me what concerns or beliefs you have...'). This provides the assessment data needed to address medication hesitancy collaboratively. Asking 'Why' (b) puts the client on the defensive and provokes justification. Closed-ended rhetorical scare tactics (c) increase resistance. Authoritative advice-giving (d) damages the collaborative therapeutic partnership.",
    strategy: "Avoid 'Why' questions that elicit defensiveness. Choose open-ended questions starting with 'What', 'How', or 'Tell me about...' to explore client health beliefs.",
    difficulty: "easy",
    tags: ["therapeutic-communication", "open-ended-questions", "medication-adherence", "exploring"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-008",
    categorySlug: "fundamentals",
    stem: "A 54-year-old client scheduled for an urgent total laryngectomy due to advanced laryngeal cancer remarks, 'My voice is how I teach my university students and sing in our community choir. If they remove my larynx, I won't be a real human being anymore.' Which response by the nurse best reflects the client's core emotion and message?",
    choices: [
      {
        id: "a",
        text: "'Modern speech pathology uses electrolarynx devices and esophageal speech that work remarkably well.'",
      },
      {
        id: "b",
        text: "'Removing the tumor is far more important than speaking because cancer is life-threatening.'",
      },
      {
        id: "c",
        text: "'You should be grateful that the surgeons caught this before it metastasized to your lungs.'",
      },
      {
        id: "d",
        text: "'You feel that losing your voice will strip away your identity, your career, and what makes you who you are.'",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Reflecting and paraphrasing content and feelings communicates that the nurse has actively heard and understood the core meaning beneath the client's words. The client equates losing their voice with losing their very identity and personhood. Reflecting this back ('You feel that losing your voice will strip away your identity...') validates their profound existential grief. Rushing into technical solutions (a) bypasses emotional validation. Minimizing their loss by comparing it to cancer survival (b and c) is non-therapeutic and dismissive.",
    strategy: "Reflecting feelings mirrors the emotional essence of what the client expressed. Never jump to technical problem-solving before validating grief and identity loss.",
    difficulty: "medium",
    tags: ["therapeutic-communication", "reflecting", "paraphrasing", "body-image", "oncology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-009",
    categorySlug: "fundamentals",
    stem: "During an initial clinic consultation, a client talks in a rapid, disjointed manner, jumping between chronic back spasms, severe insomnia, unemployment stress, marital arguments, and sudden lightheadedness. Which communication technique should the nurse employ to synthesize these issues and structure the clinical focus?",
    choices: [
      {
        id: "a",
        text: "Interrupt immediately and inform the client that outpatient clinics only handle physical complaints, not social problems",
      },
      {
        id: "b",
        text: "Offer immediate unsolicited advice on conflict mediation to resolve the marital discord first",
      },
      {
        id: "c",
        text: "Summarize and focus: 'You have brought up several important concerns today, including physical pain, sleep, life stresses, and dizziness. Let us begin by looking into the dizziness and pain so we can address your physical safety first.'",
      },
      {
        id: "d",
        text: "Sit in total silence for the entire appointment until the client runs out of things to say",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Summarizing and focusing brings together important points of discussion to review main ideas, clarify mutual understanding, and organize priorities for action. In a overwhelmed or rambling client, summarizing validates everything they have shared while providing clear, gentle structure to focus on high-priority clinical concerns (such as dizziness and acute pain) first. Abruptly dismissing social concerns (a) destroys trust. Giving marital advice (b) is outside nursing scope and non-therapeutic. Unstructured silence (d) fails to provide needed clinical guidance.",
    strategy: "Summarizing condenses key themes; focusing directs the conversation toward high-priority clinical concerns without dismissing other issues.",
    difficulty: "medium",
    tags: ["therapeutic-communication", "summarizing", "focusing", "clarification"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-010",
    categorySlug: "fundamentals",
    stem: "A multidisciplinary oncology team is preparing to discuss poor biopsy results indicating metastatic pancreatic adenocarcinoma with a client. According to the evidence-based SPIKES protocol for breaking bad news, what must the healthcare team determine first before disclosing the diagnostic findings?",
    choices: [
      {
        id: "a",
        text: "Assess the client's Perception by asking what they currently understand or suspect about their illness and diagnostic tests",
      },
      {
        id: "b",
        text: "Immediately present a statistical 5-year survival graph to ensure the client understands the numerical prognosis",
      },
      {
        id: "c",
        text: "Hand the family a palliative hospice care booklet before disclosing the histopathology results",
      },
      {
        id: "d",
        text: "Insist that all family members leave the room regardless of the client's personal and cultural preferences",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The SPIKES protocol consists of: S = Setting (privacy, seating, time); P = Perception (assessing what the client understands: 'What have you been told so far?'); I = Invitation (asking how much detail the client wants); K = Knowledge (delivering information in small chunks with warning shots); E = Empathy (addressing emotions); S = Strategy/Summary (collaborative next steps). Inquiring about the client's perception ('P') establishes where the client is psychologically, identifies unrealistic expectations or misinformation, and allows the clinician to tailor the disclosure appropriately. Blunt statistical dumps (b) induce shock. Handing out hospice brochures prematurely (c) bypasses disclosure and empathy. Forcing family out (d) violates autonomy.",
    strategy: "SPIKES protocol sequence: Setting -> Perception -> Invitation -> Knowledge -> Empathy -> Strategy. Always assess the client's baseline perception first.",
    difficulty: "medium",
    tags: ["therapeutic-communication", "spikes-protocol", "breaking-bad-news", "oncology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-011",
    categorySlug: "fundamentals",
    stem: "An adult son storms up to the nurses' station visibly agitated, red-faced, and shouting: 'My mother has been ringing her call bell for over 45 minutes for pain medication, and you lazy nurses are just gossiping! You don't care if people suffer!' Which initial response by the nurse demonstrates effective clinical de-escalation?",
    choices: [
      {
        id: "a",
        text: "Shout back that aggressive behavior will not be tolerated and immediately threaten to summon police security",
      },
      {
        id: "b",
        text: "Speak in a calm, controlled tone, maintain safe physical distance, and say: 'I see how distressed and angry you are that your mother is in pain. Let us walk into her room together right now so I can assess her.'",
      },
      {
        id: "c",
        text: "Defend the nursing staff by explaining that another client on the unit had a cardiac arrest and that his mother is not the only client",
      },
      {
        id: "d",
        text: "Turn around silently and lock the door to the medication room until he leaves the desk area",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Effective de-escalation requires: 1) maintaining a calm, unhurried, lower-volume voice; 2) maintaining safe physical positioning without cornering the person; 3) validating the emotion driving the outburst (distress over the mother's pain); and 4) taking immediate, constructive, client-focused action. Escalating with aggression (a) risks physical violence. Defensiveness and counter-complaining (c) invalidates his legitimate distress and escalates hostility. Abandoning the interaction (d) leaves the client in pain and fuels feelings of neglect.",
    strategy: "De-escalation principles: Stay calm, maintain safe distance, validate the underlying emotion, and direct energy toward immediate constructive action.",
    difficulty: "medium",
    tags: ["therapeutic-communication", "de-escalation", "conflict-resolution", "anger-management"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-012",
    categorySlug: "fundamentals",
    stem: "A family member sitting at the bedside of an unresponsive client actively dying from terminal hepatic encephalopathy whispers tearfully to the nurse, 'I don't know how I will ever go home to an empty house. My entire life is ending with theirs.' Which response by the nurse provides the most therapeutic grief support?",
    choices: [
      {
        id: "a",
        text: "'You must stay strong right now because your family is depending on you to hold everything together.'",
      },
      {
        id: "b",
        text: "'Time heals all wounds; with time, you will rebuild your life and find happiness again.'",
      },
      {
        id: "c",
        text: "'At least your partner lived a long, fulfilled life; many people die much younger.'",
      },
      {
        id: "d",
        text: "'The thought of going home to an empty house feels utterly overwhelming and heartbreaking. I am right here with you.'",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Therapeutic communication in anticipatory grief requires acknowledging the depth of sorrow, validating feelings of devastation without offering false solutions or clichés, and providing supportive presence ('The thought of going home to an empty house feels utterly overwhelming... I am right here with you'). Ordering someone to 'stay strong' (a) imposes guilt and suppresses legitimate mourning. Clichés like 'time heals all wounds' (b) or comparative minimization like 'at least they lived a long life' (c) dismiss raw emotional pain.",
    strategy: "Eliminate clichés ('time heals', 'at least...'). Choose the response that validates grief and offers compassionate presence.",
    difficulty: "easy",
    tags: ["therapeutic-communication", "grief-support", "end-of-life", "palliative-care"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-013",
    categorySlug: "fundamentals",
    stem: "A 4-year-old child admitted for severe dehydration requires an intravenous (IV) catheter insertion. The child is crying, hiding behind their mother, and clinging tightly. Which communication approach is developmentally appropriate for this preschooler?",
    choices: [
      {
        id: "a",
        text: "Explain the physiological mechanics of vein cannulation and intravascular rehydration using medical terminology",
      },
      {
        id: "b",
        text: "Tell the child firmly that big children do not cry and promise that the procedure will not hurt at all",
      },
      {
        id: "c",
        text: "Use a teddy bear to demonstrate placing a 'magic straw' that will give healthy water to the arm, let the child touch the tourniquet, and prepare them immediately before the procedure",
      },
      {
        id: "d",
        text: "Have four staff members enter the room without speaking and immediately restrain the child to get the needle inserted as fast as possible",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Preschool-age children (3 to 5 years) think concretely, exhibit magical thinking, and fear bodily injury and pain. Developmentally appropriate communication includes: using therapeutic play (demonstrating on a stuffed animal or doll), using simple, concrete, non-threatening language ('magic straw' or 'straw to give medicine/water'), allowing them to handle safe equipment (tourniquet, cotton ball), and timing preparation shortly before the procedure so anticipatory anxiety does not build. Complex explanations (a) exceed cognitive development; shaming and lying about pain (b) destroys trust; forceful silent restraint (d) causes severe psychological trauma.",
    strategy: "For preschoolers, use therapeutic play, concrete non-threatening terms, honest expectations, and prepare them immediately before procedures.",
    difficulty: "easy",
    tags: ["therapeutic-communication", "pediatrics", "preschooler", "developmental-stages", "therapeutic-play"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-014",
    categorySlug: "fundamentals",
    stem: "A nurse is conducting discharge teaching for an 80-year-old client with severe bilateral presbycusis (sensorineural age-related hearing loss). Which communication strategy should the nurse implement to maximize comprehension?",
    choices: [
      {
        id: "a",
        text: "Speak into the client's ear using an elevated, high-pitched voice at maximum volume",
      },
      {
        id: "b",
        text: "Direct all discharge teaching exclusively to the adult child while ignoring the client",
      },
      {
        id: "c",
        text: "Turn toward the computer screen to speak while completing the electronic documentation",
      },
      {
        id: "d",
        text: "Face the client directly in a well-lit room, minimize background ambient noise, speak at a normal rate in a lowered pitch, and verify comprehension using teach-back",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Presbycusis involves loss of high-frequency sound perception and speech discrimination. Effective interventions include: 1) facing the client directly so lip movements and facial expressions can be observed; 2) ensuring adequate lighting on the nurse's face without backlighting; 3) reducing ambient noise (shutting doors, turning off televisions); 4) lowering the vocal pitch rather than shouting (shouting distorts vowels and raises pitch, worsening comprehension); and 5) using the teach-back method to verify understanding. Shouting in a high pitch (a) exacerbates distortion. Bypassing the client (b) violates autonomy and dignity. Turning away (c) eliminates visual cues.",
    strategy: "For presbycusis: Lower your vocal pitch, face the client directly, reduce background noise, and avoid shouting.",
    difficulty: "easy",
    tags: ["therapeutic-communication", "presbycusis", "gerontology", "sensory-impairment", "teach-back"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-015",
    categorySlug: "fundamentals",
    stem: "A non-English-speaking client arrives in the emergency department with severe right lower quadrant abdominal pain. The client is accompanied by their 11-year-old bilingual child, who offers to translate the history and examination. What is the nurse's most appropriate action?",
    choices: [
      {
        id: "a",
        text: "Engage a certified professional medical interpreter (in-person or via secure telephonic/video translation) to conduct the assessment and consent process",
      },
      {
        id: "b",
        text: "Utilize the 11-year-old child to translate intimate medical questions and explain the emergency appendectomy risks",
      },
      {
        id: "c",
        text: "Rely on non-verbal pantomime and loud English words to bypass the need for an interpreter",
      },
      {
        id: "d",
        text: "Proceed to surgical intervention without obtaining informed consent because language barriers constitute an automatic waiver",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Using minor children or family members as interpreters violates healthcare privacy laws, compromises clinical accuracy, and places inappropriate emotional burdens on children. Minor children lack medical vocabulary, may misunderstand complex clinical issues, or filter sensitive information (such as sexual history, substance use, or severe diagnoses). Professional certified medical interpreters ensure confidential, culturally competent, and legally valid translation. Pantomime (c) is dangerous for complex clinical decisions. Language barriers do not waive consent requirements (d) when translation services are accessible.",
    strategy: "Standard of care: Always use a qualified, certified medical interpreter rather than minor children or family members.",
    difficulty: "easy",
    tags: ["therapeutic-communication", "medical-interpreter", "language-barriers", "ethics", "informed-consent"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-016",
    categorySlug: "fundamentals",
    stem: "A registered nurse is calling the on-call physician using the SBAR framework to report a post-operative client whose blood pressure has fallen to 82/46 mmHg with a heart rate of 128 beats/minute. After the nurse provides the Situation, Background, Assessment, and Recommendation, the physician verbally orders: 'Infuse 500 mL normal saline bolus STAT and administer IV ondansetron 4 mg.' Which action by the nurse is required before hanging up?",
    choices: [
      {
        id: "a",
        text: "Immediately disconnect the call and race to the medication room to hang the fluid bolus",
      },
      {
        id: "b",
        text: "Read back the complete order verbatim ('Infuse 500 mL normal saline bolus STAT and administer IV ondansetron 4 mg') and obtain explicit verbal confirmation from the physician",
      },
      {
        id: "c",
        text: "Document the telephone order in the chart and wait for the physician to physically countersign it in the morning before administering",
      },
      {
        id: "d",
        text: "Ask a second nurse in the hallway if they think 500 mL is an appropriate fluid volume",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Closed-loop communication and mandatory 'read-back' of verbal/telephone orders are key Joint Commission and international patient safety requirements to prevent medication errors. The receiving nurse must write down the order and read back the exact drug, dose, route, rate, and frequency verbatim, receiving clear verbal confirmation from the prescriber. Hanging up without read-back (a) creates critical error vulnerabilities. Delaying STAT emergency fluid resuscitation for hours awaiting an in-person signature (c) leads to clinical deterioration and hypovolemic shock. Consulting peers (d) does not replace verification with the prescriber.",
    strategy: "Patient safety standard: Always perform a closed-loop read-back of all verbal and telephone orders.",
    difficulty: "easy",
    tags: ["therapeutic-communication", "sbar", "closed-loop-communication", "patient-safety", "verbal-orders"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-017",
    categorySlug: "fundamentals",
    stem: "A staff nurse notices that an attending surgeon is about to make an incision for an open inguinal hernia repair without verifying the surgical site marking or initiating the universal protocol surgical 'time-out'. Which statement demonstrates assertive advocacy using the evidence-based CUS communication model?",
    choices: [
      {
        id: "a",
        text: "'I am Concerned, I am Uncomfortable, and this is a Safety issue because we have not verified the site mark or conducted our mandatory surgical time-out.'",
      },
      {
        id: "b",
        text: "'Doctor, you are acting recklessly and breaking every hospital rule in the book!'",
      },
      {
        id: "c",
        text: "Remain silent because the attending surgeon has decades of experience and questioning authority could cause friction in the operating room",
      },
      {
        id: "d",
        text: "Step out of the operating room to complain quietly to the charge nurse after the incision is already made",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The CUS communication framework is an evidence-based patient safety tool from TeamSTEPPS designed to cut through interprofessional hierarchies assertively: 'I am Concerned', 'I am Uncomfortable', 'This is a Safety issue'. Stating these exact trigger words clearly alerts the entire surgical team to an immediate halt before harm occurs. Hostile accusations (b) trigger defensiveness rather than collaboration. Passive silence (c) allows wrong-site surgery and fatal medical errors. Delayed complaining after the fact (d) fails the primary duty of bedside client advocacy.",
    strategy: "Remember the TeamSTEPPS CUS words: Concerned, Uncomfortable, Safety issue. Use them assertively to stop potential patient harm.",
    difficulty: "medium",
    tags: ["therapeutic-communication", "assertiveness", "cus-model", "teamstepps", "patient-advocacy"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-018",
    categorySlug: "fundamentals",
    stem: "During a busy change-of-shift handoff in the report room, an oncoming nurse loudly snaps at the off-going nurse in front of the entire team: 'Why are day-shift nurses so incompetent? You left two IV bags nearly dry and the morning chart looks like a complete mess!' Which response by the off-going nurse demonstrates professional, assertive communication?",
    choices: [
      {
        id: "a",
        text: "Yell back across the table: 'You have no idea how hard today was, and your shift leaves messes every single weekend!'",
      },
      {
        id: "b",
        text: "Hang one's head, apologize profusely for being incompetent, and burst into tears",
      },
      {
        id: "c",
        text: "Say nothing, complete the report silently, and intentionally omit the client's morning critical potassium value to retaliate",
      },
      {
        id: "d",
        text: "'I want to ensure all handoff details are accurate for client safety, but making personal accusations in public is unprofessional. Let us complete this handoff collaboratively, and then discuss your concerns privately.'",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Assertive communication respects both oneself and the other person by setting firm, clear boundaries without becoming aggressive or passive. Acknowledging the priority of client safety while calmly calling out inappropriate public hostility ('making personal accusations in public is unprofessional') and proposing a constructive private forum de-escalates public drama and addresses lateral violence effectively. Aggressive retaliatory shouting (a) creates toxic escalation. Passive submission (b) enables ongoing bullying. Passive-aggressive retaliation by withholding critical patient data (c) is dangerous malpractice.",
    strategy: "Assertive response to lateral hostility: Focus on client safety, label unprofessional behavior calmly and objectively, and move conflict resolution to a private setting.",
    difficulty: "medium",
    tags: ["therapeutic-communication", "lateral-violence", "assertiveness", "conflict-resolution", "professionalism"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-019",
    categorySlug: "fundamentals",
    stem: "Upon discharge following a complex 4-week hospitalization, a grateful client presents the primary nurse with a designer diamond wristwatch valued at $1,500 and says, 'You saved my life. I want you to have this so you remember me forever.' Which response by the nurse best adheres to professional boundary guidelines?",
    choices: [
      {
        id: "a",
        text: "Accept the expensive wristwatch graciously and promise to wear it on every hospital shift as a sign of appreciation",
      },
      {
        id: "b",
        text: "Take the watch, pawn it, and donate the cash proceeds to the nursing union without notifying anyone",
      },
      {
        id: "c",
        text: "'I am deeply touched by your kindness and grateful for your recovery, but professional standards and hospital policy do not permit me to accept individual personal gifts. A thank-you card or a note to our nursing team would mean the world to us.'",
      },
      {
        id: "d",
        text: "Berate the client harshly for attempting an unethical bribe and threaten to report them to hospital administration",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Accepting expensive personal gifts from clients or families breaches professional boundaries, blurs the therapeutic relationship, and creates conflicts of interest or perceived favoritism. The nurse must decline individual valuable gifts graciously, citing professional ethics and institutional policy, while validating the client's gratitude. Suggesting a thank-you note, card, or general contribution to the unit/hospital foundation redirects their appreciation appropriately. Accepting the gift (a and b) violates professional codes of conduct. Harshly scolding the client (d) punishes genuine gratitude and terminates the relationship destructively.",
    strategy: "Professional boundaries: Decline individual gifts of significant value gracefully by citing professional standards, and redirect gratitude to a card or team appreciation.",
    difficulty: "easy",
    tags: ["therapeutic-communication", "professional-boundaries", "gift-giving", "ethics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-TCOM-020",
    categorySlug: "fundamentals",
    stem: "On the morning of hospital discharge after an extensive 6-week admission for Guillain-Barré syndrome rehabilitation, a client expresses acute distress: 'I am terrified to leave. You nurses have become my family and protected me. I don't think I can survive at home without you.' In Hildegard Peplau's termination phase, which intervention should the nurse implement?",
    choices: [
      {
        id: "a",
        text: "Provide the client with one's personal home address and mobile number so they can text whenever they feel lonely",
      },
      {
        id: "b",
        text: "Acknowledge and validate feelings of separation anxiety, review the goals achieved and skills mastered during the stay, and review the outpatient follow-up and home-health support plan to promote independence",
      },
      {
        id: "c",
        text: "Agree that going home is too frightening and immediately lobby the medical team to delay discharge indefinitely",
      },
      {
        id: "d",
        text: "Tell the client briskly that they are being overly dramatic and that another acutely ill client is waiting for the bed",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "In Peplau's termination phase, separation anxiety, regression, or ambivalence frequently arise as the client transitions away from intensive professional support. The therapeutic response is to: 1) validate their feelings of anxiety as normal; 2) summarize the therapeutic gains, goals achieved, and coping mechanisms mastered; and 3) review the concrete transition plan (home health, outpatient therapy, community resources) to empower independence. Giving personal contact information (a) breaches professional boundaries and fosters unhealthy dependency. Unnecessarily extending hospitalization (c) prevents recovery. Dismissive comments (d) demonstrate abandonment and callousness.",
    strategy: "In Peplau's termination phase, validate normal separation anxiety, review therapeutic achievements, reinforce independence, and review community transition resources.",
    difficulty: "medium",
    tags: ["therapeutic-communication", "peplau", "termination-phase", "discharge-planning", "boundaries"],
    isFree: true,
  },
];
