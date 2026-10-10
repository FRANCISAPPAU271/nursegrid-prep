import type { CourseModule } from "../types";

export const oxygenAndAirway: CourseModule = {
  slug: "oxygen-and-airway-care",
  title: "Oxygen therapy and airway care",
  summary: "Oxygen as a prescribed drug with a target; the devices and their flow rates; keeping the airway clear with positioning, physiotherapy, suction and tracheostomy care; and recognising the patient who is deteriorating before they arrest.",
  lessons: [
    {
      slug: "oxygen-therapy-and-delivery-devices",
      title: "Oxygen therapy and delivery devices",
      minutes: 15,
      objectives: [
        "State the target saturation ranges and identify patients at risk of hypercapnic respiratory failure.",
        "Match each oxygen device to its flow rate, delivered concentration and the patient it suits.",
        "Set up, monitor, humidify and wean oxygen safely and document it as a drug.",
        "Explain the safety rules for cylinders, concentrators and piped oxygen on a Ghanaian ward.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Oxygen is a drug",
          paragraphs: [
            "Oxygen has a prescription, a dose (flow and device), a target (saturation range), side effects (drying, CO2 retention in susceptible patients, absorption atelectasis, fire) and a monitoring plan. Too little kills quickly; too much, given blindly, harms the patient with chronic lung disease. The modern rule is simple: <strong>prescribe a target saturation and titrate the oxygen to reach it</strong>.",
            "Targets: <strong>94–98%</strong> for most acutely unwell adults; <strong>88–92%</strong> for patients at risk of hypercapnic (type 2) respiratory failure — moderate-to-severe COPD, severe kyphoscoliosis or chest-wall deformity, neuromuscular weakness, obesity hypoventilation, bronchiectasis and cystic fibrosis. In cardiac arrest, trauma, shock, sepsis, anaphylaxis and major bleeding start at 15 L/min through a reservoir mask and titrate down once stable. In an uncomplicated myocardial infarction or stroke with normal saturation, oxygen is not given — it does not help and may harm.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ADV-0122.svg",
          alt: "Four oxygen devices compared: nasal cannula, simple mask, reservoir mask and Venturi mask with their flow rates and concentrations",
          caption: "Choose the device for the concentration you need and the patient in front of you — then titrate to the target saturation.",
        },
        {
          type: "table",
          heading: "Delivery devices",
          columns: ["Device", "Flow", "Approximate FiO2", "Use it for", "Watch for"],
          rows: [
            ["Nasal cannula", "1–4 L/min (up to 6)", "24–40% (roughly +4% per litre)", "Mild hypoxaemia, long-term and home oxygen, patients who need to eat and talk, COPD at 1–2 L/min", "Dries and ulcerates the nose above 4 L/min — humidify; pressure damage behind the ears; mouth breathers still receive some benefit"],
            ["Simple face mask", "5–10 L/min", "40–60%", "Moderate hypoxaemia, short term", "Never below 5 L/min — exhaled CO2 is rebreathed; cannot give precise low concentrations, so unsuitable for CO2 retainers; claustrophobia; remove to eat"],
            ["Venturi mask", "Each colour-coded valve states its flow: blue 24% at 2–4 L, white 28% at 4–6 L, yellow 35% at 8–10 L, red 40% at 10–12 L, green 60% at 12–15 L", "Exact 24–60%", "COPD and anyone needing a <strong>precise</strong> concentration; titration towards 88–92%", "Use the flow printed on the valve, not less; if the respiratory rate is above 30 increase the flow by 50% to keep the concentration accurate"],
            ["Non-rebreather (reservoir) mask", "10–15 L/min", "60–90%", "Emergencies — trauma, shock, severe asthma, pneumonia, sepsis, carbon monoxide poisoning", "Inflate the bag with your thumb over the valve before applying; the bag must not collapse more than a third on inspiration; not for long-term use; step down as soon as the target is reached"],
            ["Bag-valve-mask with reservoir", "15 L/min", "Up to 90% when squeezed", "Respiratory arrest or inadequate breathing", "Two-person technique for a seal; watch the chest rise; one breath every 5–6 seconds in an adult"],
            ["High-flow nasal oxygen", "Up to 60 L/min heated and humidified", "21–100%", "Type 1 failure in high-dependency areas", "Needs a dedicated machine and monitoring"],
            ["CPAP / BiPAP (non-invasive ventilation)", "Set pressures", "Titrated", "CPAP: acute pulmonary oedema, obstructive sleep apnoea; BiPAP: type 2 failure in COPD exacerbations", "Mask seal and pressure areas on the nose bridge, gastric distension, aspiration risk, patient must be able to protect the airway and cooperate"],
          ],
        },
        {
          type: "list",
          heading: "Setting up and monitoring",
          items: [
            "Check the prescription and target range; identify an at-risk patient (COPD alert card, previous NIV, bicarbonate above 28 on the blood results) and start them on 24–28% Venturi or 1–2 L nasal cannula, with a blood gas within 30–60 minutes.",
            "Confirm the source — piped oxygen, concentrator or cylinder — is actually delivering: the flowmeter ball sits in the middle of the line, tubing is connected and not kinked, and the cylinder gauge is not in the red. Know the cylinder duration: litres remaining ÷ flow = minutes.",
            "Record SpO2, respiratory rate, device and flow together on the observation chart every time; a saturation without the oxygen it was recorded on is meaningless.",
            "<strong>Humidify</strong> oxygen given above 4 L/min, for more than 24 hours, through a tracheostomy, or to a patient with thick secretions; use sterile water and change it as per policy.",
            "<strong>Skin:</strong> check the bridge of the nose, cheeks and behind the ears every shift; pad the tubing; use water-based lubricant for dry nostrils — <strong>never petroleum jelly</strong> or oil-based creams near oxygen.",
            "<strong>Wean</strong> as the patient improves: reduce the flow or step down the device while saturations hold in range; stop when the patient keeps the target on room air for a reasonable interval; recheck after exertion and during sleep.",
            "Give <strong>nebulisers in COPD by air</strong> (compressor) or for no more than 6 minutes on oxygen, with nasal cannula oxygen continuing underneath, to avoid driving the saturation above the target.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Oxygen safety on the ward and at home",
          body: "No smoking, candles, kerosene lamps, gas cookers or open flames within 2 metres. No oil, grease or petroleum jelly on the regulator, the patient's face or your hands. Secure cylinders upright in a stand or chained — a falling cylinder with a broken valve is a missile. Open cylinder valves slowly, away from your face. Keep spare cylinders and a spanner on the ward and check them every shift. Teach families using home concentrators the same rules.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "The number that answers device questions",
          body: "Nasal cannula 1–4 L = 24–40%. Simple mask 5–10 L (never less than 5). Venturi = exact concentration — the COPD answer. Non-rebreather 10–15 L = 60–90% — the emergency answer. Target 94–98% normally, 88–92% in the CO2 retainer.",
        },
      ],
      keyPoints: [
        "Oxygen is prescribed to a target saturation: 94–98% for most adults, 88–92% for patients at risk of hypercapnic failure.",
        "Venturi masks give a precise concentration (COPD); reservoir masks at 15 L/min give the highest (emergencies); a simple mask must never run below 5 L/min.",
        "Humidify above 4 L/min or long term; check skin; water-based lubricant only.",
        "Record saturation together with the device and flow; wean as the patient improves.",
        "Never withhold oxygen from a hypoxic patient — control it and check a blood gas.",
      ],
      quiz: {
        keywords: ["oxygen", "nasal cannula", "non rebreather", "reservoir mask", "venturi", "face mask", "humidif", "hypoxia", "hypoxaemia", "oxygen saturation", "spo2", "oxygen cylinder", "oxygen concentrator", "flow rate", "litres per minute"],
      },
    },
    {
      slug: "airway-clearance-suctioning-and-tracheostomy-care",
      title: "Airway clearance, suctioning and tracheostomy care",
      minutes: 16,
      objectives: [
        "Use positioning, breathing exercises, incentive spirometry, hydration and chest physiotherapy to keep the airways clear.",
        "Perform oropharyngeal and tracheal suction safely and recognise its complications.",
        "Deliver safe daily tracheostomy care and respond to a blocked or displaced tube.",
        "Insert and size an oropharyngeal airway correctly and know when not to.",
      ],
      blocks: [
        {
          type: "list",
          heading: "Keeping the airways clear without equipment",
          items: [
            "<strong>Position:</strong> sit the breathless patient upright (high Fowler's) with the arms supported; for one-sided lung disease nurse <strong>good lung down</strong> so perfusion matches ventilation; for the unconscious patient, the recovery position protects the airway from the tongue and vomit. Turn immobile patients at least two-hourly.",
            "<strong>Deep breathing and coughing:</strong> every hour while awake after surgery — three slow deep breaths, hold, then a strong cough with the wound supported (splinted) with a pillow or folded towel. A <strong>huff</strong> (forced expiration with an open glottis, as if steaming a mirror) moves secretions with less pain than a cough.",
            "<strong>Incentive spirometer:</strong> sit up, exhale, seal the lips, inhale slowly to lift the marker to the target, hold 3–5 seconds, rest — ten breaths every hour awake. It prevents atelectasis after abdominal and chest surgery; it is not a toy to blow into.",
            "<strong>Hydration and humidification:</strong> dry secretions are thick secretions. Oral or IV fluids, humidified oxygen, steam and nebulised saline loosen them.",
            "<strong>Chest physiotherapy:</strong> postural drainage positions use gravity to drain each lobe; percussion (cupped hands) and vibration on expiration loosen secretions. Do not percuss over the spine, kidneys, breast tissue, rib fractures, a chest drain or a surgical wound; avoid in haemoptysis, pulmonary embolism, raised intracranial pressure and unstable cardiac patients. Do it before meals or two hours after.",
            "<strong>Early mobilisation</strong> is the best physiotherapy of all. Pain control makes all of the above possible — a patient in pain will not breathe deeply or cough.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRC-1386.svg",
          alt: "Airway procedures: sizing an oropharyngeal airway from the incisors to the angle of the jaw, suction timing, and watching the patient",
          caption: "Size it, time it, watch the patient — an airway adjunct that is too long, a suction pass that is too slow, or a device forced on a patient with a gag reflex all do harm.",
        },
        {
          type: "list",
          heading: "Airway adjuncts",
          items: [
            "<strong>Oropharyngeal (Guedel) airway:</strong> only in the unconscious patient <strong>without a gag reflex</strong> — otherwise it provokes vomiting and aspiration. Size from the incisors (or corner of the mouth) to the angle of the jaw. In adults insert upside down and rotate 180° over the tongue; in children insert the right way up with a tongue depressor. Too long presses the epiglottis down; too short pushes the tongue back.",
            "<strong>Nasopharyngeal airway:</strong> tolerated by the semi-conscious patient with a gag reflex; size from the nostril to the tragus of the ear; lubricate and insert with a gentle twisting motion along the floor of the nose. Avoid in suspected base-of-skull fracture, severe facial injury and bleeding disorders.",
            "<strong>Head tilt–chin lift</strong> opens the airway in most patients; use a <strong>jaw thrust</strong> instead when the cervical spine may be injured.",
          ],
        },
        {
          type: "table",
          heading: "Suctioning",
          columns: ["Point", "Oropharyngeal (Yankauer)", "Nasopharyngeal / tracheal (catheter)"],
          rows: [
            ["Indication", "Visible secretions or vomit in the mouth; patient unable to clear them", "Audible or felt secretions, falling saturation, rising respiratory rate or heart rate, ineffective cough, before cuff deflation — never on a fixed schedule"],
            ["Technique", "Clean technique, gloves and eye protection; rigid catheter along the cheek, not down the throat", "Aseptic/sterile technique; catheter no more than half the internal diameter of the tube; pre-oxygenate for 30–60 seconds; insert gently <strong>without suction</strong> until resistance or cough, withdraw 1 cm, then apply suction intermittently while rotating and withdrawing"],
            ["Pressure", "Moderate", "Adults 100–150 mmHg (some policies 80–120); children 80–100; infants 60–80"],
            ["Time", "Brief", "Each pass no more than <strong>10–15 seconds</strong>; no more than 2–3 passes; re-oxygenate and let the patient recover between passes"],
            ["Complications", "Gagging, vomiting, trauma to the gums", "Hypoxia, vagal bradycardia and arrest, mucosal trauma and bleeding, bronchospasm, infection, raised intracranial pressure, atelectasis. Stop immediately for bradycardia, desaturation or distress"],
            ["Do not", "Leave suction running against the tongue", "Instil saline routinely (it does not thin secretions and pushes bacteria down); reuse a single-use catheter; apply suction on the way in"],
            ["Afterwards", "Clear the tubing with water; oral care", "Reassess breath sounds and saturation; document amount, colour and consistency; dispose of the catheter; clear the tubing"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PER-1556.svg",
          alt: "The tracheostomy: what the tube bypasses, what must be at the bedside, and the emergencies that can kill",
          caption: "Humidification is treatment; a bell and paper are safety equipment; the spare tubes, dilators, suction and bag-valve-mask live at the bedside from hour one.",
        },
        {
          type: "list",
          heading: "Tracheostomy care",
          items: [
            "<strong>At the bedside always:</strong> a spare tube of the same size and one a size smaller, tracheal dilators, obturator, working suction with the right catheters, a bag-valve-mask, oxygen, humidification, a 10 mL syringe for the cuff, and a <strong>call bell with pen and paper</strong> because the patient cannot shout. Display the tube type and size, date of insertion and whether the upper airway is patent.",
            "<strong>Humidify</strong> continuously (heated humidifier or heat-moisture exchanger) — the nose has been bypassed and dry secretions crust and block the tube.",
            "<strong>Inner cannula:</strong> remove, inspect and clean (or replace) at least every 8 hours and whenever secretions are thick; it is the single most effective way to prevent blockage.",
            "<strong>Stoma care:</strong> clean with normal saline, dry, inspect for redness, granulation and infection; a keyhole dressing; change ties when soiled with <strong>two people</strong>, one holding the tube, with one finger's space under the new ties.",
            "<strong>Cuff:</strong> if present, keep pressure at 20–30 cmH2O — too high causes tracheal necrosis, too low allows aspiration. Deflate only on instruction and after suctioning above the cuff.",
            "<strong>Communication and nutrition:</strong> writing board, picture charts, speaking valves when prescribed; swallow assessment before oral intake; mouth care four-hourly.",
            "<strong>Emergency — blocked tube:</strong> call for help, remove the inner cannula, suction, deflate the cuff; if still obstructed, remove the tube and ventilate via the stoma (or mouth if the upper airway is patent). <strong>Displaced tube</strong> in the first 7 days before the tract has formed is a life-threatening emergency — never force it back blindly; call the airway team, oxygenate, cover the stoma if ventilating by mouth. <strong>Bleeding</strong> more than a few streaks, especially days after insertion, can herald a fistula into the innominate artery.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Suction numbers",
          body: "Pre-oxygenate. Catheter no more than half the tube diameter. No suction going in. 10–15 seconds per pass, maximum three passes, rest between. Adults 100–150 mmHg. Stop for bradycardia or desaturation. No routine saline.",
        },
      ],
      keyPoints: [
        "Upright position, hourly deep breathing and coughing with wound support, incentive spirometry and early mobilisation prevent post-operative pneumonia.",
        "A Guedel airway only goes into a patient with no gag reflex; size it from the incisors to the angle of the jaw.",
        "Suction only when indicated, pre-oxygenate, no suction on insertion, 10–15 seconds a pass; watch for bradycardia and hypoxia.",
        "Tracheostomy: humidify, clean the inner cannula 8-hourly, keep spare tubes and suction at the bedside, give the patient a bell and paper.",
        "A blocked or displaced tracheostomy tube is an emergency: call for help, inner cannula out, suction, deflate the cuff, oxygenate.",
      ],
      quiz: {
        keywords: ["suction", "tracheostomy", "incentive spirom", "chest physiotherapy", "postural drainage", "deep breathing", "oropharyngeal airway", "guedel", "airway", "secretions", "atelectasis", "recovery position", "jaw thrust", "head tilt"],
      },
    },
    {
      slug: "recognising-respiratory-deterioration",
      title: "Recognising and escalating respiratory deterioration",
      minutes: 12,
      objectives: [
        "Use an early warning score and the ABCDE approach to spot deterioration early.",
        "Differentiate hypoxia from hypercapnia at the bedside.",
        "Apply age-specific fast-breathing thresholds in children.",
        "Escalate effectively with SBAR and act while waiting for help.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Deterioration is usually visible hours before the arrest",
          paragraphs: [
            "Reviews of in-hospital cardiac arrests find abnormal observations — most often a rising respiratory rate — documented for six to eight hours beforehand, charted and not acted upon. The purpose of an early warning score (NEWS2 and its local versions) is to force the escalation: respiratory rate, oxygen saturation, whether oxygen is in use, temperature, systolic blood pressure, heart rate and level of consciousness each score points, and the total triggers a defined response.",
            "The score is a safety net, not a substitute for judgement. A nurse who is worried should escalate whatever the total.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FUN-0013.svg",
          alt: "A four-step priority ladder: airway, breathing, circulation, then disability and everything else",
          caption: "Airway before breathing before circulation. Fix each problem before you look for the next.",
        },
        {
          type: "table",
          heading: "ABCDE for the breathless patient",
          columns: ["Step", "Look for", "Do now"],
          rows: [
            ["Airway", "Talking? Stridor, snoring, gurgling, see-saw breathing, swelling of lips or tongue", "Head tilt–chin lift or jaw thrust, suction, adjunct if no gag, sit up; anaphylaxis → adrenaline IM; choking → back blows and abdominal thrusts; call for help"],
            ["Breathing", "Rate, depth, symmetry, effort, SpO2, colour, breath sounds, tracheal position, ability to speak", "Oxygen to target, upright, nebuliser if wheeze, prepare bag-valve-mask; think tension pneumothorax if one silent hyper-resonant side with hypotension"],
            ["Circulation", "Pulse, blood pressure, capillary refill, urine output, cold peripheries; a bounding pulse and warm hands suggest CO2 retention", "IV access, bloods including blood gas and lactate, fluids as indicated, ECG"],
            ["Disability", "AVPU or GCS, pupils, glucose; agitation or drowsiness", "Treat hypoglycaemia; naloxone if opioid toxicity; drowsiness in a breathless patient means hypercapnia or exhaustion — urgent review"],
            ["Exposure", "Temperature, rashes, wounds, drains, swelling of a calf, chest drain bottle", "Treat sepsis in the first hour; keep warm; review the drug chart"],
          ],
        },
        {
          type: "table",
          heading: "Hypoxia or hypercapnia?",
          columns: ["Feature", "Hypoxia (low oxygen)", "Hypercapnia (high carbon dioxide)"],
          rows: [
            ["Mental state", "Restless, anxious, agitated, confused — 'agitation is hypoxia until proven otherwise'", "Drowsy, headache, confused, eventually unconscious (CO2 narcosis)"],
            ["Circulation", "Tachycardia, then bradycardia late; pale or cyanosed", "Bounding pulse, warm flushed peripheries, dilated veins"],
            ["Hands", "Cold, cyanosed nail beds", "Flapping tremor (asterixis), warm"],
            ["Breathing", "Fast and laboured", "May be slow or shallow (opioids, exhaustion) or fast (COPD exacerbation)"],
            ["Confirm", "SpO2, PaO2 below 8 kPa (60 mmHg)", "Blood gas: PaCO2 above 6.5 kPa (50 mmHg) with falling pH"],
            ["Respond", "Oxygen, treat the cause", "Improve ventilation: sit up, clear the airway, reverse sedatives, controlled oxygen, non-invasive ventilation"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-CHI-3020.svg",
          alt: "IMCI chart: general danger signs, then age-specific fast-breathing thresholds of 60, 50 and 40 breaths per minute, and chest indrawing",
          caption: "In children, count for a full minute while the child is calm: fast breathing is 60 or more under 2 months, 50 or more at 2–11 months, 40 or more at 1–5 years. Chest indrawing, stridor at rest, grunting and cyanosis mean severe disease.",
        },
        {
          type: "list",
          heading: "Children deteriorate differently",
          items: [
            "Children compensate until they suddenly do not: a normal blood pressure is <strong>not</strong> reassuring. Watch effort — nasal flaring, head bobbing, grunting, subcostal and intercostal recession, tracheal tug — and the level of alertness.",
            "<strong>General danger signs</strong> (IMCI): unable to drink or breastfeed, vomits everything, convulsions, lethargic or unconscious — any one means urgent referral.",
            "Silent or shallow breathing, bradycardia and a floppy child are pre-arrest signs, not improvement.",
            "Oxygen targets in children are the same (94–98%); use paediatric nasal prongs at 1–2 L/min for infants and avoid cold high-flow blasts in the face.",
          ],
        },
        {
          type: "list",
          heading: "Escalate with SBAR — and act while you wait",
          items: [
            "<strong>Situation:</strong> who you are, where, which patient, and the one-sentence problem — 'respiratory rate 34, saturation 86% on 10 litres'.",
            "<strong>Background:</strong> diagnosis, relevant history, current treatment and oxygen.",
            "<strong>Assessment:</strong> what you think is happening — 'I think she is tiring and may need NIV'.",
            "<strong>Recommendation:</strong> what you need and by when — 'please come now; I have sat her up, started a reservoir mask and prepared the suction and bag-valve-mask'.",
            "While waiting: airway, oxygen, position, monitor, IV access, blood gas if you can, nebuliser if wheezing, stop opioids and sedatives, bring the emergency trolley to the bedside, inform the nurse in charge, and document times.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Two rules",
          body: "A rising respiratory rate is the earliest sign of deterioration. An agitated patient is hypoxic and a drowsy breathless patient is hypercapnic until a blood gas proves otherwise — both need a doctor now, not at the next round.",
        },
      ],
      keyPoints: [
        "Early warning scores exist to force escalation; a worried nurse escalates regardless of the total.",
        "ABCDE in order — airway, breathing, circulation, disability, exposure — fixing each before moving on.",
        "Agitation suggests hypoxia; drowsiness, flapping tremor and a bounding pulse suggest hypercapnia.",
        "Children: count for a full minute (60/50/40 thresholds), watch effort and alertness, and never trust a normal blood pressure.",
        "Escalate with SBAR, and act while waiting: sit up, oxygen, suction and bag-valve-mask ready, stop sedatives.",
      ],
      quiz: {
        keywords: ["early warning", "deteriorat", "respiratory distress", "respiratory failure", "sbar", "abcde", "fast breathing", "chest indrawing", "danger sign", "hypercapn", "hypoxia", "escalat", "respiratory rate", "cyanosis"],
      },
    },
  ],
};
