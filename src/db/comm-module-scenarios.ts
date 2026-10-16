import type { AuthoredQuestion } from "./authored-bank";

export const COMM_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-COMM-001",
    categorySlug: "safety-infection-control",
    stem: "A 32-year-old farmer presents to a district hospital triage in Ghana with a 3-day history of acute high fever, headache, retro-orbital pain, jaundice, and spontaneous mucosal oozing from the gums. Under the Integrated Disease Surveillance and Response (IDSR) guidelines, what is the nurse's immediate priority notification action?",
    choices: [
      {
        id: "a",
        text: "Isolate the patient immediately under viral haemorrhagic fever precautions and report the suspected case to the District Disease Control Officer within 24 hours",
      },
      {
        id: "b",
        text: "Wait for confirmatory RT-PCR and serology lab results before notifying local health authorities",
      },
      {
        id: "c",
        text: "Record the case in the monthly routine outpatient morbidity ledger for review at the end of the quarter",
      },
      {
        id: "d",
        text: "Discharge the patient with oral antipyretics and schedule an outpatient review in one week",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Under the WHO and Ghana Health Service Integrated Disease Surveillance and Response (IDSR) strategy, conditions with epidemic potential (such as acute viral haemorrhagic fevers, yellow fever, cholera, and meningococcal meningitis) mandate immediate suspected case reporting within 24 hours by telephone, SMS, or direct call to the District Health Directorate, alongside immediate strict contact/droplet barrier isolation. Notification must NEVER be delayed pending laboratory confirmation, as rapid containment prevents catastrophic community transmission.",
    strategy: "IDSR notification rules: Epidemic-prone conditions (haemorrhagic fevers, yellow fever, cholera) require immediate reporting within 24 hours upon SUSPICION, before lab results.",
    difficulty: "easy",
    tags: ["communicable-diseases", "idsr", "public-health", "haemorrhagic-fever", "infection-control"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-002",
    categorySlug: "safety-infection-control",
    stem: "A nurse sustains a deep percutaneous needlestick injury with a hollow-bore needle while drawing blood from a patient confirmed to be HIV-positive with a high viral load. What is the recommended timeline and protocol for initiating Post-Exposure Prophylaxis (PEP)?",
    choices: [
      {
        id: "a",
        text: "Wash the puncture wound immediately with soap and running water, and initiate a 28-day course of 3-drug antiretroviral PEP as soon as possible, ideally within 2 hours and no later than 72 hours",
      },
      {
        id: "b",
        text: "Squeeze the wound vigorously to express blood, apply concentrated sodium hypochlorite, and wait 7 days for baseline HIV antibody results before taking PEP",
      },
      {
        id: "c",
        text: "Start PEP only if the healthcare worker tests HIV-positive on rapid antibody screening immediately after the injury",
      },
      {
        id: "d",
        text: "Take a single dose of oral zidovudine within 24 hours; no ongoing follow-up is necessary",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Immediate management of occupational blood exposure requires washing the wound thoroughly with soap and water (never scrubbing, squeezing, or applying caustic bleach). Post-Exposure Prophylaxis (PEP) with a 3-drug antiretroviral regimen (e.g., tenofovir + lamivudine + dolutegravir) should be initiated as urgently as possible, ideally within 2 hours of exposure. PEP is ineffective if delayed beyond 72 hours. The full course lasts 28 days with baseline and follow-up HIV testing at 6 weeks and 3 months.",
    strategy: "Occupational HIV PEP: Wash with soap/water (no squeezing), start 3-drug PEP within 2 hours (cutoff 72 hours), complete full 28-day course.",
    difficulty: "medium",
    tags: ["communicable-diseases", "hiv", "pep", "occupational-health", "infection-control"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-003",
    categorySlug: "pharmacology-parenteral",
    stem: "A 42-year-old client is admitted with severe Plasmodium falciparum malaria: Glasgow Coma Scale score of 10, dark 'blackwater' urine, and 8% parasitaemia. The physician orders intravenous artesunate. How should the critical care nurse administer this life-saving antimalarial?",
    choices: [
      {
        id: "a",
        text: "Administer IV artesunate 2.4 mg/kg at 0 hours, 12 hours, and 24 hours, then once daily until the patient can tolerate a full 3-day oral artemisinin-based combination therapy (ACT) course",
      },
      {
        id: "b",
        text: "Administer IV artesunate as a continuous 72-hour infusion mixed with concentrated dextrose",
      },
      {
        id: "c",
        text: "Give a single dose of oral artemether-lumefantrine via nasogastric tube and avoid parenteral therapy",
      },
      {
        id: "d",
        text: "Infuse intravenous chloroquine over 4 hours and monitor for hypotension",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "WHO and Ghana National Malaria Control Programme guidelines mandate intravenous or intramuscular artesunate (2.4 mg/kg for adults, 3.0 mg/kg for children < 20 kg) as the first-line treatment for severe malaria. The dosing schedule is 0, 12, and 24 hours, then once every 24 hours thereafter. A minimum of 3 parenteral doses must be given. Once the patient is awake and tolerating oral intake, a complete 3-day course of an oral artemisinin-based combination therapy (ACT, such as artemether-lumefantrine or artesunate-amodiaquine) must be completed to prevent recrudescence.",
    strategy: "Severe malaria first-line: IV artesunate 2.4 mg/kg at 0, 12, 24 hours (minimum 3 doses), followed by a complete 3-day oral ACT course.",
    difficulty: "medium",
    tags: ["communicable-diseases", "malaria", "artesunate", "severe-malaria", "pharmacology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-004",
    categorySlug: "med-surg",
    stem: "Two weeks after successfully recovering from severe falciparum malaria treated with intravenous artesunate, a patient returns to the outpatient clinic with fatigue, scleral icterus, dark urine, and a haemoglobin drop from 11.2 g/dL to 6.8 g/dL with elevated reticulocytes and indirect bilirubin. Which condition should the nurse recognize?",
    choices: [
      {
        id: "a",
        text: "Post-artemisinin delayed haemolysis (PADH), requiring immediate haemoglobin monitoring and potential transfusion support",
      },
      {
        id: "b",
        text: "Acute recrudescence of chloroquine-sensitive vivax malaria requiring primaquine",
      },
      {
        id: "c",
        text: "Aplastic anaemia caused by permanent bone marrow suppression",
      },
      {
        id: "d",
        text: "Immune thrombocytopenic purpura triggered by mosquito salivary antigens",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Post-artemisinin delayed haemolysis (PADH) is a recognized phenomenon occurring 1 to 4 weeks (typically around days 7–21) after parenteral artesunate therapy in patients with high initial parasitaemia. Artesunate causes splenic 'pitting', where dead parasites are extracted from erythrocytes, leaving once-parasitized erythrocytes ('once-infected RBCs') with shortened lifespans that undergo delayed intravascular clearance. Patients present with haemolytic anaemia, jaundice, and dark urine. Management involves supportive care and blood transfusion if severe.",
    strategy: "Post-artesunate surveillance: Watch for delayed haemolysis (PADH) 1-3 weeks post-treatment in patients with high initial parasitaemia.",
    difficulty: "hard",
    tags: ["communicable-diseases", "malaria", "artesunate", "haemolysis", "padh"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-005",
    categorySlug: "med-surg",
    stem: "A 26-year-old traveler presents with high fever, severe retro-orbital headache, arthralgia, and rash, suspected of having dengue fever. On day 4, the fever abates, but the patient develops severe continuous abdominal pain, persistent vomiting, mucosal bleeding from the gums, and lethargy. What is the clinical significance of these findings?",
    choices: [
      {
        id: "a",
        text: "These are critical warning signs of severe dengue (plasma leakage and impending dengue shock syndrome) requiring immediate IV crystalloid resuscitation",
      },
      {
        id: "b",
        text: "This indicates normal convalescence because defervescence signals complete viral clearance",
      },
      {
        id: "c",
        text: "The patient is experiencing an uncomplicated vasovagal response to antipyretics",
      },
      {
        id: "d",
        text: "This is typical allergic gastroenteritis triggered by non-steroidal anti-inflammatory drugs",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "In dengue virus infection, the critical phase begins at defervescence (typically days 3–7 of illness). The development of dengue warning signs (severe abdominal pain, persistent vomiting, fluid accumulation/ascites/pleural effusion, mucosal bleeding, lethargy/restlessness, hepatomegaly > 2 cm, and rapid rise in haematocrit with sharp drop in platelets) signals systemic capillary permeability, plasma leakage, and impending Dengue Shock Syndrome (DSS). The nurse must immediately admit the patient for close monitoring and judicious isotonic IV fluid resuscitation.",
    strategy: "Dengue warning signs: Defervescence + abdominal pain + persistent vomiting + mucosal bleed = critical phase plasma leakage / shock.",
    difficulty: "medium",
    tags: ["communicable-diseases", "dengue", "arbovirus", "warning-signs", "shock"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-006",
    categorySlug: "safety-infection-control",
    stem: "A 45-year-old patient is admitted to a medical ward with a 4-week history of productive cough, drenching night sweats, anorexia, significant weight loss, and haemoptysis. Chest X-ray reveals cavitary lesions in the right upper lobe. What is the nurse's immediate infection prevention action while awaiting sputum GeneXpert MTB/RIF results?",
    choices: [
      {
        id: "a",
        text: "Place the patient in an airborne infection isolation room (negative pressure) and ensure all healthcare workers wear fitted N95 or FFP2 respirators",
      },
      {
        id: "b",
        text: "Place the patient in a shared 6-bed ward and instruct the patient to wear a cloth mask when sleeping",
      },
      {
        id: "c",
        text: "Maintain standard precautions only until sputum acid-fast bacilli (AFB) smear results are confirmed positive",
      },
      {
        id: "d",
        text: "Enforce strict contact precautions including sterile surgical gowns and non-permeable shoe covers",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Mycobacterium tuberculosis is transmitted via droplet nuclei that remain suspended in the air. Any patient with presumptive active pulmonary tuberculosis (cavitary disease, chronic cough, haemoptysis) must be placed immediately in an Airborne Infection Isolation Room (AIIR) with negative pressure (>= 6–12 air exchanges per hour) venting to the outside. Staff must wear fit-tested N95 (or FFP2) particulate respirators upon room entry. If transported, the patient must wear a surgical mask. Sputum GeneXpert MTB/RIF is the rapid molecular test of choice to identify TB and rifampicin resistance.",
    strategy: "Tuberculosis isolation: Airborne precautions (negative pressure room + fitted N95 respirator). Patient wears surgical mask during transport.",
    difficulty: "easy",
    tags: ["communicable-diseases", "tuberculosis", "airborne-precautions", "genexpert", "infection-control"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-007",
    categorySlug: "pharmacology-parenteral",
    stem: "A client newly diagnosed with pulmonary tuberculosis begins first-line anti-TB therapy with rifampicin, isoniazid, pyrazinamide, and ethambutol (RHZE). During counseling, the nurse warns the client to immediately report changes in visual acuity or red-green color discrimination. Which medication in this regimen causes this adverse effect?",
    choices: [
      {
        id: "a",
        text: "Ethambutol",
      },
      {
        id: "b",
        text: "Rifampicin",
      },
      {
        id: "c",
        text: "Isoniazid",
      },
      {
        id: "d",
        text: "Pyrazinamide",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Ethambutol causes dose-dependent retrobulbar optic neuritis, manifesting as decreased visual acuity, central scotomas, and loss of red-green color discrimination. Baseline and periodic visual acuity and color vision testing (Ishihara plates) are indicated. If visual toxicity occurs, ethambutol must be discontinued immediately to prevent permanent blindness. In contrast, rifampicin causes orange-red discoloration of body fluids; isoniazid causes peripheral neuropathy (prevented with pyridoxine/vitamin B6) and hepatotoxicity; and pyrazinamide causes hyperuricaemia and arthralgias.",
    strategy: "TB medication toxicities: Ethambutol = Eyes (optic neuritis, red-green color loss); Isoniazid = Neurons (neuropathy / B6 deficiency); Rifampicin = Red secretions.",
    difficulty: "easy",
    tags: ["communicable-diseases", "tuberculosis", "ethambutol", "optic-neuritis", "pharmacology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-008",
    categorySlug: "health-promotion",
    stem: "A 36-year-old client living with HIV on first-line antiretroviral therapy (tenofovir disoproxil fumarate + lamivudine + dolutegravir) attends the ART clinic. Routine viral load monitoring returns at 3,200 copies/mL. The client admits to missing doses on weekends due to shift work. What is the nurse's next step according to national ART guidelines?",
    choices: [
      {
        id: "a",
        text: "Initiate Enhanced Adherence Counseling (EAC) for 3 monthly sessions and repeat the viral load test after 3 months before considering a regimen switch",
      },
      {
        id: "b",
        text: "Immediately switch the client to second-line protease inhibitor therapy without assessing adherence barriers",
      },
      {
        id: "c",
        text: "Discontinue all antiretroviral medications for 4 weeks to clear drug-resistant mutants",
      },
      {
        id: "d",
        text: "Reassure the client that a viral load of 3,200 copies/mL represents undetectable viral suppression",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "In national and WHO HIV treatment guidelines, virological non-suppression is defined as a viral load >= 1,000 copies/mL on two consecutive measurements 3 months apart. When an elevated viral load is detected in a patient reporting missed doses, the immediate protocol is not an automatic drug switch; instead, the nurse initiates Enhanced Adherence Counseling (EAC) monthly for 3 months to identify and overcome barriers to 95%+ pill adherence. A repeat viral load is conducted after 3 months; if still >= 1,000 copies/mL despite documented adherence, treatment failure is confirmed and the patient is switched to second-line therapy.",
    strategy: "HIV viral non-suppression (VL >= 1,000): Provide Enhanced Adherence Counseling (EAC) for 3 months and retest before switching regimens.",
    difficulty: "medium",
    tags: ["communicable-diseases", "hiv", "art", "viral-load", "adherence-counseling"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-009",
    categorySlug: "maternal-newborn",
    stem: "A pregnant woman tests positive for Hepatitis B surface antigen (HBsAg) and Hepatitis B e-antigen (HBeAg) during routine antenatal care. She gives birth to a vigorous full-term male neonate. What combination of immunoprophylaxis must the nurse administer to the newborn to prevent mother-to-child vertical transmission?",
    choices: [
      {
        id: "a",
        text: "Administer Hepatitis B vaccine (monovalent birth dose) and Hepatitis B Immune Globulin (HBIG) at separate anatomical intramuscular sites within 12 hours of delivery",
      },
      {
        id: "b",
        text: "Administer oral lamivudine drops to the infant and delay all vaccinations until 6 weeks of age",
      },
      {
        id: "c",
        text: "Give Hepatitis B Immune Globulin alone at 6 weeks of age during the first child welfare clinic visit",
      },
      {
        id: "d",
        text: "No intervention is indicated if the infant is delivered by elective caesarean section",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Perinatal transmission from HBsAg-positive mothers carries up to a 90% risk of chronic neonatal infection leading to cirrhosis and hepatocellular carcinoma in adulthood. Immediate prevention requires administering Hepatitis B vaccine (monovalent birth dose) and Hepatitis B Immune Globulin (HBIG, 0.5 mL) within 12 hours of birth at two separate anatomical sites (e.g., left and right anterolateral thighs). This combined active-passive immunoprophylaxis reduces transmission rates by over 90–95%. The infant then completes the standard pentavalent vaccine series at 6, 10, and 14 weeks.",
    strategy: "Hepatitis B perinatal prophylaxis: Monovalent HepB vaccine + HBIG given within 12 hours of birth at separate injection sites.",
    difficulty: "easy",
    tags: ["communicable-diseases", "hepatitis-b", "neonatal", "vertical-transmission", "immunization"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-010",
    categorySlug: "med-surg",
    stem: "During a severe cholera outbreak in an informal urban settlement, a 30-year-old adult arrives at the Cholera Treatment Unit (CTU) conscious but floppy, with sunken eyes, skin pinch going back very slowly (> 2 seconds), absent radial pulse, and continuous painless 'rice-water' watery stools. What is the nurse's immediate priority treatment?",
    choices: [
      {
        id: "a",
        text: "Initiate WHO Plan C emergency intravenous rehydration with Ringer's lactate: 100 mL/kg total (30 mL/kg in the first 30 minutes, then 70 mL/kg over 2.5 hours)",
      },
      {
        id: "b",
        text: "Encourage oral rehydration salts (ORS) slowly with a spoon and withhold intravenous therapy",
      },
      {
        id: "c",
        text: "Administer intravenous loperamide to halt gastrointestinal hypermotility",
      },
      {
        id: "d",
        text: "Infuse 500 mL of 5% dextrose in water over 8 hours to avoid hypernatraemia",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The patient presents with severe cholera dehydration with hypovolaemic shock (lethargy, absent peripheral pulse, skin tenting > 2 s), which is rapidly fatal within hours without aggressive volume restoration. Under WHO Plan C for cholera, adult fluid resuscitation requires 100 mL/kg of IV Ringer's lactate: 30 mL/kg within the first 30 minutes, followed by 70 mL/kg over 2.5 hours. As soon as the patient is able to drink, oral rehydration salts (ORS) and oral zinc are initiated, followed by single-dose oral doxycycline or azithromycin to reduce duration and shedding. Antimotility drugs (like loperamide) are strictly contraindicated.",
    strategy: "Severe cholera dehydration (Plan C): Rapid IV Ringer's lactate (100 mL/kg: 30 mL/kg in 30 min, 70 mL/kg in 2.5 h). NEVER give loperamide.",
    difficulty: "medium",
    tags: ["communicable-diseases", "cholera", "plan-c", "dehydration", "rehydration"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-011",
    categorySlug: "med-surg",
    stem: "A 19-year-old student is on day 10 of hospital admission for culture-confirmed Salmonella Typhi (typhoid fever). The patient suddenly cries out with severe, sharp abdominal pain, becomes tachycardic (130 bpm), hypotensive (88/50 mmHg), and develops a rigid, board-like abdomen with loss of liver dullness to percussion. What catastrophic complication should the nurse immediately suspect?",
    choices: [
      {
        id: "a",
        text: "Typhoid intestinal perforation (usually of the terminal ileum) with acute peritonitis",
      },
      {
        id: "b",
        text: "Benign ileocaecal spasm triggered by oral rehydration",
      },
      {
        id: "c",
        text: "Transient amoebic colitis responsive to oral metronidazole",
      },
      {
        id: "d",
        text: "Acute cholecystitis with preserved peritoneal boundaries",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Salmonella Typhi invades the Peyer patches in the lymphoid tissue of the terminal ileum. During the late second to third week of illness, necrosis and ulceration of Peyer patches can lead to intestinal perforation, the most lethal surgical complication of typhoid fever. Clinical signs include sudden severe abdominal pain, board-like involuntary guarding, rebound tenderness, free intraperitoneal air causing loss of hepatic dullness on percussion, and hypovolaemic/septic shock. The nurse must make the patient nil by mouth, initiate resuscitation, start broad-spectrum IV antibiotics, and alert the surgical team immediately.",
    strategy: "Typhoid fever red flags: Late 2nd/3rd week sudden abdominal pain + rigid abdomen + shock = ileal perforation. Emergency laparotomy needed.",
    difficulty: "medium",
    tags: ["communicable-diseases", "typhoid", "salmonella", "intestinal-perforation", "surgical-emergency"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-012",
    categorySlug: "safety-infection-control",
    stem: "A 22-year-old student living in a crowded boarding hostel is admitted with high fever, severe headache, photophobia, nuchal rigidity, and positive Kernig and Brudzinski signs. Lumbar puncture confirms Neisseria meningitidis. Which infection prevention precaution and post-exposure prophylaxis measures are required?",
    choices: [
      {
        id: "a",
        text: "Enforce droplet precautions for 24 hours after the start of effective antibiotic therapy, and administer chemoprophylaxis (e.g., single-dose oral ciprofloxacin or rifampicin) to close hostel contacts",
      },
      {
        id: "b",
        text: "Maintain airborne precautions in a negative pressure room for 3 weeks",
      },
      {
        id: "c",
        text: "Isolate the patient under contact precautions only and avoid offering prophylaxis to roommates",
      },
      {
        id: "d",
        text: "No isolation is required once IV ceftriaxone is ordered",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Meningococcal meningitis (caused by Neisseria meningitidis) is transmitted via large respiratory droplets. Droplet precautions (surgical mask within 1–2 metres, private room) must be maintained until 24 hours after initiation of effective antimicrobial therapy (e.g., IV ceftriaxone or penicillin). Close contacts (household members, dorm roommates, healthcare workers with direct oral secretion exposure such as during CPR or endotracheal intubation) must receive post-exposure chemoprophylaxis with single-dose oral ciprofloxacin (500 mg), rifampicin, or IM ceftriaxone as soon as possible.",
    strategy: "Meningococcal disease: Droplet precautions for 24 hours after starting antibiotics + chemoprophylaxis (ciprofloxacin/rifampicin) for close contacts.",
    difficulty: "medium",
    tags: ["communicable-diseases", "meningitis", "droplet-precautions", "chemoprophylaxis", "infection-control"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-013",
    categorySlug: "pediatrics",
    stem: "A 2-year-old unimmunized child is brought to the clinic with a 4-day history of high fever, coryza, persistent barking cough, red watery eyes (conjunctivitis), and an erythematous maculopapular rash that began behind the ears and on the face before spreading cephalocaudally down the trunk. Aside from supportive antipyretics and hydration, which routine medical intervention is vital to reduce measles complications and mortality?",
    choices: [
      {
        id: "a",
        text: "Administer two age-appropriate doses of high-dose Vitamin A (200,000 IU for age >= 12 months) given 24 hours apart",
      },
      {
        id: "b",
        text: "Administer high-dose oral aspirin every 4 hours for 7 days",
      },
      {
        id: "c",
        text: "Prescribe prophylactic oral chloramphenicol for 14 days",
      },
      {
        id: "d",
        text: "Administer systemic corticosteroids to suppress the maculopapular rash",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "WHO and UNICEF protocols mandate that all children diagnosed with acute measles receive two doses of high-potency oral Vitamin A given on consecutive days (50,000 IU for infants < 6 months, 100,000 IU for 6–11 months, and 200,000 IU for >= 12 months; a third dose is added at 2–4 weeks if signs of xerophthalmia exist). Measles rapidly depletes vitamin A stores, which can lead to corneal ulceration, blindness, severe pneumonia, and croup. Vitamin A therapy reduces overall measles mortality and morbidity by up to 50%. Aspirin is contraindicated due to the risk of Reye syndrome.",
    strategy: "Measles therapy: High-dose Vitamin A (2 doses on consecutive days) restores epithelial integrity and reduces mortality by 50%. Never give aspirin.",
    difficulty: "easy",
    tags: ["communicable-diseases", "measles", "pediatrics", "vitamin-a", "vaccine-preventable"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-014",
    categorySlug: "pediatrics",
    stem: "A 4-month-old infant is admitted with paroxysms of severe staccato coughing followed by an inspiratory 'whoop', post-tussive vomiting, and subconjunctival haemorrhages. The mother states the infant missed their 6- and 10-week pentavalent immunizations. Pertussis (Bordetella pertussis) is confirmed. What isolation precautions and pharmacological treatment should the nurse implement?",
    choices: [
      {
        id: "a",
        text: "Place the infant on droplet precautions and administer a 5-day course of oral azithromycin, while monitoring for apnoea and bradycardia",
      },
      {
        id: "b",
        text: "Enforce strict airborne isolation for 6 weeks and administer oral ciprofloxacin",
      },
      {
        id: "c",
        text: "Maintain standard precautions only and treat with oral metronidazole",
      },
      {
        id: "d",
        text: "Administer intramuscular penicillin G and avoid monitoring respiratory pattern",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Bordetella pertussis causes whooping cough, which in infants under 6 months presents with severe coughing spells, post-tussive cyanosis, apnoea, and bradycardia. Transmission occurs through large infectious respiratory droplets; the infant must be placed on droplet precautions until 5 days of effective macrolide therapy (such as azithromycin, 10 mg/kg on day 1, then 5 mg/kg on days 2–5) have been completed. Continuous cardiopulmonary and oxygen saturation monitoring is critical because infants are at high risk of sudden apnoea and death.",
    strategy: "Pertussis management: Droplet precautions for 5 days of macrolide therapy (azithromycin). Monitor closely for apnoea and bradycardia in infants.",
    difficulty: "medium",
    tags: ["communicable-diseases", "pertussis", "whooping-cough", "azithromycin", "pediatrics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-015",
    categorySlug: "safety-infection-control",
    stem: "A 10-year-old child is bitten on the calf by an aggressive stray dog that fled into the bush. Examination shows multiple deep bleeding puncture wounds (WHO Category III exposure). What is the critical order of emergency actions the nurse must take to prevent fatal rabies encephalitis?",
    choices: [
      {
        id: "a",
        text: "Wash the wound immediately with soap, detergent, and copious running water for at least 15 minutes, infiltrate Rabies Immune Globulin (RIG) in and around the wound, and initiate the 4-dose rabies vaccination series (days 0, 3, 7, 14)",
      },
      {
        id: "b",
        text: "Suture the lacerations tightly with continuous silk sutures, apply herbal poultices, and give a single dose of tetanus toxoid only",
      },
      {
        id: "c",
        text: "Administer high-dose intravenous dexamethasone and wait 10 days to see if the child develops hydrophobia",
      },
      {
        id: "d",
        text: "Clean the wound with dry cotton, avoid washing to prevent spreading virus, and administer oral amoxicillin",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Rabies is virtually 100% fatal once clinical symptoms develop. Category III exposure (transdermal bites or scratches, licking of broken skin) mandates three immediate interventions: (1) immediate and vigorous washing of all bite wounds with soap, water, and povidone-iodine for at least 15 minutes (which physically removes and inactivates the envelope of the rabies virus); (2) prompt infiltration of Rabies Immune Globulin (RIG, 20 IU/kg) into and around the wound margins to provide immediate passive immunity; and (3) initiating the active cell-culture rabies vaccine series on days 0, 3, 7, and 14. Primary suturing of rabies wounds is contraindicated as it inoculates virus deeper into tissues.",
    strategy: "Rabies Category III PEP: Immediate 15-minute soap-and-water wash + infiltrate RIG around wound + complete 4-dose vaccine (0, 3, 7, 14). NEVER suture primarily.",
    difficulty: "easy",
    tags: ["communicable-diseases", "rabies", "zoonosis", "post-exposure-prophylaxis", "wound-care"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-016",
    categorySlug: "safety-infection-control",
    stem: "A 35-year-old miner from a rural gold-mining community in West Africa presents with fever, severe retrosternal chest pain, conjunctival injection, periorbital oedema, mucosal haemorrhage, and facial swelling. Lassa fever is suspected. In addition to strict VHF barrier nursing (PPE with double gloves, impermeable apron, face shield, and respirator), which antiviral agent should be initiated promptly?",
    choices: [
      {
        id: "a",
        text: "Intravenous ribavirin",
      },
      {
        id: "b",
        text: "Oral oseltamivir",
      },
      {
        id: "c",
        text: "Intravenous ganciclovir",
      },
      {
        id: "d",
        text: "Oral acyclovir",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Lassa fever is an acute arenavirus viral haemorrhagic fever endemic to West Africa, transmitted via the multimammate rat (Mastomys natalensis) urine/faeces or human body fluids. Intravenous ribavirin is the specific, proven antiviral agent that significantly reduces mortality if initiated within the first 6 days of illness. In addition to ribavirin, strict viral haemorrhagic fever (VHF) barrier nursing precautions with impermeable personal protective equipment, fluid balance management, and avoidance of intramuscular injections are mandatory.",
    strategy: "Lassa fever management: VHF barrier isolation + intravenous ribavirin started within the first 6 days of illness.",
    difficulty: "medium",
    tags: ["communicable-diseases", "lassa-fever", "haemorrhagic-fever", "ribavirin", "infection-control"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-017",
    categorySlug: "med-surg",
    stem: "A 12-year-old boy living along Lake Volta presents with painless, terminal macroscopic haematuria for 3 months. Urinalysis shows proteinuria and microscopic red blood cells. Urine filtration microscopy reveals terminal-spined ova of Schistosoma haematobium. What is the standard drug and dosing regimen prescribed to cure urinary schistosomiasis?",
    choices: [
      {
        id: "a",
        text: "Single dose of oral praziquantel 40 mg/kg administered immediately after food",
      },
      {
        id: "b",
        text: "Oral albendazole 400 mg twice daily for 28 days",
      },
      {
        id: "c",
        text: "Intramuscular benzathine penicillin every week for 3 weeks",
      },
      {
        id: "d",
        text: "Oral metronidazole 500 mg three times daily for 10 days",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Schistosoma haematobium is a digenetic blood fluke inhabiting the vesical venous plexus of the bladder and pelvis, causing urinary schistosomiasis (bilharzia) characterized by terminal haematuria, dysuria, and bladder wall calcification (with long-term risk of squamous cell carcinoma of the bladder). Praziquantel at a single oral dose of 40 mg/kg taken after a meal is the drug of choice recommended by WHO and Ghana Health Service Neglected Tropical Disease (NTD) control programmes.",
    strategy: "Schistosomiasis treatment: Oral praziquantel 40 mg/kg single dose taken after food cures both S. haematobium and S. mansoni.",
    difficulty: "easy",
    tags: ["communicable-diseases", "schistosomiasis", "bilharzia", "praziquantel", "ntd"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-018",
    categorySlug: "med-surg",
    stem: "A community health nurse working in an endemic district in the Ashanti region of Ghana identifies a 14-year-old patient with a large, painless, deeply undermined skin ulcer on the forearm with necrotic fat in the base. Buruli ulcer (Mycobacterium ulcerans) is confirmed by PCR. What is the standard WHO-recommended first-line antimicrobial therapy?",
    choices: [
      {
        id: "a",
        text: "Daily oral rifampicin (10 mg/kg) plus clarithromycin (7.5 mg/kg twice daily) for a total duration of 8 weeks, combined with wound care and limb physiotherapy",
      },
      {
        id: "b",
        text: "Intravenous vancomycin for 5 days followed by oral cephalexin",
      },
      {
        id: "c",
        text: "Immediate total limb amputation to prevent systemic dissemination",
      },
      {
        id: "d",
        text: "Oral fluconazole for 6 months without local wound dressings",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Buruli ulcer is caused by Mycobacterium ulcerans, which produces the cytotoxic, immunosuppressive toxin mycolactone, leading to extensive painless necrotic skin ulceration with characteristic undermined edges. WHO and Ghana Health Service guidelines establish oral rifampicin (10 mg/kg once daily) combined with clarithromycin (7.5 mg/kg twice daily) for 8 weeks as the first-line treatment. This fully oral regimen has replaced older streptomycin injections. Early antimicrobial treatment combined with regular aseptic dressing and limb physiotherapy prevents joint contractures and disabling deformities.",
    strategy: "Buruli ulcer treatment: Oral rifampicin + clarithromycin daily for 8 weeks + daily aseptic dressings and physiotherapy to avoid contractures.",
    difficulty: "medium",
    tags: ["communicable-diseases", "buruli-ulcer", "mycobacterium-ulcerans", "rifampicin", "ntd"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-019",
    categorySlug: "safety-infection-control",
    stem: "An elderly inpatient receiving broad-spectrum clindamycin and ceftriaxone for 12 days develops profuse, foul-smelling, watery green diarrhoea (8 loose stools per day), crampy abdominal pain, fever of 38.4 °C, and leukocytosis. Stool testing confirms Clostridioides difficile toxin. What are the key infection control and pharmacological actions required?",
    choices: [
      {
        id: "a",
        text: "Place the patient on Contact Precautions, wash hands with soap and water (not alcohol rub), discontinue the offending antibiotics if possible, and initiate oral vancomycin or fidaxomicin",
      },
      {
        id: "b",
        text: "Administer intravenous loperamide and use alcohol-based hand rub between all patient contacts",
      },
      {
        id: "c",
        text: "Switch to intravenous gentamicin and allow the patient to share a commode with roommates",
      },
      {
        id: "d",
        text: "Place the patient in an airborne isolation room and administer oral amoxicillin",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Clostridioides difficile is an anaerobic, spore-forming bacillus that proliferates following broad-spectrum antimicrobial destruction of normal colonic flora. Spores are resistant to alcohol-based hand rubs; healthcare workers MUST wash hands thoroughly with soap and water to physically remove spores. The patient requires Contact Precautions (dedicated gown, gloves, dedicated equipment) and disinfection with 0.5% hypochlorite (bleach). Treatment entails discontinuing the inciting antibiotic and administering oral vancomycin (125 mg 4 times daily) or oral fidaxomicin. Antimotility agents are contraindicated as they cause toxic megacolon.",
    strategy: "C. difficile protocol: Soap and water hand hygiene (NOT alcohol rub) + Contact Precautions + Oral vancomycin. Antimotility drugs are contraindicated.",
    difficulty: "medium",
    tags: ["communicable-diseases", "clostridioides-difficile", "antimicrobial-stewardship", "contact-precautions", "hand-hygiene"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-COMM-020",
    categorySlug: "safety-infection-control",
    stem: "The cold chain manager at a polyclinic discovers that the main vaccine refrigerator door was left slightly ajar overnight, and the 30-day temperature logging device records that internal temperatures dropped to -2 °C for several hours. Before discarding or administering vaccines, which test should the nurse perform to detect freeze-damage in aluminium-adsorbed vaccines (such as DTP-HepB-Hib pentavalent and Tetanus-diphtheria)?",
    choices: [
      {
        id: "a",
        text: "The Shake Test",
      },
      {
        id: "b",
        text: "The Litmus Acidity Strip Test",
      },
      {
        id: "c",
        text: "The Bacterial Culture Plating Test",
      },
      {
        id: "d",
        text: "The Specific Gravity Urinometer Test",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Aluminium-adsorbed vaccines (such as DTP-HepB-Hib pentavalent, Tetanus-diphtheria/Td, and Hepatitis B) are irreversibly damaged when frozen. Freezing breaks the antigen-adjuvant lattice, causing the aluminium to form heavy, agglomerated granules that precipitate rapidly and lose immunogenicity while increasing local reactogenicity. The WHO Shake Test compares a suspected frozen vial with a known deliberately frozen control vial: if the test vial sediments as fast as or faster than the frozen control (clearing within 15–30 minutes), the vaccine has been freeze-damaged and must be discarded.",
    strategy: "Vaccine cold chain safety: The Shake Test is the validated WHO method to detect irreversible freeze damage in aluminium-adsorbed vaccines.",
    difficulty: "easy",
    tags: ["communicable-diseases", "cold-chain", "shake-test", "vaccines", "epi"],
    isFree: true,
  },
];
