import type { AuthoredQuestion } from "./authored-bank";

export const PROC_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-PROC-001",
    categorySlug: "safety-infection-control",
    stem: "A newborn boy has hypospadias and is being prepared for repair. Why must he not be circumcised before the operation?",
    choices: [
      {
        id: "a",
        text: "Because the foreskin is needed to rebuild the urethra during the repair",
      },
      {
        id: "b",
        text: "Because circumcision in a newborn always causes the urethra to close over",
      },
      {
        id: "c",
        text: "Because the operation cannot be done until he has reached school age",
      },
      {
        id: "d",
        text: "Because the repair needs the boy to be able to urinate standing up first",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — \"Because the foreskin is needed to rebuild the urethra during the repair\". In hypospadias the urethral opening lies on the underside of the penis, somewhere between the glans and the scrotum, and the curve of the shaft plus the short urethra must be corrected. The inner layer of the foreskin is the ideal tissue for reconstructing the urethra, so removing it beforehand takes away the surgeon's best material and makes a later repair much harder. Repair is usually done between about six and eighteen months, and afterwards the urinary catheter is kept draining freely — often into a double nappy — while the dressing and the stream are watched.\n\nWhy the other options fail:\n• B — Circumcision does not close the urethra; the reason is the lost tissue.\n• C — Repair is done in infancy, not at school age.\n• D — A baby does not need to stand to pass urine; a catheter is used after surgery.\n\nReference: EAU — hypospadias; Ghana STG — paediatric surgery\n",
    strategy: "Never circumcise a hypospadias before repair. The foreskin is the graft the surgeon is going to need.",
    difficulty: "easy",
    tags: ["procedures", "ppe", "doffing-sequence", "infection-control", "safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-002",
    categorySlug: "leadership-delegation",
    stem: "A 52-year-old alert, oriented adult client admitted with acute chest pain and troponin elevation announces he is leaving the hospital immediately against medical advice (DAMA) to attend an urgent business meeting. How should the nurse proceed to uphold client autonomy while fulfilling professional legal and clinical duties?",
    choices: [
      {
        id: "a",
        text: "Document in the notes that the client left against advice and ask the ward clerk to prepare the discharge summary, because a competent adult cannot be detained",
      },
      {
        id: "b",
        text: "Ask the client to sign the DAMA form before any further discussion and supply the prescribed medications, so the treatment plan continues at home",
      },
      {
        id: "c",
        text: "Confirm decision-making capacity, have the physician explain the specific risks, explore reasons for leaving, obtain the DAMA signature, and provide discharge medications and a welcome to return",
      },
      {
        id: "d",
        text: "Explain the risks once and let the client leave without further documentation, since a refusal signed under pressure cannot be relied on in law",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "A mentally competent adult has the legal right to refuse medical care and leave a healthcare facility against medical advice (DAMA). Restraining the client or withholding belongings constitutes false imprisonment and battery. The nurse's professional responsibility includes: (1) confirming the client has decisional capacity (understands situation and consequences); (2) facilitating an urgent discussion where the physician explains specific risks (e.g., sudden cardiac death); (3) exploring underlying barriers (childcare, finances, business) to find alternatives; (4) offering the DAMA release form for signature (or documenting refusal to sign); and (5) providing discharge medications, essential advice, and explicitly welcoming the client back if symptoms recur. Why the other options fail: option a gets the legal principle right and the nursing obligation wrong. A competent adult cannot be detained, but documenting the exit without assessing capacity or arranging the risk discussion leaves out the part that protects the client and the nurse. Option b reverses the order: taking a signature before the risks have been explained produces a form that records nothing of value. Option d abandons documentation altogether, and the reasoning it offers is the opposite of the law, which is that a contemporaneous record of risks explained is exactly what makes a refusal defensible.",
    strategy: "DAMA protocol: Confirm capacity -> Explain specific life-threatening risks -> Explore compromises -> Request DAMA signature -> Provide discharge meds & welcome back.",
    difficulty: "medium",
    tags: ["procedures", "dama", "ethics", "autonomy", "legal-nursing"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-003",
    categorySlug: "fundamentals",
    stem: "A nurse measuring a 68-year-old client's blood pressure hears Korotkoff sounds beginning at 168 mmHg, becoming completely inaudible at 150 mmHg, returning at 128 mmHg, and finally disappearing at 84 mmHg. What does this pattern represent, and how should the nurse record the reading?",
    choices: [
      {
        id: "a",
        text: "An auscultatory gap — record 168/84 and, at later readings, inflate beyond the point where the radial pulse disappears so the true systolic is not missed",
      },
      {
        id: "b",
        text: "An auscultatory gap; record 128/84, because the higher sounds are arterial wall artefact rather than true systolic pressure",
      },
      {
        id: "c",
        text: "A normal Korotkoff sequence; record 150/84, treating the point at which sounds disappear as the systolic pressure",
      },
      {
        id: "d",
        text: "A widened phase IV; record 168/128 and repeat the measurement on the opposite arm to confirm the finding before documenting it",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "An auscultatory gap is a silent interval between the first Korotkoff sound and the return of phase II sounds, seen most often in older hypertensive clients and in aortic stenosis. It matters because if the cuff is inflated only to the expected systolic, the first sounds fall inside the gap and the true systolic is missed, so the reading is falsely low. The safeguard is to palpate the radial artery while inflating 20 to 30 mmHg beyond the point where the pulse disappears, then deflate at 2 to 3 mmHg per second. The first sound heard is the systolic (168) and the final disappearance is the diastolic (84). Why the other options fail: recording 128/84 (option b) mistakes the return of phase II for the systolic and underestimates the pressure by 40 mmHg. Option c calls a 22 mmHg silent interval between phases I and II a normal sequence, and takes a disappearance point as systolic, which no Korotkoff phase ever is. Option d names a phase IV change rather than a gap and pairs the true systolic with the phase II return as though that were the diastolic.",
    strategy: "A silent interval between phases I and II is an auscultatory gap. Record the first sound heard as systolic and the last sound heard as diastolic, and inflate well above the palpated systolic so the gap cannot hide it.",
    difficulty: "easy",
    tags: ["procedures", "vital-signs", "blood-pressure", "auscultatory-gap", "korotkoff"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-004",
    categorySlug: "safety-infection-control",
    stem: "A nurse prepares to collect two sets of diagnostic blood cultures for a client with suspected sepsis and endocarditis. Which aseptic technique ensures specimen integrity and prevents skin commensal contamination?",
    choices: [
      {
        id: "a",
        text: "Disinfect with an alcohol swab and draw both sets immediately from the same venepuncture site, sparing the client a second needle puncture and a second episode of pain",
      },
      {
        id: "b",
        text: "Palpate the site again after the chlorhexidine has dried, then take 5 mL per bottle through an existing peripheral cannula that has been in place for four days",
      },
      {
        id: "c",
        text: "Give the first antibiotic dose and then draw 4 mL per bottle from the arm not receiving the infusion, so that the sample is not diluted by the running fluid",
      },
      {
        id: "d",
        text: "Disinfect the venepuncture site with 2% chlorhexidine in 70% alcohol for 30 seconds and let it dry; draw 8 to 10 mL per bottle from two separate sites before antibiotics",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Diagnostic blood cultures require meticulous aseptic technique to prevent false-positive contamination with skin flora (e.g., coagulase-negative staphylococci). Best practices dictate: (1) draw blood cultures BEFORE administering antibiotics; (2) cleanse the culture bottle rubber stoppers with alcohol; (3) disinfect the skin using 2% chlorhexidine in 70% isopropyl alcohol for 30 seconds and allow to air-dry completely (antimicrobial action occurs upon drying); (4) collect adequate blood volume (8–10 mL per bottle in adults; underfilling leads to false-negative results); and (5) obtain two distinct sets from separate venepuncture sites (not from existing indwelling peripheral IV lines). Why the other options fail: option a gets the antiseptic nearly right and then draws both sets through one puncture, so a single skin-flora contamination event makes both bottles positive and impossible to interpret. Option b repalpates a disinfected site, which reintroduces skin commensals, and takes too small a volume from an indwelling line. Option c draws the cultures after antibiotics have started, which is the commonest avoidable cause of a false-negative culture in sepsis.",
    strategy: "Blood culture standards: Before antibiotics + clean site with chlorhexidine & air dry + 8-10 mL per bottle + 2 separate venepuncture sites.",
    difficulty: "medium",
    tags: ["procedures", "blood-cultures", "sepsis-workup", "asepsis", "specimen-collection"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-005",
    categorySlug: "fundamentals",
    stem: "A nurse assists a physician performing a diagnostic lumbar puncture on an adult client with suspected meningitis. What position must the nurse maintain for the client during the needle insertion, and what post-procedure positioning prevents post-dural puncture headache?",
    choices: [
      {
        id: "a",
        text: "Lateral recumbent 'fetal' position with knees flexed to the abdomen and chin tucked to the chest; keep the client flat and supine for 4 to 6 hours afterwards",
      },
      {
        id: "b",
        text: "Seat the client upright on the edge of the bed with the chin extended and the lumbar spine held in extension, then keep them sitting upright for 4 hours",
      },
      {
        id: "c",
        text: "Place the client prone with a pillow under the abdomen to open the interspinous spaces, then keep them prone for six hours to compress the puncture site and seal the leak",
      },
      {
        id: "d",
        text: "Position the client supine with the head of the bed at 45 degrees and the knees straight, then keep the head elevated for eight hours to reduce intracranial pressure",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "For a lumbar puncture (spinal tap), the client is positioned in a lateral decubitus (side-lying) 'fetal' posture with knees drawn up to the chest and chin tucked to the chest (or seated leaning forward over an overbed table). This maximizes flexion of the lumbar spine, widening the interspinous spaces between L3–L4 or L4–L5 to permit safe needle entry into the subarachnoid space below the conus medullaris. Post-procedure, keeping the client flat in bed in a supine position for 4–6 hours reduces cerebrospinal fluid (CSF) leakage through the dural puncture site, significantly decreasing the risk of post-dural puncture headache. Why the other options fail: option b is the seated position used for some punctures, but taken with the spine extended rather than flexed, which narrows the interspinous spaces the needle has to pass through. Option c opens the spaces in the wrong direction and then keeps the client prone, which does nothing for the dural leak. Option d raises the head of the bed, the single thing most likely to worsen a post-dural puncture headache, because a dependent leak is what the flat position is meant to limit.",
    strategy: "Lumbar puncture care: Lateral recumbent fetal position widens interspinous space. Post-procedure: Lie flat (supine) for 4-6 hours to prevent spinal headache.",
    difficulty: "easy",
    tags: ["procedures", "lumbar-puncture", "patient-positioning", "post-dural-headache", "csf-analysis"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-006",
    categorySlug: "fundamentals",
    stem: "Two nurses are preparing to reposition a dependent, immobile 80 kg stroke client up in bed. Which ergonomic lifting technique prevents musculoskeletal injury to the nurses and minimizes shear forces on the client's skin?",
    choices: [
      {
        id: "a",
        text: "Keep the bed flat at its lowest height, stand close to the client, bend from the waist with the knees straight so the legs stay clear, and pull firmly on the draw sheet",
      },
      {
        id: "b",
        text: "Raise the head of the bed to 45 degrees, place a slide sheet under the client, and have one nurse pull while the other lifts the client's shoulders clear of the mattress",
      },
      {
        id: "c",
        text: "Bed at elbow height of the shorter nurse, head flat, friction-reducing slide sheet under the torso, knees and hips bent, wide base, and move on a synchronized count",
      },
      {
        id: "d",
        text: "Use a hoist without checking that the sling size matches the client, and ask the client to hold the nurses' shoulders and pull themselves up to help with the transfer",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Safe patient handling and ergonomic guidelines protect both health workers and clients: (1) elevate the bed surface to the working height of the caregivers (elbow/waist level) to eliminate spinal stooping; (2) flatten the bed (lowering head of bed) so gravity does not oppose upward movement; (3) use friction-reducing slide sheets or draw sheets to reduce shear forces and friction that damage fragile skin; (4) maintain proper body mechanics (wide base of support with feet shoulder-width apart, knees and hips flexed, spine neutral, lifting by shifting body weight using leg and gluteal muscles rather than lumbar spine muscles); and (5) coordinate movements on a verbal count. Why the other options fail: option a is the classic injury posture: bending from the waist with straight knees loads the lumbar spine and puts the nurses at risk rather than the client. Option b raises the head of the bed, so gravity now opposes the move, and lifting the shoulders clear of the mattress converts a slide into a lift. Option d uses the right equipment carelessly and then adds a pull on the nurses' shoulders, which is both a client fall risk and an injury risk for the staff.",
    strategy: "Ergonomic transfer: Bed at elbow height + flat head of bed + friction-reducing slide sheet + bend knees/wide base + shift weight together.",
    difficulty: "easy",
    tags: ["procedures", "ergonomics", "body-mechanics", "patient-transfer", "shear-prevention"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-007",
    categorySlug: "fundamentals",
    stem: "A nurse is performing perineal hygiene on an uncircumcised adult male client with an indwelling urinary catheter. What is the essential sequence for cleansing the penis, and what action must follow immediately?",
    choices: [
      {
        id: "a",
        text: "Retract the foreskin, cleanse the glans outward from the meatus, and leave it retracted so that the area can be observed and kept dry until the next round of care",
      },
      {
        id: "b",
        text: "Retract the foreskin, cleanse the glans from the meatus outward in circles, wash down the shaft, then replace the foreskin immediately to prevent paraphimosis",
      },
      {
        id: "c",
        text: "Wash from the scrotum upward toward the meatus in one stroke, replacing the foreskin afterwards, so the most contaminated area is cleaned first",
      },
      {
        id: "d",
        text: "Retract the foreskin and cleanse with an alcohol-based rub to reduce bacterial colonisation, then replace it and apply powder to keep the skin dry and free of odour",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Perineal care for an uncircumcised male requires retracting the prepuce (foreskin) to clean accumulated smegma and secretions. The nurse washes from the cleanest area to the dirtiest: starting at the urethral meatus and wiping in circular outward motions around the glans toward the corona. Crucially, the nurse must REPOSITION (reduce) the foreskin back over the glans immediately after cleansing. Leaving the foreskin retracted causes constricting bands around the penile shaft, venous stasis, severe edema, arterial compromise, and penile ischemia—a surgical emergency known as paraphimosis. Why the other options fail: option a gets the cleansing right and then leaves the foreskin retracted, which is precisely the mechanism of paraphimosis, and a constricting band behind the glans can cause arterial compromise within hours. Option c reverses the direction of cleaning, carrying faecal organisms from the scrotum to the meatus and into the catheter. Option d adds an alcohol rub to mucous membrane, which is painful and damaging, and powder under a replaced foreskin promotes maceration.",
    strategy: "Male perineal care: Retract foreskin -> Cleanse meatus outwards in circles -> IMMEDIATELY replace foreskin to prevent fatal paraphimosis.",
    difficulty: "easy",
    tags: ["procedures", "perineal-care", "hygiene", "paraphimosis-prevention", "catheter-care"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-008",
    categorySlug: "safety-infection-control",
    stem: "A nurse is inserting an indwelling Foley catheter in an adult female client. After inserting the catheter into the urethral meatus and observing urine return in the tubing, what is the nurse's next step before inflating the retention balloon?",
    choices: [
      {
        id: "a",
        text: "Inflate the balloon as soon as urine appears in the tubing, because the eyelets and the balloon sit at the same level in the bladder",
      },
      {
        id: "b",
        text: "Inflate the balloon with 10 mL of air and then withdraw the catheter until resistance is felt, which seats the balloon at the bladder neck",
      },
      {
        id: "c",
        text: "Withdraw the catheter 5 cm, inflate the balloon with normal saline, and then advance it again until urine flows freely",
      },
      {
        id: "d",
        text: "Advance the catheter another 2.5 to 5 cm (1 to 2 inches) further into the bladder before slowly inflating the balloon with sterile water",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Urine flow begins as soon as the catheter eyelets enter the bladder neck. However, the retention balloon is located 1.5 to 2.5 cm behind the eyelets. If the balloon is inflated immediately upon observing initial urine return, the balloon may still reside within the delicate female urethra. Inflating the balloon inside the urethra causes excruciating pain, severe mucosal tearing, and urethral rupture. Therefore, the nurse must advance the catheter an additional 2.5–5 cm (1–2 inches) further into the bladder lumen before inflating the balloon with the manufacturer-specified volume of sterile water (saline can crystallize and jam the inflation valve). Why the other options fail: option a states the error directly, and the premise is false: the balloon sits 1.5 to 2.5 cm behind the eyelets, so urine can flow while the balloon is still in the urethra. Option b withdraws rather than advances, which pulls the balloon back into the urethra and then inflates it there. Option c does the same in two steps and adds saline, which can crystallise in the inflation channel and jam the valve.",
    strategy: "Catheter balloon safety: Once urine appears, advance 2.5-5 cm FURTHER into the bladder before inflating balloon. Prevents urethral rupture.",
    difficulty: "medium",
    tags: ["procedures", "foley-catheter", "catheterization", "cauti-prevention", "patient-safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-009",
    categorySlug: "fundamentals",
    stem: "A nurse catheterizes an elderly male presenting with acute urinary retention secondary to benign prostatic hyperplasia. The bladder was palpable to the umbilicus, and 1,200 mL of urine drains immediately. What potential physiological complications must the nurse monitor for following rapid decompression of a chronically distended bladder?",
    choices: [
      {
        id: "a",
        text: "Acute kidney injury from reflex vasoconstriction, with oliguria for 24 hours and a rising creatinine that requires fluid restriction",
      },
      {
        id: "b",
        text: "Transient hypotension, post-obstructive diuresis with electrolyte depletion, and decompression hematuria",
      },
      {
        id: "c",
        text: "Hypertensive crisis from the sudden fall in intra-abdominal pressure, with headache and a systolic pressure above 180 mmHg",
      },
      {
        id: "d",
        text: "Gross haematuria from traumatic insertion, needing continuous bladder irrigation through a three-lumen catheter",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Rapid evacuation of a massively distended bladder (> 1,000 mL) abruptly relieves intra-abdominal and pelvic venous compression, leading to splanchnic venous pooling and transient orthostatic hypotension. In addition, relief of prolonged bilateral urinary obstruction can trigger 'post-obstructive diuresis'—a massive polyuria due to impaired renal tubular concentrating ability, risking severe dehydration, hypokalaemia, and hyponatraemia. Rupture of engorged mucosal capillaries in the rapidly collapsing bladder wall can also cause decompression hematuria. The nurse monitors vital signs, true urine output hourly, and serum electrolytes. Why the other options fail: option a predicts oliguria, but the physiological response to relieving prolonged obstruction is the opposite: the tubules have lost their concentrating ability, so large volumes of dilute urine are passed. Option c reverses the haemodynamic direction; decompression causes venodilation and hypotension, not hypertensive crisis. Option d attributes bleeding to insertion trauma, but decompression haematuria comes from ruptured mucosal capillaries in a bladder wall that has suddenly collapsed, and it does not usually need irrigation.",
    strategy: "Bladder decompression risks: Rapid drainage of > 1,000 mL can cause hypotension, post-obstructive diuresis (electrolyte loss), and decompression hematuria.",
    difficulty: "medium",
    tags: ["procedures", "urinary-retention", "post-obstructive-diuresis", "catheterization", "renal"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-010",
    categorySlug: "fundamentals",
    stem: "A nurse is inserting a nasogastric (NG) tube for gastric decompression in a conscious adult client. As the tube passes the nasopharynx and enters the oropharynx, the client begins coughing, choking, and becomes mildly cyanotic. What is the nurse's immediate action?",
    choices: [
      {
        id: "a",
        text: "Withdraw the tube completely, let the coughing settle, and reinsert a fresh tube through the other nostril once the saturation has come back above 94 per cent",
      },
      {
        id: "b",
        text: "Stop advancing, leave the tube at its current depth, give oxygen by mask, and then continue advancing slowly while the client swallows between breaths",
      },
      {
        id: "c",
        text: "Withdraw the tube slightly into the nasopharynx, stop advancing, assess airway and saturation, let the client rest, then re-advance with chin tucked to chest",
      },
      {
        id: "d",
        text: "Ask the client to cough forcefully to clear the tube from the airway, then deflate the cuff if present and advance the tube further towards the stomach",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Coughing, choking, dyspnoea, stridor, or cyanosis during NG tube insertion indicates that the tube has entered the larynx/trachea rather than the esophagus. The nurse must immediately stop advancing and pull the tube back into the posterior nasopharynx to relieve airway compromise. Once the client recovers, takes deep breaths, and normal color returns, the nurse instructs the client to tuck their chin down toward their chest (which closes the glottis over the trachea and opens the esophagus) and advance the tube gently as the client takes sips of water through a straw. Why the other options fail: option a is the over-reaction that costs time and trauma; the tube only needs withdrawing to the nasopharynx, not removing and restarting in the other nostril, and the airway must be assessed first. Option b leaves the tube in the airway while oxygen is applied and then advances it further, which pushes it deeper into the trachea. Option d asks a choking client to cough around an obstructing tube and then advances it, worsening the obstruction instead of relieving it.",
    strategy: "NG tube respiratory distress: Coughing/choking/cyanosis = tube in trachea! Stop immediately, withdraw slightly into nasopharynx, let client breathe, then advance with chin-tuck and swallows.",
    difficulty: "easy",
    tags: ["procedures", "ng-tube", "tube-insertion", "airway-safety", "clinical-nursing"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-011",
    categorySlug: "fundamentals",
    stem: "A nurse evaluates a client 2 days following an emergency sigmoid colectomy with end colostomy creation. On inspecting the stoma, the nurse observes that the stomal mucosa appears dark purple to black, flaccid, and dry. How should the nurse interpret this finding, and what action is required?",
    choices: [
      {
        id: "a",
        text: "Mucosal sloughing after colectomy, which is expected in the first 72 hours and usually separates to leave healthy pink tissue behind",
      },
      {
        id: "b",
        text: "The stoma is necrotic due to vascular compromise/ischemia; notify the surgical team immediately as this requires urgent surgical re-exploration",
      },
      {
        id: "c",
        text: "Venous congestion from a tight stoma support; apply warm moist compresses and reassess the colour at the next dressing round",
      },
      {
        id: "d",
        text: "Retained blood pigment from theatre; clean the stoma gently with saline and chlorhexidine to reveal the true mucosal colour",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "A healthy, viable newly created gastrointestinal stoma is beefy red or pink, moist, warm, and slightly edematous (resembling buccal oral mucosa). A dusky, dark red, purple, brown, or black stoma indicates inadequate arterial blood supply or severe venous congestion resulting in stomal ischemia and necrosis. This is a post-operative surgical emergency. The nurse must immediately notify the surgeon for urgent evaluation, inspect the depth of necrosis using a small glass test tube with a penlight (to evaluate whether necrosis extends below the peritoneal fascial level), and prepare the client for potential surgical revision. Why the other options fail: option a describes a real phenomenon but the wrong one: slough is a superficial yellow-white film over pink mucosa, whereas a uniformly purple-black, flaccid, dry stoma is full-thickness ischaemia. Option c identifies congestion but prescribes a dressing-round reassessment, which delays the only intervention that saves the stoma. Option d treats a surgical emergency as a cleaning problem, and chlorhexidine on an ischaemic stoma adds chemical injury to the existing insult.",
    strategy: "Stoma viability: Normal stoma = Beefy red/pink & moist. Purple/dark/black stoma = ISCHEMIA/NECROSIS. Immediate surgical notification required.",
    difficulty: "easy",
    tags: ["procedures", "stoma-care", "colostomy", "stomal-necrosis", "surgical-emergency"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-012",
    categorySlug: "pharmacology-parenteral",
    stem: "A nurse is administering a 2 mL intramuscular injection of an irritating viscous medication (iron dextran) to an adult client. Which injection site and method should the nurse utilize to minimize pain and prevent tracking of medication into subcutaneous tissue?",
    choices: [
      {
        id: "a",
        text: "Use the dorsogluteal site with a 21-gauge needle, aspirate, and inject rapidly so that the iron does not track back along the needle track into the fat",
      },
      {
        id: "b",
        text: "Use the deltoid with a 1-inch needle, pinch the muscle belly, and massage the site afterwards to help the viscous fluid disperse through the muscle",
      },
      {
        id: "c",
        text: "Use the ventrogluteal site without the Z-track, inject slowly over 30 seconds, and massage the site firmly afterwards to spread the medication through the muscle",
      },
      {
        id: "d",
        text: "Ventrogluteal site with the Z-track technique: pull the skin 2.5 cm laterally, insert at 90 degrees, inject slowly, wait 10 seconds, then release",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The ventrogluteal site (gluteus medius and minimus) is the preferred anatomical site for deep intramuscular injections in adults because it is free of major blood vessels and large nerves (unlike the dorsogluteal site, which poses high risk of sciatic nerve injury and superior gluteal artery puncture), and has a thick muscle belly. The Z-track method is mandatory for irritating or dark medications (e.g., iron, haloperidol): displacing the skin and subcutaneous tissue laterally prior to injection creates a zigzag needle track upon needle release, effectively sealing the drug within the deep muscle plane and preventing painful subcutaneous leakage and skin tattooing. Why the other options fail: option a picks the site with the highest risk of sciatic nerve injury and then injects rapidly, which increases the chance of tracking along the track. Option b uses a 1-inch needle in the deltoid, too short to reach muscle in most adults and too small a muscle for 2 mL of an irritating preparation, and massaging drives the iron into subcutaneous fat. Option c chooses the right muscle and omits the Z-track, which is the one step that prevents the subcutaneous leakage and tattooing the irritant causes.",
    strategy: "IM injections: Ventrogluteal is the #1 safest adult site (no major nerves/vessels). Z-track prevents subcutaneous tracking and staining of irritating drugs.",
    difficulty: "easy",
    tags: ["procedures", "intramuscular-injection", "ventrogluteal", "z-track", "medication-administration"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-013",
    categorySlug: "fundamentals",
    stem: "A client has a peripheral IV cannula in the left cephalic vein receiving continuous intravenous fluids. The nurse assesses the cannula site and observes localized erythema, warmth, mild edema, and a palpable, tender venous cord extending 4 cm proximal to the insertion site along the path of the vein. What complication is present, and what is the nurse's priority action?",
    choices: [
      {
        id: "a",
        text: "Chemical phlebitis; slow the infusion, apply a cool compress to the cord, and continue through the same cannula so that the vein is not lost and access is preserved",
      },
      {
        id: "b",
        text: "Superficial thrombophlebitis; use the other lumen of the same catheter and apply heparinoid gel along the palpable cord to disperse the clot",
      },
      {
        id: "c",
        text: "Infiltration from the cannula tip dislodging into tissue; aspirate the cannula, then restart the infusion proximal to the swelling on the same arm",
      },
      {
        id: "d",
        text: "Phlebitis (Grade 3); stop the infusion, remove the cannula, apply a warm moist compress, elevate the arm, and restart access in the opposite arm",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Phlebitis is chemical, mechanical, or bacterial inflammation of the vein tunica intima. The classic clinical presentation includes erythema, localized warmth, pain/tenderness, and a palpable indurated venous cord (Grade 3 on the Infusion Nurses Society Phlebitis Scale). Priority management: (1) immediately stop the infusion and remove the cannula; (2) apply a warm, moist compress to relieve inflammation and promote venous blood flow; (3) elevate the affected extremity; (4) document findings and score; and (5) resite the new IV line in the contralateral extremity if ongoing therapy is required. In contrast, infiltration presents with coolness, blanching, and soft edema. Why the other options fail: option a uses the right word and the wrong action: a Grade 3 phlebitis, with a palpable cord 4 cm along the vein, needs the cannula out, not slowed, and continuing to infuse prolongs endothelial injury. Option b keeps the device in the same vessel and treats a chemical injury as a thrombotic one. Option c misidentifies the complication; infiltration produces cool blanched swelling, not warmth and a tender cord, so flushing and restarting proximal to it would be the wrong manoeuvre entirely.",
    strategy: "Phlebitis vs Infiltration: Phlebitis = Warmth, redness, palpable cord -> Discontinue cannula + warm compress. Infiltration = Coolness, swelling, pallor.",
    difficulty: "easy",
    tags: ["procedures", "iv-cannula", "phlebitis", "iv-complications", "patient-safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-014",
    categorySlug: "pharmacology-parenteral",
    stem: "A nurse is administering a subcutaneous injection of low-molecular-weight heparin (enoxaparin 40 mg) to an adult client. Which nursing actions are correct and prevent hematoma formation at the injection site?",
    choices: [
      {
        id: "a",
        text: "Abdominal wall at least 5 cm from the umbilicus, pinch a fold, 90 degrees, keep the air bubble, do not aspirate, do not massage",
      },
      {
        id: "b",
        text: "Select the deltoid, aspirate before injecting to confirm that the needle is not in a vessel, and massage the site afterwards to speed absorption of the dose",
      },
      {
        id: "c",
        text: "Expel the air bubble from the prefilled syringe, inject into the abdomen at 45 degrees, and apply firm pressure to the site afterwards to stop any oozing",
      },
      {
        id: "d",
        text: "Inject into the umbilicus itself at 15 degrees, since this is the most vascular part of the abdominal wall and will absorb the dose most reliably",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Best-practice technique for subcutaneous enoxaparin administration: (1) use the anterolateral or posterolateral abdomen (the 'love handles'), alternating sides and staying >= 2 inches away from the umbilicus; (2) DO NOT expel the air bubble from the prefilled syringe (the bubble ensures the entire medication dose is delivered and creates an air seal preventing subcutaneous tracking); (3) pinch a skin fold throughout the injection and insert the needle at 90 degrees (or 45 degrees in thin individuals); (4) DO NOT aspirate for blood (aspiration causes tissue damage and hematoma); and (5) DO NOT massage or rub the injection site after needle withdrawal (rubbing causes capillary rupture and severe bruising). Why the other options fail: option b sends a subcutaneous drug into muscle and then aspirates, which is unnecessary for heparin and increases tissue trauma. Option c removes the air bubble that is there to deliver the full dose and seal the track, and firm pressure after the injection promotes the bruising the technique is meant to avoid. Option d injects into umbilical tissue, which is thin, poorly vascular for absorption and painful, and a 15-degree angle is too shallow for a 2 cm pinched fold.",
    strategy: "Enoxaparin injection rules: Abdominal wall >= 2 inches from umbilicus + keep air bubble + 90-degree angle + NO aspiration + NO rubbing/massaging.",
    difficulty: "easy",
    tags: ["procedures", "enoxaparin", "subcutaneous-injection", "heparin", "medication-administration"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-015",
    categorySlug: "fundamentals",
    stem: "A client with a tracheostomy tube has coarse rhonchi on auscultation and decreased oxygen saturation. The nurse prepares to perform open endotracheal suctioning. What parameters must the nurse maintain regarding pre-oxygenation, suction duration, and technique to avoid fatal hypoxemia and vagal stimulation?",
    choices: [
      {
        id: "a",
        text: "Apply continuous suction while inserting the catheter, limit the whole pass to 30 seconds, and give oxygen by nasal cannula between passes to maintain saturation",
      },
      {
        id: "b",
        text: "Hyperoxygenate with 100% O2 for 30 to 60 seconds, advance without suction, suction only on withdrawal for 10 to 15 seconds, 1 minute between passes",
      },
      {
        id: "c",
        text: "Hyperventilate the client by hand for 10 seconds, insert the catheter until resistance is met, and apply suction for 20 seconds in a single uninterrupted pass",
      },
      {
        id: "d",
        text: "Instil 5 mL of sterile saline to loosen the secretions, suction for 15 seconds, and repeat every 2 minutes until the chest sounds clear on auscultation",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Tracheostomy and endotracheal suctioning carries risks of hypoxemia, mucosal trauma, cardiac arrhythmias, and vagal-mediated bradycardia. Evidence-based protocol mandates: (1) pre-oxygenate (hyperoxygenate) with 100% O2 for 30–60 seconds prior to suctioning; (2) insert catheter gently WITHOUT suction until resistance is met or client coughs, then pull back 1–2 cm; (3) apply suction ONLY while withdrawing and twirling the catheter; (4) limit suction duration to <= 10–15 seconds per pass; (5) re-oxygenate between passes and allow at least 1 minute of recovery; and (6) routine normal saline instillation is strictly contraindicated as it flushes colonized biofilm into lower airways. Why the other options fail: option a sucks during insertion, which strips oxygen from the airway for the whole pass, and 30 seconds is twice the safe duration. Option c pre-oxygenates for too short a time and then applies 20 seconds of continuous suction, which is a recognised cause of hypoxaemia and vagal bradycardia. Option d instils saline, which is no longer recommended because it dislodges biofilm into the lower airways, and repeating every two minutes without recovery time causes cumulative hypoxia.",
    strategy: "Tracheostomy suctioning: Pre-oxygenate with 100% O2 + NO suction during insertion + suction ONLY on withdrawal for <= 10-15 seconds max. Never instill saline.",
    difficulty: "easy",
    tags: ["procedures", "tracheostomy", "suctioning", "hypoxemia-prevention", "airway-management"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-016",
    categorySlug: "med-surg",
    stem: "A client with a left pneumothorax has a chest tube connected to a three-chamber water-seal drainage system. While turning the client in bed, the chest tube accidentally pulls apart at the connection adaptor, separating from the drainage unit. What is the nurse's immediate emergency intervention?",
    choices: [
      {
        id: "a",
        text: "Clamp the tube with padded forceps to stop air entering the chest, releasing the clamp briefly every 15 minutes so that any trapped air can escape",
      },
      {
        id: "b",
        text: "Submerge the distal open end 2 to 4 cm in a bottle of sterile water to re-establish a water seal, and prepare a new drainage unit",
      },
      {
        id: "c",
        text: "Tape the open end to the drainage unit, position the client on the affected side, and call the medical team to reconnect the system at the bedside",
      },
      {
        id: "d",
        text: "Remove the chest tube completely and cover the insertion site with an occlusive dressing until the medical team arrives",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "When a chest tube disconnects from its drainage canister, atmospheric air can rush into the negative-pressure pleural space, precipitating a tension pneumothorax or collapsing the lung. The immediate lifesaving action is to submerge the distal open tip of the chest tube 2 to 4 cm (1 to 2 inches) into a sterile bottle of water or normal saline kept at the bedside. This creates an immediate temporary water seal, allowing air to escape from the pleural space during exhalation while preventing air from being sucked back in during inspiration. Clamping the tube is contraindicated because trapped air cannot escape, causing tension pneumothorax. Why the other options fail: option a is the most common wrong answer, and it is dangerous: clamping a disconnected tube in a client with a pneumothorax traps air in the pleural space and can convert a simple pneumothorax into a tension pneumothorax. Option c leaves the system open to atmosphere and simply tapes it, so air is drawn back in with every breath. Option d removes a tube that may still be draining and seals the chest, which risks both re-expansion failure and tension.",
    strategy: "Chest tube disconnection: Submerge distal tube 2-4 cm in bottle of sterile water to create immediate water seal. NEVER clamp a disconnected chest tube.",
    difficulty: "medium",
    tags: ["procedures", "chest-tube", "water-seal", "pneumothorax", "emergency-action"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-017",
    categorySlug: "fundamentals",
    stem: "A client 10 days post-exploratory laparotomy is scheduled for surgical staple removal. The nurse cleanses the incision and removes the first 3 staples. The nurse notes that the wound edges immediately begin to separate, and pink serosanguinous fluid oozes from the midline gap (early dehiscence). What is the nurse's immediate action?",
    choices: [
      {
        id: "a",
        text: "Stop removal, apply Steri-Strips across the separated area to approximate the edges, place a sterile dressing, and notify the surgeon at once",
      },
      {
        id: "b",
        text: "Continue removing the remaining staples so that the wound edges can be inspected in full, then apply a sterile dressing and inform the surgeon afterwards",
      },
      {
        id: "c",
        text: "Approximate the edges with Steri-Strips, cover with a sterile dressing, and arrange wound review at the next outpatient appointment",
      },
      {
        id: "d",
        text: "Apply a sterile dressing, teach the client to splint the abdomen when coughing, and record the finding so that it can be raised at the surgical review",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "When removing surgical sutures or staples, the standard procedure is to remove alternate (every other) staples first to evaluate wound tensile strength and structural integrity. If wound separation (dehiscence) occurs upon removing initial staples, the nurse must STOP removal immediately. The nurse should support the dehiscence with wound closure strips (Steri-Strips) placed perpendicular to the incision, apply a sterile dressing, keep the client calm in low Fowler's position with knees flexed (to reduce abdominal tension), and notify the attending surgeon promptly. Why the other options fail: option b removes the remaining staples, which are the only thing still holding a wound that has already begun to fail, and turns an early dehiscence into a full one. Option c does the right local action and then defers the escalation: dehiscence can progress to evisceration, so the surgeon is notified now, not at an outpatient review. Option d documents and teaches but neither supports the wound nor escalates it, which is the error that turns a dehiscence into a returning theatre case.",
    strategy: "Staple removal & dehiscence: If edges separate during removal -> STOP REMOVAL IMMEDIATELY. Apply Steri-Strips to support incision and notify surgeon.",
    difficulty: "easy",
    tags: ["procedures", "staple-removal", "wound-dehiscence", "surgical-care", "incision-care"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-018",
    categorySlug: "risk-reduction",
    stem: "A hospitalized client collapses suddenly in the corridor. The nurse confirms unresponsiveness, absence of normal breathing, and absence of a carotid pulse within 10 seconds. The nurse activates the emergency medical code team and begins chest compressions. According to resuscitation guidelines, what compression rate, depth, and technique constitute high-quality CPR?",
    choices: [
      {
        id: "a",
        text: "Compress at 80 to 100 per minute to a depth of 4 cm, allowing full recoil, and pause for 15 seconds after every 30 compressions to check for a pulse",
      },
      {
        id: "b",
        text: "Compress at 100 to 120 per minute to a depth of 6 cm without allowing full recoil, so that coronary perfusion pressure is maintained continuously",
      },
      {
        id: "c",
        text: "Rate 100 to 120 per minute, depth at least 5 cm (max 6 cm), full recoil after each compression, pauses under 10 seconds, ratio 30:2",
      },
      {
        id: "d",
        text: "Compress at 100 to 120 per minute to a depth of 5 cm, pausing after every 30 compressions for two rescue breaths of 2 seconds each",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "High-quality CPR is the primary determinant of cardiac arrest survival: (1) Compression rate of 100 to 120 beats per minute; (2) Compression depth of at least 5 cm (2 inches) but not exceeding 6 cm (2.4 inches) in adults; (3) Allow full chest recoil after each compression (leaning prevents coronary perfusion by impeding venous return); (4) Minimize all pauses in compressions (chest compression fraction > 60–80%, pauses < 10 seconds); and (5) Compression-to-ventilation ratio of 30:2 in adults without advanced airway, rotating compressors every 2 minutes to prevent fatigue. Why the other options fail: option a slows the rate below 100 and reduces depth below 5 cm, both of which cut cardiac output, and a 15-second pulse check every cycle destroys the compression fraction. Option b gets rate and depth right and then forbids recoil, which raises intrathoracic pressure and reduces venous return, the exact mechanism that makes leaning harmful. Option d is close but the pauses exceed 10 seconds once the two breaths are given slowly, and no target for minimising interruption is stated.",
    strategy: "High-quality CPR metrics: Rate 100-120/min + Depth 5-6 cm (2-2.4 inches) + Full recoil (don't lean) + Minimize pauses (< 10 s) + 30:2 ratio.",
    difficulty: "easy",
    tags: ["procedures", "cpr", "bls", "cardiac-arrest", "resuscitation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-019",
    categorySlug: "fundamentals",
    stem: "A nurse is preparing an adult client with severe tense cirrhotic ascites for a large-volume therapeutic abdominal paracentesis. What client instruction is essential immediately prior to the puncture, and what intravenous colloid is administered post-procedure to prevent paracentesis-induced circulatory dysfunction (PICD)?",
    choices: [
      {
        id: "a",
        text: "Ask the client to drink 2 litres of water before the procedure so the bladder is easy to identify on the scan, and give a colloid bolus for every 3 litres drained",
      },
      {
        id: "b",
        text: "Catheterise the client and clamp the catheter during drainage, giving albumin only if the systolic pressure falls after the tap has been completed",
      },
      {
        id: "c",
        text: "Have the client void immediately before the tap to avoid puncturing the bladder; give IV albumin 6 to 8 g per litre of ascites removed once over 5 litres",
      },
      {
        id: "d",
        text: "Fast the client from midnight and give fresh frozen plasma after the tap rather than albumin, to replace the volume that has been removed",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Prior to abdominal paracentesis, having the client void immediately beforehand is critical: an empty bladder collapses into the deep pelvic cavity, preventing catastrophic accidental trocar laceration or perforation of the urinary bladder. For large-volume paracentesis (> 5 liters of ascitic fluid removed), rapid fluid shifts cause profound splanchnic vasodilation and arterial hypovolemia (paracentesis-induced circulatory dysfunction, PICD), leading to hepatorenal syndrome and death. To maintain effective oncotic pressure and intravascular volume, intravenous salt-poor albumin (6–8 g per liter of ascites drained beyond 5 L) is infused. Why the other options fail: option a does the reverse of the preparation: a full bladder rises out of the pelvis into the path of the trocar, which is the injury the instruction exists to prevent. Option b prevents puncture but gives albumin only after hypotension appears, when the point of prophylaxis was to prevent it. Option d substitutes plasma for albumin, which carries transfusion risk without the oncotic effect that reverses the splanchnic vasodilation of PICD.",
    strategy: "Paracentesis care: VOID immediately before procedure (prevents bladder puncture). For > 5 L drained, infuse IV albumin (6-8 g/L) to prevent circulatory collapse.",
    difficulty: "medium",
    tags: ["procedures", "paracentesis", "ascites", "albumin-infusion", "bladder-safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-PROC-020",
    categorySlug: "fundamentals",
    stem: "Following the verified death of an adult hospital client, the nurse provides post-mortem care prior to the family viewing. What positioning and hygienic nursing interventions preserve client dignity and prevent facial post-mortem discoloration?",
    choices: [
      {
        id: "a",
        text: "Raise the head of the bed 15 to 30 degrees or put a pillow under the head to prevent facial lividity, close the eyes, and support the jaw",
      },
      {
        id: "b",
        text: "Place a pillow under the shoulders and tilt the bed head-down, so that blood drains away from the face and the family can see the body more clearly",
      },
      {
        id: "c",
        text: "Close the eyes and jaw, leave the bed flat, and open the window to cool the room, since cooling the body prevents discoloration of the face",
      },
      {
        id: "d",
        text: "Wash the body, remove all tubes and lines, and keep the head flat under a sheet until the family arrives so that the face is not disturbed",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Post-mortem care honors client dignity and provides compassionate closure for grieving families: (1) elevate the head of the bed 15–30 degrees or place a pillow under the head promptly to prevent dependent blood pooling (livor mortis) in the face, which causes purple discoloration; (2) close the eyelids gently; (3) insert dentures and support the lower jaw with a rolled towel under the chin before rigor mortis sets in; (4) remove non-forensic invasive tubes/catheters (unless an autopsy/coroner's inquest is mandated); (5) cleanse soiled body areas and replace soiled bed linens; and (6) position clean sheets neatly to the shoulders for family viewing. Why the other options fail: option b tilts the head down, which is the fastest way to produce the facial lividity the question asks how to avoid, and it does so for a reason (better visibility) that sounds considerate. Option c leaves the body flat, so dependent pooling continues, and cooling the room does not stop it. Option d keeps the head flat for the same cosmetic reason and reaches it by the opposite route, and it also strips every line, which pre-empts a coroner's or autopsy decision that is not the nurse's to make.",
    strategy: "Post-mortem care: Elevate head with pillow (prevents facial blood pooling/lividity) + close eyes & support jaw + wash & clean linens before family viewing.",
    difficulty: "easy",
    tags: ["procedures", "post-mortem-care", "dignity", "end-of-life", "nursing-ethics"],
    isFree: true,
  },
];
