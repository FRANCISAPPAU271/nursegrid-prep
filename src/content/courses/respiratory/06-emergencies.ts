import type { CourseModule } from "../types";

export const emergencies: CourseModule = {
  slug: "respiratory-emergencies",
  title: "Respiratory emergencies",
  summary: "The conditions where minutes decide the outcome: pulmonary embolism, simple and tension pneumothorax, acute respiratory failure, the choking adult, child and infant, and anaphylaxis.",
  lessons: [
    {
      slug: "pulmonary-embolism-and-pneumothorax",
      title: "Pulmonary embolism and pneumothorax",
      minutes: 15,
      objectives: [
        "Identify patients at risk of venous thromboembolism and recognise pulmonary embolism from an unexplained change in observations.",
        "Describe diagnosis, anticoagulation and nursing care for pulmonary embolism, and prevent VTE in every admitted patient.",
        "Differentiate simple from tension pneumothorax and respond to tension as the emergency it is.",
        "Prepare for and assist with needle decompression and chest drain insertion.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Pulmonary embolism: the clot that travels",
          paragraphs: [
            "A pulmonary embolism is a blood clot — almost always from a <strong>deep vein thrombosis</strong> of the leg or pelvis — that breaks off, passes through the right heart and lodges in the pulmonary arteries. The blocked segment is ventilated but not perfused, so oxygen falls; a large clot obstructs the right ventricle and the patient collapses with obstructive shock. It is a leading cause of preventable hospital death and of maternal death in the weeks after delivery.",
            "<strong>Virchow's triad</strong> explains the risk: <em>stasis</em> (immobility, surgery, long journeys, paralysis, heart failure, obesity), <em>vessel injury</em> (surgery, trauma, cannulae, previous DVT) and <em>hypercoagulability</em> (pregnancy and the six weeks after, combined oral contraceptive, cancer, sepsis, dehydration, sickle cell disease, nephrotic syndrome, inherited thrombophilia).",
          ],
        },
        {
          type: "list",
          heading: "Recognising and confirming PE",
          items: [
            "Sudden breathlessness, pleuritic chest pain, cough, haemoptysis, tachycardia, tachypnoea, a low SpO2 that does not fully correct with oxygen, syncope or collapse — and often <strong>only</strong> an unexplained tachycardia and anxiety in a post-operative or post-partum patient. Look at the legs for a swollen, warm, tender calf. A <strong>clear chest X-ray in a hypoxic breathless patient</strong> is PE until proven otherwise.",
            "Massive PE: hypotension (systolic below 90), raised JVP, cold peripheries, pre-arrest — call the emergency team.",
            "Investigations: ECG (sinus tachycardia is the commonest finding; S1Q3T3 and right heart strain are classic but rare), blood gas (low PaO2, low PaCO2 from hyperventilation), D-dimer (useful only to <em>rule out</em> in low-probability patients — it is raised by surgery, pregnancy, infection and age), <strong>CT pulmonary angiogram</strong> is the confirming test; ventilation-perfusion scan in pregnancy or renal impairment; leg Doppler ultrasound for DVT; echocardiogram for right-heart strain when the patient is too unstable to move.",
            "Wells score for clinical probability combines signs of DVT, heart rate above 100, immobilisation or surgery within four weeks, previous VTE, haemoptysis, cancer, and 'PE is the most likely diagnosis'.",
          ],
        },
        {
          type: "list",
          heading: "Treatment and nursing care of PE",
          items: [
            "<strong>Oxygen</strong> to 94–98%, sit up if blood pressure allows, IV access, monitoring, analgesia (avoid NSAIDs once anticoagulated), reassurance — these patients are frightened.",
            "<strong>Anticoagulation</strong> immediately when PE is suspected and bleeding risk allows, not after the scan: low-molecular-weight heparin (enoxaparin 1 mg/kg twice daily or 1.5 mg/kg once daily, subcutaneous, in the abdominal fat, do not expel the air bubble or rub the site) or unfractionated heparin infusion monitored by APTT when renal failure or a high bleeding risk makes quick reversal important. Then a direct oral anticoagulant (rivaroxaban, apixaban) or warfarin overlapping with heparin for at least five days until the INR is 2–3 on two consecutive days. Duration: at least three months; longer or lifelong if unprovoked or recurrent. In pregnancy LMWH throughout — warfarin crosses the placenta.",
            "<strong>Thrombolysis</strong> (alteplase or streptokinase) for massive PE with hypotension; surgical or catheter embolectomy if thrombolysis is contraindicated or fails. Nursing: bleeding watch (gums, puncture sites, urine, stool, neurological change), no intramuscular injections, pressure on puncture sites for 10 minutes.",
            "<strong>Bleeding precautions on any anticoagulant:</strong> soft toothbrush, electric razor, report black stools and haematuria, no aspirin or NSAIDs without advice, carry an alert card. Teach warfarin patients about INR monitoring, consistent vitamin K intake and the many drug interactions (antibiotics, antifungals, herbal preparations); heparin patients about platelet counts (heparin-induced thrombocytopenia).",
            "<strong>Prevention is nursing work:</strong> VTE risk assessment on every admission; early mobilisation; hydration; leg exercises hourly in bed; graduated compression stockings fitted correctly (measure, no wrinkles, not in peripheral arterial disease); intermittent pneumatic compression in theatre and ICU; prophylactic LMWH as prescribed; post-partum women and post-operative patients taught the symptoms of DVT and PE before discharge; stop the combined pill four weeks before major surgery.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-EMG-0073.svg",
          alt: "Triage cards that must be recognised in seconds, including the tension pneumothorax with hypotension and distended neck veins",
          caption: "Tension pneumothorax is a clinical diagnosis. Do not wait for a chest X-ray.",
        },
        {
          type: "table",
          heading: "Pneumothorax: simple versus tension",
          columns: ["Feature", "Simple pneumothorax", "Tension pneumothorax"],
          rows: [
            ["What has happened", "Air has entered the pleural space and the lung has partly collapsed; the pressure equalises", "A one-way valve lets air in with each breath but not out; pressure rises, pushes the mediastinum across, kinks the great veins, and cardiac output collapses"],
            ["Who", "Spontaneous — tall thin young men, smokers; secondary — COPD, asthma, TB, pneumocystis, cystic fibrosis; traumatic — rib fractures, stab wounds; iatrogenic — central lines, pleural tap, ventilation, CPR", "Any pneumothorax, especially with positive-pressure ventilation, trauma, or a clamped or blocked chest drain"],
            ["Signs", "Sudden pleuritic pain and breathlessness, reduced expansion, hyper-resonant percussion, absent breath sounds on that side; may be mild", "The same plus severe distress, <strong>hypotension, tachycardia, distended neck veins, trachea deviated away</strong> from the affected side, cyanosis, falling consciousness — then cardiac arrest (PEA)"],
            ["Diagnosis", "Chest X-ray (expiratory film), ultrasound", "<strong>Clinical</strong> — never delay for an X-ray"],
            ["Treatment", "Small and asymptomatic: observe and repeat X-ray; larger or symptomatic: needle aspiration or a small-bore chest drain; high-flow oxygen speeds absorption; no air travel or diving until resolved and cleared", "<strong>Immediate needle decompression</strong> — large-bore cannula (14–16 G) in the second intercostal space mid-clavicular line or the fifth intercostal space anterior axillary line, just above the rib, with a hiss of air — followed by a chest drain. High-flow oxygen, call the emergency team"],
            ["Open (sucking) chest wound", "", "Cover with an occlusive dressing <strong>taped on three sides</strong> so air escapes but cannot enter; then a chest drain away from the wound"],
          ],
        },
        {
          type: "list",
          heading: "Nursing the patient with a pneumothorax",
          items: [
            "Upright, high-flow oxygen, continuous SpO2 and observations, analgesia so the patient can breathe deeply, prepare the chest drain set and underwater seal (see Module 5), reassure.",
            "After drain insertion: swinging and bubbling checks, bottle below the chest, no clamping of a bubbling drain, X-ray to confirm position and re-expansion.",
            "On a ventilator or with NIV: sudden desaturation, rising airway pressures and hypotension mean tension until proven otherwise.",
            "Discharge teaching: stop smoking (recurrence falls sharply), return immediately for recurrence of pain or breathlessness, no flying until cleared (usually 1–2 weeks after full resolution on X-ray) and no scuba diving ever after a spontaneous pneumothorax unless surgically treated.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Two patterns to recognise in seconds",
          body: "Post-operative or post-partum patient, sudden breathlessness, tachycardia, pleuritic pain, clear chest, swollen calf → PE: oxygen, heparin now, CT angiogram. Hypotension, distended neck veins, trachea pushed away, silent hyper-resonant side → tension pneumothorax: needle in the second intercostal space mid-clavicular line, then a drain — no X-ray first.",
        },
      ],
      keyPoints: [
        "PE comes from DVT: stasis, vessel injury and hypercoagulability (surgery, immobility, pregnancy, the pill, cancer).",
        "Unexplained tachycardia, breathlessness and hypoxia with a clear chest X-ray is PE until proven otherwise; anticoagulate on suspicion, confirm with CT pulmonary angiogram.",
        "VTE prevention is nursing: risk assessment, mobilisation, hydration, stockings, prophylactic heparin.",
        "Tension pneumothorax — hypotension, distended neck veins, deviated trachea — is diagnosed clinically and decompressed with a needle before any X-ray.",
        "Open chest wound: occlusive dressing taped on three sides; every pneumothorax gets high-flow oxygen and most get a drain.",
      ],
      quiz: {
        keywords: ["pulmonary embol", "pneumothorax", "deep vein", "dvt", "thrombo", "anticoagul", "heparin", "enoxaparin", "warfarin", "inr", "chest drain", "needle decompression", "pleuritic", "compression stocking", "virchow"],
        categories: ["med-surg"],
        questionIds: ["NG-MOD-RESP-017"],
      },
    },
    {
      slug: "respiratory-failure-choking-and-anaphylaxis",
      title: "Respiratory failure, choking and anaphylaxis",
      minutes: 16,
      objectives: [
        "Differentiate type 1 and type 2 respiratory failure and explain the role of oxygen, NIV and intubation in each.",
        "Relieve choking in a conscious adult, child and infant and act when the victim becomes unconscious.",
        "Recognise anaphylaxis and give intramuscular adrenaline at the correct dose for age.",
        "Support the airway and breathing in the collapsed patient until the resuscitation team arrives.",
      ],
      blocks: [
        {
          type: "table",
          heading: "Acute respiratory failure",
          columns: ["", "Type 1 (hypoxaemic)", "Type 2 (hypercapnic)"],
          rows: [
            ["Blood gas", "PaO2 below 8 kPa (60 mmHg) with normal or low PaCO2", "PaCO2 above 6.5 kPa (50 mmHg) — usually with PaO2 below 8 kPa and a falling pH if acute"],
            ["Problem", "Oxygen cannot cross — ventilation-perfusion mismatch or shunt", "The pump is failing — not enough air moves in and out"],
            ["Causes", "Pneumonia, pulmonary oedema, ARDS (sepsis, aspiration, trauma, pancreatitis, transfusion), PE, pneumothorax, asthma early, pulmonary fibrosis, severe anaemia and altitude worsen it", "COPD exacerbation, severe asthma late, opioid and sedative overdose, neuromuscular disease (Guillain–Barré, myasthenia, polio, tetanus, snake bite), chest-wall injury, obesity hypoventilation, upper-airway obstruction, exhaustion from any cause"],
            ["Bedside", "Agitation, tachypnoea, tachycardia, cyanosis, accessory muscles", "Drowsiness, headache, flapping tremor, bounding pulse, warm hands, slow or shallow breathing, confusion to coma"],
            ["Treatment", "High-concentration oxygen, treat the cause, CPAP for pulmonary oedema, high-flow nasal oxygen, intubation and ventilation if refractory; prone positioning in ARDS", "Controlled oxygen, reverse the cause (naloxone, bronchodilators, clear the airway), <strong>BiPAP</strong> if pH below 7.35, intubation if pH below 7.25 or falling consciousness or failing NIV"],
            ["Nurse watches", "Respiratory rate, SpO2, work of breathing, consciousness, response to oxygen", "Consciousness, respiratory rate and depth, repeat gases 1 hour after any change, mask fit and skin on NIV, never sedate"],
          ],
        },
        {
          type: "list",
          heading: "ARDS in a few lines",
          items: [
            "Acute respiratory distress syndrome is diffuse inflammatory lung injury within a week of an insult — sepsis, pneumonia, aspiration, major trauma, pancreatitis, massive transfusion, near-drowning, malaria. The alveoli leak protein-rich fluid; the lungs become stiff and white on X-ray on both sides, and hypoxia is refractory to oxygen without a cardiac cause.",
            "Management is supportive in intensive care: lung-protective ventilation with small tidal volumes (6 mL/kg) and PEEP, <strong>prone positioning</strong> for 12–16 hours a day, conservative fluids, treat the cause, prevent VAP (head up 30°, oral care, sedation holds), nutrition, pressure-area and eye care, and family communication. Mortality remains high.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-EMG-0061.svg",
          alt: "DRSABCD: danger, response, send for help, airway, breathing, CPR, defibrillation",
          caption: "Every collapse starts the same way. Check danger and response, shout for help, then airway and breathing before anything else.",
        },
        {
          type: "table",
          heading: "Choking (foreign-body airway obstruction)",
          columns: ["Victim", "Mild obstruction (can cough, speak, breathe)", "Severe obstruction (cannot cough, speak or breathe; silent, clutching the throat, going blue)", "Becomes unconscious"],
          rows: [
            ["Adult and child over 1 year", "Encourage coughing; do not slap the back; stay with them and watch", "Shout for help. <strong>5 back blows</strong> between the shoulder blades with the heel of the hand, leaning them forward, then <strong>5 abdominal thrusts</strong> (fist above the navel, below the sternum, sharp inward and upward pull); alternate 5 and 5 until relieved. Chest thrusts instead of abdominal thrusts in late pregnancy and marked obesity", "Lower to the floor, call the resuscitation team, start <strong>CPR</strong> with 30 compressions; look in the mouth before each set of breaths and remove only what you can see — <strong>no blind finger sweeps</strong>; continue until the object is expelled or help takes over"],
            ["Infant under 1 year", "Watch; allow coughing", "Lay the infant face down along your forearm with the head lower than the body, supporting the jaw: <strong>5 back blows</strong> between the shoulder blades, turn over, <strong>5 chest thrusts</strong> with two fingers on the lower sternum (sharper and slower than CPR compressions). <strong>Never abdominal thrusts in an infant</strong> — they rupture the liver", "Call for help, start infant CPR (15:2 for two rescuers, 30:2 alone), look in the mouth before breaths, no blind sweeps"],
            ["Afterwards", "", "", "Anyone who received abdominal thrusts, or has persistent cough, dysphagia or the sensation of something still in the throat, needs medical review — internal injury or a retained fragment"],
          ],
        },
        {
          type: "text",
          heading: "Anaphylaxis",
          paragraphs: [
            "Anaphylaxis is a rapidly developing, life-threatening allergic reaction involving the <strong>airway</strong> (swelling of the lips, tongue and throat, hoarseness, stridor), <strong>breathing</strong> (wheeze, tachypnoea, cyanosis, exhaustion) or <strong>circulation</strong> (pale, clammy, hypotension, tachycardia, collapse, loss of consciousness), usually with skin or mucosal changes (urticaria, flushing, angio-oedema) — although in up to one in five cases there is no rash. Common triggers in practice: antibiotics (penicillins, cephalosporins), NSAIDs, anaesthetic drugs, IV contrast, blood products, antivenom, vaccines (rare), latex, bee and wasp stings, and foods (groundnuts, fish, shellfish, eggs, milk). Onset is within minutes of an injection and up to an hour or two after food.",
          ],
        },
        {
          type: "list",
          heading: "Anaphylaxis — what to do, in order",
          style: "steps",
          items: [
            "<strong>Stop the trigger</strong> — switch off the infusion, remove the sting; shout for help and bring the emergency trolley.",
            "<strong>Position:</strong> lie flat with legs raised if circulation is the problem; sitting up if breathing is the main problem; recovery position if unconscious and breathing; <strong>never stand the patient up</strong> — sudden death on standing is well described. Pregnant women lie on the left side.",
            "<strong>Adrenaline 1:1000 (1 mg/mL) intramuscularly</strong> into the anterolateral thigh: adults and children over 12 years <strong>0.5 mg (0.5 mL)</strong>; 6–12 years <strong>0.3 mg (0.3 mL)</strong>; 6 months to 6 years <strong>0.15 mg (0.15 mL)</strong>; under 6 months 0.1–0.15 mg. <strong>Repeat after 5 minutes</strong> if there is no improvement. IV adrenaline is for experts with monitoring only — never give the 1:1000 strength intravenously.",
            "<strong>High-flow oxygen</strong> 15 L/min via reservoir mask; monitor SpO2, ECG and blood pressure.",
            "<strong>IV fluid bolus</strong> for hypotension: 500–1000 mL of crystalloid in an adult, 10 mL/kg in a child, repeated as needed.",
            "Nebulised salbutamol for persistent wheeze; nebulised adrenaline for stridor; prepare for a difficult intubation or surgical airway if the throat is closing — call the anaesthetist early.",
            "Antihistamine (chlorphenamine) and hydrocortisone are <strong>second-line</strong> — they do not treat the airway or shock and must never delay adrenaline; steroids may reduce protracted or biphasic reactions.",
            "Take a <strong>mast-cell tryptase</strong> blood sample as soon as practical and at 1–2 hours if the service exists; observe for <strong>at least 6–12 hours</strong> (24 hours if severe, if adrenaline was needed twice, if asthma, or if presentation was at night or far from help) because a second, biphasic reaction can occur.",
            "Before discharge: document the trigger clearly in the notes, on an allergy band and in the patient's own record; teach avoidance; prescribe and train the patient and family to use an adrenaline auto-injector or pre-drawn adrenaline where available (two doses, carried always); refer to an allergy clinic; medical alert identification.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Drug-safety habits that prevent anaphylaxis deaths",
          body: "Ask about allergies before every drug and document the reaction, not just the drug. Check the allergy band. Give the first dose of any IV antibiotic, contrast, blood or antivenom with the emergency trolley within reach and stay with the patient for the first 15 minutes. Know where the adrenaline is kept and that 1:1000 is intramuscular, 1:10 000 is the cardiac-arrest preparation.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Numbers for the exam and for life",
          body: "Choking adult: 5 back blows, 5 abdominal thrusts; infant: 5 back blows, 5 chest thrusts, never abdominal. Anaphylaxis: adrenaline 1:1000 IM — 0.5 mg adult, 0.3 mg 6–12 years, 0.15 mg 6 months–6 years — repeat at 5 minutes; lie flat, oxygen, fluids; antihistamine and steroid are second-line.",
        },
      ],
      keyPoints: [
        "Type 1 failure is low oxygen with normal or low CO2 — give oxygen and treat the cause; type 2 is high CO2 — improve ventilation, controlled oxygen, BiPAP if pH is below 7.35.",
        "Drowsiness in a breathless patient means hypercapnia or exhaustion — never sedate, escalate.",
        "Severe choking: 5 back blows then 5 abdominal thrusts (chest thrusts in infants and late pregnancy); unconscious → CPR, no blind finger sweeps.",
        "Anaphylaxis: stop the trigger, lie flat, adrenaline 1:1000 IM in the thigh (0.5 / 0.3 / 0.15 mg by age), repeat at 5 minutes, oxygen, fluids; antihistamines and steroids are second-line.",
        "Observe for a biphasic reaction, document the allergy and discharge with adrenaline and a plan.",
      ],
      quiz: {
        keywords: ["respiratory failure", "anaphyla", "adrenaline", "epinephrine", "choking", "back blows", "abdominal thrust", "chest thrust", "heimlich", "foreign body", "stridor", "angioedema", "urticaria", "allerg", "bag valve mask", "non invasive ventilation"],
        categories: ["med-surg"],
        questionIds: ["NG-MOD-RESP-018"],
      },
    },
  ],
};
