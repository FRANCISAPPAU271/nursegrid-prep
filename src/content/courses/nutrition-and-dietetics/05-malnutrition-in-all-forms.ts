import type { CourseModule } from "../types";

export const malnutritionInAllForms: CourseModule = {
  slug: "malnutrition-in-all-forms",
  title: "Malnutrition in all forms",
  summary:
    "Too little to too much: marasmus versus kwashiorkor with OTP/inpatient triage, WHO's 10 SAM steps from warm-and-sugar to love-and-discharge, killer errors and death audits — then hidden-hunger blitzes (A, iron, iodine, zinc), stigma-free obesity care with 5–10% goals and grow-into-weight children, re-feeding syndrome protocol, double-burden kitchens, and kindly eating-disorder screening.",
  lessons: [
    {
      slug: "undernutrition-and-sam",
      title: "Undernutrition and SAM",
      minutes: 20,
      objectives: [
        "Separate marasmus, kwashiorkor and MAM.",
        "Triage OTP versus inpatient correctly.",
        "Run WHO's 10 SAM steps in order.",
        "Avoid killer errors and audit deaths.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Faces of hunger",
          paragraphs: [
            "<strong>MARASMUS</strong>: severe WASTING — matchstick limbs, old-man face, alert + HUNGRY, MUAC <11.5 / WFH <−3, NO oedema (energy starvation). <strong>KWASHIORKOR</strong>: OEDEMA + misery — puffy feet/face, flaky-paint skin, reddish straight hair, irritable + ANOREXIC, fatty liver (protein + antioxidant story) — oedema = SAM at ANY weight/MUAC (M02's overrule!). <strong>MARASMIC-KWASH</strong>: wasted + oedematous (worst prognosis — handle gentlest). <strong>MAM</strong>: MUAC 11.5–12.5 / WFH −3 to −2, no oedema, appetite OK — counsel + fortify + follow + SFP where available; catch BEFORE SAM. <strong>TRIAGE</strong>: appetite test (eats RUTF eagerly!) + alert + no complications/oedema+++ → OTP (RUTF home + antibiotics + weekly review); NO appetite / oedema+++ / danger signs (drowsy, shock, severe anaemia, pneumonia, dehydration, hypothermia) → INPATIENT stabilise (10 steps). Appetite = the great divider: eating eagerly heals at home; refusing needs the ward.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-NUT-0009.svg",
          alt: "Three triage panels: marasmus wasting hungry no-oedema, kwashiorkor oedema miserable anorexic, OTP versus inpatient appetite divider. Ten WHO steps: sugar, warmth, ReSoMal, electrolytes no-iron-yet, infection assumed, micros, F75 cautious, F100 catch-up, love play, discharge prep. Killer errors: fast IV, early iron, day-1 feasts, missed cold-sugar, excluded mothers. OTP flow, MAM catch, discharge criteria, death audits, mother kindness.",
          caption: "Appetite divides, warmth and sugar stabilise, F75 starts — mothers partnered always.",
        },
        {
          type: "text",
          heading: "10 steps in order",
          paragraphs: [
            "STABILISE (days 1–7): <strong>1. Hypoglycaemia</strong> — feed/sugar NOW (drowsy? test + treat + 2-hourly feeds; cold + drowsy = sugar + warmth together!) · <strong>2. Hypothermia</strong> — warm (skin-to-skin, blankets, hat, warm room — cold kills quietly; check ROUTINELY!) · <strong>3. Dehydration</strong> — ReSoMal SLOWLY by mouth/NG (standard IV/ORS overloads failing hearts — shock fluids only per SAM protocol!) · <strong>4. Electrolytes</strong> — K+/Mg via ReSoMal + food, NO IRON YET (feeds infection!) · <strong>5. Infection</strong> — ASSUME + treat (antibiotics per protocol; malaria test/treat; TB/HIV hunt; fever often ABSENT — hypothermia IS the fever!) · <strong>6. Micronutrients</strong> — A, zinc, folate, multivit (iron LATER with catch-up). REHABILITATE: <strong>7. Cautious feeds</strong> — F75 small-frequent (stabilise, NOT fatten) · <strong>8. Catch-up</strong> — F100/RUTF generous (appetite returns = recovering!) · <strong>9. Love + play</strong> — tender care, mother present, toys, stimulation (brains rebuild with bodies) · <strong>10. Discharge prep</strong> — mother trained (feeds, hygiene, vaccines, danger signs), OTP/RUTF + dated reviews till recovered.",
          ],
        },
        {
          type: "text",
          heading: "Killers, OTP, audits",
          paragraphs: [
            "<strong>KILLERS</strong>: IV fluids fast (heart failure — SAM hearts are tiny + weak!) · iron early (bacterial feast) · high-protein day-1 feasts (re-feed — next lesson!) · missed hypo/hypothermia (check every contact!) · mother excluded (she feeds, warms, watches — PARTNER never visitor; blame starves return). <strong>OTP</strong>: RUTF home (hygienic, no water/cooking — miracle paste!) + amoxicillin + weekly review (MUAC/weight/appetite/illness/oedema) → graduate per protocol (MUAC ≥12.5 sustained etc.). <strong>Discharge</strong>: eating family foods + gaining + mother confident + vaccines/deworm + review dated + CHPS linked. <strong>Document</strong> feeds + weights + steps DAILY (PRO-I M5); <strong>audit EVERY death</strong> (PRO-II M4: oedema missed? fluids fast? cold unwarmed? iron early? mother blamed?) — SAM mortality <5% is achievable where steps run. Demo enriched koko before discharge (M03!) — home feeds must continue the ward's work.",
          ],
        },
        {
          type: "table",
          heading: "SAM decisions: act right",
          columns: ["Situation", "Decision", "Why"],
          rows: [
            ["MUAC 11.2, alert, eats RUTF eagerly, no danger", "OTP + weekly review", "Appetite + alert + uncomplicated = home heals"],
            ["Any oedema+++ OR no appetite OR drowsy", "INPATIENT, 10 steps", "Complicated SAM dies at home — stabilise first"],
            ["SAM + watery diarrhoea + sunken eyes", "ReSoMal slowly + feeds continue", "Standard IV/ORS overloads; gut rests never"],
            ["Day 2, cold + drowsy, feeds refused", "Sugar + warmth + infection hunt NOW", "Hypo/hypothermia/sepsis triad — check routinely!"],
            ["Recovering, appetite huge, mother thrilled", "F100/RUTF catch-up + play + discharge prep", "Appetite returns = rebuild + train + graduate"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Standard fluids kill SAM children",
          body: "SAM hearts are small, weak and anaemic — standard rapid IV boluses and full-strength ORS flood lungs and stop hearts. Rules: dehydration = ReSoMal (low-sodium, high-potassium) by mouth/NG, SLOWLY, with feeds continuing; shock = SAM-protocol fluids only (small, watched, doctor-led); monitor breathing/pulse/oedema/liver DURING every fluid. Nurses own the drip rate — question any 'fast IV' order for SAM (PRO-I M3: unsafe orders refused kindly + firmly, CUSS — PRO-II M4). Fluids in SAM are measured like digoxin: life in drops, death in litres.",
        },
      ],
      keyPoints: [
        "Marasmus (wasted, hungry) vs kwashiorkor (oedema, miserable) vs MAM — oedema rules all.",
        "Appetite divides: eager + alert + uncomplicated = OTP/RUTF; else inpatient 10 steps.",
        "Stabilise: sugar, warmth, ReSoMal slowly, K+/Mg, assume infection, micros — NO iron yet.",
        "Rehabilitate: F75 cautious → F100 catch-up → love/play → discharge trained + dated.",
        "Killers: fast IV, early iron, day-1 feasts, missed cold/sugar, blamed mothers.",
        "Document daily; audit every death; demo home feeds before discharge.",
      ],
      quiz: {
        keywords: ["marasmus", "kwashiorkor", "SAM", "MAM", "OTP", "RUTF", "F75", "F100", "ReSoMal", "appetite", "hypothermia", "hypoglycaemia", "iron", "audit", "discharge"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "hidden-hunger-obesity-and-refeeding",
      title: "Hidden hunger, obesity and re-feeding",
      minutes: 20,
      objectives: [
        "Blitz hidden hunger by protocol.",
        "Counsel obesity without stigma.",
        "Grow children into weight kindly.",
        "Prevent re-feeding deaths.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Hidden hunger blitz",
          paragraphs: [
            "M01 signs → protocol doses: <strong>VITAMIN A</strong> — campaigns 6–59 months (document EVERY dose!) + night-blindness treatment doses + orange foods pushed (palm oil, mango, orange sweet potato) · <strong>IRON</strong> — pregnancy tabs + child syrups + TRIO (malaria + worms + diet — M01; never iron-blind!) · <strong>IODINE</strong> — iodised-salt checks EVERY home visit/ANC/CWC ('show me your salt!') + seafood · <strong>ZINC</strong> — diarrhoea 10–14 days + ORS (M03/M06) · <strong>B12/D/calcium</strong> — elders/vegans/low-sun gaps (GER/M01). Campaigns (vitamin A, deworming, bednets, immunisation) need NURSES mobilising: registers, reminders, market/mosque/church announcements, defaulters traced (M06 community). Hidden hunger hides in chubby children too (obese + anaemic + vitamin-D-low — same house, M02 double burden!) — screen micros in EVERY ABCD (M02), not just the thin.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-NUT-0010.svg",
          alt: "Hidden hunger blitz: vitamin A campaigns, iron trio, salt checks, zinc ORS, elder gaps. Obesity panel: assess list, 5-10 percent plan with plate walks Coke-zero sleep behaviour family review, children grow-into-weight with play screens breakfast water kind words, specialist drugs surgery. Re-feeding: risk list, low-start thiamine electrolytes careful fluids doctor-led slow advance, warning signs, applies-to list. Double burden shared kitchen. Stigma-free words. Eating disorders kindly screen K+ heart refer.",
          caption: "Blitz the hidden, counsel the heavy kindly, re-feed low and slow.",
        },
        {
          type: "text",
          heading: "Obesity: counsel, never shame",
          paragraphs: [
            "ASSESS: BMI + waist + BP + glucose/lipids + sleep/apnoea + joints + mood + diet/activity recall (M02 ABCD!). PLAN: <strong>5–10% loss</strong> (transforms diabetes/BP/sleep — celebrate!) + plate (M04) + 150 min walks + Coke ZERO + sleep 7–8 h + behaviour (eat slow, no screens, shop fed, small bowls, cook more) + FAMILY (kitchen shared — counsel cooks!) + monthly review. WORDS: 'weight' never 'fat'; 'health gains' never 'diet punishment'; praise effort + centimetres + mmHg + energy ('stairs easier? sleeping better?') — scales lie daily, trends tell monthly; weigh PRIVATE, counsel SEATED, listen FIRST. <strong>CHILDREN</strong>: grow-INTO-weight (rarely restrict growing bodies!) + active play 60 min + screens <2 h + breakfast + water + KIND words (teased children eat secretly + hate sport — M03 image care!). <strong>Double burden</strong>: stunted child + obese mother + diabetic father — counsel the KITCHEN once (shared rainbow + right portions each + walks together + Coke zero all). Drugs/surgery: specialist-only; nurses refer + support, never promise.",
          ],
        },
        {
          type: "text",
          heading: "Re-feeding + eating disorders",
          paragraphs: [
            "<strong>RE-FEEDING SYNDROME</strong> (GER M06!): RISK (starved >5 days, BMI <16, >15% loss, alcoholism, SAM — last lesson!) → START LOW (~10 kcal/kg/day high-risk, F75-style caution) + <strong>THIAMINE BEFORE feeds</strong> + watch K+/Mg/PO4 + fluids careful + doctor-led + advance SLOWLY + monitor (breathless? oedema? confused? seizures? — STOP + treat + call!). Applies: SAM starts, hunger rescue, post-op starved, neglected elders, anorexia care. Feeding fast kills (cardiac failure) — rescue feeding is intensive care with a spoon. <strong>EATING DISORDERS</strong> (teens!): secret vomiting/laxatives/exercise, meal terror, weight crash + denial → kindly screen (M03 image) + medical check (K+! heart! — purging kills via arrhythmia) + refer (psych/counsellor/doctor) + family support + follow — shame kills, care cures. Document counsel + plans + reviews (PRO-I M5); audit clinic BMI/HbA1c trends (PRO-II M4) — populations slim where nurses counsel kindly, and the kindest counsel includes the counsellor's own plate (M01 modeling!).",
          ],
        },
        {
          type: "table",
          heading: "Weight consults: what to do",
          columns: ["Client", "Focus", "Plan + review"],
          rows: [
            ["BMI 33, BP 160/100, Coke ×2 daily", "Salt + sugar + movement + meds", "Swaps (M04) + walks + BP log + monthly + dietician"],
            ["9-yr, obese, teased, no play", "Grow-into-weight + joy + family", "Play 60 min + screens<2 h + breakfast + kind words + termly"],
            ["Teen, vomiting secretly, K+ 2.9", "Medical + kindly + refer", "K+ replaced + heart watched + psych + family + close follow"],
            ["SAM graduating, mother anxious", "Catch-up + confidence + home feeds", "RUTF + demo koko + 2-week reviews till recovered"],
            ["Elder, BMI 16, starved weeks", "Re-feed protocol + causes", "Low start + thiamine + electrolytes + doctor-led + daily watch"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Stigma weighs more than kilos",
          body: "Shamed clients avoid clinics, hide eating, skip reviews — and gain. Build the anti-stigma clinic: private weighing (no announced numbers!), sturdy armless chairs, large BP cuffs that FIT (wrong cuffs misread + humiliate), gowns that cover, words that dignify, praised non-scale victories (stairs! sleep! sugars! mood!). Audit your own language monthly (record a consult — count 'fat/should/just' vs 'health/can/plan'). The scale measures weight; the nurse measures worth — and worth-first counsel slims where shame-first fails.",
        },
      ],
      keyPoints: [
        "Blitz: vitamin A campaigns + iron trio + salt checks + zinc/ORS; screen micros in ABCD always.",
        "Obesity: assess full + 5–10% goal + plate/walks/Coke-zero/sleep/behaviour + family + monthly.",
        "Words dignify: weight/health-gains/private/trends; children grow-into-weight + play + kindness.",
        "Double burden counsels one kitchen: shared rainbow + portions each + walks + zero Coke.",
        "Re-feed: low start + thiamine first + electrolytes + doctor-led + warning watch.",
        "Eating disorders: kindly screen + K+/heart + refer + family; anti-stigma clinic audited.",
      ],
      quiz: {
        keywords: ["hidden hunger", "vitamin A", "campaigns", "obesity", "stigma", "5-10%", "children", "play", "double burden", "re-feeding", "thiamine", "electrolytes", "eating disorders", "counselling", "trends"],
        categories: ["fundamentals"],
      },
    },
  ],
};
