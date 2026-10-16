import type { CourseModule } from "../types";

export const communicationCapstone: CourseModule = {
  slug: "communication-capstone",
  title: "Communication capstone",
  summary:
    "Words that heal — proven: five scored scenarios (new diagnosis, furious relative, silent teen, deaf elder, dismissed worry) run through the six-move canvas — then 90-day practice menu, OSCE play, 25 tricky points with countdown, STAR interviews, portfolio crown, and the communication pledge.",
  lessons: [
    {
      slug: "communication-capstone-scenarios",
      title: "Communication capstone scenarios",
      minutes: 20,
      objectives: [
        "Run the 6-move canvas on any case.",
        "Match phase + storm protocol.",
        "Adapt + close every talk.",
        "Score full marks with cited structure.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The formula: six moves",
          paragraphs: [
            "Every communication answer runs: <strong>1. PHASE?</strong> (orient/work/end + Peplau role matched!) → <strong>2. ATTEND!</strong> (SOLER + chair + level-4 listening!) → <strong>3. EXPLORE</strong> (funnel + feelings-first + ladder + checks!) → <strong>4. STORM?</strong> (SPIKES/LEAP/HEAR/CUS/DESC — protocol, not panic!) → <strong>5. ADAPT</strong> (child? elder? deaf? blind? language? culture? mental health?) → <strong>6. CLOSE IT</strong> (summarise + plan + teach-back + document + goodbye!). Examiners scan for EMPATHY + STRUCTURE + ADAPTATION + CLOSING — 'I would reassure her' scores one mark; 'SOLER + open story + reflected fear + SPIKES emotions + Ewe interpreter + summary + teach-back + documented…' scores distinctions. Classic fails: closed questions first, no adaptation, no teach-back, no documentation — the canvas FORCES all four. Six sentences, full marks — practise aloud until the six questions fire automatically: 'phase? attend? explore? storm? adapt? close?' OSCE bonus: think ALOUD ('I'm sitting to attend… opening with her story…') — examiners mark HEARD reasoning (PRO-I's compass runs inside storm moves where safety speaks!).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-COM-0013.svg",
          alt: "Six canvas boxes phase attend explore storm adapt close with examples. Canvas discipline with classic-fail warning. Scenario formula six sentences with examiner-scan note. Practice menu eight drills with pick-three guidance. OSCE play think-aloud. Cross-course links. Mantra quoted.",
          caption: "Phase it, attend it, explore it, storm it, adapt it, close it.",
        },
        {
          type: "text",
          heading: "Five scenarios, model reasoning",
          paragraphs: [
            "<strong>1. 45-year-old told 'likely cancer', weeping, 'don't tell my husband yet'.</strong> Phase: orientation-to-working + counsellor → attend: SOLER + silence + tissue → explore: feelings-first ('this is devastating… what scares you most…?') → storm: SPIKES emotions (hold space, no fixing!) + negotiate disclosure (fears? joint telling? competent autonomy — PRO-I!) → adapt: faith framing + chosen company → close: summary + plan + written + revisit + document who-told-what. <strong>2. Relative shouting at desk: 'you people killed my father!'.</strong> Phase: working + leader → attend: calm body + private room ('let's talk properly — this way') → explore: LEAP (listen rage fully → empathise → agree-true → partner!) → storm: HEAR (write as he speaks + fix/escalate + deadline!) → adapt: grief-under-rage + elder-respect → close: summary + actions + date + incident record + debrief self. <strong>3. Silent 16-year-old, possible STI, mother answering everything.</strong> Phase: orientation + stranger→counsellor → attend: SOLER + privacy ('shall mum step out a minute…?') → explore: straight talk + confidentiality explained + ONE gentle open ('what's worrying you most…?') → storm: none yet — patience! → adapt: teen rules + no preaching → close: summary + plan + teach-back + follow-up + document. <strong>4. Deaf 70-year-old nodding blankly at discharge meds.</strong> Phase: termination + teacher → attend: face + light + chair → explore: STOP talking, write keywords + diagrams + interpreter? → storm: none — adaptation! → adapt: deaf protocol + loud-clear + teach-back by DEMO (pills into organiser!) → close: written big-print plan + family looped + document adaptation. <strong>5. Junior's worry dismissed: 'doctor said the dose is fine' — it's 10x.</strong> Phase: working + advocate → attend: — → explore: recheck facts privately → storm: CUS ('concerned… uncomfortable… SAFETY issue — stopping + senior NOW!') + DESC to prescriber → adapt: hierarchy-graded firmness → close: incident report + patient safe + reflect + SBI the junior who spoke!",
          ],
        },
        {
          type: "table",
          heading: "Score your reasoning (examiner's marks)",
          columns: ["Element (marks each)", "What earns it", "What loses it"],
          rows: [
            ["Phase + attend (2)", "Peplau phase + role + SOLER/chair/level-4 named", "No setup; standing interrogation"],
            ["Explore (2)", "Funnel + feelings-first + ladder + checks", "Closed-first; reassure/advise/judge flags"],
            ["Storm protocol (2)", "SPIKES/LEAP/HEAR/CUS/DESC spelled + applied", "Panic, defence, bulldozing, silence"],
            ["Adapt (2)", "Age/senses/language/culture/mental-health fitted", "One-size talk; shouting; child interpreter"],
            ["Close (2)", "Summary + plan + teach-back + document + goodbye", "'Any questions?' exit; uncharted talk"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The 10-mark paragraph formula",
          body: "For every scenario write: PHASE ('orienting + counsellor…') → ATTEND ('SOLER, sat, level-4…') → EXPLORE ('open story, reflected fear, ladder…') → STORM ('SPIKES/LEAP…') → ADAPT ('Ewe interpreter…') → CLOSE ('summary, teach-back, documented…'). Six sentences, ten marks. Practise all five scenarios aloud with a partner — one plays patient, one nurses, then swap + SBI each other. That reflex IS therapeutic communication.",
        },
      ],
      keyPoints: [
        "Formula: phase → attend → explore → storm → adapt → close, six sentences.",
        "Cancer tears: SPIKES emotions + negotiate disclosure + faith + revisit + document.",
        "Shouting grief: private + LEAP + HEAR + deadline + incident + debrief.",
        "Silent teen: privacy + straight talk + confidentiality + patience + follow-up.",
        "Deaf elder: face + write + demo teach-back + big-print + loop family.",
        "Dismissed worry: recheck + CUS + DESC + incident + SBI the speaker.",
      ],
      quiz: {
        questionIds: ["NG-MOD-TCOM-019", "NG-MOD-TCOM-002"],
        keywords: ["capstone", "scenarios", "canvas", "formula", "SPIKES", "LEAP", "HEAR", "CUS", "DESC", "distinction", "reasoning", "OSCE", "think-aloud", "SBI", "close"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "practice-exam-prep-and-pledge",
      title: "Practice, exam prep and pledge",
      minutes: 20,
      objectives: [
        "Run the 90-day practice menu.",
        "Play OSCEs thinking aloud.",
        "Master the 25 tricky points.",
        "Execute countdown, STAR and pledge.",
      ],
      blocks: [
        {
          type: "text",
          heading: "90-day menu + OSCE play",
          paragraphs: [
            "Communication is MUSCLE — trained, not read. Pick THREE from the <strong>practice menu</strong> (90 days): <strong>chair challenge</strong> (sit every talk, log reactions!) · <strong>funnel histories</strong> (open-first admissions, count catches!) · <strong>mirror week</strong> (summary + check every talk, count corrections!) · <strong>SPIKES role-play</strong> (partner + swap + SBI!) · <strong>SBI daily</strong> (one specific praise daily, log it!) · <strong>complaint log</strong> (HEAR each, chart learnings — INF run charts!) · <strong>interpreter drill</strong> (brief/debrief every interpreted talk!) · <strong>silence tolerance</strong> (60-second pauses, feel the itch!). LOG all three (date, case, what worked, Gibbs reflection!) and PRESENT one at 90 days (ward meeting? school seminar? — PRO-II!). <strong>OSCE play</strong>: read stem → name PHASE + role → SOLER visibly → OPEN ('tell me…') → FEELINGS-first → ladder (paraphrase/reflect/clarify) → STORM protocol if flagged → ADAPT loudly ('I'm writing keywords because…') → CLOSE (summary + plan + teach-back!). Think ALOUD throughout — 'I'm sitting to show I'm listening… I'm summarising to check…' — examiners mark HEARD reasoning; silent brilliance scores zero. Time-box: 2-min open, mid-ladder, 2-min close. Practise with timers + peers + SBI swaps — OSCEs reward rehearsed structure, not inspiration.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-COM-0014.svg",
          alt: "Exam map six module boxes base ears talk storm everyone team. Twenty-five tricky points listed. Countdown six to day with role-play. Formula plus OSCE plus STAR interview guidance. Portfolio crown contents. Pledge quoted. Elimination trick. Mantra quoted.",
          caption: "Twenty-five killers learned cold — then the countdown, then the pledge.",
        },
        {
          type: "text",
          heading: "25 points + countdown + STAR",
          paragraphs: [
            "<strong>25 points cold</strong> (diagram): Peplau 3 phases, 6 roles, empathy-vs-sympathy, trust 5, 6 flags, SOLER 5, listening 4 levels, feelings-first, 5 killers, presence + touch, 4 silences, funnel + 70/30, 5 banned Qs, ladder 4, teach-back, SPIKES 6, LEAP 4, Worden tasks, HEAR 4, candour, child play, no elderspeak, interpreter drill, SBAR + read-back, CUS + DESC + SBI. <strong>Countdown</strong>: 6 weeks map objectives + weak topics; 4 weeks timed past Qs + canvas answers; 2 weeks cards (acronyms, scripts, 25 points); 1 week mock + ROLE-PLAY + sleep; eve pack + rest; DAY read twice, canvas-structure, cite modules, attempt ALL. Elimination trick (M01!): strike reassurance/advice/judgment/defending — pick empathy + explore. <strong>Interviews</strong>: STAR from YOUR practice log ('our bay complaints fell 6 to 1 after bedside SBAR…'); 'angry relative?' = LEAP aloud (listen→empathise→agree→partner); 'tell us about a difficult conversation' = SPIKES story with feelings + learning; 'why communication?' = one story (de-identified!) + words-that-heal passion ('she came for drugs and left having told someone — that telling WAS treatment').",
          ],
        },
        {
          type: "text",
          heading: "Portfolio crown and pledge",
          paragraphs: [
            "Crown your portfolio (PRO-I M7): practice LOG (dates + cases + reflections!) + Gibbs reflections (which silence taught most? which storm survived? which adaptation converted?) + SBI records given/received + complaint LEARNINGS (HEAR cases + fixes!) + interpreter drills + role-play notes/videos (consented!) + CPD entries. Keep serving: sit for everyone, listen at level 4, ask open, mirror kindly, storm by protocol, adapt to all, close every talk. <strong>The pledge</strong> (say it, sign it, file it): 'I will sit, listen at level 4, ask open, mirror kindly, storm by protocol, adapt to everyone, close every talk — words that heal, presence that stays. When pressured to rush, shout, bulldoze, gossip or abandon the silent, the deaf, the grieving or the furious, I will remember the weeping diagnosis, the shouting son, the nodding-but-lost elder — and choose the canvas.'",
          ],
        },
        {
          type: "table",
          heading: "Course map: where everything lives",
          columns: ["Module", "Core tools", "Exam favourite"],
          rows: [
            ["01 Base", "Peplau, empathy, trust, flags", "Elimination trick + best-response"],
            ["02 Ears", "SOLER, levels, presence, silence", "Level-4 + 11-second challenge"],
            ["03 Talk", "Funnel, ladder, teach-back", "Rephrase traps + mirror checks"],
            ["04 Storm", "SPIKES, LEAP, grief, HEAR", "SPIKES spelling + candour"],
            ["05 Everyone", "Play, pace, senses, culture", "Interpreter drill + suicide ask"],
            ["06 Team", "SBAR, CUS, DESC, SBI", "Silence kills + assertive ★"],
            ["07 Capstone", "Canvas, formula, 25 points", "Scenario reasoning + OSCE"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Course complete: NGP-COM-101",
          body: "Seven modules, fourteen lessons, fourteen diagrams: base → ears → talk → storm → everyone → team → capstone. You hold the canvas, the chair, the funnel, the ladder and the pledge. File this course in your portfolio, run your 90-day practice menu, and walk into wards as the nurse whose words heal. Communication isn't soft — it's the weeping mother heard, the furious son partnered, the silent teen opened, the dismissed worry escalated. Congratulations, voice of the ward.",
        },
      ],
      keyPoints: [
        "90-day menu: pick THREE drills + log + Gibbs + present one; muscles grow logged.",
        "OSCE: phase → SOLER → open → feelings → ladder → storm → adapt → close, thinking ALOUD.",
        "25 tricky points cold; countdown 6-4-2-1 with role-play + sleep; canvas answers.",
        "Interviews: STAR from log; LEAP/SPIKES aloud; why-communication with a story.",
        "Portfolio crown: log + reflections + SBI + complaint learnings + drills + CPD.",
        "Pledge signed + filed; practice started within 7 days.",
      ],
      quiz: {
        questionIds: ["NG-MOD-TCOM-020", "NG-MOD-TCOM-001"],
        keywords: ["practice", "OSCE", "role-play", "tricky points", "countdown", "STAR", "interviews", "pledge", "portfolio", "90 days", "distinction", "canvas", "think-aloud", "Gibbs", "log"],
        categories: ["fundamentals"],
      },
    },
  ],
};
