import { AuthoredQuestion } from "./authored-bank";

/**
 * 20 Original NCLEX-style clinical scenario practice questions
 * meticulously authored for Musculoskeletal Nursing course modules:
 * - Module 01: Foundations & Neurovascular Assessment (NG-MOD-MSK-001 - 002)
 * - Module 02: Fractures, Traction & Cast Care (NG-MOD-MSK-003 - 005)
 * - Module 03: Trauma, Compartment Syndrome & Complications (NG-MOD-MSK-006 - 008)
 * - Module 04: Across the Lifespan: Pediatrics & Geriatrics (NG-MOD-MSK-009 - 011)
 * - Module 05: Joint & Bone Disease, Arthroplasty (NG-MOD-MSK-012 - 014)
 * - Module 06: Infections & Spine Disorders (NG-MOD-MSK-015 - 017)
 * - Module 07: MSK Pharmacology & Clinical Calculations (NG-MOD-MSK-018 - 020)
 */
export const MSK_MODULE_SCENARIOS: AuthoredQuestion[] = [
  // ---------------------------------------------------------------------------
  // MODULE 01: Foundations & Neurovascular Assessment
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-MSK-001",
    categorySlug: "med-surg",
    stem: "A nurse performs serial neurovascular checks on a client who underwent open reduction and internal fixation (ORIF) of a closed tibial fracture 6 hours ago. Which clinical finding represents the earliest and most sensitive indicator of arterial and neurovascular compromise in the injured extremity?",
    choices: [
      { id: "a", text: "Absent dorsalis pedis and posterior tibial pulses with a cool foot" },
      { id: "b", text: "Mottled cyanosis and profound coldness spreading over the whole foot" },
      { id: "c", text: "Total paralysis, with inability to dorsiflex the ankle on request" },
      { id: "d", text: "Numbness and tingling with pain on passive extension of the toes" },
    ],
    correctChoiceId: "d",
    rationale: "In assessing the '6 Ps' of neurovascular compromise (Pain, Paresthesia, Pallor, Poikilothermia, Pulselessness, Paralysis), sensory changes such as paresthesia (burning, tingling, numbness) and intense pain exacerbated by passive stretch of the distal digits are the earliest and most reliable warning signs of ischemia and nerve compression. Pulselessness, cold pallor, and paralysis are late, ominous signs that indicate irreversible neuromuscular necrosis is already occurring. Why the other options fail: option a is pulselessness, which is late and means the limb is already at risk. Option c is pallor and coldness, which follow arterial compromise. Option d is paralysis, the last of the six signs and the one that signals irreversible damage.",
    strategy: "Recall the sequence of the 6 Ps: Pain and Paresthesia are EARLIEST; Pulselessness and Paralysis are LATE and catastrophic.",
    difficulty: "medium",
    tags: ["musculoskeletal", "neurovascular", "assessment", "6-ps", "fractures"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-MSK-002",
    categorySlug: "fundamentals",
    stem: "A nurse is caring for a client who had a wet plaster cast applied to the right lower leg 30 minutes ago. Which technique should the nurse employ when moving and positioning the casted extremity while it is still damp?",
    choices: [
      { id: "a", text: "Grasp the cast firmly with the fingertips so that it cannot slip during turns" },
      { id: "b", text: "Handle the damp cast on the flat palms of open hands, never the fingertips" },
      { id: "c", text: "Cover the damp cast with heavy wool blankets to speed up the curing process" },
      { id: "d", text: "Play a hot hairdryer over the cast surface to dry it quickly from outside" },
    ],
    correctChoiceId: "b",
    rationale: "A wet plaster cast takes 24 to 72 hours to dry completely. While wet, handling the cast with fingertips can cause localized indentations on the inside surface of the plaster, which creates severe internal pressure points and decubitus ulceration over underlying bony prominences. The nurse must handle damp casts using only the flat, open palms of both hands. Covering a wet plaster cast with blankets traps heat and moisture, while heated blow dryers can cause thermal skin burns beneath the cast. Why the other options fail: option b uses the fingertips, which press dents into the damp plaster. Option c traps heat and moisture under the blanket. Option d applies direct heat that can burn the skin beneath the cast.",
    strategy: "Remember cast handling basics: Palms ONLY for damp plaster casts (prevents indentations and pressure ulcers). Allow to air dry uncovered.",
    difficulty: "easy",
    tags: ["musculoskeletal", "cast-care", "fundamentals", "safety"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 02: Fractures, Traction & Cast Care
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-MSK-003",
    categorySlug: "med-surg",
    stem: "A nurse is caring for a frail older adult client with a fractured femoral neck who is placed in Buck's skin traction awaiting hip arthroplasty tomorrow morning. Which nursing action is essential to maintain effective therapeutic traction?",
    choices: [
      { id: "a", text: "Remove the weights for thirty minutes every two hours to let muscles relax" },
      { id: "b", text: "Rest the weights securely on a stool at the foot of the bed between turns" },
      { id: "c", text: "Raise the foot of the bed to ninety degrees to increase counter-traction" },
      { id: "d", text: "The weights hang free in mid-air, clear of the floor and the bed frame" },
    ],
    correctChoiceId: "d",
    rationale: "Buck's traction is a temporary skin traction used to immobilize the fracture, prevent muscle spasms, and relieve pain prior to surgical repair. For traction to remain continuous and effective, the weights must hang freely in mid-air off the floor and away from the bed frame at all times. Resting weights on the floor or a stool eliminates the traction pull entirely, triggering excruciating muscle spasms and fracture displacement. Traction weights must never be removed or interrupted without a specific medical prescription. Why the other options fail: option b interrupts the pull, which allows spasm and displacement. Option c takes the weight off the rope altogether. Option d does not create counter-traction and puts the client in an unsafe position.",
    strategy: "Key rule of all traction: Weights must always HANG FREELY. Never set weights on the floor, bed, or stool.",
    difficulty: "easy",
    tags: ["musculoskeletal", "bucks-traction", "traction", "hip-fracture"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-MSK-004",
    categorySlug: "med-surg",
    stem: "A client with an unstable comminuted femur fracture is admitted in balanced suspension skeletal traction with a Thomas splint and Pearson attachment. During morning rounds, the nurse inspects the distal femoral skeletal pin sites. Which finding requires prompt escalation and nursing intervention?",
    choices: [
      { id: "a", text: "Purulent, foul-smelling drainage with induration and warmth at the pin site" },
      { id: "b", text: "A small amount of clear serous crusting around the pin entry site" },
      { id: "c", text: "The weights hanging freely over the pulleys at the foot of the bed" },
      { id: "d", text: "Palpable dorsalis pedis pulses with capillary refill of two seconds" },
    ],
    correctChoiceId: "a",
    rationale: "Skeletal traction pins penetrate directly through the skin, soft tissues, and into the bone cortex, providing a direct conduit for microorganisms to cause life-threatening osteomyelitis. Purulent (pus-filled), foul-smelling drainage, erythema, localized induration, and tenderness indicate active pin-site infection that can rapidly progress to bone infection. This requires immediate wound cultures and provider notification. In contrast, slight serous (clear/straw-colored) crusting is a normal physiological exudate. Why the other options fail: option a is the normal serous crusting of a healing pin site. Options c and d describe correct traction and normal distal perfusion, neither of which needs escalation.",
    strategy: "Distinguish normal from infected pin sites: Clear/serous crusting = normal healing; Purulent drainage + erythema/heat = infection (risk of osteomyelitis)!",
    difficulty: "easy",
    tags: ["musculoskeletal", "skeletal-traction", "pin-care", "infection-control"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-MSK-005",
    categorySlug: "med-surg",
    stem: "A client with a newly applied short-arm fiberglass cast reports severe itching deep underneath the cast near the wrist. What instructions should the nurse give the client to relieve the itching safely?",
    choices: [
      { id: "a", text: "Push a plastic knitting needle or a wire coat hanger down inside to scratch" },
      { id: "b", text: "Direct a hairdryer on the cool setting down the opening of the cast" },
      { id: "c", text: "Pour baby powder or calamine lotion down inside the cast to soothe the skin" },
      { id: "d", text: "Soak the casted arm in a tub of warm water for fifteen minutes each evening" },
    ],
    correctChoiceId: "b",
    rationale: "Inserting foreign objects (such as knitting needles, coat hangers, or pens) inside a cast breaks skin integrity, creating hidden lacerations that can become infected and cause severe cellulitis or abscesses beneath the cast. Powders and lotions cake, trap moisture, and promote maceration and bacterial growth. Directing air from a hairdryer on the COOL setting down into the cast provides safe, effective pruritus relief without damaging the skin or lining. Antihistamines may also be prescribed. Why the other options fail: option a introduces an object that can break the skin where nobody can see the wound. Option b cakes and traps moisture against the skin. Option d softens and damages the cast and the skin beneath it.",
    strategy: "Cast safety rule: Never stick anything inside a cast! Use a blow dryer on COOL setting or prescribed oral antihistamines for itching.",
    difficulty: "easy",
    tags: ["musculoskeletal", "cast-care", "pruritus", "patient-education"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 03: Trauma, Compartment Syndrome & Complications
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-MSK-006",
    categorySlug: "med-surg",
    stem: "A client who sustained a crush injury to the right lower leg reports severe, throbbing calf pain rated 10/10 that is unresponsive to repeated intravenous hydromorphone doses. On assessment, the calf is firm and tight, and the client screams in pain when the nurse gently flexes the foot upward (passive dorsiflexion). Which action by the nurse is indicated?",
    choices: [
      { id: "a", text: "Elevate the leg high above heart level on four pillows and apply ice bags" },
      { id: "b", text: "Start vigorous active range-of-motion exercises to stretch the calf muscle" },
      { id: "c", text: "Give another dose of hydromorphone and reassess the leg in two hours" },
      { id: "d", text: "Keep the limb at heart level, loosen the dressings, and call the surgeon now" },
    ],
    correctChoiceId: "d",
    rationale: "This client is demonstrating classic hallmark signs of acute compartment syndrome: severe, unremitting pain out of proportion to the injury, tense wooden swelling, and extreme pain with passive stretching of the compartment muscles. Increased tissue pressure within an inelastic fascial space compromises perfusion. Immediate priorities: keep the limb AT HEART LEVEL (elevating above heart reduces arterial perfusion pressure; lowering below heart increases venous hydrostatic pressure), loosen external constrictive bandages/splints/casts (bivalving), and summon the surgeon immediately for emergency fasciotomy. Ice is contraindicated because it induces vasoconstriction. Why the other options fail: option a raises the limb above the heart, which lowers arterial perfusion, and ice constricts the vessels further. Option c exercises a compartment that is already under pressure. Option d withholds the only intervention that saves the limb.",
    strategy: "Recognize acute compartment syndrome: Pain out of proportion + pain on passive stretch. Actions: Keep at heart level (NEVER elevate high), remove constrictions, call surgeon for fasciotomy.",
    difficulty: "hard",
    tags: ["musculoskeletal", "compartment-syndrome", "emergency", "fasciotomy"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-MSK-007",
    categorySlug: "med-surg",
    stem: "A 21-year-old client who sustained a closed mid-shaft femur fracture 36 hours ago suddenly becomes restless, confused, and tachypneic. The nurse notes an SpO2 of 86% on room air, respiratory rate of 32 breaths/min, and pinpoint non-palpable petechial spots across the client's anterior chest, neck, and axillary folds. What clinical emergency should the nurse immediately recognize?",
    choices: [
      { id: "a", text: "Fat embolism syndrome, 36 hours after a femoral shaft fracture" },
      { id: "b", text: "Deep vein thrombosis with localised venous stasis in the calf" },
      { id: "c", text: "Acute neurogenic shock from occult spinal cord injury" },
      { id: "d", text: "Bacterial sepsis from a hospital-acquired catheter infection" },
    ],
    correctChoiceId: "a",
    rationale: "Fat embolism syndrome (FES) is a life-threatening complication occurring 24 to 72 hours after fractures of long bones (such as the femur or pelvis) or major orthopedic trauma. Fat globules released from the disrupted marrow canal embolize to the pulmonary vasculature and systemic microcirculation. FES presents with a classic clinical triad: (1) hypoxemia and respiratory distress (dyspnea, tachypnea, low SpO2), (2) neurological abnormalities (restlessness, confusion, altered mental status), and (3) a pathognomonic petechial rash distributed over the non-dependent skin of the neck, chest, axillae, and conjunctivae (due to microvascular fat occlusion and thrombocytopenia). Why the other options fail: option a gives local swelling without hypoxaemia or a rash. Option c gives hypotension and bradycardia, not the petechial rash described. Option d is possible in hospital but does not explain the rash appearing with the confusion.",
    strategy: "Identify the diagnostic triad of Fat Embolism Syndrome: Long bone fracture + Hypoxemia + Confusion + Petechial rash on chest/axilla.",
    difficulty: "medium",
    tags: ["musculoskeletal", "fat-embolism", "femur-fracture", "emergency", "respiratory"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-MSK-008",
    categorySlug: "med-surg",
    stem: "A factory worker suffers a traumatic complete amputation of the left index and middle fingers. When instructing first responders and preparing the severed digits for transport to the replantation center, how should the nurse handle the amputated parts?",
    choices: [
      { id: "a", text: "Put the digits straight into a cup of crushed ice with dry ice" },
      { id: "b", text: "Place the digits in a bowl of warm, sterile lactated Ringer solution" },
      { id: "c", text: "Scrub the severed digits with concentrated chlorhexidine before transport" },
      { id: "d", text: "Wrap in saline-moistened gauze, seal in a bag, and float the bag in ice water" },
    ],
    correctChoiceId: "d",
    rationale: "Proper preservation of amputated digits is critical for successful microvascular replantation. The severed part should be rinsed gently with sterile saline if grossly contaminated, wrapped in sterile gauze moistened with normal saline (never soaking wet), placed into a waterproof, sealed plastic bag, and then placed into an insulated container filled with a slurry of ice and water (cooling to ~4°C). The part must NEVER be placed directly on ice (causes freezing injury and tissue death) or submerged directly in water (causes severe tissue edema and cellular lysis). Why the other options fail: option b freezes the tissue directly and kills it. Option c soaks the part in fluid, which causes oedema and cell lysis. Option d applies a caustic antiseptic to tissue that must survive to be replanted.",
    strategy: "Recall the 3-step rule for severed parts: (1) Wrap in moist saline gauze; (2) Put in plastic bag; (3) Put bag on ice-water slurry. Never put directly on ice or in water.",
    difficulty: "medium",
    tags: ["musculoskeletal", "amputation", "trauma", "emergency", "replantation"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 04: Across the Lifespan: Pediatrics & Geriatrics
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-MSK-009",
    categorySlug: "pediatrics",
    stem: "A 2-month-old infant is diagnosed with developmental dysplasia of the hip (DDH) and fitted with a Pavlik harness. When providing education to the infant's parents regarding harness maintenance and skin safety, which instruction is correct?",
    choices: [
      { id: "a", text: "Adjust the buckles and strap lengths at home whenever the infant seems uncomfortable" },
      { id: "b", text: "Wear it 23 hours a day, over a soft undershirt and knee socks, and never adjust it" },
      { id: "c", text: "Take the harness off whenever the infant is awake and playing on the floor" },
      { id: "d", text: "Rub thick scented lotion and baby powder under the straps twice a day" },
    ],
    correctChoiceId: "b",
    rationale: "A Pavlik harness maintains the infant's hips in flexion and abduction to seat the femoral head deeply into the acetabulum. The harness is typically worn continuously for 23 hours a day (only removed briefly for bathing if authorized). To prevent skin breakdown from friction, parents should dress the infant in a thin, soft cotton undershirt and knee socks beneath the straps. The straps should NEVER be adjusted by parents; adjustments must only be made by the healthcare provider to ensure correct anatomical alignment. Powders and lotions promote skin maceration and irritation. Why the other options fail: option a lets parents change the alignment, which only the treating team may do. Option b removes the harness for hours, losing the position it exists to hold. Option d adds lotions and powders that macerate the skin under the straps.",
    strategy: "Pavlik harness rules: Worn 23 hours/day, undershirt/socks under straps, parents NEVER adjust straps, no powders/lotions.",
    difficulty: "medium",
    tags: ["musculoskeletal", "ddh", "pediatrics", "pavlik-harness", "patient-education"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-MSK-010",
    categorySlug: "med-surg",
    stem: "A 68-year-old postmenopausal woman undergoes a dual-energy x-ray absorptiometry (DXA) scan that reveals a femoral neck bone mineral density T-score of -2.8. How should the nurse interpret this result, and which non-pharmacological lifestyle recommendation should the nurse prioritize?",
    choices: [
      { id: "a", text: "Normal bone density; recommend high-impact aerobic jumping classes" },
      { id: "b", text: "Osteoporosis at a T-score of -2.8; weight-bearing exercise and fall-proofing her home" },
      { id: "c", text: "Osteopenia; recommend strict and prolonged bed rest to avoid microfractures" },
      { id: "d", text: "Severe osteoarthritis; recommend avoiding all dairy and calcium-rich foods" },
    ],
    correctChoiceId: "b",
    rationale: "According to World Health Organization criteria, a DXA T-score of -2.5 or lower defines osteoporosis (T-score between -1.0 and -2.5 defines osteopenia; -1.0 or higher is normal). For clients with osteoporosis, regular weight-bearing exercises (e.g., walking, stair climbing) stimulate bone osteoblast activity and remodeling. Concurrently, home safety and fall prevention (removing loose throw rugs, installing grab bars, adequate night lighting) are crucial to prevent devastating fragility fractures (e.g., hip or vertebral compression fractures). Why the other options fail: option a misreads a score below -2.5 as normal and recommends impact loading on fragile bone. Option b calls it osteopenia and prescribes rest, which accelerates bone loss. Option d confuses osteoporosis with osteoarthritis and removes a needed calcium source.",
    strategy: "Recall T-score cutoffs: T-score ≤ -2.5 = Osteoporosis. Management: Weight-bearing exercise + Fall hazard elimination (throw rugs, lighting) + Calcium/Vitamin D.",
    difficulty: "easy",
    tags: ["musculoskeletal", "osteoporosis", "dxa-scan", "fall-prevention", "gerontology"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-MSK-011",
    categorySlug: "pediatrics",
    stem: "A school nurse performs a spinal screening on a 13-year-old adolescent. While performing the Adams forward bend test, which assessment finding is most indicative of structural adolescent idiopathic scoliosis?",
    choices: [
      { id: "a", text: "Symmetrical horizontal alignment of the posterior ribs and both scapulae" },
      { id: "b", text: "Exaggerated anterior convexity of the cervical spine on forward bending" },
      { id: "c", text: "Bilateral sacral dimples with a tuft of hair over the lower sacrum" },
      { id: "d", text: "A unilateral rib hump with paraspinal asymmetry on forward bending" },
    ],
    correctChoiceId: "d",
    rationale: "The Adams forward bend test is the standard screening assessment for scoliosis: the adolescent bends forward at the waist with knees straight and arms hanging loosely downward. In structural scoliosis, rotational vertebral deformities cause the ribs to project posteriorly on the convex side of the curve, producing a noticeable unilateral rib hump and asymmetrical scapular elevation. Symmetrical ribs are normal. Why the other options fail: option a describes a normal spine. Option c describes cervical posture, not the rotational deformity that scoliosis produces. Option d describes a cutaneous marker of occult spinal dysraphism, which the Adams test does not show.",
    strategy: "Associate Adams forward bend test with scoliosis: Forward bending reveals rib hump and asymmetric paraspinal elevation.",
    difficulty: "easy",
    tags: ["musculoskeletal", "scoliosis", "pediatrics", "assessment", "screening"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 05: Joint & Bone Disease, Arthroplasty
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-MSK-012",
    categorySlug: "med-surg",
    stem: "A nurse is caring for a client on postoperative day 1 following a total hip arthroplasty performed via a posterior surgical approach. To prevent acute prosthetic hip dislocation, which postoperative nursing intervention must be enforced?",
    choices: [
      { id: "a", text: "An abduction pillow in bed, with hip flexion kept under 90 degrees" },
      { id: "b", text: "Keep the operative leg adducted, and cross the ankles while lying in bed" },
      { id: "c", text: "Provide a low, soft lounge chair for the client to sit in during the day" },
      { id: "d", text: "Let the client bend at the waist to tie their own shoes before discharge" },
    ],
    correctChoiceId: "a",
    rationale: "Following a posterior approach total hip arthroplasty, the posterior hip capsule is disrupted, creating a high risk of prosthetic dislocation if the hip enters flexion, adduction, or internal rotation. Precautions include: (1) using an abduction wedge pillow between the legs to maintain abduction, (2) avoiding hip flexion past 90 degrees (using raised toilet seats and straight-back firm chairs, avoiding bending at the waist), and (3) avoiding internal rotation or crossing legs/ankles. Low soft chairs cause extreme hip flexion (>90°) and are strictly contraindicated. Why the other options fail: option a crosses the ankles in adduction, which is the movement that dislocates a posterior-approach hip. Option b flexes the hip past ninety degrees in a soft chair. Option d bends the hip past ninety degrees while standing.",
    strategy: "Remember the hip dislocation triad for posterior hip replacement: No flexion > 90°, No crossing legs (adduction), No internal rotation. Use abduction pillow!",
    difficulty: "medium",
    tags: ["musculoskeletal", "hip-arthroplasty", "postoperative", "dislocation-precautions"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-MSK-013",
    categorySlug: "med-surg",
    stem: "A nurse compares the clinical features of rheumatoid arthritis (RA) and osteoarthritis (OA) during a clinical conference. Which constellation of symptoms specifically characterizes rheumatoid arthritis rather than osteoarthritis?",
    choices: [
      { id: "a", text: "Asymmetrical wear of weight-bearing joints, with stiffness lasting under thirty minutes" },
      { id: "b", text: "Symmetrical inflammation, systemic fatigue, and morning stiffness over an hour" },
      { id: "c", text: "Isolated crepitus in the knees, which worsens progressively with activity" },
      { id: "d", text: "Heberden and Bouchard nodes at the distal interphalangeal joints, without fever" },
    ],
    correctChoiceId: "b",
    rationale: "Rheumatoid arthritis (RA) is a systemic, autoimmune inflammatory disease characterized by symmetric peripheral joint involvement (wrists, MCP, PIP joints), prolonged morning stiffness lasting greater than 1 hour (which loosens and improves with movement), and systemic symptoms (fatigue, low-grade fever, anorexia, weight loss). In contrast, osteoarthritis (OA) is a degenerative 'wear-and-tear' non-inflammatory disease characterized by asymmetric involvement of weight-bearing joints, brief morning stiffness (< 30 minutes), pain that worsens with activity and improves with rest, and bony nodes (Heberden's and Bouchard's). Why the other options fail: option a is osteoarthritis, which is asymmetrical and stiff for under half an hour. Option c is the crepitus of degenerative joint disease. Option d describes the osteophytes of osteoarthritis at the distal interphalangeal joints.",
    strategy: "Compare RA vs OA: RA = Symmetrical, Autoimmune, Morning stiffness > 1 hour, systemic signs. OA = Asymmetrical, Degenerative, Morning stiffness < 30 min, worse with use.",
    difficulty: "medium",
    tags: ["musculoskeletal", "rheumatoid-arthritis", "osteoarthritis", "differential-diagnosis"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-MSK-014",
    categorySlug: "med-surg",
    stem: "A client presents with an exquisitely painful, hot, swollen, and red right great toe (podagra). Serum uric acid is elevated at 9.6 mg/dL, confirming acute gouty arthritis. When providing nutritional and lifestyle teaching to prevent future gouty flare-ups, which instruction should the nurse emphasize?",
    choices: [
      { id: "a", text: "Increase daily red meat, liver and shellfish, which are good sources of protein" },
      { id: "b", text: "Take high-dose aspirin every day to push uric acid out through the kidneys" },
      { id: "c", text: "Two to three litres of water daily, and no alcohol, especially beer" },
      { id: "d", text: "Cut fluid intake to one litre a day to stop fluid collecting around the joints" },
    ],
    correctChoiceId: "c",
    rationale: "Gout is caused by hyperuricemia and precipitation of monosodium urate crystals in synovial joints. High fluid intake of 2 to 3 liters daily maintains adequate urinary volume to promote uric acid excretion and prevent kidney stone (nephrolithiasis) formation. Purine-rich foods (organ meats, red meat, sardines, anchovies, shellfish) break down into uric acid and should be strictly avoided. Alcohol, particularly beer, increases uric acid production while reducing renal excretion. Aspirin should be avoided because salicylates interfere with renal uric acid excretion and can precipitate flare-ups. Why the other options fail: option a raises purine intake, which raises uric acid. Option c uses aspirin, which at these doses retains uric acid. Option d reduces the urine volume that clears urate and invites stones.",
    strategy: "Gout lifestyle essentials: Drink 2-3 L fluids/day (flushes uric acid) + Avoid high-purine foods (organ meats, shellfish) + Avoid beer/alcohol.",
    difficulty: "easy",
    tags: ["musculoskeletal", "gout", "hyperuricemia", "dietary-teaching", "nutrition"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 06: Infections & Spine Disorders
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-MSK-015",
    categorySlug: "med-surg",
    stem: "A client with type 2 diabetes mellitus is admitted with acute hematogenous osteomyelitis of the right calcaneus. What is the standard medical and nursing management required to treat this deep bone infection effectively?",
    choices: [
      { id: "a", text: "A three-day course of oral cephalexin, taken at home after discharge" },
      { id: "b", text: "Continuous high-temperature wet packs to the heel, without any antibiotics" },
      { id: "c", text: "Cultures first, then four to six weeks of targeted intravenous antibiotics" },
      { id: "d", text: "Immediate amputation of the foot, without attempting medical therapy first" },
    ],
    correctChoiceId: "c",
    rationale: "Bone is relatively avascular compared to soft tissues, making antibiotic penetration difficult. Osteomyelitis (commonly caused by Staphylococcus aureus) requires obtaining blood and bone/wound cultures first, followed by an aggressive, prolonged course of targeted intravenous antibiotics lasting 4 to 6 weeks or longer. A peripherally inserted central catheter (PICC line) is typically placed for home or outpatient IV antibiotic infusions. Short-course oral therapy is inadequate and leads to chronic osteomyelitis, bone necrosis (sequestrum), and amputation. Why the other options fail: option a is far too short to sterilise bone. Option c applies heat without an antibiotic to an infected bone. Option d amputates before any medical treatment has been tried.",
    strategy: "Recognize osteomyelitis therapy duration: Bone infection requires long-term (4 to 6 weeks) IV antibiotics, usually via a PICC line.",
    difficulty: "medium",
    tags: ["musculoskeletal", "osteomyelitis", "antibiotics", "picc-line", "infection-control"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-MSK-016",
    categorySlug: "med-surg",
    stem: "A client with a history of chronic lower back pain from a herniated lumbar disc presents to the emergency department. Which symptom reported by the client represents an acute neurological emergency known as cauda equina syndrome?",
    choices: [
      { id: "a", text: "Saddle anaesthesia with new urinary incontinence" },
      { id: "b", text: "A mild dull ache in the lower back that increases after prolonged sitting" },
      { id: "c", text: "A localised hamstring spasm on the right that eases with massage" },
      { id: "d", text: "Gradual loss of lumbar range of motion over the past six months" },
    ],
    correctChoiceId: "a",
    rationale: "Cauda equina syndrome is a surgical emergency caused by massive central disc herniation or spinal tumor compressing the lumbosacral nerve roots of the cauda equina. Hallmark features include: (1) saddle anesthesia (loss of sensation in the buttocks, perineum, and inner thighs), (2) bowel or bladder dysfunction (urinary retention or overflow incontinence, fecal incontinence), and (3) bilateral sciatica with lower-extremity motor weakness. Immediate surgical decompression (within 24–48 hours) is mandatory to prevent permanent paraplegia and permanent loss of bowel/bladder control. Why the other options fail: option a is the ordinary ache of disc disease. Option c is a local muscle spasm. Option d is a slow mechanical change, not the acute compression that threatens bladder, bowel and leg function.",
    strategy: "Identify Cauda Equina Syndrome red flags: Saddle anesthesia + sudden urinary/bowel incontinence or retention + bilateral weakness. Immediate surgical emergency!",
    difficulty: "hard",
    tags: ["musculoskeletal", "cauda-equina", "spine", "surgical-emergency", "neurological"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-MSK-017",
    categorySlug: "med-surg",
    stem: "A nurse is caring for a client who had an L4–L5 laminectomy and spinal fusion 12 hours ago. Which nursing intervention is mandatory when turning and repositioning this client in bed?",
    choices: [
      { id: "a", text: "Have the client grip the side rail and twist the hips first to start the turn" },
      { id: "b", text: "Sit the client in high Fowler for thirty minutes before every repositioning" },
      { id: "c", text: "Log-roll with a friction sheet, keeping the spine neutral and a pillow between the knees" },
      { id: "d", text: "Let the client dangle their feet over the side of the bed without assistance" },
    ],
    correctChoiceId: "c",
    rationale: "Following spinal surgery (laminectomy and fusion), maintaining strict neutral spinal alignment is vital to prevent graft displacement, instrumentation failure, and spinal cord trauma. The nurse must log-roll the client as a single cohesive unit: 2 to 3 staff members align the shoulders, hips, and knees simultaneously without twisting or bending the torso. A pillow is placed between the knees to maintain proper hip alignment. The client must never twist, reach for rails, or bend the spine. Why the other options fail: option a twists the spine across the fusion. Option b flexes the spine before a turn that must keep it neutral. Option d loads the spine and risks a fall without help.",
    strategy: "Spine surgery repositioning rule: Always LOG-ROLL! Keep the entire spine aligned in one straight plane with a pillow between the knees.",
    difficulty: "easy",
    tags: ["musculoskeletal", "spinal-fusion", "log-roll", "postoperative", "safety"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 07: MSK Pharmacology & Clinical Calculations
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-MSK-018",
    categorySlug: "pharmacology-parenteral",
    stem: "A client with severe postmenopausal osteoporosis is prescribed oral alendronate 70 mg once weekly. Which specific administration instructions must the nurse emphasize to prevent devastating drug-induced esophageal ulceration?",
    choices: [
      { id: "a", text: "On waking, with a full glass of plain water, then stay upright 30 minutes" },
      { id: "b", text: "Take the tablet at bedtime with a small glass of orange juice" },
      { id: "c", text: "Crush the tablet and stir it thoroughly into hot porridge or yoghurt" },
      { id: "d", text: "Take the tablet with lunch, alongside a calcium carbonate supplement" },
    ],
    correctChoiceId: "a",
    rationale: "Oral bisphosphonates (alendronate, risedronate) are poorly absorbed and highly caustic to esophageal mucosa. If a tablet lodges in the esophagus, it can cause severe erosive esophagitis, ulceration, and esophageal perforation. Mandatory instructions: (1) take immediately upon waking on an empty stomach with a full 8-ounce glass of plain water (not mineral water, juice, or coffee), (2) wait at least 30 minutes before consuming any food, drink, or other medications, and (3) remain sitting or standing completely upright for at least 30 minutes (60 minutes for ibandronate). Never crush or chew. Why the other options fail: option a gives the tablet at night, lying down, with juice. Option c crushes a tablet that must be swallowed whole. Option d takes it with food and calcium, both of which block absorption.",
    strategy: "Recall the bisphosphonate golden rules: Morning + Full glass plain water + Empty stomach + Sit upright 30 minutes (prevents esophageal ulcers).",
    difficulty: "medium",
    tags: ["musculoskeletal", "alendronate", "bisphosphonates", "pharmacology", "esophagitis"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-MSK-019",
    categorySlug: "pharmacology-parenteral",
    stem: "A 32-year-old female client with severe active rheumatoid arthritis is prescribed weekly oral methotrexate. When providing medication counseling, which critical instruction must the nurse deliver?",
    choices: [
      { id: "a", text: "Take the medicine daily with dairy products to improve absorption" },
      { id: "b", text: "Stop the medicine as soon as the joint pain improves after the first dose" },
      { id: "c", text: "Reliable contraception, because it is teratogenic, and daily folic acid" },
      { id: "d", text: "Skip the routine blood tests while on maintenance therapy, since they are unnecessary" },
    ],
    correctChoiceId: "c",
    rationale: "Methotrexate is a disease-modifying antirheumatic drug (DMARD) and folate antimetabolite. It is dosed once WEEKLY for rheumatoid arthritis (daily dosing is an error that causes fatal bone marrow toxicity). Methotrexate is an FDA Pregnancy Category X drug and potent teratogen that causes congenital malformations and fetal demise; strict contraception is mandatory during therapy and for at least one ovulatory cycle after stopping. Daily folic acid supplementation is co-prescribed to prevent gastrointestinal toxicity and stomatitis. Routine complete blood counts and liver function tests are required. Why the other options fail: option a gives a weekly drug daily, which causes marrow toxicity. Option c stops the disease-modifying drug as soon as it begins to work. Option d removes the blood monitoring that catches marrow and liver toxicity.",
    strategy: "Key methotrexate points: Weekly dosing (NOT daily), Folic acid co-administration, Teratogenic (Category X, strict birth control), Bone marrow suppression monitoring.",
    difficulty: "hard",
    tags: ["musculoskeletal", "methotrexate", "dmards", "rheumatoid-arthritis", "pharmacology"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-MSK-020",
    categorySlug: "pharmacology-parenteral",
    stem: "A client who underwent an open reduction and internal fixation of a pelvic fracture is receiving intravenous morphine via a patient-controlled analgesia (PCA) pump. During hourly rounds, the nurse finds the client sleeping soundly with a respiratory rate of 8 breaths/min, pinpoint pupils, and an SpO2 of 88% on 2 L/min nasal cannula. What is the nurse's priority sequence of actions?",
    choices: [
      { id: "a", text: "Raise the nasal cannula to six litres and let the client sleep undisturbed" },
      { id: "b", text: "Press the PCA bolus button to test whether the lockout is working" },
      { id: "c", text: "Arouse the client, stop the PCA, give titrated naloxone and call for help" },
      { id: "d", text: "Document the findings as the expected deep sleep of good analgesia" },
    ],
    correctChoiceId: "c",
    rationale: "A respiratory rate of 8 breaths/min, somnolence, pinpoint pupils, and desaturation indicate severe opioid-induced respiratory depression—a life-threatening PCA complication. The nurse must immediately attempt physical stimulation to arouse the client, stop the PCA infusion to halt further drug delivery, administer the opioid antagonist IV naloxone (Narcan) in small titrated doses to reverse respiratory depression without precipitating severe acute withdrawal pain, maintain the airway, provide supplemental oxygen, and call for emergency assistance. Why the other options fail: option b masks hypoxaemia without treating the cause. Option c delivers more opioid to a client who is already over-sedated. Option d records a respiratory rate of eight as normal.",
    strategy: "Recognize opioid toxicity triad: RR < 10, pinpoint pupils, sedation. Immediate response: Stop PCA, stimulate client, give IV naloxone, call for help.",
    difficulty: "medium",
    tags: ["musculoskeletal", "pca-pump", "morphine", "naloxone", "safety", "respiratory-depression"],
    isFree: false,
  },
];
