import type { CourseModule } from "../types";

export const medicationsAndPolypharmacy: CourseModule = {
  slug: "medications-and-polypharmacy",
  title: "Medications and polypharmacy",
  summary:
    "Drugs in tender bodies: ageing pharmacokinetics and pharmacodynamics (water, fat, liver, kidney, brain), the Beers red list with anticholinergic burden, prescribing cascades and sensitivity hotspots, OTC/herbal counting — then brown-bag reconciliation, can't/forget/won't adherence with beaters, five-step deprescribing with taper rules, simplification wins, and monitoring the risky with diaries.",
  lessons: [
    {
      slug: "ageing-pharmacology-and-beers",
      title: "Ageing pharmacology and Beers",
      minutes: 20,
      objectives: [
        "Explain PK/PD changes with dosing rules.",
        "Flag Beers-list drugs confidently.",
        "Spot prescribing cascades early.",
        "Count OTC and herbal risks.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Tender bodies, stronger drugs",
          paragraphs: [
            "<strong>Absorb</strong>: slower gut + less acid → slower onset — DON'T re-dose early ('it's not working' at 20 minutes needs patience, not doubling). <strong>Distribute</strong>: less body water + more fat + low albumin → water-soluble drugs (digoxin, lithium) hit HARDER, fat-soluble (benzodiazepines) LINGER for days. <strong>Metabolise</strong>: smaller liver + slower enzymes → levels rise — start low, go slow, titrate to effect not protocol-max. <strong>Excrete</strong>: GFR falls ~1%/year → renally-cleared drugs (aminoglycosides, digoxin, lithium, many antibiotics, metformin caution) ACCUMULATE — dose by eGFR, check creatinine, watch dehydration (diuretics + diarrhoea + heat = kidney crash). <strong>Sensitivity UP</strong>: brain (sedation/confusion at baby doses — benzos, opioids, anticholinergics), BP (dizzy drops — start low), bleeding (anticoagulant + NSAID + falls = triple threat), glucose (hypo unawareness — sulfonylureas/insulin need plans). Rule: every elder drug needs indication + benefit>harm + LOWEST effective dose + review date — 'we've always taken it' retires in this module.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-GRN-0007.svg",
          alt: "Four PK panels: absorb slower with no early re-dose, distribute with water-drugs stronger and fat-drugs lingering, metabolise with start-low-go-slow, excrete with eGFR dosing. Beers red list: anticholinergics, sedatives and benzos, chronic NSAIDs, long sulfonylureas, nitrofurantoin, sliding-scale insulin alone, muscle relaxants. Sensitivity hotspots: brain BP bleeding glucose kidney triple whammy. Prescribing cascade example NSAID to antipsychotic with stop rule. OTC herbal counting. Every-drug rule stated.",
          caption: "Less water, slower liver, weaker kidney, tender brain — start low, go slow, review all.",
        },
        {
          type: "text",
          heading: "Beers red list + cascades",
          paragraphs: [
            "Beers criteria (avoid/caution in 65+): <strong>ANTICHOLINERGICS</strong> — urinary retention + confusion + constipation + dry mouth + falls + tachycardia: chlorpheniramine, bladder antispasmodics, tricyclics, first-gen antihistamines hiding in cold cures — burden ADDS UP across drugs (count it!). <strong>SEDATIVES</strong> — benzodiazepines + 'sleeping tablets' (falls + delirium + dependence — sleep hygiene first, M01); antipsychotics for BPSD (stroke/death — specialist-only, M03). <strong>NSAIDs chronic</strong> (bleed + kidney + heart failure — PPI cover, shortest course, review). <strong>Long-acting sulfonylureas</strong> (hypo — prefer safer agents in elders). <strong>Nitrofurantoin</strong> (poor kidney efficacy + lung risk). Sliding-scale insulin ALONE, muscle relaxants, highly anticholinergic antiemetics. <strong>Cascades</strong> (drug treats drug's side effect): NSAID → hypertension → amlodipine → ankle swelling → furosemide → incontinence → anticholinergic → confusion → antipsychotic… STOP: ask <strong>'could a DRUG cause this new symptom?'</strong> BEFORE adding (M02 CGA meds domain). <strong>OTC + herbal count</strong>: NSAIDs, cold cures, laxatives, 'blood tonics', herbals (bleed + kidney + interactions) — ask WITHOUT judgment ('many elders use herbs — which help you?'), document, check interactions, counsel.",
          ],
        },
        {
          type: "table",
          heading: "New symptom? Suspect the drug first",
          columns: ["New symptom", "Usual drug suspects", "Action"],
          rows: [
            ["Confusion/fall", "Sedative, anticholinergic, opioid, new BP drug", "Delirium hunt (M03) + meds review + stop culprit"],
            ["Bleed/bruise", "Anticoag + NSAID + antiplatelet + herbal", "Bleed screen + INR + separate/stop + protect"],
            ["Swollen ankles", "Amlodipine (not 'heart failure' yet!)", "Examine + consider switch before furosemide"],
            ["Incontinence/retention", "Diuretic timing, anticholinergic, sedative", "Re-time, bladder scan, trim burden"],
            ["Hypo/shakiness", "Sulfonylurea/insulin + poor meals", "Hypo plan + safer agent + family trained"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Triple whammy: NSAID + diuretic + ACEi/ARB",
          body: "This trio + dehydration (diarrhoea, heat, poor drinking) crashes kidneys fast: NSAID constricts afferent arteriole while ACEi dilates efferent and diuretic drops volume — GFR collapses, potassium climbs, elders dialyse or die. Any elder on all three needs sick-day rules (hold nephrotoxics when ill/dehydrated per protocol + doctor contact), creatinine + K+ monitoring, and NSAID exit plans. Nurses spot the trio on brown-bag review (next lesson) and flag it UP same-day — kidneys saved by pharmacists' lists and nurses' eyes.",
        },
      ],
      keyPoints: [
        "PK: slow absorb, less water/more fat, slow liver, falling GFR — dose low, slow, by kidney.",
        "PD: tender brain/BP/bleed/glucose/kidney — baby doses can fell elders.",
        "Beers: anticholinergics, benzos, chronic NSAIDs, long sulfonylureas, nitrofurantoin, relaxants.",
        "Cascades: new symptom? drug first — stop the chain before adding links.",
        "OTC/herbal count — ask kindly, document, check interactions.",
        "Triple whammy needs sick-day rules + monitoring + nurse-flagged review.",
      ],
      quiz: {
        questionIds: ["NG-MOD-GERO-009", "NG-MOD-GERO-010"],
        categories: ["pharmacology-parenteral", "gerontology-community"],
        keywords: ["pharmacokinetics", "GFR", "eGFR", "Beers", "anticholinergic", "benzodiazepine", "NSAID", "sulfonylurea", "cascade", "triple whammy", "OTC", "herbal", "sensitivity", "hypo", "bleeding"],
      },
    },
    {
      slug: "reconciliation-adherence-deprescribing",
      title: "Reconciliation, adherence, deprescribing",
      minutes: 20,
      objectives: [
        "Reconcile with brown-bag method.",
        "Fix can't/forget/won't adherence.",
        "Deprescribe in five steps with tapers.",
        "Monitor high-risk drugs with diaries.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The brown bag never lies",
          paragraphs: [
            "'Bring EVERYTHING in a bag' → list each (name/dose/time/reason/prescriber — including OTC, herbal, borrowed, expired) → compare vs chart → resolve (omissions? duplications? dead drugs? double paracetamol across combos? interacting herbals?) → document ONE true list → counsel with teach-back → share (folder + patient card + family). Brown-bag catches what charts miss: the two amlodipines (clinic + chemical seller), the dead 2019 antibiotics 'for emergencies', the borrowed glibenclamide, the cold cure loading anticholinergics onto bladder pills. Do it EVERY admission, EVERY yearly review, EVERY confusion/fall/bleed presentation (M02–M03 workups demand it). Pharmacists are partners — ISBAR your findings (PRO-I M5): '8 drugs + 3 OTC, Beers x2, cascade likely, reconcile please.' One true list, many lives: transcription errors fall, duplications die, cascades surface.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-GRN-0008.svg",
          alt: "Brown-bag chain: bring everything, list, compare, resolve, one true list, counsel, share. Adherence triad: can't with cost distance eyes hands beaters generics blister liquids; forgets with pill box alarms family DOT simplify; won't with listen fix-effects teach-back negotiate. Deprescribing five steps: list, match indication, benefit-harm now, taper one at time, monitor document; never abrupt benzos steroids beta-blockers antidepressants antiparkinson. Simplify rules and high-risk monitoring with diaries listed. Nurse flag-up counsel-down role stated.",
          caption: "One true list, simpler regimes, watched risky drugs — adherence engineered, not wished.",
        },
        {
          type: "text",
          heading: "Can't, forgets, won't — then beaters",
          paragraphs: [
            "<strong>CAN'T</strong> (cost, distance, eyes, hands, swallow): generics + NHIS (M05 PRO-II: register!), 90-day supplies, blister packs, big-print lists, liquids/crushables where safe, easy-open caps, transport help. <strong>FORGETS</strong> (memory, complexity, no routine): pill boxes + phone alarms + family DOT (dementia needs supervised dosing — Module 03), SIMPLIFY (once-daily, aligned times, synced refills), routine-anchoring ('with morning prayers'). <strong>WON'T</strong> (side effects, 'cured', beliefs, mistrust): LISTEN first ('what worries you about these?'), fix effects (bowel plan for opioids, timing for diuretics), teach-back benefits ('this one keeps the stroke away — show me when you'll take it'), negotiate (fewer, simpler, tried-and-reviewed). Never scold non-adherence — scolded elders nod and discard; partnered elders confess and collaborate. Adherence aids: reasons ON the list ('white — BP — morning'), refill synced to one date, home counts kindly ('let's count together — too many left tells me something needs fixing, not blaming').",
          ],
        },
        {
          type: "text",
          heading: "Deprescribing + monitoring",
          paragraphs: [
            "Five steps (doctor + pharmacist + elder + family): <strong>1.</strong> list ALL (brown bag) → <strong>2.</strong> match indication (no reason = candidate: dead supplements, duplicate paracetamol, PPI-without-cause, years-old sedatives) → <strong>3.</strong> benefit-vs-harm NOW (frailty/goals change maths — statin at 88 with CFS 7? preventive aspirin with bleed risk? DISCUSS, don't dictate) → <strong>4.</strong> taper/stop ONE at a time (measure effect!) → <strong>5.</strong> monitor + document + tell family what to watch. NEVER abrupt: benzodiazepines, steroids, beta-blockers, antidepressants, antiparkinson drugs — taper per protocol (withdrawal hospitalizes). Stopping well = prescribing well. <strong>Monitor the risky</strong>: anticoagulants (bleeds + falls + INRs), insulin/sulfonylureas (hypo plan + glucose + trained family), diuretics (weight + K+ + kidney), opioids (bowels + sedation), digoxin (levels + K+ + vision), lithium (levels + fluids). <strong>Diaries beat memory</strong>: BP, glucose, weight, pain, bowels — reviewed each visit, doses adjusted, harms caught early. Nurses: see the bag, the home, the fall — flag UP, counsel DOWN, document ALL (PRO-I M5).",
          ],
        },
        {
          type: "table",
          heading: "Deprescribing candidates: first looks",
          columns: ["Candidate", "Why it retires", "How to stop"],
          rows: [
            ["Benzodiazepine for sleep, 6 years", "Falls + delirium + dependence; hygiene works", "Slow taper + sleep plan + review (never abrupt)"],
            ["NSAID daily 'for joints', no review", "Bleed + kidney + HF; safer options exist", "Paracetamol + topical + physio; stop + monitor"],
            ["PPI 5 years, no ulcer/NSAID", "Bone + B12 + infection risks; no indication", "Taper + on-demand + lifestyle; watch rebound"],
            ["Duplicate paracetamol (2 combos)", "Liver risk; double-dosing hidden", "One source + total-dose teaching + list fix"],
            ["Statin, 89, CFS 7, comfort goals", "Benefit window passed; burden real", "Goals talk → stop + document + family told"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The yearly meds MOT",
          body: "Book every elder on 5+ drugs (or ANY Beers drug) a yearly 20-minute meds MOT: brown bag + Beers screen + cascade check + adherence triage + deprescribe-one + simplify + diary review + teach-back. Pair it with the mini-CGA (Module 02) and screening (Module 01) — one visit, three shields. MOTs cut falls, confusion and admissions measurably; log them as QI data (PRO-II M4: run-chart your clinic's Beers-rate falling). The prescription pad's best friend is the nurse's brown bag.",
        },
      ],
      keyPoints: [
        "Brown-bag every admission/review/crisis: list → compare → resolve → ONE true list → share.",
        "Adherence: can't (afford/aids), forgets (box/alarms/DOT/simplify), won't (listen/fix/negotiate).",
        "Deprescribe: list → indication → benefit-harm → taper ONE → monitor; never abrupt key classes.",
        "Simplify: once-daily, aligned times, synced refills, reasons on list, routine anchors.",
        "Monitor risky with diaries: anticoag, hypo agents, diuretics, opioids, digoxin, lithium.",
        "Yearly meds MOT for 5+ drugs: bag + Beers + cascade + deprescribe-one + teach-back.",
      ],
      quiz: {
        questionIds: ["NG-MOD-GERO-011"],
        categories: ["pharmacology-parenteral"],
        keywords: ["reconciliation", "brown bag", "adherence", "pill box", "DOT", "teach-back", "deprescribing", "taper", "withdrawal", "simplify", "diary", "MOT", "polypharmacy", "pharmacist", "Beers"],
      },
    },
  ],
};
