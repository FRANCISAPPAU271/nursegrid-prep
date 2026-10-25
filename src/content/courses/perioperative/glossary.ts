import type { GlossaryEntry } from "../types";

// Glossary — Perioperative Nursing.
// Authored against this course's own lessons. Asepsis and pre-operative
// preparation are taught in depth in the Procedures course; the entries here
// carry the surgical-specific content and stay consistent with it.

export const glossary: GlossaryEntry[] = [
  {
    term: "American Society of Anesthesiologists grade",
    alsoKnownAs: ["ASA grade", "ASA physical status"],
    definition:
      "A six-point classification of a patient's fitness for anaesthesia, from ASA I (healthy) to ASA VI (brain-dead organ donor). It predicts risk rather than the operation itself, which is why a fit patient for minor surgery and a frail one for the same operation are not the same proposition.",
    lesson: "the-surgical-patient-consent-and-preoperative-assessment",
  },
  {
    term: "Anaesthesia",
    definition:
      "Loss of sensation for surgery — general (unconscious), regional (a block of the body) or local. Each removes protective reflexes the patient normally relies on, which is why airway, temperature and positioning become the nurse's responsibility during the operation.",
    lesson: "anaesthesia-positioning-and-intraoperative-patient-safety",
  },
  {
    term: "Anastomotic leak",
    definition:
      "Failure of a surgical join in the bowel, appearing usually between the fifth and eighth day with fever, pain, a rising pulse and a quiet abdomen. It is the complication most likely to be mistaken for a chest or urine infection.",
    lesson: "gastrointestinal-surgery-and-stoma-nursing",
  },
  {
    term: "Atelectasis",
    definition:
      "Collapse of part of the lung, common after anaesthesia and abdominal surgery because breathing becomes shallow and secretions pool. It is why deep breathing, coughing and early mobilisation are started on the first day rather than when the patient feels like it.",
    lesson: "postoperative-complications-and-their-timetable",
  },
  {
    term: "Bier block",
    alsoKnownAs: ["intravenous regional anaesthesia"],
    definition:
      "A local anaesthetic given into a limb whose blood flow has been cut off by a tourniquet, used for short procedures on an arm. The tourniquet must not be released early, and releasing it releases the anaesthetic into the circulation at once — a fact the nurse managing the cuff must know.",
    lesson: "patient-controlled-epidural-and-regional-analgesia",
  },
  {
    term: "Bowel preparation",
    definition:
      "Emptying the bowel before colorectal surgery, by diet, laxatives or an enema, so the operative field is clean. It is not universal — for many operations it makes no difference to infection — and it dehydrates an elderly patient, so its use is a decision, not a routine.",
    lesson: "preoperative-preparation-fasting-medicines-and-the-checklist",
  },
  {
    term: "Burns depth",
    definition:
      "Classified by how deep the damage goes — superficial, partial thickness and full thickness. Depth determines whether the burn will heal on its own, and it can deepen in the first days, so the assessment is repeated.",
    lesson: "burns-assessment-resuscitation-and-nursing-care",
  },
  {
    term: "Compartment syndrome",
    definition:
      "Swelling inside a closed fascial space that raises the pressure until blood cannot reach the muscle and nerve. The earliest sign is pain out of proportion, worse on passive stretch; a pulse may still be present.",
    lesson: "head-spinal-and-limb-injuries-in-surgical-nursing",
  },
  {
    term: "Cystoscopy",
    definition:
      "Passing a scope into the bladder for inspection, biopsy or treatment. The patient needs to know that blood in the urine is expected briefly, and that difficulty passing urine afterwards is not, and must be reported.",
    lesson: "urological-gynaecological-and-paediatric-surgery",
  },
  {
    term: "Deep vein thrombosis prophylaxis",
    alsoKnownAs: ["DVT prophylaxis", "VTE prophylaxis"],
    definition:
      "Preventing clot formation in the legs after surgery by movement, compression stockings, intermittent compression and anticoagulant drugs. The risk peaks in the first days and persists for weeks after discharge, so the plan outlasts the admission.",
    lesson: "postoperative-care-on-the-ward",
  },
  {
    term: "Enhanced recovery after surgery",
    alsoKnownAs: ["ERAS"],
    definition:
      "A package of measures that shorten recovery: less fasting, no routine bowel prep, opiate-sparing analgesia, early feeding and early mobilisation. Each element is small; the point is that they are done together and started before the operation rather than after it.",
    lesson: "day-surgery-enhanced-recovery-discharge-and-rehabilitation",
  },
  {
    term: "Epidural analgesia",
    definition:
      "Local anaesthetic, often with an opioid, infused into the space outside the spinal cord to block pain from the lower body. Blood pressure falls, the legs may feel weak, and the block can mask the pain of a developing problem — so sensation and power are checked, not just the pain score.",
    lesson: "patient-controlled-epidural-and-regional-analgesia",
  },
  {
    term: "Epidural haematoma",
    definition:
      "Bleeding into the epidural space that compresses the spinal cord, producing back pain, new leg weakness, numbness or loss of bladder control. It is a surgical emergency measured in hours; the mistake is to attribute the weakness to the local anaesthetic.",
    lesson: "patient-controlled-epidural-and-regional-analgesia",
  },
  {
    term: "Fasting for surgery",
    alsoKnownAs: ["nil by mouth", "NPO"],
    definition:
      "Withholding food and drink before anaesthesia to reduce the risk of stomach contents being inhaled. The modern rule is clear fluids up to two hours before and light food up to six — not the night-long fast that leaves patients dehydrated and irritable.",
    lesson: "preoperative-preparation-fasting-medicines-and-the-checklist",
  },
  {
    term: "Fluid resuscitation in burns",
    definition:
      "Calculating the fluid a burn patient needs from the burn area and body weight, and giving half in the first eight hours from the time of injury. The clock starts at the burn, not at arrival, which is the commonest error.",
    lesson: "burns-assessment-resuscitation-and-nursing-care",
  },
  {
    term: "Hypothermia in theatre",
    definition:
      "A fall in core temperature during surgery from a cold theatre, exposed body cavities, cold fluids and anaesthesia that removes the shivering response. It causes bleeding, infection and cardiac strain, which is why patients are warmed before, during and after rather than once they feel cold.",
    lesson: "anaesthesia-positioning-and-intraoperative-patient-safety",
  },
  {
    term: "Ileostomy",
    definition:
      "A stoma from the small bowel producing liquid, enzyme-rich effluent that damages skin and loses salt. The pouch needs emptying far more often than a colostomy, and the patient needs fluid and salt advice that a colostomy patient does not.",
    lesson: "gastrointestinal-surgery-and-stoma-nursing",
  },
  {
    term: "Informed consent for surgery",
    definition:
      "The patient's agreement to an operation after being told what it involves, the alternatives, and the risks that matter to them. It is taken by someone who can answer the questions, it is the patient who signs, and it can be withdrawn at any point up to the anaesthetic.",
    lesson: "the-surgical-patient-consent-and-preoperative-assessment",
  },
  {
    term: "Inhalation injury",
    definition:
      "Damage to the airway from heat, smoke or chemicals, suggested by facial burns, singed nasal hair, hoarseness, soot in the sputum and a cough. The airway can swell closed over hours, so it is treated as an emergency before it looks like one.",
    lesson: "burns-assessment-resuscitation-and-nursing-care",
  },
  {
    term: "Instrument count",
    alsoKnownAs: ["swab count", "needle count"],
    definition:
      "Counting instruments, swabs and needles before the operation, at the start of wound closure and at the end, recorded by two people. A discrepancy stops the operation from being completed until it is resolved — including by X-ray — because a retained swab is a never-event.",
    lesson: "the-operating-theatre-asepsis-instruments-and-the-count",
  },
  {
    term: "Malignant hyperthermia",
    definition:
      "A rare inherited reaction to certain anaesthetic agents producing a sudden, soaring temperature with muscle rigidity and a racing heart. It is an emergency treated with dantrolene, and a family history is the single most useful warning.",
    lesson: "anaesthesia-positioning-and-intraoperative-patient-safety",
  },
  {
    term: "Needle-stick at laparotomy",
    definition:
      "Not the phrase to use; what matters here is the sharp-injury protocol applied to every member of the surgical team, including the surgeon — wash, report, and assess for post-exposure prophylaxis within hours.",
    lesson: "head-and-neck-thoracic-breast-neurosurgical-and-eye-surgery",
  },
  {
    term: "Never event",
    alsoKnownAs: ["never event"],
    definition:
      "A serious incident entirely preventable if the standard had been followed — wrong-site surgery, a retained swab, a wrong implant. The category exists because such events should not be treated as bad luck but as evidence that a system failed.",
    lesson: "the-operating-theatre-asepsis-instruments-and-the-count",
  },
  {
    term: "Paralytic ileus",
    definition:
      "A bowel that has stopped propelling its contents after surgery or anaesthesia, producing distension, vomiting and no flatus. It is distinguished from obstruction by the absence of bowel sounds rather than their increase, and it is managed by resting the gut rather than operating.",
    lesson: "postoperative-complications-and-their-timetable",
  },
  {
    term: "Patient-controlled analgesia",
    alsoKnownAs: ["PCA"],
    definition:
      "A pump that lets the patient give themselves a small preset dose of an opioid when they need it, with a lockout period that prevents overdose. It works because pain is known only to the patient, and a patient who is comfortable and alert is the evidence that it is set correctly.",
    lesson: "patient-controlled-epidural-and-regional-analgesia",
  },
  {
    term: "Peritonitis",
    definition:
      "Inflammation of the lining of the abdomen, usually from a perforated viscus, producing rigid guarding, pain and silence on auscultation. It is a surgical emergency, and analgesia does not hide the diagnosis — withholding it does not protect the patient.",
    lesson: "the-acute-abdomen-and-acute-urological-emergencies",
  },
  {
    term: "Postoperative complication timetable",
    definition:
      "The predictable order in which complications appear after surgery: airway and bleeding within hours, infection and chest problems within days, wound and clot problems within the first week or two. Knowing what is due on which day is what turns a vague deterioration into a specific suspicion.",
    lesson: "postoperative-complications-and-their-timetable",
  },
  {
    term: "Premedication",
    definition:
      "Drugs given shortly before anaesthesia — an anxiolytic, an antacid, an antiemetic or a continuation of regular medicines. It is a prescription with a reason recorded, not a standing order for every patient on the list.",
    lesson: "preoperative-preparation-fasting-medicines-and-the-checklist",
  },
  {
    term: "Primary survey",
    alsoKnownAs: ["ABCDE"],
    definition:
      "The rapid first assessment — airway, breathing, circulation, disability, exposure — with each threat treated as it is found before the next is assessed. It is repeated whenever the patient changes, because the airway that was clear five minutes ago may not be.",
    lesson: "major-trauma-the-primary-survey-and-haemorrhage",
  },
  {
    term: "Recovery position",
    definition:
      "Lying on the side with the upper leg flexed and the head tilted so the airway stays open, used for an unconscious patient who is breathing. It keeps the tongue and vomit away from the airway and allows the patient to be watched continuously.",
    lesson: "the-recovery-room-and-handover-to-the-ward",
  },
  {
    term: "Secondary survey",
    definition:
      "The head-to-toe examination after the primary survey, once immediate threats are treated: looking for fractures, wounds, and anything that was hidden by the more urgent problem. It is recorded so that findings can be compared rather than rediscovered.",
    lesson: "major-trauma-the-primary-survey-and-haemorrhage",
  },
  {
    term: "Spinal precautions",
    definition:
      "Keeping the head, neck and spine in line and the patient still until injury is excluded. Log-rolling rather than pulling, and the collar checked rather than assumed to be doing its job.",
    lesson: "head-spinal-and-limb-injuries-in-surgical-nursing",
  },
  {
    term: "Surgical oncology",
    definition:
      "The use of operation as treatment for cancer — curative, debulking or palliative. Nursing runs alongside staging and multidisciplinary decisions, and it never treats the tumour as the only thing in the patient's life.",
    lesson: "surgical-oncology-cancer-nursing-and-palliative-care",
  },
  {
    term: "Surgical safety checklist",
    definition:
      "The WHO three-part checklist — sign in, time out, sign out — confirming identity, site, allergies, antibiotics, imaging and counts aloud with the whole team present. Its value is that anyone at any level can object, which only works if the reading is not rushed.",
    lesson: "the-operating-theatre-asepsis-instruments-and-the-count",
  },
  {
    term: "Surgical site infection",
    alsoKnownAs: ["SSI"],
    definition:
      "Infection at the site of an operation, appearing usually between the third and seventh day with redness, warmth, discharge and fever. Prevention is antibiotic timing, skin preparation, temperature control and glucose control — every one of which is nurse-influenced.",
    lesson: "surgical-wounds-drains-ulcers-and-amputation",
  },
  {
    term: "Testicular torsion",
    definition:
      "Twisting of the testicle that cuts off its blood supply, producing sudden severe pain and a high-riding testis. It is measured in hours; the differential matters less than getting the patient to surgery.",
    lesson: "the-acute-abdomen-and-acute-urological-emergencies",
  },
  {
    term: "Third space loss",
    definition:
      "Fluid that has moved out of the circulation into tissue that no longer functions, as in bowel obstruction, burns or major trauma. It is invisible on the fluid balance chart and shows instead as a falling urine output and a rising pulse despite adequate intake.",
    lesson: "postoperative-care-on-the-ward",
  },
  {
    term: "Vasectomy reversal",
    definition:
      "Not covered; the relevant surgical point is that the patient's fertility intentions are documented before any sterilising procedure, because consent taken casually is not valid consent.",
    lesson: "urological-gynaecological-and-paediatric-surgery",
  },
];
