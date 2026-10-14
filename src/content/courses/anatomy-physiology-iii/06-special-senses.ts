import type { CourseModule } from "../types";

export const specialSenses: CourseModule = {
  slug: "special-senses",
  title: "Special senses: eye, ear, smell and taste",
  summary:
    "The windows and antennae: globe anatomy with aqueous flow, the visual pathway with field defects, refraction and pupils, bedside eye tests, and the eye disorders from cataract to giant cell arteritis with red-eye and vision-loss drills — then ear anatomy with hearing and balance, Rinne and Weber with conductive versus sensorineural loss, the four vertigo sorts with HINTS, smell and taste with anosmia, and ear care with deaf communication.",
  lessons: [
    {
      slug: "the-eye-and-vision",
      title: "The eye and vision",
      minutes: 20,
      objectives: [
        "Describe the globe's coats, chambers, lens and retina.",
        "Trace the visual pathway and localize field defects.",
        "Explain refraction errors and the near/pupil responses.",
        "Perform bedside eye tests and run red-eye and vision-loss drills.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The globe: three coats, two fluids, one lens",
          paragraphs: [
            "Outer <strong>sclera</strong> (white, tough) fronts into transparent <strong>cornea</strong> (avascular — oxygen from tears/air, transplants rarely reject); middle <strong>choroid</strong> (blood + darkroom) fronts into <strong>iris</strong> (pigment + sphincter/dilator) and <strong>ciliary body</strong> (makes <strong>aqueous</strong> + focuses via zonules); inner <strong>retina</strong> (photoreceptors → bipolar → ganglion, processing before the brain). <strong>Aqueous</strong> flows ciliary → behind iris → <strong>pupil</strong> → front chamber → <strong>trabecular meshwork → canal of Schlemm</strong> — blocked drainage = <strong>glaucoma</strong> (pressure kills ganglion cells side-vision-first). <strong>Lens</strong> + zonules + ciliary <strong>accommodate</strong> (round for near — the <strong>near triad</strong>: converge + accommodate + constrict); <strong>vitreous</strong> gel holds the retina on (ageing liquefies: <strong>floaters</strong> common, <strong>flashes + shower + curtain = detachment</strong>). Retina's landmarks: <strong>fovea/macula</strong> (sharp colour centre — AMD destroys reading, spares navigation), <strong>optic disc</strong> (blind spot + vessels exit — <strong>cupping</strong> in glaucoma, <strong>swelling/papilloedema</strong> in raised ICP, <strong>silver-wiring</strong> in hypertension).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0039.svg",
          alt: "Eye sagittal section: cornea, iris and pupil, lens with zonules, aqueous flow from ciliary through pupil to trabecular meshwork and Schlemm canal, vitreous gel, retina with fovea and macula, optic disc blind spot, sclera, choroid. Visual pathway: nasal fibres cross at the chiasm, temporal stay; lesions give blind eye (nerve), bitemporal loss (chiasm/pituitary), homonymous hemianopia (tract/radiation/occipital). Cataract, open-angle glaucoma drops-for-life, yearly diabetic retinal screening, absent red reflex referral.",
          caption: "Coats, fluids, lens, pathway — and pressure that steals sides silently.",
        },
        {
          type: "text",
          heading: "Pathway, refraction, pupils",
          paragraphs: [
            "Ganglion axons → <strong>optic nerve</strong> → <strong>chiasm</strong> (<strong>nasal fibres cross</strong>, temporal stay) → <strong>tract</strong> → LGN → <strong>optic radiation</strong> (Meyer's loop dips temporal: upper-field loss) → <strong>occipital cortex</strong>. Localize: nerve = that eye blind (+ <strong>RAPD</strong>: swinging-flash dilates the bad eye); chiasm = <strong>bitemporal hemianopia</strong> (pituitary — comb-hair test); tract/radiation/occipital = <strong>homonymous hemianopia</strong> (stroke — same half both eyes, neglect side). <strong>Refraction</strong>: <strong>emmetropia</strong> (on retina), <strong>myopia</strong> (long eye, front-focused — concave), <strong>hyperopia</strong> (short, behind — convex, esotropia in children), <strong>astigmatism</strong> (rugby-ball cornea — cylindrical), <strong>presbyopia</strong> (stiff lens ~45+ — readers). <strong>Pupils</strong>: sympathetic dilates (fear, fight), parasympathetic constricts (near, light) — <strong>PEARL</strong> every neuro check; pinpoint (opiates, pontine), blown (3rd nerve, herniation), mid-fixed (brainstem death testing territory). Bedside set: <strong>acuity</strong> (Snellen 6 m, each eye, glasses-on documented, <strong>pinhole</strong> corrects refractive), near card, <strong>fields</strong> (confrontation all quadrants + inattention), <strong>movements</strong> (H-pattern + nystagmus), <strong>fundoscopy</strong> (red reflex → disc/cup/vessels/macula — dilate where protocol allows), <strong>IOP</strong> (tonometry; finger-tension emergency only), Ishihara colour.",
          ],
        },
        {
          type: "table",
          heading: "Eye disorders: spot, sort, send",
          columns: ["Condition", "Spot it", "Sort it", "Send / treat"],
          rows: [
            ["Cataract", "Painless blur + glare + faded colour, white pupil late", "Age, diabetes, steroids, trauma; red reflex dull", "Phaco + lens, day case — commonest curative surgery on earth"],
            ["Open-angle glaucoma", "SILENT side-vision loss + cupped disc + raised IOP", "Age, family, black African risk, steroids; visual fields", "Drops FOR LIFE (prostaglandin first) → laser → surgery; adherence = sight"],
            ["Acute angle-closure", "Pain + red + halos + fixed mid-dilated pupil + vomiting + rock-hard eye", "Shallow chamber, hyperopia, dark cinema, dilating drops", "EMERGENCY: acetazolamide + drops + laser iridotomy same-day — hours to blindness"],
            ["AMD (wet/dry)", "Distorted/central loss (Amsler grid wavy), drusen/dry; bleed/wet", "Age, smoking, family; OCT + fluorescein", "Wet: anti-VEGF injections urgently; dry: smoking/ diet/AREDS + low-vision aids"],
            ["Diabetic retinopathy", "Silent till bleed: dots/blots, macular oedema, new vessels", "Duration + HbA1c + BP; YEARLY screening photography", "Laser/anti-VEGF before bleed; glucose + BP + lipids control — screen, don't wait"],
            ["Retinal detachment", "Flashes + shower of floaters + dark curtain + field loss", "Myopia, trauma, post-cataract, diabetic traction", "SAME-DAY vitreoretinal (gas/buckle/vitrectomy) — macula-on = urgency"],
            ["Red eye: benign vs red-flag", "Benign: viral/bacterial/allergic conjunctivitis — gritty, sticky, itchy, VISION NORMAL", "RED FLAGS: pain, vision loss, photophobia, fixed pupil, contact lens, trauma, halos, headache/nausea", "Benign: hygiene + topical per cause + return advice; ANY red flag: slit-lamp + fluorescein + same-day ophthalmology"],
            ["Giant cell arteritis", ">50 + new headache + scalp tenderness + JAW CLAUDICATION + visual symptoms", "ESR/CRP high; temporal biopsy (don't wait for it)", "STEROIDS IMMEDIATELY (sight already lost is LOST) + rheumatology — jaw pain on chewing is the giveaway question"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Chemical burn: irrigate litres before anything else",
          body: "Alkali (cement, bleach, ammonia) worse than acid — both demand LITRES of saline/water irrigation STARTED AT THE SCENE and continued (Morgan lens where available), pH checked to neutral, particles swept from fornices, then ophthalmology. Never delay irrigation for history, consent forms or transport — the cornea melts while paperwork waits. Contact-lens red eye with pain/photophobia = microbial keratitis until slit-lamp clears it (pseudomonas eats corneas in hours — stop lens wear, culture, fortified drops). Penetrating injury: shield (never pad/pressure), NBM, tetanus, CT, no drops/probing — vitreous on the cheek is theatre, not triage.",
        },
      ],
      keyPoints: [
        "Sclera/cornea, choroid/iris/ciliary, retina; aqueous drains via trabecular-Schlemm (blocked = glaucoma); lens accommodates; vitreous holds retina.",
        "Fovea/macula = sharp centre; disc = blind spot (cupping glaucoma, papilloedema ICP); floaters common, flashes + curtain = detachment.",
        "Nasal fibres cross: nerve = blind eye + RAPD; chiasm = bitemporal; tract/occipital = homonymous hemianopia.",
        "Myopia (concave), hyperopia (convex), astigmatism (cylindrical), presbyopia (readers ~45+); PEARL every neuro check.",
        "Bedside: Snellen + pinhole, confrontation fields, H-movements, fundoscopy (red reflex → disc → vessels → macula), IOP.",
        "Cataract (day-case cure), glaucoma (drops for life), angle-closure/GCA/detachment/chemical = same-day emergencies; diabetics screened yearly.",
      ],
      quiz: {
        keywords: ["eye", "cornea", "aqueous", "glaucoma", "lens", "cataract", "retina", "macula", "optic disc", "visual pathway", "hemianopia", "acuity", "fundoscopy", "detachment", "giant cell arteritis"],
        categories: ["fundamentals", "medsurg"],
      },
    },
    {
      slug: "the-ear-smell-and-taste",
      title: "The ear, smell and taste",
      minutes: 20,
      objectives: [
        "Describe outer, middle and inner ear with hearing and balance.",
        "Perform and interpret Rinne and Weber with loss types.",
        "Sort the four vertigos with HINTS and BE-FAST.",
        "Explain smell and taste with anosmia causes and safety.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Three ears in one: funnel, lever, sensor",
          paragraphs: [
            "<strong>Outer</strong>: pinna funnels, canal (S-shaped — pull pinna <strong>up-back adults, down-back children</strong> for otoscopy) + <strong>wax</strong> (protective, self-cleaning — buds ram it: <strong>never syringe/irrigate without otoscopy + history</strong>: perforation, grommets, mastoid cavity, single hearing ear = ENT). <strong>Middle</strong>: <strong>tympanic membrane</strong> → <strong>ossicles</strong> (malleus/incus/stapes lever ×22 onto <strong>oval window</strong>) + <strong>Eustachian tube</strong> (pressure equalizer — blocked in colds/flights/children: <strong>glue ear</strong>, autoinflation, decongestants limited) + stapedius/tensor guards. <strong>Inner</strong>: <strong>cochlea</strong> (tonotopic spiral, <strong>hair cells</strong> — outer amplify, inner signal; killed by noise, age, ototoxins — <strong>never regenerate</strong>) + <strong>vestibular</strong> (3 semicircular canals sense rotation, <strong>utricle/saccule otoliths</strong> sense gravity — loose crystals = <strong>BPPV</strong>). Sound: air → TM → ossicles → oval → cochlear fluid → hair cells → CN VIII → brainstem → auditory cortex; balance: canals/otoliths + vision + proprioception → cerebellum/vestibular nuclei — mismatch = vertigo/nausea.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0040.svg",
          alt: "Ear schematic: canal, tympanic membrane, ossicles to oval window, cochlea spiral, vestibular canals and otoliths, Eustachian tube. Rinne/Weber grid: normal AC greater than BC with midline Weber; conductive shows BC greater than AC with Weber to the bad ear; sensorineural keeps AC greater but reduced with Weber away. Vertigo four-sort: BPPV (seconds, positional, Epley), neuritis (days, HINTS peripheral), Ménière's (vertigo plus tinnitus plus fullness plus loss), stroke (HINTS central, BE-FAST, can't walk). Ototoxic aminoglycoside-furosemide duo, syringing rules, anosmia causes in footer.",
          caption: "Funnel, lever, sensor — fork-tested, vertigo-sorted, crystals repositioned.",
        },
        {
          type: "text",
          heading: "Hearing loss: conductive versus sensorineural",
          paragraphs: [
            "Bedside: <strong>whisper test</strong> (numbers at arm's length, mask lip-reading), <strong>Weber</strong> (fork on vertex — midline? or lateralizes?), <strong>Rinne</strong> (mastoid vs canal — AC > BC normal), then <strong>audiometry</strong> (air-bone gap = conductive; both down = sensorineural; shape names disease). <strong>CONDUCTIVE</strong> (sound blocked reaching cochlea — Rinne BC>AC, Weber TO bad ear): wax, <strong>otitis externa</strong> (tragus tender, swimmer's — wick + drops + keep dry), <strong>otitis media</strong> (bulging red TM, fever, otalgia — amoxicillin per protocol, <strong>mastoiditis</strong> watch: post-auricular swelling = emergency), <strong>perforation</strong> (trauma/slap/infection — keep dry, most heal, ENT if not), <strong>glue ear</strong> (dull TM, school hearing loss — watch + autoinflation + grommets), <strong>otosclerosis</strong> (young adult, family, paracusis — stapedectomy). <strong>SENSORINEURAL</strong> (cochlea/nerve dead — Rinne AC>BC reduced, Weber AWAY): <strong>presbycusis</strong> (high-tone age loss — aids + loop + face-to-face), <strong>noise</strong> (4 kHz notch — protect + compensate), <strong>ototoxic</strong> (<strong>aminoglycosides + furosemide</strong> duo: levels + tinnitus/hearing watch + warn), <strong>Ménière's</strong> (low-tone fluctuating + vertigo + tinnitus + fullness), <strong>acoustic neuroma</strong> (unilateral + tinnitus + imbalance — MRI), <strong>sudden SNHL</strong> (hours — <strong>steroids within days</strong>, ENT emergency). Aids: moulds clean, batteries, feedback (whistle = refit), loop systems, <strong>face + light + rephrase + pen + booked BSL interpreter</strong> — shouting distorts, facing works.",
          ],
        },
        {
          type: "text",
          heading: "Vertigo: four sorts, one stroke trap",
          paragraphs: [
            "<strong>BPPV</strong> (seconds, rolling in bed/looking up, <strong>Dix-Hallpike</strong> positive — torsional nystagmus + latency + fatigues → <strong>Epley repositions</strong>, cures most, Brandt-Daroff backup). <strong>Vestibular neuritis</strong> (days of spinning + vomiting + can't walk straight, post-viral; <strong>+ hearing loss = labyrinthitis</strong>): <strong>HINTS peripheral</strong> (head-impulse positive, direction-fixed nystagmus, no skew) — steroids + antiemetics + early mobilization (compensation needs movement, not bedrest). <strong>Ménière's</strong> (episodic vertigo + <strong>tinnitus + aural fullness + fluctuating low-tone loss</strong>, minutes–hours): low-salt + betahistine/diuretic per protocol, <strong>drop attacks</strong> (Tumarkin — driving/work warning), gentamicin/surgery for refractory. <strong>STROKE/TIA</strong> (posterior circulation mimics neuritis): <strong>HINTS central</strong> (normal impulse, direction-changing nystagmus, skew), <strong>BE-FAST</strong> signs, <strong>can't walk unaided</strong>, severe headache/neck pain (dissection) — <strong>thrombolysis pathway, never meclizine-and-discharge</strong>. Drugs review every dizzy patient (aminoglycosides, furosemide, antihypertensives, sedatives, anticonvulsants) + orthostatics + ECG (arrhythmia masquerades) — vertigo is a symptom with a dozen addresses.",
          ],
        },
        {
          type: "text",
          heading: "Smell and taste: flavour, safety, appetite",
          paragraphs: [
            "<strong>Smell</strong> (CN I: olfactory epithelium → <strong>cribriform plate</strong> → bulb — head injury shears it, <strong>anosmia + CSF rhinorrhoea = base-of-skull until ruled out</strong>, no nose-blowing/straining) warns (gas, smoke, spoiled food) and flavours (taste-is-80%-smell — the blocked-nose bland meal). <strong>Anosmia</strong>: viral/<strong>COVID</strong> (smell-training + steroids per protocol, most recover months), polyps/allergy (steroids/surgery), Parkinson's/Alzheimer's <strong>prodrome</strong> (years before tremor/memory — refer the isolated anosmic elder), Kallmann (congenital + delayed puberty). <strong>Taste</strong> (sweet/salt/sour/bitter/umami buds + CN VII/IX/X + saliva): lost in <strong>dry mouth</strong> (drugs, radiotherapy, Sjögren's — saliva substitutes + hydration + dental), <strong>zinc deficiency</strong>, chemotherapy (metallic — plastic cutlery + marinades + cold foods), thrush (white plaques + burning — nystatin/fluconazole + denture hygiene). Screen appetite/weight/safety in every anosmic/ageusic patient (gas detectors, smoke alarms, date-checking taught), refer ENT/neurology where flagged — and remember: the elder who \"lost appetite\" may have lost smell first.",
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Ear drops done right, deafness met halfway",
          body: "Drops: warm in hands (cold = vertigo), lie affected-ear-up 5 minutes, straighten canal (up-back adult), drops onto wall not drum, tragus-press, cotton loosely not packed, full course + keep dry. Syringing/irrigation: otoscopy first, history of perforation/grommets/mastoid/cleft palate/single ear (all = ENT), consent + warn vertigo/tinnitus, stop for pain/bleeding/dizziness. Deaf communication: face + light + quiet + rephrase (not repeat-shout), pen/paper/loop, hearing-aid check (mould, battery, whistle), booked qualified interpreter for consent/bad news/complex plans — family interpreting is a last resort, never for children. Document preferred method where everyone sees it.",
        },
      ],
      keyPoints: [
        "Outer funnels (wax protects), middle levers ×22 (TM + ossicles + Eustachian), inner senses (cochlear hair cells + vestibular canals/otoliths).",
        "Rinne AC>BC normal; conductive: BC>AC + Weber TO; sensorineural: reduced AC>BC + Weber AWAY; audiometry confirms.",
        "Conductive: wax/externa/media/glue/perforation/otosclerosis (mostly fixable); SNHL: presbycusis/noise/ototoxic/Ménière's/sudden (steroids fast).",
        "Vertigo: BPPV (Epley) vs neuritis (HINTS peripheral, mobilize) vs Ménière's (triad + drop attacks) vs STROKE (HINTS central + BE-FAST + can't walk).",
        "Smell (CN I, cribriform shear in head injury): viral/COVID/polyps/Parkinson's prodrome; taste needs saliva + smell — screen appetite/safety.",
        "Drops warm + lie 5 min; syringing needs otoscopy + history; deaf: face/loop/pen/interpreter, never family for consent.",
      ],
      quiz: {
        keywords: ["ear", "tympanic membrane", "ossicles", "cochlea", "Eustachian", "Rinne", "Weber", "audiometry", "otitis", "presbycusis", "ototoxic", "BPPV", "Epley", "Meniere", "anosmia"],
        categories: ["fundamentals", "medsurg"],
      },
    },
  ],
};
