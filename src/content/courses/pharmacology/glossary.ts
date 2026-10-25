import type { GlossaryEntry } from "../types";

// Glossary — Pharmacology and Medicines Management.
// Authored against this course's own lessons.

export const glossary: GlossaryEntry[] = [
  {
    term: "Adverse drug reaction",
    alsoKnownAs: ["ADR"],
    definition:
      "A harmful and unintended response to a medicine taken at a normal dose. Report it — in Ghana through the national pharmacovigilance system — because a signal only becomes visible when enough people record the same event.",
    lesson: "medicines-in-special-populations-herbal-medicine-and-pharmacovigilance",
  },
  {
    term: "Agonist",
    definition:
      "A drug that binds a receptor and switches it on, producing the same effect as the body's own messenger. An antagonist binds without switching it on and blocks the natural messenger instead.",
    lesson: "how-drugs-work-pharmacokinetics-pharmacodynamics-and-medicines-regulation-in-ghana",
  },
  {
    term: "Anaphylaxis",
    definition:
      "A severe systemic allergic reaction with airway swelling, bronchospasm and a falling blood pressure. Adrenaline into the outer thigh is the treatment and is given before anything else; antihistamines and steroids are not a substitute and act too slowly.",
    lesson: "opioids-analgesics-sedatives-and-other-high-alert-drugs",
  },
  {
    term: "Anticoagulant",
    definition:
      "A medicine that slows clotting. Heparin is monitored by the APTT and warfarin by the INR; low molecular weight heparin and the direct oral anticoagulants usually need no routine clotting test but still carry bleeding risk.",
    lesson: "insulin-oral-hypoglycaemics-and-anticoagulants",
  },
  {
    term: "Bioavailability",
    definition:
      "The fraction of a dose that reaches the bloodstream unchanged. An intravenous dose is by definition 100 per cent; a tablet is less, because some is not absorbed and some is removed by the liver on its first pass.",
    lesson: "how-drugs-work-pharmacokinetics-pharmacodynamics-and-medicines-regulation-in-ghana",
  },
  {
    term: "Bolus",
    definition:
      "A single dose given quickly, usually intravenously. It is distinguished from an infusion because the concentration reaching the heart and brain within seconds is far higher, which is why drugs that irritate veins or depress the circulation are diluted and slowed.",
    lesson: "injections-and-intravenous-medicines",
  },
  {
    term: "Broad-spectrum antibiotic",
    definition:
      "An antibiotic active against many types of organism, used when the pathogen is not yet known or the patient is severely ill. It is narrowed to a targeted drug once culture results return, because broad cover selects for resistance and damages normal flora.",
    lesson: "antimicrobials-antibiotics-antituberculous-antimalarial-antiretroviral-and-antifungal-drugs",
  },
  {
    term: "Controlled drug",
    definition:
      "A medicine with legal restrictions because of its potential for misuse, kept in a locked cupboard and accounted for in a register with a second signature. The count must balance at every shift change; a discrepancy is investigated, not corrected.",
    lesson: "safe-medication-administration-errors-storage-and-controlled-drugs",
  },
  {
    term: "Crossmatch",
    alsoKnownAs: ["group and crossmatch", "compatibility testing"],
    definition:
      "Testing that confirms a unit of blood is compatible with the patient's own blood before transfusion. It is only as reliable as the sample it was run on, which is why the sample is labelled at the bedside from the patient's own wristband.",
    lesson: "blood-transfusion-safe-practice-from-sample-to-completion-and-the-reactions",
  },
  {
    term: "Displacement volume",
    definition:
      "The amount of fluid a powdered medicine takes up when reconstituted, which is not the volume of diluent added. It matters in paediatric doses because ignoring it makes the final concentration wrong, and the error is invisible once the vial is in the fridge.",
    lesson: "paediatric-fluid-nutrition-and-everyday-clinical-calculations",
  },
  {
    term: "Dose calculation",
    definition:
      "Working out the volume or number of units to give from the prescribed dose and the strength available. It is checked twice, by two people where policy requires, because a decimal point in the wrong place is a tenfold error.",
    lesson: "dose-calculations-units-tablets-liquids-injections-and-weight-based-doses",
  },
  {
    term: "Drop factor",
    definition:
      "The number of drops that make one millilitre for a given giving-set, printed on its packaging — commonly 20 drops/mL for a macrodrip and 60 for a microdrip. It is what converts a prescribed millilitres-per-hour into drops per minute at the bedside.",
    lesson: "infusion-rate-and-dose-per-time-calculations",
  },
  {
    term: "Enteral route",
    definition:
      "Giving a drug through the gut, whether swallowed or through a nasogastric or gastrostomy tube. A tube changes the formulation that can be used, and a modified-release tablet crushed down a tube releases its whole dose at once.",
    lesson: "oral-enteral-topical-inhaled-and-other-non-parenteral-routes",
  },
  {
    term: "First-pass metabolism",
    definition:
      "The removal of part of an oral dose by the liver before it reaches the rest of the body. It explains why some drugs are given intravenously, sublingually or rectally to avoid the gut and reach a useful blood level.",
    lesson: "how-drugs-work-pharmacokinetics-pharmacodynamics-and-medicines-regulation-in-ghana",
  },
  {
    term: "Half-life",
    definition:
      "The time taken for the amount of drug in the body to halve. It sets the dosing interval and explains why a drug accumulates when the dose is given faster than the body can clear it, which is the usual reason an elderly patient becomes toxic on a standard dose.",
    lesson: "how-drugs-work-pharmacokinetics-pharmacodynamics-and-medicines-regulation-in-ghana",
  },
  {
    term: "High-alert medicine",
    definition:
      "A drug whose incorrect use carries a high risk of serious harm — insulin, heparin, concentrated potassium, opioids, chemotherapy and IV digoxin. These are checked independently by two nurses and are never given from memory.",
    lesson: "opioids-analgesics-sedatives-and-other-high-alert-drugs",
  },
  {
    term: "Infusion pump",
    definition:
      "A device that delivers fluid at a set rate rather than by gravity. It removes the drift caused by a changing bag height or a bent arm, and it needs its own check: the rate set, the volume in the bag and the line the fluid is running through.",
    lesson: "injections-and-intravenous-medicines",
  },
  {
    term: "Loading dose",
    definition:
      "A larger first dose given to reach a therapeutic level quickly, after which a smaller maintenance dose keeps it there. It matters for drugs whose half-life would otherwise take days to build up — digoxin, phenytoin, some antimicrobials.",
    lesson: "how-drugs-work-pharmacokinetics-pharmacodynamics-and-medicines-regulation-in-ghana",
  },
  {
    term: "Look-alike, sound-alike",
    alsoKnownAs: ["LASA"],
    definition:
      "Medicines whose names or packaging are easily confused, so that one is dispensed for the other. They are stored apart and labelled with tall-man lettering, because the mistake is made by competent staff under pressure, not by careless ones.",
    lesson: "safe-medication-administration-errors-storage-and-controlled-drugs",
  },
  {
    term: "Maintenance dose",
    definition:
      "The regular dose that keeps a drug at its therapeutic level once it has been reached. It is calculated from the rate at which the body clears the drug, so renal or hepatic impairment means a lower maintenance dose, not a lower loading dose.",
    lesson: "how-drugs-work-pharmacokinetics-pharmacodynamics-and-medicines-regulation-in-ghana",
  },
  {
    term: "Maintenance fluid",
    definition:
      "The fluid a child needs each day simply to replace normal losses, calculated from body weight. It is separate from the fluid given to correct dehydration, and confusing the two is how a dehydrated child is under-resuscitated.",
    lesson: "intravenous-fluid-therapy-choosing-prescribing-and-monitoring-fluids",
  },
  {
    term: "Narrow therapeutic index",
    definition:
      "A drug where the effective and the toxic dose are close together, so small changes in blood level cause harm — digoxin, warfarin, lithium, phenytoin, gentamicin, aminophylline. These are the drugs that are monitored by blood level and adjusted by small increments.",
    lesson: "cardiovascular-respiratory-endocrine-gastrointestinal-and-psychiatric-drugs",
  },
  {
    term: "Parenteral route",
    definition:
      "Any route that bypasses the gut: subcutaneous, intramuscular, intravenous, intradermal. Absorption is faster and more predictable than oral, the medicine cannot be vomited back, and the route is correspondingly less forgiving of an error.",
    lesson: "injections-and-intravenous-medicines",
  },
  {
    term: "Pharmacodynamics",
    definition:
      "What the drug does to the body — the receptor it binds, the effect it produces and the dose-response relationship. It is the counterpart of pharmacokinetics, which is what the body does to the drug.",
    lesson: "how-drugs-work-pharmacokinetics-pharmacodynamics-and-medicines-regulation-in-ghana",
  },
  {
    term: "Pharmacokinetics",
    alsoKnownAs: ["ADME"],
    definition:
      "What the body does to the drug: absorption, distribution, metabolism and excretion. Most clinically important drug interactions and most dose adjustments in kidney or liver disease are pharmacokinetic, not pharmacodynamic.",
    lesson: "how-drugs-work-pharmacokinetics-pharmacodynamics-and-medicines-regulation-in-ghana",
  },
  {
    term: "Pharmacovigilance",
    definition:
      "The systematic detection and reporting of adverse effects after a medicine is in use. It catches the harms that trials were too small or too short to find, which means the report that matters is usually the one nobody thinks is worth making.",
    lesson: "medicines-in-special-populations-herbal-medicine-and-pharmacovigilance",
  },
  {
    term: "Reconstitution",
    definition:
      "Dissolving a powdered medicine in a diluent before use. The diluent must be the one specified — water for injection rather than normal saline for some drugs — and the reconstituted vial carries an expiry measured in hours, not days.",
    lesson: "paediatric-fluid-nutrition-and-everyday-clinical-calculations",
  },
  {
    term: "Steady state",
    definition:
      "The point at which the amount of drug entering the body equals the amount leaving it, reached after about four to five half-lives of regular dosing. Drug levels are only meaningful once steady state has been reached, which is why sampling time matters.",
    lesson: "how-drugs-work-pharmacokinetics-pharmacodynamics-and-medicines-regulation-in-ghana",
  },
  {
    term: "Therapeutic drug monitoring",
    definition:
      "Measuring the blood level of a drug to keep it inside its therapeutic range, used for drugs where the dose alone does not predict the level. The result is meaningless without knowing when the last dose was given.",
    lesson: "cardiovascular-respiratory-endocrine-gastrointestinal-and-psychiatric-drugs",
  },
  {
    term: "Total parenteral nutrition",
    alsoKnownAs: ["TPN"],
    definition:
      "Complete nutrition delivered into a central vein for a patient whose gut cannot be used. It needs its own dedicated line, a controlled rate, and daily monitoring of glucose, electrolytes and weight, because it delivers a large solute load directly into the circulation.",
    lesson: "electrolyte-replacement-and-parenteral-nutrition",
  },
  {
    term: "Transfusion reaction",
    definition:
      "An unwanted response to a unit of blood — fever and rigors, rash, breathlessness, back pain, dark urine or collapse. The response is always the same: stop the transfusion, keep the vein open with normal saline, and report with the unit and giving set.",
    lesson: "blood-transfusion-safe-practice-from-sample-to-completion-and-the-reactions",
  },
  {
    term: "Unit dose system",
    definition:
      "Supplying medicines in the exact dose needed for one administration, rather than dispensing a bulk container. It removes the arithmetic — and the misreading of a decimal point — from the busiest point in the medicines round.",
    lesson: "safe-medication-administration-errors-storage-and-controlled-drugs",
  },
  {
    term: "Vancomycin infusion reaction",
    alsoKnownAs: ["red man syndrome"],
    definition:
      "Flushing, itching and a fall in blood pressure during a rapid vancomycin infusion, caused by histamine release rather than by allergy. It is prevented by infusing slowly over at least an hour, and it is not a reason to withhold the next dose.",
    lesson: "antimicrobials-antibiotics-antituberculous-antimalarial-antiretroviral-and-antifungal-drugs",
  },
  {
    term: "Volume of distribution",
    definition:
      "The apparent space into which a drug has spread, calculated from the dose and the resulting blood concentration. A large value means the drug is concentrated in tissue rather than plasma, which is why dialysis removes some drugs and not others.",
    lesson: "how-drugs-work-pharmacokinetics-pharmacodynamics-and-medicines-regulation-in-ghana",
  },
  {
    term: "Z-track technique",
    definition:
      "Pulling the skin sideways before an intramuscular injection and releasing it as the needle is withdrawn, so the track is sealed and the medicine cannot leak back into subcutaneous tissue. Used for irritant drugs such as iron.",
    lesson: "injections-and-intravenous-medicines",
  },
];
