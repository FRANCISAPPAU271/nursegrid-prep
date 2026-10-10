import type { CourseModule } from "../types";

export const standardPrecautionsAndHandHygiene: CourseModule = {
  slug: "standard-precautions-and-hand-hygiene",
  title: "Standard precautions and hand hygiene",
  summary: "The practices applied to every patient every time: the WHO five moments and the patient zone, alcohol rub versus soap and water, technique and the areas everybody misses, bare below the elbows, surgical hand antisepsis, why compliance stays poor and what actually raises it; then the rest of standard precautions — gloves and the four glove errors, gowns, masks and eye protection, the order of donning and doffing, respiratory hygiene, safe injection practice and multi-dose vials, spills, linen, patient placement and the environment.",
  lessons: [
    {
      slug: "hand-hygiene-the-five-moments-and-the-patient-zone",
      title: "Hand hygiene: the five moments and the patient zone",
      minutes: 17,
      objectives: [
        "State the WHO five moments for hand hygiene, explain the patient zone, and say which moments protect the patient and which protect the nurse and the ward.",
        "Choose correctly between alcohol-based hand rub and soap and water, and perform each with the right technique and duration, covering the areas most often missed.",
        "Apply the rules on nails, jewellery, sleeves, cuts and gloves that make hand hygiene possible, and describe surgical hand antisepsis.",
        "Explain why measured compliance is usually below half, what the Hawthorne effect does to audits, and which interventions actually change behaviour on a Ghanaian ward.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The single most effective measure",
          paragraphs: [
            "Of everything in this course, hand hygiene prevents the most infection for the least money. Hands are the commonest vehicle by which organisms move from one patient to the next, from the environment to the patient, and from the patient to you: the staphylococcus from one wound reaches the next cannula site on a nurse's fingers, the Klebsiella from a soiled nappy reaches the next baby's umbilical stump, and the norovirus on a bed rail reaches your own mouth at lunch. Ignaz Semmelweis showed in 1847 that making doctors wash their hands in chlorinated lime between the mortuary and the labour ward cut maternal deaths from puerperal fever by more than two thirds; the evidence has only strengthened since, and every multimodal hand hygiene programme measured since the WHO campaign began has cut health care-associated infection.",
            "The difficulty has never been the evidence; it is the <strong>doing</strong>. Observed compliance in hospitals that have not worked on it is typically <strong>under 40 per cent</strong>, lowest among doctors, in intensive care, during the busiest hours and for the moments that protect the patient rather than the nurse. Hand hygiene therefore has two parts: the technique, which takes an hour to learn, and the habit, which takes a ward to build.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-IPC-0037.svg",
          alt: "A circle labelled patient zone with the five moments arranged around it — one, before touching a patient; two, before a clean or aseptic procedure; three, after body fluid exposure risk; four, after touching a patient; five, after touching patient surroundings — with moments one and two coloured green because they protect the patient and three, four and five coloured red because they protect the nurse and the ward.",
          caption: "The patient zone is the patient and everything within reach that is dedicated to him — bed, rails, locker, drip stand, pump, chart. Crossing into the zone is moment one; leaving it after touching anything inside is moment four or five, whether or not you touched the patient.",
        },
        {
          type: "table",
          heading: "The five moments — when, why and the situation examiners describe",
          columns: ["Moment", "When", "Who it protects", "Typical scenario"],
          rows: [
            ["<strong>1. Before touching a patient</strong>", "On entering the patient zone, before any contact — shaking hands, helping to move, taking a pulse, examining.", "The patient, from organisms on your hands brought from the last patient or the environment.", "You have just come from the next bed and want to check this patient's blood pressure."],
            ["<strong>2. Before a clean or aseptic procedure</strong>", "Immediately before the task — cannulation, catheterisation, wound dressing, giving an injection, preparing a feed or drugs, oral care, suctioning — even if gloves will be worn and even if you touched the same patient a moment ago.", "The patient, from his own organisms and yours entering a site that should be sterile or clean.", "You have positioned the patient and are now about to insert the cannula."],
            ["<strong>3. After body fluid exposure risk</strong>", "After any contact with blood, secretions, excretions, mucous membranes, non-intact skin or wound dressings, and <strong>after removing gloves</strong>.", "You, and the ward environment.", "You have changed a wound dressing, removed your gloves and are about to write in the notes — clean your hands first."],
            ["<strong>4. After touching a patient</strong>", "On leaving the patient zone after touching the patient.", "You, and the next patient.", "You have finished the examination and are walking to the trolley."],
            ["<strong>5. After touching patient surroundings</strong>", "On leaving the zone after touching objects or furniture in it — even if you did not touch the patient.", "You, and the next patient.", "You adjusted the drip rate, straightened the sheet and raised the bed rail. You did not touch the patient. You still clean your hands — this is the moment everybody fails."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MCB-2507.svg",
          alt: "The WHO five moments explained — moments one and two protect the patient, three, four and five protect you and the ward; why moment five is missed (you adjusted the drip stand and did not touch the patient but the bed rail, notes, pump and locker are all in the patient zone); when to rub and when to wash — alcohol rub is the default, 20 to 30 seconds on visibly clean hands, while soap and water are required when hands are visibly soiled, after the toilet and after caring for a patient with diarrhoea because alcohol does not kill C. difficile spores or norovirus; technique — wet, soap, six steps, rinse, dry, 40 to 60 seconds, with fingertips and thumbs the areas missed every time; and what must come off before you start — stoned rings, watches, bracelets, long or artificial nails, chipped varnish, sleeves above the elbow, cuts covered with a waterproof dressing.",
          caption: "Alcohol rub is faster, kinder to skin and more effective against most organisms, so it is the default. Soap and running water are not optional when hands are visibly soiled, after using the toilet, and after caring for a patient with diarrhoea — spores and norovirus are removed by friction and rinsing, not killed by alcohol.",
        },
        {
          type: "list",
          heading: "Rub or wash? The rule that decides",
          items: [
            "<strong>Alcohol-based hand rub (60–80 per cent alcohol)</strong> is the default for all five moments when hands are not visibly soiled: a palmful, cover every surface, rub until <strong>dry — 20 to 30 seconds</strong>. If your hands are dry in ten seconds you used too little. It can be carried in a pocket, placed at every bed and used in a compound with no tap, which is why the WHO made it the centre of the campaign.",
            "<strong>Soap and running water</strong> are required when hands are <strong>visibly dirty or soiled with blood or body fluids</strong>; <strong>after using the toilet</strong>; after exposure to <strong>spore-forming organisms</strong> (Clostridioides difficile) or <strong>norovirus</strong> — in practice, after caring for any patient with diarrhoea; before handling food; and when alcohol rub is unavailable. Wet, apply soap, rub all surfaces for at least 15–20 seconds, rinse, dry with a single-use towel and turn the tap off with the towel or elbow — the whole procedure <strong>40 to 60 seconds</strong>.",
            "<strong>The six technique steps</strong> apply to both: palm to palm; right palm over left dorsum with interlaced fingers and vice versa; palm to palm with fingers interlaced; backs of fingers to opposing palms with fingers interlocked; rotational rubbing of each thumb clasped in the opposite palm; rotational rubbing of clasped fingertips in each palm. The areas missed every time are <strong>fingertips, thumbs, between the fingers and the backs of the hands</strong> — and fingertips are what touch the patient most.",
            "<strong>Plain soap</strong> removes organisms mechanically and is sufficient for routine washing; antimicrobial soap or chlorhexidine wash is for surgical hand antisepsis and some high-risk units. Bar soap left in a wet dish grows Gram-negative organisms — use liquid soap, or keep bar soap small and on a draining rack.",
            "<strong>Gloves are not hand hygiene.</strong> Hands are contaminated during glove removal and gloves leak; clean your hands before putting gloves on for an aseptic task and always after taking them off.",
          ],
        },
        {
          type: "text",
          heading: "What must be true before you start",
          paragraphs: [
            "<strong>Bare below the elbows</strong>: sleeves rolled or short, no wrist watch, no bracelets, no stoned rings — a plain band is tolerated in some policies but should come off for surgical scrubbing. <strong>Nails short</strong> (under about half a centimetre), <strong>no artificial nails or extensions</strong> and no chipped varnish — artificial nails have been traced to outbreaks of Pseudomonas and Klebsiella in neonatal units. <strong>Cuts and abrasions covered</strong> with a waterproof dressing before the shift; a nurse with weeping eczema or an exudative lesion on her hand should not perform direct patient care or handle sterile equipment until it has healed, both for the patient's sake and her own. Hand cream from a personal or pump dispenser keeps skin intact — cracked skin harbours more organisms and makes nurses avoid washing.",
            "<strong>Surgical hand antisepsis</strong> before gowning and gloving in theatre removes transient flora and reduces resident flora for the length of the operation: either a scrub with antimicrobial soap (chlorhexidine 4 per cent or povidone-iodine) for two to five minutes covering hands and forearms to the elbow with a sterile brush for the nails only, or — where hands are clean and dry — an alcohol-based surgical rub applied for the full manufacturer's time, usually about three minutes. Afterwards the hands are held <strong>above the elbows and away from the body</strong> so that water runs from the clean fingertips to the dirty elbows and not back, dried with a sterile towel one hand at a time, and nothing unsterile is touched before gloving.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MIC-0049.svg",
          alt: "A circular chain of six links — infectious agent, reservoir such as people or water, portal of exit, mode of spread, portal of entry and susceptible host returning to the agent — with a central box highlighting hand hygiene as breaking the mode of spread, described as the easiest link to break.",
          caption: "Where hand hygiene sits in the chain: it is the easiest link to break, and the one most often broken by nobody. Every moment missed leaves the mode of spread intact for whatever was on the last surface you touched.",
        },
        {
          type: "table",
          heading: "Why compliance is poor — and what the evidence says works",
          columns: ["Reason given", "What is really happening", "What changes it"],
          rows: [
            ["\"There is no water / no soap / no rub.\"", "Supply failure. A ward that runs out of alcohol rub or has a Veronica bucket with no water has a system problem, not a knowledge problem.", "Rub at <strong>every bed and every trolley</strong>, requisitioned like a drug; Veronica buckets filled and checked each shift; a named person responsible; soap actually present at the sink."],
            ["\"I am too busy.\"", "Workload and the moments protecting the patient (1 and 2) are the first to go. Compliance falls as the nurse-to-patient ratio worsens.", "Alcohol rub at the point of care takes 20 seconds against a two-minute walk to a sink; staffing and bed occupancy are IPC issues (WHO core component 7)."],
            ["\"I wore gloves.\"", "Gloves worn between patients and for tasks that do not need them replace hand hygiene rather than add to it.", "Teach the glove indications and that hands are cleaned after removal; audit glove misuse, not only hand hygiene."],
            ["\"We had training.\"", "Knowing is not doing. Training alone produces a short rise that fades; the audit that follows training and finds poor compliance is the beginning of the cycle, not the end.", "<strong>Multimodal strategy</strong>: system change (rub at the point of care), training, <strong>audit with feedback of results to the ward</strong>, reminders and posters, and a ward culture in which seniors model it and anyone can prompt anyone — the student who says \"hand rub?\" to the consultant without fear."],
            ["\"Our audit shows 95 per cent.\"", "The <strong>Hawthorne effect</strong>: people perform better while watched, and observers often record the moments that are easy to see. A 95 per cent compliance figure beside an unchanged infection rate means the audit, not the ward, needs examining.", "Covert or peer observation at mixed times, consumption of rub per patient-day as an independent measure, and pairing compliance with infection outcomes."],
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "The scenarios that come up",
          body: "A nurse removes her gloves after a dressing and goes to write in the notes — hand hygiene first (moment 3). She adjusts the drip stand and leaves the bedside without touching the patient — hand hygiene (moment 5). She is about to insert a cannula having just helped the same patient to sit up — hand hygiene again (moment 2; the moments are about the task, not the person). She has cared for a patient with watery diarrhoea — soap and water, not rub. Which areas are most commonly missed — fingertips and thumbs. After the surgical scrub, how are the hands held — above the elbows and away from the body. A family asks why they must wash before visiting — to protect their relative from organisms carried in from outside. A senior colleague moves between patients without cleaning her hands — the professionally accountable response is to speak up, courteously and at once, because the patient's safety outranks hierarchy.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Ghana's practical answer: the Veronica bucket",
          body: "Invented by the Ghanaian scientist Veronica Bekoe, the bucket with a tap and a basin beneath it brought handwashing with running water to clinics, schools and compounds without plumbing, and became the country's symbol of hygiene during the COVID-19 pandemic. Its weakness is the same as any system's — it works only if someone fills it, keeps soap beside it and empties the basin. On a ward, the bucket complements rather than replaces alcohol rub at the bedside; in a CHPS compound or on a home visit, it and a bottle of rub in your bag are the whole of your hand hygiene infrastructure, so pack both.",
        },
      ],
      keyPoints: [
        "Hand hygiene is the single most effective measure against health care-associated infection; hands are the commonest vehicle of transmission, and observed compliance where nobody has worked on it is usually under 40 per cent.",
        "The five moments: before touching a patient, before a clean or aseptic procedure, after body fluid exposure risk, after touching a patient, after touching patient surroundings — moments 1 and 2 protect the patient, 3 to 5 protect you and the ward.",
        "The patient zone includes everything within reach dedicated to the patient; touching the drip stand or bed rail without touching the patient still requires hand hygiene on leaving (moment 5).",
        "Alcohol rub (20–30 seconds until dry) is the default; soap and running water (40–60 seconds) are required for visibly soiled hands, after the toilet and after caring for a patient with diarrhoea, because alcohol does not remove spores or norovirus.",
        "Fingertips, thumbs, between the fingers and the backs of the hands are the areas missed; be bare below the elbows, with short natural nails, no stoned rings or watches, and cuts covered with a waterproof dressing.",
        "Gloves are not a substitute for hand hygiene: clean hands before gloving for an aseptic task and always after removal, because hands are contaminated as gloves come off and gloves leak.",
        "Compliance rises with a multimodal strategy — rub at the point of care, training, audit with feedback, reminders and a culture where anyone can prompt anyone — not with training alone; beware the Hawthorne effect in audit figures.",
      ],
      quiz: { keywords: ["washes her hands","fomite","bed rail","between patients","glove","hand hygiene","handwashing","hand washing","hand rub","five moments","critical moments for handwashing","surgical scrub","hand hygiene moments","scrub","her hands","wash their hands","hands be held","cleaning her hands","commonly missed","before gowning","without cleaning","hand hygiene compliance","the audit cycle","hawthorne","observation as a method","creating supportive environments","removes her gloves","professional accountability","patient education","visiting their relative","soap","alcohol hand"] },
    },
    {
      slug: "standard-precautions-ppe-respiratory-hygiene-safe-injections-spills-and-linen",
      title: "Standard precautions: PPE, respiratory hygiene, safe injections, spills and linen",
      minutes: 18,
      objectives: [
        "List the elements of standard precautions and explain why they apply to every patient regardless of known or suspected diagnosis.",
        "Select personal protective equipment by the task and the anticipated exposure, put it on and take it off in the correct order, and avoid the four glove errors.",
        "Describe respiratory hygiene and cough etiquette, safe injection practice including the handling of multi-dose vials, and the management of a blood or body fluid spill.",
        "Handle soiled linen, patient equipment and the ward environment safely, and respond correctly when a patient's HIV status is used to justify stigmatising practice.",
      ],
      blocks: [
        {
          type: "text",
          heading: "What standard precautions are",
          paragraphs: [
            "Standard precautions are the minimum infection prevention practices that apply to <strong>all patient care, in all settings, regardless of the patient's suspected or confirmed infection status</strong>. They replaced the older \"universal precautions\" (which concerned blood only) and \"body substance isolation\", and the WHO lists their elements as: <strong>hand hygiene</strong>; <strong>personal protective equipment</strong> chosen by risk assessment; <strong>respiratory hygiene and cough etiquette</strong>; <strong>sharps safety and injection safety</strong>; <strong>safe handling of patient-care equipment</strong> and <strong>sterile instruments</strong>; <strong>environmental cleaning</strong>; <strong>safe handling of linen</strong>; <strong>waste management</strong>; and <strong>patient placement</strong> — putting the patient who soils the environment, cannot keep hygiene or has an undiagnosed infection in a single room when one exists.",
            "The organising idea is <strong>risk assessment of the task</strong>, not of the patient. Before any procedure ask: will I touch blood, body fluids, secretions, excretions, mucous membranes or broken skin? Could there be a splash to my face? Could there be a sharp? The answers select the equipment. The patient's diagnosis adds transmission-based precautions on top (Module 3) but never subtracts from the standard set.",
          ],
        },
        {
          type: "table",
          heading: "Personal protective equipment — chosen by the exposure you expect",
          columns: ["Item", "Wear it when", "Rules that matter"],
          rows: [
            ["<strong>Gloves</strong> (non-sterile examination)", "Contact with blood, body fluids, secretions, excretions, mucous membranes, non-intact skin, contaminated items or surfaces; venepuncture; emptying drains and catheter bags; cleaning spills.", "Single patient, single task. Change between dirty and clean sites on the same patient. Never wash or rub gloves to reuse them. Remove before touching notes, phones, door handles or the next patient. Hand hygiene after removal, always. Gloves are not needed for taking a pulse, giving an oral drug or pushing a wheelchair."],
            ["<strong>Sterile gloves</strong>", "Procedures entering sterile tissue or body cavities, and surgical asepsis (Module 4).", "Put on last, touching only the inside of the cuff; a torn or punctured glove is replaced at once."],
            ["<strong>Plastic apron</strong> / <strong>gown</strong>", "Apron when clothing may be splashed or soiled (dressings, bed-bathing a soiled patient, emptying bedpans). Fluid-resistant gown with long sleeves when arms and clothing may be substantially contaminated — contact precautions, large spills, deliveries, viral haemorrhagic fever.", "Single use, removed before leaving the bed space, rolled inside-out away from you. The gown is dirty on the front and sleeves — touch only the inside when removing."],
            ["<strong>Surgical (medical) mask</strong>", "Risk of splash or spray to the mouth and nose; droplet precautions within one to two metres; worn by the coughing patient when moved; worn by staff with a cold caring for vulnerable patients.", "Covers nose, mouth and chin, moulded at the nose; changed when wet or after the task; never pulled down round the neck and re-used; removed by the ties or loops without touching the front. It is <strong>not</strong> protection against airborne organisms."],
            ["<strong>Respirator</strong> (N95 / FFP2)", "Airborne precautions — tuberculosis, measles, varicella — and aerosol-generating procedures such as suction, intubation, bronchoscopy and sputum induction.", "Fit-checked each time (breathe in: it should collapse slightly; breathe out: no leak at the edges); a beard breaks the seal; discarded when damp, damaged or after a shift, and kept away from the front when handled."],
            ["<strong>Eye protection</strong> (goggles or visor)", "Any procedure that may splash blood or fluid to the face — suction, deliveries, wound irrigation, emptying drains under pressure, dental work, VHF care.", "Spectacles are not eye protection. A blood splash to the eye is an occupational exposure needing immediate irrigation and reporting (Module 6)."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MCB-2510.svg",
          alt: "Putting PPE on and taking it off — donning: hand hygiene, gown, mask or respirator with a fit check, eye protection, gloves last over the gown cuff; doffing: gloves first because they are dirtiest, hand hygiene, gown rolled away from you, eye protection then mask by the ties, hand hygiene again; the logic that you put on in the order of how long it must stay clean and take off in the order of how contaminated it is, with gloves on last and off first and the mask removed outside the room by its ties; and the four glove errors — one pair between two patients, washing gloves instead of changing them, touching notes, phone or door handle with gloves on, and skipping hand hygiene after removal.",
          caption: "Do not memorise the list; learn the logic. Put PPE on in the order of how long it must stay clean (gown, mask, eyes, gloves). Take it off in the order of how contaminated it is (gloves, gown, eyes, mask). Gloves go on last and come off first; the mask stays on longest and comes off outside the room, by the ties.",
        },
        {
          type: "list",
          heading: "Respiratory hygiene and cough etiquette — the patient's side of standard precautions",
          items: [
            "Anyone with a cough, sneeze or runny nose <strong>covers the mouth and nose with a tissue</strong>, discards it into a bin at once and cleans the hands; with no tissue, <strong>cough or sneeze into the crook of the elbow</strong>, never into the hand that will next touch a door or a patient.",
            "Offer a <strong>surgical mask</strong> to a coughing patient in a waiting area or during transport, and seat coughing patients <strong>at least one metre</strong> from others — in a crowded Ghanaian outpatient department this means a separate bench near an open window and triage to the front of the queue, which is also how pulmonary tuberculosis is kept out of a hundred other patients.",
            "Provide tissues, bins and hand rub in waiting areas, and post pictorial reminders; cough etiquette is also what you teach the household of a patient with tuberculosis.",
            "Staff with respiratory infection wear a mask around vulnerable patients or stay off neonatal, oncology and intensive care units; a nurse who develops chickenpox must stay away from work until all lesions have crusted because she is infectious by the airborne route to every non-immune patient and colleague.",
          ],
        },
        {
          type: "table",
          heading: "Safe injection practice — the rules that stop one patient's blood reaching another",
          columns: ["Rule", "Why"],
          rows: [
            ["<strong>One needle, one syringe, one patient, one time.</strong>", "Reusing a syringe to draw up for a second patient — even with a new needle — carries the first patient's blood back into the vial and on to the next patient. Outbreaks of hepatitis B and C have been traced to exactly this."],
            ["<strong>Single-dose vials and ampoules are preferred; never combine leftovers.</strong>", "The leftover is a culture medium at room temperature."],
            ["<strong>If a multi-dose vial must be used</strong>: dedicate it to one patient where possible, swab the rubber septum with 70 per cent alcohol and let it dry before every entry, use a new sterile needle and syringe for each entry, date it on opening and discard by the manufacturer's beyond-use date (commonly 28 days) or sooner per policy, and never leave a needle in the septum.", "Each entry is an opportunity to introduce organisms; a needle left in place is an open door."],
            ["<strong>Prepare injections in a clean area, immediately before use, with hand hygiene first.</strong>", "Pre-drawn syringes lying on a trolley are unlabelled, unrefrigerated and anonymous."],
            ["<strong>Never recap, bend or break a used needle; discard it, needle and syringe as one unit, into a sharps box at the point of use.</strong>", "Recapping is the commonest cause of needlestick injury; carrying a used needle across a room is the second."],
            ["<strong>Single-use lancets, fingerprick devices and insulin pens are for one patient only.</strong>", "Glucometer lancing devices have transmitted hepatitis B between patients; clean the meter itself between patients."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-IPC-0053.svg",
          alt: "Three numbered steps for a blood spill — one, put on gloves and apron to protect yourself first; two, absorb the spill with disposable towels, because organic matter must be removed first as it inactivates chlorine; three, disinfect with 0.5 per cent chlorine for ten minutes, then wash with detergent and discard everything as clinical waste.",
          caption: "Protect yourself, remove the organic matter, then disinfect — in that order. Chlorine poured onto a pool of blood is largely wasted; chlorine applied to a surface from which the blood has been lifted works. A 0.5 per cent solution is made by diluting household bleach: one part of 3.5 per cent bleach to six parts water, or one part of 5 per cent bleach to nine parts water.",
        },
        {
          type: "text",
          heading: "Spills, linen, equipment and the environment",
          paragraphs: [
            "<strong>A blood or body fluid spill</strong> is managed by whoever finds it, at once: cordon the area; put on gloves and an apron (and eye protection if splashing is likely); cover and absorb the fluid with disposable paper towels or spill granules; lift the towels into a yellow clinical-waste bag; <strong>disinfect with 0.5 per cent (5,000 ppm) chlorine</strong> left in contact for ten minutes; clean with detergent and water; discard all materials as infectious waste; remove PPE and clean your hands. Broken glass is lifted with forceps or a dustpan, never fingers, into a sharps container. Chlorine is corrosive to metal and fabric and inactivated by organic matter and sunlight — make it up fresh each day and store it covered and labelled.",
            "<strong>Linen</strong> soiled with blood, faeces or other fluids is handled with gloves and an apron, <strong>rolled inwards with the soiled area inside</strong>, placed directly into a leak-proof linen bag at the bedside without being shaken, sorted or placed on the floor or the next bed, and sent to the laundry in a sealed bag — in Ghanaian facilities often a water-soluble or clearly marked bag for the infected stream. The laundry decontaminates by heat (71 °C for at least three minutes, or 65 °C for ten) or by chlorine in a cold wash. Clean linen is stored covered and off the floor.",
            "<strong>Patient-care equipment</strong> that touches intact skin — blood pressure cuffs, stethoscopes, thermometers, pulse oximeter probes, commodes, bedpans — is cleaned and disinfected <strong>between patients</strong> (Module 4 gives the methods); single-use items are never reprocessed; and the patient in isolation has dedicated equipment that stays in the room. <strong>Environmental cleaning</strong> runs from clean to dirty and from high to low, with a dedicated colour-coded mop and cloth for each area, frequently touched surfaces (bed rails, call bells, door handles, taps) cleaned at least daily and whenever soiled, and a terminal clean of the bed space after discharge.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "HIV on the ward: standard precautions are the whole answer",
          body: "A separate set of crockery marked for patients with HIV, a red sticker on the notes, gloves worn to hand over a tablet, a bed left unmade because staff are reluctant to touch the patient — none of these reduces anyone's risk, because the risk was never from touch, shared cups or crockery, and standard precautions already cover every patient's blood. What they do is announce a diagnosis the patient has the right to keep private, discourage others from testing, and breach both the Patients' Charter and the nurse's duty of confidentiality. The correct answer in every such scenario is the same: standard precautions for everyone, nothing extra for HIV, and the practice stopped and challenged.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Standard precautions — the questions",
          body: "Which PPE for a dressing change on a wound expected to leak? Gloves and apron. For suctioning a tracheostomy? Gloves, apron, mask and eye protection. In what order is PPE removed after caring for a patient in contact precautions? Gloves, hand hygiene, gown, eye protection, mask, hand hygiene. A nurse wearing gloves moves from a patient to write in the notes and answer the telephone — the error is gloves worn beyond the task, with the notes and phone now contaminated. No tissue when you need to sneeze — the crook of the elbow. What should you do with a used needle after an intramuscular injection — straight into the sharps box, unrecapped. A multi-dose vial — swab the septum, new needle and syringe for every entry, date it. The sequence for a large blood spill — PPE, absorb, 0.5 per cent chlorine for ten minutes, detergent, discard as clinical waste.",
        },
      ],
      keyPoints: [
        "Standard precautions apply to all patients in all settings regardless of diagnosis: hand hygiene, PPE by risk assessment, respiratory hygiene, sharps and injection safety, safe equipment and sterile instruments, environmental cleaning, linen, waste and patient placement.",
        "PPE is selected by the task's anticipated exposure — gloves for any contact with fluids, mucosa or broken skin; apron or gown for splashes to clothing; surgical mask and eye protection for splashes to the face; a fit-checked N95 respirator only for airborne organisms and aerosol-generating procedures.",
        "Don in the order gown, mask, eyes, gloves; doff gloves first, then hand hygiene, gown, eyes, mask by the ties, hand hygiene again — put on in the order of how long it must stay clean, take off in the order of how dirty it is.",
        "The four glove errors are one pair between two patients, washing gloves instead of changing them, touching notes, phones or door handles while gloved, and skipping hand hygiene after removal.",
        "Respiratory hygiene: cover coughs with a tissue or the elbow, mask and separate the coughing patient by at least one metre, and keep infectious staff — including a nurse with chickenpox — away from vulnerable patients.",
        "Safe injection: one needle, one syringe, one patient, one time; prefer single-dose vials; swab, date and use a new sterile needle and syringe for every entry into a multi-dose vial; never recap; sharps box at the point of use.",
        "Spills: protect yourself, absorb and remove the organic matter, disinfect with 0.5 per cent chlorine for ten minutes, then clean; soiled linen is rolled inwards into a leak-proof bag at the bedside; shared equipment is cleaned between patients; nothing extra is done because a patient has HIV.",
      ],
      quiz: { keywords: ["glove","discrimination in care","theatre attire","fully covered","standard precautions","universal precautions","personal protective equipment","removing personal protective equipment","respiratory hygiene","injection safety","multi dose vial","multidose","spillage","body fluid spill","spill","hospital linen","linen","ward cleaning","nursing precautions in hiv","gown","apron","body fluid","soiled","sneeze","tissue available","separate set of crockery","health related stigma","stigma in the ward","stigma reduction in the facility","reluctant to touch","blood splashes","wearing gloves","bed making","contact precautions","in what order","removed after caring","every patient","all patients"] },
    },
  ],
};
