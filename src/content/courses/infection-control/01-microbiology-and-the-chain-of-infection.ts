import type { CourseModule } from "../types";

export const microbiologyAndTheChainOfInfection: CourseModule = {
  slug: "microbiology-and-the-chain-of-infection",
  title: "Microbiology and the chain of infection",
  summary: "The organisms behind infection — bacteria and the Gram stain, spores and capsules, viruses, fungi and parasites, normal flora and opportunists, virulence and the incubation period, innate and adaptive immunity — and then the chain of infection itself: agent, reservoir, portals, the four transmission routes, fomites and vectors, the susceptible host, how every nursing intervention breaks a link, what a health care-associated infection is and why it matters in Ghana, and the levels of prevention.",
  lessons: [
    {
      slug: "microorganisms-pathogenicity-and-the-bodys-defences",
      title: "Microorganisms, pathogenicity and the body's defences",
      minutes: 18,
      objectives: [
        "Classify the organisms that cause infection — bacteria by Gram stain, shape and oxygen requirement; viruses; fungi; protozoa and helminths — and name the common examples met on Ghanaian wards.",
        "Explain why spores, capsules and endotoxin matter for infection control and for the patient, including why boiling and alcohol do not sterilise.",
        "Distinguish normal flora, colonisation, opportunistic infection and true infection, and explain virulence, infective dose and incubation period.",
        "Describe innate and adaptive immunity, active and passive immunity, herd immunity and the white cell differential, and recognise the patient whose defences are missing.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Why a nurse needs microbiology",
          paragraphs: [
            "Infection prevention and control (IPC) is applied microbiology. Every rule you will meet in this course — wash for forty seconds, autoclave rather than boil, use an N95 for tuberculosis but a surgical mask for meningitis, never take a urine sample from the drainage bag — exists because of something an organism can or cannot do. Learn <strong>what the organism is and how it behaves</strong> and the rules stop being a list to memorise and become things you could have worked out yourself.",
            "Microorganisms are organisms too small to see without a microscope: <strong>bacteria</strong>, <strong>viruses</strong>, <strong>fungi</strong> and <strong>protozoa</strong>, with the larger <strong>helminths</strong> (worms) and <strong>ectoparasites</strong> (lice, scabies mites) usually studied alongside them. Most are harmless or useful; a <strong>pathogen</strong> is one that can cause disease, and <strong>pathogenicity</strong> is its ability to do so. Whether disease actually follows depends on three things at once: the organism (its <strong>virulence</strong> and the <strong>dose</strong> delivered), the route by which it arrives, and the <strong>resistance of the host</strong>.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MCB-2488.svg",
          alt: "The Gram stain explained — Gram-positive organisms stain purple because a thick peptidoglycan wall holds the crystal violet (staphylococci in clusters, streptococci in chains, spore-forming clostridia), Gram-negative organisms stain pink because a thin wall with an outer membrane loses the violet (E. coli, Klebsiella, Salmonella, Shigella, Pseudomonas, Vibrio cholerae, Neisseria diplococci) and that outer membrane is endotoxin; a table of shape, arrangement and example; aerobes, anaerobes and facultative organisms; and the two structures that decide questions — the spore that survives boiling, drying and alcohol and needs the autoclave, and the capsule that hides the organism from white cells.",
          caption: "Say the Gram reaction, the shape and the arrangement in that order and you have usually named the organism: Gram-positive cocci in clusters is Staphylococcus aureus; Gram-negative rods in a urine culture is most often Escherichia coli.",
        },
        {
          type: "table",
          heading: "Bacteria — the classification that predicts behaviour",
          columns: ["Feature", "What it means", "Why it matters to the nurse"],
          rows: [
            ["<strong>Gram-positive</strong> (stains purple)", "Thick peptidoglycan wall retains crystal violet. Staphylococcus (clusters), Streptococcus (chains), Clostridium (spore-forming rods), Enterococcus.", "Commonest causes of skin, wound and surgical-site infection; generally penicillin-susceptible unless resistant, as in MRSA (methicillin-resistant Staphylococcus aureus)."],
            ["<strong>Gram-negative</strong> (stains pink)", "Thin wall plus an outer membrane that takes the counterstain. E. coli, Klebsiella, Salmonella, Shigella, Pseudomonas, Vibrio cholerae, Neisseria (diplococci).", "The outer membrane is <strong>endotoxin</strong>, released when the cell dies — which is why a patient with Gram-negative septicaemia can deteriorate in the hours after the first antibiotic dose. Common in urinary, abdominal and device-related infection and in the hospital environment (Pseudomonas loves wet places)."],
            ["<strong>Aerobe / anaerobe / facultative</strong>", "Aerobes need oxygen; anaerobes grow only without it (tetanus, gas gangrene, deep abscesses, the bowel); facultative organisms grow either way — most ward organisms.", "A deep, dirty, closed wound is an anaerobic environment, which is why it is cleaned and left open rather than tightly sutured, and why a crushed or soil-contaminated wound carries a tetanus risk."],
            ["<strong>Spore</strong>", "A dormant, armoured form made by Clostridium tetani, Clostridioides difficile, Bacillus anthracis. Survives boiling, drying, alcohol and most disinfectants.", "Only <strong>sterilisation</strong> (steam under pressure, or chemical sterilants) kills spores. Alcohol hand rub does not remove C. difficile spores — hands must be washed with soap and water after caring for a patient with infectious diarrhoea."],
            ["<strong>Capsule</strong>", "A slime coat that hides the organism from phagocytes: pneumococcus, meningococcus, Haemophilus influenzae type b, Klebsiella.", "Explains virulence, why these organisms kill patients without a spleen (sickle cell disease) and why the vaccines against them target the capsule."],
            ["<strong>Toxins</strong>", "Exotoxins are secreted proteins (tetanus, cholera, diphtheria); endotoxin is the Gram-negative outer membrane.", "Cholera's watery diarrhoea and tetanus's spasms are toxin effects — the patient needs the toxin's effect treated (fluids; muscle relaxants, antitoxin) as much as the organism."],
          ],
        },
        {
          type: "text",
          heading: "Viruses, fungi and parasites",
          paragraphs: [
            "<strong>Viruses</strong> are not cells: a strand of DNA or RNA in a protein coat, sometimes with a lipid envelope, able to multiply only inside a living cell. Antibiotics do nothing to them — the reason the mother who asks for amoxicillin for her child's two-day cold should leave with advice rather than capsules. <strong>Enveloped</strong> viruses (HIV, hepatitis B and C, influenza, measles, Ebola, Marburg, Lassa, SARS-CoV-2) are destroyed by alcohol and detergents; <strong>non-enveloped</strong> viruses (hepatitis A, rotavirus, norovirus, poliovirus) are tougher, survive on surfaces and in water for long periods, and are why faecal–oral outbreaks keep going until hands, water and food are dealt with.",
            "<strong>Fungi</strong> — yeasts such as Candida and moulds such as the dermatophytes of ringworm — are opportunists. Candida thrives when antibiotics have cleared the competing bacteria, when the patient has diabetes or HIV, or where a device or moist skin fold gives it a home: oral thrush, vaginal candidiasis, a sore red groin under a wet pad, a catheter urine that grows yeast.",
            "<strong>Protozoa</strong> (Plasmodium, Entamoeba histolytica, Giardia, Trichomonas) and <strong>helminths</strong> (hookworm, Ascaris, Schistosoma, Onchocerca, Wuchereria) are the parasites of Ghana. Most reach the host through water, soil, food or a vector rather than from one patient to the next, so their control is environmental — latrines, footwear, safe water, nets, mass drug administration — rather than ward-based isolation. The exception that matters in hospital is <strong>scabies</strong>, an ectoparasite spread by skin contact and shared linen, which needs contact precautions.",
          ],
        },
        {
          type: "table",
          heading: "Words that appear in questions — and the distinctions they test",
          columns: ["Term", "Meaning", "The trap"],
          rows: [
            ["<strong>Normal flora</strong> (commensals)", "Organisms that live on skin, in the mouth, gut and vagina without harm, and that protect by crowding out pathogens.", "Normal flora in the wrong place is infection: gut E. coli in the bladder, skin staphylococci on a cannula tip. Broad-spectrum antibiotics kill flora and open the door to Candida and C. difficile."],
            ["<strong>Colonisation</strong>", "The organism is present and multiplying but the tissue is not reacting — no inflammation, no symptoms.", "All chronic wounds are colonised; swabbing and treating colonisation breeds resistance. Treat the patient's signs, not the laboratory report."],
            ["<strong>Infection</strong>", "The organism invades, multiplies and the host responds — local inflammation, pus, fever, raised white cells.", "Infection without fever is common in the very old, the malnourished and the neutropenic; a new confusion or a fall may be the only sign."],
            ["<strong>Opportunistic infection</strong>", "Disease from an organism that a healthy host would resist — Pneumocystis, cryptococcus, oral thrush, cytomegalovirus in HIV or on chemotherapy.", "The organism is weak; the host is weaker. Protect the host (ART, cotrimoxazole prophylaxis, hand hygiene around the neutropenic patient)."],
            ["<strong>Virulence</strong>", "The degree of pathogenicity — how few organisms are needed and how much damage follows. Capsules, toxins and adhesins raise it.", "Virulence is a property of the organism; <strong>susceptibility</strong> is a property of the host. Questions swap them."],
            ["<strong>Infective dose</strong>", "The number of organisms needed to cause disease — a few hundred Shigella, but millions of Vibrio cholerae.", "A low infective dose means person-to-person spread on hands is enough (shigellosis); a high one means contaminated water or food is usually involved (cholera)."],
            ["<strong>Incubation period</strong>", "Time from exposure to first symptoms — hours for staphylococcal food poisoning, 1–3 days for cholera, 10–14 for measles, 2–21 for Ebola and Marburg, weeks to months for hepatitis B.", "It sets the length of quarantine for a well contact and tells you when a case could have been infected — look back one incubation period from onset."],
            ["<strong>Carrier</strong>", "A person who harbours and sheds the organism without symptoms — the typhoid carrier in the food vendor, the hepatitis B surface-antigen-positive mother.", "Carriers are why standard precautions apply to <strong>every</strong> patient: the infectious ones are not labelled."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-CLP-2790.svg",
          alt: "Reading a full blood count — red cell indices and their likely causes in Ghana, then the white cell differential: neutrophils up in bacterial infection, lymphocytes up in viral infection and tuberculosis, eosinophils up with parasites and allergy, and neutrophils under 1.0 meaning the patient cannot make pus so fever alone is an emergency; results that must be telephoned rather than filed, including any positive blood culture; and the sample-quality questions to ask before believing any result.",
          caption: "The differential is the body's own report on the kind of infection: neutrophils rise for bacteria, lymphocytes for viruses and tuberculosis, eosinophils for worms. A neutrophil count below 1.0 × 10⁹/L removes the body's first line of defence — that patient's fever is treated as sepsis within the hour.",
        },
        {
          type: "text",
          heading: "The body's defences",
          paragraphs: [
            "<strong>Innate (non-specific) immunity</strong> is present from birth and the same for every organism: intact <strong>skin and mucous membranes</strong>, stomach acid, the cough and the mucociliary escalator, tears and urine flow that wash organisms away, normal flora that compete, <strong>phagocytes</strong> (neutrophils and macrophages) that engulf, the complement system, fever and <strong>inflammation</strong> — redness, heat, swelling and pain, which are the repair process arriving rather than the enemy. Almost every health care-associated infection is a breach of innate defences: a cannula through the skin, a catheter past the urethra, an endotracheal tube past the cough, an antibiotic that has cleared the flora.",
            "<strong>Adaptive (specific) immunity</strong> learns. B lymphocytes make <strong>antibodies</strong> against a particular organism; T lymphocytes kill infected cells and direct the response; <strong>memory cells</strong> remain, so the second exposure produces a faster, stronger response — which is what a booster dose exploits. Two questions classify every kind of immunity: <em>who made the antibody?</em> (the patient — <strong>active</strong>; somebody else — <strong>passive</strong>) and <em>was it given on purpose?</em> (nature — <strong>natural</strong>; a clinician — <strong>artificial</strong>). Having had measles is natural active; the measles vaccine is artificial active; antibodies across the placenta and in breast milk are natural passive; tetanus immunoglobulin, hepatitis B immunoglobulin and anti-rabies immunoglobulin are artificial passive — immediate, but gone in weeks, with no memory.",
            "<strong>Herd immunity</strong> is the protection an unimmunised person receives when enough of the people around her are immune that the organism cannot find a chain of susceptible hosts. It protects the newborn too young for measles vaccine and the child on chemotherapy who cannot be given a live vaccine — and it collapses when coverage falls, which is why a measles outbreak follows a district's slide from 95 to 70 per cent coverage.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MCB-2531.svg",
          alt: "Immunity sorted by two questions — who made the antibody (the patient did, active; it was handed over, passive) and was it given on purpose (nature, natural; a clinician, artificial) — giving four boxes with examples: having had measles, the measles vaccine, antibodies from mother to baby through the placenta and breast milk, and tetanus immunoglobulin; active is slow to develop but long-lasting with memory cells, passive is immediate but short-lived; the deep wound with no tetanus cover is given both immunoglobulin now and vaccine for later; and herd immunity protects the newborn and the immunosuppressed.",
          caption: "Passive covers the gap while active develops. The same logic appears in this course three times: tetanus-prone wounds, the baby born to a hepatitis B-positive mother, and the unvaccinated nurse after a needlestick from a hepatitis B carrier — immunoglobulin now, vaccine for later.",
        },
        {
          type: "list",
          heading: "The patient whose defences are down — who needs you to be most careful",
          items: [
            "<strong>Neutropenia</strong> (chemotherapy, leukaemia, severe HIV, some drugs): no neutrophils means no pus, no redness, sometimes no fever until the organism is in the blood. Any temperature of 38 °C or above is an emergency — cultures and antibiotics within the hour, and no rectal thermometers.",
            "<strong>HIV with a low CD4 count</strong>, patients on <strong>corticosteroids</strong> or other immunosuppressants, <strong>diabetes</strong> (high glucose impairs phagocytes and feeds organisms), <strong>severe malnutrition</strong> (the child with kwashiorkor may have infection without fever), and <strong>sickle cell disease</strong> (functional asplenia — overwhelming pneumococcal and Salmonella infection).",
            "<strong>The extremes of age</strong>: the newborn has immature immunity and only the antibodies her mother gave her; the older adult has waning immunity, thinner skin, less cough and often a catheter, and presents infection as confusion or a fall.",
            "<strong>Breached barriers</strong>: burns, pressure injuries, surgical wounds, every indwelling device, intubation, and the gut wall damaged by chemotherapy or severe malnutrition.",
            "<strong>Unimmunised</strong>: the child who defaulted from the schedule, the nurse who never completed hepatitis B vaccination, the adult whose tetanus cover lapsed decades ago.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "How microbiology is examined",
          body: "Expect recall items that turn on one fact: Gram-positive cocci in clusters (Staphylococcus aureus); why instruments are autoclaved rather than soaked in alcohol (spores); why a Gram-negative septicaemia worsens after the first dose (endotoxin release); which organism a capsule protects (pneumococcus) and which patient it kills (asplenic); what a facultative anaerobe is; what immunity tetanus immunoglobulin gives (artificial passive) and why a booster works better than the first dose (memory cells). Then expect application items that hide the same facts inside a ward scenario — the catheter urine that grows bacteria in a patient with no symptoms is colonisation, not infection, and is not treated.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Ghana's organisms",
          body: "In Ghanaian hospitals the organisms that matter most for IPC are Staphylococcus aureus including MRSA in wounds and on cannulae; Escherichia coli, Klebsiella and Pseudomonas in urinary, abdominal and device infections — increasingly producing extended-spectrum beta-lactamases that defeat common antibiotics; Mycobacterium tuberculosis on open wards; Vibrio cholerae and Salmonella typhi where water and sanitation fail; hepatitis B, which is far more transmissible than HIV per needlestick and is carried by a substantial share of the adult population; and the viral haemorrhagic fevers that have appeared in recent years — Marburg (2022) and Lassa (2023). Add the bacterial meningitis of the northern belt in the dry season and measles wherever immunisation coverage slips, and you have the list this course keeps returning to.",
        },
      ],
      keyPoints: [
        "Pathogens are classified as bacteria, viruses, fungi, protozoa and helminths; whether disease follows depends on the organism's virulence and dose, the route of entry and the host's resistance.",
        "The Gram stain predicts behaviour: Gram-positive cocci (staphylococci in clusters, streptococci in chains) dominate skin and wound infection; Gram-negative rods (E. coli, Klebsiella, Pseudomonas, Vibrio) dominate urinary, abdominal and device infection and carry endotoxin.",
        "Spores (Clostridium, C. difficile, anthrax) survive boiling, drying and alcohol and are killed only by sterilisation; capsules hide organisms from phagocytes and make them lethal to patients without a spleen.",
        "Antibiotics do not act on viruses; enveloped viruses are destroyed by alcohol while non-enveloped faecal–oral viruses survive on surfaces and in water.",
        "Normal flora protects until it is displaced or moved to the wrong place; colonisation is organism without host reaction and is not treated; opportunistic infection is a weak organism in a weaker host.",
        "Innate immunity (skin, mucosa, acid, cilia, flora, phagocytes, inflammation) is what devices and antibiotics breach; adaptive immunity is specific, has memory, and is active (made by the patient, slow, lasting) or passive (given, immediate, short).",
        "Neutropenia, HIV, steroids, diabetes, malnutrition, sickle cell disease, the newborn, the older adult and anyone with a device or an open wound have defences down — infection may show as fever alone, or as confusion with no fever at all.",
      ],
      quiz: { keywords: ["bacterial structure","bacterial spores","bacterial morphology","bacterial growth","gram staining","gram stain","gram positive","gram negative","culture media","virulence","incubation period","normal flora","opportunistic","classifying disease causing organisms","fungal infection","viral infection","parasitology","microscopy","herd immunity","pseudomonas","spore","capsule","anaerob","neutrophil","white cell","ringworm","candida","immunity","antibody","colonis","streptococc","clostridi","micro organism","bacteria","virus","fungal","helminth","innate","adaptive","booster dose","bactericidal","beta lactam","facultative","septicaemia","hookworm","amoebiasis","schistosom","scabies"] },
    },
    {
      slug: "the-chain-of-infection-transmission-routes-and-health-care-associated-infection",
      title: "The chain of infection, transmission routes and health care-associated infection",
      minutes: 18,
      objectives: [
        "Name the six links of the chain of infection and, for each, state the nursing interventions that break it.",
        "Distinguish contact, droplet, airborne, vehicle and vector transmission, and a fomite from a vector, and match common Ghanaian infections to their routes.",
        "Define health care-associated infection, name the four device- and procedure-related infections that account for most of it, and explain its human and financial cost in Ghana.",
        "Place IPC activities on the levels of prevention and explain why standard precautions apply to every patient regardless of diagnosis.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Six links, one idea",
          paragraphs: [
            "Infection does not simply happen; it travels. For an organism to cause disease in a new person six things must occur in sequence: there must be an <strong>infectious agent</strong>; it must have a <strong>reservoir</strong> where it lives and multiplies — a person, an animal, water, soil, food, or a damp ward surface; it must leave by a <strong>portal of exit</strong> — respiratory secretions, faeces, urine, blood, wound drainage, skin scales; it must travel by a <strong>mode of transmission</strong>; it must enter by a <strong>portal of entry</strong> — often the same route by which it left, or a break in skin or mucosa that a device or injury has created; and it must find a <strong>susceptible host</strong>.",
            "The practical importance is this: <strong>break any single link and transmission stops</strong>. You rarely destroy the agent and you cannot eliminate every reservoir, but you can always block a route or protect a host. Almost everything in this course is an intervention aimed at one named link, and the examiner's favourite question is simply to name it — the nurse who washes her hands between two patients has broken the <strong>mode of transmission</strong>; the catheter removed on day two rather than day eight has closed a <strong>portal of entry</strong>; the vaccine has removed the <strong>susceptible host</strong>.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MCB-2496.svg",
          alt: "The chain of infection as six linked boxes — agent, reservoir, portal out, transmission (contact, droplet, airborne, vehicle, vector), portal in, susceptible host — with where the nurse breaks it: reservoir by cleaning, disinfection, treating the infected patient and safe water; transmission by hand hygiene, PPE, isolation, safe injection and sterile equipment; portal in by aseptic technique, catheter care, wound dressing and early device removal; host by immunisation, nutrition, treating diabetes and removing the device. Below, the four transmission routes with examples and the PPE for each, and the examiner's distinction between a fomite (an inanimate object such as a stethoscope, cuff, thermometer, door handle, bed rail, phone, pen or uniform) and a vector, which is alive.",
          caption: "Your stethoscope is a fomite. So are the blood pressure cuff, the thermometer, the pen, the phone and the bed rail — clean them between patients. A vector is alive (mosquito, housefly, tsetse); a fomite is not. That single distinction decides the question whenever both appear as options.",
        },
        {
          type: "table",
          heading: "The four transmission routes — what travels, how far, and what stops it",
          columns: ["Route", "How it works", "Examples", "What breaks it"],
          rows: [
            ["<strong>Contact</strong> (commonest)", "<strong>Direct</strong>: skin-to-skin, blood or body fluid onto broken skin or mucosa. <strong>Indirect</strong>: via a contaminated object or surface — a fomite — or via hands that touched one.", "MRSA, scabies, diarrhoeal pathogens, wound organisms, hepatitis B from blood, Lassa and Ebola from body fluids, conjunctivitis.", "Hand hygiene (the single most effective measure), gloves and gown for contact precautions, cleaning shared equipment between patients, not sharing linen, dedicated equipment for the isolated patient."],
            ["<strong>Droplet</strong>", "Large respiratory droplets expelled by coughing, sneezing, talking; they travel about one metre and fall onto surfaces and mucous membranes.", "Meningococcal meningitis, pertussis, influenza, mumps, diphtheria, most common colds, COVID-19 at close range.", "Surgical mask within one to two metres, single room or cohort, patient wears a mask when moved, respiratory hygiene for the patient."],
            ["<strong>Airborne</strong>", "Droplet nuclei under 5 micrometres that stay suspended and drift on air currents across a room or down a corridor.", "Tuberculosis, measles, chickenpox (varicella) — remember <strong>M-T-V</strong>.", "N95/FFP2 respirator for staff, negative-pressure or well-ventilated single room, door closed, patient in a surgical mask when out of the room, susceptible staff kept away from measles and varicella."],
            ["<strong>Vehicle and vector</strong>", "A common vehicle — water, food, blood products, contaminated infusions or multi-dose vials — carries the agent to many hosts; a living vector carries it between hosts.", "Cholera, typhoid, hepatitis A and E (water, food); hepatitis B and C, HIV (blood); malaria, yellow fever, dengue (Aedes and Anopheles), onchocerciasis (blackfly), schistosomiasis (snail).", "Safe water and sanitation, food hygiene, screened blood, single-use injection equipment, treated nets, indoor spraying and breeding-site control."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MDA-1106.svg",
          alt: "How an infection reaches the next person — six route boxes: air (tuberculosis, measles, chickenpox, meningitis; controlled by ventilation, open windows, masks, vaccination), water and food (cholera, typhoid, hepatitis A, amoebiasis; safe water, latrines, handwashing, food hygiene), vectors (malaria, yellow fever, onchocerciasis, filariasis; nets, spraying, clearing breeding sites, mass drug administration), contact (scabies, ringworm, Lassa, Ebola, leprosy; hand hygiene, gloves and gown, not sharing linen), blood and fluids (hepatitis B and C, HIV, syphilis, viral fevers; safe injection, screened blood, sharps box, never re-sheathing), and soil and water contact (hookworm, tetanus, schistosomiasis, guinea worm; footwear, safe water, filters, not wading); a panel on breaking the chain at the easiest link; and the list of conditions to notify immediately.",
          caption: "Name the route and the control measure writes itself. Every question about spread is really this question — and handwashing, a net, a latrine and a vaccine between them break most chains in Ghana.",
        },
        {
          type: "text",
          heading: "Health care-associated infection",
          paragraphs: [
            "A <strong>health care-associated infection</strong> (HAI, formerly nosocomial or hospital-acquired infection) is one that was neither present nor incubating when the patient was admitted and that appears <strong>48 hours or more</strong> after admission, within 30 days of an operation (90 days with an implant), or after a procedure in an outpatient or community setting. It also includes infections acquired by staff in the course of their work. An infection that declares itself on day one was brought in from the community; the same infection on day five was, until proved otherwise, given.",
            "Four kinds account for most of it, and all four are tied to a device or a procedure: <strong>catheter-associated urinary tract infection</strong>, <strong>surgical site infection</strong>, <strong>bloodstream infection from cannulae and central lines</strong>, and <strong>ventilator- or hospital-acquired pneumonia</strong>. To them add the diarrhoea that follows antibiotics (C. difficile) and the organisms that spread from bed to bed on hands and equipment — MRSA, resistant Klebsiella, scabies. In low- and middle-income countries, including Ghana, the World Health Organization estimates that roughly one in ten hospitalised patients acquires at least one HAI, with surgical site infection the commonest, and the rates are several times higher in intensive care and in neonatal units, where sepsis from the environment and from hands is a leading cause of newborn death.",
            "The cost is paid three times: by the patient (longer stay, more pain, a second operation, death — and in Ghana often an NHIS ceiling exceeded and a family paying out of pocket); by the hospital (occupied beds, extra antibiotics, staff time); and by the community (resistant organisms that leave the ward in discharged patients). The arithmetic that convinces managers is simple — a single surgical site infection costs more than a year's supply of hand rub for the ward.",
          ],
        },
        {
          type: "table",
          heading: "Where the links break on a ward — the interventions by link",
          columns: ["Link", "Interventions that break it"],
          rows: [
            ["<strong>Agent</strong>", "Treat the infected patient promptly and correctly (the treated tuberculosis patient stops being infectious within about two weeks); antimicrobial stewardship so the agents that remain are still treatable; sterilisation and disinfection destroy agents on equipment."],
            ["<strong>Reservoir</strong>", "Cleaning and disinfection of the environment and equipment, dry surfaces (Pseudomonas and Gram-negatives live in wet sinks, soap dishes, open lotions and humidifier water), safe water, food hygiene, screening and treating carriers, removing infected devices, controlling rodents and insects."],
            ["<strong>Portal of exit</strong>", "Cover wounds, contain excreta and secretions, respiratory hygiene — the patient covers the cough or wears a mask, tissues into a bin, hand hygiene afterwards; safe handling of specimens, linen and waste."],
            ["<strong>Mode of transmission</strong>", "<strong>Hand hygiene</strong>, personal protective equipment, isolation and transmission-based precautions, safe injection practice and single-use equipment, cleaning shared items between patients, spacing beds, ventilation, vector control."],
            ["<strong>Portal of entry</strong>", "Aseptic technique, skin preparation, closed drainage systems, catheter and cannula care, early device removal, wound dressing, intact skin (pressure injury prevention), oral care in the ventilated patient, covering your own cuts."],
            ["<strong>Susceptible host</strong>", "Immunisation (patients and staff), nutrition, glucose control, treating HIV, protective isolation of the neutropenic patient, avoiding unnecessary antibiotics and devices, prophylaxis where indicated (post-exposure, surgical, cotrimoxazole in HIV)."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-HPR-0410.svg",
          alt: "A timeline of disease with four levels of prevention — primordial (stopping the risk factor appearing, such as town planning that keeps a settlement off a floodplain), primary (acting on healthy people: immunisation, treated nets, safe water, latrines, handwashing), secondary (finding and treating early disease: screening, blood pressure checks, HIV testing, growth monitoring) and tertiary (limiting damage once disease is established: rehabilitation, foot care, community-based rehabilitation) — with the trap that screening feels like prevention but the disease is already there.",
          caption: "Most of IPC is primary prevention — it acts before the organism arrives. Surveillance that finds the first case of an outbreak early is secondary; treating the established surgical site infection well enough to save the limb is tertiary. Ask one question: at the moment you act, does the person already have the disease?",
        },
        {
          type: "text",
          heading: "Standard precautions: the logic of treating everyone the same",
          paragraphs: [
            "Because carriers are not labelled — the hepatitis B surface-antigen-positive patient feels well, the HIV status of most patients on a Ghanaian ward is unknown, the incubating measles case has no rash yet — the only safe assumption is that <strong>every patient's blood, body fluids, secretions, excretions (except sweat), non-intact skin and mucous membranes may be infectious</strong>. That assumption, applied to every patient every time, is the set of practices called <strong>standard precautions</strong>; they are the subject of Module 2. <strong>Transmission-based precautions</strong> (contact, droplet, airborne) are added for patients known or suspected to carry particular organisms; they are the subject of Module 3.",
            "Two consequences follow. First, nothing extra is done because a patient has HIV — the gloves, the sharps box and the hand rub were already there for everyone, and a separate set of crockery or a red sticker on the notes is stigma, not infection control. Second, the chain is broken most cheaply at the links nearest you: your hands, your sharps box, your decision about whether that catheter is still needed.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Naming the link — the examiner's pattern",
          body: "Read the intervention and ask what it acted on. Hand hygiene, gloves, masks, isolation, sterile equipment and safe injections act on the mode of transmission. Aseptic technique, closed catheter systems, wound dressings and removing devices act on the portal of entry. Immunisation, nutrition, treating diabetes and HIV act on the susceptible host. Cleaning, disinfecting, safe water and treating the infected patient act on the reservoir (and, for the treated patient, the agent). Covering a cough or a wound acts on the portal of exit. A patient with an indwelling catheter for eight days is a question about the portal of entry; a sneeze with no tissue is a question about the portal of exit.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "Reservoirs you walk past every day",
          body: "The wet cake of soap in a shared dish, the open bottle of lotion on the dressing trolley, the humidifier bottle refilled rather than replaced, the suction jar emptied only at the end of the shift, the mop left in grey water, the blood pressure cuff that has visited forty arms, the staff mobile phone taken from the isolation room to the nurses' station, and the uniform worn home on the trotro. None of them is dramatic; together they are how a Gram-negative organism moves from one bed to the next on a Ghanaian ward. Keep surfaces dry, use single-patient or single-use items where you can, and clean what is shared between every patient.",
        },
      ],
      keyPoints: [
        "The chain of infection has six links — agent, reservoir, portal of exit, mode of transmission, portal of entry, susceptible host — and breaking any one stops transmission.",
        "Contact (direct or indirect via fomites) is the commonest route; droplets travel about one metre and fall; airborne droplet nuclei stay suspended (tuberculosis, measles, varicella); vehicles (water, food, blood) and living vectors carry agents to many hosts.",
        "A fomite is an inanimate object that carries organisms — stethoscope, cuff, thermometer, bed rail, phone, pen, uniform; a vector is alive. Clean shared equipment between patients.",
        "A health care-associated infection appears 48 hours or more after admission or within 30 days of an operation; catheter-associated urinary infection, surgical site infection, line-related bloodstream infection and ventilator-associated pneumonia account for most of it.",
        "In low- and middle-income countries about one in ten hospitalised patients acquires an HAI; surgical site infection is the commonest and neonatal units and intensive care have the highest rates.",
        "Hand hygiene, PPE, isolation and sterile equipment break the mode of transmission; aseptic technique, closed systems and early device removal close the portal of entry; immunisation, nutrition and treating HIV and diabetes protect the host.",
        "Carriers are not labelled, so standard precautions apply to every patient every time; transmission-based precautions are added for known or suspected organisms, and nothing extra is done merely because a patient has HIV.",
      ],
      quiz: { keywords: ["chain of infection","portal of entry","reservoir","fomite","vector","healthcare associated infection","health care associated infection","hospital acquired","vulnerable groups","defining health care associated","preventing ventilator and hospital","levels of prevention","atypical presentation of infection","infection without fever","carrier","airborne","transmission","susceptib","incubat","communicable","epidemic","faecal oral","excreta","hepatitis b transmission","hiv transmission","ebola transmission","sharing a cup","screening programme","immunisation coverage","unvaccinated","herd protection","between caring for two patients"] },
    },
  ],
};
