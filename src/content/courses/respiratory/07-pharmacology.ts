import type { CourseModule } from "../types";

export const pharmacology: CourseModule = {
  slug: "respiratory-pharmacology",
  title: "Respiratory pharmacology and calculations",
  summary: "The respiratory drugs in one table — what each does, the dose range, the side effects to monitor and the teaching point — followed by the calculations nurses actually do: nebuliser doses, adrenaline volumes, aminophylline by weight and how long an oxygen cylinder will last.",
  lessons: [
    {
      slug: "respiratory-drugs-and-safe-monitoring",
      title: "Respiratory drugs, safe monitoring and calculations",
      minutes: 18,
      objectives: [
        "Classify the respiratory drugs by mechanism and state the key nursing consideration for each.",
        "Teach correct inhaler, spacer and nebuliser use and recognise the common errors.",
        "Monitor for the toxicity of theophylline, systemic steroids, magnesium and anti-TB drugs.",
        "Calculate nebuliser volumes, weight-based doses, adrenaline volumes and oxygen cylinder duration without error.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Three things every respiratory drug does",
          paragraphs: [
            "Respiratory drugs either <strong>open the airway</strong> (bronchodilators: beta-2 agonists, antimuscarinics, methylxanthines, magnesium), <strong>calm the inflammation</strong> (inhaled and systemic corticosteroids, leukotriene antagonists) or <strong>clear or treat what is in the lung</strong> (mucolytics, antibiotics, anti-TB drugs, oxygen itself). Delivery by inhalation puts the drug where it is needed with a fraction of the systemic dose — which is why technique matters more than the brand.",
          ],
        },
        {
          type: "table",
          heading: "Bronchodilators and anti-inflammatories",
          columns: ["Class and examples", "How it works and when", "Dose range (adult unless stated)", "Side effects and monitoring", "Teach"],
          rows: [
            ["Short-acting beta-2 agonist (SABA): salbutamol, terbutaline", "Relaxes bronchial smooth muscle within 5 minutes for 4–6 hours; reliever in asthma and COPD; acute attacks", "Inhaler 100–200 micrograms as needed (up to 10 puffs via spacer in an attack); nebulised 2.5–5 mg (2.5 mg under 5 years) repeated 15–20-minutely in severe attacks; IV only in critical care", "Tremor, tachycardia, palpitations, headache, <strong>hypokalaemia</strong> (worse with steroids, theophylline, diuretics — check potassium in repeated nebulisation), lactic acidosis with high doses", "Reliever only; needing it more than twice a week means poor control; carry it always; a spacer doubles the delivered dose"],
            ["Short-acting antimuscarinic (SAMA): ipratropium", "Blocks vagal bronchoconstriction; slower onset (30–60 minutes), 4–6 hours; added to salbutamol in severe asthma and COPD exacerbations", "Nebulised 0.5 mg (0.25 mg children) 4–6 hourly; inhaler 20–40 micrograms 3–4 times daily", "Dry mouth, bitter taste, urinary retention in older men, blurred vision and acute glaucoma if the mist enters the eyes", "Use a mouthpiece or a well-fitting mask and keep the eyes closed during the nebuliser; rinse the mouth"],
            ["Long-acting beta-2 agonist (LABA): salmeterol, formoterol — <strong>always combined with an inhaled steroid in asthma</strong>", "12–24 hours of bronchodilation; maintenance in asthma (with ICS) and COPD", "Combination inhalers (budesonide/formoterol, fluticasone/salmeterol) 1–2 puffs twice daily", "As for SABA; LABA alone in asthma increases the risk of death", "Not a reliever (except formoterol in a combination 'maintenance and reliever' plan); never stop the steroid component"],
            ["Long-acting antimuscarinic (LAMA): tiotropium, glycopyrronium", "Once-daily maintenance bronchodilation in COPD; add-on in severe asthma", "Tiotropium 18 micrograms once daily by dry-powder device or 5 micrograms by soft mist", "Dry mouth, constipation, urinary retention, glaucoma", "Capsule goes in the device, not swallowed; once a day at the same time"],
            ["Inhaled corticosteroid (ICS): beclometasone, budesonide, fluticasone", "Reduces airway inflammation over days to weeks; the preventer for every asthmatic; COPD with frequent exacerbations", "Low to high daily doses in two divided doses (for example beclometasone 200–800 micrograms per day)", "Oral thrush, hoarse voice, cough; at high doses some adrenal suppression, bruising, cataracts, slowed growth velocity in children (small)", "Take every day even when well; <strong>rinse, gargle and spit</strong> after each dose; use a spacer; benefit takes 1–2 weeks"],
            ["Systemic corticosteroid: prednisolone oral, hydrocortisone and methylprednisolone IV", "Acute asthma and COPD exacerbations; severe allergic reactions; some pneumonias (PCP with hypoxia)", "Prednisolone 40–50 mg daily for 5 days (asthma) or 30–40 mg for 5 days (COPD); children 1–2 mg/kg (max 40 mg); hydrocortisone 100 mg IV 6-hourly", "Short course: hyperglycaemia (check glucose in diabetics), mood change, insomnia, dyspepsia, fluid retention, raised blood pressure, infection masked. Long course: Cushingoid features, osteoporosis, adrenal suppression — <strong>never stop abruptly after more than 3 weeks</strong>", "Take in the morning with food; a course of 5 days or less can stop without tapering; carry a steroid card if long term; report black stools, severe thirst or infection"],
            ["Methylxanthine: theophylline oral, aminophylline IV", "Weak bronchodilator with a <strong>narrow therapeutic range</strong>; third-line in asthma and COPD", "Aminophylline loading 5 mg/kg IV over 20 minutes (<strong>omit if already on oral theophylline</strong>), then 0.5 mg/kg/hour; oral modified-release theophylline twice daily; target plasma level <strong>10–20 mg/L</strong> (55–110 micromol/L)", "Nausea, vomiting, headache, insomnia, tremor, tachycardia, <strong>arrhythmias and seizures</strong> in toxicity; levels rise with erythromycin, ciprofloxacin, cimetidine, heart failure, liver disease and stopping smoking; fall with smoking, rifampicin, phenytoin", "Cardiac monitor during IV loading; levels at 4–6 hours after loading and daily; same brand each time; report palpitations or vomiting; avoid excess coffee and tea"],
            ["Magnesium sulphate IV", "Smooth-muscle relaxant for severe or life-threatening asthma not responding to nebulisers", "1.2–2 g IV over 20 minutes (single dose); children 40 mg/kg (max 2 g)", "Flushing, hypotension, nausea; loss of reflexes and respiratory depression with overdose (rare at this dose)", "Monitor blood pressure and respiratory rate during and after the infusion; calcium gluconate is the antidote"],
            ["Leukotriene receptor antagonist: montelukast", "Oral add-on preventer in asthma, exercise-induced asthma and allergic rhinitis; useful in children", "10 mg at night (5 mg 6–14 years, 4 mg 2–5 years)", "Headache, abdominal pain, sleep disturbance, nightmares, mood and behaviour change (warn families)", "Taken every evening; not a reliever"],
          ],
        },
        {
          type: "table",
          heading: "Secretions, infection and the gas itself",
          columns: ["Drug", "Use", "Nursing points"],
          rows: [
            ["Mucolytics: carbocisteine, N-acetylcysteine; nebulised hypertonic saline", "Thick sputum in COPD and bronchiectasis; hypertonic saline in cystic fibrosis and bronchiolitis", "Give with plenty of fluid; hypertonic saline can provoke bronchospasm — give salbutamol first; stop carbocisteine in active peptic ulcer"],
            ["Cough suppressants: codeine, pholcodine; dextromethorphan", "Dry, exhausting cough only", "<strong>Never in productive cough</strong> or in COPD and asthma — they retain secretions and depress breathing; codeine constipates and sedates; no codeine under 12 years or when breastfeeding"],
            ["Antihistamines: chlorphenamine, cetirizine, loratadine", "Allergic rhinitis, urticaria; second-line in anaphylaxis", "Chlorphenamine sedates and dries secretions; non-sedating agents for daytime use"],
            ["Antibiotics: amoxicillin, co-amoxiclav, azithromycin, doxycycline, ceftriaxone, co-trimoxazole", "Pneumonia and infective exacerbations by local guideline", "Culture first; first IV dose with the emergency trolley near (anaphylaxis); doxycycline not in pregnancy or under 8 years; macrolides prolong the QT; co-trimoxazole causes rash and marrow suppression"],
            ["Anti-TB drugs (R, H, Z, E)", "Six-month regimen 2HRZE/4HR (see Module 5)", "Orange urine; pyridoxine with isoniazid; liver symptoms; vision with ethambutol; rifampicin interactions with contraception and ARVs"],
            ["Oxygen", "Hypoxaemia — to a prescribed target", "A drug with a prescription, dose, target and side effects; humidify above 4 L/min; 88–92% for CO2 retainers; no petroleum jelly; no flames"],
            ["Nicotine replacement: patches, gum, lozenges", "Smoking cessation — the one intervention that changes the course of COPD", "Patch plus a short-acting form is more effective than either alone; remove the patch at night if sleep is disturbed; combine with counselling"],
            ["Opioids (morphine) in low dose", "Refractory breathlessness in end-stage COPD and lung cancer", "Small regular doses relieve breathlessness without hastening death; monitor sedation and constipation; this is palliative care, not respiratory depression"],
          ],
        },
        {
          type: "list",
          heading: "Inhaled devices: technique and common errors",
          items: [
            "<strong>Pressurised metered-dose inhaler (pMDI):</strong> shake, cap off, breathe out fully, lips sealed, press at the <em>start</em> of a slow deep breath (3–5 seconds), hold 10 seconds, wait 30–60 seconds before a second puff. Errors: pressing before or after breathing in, breathing too fast, two puffs at once, not shaking, forgetting to remove the cap, and an empty canister (count doses).",
            "<strong>Spacer with pMDI:</strong> one puff into the chamber, then either one slow deep breath held for 10 seconds or 4–5 tidal breaths (children, breathless patients) — immediately, before the aerosol settles. Wash monthly in warm detergent water and air-dry without wiping; replace yearly. A face mask on the spacer for children under 3–4 years, sealed on the face.",
            "<strong>Dry-powder inhaler (Turbuhaler, Accuhaler, capsule devices):</strong> load the dose (twist or click), breathe out <em>away</em> from the device (moisture clumps the powder), seal the lips and inhale <strong>fast and deep</strong>, hold 10 seconds. Needs enough inspiratory effort — not for small children or a patient in a severe attack. Do not shake; do not swallow capsules.",
            "<strong>Nebuliser:</strong> 2.5–5 mL of solution in the chamber (make up to 4–5 mL with sodium chloride 0.9% if needed); driving gas 6–8 L/min (oxygen in asthma; <strong>air for CO2 retainers</strong>); mouthpiece preferred for ipratropium; sit upright, breathe normally, tap the chamber as it sputters; usually 5–10 minutes. Wash the chamber and mask after each use, dry, and replace as per policy. In a severe attack a pMDI with a spacer at 4–10 puffs is as effective as a nebuliser and does not aerosolise infection into the room.",
            "Check technique at every visit by watching, not asking. Teach-back: 'show me how you take it.'",
          ],
        },
        {
          type: "list",
          heading: "Worked calculations",
          style: "steps",
          items: [
            "<strong>Nebulised salbutamol</strong> 5 mg from a 5 mg/2.5 mL nebule: 5 ÷ 5 × 2.5 = <strong>2.5 mL</strong>. For a 3-year-old prescribed 2.5 mg from the same nebule: 2.5 ÷ 5 × 2.5 = <strong>1.25 mL</strong>, made up to 4 mL with sodium chloride 0.9%.",
            "<strong>Adrenaline for anaphylaxis</strong> from a 1 mg/mL (1:1000) ampoule: adult 0.5 mg = <strong>0.5 mL</strong>; 8-year-old 0.3 mg = <strong>0.3 mL</strong>; 3-year-old 0.15 mg = <strong>0.15 mL</strong> — use a 1 mL syringe. If only 1:10 000 (0.1 mg/mL) is available, 0.5 mg would be 5 mL, which is why that preparation is for cardiac arrest, not IM use.",
            "<strong>Aminophylline loading dose</strong> 5 mg/kg for a 60 kg adult = 300 mg. Ampoule 250 mg/10 mL (25 mg/mL): 300 ÷ 25 = <strong>12 mL</strong>, diluted and given over 20 minutes. Maintenance 0.5 mg/kg/hour = 30 mg/hour; if 500 mg is added to 500 mL (1 mg/mL), the pump runs at <strong>30 mL/hour</strong>.",
            "<strong>Prednisolone for a 15 kg child</strong> at 1 mg/kg = 15 mg; 5 mg tablets = <strong>3 tablets</strong>, crushed in a spoon of food; check the maximum (40 mg) is not exceeded.",
            "<strong>Enoxaparin for PE</strong> at 1 mg/kg twice daily for a 70 kg patient = <strong>70 mg</strong> (0.7 mL of a 100 mg/mL syringe) every 12 hours; dose reduce if creatinine clearance is below 30 mL/min.",
            "<strong>Oxygen cylinder duration:</strong> minutes = litres remaining ÷ flow. A standard size E cylinder holds about 680 L when full (137 bar); at half pressure it holds about 340 L, so at 10 L/min it will last 340 ÷ 10 = <strong>34 minutes</strong> — not enough for a 45-minute transfer. A full size F cylinder (1 360 L) at 2 L/min lasts 1 360 ÷ 2 = 680 minutes ≈ <strong>11 hours</strong>. Check the capacity printed on the cylinder you actually have. Always leave a safety margin and take a second cylinder.",
            "<strong>Flow from a Venturi valve:</strong> the valve says 28% at 4 L/min; if the respiratory rate is 36, increase the flow by 50% to 6 L/min to maintain 28%.",
            "<strong>IV magnesium</strong> 2 g from a 50% solution (500 mg/mL): 2 000 ÷ 500 = <strong>4 mL</strong>, diluted to 100 mL and run over 20 minutes = 300 mL/hour on the pump.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "The errors that reach the coroner",
          body: "Adrenaline 1:1000 given intravenously. Theophylline loading given to a patient already taking it orally. Codeine linctus for a COPD patient's productive cough. A nebuliser driven by 8 L of oxygen left running on a CO2 retainer for an hour. A cylinder that ran out in the ambulance. Steroids stopped suddenly after months. Each is prevented by a nurse who checks the drug, the strength, the route, the patient and the plan.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Monitoring pairs",
          body: "Salbutamol — potassium and heart rate. Ipratropium — eyes and bladder. Inhaled steroid — rinse for thrush. Oral steroid — glucose, mood, taper after 3 weeks. Theophylline — level 10–20 mg/L, interactions with erythromycin and ciprofloxacin. Magnesium — blood pressure and reflexes. Oxygen — the target saturation.",
        },
      ],
      keyPoints: [
        "Salbutamol opens the airway in minutes and causes tremor, tachycardia and hypokalaemia; ipratropium is added in severe attacks and must be kept out of the eyes.",
        "Every asthmatic needs an inhaled steroid preventer; rinse the mouth after it; a LABA is never used alone in asthma.",
        "Oral steroid courses of 5 days stop without tapering; longer courses taper; check glucose in diabetics.",
        "Theophylline has a narrow range (10–20 mg/L); omit the loading dose in patients already taking it and watch for interactions.",
        "Technique is the dose: watch the patient use the inhaler; spacer for children and attacks; nebulisers by air for CO2 retainers.",
        "Calculate with units written out — mg ÷ mg/mL = mL; litres ÷ L/min = minutes — and check with a second nurse for adrenaline, theophylline and anticoagulants.",
      ],
      quiz: {
        keywords: ["salbutamol", "ipratropium", "inhaler", "spacer", "nebuli", "theophylline", "aminophylline", "prednisolone", "hydrocortisone", "corticosteroid", "montelukast", "magnesium sulphate", "mucolytic", "codeine", "oxygen cylinder", "bronchodilator", "metered dose"],
      },
    },
  ],
};
