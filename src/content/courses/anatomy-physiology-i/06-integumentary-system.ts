import type { CourseModule } from "../types";

export const integumentarySystem: CourseModule = {
  slug: "integumentary-system",
  title: "The skin: structure, temperature and healing",
  summary:
    "The body's largest organ: the functions of the skin, the epidermis, dermis and hypodermis layer by layer, hair, nails and glands — then reading the skin's colours, thermoregulation and its emergencies, burns by depth and extent with the rule of nines, and the phases of wound healing with what delays them.",
  lessons: [
    {
      slug: "the-skin-layers-and-appendages",
      title: "The skin: layers and appendages",
      minutes: 20,
      objectives: [
        "State the functions of the skin and relate each to nursing observation.",
        "Describe the epidermis, dermis and hypodermis with their structures.",
        "Describe hair, nails and the skin glands with their clinical notes.",
        "Read pallor, erythema, cyanosis and jaundice — including on dark skin.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Two square metres of barrier",
          paragraphs: [
            "The skin — about <strong>2 m²</strong>, 4–5 kg, the body's largest organ — is the wall between the sterile inside and everything else. It <strong>protects</strong> against microbes, chemicals, ultraviolet light and mechanical injury; <strong>senses</strong> touch, pressure, pain and temperature; <strong>regulates temperature</strong> through vessels and sweat; <strong>makes vitamin D</strong> from sunlight starring cholesterol; <strong>excretes</strong> salts, urea and water in sweat; and <strong>signals</strong> — colour, turgor, temperature and moisture report circulation, hydration, oxygenation and liver function before any machine does. Every assessment starts here because the skin is the only organ you can fully inspect without touching anything else.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0010.svg",
          alt: "The skin in section. Epidermis: thin stacked strata from horny corneum down to dividing basale, with no blood vessels. Wavy dermo-epidermal junction below it. Dermis: thick layer holding a hair follicle with bulb, a sebaceous oil gland, a coiled sweat gland with its duct to the surface, Meissner's corpuscles for light touch, Pacinian corpuscles for pressure, blood vessels and nerves. Hypodermis: fat lobules that insulate, cushion and anchor the skin.",
          caption: "Epidermis feeds from below, dermis does the work, hypodermis cushions — and every structure in the section has a clinical story.",
        },
        {
          type: "text",
          heading: "Three layers, three characters",
          paragraphs: [
            "The <strong>epidermis</strong> is stratified squamous epithelium, avascular, fed by diffusion from below. Its <strong>basale</strong> layer divides continuously; daughter <strong>keratinocytes</strong> march upward through <strong>spinosum</strong> and <strong>granulosum</strong>, filling with <strong>keratin</strong>, dying into the horny <strong>corneum</strong> — the whole journey about four weeks. Among them sit <strong>melanocytes</strong> (melanin against ultraviolet light — everyone's count is similar; activity differs), <strong>Langerhans cells</strong> (immune sentinels) and <strong>Merkel cells</strong> (fine touch). The <strong>dermis</strong> beneath is dense connective tissue in two bands: the loose <strong>papillary</strong> layer with its <strong>Meissner's corpuscles</strong> for light touch, and the tough <strong>reticular</strong> layer of collagen and elastin — strength, stretch, and the <strong>striae</strong> (stretch marks) when growth outruns it. Vessels, nerves, glands and follicles all live here. The <strong>hypodermis</strong> (subcutaneous fat) insulates, cushions and anchors — and sets injection depth: too shallow raises an intradermal wheal, through it lands intramuscular.",
          ],
        },
        {
          type: "text",
          heading: "Appendages: hair, nails, glands",
          paragraphs: [
            "<strong>Hair</strong> grows from the <strong>bulb</strong> at the follicle's base, oiled by its <strong>sebaceous gland</strong>, erected by its tiny muscle in cold and fear (<strong>piloerection</strong>). Distribution and loss speak: <strong>hirsutism</strong> suggests androgens, diffuse shedding follows fever, childbirth or crash diets weeks later, and patchy loss with scaling suggests fungal infection. <strong>Nails</strong> are keratin plates over vascular beds — the <strong>lunula</strong> is the visible growth zone, <strong>capillary refill</strong> under 2 seconds proves perfusion, <strong>clubbing</strong> (lost angle, bulbous tips) warns of chronic hypoxia, and spooning (<strong>koilonychia</strong>) of iron deficiency. Of the glands, <strong>eccrine sweat</strong> glands cool the whole body, <strong>apocrine</strong> glands scent the axillae and groin from puberty, <strong>sebaceous</strong> glands oil hair and skin (blocked: acne), and <strong>ceruminous</strong> glands wax the ear canal.",
          ],
        },
        {
          type: "table",
          heading: "Reading the skin's colours — on any skin tone",
          columns: ["Colour", "Mechanism", "Read it here (especially dark skin)", "Think of"],
          rows: [
            ["Pallor", "Less blood or less haemoglobin", "Conjunctiva, oral mucosa, tongue, palms, nail beds", "Anaemia, shock, fear, arterial occlusion"],
            ["Erythema", "Vasodilation, extra flow", "Warmth + swelling where redness hides; compare sides", "Fever, inflammation, allergy, sunburn"],
            ["Cyanosis", "Deoxygenated haemoglobin", "Lips, tongue, oral mucosa (central); fingers, toes (peripheral)", "Central: cardiac/respiratory failure. Peripheral: cold, shock, obstruction"],
            ["Jaundice", "Bilirubin in tissue", "Sclera, hard palate, palms", "Liver disease, haemolysis, blocked bile"],
            ["Bronzing / vitiligo / albinism", "Melanin up, patchy loss, absent", "Compare with the patient's baseline", "Addison's disease; autoimmune; sun protection teaching"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Assess dark skin deliberately",
          body: "Redness, rashes and early pressure damage hide in melanin — so check the sclera, conjunctiva, oral mucosa, tongue, nail beds, palms and soles, feel for warmth, swelling and hardness, compare one side with the other, and ask the patient what has changed. Pressure injury staging on dark skin starts with a non-blanching area that may be purple or blue rather than red — miss it and the first sign you notice is the ulcer.",
        },
      ],
      keyPoints: [
        "Skin protects, senses, regulates temperature, makes vitamin D, excretes and signals — assessment starts here.",
        "Epidermis: basale divides, keratinocytes march up in ~4 weeks; melanocytes, Langerhans and Merkel cells among them; no vessels.",
        "Dermis: papillary (Meissner, light touch) + reticular (collagen strength, striae); glands, follicles, vessels, nerves.",
        "Hypodermis insulates and cushions — and sets injection depth.",
        "Hair (bulb grows, sebaceous oils), nails (refill, clubbing, koilonychia), eccrine/apocrine/sebaceous/ceruminous glands.",
        "Read colour in the mucosae, sclera, tongue, palms and nail beds on dark skin; compare sides and feel for change.",
      ],
      quiz: {
        keywords: ["epidermis", "dermis", "hypodermis", "keratin", "melanin", "sebaceous", "sweat gland", "hair follicle", "capillary refill", "clubbing", "pallor", "cyanosis", "jaundice", "sclera", "pressure injury"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "temperature-control-burns-and-wound-healing",
      title: "Temperature control, burns and wound healing",
      minutes: 20,
      objectives: [
        "Explain the set point, heat production and the four routes of heat loss.",
        "Distinguish fever from hyperthermia and describe heat and cold emergencies.",
        "Classify burns by depth, estimate extent by nines and palms, and state the nursing priorities.",
        "Describe the phases of wound healing and the factors that delay them.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The thermostat and its radiators",
          paragraphs: [
            "Core temperature hovers near <strong>37°C</strong> under the <strong>hypothalamus</strong>, which reads blood temperature and issues orders. Heat is <strong>produced</strong> by metabolism (liver and muscle lead), muscle activity and <strong>shivering</strong> (involuntary tremor that burns fuel fast), plus <strong>non-shivering thermogenesis</strong> from brown fat — the newborn's main furnace, easily exhausted. Heat <strong>leaves</strong> by four routes: <strong>radiation</strong> (infrared to cooler surroundings — the biggest loss), <strong>conduction</strong> (touch: the cold mattress, the wet sheet), <strong>convection</strong> (air or water moving past skin — the fan, the draught), and <strong>evaporation</strong> (sweat and breath moisture — the only route that works when air exceeds body temperature). Faced with heat, vessels <strong>dilate</strong> and glands <strong>sweat</strong>; faced with cold, vessels <strong>constrict</strong>, muscles <strong>shiver</strong> and hairs stand. Nursing manipulates exactly these levers: uncover and fan the fever, cover and warm the exposed elder, dry the newborn immediately — wet skin loses heat catastrophically by conduction plus evaporation together.",
          ],
        },
        {
          type: "text",
          heading: "Fever is not hyperthermia",
          paragraphs: [
            "<strong>Fever</strong> is a <em>raised set point</em>: <strong>pyrogens</strong> (infection, inflammation, transfusion reaction, some drugs) push the hypothalamus up, and the body dutifully climbs — shivering and vasoconstriction on the way up (the <strong>chill phase</strong>), sweating and vasodilation when the set point falls again (the <strong>crisis</strong>). Antipyretics (paracetamol) work by lowering the set point; tepid sponging helps only alongside them, and cold water or alcohol backfire by triggering shivering that makes more heat. <strong>Hyperthermia</strong> is different: the set point is normal but heat production overwhelms loss — exertion in heat, classic heatstroke in elders, malignant hyperthermia under anaesthesia. <strong>Heat exhaustion</strong> (heavy sweating, weakness, headache, fast pulse) still sweats and still responds to rest, shade and fluids; <strong>heatstroke</strong> (hot, dry or failing sweat, confusion, temperature above 40°C) is organ-cooking emergency — cool aggressively and escalate. At the other end, <strong>hypothermia</strong> below 35°C slows everything: shivering stops below ~32°C (a bad sign, not recovery), consciousness fades, arrhythmias threaten — handle gently, warm gradually, and remember the newborn, the elder and the drowned go quiet and cold instead of shivering.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0011.svg",
          alt: "Burns: rule of nines and depth. Front: head 4.5, chest 9, abdomen 9, each arm 4.5, each leg front 9, perineum 1. Back: head 4.5, back and buttocks 18, each arm back 4.5, each leg back 9. Totals: head 9, each arm 9, torso front 18, torso back 18, each leg 18. A patient's palm is about 1 per cent. Depth: first degree red painful dry; second degree blistered weeping sore; third degree white or charred and numb; fourth degree to muscle and bone. Priorities: stop the burning, airway, fluids, warmth, tetanus, then the wound; refer face and airway, hands, feet, perineum, circumferential, electrical and chemical burns, over 10 per cent in children or 15 per cent in adults, and suspicious scald patterns.",
          caption: "Nines for extent, layers for depth — and silence from a deep burn is dead nerves, not recovery.",
        },
        {
          type: "text",
          heading: "Burns: depth, extent, priorities",
          paragraphs: [
            "Burn <strong>depth</strong> decides healing. <strong>First-degree</strong> (epidermis only): red, painful, dry — sunburn. <strong>Second-degree</strong> (into dermis): blistered, weeping, very painful — heals from surviving basale and appendages in 2–3 weeks if uninfected. <strong>Third-degree</strong> (through dermis): white, charred or leathery, <strong>numb</strong> — nerves destroyed — and cannot re-epithelialize; grafts needed. <strong>Fourth-degree</strong> reaches fat, muscle or bone. <strong>Extent</strong> decides resuscitation: the <strong>rule of nines</strong> (head 9, each arm 9, torso front 18, back 18, each leg 18, perineum 1) for adults, the <strong>palm ≈ 1%</strong> for patches — children carry proportionally bigger heads, so paediatric charts adjust. Nursing order is fixed: <strong>stop the burning</strong> (cool running water 20 minutes, remove smouldering clothes and jewellery, never ice), <strong>airway</strong> (soot, singed nose hair, hoarseness, face burns — swelling closes airways fast), <strong>breathing and circulation</strong> with large-bore <strong>IV fluids</strong> titrated to <strong>urine output</strong>, <strong>warmth</strong> (burned skin cannot thermoregulate), <strong>tetanus</strong> status, analgesia, then the wound — cling film or clean dry cover, blisters left intact, elevation, and early referral by the diagram's list. Feed early and high-protein: burns are the hungriest wounds in surgery.",
          ],
        },
        {
          type: "table",
          heading: "Wound healing: three overlapping phases",
          columns: ["Phase (timing)", "What happens", "What the nurse sees and does"],
          rows: [
            ["Inflammatory (0–3 days)", "Clot seals; white cells clear debris and bacteria; redness, heat, swelling, pain", "Normal inflammation vs spreading infection (red streaks, pus, fever, worsening pain) — report the second"],
            ["Proliferative (3 days–3 weeks)", "Granulation fills (beefy red), contraction shrinks edges, epithelium resurfaces", "Protect pink granulation; keep moist per protocol; ensure protein, vitamin C, zinc and fluids"],
            ["Maturation (3 weeks–2 years)", "Collagen remodels along stress lines; scar pales and strengthens to ~80%", "Never as strong as before; sun-protect, massage and mobilize per plan; keloid tendency in dark skin — warn and watch"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Wounds that will not heal are telling you something",
          body: "Run the delay checklist before changing dressings again: infection, dead tissue, diabetes and high glucose, poor perfusion (oedema, pressure, smoking, anaemia), malnutrition and dehydration, steroids and immunosuppression, age — and the dressing itself (wrong moisture, trauma on removal, missed allergy). Healing by secondary intention (open, granulating) is slow by design; a wound stalled for two weeks despite correct care needs review, not routine.",
        },
      ],
      keyPoints: [
        "Set point ~37°C (hypothalamus); heat made by metabolism and shivering; lost by radiation, conduction, convection, evaporation.",
        "Fever is a raised set point (pyrogens) — chill then crisis; hyperthermia overwhelms a normal set point — cool and escalate.",
        "Heat exhaustion sweats and responds; heatstroke is hot, confused, ≥40°C — emergency. Hypothermia: shivering stops ~32°C; newborns go quiet and cold.",
        "Burn depth: 1st red/painful, 2nd blistered, 3rd white/numb, 4th to muscle/bone; extent by nines, palm ≈ 1%.",
        "Burns order: stop burning, airway, fluids to urine output, warmth, tetanus, wound — then feed early, refer by list.",
        "Healing: inflammatory → proliferative → maturation; infection, ischaemia, diabetes, malnutrition, smoking and steroids delay it.",
      ],
      quiz: {
        keywords: ["thermoregulation", "hypothalamus", "fever", "pyrogens", "hyperthermia", "heatstroke", "hypothermia", "shivering", "burns", "rule of nines", "wound healing", "granulation", "keloid", "tetanus", "urine output"],
        categories: ["fundamentals"],
      },
    },
  ],
};
