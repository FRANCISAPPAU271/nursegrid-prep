import type { CourseModule } from "../types";

export const socialDeterminantsCulture: CourseModule = {
  slug: "social-determinants-culture",
  title: "Social determinants and culture",
  summary:
    "Health beyond hospitals: the Dahlgren-Whitehead rainbow with Marmot's gradient, the nurse's SDH screen and navigation actions, gender lens — then family systems theory, genograms, Ghana's extended families, decider meetings, belief negotiation and faith partnership.",
  lessons: [
    {
      slug: "social-determinants-of-health",
      title: "Social determinants of health",
      minutes: 18,
      objectives: [
        "Draw the SDH rainbow 5 layers.",
        "Explain Marmot's gradient.",
        "Screen SDH 8 questions.",
        "Navigate barriers to adherence.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Rainbow + gradient",
          paragraphs: [
            "Dahlgren-Whitehead's <strong>RAINBOW</strong> (exam — draw it!): <strong>centre</strong> — age, sex, genes (FIXED!) · <strong>layer 2</strong> — LIFESTYLE (food, smoke, drink, sex, exercise — counselled!) · <strong>layer 3</strong> — COMMUNITY (family, friends, faith, neighbours — mobilised!) · <strong>layer 4</strong> — LIVING conditions (housing, water, work, school, clinic, transport — navigated!) · <strong>layer 5</strong> — STRUCTURAL forces (economy, policy, NHIS, gender, power — ADVOCATED!). Nurses act on ALL FIVE: counsel lifestyle, mobilise community, navigate living barriers, advocate structure (PRO-II voice!). Marmot's <strong>GRADIENT</strong>: each step DOWN wealth/education = sicker + SHORTER lives — not just poor-vs-rich but EVERY rung (clerk sicker than manager, manager than director!). Ghana gradients: north vs south, rural vs urban, girl vs boy schooling, kayayei vs office worker, NHIS-active vs lapsed. NAME gradients, never blame victims: 'non-compliant' usually means 'couldn't afford transport + drugs + food + lost market day' — default is POVERTY, not defiance. Exam: 'why do the poor sicken first?' = rainbow layers + gradient + examples + nurse actions. Interview: 'health inequality?' = one patient's rainbow ('her TB needed drugs; her shack needed ventilation; her NHIS needed renewal — I navigated all three').",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-BEH-0007.svg",
          alt: "Five rainbow layer bars fixed lifestyle community living structural. Rainbow layers with nurse action per layer. Marmot gradient with Ghana examples and blame-never rule. SDH screen eight questions. Navigation actions dawn drugs transport NHIS referrals. Gender lens decide-pay-eat-last plus abuse screen plus girl-school. Mantra quoted.",
          caption: "Don't blame the defaulter — map the rainbow, bridge the gap.",
        },
        {
          type: "text",
          heading: "Screen + navigate",
          paragraphs: [
            "The nurse's <strong>SDH SCREEN</strong> (ask EVERY chronic/defaulter case!): MONEY ('treatment affordable…? NHIS card active…?') · FOOD ('meals daily…? drugs need food — available…?' — NUT!) · HOUSING ('rooms? water? toilet? smoke? ventilation?') · WORK ('leave possible…? pay lost…?') · TRANSPORT ('how far? cost? dawn doable…?') · SCHOOL ('missed days…? fees…?') · SAFETY ('safe at home…?' — PRIVATE ask, PRO-I!) · SUPPORT ('who helps…?'). Then NAVIGATE: dawn appointments (market women seen + trading by 8!) · drug-food syncing (take-with-food + parcel where possible!) · transport funds/routes (nearest CHPS refills! group transport!) · NHIS renewal HELP (desk walk, not 'go renew'!) · referral LETTERS (social welfare! disability funds! NGOs!) · community LINKS (churches! queen mothers! TBAs-as-partners!). Small navigations, HUGE adherence: 'default rate fell when clinic opened 6am' is QI gold (INF/PRO-II!). <strong>GENDER lens</strong>: women decide-LAST, pay-LAST, eat-LAST — involve husbands KINDLY ('her health feeds the family — let's plan together!') + empower ('mama, YOUR drugs first!') + screen ABUSE privately (bruises? fear? control? — PRO-I safeguarding!). Girl-children: school KEPT = health WON — counsel fees-vs-future with parents ('educated daughters earn + space babies + survive birth!'). Document SDH + actions (INF!) — 'transport cost discussed, CHPS refill arranged' defends and continues care.",
          ],
        },
        {
          type: "table",
          heading: "SDH navigation",
          columns: ["Barrier found", "Nurse navigates", "Result"],
          rows: [
            ["Transport 40 cedis/visit", "CHPS refills + grouped reviews", "Kept appointments"],
            ["Drugs need food, none", "Food parcel + take-with-meal plan", "Tolerated treatment"],
            ["Market dawn-to-dusk", "6am clinic + fast-track lane", "No income lost, kept care"],
            ["NHIS lapsed, broke", "Desk-walk renewal + fee waiver letter", "Covered bills"],
            ["Husband decides, absent", "Phone loop + evening meeting", "Consented, supported"],
            ["Unsafe home, fearful", "Private screen + referral + safety plan", "Protected + followed"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Blame is the barrier",
          body: "'Defaulter', 'non-compliant', 'difficult', 'ignorant' — labels that end thinking and start punishment. Replace with curiosity: 'what blocked her?' Map the rainbow, screen the eight, navigate one gap. The nurse who asks 'how much is transport?' before 'why did you miss?' converts defaulters into attenders — and judgment into care.",
        },
      ],
      keyPoints: [
        "Rainbow 5: fixed → lifestyle → community → living → structural; nurse acts all.",
        "Gradient: every rung down = sicker; name Ghana gradients; blame never.",
        "Screen 8: money, food, housing, work, transport, school, safety, NHIS/support.",
        "Navigate: dawn clinics + CHPS refills + NHIS help + referrals + community links.",
        "Gender: decide/pay/eat-last — involve kindly + empower + abuse-screen private.",
        "Document SDH + navigation; default = poverty until proven otherwise.",
      ],
      quiz: {
        keywords: ["SDH", "rainbow", "Dahlgren-Whitehead", "gradient", "Marmot", "inequality", "poverty", "NHIS", "transport", "gender", "navigate", "screen", "defaulter", "adherence", "housing"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "family-systems-and-health-beliefs",
      title: "Family systems and health beliefs",
      minutes: 18,
      objectives: [
        "Apply systems theory.",
        "Draw + read genograms.",
        "Meet Ghana's deciders.",
        "Negotiate beliefs + faith.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Systems + genograms",
          paragraphs: [
            "<strong>SYSTEMS THEORY</strong>: family = SYSTEM — one member ill → roles SHIFT (daughter cooks, son pays, wife decides!) → boundaries FLEX (grandmother moves in!) → beliefs RULE ('asram, not malaria — herbs first!') → emotions RIPPLE (fear, blame, exhaustion!). Nurse the SYSTEM: who does WHAT now? who DECIDES? who's BREAKING? (M03 carers!). Systems resist change — engage, don't command ('help me understand how decisions are made here…'). <strong>GENOGRAM</strong> (draw it — exam skill!): 3 GENERATIONS mapped — squares (male) / circles (female), ages, illnesses, deaths (cause + age!), who lives WHERE, closeness LINES (thick = close, thin = distant, jagged = conflict, broken = cut-off!). 5 minutes, whole system visible: hereditary patterns (HTN down the line!), carer load (one daughter, three dependents!), conflict blocks ('uncle decides but feuds with mother' — meet SEPARATELY then together!). Chronic + genetic + mental-health cases REQUIRE genograms; draw + FILE + update. <strong>GHANA FAMILIES</strong>: extended + COMPOUND living · matrilineal (Ashanti UNCLE decides for sisters' children!)/patrilineal lines — know WHO decides BEFORE consent talks! · polygamous + single + CHILD-HEADED (AIDS/accidents!) · FOSTERING (nephews raised as sons — 'mother' may be auntie!). NEVER assume nuclear — ASK ('who is family here…? who decides about operations…?'). Respect hierarchy: greet elders, seat them, hear them — then ensure the PATIENT's voice survives the meeting (PRO-I autonomy!).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-BEH-0008.svg",
          alt: "Five boxes system genogram meetings Kleinman negotiate. Systems theory roles boundaries beliefs plus nurse-system questions. Genogram symbols generations lines plus exam practise. Ghana families extended matrilineal polygamous fostering plus ask-who. Family meetings gather story options decision document plus discuss-husband process. Beliefs list plus negotiate formula. Faith pray pastors fasting dying. Mantra quoted.",
          caption: "Map the system, meet the deciders, negotiate the beliefs.",
        },
        {
          type: "text",
          heading: "Meetings + beliefs + faith",
          paragraphs: [
            "<strong>FAMILY MEETINGS</strong> (consent lives here!): gather DECIDERS (not crowds — 'who must agree…?') · ONE story, plain words (no 'metastatic' — 'spread'!) · Kleinman beliefs HEARD first ('what do you call this…?') · options + COSTS honest ('operation 2,000, drugs monthly…') · decision + DATE ('tell me Thursday — I'll call Wednesday!') · DOCUMENT who agreed what. 'Let me discuss with my husband' = PROCESS, not refusal — schedule the return + phone loop! <strong>BELIEFS → BEHAVIOUR</strong> (negotiate EACH — NUT/COM method!): asram + teething remedies · 'cold' foods forbidden in illness · blood fears ('donation drains life!' — show regeneration!) · CS = failure myths ('real women push!' — reframe: 'wise mothers choose safe!') · mental illness = spirits/curses · vaccines = infertility plots. Formula: respect + Kleinman + hospital-AND-tradition where SAFE ('drip + prayer together!') + kindly FIRM where unsafe ('concoction + chemo clash — pause herbs, keep prayers!') + elder/pastor ALLIES (convert gatekeepers to champions!). <strong>FAITH</strong>: pray WITH consent ('shall we pray before theatre?') · pastors/imams/priests WELCOMED (visiting flexed!) · fasting + drug schedules NEGOTIATED (dawn/dusk dosing!) · dying rituals ROOMED (wailing, washing, prayers — GER M6!). Faith + medicine, NEVER versus ('God guides the surgeon's hands!'). Document beliefs + negotiations + allies — the next nurse continues, not restarts.",
          ],
        },
        {
          type: "table",
          heading: "Belief negotiations",
          columns: ["Belief heard", "Honour", "Negotiate"],
          rows: [
            ["'Asram — herbs first'", "Name respected; herbs asked", "Drip + ORS now; safe herbs alongside"],
            ["'Donation drains life'", "Fear validated; body explained", "Show regeneration; elder donor models"],
            ["'CS means failure'", "'Wise mothers choose safe'", "Doctor + midwife + pastor joint counsel"],
            ["'Madness is spirits'", "Prayer welcomed; pastor looped", "Drugs + prayer together; chaining refused"],
            ["'Vaccines sterilise'", "Concern heard; rumour traced", "Queen mother + nurse joint demo + records"],
            ["Fasting vs drugs", "Fast honoured", "Dawn/dusk dosing; exemptions taught"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Genogram week",
          body: "This week: draw genograms for THREE chronic/complex patients — 3 generations, illnesses, closeness lines, deciders starred. Show one to its family ('did I get this right?') and watch hidden carers, feuds and fears surface. Five minutes of mapping saves weeks of misunderstanding. Systems seen are systems nursed.",
        },
      ],
      keyPoints: [
        "Systems: one ill → roles/boundaries/beliefs shift — nurse who/what/decides/breaking.",
        "Genograms: 3 gens + illnesses + closeness + deciders; chronic/genetic/mental-health required.",
        "Ghana: extended, matri/patrilineal, polygamous, child-headed, fostering — ASK who.",
        "Meetings: deciders + one story + beliefs + honest costs + date + document.",
        "Negotiate: respect + Kleinman + hospital-AND-tradition + firm-unsafe + allies.",
        "Faith: pray-with + welcome clergy + schedule fasting + room rituals — never versus.",
      ],
      quiz: {
        keywords: ["family", "systems", "genogram", "matrilineal", "extended", "deciders", "meetings", "beliefs", "negotiate", "asram", "faith", "pastor", "fasting", "rituals", "consent"],
        categories: ["fundamentals"],
      },
    },
  ],
};
