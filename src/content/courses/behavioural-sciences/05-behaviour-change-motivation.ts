import type { CourseModule } from "../types";

export const behaviourChangeMotivation: CourseModule = {
  slug: "behaviour-change-motivation",
  title: "Behaviour change and motivation",
  summary:
    "Change that sticks: the Health Belief Model's six beliefs, Prochaska's stages with matched nursing, self-efficacy building and relapse rescue — then MI spirit, OARS skills, DARN change talk, rolling with resistance, brief 5As and SMART goals.",
  lessons: [
    {
      slug: "health-beliefs-and-stages-of-change",
      title: "Health beliefs and stages of change",
      minutes: 18,
      objectives: [
        "Apply HBM 6 beliefs.",
        "Stage patients accurately.",
        "Match talk to stage.",
        "Build self-efficacy + rescue relapse.",
      ],
      blocks: [
        {
          type: "text",
          heading: "HBM + stages",
          paragraphs: [
            "The <strong>Health Belief Model</strong> (exam!): people act when SIX beliefs align — <strong>SUSCEPTIBILITY</strong> ('it could hit ME!' — invulnerability blocks!) + <strong>SEVERITY</strong> ('it'd be BAD!' — minimising blocks!) + <strong>BENEFITS</strong> ('acting HELPS!' — hopelessness blocks!) − <strong>BARRIERS</strong> ('cost/pain/shame/time…' — shrink EACH!) + <strong>CUE to action</strong> (trigger: scare, reminder, campaign!) + <strong>SELF-EFFICACY</strong> ('I CAN!' — helplessness blocks!). Diagnose the MISSING belief: no fear? show PERSONAL risk ('your BP + smoke + age = stroke odds…'). Fear FROZEN? stop scaring — shrink barriers + boost can-do (fear + helplessness = paralysis!). 'Why won't he stop drinking?' — run HBM: susceptible? ('liver fails drunks — I'm strong!' → suscept gap!) severe? ('so what if…?' → severity!) benefits? ('stopping won't undo…' → benefits!) barriers? ('friends + stress + brew job!' → barriers!) cue? efficacy? — then target the GAP, not the bottle. Prochaska's <strong>STAGES</strong> (exam!): <strong>PREcontemplation</strong> ('no need!' → raise DOUBT gently, preach never!) · <strong>CONTEMPLation</strong> ('maybe… torn…' → tip decisional BALANCE — pros/cons!) · <strong>PREParation</strong> ('soon!' → PLAN concretely!) · <strong>ACTION</strong> ('doing!' → SUPPORT + praise!) · <strong>MAINTENANCE</strong> ('keeping!' → RELAPSE plan!) · <strong>RELAPSE</strong> ('slipped!' → NORMALISE + restart kindly!).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-BEH-0009.svg",
          alt: "Five HBM belief boxes suscept severe benefit barriers cue-can plus six stage boxes pre contempl prep act maintain relapse. HBM six beliefs with gap-diagnosis rule. Stages six with matched talk. Mismatch harms with stage-first rule and ruler. Self-efficacy Bandura four builders. Relapse lapse-slide-collapse rescue. Cues anchoring. Cross-course links. Mantra quoted.",
          caption: "Stage it, match it, shrink barriers, grow can-do.",
        },
        {
          type: "text",
          heading: "Match, efficacy, relapse",
          paragraphs: [
            "<strong>MISMATCH HARMS</strong>: action-plans for precontemplators ('here's a diet sheet!' → BINNED + nurse dismissed as preacher!) · doubt-raising for actors ('are you SURE you can…?' → UNDERMINES!). Stage FIRST ('where are you with…? ready 0–10…?'), then MATCH. The RULER does double duty: 'ready 0–10…? why not LOWER…?' — her reasons ('…because my breathing scares me') ARE change talk (next lesson's DARN!). <strong>SELF-EFFICACY</strong> (Bandura — 'I CAN' predicts doing!): build with SMALL WINS ('one walk this week — just one!') · MODELS ('market women like you did it — meet Ama!') · PRAISE effort ('you CAME — strong start!') · SKILLS (demos! teach-back! pill organisers!). Efficacy BEATS fear as motivator — scared + helpless freezes; hopeful + able MOVES. <strong>RELAPSE = DATA</strong>, not failure: lapse (one SLIP!) vs relapse (SLIDE!) vs collapse (GIVE-UP!) — rescue at LAPSE, always kindly ('what triggered…? what worked BEFORE…? restart which piece…?'). Maintenance needs relapse PLANS ('parties? stress? travel? — my plan is…'). <strong>CUES</strong> anchor habits: pills + toothbrush · clinic + market day · walks + radio news · reviews + paydays — new habits ride old routines; memory outsourced, adherence inbuilt. Exam: 'stage + counsel' — name stage (QUOTE!), match talk, add HBM gap + efficacy + cue. One-change rule (NUT!) governs all: ONE step per visit, praised, reviewed.",
          ],
        },
        {
          type: "table",
          heading: "Stage-match checks",
          columns: ["Patient says", "Stage", "Nurse does"],
          rows: [
            ["'Smoke? No problem!'", "PREcontemplation", "Gentle doubt; facts + stories, preach never"],
            ["'Should I…? Maybe…'", "CONTEMPLation", "Decisional balance; DARN evoking (MI!)"],
            ["'Next month, I swear!'", "PREParation", "Concrete plan + date + cues + support"],
            ["'Two weeks smoke-free!'", "ACTION", "Praise + skills + slip-rescue plan"],
            ["'Six months — parties scare me'", "MAINTENANCE", "Relapse plan + confidence + review"],
            ["'Smoked all weekend…'", "LAPSE/relapse", "Normalise + trigger-hunt + restart kindly"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Ruler week",
          body: "This week: use the 0–10 ruler on FIVE patients ('ready to…? why not lower?'). Collect their reasons — those sentences are pure change talk and pure care-planning gold. Rulers take 60 seconds, stage accurately, and convert lectures into conversations. Stage it, match it, shrink barriers, grow can-do.",
        },
      ],
      keyPoints: [
        "HBM 6: suscept + severe + benefits − barriers + cue + efficacy — diagnose the GAP.",
        "Stages 6: pre → contempl → prep → act → maintain (+ relapse) — MATCH talk.",
        "Mismatch harms: plans for pre (binned!) / doubt for actors (undermined!) — stage first.",
        "Ruler: 'ready 0–10? why not lower?' — reasons = change talk.",
        "Efficacy (Bandura): small wins + models + praise + skills — beats fear.",
        "Relapse = data: lapse→rescue kindly; cues anchor habits; ONE change per visit.",
      ],
      quiz: {
        keywords: ["HBM", "beliefs", "susceptibility", "severity", "barriers", "self-efficacy", "Bandura", "stages", "Prochaska", "precontemplation", "contemplation", "relapse", "ruler", "cues", "match"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "motivational-interviewing-basics",
      title: "Motivational interviewing basics",
      minutes: 18,
      objectives: [
        "Hold MI spirit (PACE).",
        "Run OARS skills.",
        "Evoke DARN change talk.",
        "Set SMART goals + 5As.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Spirit + OARS",
          paragraphs: [
            "Motivational Interviewing (Miller & Rollnick): counselling that DANCES with ambivalence instead of boxing it. <strong>SPIRIT — PACE</strong>: <strong>PARTNERSHIP</strong> ('we decide TOGETHER' — expert + expert!) · <strong>ACCEPTANCE</strong> (worth + autonomy + empathy — COM's core!) · <strong>COMPASSION</strong> ('YOUR welfare first — not my targets!') · <strong>EVOCATION</strong> (draw OUT their reasons — never INSTALL yours!). Guide, don't wrestle. <strong>OARS skills</strong> (exam!): <strong>OPEN</strong> questions ('what worries you about the drinking…?') · <strong>AFFIRM</strong> ('coming today took courage — you kept the appointment!') · <strong>REFLECT</strong> — especially DOUBLE-SIDED ('part of you loves the calm it brings… and part fears the cough and the cost…' — both honoured!) · <strong>SUMMARISE</strong> collecting change talk ('so: breathing, children, money — did I get what matters…?'). <strong>DARN change talk</strong> — evoke + reflect + PRAISE every spark: <strong>DESIRE</strong> ('I WANT to breathe easy…') · <strong>ABILITY</strong> ('I COULD cut to weekends…') · <strong>REASONS</strong> ('BECAUSE my daughter coughs too…') · <strong>NEED</strong> ('I MUST — the doctor said liver…'). Sustain talk ('but I LOVE it…') — reflect WITHOUT feeding ('…and part enjoys it — tell me the OTHER part…'). Evokers: 'why would you WANT to change…? how COULD you…? what worries you MOST…? what would be BETTER…?' — questions whose answers argue FOR change, in THEIR voice.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-BEH-0010.svg",
          alt: "Four OARS letter boxes open affirm reflect summarise. MI spirit PACE four parts with dance line. OARS each with ward example. DARN four letters with sustain-talk handling. Roll-with-resistance righting-reflex warning plus freedom line. Brief MI 5As five steps. SMART goals with one-goal confidence ruler. Righting reflex notice-OARS. Cross-course links. Mantra quoted.",
          caption: "Evoke don't install, OARS the sparks, one SMART step.",
        },
        {
          type: "text",
          heading: "Resistance, 5As, SMART",
          paragraphs: [
            "<strong>ROLL WITH RESISTANCE</strong>: arguing feeds 'NO' — the <strong>righting reflex</strong> ('you MUST stop!') triggers 'yes BUT…' + retreat. Change ARGUED is change DELAYED. Instead: REFLECT ('you're not ready — what would need shifting…?'), REFRAME ('restless nights show your body asking for change…'), emphasise CHOICE ('it's YOURS — I'm here whatever you pick'). Freedom stated = defences lowered = change talk flows. <strong>BRIEF MI — 5As</strong> (5 minutes, ANY queue!): <strong>ASK</strong> permission ('may we talk about smoking…?' — permission OPENS!) → <strong>ASSESS</strong> (ruler + 'why not lower…?') → <strong>ADVISE</strong> (permission + PLAIN + their reasons echoed!) → <strong>AGREE</strong> (ONE small step!) → <strong>ARRANGE</strong> (follow-up date!). <strong>GOALS — SMART</strong>: Specific + Measurable + Achievable + Relevant + Timed ('walk 15 min to market Mon/Wed/Fri' — NOT 'exercise more'!). ONE goal per visit (NUT's chain!) + CONFIDENCE ruler ('sure 0–10…? below 7 — SHRINK it!') + review + PRAISE + adjust — scold slips NEVER. Document DARN + goal + confidence + review (INF!). Exam: 'counsel the defaulter/smoker/diet-dodger' = PACE + OARS + DARN quotes + 5As + SMART + follow-up. Interview: 'non-compliant patient?' — retell as AMBIVALENT patient, MI'd: 'I OARS'd her reasons — SHE set the step — kept 3 reviews.'",
          ],
        },
        {
          type: "table",
          heading: "MI moves",
          columns: ["Moment", "MI move", "Sounds like"],
          rows: [
            ["Opening", "ASK permission", "'May we talk about the drinking…?'"],
            ["Assessing", "Ruler + why-not-lower", "'Ready 0–10…? Why a 4, not 2…?'"],
            ["Sparks", "Evoke + reflect DARN", "'You WANT mornings clear — tell me…'"],
            ["'But I love it…'", "Reflect, don't feed", "'…and part enjoys it — other part…?'"],
            ["'You must stop!'-itch", "Roll + choice", "'Your call — what fits your life…?'"],
            ["Closing", "ONE SMART + arrange", "'Walk Mon/Wed 15 min — see you 2 weeks!'"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "OARS a colleague",
          body: "Practise MI where stakes are low: OARS a COLLEAGUE about their own stuck habit (exercise? sleep? study?). Open, affirm, reflect double-sided, summarise — then notice: did advice urge surge? That's the righting reflex — observe it, OARS past it. Ten low-stakes dances, and clinic MI flows naturally. Evoke don't install.",
        },
      ],
      keyPoints: [
        "PACE spirit: partnership + acceptance + compassion + evocation — dance, not box.",
        "OARS: open + affirm + reflect (double-sided!) + summarise change talk.",
        "DARN: desire + ability + reasons + need — evoke, reflect, praise sparks.",
        "Sustain talk reflected, unfed; righting reflex noticed + OARS'd past.",
        "Brief 5As: ask → assess → advise → agree → arrange — 5 minutes anywhere.",
        "SMART: one goal + confidence ruler (shrink <7!) + review + praise, scold never.",
      ],
      quiz: {
        keywords: ["MI", "PACE", "OARS", "DARN", "change talk", "sustain talk", "resistance", "righting reflex", "5As", "SMART", "ambivalence", "evoke", "affirm", "Miller", "goals"],
        categories: ["fundamentals"],
      },
    },
  ],
};
