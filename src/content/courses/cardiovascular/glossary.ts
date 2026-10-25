import type { GlossaryEntry } from "../types";

// Glossary — Cardiovascular Nursing.
// Authored against this course's own lessons.

export const glossary: GlossaryEntry[] = [
  {
    term: "Acute coronary syndrome",
    alsoKnownAs: ["ACS"],
    definition:
      "The umbrella term for a heart attack in progress: unstable angina, NSTEMI and STEMI. It is diagnosed from the history, the ECG and troponin together, and treated as an emergency before all three results are back.",
    lesson: "acute-coronary-syndrome",
  },
  {
    term: "Afterload",
    definition:
      "The resistance the ventricle must overcome to eject blood, set mainly by the tone of the arteries. When afterload rises the heart must work harder for the same output, which is why vasodilators ease a failing heart and why aortic stenosis is so punishing.",
    lesson: "cardiac-output-and-blood-pressure",
  },
  {
    term: "Angina",
    alsoKnownAs: ["angina pectoris"],
    definition:
      "Chest discomfort from heart muscle that is short of oxygen but not infarcted. Stable angina is predictable with exertion and relieved by rest; angina at rest, or that is new, worsening or lasting longer, is unstable and belongs in the ACS group.",
    lesson: "atherosclerosis-and-angina",
  },
  {
    term: "Antihypertensive adherence",
    definition:
      "Whether the patient actually takes the blood pressure medicine as prescribed, which is the commonest reason for 'resistant' hypertension. Asking about the last missed dose gets a truer answer than asking whether they take it.",
    lesson: "managing-hypertension",
  },
  {
    term: "Atherosclerosis",
    definition:
      "The deposition of fatty plaque in the wall of an artery, which narrows it and can rupture. It is the process underlying angina, myocardial infarction, stroke and peripheral vascular disease — one disease presenting in different vessels.",
    lesson: "atherosclerosis-and-angina",
  },
  {
    term: "Atrial fibrillation",
    alsoKnownAs: ["AF"],
    definition:
      "A fast, irregular rhythm from chaotic atrial activity, in which the atria stop contracting usefully. The two dangers are a racing ventricle and clot forming in the stilled atrium, which is why rate control and anticoagulation are assessed together.",
    lesson: "recognising-dysrhythmias",
  },
  {
    term: "Beck's triad",
    definition:
      "Falling blood pressure, distended neck veins and muffled heart sounds — the classic picture of cardiac tamponade, where fluid in the pericardium squeezes the heart so it cannot fill. It is a surgical emergency and the classic picture is not always present.",
    lesson: "cardiac-arrest-shock-and-tamponade",
  },
  {
    term: "Cardiac output",
    definition:
      "The volume of blood the heart ejects each minute: stroke volume multiplied by heart rate. It is the number that actually matters for perfusion, which is why a fast pulse is not by itself good output and why a slow, full pulse can be perfectly adequate.",
    lesson: "structure-of-the-heart-and-blood-flow",
  },
  {
    term: "Cardiogenic shock",
    definition:
      "Inadequate perfusion because the pump itself has failed, usually after a large infarct. The blood pressure falls, the skin is cold and clammy, urine output drops and the lungs fill — giving fluid does not help and may worsen the lungs.",
    lesson: "cardiac-arrest-shock-and-tamponade",
  },
  {
    term: "Claudication",
    definition:
      "Cramping leg pain that comes on predictably with walking a set distance and is relieved by rest, from narrowed leg arteries. The distance at which it appears is a practical measure of how severe the disease is, and it is asked about at every review.",
    lesson: "peripheral-vascular-disease-dvt-and-anticoagulation",
  },
  {
    term: "Deep vein thrombosis",
    alsoKnownAs: ["DVT"],
    definition:
      "A clot forming in a deep leg vein, producing a swollen, tender, warm calf. The danger is not the leg but the embolus that can break off and lodge in the lung, which is why anticoagulation is started on suspicion rather than on confirmation.",
    lesson: "peripheral-vascular-disease-dvt-and-anticoagulation",
  },
  {
    term: "Digoxin",
    definition:
      "A drug that slows conduction through the AV node and strengthens contraction, used for rate control in atrial fibrillation and for a failing heart. It has a narrow therapeutic range, so nausea, visual disturbance, confusion and a slow irregular pulse are treated as toxicity until proven otherwise.",
    lesson: "cardiovascular-drugs-and-safe-monitoring",
  },
  {
    term: "Ejection fraction",
    alsoKnownAs: ["EF", "LVEF"],
    definition:
      "The percentage of the blood in the ventricle that is ejected with each beat. A reduced ejection fraction means the pump is weak; heart failure with a preserved ejection fraction means the heart is stiff rather than weak, and the treatment emphasis differs.",
    lesson: "heart-failure-pathophysiology",
  },
  {
    term: "Electrocardiogram",
    alsoKnownAs: ["ECG", "EKG"],
    definition:
      "A recording of the heart's electrical activity, showing the P wave, QRS complex and T wave. Its value is in being obtained within minutes of chest pain — the trace that matters most is the first one, compared with the next.",
    lesson: "conduction-system-and-normal-ecg",
  },
  {
    term: "Hypertension",
    definition:
      "Persistently raised arterial pressure, conventionally 140/90 mmHg or above on repeated measurement. It is dangerous less for the number itself than for the damage it does silently to the brain, heart, kidneys and eyes over years.",
    lesson: "understanding-hypertension",
  },
  {
    term: "Jugular venous pressure",
    alsoKnownAs: ["JVP"],
    definition:
      "The height of the visible pulsation in the neck vein, used as a bedside estimate of right heart filling pressure. A raised JVP suggests the right side of the heart is failing or is being held back by fluid in the pericardium.",
    lesson: "focused-cardiovascular-assessment",
  },
  {
    term: "Mean arterial pressure",
    alsoKnownAs: ["MAP"],
    definition:
      "The average pressure driving blood through the tissues over the whole cardiac cycle, approximated as diastolic plus one third of the pulse pressure. It is the number resuscitation is aimed at, because organs are perfused by the mean rather than the peak — about 65 mmHg is the usual floor.",
    lesson: "cardiac-output-and-blood-pressure",
  },
  {
    term: "Myocardial infarction",
    alsoKnownAs: ["MI", "heart attack", "STEMI", "NSTEMI"],
    definition:
      "Death of heart muscle from a blocked coronary artery. A STEMI shows as ST elevation and needs reperfusion urgently; an NSTEMI shows as troponin rise without that elevation and is treated with drugs and risk assessment.",
    lesson: "acute-coronary-syndrome",
  },
  {
    term: "Orthopnoea",
    definition:
      "Breathlessness that appears when lying flat and eases on sitting up. In heart failure it means fluid is redistributing to the lungs when gravity no longer holds it in the legs, and the number of pillows a patient uses is a measure of how bad it has become.",
    lesson: "nursing-management-of-heart-failure",
  },
  {
    term: "Paroxysmal nocturnal dyspnoea",
    alsoKnownAs: ["PND"],
    definition:
      "Waking in the night fighting for breath, typically an hour or two after lying down, and having to sit or stand. It is a marker of pulmonary congestion and one of the questions that separates cardiac from respiratory breathlessness.",
    lesson: "nursing-management-of-heart-failure",
  },
  {
    term: "Pericarditis",
    definition:
      "Inflammation of the sac around the heart, producing sharp chest pain that is worse on deep breathing and eased by sitting forward. It is distinguished from infarction by that positionality and by the ECG, which changes over the whole tracing rather than one territory.",
    lesson: "rheumatic-heart-disease-endocarditis-and-pericarditis",
  },
  {
    term: "Preload",
    definition:
      "The stretch on the ventricular muscle at the end of filling, determined by how much blood returns to it. Enough preload is essential to eject anything at all, but too much in a failing heart backs up into the lungs — which is why diuretics relieve breathlessness.",
    lesson: "heart-failure-pathophysiology",
  },
  {
    term: "Pulmonary oedema",
    definition:
      "Fluid in the air spaces of the lung, usually from a failing left ventricle. The patient is breathless, upright, sweating and coughing pink frothy sputum; treatment is sitting up, oxygen, a diuretic and nitrates where the pressure allows.",
    lesson: "nursing-management-of-heart-failure",
  },
  {
    term: "Pulse pressure",
    definition:
      "The difference between systolic and diastolic pressure. A narrow pulse pressure suggests a poor stroke volume, as in shock or tamponade; a collapsing, wide pulse pressure suggests a leaking aortic valve.",
    lesson: "measuring-blood-pressure-and-vital-signs",
  },
  {
    term: "Pulsus paradoxus",
    definition:
      "A systolic fall of more than about 10 mmHg on inspiration, seen in cardiac tamponade and severe asthma. It is an exaggeration of the normal small inspiratory dip and requires careful measurement to detect.",
    lesson: "cardiac-arrest-shock-and-tamponade",
  },
  {
    term: "Rheumatic heart disease",
    alsoKnownAs: ["RHD"],
    definition:
      "Valve damage left behind by untreated streptococcal throat infection, through an autoimmune reaction rather than the infection itself. It is the reason penicillins matter in a sore throat, and its consequence is lifelong valve disease and the need for prophylaxis.",
    lesson: "rheumatic-heart-disease-endocarditis-and-pericarditis",
  },
  {
    term: "Stroke volume",
    definition:
      "The volume of blood ejected by one ventricular contraction, usually about 70 mL. It rises with more filling, less resistance or stronger contraction, and falls when any of those is lost — which is the whole of shock in one sentence.",
    lesson: "cardiac-output-and-blood-pressure",
  },
  {
    term: "Troponin",
    definition:
      "A protein released from injured heart muscle and measured in the blood to detect a myocardial infarction. It rises over hours rather than instantly, so a normal value very early does not exclude an infarct and is repeated.",
    lesson: "cardiac-investigations-and-nursing-care",
  },
  {
    term: "Ventricular fibrillation",
    alsoKnownAs: ["VF"],
    definition:
      "Chaotic, disorganised electrical activity in which the heart quivers and pumps nothing. The patient is unconscious and pulseless; the treatment is immediate defibrillation, and every minute of delay costs survival.",
    lesson: "ecg-pattern-drill",
  },
  {
    term: "White-coat hypertension",
    definition:
      "A raised reading in the clinic that is normal outside it, from the stress of being measured. It is why a single high reading is not a diagnosis and why repeated or home readings are taken before treatment is started.",
    lesson: "measuring-blood-pressure-and-vital-signs",
  },
];
