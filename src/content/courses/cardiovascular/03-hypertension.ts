import type { CourseModule } from "../types";

export const hypertension: CourseModule = {
  slug: "hypertension",
  title: "Hypertension",
  summary: "Ghana’s commonest cardiovascular disease: how to confirm it, what it damages, how it is treated, how to keep patients on treatment, and what to do in a crisis or in pregnancy.",
  lessons: [
    {
      slug: "understanding-hypertension",
      title: "Understanding hypertension: definition, classification and target-organ damage",
      minutes: 14,
      objectives: [
        "Define hypertension and classify its severity using the thresholds in Ghana’s guidelines.",
        "Distinguish primary from secondary hypertension and list the major risk factors.",
        "Describe the damage hypertension causes to the brain, heart, kidneys, eyes and blood vessels.",
        "Explain why hypertension is called the silent killer and what that means for screening.",
      ],
      blocks: [
        {
          type: "text",
          heading: "What it is",
          paragraphs: [
            "Hypertension is a persistently raised blood pressure of <strong>140/90 mmHg or above</strong>, measured with correct technique on at least two separate occasions. It affects roughly one in three Ghanaian adults, most of whom do not know they have it, and it is the leading cause of stroke, heart failure and chronic kidney disease on our medical wards.",
            "More than 90% of cases are <strong>primary (essential) hypertension</strong>, with no single identifiable cause. The remainder are <strong>secondary</strong> to kidney disease, renal artery stenosis, endocrine disorders (primary aldosteronism, Cushing’s syndrome, phaeochromocytoma, thyroid disease), pregnancy, obstructive sleep apnoea, or drugs and substances — oral contraceptives, NSAIDs, corticosteroids, decongestants, cocaine, excess alcohol and some herbal preparations. Suspect a secondary cause in the young, in sudden or severe onset, and in hypertension resistant to three drugs.",
          ],
        },
        {
          type: "table",
          heading: "Classification of blood pressure in adults",
          columns: ["Category", "Systolic (mmHg)", "Diastolic (mmHg)"],
          rows: [
            ["Optimal", "below 120", "and below 80"],
            ["Normal", "120–129", "and/or 80–84"],
            ["High-normal", "130–139", "and/or 85–89"],
            ["Grade 1 (mild) hypertension", "140–159", "and/or 90–99"],
            ["Grade 2 (moderate) hypertension", "160–179", "and/or 100–109"],
            ["Grade 3 (severe) hypertension", "180 or above", "and/or 110 or above"],
            ["Hypertensive crisis", "180 or above", "and/or 120 or above — an urgency without organ damage, an emergency with it"],
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Some international guidelines now label 130/80 mmHg as hypertension. Ghana’s Standard Treatment Guidelines and WHO guidance use <strong>140/90 mmHg</strong>, and that is the threshold most examination questions assume. Whatever the threshold, the decision to start medicines rests on the total cardiovascular risk, not on the pressure alone.",
          ],
        },
        {
          type: "list",
          heading: "Risk factors",
          items: [
            "<strong>Non-modifiable:</strong> increasing age; a family history; African ancestry (earlier onset, more severe disease, more salt sensitivity and a better response to calcium channel blockers and diuretics); male sex until the menopause.",
            "<strong>Modifiable:</strong> high salt intake (seasoning cubes, salted and smoked fish such as koobi and momoni, processed foods); overweight and a large waist; physical inactivity; harmful alcohol use; tobacco; chronic stress; diabetes; dyslipidaemia; sleep apnoea.",
            "<strong>In Ghana specifically:</strong> late diagnosis, interrupted treatment because of cost or distance, substitution of herbal remedies for medicines and diets heavy in salt all worsen outcomes.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-NCD-0488.svg",
          alt: "Hypertension as the silent killer: raised pressure that the patient does not feel damages the brain, eyes, heart and kidneys; correct measurement technique avoids false diagnoses",
          caption: "No symptoms while the damage accumulates — the organs tell the story.",
        },
        {
          type: "list",
          heading: "Target-organ damage — the organs tell the story",
          items: [
            "<strong>Brain</strong> — ischaemic and haemorrhagic stroke, transient ischaemic attack, hypertensive encephalopathy, vascular dementia.",
            "<strong>Heart</strong> — left ventricular hypertrophy as the muscle thickens against the resistance, then angina and infarction, heart failure and atrial fibrillation.",
            "<strong>Kidneys</strong> — hypertensive nephrosclerosis, proteinuria and chronic kidney disease progressing towards dialysis — and kidney disease raises the pressure further in a vicious circle.",
            "<strong>Eyes</strong> — hypertensive retinopathy: narrowed arterioles, haemorrhages, exudates and, in malignant hypertension, papilloedema.",
            "<strong>Blood vessels</strong> — accelerated atherosclerosis, aortic aneurysm and dissection, peripheral arterial disease.",
          ],
        },
        {
          type: "text",
          heading: "Why “silent”",
          paragraphs: [
            "Raised pressure causes no symptoms for years. Headache, dizziness and nosebleeds are unreliable and usually absent. By the time a patient feels something it is usually the complication — a stroke, breathlessness from heart failure or swollen legs from kidney failure.",
            "This is why blood pressure must be measured at <strong>every contact</strong> — outpatient visits, antenatal and child welfare clinics (for the mother), admissions and community screening — and why a single raised reading needs confirmation rather than a label.",
          ],
        },
        {
          type: "list",
          heading: "Initial assessment of a newly diagnosed patient",
          items: [
            "<strong>History</strong> — symptoms of organ damage, family history, lifestyle, all medicines and herbal products, pregnancy.",
            "<strong>Examination</strong> — weight, height, BMI and waist circumference; fundoscopy; heart sounds and apex beat; peripheral pulses and bruits; signs of heart failure; both arms.",
            "<strong>Investigations</strong> — urinalysis for protein and blood, fasting glucose, creatinine and electrolytes, lipid profile, ECG for left ventricular hypertrophy and ischaemia.",
            "<strong>Risk</strong> — estimate the total cardiovascular risk; a patient with diabetes, kidney disease or existing vascular disease starts treatment at a lower threshold and aims for a lower target.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "“But I feel fine”",
          body: "Questions about a patient with a high reading who feels well are testing whether you know the disease is asymptomatic. The right nursing action is to confirm with repeat measurements and investigate for organ damage — not to reassure, and not to assume the machine was wrong.",
        },
      ],
      keyPoints: [
        "Hypertension is a blood pressure of 140/90 mmHg or above on two or more occasions with correct technique.",
        "Grade 1: 140–159/90–99; Grade 2: 160–179/100–109; Grade 3: 180/110 or above; crisis: 180/120 or above.",
        "More than 90% is primary; think of a secondary cause in the young, the sudden and the resistant.",
        "Target organs are the brain, heart, kidneys, eyes and vessels — screen for damage at diagnosis.",
        "Because it is silent, measure at every contact and confirm before labelling.",
      ],
      quiz: {
        keywords: ["hypertension", "high blood pressure", "raised blood pressure", "target organ", "retinopathy", "left ventricular hypertrophy", "stroke risk", "silent killer", "blood pressure of 1"],
      },
    },
    {
      slug: "managing-hypertension",
      title: "Managing hypertension: lifestyle, drugs, adherence, emergencies and pregnancy",
      minutes: 20,
      objectives: [
        "Teach lifestyle measures that lower blood pressure and say roughly how much each achieves.",
        "Describe the main antihypertensive classes, their signature side effects and the nursing checks for each.",
        "Support adherence to lifelong treatment in a way that addresses the real reason a patient stops.",
        "Recognise and respond to hypertensive urgency and emergency, and to hypertension in pregnancy.",
      ],
      blocks: [
        {
          type: "table",
          heading: "Lifestyle measures and what they achieve",
          columns: ["Measure", "Target", "Typical fall in systolic pressure"],
          rows: [
            ["Salt reduction", "Under 5 g of salt (one level teaspoon) a day from all sources; avoid seasoning cubes, salted and smoked fish, canned and processed foods; taste before adding salt", "5–6 mmHg"],
            ["Weight loss", "BMI 18.5–24.9; waist under 94 cm (men) and 80 cm (women)", "About 1 mmHg for every kilogram lost"],
            ["DASH-style eating", "Fruit, vegetables, beans, whole grains and low-fat dairy; less red meat, sugar and saturated fat", "8–14 mmHg"],
            ["Physical activity", "At least 30 minutes of brisk walking on most days (150 minutes a week)", "4–9 mmHg"],
            ["Alcohol", "No more than two drinks a day for men and one for women — or none", "2–4 mmHg"],
            ["Tobacco", "Stop completely", "Cuts overall cardiovascular risk sharply, whatever the pressure"],
          ],
        },
        {
          type: "table",
          heading: "Antihypertensive drug classes",
          columns: ["Class and examples", "How it works", "Signature side effects", "Nursing checks and teaching"],
          rows: [
            ["Calcium channel blockers — amlodipine, nifedipine", "Relax arteriolar smooth muscle", "Ankle oedema, headache, flushing, gum swelling; constipation and bradycardia with verapamil", "First-line for most Black African patients. Ankle oedema is not heart failure and does not need a diuretic. Avoid grapefruit juice. Never crush modified-release tablets"],
            ["Thiazide and thiazide-like diuretics — bendroflumethiazide, hydrochlorothiazide, indapamide, chlortalidone", "Reduce sodium and water, then arteriolar resistance", "Hypokalaemia, hyponatraemia, raised glucose and uric acid (gout), postural hypotension", "Give in the morning. Monitor potassium, sodium and glucose. Encourage potassium-rich foods. Rise slowly"],
            ["ACE inhibitors — lisinopril, enalapril, ramipril (names end in -pril)", "Block conversion of angiotensin I to angiotensin II", "Dry persistent cough (10–20%), angioedema, hyperkalaemia, first-dose hypotension, a rise in creatinine", "Check potassium and creatinine before starting and 1–2 weeks after. Contraindicated in pregnancy and in bilateral renal artery stenosis. Swelling of the lips or tongue — stop the drug and seek help at once"],
            ["Angiotensin receptor blockers — losartan, valsartan, candesartan (-sartan)", "Block the angiotensin II receptor", "As ACE inhibitors but without the cough", "Same monitoring; contraindicated in pregnancy; never combined with an ACE inhibitor"],
            ["Beta-blockers — atenolol, metoprolol, bisoprolol, propranolol (-olol)", "Slow the heart, reduce contractility and renin release", "Bradycardia, fatigue, cold hands, bronchospasm, masked hypoglycaemia, erectile dysfunction, vivid dreams", "Count the apical pulse before each dose and withhold if below 60 as prescribed. Avoid in asthma. Never stop abruptly — rebound tachycardia and angina. Not first-line unless there is angina, heart failure or a previous infarct"],
            ["Centrally acting — methyldopa", "Reduce sympathetic outflow from the brain", "Drowsiness, dry mouth, depression, haemolytic anaemia, liver dysfunction", "The usual first choice in pregnancy in Ghana. Give the larger dose at night. Check haemoglobin and liver function if used long term"],
            ["Direct vasodilators — hydralazine", "Dilate arterioles directly", "Reflex tachycardia, headache, fluid retention, lupus-like syndrome", "Used IV in pregnancy emergencies and with nitrates in heart failure. Monitor pulse and blood pressure closely"],
            ["Alpha-blockers — prazosin, doxazosin", "Block alpha-1 receptors in vessels", "First-dose syncope, postural hypotension", "Give the first dose at bedtime; useful with prostatic symptoms"],
          ],
        },
        {
          type: "text",
          heading: "How treatment is built",
          paragraphs: [
            "Most patients need two or more drugs. Ghana’s guidelines start with a <strong>calcium channel blocker or a thiazide-like diuretic</strong>, add the other, then add an ACE inhibitor or ARB; a beta-blocker is reserved for patients with angina, heart failure or a previous infarct. An ACE inhibitor is never combined with an ARB.",
            "The usual target is <strong>below 140/90 mmHg</strong>, and below 130/80 mmHg in diabetes or kidney disease if tolerated. Reassess within 2–4 weeks of each change, and review the whole regimen for cost and simplicity — a patient who cannot afford four drugs will take none. Once-daily and fixed-dose combination tablets improve adherence.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-LTC-1835.svg",
          alt: "Lifelong treatment for a disease that never hurts: what the patient says, what it means, and how to ask about adherence so you get the truth",
          caption: "Every reason a patient stops is rational from where they stand — find the reason, then match the remedy to it.",
        },
        {
          type: "list",
          heading: "Supporting adherence — lifelong treatment for a disease that never hurts",
          items: [
            "Explain, in the patient’s own language, that the medicine prevents stroke and kidney failure even though nothing is felt. <strong>Feeling well is the medicine working, not a reason to stop.</strong>",
            "Ask in a way that allows an honest answer: “Many people find it hard to take tablets every day — how many days did you miss this week?” rather than “Are you taking your tablets?”",
            "Match the problem to the remedy: <strong>cost</strong> (the cheapest effective generic, NHIS-covered options, combination tablets); <strong>side effects</strong> (change the drug or its timing — diuretics in the morning, methyldopa at night); <strong>forgetting</strong> (link to a daily routine, a phone alarm, a pill box); <strong>beliefs</strong> (address herbal substitution and “blood tonics” without shaming).",
            "Teach home blood pressure monitoring, give a written target, and involve the family member who buys and cooks the food.",
            "Warn against stopping beta-blockers or clonidine suddenly, against borrowing a relative’s tablets, and against buying unlabelled remedies.",
          ],
        },
        {
          type: "table",
          heading: "Hypertensive urgency versus hypertensive emergency",
          columns: ["Feature", "Urgency", "Emergency"],
          rows: [
            ["Blood pressure", "180/120 mmHg or above", "180/120 mmHg or above (may be lower in pregnancy and children)"],
            ["Acute target-organ damage", "None", "Present: encephalopathy (headache, confusion, seizures), stroke, chest pain or infarction, acute pulmonary oedema, acute kidney injury, aortic dissection, eclampsia, retinal haemorrhages or papilloedema"],
            ["Setting", "Outpatient or short observation", "High-dependency area with continuous monitoring and IV access"],
            ["Treatment", "Oral agents; bring the pressure down over 24–48 hours; check adherence", "IV agents by infusion — labetalol, hydralazine, glyceryl trinitrate or nicardipine"],
            ["Speed of reduction", "Gradual", "Lower the mean arterial pressure by no more than 20–25% in the first hour, then towards 160/100 mmHg over the next 2–6 hours. Faster lowering causes stroke and myocardial ischaemia (aortic dissection is the exception — rapid control is needed)"],
            ["Nursing", "Repeat the measurement correctly, review medicines, arrange early follow-up", "Neurological observations, cardiac monitor, blood pressure every 5–15 minutes, hourly urine output, seizure precautions, bed rest in a quiet dim room, reassurance"],
          ],
        },
        {
          type: "list",
          heading: "Hypertension in pregnancy",
          items: [
            "Hypertension in pregnancy is a blood pressure of <strong>140/90 mmHg or above</strong>. <strong>Chronic hypertension</strong> exists before 20 weeks; <strong>gestational hypertension</strong> appears after 20 weeks without proteinuria; <strong>pre-eclampsia</strong> is hypertension after 20 weeks with proteinuria or organ involvement; <strong>eclampsia</strong> adds seizures.",
            "Severe features: blood pressure 160/110 mmHg or above, severe headache, visual disturbance, epigastric or right upper quadrant pain, brisk reflexes with clonus, oliguria, falling platelets and rising liver enzymes.",
            "Drugs used: <strong>methyldopa, nifedipine and labetalol</strong>; IV hydralazine or labetalol for severe hypertension. ACE inhibitors, ARBs and most diuretics are contraindicated. <strong>Magnesium sulfate</strong> prevents and treats eclamptic seizures — monitor the patellar reflexes, respiratory rate and urine output, and keep <strong>calcium gluconate</strong> at the bedside as the antidote.",
            "Delivery is the only cure for pre-eclampsia; everything else buys time safely. Blood pressure must be checked at every antenatal and postnatal contact — eclampsia can occur after birth.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "One signature per class",
          body: "ACE inhibitor → cough and potassium. Beta-blocker → check the pulse, avoid in asthma, never stop suddenly. Thiazide → potassium falls. Calcium channel blocker → ankle swelling. Methyldopa → pregnancy. Learn the signature and most drug questions answer themselves.",
        },
      ],
      keyPoints: [
        "Salt under 5 g a day, weight loss and daily walking can lower systolic pressure by 10 mmHg or more — before any tablet.",
        "First-line in most Ghanaian adults is a calcium channel blocker or a thiazide-like diuretic; ACE inhibitors and ARBs are never combined and never used in pregnancy.",
        "Count the pulse before beta-blockers; check potassium and creatinine with ACE inhibitors, ARBs, diuretics and spironolactone.",
        "In a hypertensive emergency, lower the mean arterial pressure by no more than 20–25% in the first hour.",
        "Adherence fails for a reason — cost, side effects, beliefs or forgetting — and each reason has a different remedy.",
      ],
      quiz: {
        keywords: ["antihypertensive", "amlodipine", "nifedipine", "lisinopril", "enalapril", "losartan", "hydrochlorothiazide", "bendroflumethiazide", "methyldopa", "labetalol", "hypertensive emergency", "hypertensive crisis", "hypertensive urgency", "dash diet", "salt restriction", "ace inhibitor", "pre-eclampsia", "magnesium sulfate", "adherence"],
      },
    },
  ],
};
