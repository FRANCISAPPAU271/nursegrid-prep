import type { CourseModule } from "../types";

export const preventingDeviceAndProcedureRelatedInfections: CourseModule = {
  slug: "preventing-device-and-procedure-related-infections",
  title: "Preventing device- and procedure-related infections",
  summary: "The four infections that make up most health care-associated infection and the bundles that prevent them: surgical site infection — classification, risk factors, pre-, intra- and post-operative prevention, antibiotic prophylaxis timing, recognising wound infection against normal healing, post-operative fever by the day, dehiscence and puerperal sepsis; then catheter-associated urinary tract infection, peripheral cannula and central line bloodstream infection, ventilator- and hospital-acquired pneumonia, and the sepsis that follows when they are missed — recognised and treated within the hour.",
  lessons: [
    {
      slug: "surgical-site-infection-and-wound-infection",
      title: "Surgical site infection and wound infection",
      minutes: 18,
      objectives: [
        "Define and classify surgical site infection, name the patient-, procedure- and environment-related risk factors, and explain why it is the commonest health care-associated infection in Ghana.",
        "Apply the evidence-based measures that prevent it before, during and after the operation, including the correct timing of antibiotic prophylaxis and why it is not continued.",
        "Distinguish normal inflammation and colonisation from wound infection, read a post-operative fever by the day, and recognise dehiscence, gas gangrene and puerperal sepsis.",
        "Take a wound swab correctly, document a wound assessment and give the discharge advice that stops the infection appearing at home.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The commonest infection a Ghanaian hospital gives its patients",
          paragraphs: [
            "A <strong>surgical site infection</strong> (SSI) is an infection of the incision or of the organ or space that was opened, occurring within <strong>30 days</strong> of the operation (<strong>90 days</strong> where an implant was left). It is classified as <strong>superficial incisional</strong> (skin and subcutaneous tissue — redness, pain, purulent discharge), <strong>deep incisional</strong> (fascia and muscle — dehiscence, abscess, fever) or <strong>organ/space</strong> (the cavity — peritoneal abscess, endometritis after caesarean section, empyema). In sub-Saharan Africa the pooled rate is around one operation in ten, several times that of high-income countries, and in Ghanaian studies SSI follows roughly one caesarean section in ten and a larger share of emergency laparotomies. It is the commonest HAI on the continent, the commonest reason a surgical patient returns, and the commonest reason a mother's recovery from caesarean section becomes a month in hospital.",
            "Organisms come from three sources: the <strong>patient's own flora</strong> (skin staphylococci for clean operations; bowel organisms when the gut is opened; vaginal flora at caesarean section) — the majority; the <strong>surgical team's hands, hair, nose and breath</strong>; and the <strong>theatre environment and instruments</strong>. Prevention is therefore aimed at all three, and the most effective measures are the least glamorous — skin antisepsis, a timed antibiotic, warm and well-oxygenated tissue, good glucose control and a short operation by a team that keeps the door shut.",
          ],
        },
        {
          type: "table",
          heading: "Wound classification and risk — why the same operation infects different patients",
          columns: ["Factor", "Detail", "What the nurse does"],
          rows: [
            ["<strong>Wound class</strong>", "<strong>Clean</strong> (no viscus opened, no inflammation — hernia, thyroid: 1–2 per cent); <strong>clean-contaminated</strong> (respiratory, gut, genital or urinary tract opened under control — caesarean, cholecystectomy: 5–10 per cent); <strong>contaminated</strong> (spillage, fresh trauma, open fracture: 10–20 per cent); <strong>dirty</strong> (pus, perforation, old trauma: 20–40 per cent).", "Dirty and contaminated wounds are often left open and closed later (delayed primary or tertiary intention); do not expect or demand a sutured closure."],
            ["<strong>Patient factors</strong>", "Diabetes and peri-operative hyperglycaemia, obesity, malnutrition and low albumin, anaemia, smoking, immunosuppression and HIV with a low CD4, extremes of age, remote infection elsewhere (urine, skin, teeth), prolonged pre-operative stay, nasal carriage of S. aureus.", "Optimise before elective surgery: glucose, haemoglobin, nutrition, treat remote infection, stop smoking; admit on the day where possible."],
            ["<strong>Procedure factors</strong>", "Emergency surgery, duration over two hours, blood loss and transfusion, hypothermia, hypoxia, drains and implants, poor haemostasis and dead space, razor shaving, inadequate skin preparation, broken sterile technique, theatre traffic.", "Keep the patient warm and oxygenated, prepare the skin correctly, keep doors shut and people few, remove drains early."],
            ["<strong>Antibiotic prophylaxis</strong>", "A single intravenous dose within the <strong>60 minutes before incision</strong> (120 minutes for vancomycin and fluoroquinolones), chosen for the expected flora (commonly cefazolin or cefuroxime; add metronidazole for bowel; cefazolin before the skin incision at caesarean section), repeated only if the operation exceeds two half-lives or blood loss is heavy, and <strong>stopped at the end of the operation</strong> — not continued for days.", "Given at induction by the anaesthetist or the nurse on the checklist; the nurse checks it was given before the knife and questions the five-day \"prophylaxis\" that follows, because it breeds resistance and prevents nothing."],
          ],
        },
        {
          type: "list",
          heading: "Preventing SSI — before, during and after",
          items: [
            "<strong>Before</strong>: bathe or shower with soap (or an antiseptic) the night before or the morning of surgery; <strong>do not shave</strong> — if hair must be removed, use clippers immediately before the operation, never a razor the night before, because razor micro-abrasions become colonised; treat remote infections; control glucose (aim below 10 mmol/L peri-operatively); correct anaemia and nutrition where time allows; screen for and decolonise S. aureus nasal carriers before cardiac and orthopaedic implants where the service exists.",
            "<strong>During</strong>: surgical hand antisepsis; skin preparation with <strong>alcohol-based chlorhexidine</strong> (2 per cent chlorhexidine in 70 per cent alcohol) applied in friction and <strong>allowed to dry completely</strong> — povidone-iodine-alcohol if chlorhexidine is unavailable or contraindicated; timed antibiotic prophylaxis; <strong>normothermia</strong> (active warming, warmed fluids — a patient at 35 °C has vasoconstricted, hypoxic, poorly healing tissue); adequate oxygenation; good glucose control; sterile technique with impervious drapes and gowns; minimal traffic and closed doors; gentle tissue handling, haemostasis and no dead space; the <strong>WHO Surgical Safety Checklist</strong>, whose sign-in and time-out include the antibiotic question.",
            "<strong>After</strong>: a sterile dressing left undisturbed for <strong>24–48 hours</strong> unless soaked or the wound needs inspection, then changed with aseptic technique; hand hygiene before and after any contact with the wound; <strong>drains removed as soon as output allows</strong>; glucose control continued; early feeding and mobilisation; the patient taught to keep the wound clean and dry, not to apply herbs, shea butter or powders, and to report pain that increases rather than settles, spreading redness, discharge, odour or fever; surveillance of every patient to 30 days, including a telephone call or review after discharge, because most SSIs now declare themselves at home.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-OPR-1156.svg",
          alt: "Inflammation and the wound — the five signs are not the enemy but the repair process arriving: redness and heat because vessels widen, swelling because they leak fluid and white cells, pain and loss of function because chemicals irritate nerve endings; primary, secondary and tertiary intention; what slows healing — poor protein and vitamin C, diabetes, anaemia, poor blood supply, infection, foreign body, dead tissue, steroids, smoking, age and movement; signs the wound is infected — increasing rather than settling pain, spreading redness, heat and swelling, pus, offensive smell, breakdown, fever and rising pulse; keloid; and the rule that pain increasing after day two is the earliest reliable sign that a wound is going wrong.",
          caption: "Redness, heat, swelling and pain in the first two days are inflammation doing its job. The same signs getting worse after day two or three — and above all pain that increases when it should be settling — are the earliest sign of infection, appearing before pus.",
        },
        {
          type: "table",
          heading: "Normal healing, colonisation or infection — telling them apart",
          columns: ["Finding", "Normal healing", "Infection"],
          rows: [
            ["<strong>Pain</strong>", "Peaks in 24–48 hours and settles each day.", "<strong>Increases after day 2–3</strong>, or returns after settling — the earliest reliable sign."],
            ["<strong>Redness and warmth</strong>", "A narrow pink margin along the incision that fades.", "<strong>Spreading</strong> erythema beyond the margin, hot, indurated; cellulitis tracking away from the wound."],
            ["<strong>Exudate</strong>", "Scant serous or serosanguineous fluid in the first days; dry by day 3–4.", "Purulent (thick, yellow-green), increasing, offensive; a sudden gush of pink watery fluid from a laparotomy wound signals impending <strong>dehiscence</strong>."],
            ["<strong>Wound bed</strong>", "Edges approximated, pink, epithelialising; healthy red granulation in an open wound.", "Edges separating, friable dark granulation that bleeds easily, slough, necrosis, crepitus or a bronze discolouration and pain out of proportion (gas gangrene)."],
            ["<strong>Systemic</strong>", "Mild fever on day 1–2 from the lungs or the operation itself.", "Fever from <strong>day 3–7</strong> with tachycardia, malaise, rising white cells; new confusion in the older patient."],
            ["<strong>Swab?</strong>", "Not indicated — all wounds are colonised and a swab will grow something.", "Swab only when infection is suspected clinically, <strong>from the cleaned wound bed</strong>, not from slough or surrounding skin, before antibiotics; treat the patient, not the report."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-TRA-1877.svg",
          alt: "Reading a post-operative fever by the calendar — day 0 to 1 the lungs (atelectasis: analgesia first, then deep breathing, coughing and sitting out); day 3 to 5 the urine and the drips (catheter infection, cannula-site inflammation: examine every line and remove what is not needed); day 5 to 7 the wound (infection: pain worsening after day 3 is the earliest sign, before pus); day 7 to 10 the legs and chest (deep vein thrombosis and embolism: early mobilisation is the best prevention); the pattern — day two is usually the chest, day five the wound or the urine; and wound dehiscence — a sudden gush of pink watery fluid from a laparotomy wound: cover with a sterile saline-soaked dressing, keep the patient nil by mouth and flat, call the surgeon immediately.",
          caption: "Count the days before you count the causes. Day two is usually the chest, day three to five the catheter or the cannula, day five to seven the wound, day seven to ten the legs — and on any day, the drug, the drip site, the transfusion or malaria. A fever with tachycardia in a patient who looks worse is surgical until proved otherwise.",
        },
        {
          type: "text",
          heading: "Three complications that must not be missed",
          paragraphs: [
            "<strong>Dehiscence and evisceration.</strong> Partial or complete separation of the wound layers, typically between days 5 and 10 when the sutures are taking the strain and before collagen has matured — commoner after abdominal surgery in the obese, malnourished, diabetic, coughing or distended patient, and where infection has weakened the tissue. A serosanguineous gush, a sensation that \"something gave way\" and visible separation are the signs; if bowel appears (evisceration) <strong>cover it with sterile saline-soaked gauze</strong>, do not push it back, keep the patient flat with knees slightly flexed, nil by mouth, monitor for shock and call the surgeon immediately — this is a return to theatre.",
            "<strong>Gas gangrene and tetanus.</strong> A deep, contaminated, crushed or ischaemic wound is an anaerobic environment. Clostridium perfringens produces <strong>pain out of proportion</strong> within hours to a day or two, a tense, oedematous, bronze or dusky wound, thin brown foul discharge, crepitus from gas in the tissues and a patient who is toxic, tachycardic and deteriorating fast — it needs immediate surgical debridement, high-dose penicillin and metronidazole, and often amputation. Clostridium tetani in the same wound causes <strong>trismus</strong> (lockjaw), neck and back stiffness and spasms triggered by noise, light and touch after an incubation of 3–21 days; the patient is nursed in a quiet, darkened side room with the airway secured. Prevention for both is the same: thorough cleaning and debridement, leaving dirty wounds open, and <strong>tetanus prophylaxis</strong> — toxoid, plus immunoglobulin for a tetanus-prone wound in a patient without a complete course.",
            "<strong>Puerperal sepsis.</strong> Infection of the genital tract after delivery or abortion — fever of 38 °C or more within 42 days, lower abdominal pain, a tender sub-involuted uterus and <strong>offensive lochia</strong>, commonest after prolonged labour, prolonged rupture of membranes, repeated vaginal examinations, retained products, caesarean section and unclean delivery. It remains a leading cause of maternal death in Ghana and is prevented by clean hands, clean perineum, clean cord and clean instruments at every birth, minimal examinations, antibiotic prophylaxis at caesarean section and prompt treatment with intravenous broad-spectrum antibiotics (with anaerobic cover) and removal of retained products. The woman who returns on day four or five with fever and foul lochia has an infection that is counted as a health care-associated infection if the delivery was in a facility.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-CLP-2844.svg",
          alt: "The wound bed by colour — black necrotic eschar needs debridement, yellow slough needs debriding and exudate absorbed, red granulation is protected and kept moist, pink epithelialisation is protected and left undisturbed; black to yellow to red to pink is the direction of healing; moist wound healing and matching the dressing to exudate — hydrogel for dry, hydrocolloid or film for low, foam for moderate, alginate under foam for heavy; infected wounds are not sealed under occlusive dressings; the signs of infection rather than healing; all wounds carry organisms, colonisation is normal and infection is when the tissue reacts and healing stalls; swab only if infection is suspected and from the cleaned wound bed.",
          caption: "Black to yellow to red to pink is the direction of healing; a wound moving the other way is deteriorating. Colonisation is normal; infection is the tissue reacting and healing stalling — and the swab, when it is taken at all, comes from the cleaned bed and never from slough.",
        },
        {
          type: "diagram",
          src: "/diagrams/NG-NUT-3096.svg",
          alt: "What a healing wound is built from — protein for collagen, new tissue and immune cells; energy to spare protein for repair; vitamin C to cross-link collagen; zinc for cell division and epithelial cover; fluid for turgor and perfusion because a dehydrated wound bed does not granulate; no dressing repairs a wound the diet cannot build, and repositioning, pressure relief and nutrition work together.",
          caption: "Infection prevention does not end at the dressing: the malnourished patient with low albumin, the diabetic with a glucose of 18 and the dehydrated older man are the patients whose wounds break down and become infected, whatever the technique at the trolley. Feed the wound.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "SSI and wound infection — the questions",
          body: "When is a prophylactic antibiotic given for a planned operation — within the 60 minutes before incision, as a single dose. Why is it limited to a single dose — longer courses add resistance and side effects without reducing infection. Which measure most effectively reduces SSI — skin antisepsis with chlorhexidine-alcohol, timed prophylaxis, normothermia and glucose control together; among single nursing actions, hand hygiene and aseptic wound care. Why not shave the night before — razor abrasions become colonised; clip immediately before if hair must go. What best distinguishes infection from colonisation — the tissue response: spreading redness, increasing pain, purulent discharge, fever. Which finding is the earliest sign of wound infection — pain that worsens after day two or three. A sudden gush of pink watery fluid on day seven — impending dehiscence: cover, keep flat and nil by mouth, call the surgeon. Deep contaminated wound, severe pain out of proportion, crepitus — gas gangrene: urgent surgical review. Day four after delivery, fever 38.9, offensive lochia, tender uterus — puerperal sepsis. When is a wound swab useful — only when infection is suspected, from the cleaned bed, before antibiotics.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "What the patient goes home with",
          body: "Most surgical site infections in Ghana declare themselves after discharge, often on a farm or in a market a day's travel from the hospital. The discharge conversation is therefore infection control: keep the dressing dry and intact until the review date; wash hands before touching the wound; no herbs, shea butter, toothpaste, powder or spirit on the incision; take the full course of any antibiotic that was actually prescribed and nothing bought from a chemical seller; eat protein, fruit and vegetables; and return at once — not at the review date — for pain that gets worse instead of better, redness spreading, pus, a bad smell, the wound opening or fever. Write it down, in the language the carer reads.",
        },
      ],
      keyPoints: [
        "Surgical site infection occurs within 30 days of an operation (90 with an implant), is superficial, deep or organ/space, affects roughly one operation in ten in sub-Saharan Africa and is the commonest health care-associated infection in Ghana — commonest after caesarean section and emergency laparotomy.",
        "Risk rises with wound class (clean to dirty), diabetes and hyperglycaemia, malnutrition, anaemia, smoking, HIV and immunosuppression, emergency and long operations, hypothermia, drains, shaving and broken technique.",
        "Prevention: no razor shaving (clippers if needed), chlorhexidine-alcohol skin preparation allowed to dry, a single dose of the right antibiotic within 60 minutes before incision and stopped at the end, normothermia, oxygenation, glucose below 10 mmol/L, sterile technique, closed doors, the WHO checklist, an undisturbed dressing for 24–48 hours, early drain removal and 30-day surveillance.",
        "The first two days of redness, heat, swelling and pain are inflammation; pain that increases after day two or three, spreading redness, purulent exudate, odour, breakdown and fever from day three to seven are infection — swab only then, from the cleaned bed, before antibiotics.",
        "Post-operative fever by the day: day 1–2 lungs, day 3–5 catheter and cannula, day 5–7 wound, day 7–10 legs; on any day drugs, drips, transfusion or malaria.",
        "Dehiscence announces itself with a serosanguineous gush around day 5–10 — cover with saline-soaked sterile gauze, flat, nil by mouth, call the surgeon; gas gangrene is pain out of proportion with crepitus in a contaminated wound; tetanus is trismus and spasms after a dirty wound in an unimmunised patient; puerperal sepsis is fever, pain, a tender uterus and offensive lochia within 42 days of delivery.",
        "Protein, energy, vitamin C, zinc, fluid and glucose control are infection prevention, and the discharge conversation — dry dressing, clean hands, nothing applied, return at once for worsening pain, redness, pus, odour or fever — is where most SSIs are caught.",
      ],
      quiz: {
        keywords: ["deep abscess","surgical site infection","preventing surgical site infection","surgical site infection prevention","wound infection","recognising wound infection","wound swab","wound dehiscence","postoperative fever","post operative fever","antibiotic prophylaxis timing","surgical antibiotic prophylaxis","prophylactic antibiotic","gas gangrene","tetanus risk in wounds","tetanus prophylaxis","phases of wound healing","nutrition in wound healing","nutrition and wound healing","nutrition and wound dehiscence","diabetes and surgical wounds","wound cleansing","moist wound healing","keloid","wound pain that worsens","risk factors for wound breakdown","factors delaying wound healing","exudate and pus","purulent","dehiscence","evisceration","suture","wound bed","slough","granulation","surgical wound","operation site","glucose control","perioperative hypothermia","kept warm","wound care","wound dressing","burn wound dressing","dressing selection","documenting wound assessment","wound bed colour","healing by second intention","healing by tertiary intention","abscess","simply colonised","colonised","infected wound","spreading redness","increasing pain","day five","fifth day","puerperal sepsis","offensive lochia","negative pressure wound therapy","gaping","fever after"],
        categories: ["perioperative", "safety-infection-control"],
        questionIds: ["NG-MOD-IPC-014"],
      },
    },
    {
      slug: "catheter-line-and-ventilator-associated-infections-and-the-sepsis-that-follows",
      title: "Catheter, line and ventilator-associated infections — and the sepsis that follows",
      minutes: 18,
      objectives: [
        "Explain how indwelling devices cause infection and apply the insertion and maintenance bundles for urinary catheters, peripheral cannulae and central lines.",
        "Describe how ventilator- and hospital-acquired pneumonia arise and the nursing measures — positioning, oral care, suction technique, humidification, equipment handling — that prevent them.",
        "Take a catheter specimen of urine correctly, distinguish asymptomatic bacteriuria from infection, and decide every day whether each device is still needed.",
        "Recognise sepsis arising from a device or procedure early and carry out the first-hour actions.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Every device is a door",
          paragraphs: [
            "An indwelling device defeats innate immunity in three ways at once. It <strong>bypasses a barrier</strong> — the urethra's length and flow, the skin, the cough and the glottis. It provides a <strong>surface</strong> on which organisms form a <strong>biofilm</strong>, a slime community that antibiotics and white cells cannot penetrate, so that once a catheter or cannula is colonised the only cure is to remove it. And it is <strong>handled</strong> — every connection opened, every port accessed, every bag emptied is a moment when a nurse's hands can deliver an organism to a site it would never otherwise reach. The risk is cumulative: each day of catheterisation adds about 3–7 per cent to the chance of bacteriuria, so that nearly every patient catheterised for a month has bacteria in the bladder.",
            "The corollary is the single most effective device intervention, and it costs nothing: <strong>ask every day, for every device, whether it is still needed, and remove it the moment it is not</strong>. Catheters left in because nobody questioned them, cannulae kept \"just in case\" with nothing running through them, and central lines in patients who are eating are the commonest causes of device infection on any ward. The bundles below are the second line; the daily question is the first.",
          ],
        },
        {
          type: "table",
          heading: "Catheter-associated urinary tract infection (CAUTI) — insertion and maintenance",
          columns: ["Element", "Practice", "Why"],
          rows: [
            ["<strong>Avoid or shorten</strong>", "Catheterise only for a clear indication — retention, accurate hourly output in the critically ill, peri-operative need, healing of a sacral wound in the incontinent; <strong>not</strong> for incontinence, convenience or the nurse's workload. Consider intermittent catheterisation or a condom catheter. Review daily; remove early; a <strong>trial without catheter</strong> is planned, not postponed.", "The strongest risk factor is duration. A catheter removed on day two cannot cause the infection it would have caused on day eight."],
            ["<strong>Insert aseptically</strong>", "Hand hygiene; sterile gloves, drape, catheter and single-use lubricant; meatal cleaning with sterile saline or antiseptic — vulva <strong>front to back</strong>, each swab once; smallest catheter that drains (12–14 Ch in adults); balloon inflated with the stated volume of sterile water <strong>only after urine flows</strong>; the foreskin replaced; catheter secured to the thigh.", "Insertion carries organisms from the meatus into the bladder; a balloon inflated in the urethra tears it; traction on the catheter damages the bladder neck and opens the meatus."],
            ["<strong>Keep the system closed</strong>", "Catheter and drainage bag are never disconnected; a sampling port is used for specimens; the bag is emptied via its tap into a clean container for that patient, without the tap touching the container; a new bag only when the system is breached or per policy.", "Every disconnection is an open door for organisms from hands and the environment."],
            ["<strong>Keep urine flowing downhill</strong>", "Bag <strong>below bladder level at all times</strong>, including during transfer, but <strong>off the floor</strong>; tubing without loops or kinks; bag emptied before it is two-thirds full and before any move; never raised above the bladder or laid on the bed.", "Reflux of stagnant bag urine carries organisms straight into the bladder; a bag on the floor collects them from the floor."],
            ["<strong>Daily care</strong>", "Routine <strong>meatal hygiene with soap and water</strong> during the daily wash — no antiseptic creams, no routine bladder washouts, no routine catheter changes; hand hygiene and clean gloves before any handling; adequate fluid intake; <strong>no antibiotics for a catheter urine that grows bacteria in a patient with no symptoms</strong>.", "Antiseptics and washouts disturb flora and increase infection; asymptomatic bacteriuria is universal after a week and treating it breeds resistance without benefit."],
            ["<strong>Recognise infection</strong>", "New fever, rigors, suprapubic or loin pain, new confusion or a fall in the older patient, cloudy or offensive urine <em>with</em> symptoms; obtain a <strong>catheter specimen from the port</strong> (clamp below the port briefly, clean the port with alcohol, aspirate with a sterile syringe, unclamp) — <strong>never from the bag</strong>; ideally replace the catheter before culture and treatment.", "Bag urine has stood for hours and grows organisms that were never in the patient; a colonised catheter will re-seed the bladder however good the antibiotic."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-APR-0445.svg",
          alt: "Urinary catheterisation in females and males compared — the short female urethra, supine position, front-to-back cleaning with one swab per stroke, insertion until urine flows then a further two centimetres; the long male urethra with two curves, penis held upright to straighten the first, foreskin retracted to clean and replaced afterwards, insertion to the bifurcation, never forced; the two dangers — a foreskin left retracted causes paraphimosis and a balloon inflated too early tears the urethra; and the care common to both — bag below bladder level and off the floor, system kept closed, catheter secured to the thigh, daily meatal hygiene with soap and water, and removal as soon as it is no longer needed because every extra day raises the risk of catheter-associated infection.",
          caption: "The after-care is the infection control: closed system, bag below the bladder and off the floor, soap-and-water meatal hygiene, a secured catheter and a removal date in the notes. Every extra day is an extra 3–7 per cent chance of bacteriuria.",
        },
        {
          type: "table",
          heading: "Peripheral cannulae and central lines — bloodstream infection prevention",
          columns: ["", "Peripheral cannula", "Central venous catheter"],
          rows: [
            ["<strong>Insertion</strong>", "Hand hygiene; clean gloves and a no-touch technique; skin prepared with 2 per cent chlorhexidine in 70 per cent alcohol (or 70 per cent alcohol) and <strong>allowed to dry</strong>; site not re-palpated after preparation; avoid the antecubital fossa, joints and the lower limb in adults; smallest gauge for the purpose; sterile transparent semi-permeable dressing; <strong>date and time on the dressing and in the notes</strong>.", "The <strong>insertion bundle</strong>: hand hygiene; <strong>maximal sterile barriers</strong> — cap, mask, sterile gown and gloves, full-body drape; 2 per cent chlorhexidine-alcohol skin preparation dried; <strong>subclavian or internal jugular preferred, femoral avoided</strong>; ultrasound guidance where available; a checklist with the authority to stop the procedure if a step is missed."],
            ["<strong>Maintenance</strong>", "<strong>Inspect the site every shift</strong> and before every use for redness, pain, swelling, warmth or a palpable cord (phlebitis) and for infiltration; hand hygiene and a no-touch technique for every access; <strong>scrub the hub or port with alcohol for 15 seconds and let it dry</strong> before each use; flush with 0.9 per cent saline using a push-pause technique to keep it patent; keep the dressing dry, intact and transparent; change giving sets every 72–96 hours, or within 24 hours after blood, blood products or lipid; label all lines.", "The <strong>maintenance bundle</strong>: daily review of need with the line removed the day it is not; hand hygiene and <strong>aseptic non-touch technique for every access</strong>; hub scrubbed with chlorhexidine-alcohol before every entry; transparent dressing changed every 7 days (gauze every 2 days) or when soiled, loose or damp, with chlorhexidine skin antisepsis at each change; <strong>a dedicated lumen for parenteral nutrition</strong> that is never used for anything else; minimal manipulation; giving sets for lipid and TPN changed every 24 hours."],
            ["<strong>Removal</strong>", "Remove when no longer needed, when any sign of phlebitis or infiltration appears, and <strong>resite rather than persist</strong> with a site that is red or tender; a cannula with nothing prescribed through it has no reason to exist; replace routinely at 72–96 hours where policy requires, or on clinical indication where assessment is reliable.", "Remove as soon as it is not needed and <strong>immediately</strong> on suspicion of line infection; send the tip for culture only when infection is suspected; do not routinely replace central lines on a schedule — each new insertion is a new risk."],
            ["<strong>Recognise infection</strong>", "Red, warm, tender vein with a palpable cord = phlebitis; pus at the site = local infection; fever with no other source in a patient with a cannula = suspect the cannula.", "Fever, rigors (classically during or after a flush or infusion), hypotension, a new murmur, erythema or pus at the exit site; <strong>paired blood cultures</strong> from the line and a peripheral vein before antibiotics; remove the line."],
          ],
        },
        {
          type: "text",
          heading: "Ventilator- and hospital-acquired pneumonia",
          paragraphs: [
            "<strong>Hospital-acquired pneumonia</strong> develops 48 hours or more after admission in a patient who was not intubated; <strong>ventilator-associated pneumonia</strong> (VAP) develops 48 hours or more after intubation and affects up to a quarter of ventilated patients in low-resource intensive care units, with a high mortality. The mechanism is the same for both: <strong>micro-aspiration</strong> of organisms from the mouth, throat and stomach past a glottis that cannot close (tube) or a cough that is suppressed (sedation, pain, weakness, stroke, reduced consciousness), into lungs whose clearance is impaired by immobility and dry gas. The organisms are the patient's own oral and gastric flora, enriched with the resistant Gram-negatives of the unit, and the vehicles are hands, suction catheters, ventilator circuits and nebulisers.",
            "The <strong>VAP bundle</strong>: <strong>head of the bed elevated 30–45 degrees</strong> at all times unless contraindicated (the single cheapest measure — a flat patient aspirates); <strong>daily sedation hold and assessment for extubation</strong> so the tube comes out as early as possible; <strong>oral care</strong> with toothbrushing and chlorhexidine mouthwash or gel every 6–8 hours; <strong>subglottic suction</strong> where tubes allow and <strong>cuff pressure 20–30 cmH₂O</strong> checked every shift so secretions do not leak past; <strong>hand hygiene and clean gloves</strong> before every contact with the airway; <strong>sterile single-use suction catheters</strong> or a closed suction system, suction applied only on withdrawal for no more than 10–15 seconds, pre-oxygenating first and <strong>never instilling saline</strong> routinely; <strong>condensate in the circuit drained away from the patient</strong> and never back into the humidifier; circuits changed only when soiled or faulty; <strong>sterile water</strong> in humidifiers, replaced not topped up; and stress-ulcer and thrombosis prophylaxis per protocol. Patients who are not ventilated are protected by the same ideas — sitting up to eat, swallow screening after stroke, mouth care in the unconscious, analgesia that allows deep breathing and coughing, early mobilisation, incentive spirometry and physiotherapy.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PER-1556.svg",
          alt: "The tracheostomy — what changes and what can kill: the tube bypasses the nose and throat so air arrives cold, dry and unfiltered and secretions crust, making humidification treatment rather than comfort, and bypasses the vocal cords so the patient cannot call for help; the bedside kit checked and signed at every handover — spare tubes, dilators, bag-valve mask, working suction, humidification and sterile saline; the ordered emergency sequence for a distressed patient — pass a suction catheter to test for blockage, look and feel at the stoma for displacement, call for help and give oxygen at face and stoma; and suction that is brief, sterile and only on the way out, with pre-oxygenation, no suction on insertion, passes of a few seconds and no routine saline instillation.",
          caption: "Suction technique is infection control: a sterile catheter, clean gloves, suction applied only on withdrawal, each pass kept to a few seconds, no saline squirted down the tube, and humidified gas so secretions do not crust. The same rules protect the ventilated patient from the pneumonia the unit would otherwise give him.",
        },
        {
          type: "list",
          heading: "Respiratory equipment — the reservoirs on the oxygen ward",
          items: [
            "<strong>Nebuliser chambers and masks</strong> are single-patient: after each dose rinse with sterile or boiled cooled water, shake, air-dry and store dry in a clean bag at the bedside; replace per policy (commonly daily to weekly) and never pass between patients. A chamber left wet with residual drug is a Pseudomonas culture.",
            "<strong>Oxygen humidifier bottles</strong> are filled with <strong>sterile water</strong>, replaced (not topped up) every 24 hours or per manufacturer, and single-use pre-filled bottles are used where available; low-flow nasal cannula oxygen usually needs no humidification at all.",
            "<strong>Suction</strong>: single-use catheters; tubing and the canister changed between patients and the canister emptied at least every shift and when two-thirds full with gloves, apron and eye protection; a Yankauer sucker for the mouth stored dry in a clean paper bag, not left in a jug of water.",
            "<strong>Bag-valve masks, laryngoscope blades, spacers and peak-flow meters</strong> are cleaned and high-level disinfected or sterilised between patients, or single-patient items; the self-inflating bag in the emergency trolley is checked, cleaned and dated.",
            "<strong>Tracheostomy</strong> inner cannulae are cleaned at least every 8 hours with sterile saline and a brush, stoma care is an aseptic dressing, and the ties and dressing are kept dry.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-IMD-0899.svg",
          alt: "Sepsis — the first hour decides the outcome: suspect it when an infected patient shows new confusion, fast breathing, low blood pressure, falling urine output or mottled cold skin; three out — blood cultures before antibiotics, lactate, urine output by catheter and chart; three in — oxygen, intravenous fluids given fast, antibiotics within the hour without waiting for the culture result; in Ghana always ask whether this could be severe malaria and test for it while treating sepsis; a patient who is confused, breathing fast and passing little urine is septic until proved otherwise, and blood pressure falls late.",
          caption: "When a device infection is missed it becomes sepsis, and the first hour decides the outcome. The catheterised older man who is newly confused, the woman with a red cannula site who is shivering during a flush, the child on chemotherapy with a temperature and nothing else — three out, three in, within the hour.",
        },
        {
          type: "table",
          heading: "Sepsis from a device or procedure — recognise and act",
          columns: ["Step", "Action"],
          rows: [
            ["<strong>Suspect</strong>", "Any patient with a device, a wound or a recent procedure who develops <strong>fever or hypothermia, rigors, new confusion or drowsiness, respiratory rate over 22, systolic pressure under 100, heart rate over 90, urine output under 0.5 mL/kg/hour, or cold mottled skin</strong>. In the older patient the first sign is often confusion or a fall; in the neonate, poor feeding, lethargy and a low temperature; in the neutropenic patient, fever alone."],
            ["<strong>Find the source</strong>", "Look at every device and site in turn — catheter urine, cannula and line sites, the wound, the chest, the mouth of the ventilated patient — and <strong>remove or replace the suspect device</strong>; a line or catheter that is the source will keep seeding the blood however good the antibiotic."],
            ["<strong>Three out, within the hour</strong>", "<strong>Blood cultures before antibiotics</strong> — two sets, one from the suspect line and one peripheral, with the skin and the bottle tops cleaned with alcohol and allowed to dry so the result is not a skin contaminant; a lactate where available; a catheter for hourly urine output; plus the relevant culture — urine, wound, sputum."],
            ["<strong>Three in, within the hour</strong>", "Oxygen to keep saturation 94 per cent or above; intravenous crystalloid 30 mL/kg fast if hypotensive or lactate raised, reassessed after each bolus; <strong>broad-spectrum intravenous antibiotics within one hour</strong> per local guideline and the likely source, narrowed when cultures report (Module 7). In Ghana, test for malaria at the same time and treat both if in doubt."],
            ["<strong>Escalate and record</strong>", "Call the doctor and the senior nurse at once using SBAR, repeat observations every 15–30 minutes, chart fluids and urine hourly, and complete the incident report — a device infection that reached sepsis is an adverse event the ward learns from."],
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Device infections — the questions",
          body: "Which measure most effectively reduces catheter-associated urinary infection — removing the catheter as soon as it is no longer needed (then the closed system and bag below bladder level). Where should the drainage bag be — below the bladder, off the floor. How is a specimen obtained from a catheterised patient — from the sampling port after cleaning it, with a sterile syringe; never from the bag. A catheterised patient grows bacteria from a urine sample but has no symptoms — asymptomatic bacteriuria; no antibiotics. What is done to an injection port before a drug is given — scrubbed with alcohol and allowed to dry. A cannula site is red, warm and tender with a palpable cord — phlebitis: remove and resite. Why is the parenteral nutrition line reserved for that purpose — every added access and every other solution multiplies the infection risk of a lipid-rich line. What is the purpose of a central line care bundle — a short set of evidence-based steps performed together every time, with compliance measured, which reduces infection more than any single step. Which measure helps prevent pneumonia in a ventilated patient — head of bed 30–45 degrees, oral care, sterile suction technique, daily assessment for extubation. When should suction pressure be applied — only on withdrawal. Why should blood cultures be taken before the first antibiotic dose — afterwards they may grow nothing and the chance to identify and narrow is lost.",
        },
      ],
      keyPoints: [
        "Devices cause infection by bypassing barriers, growing biofilm that only removal cures, and being handled; the most effective intervention is the daily question — is this device still needed? — and removal the moment it is not.",
        "CAUTI prevention: catheterise only for a clear indication, insert aseptically with front-to-back cleaning and the balloon inflated only after urine flows, keep the system closed, keep the bag below the bladder and off the floor, do soap-and-water meatal care, take specimens from the port never the bag, and do not treat asymptomatic bacteriuria.",
        "Peripheral cannulae: chlorhexidine-alcohol skin preparation dried, no re-palpation, dated transparent dressing, site inspected every shift and before every use, hub scrubbed with alcohol before access, giving sets changed every 72–96 hours (24 after blood or lipid), and removal or resiting at the first sign of phlebitis or when nothing is prescribed.",
        "Central lines: insertion bundle (hand hygiene, maximal sterile barriers, chlorhexidine-alcohol, subclavian or jugular over femoral, checklist) and maintenance bundle (daily review, aseptic access with hub scrub, 7-day transparent dressings, dedicated TPN lumen, lipid sets changed daily); paired cultures and removal on suspicion of line sepsis.",
        "Ventilator-associated pneumonia is micro-aspiration of oral and gastric flora: head of bed 30–45 degrees, daily sedation hold, chlorhexidine oral care, cuff pressure 20–30 cmH₂O, hand hygiene, sterile single-use suction on withdrawal for under 15 seconds without saline, condensate drained away from the patient, sterile water in humidifiers.",
        "Respiratory equipment is a reservoir: nebuliser chambers are single-patient and stored dry, humidifiers are replaced not topped up, suction canisters and tubing are changed between patients, and bags and blades are disinfected or sterilised between uses.",
        "A missed device infection becomes sepsis: suspect it with fever or hypothermia, new confusion, fast breathing, low pressure or low urine output; remove the source; take three out (cultures before antibiotics, lactate, urine output) and put three in (oxygen, fluids, antibiotics) within the hour; test for malaria at the same time in Ghana.",
      ],
      quiz: {
        keywords: ["catheter associated","catheter care","urinary catheter","catheter drainage bag","catheter drainage","indwelling","intravascular device","central line infection prevention","central line","cannula site","peripheral cannula","phlebitis","flushing a cannula","ventilator associated","ventilator","oral care","mouth care","tracheostomy suction","suctioning technique","suction technique","humidification","nebuliser equipment infection control","parenteral nutrition","tpn","blood cultures before antibiotics","sepsis recognition","sepsis six","recognising sepsis","sepsis management","lactate in sepsis","antibiotic timing in sepsis","septic","catheter specimen","midstream","urinary tract infection in older people","childhood urinary tract infection","urinary tract infection","bacteriuria","balloon","trial without catheter","injection port","iv line","intravenous line","96 hours","dated","newly confused","eight days","drainage bag","disconnect","catheter bag","catheterised patient","care bundle","ventilated patient","triple lumen","line used for total parenteral","red, warm and tender","palpable cord","infusion giving set contaminated"],
        categories: ["safety-infection-control", "fundamentals"],
        questionIds: ["NG-MOD-IPC-011", "NG-MOD-IPC-012", "NG-MOD-IPC-013"],
      },
    },
  ],
};
