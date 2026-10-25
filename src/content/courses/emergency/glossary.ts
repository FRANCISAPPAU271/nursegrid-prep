import type { GlossaryEntry } from "../types";

// Glossary — Emergency Nursing.
// Authored against this course's own lessons. Shock and life support are
// taught in depth here and in Critical Care; the definitions are written once
// here and Critical Care stays consistent with them.

export const glossary: GlossaryEntry[] = [
  {
    term: "Advanced life support",
    alsoKnownAs: ["ALS", "ACLS"],
    definition:
      "The step beyond basic life support: rhythm recognition, defibrillation, drugs and advanced airway management during a cardiac arrest. It is built on basic life support that is already good — compressions that stop for drugs are worse than compressions that continue.",
    lesson: "basic-and-advanced-life-support",
  },
  {
    term: "Anaphylaxis",
    definition:
      "A severe systemic allergic reaction with airway swelling, bronchospasm and a falling blood pressure. Adrenaline into the outer thigh is the treatment and is given before anything else; antihistamines and steroids are not a substitute and act too slowly.",
    lesson: "septic-anaphylactic-neurogenic-cardiogenic-and-obstructive-shock",
  },
  {
    term: "Automated external defibrillator",
    alsoKnownAs: ["AED"],
    definition:
      "A portable device that analyses the heart rhythm and delivers a shock when one is indicated, with voice prompts for a rescuer who is not trained to read rhythms. It is attached and switched on early, and compressions resume the instant the shock is delivered.",
    lesson: "basic-and-advanced-life-support",
  },
  {
    term: "Capillary refill time",
    definition:
      "The time for colour to return after pressing a fingertip for five seconds, normally under two. A prolonged time suggests poor peripheral perfusion, but it is affected by a cold room, so it is read alongside the pulse, blood pressure and conscious level rather than alone.",
    lesson: "shock-pathophysiology-classification-and-recognition",
  },
  {
    term: "Cardiogenic shock",
    definition:
      "Inadequate perfusion because the pump itself has failed, usually after a large infarct. The blood pressure falls, the skin is cold and clammy, urine output drops and the lungs fill — giving fluid does not help and may worsen the lungs.",
    lesson: "septic-anaphylactic-neurogenic-cardiogenic-and-obstructive-shock",
  },
  {
    term: "Central venous pressure",
    definition:
      "A pressure measured in a large vein near the heart, once used to judge filling. It is now understood to predict fluid responsiveness poorly, and it is interpreted with the clinical picture rather than as a number to chase.",
    lesson: "vascular-access-resuscitation-fluids-and-haemodynamic-monitoring",
  },
  {
    term: "Compensated shock",
    definition:
      "The stage at which the body is still holding the blood pressure up by narrowing vessels and speeding the heart, so the reading looks reassuring while perfusion is already failing. The early signs are a rising pulse, cool peripheries, anxiety and a falling urine output.",
    lesson: "shock-pathophysiology-classification-and-recognition",
  },
  {
    term: "Defibrillation",
    definition:
      "An unsynchronised shock delivered to stop a chaotic rhythm and let the heart restart in an organised one, used in ventricular fibrillation and pulseless ventricular tachycardia. It is the only treatment that reverses those rhythms, and delay costs survival minute by minute.",
    lesson: "basic-and-advanced-life-support",
  },
  {
    term: "Dilution of a drug",
    definition:
      "Adding fluid to a concentrated medicine so that the dose can be measured accurately and given slowly. A drug drawn neat and given fast reaches the heart at a concentration it was never meant to see.",
    lesson: "emergency-drugs-and-drug-calculations",
  },
  {
    term: "Drowning",
    definition:
      "Submersion causing respiratory impairment, in which the first priority is oxygen and ventilation rather than trying to remove water from the lungs. The secondary danger is a delayed deterioration hours later, so observation continues after the patient looks well.",
    lesson: "burns-drowning-heat-cold-electricity-bites-and-stings",
  },
  {
    term: "Escalation",
    definition:
      "Calling for help from someone senior when a patient is deteriorating, without waiting to be certain. The barrier is rarely knowledge and usually hierarchy — which is why early warning scores exist, so that the number makes the call.",
    lesson: "recognising-and-escalating-the-deteriorating-patient",
  },
  {
    term: "Glasgow Coma Scale",
    alsoKnownAs: ["GCS"],
    definition:
      "A score out of 15 combining eye opening, best verbal response and best motor response. It is recorded as its three components rather than the total alone, because a total of 10 from a good motor score and no eye opening means something different from the same total the other way round.",
    lesson: "trauma-nursing",
  },
  {
    term: "Heat stroke",
    definition:
      "A core temperature above 40 °C with altered consciousness after heat exposure, where the body's cooling has failed altogether. Cooling is the treatment and every minute of delay increases organ damage; it is distinguished from heat exhaustion by the change in consciousness.",
    lesson: "burns-drowning-heat-cold-electricity-bites-and-stings",
  },
  {
    term: "Hypothermia",
    definition:
      "A core temperature low enough to impair the body — below 35 °C — when the body can no longer re-warm itself. In the injured patient it worsens bleeding and impairs clotting, which is why warming is part of resuscitation and not comfort care.",
    lesson: "burns-drowning-heat-cold-electricity-bites-and-stings",
  },
  {
    term: "Hypovolaemic shock",
    definition:
      "Inadequate perfusion from lost circulating volume, most often bleeding. The body compensates by narrowing vessels and speeding the heart, so the blood pressure falls late — a patient can be in severe shock with a normal reading.",
    lesson: "hypovolaemic-and-haemorrhagic-shock",
  },
  {
    term: "Infusion rate",
    definition:
      "How fast a fluid or drug is delivered, set in millilitres per hour from the volume and the prescribed duration. It is calculated once and checked against the bag, because an arithmetic slip here is a dose error delivered continuously.",
    lesson: "emergency-drugs-and-drug-calculations",
  },
  {
    term: "Intensive care essentials for the emergency nurse",
    definition:
      "The minimum a nurse in an emergency department must be able to do for a ventilated patient awaiting a bed: keep the airway secure, watch the monitor rather than the machine, chart the observations, and know when to call for help. Transfer and waiting are when such patients come to harm.",
    lesson: "intensive-care-nursing-essentials",
  },
  {
    term: "Intraosseous access",
    definition:
      "A needle placed into bone marrow to give fluid and drugs when a vein cannot be found in time. It is a temporary bridge, not a destination, and it is the intervention that buys the minutes a collapsing child does not have.",
    lesson: "vascular-access-resuscitation-fluids-and-haemodynamic-monitoring",
  },
  {
    term: "Mass casualty",
    alsoKnownAs: ["major incident", "mass casualty incident"],
    definition:
      "An incident producing more casualties than the facility can treat in the usual way, so the aim shifts from doing everything for one patient to doing the most good for the most. Triage decides who is treated first, and who is made comfortable rather than treated.",
    lesson: "mass-casualties-disasters-transfer-and-the-law-of-the-emergency-department",
  },
  {
    term: "Neurogenic shock",
    definition:
      "Loss of sympathetic tone after a high spinal cord injury, producing low blood pressure with a slow pulse and warm dry skin. It is the one form of shock in which the pulse does not rise, and it is treated with fluids and vasopressors rather than blood.",
    lesson: "septic-anaphylactic-neurogenic-cardiogenic-and-obstructive-shock",
  },
  {
    term: "Obstructive shock",
    definition:
      "Inadequate output because something is physically stopping the heart filling or emptying — tamponade, tension pneumothorax or a massive embolus. The clue is distended neck veins with a low blood pressure, and the treatment is to relieve the obstruction, not to give fluid.",
    lesson: "septic-anaphylactic-neurogenic-cardiogenic-and-obstructive-shock",
  },
  {
    term: "Poisoning",
    definition:
      "Exposure to a harmful substance by ingestion, inhalation, injection or skin contact. Treatment begins with airway, breathing and circulation, then decontamination and an antidote if one exists; inducing vomiting is avoided because it risks aspirating the poison into the lungs.",
    lesson: "poisoning-and-overdose",
  },
  {
    term: "Primary survey",
    alsoKnownAs: ["ABCDE"],
    definition:
      "The rapid first assessment — airway, breathing, circulation, disability, exposure — with each threat treated as it is found before the next is assessed. It is repeated whenever the patient changes, because the airway that was clear five minutes ago may not be.",
    lesson: "emergency-care-in-ghana-triage-and-the-primary-survey",
  },
  {
    term: "Procedural sedation",
    definition:
      "Drugs given to make a patient comfortable and still during a procedure while keeping them breathing and able to respond. It is not general anaesthesia, but it can become it, so monitoring, oxygen and a rescuer who can manage an airway are part of the setup.",
    lesson: "acute-pain-and-procedural-sedation",
  },
  {
    term: "Recovery position",
    definition:
      "Lying on the side with the upper leg flexed and the head tilted so the airway stays open, used for an unconscious patient who is breathing. It keeps the tongue and vomit away from the airway and allows the patient to be watched continuously.",
    lesson: "basic-and-advanced-life-support",
  },
  {
    term: "Sepsis",
    definition:
      "Life-threatening organ dysfunction caused by a dysregulated response to infection. It is a medical emergency in which the first hour matters most — cultures, antibiotics, fluids and oxygen begin before the diagnosis is confirmed.",
    lesson: "septic-anaphylactic-neurogenic-cardiogenic-and-obstructive-shock",
  },
  {
    term: "Shock",
    definition:
      "A state in which the tissues are not getting enough oxygen, whatever the blood pressure reads. It is classified by cause — hypovolaemic, cardiogenic, distributive and obstructive — because the treatment diverges immediately, and the signs that combine them are a fast pulse, cool or warm peripheries, a falling urine output and a changing conscious level.",
    lesson: "shock-pathophysiology-classification-and-recognition",
  },
  {
    term: "ST segment",
    definition:
      "The part of the ECG between the end of one wave complex and the start of the next, whose elevation or depression marks an acute or ongoing myocardial injury. Reading it is what separates a heart attack needing reperfusion from one that does not.",
    lesson: "ecg-recognition-for-emergencies",
  },
  {
    term: "Supraglottic airway",
    definition:
      "A device that sits above the vocal cords to keep the upper airway open without the skill of intubation. It is the rescue when a simple airway will not do and an anaesthetist is not at the bedside.",
    lesson: "airway-management-oxygen-and-ventilation",
  },
  {
    term: "Surge capacity",
    definition:
      "How much more work a facility can absorb before care degrades for everyone. Planning it means beds, staff, blood, oxygen and equipment — and knowing which of those runs out first, because that is what actually limits the response.",
    lesson: "mass-casualties-disasters-transfer-and-the-law-of-the-emergency-department",
  },
  {
    term: "Triage",
    definition:
      "Sorting patients by urgency rather than arrival, so that the sickest are seen first while those who can wait are allowed to. It is a continuous process rather than a label given at the door, and it is re-assessed whenever anything changes.",
    lesson: "emergency-care-in-ghana-triage-and-the-primary-survey",
  },
  {
    term: "Uncompensated shock",
    definition:
      "The stage at which the body's compensation has failed and the blood pressure begins to fall. By this point perfusion of brain and kidney has already been impaired for some time, so it is a late sign and a reason for urgent action, not for reassurance.",
    lesson: "shock-pathophysiology-classification-and-recognition",
  },
  {
    term: "Warm shock",
    definition:
      "A shock state with warm, flushed peripheries and a wide pulse pressure, typical of early sepsis, in which vessels are dilated rather than clamped down. It looks less alarming than cold shock and is easy to miss until the blood pressure falls.",
    lesson: "septic-anaphylactic-neurogenic-cardiogenic-and-obstructive-shock",
  },
];
