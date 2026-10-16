import type { CourseModule } from "../types";

export const heart: CourseModule = {
  slug: "heart",
  title: "The heart: chambers, conduction and output",
  summary:
    "The double pump: position and pericardium, wall layers, the four chambers with the one-way flow path, the four valves with heart sounds and murmurs, and the coronary supply that feeds the pump itself — then the conduction system with ECG waves, the cardiac cycle, cardiac output with preload, afterload and contractility, and left versus right heart failure at the bedside.",
  lessons: [
    {
      slug: "chambers-valves-and-coronary-supply",
      title: "The heart: chambers, valves and coronary supply",
      minutes: 20,
      objectives: [
        "Locate the heart, the pericardium and the apical pulse (PMI).",
        "Trace blood through the chambers and name the four valves.",
        "Explain S1/S2, stenosis versus regurgitation, and murmurs.",
        "Describe the coronary arteries and why diastole feeds the heart.",
      ],
      blocks: [
        {
          type: "text",
          heading: "A fist in the mediastinum",
          paragraphs: [
            "The heart sits in the <strong>mediastinum</strong>, two-thirds left of midline, apex pointing down-left to the <strong>5th intercostal space, midclavicular line</strong> — the <strong>point of maximal impulse (PMI)</strong>, where the <strong>apical pulse</strong> is felt and counted for a full minute (never 15 × 4 in an irregular rhythm). It is wrapped in <strong>pericardium</strong>: a tough fibrous sac plus a serous lining with a film of fluid — too much fluid (<strong>tamponade</strong>: Beck's triad — hypotension, distended neck veins, muffled sounds) strangles filling and kills fast. The wall has three layers: <strong>epicardium</strong> (outer, holds the coronaries), <strong>myocardium</strong> (the muscle — thickest at the left ventricle), <strong>endocardium</strong> (smooth inner lining continuous with vessels — its infection, <strong>endocarditis</strong>, seeds from bacteraemia and vegetates on valves).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0016.svg",
          alt: "The heart in frontal section. Right side (to lungs, blue): superior vena cava into right atrium, tricuspid valve to right ventricle, pulmonary valve to pulmonary trunk. Left side (to body, red): pulmonary veins into left atrium, mitral valve to left ventricle with the thickest wall, aortic valve to aorta. Flow order: body to right atrium, right ventricle, lungs, left atrium, left ventricle, body. S1 is AV valves closing, S2 semilunars closing. Coronaries branch first off the aorta and fill in diastole; LAD is the widowmaker. Stenosis won't open, regurgitation won't shut, murmur is turbulence. Apex at 5th intercostal space, midclavicular line.",
          caption: "Two pumps in one wall — right feeds the lungs at low pressure, left feeds the body at high pressure.",
        },
        {
          type: "text",
          heading: "One-way flow through four valves",
          paragraphs: [
            "Body → <strong>SVC/IVC</strong> → <strong>right atrium</strong> → <strong>tricuspid</strong> → <strong>right ventricle</strong> → <strong>pulmonary valve</strong> → lungs → <strong>pulmonary veins</strong> → <strong>left atrium</strong> → <strong>mitral (bicuspid)</strong> → <strong>left ventricle</strong> → <strong>aortic valve</strong> → body. The <strong>atrioventricular valves</strong> (tricuspid right, mitral left) are tethered by <strong>chordae tendineae</strong> to <strong>papillary muscles</strong> so ventricular pressure slams them shut instead of prolapsing them; the <strong>semilunars</strong> (pulmonary, aortic) snap shut as back-pressure fills their cusps. Closing makes sound: <strong>S1 (lub)</strong> = AV valves shut at systole's start; <strong>S2 (dub)</strong> = semilunars shut at diastole's start — <strong>S3</strong> (gallop, fluid overload/failure) and <strong>S4</strong> (stiff ventricle) are the extras that earn attention. <strong>Stenosis</strong> (stiff, won't open — pressure builds behind) versus <strong>regurgitation</strong> (leaky, won't shut — blood sloshes back); either makes turbulent <strong>murmurs</strong>, timed systolic/diastolic and graded 1–6 — document where loudest and where it radiates.",
          ],
        },
        {
          type: "table",
          heading: "The great vessels: who carries what",
          columns: ["Vessel", "Oxygen state", "From → to", "Bedside note"],
          rows: [
            ["SVC / IVC", "Deoxygenated", "Body → right atrium", "Central lines end near the SVC–RA junction; check X-ray before use"],
            ["Pulmonary trunk + arteries", "Deoxygenated", "Right ventricle → lungs", "The only arteries carrying blue blood — pulmonary embolism lodges here"],
            ["Pulmonary veins (4)", "Oxygenated", "Lungs → left atrium", "The only veins carrying red blood — fail on the left and they congest first"],
            ["Aorta", "Oxygenated", "Left ventricle → body", "Coronaries branch first; coarctation/dissection present with pulse/BP differences"],
            ["Coronary arteries", "Oxygenated", "Aortic root → myocardium", "LAD = widowmaker; fill in diastole — tachycardia starves the heart"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Pulse deficit: count apex and wrist together",
          body: "In atrial fibrillation some beats are too weak to reach the wrist — so one nurse counts the apical pulse while another counts the radial for a full simultaneous minute; the gap (apical minus radial) is the pulse deficit. A widening deficit means more beats failing to perfuse: report it with both numbers, the rhythm, and the blood pressure — never the wrist count alone.",
        },
      ],
      keyPoints: [
        "Mediastinum, apex at 5th ICS MCL (PMI); pericardium — tamponade triad: hypotension, distended veins, muffled sounds.",
        "Wall: epicardium, myocardium (thickest LV), endocardium; flow RA→RV→lungs→LA→LV→body, one way.",
        "AV valves (tricuspid, mitral + chordae/papillarys) then semilunars (pulmonary, aortic); S1 = lub, S2 = dub.",
        "Stenosis won't open, regurgitation won't shut, murmur is turbulence — time it, grade it, locate it.",
        "Coronaries first off the aorta, fill in diastole; LAD = widowmaker; tachycardia starves the myocardium.",
        "Irregular rhythm: full-minute apical count; pulse deficit = apical minus radial, counted simultaneously.",
      ],
      quiz: {
        questionIds: ["NG-MOD-AP2-004","NG-MOD-AP2-005"],
        keywords: ["heart", "mediastinum", "pericardium", "tamponade", "myocardium", "atrium", "ventricle", "tricuspid", "mitral", "aortic valve", "S1", "S2", "murmur", "coronary", "apical pulse"],
        categories: ["fluid-electrolyte"],
      },
    },
    {
      slug: "conduction-cycle-and-cardiac-output",
      title: "Conduction, the cardiac cycle and cardiac output",
      minutes: 20,
      objectives: [
        "Trace the conduction pathway with rates and explain sympathetic/parasympathetic control.",
        "Name the ECG waves and intervals and the no-output rhythms.",
        "Explain the cardiac cycle: EDV, ESV, stroke volume, ejection fraction.",
        "Define cardiac output with preload, afterload and contractility, and contrast left vs right failure.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The wiring: SA runs it, AV delays it, Purkinje spreads it",
          paragraphs: [
            "Cardiac muscle beats itself: <strong>autorhythmic cells</strong> leak to threshold without nerves. The <strong>SA node</strong> (right atrial wall) fires fastest at <strong>60–100</strong> and sets sinus rhythm; the wave sweeps the atria, then pauses ~0.1 s at the <strong>AV node</strong> (backup rate <strong>40–60</strong>) so atria finish emptying; then races down the <strong>bundle of His</strong>, the <strong>bundle branches</strong> and the <strong>Purkinje fibres</strong> (escape rate <strong>20–40</strong> — too slow to live on) to squeeze ventricles apex-up. <strong>Sympathetic</strong> (adrenaline, fever, fear, pain) speeds and strengthens; <strong>parasympathetic vagus</strong> slows — bearing down, vomiting, suctioning and eyeball pressure vagal the rate down, which is why suctioning is brief with hyperoxygenation. Blocks along this wire (AV blocks, bundle-branch blocks) slow or desynchronize the pump — bradycardia with hypotension, syncope or confusion gets atropine per protocol and pacing pads on, not watchful waiting.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0017.svg",
          alt: "Conduction and ECG. SA node paces 60 to 100, AV node delays about 0.1 seconds with backup 40 to 60, His-Purkinje escapes at 20 to 40. ECG: P wave is atrial depolarization, QRS ventricular depolarization, T ventricular repolarization; PR interval reflects AV delay; ST elevation means myocardial injury. No-output rhythms: VF and pulseless VT are shocked; asystole gets adrenaline and CPR, never a shock; PEA needs its cause found. The monitor shows rhythm; only pulse and pressure show output.",
          caption: "Rates fall down the wire — and only pulse plus pressure prove output, never the trace alone.",
        },
        {
          type: "text",
          heading: "Cycle and output: the maths of the pump",
          paragraphs: [
            "Each <strong>cardiac cycle</strong>: ventricles <strong>fill</strong> in diastole to <strong>end-diastolic volume (~120 mL)</strong>, contract <strong>isovolumetrically</strong> until pressure beats the aorta, <strong>eject ~70 mL (stroke volume)</strong>, then relax — leaving <strong>~50 mL (end-systolic volume)</strong>. <strong>Ejection fraction = SV/EDV (~55–70%)</strong>: below 40% is failing, whatever the rate. <strong>Cardiac output = heart rate × stroke volume (~5 L/min)</strong> — tachycardia raises output only until diastole shortens so far that filling (and coronary filling) collapses. Stroke volume answers three masters: <strong>preload</strong> (stretch before the beat — venous return, fluids; Starling: more stretch, stronger squeeze, up to the failing point), <strong>afterload</strong> (resistance to eject against — blood pressure, aortic stenosis), <strong>contractility</strong> (muscle strength — adrenaline and calcium up, acidosis, hypoxia and most failure down). Nurses manipulate all three daily: fluids and legs-up for preload, vasodilators and controlled BP for afterload, inotropes and oxygen for contractility — each titrated to urine output, mentation, lungs and pressure.",
          ],
        },
        {
          type: "table",
          heading: "Heart failure: left drowns lungs, right swells body",
          columns: ["Side", "Fails to move", "Blood backs into", "Bedside signs"],
          rows: [
            ["Left (LV)", "Blood to the body", "Pulmonary veins → lungs", "Breathlessness, orthopnoea, PND, crackles, pink frothy sputum, S3 gallop, fatigue, low output"],
            ["Right (RV)", "Blood to the lungs", "Systemic veins → body", "Raised JVP, sacral/ankle oedema, tender enlarged liver, ascites, weight gain, anorexia"],
            ["Both / acute", "Either suddenly", "Both territories", "Pulmonary oedema + shock: sit up, high-flow O₂, nitrates/diuretics per protocol, urgent escalation"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Chest-pain drill: time is muscle",
          body: "Crushing central pain (or pressure, heaviness, epigastric pain, jaw/arm/back pain, breathlessness, sweat, nausea — especially in women, elders and diabetics): rest the patient flat or semi-recumbent, oxygen ONLY if SpO₂ below target, 12-lead ECG within 10 minutes, chewable aspirin 300 mg unless allergic/anticoagulated per protocol, sublingual nitrate if systolic pressure allows, IV access, continuous monitoring — and escalate for reperfusion (PCI/thrombolysis) immediately. Every 30 minutes of delay kills more myocardium. Document onset time, character, radiation, severity, vitals and ECG time — the cardiologist's first five questions.",
        },
      ],
      keyPoints: [
        "SA 60–100 → AV delay (40–60 backup) → His-Purkinje (20–40 escape); sympathetic up, vagus down.",
        "P = atrial depolarization, QRS = ventricular depolarization, T = ventricular repolarization; ST elevation = injury.",
        "VF/pulseless VT: shock; asystole: CPR + adrenaline, never shock; PEA: find the Hs and Ts.",
        "EDV ~120, ESV ~50, SV ~70 mL, EF 55–70%; CO = HR × SV ≈ 5 L/min.",
        "Preload (Starling), afterload, contractility — fluids, vasodilators, inotropes titrate to output not numbers.",
        "Left failure: lungs (crackles, orthopnoea, froth); right failure: body (JVP, oedema, liver); chest pain: ECG in 10 min.",
      ],
      quiz: {
        questionIds: ["NG-MOD-AP2-006"],
        keywords: ["SA node", "AV node", "Purkinje", "ECG", "P wave", "QRS", "ST elevation", "fibrillation", "cardiac cycle", "stroke volume", "ejection fraction", "cardiac output", "preload", "afterload", "heart failure"],
        categories: ["fluid-electrolyte"],
      },
    },
  ],
};
