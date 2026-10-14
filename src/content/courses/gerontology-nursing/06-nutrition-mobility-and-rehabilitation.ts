import type { CourseModule } from "../types";

export const nutritionMobilityAndRehabilitation: CourseModule = {
  slug: "nutrition-mobility-and-rehabilitation",
  title: "Nutrition, mobility and rehabilitation",
  summary:
    "Fuel and movement: MUST screening with mouth/body/money causes, fortified feeding with company, hydration vigilance against delirium, dysphagia textures with aspiration prevention, re-feeding danger and tube-feed safety — then day-1 mobilisation against deconditioning, exercise prescription, fitted-and-trained assistive devices, the home-hazards checklist, hip-fracture speed pathway, and elder-set rehab goals with celebrated metres.",
  lessons: [
    {
      slug: "nutrition-and-hydration-in-elders",
      title: "Nutrition and hydration in elders",
      minutes: 20,
      objectives: [
        "Screen with MUST and act on scores.",
        "Fix mouth, body and money causes.",
        "Feed with fortify, company and fluids.",
        "Guard swallows and re-feeding risk.",
      ],
      blocks: [
        {
          type: "text",
          heading: "MUST: screen every elder",
          paragraphs: [
            "Malnutrition hides behind clothes and politeness — <strong>MUST</strong> (5 steps, every admission + monthly + yearly): BMI (>20=0, 18.5–20=1, <18.5=2) + unplanned loss 3–6 months (<5%=0, 5–10%=1, >10%=2) + acute disease/no intake >5 days (=2) → <strong>0 low</strong> (routine care) · <strong>1 medium</strong> (watch + fortify + rescreen) · <strong>≥2 HIGH</strong> (treat: dietician + fortify + supplements + weekly weights + cause hunt). MUAC where scales fail (bed-bound, no stadiometer — mid-upper-arm tapes travel to CHPS). Then ask WHY (fix causes, not just calories): <strong>MOUTH</strong> (teeth, dentures, thrush, dry mouth — fix mouth FIRST: the unfed elder with thrush needs nystatin before supplements) · <strong>BODY+MIND</strong> (dysphagia, drugs — nausea, anorexia, dry mouth — depression, dementia forgetting meals, pain, constipation) · <strong>MONEY+MEALS</strong> (poverty, can't shop/cook, eating alone, alcohol displacing food — welfare + family rota + LEAP where apt). Weigh weekly, chart intake honestly, rescreen — nutrition documented is nutrition done (PRO-I M5).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-GRN-0011.svg",
          alt: "MUST scoring: BMI plus weight loss plus acute disease to low medium high actions with MUAC note. Causes triad: mouth fixed first, body-mind, money-meals. Feeding care: protein fortify small-frequent favourites company dentures upright supplements; fluids jug in reach prompted sips; dehydration signs. Dysphagia: signs, NBM till screened, textures, upright chin-tuck, referral, NG PEG decisions; aspiration prevention with mouth care. Re-feeding risk with low-start thiamine electrolytes; tube-feed position checks and head-up.",
          caption: "Screen with MUST, fix the mouth first, feed with company — fluids in reach always.",
        },
        {
          type: "text",
          heading: "Feeding + fluids that work",
          paragraphs: [
            "Fortify: protein EACH meal (beans, fish, eggs, groundnut — Ghana's proteins) + enrich (milk, oil, groundnut paste stirred into porridge) + small frequent meals + FAVOURITE foods (appetite obeys memory) + COMPANY (eat WITH, not watched — lonely trays return full) + dentures IN + upright 30–45 min after + prescribed supplements BETWEEN meals (not instead). <strong>Fluids 1.5–2 L</strong> (unless restricted — heart/kidney limits honoured): water jug IN REACH (the bedside jug across the room might as well be in Accra), prompted sips each contact, favourite cup (dignity drinks more), monitor (dark urine + confusion + constipation + postural drop = DRY — dehydration delirium, M03). Thirst fails elders — schedule drinks, don't await requests. Dehydration signs: dry tongue/axilla, postural drop, AKI (creatinine up, urine down), new confusion — fluids prescribed + monitored + documented (input/output where indicated).",
          ],
        },
        {
          type: "text",
          heading: "Swallows + re-feeding + tubes",
          paragraphs: [
            "<strong>Dysphagia</strong> (stroke, Parkinson, dementia): cough/choke, wet/gurgly voice, pocketing food, weight loss, recurrent chest infections → <strong>NBM until screened</strong> (water test per protocol — never 'try and see' with a full meal) → textures (soft → minced → pureed; thickened fluids as advised) → upright 90°, chin-tuck, small bites, NO rushing, NO syringe-squirting (aspiration!) → speech/dietician referral → NG short-term / PEG decisions WITH goals + family (M05: comfort vs prolonging in advanced dementia — document the reasoning). Aspiration prevention = positioning + textures + <strong>mouth care thrice daily</strong> (dirty mouths seed lungs). <strong>Re-feeding risk</strong> (starved >5 days, BMI <16, big losses, alcoholism): start LOW + thiamine + watch K+/Mg/PO4 + doctor-led — feeding fast kills (cardiac failure, seizures). <strong>Tube feeds</strong>: verify position EVERY use (pH/placement per protocol — NEVER 'whoosh test' alone), head up 30–45°, flush before/after meds, mouth care continues (tube ≠ mouth retired), diarrhoea/constipation managed, weights + labs trended.",
          ],
        },
        {
          type: "table",
          heading: "'Not eating' — find it, fix it",
          columns: ["Clue", "Likely cause", "Fix"],
          rows: [
            ["White tongue, dentures unworn, drooling", "Thrush + ill-fitting dentures", "Treat + refit + mouth care; soft foods meanwhile"],
            ["Coughs on water, wet voice, 2 chest infections", "Dysphagia + aspiration", "NBM → screen → textures + upright + referral"],
            ["Eats half, sad, sleeps days, GDS 8", "Depression + loneliness", "Mood care + company meals + favourites + follow-up"],
            ["Daughter: 'no money for meat/fish'", "Poverty + food insecurity", "Beans/groundnut/eggs plan + welfare/LEAP + family rota"],
            ["Starved 8 days, family begs 'feed plenty'", "Re-feeding risk!", "Doctor-led low start + thiamine + electrolytes watched"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Re-feeding kills the rescued",
          body: "The starved elder (famine, neglect, post-illness, alcoholism) refed fast develops cardiac failure, seizures and death within days — insulin surges drive phosphate/potassium/magnesium intracellular, hearts and brains starve. Rules: risk-assess EVERY malnourished admission (BMI <16, >15% loss, >10 days minimal intake, alcoholism), start at ~10 kcal/kg/day where high-risk per protocol, thiamine BEFORE feeds, electrolytes monitored, doctor-led, family counselled ('small feeds save — plenty kills'). Rescue feeding is intensive care with a spoon — respect it.",
        },
      ],
      keyPoints: [
        "MUST every admission + monthly: 0 routine, 1 fortify + watch, ≥2 treat + dietician + weekly weights.",
        "Causes: mouth (fix FIRST), body/mind, money/meals — treat cause with calories.",
        "Feed: protein + fortify + small-frequent + favourites + company + dentures + upright.",
        "Fluids scheduled 1.5–2 L in reach; dry = dark urine + confusion + constipation + drop.",
        "Dysphagia: NBM till screened → textures + upright + referrals; mouth care prevents aspiration.",
        "Re-feeding: start low + thiamine + electrolytes, doctor-led; tubes verified every use.",
      ],
      quiz: {
        keywords: ["MUST", "malnutrition", "MUAC", "fortify", "protein", "hydration", "dehydration", "dysphagia", "aspiration", "textures", "re-feeding", "thiamine", "tube feed", "dentures", "thrush"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "mobility-rehab-and-home-safety",
      title: "Mobility, rehab and home safety",
      minutes: 20,
      objectives: [
        "Mobilise from day 1 against deconditioning.",
        "Prescribe strength, balance and walking.",
        "Fit and train assistive devices.",
        "Safe-proof homes and run hip pathways.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Day 1 or decline",
          paragraphs: [
            "Bed rest melts elders: muscle 1–3% PER DAY, bones thin, clots form, lungs + bowels stall, delirium blooms (M03), pressure damage starts (M02) — 'rest' prescribed casually becomes dependence permanently. <strong>Mobilise from admission</strong>: sit out for meals (pyjamas ban — dressed = mindset), stand + step with aids + supervision, walk the corridor with targets ('to the window today, nurses' station Friday'), physio DAY 1 (not 'when stable' — movement IS stabilizing), chairs not beds for daytime. <strong>Exercise prescription</strong> (write it, M01): STRENGTH 2×/week (bands/weights/bodyweight — sarcopenia reverses at ANY age) + BALANCE 3×/week (heel-toe, one-leg, tai-chi-style — falls halve) + WALK 150 min/week (grouped, aided, progressed) + FLEXIBILITY daily (joints oiled). Contraindications honoured (unstable cardiac, acute fracture pre-fixation, severe hypotension) — but 'frail' alone never contraindicates movement; it mandates SUPERVISED movement.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-GRN-0012.svg",
          alt: "Deconditioning day-one warning with mobilisation prescription and exercise Rx. Aids panels: stick opposite-hand fitted, frame indoors, wheelchair fitted with pressure plan, home aids rails seat commode ramp bell. Home hazards checklist: light floor bathroom bed stairs kitchen outside. Hip fracture pathway: suspect signs, X-ray, analgesia, surgery under 48 hours, day-1 mobilisation, bone protection, home rehab. Rehab goals elder-set SMART with OT adaptations and celebrated metres. Discharge checklist: aids home family CHPS.",
          caption: "Mobilise day 1, fit aids properly, safe-proof the home — metres celebrated loudly.",
        },
        {
          type: "text",
          heading: "Aids: assess, fit, train, review",
          paragraphs: [
            "<strong>Stick</strong>: opposite hand to weak leg, elbow 20–30° bent, height to wrist crease — mild unsteadiness; ferrule intact (worn tips slip). <strong>Frame</strong>: lift-step-place rhythm, indoors + level ground — weak/very unsteady; tennis-ball myths aside, fit height + brakes where wheeled. <strong>Wheelchair</strong>: FITTED (seat/width/footplates) + pressure cushion + plan (shifts, skin checks — M02) — NEVER a parking bay (push to activities, stand transfers practised). <strong>Home aids</strong>: rails (toilet + stairs BOTH sides), raised toilet seat, commode (night saviour), shower stool + non-slip, bed lever + bell, ramp over steps. Process: assess (physio/OT/nurse — TUG + home layout) → fit (sized, adjusted) → TRAIN (elder + family, teach-back: transfers, stairs, brakes, falls recovery — 'how to get up after a fall' drilled) → REVIEW (still fits? still used? abandoned aids signal wrong aid or lost confidence). Donated mismatched wheelchairs harm — advocate fitted provision (welfare/NGO channels, documented need).",
          ],
        },
        {
          type: "text",
          heading: "Home safety + hip pathway + goals",
          paragraphs: [
            "<strong>Hazards checklist</strong> (visit + fix + RE-visit): light (bulbs + night lights + torch by bed) + floor (mats OUT, cords taped, spills wiped, thresholds levelled) + bathroom (rails, non-slip, raised seat, stool) + bed (right height, lever, bell, commode near) + stairs (rails both sides, contrast edges, gate if wandering) + kitchen (stove guard, kettle tipper, gas check where smell lost) + outside (even path, handrail, farm-task swap — lighter duties, SAME dignity). <strong>Hip fracture</strong>: suspect (fall + hip/groin pain + short externally-rotated leg — DON'T walk them off!) → X-ray → analgesia + fluids + delirium watch → surgery FAST (<48 h saves lives) → mobilise DAY 1 post-op → physio + OT + nutrition + bone protection (calcium/D + osteoporosis Rx) → home rehab + falls plan (M02 workup). ~30% one-year mortality — speed + mobilisation decide. <strong>Rehab goals</strong> (ELDER-set, M01): 'walk to farm gate/mosque/market stall' — SMART + dated + team (nurse + physio + OT + family + elder) + reviewed; OT adapts tasks (dressing gadgets, sit-to-cook, paced tasks); contractures prevented, foot-drop splinted. Celebrate METRES ('bed-to-door Monday, gate Friday' — progress POSTED where the elder sees it). Discharge: aids fitted + home visited + family trained (teach-back) + follow-up dated + CHPS linked — rehab at home or it evaporates.",
          ],
        },
        {
          type: "table",
          heading: "Mobility barriers: engineer around",
          columns: ["Barrier", "Workaround", "Who + when"],
          rows: [
            ["'Too weak to walk' post-op day 2", "Sit out + stand + 5 steps with frame + physio", "Nurse + physio; twice daily, charted metres"],
            ["Fear of falling again", "Supervised practice + aid + balance class + confidence ladder", "Physio + nurse; goals + celebration board"],
            ["No aid, can't afford", "Assess + welfare/NGO request + interim (chair-walking, family arm)", "Nurse + welfare; request dated + followed"],
            ["Home stairs, toilet outside", "Rails + commode + night plan + family trained", "OT/nurse home visit; pre-discharge check"],
            ["Wandering + stairs + stove", "Gates + guards + supervision rota + ID bracelet (M03)", "Family + nurse + welfare; safety plan filed"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Metres are medicine — chart them",
          body: "Record daily mobility like vital signs ('walked 10 m × 2 with frame, sat out 3 h') and POST progress where the elder sees it — visible metres motivate more than any lecture. Audit mobility (PRO-II M4: '% elders mobilised day 1') and watch delirium, pressure damage and stays fall together. The ward that walks its elders discharges them; the ward that beds them buries function. Lace the shoes, fit the frame, count the metres — rehabilitation is nursing's longest victory lap.",
        },
      ],
      keyPoints: [
        "Deconditioning starts day 1: sit out, stand, walk, physio day 1, pyjamas banned.",
        "Exercise Rx: strength 2× + balance 3× + walk 150 min + flex daily; frailty needs supervision, not rest.",
        "Aids: assess → fit → train (teach-back) → review; wheelchairs fitted, never parking bays.",
        "Home checklist: light, floor, bathroom, bed, stairs, kitchen, outside — visit + fix + re-visit.",
        "Hip fracture: suspect → X-ray → surgery <48 h → mobilise day 1 → bone protection → rehab.",
        "Goals elder-set + SMART + celebrated; discharge with aids + training + CHPS link.",
      ],
      quiz: {
        keywords: ["deconditioning", "mobilise", "exercise", "sarcopenia", "balance", "stick", "frame", "wheelchair", "home safety", "hazards", "hip fracture", "rehab", "OT", "physio", "goals"],
        categories: ["fundamentals"],
      },
    },
  ],
};
