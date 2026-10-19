import type { AuthoredQuestion } from "./authored-bank";

export const GYN_MODULE_SCENARIOS: AuthoredQuestion[] = [
  {
    authoredId: "NG-MOD-GYN-001",
    categorySlug: "maternal-newborn",
    stem: "A 17-year-old unmarried female attends the youth-friendly reproductive health clinic seeking advice regarding vaginal discharge and contraception. She requests that her visit remain strictly confidential. During the consultation, a speculum examination is clinically indicated. What is the nurse's priority ethical and professional conduct?",
    choices: [
      {
        id: "a",
        text: "Insist that a parent or guardian sign written authorisation before any examination, because she is under 18 years old",
      },
      {
        id: "b",
        text: "Examine her with the door closed but without a chaperone, since she has asked for confidentiality and a third person would breach it",
      },
      {
        id: "c",
        text: "Provide auditory and visual privacy, explain the examination, obtain informed consent, offer a documented chaperone, and keep the visit confidential",
      },
      {
        id: "d",
        text: "Obtain consent and examine her with a chaperone present, but do not discuss the procedure in advance in case it increases her anxiety",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Under national and international adolescent sexual and reproductive health guidelines, sexually active adolescents have the right to confidential, non-judgmental counseling, screening, and contraceptive services. For an intimate pelvic examination, the nurse must: (1) guarantee visual and auditory privacy; (2) explain the indications, instruments, and sensations to alleviate anxiety; (3) secure the client's voluntary informed consent; and (4) provide and document the presence of an impartial chaperone to protect both client dignity and provider safety. Why the other options fail: option a applies a parental-authorisation rule that adolescent sexual and reproductive health standards do not impose, and it denies the service she came for. Option b keeps the record confidential but exposes her body, which is not confidentiality and breaches both dignity and the chaperone requirement. Option d keeps the chaperone but removes the explanation, so the consent it takes is not informed.",
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
        text: "Interpret as negative; dense acetowhitening is normal glycogenated squamous epithelium, so reassure her and repeat screening in 5 years",
      },
      {
        id: "b",
        text: "Interpret as inconclusive because the acid was applied for only 1 minute, and repeat the test with a 3-minute application before deciding",
      },
      {
        id: "c",
        text: "Interpret as a VIA-positive screen showing high-grade precancerous change; offer same-day thermal ablation or cryotherapy, or refer for colposcopy and biopsy",
      },
      {
        id: "d",
        text: "Interpret as invasive carcinoma; refer urgently for radical hysterectomy and radiotherapy without taking a biopsy of the lesion",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "In Visual Inspection with Acetic Acid (VIA), dilute acetic acid dehydrates cells and reversibly coagulates nuclear proteins. Precancerous dysplastic cells (cervical intraepithelial neoplasia, CIN) have high nuclear-to-cytoplasmic ratios, causing them to reflect light and appear dense, opaque, well-demarcated acetowhite lesions adjacent to the squamocolumnar junction (SCJ / transformation zone). Under WHO screen-and-treat guidelines for low-resource settings, eligible VIA-positive lesions are treated immediately with thermal ablation or cryotherapy, or referred for colposcopic biopsy if suspicious for invasive carcinoma. Why the other options fail: option a misreads acetowhitening as normal; glycogenated epithelium does not form a dense, well-defined lesion at the squamocolumnar junction, and a 5-year recall is wrong for a screen-positive cervix. Option b invents a 3-minute protocol, when one minute is the standard application and the lesion is already diagnostic. Option d skips histology before radical surgery, which no screening programme permits on a visual inspection alone.",
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
        text: "Non-structural: coagulopathy (COEIN-C); request von Willebrand studies and treat the bleeding with desmopressin before referral",
      },
      {
        id: "b",
        text: "Structural: leiomyoma (PALM-L); correct the iron-deficiency anaemia and start tranexamic acid or a levonorgestrel IUD",
      },
      {
        id: "c",
        text: "Structural: adenomyosis (PALM-A); proceed to hysterectomy because medical therapy will not control bleeding of this volume",
      },
      {
        id: "d",
        text: "Non-structural: ovulatory dysfunction (COEIN-O); induce ovulation with clomiphene and defer treatment of the anaemia",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "The FIGO PALM-COEIN system classifies causes of Abnormal Uterine Bleeding (AUB). PALM denotes structural causes: Polyp, Adenomyosis, Leiomyoma (fibroid), and Malignancy/hyperplasia. COEIN denotes non-structural causes: Coagulopathy, Ovulatory dysfunction, Endometrial, Iatrogenic, and Not yet classified. Uterine leiomyomas (L) increase the endometrial surface area and disrupt myometrial contractility, causing menorrhagia and severe secondary microcytic anaemia. Priority nursing care includes correcting anaemia with iron supplementation, administering antifibrinolytics (tranexamic acid during menses) or LNG-IUS, and surgical referral for myomectomy if childbearing is desired. Why the other options fail: option a selects a non-structural category for a lesion proved on ultrasound, and plasma exchange is not a treatment for coagulopathy. Option c names a structural category that is not present and proceeds to hysterectomy before any medical stabilization. Option d selects a non-structural category and defers the anaemia, which is the immediate threat at a haemoglobin of 7.8 g/dL.",
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
        text: "Ovarian failure with a rising FSH; the long-term risks are osteoporosis, hot flushes and premature cardiovascular disease",
      },
      {
        id: "b",
        text: "Hyperandrogenism with insulin resistance; the long-term risks are type 2 diabetes, cardiovascular disease and endometrial hyperplasia",
      },
      {
        id: "c",
        text: "Hyperprolactinaemia with suppressed GnRH; the long-term risks are galactorrhoea, headache and growth of a pituitary adenoma",
      },
      {
        id: "d",
        text: "Hypothalamic amenorrhoea from an energy deficit; the long-term risks are low bone density and recurrent stress fractures",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Polycystic Ovary Syndrome (PCOS) diagnosed by Rotterdam criteria requires at least 2 of 3 features: (1) oligo/anovulation; (2) clinical or biochemical hyperandrogenism; and (3) polycystic ovarian morphology on ultrasound. Hyperinsulinaemia secondary to peripheral insulin resistance stimulates ovarian theca cell androgen production and decreases sex hormone-binding globulin (SHBG). Chronic anovulation leads to persistent, unopposed oestrogen stimulation of the endometrium (without cyclical progesterone from a corpus luteum), predisposing women to endometrial hyperplasia and adenocarcinoma, as well as metabolic syndrome and type 2 diabetes. Why the other options fail: option a describes ovarian failure, which gives a low oestrogen and a raised FSH with hot flushes, not hyperandrogenism with a polycystic ovarian morphology. Option c describes hyperprolactinaemia, which suppresses GnRH and causes amenorrhoea without the hirsutism and insulin resistance seen here. Option d describes hypothalamic amenorrhoea, which produces a low or normal LH and no ovarian enlargement.",
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
        text: "Acute appendicitis",
      },
      {
        id: "b",
        text: "Cervical incompetence",
      },
      {
        id: "c",
        text: "Endometriosis",
      },
      {
        id: "d",
        text: "Primary dysmenorrhoea",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Endometriosis is characterized by the implantation and proliferation of functional endometrial glands and stroma outside the uterine cavity (most commonly on the ovaries, uterosacral ligaments, pouch of Douglas, and pelvic peritoneum). The classic clinical triad is: (1) secondary dysmenorrhoea; (2) deep dyspareunia; and (3) subfertility/infertility, often accompanied by dyschezia (pain on defecation) and uterosacral nodularity. Primary dysmenorrhoea occurs without pelvic pathology and lacks dyspareunia or nodularity. Definitive diagnosis is established via diagnostic laparoscopy showing 'powder-burn' or 'chocolate' endometriotic lesions. Why the other options fail: option a is an acute abdominal emergency that has no cyclical relation to menstruation, no dyschezia and no uterosacral nodularity. Option b describes painless mid-trimester cervical dilatation, which causes pregnancy loss rather than cyclic pelvic pain. Option d is primary dysmenorrhoea, which begins with the first periods, has no dyspareunia or nodularity, and does not cause infertility.",
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
        text: "MEC category 1: no restriction at any age or smoking load, because the oestrogen dose in a modern low-dose pill is too small to affect clotting",
      },
      {
        id: "b",
        text: "MEC category 2: start a low-dose combined pill now and advise her to cut down to fewer than 15 cigarettes a day, then review in 3 months",
      },
      {
        id: "c",
        text: "MEC category 3: prescribe a combined pill containing 20 micrograms of ethinylestradiol, which lowers the clot risk enough to be used",
      },
      {
        id: "d",
        text: "MEC category 4: combined hormonal contraceptives are contraindicated, because her age and smoking load give an unacceptable arterial thrombosis risk",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Under the WHO and CDC Medical Eligibility Criteria (MEC): Category 4 represents an absolute contraindication where health risks outweigh any benefits. Age >= 35 years combined with heavy smoking (>= 15 cigarettes/day) synergistically increases hepatic production of clotting factors and promotes arterial vasospasm/thrombosis, dramatically raising the incidence of fatal myocardial infarction, deep venous thrombosis, pulmonary embolism, and ischaemic stroke. Safe, non-oestrogen alternatives for this client include copper IUD, levonorgestrel IUD, progestogen-only implants, or depot medroxyprogesterone acetate (DMPA). Why the other options fail: option a ignores the age and the smoking load, the two variables that set the category. Option b treats a category 2 as permission to start the method that is contraindicated, and adds dose escalation that exists nowhere in the guidance. Option c applies a category 3 to a client who is a 4, and assumes that lowering the oestrogen dose removes an arterial risk that it does not.",
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
        text: "Levonorgestrel 1.5 mg now, because oral methods act faster than an IUD and she is already past the 24-hour ideal window",
      },
      {
        id: "b",
        text: "Ulipristal acetate 30 mg only, because it stays effective to 120 hours and an IUD cannot be fitted after unprotected intercourse",
      },
      {
        id: "c",
        text: "A copper IUD inserted within 5 days is the most effective method; oral options are levonorgestrel within 72 hours or ulipristal within 120 hours",
      },
      {
        id: "d",
        text: "A combined oral contraceptive, two tablets now and two in 12 hours, which is as effective as an IUD at 38 hours after intercourse",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "The copper IUD (Cu-IUD) is the most effective method of emergency contraception, with a failure rate of less than 0.1%, and can be inserted up to 5 days (120 hours) after unprotected intercourse (or up to 5 days after the earliest calculated day of ovulation), providing ongoing long-term contraception for up to 10–12 years. If oral options are preferred: levonorgestrel 1.5 mg is licensed up to 72 hours (efficacy decreases with time and higher BMI); ulipristal acetate (30 mg selective progesterone receptor modulator) maintains high efficacy up to 120 hours (5 days) post-coitus. Why the other options fail: option a overstates the speed of oral methods and abandons the most effective option hours inside its window. Option b is right that ulipristal works to 120 hours but wrong that an IUD cannot be fitted, which is the error the item tests. Option d describes the obsolete Yuzpe regimen, which is less effective than either the IUD or a single-dose oral method.",
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
        text: "Heavy bleeding with clots is expected for the first 3 months, and she should return only if she soaks more than two pads a day",
      },
      {
        id: "b",
        text: "Bleeding stops within 48 hours of insertion; any spotting after that suggests the device has perforated the uterus and must be removed",
      },
      {
        id: "c",
        text: "Periods return to their previous pattern within 6 weeks, because the device provides contraception only and does not alter flow",
      },
      {
        id: "d",
        text: "Irregular spotting is expected for the first 3 to 6 months; flow then becomes much lighter and many women become amenorrhoeic",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The levonorgestrel-releasing intrauterine system (LNG-IUS) releases local progestogen that induces profound endometrial glandular atrophy. In the initial 3–6 months following insertion, users frequently experience frequent, irregular, light bleeding or spotting as the endometrium thins. By 12 months, overall menstrual blood loss is reduced by >= 90%, and 20–50% of women achieve amenorrhoea. Anticipatory guidance regarding this transient bleeding pattern is the single most effective nursing strategy to prevent client anxiety and premature device discontinuation. Why the other options fail: option a calls heavy bleeding expected and sets a return threshold that would miss expulsion or perforation. Option b promises immediate amenorrhoea and turns normal spotting into a perforation, which would prompt an unnecessary removal. Option c denies any effect on flow, when the progestogen is there precisely to thin the endometrium and reduce loss.",
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
        text: "Threatened miscarriage with vagal syncope; give intramuscular morphine for the pain and arrange a repeat ultrasound in the morning",
      },
      {
        id: "b",
        text: "Ruptured ectopic pregnancy with haemoperitoneum; secure two large-bore IVs, resuscitate, cross-match blood and prepare for emergency laparotomy",
      },
      {
        id: "c",
        text: "Ovarian torsion from a ruptured corpus luteum; give analgesia and book semi-elective laparoscopy within the next 24 hours",
      },
      {
        id: "d",
        text: "Acute pelvic inflammatory disease with sepsis; start intravenous antibiotics and fluids and reassess after 6 hours",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "This clinical picture is diagnostic of a ruptured ectopic pregnancy with massive haemoperitoneum causing hypovolaemic shock. The classic triad consists of amenorrhoea, unilateral abdominal/pelvic pain, and vaginal bleeding. Referred shoulder tip pain (Kehr's sign) occurs when diaphragmatic peritoneum is irritated by pooled blood (innervated by the phrenic nerve, C3–C5). Marked cervical motion tenderness reflects severe peritoneal irritation. Ruptured ectopic pregnancy is a surgical emergency; immediate resuscitation with two large-bore IV cannulae (14–16 gauge), rapid fluid boluses, blood cross-matching, and urgent surgical hemostasis are mandatory to prevent maternal exsanguination. Why the other options fail: option a treats a shocked client as a threatened miscarriage and gives morphine, which masks deterioration while the bleeding continues. Option c delays surgery by 24 hours in a client with a falling blood pressure and a distended abdomen. Option d attributes the picture to infection, which produces fever and a normal or raised blood pressure, not shoulder-tip pain and shock.",
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
        text: "Days 7 to 10, after bleeding has stopped and before ovulation, with a negative pregnancy test and no active pelvic infection",
      },
      {
        id: "b",
        text: "Any day she is not bleeding, provided the pregnancy test is negative; active pelvic infection need not delay the procedure",
      },
      {
        id: "c",
        text: "Days 1 to 5, during light bleeding, so that the contrast can flush residual menstrual debris out of the uterine cavity",
      },
      {
        id: "d",
        text: "Days 21 to 24, in the luteal phase, so that tubal spasm is reduced and the cavity distends more evenly during injection",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Hysterosalpingography (HSG) involves fluoroscopic radiopaque contrast injection into the endocervical canal to outline the endometrial cavity and fallopian tubes. Timing is critical: it must be performed during the early follicular phase (days 7–10 of a 28-day cycle), after menstrual flow has completely ceased (to prevent retrograde flushing of menstrual debris/endometrial tissue into the peritoneal cavity and avoid venous extravasation) but BEFORE ovulation occurs (to prevent irradiating or flushing an early fertilised ovum). Active pelvic inflammatory disease is an absolute contraindication because contrast injection can precipitate fulminant pelvic peritonitis. Why the other options fail: option b drops the infection screen, the one absolute contraindication, because contrast injection into an inflamed pelvis can precipitate peritonitis. Option c schedules during menstruation, when debris is flushed retrograde into the peritoneum and venous extravasation is more likely. Option d schedules in the luteal phase, when an early conceptus may be in the tube and tubal spasm distorts the study.",
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
        text: "Inevitable miscarriage",
      },
      {
        id: "b",
        text: "Incomplete miscarriage",
      },
      {
        id: "c",
        text: "Missed miscarriage",
      },
      {
        id: "d",
        text: "Threatened miscarriage",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Spontaneous abortion categories in early pregnancy are classified clinically: (1) Threatened abortion: vaginal bleeding occurs, the cervical os remains CLOSED, and the fetus remains viable (cardiac activity present); the pregnancy may proceed successfully to term. (2) Inevitable abortion: bleeding with uterine cramping and the cervical os is DILATED (open), making pregnancy loss unavoidable. (3) Incomplete abortion: cervical os is open with partial expulsion of products of conception. (4) Complete abortion: all products expelled, os closed. (5) Missed abortion: embryo/fetal demise occurs without bleeding or expulsion; os closed. Why the other options fail: option a describes inevitable miscarriage, which requires a dilated os and cramping that this client does not have. Option b describes incomplete miscarriage, which requires an open os and passage of tissue. Option c describes missed miscarriage, in which the embryo has died and is retained, whereas this scan shows cardiac activity. A closed os with a viable embryo is what separates threatened from all three.",
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
        text: "Treatment should be withheld until endocervical swab results are available, so that the antibiotic is correctly targeted",
      },
      {
        id: "b",
        text: "Empiric treatment is justified only once all three minimum criteria are met, not on cervical motion tenderness alone",
      },
      {
        id: "c",
        text: "Prompt treatment prevents tubal scarring and lowers the lifelong risk of infertility, ectopic pregnancy and chronic pelvic pain",
      },
      {
        id: "d",
        text: "Treatment can safely wait 48 hours while a pregnancy test and pelvic ultrasound exclude an ectopic pregnancy",
      },
    ],
    correctChoiceId: "c",
    rationale:
      "Pelvic Inflammatory Disease (PID) is an ascending polymicrobial infection from the endocervix into the endometrium, fallopian tubes (salpingitis), ovaries, and pelvic peritoneum, commonly triggered by Chlamydia trachomatis and Neisseria gonorrhoeae. The CDC guidelines mandate empiric antibiotic therapy in sexually active young women presenting with lower pelvic pain and at least one minimum clinical criterion (cervical motion tenderness, uterine tenderness, or adnexal tenderness). Even brief delays in treatment lead to endosalpingeal deciliation, intraluminal scarring, and tubal occlusion, causing tubal infertility (10% after 1 episode, 40% after 3 episodes), ectopic pregnancy, and chronic debilitating pelvic pain. Why the other options fail: option a delays treatment for a culture that is often negative and that CDC guidance explicitly does not require before antibiotics. Option b adds a threshold that does not exist; any one of the three minimum criteria is enough to treat. Option d gives the same delay a different justification, but ectopic pregnancy is excluded in parallel, not by withholding antibiotics.",
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
        text: "Bacterial vaginosis; treat with oral metronidazole 400 mg twice daily for 5 days and avoid vaginal azoles",
      },
      {
        id: "b",
        text: "Vulvovaginal candidiasis; treat with a topical azole such as clotrimazole, or a single 150 mg oral dose of fluconazole",
      },
      {
        id: "c",
        text: "Trichomoniasis; treat with a single 2 g oral dose of metronidazole and screen her partner at the same visit",
      },
      {
        id: "d",
        text: "Atrophic vaginitis; treat with topical oestrogen cream and review the vaginal pH after four weeks of therapy",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Vulvovaginal Candidiasis (typically Candida albicans) presents with intense vulvovaginal pruritus, dysuria, dyspareunia, and classic thick, curd-like, white 'cottage cheese' discharge. The vaginal pH remains acidic (normal, <= 4.5), which distinguishes it from Bacterial Vaginosis and Trichomoniasis (where pH > 4.5). KOH wet mount reveals characteristic pseudohyphae and budding blastospores. Treatment consists of topical azoles (clotrimazole, miconazole pessaries) or single-dose oral fluconazole 150 mg (oral fluconazole is avoided during pregnancy, where topical clotrimazole is preferred). Why the other options fail: option a names bacterial vaginosis, which gives a thin grey discharge with a fishy odour and a pH above 4.5, and metronidazole would not clear the pseudohyphae on the KOH mount. Option c names trichomoniasis, which gives a frothy yellow-green discharge, a pH above 4.5 and motile flagellates, and ceftriaxone does not treat it. Option d names atrophic vaginitis, which follows oestrogen loss and would not show budding yeast.",
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
        text: "A Bartholin cyst; apply warm compresses and re-examine in 6 weeks, since a cyst that is not infected needs no drainage",
      },
      {
        id: "b",
        text: "A sebaceous cyst of the labium majus; incise and express the contents under local anaesthetic and pack the cavity open",
      },
      {
        id: "c",
        text: "A vulval haematoma; apply ice packs and observe for 24 hours, because incision and drainage would increase the bleeding",
      },
      {
        id: "d",
        text: "Bartholin gland abscess; incise and drain and insert a Word catheter or marsupialise, with sitz baths and analgesia",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "The greater vestibular (Bartholin) glands are located bilaterally at the 4 and 8 o'clock positions of the posterior vaginal introitus. When the duct becomes obstructed, fluid accumulates (Bartholin cyst), which can become acutely infected and form an abscess. The patient develops rapid, severe, throbbing unilateral vulval pain and dyspareunia. Management of an abscess requires incision and drainage. Simple incision alone has an 80% recurrence rate; therefore, placing a Word catheter for 4–6 weeks (allowing epithelialization of a new tract) or performing surgical marsupialization is necessary. Why the other options fail: option a treats a fluctuant, exquisitely tender abscess as an uninfected cyst, which will not settle with compresses and risks spontaneous rupture. Option b names a sebaceous cyst, which is not fixed at the introitus in the 4 o'clock position and does not need open packing. Option c names a haematoma, which follows trauma and is not managed by observation when it is this painful.",
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
        text: "Take a direct punch biopsy of the cervical mass, or refer urgently for colposcopy and biopsy, to obtain histological confirmation",
      },
      {
        id: "b",
        text: "Perform a cervical Pap smear now and refer only if the cytology shows high-grade dysplasia, because cytology is the diagnostic test",
      },
      {
        id: "c",
        text: "Treat the visible lesion with cryotherapy at this visit and review her in 6 months with a repeat screening test, as for a VIA-positive cervix",
      },
      {
        id: "d",
        text: "Prescribe a course of metronidazole and doxycycline and re-examine the cervix once the discharge has cleared",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Post-coital bleeding (contact bleeding), intermenstrual bleeding, and foul-smelling vaginal discharge are cardinal red-flag warning signs of invasive cervical carcinoma. A visible, friable, exophytic, or ulcerated cervical lesion requires an immediate tissue punch biopsy for histological evaluation. A routine cytological screening smear (Pap smear) is inappropriate and contraindicated when a gross, visible lesion is present, because cytology has a false-negative rate of up to 50% in invasive cancer due to surface necrosis and blood obscuring neoplastic cells. Why the other options fail: option b relies on cytology in the presence of a visible, friable mass, where surface necrosis and blood produce a high false-negative rate and a smear cannot stage the lesion. Option c ablates a lesion that has not been sampled, destroying the evidence and delaying diagnosis. Option d treats an assumed infection while a malignant ulcer continues to grow.",
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
        text: "Treat any postmenopausal bleeding as endometrial cancer until it is excluded; refer for transvaginal ultrasound and endometrial biopsy",
      },
      {
        id: "b",
        text: "Reassure and review in 6 months, because a few episodes of spotting after 12 years of amenorrhoea are usually atrophic",
      },
      {
        id: "c",
        text: "Request a cervical smear first, because postmenopausal bleeding is most often caused by cervical rather than endometrial pathology",
      },
      {
        id: "d",
        text: "Start combined HRT to stabilise the endometrium and reassess only if the bleeding recurs after 3 months of treatment",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "The cardinal clinical rule in gynaecology is that postmenopausal bleeding (PMB) is presumed to be endometrial adenocarcinoma until definitively excluded. Approximately 10% of women presenting with PMB have underlying endometrial malignancy. Initial diagnostic evaluation includes transvaginal ultrasonography (TVUS): an endometrial thickness <= 4 mm has a > 99% negative predictive value for endometrial cancer. If the endometrium is > 4 mm, irregular, or bleeding persists, outpatient endometrial biopsy (using a Pipelle aspirator) or hysteroscopy with directed biopsy is required. Why the other options fail: option b attributes the bleeding to atrophy and defers the one investigation that excludes cancer; atrophy can cause spotting, but it is a diagnosis of exclusion. Option c investigates the cervix when the endometrium is the source in most cases, and a normal smear does not exclude endometrial cancer. Option d treats the bleeding with the hormone that can drive endometrial proliferation, and delays the biopsy.",
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
        text: "It arises from the cervical epithelium and spreads without symptoms, which is why smear screening is used; work up with a Pap smear and colposcopy",
      },
      {
        id: "b",
        text: "Its symptoms are vague and mimic benign gut disorders, so most cases present at stage III or IV; work up with transvaginal ultrasound and CA-125",
      },
      {
        id: "c",
        text: "It causes no symptoms until the tumour is palpable; work up with abdominal CT and a carcinoembryonic antigen level, which is raised in ovarian cancer",
      },
      {
        id: "d",
        text: "It is commonest in women under 40 and grows rapidly; work up with laparoscopy and a CA-19-9 level, the tumour marker for ovarian cancer",
      },
    ],
    correctChoiceId: "b",
    rationale:
      "Epithelial ovarian cancer is often dubbed the 'silent killer' because it lacks a reliable screening test (Pap smears detect cervical, not ovarian, cells) and produces non-specific, insidious symptoms—persistent bloating, early satiety, pelvic fullness, and urinary frequency—that patients and clinicians frequently attribute to irritable bowel syndrome, dyspepsia, or normal ageing. Consequently, over 70% of women are diagnosed at an advanced stage (FIGO Stage III or IV with peritoneal carcinomatosis and ascites). Workup includes transvaginal ultrasound and serum CA-125 tumor marker testing. Why the other options fail: option a confuses ovarian with cervical cancer and proposes a smear that samples the wrong organ. Option c offers CT and CEA, a marker for colorectal rather than ovarian cancer, and no ovarian mass is truly symptomless until palpable. Option d reverses the age distribution and offers CA-19-9, which is not the ovarian marker.",
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
        text: "Unopposed oestrogen drives endometrial proliferation and raises the risk of hyperplasia and adenocarcinoma; the progestogen sheds the lining",
      },
      {
        id: "b",
        text: "The progestogen reduces breast tenderness and bloating, which are the commonest reasons women stop hormone therapy in the first year",
      },
      {
        id: "c",
        text: "The progestogen protects the endometrium, but it is no longer needed once 12 months have passed without a natural period",
      },
      {
        id: "d",
        text: "The progestogen prevents the vasomotor flushes from rebounding after 6 months of oestrogen therapy, which is why it is added",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "In postmenopausal women with an intact uterus, systemic oestrogen-only replacement therapy stimulates unchecked endometrial cell proliferation (mitosis), resulting in endometrial hyperplasia and a markedly elevated risk of endometrial adenocarcinoma. Adding a progestogen (either sequentially for cyclical withdrawal bleeding or continuously for amenorrhoea) antagonizes oestrogenic proliferative effects, converting the endometrium to a thin, secretory, atrophic state and preventing malignant transformation. Women who have had a surgical hysterectomy do not have an endometrium and therefore take oestrogen-only HRT. Why the other options fail: option b gives a comfort benefit as the reason for a therapy that is given to prevent cancer. Option c is right that the endometrium is the target but wrong to stop protection after 12 months, when the risk persists for as long as oestrogen is taken. Option d invents a rebound phenomenon and ignores the endometrium entirely.",
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
        text: "Fit a Gellhorn pessary without oestrogen and leave it in place for 12 months before the first review, since it is self-cleaning",
      },
      {
        id: "b",
        text: "Teach her to bear down several times a day to strengthen the levator ani so that the prolapse lifts back into place",
      },
      {
        id: "c",
        text: "Insert a weighted vaginal cone daily and remove it only once the prolapse no longer descends when she coughs",
      },
      {
        id: "d",
        text: "Fit a vaginal ring pessary with topical oestrogen to protect the mucosa, teach cleaning and replacement, and add pelvic floor training",
      },
    ],
    correctChoiceId: "d",
    rationale:
      "Pelvic organ prolapse (POP) results from attenuation and stretching of the endopelvic fascia and levator ani pelvic diaphragm muscles. In frail older women or those who decline or are unfit for surgery, vaginal pessaries (e.g., silicone ring or Gellhorn pessaries) provide an effective, safe conservative solution. The pessary mechanically elevates the prolapsed pelvic organs. Nursing care includes: (1) ensuring correct size fit; (2) teaching hygiene and removal/cleaning intervals (or scheduling clinic follow-up every 3–6 months); (3) prescribing local topical oestrogen cream to prevent vaginal epithelial ulceration; and (4) pelvic floor muscle training. Why the other options fail: option a uses a pessary without oestrogen and leaves it a year, which risks mucosal erosion and ulceration in an atrophic vagina. Option b asks the client to bear down, which raises intra-abdominal pressure and worsens prolapse rather than strengthening the floor. Option c uses a weighted cone, which is not a prolapse device and cannot be left in until the prolapse stops descending.",
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
        text: "Ensure safety and support; with consent collect forensic evidence; give emergency contraception, HIV PEP and STI prophylaxis; arrange counselling",
      },
      {
        id: "b",
        text: "Collect the forensic evidence first and defer emotional support until the examination is over, so that the samples are not lost",
      },
      {
        id: "c",
        text: "Give HIV PEP only if the assailant is known to be positive, and defer emergency contraception until a pregnancy test is back",
      },
      {
        id: "d",
        text: "Advise her to report to the police before any examination, since evidence cannot be collected without a case number",
      },
    ],
    correctChoiceId: "a",
    rationale:
      "Management of sexual assault requires a compassionate, trauma-informed approach addressing immediate medical, legal, and psychological needs: (1) Physical and psychological safety in a private environment; (2) Forensic evidence collection (clothing, swabs) before bathing, maintaining strict chain of custody; (3) Emergency contraception (levonorgestrel, ulipristal, or copper IUD) to prevent unwanted pregnancy; (4) HIV Post-Exposure Prophylaxis (PEP) started urgently within 72 hours and continued for 28 days; (5) Empiric antimicrobial prophylaxis against gonorrhoea, chlamydia, and trichomoniasis; (6) Tetanus and Hepatitis B vaccination; and (7) Structured psychological crisis intervention. Why the other options fail: option b sequences evidence before support, when a crying, trembling client cannot give informed consent to anything until she is settled. Option c makes PEP conditional on knowing the assailant's status, which is not required, and defers contraception that is time-critical. Option d makes a police case number a precondition of care, which no service requires and which re-traumatises the client.",
    strategy: "Sexual assault care bundle: Safety/trauma-informed care + forensic chain of custody + emergency contraception + HIV PEP (< 72 h) + empiric STI prophylaxis + counseling.",
    difficulty: "easy",
    tags: ["gynaecology", "sexual-assault", "trauma-informed-care", "hiv-pep", "emergency-contraception"],
    isFree: true,
  },
];
