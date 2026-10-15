import type { CourseModule } from "../types";

export const renalReplacement: CourseModule = {
  slug: "renal-replacement-therapy",
  title: "Dialysis and kidney transplantation",
  summary: "What haemodialysis and peritoneal dialysis do, how to care for the access that keeps a patient alive, the complications of each treatment, and the nursing of the kidney transplant recipient. A closing drill rehearses the emergencies: hypotension, dialyser reactions, air embolism, bleeding access and peritonitis.",
  lessons: [
    {
      slug: "dialysis-and-transplant-nursing",
      title: "Haemodialysis, peritoneal dialysis and transplant nursing",
      minutes: 18,
      objectives: [
        "Explain the principles of diffusion, ultrafiltration and osmosis as used in dialysis.",
        "Care for an arteriovenous fistula, a dialysis catheter and a peritoneal dialysis catheter, and recognise access complications.",
        "Monitor a patient before, during and after haemodialysis and recognise hypotension, disequilibrium and other complications.",
        "Teach peritoneal dialysis exchanges and recognise peritonitis; describe the care of a kidney transplant recipient.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Replacing the filter",
          paragraphs: [
            "When the kidneys can no longer keep the patient alive — refractory hyperkalaemia, overload, acidosis, uraemic symptoms, usually at an eGFR below 10–15 — three options exist: <strong>haemodialysis</strong> (blood is pumped through an artificial kidney and returned), <strong>peritoneal dialysis</strong> (the patient's own peritoneum is the membrane, with fluid run into and out of the abdomen) and <strong>transplantation</strong> (a donated kidney replaces every function, at the price of lifelong immunosuppression). None cures the underlying disease, and all depend on the nurse who protects the access, watches the fluid and electrolytes and teaches the patient.",
            "All dialysis works by three physical processes. <strong>Diffusion</strong>: solutes (urea, creatinine, potassium) move across a semi-permeable membrane from blood into dialysate down their concentration gradient, while bicarbonate moves the other way. <strong>Ultrafiltration</strong>: water is pulled across by pressure (haemodialysis) or by osmosis using glucose in the dialysate (peritoneal dialysis). <strong>Osmosis and convection</strong> carry water and the solutes dissolved in it.",
          ],
        },
        {
          type: "table",
          heading: "Haemodialysis and peritoneal dialysis compared",
          columns: ["", "Haemodialysis", "Peritoneal dialysis"],
          rows: [
            ["How", "Blood at 250–400 mL/min through a dialyser against counter-current dialysate for about 4 hours, three times a week, in a unit (or at home); heparin in the circuit", "Dialysate (1.5–2.5 L with 1.36–3.86% glucose, or icodextrin) instilled through a Tenckhoff catheter, dwells for hours, drained; continuous ambulatory PD — four exchanges a day by hand; automated PD — a machine cycles overnight"],
            ["Access", "<strong>Arteriovenous fistula</strong> (best — radiocephalic or brachiocephalic, created 2–6 months before use), AV graft, or a tunnelled central venous catheter (jugular) as a bridge or last resort; temporary femoral or jugular catheter for AKI", "Tenckhoff catheter in the lower abdomen, tunnelled, used 2 weeks after insertion"],
            ["Suits", "Patients near a unit, with good vascular access, who cannot or will not do self-care; emergencies", "Children, people far from units, those with cardiovascular instability, those who value independence; needs a clean space at home, storage for fluid, good eyesight and hands or a trained helper"],
            ["Diet and fluid", "Stricter: fluid 500 mL plus urine output; potassium, phosphate and salt restriction; protein 1.0–1.2 g/kg", "More liberal fluid and potassium (continuous clearance); more protein needed (1.2–1.3 g/kg — lost in dialysate); glucose load — weight gain and hyperglycaemia"],
            ["Main complications", "Hypotension, cramps, nausea, disequilibrium, access failure and infection, bleeding from heparin, air embolism, haemolysis, hepatitis B and C transmission, cardiac events", "<strong>Peritonitis</strong>, exit-site and tunnel infection, catheter blockage or displacement, hernias and leaks, back pain, constipation causing poor drainage, membrane failure over years, hyperglycaemia"],
            ["In Ghana", "Available in Accra, Kumasi, Cape Coast, Tamale, Ho and a growing number of regional and private centres; the cost per session is beyond most families and NHIS cover is limited; many patients dialyse once or twice a week or stop", "Limited availability and the cost of fluid; used mainly in children and in a few centres"],
          ],
        },
        {
          type: "list",
          heading: "Protecting the lifeline — the arteriovenous fistula",
          items: [
            "<strong>Check it every shift and teach the patient to check it daily:</strong> feel for the <strong>thrill</strong> (a buzzing vibration) and listen for the <strong>bruit</strong> (a continuous whoosh) over the fistula. <strong>Loss of thrill or bruit means it has clotted — report immediately</strong>; early intervention can save it.",
            "<strong>Nothing on the fistula arm:</strong> no blood pressure cuff, no venepuncture, no cannula, no tight sleeves, watches, bangles or bags over the arm, no sleeping on it, no carrying heavy loads with it; a sign above the bed and a wristband on the other arm; teach the patient to refuse.",
            "Look for infection (redness, warmth, pus, fever), aneurysm (bulging, shiny thin skin — a rupture bleeds to death in minutes), steal syndrome (cold, pale, painful, numb hand beyond the fistula — report), and bleeding from needle sites after dialysis (press firmly for 10–15 minutes without occluding the fistula; a bleed that does not stop needs medical review).",
            "Keep the skin clean; no scratching; exercise the arm with a soft ball while the fistula matures; rotate needle sites (rope-ladder or buttonhole technique) to prevent aneurysm.",
            "<strong>Dialysis catheters</strong> (tunnelled or temporary): never used for anything but dialysis without instruction — the lumens are locked with concentrated heparin or citrate that must be withdrawn before use; strict aseptic dressing changes; look for exit-site redness and tunnel tenderness; fever on dialysis means a line infection until proven otherwise — blood cultures from the line and peripherally; keep clamped and capped; patient must not get it wet.",
          ],
        },
        {
          type: "table",
          heading: "The haemodialysis session — the nurse's observations",
          columns: ["When", "Do", "Why"],
          rows: [
            ["Before", "Weigh (the gain since last session is the fluid to remove, compared with the <strong>dry weight</strong>); blood pressure sitting and standing, pulse, temperature, breathing, oedema; check the access; review bloods (potassium, haemoglobin), medications and whether any have been withheld (antihypertensives are often omitted before dialysis to avoid hypotension; water-soluble drugs and some antibiotics are given after); ask about bleeding, falls, symptoms since the last session; blood glucose in diabetics", "Sets the ultrafiltration goal and catches the patient who is unfit to dialyse"],
            ["During", "Observations every 30 minutes or more; watch for <strong>hypotension</strong> (yawning, nausea, sweating, cramps, dizziness — stop ultrafiltration, lay flat, saline bolus 100–250 mL), cramps (reduce ultrafiltration, saline, stretch), chest pain and arrhythmia (potassium shifts, ischaemia — ECG, stop and call), bleeding at the access or circuit disconnection, air in the line, allergic reactions to the dialyser (first-use syndrome), fever and rigors (line infection, pyrogens — cultures), itching; glucose in diabetics", "Removing 2–4 litres in four hours stresses the circulation; most problems appear in the last hour"],
            ["After", "Needles out and pressure held until haemostasis; weight (compare with the goal), blood pressure lying and standing before the patient walks; access checked (thrill); document fluid removed, bloods taken, problems and drugs given; next session date; dietary and fluid teaching reinforced", "Post-dialysis hypotension and falls are common; the weight closes the loop on the fluid plan"],
            ["Dialysis disequilibrium syndrome", "Headache, nausea, restlessness, blurred vision, confusion, twitching, seizures and coma during or after a first or very efficient session in a patient with very high urea — urea leaves blood faster than brain, water shifts into the brain", "Prevent with short, gentle first sessions; treat with slowing or stopping, mannitol or hypertonic saline, seizure management"],
          ],
        },
        {
          type: "list",
          heading: "Peritoneal dialysis — teaching and surveillance",
          items: [
            "<strong>The exchange:</strong> hand hygiene, mask, clean surface, check the bag (correct strength, clear, in date, warmed to body temperature in a dry warmer — never a microwave or hot water), connect using the aseptic technique taught, <strong>drain</strong> the old fluid by gravity (20–30 minutes), <strong>flush</strong> and <strong>fill</strong> the new fluid (10 minutes), disconnect and cap; record the time, the fluid strength, the volume in and out, and the net balance (out minus in).",
            "<strong>Inspect every drained bag:</strong> it should be clear and pale yellow. <strong>Cloudy effluent means peritonitis</strong> until proven otherwise — with abdominal pain, fever, nausea, and a tender abdomen; send the effluent for cell count, Gram stain and culture, then intraperitoneal antibiotics per protocol, and review technique. Bloody effluent after exertion or during menstruation is usually benign; fibrin strands may need heparin in the bag.",
            "<strong>Exit site:</strong> daily cleaning with soap and water or antiseptic as taught, dry dressing, catheter anchored to prevent pulling, no swimming in rivers or public pools, no submersion until healed; redness, crusting, pus or tenderness along the tunnel means infection — swab and treat early, because it leads to peritonitis.",
            "<strong>Drainage problems:</strong> slow or incomplete drainage is most often <strong>constipation</strong> (a loaded bowel kinks the catheter) — laxatives are part of PD life; also fibrin, position (sit up, walk), kinked tubing, or a displaced catheter (X-ray). Leaks around the catheter or into the genitals need rest from PD; hernias need surgical repair.",
            "<strong>Fluid balance:</strong> higher-glucose bags remove more water — the patient learns to choose strength by weight, blood pressure and oedema; daily weight and blood pressure diary; signs of overload or dehydration reported.",
            "<strong>Living with PD:</strong> protein-rich diet, control blood glucose, exercise with the abdomen supported, protect the catheter during sex and bathing, store a month's fluid in a cool clean place, keep a supply at work or school, and have a plan for power cuts (automated PD) and travel.",
          ],
        },
        {
          type: "list",
          heading: "The kidney transplant recipient",
          items: [
            "Transplantation gives the best survival and quality of life. In Ghana living related donation at Korle Bu and a few other centres is the main route; preparation includes tissue typing, hepatitis B and C and HIV screening, dental and infection clearance, vaccination (hepatitis B, pneumococcal, influenza — no live vaccines after transplant) and counselling for donor and recipient.",
            "<strong>First days after surgery:</strong> hourly urine output through the catheter (a living-donor kidney usually works immediately; a sudden fall means obstruction, clot, hypovolaemia, vascular problem or rejection — check the catheter, then call); fluid replacement millilitre for millilitre with output plus insensible losses; daily weight; electrolytes (potassium, magnesium, phosphate), creatinine twice daily; wound and drain care; pain control; early mobilisation; protective isolation is not needed but strict hand hygiene and avoidance of infected visitors are.",
            "<strong>Immunosuppression for life</strong> — usually tacrolimus (or ciclosporin), mycophenolate and prednisolone, plus induction antibodies: taken at the same times every day, never missed, never stopped, levels monitored (tacrolimus trough); teach interactions (grapefruit, clarithromycin, fluconazole, rifampicin, St John's wort, some antiretrovirals — <strong>always ask before any new medicine, including herbal</strong>), and side effects — tremor, hypertension, diabetes, kidney toxicity, raised lipids, gum hypertrophy (ciclosporin), diarrhoea and marrow suppression (mycophenolate — teratogenic: contraception essential), and the steroid effects.",
            "<strong>Rejection:</strong> rising creatinine, falling urine output, fever, graft tenderness and swelling, weight gain, hypertension — often with no symptoms at all, which is why bloods are frequent; confirmed by biopsy and treated with high-dose steroids or antibodies.",
            "<strong>Infection:</strong> the price of immunosuppression — urinary and chest infections, cytomegalovirus (prophylaxis with valganciclovir for 3–6 months), <em>Pneumocystis</em> (co-trimoxazole prophylaxis), BK virus, TB reactivation, fungal infections, and in Ghana malaria and typhoid as well; any fever is urgent; food hygiene, safe water, mosquito protection, avoid crowds in the early months and sick contacts always.",
            "<strong>Long-term:</strong> cardiovascular risk management, skin cancer prevention (sun protection — immunosuppression raises the risk even in dark skin), cervical screening, bone protection, blood pressure and glucose monitoring, no NSAIDs, adherence support — non-adherence is the leading cause of late graft loss in young adults — and pregnancy only after planning with the transplant team (at least a year, with mycophenolate switched).",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Infection control in the dialysis unit",
          body: "Hepatitis B and C spread between patients through blood on hands, surfaces and shared equipment. Every patient is screened; hepatitis B-positive patients dialyse on dedicated machines in a separate area; staff and patients are vaccinated and antibody levels checked; gloves are changed and hands cleaned between every patient and every station; surfaces, clamps and blood-pressure cuffs are cleaned between patients; medication vials are single-patient; needles are never recapped. One lapse infects a whole unit.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Access and alarm signs",
          body: "Fistula: feel the thrill, hear the bruit — loss means clotting; no BP, needles or pressure on that arm. Haemodialysis: weigh before and after, watch for hypotension and cramps in the last hour, disequilibrium in the first sessions. PD: cloudy effluent = peritonitis; poor drainage = constipation first. Transplant: falling urine or rising creatinine = obstruction or rejection; fever = urgent; immunosuppressants are never missed.",
        },
      ],
      keyPoints: [
        "Dialysis uses diffusion for solutes and ultrafiltration or osmosis for water; haemodialysis three times a week through a fistula, graft or catheter; peritoneal dialysis daily through the patient's own peritoneum.",
        "Protect the fistula arm absolutely; check the thrill and bruit every shift; loss of either, bleeding, infection, aneurysm and a cold hand are reported at once.",
        "Weigh before and after haemodialysis, watch for hypotension, cramps, chest pain and disequilibrium, hold pressure on needle sites and check standing blood pressure before the patient leaves.",
        "Peritoneal dialysis depends on aseptic technique at every exchange: cloudy effluent is peritonitis, poor drainage is usually constipation, and the exit site is inspected daily.",
        "Transplant recipients take immunosuppressants for life, are watched for rejection (creatinine, urine output) and infection (any fever), and must never start a new drug without asking.",
      ],
      quiz: {
        keywords: ["dialysis", "haemodialysis", "peritoneal", "fistula", "arteriovenous", "thrill", "bruit", "transplant", "immunosuppress", "tacrolimus", "rejection", "peritonitis", "effluent", "tenckhoff", "dry weight", "disequilibrium", "chronic kidney", "renal failure", "kidney failure", "hepatitis b", "heparin"],
      },
    },
    {
      slug: "dialysis-emergencies-drill",
      title: "Dialysis emergencies drill",
      minutes: 14,
      objectives: [
        "Recognise and respond to intradialytic hypotension, cramps, disequilibrium and dialyser reactions.",
        "Act on air embolism, haemolysis, access bleeding and hyperkalaemia without delay.",
        "Manage peritonitis, exit-site infection, outflow failure and fluid leaks in peritoneal dialysis.",
        "Apply the first-five-minutes routine to any dialysis emergency.",
      ],
      blocks: [
        {
          type: "text",
          heading: "A drill, not a lecture",
          paragraphs: [
            "The previous lesson taught the treatments; this one drills the emergencies. Each table row is a scenario — cover the right column, name the emergency from the middle, and say your first three actions aloud before checking. In a dialysis emergency the order never changes: keep the patient alive, stop the harm, then call for help and document — and every minute of delay in peritonitis, air embolism or a bleeding fistula costs function or life.",
          ],
        },
        {
          type: "table",
          heading: "On haemodialysis — the emergency drill",
          columns: ["Emergency", "First signs", "Immediate actions"],
          rows: [
            ["<strong>Intradialytic hypotension</strong>", "Yawning, nausea, cramps, dizziness, falling pressure — too much fluid off too fast", "Stop ultrafiltration, recline the chair, small fluid bolus (100–200 mL saline), recheck pressure every few minutes, reduce the target weight loss"],
            ["<strong>Muscle cramps</strong>", "Painful calf or hand cramps mid-session with hypotension", "Stop ultrafiltration, stretch and massage, warm compresses, saline bolus if hypotensive, review dry weight and dialysate sodium after"],
            ["<strong>Disequilibrium syndrome</strong>", "Headache, nausea, restlessness then drowsiness or seizures — first sessions, very high urea cleared too fast", "Slow or stop dialysis, protect the airway, urgent doctor call, anticonvulsant per protocol — prevent with short slow first sessions"],
            ["<strong>Dialyser (first-use) reaction</strong>", "Minutes after start: itching, flushing, wheeze, chest or back pain, hypotension", "Stop dialysis immediately — DO NOT return the blood — discard the circuit blood, oxygen, IV fluids, adrenaline, antihistamine and steroid per anaphylaxis protocol"],
            ["<strong>Haemolysis</strong>", "Burgundy blood in the venous line, chest pain, breathlessness, falling haematocrit", "Clamp the venous line — do NOT return the blood — stop the pump, oxygen, urgent labs (potassium rises fast), find the cause (kinked line, faulty heat, water problem)"],
            ["<strong>Air embolism</strong>", "Sudden breathlessness, cough, chest pain, confusion or collapse with air visible in lines", "Clamp the venous line, left-side head-down position, 100% oxygen, urgent doctor call — check every connection before every session so it never happens"],
            ["<strong>Access bleed or thrombosis</strong>", "Bleeding that will not stop after needle removal, or a fistula with no thrill and no bruit", "Bleed: firm direct pressure 10–15 minutes without peeking, pressure dressing, check haemoglobin; clotted: keep the arm still, no cannulation, urgent vascular call — report at once, not at handover"],
            ["<strong>Hyperkalaemia before dialysis</strong>", "Peaked T waves, widening QRS, weakness — the reason dialysis cannot wait", "ECG now, calcium to protect the heart, insulin-glucose to shift potassium, salbutamol nebuliser, urgent dialysis"],
          ],
        },
        {
          type: "table",
          heading: "On peritoneal dialysis — the emergency drill",
          columns: ["Emergency", "First signs", "Immediate actions"],
          rows: [
            ["<strong>Peritonitis</strong>", "Cloudy effluent, abdominal pain, fever — sometimes cloudy fluid alone", "Sample the FIRST cloudy bag for cell count and culture BEFORE antibiotics, start intraperitoneal antibiotics per protocol the same day, monitor pain, fever and fluid clarity daily — delayed treatment loses the membrane"],
            ["<strong>Exit-site or tunnel infection</strong>", "Redness, swelling, discharge or pain at the catheter exit — with fever if the tunnel is involved", "Swab and culture, topical or oral antibiotics per protocol, daily exit-site care, watch for tunnel tenderness — tunnel infections often need catheter removal"],
            ["<strong>Outflow failure</strong>", "Fluid goes in but will not drain — constipation is the commonest cause, then catheter migration or fibrin", "Laxatives first, check for kinks, try repositioning (walk, roll side to side), flush per protocol — heparin or urokinase for fibrin, X-ray if migrated"],
            ["<strong>Dialysate leak</strong>", "Wet dressing, swelling of scrotum, labia or abdominal wall, poor drains", "Pause exchanges or go low-volume, keep the exit site dry and dressed, inform the team — early leaks need rest days; genital oedema needs urgent review"],
            ["<strong>Fluid overload or dehydration</strong>", "Overload: breathlessness, oedema, hypertension; dehydration: cramps, hypotension, dizziness", "Overload: stronger glucose bags per prescription, salt and fluid review, urgent haemodialysis if pulmonary oedema; dehydration: weaker bags, review target weight and diuretics"],
          ],
        },
        {
          type: "list",
          heading: "The first five minutes — every emergency",
          items: [
            "<strong>Call for help early</strong> — press the bell and send for the nurse in charge and the doctor while you act; a second pair of hands is treatment.",
            "<strong>Position for the problem:</strong> recline for hypotension, sit up for breathlessness and pulmonary oedema, left-side head-down for air embolism, flat and still for a bleeding fistula.",
            "<strong>Stop the harm safely:</strong> pause ultrafiltration, clamp the right line, never return blood in dialyser reactions or haemolysis, sample cloudy effluent before antibiotics.",
            "<strong>Measure what matters:</strong> blood pressure, pulse, oxygen saturation, glucose and temperature now and every few minutes — trends decide escalation better than single numbers.",
            "<strong>Document times, not essays:</strong> when it started, what you saw, what you did and when, who you called and what they ordered — the audit trail protects the patient and you.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Two never-events to memorise",
          body: "Air in the circuit: clamp the venous line, left-side head-down, 100% oxygen, urgent call — and check every connection before every session. A fistula with no thrill and no bruit has clotted: nothing goes into that arm, and vascular surgery hears about it now, not at handover.",
        },
      ],
      keyPoints: [
        "Hypotension and cramps: stop ultrafiltration, recline, saline bolus, lower the target — most episodes end there.",
        "Dialyser reaction and haemolysis: never return the blood — clamp, discard the circuit, treat anaphylaxis or hyperkalaemia and find the cause.",
        "Air embolism: clamp, left-side head-down, 100% oxygen, urgent call.",
        "Cloudy effluent is peritonitis until cultured: sample the first bag, then intraperitoneal antibiotics the same day.",
        "Every emergency runs the same five minutes: help, position, stop the harm, measure, document.",
      ],
      quiz: {
        keywords: ["dialysis", "haemodialysis", "hemodialysis", "peritoneal dialysis", "capd", "renal failure", "chronic kidney", "acute kidney", "uraemia", "hyperkalaemia", "peritonitis", "peritoneal", "cloudy effluent", "disequilibrium", "fistula", "arteriovenous fistula", "fluid overload", "pulmonary oedema", "metabolic acidosis", "hypotension", "air embolism", "haemolysis", "ultrafiltration"],
      },
    }
  ],
};
