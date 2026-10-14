import type { CourseModule } from "../types";

export const ghanaianTraditionalMedicine: CourseModule = {
  slug: "ghanaian-traditional-medicine",
  title: "Ghanaian traditional medicine",
  summary:
    "The healers next door: herbalists, TBAs, bone-setters and spiritualists with partnership scripts, referral etiquette and documentation — then eight remedies to know by name, preparations and doses, beliefs around them, and the routine herb ask.",
  lessons: [
    {
      slug: "healers-and-their-crafts",
      title: "Healers and their crafts",
      minutes: 18,
      objectives: [
        "Describe 4 healer crafts.",
        "Partner TBAs + bone-setters.",
        "Coordinate spiritualists safely.",
        "Refer both ways + document.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Four crafts",
          paragraphs: [
            "<strong>HERBALISTS</strong> (biggest group!): diagnose by history + observation + sometimes spiritual insight; treat with leaves, barks, roots — decoctions (boiled!), infusions, poultices, enemas, baths, powders. Strengths: NEAR + AFFORDABLE + TRUSTED + TIME-RICH (hour-long consults vs 3-minute OPD!). Partner: GREET respectfully, ask formulas WITHOUT stealing ('what's in it, so I check safety with her drugs…?'), safety-check (M03!), REFER both ways ('fever 3 days despite herbs? hospital too — I'll call ahead!'). Many are TMPC-registered, skilled, proud — treat as COLLEAGUES. <strong>TBAs</strong>: first call for labour — near, kind, cheap, rituals honoured. Partner, DON'T war: TRAIN (clean delivery! danger signs! newborn care!), equip (gloves! blades! cord ties!), give REFERRAL SLIPS + transport plans + phone numbers, PRAISE every referral ('you saved two lives today — the bleeding stopped because you sent early!'). Shamed TBAs HIDE complications; honoured ones PHONE early. <strong>BONE-SETTERS</strong>: palpate + pull + splint (sticks! bandages! herbal paste!). Good at closed simple fractures + sprains. DANGERS: TIGHT splints (gangrene! Volkmann's contracture — dead hands from bound arms!), open fractures, joints, spine, numb/pale/cold limbs. Teach: looseness checks + finger-wiggles + REFER list (open? numb? pale? no pulse? — hospital TODAY!) + gangrene watch. Workshops CONVERT disasters into partnerships. <strong>SPIRITUALISTS/PASTORS</strong>: 'spiritual' illness (madness! infertility! bad luck! Mizpah!), prayer camps, fasting, deliverance, holy water/oils. Coordinate: pray AND prescribe ('God guides the drip!') · chaining/beating/starving REFUSED + REPORTED (Mental Health Act! BEH M06!) · fasting + drug schedules NEGOTIATED (dawn/dusk dosing!) · detention negotiated OUT ('treat here, pray here too — pastor welcome!').",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-TCM-0003.svg",
          alt: "Four healer boxes herbalist TBA bone-setter spiritualist with partnership notes. Herbalist craft plus strengths plus both-ways referral. TBA training slips praise alliance. Bone-setter skills plus gangrene dangers plus refer list. Spiritualist coordination plus chaining refusal plus detention negotiation. Referral etiquette slips phone feedback. Documentation example. Cross-course links. Mantra quoted.",
          caption: "Greet, learn, safety-check, refer both ways, thank.",
        },
        {
          type: "text",
          heading: "Referral etiquette",
          paragraphs: [
            "Two-way respect = two-way referrals. <strong>SENDING</strong> (you → healer): when? stable chronic + patient preference + registered healer + safety-checked ('hypertension controlled — massage + prayer welcome alongside drugs!'). How? EXPLAIN ('I'm looping in your herbalist — here's what to avoid with her drugs…'), write a NOTE ('on amlodipine — avoid strong BP herbs + alcohol bitters'), phone if possible, DOCUMENT. <strong>RECEIVING</strong> (healer → you): welcome WARMLY ('thank you for sending early — you saved her!'), treat promptly, FEED BACK ('baby fine — bleeding stopped — your call mattered!'), exchange NAMES + NUMBERS, invite to trainings. Nothing builds referral chains like GRATITUDE; nothing kills them like contempt ('what took you so long?!' — said once, remembered for years). <strong>DOCUMENT</strong> (INF!): healer consulted + treatment given + coordination + referrals + follow-up ('Herbalist Kofi: neem decoction 3 days — advised continue + ORS + return if fever persists/vomiting/blood'). Exam: 'TBA brings bleeding mother, 2 days labour' — thank + resuscitate + NO scolding + debrief + strengthen slips. 'Bone-setter splint, cold hand' — remove + assess + treat + teach + workshop invite. Partnership scripts score; war scripts fail.",
          ],
        },
        {
          type: "table",
          heading: "Partnership scripts",
          columns: ["Moment", "Say this", "Never this"],
          rows: [
            ["TBA refers early", "'You saved two lives — thank you!'", "'What took you so long?!'"],
            ["Herbalist formula asked", "'What's in it, so I check safety…?'", "'Stop all that nonsense!'"],
            ["Tight splint, cold hand", "Remove + treat + teach + invite", "Scold + shame + confiscate"],
            ["Prayer camp detention", "'Treat here, pray here too!'", "Raid alone; mock faith"],
            ["Stable + registered healer", "Loop in + note + document", "Forbid all contact"],
            ["Feedback to healer", "'Baby fine — your call mattered!'", "Silence; next referral dies"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Map your healers",
          body: "This week: list the healers near your facility — names, crafts, TMPC status, phone numbers. Visit ONE: greet, learn, exchange numbers, explain referrals. That single visit builds the bridge your pluralist patients cross daily. Nurses who know healers by name negotiate cures; nurses who don't, negotiate blind.",
        },
      ],
      keyPoints: [
        "Herbalists: near + trusted + time-rich — greet + ask formulas + safety-check + refer both ways.",
        "TBAs: train + equip + slips + transport + PRAISE referrals; shamed TBAs hide.",
        "Bone-setters: praise simple; tight splints gangrene — looseness + refer list + workshops.",
        "Spiritualists: pray-AND-prescribe; chaining refused + reported; detention negotiated out.",
        "Etiquette: slips + phone + gratitude + feedback + names exchanged; contempt kills chains.",
        "Document healer + treatment + coordination + referrals; partnership scripts score.",
      ],
      quiz: {
        keywords: ["herbalists", "TBAs", "bone-setters", "spiritualists", "referral", "partnership", "gangrene", "splints", "chaining", "gratitude", "etiquette", "map", "TMPC", "document", "slips"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "remedies-and-beliefs",
      title: "Remedies and beliefs",
      minutes: 18,
      objectives: [
        "Name 8 remedies + cautions.",
        "Describe preparations + doses.",
        "Kleinman remedy beliefs.",
        "Run the routine herb ask.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Eight remedies",
          paragraphs: [
            "Know by NAME (exam + ward — patients light up when nurses know!): <strong>NEEM</strong> (dogonyaro) — fever baths, skin sores, 'malaria' brews; BITTER; liver watch in heavy use. <strong>MORINGA</strong> — food-medicine: leaves/pods/soups, anaemia + nutrition talk, GENTLE (NUT loves it!). <strong>PREKESE</strong> (aidan fruit) — soups, POSTPARTUM care, BP + 'cleansing' claims. <strong>BITTER LEAF</strong> (onugbu) — 'SUGAR' remedy — HYPO DANGER with diabetic drugs (M03!). <strong>GINGER</strong> — nausea, colds, circulation — BLEED caution (surgery! anticoagulants!). <strong>GARLIC</strong> — BP, 'cleans blood' — BLEED caution too. <strong>ALOE</strong> — burns + skin (good!) — gut CRAMPS + electrolytes if drunk. <strong>ASRAM MIXES</strong> — teething/herb blends — ASK CONTENTS (some hide ALCOHOL! lead! sedatives! — M03!). <strong>PREPARATIONS</strong>: decoctions (BOILED — strength varies wildly!) · infusions (steeped) · poultices (skin — burns? allergies?) · ENEMAS (frequent — ask! dehydrate infants!) · baths (fever/skin/ritual) · powders (dose? contaminants?) · ALCOHOL bitters (pregnancy! children! liver! — FLAG!). Dose unknown = risk unknown — 'a cup twice daily of WHAT strength?' matters. <strong>BELIEFS around them</strong> (Kleinman each! BEH!): 'bitter CURES' (stronger = better? — overdose logic!) · 'natural = SAFE' (deadliest myth — M03 opens with it!) · 'purging CLEANSES' (diarrhoea = healing? — dehydrates babies!) · 'teething causes ALL' (asram delays MALARIA care!) · 'hospital + herbs ALWAYS clash' (some do, most NEGOTIABLE — M05!).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-TCM-0004.svg",
          alt: "Eight remedy boxes neem moringa prekese bitter-leaf ginger garlic aloe asram with cautions. Eight remedies with uses and warnings. Preparations seven with dose-unknown rule. Beliefs five with Kleinman note. Routine herb ask six questions. Respect-verify formula. Cross-course links. Mantra quoted.",
          caption: "Name it, dose it, ask alcohol, check pregnancy, follow it.",
        },
        {
          type: "text",
          heading: "Routine herb ask",
          paragraphs: [
            "Ask EVERY history, warmly, no eyebrow: 'which HERBS…? how PREPARED (boiled? alcohol? enema? bath?)…? how MUCH, how OFTEN…? ALCOHOL in it…? who GAVE it (herbalist? market? neighbour?)…? since WHEN…? any REACTION (rash? vomiting? bleeding? dizziness?)…?' Then RESPECT + VERIFY: honour the knowledge ('neem baths soothe fever — let's add ORS + watch the temperature together!') + verify safety (pregnant? bleeding risk? liver? surgery soon? — M03!) + arrange FOLLOW-UP ('bring the mixture Thursday — we'll check it together!'). Document ALL (M05!): name + prep + dose + source + reactions + advice. <strong>Exam favourites</strong>: 'name 3 Ghanaian herbs + uses + cautions' (neem/moringa/bitter leaf + lines each!). 'Enema for febrile infant?' — ask + examine dehydration + ORS + malaria test + counsel dangers kindly. 'Alcohol bitters in pregnancy?' — flag + explain + negotiate alternatives (ginger tea? prayer? rest!) + document. 'Bitter leaf + glibenclamide, sweating?' — HYPO! (M03!) — treat + teach + separate/adjust. Remedies known by name convert nurses from scolders to consultants — and consulted nurses get TOLD the truth.",
          ],
        },
        {
          type: "table",
          heading: "Remedy consults",
          columns: ["Patient uses", "Honour", "Verify"],
          rows: [
            ["Neem fever baths", "Soothing + cultural sense", "Add ORS + malaria test + temp watch"],
            ["Moringa soups, anaemic", "Nutrition praise!", "Add iron + deworm + Hb check"],
            ["Bitter leaf + diabetic drugs", "Sugar concern shared", "HYPO teach + BGL log + separate?"],
            ["Alcohol bitters, pregnant", "Symptom relief wish", "Flag foetal risk + alternatives + doc"],
            ["Asram mix, teething 9-mo", "Comfort wish", "Contents? alcohol? malaria ruled out?"],
            ["Garlic + warfarin", "'Cleans blood' wish", "BLEED teach + INR + dose talk"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Herb log week",
          body: "This week: log every herb/mixture patients mention — name, preparation, dose, source, reason. Ten entries minimum. You will collect a personal pharmacopoeia of YOUR community's medicine — and next month's counselling will quote it back ('the prekese for BP plus your amlodipine — let's watch dizziness together!'). Known-by-name nurses get told the truth.",
        },
      ],
      keyPoints: [
        "8 remedies: neem + moringa + prekese + bitter leaf + ginger + garlic + aloe + asram — uses + cautions.",
        "Preps: decoctions/infusions/poultices/ENEMAS/baths/powders/bitters — dose unknown = risk unknown.",
        "Beliefs: bitter-cures + natural-safe + purging + teething-all + clash-always — Kleinman each.",
        "Ask: which? prep? dose? alcohol? source? since? reactions? — warmly, eyebrow never.",
        "Respect + verify: honour knowledge + check pregnancy/bleed/liver/surgery + follow-up.",
        "Log a personal pharmacopoeia; known-by-name nurses get told truth.",
      ],
      quiz: {
        keywords: ["neem", "moringa", "prekese", "bitter leaf", "ginger", "garlic", "aloe", "asram", "decoctions", "enemas", "bitters", "alcohol", "beliefs", "dose", "log"],
        categories: ["fundamentals"],
      },
    },
  ],
};
