import type { AuthoredQuestion } from "./authored-bank";

export const GYN_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-GYN-001",
    categorySlug: "maternal-newborn",
    stem: "A 17-year-old unmarried female attends the youth-friendly reproductive health clinic seeking advice regarding vaginal discharge and contraception. She requests that her visit remain strictly confidential. During the consultation, a speculum examination is clinically indicated. What is the nurse's priority ethical and professional conduct?",
    choices: [
      {
        id: "a",
        text: "Ensure auditory and visual privacy, explain the examination procedure thoroughly, obtain her informed consent, offer and document a chaperone, and uphold confidentiality in accordance with national adolescent reproductive health standards",
      },
      {
        id: "b",
        text: "Refuse to examine or counsel the client until her biological parents arrive and give written authorization",
      },
      {
        id: "c",
        text: "Perform the speculum examination with the clinic door ajar and multiple uninvolved observers in the room",
      },
      {
        id: "d",
        text: "Scold the client regarding premarital sexual activity before dispensing barrier contraception",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Under national and international adolescent sexual and reproductive health guidelines, sexually active adolescents have the right to confidential, non-judgmental counseling, screening, and contraceptive services. For an intimate pelvic examination, the nurse must: (1) guarantee visual and auditory privacy; (2) explain the indications, instruments, and sensations to alleviate anxiety; (3) secure the client's voluntary informed consent; and (4) provide and document the presence of an impartial chaperone to protect both client dignity and provider safety.",
    strategy: "Gynaecological examination standards: Privacy + explanation + informed consent + chaperone documentation + non-judgmental adolescent confidentiality.",
    difficulty: "easy",
    tags: ["gynaecology", "ethics", "chaperone", "adolescent-health", "pelvic-examination"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-002",
    categorySlug: "maternal-newborn",
    stem: "During a community cervical cancer screening outreach, the nurse performs Visual Inspection with Acetic Acid (VIA) on a 32-year-old multiparous woman. After applying 3% to 5% dilute acetic acid to the cervix for 1 minute, the nurse visualizes a dense, opaque, well-defined acetowhite lesion with distinct borders touching the squamocolumnar junction (SCJ). How should the nurse interpret and manage this finding?",
    choices: [
      {
        id: "a",
        text: "Interpret as a VIA-positive screen indicative of high-grade precancerous cervical intraepithelial neoplasia; evaluate eligibility for same-day single-visit 'screen-and-treat' (thermal ablation or cryotherapy) or refer for colposcopy/biopsy",
      },
      {
        id: "b",
        text: "Reassure the client that acetowhitening is normal physiological mucus and repeat screening in 10 years",
      },
      {
        id: "c",
        text: "Perform an immediate emergency radical hysterectomy in the rural community outpost",
      },
      {
        id: "d",
        text: "Prescribe oral amoxicillin for 5 days and discharge without further cervical assessment",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "In Visual Inspection with Acetic Acid (VIA), dilute acetic acid dehydrates cells and reversibly coagulates nuclear proteins. Precancerous dysplastic cells (cervical intraepithelial neoplasia, CIN) have high nuclear-to-cytoplasmic ratios, causing them to reflect light and appear dense, opaque, well-demarcated acetowhite lesions adjacent to the squamocolumnar junction (SCJ / transformation zone). Under WHO screen-and-treat guidelines for low-resource settings, eligible VIA-positive lesions are treated immediately with thermal ablation or cryotherapy, or referred for colposcopic biopsy if suspicious for invasive carcinoma.",
    strategy: "VIA screening: Dense, well-defined acetowhite lesions touching the SCJ = VIA-positive -> screen-and-treat (ablation) or colposcopy referral.",
    difficulty: "medium",
    tags: ["gynaecology", "cervical-cancer", "via-screening", "screen-and-treat", "oncology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-003",
    categorySlug: "maternal-newborn",
    stem: "A 35-year-old woman presents with severe menorrhagia (heavy menstrual bleeding lasting 9 days with large clots, soaking 6 pads daily) and fatigue. Pelvic ultrasound reveals two enlarged intramural uterine leiomyomas (fibroids) measuring 6 cm each. Her haemoglobin is 7.8 g/dL. Under the FIGO PALM-COEIN classification system, what structural category does this represent, and what is the initial nursing priority?",
    choices: [
      {
        id: "a",
        text: "Structural etiology: Leiomyoma (PALM - L); prioritize correcting symptomatic iron-deficiency anaemia (oral or parenteral iron therapy) and initiating medical stabilization (tranexamic acid or levonorgestrel IUD)",
      },
      {
        id: "b",
        text: "Non-structural etiology: Coagulopathy (COEIN - C); immediately initiate lifelong plasma exchange",
      },
      {
        id: "c",
        text: "Malignancy (PALM - M); counsel the client for immediate pelvic radiation therapy",
      },
      {
        id: "d",
        text: "Iatrogenic (COEIN - I); advise the client that fibroid bleeding requires no medical treatment or iron therapy",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The FIGO PALM-COEIN system classifies causes of Abnormal Uterine Bleeding (AUB). PALM denotes structural causes: Polyp, Adenomyosis, Leiomyoma (fibroid), and Malignancy/hyperplasia. COEIN denotes non-structural causes: Coagulopathy, Ovulatory dysfunction, Endometrial, Iatrogenic, and Not yet classified. Uterine leiomyomas (L) increase the endometrial surface area and disrupt myometrial contractility, causing menorrhagia and severe secondary microcytic anaemia. Priority nursing care includes correcting anaemia with iron supplementation, administering antifibrinolytics (tranexamic acid during menses) or LNG-IUS, and surgical referral for myomectomy if childbearing is desired.",
    strategy: "PALM-COEIN: Leiomyoma (L) is a structural cause of AUB. Address profound anaemia (Hb 7.8) and medical hemostasis first.",
    difficulty: "medium",
    tags: ["gynaecology", "fibroids", "leiomyoma", "palm-coein", "heavy-menstrual-bleeding"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-004",
    categorySlug: "maternal-newborn",
    stem: "A 24-year-old female presents with irregular periods (oligomenorrhoea, menses every 65 days), facial hirsutism, cystic acne, and a BMI of 31 kg/m². Transvaginal ultrasound demonstrates enlarged ovaries with a 'string-of-pearls' peripheral follicle distribution (>= 20 antral follicles per ovary). Which endocrine and metabolic abnormality is central to this condition (PCOS), and what long-term health risk must the nurse educate her about?",
    choices: [
      {
        id: "a",
        text: "Hyperandrogenism and hyperinsulinaemia/insulin resistance; long-term risks include type 2 diabetes mellitus, cardiovascular disease, and endometrial hyperplasia/carcinoma from chronic unopposed oestrogen",
      },
      {
        id: "b",
        text: "Primary adrenal insufficiency; long-term risk of catastrophic salt-wasting crisis",
      },
      {
        id: "c",
        text: "Severe thyroid storm; long-term risk of high-output cardiac failure within 48 hours",
      },
      {
        id: "d",
        text: "Complete irreversible ovarian destruction requiring bilateral oophorectomy immediately",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Polycystic Ovary Syndrome (PCOS) diagnosed by Rotterdam criteria requires at least 2 of 3 features: (1) oligo/anovulation; (2) clinical or biochemical hyperandrogenism; and (3) polycystic ovarian morphology on ultrasound. Hyperinsulinaemia secondary to peripheral insulin resistance stimulates ovarian theca cell androgen production and decreases sex hormone-binding globulin (SHBG). Chronic anovulation leads to persistent, unopposed oestrogen stimulation of the endometrium (without cyclical progesterone from a corpus luteum), predisposing women to endometrial hyperplasia and adenocarcinoma, as well as metabolic syndrome and type 2 diabetes.",
    strategy: "PCOS pathophysiology: Hyperinsulinaemia drives androgen excess. Chronic anovulation -> unopposed oestrogen -> high risk of endometrial hyperplasia/cancer.",
    difficulty: "medium",
    tags: ["gynaecology", "pcos", "rotterdam-criteria", "insulin-resistance", "endometrial-cancer-risk"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-005",
    categorySlug: "maternal-newborn",
    stem: "A 29-year-old nulliparous woman presents with severe cyclic pelvic pain that begins 2 days prior to menstruation, deep dyspareunia (pain during intercourse), and painful defecation during menses (dyschezia). She has been unable to conceive for 2 years despite regular intercourse. On pelvic examination, there is marked tenderness and nodularity along the uterosacral ligaments. What condition should the nurse suspect?",
    choices: [
      {
        id: "a",
        text: "Endometriosis",
      },
      {
        id: "b",
        text: "Acute appendicitis",
      },
      {
        id: "c",
        text: "Cervical incompetence",
      },
      {
        id: "d",
        text: "Primary dysmenorrhoea",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Endometriosis is characterized by the implantation and proliferation of functional endometrial glands and stroma outside the uterine cavity (most commonly on the ovaries, uterosacral ligaments, pouch of Douglas, and pelvic peritoneum). The classic clinical triad is: (1) secondary dysmenorrhoea; (2) deep dyspareunia; and (3) subfertility/infertility, often accompanied by dyschezia (pain on defecation) and uterosacral nodularity. Primary dysmenorrhoea occurs without pelvic pathology and lacks dyspareunia or nodularity. Definitive diagnosis is established via diagnostic laparoscopy showing 'powder-burn' or 'chocolate' endometriotic lesions.",
    strategy: "Endometriosis triad: Severe cyclic pelvic pain + deep dyspareunia + subfertility/infertility with uterosacral tenderness/nodularity.",
    difficulty: "easy",
    tags: ["gynaecology", "endometriosis", "dyspareunia", "subfertility", "pelvic-pain"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-006",
    categorySlug: "pharmacology-parenteral",
    stem: "A 38-year-old woman comes to the family planning clinic requesting a prescription for combined oral contraceptive pills (COCs). During health history taking, she states that she smokes one pack of cigarettes per day (20 cigarettes/day). According to the WHO / US CDC Medical Eligibility Criteria for Contraceptive Use (MEC), how should the nurse categorize this request?",
    choices: [
      {
        id: "a",
        text: "MEC Category 4 (unacceptable health risk; absolute contraindication); combined hormonal contraceptives are contraindicated due to a markedly elevated risk of myocardial infarction, thromboembolism, and stroke",
      },
      {
        id: "b",
        text: "MEC Category 1 (no restriction); COCs may be safely initiated without limitation",
      },
      {
        id: "c",
        text: "MEC Category 2 (advantages outweigh risks); encourage her to take a double dose of COCs daily",
      },
      {
        id: "d",
        text: "COCs are safe provided she takes them with grape juice",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Under the WHO and CDC Medical Eligibility Criteria (MEC): Category 4 represents an absolute contraindication where health risks outweigh any benefits. Age >= 35 years combined with heavy smoking (>= 15 cigarettes/day) synergistically increases hepatic production of clotting factors and promotes arterial vasospasm/thrombosis, dramatically raising the incidence of fatal myocardial infarction, deep venous thrombosis, pulmonary embolism, and ischaemic stroke. Safe, non-oestrogen alternatives for this client include copper IUD, levonorgestrel IUD, progestogen-only implants, or depot medroxyprogesterone acetate (DMPA).",
    strategy: "Contraceptive eligibility (MEC 4): Oestrogen-containing methods are absolutely contraindicated in women >= 35 who smoke >= 15 cigarettes/day (thrombosis/stroke risk).",
    difficulty: "easy",
    tags: ["gynaecology", "family-planning", "who-mec", "combined-oral-contraceptives", "contraindications"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-007",
    categorySlug: "maternal-newborn",
    stem: "A 21-year-old university student presents to the clinic on Monday morning stating that a condom broke during intercourse on Saturday evening (approximately 38 hours ago). She does not want to become pregnant. Which emergency contraceptive method is the most effective overall, and what oral options are available within this timeframe?",
    choices: [
      {
        id: "a",
        text: "A copper intrauterine device (Cu-IUD) inserted within 5 days is the most effective emergency contraception (> 99% efficacy); oral alternatives within 72 hours include levonorgestrel (1.5 mg) or ulipristal acetate (30 mg within 120 hours)",
      },
      {
        id: "b",
        text: "High-dose oral vitamin C tablets taken every 2 hours for 3 days",
      },
      {
        id: "c",
        text: "Douching with vinegar immediately, followed by vigorous aerobic jumping",
      },
      {
        id: "d",
        text: "No emergency contraceptive exists beyond 12 hours post-coitus; she must wait for menses",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The copper IUD (Cu-IUD) is the most effective method of emergency contraception, with a failure rate of less than 0.1%, and can be inserted up to 5 days (120 hours) after unprotected intercourse (or up to 5 days after the earliest calculated day of ovulation), providing ongoing long-term contraception for up to 10–12 years. If oral options are preferred: levonorgestrel 1.5 mg is licensed up to 72 hours (efficacy decreases with time and higher BMI); ulipristal acetate (30 mg selective progesterone receptor modulator) maintains high efficacy up to 120 hours (5 days) post-coitus.",
    strategy: "Emergency contraception: Copper IUD is the #1 most effective emergency method (up to 5 days / 120 h). Oral LNG up to 72 h; Ulipristal up to 120 h.",
    difficulty: "easy",
    tags: ["gynaecology", "emergency-contraception", "copper-iud", "levonorgestrel", "family-planning"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-008",
    categorySlug: "maternal-newborn",
    stem: "A 27-year-old client has a levonorgestrel-releasing intrauterine system (LNG-IUS) inserted for both contraception and treatment of heavy menstrual bleeding. During pre-discharge counselling, what expected change in bleeding patterns must the nurse emphasize to promote adherence and prevent premature device removal?",
    choices: [
      {
        id: "a",
        text: "Irregular spotting and light bleeding are common and expected during the first 3 to 6 months, after which menstrual flow typically becomes significantly lighter, with many women developing amenorrhoea",
      },
      {
        id: "b",
        text: "Menstrual flow will permanently double in volume every month, requiring weekly blood transfusions",
      },
      {
        id: "c",
        text: "Bleeding will stop instantly today and no blood will ever be seen again",
      },
      {
        id: "d",
        text: "Any spotting during the first month indicates immediate pelvic sepsis requiring emergency laparotomy",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The levonorgestrel-releasing intrauterine system (LNG-IUS) releases local progestogen that induces profound endometrial glandular atrophy. In the initial 3–6 months following insertion, users frequently experience frequent, irregular, light bleeding or spotting as the endometrium thins. By 12 months, overall menstrual blood loss is reduced by >= 90%, and 20–50% of women achieve amenorrhoea. Anticipatory guidance regarding this transient bleeding pattern is the single most effective nursing strategy to prevent client anxiety and premature device discontinuation.",
    strategy: "LNG-IUS counselling: Anticipatory guidance on 3-6 months of benign irregular light spotting, followed by dramatically lighter periods or amenorrhoea.",
    difficulty: "easy",
    tags: ["gynaecology", "larc", "lng-ius", "contraceptive-counselling", "amenorrhoea"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-009",
    categorySlug: "maternal-newborn",
    stem: "A 26-year-old female presents to the emergency room with a 6-week history of amenorrhoea, sudden sharp unilateral right lower quadrant pain, dizziness, and referred right shoulder pain. Blood pressure is 82/48 mmHg, pulse is 128 beats/min, and pelvic exam reveals severe cervical motion tenderness (chandelier sign) and a bulging posterior fornix. What life-threatening condition does the nurse recognize, and what is the immediate intervention?",
    choices: [
      {
        id: "a",
        text: "Ruptured tubal ectopic pregnancy with intra-abdominal haemorrhage and haemoperitoneum; establish two wide-bore IV lines, initiate rapid crystalloid resuscitation, type and cross-match blood, and prepare immediately for emergency exploratory laparoscopy/laparotomy",
      },
      {
        id: "b",
        text: "Mild primary dysmenorrhoea; provide oral paracetamol and discharge with a hot water bottle",
      },
      {
        id: "c",
        text: "Uncomplicated urinary tract infection; obtain a midstream urine specimen and await culture results in 48 hours",
      },
      {
        id: "d",
        text: "Normal early intrauterine pregnancy; advise the client to lie down and return in 2 weeks for routine antenatal booking",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "This clinical picture is diagnostic of a ruptured ectopic pregnancy with massive haemoperitoneum causing hypovolaemic shock. The classic triad consists of amenorrhoea, unilateral abdominal/pelvic pain, and vaginal bleeding. Referred shoulder tip pain (Kehr's sign) occurs when diaphragmatic peritoneum is irritated by pooled blood (innervated by the phrenic nerve, C3–C5). Marked cervical motion tenderness reflects severe peritoneal irritation. Ruptured ectopic pregnancy is a surgical emergency; immediate resuscitation with two large-bore IV cannulae (14–16 gauge), rapid fluid boluses, blood cross-matching, and urgent surgical hemostasis are mandatory to prevent maternal exsanguination.",
    strategy: "Ruptured ectopic pregnancy: Amenorrhoea + unilateral pain + shock + shoulder pain (phrenic irritation). Resuscitate with large-bore IVs & prep for surgery.",
    difficulty: "medium",
    tags: ["gynaecology", "ectopic-pregnancy", "haemoperitoneum", "hypovolaemic-shock", "surgical-emergency"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-010",
    categorySlug: "maternal-newborn",
    stem: "A 31-year-old woman undergoing an infertility evaluation is scheduled for Hysterosalpingography (HSG) to assess tubal patency and uterine cavity architecture. When should the nurse instruct the client to schedule the HSG procedure, and what pre-procedure screening is essential?",
    choices: [
      {
        id: "a",
        text: "Schedule during the follicular phase (days 7 to 10 of the menstrual cycle, after cessation of menstrual bleeding but before ovulation), confirm a negative pregnancy test, and rule out active pelvic infection",
      },
      {
        id: "b",
        text: "Schedule during active heavy menstruation to wash out the fallopian tubes with radiographic contrast",
      },
      {
        id: "c",
        text: "Schedule in the late luteal phase (day 26) to deliberately test for early blastocyst implantation",
      },
      {
        id: "d",
        text: "Perform the procedure without confirming pregnancy status or checking for pelvic pain",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Hysterosalpingography (HSG) involves fluoroscopic radiopaque contrast injection into the endocervical canal to outline the endometrial cavity and fallopian tubes. Timing is critical: it must be performed during the early follicular phase (days 7–10 of a 28-day cycle), after menstrual flow has completely ceased (to prevent retrograde flushing of menstrual debris/endometrial tissue into the peritoneal cavity and avoid venous extravasation) but BEFORE ovulation occurs (to prevent irradiating or flushing an early fertilised ovum). Active pelvic inflammatory disease is an absolute contraindication because contrast injection can precipitate fulminant pelvic peritonitis.",
    strategy: "HSG timing & safety: Days 7-10 (post-menses, pre-ovulation) + negative pregnancy test + absolute exclusion of active pelvic infection.",
    difficulty: "medium",
    tags: ["gynaecology", "hsg", "infertility", "tubal-patency", "diagnostic-procedures"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-011",
    categorySlug: "maternal-newborn",
    stem: "A 23-year-old female at 9 weeks gestation presents with painless bright red vaginal spotting. On speculum and digital examination, the nurse notes that the cervical os is closed, no fetal tissue has passed, and bed-side ultrasound confirms an intrauterine gestational sac with a viable embryonic heartbeat. How should the nurse classify this type of spontaneous abortion?",
    choices: [
      {
        id: "a",
        text: "Threatened miscarriage (abortion)",
      },
      {
        id: "b",
        text: "Inevitable miscarriage",
      },
      {
        id: "c",
        text: "Incomplete miscarriage",
      },
      {
        id: "d",
        text: "Missed miscarriage",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Spontaneous abortion categories in early pregnancy are classified clinically: (1) Threatened abortion: vaginal bleeding occurs, the cervical os remains CLOSED, and the fetus remains viable (cardiac activity present); the pregnancy may proceed successfully to term. (2) Inevitable abortion: bleeding with uterine cramping and the cervical os is DILATED (open), making pregnancy loss unavoidable. (3) Incomplete abortion: cervical os is open with partial expulsion of products of conception. (4) Complete abortion: all products expelled, os closed. (5) Missed abortion: embryo/fetal demise occurs without bleeding or expulsion; os closed.",
    strategy: "Miscarriage classification: Vaginal bleeding + CLOSED os + VIABLE fetal heartbeat = Threatened miscarriage. Reassurance and pelvic rest.",
    difficulty: "easy",
    tags: ["gynaecology", "miscarriage", "threatened-abortion", "early-pregnancy", "obstetrics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-012",
    categorySlug: "safety-infection-control",
    stem: "A 22-year-old sexually active female presents with bilateral lower quadrant abdominal pain, fever (38.4 °C), and deep dyspareunia. On bimanual examination, the nurse elicits exquisite cervical motion tenderness and bilateral adnexal tenderness. Why must the nurse prioritize immediate empiric broad-spectrum antibiotic treatment (such as ceftriaxone, doxycycline, and metronidazole) rather than delaying for laboratory culture results?",
    choices: [
      {
        id: "a",
        text: "Prompt treatment of Pelvic Inflammatory Disease (PID) prevents permanent tubal mucosal scaring, which dramatically reduces the lifelong risks of tubal factor infertility, ectopic pregnancy, and chronic pelvic pain",
      },
      {
        id: "b",
        text: "Antibiotics cure the patient within 30 minutes, allowing immediate discharge without follow-up",
      },
      {
        id: "c",
        text: "The CDC forbids taking swabs or microbiological cultures in any pelvic pain presentation",
      },
      {
        id: "d",
        text: "Bacterial cultures are 100% negative in all cases of acute sexually transmitted infections",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Pelvic Inflammatory Disease (PID) is an ascending polymicrobial infection from the endocervix into the endometrium, fallopian tubes (salpingitis), ovaries, and pelvic peritoneum, commonly triggered by Chlamydia trachomatis and Neisseria gonorrhoeae. The CDC guidelines mandate empiric antibiotic therapy in sexually active young women presenting with lower pelvic pain and at least one minimum clinical criterion (cervical motion tenderness, uterine tenderness, or adnexal tenderness). Even brief delays in treatment lead to endosalpingeal deciliation, intraluminal scarring, and tubal occlusion, causing tubal infertility (10% after 1 episode, 40% after 3 episodes), ectopic pregnancy, and chronic debilitating pelvic pain.",
    strategy: "PID urgency: Minimum criteria (cervical motion tenderness) warrants immediate empiric broad-spectrum antibiotics to prevent permanent tubal scarring and infertility.",
    difficulty: "medium",
    tags: ["gynaecology", "pid", "chlamydia", "gonorrhoea", "infertility-prevention"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-013",
    categorySlug: "maternal-newborn",
    stem: "A 28-year-old woman complains of an abnormal vaginal discharge and severe vulval itching. Speculum examination reveals a thick, adherent, white, curd-like ('cottage cheese') discharge coating the vaginal walls, with erythema and fissuring of the vulva. The vaginal pH is 4.2. Wet mount microscopy with 10% potassium hydroxide (KOH) demonstrates budding yeast and pseudohyphae. What is the diagnosis, and what is the treatment of choice?",
    choices: [
      {
        id: "a",
        text: "Vulvovaginal Candidiasis (Candida albicans); treat with topical clotrimazole vaginal pessary/cream or oral fluconazole",
      },
      {
        id: "b",
        text: "Bacterial Vaginosis; treat with oral amoxicillin",
      },
      {
        id: "c",
        text: "Trichomoniasis; treat with intramuscular ceftriaxone",
      },
      {
        id: "d",
        text: "Atrophic vaginitis; treat with high-dose intravenous heparin",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Vulvovaginal Candidiasis (typically Candida albicans) presents with intense vulvovaginal pruritus, dysuria, dyspareunia, and classic thick, curd-like, white 'cottage cheese' discharge. The vaginal pH remains acidic (normal, <= 4.5), which distinguishes it from Bacterial Vaginosis and Trichomoniasis (where pH > 4.5). KOH wet mount reveals characteristic pseudohyphae and budding blastospores. Treatment consists of topical azoles (clotrimazole, miconazole pessaries) or single-dose oral fluconazole 150 mg (oral fluconazole is avoided during pregnancy, where topical clotrimazole is preferred).",
    strategy: "Vaginitis differential: Thick curd-like discharge + intense pruritus + pH <= 4.5 + pseudohyphae = Vulvovaginal candidiasis -> Clotrimazole / Fluconazole.",
    difficulty: "easy",
    tags: ["gynaecology", "candidiasis", "vaginitis", "clotrimazole", "infectious-diseases"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-014",
    categorySlug: "maternal-newborn",
    stem: "A 25-year-old client presents with severe, throbbing vulval pain that makes sitting and walking excruciating. Physical examination reveals an extremely tender, fluctuant, erythematous, walnut-sized mass at the 4 o'clock position of the posterior labium majus near the vaginal introitus. What condition is present, and what is the definitive clinical intervention?",
    choices: [
      {
        id: "a",
        text: "Bartholin gland abscess; perform incision and drainage with insertion of a Word catheter (or marsupialization) and prescribe sitz baths and analgesia",
      },
      {
        id: "b",
        text: "Squamous cell carcinoma of the vulva; perform an immediate radical vulvectomy",
      },
      {
        id: "c",
        text: "Incarcerated inguinal hernia; apply high-pressure manual compression to force the mass into the abdomen",
      },
      {
        id: "d",
        text: "Folliculitis; instruct the client to squeeze the lesion forcefully at home",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The greater vestibular (Bartholin) glands are located bilaterally at the 4 and 8 o'clock positions of the posterior vaginal introitus. When the duct becomes obstructed, fluid accumulates (Bartholin cyst), which can become acutely infected and form an abscess. The patient develops rapid, severe, throbbing unilateral vulval pain and dyspareunia. Management of an abscess requires incision and drainage. Simple incision alone has an 80% recurrence rate; therefore, placing a Word catheter for 4–6 weeks (allowing epithelialization of a new tract) or performing surgical marsupialization is necessary.",
    strategy: "Bartholin abscess: Painful fluctuant mass at 4 or 8 o'clock of introitus. Treatment = I&D with Word catheter placement or marsupialization + sitz baths.",
    difficulty: "easy",
    tags: ["gynaecology", "bartholin-abscess", "vulval-disorders", "word-catheter", "minor-surgery"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-015",
    categorySlug: "maternal-newborn",
    stem: "A 44-year-old woman attends the gynaecology clinic reporting bleeding after sexual intercourse (post-coital bleeding) and persistent, watery, foul-smelling vaginal discharge for 4 months. Speculum examination reveals an exophytic, friable, ulcerated mass on the anterior cervical lip that bleeds easily on contact. What is the most critical next diagnostic step?",
    choices: [
      {
        id: "a",
        text: "Perform a direct punch biopsy of the cervical mass (or refer for urgent colposcopy with biopsy) for definitive histological staging and confirmation of cervical carcinoma",
      },
      {
        id: "b",
        text: "Reassure the client that post-coital bleeding is harmless and perform a routine Pap smear in 3 years",
      },
      {
        id: "c",
        text: "Prescribe oral metronidazole for bacterial vaginosis and discharge without further follow-up",
      },
      {
        id: "d",
        text: "Cauterize the entire cervix with silver nitrate without obtaining tissue for pathology",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Post-coital bleeding (contact bleeding), intermenstrual bleeding, and foul-smelling vaginal discharge are cardinal red-flag warning signs of invasive cervical carcinoma. A visible, friable, exophytic, or ulcerated cervical lesion requires an immediate tissue punch biopsy for histological evaluation. A routine cytological screening smear (Pap smear) is inappropriate and contraindicated when a gross, visible lesion is present, because cytology has a false-negative rate of up to 50% in invasive cancer due to surface necrosis and blood obscuring neoplastic cells.",
    strategy: "Cervical cancer red flags: Post-coital bleeding + visible friable cervical lesion requires direct TISSUE BIOPSY, not a screening Pap smear.",
    difficulty: "easy",
    tags: ["gynaecology", "cervical-cancer", "oncology", "post-coital-bleeding", "biopsy"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-016",
    categorySlug: "maternal-newborn",
    stem: "A 64-year-old postmenopausal woman (whose last menstrual period was 12 years ago) visits the health center reporting three episodes of painless, brown-to-red vaginal spotting over the past month. She is not taking hormone replacement therapy. What principle must guide the nurse's clinical management?",
    choices: [
      {
        id: "a",
        text: "Any postmenopausal bleeding is considered endometrial carcinoma until proven otherwise; refer urgently for transvaginal ultrasound (to assess endometrial stripe thickness) and endometrial biopsy (Pipelle sampling)",
      },
      {
        id: "b",
        text: "Postmenopausal bleeding is a natural sign of recurring fertility in older age and requires no evaluation",
      },
      {
        id: "c",
        text: "Administer high-dose oral vitamin K to stop the bleeding and avoid all invasive tests",
      },
      {
        id: "d",
        text: "Advise the client that spotting is caused by psychological stress and prescribe diazepam",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The cardinal clinical rule in gynaecology is that postmenopausal bleeding (PMB) is presumed to be endometrial adenocarcinoma until definitively excluded. Approximately 10% of women presenting with PMB have underlying endometrial malignancy. Initial diagnostic evaluation includes transvaginal ultrasonography (TVUS): an endometrial thickness <= 4 mm has a > 99% negative predictive value for endometrial cancer. If the endometrium is > 4 mm, irregular, or bleeding persists, outpatient endometrial biopsy (using a Pipelle aspirator) or hysteroscopy with directed biopsy is required.",
    strategy: "Postmenopausal bleeding: Cardinal rule -> Presume endometrial cancer until proven otherwise. Urgent transvaginal ultrasound & Pipelle biopsy.",
    difficulty: "easy",
    tags: ["gynaecology", "endometrial-cancer", "postmenopausal-bleeding", "pipelle-biopsy", "oncology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-017",
    categorySlug: "maternal-newborn",
    stem: "A 58-year-old postmenopausal female presents with persistent abdominal bloating, early satiety, increased abdominal girth, and urinary urgency for the past 2 months. Pelvic examination reveals a fixed, solid, non-tender adnexal mass. Why is ovarian cancer frequently referred to as the 'silent killer', and what diagnostic workup is indicated?",
    choices: [
      {
        id: "a",
        text: "Ovarian cancer has vague, insidious gastrointestinal symptoms that mimic benign digestive disorders, leading to late diagnosis at advanced stages (stage III/IV); workup requires transvaginal pelvic ultrasound and serum CA-125 measurement",
      },
      {
        id: "b",
        text: "Ovarian cancer causes immediate bright red vaginal bleeding in stage I in 100% of cases",
      },
      {
        id: "c",
        text: "Routine cervical Pap smears accurately detect 98% of early-stage ovarian cancers",
      },
      {
        id: "d",
        text: "Ovarian cancer never causes abdominal symptoms or ascites",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Epithelial ovarian cancer is often dubbed the 'silent killer' because it lacks a reliable screening test (Pap smears detect cervical, not ovarian, cells) and produces non-specific, insidious symptoms—persistent bloating, early satiety, pelvic fullness, and urinary frequency—that patients and clinicians frequently attribute to irritable bowel syndrome, dyspepsia, or normal ageing. Consequently, over 70% of women are diagnosed at an advanced stage (FIGO Stage III or IV with peritoneal carcinomatosis and ascites). Workup includes transvaginal ultrasound and serum CA-125 tumor marker testing.",
    strategy: "Ovarian cancer presentation: Vague GI symptoms (persistent bloating, early satiety, abdominal distension) + solid adnexal mass -> Pelvic ultrasound & CA-125.",
    difficulty: "medium",
    tags: ["gynaecology", "ovarian-cancer", "ca-125", "oncology", "adnexal-mass"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-018",
    categorySlug: "pharmacology-parenteral",
    stem: "A 51-year-old woman with an intact uterus suffers from debilitating vasomotor flushes, night sweats, and sleep disturbances secondary to the menopausal transition. Her physician prescribes combined Hormone Replacement Therapy (HRT) containing both oestrogen and a progestogen. Why is a progestogen added to oestrogen therapy in a woman who has NOT had a hysterectomy?",
    choices: [
      {
        id: "a",
        text: "Unapposed systemic oestrogen stimulates continuous endometrial proliferation, dramatically increasing the risk of endometrial hyperplasia and adenocarcinoma; the progestogen induces secretory transformation, shedding the lining and protecting against cancer",
      },
      {
        id: "b",
        text: "Oestrogen alone causes immediate complete loss of hair and facial bone collapse",
      },
      {
        id: "c",
        text: "Progestogen is added solely to make the tablet taste sweet",
      },
      {
        id: "d",
        text: "Progestogen completely prevents all future heart disease and reverses physiological ageing",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "In postmenopausal women with an intact uterus, systemic oestrogen-only replacement therapy stimulates unchecked endometrial cell proliferation (mitosis), resulting in endometrial hyperplasia and a markedly elevated risk of endometrial adenocarcinoma. Adding a progestogen (either sequentially for cyclical withdrawal bleeding or continuously for amenorrhoea) antagonizes oestrogenic proliferative effects, converting the endometrium to a thin, secretory, atrophic state and preventing malignant transformation. Women who have had a surgical hysterectomy do not have an endometrium and therefore take oestrogen-only HRT.",
    strategy: "HRT pharmacology: Intact uterus requires COMBINED oestrogen + progestogen (progestogen protects against endometrial cancer). Post-hysterectomy takes oestrogen alone.",
    difficulty: "easy",
    tags: ["gynaecology", "hrt", "menopause", "progestogen", "endometrial-protection"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-019",
    categorySlug: "maternal-newborn",
    stem: "A 72-year-old multiparous client presents complaining of a heavy sensation in her pelvis and 'a feeling like a ball is falling out of my vagina when I walk or lift objects.' Physical examination confirms a Stage 3 uterine prolapse and cystocele. The client is frail with severe cardiovascular comorbidities and is unfit for major pelvic reconstructive surgery. Which conservative management should the nurse teach the client?",
    choices: [
      {
        id: "a",
        text: "Fitting of a vaginal ring pessary, combined with topical vaginal oestrogen cream to prevent mucosal ulceration, instructions on regular cleaning/replacement schedules, and pelvic floor muscle (Kegel) training",
      },
      {
        id: "b",
        text: "Strict bed rest with both legs elevated on pillows permanently for the rest of her life",
      },
      {
        id: "c",
        text: "High-dose systemic chemotherapy infusions",
      },
      {
        id: "d",
        text: "Inserting tight vaginal gauze packs packed with dry salt",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Pelvic organ prolapse (POP) results from attenuation and stretching of the endopelvic fascia and levator ani pelvic diaphragm muscles. In frail older women or those who decline or are unfit for surgery, vaginal pessaries (e.g., silicone ring or Gellhorn pessaries) provide an effective, safe conservative solution. The pessary mechanically elevates the prolapsed pelvic organs. Nursing care includes: (1) ensuring correct size fit; (2) teaching hygiene and removal/cleaning intervals (or scheduling clinic follow-up every 3–6 months); (3) prescribing local topical oestrogen cream to prevent vaginal epithelial ulceration; and (4) pelvic floor muscle training.",
    strategy: "Pelvic organ prolapse: Conservative care for high surgical risk = Vaginal pessary + local oestrogen cream to prevent erosion + Kegel exercises.",
    difficulty: "medium",
    tags: ["gynaecology", "pelvic-organ-prolapse", "cystocele", "pessary-care", "gerontology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GYN-020",
    categorySlug: "leadership-delegation",
    stem: "A 19-year-old female presents to the emergency room accompanied by a friend, reporting she was sexually assaulted 18 hours ago. She is crying and visibly trembling. What is the nurse's comprehensive, trauma-informed clinical priority bundle for this survivor?",
    choices: [
      {
        id: "a",
        text: "Ensure immediate safety and emotional support; obtain forensic evidence maintaining chain of custody (if consented); administer emergency contraception; initiate HIV Post-Exposure Prophylaxis (PEP within 72 h for 28 days); provide presumptive STI prophylaxis (ceftriaxone, doxycycline, metronidazole); and arrange psychosocial counseling",
      },
      {
        id: "b",
        text: "Direct the client to take a hot bath, wash all her clothing immediately, and return next week for routine blood tests",
      },
      {
        id: "c",
        text: "Interrogate the client aggressively regarding her clothing and alcohol intake before offering medical care",
      },
      {
        id: "d",
        text: "Refuse medical care until police officers finish interrogating her in the public waiting room",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Management of sexual assault requires a compassionate, trauma-informed approach addressing immediate medical, legal, and psychological needs: (1) Physical and psychological safety in a private environment; (2) Forensic evidence collection (clothing, swabs) before bathing, maintaining strict chain of custody; (3) Emergency contraception (levonorgestrel, ulipristal, or copper IUD) to prevent unwanted pregnancy; (4) HIV Post-Exposure Prophylaxis (PEP) started urgently within 72 hours and continued for 28 days; (5) Empiric antimicrobial prophylaxis against gonorrhoea, chlamydia, and trichomoniasis; (6) Tetanus and Hepatitis B vaccination; and (7) Structured psychological crisis intervention.",
    strategy: "Sexual assault care bundle: Safety/trauma-informed care + forensic chain of custody + emergency contraception + HIV PEP (< 72 h) + empiric STI prophylaxis + counseling.",
    difficulty: "easy",
    tags: ["gynaecology", "sexual-assault", "trauma-informed-care", "hiv-pep", "emergency-contraception"],
    isFree: true,
  },
];
