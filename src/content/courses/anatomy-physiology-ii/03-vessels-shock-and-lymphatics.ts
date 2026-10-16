import type { CourseModule } from "../types";

export const vesselsShockAndLymphatics: CourseModule = {
  slug: "vessels-shock-and-lymphatics",
  title: "Vessels, blood pressure, shock and lymphatics",
  summary:
    "The pipework: arteries, veins and capillaries with Starling exchange and the four causes of oedema, venous return and its helpers, blood pressure with measurement technique and regulation, hypertension and hypotension — then the special circulations, the four types of shock with the compensated-to-decompensated ladder and type-specific management, and the lymphatic system with immunity and nodes.",
  lessons: [
    {
      slug: "vessels-and-blood-pressure",
      title: "Vessels and blood pressure",
      minutes: 20,
      objectives: [
        "Compare arteries, arterioles, capillaries, venules and veins structurally and functionally.",
        "Explain capillary exchange and the four causes of oedema.",
        "Explain venous return and its failure (DVT, varicose veins, haemorrhoids).",
        "Measure BP accurately, state normal values, and explain short- and long-term regulation.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Five vessels, one gradient",
          paragraphs: [
            "Blood leaves the heart at ~120 mmHg and returns at ~0 — the vessels spend that pressure wisely. <strong>Arteries</strong> (elastic then muscular) stretch and recoil, smoothing pulse into flow; <strong>arterioles</strong> are the resistance taps — tiny radius changes redirect whole organs (sympathetic constriction, local metabolites dilation). <strong>Capillaries</strong> — one endothelial cell thick, red cells single file — are the only exchange vessels: everything else is plumbing to and from them. <strong>Venules and veins</strong> are thin-walled capacitance vessels holding ~60% of blood, with <strong>valves</strong> against backflow. <strong>Anastomoses</strong> (collateral joins, e.g. Circle of Willis, coronary collaterals, palmar arches — test Allen's before radial sticks) keep organs alive when one route narrows. Atherosclerosis stiffens arteries (systolic hypertension, aneurysm, rupture); venous valve failure pools blood (varicose veins, haemorrhoids, stasis ulcers) — arterial disease starves downstream, venous disease congests upstream.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0018.svg",
          alt: "Three vessel cross-sections: artery with thick muscle and elastic wall and small lumen under high pressure; vein with thin wall, big lumen and valves stopping backflow; capillary one cell thick with red cells passing single file. Capillary exchange: at the arterial end hydrostatic pressure 35 pushes fluid out; at the venous end oncotic pressure 25 pulls fluid in; about 3 litres a day left over drains via lymphatics. Oedema's four doors: raised hydrostatic pressure, low oncotic pull, leaky walls, blocked lymph drains; one hot swollen calf is DVT until ruled out.",
          caption: "Structure is function — and every swelling opens one of four doors.",
        },
        {
          type: "text",
          heading: "Venous return: the climb back up",
          paragraphs: [
            "Veins climb against gravity with four helpers: the leftover <strong>pressure gradient</strong>, one-way <strong>valves</strong>, the <strong>skeletal muscle pump</strong> (calves — walking is venous return), and the <strong>respiratory pump</strong> (inspiration's negative thorax sucks blood up). Fail any helper and blood pools: prolonged standing/sitting, immobility, pregnancy's compressed IVC (left-lateral tilt), tight garters, heart failure's raised venous pressure. <strong>DVT</strong> (Virchow, Module 01) threatens the lungs; <strong>varicose veins</strong> ache and ulcerate at the gaiter zone; <strong>haemorrhoids</strong> bleed with straining. Nursing is mechanical first: <strong>mobilize early and often</strong>, elevate legs <strong>above heart level</strong>, TEDS/stockings (measured, no wrinkles, off for skin checks), hydration, ankle pumps in bed, and left-side positioning in late pregnancy — drugs (anticoagulants) only where indicated, and never massage a hot swollen calf.",
          ],
        },
        {
          type: "table",
          heading: "Blood pressure: categories and actions (adults)",
          columns: ["Category", "Reading (mmHg)", "What it means", "Nursing action"],
          rows: [
            ["Normal", "<120 / <80", "Target zone", "Recheck routinely; reinforce lifestyle"],
            ["Elevated", "120–129 / <80", "Warning track", "Lifestyle counselling, recheck soon"],
            ["Stage 1 HTN", "130–139 / 80–89", "Hypertension", "Confirm over visits; lifestyle + drugs per protocol"],
            ["Stage 2 HTN", "≥140 / ≥90", "Treat actively", "Drugs + follow-up; screen heart, kidney, eyes, stroke risk"],
            ["Hypertensive crisis", ">180 / >120", "± end-organ damage", "Emergency if organ damage (chest pain, neuro signs, AKI, eclampsia) — lower gradually per protocol, never crash it"],
            ["Hypotension", "<90/60 or symptomatic", "Under-perfusion until proven otherwise", "Lie flat, legs up, fluids per cause; orthostatics: ≥20 systolic or ≥10 diastolic drop in 3 min + symptoms"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "A BP is only as good as its technique",
          body: "Rest 5 minutes, feet flat, back supported, arm at heart level, correct cuff (bladder 40% of arm circumference — too small reads falsely HIGH), no talking, no crossed legs, empty bladder, no caffeine/exercise/smoking for 30 minutes. First visit: both arms (a >15 mmHg gap needs investigation); recheck low or high readings manually; document arm, position and cuff size. Orthostatics: supine 5 minutes, then 1 and 3 minutes standing with symptoms and heart rate (failure to tachycard suggests autonomic/neurogenic cause or beta-blockade).",
        },
      ],
      keyPoints: [
        "Arteries smooth flow, arterioles direct it, capillaries exchange it, veins store and return it, anastomoses insure it.",
        "Starling: HP pushes out arterially, OP pulls in venously; ~3 L/day to lymph; oedema opens four doors.",
        "Venous return = gradient + valves + muscle pump + respiratory pump; mobilize, elevate, stockings, hydrate.",
        "MAP ≈ DBP + ⅓ pulse pressure; normal <120/80; crisis >180/120; orthostatic drop ≥20/10 in 3 min.",
        "Baroreceptors act in seconds, RAAS/ADH/aldosterone in hours–days; hypertension is silent until it strikes.",
        "Technique rules: rest, position, cuff size (small cuff = falsely high), both arms first, document everything.",
      ],
      quiz: {
        questionIds: ["NG-MOD-AP2-007"],
        keywords: ["artery", "arteriole", "capillary", "vein", "valves", "Starling", "oedema", "venous return", "DVT", "blood pressure", "MAP", "Korotkoff", "baroreceptor", "RAAS", "hypertension"],
        categories: ["fluid-electrolyte"],
      },
    },
    {
      slug: "circulation-routes-shock-and-lymphatics",
      title: "Circulation routes, shock and the lymphatics",
      minutes: 20,
      objectives: [
        "Describe the cerebral, hepatic portal and fetal circulations with their clinical points.",
        "Define shock and compare its four types with causes and management.",
        "Recognize compensated versus decompensated shock at the bedside.",
        "Describe lymphatic drainage, nodes, spleen and thymus, and read lymphoedema and nodes.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Special routes: brain, liver, fetus",
          paragraphs: [
            "Three circulations break the simple loop. <strong>Cerebral:</strong> the brain takes 15% of output with zero storage — the <strong>Circle of Willis</strong> joins carotids and vertebrals so one blocked route need not stroke the patient; autoregulation holds flow steady across MAP ~60–150, beyond which ischaemia (low) or encephalopathy (high) strikes — head injury nursing (head up 30°, neck straight, avoid suctioning spikes) protects this. <strong>Hepatic portal:</strong> gut blood detours through the <strong>liver</strong> first — nutrients processed, drugs <strong>first-pass</strong> metabolized (why some drugs can't survive swallowing), toxins cleared; portal hypertension (cirrhosis) backs up into <strong>varices</strong> (rupture = catastrophic bleed), <strong>ascites</strong> and <strong>haemorrhoids</strong>. <strong>Fetal:</strong> lungs and gut bypassed — <strong>ductus venosus</strong> (umbilical vein → IVC), <strong>foramen ovale</strong> (RA → LA), <strong>ductus arteriosus</strong> (pulmonary → aorta); at birth, cord clamping + first breath flip pressures and all three <strong>close</strong> — failure means <strong>PDA, septal mixing and persistent pulmonary hypertension</strong>, the midwife's cyanosis-that-won't-pink drill.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0019.svg",
          alt: "Shock: four types and the ladder. Hypovolaemic (tank empty: bleed, burns, vomit/diarrhoea) needs fluids, blood and stopping the loss. Cardiogenic (pump failed: MI, arrhythmia) needs sitting up, oxygen and no blind fluids. Distributive (pipes dilated: sepsis, anaphylaxis, neurogenic) needs cause treatment with antibiotics or adrenaline. Obstructive (flow blocked: tamponade, massive PE, tension pneumothorax) needs the cause relieved. Early compensated shock: tachycardia, tachypnoea, anxiety, cool peripheries, narrow pulse pressure, falling urine — with BP still normal. Late decompensated: hypotension, confusion, cold clammy mottled skin, anuria, arrhythmias. Hypotension is late; escalate on early signs.",
          caption: "Four tanks-and-pumps failures, one ladder — and hypotension is already late.",
        },
        {
          type: "text",
          heading: "Shock: cells starving, perfusion failing",
          paragraphs: [
            "Shock is <strong>inadequate tissue perfusion</strong> — cells starving whatever the BP reads. <strong>Hypovolaemic</strong> (tank empty: bleed, burns, vomit/diarrhoea, DKA, third-spacing): stop the loss, <strong>fluids and blood</strong>, keep warm. <strong>Cardiogenic</strong> (pump failed: MI, arrhythmia, valve rupture): <strong>sit up, oxygen, diuretics/nitrates/inotropes per protocol — fluids kill here</strong>. <strong>Distributive</strong> (pipes dilated, tank relatively empty): <strong>septic</strong> (bundle: cultures, <strong>broad-spectrum antibiotics within the hour</strong>, fluids, lactate, urine output, source control), <strong>anaphylactic</strong> (<strong>IM adrenaline thigh STAT</strong>, airway, fluids, watch the biphasic rebound), <strong>neurogenic</strong> (warm + bradycardic — the only shock that doesn't tachycard; fluids + pressors + warming). <strong>Obstructive</strong> (flow blocked: tamponade, massive PE, tension pneumothorax): <strong>relieve the obstruction</strong> (pericardiocentesis, lysis, needle decompression) — fluids alone fail. Stages run <strong>compensated → decompensated → irreversible</strong>: catch it on heart rate, respiratory rate, refill, mentation, pulse pressure and <strong>urine output</strong> while the BP still lies normal.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0081.svg",
          alt: "Bank diagram of the lymphatic system: drainage routes, nodes, spleen, thymus and tonsils.",
          caption: "The drainage and defence network — from the question-bank diagram set.",
        },
        {
          type: "text",
          heading: "Lymphatics: drains, filters, schools",
          paragraphs: [
            "<strong>Lymphatics</strong> return the ~3 L/day Starling leaves behind, absorb gut fats (lacteals), and ferry antigens to <strong>nodes</strong> — filters packed with lymphocytes that swell battling infection (tender, mobile, small = fighting; <strong>hard, fixed, growing, painless + night sweats/weight loss = refer urgently</strong>). <strong>Spleen</strong> filters blood, stores platelets, fights encapsulated bacteria — asplenia (sickle cell autoinfarction included) needs vaccines + fever-is-emergency teaching. <strong>Thymus</strong> schools T-cells (big in children, fatty by old age); <strong>tonsils, adenoids, appendix, Peyer's patches (MALT)</strong> guard the entrances. <strong>Immunity</strong> splits <strong>innate</strong> (born ready: barriers, phagocytes, inflammation, fever, NK cells) and <strong>adaptive</strong> (learned: B-cell antibodies + T-cell killers, memory = vaccines work) — active (you make it: infection, vaccines) versus passive (you borrow it: placenta, breast milk, immunoglobulin). <strong>Lymphoedema</strong> (filariasis, post-mastectomy, tumour, post-radiation) is firm, non-pitting, limb-shaped with thickened skin — elevate, compress per protocol, meticulous skin care (cellulitis strikes easily), never cannulate or take BP on the at-risk limb.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Think sepsis: the six that summon the bundle",
          body: "New confusion, respiratory rate ≥25, systolic ≤100, heart rate >91, not passed urine in 18 hours (or <0.5 mL/kg/h catheterized), mottled/ashen/cyanotic skin — with suspected infection, ANY of these triggers blood cultures, lactate, broad-spectrum antibiotics within the hour, fluids, oxygen and urine-output monitoring. Document the time antibiotics were due and given: every hour of delay raises mortality. Sepsis in elders and neonates whispers (confusion, falls, poor feeding, hypothermia) — listen for the whisper.",
        },
      ],
      keyPoints: [
        "Circle of Willis insures the brain; hepatic portal first-passes drugs and backs up into varices/ascites; fetal shunts close at birth.",
        "Shock = failed perfusion: hypovolaemic (fill + stop loss), cardiogenic (sit up, no blind fluids), distributive (treat cause), obstructive (relieve it).",
        "Compensated: tachycardia, tachypnoea, cool peripheries, narrow pulse pressure, falling urine — BP still normal. Hypotension is late.",
        "Sepsis bundle within the hour; anaphylaxis = IM adrenaline thigh STAT; neurogenic is warm + bradycardic.",
        "Lymphatics drain 3 L/day; nodes filter (hard/fixed/growing = refer); spleen needs vaccine + fever teaching if absent.",
        "Innate (born) vs adaptive (learned); active (made) vs passive (borrowed); lymphoedema: elevate, compress, protect skin, never cannulate.",
      ],
      quiz: {
        questionIds: ["NG-MOD-AP2-008","NG-MOD-AP2-009"],
        keywords: ["circulation", "Circle of Willis", "hepatic portal", "fetal circulation", "shock", "hypovolaemic", "cardiogenic", "sepsis", "anaphylaxis", "adrenaline", "lymphatic", "nodes", "spleen", "immunity", "lymphoedema"],
        categories: ["fluid-electrolyte"],
      },
    },
  ],
};
