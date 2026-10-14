import type { CourseModule } from "../types";

export const stressCopingAdaptation: CourseModule = {
  slug: "stress-coping-adaptation",
  title: "Stress, coping and adaptation",
  summary:
    "Pressure into power: Selye's GAS with alarm-to-exhaustion nursing, Lazarus appraisal and reframing, fight-flight physiology and ward calmers — then coping twins, Caplan crisis steps, Freud's defences with respect-then-test nursing, and family carer support.",
  lessons: [
    {
      slug: "stress-theories-and-the-nurses-response",
      title: "Stress theories and the nurse's response",
      minutes: 18,
      objectives: [
        "Run Selye's GAS 3 stages.",
        "Reframe Lazarus appraisals.",
        "Explain fight-flight harm.",
        "Calm wards + self.",
      ],
      blocks: [
        {
          type: "text",
          heading: "GAS + appraisal",
          paragraphs: [
            "Selye's <strong>General Adaptation Syndrome</strong> (exam!): <strong>1. ALARM</strong> — fight-flight fires: adrenalin + cortisol, pulse/BP/sugar UP, digestion/immunity DOWN, fear sharpens. Useful SHORT (escape the fire! survive the diagnosis hour!). <strong>2. RESISTANCE</strong> — coping holds, body PAYS quietly: resources drain, sleep frays, temper shortens, immunity dips. THE nursing window — intervene HERE. <strong>3a. RECOVERY</strong> — threat ends + rest → growth ('what I learnt from cancer!'). <strong>3b. EXHAUSTION</strong> — systems FAIL: ulcers, hypertension, infections, diabetes tipping, depression, collapse, BURNOUT. Stress unrelieved bills bodies AND minds — patients' and nurses'. Lazarus adds MEANING: stress = event × APPRAISAL. <strong>Primary</strong> ('threat? challenge? loss?') + <strong>secondary</strong> ('can I cope? help available?') → coping → re-appraisal. Same mastectomy: THREAT ('I'm unlovable, I'll die!') versus CHALLENGE ('I'll fight + reconstruct + live!') — the nurse REFRAMES appraisals: information ('survival rates…'), modelling ('others returned to market!'), resources ('support group Thursday!'), presence ('I'll walk with you!'). Reframing isn't false cheer — it's widening a narrowed lens (COM empathy + NUT hope!). Holmes-Rahe ranks stressors (death of spouse/child, divorce, illness, job loss, moves, exams, money): STACKED stressors MULTIPLY — bereaved + broke + ill + exams = crisis watch (next lesson!). Ask life-context, not just symptoms: 'what ELSE is weighing on you…?'",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-BEH-0005.svg",
          alt: "Three GAS boxes alarm resistance recovery plus exhaustion banner. GAS stages with act-at-resistance rule. Lazarus primary secondary re-appraisal with mastectomy example. Fight-flight physiology with chronic disease list. Holmes-Rahe stacked stressors. Nurse own-stress phases plus self-care. Ward calmers list. Cross-course links. Mantra quoted.",
          caption: "Alarm informs, resistance warns, exhaustion bills — act at two.",
        },
        {
          type: "text",
          heading: "Bodies, wards, selves",
          paragraphs: [
            "<strong>FIGHT-FLIGHT-FREEZE</strong> physiology: pupils wide, pulse pounding, breath fast, sugar flooding, digestion OFF, immunity DOWN, clotting UP. Acute = survival; CHRONIC = disease: hypertension, diabetes, ulcers, infertility, infections, poor wound healing, anxiety, depression. So calming the body (slow BREATHING taught! presence sat! pain relieved FIRST! fears named!) IS treating disease — prescribe calm like drugs. <strong>WARD CALMERS</strong>: explain BEFORE doing ('this will… then…') · offer CHOICES (control soothes!) · treat pain FIRST (agony hears nothing! — COM!) · keep families NEAR (presence heals!) · noise DOWN (night voices low! alarms answered fast!) · sleep GUARDED (cluster night tasks!) · prayer ROOM/time honoured · honest TIMELINES ('results Thursday' — uncertainty tortures!). Calm wards heal; chaos wards sicken — audit YOUR bay's noise, light, waiting, words. <strong>YOUR stress</strong> (nurses GAS too!): shifts + deaths + hierarchy + exams + money. Recognise YOUR phase: snapping at juniors? dreading shifts? numb at grief? tearful at home? = resistance FRAYING → sleep + food + movement + debrief (COM M02!) + boundaries ('no' practised!) + HELP (counsellor! pastor! friend! — PRO-II wellbeing!). Burnout nurses harm patients (errors! coldness! exits!) — self-care IS patient safety, examinable and non-negotiable.",
          ],
        },
        {
          type: "table",
          heading: "Stress checks",
          columns: ["Shows", "Stage/meaning", "Nurse does"],
          rows: [
            ["Pounding pulse, terror", "ALARM — acute", "Safety + presence + slow breathing"],
            ["Snapping, sleepless, tired", "RESISTANCE — window!", "Rest + relief + reframe + refer"],
            ["Collapse, depression, ulcers", "EXHAUSTION — billed!", "Treat + long rest + support + follow"],
            ["'I'll die of this!'", "Threat appraisal", "Reframe: info + models + resources"],
            ["Bereaved + broke + ill", "Stacked (Holmes-Rahe)", "Crisis watch + simplify + support"],
            ["Dreading shifts, numb", "Nurse resistance fray", "Sleep + debrief + boundaries + help"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The calm audit",
          body: "This week: audit your bay for stress — noise levels, night interruptions, unexplained waits, pain delays, family exclusions. Fix ONE: cluster night vitals, explain waits hourly, treat pain before talks. Measure the change in faces, sleep, even vitals. Calm is clinical — prescribe it daily, starting with your own breathing.",
        },
      ],
      keyPoints: [
        "GAS: alarm (fight-flight!) → resistance (WINDOW!) → recovery or exhaustion (bills!).",
        "Lazarus: stress = event × appraisal; reframe threat→challenge with info + models + resources.",
        "Chronic fight-flight = disease (HTN, ulcers, infections, depression) — calm treats.",
        "Stacked stressors multiply (Holmes-Rahe) — ask life-context + crisis-watch.",
        "Ward calmers: explain + choices + pain-first + families + quiet + sleep + prayer + timelines.",
        "Nurse stress: recognise phase → sleep + debrief + boundaries + help; self-care = safety.",
      ],
      quiz: {
        keywords: ["Selye", "GAS", "alarm", "resistance", "exhaustion", "Lazarus", "appraisal", "reframe", "fight-flight", "cortisol", "Holmes-Rahe", "stressors", "burnout", "calm", "self-care"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "coping-crisis-and-defence-mechanisms",
      title: "Coping, crisis and defence mechanisms",
      minutes: 18,
      objectives: [
        "Match coping twins to control.",
        "Run Caplan crisis steps.",
        "Name + nurse 8 defences.",
        "Support hidden carers.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Coping twins + crisis",
          paragraphs: [
            "Lazarus's <strong>COPING TWINS</strong>: <strong>PROBLEM-focused</strong> — fixable? PLAN + act + help-seek (exams → study timetable!; debts → payment plan!; symptoms → clinic + diary!). <strong>EMOTION-focused</strong> — unfixable? SOOTHE + share + reframe + rest (dying → presence + prayer!; grief → tears + rituals!; waiting → breathing + company!). MATCH to control: problem-coping the uncontrollable (planning away death!) breeds despair; emotion-coping the fixable (praying over missed doses!) breeds default. Nurses teach BOTH + match: 'drugs we PLAN; fear we SHARE — which first…?' <strong>CRISIS</strong> (Caplan!): threat + can't cope + OVERWHELMED — a 4-to-6-WEEK window where intervention decides growth or damage! Steps (exam pure!): <strong>SAFETY</strong> first (suicide? harm to others? — ask DIRECTLY, COM M5!) → <strong>SIMPLIFY</strong> (ONE next step — 'today: eat + sleep + return Thursday!') → <strong>SUPPORT</strong> (STAY! family gathered! faith looped!) → <strong>PLAN</strong> (resources + referrals + written!) → <strong>FOLLOW-UP</strong> (call/visit — crises outlast shifts!). Grief, diagnosis, assault, disaster, failed exams, new disability — SAME steps, every storm. Document safety + plan + follow-up (INF!). Families in crisis: inform HONESTLY (rumours torture!), decide TOGETHER, rest carers ('sleep — I'll call with news!').",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-BEH-0006.svg",
          alt: "Three boxes problem-coping emotion-coping crisis plus two defence boxes respect-test. Coping twins with control-matching and mismatch warnings. Crisis Caplan window plus five steps plus family guidance. Defences eight listed with examples. Nurse defences respect reality-test never-strip plus healthy strengthening. Family carer support plus hidden carers. Cross-course links. Mantra quoted.",
          caption: "Fix what's fixable, soothe what's not, never strip defences.",
        },
        {
          type: "text",
          heading: "Defences + carers",
          paragraphs: [
            "Freud's <strong>DEFENCE MECHANISMS</strong> (exam list — name + example each!): <strong>DENIAL</strong> ('no cancer — labs mixed up!') · <strong>PROJECTION</strong> ('nurses HATE me!' — own anger outward!) · <strong>RATIONALISING</strong> ('missed drugs — pharmacy failed!' — excuses!) · <strong>DISPLACEMENT</strong> (shout at NURSE, furious at DIAGNOSIS!) · <strong>REGRESSION</strong> (adult baby-talk, thumb-sucking!) · <strong>REPRESSION</strong> (can't RECALL trauma!) · <strong>SUBLIMATION</strong> (grief → VOLUNTEERING — HEALTHY channelling!) · <strong>HUMOUR</strong> (gallows jokes surviving night shift!). Nursing: RESPECT first (defences are shock-absorbers — COM denial!) → meet the NEED beneath (fear? shame? grief?) → GENTLY reality-test ('the scan shows… shall we plan the next step…?') → NEVER strip ('stop denying!' breaks, never heals!) → STRENGTHEN healthy ones (sublimation! humour! faith! exercise!). Exam formula: NAME it + QUOTE it + NURSE it ('projection — \"nurses hate me\" — respond to the fear beneath + gently test + never argue!'). <strong>FAMILY CARERS</strong>: include + inform + RESPITE ('rest — I'll call!') + teach skills (lifting! meds! red flags!) + watch HIDDEN carers (daughters dropping school! wives skipping clinic!) — carer burnout is a SECOND patient: screen ('how are YOU coping…?') + support + refer (GER carers! PRO-II!). Thank carers explicitly — thanked carers endure; invisible ones collapse.",
          ],
        },
        {
          type: "table",
          heading: "Defence spotting",
          columns: ["Patient says", "Defence", "Nurse responds"],
          rows: [
            ["'No cancer — labs wrong!'", "DENIAL", "Time + drip-feed + plan ('shall we…?')"],
            ["'You nurses hate me!'", "PROJECTION", "Fear beneath + gentle test, argue never"],
            ["'Pharmacy failed me!'", "RATIONALISING", "Facts kindly + own-part + forward plan"],
            ["Shouts at nurse, dx today", "DISPLACEMENT", "LEAP + 'fury at news, not me — tell me'"],
            ["Adult baby-talk post-op", "REGRESSION", "Comfort + choices; scold never"],
            ["Grief → volunteers", "SUBLIMATION ★", "Praise + support the channelling!"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Defence diary",
          body: "This week: spot THREE defences in action (yours count! — we all displace onto traffic and rationalise chocolate). Name each, note the need beneath, practise the gentle response. Examiners award 'name + nurse it' — but the real prize is patience: defended patients stop looking difficult and start looking frightened. Meet fright, not fight.",
        },
      ],
      keyPoints: [
        "Coping twins: problem (fixable → plan!) + emotion (unfixable → soothe!); match to control.",
        "Crisis: 4-6-week window — safety → simplify → support → plan → follow-up.",
        "Defences 8: denial, projection, rationalising, displacement, regression, repression, sublimation★, humour.",
        "Nurse: respect → need beneath → gently test → never strip → strengthen healthy.",
        "Exam: NAME + QUOTE + NURSE each defence.",
        "Carers: include + respite + teach + watch hidden + screen burnout + thank.",
      ],
      quiz: {
        keywords: ["coping", "problem-focused", "emotion-focused", "crisis", "Caplan", "defences", "Freud", "denial", "projection", "displacement", "regression", "sublimation", "carers", "burnout", "respite"],
        categories: ["fundamentals"],
      },
    },
  ],
};
