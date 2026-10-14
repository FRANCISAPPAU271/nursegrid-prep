import type { CourseModule } from "../types";

export const teachingMentorshipPreceptorship: CourseModule = {
  slug: "teaching-mentorship-preceptorship",
  title: "Teaching, mentorship and preceptorship",
  summary:
    "Multiplying yourself: Knowles' five adult-learning truths with Bloom's three domains, the clinical-methods ladder from bedside questions to supervised real care, lesson planning and Socratic questioning, patient education with teach-back — then mentor versus preceptor versus supervisor, SBI and Pendleton feedback, diagnosing difficult learners, and failing unsafe students honestly with documented support plans.",
  lessons: [
    {
      slug: "adult-learning-and-clinical-teaching",
      title: "Adult learning and clinical teaching",
      minutes: 20,
      objectives: [
        "Apply Knowles' five adult-learning truths.",
        "Teach across Bloom's three domains.",
        "Climb the clinical-methods ladder safely.",
        "Educate patients with teach-back and documentation.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Adults don't learn like children",
          paragraphs: [
            "Knowles' andragogy: adults need <strong>self-direction</strong> (co-plan — 'what do you want from today?' beats imposed topics), <strong>experience honoured</strong> (junior midwives, enrolled nurses and mothers bring years — link new knowledge to old, never lecture down), <strong>readiness at need</strong> (cannulation the morning of cannulation lists, partograph with a labouring woman — timing IS pedagogy), <strong>problem-centred</strong> learning (cases beat chapters: 'this breathless child — your ABCDE?'), and <strong>internal motivation</strong> (dignity, growth, patients saved — praise progress, not just perfection). Violate these and teaching bounces off: the dictated 40-slide lecture to exhausted night-duty nurses teaches nothing but resentment. <strong>Bloom's domains</strong> keep teaching whole: <strong>cognitive</strong> (know → apply → analyse: 'why this drug, this dose, this patient?'), <strong>psychomotor</strong> (see → do → teach: demonstration → return-demo → supervised solo), <strong>affective</strong> (feel → value → live: empathy, ethics, attitude — the domain exams miss and patients feel). Teach and test all three: the nurse who doses perfectly but sneers at the poor has failed the affective domain — and the profession.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0017.svg",
          alt: "Knowles five truths: self-direction with co-planned goals, experience built upon, readiness at need, problem-centred cases, internal motivation with praised progress. Bloom three domains: cognitive know-apply-analyse, psychomotor demo-return-demo-solo, affective feel-value-live. Clinical ladder: bedside Q and A, demonstration plus return-demo, case discussion, role-play, simulation drills, supervised real care. Lesson plan: SMART objective, prior check, teach, practise, assess, summary. Patient education: assess, chunk three points, plain words, teach-back, leaflets, document.",
          caption: "Adults learn by need, experience and problems — teach the gap, not the chapter.",
        },
        {
          type: "text",
          heading: "The clinical ladder and Socratic questions",
          paragraphs: [
            "Climb fidelity deliberately: <strong>bedside Q&A</strong> → <strong>demonstration + return-demo</strong> → <strong>case-based discussion</strong> → <strong>role-play</strong> (breaking bad news, de-escalation, refusal conversations) → <strong>simulation/scenario drills</strong> (arrest, PPH, neonatal resus, sepsis) → <strong>supervised real care</strong>. Iron rule: <strong>never first-time-on-patient what drills can teach</strong> — manikins absorb errors; patients mustn't. Lesson plan skeleton: SMART objective → prior-knowledge check → teach (chunked, demo'd) → guided practise → assess → summary + handout. <strong>Questioning</strong>: open first ('what do you see?'), Socratic probes ('why that drug? what if she's pregnant? what would change your mind?'), <strong>wait 5 seconds</strong> (silence is thinking, not ignorance), praise reasoning aloud ('good — you linked the potassium to the ECG'). Humiliation ('are you even a nurse?') teaches hiding, lying and hating — the humiliated student hides the next error instead of reporting it. Correct the act, respect the person, always.",
          ],
        },
        {
          type: "text",
          heading: "Patient education: your commonest teaching",
          paragraphs: [
            "Every discharge, diagnosis and drug is a lesson: <strong>assess</strong> (literacy, language, beliefs, barriers — cost? distance? stigma? 'who decides health matters at home?') → <strong>chunk</strong> (3 points max per session — overloaded patients retain nothing) → <strong>plain words + demo</strong> (inhalers, insulin, ORS, wound care, DOTS — show, then watch) → <strong>TEACH-BACK</strong> ('show me / tell me how you'll take these when the dizziness comes') → <strong>leaflets/pictures</strong> (literacy-proof) → <strong>document</strong> (taught + understood + leaflet given — PRO-I M5: unrecorded teaching is untaught at tribunals). Include family (with consent), use interpreters (never children for bad news), respect beliefs (negotiate, don't mock — the herbs AND the antihypertensives discussed honestly). Un-taught discharges rebound as readmissions, complications and deaths: the diabetic who never learned hypo signs, the mother who never saw ORS mixed, the TB patient who stopped pills at 'feeling better'. Education imposed without listening is lecturing; with listening, it's healing.",
          ],
        },
        {
          type: "table",
          heading: "Teaching moments: method match",
          columns: ["Moment", "Method", "Why it works"],
          rows: [
            ["Student can't read ECGs", "Case-based: real strips, Socratic probes, 5-second waits", "Problem-centred + experience-linked; strips beat slides"],
            ["Mother, new insulin prescription", "Demo + return-demo + teach-back + picture leaflet", "Psychomotor verified; teach-back exposes gaps kindly"],
            ["Junior terrified of night arrests", "Simulation drill + role allocation + debrief", "Fidelity without danger; debrief converts fear to readiness"],
            ["Ward resists new sepsis protocol", "Data + story + pilot + champions (Lewin, M01)", "Adults change for reasons + peers, not memos"],
            ["TB patient stopping drugs early", "Assess barriers → chunk → teach-back → DOTS supporter", "Adherence is taught, not ordered; supporters sustain"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The 5-minute ward teaching habit",
          body: "End every shift with one 5-minute teaching pearl for whoever is around: today's dilemma, today's drug, today's near-miss (de-identified). One pearl daily = 300 lessons a year = a ward that learns faster than its errors. Juniors who are taught stay; juniors who are used leave. Document teaching in your CPD log (PRO-I M7) and theirs — teaching evidence promotes you and protects them. The best in-charges are remembered not for rosters but for nurses they built.",
        },
      ],
      keyPoints: [
        "Knowles: self-direction, experience, readiness, problem-centred, internal motivation.",
        "Bloom: cognitive (why), psychomotor (demo→solo), affective (empathy lived) — teach all three.",
        "Ladder: Q&A → demo → cases → role-play → simulation → supervised real care; never first-time-on-patient.",
        "Question Socratically, wait 5 seconds, praise reasoning; humiliation teaches hiding.",
        "Patient education: assess → chunk 3 → demo → TEACH-BACK → leaflets → document.",
        "Daily 5-minute pearls; log teaching as CPD for you and learners.",
      ],
      quiz: {
        keywords: ["Knowles", "andragogy", "adult learning", "Bloom", "cognitive", "psychomotor", "affective", "demonstration", "simulation", "Socratic", "teach-back", "patient education", "adherence", "DOTS", "lesson plan"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "mentorship-preceptorship-and-feedback",
      title: "Mentorship, preceptorship and feedback",
      minutes: 20,
      objectives: [
        "Distinguish mentor, preceptor and supervisor.",
        "Give SBI and Pendleton feedback that changes behaviour.",
        "Diagnose difficult learners before disciplining.",
        "Fail unsafe students honestly with due process.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Three roles, one learner",
          paragraphs: [
            "<strong>Mentor</strong> (months–years): long-term guide — career, confidence, wisdom, doors opened; 'become'. <strong>Preceptor</strong> (weeks–months): placement expert — skills taught, shifts shared, competencies signed; 'perform'. <strong>Supervisor</strong> (ongoing): accountable boss — safety, standards, appraisal; 'answer for'. One nurse often wears all three — name the hat aloud ('as your preceptor today, I'll watch your drug round; as your supervisor, I own its safety'). Duties across hats: <strong>orient</strong> (ward, people, emergencies, expectations — day one, not week three), <strong>set objectives</strong> (3 SMART per placement), <strong>observe + countersign</strong> (PRO-I: students never solo beyond scope — your signature vouches to the NMC), <strong>protect</strong> (rest, meals, supervised nights, bullying intercepted — including YOUR bullying), <strong>debrief scares same-shift</strong> (the first death, first error, first aggression — unprocessed scares become trauma or cynicism), <strong>assess fairly</strong> (evidence, not favouritism or tribe or feud). Students copy your hand hygiene, your tone with cleaners, your honesty about errors — the <strong>hidden curriculum</strong> out-teaches every lesson plan.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0018.svg",
          alt: "Mentor long-term become, preceptor placement perform, supervisor accountable answer-for. SBI feedback: Situation, Behavior, Impact with allergy-check example. Pendleton: learner first, preceptor adds, one agreed action. Rules: soon private specific behaviour-balanced forward documented. Difficult learners: knowledge skills attitude welfare unsafe gaps each with response. Failing honestly: early written warning, support plan, fair re-assessment, fail plus report if still unsafe. Mentor duties: orient, objectives, countersign, protect, debrief, assess fairly.",
          caption: "Feedback feeds forward — specific, soon, private, and always with a next step.",
        },
        {
          type: "text",
          heading: "Feedback that changes behaviour",
          paragraphs: [
            "<strong>SBI</strong>: <strong>Situation</strong> ('on the drug round at 10:00…') → <strong>Behavior</strong> ('…you skipped the allergy check…') → <strong>Impact</strong> ('…so a reaction could have been missed — and you looked rushed; are you OK?'). Specific, recent, checkable — no 'your attitude', no ancient history. <strong>Pendleton</strong>: learner FIRST ('what went well? what would you change?') → preceptor adds observations → agree <strong>ONE action</strong> ('next round I'll watch your first three checks'). Learner-first builds self-assessment — the skill that outlives every placement. Rules: <strong>soon</strong> (same shift), <strong>private</strong> (never bedside/ward-round humiliation), <strong>specific</strong> (behaviour, not person), <strong>balanced</strong> (genuine strengths + real gaps — skip the fake 'sandwich' praise that teaches distrust of all compliments), <strong>forward-looking</strong> (next step named), <strong>documented</strong> (placement records + your CPD). Praise publicly, correct privately, follow up always ('last week we agreed… show me').",
          ],
        },
        {
          type: "text",
          heading: "Difficult learners and honest fails",
          paragraphs: [
            "<strong>Diagnose before disciplining</strong>: knowledge gap → teach; skills gap → drill; attitude gap → values talk + clear consequences; welfare gap (money, health, grief, abuse) → refer (counselling, SRC, chaplaincy, DOVVSU where apt) + adjust; <strong>unsafe gap</strong> → remove from risk NOW, remediate, re-assess. Most 'difficult' learners are struggling learners — curiosity beats condemnation nine times in ten. The tenth needs the profession's immune system: <strong>failing honestly</strong>. Due process: <strong>warn early + in writing</strong> (no surprise fails — cruelty + appeal-bait) → <strong>support plan</strong> (objectives, mentor, timeline, evidence) → <strong>re-assess fairly</strong> (fresh eyes where possible) → if still unsafe: <strong>FAIL + document + report to school</strong>. Passing the unsafe endangers hundreds of future patients — kindness to one student is cruelty to them all. Appeals respected, records meticulous, conscience clear. And preceptors: your NMC signature on a competency is a public promise — sign only what you SAW, never what you assume.",
          ],
        },
        {
          type: "table",
          heading: "Learner problems: diagnose then treat",
          columns: ["Presentation", "Likely gap", "Response"],
          rows: [
            ["Can't explain drug actions", "Knowledge", "Teach + case probes + re-test; link to patients nursed"],
            ["Breaks asepsis repeatedly", "Skills", "Demo → return-demo → supervised reps; sign only competence"],
            ["Rude to patients, late, phone-glued", "Attitude", "Values talk + written expectations + consequences; model better"],
            ["Withdrawn, tearful, errors rising", "Welfare", "Private check-in, refer support, adjust load; monitor safety"],
            ["Near-miss hidden, chart falsified", "Unsafe", "Remove from risk, incident per policy, support plan, re-assess — fail if unchanged"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Never sign what you didn't see",
          body: "Countersigning competencies, attendance or procedures you didn't witness is falsification — PRO-I M3/M6 territory: tribunal + criminal exposure. 'She's a good girl, just sign' from anyone — student, colleague, school — gets one answer: 'I'll observe her properly this week and sign what's competent.' Your signature vouches to the NMC, employers and future patients. Unsigned-but-true beats signed-but-false every time — and the student you make competent for real will thank you for decades.",
        },
      ],
      keyPoints: [
        "Mentor (become), preceptor (perform), supervisor (answer for) — name the hat aloud.",
        "Duties: orient day one, 3 SMART objectives, observe + countersign, protect, debrief, assess fairly.",
        "SBI: situation → behavior → impact; Pendleton: learner first → add → one action.",
        "Feedback: soon, private, specific, balanced, forward, documented; praise public, correct private.",
        "Diagnose gaps: knowledge/skills/attitude/welfare/unsafe — curiosity before condemnation.",
        "Fail honestly: early written warning → support plan → fair re-assess → fail + report; never sign unseen.",
      ],
      quiz: {
        keywords: ["mentor", "preceptor", "supervisor", "feedback", "SBI", "Pendleton", "competency", "countersign", "objectives", "debrief", "difficult learners", "failing", "support plan", "hidden curriculum", "assessment"],
        categories: ["fundamentals"],
      },
    },
  ],
};
