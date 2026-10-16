import type { CourseModule } from "../types";

export const gerontologyCapstone: CourseModule = {
  slug: "gerontology-capstone",
  title: "Gerontology capstone",
  summary:
    "Grey hair, full dignity — proven: five scored elder scenarios (fall with confusion, new incontinence, food-and-drug refusal, suspected abuse, the dying elder) run through the baseline-to-goals formula — then the one-page elder canvas, red-flag reflexes, a 90-day QI project menu, the 25 tricky points with exam countdown, STAR interviews, portfolio crown, and the elder-care pledge.",
  lessons: [
    {
      slug: "gerontology-capstone-scenarios",
      title: "Gerontology capstone scenarios",
      minutes: 20,
      objectives: [
        "Run baseline-to-goals on any elder case.",
        "Hunt delirium, drugs and red flags first.",
        "Plan with family, canvas and review dates.",
        "Score full marks with cited structure.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The formula: baseline to goals",
          paragraphs: [
            "Every gerontology answer runs: <strong>baseline</strong> (CFS/function/cognition/mood/weight — what CHANGED?) → <strong>hunt</strong> (delirium? PINCH ME + CAM — drugs? brown bag + Beers — red flags? scan/fracture/sepsis pathways) → <strong>assess</strong> (CGA 8 domains — M02) → <strong>plan</strong> (owned + dated per problem + diaries) → <strong>family</strong> (meeting + support map + money plan — M05) → <strong>goals</strong> (THEIRS — M01) → <strong>document + review</strong> (PRO-I M5). PRO-I's compass runs inside wherever risk is immediate (safety → law → ethics → scope → handover → record). Examiners scan for BASELINES, HUNTS, MEDS, FAMILY and GOALS — 'I would care for her well' scores zero; 'CFS 6 baseline, AMT 5/10 new (CAM positive), PINCH-ME hunt found UTI + constipation + new sedative; brown bag shows Beers×2…' scores distinctions. Seven sentences, full marks — the question names the elder, you name the system around them.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-GRN-0013.svg",
          alt: "Elder canvas six boxes: baseline plus frailty, numbered problems list, meds plus senses aids-on, owned plan with review, family plus map, their goals. Canvas discipline: folder front, handover reads, audits love. Scenario formula seven steps with examiner-scan note. Red-flag reflexes eight items. QI project menu: mini-CGA coverage, falls, Beers, delirium detection, mobilised-day-one; PDSA with run-chart and portfolio crown.",
          caption: "Baseline, hunt, assess, plan, family, goals — one page, every elder.",
        },
        {
          type: "text",
          heading: "Five scenarios, model reasoning",
          paragraphs: [
            "<strong>1. 78-year-old, farmed Monday, fall + confusion Tuesday, smelly urine, on warfarin.</strong> Baseline: independent → acute change = DELIRIUM hunt (CAM + PINCH ME: UTI + fall + meds) + head-strike rule (anticoag → scan!) + hip check (don't walk) + brown bag (Beers? cascade?) → treat cause + orient + sit-in + VTE/bleed balance → CGA + falls workup (M02) + family meeting + goals → document + review. <strong>2. 71-year-old widow, new incontinence, hiding at home, daughter frustrated.</strong> Baseline: continent → TYPE the leak (diary: urge + nocturia + burning = UTI + functional darkness?) → treat cause + bladder training + commode + light + pelvic floor → GDS (shame → mood) + dignity care → family meeting (frustration → rota + respite — M05) → goals ('attend church dry') → review. <strong>3. 84-year-old, refusing food + drugs, 'leave me to die', GDS 11.</strong> Baseline: eating → hunt (mouth? thrush/dentures — dysphagia? drugs? delirium?) + MUST + depression (suicide ask + safety — M03) + capacity + goals talk ('what matters?') → treat causes + company meals + simplify meds (DOT?) + grief/loneliness plan (M05) + family meeting → document + weekly review. <strong>4. 80-year-old, bilateral bruises, flinches at nephew, vague stories.</strong> Baseline: safe? → SEE ALONE + ask kindly + body map + verbatim (M05) → PROTECT (admit — never discharge to danger) → REPORT (in-charge + Welfare + DOVVSU) → treat injuries + CGA + safe placement + follow-up dates → document forensically. <strong>5. 90-year-old, CFS 7, pneumonia, third admission, family demands 'everything'.</strong> Baseline: declining trajectory → surprise question (no surprise → planning mode) → goals talk + prior wishes + comfort offer (honest CPR conversation — M05) + palliate five + family presence + rituals → document ACP + DNAR discussion → good-death checklist → debrief + reflect.",
          ],
        },
        {
          type: "table",
          heading: "Score your reasoning (examiner's marks)",
          columns: ["Element (marks each)", "What earns it", "What loses it"],
          rows: [
            ["Baseline + hunt (2)", "Named baselines + CAM/PINCH ME/bag/red-flag hunts applied", "No baseline; treating symptoms without hunting causes"],
            ["Assessment (2)", "CGA domains + tools (CFS, TUG, AMT, GDS, MUST, Beers) cited", "'Assess fully' with no tool or domain named"],
            ["Plan + family (2)", "Owned/dated actions + meeting + map + money + diaries", "Ward-only plan; family as visitors not partners"],
            ["Goals + dignity (2)", "THEIR goal quoted + ageism-free + intimate-care dignity", "Clinician goals imposed; elderspeak; shame-blind care"],
            ["Document + review (2)", "What recorded + review dates + QI/audit loop", "'Document everything' with no content or dates"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The 10-mark paragraph formula",
          body: "For every scenario write: BASELINE ('CFS… AMT… was… now…') → HUNT ('CAM/PINCH ME/brown bag/red flags show…') → ASSESS ('CGA finds… tools…') → PLAN ('…owned by… dated… diaries…') → FAMILY ('meeting… map… money…') → GOALS ('their goal… dignity…') → DOCUMENT ('record… review…'). Seven sentences, ten marks. PRO-I compass slots first where danger is immediate ('protect/admit first…'). Practise all five scenarios aloud until baselines-vs-change thinking runs without notes — that reflex IS gerontology.",
        },
      ],
      keyPoints: [
        "Formula: baseline → hunt → assess (CGA) → plan → family → goals → document + review.",
        "Fall + confusion: delirium hunt + anticoag scan + hip check + bag + CGA + family.",
        "New incontinence: type + diary + cause + train + dignity + mood + goals.",
        "Refusal: mouth/swallow/drugs/delirium + MUST + suicide ask + company + simplify + review.",
        "Bruises/fear: see ALONE + map + protect (admit) + report (Welfare/DOVVSU) + safe placement.",
        "Dying: surprise question → goals + ACP + comfort + checklist + debrief; 10-mark formula practised aloud.",
      ],
      quiz: {
        questionIds: ["NG-MOD-GERO-018", "NG-MOD-GERO-019"],
        categories: ["gerontology-community", "safety-infection-control"],
        keywords: ["capstone", "scenarios", "baseline", "hunt", "formula", "anticoag", "incontinence", "refusal", "abuse", "dying", "distinction", "reasoning", "canvas", "goals", "family"],
      },
    },
    {
      slug: "elder-project-and-exam-prep",
      title: "Elder project and exam prep",
      minutes: 20,
      objectives: [
        "Launch a 90-day elder QI project.",
        "Master the 25 tricky points.",
        "Execute the countdown and STAR.",
        "Crown the portfolio, sign the pledge.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Your 90-day elder project",
          paragraphs: [
            "Pick ONE (PRO-II M4 PDSA + run chart + present): <strong>mini-CGA coverage</strong> ('every 65+ admission gets CFS + Katz + TUG + AMT + GDS-4 + meds + MUST within 24 h') · <strong>falls rate</strong> (workup compliance + hazards fixed per faller) · <strong>Beers rate</strong> (brown-bag MOTs + deprescribe-one) · <strong>delirium detection</strong> (CAM on every new confusion — catch hypoactive!) · <strong>mobilised-day-1 %</strong> (metres charted + posted). Canvas it (M07 diagram: aim → stakeholders → diagnosis → PDSA → measure → sustain), update the ward board weekly, present at 30/60/90 days. Resistance? Co-design with night staff + cleaners + family reps (their fingerprints on the fix — PRO-II M7). One finished project ('our delirium detection doubled, falls fell 40%') outranks ten certificates at interviews, appraisals and NMC portfolios (PRO-I M7/M06 PRO-II). Start within 30 days of finishing this course — momentum is a clinical skill.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-GRN-0014.svg",
          alt: "Exam map: M1 theories systems pillars ageism, M2 CFS Katz TUG CGA, M3 CAM PINCH ME leaks pain, M4 Beers bag deprescribe, M5 carers abuse good deaths, M6 MUST swallow aids hips. Twenty-five tricky points listed. Countdown six to day with cards and mock. Formula plus STAR interview guidance. Portfolio crown contents. Pledge quoted.",
          caption: "Twenty-five killers learned cold — then the countdown, then the pledge.",
        },
        {
          type: "text",
          heading: "25 points + countdown + STAR",
          paragraphs: [
            "Learn cold (diagram lists all): function over candles; afebrile ≠ well; IADL fails first; TUG >20 high-risk; CFS from 2-week baseline; every fall gets workup; long lie = CK/kidney; aids ON before screens; delirium excluded FIRST; CAM acute+inattention+(1); PINCH ME hunt; hypoactive kills most; validate feelings not facts; GDS + suicide ask; four leaks typed; catheters LAST; PAINAD behaviour; NSAID kidney/GI + opioid bowel plans; cataract referred + wax OUT; Beers anticholinergic/benzo/NSAID; triple whammy + sick-day rules; brown bag every admission; taper never abrupt (benzos, steroids, beta-blockers, antidepressants, antiparkinson); abuse seen ALONE + reported always; MUST + re-feed low-and-slow. <strong>Countdown</strong>: 6 weeks map 42 objectives + weak topics; 4 weeks timed past questions + canvas rationales; 2 weeks cards; 1 week mock + sleep; eve pack + rest; DAY read twice, canvas-structure, cite modules, attempt ALL. <strong>Interviews</strong>: STAR from canvas + project ('our falls fell 40% — I…'); 'difficult elder?' = BPSD-as-unmet-need aloud; 'why gerontology?' = function-not-candles + one elder's story (de-identified).",
          ],
        },
        {
          type: "text",
          heading: "Portfolio crown and pledge",
          paragraphs: [
            "Crown your portfolio (PRO-I M7): elder canvas (de-identified) + run charts + QI protocol + family-meeting log + meds-MOT data + reflections (Gibbs: which hunt saved whom? which bias did you catch in yourself?) + board photos + CPD entries. Keep serving after the course: mini-CGA every elder contact, brown bag every admission, mobilise day 1, see abuse alone, feed with company, ask goals first. <strong>The pledge</strong> (say it, sign it, file it): 'I will see function not candles, hunt every new confusion, type every leak, question every drug, see abuse alone, feed with company, walk my elders daily — grey hair, full dignity, always. When pressured to bed them, rush them, shame them or write them off, I will remember the farmed-Monday elder confused-Tuesday, the hidden incontinence, the unfitted dentures — and choose the canvas.'",
          ],
        },
        {
          type: "table",
          heading: "Course map: where everything lives",
          columns: ["Module", "Core tools", "Exam favourite"],
          rows: [
            ["01 Ageing", "Theories, systems, pillars, screening", "Normal vs warning + ageism bans"],
            ["02 Assessment", "CFS, Katz/Lawton, TUG, CGA", "IADL-first + baselines catch delirium"],
            ["03 3Ds + chronic", "CAM, PINCH ME, leaks, PAINAD", "Hypoactive + catheters-last + wax"],
            ["04 Meds", "Beers, brown bag, deprescribe", "Cascades + triple whammy + tapers"],
            ["05 Hearts", "Carers, abuse chain, good death", "See-alone + surprise question + ACP"],
            ["06 Fuel/move", "MUST, swallow, aids, hips", "Re-feeding + day-1 mobilisation"],
            ["07 Capstone", "Canvas, formula, 25 points", "Scenario reasoning + QI design"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Course complete: NGP-GRN-101",
          body: "Seven modules, fourteen lessons, fourteen diagrams: ageing → assessment → 3Ds → meds → hearts → fuel/move → capstone. You hold the canvas, the hunts, the Beers list, the MUST tape and the pledge. File this course in your portfolio, run your 90-day elder project, and walk onto wards, OPDs and CHPS zones as the nurse who sees function not candles. Gerontology isn't a specialty — it's the future arriving one birthday at a time, asking for dignity. Congratulations, elder-nurse.",
        },
      ],
      keyPoints: [
        "90-day project: ONE metric (mini-CGA/falls/Beers/delirium/mobility) + PDSA + board + present.",
        "25 tricky points cold; countdown 6-4-2-1 with mocks + sleep; canvas-structured answers.",
        "Interviews: STAR from project; BPSD-as-need; why-gerontology with a story.",
        "Portfolio crown: canvas + charts + logs + MOT data + reflections + photos.",
        "Keep serving: mini-CGA, brown bag, day-1 mobilisation, see-alone, company meals, goals first.",
        "Pledge signed + filed; project started within 30 days.",
      ],
      quiz: {
        questionIds: ["NG-MOD-GERO-020"],
        categories: ["leadership-delegation"],
        keywords: ["QI project", "PDSA", "tricky points", "countdown", "STAR", "interviews", "pledge", "portfolio", "90 days", "distinction", "canvas", "run chart", "gerontology", "dignity", "momentum"],
      },
    },
  ],
};
