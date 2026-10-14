import type { CourseModule } from "../types";

export const geriatricAssessment: CourseModule = {
  slug: "geriatric-assessment",
  title: "Comprehensive geriatric assessment",
  summary:
    "Measuring what matters: the Clinical Frailty Scale with frailty phenotype, Katz ADL and Lawton IADL with TUG triage, full falls workup with red flags and pressure-risk pairing, baseline documentation that catches delirium — then AMT, clock-draw and GDS screening with aids-on/delirium-out/collateral-in rules, depression-versus-dementia clues, and the eight-domain CGA wheel with mini-CGA for OPD.",
  lessons: [
    {
      slug: "frailty-function-and-falls",
      title: "Frailty, function and falls",
      minutes: 20,
      objectives: [
        "Score frailty with CFS and phenotype.",
        "Assess ADL, IADL and TUG.",
        "Work up every faller fully.",
        "Pair pressure-risk care with frailty.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Frailty: the diagnosis behind the diagnoses",
          paragraphs: [
            "Frailty = vulnerability to small insults (UTI → delirium, cold → admission, fall → fracture → death spiral). <strong>Clinical Frailty Scale</strong>: 1–3 fit-to-managing-well (active, independent), 4 vulnerable (slowed, tired, 'slipping'), 5–6 mildly-to-moderately frail (needs help with IADLs → ADLs), 7–8 severely frail (fully dependent → end-stage), 9 terminally ill but not otherwise frail. Score from <strong>baseline two weeks ago</strong>, not today's crisis (acute illness inflates frailty — re-score at recovery). <strong>Phenotype</strong> (5 flags): unintentional weight loss, exhaustion, weakness (grip), slow gait, low activity — 3+ = frail. Why it matters: frailty predicts falls, delirium, pressure damage, long stays and death BETTER than age or disease counts — and it guides proportionality (CFS 7 + metastatic cancer + pneumonia = comfort-focused conversation, not automatic ICU). Nurses own frailty scoring: eyeball at triage, confirm with function, document, act (physio, nutrition, meds trim, goals talk).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-GRN-0003.svg",
          alt: "Clinical Frailty Scale 1 to 9 with phenotype five flags. Katz six basic ADLs with bathing-first loss order. Lawton eight IADLs failing first with culture-adjust note. TUG thresholds under 10 normal, 10 to 20 at-risk, over 20 high-risk. Falls workup chain: history, meds, lie-sit-stand, vision feet, neuro, cognition, home hazards, plan. Red-flag falls: anticoagulant head strike, hip pain, cardiac symptoms, neuro deficit, fever, long lie with rhabdomyolysis. Pressure risk pairing with Braden and offload. Baseline documentation rule.",
          caption: "IADL fails first, TUG triages, every fall gets a workup, baselines catch delirium.",
        },
        {
          type: "text",
          heading: "ADL, IADL, TUG: function in minutes",
          paragraphs: [
            "<strong>Katz ADL</strong> (basic 6): bathing, dressing, toileting, transferring, continence, feeding — loss follows reverse order of childhood gains (bathing fails first, feeding last); score dependence to track recovery or decline. <strong>Lawton IADL</strong> (complex 8): telephone, shopping, cooking, housekeeping, laundry, transport, medications, finances — fails FIRST, the early-warning system; culture-adjust (cooking/laundry roles vary — ask 'who did this before?' not 'can you?'). <strong>TUG</strong> (Timed Up-and-Go): rise from chair → walk 3 m → turn → return → sit: <10 s normal, 10–20 s at-risk, >20 s high-risk + aid/assessment needed. Watch components (push-off strength, step length, turn steadiness, sitting control) — the test any OPD runs with any chair. Combine: CFS 5 + IADL failures + TUG 24 s = frail faller needing the full workup (below) + physio + aids + meds review + home visit. Re-score function each admission and yearly — trajectories (stable? slipping? recovering?) guide every plan Module 03–06 makes.",
          ],
        },
        {
          type: "text",
          heading: "Every fall gets a workup",
          paragraphs: [
            "History (when/where/doing — trip? dizzy? blackout? chest pain? injury? how long on floor?) → <strong>meds</strong> (sedatives, antihypertensives, hypoglycaemics, anticholinergics — Module 04 trims) → <strong>lie-sit-stand BP + pulse</strong> (drop ≥20 systolic/10 diastolic = postural; irregular = rhythm?) → vision + feet + footwear (cataract? bunions? slippers?) → neuro (weakness? Parkinsonism? prior stroke?) → <strong>cognition/delirium screen</strong> (Module 03 — falls herald delirium) → home hazards (Module 06) → PLAN (physio + aids + meds trim + cataract/vitamin-D/balance referrals). <strong>Red flags</strong>: head strike + anticoagulant (scan urgently — subdural blooms silently), hip pain (fracture until proven — don't walk them off), chest pain/palpitations/syncope (cardiac), new neuro deficit (stroke pathway), fever + fall (sepsis until proven), <strong>long lie</strong> (rhabdomyolysis + pressure damage + dehydration + hypothermia — check CK, kidney, skin, fluids). Pair <strong>pressure-risk</strong> care: Braden/Waterlow on admission, skin daily, offload q2–4 h, mattress by risk, nutrition (Module 06) — immobility + age + damp skin ulcerate within hours, and ulcers in the frail kill.",
          ],
        },
        {
          type: "table",
          heading: "Fall story to suspect: pattern match",
          columns: ["Story", "Suspect first", "Next step"],
          rows: [
            ["Dizzy on standing, dark room, on amlodipine + furosemide", "Postural hypotension + meds", "Lie-sit-stand, meds review, hydrate, rise-slowly teaching"],
            ["Blackout, bitten tongue, brief jerks, now fine", "Syncope/seizure/cardiac", "ECG + rhythm, neuro review, don't leave unobserved"],
            ["Tripped over mat, bruised, TUG 22 s, cataracts", "Mechanical + deconditioned + visual", "Physio + stick + cataract referral + home hazards fix"],
            ["Found on floor after hours, confused, smelly urine", "Long lie + UTI + delirium + rhabdo", "ABCs, CK/kidney, sepsis screen, delirium protocol (M03)"],
            ["Repeated night falls going to toilet", "Nocturia + darkness + urgency + prostate/UTI", "Light + commode + treat cause + timed fluids"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Baselines or blindness",
          body: "Document CFS + Katz + Lawton + TUG + cognition + mood on EVERY elder admission and yearly review — without baselines, change is invisible: the 'pleasantly confused' elder may be delirious from baseline-sharp (Module 03 emergency) or demented-stable (care adjustment). Families are baseline libraries ('Mama cooked Sunday, farmed Monday, confused Tuesday' = acute = delirium hunt). No baseline, no delirium diagnosis, no justice for the elder. Five minutes of function scores outperform five days of guessing.",
        },
      ],
      keyPoints: [
        "CFS 1–9 scored from baseline 2 weeks ago; phenotype 3+/5 = frail; frailty beats age prognostically.",
        "Katz 6 (bathing first lost); Lawton 8 fails FIRST — early warning, culture-adjusted.",
        "TUG: <10 normal, 10–20 at-risk, >20 high-risk; any chair, any OPD.",
        "Falls workup: history → meds → lie-sit-stand → vision/feet → neuro → cognition → home → plan.",
        "Red flags: anticoag head strike, hip pain, cardiac symptoms, deficits, fever, long lie (CK/kidney).",
        "Pressure care pairs with frailty; baselines documented always — no baseline, no delirium call.",
      ],
      quiz: {
        keywords: ["frailty", "CFS", "phenotype", "Katz", "ADL", "Lawton", "IADL", "TUG", "falls", "postural", "syncope", "long lie", "rhabdomyolysis", "pressure", "baseline"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "cognition-mood-and-the-cga",
      title: "Cognition, mood and the CGA",
      minutes: 20,
      objectives: [
        "Screen cognition with AMT and clock-draw.",
        "Screen mood with GDS and suicide care.",
        "Separate depression mimics from dementia.",
        "Run the eight-domain CGA to goals.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Screens that fit the bedside",
          paragraphs: [
            "<strong>AMT-10</strong> (2 minutes): age, time, place, recall address, count backwards, recognize people — <8 = impaired, assess further. <strong>Clock-draw</strong> ('draw 10 past 11'): numbers + hands placed — errors flag executive dysfunction, largely language-free (ideal where literacy/English vary). <strong>GDS-15</strong> (mood yes/no: satisfied? empty? hopeless? worthless?): ≥5 depressed, ≥10 severe — then ask suicide KINDLY + directly ('have you wished you were dead? do you have a plan?') with privacy, safety plan and referral (never leave plans unaddressed). <strong>Screen rules</strong>: aids ON first (glasses, hearing aids, dentures — test the person, not the deficit); language matched (translate, never shout); <strong>delirium EXCLUDED first</strong> (acute + fluctuating + inattentive = delirium until proven — Module 03; NEVER label dementia during delirium); collateral from family ('usual self? since when? sudden or slow?'); mood-vs-mind clues — depression says 'don't know' + looks distressed + recent onset + appetite/sleep crash; dementia confabulates + seems unbothered + slow decline + family noticed first (Module 03 details the 3Ds).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-GRN-0004.svg",
          alt: "AMT-10 under 8 impaired bedside two minutes. Clock-draw 10 past 11 executive flag language-free. GDS-15 five depressed ten severe with kind suicide ask. CGA wheel eight domains: medical, meds with Beers, function, mind plus mood, nutrition with MUST, social with abuse check, environment, goals what-matters. Screen rules: aids on, delirium excluded, collateral, depression versus dementia clues. CGA flow: screen, problems list, goals, plan, review. Team listed nurse co-ordinating. Mini-CGA fifteen minutes for OPD.",
          caption: "Aids on, delirium out, collateral in — then all eight domains to one goals-list.",
        },
        {
          type: "text",
          heading: "The CGA wheel: eight domains, one plan",
          paragraphs: [
            "Comprehensive Geriatric Assessment = the assessment that treats (fewer falls, less delirium, shorter stays, more home discharges): <strong>MEDICAL</strong> (diseases, pain, sensory, continence, red flags) + <strong>MEDS</strong> (reconcile ALL — prescribed, OTC, herbal — Beers screen, adherence — Module 04) + <strong>FUNCTION</strong> (CFS, Katz, Lawton, TUG — last lesson) + <strong>MIND + MOOD</strong> (AMT, clock, GDS, delirium vigilance — above) + <strong>NUTRITION</strong> (MUST/MNA, weight trend, teeth, swallow — Module 06) + <strong>SOCIAL</strong> (home, money, carers, loneliness, ABUSE screen — Module 05) + <strong>ENVIRONMENT</strong> (hazards, toilet, light, transport — Module 06) + <strong>GOALS</strong> ('what matters to YOU?' — Module 01's north star). Flow: screen all 8 → problems list (numbered, shared) → goals with elder + family → plan (who/what/when per problem) → REVIEW DATE (CGA without review is a report, not care). Nurse co-ordinates (doctor, pharmacist, physio, dietician, social welfare, family — elder IN the room, consent direct — PRO-I M2/M4). <strong>Mini-CGA</strong> (OPD/CHPS, 15 min): CFS + Katz/IADL + TUG + AMT + GDS-4 + meds + MUST + goals — trajectories changed between market trips.",
          ],
        },
        {
          type: "table",
          heading: "CGA findings to first actions",
          columns: ["Finding", "First actions", "Owner + review"],
          rows: [
            ["CFS 6, TUG 24 s, 2 falls", "Physio + stick + meds trim + home visit + vitamin D", "Nurse + physio; 2-week falls diary review"],
            ["AMT 6/10, slow decline, family coping", "Dementia workup (M03) + carer support + safety + goals talk", "Doctor + nurse + family; monthly"],
            ["GDS 9, widow, appetite gone", "Depression care + suicide safety + grief + activity plan (M03/M05)", "Nurse + doctor; weekly then monthly"],
            ["8 drugs, OTC NSAID + herbal, dizzy", "Reconcile + Beers + deprescribe + adherence aids (M04)", "Pharmacist + nurse; 2-week BP/dizzy diary"],
            ["Lives alone, missed meals, bruises vague", "Nutrition + abuse screen + welfare referral (M05/M06)", "Nurse + welfare; urgent + weekly"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The 15-minute OPD mini-CGA habit",
          body: "Every elder's OPD visit: 1 min CFS eyeball + 2 min Katz/IADL + 2 min TUG + 2 min AMT + 2 min GDS-4 + 3 min meds + 2 min MUST + 1 min goals = 15 minutes that catch the slipping, the sinking, the over-drugged and the unsafe YEARS before crisis. Print a one-page mini-CGA form, file it in the folder, trend it yearly. Clinics that mini-CGA admit fewer elders and bury fewer surprises — and students who learn it carry a career skill (log as CPD, PRO-I M7).",
        },
      ],
      keyPoints: [
        "AMT <8 impaired; clock-draw flags executive loss; GDS ≥5 depressed, ≥10 severe + suicide ask.",
        "Rules: aids ON, delirium excluded FIRST, collateral always, language matched.",
        "Depression: 'don't know' + distressed + recent; dementia: confabulates + unbothered + slow.",
        "CGA: 8 domains → problems list → goals → owned plan → review date; nurse co-ordinates.",
        "Mini-CGA 15 min for OPD/CHPS: CFS, function, TUG, AMT, GDS-4, meds, MUST, goals.",
        "Document + trend all; re-screen each admission and yearly.",
      ],
      quiz: {
        keywords: ["cognition", "AMT", "clock-draw", "GDS", "depression", "suicide", "CGA", "collateral", "MUST", "problems list", "goals", "team", "mini-CGA", "screening", "mood"],
        categories: ["fundamentals"],
      },
    },
  ],
};
