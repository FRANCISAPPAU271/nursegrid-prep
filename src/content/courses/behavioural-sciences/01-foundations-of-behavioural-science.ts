import type { CourseModule } from "../types";

export const foundationsOfBehaviouralScience: CourseModule = {
  slug: "foundations-of-behavioural-science",
  title: "Foundations of behavioural science",
  summary:
    "People, not just patients: Engel's biopsychosocial model with mind-body proofs and the nurse's three-circle assessment — then psychology, sociology and anthropology lenses, their schools and gifts, Parsons' sick role and Kleinman's three questions.",
  lessons: [
    {
      slug: "why-behaviour-matters-in-nursing",
      title: "Why behaviour matters in nursing",
      minutes: 18,
      objectives: [
        "Apply Engel's BPS model.",
        "Cite mind-body proofs.",
        "Assess 3 circles per patient.",
        "Contrast biomedical vs holistic.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Engel's three circles",
          paragraphs: [
            "George Engel's <strong>biopsychosocial model</strong> (exam core!): every illness = <strong>BIO</strong> (genes, germs, injury, drugs) × <strong>PSYCHO</strong> (beliefs, mood, coping, trauma) × <strong>SOCIAL</strong> (family, money, culture, faith) — interacting, never separate. Treat one circle and miss the person. Chest pain at OPD: BIO (MI? reflux? muscle?) × PSYCHO (terror — 'my father died of this at 50!' — amplifying every twinge!) × SOCIAL (breadwinner, market debts, can't afford admission — will abscond unless costs are faced!). The nurse who takes an ECG but never asks 'what do you fear most…?' or 'who decides about admission…?' treats a tracing, not a man. <strong>Mind-body proofs</strong> examiners love: chronic stress → ulcers, hypertension flares, sickle crises, poor wound healing · grief → immunity dips (the widower admitted weeks after the funeral!) · fear → pain AMPLIFIED (same wound, more agony!) · hope + support → faster recovery, shorter stays. <strong>PLACEBO</strong> (belief heals — sugar pills easing pain via expectation + ritual + trust!) versus <strong>NOCEBO</strong> (dread harms — 'this will hurt badly' DOUBLES pain!). Your words DOSE physiology: 'this often helps within days — I'll check you closely' is medicine; 'this might not work, we'll see' is poison. Harness placebo HONESTLY (hope + ritual + presence — never deception!) and avoid nocebo phrasing ('a little sting' beats 'terrible pain coming!').",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-BEH-0001.svg",
          alt: "Three overlapping circles BIO PSYCHO SOCIAL with THE PATIENT centre. Engel model with chest-pain triple example. Mind-body proofs plus placebo nocebo with wording examples. Nurse BPS assessment questions per circle plus document. Biomedical contrast. Exam and interview moves. Mantra quoted.",
          caption: "Bio explains it, psycho feels it, social shapes it — nurse all three.",
        },
        {
          type: "text",
          heading: "The nurse's BPS assessment",
          paragraphs: [
            "Run THREE circles on every patient (and document all three — INF M02!): <strong>BIO</strong> — disease, pain (0–10 + character!), meds, function ('what can't you do today…?'), red flags. <strong>PSYCHO</strong> — beliefs ('what do you call this…? what caused it…?' — Kleinman, next lesson!), fears ('what scares you most…?'), mood (sleep? appetite? hope?), coping ('what's helping you hold on…?'), trauma (ask gently, believe fully!). <strong>SOCIAL</strong> — who DECIDES? (patient? spouse? elder? — COM M5!), money ('can treatment costs be managed…?'), transport, work/school impact, faith ('shall we pray/make room for your pastor…?'), support ('who helps at home…?'). Plans touching one circle FAIL: prescribed drugs without transport money = default; surgery consented without family meeting = refusal at dawn; diabetic diet ignoring market realities = fantasy (NUT!). Versus the old <strong>BIOMEDICAL model</strong> — body-as-machine, germ → drug, feelings irrelevant: BPS KEEPS the drug and ADDS the person (counsel the fear, fund the transport, honour the faith — adherence follows!). <strong>Exam move</strong>: any 'holistic care?' question = BPS three circles + one example EACH + 'nurse assesses all three' = full marks. <strong>Interview move</strong>: 'tell us about holistic care' = ONE patient's three circles told vividly ('her ulcer needed drugs, her terror needed listening, her market stall needed a dawn appointment — I arranged all three').",
          ],
        },
        {
          type: "table",
          heading: "BPS in action",
          columns: ["Circle", "Ask this", "Act on it"],
          rows: [
            ["BIO", "Pain? function? meds? red flags?", "Treat + monitor + review"],
            ["PSYCHO", "Fears? mood? coping? trauma?", "Counsel + comfort + refer"],
            ["SOCIAL", "Deciders? money? faith? support?", "Meet + fund-plan + include"],
            ["Placebo +", "'This often helps in days'", "Hope + ritual + presence, honest"],
            ["Nocebo −", "'Terrible pain coming!'", "Rephrase: 'a little sting, then done'"],
            ["Document", "All 3 circles + plan each", "INF: observed + done + quoted"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The three-circle round",
          body: "Next ward round: pick one patient and fill three circles on paper — BIO facts, PSYCHO fears/beliefs, SOCIAL deciders/money/faith — then check the care plan touches all three. Gaps WILL appear (no transport plan! fear unaddressed!). Close one gap before lunch. Three-circle rounds, done daily, convert task nursing into human nursing.",
        },
      ],
      keyPoints: [
        "BPS: bio × psycho × social interacting — assess and treat ALL three.",
        "Mind-body: stress/grief/fear sicken; hope/support heal; words dose physiology.",
        "Placebo harnessed honestly (hope + ritual + presence); nocebo phrasing banned.",
        "Nurse assessment: BIO disease/function + PSYCHO beliefs/fears/coping + SOCIAL deciders/money/faith.",
        "One-circle plans fail: drugs − transport = default; consent − family = refusal.",
        "Exams/interviews: three circles + example each = holistic care, full marks.",
      ],
      quiz: {
        questionIds: ["NG-MOD-BEH-001"],
        keywords: ["biopsychosocial", "Engel", "holistic", "mind-body", "placebo", "nocebo", "biomedical", "beliefs", "fears", "deciders", "adherence", "assessment", "circles", "hope", "stress"],
        categories: ["mental-health"],
      },
    },
    {
      slug: "the-lenses-psych-sociology-anthropology",
      title: "The lenses: psych, sociology, anthropology",
      minutes: 18,
      objectives: [
        "Rotate the 3 lenses per patient.",
        "Name psych schools + uses.",
        "Apply sick role + stigma.",
        "Ask Kleinman's 3 questions.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Three lenses, one patient",
          paragraphs: [
            "Behavioural science hands you THREE lenses — rotate all three or practise half-blind. <strong>PSYCHOLOGY</strong> (her MIND): how she thinks, feels, learns, copes, grows. Schools (exam names!): <strong>psychodynamic</strong> (Freud — unconscious, childhood, DEFENCE mechanisms — M03!) · <strong>behavioural</strong> (Pavlov/Skinner — learned habits, conditioning, rewards — M05 change!) · <strong>cognitive</strong> (Beck — thoughts SHAPE feelings — 'I'm a burden' → despair — M05/M06!) · <strong>humanistic</strong> (Maslow/Rogers — needs hierarchy, growth, UNCONDITIONAL regard, empathy — COM!). Developmental trio: Piaget (thinking stages) + Erikson (life crises) + Bowlby (attachment) — all M02! <strong>SOCIOLOGY</strong> (her WORLD): family, class, roles, inequality. Gifts: <strong>sick role</strong> (Parsons — below!), <strong>socialisation</strong> (how we learn 'nurse/patient/mother' — teach to it!), <strong>norms</strong> (ward rules, queues, visiting hours — explain them!), <strong>inequality</strong> (poverty SICKENS — M04 SDH!), <strong>stigma</strong> (Goffman — 'spoiled identity': leprosy, HIV, mental illness, fistula — FIGHT it, M06!). <strong>ANTHROPOLOGY</strong> (her MEANING): beliefs, rituals, healers. Gifts: <strong>explanatory models</strong> (Kleinman — 'what do YOU call this? caused it? heals it?' — ASK IT, below!), <strong>medical pluralism</strong> (patients use hospital + herbalist + pastor TOGETHER — negotiate, never mock! — NUT/COM!), <strong>rituals</strong> (birth, death, healing ceremonies — make ROOM!). One feverish child: psychology (mother's terror + learning), sociology (market debts + queues + sister judging), anthropology ('asram' + herbs + prayer) — nurse ALL three.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-BEH-0002.svg",
          alt: "Three lens boxes psychology sociology anthropology with names. Three-lenses one-patient with feverish-child example. Psychology four schools plus developmental trio. Sociology five gifts. Anthropology three gifts. Sick role rights duties plus misuse plus chronic. Kleinman three questions with 60-second line. Cross-course links. Mantra quoted.",
          caption: "Mind it, place it, mean it — psych, society, culture.",
        },
        {
          type: "text",
          heading: "Sick role + Kleinman",
          paragraphs: [
            "Parsons' <strong>SICK ROLE</strong> (exam favourite!): society grants the sick RIGHTS — exempt from normal duties (rest, off work!) + NOT blamed for illness + cared for — in exchange for DUTIES — WANT recovery + SEEK proper help + COOPERATE with treatment. Use it: legitimise rest ('the doctor says rest — that's your JOB now!'), expect cooperation kindly ('your part is drugs + reviews — I'll make them easy!'). Misuse? 'Malingering' is RARE — assume need first (chronic pain doubted becomes suffering doubled!). Chronic illness STRAINS the role (never 'recovers' — no graduation!) — support without judging ('still sick' isn't failure!). Mental illness strains it most (blamed + disbelieved — M06 stigma fight!). Then Kleinman's THREE QUESTIONS (use WEEKLY — 60 seconds, whole belief-worlds!): 'what do you call this problem…? what do you think CAUSED it…? what do you think will HEAL it…?' Answers map the anthropology circle: 'asram — teething + evil eye — herbs + prayer + your drip' → negotiate ALL ('the drip fights the germs, prayer guards the spirit — let's do both safely!'). Never mock revealed beliefs — mockery closes every future disclosure. Document models + negotiations (INF!). Exam: 'patient refuses transfusion (faith)' — Kleinman reveals, negotiate (alternatives? elder/pastor meeting? PRO-I autonomy!), document, escalate kindly. Interview: 'difficult patient?' — retell as UNASKED explanatory model: 'I asked Kleinman's three — refusal became negotiation.'",
          ],
        },
        {
          type: "table",
          heading: "Lens toolkit",
          columns: ["Lens", "Key question", "Nurse move"],
          rows: [
            ["Psychology", "What does she think/feel/learn?", "Counsel + teach + reinforce (M05!)"],
            ["Sociology", "What world surrounds her?", "Include family + face costs + fight stigma"],
            ["Anthropology", "What does it MEAN to her?", "Kleinman 3 + negotiate + room for ritual"],
            ["Sick role", "Rights honoured? duties eased?", "Legitimise rest; simplify cooperation"],
            ["Pluralism", "Who else heals her?", "Coordinate + safety-check + respect"],
            ["Stigma", "What label wounds her?", "Kind language + privacy + normalise"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Kleinman week",
          body: "This week: ask Kleinman's three questions of THREE patients — 'what do you call it…? what caused it…? what will heal it…?' Write the answers verbatim. You will hear asram, curses, tests of faith, germ-theory hybrids — and your care will gain negotiations you never knew you needed. Sixty seconds per patient; whole worlds per answer.",
        },
      ],
      keyPoints: [
        "Rotate psych (mind) + sociology (world) + anthropology (meaning) on every patient.",
        "Psych schools: Freud defences, Pavlov habits, Beck thoughts, Maslow/Rogers growth.",
        "Sociology: sick role, socialisation, norms, inequality, Goffman stigma.",
        "Anthropology: Kleinman models, pluralism (negotiate!), rituals (room!).",
        "Sick role: rights (exempt, unblamed, cared) + duties (recover, seek, cooperate).",
        "Kleinman weekly: call it? caused it? heals it? — then negotiate, never mock.",
      ],
      quiz: {
        questionIds: ["NG-MOD-BEH-002","NG-MOD-BEH-003"],
        keywords: ["psychology", "sociology", "anthropology", "Freud", "Pavlov", "Beck", "Maslow", "sick role", "Parsons", "stigma", "Goffman", "Kleinman", "pluralism", "rituals", "lenses"],
        categories: ["mental-health"],
      },
    },
  ],
};
