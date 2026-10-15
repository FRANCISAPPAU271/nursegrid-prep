import type { CourseModule } from "../types";

export const foodSafetyAndCommunityNutrition: CourseModule = {
  slug: "food-safety-and-community-nutrition",
  title: "Food safety and community nutrition",
  summary:
    "Safe food, fed villages: WHO's 5 keys with danger-zone discipline, foodborne hits from staph to aflatoxin, outbreak trace-and-fix, vendor/chop-bar counsel and hospital kitchens — then the CWC engine, seasonal hungry-month planning, home gardens and monthly cooking demos, schools/markets/mosques outreach, records-into-action with kindly defaulter tracing, and partner convening.",
  lessons: [
    {
      slug: "food-safety-and-hygiene",
      title: "Food safety and hygiene",
      minutes: 20,
      objectives: [
        "Apply WHO's 5 keys everywhere.",
        "Respect the danger zone clock.",
        "Respond to outbreaks systematically.",
        "Counsel vendors and audit kitchens.",
      ],
      blocks: [
        {
          type: "text",
          heading: "5 keys, zero exceptions",
          paragraphs: [
            "<strong>1. CLEAN</strong> — hands (soap, 20 s, before/during/after), surfaces, utensils, SAFE water; wash veg/fruit well · <strong>2. SEPARATE</strong> — raw meat/fish AWAY from cooked/ready (boards, knives, bowls differ; fridge: raw below!) · <strong>3. COOK</strong> — thoroughly (70°C+, juices clear, no pink poultry) · <strong>4. CHILL</strong> — cool fast + fridge <5°C (>2 hours out = SUSPECT; no fridge? cook fresh, eat promptly!) · <strong>5. SAFE RAW</strong> — safe water + pasteurised milk + washed fruit + checked dates. <strong>DANGER ZONE 5–60°C</strong>: germs double ~20 minutes — cooked food out >2 h (1 h in heat!) gets reheated steaming ONCE or DISCARDED; cool fast (shallow pans, stir); leftovers dated + 2-day rule; baby food FRESH each feed (M03!). Flies = faeces couriers — cover ALL food, always. Teach 5 keys at EVERY diarrhoea case + ANC + CWC + ward discharge (PRO-II M02 pearls!) — repetition mothers remember beats lectures mothers miss.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-NUT-0011.svg",
          alt: "Five key panels: clean, separate, cook, chill, safe-raw. Danger zone 5-60C with 2-hour rule, fast cooling, leftovers dating, baby-food fresh, flies warning. Foodborne hits: staph, typhoid, cholera, hepatitis, worms, aflatoxin. Outbreak chain: treat trace notify fix document. Vendor checks: fitness handwash covered water waste toilets counsel. Hospital kitchens: keys labels allergens audits. Water chain: source carry store serve.",
          caption: "Clean, separate, cook, chill, safe-raw — 2 hours out, reheat once or out.",
        },
        {
          type: "text",
          heading: "Hits, outbreaks, vendors, kitchens",
          paragraphs: [
            "<strong>HITS</strong>: feast diarrhoea/vomiting in hours (staph/B. cereus preformed toxins!) · typhoid (fever + headache + rose spots — water/food + carriers; vaccinate + treat + trace!) · cholera (rice-water + shock — ORS + antibiotics per protocol + REFER FAST + notify!) · hepatitis A/E (jaundice + dark urine — water + hygiene!) · worms (soil + raw veg + bare feet — deworm + WASH + footwear!) · <strong>aflatoxin</strong> (mouldy groundnut/maize — LIVER CANCER: dry + sort + DISCARD mouldy, never 'cut off and eat'!). <strong>OUTBREAKS</strong>: treat + TRACE (common meal? vendor? water? — case histories!) + NOTIFY (disease control — cholera/typhoid = IDSR!) + FIX source (vendor pause + chlorinate + community alert) + document + follow-up — nurses detect clusters at OPD triage (three diarrhoeas from one funeral? ACT!). <strong>VENDORS</strong>: medical fitness + handwash + hair covered + clean water + covered food + binned waste + toilets + no sick-handler cooking — COUNSEL not only punish ('covered + fresh + hot = customers + health') + liaise environmental health. <strong>HOSPITAL kitchens</strong>: 5 keys + therapeutic diets LABELLED + allergens flagged (M04!) + immunocompromised extra-care + audits (temp-logs + swabs + training — PRO-II M4).",
          ],
        },
        {
          type: "text",
          heading: "Water chain + counsel moments",
          paragraphs: [
            "<strong>WATER</strong>: boiled/filtered/chlorinated where unsafe; stored COVERED + narrow-neck + tap (dipping cups contaminate!); sachet/bottled FDA-checked. 'Water chain' at every diarrhoea case: SOURCE → CARRY → STORE → SERVE — germs enter EVERY unguarded link (clean borehole + dirty jerrycan + open pot + dipped cup = diarrhoea delivered). Counsel moments: diarrhoea OPD (ORS + zinc + keys + chain — M03!), ANC (pregnancy avoids — M03), CWC (complementary hygiene — M03), discharge (wound + food + water), funerals/festivals (bulk-cooking keys: cook fresh, serve hot, cover, discard leftovers!). Document counsel + demos + teach-back (PRO-I M5); log outbreak detects as CPD + QI (PRO-II M4: cluster spotted → traced → fixed = portfolio gold). Safe food is nursing's quietest lifesaver — no drama, just absent diarrhoea.",
          ],
        },
        {
          type: "table",
          heading: "Food scares: respond right",
          columns: ["Scare", "Likely cause", "Response"],
          rows: [
            ["20 vomit 4 h after wedding jollof", "Staph/B. cereus (kept warm hours)", "Rehydrate + trace caterer + keys counsel + notify"],
            ["Family fever + headache ×2 weeks", "Typhoid (water/carrier)", "Test + treat + water fix + carrier hunt + vaccinate contacts"],
            ["Rice-water stools, shock, riverside", "CHOLERA — emergency", "ORS/IV + antibiotics + URGENT refer + notify + chlorinate + alert"],
            ["Child worms + anaemia + barefoot", "Soil-transmitted + diet", "Deworm + iron + footwear + WASH + review (M01 trio!)"],
            ["Mouldy groundnut paste, daily use", "Aflatoxin risk", "Discard + dry/sort teaching + liver counsel + follow"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Aflatoxin: the invisible liver-killer",
          body: "Mouldy groundnuts and maize carry aflatoxins — potent liver carcinogens + growth-stunting + immune-harming, tasteless and heat-stable (cooking does NOT destroy!). Counsel: dry crops FAST + raised (not bare ground!), sort + DISCARD mouldy/discoloured kernels (never 'cut off and eat', never feed to children 'because poor'), store dry + ventilated + pest-proof, buy from dry sorters. Nurses: ask about storage at CWC/ANC, demo sorting, link agric extension (M06 partners). 'Manage' mould by removal — the cheapest cancer prevention in the village.",
        },
      ],
      keyPoints: [
        "5 keys: clean, separate, cook 70°C+, chill <5°C, safe raw — taught at every diarrhoea/ANC/CWC.",
        "Danger zone 5–60°C: >2 h suspect; reheat ONCE steaming or discard; baby food fresh.",
        "Hits: staph hours, typhoid fever, cholera rice-water emergency, hep A/E, worms, AFLATOXIN.",
        "Outbreaks: treat + trace + notify (IDSR) + fix source + document; nurses detect clusters.",
        "Vendors counselled + checked; hospital kitchens labelled + audited; water chain guarded.",
        "Document counsel/demos; log detects as CPD/QI; funerals need bulk-cooking keys.",
      ],
      quiz: {
        keywords: ["food safety", "5 keys", "danger zone", "diarrhoea", "typhoid", "cholera", "IDSR", "aflatoxin", "vendors", "water chain", "ORS", "outbreak", "hygiene", "leftovers", "notify"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "community-nutrition-in-action",
      title: "Community nutrition in action",
      minutes: 20,
      objectives: [
        "Run the monthly CWC engine.",
        "Plan seasonal hungry months.",
        "Demo gardens, koko and ORS.",
        "Turn records into traced action.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The CWC engine + seasonal plans",
          paragraphs: [
            "MONTHLY, every under-5: weigh + PLOT + counsel (M02!) + vaccines + vitamin A + deworm + IYCF demo + sick-child triage + defaulters listed + pregnant/lactating counselled. Fast queues + kind words + charts handed over = RETENTION ('weighing day is village health day' — drum, mobilise, celebrate gains!). <strong>SEASONAL CALENDAR</strong>: HARVEST (store dry + raised + pest-proof! + sell surplus smart + save seeds) → LEAN/hungry months (stored grains + dried fish + groundnut + GARDEN greens + SCREEN MORE — MUAC sweeps!) → RAINS/malaria (nets + test/treat + diarrhoea WASH + growth watch — illness flattens curves!). Plan WITH chiefs/assembly (mobilise!) + agric extension (seeds/storage!) — nurses convene (PRO-II M5 ladder: community data → district forums → action!). Hungry-season admissions audited yearly (PRO-II M4: what predicted? what prevented? — next year's plan).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-NUT-0012.svg",
          alt: "CWC engine: monthly package with retention recipe. Seasonal calendar: harvest store, lean screen-more, rains malaria-watch. Home gardens: kontomire moringa orange-potato pawpaw beans plus demo plots seeds poultry. Cooking demos monthly: koko leaching ORS rainbow with mothers-cook teach-back family. Schools: feeding verify deworm gardens lessons. Markets worship: salt MUAC drama pop-ups. Records: registers DHIMS trace kindly review monthly. Partners: chiefs agric environmental welfare NGOs TBAs.",
          caption: "Weigh monthly, demo always, trace kindly — gardens grow vitamins home.",
        },
        {
          type: "text",
          heading: "Gardens, demos, schools, markets",
          paragraphs: [
            "<strong>HOME GARDENS</strong> (vitamins at the doorstep): kontomire + moringa + orange sweet potato + pawpaw + pepper + beans — demo plots at CHPS/schools/churches, seeds shared, harvest taught (pick + cook SAME day!); poultry/rabbits/fishponds where apt (protein + income). <strong>COOKING DEMOS monthly</strong>: enriched koko (M03!) + leaching (M04!) + ORS (M03!) + rainbow stews + complementary bowls — mothers COOK (not watch!), taste, take recipe cards, teach-back; grandmothers + fathers invited. <strong>SCHOOLS</strong>: feeding enrolled + VERIFY eating (not selling/sharing away!) + deworm + vision + gardens + WASH + rainbow lessons drawn. <strong>MARKETS/MOSQUES/CHURCHES</strong>: salt checks ('show me your salt!'), MUAC screening days, drama/songs, weighing + counsel pop-ups — go where people gather; nurses visible = nurses trusted. Every outreach: registers + counsel + referrals + follow-up dated.",
          ],
        },
        {
          type: "text",
          heading: "Records → traced action + partners",
          paragraphs: [
            "Registers COMPLETE + DHIMS entered + defaulters TRACED (home visit with kindness — 'we missed you, is baby well?' — never scolding!) + data REVIEWED monthly (coverage? SAM finds? faltering? anaemia? — act on gaps, PRO-II M4; data cooked = children missed — PRO-II M5 warning!). <strong>PARTNERS</strong>: chiefs/assembly (mobilise + land + bylaws!) + agric extension (seeds/storage/poultry!) + environmental health (vendors/water!) + welfare (LEAP/vulnerable!) + NGOs (supplies/training!) + TBAs (ANC allies — M03!) — nurses CONVENE quarterly nutrition huddles (data shared + roles + dates). Document outreaches + demos + traces (PRO-I M5); log community projects as CPD + QI + portfolio (PRO-I M7/PRO-II M4: 'MUAC sweeps found 12 SAM — all graduated' = crown jewels). Community nutrition is nursing beyond walls — villages fed where nurses walk.",
          ],
        },
        {
          type: "table",
          heading: "Outreach year: rhythm that feeds",
          columns: ["When", "Action", "With whom"],
          rows: [
            ["Monthly", "CWC + demos + defaulters + ANC counsel", "CHPS team + TBAs + mothers' groups"],
            ["Pre-harvest", "Storage teaching + MUAC sweep + stocks check", "Chiefs + agric + assembly"],
            ["Campaigns", "Vitamin A + deworm + nets + vaccines mobilised", "District + volunteers + criers + schools"],
            [" termly", "School feeding verify + deworm + gardens + lessons", "Teachers + cooks + PTA + pupils"],
            ["Monthly review", "Data huddle: coverage, finds, deaths, fixes + dates", "All partners + DHMT feedback up"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Trace kindly, retain forever",
          body: "Defaulters fear scolding more than disease — so trace with love: 'Auntie, we missed Kofi — is he well? Can I help?' Listen (transport? money? rudeness? migration? illness? death?), solve (outreach nearer? costs explained? apology offered?), rebook (dated + reminded), follow (CHV check). Track tracing outcomes (found/well/sick/moved/dead — audit deaths!). Retained defaulters become mobilisers ('nurses came to MY house!') — kindness compounds into coverage. Log tracing stories (de-identified) as CPD reflections — community nursing's heart, filed.",
        },
      ],
      keyPoints: [
        "CWC monthly: weigh/plot/counsel/vaccines/A/deworm/demo/triage/trace — retention via kindness + speed.",
        "Seasonal: harvest stores + lean screens + rains malaria-watch; plan with chiefs + agric.",
        "Gardens at doorsteps + demos monthly (mothers cook!) + schools verified + markets reached.",
        "Records complete + DHIMS + monthly data huddles; cooked data = missed children.",
        "Defaulters traced kindly + solved + rebooked; retained families mobilise others.",
        "Partners convened quarterly; outreaches logged as CPD/QI/portfolio crowns.",
      ],
      quiz: {
        keywords: ["CWC", "outreach", "defaulters", "seasonal", "hungry season", "gardens", "demos", "koko", "school feeding", "DHIMS", "tracing", "partners", "chiefs", "campaigns", "retention"],
        categories: ["fundamentals"],
      },
    },
  ],
};
