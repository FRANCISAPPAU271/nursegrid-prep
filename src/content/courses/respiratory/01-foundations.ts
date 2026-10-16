import type { CourseModule } from "../types";

export const foundations: CourseModule = {
  slug: "foundations",
  title: "How breathing works",
  summary: "Airway anatomy, the mechanics of breathing, gas exchange and the control of breathing — then the focused respiratory assessment that turns that physiology into findings at the bedside.",
  lessons: [
    {
      slug: "respiratory-anatomy-and-physiology",
      title: "Respiratory anatomy and physiology",
      minutes: 14,
      objectives: [
        "Trace the path of air from the nose to the alveolus and name what each structure does.",
        "Explain the difference between ventilation, diffusion, perfusion and oxygen transport.",
        "Describe how the body controls breathing and why that matters for oxygen therapy and opioids.",
        "Link each part of the system to the disease that attacks it.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Why this lesson matters",
          paragraphs: [
            "Every respiratory question — oxygen targets in COPD, why a premature baby grunts, why a right main bronchus intubation happens, why a patient with pneumonia desaturates when you lie them on the bad side — is answered by a piece of physiology in this lesson. Learn the system, and the facts stop being a list.",
            "The job of the respiratory system is simple to state: move air to the alveoli (<strong>ventilation</strong>), move oxygen and carbon dioxide across the alveolar wall (<strong>diffusion</strong>), bring blood past the alveoli (<strong>perfusion</strong>) and carry the gases to and from the tissues (<strong>transport</strong>). Any disease is a failure of one or more of these four steps.",
          ],
        },
        {
          type: "table",
          heading: "The airway from top to bottom",
          columns: ["Structure", "What it does", "Clinical link"],
          rows: [
            ["Nose and nasopharynx", "Warms, humidifies and filters air; smell", "A tracheostomy bypasses all three — humidification becomes treatment, not comfort"],
            ["Pharynx and larynx", "Shared food–air passage; the epiglottis closes the larynx on swallowing; vocal cords", "Reduced consciousness → tongue falls back and the gag reflex fails → obstruction and aspiration; stridor = narrowing here"],
            ["Trachea", "About 11 cm, held open by C-shaped cartilage rings; divides at the carina", "Tracheal deviation in tension pneumothorax; suction catheters stimulate the carina and provoke coughing and vagal bradycardia"],
            ["Right and left main bronchi", "The right is wider, shorter and more vertical", "Aspirated food and misplaced endotracheal tubes go right; right lower lobe pneumonia follows aspiration"],
            ["Bronchi → bronchioles", "Smooth muscle controls diameter; mucus and cilia (the mucociliary escalator) sweep debris up", "Bronchospasm in asthma; smoking paralyses cilia; beta-2 agonists relax the muscle, anticholinergics reduce secretions"],
            ["Alveoli (about 300 million)", "One-cell-thick walls against one-cell-thick capillaries; type I cells for exchange, type II cells make surfactant", "Surfactant lowers surface tension so alveoli do not collapse — premature babies lack it (respiratory distress syndrome); fluid (pulmonary oedema) or pus (pneumonia) thickens the barrier"],
            ["Pleura", "Visceral layer on the lung, parietal on the chest wall, a thin film of fluid between; negative pressure keeps the lung inflated", "Air in the space = pneumothorax; fluid = effusion; pus = empyema; blood = haemothorax; inflamed = pleurisy (sharp pain on breathing)"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0084.svg",
          alt: "An alveolus one cell thick lying against a capillary, with oxygen diffusing into the blood and carbon dioxide diffusing out",
          caption: "Gas exchange happens across two cells. Anything that thickens or floods that barrier — oedema, pus, fibrosis — slows oxygen more than carbon dioxide, which is why type 1 respiratory failure comes first.",
        },
        {
          type: "list",
          heading: "The mechanics of breathing",
          items: [
            "<strong>Inspiration is active.</strong> The diaphragm contracts and flattens, the external intercostals lift the ribs, the chest enlarges, pressure inside falls below atmospheric and air flows in. In distress the accessory muscles — sternocleidomastoid, scalenes, pectorals — join in: that is why a breathless patient sits forward with the arms braced (the tripod position).",
            "<strong>Quiet expiration is passive</strong> — elastic recoil. Forced expiration uses the abdominal muscles. In asthma and COPD the problem is getting air <em>out</em>: expiration becomes long and wheezy, and air trapping over-inflates the chest.",
            "<strong>Volumes:</strong> tidal volume about 500 mL, of which about 150 mL is dead space that never reaches an alveolus; vital capacity 4–5 L; normal rate 12–20 breaths a minute. Minute ventilation = rate × tidal volume — shallow rapid breathing moves mostly dead-space air.",
            "<strong>Spirometry:</strong> FEV1 is what you can blow out in the first second, FVC the total. An FEV1/FVC ratio below 0.7 means obstruction (asthma, COPD). Restriction (fibrosis, kyphoscoliosis, obesity) lowers both so the ratio stays normal.",
            "<strong>Compliance and resistance:</strong> stiff lungs (fibrosis, pulmonary oedema, ARDS) need more effort for the same volume; narrowed airways (asthma, secretions, a small tracheostomy tube) raise resistance.",
          ],
        },
        {
          type: "list",
          heading: "Gas exchange and transport",
          items: [
            "Gases move by <strong>diffusion</strong> down a pressure gradient. Alveolar oxygen is about 13 kPa (100 mmHg); venous blood arrives at 5 kPa (40 mmHg). Carbon dioxide diffuses twenty times more easily — so when the barrier thickens, oxygen falls first and carbon dioxide stays normal.",
            "<strong>Ventilation–perfusion (V/Q) matching:</strong> blood must reach ventilated alveoli. A pulmonary embolus ventilates without perfusing (dead space); pneumonia perfuses without ventilating (shunt). Gravity sends more blood to the lowest part of the lung — nurse a patient with one-sided pneumonia <strong>good lung down</strong> so the blood meets the air.",
            "<strong>Oxygen transport:</strong> 97% travels bound to haemoglobin, 3% dissolved. Saturation (SpO2) tells you how full the haemoglobin is, not how much haemoglobin there is — a severely anaemic patient can read 99% and still be hypoxic at the tissues.",
            "<strong>The oxygen–haemoglobin dissociation curve</strong> is S-shaped: above a PaO2 of 8 kPa (60 mmHg) saturation stays over 90%; below it saturation falls off a cliff. That is why an SpO2 of 90% is already a warning. Acidosis, fever and raised CO2 shift the curve right so haemoglobin unloads oxygen to busy tissues.",
            "<strong>Carbon dioxide</strong> travels mostly as bicarbonate (about 70%), some bound to haemoglobin and some dissolved. CO2 + water ⇌ carbonic acid ⇌ hydrogen ions + bicarbonate — this equation is the bridge between breathing and acid–base balance, and the whole of Module 3 hangs on it.",
          ],
        },
        {
          type: "list",
          heading: "Control of breathing",
          items: [
            "The respiratory centre in the <strong>medulla and pons</strong> sets rate and depth. Central chemoreceptors respond to the hydrogen ions produced when CO2 crosses into the cerebrospinal fluid — <strong>carbon dioxide is the normal drive to breathe</strong>.",
            "Peripheral chemoreceptors in the carotid and aortic bodies respond to a falling oxygen level — the <strong>hypoxic drive</strong> — and only become important when PaO2 is low.",
            "A minority of patients with chronic CO2 retention (severe COPD) depend partly on hypoxic drive, and uncontrolled high-flow oxygen can worsen their CO2 retention — mainly by disturbing V/Q matching and reducing drive. The answer is <strong>controlled</strong> oxygen to a target of 88–92%, never withholding oxygen from a hypoxic patient.",
            "<strong>Opioids, sedatives and alcohol</strong> depress the respiratory centre: a falling respiratory rate and rising drowsiness after morphine are an emergency. Raised intracranial pressure produces abnormal patterns (Cheyne–Stokes); acidosis produces deep sighing Kussmaul breathing; pain and anxiety produce fast shallow breathing.",
            "Defences: nasal filtration, the mucociliary escalator, the cough reflex, alveolar macrophages and IgA. Smoking, dehydration, anaesthesia, immobility and sedation disable them — which is why post-operative chest infection follows the patient who is not sat up, hydrated and made to cough.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Four words that answer most respiratory questions",
          body: "Ventilation (air in and out), diffusion (across the alveolar wall), perfusion (blood past the alveoli), transport (haemoglobin). Ask which step has failed: asthma = ventilation; pulmonary oedema = diffusion; pulmonary embolism = perfusion; anaemia and carbon monoxide = transport.",
        },
      ],
      keyPoints: [
        "The right main bronchus is wider and more vertical — aspiration and misplaced tubes go right.",
        "Surfactant keeps alveoli open; premature babies lack it. Fluid or pus thickens the two-cell exchange barrier and oxygen falls before carbon dioxide rises.",
        "Carbon dioxide is the normal drive to breathe; hypoxic drive matters only in chronic CO2 retainers — control their oxygen to 88–92%, never withhold it.",
        "Saturation measures how full the haemoglobin is, not how much there is; below a PaO2 of 8 kPa saturation falls steeply.",
        "FEV1/FVC below 0.7 = obstruction; expiration is the problem in asthma and COPD.",
      ],
      quiz: {
        keywords: ["alveol", "surfactant", "gas exchange", "diaphragm", "trachea", "bronch", "pleura", "respiratory rate", "ventilation", "lung", "oxygen saturation", "hypoxic drive", "carbon dioxide", "spirometry", "tidal volume"],
        categories: ["med-surg"],
        questionIds: ["NG-MOD-RESP-001"],
      },
    },
    {
      slug: "focused-respiratory-assessment",
      title: "Focused respiratory assessment",
      minutes: 16,
      objectives: [
        "Take a respiratory history that screens for tuberculosis, asthma, COPD and occupational exposure.",
        "Perform inspection, palpation, percussion and auscultation of the chest and name the normal and abnormal findings.",
        "Measure respiratory rate, oxygen saturation and peak flow accurately and know the limitations of each.",
        "Recognise the red flags that mean a patient is about to stop breathing.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The most neglected vital sign",
          paragraphs: [
            "Respiratory rate is the first observation to change when a patient deteriorates and the one most often guessed, copied forward or recorded as 18 without counting. Count it for a <strong>full 60 seconds</strong> while you appear to be taking the pulse, because patients change their breathing when they know they are being watched. A rate above 24 in an adult is abnormal; above 30 is a medical emergency until proven otherwise.",
          ],
        },
        {
          type: "list",
          heading: "History — the questions that change management",
          items: [
            "<strong>Cough:</strong> how long? A cough of <strong>two weeks or more</strong> triggers tuberculosis screening in Ghana, whatever else is going on. Dry or productive; worse at night (asthma, heart failure) or morning (chronic bronchitis)?",
            "<strong>Sputum:</strong> colour (clear/white — viral or asthma; yellow-green — bacterial; rusty — pneumococcal pneumonia; pink frothy — pulmonary oedema; foul-smelling — anaerobic abscess), volume, and <strong>haemoptysis</strong> (TB, cancer, PE, bronchiectasis — always significant).",
            "<strong>Breathlessness:</strong> onset (sudden — PE, pneumothorax, foreign body; hours — asthma, pneumonia; weeks — effusion, anaemia, heart failure), exercise tolerance in stairs or distance (the MRC scale from 1, breathless only on strenuous exertion, to 5, too breathless to leave the house), orthopnoea and paroxysmal nocturnal dyspnoea.",
            "<strong>Associated symptoms:</strong> wheeze, chest pain (pleuritic — sharp, worse on breathing), fever and night sweats, weight loss, ankle swelling, hoarseness.",
            "<strong>Exposures:</strong> smoking in pack-years (packs a day × years), <strong>biomass smoke</strong> from charcoal or firewood cooking in poorly ventilated kitchens (a major cause of COPD in women who have never smoked), occupation (mining, quarrying, cement, farming, welding), household TB contact, HIV status, recent travel, immobility or surgery (PE), allergies, pets and damp.",
            "<strong>Drugs:</strong> inhalers and whether they are actually used, beta-blockers and aspirin/NSAIDs (worsen asthma), ACE inhibitors (cough), oral steroids, recent antibiotics, immunisation history (BCG, pneumococcal, influenza, COVID-19).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MDA-1088.svg",
          alt: "Examination sequence: inspect, palpate, percuss, auscultate, with the abdomen as the exception",
          caption: "Look, feel, tap, listen — in that order for the chest, with warm hands, bare skin and a quiet room.",
        },
        {
          type: "table",
          heading: "Examination of the chest",
          columns: ["Step", "Normal", "Abnormal and what it suggests"],
          rows: [
            ["Inspect — general", "Comfortable, speaking full sentences, pink, rate 12–20, symmetrical quiet breathing", "Tripod position, pursed lips, nasal flaring, accessory muscle use, intercostal or subcostal recession (children), grunting (infants), inability to finish a sentence, agitation (hypoxia) or drowsiness (hypercapnia)"],
            ["Inspect — colour and hands", "Pink tongue and lips; warm hands; normal nails", "Central cyanosis (tongue, lips — late and serious, needs at least 5 g/dL of desaturated haemoglobin, so anaemic patients may never look blue); peripheral cyanosis (cold, poor perfusion); finger clubbing (bronchiectasis, lung cancer, cyanotic heart disease, empyema — not simple COPD); tar staining; flapping tremor and bounding pulse (CO2 retention)"],
            ["Inspect — chest shape and pattern", "Symmetrical expansion", "Barrel chest (emphysema); kyphoscoliosis; one side moving less (pneumothorax, effusion, consolidation, pain); paradoxical segment (flail chest); Kussmaul deep sighing (metabolic acidosis); Cheyne–Stokes (brain injury, dying); prolonged expiration (obstruction)"],
            ["Palpate", "Trachea central; equal expansion; equal tactile vocal fremitus", "Trachea deviated away from a tension pneumothorax or large effusion, towards collapse or fibrosis; reduced expansion on the affected side; increased fremitus over consolidation, reduced over effusion and pneumothorax; subcutaneous emphysema crackles under the skin"],
            ["Percuss", "Resonant", "Dull — consolidation, collapse; stony dull — pleural effusion; hyper-resonant — pneumothorax, emphysema"],
            ["Auscultate", "Vesicular breath sounds — soft, inspiration longer than expiration, no added sounds", "Bronchial breathing (harsh, equal phases) over consolidation; crackles — fine (pulmonary oedema, fibrosis), coarse (secretions, bronchiectasis, pneumonia); wheeze (narrowed small airways — asthma, COPD, also heart failure); stridor — harsh inspiratory sound from the upper airway: an emergency; pleural rub (creaking leather); absent or very quiet sounds — effusion, pneumothorax, or the silent chest of life-threatening asthma"],
          ],
        },
        {
          type: "list",
          heading: "Measurements and how they mislead",
          items: [
            "<strong>Pulse oximetry</strong> estimates arterial saturation from light absorption. Target 94–98% for most adults; 88–92% for patients at risk of hypercapnia. It reads falsely low with cold hands, poor perfusion, movement, nail varnish and bright light; it reads falsely <em>normal</em> in anaemia and carbon monoxide poisoning, and may over-read by 1–3% on darkly pigmented skin — so treat the patient, not the number. Warm the hand, try the ear lobe, check the pulse waveform.",
            "<strong>Peak expiratory flow:</strong> standing or sitting upright, full breath in, lips sealed, one short sharp blast; best of three; compare with the patient's personal best or predicted value. Below 50% of best = severe asthma; below 33% = life-threatening. Children under about 5 cannot do it reliably.",
            "<strong>Sputum specimen:</strong> early morning, rinse the mouth with water (not mouthwash), deep cough from the chest not saliva, into a sterile wide-mouthed pot, <strong>before antibiotics</strong>, to the laboratory within two hours. For TB: a spot sample plus an early-morning sample, collected outdoors or in a ventilated area away from other people.",
            "<strong>Arterial blood gas</strong> when saturation is below 92%, in any acutely breathless patient at risk of CO2 retention, in suspected acidosis and when the oximeter cannot be trusted — Module 3 covers interpretation.",
            "<strong>Chest X-ray</strong> for consolidation, effusion, pneumothorax, cardiomegaly, TB cavities; nurses prepare the patient (remove metal, pregnancy check) and read the report, not just file it.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Red flags — act, do not chart and wait",
          body: "Respiratory rate above 30 or below 8; SpO2 below 90% (or below 88% in a known retainer) despite oxygen; stridor; a silent chest; cannot speak; exhaustion; new confusion or drowsiness; central cyanosis; a rising rate after you started treatment. Sit the patient up, start oxygen, stay with them and call for help using SBAR.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Three sounds, three diagnoses",
          body: "Stridor is upper airway and inspiratory — obstruction. Wheeze is lower airway and expiratory — bronchospasm. Crackles are alveolar — fluid or secretions. And a chest that goes quiet in an asthmatic is not getting better.",
        },
      ],
      keyPoints: [
        "Count the respiratory rate for 60 seconds; it is the earliest sign of deterioration.",
        "A cough of two weeks or more means screen for TB; haemoptysis is always significant.",
        "Trachea away from the problem = tension pneumothorax or big effusion; stony dullness = effusion; hyper-resonance = pneumothorax.",
        "Pulse oximetry is unreliable with poor perfusion, anaemia and carbon monoxide; treat the patient, not the number.",
        "Stridor, silent chest, inability to speak, exhaustion and new drowsiness are emergencies.",
      ],
      quiz: {
        keywords: ["breath sound", "crackles", "wheez", "stridor", "auscultat", "respiratory rate", "spo2", "oxygen saturation", "pulse oximet", "cyanosis", "sputum", "peak flow", "dyspnoea", "haemoptysis", "chest x ray", "accessory muscle", "tripod"],
        categories: ["med-surg"],
        questionIds: ["NG-MOD-RESP-002"],
      },
    },
  ],
};
