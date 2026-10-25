import type { GlossaryEntry } from "../types";

// Glossary — Fundamentals of Nursing.
// Authored against this course's own lessons. `lesson` must be a real lesson
// slug in this course, or the back-link silently disappears.

export const glossary: GlossaryEntry[] = [
  {
    term: "ABCDE approach",
    definition:
      "The order in which a deteriorating patient is assessed: Airway, Breathing, Circulation, Disability, Exposure. Assessment is done in that order because each step can kill faster than the one after it, and treatment begins before the survey is finished.",
    lesson: "first-aid-basic-life-support-and-emergencies-on-the-ward-and-in-the-community",
  },
  {
    term: "Aseptic technique",
    alsoKnownAs: ["asepsis", "sterile technique"],
    definition:
      "Practices that keep a wound or device free of introduced micro-organisms: hand hygiene, sterile gloves and equipment, and never turning your back on a sterile field. It protects the patient from organisms the nurse would otherwise carry to the site.",
    lesson: "pressure-injuries-wound-healing-and-aseptic-dressing-technique",
  },
  {
    term: "Blanching",
    definition:
      "Whiteness that appears when a fingertip presses on a reddened area and which disappears when the pressure is lifted. In a pressure injury, non-blanching redness means the tissue is already damaged and cannot recover simply by turning the patient.",
    lesson: "pressure-injuries-wound-healing-and-aseptic-dressing-technique",
  },
  {
    term: "Body mechanics",
    definition:
      "Using the body's strongest muscles, a wide base of support and a straight back when moving a patient, so the load is taken by the legs and the patient is not dragged. It protects the nurse's spine as much as the patient's skin.",
    lesson: "body-mechanics-positioning-moving-and-the-hazards-of-immobility",
  },
  {
    term: "Care plan",
    definition:
      "The written record of the nursing diagnoses identified for a patient, the outcomes aimed at, the interventions chosen and how they will be evaluated. It is what makes care repeatable between shifts rather than dependent on who is on duty.",
    lesson: "the-nursing-process-critical-thinking-and-care-planning",
  },
  {
    term: "Chest drain",
    alsoKnownAs: ["underwater seal drain", "intercostal drain"],
    definition:
      "A tube placed into the pleural space to remove air or fluid and allow the lung to re-expand. The bottle must stay below the level of the chest; swinging of the fluid with breathing shows the tube is patent, and continuous bubbling in the water-seal chamber suggests a leak.",
    lesson: "oxygenation-oxygen-therapy-suction-airways-tracheostomy-and-chest-drains",
  },
  {
    term: "Cultural safety",
    definition:
      "Care that the patient experiences as respectful and free of the power imbalance that comes from being judged. It is defined by the patient's experience rather than by the nurse's intention.",
    lesson: "culture-beliefs-and-nursing-care",
  },
  {
    term: "Dehiscence",
    alsoKnownAs: ["wound dehiscence"],
    definition:
      "Separation of a surgical wound along its suture line, often preceded by a sudden gush of pinkish fluid. If bowel is visible the wound has eviscerated and it is a surgical emergency — cover with a sterile moist dressing and call for help.",
    lesson: "pressure-injuries-wound-healing-and-aseptic-dressing-technique",
  },
  {
    term: "Early warning score",
    alsoKnownAs: ["NEWS", "MEWS", "EWS"],
    definition:
      "A number calculated from routine observations — respiratory rate, oxygen saturation, temperature, blood pressure, pulse and conscious level — that rises as a patient deteriorates. The score exists so that escalation is triggered by a number rather than by a nurse noticing something she cannot name.",
    lesson: "vital-signs-temperature-pulse-respiration-blood-pressure-and-oxygen-saturation",
  },
  {
    term: "Fluid balance",
    definition:
      "The charted comparison of everything that goes into a patient and everything that leaves, over 24 hours. Insensible loss from skin and lungs is not measured and is allowed for; a positive balance with a rising weight means retention, not recovery.",
    lesson: "nutrition-feeding-nasogastric-tubes-and-fluid-balance",
  },
  {
    term: "Fowler's position",
    definition:
      "Sitting the patient up at 45 to 60 degrees with the knees slightly flexed. Used to ease breathing in heart failure and asthma, because it lets the diaphragm descend and takes pressure off the abdomen.",
    lesson: "body-mechanics-positioning-moving-and-the-hazards-of-immobility",
  },
  {
    term: "Glasgow Coma Scale",
    alsoKnownAs: ["GCS"],
    definition:
      "A score out of 15 combining eye opening, best verbal response and best motor response. It is recorded as its three components rather than the total alone, because a total of 10 from a good motor score and no eye opening means something different from the same total the other way round.",
    lesson: "health-history-physical-examination-and-neurological-observations",
  },
  {
    term: "Granulation tissue",
    definition:
      "The moist, red, pebbled tissue that fills a healing wound from the base upwards. It is healthy and should be protected; its opposite is slough, which is yellow and adherent, and eschar, which is black and leathery.",
    lesson: "pressure-injuries-wound-healing-and-aseptic-dressing-technique",
  },
  {
    term: "Handover",
    alsoKnownAs: ["ISBAR", "SBAR"],
    definition:
      "The structured transfer of a patient's care from one nurse or shift to the next: identify, situation, background, assessment, recommendation. Handover is a recognised point of danger because information held by one nurse can fail to cross to the next.",
    lesson: "communication-documentation-and-handover",
  },
  {
    term: "Informed consent",
    definition:
      "A patient's agreement to a procedure after being told what it involves, why it is needed, the alternatives and the risks. Consent given to a nurse who cannot answer those questions is not informed, and it is the patient who signs, not the relative.",
    lesson: "specimens-investigations-and-assisting-with-clinical-procedures",
  },
  {
    term: "Insensible fluid loss",
    definition:
      "Water lost through the skin and in the breath, which cannot be measured on a fluid balance chart. It continues in a patient who is nil by mouth and rises with fever and with rapid breathing, which is why such a patient can dehydrate while their chart looks balanced.",
    lesson: "nutrition-feeding-nasogastric-tubes-and-fluid-balance",
  },
  {
    term: "Last offices",
    definition:
      "The care given to a body after death: washing, closing the eyes and mouth, removing tubes and lines as policy allows, and identifying the body correctly. It is done with the same dignity as care in life, and cultural and religious wishes are honoured where practicable.",
    lesson: "loss-grief-palliative-care-and-care-of-the-dying-and-the-dead",
  },
  {
    term: "Nasogastric tube",
    alsoKnownAs: ["NG tube", "NGT"],
    definition:
      "A tube passed through the nose into the stomach for feeding, drainage or medication. Position must be confirmed by pH testing of the aspirate or radiography — never by the sound of air injected with a syringe, which is unreliable and has killed patients.",
    lesson: "nutrition-feeding-nasogastric-tubes-and-fluid-balance",
  },
  {
    term: "Nursing diagnosis",
    definition:
      "A statement of the patient's actual or potential response to illness, written so that it can be acted on — for example 'risk of impaired skin integrity related to immobility'. It is not a medical diagnosis, and it names a problem nursing can treat.",
    lesson: "the-nursing-process-critical-thinking-and-care-planning",
  },
  {
    term: "Nursing process",
    alsoKnownAs: ["ADPIE"],
    definition:
      "The five-stage cycle of assessment, diagnosis, planning, implementation and evaluation that organises nursing care. It is cyclical because evaluation feeds back into a fresh assessment — care that is never evaluated is only a list of tasks.",
    lesson: "the-nursing-process-critical-thinking-and-care-planning",
  },
  {
    term: "Oxygen saturation",
    alsoKnownAs: ["SpO2", "sats"],
    definition:
      "The percentage of haemoglobin carrying oxygen, measured by pulse oximetry. It falls late in many illnesses and can read falsely normal in anaemia, carbon monoxide poisoning and poor peripheral circulation, so it is never interpreted without the respiratory rate.",
    lesson: "oxygenation-oxygen-therapy-suction-airways-tracheostomy-and-chest-drains",
  },
  {
    term: "Pain assessment tool",
    alsoKnownAs: ["numeric rating scale", "Wong-Baker", "PQRST"],
    definition:
      "A structured way of recording pain so that it can be compared over time — its site, character, severity, what relieves it and what it stops the patient doing. A patient's own report is the standard; nobody else's judgement replaces it.",
    lesson: "pain-management-hot-and-cold-applications-and-the-unconscious-patient",
  },
  {
    term: "Patient-centred care",
    definition:
      "Care planned around what matters to the person rather than around what is convenient for the service. It is measured by whether the patient felt informed and involved, not by whether the staff were kind.",
    lesson: "nursing-in-ghana-the-profession-health-and-the-patient",
  },
  {
    term: "Pressure area care",
    definition:
      "Regularly repositioning and inspecting the skin, keeping it clean and dry, and using the right support surface. It is the intervention that prevents most pressure injuries, and it is done on a schedule rather than when there is time.",
    lesson: "personal-hygiene-comfort-and-sleep",
  },
  {
    term: "Pressure injury",
    alsoKnownAs: ["pressure ulcer", "bed sore", "decubitus ulcer"],
    definition:
      "Damage to skin and underlying tissue from unrelieved pressure, usually over a bony prominence. It is staged by depth, from non-blanching redness of intact skin to full-thickness loss reaching muscle or bone, and prevention is turning, support surfaces and keeping the skin dry.",
    lesson: "pressure-injuries-wound-healing-and-aseptic-dressing-technique",
  },
  {
    term: "Primary survey",
    definition:
      "The rapid first assessment — airway, breathing, circulation, disability, exposure — with each threat treated as it is found before the next is assessed. It is repeated whenever the patient changes, because the airway that was clear five minutes ago may not be.",
    lesson: "first-aid-basic-life-support-and-emergencies-on-the-ward-and-in-the-community",
  },
  {
    term: "Reverse isolation",
    alsoKnownAs: ["protective isolation"],
    definition:
      "Protecting a vulnerable patient — a neutropenic or burns patient — from organisms brought in by others. It is the mirror image of source isolation, where the aim is to stop the patient's infection spreading out.",
    lesson: "admission-the-ward-environment-and-patient-safety",
  },
  {
    term: "Rights of medication administration",
    definition:
      "The checks made before any dose is given: right patient, right drug, right dose, right route, right time and right documentation. They are checks, not a ritual — each one exists because a specific error has happened when it was skipped.",
    lesson: "medication-administration-rights-routes-injections-and-calculations",
  },
  {
    term: "Sims' position",
    definition:
      "Lying on the left side with the right knee drawn up and the left arm behind. It is used for enemas and suppositories and for an unconscious patient who must not lie flat, because it keeps the airway clear.",
    lesson: "body-mechanics-positioning-moving-and-the-hazards-of-immobility",
  },
  {
    term: "Stoma",
    definition:
      "An artificial opening on the abdominal wall through which bowel is brought to the skin. A healthy stoma is red and moist like the inside of the mouth; a dusky, blue or black stoma means its blood supply is compromised and must be reported urgently.",
    lesson: "bowel-elimination-enemas-stoma-care-and-stool-specimens",
  },
  {
    term: "Suctioning",
    definition:
      "Clearing secretions from an airway with negative pressure, applied only as the catheter is withdrawn and only for as long as necessary. Prolonged suction removes oxygen as well as secretions and damages the mucosa, so it is done on indication, not on a timetable.",
    lesson: "oxygenation-oxygen-therapy-suction-airways-tracheostomy-and-chest-drains",
  },
  {
    term: "Unconscious patient",
    definition:
      "A patient unable to respond purposefully to their surroundings, who cannot protect their own airway, swallow, reposition or report pain. Care is built around what they cannot do for themselves: positioning, mouth and eye care, pressure relief and observations.",
    lesson: "pain-management-hot-and-cold-applications-and-the-unconscious-patient",
  },
  {
    term: "Urinary catheterisation",
    definition:
      "Passing a tube into the bladder to drain urine, used for retention, accurate measurement or bladder irrigation. Each day it stays in raises the risk of infection, so it is removed as soon as it is no longer needed and the bag is always kept below bladder level.",
    lesson: "urinary-elimination-urinalysis-and-catheterisation",
  },
  {
    term: "Vital signs",
    definition:
      "Temperature, pulse, respiration, blood pressure and oxygen saturation, measured at a frequency set by the patient's condition. The respiratory rate is the most often estimated and the earliest to change, which is why it is counted for a full minute rather than guessed.",
    lesson: "vital-signs-temperature-pulse-respiration-blood-pressure-and-oxygen-saturation",
  },
];
