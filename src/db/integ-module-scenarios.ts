import type { AuthoredQuestion } from "./authored-bank";

export const INTEG_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-INTEG-001",
    categorySlug: "fundamentals",
    stem: "A nurse is assessing a deeply pigmented African client admitted with suspected sepsis and acute respiratory distress. Which assessment technique is most reliable for identifying cyanosis and pallor in clients with dark skin?",
    choices: [
      {
        id: "a",
        text: "Inspect the conjunctivae, oral mucous membranes, and lips for ashen-grey or blue discoloration, and examine the palms and nail beds rather than relying on general facial skin tone",
      },
      {
        id: "b",
        text: "Rely exclusively on examining the skin tone over the anterior forearm in ambient room lighting",
      },
      {
        id: "c",
        text: "Observe the skin over the abdomen for bright pink flushing",
      },
      {
        id: "d",
        text: "Conclude that cyanosis and pallor cannot be clinically assessed in darkly pigmented skin",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "In darkly pigmented skin, high epidermal melanin concentrations mask the subtle cutaneous color changes seen in lighter skin. Pallor presents not as obvious whiteness, but as a dull, ashen-grey color in dark skin or a yellowish-brown tinge in olive/brown skin. Cyanosis in dark-skinned individuals is best detected by inspecting areas of least pigmentation and rich capillary vascularity: the conjunctivae, buccal mucosa, hard palate, tongue, lips, and palmar surfaces of hands and soles of feet. Additionally, the nurse must palpate the skin for localized warmth, edema, and induration rather than relying solely on erythema.",
    strategy: "Dark skin assessment: Inspect mucous membranes (buccal mucosa, tongue, conjunctivae) and palms/soles for pallor/cyanosis; palpate for warmth/induration.",
    difficulty: "easy",
    tags: ["integumentary", "skin-assessment", "dark-skin", "cyanosis", "pallor"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-002",
    categorySlug: "fundamentals",
    stem: "A nurse documents dermatological findings on an adult client. Which lesion description correctly matches its morphological classification?",
    choices: [
      {
        id: "a",
        text: "Papule: A large fluid-filled blister greater than 5 cm in diameter located deep in the subcutaneous adipose tissue",
      },
      {
        id: "b",
        text: "Macule: A flat, non-palpable, circumscribed area of skin color change measuring less than 1 cm in diameter without elevation or depression",
      },
      {
        id: "c",
        text: "Bulla: A solid, raised, firm lesion containing dense fibrous scar tissue",
      },
      {
        id: "d",
        text: "Wheal: A permanent open cavity extending through the muscle into the periosteum",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Primary skin lesion taxonomy is fundamental to clinical dermatology: (1) A macule is a flat, non-palpable change in skin color < 1 cm (e.g., freckle, petechia); if > 1 cm, it is a patch. (2) A papule is an elevated, palpable, solid mass < 1 cm (e.g., mole, wart); if > 1 cm, it is a plaque. (3) A vesicle is an elevated cavity filled with clear serous fluid <= 0.5–1 cm (e.g., herpes simplex); if > 1 cm, it is a bulla (blister). (4) A wheal is a transient, raised, edematous, erythematous area with irregular borders caused by dermal fluid extravasation (e.g., urticaria/hives).",
    strategy: "Lesion taxonomy: Macule = flat color change < 1 cm. Papule = solid raised < 1 cm. Vesicle = fluid blister < 1 cm. Bulla = fluid blister > 1 cm.",
    difficulty: "easy",
    tags: ["integumentary", "dermatology", "skin-lesions", "macule", "taxonomy"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-003",
    categorySlug: "fundamentals",
    stem: "A wound care nurse utilizes the TIME framework (Tissue, Infection/Inflammation, Moisture imbalance, Edge of wound) to evaluate a chronic venous leg ulcer. The wound bed currently displays 60% yellow, fibrous, adherent slough and heavy purulent exudate causing periwound maceration. What is the nurse's priority dual objective based on the TIME principles?",
    choices: [
      {
        id: "a",
        text: "Apply dry gauze and leave the wound exposed to hot sunlight to completely desiccate the tissue bed",
      },
      {
        id: "b",
        text: "Pour undiluted 10% povidone-iodine and 3% hydrogen peroxide repeatedly into the ulcer bed to destroy all cellular activity",
      },
      {
        id: "c",
        text: "Debride non-viable yellow slough (Tissue) and manage heavy exudate using an absorbent dressing to prevent surrounding skin breakdown while maintaining a warm, moist wound bed (Moisture balance)",
      },
      {
        id: "d",
        text: "Surgically amputate the entire lower extremity immediately without attempting conservative wound dressings",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The TIME framework optimizes the chronic wound microenvironment: (1) Tissue non-viable: Slough and necrotic eschar promote bacterial biofilm and must be debrided (autolytic, enzymatic, sharp, or mechanical); (2) Infection/Inflammation: Control bacterial burden and biofilm; (3) Moisture imbalance: Chronic wounds heal fastest in a physiological moist (not wet, not dry) environment; excessive exudate macerates surrounding skin and contains destructive metalloproteinases, requiring absorbent dressings (calcium alginates, hydrofibers, foam); and (4) Edge advancement: Epidermal cells require a healthy granulating matrix to migrate across wound margins.",
    strategy: "TIME wound care: Non-viable slough requires debridement + excess exudate requires absorbent dressing to balance moisture and prevent maceration.",
    difficulty: "medium",
    tags: ["integumentary", "wound-care", "time-framework", "slough", "exudate-management"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-004",
    categorySlug: "fundamentals",
    stem: "A bedridden client has a localized area over the sacrum displaying partial-thickness loss of dermis presenting as a shallow, open ulcer with a viable, pink-red wound bed without slough or bruising. An adjacent area shows an intact, serum-filled blister. How should the nurse stage this pressure injury according to the NPUAP/EPUAP staging system?",
    choices: [
      {
        id: "a",
        text: "Stage 1 pressure injury",
      },
      {
        id: "b",
        text: "Stage 3 pressure injury",
      },
      {
        id: "c",
        text: "Unstageable pressure injury",
      },
      {
        id: "d",
        text: "Stage 2 pressure injury",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "According to NPUAP/EPUAP staging: Stage 1 is intact skin with localized non-blanchable erythema (or localized warmth, firmness, or discoloration in dark skin). Stage 2 is partial-thickness loss of skin with exposed dermis, presenting as a shallow open ulcer with a viable, red or pink, moist wound bed without slough, eschar, or granulation tissue, OR presenting as an intact or open/ruptured serum-filled blister. Stage 3 involves full-thickness skin loss with visible adipose tissue and granulation; Stage 4 involves exposed bone, tendon, or muscle. Unstageable occurs when slough or eschar completely obscures the base.",
    strategy: "Pressure injury staging: Partial-thickness dermis loss with red/pink bed OR intact serum blister = Stage 2. Full-thickness into fat = Stage 3.",
    difficulty: "easy",
    tags: ["integumentary", "pressure-injury", "npuap-staging", "stage-2", "wound-care"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-005",
    categorySlug: "fundamentals",
    stem: "The nurse scores a newly admitted stroke client on the Braden Scale for Predicting Pressure Sore Risk. The total score is 11 (high risk). Which multi-component prevention plan is most appropriate and evidence-based?",
    choices: [
      {
        id: "a",
        text: "Implement a structured 2-hour repositioning schedule utilizing a 30-degree lateral tilt, place pressure-redistributing foam or alternating-pressure mattress, float heels off the bed with pillows, and maintain dry, barrier-protected skin",
      },
      {
        id: "b",
        text: "Vigorously massage all reddened bony prominences every hour using rubbing alcohol",
      },
      {
        id: "c",
        text: "Place the client in high Fowler position (90 degrees) continuously and place a donut ring cushion under the sacrum",
      },
      {
        id: "d",
        text: "Reposition the client only once every 12 hours to avoid disturbing their rest",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "A Braden score <= 12 signifies high risk for pressure injury development (scores range from 6 to 23; lower scores mean higher risk). Evidence-based prevention mandates: (1) frequent repositioning (at least every 2 hours in bed, every 1 hour in a chair); (2) using a 30-degree lateral tilted position (avoids direct vertical pressure on the trochanter and sacrum); (3) floating heels off the mattress using pillows under calves; (4) pressure-redistribution support surfaces; (5) moisture barriers for incontinence; and (6) avoiding elevation of the head of the bed > 30 degrees (reduces shear forces). Vigorously massaging bony prominences causes deep tissue capillary damage.",
    strategy: "Pressure ulcer prevention: Reposition q2h + 30-degree tilt + float heels + pressure-relieving mattress. NEVER massage bony prominences or use donut rings.",
    difficulty: "easy",
    tags: ["integumentary", "braden-scale", "pressure-injury-prevention", "repositioning", "patient-safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-006",
    categorySlug: "risk-reduction",
    stem: "An adult client was caught in a domestic gas explosion and sustained second- and third-degree burns covering the entire anterior chest, entire abdomen, the entire left arm (circumferential), and the anterior surface of the left leg. Using the Rule of Nines, what is the calculated Total Body Surface Area (TBSA) percentage of burn injury?",
    choices: [
      {
        id: "a",
        text: "27% TBSA",
      },
      {
        id: "b",
        text: "36% TBSA",
      },
      {
        id: "c",
        text: "45% TBSA",
      },
      {
        id: "d",
        text: "18% TBSA",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Under the adult Wallace Rule of Nines: Head and neck = 9%; Anterior trunk = 18% (chest 9% + abdomen 9%); Posterior trunk = 18% (upper back 9% + lower back/buttocks 9%); Each arm = 9% total (anterior 4.5% + posterior 4.5%); Each leg = 18% total (anterior 9% + posterior 9%); Perineum/genitalia = 1%. In this client: Anterior chest (9%) + Entire abdomen (9%) + Entire left arm (9%) + Anterior left leg (9%) = 9 + 9 + 9 + 9 = 36% TBSA.",
    strategy: "Rule of Nines calculation: Chest (9%) + Abdomen (9%) + Entire arm (9%) + Anterior leg (9%) = 36% TBSA.",
    difficulty: "medium",
    tags: ["integumentary", "burns", "rule-of-nines", "tbsa", "emergency-nursing"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-007",
    categorySlug: "fluid-electrolyte",
    stem: "A 70 kg adult male arrives at the emergency department 1 hour after sustaining 40% TBSA partial- and full-thickness flame burns. Using the Parkland formula (4 mL x kg x % TBSA of Ringer's Lactate), calculate the total fluid requirement for the first 24 hours, and determine the rate at which fluids should be administered during the remaining 7 hours of the first 8-hour window.",
    choices: [
      {
        id: "a",
        text: "Total 24-hour volume = 5,600 mL; administer at a steady continuous rate of 233 mL/hr across all 24 hours",
      },
      {
        id: "b",
        text: "Total 24-hour volume = 22,400 mL; infuse rapidly over 4 hours with 10% dextrose",
      },
      {
        id: "c",
        text: "Total 24-hour volume = 11,200 mL; administer 5,600 mL during the first 8 hours post-injury (at 800 mL/hr over the remaining 7 hours) and the remaining 5,600 mL over the subsequent 16 hours",
      },
      {
        id: "d",
        text: "Fluid resuscitation is contraindicated in burns to prevent pulmonary congestion",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The Parkland (Baxter) formula states: Total 24-hour fluid = 4 mL x weight (kg) x % TBSA burns. For this client: 4 mL x 70 kg x 40% = 11,200 mL of balanced crystalloid (Lactated Ringer's). Delivery schedule: 50% (5,600 mL) must be infused within the FIRST 8 HOURS FROM THE TIME OF INJURY, and the remaining 50% (5,600 mL) over the next 16 hours (350 mL/hr). Because 1 hour elapsed before arrival, the initial 5,600 mL must be infused over the remaining 7 hours: 5,600 mL / 7 hours = 800 mL/hr. The nurse titrates this rate to maintain adult urine output at 0.5–1.0 mL/kg/hr (30–50 mL/hr).",
    strategy: "Parkland resuscitation: 4 mL x kg x % TBSA. 50% given in first 8 hours FROM TIME OF BURN (adjust for delay). Target urine output 0.5-1.0 mL/kg/hr.",
    difficulty: "hard",
    tags: ["integumentary", "burns", "parkland-formula", "fluid-resuscitation", "fluid-electrolyte"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-008",
    categorySlug: "risk-reduction",
    stem: "A client rescued from an enclosed apartment fire presents with deep facial burns, singed eyebrows and nasal vibrissae, soot-stained carbonaceous sputum, hoarseness, and an inspiratory stridor. Arterial blood gas shows a normal PaO2. What is the nurse's immediate emergency action?",
    choices: [
      {
        id: "a",
        text: "Administer oral throat lozenges and place the client in a quiet room to sleep",
      },
      {
        id: "b",
        text: "Reassure the client that singed facial hair is harmless and administer cough syrup",
      },
      {
        id: "c",
        text: "Wait 24 hours to observe if respiratory stridor worsens before consulting the anaesthetist",
      },
      {
        id: "d",
        text: "Prepare immediately for endotracheal intubation before progressive laryngeal edema produces complete upper airway obstruction",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Physical findings of singed nasal hairs, facial burns, carbonaceous sputum, hoarseness, and STRIDOR are pathognomonic of acute thermal inhalation injury and impending upper airway compromise. Supraglottic thermal injury causes rapid, massive laryngeal and vocal cord edema that peaks within 12–24 hours. Once stridor appears, the airway lumen is critically narrowed; delayed intubation frequently becomes impossible due to anatomical distortion, necessitating emergency surgical cricothyroidotomy. Proactive, early endotracheal intubation is the definitive lifesaving priority.",
    strategy: "Inhalation injury: Facial burns + soot + hoarseness/stridor = impending complete airway closure. Secure airway with IMMEDIATE intubation.",
    difficulty: "easy",
    tags: ["integumentary", "burns", "inhalation-injury", "airway-management", "stridor"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-009",
    categorySlug: "med-surg",
    stem: "A client sustained a full-thickness, leathery, circumferential third-degree burn to the right forearm and hand. Four hours post-injury, the client reports severe, progressive, throbbing distal hand pain. The nurse notes that the right radial pulse is faint, capillary refill is 5 seconds, and passive extension of the fingers elicits excruciating pain. What complication is occurring, and what procedure is urgently required?",
    choices: [
      {
        id: "a",
        text: "Extremity compartment syndrome caused by unyielding, inelastic burn eschar and tissue edema; prepare immediately for urgent bedside escharotomy",
      },
      {
        id: "b",
        text: "Normal burn inflammation; elevate the limb above the head and administer an aspirin tablet",
      },
      {
        id: "c",
        text: "Diabetic peripheral neuropathy; obtain a random blood glucose test",
      },
      {
        id: "d",
        text: "Hyperventilation tetany; instruct the client to breathe into a paper bag",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Circumferential full-thickness burns produce an inelastic, rigid, leathery rind of dead tissue (eschar). As massive fluid resuscitation expands interstitial edema within the limb, intracompartmental pressures rise rapidly, exceeding capillary perfusion pressure (> 30 mmHg). This leads to compartment syndrome: progressive neurovascular compromise characterized by the '6 Ps' (pain out of proportion/pain on passive stretch, paresthesia, pallor, pulselessness, poikilothermia, paralysis). Emergency bedside escharotomy (linear surgical incisions through the burned eschar down to subcutaneous fat) is mandatory to release constriction and restore arterial flow.",
    strategy: "Circumferential burn danger: Faint pulse + pain on passive stretch = Compartment syndrome. Prepare for immediate emergency escharotomy.",
    difficulty: "medium",
    tags: ["integumentary", "burns", "escharotomy", "compartment-syndrome", "circumferential-burn"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-010",
    categorySlug: "safety-infection-control",
    stem: "A 54-year-old diabetic male presents with acute swelling, warmth, and erythema of the left lower leg. The client is tachycardic (pulse 128 beats/min), hypotensive (BP 86/50 mmHg), and reports excruciating, agony-level pain that is markedly out of proportion to the visible skin erythema. The nurse palpates subcutaneous crepitus (crackling gas) and notes small hemorrhagic bullae forming. What life-threatening infection must be suspected?",
    choices: [
      {
        id: "a",
        text: "Simple superficial erysipelas (manageable with oral paracetamol at home)",
      },
      {
        id: "b",
        text: "Necrotizing fasciitis (a surgical emergency requiring immediate broad-spectrum IV antibiotics and emergency surgical debridement)",
      },
      {
        id: "c",
        text: "Mild contact dermatitis from laundry detergent",
      },
      {
        id: "d",
        text: "Venous stasis pigmentation requiring compression stockings",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Necrotizing fasciitis is a fulminant, rapidly progressive bacterial infection of the deep subcutaneous tissue and fascia with a mortality rate exceeding 25–40%. Cardinal warning signs distinguishing necrotizing fasciitis from benign cellulitis are: (1) severe, exquisite pain markedly OUT OF PROPORTION to superficial clinical findings; (2) rapid progression across marked skin margins within hours; (3) palpable subcutaneous crepitus (gas production from anaerobic pathogens); (4) bullae, skin necrosis, or dishwater-gray fluid discharge; and (5) early hemodynamic instability (septic shock). Immediate surgical fasciotomy and aggressive debridement are vital.",
    strategy: "Necrotizing fasciitis: Pain out of proportion to skin signs + crepitus/bullae + shock = Surgical emergency. Immediate radical debridement.",
    difficulty: "medium",
    tags: ["integumentary", "skin-infections", "necrotizing-fasciitis", "septic-shock", "emergency-surgery"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-011",
    categorySlug: "pediatrics",
    stem: "A 5-year-old child presents to the paediatric clinic with perioral erythematous papules that have ruptured into thick, golden, honey-colored crusts around the nose and mouth. The child is diagnosed with non-bullous impetigo. What is the essential nursing education for the parent regarding infection transmission and potential systemic complications?",
    choices: [
      {
        id: "a",
        text: "Impetigo is a genetic condition that cannot be transmitted to siblings or classmates",
      },
      {
        id: "b",
        text: "Forcefully scrub the lesions with wire brushes to remove all scabs at once",
      },
      {
        id: "c",
        text: "Impetigo is highly contagious; practice strict hand hygiene, separate towels and linens, soak and gently remove crusts before applying topical mupirocin, and monitor for dark tea-colored urine (post-streptococcal glomerulonephritis)",
      },
      {
        id: "d",
        text: "Encourage the child to attend school and share pillows with other children",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Impetigo is a highly contagious superficial bacterial skin infection caused primarily by Staphylococcus aureus and Streptococcus pyogenes (Group A Strep). Lesions typically begin as fragile vesicles that rupture, releasing exudate that dries into characteristic 'honey-colored crusts'. Nursing care focuses on: (1) preventing transmission (contact precautions, hand hygiene, separate towels/bedding, keeping child home until 24 hours of antimicrobial therapy); (2) crust removal (soaking with warm soapy water before applying topical mupirocin 2%); and (3) monitoring for post-streptococcal glomerulonephritis (periorbital edema, gross hematuria/tea-colored urine, hypertension) 1–3 weeks post-infection.",
    strategy: "Impetigo management: Honey-colored crusts = highly contagious. Warm soak crusts + mupirocin ointment + monitor for tea-colored urine (PSGN).",
    difficulty: "easy",
    tags: ["integumentary", "pediatrics", "impetigo", "bacterial-infections", "psgn"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-012",
    categorySlug: "safety-infection-control",
    stem: "A mother and two children attend the community health center complaining of intense, intractable generalized itching that worsens severely at night. Physical examination reveals erythematous papules, excoriations, and linear burrows in the finger web spaces, wrists, axillary folds, and groin. The diagnosis is scabies (Sarcoptes scabiei). What instructions must the nurse provide to ensure eradication and prevent reinfection?",
    choices: [
      {
        id: "a",
        text: "Apply permethrin exclusively to the visible burrows on the wrists and wash off after 10 minutes",
      },
      {
        id: "b",
        text: "Treat only the family members who currently feel itchy; asymptomatic members require no treatment",
      },
      {
        id: "c",
        text: "Spray the children's entire bodies with commercial petroleum fly spray daily for one month",
      },
      {
        id: "d",
        text: "Apply 5% permethrin cream thoroughly from the neck down to the soles of the feet, leave on for 8 to 14 hours before washing off, treat all close household contacts simultaneously, and wash all bedding/clothing used in the past 3 days in hot water",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Scabies is an infestation caused by the microscopic mite Sarcoptes scabiei var. hominis. Mites burrow into the stratum corneum and deposit eggs/feces, triggering a delayed type IV hypersensitivity reaction characterized by severe nocturnal pruritus and pathognomonic linear burrows in interdigital web spaces, flexor wrists, axillae, umbilicus, and genitalia. Successful eradication mandates: (1) topical 5% permethrin cream applied from the jawline/neck down over the entire body (including under fingernails and between toes; in infants, the scalp and face are included) for 8–14 hours; (2) treating ALL household contacts simultaneously regardless of symptoms (incubation period is 4–6 weeks); and (3) hot-water laundering of linens.",
    strategy: "Scabies eradication: 5% permethrin from neck down overnight (8-14 h) + treat ALL household contacts simultaneously + wash bedding in hot water.",
    difficulty: "easy",
    tags: ["integumentary", "scabies", "infestations", "permethrin", "contact-prevention"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-013",
    categorySlug: "pediatrics",
    stem: "A 4-year-old child with severe atopic dermatitis (eczema) presents with erythematous, lichenified, excoriated plaques in the antecubital and popliteal fossae. The mother reports the child is irritable and scratches continuously until bleeding. What core barrier-repair strategy should the nurse teach the mother?",
    choices: [
      {
        id: "a",
        text: "Bathe the child daily in lukewarm water for 10 minutes without harsh soaps, pat gently dry leaving skin damp, and apply a thick, fragrance-free emollient (ointment or cream) within 3 minutes over the entire body (the 'soak and seal' method)",
      },
      {
        id: "b",
        text: "Give hot soapy baths three times daily and scrub the skin vigorously with a dry loofah sponge",
      },
      {
        id: "c",
        text: "Avoid all moisturizers and keep the skin as dry and dehydrated as possible to prevent infection",
      },
      {
        id: "d",
        text: "Apply undiluted household bleach directly to the child's raw skin creases twice daily",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Atopic dermatitis is characterized by epidermal skin barrier dysfunction (filaggrin deficiency), transepidermal water loss, and immune dysregulation ('the itch that rashes'). The cornerstone of maintenance therapy is the 'soak and seal' technique: (1) short lukewarm baths (not hot water, which strips natural lipids); (2) mild soap-free cleansers; (3) patting skin lightly so it remains slightly damp; and (4) liberal application of lipid-rich, fragrance-free emollients (ointments like petrolatum or thick creams) within 3 minutes of stepping out of the water to lock in hydration. Topical corticosteroids are reserved for acute inflammatory flares.",
    strategy: "Eczema barrier repair: Soak and seal -> Lukewarm bath + pat damp + apply thick ointment/cream within 3 minutes. Avoid hot water and fragrances.",
    difficulty: "easy",
    tags: ["integumentary", "pediatrics", "atopic-dermatitis", "eczema", "skin-barrier"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-014",
    categorySlug: "med-surg",
    stem: "A 36-year-old client presents with well-demarcated, erythematous plaques covered by thick, adherent, silvery-white micaceous scales symmetrically distributed over both elbows, knees, and presacral area. When the nurse gently lifts a scale during examination, pinpoint capillary bleeding is observed. What are this lesion type and this clinical sign?",
    choices: [
      {
        id: "a",
        text: "Tinea corporis exhibiting the Darier sign",
      },
      {
        id: "b",
        text: "Plaque psoriasis exhibiting the Auspitz sign",
      },
      {
        id: "c",
        text: "Malignant melanoma exhibiting the Breslow phenomenon",
      },
      {
        id: "d",
        text: "Lichen planus exhibiting Wickham striae",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Plaque psoriasis (psoriasis vulgaris) is a chronic immune-mediated inflammatory dermatosis driven by T-lymphocytes and cytokines (IL-17, IL-23, TNF-alpha), resulting in hyperproliferation of epidermal keratinocytes (epidermal turnover accelerates from 28 days to 3–4 days). The hallmark lesions are sharply demarcated erythematous plaques covered with silvery, micaceous scales on extensor surfaces. The Auspitz sign is the appearance of punctate capillary bleeding spots when scales are scraped off, caused by thinned suprapapillary epidermal plates over dilated, tortuous dermal capillaries. Lesions developing at sites of skin trauma demonstrate the Koebner phenomenon.",
    strategy: "Psoriasis hallmarks: Silvery-white scales on extensor surfaces + pinpoint bleeding when scraped (Auspitz sign) + new lesions at trauma sites (Koebner).",
    difficulty: "medium",
    tags: ["integumentary", "psoriasis", "auspitz-sign", "autoimmune-skin", "dermatology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-015",
    categorySlug: "pharmacology-parenteral",
    stem: "A client who started cotrimoxazole (trimethoprim-sulfamethoxazole) 10 days ago presents with high fever, sore throat, severe conjunctival injection, painful oral ulcerations, and a widespread dusky purpuric maculopapular rash. When the nurse applies gentle lateral friction to the client's skin, the epidermal sheet slides off easily (positive Nikolsky sign), leaving raw, denuded dermis over 25% TBSA. What condition does the nurse recognize, and what is the immediate intervention?",
    choices: [
      {
        id: "a",
        text: "Mild drug exanthem; advise the client to double the cotrimoxazole dose to eradicate the infection",
      },
      {
        id: "b",
        text: "Heat rash (miliaria); prescribe a cold beverage and discharge home",
      },
      {
        id: "c",
        text: "Toxic Epidermal Necrolysis / Stevens-Johnson Syndrome (TEN/SJS overlap); discontinue the offending sulfonamide immediately and transfer to an intensive care burn unit for aggressive supportive fluid and wound care",
      },
      {
        id: "d",
        text: "Normal adverse effect that resolves spontaneously while continuing the antibiotic",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Stevens-Johnson Syndrome (SJS) and Toxic Epidermal Necrolysis (TEN) are life-threatening Severe Cutaneous Adverse Reactions (SCAR) characterized by widespread epidermal apoptosis and detachment triggered primarily by medications (sulfonamides, antiepileptics like carbamazepine/phenytoin, allopurinol, nevirapine). SJS involves < 10% TBSA epidermal detachment; SJS/TEN overlap involves 10–30% TBSA; TEN involves > 30% TBSA. Mucosal involvement (lips, oral cavity, eyes, genitalia) is present in > 90% of cases. A positive Nikolsky sign (sloughing of epidermis with light tangential shear) reflects epidermal-dermal cleavage. Immediate cessation of the causative drug and transfer to a specialized burn unit are vital.",
    strategy: "SJS / TEN: Sulfonamide trigger + mucosal erosion + positive Nikolsky sign (epidermal sloughing). STOP DRUG IMMEDIATELY and treat like severe burns in ICU.",
    difficulty: "hard",
    tags: ["integumentary", "sjs-ten", "nikolsky-sign", "drug-reactions", "burn-icu"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-016",
    categorySlug: "health-promotion",
    stem: "During a skin screening assessment, a dark-skinned Ghanaian farmer asks the nurse to evaluate an irregular, dark-brown to black, enlarging macule with jagged borders beneath the nail bed of his right great toe (subungual) and on the plantar surface of his foot. Which type of skin malignancy is most prevalent in individuals with deeply pigmented skin, and what mnemonic guides early detection?",
    choices: [
      {
        id: "a",
        text: "Superficial spreading melanoma caused strictly by sunburns on the facial forehead",
      },
      {
        id: "b",
        text: "Benign lentigo that never requires histological examination or biopsy",
      },
      {
        id: "c",
        text: "Basal cell carcinoma of the sun-exposed cheek",
      },
      {
        id: "d",
        text: "Acral lentiginous melanoma (the predominant melanoma in Black and dark-skinned populations, occurring on non-sun-exposed palms, soles, and subungual nail beds); evaluated using the ABCDE criteria",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "While overall melanoma incidence is lower in dark-skinned individuals due to the photoprotective effect of eumelanin against UV radiation, when melanoma does occur in African, Black, and Asian populations, it is disproportionately Acral Lentiginous Melanoma (ALM), accounting for 50–70% of all melanomas in these populations. Unlike other melanomas, ALM is NOT related to UV radiation/sun exposure and characteristically develops on glabrous skin: palms, soles, and subungual nail beds (Hutchinson's sign). The ABCDE mnemonic (Asymmetry, Border irregularity, Color variegation, Diameter > 6 mm, Evolution/change) guides identification, and suspicious lesions mandate urgent excisional biopsy.",
    strategy: "Melanoma in dark skin: Acral lentiginous melanoma (palms, soles, nail beds) is NOT sun-related and is the most common subtype in Black populations. Use ABCDE.",
    difficulty: "medium",
    tags: ["integumentary", "melanoma", "acral-lentiginous", "dark-skin", "abcde-criteria"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-017",
    categorySlug: "pediatrics",
    stem: "A full-term 2-day-old neonate displays a generalized, benign rash consisting of small, firm, white-to-yellow papules and pustules on an erythematous base (resembling 'flea bites') distributed over the trunk, chest, and arms, with sparing of the palms and soles. The infant is feeding vigorously, afebrile, and active. A smear of pustular content reveals abundant eosinophils. What is the diagnosis and correct nursing management?",
    choices: [
      {
        id: "a",
        text: "Erythema toxicum neonatorum; reassure the parents that this is a completely benign, self-limiting physiological newborn eruption that requires no pharmacological treatment and will resolve within 1 to 2 weeks",
      },
      {
        id: "b",
        text: "Congenital syphilis; initiate immediate intravenous penicillin G and isolate the infant",
      },
      {
        id: "c",
        text: "Staphylococcal scalded skin syndrome; prepare for immediate surgical skin grafting",
      },
      {
        id: "d",
        text: "Herpes simplex encephalitis; perform an emergency lumbar puncture immediately",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Erythema toxicum neonatorum is the most common benign cutaneous eruption in healthy full-term neonates (affecting 30–70% of newborns), typically appearing on days 1–4 of life. It presents with erythematous macules, papules, and sterile pustules with a classic 'flea-bitten' appearance over the trunk and proximal extremities, sparing palms and soles. Wright or Giemsa staining of pustular fluid reveals eosinophils (distinguishing it from bacterial or candidal pustules with neutrophils). It is self-limiting, causes no systemic symptoms, and resolves spontaneously within 7–14 days without treatment. Parental reassurance is the only indicated intervention.",
    strategy: "Newborn rashes: Flea-bitten pustules on healthy term neonate + eosinophils on smear = Erythema toxicum neonatorum. Benign, self-limiting -> Reassure parents.",
    difficulty: "easy",
    tags: ["integumentary", "pediatrics", "erythema-toxicum-neonatorum", "newborn-assessment", "neonatal-skin"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-018",
    categorySlug: "fundamentals",
    stem: "An 84-year-old frail female sustained a skin tear over her anterior forearm during transfer from bed to chair. The epidermal flap is peeled back but remains viable, and the wound edges can be re-approximated to cover the exposed dermis (Type 1 skin tear). How should the nurse manage this wound to facilitate healing and prevent further trauma?",
    choices: [
      {
        id: "a",
        text: "Surgically excise and discard the viable skin flap using scissors and scrub with alcohol",
      },
      {
        id: "b",
        text: "Cleanse gently with sterile normal saline, carefully roll back and re-approximate the epidermal flap without stretching, secure with a silicone-based non-adherent dressing or tubular retention bandage, and avoid aggressive adhesive paper tape directly on frail skin",
      },
      {
        id: "c",
        text: "Apply high-adhesion zinc oxide tape directly over the raw dermis and tear it off rapidly every 4 hours",
      },
      {
        id: "d",
        text: "Leave the wound completely uncovered and open to the air without any dressing",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "In older adults, epidermal thinning, flattening of the dermal-epidermal junction (rete ridges), loss of dermal collagen, and microvascular atrophy make the skin exceptionally fragile, predisposing to skin tears from minor shear or friction. According to the International Skin Tear Advisory Panel (ISTAP): for a Type 1 skin tear (where the flap can cover the entire wound bed), the nurse must: (1) gently irrigate with normal saline; (2) gently re-approximate the viable epidermal flap using a moist sterile swab or gloved finger; (3) secure with a non-adherent dressing (silicone foam or mesh); and (4) NEVER apply adhesive tape directly to the fragile peri-wound skin.",
    strategy: "Skin tear management: Cleanse gently -> Roll back/re-approximate viable flap -> Cover with non-adherent silicone dressing. NO adhesive tape on frail skin.",
    difficulty: "easy",
    tags: ["integumentary", "gerontology", "skin-tears", "wound-care", "istap-guidelines"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-019",
    categorySlug: "pharmacology-parenteral",
    stem: "A client is prescribed a potent topical corticosteroid cream (clobetasol propionate 0.05%) for a flare of severe localized eczema on the back. What principle of topical steroid administration and dosing (Fingertip Unit) must the nurse teach the client to prevent local and systemic adverse effects?",
    choices: [
      {
        id: "a",
        text: "Apply an entire 60 g tube like thick cake icing over the entire body three times daily",
      },
      {
        id: "b",
        text: "Topical steroids have zero side effects and can be used on the eyelids continuously for years",
      },
      {
        id: "c",
        text: "One Fingertip Unit (FTU, approximately 0.5 g squeezed from the distal interphalangeal crease to fingertip) covers an area equal to two adult flat handprints; use the minimum amount necessary, apply once or twice daily, and avoid potent steroids on the face, groin, and axillae",
      },
      {
        id: "d",
        text: "Clobetasol should only be taken orally with black coffee",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The Fingertip Unit (FTU) is the standardized metric for topical dermatological medications: 1 FTU is the amount of ointment/cream expressed from a standard 5 mm nozzle tube from the distal skin crease to the tip of an adult index finger (~0.5 g). One FTU adequately covers a surface area equivalent to TWO adult handprints (with fingers joined). Potent and super-potent topical corticosteroids (like clobetasol) carry serious risks of local adverse effects (epidermal atrophy, telangiectasia, striae, hypopigmentation, secondary infection) and systemic absorption (HPA axis suppression, Cushing syndrome). They are strictly avoided on high-absorption, thin-skinned areas such as the face, neck, groin, and axillae.",
    strategy: "Topical steroid dosing: 1 FTU = 0.5 g = 2 adult handprints. Use sparingly, short-term. Avoid potent steroids on face, groin, and axillae (atrophy risk).",
    difficulty: "medium",
    tags: ["integumentary", "pharmacology", "topical-corticosteroids", "fingertip-unit", "skin-atrophy"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-INTEG-020",
    categorySlug: "fundamentals",
    stem: "A client has a heavily draining Stage 3 sacral pressure ulcer with copious serosanguinous exudate that is saturating multiple dressing pads within 2 hours. Which dressing category is best suited to absorb this heavy exudate, support moist wound healing, and protect periwound skin from maceration?",
    choices: [
      {
        id: "a",
        text: "Thin semi-permeable film dressing (e.g., Tegaderm)",
      },
      {
        id: "b",
        text: "Dry non-absorbent sterile plastic wrap",
      },
      {
        id: "c",
        text: "Dry single-ply cotton gauze that is allowed to dry and stick to the bed",
      },
      {
        id: "d",
        text: "Calcium alginate or hydrofiber rope/pad dressings covered by an absorbent secondary foam dressing",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Dressing selection must match wound exudate levels according to the moisture balance principle. Calcium alginates (derived from seaweed) and hydrofiber dressings are highly absorbent, capable of absorbing 15–20 times their weight in exudate. When contacting wound fluid, sodium ions in exudate exchange with calcium ions in the alginate, forming a hydrophilic non-adherent gel that traps bacteria, maintains moisture balance, and prevents periwound maceration. In contrast, thin film dressings have zero absorption capacity and would trap fluid causing massive maceration. Dry gauze adheres to the wound and traumatizes new capillary buds upon removal.",
    strategy: "Dressing selection: Heavy exudate = Calcium alginate or Hydrofiber + Foam. Dry/necrotic wound = Hydrogel. Minimal drainage = Thin film / Hydrocolloid.",
    difficulty: "easy",
    tags: ["integumentary", "wound-dressings", "calcium-alginate", "moisture-balance", "exudate-absorption"],
    isFree: true,
  },
];
