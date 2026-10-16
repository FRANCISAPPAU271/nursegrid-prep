import type { AuthoredQuestion } from "./authored-bank";

export const AP3_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-AP3-001",
    categorySlug: "med-surg",
    stem: "A client who has been taking high-dose oral Prednisone (40 mg daily) for rheumatoid arthritis for 6 months abruptly discontinues the medication without tapering. Two days later, the client presents in the emergency department with profound weakness, vomiting, hypotension (BP 76/40 mmHg), and hypoglycemia. What endocrine negative feedback mechanism explains this acute adrenal crisis?",
    choices: [
      {
        id: "a",
        text: "Chronic exogenous glucocorticoid administration suppressed hypothalamic Corticotropin-Releasing Hormone (CRH) and anterior pituitary Adrenocorticotropic Hormone (ACTH), causing bilateral adrenal cortex atrophy; abrupt cessation leaves the client without endogenous cortisol to maintain vascular tone and gluconeogenesis",
      },
      {
        id: "b",
        text: "Prednisone destroyed the pancreas, completely halting glucagon and insulin production",
      },
      {
        id: "c",
        text: "The thyroid gland doubled its hormone production, consuming all systemic cortisol",
      },
      {
        id: "d",
        text: "Exogenous steroids permanently convert adrenal glands into ovarian tissue",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The hypothalamic-pituitary-adrenal (HPA) axis functions under strict negative feedback. When high levels of systemic glucocorticoids are present, they signal the hypothalamus to suppress CRH and the anterior pituitary to suppress ACTH. Over weeks of therapeutic glucocorticoid therapy, lack of trophic ACTH stimulation leads to progressive disuse atrophy of the adrenal cortex (specifically the zona fasciculata and zona reticularis). If exogenous steroids are abruptly stopped rather than gradually tapered, the atrophic adrenal cortex cannot immediately resume cortisol synthesis. The resulting acute secondary adrenal insufficiency (Addisonian crisis) causes vascular collapse (cortisol is permissive for catecholamine vasoconstriction), hypoglycemia (loss of cortisol-stimulated gluconeogenesis), nausea, vomiting, and distributive shock. Option a correctly identifies this endocrine mechanism.",
    strategy: "Endocrine physiology: Exogenous glucocorticoids suppress CRH and ACTH, causing adrenal atrophy. Abrupt cessation triggers acute adrenal crisis (hypotension, hypoglycemia, shock).",
    difficulty: "easy",
    tags: ["anatomy-physiology", "hpa-axis", "adrenal-crisis", "glucocorticoid-withdrawal", "negative-feedback"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-002",
    categorySlug: "med-surg",
    stem: "A client recovering from transsphenoidal hypophysectomy develops profound polyuria (excreting 600 mL of clear urine per hour), intense polydipsia, severe hypernatremia (serum sodium 158 mEq/L), and a low urine specific gravity of 1.002. What neuroendocrine pathology has occurred?",
    choices: [
      {
        id: "a",
        text: "Syndrome of Inappropriate Antidiuretic Hormone (SIADH) causing excessive water retention",
      },
      {
        id: "b",
        text: "Central Diabetes Insipidus (DI) resulting from surgical trauma to the posterior pituitary or hypothalamic tracts, eliminating Antidiuretic Hormone (ADH / Vasopressin) secretion, preventing water reabsorption via aquaporin channels in renal collecting ducts",
      },
      {
        id: "c",
        text: "Acute renal vein thrombosis preventing all glomerular filtration",
      },
      {
        id: "d",
        text: "Primary hyperparathyroidism triggering massive calcium-induced diuresis",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Antidiuretic Hormone (ADH, also known as arginine vasopressin) is synthesized by supraoptic and paraventricular nuclei of the hypothalamus and transported axonally to the posterior pituitary (neurohypophysis) for storage and release. ADH acts on V2 receptors on the basolateral membrane of renal medullary collecting duct principal cells, triggering cAMP-mediated exocytic insertion of Aquaporin-2 water channels into the apical membrane, which allows free water reabsorption into the hypertonic medullary interstitium. Surgical damage to the posterior pituitary stalk during hypophysectomy causes Central Diabetes Insipidus. Without ADH, the collecting ducts remain water-impermeable, causing massive, unabated excretion of dilute urine (polyuria, low urine specific gravity < 1.005, urine osmolality < 200 mOsm/kg), systemic hemoconcentration, and hypernatremia (Na > 145 mEq/L). SIADH (a) causes water retention and dilutional hyponatremia. Option b is correct.",
    strategy: "Posterior pituitary physiology: ADH inserts aquaporin-2 channels to reabsorb water. Central DI = lack of ADH -> massive dilute polyuria (low specific gravity) and hypernatremia.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "diabetes-insipidus", "antidiuretic-hormone", "posterior-pituitary", "aquaporins"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-003",
    categorySlug: "med-surg",
    stem: "A 45-year-old client presents with severe episodic pounding headaches, profuse diaphoresis, palpitations, and malignant hypertension (BP 230/125 mmHg). 24-hour urine testing reveals markedly elevated levels of fractionated metanephrines and vanillylmandelic acid (VMA). What adrenal endocrine pathology and histology underlie these findings?",
    choices: [
      {
        id: "a",
        text: "Autoimmune destruction of the adrenal cortex causing severe cortisol deficiency",
      },
      {
        id: "b",
        text: "Benign hyperplasia of the zona glomerulosa producing excess aldosterone",
      },
      {
        id: "c",
        text: "Pheochromocytoma: a neuroendocrine tumor of chromaffin cells in the Adrenal Medulla that autonomously hyper-secretes catecholamines (epinephrine and norepinephrine), massively stimulating alpha-1 and beta-1 adrenergic receptors",
      },
      {
        id: "d",
        text: "Infarction of the pituitary gland eliminating all growth hormone synthesis",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The adrenal gland consists of an outer cortex (derived from mesoderm: zona glomerulosa, fasciculata, reticularis) and an inner ADRENAL MEDULLA (derived from neural crest ectoderm, essentially a modified sympathetic ganglion). Medullary chromaffin cells are innervated by preganglionic sympathetic cholinergic fibers and synthesize catecholamines (roughly 80% epinephrine, 20% norepinephrine). A PHEOCHROMOCYTOMA is a chromaffin cell neuroendocrine tumor that autonomously produces massive, episodic surges of catecholamines. Alpha-1 receptor stimulation causes intense systemic arteriolar vasoconstriction (paroxysmal malignant hypertension), while beta-1 stimulation causes tachycardia and forceful myocardial contractions (palpitations, pounding headache, diaphoresis). Catecholamines are metabolized into metanephrines, normetanephrines, and vanillylmandelic acid (VMA), measured in urine to confirm diagnosis. Option c is correct.",
    strategy: "Adrenal medulla physiology: Chromaffin cells secrete catecholamines (epinephrine/norepinephrine). Pheochromocytoma = chromaffin tumor -> 5 P's (Pressure/HTN, Pain/headache, Perspiration, Palpitations, Pallor).",
    difficulty: "medium",
    tags: ["anatomy-physiology", "pheochromocytoma", "adrenal-medulla", "chromaffin-cells", "catecholamines"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-004",
    categorySlug: "med-surg",
    stem: "In male reproductive physiology, what respective functions do Leydig (interstitial) cells and Sertoli (sustentacular) cells perform within the testes under pituitary gonadotropin control?",
    choices: [
      {
        id: "a",
        text: "Leydig cells synthesize prostate fluid, while Sertoli cells produce urine in the scrotum",
      },
      {
        id: "b",
        text: "Both cell types exist solely to store mature sperm for up to 10 years without dividing",
      },
      {
        id: "c",
        text: "Sertoli cells secrete testosterone, while Leydig cells filter out bacterial pathogens",
      },
      {
        id: "d",
        text: "Under Luteinizing Hormone (LH) stimulation, Leydig cells produce Testosterone; under Follicle-Stimulating Hormone (FSH) stimulation, Sertoli cells form the blood-testis barrier, nourish developing spermatocytes, and secrete androgen-binding protein and inhibin",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Testicular function relies on two distinct cell populations regulated by anterior pituitary gonadotropins: 1) LEYDIG CELLS (interstitial cells located in connective tissue between seminiferous tubules): Stimulated by LUTEINIZING HORMONE (LH), they synthesize and secrete TESTOSTERONE, which promotes spermatogenesis, secondary male sex characteristics, and anabolic metabolism; 2) SERTOLI CELLS (sustentacular 'nurse' cells lining seminiferous tubules): Stimulated by FOLLICLE-STIMULATING HORMONE (FSH) and testosterone, they form tight junctions that create the immunologically vital BLOOD-TESTIS BARRIER (protecting haploid germ cells from autoimmune attack), provide physical and metabolic nourishment to developing spermatogonia, phagocytose excess spermatid cytoplasm, and secrete Androgen-Binding Protein (ABP, maintaining high intratesticular testosterone) and Inhibin B (which provides negative feedback on pituitary FSH). Option d accurately details these roles.",
    strategy: "Male reproductive physiology: LH stimulates Leydig cells -> Testosterone. FSH stimulates Sertoli cells -> Spermatogenesis support & blood-testis barrier.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "leydig-cells", "sertoli-cells", "spermatogenesis", "testosterone"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-005",
    categorySlug: "med-surg",
    stem: "A 68-year-old male client presents with progressive urinary hesitancy, a weak urinary stream, terminal dribbling, nocturia (waking 4 times nightly), and a sensation of incomplete bladder emptying. Digital rectal examination reveals a smooth, symmetrically enlarged, non-tender prostate gland. How does the regional anatomy of the prostate explain these lower urinary tract symptoms (LUTS) in Benign Prostatic Hyperplasia (BPH)?",
    choices: [
      {
        id: "a",
        text: "BPH involves nodular stromal and epithelial hyperplasia primarily in the Transition (periurethral) Zone of the prostate, which directly encircles the prostatic urethra; glandular expansion mechanically compresses the urethral lumen, causing progressive bladder outlet obstruction",
      },
      {
        id: "b",
        text: "BPH causes the ureters to detach from the kidneys and drain directly into the scrotum",
      },
      {
        id: "c",
        text: "The prostate gland moves into the rectum, causing fecal impaction that paralyzes the bladder",
      },
      {
        id: "d",
        text: "BPH involves adenocarcinoma originating exclusively in the peripheral zone of the prostate",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The prostate gland is anatomically divided into zones: 1) TRANSITION ZONE: A central zone comprising roughly 5% of prostate volume that immediately encircles the proximal urethra (prostatic urethra). BENIGN PROSTATIC HYPERPLASIA (BPH) originates almost exclusively in this periurethral transition zone, driven by dihydrotestosterone (DHT). Glandular and stromal proliferation produces nodules that circumferentially compress the prostatic urethra and distort the bladder outlet, producing classic obstructive and irritative symptoms (hesitancy, decreased caliber, straining, post-void dribbling, nocturia, and detrusor hypertrophy/trabeculation); 2) PERIPHERAL ZONE: The largest posterior zone (70% of gland), easily palpated on digital rectal exam, which is the predominant site (70–80%) of prostate adenocarcinoma. Option a correctly details this anatomical distinction.",
    strategy: "Prostate anatomy: BPH originates in the Transition (periurethral) zone -> compresses prostatic urethra -> urinary hesitancy and weak stream. Prostate cancer originates in Peripheral zone.",
    difficulty: "easy",
    tags: ["anatomy-physiology", "bPH", "prostate-anatomy", "transition-zone", "bladder-outlet-obstruction"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-006",
    categorySlug: "med-surg",
    stem: "During a clinical breast examination of a client with a palpable, hard, non-tender upper outer quadrant breast mass, the nurse observes localized skin dimpling and nipple retraction, as well as an area of thickened, pitted skin resembling an orange peel ('peau d'orange'). What anatomical structures have been infiltrated by malignant cells to produce these physical signs?",
    choices: [
      {
        id: "a",
        text: "The pectoralis minor muscle has detached completely from the clavicle",
      },
      {
        id: "b",
        text: "Skin dimpling results from tumor infiltration and shortening of Cooper's suspensory ligaments, while 'peau d'orange' results from tumor emboli occluding dermal lymphatic channels, causing localized cutaneous lymphedema around tethered hair follicles",
      },
      {
        id: "c",
        text: "Lactiferous ducts have turned into bone through ectopic calcification",
      },
      {
        id: "d",
        text: "Subcutaneous adipose tissue has dissolved from lack of dietary vitamin C",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Normal breast architecture consists of glandular lobules and lactiferous ducts embedded in adipose tissue and supported by a fibrous framework called COOPER'S SUSPENSORY LIGAMENTS, which run from the deep pectoral fascia to the overlying dermis: 1) SKIN DIMPLING occurs when an invasive carcinoma invades and tethers these fibrous Cooper's ligaments; fibrous desmoplasia contracts the ligaments, pulling the overlying skin inward; 2) NIPPLE RETRACTION occurs when a subareolar tumor infiltrates and shortens major lactiferous ducts; 3) PEAU D'ORANGE (orange peel sign) is a hallmark of inflammatory breast cancer or advanced tumor infiltration, occurring when malignant cells occlude subdermal lymphatic capillaries. Blocked lymphatic drainage causes intense dermal edema, but because sweat glands and hair follicles remain tethered to the underlying tissue, the swollen skin bulges outward between the tethered pits, creating a pitted orange-skin appearance. Option b correctly correlates anatomy to physical findings.",
    strategy: "Breast anatomy & pathology: Tumor traction on Cooper's ligaments = skin dimpling. Tumor occlusion of dermal lymphatics = peau d'orange (lymphedema with tethered follicles).",
    difficulty: "medium",
    tags: ["anatomy-physiology", "breast-anatomy", "coopers-ligaments", "peau-dorange", "dermal-lymphatics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-007",
    categorySlug: "med-surg",
    stem: "In a regular 28-day ovarian and menstrual cycle, what endocrine event directly triggers ovulation (the rupture of the mature Graafian follicle and release of the secondary oocyte)?",
    choices: [
      {
        id: "a",
        text: "A sharp, sudden drop in oxytocin secretion from the posterior pituitary",
      },
      {
        id: "b",
        text: "Complete cessation of all estrogen synthesis on Day 7 of the cycle",
      },
      {
        id: "c",
        text: "Sustained high estradiol levels produced by the dominant Graafian follicle switch feedback from negative to positive, triggering a massive mid-cycle surge of Luteinizing Hormone (LH) from the anterior pituitary that induces follicle rupture 24–36 hours later",
      },
      {
        id: "d",
        text: "A massive spike in human chorionic gonadotropin secreted by non-pregnant kidneys",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "During the early to mid-follicular phase, growing ovarian follicles secrete estradiol, which exerts classic negative feedback on pituitary FSH and LH. However, by Days 12–13, the dominant Graafian follicle secretes high, sustained levels of estradiol (>200 pg/mL for >48 hours). This high estradiol concentration reaches a critical threshold that paradoxically switches feedback at the hypothalamus and pituitary from negative to POSITIVE. This positive feedback triggers a massive, explosive release of Luteinizing Hormone (the mid-cycle LH surge) and a smaller FSH surge. The LH surge activates proteolytic enzymes (collagenases, plasminogen), degrades the follicular wall, and induces resumption of meiosis I, culminating in follicle rupture and OVULATION (release of the secondary oocyte arrested in metaphase II) roughly 24 to 36 hours after the LH surge onset (Day 14). The ruptured follicle becomes the corpus luteum, secreting progesterone. Option c correctly details this physiology.",
    strategy: "Menstrual cycle: High sustained estradiol triggers the LH SURGE via positive feedback -> induces ovulation (Day 14) and corpus luteum formation.",
    difficulty: "easy",
    tags: ["anatomy-physiology", "ovarian-cycle", "lh-surge", "estrogen-positive-feedback", "ovulation"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-008",
    categorySlug: "med-surg",
    stem: "A 26-year-old female presents with severe unilateral lower quadrant abdominal pain, amenorrhea of 7 weeks, vaginal spotting, and acute left shoulder pain that worsens when lying flat (Kehr's sign). Ultrasound confirms a ruptured Ectopic Tubal Pregnancy. In which anatomical segment of the fallopian tube (oviduct) does normal human fertilisation occur, and what causes the referred shoulder pain?",
    choices: [
      {
        id: "a",
        text: "Fertilisation occurs in the cervix; shoulder pain is caused by cervical nerve fibers synapsing in the arm",
      },
      {
        id: "b",
        text: "Fertilisation occurs in the uterine cavity; shoulder pain is caused by direct aortic rupture",
      },
      {
        id: "c",
        text: "Fertilisation occurs in the vaginal canal; shoulder pain is an anxiety response",
      },
      {
        id: "d",
        text: "Human fertilisation normally occurs in the Ampulla of the fallopian tube; tubal rupture causes hemoperitoneum, and blood pooling under the diaphragm irritates the phrenic nerve (C3–C5), referring pain to the supraclavicular shoulder dermatome (Kehr's sign)",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The fallopian tube consists of four anatomical regions: the infundibulum (with fimbriae), ampulla, isthmus, and interstitial (intramural) segment. The AMPULLA is the widest, longest segment and is the normal physiological site of human fertilisation (sperm capacitation, acrosome reaction, and zygote formation). If previous salpingitis or pelvic inflammatory disease (PID) damages ciliated tubal epithelium, embryo transit is blocked, leading to ampullary ectopic implantation (roughly 70–80% of tubal pregnancies). As the trophoblast erodes tubal vessels, rupture produces acute internal hemorrhage (hemoperitoneum). Intraperitoneal blood pools beneath the hemidiaphragm when the client is supine, irritating sensory fibers of the Phrenic Nerve (spinal roots C3, C4, C5). Because the supraclavicular sensory nerves share the same C3–C4 cervical spinal cord segments, diaphragmatic irritation manifests as referred ipsilateral shoulder tip pain (Kehr's sign). Option d accurately explains both fertilisation and the neuroanatomy of Kehr's sign.",
    strategy: "Reproductive anatomy: Fertilisation occurs in the Ampulla of the fallopian tube. Rupture causes hemoperitoneum -> phrenic nerve irritation (C3-C5) -> referred shoulder pain (Kehr's sign).",
    difficulty: "medium",
    tags: ["anatomy-physiology", "fallopian-tube-ampulla", "ectopic-pregnancy", "phrenic-nerve", "kehrs-sign"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-009",
    categorySlug: "med-surg",
    stem: "A client asks the nurse how Combined Oral Contraceptive Pills (containing synthetic estrogen and progestin) prevent pregnancy. What physiological mechanisms of action explain their contraceptive efficacy?",
    choices: [
      {
        id: "a",
        text: "Exogenous estrogen and progestin suppress pituitary secretion of FSH (preventing follicular recruitment) and LH (preventing the mid-cycle LH surge and ovulation); progestin additionally thickens cervical mucus to impede sperm penetration and alters the endometrium to impair implantation",
      },
      {
        id: "b",
        text: "They act as chemical spermicides that kill all sperm instantly in the vaginal canal",
      },
      {
        id: "c",
        text: "They permanently close the external cervical os with scar tissue",
      },
      {
        id: "d",
        text: "They induce continuous menstruation throughout the entire month",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Combined oral contraceptives (COCs) contain synthetic estrogen (ethinyl estradiol) and a progestin. They prevent conception through multiple synergistic neuroendocrine and reproductive mechanisms: 1) Estrogen exerts negative feedback on the anterior pituitary, suppressing Follicle-Stimulating Hormone (FSH), which prevents ovarian follicle recruitment and selection; 2) Progestin suppresses Luteinizing Hormone (LH) secretion, completely blocking the mid-cycle LH surge and thereby preventing ovulation (the primary mechanism); 3) Progestin thickens cervical mucus, making it hostile and impermeable to ascending spermatozoa; and 4) Progestin creates an atrophic, asynchronous endometrium unfavorable for blastocyst implantation, and slows tubal peristalsis. Option a accurately details these physiological actions.",
    strategy: "Contraceptive pharmacology: Estrogen/progestin suppress pituitary FSH and LH -> blocks follicle development and LH surge (inhibits ovulation) + thickens cervical mucus.",
    difficulty: "easy",
    tags: ["anatomy-physiology", "oral-contraceptives", "lh-fsh-suppression", "cervical-mucus", "contraceptive-mechanism"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-010",
    categorySlug: "med-surg",
    stem: "A primigravid client at 28 weeks of gestation has routine lab results showing: Hemoglobin 10.8 g/dL and Hematocrit 32% (pre-pregnancy values were 13.0 g/dL and 39%). The client is asymptomatic. When the client lies supine for an ultrasound, she suddenly becomes lightheaded, pale, nauseated, and hypotensive (BP 82/48 mmHg); turning to her left side immediately resolves her symptoms. What physiological adaptations of pregnancy explain both the laboratory values and the supine hypotension?",
    choices: [
      {
        id: "a",
        text: "The client has severe internal hemorrhage and ruptured spleen requiring immediate surgery",
      },
      {
        id: "b",
        text: "Plasma volume expands by 40–50% while erythrocyte mass increases by only 20–30%, causing Physiologic Anemia of Pregnancy (hemodilution); the gravid uterus compresses the Inferior Vena Cava when supine, reducing venous return and cardiac output (Supine Hypotensive Syndrome), relieved by left lateral tilt",
      },
      {
        id: "c",
        text: "Pregnancy causes total destruction of the bone marrow red cell precursors",
      },
      {
        id: "d",
        text: "The fetus consumes 90% of maternal blood volume when the mother lies on her back",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Pregnancy induces profound maternal cardiovascular remodeling: 1) PHYSIOLOGIC ANEMIA OF PREGNANCY: Total blood volume increases by ~45%, but plasma volume expands disproportionately (~45–50%) compared to red blood cell mass (~20–30%). This relative hemodilution causes physiological decreases in hemoglobin (normal nadir in 2nd/3rd trimester is >= 10.5 g/dL) and hematocrit (~32–33%), reducing blood viscosity to optimize uteroplacental perfusion; 2) SUPINE HYPOTENSIVE SYNDROME (Vena Cava Syndrome): After 20 weeks, the gravid uterus compresses the Inferior Vena Cava (IVC) and abdominal aorta against the vertebral column when supine. Obstructed venous return drastically decreases right atrial preload, stroke volume, and cardiac output, dropping systemic blood pressure and causing maternal cerebral hypoperfusion (dizziness, diaphoresis) and fetal bradycardia. Tilting the client to the LEFT LATERAL position displaces the uterus off the IVC, instantly restoring venous return and blood pressure. Option b is correct.",
    strategy: "Pregnancy cardiovascular physiology: Plasma expansion > RBC expansion = physiologic hemodilutional anemia. Gravid uterus compresses IVC in supine position -> Supine Hypotensive Syndrome (relieved by left lateral position).",
    difficulty: "medium",
    tags: ["anatomy-physiology", "physiologic-anemia-pregnancy", "supine-hypotensive-syndrome", "maternal-hemodynamics", "inferior-vena-cava"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-011",
    categorySlug: "med-surg",
    stem: "During the second and third trimesters of pregnancy, placental production of Human Placental Lactogen (hPL / human chorionic somatomammotropin) increases dramatically. How does this hormone alter maternal metabolism, and what clinical condition can it precipitate?",
    choices: [
      {
        id: "a",
        text: "hPL increases maternal insulin sensitivity tenfold, causing severe lifelong hypoglycemia",
      },
      {
        id: "b",
        text: "hPL converts maternal cholesterol into gastric acid to dissolve fetal bones",
      },
      {
        id: "c",
        text: "hPL acts as a potent physiological insulin antagonist, inducing maternal peripheral insulin resistance and lipolysis to spare circulating glucose and amino acids for transplacental transport to the growing fetus; in susceptible women unable to mount compensatory hyperinsulinemia, this precipitates Gestational Diabetes Mellitus (GDM)",
      },
      {
        id: "d",
        text: "hPL permanently stops all maternal thyroid hormone synthesis",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Human Placental Lactogen (hPL, also termed human chorionic somatomammotropin [hCS]) is a polypeptide hormone synthesized by the syncytiotrophoblast of the placenta, with secretion peaking in late gestation (weeks 24–28) proportional to placental mass. Functionally, hPL is a diabetogenic hormone: it acts as a competitive insulin antagonist that impairs peripheral glucose uptake in maternal skeletal muscle and adipose tissue while increasing lipolysis (free fatty acids). This physiological maternal insulin resistance serves a vital evolutionary purpose: it elevates maternal postprandial glucose levels, ensuring a continuous concentration gradient for facilitated glucose diffusion (via GLUT1) and amino acid transport across the placenta to meet fetal growth demands. In pregnant women with limited pancreatic beta-cell reserve who cannot triple insulin secretion, this anti-insulin effect results in GESTATIONAL DIABETES MELLITUS (tested routinely at 24–28 weeks). Option c is correct.",
    strategy: "Placental endocrinology: hPL induces maternal insulin resistance to spare glucose for the fetus. Failure of maternal pancreatic compensation causes Gestational Diabetes Mellitus.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "human-placental-lactogen", "hpl", "gestational-diabetes", "placental-endocrinology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-012",
    categorySlug: "med-surg",
    stem: "During active labor, mechanical pressure from the descending fetal presenting part stretches the maternal cervix and lower uterine segment. What neuroendocrine positive feedback reflex (the Ferguson Reflex) sustains and intensifies labor contractions?",
    choices: [
      {
        id: "a",
        text: "Cervical stretch signals the adrenal cortex to dump aldosterone, shutting down uterine blood flow",
      },
      {
        id: "b",
        text: "Stretch receptors trigger the thyroid to secrete calcitonin, relaxing all pelvic muscles",
      },
      {
        id: "c",
        text: "Cervical pressure eliminates all nerve impulses to the brain, causing spinal paralysis",
      },
      {
        id: "d",
        text: "Mechanoreceptors in the cervix transmit sensory impulses up the spinal cord to the paraventricular and supraoptic nuclei of the hypothalamus, stimulating pulsatile release of Oxytocin from the Posterior Pituitary; oxytocin binds to myometrial receptors, generating stronger contractions that further increase cervical stretch in a self-amplifying cascade until delivery",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The Ferguson Reflex is a classic neuroendocrine POSITIVE FEEDBACK loop governing parturition: 1) As uterine contractions push the fetal presenting part into the birth canal, mechanical distension and stretching of the cervix and vaginal wall stimulate sensory stretch receptors; 2) Afferent neural signals travel via pelvic nerves up the anterolateral spinal cord to the hypothalamus (supraoptic and paraventricular nuclei); 3) Hypothalamic magnocellular neurons fire, releasing pulses of OXYTOCIN from the POSTERIOR PITUITARY into systemic circulation; 4) Oxytocin binds to upregulated G-protein coupled oxytocin receptors on myometrial smooth muscle cells, increasing intracellular calcium and triggering more forceful uterine contractions; 5) Stronger contractions force the fetus deeper against the cervix, generating even greater cervical stretch and further oxytocin release. This self-amplifying cycle continues until expulsion of the fetus breaks the mechanical stimulus. Option d accurately charts this reflex.",
    strategy: "Parturition neuroendocrinology: Ferguson reflex = cervical stretch -> hypothalamic sensory signals -> posterior pituitary OXYTOCIN pulsatile release -> stronger myometrial contractions (positive feedback loop).",
    difficulty: "medium",
    tags: ["anatomy-physiology", "ferguson-reflex", "oxytocin", "positive-feedback", "labor-physiology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-013",
    categorySlug: "med-surg",
    stem: "A genetic counselor meets with a couple who are both confirmed carriers of the Sickle Cell trait (heterozygous HbAS). Based on Mendelian autosomal recessive inheritance, what are the statistical probabilities for each pregnancy regarding sickle cell disease status?",
    choices: [
      {
        id: "a",
        text: "25% chance (1 in 4) of having a child with Sickle Cell Disease (HbSS homozygous), 50% chance (2 in 4) of having an asymptomatic carrier child (HbAS heterozygous), and 25% chance (1 in 4) of having a completely unaffected child with normal hemoglobin (HbAA)",
      },
      {
        id: "b",
        text: "100% of their male children will have sickle cell disease, and 100% of daughters will be normal",
      },
      {
        id: "c",
        text: "All children will have sickle cell disease because the sickle gene is dominant over normal hemoglobin",
      },
      {
        id: "d",
        text: "Zero percent risk of having an affected child because carrier traits skip five generations",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Sickle Cell Disease is inherited in an AUTOSOMAL RECESSIVE Mendelian pattern caused by a single point mutation (substitution of valine for glutamic acid at codon 6 of the beta-globin chain on chromosome 11). When both biological parents are asymptomatic heterozygous carriers (HbAS x HbAS), each conception has independent probabilities determined by a Punnett square: 1) 25% probability (1 in 4) of inheriting both mutant alleles (HbSS) and manifesting Sickle Cell Disease; 2) 50% probability (2 in 4) of inheriting one mutant and one normal allele (HbAS) and carrying the asymptomatic Sickle Cell Trait; 3) 25% probability (1 in 4) of inheriting two normal alleles (HbAA) and being completely non-affected and non-carrier. Gender has no influence because the beta-globin gene is located on an autosome (chromosome 11), not a sex chromosome. Option a is correct.",
    strategy: "Genetics: Autosomal recessive carrier parents (Aa x Aa) = 25% affected (aa), 50% carrier (Aa), 25% unaffected non-carrier (AA). Equal distribution in males and females.",
    difficulty: "easy",
    tags: ["anatomy-physiology", "mendelian-genetics", "autosomal-recessive", "sickle-cell-disease", "punnett-square"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-014",
    categorySlug: "med-surg",
    stem: "A mother who is an asymptomatic genetic carrier for Hemophilia A (an X-linked recessive coagulopathy) and a father with normal factor VIII levels have children. What are the genetic transmission risks to their male and female offspring?",
    choices: [
      {
        id: "a",
        text: "All sons will be healthy carriers, and all daughters will suffer severe hemophilia",
      },
      {
        id: "b",
        text: "Each son has a 50% chance of inheriting the mutated maternal X chromosome and manifesting Hemophilia A (because males are hemizygous XY); each daughter has a 50% chance of being an asymptomatic carrier (XHXh) and a 0% chance of manifesting the disease",
      },
      {
        id: "c",
        text: "The father transmits his Y chromosome to daughters, eliminating the disease risk entirely",
      },
      {
        id: "d",
        text: "Hemophilia A is transmitted exclusively through mitochondrial DNA",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Hemophilia A (Factor VIII deficiency) is inherited in an X-LINKED RECESSIVE pattern. The mother is heterozygous (XHXh, where Xh carries the mutation; she is protected by Lyonization/the normal XH allele). The father has normal karyotype (XHY). For each son (XY), the mother contributes either the normal XH or the mutant Xh (50% probability). Because males are HEMIZYGOUS (they have only one X chromosome and a Y chromosome with no factor VIII locus), inheriting the mutant Xh inevitably manifests the disease (50% of sons will have hemophilia A). For each daughter (XX), the father always contributes his normal XH, so no daughter can be homozygous affected (0% risk of manifesting disease); however, each daughter has a 50% chance of inheriting the maternal Xh, becoming an asymptomatic carrier (XHXh). Option b is genetically accurate.",
    strategy: "Genetics: X-linked recessive carrier mother (XHXh) x Normal father (XHY) = 50% of sons affected; 50% of daughters are carriers; 0% daughters affected.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "x-linked-recessive", "hemophilia-a", "hemizygous", "pediatric-genetics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-015",
    categorySlug: "med-surg",
    stem: "Why is the embryonic period (gestational weeks 3 through 8 post-conception) considered the critical window of maximal vulnerability to teratogens, and why is preconception Folic Acid supplementation mandatory before this window closes?",
    choices: [
      {
        id: "a",
        text: "Embryos do not possess any DNA until after the 12th week of pregnancy",
      },
      {
        id: "b",
        text: "Teratogens only cause structural malformations during the fetal bone growth period of the third trimester",
      },
      {
        id: "c",
        text: "Weeks 3 through 8 encompass Organogenesis (when all major organ systems and tissues differentiate and develop from ectoderm, mesoderm, and endoderm); the neural tube closes by Day 28 post-conception, meaning folic acid (400 mcg daily) must be present in maternal tissues preconceptionally to prevent neural tube defects (anencephaly and spina bifida)",
      },
      {
        id: "d",
        text: "Folic acid is used solely to treat maternal post-partum hair loss",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Human embryological development is divided into three distinct phases: 1) Pre-embryonic period (Weeks 1–2): All-or-none phenomenon—teratogenic insults either kill the conceptus or damaged cells are replaced without congenital malformations; 2) EMBRYONIC PERIOD (Weeks 3–8): The period of active ORGANOGENESIS. The primary germ layers (ectoderm, mesoderm, and endoderm) rapidly differentiate into all rudimentary organ systems (cardiovascular, neural, musculoskeletal, craniofacial). Exposure to teratogens during this window produces severe, irreversible major structural congenital malformations; 3) Fetal period (Weeks 9–birth): Growth and functional maturation, where teratogens cause physiological or growth defects rather than gross structural deformities. The NEURAL TUBE closes completely by Day 28 post-conception (often before a woman even realizes she has missed a menstrual period). Preconception folic acid supplementation (400–800 mcg daily) supports nucleotide synthesis and DNA methylation, reducing neural tube defects (spina bifida, anencephaly) by over 70%. Option c is correct.",
    strategy: "Embryology: Weeks 3-8 = Organogenesis (highest teratogenic susceptibility). Neural tube closes by Day 28, requiring preconception folic acid (400 mcg) to prevent NTDs.",
    difficulty: "easy",
    tags: ["anatomy-physiology", "organogenesis", "teratogens", "neural-tube-closure", "folic-acid"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-016",
    categorySlug: "med-surg",
    stem: "A 62-year-old client presents to the emergency room with sudden, severe, boring right eye pain, a frontal headache, nausea, vomiting, blurred vision with colored halos around lights, and an intraocular pressure (IOP) of 58 mmHg (normal 10–21 mmHg). On examination, the cornea is steamy and the right pupil is fixed and mid-dilated. What ocular anatomy and aqueous humor dynamics explain Acute Angle-Closure Glaucoma?",
    choices: [
      {
        id: "a",
        text: "The retina completely detached from the choroid due to vitreous humor liquefaction",
      },
      {
        id: "b",
        text: "Tears cannot drain into the nasolacrimal duct, causing fluid to push inward against the brain",
      },
      {
        id: "c",
        text: "A cataract exploded inside the posterior chamber, releasing lens protein into the blood",
      },
      {
        id: "d",
        text: "Aqueous humor produced by the ciliary body cannot flow through the pupil due to pupillary block; the peripheral iris is pushed forward against the cornea, obliterating the iridocorneal filtration angle and blocking drainage through the trabecular meshwork into the Canal of Schlemm, causing rapid, dangerous spikes in IOP that threaten the optic nerve",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Aqueous humor is continuously secreted by the ciliary body epithelium into the posterior chamber, flows through the pupil into the anterior chamber, and drains out of the eye via the iridocorneal filtration angle through the trabecular meshwork into the CANAL OF SCHLEMM. In clients with an anatomically narrow anterior chamber angle (e.g., hyperopes, older adults with enlarging lenses), pupillary dilation (mydriasis in darkness or from anticholinergics) bunches up the peripheral iris. Pupillary block traps aqueous humor in the posterior chamber, bowing the peripheral iris forward (iris bombé) against the trabecular meshwork. This acute mechanical occlusion blocks aqueous outflow while ciliary production continues, driving intraocular pressure from normal (10–21 mmHg) to extreme heights (>50–60 mmHg). The sudden ocular hypertension produces corneal edema ('steamy' cornea), severe pain, colored halos, and ischemic necrosis of the optic nerve (CN II) with irreversible blindness unless urgently treated with cholinergic miosis (pilocarpine), aqueous suppressants (timolol, acetazolamide), and laser peripheral iridotomy. Option d is correct.",
    strategy: "Ocular anatomy: Aqueous humor drains via trabecular meshwork into Canal of Schlemm. Angle-closure glaucoma = iris bows forward, blocking drainage -> dangerous IOP spike and optic nerve ischemia.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "angle-closure-glaucoma", "aqueous-humor", "canal-of-schlemm", "intraocular-pressure"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-017",
    categorySlug: "med-surg",
    stem: "A nurse is reviewing the histological architecture and neurobiology of the human retina. What functional differences distinguish Rods from Cones regarding photoreception, retinal distribution, and vision quality?",
    choices: [
      {
        id: "a",
        text: "Rods contain Rhodopsin, are concentrated in the peripheral retina, have high light sensitivity for scotopic (dim-light / night) vision and motion detection without color; Cones contain photopsin pigments, are densely packed in the central Fovea Centralis, and provide photopic (bright-light) high visual acuity and trichromatic color vision (red, green, blue)",
      },
      {
        id: "b",
        text: "Rods process high-definition color vision, while cones are completely blind to all light",
      },
      {
        id: "c",
        text: "Rods are found exclusively inside the optic nerve head, where they create the physiological blind spot",
      },
      {
        id: "d",
        text: "Cones synthesize aqueous humor, while rods synthesize vitreous humor",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The neural retina contains two distinct classes of photoreceptor neurons: 1) RODS (~120 million): Concentrated in the peripheral retina, rods contain the visual photopigment RHODOPSIN (requiring Vitamin A). They exhibit high convergent neural wiring (many rods synapse onto one bipolar cell), making them exceptionally sensitive to single photons of light. They mediate SCOTOPIC VISION (dim light, night vision, peripheral motion detection, and shades of gray) but have low spatial resolution and zero color discrimination; 2) CONES (~6 million): Concentrated primarily in the macula lutea and exclusively packed in the FOVEA CENTRALIS (the area of sharpest vision). Cones contain three opsin photopigments sensitive to specific wavelengths (short/blue, medium/green, long/red). With low neural convergence (often a 1:1 ratio with bipolar and ganglion cells), cones mediate PHOTOPIC VISION (bright daylight), high visual acuity (resolving fine details), and full-color vision. Option a accurately details these differences.",
    strategy: "Retinal histology: Rods = Rhodopsin, periphery, dim light/scotopic vision, black/white, high sensitivity. Cones = Color (red/green/blue), central fovea, bright light/photopic vision, high acuity.",
    difficulty: "easy",
    tags: ["anatomy-physiology", "retina", "photoreceptors", "rods-and-cones", "fovea-centralis"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-018",
    categorySlug: "med-surg",
    stem: "A 48-year-old client presents with classic episodic rotational vertigo lasting several hours, fluctuating unilateral low-frequency sensorineural hearing loss, roaring tinnitus, and a sensation of aural fullness in the affected ear. What inner ear anatomy and pathophysiology characterize Ménière's Disease?",
    choices: [
      {
        id: "a",
        text: "Total destruction of the tympanic membrane from chronic water immersion",
      },
      {
        id: "b",
        text: "Endolymphatic Hydrops: excessive accumulation and increased hydrostatic pressure of Endolymph within the membranous labyrinth of the inner ear, distorting cochlear hair cells (causing hearing loss and tinnitus) and semicircular canal ampullae (causing severe vertigo)",
      },
      {
        id: "c",
        text: "Benign calcification of the auditory ossicles (malleus, incus, stapes) fusing to the oval window",
      },
      {
        id: "d",
        text: "Acoustic neuroma occluding the external auditory canal",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The inner ear (labyrinth) consists of a bony labyrinth containing Perilymph (high in Na+, resembling ECF) and an inner membranous labyrinth containing ENDOLYMPH (high in K+, resembling ICF, secreted by the stria vascularis). The membranous labyrinth comprises the Cochlea (hearing transduction via the Organ of Corti) and the Vestibular apparatus (semicircular canals sensing rotational acceleration, and utricle/saccule sensing linear motion and gravity). In MÉNIÈRE'S DISEASE, impaired resorption of endolymph through the endolymphatic sac leads to ENDOLYMPHATIC HYDROPS (dilation and increased fluid pressure within the entire membranous labyrinth). Hydrops causes micro-ruptures of the membrane, mixing high-potassium endolymph with perilymph, which depolarizes and paralyzes vestibulocochlear nerve fibers (CN VIII). Clinically, this manifests as episodic rotational vertigo, fluctuating sensorineural hearing loss, tinnitus, and aural fullness. Option b is correct.",
    strategy: "Inner ear physiology: Ménière's disease = Endolymphatic hydrops (excess endolymph pressure in membranous labyrinth) -> episodic vertigo + fluctuating sensorineural hearing loss + tinnitus.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "inner-ear", "menieres-disease", "endolymphatic-hydrops", "vestibular-system"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-019",
    categorySlug: "med-surg",
    stem: "A client with undiagnosed Graves' disease develops severe Thyroid Storm (thyrotoxic crisis) following an acute systemic infection. Assessment reveals severe hyperpyrexia (temperature 40.8 °C / 105.4 °F), extreme tachycardia (heart rate 174 bpm, atrial fibrillation), profuse diaphoresis, agitation, and high-output heart failure. How do massive concentrations of free triiodothyronine (T3) and thyroxine (T4) produce this hypermetabolic catastrophe at the cellular level?",
    choices: [
      {
        id: "a",
        text: "Thyroid hormones turn into hydrochloric acid inside the bloodstream",
      },
      {
        id: "b",
        text: "Thyroid hormones permanently shut down all cellular oxygen consumption",
      },
      {
        id: "c",
        text: "Thyroid hormones upregulate beta-adrenergic receptor expression in cardiac and vascular tissues and uncouple mitochondrial oxidative phosphorylation, skyrocketing basal metabolic rate, heat production (thermogenesis), and adrenergic sensitivity to circulating catecholamines",
      },
      {
        id: "d",
        text: "Thyroid hormones convert cardiac myocytes into skeletal bone tissue",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Thyroid hormones (T3 and T4) act as nuclear transcription factors regulating basal metabolic rate and cellular protein synthesis across all organ systems: 1) ADRENERGIC RECEPTOR UPREGULATION: T3 massively increases the density and sensitivity of beta-adrenergic receptors in cardiac myocytes and vascular smooth muscle, creating an exaggerated, hyper-responsive state to endogenous catecholamines (manifesting as profound tachycardia, systolic hypertension, atrial fibrillation, and tremors); 2) MITOCHONDRIAL UNCOUPLING & CALORIGENESIS: T3 stimulates the Na+/K+ ATPase pump and induces uncoupling proteins (UCPs) in mitochondria. Instead of storing energy efficiently as ATP, cellular proton gradients dissipate directly as heat (calorigenesis), skyrocketing basal metabolic rate and producing hyperpyrexia (temperatures exceeding 40 °C), profound diaphoresis, and severe dehydration; 3) HIGH-OUTPUT CARDIAC FAILURE: T3-induced vasodilation combined with extreme metabolic oxygen demands increases cardiac output initially, but unrelenting tachyarrhythmias precipitate acute high-output cardiac decompensation. Option c accurately explains this cellular pathophysiology.",
    strategy: "Thyroid physiology: T3/T4 upregulate beta-adrenergic receptors + uncouple mitochondrial phosphorylation -> extreme calorigenesis (hyperpyrexia), hypermetabolism, and adrenergic storm.",
    difficulty: "medium",
    tags: ["anatomy-physiology", "thyroid-storm", "t3-t4-cellular-actions", "calorigenesis", "beta-adrenergic-receptors"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-AP3-020",
    categorySlug: "med-surg",
    stem: "Ten minutes after a normal vaginal delivery, the client experiences sudden, heavy vaginal bleeding that saturates two perineal pads in 10 minutes. On palpation, the nurse notes that the uterine fundus is soft, boggy, and displaced above the umbilicus. What physiological mechanism normally achieves post-placental hemostasis, and why does Uterine Atony produce life-threatening postpartum hemorrhage (PPH)?",
    choices: [
      {
        id: "a",
        text: "Hemostasis relies entirely on maternal shivering to freeze placental blood vessels",
      },
      {
        id: "b",
        text: "The placenta produces clotting factors that seal the vagina shut immediately after birth",
      },
      {
        id: "c",
        text: "Post-placental hemostasis occurs through immediate scar tissue formation that takes 6 months",
      },
      {
        id: "d",
        text: "Following placental detachment, sheared maternal spiral arterioles (carrying ~500–700 mL/min of blood) must be mechanically compressed and clamped shut by vigorous contraction of interlacing, criss-crossing myometrial muscle fibers ('living ligatures'); uterine atony represents failure of these myometrial fibers to contract, allowing massive, unabated maternal hemorrhage from the placental bed",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "At term, the uteroplacental circulation receives approximately 10% to 15% of total maternal cardiac output (roughly 500 to 700 mL of blood per minute). When the placenta detaches from the uterine wall, dozens of high-flow, low-resistance maternal spiral arterioles are sheared open. The body achieves immediate hemostasis NOT via the clotting cascade (which is far too slow to prevent exsanguination within minutes), but through mechanical vasoconstriction: the myometrium consists of three interwoven muscular layers, with the middle layer arranged in a criss-crossing, figure-of-eight network. As the uterus contracts down in response to endogenous oxytocin release, these interlacing myometrial fibers act as 'LIVING LIGATURES,' physically constricting and clamping down on the open spiral arteries like biological tourniquets. In UTERINE ATONY (the cause of >80% of primary PPH), myometrial smooth muscle fails to contract (often due to prolonged labor, uterine overdistension, or bladder distension), leaving spiral vessels wide open to hemorrhage. Immediate fundal massage and uterotonics (oxytocin) stimulate myometrial contractions to halt bleeding. Option d is correct.",
    strategy: "Postpartum hemostasis: Middle myometrial muscle fibers ('living ligatures') contract in figure-8 pattern to mechanically clamp severed spiral arterioles. Uterine atony fails to clamp them -> massive PPH.",
    difficulty: "easy",
    tags: ["anatomy-physiology", "uterine-atony", "postpartum-hemorrhage", "living-ligatures", "myometrial-contraction"],
    isFree: true,
  },
];
