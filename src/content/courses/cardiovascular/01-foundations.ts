import type { CourseModule } from "../types";

export const foundations: CourseModule = {
  slug: "foundations",
  title: "How the heart works",
  summary: "Structure, blood flow, cardiac output, blood pressure and the conduction system — the physiology every cardiac question is built on.",
  lessons: [
    {
      slug: "structure-of-the-heart-and-blood-flow",
      title: "Structure of the heart and the path of blood",
      minutes: 12,
      objectives: [
        "Name the layers, chambers and valves of the heart and state what each does.",
        "Trace the path of blood from the vena cavae to the aorta.",
        "Explain which coronary artery supplies which part of the heart and why that matters in a heart attack.",
        "Relate the structure of the heart to the sounds you hear with a stethoscope.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Why this lesson matters",
          paragraphs: [
            "The heart is a muscular pump about the size of a clenched fist. It sits in the mediastinum behind the sternum, with two-thirds of its mass to the left of the midline and its apex pointing down and to the left at the fifth intercostal space. It beats about 100,000 times a day and moves roughly 7,000 litres of blood.",
            "Every cardiovascular question in the licensing examination rests on this anatomy: which valve closes to make which sound, which artery supplies which wall, and why blood backs up into the lungs in left-sided failure but into the legs in right-sided failure.",
          ],
        },
        {
          type: "list",
          heading: "The three layers of the heart wall",
          items: [
            "<strong>Pericardium</strong> — a double-layered sac. The tough fibrous outer layer anchors the heart; the serous inner layer has a parietal and a visceral layer (the epicardium) with a few millilitres of lubricating fluid between them. Inflammation here is <strong>pericarditis</strong>; fluid or blood collecting here causes <strong>cardiac tamponade</strong>.",
            "<strong>Myocardium</strong> — the muscle. It is thickest in the left ventricle because that chamber pumps against the high resistance of the systemic circulation. Death of this layer is a <strong>myocardial infarction</strong>.",
            "<strong>Endocardium</strong> — the smooth inner lining that is continuous with the valves and the great vessels. Infection here is <strong>infective endocarditis</strong>.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0077.svg",
          alt: "The four heart chambers and the direction of blood flow through the tricuspid, pulmonary, mitral and aortic valves",
          caption: "Right side = deoxygenated blood to the lungs. Left side = oxygenated blood to the body. Arteries always carry blood away from the heart — even the deoxygenated pulmonary artery.",
        },
        {
          type: "table",
          heading: "Chambers and valves",
          columns: ["Chamber", "Receives blood from", "Empties through", "Sends blood to"],
          rows: [
            ["Right atrium", "Superior and inferior vena cavae; coronary sinus", "Tricuspid valve", "Right ventricle"],
            ["Right ventricle", "Right atrium", "Pulmonary (semilunar) valve", "Lungs, via the pulmonary artery"],
            ["Left atrium", "Four pulmonary veins", "Mitral (bicuspid) valve", "Left ventricle"],
            ["Left ventricle", "Left atrium", "Aortic (semilunar) valve", "Body, via the aorta"],
          ],
        },
        {
          type: "list",
          heading: "The path of blood in nine steps",
          style: "steps",
          items: [
            "Deoxygenated blood returns from the body through the superior and inferior vena cavae into the <strong>right atrium</strong>.",
            "It passes through the <strong>tricuspid valve</strong> into the right ventricle.",
            "The right ventricle contracts and pushes blood through the <strong>pulmonary valve</strong> into the pulmonary artery.",
            "In the lungs the blood releases carbon dioxide and picks up oxygen.",
            "Oxygenated blood returns through the four <strong>pulmonary veins</strong> to the left atrium.",
            "It passes through the <strong>mitral valve</strong> into the left ventricle.",
            "The left ventricle contracts and ejects blood through the <strong>aortic valve</strong> into the aorta.",
            "The aorta supplies the <strong>coronary arteries first</strong>, then the rest of the body.",
            "The cycle repeats 60 to 100 times a minute at rest.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "The exception examiners love",
          body: "Arteries carry blood away from the heart and veins bring it back. The pulmonary artery is the only artery carrying deoxygenated blood, and the pulmonary veins are the only veins carrying oxygenated blood.",
        },
        {
          type: "text",
          heading: "Coronary circulation",
          paragraphs: [
            "The heart cannot take oxygen from the blood inside its chambers. It depends on the two coronary arteries that arise from the aorta just above the aortic valve, and these fill mainly during <strong>diastole</strong> — so a very fast heart rate shortens filling time and starves the muscle.",
            "The <strong>right coronary artery</strong> supplies the right atrium, the right ventricle, the inferior wall of the left ventricle and, in most people, the SA and AV nodes. This is why an inferior infarct often causes bradycardia and heart block.",
            "The <strong>left main coronary artery</strong> divides into the <strong>left anterior descending</strong> artery, which supplies the anterior wall of the left ventricle and most of the septum (blockage here is the so-called “widow-maker”), and the <strong>circumflex</strong> artery, which supplies the lateral and posterior walls of the left ventricle.",
          ],
        },
        {
          type: "list",
          heading: "Heart sounds and what makes them",
          items: [
            "<strong>S1 (“lub”)</strong> — closure of the mitral and tricuspid valves at the start of systole. Loudest at the apex.",
            "<strong>S2 (“dub”)</strong> — closure of the aortic and pulmonary valves at the start of diastole. Loudest at the base.",
            "<strong>S3</strong> — a low-pitched sound early in diastole as blood rushes into an overfilled, poorly compliant ventricle. Normal in children and young adults; in an adult over 40 it usually means heart failure.",
            "<strong>S4</strong> — a sound just before S1 caused by the atrium contracting against a stiff ventricle, as in long-standing hypertension or after infarction.",
            "<strong>Murmurs</strong> — turbulent flow through a narrowed (stenotic) or leaking (regurgitant) valve, or through an abnormal opening.",
          ],
        },
      ],
      keyPoints: [
        "Pericardium, myocardium, endocardium — inflammation or infection of each layer is a named disease.",
        "Right side pumps to the lungs through the tricuspid and pulmonary valves; left side pumps to the body through the mitral and aortic valves.",
        "The left ventricle has the thickest wall because it works against systemic resistance.",
        "Coronary arteries arise from the aorta and fill during diastole; the right coronary artery usually supplies the conduction nodes.",
        "S1 is the AV valves closing, S2 is the semilunar valves closing; an S3 in an adult suggests heart failure.",
      ],
      quiz: {
        keywords: ["tricuspid", "mitral valve", "aortic valve", "pulmonary artery", "pulmonary vein", "coronary artery", "pericardium", "myocardium", "endocardium", "heart chamber", "chambers of the heart", "blood flow through the heart", "left ventricle", "right atrium", "heart sound"],
        categories: ["med-surg"],
        questionIds: ["NG-MOD-CVN-001"],
      },
    },
    {
      slug: "cardiac-output-and-blood-pressure",
      title: "The cardiac cycle, cardiac output and blood pressure",
      minutes: 14,
      objectives: [
        "Describe systole and diastole and what happens to the valves and pressures in each.",
        "Define cardiac output, stroke volume, preload, afterload and contractility and give a clinical example of each.",
        "Explain how blood pressure is generated and how the body regulates it in seconds, hours and days.",
        "Calculate mean arterial pressure and pulse pressure and state the values that matter at the bedside.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The cardiac cycle",
          paragraphs: [
            "One heartbeat has two phases. In <strong>diastole</strong> (about two-thirds of the cycle at rest) the ventricles relax, the AV valves are open and blood flows passively from the atria. At the end of diastole the atria contract and add the final 20–30% of filling — the “atrial kick”. This kick is lost in atrial fibrillation, which is one reason AF can tip a patient into heart failure.",
            "In <strong>systole</strong> the ventricles contract. Pressure rises, the AV valves snap shut (S1), and once ventricular pressure exceeds aortic and pulmonary pressure the semilunar valves open and blood is ejected. As the ventricles relax the semilunar valves close (S2) and the cycle begins again.",
          ],
        },
        {
          type: "table",
          heading: "The numbers that drive the circulation",
          columns: ["Term", "Meaning", "Normal adult value", "Clinical example"],
          rows: [
            ["Heart rate (HR)", "Beats per minute", "60–100", "Fever, pain, anxiety and hypovolaemia raise it; beta-blockers and digoxin lower it"],
            ["Stroke volume (SV)", "Blood ejected by the left ventricle with each beat", "About 70 mL (60–100 mL)", "Falls after a large infarct or in hypovolaemia"],
            ["Cardiac output (CO)", "HR × SV — blood pumped each minute", "4–8 L/min", "Falls in shock; rises in pregnancy, fever and sepsis"],
            ["Ejection fraction (EF)", "Percentage of the end-diastolic volume ejected per beat", "55–70%", "40% or less defines heart failure with reduced ejection fraction"],
            ["Preload", "Stretch of the ventricle at the end of diastole — set by venous return", "—", "Raised by fluid overload; reduced by haemorrhage, diuretics and nitrates"],
            ["Afterload", "Resistance the ventricle must overcome to eject", "—", "Raised by hypertension and aortic stenosis; reduced by ACE inhibitors and vasodilators"],
            ["Contractility", "Force of contraction independent of preload", "—", "Raised by adrenaline, dobutamine and digoxin; reduced by ischaemia, acidosis and beta-blockers"],
          ],
        },
        {
          type: "text",
          heading: "Starling’s law in plain language",
          paragraphs: [
            "Within limits, the more the ventricle is stretched by incoming blood, the harder it contracts. This is why a fluid bolus increases cardiac output in a dehydrated patient. Beyond that limit the overstretched muscle fails — which is why the same bolus can push a patient with heart failure into pulmonary oedema. The nurse’s job is to know which patient is in front of them.",
          ],
        },
        {
          type: "text",
          heading: "What creates blood pressure",
          paragraphs: [
            "<strong>Blood pressure = cardiac output × systemic vascular resistance.</strong> Anything that changes heart rate, stroke volume or the diameter of the arterioles changes the pressure. Systolic pressure reflects the force of ventricular ejection; diastolic pressure reflects the resting tone of the arterioles.",
            "<strong>Pulse pressure</strong> (systolic minus diastolic, normally 30–50 mmHg) narrows in hypovolaemia, cardiogenic shock and tamponade, and widens in aortic regurgitation, sepsis and raised intracranial pressure.",
          ],
        },
        {
          type: "list",
          heading: "Mean arterial pressure (MAP)",
          items: [
            "<strong>MAP = diastolic + one-third of the pulse pressure.</strong> Example: 120/80 → 80 + (40 ÷ 3) ≈ 93 mmHg.",
            "The organs are perfused by the mean, not the systolic. A MAP of at least <strong>65 mmHg</strong> is the usual minimum target in shock.",
            "A patient with a blood pressure of 80/60 has a MAP of about 67 mmHg; one with 90/40 has a MAP of about 57 mmHg and is worse perfused despite the higher systolic.",
          ],
        },
        {
          type: "list",
          heading: "How the body regulates blood pressure",
          items: [
            "<strong>Seconds</strong> — baroreceptors in the carotid sinus and aortic arch sense a fall in pressure, and the sympathetic nervous system responds with tachycardia, vasoconstriction and increased contractility. This is why a bleeding patient’s pulse rises long before the blood pressure falls.",
            "<strong>Minutes to hours</strong> — the renin–angiotensin–aldosterone system (RAAS). Low renal perfusion releases renin → angiotensin I → (converted by ACE in the lungs) → angiotensin II, a powerful vasoconstrictor that also releases aldosterone, so the kidney retains sodium and water. ACE inhibitors and ARBs block this pathway.",
            "<strong>Hours to days</strong> — the kidneys adjust sodium and water excretion, and antidiuretic hormone retains water when volume is low.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Do the arithmetic before you answer",
          body: "When a question gives you a blood pressure, calculate the MAP and the pulse pressure first. A narrow pulse pressure with a rising pulse is early shock even when the systolic looks acceptable.",
        },
      ],
      keyPoints: [
        "Cardiac output = heart rate × stroke volume; normal 4–8 L/min. Blood pressure = cardiac output × systemic vascular resistance.",
        "Preload is filling, afterload is resistance, contractility is squeeze — and each is a drug target.",
        "Atrial contraction provides up to 30% of ventricular filling, which is why atrial fibrillation worsens heart failure.",
        "MAP = diastolic + pulse pressure ÷ 3; keep MAP at 65 mmHg or above to perfuse the brain and kidneys.",
        "Baroreceptors act in seconds (tachycardia first); the kidney and RAAS act over hours and days.",
      ],
      quiz: {
        keywords: ["cardiac output", "stroke volume", "preload", "afterload", "mean arterial pressure", "pulse pressure", "baroreceptor", "renin", "angiotensin", "aldosterone", "systole", "diastole", "contractility", "heart rate", "blood pressure", "hypotension"],
        categories: ["med-surg"],
        questionIds: ["NG-MOD-CVN-002"],
      },
    },
    {
      slug: "conduction-system-and-normal-ecg",
      title: "The conduction system and the normal ECG",
      minutes: 20,
      objectives: [
        "Trace the conduction pathway from the SA node to the Purkinje fibres and state the intrinsic rate of each pacemaker.",
        "Name the waves and intervals of a normal ECG and their normal durations.",
        "Calculate the heart rate from a rhythm strip.",
        "Place the limb and chest electrodes correctly for a 12-lead ECG.",
        "State the standard paper speed and calibration, recognise the artefacts that make a trace unreadable, and name the heart wall each lead group views.",
        "Describe a normal 12-lead ECG in the standard reporting order.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The pathway",
          paragraphs: [
            "The <strong>sinoatrial (SA) node</strong> in the wall of the right atrium is the natural pacemaker, firing at 60–100 times a minute. The impulse spreads across both atria (the P wave) and pauses for about a tenth of a second at the <strong>atrioventricular (AV) node</strong> — the delay that lets the ventricles fill. It then travels down the <strong>bundle of His</strong>, the right and left <strong>bundle branches</strong> and finally the <strong>Purkinje fibres</strong>, which depolarise the ventricles from apex to base (the QRS complex).",
            "If the SA node fails, the AV junction takes over at 40–60 a minute. If that fails, the ventricles escape at 20–40 a minute — too slow to maintain output for long. Every pacemaker below the SA node is a back-up, and a slow wide-complex rhythm tells you the back-up has been reached.",
          ],
        },
        {
          type: "table",
          heading: "Reading a normal ECG",
          columns: ["Component", "What it represents", "Normal and what deviation means"],
          rows: [
            ["P wave", "Atrial depolarisation", "Upright in lead II, one before every QRS, less than 0.12 s. Absent in atrial fibrillation; saw-toothed in flutter"],
            ["PR interval", "Conduction from the atria through the AV node", "0.12–0.20 s (3–5 small squares). Longer = first-degree heart block"],
            ["QRS complex", "Ventricular depolarisation", "Less than 0.12 s (under 3 small squares). Wider = bundle branch block or a rhythm arising in the ventricles"],
            ["ST segment", "Early ventricular repolarisation", "On the baseline. Elevation = infarction or pericarditis; depression = ischaemia or digoxin effect"],
            ["T wave", "Ventricular repolarisation", "Upright and rounded. Tall and peaked in hyperkalaemia; flat with a U wave in hypokalaemia; inverted in ischaemia"],
            ["QT interval", "Total ventricular activity", "Corrected QT under about 0.44–0.46 s. Prolonged by hypocalcaemia, hypomagnesaemia and several drugs — risk of torsades de pointes"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ECG-0001.svg",
          alt: "Normal sinus rhythm with P wave, PR interval, QRS complex, ST segment and T wave labelled",
          caption: "The normal ECG labelled: compare every trace you read against this reference — rate, rhythm, P, PR, QRS, ST, T.",
        },
        {
          type: "list",
          heading: "Calculating the rate",
          items: [
            "The paper runs at 25 mm per second: one small square = 0.04 s, one large square = 0.20 s.",
            "<strong>Regular rhythm:</strong> 300 ÷ the number of large squares between two R waves. Four large squares = 75 a minute; three = 100; five = 60.",
            "<strong>Irregular rhythm:</strong> count the R waves in a 6-second strip (30 large squares) and multiply by 10.",
            "Always confirm with a palpated pulse — the monitor counts electrical events, not perfusing beats.",
          ],
        },
        {
          type: "list",
          heading: "Calibration and artefacts: never read a bad trace",
          items: [
            "Standard paper runs at <strong>25 mm per second</strong> with a calibration of <strong>10 mm per millivolt</strong>: one small square = 1 mm = 0.04 s wide and 0.1 mV tall. Every trace starts with a rectangular <strong>calibration pulse</strong> 5 mm wide and 10 mm tall — if it is 5 mm tall, the machine is on half-calibration and every complex looks half its true voltage.",
            "<strong>Muscle artefact</strong> — shivering, cold, anxiety or Parkinson's disease draws a fuzzy, spiky baseline. Warm the patient, support the limbs, ask them to relax and keep still, and repeat.",
            "<strong>Wandering baseline</strong> — breathing movement, a loose electrode or a dried-out gel pad sends the baseline drifting up and down. Re-prepare the skin, replace the electrode, and keep the cables from tugging.",
            "<strong>AC interference</strong> — a thick, regular 50 Hz fuzz from mains electricity: infusion pumps, beds, poor earthing. Switch off or move nearby equipment, check the right-leg (earth) electrode, and repeat.",
            "The rule: <strong>fix the trace before reading it</strong>. No nurse should interpret — and no doctor should be handed — a trace where artefact hides the P waves or the ST segments. Repeat, keep the best trace, and document that you did.",
          ],
        },
        {
          type: "table",
          heading: "What each lead looks at",
          columns: ["Leads", "Wall of the heart", "Supplied by", "Why it matters"],
          rows: [
            ["II, III, aVF", "Inferior wall", "Right coronary artery (usually)", "Inferior infarction often comes with bradycardia and heart block, because the RCA usually feeds the SA and AV nodes"],
            ["I, aVL, V5, V6", "Lateral wall", "Circumflex artery (and LAD diagonal branches)", "Lateral changes pair with anterior ones in large LAD infarcts; isolated aVL changes are easy to miss"],
            ["V1, V2", "Septum", "Septal branches of the LAD", "Septal infarction can knock out both bundle branches at once — watch for complete heart block"],
            ["V3, V4", "Anterior wall", "Left anterior descending artery", "The 'widow-maker' territory: a large muscle mass that deteriorates fast and needs reperfusion fastest"],
            ["aVR", "The cavity and the right upper heart — normally entirely negative", "Left main pattern", "The neglected lead: widespread ST depression with ST <strong>elevation in aVR</strong> suggests left main or severe triple-vessel disease — escalate immediately"],
            ["V4R (right-sided chest lead)", "Right ventricle", "Right coronary artery", "V4 moved to the right chest in inferior infarction: right-ventricular infarct needs <strong>fluids, not nitrates or diuretics</strong>"],
            ["Contiguous leads", "Two anatomically neighbouring leads (for example II + III + aVF)", "—", "Infarction is diagnosed by ST elevation in <strong>contiguous</strong> leads, not scattered ones — which is why the territories must be memorised"],
          ],
        },
        {
          type: "list",
          heading: "Electrode placement for a 12-lead ECG",
          items: [
            "<strong>Limb electrodes:</strong> right arm, left arm, right leg (earth) and left leg, on the limbs rather than the trunk where possible, and in the same places every time.",
            "<strong>V1</strong> — fourth intercostal space, right sternal border. <strong>V2</strong> — fourth intercostal space, left sternal border.",
            "<strong>V4</strong> — fifth intercostal space, mid-clavicular line. <strong>V3</strong> — midway between V2 and V4.",
            "<strong>V5</strong> — anterior axillary line, level with V4. <strong>V6</strong> — mid-axillary line, level with V4.",
            "Prepare the skin (dry, clip hair if needed, clean), lie the patient flat and still, warn that nothing will be felt, and record within 10 minutes of arrival in anyone with chest pain. Label the trace with the name, date, time and whether the patient had pain at the time.",
          ],
        },
        {
          type: "text",
          heading: "Describing a normal trace",
          paragraphs: [
            "Every ECG description follows the same order, whether normal or not: <strong>rate, rhythm, P wave, PR interval, QRS complex, axis, ST segment, T wave, QTc — then the verdict</strong>. The habit matters more than the vocabulary: a fixed order is what stops the reader skipping the QT interval or the aVR that changes everything.",
            "A normal report sounds like this: 'Rate 72, regular narrow-complex rhythm with a P wave before every QRS — sinus rhythm. PR interval 0.16 seconds, QRS 0.08 seconds, normal axis. ST segments isoelectric, T waves upright, QTc 0.42 seconds. Normal ECG.' Learn to write that sentence from any normal trace, and every abnormality becomes a deviation from a known baseline — which is exactly how the dysrhythmia lesson, and the examination, will test you.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Numbers to remember",
          body: "Paper 25 mm/s; calibration 10 mm/mV; small square 0.04 s, large square 0.20 s. SA node 60–100, AV junction 40–60, ventricles 20–40. PR 0.12–0.20 s; QRS under 0.12 s; QTc under 0.44–0.46 s. Rate = 300 ÷ large squares (regular) or 6-second count × 10 (irregular). Inferior II/III/aVF, lateral I/aVL/V5/V6, septal V1/V2, anterior V3/V4 — and elevation in aVR with widespread depression means left main disease.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Five questions, always in the same order",
          body: "Is there a rate? Is it regular? Is there a P wave before every QRS? Is the PR interval normal and constant? Is the QRS narrow? Work through them the same way every time and you will not miss a block or a ventricular rhythm.",
        },
      ],
      keyPoints: [
        "SA node 60–100, AV junction 40–60, ventricles 20–40 beats a minute.",
        "PR 0.12–0.20 s; QRS under 0.12 s; one large square is 0.2 s.",
        "Rate = 300 ÷ the large squares between R waves for regular rhythms; count 6 seconds × 10 for irregular ones.",
        "Peaked T waves mean hyperkalaemia; flat T waves with U waves mean hypokalaemia.",
        "Correct electrode placement is a nursing responsibility — a misplaced lead creates a false diagnosis.",
        "Standard paper runs at 25 mm/s with 10 mm/mV calibration — check the calibration pulse, and fix artefact before reading.",
        "Inferior II/III/aVF, lateral I/aVL/V5/V6, septal V1/V2, anterior V3/V4; report every trace in the same order — rate, rhythm, P, PR, QRS, ST, T, QTc.",
      ],
      quiz: {
        keywords: ["ecg", "electrocardiogram", "conduction system", "sinoatrial", "sa node", "av node", "atrioventricular node", "purkinje", "qrs", "p wave", "pr interval", "st segment", "t wave", "qt interval", "calibration", "lead placement", "limb lead", "chest lead", "heart block", "bradycardia", "tachycardia", "arrhythmia", "palpitation", "syncope", "chest pain"],
        categories: ["med-surg"],
        questionIds: ["NG-MOD-CVN-003"],
      },
    },
  ],
};
