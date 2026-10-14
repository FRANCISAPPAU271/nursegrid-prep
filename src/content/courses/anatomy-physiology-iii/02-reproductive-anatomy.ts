import type { CourseModule } from "../types";

export const reproductiveAnatomy: CourseModule = {
  slug: "reproductive-anatomy",
  title: "Reproductive anatomy: male, female and breast",
  summary:
    "The reproductive bodies: testes with spermatogenesis and the sperm journey through ducts and glands, erection and ejaculation physiology, testosterone and puberty, scrotal and prostate presentations with the torsion drill — then ovaries and tubes with ectopic logic, uterus, cervix, vagina and vulva with screening, the pelvic floor, the breast with triple assessment, and chaperoned, trauma-informed examination.",
  lessons: [
    {
      slug: "male-reproductive-system",
      title: "Male reproductive system",
      minutes: 20,
      objectives: [
        "Describe the testes, spermatogenesis and scrotal temperature control.",
        "Trace the sperm journey through ducts and glands with semen composition.",
        "Explain erection, ejaculation, testosterone and puberty.",
        "Sort scrotal and prostate presentations and run the torsion drill.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Testes: sperm factory in a cool pouch",
          paragraphs: [
            "The <strong>testes</strong> (~4 cm ovoids) manufacture sperm in <strong>seminiferous tubules</strong>: <strong>Sertoli cells</strong> nurse the developing spermatids (blood–testis barrier included), <strong>Leydig cells</strong> between tubules secrete <strong>testosterone</strong> under LH. <strong>Spermatogenesis</strong> takes ~72 days — fever, illness, drugs and heat depress counts for months (counsel the infertile couple on timeline, not just today's result). Sperm need <strong>2–3°C below core</strong>: the <strong>scrotum</strong> hangs them out, <strong>cremaster</strong> lifts with cold/arousal (<strong>cremasteric reflex</strong> — absent in torsion), <strong>dartos</strong> wrinkles the skin. <strong>Cryptorchidism</strong> (undescended — common in premmies) needs <strong>orchiopexy by ~12–18 months</strong>: fertility falls and <strong>malignancy risk rises</strong> with every year inside — examine every newborn boy, document both testes down, refer the missing one promptly. Normal semen: <strong>2–5 mL, ≥15 million/mL, ≥40% motile</strong> — analyse after 2–5 days' abstinence, repeat abnormal once before labelling infertility.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0031.svg",
          alt: "Male reproductive sagittal section. Sperm journey: testis to epididymis (mature and store) to vas deferens (vasectomy site) joining seminal-vesicle fructose and prostate fluid at the ejaculatory ducts, then the 20 cm urethra past Cowper's glands through erectile corpora. Erection is parasympathetic inflow, ejaculation sympathetic outflow. Torsion drill: sudden severe pain with high transverse testis, absent cremasteric reflex and nausea needs Doppler and exploration under 6 hours. BPH squeezes (dribbling, nocturia); cancer hardens (nodule, raised PSA) — DRE plus PSA.",
          caption: "Six stops from testis to urethra — and a torsion drill that never waits for morning.",
        },
        {
          type: "text",
          heading: "Ducts, glands, erection, testosterone",
          paragraphs: [
            "<strong>Epididymis</strong> (matures + stores, ~2 weeks — its infection, <strong>epididymitis</strong>, mimics torsion minus the emergency), <strong>vas deferens</strong> (45 cm muscular peristalsis — <strong>vasectomy</strong> cuts it; sterility only after <strong>two clear semens</strong>, condoms till then), <strong>ejaculatory ducts</strong> through the prostate joining <strong>seminal vesicles</strong> (fructose fuel, ~70% of volume) and <strong>prostate fluid</strong> (alkaline, PSA-liquefying, ~30%), <strong>Cowper's</strong> pre-lubricant. <strong>Erection</strong>: parasympathetic vasodilation fills <strong>corpora cavernosa/spongiosum</strong> against tunica (nitric oxide — sildenafil amplifies it; <strong>priapism >4 h</strong> — sickle cell, drugs, injections — is ischaemic emergency: aspirate/irrigate per protocol, never ice-and-wait). <strong>Ejaculation</strong>: sympathetic emission + somatic expulsion — cord injury, retroperitoneal surgery, diabetes and SSRIs split or blunt them; <strong>retrograde ejaculation</strong> (bladder neck fails — cloudy post-coital urine) follows prostate surgery. <strong>Testosterone</strong> (hypothalamus→LH→Leydig): puberty voice/muscle/hair/sperm, adult libido/erections/muscle/bone/red cells — <strong>hypogonadism</strong> (Klinefelter, pituitary, age, opioids): fatigue, low libido, gynaecomastia, anaemia, osteoporosis — replace after prostate/PSA/haematocrit screen. <strong>Gynaecomastia</strong> (puberty, drugs — spironolactone, cimetidine, antiandrogens — liver failure, tumours): reassure the pubertal, investigate the new adult lump (male breast cancer exists).",
          ],
        },
        {
          type: "table",
          heading: "Scrotal and prostate presentations",
          columns: ["Presentation", "Key features", "Likely", "Action"],
          rows: [
            ["Sudden severe testicular pain + vomit", "High-riding, transverse, absent cremasteric; any age, often teen", "TORSION", "Doppler NOW + emergency exploration <6 h — call urology before imaging if classic"],
            ["Gradual ache + fever + dysuria", "Tender epididymis, Prehn's relief on lifting, discharge possible", "Epididymitis/orchitis (STI or UTI)", "Antibiotics per cause, scrotal support, STI screen + partner trace, mumps history"],
            ["Bag-of-worms, worse standing", "Left-sided common, dull ache, infertility link", "Varicocele", "Refer (embolization/surgery); sudden right-sided in older man = renal mass until ruled out"],
            ["Smooth swollen scrotum, transilluminates", "Painless, fluctuant, can't feel testis above it", "Hydrocele", "Reassure + refer; transillumination fails in tumour/blood — ultrasound decides"],
            ["Painless hard testicular lump", "Young man, heaviness, ± back pain/gynaecomastia", "Testicular cancer until proven otherwise", "URGENT ultrasound + tumour markers + urology — monthly self-exam teaching for all young men"],
            ["Dribbling, hesitancy, nocturia, retention", "Smooth enlarged prostate, frequency, weak stream", "BPH", "IPSS score, flow rate, alpha-blockers/5-ARI/surgery; retention = catheterize per protocol"],
            ["Fever + perineal pain + dysuria", "Exquisitely tender boggy prostate", "Prostatitis (avoid vigorous DRE — bacteraemia)", "Cultures + antibiotics, analgesia, STI screen; chronic needs urology"],
            ["Hard nodule / asymmetry + raised PSA", "± bone pain, weight loss, retention", "Prostate cancer", "Urgent urology (MRI + biopsy); PSA counselled testing from 50 (earlier if family/black African risk)"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Torsion: the testis dies on your watch or lives by your speed",
          body: "ANY sudden severe testicular pain — child, teen or adult — is torsion until proven otherwise: examine immediately (lying vs high-riding, transverse lie, absent cremasteric reflex, nausea/vomiting), Doppler only if it does not delay, urology/surgical emergency call in parallel, nil by mouth, analgesia, consent for exploration + contralateral fixation. Salvage: ~90% under 6 hours, ~50% at 12, near zero at 24. Document time of onset, time examined, time referred, time accepted — the testis's survival is measured in your minutes. And teach every boy over 10: sudden ball pain = emergency department same hour, no embarrassment, no waiting for father to come home.",
        },
      ],
      keyPoints: [
        "Sertoli nurse, Leydig make testosterone; 72-day spermatogenesis; scrotum 2–3°C cooler; cryptorchid → orchiopexy by ~12–18 months.",
        "Epididymis → vas (two clear semens post-vasectomy) → seminal fructose + prostate fluid → urethra; semen 2–5 mL, ≥15M/mL.",
        "Erection parasympathetic (priapism >4 h = emergency); ejaculation sympathetic + somatic; testosterone rules puberty/libido/bone.",
        "Torsion: sudden + high + transverse + absent cremasteric + nausea → <6 h exploration; salvage dies by the hour.",
        "BPH squeezes (IPSS, retention = catheter), prostatitis forbids vigorous DRE, cancer hardens (PSA counselled).",
        "Monthly testicular self-exam for young men: painless hard lump = urgent ultrasound + markers.",
      ],
      quiz: {
        keywords: ["testis", "spermatogenesis", "testosterone", "epididymis", "vasectomy", "prostate", "erection", "priapism", "torsion", "cremasteric", "varicocele", "hydrocele", "BPH", "PSA", "testicular cancer"],
        categories: ["medsurg", "fundamentals"],
      },
    },
    {
      slug: "female-reproductive-system-and-breast",
      title: "Female reproductive system and the breast",
      minutes: 20,
      objectives: [
        "Describe ovaries and tubes with ovulation and ectopic risk.",
        "Describe uterus, cervix, vagina and vulva with screening logic.",
        "Explain the pelvic floor with prolapse, incontinence and Kegels.",
        "Describe the breast with self-awareness and triple assessment.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Ovaries and tubes: monthly release, risky journey",
          paragraphs: [
            "Ovaries hold a girl's lifetime <strong>oocytes</strong> from birth (~1–2 million, ~400 ever ovulated): each cycle <strong>FSH</strong> recruits follicles, one <strong>Graafian</strong> dominates, the <strong>LH surge</strong> ruptures it (<strong>ovulation</strong> ~day 14), the <strong>corpus luteum</strong> secretes progesterone for ~14 days then dies unless hCG rescues it (Module 03's full cycle). <strong>Fimbriae</strong> sweep the ovum into the tube; <strong>ampulla</strong> hosts <strong>fertilisation</strong>; <strong>cilia + peristalsis</strong> waft the blastocyst to the uterus over ~4 days. Damaged tubes trap it: <strong>ectopic</strong> risks — <strong>PID/chlamydia</strong> (commonest preventable: screen + treat partners), smoking, IVF, tubal surgery, previous ectopic, IUCD (rare overall, proportionally tubal). <strong>Ovarian torsion</strong> (sudden unilateral pain + vomiting + tender mass — same <6-hour logic as testes) and <strong>ruptured corpus luteum/ectopic</strong> (syncope + shoulder-tip pain + shock ± vaginal bleeding — <strong>blood in the abdomen irritates the diaphragm</strong>) are the gynae emergencies: pregnancy test + resuscitate + scan + theatre. <strong>PCOS</strong> (oligo-ovulation + hyperandrogenism + polycystic ovaries — weight, acne, hirsutism, infertility, future diabetes/CVD) and <strong>premature ovarian insufficiency</strong> (<40, high FSH — bone + cardiac + fertility counselling) bracket the ovary's working life.",
          ],
        },
        {
          type: "text",
          heading: "Uterus, cervix, vagina, vulva",
          paragraphs: [
            "<strong>Uterus</strong> (pear, 7 cm): <strong>perimetrium</strong> (peritoneal coat), <strong>myometrium</strong> (oxytocin-driven muscle — labour + postnatal haemostasis by <strong>living ligatures</strong>), <strong>endometrium</strong> (shed monthly, rebuilt by oestrogen — <strong>endometriosis</strong>: ectopic endometrium = dysmenorrhoea + dyspareunia + infertility; <strong>adenomyosis</strong>: within muscle = heavy painful periods; <strong>fibroids</strong>: benign muscle tumours = heavy bleeding + pressure + obstetric distortion, commonest in Black women). Positions: <strong>anteverted/anteflexed</strong> usual; retroverted/retroflexed variant (backache, exam angle — reassure, not disease). <strong>Cervix</strong>: mucus plug, <strong>transformation zone</strong> where HPV causes cancer — screen it (<strong>HPV vaccine 9–14 y</strong>, <strong>VIA/Pap + treat precancer</strong> per Ghana protocol; <strong>postcoital/intermenstrual bleeding or discharge = urgent referral</strong>, never reassure-and-repeat-smear). <strong>Vagina</strong>: <strong>lactobacilli + acidic pH</strong> defend (antibiotics, douching, semen disrupt — <strong>bacterial vaginosis</strong>: fishy discharge; <strong>candidiasis</strong>: itchy curdy; <strong>trichomoniasis</strong>: frothy + strawberry cervix — all need speculum + pH + microscopy/culture, partners where STI). <strong>Vulva</strong>: labia, clitoris, vestibule, <strong>Bartholin's glands</strong> (abscess: tense tender lump — marsupialization, STI screen); <strong>FGM</strong> survivors need skilled, non-judgmental care (de-infibulation counselling, obstetric planning, safeguarding the daughters — document type, never stigmatize).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0032.svg",
          alt: "Female reproductive frontal section: ovaries with follicles, fimbriae sweeping the ovum, tubes with ampulla (fertilisation and ectopic site), uterus (fundus/body with oxytocin-driven myometrium, shedding endometrium), cervix (transformation zone, screen it), vagina. Breast inset: lobules making milk, ducts carrying it, nipple and areola, lymph draining to axillary sentinel nodes; most cancers start in ducts. Red flags: postcoital bleeding, ectopic triad, breast lump/nipple change/dimpling. Pelvic floor Kegels for every postnatal woman.",
          caption: "Monthly release, risky journey, screened cervix — and breasts draining to the axilla.",
        },
        {
          type: "text",
          heading: "Pelvic floor and breast",
          paragraphs: [
            "<strong>Levator ani + urogenital diaphragm</strong> hammock bladder, uterus and rectum against intra-abdominal pressure: childbirth, chronic cough/constipation, heavy lifting and menopause weaken it → <strong>stress incontinence</strong> (cough/sneeze leaks), <strong>prolapse</strong> (cystocele, uterine, rectocele — dragging, bulge, incomplete emptying), faecal urgency. <strong>Kegels</strong> (squeeze-as-if-stopping-wind, 8–12 × 3/day, no breath-holding/straining — teach antenatally AND postnatally, check technique digitally where consented), weight + cough + constipation control, pessaries, physiotherapy, surgery for failures — incontinence pads without assessment are neglect. <strong>Breast</strong>: <strong>lobules/alveoli</strong> (prolactin makes, <strong>oxytocin ejects</strong> — let-down) → <strong>ducts</strong> (most cancers start here) → <strong>nipple/areola + Montgomery's tubercles</strong>; <strong>lymph → axilla</strong> (<strong>sentinel node</strong> biopsied first in cancer staging). Teach <strong>breast awareness</strong> (know normal, look + feel monthly, report change — no ritual technique outperforms knowing one's own tissue) + <strong>clinical exam + mammography</strong> per protocol (40–50+ or high-risk earlier; dense young breasts need ultrasound). Red flags: <strong>new lump (hard, irregular, fixed — but soft/mobile fibroadenomas in young women reassure after assessment), nipple discharge (bloody), retraction, eczema (Paget's), skin dimpling/peau d'orange, axillary lump</strong> → <strong>triple assessment</strong> (exam + imaging + biopsy) within 2 weeks — never reassure a breast lump without it.",
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Chaperones, consent and words that don't wound",
          body: "Offer a chaperone for EVERY intimate examination — all genders, all ages — document name/role/acceptance-or-decline; explain each step before doing it and stop the instant consent wavers; use the patient's own words for body parts after offering the clinical term; drape to expose only what's examined; never comment on grooming, odour, tattoos or FGM. Adolescents get confidentiality with safeguarding limits explained upfront. Survivors of assault/FGM/trauma need control (mirror offered, stop-signal agreed, female examiner if preferred) — the examination that retraumatizes is the one done without asking. Trauma-informed is not slow: it is explain, ask, drape, stop-on-signal — four habits, every time.",
        },
      ],
      keyPoints: [
        "Ovaries: FSH recruits, LH surge ovulates, corpus luteum bridges 14 days; tubes: fimbriae sweep, ampulla fertilizes, cilia deliver.",
        "Ectopic risks: PID/chlamydia, smoking, IVF, surgery; rupture = syncope + shoulder-tip + shock — pregnancy test + resuscitate + theatre.",
        "Uterus: myometrium (living ligatures), endometrium (endometriosis/adenomyosis/fibroids); cervix: HPV vaccine + VIA/Pap, bleed = refer.",
        "Vagina: lactobacilli defend (BV/candida/trich need speculum + culture); vulva: Bartholin's + skilled FGM care without stigma.",
        "Pelvic floor: Kegels antenatal + postnatal; prolapse/incontinence assessed, never just padded.",
        "Breast: lobules→ducts→nipple, lymph→axilla; awareness + red flags → triple assessment in 2 weeks; chaperone every intimate exam.",
      ],
      quiz: {
        keywords: ["ovary", "ovulation", "corpus luteum", "fallopian tube", "ectopic", "uterus", "endometriosis", "fibroids", "cervix", "HPV", "vagina", "pelvic floor", "Kegels", "breast", "triple assessment"],
        categories: ["medsurg", "fundamentals"],
      },
    },
  ],
};
