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
        text: "Assess the anterior forearm in ordinary room light, since this site is least exposed to the sun and gives the truest reading of the underlying haemoglobin",
      },
      {
        id: "c",
        text: "Look for bright pink flushing over the abdomen, because the increased cutaneous blood flow of sepsis is most visible where the skin is thinnest",
      },
      {
        id: "d",
        text: "Record that cyanosis and pallor cannot be assessed at all in this skin tone, and rely on the arterial blood gas and serum lactate to detect hypoperfusion",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "In darkly pigmented skin, high epidermal melanin concentrations mask the subtle cutaneous color changes seen in lighter skin. Pallor presents not as obvious whiteness, but as a dull, ashen-grey color in dark skin or a yellowish-brown tinge in olive/brown skin. Cyanosis in dark-skinned individuals is best detected by inspecting areas of least pigmentation and rich capillary vascularity: the conjunctivae, buccal mucosa, hard palate, tongue, lips, and palmar surfaces of hands and soles of feet. Additionally, the nurse must palpate the skin for localized warmth, edema, and induration rather than relying solely on erythema. Why the other options fail: option b is how blood pressure and rashes are often checked, but the forearm carries the same melanin as the face and gives no better signal. Option c looks for flushing rather than for the ashen or blue change the question asks about, and flushing in sepsis is inconsistent. Option d is the belief the item exists to correct: central and mucosal surfaces are assessable in every skin tone, and relying on the gas misses the hours before lactate rises.",
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
        text: "Papule: A raised, fluid-filled lesion more than 1 cm across, sitting deep in the subcutaneous fat and collapsing when pressure is applied",
      },
      {
        id: "b",
        text: "Macule: A flat, non-palpable, circumscribed area of skin color change measuring less than 1 cm in diameter without elevation or depression",
      },
      {
        id: "c",
        text: "Bulla: A solid, raised, firm lesion formed from dense fibrous scar tissue that persists after the original injury has healed over",
      },
      {
        id: "d",
        text: "Wheal: A permanent cavity that extends through the dermis into the underlying muscle, leaving a depressed scar once it closes",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Primary skin lesion taxonomy is fundamental to clinical dermatology: (1) A macule is a flat, non-palpable change in skin color < 1 cm (e.g., freckle, petechia); if > 1 cm, it is a patch. (2) A papule is an elevated, palpable, solid mass < 1 cm (e.g., mole, wart); if > 1 cm, it is a plaque. (3) A vesicle is an elevated cavity filled with clear serous fluid <= 0.5–1 cm (e.g., herpes simplex); if > 1 cm, it is a bulla (blister). (4) A wheal is a transient, raised, edematous, erythematous area with irregular borders caused by dermal fluid extravasation (e.g., urticaria/hives). Why the other options fail: option a attaches a fluid-filled cavity and a deep location to a papule, which is solid and superficial, and a fluid-filled lesion over 1 cm is a bulla rather than a papule. Option c describes a scar or a nodule, not a blister; a bulla is defined by being fluid-filled and larger than 1 cm. Option d describes an ulcer reaching muscle, whereas a wheal is a transient oedematous swelling of the dermis that resolves without scarring.",
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
        text: "Leave the slough undisturbed so that the wound is not traumatised, and cover the ulcer with a dry dressing changed once weekly to keep the wound bed warm and reduce disturbance",
      },
      {
        id: "b",
        text: "Cleanse the ulcer with hydrogen peroxide and leave it open to the air between dressing changes, so that the exudate can dry and the adherent slough lifts away on its own",
      },
      {
        id: "c",
        text: "Debride the non-viable slough and manage the heavy exudate with an absorbent dressing, keeping the bed moist while protecting the surrounding skin from maceration",
      },
      {
        id: "d",
        text: "Apply a hydrocolloid sheet and review at seven days, since an occlusive dressing softens slough and absorbs exudate without any need for active debridement",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The TIME framework optimizes the chronic wound microenvironment: (1) Tissue non-viable: Slough and necrotic eschar promote bacterial biofilm and must be debrided (autolytic, enzymatic, sharp, or mechanical); (2) Infection/Inflammation: Control bacterial burden and biofilm; (3) Moisture imbalance: Chronic wounds heal fastest in a physiological moist (not wet, not dry) environment; excessive exudate macerates surrounding skin and contains destructive metalloproteinases, requiring absorbent dressings (calcium alginates, hydrofibers, foam); and (4) Edge advancement: Epidermal cells require a healthy granulating matrix to migrate across wound margins. Why the other options fail: option a addresses neither letter of the framework: slough left in place harbours biofilm, and a dry weekly dressing violates moisture balance in a heavily exuding wound. Option b dries the bed out to loosen slough, which is the opposite of moist wound healing, and hydrogen peroxide is cytotoxic to the fibroblasts trying to close the wound. Option d is the nearest miss: hydrocolloid does soften slough autolytically, but it cannot cope with heavy exudate and will leak and macerate the peri-wound skin.",
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
        text: "Reposition every 2 hours with a 30-degree lateral tilt, use a pressure-redistributing mattress, float the heels on pillows, and keep the skin dry and barrier-protected",
      },
      {
        id: "b",
        text: "Reposition every four hours and massage the reddened prominences with a moisturising cream at each turn, since massage restores capillary blood flow to ischaemic tissue",
      },
      {
        id: "c",
        text: "Nurse the client in the high Fowler position at 90 degrees and place a ring cushion under the sacrum, so that pressure is distributed around rather than over the bony point",
      },
      {
        id: "d",
        text: "Reposition every two hours but keep the head of the bed elevated at 60 degrees for comfort, and use a donut cushion to lift the sacrum clear of the mattress",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "A Braden score <= 12 signifies high risk for pressure injury development (scores range from 6 to 23; lower scores mean higher risk). Evidence-based prevention mandates: (1) frequent repositioning (at least every 2 hours in bed, every 1 hour in a chair); (2) using a 30-degree lateral tilted position (avoids direct vertical pressure on the trochanter and sacrum); (3) floating heels off the mattress using pillows under calves; (4) pressure-redistribution support surfaces; (5) moisture barriers for incontinence; and (6) avoiding elevation of the head of the bed > 30 degrees (reduces shear forces). Vigorously massaging bony prominences causes deep tissue capillary damage. Why the other options fail: option b doubles the interval and adds massage over an area that may already be ischaemic, which damages the deep capillary bed rather than restoring flow. Option c raises the head to 90 degrees, which converts pressure into shearing force through the sacrum, and a ring cushion concentrates pressure on the rim. Option d gets the interval right and then does both of the things that cause harm: sustained 60-degree elevation and a donut cushion.",
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
        text: "Total 24-hour volume = 5,600 mL; infuse half in the first 8 hours and the remainder over 16 hours, targeting a urine output of 30 to 50 mL per hour",
      },
      {
        id: "b",
        text: "Total 24-hour volume = 22,400 mL; give the whole volume in the first 8 hours, because capillary leak is greatest immediately after the burn",
      },
      {
        id: "c",
        text: "Total 11,200 mL; give 5,600 mL in the first 8 hours from injury, at 800 mL/hr over the remaining 7 hours, then 5,600 mL over 16 hours",
      },
      {
        id: "d",
        text: "Total 24-hour volume = 11,200 mL; infuse at 700 mL per hour evenly across the first 16 hours, since the first 8 hours have already elapsed",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The Parkland (Baxter) formula states: Total 24-hour fluid = 4 mL x weight (kg) x % TBSA burns. For this client: 4 mL x 70 kg x 40% = 11,200 mL of balanced crystalloid (Lactated Ringer's). Delivery schedule: 50% (5,600 mL) must be infused within the FIRST 8 HOURS FROM THE TIME OF INJURY, and the remaining 50% (5,600 mL) over the next 16 hours (350 mL/hr). Because 1 hour elapsed before arrival, the initial 5,600 mL must be infused over the remaining 7 hours: 5,600 mL / 7 hours = 800 mL/hr. The nurse titrates this rate to maintain adult urine output at 0.5–1.0 mL/kg/hr (30–50 mL/hr). Why the other options fail: option a halves the formula, which delivers about half the resuscitation volume an adult with 40 per cent burns needs and will leave the client oliguric. Option b doubles the coefficient and then front-loads everything into the first 8 hours, which is the fastest route to pulmonary oedema. Option d gets the total right, which makes it the hardest distractor, but spreads it evenly and so abandons the 50 per cent rule and the eight-hour clock that starts at the time of injury, not arrival.",
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
        text: "Give humidified oxygen by face mask and admit for observation, since a normal PaO2 shows the airway is not yet compromised",
      },
      {
        id: "b",
        text: "Reassure the family that singed nasal hair is a cosmetic finding, and treat the hoarseness with voice rest and warm fluids",
      },
      {
        id: "c",
        text: "Recheck the arterial blood gas in 4 hours and call the anaesthetist if the stridor has worsened by then, to avoid an unnecessary tube",
      },
      {
        id: "d",
        text: "Prepare immediately for endotracheal intubation before progressive laryngeal edema produces complete upper airway obstruction",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Physical findings of singed nasal hairs, facial burns, carbonaceous sputum, hoarseness, and STRIDOR are pathognomonic of acute thermal inhalation injury and impending upper airway compromise. Supraglottic thermal injury causes rapid, massive laryngeal and vocal cord edema that peaks within 12–24 hours. Once stridor appears, the airway lumen is critically narrowed; delayed intubation frequently becomes impossible due to anatomical distortion, necessitating emergency surgical cricothyroidotomy. Proactive, early endotracheal intubation is the definitive lifesaving priority. Why the other options fail: option a rests on the normal PaO2, which is the trap in the stem: oxygenation is preserved until the airway closes, so a normal gas does not exclude an impending obstruction. Option b treats two of the four warning signs as trivial. Option c is the classic delay: stridor means the lumen is already critically narrowed, and by the time it worsens the swelling can make intubation impossible, leaving cricothyroidotomy as the only route.",
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
        text: "Normal post-burn inflammation; elevate the limb above the level of the heart and give aspirin for the throbbing pain",
      },
      {
        id: "c",
        text: "Deep vein thrombosis of the forearm; start low molecular weight heparin and apply a warm compress along the tender cord",
      },
      {
        id: "d",
        text: "Nerve injury from the burn itself; document the sensory loss and reassess the hand at the next dressing round",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Circumferential full-thickness burns produce an inelastic, rigid, leathery rind of dead tissue (eschar). As massive fluid resuscitation expands interstitial edema within the limb, intracompartmental pressures rise rapidly, exceeding capillary perfusion pressure (> 30 mmHg). This leads to compartment syndrome: progressive neurovascular compromise characterized by the '6 Ps' (pain out of proportion/pain on passive stretch, paresthesia, pallor, pulselessness, poikilothermia, paralysis). Emergency bedside escharotomy (linear surgical incisions through the burned eschar down to subcutaneous fat) is mandatory to release constriction and restore arterial flow. Why the other options fail: option b interprets pain on passive stretch and a 5-second capillary refill as expected inflammation, and aspirin is irrelevant to a pressure problem that needs the eschar released. Option c is a plausible vascular cause of a faint pulse, but a thrombus does not produce excruciating pain on passive finger extension, and heparin would waste the window. Option d explains the sensory finding and ignores the vascular ones, and reassigning it to the next round delays a limb-threatening procedure.",
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
        text: "Erysipelas, which can be managed at home with oral paracetamol and flucloxacillin, since the erythema is well demarcated",
      },
      {
        id: "b",
        text: "Necrotizing fasciitis (a surgical emergency requiring immediate broad-spectrum IV antibiotics and emergency surgical debridement)",
      },
      {
        id: "c",
        text: "Contact dermatitis from a laundry detergent; stop the product and apply a topical corticosteroid to the affected leg",
      },
      {
        id: "d",
        text: "Venous stasis pigmentation with a superimposed ulcer; apply compression bandaging and refer to the leg ulcer clinic",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Necrotizing fasciitis is a fulminant, rapidly progressive bacterial infection of the deep subcutaneous tissue and fascia with a mortality rate exceeding 25–40%. Cardinal warning signs distinguishing necrotizing fasciitis from benign cellulitis are: (1) severe, exquisite pain markedly OUT OF PROPORTION to superficial clinical findings; (2) rapid progression across marked skin margins within hours; (3) palpable subcutaneous crepitus (gas production from anaerobic pathogens); (4) bullae, skin necrosis, or dishwater-gray fluid discharge; and (5) early hemodynamic instability (septic shock). Immediate surgical fasciotomy and aggressive debridement are vital. Why the other options fail: option a names the right family of infection and the wrong depth: erysipelas is superficial, does not produce crepitus or bullae, and does not cause shock, so oral treatment at home would be fatal. Option c fits the erythema and none of the rest, and a steroid would suppress the only defence the tissue has. Option d is a chronic picture that develops over months, not an acute presentation with tachycardia, hypotension and gas in the tissues.",
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
        text: "Impetigo spreads only by direct contact with the crusts, so the child can attend school provided the lesions are covered with a light bandage",
      },
      {
        id: "b",
        text: "Scrub the crusts off with a loofah at each bath so the ointment reaches the skin, and keep the child home until every lesion has healed",
      },
      {
        id: "c",
        text: "Highly contagious: strict hand hygiene, separate towels, soak and remove crusts before mupirocin, and watch for tea-coloured urine (post-streptococcal GN)",
      },
      {
        id: "d",
        text: "Impetigo is a self-limiting viral rash; keep the skin dry, avoid antibiotics, and return only if the child develops a fever or the rash spreads",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Impetigo is a highly contagious superficial bacterial skin infection caused primarily by Staphylococcus aureus and Streptococcus pyogenes (Group A Strep). Lesions typically begin as fragile vesicles that rupture, releasing exudate that dries into characteristic 'honey-colored crusts'. Nursing care focuses on: (1) preventing transmission (contact precautions, hand hygiene, separate towels/bedding, keeping child home until 24 hours of antimicrobial therapy); (2) crust removal (soaking with warm soapy water before applying topical mupirocin 2%); and (3) monitoring for post-streptococcal glomerulonephritis (periorbital edema, gross hematuria/tea-colored urine, hypertension) 1–3 weeks post-infection. Why the other options fail: option b has the right instinct about crusts and the wrong method, since scrubbing spreads the exudate and breaks the skin further. Option d misclassifies a bacterial infection as viral and withholds the treatment that shortens it. Option a is the most tempting, because exclusion from school is genuinely no longer required after 24 hours of treatment, but the option drops the household measures and the renal follow-up that the question is asking for.",
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
        text: "Apply permethrin only to the visible burrows on the wrists and wash it off after ten minutes, since the mite is confined to the burrow itself",
      },
      {
        id: "b",
        text: "Treat only the household members who are currently itchy, because those without symptoms are not infested and do not need any treatment",
      },
      {
        id: "c",
        text: "Apply 5% permethrin from the neck down overnight, but delay treating the household contacts until the index child is symptom-free",
      },
      {
        id: "d",
        text: "Apply 5% permethrin from the neck down overnight for 8 to 14 hours, treat all household contacts at the same time, and hot-wash bedding used in the past 3 days",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Scabies is an infestation caused by the microscopic mite Sarcoptes scabiei var. hominis. Mites burrow into the stratum corneum and deposit eggs/feces, triggering a delayed type IV hypersensitivity reaction characterized by severe nocturnal pruritus and pathognomonic linear burrows in interdigital web spaces, flexor wrists, axillae, umbilicus, and genitalia. Successful eradication mandates: (1) topical 5% permethrin cream applied from the jawline/neck down over the entire body (including under fingernails and between toes; in infants, the scalp and face are included) for 8–14 hours; (2) treating ALL household contacts simultaneously regardless of symptoms (incubation period is 4–6 weeks); and (3) hot-water laundering of linens. Why the other options fail: option a treats only what can be seen, but mites are present in clinically normal skin between burrows, and ten minutes is far short of the 8 to 14 hours needed for the cream to work. Option b ignores the four to six week incubation period, during which a contact is infectious without itching. Option c is the best of the three and still wrong on the one point that drives reinfestation: simultaneous treatment, because a delay simply re-infests the treated child.",
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
        text: "Bathe in lukewarm water for 10 minutes, pat damp, and apply a thick fragrance-free emollient within 3 minutes (the 'soak and seal' method)",
      },
      {
        id: "b",
        text: "Bathe the child three times daily in hot soapy water and scrub the skin with a dry loofah, so that the scale is removed before the emollient is applied",
      },
      {
        id: "c",
        text: "Keep the skin as dry as possible and avoid all moisturisers, because emollients trap bacteria in the lichenified plaques and worsen the eczema",
      },
      {
        id: "d",
        text: "Give a daily dilute bleach bath and leave the skin to air dry completely before applying any topical corticosteroid to the raw creases",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Atopic dermatitis is characterized by epidermal skin barrier dysfunction (filaggrin deficiency), transepidermal water loss, and immune dysregulation ('the itch that rashes'). The cornerstone of maintenance therapy is the 'soak and seal' technique: (1) short lukewarm baths (not hot water, which strips natural lipids); (2) mild soap-free cleansers; (3) patting skin lightly so it remains slightly damp; and (4) liberal application of lipid-rich, fragrance-free emollients (ointments like petrolatum or thick creams) within 3 minutes of stepping out of the water to lock in hydration. Topical corticosteroids are reserved for acute inflammatory flares. Why the other options fail: option b uses heat and friction, both of which strip the lipid barrier and drive the itch-scratch cycle the plan exists to break. Option c inverts the treatment: emollients are the maintenance therapy, not a cause of infection. Option d borrows a real adjunct, dilute bleach bathing, and then air-dries the skin and jumps to a steroid, which skips the emollient that replaces the missing barrier.",
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
        text: "A morbilliform drug exanthem; stop the cotrimoxazole, give an oral antihistamine, and review in the outpatient clinic in one week",
      },
      {
        id: "b",
        text: "Staphylococcal scalded skin syndrome; start intravenous flucloxacillin and keep the skin moist with paraffin gauze until it re-epithelialises",
      },
      {
        id: "c",
        text: "TEN/SJS overlap; stop the sulfonamide immediately and transfer to a burns intensive care unit for fluid and wound management",
      },
      {
        id: "d",
        text: "Erythema multiforme major; continue the antibiotic, give systemic corticosteroids, and reassess the mucosal lesions daily on the ward",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Stevens-Johnson Syndrome (SJS) and Toxic Epidermal Necrolysis (TEN) are life-threatening Severe Cutaneous Adverse Reactions (SCAR) characterized by widespread epidermal apoptosis and detachment triggered primarily by medications (sulfonamides, antiepileptics like carbamazepine/phenytoin, allopurinol, nevirapine). SJS involves < 10% TBSA epidermal detachment; SJS/TEN overlap involves 10–30% TBSA; TEN involves > 30% TBSA. Mucosal involvement (lips, oral cavity, eyes, genitalia) is present in > 90% of cases. A positive Nikolsky sign (sloughing of epidermis with light tangential shear) reflects epidermal-dermal cleavage. Immediate cessation of the causative drug and transfer to a specialized burn unit are vital. Why the other options fail: option a describes the common benign drug rash and misses mucosal erosion and a positive Nikolsky sign, either of which rules it out, and a week's outpatient review is far too slow. Option b is a real blistering disease but it is caused by staphylococcal toxin in young children, splits at the granular layer, and does not follow a sulfonamide. Option d keeps the culprit drug running, which is the single most dangerous thing to do in TEN.",
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
        text: "Superficial spreading melanoma; the commonest subtype in all populations, arising on sun-exposed skin and evaluated with the ABCDE criteria",
      },
      {
        id: "b",
        text: "Benign subungual lentigo; a harmless pigment band that needs no biopsy and can be reviewed yearly with clinical photography",
      },
      {
        id: "c",
        text: "Basal cell carcinoma; a slow-growing, pearly, sun-related tumour of the face that rarely metastasises and is treated by excision",
      },
      {
        id: "d",
        text: "Acral lentiginous melanoma, the commonest subtype in Black populations, arising on palms, soles and nail beds; assessed with ABCDE",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "While overall melanoma incidence is lower in dark-skinned individuals due to the photoprotective effect of eumelanin against UV radiation, when melanoma does occur in African, Black, and Asian populations, it is disproportionately Acral Lentiginous Melanoma (ALM), accounting for 50–70% of all melanomas in these populations. Unlike other melanomas, ALM is NOT related to UV radiation/sun exposure and characteristically develops on glabrous skin: palms, soles, and subungual nail beds (Hutchinson's sign). The ABCDE mnemonic (Asymmetry, Border irregularity, Color variegation, Diameter > 6 mm, Evolution/change) guides identification, and suspicious lesions mandate urgent excisional biopsy. Why the other options fail: option a is the commonest melanoma overall and the wrong answer for this population, and it is described as sun-related, which the acral form is not. Option b reassures on a lesion with irregular borders that is enlarging, which is the description that mandates biopsy. Option c is a pigmented facial tumour, not a subungual or plantar one, and it does not fit an enlarging irregular macule on the sole.",
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
        text: "Erythema toxicum neonatorum; a benign, self-limiting newborn eruption that needs no treatment and resolves within 1 to 2 weeks",
      },
      {
        id: "b",
        text: "Congenital syphilis; start intravenous benzylpenicillin, screen the mother, and isolate the infant from other babies on the postnatal ward",
      },
      {
        id: "c",
        text: "Staphylococcal scalded skin syndrome; obtain blood cultures, start intravenous flucloxacillin, and prepare the infant for skin grafting",
      },
      {
        id: "d",
        text: "Neonatal herpes simplex infection; perform a lumbar puncture and start high-dose intravenous aciclovir on the neonatal unit",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Erythema toxicum neonatorum is the most common benign cutaneous eruption in healthy full-term neonates (affecting 30–70% of newborns), typically appearing on days 1–4 of life. It presents with erythematous macules, papules, and sterile pustules with a classic 'flea-bitten' appearance over the trunk and proximal extremities, sparing palms and soles. Wright or Giemsa staining of pustular fluid reveals eosinophils (distinguishing it from bacterial or candidal pustules with neutrophils). It is self-limiting, causes no systemic symptoms, and resolves spontaneously within 7–14 days without treatment. Parental reassurance is the only indicated intervention. Why the other options fail: option b is the invasive infection to consider in a sick neonate, but this infant is feeding, afebrile and active, and syphilis does not produce eosinophil-filled pustules. Option c causes widespread tender erythema and epidermal peeling rather than scattered flea-bitten pustules on an erythematous base. Option d is the correct response to a genuinely unwell baby with vesicles, and none of the features that define herpes, such as grouped vesicles, are present.",
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
        text: "Trim the flap away with scissors and clean the exposed dermis with alcohol, since a raised flap traps bacteria and delays epithelial migration",
      },
      {
        id: "b",
        text: "Cleanse with normal saline, re-approximate the flap without stretching, and secure it with a silicone non-adherent dressing or retention bandage",
      },
      {
        id: "c",
        text: "Apply a high-adhesion zinc oxide tape directly over the raw dermis and change it every four hours, so that the wound is kept clean and visible",
      },
      {
        id: "d",
        text: "Leave the wound uncovered and open to the air, so that a firm scab can form over the denuded dermis and protect it from further shearing",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "In older adults, epidermal thinning, flattening of the dermal-epidermal junction (rete ridges), loss of dermal collagen, and microvascular atrophy make the skin exceptionally fragile, predisposing to skin tears from minor shear or friction. According to the International Skin Tear Advisory Panel (ISTAP): for a Type 1 skin tear (where the flap can cover the entire wound bed), the nurse must: (1) gently irrigate with normal saline; (2) gently re-approximate the viable epidermal flap using a moist sterile swab or gloved finger; (3) secure with a non-adherent dressing (silicone foam or mesh); and (4) NEVER apply adhesive tape directly to the fragile peri-wound skin. Why the other options fail: option a discards viable tissue that acts as a natural biological dressing and applies alcohol to a raw dermis, which is painful and cytotoxic. Option c uses the adhesive the guidance explicitly warns against, on the same fragile peri-wound skin that tore to begin with, and changes it four-hourly. Option d leaves the denuded dermis to dry and scab, which is slower and more painful, and gives no protection against the next shear.",
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
        text: "Apply the entire 60 g tube like thick cake icing twice daily, so that the eczema is fully suppressed before the tube runs out rather than under-treated",
      },
      {
        id: "b",
        text: "Potent topical steroids are safe on any site for any duration, so apply clobetasol to the eyelids and face twice daily and continue it indefinitely",
      },
      {
        id: "c",
        text: "1 FTU (about 0.5 g from the finger crease to tip) covers two adult handprints; use the least amount needed and avoid potent steroids on face, groin and axillae",
      },
      {
        id: "d",
        text: "Apply a fingertip unit measuring about 5 g to the back only, since the unit is calculated for the trunk and larger areas need proportionally more",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The Fingertip Unit (FTU) is the standardized metric for topical dermatological medications: 1 FTU is the amount of ointment/cream expressed from a standard 5 mm nozzle tube from the distal skin crease to the tip of an adult index finger (~0.5 g). One FTU adequately covers a surface area equivalent to TWO adult handprints (with fingers joined). Potent and super-potent topical corticosteroids (like clobetasol) carry serious risks of local adverse effects (epidermal atrophy, telangiectasia, striae, hypopigmentation, secondary infection) and systemic absorption (HPA axis suppression, Cushing syndrome). They are strictly avoided on high-absorption, thin-skinned areas such as the face, neck, groin, and axillae. Why the other options fail: option a wastes the tube and increases systemic absorption without improving the flare, and a whole-body application of a super-potent steroid is a route to adrenal suppression. Option b states the opposite of the guidance: thin sites absorb far more per unit area, so the face, groin and axillae are exactly where atrophy and striae appear first. Option d inflates the unit tenfold, which turns a measure of 0.5 g into 5 g per application.",
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
        text: "A thin semi-permeable film dressing, which seals bacteria out and lets exudate evaporate through the membrane between changes",
      },
      {
        id: "b",
        text: "Dry single-ply cotton gauze, changed whenever it becomes saturated, because cotton wicks exudate away from the bed",
      },
      {
        id: "c",
        text: "A hydrocolloid sheet changed every three days, since it forms a gel that absorbs exudate and protects the wound",
      },
      {
        id: "d",
        text: "Calcium alginate or hydrofiber rope/pad dressings covered by an absorbent secondary foam dressing",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Dressing selection must match wound exudate levels according to the moisture balance principle. Calcium alginates (derived from seaweed) and hydrofiber dressings are highly absorbent, capable of absorbing 15–20 times their weight in exudate. When contacting wound fluid, sodium ions in exudate exchange with calcium ions in the alginate, forming a hydrophilic non-adherent gel that traps bacteria, maintains moisture balance, and prevents periwound maceration. In contrast, thin film dressings have zero absorption capacity and would trap fluid causing massive maceration. Dry gauze adheres to the wound and traumatizes new capillary buds upon removal. Why the other options fail: option a is the dressing for a wound with no exudate at all; a film has no absorption capacity, so fluid pools beneath it and macerates the skin it was meant to protect. Option b looks absorbent and is not: gauze holds little, dries out, and adheres to a granulating bed, so every change strips new tissue. Option c is right for moderate exudate and overwhelmed by copious drainage, and a three-day interval with pads saturating in two hours guarantees leakage.",
    strategy: "Dressing selection: Heavy exudate = Calcium alginate or Hydrofiber + Foam. Dry/necrotic wound = Hydrogel. Minimal drainage = Thin film / Hydrocolloid.",
    difficulty: "easy",
    tags: ["integumentary", "wound-dressings", "calcium-alginate", "moisture-balance", "exudate-absorption"],
    isFree: true,
  },
];
