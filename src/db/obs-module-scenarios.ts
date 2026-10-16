import type { AuthoredQuestion } from "./authored-bank";

/**
 * Dedicated NCLEX-style clinical scenario questions for Obstetric Nursing modules.
 * Authored specifically for Obstetric Nursing course modules to test authentic clinical judgment,
 * antenatal screening, partograph interpretation, intrapartum care, obstetric emergencies (PPH, cord prolapse,
 * shoulder dystocia, eclampsia), postnatal recovery, and obstetric pharmacology.
 */
export const OBS_MODULE_SCENARIOS: AuthoredQuestion[] = [
  // =========================================================================
  // MODULE 01: REPRODUCTIVE FOUNDATIONS & CONCEPTION
  // =========================================================================
  {
    authoredId: "NG-MOD-OBS-001",
    categorySlug: "health-promotion",
    stem: "A 26-year-old client with a regular 28-day menstrual cycle visits the clinic seeking pre-conception counselling. She asks the nurse when she is most likely to ovulate and which days represent her optimal fertile window. Which explanation is clinically accurate?",
    choices: [
      { id: "a", text: "Ovulation occurs on day 7 of the cycle; the fertile window lasts for 24 hours after menstruation ends" },
      { id: "b", text: "Ovulation occurs approximately 14 days before the onset of the next menses; the fertile window includes the 5 days before ovulation and the day of ovulation" },
      { id: "c", text: "Ovulation occurs precisely 10 days following the cessation of menstrual flow; conception can occur only during that single 12-hour period" },
      { id: "d", text: "Ovulation is triggered by high progesterone levels on day 21; intercourse is most fertile during the luteal phase" }
    ],
    correctChoiceId: "b",
    rationale: "In a 28-day cycle, the luteal phase is relatively fixed at 14 days. Therefore, ovulation occurs approximately 14 days before the start of the next menstrual period (around cycle day 14). Because human spermatozoa can survive in fertile cervical mucus for up to 5 days and an unfertilized ovum remains viable for approximately 12 to 24 hours after ovulation, the fertile window spans the 5 days preceding ovulation through the day of ovulation itself. Ovulation is triggered by a surge in luteinizing hormone (LH), not progesterone.",
    strategy: "Recall the 14-day rule: ovulation occurs 14 days prior to the next expected period. Sperm survive up to 5 days, egg survives 12-24 hours; fertile window = 5 days before + day of ovulation.",
    difficulty: "easy",
    tags: ["obstetrics", "menstrual-cycle", "ovulation", "conception", "fertility"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-OBS-002",
    categorySlug: "maternal-newborn",
    stem: "A woman at 10 weeks gestation attends her first antenatal booking visit. During the assessment, which finding is categorized as a POSITIVE (diagnostic) sign of pregnancy, rather than a presumptive or probable sign?",
    choices: [
      { id: "a", text: "Amenorrhoea accompanied by morning nausea and breast tenderness" },
      { id: "b", text: "A positive home urine human chorionic gonadotropin (hCG) pregnancy test" },
      { id: "c", text: "Purplish-blue discolouration of the vaginal mucosa and cervix (Chadwick's sign)" },
      { id: "d", text: "Auscultation of fetal heart tones using a handheld Doppler transducer" }
    ],
    correctChoiceId: "d",
    rationale: "Signs of pregnancy fall into three distinct classes: (1) Presumptive signs (subjective, felt by the woman: amenorrhoea, nausea/vomiting, breast tenderness, fatigue, quickening); (2) Probable signs (objective examiner findings or tests: positive hCG test, Goodell's sign, Hegar's sign, Chadwick's sign, ballottement); and (3) Positive signs (irrefutable proof of a fetus: auscultation of fetal heartbeat by Doppler at 10–12 weeks or fetoscope at 18–20 weeks, visualization of the fetus on ultrasound, and fetal movement palpated by a trained examiner).",
    strategy: "Only three things are POSITIVE signs of pregnancy: Hearing fetal heart tones, Seeing the fetus on ultrasound, and Feeling fetal movement by the clinician. Everything else is presumptive or probable.",
    difficulty: "medium",
    tags: ["obstetrics", "signs-of-pregnancy", "antenatal-assessment", "diagnostic-criteria"],
    isFree: true,
  },

  // =========================================================================
  // MODULE 02: FAMILY PLANNING, GYNAECOLOGY & STIs
  // =========================================================================
  {
    authoredId: "NG-MOD-OBS-003",
    categorySlug: "health-promotion",
    stem: "A 36-year-old woman requests a prescription for combined oral contraceptive pills (COCs). During health history screening, which finding represents an ABSOLUTE contraindication (WHO Medical Eligibility Criteria Category 4) to prescribing estrogen-containing contraceptives?",
    choices: [
      { id: "a", text: "Mild dysmenorrhoea managed with ibuprofen" },
      { id: "b", text: "Smoking 15 cigarettes per day at age 36" },
      { id: "c", text: "History of resolved Chlamydia infection 2 years ago" },
      { id: "d", text: "Body mass index (BMI) of 26 kg/m2" }
    ],
    correctChoiceId: "b",
    rationale: "Under the WHO Medical Eligibility Criteria for Contraceptive Use, women aged 35 years or older who smoke 15 or more cigarettes per day have a Category 4 absolute contraindication to combined hormonal contraceptives (pills, patches, rings, or injectables containing estrogen). Estrogen combined with smoking and advanced maternal age exponentially increases the risk of arterial thromboembolism, myocardial infarction, and ischemic stroke. Progestin-only contraceptives (pills, implants, levonorgestrel IUD) or copper IUDs are safe, appropriate alternatives.",
    strategy: "Remember the absolute contraindications for estrogen-containing contraceptives: Smoker >= 35 years old, History of DVT/PE, Migraine with aura, Uncontrolled hypertension (> 160/100), Active breast cancer, and Acute liver disease.",
    difficulty: "medium",
    tags: ["obstetrics", "family-planning", "oral-contraceptives", "contraindications", "womens-health"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-OBS-004",
    categorySlug: "maternal-newborn",
    stem: "A 22-year-old client presents to the reproductive health clinic 4 days (96 hours) after experiencing unprotected sexual intercourse. She requests emergency contraception. Which method is the MOST effective emergency contraceptive option when inserted within 5 days of intercourse?",
    choices: [
      { id: "a", text: "Oral levonorgestrel 1.5 mg in a single dose" },
      { id: "b", text: "Insertion of a Copper Intrauterine Device (Copper IUD)" },
      { id: "c", text: "High-dose combined ethinylestradiol and levonorgestrel (Yuzpe regimen)" },
      { id: "d", text: "Depot medroxyprogesterone acetate (DMPA) intramuscular injection" }
    ],
    correctChoiceId: "b",
    rationale: "The copper intrauterine device (Cu-IUD) is the most effective form of emergency contraception available, with a failure rate of less than 0.1%. It can be inserted up to 5 days (120 hours) after unprotected intercourse (or up to 5 days after the earliest calculated day of ovulation) and provides continuous, highly effective, reversible contraception for up to 10 to 12 years. Oral levonorgestrel is licensed only up to 72 hours (efficacy drops significantly after 72 hours), while ulipristal acetate is effective up to 120 hours but still inferior in efficacy to the copper IUD.",
    strategy: "Copper IUD is the gold standard emergency contraceptive: > 99.9% effective up to 120 hours (5 days) post-coitus, plus provides long-term ongoing contraception.",
    difficulty: "medium",
    tags: ["obstetrics", "emergency-contraception", "copper-iud", "family-planning"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-OBS-005",
    categorySlug: "maternal-newborn",
    stem: "A 24-year-old woman presents to the emergency room with severe lower abdominal pain, purulent vaginal discharge, and a temperature of 38.6 degrees Celsius. On bimanual examination, the nurse notes exquisite cervical motion tenderness ('Chandelier sign') and bilateral adnexal fullness. What primary long-term reproductive complication should the nurse counsel this client about if Pelvic Inflammatory Disease (PID) is inadequately treated?",
    choices: [
      { id: "a", text: "Cervical intraepithelial neoplasia" },
      { id: "b", text: "Tubal factor infertility and ectopic pregnancy" },
      { id: "c", text: "Endometrial hyperplasia and polycystic ovary syndrome" },
      { id: "d", text: "Uterine leiomyomas (fibroids)" }
    ],
    correctChoiceId: "b",
    rationale: "Pelvic Inflammatory Disease (PID) is an ascending polymicrobial infection (most commonly initiated by Chlamydia trachomatis or Neisseria gonorrhoeae) of the upper genital tract. Inadequate or delayed treatment leads to endosalpingitis, tubal scarring, loss of ciliary function, and pelvic adhesions. This irreversible tubal architecture damage increases the risk of tubal factor infertility six- to tenfold and dramatically raises the risk of future ectopic pregnancy and chronic pelvic pain.",
    strategy: "PID sequelae: Salpingitis causes tubal scarring -> leading directly to Infertility, Ectopic pregnancy, and Chronic pelvic pain.",
    difficulty: "medium",
    tags: ["obstetrics", "pid", "gynaecology", "ectopic-pregnancy", "stis"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 03: PREGNANCY, ANTENATAL CARE & COMPLICATIONS
  // =========================================================================
  {
    authoredId: "NG-MOD-OBS-006",
    categorySlug: "maternal-newborn",
    stem: "A pregnant client tells the midwife that the first day of her last normal menstrual period (LMP) was June 10, 2026. Using Naegele's rule, what is her estimated date of delivery (EDD)?",
    choices: [
      { id: "a", text: "March 17, 2027" },
      { id: "b", text: "March 3, 2027" },
      { id: "c", text: "April 17, 2027" },
      { id: "d", text: "February 17, 2027" }
    ],
    correctChoiceId: "a",
    rationale: "Naegele's rule calculates the Estimated Date of Delivery (EDD) by: (1) Taking the first day of the Last Menstrual Period (LMP: June 10, 2026), (2) Subtracting 3 calendar months (June minus 3 months = March), (3) Adding 7 days (10 + 7 = 17), and (4) Adjusting the year forward by one year (2026 + 1 = 2027). The resulting EDD is March 17, 2027.",
    strategy: "Naegele's Rule: LMP - 3 months + 7 days + 1 year. June 10 - 3 months = March 10; March 10 + 7 days = March 17, 2027.",
    difficulty: "easy",
    tags: ["obstetrics", "naegele-rule", "edd", "gestational-age", "antenatal-care"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-OBS-007",
    categorySlug: "maternal-newborn",
    stem: "A primigravida at 34 weeks gestation with severe preeclampsia is receiving an intravenous infusion of magnesium sulfate at 2 g/hour. During the hourly nursing assessment, which clinical finding indicates MAGNESIUM TOXICITY requiring immediate cessation of the infusion?",
    choices: [
      { id: "a", text: "Blood pressure of 148/94 mmHg" },
      { id: "b", text: "Absent deep tendon reflexes (patellar reflex 0/4) and respiratory rate of 10 breaths/minute" },
      { id: "c", text: "Urine output of 45 mL/hour over the preceding 2 hours" },
      { id: "d", text: "Mild flushing and diaphoresis following the loading dose" }
    ],
    correctChoiceId: "b",
    rationale: "Magnesium sulfate toxicity follows a progressive clinical sequence: (1) Loss of deep tendon reflexes (occurs at serum magnesium levels of 4–5 mmol/L [8–10 mg/dL]), (2) Respiratory depression (RR < 12 breaths/min; occurs at 5–7 mmol/L), (3) Oliguria (< 30 mL/hr, causing further magnesium accumulation), and (4) Cardiac arrest (levels > 7 mmol/L). Immediate nursing interventions for toxicity include: STOP the magnesium infusion immediately, administer oxygen, call for assistance, and administer the antidote—10% calcium gluconate 10 mL (1 g) IV slowly over 3 to 5 minutes.",
    strategy: "Magnesium Toxicity Triad: Absent DTRs + Respiratory rate < 12 bpm + Urine output < 30 mL/hr. Action: STOP infusion immediately and give Calcium Gluconate.",
    difficulty: "hard",
    tags: ["obstetrics", "preeclampsia", "magnesium-sulfate", "toxicity", "calcium-gluconate"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-OBS-008",
    categorySlug: "maternal-newborn",
    stem: "A multigravida at 32 weeks gestation arrives at the maternity triage unit reporting sudden bright red vaginal bleeding. She denies abdominal pain or uterine tenderness. Electronic fetal monitoring shows a reassuring fetal heart rate baseline of 140 bpm. On palpation, the uterus is soft, relaxed, and non-tender. Which nursing action is strictly CONTRAINDICATED?",
    choices: [
      { id: "a", text: "Inserting two large-bore (16-gauge) intravenous cannulae" },
      { id: "b", text: "Performing a digital vaginal examination to determine cervical dilation" },
      { id: "c", text: "Obtaining an emergent transabdominal obstetric ultrasound" },
      { id: "d", text: "Drawing blood for type and crossmatch and baseline coagulation profile" }
    ],
    correctChoiceId: "b",
    rationale: "The clinical presentation of painless, bright red vaginal bleeding with a soft, non-tender uterus in the third trimester is the hallmark of Placenta Previa. A digital vaginal examination (or insertion of any vaginal instrument/speculum) is strictly contraindicated until the placental location is confirmed by ultrasound. Digital probing can puncture the low-lying placenta or separate it from the lower uterine segment, triggering catastrophic, life-threatening maternal hemorrhage and fetal exsanguination.",
    strategy: "Painless bright red bleeding in third trimester = Placenta Previa until proven otherwise. NEVER do a digital vaginal exam! (Contrast with Abruptio Placentae: painful dark red bleeding + rigid board-like uterus).",
    difficulty: "medium",
    tags: ["obstetrics", "placenta-previa", "antepartum-haemorrhage", "contraindications", "triage"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 04: LABOUR, BIRTH & PARTOGRAPH MONITORING
  // =========================================================================
  {
    authoredId: "NG-MOD-OBS-009",
    categorySlug: "maternal-newborn",
    stem: "A midwife monitors a labouring woman using the WHO modified partograph. The woman reached 5 cm cervical dilation 4 hours ago. On current reassessment, cervical dilation remains 5 cm, and the plotted line has crossed to the right of the Action Line. What is the clinical implication of crossing the Action Line?",
    choices: [
      { id: "a", text: "Labour progress is normal and delivery is imminent within the next hour" },
      { id: "b", text: "There is prolonged/obstructed labour requiring immediate senior medical review, intervention, or transfer to a comprehensive surgical facility" },
      { id: "c", text: "The woman has entered the latent phase and should be discharged home to rest" },
      { id: "d", text: "Fetal heart rate accelerations are documented, indicating active fetal reserve" }
    ],
    correctChoiceId: "b",
    rationale: "On the WHO partograph, active labour starts at 4–5 cm dilation with an expected minimum progress rate of 1 cm/hour (represented by the Alert Line). The Action Line is drawn 4 hours to the right of and parallel to the Alert Line. If cervical dilation plots at or beyond the Action Line, it indicates severe protracted labour or cephalopelvic disproportion/obstruction. This mandates immediate management decisions: full assessment for obstruction, augmentation with oxytocin if contractions are inadequate and no obstruction exists, or immediate operative delivery (Caesarean section).",
    strategy: "Partograph lines: Alert line = normal progress (1 cm/hr). Reaching Alert line = warning, prepare. Crossing Action line (4 hours later) = MANDATORY clinical action/intervention/Caesarean delivery.",
    difficulty: "medium",
    tags: ["obstetrics", "partograph", "labour-progress", "obstructed-labour", "intrapartum"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-OBS-010",
    categorySlug: "maternal-newborn",
    stem: "During continuous electronic fetal monitoring in active labour, the nurse observes recurrent decelerations that begin after the peak of each uterine contraction and return to baseline only after the contraction has fully resolved. What is the underlying pathophysiology and priority nursing action?",
    choices: [
      { id: "a", text: "Umbilical cord compression; reposition the mother onto her hands and knees" },
      { id: "b", text: "Fetal head compression; prepare for immediate spontaneous vaginal delivery" },
      { id: "c", text: "Uteroplacental insufficiency; turn mother to lateral position, apply 10 L oxygen, discontinue oxytocin infusion, and infuse IV fluid bolus" },
      { id: "d", text: "Maternal hypotension from epidural; place client in a supine Trendelenburg position" }
    ],
    correctChoiceId: "c",
    rationale: "Late decelerations are symmetrical, gradual decreases in fetal heart rate that begin AFTER the peak of the contraction and return to baseline after the contraction ends. They indicate uteroplacental insufficiency (inadequate fetal oxygenation and placental perfusion during uterine work). Priority intrauterine resuscitation measures ('L-I-O-N'): (1) Left lateral positioning (relieves aortocaval compression and improves placental blood flow), (2) Increase IV fluids (bolus isotonic crystalloid to expand volume), (3) Oxygen (8–10 L/min via non-rebreather mask), and (4) Notify provider and STOP oxytocin infusion immediately.",
    strategy: "Deceleration Mnemonic (VEAL CHOP): Variable = Cord compression; Early = Head compression; Accelerations = Okay; Late = Placental insufficiency (LION: Lateral tilt, IV fluids, Oxygen, No oxytocin).",
    difficulty: "hard",
    tags: ["obstetrics", "fetal-monitoring", "late-decelerations", "uteroplacental-insufficiency", "resuscitation"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-OBS-011",
    categorySlug: "maternal-newborn",
    stem: "Following the normal vaginal delivery of a vigorous infant, the midwife carries out Active Management of the Third Stage of Labour (AMTSL) to prevent postpartum haemorrhage. Which triad of clinical actions defines standard AMTSL?",
    choices: [
      { id: "a", text: "Vigorous fundal pushing immediately after delivery, manual removal of placenta within 5 minutes, and ice application to perineum" },
      { id: "b", text: "Administration of prophylactic oxytocin (10 IU IM) within 1 minute of birth, controlled cord traction with counter-traction on the lower uterine segment, and immediate uterine massage following placental delivery" },
      { id: "c", text: "Routine episiotomy repair, intravenous ergometrine bolus before delivery of the shoulders, and expectant waiting for 60 minutes" },
      { id: "d", text: "Immediate clamping of the umbilical cord within 5 seconds, maternal bearing down, and intrauterine gauze packing" }
    ],
    correctChoiceId: "b",
    rationale: "Active Management of the Third Stage of Labour (AMTSL) reduces the incidence of primary postpartum hemorrhage by more than 60%. The evidence-based WHO protocol consists of: (1) Administration of a prophylactic uterotonic (oxytocin 10 IU IM is the gold standard) within 1 minute of delivery of the baby (after excluding a second twin), (2) Controlled cord traction (CCT) applied with simultaneous counter-traction on the suprapubic area during a contraction, and (3) Palpation and gentle massage of the uterine fundus immediately after placental expulsion to ensure a firm, contracted uterus.",
    strategy: "AMTSL Triad: 1. Uterotonic (Oxytocin 10 IU IM within 1 min); 2. Controlled cord traction with suprapubic counter-traction; 3. Uterine massage after delivery of placenta.",
    difficulty: "medium",
    tags: ["obstetrics", "amtsl", "third-stage-of-labour", "pph-prevention", "oxytocin"],
    isFree: true,
  },

  // =========================================================================
  // MODULE 05: OBSTETRIC EMERGENCIES
  // =========================================================================
  {
    authoredId: "NG-MOD-OBS-012",
    categorySlug: "maternal-newborn",
    stem: "Thirty minutes after an unassisted vaginal delivery, a client experiences a sudden gush of blood. The midwife palpates the abdomen and finds the uterine fundus soft, 'boggy', and displaced to the right, 3 cm above the umbilicus. What is the midwife's FIRST priority action?",
    choices: [
      { id: "a", text: "Administer 0.2 mg intramuscular ergometrine immediately" },
      { id: "b", text: "Perform vigorous fundal massage while assisting the client to empty her bladder or catheterizing" },
      { id: "c", text: "Prepare the client for emergent exploratory laparotomy and hysterectomy" },
      { id: "d", text: "Place the client in a high Fowler's position to slow pelvic pooling" }
    ],
    correctChoiceId: "b",
    rationale: "A soft, 'boggy' fundus indicates uterine atony, the most common cause (70–80%) of primary postpartum hemorrhage. A fundus that is boggy AND displaced upwards or to the right indicates bladder distension, which physically prevents effective uterine myometrial contraction and retraction. The immediate nursing actions are: perform continuous fundal massage to stimulate uterine contraction and empty the bladder (via spontaneous voiding or in-and-out catheterization), followed by uterotonic administration.",
    strategy: "Displaced, boggy fundus = Full bladder + Uterine atony. Immediate reflex: Fundal massage to stop bleeding AND catheterize/empty the bladder to allow complete contraction.",
    difficulty: "easy",
    tags: ["obstetrics", "postpartum-haemorrhage", "uterine-atony", "fundal-massage", "bladder-distension"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-OBS-013",
    categorySlug: "maternal-newborn",
    stem: "While examining a labouring woman whose fetal membranes ruptured 5 minutes ago, the midwife observes a loop of umbilical cord protruding from the vaginal introitus. Fetal heart rate abruptly drops to 70 beats/minute. Which immediate nursing intervention is crucial to save the fetus while preparing for emergency Caesarean delivery?",
    choices: [
      { id: "a", text: "Gently push the exposed loop of umbilical cord back inside the uterine cavity" },
      { id: "b", text: "Insert a sterile gloved hand into the vagina to elevate the presenting part off the umbilical cord, and place the mother in knee-chest or Trendelenburg position" },
      { id: "c", text: "Instruct the mother to bear down firmly to expedite spontaneous vaginal delivery" },
      { id: "d", text: "Apply dry sterile gauze around the cord and await spontaneous restoration of fetal heart rate" }
    ],
    correctChoiceId: "b",
    rationale: "Umbilical cord prolapse is an acute obstetric emergency where the cord falls below the presenting part, leading to mechanical compression between the fetal head/breech and maternal pelvis, causing sudden fetal anoxia. The nurse must insert a gloved hand into the vagina and apply continuous upward pressure on the fetal presenting part to keep it elevated off the cord until delivery in the operating theatre. Position the mother in exaggerated knee-chest or steep Trendelenburg position to use gravity. The cord must NEVER be pushed back into the uterus (causes cord vasospasm).",
    strategy: "Cord prolapse emergency reflex: Glove hand -> Elevate presenting part off cord -> Knee-chest/Trendelenburg position -> Emergency C-section. NEVER push the cord back inside!",
    difficulty: "hard",
    tags: ["obstetrics", "cord-prolapse", "obstetric-emergency", "fetal-distress", "knee-chest-position"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-OBS-014",
    categorySlug: "maternal-newborn",
    stem: "During a vaginal delivery, the fetal head delivers but retracts tightly against the maternal perineum ('turtle sign'). The anterior shoulder fails to deliver with gentle downward traction. The midwife recognizes shoulder dystocia. Which intervention should the clinical team perform FIRST?",
    choices: [
      { id: "a", text: "Apply firm fundal pressure from the top of the uterus while pulling down on the infant's neck" },
      { id: "b", text: "Perform the McRoberts maneuver (hyperflex the mother's hips against her abdomen) while an assistant applies downward suprapubic pressure" },
      { id: "c", text: "Attempt immediate vacuum extraction application to the fetal scalp" },
      { id: "d", text: "Perform a fundal push while performing an episiotomy extension" }
    ],
    correctChoiceId: "b",
    rationale: "Shoulder dystocia occurs when the fetal anterior shoulder impacts against the maternal symphysis pubis. The first-line, most effective intervention is the McRoberts Maneuver (hyperflexing the mother's legs tightly back against her abdomen), which flattens the sacral promontory and widens the pelvic outlet, combined with simultaneous downward and lateral Suprapubic Pressure to disimpact the shoulder under the pubic bone. Fundal pressure is strictly CONTRAINDICATED because it impacts the shoulder harder, ruptures the uterus, and causes permanent brachial plexus injury (Erb's palsy).",
    strategy: "Shoulder dystocia management: McRoberts maneuver + Suprapubic pressure. Strict contraindication: NEVER apply fundal pressure (it wedges the shoulder tighter and tears the brachial plexus).",
    difficulty: "medium",
    tags: ["obstetrics", "shoulder-dystocia", "mcroberts-maneuver", "suprapubic-pressure", "emergencies"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-OBS-015",
    categorySlug: "maternal-newborn",
    stem: "A woman with severe preeclampsia suddenly begins having generalized tonic-clonic convulsions in the labour room. What is the immediate priority sequence of nursing actions during the active convulsion?",
    choices: [
      { id: "a", text: "Force a padded mouth gag between her teeth, hold down her limbs, and administer 10 mg oral diazepam" },
      { id: "b", text: "Call for help, turn the client onto her side (lateral tilt), protect her from physical trauma, maintain airway and oxygenation, and prepare IV magnesium sulfate loading dose" },
      { id: "c", text: "Transport the client immediately to the operating theatre while actively seizing" },
      { id: "d", text: "Administer rapid IV boluses of labetalol to bring blood pressure below 100/60 mmHg" }
    ],
    correctChoiceId: "b",
    rationale: "During an eclamptic seizure, immediate maternal stabilization is the absolute priority: (1) Call for urgent assistance, (2) Turn the woman onto her left side to maintain airway patency, prevent aspiration, and relieve aortocaval compression, (3) Protect the head and body from traumatic injury without physical restraint, (4) Administer high-flow oxygen, and (5) Once the convulsion ceases, administer the loading dose of magnesium sulfate (4 g IV over 10–15 minutes plus 10 g IM) to prevent recurrent seizures. Never insert mouth gags or tongue blades (causes dental fracture, vomiting, and laryngospasm). Delivery occurs only after maternal stabilization.",
    strategy: "Eclampsia active seizure protocol: Call for help + Side-lying lateral tilt + Protect from injury + Oxygen + Magnesium sulfate loading dose. Never insert items into the mouth during a seizure.",
    difficulty: "hard",
    tags: ["obstetrics", "eclampsia", "seizures", "magnesium-sulfate", "emergency-care"],
    isFree: false,
  },

  // =========================================================================
  // MODULE 06: POSTNATAL & NEWBORN CARE
  // =========================================================================
  {
    authoredId: "NG-MOD-OBS-016",
    categorySlug: "maternal-newborn",
    stem: "A postpartum nurse evaluates a client on day 3 following an uncomplicated vaginal birth. The client is formula feeding. Which assessment finding is considered EXPECTED and normal for this postpartum day?",
    choices: [
      { id: "a", text: "Uterine fundus palpated 3 fingerbreadths above the umbilicus, soft and tender" },
      { id: "b", text: "Dark red lochia rubra with occasional small quarter-sized clots and fleshy odour" },
      { id: "c", text: "Continuous bright red lochia soaking through three perineal pads within 30 minutes" },
      { id: "d", text: "Purulent, foul-smelling yellow lochia accompanied by a temperature of 38.5 degrees Celsius" }
    ],
    correctChoiceId: "b",
    rationale: "Normal lochia progression: (1) Lochia rubra: dark red, fleshy odour, consists of blood and decidual debris, lasts from day 1 to day 3–4 postpartum; (2) Lochia serosa: pinkish-brown, watery discharge, days 4 to 10; (3) Lochia alba: yellowish-white discharge, days 10 up to 4–6 weeks. On day 3, dark red lochia rubra with occasional small clots is expected. The fundus should be at or below the umbilicus and decrease by 1 fingerbreadth (1 cm) per day. Soaking a pad in < 1 hour indicates hemorrhage; foul-smelling lochia with fever indicates puerperal endometritis.",
    strategy: "Lochia timeline: Rubra = Days 1–3 (dark red); Serosa = Days 4–10 (pink/brown); Alba = Days 10–28+ (white/yellow). Fundus descends 1 cm (1 fingerbreadth) each day postpartum.",
    difficulty: "easy",
    tags: ["obstetrics", "puerperium", "lochia", "involution", "postnatal-assessment"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-OBS-017",
    categorySlug: "maternal-newborn",
    stem: "A primiparous breastfeeding mother presents on postpartum day 14 complaining of severe pain in her right breast. On examination, the nurse notes a localized, wedge-shaped area of erythema, induration, and intense tenderness in the upper outer quadrant of the right breast. The client's temperature is 38.9 degrees Celsius with systemic chills. What advice should the nurse provide regarding breastfeeding during this illness?",
    choices: [
      { id: "a", text: "Permanently stop breastfeeding on both sides and start infant formula feeds" },
      { id: "b", text: "Continue breastfeeding frequently, beginning on the affected right breast or pumping if too painful, while taking prescribed antibiotics" },
      { id: "c", text: "Pump and discard ('pump and dump') all breast milk for 14 days because the milk is toxic to the infant" },
      { id: "d", text: "Avoid emptying the affected breast to allow the inflamed milk ducts to rest and heal" }
    ],
    correctChoiceId: "b",
    rationale: "The presentation (unilateral wedge-shaped erythema, fever, chills, flu-like malaise) is diagnostic of Acute Puerperal Mastitis (typically caused by Staphylococcus aureus). The cornerstone of mastitis treatment is COMPLETE and frequent emptying of the breast to relieve milk stasis. The mother must be strongly encouraged to continue breastfeeding on both breasts, starting with the affected breast (or pumping if feeding is unbearable). The bacteria originate from the infant's nasopharynx or maternal skin; ingesting the milk poses no danger to a healthy term infant. Ceasing feeds leads to milk stasis, galactocele, and breast abscess.",
    strategy: "Mastitis management: Antibiotics + analgesia + KEEP BREASTFEEDING / EMPTYING THE BREAST! Stopping breastfeeding worsens milk stasis and triggers abscess formation.",
    difficulty: "medium",
    tags: ["obstetrics", "mastitis", "breastfeeding", "puerperium", "infection"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-OBS-018",
    categorySlug: "maternal-newborn",
    stem: "At 1 minute after birth, a newborn has a heart rate of 115 beats/minute, a weak and irregular cry, some flexion of the extremities, grimaces in response to bulb suctioning, and has a pink body with cyanotic hands and feet (acrocyanosis). What is this infant's 1-minute APGAR score?",
    choices: [
      { id: "a", text: "5" },
      { id: "b", text: "7" },
      { id: "c", text: "8" },
      { id: "d", text: "9" }
    ],
    correctChoiceId: "b",
    rationale: "APGAR scoring breakdown: (1) Heart rate: 115 bpm (> 100) = 2 points; (2) Respiratory effort: weak/irregular cry = 1 point (good strong cry = 2); (3) Muscle tone: some flexion of extremities = 1 point (active motion = 2); (4) Reflex irritability: grimace to suctioning = 1 point (vigorous cry/cough = 2); (5) Color: body pink, blue extremities (acrocyanosis) = 1 point (completely pink = 2). Total APGAR score = 2 + 1 + 1 + 1 + 1 = 7.",
    strategy: "APGAR breakdown: HR > 100 (2) + Weak cry (1) + Some flexion (1) + Grimace (1) + Acrocyanosis (1) = 7. Acrocyanosis is normal in the first 24 hours.",
    difficulty: "medium",
    tags: ["obstetrics", "apgar-score", "newborn-assessment", "neonatal-transition"],
    isFree: true,
  },

  // =========================================================================
  // MODULE 07: OBSTETRIC PHARMACOLOGY & CALCULATIONS
  // =========================================================================
  {
    authoredId: "NG-MOD-OBS-019",
    categorySlug: "pharmacology-parenteral",
    stem: "A client undergoing labour induction with an intravenous oxytocin (Pitocin) infusion is being monitored. The external tocodynamometer records 6 uterine contractions in a 10-minute window, with contraction duration lasting 95 seconds and a resting baseline uterine tone that feels tense and unrelaxed. What is the nurse's IMMEDIATE action?",
    choices: [
      { id: "a", text: "Increase the oxytocin infusion rate by 2 mU/minute to complete cervical dilation" },
      { id: "b", text: "Stop the oxytocin infusion immediately, place the client in a lateral position, and administer oxygen via face mask" },
      { id: "c", text: "Administer 10 mg intramuscular morphine sulfate to provide maternal analgesia" },
      { id: "d", text: "Document uterine hyperstimulation as a normal response to oxytocin induction" }
    ],
    correctChoiceId: "b",
    rationale: "The client is experiencing Uterine Tachysystole (hyperstimulation), defined as more than 5 contractions in 10 minutes, contractions lasting longer than 90 seconds, or insufficient uterine relaxation between contractions (< 60 seconds). Tachysystole compromises uteroplacental blood flow during the relaxation phase, causing progressive fetal hypoxia and acidosis, and substantially increases the risk of uterine rupture. The immediate intervention is to TURN OFF the oxytocin infusion immediately, position the client in a left lateral tilt, increase maintenance IV crystalloid fluids, and administer oxygen.",
    strategy: "Oxytocin tachysystole (> 5 contractions in 10 min or duration > 90s): STOP oxytocin immediately! Fetal placental perfusion occurs only during uterine resting periods.",
    difficulty: "medium",
    tags: ["obstetrics", "oxytocin", "uterine-tachysystole", "labour-induction", "safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-OBS-020",
    categorySlug: "pharmacology-parenteral",
    stem: "A client with severe preeclampsia is ordered a loading dose of magnesium sulfate 4 grams IV in 100 mL of 5% Dextrose in Water to be infused over 20 minutes via an electronic infusion pump. At what rate in millilitres per hour (mL/hr) should the nurse program the infusion pump?",
    choices: [
      { id: "a", text: "100 mL/hr" },
      { id: "b", text: "200 mL/hr" },
      { id: "c", text: "300 mL/hr" },
      { id: "d", text: "400 mL/hr" }
    ],
    correctChoiceId: "c",
    rationale: "To calculate the hourly infusion pump rate: Rate (mL/hr) = (Volume in mL / Time in minutes) x 60 minutes/hr. Here: Volume = 100 mL; Time = 20 minutes. Rate = (100 mL / 20 min) x 60 min/hr = 5 mL/min x 60 min/hr = 300 mL/hr.",
    strategy: "Infusion pump math: To run 100 mL over 20 minutes (which is 1/3 of an hour), the rate per full hour must be 3 times 100 = 300 mL/hr.",
    difficulty: "medium",
    tags: ["obstetrics", "dosage-calculation", "magnesium-sulfate", "iv-infusion-rate", "pharmacology"],
    isFree: false,
  },
];
