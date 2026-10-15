import type { CourseModule } from "../types";

export const threeDsAndChronicConditions: CourseModule = {
  slug: "three-ds-and-chronic-conditions",
  title: "The 3Ds and chronic conditions",
  summary:
    "Mind, bladder, pain, senses: delirium versus dementia versus depression with CAM and PINCH ME hunts, hypoactive-delirium vigilance, BPSD-as-unmet-need care, and treatable late-life depression — then the four incontinence types with diaries, training and catheters-last, constipation's confusion mimicry, believed-and-scaled pain with the cautious ladder, and cataract/glaucoma/wax/denture senses care.",
  lessons: [
    {
      slug: "dementia-delirium-and-depression",
      title: "Dementia, delirium and depression",
      minutes: 20,
      objectives: [
        "Separate the 3Ds by onset, course and attention.",
        "Hunt delirium causes with PINCH ME and CAM.",
        "Care for dementia with routine and validation.",
        "Detect and treat late-life depression safely.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Three Ds, three tempos",
          paragraphs: [
            "<strong>DELIRIUM</strong>: ACUTE (hours–days), FLUCTUATING ('comes and goes' through the shift), inattentive (can't follow conversation), agitated OR — deadlier — <strong>hypoactive</strong> (quiet, drowsy, 'just tired'): a MEDICAL EMERGENCY, usually REVERSIBLE. <strong>DEMENTIA</strong>: SLOW (months–years), steady decline, alert but forgetful, memory + function eroding (IADL → ADL, Module 02): mostly IRREVERSIBLE, supportable — but ALWAYS rule out reversible mimics first (B12, thyroid, normal-pressure hydrocephalus, subdural, depression). <strong>DEPRESSION</strong>: WEEKS, mood-led ('don't know' + distressed + appetite/sleep crash + hopelessness): TREATABLE at every age. Overlap is real — delirium ON dementia is common (baseline Module 02 tells which is new), and depression mimics dementia ('pseudodementia': recent, distressed, complains of memory; true dementia: slow, unbothered, family complains). The cardinal sin: labelling acute confusion 'dementia' or 'old age' and missing the UTI/sepsis/MI that treatment would reverse — every NEW confusion gets a delirium hunt, no exceptions.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-GRN-0005.svg",
          alt: "Three panels: delirium acute fluctuating reversible emergency with CAM criteria; dementia slow steady supportable with reversible-mimic rule-out; depression weeks mood-led treatable with GDS and suicide ask. PINCH ME hunt: pain, infection, nutrition, constipation-catheter, hydration-hypoxia-heart, meds, environment. Delirium care: treat cause, orient, hydrate, mobilise, sleep, sit-in, antipsychotic only if unsafe. Dementia care: routine, validation, BPSD as unmet need, safety plan. Depression care: screen, safety, activity, treat misery, meds.",
          caption: "Acute + fluctuating + inattentive = delirium hunt NOW — quiet delirium kills most.",
        },
        {
          type: "text",
          heading: "The hunt and the care",
          paragraphs: [
            "<strong>PINCH ME</strong>: Pain · Infection (UTI, chest, sepsis — afebrile counts, M01) · Nutrition (dehydrated? low sodium/glucose?) · Constipation + Catheter (retention!) · Hydration + Hypoxia + Heart (MI/HF) · Meds (anticholinergics, sedatives, opioids, steroids — Module 04) · Environment (ward move, sensory loss, sleep loss, restraints). <strong>CAM</strong> positive = acute onset + inattention + (disorganised thinking OR altered consciousness). Care: treat the cause URGENTLY + orient (clock, daylight, aids ON, family photos, explain every touch) + hydrate/feed/mobilise + review meds (stop culprits) + protect sleep (noise down, pain controlled, catheters OUT) + stay WITH (family sit-in, 1:1 if unsafe) + antipsychotic ONLY if distressed/unsafe per doctor (lowest dose, shortest time, daily review). <strong>Restraints worsen delirium</strong> — last resort, prescribed, reviewed (PRO-I M6 spirit). Dementia care: routine + familiar faces + one-step instructions + validate FEELINGS ('you miss home — tell me about it') never argue facts; BPSD (agitation, wandering, sundowning) = UNMET NEED first (pain? toilet? fear? boredom?) → redirect, music, walk-with, carer respite; antipsychotics LAST (stroke/death risk — specialist only). Safety: stove, meds, money, roads, wandering plan (ID bracelet, neighbour alert).",
          ],
        },
        {
          type: "text",
          heading: "Depression: old + sad ≠ normal",
          paragraphs: [
            "Late-life depression hides behind bodies (aches, insomnia, constipation, 'weakness') and masks as dementia — screen with GDS (Module 02), ask suicide KINDLY + directly with privacy and safety-planning (means restricted, family alerted WITH consent—or without it where life threatens, PRO-I M4 break-glass), support grief (widowhood, role loss, independence loss — normal grief vs depression: grief waves + self-worth intact; depression flat + worthless + hopeless). Treat: activity + daylight + roles (participation pillar, M01), pain/insomnia/constipation fixed (misery mimics), counselling/pastoral where apt, antidepressants per doctor (start low, go slow, watch hyponatraemia/falls/interactions — Module 04) + adherence support + review. Loneliness (Module 05) feeds depression feeds decline — befriending, worship groups, grandchild time and market-day routines are prescriptions. Never promise secrecy around suicide plans; never leave plans unaddressed overnight; document safety plans (PRO-I M5). Treatable at EVERY age — the 85-year-old who laughs again at harvest thanks the nurse who screened.",
          ],
        },
        {
          type: "table",
          heading: "Confusion cases: sort the D",
          columns: ["Presentation", "Most likely", "First moves"],
          rows: [
            ["Sharp Sunday, wild Tuesday, picks air, inattentive", "Delirium (hyperactive)", "PINCH ME hunt + CAM + orient + sit-in + doctor NOW"],
            ["Quiet, drowsy 2 days post-op, 'just recovering'", "Delirium (hypoactive) — most missed", "Same hunt urgently; drowsy ≠ recovering"],
            ["2-year slow decline, gets lost, family coping", "Dementia", "Reversible rule-out + routine + safety + carer plan"],
            ["Widowed 2 months, 'don't know', tearful, not eating", "Depression (± pseudodementia)", "GDS + suicide ask + grief + activity + doctor review"],
            ["Known dementia, suddenly worse + smelly urine", "Delirium ON dementia", "Treat UTI/delirium; baseline guides recovery target"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Hypoactive delirium: the quiet killer",
          body: "Agitated delirium gets attention; quiet delirium gets a blanket and a missed sepsis. Suspect it in EVERY drowsy, withdrawn or 'suddenly worse' elder: post-op day 1–3, new ward, new drugs, constipation, retention, dehydration, silent MI, new stroke. Test attention ('squeeze my hand on A: S-A-V-E-A…', months backwards) — inattention with acute onset IS delirium until proven otherwise. Wards that hunt hypoactive delirium rescue elders; wards that nap through it file deaths. Be the hunter, every shift, every elder.",
        },
      ],
      keyPoints: [
        "Delirium: acute + fluctuating + inattentive = emergency, reversible; dementia: slow, supportable; depression: weeks, treatable.",
        "Never label acute confusion 'dementia'/'old age' — hunt first with PINCH ME + CAM.",
        "Hypoactive (quiet/drowsy) kills most — test attention in every 'suddenly worse' elder.",
        "Delirium care: cause + orient + hydrate + mobilise + sleep + sit-in; restraints worsen.",
        "Dementia: routine + validation + BPSD-as-need + safety; antipsychotics specialist-last.",
        "Depression: GDS + suicide ask + grief + activity + treat misery; old + sad ≠ normal.",
      ],
      quiz: {
        keywords: ["dementia", "delirium", "depression", "CAM", "PINCH ME", "hypoactive", "BPSD", "validation", "sundowning", "GDS", "suicide", "pseudodementia", "antipsychotic", "restraints", "attention"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "incontinence-pain-and-sensory-loss",
      title: "Incontinence, pain and sensory loss",
      minutes: 20,
      objectives: [
        "Type incontinence and treat causes first.",
        "Believe, scale and ladder elder pain.",
        "Clear cataract, glaucoma, wax and dental barriers.",
        "Protect dignity in every intimate task.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Type the leak, treat the cause",
          paragraphs: [
            "Four types: <strong>STRESS</strong> (leaks on cough/laugh/lift — pelvic floor + weight + refer) · <strong>URGE</strong> ('can't hold', frequency — bladder training + timed voids + urge-suppression: freeze-squeeze-breathe) · <strong>OVERFLOW</strong> (dribble, weak stream, retention — bladder-scan, treat prostate/constipation/neuropathy) · <strong>FUNCTIONAL</strong> (can't REACH — mobility, toilet distance, rails, light, clothing — fix the environment, not the bladder). Process: 3-day diary (fluids, voids, leaks, triggers) → treat cause (UTI, prostate, atrophic vaginitis, culprit meds — diuretics timing, sedatives — and CONSTIPATION pressing the bladder!) → train (timed voids, pelvic floor, suppression) → aids (sized pads + skin barrier, commode, urinal, raised seat) → <strong>catheters LAST</strong> (retention/ulcers/terminal — aseptic, DAILY review, remove ASAP: CAUTI kills elders). Constipation: fluids + fibre + movement + toilet routine + review culprits (opioids need a bowel plan from dose one; iron, anticholinergics) — impaction mimics retention AND confusion (PINCH ME's C). Dignity throughout: private, prompt, odour-free, never shaming; pads changed fast, moisture lesions guarded (they ulcerate like pressure damage).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-GRN-0006.svg",
          alt: "Four incontinence panels: stress with pelvic floor, urge with bladder training, overflow with bladder scan, functional with commode rails light. Pain: believe plus scale with PAINAD, cautious ladder paracetamol NSAID opioid adjuvants plus non-drugs, review bowels sedation function. Continence care chain: diary, cause, train, aids, catheters last with daily review. Constipation plan with impaction warning. Senses: cataract refer, glaucoma screen, glasses light contrast, wax out then aids, season food gas safety, feet shoes, dentures thrush dry-mouth.",
          caption: "Type the leak, scale the pain, clear the lens and wax — dignity in each.",
        },
        {
          type: "text",
          heading: "Pain: believed, scaled, laddered",
          paragraphs: [
            "'Pain is normal at your age' is NEGLIGENCE with grey hair — arthritis, fractures, neuropathy, cancer and pressure damage all hurt at 80 exactly as at 40, while stoicism + dementia + fear of bothering hide it. <strong>Scale</strong>: numbers/faces where able; <strong>PAINAD</strong> for dementia (breathing, negative vocalisation, facial expression, body language, consolability — score the BEHAVIOUR). <strong>Ladder, cautious</strong>: scheduled paracetamol (safe backbone — check liver + total dose across combos!) → + NSAID (kidney/GI/bleed caution — PPI cover, shortest time, watch creatinine) → + opioid (start low, go slow — with a BOWEL plan + nausea plan + sedation watch + falls warning) → adjuvants for neuropathic (per doctor) + <strong>NON-DRUGS always</strong> (heat, positioning, physio, massage, distraction, prayer, TENS where available). Review: pain score + bowels + sedation + FUNCTION ('can farm/cook/walk-to-mosque again?' — function is the outcome, M01). Chronic pain + poor sleep + low mood travel together — treat the trio, not just the joint.",
          ],
        },
        {
          type: "text",
          heading: "Senses: the reversible isolators",
          paragraphs: [
            "Sensory loss isolates → confusion + falls + depression: treating senses treats minds. <strong>Vision</strong>: cataract (cloudy lens — REFER: surgery transforms lives within days; counsel fear, arrange transport/funds/NHIS) + glaucoma (silent thief — screen pressures, drops adherence for life!) + update glasses + light rooms + contrast (marked rails, removed mats). <strong>Hearing</strong>: wax OUT first (syringe/probe per protocol — the commonest 'deafness' cure) → then aids + batteries + face-to-face slow speech + verify ('tell me what you'll do'). <strong>Taste/smell</strong>: season food (appetite!), check gas/fire safety (can't smell leaks). <strong>Feet</strong>: fitting shoes, cut nails, diabetics guarded (daily checks — Module 01 screening). <strong>Mouth</strong>: dentures fitted + cleaned nightly, thrush treated, dry-mouth sips/chewing gum — chewing = nutrition (Module 06); toothless elders starve politely while families report 'poor appetite'. Aids ON is treatment (Module 02): glasses, hearing aids and dentures in place before every assessment, meal and conversation.",
          ],
        },
        {
          type: "table",
          heading: "Hidden-cause roundup: look deeper",
          columns: ["Complaint", "Hidden cause to check", "Fix"],
          rows: [
            ["New incontinence + confusion", "UTI + constipation + new drug", "Treat + clear bowel + meds review (M04)"],
            ["'Weakness' + falls, no pain reported", "Unreported pain + anaemia + B12", "PAINAD + labs + treat + physio"],
            ["'Deaf, confused, aggressive'", "Wax + cataract + UTI + pain", "Clear wax, aids on, hunt delirium (3.1)"],
            ["Not eating, 'poor appetite'", "Dentures + thrush + dry mouth + depression", "Mouth care + treat + GDS + company at meals"],
            ["Night wandering + shouting", "Pain + retention + fear + sundowning", "Toilet + analgesia + light + routine + carer rest"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Dignity is the procedure",
          body: "Intimate care (pads, catheters, bowels, bathing) done rushed, exposed or scolded teaches elders to hide symptoms — the incontinence unmentioned, the pain denied, the fall concealed. Slow down: curtain + consent + explain + warm hands + private disposal + prompt pads + praise for reporting ('thank you for telling me — that helps me help you'). Dignified elders report early; shamed elders present late with sepsis and fractures. The extra three minutes ARE the treatment — log dignified continence/pain care as the CPD it is.",
        },
      ],
      keyPoints: [
        "Four leaks: stress (floor), urge (train), overflow (scan + cause), functional (environment).",
        "Diary → cause → train → aids → catheters LAST with daily review; constipation confuses.",
        "Pain: believe + scale (PAINAD) + cautious ladder + non-drugs; function is the outcome.",
        "NSAIDs mind kidney/GI; opioids need bowel + sedation plans from dose one.",
        "Cataract referred (transforms), glaucoma screened, wax OUT first, dentures fitted.",
        "Dignity in intimate care = early reporting; shame = late sepsis and fractures.",
      ],
      quiz: {
        keywords: ["incontinence", "stress", "urge", "overflow", "catheter", "CAUTI", "constipation", "impaction", "pain", "PAINAD", "ladder", "NSAID", "opioid", "cataract", "glaucoma", "wax", "dentures"],
        categories: ["fundamentals"],
      },
    },
  ],
};
