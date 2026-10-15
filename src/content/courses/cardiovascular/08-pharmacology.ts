import type { CourseModule } from "../types";

export const pharmacology: CourseModule = {
  slug: "cardiovascular-pharmacology",
  title: "Cardiovascular drugs and safe monitoring",
  summary: "Every cardiac drug has one predictable harm and one observation that catches it. This module puts the classes side by side, with the pre-administration checks, the teaching and the calculations.",
  lessons: [
    {
      slug: "cardiovascular-drugs-and-safe-monitoring",
      title: "Cardiovascular drugs: classes, checks, teaching and calculations",
      minutes: 24,
      objectives: [
        "Match each cardiovascular drug class to its purpose, its signature side effect and the nursing check that catches it.",
        "Perform the pre-administration checks for digoxin, beta-blockers, nitrates, diuretics and anticoagulants.",
        "Calculate common cardiovascular drug doses and infusion rates accurately.",
        "Teach patients the essentials of each drug they take home.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Monitoring is not a ritual",
          paragraphs: [
            "Every observation attached to a cardiac drug exists to catch one specific, predictable harm. If you know the harm, you know the check — and you know when to withhold the dose and inform the prescriber rather than give it and hope.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-DRG-0991.svg",
          alt: "Cardiovascular drugs and what to watch in each class: ACE inhibitors, beta-blockers, diuretics, calcium channel blockers, digoxin and nitrates",
          caption: "What to watch in each class — the observation catches the harm.",
        },
        {
          type: "table",
          heading: "Cardiovascular drug classes at a glance",
          columns: ["Class and examples", "Main uses", "Signature adverse effects", "Check before giving", "Teach the patient"],
          rows: [
            ["ACE inhibitors (-pril): lisinopril, enalapril, ramipril, captopril", "Hypertension, heart failure, after infarction, diabetic kidney protection", "Dry cough, angioedema, hyperkalaemia, rising creatinine, first-dose hypotension", "Blood pressure; potassium and creatinine at baseline, 1–2 weeks after starting and then regularly; pregnancy status", "Rise slowly; report lip or tongue swelling at once; avoid potassium supplements and salt substitutes; a cough is a reason to switch, not to stop silently"],
            ["ARBs (-sartan): losartan, valsartan, telmisartan", "As ACE inhibitors when the cough is intolerable", "As ACE inhibitors, without the cough", "As above", "As above"],
            ["Beta-blockers (-olol): atenolol, bisoprolol, metoprolol, carvedilol, propranolol", "Angina, after infarction, heart failure (specific agents), hypertension, rate control in atrial fibrillation, arrhythmias", "Bradycardia, hypotension, heart block, bronchospasm, fatigue, cold extremities, masked hypoglycaemia, erectile dysfunction, worsening peripheral arterial disease", "Apical pulse for a full minute — withhold if below 60 (or as prescribed) and inform; blood pressure; chest in lung disease; glucose awareness in diabetes", "Never stop suddenly (rebound angina and infarction); check the pulse at home; hypoglycaemia may show only as sweating; report wheeze"],
            ["Calcium channel blockers: amlodipine, nifedipine (dihydropyridines); diltiazem, verapamil (rate-limiting)", "Hypertension, angina, variant angina; diltiazem and verapamil for rate control in AF and SVT", "Ankle oedema, headache, flushing, gum hyperplasia; verapamil — constipation, bradycardia, heart failure", "Blood pressure; pulse for diltiazem and verapamil; never combine verapamil with a beta-blocker (heart block)", "Oedema is not fluid overload; avoid grapefruit juice; do not crush modified-release tablets"],
            ["Thiazide and thiazide-like diuretics: hydrochlorothiazide, bendroflumethiazide, indapamide, chlortalidone", "Hypertension, mild oedema", "Hypokalaemia, hyponatraemia, hyperglycaemia, hyperuricaemia and gout, postural hypotension", "Potassium, sodium, glucose; blood pressure lying and standing", "Take in the morning; potassium-rich foods (banana, orange, beans, groundnuts); rise slowly"],
            ["Loop diuretics: furosemide, bumetanide", "Heart failure, pulmonary oedema, oedema of renal and liver disease", "Hypokalaemia, hyponatraemia, hypomagnesaemia, dehydration, hypotension, raised urea, ototoxicity with rapid IV injection, gout", "Weight, blood pressure, potassium and renal function, urine output; IV rate no faster than 4 mg a minute", "Morning dosing; daily weight; report dizziness, cramps and ringing in the ears"],
            ["Potassium-sparing and aldosterone antagonists: spironolactone, eplerenone, amiloride", "Heart failure, resistant hypertension, ascites", "Hyperkalaemia (especially with ACE inhibitors, ARBs, renal impairment and NSAIDs), gynaecomastia", "Potassium and creatinine", "No potassium supplements or salt substitutes; report muscle weakness or palpitations"],
            ["Nitrates: glyceryl trinitrate (sublingual, spray, IV, patch); isosorbide mononitrate and dinitrate", "Angina, acute coronary syndrome, acute pulmonary oedema, hypertensive emergency (IV)", "Headache, flushing, hypotension, reflex tachycardia, tolerance", "Blood pressure (hold if the systolic is below 90); no PDE-5 inhibitor in the last 24–48 hours; IV GTN by pump with continuous blood pressure monitoring", "Sit down to take the sublingual dose; correct storage; an 8–12-hour nitrate-free interval for long-acting forms (remove patches at night); seek help if pain persists 5 minutes after the first dose"],
            ["Cardiac glycoside: digoxin", "Rate control in atrial fibrillation; symptomatic HFrEF", "Toxicity — anorexia, nausea, vomiting, visual disturbance, confusion, bradycardia, arrhythmias; a narrow therapeutic range", "Apical pulse for one minute (withhold below 60 in an adult); potassium, magnesium, calcium and creatinine; a digoxin level if toxicity is suspected (sampled 6 hours or more after a dose)", "Same time every day; never double a missed dose; report nausea, visual changes or a pulse below 60; avoid self-medicating with antacids and herbal products"],
            ["Antiarrhythmics: amiodarone, adenosine, lidocaine, flecainide, atropine", "VT, VF and AF (amiodarone); SVT (adenosine); symptomatic bradycardia (atropine)", "Amiodarone — hypotension and phlebitis IV, thyroid and liver dysfunction, pulmonary fibrosis, corneal deposits, photosensitivity, slate-grey skin. Adenosine — transient asystole, flushing, chest tightness, bronchospasm", "Continuous ECG monitoring for IV use; a large vein or central line for amiodarone infusions; thyroid and liver function on long-term amiodarone", "Sun protection and regular eye, thyroid and lung checks on amiodarone"],
            ["Statins: atorvastatin, rosuvastatin, simvastatin", "Lower LDL; secondary and primary prevention", "Myalgia and rarely rhabdomyolysis; raised liver enzymes; a small rise in new diabetes", "Baseline liver function; creatine kinase if muscle pain develops", "Simvastatin at night; report unexplained muscle pain or dark urine; avoid grapefruit with simvastatin; treatment is lifelong"],
            ["Inotropes and vasopressors: dobutamine, dopamine, adrenaline, noradrenaline", "Cardiogenic and septic shock; cardiac arrest", "Tachyarrhythmias, ischaemia, extravasation necrosis, hypertension", "A central line where possible; continuous blood pressure and ECG; an infusion pump; never bolus or flush the infusion line", "—"],
          ],
        },
        {
          type: "list",
          heading: "Pre-administration safety habits",
          items: [
            "Right patient, drug, dose, route, time and documentation — plus the <strong>right observation for this drug</strong> and the right to refuse.",
            "Count the <strong>apical pulse for 60 seconds</strong> before digoxin, beta-blockers, diltiazem, verapamil and amiodarone; record the rate beside the dose.",
            "Take the <strong>blood pressure</strong> before antihypertensives, nitrates, diuretics and opioids; know the hold parameters written on the chart, and ask for them if they are missing.",
            "Know today’s <strong>potassium</strong> before diuretics, ACE inhibitors, spironolactone and digoxin; the <strong>INR</strong> before warfarin; the <strong>aPTT</strong> before adjusting heparin.",
            "Check the interactions that matter: ACE inhibitor + spironolactone + NSAID (hyperkalaemia and renal failure); beta-blocker + verapamil (heart block); nitrate + sildenafil (collapse); warfarin + antibiotics or NSAIDs (bleeding); digoxin + amiodarone or hypokalaemia (toxicity); clopidogrel + omeprazole (reduced effect).",
            "Never crush modified-release preparations — nifedipine MR, isosorbide MR, metoprolol succinate, diltiazem capsules.",
            "Document what you gave, what you observed, what you withheld and whom you told.",
          ],
        },
        {
          type: "list",
          heading: "Calculations you will be asked",
          items: [
            "<strong>Tablets:</strong> dose required ÷ dose per tablet. Digoxin 0.125 mg prescribed and the tablets are 62.5 micrograms: 0.125 mg = 125 micrograms; 125 ÷ 62.5 = <strong>2 tablets</strong>.",
            "<strong>Injection volume:</strong> (dose required ÷ stock strength) × stock volume. Furosemide 60 mg from 20 mg/2 mL ampoules: (60 ÷ 20) × 2 = <strong>6 mL</strong>, given over at least 15 minutes (no faster than 4 mg a minute).",
            "<strong>Heparin infusion:</strong> 25,000 units in 500 mL gives 50 units/mL. Prescribed 1,200 units an hour: 1,200 ÷ 50 = <strong>24 mL/hour</strong>. A 5,000-unit bolus from a 5,000 units/mL vial is 1 mL — check the vial strength every time, because heparin comes in 1,000, 5,000 and 25,000 units/mL.",
            "<strong>GTN infusion:</strong> 50 mg in 50 mL = 1 mg/mL; prescribed 2 mg an hour = <strong>2 mL/hour</strong>, titrated by protocol against blood pressure and pain.",
            "<strong>Drop rate (gravity sets):</strong> (volume in mL × drop factor) ÷ time in minutes. 500 mL over 4 hours with a 20 drops/mL set: (500 × 20) ÷ 240 ≈ <strong>42 drops a minute</strong>. Cardiac patients usually need a volume-controlled pump, because fluid overload is the danger.",
            "<strong>Weight-based doses:</strong> enoxaparin 1 mg/kg 12-hourly for a 70 kg patient = <strong>70 mg</strong>; adrenaline for a 20 kg child in arrest = 10 micrograms/kg = 200 micrograms = <strong>2 mL of 1:10,000</strong> (100 micrograms/mL).",
            "Estimate first, calculate twice, and have the high-risk drugs — heparin, digoxin, potassium, inotropes, insulin — checked independently by a second nurse.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Learn the suffixes, then the one check",
          body: "-pril ACE inhibitor, -sartan ARB, -olol beta-blocker, -dipine calcium channel blocker, -statin lipid-lowering, -parin heparin. Then the check that goes with each: potassium, potassium, pulse, ankles, muscles, bleeding.",
        },
      ],
      keyPoints: [
        "Each cardiac drug has one predictable harm and one observation that catches it — learn them as pairs.",
        "Apical pulse for one minute before digoxin, beta-blockers, verapamil and diltiazem; blood pressure before nitrates and antihypertensives; potassium before diuretics, ACE inhibitors and spironolactone.",
        "Never stop beta-blockers abruptly; never give nitrates with sildenafil; never combine verapamil with a beta-blocker; never crush modified-release tablets.",
        "Heparin, digoxin, potassium and inotropes are high-risk — calculate twice and double-check.",
        "Teaching is part of the dose: timing, what to report and what never to take alongside.",
      ],
      quiz: {
        keywords: ["digoxin", "furosemide", "frusemide", "beta-blocker", "beta blocker", "atenolol", "propranolol", "ace inhibitor", "warfarin", "heparin", "nitrate", "glyceryl trinitrate", "amlodipine", "spironolactone", "statin", "clopidogrel", "apical pulse", "antihypertensive", "diuretic"],
        categories: ["pharmacology-parenteral", "med-surg"],
        questionIds: ["NG-MOD-CVN-022", "NG-MOD-CVN-023", "NG-MOD-CVN-024"],
      },
    },
  ],
};
