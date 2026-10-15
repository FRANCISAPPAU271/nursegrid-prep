import type { CourseModule } from "../types";

export const herbalMedicineSafety: CourseModule = {
  slug: "herbal-medicine-safety",
  title: "Herbal medicine safety",
  summary:
    "Natural is not safe: dose-makes-poison pharmacology, bleeders, cancellers, hypo stacks, organ hitters and adulterants — then pregnancy abortifacients, paediatric enema/alcohol dangers, pre-op herb stops, breastfeeding checks and adverse-reaction reporting.",
  lessons: [
    {
      slug: "interactions-and-toxicity",
      title: "Interactions and toxicity",
      minutes: 18,
      objectives: [
        "Kill 'natural = safe' myth.",
        "Name bleeders + cancellers.",
        "Catch hypo stacks + organ hits.",
        "Suspect adulterants.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Dose makes poison",
          paragraphs: [
            "Paracelsus: 'DOSE makes poison' — hemlock is natural, arsenic is natural, snake venom is organic. Herbs are DRUGS with real pharmacology + UNKNOWN doses + unknown purity + unknown interactions — respect them like drugs, check them like suspects. <strong>BLEEDERS</strong>: garlic + ginger + ginkgo + ginseng + high-dose vitamin E + fish oils thin blood — stacked on WARFARIN/heparin/aspirin/clopidogrel = bleeding (gums! nose! surgical ooze! GI! haemorrhagic stroke!). Teach plainly: 'blood-thinning herbs + blood-thinning drugs = TOO thin!' Watch: bruises, epistaxis, haematuria, tarry stools, prolonged oozing — ASK HERBS at every bleed. <strong>CANCELLERS</strong> (CYP450 enzyme induction — exam!): ST JOHN'S WORT revs liver enzymes that EAT drugs — ARVs (resistance! treatment failure! DEATH!), contraceptive PILLS (pregnancies!), transplant anti-rejection (REJECTION!), warfarin, TB drugs. Ask EVERY HIV/TB/family-planning client: 'bush teas for mood or sleep…?' — kindly, routinely, lifesavingly. <strong>HYPO STACKS</strong>: bitter leaf + moringa-seed + 'sugar herbs' + glibenclamide/insulin = sugar CRASHES (sweats! confusion! coma!). Teach: BGL logs + hypo signs + 'herb AND drug TOGETHER need doctor-tuning — never double-dose day, never herb-OR-drug day!' <strong>ORGAN HITTERS</strong>: LIVER (kava! chaparral! heavy neem! bush mixtures! — yellow eyes? dark urine? pale stools? STOP + LFTs!) · KIDNEYS (aristolochia! NSAID-like herbs! — swelling? less urine?) · HEART (stimulant herbs! — palpitations? — ECG!). Unexplained organ injury? ASK HERBS FIRST, judge never.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-TCM-0005.svg",
          alt: "Five boxes bleeders cancellers organ-hitters hypo-hyper adulterants. Paracelsus dose rule. Bleeders list with warfarin stack and teaching line. Cancellers CYP450 with ARV pill transplant victims and ask rule. Hypo stacks bitter-leaf crash with log teach. Organ hitters liver kidney heart with ask-first rule. Adulterants steroids lead hidden drugs with FDA check. Mantra quoted.",
          caption: "Dose makes poison — ask every herb, check every clash.",
        },
        {
          type: "text",
          heading: "Adulterants + checking",
          paragraphs: [
            "<strong>ADULTERANTS</strong> — 'herbal' mixtures hiding: STEROIDS (moon face! sugar rise! stretch marks! — 'my arthritis mixture works miracles!' = prednisolone in disguise!) · SILDENAFIL ('manpower' herbals!) · NSAIDs (ulcer 'joint cures'!) · LEAD/MERCURY (market ayurvedics! kohl-adjacent powders!) · ALCOHOL (bitters 40%+!). Clues: TOO-effective ('pain gone in minutes!' = hidden drug!), steroid faces, FDA number ABSENT, secret formulas, miracle claims. Counsel: 'bring the bottle — we check together!' + FDA verification + reactions reported (next lesson!). <strong>CHECKING ROUTINE</strong> (every herb-using patient on orthodox drugs!): LIST all (herbs + drugs + doses!) → CLASH-check (bleed? cancel? hypo? organ? — this lesson!) → RISK-grade (stop now? separate? monitor? continue?) → NEGOTIATE (M05! — 'keep moringa soup, pause the bitter bitters till BGL stable!') → MONITOR (BGL! INR! LFTs! symptoms!) → DOCUMENT (INF! — herb + advice + review!). <strong>Exam favourites</strong>: 'warfarin + garlic, nosebleeds' — bleeders + stop + INR + teach. 'ARVs failing, bush tea' — St John's? + adherence + resistance counsel + switch teas. 'Bitter leaf + insulin, sweating' — HYPO + treat + log + tune. 'Yellow eyes, bush mixture' — liver + STOP + LFTs + sample kept + report. Clash-checking is prescribing-adjacent nursing — own it, document it, follow it.",
          ],
        },
        {
          type: "table",
          heading: "Clash checks",
          columns: ["Combination", "Danger", "Nurse does"],
          rows: [
            ["Garlic/ginger + warfarin", "BLEEDING", "Stop herb + INR + bleed teach + monitor"],
            ["St John's + ARVs/pills", "CANCELLED drugs", "Stop herb + adherence + resistance/pregnancy plan"],
            ["Bitter leaf + insulin", "HYPO crash", "Treat + BGL log + tune both + teach signs"],
            ["Steroid-laced 'herbal'", "Moon face + sugar", "Suspect + verify + taper plan + report"],
            ["Heavy mixture + yellow eyes", "LIVER injury", "STOP all + LFTs + sample + report FDA"],
            ["Unknown mix + surgery soon", "Bleed/sedation/BP", "Stop 7-14 days + anaesthetist told"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Miracle speed = hidden drug",
          body: "Herbs work gradually; 'pain gone in 20 minutes!' or 'sugar normal overnight!' from a 'pure herbal' mixture means HIDDEN orthodox drugs — usually steroids or NSAIDs. Celebrate the relief, suspect the contents: examine (moon face? oedema?), verify (FDA? label?), negotiate (taper, don't crash-stop steroids!), report. Speed thrills; speed also tells.",
        },
      ],
      keyPoints: [
        "Paracelsus: dose makes poison — herbs = drugs, unknown doses, real harm.",
        "Bleeders: garlic/ginger/ginkgo/ginseng + anticoagulants = bleeding — stop + INR + teach.",
        "Cancellers: St John's eats ARVs/pills/transplants (CYP450!) — ask every HIV/FP client.",
        "Hypo stacks: bitter leaf + diabetic drugs = crashes — logs + tune + teach.",
        "Organs: liver/kidney/heart hitters — yellow/swelling/palpitations → STOP + test.",
        "Adulterants: steroids/sildenafil/NSAIDs/lead/alcohol — miracle speed tells; verify + report.",
      ],
      quiz: {
        keywords: ["interactions", "Paracelsus", "bleeders", "warfarin", "St John's wort", "CYP450", "ARVs", "hypo", "bitter leaf", "steroids", "adulterants", "liver", "INR", "clash", "dose"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "pregnancy-children-and-surgery",
      title: "Pregnancy, children and surgery",
      minutes: 18,
      objectives: [
        "Flag abortifacients + bitters.",
        "Stop paediatric herb harms.",
        "Run pre-op herb stops.",
        "Report reactions properly.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Womb + child + wound",
          paragraphs: [
            "<strong>PREGNANCY</strong> (exam hot!): ABORTIFACIENT herbs ('womb cleansers'! strong bitters! 'bring the menses' mixes! — cramps? bleeding? — URGENT assessment, judge never!) · ALCOHOL bitters (foetal harm — negotiate OUT: 'baby's brain + alcohol clash — ginger tea + rest instead?') · ENEMAS (infection? membrane rupture? labour trigger? — counsel!) · UNKNOWN mixtures (teratogens? — 'bring it Thursday, we check together!'). ANC asks EVERY visit: 'herbs? mixtures? enemas? bitters…?' — warmly, listed, safety-checked (NUT M3!). <strong>CHILDREN</strong>: adult doses POISON small bodies (immature liver! tiny weight! — dose by weight or NOT AT ALL!) · HERBAL ENEMAS dehydrate + injure (ask EVERY diarrhoea case! 'enemas given…?' + ORS + counsel!) · ALCOHOL mixes sedate + hypoglycaemise ('sleeping too much? sweaty?') · ASRAM mixes delay malaria care (test + treat + 'herbs AND medicine together!'). <strong>SURGERY</strong>: STOP bleeders (garlic/ginger/ginkgo/ginseng/vitamin E) 7–14 DAYS pre-op + tell the ANAESTHETIST all herbs (sedation clashes! BP swings! liver load! prolonged bleeding!). Pre-op checklist: 'herbs stopped WHEN…? last dose…?' — documented + confirmed, not assumed. <strong>BREASTFEEDING</strong>: milk carries drugs + herbs (sedatives! stimulants! alcohol! — 'baby too sleepy? poor feed?' → review ALL maternal intakes!). Prekese soups GENTLE; strong bitters + alcohol bitters SUSPECT (NUT M3 counsels together!).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-TCM-0006.svg",
          alt: "Five boxes pregnancy children surgery breastfeeding report-it. Pregnancy abortifacients bitters enemas unknowns with ANC ask. Children doses enemas alcohol asram with weight rule. Surgery stop-list anaesthetist checklist. Breastfeeding milk-carries review signs plus soup guidance. Report reactions what-who-when-effect plus FDA incident TMPC sample. Cross-course links. Mantra quoted.",
          caption: "Womb, child, wound, milk — ask, stop, check, report.",
        },
        {
          type: "text",
          heading: "Report reactions",
          paragraphs: [
            "Every suspected herbal harm gets REPORTED — reports build national safety; unreported harms REPEAT. Capture: <strong>WHAT</strong> (herb name + preparation + DOSE + source + FDA number?!) · <strong>WHO</strong> (age! pregnant?! breastfeeding?! child?!) · <strong>WHEN</strong> (onset after dose? rechallenge?) · <strong>EFFECT</strong> (rash? vomiting? BLEED? yellow? collapse?!) · <strong>ACTION</strong> (stopped? treated? outcome?). Then: FDA ADVERSE FORM (facility focal person!) + WARD INCIDENT (INF!) + inform TMPC if practitioner-linked + KEEP SAMPLE ('bring the bottle/bag — don't throw it!'). Counsel the patient: 'stopped for now + watch signs + return if… + we'll find a SAFE way!' — reporting framed as PROTECTION, not punishment (of patient OR healer — blame chills future disclosure!). <strong>Exam favourites</strong>: 'pregnant, bleeding after womb cleanser' — resuscitate + assess + counsel + report + follow-up. 'Infant drowsy, herbal enema + bitters' — ABCs + glucose + dehydration + counsel + report. 'Elective surgery tomorrow, garlic capsules' — postpone?/proceed? + anaesthetist + document + teach. 'Rash + yellow eyes, market mixture' — stop + LFTs + sample + FDA + follow-up. Vulnerable-group vigilance + reporting discipline = the safety half of TCAM nursing.",
          ],
        },
        {
          type: "table",
          heading: "Vulnerable checks",
          columns: ["Patient", "Ask/check", "Act"],
          rows: [
            ["Pregnant + 'cleanser'", "Cramps? bleeding? contents?", "Assess urgent + counsel + report + follow"],
            ["Diarrhoea infant + enema", "Enemas? alcohol? dehydration?", "ORS + malaria test + counsel + report?"],
            ["Pre-op + garlic/ginger", "Stopped when? last dose?", "Anaesthetist told + document + reschedule?"],
            ["Sleepy breastfed baby", "Maternal herbs/alcohol/drugs?", "Review all + adjust + monitor feeds"],
            ["Yellow eyes + mixture", "What? dose? source? onset?", "STOP + LFTs + sample + FDA + follow"],
            ["Steroid-face 'herbal'", "Miracle speed? moon face?", "Verify + taper plan + report + teach"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Sample keeper",
          body: "Start a ward habit: every suspected herbal reaction — KEEP THE SAMPLE (bottled, labelled, stored safely). Samples turn suspicions into findings: FDA tests, TMPC traces, practitioners learn, mixtures improve. 'Bring the bottle' is the most underused safety sentence in Ghanaian nursing — use it this week, report what follows.",
        },
      ],
      keyPoints: [
        "Pregnancy: abortifacients + alcohol bitters + enemas + unknowns — ANC asks every visit.",
        "Children: weight-dose or nothing; enemas dehydrate; alcohol sedates; asram delays malaria.",
        "Surgery: stop bleeders 7-14 days + anaesthetist told + checklist documented.",
        "Breastfeeding: milk carries — sleepy/poor-feed baby → review ALL maternal intakes.",
        "Report: what + who + when + effect + action → FDA + incident + TMPC + SAMPLE kept.",
        "Frame reporting as protection, never punishment — blame chills disclosure.",
      ],
      quiz: {
        keywords: ["pregnancy", "abortifacients", "enemas", "children", "surgery", "anaesthetist", "breastfeeding", "report", "FDA", "sample", "ANC", "bitters", "teratogens", "hypoglycaemia", "LFTs"],
        categories: ["fundamentals"],
      },
    },
  ],
};
