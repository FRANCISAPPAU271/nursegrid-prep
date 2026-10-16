import type { CourseModule } from "../types";

export const organizationPositionsPlanesCavities: CourseModule = {
  slug: "organization-positions-planes-and-cavities",
  title: "The organized body: positions, planes and cavities",
  summary:
    "The language every later lesson speaks: what anatomy and physiology study, the six levels of organization from chemical to organism, the eleven organ systems and their headline jobs, what the body needs to stay alive — and then the map itself: the anatomical position, the directional terms, the three planes and their sections, and the dorsal and ventral cavities with the membranes that line them.",
  lessons: [
    {
      slug: "from-cells-to-systems-how-the-body-is-organized",
      title: "From cells to systems: how the body is organized",
      minutes: 15,
      objectives: [
        "Distinguish anatomy from physiology and explain why a nurse needs both at the bedside.",
        "List the six levels of structural organization from chemical to organism, giving a nursing example of each.",
        "Name the eleven organ systems and state the headline function of each.",
        "State the body's survival needs and describe homeostasis and negative feedback in plain language.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Anatomy, physiology — and why a nurse needs both",
          paragraphs: [
            "<strong>Anatomy</strong> studies structure — what the body is built from and where each part sits. <strong>Physiology</strong> studies function — what each part does and how the parts work together. A nurse who knows only anatomy can point to the kidney; a nurse who knows physiology understands why the patient with kidney failure is breathless, swollen and drowsy at the same time. Examiners test both together: they describe a structure and ask what fails when it fails, or describe a symptom and ask which structure explains it.",
            "The two are studied at several levels of detail. <strong>Gross anatomy</strong> is what the eye can see — the liver, the femur, the uterus. <strong>Microscopic anatomy</strong> needs a lens: <strong>cytology</strong> studies cells and <strong>histology</strong> studies tissues. <strong>Surface anatomy</strong> is the nurse's daily anatomy — the landmarks felt through the skin to place a hand, a needle or a stethoscope: the iliac crest, the sternum, the apex of the heart. Regional, systemic and clinical anatomy are simply different ways of cutting the same cake; this course follows the <strong>systemic</strong> route, system by system, because that is how patients present and how the licensing examination is built.",
          ],
        },
        {
          type: "table",
          heading: "The six levels of organization, with a nursing example of each",
          columns: ["Level", "What it is", "Example", "Why the nurse cares"],
          rows: [
            ["Chemical", "Atoms joined into molecules", "Water, glucose, haemoglobin", "IV fluids, glucose readings and oxygen are chemistry at the bedside"],
            ["Cellular", "Molecules organized into cells", "A red blood cell, a neurone", "Anaemia, infection and cancer are cell-level diseases"],
            ["Tissue", "Similar cells working together", "Muscle tissue, nervous tissue", "Wound healing is tissues rebuilding; pressure injury is tissues dying"],
            ["Organ", "Two or more tissues in a structure with a job", "The heart, the skin, a bone", "Each organ has a failure pattern you must recognize"],
            ["System", "Organs cooperating on a large task", "The digestive system", "Disease in one organ ripples through its system"],
            ["Organism", "All systems in one living person", "Your patient", "You never nurse a kidney — you nurse the person carrying it"],
          ],
        },
        {
          type: "text",
          heading: "The eleven organ systems at a glance",
          paragraphs: [
            "Every condition in this three-course series belongs to one of eleven systems. Learn the list once, with one headline job each, and every later module has a hook to hang on. Note the overlap: the diaphragm belongs to both the muscular and respiratory stories, and blood serves nearly every system — the body does not respect chapter boundaries, and neither do examiners.",
          ],
        },
        {
          type: "table",
          heading: "The eleven organ systems and their headline jobs",
          columns: ["System", "Main organs", "Headline job"],
          rows: [
            ["Integumentary", "Skin, hair, nails, glands", "Protects, senses, regulates temperature"],
            ["Skeletal", "Bones, joints, cartilage", "Supports, protects, moves with muscle, makes blood"],
            ["Muscular", "Skeletal, cardiac and smooth muscle", "Moves the body and moves substances through it"],
            ["Nervous", "Brain, spinal cord, nerves, sense organs", "Fast control: senses, decides, commands"],
            ["Endocrine", "Pituitary, thyroid, adrenals, pancreas, gonads", "Slow control by hormones"],
            ["Cardiovascular", "Heart, blood vessels, blood", "Transports gases, nutrients, wastes and heat"],
            ["Lymphatic and immune", "Lymph nodes, spleen, thymus, white cells", "Drains fluid, defends against invaders"],
            ["Respiratory", "Nose, pharynx, larynx, trachea, lungs", "Exchanges oxygen and carbon dioxide"],
            ["Digestive", "Mouth to anus, liver, pancreas", "Breaks food down, absorbs nutrients, expels waste"],
            ["Urinary", "Kidneys, ureters, bladder, urethra", "Filters blood, balances water, salts and acid"],
            ["Reproductive", "Gonads, ducts, external genitalia", "Produces offspring; sex hormones shape the body"],
          ],
        },
        {
          type: "text",
          heading: "What the body needs to stay alive",
          paragraphs: [
            "Five needs keep every cell working, and each one points directly at nursing care. <strong>Nutrients</strong> supply energy and building material — the nurse assesses intake, weighs, and feeds the patient who cannot feed themselves. <strong>Oxygen</strong> drives the chemistry that releases that energy — the nurse watches the airway, the breathing and the saturation, because the brain tolerates only minutes without it. <strong>Water</strong> is the medium everything happens in — the nurse balances intake against output. <strong>Normal body temperature</strong> keeps enzymes working — the nurse cools the fever and warms the exposed newborn. <strong>Appropriate pressure</strong> — blood pressure high enough to perfuse, atmospheric pressure to breathe against — is what the nurse measures and defends. Remove any one of these and the rest begin to fail in sequence; that sequence is what assessment is for.",
          ],
        },
        {
          type: "list",
          heading: "The survival needs, each with its nursing watch",
          items: [
            "<strong>Nutrients</strong> — watch intake, weight, wounds that will not heal, the confused elder who has stopped eating.",
            "<strong>Oxygen</strong> — watch rate, depth, effort, colour, saturation and above all consciousness.",
            "<strong>Water</strong> — watch input against output, thirst, skin turgor, sunken eyes and fontanelle, urine colour and volume.",
            "<strong>Temperature</strong> — watch the thermometer, the shivering adult, the newborn who goes quiet and cold instead of febrile.",
            "<strong>Pressure</strong> — watch the blood pressure, the pulse pressure, the capillary refill, the urine output that proves the kidneys are perfused.",
          ],
        },
        {
          type: "text",
          heading: "Homeostasis: the balance every observation measures",
          paragraphs: [
            "<strong>Homeostasis</strong> is the body's habit of holding its internal conditions steady — temperature near 37°C, blood glucose within range, blood pressure enough but not too much — while the outside world changes. Almost everything you will ever chart is a homeostasis report: the vital signs, the glucose, the fluid balance, the electrolytes. When the numbers sit in range, control systems are coping; when they drift, something is overwhelming them, and your job is to notice early.",
            "Most control runs on <strong>negative feedback</strong>: a change triggers a response that reverses it. Blood pressure falls, baroreceptors fire, the heart beats faster and vessels tighten, pressure rises, the signal fades. Body temperature climbs, sweat glands open and vessels in the skin widen, heat leaves, temperature falls. The loop that corrects is the opposite of the drift — that is what 'negative' means. The rarer <strong>positive feedback</strong> amplifies instead: the contracting uterus releases oxytocin, which strengthens the next contraction, which releases more oxytocin, until delivery breaks the loop. Blood clotting runs the same way — each step recruits the next — and so, dangerously, do fever spirals and shock: once amplification starts, the nurse's task is to break the loop before the body cannot.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0030.svg",
          alt: "Negative feedback loop. A stimulus moves a value away from its set point; a receptor detects the change; a control centre compares it with the set point; an effector opposes the change — and the response reverses the original change, restoring the set point.",
          caption: "Stimulus → receptor → control centre → effector → reversal. Nearly every vital sign you chart is one of these loops reporting in.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "How examiners ask this",
          body: "They rarely ask 'define homeostasis'. They describe a loop — 'after bleeding, the pulse rises and the skin goes cold and clammy' — and ask what the body is doing (compensating by negative feedback: faster pump, tightened vessels, blood kept for brain and heart) or they give a labour or clotting story and ask why it is positive rather than negative feedback (because each step strengthens the next until an event — delivery, a sealed vessel — ends it). Learn the examples, not just the definitions.",
        },
      ],
      keyPoints: [
        "Anatomy is structure, physiology is function; surface anatomy is the landmark anatomy nurses use every shift.",
        "Organization runs chemical → cellular → tissue → organ → system → organism — and you nurse the organism, not the organ.",
        "Eleven systems cover the whole body; learn each one's headline job and most conditions file themselves.",
        "Survival needs are nutrients, oxygen, water, temperature and pressure — each maps to something you assess.",
        "Homeostasis holds the internal environment steady; negative feedback reverses a change, positive feedback amplifies it until an event breaks the loop.",
      ],
      quiz: {
        questionIds: ["NG-MOD-AP1-001"],
        keywords: ["levels of organization", "organ systems", "homeostasis", "negative feedback", "positive feedback", "anatomy", "physiology", "survival needs"],
        categories: ["risk-reduction"],
      },
    },
    {
      slug: "positions-directions-planes-and-cavities",
      title: "Positions, directions, planes and cavities",
      minutes: 18,
      objectives: [
        "Describe the anatomical position and explain why every directional term depends on it.",
        "Use the directional terms — including proximal/distal and superficial/deep — correctly in documentation.",
        "Name the sagittal, frontal and transverse planes, the sections they produce, and where each appears in imaging.",
        "Name the dorsal and ventral cavities, their subdivisions, contents and membranes, and state one clinical consequence of each.",
      ],
      blocks: [
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0001.svg",
          alt: "Anatomical position, directions and planes. A: directional terms on a figure standing with palms forward — superior toward the head, inferior toward the feet, medial toward the midline, lateral away from it, proximal near the trunk, distal far from it, anterior facing the viewer, posterior facing away, superficial near the surface, deep further in. B: the three planes — sagittal divides left from right (midsagittal through the midline, parasagittal parallel to it), frontal or coronal is the plane of the page dividing front from back, transverse is the horizontal cut dividing upper from lower, the plane of CT slices.",
          caption: "Every direction in this course is spoken from this stance: standing, facing forward, palms forward.",
        },
        {
          type: "text",
          heading: "The anatomical position: the stance all language assumes",
          paragraphs: [
            "The body is described as if standing upright, facing forward, feet slightly apart, arms at the sides with the <strong>palms facing forward</strong>. The palms matter: with palms forward the radius and ulna lie parallel, and 'medial' and 'lateral' in the forearm stay consistent. Your patient will almost never be in this position — they lie in bed, curled on their side, draped for theatre — but your words still use it. A wound on the 'anterior forearm' is on the palm side even when the patient's palm faces the mattress, and the nurse who documents 'left leg' must mean the patient's left, not their own. Left and right in every record, every handover and every consent form are the <strong>patient's</strong> left and right.",
          ],
        },
        {
          type: "table",
          heading: "Directional terms — the pairs, with ward examples",
          columns: ["Term", "Means", "Ward example"],
          rows: [
            ["Superior / inferior", "Toward the head / toward the feet", "The heart is superior to the diaphragm; the bladder is inferior to the kidneys"],
            ["Anterior / posterior", "Toward the front / toward the back", "The sternum is anterior to the heart; the bedsore is over the posterior sacrum"],
            ["Medial / lateral", "Toward the midline / away from it", "The ulna is medial, the radius lateral; the wound extends 3 cm lateral to the midline"],
            ["Proximal / distal", "Nearer to / farther from the trunk or origin", "The cannula sits proximal to the wrist; numbness distal to the fracture needs escalation"],
            ["Superficial / deep", "Nearer the surface / further inside", "A superficial graze versus a deep laceration; palpate light for superficial, firm for deep"],
            ["Unilateral / bilateral", "One side / both sides", "Unilateral leg swelling suggests a clot; bilateral suggests fluid overload or cardiac causes"],
            ["Ipsilateral / contralateral", "Same side / opposite side", "Weakness contralateral to a stroke; reflexes compared ipsilaterally"],
          ],
        },
        {
          type: "text",
          heading: "Planes and sections: how the body is cut and scanned",
          paragraphs: [
            "A <strong>plane</strong> is an imaginary flat surface; a <strong>section</strong> is the cut face it produces. The <strong>sagittal</strong> plane runs vertically and divides left from right — exactly through the midline it is <strong>midsagittal</strong>, anywhere parallel to that it is <strong>parasagittal</strong>. The <strong>frontal</strong> (coronal) plane also runs vertically but divides front from back; it is the plane of the page you are looking at. The <strong>transverse</strong> (horizontal, cross-sectional) plane runs horizontally and divides upper from lower — and it is the plane of the modern scan: CT and MRI images are series of transverse slices, read from the foot of the bed, which is why the liver appears on the left of the film while sitting on the patient's right. An <strong>oblique</strong> cut runs at an angle and produces the confusing ovals students meet in histology slides.",
            "Surgeons and radiologists live in these planes, and nurses translate them. 'A transverse incision above the pubis' tells you where the dressing sits and which movements will hurt. 'A parasagittal wound' tells you which side. When a scan report says 'a lesion in the right lobe, transverse section', you know which side of the patient to examine — the patient's right, appearing on your left as you face the film.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "The plane questions that repeat",
          body: "Which plane divides the body into upper and lower parts? (Transverse.) Which scan plane shows the liver on the left of the image? (Transverse — viewed from the feet.) What is the difference between midsagittal and parasagittal? (Midline versus parallel to it.) And the documentation trap: whose left is 'left leg'? (The patient's — always.)",
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0002.svg",
          alt: "Body cavities and their membranes. Dorsal: cranial cavity holding the brain and vertebral canal holding the spinal cord, both lined by meninges. Ventral: thoracic cavity above the diaphragm holding lungs, heart and great vessels, lined by pleura and pericardium with the mediastinum between the lungs; abdominal cavity holding stomach, liver, intestines and kidneys, lined by peritoneum; pelvic cavity holding bladder and reproductive organs, continuous with the abdomen. Serous membranes come in pairs: parietal on the wall, visceral on the organ, with a slit between where fluid, blood and infection collect.",
          caption: "Two dorsal cavities, three ventral ones — and the membranes whose space is where effusions, blood and infection gather.",
        },
        {
          type: "text",
          heading: "Cavities: the rooms the organs live in",
          paragraphs: [
            "Internal organs sit in <strong>cavities</strong> that protect them, let them move, and — critically — confine trouble for a while. The <strong>dorsal</strong> cavities face the back: the <strong>cranial cavity</strong> houses the brain and the <strong>vertebral canal</strong> houses the spinal cord, both wrapped in the <strong>meninges</strong>. The <strong>ventral</strong> cavities face the front and are much larger: the <strong>thoracic cavity</strong> above the diaphragm holds the lungs, heart and great vessels; below the diaphragm the <strong>abdominopelvic cavity</strong> divides into the <strong>abdominal cavity</strong> (stomach, liver, intestines, kidneys) and the <strong>pelvic cavity</strong> (bladder, reproductive organs, rectum), with no wall between the two — infection and blood travel freely from one to the other.",
            "The thoracic cavity subdivides further: two <strong>pleural cavities</strong>, one around each lung, and the <strong>pericardial cavity</strong> around the heart, with the <strong>mediastinum</strong> — heart, great vessels, trachea, oesophagus, thymus — sitting between the lungs. Each cavity is lined by a <strong>serous membrane</strong> that comes as a pair: the <strong>parietal</strong> layer lines the wall, the <strong>visceral</strong> layer covers the organ, and a film of fluid between them lets the layers slide. Around the lungs this is the <strong>pleura</strong>, around the heart the <strong>pericardium</strong>, around abdominal organs the <strong>peritoneum</strong>. The slit between the layers is potential space — until air, blood, pus or excess fluid makes it real: a pneumothorax, a pleural effusion, cardiac tamponade, peritonitis. Much of acute nursing is recognizing when a cavity's contents have escaped their room.",
          ],
        },
        {
          type: "table",
          heading: "Cavities, contents, membranes — and what goes wrong in each",
          columns: ["Cavity", "Contents", "Membrane", "When trouble strikes"],
          rows: [
            ["Cranial", "Brain", "Meninges", "Meningitis; raised intracranial pressure with nowhere to expand"],
            ["Vertebral canal", "Spinal cord", "Meninges", "Cord compression; meningitis tracking the whole canal"],
            ["Pleural (×2)", "One lung each", "Pleura", "Pneumothorax, effusion, empyema — breath sounds vanish on that side"],
            ["Pericardial", "Heart", "Pericardium", "Tamponade: fluid strangles filling, pressure falls, neck veins rise"],
            ["Mediastinum", "Heart, great vessels, trachea, oesophagus", "—", "A widened mediastinum on chest X-ray is an emergency until proven otherwise"],
            ["Abdominal", "Stomach, liver, intestines, kidneys", "Peritoneum", "Peritonitis: rigid board-like abdomen, the patient lies perfectly still"],
            ["Pelvic", "Bladder, reproductive organs, rectum", "Peritoneum (partly)", "Pelvic infection and bleeding present with abdominal signs — no wall divides them"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "A cavity confines trouble — briefly",
          body: "The peritoneum holds a perforated ulcer's spill inside the abdomen, which is why the pain stays abdominal at first — but it also means the whole cavity becomes infected within hours. Never be reassured because pain 'hasn't spread': inside a cavity, spread is a matter of time, and the rigid, silent, still patient with a board-like abdomen needs a surgeon, not reassurance.",
        },
      ],
      keyPoints: [
        "The anatomical position — standing, facing forward, palms forward — is the stance every directional term assumes; left and right are the patient's.",
        "Superior/inferior, anterior/posterior, medial/lateral, proximal/distal, superficial/deep: learn them as pairs with one example each.",
        "Sagittal divides left from right, frontal divides front from back, transverse divides upper from lower — CT and MRI read in transverse slices from the feet.",
        "Dorsal cavities (cranial, vertebral) hold brain and cord in meninges; ventral cavities (thoracic; abdominal and pelvic) hold the viscera.",
        "Serous membranes pair up — parietal on the wall, visceral on the organ — and the space between is where effusions, blood and infection collect.",
        "The diaphragm divides thorax from abdomen; nothing divides abdomen from pelvis, so pelvic trouble presents abdominally.",
      ],
      quiz: {
        questionIds: ["NG-MOD-AP1-002","NG-MOD-AP1-003"],
        keywords: ["anatomical position", "directional terms", "proximal distal", "body planes", "sagittal", "transverse", "body cavities", "peritoneum", "pleura", "pericardium", "meninges", "mediastinum"],
        categories: ["risk-reduction"],
      },
    },
  ],
};
