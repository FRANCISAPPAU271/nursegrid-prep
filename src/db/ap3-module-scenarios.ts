import type { AuthoredQuestion } from "./authored-bank";

export const AP3_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-AP3-001",
    categorySlug: "med-surg",
    stem: "A client who has been taking high-dose oral Prednisone (40 mg daily) for rheumatoid arthritis for 6 months abruptly discontinues the medication without tapering. Two days later, the client presents in the emergency department with profound weakness, vomiting, hypotension (BP 76/40 mmHg), and hypoglycemia. What endocrine negative feedback mechanism explains this acute adrenal crisis?",
    choices: [
      {
        id: "a",
        text: "Prednisone blocked the adrenal cortisol receptors, so endogenous cortisol could not act despite normal secretion",
      },
      {
        id: "b",
        text: "The pituitary continued to secrete ACTH throughout treatment, and the cortex exhausted its stored cortisol",
      },
      {
        id: "c",
        text: "Prednisone induced hepatic enzymes that clear cortisol so rapidly that levels fall as soon as a dose is missed",
      },
      {
        id: "d",
        text: "Sustained exogenous cortisol suppressed CRH and ACTH, so the adrenal cortex atrophied and cannot respond when the drug stops",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — “Sustained exogenous cortisol suppressed CRH and ACTH, so the adrenal cortex atrophied and cannot respond when the drug stops”. The hypothalamic-pituitary-adrenal (HPA) axis functions under strict negative feedback. When high levels of systemic glucocorticoids are present, they signal the hypothalamus to suppress CRH and the anterior pituitary to suppress ACTH. Over weeks of therapeutic glucocorticoid therapy, lack of trophic ACTH stimulation leads to progressive disuse atrophy of the adrenal cortex (specifically the zona fasciculata and zona reticularis). If exogenous steroids are abruptly stopped rather than gradually tapered, the atrophic adrenal cortex cannot immediately resume cortisol synthesis. The resulting acute secondary adrenal insufficiency (Addisonian crisis) causes vascular collapse (cortisol is permissive for catecholamine vasoconstriction), hypoglycemia (loss of cortisol-stimulated gluconeogenesis), nausea, vomiting, and distributive shock. Why the other options fail: option a invents pancreatic destruction, and the pancreas is not the site of cortisol production. Option b blames the thyroid for consuming cortisol, which no thyroid hormone does. Option c describes one gland becoming another, which does not happen; atrophy is the mechanism, not metamorphosis.",
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
        text: "Central diabetes insipidus from damage to the posterior pituitary, so ADH is not secreted and the ducts cannot reabsorb water",
      },
      {
        id: "b",
        text: "SIADH from unregulated ADH release by the injured pituitary, retaining water and concentrating the urine",
      },
      {
        id: "c",
        text: "Nephrogenic diabetes insipidus from contrast used in theatre, so the collecting ducts ignore normal ADH levels",
      },
      {
        id: "d",
        text: "Primary hyperparathyroidism after surgery, with calcium-driven osmotic diuresis and a dilute urine",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — “Central diabetes insipidus from damage to the posterior pituitary, so ADH is not secreted and the ducts cannot reabsorb water”. Antidiuretic Hormone (ADH, also known as arginine vasopressin) is synthesized by supraoptic and paraventricular nuclei of the hypothalamus and transported axonally to the posterior pituitary (neurohypophysis) for storage and release. ADH acts on V2 receptors on the basolateral membrane of renal medullary collecting duct principal cells, triggering cAMP-mediated exocytic insertion of Aquaporin-2 water channels into the apical membrane, which allows free water reabsorption into the hypertonic medullary interstitium. Surgical damage to the posterior pituitary stalk during hypophysectomy causes Central Diabetes Insipidus. Without ADH, the collecting ducts remain water-impermeable, causing massive, unabated excretion of dilute urine (polyuria, low urine specific gravity < 1.005, urine osmolality < 200 mOsm/kg), systemic hemoconcentration, and hypernatremia (Na > 145 mEq/L). SIADH causes water retention and dilutional hyponatremia. Why the other options fail: option b reverses the physiology, because SIADH concentrates the urine and lowers the sodium rather than producing 600 mL/hour of dilute urine at a sodium of 158. Option c would stop urine altogether as filtration fails, not give a specific gravity of 1.002. Option d would give hypercalcaemia and a milder diuresis, not this abrupt postoperative picture.",
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
        text: "Autoimmune adrenalitis destroying the cortex, so cortisol falls and the pituitary drives a compensating catecholamine surge",
      },
      {
        id: "b",
        text: "Pheochromocytoma: a chromaffin-cell tumour of the adrenal medulla that autonomously secretes catecholamines",
      },
      {
        id: "c",
        text: "Aldosterone-secreting adenoma of the zona glomerulosa, with secondary catecholamine release from volume depletion",
      },
      {
        id: "d",
        text: "Pituitary infarction with loss of ACTH, leaving the medulla unopposed and producing episodic hypertension",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — “Pheochromocytoma: a chromaffin-cell tumour of the adrenal medulla that autonomously secretes catecholamines”. The adrenal gland consists of an outer cortex (derived from mesoderm: zona glomerulosa, fasciculata, reticularis) and an inner ADRENAL MEDULLA (derived from neural crest ectoderm, essentially a modified sympathetic ganglion). Medullary chromaffin cells are innervated by preganglionic sympathetic cholinergic fibers and synthesize catecholamines (roughly 80% epinephrine, 20% norepinephrine). A PHEOCHROMOCYTOMA is a chromaffin cell neuroendocrine tumor that autonomously produces massive, episodic surges of catecholamines. Alpha-1 receptor stimulation causes intense systemic arteriolar vasoconstriction (paroxysmal malignant hypertension), while beta-1 stimulation causes tachycardia and forceful myocardial contractions (palpitations, pounding headache, diaphoresis). Catecholamines are metabolized into metanephrines, normetanephrines, and vanillylmandelic acid (VMA), measured in urine to confirm diagnosis. Why the other options fail: option a gives cortisol deficiency, which produces hypotension and hyperkalaemia rather than paroxysmal hypertension with raised metanephrines. Option c gives aldosterone excess, which produces hypertension with hypokalaemia and suppressed renin, not episodic headache with diaphoresis. Option d removes ACTH and cannot raise catecholamines.",
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
        text: "Leydig cells produce seminal fluid under FSH, and Sertoli cells carry sperm to the epididymis under LH",
      },
      {
        id: "b",
        text: "LH drives Leydig cells to make testosterone; FSH drives Sertoli cells to nourish sperm, form the blood-testis barrier and secrete inhibin",
      },
      {
        id: "c",
        text: "Both cell types are stimulated by testosterone alone, and neither responds to pituitary gonadotropins",
      },
      {
        id: "d",
        text: "Sertoli cells secrete testosterone under LH, and Leydig cells form the blood-testis barrier under FSH",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — “LH drives Leydig cells to make testosterone; FSH drives Sertoli cells to nourish sperm, form the blood-testis barrier and secrete inhibin”. Testicular function relies on two distinct cell populations regulated by anterior pituitary gonadotropins: 1) LEYDIG CELLS (interstitial cells located in connective tissue between seminiferous tubules): Stimulated by LUTEINIZING HORMONE (LH), they synthesize and secrete TESTOSTERONE, which promotes spermatogenesis, secondary male sex characteristics, and anabolic metabolism; 2) SERTOLI CELLS (sustentacular 'nurse' cells lining seminiferous tubules): Stimulated by FOLLICLE-STIMULATING HORMONE (FSH) and testosterone, they form tight junctions that create the immunologically vital BLOOD-TESTIS BARRIER (protecting haploid germ cells from autoimmune attack), provide physical and metabolic nourishment to developing spermatogonia, phagocytose excess spermatid cytoplasm, and secrete Androgen-Binding Protein (ABP, maintaining high intratesticular testosterone) and Inhibin B (which provides negative feedback on pituitary FSH). Why the other options fail: option a assigns prostate fluid to Leydig cells and urine to Sertoli cells, neither of which is a testicular function. Option c denies both the division of labour and the pituitary control that drives it. Option d swaps the two cells and their tropic hormones, which is the commonest error in this item.",
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
        text: "Hyperplasia of the transition zone that encircles the prostatic urethra, compressing the outlet as the nodules enlarge",
      },
      {
        id: "b",
        text: "Hyperplasia of the peripheral zone, which surrounds the rectum and narrows the urethra from behind",
      },
      {
        id: "c",
        text: "Hypertrophy of the detrusor muscle alone, with no change in the gland and no fixed obstruction",
      },
      {
        id: "d",
        text: "Adenocarcinoma of the central zone invading the bladder neck and producing a smooth, non-tender gland",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — “Hyperplasia of the transition zone that encircles the prostatic urethra, compressing the outlet as the nodules enlarge”. The prostate gland is anatomically divided into zones: 1) TRANSITION ZONE: A central zone comprising roughly 5% of prostate volume that immediately encircles the proximal urethra (prostatic urethra). BENIGN PROSTATIC HYPERPLASIA (BPH) originates almost exclusively in this periurethral transition zone, driven by dihydrotestosterone (DHT). Glandular and stromal proliferation produces nodules that circumferentially compress the prostatic urethra and distort the bladder outlet, producing classic obstructive and irritative symptoms (hesitancy, decreased caliber, straining, post-void dribbling, nocturia, and detrusor hypertrophy/trabeculation); 2) PERIPHERAL ZONE: The largest posterior zone (70% of gland), easily palpated on digital rectal exam, which is the predominant site (70–80%) of prostate adenocarcinoma. Why the other options fail: option b puts the hyperplasia in the peripheral zone, which is the site of carcinoma and does not encircle the urethra. Option c blames the detrusor alone, which cannot explain a smooth symmetrically enlarged gland on examination. Option d describes cancer, which would feel irregular and hard rather than smooth and non-tender.",
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
        text: "The pectoralis fascia and the skin over it, so the muscle pulls the skin inward when the arm moves",
      },
      {
        id: "b",
        text: "Cooper ligaments tethered by tumour cause the dimpling and retraction; blocked dermal lymphatics cause the peau d'orange",
      },
      {
        id: "c",
        text: "Lactiferous ducts obstructed by secretions, so the duct dilates and pits the skin over the areola",
      },
      {
        id: "d",
        text: "Subcutaneous fat replaced by fibrous tissue after radiotherapy, which tethers the skin in a small area",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — “Cooper ligaments tethered by tumour cause the dimpling and retraction; blocked dermal lymphatics cause the peau d'orange”. Normal breast architecture consists of glandular lobules and lactiferous ducts embedded in adipose tissue and supported by a fibrous framework called COOPER'S SUSPENSORY LIGAMENTS, which run from the deep pectoral fascia to the overlying dermis: 1) SKIN DIMPLING occurs when an invasive carcinoma invades and tethers these fibrous Cooper's ligaments; fibrous desmoplasia contracts the ligaments, pulling the overlying skin inward; 2) NIPPLE RETRACTION occurs when a subareolar tumor infiltrates and shortens major lactiferous ducts; 3) PEAU D'ORANGE (orange peel sign) is a hallmark of inflammatory breast cancer or advanced tumor infiltration, occurring when malignant cells occlude subdermal lymphatic capillaries. Blocked lymphatic drainage causes intense dermal edema, but because sweat glands and hair follicles remain tethered to the underlying tissue, the swollen skin bulges outward between the tethered pits, creating a pitted orange-skin appearance. Why the other options fail: option a detaches a muscle, which does not produce dimpling, retraction or pitting. Option c turns ducts into bone, which does not occur. Option d invokes scurvy, which gives perifollicular haemorrhage and poor wound healing, not a fixed mass with peau d'orange over it.",
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
        text: "A sharp fall in progesterone as the corpus luteum regresses releases the oocyte from inhibition",
      },
      {
        id: "b",
        text: "A second, smaller surge of FSH from the anterior pituitary acts directly on the follicle to rupture it",
      },
      {
        id: "c",
        text: "Rising oestradiol from the dominant follicle triggers the mid-cycle LH surge, which ruptures the follicle 24 to 36 hours later",
      },
      {
        id: "d",
        text: "A surge of progesterone from the maturing follicle softens the follicular capsule until it gives way",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — “Rising oestradiol from the dominant follicle triggers the mid-cycle LH surge, which ruptures the follicle 24 to 36 hours later”. During the early to mid-follicular phase, growing ovarian follicles secrete estradiol, which exerts classic negative feedback on pituitary FSH and LH. However, by Days 12–13, the dominant Graafian follicle secretes high, sustained levels of estradiol (>200 pg/mL for >48 hours). This high estradiol concentration reaches a critical threshold that paradoxically switches feedback at the hypothalamus and pituitary from negative to POSITIVE. This positive feedback triggers a massive, explosive release of Luteinizing Hormone (the mid-cycle LH surge) and a smaller FSH surge. The LH surge activates proteolytic enzymes (collagenases, plasminogen), degrades the follicular wall, and induces resumption of meiosis I, culminating in follicle rupture and OVULATION (release of the secondary oocyte arrested in metaphase II) roughly 24 to 36 hours after the LH surge onset (Day 14). The ruptured follicle becomes the corpus luteum, secreting progesterone. Why the other options fail: option a has the corpus luteum regressing before ovulation, which is the wrong end of the cycle. Option b assigns follicle rupture to FSH, when the mid-cycle surge that ruptures it is LH. Option d gives progesterone the surge role, and progesterone rises after ovulation, not before it.",
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
        text: "Fertilisation occurs in the cervix, and shoulder pain comes from cervical nerves that synapse in the arm",
      },
      {
        id: "b",
        text: "Fertilisation occurs in the ampulla; blood under the diaphragm irritates the phrenic nerve (C3-C5), referring pain to the shoulder",
      },
      {
        id: "c",
        text: "Fertilisation occurs in the uterine cavity, and shoulder pain comes from irritation of the aorta",
      },
      {
        id: "d",
        text: "Fertilisation occurs in the ampulla, and shoulder pain is referred from the ovarian plexus to the neck",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — “Fertilisation occurs in the ampulla; blood under the diaphragm irritates the phrenic nerve (C3-C5), referring pain to the shoulder”. The fallopian tube consists of four anatomical regions: the infundibulum (with fimbriae), ampulla, isthmus, and interstitial (intramural) segment. The AMPULLA is the widest, longest segment and is the normal physiological site of human fertilisation (sperm capacitation, acrosome reaction, and zygote formation). If previous salpingitis or pelvic inflammatory disease (PID) damages ciliated tubal epithelium, embryo transit is blocked, leading to ampullary ectopic implantation (roughly 70–80% of tubal pregnancies). As the trophoblast erodes tubal vessels, rupture produces acute internal hemorrhage (hemoperitoneum). Intraperitoneal blood pools beneath the hemidiaphragm when the client is supine, irritating sensory fibers of the Phrenic Nerve (spinal roots C3, C4, C5). Because the supraclavicular sensory nerves share the same C3–C4 cervical spinal cord segments, diaphragmatic irritation manifests as referred ipsilateral shoulder tip pain (Kehr's sign). Why the other options fail: option a puts fertilisation in the cervix and refers pain through cervical nerves, neither of which is anatomically possible. Option c puts fertilisation in the uterine cavity, where implantation occurs but fertilisation does not. Option d has the right site but the wrong pathway, because the shoulder pain comes from the diaphragm through the phrenic nerve, not from the ovarian plexus.",
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
        text: "They act as a chemical spermicide in the vagina, killing sperm before they can reach the cervix",
      },
      {
        id: "b",
        text: "They thicken the cervical mucus and seal the external os with scar tissue after the first cycle",
      },
      {
        id: "c",
        text: "They suppress FSH and LH, blocking recruitment and the LH surge, while progestin thickens mucus and thins the endometrium",
      },
      {
        id: "d",
        text: "They prevent the endometrium from shedding, so a blastocyst cannot implant in a stable lining",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — “They suppress FSH and LH, blocking recruitment and the LH surge, while progestin thickens mucus and thins the endometrium”. Combined oral contraceptives (COCs) contain synthetic estrogen (ethinyl estradiol) and a progestin. They prevent conception through multiple synergistic neuroendocrine and reproductive mechanisms: 1) Estrogen exerts negative feedback on the anterior pituitary, suppressing Follicle-Stimulating Hormone (FSH), which prevents ovarian follicle recruitment and selection; 2) Progestin suppresses Luteinizing Hormone (LH) secretion, completely blocking the mid-cycle LH surge and thereby preventing ovulation (the primary mechanism); 3) Progestin thickens cervical mucus, making it hostile and impermeable to ascending spermatozoa; and 4) Progestin creates an atrophic, asynchronous endometrium unfavorable for blastocyst implantation, and slows tubal peristalsis. Why the other options fail: option a treats a hormonal contraceptive as a spermicide, which would not suppress ovulation or change the endometrium. Option b describes scarring that pills do not cause. Option d reverses the effect on the endometrium, which becomes thin and unsupportive rather than shedding continuously.",
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
        text: "Acute haemorrhage from a concealed abruption, with blood loss enough to drop both haemoglobin and pressure",
      },
      {
        id: "b",
        text: "Marrow suppression by pregnancy hormones, so red cell production falls below the rising plasma volume",
      },
      {
        id: "c",
        text: "Aortocaval compression by the uterus, which also sequesters red cells in the splenic pool and lowers the count",
      },
      {
        id: "d",
        text: "Plasma volume rises more than red cell mass, diluting the haemoglobin; supine, the uterus compresses the vena cava and drops venous return",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — “Plasma volume rises more than red cell mass, diluting the haemoglobin; supine, the uterus compresses the vena cava and drops venous return”. Pregnancy induces profound maternal cardiovascular remodeling: 1) PHYSIOLOGIC ANEMIA OF PREGNANCY: Total blood volume increases by ~45%, but plasma volume expands disproportionately (~45–50%) compared to red blood cell mass (~20–30%). This relative hemodilution causes physiological decreases in hemoglobin (normal nadir in 2nd/3rd trimester is >= 10.5 g/dL) and hematocrit (~32–33%), reducing blood viscosity to optimize uteroplacental perfusion; 2) SUPINE HYPOTENSIVE SYNDROME (Vena Cava Syndrome): After 20 weeks, the gravid uterus compresses the Inferior Vena Cava (IVC) and abdominal aorta against the vertebral column when supine. Obstructed venous return drastically decreases right atrial preload, stroke volume, and cardiac output, dropping systemic blood pressure and causing maternal cerebral hypoperfusion (dizziness, diaphoresis) and fetal bradycardia. Tilting the client to the LEFT LATERAL position displaces the uterus off the IVC, instantly restoring venous return and blood pressure. Why the other options fail: option a explains the haemoglobin with haemorrhage, but not the immediate recovery on turning left. Option b blames marrow suppression, when red cell mass actually rises in pregnancy. Option c invokes splenic sequestration, which does not occur, and still does not explain the dilutional haemoglobin.",
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
        text: "hPL increases maternal insulin sensitivity, so glucose is cleared faster and hypoglycaemia is common in the third trimester",
      },
      {
        id: "b",
        text: "hPL stimulates maternal lipogenesis, so fat stores rise and glucose is spared by reduced hepatic output",
      },
      {
        id: "c",
        text: "hPL antagonises insulin, sparing glucose for the fetus; where beta-cell reserve is short, gestational diabetes follows",
      },
      {
        id: "d",
        text: "hPL blocks placental glucose transfer, so maternal glucose rises while the fetus relies on ketones",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — “hPL antagonises insulin, sparing glucose for the fetus; where beta-cell reserve is short, gestational diabetes follows”. Human Placental Lactogen (hPL, also termed human chorionic somatomammotropin [hCS]) is a polypeptide hormone synthesized by the syncytiotrophoblast of the placenta, with secretion peaking in late gestation (weeks 24–28) proportional to placental mass. Functionally, hPL is a diabetogenic hormone: it acts as a competitive insulin antagonist that impairs peripheral glucose uptake in maternal skeletal muscle and adipose tissue while increasing lipolysis (free fatty acids). This physiological maternal insulin resistance serves a vital evolutionary purpose: it elevates maternal postprandial glucose levels, ensuring a continuous concentration gradient for facilitated glucose diffusion (via GLUT1) and amino acid transport across the placenta to meet fetal growth demands. In pregnant women with limited pancreatic beta-cell reserve who cannot triple insulin secretion, this anti-insulin effect results in GESTATIONAL DIABETES MELLITUS (tested routinely at 24–28 weeks). Why the other options fail: option a reverses the hormone, which raises rather than lowers maternal glucose. Option b assigns lipogenesis, when hPL drives lipolysis. Option d blocks the wrong step, because hPL spares glucose for transfer rather than preventing transfer.",
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
        text: "Cervical stretch signals the hypothalamus to release oxytocin from the posterior pituitary, which strengthens contractions and stretches the cervix further",
      },
      {
        id: "b",
        text: "Cervical stretch triggers a vagal reflex that increases uterine blood flow and strengthens contractions through oxygen delivery",
      },
      {
        id: "c",
        text: "Stretch receptors signal the posterior pituitary to release prostaglandins, which soften the cervix and intensify contractions",
      },
      {
        id: "d",
        text: "Cervical stretch stimulates the adrenal medulla, and circulating adrenaline drives stronger myometrial contractions",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — “Cervical stretch signals the hypothalamus to release oxytocin from the posterior pituitary, which strengthens contractions and stretches the cervix further”. The Ferguson Reflex is a classic neuroendocrine POSITIVE FEEDBACK loop governing parturition: 1) As uterine contractions push the fetal presenting part into the birth canal, mechanical distension and stretching of the cervix and vaginal wall stimulate sensory stretch receptors; 2) Afferent neural signals travel via pelvic nerves up the anterolateral spinal cord to the hypothalamus (supraoptic and paraventricular nuclei); 3) Hypothalamic magnocellular neurons fire, releasing pulses of OXYTOCIN from the POSTERIOR PITUITARY into systemic circulation; 4) Oxytocin binds to upregulated G-protein coupled oxytocin receptors on myometrial smooth muscle cells, increasing intracellular calcium and triggering more forceful uterine contractions; 5) Stronger contractions force the fetus deeper against the cervix, generating even greater cervical stretch and further oxytocin release. This self-amplifying cycle continues until expulsion of the fetus breaks the mechanical stimulus. Why the other options fail: option b sends the reflex through the vagus and oxygen delivery, which is not a positive feedback loop. Option c names prostaglandins, which are local mediators and are not released from the pituitary. Option d recruits the adrenal medulla, and adrenaline is not the oxytocin loop.",
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
        text: "25% carrier, 50% affected and 25% unaffected, because two carrier parents produce mostly affected children",
      },
      {
        id: "b",
        text: "25% homozygous disease, 50% asymptomatic carrier and 25% unaffected, with no difference between sons and daughters",
      },
      {
        id: "c",
        text: "50% affected and 50% unaffected, because one copy of the sickle gene is enough to cause disease",
      },
      {
        id: "d",
        text: "No child can be affected, because each parent carries only one copy and the trait skips a generation",
      },
    ],
    "correctChoiceId": "b",
    rationale:
      "CORRECT (B) — “25% homozygous disease, 50% asymptomatic carrier and 25% unaffected, with no difference between sons and daughters”. Sickle Cell Disease is inherited in an AUTOSOMAL RECESSIVE Mendelian pattern caused by a single point mutation (substitution of valine for glutamic acid at codon 6 of the beta-globin chain on chromosome 11). When both biological parents are asymptomatic heterozygous carriers (HbAS x HbAS), each conception has independent probabilities determined by a Punnett square: 1) 25% probability (1 in 4) of inheriting both mutant alleles (HbSS) and manifesting Sickle Cell Disease; 2) 50% probability (2 in 4) of inheriting one mutant and one normal allele (HbAS) and carrying the asymptomatic Sickle Cell Trait; 3) 25% probability (1 in 4) of inheriting two normal alleles (HbAA) and being completely non-affected and non-carrier. Gender has no influence because the beta-globin gene is located on an autosome (chromosome 11), not a sex chromosome. Why the other options fail: option a inverts the carrier and affected proportions. Option c treats the sickle gene as dominant, which it is not. Option d invents skipping generations, which autosomal recessive inheritance does not do.",
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
        text: "Every son has a 50% chance of disease and every daughter a 50% chance of disease, because both inherit one maternal X",
      },
      {
        id: "b",
        text: "Sons cannot be affected because the father passes a normal Y, and daughters are carriers only",
      },
      {
        id: "c",
        text: "All sons are affected and all daughters are carriers, because the mother has two mutated X chromosomes",
      },
      {
        id: "d",
        text: "Each son has a 50% chance of disease, and each daughter a 50% chance of being a carrier with no disease",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — “Each son has a 50% chance of disease, and each daughter a 50% chance of being a carrier with no disease”. Hemophilia A (Factor VIII deficiency) is inherited in an X-LINKED RECESSIVE pattern. The mother is heterozygous (XHXh, where Xh carries the mutation; she is protected by Lyonization/the normal XH allele). The father has normal karyotype (XHY). For each son (XY), the mother contributes either the normal XH or the mutant Xh (50% probability). Because males are HEMIZYGOUS (they have only one X chromosome and a Y chromosome with no factor VIII locus), inheriting the mutant Xh inevitably manifests the disease (50% of sons will have hemophilia A). For each daughter (XX), the father always contributes his normal XH, so no daughter can be homozygous affected (0% risk of manifesting disease); however, each daughter has a 50% chance of inheriting the maternal Xh, becoming an asymptomatic carrier (XHXh). Why the other options fail: option a gives daughters a 50% chance of disease, but they inherit a normal paternal X and can only be carriers. Option b says sons cannot be affected, yet they inherit the maternal X and half of them will be. Option c gives the mother two mutated X chromosomes, which would make her affected rather than a carrier.",
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
        text: "The fetal period is more vulnerable than the embryonic period, so folate is continued through the third trimester",
      },
      {
        id: "b",
        text: "Weeks 3 to 8 are when the placenta forms, and folate is needed to build the placental villi; the neural tube closes at 12 weeks",
      },
      {
        id: "c",
        text: "Weeks 3 to 8 are organogenesis, and the neural tube closes by day 28, so folate must be present before conception to prevent neural tube defects",
      },
      {
        id: "d",
        text: "Weeks 3 to 8 are when the embryo implants, and folate prevents early miscarriage rather than malformation",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — “Weeks 3 to 8 are organogenesis, and the neural tube closes by day 28, so folate must be present before conception to prevent neural tube defects”. Human embryological development is divided into three distinct phases: 1) Pre-embryonic period (Weeks 1–2): All-or-none phenomenon—teratogenic insults either kill the conceptus or damaged cells are replaced without congenital malformations; 2) EMBRYONIC PERIOD (Weeks 3–8): The period of active ORGANOGENESIS. The primary germ layers (ectoderm, mesoderm, and endoderm) rapidly differentiate into all rudimentary organ systems (cardiovascular, neural, musculoskeletal, craniofacial). Exposure to teratogens during this window produces severe, irreversible major structural congenital malformations; 3) Fetal period (Weeks 9–birth): Growth and functional maturation, where teratogens cause physiological or growth defects rather than gross structural deformities. The NEURAL TUBE closes completely by Day 28 post-conception (often before a woman even realizes she has missed a menstrual period). Preconception folic acid supplementation (400–800 mcg daily) supports nucleotide synthesis and DNA methylation, reducing neural tube defects (spina bifida, anencephaly) by over 70%. Why the other options fail: option a moves the vulnerable window to the third trimester, when the organs are already formed. Option b ties folate to placental villi and puts neural tube closure at 12 weeks, when it closes by day 28. Option d restricts folate to preventing miscarriage, which is not its role here.",
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
        text: "The lens swells and blocks the pupil, so fluid is trapped in the posterior chamber and pushes the vitreous forward",
      },
      {
        id: "b",
        text: "Aqueous humour is overproduced by an inflamed ciliary body, exceeding the drainage capacity of the trabecular meshwork",
      },
      {
        id: "c",
        text: "Aqueous humour cannot drain through the trabecular meshwork because the iris is pushed forward into the angle by pupillary block",
      },
      {
        id: "d",
        text: "The canal of Schlemm collapses from high episcleral venous pressure, so drainage stops even though the angle is open",
      },
    ],
    "correctChoiceId": "c",
    rationale:
      "CORRECT (C) — “Aqueous humour cannot drain through the trabecular meshwork because the iris is pushed forward into the angle by pupillary block”. Aqueous humor is continuously secreted by the ciliary body epithelium into the posterior chamber, flows through the pupil into the anterior chamber, and drains out of the eye via the iridocorneal filtration angle through the trabecular meshwork into the CANAL OF SCHLEMM. In clients with an anatomically narrow anterior chamber angle (e.g., hyperopes, older adults with enlarging lenses), pupillary dilation (mydriasis in darkness or from anticholinergics) bunches up the peripheral iris. Pupillary block traps aqueous humor in the posterior chamber, bowing the peripheral iris forward (iris bombé) against the trabecular meshwork. This acute mechanical occlusion blocks aqueous outflow while ciliary production continues, driving intraocular pressure from normal (10–21 mmHg) to extreme heights (>50–60 mmHg). The sudden ocular hypertension produces corneal edema ('steamy' cornea), severe pain, colored halos, and ischemic necrosis of the optic nerve (CN II) with irreversible blindness unless urgently treated with cholinergic miosis (pilocarpine), aqueous suppressants (timolol, acetazolamide), and laser peripheral iridotomy. Why the other options fail: Overproduction by an inflamed ciliary body is not the mechanism, because outflow is blocked while secretion continues; lens swelling that pushes the vitreous forward misplaces the block, which sits at the pupil and the angle; a collapsed canal of Schlemm with an open angle describes open-angle glaucoma, not this acute attack.",
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
        text: "Rods give high-acuity colour vision in the fovea, while cones are the dim-light receptors spread through the periphery",
      },
      {
        id: "b",
        text: "Rods and cones are evenly distributed, so peripheral and central vision have the same acuity and colour sense",
      },
      {
        id: "c",
        text: "Cones respond to light but rods respond only to colour, so night vision is monochromatic and colourless",
      },
      {
        id: "d",
        text: "Rods carry rhodopsin, dominate the periphery and give dim-light and motion vision without colour; cones fill the fovea and give acuity and colour",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — “Rods carry rhodopsin, dominate the periphery and give dim-light and motion vision without colour; cones fill the fovea and give acuity and colour”. The neural retina contains two distinct classes of photoreceptor neurons: 1) RODS (~120 million): Concentrated in the peripheral retina, rods contain the visual photopigment RHODOPSIN (requiring Vitamin A). They exhibit high convergent neural wiring (many rods synapse onto one bipolar cell), making them exceptionally sensitive to single photons of light. They mediate SCOTOPIC VISION (dim light, night vision, peripheral motion detection, and shades of gray) but have low spatial resolution and zero color discrimination; 2) CONES (~6 million): Concentrated primarily in the macula lutea and exclusively packed in the FOVEA CENTRALIS (the area of sharpest vision). Cones contain three opsin photopigments sensitive to specific wavelengths (short/blue, medium/green, long/red). With low neural convergence (often a 1:1 ratio with bipolar and ganglion cells), cones mediate PHOTOPIC VISION (bright daylight), high visual acuity (resolving fine details), and full-color vision. Why the other options fail: option a swaps the two receptors. Option b flattens the retinal distribution, which would abolish the fovea and the peripheral field together. Option c reverses colour and dim-light function, which belong to cones and rods respectively.",
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
        text: "Ossicular otosclerosis fixes the stapes in the oval window, so sound is not conducted and the pressure builds in the middle ear",
      },
      {
        id: "b",
        text: "Perilymph leaks through a ruptured round window, so the cochlea loses fluid and the canals fire irregularly",
      },
      {
        id: "c",
        text: "A vestibular schwannoma compresses the eighth nerve, producing episodic vertigo with progressive high-frequency loss",
      },
      {
        id: "d",
        text: "Endolymph pressure rises within the membranous labyrinth, distorting hair cells and the ampullae, and producing the attacks",
      },
    ],
    "correctChoiceId": "d",
    rationale:
      "CORRECT (D) — “Endolymph pressure rises within the membranous labyrinth, distorting hair cells and the ampullae, and producing the attacks”. The inner ear (labyrinth) consists of a bony labyrinth containing Perilymph (high in Na+, resembling ECF) and an inner membranous labyrinth containing ENDOLYMPH (high in K+, resembling ICF, secreted by the stria vascularis). The membranous labyrinth comprises the Cochlea (hearing transduction via the Organ of Corti) and the Vestibular apparatus (semicircular canals sensing rotational acceleration, and utricle/saccule sensing linear motion and gravity). In MÉNIÈRE'S DISEASE, impaired resorption of endolymph through the endolymphatic sac leads to ENDOLYMPHATIC HYDROPS (dilation and increased fluid pressure within the entire membranous labyrinth). Hydrops causes micro-ruptures of the membrane, mixing high-potassium endolymph with perilymph, which depolarizes and paralyzes vestibulocochlear nerve fibers (CN VIII). Clinically, this manifests as episodic rotational vertigo, fluctuating sensorineural hearing loss, tinnitus, and aural fullness. Why the other options fail: A perilymph fistula follows trauma or straining and does not give fluctuating hearing loss with aural fullness; a vestibular schwannoma gives progressive unilateral loss with steady rather than episodic vertigo; otosclerosis fixes the stapes and gives progressive conductive loss without hours-long vertigo and roaring tinnitus.",
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
        text: "Thyroid hormones raise beta-adrenergic receptor density and uncouple mitochondrial phosphorylation, so metabolic rate and heat production climb",
      },
      {
        id: "b",
        text: "Thyroid hormones increase peripheral conversion of T4 to reverse T3, which drives the adrenergic surge of the crisis",
      },
      {
        id: "c",
        text: "Thyroid hormones block the sodium-potassium pump, so intracellular sodium rises and the heart rate climbs in compensation",
      },
      {
        id: "d",
        text: "Thyroid hormones bind directly to cardiac myocytes and increase contractility without changing metabolic rate or heat production",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — “Thyroid hormones raise beta-adrenergic receptor density and uncouple mitochondrial phosphorylation, so metabolic rate and heat production climb”. Thyroid hormones (T3 and T4) act as nuclear transcription factors regulating basal metabolic rate and cellular protein synthesis across all organ systems: 1) ADRENERGIC RECEPTOR UPREGULATION: T3 massively increases the density and sensitivity of beta-adrenergic receptors in cardiac myocytes and vascular smooth muscle, creating an exaggerated, hyper-responsive state to endogenous catecholamines (manifesting as profound tachycardia, systolic hypertension, atrial fibrillation, and tremors); 2) MITOCHONDRIAL UNCOUPLING & CALORIGENESIS: T3 stimulates the Na+/K+ ATPase pump and induces uncoupling proteins (UCPs) in mitochondria. Instead of storing energy efficiently as ATP, cellular proton gradients dissipate directly as heat (calorigenesis), skyrocketing basal metabolic rate and producing hyperpyrexia (temperatures exceeding 40 °C), profound diaphoresis, and severe dehydration; 3) HIGH-OUTPUT CARDIAC FAILURE: T3-induced vasodilation combined with extreme metabolic oxygen demands increases cardiac output initially, but unrelenting tachyarrhythmias precipitate acute high-output cardiac decompensation. Why the other options fail: Conversion of T4 to reverse T3 produces an inactive metabolite and cannot drive the adrenergic surge; blocking the sodium-potassium pump is not the mechanism at these concentrations; binding myocytes directly without raising metabolic rate or heat production does not explain the fever and the oxygen demand.",
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
        text: "Contraction of the criss-crossing myometrial fibres compresses the spiral arterioles like living ligatures, and atony leaves them open",
      },
      {
        id: "b",
        text: "The spiral arterioles are sealed by clot in the placental bed, and atony prevents the clot from forming",
      },
      {
        id: "c",
        text: "Haemostasis depends on the cervix closing after delivery, and atony leaves the os open and bleeding",
      },
      {
        id: "d",
        text: "The uterine arteries are kinked at the internal os by contraction, and a boggy uterus cannot kink them",
      },
    ],
    "correctChoiceId": "a",
    rationale:
      "CORRECT (A) — “Contraction of the criss-crossing myometrial fibres compresses the spiral arterioles like living ligatures, and atony leaves them open”. At term, the uteroplacental circulation receives approximately 10% to 15% of total maternal cardiac output (roughly 500 to 700 mL of blood per minute). When the placenta detaches from the uterine wall, dozens of high-flow, low-resistance maternal spiral arterioles are sheared open. The body achieves immediate hemostasis NOT via the clotting cascade (which is far too slow to prevent exsanguination within minutes), but through mechanical vasoconstriction: the myometrium consists of three interwoven muscular layers, with the middle layer arranged in a criss-crossing, figure-of-eight network. As the uterus contracts down in response to endogenous oxytocin release, these interlacing myometrial fibers act as 'LIVING LIGATURES,' physically constricting and clamping down on the open spiral arteries like biological tourniquets. In UTERINE ATONY (the cause of >80% of primary PPH), myometrial smooth muscle fails to contract (often due to prolonged labor, uterine overdistension, or bladder distension), leaving spiral vessels wide open to hemorrhage. Immediate fundal massage and uterotonics (oxytocin) stimulate myometrial contractions to halt bleeding. Why the other options fail: option b relies on clot alone, which cannot seal arterioles carrying 500 to 700 mL a minute without the myometrial clamp. Option c shifts haemostasis to the cervix, which plays no part in it. Option d kinks vessels at the internal os, which is not the mechanism of post-placental haemostasis.",
    strategy: "Postpartum hemostasis: Middle myometrial muscle fibers ('living ligatures') contract in figure-8 pattern to mechanically clamp severed spiral arterioles. Uterine atony fails to clamp them -> massive PPH.",
    difficulty: "easy",
    tags: ["anatomy-physiology", "uterine-atony", "postpartum-hemorrhage", "living-ligatures", "myometrial-contraction"],
    isFree: true,
  },
];
