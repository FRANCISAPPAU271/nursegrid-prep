import type { CourseModule } from "../types";

export const spinalCordAndChronicDisorders: CourseModule = {
  slug: "spinal-cord-and-chronic-disorders",
  title: "Spinal Cord Injury, Neuromuscular and Chronic Neurological Disorders",
  summary: "The spine protected from the roadside to the rehabilitation ward and the dysreflexia that can kill years later; the weaknesses that stop breathing — Guillain-Barré and myasthenia; tetanus, flaccid paralysis and the dying nerves of neuropathy; and the long disorders of movement, memory, attention and head pain that fill medical wards and outpatient clinics. Headache now has its own lesson of primary syndromes and secondary drills.",
  lessons: [
    {
      slug: "spinal-cord-injury",
      title: "Spinal cord injury",
      minutes: 16,
      objectives: [
        "Relate the level of spinal cord injury to the functions lost and the breathing, bladder and independence that remain.",
        "Immobilise and move a patient with a suspected spinal injury safely, and distinguish spinal, neurogenic and hypovolaemic shock.",
        "Recognise and treat autonomic dysreflexia as an emergency.",
        "Plan bladder, bowel, skin, respiratory, thromboembolic and psychological care and rehabilitation after cord injury.",
      ],
      blocks: [
        {
          type: "text",
          heading: "One careless lift",
          paragraphs: [
            "The spinal cord carries every command from the brain and every sensation back to it; it does not regenerate. In Ghana most injuries come from road traffic crashes (especially unrestrained passengers and motorcycle riders), falls from heights (coconut and palm trees, buildings under construction), diving into shallow water, loads carried on the head, assault, and — increasingly recognised — tuberculosis of the spine (Pott's disease), tumours and transverse myelitis causing non-traumatic cord damage. Young men predominate.",
            "A fractured vertebra may leave the cord intact until someone sits the patient up, drags him out of a car by the arms, or carries him in the back of a taxi without support. Complete cord injury can be created at the scene, in the emergency room, during the X-ray, or on the ward by a single unsupported movement. The rule is simple: <strong>any patient with a significant mechanism, neck or back pain, altered consciousness, limb weakness or numbness, or a distracting injury has a spinal injury until it is cleared</strong> by examination and, where needed, imaging.",
          ],
        },
        {
          type: "table",
          heading: "Level of injury and what remains",
          columns: ["Level", "Loss", "Breathing", "Function and independence"],
          rows: [
            ["<strong>C1–C3</strong>", "Tetraplegia (quadriplegia) — all four limbs and trunk; no neck control below the injury", "<strong>Diaphragm paralysed</strong> (phrenic nerve C3–C5) — <strong>ventilator-dependent</strong>; apnoea at the scene", "Totally dependent; powered chair by chin or breath control; speech possible with a cuffless tube"],
            ["<strong>C4</strong>", "Tetraplegia; some shoulder shrug", "Diaphragm partly works — may breathe unaided but weakly; often needs ventilation initially", "Dependent for all care; powered chair"],
            ["<strong>C5</strong>", "Shoulder and elbow flexion (biceps) present; no wrist or hand", "Diaphragm intact, no intercostals — weak cough, prone to pneumonia", "Can feed with aids, drive a powered chair with hand controls; needs help for transfers"],
            ["<strong>C6</strong>", "Wrist extension present (tenodesis grip); no finger movement", "As above", "Can push a manual chair on flat ground, transfer with a sliding board, dress upper body, self-catheterise with aids"],
            ["<strong>C7–C8</strong>", "Elbow extension (triceps) and some finger function", "As above", "Largely independent in a manual chair; transfers; may live alone with support"],
            ["<strong>T1–T6</strong>", "Paraplegia — legs and lower trunk; arms normal", "Intercostals partly lost; cough weak", "Independent in chair; <strong>autonomic dysreflexia risk (T6 and above)</strong>; poor trunk balance"],
            ["<strong>T7–T12</strong>", "Paraplegia; trunk control improves lower down", "Near-normal breathing; abdominal muscles weak", "Fully independent in a manual chair; may stand in a frame"],
            ["<strong>L1–L5</strong>", "Variable leg weakness; hip flexion and knee extension possible at lower levels", "Normal", "Walking with callipers and crutches possible for many"],
            ["<strong>S1–S5 / cauda equina</strong>", "Foot and ankle weakness, saddle anaesthesia, <strong>bladder, bowel and sexual function</strong> affected; flaccid bladder", "Normal", "Walking; continence management; <strong>cauda equina syndrome</strong> (back pain, bilateral sciatica, saddle numbness, retention) is a surgical emergency within 24–48 hours"],
          ],
        },
        {
          type: "table",
          heading: "Complete versus incomplete injury",
          columns: ["Term", "Meaning"],
          rows: [
            ["Complete (ASIA A)", "No motor or sensory function below the level including the sacral segments (no anal sensation or voluntary anal contraction) once spinal shock has resolved; recovery unlikely"],
            ["Incomplete (ASIA B–D)", "Some sensation or movement preserved below the level — sacral sparing is the key sign; prognosis better; patterns include central cord (arms weaker than legs, older people after hyperextension), anterior cord (motor and pain lost, position sense kept), Brown-Séquard (one side weak, opposite side numb to pain), posterior cord"],
            ["Tetraplegia / paraplegia", "Cervical injury affects all four limbs; thoracic or lower affects legs and trunk"],
            ["Primary / secondary injury", "Primary damage at impact; <strong>secondary injury</strong> from hypoxia, hypotension, oedema and movement over the following hours and days — prevented by good airway, blood pressure above 85–90 mmHg mean, oxygen, immobilisation and avoiding fever"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-EMG-0061.svg",
          alt: "Suspected spinal injury: manual in-line stabilisation of the head and neck, hard collar and blocks, jaw thrust rather than head tilt, four-person log roll keeping head, shoulders and hips in one line, and transfer on a spinal board or scoop",
          caption: "Hands on the head before anything else, jaw thrust not head tilt, and a four-person log roll with the person at the head giving the commands — head, shoulders and pelvis move as one.",
        },
        {
          type: "list",
          heading: "Immobilisation and movement",
          style: "steps",
          items: [
            "<strong>Manual in-line stabilisation</strong>: one person holds the head in neutral alignment with the body, hands over the ears, and keeps it there until a collar and blocks are applied — and resumes it whenever the collar is removed. Do not pull on the neck ('traction') and do not force a deformed neck straight if it resists or pain and symptoms increase.",
            "<strong>Airway with the neck protected</strong>: <strong>jaw thrust</strong> (not head tilt–chin lift); suction; oropharyngeal airway; high-flow oxygen; early intubation if the injury is high or breathing is failing — a C-spine injury must not be allowed to cause death from a blocked airway, so if nothing else works the airway takes priority.",
            "<strong>Apply a correctly sized rigid cervical collar</strong> (measured from the angle of the jaw to the top of the shoulder), head blocks or rolled towels either side of the head, and tape across the forehead and chin piece to the board; a sandbag on each side if nothing else; secure the body before the head so a sliding body does not twist the neck. Where collars are contraindicated (penetrating neck injury, ankylosing spondylitis, agitation) use manual stabilisation and padding.",
            "<strong>Log roll</strong> to examine the back, apply or remove boards, clean, or turn: <strong>four people</strong> minimum — one at the head controlling the roll and giving the commands, three along the body (shoulders, hips, legs), roll as a single unit on 'ready, steady, roll', keep the head, shoulders and pelvis in one line, examine or slide the sheet, roll back on command. Note that the lower cervical spine and thoracolumbar junction are the commonest injury levels; the whole spine is treated as one.",
            "<strong>Transfer</strong> on a scoop stretcher or spinal board with straps across chest, pelvis and legs; <strong>off the hard board within 30 minutes</strong> of arrival when possible (or at most 2 hours) onto a firm mattress or vacuum mattress — pressure sores start on boards within an hour in an insensate patient. Lift with a scoop, never by the arms and legs.",
            "<strong>Clearing the spine</strong>: alert, not intoxicated, no neurological deficit, no midline tenderness, no distracting injury and can rotate the neck 45° each way — may be cleared clinically (NEXUS / Canadian C-spine rule); otherwise CT (preferred) or three-view X-rays; the collar stays until a doctor documents clearance. An unconscious patient keeps precautions until imaging is complete and reviewed.",
            "<strong>Document</strong> sensation and movement in each limb and the anal reflex at each stage — deterioration between the scene and the ward means something moved or is bleeding/swelling and needs urgent review.",
          ],
        },
        {
          type: "table",
          heading: "Spinal shock, neurogenic shock and hypovolaemic shock",
          columns: ["Feature", "Spinal shock", "Neurogenic shock", "Hypovolaemic shock"],
          rows: [
            ["What it is", "Temporary <strong>loss of all reflexes and tone</strong> below the injury — flaccid paralysis, no sensation, areflexic (flaccid) bladder and bowel; not a circulatory state", "Loss of <strong>sympathetic tone</strong> below the injury (T6 and above) — vessels dilate and the heart cannot speed up: <strong>hypotension with bradycardia</strong>, warm dry flushed skin below the injury, cannot maintain temperature (poikilothermia), priapism may occur", "Loss of blood volume (haemorrhage from other injuries — common with cord injury): <strong>hypotension with tachycardia</strong>, cold clammy pale skin, narrow pulse pressure, delayed capillary refill"],
            ["Timing", "Immediate; lasts days to weeks; its end is marked by the return of the bulbocavernosus reflex and spasticity", "Within minutes to hours; lasts 1–5 weeks", "Depends on bleeding"],
            ["Nursing response", "Expect flaccid retention — catheter; positioning; prevent complications; prognosis cannot be judged until it resolves", "<strong>Atropine 0.5–1 mg IV</strong> for symptomatic bradycardia (especially before suction or turning — vagal stimulation causes arrest), <strong>cautious fluids</strong> (the patient is not empty — overload causes pulmonary oedema), vasopressors (noradrenaline/phenylephrine) to keep mean arterial pressure 85–90 mmHg for the first week to perfuse the cord; keep warm; pre-oxygenate before suction", "<strong>Look for the bleed</strong> (abdomen, pelvis, long bones, chest — the patient feels no pain below the injury), fluids and blood, stop the bleeding; tachycardia in a high cord injury means hypovolaemia until proved otherwise because neurogenic shock alone does not cause it"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MSN-2695.svg",
          alt: "Four types of shock compared: hypovolaemic with cold pale skin and tachycardia, cardiogenic, distributive including neurogenic with warm skin and bradycardia, and obstructive, with why blood pressure falls late and compensated versus decompensated stages",
          caption: "Neurogenic shock sits in the distributive family — warm skin and a slow pulse — while hypovolaemic shock is cold and fast. A spinal patient can have both; the pulse rate tells you which to treat first.",
        },
        {
          type: "table",
          heading: "Autonomic dysreflexia — a hypertensive emergency (T6 and above, after spinal shock resolves)",
          columns: ["Element", "Content"],
          rows: [
            ["Mechanism", "A noxious stimulus below the injury triggers a massive sympathetic reflex that the brain cannot inhibit (the signal cannot pass the injury) → vasoconstriction below → <strong>severe hypertension</strong> (systolic can exceed 250 mmHg); the brain responds with vagal slowing and vasodilation <strong>above</strong> the lesion. Untreated: stroke, seizures, retinal haemorrhage, myocardial infarction, death. Can occur for life, including during labour and procedures"],
            ["Triggers", "<strong>Full bladder</strong> (blocked or kinked catheter, retention — the commonest), <strong>full bowel</strong> (constipation, impaction), pressure sore, ingrown toenail, tight clothing or leg bag strap, fracture, urinary infection, bladder stones, sexual activity, labour, procedures (catheterisation, enema), burns, sunburn, hot/cold, menstrual cramps"],
            ["Recognition", "<strong>Pounding headache</strong>, <strong>flushed sweating face and neck</strong>, nasal congestion, blurred vision, anxiety, <strong>bradycardia</strong>, hypertension at least 20–40 mmHg above the patient's usual (their normal is often 90–110 systolic — so 140/90 is dangerous for them), <strong>pale cold goose-pimpled skin below the injury</strong>"],
            ["<strong>Actions in order</strong>", "1. <strong>Sit the patient up</strong> and lower the legs (orthostatic drop in pressure) — never lie them flat. 2. <strong>Loosen</strong> anything tight — clothing, abdominal binder, leg bag straps, shoes, stockings. 3. Check <strong>blood pressure every 2–5 minutes</strong>. 4. <strong>Bladder</strong>: check the catheter for kinks and blockage, irrigate gently or <strong>replace it</strong> using lidocaine gel; if no catheter, catheterise with lidocaine gel (wait 2 minutes). 5. If still hypertensive, <strong>bowel</strong>: check for stool with lidocaine gel applied first, gentle digital removal, then stop if BP rises further. 6. Look for other causes — skin, nails, fractures, infection. 7. <strong>If systolic remains above 150 mmHg</strong> after removing the cause: fast-acting antihypertensive — nifedipine 10 mg (bite and swallow) or glyceryl trinitrate (sublingual tablet or 2 cm of 2% ointment above the level, wiped off when BP falls) or captopril 25 mg sublingual; IV hydralazine or labetalol if severe; call the doctor. 8. Monitor for at least 2 hours after resolution — it can recur and the antihypertensive can cause hypotension. 9. Document, and teach the patient and carers — they should carry an alert card"],
            ["Prevention", "Regular, complete bladder emptying; bowel programme; skin inspection; pressure relief; loose clothing; anaesthetic gel for catheterisation and bowel care; avoid overfilling during cystoscopy; epidural in labour"],
          ],
        },
        {
          type: "table",
          heading: "Acute and long-term care",
          columns: ["System", "Care"],
          rows: [
            ["<strong>Respiratory</strong>", "The commonest cause of death in the first year. Hourly respiratory rate and saturation in cervical injuries; <strong>vital capacity</strong> twice daily if possible (below 10–15 mL/kg or falling = intubation); watch for ascending oedema in the first 72 hours (a C5 injury can become C3); assisted coughing ('quad cough' — hands below the ribs pushing up and in on exhalation), incentive spirometry, chest physiotherapy, deep suction (atropine at hand), early tracheostomy if prolonged ventilation; aspiration precautions; paralytic ileus distending the abdomen (NG tube) impairs the diaphragm"],
            ["Cardiovascular", "Bradycardia and hypotension (neurogenic shock) for weeks; <strong>orthostatic hypotension</strong> on sitting — abdominal binder, elastic stockings, gradual elevation, tilt table; later, autonomic dysreflexia"],
            ["<strong>Bladder</strong>", "Indwelling catheter in the acute phase (hourly output); then <strong>clean intermittent self-catheterisation every 4–6 hours</strong> (keep volumes below 400–500 mL, fluid intake spread through the day) — fewer infections, stones and dysreflexia than an indwelling catheter; reflex (spastic) bladder above the sacral centre may empty with tapping and condom drainage; flaccid bladder (sacral/cauda) needs catheterisation; urine infections are treated when symptomatic (fever, cloudy foul urine, increased spasms, dysreflexia), not for bacteria alone; annual renal ultrasound — renal failure was once the main cause of late death"],
            ["<strong>Bowel</strong>", "Paralytic ileus initially — NG tube, nil by mouth. Then a <strong>bowel programme</strong>: same time daily or alternate days, 30 minutes after a meal (gastrocolic reflex), on a commode or side-lying, fluids 2 L/day and fibre, stool softener (docusate/lactulose) the night before, glycerine or bisacodyl suppository then digital stimulation for the reflex bowel; manual evacuation for the flaccid bowel; aim for a soft formed stool without accidents; impaction causes dysreflexia, overflow and distension"],
            ["<strong>Skin</strong>", "No sensation, no movement, moist skin — the highest-risk patients of all. Turn every 2 hours in bed (every 2 hours in the acute phase even on a pressure-relieving mattress); <strong>pressure lifts every 15–30 minutes in the chair</strong> for 1–2 minutes (push-ups, leaning side to side, tilt-in-space); cushion assessed; inspect skin twice daily with a mirror (teach the patient); heels, sacrum, ischial tuberosities, trochanters; nutrition and protein; no sitting on wet pads; a sore means bed rest until healed and may take months"],
            ["Musculoskeletal", "Passive movements twice daily; positioning to prevent contractures and foot drop; splints; spasticity after spinal shock resolves (baclofen, tizanidine, stretching; sudden increase in spasm = infection, sore, stone or fracture); heterotopic ossification (hot swollen hip/knee); osteoporosis and fractures from minimal force — handle gently"],
            ["Thromboembolism", "Very high risk for 3 months — low-molecular-weight heparin plus mechanical compression from 72 hours after injury (once bleeding excluded), passive movements, hydration; a swollen leg or unexplained breathlessness/tachycardia is DVT/PE"],
            ["Pain and temperature", "Neuropathic pain (burning below the level) — gabapentin/pregabalin/amitriptyline; shoulder overuse pain; cannot sweat or shiver below the injury — protect from heat and cold, no hot water bottles"],
            ["Nutrition", "High-protein, high-fibre, adequate fluids; prevent obesity in the chair; monitor albumin and weight; swallowing assessment in high cervical injuries with collars or tracheostomy"],
            ["<strong>Psychological, sexual and social</strong>", "Grief, anger, depression and suicidal thoughts are common and expected — listen, involve a counsellor and peers who live with injury; honest information in stages; sexual function and fertility (erection and ejaculation may be affected; fertility treatment possible; women can conceive and deliver — dysreflexia risk in labour); family training; return to education and work; wheelchair-accessible housing and toilets; Ghana's disability law and support groups; many Ghanaian patients are abandoned when the money runs out — plan early for the realistic home situation"],
            ["Rehabilitation", "Begins on day one; goals by level (table above); physiotherapy, occupational therapy, orthotics, wheelchair skills, transfers with a sliding board, bladder and bowel training, skin self-care, community reintegration; specialist spinal units where available (Korle Bu, Komfo Anokye and the Ghana Society of Physically Disabled network)"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Never",
          body: "Never sit up, lift by the arms, or carry a suspected spinal patient without support — the injury you create is permanent. Never use head tilt on a trauma airway. Never leave a patient on a hard spinal board for hours. Never suction or turn a high cervical patient without pre-oxygenating and having atropine nearby. Never lie a patient with autonomic dysreflexia flat. Never give a spinal patient a hot water bottle.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Remember",
          body: "Diaphragm C3–C5 — injury above C4 means ventilation. C6 = wrist extension, independent manual chair possible. Log roll = 4 people, head controls. Off the board within 30 minutes. Neurogenic shock = hypotension + bradycardia + warm skin → atropine, cautious fluids, vasopressors; hypovolaemic = tachycardia + cold skin → find the bleed. Spinal shock = flaccid areflexia, temporary. Autonomic dysreflexia (T6+) = pounding headache, flushed above, pale below, bradycardia, hypertension → sit up, loosen, bladder, bowel, nifedipine if systolic >150. Intermittent catheterisation every 4–6 hours. Pressure lifts every 15–30 minutes in the chair. Respiratory complications are the leading cause of early death.",
        },
      ],
      keyPoints: [
        "The level of cord injury determines what remains: above C4 the diaphragm fails and ventilation is needed; C6 wrist extension allows independence in a manual chair; thoracic injuries cause paraplegia; sacral and cauda equina lesions take bladder, bowel and sexual function.",
        "Any patient with a significant mechanism, spinal pain, altered consciousness or neurological symptoms is immobilised with manual in-line stabilisation, collar and blocks, jaw thrust for the airway, four-person log rolls, scoop transfers and removal from the hard board within 30 minutes.",
        "Spinal shock is temporary flaccid areflexia; neurogenic shock is hypotension with bradycardia and warm skin treated with atropine, cautious fluids and vasopressors; hypovolaemic shock is hypotension with tachycardia and cold skin and means a bleed to find.",
        "Autonomic dysreflexia (T6 and above) is a pounding headache, flushing above and pallor below the lesion with bradycardia and severe hypertension — sit the patient up, loosen clothing, empty the bladder then bowel, and give nifedipine or GTN if systolic stays above 150.",
        "Long-term survival depends on scheduled care: respiratory support and assisted coughing, intermittent catheterisation, a timed bowel programme, 2-hourly turns and 15–30-minute pressure lifts, thromboprophylaxis, spasticity and pain control, psychological and sexual counselling and early rehabilitation.",
      ],
      quiz: {
        keywords: ["spinal", "cervical collar", "log roll", "paraly", "paraplegi", "quadripleg", "tetrapleg", "neurogenic shock", "spinal shock", "autonomic dysreflexia", "dysreflexia", "immobilis", "spine", "neck injury", "neck pain", "wheelchair", "intermittent catheter", "self catheter"],
      },
    },
    {
      slug: "guillain-barre-syndrome-myasthenia-gravis-and-bells-palsy",
      title: "Guillain-Barré syndrome, myasthenia gravis and Bell's palsy",
      minutes: 14,
      objectives: [
        "Locate the cause of weakness from its pattern — brain, cord, peripheral nerve, neuromuscular junction or muscle.",
        "Recognise Guillain-Barré syndrome and monitor for the respiratory failure and autonomic instability that kill.",
        "Nurse the patient with myasthenia gravis safely, including drug timing, drugs to avoid and the difference between myasthenic and cholinergic crisis.",
        "Manage Bell's palsy, protect the eye, and distinguish it from stroke.",
      ],
      blocks: [
        {
          type: "text",
          heading: "When the message cannot reach the muscle",
          paragraphs: [
            "Weakness can come from the brain (stroke — one side, with speech or face involvement), the cord (a level, with bladder involvement), the peripheral nerves (glove-and-stocking numbness, lost reflexes, ascending weakness), the neuromuscular junction (fatigable weakness that worsens with use — myasthenia), or the muscle itself (proximal weakness — cannot rise from a chair or lift the arms). The pattern tells you where the lesion is. Two of the conditions in this lesson — Guillain-Barré syndrome and myasthenic crisis — kill by stopping breathing or swallowing in a patient who is fully awake, and the nurse who counts the respiratory rate and tests the cough is the one who saves them. Bell's palsy, the third, is harmless to life but is constantly mistaken for a stroke — and blinds the eye it leaves open if it is not protected.",
          ],
        },

        {
          type: "table",
          heading: "Guillain-Barré syndrome (acute inflammatory demyelinating polyneuropathy)",
          columns: ["Element", "Content"],
          rows: [
            ["What it is", "Autoimmune attack on peripheral nerve myelin, usually 1–4 weeks after an infection — <em>Campylobacter</em> diarrhoea, respiratory infection, Zika, CMV, EBV, HIV, occasionally vaccination or surgery. The commonest cause of acute flaccid paralysis now that polio is almost gone — so every case is also <strong>notified as AFP</strong> in children under 15"],
            ["Presentation", "<strong>Ascending</strong>, symmetrical weakness starting in the legs (difficulty climbing stairs, falls) and rising over hours to days to arms, trunk, face and swallowing; tingling and pain (back and legs) early; <strong>reflexes lost</strong>; sensation mildly affected; peaks within 2–4 weeks then plateaus and slowly recovers over months. Variants: Miller Fisher (eye movement palsy, ataxia, areflexia)"],
            ["<strong>Why it kills</strong>", "<strong>Respiratory muscle paralysis</strong> (25–30% need ventilation), <strong>bulbar weakness</strong> (aspiration), and <strong>autonomic instability</strong> (wild swings of blood pressure and heart rate, arrhythmias, ileus, urinary retention, sudden cardiac arrest — especially with suction). Mortality 3–7% in good units, far higher where ventilation is unavailable"],
            ["<strong>Monitoring — the nurse's core task</strong>", "<strong>Forced vital capacity (FVC) every 4–6 hours</strong> (more often if falling) with a bedside spirometer — <strong>below 20 mL/kg (about 1–1.5 L in an adult) or falling fast = ICU and probable intubation</strong>; where no spirometer: the <strong>single-breath count</strong> (take a deep breath and count aloud — counting to 20 or more is reassuring, under 10 means severe weakness), ability to cough and clear secretions, swallowing of saliva, strength of neck flexion (lift the head off the pillow — a good proxy for the diaphragm), respiratory rate and pattern, use of accessory muscles, paradoxical abdominal movement, speech in short phrases, saturation (<strong>falls late</strong> — a normal saturation does not mean safe), rising CO₂ (drowsy, sweating, headache). <strong>Continuous ECG and blood pressure</strong> for autonomic swings; avoid rapid position changes; pre-oxygenate and limit suction"],
            ["Treatment", "<strong>IV immunoglobulin 0.4 g/kg/day for 5 days</strong> or <strong>plasma exchange</strong> (5 exchanges over 2 weeks) within the first 2–4 weeks shorten the illness; <strong>steroids do not help</strong> and are not given; intubate electively before crisis if FVC falls below 15–20 mL/kg, swallow fails or secretions cannot be cleared; tracheostomy if prolonged"],
            ["Nursing care", "Everything in the unconscious-patient lesson applied to a fully conscious, often terrified patient who cannot move or speak if intubated: communication boards and eye-blink codes, explanation, reassurance that most people recover; DVT prophylaxis (very high risk); 2-hourly turns and pressure care; passive movements and splints (foot drop); <strong>pain</strong> — neuropathic and musculoskeletal, often severe and under-treated (gabapentin, amitriptyline, opioids); bladder (retention) and bowel (ileus, constipation); nutrition (NG feeds if bulbar); eye care if facial weakness prevents closure; psychological support and family involvement; months of rehabilitation; about 20% have residual disability at a year, 5–10% severe"],
          ],
        },

        {
          type: "diagram",
          src: "/diagrams/NG-CVM-1522.svg",
          alt: "Monitoring a patient with Guillain-Barré syndrome: ascending weakness, forced vital capacity measured regularly, single-breath count, weak cough and swallow, heart rate and blood pressure swings, and escalation to intensive care before breathing fails",
          caption: "The GBS patient is awake and watching you. Count the breaths, measure the vital capacity, ask them to count out loud — and move them to intensive care before the saturation falls, not after.",
        },

        {
          type: "table",
          heading: "Myasthenia gravis",
          columns: ["Element", "Content"],
          rows: [
            ["What it is", "Autoimmune antibodies block acetylcholine receptors at the neuromuscular junction → <strong>fatigable weakness</strong>: worse with use and at the end of the day, better after rest. Young women and older men; associated with thymoma (CT chest) and other autoimmune disease"],
            ["Presentation", "Drooping eyelids (ptosis) and double vision, especially in the evening; weak facial expression ('snarl' smile), nasal speech that fades, difficulty chewing (jaw tires during a meal) and <strong>swallowing</strong> (regurgitation through the nose, choking), weak neck (head drop), proximal limb weakness (combing hair, climbing stairs); reflexes and sensation normal. Diagnosis: ice-pack test on the eyelid, acetylcholine receptor antibodies, repetitive nerve stimulation, edrophonium (rarely now)"],
            ["Treatment", "<strong>Pyridostigmine</strong> (anticholinesterase) 30–120 mg 4–6 times daily; immunosuppression (prednisolone — started low because it can worsen weakness first; azathioprine, mycophenolate); thymectomy; IVIG or plasma exchange for crisis"],
            ["<strong>Nursing the drugs</strong>", "<strong>Give pyridostigmine exactly on time</strong> — a delayed dose means a patient who cannot swallow or breathe; give <strong>30–60 minutes before meals</strong> so chewing and swallowing are strongest during eating; plan care, physiotherapy and procedures for peak drug effect; rest periods between activities; soft diet, upright for meals, suction available; cholinergic side effects (abdominal cramps, diarrhoea, salivation, sweating, small pupils) may need propantheline or dose adjustment"],
            ["<strong>Drugs that worsen myasthenia — avoid or use with great caution</strong>", "<strong>Aminoglycosides</strong> (gentamicin), fluoroquinolones (ciprofloxacin), macrolides (azithromycin, erythromycin), telithromycin, <strong>beta-blockers</strong>, calcium channel blockers, <strong>magnesium</strong> (including IV magnesium sulphate and antacids), quinine and chloroquine (antimalarials — a real problem in Ghana; artemisinins are safer), procainamide, lithium, phenytoin, botulinum toxin, neuromuscular blockers and many anaesthetics, penicillamine, statins occasionally, <strong>checkpoint-inhibitor cancer drugs</strong>; high-dose steroids initially. Check every new prescription against a myasthenia list; the patient should carry a card"],
            ["<strong>Myasthenic crisis</strong>", "Severe weakness with respiratory or bulbar failure from <strong>too little drug</strong>, infection, surgery, pregnancy, stress, a new drug, or tapering steroids — <strong>pupils normal or large</strong>, dry skin, weak cough, tachycardia; FVC and single-breath count as in GBS; may need intubation; IVIG/plasma exchange; treat the trigger"],
            ["<strong>Cholinergic crisis</strong>", "Weakness from <strong>too much anticholinesterase</strong> — plus <strong>small pupils</strong>, salivation, sweating, lacrimation, abdominal cramps, diarrhoea, urinary frequency, bradycardia, fasciculations, bronchial secretions and bronchospasm. Treatment: <strong>stop pyridostigmine</strong>, atropine, airway and ventilatory support. If unsure which crisis: secure the airway, stop the anticholinesterase and let the doctor assess — both need respiratory support; the pupils and secretions are the clue"],
            ["Life", "Pregnancy possible with planning (transient neonatal myasthenia in 10–20% of babies — observe for 2 weeks); avoid heat, infections, exhaustion; emotional stress worsens weakness; report any swallowing or breathing difficulty immediately; eye patches for diplopia; identification bracelet"],
          ],
        },

        {
          type: "table",
          heading: "Bell's palsy — and telling it from stroke",
          columns: ["Element", "Content"],
          rows: [
            ["What it is", "Acute <strong>lower motor neurone</strong> palsy of the facial nerve (VII), probably from herpes simplex reactivation causing swelling in the facial canal; commonest in pregnancy, diabetes and after upper respiratory infection; onset over hours to 48 hours; often preceded by pain behind the ear"],
            ["Signs", "<strong>Whole half of the face</strong> weak — <strong>cannot wrinkle the forehead or raise the eyebrow</strong> on that side, cannot close the eye (Bell's phenomenon — eyeball rolls up when trying), drooping mouth, dribbling, food pooling in the cheek, loss of taste on the front of the tongue, sounds too loud (hyperacusis), dry eye or tearing. No limb weakness, no speech or language disturbance, no other cranial nerve signs"],
            ["<strong>Versus stroke</strong>", "A <strong>stroke (upper motor neurone) spares the forehead</strong> — the patient can still raise both eyebrows and close the eyes because the upper face has bilateral cortical supply; stroke usually has arm or leg weakness, speech disturbance or other signs and is sudden. <strong>Forehead involved = Bell's; forehead spared = stroke.</strong> Also consider: Ramsay Hunt (vesicles in the ear canal — zoster, worse prognosis, aciclovir plus steroid), otitis media and mastoiditis, parotid tumour, Lyme, Guillain-Barré (bilateral), HIV, trauma, leprosy"],
            ["Treatment", "<strong>Prednisolone 50–60 mg daily for 10 days (or 25 mg twice daily) started within 72 hours</strong> of onset — improves full recovery from about 70% to over 90%; aciclovir/valaciclovir added for severe palsy or Ramsay Hunt; no benefit from electrical stimulation; facial exercises in front of a mirror"],
            ["<strong>Eye protection</strong> — the nursing priority", "An eye that cannot close dries and ulcerates: lubricating drops hourly while awake and ointment at night, <strong>tape the lid closed at night</strong> (horizontal tape from the lid, never across the cornea; or a moisture chamber), sunglasses or glasses outdoors, protect from dust and fans, teach manual blinking, do not rub; report pain, redness or blurred vision at once (corneal ulcer); eyelid weight or tarsorrhaphy if prolonged"],
            ["Eating and teaching", "Soft food, chew on the unaffected side, check the cheek for pocketed food, mouth care, straws for drinking, speech is intact; reassure — most recover fully within 3 weeks to 3 months; incomplete recovery leaves synkinesis (eye closes when smiling) or contracture; not contagious and not a stroke — explain to the family"],
          ],
        },

        {
          type: "callout",
          tone: "warning",
          title: "Two awake patients who stop breathing",
          body: "GBS: count the breaths and measure the vital capacity — saturation falls last, and a patient who can no longer lift the head off the pillow or count past ten in one breath is about to fail. Myasthenia: a late pyridostigmine dose, a new antibiotic, magnesium or an infection can precipitate crisis; small pupils and pouring secretions mean cholinergic, not myasthenic. In both, call for intensive care before the emergency, not during it.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Core facts",
          body: "GBS: ascending symmetrical weakness, lost reflexes, 1–4 weeks after infection; FVC 4–6-hourly, below 20 mL/kg → ICU; IVIG 0.4 g/kg × 5 days or plasma exchange, no steroids; autonomic swings — pre-oxygenate before suction; notify AFP in children. Myasthenia: fatigable weakness, ptosis worse by evening; pyridostigmine on time, 30–60 min before meals; avoid aminoglycosides, quinolones, macrolides, beta-blockers, magnesium, quinine; myasthenic crisis = under-dosed/infection, large pupils; cholinergic crisis = overdose, small pupils, secretions → stop drug, atropine. Bell's: forehead involved (stroke spares it), prednisolone within 72 hours, protect the eye, tape at night, soft diet chewed on the good side.",
        },
      ],
      keyPoints: [
        "The pattern of weakness locates the lesion — one-sided with face or speech involvement points to the brain, a level with bladder involvement to the cord, glove-and-stocking loss with absent reflexes to peripheral nerves, fatigability to the neuromuscular junction and proximal weakness to muscle.",
        "Guillain-Barré syndrome is ascending symmetrical weakness with lost reflexes after an infection; monitor forced vital capacity 4–6-hourly, single-breath count, cough, swallow and autonomic swings, escalate before saturation falls, and treat with immunoglobulin or plasma exchange — not steroids.",
        "Myasthenia gravis is fatigable weakness treated with pyridostigmine given on time 30–60 minutes before meals; aminoglycosides, quinolones, beta-blockers, magnesium and quinine worsen it.",
        "Myasthenic crisis (under-treatment or infection, large pupils) and cholinergic crisis (over-treatment, small pupils and secretions) both need airway support; when unsure, secure the airway and stop the anticholinesterase.",
        "Bell's palsy involves the forehead while stroke spares it; prednisolone within 72 hours and protection of the eye that cannot close are the priorities, and most patients recover fully.",
      ],
      quiz: {
        keywords: ["guillain", "ascending", "climbed to", "risen to", "neuromuscular", "weakness", "myasthen", "pyridostigmine", "neostigmine", "ptosis", "eyelid", "double vision", "bell's palsy", "bells palsy", "facial nerve", "forehead", "cannot close", "facial droop", "wet voice", "thymus", "vital capacity"],
      },
    },
    {
      slug: "tetanus-acute-flaccid-paralysis-and-peripheral-neuropathy",
      title: "Tetanus, acute flaccid paralysis and peripheral neuropathy",
      minutes: 12,
      objectives: [
        "Recognise tetanus in adults and neonates and nurse it safely — spasm control, airway readiness, immunoglobulin, antibiotics and wound care.",
        "Explain tetanus prevention: the childhood and pregnancy vaccination schedules, clean delivery and cord care, and management of tetanus-prone wounds and animal bites.",
        "Carry out the surveillance duty for acute flaccid paralysis.",
        "Outline the causes of peripheral neuropathy and teach foot protection.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The toxin, the virus and the dying nerve",
          paragraphs: [
            "Three conditions of the peripheral nervous system matter disproportionately in Ghana. <strong>Tetanus</strong> — a toxin disease that still arrives from farms, road wounds, unsterile injections and, in the newborn, the umbilical stump — is entirely preventable by vaccination and clean cord care, yet kills half of those it reaches without intensive care. <strong>Acute flaccid paralysis</strong> in any child is a surveillance emergency, because the last steps of polio eradication depend on every case being reported and investigated. And <strong>peripheral neuropathy</strong>, most often from diabetes, quietly removes the sensation that protects the feet, until an unfelt wound becomes an amputation.",
          ],
        },
        {
          type: "table",
          heading: "Tetanus",
          columns: ["Element", "Content"],
          rows: [
            ["Cause", "<em>Clostridium tetani</em> spores in soil, dust and animal faeces enter a wound — puncture wounds, farm injuries, burns, chronic ulcers, unsterile injections and traditional scarification, ear piercing, circumcision, <strong>the umbilical stump (neonatal tetanus)</strong> cut with unsterile blades or dressed with cow dung, ash or herbs, septic abortion and unhygienic delivery (maternal tetanus); the toxin travels along nerves and blocks inhibitory neurotransmitters → unopposed muscle contraction. Incubation 3–21 days (shorter = worse). No immunity after infection — vaccinate survivors"],
            ["Recognition", "<strong>Trismus</strong> (lockjaw — cannot open the mouth) is usually first; <strong>risus sardonicus</strong> (fixed grin); neck and back stiffness; <strong>dysphagia</strong>; <strong>generalised spasms</strong> triggered by light, noise, touch or procedures — <strong>opisthotonus</strong> (arched back on head and heels), fists clenched, legs extended; <strong>laryngospasm and spasm of respiratory muscles</strong> cause asphyxia; the patient is <strong>fully conscious</strong> and in severe pain; autonomic storms (sweating, fever, tachycardia, swinging blood pressure, arrhythmias) in severe disease kill in the second week. Neonatal: a baby who fed and cried normally for 3–10 days then stops sucking, mouth clenched, stiff, spasms. Mortality without ICU 40–60%; neonatal 70–100% without ventilation"],
            ["<strong>Nursing care</strong>", "<strong>Quiet, darkened single room</strong>; minimal handling, procedures grouped and done after sedation; speak softly; no sudden noise; <strong>airway at the bedside</strong> (suction, oxygen, bag-valve-mask; early tracheostomy in severe cases — spasm around a tube is fatal); nursing on the side; <strong>spasm control</strong> — diazepam (large doses, IV/NG, 0.1–0.3 mg/kg 1–4-hourly titrated) or midazolam infusion, <strong>magnesium sulphate infusion</strong> (reduces spasms and autonomic instability — monitor reflexes and breathing), chlorpromazine, baclofen; paralysis and ventilation in ICU if spasms compromise breathing; <strong>nutrition</strong> by NG tube early (hugely increased calorie needs) with aspiration precautions; fluids; pressure care and passive movements once spasms controlled; bladder catheter (retention); bowel care; analgesia; monitor temperature, heart rate and BP (autonomic storms — magnesium, labetalol); prevent DVT; monitor for fractures of the spine from spasms; count spasms per hour and their triggers"],
            ["<strong>Specific treatment</strong>", "<strong>Human tetanus immunoglobulin (TIG) 3,000–6,000 units IM</strong> (or equine antitoxin after a test dose where TIG is unavailable; some give intrathecal) as soon as possible — neutralises toxin not yet bound; <strong>metronidazole 500 mg IV/oral 8-hourly for 7–10 days</strong> (preferred to penicillin, which may worsen spasms); <strong>wound care</strong> — clean, debride necrotic tissue, remove foreign bodies, leave open, after TIG is given; <strong>tetanus toxoid vaccine</strong> at a separate site (the illness does not immunise) and complete the course after recovery"],
            ["<strong>Prevention</strong>", "<strong>Childhood</strong>: pentavalent at 6, 10, 14 weeks, boosters per schedule. <strong>Pregnancy</strong>: tetanus-diphtheria (Td) — 2 doses at least 4 weeks apart in the first pregnancy (second at least 2 weeks before delivery), then 3 more at 6 months, 1 year and 1 year for lifelong protection (5 doses); <strong>clean delivery</strong> by a skilled attendant; <strong>cord care</strong> — cut with a sterile blade, tie with sterile thread, apply <strong>chlorhexidine 7.1% gel</strong> or keep dry and clean, <strong>nothing else</strong> (no dung, ash, herbs, powder, oil); Ghana was validated as having eliminated maternal and neonatal tetanus in 2011, which is maintained only by sustained coverage. <strong>Wounds</strong>: clean every wound with soap and water; <strong>tetanus-prone wounds</strong> (puncture, contaminated with soil/faeces/saliva, devitalised tissue, burns, bites, over 6 hours old, foreign body) in a patient whose vaccination is incomplete or unknown receive <strong>both TIG 250 units IM (500 if heavily contaminated or over 24 hours) and tetanus vaccine</strong> at separate sites; fully immunised adults need a booster if the last dose was over 5 years ago for tetanus-prone wounds (10 years for clean); every injection, piercing and circumcision with sterile equipment. <strong>Animal bites</strong> are both tetanus-prone and a rabies exposure — wash with soap and running water for 15 minutes, do not suture, give tetanus prophylaxis as above and start rabies post-exposure vaccination (plus rabies immunoglobulin into the wound for deep or multiple bites) the same day; do not wait to see whether the dog falls ill"],
          ],
        },

        {
          type: "diagram",
          src: "/diagrams/NG-MCB-2531.svg",
          alt: "Tetanus: trismus and risus sardonicus, opisthotonus spasms triggered by noise and light, airway and suction at hand, quiet dark room, diazepam and magnesium, tetanus immunoglobulin, metronidazole and wound care, and prevention by vaccination and clean cord care",
          caption: "Lockjaw first, then the arching spasms that a slammed door can set off: a dark quiet room, sedation, the airway at hand, immunoglobulin, metronidazole and the wound cleaned — and five Td doses that would have prevented it all.",
        },

        {
          type: "table",
          heading: "Acute flaccid paralysis surveillance and peripheral neuropathy",
          columns: ["Topic", "Content"],
          rows: [
            ["<strong>AFP surveillance</strong>", "Every child under 15 with acute onset of floppy weakness in any limb (GBS, transverse myelitis, traumatic neuritis after an injection, polio) is a <strong>notifiable AFP case under IDSR</strong>: report within 24 hours, collect <strong>two stool samples 24–48 hours apart within 14 days of onset</strong>, keep them cold (reverse cold chain) to the reference laboratory, 60-day follow-up for residual paralysis. Ghana has had no wild poliovirus since 2008 but circulating vaccine-derived poliovirus outbreaks (2019–2020) show why every case must be reported and every child must receive OPV and IPV. Poliomyelitis: asymmetric flaccid weakness with fever, no sensory loss, reflexes lost — no cure; supportive care and rehabilitation"],
            ["<strong>Peripheral neuropathy</strong> — causes", "<strong>Diabetes</strong> (commonest — glove-and-stocking numbness, burning pain, loss of protective sensation and foot ulcers), <strong>vitamin B12 deficiency</strong> (vegetarians, pernicious anaemia, metformin, nitrous oxide; with anaemia and cord damage — reversible if treated early), <strong>HIV</strong> and older antiretrovirals (stavudine, didanosine), <strong>isoniazid</strong> (always give pyridoxine 25–50 mg with TB treatment), <strong>alcohol</strong> and thiamine deficiency, <strong>leprosy</strong> (thickened nerves, anaesthetic skin patches, claw hand, foot drop — still present in Ghana; multi-drug therapy is free), chronic kidney disease, chemotherapy (vincristine), heavy metals, hypothyroidism, hereditary"],
            ["Nursing and teaching", "Examine feet at every visit — monofilament, vibration, pulses, skin; <strong>daily foot inspection</strong> by the patient or family (a mirror for the soles), wash and dry between toes, moisturise but not between toes, never walk barefoot (even at home or in the compound), check inside shoes, no hot water or hot sand for numb feet, cut nails straight, no corn plasters or razor blades, report any blister, crack, colour change or wound the same day; treat pain (amitriptyline, gabapentin, duloxetine; capsaicin); safety — numb feet and poor balance mean falls at night (lights, no loose mats); treat the cause (glucose, B12 injections, stop the drug, pyridoxine, alcohol); leprosy — refer to the district programme, protect anaesthetic hands and feet from burns, eye care for lagophthalmos"],
          ],
        },

        {
          type: "callout",
          tone: "warning",
          title: "What goes wrong",
          body: "A tetanus patient nursed in an open ward where every dropped tray triggers a spasm. A procedure done without sedation. No suction or bag-valve-mask at the bedside when the larynx closes. Cow dung, ash or herbs on a cord stump. A farmer with a soil-contaminated puncture wound sent home with a dressing and no immunoglobulin or vaccine. A child with floppy legs treated as 'malaria' and never reported. A diabetic who walks barefoot to the clinic and cannot feel the stone in his sandal.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Core facts",
          body: "Tetanus: trismus first, then risus sardonicus, opisthotonus and spasms triggered by noise, light and touch in a conscious patient; dark quiet room, diazepam/magnesium, airway at hand, TIG 3,000–6,000 units, metronidazole, wound debridement, vaccinate — infection does not immunise. Neonatal: stops sucking day 3–10, stiff, spasms. Prevention: Td 5 doses in pregnancy (2 in the first pregnancy), clean delivery, chlorhexidine or dry cord care and nothing else; tetanus-prone wound + unknown or incomplete immunisation = TIG 250 units + vaccine at separate sites. AFP: report within 24 hours, two stools 24–48 h apart within 14 days, 60-day follow-up. Neuropathy: diabetes, B12, HIV, isoniazid (give pyridoxine), alcohol, leprosy — daily foot inspection, never barefoot, no hot water on numb feet.",
        },
      ],
      keyPoints: [
        "Tetanus presents with trismus, risus sardonicus and opisthotonus in a conscious patient, and neonatal tetanus as a baby who stops sucking and stiffens at 3–10 days; it is nursed in a quiet dark room with sedation, magnesium and airway readiness.",
        "Specific treatment is tetanus immunoglobulin, metronidazole, wound debridement after the immunoglobulin, and vaccination — the illness does not confer immunity.",
        "Prevention is five Td doses across pregnancies, clean delivery and chlorhexidine or dry cord care with nothing else applied, routine childhood vaccination, and tetanus immunoglobulin plus vaccine for tetanus-prone wounds and animal bites in the under-immunised, with rabies post-exposure prophylaxis started the same day for bites.",
        "Every child under 15 with acute floppy weakness is a notifiable acute flaccid paralysis case — report within 24 hours, collect two stool samples 24–48 hours apart within 14 days and follow up at 60 days.",
        "Peripheral neuropathy from diabetes, B12 deficiency, HIV, isoniazid, alcohol and leprosy removes protective sensation; teach daily foot inspection, never walking barefoot, safe footwear and nail care, and same-day reporting of any wound.",
      ],
      quiz: {
        keywords: ["tetanus", "lockjaw", "trismus", "spasms", "cord care", "cord stump", "stray dog", "rabies", "rusty", "puncture wound", "neuropath", "numbness", "barefoot", "foot care", "diabetic foot", "monofilament", "flaccid paralysis", "polio", "leprosy", "isoniazid", "pyridoxine", "b12"],
      },
    },
    {
      slug: "parkinsons-disease-dementia-delirium-and-headache",
      title: "Parkinson's disease, dementia, delirium and headache",
      minutes: 18,
      objectives: [
        "Recognise Parkinson's disease, nurse its medication safely and avoid the drugs that worsen it.",
        "Distinguish dementia from delirium and depression, and provide safe, dignified care for a person with dementia.",
        "Identify delirium early, find and treat its causes, and manage it without restraint or sedation where possible.",
        "Classify common headaches, recognise the red flags that mean a dangerous cause, and advise on migraine and medication overuse.",
        "Outline multiple sclerosis and motor neurone disease.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The long diseases of the nervous system",
          paragraphs: [
            "Ghana's population is ageing and surviving the illnesses that once killed early. The outpatient clinic and the medical ward now hold the slow neurological disorders: the tremor and shuffle of Parkinson's disease, the memory that fails in dementia, the sudden confusion of delirium that is so often missed or misread as dementia or 'old age', and the headache that is usually benign but sometimes a bleed, a tumour or meningitis. Each has a nursing contribution that changes outcomes — a levodopa dose given on time, a delirium recognised on the first night, an older woman protected from being called a witch.",
          ],
        },
        {
          type: "table",
          heading: "Parkinson's disease",
          columns: ["Element", "Content"],
          rows: [
            ["What it is", "Progressive loss of <strong>dopamine</strong>-producing neurones in the substantia nigra; symptoms appear after 60–80% are lost; mostly over 60, some younger; cause unknown (genetics, pesticides)"],
            ["<strong>Cardinal features — TRAP</strong>", "<strong>T</strong>remor — resting, 'pill-rolling', 4–6 Hz, usually one hand first, lessens with movement and sleep, worse with stress; <strong>R</strong>igidity — stiffness through the whole movement ('lead pipe' or 'cogwheel' with tremor), pain, stooped posture; <strong>A</strong>kinesia/bradykinesia — slow, small movements: shuffling steps, reduced arm swing, mask-like face, small handwriting (micrographia), soft monotonous speech, difficulty starting and turning, 'freezing' in doorways, slow swallowing; <strong>P</strong>ostural instability — falls, festinating gait (small quickening steps), cannot correct a push"],
            ["Non-motor features", "Constipation (often years before), loss of smell, REM sleep behaviour disorder, depression and anxiety, drooling, orthostatic hypotension, urinary urgency, pain, fatigue, cognitive impairment and dementia later, hallucinations (disease and drugs), seborrhoeic skin, low voice"],
            ["Drugs", "<strong>Levodopa</strong> combined with carbidopa or benserazide (co-careldopa/co-beneldopa) — the most effective; <strong>dopamine agonists</strong> (pramipexole, ropinirole, rotigotine patch — impulse control disorders: gambling, hypersexuality, shopping; hallucinations; sudden sleep); MAO-B inhibitors (rasagiline, selegiline); COMT inhibitors (entacapone — orange urine); amantadine for dyskinesias; anticholinergics (trihexyphenidyl/benzhexol) for tremor in the young (confusion in the elderly); apomorphine injection/infusion and deep brain stimulation in advanced disease. After 5–10 years: <strong>wearing-off</strong> before the next dose, <strong>on-off</strong> fluctuations, and <strong>dyskinesias</strong> (writhing movements at peak dose)"],
            ["<strong>Nursing the medication</strong>", "<strong>Give levodopa on time, every time</strong> — the patient's own schedule, not the drug round (a 30-minute delay can leave a patient frozen, unable to swallow, and at risk of falls and aspiration; missed doses can precipitate a neuroleptic-malignant-like syndrome with fever and rigidity); self-administration where possible; <strong>never stop suddenly</strong>; if nil by mouth, give via NG (dispersible form) or use a rotigotine patch — discuss with the doctor <strong>before</strong> surgery; take with water 30–60 minutes before meals or with a small non-protein snack — <strong>protein competes with levodopa absorption</strong> (large protein meals blunt the dose; dietitian may shift protein to the evening); do not crush controlled-release forms; iron tablets taken 2 hours apart; monitor blood pressure lying and standing; watch for nausea (domperidone, not metoclopramide), confusion, hallucinations, impulsive behaviour; note on/off times on a chart"],
            ["<strong>Drugs that worsen parkinsonism — avoid</strong>", "<strong>Metoclopramide</strong> and <strong>prochlorperazine</strong> (antiemetics — <strong>use domperidone</strong>, which does not cross into the brain), <strong>haloperidol</strong>, <strong>chlorpromazine</strong> and other typical antipsychotics, risperidone and olanzapine (quetiapine or clozapine are tolerated if an antipsychotic is unavoidable), flunarizine and cinnarizine (vertigo drugs), methyldopa, sodium valproate, lithium, tetrabenazine. <strong>Drug-induced parkinsonism</strong> — bilateral symmetrical stiffness and slowness in a patient on these drugs (common in psychiatric patients on haloperidol and in those given metoclopramide for weeks) — reversible on stopping; acute dystonia (oculogyric crisis, twisted neck, jaw spasm) after metoclopramide or haloperidol in the young → <strong>procyclidine 5–10 mg IM/IV</strong> or benzatropine"],
            ["Daily care", "<strong>Falls prevention</strong> — clear floors, no mats, good light, bed and chair heights, walking aid assessed, do not hurry the patient, cues for freezing (step over a line, count, march); <strong>swallowing</strong> — speech therapy assessment, upright, chin tuck, soft moist diet, small mouthfuls, time (aspiration pneumonia is the usual cause of death), mouth care for drooling; <strong>constipation</strong> — fluids, fibre, movement, laxatives; <strong>communication</strong> — allow time, do not finish sentences, face does not show emotion (explain to family); <strong>exercise</strong> daily — stretching, big movements, walking, dance and music help gait; <strong>dressing</strong> — Velcro, elastic waists, sit to dress; sleep hygiene; depression screening; carer support; <strong>hospital admission is dangerous</strong> for people with Parkinson's — late doses, wrong antiemetics, immobility; include them in handover as time-critical medicines"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-GER-0591.svg",
          alt: "Parkinson's disease nursing: TRAP features of tremor, rigidity, akinesia and postural instability, levodopa given on time and apart from protein, metoclopramide and haloperidol avoided in favour of domperidone, falls and swallowing precautions",
          caption: "Tremor, rigidity, slowness and falls — managed by a tablet that must arrive on the minute, away from the protein on the plate, and never alongside metoclopramide or haloperidol.",
        },
        {
          type: "table",
          heading: "Dementia versus delirium versus depression",
          columns: ["Feature", "Dementia", "Delirium", "Depression ('pseudodementia')"],
          rows: [
            ["Onset", "Gradual, months to years", "<strong>Acute — hours to days</strong>; a date can often be given", "Weeks to months; may follow a loss"],
            ["Course", "Progressive, stable day to day", "<strong>Fluctuates</strong> through the day, worse at night", "Diurnal variation; worse in the morning"],
            ["Attention", "Usually intact until late", "<strong>Impaired</strong> — cannot focus, follow a conversation or count backwards; easily distracted", "Poor concentration but can attend"],
            ["Consciousness", "Alert", "Clouded, drowsy (hypoactive) or hyperalert (hyperactive); disturbed sleep-wake cycle", "Alert"],
            ["Thinking and perception", "Impoverished, word-finding difficulty; hallucinations later in some types", "Disorganised, rambling; <strong>visual hallucinations and misinterpretations</strong>, fear, paranoid ideas", "Negative, hopeless, guilt; 'I don't know' answers; may highlight their memory loss"],
            ["Memory", "Recent memory lost first; confabulation; unaware", "Recent memory poor from inattention", "Patchy; complains of memory loss"],
            ["Reversible?", "Rarely (treat B12, thyroid, hydrocephalus, depression, drugs, HIV, syphilis)", "<strong>Usually, if the cause is found and treated</strong> — but increases death, falls and later dementia", "<strong>Yes</strong> — antidepressants, support"],
            ["Nursing message", "Long-term support and safety", "<strong>Medical emergency</strong> — find the cause tonight", "Screen and refer"],
          ],
        },
        {
          type: "table",
          heading: "Dementia — types and care",
          columns: ["Element", "Content"],
          rows: [
            ["Types", "<strong>Alzheimer's</strong> (60%) — memory first, gradual; <strong>vascular</strong> (common in Ghana with its hypertension — stepwise after small strokes, focal signs, mood change; prevention is blood pressure control); <strong>Lewy body</strong> — fluctuating, visual hallucinations, parkinsonism, falls, <strong>severe reactions to antipsychotics</strong>; <strong>frontotemporal</strong> — younger, personality and language change before memory; <strong>HIV-associated</strong>, alcohol-related, Parkinson's dementia, post-traumatic. Screening: mini-mental state examination (adapt for literacy), clock drawing, informant history; exclude delirium, depression, hearing and vision loss, drugs (anticholinergics, benzodiazepines), B12, thyroid, syphilis, HIV, hydrocephalus, subdural"],
            ["Drugs", "Cholinesterase inhibitors (donepezil, rivastigmine, galantamine — nausea, bradycardia, syncope; check pulse) for mild–moderate Alzheimer's and Lewy body; memantine for moderate–severe; treat vascular risk; <strong>avoid antipsychotics</strong> (stroke and death risk — only for severe distress or danger, lowest dose, shortest time, reviewed; never in Lewy body unless specialist); avoid benzodiazepines and anticholinergics; treat depression and pain (pain presents as agitation)"],
            ["<strong>Communication</strong>", "Approach from the front, at eye level, say your name and purpose each time; one short sentence, one instruction at a time; calm low voice, warm face, touch if accepted; yes/no questions; do not argue or correct false beliefs about the dead or the past — respond to the feeling ('you miss her'); do not test ('do you remember me?'); give time; use the preferred name and language (first languages return as others are lost); pictures, gestures, demonstration; music and familiar objects; validate rather than reorientate when reorientation distresses"],
            ["<strong>Safety and routine</strong>", "Consistent routine and staff; clear signage and pictures on doors (toilet); good lighting, no shadows or mirrors that frighten; remove hazards (cooking fire, matches, medicines, sharp tools, car keys, the road, open wells); <strong>wandering</strong> — identification bracelet or sewn-in name and phone number, photograph on file, secure but not locked-in environment, exercise and purposeful activity, check footwear, inform neighbours; <strong>sundowning</strong> (increasing confusion and agitation in the late afternoon and evening) — daylight exposure, activity in the morning, quiet lit evenings, limit naps, check for pain, hunger, toileting; falls prevention; swallowing and nutrition (finger foods, favourite foods, help with cutlery, weight checks); continence — scheduled toileting, easy clothing, dignity; skin"],
            ["Behavioural and psychological symptoms", "Agitation, aggression, shouting, repetition, hoarding, sexual disinhibition, hallucinations — <strong>always ask why</strong>: pain, constipation, urinary infection, hunger, thirst, too hot or cold, noise, fear, boredom, needing the toilet, a new carer, a change of room, delirium. Non-drug approaches first: ABC chart (antecedent, behaviour, consequence), distraction, music, walking with the person, familiar carer; <strong>never restrain</strong> physically (injury, pressure sores, death; increased agitation) or sedate for staff convenience"],
            ["<strong>Dementia in Ghanaian society</strong>", "Forgetfulness, wandering, talking to the dead, and personality change are widely interpreted as spiritual; <strong>older women in particular are accused of witchcraft</strong>, beaten, banished to 'witch camps' in the northern regions, or neglected. Dementia is a brain disease; the nurse explains this to families, chiefs and religious leaders, documents and reports abuse, links the family to social welfare and support (Alzheimer's Ghana, community health nurses), and plans respite — caring falls almost entirely on daughters and daughters-in-law with no services. Elder abuse signs: unexplained bruises, fear of a carer, malnutrition, dirty clothing, pressure sores, missing money or medicines"],
            ["Carers and the future", "Teach and support the carer (depression and exhaustion are universal); legal and financial planning while capacity remains; advance care planning; feeding tubes do not prolong life or prevent aspiration in advanced dementia — comfort feeding; palliative care at the end"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-BEH-3002.svg",
          alt: "Caring for a person with dementia: approach from the front at eye level, one instruction at a time, routine and signage, wandering and sundowning precautions, looking for pain or infection behind agitation, and avoiding restraint and antipsychotics",
          caption: "Approach from the front, one sentence at a time, respond to the feeling rather than the fact — and when behaviour changes, look for pain, infection or fear before anyone reaches for a sedative.",
        },
        {
          type: "table",
          heading: "Delirium — the emergency behind the confusion",
          columns: ["Element", "Content"],
          rows: [
            ["Definition and burden", "Acute fluctuating disturbance of attention and awareness with a change in cognition, caused by a medical condition, substance or withdrawal; affects 20–30% of older medical inpatients and up to 80% in ICU; <strong>doubles mortality</strong>, lengthens stay, causes falls and pressure sores, and accelerates dementia. Risk: age over 65, existing dementia, sensory impairment, severe illness, hip fracture, surgery, dehydration, polypharmacy"],
            ["<strong>Subtypes</strong>", "<strong>Hyperactive</strong> (25%) — restless, agitated, pulling lines, shouting, hallucinating — noticed; <strong>hypoactive</strong> (50%) — quiet, withdrawn, drowsy, 'pleasantly confused', eats little, stares — <strong>missed in most cases</strong> and has the worse prognosis; <strong>mixed</strong>. <strong>Any older patient who is 'not themselves', 'more confused than usual' or 'sleepy today' is delirious until proved otherwise</strong> — ask the family what the person is normally like"],
            ["Screening", "<strong>4AT</strong> (alertness, abbreviated mental test-4: age, date of birth, place, current year; attention: months of the year backwards; acute change or fluctuating course) or the Confusion Assessment Method (acute onset and fluctuating course + inattention + disorganised thinking or altered consciousness) on admission and daily, and whenever behaviour changes"],
            ["<strong>Causes — PINCH ME</strong>", "<strong>P</strong>ain (hip fracture, retention, ischaemia — under-treated in the elderly), <strong>I</strong>nfection (urinary, chest, skin, malaria, sepsis), <strong>N</strong>utrition (hypoglycaemia, thiamine, dehydration), <strong>C</strong>onstipation (impaction) and urinary retention, <strong>H</strong>ydration and <strong>H</strong>ypoxia (pneumonia, heart failure, PE), <strong>M</strong>edications (new or withdrawn: opioids, benzodiazepines, anticholinergics — amitriptyline, hyoscine, chlorpheniramine, oxybutynin — steroids, digoxin, tramadol, antihistamines, antiparkinsonian drugs; alcohol and benzodiazepine withdrawal), <strong>E</strong>nvironment and <strong>E</strong>lectrolytes (sodium, calcium, glucose, renal and liver failure, thyroid; sleep deprivation, ICU, unfamiliar room, no glasses or hearing aid, restraints, catheters). Also stroke, subdural, seizures, meningitis, heart attack"],
            ["<strong>Management</strong>", "<strong>Find and treat the cause</strong> — full examination including bladder scan and rectal examination, vital signs, glucose, oxygen saturation, bloods, urine, chest X-ray, medication review (stop or reduce the culprits), ECG. <strong>Non-drug care first and always</strong>: reorientate gently (clock, calendar, window, tell them where they are and why, repeatedly), glasses and hearing aids on, familiar faces — family at the bedside day and night, same staff, normal day–night cycle (lights and activity by day, dark and quiet at night, no 4 am observations if avoidable), hydration and nutrition (help to eat and drink), early mobilisation and avoid catheters, drips and restraints that tether, treat pain (paracetamol regularly), ensure sleep without sedatives, bowels and bladder, calm single room if possible, safe environment (low bed, falls precautions, one-to-one sitter rather than restraint)"],
            ["Drugs — last resort", "Only when the patient is a danger to themselves or others or severely distressed and non-drug measures have failed: <strong>haloperidol 0.5 mg</strong> oral/IM (max 2–5 mg/day in the elderly; not in Parkinson's or Lewy body — use lorazepam 0.5 mg or quetiapine), review within hours, stop within days; benzodiazepines only for alcohol/benzodiazepine withdrawal or seizures (they worsen other delirium); <strong>physical restraint</strong> is a last resort with medical order, documented review every 30 minutes–2 hours, circulation and skin checks, release for care — it increases injury and delirium"],
            ["After", "Delirium can last weeks; explain to family and patient (many remember frightening hallucinations); follow up cognition — unresolved confusion at 3 months suggests underlying dementia; document the episode (future risk)"],
          ],
        },
        {
          type: "table",
          heading: "Headache",
          columns: ["Type", "Features", "Management and teaching"],
          rows: [
            ["<strong>Tension-type</strong> (commonest)", "Bilateral, pressing or tight 'band', mild–moderate, not worsened by activity, no vomiting, may last hours to days; stress, posture, eye strain, poor sleep, hunger, dehydration, caffeine withdrawal", "Simple analgesia (paracetamol, ibuprofen) on no more than 2 days a week, relaxation, posture, sleep, hydration, regular meals, exercise; amitriptyline for chronic tension-type; address stress and depression"],
            ["<strong>Migraine</strong>", "Recurrent, <strong>unilateral</strong> (may switch sides) <strong>throbbing</strong>, moderate–severe, 4–72 hours, worse with activity, <strong>nausea/vomiting</strong>, <strong>photophobia and phonophobia</strong>, wants to lie in a dark room; <strong>aura</strong> in a third — flashing zigzags, blind spots, tingling spreading up an arm, speech difficulty for 5–60 minutes before the headache (a hemiplegic aura can mimic stroke); triggers — menstruation, missed meals, poor or excessive sleep, stress and the let-down after it, alcohol, cheese, chocolate, caffeine withdrawal, bright light, heat, the combined pill; three times commoner in women", "Acute: treat early — aspirin 900 mg or ibuprofen 400–600 mg or paracetamol 1 g plus an antiemetic (metoclopramide/domperidone — also improves absorption), triptan (sumatriptan 50–100 mg — not with ischaemic heart disease or uncontrolled hypertension); dark quiet room, cold pack, sleep. <strong>Avoid opioids</strong>. Prevention if 4 or more attacks a month: propranolol, amitriptyline, topiramate, candesartan; headache diary, trigger management, regular meals and sleep. <strong>Migraine with aura + combined oral contraceptive = unacceptable stroke risk</strong> — use progestogen-only or non-hormonal methods; smoking adds to the risk"],
            ["Cluster", "Men more; excruciating, strictly unilateral around one eye, 15–180 minutes, 1–8 times a day in clusters of weeks, same time each day often at night; red watering eye, blocked or running nostril, drooping lid, <strong>restless and pacing</strong> (unlike migraine)", "High-flow oxygen 12–15 L/min by non-rebreathe mask for 15 minutes; subcutaneous or nasal sumatriptan; verapamil for prevention; avoid alcohol in a cluster; urgent neurology referral"],
            ["<strong>Medication-overuse headache</strong>", "Daily or near-daily dull headache in someone taking painkillers on <strong>15 or more days a month</strong> (paracetamol, NSAIDs, aspirin) or <strong>10 or more days</strong> (codeine, tramadol, triptans, combinations) for 3 months; worse on waking; very common in Ghana with over-the-counter and roadside analgesic sales", "Explain and withdraw the painkillers abruptly (headache worsens for 1–2 weeks then improves); preventive drug; limit acute treatment to 2 days a week thereafter"],
            ["Other common causes", "Hypertension (only when severe or with encephalopathy — most hypertension does not cause headache), sinusitis, eye strain and refractive error, dental and jaw problems, cervical spondylosis, caffeine withdrawal, fever and malaria, dehydration, carbon monoxide (generator in a closed room — whole household), post-traumatic, post-lumbar puncture (worse upright), trigeminal neuralgia (electric-shock facial pain), temporal arteritis (over 50, scalp tenderness, jaw claudication, raised ESR — steroids now to save sight)", "Treat the cause; check blood pressure, temperature, malaria test, vision, teeth"],
          ],
        },
        {
          type: "table",
          heading: "Headache red flags — SNOOP",
          columns: ["Flag", "Concern"],
          rows: [
            ["<strong>S</strong>ystemic signs or disease", "Fever, neck stiffness, rash (meningitis); weight loss; HIV, cancer, immunosuppression (opportunistic infection, metastasis); pregnancy or post-partum (pre-eclampsia, venous sinus thrombosis)"],
            ["<strong>N</strong>eurological symptoms or signs", "Confusion, drowsiness, seizures, weakness, speech or visual disturbance, papilloedema, unequal pupils, ataxia — tumour, bleed, abscess, raised ICP"],
            ["<strong>O</strong>nset sudden", "<strong>Thunderclap</strong> — maximum within a minute: subarachnoid haemorrhage until proved otherwise — CT now"],
            ["<strong>O</strong>lder age — new headache over 50", "Temporal arteritis (sight-threatening), tumour, subdural, glaucoma (red painful eye, halos, vomiting)"],
            ["<strong>P</strong>attern change, <strong>P</strong>ositional, <strong>P</strong>recipitated", "'Worst ever' or different from usual; progressively worsening over weeks; worse lying down, on waking, with coughing, straining, bending or exertion, or waking the patient from sleep (raised ICP); after head injury; new headache in a child, especially with vomiting or morning headaches; headache that does not respond to usual treatment"],
          ],
        },
        {
          type: "table",
          heading: "Multiple sclerosis and motor neurone disease (overview)",
          columns: ["Feature", "Multiple sclerosis", "Motor neurone disease (ALS)"],
          rows: [
            ["What", "Autoimmune demyelination in the brain, optic nerves and cord — relapsing and remitting plaques 'disseminated in time and space'; young adults, women more; rare in West Africa but seen", "Progressive degeneration of upper and lower motor neurones; mid–late adulthood; relentless; survival 2–5 years"],
            ["Presentation", "Optic neuritis (painful blurred vision in one eye), numbness or weakness of a limb, double vision, vertigo, bladder urgency, fatigue, heat makes it worse (Uhthoff), electric shock down the spine on neck flexion (Lhermitte); relapses over days, recovery over weeks", "Progressive weakness and wasting with fasciculations (twitching), foot drop, weak grip, brisk reflexes, bulbar — slurred speech, choking, drooling; <strong>sensation, bladder, eye movements and intellect mostly spared</strong>; emotional lability"],
            ["Treatment", "High-dose steroids for relapses; disease-modifying drugs (interferons, oral agents, monoclonals); symptom control — baclofen for spasticity, bladder training/intermittent catheterisation, fatigue management, physiotherapy; avoid overheating and infections", "Riluzole (modest), non-invasive ventilation at night (improves survival and quality), gastrostomy early for nutrition, saliva control, communication aids, palliative care from diagnosis, advance decisions about ventilation; multidisciplinary team"],
            ["Nursing emphasis", "Energy conservation, relapses and steroids, bladder and bowel, mobility, pressure care, psychological support, pregnancy planning (relapses fall in pregnancy, rise afterwards)", "Swallow and breathing surveillance, nutrition, positioning, pressure care, communication, carer support, honesty and dignity at the end of life"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Three errors that harm",
          body: "Writing 'confused — known dementia' on a patient whose confusion began yesterday: that is delirium with a cause to find. Giving metoclopramide or haloperidol to a person with Parkinson's or Lewy body dementia, or giving levodopa an hour late. Treating a sudden worst-ever headache with analgesia and reassurance.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Quick recall",
          body: "Parkinson's: TRAP; levodopa on time, apart from protein, never stopped; antiemetic = domperidone; avoid metoclopramide/haloperidol; dystonia → procyclidine. Dementia: gradual, progressive, attention intact; approach from the front, one instruction, no arguing, no restraint, antipsychotics avoided; vascular dementia is common in Ghana; protect older women from witchcraft accusations. Delirium: acute, fluctuating, inattentive; hypoactive is missed; 4AT; PINCH ME; treat the cause, reorientate, family, glasses and hearing aids, sleep; haloperidol 0.5 mg last resort (not in Parkinson's). Headache: tension bilateral band; migraine unilateral throbbing with nausea and photophobia — treat early, no opioids, no combined pill with aura; cluster — oxygen; medication overuse ≥15 days/month; SNOOP red flags; thunderclap = CT now.",
        },
      ],
      keyPoints: [
        "Parkinson's disease is dopamine loss producing tremor, rigidity, akinesia and postural instability; levodopa must be given on the patient's own schedule, apart from protein and never stopped suddenly, with domperidone rather than metoclopramide for nausea and haloperidol and other dopamine blockers avoided.",
        "Dementia is gradual and progressive with attention intact; care rests on calm front-on communication, one instruction at a time, routine, safety against wandering and sundowning, looking for pain or infection behind changed behaviour, avoiding restraint and antipsychotics, and protecting older people — especially women — from witchcraft accusations and abuse.",
        "Delirium is acute, fluctuating inattention with a medical cause; the hypoactive form is usually missed; screen with the 4AT, hunt the cause with PINCH ME, and treat with reorientation, family presence, sensory aids, sleep, hydration, mobility and pain relief, using haloperidol 0.5 mg only as a last resort.",
        "Tension headache is a bilateral band, migraine a unilateral throbbing pain with nausea and photophobia treated early without opioids (and never the combined pill with aura), cluster headache responds to high-flow oxygen, and painkillers on 15 or more days a month cause medication-overuse headache.",
        "SNOOP red flags — systemic signs, neurological deficit, sudden thunderclap onset, new headache over 50, and change of pattern or positional headache — mean urgent assessment; multiple sclerosis relapses and remits in young adults, while motor neurone disease progressively destroys movement, speech and swallowing with intellect spared.",
      ],
      quiz: {
        keywords: ["parkinson", "levodopa", "shuffling", "dementia", "alzheimer", "delirium", "acute confusion", "wander", "sundown", "restraint", "haloperidol", "antipsychotic", "metoclopramide", "headache", "migraine", "photophobia", "multiple sclerosis", "motor neurone", "witchcraft", "facial pain"],
      },
    },
    {
      slug: "headache",
      title: "Headache",
      minutes: 15,
      objectives: [
        "Take a headache history that separates primary syndromes from secondary warnings.",
        "Diagnose migraine, tension-type and cluster headache and start the right treatment.",
        "Act on thunderclap headache, meningitis, temporal arteritis, pre-eclampsia and medication overuse.",
        "Apply SNOOP red flags and arrange same-day investigation where needed.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Common, usually benign, occasionally the only warning",
          paragraphs: [
            "Headache fills more clinic hours than almost any other symptom, and nearly all of it is primary — migraine and tension-type disease with a normal brain underneath. The history is the scan: <strong>onset</strong> (thunderclap in seconds is never primary), <strong>pattern</strong> (episodic with freedom between, or new and daily), <strong>associated features</strong> (aura, nausea, tearing eye, fever, neck stiffness, visual loss, pregnancy, blood pressure, drugs), and <strong>change</strong> (a new headache over 50, or the worst headache of a life, is secondary until proven otherwise).",
            "Run the SNOOP red flags from the earlier lesson on every new or changed headache — systemic signs, neurological signs, onset sudden, older age, pattern change — and use this lesson for what each answer means and what the primary syndromes look like when the screen is negative.",
          ],
        },
        {
          type: "table",
          heading: "Migraine, tension and cluster",
          columns: ["Syndrome", "Picture", "Treatment"],
          rows: [
            ["<strong>Migraine</strong>", "Hours to 3 days; unilateral throbbing; nausea with photo- and phonophobia; visual aura in a quarter; triggers — missed meals, sleep loss, menses, alcohol", "Treat early: NSAID plus triptan plus antiemetic together; rest in the dark; prophylaxis (propranolol, amitriptyline, topiramate) when attacks are frequent or disabling"],
            ["<strong>Tension-type</strong>", "Band-like bilateral pressure; stress and bad sleep; no nausea, no aura, function continues", "Reassurance that the brain is normal, NSAID for episodes, sleep, posture and physiotherapy — investigate only when the pattern changes"],
            ["<strong>Cluster</strong>", "Young men; 15 minutes to 3 hours of orbital agony, often nightly, with tearing and a red eye on the same side", "High-flow oxygen and subcutaneous sumatriptan abort the attack; verapamil prevents the cluster — never leave cluster on plain paracetamol"],
          ],
        },
        {
          type: "list",
          heading: "Secondary headaches — the drills",
          items: [
            "<strong>Thunderclap — subarachnoid haemorrhage:</strong> worst headache of life peaking in seconds, vomiting, neck stiffness, collapse. CT head immediately; if negative, lumbar puncture for xanthochromia — then nimodipine, neurosurgery, and no delay.",
            "<strong>Fever plus headache — meningitis:</strong> neck stiffness, rash, confusion or seizures. Blood cultures, antibiotics within the hour — before the lumbar puncture if that would delay them — then the full meningitis pathway.",
            "<strong>Over 50 with scalp tenderness — temporal arteritis:</strong> new headache, pain on chewing (jaw claudication), transient visual loss. ESR and CRP now and <strong>steroids the same day, before the biopsy</strong> — every day of delay risks permanent blindness.",
            "<strong>Pregnant with headache — pre-eclampsia:</strong> visual disturbance, upper abdominal pain, raised blood pressure. Magnesium sulphate pathway and delivery planning — headache in pregnancy is never just headache.",
            "<strong>Daily analgesics — medication overuse:</strong> headache on 15 or more days a month with regular paracetamol, NSAID or triptan use. Explain the trap, withdraw the overused drug with a bridge plan, and limit future use to set days per month.",
            "<strong>Sinus and eye causes:</strong> purulent discharge with pain worse on bending (treat the sinus; periorbital swelling in a child is an emergency), and acute angle-closure glaucoma — red painful eye with haloes and vomiting — which needs pressure-lowering treatment within hours.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "The two same-day headaches",
          body: "Worst headache of life — CT today. New headache over 50 with scalp tenderness or jaw pain on chewing — steroids today, before the biopsy, before blindness. These two drills save brain and sight.",
        },
      ],
      keyPoints: [
        "Onset, pattern, associations and change separate primary headache from secondary — thunderclap and new-over-50 are secondary until proven otherwise.",
        "Migraine throbs unilaterally with nausea and aura; tension bands bilaterally; cluster burns behind one eye nightly in young men.",
        "Thunderclap means CT then lumbar puncture; meningitis means antibiotics within the hour; temporal arteritis means steroids the same day.",
        "Headache in pregnancy runs the pre-eclampsia pathway; daily analgesics cause the headache they treat.",
        "SNOOP every new headache; investigate change, not just pain.",
      ],
      quiz: {
        keywords: ["headache", "migraine", "aura", "tension headache", "cluster headache", "trigeminal", "thunderclap", "subarachnoid", "meningitis", "temporal arteritis", "giant cell arteritis", "pre-eclampsia", "sinusitis", "medication overuse", "triptan", "snoop"],
      },
    }
  ],
};
