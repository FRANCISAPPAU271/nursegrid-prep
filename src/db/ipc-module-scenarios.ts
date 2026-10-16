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
      { id: "a", text: "Rubbing hands with 70% alcohol-based hand sanitizer for 15 seconds after glove removal" },
      { id: "b", text: "Washing hands vigorously with antimicrobial soap and warm running water for at least 20 seconds" },
      { id: "c", text: "Wearing an N95 particulate respirator when entering the client's room" },
      { id: "d", text: "Administering prophylactic oral vancomycin to the client's roommate" },
    ],
    correctChoiceId: "b",
    rationale: "Clostridioides difficile produces durable bacterial endospores that are physiologically resistant to alcohol-based hand rubs. The physical mechanical friction of lathering with soap and rinsing under warm running water for at least 20 seconds is necessary to physically remove spores from the skin. C. diff is transmitted via the fecal-oral contact route; airborne respirators (N95) are unnecessary. Giving prophylactic antibiotics to roommates alters normal gut flora and actually increases susceptibility to infection.",
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
      { id: "a", text: "A 42-year-old client recovering from an elective laparoscopic cholecystectomy" },
      { id: "b", text: "A 58-year-old client with acute myeloid leukemia who has an Absolute Neutrophil Count (ANC) of 180/mcL following induction chemotherapy" },
      { id: "c", text: "A 28-year-old client with mild iron deficiency anemia" },
      { id: "d", text: "A 65-year-old client with osteoarthritis managed with occasional oral acetaminophen" },
    ],
    correctChoiceId: "b",
    rationale: "Opportunistic pathogens are benign microorganisms that normally do not cause disease in healthy individuals but produce severe, invasive infections when host immune defenses are profoundly compromised. Severe prolonged neutropenia (ANC < 500/mcL, and particularly < 200/mcL) eliminates the primary line of phagocytic defense against opportunistic fungi (Candida and Aspergillus) and bacteria. The client with leukemia and an ANC of 180/mcL is severely immunocompromised and at extreme risk.",
    strategy: "Analyze host susceptibility: ANC < 500 = Severe neutropenia $\\rightarrow$ extreme vulnerability to opportunistic fungal and bacterial sepsis.",
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
      { id: "a", text: "Immediately before performing an aseptic procedure (such as accessing a central venous catheter line or inserting a urinary catheter)" },
      { id: "b", text: "Only after touching the bedside table and bed rails" },
      { id: "c", text: "Only after removing disposable examination gloves at the conclusion of the shift" },
      { id: "d", text: "Immediately after documenting in the client's electronic health record outside the room" },
    ],
    correctChoiceId: "a",
    rationale: "The WHO 'Five Moments for Hand Hygiene' are: (1) before touching a patient, (2) BEFORE clean/aseptic procedures, (3) after body fluid exposure risk, (4) after touching a patient, and (5) after touching patient surroundings. Moment 2 (before clean/aseptic procedures) is critical to protect the client against colonization or infection by microbial flora from healthcare workers or the environment. Hand hygiene must be executed immediately before donning sterile gloves or accessing invasive lines.",
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
      { id: "a", text: "Gloves $\\rightarrow$ Goggles/face shield $\\rightarrow$ Gown $\\rightarrow$ Mask $\\rightarrow$ Perform hand hygiene" },
      { id: "b", text: "Mask $\\rightarrow$ Gown $\\rightarrow$ Gloves $\\rightarrow$ Goggles $\\rightarrow$ Perform hand hygiene" },
      { id: "c", text: "Gown $\\rightarrow$ Mask $\\rightarrow$ Gloves $\\rightarrow$ Goggles $\\rightarrow$ Perform hand hygiene" },
      { id: "d", text: "Goggles $\\rightarrow$ Mask $\\rightarrow$ Gown $\\rightarrow$ Gloves $\\rightarrow$ Perform hand hygiene" },
    ],
    correctChoiceId: "a",
    rationale: "According to CDC guidelines, the correct sequence for removing (doffing) PPE from most contaminated to least contaminated is: (1) Gloves (most heavily contaminated), (2) Goggles or face shield, (3) Gown (unfastening ties, peeling down and away from the body without touching the front), (4) Mask or respirator (handling only by ear loops/ties, touching neither the front nor the face), followed immediately by (5) thorough hand hygiene. Removing the mask first is dangerous because it exposes the respiratory tract while contaminated gloves are still on.",
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
      { id: "a", text: "Place the client in an Airborne Infection Isolation Room (AIIR) with negative pressure, and require healthcare workers to wear fitted N95 respirators" },
      { id: "b", text: "Place the client in a positive-pressure room, and wear standard surgical paper masks" },
      { id: "c", text: "Place the client on contact precautions in a semi-private room with a 3-foot bed separation" },
      { id: "d", text: "Place the client on standard precautions with routine droplet isolation for 12 hours" },
    ],
    correctChoiceId: "a",
    rationale: "Mycobacterium tuberculosis is transmitted via microscopic airborne droplet nuclei ($\le 5\text{ micrometers}$) that remain suspended in the air for prolonged periods. Clients with active or suspected pulmonary TB require Airborne Precautions: placement in an Airborne Infection Isolation Room (AIIR) with negative air pressure ($\ge 6\text{--}12$ air exchanges per hour) and air exhausted directly outdoors or HEPA-filtered, and all healthcare workers must wear a fit-tested N95 or higher particulate respirator. If client transport is unavoidable, the client must wear a standard surgical mask.",
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
      { id: "a", text: "Contact precautions; wear non-sterile gloves and a plastic apron only during direct dressing changes" },
      { id: "b", text: "Droplet precautions; wear a surgical mask when working within 3 to 6 feet of the client, and maintain isolation for the first 24 hours of effective antibiotic therapy" },
      { id: "c", text: "Airborne precautions; keep the client in a negative-pressure room for 3 weeks" },
      { id: "d", text: "Standard precautions alone, because bacterial meningitis is not transmissible via respiratory secretions" },
    ],
    correctChoiceId: "b",
    rationale: "Neisseria meningitidis is spread via large respiratory droplets generated by coughing, sneezing, or close conversation. The client requires Droplet Precautions (private room; surgical mask worn by healthcare workers upon entering the room or within 3 to 6 feet). Droplet precautions must be strictly maintained until the client has completed 24 hours of appropriate intravenous antimicrobial therapy (such as ceftriaxone), which eliminates nasopharyngeal carriage. Close contacts also require antibiotic chemoprophylaxis.",
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
      { id: "a", text: "Dedicate a disposable or client-specific blood pressure cuff, stethoscope, and thermometer to remain inside the client's room" },
      { id: "b", text: "Share the electronic blood pressure monitor between this client and non-infected clients without cleaning" },
      { id: "c", text: "Leave the room door propped open at all times to promote airflow" },
      { id: "d", text: "Wear an N95 respirator mask and sterile gown whenever entering the room" },
    ],
    correctChoiceId: "a",
    rationale: "Clients colonized or infected with multi-drug resistant organisms (MDROs) like MRSA or VRE require Contact Precautions: gloves and a gown donned upon entering the room, and dedicated, client-specific non-critical equipment (stethoscope, blood pressure cuff, thermometer) that remains in the room until discharge. Sharing non-critical equipment between rooms without hospital-grade disinfection is a primary driver of horizontal cross-transmission of MDROs across hospital wards.",
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
      { id: "a", text: "Standard surgical mask and single latex gloves" },
      { id: "b", text: "Impermeable full-body coverall, double gloving, PAPR or N95 respirator with full-face shield, waterproof boot covers, and supervision by a trained observer during donning and doffing" },
      { id: "c", text: "Open-back cloth isolation gown and protective reading eyeglasses" },
      { id: "d", text: "Cotton laboratory coat, sterile gloves, and cloth shoe covers" },
    ],
    correctChoiceId: "b",
    rationale: "Ebola and Marburg virus diseases are transmitted through direct contact with blood, secretions, organs, or other bodily fluids of infected persons. The CDC and WHO mandate enhanced barrier PPE: an impermeable full-body coverall or gown, double gloving with the inner glove under the sleeve, a powered air-purifying respirator (PAPR) or N95 respirator with a full-face shield, waterproof boot covers, and an apron if vomiting/diarrhea is present. A trained observer must actively monitor every step of the donning and doffing checklist to prevent accidental self-contamination.",
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
      { id: "a", text: "The nurse touches the 1-inch (2.5 cm) outer margin of the sterile drape with clean bare hands" },
      { id: "b", text: "A bottle of sterile normal saline accidentally splashes, wetting the center of the sterile field and soaking through to the unsterile tabletop beneath" },
      { id: "c", text: "The sterile field is maintained continuously above the nurse's waist level" },
      { id: "d", text: "The nurse faces the sterile field continuously without turning their back" },
    ],
    correctChoiceId: "b",
    rationale: "When a sterile surface becomes wet and moisture penetrates completely through to an unsterile underlying surface (known as 'strike-through' or capillary action), microorganisms are wicked upward from the unsterile table into the sterile supplies, rendering the field contaminated. The entire field must be discarded and replaced. The 1-inch (2.5 cm) outer border of a sterile drape is considered non-sterile and may be handled. Maintaining items above waist level and facing the field are correct aseptic techniques.",
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
      { id: "a", text: "Critical item; requires complete sterilization (such as steam autoclaving) to eradicate all viable microorganisms and spores" },
      { id: "b", text: "Semi-critical item; requires high-level chemical disinfection with glutaraldehyde" },
      { id: "c", text: "Non-critical item; requires low-level intermediate surface disinfection with alcohol wipes" },
      { id: "d", text: "Environmental surface; requires routine soap-and-water cleaning only" },
    ],
    correctChoiceId: "a",
    rationale: "Under Earl Spaulding's criteria: (1) Critical items enter sterile tissue, body cavities, or the vascular system (e.g., surgical scalpels, needles, implants, cardiac catheters) and carry a high risk of infection; they MUST undergo complete sterilization to kill all vegetative bacteria, fungi, viruses, and bacterial spores. (2) Semi-critical items touch mucous membranes or non-intact skin (e.g., gastrointestinal endoscopes, respiratory therapy equipment) and require high-level disinfection. (3) Non-critical items contact only intact skin (e.g., BP cuffs, crutches) and require low-level disinfection.",
    strategy: "Review Spaulding classification: Enters sterile tissue/bloodstream = Critical $\\rightarrow$ Sterilization (autoclave). Touches mucous membranes = Semi-critical $\\rightarrow$ High-level disinfection.",
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
      { id: "a", text: "Apply 2% chlorhexidine gluconate with 70% alcohol using vigorous friction, and allow the skin to dry completely for at least 2 minutes before puncture" },
      { id: "b", text: "Use a small fenestrated drape that covers only the immediate puncture site" },
      { id: "c", text: "Recommend using the femoral vein as the primary site of choice for all central line placements" },
      { id: "d", text: "Infuse prophylactic intravenous vancomycin through the line immediately after insertion" },
    ],
    correctChoiceId: "a",
    rationale: "The evidence-based CLABSI insertion bundle includes: (1) maximal sterile barrier precautions (cap, mask, sterile gown, sterile gloves, and a full-body sterile drape covering the client from head to toe), (2) skin antisepsis with > 0.5% chlorhexidine gluconate with 70% alcohol applied with friction and allowed to air dry completely (the antimicrobial effect occurs as it dries), (3) avoiding the femoral site in adults (femoral lines have the highest infection and thrombosis rates; subclavian is preferred), and (4) daily review of line necessity. Prophylactic antibiotics are not recommended.",
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
      { id: "a", text: "Hang the urinary drainage bag on the bed side rail above the level of the mattress" },
      { id: "b", text: "Keep the drainage bag positioned below the level of the bladder at all times, and avoid letting the drainage spout touch collection containers" },
      { id: "c", text: "Cleanse the meatus three times daily with concentrated povidone-iodine antiseptic ointment" },
      { id: "d", text: "Disconnect the catheter from the drainage tube every shift to irrigate with normal saline" },
    ],
    correctChoiceId: "b",
    rationale: "To prevent CAUTI, the drainage bag must be maintained below the level of the bladder at all times to facilitate gravity drainage and prevent retrograde reflux of contaminated urine back into the bladder. The drainage bag must never be placed on the floor or hung on moving bed rails (which can rise above bladder level). The drainage system must remain closed; breaking the connection for routine irrigation introduces bacteria. Daily routine meatal hygiene with mild soap and water is recommended; antiseptic ointments (iodine) irritate mucosal tissue and increase infection risk.",
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
      { id: "a", text: "Maintain the head of the bed flat (0 degrees) and instill 10 mL of normal saline down the endotracheal tube before suctioning" },
      { id: "b", text: "Elevate the head of the bed 30 to 45 degrees, conduct daily sedation vacations and spontaneous breathing trials, and perform regular oral care with chlorhexidine" },
      { id: "c", text: "Change the mechanical ventilator breathing circuit tubing every 12 hours" },
      { id: "d", text: "Administer continuous deep neuromuscular paralysis to eliminate coughing" },
    ],
    correctChoiceId: "b",
    rationale: "The VAP prevention bundle consists of evidence-based interventions: (1) elevation of the head of the bed to 30–45 degrees (prevents gastroesophageal reflux and aspiration of gastric contents), (2) daily 'sedation vacation' and assessment of readiness to extubate, (3) peptic ulcer disease and deep vein thrombosis prophylaxis, and (4) regular oral hygiene with chlorhexidine oral rinse (reduces oral bacterial colonization). Routine circuit changes and instillation of saline into the endotracheal tube are outdated, hazardous practices that increase pneumonia rates.",
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
      { id: "a", text: "Shave the operative site with a manual razor the night before surgery, and start oral antibiotics 3 days prior" },
      { id: "b", text: "Avoid hair removal unless it interferes with surgery; if removal is necessary, use electric surgical clippers immediately prior to surgery, and infuse prophylactic IV antibiotics within 60 minutes before incision" },
      { id: "c", text: "Apply chemical depilatory creams across the entire abdomen 12 hours before surgery" },
      { id: "d", text: "Administer the prophylactic IV antibiotic as a rapid bolus after the surgical dressing is applied" },
    ],
    correctChoiceId: "b",
    rationale: "Using manual razors causes microscopic skin nicks and abrasions that rapidly become colonized with bacteria, multiplying SSI rates. If hair removal is necessary, it must be performed immediately prior to surgery using electric surgical clippers with single-use heads outside the operating room. To ensure therapeutic tissue levels at the time of skin incision, preoperative prophylactic intravenous antibiotics (such as cefazolin) must be administered within 60 minutes prior to surgical incision (120 minutes for vancomycin or fluoroquinolones).",
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
      { id: "a", text: "Vigorously squeeze the puncture wound to express blood, and soak the finger in concentrated sodium hypochlorite bleach" },
      { id: "b", text: "Wash the puncture site immediately with soap and running water, report the incident, and report to occupational health for post-exposure prophylaxis (PEP) within 2 hours" },
      { id: "c", text: "Wait 48 hours to observe for signs of acute retroviral syndrome before seeking care" },
      { id: "d", text: "Bandage the finger tightly and finish the shift before reporting the exposure" },
    ],
    correctChoiceId: "b",
    rationale: "Following an occupational bloodborne pathogen exposure (needlestick), the immediate first step is washing the wound thoroughly with warm water and soap; do NOT squeeze, suck, or apply caustic chemical agents (like bleach or alcohol), which damage tissues and increase viral penetration. The nurse must report the injury immediately to a supervisor/occupational health. Post-Exposure Prophylaxis (PEP) for HIV is most effective when initiated as soon as possible—ideally within 2 hours and no later than 72 hours post-exposure—and continued for 28 days.",
    strategy: "Needlestick protocol: Wash with soap and water immediately (NO squeezing/bleach!) $\\rightarrow$ Report $\\rightarrow$ Start HIV PEP within 2 hours.",
    difficulty: "medium",
    tags: ["infection-control", "needlestick", "hiv-pep", "occupational-health", "safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-IPC-016",
    categorySlug: "safety-infection-control",
    stem: "A nurse is disposing of clinical waste on a surgical ward. Which item is correctly matched with its appropriate disposal container according to healthcare waste segregation standards?",
    choices: [
      { id: "a", text: "Used disposable syringes with attached needles $\\rightarrow$ rigid, puncture-resistant, leak-proof sharps box filled no more than 3/4 full" },
      { id: "b", text: "Gauze heavily saturated with purulent wound exudate $\\rightarrow$ clear household municipal garbage bin" },
      { id: "c", text: "Clean cardboard packaging boxes from intravenous fluid cartons $\\rightarrow$ red biohazard incineration container" },
      { id: "d", text: "Empty IV normal saline plastic bags without blood contact $\\rightarrow$ puncture-resistant yellow sharps container" },
    ],
    correctChoiceId: "a",
    rationale: "All sharps (needles, scalpels, lancets, broken glass ampoules) must be discarded directly into rigid, puncture-resistant, tamper-evident sharps containers labeled with the biohazard symbol, and containers must be sealed and replaced when they reach the fill line (typically 3/4 full) to prevent overflow injuries. Needles must NEVER be recapped, bent, or clipped by hand. Infectious soft waste (blood/pus soaked gauze) goes into yellow/red biohazard bags. Clean non-infectious cardboard goes into general municipal recycling (black bins).",
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
      { id: "a", text: "Draw both culture bottles through the existing peripheral intravenous catheter that has been in place for 3 days" },
      { id: "b", text: "Perform skin antisepsis with chlorhexidine or tincture of iodine, allow it to dry completely for at least 30 to 60 seconds, and collect two separate sets from two distinct venepuncture sites" },
      { id: "c", text: "Touch the cleaned venepuncture site with an unsterile finger immediately before needle insertion to palpate the vein" },
      { id: "d", text: "Collect 1 mL of blood into a single aerobic bottle only" },
    ],
    correctChoiceId: "b",
    rationale: "To avoid false-positive blood cultures from normal skin flora (e.g., Coagulase-negative Staphylococci), the nurse must cleanse the skin with an appropriate antiseptic (chlorhexidine gluconate or 1–2% tincture of iodine) and allow it to dry completely (for at least 30–60 seconds). Once the skin is prepped, it must NEVER be touched again. Standard practice requires drawing two distinct sets (each set consisting of one aerobic and one anaerobic bottle containing 8–10 mL of blood each) from two separate venepuncture sites prior to antibiotic initiation. Drawing from existing IV lines yields unacceptably high contamination rates.",
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
      { id: "a", text: "\"Collect the specimen late at night right after eating dinner.\"" },
      { id: "b", text: "\"Rinse your mouth with plain water first thing in the morning, take several deep breaths, and cough deeply from your lungs into the sterile container.\"" },
      { id: "c", text: "\"Spit saliva from the front of your mouth into the container until it is half full.\"" },
      { id: "d", text: "\"Swish vigorously with an alcohol-based antibacterial mouthwash immediately before coughing.\"" },
    ],
    correctChoiceId: "b",
    rationale: "Diagnostic sputum for tuberculosis must be coughed from deep within the pulmonary bronchial tree, rather than superficial postnasal secretions or saliva. Sputum is best collected early in the morning upon awakening, because secretions pool in the airways overnight. Rinsing the mouth with plain water removes food particles and oral debris without killing mycobacteria; antiseptic mouthwashes must be avoided as they can kill or inhibit mycobacteria and invalidate culture results. Typically, three consecutive morning sputum specimens are collected.",
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
      { id: "a", text: "De-escalate from empiric broad-spectrum IV meropenem to targeted oral ciprofloxacin" },
      { id: "b", text: "Add intravenous vancomycin to provide double-coverage against gram-negative bacilli" },
      { id: "c", text: "Continue empiric broad-spectrum IV meropenem for an additional 21 days" },
      { id: "d", text: "Discontinue all antibiotics immediately without completing a treatment course" },
    ],
    correctChoiceId: "a",
    rationale: "Antimicrobial stewardship programs aim to optimize clinical outcomes while minimizing the emergence of antimicrobial resistance. A core stewardship principle is 'de-escalation' (narrowing): when culture and sensitivity results identify the specific pathogen, broad-spectrum empiric antibiotics (like meropenem) should be streamlined to a narrower-spectrum, targeted agent. Furthermore, when the client is clinically improving and tolerating oral intake, converting from IV to oral therapy promotes early discharge and eliminates catheter-related infection risks.",
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
    rationale: "In epidemiological outbreak investigations, the attack rate is calculated as: Attack Rate = (Number of new cases of disease during the epidemic period / Total population at risk during that same period) × 100%. Here, 24 residents developed illness out of a total population at risk of 60 residents: (24 / 60) × 100% = 0.40 × 100% = 40%. Calculating the attack rate helps infection preventionists track epidemic curves, evaluate control measures, and determine outbreak severity.",
    strategy: "Calculate attack rate: New cases (24) $\\div$ Total population at risk (60) $= 0.40 = 40\\%$.",
    difficulty: "easy",
    tags: ["infection-control", "epidemiology", "attack-rate", "calculations", "outbreak"],
    isFree: false,
  },
];
