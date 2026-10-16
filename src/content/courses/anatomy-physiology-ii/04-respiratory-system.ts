import type { CourseModule } from "../types";

export const respiratorySystem: CourseModule = {
  slug: "respiratory-system",
  title: "The respiratory system: airways, breathing and gas exchange",
  summary:
    "The gas-exchange system: the upper airway with obstruction dangers, the lower airways with asthma and aspiration logic, lobes and pleura with pneumothorax recognition, the alveolus with surfactant — then breathing mechanics with volumes and patterns, oxygen and carbon dioxide transport with the dissociation curve, ventilatory control with the COPD oxygen caution, hypoxia in its four forms, ABG quick-reading and the deteriorating respiratory patient drill.",
  lessons: [
    {
      slug: "airways-to-alveoli",
      title: "Airways to alveoli",
      minutes: 20,
      objectives: [
        "Trace the upper and lower airways with the obstruction danger points.",
        "Explain lobes, segments and pleura with effusion and pneumothorax.",
        "Describe the alveolus, surfactant and the mucociliary escalator.",
        "Name the breath sounds and what each means.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Upper airway: conditioned, guarded, losable",
          paragraphs: [
            "The <strong>nose</strong> warms, filters and humidifies (mouth-breathers and tracheostomies lose this — humidify their oxygen), the <strong>pharynx</strong> (naso-, oro-, laryngo-) crosses air with food, and the <strong>larynx</strong> guards the split: the <strong>epiglottis</strong> flips over the glottis on swallowing, the <strong>vocal cords</strong> voice and seal, the <strong>cricoid</strong> ring is the narrowest point in children (little swelling, big <strong>stridor</strong> — croup's bark, epiglottitis's tripod-drooling <strong>do-not-touch</strong> emergency). Airway obstruction kills in minutes: the <strong>tongue</strong> in the unconscious (head tilt–chin lift; <strong>jaw thrust</strong> if trauma), <strong>foreign bodies</strong> (choking drill: encourage cough, back blows, abdominal thrusts), <strong>anaphylaxis</strong> (adrenaline + airway), <strong>angioedema, burns, Ludwig's</strong> — noisy breathing is a <strong>partially</strong> open airway (act now); silent chest with no air movement is <strong>complete</strong> (act faster). Gurgling = liquid (suction, recovery position); snoring = tongue (reposition); stridor = narrowing (escalate); wheeze = lower airways (below).",
          ],
        },
        {
          type: "text",
          heading: "Lower airways: tubes that grip",
          paragraphs: [
            "The <strong>trachea</strong> (C-shaped cartilage, flat where the oesophagus bulges food past) splits at the <strong>carina</strong> into main bronchi — the <strong>right wider, shorter and steeper</strong>, so aspirated peanuts and over-advanced ET tubes go right: always confirm <strong>bilateral air entry + capnography</strong> after intubation. Bronchi → bronchioles → terminal bronchioles, cartilage thinning to <strong>smooth muscle</strong> that grips in <strong>asthma</strong> (wheeze, prolonged expiration, <strong>silent chest = no air moving = pre-arrest</strong>) and releases to <strong>bronchodilators</strong>. The <strong>mucociliary escalator</strong> (cilia + mucus) sweeps debris up to swallow — <strong>smoking paralyzes it</strong> (smoker's cough is the backup), dehydration thickens mucus (hydrate, humidify, mobilize, physiotherapy), and the <strong>cough reflex</strong> (suppressed by opiates, strokes, weak muscles) is the final clearance — suppressed cough + aspiration = pneumonia, the immobile patient's shadow.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0020.svg",
          alt: "Airways, lobes and pleura. Trachea with C-rings splits at the carina; right main bronchus wider and steeper, left narrower and angled. Right lung 3 lobes (upper, middle, lower with horizontal and oblique fissures); left lung 2 lobes with cardiac notch. Pleura: parietal on the wall, visceral on the lung, fluid film between; air in the space is pneumothorax, fluid or pus is effusion or empyema. Aspiration and over-advanced tubes go right; tension pneumothorax is needled on sight.",
          caption: "Right takes the aspirate, pleura takes the air — and tension is needled, never imaged first.",
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0084.svg",
          alt: "Bank diagram of the alveolus: thin type I wall, surfactant-producing type II cells, capillary network and gas exchange.",
          caption: "Gas exchange at the alveolus — from the question-bank diagram set.",
        },
        {
          type: "text",
          heading: "Alveoli: a tennis court one cell thick",
          paragraphs: [
            "Some <strong>300 million alveoli</strong> offer ~70 m² of <strong>type I</strong> membrane one cell thin, fused to capillary endothelium — diffusion distance under a micron. <strong>Type II</strong> cells secrete <strong>surfactant</strong>, cutting surface tension so alveoli don't collapse (premature babies lack it — <strong>RDS</strong>: grunting, flaring, recessing; antenatal <strong>steroids</strong> + exogenous surfactant + CPAP save them). <strong>Pneumonia</strong> fills alveoli with pus (consolidation: dull, bronchial breathing, crackles, fever), <strong>pulmonary oedema</strong> floods them (left failure, ARDS: pink froth, hypoxia resistant to oxygen), <strong>atelectasis</strong> collapses them (post-op, mucus plugs — incentive spirometry, mobilize, deep breathe). <strong>V/Q matching</strong> marries air to blood: shunt (blood past unventilated alveoli — pneumonia, ARDS) and dead space (air past unperfused alveoli — PE) both desaturate, but shunt resists oxygen while dead space wastes breath — positioning the good lung down (and proning ARDS) re-matches them.",
          ],
        },
        {
          type: "table",
          heading: "Breath sounds: what the chest tells",
          columns: ["Sound", "Heard as", "Means", "Nursing note"],
          rows: [
            ["Vesicular", "Soft rustling, louder on inspiration", "Normal over most lung", "Absent/diminished = no air there (effusion, pneumothorax, plug, over-advanced tube)"],
            ["Bronchial", "Loud, hollow, over consolidation", "Sound transmitted through solid lung", "Pneumonia beneath the stethoscope — with dullness + crackles + fever"],
            ["Crackles (creps)", "Popping, like hair rolled at the ear", "Alveoli snapping open — fluid, fibrosis, atelectasis", "Basal + cardiac history = failure; shifting with cough = secretions to clear"],
            ["Wheeze", "Musical whistle, mainly expiratory", "Narrowed airways — asthma, COPD, mucus", "Louder wheeze can mean improving; SILENT chest + distress = pre-arrest"],
            ["Stridor", "Harsh crowing on inspiration", "Upper-airway narrowing — croup, foreign body, anaphylaxis", "Emergency: keep calm and upright, nebulized adrenaline/oxygen per protocol, senior help"],
            ["Pleural rub", "Leathery creak, both phases", "Inflamed pleura grating — pleurisy, PE, pneumonia", "Sharp pain worse on breathing/coughing; splinting + shallow breaths follow"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Suction only what you must, oxygenate what you do",
          body: "Suctioning vagals (bradycardia), desaturates, traumatizes and infects — so suction on need (visible/ audible secretions, falling sats, rising pressures), not on schedule: hyperoxygenate before and after, limit each pass to 10–15 seconds, use the correct catheter (≤ half the tube diameter), sterile technique, and stop for bradycardia or desaturation. The best secretion clearance is mobilization, hydration, humidification and physiotherapy — suction is the last resort, not the routine.",
        },
      ],
      keyPoints: [
        "Nose conditions, larynx guards (epiglottitis: tripod, drooling, do not touch); gurgling/snoring/stridor locate the block.",
        "Right bronchus wider + steeper — aspirates and ET tubes go right; confirm bilateral entry + capnography.",
        "Asthma grips smooth muscle (silent chest = pre-arrest); smoking paralyzes the escalator; suppressed cough invites pneumonia.",
        "Right 3 lobes, left 2 + notch; pleura: air = pneumothorax (tension needled on sight), fluid = effusion.",
        "300M alveoli, surfactant holds them open (premmies + steroids); pneumonia fills, oedema floods, atelectasis collapses.",
        "Vesicular normal; bronchial = consolidation; crackles = fluid/fibrosis; wheeze = narrowed; stridor = upper emergency; rub = pleurisy.",
      ],
      quiz: {
        questionIds: ["NG-MOD-AP2-010"],
        keywords: ["airway", "larynx", "epiglottis", "stridor", "bronchus", "aspiration", "asthma", "lobes", "pleura", "pneumothorax", "alveolus", "surfactant", "breath sounds", "crackles", "wheeze"],
        categories: ["fluid-electrolyte"],
      },
    },
    {
      slug: "breathing-gas-exchange-and-control",
      title: "Breathing, gas exchange and control",
      minutes: 20,
      objectives: [
        "Explain breathing mechanics, volumes and abnormal patterns.",
        "Explain oxygen and CO₂ transport with the dissociation curve and Bohr effect.",
        "Explain ventilatory control and the COPD oxygen caution.",
        "Distinguish the four hypoxias, read an ABG simply, and run the deterioration drill.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Mechanics: pressure moves air, muscles move pressure",
          paragraphs: [
            "<strong>Boyle's law</strong> runs breathing: bigger thorax → lower pressure → air in. <strong>Inspiration</strong> is active — <strong>diaphragm</strong> drops, <strong>external intercostals</strong> lift ribs; <strong>expiration</strong> is passive recoil (forced expiration recruits abdominals + internal intercostals). <strong>Accessory muscles</strong> (sternocleidomastoid, scalene, nasal flaring, intercostal/subcostal <strong>recession</strong>) mean distress — document and escalate, don't admire. Volumes: <strong>tidal ~500 mL</strong>, of which <strong>~150 mL dead space</strong> never sees alveoli (rapid shallow breathing ventilates tubes, not blood); <strong>vital capacity</strong> (max in-out ~4.5 L), <strong>residual volume</strong> (never exhaled), <strong>TLC</strong>. Patterns diagnose: <strong>Kussmaul</strong> (deep, rapid — metabolic acidosis blowing off CO₂: DKA, uraemia), <strong>Cheyne-Stokes</strong> (crescendo-decrescendo + apnoea — heart failure, brain injury, dying), <strong>Biot/ataxic</strong> (chaotic — brainstem), <strong>apneustic/agonic</strong> (agonal — resuscitation rhythm), <strong>bradypnoea</strong> (opiates, raised ICP, hypothermia). Rate + depth + rhythm + effort + sats + consciousness: the six of every respiratory check.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0021.svg",
          alt: "Oxygen-haemoglobin dissociation curve: sigmoid with PaO2 100 giving 98 per cent, 60 giving 90 per cent (the cliff edge), 40 giving 75 per cent. Left shift loads easily and holds tight; right shift (low pH, high CO2, fever, raised 2,3-DPG — the Bohr effect) unloads oxygen at working tissues. Oxygen delivery equals cardiac output times haemoglobin times saturation: lungs load, Hb carries, pump delivers. Cyanosis needs 5 g/dL deoxygenated Hb so anaemia hides it; CO poisoning pinks while killing; targets 94–98 per cent, 88–92 in CO2 retainers; lactate over 2 means tissue debt.",
          caption: "Sigmoid, shiftable, cliff-edged at 90% — and delivery needs lungs, Hb and pump together.",
        },
        {
          type: "text",
          heading: "Transport: haemoglobin carries, bicarbonate clears",
          paragraphs: [
            "Oxygen barely dissolves — <strong>haemoglobin</strong> carries ~98% (1.34 mL O₂ per gram), loading at lungs (PaO₂ 100 → 98%) and unloading at tissues (PaO₂ 40 → 75%), keeping a <strong>venous reserve</strong> for exercise. The <strong>Bohr effect</strong>: working tissues (↓pH, ↑CO₂, heat) shift the curve <strong>right</strong>, dumping exactly where needed; lungs' cool alkalinity shifts it <strong>left</strong>, loading greedily. <strong>O₂ delivery = cardiac output × Hb × saturation</strong> — anaemia or low output starve tissues with perfect sats, and <strong>lactate >2</strong> confesses the debt. CO₂ rides home three ways: <strong>~70% bicarbonate</strong> (carbonic anhydrase + <strong>chloride shift</strong>), ~20% <strong>carbamino</strong> on globin, ~10% dissolved — the bicarbonate leg is why kidneys and lungs co-manage pH (Module 05). <strong>Carbon monoxide</strong> hijacks Hb 250× tighter than O₂ (cherry-red skin, lying sats — <strong>co-oximetry</strong> only), <strong>methaemoglobin</strong> (nitrates, dapsone) browns blood unresponsive to O₂ — both need the cause removed plus high-flow oxygen.",
          ],
        },
        {
          type: "text",
          heading: "Control: CO₂ drives, O₂ only whispers",
          paragraphs: [
            "The <strong>medulla</strong> sets rhythm, the <strong>pons</strong> smooths it; <strong>central chemoreceptors</strong> read CSF pH (= CO₂) — the <strong>primary drive</strong>: rising CO₂ deepens and quickens breathing within minutes. <strong>Peripheral chemoreceptors</strong> (carotid/aortic bodies) answer only when PaO₂ crashes below ~60. Chronic <strong>CO₂ retainers</strong> (COPD, chest-wall disease, hypoventilation) blunt their CO₂ drive and lean on <strong>hypoxic drive</strong> — flood them with oxygen and breathing softens while CO₂ climbs (narcosis, coma): hence <strong>target sats 88–92%</strong> on controlled <strong>Venturi</strong> masks, ABG/VBG-monitored. But never starve a blue COPD patient fearing theory — <strong>hypoxia kills before hypercapnia</strong>: give what the target needs, monitor, escalate. <strong>Opiates, benzodiazepines, raised ICP, hypothermia and exhaustion</strong> all depress drive — respiratory rate is the neglected vital sign: count it for a full minute, watch effort and consciousness with it, and trust the trend.",
          ],
        },
        {
          type: "table",
          heading: "ABG quick-read: ROME in four rows",
          columns: ["Disorder", "pH", "Primary change", "Classic cause + clue"],
          rows: [
            ["Respiratory acidosis", "↓ <7.35", "↑ PaCO₂ (hypoventilation)", "COPD flare, opiates, obstruction, fatigue — CO₂ narcotic, flapping tremor"],
            ["Respiratory alkalosis", "↑ >7.45", "↓ PaCO₂ (hyperventilation)", "Panic, pain, fever, early sepsis/PE, salicylates — tingling, carpopedal spasm"],
            ["Metabolic acidosis", "↓ <7.35", "↓ HCO₃⁻ (acid gain / base loss)", "DKA, lactic (shock), renal failure, diarrhoea — Kussmaul breathing compensates"],
            ["Metabolic alkalosis", "↑ >7.45", "↑ HCO₃⁻ (acid loss / base gain)", "Vomiting/NG suction, diuretics, antacids — weak, crampy, arrhythmic"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Deteriorating respiratory patient: the drill",
          body: "Sit up (unless spinal/trauma), oxygen titrated to target (94–98%; 88–92% if CO₂ retainer), ABCs with full-minute rate + effort + sats + consciousness + BP/pulse/temp, listen to the chest (wheeze? crackles? silent? absent unilaterally?), VBG/ABG, ECG + CXR, bloods (FBC, CRP, lactate, glucose), nebulizers/antibiotics/diuretics per cause — and escalate early with SBAR. Silent chest, exhaustion, falling rate with rising CO₂, cyanosis, altered consciousness = pre-arrest: call the emergency team, prepare airway help, never leave the bedside.",
        },
      ],
      keyPoints: [
        "Inspiration active (diaphragm + intercostals), expiration passive; accessory use + recession = distress; dead space ~150 mL.",
        "Kussmaul = metabolic acidosis; Cheyne-Stokes = failure/brain/dying; Biot = brainstem; bradypnoea = opiates/ICP.",
        "Hb carries ~98% of O₂; Bohr shifts right at working tissues; delivery = CO × Hb × sats; lactate >2 = debt.",
        "CO₂ rides as bicarbonate (70%); CO poisons Hb with lying sats; methaemoglobinaemia resists O₂.",
        "CO₂ drives breathing; retainers lean on hypoxic drive — 88–92% targets, Venturi, monitored; hypoxia kills first.",
        "ROME: Respiratory Opposite, Metabolic Equal; deterioration drill: sit up, target O₂, ABCs, listen, gases, escalate.",
      ],
      quiz: {
        questionIds: ["NG-MOD-AP2-011","NG-MOD-AP2-012"],
        keywords: ["breathing", "diaphragm", "tidal volume", "dead space", "Kussmaul", "Cheyne-Stokes", "haemoglobin", "Bohr", "lactate", "CO2", "chemoreceptors", "hypoxic drive", "ABG", "acidosis", "oxygen therapy"],
        categories: ["fluid-electrolyte"],
      },
    },
  ],
};
