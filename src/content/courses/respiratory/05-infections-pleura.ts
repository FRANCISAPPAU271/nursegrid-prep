import type { CourseModule } from "../types";

export const infectionsAndPleura: CourseModule = {
  slug: "infections-and-pleural-disease",
  title: "Pneumonia, tuberculosis and the pleura",
  summary: "The infections that fill Ghanaian medical wards — pneumonia and tuberculosis — with the infection-control measures that protect the nurse, and the pleural disorders that need a chest drain.",
  lessons: [
    {
      slug: "pneumonia",
      title: "Pneumonia",
      minutes: 13,
      objectives: [
        "Classify pneumonia by where it was acquired and explain why that changes the organism and the antibiotic.",
        "Assess severity with CURB-65 and recognise the complications.",
        "Plan nursing care that clears secretions, supports oxygenation and prevents spread.",
        "Prevent hospital-acquired and aspiration pneumonia in your own patients.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Infection of the alveoli",
          paragraphs: [
            "Pneumonia is infection of the lung tissue: the alveoli fill with inflammatory fluid and pus (consolidation), so the affected lobe is ventilated poorly but still perfused — a shunt — and the patient becomes hypoxic. It remains a leading cause of death in children under five and in older adults in Ghana, and the commonest reason for an avoidable death after surgery.",
            "Where it was caught predicts the organism. <strong>Community-acquired</strong> — <em>Streptococcus pneumoniae</em> above all, <em>Haemophilus influenzae</em>, atypicals (<em>Mycoplasma</em>, <em>Legionella</em>), viruses including influenza and COVID-19, and in people with HIV <em>Pneumocystis jirovecii</em> and TB. <strong>Hospital-acquired</strong> (48 hours or more after admission) — Gram-negatives (<em>Klebsiella</em>, <em>Pseudomonas</em>, <em>E. coli</em>) and <em>Staphylococcus aureus</em>, often resistant. <strong>Aspiration</strong> — mixed oral anaerobes after vomiting, reduced consciousness, stroke, seizures, alcohol or a poor swallow, typically in the right lower lobe. <strong>Ventilator-associated</strong> in intensive care.",
          ],
        },
        {
          type: "list",
          heading: "Presentation and assessment",
          items: [
            "Fever, rigors, productive cough (rusty sputum with pneumococcus), pleuritic chest pain, breathlessness, tachypnoea, tachycardia; in older adults often just <strong>confusion, falls or going off food</strong> without fever.",
            "Signs: reduced expansion, dull percussion, bronchial breathing, coarse crackles and increased vocal fremitus over the consolidated lobe; SpO2 falls.",
            "Investigations: chest X-ray (consolidation; also look for effusion and cavities), full blood count, urea and electrolytes, CRP, blood cultures and sputum culture <strong>before antibiotics</strong>, HIV test, blood gas if SpO2 is below 92%, TB tests if cough is prolonged or the picture does not fit.",
            "<strong>CURB-65</strong> scores one point each for <strong>C</strong>onfusion, <strong>U</strong>rea above 7 mmol/L, <strong>R</strong>espiratory rate 30 or more, <strong>B</strong>lood pressure below 90 systolic or 60 diastolic, and age <strong>65</strong> or over: 0–1 may be treated at home, 2 needs admission, 3 or more means severe pneumonia and consideration for high-dependency care. A nurse can calculate CRB-65 without the blood test.",
            "In children use the IMCI classification: fast breathing = pneumonia (oral amoxicillin); chest indrawing or any danger sign = severe pneumonia (admit, oxygen, injectable antibiotics).",
          ],
        },
        {
          type: "list",
          heading: "Treatment and nursing care",
          items: [
            "<strong>Antibiotics within the first hour</strong> of diagnosis, per local guidelines: amoxicillin (with a macrolide such as azithromycin if atypical infection is suspected) for mild community-acquired pneumonia; IV ceftriaxone or co-amoxiclav plus a macrolide for severe; broader cover with anti-pseudomonal agents for hospital-acquired; metronidazole added for aspiration; co-trimoxazole in high dose for <em>Pneumocystis</em>. Switch to oral when improving and complete the course (usually 5–7 days).",
            "<strong>Oxygen</strong> to 94–98% (88–92% if a retainer); upright position, good lung down if unilateral; monitor respiratory rate, SpO2, temperature, blood pressure and consciousness at least four-hourly and more often if CURB-65 is 2 or more.",
            "<strong>Fluids</strong> — oral if able, IV if septic or not drinking; watch for dehydration from fever and tachypnoea, and for overload in the elderly and in heart failure. Nutrition: small frequent meals.",
            "<strong>Airway clearance:</strong> hydration, humidified oxygen, deep breathing and coughing with pillow support of the painful side, huffing, incentive spirometry, chest physiotherapy if secretions are retained, early mobilisation.",
            "<strong>Pain and fever:</strong> paracetamol; pleuritic pain must be controlled or the patient will not breathe deeply; avoid cough suppressants in productive cough.",
            "<strong>Infection control:</strong> standard precautions; droplet precautions (surgical mask within one metre, single room or cohort) for influenza, COVID-19 and suspected meningococcal disease; airborne precautions if TB is possible. Hand hygiene before and after every contact; cough etiquette; sputum pots covered and disposed of as infectious waste.",
            "<strong>Watch for complications:</strong> sepsis and septic shock, respiratory failure, parapneumonic effusion and <strong>empyema</strong> (persistent fever, rising CRP, stony dullness — needs drainage), lung abscess, pericarditis, and failure to improve at 48–72 hours, which means the wrong drug, the wrong diagnosis (TB, PE, cancer) or a collection to drain.",
          ],
        },
        {
          type: "list",
          heading: "Prevention — the nurse's part",
          items: [
            "Post-operative and immobile patients: sit up, mobilise early, hourly deep breathing and coughing, incentive spirometry, adequate analgesia, hydration.",
            "Aspiration risk: swallow screen before oral intake after stroke; upright 30–45° for feeding and for 30 minutes afterwards; nasogastric position confirmed by pH before every feed; head of bed at 30° for ventilated and tube-fed patients; oral care with chlorhexidine or toothbrushing at least twice daily; avoid over-sedation; treat vomiting promptly.",
            "Vaccination: pneumococcal conjugate vaccine and Hib in the EPI schedule; pneumococcal and annual influenza vaccines for older adults, sickle cell disease, HIV, chronic lung, heart and kidney disease and diabetes; measles vaccination prevents measles pneumonia.",
            "Reduce indoor smoke, encourage exclusive breastfeeding for six months, treat malnutrition and HIV, and give co-trimoxazole prophylaxis to eligible people living with HIV.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "CURB-65 and the first hour",
          body: "Confusion, Urea above 7, Respiratory rate 30 or more, Blood pressure below 90/60, age 65 or over — score 2 admits, 3 is severe. Cultures first, antibiotics within the hour, oxygen to target, sit up, and make the patient cough.",
        },
      ],
      keyPoints: [
        "Pneumonia is consolidation of the alveoli; where it was acquired predicts the organism and the antibiotic.",
        "Older adults may present only with confusion or falls; children are classified by breathing rate and chest indrawing.",
        "CURB-65 guides severity; cultures before antibiotics, antibiotics within an hour.",
        "Nursing: oxygen to target, upright, hydration, deep breathing and coughing, pain control, droplet or airborne precautions as indicated.",
        "Failure to improve by 72 hours means wrong drug, wrong diagnosis or a collection; prevent aspiration with swallow screening, 30° head elevation and oral care.",
      ],
      quiz: {
        keywords: ["pneumonia", "consolidation", "curb", "aspiration", "sputum", "crackles", "droplet", "chest infection", "pneumococcal", "deep breathing", "incentive spirom", "fast breathing", "chest indrawing"],
      },
    },
    {
      slug: "tuberculosis",
      title: "Tuberculosis: find it, treat it, finish it",
      minutes: 16,
      objectives: [
        "Screen for TB using the four symptoms and know who must be screened at every visit.",
        "Describe diagnosis by GeneXpert, microscopy and chest X-ray, and the standard six-month regimen.",
        "Monitor for the side effects of each anti-TB drug and support adherence to completion.",
        "Apply airborne precautions that protect staff and other patients.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The disease that is found by asking",
          paragraphs: [
            "<em>Mycobacterium tuberculosis</em> spreads in airborne droplet nuclei that hang in the air for hours after a cough, sneeze or song in a poorly ventilated room. Most infected people contain it as <strong>latent TB</strong>; about one in ten will develop active disease in their lifetime, far more if they have HIV, diabetes, malnutrition, silicosis, are very young or old, smoke, or take steroids or chemotherapy. Pulmonary TB is the infectious form; TB can also attack lymph nodes, pleura, spine, meninges, kidneys, abdomen and the whole body (miliary).",
            "Ghana's National TB Programme offers diagnosis and treatment <strong>free of charge</strong>. The nurse's task is to <strong>find</strong> the cases hiding on the ward and in the clinic, <strong>start</strong> treatment the same week, and make sure the patient <strong>finishes</strong> six months of tablets after feeling well at week three.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-IMD-0892.svg",
          alt: "Tuberculosis: screen for four symptoms, GeneXpert first, two-month intensive phase then four-month continuation phase",
          caption: "Cough for two weeks or more is the trigger; GeneXpert is the first test; the patient feels well long before the bacilli are dead.",
        },
        {
          type: "list",
          heading: "Screening and diagnosis",
          items: [
            "Ask every patient about the four symptoms: <strong>cough (of any duration in HIV; two weeks or more otherwise), fever, night sweats and weight loss</strong>; add haemoptysis, chest pain, loss of appetite and a TB contact. Screen <strong>every person living with HIV at every visit</strong>, every household contact of a case, prisoners, miners, health workers and people with diabetes.",
            "<strong>GeneXpert MTB/RIF</strong> on sputum is the first test — it detects TB and rifampicin resistance within two hours. Sputum smear microscopy for acid-fast bacilli (two samples: spot and early morning) and culture where available. Chest X-ray shows upper-lobe infiltrates and cavities, but cannot confirm TB alone. Urine LAM for very ill patients with HIV. Tuberculin skin test and IGRA detect infection, not disease.",
            "Collect sputum <strong>outdoors or in a well-ventilated space</strong>, never in a closed toilet; rinse the mouth, deep cough, 3–5 mL, sterile pot, label and send the same day. Test every TB patient for HIV and every HIV patient for TB.",
            "Children: TB is often smear-negative; diagnosis rests on contact history, failure to thrive, prolonged fever and cough, X-ray and gastric aspirates or induced sputum. Give BCG at birth.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-IPC-0060.svg",
          alt: "The standard new-case TB regimen: two-month intensive phase with rifampicin, isoniazid, pyrazinamide and ethambutol, then four-month continuation with rifampicin and isoniazid",
          caption: "2HRZE / 4HR — six months, fixed-dose combination tablets, weight-banded, taken daily and supervised.",
        },
        {
          type: "table",
          heading: "The drugs and what to watch",
          columns: ["Drug", "Main adverse effects", "Nursing points"],
          rows: [
            ["Rifampicin (R)", "Orange-red urine, tears, sweat and contact lenses (harmless — warn the patient); hepatitis; flu-like syndrome; thrombocytopenia", "Powerful enzyme inducer: makes <strong>oral contraceptives</strong>, warfarin, some antiretrovirals (nevirapine, protease inhibitors), steroids and anticonvulsants less effective — advise additional contraception and liaise with the ART clinic (dolutegravir dose is doubled)"],
            ["Isoniazid (H)", "Peripheral neuropathy (burning feet, numbness), hepatitis, rash, rarely psychosis or seizures", "Give <strong>pyridoxine (vitamin B6) 10–25 mg daily</strong> to prevent neuropathy, especially in HIV, diabetes, pregnancy, malnutrition and alcohol use"],
            ["Pyrazinamide (Z)", "Hepatitis (the commonest cause of drug-induced liver injury in the regimen), hyperuricaemia and joint pains, rash", "Report jaundice, vomiting or right upper quadrant pain the same day; joint pain usually responds to paracetamol or an NSAID"],
            ["Ethambutol (E)", "Optic neuritis — reduced visual acuity and <strong>red-green colour blindness</strong>", "Check vision and colour discrimination at baseline and ask at every visit; stop and report any visual change; avoid in young children who cannot report vision"],
            ["Streptomycin and other injectables (now rarely used; some drug-resistant regimens)", "Ototoxicity (deafness, dizziness), nephrotoxicity, injection-site pain", "Baseline and monthly hearing and renal function; avoid in pregnancy"],
            ["Drug-resistant TB (bedaquiline, linezolid, levofloxacin, clofazimine…)", "QT prolongation, peripheral neuropathy, anaemia, skin discolouration", "Managed by the programme with ECG and blood monitoring; longer regimens; adherence support is everything"],
          ],
        },
        {
          type: "list",
          heading: "Treatment and adherence support",
          items: [
            "<strong>New cases: 2HRZE/4HR</strong> — two months of four drugs (intensive phase), then four months of rifampicin and isoniazid (continuation), as fixed-dose combination tablets dosed by weight band, taken daily on an empty stomach at the same time. TB meningitis and bone TB are treated for 9–12 months; drug-resistant TB for 6–18 months with different drugs.",
            "<strong>Directly observed treatment</strong> by a health worker or trained community treatment supporter, with a treatment card, is the programme standard; the nurse identifies the supporter, teaches them, and traces any patient who misses doses within days. Phone reminders, enablers for transport and nutritional support where available.",
            "<strong>Monitor:</strong> weight monthly (adjust the dose), sputum smear at the end of month 2, month 5 and month 6 to confirm conversion and cure, liver symptoms, vision, neuropathy, and the patient's understanding. Baseline liver function and HIV test; glucose check.",
            "<strong>Teach:</strong> why six months when you feel well after three weeks (the dormant bacilli die slowly; stopping early breeds resistance that is far harder and longer to treat); orange urine is expected; take the tablets even when nauseated — try at bedtime; no alcohol; report jaundice, visual change, burning feet or rash; contraception while on rifampicin; cover the cough; sleep in a ventilated room and, if smear-positive, apart from infants for the first two weeks; bring household contacts for screening (children under five and people with HIV get isoniazid preventive therapy).",
            "<strong>TB and HIV:</strong> start antiretroviral therapy within two weeks of starting TB treatment (regardless of CD4), with co-trimoxazole prophylaxis; watch for immune reconstitution syndrome (worsening symptoms after starting ART). TB is the leading cause of death in people living with HIV.",
            "Nutrition, stigma and poverty are the barriers to cure: a patient who cannot afford transport to collect tablets, or who hides the diagnosis from the family, will default. Ask, and link to social support.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-IPC-0051.svg",
          alt: "Contact, droplet and airborne precautions, all built on standard precautions for every patient",
          caption: "TB needs airborne precautions: an N95 respirator on the nurse, a surgical mask on the patient, open windows or negative pressure, and the door closed.",
        },
        {
          type: "list",
          heading: "Infection control for TB",
          items: [
            "<strong>Administrative:</strong> screen and separate coughing patients at triage ('cough corner'), fast-track them, collect sputum outside, and treat promptly — <strong>effective treatment is the most powerful infection-control measure</strong>; a smear-positive patient is usually non-infectious after two weeks of effective therapy.",
            "<strong>Environmental:</strong> natural ventilation — open windows on opposite walls, fans directing air outwards, nurse TB patients in well-ventilated rooms or outdoors by day; negative-pressure isolation and ultraviolet lights where available; never nurse a suspected TB case in a closed air-conditioned bay.",
            "<strong>Personal protection:</strong> a fit-checked <strong>N95 or FFP2 respirator</strong> (not a surgical mask) for staff entering the room, especially during sputum induction, suctioning, nebulisation and bronchoscopy; a <strong>surgical mask on the patient</strong> whenever they leave the room; cough etiquette; hand hygiene. Visitors limited and masked; children and pregnant women kept away during the infectious period.",
            "Health workers: annual symptom screening, know your HIV status, prompt evaluation of any cough of two weeks.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "One side effect per drug",
          body: "Rifampicin — orange urine and failed contraception. Isoniazid — neuropathy, so give pyridoxine. Pyrazinamide — liver and gout. Ethambutol — eyes. Streptomycin — ears and kidneys. Cough two weeks → GeneXpert. Six months, supervised, free.",
        },
      ],
      keyPoints: [
        "Screen everyone for cough, fever, night sweats and weight loss; every HIV patient at every visit; GeneXpert is the first test.",
        "Standard regimen 2HRZE/4HR for six months, weight-banded fixed-dose tablets, directly observed, free under the national programme.",
        "Rifampicin: orange urine and drug interactions (contraception, ARVs); isoniazid: neuropathy (pyridoxine); pyrazinamide: liver; ethambutol: vision.",
        "Patients feel well by week three — teach why stopping early breeds resistance; trace missed doses within days.",
        "Airborne precautions: N95 on the nurse, surgical mask on the patient, ventilation, sputum collected outdoors; effective treatment ends infectiousness within about two weeks.",
      ],
      quiz: {
        keywords: ["tuberculosis", "isoniazid", "rifampicin", "ethambutol", "pyrazinamide", "sputum", "acid fast", "genexpert", "airborne", "n95", "pyridoxine", "directly observed", "night sweats", "bcg", "haemoptysis"],
      },
    },
    {
      slug: "pleural-disorders-and-chest-drains",
      title: "Pleural effusion, empyema and chest drain care",
      minutes: 14,
      objectives: [
        "Differentiate transudate and exudate effusions and recognise effusion and empyema at the bedside.",
        "Assist safely with thoracentesis and chest drain insertion.",
        "Interpret swinging and bubbling in an underwater seal drain and troubleshoot problems.",
        "Manage accidental disconnection or dislodgement and assist with removal.",
      ],
      blocks: [
        {
          type: "list",
          heading: "Fluid, pus, blood or air in the pleural space",
          items: [
            "<strong>Pleural effusion</strong> — fluid between the pleural layers compresses the lung. <strong>Transudates</strong> (low protein) come from pressure or low albumin: heart failure (usually bilateral), nephrotic syndrome, liver cirrhosis, malnutrition. <strong>Exudates</strong> (high protein, from inflamed or leaking pleura) come from pneumonia, <strong>TB</strong> (the commonest exudate in Ghana), cancer, pulmonary embolism, pancreatitis and autoimmune disease.",
            "<strong>Empyema</strong> is pus in the pleural space, usually complicating pneumonia or TB: persistent swinging fever, rising inflammatory markers, chest pain and toxicity; it must be drained, usually with a chest drain and sometimes surgery, plus prolonged antibiotics.",
            "<strong>Haemothorax</strong> after chest trauma or surgery; <strong>chylothorax</strong> (milky lymph) after thoracic surgery or lymphoma; <strong>pneumothorax</strong> (air) is covered in Module 6.",
            "<strong>Findings:</strong> breathlessness in proportion to the volume, pleuritic pain early, dry cough, reduced expansion, <strong>stony dull percussion</strong>, absent breath sounds and reduced vocal fremitus at the base, trachea pushed away if massive. Chest X-ray shows blunting of the costophrenic angle (about 200 mL or more) or a dense white-out; ultrasound is the best guide for drainage.",
          ],
        },
        {
          type: "list",
          heading: "Thoracentesis (pleural tap) — the nurse's role",
          items: [
            "Consent, explain, check clotting and platelets, and the chest X-ray or ultrasound mark. Position the patient <strong>sitting upright, leaning forward over a bed table with arms on a pillow</strong> so the fluid pools posteriorly and the ribs separate.",
            "Aseptic trolley; local anaesthetic; the needle enters just <strong>above the rib</strong> to avoid the neurovascular bundle beneath it. Ask the patient not to cough or move during the procedure, and to say if they feel faint, dizzy or pain in the shoulder.",
            "Label samples for protein, LDH, glucose, pH, cell count, Gram stain and culture, acid-fast bacilli or GeneXpert, and cytology. Do not drain more than about 1–1.5 L at one sitting — re-expansion pulmonary oedema and hypotension.",
            "Afterwards: observations every 15 minutes for the first hour, watch for breathlessness, cough, chest pain, hypotension or a falling saturation (pneumothorax, bleeding, oedema), check the dressing, and a chest X-ray if symptomatic or as ordered.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-SGY-0738.svg",
          alt: "Underwater seal chest drainage: the tube tip sits 2 cm under sterile water so air leaves the chest and nothing returns, with the nurse's checks for swinging and bubbling",
          caption: "The water is a one-way valve. Swinging means patent; bubbling means air is leaving; no swinging means blocked, kinked or a lung that has re-expanded.",
        },
        {
          type: "table",
          heading: "Reading the drain",
          columns: ["Observation", "What it means", "Action"],
          rows: [
            ["Water level swings (tidals) up on inspiration and down on expiration", "Tube is patent and in the pleural space", "Normal — record it"],
            ["Swinging has stopped", "Blocked or kinked tube, dependent loop full of fluid, or the lung has fully re-expanded", "Check the tubing from chest to bottle, straighten kinks, lift loops to drain, ask the patient to cough and breathe deeply; do not strip or milk the tubing routinely (it creates dangerous negative pressure); if still absent, inform the doctor — may need a chest X-ray"],
            ["Bubbling only on coughing or expiration", "Air still leaving a pneumothorax — expected early", "Record and monitor; it should lessen over days"],
            ["Continuous vigorous bubbling", "Air leak — in the system (loose connection, drain hole outside the chest) or a large bronchopleural leak", "Check every connection and the insertion site; briefly clamp close to the chest only if trained and permitted to localise the leak; inform the doctor"],
            ["No bubbling in a patient who had a pneumothorax", "Leak has sealed, or the tube is blocked", "Correlate with swinging and symptoms; X-ray"],
            ["Bright red blood more than 100–200 mL/hour, or a sudden large drainage", "Haemorrhage", "Inform the doctor immediately; observations; prepare for blood and theatre"],
            ["Patient suddenly breathless, chest pain, tachycardia, trachea shifting, subcutaneous emphysema spreading", "Tension pneumothorax (clamped or blocked drain), drain displaced, or re-expansion oedema", "Unclamp any clamp, sit up, high-flow oxygen, call for help urgently"],
          ],
        },
        {
          type: "list",
          heading: "Caring for the patient with a chest drain",
          items: [
            "Keep the bottle <strong>upright and below the level of the chest</strong> at all times, on the floor or in a stand — lifting it above the chest siphons fluid back into the pleura. Keep the water level 2 cm above the tube tip and top up with sterile water if it evaporates. Secure the tubing with no dependent loops, and the drain with sutures and a firm dressing.",
            "<strong>Two clamps and spare sterile water at the bedside</strong>, but <strong>never clamp a bubbling drain</strong> — the air has nowhere to go and a tension pneumothorax builds. Clamp only briefly when changing the bottle, when ordered before removal as a trial, or when a bottle is accidentally knocked over and the seal is lost, and release at once if the patient becomes breathless.",
            "Mark the fluid level on the bottle with the date and time every shift and more often if draining heavily; record volume, colour and consistency and the presence of swinging and bubbling on the chart. Suction, if prescribed, is low pressure (−10 to −20 cmH2O) and the suction chamber should bubble gently, not boil.",
            "Observations: respiratory rate, SpO2, pulse, blood pressure and pain, four-hourly or more often; inspect the insertion site for infection, bleeding and subcutaneous emphysema (crackling under the skin); keep the dressing dry and intact.",
            "<strong>Pain relief</strong> before physiotherapy and movement; encourage deep breathing, coughing, incentive spirometry and shoulder exercises on the affected side to re-expand the lung and prevent a frozen shoulder; sit up and mobilise with the bottle carried below chest level.",
            "<strong>If the tubing disconnects:</strong> immediately reconnect with a clean connector or place the chest end of the tube in a bottle of sterile water below the chest; replace the system; inform the doctor; X-ray. <strong>If the drain falls out:</strong> cover the wound immediately with a sterile occlusive dressing taped on three sides (so air can leave but not enter) or a gloved hand, stay with the patient, call for help, observe for tension pneumothorax.",
            "<strong>Removal</strong> when drainage is minimal, bubbling has stopped and the X-ray shows re-expansion: give analgesia 30 minutes before; two people — one removes while the other ties the purse-string or applies the occlusive dressing; the patient takes a deep breath and holds it or performs a Valsalva (bears down) at the moment of removal to prevent air being sucked in; occlusive dressing for 48 hours; X-ray afterwards; observe for recurrence.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Chest-drain rules in one breath",
          body: "Bottle below the chest, tube tip 2 cm under water, no loops, no routine clamping, never clamp a bubbling drain, two clamps at the bedside, swinging = patent, continuous bubbling = leak, tube out = occlusive dressing taped on three sides, remove at the end of a held deep breath.",
        },
      ],
      keyPoints: [
        "Effusions are transudates (heart failure, low albumin) or exudates (pneumonia, TB, cancer); stony dullness and absent breath sounds at the base.",
        "For a pleural tap the patient sits forward over a table; the needle passes above the rib; drain no more than 1–1.5 L at once.",
        "Underwater seal: bottle below the chest, swinging means patent, bubbling means air leaving; never clamp a bubbling drain.",
        "Disconnected tube — reconnect or immerse in sterile water; drain out — occlusive dressing taped on three sides; sudden breathlessness — think tension pneumothorax.",
        "Pain control, deep breathing and shoulder exercises re-expand the lung; remove at the end of a held breath with an airtight dressing.",
      ],
      quiz: {
        keywords: ["pleural effusion", "chest drain", "chest tube", "underwater seal", "water seal", "thoracentesis", "pleural tap", "empyema", "pleur", "bubbling", "swinging", "clamp", "stony dull", "occlusive dressing"],
      },
    },
  ],
};
