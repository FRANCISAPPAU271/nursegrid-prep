import type { AuthoredQuestion } from "./authored-bank";

export const PROC_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-PROC-001",
    categorySlug: "safety-infection-control",
    stem: "A nurse is caring for a client placed on droplet and contact precautions. After completing morning care, the nurse prepares to leave the isolation room. What is the correct, evidence-based sequence for removing (doffing) Personal Protective Equipment (PPE) to prevent self-contamination?",
    choices: [
      {
        id: "a",
        text: "Gloves first, followed by eye protection (goggles/face shield), gown, mask or respirator, and perform immediate hand hygiene",
      },
      {
        id: "b",
        text: "Mask first, followed by gown, gloves, eye protection, and exit without washing hands",
      },
      {
        id: "c",
        text: "Gown and mask simultaneously, then shake gloves vigorously into the open waste bin",
      },
      {
        id: "d",
        text: "Remove all PPE outside the room at the central nurses' station",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The outer surfaces of gloves and the front of the gown are heavily contaminated during patient care. The CDC recommended sequence for doffing PPE minimizes transmission to clean skin and mucous membranes: (1) Gloves are removed first (glove-in-glove technique) because they are the most heavily contaminated item; (2) Goggles or face shield are removed by grasping the clean headband/earpieces; (3) Gown is unfastened, peeled away from neck and shoulders, turned inside out, and rolled into a bundle; (4) Mask or respirator is removed last (touching only the clean elastic strings/ties, never the front surface) after exiting the room (or just before exiting for non-airborne precautions); and (5) Hand hygiene is performed immediately.",
    strategy: "PPE doffing order: Gloves first (most contaminated) -> Goggles/face shield -> Gown -> Mask/respirator last -> Immediate hand hygiene.",
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
        text: "Lock the hospital exit doors, confiscate the client's clothes, and apply physical restraints",
      },
      {
        id: "b",
        text: "Assess decision-making capacity, arrange for the physician to clearly explain the specific life-threatening risks (including fatal myocardial infarction), explore reasons for leaving to find compromises, request signature on the DAMA form, and provide discharge instructions, medications, and reassurance that the client is welcome to return anytime",
      },
      {
        id: "c",
        text: "Refuse to give the client his personal belongings, withhold his prescription medications, and tell him he can never return to the hospital",
      },
      {
        id: "d",
        text: "Allow the client to leave immediately without any conversation or documentation",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "A mentally competent adult has the legal right to refuse medical care and leave a healthcare facility against medical advice (DAMA). Restraining the client or withholding belongings constitutes false imprisonment and battery. The nurse's professional responsibility includes: (1) confirming the client has decisional capacity (understands situation and consequences); (2) facilitating an urgent discussion where the physician explains specific risks (e.g., sudden cardiac death); (3) exploring underlying barriers (childcare, finances, business) to find alternatives; (4) offering the DAMA release form for signature (or documenting refusal to sign); and (5) providing discharge medications, essential advice, and explicitly welcoming the client back if symptoms recur.",
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
        text: "An auscultatory gap — record 128/84, because the higher sounds are arterial wall artefact and not true systolic",
      },
      {
        id: "b",
        text: "A normal Korotkoff sequence — record 150/84, taking the point of disappearance as the systolic pressure",
      },
      {
        id: "c",
        text: "An auscultatory gap — record 168/84 and, at later readings, inflate beyond the point where the radial pulse disappears so the true systolic is not missed",
      },
      {
        id: "d",
        text: "A widened phase IV — record 168/128 and repeat the measurement on the opposite arm for confirmation",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "An auscultatory gap is a silent interval between the first Korotkoff sound and the return of phase II sounds, seen most often in older hypertensive clients and in aortic stenosis. It matters because if the cuff is inflated only to the expected systolic, the first sounds fall inside the gap and the true systolic is missed, so the reading is falsely low. The safeguard is to palpate the radial artery while inflating 20 to 30 mmHg beyond the point where the pulse disappears, then deflate at 2 to 3 mmHg per second. The first sound heard is the systolic (168) and the final disappearance is the diastolic (84). Why the other options fail: recording 128/84 mistakes the return of phase II for the systolic and underestimates pressure by 40 mmHg; a 22 mmHg silent interval between phases I and II is not a normal sequence, and a disappearance point is never the systolic; and 128 reflects phase II re-appearance, not a diastolic, so repeat measurement on the other arm would not correct the misreading.",
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
        text: "Draw both blood culture sets from an existing, non-functioning peripheral IV line inserted 4 days ago",
      },
      {
        id: "b",
        text: "Palpate the vein vigorously with unwashed, bare fingers after skin disinfectant application",
      },
      {
        id: "c",
        text: "Draw 1 mL of blood, shake vigorously with tap water, and refrigerate for 48 hours",
      },
      {
        id: "d",
        text: "Disinfect venepuncture sites with 2% chlorhexidine in 70% alcohol for 30 seconds and allow to dry completely; draw 8 to 10 mL of blood per bottle from two separate anatomical venepuncture sites prior to initiating antimicrobial therapy",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Diagnostic blood cultures require meticulous aseptic technique to prevent false-positive contamination with skin flora (e.g., coagulase-negative staphylococci). Best practices dictate: (1) draw blood cultures BEFORE administering antibiotics; (2) cleanse the culture bottle rubber stoppers with alcohol; (3) disinfect the skin using 2% chlorhexidine in 70% isopropyl alcohol for 30 seconds and allow to air-dry completely (antimicrobial action occurs upon drying); (4) collect adequate blood volume (8–10 mL per bottle in adults; underfilling leads to false-negative results); and (5) obtain two distinct sets from separate venepuncture sites (not from existing indwelling peripheral IV lines).",
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
        text: "Maintain the client in a lateral recumbent 'fetal' position with knees flexed to the abdomen, chin tucked tightly to the chest, and spine arched; position the client flat in bed (supine) for 4 to 6 hours post-procedure",
      },
      {
        id: "b",
        text: "Place the client in prone position with both legs hyperextended; encourage vigorous running immediately afterwards",
      },
      {
        id: "c",
        text: "Keep the client standing upright on one foot while rotating the pelvis",
      },
      {
        id: "d",
        text: "Place the client in high Fowler's position with the spine arched backwards",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "For a lumbar puncture (spinal tap), the client is positioned in a lateral decubitus (side-lying) 'fetal' posture with knees drawn up to the chest and chin tucked to the chest (or seated leaning forward over an overbed table). This maximizes flexion of the lumbar spine, widening the interspinous spaces between L3–L4 or L4–L5 to permit safe needle entry into the subarachnoid space below the conus medullaris. Post-procedure, keeping the client flat in bed in a supine position for 4–6 hours reduces cerebrospinal fluid (CSF) leakage through the dural puncture site, significantly decreasing the risk of post-dural puncture headache.",
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
        text: "Keep the bed in its lowest position, bend from the waist with straight locked knees, and pull the client by the wrists",
      },
      {
        id: "b",
        text: "Adjust the bed to elbow height of the shorter nurse, lower the head of the bed flat, use a friction-reducing slide sheet placed under the client's torso, bend knees and hips with a wide base of support, and shift weight smoothly on a synchronized count",
      },
      {
        id: "c",
        text: "Drag the client's bare skin directly across the cotton bedsheets with the head of the bed elevated at 90 degrees",
      },
      {
        id: "d",
        text: "Attempt the transfer with a single nurse lifting the client vertically by the shoulders",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Safe patient handling and ergonomic guidelines protect both health workers and clients: (1) elevate the bed surface to the working height of the caregivers (elbow/waist level) to eliminate spinal stooping; (2) flatten the bed (lowering head of bed) so gravity does not oppose upward movement; (3) use friction-reducing slide sheets or draw sheets to reduce shear forces and friction that damage fragile skin; (4) maintain proper body mechanics (wide base of support with feet shoulder-width apart, knees and hips flexed, spine neutral, lifting by shifting body weight using leg and gluteal muscles rather than lumbar spine muscles); and (5) coordinate movements on a verbal count.",
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
        text: "Retract the foreskin forcefully and leave it retracted behind the coronal sulcus permanently",
      },
      {
        id: "b",
        text: "Cleanse from the scrotum upward toward the urethral meatus using the same washcloth stroke",
      },
      {
        id: "c",
        text: "Gently retract the foreskin, cleanse the glans penis in a circular motion from the urethral meatus outward, cleanse down the shaft, and immediately replace (reposition) the foreskin over the glans to prevent paraphimosis",
      },
      {
        id: "d",
        text: "Apply baby powder and alcohol-based rub directly into the urethral meatus",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Perineal care for an uncircumcised male requires retracting the prepuce (foreskin) to clean accumulated smegma and secretions. The nurse washes from the cleanest area to the dirtiest: starting at the urethral meatus and wiping in circular outward motions around the glans toward the corona. Crucially, the nurse must REPOSITION (reduce) the foreskin back over the glans immediately after cleansing. Leaving the foreskin retracted causes constricting bands around the penile shaft, venous stasis, severe edema, arterial compromise, and penile ischemia—a surgical emergency known as paraphimosis.",
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
        text: "Inflate the balloon immediately the instant the first drop of urine is visualized in the tubing",
      },
      {
        id: "b",
        text: "Inflate the balloon with 10 mL of air or normal saline",
      },
      {
        id: "c",
        text: "Pull the catheter backward 5 cm and then inflate the balloon",
      },
      {
        id: "d",
        text: "Advance the catheter another 2.5 to 5 cm (1 to 2 inches) further into the bladder before slowly inflating the balloon with sterile water",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Urine flow begins as soon as the catheter eyelets enter the bladder neck. However, the retention balloon is located 1.5 to 2.5 cm behind the eyelets. If the balloon is inflated immediately upon observing initial urine return, the balloon may still reside within the delicate female urethra. Inflating the balloon inside the urethra causes excruciating pain, severe mucosal tearing, and urethral rupture. Therefore, the nurse must advance the catheter an additional 2.5–5 cm (1–2 inches) further into the bladder lumen before inflating the balloon with the manufacturer-specified volume of sterile water (saline can crystallize and jam the inflation valve).",
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
        text: "Transient hypotension, post-obstructive diuresis with electrolyte depletion, and decompression hematuria",
      },
      {
        id: "b",
        text: "Immediate complete cessation of all future urine production",
      },
      {
        id: "c",
        text: "Malignant hypertensive crisis with intracranial hemorrhage",
      },
      {
        id: "d",
        text: "Instant spontaneous rupture of the contralateral kidney",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Rapid evacuation of a massively distended bladder (> 1,000 mL) abruptly relieves intra-abdominal and pelvic venous compression, leading to splanchnic venous pooling and transient orthostatic hypotension. In addition, relief of prolonged bilateral urinary obstruction can trigger 'post-obstructive diuresis'—a massive polyuria due to impaired renal tubular concentrating ability, risking severe dehydration, hypokalaemia, and hyponatraemia. Rupture of engorged mucosal capillaries in the rapidly collapsing bladder wall can also cause decompression hematuria. The nurse monitors vital signs, true urine output hourly, and serum electrolytes.",
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
        text: "Forcefully push the tube forward another 20 cm as fast as possible",
      },
      {
        id: "b",
        text: "Immediately withdraw the tube slightly into the nasopharynx, stop advancing, assess airway and oxygen saturation, allow the client to rest and breathe, and re-advance when the client sips water with chin tucked to chest",
      },
      {
        id: "c",
        text: "Instill 50 mL of sterile water directly into the tube while coughing",
      },
      {
        id: "d",
        text: "Instruct the client to hold their breath and hyperextend their neck backwards",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Coughing, choking, dyspnoea, stridor, or cyanosis during NG tube insertion indicates that the tube has entered the larynx/trachea rather than the esophagus. The nurse must immediately stop advancing and pull the tube back into the posterior nasopharynx to relieve airway compromise. Once the client recovers, takes deep breaths, and normal color returns, the nurse instructs the client to tuck their chin down toward their chest (which closes the glottis over the trachea and opens the esophagus) and advance the tube gently as the client takes sips of water through a straw.",
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
        text: "This is a normal, healthy appearance of a newly matured colostomy",
      },
      {
        id: "b",
        text: "Apply warm moist compresses and reassess in 7 days",
      },
      {
        id: "c",
        text: "The stoma is necrotic due to vascular compromise/ischemia; notify the surgical team immediately as this requires urgent surgical re-exploration",
      },
      {
        id: "d",
        text: "Scrub the stoma aggressively with chlorhexidine to remove the black pigment",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "A healthy, viable newly created gastrointestinal stoma is beefy red or pink, moist, warm, and slightly edematous (resembling buccal oral mucosa). A dusky, dark red, purple, brown, or black stoma indicates inadequate arterial blood supply or severe venous congestion resulting in stomal ischemia and necrosis. This is a post-operative surgical emergency. The nurse must immediately notify the surgeon for urgent evaluation, inspect the depth of necrosis using a small glass test tube with a penlight (to evaluate whether necrosis extends below the peritoneal fascial level), and prepare the client for potential surgical revision.",
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
        text: "Use the dorsogluteal site without aspirating, using a 1/2-inch needle at a 45-degree angle",
      },
      {
        id: "b",
        text: "Inject into the deltoid muscle using rapid bouncing motions",
      },
      {
        id: "c",
        text: "Inject directly into the subcutaneous tissue of the umbilical region",
      },
      {
        id: "d",
        text: "Use the ventrogluteal site and the Z-track technique (pulling skin and subcutaneous tissue 2.5 cm laterally before inserting the needle at 90 degrees, injecting slowly, waiting 10 seconds before withdrawal, and releasing skin)",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The ventrogluteal site (gluteus medius and minimus) is the preferred anatomical site for deep intramuscular injections in adults because it is free of major blood vessels and large nerves (unlike the dorsogluteal site, which poses high risk of sciatic nerve injury and superior gluteal artery puncture), and has a thick muscle belly. The Z-track method is mandatory for irritating or dark medications (e.g., iron, haloperidol): displacing the skin and subcutaneous tissue laterally prior to injection creates a zigzag needle track upon needle release, effectively sealing the drug within the deep muscle plane and preventing painful subcutaneous leakage and skin tattooing.",
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
        text: "Phlebitis (Grade 3); immediately discontinue the IV cannula, remove the catheter, apply a warm moist compress, elevate the extremity, and restart IV access in the opposite arm",
      },
      {
        id: "b",
        text: "Infiltration; flush the cannula forcefully with 20 mL of normal saline and increase the infusion rate",
      },
      {
        id: "c",
        text: "Normal IV site reaction; tape the cannula more tightly and recheck in 48 hours",
      },
      {
        id: "d",
        text: "Air embolism; place the client in Trendelenburg position immediately",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Phlebitis is chemical, mechanical, or bacterial inflammation of the vein tunica intima. The classic clinical presentation includes erythema, localized warmth, pain/tenderness, and a palpable indurated venous cord (Grade 3 on the Infusion Nurses Society Phlebitis Scale). Priority management: (1) immediately stop the infusion and remove the cannula; (2) apply a warm, moist compress to relieve inflammation and promote venous blood flow; (3) elevate the affected extremity; (4) document findings and score; and (5) resite the new IV line in the contralateral extremity if ongoing therapy is required. In contrast, infiltration presents with coolness, blanching, and soft edema.",
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
        text: "Inject into the deltoid muscle, aspirate vigorously for 10 seconds, and rub the site firmly with an alcohol swab",
      },
      {
        id: "b",
        text: "Select an injection site on the anterolateral or posterolateral abdominal wall at least 5 cm (2 inches) away from the umbilicus, pinch a skin fold, insert the prefilled needle at a 90-degree angle, do NOT expel the manufacturer's air bubble, do NOT aspirate, and do NOT massage the site after injection",
      },
      {
        id: "c",
        text: "Expel the entire medication dose into the air before injection",
      },
      {
        id: "d",
        text: "Inject directly into the midline of the umbilicus at a 15-degree angle",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Best-practice technique for subcutaneous enoxaparin administration: (1) use the anterolateral or posterolateral abdomen (the 'love handles'), alternating sides and staying >= 2 inches away from the umbilicus; (2) DO NOT expel the air bubble from the prefilled syringe (the bubble ensures the entire medication dose is delivered and creates an air seal preventing subcutaneous tracking); (3) pinch a skin fold throughout the injection and insert the needle at 90 degrees (or 45 degrees in thin individuals); (4) DO NOT aspirate for blood (aspiration causes tissue damage and hematoma); and (5) DO NOT massage or rub the injection site after needle withdrawal (rubbing causes capillary rupture and severe bruising).",
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
        text: "Apply continuous high-pressure suction for 45 seconds while pushing the catheter vigorously down the trachea",
      },
      {
        id: "b",
        text: "Turn off all oxygen delivery 5 minutes before suctioning to clear room air",
      },
      {
        id: "c",
        text: "Hyperoxygenate with 100% O2 for 30 to 60 seconds; advance catheter without suction; apply intermittent suction while rotating and withdrawing the catheter for no longer than 10 to 15 seconds; allow at least 1 minute between passes",
      },
      {
        id: "d",
        text: "Instill 20 mL of sterile water into the trachea routinely before every suction attempt",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Tracheostomy and endotracheal suctioning carries risks of hypoxemia, mucosal trauma, cardiac arrhythmias, and vagal-mediated bradycardia. Evidence-based protocol mandates: (1) pre-oxygenate (hyperoxygenate) with 100% O2 for 30–60 seconds prior to suctioning; (2) insert catheter gently WITHOUT suction until resistance is met or client coughs, then pull back 1–2 cm; (3) apply suction ONLY while withdrawing and twirling the catheter; (4) limit suction duration to <= 10–15 seconds per pass; (5) re-oxygenate between passes and allow at least 1 minute of recovery; and (6) routine normal saline instillation is strictly contraindicated as it flushes colonized biofilm into lower airways.",
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
        text: "Clamp the chest tube tightly with two padded clamps and leave it clamped for 4 hours",
      },
      {
        id: "b",
        text: "Cover the open tubing with adhesive tape and leave it open to the air",
      },
      {
        id: "c",
        text: "Pull the remaining chest tube out of the client's thoracic cavity completely",
      },
      {
        id: "d",
        text: "Immediately submerge the distal open end of the chest tube 2 to 4 cm into a bottle of sterile water or saline to re-establish a temporary water seal, while preparing a new sterile drainage unit",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "When a chest tube disconnects from its drainage canister, atmospheric air can rush into the negative-pressure pleural space, precipitating a tension pneumothorax or collapsing the lung. The immediate lifesaving action is to submerge the distal open tip of the chest tube 2 to 4 cm (1 to 2 inches) into a sterile bottle of water or normal saline kept at the bedside. This creates an immediate temporary water seal, allowing air to escape from the pleural space during exhalation while preventing air from being sucked back in during inspiration. Clamping the tube is contraindicated because trapped air cannot escape, causing tension pneumothorax.",
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
        text: "Stop staple removal immediately, apply butterfly adhesive strips (Steri-Strips) across the separated area to approximate the wound edges, place a sterile dressing, and notify the surgeon at once",
      },
      {
        id: "b",
        text: "Remove all remaining staples as quickly as possible and leave the wound open",
      },
      {
        id: "c",
        text: "Forcefully squeeze both sides of the incision with bare fingers to express all fluid",
      },
      {
        id: "d",
        text: "Instruct the client to cough vigorously while standing upright",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "When removing surgical sutures or staples, the standard procedure is to remove alternate (every other) staples first to evaluate wound tensile strength and structural integrity. If wound separation (dehiscence) occurs upon removing initial staples, the nurse must STOP removal immediately. The nurse should support the dehiscence with wound closure strips (Steri-Strips) placed perpendicular to the incision, apply a sterile dressing, keep the client calm in low Fowler's position with knees flexed (to reduce abdominal tension), and notify the attending surgeon promptly.",
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
        text: "Compress at a rate of 60 compressions per minute to a depth of 1 cm, pausing after every 5 compressions for 20 seconds",
      },
      {
        id: "b",
        text: "Compress at a rate of 100 to 120 compressions per minute, to a depth of at least 5 cm (2 inches, max 6 cm in adults), allow complete chest wall recoil after each compression, and minimize interruptions to less than 10 seconds (ratio 30:2)",
      },
      {
        id: "c",
        text: "Compress only the abdomen and lean continuously on the sternum without recoil",
      },
      {
        id: "d",
        text: "Perform only mouth-to-mouth ventilations without chest compressions",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "High-quality CPR is the primary determinant of cardiac arrest survival: (1) Compression rate of 100 to 120 beats per minute; (2) Compression depth of at least 5 cm (2 inches) but not exceeding 6 cm (2.4 inches) in adults; (3) Allow full chest recoil after each compression (leaning prevents coronary perfusion by impeding venous return); (4) Minimize all pauses in compressions (chest compression fraction > 60–80%, pauses < 10 seconds); and (5) Compression-to-ventilation ratio of 30:2 in adults without advanced airway, rotating compressors every 2 minutes to prevent fatigue.",
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
        text: "Instruct the client to drink 2 liters of water to fully distend the urinary bladder; infuse whole blood rapidly",
      },
      {
        id: "b",
        text: "Keep the client strictly NPO for 48 hours and place a sandbag on the chest",
      },
      {
        id: "c",
        text: "Have the client empty their bladder completely (void) immediately before the procedure to avoid accidental needle puncture of the bladder; administer intravenous albumin (6 to 8 g per liter of ascites removed) when removing > 5 liters of fluid",
      },
      {
        id: "d",
        text: "Paracentesis requires zero bladder preparation or post-procedure monitoring",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Prior to abdominal paracentesis, having the client void immediately beforehand is critical: an empty bladder collapses into the deep pelvic cavity, preventing catastrophic accidental trocar laceration or perforation of the urinary bladder. For large-volume paracentesis (> 5 liters of ascitic fluid removed), rapid fluid shifts cause profound splanchnic vasodilation and arterial hypovolemia (paracentesis-induced circulatory dysfunction, PICD), leading to hepatorenal syndrome and death. To maintain effective oncotic pressure and intravascular volume, intravenous salt-poor albumin (6–8 g per liter of ascites drained beyond 5 L) is infused.",
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
        text: "Place the body in Trendelenburg position (head down) with the face uncovered in bright light",
      },
      {
        id: "b",
        text: "Wrap the body in plastic sheeting immediately before the family is allowed into the room",
      },
      {
        id: "c",
        text: "Leave all dirty linen, needles, and medical waste piled on top of the body",
      },
      {
        id: "d",
        text: "Elevate the head of the bed slightly (about 15 to 30 degrees or place a pillow under the head) to prevent blood pooling and facial lividity; gently close the eyes, insert dentures or support the jaw, bathe soiled skin, and maintain a calm, clean environment",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Post-mortem care honors client dignity and provides compassionate closure for grieving families: (1) elevate the head of the bed 15–30 degrees or place a pillow under the head promptly to prevent dependent blood pooling (livor mortis) in the face, which causes purple discoloration; (2) close the eyelids gently; (3) insert dentures and support the lower jaw with a rolled towel under the chin before rigor mortis sets in; (4) remove non-forensic invasive tubes/catheters (unless an autopsy/coroner's inquest is mandated); (5) cleanse soiled body areas and replace soiled bed linens; and (6) position clean sheets neatly to the shoulders for family viewing.",
    strategy: "Post-mortem care: Elevate head with pillow (prevents facial blood pooling/lividity) + close eyes & support jaw + wash & clean linens before family viewing.",
    difficulty: "easy",
    tags: ["procedures", "post-mortem-care", "dignity", "end-of-life", "nursing-ethics"],
    isFree: true,
  },
];
