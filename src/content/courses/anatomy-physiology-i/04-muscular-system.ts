import type { CourseModule } from "../types";

export const muscularSystem: CourseModule = {
  slug: "muscular-system",
  title: "Muscles: contraction and the major players",
  summary:
    "The engine room: the three muscle types and how they differ, the microstructure from muscle to sarcomere, the neuromuscular junction and the sliding-filament theory, energy for contraction and what fatigue and rigor mean — then the naming logic, origin–insertion–action, the major skeletal muscles by region, intramuscular injection landmarks, and the disorders that weaken muscle.",
  lessons: [
    {
      slug: "muscle-tissue-and-how-it-contracts",
      title: "Muscle tissue and how it contracts",
      minutes: 20,
      objectives: [
        "Compare skeletal, cardiac and smooth muscle in control, appearance, cells and location.",
        "Trace the structure from whole muscle to sarcomere and state what each wrapping and filament does.",
        "Explain neuromuscular excitation and the sliding-filament theory step by step.",
        "Explain the energy systems of contraction, and what fatigue, cramp and rigor mortis represent.",
        "Distinguish twitch, tetanus, tone, and isotonic versus isometric contraction.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Three muscles, three temperaments",
          paragraphs: [
            "Nearly half the body's weight is muscle, and it all does one thing: <strong>shorten on command</strong>. Everything else — walking, breathing, blinking, squeezing blood through vessels and food through gut — is arrangement. The three types differ in who commands them and how they look doing it, and examiners test the contrast relentlessly, so learn it as a table and keep it.",
          ],
        },
        {
          type: "table",
          heading: "The three muscle types compared",
          columns: ["", "Skeletal", "Cardiac", "Smooth"],
          rows: [
            ["Control", "Voluntary (somatic nerves)", "Involuntary, self-exciting", "Involuntary (autonomic nerves, hormones)"],
            ["Cells", "Long cylinders, many nuclei, striped", "Branching, one nucleus, striped, welded by intercalated discs", "Short spindles, one nucleus, no stripes"],
            ["Where", "Bolted to bone (plus tongue, eye, diaphragm)", "Heart wall only", "Gut, vessels, airways, bladder, uterus, iris"],
            ["Speed / stamina", "Fast, powerful, tires", "Steady rhythm, never tires", "Slow squeeze, tireless, holds tone for hours"],
            ["Headline job", "Move the skeleton", "Pump blood", "Move substances through tubes"],
          ],
        },
        {
          type: "text",
          heading: "From muscle to sarcomere",
          paragraphs: [
            "A skeletal muscle is wrapped like a cable. The <strong>epimysium</strong> sheaths the whole muscle, the <strong>perimysium</strong> bundles fibres into <strong>fascicles</strong>, and the <strong>endomysium</strong> wraps each <strong>muscle fibre</strong> — itself a giant multinucleated cell. All three wrappings converge at the ends into <strong>tendon</strong>, which bolts muscle to bone. Inside the fibre, <strong>myofibrils</strong> run end to end, and each myofibril is a chain of <strong>sarcomeres</strong> — the contractile unit, Z-disc to Z-disc — built from thin <strong>actin</strong> filaments anchored to the Z-discs and thick <strong>myosin</strong> bundles between them, laced with <strong>sarcoplasmic reticulum</strong> that stores calcium and a rich capillary bed that feeds the whole affair.",
            "The nerve meets the fibre at the <strong>neuromuscular junction</strong>: one motor neurone plus all the fibres it commands is a <strong>motor unit</strong> — few fibres per unit where precision matters (fingers, eyes), hundreds where power matters (thigh). The impulse arrives, <strong>acetylcholine (ACh)</strong> spills across the gap, the fibre membrane depolarizes, calcium floods out of the sarcoplasmic reticulum — and contraction begins. Whatever interrupts this chain paralyzes: <strong>myasthenia gravis</strong> destroys ACh receptors (fatigue that worsens through the day, drooping eyelids), <strong>botulism</strong> blocks ACh release, and muscle relaxants used in anaesthesia jam the receptors on purpose.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0006.svg",
          alt: "The sarcomere: sliding filaments. Relaxed: Z-discs far apart with a wide H zone, thin actin filaments barely overlapping the thick myosin bundle. Contracted: Z-discs pulled together, H zone gone, actin slid deep over myosin. Myosin heads grab, pull, release and repeat, each cycle spending one ATP; calcium opens the binding sites and its removal closes them.",
          caption: "Filaments never shorten — actin slides over myosin and the Z-discs draw together. Calcium starts it, ATP pays for it.",
        },
        {
          type: "text",
          heading: "The sliding-filament theory, step by step",
          paragraphs: [
            "Contraction is myosin heads rowing actin toward the centre. <strong>One</strong>: calcium exposes actin's binding sites. <strong>Two</strong>: energized myosin heads grab them (the <strong>cross-bridge</strong>). <strong>Three</strong>: the heads pivot — the <strong>power stroke</strong> — dragging actin inward as the sarcomere shortens. <strong>Four</strong>: fresh ATP binds each head and releases it. <strong>Five</strong>: the ATP is spent re-cocking the head for the next stroke. Thousands of sarcomeres rowing together shorten the whole fibre; the <strong>H zone</strong> narrows and vanishes while the filaments themselves never change length. <strong>Relaxation</strong> is active too: calcium is pumped back into storage, the sites close, and the muscle is pulled long again by its <strong>antagonist</strong> or by gravity.",
            "Energy arrives in layers. A few seconds of <strong>ATP</strong> on hand, then <strong>creatine phosphate</strong> rebuilds it for roughly half a minute of hard effort, then <strong>aerobic respiration</strong> sustains steady work — and when oxygen cannot keep up, <strong>anaerobic glycolysis</strong> with its <strong>lactic acid</strong> debt, repaid by panting after the sprint. <strong>Fatigue</strong> is chemistry failing: fuel low, acid high, ions disturbed. <strong>Cramp</strong> is a stuck, painful partial tetanus — dehydration, salt loss and overuse set it up. And <strong>rigor mortis</strong> is the theory's grim proof: with no ATP made after death, cross-bridges lock wherever they stand until decay dissolves them, hours later.",
          ],
        },
        {
          type: "list",
          heading: "How whole muscles behave: the vocabulary",
          items: [
            "<strong>Twitch</strong> — one stimulus, one brief contraction; the laboratory unit everything builds from.",
            "<strong>Summation and tetanus</strong> — stimuli arriving before relaxation ends add up; fused, sustained contraction is tetanus (smooth everyday movement is unfused tetanus, not single twitches).",
            "<strong>Tone</strong> — resting partial contraction that keeps posture and readiness; lost in sleep, coma and lower-motor-neurone injury.",
            "<strong>Isotonic</strong> — tone constant, length changing: <strong>concentric</strong> (shortening, lifting the load) and <strong>eccentric</strong> (lengthening under load, lowering it — where soreness lives).",
            "<strong>Isometric</strong> — length fixed, tension rising: pushing a wall, the plank, gripping. Blood pressure spikes during it — warn cardiac patients.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Contraction questions in one pass",
          body: "What does calcium do? (Opens actin's binding sites — contraction; its removal is relaxation.) What does ATP do? (Releases and re-cocks the myosin head — no ATP, no release, hence rigor.) What ends the signal at the junction? (Acetylcholinesterase destroying ACh.) Twitch vs tetanus? (Single vs fused sustained.) Isotonic vs isometric? (Moving vs pushing without moving.) Answer those and the physiology half of this module is banked.",
        },
      ],
      keyPoints: [
        "Skeletal is voluntary, striped, multinucleated; cardiac is striped, branching, self-exciting; smooth is involuntary, unstriped, tireless.",
        "Muscle → fascicle → fibre → myofibril → sarcomere; epi/peri/endomysium converge as tendon.",
        "Nerve impulse → ACh → calcium release → cross-bridge cycling → sarcomere shortens; pumping calcium back relaxes.",
        "Sliding filaments: actin slides over myosin, H zone vanishes, filaments never shorten; ATP releases each head.",
        "Energy layers: ATP → creatine phosphate → aerobic → anaerobic debt; fatigue is chemistry, cramp is stuck contraction, rigor is locked bridges.",
        "Everyday movement is unfused tetanus; tone is resting readiness; isometric effort spikes blood pressure.",
      ],
      quiz: {
        questionIds: ["NG-MOD-AP1-010","NG-MOD-AP1-011"],
        keywords: ["muscle", "sarcomere", "sliding filament", "actin", "myosin", "neuromuscular junction", "acetylcholine", "tetanus", "muscle tone", "rigor mortis", "creatine", "oxygen debt", "myasthenia"],
        categories: ["risk-reduction"],
      },
    },
    {
      slug: "the-major-skeletal-muscles",
      title: "The major skeletal muscles",
      minutes: 20,
      objectives: [
        "Decode muscle names from location, size, shape, direction, attachments and action.",
        "Define origin, insertion and action, and the roles of prime mover, antagonist, synergist and fixator.",
        "Name the major muscles by region with their headline actions and one nursing note each.",
        "Landmark the three intramuscular injection sites and state why dorsogluteal is retired.",
        "Describe disuse atrophy and how positioning and range-of-motion exercises prevent it.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Names that describe themselves",
          paragraphs: [
            "Muscle names are compressed descriptions, and decoding them beats memorizing them. <strong>Location</strong>: frontalis (forehead), tibialis anterior (front of shin). <strong>Size</strong>: gluteus maximus versus minimus, pectoralis major versus minor. <strong>Shape</strong>: trapezius (trapezoid), deltoid (triangular, like the Greek delta). <strong>Direction of fibres</strong>: rectus (straight, as in rectus abdominis and rectus femoris), oblique, transverse. <strong>Attachments</strong>: sternocleidomastoid runs sternum–clavicle–mastoid, saying its whole course aloud. <strong>Action</strong>: flexor, extensor, adductor. <strong>Head count</strong>: biceps (two), triceps (three), quadriceps (four). Read a new name through these seven lenses and it usually introduces itself.",
            "Each muscle pulls from its <strong>origin</strong> (the fixed, usually proximal attachment) toward its <strong>insertion</strong> (the moved, usually distal attachment) to produce its <strong>action</strong>. Around every movement the roles divide: the <strong>prime mover (agonist)</strong> does the work, the <strong>antagonist</strong> opposes and must relax, <strong>synergists</strong> assist and steady, and <strong>fixators</strong> lock the origin's bone so the pull lands where intended. Flex the elbow and the biceps brachii is prime mover, the triceps antagonist, the brachialis synergist — and every spastic, flaccid or contracted limb you will ever position is this partnership disturbed.",
          ],
        },
        {
          type: "table",
          heading: "The major muscles: region, action, nursing note",
          columns: ["Muscle", "Headline action", "Nursing note"],
          rows: [
            ["Sternocleidomastoid", "Turns and flexes the head", "Landmark for the carotid pulse and jugular veins; wryneck (torticollis) twists it"],
            ["Trapezius", "Shrugs, steadies the shoulder", "Carries stress tension; shrug tests the spinal accessory nerve"],
            ["Pectoralis major", "Pulls the arm across the chest", "Wasted after mastectomy; push-up motion tests it"],
            ["Deltoid", "Lifts the arm sideways", "IM site (≤1 mL); wasted in axillary nerve injury"],
            ["Biceps brachii / triceps", "Flex / extend the elbow", "Biceps reflex (C5–6), triceps reflex (C7–8)"],
            ["Rectus abdominis", "Flexes the trunk", "Surgical incisions split it; assess tone before mobilizing"],
            ["Erector spinae", "Holds the spine upright", "Spasm is the commonest 'back pain'; log-roll to protect it"],
            ["Diaphragm", "The muscle of breathing in", "Hiccups are its spasm; high spinal injury silences the intercostals but spares it (C3–5)"],
            ["Gluteus maximus / medius", "Extend the hip / steady the pelvis", "Trendelenburg gait when medius fails; ventrogluteal IM site"],
            ["Quadriceps (rectus femoris, vasti)", "Extend the knee", "Vastus lateralis is the infant IM site; wasting strands elders from chairs"],
            ["Hamstrings", "Flex the knee, extend the hip", "Tight in sciatica; the popliteal pulse hides behind them"],
            ["Gastrocnemius + soleus (calf)", "Point the foot (plantarflex)", "DVT forms in calf veins — measure, don't massage, a hot swollen calf"],
            ["Tibialis anterior", "Lifts the foot (dorsiflex)", "Foot drop when it fails; dorsalis pedis pulse runs beside its tendon"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0007.svg",
          alt: "Intramuscular sites: landmarks, not guesses. Deltoid: three fingerbreadths below the acromion into the triangle, maximum about 1 mL. Vastus lateralis: middle third of the outer thigh between a hand above the knee and a hand below the greater trochanter — the infant site, 1 to 3 mL in adults. Ventrogluteal: heel of hand on the greater trochanter, index toward the ASIS, middle fanned back, inject the centre of the V — the adult site of choice, 1 to 3 mL. Dorsogluteal is retired because the sciatic nerve and gluteal artery live there.",
          caption: "Three sites, three landmark rituals — and the dorsogluteal quadrant retired for endangering the sciatic nerve.",
        },
        {
          type: "text",
          heading: "From muscles to needles: the IM landmarks",
          paragraphs: [
            "Intramuscular injection is applied muscle anatomy with no margin for guessing, because the structures to avoid — sciatic nerve, radial nerve, gluteal artery — cannot be seen or felt. The <strong>deltoid</strong> takes small volumes (about 1 mL): find the <strong>acromion</strong>, drop three fingerbreadths, inject the triangle's centre at 90°, clear of the radial nerve below and the bone beneath. The <strong>vastus lateralis</strong> takes 1–3 mL in adults and is the <strong>infant site</strong> (no deltoid bulk, no ventrogluteal cooperation): one hand above the knee, one below the greater trochanter, the middle third of the outer thigh. The <strong>ventrogluteal</strong> is the <strong>adult site of choice</strong> for 1–3 mL: heel of the hand on the <strong>greater trochanter</strong>, index finger to the <strong>anterior superior iliac spine</strong>, middle finger fanned toward the iliac crest, needle into the centre of the V — thick muscle, no major nerves, sealed from the rectum's bacteria.",
            "And the site your predecessors used most is the one to unlearn: the <strong>dorsogluteal</strong> (upper-outer buttock) sits over the <strong>sciatic nerve</strong> and the superior gluteal artery, varies wildly with body shape, and risks fat instead of muscle in many patients. Guidelines retired it years ago; examiners now ask <em>why</em> ventrogluteal replaced it, and the answer is anatomy — the landmarks above name structures with fixed addresses, while 'upper-outer quadrant' never did.",
          ],
        },
        {
          type: "text",
          heading: "When muscle weakens or wastes",
          paragraphs: [
            "A <strong>strain</strong> tears muscle or tendon (the sprain's muscular cousin), a <strong>cramp</strong> locks it painfully short, and <strong>fibromyalgia</strong> pains it without damage. <strong>Muscular dystrophy</strong> (Duchenne, X-linked, boys) replaces muscle with fat and scar — the Gowers' manoeuvre, climbing up his own legs to stand, is the classic sign. <strong>Myasthenia gravis</strong> destroys acetylcholine receptors: strength that fades through the day, ptosis and diplopia first, crisis when breathing muscles join. But the commonest muscle disease on any ward is <strong>disuse atrophy</strong>: a week of bed rest visibly wastes the quadriceps, and the prevention is nursing — <strong>positioning</strong> that holds joints through their range, <strong>passive and active range-of-motion exercises</strong>, sitting out, standing early, and treating every day in bed as a day of muscle lost. The sarcomere you learned this module is what those exercises are feeding.",
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Range of motion is muscle physiology at the bedside",
          body: "Move each joint through flexion, extension, abduction, adduction and rotation daily — supporting below and above the joint, never forcing past pain — and you maintain sarcomere length, joint nutrition and circulation together. Document what you did and what resisted: the shoulder that stops at ninety degrees today is the frozen shoulder of next month unless someone notices.",
        },
      ],
      keyPoints: [
        "Names encode location, size, shape, direction, attachments, action and heads — decode, don't memorize.",
        "Origin is fixed, insertion moves; prime mover works, antagonist relaxes, synergists steady, fixators lock.",
        "Deltoid ≤1 mL; vastus lateralis is the infant site; ventrogluteal is the adult choice; dorsogluteal is retired (sciatic nerve).",
        "Know one action and one nursing note for each major muscle — landmarks, reflexes, pulses and gaits.",
        "Myasthenia fatigues through the day (ACh receptors); Duchenne climbs his own legs (Gowers'); disuse wastes quads in a week.",
        "Positioning and daily range-of-motion through every plane is how nurses feed sarcomeres and joints.",
      ],
      quiz: {
        questionIds: ["NG-MOD-AP1-012"],
        keywords: ["origin insertion", "prime mover", "antagonist", "deltoid", "vastus lateralis", "ventrogluteal", "intramuscular", "quadriceps", "hamstring", "diaphragm", "sternocleidomastoid", "myasthenia", "muscular dystrophy", "atrophy", "range of motion"],
        categories: ["risk-reduction"],
      },
    },
  ],
};
