import { AuthoredQuestion } from "./authored-bank";

/**
 * 20 Original NCLEX-style clinical scenario practice questions
 * meticulously authored for Infection Control & Prevention course modules:
 * - Module 01: Microbiology & Chain of Infection (NG-MOD-IPC-001 - 002)
 * - Module 02: Standard Precautions & Hand Hygiene (NG-MOD-IPC-003 - 004)
 * - Module 03: Transmission-Based Precautions & Isolation Nursing (NG-MOD-IPC-005 - 008)
 * - Module 04: Asepsis, Decontamination & Sterilisation (NG-MOD-IPC-009 - 010)
 * - Module 05: Preventing Device & Procedure-Related Infections (NG-MOD-IPC-011 - 014)
 * - Module 06: Occupational Health, Sharps & Waste Management (NG-MOD-IPC-015 - 016)
 * - Module 07: Specimens, Stewardship, Surveillance & Outbreaks (NG-MOD-IPC-017 - 020)
 */
export const IPC_MODULE_SCENARIOS: AuthoredQuestion[] = [
  // ---------------------------------------------------------------------------
  // MODULE 01: Microbiology & Chain of Infection
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-IPC-001",
    categorySlug: "safety-infection-control",
    stem: "A nurse is caring for a client with acute gastroenteritis secondary to confirmed Clostridioides difficile. In applying the principles of the chain of infection, which action by the nurse most effectively breaks the mode of transmission?",
    choices: [
      { id: "a", text: "Rub the hands with 70% alcohol gel for fifteen seconds after removing gloves" },
      { id: "b", text: "Wash with soap and warm running water, lathering for at least twenty seconds" },
      { id: "c", text: "Wear a fit-tested N95 respirator whenever entering the client's room" },
      { id: "d", text: "Give the client in the next bed prophylactic oral vancomycin" },
    ],
    correctChoiceId: "b",
    rationale: "Clostridioides difficile produces durable bacterial endospores that are physiologically resistant to alcohol-based hand rubs. The physical mechanical friction of lathering with soap and rinsing under warm running water for at least 20 seconds is necessary to physically remove spores from the skin. C. diff is transmitted via the fecal-oral contact route; airborne respirators (N95) are unnecessary. Giving prophylactic antibiotics to roommates alters normal gut flora and actually increases susceptibility to infection. Why the other options fail: option a uses an alcohol rub, which does not kill C. difficile spores. Option c protects against airborne tuberculosis, not faecal-oral transmission. Option d gives an antibiotic to a well roommate, which disturbs normal flora and increases risk.",
    strategy: "Recall the gold standard for spore-forming organisms: C. diff spores survive alcohol. Handwashing with soap and running water is mandatory to break the chain of transmission.",
    difficulty: "easy",
    tags: ["infection-control", "c-diff", "hand-hygiene", "chain-of-infection", "safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-IPC-002",
    categorySlug: "safety-infection-control",
    stem: "A nurse reviews the medical records of four assigned clients. Which client is at the highest risk for developing a severe, life-threatening opportunistic fungal infection (such as systemic candidiasis or invasive aspergillosis)?",
    choices: [
      { id: "a", text: "A client recovering well from an elective laparoscopic cholecystectomy" },
      { id: "b", text: "A client with acute myeloid leukaemia whose neutrophil count is 180 per microlitre" },
      { id: "c", text: "A client with mild iron deficiency anaemia awaiting a course of oral iron" },
      { id: "d", text: "A client with osteoarthritis managed with occasional oral paracetamol" },
    ],
    correctChoiceId: "b",
    rationale: "Opportunistic pathogens are benign microorganisms that normally do not cause disease in healthy individuals but produce severe, invasive infections when host immune defenses are profoundly compromised. Severe prolonged neutropenia (ANC < 500/mcL, and particularly < 200/mcL) eliminates the primary line of phagocytic defense against opportunistic fungi (Candida and Aspergillus) and bacteria. The client with leukemia and an ANC of 180/mcL is severely immunocompromised and at extreme risk. Why the other options fail: option a is a short elective operation with normal immune defences. Option c is a mild anaemia that does not impair phagocytosis. Option d is a stable chronic condition on a simple analgesic.",
    strategy: "Analyze host susceptibility: ANC < 500 = Severe neutropenia → extreme vulnerability to opportunistic fungal and bacterial sepsis.",
    difficulty: "easy",
    tags: ["infection-control", "opportunistic-infection", "neutropenia", "immunocompromised"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 02: Standard Precautions & Hand Hygiene
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-IPC-003",
    categorySlug: "safety-infection-control",
    stem: "According to the World Health Organization (WHO) 'Five Moments for Hand Hygiene,' at which specific clinical juncture must the nurse perform hand hygiene immediately to prevent introducing pathogens into a sterile body site?",
    choices: [
      { id: "a", text: "Immediately before an aseptic procedure such as accessing a central line" },
      { id: "b", text: "Only after touching the bedside table, the bed rails or the locker" },
      { id: "c", text: "Only after removing disposable examination gloves at the end of the shift" },
      { id: "d", text: "Immediately after writing in the electronic health record outside the room" },
    ],
    correctChoiceId: "a",
    rationale: "The WHO 'Five Moments for Hand Hygiene' are: (1) before touching a patient, (2) BEFORE clean/aseptic procedures, (3) after body fluid exposure risk, (4) after touching a patient, and (5) after touching patient surroundings. Moment 2 (before clean/aseptic procedures) is critical to protect the client against colonization or infection by microbial flora from healthcare workers or the environment. Hand hygiene must be executed immediately before donning sterile gloves or accessing invasive lines. Why the other options fail: options b, c and d describe moments after contact with the patient or the surroundings, which protect the nurse and the next patient. Only the moment before an aseptic procedure protects the patient's sterile site.",
    strategy: "Identify the moment that protects the patient's internal sterile sites: Hand hygiene BEFORE an aseptic procedure prevents healthcare-associated bloodstream or urinary infections.",
    difficulty: "easy",
    tags: ["infection-control", "hand-hygiene", "who-moments", "asepsis"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-IPC-004",
    categorySlug: "safety-infection-control",
    stem: "A nurse completes morning care for a client in contact and droplet isolation and prepares to exit the room. In which sequence should the nurse remove (doff) personal protective equipment (PPE) to minimize the risk of self-contamination?",
    choices: [
      { id: "a", text: "Gloves, then goggles or face shield, then gown, then mask, then hand hygiene" },
      { id: "b", text: "Mask, then gown, then gloves, then goggles, then perform hand hygiene" },
      { id: "c", text: "Gown, then mask, then gloves, then goggles, then perform hand hygiene" },
      { id: "d", text: "Goggles, then mask, then gown, then gloves, then perform hand hygiene" },
    ],
    correctChoiceId: "a",
    rationale: "According to CDC guidelines, the correct sequence for removing (doffing) PPE from most contaminated to least contaminated is: (1) Gloves (most heavily contaminated), (2) Goggles or face shield, (3) Gown (unfastening ties, peeling down and away from the body without touching the front), (4) Mask or respirator (handling only by ear loops/ties, touching neither the front nor the face), followed immediately by (5) thorough hand hygiene. Removing the mask first is dangerous because it exposes the respiratory tract while contaminated gloves are still on. Why the other options fail: options b, c and d all remove the mask before the gloves or the gown, so the respiratory tract is exposed while the most contaminated items are still being handled.",
    strategy: "Remember the CDC doffing rule: Gloves are most contaminated and come off FIRST. Mask comes off LAST (at or outside doorway). Finish with hand hygiene.",
    difficulty: "medium",
    tags: ["infection-control", "ppe", "doffing-sequence", "safety"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 03: Transmission-Based Precautions & Isolation Nursing
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-IPC-005",
    categorySlug: "safety-infection-control",
    stem: "A client is admitted to the medical unit with suspected active pulmonary tuberculosis (fever, night sweats, hemoptysis, and cavitary apical lung lesions). Which set of infection control measures must the nurse implement immediately?",
    choices: [
      { id: "a", text: "A negative-pressure airborne room, with staff in fit-tested N95 respirators" },
      { id: "b", text: "A positive-pressure room, with staff in standard surgical paper masks" },
      { id: "c", text: "Contact precautions in a shared room with the beds three feet apart" },
      { id: "d", text: "Standard precautions with droplet isolation for the first twelve hours" },
    ],
    correctChoiceId: "a",
    rationale: "Mycobacterium tuberculosis is transmitted via microscopic airborne droplet nuclei (5 micrometres or less) that remain suspended in the air for prolonged periods. Clients with active or suspected pulmonary TB require Airborne Precautions: placement in an Airborne Infection Isolation Room (AIIR) with negative air pressure (6 to 12 air exchanges per hour) and air exhausted directly outdoors or HEPA-filtered, and all healthcare workers must wear a fit-tested N95 or higher particulate respirator. If client transport is unavoidable, the client must wear a standard surgical mask. Why the other options fail: option b reverses the pressure and offers a mask that does not filter droplet nuclei. Option c treats an airborne disease by contact and allows a shared room. Option d delays airborne precautions and uses the wrong precaution altogether.",
    strategy: "Connect TB with Airborne Precautions: Negative-pressure room (AIIR) + Fit-tested N95 respirator mask for staff.",
    difficulty: "easy",
    tags: ["infection-control", "tuberculosis", "airborne-precautions", "n95", "isolation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-IPC-006",
    categorySlug: "safety-infection-control",
    stem: "An adolescent is admitted with high fever, severe photophobia, nuchal rigidity, and petechial purpura. Neisseria meningitidis (meningococcal meningitis) is suspected. Which transmission-based precaution must the nurse institute, and what is the rule regarding healthcare personnel protection?",
    choices: [
      { id: "a", text: "Contact precautions, with gloves and a plastic apron for dressing changes only" },
      { id: "b", text: "Droplet precautions, with a surgical mask within three to six feet until 24 hours of treatment" },
      { id: "c", text: "Airborne precautions, in a negative-pressure room for three weeks" },
      { id: "d", text: "Standard precautions alone, because bacterial meningitis is not spread by droplets" },
    ],
    correctChoiceId: "b",
    rationale: "Neisseria meningitidis is spread via large respiratory droplets generated by coughing, sneezing, or close conversation. The client requires Droplet Precautions (private room; surgical mask worn by healthcare workers upon entering the room or within 3 to 6 feet). Droplet precautions must be strictly maintained until the client has completed 24 hours of appropriate intravenous antimicrobial therapy (such as ceftriaxone), which eliminates nasopharyngeal carriage. Close contacts also require antibiotic chemoprophylaxis. Why the other options fail: option a treats a droplet disease by contact and leaves the face unprotected. Option c over-isolates for weeks, when twenty-four hours of treatment ends carriage. Option d denies droplet spread, which is exactly how meningococcus moves.",
    strategy: "Identify Droplet Precaution diseases: Meningococcal meningitis, Pertussis, Influenza. Action: Surgical mask within 3-6 feet; maintain for 24 hours of effective antibiotics.",
    difficulty: "medium",
    tags: ["infection-control", "meningitis", "droplet-precautions", "pediatrics"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-IPC-007",
    categorySlug: "safety-infection-control",
    stem: "A nurse is caring for a client colonized with Methicillin-Resistant Staphylococcus aureus (MRSA) in an open sacral wound. When assigning medical equipment and planning room entry, which nursing action is compliant with infection control standards?",
    choices: [
      { id: "a", text: "Dedicate a blood pressure cuff, stethoscope and thermometer to stay in the room" },
      { id: "b", text: "Share the electronic monitor between this client and others without cleaning it" },
      { id: "c", text: "Prop the room door open at all times so that the air can circulate" },
      { id: "d", text: "Wear an N95 respirator and a sterile gown whenever entering the room" },
    ],
    correctChoiceId: "a",
    rationale: "Clients colonized or infected with multi-drug resistant organisms (MDROs) like MRSA or VRE require Contact Precautions: gloves and a gown donned upon entering the room, and dedicated, client-specific non-critical equipment (stethoscope, blood pressure cuff, thermometer) that remains in the room until discharge. Sharing non-critical equipment between rooms without hospital-grade disinfection is a primary driver of horizontal cross-transmission of MDROs across hospital wards. Why the other options fail: option b shares contaminated equipment between rooms, which is the main route of cross-transmission. Option c opens the room and defeats containment. Option d uses airborne protection that MRSA does not require, while omitting gloves and gown.",
    strategy: "Contact Precautions equipment rule: Dedicate equipment (BP cuff/stethoscope) to the room, or disinfect thoroughly between clients with approved hospital wipes.",
    difficulty: "easy",
    tags: ["infection-control", "mrsa", "contact-precautions", "dedicated-equipment"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-IPC-008",
    categorySlug: "safety-infection-control",
    stem: "A regional hospital establishes an isolation treatment unit for a suspected case of Viral Hemorrhagic Fever (Ebola virus disease). Which personal protective equipment (PPE) protocol must the designated nursing team follow?",
    choices: [
      { id: "a", text: "A standard surgical mask and a single pair of non-sterile latex gloves" },
      { id: "b", text: "Impermeable coverall, double gloves, PAPR or N95 with face shield, and a trained observer" },
      { id: "c", text: "An open-backed cloth isolation gown and a pair of protective reading glasses" },
      { id: "d", text: "A cotton laboratory coat, sterile gloves and washable cloth shoe covers" },
    ],
    correctChoiceId: "b",
    rationale: "Ebola and Marburg virus diseases are transmitted through direct contact with blood, secretions, organs, or other bodily fluids of infected persons. The CDC and WHO mandate enhanced barrier PPE: an impermeable full-body coverall or gown, double gloving with the inner glove under the sleeve, a powered air-purifying respirator (PAPR) or N95 respirator with a full-face shield, waterproof boot covers, and an apron if vomiting/diarrhea is present. A trained observer must actively monitor every step of the donning and doffing checklist to prevent accidental self-contamination. Why the other options fail: option a leaves the skin, eyes and mouth exposed to body fluids. Option c uses a permeable gown and ordinary glasses, neither of which is fluid-resistant. Option d uses a cloth coat that soaks through and offers no eye protection.",
    strategy: "Viral Hemorrhagic Fever PPE: Complete skin coverage, impermeable coverall, double gloves, respirator/face shield, and a TRAINED OBSERVER overseeing doffing.",
    difficulty: "medium",
    tags: ["infection-control", "ebola", "vhf", "enhanced-ppe", "safety"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 04: Asepsis, Decontamination & Sterilisation
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-IPC-009",
    categorySlug: "fundamentals",
    stem: "A nurse is setting up a sterile field on an overbed table prior to performing an extensive complex wound irrigation and dressing change. Which observation represents a breach of surgical asepsis that requires immediately discarding the supplies and restarting?",
    choices: [
      { id: "a", text: "The nurse touches the one-inch outer margin of the sterile drape with bare hands" },
      { id: "b", text: "Saline soaks through the drape to the unsterile tabletop beneath" },
      { id: "c", text: "The sterile field is kept continuously above the level of the waist" },
      { id: "d", text: "The nurse faces the field throughout and never turns her back on it" },
    ],
    correctChoiceId: "b",
    rationale: "When a sterile surface becomes wet and moisture penetrates completely through to an unsterile underlying surface (known as 'strike-through' or capillary action), microorganisms are wicked upward from the unsterile table into the sterile supplies, rendering the field contaminated. The entire field must be discarded and replaced. The 1-inch (2.5 cm) outer border of a sterile drape is considered non-sterile and may be handled. Maintaining items above waist level and facing the field are correct aseptic techniques. Why the other options fail: option a handles only the one-inch border, which is deliberately non-sterile. Option c keeps the field above the waist correctly. Option d describes correct aseptic positioning, not a breach.",
    strategy: "Identify the cause of contamination: Strike-through (liquid soaking through a sterile barrier) wicks bacteria and destroys sterility immediately.",
    difficulty: "easy",
    tags: ["infection-control", "sterile-field", "asepsis", "strike-through", "fundamentals"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-IPC-010",
    categorySlug: "safety-infection-control",
    stem: "According to the Spaulding classification system for reprocessing medical equipment, how should the nurse classify a surgical scalpel or bone chisel that enters sterile vascular tissue, and what level of processing is mandatory?",
    choices: [
      { id: "a", text: "Critical, requiring full sterilisation such as steam autoclaving" },
      { id: "b", text: "Semi-critical, requiring high-level disinfection with glutaraldehyde" },
      { id: "c", text: "Non-critical, requiring low-level disinfection with alcohol wipes" },
      { id: "d", text: "An environmental surface, requiring routine soap and water cleaning" },
    ],
    correctChoiceId: "a",
    rationale: "Under Earl Spaulding's criteria: (1) Critical items enter sterile tissue, body cavities, or the vascular system (e.g., surgical scalpels, needles, implants, cardiac catheters) and carry a high risk of infection; they MUST undergo complete sterilization to kill all vegetative bacteria, fungi, viruses, and bacterial spores. (2) Semi-critical items touch mucous membranes or non-intact skin (e.g., gastrointestinal endoscopes, respiratory therapy equipment) and require high-level disinfection. (3) Non-critical items contact only intact skin (e.g., BP cuffs, crutches) and require low-level disinfection. Why the other options fail: option b is the class for endoscopes and respiratory equipment that touch mucous membrane. Option c is the class for intact skin, such as a blood pressure cuff. Option d is cleaning only, with no disinfection.",
    strategy: "Review Spaulding classification: Enters sterile tissue/bloodstream = Critical → Sterilization (autoclave). Touches mucous membranes = Semi-critical → High-level disinfection.",
    difficulty: "medium",
    tags: ["infection-control", "spaulding-classification", "sterilization", "decontamination"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 05: Preventing Device & Procedure-Related Infections (HAIs)
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-IPC-011",
    categorySlug: "safety-infection-control",
    stem: "A nurse assists a physician with the bedside insertion of a triple-lumen central venous catheter (CVC) in the internal jugular vein. Which nursing action is a mandatory component of the central line-associated bloodstream infection (CLABSI) prevention bundle?",
    choices: [
      { id: "a", text: "Chlorhexidine with alcohol applied with friction and allowed to dry fully" },
      { id: "b", text: "A small fenestrated drape that covers only the immediate puncture site" },
      { id: "c", text: "Using the femoral vein as the first choice of site in every adult" },
      { id: "d", text: "Giving prophylactic intravenous vancomycin through the new line at once" },
    ],
    correctChoiceId: "a",
    rationale: "The evidence-based CLABSI insertion bundle includes: (1) maximal sterile barrier precautions (cap, mask, sterile gown, sterile gloves, and a full-body sterile drape covering the client from head to toe), (2) skin antisepsis with > 0.5% chlorhexidine gluconate with 70% alcohol applied with friction and allowed to air dry completely (the antimicrobial effect occurs as it dries), (3) avoiding the femoral site in adults (femoral lines have the highest infection and thrombosis rates; subclavian is preferred), and (4) daily review of line necessity. Prophylactic antibiotics are not recommended. Why the other options fail: option b leaves most of the body exposed, when a full-body drape is required. Option c chooses the femoral site, which carries the highest infection and thrombosis risk. Option d gives an antibiotic that the bundle does not recommend.",
    strategy: "Recall the CLABSI bundle: Chlorhexidine prep allowed to AIR DRY completely + Maximal full-body sterile drape + Avoid femoral vein.",
    difficulty: "medium",
    tags: ["infection-control", "clabsi", "central-line", "care-bundle", "safety"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-IPC-012",
    categorySlug: "safety-infection-control",
    stem: "A client who underwent abdominal surgery has an indwelling Foley urinary catheter in place. Which nursing intervention is essential to prevent a catheter-associated urinary tract infection (CAUTI)?",
    choices: [
      { id: "a", text: "Hang the drainage bag on the side rail above the level of the mattress" },
      { id: "b", text: "Keep the bag below the bladder and never let the spout touch the container" },
      { id: "c", text: "Cleanse the meatus three times a day with povidone-iodine ointment" },
      { id: "d", text: "Disconnect the catheter every shift to irrigate it with normal saline" },
    ],
    correctChoiceId: "b",
    rationale: "To prevent CAUTI, the drainage bag must be maintained below the level of the bladder at all times to facilitate gravity drainage and prevent retrograde reflux of contaminated urine back into the bladder. The drainage bag must never be placed on the floor or hung on moving bed rails (which can rise above bladder level). The drainage system must remain closed; breaking the connection for routine irrigation introduces bacteria. Daily routine meatal hygiene with mild soap and water is recommended; antiseptic ointments (iodine) irritate mucosal tissue and increase infection risk. Why the other options fail: option a raises the bag and allows urine to reflux into the bladder. Option c applies an antiseptic that irritates the mucosa without reducing infection. Option d breaks the closed system every shift and introduces organisms.",
    strategy: "CAUTI prevention rules: Closed system + Drainage bag BELOW bladder level + Soap and water hygiene (no iodine ointments) + Remove catheter ASAP.",
    difficulty: "easy",
    tags: ["infection-control", "cauti", "catheter-care", "safety", "care-bundle"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-IPC-013",
    categorySlug: "safety-infection-control",
    stem: "A nurse cares for a client who is mechanically ventilated in the intensive care unit. Which multimodal nursing interventions form the core of the ventilator-associated pneumonia (VAP) prevention bundle?",
    choices: [
      { id: "a", text: "Keep the head of the bed flat and instil saline before every suction" },
      { id: "b", text: "Elevate the head 30 to 45 degrees, interrupt sedation daily and give oral care" },
      { id: "c", text: "Change the ventilator breathing circuit tubing every twelve hours" },
      { id: "d", text: "Keep the client deeply paralysed so that coughing cannot occur" },
    ],
    correctChoiceId: "b",
    rationale: "The VAP prevention bundle consists of evidence-based interventions: (1) elevation of the head of the bed to 30–45 degrees (prevents gastroesophageal reflux and aspiration of gastric contents), (2) daily 'sedation vacation' and assessment of readiness to extubate, (3) peptic ulcer disease and deep vein thrombosis prophylaxis, and (4) regular oral hygiene with chlorhexidine oral rinse (reduces oral bacterial colonization). Routine circuit changes and instillation of saline into the endotracheal tube are outdated, hazardous practices that increase pneumonia rates. Why the other options fail: option a promotes aspiration and instils fluid that carries bacteria down the tube. Option c changes circuits unnecessarily, which increases risk. Option d abolishes the cough that clears secretions and prolongs ventilation.",
    strategy: "Remember the VAP bundle: HOB elevated 30-45 degrees + Daily sedation vacation + Chlorhexidine oral care + Subglottic suctioning.",
    difficulty: "medium",
    tags: ["infection-control", "vap", "critical-care", "ventilator", "care-bundle"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-IPC-014",
    categorySlug: "med-surg",
    stem: "A nurse is preparing a client for an open inguinal hernia repair. In accordance with surgical site infection (SSI) prevention guidelines, which preoperative hair removal and antibiotic administration practices are indicated?",
    choices: [
      { id: "a", text: "Shave the site with a razor the night before and start oral antibiotics three days before" },
      { id: "b", text: "Clip only if hair interferes, just before surgery, and give the antibiotic within 60 minutes" },
      { id: "c", text: "Apply a chemical depilatory cream to the abdomen twelve hours before surgery" },
      { id: "d", text: "Give the prophylactic antibiotic as a bolus after the dressing is applied" },
    ],
    correctChoiceId: "b",
    rationale: "Using manual razors causes microscopic skin nicks and abrasions that rapidly become colonized with bacteria, multiplying SSI rates. If hair removal is necessary, it must be performed immediately prior to surgery using electric surgical clippers with single-use heads outside the operating room. To ensure therapeutic tissue levels at the time of skin incision, preoperative prophylactic intravenous antibiotics (such as cefazolin) must be administered within 60 minutes prior to surgical incision (120 minutes for vancomycin or fluoroquinolones). Why the other options fail: option a uses a razor, which creates micro-abrasions, and gives antibiotics far too early. Option c applies a chemical that irritates the skin. Option d gives the antibiotic after the incision, when tissue levels are needed before it.",
    strategy: "Recall the two pillars of preoperative SSI prevention: Clippers only (NO razors!) + Prophylactic IV antibiotics within 60 minutes before surgical incision.",
    difficulty: "easy",
    tags: ["infection-control", "ssi", "perioperative", "antibiotic-timing", "hair-removal"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 06: Occupational Health, Sharps & Waste Management
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-IPC-015",
    categorySlug: "safety-infection-control",
    stem: "While administering a subcutaneous insulin injection, a nurse sustains an accidental deep needlestick injury from a contaminated needle used on a client who is known to be HIV-positive with a high viral load. What is the nurse's immediate sequence of actions?",
    choices: [
      { id: "a", text: "Squeeze the wound hard to express blood, then soak it in concentrated bleach" },
      { id: "b", text: "Wash with soap and water, report, and start post-exposure prophylaxis within two hours" },
      { id: "c", text: "Wait forty-eight hours and watch for a seroconversion illness before seeking care" },
      { id: "d", text: "Bandage the finger tightly and finish the shift before reporting the injury" },
    ],
    correctChoiceId: "b",
    rationale: "Following an occupational bloodborne pathogen exposure (needlestick), the immediate first step is washing the wound thoroughly with warm water and soap; do NOT squeeze, suck, or apply caustic chemical agents (like bleach or alcohol), which damage tissues and increase viral penetration. The nurse must report the injury immediately to a supervisor/occupational health. Post-Exposure Prophylaxis (PEP) for HIV is most effective when initiated as soon as possible—ideally within 2 hours and no later than 72 hours post-exposure—and continued for 28 days. Why the other options fail: option a squeezes and applies a caustic, both of which damage tissue and may increase transmission. Option c delays prophylaxis past the point of maximum benefit. Option d delays reporting and leaves the exposure undocumented.",
    strategy: "Needlestick protocol: Wash with soap and water immediately (NO squeezing/bleach!) → Report → Start HIV PEP within 2 hours.",
    difficulty: "medium",
    tags: ["infection-control", "needlestick", "hiv-pep", "occupational-health", "safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-IPC-016",
    categorySlug: "safety-infection-control",
    stem: "A nurse is disposing of clinical waste on a surgical ward. Which item is correctly matched with its appropriate disposal container according to healthcare waste segregation standards?",
    choices: [
      { id: "a", text: "Used syringes with needles, into a rigid sharps box filled no more than three-quarters full" },
      { id: "b", text: "Gauze soaked with purulent exudate, into a clear household waste bin" },
      { id: "c", text: "Clean cardboard cartons from intravenous fluid, into a red biohazard bin" },
      { id: "d", text: "Empty saline bags with no blood contact, into a yellow sharps container" },
    ],
    correctChoiceId: "a",
    rationale: "All sharps (needles, scalpels, lancets, broken glass ampoules) must be discarded directly into rigid, puncture-resistant, tamper-evident sharps containers labeled with the biohazard symbol, and containers must be sealed and replaced when they reach the fill line (typically 3/4 full) to prevent overflow injuries. Needles must NEVER be recapped, bent, or clipped by hand. Infectious soft waste (blood/pus soaked gauze) goes into yellow/red biohazard bags. Clean non-infectious cardboard goes into general municipal recycling (black bins). Why the other options fail: option b puts infectious soft waste into household refuse. Option c treats clean cardboard as infectious waste. Option d puts non-sharp, non-infectious plastic into a sharps bin.",
    strategy: "Waste segregation rules: Sharps in rigid sharps box filled to 3/4 maximum; Blood/infectious waste in yellow/red biohazard; Clean packaging in black general waste.",
    difficulty: "easy",
    tags: ["infection-control", "waste-segregation", "sharps-safety", "biohazard"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 07: Specimens, Stewardship, Surveillance & Outbreaks
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-IPC-017",
    categorySlug: "safety-infection-control",
    stem: "A client with suspected bacterial endocarditis has blood cultures prescribed. Which clinical technique must the nurse adhere to when obtaining the blood culture specimens to prevent contamination with skin commensals?",
    choices: [
      { id: "a", text: "Draw both bottles through a peripheral cannula that has been in place for three days" },
      { id: "b", text: "Use chlorhexidine or iodine, let it dry, and take two sets from two separate sites" },
      { id: "c", text: "Touch the prepared site with an ungloved finger just before inserting the needle" },
      { id: "d", text: "Collect one millilitre of blood into a single aerobic bottle only" },
    ],
    correctChoiceId: "b",
    rationale: "To avoid false-positive blood cultures from normal skin flora (e.g., Coagulase-negative Staphylococci), the nurse must cleanse the skin with an appropriate antiseptic (chlorhexidine gluconate or 1–2% tincture of iodine) and allow it to dry completely (for at least 30–60 seconds). Once the skin is prepped, it must NEVER be touched again. Standard practice requires drawing two distinct sets (each set consisting of one aerobic and one anaerobic bottle containing 8–10 mL of blood each) from two separate venepuncture sites prior to antibiotic initiation. Drawing from existing IV lines yields unacceptably high contamination rates. Why the other options fail: option a draws through an old cannula, which is a common source of skin-flora contamination. Option c re-palpates a prepared site and contaminates it. Option d takes one bottle of one millilitre, which is far too little to detect bacteraemia.",
    strategy: "Blood culture golden rules: Cleanse skin and let dry completely (never re-palpate); Draw 2 sets from 2 distinct venipunctures; Draw BEFORE starting antibiotics.",
    difficulty: "medium",
    tags: ["infection-control", "blood-cultures", "specimen-collection", "asepsis"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-IPC-018",
    categorySlug: "safety-infection-control",
    stem: "A nurse provides instructions to a client who needs to provide sputum specimens for acid-fast bacilli (AFB) smear and molecular testing (GeneXpert) for suspected tuberculosis. Which instruction ensures an adequate diagnostic specimen?",
    choices: [
      { id: "a", text: "Collect the specimen late at night immediately after the evening meal" },
      { id: "b", text: "Rinse with plain water, breathe deeply, then cough from the lungs into the pot" },
      { id: "c", text: "Spit saliva from the front of the mouth into the container until it is half full" },
      { id: "d", text: "Swish with an alcohol-based mouthwash immediately before coughing" },
    ],
    correctChoiceId: "b",
    rationale: "Diagnostic sputum for tuberculosis must be coughed from deep within the pulmonary bronchial tree, rather than superficial postnasal secretions or saliva. Sputum is best collected early in the morning upon awakening, because secretions pool in the airways overnight. Rinsing the mouth with plain water removes food particles and oral debris without killing mycobacteria; antiseptic mouthwashes must be avoided as they can kill or inhibit mycobacteria and invalidate culture results. Typically, three consecutive morning sputum specimens are collected. Why the other options fail: option a collects after a meal, when secretions are diluted by swallowing. Option c collects saliva, which is not a lower-airway specimen. Option d uses a mouthwash that can kill the mycobacteria and invalidate the culture.",
    strategy: "Sputum collection instructions: Early morning + Rinse with PLAIN water (no mouthwash) + Deep cough from lungs (sputum, not saliva).",
    difficulty: "easy",
    tags: ["infection-control", "tuberculosis", "sputum-collection", "genexpert", "patient-education"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-IPC-019",
    categorySlug: "pharmacology-parenteral",
    stem: "A nurse on an antimicrobial stewardship committee reviews an order for a hospitalized client. Blood cultures drawn 48 hours ago for urosepsis grew Escherichia coli sensitive to oral ciprofloxacin, cefuroxime, and ampicillin. The client has been afebrile for 24 hours with a normal white blood cell count. Which physician order represents appropriate antibiotic stewardship?",
    choices: [
      { id: "a", text: "De-escalate from IV meropenem to targeted oral ciprofloxacin" },
      { id: "b", text: "Add intravenous vancomycin for double gram-negative cover" },
      { id: "c", text: "Continue the meropenem for a further twenty-one days" },
      { id: "d", text: "Stop all antibiotics now, without completing a treatment course" },
    ],
    correctChoiceId: "a",
    rationale: "Antimicrobial stewardship programs aim to optimize clinical outcomes while minimizing the emergence of antimicrobial resistance. A core stewardship principle is 'de-escalation' (narrowing): when culture and sensitivity results identify the specific pathogen, broad-spectrum empiric antibiotics (like meropenem) should be streamlined to a narrower-spectrum, targeted agent. Furthermore, when the client is clinically improving and tolerating oral intake, converting from IV to oral therapy promotes early discharge and eliminates catheter-related infection risks. Why the other options fail: option b adds a drug with no gram-negative activity and no indication. Option c continues broad cover for three weeks after sensitivities are known. Option d stops treatment outright, which risks relapse and resistance.",
    strategy: "Antimicrobial stewardship concept: Streamline/de-escalate from broad-spectrum to narrow-spectrum targeted therapy once culture results return; convert IV to oral when stable.",
    difficulty: "medium",
    tags: ["infection-control", "antibiotic-stewardship", "pharmacology", "de-escalation"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-IPC-020",
    categorySlug: "health-promotion",
    stem: "During an acute outbreak of suspected Norovirus gastroenteritis in a long-term care facility, 24 of the 60 residents residing on the second floor develop sudden projectile vomiting and watery diarrhea over a 48-hour period. What is the attack rate of this outbreak on the second floor?",
    choices: [
      { id: "a", text: "40%" },
      { id: "b", text: "24%" },
      { id: "c", text: "60%" },
      { id: "d", text: "12%" },
    ],
    correctChoiceId: "a",
    rationale: "In epidemiological outbreak investigations, the attack rate is calculated as: Attack Rate = (Number of new cases of disease during the epidemic period / Total population at risk during that same period) × 100%. Here, 24 residents developed illness out of a total population at risk of 60 residents: (24 / 60) × 100% = 0.40 × 100% = 40%. Calculating the attack rate helps infection preventionists track epidemic curves, evaluate control measures, and determine outbreak severity. Why the other options fail: option b divides by a hundred rather than by the sixty residents at risk. Option c reports the whole population rather than the cases. Option d halves the true rate, so each of them misstates the burden.",
    strategy: "Calculate attack rate: New cases (24) divided by Total population at risk (60) $= 0.40 = 40\\%$.",
    difficulty: "easy",
    tags: ["infection-control", "epidemiology", "attack-rate", "calculations", "outbreak"],
    isFree: false,
  },
];
