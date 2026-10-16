import type { CourseModule } from "../types";

export const growthAndDevelopment: CourseModule = {
  slug: "growth-and-development",
  title: "Growth and development",
  summary:
    "Becoming human, stage by stage: Bowlby's attachment with separation protest and hospital rules, Piaget's four thinking stages, play therapy and safeguarding flags — then Erikson's eight crises with stage-matched nursing, adolescence guidance and ageing integrity.",
  lessons: [
    {
      slug: "attachment-childhood-and-piaget",
      title: "Attachment, childhood and Piaget",
      minutes: 18,
      objectives: [
        "Apply Bowlby attachment + protest.",
        "Run hospital rules for children.",
        "Match Piaget stages to talk.",
        "Spot safeguarding flags.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Bowlby + hospital rules",
          paragraphs: [
            "Bowlby's <strong>attachment</strong>: infants bond to caregivers as a SECURE BASE — mum near → child explores; mum gone → <strong>separation protest</strong> in three phases: PROTEST (screaming, clinging!) → DESPAIR (quiet, withdrawn, 'giving up'!) → DETACHMENT (the 'good', silent, uninterested child — the WORST sign, not the best!). Exams test this ORDER and the detachment trap: 'the admitted toddler stopped crying and ignores mother — progress?' NO — detachment; reunion work needed! Patterns: SECURE (protests, consoles, re-explores — trust built!) · AVOIDANT (mask of self-reliance, needs hidden!) · RESISTANT (cling + rage, never settled!). Hospital RULES from Bowlby: ROOMING-IN (mothers stay — policy + practice!) · familiar objects (blanket! toy! cloth!) · HONEST returns ('mum comes after lunch' — and MEANS it; lies teach mistrust!) · consistent nurses (same faces = secondary base!) · preparation through PLAY (below!). Hospitalisation trauma = separation + strange faces + pain + loss of control — prevent all four, and regression stays brief. Regression is NORMAL (thumb-sucking, bedwetting, baby-talk return under stress!) — COMFORT, never scold ('you're a big girl now!' shames a coping child!).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-BEH-0003.svg",
          alt: "Three attachment boxes secure avoidant resistant plus four Piaget stage boxes sensori pre-op concrete formal. Bowlby protest-despair-detachment order with detachment trap plus hospital rules. Piaget four stages with nursing translations. Hospital trauma four parts plus regression comfort. Play therapy examples. Safeguarding flags plus report. Teen bridge. Mantra quoted.",
          caption: "Secure base, honest returns, play first, regress kindly.",
        },
        {
          type: "text",
          heading: "Piaget + play + safeguarding",
          paragraphs: [
            "Piaget's THINKING stages (exam!): <strong>SENSORIMOTOR (0–2)</strong> — world = touch + mouth; object permanence ('mum exists when unseen!') — peek-a-boo teaches it; nurse: stay visible, cuddle, routine. <strong>PRE-OPERATIONAL (2–7)</strong> — magical + egocentric ('my anger caused the injection!' 'the moon follows ME!') — 'why' floods; nurse: TEDDY demos (COM M5!), concrete words, honest ouch, reassure 'not your fault!'. <strong>CONCRETE (7–11)</strong> — rules + order + fairness ('why does HE get more?!') — nurse: explain reasons, keep promises exactly, involve in care-steps. <strong>FORMAL (11+)</strong> — abstract + hypothetical ('what if I refuse…?') — nurse: REASON with them, discuss options, respect emerging autonomy. <strong>PLAY = THERAPY</strong>: syringe-painting, doll operations, doctor-kits, drawing fears — mastery through play. Therapeutic play BEFORE procedures cuts fear + restraint + trauma (COM M5!). Prescribe play like medicine: what, when, with whom, documented. <strong>SAFEGUARDING</strong> (PRO-I!): attachment flags (frozen watchfulness? indiscriminate affection to strangers? flinching at raised hands?) + injury-story MISMATCH (burn 'from falling' shaped like iron!) + repeat visits + delayed presentation + fearful parents → REPORT per policy (supervisor + social welfare + police as required!), DOCUMENT exactly (quotes! drawings! body maps!), never confront alone. The nurse who notices + reports saves the childhood Bowlby described.",
          ],
        },
        {
          type: "table",
          heading: "Child-care checks",
          columns: ["Child shows", "Means", "Nurse does"],
          rows: [
            ["Screaming at mum's exit", "PROTEST — healthy!", "Comfort + honest return time"],
            ["Silent, ignoring mum", "DETACHMENT — worst!", "Reunion work + rooming-in + play"],
            ["'My fault' magic thinking", "Pre-operational ego", "'Not your fault!' + teddy demo"],
            ["'Why HIM more?!'", "Concrete fairness", "Explain reason; keep promises exact"],
            ["Thumb-sucking returns", "Normal regression", "Comfort; never scold"],
            ["Iron-shaped 'fall' burn", "Safeguarding flag!", "Document + report per policy NOW"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "The quiet child warning",
          body: "The silent, undemanding, 'no-trouble' admitted toddler is NOT adjusting well — detachment, Bowlby's third phase, looks exactly like good behaviour. Watch for: no protest at separation, no joy at reunion, flat play. Respond: rooming-in, familiar objects, consistent nurse, reunion support. Quiet is not peace — check which quiet it is.",
        },
      ],
      keyPoints: [
        "Bowlby: secure base; protest → despair → DETACHMENT (quiet = worst, not best!).",
        "Hospital: rooming-in + familiar objects + honest returns + consistent nurses + play.",
        "Regression normal under stress — comfort, never scold.",
        "Piaget: sensori (stay visible!) → pre-op (teddy + 'not your fault!') → concrete (explain!) → formal (reason!).",
        "Play = therapy: doll-ops + syringe-paint + kits BEFORE procedures, documented.",
        "Safeguarding: flags + mismatch + repeats → document exactly + report NOW.",
      ],
      quiz: {
        questionIds: ["NG-MOD-BEH-004","NG-MOD-BEH-005"],
        keywords: ["Bowlby", "attachment", "secure base", "protest", "despair", "detachment", "Piaget", "sensorimotor", "pre-operational", "concrete", "formal", "play", "regression", "safeguarding", "rooming-in"],
        categories: ["mental-health"],
      },
    },
    {
      slug: "erikson-adolescence-and-ageing",
      title: "Erikson, adolescence and ageing",
      minutes: 18,
      objectives: [
        "Name Erikson's 8 crises.",
        "Nurse each stage matched.",
        "Guide adolescent identity.",
        "Support ageing integrity.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Eight crises",
          paragraphs: [
            "Erikson's EIGHT psychosocial crises (exam pure — ALL eight, in order!): <strong>1 TRUST vs mistrust</strong> (infant: fed + held + consistent → HOPE!) · <strong>2 AUTONOMY vs shame</strong> (toddler: 'ME DO!' → WILL!) · <strong>3 INITIATIVE vs guilt</strong> (play age: trying + leading → PURPOSE!) · <strong>4 INDUSTRY vs inferiority</strong> (school: 'I CAN!' → COMPETENCE!) · <strong>5 IDENTITY vs confusion</strong> (teen: 'WHO AM I?' → FIDELITY!) · <strong>6 INTIMACY vs isolation</strong> (young adult: love + partnership → LOVE!) · <strong>7 GENERATIVITY vs stagnation</strong> (midlife: guiding next generation → CARE!) · <strong>8 INTEGRITY vs despair</strong> (elder: 'WAS MY LIFE GOOD?' → WISDOM!). Each resolved = virtue; unresolved = carried wound colouring later crises. Key exam insight: ILLNESS REGRESSES — hospitalised adults slide back to trust (1: 'will they harm me?') + autonomy (2: 'nothing I control!') — so INFORM + offer CHOICES even to professors ('which arm? shower now or after breakfast?'). Stage-matched nursing: 1 same warm nurse, predictable routine · 2 choices everywhere · 3 praise TRYING (stickers for brave attempts, not just success!) · 4 schoolwork + 'I can' tasks (self-injections taught proudly!) · 5 privacy + respect + peers (below!) · 6 partners included, visiting honoured · 7 mentor roles ('teach the new mother — your experience guides!') · 8 life review + honour + legacy (below!). Mnemonic: 'Trust Try Make Master-Me-Us-Guide-Grace' — or invent yours and keep it!",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-BEH-0004.svg",
          alt: "Eight Erikson stage boxes in two rows with virtues. Eight crises in order with regression insight. Nursing per stage eight actions. Adolescence identity guidance with risk reframing. Ageing integrity life-review therapy with despair signs. Midlife generativity. Exam move stage-match plus care. Cross-course links. Mantra quoted.",
          caption: "Trust, try, make, master, me, us, guide, grace.",
        },
        {
          type: "text",
          heading: "Teens + elders",
          paragraphs: [
            "<strong>ADOLESCENCE (5 — identity vs confusion):</strong> peers RULE, risk TEMPTS, privacy is SACRED, bodies betray and bless by turns. Counsel: STRAIGHT talk (no babying, no preaching! — COM M5!), confidentiality EXPLAINED ('private except danger…'), CHOICES offered, FUTURE-focused ('where's this taking you? who do you want to be?'). Risk behaviours (sex, substances, recklessness) = identity EXPERIMENTS — guide, never preach ('lectures lose teens; questions keep them!'). Include FRIENDS wisely (peer educators convince where nurses can't!), loop parents carefully (consent + safety + trust triangle!). <strong>AGEING (8 — integrity vs despair):</strong> 'was my life good?' Life REVIEW therapy: photos, stories, songs, legacy ('what should grandchildren know? write/tell it!') — remembering + honouring = healing (GER M3/M6!). DESPAIR signs: bitterness, 'my life was waste', withdrawal, refusing care ('why bother?') → validate ('tell me the hardest part…'), connect (family! faith! peers!), REFER (depression? M06!). HONOUR = healing: titles, histories, roles ('Nana, the market women still speak of you!'). <strong>MIDLIFE (7)</strong>: 'am I NEEDED?' — illness threatens purpose (breadwinner bedridden!): involve ('your experience guides others!'), plan return-to-ROLE (not just return-to-health!), watch depression. <strong>Exam move</strong>: 'which stage?' = match age + task + QUOTE behaviour ('toddler screaming ME DO = autonomy!'); 'nursing care?' = stage-matched action. Always BOTH halves — stage without care scores half.",
          ],
        },
        {
          type: "table",
          heading: "Stage-match checks",
          columns: ["Patient shows", "Stage", "Nurse does"],
          rows: [
            ["'ME DO!' tantrums", "2 Autonomy", "Safe choices; praise trying"],
            ["'Why him MORE?!'", "4 Industry", "Explain fairness; 'I can' tasks"],
            ["Secretive + peer-ruled", "5 Identity", "Privacy + straight talk + future Qs"],
            ["Newlywed clinging", "6 Intimacy", "Partner included; visiting honoured"],
            ["'Am I still needed?'", "7 Generativity", "Mentor role; return-to-role plan"],
            ["'My life was waste'", "8 Despair risk!", "Life review + honour + refer"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Life-review gift",
          body: "This week: sit with ONE elder and ask 'what should young people know about your life?' — listen 15 minutes, write one page, read it back. Watch despair soften into pride. Life review is Erikson stage-8 nursing in pure form: integrity supported, legacy witnessed, worth confirmed. The cheapest antidepressant on the ward is a nurse who asks — and stays to hear.",
        },
      ],
      keyPoints: [
        "Erikson 8 in order: trust → autonomy → initiative → industry → identity → intimacy → generativity → integrity.",
        "Resolved = virtues (hope→wisdom); illness regresses to trust + autonomy — inform + choose!",
        "Nurse each stage: same nurse → choices → praise trying → 'I can' → privacy → partners → mentor → life review.",
        "Teens: straight + confidential + choices + future; risks = experiments — guide, preach never.",
        "Elders: life review + honour + legacy; despair (bitter/waste/withdrawn) → validate + connect + refer.",
        "Exams: stage-match (age + task + quote) AND stage-care — both halves, full marks.",
      ],
      quiz: {
        questionIds: ["NG-MOD-BEH-006","NG-MOD-BEH-007"],
        keywords: ["Erikson", "trust", "autonomy", "initiative", "industry", "identity", "intimacy", "generativity", "integrity", "despair", "adolescence", "life review", "regression", "virtues", "stages"],
        categories: ["mental-health"],
      },
    },
  ],
};
