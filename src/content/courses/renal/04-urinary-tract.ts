import type { CourseModule } from "../types";

export const urinaryTract: CourseModule = {
  slug: "urinary-tract-disorders",
  title: "Urinary tract disorders and catheter care",
  summary: "Urinary tract infection and the catheter that so often causes it; urinary retention, incontinence and the enlarged prostate; and the stones and schistosomiasis that make Ghanaian patients pass blood.",
  lessons: [
    {
      slug: "urinary-tract-infection-and-catheter-care",
      title: "Urinary tract infection and urinary catheter care",
      minutes: 16,
      objectives: [
        "Differentiate cystitis, pyelonephritis and asymptomatic bacteriuria and recognise UTI in children, pregnant women and older adults.",
        "Describe treatment and prevention of UTI, including in pregnancy.",
        "Catheterise safely, choosing the right catheter and technique for men, women and children.",
        "Prevent catheter-associated UTI with closed drainage, daily care and early removal.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The commonest bacterial infection in hospital — and mostly our fault",
          paragraphs: [
            "Urinary tract infection happens when bowel organisms — <em>Escherichia coli</em> in about 80% of cases, then <em>Klebsiella</em>, <em>Proteus</em>, <em>Enterococcus</em>, <em>Pseudomonas</em> and <em>Staphylococcus saprophyticus</em> in young women — climb the urethra into the bladder (<strong>cystitis</strong>) and sometimes the ureters to the kidney (<strong>pyelonephritis</strong>). Women are affected far more often because the urethra is short and close to the anus; sexual intercourse, pregnancy, menopause, diabetes, stones, incomplete emptying (prostate, neuropathic bladder, constipation) and above all the <strong>urinary catheter</strong> make it more likely.",
            "<strong>Catheter-associated UTI (CAUTI)</strong> is the commonest healthcare-associated infection. Bacteria reach the bladder along the outside of the catheter or up the inside of a broken drainage system; the risk rises about 3–7% for every day the catheter stays in, so by a month nearly every catheterised patient has bacteria in the urine. Most catheters in hospital are not needed — removing them is infection control.",
          ],
        },
        {
          type: "table",
          heading: "Recognising UTI in different patients",
          columns: ["Patient", "Picture", "Notes"],
          rows: [
            ["Adult woman — cystitis", "Dysuria (burning), frequency, urgency, suprapubic pain, cloudy or smelly urine, sometimes haematuria; no fever", "Dipstick: nitrites and leucocytes; culture if recurrent, pregnant, failed treatment or complicated"],
            ["Pyelonephritis", "Fever and rigors, loin pain and renal-angle tenderness, nausea and vomiting, often with cystitis symptoms; can progress to sepsis", "Blood and urine cultures before antibiotics; admit if vomiting, pregnant, septic, diabetic, obstructed or failing to improve in 48 hours"],
            ["Men", "Any UTI is 'complicated' — think prostate (prostatitis: perineal pain, tender prostate, fever), obstruction, stones; also urethritis from STIs (discharge — treat the syndrome)", "Longer courses; investigate recurrent infection"],
            ["Older adults", "Often <strong>no urinary symptoms</strong>: new confusion or delirium, falls, incontinence, going off food, 'not herself'. But smelly urine or bacteria in the urine of a well older person is <strong>not</strong> an infection — asymptomatic bacteriuria is common and is not treated", "Look for another cause of the confusion as well; hydrate; culture before treating"],
            ["Infants and young children", "Fever without a focus, vomiting, poor feeding, irritability, failure to thrive, jaundice in neonates; older children — dysuria, wetting after being dry, abdominal pain", "A clean specimen is essential (clean-catch, catheter or suprapubic aspirate); any febrile UTI under 6 months or recurrent UTI needs ultrasound to find reflux or obstruction; untreated infection scars growing kidneys"],
            ["Pregnancy", "Asymptomatic bacteriuria in 2–10% — <strong>screened and treated</strong> at booking because it progresses to pyelonephritis in a third and causes preterm labour, low birth weight and maternal sepsis", "Culture at booking; treat 7 days with nitrofurantoin (not near term), cephalexin or amoxicillin per sensitivity; repeat culture after treatment; avoid trimethoprim in the first trimester and quinolones throughout"],
            ["Catheterised patient", "Fever, rigors, new flank or suprapubic pain, new confusion, haematuria, catheter blockage; dipsticks are meaningless — bacteria are always present", "Culture from the port (ideally after changing the catheter); treat only symptomatic infection; remove or change the catheter"],
          ],
        },
        {
          type: "list",
          heading: "Treatment and prevention",
          items: [
            "<strong>Uncomplicated cystitis:</strong> nitrofurantoin 100 mg twice daily for 3–5 days (with food; not if eGFR below 45), or trimethoprim, or fosfomycin single dose, per local sensitivities — resistance to co-trimoxazole and ciprofloxacin is high in Ghana, so empirical quinolones should be avoided. Men: 7–14 days. Fluids 2–3 litres a day, paracetamol, void regularly and after intercourse; return if fever or loin pain.",
            "<strong>Pyelonephritis:</strong> cultures, then IV ceftriaxone or gentamicin (with renal function and levels) if admitted; oral ciprofloxacin or co-amoxiclav per sensitivity for 7–14 days; fluids, antipyretics, antiemetics; ultrasound if not improving in 48–72 hours (abscess, stone, obstruction — an infected obstructed kidney needs urgent drainage).",
            "<strong>Prevention teaching:</strong> drink enough to pass pale urine; do not hold urine; empty the bladder after intercourse; wipe front to back; avoid perfumed products and tight synthetic underwear; treat constipation; cotton underwear; manage diabetes; cranberry has weak evidence; vaginal oestrogen for post-menopausal recurrence; low-dose prophylaxis for frequent recurrences on specialist advice.",
            "<strong>Children:</strong> treat promptly (oral cephalexin or co-amoxiclav for 7–10 days; IV if under 3 months or septic), encourage fluids and regular voiding, treat constipation, teach hygiene, follow up for reflux.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-APR-0445.svg",
          alt: "Urinary catheterisation compared in women and men: positions, cleaning, insertion distance, the two dangers of early balloon inflation and a foreskin left retracted, and the same aftercare",
          caption: "Female urethra about 4 cm, insert 5–6 cm then a further 2 cm; male about 20 cm, penis held upright, insert to the bifurcation. Inflate the balloon only after urine flows. Replace the foreskin.",
        },
        {
          type: "list",
          heading: "Catheterisation — the procedure",
          items: [
            "<strong>Only for a real indication:</strong> acute or chronic retention, hourly urine measurement in the critically ill, peri-operative use, bladder irrigation, healing of sacral or perineal wounds in an incontinent patient, end-of-life comfort. <strong>Not</strong> for convenience, incontinence alone, or because the patient is confused. Consider intermittent catheterisation or a sheath (condom) catheter instead.",
            "<strong>Choose:</strong> the <strong>smallest size that drains</strong> — 12–14 Ch for women, 14–16 Ch for men (larger for clots or after prostate surgery, with three-way for irrigation); 6–10 Ch for children; silicone or hydrogel-coated for long-term, latex-free if allergic; balloon 10 mL (30 mL only for haemostasis after prostatectomy); a lubricant gel with lidocaine, left for 3–5 minutes in men.",
            "<strong>Aseptic technique:</strong> hand hygiene, sterile field, sterile gloves, clean the meatus with saline — women front to back, one swab per stroke, labia held apart; men foreskin retracted, circular from the meatus outwards — then clean gloves or a no-touch technique for insertion.",
            "<strong>Women:</strong> supine, knees bent and apart; insert 5–6 cm until urine flows then a further 2 cm, then inflate the balloon. If the catheter enters the vagina, leave it there as a marker and insert a new sterile catheter above it. <strong>Men:</strong> hold the penis upright at 90° to straighten the first curve, insert gently to the bifurcation (20–25 cm), lower the penis to pass the second curve; <strong>never force against resistance</strong> — ask the patient to cough or breathe deeply, and call for help if it will not pass (stricture, prostate; a false passage bleeds and infects). <strong>Replace the foreskin</strong> — a retracted foreskin causes paraphimosis, a surgical emergency.",
            "<strong>Inflate the balloon only after urine flows</strong> — an early inflation in the urethra tears it. Use sterile water, the volume written on the catheter. Secure to the thigh (or abdomen in men long term) without tension; connect to a sterile closed drainage bag; document size, balloon volume, date, residual volume drained and the reason.",
            "Drain a very full bladder <strong>fully</strong> — clamping after 500 mL is no longer recommended — but monitor for haematuria, hypotension and post-obstructive diuresis (more than 200 mL/hour needs IV replacement and electrolyte checks).",
          ],
        },
        {
          type: "list",
          heading: "Preventing catheter-associated infection — every day",
          items: [
            "<strong>Closed system:</strong> never disconnect the catheter from the bag; take specimens from the sampling port with aseptic technique; empty the bag through the tap into a clean container used for that patient only, without the tap touching the container; wash hands and wear gloves for every contact.",
            "<strong>Gravity drainage:</strong> bag below bladder level at all times, off the floor, on a stand or holder, tubing without kinks or dependent loops; never lift the bag above the bladder when moving the patient — clamp briefly if you must; leg bags during the day, a night bag connected to the leg bag at night.",
            "<strong>Meatal hygiene</strong> with soap and water (or during the daily wash) and after bowel movements; no antiseptic creams or routine bladder washouts; men — retract, clean and replace the foreskin.",
            "<strong>Fluids</strong> 2–3 litres a day unless restricted; watch for and treat constipation (a loaded rectum blocks the catheter).",
            "<strong>Review daily</strong> and remove as soon as the indication has gone — ideally within 24–48 hours after surgery; a nurse-led removal protocol prevents forgotten catheters. After removal, check the patient voids within 6–8 hours and scan or examine for retention.",
            "Change long-term catheters by the manufacturer's interval (usually 4–12 weeks) or when blocked; change the bag weekly or when soiled, damaged or disconnected; document everything on a catheter care chart.",
            "<strong>Blocked catheter:</strong> check kinks and the bag position, constipation, encrustation; a gentle saline flush per policy; change the catheter rather than repeated washouts; bypassing (leakage around the catheter) usually means blockage or bladder spasm, not a too-small catheter.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Catheter rules",
          body: "Smallest size that drains. Aseptic technique. Balloon only after urine flows. Foreskin back. Bag below the bladder and off the floor. Closed system; specimens from the port. Soap and water, not antiseptic. Review daily and take it out — each extra day adds 3–7% infection risk. Asymptomatic bacteriuria is treated only in pregnancy and before urological surgery.",
        },
      ],
      keyPoints: [
        "E. coli climbing a short female urethra causes most UTIs; catheters, pregnancy, diabetes, stones and incomplete emptying make it worse.",
        "Older adults present with confusion and falls; infants with fever and poor feeding; pregnant women are screened and treated even without symptoms; dipsticks mean nothing in catheterised patients.",
        "Culture before antibiotics for anyone complicated; nitrofurantoin for simple cystitis; avoid empirical quinolones; pyelonephritis needs cultures, IV antibiotics if unwell and ultrasound if not improving.",
        "Catheterise only for a true indication, with the smallest catheter, aseptic technique, balloon inflated after urine flows, foreskin replaced and never force past resistance.",
        "CAUTI prevention: closed system, bag below the bladder, port sampling, daily soap-and-water hygiene, fluids, and remove the catheter as early as possible.",
      ],
      quiz: {
        keywords: ["urinary tract infection", "cystitis", "pyelonephritis", "catheter", "catheteris", "foley", "indwelling", "nitrite", "dysuria", "bacteriuria", "drainage bag", "meatal", "paraphimosis", "balloon", "midstream"],
      },
    },
    {
      slug: "retention-incontinence-prostate-stones-and-schistosomiasis",
      title: "Retention, incontinence, the enlarged prostate, stones and schistosomiasis",
      minutes: 17,
      objectives: [
        "Recognise and relieve acute urinary retention and manage post-obstructive diuresis.",
        "Classify urinary incontinence and plan nursing interventions for each type.",
        "Nurse a man with benign prostatic hyperplasia before and after prostate surgery, including continuous bladder irrigation.",
        "Manage renal colic and recognise urinary schistosomiasis as a cause of haematuria in Ghana.",
      ],
      blocks: [
        {
          type: "list",
          heading: "Acute urinary retention",
          items: [
            "<strong>Causes:</strong> benign prostatic hyperplasia and prostate cancer (the commonest in men over 50), urethral stricture (after gonorrhoea or trauma), constipation, anticholinergic and opioid drugs, anaesthesia and spinal or epidural blocks, pain and immobility after surgery, pelvic masses and the retroverted gravid uterus, blood clots, spinal cord compression or injury (painless — with leg weakness and loss of anal tone: an emergency), postpartum.",
            "<strong>Recognise:</strong> inability to pass urine for several hours with increasing suprapubic pain and a palpable, dull, tender bladder rising towards the umbilicus; restlessness and confusion in the elderly; <strong>overflow dribbling</strong> — small frequent amounts passed with a full bladder — is retention, not a cure. Post-operatively, no urine 6–8 hours after surgery or after catheter removal means scan or examine.",
            "<strong>Relieve first, investigate later:</strong> privacy, an upright position, running water, a warm bath or warm perineal compress, analgesia and mobility may release a post-operative bladder; otherwise <strong>catheterise</strong> (urethral; suprapubic by the doctor if the urethra cannot be passed). Record the residual volume — more than 1 litre or chronic retention risks <strong>post-obstructive diuresis</strong>: measure hourly, replace half to all of the output above 200 mL/hour intravenously as prescribed, check electrolytes and blood pressure, and watch for haematuria from decompression.",
            "Then treat the cause: laxatives, drug review, an alpha-blocker (tamsulosin) before a trial without catheter in prostatic retention, urology referral; teach the man to pass urine regularly and to avoid holding on, alcohol and decongestants.",
          ],
        },
        {
          type: "table",
          heading: "Urinary incontinence — type decides treatment",
          columns: ["Type", "Picture", "Causes", "Nursing and treatment"],
          rows: [
            ["Stress", "Leak on coughing, sneezing, laughing, lifting", "Weak pelvic floor and sphincter: childbirth, menopause, obesity, chronic cough, prostatectomy", "<strong>Pelvic floor (Kegel) exercises</strong> — squeeze as if stopping urine and wind, hold 5–10 seconds, 10 repetitions three times a day for 3 months; weight loss; treat cough and constipation; pads; surgery (tape, bulking) if it fails"],
            ["Urge (overactive bladder)", "Sudden urgent need, leaks before reaching the toilet, frequency, nocturia", "Detrusor overactivity: ageing, stroke, Parkinson's, multiple sclerosis, UTI, bladder stones or tumour, caffeine", "<strong>Bladder training</strong> — timed voiding every 2 hours, gradually extended; cut caffeine, alcohol and fizzy drinks; treat infection; antimuscarinics (oxybutynin — dry mouth, constipation, confusion in the old) or mirabegron; commode and clear path at night"],
            ["Overflow", "Constant dribbling, poor stream, feeling of incomplete emptying, palpable bladder", "Outflow obstruction (prostate, stricture), underactive bladder (diabetic neuropathy, spinal injury, anticholinergics)", "Relieve obstruction; double voiding; <strong>clean intermittent self-catheterisation</strong> 4–6 times a day; treat constipation; drug review"],
            ["Functional", "Bladder is normal but the person cannot reach or use the toilet in time", "Immobility, arthritis, dementia, sedation, restraints, distance to the toilet, clothing, no help", "Scheduled toileting (every 2 hours and before sleep), commode or urinal within reach, call bell, easy clothing, lighting, mobility aids, enough staff — <strong>never a catheter for convenience</strong>"],
            ["Reflex / neurogenic", "No sensation, bladder empties involuntarily", "Spinal cord injury above the sacral segments", "Intermittent catheterisation or triggered voiding on a schedule; watch for autonomic dysreflexia (headache, flushing, hypertension — a full bladder is the usual trigger: catheterise immediately)"],
            ["Transient (acute)", "New incontinence in an ill or older person", "<strong>DIAPPERS</strong>: Delirium, Infection, Atrophic vaginitis, Pharmaceuticals (diuretics, sedatives, anticholinergics), Psychological, Excess urine (hyperglycaemia, heart failure), Restricted mobility, Stool impaction", "Find and reverse the cause — most resolve"],
            ["Obstetric fistula", "Continuous leakage of urine (and/or faeces) days after a prolonged obstructed labour", "Pressure necrosis between the baby's head and the pubic bone", "Catheter drainage for 2–4 weeks may allow small fistulae to heal; surgical repair at a fistula centre; skin care, hydration (dilute urine irritates less), counselling and reintegration — and prevention through the partograph and timely caesarean section"],
          ],
        },
        {
          type: "list",
          heading: "Caring for the incontinent patient — whatever the type",
          items: [
            "Assess with a 3-day bladder diary (times, volumes, drinks, leaks), a post-void residual, urinalysis and a drug review; ask directly — most people do not volunteer the problem.",
            "Skin: wash with a pH-balanced cleanser or mild soap and water promptly after each episode, pat dry, apply a barrier cream (zinc oxide or dimeticone), use absorbent products that wick moisture, change when wet; inspect for incontinence-associated dermatitis (red, moist, painful, in the skin folds — different from a pressure injury over a bony prominence).",
            "Do not restrict fluids to control leaking — concentrated urine irritates the bladder and causes infection and constipation; aim for 1.5–2 litres by day and less in the evening.",
            "Dignity: privacy, prompt response to the bell, no scolding, discreet products, odour control, clothes that are easy to remove, involve the person in the plan.",
          ],
        },
        {
          type: "text",
          heading: "Benign prostatic hyperplasia",
          paragraphs: [
            "The prostate enlarges with age in most men, narrowing the urethra and irritating the bladder. <strong>Lower urinary tract symptoms</strong> are of two kinds: voiding (hesitancy, weak intermittent stream, straining, terminal dribbling, incomplete emptying) and storage (frequency, urgency, nocturia). Complications are retention, infection, stones, haematuria, bladder damage and — if neglected — bilateral hydronephrosis and kidney failure. Assessment includes a symptom score, digital rectal examination (smooth, enlarged, rubbery — a hard, nodular or asymmetrical gland suggests cancer), urinalysis, creatinine, PSA (counsel first — it rises with infection, retention and examination as well as cancer) and ultrasound with post-void residual.",
            "Treatment is stepped: watchful waiting and lifestyle (reduce evening fluids, caffeine and alcohol, double voiding, treat constipation, avoid decongestants and anticholinergics, bladder training); <strong>alpha-blockers</strong> (tamsulosin, doxazosin — relax the bladder neck within days; postural hypotension and dizziness, take at night, retrograde ejaculation); <strong>5-alpha-reductase inhibitors</strong> (finasteride — shrink the gland over 6 months; reduced libido, halves PSA, pregnant women must not handle crushed tablets); then surgery — <strong>transurethral resection of the prostate (TURP)</strong> or laser procedures, or open prostatectomy for very large glands.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-SGY-0774.svg",
          alt: "Continuous bladder irrigation after prostate surgery: sterile saline run through a three-way catheter, the drainage colour guide, and the rule that true urine output equals drainage minus irrigant",
          caption: "What drains out is not urine. Subtract what you ran in, or you will chart a lie — and miss the retention behind a blocked catheter.",
        },
        {
          type: "list",
          heading: "After prostate surgery — the first 48 hours",
          items: [
            "<strong>Continuous bladder irrigation</strong> through a three-way catheter with sterile 0.9% saline at room temperature, run fast enough to keep the drainage <strong>pink to light red</strong> and free of clots — faster when darker, slower as it clears; never cold fluid (spasm, hypothermia) and never water or glucose (absorbed, haemolysis).",
            "<strong>True urine output = total drainage − irrigation fluid instilled</strong>, calculated hourly and charted. Drainage that stops or slows with a rising, painful bladder means <strong>clot retention</strong>: stop the irrigation, check for kinks, milk the tubing, and perform a gentle manual bladder washout with a bladder syringe and 50 mL saline if trained and permitted — call the surgeon if it does not clear.",
            "Bleeding: bright red drainage with clots, a falling blood pressure and rising pulse — increase irrigation, call, check haemoglobin, prepare blood; traction on the catheter (taped to the thigh) tamponades the prostatic bed for a few hours when prescribed.",
            "<strong>TURP syndrome</strong> (absorption of irrigation fluid during resection, mainly with glycine): confusion, restlessness, nausea, bradycardia, hypertension then hypotension, breathlessness, seizures, hyponatraemia — report immediately; check sodium.",
            "Bladder spasms (sudden cramping pain and leakage around the catheter) are common: reassure, check the catheter is draining, antispasmodics as prescribed; keep the bag below the bladder; analgesia; antibiotics as prescribed; early mobilisation and deep breathing.",
            "<strong>Discharge teaching:</strong> drink 2–3 litres a day; expect some blood in the urine and burning for a few weeks — bright bleeding or clots means return; avoid straining (stool softeners), heavy lifting, long car journeys, cycling and sexual intercourse for 4–6 weeks; pelvic floor exercises for the temporary incontinence; retrograde ejaculation is expected and permanent; erectile function is usually preserved; report fever, inability to pass urine or pain.",
          ],
        },
        {
          type: "table",
          heading: "Renal and ureteric stones",
          columns: ["Aspect", "Detail"],
          rows: [
            ["Who and why", "Men more than women, 20–50 years; dehydration and hot climates, low fluid and high salt and animal-protein intake, obesity, family history, hyperparathyroidism and hypercalcaemia, gout (uric acid stones), recurrent infection with Proteus (struvite staghorn stones), immobilisation, some drugs (indinavir, topiramate). Most stones are calcium oxalate"],
            ["Renal colic", "<strong>Sudden severe loin pain radiating to the groin, testis or labia</strong>, coming in waves, the patient writhing and unable to lie still (unlike peritonitis), nausea and vomiting, sweating, haematuria (visible or on dipstick), frequency and urgency as the stone reaches the bladder. Fever means an infected obstructed kidney — an emergency needing drainage"],
            ["Investigations", "Urinalysis, urea and electrolytes, calcium, urate, full blood count, pregnancy test in women; non-contrast CT KUB is the gold standard, ultrasound in pregnancy and where CT is unavailable; strain all urine and send the stone for analysis"],
            ["Treatment", "<strong>Analgesia first — NSAID</strong> (diclofenac 75 mg IM or 100 mg rectally, unless kidney impairment or pregnancy) with an opioid if needed, antiemetic; most stones under 5 mm pass spontaneously within 4 weeks with fluids and an alpha-blocker (tamsulosin) to relax the ureter; stones over 10 mm, persistent pain, infection, obstruction, a single kidney or kidney impairment need intervention — shock-wave lithotripsy, ureteroscopy with laser, percutaneous nephrolithotomy or a stent/nephrostomy to drain an infected kidney"],
            ["Nursing", "Pain assessment and prompt analgesia; oral or IV fluids 2–3 litres unless obstructed and vomiting (do not force-flood an obstructed kidney); <strong>strain every specimen of urine</strong> through gauze or a filter; monitor temperature, urine output and haematuria; antiemetics; mobilise"],
            ["Prevention", "Drink enough to pass 2–2.5 litres of pale urine a day, more in the heat; reduce salt and animal protein; keep normal dietary calcium (restricting calcium increases oxalate stones); limit oxalate-rich foods if advised; citrus juice; treat infection and hyperparathyroidism; allopurinol for uric acid stones; thiazides for recurrent calcium stones"],
          ],
        },
        {
          type: "list",
          heading: "Urinary schistosomiasis — the Ghanaian cause of blood in the urine",
          items: [
            "<em>Schistosoma haematobium</em> larvae (cercariae) released by freshwater snails penetrate the skin of children and adults who swim, bathe, fish, fetch water or farm in infested rivers, dams, lakes and irrigation canals — including the Volta basin and many rural communities. Adult worms live in the veins around the bladder and lay eggs that pass through the bladder wall.",
            "<strong>Picture:</strong> <strong>terminal haematuria</strong> (blood at the end of the stream) in a school-age child or young adult, dysuria, frequency, suprapubic pain; itching rash at the entry site weeks earlier; long term — bladder fibrosis and calcification, ureteric obstruction and hydronephrosis, kidney failure, recurrent infection, infertility, female genital schistosomiasis (increasing HIV risk) and <strong>squamous bladder cancer</strong> in adults.",
            "<strong>Diagnosis:</strong> urine microscopy for terminal-spined eggs in a midday urine (peak egg output between 10 am and 2 pm), dipstick haematuria as a screening tool in endemic areas, ultrasound for bladder and kidney damage.",
            "<strong>Treatment:</strong> <strong>praziquantel 40 mg/kg</strong> orally as a single dose (or split into two doses) with food — dizziness, nausea and abdominal pain are brief; retreat after 4–6 weeks if eggs persist; mass drug administration in schools under the neglected tropical disease programme.",
            "<strong>Prevention and nursing teaching:</strong> avoid contact with infested water where alternatives exist; safe water supply and latrines (eggs reach water in urine and stool); snail control; health education in schools; screen and treat; any adult with persistent haematuria after treatment needs cystoscopy for cancer.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Patterns to recognise",
          body: "Dribbling with a palpable bladder = overflow from retention, not incontinence. Writhing loin-to-groin pain with haematuria = renal colic: NSAID first, strain the urine, fever means drain the kidney. Terminal haematuria in a child who swims in the river = schistosomiasis: praziquantel 40 mg/kg. After TURP: pink drainage, true urine = drainage minus irrigant, clot retention = stop irrigation and call.",
        },
      ],
      keyPoints: [
        "Acute retention is relieved first (privacy, warmth, mobility, then a catheter) and investigated second; record the residual and watch for post-obstructive diuresis above 200 mL/hour.",
        "Incontinence is stress (pelvic floor exercises), urge (bladder training), overflow (relieve obstruction, intermittent catheterisation), functional (scheduled toileting and access) or transient (DIAPPERS) — a catheter is never the answer to incontinence alone.",
        "BPH: lifestyle, alpha-blockers (postural hypotension), finasteride (6 months), then TURP; after surgery keep irrigation pink, subtract irrigant from drainage, and treat clot retention and TURP syndrome as emergencies.",
        "Renal colic: NSAID analgesia first, fluids, strain all urine, most small stones pass; fever with obstruction needs urgent drainage; prevent with 2–2.5 litres of pale urine a day.",
        "Terminal haematuria in Ghana is schistosomiasis until proven otherwise — midday urine for eggs, praziquantel 40 mg/kg, safe water and school programmes.",
      ],
      quiz: {
        keywords: ["urinary retention", "incontinence", "pelvic floor", "kegel", "bladder training", "prostat", "turp", "bladder irrigation", "renal colic", "kidney stone", "renal calcul", "schistosom", "praziquantel", "haematuria", "overflow", "fistula"],
      },
    },
  ],
};
