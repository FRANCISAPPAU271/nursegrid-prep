import type { CourseModule } from "../types";

export const anxietyTraumaGriefAndDisordersOfEatingAndPersonality: CourseModule = {
  slug: "anxiety-trauma-grief-and-disorders-of-eating-and-personality",
  title: "Anxiety, trauma, grief, and disorders of eating and personality",
  summary: "The stress response and the anxiety disorders sorted by the object of the fear — generalised anxiety, panic, phobias, obsessive-compulsive disorder, acute stress, adjustment and post-traumatic stress disorder — the physical illnesses and substances that imitate them, somatic and dissociative presentations, managing panic and hyperventilation at the bedside, CBT, exposure, relaxation, SSRIs, the benzodiazepine trap and the management of insomnia; then loss, grief and mourning in Ghana, supporting the bereaved and the dying, palliative care and total pain, self-harm and its care, anorexia and bulimia and the refeeding danger, and the personality disorders with the consistent team approach they require. Somatic, conversion and dissociative disorders close the module with their own lesson.",
  lessons: [
    {
      slug: "anxiety-panic-ocd-trauma-and-somatic-presentations",
      title: "Anxiety, panic, OCD, trauma and somatic presentations",
      minutes: 18,
      objectives: [
        "Explain the physiology of the stress response and distinguish normal anxiety from the anxiety disorders — generalised anxiety, panic disorder, phobias, obsessive-compulsive disorder, acute stress reaction, adjustment disorder and post-traumatic stress disorder — by the object of the fear.",
        "Exclude the physical illnesses and substances that imitate anxiety, and recognise and manage medically unexplained, somatic and dissociative (conversion) presentations without repeated investigation or repeated reassurance.",
        "Manage panic and hyperventilation at the bedside, reduce procedural and pre-operative anxiety, and support a person in the hours and days after a traumatic event.",
        "Describe the treatments for anxiety disorders — cognitive behavioural therapy, graded exposure and response prevention, relaxation and breathing, SSRIs, propranolol — the hazards of benzodiazepines and hypnotics, and the non-drug management of insomnia.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Fear that is useful and fear that is illness",
          paragraphs: [
            "Anxiety is the body's alarm. When the brain perceives a threat the hypothalamus triggers the <strong>sympathetic nervous system</strong> and the adrenal medulla releases <strong>adrenaline</strong>: the heart races and pounds, breathing quickens, blood is diverted from gut and skin to muscle, pupils widen, sweat breaks out, the mouth dries, the bladder and bowel want to empty, and glucose is released — the <strong>fight or flight</strong> response. At the same time the hypothalamic–pituitary–adrenal axis releases <strong>cortisol</strong>, which sustains the response over hours and days and, when the stress never ends, suppresses immunity, raises blood pressure and glucose, disturbs sleep and wears the person down. This is normal and life-saving before an exam, a fight or a snake; it becomes a disorder when it is <strong>excessive for the situation, persistent, and impairs function</strong>.",
            "The symptoms are the physiology felt from inside. <strong>Psychological</strong>: dread, worry, irritability, poor concentration, feeling detached or unreal, fear of losing control, going mad or dying. <strong>Physical</strong>: palpitations, chest tightness, breathlessness, dizziness, tremor, sweating, nausea, 'butterflies', diarrhoea, frequency, headache, muscle tension, and the effects of <strong>hyperventilation</strong> — over-breathing blows off carbon dioxide, the blood becomes alkaline, ionised calcium falls, and the person feels <strong>tingling in the fingers and around the mouth</strong>, light-headedness, and in severe cases <strong>carpopedal spasm</strong>, with the hands cramped into a claw, which convinces everyone present that something terrible is happening and so feeds the attack.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-EPR-1038.svg",
          alt: "The endocrine chain of command: hypothalamus to pituitary to target gland — thyroid, adrenal cortex or gonad — with a negative feedback loop from the target gland back to the hypothalamus labelled enough is enough. The anterior pituitary makes its own hormones while the posterior lobe only stores and releases antidiuretic hormone and oxytocin. Results are read as a pair: low hormone with a high pituitary signal means the gland has failed; low hormone with a low signal means the pituitary has failed. Most feedback is negative and its purpose is stability; labour and breastfeeding are the two positive loops.",
          caption: "The stress response runs down this chain: hypothalamus to pituitary to adrenal cortex to cortisol, with adrenaline from the adrenal medulla doing the fast work. The same chain through the thyroid explains why thyrotoxicosis is anxiety's commonest physical imitator.",
        },
        {
          type: "table",
          heading: "The anxiety disorders, sorted by what the fear is attached to",
          columns: ["Disorder", "What the fear is attached to", "How it presents", "First-line treatment"],
          rows: [
            ["<strong>Generalised anxiety disorder</strong>", "Everything, and it moves — money, children, illness, the future", "Worry most days for six months or more with tension, restlessness, poor sleep, fatigue, poor concentration; frequent somatic complaints in the OPD", "CBT, relaxation, problem-solving, sleep hygiene, reduce caffeine; an SSRI if needed; not long-term diazepam"],
            ["<strong>Panic disorder</strong>", "The body's own alarm", "Attacks that peak within minutes — pounding heart, breathlessness, choking, chest pain, tingling, the conviction that she is <strong>about to die</strong> or go mad — and between attacks the fear of the next one, which shrinks life (agoraphobia)", "CBT with education about the attack and interoceptive exposure; slow breathing; an SSRI; benzodiazepines only for a severe attack and briefly"],
            ["<strong>Phobias</strong>", "One specific thing or situation — needles, blood, snakes, lifts, crowds, speaking in public (social phobia), open or public places (agoraphobia)", "Intense fear and <strong>avoidance</strong>; avoidance relieves it today and strengthens it for tomorrow", "<strong>Graded exposure</strong> (systematic desensitisation) with consent; propranolol for the physical symptoms of performance anxiety"],
            ["<strong>Obsessive-compulsive disorder</strong>", "An intrusive thought the person knows is her own and hates — contamination, harm coming to her family, blasphemy, symmetry", "Rituals — the man who <strong>washes his hands</strong> fifty times a day until they bleed, checking, counting, praying in a fixed pattern — that lower the distress for an hour so the ritual grows; hours lost daily", "CBT with <strong>exposure and response prevention</strong>; an SSRI, often in higher dose for longer; family taught not to participate in rituals"],
            ["<strong>Acute stress reaction</strong>", "An overwhelming event in the last hours to days — a crash, an assault, a fire", "Dazed, numb, agitated or withdrawn, with autonomic arousal; resolves within days", "Safety, calm, practical help, family — psychological first aid; no forced debriefing"],
            ["<strong>Adjustment disorder</strong>", "A life change — a diagnosis, a job loss, migration, divorce", "Distress and impaired function out of proportion, beginning within three months and settling within six", "Support, problem-solving, brief counselling; treat depression if it develops"],
            ["<strong>Post-traumatic stress disorder</strong>", "A past event that keeps happening — the <strong>road accident survivor</strong>, the woman who was raped, the fire victim, the soldier, the nurse after an assault", "Weeks to months after: <strong>re-living</strong> through <strong>flashbacks</strong> and <strong>nightmares</strong>, avoidance of reminders, numbing, and hyperarousal — an exaggerated <strong>startle</strong>, insomnia, irritability, hypervigilance; often with depression, alcohol use and <strong>dissociation</strong>", "<strong>Trauma-focused CBT</strong> or EMDR; an SSRI; no benzodiazepines, which worsen outcome"],
            ["<strong>Separation anxiety</strong>", "In children: being apart from the parent", "School refusal, stomach aches on school mornings, clinging, nightmares about loss", "Graded return to school, parent coaching, treat the parental anxiety too"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PSY-1389.svg",
          alt: "The anxiety disorders sorted by what the fear is attached to. Generalised anxiety is attached to everything and it moves, with worry most days for months plus tension, poor sleep and fatigue. Panic disorder is attached to the body's own alarm, peaks in minutes and feels like dying, and the real disorder is fear of the next attack. Phobia is attached to one specific thing or situation, and avoidance relieves it today while strengthening it for tomorrow. Obsessive-compulsive disorder is attached to an intrusive thought the person knows is her own and hates, and the ritual lowers distress for an hour so the ritual grows. The mechanism they share is that avoidance works and that is the problem: every escape proves the danger was real, so the fear returns larger; treatment reverses this gradually and with consent. Before diagnosing anxiety exclude thyrotoxicosis, hypoglycaemia, anaemia, arrhythmia, asthma, and salbutamol, caffeine or tramadol withdrawal.",
          caption: "Same alarm, different trigger. The mechanism they share is avoidance — every escape teaches the brain the danger was real — which is why treatment is gradual, consented exposure rather than more avoidance.",
        },
        {
          type: "text",
          heading: "The body first — physical mimics and the substances we sell ourselves",
          paragraphs: [
            "Before anyone is told she has anxiety, the conditions that imitate it exactly are excluded. <strong>Thyrotoxicosis</strong> gives palpitations, tremor, sweating, weight loss despite appetite, heat intolerance, diarrhoea and a racing anxious mind; the thyroid function tests settle it. <strong>Hypoglycaemia</strong> in the diabetic on insulin or glibenclamide gives sweating, tremor and panic that a glucose stick explains. <strong>Anaemia</strong> gives breathlessness and palpitations; <strong>arrhythmias</strong> give paroxysms that feel exactly like panic — an ECG during symptoms is worth a hundred reassurances; <strong>asthma</strong> gives breathlessness and fear, and the <strong>salbutamol</strong> that treats it gives tremor and palpitations; a <strong>phaeochromocytoma</strong> gives episodic headache, sweating, palpitations and hypertension; the menopause gives flushing, palpitations and insomnia. <strong>Caffeine</strong> in coffee, cola and the <strong>energy drinks</strong> drivers and students live on, <strong>khat</strong>, cannabis, tramadol, and <strong>withdrawal</strong> from alcohol, benzodiazepines or tramadol all produce anxiety. Every anxious patient has a pulse, blood pressure, glucose, haemoglobin, thyroid function and a drug and substance history taken before the label is applied.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-CLN-2914.svg",
          alt: "Overactive and underactive thyroid shown as the metabolic rate running fast or slow: overactive — weight loss with a good appetite, heat intolerance, sweating, tremor, palpitations, anxiety, diarrhoea; underactive — weight gain, cold intolerance, dry skin, slow pulse, constipation, tiredness, low mood and slowed thinking. In gland disease the pituitary signal TSH moves opposite to the thyroid hormone.",
          caption: "Overactive thyroid imitates panic and generalised anxiety; underactive thyroid imitates depression and dementia. Thyroid function tests belong in the work-up of every new anxiety, depression and confusion — and in every patient on lithium.",
        },
        {
          type: "text",
          heading: "When the body speaks for the mind — somatic and dissociative presentations",
          paragraphs: [
            "Many patients experience distress as bodily symptoms. <strong>Medically unexplained symptoms</strong> — headache, burning, crawling, palpitations, weakness, abdominal pain, dizziness — with repeatedly <strong>normal investigations</strong> make up a large share of the outpatient department. In <strong>somatic symptom disorder</strong> the person has persistent, distressing physical symptoms and excessive worry about them; in <strong>health anxiety</strong> the fear is of a disease she does not have, and each negative test reassures for a day. In <strong>dissociative (conversion) presentations</strong> a psychological conflict appears as a loss of function that does not fit anatomy — a paralysed leg with normal reflexes, blindness with normal pupils, loss of voice, <strong>non-epileptic seizures</strong> with eyes held shut and no incontinence or injury, or a fugue in which the person wanders and loses her memory for the period. These patients are <strong>not pretending</strong>; the symptom is real, outside conscious control, and usually follows a stress the patient cannot name — a forced marriage, abuse, a failed exam, a debt.",
            "The approach is the same whether the diagnosis is somatic symptom disorder, conversion or a depression presenting through the body. Take the symptoms seriously and <strong>examine properly once</strong>; avoid <strong>repeated investigations</strong>, which confirm to the patient that something dangerous is being sought, and avoid <strong>repeated reassurance</strong>, which works for an hour and then has to be given again; give a <strong>positive explanation</strong> ('the tests show your heart and thyroid are healthy; what you are feeling is real, and it is the body's alarm system firing — we can treat that'); explore the stress gently and over time; set <strong>regular scheduled reviews</strong> so that the patient does not have to produce a new symptom to be seen; treat the depression or anxiety underneath; involve the family so that the symptom is not rewarded or punished; and for conversion symptoms, expect recovery, provide physiotherapy and a face-saving route back to function. Beware the opposite error too: the woman with 'hysterical' paralysis has been examined by a doctor and has normal reflexes, or she has a spinal lesion.",
          ],
        },
        {
          type: "text",
          heading: "Panic at the bedside, needles, and the anxious patient's consent",
          paragraphs: [
            "A patient in a <strong>panic attack</strong> on the ward or in the clinic needs one calm person. Stay; speak slowly in a low voice; move her away from the crowd; tell her once that she is having a panic attack, that it is frightening but not dangerous, and that it will pass within minutes; check pulse, saturation and glucose while you talk, because 'panic' in a 55-year-old with chest pain is an infarct until proven otherwise. Teach <strong>slow breathing</strong> — in through the nose for a count of four, out through pursed lips for a count of six, hand on the abdomen — and breathe with her; <strong>grounding</strong> (name five things you can see, four you can hear) brings attention out of the body. The old <strong>paper bag</strong> method of rebreathing carbon dioxide is no longer recommended: it is dangerous if the breathlessness is actually asthma, a pulmonary embolus or a cardiac cause, and slow breathing works as well. Do not reach for diazepam as a routine; if a drug is needed for a severe, prolonged attack it is a single small dose with a plan, not a prescription she takes home. Afterwards, explain the physiology — the tingling and the cramp are over-breathing, not a stroke — because understanding the attack is the beginning of treating it.",
            "Anxiety also decides whether procedures and operations happen. <strong>Needle phobia</strong> — fainting, flight and refusal of blood tests, injections and cannulas — is managed with honesty about what will happen, lying down (vasovagal faints follow the needle), applied muscle tension, distraction, a topical anaesthetic for children, a single competent attempt rather than four, and graded exposure where the problem is chronic. <strong>Pre-operative anxiety</strong> is lowered by information: what will happen, in what order, who will be there, what it will feel like, how pain will be controlled. The anxious patient who 'consents' to anything to make the conversation stop has not consented — give the information in small pieces, check understanding with teach-back, and allow time and a relative. <strong>Stress response</strong> physiology also matters to the surgeon: unrelieved anxiety and pain raise cortisol and catecholamines, raise blood pressure and glucose, and slow healing.",
          ],
        },
        {
          type: "text",
          heading: "After a traumatic event",
          paragraphs: [
            "The survivor of a road crash, a fire, a flood, an assault or a rape, and the relatives who have just watched a death, need <strong>psychological first aid</strong> in the first hours and days: safety, warmth, water, a quiet place, practical help (a phone call, finding the children, the next step), calm honest information, and the presence of someone who listens if the person wants to talk and does not insist if she does not. Formal single-session 'debriefing' in which survivors are made to recount the event in detail does not prevent PTSD and may worsen it; what helps is support, sleep, early return to routine, and follow-up. Most people recover. Those who at four to six weeks still have flashbacks, nightmares, avoidance, hyperarousal, numbing, dissociation, depression or increased drinking need assessment and <strong>trauma-focused CBT</strong> or EMDR, with an SSRI where needed. The nurse after an assault on the ward, the midwife after a maternal death and the team after a patient suicide are survivors of trauma too, and need the same.",
          ],
        },
        {
          type: "text",
          heading: "Treatment — talking, doing and, sometimes, tablets",
          paragraphs: [
            "<strong>Cognitive behavioural therapy</strong> is the first-line treatment for every anxiety disorder. The cognitive part identifies and tests catastrophic thoughts ('my heart is racing, therefore I am dying'); the behavioural part reverses avoidance. <strong>Graded exposure</strong> builds a hierarchy from the least to the most feared situation and climbs it step by step, staying in each until the fear falls, with the patient's consent and control — this is <strong>systematic desensitisation</strong>, and it cures most phobias. <strong>Exposure and response prevention</strong> for OCD means touching the 'contaminated' door handle and not washing, and tolerating the distress until it falls. <strong>Relaxation training</strong> (progressive muscle relaxation), <strong>breathing exercises</strong>, problem-solving, exercise, reduction of caffeine and energy drinks, and sleep hygiene are taught to everyone. Older techniques such as <strong>thought stopping</strong> (snapping an elastic band, shouting 'stop' to an intrusive thought) are now little used because suppressing a thought tends to strengthen it. Faith and prayer are resources for many patients and are respected; the pastor who tells a woman with OCD that her blasphemous intrusions prove she is possessed is not.",
            "<strong>Medication</strong>: <strong>SSRIs</strong> (fluoxetine, sertraline) are first line for generalised anxiety, panic, social phobia, OCD and PTSD, started low because they can increase anxiety in the first week, taking two to six weeks to work, continued for months after recovery. <strong>Propranolol</strong>, a beta-blocker, blunts the tremor and palpitations of performance anxiety and is useful for the preacher, the student and the musician — but not in asthma, heart block or hypotension. <strong>Benzodiazepines</strong> (diazepam, lorazepam, bromazepam) relieve anxiety within an hour and create <strong>dependence within two to four weeks</strong>: tolerance, escalating doses, rebound anxiety and insomnia on stopping, withdrawal seizures if stopped abruptly after long use, falls and confusion in older people, respiratory depression with alcohol, and a street market in diazepam. They are prescribed for a crisis for the shortest time — days to two weeks — and never as the treatment of anxiety. The patient on <strong>chronic diazepam</strong> for years is withdrawn slowly, by small steps over months, with support, never stopped on admission.",
          ],
        },
        {
          type: "table",
          heading: "Insomnia — the treatment is not a tablet",
          columns: ["Step", "What to do", "Why"],
          rows: [
            ["<strong>Find the cause</strong>", "Pain, breathlessness, nocturia, heat, noise, a crying baby, caffeine and energy drinks, alcohol (which causes early waking), shift work, depression (early morning waking), anxiety (trouble falling asleep), mania (no need for sleep), sleep apnoea, restless legs, steroids, salbutamol, tramadol", "Insomnia is a symptom; a hypnotic hides the cause"],
            ["<strong>Sleep hygiene</strong>", "Same rising time every day including weekends; no daytime naps; bed only for sleep and sex; out of bed if awake for more than 20 minutes and back when sleepy; no screens, caffeine, nicotine or heavy meals in the three hours before bed; exercise, but not late; a dark, quiet, cool room; a wind-down routine", "Re-trains the association between bed and sleep; works within two to four weeks if actually done"],
            ["<strong>CBT for insomnia</strong>", "Sleep diary, sleep restriction to the hours actually slept, challenging the catastrophic thoughts about not sleeping, relaxation", "The most effective long-term treatment, deliverable by nurses"],
            ["<strong>Hypnotics only briefly</strong>", "<strong>Sleeping tablets</strong> — benzodiazepines or <strong>zolpidem</strong> — for no more than two weeks, lowest dose, not every night; never with alcohol; avoid in older people, who fall and become confused on them", "Tolerance and dependence in weeks; rebound insomnia on stopping; next-day sedation"],
            ["<strong>Older people</strong>", "Treat pain and nocturia; daylight and activity by day; <strong>melatonin</strong> where available; avoid all sedatives if possible", "Sedatives in the elderly cause falls, fractures, delirium and dependence"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "The diazepam trap",
          body: "A nurse who gives diazepam for every anxious patient, every sleepless night and every tearful relative is creating dependence that will outlast the crisis by years. Benzodiazepines are for a few days in an emergency, for alcohol withdrawal under a protocol, for seizures and for procedures. They are not the treatment for anxiety, insomnia, grief or a difficult life. Every patient on long-term diazepam must be withdrawn slowly — abrupt cessation causes rebound anxiety, insomnia, and seizures.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Anxiety in an examination",
          body: "Sort the disorder by the object of the fear: everything (GAD), the body's alarm (panic), one thing (phobia), an intrusive thought and a ritual (OCD), a past event re-lived with flashbacks, nightmares, avoidance and startle (PTSD). Exclude thyrotoxicosis, hypoglycaemia, anaemia, arrhythmia, asthma, phaeochromocytoma, caffeine, energy drinks, khat, salbutamol and withdrawal. Hyperventilation causes tingling and carpopedal spasm — teach slow breathing, not a paper bag. Avoidance maintains anxiety; graded exposure treats it; exposure and response prevention treats OCD; trauma-focused CBT treats PTSD. SSRIs are first line; propranolol for performance symptoms (not in asthma); benzodiazepines for days only because of dependence; zolpidem and other hypnotics for two weeks at most; avoid sedatives in older people. Do not repeatedly investigate or repeatedly reassure medically unexplained symptoms — explain, schedule reviews and treat the mood.",
        },
      ],
      keyPoints: [
        "Anxiety is the sympathetic–adrenaline and cortisol stress response felt from inside; it is a disorder when excessive, persistent and disabling; hyperventilation produces tingling, dizziness and carpopedal spasm that feed the fear.",
        "The anxiety disorders are sorted by what the fear is attached to — everything (GAD), the body's alarm (panic), one thing (phobia), an intrusive thought and a ritual (OCD), a recent event (acute stress), a life change (adjustment) or a past event re-lived (PTSD) — and avoidance is the mechanism that maintains them all.",
        "Exclude thyrotoxicosis, hypoglycaemia, anaemia, arrhythmia, asthma, phaeochromocytoma, caffeine and energy drinks, khat, salbutamol, tramadol and withdrawal from alcohol or benzodiazepines before diagnosing anxiety.",
        "Somatic and dissociative presentations are real and involuntary: examine once properly, avoid repeated investigation and repeated reassurance, give a positive explanation, schedule regular reviews, explore the stress and treat the depression underneath.",
        "In a panic attack stay calm, exclude a physical cause with pulse, saturation and glucose, explain once, teach slow breathing and grounding (not a paper bag), avoid routine diazepam, and explain the physiology afterwards; information lowers procedural and pre-operative anxiety and makes consent real.",
        "CBT with graded exposure (phobias), exposure and response prevention (OCD) and trauma-focused CBT (PTSD) is first-line, with relaxation, breathing, exercise, caffeine reduction and sleep hygiene; psychological first aid, not forced debriefing, follows trauma.",
        "SSRIs are the first-line drugs and take weeks; propranolol relieves performance symptoms but not in asthma; benzodiazepines cause dependence within weeks and are for days only; hypnotics are for two weeks at most and sedatives are avoided in older people — insomnia is treated by finding the cause, sleep hygiene and CBT.",
      ],
      quiz: { keywords: ["anxiety","panic","phobia","obsess","compuls","washes his hands","post traumatic","avoidance","re living","acute stress","generalised anxiety","hyperventilat","benzodiazepine","diazepam use","diazepam","dependence","somatic","conversion presentation","investigations are normal","hyperthyroid","thyrotoxic","phaeochromocytoma","physical mimics","repeated reassurance","insomnia","sleeping tablets","hypnotic","sleep advice","sleep and rest","melatonin","sedatives in older","about to die","needle phobia","stress response","psychological support after","separation anxiety","consent and the anxious patient","energy drinks","propranolol","autonomic nervous system","cortisol","road accident survivor","relaxation","adrenaline","tingling fingers"] },
    },
    {
      slug: "grief-loss-self-harm-eating-disorders-and-personality-disorders",
      title: "Grief, loss, self-harm, eating disorders and personality disorders",
      minutes: 20,
      objectives: [
        "Describe normal grief, mourning and the stages and tasks of grieving, recognise anticipatory, complicated and depressive grief, and support bereaved people — including after stillbirth, miscarriage and the death of a child — in ways that respect Ghanaian rites while protecting the vulnerable.",
        "Apply palliative care principles to the dying patient: total pain, recognising the dying phase, truth-telling and advance wishes, responding to a request for help to die, care of the dying child and the family, and culturally appropriate care after death.",
        "Assess and care for a person who has self-harmed without judgement, including the adolescent who cuts, and plan risk assessment and follow-up.",
        "Recognise anorexia nervosa and bulimia nervosa and the refeeding danger, and describe the personality disorders — especially emotionally unstable (borderline) personality disorder — with the consistent team approach, limit-setting and boundaries that care requires.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Loss, grief and mourning",
          paragraphs: [
            "<strong>Grief</strong> is the response to loss; <strong>mourning</strong> is its outward, culturally shaped expression; <strong>bereavement</strong> is the state of having lost someone. Loss includes not only death but a stillbirth or miscarriage, a limb, a breast, sight, fertility, a job, a marriage, a homeland and the future one expected. Normal grief has waves — shock and disbelief, searching and yearning, anger, guilt, sadness, loneliness — with physical symptoms (tight chest, sighing, exhaustion, poor sleep and appetite, even hearing or seeing the dead person briefly, which is normal and not psychosis), and it comes and goes in <strong>pangs</strong> triggered by reminders, between which the person can function and be comforted. Kübler-Ross's five stages — <strong>denial, anger, bargaining, depression, acceptance</strong> — are a map, not a timetable: people revisit, skip and move at their own pace. Worden's <strong>tasks</strong> are more useful at the bedside: accept the reality of the loss, work through the pain, adjust to a world without the person, and find an enduring connection while moving on. <strong>Anticipatory grief</strong> begins before an expected death and can leave a family exhausted and strangely flat when it comes.",
            "In Ghana grief is public and communal. The one-week observance, the laying in state, the funeral that may wait months while the mortuary bill grows, the funeral cloth, the dirges, the fortieth-day and the first anniversary give structure to mourning and gather the people who will carry the bereaved; the nurse supports these <strong>traditional and religious rites</strong> and asks the family what is needed. Some practices harm: <strong>widowhood rites</strong> in some communities have confined widows, shaved them, made them sleep beside the corpse, bathe in public or drink the water used to wash the body, and dispossessed them of house and land; the Criminal Offences Act makes it an offence to compel a bereaved spouse to undergo a cruel custom, and the nurse who hears of it involves social welfare. A widow or widower is at raised risk of depression, suicide and death in the first year and is followed up.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MEN-0040.svg",
          alt: "A wavy line moving up and down across a timeline labelled with five stages — denial, anger, bargaining, depression, acceptance — not moving smoothly from one to the next. The stages are a map, not a timetable: people revisit stages, skip them and move at their own pace.",
          caption: "A map, not a timetable. The widow who is angry at the doctors in month three and bargaining with God in month six is not 'stuck'; the one who cannot function at all in month nine, feels worthless and wishes to die has moved from grief into depression.",
        },
        {
          type: "text",
          heading: "Supporting the bereaved, and knowing when grief has become illness",
          paragraphs: [
            "The mother who has just been told her child has died, the man whose wife has died in theatre, the woman after a stillbirth: what helps is presence, not words. Sit down; say that you are sorry; use the dead person's name; allow silence and tears; do not say 'it was God's will', 'you are young, you will have another', 'at least he did not suffer', 'be strong' or 'stop crying'; answer questions honestly; offer to let them see and hold the body, prepared for what they will see; give practical information about what happens next — the certificate, the mortuary, the police where a death is unexpected; and find the relative or pastor who will stay. The father who <strong>sits silently</strong> and the mother who screams are both grieving normally. After a <strong>stillbirth or miscarriage</strong> the loss is as real as any other and is often dismissed; offer to see the baby, name him, keep a footprint or a photograph where the mother wishes, place her away from the postnatal ward if she prefers, suppress lactation, and tell her plainly that nothing she did caused it. After a <strong>sudden infant death</strong> the parents face guilt and sometimes suspicion; they need compassion, clear information and the <strong>siblings</strong> need age-appropriate explanation and reassurance that they did not cause it and will not die of it. Children grieve in bursts, regress, ask the same questions repeatedly, and should be allowed to attend the funeral if they wish, with an adult to care for them there.",
            "Guilt is universal — '<strong>I could have saved him</strong> if I had brought him earlier' — and is answered with facts, gently, as many times as needed. Keeping the dead person's <strong>room as it was</strong> for months, talking to a photograph and visiting the grave are within normal grief. Grief has become <strong>complicated or prolonged</strong> when, six to twelve months on, the yearning and preoccupation are undiminished, the person cannot accept the death, avoids all reminders or is unable to function; it has become <strong>depression</strong> when there is pervasive low mood that no company lifts, worthlessness and guilt unrelated to the death, psychomotor change and <strong>suicidal thoughts beyond a wish to join the dead</strong>. Both are referred and treated. Grief after a suicide carries shame and stigma that silence the family; postvention (Lesson 3.2) reaches out to them.",
          ],
        },
        {
          type: "text",
          heading: "The dying patient — palliative care and total pain",
          paragraphs: [
            "<strong>Palliative care</strong> is the active, holistic care of a person whose illness will not be cured — cancer, HIV, heart, kidney and liver failure, sickle cell disease, dementia, the dying child — and of the family, from diagnosis onward and alongside treatment, not only in the last days. Its founding concept is <strong>total pain</strong>: physical, psychological, social and spiritual suffering that must all be treated, because morphine alone will not settle pain that is really fear, debt or unfinished business with a son abroad. The mental health nurse's part is depression and anxiety in the dying (common, treatable and not 'understandable' to the point of neglect), delirium in the last days, the family's anticipatory grief, and the <strong>spiritual distress</strong> of the patient who believes her illness is punishment.",
            "<strong>Recognising the dying phase</strong> — days to hours: profound weakness and sleeping most of the time, no longer eating or drinking, difficulty swallowing, changes in breathing with pauses and the 'death rattle' of secretions, cool mottled hands and feet, reduced urine, and sometimes a brief lucid rally — allows the family to be called and care to change to comfort: mouth care, positioning, pain and breathlessness relief, treatment of agitation, stopping observations and interventions that no longer serve, privacy, and the presence of the people and the prayers the patient wants. <strong>Truth-telling</strong> follows the patient's questions (Lesson 2.1), and <strong>advance wishes</strong> — where she wants to die, who should decide if she cannot, what she does and does not want — are asked about while she can still say, written down and respected as far as the law and the family allow; Ghana has no formal advance-directive law, so the conversation and the record are what protect her wishes. A <strong>request for assistance in dying</strong> ('nurse, give me something to finish it') is unlawful to grant in Ghana and is, in practice, a cry about uncontrolled pain, fear, loss of dignity, feeling a burden, or depression: sit down, ask what is making today unbearable, treat what can be treated, involve the doctor and the family, and do not leave her alone with it. A <strong>dying child</strong> is told what she can understand and asks for, in the words her parents choose; her <strong>siblings</strong> are included, not sent away; and her parents are helped to stay parents — holding, feeding, washing — to the end.",
            "After death, <strong>last offices</strong> are performed with dignity and <strong>culturally appropriate</strong> care: the family's religious rites (prayers, the Muslim requirement for rapid burial and washing by the same sex, positioning), the family's wish to wash or dress the body, time with the body, the removal of lines and tubes unless the coroner must see them, identification, documentation, and the belongings handed over respectfully. Staff grieve too: the nurse who cared for a child for months needs the team's acknowledgement and support after the death.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-SUR-0352.svg",
          alt: "Palliative care compared with hospice. Palliative care runs alongside curative treatment from diagnosis onward through death and bereavement, for any age, any stage and any life-limiting illness including cancer, HIV, heart failure and sickle cell disease. Hospice is a subset: comfort-focused care in the last months when cure is no longer the goal. Total pain has four dimensions that must all be treated — physical, psychological, social and spiritual; morphine alone will not settle pain that is really fear, debt or unfinished business.",
          caption: "Total pain is the mental health nurse's business: the depression, the fear, the debt and the spiritual distress of the dying are assessed and treated like any other symptom.",
        },
        {
          type: "text",
          heading: "Self-harm",
          paragraphs: [
            "<strong>Self-harm</strong> is intentional self-injury or self-poisoning irrespective of motive: cutting the arms or thighs, burning, hitting, swallowing objects, and overdoses of paracetamol or whatever is in the house. Much self-harm is not an attempt to die but a way of managing unbearable feeling — the physical pain replaces emotional pain, releases tension, punishes, or communicates distress that cannot be spoken; some is ambivalent; some is a serious attempt. It is commonest in adolescents and young adults, in those with depression, personality disorder, eating disorders and substance misuse, and in those who have been abused; and every episode raises the risk of eventual suicide. It is <strong>never dismissed as attention-seeking</strong>; a person who needs attention that badly needs attention.",
            "<strong>Care after deliberate self-harm</strong> has three parts. <strong>The body</strong>: wound assessment and cleaning, suturing and tetanus prophylaxis as for any wound, and the full physical management of an overdose (Lesson 6.2) — given with the same courtesy as for any other injury, without lectures, without delay as a punishment, and without the rough handling that teaches the young person never to come back. <strong>The assessment</strong>, once she is physically safe and in private: what happened and why in her words, intent at the time and now, the circumstances (alone, precautions against being found, a note, alcohol), previous episodes, mental illness, abuse and exploitation, substances, supports, and a <strong>risk assessment after self-harm</strong> that decides observation and disposal. <strong>The plan</strong>: treatment of any mental illness, a safety plan with the means removed, alternatives to self-harm for managing distress (holding ice, drawing on the skin, exercise, calling a named person), family involvement with consent, follow-up within a week, and for the <strong>adolescent who cuts her arms</strong>, a confidential conversation about what is happening at home and at school, because the self-harm is the smoke and not the fire. 'No-harm contracts' signed by the patient do not reduce risk and are no substitute for assessment and observation.",
          ],
        },
        {
          type: "table",
          heading: "Eating disorders — two illnesses the nurse must not miss",
          columns: ["Feature", "Anorexia nervosa", "Bulimia nervosa"],
          rows: [
            ["<strong>Core</strong>", "Deliberate weight loss to a <strong>very low weight</strong> (BMI below 17.5 kg/m², or failure to gain in a growing adolescent) by restriction, exercise, vomiting or laxatives, with an intense fear of fatness and a distorted <strong>body image</strong> — she sees fat where there is bone; amenorrhoea", "Recurrent <strong>binges</strong> (large amounts eaten with loss of control) followed by <strong>purging</strong> — vomiting, laxatives, fasting, exercise — with self-evaluation dominated by shape and weight; weight usually normal, so it is hidden for years"],
            ["<strong>Physical signs</strong>", "Emaciation, lanugo hair, cold hands and feet, <strong>bradycardia</strong>, hypotension, hypothermia, oedema, constipation, osteoporosis, low potassium and glucose, prolonged QT; death from arrhythmia, hypoglycaemia, infection or suicide", "Swollen parotids, dental erosion, calluses on the knuckles (Russell's sign), <strong>hypokalaemia</strong> from vomiting and laxatives with arrhythmia risk, oesophageal tears, menstrual irregularity"],
            ["<strong>Who</strong>", "Mostly adolescent girls and young women, increasingly in urban Ghana; also boys, athletes, and after teasing or trauma; distinguish from the weight loss of depression, TB, HIV, diabetes and thyrotoxicosis, which carry no fear of fatness", "Young women in their late teens and twenties; often with depression, self-harm, impulsivity and alcohol use"],
            ["<strong>Treatment</strong>", "Nutritional rehabilitation with <strong>gradual refeeding</strong>, family-based treatment for adolescents, CBT for adults, treatment of depression; admission when BMI is very low, pulse below 40, potassium or glucose low, temperature low or suicide risk high", "CBT (the best-proven treatment), regular meals to break the binge–purge cycle, fluoxetine in higher dose, correction of potassium, dental care"],
            ["<strong>Nursing</strong>", "Calculate and record BMI (weight in kilograms divided by height in metres squared); weigh at the same time, same scales, same clothing, after voiding, with her back to the display if the number distresses her; supervised meals with a calm matter-of-fact presence, no bargaining about calories, observation for an hour after meals to prevent vomiting and exercise; electrolytes and ECG; warmth; firm, kind, consistent limits agreed by the whole team; expect and do not punish deception", "Non-judgemental acceptance — she is ashamed; a regular eating plan; no access to the toilet for an hour after meals during admission; monitoring potassium; involving the family in understanding that this is an illness"],
          ],
        },
        {
          type: "table",
          heading: "Medical complications and monitoring",
          columns: ["System", "Signs", "Monitoring and action"],
          rows: [
            ["<strong>Heart</strong>", "Bradycardia, hypotension, postural drop, prolonged QT — the heart starves too", "Pulse, lying-standing pressure, ECG; admit bradycardia under 40 or QT lengthening; correct potassium and magnesium first"],
            ["<strong>Temperature and metabolism</strong>", "Hypothermia, cold blue hands and feet, lanugo hair", "Temperature chart, warming, slow refeeding — cold plus bradycardic is admission, not reassurance"],
            ["<strong>Electrolytes (especially purging)</strong>", "Low potassium, chloride, bicarbonate shifts; swollen parotids, knuckle calluses, dental erosion", "U&E, magnesium, phosphate before and during refeeding; replace per protocol; watch for tetany and arrhythmia"],
            ["<strong>Bone and hormones</strong>", "Amenorrhoea, fractures, stunted growth in adolescents", "DEXA where available, calcium and vitamin D, oestrogen assessment — bone lost in teens never fully returns"],
            ["<strong>Gut</strong>", "Constipation, bloating, gastroparesis, superior mesenteric artery syndrome in severe loss", "Small frequent meals, gentle laxation, watch for vomiting with pain — surgical causes still occur"],
            ["<strong>Blood and immunity</strong>", "Anaemia, leukopenia, frequent infections", "FBC, iron and B12; infections present without fever in starvation — low threshold for workup"],
          ],
        },
        {
          type: "list",
          heading: "Nursing the eating-disordered patient",
          items: [
            "<strong>Supervise meals and after:</strong> eat with the patient, stay 30 minutes after, bathroom watched — explained as care against the illness, not punishment of the person; blind weights when numbers feed obsession.",
            "<strong>Separate person from illness:</strong> praise health and courage, never weight or appearance — 'you look better' is heard as 'you look fatter'; the alliance is with the healthy self against the disorder.",
            "<strong>Work blame-free with families:</strong> parents did not cause this and are essential to recovery — family meals supported, siblings' needs named, school pressure and social-media ideals discussed openly.",
            "<strong>Hold Ghanaian context gently:</strong> faith explanations, fasting norms, traditional healers, aunties who comment on bodies — negotiate safety without mocking belief, and ally with pastors and imams who support treatment.",
            "<strong>Keep one consistent team plan:</strong> meal plan, exercise rules, privileges and boundaries identical across shifts — splitting staff is the illness's defence; handover includes the plan, not just the weight.",
            "<strong>Watch medically while treating psychiatrically:</strong> vitals, ECG, labs, food-fluid charts and weights on schedule — the psychiatric patient who collapses medically was under-monitored, not unlucky.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Refeeding syndrome — the meal that kills the starving",
          body: "When a severely malnourished person — the anorexic at BMI 13, the man rescued from a prayer camp after weeks of 'fasting', the chronically psychotic patient who stopped eating — is fed quickly, insulin surges, phosphate, potassium and magnesium rush into cells, and within days there is weakness, heart failure, arrhythmia, seizures and death. Start low and go slow (around 10–20 kcal/kg/day at first, increasing over a week), give thiamine before feeding, check phosphate, potassium, magnesium and glucose daily for the first week, watch pulse, blood pressure and oedema, and escalate at the first fall in phosphate. The patient who looks a little better on day three and dies on day five was refed too fast.",
        },
        {
          type: "text",
          heading: "Personality disorders",
          paragraphs: [
            "A <strong>personality disorder</strong> is an enduring pattern of thinking, feeling, relating and controlling impulses that begins in adolescence, deviates markedly from what the culture expects, is inflexible across situations, and causes distress or impairs function; it is not an episode of illness but the person's habitual way of being, usually shaped by a childhood of abuse, neglect, loss or chaos. Three clusters are described: <strong>A</strong> — odd and eccentric (paranoid, schizoid, schizotypal); <strong>B</strong> — dramatic, emotional and erratic (<strong>emotionally unstable or borderline</strong>, antisocial/dissocial, histrionic, narcissistic); <strong>C</strong> — anxious and fearful (anxious-avoidant, dependent, anankastic/obsessional). The diagnosis is made carefully and slowly, never during a crisis or an episode of depression or psychosis, and never as an insult.",
            "<strong>Emotionally unstable (borderline) personality disorder</strong> is the one nurses meet most, on medical as well as psychiatric wards: intense and unstable relationships that swing between idealising and despising, a frantic fear of abandonment, impulsivity (spending, sex, substances, bingeing), recurrent <strong>self-harm</strong> and suicidal threats, rapid mood swings lasting hours, chronic emptiness, intense anger, and brief stress-related paranoid ideas or dissociation. Mostly women, most with a history of sexual abuse, they are frequently called '<strong>manipulative</strong>' and 'attention-seeking' — labels that describe the staff's exhaustion, not the patient, and that predict worse care. <strong>Antisocial (dissocial) personality disorder</strong> — disregard for others, deceit, aggression, lack of remorse, often a forensic history — is mostly men and needs clear boundaries, no collusion and attention to the safety of staff and other patients.",
          ],
        },
        {
          type: "list",
          heading: "The consistent team approach — nursing people with personality disorders",
          items: [
            "<strong>One plan, one voice.</strong> A single written care plan agreed by the whole team, including what will and will not be provided, so that every nurse answers the same request the same way on every shift.",
            "<strong>Recognise splitting.</strong> The patient tells the day nurse she is the only one who understands, and the night nurse that the day nurse is cruel; staff begin to quarrel about her. Splitting is a symptom; the answer is communication between staff, not taking sides.",
            "<strong>Set limits clearly, early and kindly.</strong> State what behaviour is not acceptable and what will happen, and follow through consistently and without anger; limits are safety, not punishment.",
            "<strong>Keep boundaries.</strong> No special favours, no secrets from the team, no personal contact; over-involvement is the commonest way the relationship fails.",
            "<strong>Validate the feeling, not the behaviour.</strong> 'I can see you are in terrible distress' — and then 'cutting is not something we can allow here; let us find what else helps.'",
            "<strong>Take every suicidal statement seriously, every time,</strong> and assess it — repetition does not make it safe; the patient with borderline personality disorder has a lifetime suicide rate near one in ten.",
            "<strong>Plan the crisis before it comes.</strong> A written crisis plan agreed when calm: her early signs, what helps, whom to call, and what the service will do — and brief rather than prolonged admissions, which tend to make things worse.",
            "<strong>Treat what is treatable.</strong> Depression, substance misuse and PTSD respond to treatment; structured psychological therapies such as dialectical behaviour therapy teach distress tolerance and emotion regulation; medication has a small role.",
            "<strong>Look after the staff.</strong> Supervision and team discussion keep the frustration, rescue fantasies and anger these patients evoke from being acted out on them.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Grief, self-harm, eating and personality in an examination",
          body: "Normal grief comes in waves, allows comfort and may include briefly hearing the dead person; depression is pervasive, with worthlessness, guilt unrelated to the death and suicidal thoughts beyond a wish to join him; complicated grief is undiminished yearning and non-function beyond six to twelve months. The right response to the newly bereaved is presence, the name, silence and honest answers — not 'it was God's will'. Total pain is physical, psychological, social and spiritual. Self-harm is never 'attention-seeking'; treat the wound courteously, assess in private, remove the means, follow up within a week. Anorexia: BMI below 17.5, fear of fatness, distorted body image, bradycardia, hypothermia, amenorrhoea; bulimia: normal weight, parotid swelling, dental erosion, hypokalaemia. Refeeding syndrome: low phosphate — start low, go slow, thiamine first. Borderline personality: splitting, self-harm, fear of abandonment — one plan, consistent limits, boundaries, no labels.",
        },
      ],
      keyPoints: [
        "Grief is the response to loss and mourning its cultural expression; normal grief comes in waves that allow comfort, the five stages are a map not a timetable, and anticipatory grief precedes expected death; Ghanaian rites structure mourning and are supported, while cruel widowhood rites are an offence and are reported.",
        "Support the bereaved with presence, the dead person's name, silence, honest answers, seeing the body, practical information and a person who will stay; avoid 'God's will' and 'be strong'; after stillbirth, miscarriage and child death offer to see and name the baby and include siblings; refer when grief is complicated or has become depression.",
        "Palliative care treats total pain — physical, psychological, social and spiritual — from diagnosis onward; recognise the dying phase and switch to comfort; ask and record advance wishes; answer a request for help to die by treating the suffering behind it; perform culturally appropriate last offices and support the staff.",
        "Self-harm is a way of managing unbearable feeling and the strongest predictor of later suicide; treat the injury courteously and without delay, assess intent and circumstances in private, remove the means, write a safety plan, involve the family with consent and follow up within a week — never 'attention-seeking', and no reliance on no-harm contracts.",
        "Anorexia nervosa is deliberate low weight with fear of fatness and distorted body image, with bradycardia, hypotension, hypothermia and electrolyte danger; bulimia is bingeing and purging at normal weight with parotid swelling, dental erosion and hypokalaemia; nursing is BMI and consistent weighing, supervised meals, post-meal observation, electrolytes and firm kind limits.",
        "Refeeding syndrome kills the starving who are fed too fast: start low and go slow, thiamine before feeding, and daily phosphate, potassium, magnesium and glucose for the first week.",
        "Personality disorders are enduring patterns from adolescence; emotionally unstable (borderline) personality disorder brings unstable relationships, fear of abandonment, impulsivity, self-harm and splitting, and is nursed with one plan, one voice, early kind limits, firm boundaries, validation of feeling, serious assessment of every suicidal statement, a crisis plan, brief admissions and support for staff — never the label 'manipulative'.",
        "Starvation injures heart, temperature, electrolytes, bone, gut and blood — bradycardia under 40, QT lengthening and purging shifts admit and monitor.",
        "Supervise meals and after, praise health never weight, keep one team plan, and work with families and faith without blame or mockery.",
      ],
      quiz: { keywords: ["grief", "bereave", "stages of grief", "anticipatory", "complicated grief", "traditional rites", "widow", "stillbirth", "miscarriage", "breaking bad news", "bad news", "truth telling", "dying", "end of life", "palliative care", "has just been told", "has died", "deceased", "sits silently", "could have saved", "kept his room", "rites", "mortuary", "religious rites", "last offices", "culturally appropriate", "cultural beliefs", "self harm", "adolescent self harm", "care after deliberate", "risk assessment after self harm", "boundar", "professional boundaries", "eating disorder", "anorexia", "refeeding", "very low weight", "low weight", "body image", "bmi calculation", "purg", "request for assistance in dying", "advance wishes", "advance planning", "recognising the dying phase", "care of the dying", "caring for a dying child", "supporting siblings", "sids", "sudden infant death", "grief that becomes", "grief and depression", "staff support after an incident", "postvention", "bereaved", "bulimia", "amenorrhoea", "lanugo", "bradycardia", "qt prolongation", "meal supervision", "body mass index"] },
    },
    {
      slug: "somatic-symptom-conversion-and-dissociative-disorders",
      title: "Somatic symptom, conversion and dissociative disorders",
      minutes: 15,
      objectives: [
        "Distinguish somatic symptom, health anxiety, conversion, dissociative, factitious and malingering presentations.",
        "Nurse distress expressed bodily without collusion or confrontation.",
        "Support functional rehabilitation alongside psychological treatment.",
        "Manage reassurance-seeking, families and prayer-camp negotiation.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Real suffering, no medical cause found",
          paragraphs: [
            "Distress speaks bodily in every culture — headache, weakness, seizures that are not epilepsy, pain that migrates, fatigue that confines — and medically unexplained symptoms fill Ghanaian outpatient departments daily. Investigate thoroughly ONCE, then stop: each repeated negative test reassures for a day and harms for a year, teaching the patient that the answer is another scan rather than recovery.",
            "The disorders share bodily language with different grammars: somatic symptom disorder suffers symptoms with excessive worry; health anxiety fears disease it does not have; conversion (functional neurological disorder) loses function that does not fit anatomy; dissociative disorders lose memory or identity after trauma; factitious disorder seeks the sick role; malingering seeks external gain. The nurse tells them apart to treat each rightly.",
          ],
        },
        {
          type: "table",
          heading: "The presentations — picture and management",
          columns: ["Presentation", "Picture", "Management"],
          rows: [
            ["<strong>Somatic symptom disorder</strong>", "Persistent distressing physical symptoms with excessive worry, time and doctor visits", "One doctor, scheduled reviews, function goals — the regular appointment replaces the emergency dash"],
            ["<strong>Health anxiety</strong>", "Fear of disease despite reassurance, body-checking, doctor-shopping, test-chasing", "CBT for anxiety, agreed limits on tests, treatment of the anxiety itself — reassurance alone never holds"],
            ["<strong>Conversion / functional neurological</strong>", "Weakness, seizures, speech or vision loss that does not fit anatomy, often after stress — Hoover's sign, normal EEG in events", "Neurology confirms, physiotherapy plus psychology rehabilitate together, prognosis shared with hope — most improve"],
            ["<strong>Dissociative amnesia and fugue</strong>", "Memory loss or wandering travel after trauma the mind cannot hold", "Safety first, gentle history without forcing recall, trauma therapy when stable — memory returns as safety grows"],
            ["<strong>Factitious disorder</strong>", "Fakes or induces illness for the care role itself — tampered samples, dramatic histories, hospital-hopping", "Consistent team boundaries, psychiatric care, no confrontation — accusation scatters, boundaries contain"],
            ["<strong>Malingering</strong>", "Fakes for external gain — sick excuse, drugs, money, court advantage", "Objective documentation, functional observation, clear limits, seniors involved — records describe, never diagnose motive"],
          ],
        },
        {
          type: "list",
          heading: "Nursing: validate function, treat distress",
          items: [
            "<strong>Believe the suffering:</strong> symptoms are real even when their cause is the mind — 'all in your head' is never said; suffering denied seeks louder symptoms.",
            "<strong>One team, one plan:</strong> stop contradictory opinions and repeated workups; scheduled reviews with agreed test limits replace emergency visits and doctor-shopping.",
            "<strong>Rehabilitate function:</strong> physiotherapy goals, graded activity, return to roles — functional weakness recovers with retraining, and every regained function proves recovery possible.",
            "<strong>Treat the comorbidity:</strong> depression and anxiety ride alongside in most — screen and treat both, because the bodily symptoms outlast untreated mood disorders.",
            "<strong>Work with families without blame:</strong> explain the stress-body link plainly, coach help that rewards function not illness, and negotiate prayer camps — faith kept, chaining and starvation refused.",
            "<strong>Hold the middle path:</strong> neither 'you're faking' nor 'the doctors missed it' — suffering is real, the body is healthy, and rehabilitation with talking treatment is how people recover.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Confrontation colludes in reverse",
          body: "Accusing 'you're faking' destroys care; agreeing 'the doctors missed it' destroys recovery. The middle path: suffering is real, the body is healthy, and rehabilitation with talking treatment is how people recover.",
        },
      ],
      keyPoints: [
        "Investigate thoroughly once, then stop — repeated negatives teach scan-seeking, not recovery.",
        "Somatic suffers symptoms, health anxiety fears disease, conversion loses function, dissociative loses memory, factitious seeks care, malingering seeks gain.",
        "One team, scheduled reviews, agreed test limits, function goals — structure replaces shopping and dashing.",
        "Physiotherapy plus psychology rehabilitate conversion together; comorbidity treated alongside; families coached without blame.",
        "Neither faking-accusation nor missed-disease agreement — the middle path validates suffering and prescribes recovery.",
      ],
      quiz: {
        keywords: ["somatic symptom", "health anxiety", "hypochondriasis", "conversion disorder", "functional neurological", "dissociative", "dissociative amnesia", "factitious", "malingering", "medically unexplained", "psychosomatic", "illness behaviour", "secondary gain", "reassurance seeking"],
      },
    }
  ],
};
