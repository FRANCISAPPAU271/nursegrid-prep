import type { CourseModule } from "../types";

export const theTherapeuticRelationshipAndPsychiatricAssessment: CourseModule = {
  slug: "the-therapeutic-relationship-and-psychiatric-assessment",
  title: "The therapeutic relationship and psychiatric assessment",
  summary: "The nurse–patient relationship as the main instrument of mental health care: its phases, qualities and boundaries; the communication techniques that keep a patient talking and the blocks that end the conversation; responding to suicidal statements, delusions, anger and silence; communicating across language, hearing and literacy barriers; breaking bad news and working with the family — then the psychiatric history, the mental state examination domain by domain, excluding a physical cause, structured risk assessment and observation levels, the nursing process and care planning, and documentation and SBAR handover.",
  lessons: [
    {
      slug: "therapeutic-communication-and-the-nurse-patient-relationship",
      title: "Therapeutic communication and the nurse–patient relationship",
      minutes: 18,
      objectives: [
        "Describe the phases and essential qualities of the therapeutic nurse–patient relationship, distinguish it from a social relationship, and maintain professional boundaries around gifts, personal contact, self-disclosure and intimacy.",
        "Use therapeutic communication techniques — open questions, reflection, clarification, silence, summarising, offering self — and recognise the blocks that end a conversation, including false reassurance, advising, asking why and judging.",
        "Respond therapeutically to suicidal statements, delusions and hallucinations, anger, withdrawal and mania, and distinguish a culturally shared belief from a delusion.",
        "Communicate effectively across language, hearing, speech and literacy barriers, break bad news using a structured approach, respond to a family who ask you not to tell the patient, and map the family with a genogram and eco-map to find the carer.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The relationship is the treatment",
          paragraphs: [
            "A surgeon's instrument is the scalpel; the mental health nurse's instrument is herself. The <strong>therapeutic relationship</strong> is a purposeful, time-limited, patient-centred alliance in which the nurse uses her knowledge, skills and personality to help the patient understand his illness, feel safe, make decisions and recover. It differs from a friendship in every respect that matters: it exists for the patient's needs and not the nurse's, it has boundaries, it is planned and documented, and it ends. Hildegard <strong>Peplau</strong> described its phases. In the <strong>orientation</strong> phase the patient and nurse meet as strangers, roles and purpose are explained, trust begins and the problem is defined. In the <strong>working</strong> phase (identification and exploitation) the patient uses the relationship to explore feelings, test new behaviour, learn about his illness and work on goals. In the <strong>termination</strong> (resolution) phase gains are reviewed, feelings about ending are acknowledged and the patient moves on — a phase that must be planned from the first meeting and never allowed to happen by accident through transfer or discharge.",
            "The qualities that make the relationship work can all be learned. <strong>Genuineness</strong> — being real rather than performing a role. <strong>Empathy</strong> — understanding and communicating the patient's feeling from his point of view ('you sound frightened of going home'), which is different from <strong>sympathy</strong> (feeling sorry for him) and from reassurance. <strong>Unconditional positive regard</strong> and <strong>respect</strong> — accepting the person while not necessarily approving the behaviour, using his name and title, asking before touching, explaining before doing. <strong>Trust</strong>, built by consistency: doing what you said at the time you said. <strong>Hope</strong>, which the nurse holds for the patient until he can hold it himself. And <strong>self-awareness</strong>: knowing your own feelings, prejudices and triggers so that they do not run the interview — the nurse who grew up with an alcoholic father must notice what the drunk patient stirs in her.",
          ],
        },
        {
          type: "text",
          heading: "Boundaries — the fence that keeps the relationship safe",
          paragraphs: [
            "<strong>Professional boundaries</strong> are the limits that keep the relationship therapeutic and protect both people. The commonest tests on a Ghanaian ward are small. A grateful patient brings a <strong>gift</strong>: a small token of food or a card may be accepted graciously on behalf of the team if the facility allows it; money, expensive items or anything given to secure special treatment is declined with warmth and an explanation, and either way it is documented. A patient or relative asks for your <strong>personal telephone number</strong>: you give the ward or clinic number and explain that the team, not one nurse, is responsible for his care, so that he is never left depending on someone who is off duty. A patient declares love or makes a sexual approach: you name the boundary kindly and clearly, do not punish him for it, and tell the team, because it will recur with the next nurse. Any romantic or sexual relationship with a current patient is abuse of a vulnerable person and ends a career; so does borrowing money, trading, or using patients for errands.",
            "<strong>Self-disclosure</strong> is used sparingly and only when it serves the patient ('I also lost my mother; it took me time') — never to relieve your own feelings or shift the focus to you. Religion is often shared between nurse and patient and may be a resource, but preaching to patients, praying over a patient who did not ask, or telling a patient his illness is a spiritual failing is a boundary violation. Signs of <strong>over-involvement</strong> include visiting outside work, keeping secrets from the team, feeling that only you understand him, and giving him more time than any other patient. <strong>Transference</strong> (the patient treats you as a figure from his past — a mother, an abuser) and <strong>countertransference</strong> (your own feelings towards him, from rescue to disgust) are expected; they become problems only when they go unnoticed. Clinical supervision is where they are noticed.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MHN-0798.svg",
          alt: "Two columns of therapeutic communication. Blocks that end a conversation: false reassurance such as do not worry, everything will be fine; advising such as if I were you I would just leave him; asking why, which demands a defence; changing the subject; judging or minimising such as others are far worse off; and a string of closed questions. Openers that carry it on: open questions such as tell me what that has been like; reflecting such as you sound frightened of going home; clarifying such as when you say empty, what do you mean; silence; offering yourself such as I will sit with you for a while; and summarising. The test for any option is to ask what the patient can say next — if the honest answer is nothing, or just yes, it is a block however kind it sounds.",
          caption: "The examination test and the bedside test are the same: what can the patient say next? Reassurance, advice, 'why' and 'cheer up' leave him nothing to say.",
        },
        {
          type: "table",
          heading: "Techniques and blocks, with the words",
          columns: ["Technique", "Example", "The block it replaces"],
          rows: [
            ["<strong>Open question</strong>", "'Tell me about the last few weeks.' 'What has that been like for you?'", "A string of closed questions ('Are you sleeping? Eating? Sad?') that yields yes and no"],
            ["<strong>Reflecting feeling</strong>", "'You sound exhausted and angry at the same time.'", "Minimising: 'Others have it worse.' 'It is not that bad.'"],
            ["<strong>Clarifying</strong>", "'When you say they are after you, who do you mean?'", "Assuming you understood; asking 'why?' ('Why do you think that?'), which demands a defence"],
            ["<strong>Paraphrasing and summarising</strong>", "'So since your husband left, you stopped going to the market, you cannot sleep, and this week you began to feel life is not worth living.'", "Changing the subject: 'Anyway, have you eaten today?'"],
            ["<strong>Silence</strong>", "Wait. Let her fill it. Count to ten before you speak.", "Filling every pause; finishing her sentences"],
            ["<strong>Offering self</strong>", "'I will sit with you for a while. You do not have to talk.'", "False reassurance: 'Do not worry, everything will be fine.'"],
            ["<strong>Making an observation</strong>", "'I notice you have been standing by the door all morning.'", "Interpreting or labelling: 'You are attention-seeking.'"],
            ["<strong>Presenting reality and voicing doubt</strong>", "'I do not hear the voices, but I can see they frighten you.' 'I find that hard to believe — tell me more.'", "Agreeing with the delusion to keep the peace, or arguing him out of it"],
            ["<strong>Giving information</strong>", "'Haloperidol can make the neck muscles stiffen; if that happens tell us at once, we can treat it.'", "Advising: 'If I were you I would just take the tablets.'"],
            ["<strong>Validating</strong>", "'Anyone who had been through that would be frightened.'", "Judging: 'A Christian should not think like that.'"],
          ],
        },
        {
          type: "text",
          heading: "The hard sentences and what to say",
          paragraphs: [
            "<strong>'Everyone would be better off without me.' 'Soon I will disappear and no one will notice.' 'I am tired of everything.'</strong> These are suicidal statements until proved otherwise. The therapeutic response is not 'Do not say that, your children need you' — that closes the door. It is direct and calm: 'It sounds as if you are thinking of ending your life. Are you?' Asking directly does not plant the idea; it tells the patient that you can bear to hear the answer. Then stay, assess (Lesson 2.2) and act. A depressed patient who becomes suddenly calm and cheerful after weeks of hopelessness may have decided to die; that is a reason for closer observation, not relief.",
            "<strong>'The nurses are putting poison in my food.' 'The voices say you are one of them.'</strong> You do not argue — a delusion is by definition not shifted by argument, and arguing makes you one of the persecutors. You do not agree — agreeing confirms the belief and destroys trust when the patient recovers. You acknowledge the feeling, present reality simply and once, and move to what you can do: 'I can see how frightening that is. I am not poisoning you, and I will stay here while you eat if that helps. What do the voices say?' Asking <strong>what the voices say</strong> is essential, because voices that command harm to self or others change the risk assessment.",
            "The <strong>angry patient</strong> needs space, a calm low voice, acknowledgement ('You are angry that you were kept waiting; I would be too'), choices rather than orders, and no audience (Lesson 6.2). The <strong>withdrawn or mute patient</strong> is not ignored because he does not respond: short, regular, predictable contact — 'I am here for the next ten minutes; you do not have to speak' — builds trust where questioning fails. The <strong>manic patient</strong> cannot follow a long explanation; use short sentences, one instruction at a time, a firm calm manner, and avoid being drawn into jokes or arguments. The patient who asks <strong>'Do you believe me?'</strong> deserves honesty: 'I believe that you are experiencing it and that it is real to you. I do not experience it myself.'",
            "A <strong>cultural belief is not a delusion</strong>. A belief that illness was sent by a rival through juju, that a dead grandmother visits in dreams, or that a pastor can heal is shared by the patient's community and is not evidence of psychosis. A delusion is fixed, false, held with complete conviction against evidence and <strong>not shared by the person's culture or religious group</strong> — the belief that the television newsreader sends her personal coded instructions, or that her own thoughts are being broadcast from her head. When in doubt, ask the family whether others in the community believe what the patient believes.",
          ],
        },
        {
          type: "text",
          heading: "Communicating across barriers",
          paragraphs: [
            "<strong>Language.</strong> Ghana has many languages and the psychiatric interview depends on nuance. Use a trained interpreter or a staff member who speaks the language, not the patient's child and not, for sensitive matters, the relative who may be part of the problem; speak to the patient and not to the interpreter, in short sentences, and check understanding by <strong>teach-back</strong> — 'so that I know I explained it well, tell me how you will take the tablets' — because 'do you understand?' reliably produces yes. <strong>Hearing loss and deafness.</strong> Face the patient with the light on your face, do not shout, reduce background noise, write key points, and arrange a sign-language interpreter for anything important; deafness is often mistaken for confusion or psychosis. <strong>Aphasia after stroke.</strong> Give time, use yes/no questions, gestures and picture boards, and never speak about the patient over his head because he cannot answer. <strong>Low literacy.</strong> Plain language, pictures, demonstration and return demonstration; a pictorial dosing chart with the sun and the moon beats a written one.",
            "<strong>Person-first, plain language.</strong> 'A woman with bipolar disorder', 'a man with alcohol dependence', 'a patient who has epilepsy' — not 'a bipolar', 'an alcoholic', 'an epileptic'. Avoid jargon with patients and families ('your mood will be stabilised by a mood stabiliser' means nothing to a trader) and avoid labels in the notes ('manipulative', 'attention-seeking', 'difficult'), which follow the patient from ward to ward and change how the next nurse treats him.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FAM-1722.svg",
          alt: "Breaking bad news in a structure that works: find a private place and sit down; ask what she already understands; ask how much she wants to know; give a warning shot, then the news in plain words; stop talking and let the silence work; respond to the feeling before the facts; agree what happens next and say you will return — most of it is asking and waiting rather than telling. A second panel on the family who say please do not tell her advises neither agreeing nor overruling: ask what they are afraid will happen if she is told, then explain that you will not lie to her and equally will not force information on her but will follow her own questions, which answers the thing they actually feared.",
          caption: "The structure works for a diagnosis of schizophrenia or dementia as well as for cancer: ask before you tell, warn before the news, answer the feeling before the facts, and never promise a family that you will lie.",
        },
        {
          type: "text",
          heading: "Breaking bad news, and the family who ask you not to",
          paragraphs: [
            "Telling a young man that he has schizophrenia, a mother that her son's cannabis psychosis will need long treatment, or a family that their father has dementia and will not recover is bad news, and the structure is the same as for any other. <strong>Prepare</strong>: a private place, sitting down, time, the facts straight, a tissue within reach. <strong>Ask</strong> what the person already understands and how much she wants to know — some want everything, some want their brother to be told first; both are her right. <strong>Warn</strong> ('I am afraid the results are not what we hoped'), then give the news in <strong>plain words</strong> without jargon or euphemism, then <strong>stop</strong> and let silence work. <strong>Respond to the feeling</strong> before the facts: tears, anger and denial are not problems to correct but feelings to acknowledge. <strong>Agree what happens next</strong>, write it down, and say when you will return — and return.",
            "'Nurse, please do not tell her.' The family who ask this love the patient and are usually afraid she will give up or that they will have to watch her suffer. Neither agree nor overrule. Ask what they fear will happen if she knows; then explain that you will not lie to her and will not force information on her either, but will follow her questions and tell her what she asks to know. Most families accept this, because it answers the fear underneath the request. A capable adult has a right to information about her own illness; it is her right to decline it, and nobody else's to withhold it.",
          ],
        },
        {
          type: "text",
          heading: "Working with the family — the real carers",
          paragraphs: [
            "In Ghana the family admits, feeds, pays, supervises medication and takes the patient home; whoever discharges a patient without having worked with the family has planned for a patient who does not exist. The family needs <strong>psychoeducation</strong>: what the illness is, that nobody caused it, what the medicines do and their side effects, the early warning signs of relapse and what to do about them, and how to respond to symptoms ('do not argue with the voices; tell him you can see he is frightened'). Families with <strong>high expressed emotion</strong> — frequent criticism, hostility or emotional over-involvement — have relatives who relapse more often; family sessions that lower criticism, lower the temperature at home and share the load are among the best-proven interventions in schizophrenia. <strong>Carer burden</strong> is real: the mother who has nursed a psychotic son for ten years may be depressed, broke and physically ill herself, and she will not say so unless asked.",
            "Two drawings answer questions a list of relatives never will. A <strong>genogram</strong> — squares for men, circles for women, lines for partnerships, the patient shaded — shows the structure of the family and any illness running through it. An <strong>eco-map</strong> puts the patient in a central circle with lines to church, siblings, clinic, employer and landlord, drawn thick for strong support, thin or dashed for weak contact, and marked where a relationship is draining her. The person who signs, the person who pays, the person who nurses her at home and the person who decides may be four different people, and a plan built on the wrong one fails within a week. The question that finds the carer is not 'who is your next of kin?' but <strong>'when you go home, who will be with you and who will give you your tablets?'</strong>",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FAM-1688.svg",
          alt: "Mapping the family before planning care. On the left a genogram: squares for males and circles for females joined by a horizontal line for a partnership, three children below, the patient marked as a shaded circle — structure, blood and inheritance. On the right an eco-map: the patient as a central circle with lines to her church, her daughter, the clinic and her landlord; thick lines for strong support to the daughter and church, a thin dashed grey line for weak contact with the clinic, and a red dashed line to the landlord for a draining relationship. A panel warns that the person who signs, who pays, who nurses her at home and who decides may be four different people, and the one question that finds the carer is: when you go home, who will be with you?",
          caption: "Draw the family before you plan the care. The eco-map shows you the church that will visit, the daughter who will give the depot reminder and the landlord who is about to evict — all of which decide whether the plan survives.",
        },
        {
          type: "list",
          heading: "Ending well — termination and transfer",
          items: [
            "Say from the first meeting that the relationship will end at discharge or transfer, so that ending is expected rather than experienced as abandonment.",
            "Review together what has been achieved, what the patient has learned about his illness and warning signs, and what he will do with the plan.",
            "Acknowledge feelings about ending — sadness, anxiety, anger, relief — in both of you, and expect some patients to relapse slightly or test the relationship as the end approaches.",
            "Hand over properly: the CPN, the CHPS officer or the clinic that will continue care should know the person, not only the diagnosis.",
            "Do not continue the relationship privately after discharge — no personal visits, calls or gifts; the patient now belongs to his own life and to the community team.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Choosing 'the most therapeutic response' in an examination",
          body: "The right option usually (1) keeps the patient talking — an open question or a reflection; (2) names the feeling rather than the fact; (3) contains no reassurance, advice, judgement or 'why'; (4) neither agrees with nor argues against a delusion, and asks what the voices say; (5) asks directly about suicide when a statement hints at it; (6) offers presence — 'I will stay with you' — rather than a solution. The wrong options are kind, brisk and final: 'Do not worry', 'You should', 'Why did you', 'Think of your children', 'Nobody is poisoning you, that is your illness talking'.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Looking after the instrument",
          body: "The nurse who is the instrument of care needs maintenance. Clinical supervision — a regular, confidential conversation with a senior colleague about your patients and your reactions to them — is where countertransference, over-involvement and burnout are caught early. Debrief as a team after a suicide, an assault or a death. Notice the patient you dread and the patient you favour; both are information. And keep the boundary that protects you most: the ward telephone, not your own.",
        },
      ],
      keyPoints: [
        "The therapeutic relationship is purposeful, patient-centred, boundaried and time-limited, moving through orientation, working and termination phases; its tools are genuineness, empathy, respect, consistency, hope and self-awareness.",
        "Boundaries protect both people: decline money and expensive gifts, give the ward number rather than your own, use self-disclosure only for the patient's benefit, never preach, never become intimate with a patient, and take over-involvement and countertransference to supervision.",
        "Therapeutic techniques keep the patient talking — open questions, reflection, clarification, silence, summarising, offering self, presenting reality; blocks end the conversation — false reassurance, advice, 'why', changing the subject, judging, minimising and strings of closed questions.",
        "Respond to 'everyone would be better off without me' by asking directly about suicide; respond to delusions and voices by neither agreeing nor arguing, acknowledging the fear, presenting reality once and asking what the voices say; sudden calm in a hopeless patient is a danger sign.",
        "A belief shared by the patient's culture or church is not a delusion; a delusion is fixed, false, unshakeable and out of keeping with the person's culture — ask the family what others believe.",
        "Use trained interpreters not children, face the deaf patient and write, give the aphasic patient time and yes/no questions, use pictures for low literacy, confirm with teach-back, and use person-first plain language in speech and in the notes.",
        "Break bad news by asking before telling, warning, plain words, silence, feeling before facts and an agreed next step; never promise a family you will lie to the patient; map the family with a genogram and eco-map and find the carer by asking who will be with her at home.",
      ],
      quiz: { keywords: ["therapeutic communication","therapeutic relationship","therapeutic","silence","boundar","phone number","telephone number","gift","rapport","reassur","clarif","listen","interpreter","language","deaf","hearing loss","most therapeutic","which response","response by the nurse","should the nurse say","respect","teach back","promise","disappear","better off without","no one would notice","cultural beliefs","culture and delusion","communicating with","communicat","plain language","person first","inclusive language","aphasi","breaking bad news","bad news","truth telling","a direct question from the patient","responding to a delusion","consent and the anxious patient","health literacy","sign language","accepting gifts","professional boundaries"] },
    },
    {
      slug: "the-mental-state-examination-risk-assessment-and-care-planning",
      title: "The mental state examination, risk assessment and care planning",
      minutes: 18,
      objectives: [
        "Take a psychiatric history including collateral information and conduct a mental state examination, describing appearance, behaviour, speech, mood and affect, thought form and content, perception, cognition, insight and judgement in correct terms.",
        "Recognise the features that point to a physical cause of new psychiatric symptoms and list the baseline physical assessment and investigations that exclude it.",
        "Assess risk of suicide, violence, self-neglect and vulnerability using a structured sequence, assign and document a level of observation, and reassess at the points of greatest danger.",
        "Apply the nursing process to a mental health patient — nursing diagnoses, measurable patient-centred goals, individualised interventions and evaluation — and document and hand over using accurate, objective, contemporaneous records and SBAR.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The psychiatric history — from the patient and from someone who knows him",
          paragraphs: [
            "Assessment begins before the first question: the setting should be private but safe — you sit nearer the door than the patient, with no scissors or heavy objects within reach and a colleague aware of where you are — and it begins with the ordinary courtesies of name, purpose and time available. The <strong>presenting complaint</strong> is recorded in the patient's own words and in the informant's, because they often differ: 'I am fine, my family brought me' beside 'he has not slept for five nights and is preaching in the street'. The <strong>history of the presenting illness</strong> traces onset, duration, course and what has already been tried — the camps, the herbs, the last tablet. Then the <strong>past psychiatric history</strong> (admissions, diagnoses, treatments and what worked), <strong>past medical history</strong> (epilepsy, head injury, HIV, thyroid disease, recent fever), <strong>drug and alcohol history</strong> for every patient (what, how much, how often, last dose), <strong>family history</strong> of mental illness, suicide and substance use, and <strong>personal history</strong>: birth and development, school, work, relationships, children, religion, legal trouble, and the <strong>premorbid personality</strong> — what was he like before? Finally the <strong>social history</strong>: where and with whom he lives, income, who cares.",
            "Because many patients lack insight, cannot give a coherent account or conceal what matters, a <strong>collateral history</strong> from a relative, friend, pastor or employer is not optional. Ask the relative separately, with the patient's knowledge where possible; ask what changed and when; ask what the family believes caused it and what they fear.",
          ],
        },
        {
          type: "table",
          heading: "The mental state examination — what you observe and ask, domain by domain",
          columns: ["Domain", "What to record", "Terms and examples"],
          rows: [
            ["<strong>Appearance and behaviour</strong>", "Dress, hygiene, self-neglect, weight, scars, injection marks; eye contact, rapport, psychomotor activity, posture, abnormal movements, response to unseen stimuli", "Agitated, retarded, restless (akathisia), posturing, tremor, tardive movements, 'appears to be listening to something'"],
            ["<strong>Speech</strong>", "Rate, volume, quantity, tone, coherence", "Pressured and loud (mania); slow, soft, monosyllabic (depression); poverty of speech; mute; slurred (intoxication, lithium toxicity)"],
            ["<strong>Mood and affect</strong>", "<strong>Mood</strong> is what the patient tells you (subjective, in his words); <strong>affect</strong> is what you observe (objective) — its range, intensity, stability and congruence with content", "Mood 'low', 'empty', 'on top of the world'. Affect blunted, flat, labile, irritable, anxious, incongruent (laughing while describing a death)"],
            ["<strong>Thought form</strong>", "How thoughts are connected", "Flight of ideas with pressure (mania); loosening of associations, derailment, word salad (schizophrenia); thought block; poverty of thought; perseveration; circumstantial"],
            ["<strong>Thought content</strong>", "What he thinks about: delusions and their type, overvalued ideas, obsessions, preoccupations, and always suicidal and homicidal ideas", "Persecutory, grandiose, reference, control (passivity), thought insertion/withdrawal/broadcast, nihilistic, guilt, jealousy, religious; obsessions recognised as his own and resisted"],
            ["<strong>Perception</strong>", "Hallucinations by modality, illusions, depersonalisation and derealisation", "Auditory (second or third person, running commentary, command) typical of schizophrenia; <strong>visual</strong> suggests an organic cause; tactile (insects on skin) in alcohol withdrawal and stimulant use; olfactory in temporal lobe epilepsy"],
            ["<strong>Cognition</strong>", "Level of consciousness, orientation in time, place and person, attention and concentration, short- and long-term memory, abstraction; a formal tool where available", "Clouded consciousness and inattention point to delirium; serial sevens or months of the year backwards; three-word recall; a locally adapted screening test for dementia"],
            ["<strong>Insight and judgement</strong>", "Insight in three steps: does he accept that something is wrong, that it is a mental illness, and that treatment can help? Judgement: what would he do in a given situation, and what has he actually done", "'Full', 'partial' or 'absent' insight, with the evidence; poor judgement shown by walking into traffic, giving away the house, stopping medication the day after discharge"],
          ],
        },
        {
          type: "text",
          heading: "Using the words precisely",
          paragraphs: [
            "A <strong>delusion</strong> is a fixed, false belief, held with complete conviction, not amenable to reason and out of keeping with the person's cultural and religious background. A <strong>hallucination</strong> is a perception in the absence of any external stimulus — hearing a voice in a silent room. An <strong>illusion</strong> is the misperception of a real stimulus — a dressing gown on the door seen as a man in the dark; illusions are common in delirium and in frightened children and are not psychotic in themselves. An <strong>obsession</strong> is a recurrent, intrusive thought or image that the person recognises as his own and tries to resist; a <strong>compulsion</strong> is the act performed to neutralise it. <strong>Overvalued ideas</strong> are held with less than delusional intensity and are understandable from the person's background.",
            "Culture decides where the line falls. A market woman who believes her rival sent sickness through a shrine holds a belief her community shares; a man who believes the radio announcer is reading his thoughts aloud, that his neighbour has replaced his wife with a double, or that his organs have rotted away holds delusions — of reference, of misidentification and of nihilism — that no community shares. Document behaviour and words rather than conclusions: 'states that the food is poisoned by the nurses and has refused all meals for 24 hours; drank water from a sealed sachet' is evidence; 'paranoid' is a label.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MEN-3180.svg",
          alt: "New psychiatric symptoms: exclude the body first. Red flags are sudden onset, a fluctuating course, clouded consciousness, age over 40 and abnormal observations. Causes common in Ghana by group: infection — cerebral malaria, typhoid, meningitis, HIV, sepsis; metabolic — hypoglycaemia, low sodium, uraemia, liver failure; endocrine — thyroid disease and steroid treatment; substances — alcohol or benzodiazepine withdrawal, cannabis, tramadol; neurological — head injury, the post-ictal state, stroke, a space-occupying lesion. Check glucose, temperature and oxygen saturation every time; acute confusion is a physical emergency until proved otherwise.",
          caption: "Before anyone is called 'psychiatric' the body has been examined. Sudden onset, fluctuation, clouding, first illness after 40, visual hallucinations and abnormal vital signs mean a physical cause until proved otherwise — and glucose, temperature and saturation are checked every time.",
        },
        {
          type: "text",
          heading: "Exclude the body first — physical mimics and diagnostic overshadowing",
          paragraphs: [
            "A proportion of patients labelled 'psychiatric' at the gate have a physical illness that presents through the mind, and in Ghana the list is long: cerebral malaria, typhoid and meningitis presenting as confusion and agitation; HIV presenting as depression, psychosis or dementia; hypoglycaemia in the diabetic who took his insulin and skipped breakfast; hyponatraemia; uraemia and liver failure; thyrotoxicosis presenting as anxiety or mania and hypothyroidism as depression; steroid treatment causing mania or psychosis; alcohol or benzodiazepine withdrawal; cannabis and tramadol; head injury, a post-ictal state after an unwitnessed seizure, stroke and tumours. The clues are a <strong>sudden onset, a fluctuating course, clouded consciousness or inattention, a first episode after the age of 40 with no psychiatric history, visual or tactile hallucinations, neurological signs and abnormal vital signs</strong>. The first response to acute confusion is to check glucose, temperature, oxygen saturation and the other observations and to call the doctor — not to give haloperidol.",
            "Every new patient therefore gets a <strong>physical examination</strong> and <strong>baseline investigations</strong> appropriate to the setting: full blood count, malaria test, blood glucose, urea and electrolytes, liver and thyroid function, urinalysis, a pregnancy test in women of childbearing age, HIV testing with consent, a urine drug screen where available, and an ECG before antipsychotics in older patients and those with heart disease. Weight, waist, blood pressure and glucose at baseline are the start of the metabolic monitoring that antipsychotics require. And on every ward, remember <strong>diagnostic overshadowing</strong>: the patient with schizophrenia who says his chest hurts has a chest examination, an ECG and a doctor, not a note that he is 'somatising'.",
          ],
        },
        {
          type: "text",
          heading: "Risk assessment — structured, direct, repeated",
          paragraphs: [
            "Risk is assessed in six domains: <strong>suicide and self-harm</strong>; <strong>violence to others</strong> (past violence is the strongest predictor, with command hallucinations, persecutory delusions about a specific person, intoxication, and threats); <strong>self-neglect</strong> (not eating or drinking, exposure, untreated physical illness — the commonest cause of death in severe depression and catatonia in our setting); <strong>vulnerability and exploitation</strong> (sexual exploitation of a disinhibited manic woman, theft from a confused elderly man, a psychotic patient wandering into traffic); <strong>absconding</strong>; and <strong>fire and accident</strong>. Factors are <strong>static</strong> (sex, age, past attempts, family history, chronic illness) or <strong>dynamic</strong> (hopelessness, intoxication, insomnia, recent loss, access to means, a recent discharge), and it is the dynamic ones that nursing changes.",
            "For suicide, ask <strong>in order</strong>: thoughts ('Have things been so bad that you have thought of ending your life?'), plan ('Have you thought about how?'), means ('Do you have access to it?' — pesticide at home, tablets, a rope, a weapon), intent and timing ('When? What has stopped you so far?'), and protective factors (children, faith, a reason to live). A plan with available means and a set time is the highest risk. Asking directly does not plant the idea; <strong>removing the means saves lives</strong>. Document what you asked, what the patient said in his own words, the level of risk you judged, what you did and whom you told. Risk is <strong>dynamic</strong>: reassess after any change in mental state, after bad news, after a family visit that went wrong, before and after leave, before discharge, and in the <strong>first week after discharge</strong>, which is the most dangerous week of all.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-BEH-3005.svg",
          alt: "Assessing suicide risk: ask in this order. One, thoughts — are you thinking of ending your life? Two, plan — have you thought about how? Three, means — do you have access to what you would use? Four, intent and timing — when, and what has stopped you so far? A plan with available means and a set time is the highest risk. Asking directly does not plant the idea; removing the means saves lives.",
          caption: "Thoughts, plan, means, intent. The sequence is the same on a psychiatric ward, a medical ward and a CHPS compound, and it ends with the question that protects: 'what has stopped you so far?'",
        },
        {
          type: "table",
          heading: "Levels of observation",
          columns: ["Level", "What it means", "Typical indication", "Documentation"],
          rows: [
            ["<strong>General</strong>", "Whereabouts known at all times; checked at least hourly; present at meals and medication", "Settled patients; low risk", "Routine notes each shift"],
            ["<strong>Intermittent</strong>", "Checked at set intervals of 15–30 minutes, varied so they cannot be predicted", "Moderate risk — some suicidal thoughts without a plan; mild agitation; new admission under assessment", "Each check recorded with time, location, behaviour and signature"],
            ["<strong>Within eyesight</strong>", "Continuously in view of a named nurse, including in the bathroom with dignity preserved", "Serious suicidal intent or recent attempt; command hallucinations to harm; high risk of violence or absconding", "Named nurse per period; handover of observation face to face; review by the doctor at least daily"],
            ["<strong>Within arm's length</strong>", "One nurse, sometimes two, within reach at all times, awake and alert", "Imminent risk — the patient who has just been stopped from hanging himself; severe self-neglect with refusal of all fluids", "Continuous record; never left to one nurse for more than two hours without relief; stepped down by decision, not by drift"],
          ],
        },
        {
          type: "text",
          heading: "The nursing process in mental health",
          paragraphs: [
            "The nursing process gives structure to a specialty in which the problems are behaviour and experience. <strong>Assessment</strong> gathers subjective data (what the patient and family say, quoted) and objective data (what you observe, measure and find in the record). <strong>Nursing diagnosis</strong> names a human response the nurse can treat, in the form problem — related to — as evidenced by: 'risk for suicide related to hopelessness and recent bereavement, as evidenced by statements that life is not worth living and a plan to take pesticide'; 'disturbed sensory perception (auditory) related to psychosis as evidenced by responding to unseen voices and covering ears'; 'self-care deficit related to psychomotor retardation as evidenced by not bathing for one week'; 'imbalanced nutrition, less than body requirements, related to delusion that food is poisoned'; 'impaired social interaction'; 'ineffective coping'; 'insomnia'; 'caregiver role strain' for the mother. The medical diagnosis (schizophrenia, major depression) belongs to the doctor; the nursing diagnosis is what you will act on this shift.",
            "<strong>Planning</strong> sets goals that are <strong>SMART</strong> and written as what the patient will do: not 'patient will feel better' but 'patient will eat at least half of each meal from sealed packets or food brought by his mother within 48 hours'; 'patient will inform a nurse when she has thoughts of harming herself, every shift, for the next 72 hours'; 'patient will state three early warning signs of relapse and one action for each before discharge'. Goals are agreed with the patient wherever possible — a goal decided about him is not his. <strong>Implementation</strong> is the nursing care: safety and observation, the therapeutic relationship, medication and side-effect monitoring, physical care, structured activity, psychoeducation, family work and liaison. <strong>Evaluation</strong> asks on the date set whether the goal was met, partly met or not met, and why — and the cycle goes round again. An <strong>individualised plan</strong> is one that would not fit the patient in the next bed: it uses his words, his strengths (his faith, his trade, his sister), his triggers and his wishes.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PFC-0639.svg",
          alt: "The nursing process drawn as a cycle: assess (collect the data), diagnose (name the problem), plan (set the goal), implement (carry it out), evaluate (did it work?) and reassess, returning to the beginning. Skipping assessment makes everything after it a guess. A nursing diagnosis names a response the nurse can treat, such as risk of falls related to weakness and poor vision; a medical diagnosis names the disease and is treated by the doctor, such as stroke or pneumonia.",
          caption: "Assess, diagnose, plan, implement, evaluate — then back to assessment, because a mental state changes by the hour. The nursing diagnosis is the response you can treat tonight; the medical diagnosis is the doctor's.",
        },
        {
          type: "text",
          heading: "Documentation and handover",
          paragraphs: [
            "In mental health the record is clinical tool, legal document and evidence that rights were respected. Write <strong>contemporaneously</strong> (at the time or as soon after as possible, with date and time), <strong>factually and objectively</strong>, quoting the patient's words rather than interpreting them, describing behaviour rather than labelling it ('paced the corridor for 40 minutes, shouting at a person not present' rather than 'disturbed'), legibly, in ink, signed with name and designation, with errors struck through with a single line and initialled — never erased. Record every risk assessment, every observation check, every refusal of medication and what you did about it, every use of restraint with its authorisation and timing, every disclosure of information and why, and every conversation with a relative. What is not written was not done, and in a tribunal hearing or an inquest it will be assumed not to have happened.",
            "Handover is where risk is most often lost. Use <strong>SBAR</strong>: <strong>Situation</strong> — who and what is wrong now; <strong>Background</strong> — diagnosis, admission status (voluntary or detained, and when the order expires), medication, recent events; <strong>Assessment</strong> — mental state, risk level, observation level, physical observations; <strong>Recommendation</strong> — what you want the next shift or the doctor to do and by when. Hand over observation of a high-risk patient face to face at the bedside, never in a corridor. A handover that describes but does not request is a story; end it with a request and a time.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MAN-0864.svg",
          alt: "Structured handover using SBAR. S for situation: who, where and what is wrong right now. B for background: the context needed to understand it. A for assessment: the numbers and what you think is happening. R for recommendation: say what you want and by when. The R is the part most often left out and the part that gets the patient seen; never end a handover with only a description.",
          caption: "For a psychiatric patient the B includes legal status and when the order expires, the A includes mental state, risk and observation level, and the R says what you want done and by when.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Three moments when risk is missed",
          body: "(1) The hopeless patient who becomes suddenly calm, cheerful and co-operative — he may have made his decision; reassess rather than relax. (2) The patient admitted as 'psychiatric' whose confusion began yesterday, who is 55, who has a temperature of 38.6 °C and is picking at the bedclothes — this is delirium, a physical emergency, and sedation without a cause found treats the ward's difficulty, not her illness. (3) The week after discharge — the highest-risk period for suicide; the follow-up appointment within seven days and the CPN's first visit are safety interventions, not administration.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Assessment facts that recur",
          body: "Mood is subjective (his words), affect is objective (your observation). Visual hallucinations suggest an organic cause; auditory hallucinations are typical of schizophrenia; tactile hallucinations suggest alcohol withdrawal or stimulants. Insight has three steps — ill, mentally ill, treatment helps. A delusion is fixed, false and out of keeping with culture; a cultural belief is not a delusion. Suicide risk is asked in order: thoughts, plan, means, intent, protective factors; a plan with means and a time is highest risk; asking does not plant the idea. New confusion is physical until proved otherwise: check glucose, temperature and saturation. A nursing diagnosis is problem, related to, as evidenced by; a goal is specific, measurable, achievable, relevant, time-bound and written as what the patient will do.",
        },
      ],
      keyPoints: [
        "A psychiatric history covers the presenting complaint in the patient's and informant's words, past psychiatric and medical history, drugs and alcohol with the last dose, family and personal history, premorbid personality and social circumstances — and always a collateral history, because insight is often absent.",
        "The mental state examination describes appearance and behaviour, speech, mood (subjective) and affect (objective), thought form and content, perception, cognition, insight and judgement, in precise terms and with behaviour and quotations rather than labels.",
        "A delusion is a fixed false belief out of keeping with the person's culture; a hallucination is a perception without a stimulus; an illusion is a misperceived real stimulus; a belief shared by the patient's community is not a delusion.",
        "New psychiatric symptoms with sudden onset, fluctuation, clouded consciousness, first episode after 40, visual hallucinations or abnormal observations have a physical cause until proved otherwise — check glucose, temperature and saturation, examine, investigate, and never let diagnostic overshadowing stop a physical work-up.",
        "Assess risk in six domains, ask about suicide in order — thoughts, plan, means, intent, protective factors — remove the means, document verbatim, set an observation level from general to arm's length, and reassess after any change, before leave and discharge, and in the first week after discharge.",
        "The nursing process turns assessment into care: nursing diagnoses in problem–related to–as evidenced by form, SMART goals written as what the patient will do and agreed with him, individualised interventions that use his strengths, and evaluation on a date.",
        "Records are contemporaneous, factual, objective, quoted, signed and complete for every risk assessment, observation, refusal, restraint and disclosure; handover uses SBAR including legal status, risk and observation level, and ends with a request and a time.",
      ],
      quiz: { keywords: ["mental state","heading of affect","insight","hallucinat","delusion","orientat","suicide risk","assessing suicide","asking about suicide","documenting risk","risk assessment after","delirium versus","diagnostic overshadowing","organic cause","physical mimics","distinguishing delirium","first response to acute confusion","sudden confusion in an older","new psychiatric","no psychiatric history","visual hallucination","nursing process","nursing diagnosis","measurable goal","individualised care planning","subjective and objective","principles of documentation","timing of documentation","retrospective documentation","structured handover","sbar","absconding","cannot be found","observation after a suicide","edinburgh","screening tool","depression screening","command hallucination","culture and delusion","negative symptom","herbal and self medication history","documenting herbal use","medication reconciliation","assessing alcohol use","alcohol screening","safety planning","features of dependence"] },
    },
  ],
};
