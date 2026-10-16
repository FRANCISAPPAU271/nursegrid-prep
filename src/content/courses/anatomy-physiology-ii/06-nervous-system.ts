import type { CourseModule } from "../types";

export const nervousSystem: CourseModule = {
  slug: "nervous-system",
  title: "The nervous system: wiring, brain and control",
  summary:
    "The control network: neurones with action potentials and synapses, the brain lobe by lobe with meninges, CSF and raised-ICP recognition, the spinal cord with injury levels, and reflexes with bedside testing — then the peripheral nerves with plexus injuries, the autonomic balance with drugs and dysreflexia, all twelve cranial nerves with their tests, and consciousness with GCS, stroke and the altered-patient drill.",
  lessons: [
    {
      slug: "neurones-brain-cord-and-reflexes",
      title: "Neurones, the brain, the cord and reflexes",
      minutes: 20,
      objectives: [
        "Describe neurones, action potentials, synapses and key neurotransmitters.",
        "Name the lobes and deep structures with what each break causes.",
        "Explain meninges, CSF, the blood-brain barrier and raised ICP.",
        "Describe cord tracts, injury levels and the reflex arc with DTR grading.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Neurones: excitable, directional, chemical at the gaps",
          paragraphs: [
            "<strong>Dendrites</strong> listen, the <strong>soma</strong> decides, the <strong>axon</strong> shouts, <strong>terminals</strong> whisper across <strong>synapses</strong>. <strong>Myelin</strong> (<strong>Schwann</strong> cells in PNS, <strong>oligodendrocytes</strong> in CNS) insulates, and the signal leaps <strong>node to node (saltatory)</strong> — demyelination slows or blocks it (<strong>MS</strong> central, patchy, young adults; <strong>Guillain-Barré</strong> peripheral, <strong>ascending</strong> post-infection — watch <strong>vital capacity and swallow</strong>, ICU threshold low). The <strong>action potential</strong>: resting <strong>−70 mV</strong> (Na⁺/K⁺ pump), threshold → Na⁺ floods in (<strong>depolarization</strong>) → K⁺ floods out (<strong>repolarization</strong>) → brief <strong>refractory</strong> (one-way, rate limit) — <strong>all-or-none</strong>, coded by frequency. At the synapse Ca²⁺ admits <strong>neurotransmitter</strong>: <strong>acetylcholine</strong> (muscles, memory — myasthenia, Alzheimer's), <strong>noradrenaline</strong> (arousal, sympathetic), <strong>dopamine</strong> (movement, reward — Parkinson's low, psychosis high), <strong>serotonin</strong> (mood, sleep, gut), <strong>GABA</strong> (the brake — benzodiazepines boost it), <strong>glutamate</strong> (the accelerator — epilepsy's excess). Nearly every neuro/psych drug turns one of these taps.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0093.svg",
          alt: "Bank diagram of the neurone: dendrites, soma, axon with myelin sheath and nodes, synaptic terminals.",
          caption: "The neurone's anatomy — from the question-bank diagram set.",
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0024.svg",
          alt: "Brain lateral view: frontal lobe (personality, Broca's speech, motor strip), parietal (sensation, spatial, right-sided neglect), occipital (vision), temporal (hearing, memory, Wernicke's understanding); cerebellum (coordination, balance); brainstem (breathing, heart rate, blood pressure, cough, swallow). Left hemisphere holds language; MCA stroke hits face and arm plus language if left; cerebellar lesions ataxia same-sided; brainstem gives crossed signs with vitals at risk. Raised ICP: headache, vomiting, drowsiness to Cushing's triad and blown pupil.",
          caption: "Four lobes plus two guardians — and every lesion announces its address.",
        },
        {
          type: "text",
          heading: "Cord, meninges and the closed box",
          paragraphs: [
            "The <strong>cord</strong> (31 segments, to L1–L2 — LPs go below) carries <strong>ascending sensory</strong> and <strong>descending motor</strong> tracts, most <strong>decussating</strong> (right brain, left body). <strong>Dermatomes</strong> map skin to roots (nipples ~T4, umbilicus ~T10, knees ~L3–4) — spinal-block height and shingles follow them. Injury levels rule care: <strong>C3–5 keeps the diaphragm</strong> (above needs ventilation), <strong>T6</strong> is the dysreflexia threshold (Module 06, lesson 2), <strong>sacral sparing</strong> signals incomplete injury. Around brain and cord: <strong>dura–arachnoid–pia</strong> plus <strong>CSF</strong> (ventricles → aqueduct → subarachnoid space; ~500 mL/day made, ~150 held) — blocked (tumour, blood, infection) = <strong>hydrocephalus</strong>; infected = <strong>meningitis</strong> (neck stiffness, Kernig/Brudzinski, purpuric rash that <strong>doesn't fade under glass</strong> = septicaemia — antibiotics within the hour, isolation, prophylaxis for contacts). The <strong>blood-brain barrier</strong> blocks most drugs and bugs — and most antibiotics: meningitis needs barrier-crossing doses. <strong>Monro-Kellie</strong>: blood + brain + CSF share a fixed box — extra of one squeezes the rest: <strong>raised ICP</strong> (headache, vomiting, drowsiness → <strong>Cushing's triad: rising BP + widening pulse pressure, falling HR, irregular breathing</strong> → blown pupil → coning) — head up 30°, neck straight, nurse the SpO₂/CO₂/BP/glucose, no suctioning spikes, mannitol/hypertonics per protocol, neurosurgery on speed-dial.",
          ],
        },
        {
          type: "text",
          heading: "Reflexes: the five-part arc",
          paragraphs: [
            "<strong>Receptor → afferent → centre (cord/brainstem) → efferent → effector</strong> — the <strong>knee-jerk</strong> is monosynaptic (stretch sensed, quadriceps fired, hamstring inhibited), <strong>withdrawal</strong> polysynaptic (hand off the hot pot before the brain hears). Cranial reflexes guard the gates: <strong>pupillary</strong> (light — PEARL), <strong>corneal</strong> (blink), <strong>gag/cough/swallow</strong> (aspiration's guards — test before anything oral post-stroke). <strong>Deep tendon reflexes</strong> grade <strong>0 absent → 1+ diminished → 2+ normal → 3+ brisk → 4+ clonus</strong> — hyperreflexia + clonus flags upper-motor lesions (cord compression, eclampsia watch on MgSO₄), hyporeflexia lower-motor or shock. <strong>Babinski upgoing</strong> is normal in infants, <strong>abnormal in adults</strong> (corticospinal lesion). Reflexes vanish in <strong>spinal shock</strong>, deepen in <strong>raised ICP/herniation</strong> (posturing: <strong>decorticate</strong> flexor = above brainstem, <strong>decerebrate</strong> extensor = brainstem — both score M3/M2 and both scream emergency), and their absence underpins <strong>brainstem-death testing</strong> — never the bedside nurse's call to make, always their observation to feed.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Neuro obs: the trend is the diagnosis",
          body: "GCS (E4 + V5 + M6 = 15; ≤8 = intubate), pupils (size + reactivity — new blown pupil = herniation until proven otherwise), limb power/movement, vitals with Cushing's watch, glucose, sats — charted on the neuro-obs frequency the protocol demands (q15 min post-injury/fall/thrombolysis), handover with the TREND not the snapshot. A GCS drop of 2, new asymmetry, new posturing, Cushing's vitals or a blown pupil = emergency escalation + head-up/straight/oxygenated + nil by mouth + neurosurgical referral. After every fall, seizure and head injury: neuro obs start immediately, not after the doctor arrives.",
        },
      ],
      keyPoints: [
        "Dendrites→soma→axon→synapse; myelin + nodes = speed (MS central, GBS ascending + vital-capacity watch).",
        "Action potential: −70 rest, Na⁺ in, K⁺ out, refractory one-way; transmitters: ACh, NE, dopamine, serotonin, GABA, glutamate.",
        "Frontal (personality/speech/motor), parietal (sensation/spatial), temporal (hearing/memory), occipital (vision); cerebellum coordinates, brainstem vitalizes.",
        "Meninges + CSF + BBB; meningitis rash that doesn't fade = septicaemia; Monro-Kellie → Cushing's triad + blown pupil.",
        "Cord: C3–5 diaphragm, T6 dysreflexia line, dermatomes map blocks; reflex arc 5 parts; DTR 0–4+; adult Babinski up = lesion.",
        "GCS E4V5M6, ≤8 intubate; drop of 2, asymmetry, posturing = emergency; neuro obs start at the fall, not the review.",
      ],
      quiz: {
        questionIds: ["NG-MOD-AP2-016"],
        keywords: ["neurone", "myelin", "action potential", "synapse", "neurotransmitter", "lobes", "cerebellum", "brainstem", "meningitis", "CSF", "raised ICP", "Cushing", "spinal cord", "reflex", "GCS"],
        categories: ["fluid-electrolyte"],
      },
    },
    {
      slug: "pns-autonomic-and-cranial-nerves",
      title: "PNS, autonomic balance and cranial nerves",
      minutes: 20,
      objectives: [
        "Divide the PNS: cranial, spinal, somatic, autonomic with plexus injury notes.",
        "Contrast sympathetic with parasympathetic per organ with drug examples.",
        "Recognize and drill autonomic dysreflexia.",
        "Test all twelve cranial nerves and run the stroke and altered-consciousness drills.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Peripheral nerves: cables with postcodes",
          paragraphs: [
            "<strong>12 cranial + 31 spinal</strong> nerves: <strong>sensory (afferent)</strong> in, <strong>motor (efferent)</strong> out, <strong>somatic</strong> (voluntary muscle) versus <strong>autonomic</strong> (involuntary — below). Roots join into <strong>plexuses</strong>: <strong>brachial</strong> (C5–T1 — arm; Saturday-night/axillary injury = <strong>wrist drop</strong>, radial nerve), <strong>lumbosacral</strong> (leg; common peroneal at the fibular head = <strong>foot drop</strong> — crossed legs + stirrups + tight casts injure it). Peripheral patterns diagnose: <strong>glove-and-stocking</strong> = diabetic/polyneuropathy (feet first, foot-care teaching for life), <strong>carpal tunnel</strong> = median nerve (night tingling thumb–middle, Tinel/Phalen, splinting), <strong>shingles</strong> = one dermatome's blisters (antivirals within 72 h, eye involvement = emergency), <strong>Bell's palsy</strong> = whole face one side including forehead (<strong>forehead spares in stroke</strong> — the bedside distinguisher), <strong>trigeminal neuralgia</strong> = electric-shock face pain on trigger zones. Nerves regenerate ~1 mm/day — document baselines (movement, sensation, pain character) so recovery or deterioration is measurable.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0025.svg",
          alt: "Autonomic balance. Sympathetic (thoracolumbar, noradrenaline, fight-or-flight): dilates pupils, raises heart rate and pressure, dilates bronchi, slows gut, relaxes bladder, sweats, raises glucose, dumps adrenaline. Parasympathetic (craniosacral vagus, acetylcholine, rest-and-digest): constricts pupils, slows heart, constricts bronchi, moves gut, squeezes bladder. Drugs pick sides: atropine, beta-blockers, adrenaline. Autonomic dysreflexia above T6: trigger below (bladder commonest) causes pounding headache, severe hypertension, flushing above and pallor below, bradycardia — drill is sit up 90 degrees, loosen, drain bladder, then bowel and skin, monitor, senior help.",
          caption: "Every organ hears both voices — and dysreflexia is sympathetic storm with no brakes.",
        },
        {
          type: "table",
          heading: "Cranial nerves: twelve tests at the bedside",
          columns: ["Nerve", "Type", "Bedside test", "Fail looks like"],
          rows: [
            ["I Olfactory", "Sensory", "Smell (coffee, soap) each nostril", "Anosmia — head injury, viral, Parkinson's, mass"],
            ["II Optic", "Sensory", "Acuity (chart), fields (wiggle fingers), fundoscopy", "Field cuts, papilloedema (raised ICP), blindness"],
            ["III Oculomotor", "Motor", "Pupils (PEARL), up/down/medial gaze, lid", "Blown pupil, ptosis, eye down-and-out"],
            ["IV Trochlear", "Motor", "Down-and-in gaze (superior oblique)", "Vertical diplopia on stairs/reading"],
            ["V Trigeminal", "Both", "Face sensation 3 divisions + clench (masseter)", "Numb patch, weak bite, lost corneal reflex"],
            ["VI Abducens", "Motor", "Lateral gaze (lateral rectus)", "Can't look out — false-localizes raised ICP"],
            ["VII Facial", "Both", "Raise brows, shut eyes, smile, puff cheeks + taste front tongue", "Whole-face droop incl. forehead (Bell's); forehead spares in stroke"],
            ["VIII Vestibulocochlear", "Sensory", "Whisper test, Weber/Rinne, nystagmus/ataxia", "Deafness, vertigo, vomiting — stroke vs labyrinthitis"],
            ["IX Glossopharyngeal", "Both", "Gag (with X), taste back tongue, swallow", "Absent gag — aspiration risk, NBM + refer"],
            ["X Vagus", "Both", "Say 'ah' (palate rises), voice, cough, swallow", "Hoarseness, bovine cough, nasal speech, aspiration"],
            ["XI Accessory", "Motor", "Shrug (trapezius) + turn head (SCM) vs resistance", "Drooped shoulder, weak turn — neck surgery/trauma"],
            ["XII Hypoglossal", "Motor", "Stick tongue out + push cheek", "Deviates TOWARD the weak side (stroke, MND)"],
          ],
        },
        {
          type: "text",
          heading: "Stroke and altered consciousness: minutes matter",
          paragraphs: [
            "<strong>BE-FAST</strong> (Balance, Eyes, Face, Arm, Speech, Time): sudden anything-neuro is stroke until proven otherwise — note <strong>last-known-well time</strong> (families remember events, not clocks: anchor it), check <strong>glucose</strong> (hypo mimics everything), <strong>thrombolysis window 4.5 h / thrombectomy to 24 h</strong> in eligible ischaemics — the nurse's speed sets eligibility. <strong>Swallow screen before ANYTHING oral</strong> (even tablets — aspiration kills stroke survivors), 30° head-up, sats/BP/glucose/temp controlled, neuro obs, DVT prophylaxis, early mobilization. Altered consciousness drill: <strong>glucose, sats, BP/pulse/temp, GCS/AVPU, pupils, rash/neck stiffness, odour/needle marks, meds/insulin/warfarin, history from whoever came with them</strong> — then <strong>naloxone</strong> (pinpoint + slow breathing), <strong>thiamine</strong> (alcoholic/confused/ophthalmoplegic — before glucose), <strong>flumazenil caution</strong> (seizures in mixed overdose), dextrose, oxygen, fluids, antibiotics where septic. <strong>Delirium</strong> (acute, fluctuating, inattentive — infection, drugs, dehydration, constipation, pain, hypoxia: the PINCH-ME causes) is reversible and missed daily in elders: screen (4AT/CAM), treat causes, reorient, mobilize, sleep-protect — never restrain-and-sedate first.",
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The altered patient: vitals before theories",
          body: "No diagnosis survives unmeasured glucose, sats, pressure and temperature — so the drill is fixed: ABCs, glucose, sats, full vitals, GCS/AVPU, pupils, exposure (rash, neck, marks, odour, catheters, drains), ECG + cardiac monitor, bloods (VBG with lactate, FBC, U&E, glucose, cultures if febrile), pregnancy test where relevant, collateral history, then cause-hunt (stroke, sepsis, metabolic, drugs, trauma, seizures). Document times for everything — thrombolysis, antibiotics, antidotes and seizures all run on your clock.",
        },
      ],
      keyPoints: [
        "12 cranial + 31 spinal; somatic voluntary, autonomic involuntary; wrist drop (radial), foot drop (peroneal), glove-stocking (diabetic).",
        "Sympathetic (NE, fight): dilate, accelerate, mobilize; parasympathetic (ACh vagus, rest): constrict, slow, digest, void.",
        "Dysreflexia (≥T6): pounding headache + severe HTN + flush above/pale below → sit 90°, loosen, bladder, bowel, skin, monitor.",
        "12 tests: smell, see, pupils/gaze, face feel/bite, face move, hear/balance, gag/swallow/voice, shrug/turn, tongue.",
        "BE-FAST + last-known-well + glucose + swallow screen + windows (4.5 h lysis, 24 h thrombectomy).",
        "Altered drill: glucose, sats, vitals, GCS, pupils, exposure, ECG, VBG, collateral — delirium is reversible, find PINCH-ME.",
      ],
      quiz: {
        questionIds: ["NG-MOD-AP2-017","NG-MOD-AP2-018"],
        keywords: ["PNS", "plexus", "wrist drop", "foot drop", "neuropathy", "sympathetic", "parasympathetic", "vagus", "dysreflexia", "cranial nerves", "stroke", "thrombolysis", "GCS", "delirium", "naloxone"],
        categories: ["fluid-electrolyte"],
      },
    },
  ],
};
