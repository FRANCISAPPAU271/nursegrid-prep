import type { CourseModule } from "../types";

export const menstrualCycleAndContraception: CourseModule = {
  slug: "menstrual-cycle-and-contraception",
  title: "Menstrual cycle, fertilisation and contraception",
  summary:
    "The monthly rhythm and its control: the HPO axis through follicular, ovulation, luteal and menstruation with hormone curves and the fertile window, normal parameters, and the bleeding disorders from HMB to postmenopausal bleeding with the never-miss flags — then fertilisation to implantation with hCG and twins, the full contraceptive ladder with mechanisms, the UKMEC reds, missed-pill rules, emergency windows, and GATHER counselling.",
  lessons: [
    {
      slug: "the-menstrual-cycle",
      title: "The menstrual cycle",
      minutes: 20,
      objectives: [
        "Explain the HPO axis through the four phases with hormone curves.",
        "State normal cycle parameters and chart bleeding objectively.",
        "Sort HMB, IMB, PCB, PMB, amenorrhoea and dysmenorrhoea.",
        "State the never-miss flags: PMB, PCB and pregnancy-first amenorrhoea.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Four phases, one thermostat",
          paragraphs: [
            "The <strong>hypothalamic-pituitary-ovarian (HPO) axis</strong> runs the ~28-day cycle. <strong>Follicular (days 1–13)</strong>: <strong>FSH</strong> recruits follicles; rising <strong>oestrogen</strong> rebuilds the <strong>proliferative</strong> endometrium, thins cervical mucus to egg-white, and — past threshold — flips to <strong>positive feedback</strong>. <strong>Ovulation (~day 14)</strong>: the <strong>LH surge</strong> ruptures the Graafian follicle (mittelschmerz twinge, mucus peak, LH-kit positive — conception timing or rhythm-failure teaching). <strong>Luteal (days 15–28)</strong>: the <strong>corpus luteum</strong> secretes <strong>progesterone</strong> (secretory lining, thick mucus plug, basal-temperature rise) for ~14 fixed days — luteal length is the cycle's constant; follicular length is its variable. <strong>Menstruation (days 1–5)</strong>: no hCG rescue → luteal death → progesterone withdrawal → spiral-artery spasm + prostaglandins → shed. Normal: <strong>21–35 days apart, 2–7 days, <80 mL</strong> (≤16 soaked products, no flooding/clots/anaemia). Chart it: dates, days, products/day, clots, flooding, pain score, impact on life — the <strong>pictorial chart</strong> beats \"heavy\" in every language.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0292.svg",
          alt: "Bank diagram of the menstrual cycle: follicular, ovulation, luteal and menstruation with hormone curves.",
          caption: "The cycle's hormones — from the question-bank diagram set; window and flags below.",
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0033.svg",
          alt: "28-day cycle strip: menstruation days 1–5, follicular days 1–13 under rising oestrogen, ovulation day 14 on the LH surge, luteal days 15–28 under progesterone; fertile window about days 10–17 (sperm live 5 days, ovum 24 hours). Hormone curves: oestrogen rising to ovulation, LH spike, progesterone luteal plateau falling to bleed. Normal limits and the bleeding workups: HMB, intermenstrual, postcoital (speculum plus screen plus refer), postmenopausal (cancer until proven otherwise), amenorrhoea (pregnancy test first), dysmenorrhoea primary versus secondary, perimenopause.",
          caption: "Window for conception, flags for disease — the strip every history needs.",
        },
        {
          type: "table",
          heading: "Bleeding patterns: name it, work it",
          columns: ["Pattern", "Definition", "Likely causes", "Action"],
          rows: [
            ["HMB (heavy menstrual)", ">80 mL, flooding, clots, anaemia, life-limiting", "PALM: polyp, adenomyosis, leiomyoma, malignancy; COEIN: coagulopathy, ovulatory, endometrial, iatrogenic, unclassified", "FBC + ferritin, pregnancy test, pelvic scan, clotting screen if lifelong; iron + tranexamic/NSAID/hormonal/IUS ladder"],
            ["IMB (intermenstrual)", "Bleed between periods", "Cervical pathology, IUCD, hormonal gaps, thyroid, pregnancy/ectopic", "Pregnancy test + speculum + screen + scan — never hormones-first"],
            ["PCB (postcoital)", "Bleed after sex", "Cervix: ectropion, polyps, CIN, cancer; STI", "SPECULUM + HPV/VIA/Pap + STI screen + urgent refer if lesion"],
            ["PMB (postmenopausal)", "Any bleed ≥12 mo after last period", "Atrophy, polyps, HRT, hyperplasia — ENDOMETRIAL CANCER until ruled out", "URGENT TVUS (≥4 mm) + hysteroscopy/biopsy — 2-week pathway"],
            ["Amenorrhoea", "Primary: no periods by 15–16; secondary: >3 mo stopped", "Pregnancy FIRST; then outflow (Asherman's), PCOS/POI, prolactin/drugs, hypothalamic (weight/exercise/stress), thyroid", "Pregnancy test, prolactin/TSH/FSH/LH, scan; bone + fertility counsel if prolonged hypo-oestrogen"],
            ["Dysmenorrhoea", "Primary: prostaglandin cramps, young, regular; secondary: new/worsening/older", "Secondary: endometriosis, adenomyosis, fibroids, PID", "Primary: NSAIDs + heat + hormonal; secondary: scan + refer — track impact on school/work"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "PMB and PCB: the bleeds that must never wait",
          body: "Postmenopausal bleeding is endometrial cancer until proven otherwise — urgent transvaginal scan plus hysteroscopy/biopsy on the 2-week pathway, no hormonal trial, no routine referral. Postcoital bleeding is cervical disease until examined — speculum plus HPV/VIA/Pap plus STI screen plus urgent referral for any lesion or persistent bleed, never reassure-and-repeat-smear. Document last period, HRT/Tamoxifen, bleeding pattern, speculum findings with a chaperone, and the referral date — these two presentations are the gynaecology cancers most often delayed by reassurance.",
        },
      ],
      keyPoints: [
        "HPO: FSH recruits, oestrogen builds, LH surge ovulates (~day 14), progesterone holds 14 fixed days, withdrawal bleeds.",
        "Normal: 21–35 days, 2–7 days, <80 mL; chart dates/products/clots/flooding/pain/impact — pictorial beats 'heavy'.",
        "Fertile window ~days 10–17 (sperm 5 days + ovum 24 h); ovulation signs: mucus, mittelschmerz, LH kits, BBT rise after.",
        "HMB: PALM-COEIN + iron + ladder; IMB/PCB: pregnancy + speculum + screen; dysmenorrhoea: primary vs secondary.",
        "PMB = cancer until ruled out (urgent scan + biopsy); PCB = examine + screen + refer; amenorrhoea = pregnancy test FIRST.",
        "Perimenopause: gap changes + flushes + sleep/mood + bone/heart — HRT counselled per risks, not feared.",
      ],
      quiz: {
        keywords: ["menstrual cycle", "FSH", "LH surge", "ovulation", "progesterone", "oestrogen", "fertile window", "HMB", "PCB", "PMB", "amenorrhoea", "dysmenorrhoea", "endometriosis", "perimenopause", "HRT"],
        categories: ["fundamentals", "medsurg"],
      },
    },
    {
      slug: "fertilisation-and-contraception",
      title: "Fertilisation and contraception",
      minutes: 20,
      objectives: [
        "Trace fertilisation to implantation with hCG and twin types.",
        "Rank contraceptive methods by effectiveness with mechanisms.",
        "Apply UKMEC reds, missed-pill rules and emergency windows.",
        "Counsel with GATHER including adolescents and STI cover.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Fertilisation to implantation: a week's journey",
          paragraphs: [
            "Of ~200 million sperm, hundreds reach the <strong>ampulla</strong>: <strong>capacitation</strong> (uterine priming) → <strong>acrosome reaction</strong> (zona breached) → one sperm in → <strong>cortical reaction</strong> blocks polyspermy → pronuclei fuse (<strong>fertilisation</strong>, day 0, 46 chromosomes, sex set). <strong>Cleavage</strong> (dividing without growing) → <strong>morula</strong> → <strong>blastocyst</strong> (inner cell mass + trophoblast) → hatches → <strong>implants day 6–7</strong> into secretory endometrium → <strong>trophoblast secretes hCG</strong> → rescues the corpus luteum → progesterone holds the pregnancy till the <strong>placenta takes over ~10–12 weeks</strong>. hCG <strong>doubles ~48 h</strong> in viable early pregnancy; the <strong>discriminatory zone</strong> (~1500–3500 IU/L) expects a visible intrauterine sac — empty uterus + bleeding + pain = <strong>PUL/ectopic pathway</strong> (repeat hCG + scan + safety-net, never discharge-and-hope). <strong>Twins</strong>: <strong>dizygotic</strong> (two ova — familial, older, fertility drugs, always DCDA) versus <strong>monozygotic</strong> splits — <strong>DCDA</strong> (day 0–3, safest), <strong>MCDA</strong> (day 4–8 — <strong>TTTS</strong> watch, fortnightly scans), <strong>MCMA</strong> (day 8–13 — cord entanglement, inpatient), conjoined (later) — <strong>chorionicity at the dating scan decides everything</strong>: label it, scan to it, deliver by it.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0034.svg",
          alt: "Contraception ladder by typical-use failure: implant/IUS/copper IUD under 1 per cent, injection 6, pill/patch/ring 9, condoms 18 plus STI cover, withdrawal/fertility awareness 22-plus, nothing 85. Emergency: copper IUD within 5 days (most effective plus ongoing), ulipristal within 120 hours, levonorgestrel within 72 hours (double dose over 70 kg or on inducers). COC reds, missed-pill rules, POP windows, DMPA grace, condoms-only STI cover, pregnancy test 3 weeks after emergency contraception, quick-start same day.",
          caption: "LARC at the top, nothing at 85% — and emergency ranked by days, not hope.",
        },
        {
          type: "text",
          heading: "The methods: mechanisms that match lives",
          paragraphs: [
            "<strong>LARC</strong> (fit-and-forget, <1%): <strong>implant</strong> (3 y, progestin — irregular bleeding commonest complaint, counsel before fitting), <strong>IUS</strong> (5–8 y, local progestin — HMB treatment + contraception, scanty periods expected), <strong>copper IUD</strong> (5–10 y, spermicidal — heavier periods, no hormones, <strong>emergency ≤5 d + ongoing</strong>). <strong>Injection DMPA</strong> (13 w + 7-d grace — weight gain, <strong>delayed fertility ~9 mo</strong>, bone density with long use: exercise + calcium + review). <strong>COC/patch/ring</strong> (ovulation suppressed + mucus + lining — cycle control + acne + HMB; <strong>VTE/migraine/BP reds</strong> below; enzyme inducers — rifampicin, some anticonvulsants, St John's wort — demand backup/LARC). <strong>POP</strong> (desogestrel 12-h window beats traditional 3-h; breastfeeding-friendly; irregular bleeding). <strong>Condoms</strong> (male + female — <strong>ONLY STI cover</strong>: dual method every new partner; teach fit-and-check). <strong>FAM</strong> (mucus + BBT + calendar + LAM's strict trio: <6 mo + amenorrhoeic + fully breastfeeding — night feeds included). <strong>Permanent</strong> (vasectomy: two clear semens; tubal: laparoscopy/sterilization — <strong>regret counselling, consent, failure rates quoted, never coerced, never during labour</strong>). <strong>Infertility</strong> basics: try <strong>12 mo (<35) / 6 mo (≥35)</strong> → <strong>semen + ovulation (day-21 progesterone) + tubes (HSG/laparoscopy)</strong> → refer together as a couple, counsel the grief nobody mentions.",
          ],
        },
        {
          type: "table",
          heading: "UKMEC reds: who must never get what",
          columns: ["Method", "Absolute avoid (MEC 4)", "Caution / alternative", "Nursing check"],
          rows: [
            ["COC/patch/ring", "Migraine WITH aura, VTE, smoker ≥35 (15+/day), BP ≥160/100, current breast cancer, <3 wk postpartum + VTE risks, major surgery + immobility", "Migraine without aura <35, controlled HTN, smoker <35, BMI ≥35, gallbladder disease", "BP + migraine aura screen + smoking + VTE history EVERY review; teach VTE/ACHES warning signs"],
            ["DMPA injection", "Current breast cancer, unexplained bleeding (assess first), severe liver disease", "Osteoporosis risk, depression, weight concerns, delayed fertility plans", "Weight + mood + bleeding diary; bone review if >2 y + risk; recall system — defaulters lose cover silently"],
            ["Copper IUD", "Current PID/STI, distorted cavity, Wilson's, unexplained bleeding (assess first)", "Heavy periods (worsens — offer IUS), anaemia, immunosuppression", "STI screen if risk, strings check teaching, 3–6 wk follow-up, EC ≤5 d counselling"],
            ["Implant / IUS", "Current breast cancer, unexplained bleeding (assess first); IUS adds current PID/distorted cavity", "Ischaemic heart/stroke history, liver tumours, enzyme inducers (implant — use DMPA/IUD)", "Bleeding-pattern counselling BEFORE fitting (commonest removal reason); palpable implant check"],
            ["Sterilization", "No consent, coercion, unsure, during labour/distress", "Young + childless (counsel regret, offer LARC first — but respect autonomy)", "Document counselling + failure rates + irreversibility; vasectomy needs 2 clear semens + condoms till then"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "GATHER: counsel contraception, don't just dispense it",
          body: "Greet (private, unhurried, non-judgmental) → Ask (needs, history, reds, STI risk, future fertility, partner dynamics, violence screen) → Tell (options ranked by efficacy with honest side effects) → Help decide (user-fit beats textbook-best — the method she'll actually use wins) → Explain use (demo + missed-pill/EC plan + warning signs + backup) → Return (follow-up date, strings/pill-check, pregnancy-test plan, open-door for problems). Adolescents: Gillick/consent-competent confidentiality with safeguarding limits stated upfront, LARC-first but never coerced, STI + HPV + violence screening woven in. Document method, counselling points, reds screened, follow-up — and quick-start same-day with backup rather than menstruation-appointment delays that lose patients to pregnancy.",
        },
      ],
      keyPoints: [
        "Ampulla fertilizes, cortical reaction blocks polyspermy, blastocyst implants day 6–7, hCG doubles 48 h; chorionicity (DCDA/MCDA/MCMA) decides twin care.",
        "PUL/ectopic: empty uterus + pain/bleed + hCG past zone = pathway + safety-net, never discharge-and-hope.",
        "LARC <1% (implant/IUS/Cu-IUD) → injection 6% → pill 9% → condoms 18% (+STI) → FAM 22%+ → nothing 85%.",
        "COC reds: aura-migraine, VTE, smoker ≥35, BP ≥160/100, breast cancer; missed COC ≥2/EC + 7-d condoms; POP windows 12-h/3-h.",
        "EC: Cu-IUD ≤5 d (best + ongoing) > UPA ≤120 h > LNG ≤72 h (double if >70 kg/inducers); test 3 weeks after.",
        "GATHER counsel: efficacy + fit + side effects + STI + fertility + consent; quick-start same-day; safeguard adolescents.",
      ],
      quiz: {
        keywords: ["fertilisation", "implantation", "hCG", "twins", "chorionicity", "ectopic", "contraception", "LARC", "IUD", "implant", "COC", "VTE", "missed pill", "emergency contraception", "GATHER"],
        categories: ["fundamentals", "medsurg"],
      },
    },
  ],
};
