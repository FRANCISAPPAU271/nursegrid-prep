import type { CourseModule } from "../types";

export const routesAndTechniquesOfAdministration: CourseModule = {
  slug: "routes-and-techniques-of-medicine-administration",
  title: "Routes and techniques of medicine administration",
  summary: "Every route a medicine can take and the technique that makes each one safe — tablets that must not be crushed, liquids measured with the right device, medicines down a nasogastric tube, sublingual, rectal, topical, transdermal, eye, ear, nasal and inhaled preparations and the spacer, oxygen as a prescribed drug — and then the parenteral routes: intradermal, subcutaneous and intramuscular injections with their sites, angles, volumes and needles, Z-track, reconstitution and displacement, the intravenous push, intermittent and continuous infusions, compatibility and flushing, pumps, phlebitis, infiltration, extravasation, air embolism and sharps safety.",
  lessons: [
    {
      slug: "oral-enteral-topical-inhaled-and-other-non-parenteral-routes",
      title: "Oral, enteral, topical, inhaled and other non-parenteral routes",
      minutes: 17,
      objectives: [
        "Give oral medicines safely — which tablets may be crushed or dispersed and which never, how to measure oral liquids accurately, how to time medicines with food — and give medicines through a nasogastric or gastrostomy tube correctly.",
        "Administer sublingual, buccal, rectal, vaginal, topical and transdermal preparations with the correct technique and explain the pharmacological reason for each route.",
        "Instil eye, ear and nasal preparations correctly and teach a patient to use a metered-dose inhaler, a spacer, a dry-powder inhaler and a nebuliser, including the mouth-rinse after inhaled steroids and the choice of driving gas.",
        "Treat oxygen as a prescribed drug and explain the inhaled route's advantages, and recognise the common errors of each non-parenteral route in children and older adults.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Choosing a route — speed, first pass and the patient in front of you",
          paragraphs: [
            "The route decides how fast a drug acts, how much of it reaches the blood and what can go wrong. <strong>Intravenous</strong> acts within seconds to minutes and bypasses absorption and first pass; <strong>intramuscular</strong> within 10–30 minutes if perfusion is good; <strong>subcutaneous</strong> more slowly; <strong>sublingual and buccal</strong> within minutes because the drug crosses straight into the systemic circulation and avoids the liver; <strong>rectal</strong> partly avoids first pass and is used when the patient is vomiting, fitting or unconscious; <strong>oral</strong> takes 30–60 minutes and loses part of the dose to first pass; <strong>inhaled</strong> delivers a small dose straight to the airways with few systemic effects; <strong>topical and transdermal</strong> act locally or release slowly through the skin. The oral route is the safest, cheapest and most comfortable and is used whenever the patient can swallow, is not vomiting, has a working gut and the drug survives it — which is why the question 'can this patient change from intravenous to oral?' should be asked every day.",
          ],
        },
        {
          type: "table",
          heading: "Oral medicines — forms, what they mean and the common errors",
          columns: ["Form", "What it is", "Rule"],
          rows: [
            ["Plain tablet or capsule", "Drug plus fillers; released in the stomach.", "May usually be crushed or opened for a patient who cannot swallow or for a tube — after checking the product and pharmacy; mix with a little water, not food, unless told otherwise."],
            ["<strong>Modified-release</strong> (SR, MR, XL, LA, 'retard', 'CR')", "Designed to release the dose slowly over 12–24 hours.", "<strong>Never crushed, chewed or dispersed</strong> — the whole day's dose is absorbed in minutes (nifedipine retard, morphine MR, metformin SR, theophylline, potassium chloride SR); ask pharmacy for an immediate-release alternative for the tube."],
            ["<strong>Enteric-coated</strong> (EC)", "Coating survives stomach acid so the drug dissolves in the intestine — to protect the stomach (aspirin, diclofenac) or the drug (omeprazole, pancreatin).", "<strong>Never crushed</strong>: crushing destroys the drug or damages the stomach; capsules of enteric-coated granules may sometimes be opened and the granules swallowed whole in soft food."],
            ["Sublingual and buccal tablets", "Dissolve under the tongue or against the cheek for direct absorption.", "Teach the patient <strong>not to swallow, chew or eat and drink</strong> until dissolved; a swallowed glyceryl trinitrate tablet is mostly destroyed by first pass."],
            ["Dispersible, effervescent and soluble tablets", "Made to dissolve in water before swallowing (dispersible zinc, artemether-lumefantrine dispersible, soluble paracetamol).", "Dissolve fully in the stated volume; give immediately; effervescent tablets carry a sodium load that matters in heart failure and hypertension."],
            ["Chewable tablets and lozenges", "Chewed (antacids, some anthelmintics) or sucked slowly (nystatin pastilles).", "Do not swallow whole; lozenges are a choking hazard in young children."],
            ["Oral liquids — syrups, suspensions, solutions, drops", "Dose depends on the concentration <strong>on this bottle</strong> (paracetamol 120 mg/5 mL or 250 mg/5 mL; amoxicillin 125 or 250 mg/5 mL).", "<strong>Shake suspensions</strong>; measure with an <strong>oral syringe</strong> or a graduated measure at eye level — never a household teaspoon, which holds 2–7 mL; teach the mother who must give 2.5 mL at home to use the syringe or dropper supplied and demonstrate it; label the concentration; store as directed and discard reconstituted antibiotics after the stated days."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MDS-1638.svg",
          alt: "Changing the form of a tablet can change the dose — modified-release tablets release slowly over twelve to twenty-four hours and crushing gives the whole day's dose in minutes; enteric-coated tablets must not be crushed because the coating protects the drug or the stomach; sublingual tablets are absorbed under the tongue and bypass the liver, so swallowing lets the liver destroy most of the dose.",
          caption: "A tablet is a delivery device, not just a container. Look for SR, MR, XL, LA and EC on the name before crushing anything, and teach the sublingual patient not to swallow.",
        },
        {
          type: "text",
          heading: "Timing with food, and medicines through a nasogastric tube",
          paragraphs: [
            "'With food' reduces gastric irritation (NSAIDs, prednisolone, metformin, oral iron if nausea is a problem) or improves absorption (artemether-lumefantrine and griseofulvin need fat; nitrofurantoin). '<strong>On an empty stomach</strong>' — an hour before or two hours after food — is for drugs whose absorption food reduces: flucloxacillin, ampicillin, tetracyclines, rifampicin, isoniazid, captopril, bisphosphonates, and <strong>levothyroxine</strong>, taken each morning at least 30 minutes before breakfast and separated from iron, calcium and antacids. Oral iron is best absorbed on an empty stomach or with vitamin C, worst with tea, milk and antacids; it blackens the stool and the patient should be told. Ciprofloxacin and tetracyclines are separated by two hours from antacids, iron, zinc and milk, which bind them in the gut. Omeprazole works best taken 30–60 minutes before breakfast; furosemide and once-daily steroids are taken in the morning; statins at night; metformin with meals.",
            "Through a <strong>nasogastric or gastrostomy tube</strong>, each medicine is given <strong>separately</strong>: confirm tube position first (aspirate pH 1–5.5, or the chest X-ray where there is doubt; never the 'whoosh' test), stop any feed, flush with 15–30 mL of water, give the first medicine as a liquid or a plain tablet crushed finely and dispersed in water, flush with 10 mL between medicines, give the next, and finish with a 15–30 mL flush before restarting the feed. Never mix medicines together in one syringe (they may precipitate and block the tube), never add medicines to the feed bag, never crush modified-release or enteric-coated tablets for a tube, and know the drugs that bind to feed and need a feed break — phenytoin, ciprofloxacin, levothyroxine. Three medicines due at once take longer this way, and that is the correct way.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-FUN-0027.svg",
          alt: "Confirming nasogastric tube position — aspirate and test with a pH strip, pH 1 to 5.5 means safe to use; if in doubt a chest X-ray is the definitive check; never the whoosh test or bubbling in water.",
          caption: "Before any medicine or feed goes down a nasogastric tube, confirm it is in the stomach: aspirate pH 1–5.5, or chest X-ray if in doubt. The 'whoosh' test does not distinguish stomach from lung.",
        },
        {
          type: "table",
          heading: "Rectal, vaginal, topical, transdermal, eye, ear and nasal routes",
          columns: ["Route", "Why it is chosen", "Technique and traps"],
          rows: [
            ["<strong>Rectal</strong> (suppositories, enemas, rectal diazepam, rectal artesunate, paracetamol)", "Vomiting, nil by mouth, fitting, unconscious, no venous access; local action for constipation or haemorrhoids; pre-referral artesunate for a child with severe malaria who cannot swallow.", "Left lateral with knees drawn up; gloves and lubricant; insert past the anal sphincter (2–4 cm adult, 1–2 cm child) and hold the buttocks together for a minute; ask the patient to retain for 15–20 minutes; absorption is variable; not after rectal surgery, with bleeding or in neutropenia."],
            ["<strong>Vaginal</strong> (pessaries, creams, misoprostol)", "Local treatment of infection; cervical ripening and induction under obstetric protocol.", "Dorsal position; applicator or gloved finger high into the posterior fornix; best at night so it stays in place; the patient lies for 15 minutes; misoprostol only as prescribed and with fetal monitoring per protocol."],
            ["<strong>Topical</strong> (creams, ointments, lotions, powders, steroid preparations)", "Local effect on skin; some systemic absorption, greatest through broken skin, in infants and under occlusion.", "Clean and dry the area; thin layer in the direction of hair growth; gloves; measure potent steroid creams in fingertip units and apply only where prescribed; never share tubes between patients; 'natural' bleaching creams are a cause of skin damage and adrenal suppression."],
            ["<strong>Transdermal patches</strong> (glyceryl trinitrate, fentanyl, hormone patches)", "Slow, steady release over hours to days; avoids first pass.", "Apply to clean, dry, hairless, intact skin; <strong>remove the old patch before applying the new</strong> and dispose of it folded in half (fentanyl patches poison children and pets); rotate sites; record the site and time; heat (fever, hot-water bottles, sun) speeds absorption; never cut a reservoir patch."],
            ["<strong>Eye drops and ointment</strong>", "Local treatment of infection, inflammation, glaucoma; dilating drops.", "Wash hands; tilt the head back; pull the lower lid down to form a pocket; instil one drop into the <strong>conjunctival sac</strong> without touching the eye with the dropper; close the eye gently and press the inner canthus for a minute to limit systemic absorption; <strong>wait five minutes between two different drops</strong>; drops before ointment; ointment as a ribbon along the lower lid; one bottle per patient, discarded 28 days after opening."],
            ["<strong>Ear drops</strong>", "Local infection, wax softening.", "Warm the bottle in the hand (cold drops cause vertigo); patient lies with the affected ear up; pull the pinna <strong>up and back in adults, down and back in children under three</strong>; instil and keep the position for five minutes; never if the drum is perforated unless the drops are approved for it."],
            ["<strong>Nasal drops and sprays</strong>", "Decongestion, steroid sprays for rhinitis, naloxone and midazolam by the nasal route in some protocols.", "Blow the nose first; head tilted back for drops, upright and slightly forward for sprays; do not share; decongestant drops for no more than a few days (rebound congestion)."],
          ],
        },
        {
          type: "text",
          heading: "The inhaled route — inhalers, spacers, nebulisers and oxygen",
          paragraphs: [
            "Inhaled medicines put a small dose where it is needed with few systemic effects, but only if the technique delivers it. For a <strong>pressurised metered-dose inhaler</strong>: shake, remove the cap, breathe out fully, seal the lips around the mouthpiece, press once at the <strong>start</strong> of a slow deep breath in, hold the breath for ten seconds, and wait 30–60 seconds before a second puff. Most patients press and breathe at different moments and the dose hits the back of the throat. A <strong>spacer</strong> removes the need for coordination, roughly doubles the dose reaching the lungs, reduces oral thrush and hoarseness from steroid inhalers, and allows a child (with a mask under about four years) to take the dose by tidal breathing — one puff into the spacer, five or six breaths, then the next puff. Ten puffs of salbutamol through a spacer is as effective as a nebuliser for most patients with acute asthma, which matters where nebulisers, electricity and oxygen are scarce. Spacers are washed in detergent, drip-dried and not rubbed (static holds the drug on the plastic). <strong>Dry-powder inhalers</strong> need a fast, deep breath in and must not be shaken or breathed into.",
            "After an <strong>inhaled corticosteroid</strong> the patient rinses the mouth and spits (and uses a spacer) to prevent oral candidiasis and a hoarse voice. The commonest reason for poorly controlled asthma despite a 'preventer' is that it is not being taken or not reaching the lungs: a patient who uses the blue salbutamol <strong>reliever</strong> every day but rarely the brown steroid <strong>preventer</strong> has the two confused, and the first thing the nurse checks when control is poor is the <strong>inhaler technique</strong> and adherence, not the dose. <strong>Nebulisers</strong> turn 2.5–5 mL of solution into a mist over 5–10 minutes, driven by oxygen at 6–8 L/min in asthma but by <strong>air</strong> in a patient with COPD at risk of carbon dioxide retention (with oxygen by nasal cannula alongside if needed). <strong>Oxygen</strong> is a prescribed drug with a dose (flow and device), a target saturation (94–98%, or 88–92% in those at risk of hypercapnia), a route and side effects — dry mucosa, fire, carbon dioxide narcosis in the susceptible, retinopathy in premature babies — and it is charted and signed for like any other drug.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ADV-0122.svg",
          alt: "Four oxygen devices compared — nasal cannula 1 to 4 litres per minute giving 24 to 40 per cent, simple mask 5 to 10 litres giving 40 to 60 per cent and never below 5 litres because of carbon dioxide rebreathing, reservoir mask 10 to 15 litres giving 60 to 90 per cent, and the Venturi mask for a precise fixed percentage.",
          caption: "Oxygen is a drug: it has a dose — the flow and the device — a target saturation, and side effects. A simple mask is never run below 5 litres per minute, and the patient with COPD is titrated to 88–92% rather than drowned in oxygen.",
        },
        {
          type: "callout",
          tone: "warning",
          title: "The crushing errors",
          body: "Crushing a modified-release nifedipine, morphine or potassium tablet delivers the whole day's dose at once — profound hypotension, respiratory depression or a dangerous potassium surge. Crushing an enteric-coated omeprazole destroys it; crushing enteric-coated aspirin or diclofenac damages the stomach it was coated to protect. When a patient cannot swallow, the answer is a liquid, a dispersible form, a different route or a pharmacist's advice — never the pestle by default.",
        },
        {
          type: "callout",
          tone: "tip",
          title: "Measuring a child's oral dose at home",
          body: "Give the mother the oral syringe or dropper, draw up the dose together to the marked line, let her draw it up herself while you watch, and show her how to give it slowly into the side of the cheek with the child upright so he does not choke or spit. Write the volume on the bottle. A 'teaspoon' in a Ghanaian kitchen is anything from 2 to 7 mL — the difference between an under-dose and an overdose of paracetamol.",
        },
      ],
      keyPoints: [
        "The route decides speed and bioavailability: intravenous acts in seconds and skips absorption, sublingual, buccal and rectal routes avoid first pass, oral is the safest and is used whenever the gut works and the patient can swallow — ask daily whether intravenous medicines can become oral.",
        "Never crush modified-release (SR, MR, XL, LA) or enteric-coated (EC) tablets; dissolve dispersible tablets fully; shake suspensions and measure liquids with an oral syringe or graduated measure, never a household spoon; the dose depends on the concentration on this bottle.",
        "Levothyroxine, tetracyclines, rifampicin and flucloxacillin are taken on an empty stomach; artemether-lumefantrine with fat; NSAIDs, steroids and metformin with food; ciprofloxacin and tetracyclines two hours apart from antacids, iron and milk; iron blackens the stool.",
        "Down a nasogastric tube: confirm position by aspirate pH 1–5.5 (chest X-ray if in doubt), give each medicine separately with water flushes between, never mix medicines or add them to the feed, and never crush modified-release or enteric-coated tablets for the tube.",
        "Eye drops go into the conjunctival sac with five minutes between different drops and pressure on the inner canthus; ear drops are warmed with the pinna pulled up and back in adults and down and back in young children; the old transdermal patch comes off before the new one goes on; rectal medicines are for the vomiting, fitting, unconscious or pre-referral child.",
        "Press the inhaler at the start of a slow deep breath and hold ten seconds; a spacer removes the coordination problem, doubles lung delivery and makes ten puffs of salbutamol as effective as a nebuliser; rinse the mouth after inhaled steroids; poor asthma control means check technique and preventer adherence first; nebulise with air in COPD.",
        "Oxygen is a prescribed drug with a dose, device, target saturation (94–98%, or 88–92% in those at risk of carbon dioxide retention), side effects and a signature on the chart.",
      ],
      quiz: {
        questionIds: ["NG-MOD-PHARM-003", "NG-MOD-PHARM-004"],
        categories: ["pharmacology-parenteral"],
        keywords: ["enteric","crushed","modified release","sustained release","via a nasogastric","through a nasogastric","nasogastric tube is prescribed","medicines via","enteral tube medication","three medicines are due","suspension","syrup","oral liquid","2.5 ml","under the tongue","sublingual","glyceryl trinitrate","rectal route","suppositor","transdermal","patch","eye drop","ear drop","inhaler","spacer","nebulis","metered","rinse","preventer","reliever","empty stomach","before food","30 minutes before","oxygen as a prescribed","prescribed drug","ointment","cream","cannot swallow","levothyroxine","iron tablets","tetracycline","antacid","omeprazole","proton pump","capsule","instil","pinna","mouth after using","nystatin","oral candidiasis","why is glyceryl","why may the rectal","why is the sublingual","driving gas","nebuliser versus inhaler","as effective as a nebuliser","inhaler technique","use of a spacer","poorly controlled despite","rarely uses her steroid","every day but rarely","give her child","two different eye drops","transdermal patches","applying a new","ear drops","eye ointment"]
      },
    },
    {
      slug: "injections-and-intravenous-medicines",
      title: "Injections and intravenous medicines",
      minutes: 18,
      objectives: [
        "Give intradermal, subcutaneous and intramuscular injections with the correct site, angle, needle, volume and technique — including the ventrogluteal and vastus lateralis sites, Z-track and site rotation — and explain why the dorsogluteal site is avoided.",
        "Prepare injectable medicines safely: the correct diluent, reconstitution and displacement volume, inspection of the solution, multidose vials, labelling, and the questions of compatibility and rate before anything enters a vein.",
        "Give intravenous medicines by bolus, intermittent and continuous infusion through a cannula or central line, flush correctly, use an infusion pump and respond to its alarms, and prevent speed shock and air embolism.",
        "Recognise and manage phlebitis, infiltration, extravasation of a vesicant, infusion reactions and line infection, and handle needles and sharps so that neither patient nor nurse is injured.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Preparing an injection — four questions before the needle",
          paragraphs: [
            "Most injection errors are made at the preparation bench, not at the bedside. <strong>What do I reconstitute it with?</strong> The diluent is specified on the product — water for injection, 0.9% sodium chloride or a special diluent — and they are not interchangeable: the wrong one can precipitate or inactivate the drug. The powder itself occupies volume, so after adding 10 mL of water to a 1 g vial of ceftriaxone the final volume is slightly more than 10 mL — the <strong>displacement value</strong> — which matters when only part of a vial is needed for a child; use the concentration stated on the product or pharmacy's displacement table, not an assumption. Swirl rather than shake, and <strong>inspect</strong> every solution against the light: a reconstituted antibiotic that is faintly cloudy with floating specks, a discoloured ampoule or a vial with a crack is discarded, never given 'because it is probably fine'. <strong>Can it share a line?</strong> Two compatible drugs may run together; incompatible ones form a precipitate that may be invisible — if in doubt check the compatibility chart or ask pharmacy, and <strong>flush between drugs</strong>. <strong>How fast may it go in?</strong> Rate is part of the prescription: many intravenous drugs cause collapse, flushing or arrhythmia if pushed quickly (speed shock), and potassium must never be given as a push. <strong>What if it leaks out of the vein?</strong> Know before you start whether the drug is a vesicant.",
            "<strong>Multidose vials</strong> (insulin, heparin, some vaccines and local anaesthetics) are dated and signed when first entered, swabbed before each use, entered with a new sterile needle and syringe every time, and discarded within the manufacturer's in-use period or the facility's standard — commonly 28 days; a vial opened on an unknown date is discarded. Every syringe is <strong>labelled</strong> with the drug, strength and patient the moment it is drawn up, unless it is given immediately by the person who prepared it; unlabelled syringes are discarded. Doses are drawn up by the nurse who will give them, one patient at a time, with hand hygiene, a clean surface and the ampoule neck snapped away from the fingers with a gauze swab (or a filter needle for glass ampoules).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-MDS-1640.svg",
          alt: "Preparing an injection — four questions before the needle: what do I reconstitute it with (the diluent is specified and the powder adds volume), can it share a line (incompatible drugs precipitate — flush between them), how fast may it go in (rate is part of the prescription and potassium is never a bolus), and what if it leaks out of the vein.",
          caption: "Diluent, compatibility, rate and extravasation — answered at the bench, before the drug reaches the patient. The final volume after reconstitution exceeds the volume of diluent added because the powder itself takes up space.",
        },
        {
          type: "table",
          heading: "Intradermal, subcutaneous and intramuscular injections",
          columns: ["Route", "Sites", "Angle, needle and volume", "Technique and traps"],
          rows: [
            ["<strong>Intradermal</strong> (BCG, Mantoux, allergy tests, local anaesthetic bleb)", "Inner forearm; BCG into the <strong>right upper arm</strong> over the deltoid insertion under Ghana's EPI schedule.", "<strong>10–15°</strong>, bevel up, just under the epidermis; 26–27 G short needle; 0.1 mL (BCG 0.05 mL under 12 months).", "A pale raised <strong>wheal</strong> (bleb) confirms the correct plane; no aspiration, no massage; if no wheal forms the dose was subcutaneous and the vaccine may not take."],
            ["<strong>Subcutaneous</strong> (insulin, heparin and enoxaparin, some vaccines, morphine in palliative care, adrenaline is given IM not SC)", "Abdomen (5 cm clear of the umbilicus), outer upper arm, anterior and lateral thigh, upper outer buttock; <strong>rotate sites</strong> within a region.", "<strong>45°</strong> with a pinched skin fold and a 25 G needle, or <strong>90°</strong> with the short 4–6 mm insulin pen needle; usually up to 1 mL (maximum about 2 mL).", "No aspiration; release the skin fold before withdrawing; do not rub heparin or enoxaparin sites (bruising) and do not expel the air bubble from a pre-filled enoxaparin syringe; injecting insulin into the same small area for years produces <strong>lipohypertrophy</strong>, a rubbery lump that absorbs insulin erratically — move away from it."],
            ["<strong>Intramuscular</strong> (vaccines, antibiotics, oxytocin and ergometrine, artesunate, pethidine and morphine, vitamin K, depot antipsychotics, iron dextran)", "<strong>Ventrogluteal</strong> (preferred in adults and children over 7 months — thick muscle, no major nerves or vessels), <strong>vastus lateralis</strong> (anterolateral thigh — the site of choice in infants under 12 months and for adrenaline in anaphylaxis), <strong>deltoid</strong> (small volumes only, 2–3 fingerbreadths below the acromion), <strong>dorsogluteal</strong> (upper outer quadrant — avoided because the sciatic nerve and superior gluteal artery lie close, the fat layer is thick and injections often end up subcutaneous).", "<strong>90°</strong>; 21–23 G, 25–38 mm needle according to muscle and fat (longer in the obese — a short needle delivers the drug into fat); maximum about <strong>3 mL</strong> in the ventrogluteal or vastus lateralis of an adult, <strong>1 mL</strong> in the deltoid, 1 mL in an infant's thigh, 0.5 mL in a neonate; divide larger volumes between two sites.", "Stretch the skin flat (or Z-track); insert in one smooth movement; <strong>aspirate</strong> for 5–10 seconds where policy requires (not for vaccines); inject slowly (about 1 mL per 10 seconds); withdraw and apply gentle pressure, not massage, for irritant drugs; the intramuscular route is unreliable in shock because the muscle is poorly perfused — use the vein."],
            ["<strong>Z-track intramuscular</strong>", "Ventrogluteal or vastus lateralis.", "As for IM.", "Pull the skin and subcutaneous tissue 2–3 cm to one side with the non-dominant hand, inject, wait ten seconds, withdraw and release — the displaced tissue seals the track so that irritant or staining drugs (iron dextran, some antipsychotic depots, hydroxocobalamin) do not leak back into the subcutaneous tissue and skin."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-DRC-2449.svg",
          alt: "Onset times by route, first-pass metabolism and the routes that avoid it, needle angles for intradermal (10–15 degrees), subcutaneous (45 degrees) and intramuscular (90 degrees) injection, and intramuscular site selection — ventrogluteal preferred, vastus lateralis in infants, deltoid for small volumes, dorsogluteal avoided.",
          caption: "Ten to fifteen degrees into the skin, forty-five into the fat, ninety into the muscle. The ventrogluteal site is preferred over the dorsogluteal because it is thick muscle far from the sciatic nerve; the vastus lateralis is the site for infants and for intramuscular adrenaline.",
        },
        {
          type: "text",
          heading: "Intravenous medicines — bolus, intermittent and continuous",
          paragraphs: [
            "An <strong>intravenous bolus (push)</strong> is given over the time stated for the drug — rarely faster than 3–5 minutes, and many drugs (furosemide, phenytoin, aminophylline, vancomycin, potassium never) over 10–60 minutes or by infusion — because <strong>speed shock</strong> from a rapid push causes flushing, headache, an irregular pulse, hypotension and collapse. Check the cannula is patent and in the vein first (flush 5–10 mL 0.9% sodium chloride, watch for swelling or pain), give the drug slowly watching the patient's face and the site, then flush again. An <strong>intermittent infusion</strong> dilutes the dose in 50–250 mL and runs it over 20–60 minutes (most antibiotics, metronidazole, paracetamol); a <strong>continuous infusion</strong> runs for hours (oxytocin, insulin, heparin, magnesium sulphate, dopamine, aminophylline) and is always on a <strong>pump or syringe driver</strong> with the rate calculated, checked by a second nurse and recorded. Vancomycin run in 20 minutes causes flushing of the face and neck with hypotension — the infusion reaction wrongly called 'red man syndrome' — and the answer is to slow it to at least 60 minutes, not to stop the antibiotic.",
            "Flush a cannula with 0.9% sodium chloride using a <strong>pulsatile push–pause technique</strong> that creates turbulence and clears the lumen, finishing with <strong>positive pressure</strong> (clamp while still pushing) so that blood does not reflux and clot in the tip. Flush before and after every drug and between two different drugs. Label every line and pump at the point where it enters the patient, especially when there are several — epidural, arterial, central and peripheral lines have been confused with fatal results. A <strong>central venous catheter</strong> (internal jugular, subclavian or femoral; PICC lines) is used for vesicants, concentrated potassium, parenteral nutrition and vasopressors; it needs strict asepsis for every access, a dedicated lumen for parenteral nutrition, and <strong>air embolism precautions</strong> — lines primed, all connections Luer-locked and tight, the patient supine or head-down with a Valsalva during insertion, removal and any open connection — because air drawn into a central vein by the negative pressure of a breath causes sudden breathlessness, chest pain, hypotension and arrest. If that happens during a dressing change: clamp the line, lie the patient on the <strong>left side head-down</strong>, give high-flow oxygen and call for help.",
          ],
        },
        {
          type: "table",
          heading: "Infusion pumps, drip sets and their alarms",
          columns: ["Device", "Use", "Rules and the alarm"],
          rows: [
            ["Gravity giving set (20 drops/mL adult; 15 drops/mL blood; 60 drops/mL paediatric burette)", "Fluids and simple intermittent infusions where no pump is available.", "Rate set by counting drops per minute; recount every hour; use a burette for every child so that no more than an hour's volume hangs; the rate drifts with arm position and the patient's movements."],
            ["Volumetric infusion pump", "Continuous and large-volume infusions, high-alert drugs, children.", "Programme the rate and volume to be infused and have a second nurse check the drug, concentration, rate and the pump display; never silence an alarm without finding the cause."],
            ["Syringe driver / syringe pump", "Small volumes and precise rates — insulin, heparin, oxytocin, vasopressors, magnesium, subcutaneous palliative-care infusions.", "Label the syringe with the drug, concentration and units per mL; a 'free flow' when the syringe is removed from the driver gives the whole syringe at once."],
            ["<strong>Occlusion alarm</strong>", "Pressure in the line has risen.", "First check the patient and the line from the pump to the cannula — a kinked tube, a closed clamp, a bent arm, a cannula that has tissued or clotted; never respond to repeated occlusion alarms by raising the pressure limit or restarting without finding the cause, because the next release delivers a bolus or the drug is going into the tissues."],
            ["<strong>Air-in-line alarm</strong>", "Air detected in the tubing.", "Clamp, remove the air at a port, re-prime, restart; check connections."],
            ["<strong>End of infusion / volume complete</strong>", "The programmed volume has run.", "Have the next bag or syringe ready for continuous high-alert infusions (insulin, inotropes, oxytocin) so the patient is not left without the drug."],
          ],
        },
        {
          type: "table",
          heading: "Complications at the cannula site — telling them apart by temperature",
          columns: ["Complication", "Signs", "Action"],
          rows: [
            ["<strong>Phlebitis</strong> (inflammation of the vein — chemical, mechanical or infective)", "Site <strong>red, warm and tender</strong>, pain along the vein, a palpable cord, the redness tracking up the vein; graded with a visual infusion phlebitis score at every shift.", "Stop the infusion, remove the cannula, apply a warm compress, elevate, document the score, resite in the other arm; swab the tip if pus is present; a cannula is removed at the first sign (score 2) and routinely replaced according to policy (commonly 72–96 hours or when clinically indicated)."],
            ["<strong>Infiltration</strong> (a non-vesicant fluid or drug leaking into the tissues)", "Site <strong>cool, pale, swollen</strong>, tight and uncomfortable, the infusion slows or the pump alarms, no blood return.", "Stop the infusion, remove the cannula, elevate the limb, warm or cold compress according to the fluid, mark the edge of the swelling, resite; record the volume infiltrated."],
            ["<strong>Extravasation</strong> (a <strong>vesicant</strong> leaking — cytotoxics such as vincristine and doxorubicin, concentrated potassium and calcium, 50% dextrose, phenytoin, aciclovir, vasopressors, hypertonic saline, sodium bicarbonate)", "As infiltration plus burning pain, blistering and, hours to days later, necrosis that may need skin grafting.", "<strong>Stop the infusion immediately but leave the cannula in</strong>; <strong>aspirate</strong> as much drug as possible through it; <strong>do not flush</strong>; remove the cannula; elevate; mark and photograph the area; apply the antidote or compress the protocol specifies (warm for vinca alkaloids, cold for most others; hyaluronidase or phentolamine for vasopressors where available); inform the prescriber and pharmacy; complete an incident form; refer early for plastic-surgery review."],
            ["<strong>Infusion-related reaction</strong>", "Flushing, rash, itching, wheeze, hypotension or rigors during an infusion.", "Stop the infusion, keep the line with 0.9% sodium chloride, assess airway, breathing and circulation; anaphylaxis gets intramuscular adrenaline 0.5 mg at once; a rate-related reaction (vancomycin) is restarted slowly once settled."],
            ["<strong>Line infection and sepsis</strong>", "Pus or spreading redness at the site, fever and rigors with no other source, especially with central lines and parenteral nutrition.", "Blood cultures from the line and peripherally, remove the cannula and culture the tip, antibiotics within the hour if septic; prevention is hand hygiene, skin antisepsis, a dressing that stays dry and intact, minimum access, and removal the day the line is no longer needed."],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-DRC-2431.svg",
          alt: "Intravenous line complications — infiltration (cool, pale, swollen) versus phlebitis (red, warm, tender with a cord) by skin temperature, the ordered response to vesicant extravasation (stop, leave the cannula, aspirate, do not flush, elevate, antidote, report), air embolism positioning on the left side head-down, and potassium chloride safety.",
          caption: "Cool and pale means the fluid is in the tissues; red and warm means the vein is inflamed. For a vesicant: stop, keep the cannula to aspirate, never flush, elevate and escalate. Air in a central line: clamp, left side head-down, oxygen, call.",
        },
        {
          type: "list",
          heading: "Sharps and needle safety — for the patient and for you",
          items: [
            "One sterile needle and syringe per patient per injection; never re-enter a multidose vial with a used needle; never 'top up' from the same syringe for two patients.",
            "<strong>Never recap a used needle</strong>; if recapping is unavoidable use the one-handed scoop technique; use safety-engineered devices where available.",
            "Dispose of the needle and syringe as one unit into a puncture-proof sharps container at the point of use; seal and replace the container when it is <strong>three-quarters full</strong>; sharps containers are never emptied, decanted or placed where children can reach them.",
            "After a needlestick injury: let it bleed gently, wash with soap and running water (do not scrub or suck), report at once, assess the source patient's HIV and hepatitis B status with consent, start HIV post-exposure prophylaxis as soon as possible and within 72 hours for 28 days if indicated, give hepatitis B vaccine and immunoglobulin if not immune, and complete the incident form.",
            "Draw up and give injections where you cannot be jostled; keep an uncapped needle in sight and in your hand only; never pass an exposed sharp hand to hand.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Three injectables that kill when the technique is wrong",
          body: "Concentrated potassium chloride given as a push stops the heart — it is always diluted, always on a pump, never a bolus. A vesicant that extravasates destroys tissue — stop, leave the cannula, aspirate, do not flush. Air in a central line embolises — prime, Luer-lock, supine, clamp before disconnecting. In all three the nurse who prepared the drug had the information to prevent it.",
        },
        {
          type: "callout",
          tone: "exam",
          title: "Numbers to carry into the examination",
          body: "Intradermal 10–15°; subcutaneous 45° (90° with a short pen needle); intramuscular 90°. Maximum IM volume: about 3 mL ventrogluteal or vastus lateralis in an adult, 1 mL deltoid, 1 mL infant thigh. Vastus lateralis for infants under 12 months and for adrenaline in anaphylaxis; ventrogluteal preferred in adults; dorsogluteal avoided because of the sciatic nerve. Z-track for iron dextran and other staining or irritant drugs. Flush with pulsatile push–pause and a positive-pressure finish. Cool, pale, swollen = infiltration; red, warm, tender with a cord = phlebitis. Vesicant extravasation: stop, aspirate, do not flush. Sharps bin three-quarters full. Multidose vial undated = discard.",
        },
      ],
      keyPoints: [
        "Before any injection answer four questions: the right diluent (and remember displacement volume), whether the drug can share a line (flush between drugs; if in doubt do not mix), how fast it may go in (rate is part of the prescription; potassium is never a bolus), and what to do if it extravasates — and inspect every solution, discard anything cloudy or undated, label every syringe and give what you yourself drew up.",
        "Intradermal injections go in at 10–15° to raise a wheal (BCG in the right upper arm); subcutaneous at 45° into a pinched fold or 90° with a short pen needle, up to 1–2 mL, sites rotated and never rubbed; intramuscular at 90° with a needle long enough to reach muscle, up to 3 mL in the ventrogluteal or vastus lateralis and 1 mL in the deltoid.",
        "The ventrogluteal site is preferred in adults, the vastus lateralis in infants under 12 months and for intramuscular adrenaline, the deltoid only for small volumes, and the dorsogluteal is avoided because of the sciatic nerve; Z-track seals the track for irritant and staining drugs; the IM route is unreliable in shock.",
        "Intravenous boluses go in slowly over the time stated to prevent speed shock; intermittent infusions over 20–60 minutes; continuous high-alert infusions always on a pump or syringe driver with a second check; vancomycin run too fast causes a flushing reaction that is slowed, not stopped.",
        "Flush with a pulsatile push–pause technique and a positive-pressure finish, before and after every drug; label every line; central lines need strict asepsis, a dedicated lumen for parenteral nutrition and air-embolism precautions — if air enters, clamp, left side head-down, oxygen, call.",
        "An occlusion alarm means find the cause from pump to cannula, never raise the limit or restart blindly; phlebitis is red, warm and tender with a palpable cord; infiltration is cool, pale and swollen; vesicant extravasation is managed by stopping, leaving the cannula to aspirate, never flushing, elevating, applying the protocol compress or antidote and escalating early.",
        "One sterile needle per patient per injection, never recap, dispose at the point of use into a sharps container sealed at three-quarters full, and after a needlestick wash, report, assess the source and start post-exposure prophylaxis within 72 hours if indicated.",
      ],
      quiz: {
        questionIds: ["NG-MOD-PHARM-005"],
        categories: ["pharmacology-parenteral"],
        keywords: ["intradermal","subcutaneous","intramuscular","ventrogluteal","dorsogluteal","z track","needle","angle","aspirate","injection site","rotate","rotated","injecting","same small area","reconstitut","displacement","cloudy","specks","vial","ampoule","intravenous push","bolus","speed shock","rate of administration","compatib","flush","pulsatile","push pause","positive pressure","phlebitis","palpable cord","infiltrat","extravasat","vesicant","cool, pale","cannula site","infusion pump","occlusion","air embol","central line","central catheter","vancomycin","sharps","needlestick","burette","giving set","drip","bcg","infant under 12 months","stain and irritate","injection volume","two different intravenous drugs","same cannula","primed","connections","triple lumen","sampling above","above an infusion","syringe","injection","intravenous therapy","intravenous drug","intravenous infusion","infusion","routes of administration","preferred over the dorsogluteal","which site is preferred","preferred for an intramuscular","intramuscular injection site","injection site selection","subcutaneous injection sites","why must subcutaneous","faintly cloudy","floating specks","final volume after reconstituting","exceed the volume of diluent","cold, pale","swelling, pallor and coolness","red, warm and tender","redness extending along the vein","vesicant cytotoxic drug","cyclophosphamide extravasates","alarms repeatedly","occlusion warning","central line dressing","line be primed","connections kept tight","flushing of the face and neck","vancomycin over 20 minutes","flushing a cannula","why is the rate","rapid intravenous push","irregular pulse and collapse","multidose vial","a cannula","the cannula","cannulat","peripheral cannula"]
      },
    },
  ],
};
