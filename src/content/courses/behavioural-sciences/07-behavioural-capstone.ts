import type { CourseModule } from "../types";

export const behaviouralCapstone: CourseModule = {
  slug: "behavioural-capstone",
  title: "Behavioural capstone",
  summary:
    "Whole persons, wholly nursed — proven: five scored scenarios (defaulting diabetic, silent toddler, furious diagnosis, postnatal flatness, chained psychosis) run through the six-move canvas — then 90-day menu, theory tags, 25 tricky points with countdown, STAR interviews, portfolio crown, and the behavioural pledge.",
  lessons: [
    {
      slug: "behavioural-capstone-scenarios",
      title: "Behavioural capstone scenarios",
      minutes: 20,
      objectives: [
        "Run the 6-move canvas on any case.",
        "Tag theories every answer.",
        "Match stage + negotiate system.",
        "Score full marks with cited structure.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The formula: six moves",
          paragraphs: [
            "Every behavioural answer runs: <strong>1. BPS IT</strong> (Engel! — bio? psycho? social? — all three NAMED!) → <strong>2. STAGE IT</strong> (Erikson/Piaget/change-stage? — QUOTE behaviour + MATCH care!) → <strong>3. STRESS?</strong> (Selye GAS? Lazarus appraisal? coping twins? Caplan crisis? Freud defence NAMED?) → <strong>4. SYSTEM?</strong> (family roles? rainbow barriers? Kleinman beliefs? — genogram + meeting + NEGOTIATE!) → <strong>5. MOVE IT</strong> (HBM gap? MI OARS + DARN? ONE SMART step + cue?) → <strong>6. MIND IT</strong> (PHQ/GAD screen? suicide ASK? stigma fought? refer + follow-up + DOCUMENT!). <strong>TAG RULE</strong>: name the THEORIST or lose the mark — 'Engel's BPS… Erikson autonomy… Selye resistance… Freud projection… Bandura efficacy… Prochaska contemplation… Parsons sick role… Kleinman model…' Tagged answers score; untagged float. Examiners scan for BPS + STAGE + STRESS + SYSTEM + MOVE + MIND — 'I would advise him' scores one mark; 'BPS: ulcer + terror + market debts; contemplation → OARS…; Kleinman asram negotiated…; PHQ-2…; SMART walk…' scores distinctions. Classic fails: bio-only, advice-only, no theory tags, no suicide screen, no documentation — the canvas FORCES all five. Six sentences, full marks — practise aloud until the six questions fire automatically: 'BPS? stage? stress? system? move? mind?'",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-BEH-0013.svg",
          alt: "Six canvas boxes BPS stage stress system move mind with examples. Canvas discipline with classic-fail warning. Scenario formula six sentences. Practice menu eight drills with pick-three guidance. Theory tags list with tagged-score rule. Cross-course links. Mantra quoted.",
          caption: "BPS it, stage it, stress it, system it, move it, mind it.",
        },
        {
          type: "text",
          heading: "Five scenarios, model reasoning",
          paragraphs: [
            "<strong>1. Diabetic trader, HbA1c 11, missed 3 reviews, 'drugs don't work'.</strong> BPS: hyperglycaemia + hopelessness + market-dawn + transport costs → stage: CONTEMPLation ('drugs don't work' — tip balance!) + HBM gap (barriers! efficacy!) → stress: resistance fraying + rationalising ('pharmacy failed!') → system: rainbow (money/transport/time!) + Kleinman? ('what heals it…?') + dawn navigation → move: OARS + DARN + ONE SMART (CHPS refills + market-day reviews!) → mind: PHQ-2 (hopelessness!) + praise + document + follow-up. <strong>2. Admitted 3-year-old, silent, ignoring mother, thumb-sucking.</strong> BPS: illness + separation + rooming? → stage: Bowlby DETACHMENT (quiet = worst!) + Erikson autonomy + Piaget pre-op → stress: despair + regression (comfort!) → system: family roles + honest returns → move: rooming-in + teddy + play therapy + choices → mind: reunion work + watch safeguarding? + document. <strong>3. 50-year-old, new colostomy, shouting 'you nurses hate me!', refusing teaching.</strong> BPS: surgery + grief/rage + breadwinner shame → stage: Erikson generativity threatened + grief waves → stress: alarm + PROJECTION (own anger outward!) + displacement → system: family meeting + Kleinman + costs → move: LEAP + OARS + ONE SMART (bag-change demo!) → mind: PHQ-2 + suicide? + stoma buddy + follow-up. <strong>4. Postnatal mother, 3 weeks, flat, 'I feel nothing for her', missing feeds.</strong> BPS: hormonal/sleep + bonding failure + support? → stage: Erikson intimacy + maternal role → stress: exhaustion + possible depression → system: genogram + carer load + beliefs? → move: support plan + ONE SMART (sleep shifts!) → mind: PHQ-9 + SUICIDE ask + harm-fears ask + urgent refer + YOU follow-up + document. <strong>5. Young man chained at prayer camp, voices, beaten, family 'spirits!'.</strong> BPS: psychosis + trauma + chaining → stage: Erikson identity/intimacy derailed → stress: crisis + fear → system: Kleinman (spirits!) + pastor ALLY + family counsel + Mental Health Act → move: negotiate drugs+prayer + unchain plan → mind: safety + medical rule-out + urgent CPN/psychiatrist + REPORT abuse + follow-up.",
          ],
        },
        {
          type: "table",
          heading: "Score your reasoning (examiner's marks)",
          columns: ["Element (marks each)", "What earns it", "What loses it"],
          rows: [
            ["BPS + tags (2)", "3 circles + theorists NAMED (Engel et al.)", "Bio-only; no names; advice-only"],
            ["Stage + stress (2)", "Erikson/change-stage + GAS/defence named + matched", "No stage; stripped defences"],
            ["System (2)", "Genogram/rainbow/Kleinman + meeting + negotiate", "Mocked beliefs; ignored family/costs"],
            ["Move (2)", "HBM gap + OARS/DARN + ONE SMART + cue", "Lectures; 10 orders; no follow-up"],
            ["Mind (2)", "Screen + suicide ask + stigma + refer + document", "No screen; 'mad' labels; lost referral"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The 10-mark paragraph formula",
          body: "For every scenario write: BPS ('Engel: bio… psycho… social…') → STAGE ('Erikson/Prochaska… matched…') → STRESS ('Selye… Freud… nursed…') → SYSTEM ('genogram/Kleinman… negotiated…') → MOVE ('HBM… OARS… SMART…') → MIND ('PHQ… suicide… referred… documented…'). Six sentences, ten marks, theorists tagged throughout. Practise all five scenarios aloud with a partner — tag-check each other. That reflex IS behavioural nursing.",
        },
      ],
      keyPoints: [
        "Formula: BPS → stage → stress → system → move → mind, six sentences, theorists tagged.",
        "Defaulter: contemplation + HBM barriers + rainbow navigation + OARS + SMART + PHQ-2.",
        "Silent toddler: DETACHMENT + pre-op + rooming-in + play + reunion + document.",
        "Colostomy rage: projection + LEAP + family + demo SMART + PHQ-2 + buddy.",
        "Flat mother: PHQ-9 + suicide/harm asks + support plan + urgent refer + YOU follow.",
        "Chained psychosis: safety + Kleinman + pastor ally + unchain + CPN + report abuse.",
      ],
      quiz: {
        keywords: ["capstone", "scenarios", "canvas", "formula", "BPS", "tags", "theorists", "defaulter", "detachment", "projection", "postnatal", "psychosis", "distinction", "reasoning", "SMART"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "practice-exam-prep-and-pledge",
      title: "Practice, exam prep and pledge",
      minutes: 20,
      objectives: [
        "Run the 90-day behaviour menu.",
        "Tag theorists reflexively.",
        "Master the 25 tricky points.",
        "Execute countdown, STAR and pledge.",
      ],
      blocks: [
        {
          type: "text",
          heading: "90-day menu + tags",
          paragraphs: [
            "Behavioural science is PRACTISED, not memorised. Pick THREE from the <strong>menu</strong> (90 days): <strong>Kleinman week</strong> (3 belief-models, verbatim!) · <strong>ruler week</strong> (5 staged patients!) · <strong>OARS a colleague</strong> (low-stakes dances!) · <strong>genogram week</strong> (3 mapped systems!) · <strong>screen-five</strong> (PHQ/GAD + actions!) · <strong>calm audit</strong> (1 bay fixed!) · <strong>defence diary</strong> (3 named + nursed!) · <strong>life-review gift</strong> (1 elder honoured!). LOG all three (date, case, theory TAGS, Gibbs reflection!) and PRESENT one at 90 days (ward meeting? seminar? — PRO-II!). <strong>TAG DRILL</strong>: rewrite 5 past answers adding theorist names — feel marks attach ('Engel's BPS shows…', 'per Erikson…', 'Selye resistance warns…', 'Freud projection explains…', 'Bandura efficacy predicts…', 'Prochaska contemplation needs…', 'Kleinman reveals…', 'Bowlby detachment, not adjustment…', 'Parsons sick role grants…'). Examiners HUNT tags — feed them every paragraph. Verbal drill: explain any case to a friend in 60 seconds WITH 3+ tags — fluency = distinctions. Theories applied weekly become reflexes examined calmly.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-BEH-0014.svg",
          alt: "Exam map six module boxes base grow stress world change mind. Twenty-five tricky points listed. Countdown six to day with role-play. Formula plus STAR interview guidance. Portfolio crown contents. Pledge quoted. Tag rule. Mantra quoted.",
          caption: "Twenty-five killers learned cold — then the countdown, then the pledge.",
        },
        {
          type: "text",
          heading: "25 points + countdown + STAR",
          paragraphs: [
            "<strong>25 points cold</strong> (diagram): BPS 3, placebo/nocebo, 3 lenses, sick role, Kleinman 3, protest→detachment, Piaget 4, Erikson 8, GAS 3, appraisal/frame, coping twins, crisis 5, defences 8, rainbow 5, gradient, genogram, negotiate, HBM 6, stages 6, efficacy, PACE/OARS, DARN, SMART, screen + suicide 5, stigma fight. <strong>Countdown</strong>: 6 weeks map objectives + weak topics; 4 weeks timed past Qs + canvas answers; 2 weeks cards (theorists! stages! lists! 25 points!); 1 week mock + ROLE-PLAY + sleep; eve pack + rest; DAY read twice, canvas-structure, TAG theories, attempt ALL. <strong>Interviews</strong>: STAR from YOUR menu ('our defaulters halved after dawn clinic + OARS…'); 'non-compliant patient?' = HBM gap + stage + MI aloud ('I staged contemplation, OARS'd her barriers — SHE set the step'); 'angry/aggressive patient?' = LEAP + defence named + de-escalation; 'why behavioural sciences?' = one story (de-identified!) + whole-person passion ('he came for ulcer drugs and left with transport, hope and a plan — BPS nursing'). 'Difficult family?' = genogram + meeting + Kleinman negotiated.",
          ],
        },
        {
          type: "text",
          heading: "Portfolio crown and pledge",
          paragraphs: [
            "Crown your portfolio (PRO-I M7): GENOGRAMS (drawn + interpreted!) + screens LOG (PHQ/GAD + actions + referrals!) + OARS notes (DARN quotes + SMART goals!) + menu RESULTS (before/after numbers!) + Gibbs reflections (which defence humbled you? which belief converted? which silent patient spoke?) + CPD entries + consented photos. Keep serving: BPS every patient, stage every change, respect every defence, negotiate every belief, evoke every reason, screen every mind. <strong>The pledge</strong> (say it, sign it, file it): 'I will BPS every patient, stage every change, respect every defence, negotiate every belief, evoke every reason, screen every mind — whole persons, wholly nursed. When pressured to drug-and-discharge, mock beliefs, strip defences, label defaulters or chain the psychotic, I will remember the hopeless trader, the silent toddler, the shouting stoma, the flat mother, the chained young man — and choose the canvas.'",
          ],
        },
        {
          type: "table",
          heading: "Course map: where everything lives",
          columns: ["Module", "Core tools", "Exam favourite"],
          rows: [
            ["01 Base", "BPS, lenses, sick role, Kleinman", "Holistic = 3 circles + example each"],
            ["02 Grow", "Bowlby, Piaget, Erikson", "Detachment trap + stage-match care"],
            ["03 Stress", "GAS, coping, crisis, defences", "Name + quote + nurse defences"],
            ["04 World", "Rainbow, gradient, genogram", "Navigate, never blame"],
            ["05 Change", "HBM, stages, MI, SMART", "Stage-match + DARN + one step"],
            ["06 Mind", "Disorders, suicide, stigma", "Screen + 5 steps + pathways"],
            ["07 Capstone", "Canvas, formula, 25 points", "Scenario reasoning + tags"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Course complete: NGP-BEH-101",
          body: "Seven modules, fourteen lessons, fourteen diagrams: base → grow → stress → world → change → mind → capstone. You hold the canvas, the genogram, the ruler, the screens and the pledge. File this course in your portfolio, run your 90-day menu, and walk into wards as the nurse who sees whole persons. Behavioural science isn't theory — it's the trader re-engaged, the toddler re-attached, the rage understood, the mother screened, the chained freed. Congratulations, nurse of whole persons.",
        },
      ],
      keyPoints: [
        "90-day menu: pick THREE + log + Gibbs + present one; applied = owned.",
        "Tag drill: theorist names every paragraph; 60-second 3-tag verbal fluency.",
        "25 tricky points cold; countdown 6-4-2-1 with role-play + sleep; canvas + tags.",
        "Interviews: STAR from menu; HBM/stage aloud; why-behavioural with a story.",
        "Portfolio crown: genograms + screens + OARS + results + reflections + CPD.",
        "Pledge signed + filed; menu started within 7 days.",
      ],
      quiz: {
        keywords: ["practice", "menu", "tags", "theorists", "tricky points", "countdown", "STAR", "interviews", "pledge", "portfolio", "90 days", "distinction", "canvas", "Gibbs", "fluency"],
        categories: ["fundamentals"],
      },
    },
  ],
};
