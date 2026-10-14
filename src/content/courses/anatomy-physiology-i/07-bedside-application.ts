import type { CourseModule } from "../types";

export const bedsideApplication: CourseModule = {
  slug: "bedside-application",
  title: "Bedside application: assess, recognize, escalate",
  summary:
    "The capstone: focused bedside assessment of the musculoskeletal, digestive and integumentary systems step by step — then the variations that reassure, the red-flag abnormalities that must never wait, objective documentation, and escalating with SBAR.",
  lessons: [
    {
      slug: "bedside-assessment-of-this-courses-systems",
      title: "Bedside assessment: the systems of this course",
      minutes: 20,
      objectives: [
        "Perform a focused MSK assessment: gait, inspection, palpation, ROM, strength, CMS.",
        "Examine the abdomen in the correct order and interpret bowel sounds and stool.",
        "Assess skin, lesions, oedema and pressure areas with objective language.",
        "Document findings so that change is visible to the next nurse.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The assessment habits that carry every system",
          paragraphs: [
            "Every focused examination runs the same habits: <strong>compare sides</strong> (one leg against the other, one quadrant against its mirror), <strong>ask what changed</strong> (today against the patient's own baseline, not a textbook), <strong>watch the face</strong> while your hands work, and <strong>anchor with vital signs</strong> — pain, pulse, pressure, temperature, saturation and respiratory rate turn \"looks unwell\" into data. Work from <strong>least to most invasive</strong>, tender areas last, and explain each step before you do it — a guarded abdomen or a clenched fist tells you about fear, not disease. What follows applies these habits to the three systems of this course; later courses extend them to chest, heart, nerves and beyond.",
          ],
        },
        {
          type: "text",
          heading: "MSK: gait, look, feel, move, squeeze",
          paragraphs: [
            "Start standing back: <strong>gait and posture</strong> (limp, shuffle, lean, spinal curves — Module 03's lordosis, kyphosis, scoliosis in the flesh), walking aids and footwear. Then <strong>inspect</strong> exposed limbs for deformity, swelling, bruising, muscle wasting and asymmetry. <strong>Palpate</strong> for warmth, tenderness, crepitus and pulses — distal pulses before and after any cast, splint or tight dressing. Test <strong>range of motion</strong> actively first (\"show me\"), passively if limited (\"let me\"), noting pain arcs and end-feel; then <strong>strength</strong> against resistance (0 = no contraction, 5 = full power — record the number, not \"weak\"). Finish every limb check with <strong>CMS — circulation, movement, sensation</strong> distal to any injury or device: colour, warmth, capillary refill, pulse; wiggle and grip; light touch and numbness. Recheck CMS after casts, traction, surgery and every complaint of increasing pain — the 6 Ps of compartment syndrome (Module 07, lesson 2) start as a CMS change, and time is muscle.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0012.svg",
          alt: "Abdomen: quadrants and classic pains. RUQ holds liver, gallbladder, duodenum and right kidney; LUQ stomach, spleen, pancreatic tail and left kidney; RLQ appendix, right ovary, caecum and right ureter; LLQ sigmoid, left ovary, descending colon and left ureter; bladder and uterus midline low. Pain mapping: RUQ gallbladder with Murphy's sign; epigastric ulcer or pancreatitis boring to the back; RLQ appendicitis with McBurney's point and navel-to-RLQ shift; LLQ diverticulitis; suprapubic bladder or UTI; flank-to-groin kidney stone; rigid with guarding is peritonitis, a surgical emergency. Examination order: inspect, auscultate, percuss, palpate — listen before touching.",
          caption: "Quadrants locate the organs, pain patterns name the suspects — and the stethoscope comes before the hands.",
        },
        {
          type: "text",
          heading: "Digestive: the sacred order",
          paragraphs: [
            "The abdomen is examined <strong>inspect → auscultate → percuss → palpate</strong> — uniquely, listening before touching, because palpation changes bowel sounds. <strong>Inspect</strong> for distension, visible peristalsis, hernias, striae, jaundice, spider naevi and caput medusae. <strong>Auscultate</strong> all four quadrants: gurgles every 5–15 seconds is normal; hyperactive rushes suggest early obstruction or diarrhoea; hypoactive suggests ileus or peritonitis; <strong>absent</strong> means five full minutes of silence — a worsening ladder, not small talk. <strong>Percuss</strong> for tympany (gas) versus dullness (mass, fluid, full bladder), <strong>palpate</strong> lightly then deeply, tender areas last, watching the face. Ask after <strong>stool</strong> (Bristol type, blood, mucus, melaena, pale/floating), <strong>vomit</strong> (blood, coffee-ground, bile, faeculent), <strong>flatus</strong> (passing wind rules out complete obstruction — ask plainly), appetite, weight change, hernias that won't reduce, and last bowel movement on every constipated elder before reaching for the laxative.",
          ],
        },
        {
          type: "text",
          heading: "Skin: colour, turgor, lesions, pressure points",
          paragraphs: [
            "Skin assessment runs <strong>colour</strong> (Module 06's table — mucosae and sclera on dark skin), <strong>temperature</strong> (dorsum of your hand, compare sides), <strong>moisture</strong> (dry, sweaty, clammy), <strong>turgor</strong> (pinch the sternum or forearm — tenting beyond a second or two means dehydration, slower still in elders), and <strong>oedema</strong> graded <strong>1+ to 4+</strong> by pit depth and rebound time, always with level (ankle? knee? sacrum?) and symmetry. Describe <strong>lesions</strong> objectively — size in centimetres, shape, colour, surface, arrangement, location, symptoms — primary (macule, papule, plaque, vesicle, pustule, wheal, nodule) versus secondary (scale, crust, erosion, ulcer, fissure, scar), and never diagnose the rash in your notes: describe it. Finally, <strong>pressure areas</strong> on every immobile patient every shift: sacrum, heels, hips, elbows, occiput, ears — non-blanching change is Stage 1 until proven otherwise, and the Braden-scale patient needs offloading, not observation.",
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Write so the next nurse can see change",
          body: "\"2 cm round ulcer, left heel, sloughy base, moderate serous exudate, no odour, surrounding skin intact, pain 3/10 on dressing change\" beats \"heel sore, dressed\" completely — the first lets tomorrow's nurse judge healing; the second hides deterioration. Measure with the same ruler, photograph per policy, date everything, and quote the patient's words for symptoms only you can't see.",
        },
      ],
      keyPoints: [
        "Compare sides, ask what changed, watch the face, anchor with vital signs; tender areas last.",
        "MSK: gait → inspect → palpate → active then passive ROM → strength 0–5 → CMS distal to every injury or device.",
        "Abdomen: inspect → auscultate → percuss → palpate; bowel sounds form a worsening ladder to 5-minute silence.",
        "Stool, vomit, flatus, appetite, weight, hernias, last bowel movement — ask plainly every time.",
        "Skin: colour (mucosae on dark skin), temperature, moisture, turgor, oedema 1+–4+, objective lesion language, pressure areas every shift.",
        "Document measurements, not adjectives — so the next nurse can see change.",
      ],
      quiz: {
        keywords: ["assessment", "compare sides", "gait", "range of motion", "muscle strength", "CMS", "capillary refill", "auscultate", "bowel sounds", "palpation", "melaena", "turgor", "oedema", "pressure areas", "documentation"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "abnormalities-and-variations-when-to-act",
      title: "Abnormalities and variations: when to act",
      minutes: 20,
      objectives: [
        "Distinguish normal variations from pathology across the three systems.",
        "State the MSK red flags: fractures, CMS compromise, compartment syndrome, cauda equina.",
        "State the digestive red flags: GI bleeding, obstruction, peritonitis, appendicitis.",
        "State the skin red flags: cellulitis, pressure stages, ABCDE moles, dehydration.",
        "Escalate with SBAR and document the handover.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Variations that reassure — and their limits",
          paragraphs: [
            "Not everything unusual is disease, and the nurse who knows the difference spares patients terror and the system referrals. <strong>MSK:</strong> flat feet, knock knees and bow legs in toddlers (most resolve), mild postural round-back at desks, clicking joints without pain or locking, and striae over growth spurts. <strong>Digestive:</strong> bowel habits from thrice daily to thrice weekly (change matters, not frequency), borborygmi after meals, reducible hernias under review, haemorrhoids and anal skin tags, lactose-pattern bloating. <strong>Skin:</strong> birthmarks, freckles and benign moles, keloid tendency in dark skin, striae, lanugo and vernix in newborns, cherry angiomas with age. Each reassurance carries its limit — the variation that <strong>changes, bleeds, ulcerates, stops reducing, locks, weakens or comes with red-flag company</strong> crosses the line below. Reassure with a reason (\"this fits a normal variant because…\") and a safety net (\"return if…\") — never with a shrug.",
          ],
        },
        {
          type: "table",
          heading: "Red flags that must never wait",
          columns: ["System", "Red flag", "What it may be", "Act"],
          rows: [
            ["MSK", "Deformity, shortening, rotation, open wound, neurovascular loss", "Fracture / dislocation", "Immobilize as found, CMS, analgesia, X-ray pathway — never straighten blindly"],
            ["MSK", "Pain out of proportion + tense compartment + pallor, pulselessness, paraesthesia, paralysis", "Compartment syndrome (the 6 Ps)", "Remove constriction, limb at heart level (not raised), emergency escalation — fasciotomy is hours-sensitive"],
            ["MSK", "Saddle numbness, incontinence, bilateral leg weakness, severe back pain", "Cauda equina", "Emergency — same-day surgical opinion; bladder scan; do not send home"],
            ["MSK", "Single hot swollen joint + fever / unable to bear weight", "Septic arthritis", "Keep NBM, blood cultures per protocol, urgent referral — joints die in days"],
            ["Digestive", "Haematemesis, melaena, fresh rectal blood with instability", "GI bleed (upper / lower)", "ABCs, large-bore access, keep NBM, vitals + urine output, transfuse per protocol, urgent endoscopy pathway"],
            ["Digestive", "Pain + vomiting + distension + absent flatus", "Bowel obstruction", "NBM, NG tube per order, IV fluids, surgical review — never laxatives"],
            ["Digestive", "Rigid abdomen, guarding, rebound, fever", "Peritonitis", "NBM, IV fluids, broad-spectrum antibiotics per protocol, emergency surgical review"],
            ["Digestive", "Periumbilical pain migrating to RLQ + McBurney's + fever", "Appendicitis", "NBM, analgesia, surgical review — ruptured appendix becomes peritonitis"],
            ["Skin", "Spreading redness, warmth, streaks, fever, rapid spread", "Cellulitis (raised edge + fever: erysipelas)", "Mark the edge + time, elevation, antibiotics per protocol, redraw the line — facial or eye involvement escalates"],
            ["Skin", "Any pressure change found on your shift", "Pressure injury, any stage", "Offload now, measure + photograph per policy, dress per protocol, refer — document Braden and actions"],
            ["Skin", "Any ABCDE mole, non-healing sore, changing lesion", "Possible melanoma / skin cancer", "Do not biopsy at bedside — refer; photograph per policy; sun-protection teaching"],
            ["Skin", "Tenting + dry mucosae + low output + confusion", "Dehydration", "Fluid balance chart, oral/IV rehydration per protocol, find the loss (vomit, diarrhoea, fever, diuretics)"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0013.svg",
          alt: "Skin warnings. Melanoma ABCDE: Asymmetry (halves don't match), Border (ragged, blurred), Colour (mixed, changing), Diameter over 6 mm, Evolving (any change earns referral). Pressure injury stages: Stage 1 intact non-blanching skin; Stage 2 shallow open ulcer or blister; Stage 3 into fat with no muscle visible; Stage 4 exposing muscle, tendon or bone; plus unstageable (hidden by slough or eschar) and suspected deep-tissue injury (purple or maroon intact skin). On dark skin Stage 1 shows purple, blue or ashen rather than red, and melanomas favour palms, soles and under nails.",
          caption: "One ABCDE feature earns referral; one pressure change earns offloading — both the shift you find them.",
        },
        {
          type: "text",
          heading: "Escalate with SBAR, then document the handover",
          paragraphs: [
            "Red flags die in vague handovers — \"the patient doesn't look good\" travels nowhere. <strong>SBAR</strong> carries them: <strong>Situation</strong> (who, where, what is happening now — \"68-year-old post-op day 1, rigid abdomen, guarding, temp 38.6\"), <strong>Background</strong> (why they're here, relevant history, what changed and when), <strong>Assessment</strong> (your vital signs, examination findings, what you think is happening — nurses are allowed an impression), <strong>Recommendation</strong> (what you need, and when — \"please review now; I've kept him NBM with IV fluids running\"). Then document the handover itself: <strong>who you told, when, what you said, what was agreed</strong> — \"Dr Mensah informed 14:20 re rigid abdomen; agreed immediate review; NBM, IV NS 1L over 8h commenced.\" If the response doesn't match the urgency, escalate up the chain — senior nurse, on-call, rapid response — and document each step. The nurse who escalates early and writes it down is never the one explaining a delay.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Capstone rule: anatomy locates, physiology explains, you act",
          body: "This course ends where nursing begins: the quadrant that names appendicitis, the compartment that threatens the hand, the mole that needs referral — all of it is Modules 01–06 applied at 2 a.m. with a worried patient. Know the normal cold, recognize the abnormal fast, document objectively, escalate with SBAR. That is the whole job, and this course was its first half.",
        },
      ],
      keyPoints: [
        "Variations reassure with a reason and a safety net; change, bleeding, ulceration, locking or red-flag company crosses the line.",
        "MSK: immobilize fractures as found; 6 Ps = emergency; saddle numbness + incontinence = cauda equina; hot joint + fever = septic.",
        "Digestive: GI bleed → ABCs + NBM + endoscopy pathway; obstruction → NBM + NG + surgical review; rigid abdomen → peritonitis.",
        "Skin: mark cellulitis edge + time; offload every pressure change same shift; any ABCDE → refer; tenting + low output → rehydrate.",
        "SBAR: Situation, Background, Assessment, Recommendation — then document who, when, what, agreed.",
        "Anatomy locates, physiology explains, you act — the capstone of A&P I.",
      ],
      quiz: {
        keywords: ["red flags", "fracture", "compartment syndrome", "cauda equina", "septic arthritis", "GI bleed", "obstruction", "peritonitis", "appendicitis", "McBurney", "cellulitis", "ABCDE", "melanoma", "SBAR", "escalation"],
        categories: ["fundamentals", "medsurg"],
      },
    },
  ],
};
