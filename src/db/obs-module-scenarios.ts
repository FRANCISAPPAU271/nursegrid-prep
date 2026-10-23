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
      { id: "a", text: "Ovulation occurs approximately 14 days before the onset of the next menses; the fertile window includes the 5 days before ovulation and the day of ovulation" },
      { id: "b", text: "Ovulation occurs on day 7 of the cycle; the fertile window lasts for 24 hours after menstruation ends" },
      { id: "c", text: "Ovulation occurs precisely 10 days following the cessation of menstrual flow; conception can occur only during that single 12-hour period, which is why timing intercourse to the day matters so much" },
      { id: "d", text: "Ovulation is triggered by high progesterone levels on day 21; intercourse is most fertile during the luteal phase" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Ovulation occurs approximately 14 days before the onset of the next menses; the fertile window includes the 5 days before ovulation and the day of ovulation\". In a 28-day cycle, the luteal phase is relatively fixed at 14 days. Therefore, ovulation occurs approximately 14 days before the start of the next menstrual period (around cycle day 14). Because human spermatozoa can survive in fertile cervical mucus for up to 5 days and an unfertilized ovum remains viable for approximately 12 to 24 hours after ovulation, the fertile window spans the 5 days preceding ovulation through the day of ovulation itself. Ovulation is triggered by a surge in luteinizing hormone (LH), not progesterone. Why the other options fail: option b puts ovulation on day 7 and limits the window to 24 hours after menstruation, but ovulation in a 28-day cycle falls near day 14 and sperm survive up to five days before it. Option c names day 10 after flow stops and a single 12-hour window, which ignores both the fixed luteal phase and sperm survival. Option d attributes ovulation to progesterone; it is triggered by the LH surge, and intercourse in the luteal phase is after the fertile window has closed.",
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
      { id: "b", text: "Auscultation of fetal heart tones using a handheld Doppler transducer" },
      { id: "c", text: "Purplish-blue discolouration of the vaginal mucosa and cervix (Chadwick's sign)" },
      { id: "d", text: "A positive home urine human chorionic gonadotropin (hCG) pregnancy test" }
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Auscultation of fetal heart tones using a handheld Doppler transducer\". Signs of pregnancy fall into three distinct classes: (1) Presumptive signs (subjective, felt by the woman: amenorrhoea, nausea/vomiting, breast tenderness, fatigue, quickening); (2) Probable signs (objective examiner findings or tests: positive hCG test, Goodell's sign, Hegar's sign, Chadwick's sign, ballottement); and (3) Positive signs (irrefutable proof of a fetus: auscultation of fetal heartbeat by Doppler at 10–12 weeks or fetoscope at 18–20 weeks, visualization of the fetus on ultrasound, and fetal movement palpated by a trained examiner). Why the other options fail: option a lists amenorrhoea, nausea and breast tenderness, all of which are presumptive signs reported by the woman and none of which proves a fetus. Option d is a probable sign, since hCG can be raised in other circumstances and the test is not proof of a viable pregnancy. Option c is Chadwick's sign, a probable sign produced by pelvic vascular engorgement rather than by the fetus itself.",
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
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Smoking 15 cigarettes per day at age 36\". Under the WHO Medical Eligibility Criteria for Contraceptive Use, women aged 35 years or older who smoke 15 or more cigarettes per day have a Category 4 absolute contraindication to combined hormonal contraceptives (pills, patches, rings, or injectables containing estrogen). Estrogen combined with smoking and advanced maternal age exponentially increases the risk of arterial thromboembolism, myocardial infarction, and ischemic stroke. Progestin-only contraceptives (pills, implants, levonorgestrel IUD) or copper IUDs are safe, appropriate alternatives. Why the other options fail: option a is dysmenorrhoea treated with an anti-inflammatory, which is not a cardiovascular risk and is often an indication FOR hormonal contraception. Option c is a resolved infection two years ago, which does not affect eligibility unless there is current purulent cervicitis. Option d is a BMI of 26, which is above ideal but not a Category 4 contraindication, unlike the combination of age over 35 and heavy smoking.",
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
      { id: "b", text: "High-dose combined ethinylestradiol and levonorgestrel (Yuzpe regimen)" },
      { id: "c", text: "Insertion of a Copper Intrauterine Device (Copper IUD)" },
      { id: "d", text: "Depot medroxyprogesterone acetate (DMPA) intramuscular injection" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Insertion of a Copper Intrauterine Device (Copper IUD)\". The copper intrauterine device (Cu-IUD) is the most effective form of emergency contraception available, with a failure rate of less than 0.1%. It can be inserted up to 5 days (120 hours) after unprotected intercourse (or up to 5 days after the earliest calculated day of ovulation) and provides continuous, highly effective, reversible contraception for up to 10 to 12 years. Oral levonorgestrel is licensed only up to 72 hours (efficacy drops significantly after 72 hours), while ulipristal acetate is effective up to 120 hours but still inferior in efficacy to the copper IUD. Why the other options fail: option a is the most familiar method but is licensed to 72 hours, and this client is at 96, so efficacy has already fallen substantially. Option b, the Yuzpe regimen, is less effective than levonorgestrel and causes more nausea. Option d is not an emergency method at all; depot medroxyprogesterone does not reliably prevent ovulation in the days immediately after intercourse.",
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
      { id: "b", text: "Endometrial hyperplasia and polycystic ovary syndrome" },
      { id: "c", text: "Tubal factor infertility and ectopic pregnancy" },
      { id: "d", text: "Uterine leiomyomas (fibroids)" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Tubal factor infertility and ectopic pregnancy\". Pelvic Inflammatory Disease (PID) is an ascending polymicrobial infection (most commonly initiated by Chlamydia trachomatis or Neisseria gonorrhoeae) of the upper genital tract. Inadequate or delayed treatment leads to endosalpingitis, tubal scarring, loss of ciliary function, and pelvic adhesions. This irreversible tubal architecture damage increases the risk of tubal factor infertility six- to tenfold and dramatically raises the risk of future ectopic pregnancy and chronic pelvic pain. Why the other options fail: option a is a human papillomavirus lesion of the cervix and is not a sequela of ascending bacterial infection. Option b is an endometrial and ovarian condition unrelated to tubal infection. Option d is a benign smooth muscle tumour of the uterus; fibroids do not arise from the salpingitis that scars the tube.",
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
    stem: "A midwife is delivering a woman having her first baby. The head is crowning and the fetal heart has just slowed, so the doctor asks for an episiotomy. What is the correct practice?",
    choices: [
      { id: "a", text: "Cut in the midline, straight towards the anus, because it heals most easily" },
      { id: "b", text: "Cut mediolaterally at about 60 degrees, for a clear indication" },
      { id: "c", text: "Cut routinely for every first delivery, to prevent an uncontrolled tear" },
      { id: "d", text: "Cut after the head is born, to make room for the shoulders" }
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Cut mediolaterally at about 60 degrees, for a clear indication\". Episiotomy is not routine: it is done for a reason — a fetal heart that has fallen and delivery must be quickened, a shoulder dystocia, an instrumental delivery, a breech, a rigid or scarred perineum, or a tear that is already extending. The cut is mediolateral, starting at the posterior fourchette and directed at about 60 degrees from the midline, which keeps it away from the anal sphincter; local anaesthetic is infiltrated first if there is time, and the cut is timed to crowning when the perineum is thin. A mediolateral cut at the right angle lowers the risk of third and fourth degree tears compared with a midline cut, and the repair is done in layers with the apex identified.\n\nWhy the other options fail:\n• A — A midline cut heals neatly but runs straight into the sphincter, and it is the angle that causes the worst tears.\n• C — Routine episiotomy for every first birth increases blood loss and perineal pain without preventing tears; current practice is restrictive.\n• D — Cutting after the head is out does not help the head and adds a wound the woman did not need.\n\nReference: WHO — intrapartum care; Ghana STG — perineal care\n",
    strategy: "Episiotomy is for an indication, not a ritual: mediolateral at 60 degrees, cut at crowning.",
    difficulty: "easy",
    tags: ["obstetrics", "naegele-rule", "edd", "gestational-age", "antenatal-care"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-OBS-007",
    categorySlug: "maternal-newborn",
    stem: "A primigravida at 34 weeks gestation with severe preeclampsia is receiving an intravenous infusion of magnesium sulfate at 2 g/hour. During the hourly nursing assessment, which clinical finding indicates MAGNESIUM TOXICITY requiring immediate cessation of the infusion?",
    choices: [
      { id: "a", text: "Blood pressure of 148/94 mmHg with a persistent headache, which indicates that the preeclampsia is not yet controlled on the current magnesium infusion" },
      { id: "b", text: "Absent deep tendon reflexes (patellar reflex 0/4) and respiratory rate of 10 breaths/minute" },
      { id: "c", text: "Urine output of 45 mL/hour over the preceding two hours, which is adequate to clear magnesium and therefore confirms that the dose is being tolerated" },
      { id: "d", text: "Mild flushing and diaphoresis shortly after the loading dose, which are the expected vasodilator effects of magnesium and settle without any change in therapy" }
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Absent deep tendon reflexes (patellar reflex 0/4) and respiratory rate of 10 breaths/minute\". Magnesium sulfate toxicity follows a progressive clinical sequence: (1) Loss of deep tendon reflexes (occurs at serum magnesium levels of 4–5 mmol/L [8–10 mg/dL]), (2) Respiratory depression (RR < 12 breaths/min; occurs at 5–7 mmol/L), (3) Oliguria (< 30 mL/hr, causing further magnesium accumulation), and (4) Cardiac arrest (levels > 7 mmol/L). Immediate nursing interventions for toxicity include: STOP the magnesium infusion immediately, administer oxygen, call for assistance, and administer the antidote—10% calcium gluconate 10 mL (1 g) IV slowly over 3 to 5 minutes. Why the other options fail: option a is a blood pressure still above target, which calls for antihypertensive treatment rather than stopping the magnesium that prevents seizures. Option c is a reassuring urine output; magnesium is renally cleared, so oliguria of under 30 mL per hour is the finding that matters, and 45 mL per hour will not accumulate. Option d is an expected vasodilator effect of the loading dose and settles without changing therapy, whereas absent reflexes and a respiratory rate of 10 are the sequence of toxicity itself.",
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
      { id: "a", text: "Performing a digital vaginal examination to determine cervical dilation" },
      { id: "b", text: "Inserting two large-bore (16-gauge) intravenous cannulae" },
      { id: "c", text: "Obtaining an emergent transabdominal obstetric ultrasound" },
      { id: "d", text: "Drawing blood for type and crossmatch and a baseline coagulation profile, and holding the samples ready until the ultrasound has reported the placental site" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Performing a digital vaginal examination to determine cervical dilation\". The clinical presentation of painless, bright red vaginal bleeding with a soft, non-tender uterus in the third trimester is the hallmark of Placenta Previa. A digital vaginal examination (or insertion of any vaginal instrument/speculum) is strictly contraindicated until the placental location is confirmed by ultrasound. Digital probing can puncture the low-lying placenta or separate it from the lower uterine segment, triggering catastrophic, life-threatening maternal hemorrhage and fetal exsanguination. Why the other options fail: option b is the correct preparation for any major obstetric haemorrhage and is not contraindicated; wide-bore access is the first thing the client needs. Option c is actively required, because the ultrasound is what localises the placenta and permits safe management. Option d is also required, since crossmatch and clotting studies must be ready before any bleeding worsens.",
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
      { id: "a", text: "There is prolonged/obstructed labour requiring immediate senior medical review, intervention, or transfer to a comprehensive surgical facility" },
      { id: "b", text: "Labour progress is normal and delivery is imminent within the next hour, since the descent of the presenting part continues even when dilation pauses" },
      { id: "c", text: "The woman has entered the latent phase and can be discharged home to rest, because the cervix is not changing and admission in latent labour increases intervention" },
      { id: "d", text: "Fetal heart rate accelerations are being documented, which indicate active fetal reserve and mean that the plot position reflects reassuring fetal wellbeing" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"There is prolonged/obstructed labour requiring immediate senior medical review, intervention, or transfer to a comprehensive surgical facility\". On the WHO partograph, active labour starts at 4–5 cm dilation with an expected minimum progress rate of 1 cm/hour (represented by the Alert Line). The Action Line is drawn 4 hours to the right of and parallel to the Alert Line. If cervical dilation plots at or beyond the Action Line, it indicates severe protracted labour or cephalopelvic disproportion/obstruction. This mandates immediate management decisions: full assessment for obstruction, augmentation with oxytocin if contractions are inadequate and no obstruction exists, or immediate operative delivery (Caesarean section). Why the other options fail: option b reads the crossing as normal progress, but the Action Line sits four hours to the right of the Alert Line precisely to mark the point at which progress has failed. Option c calls it latent labour and discharges a woman who is in established labour and has not dilated for four hours. Option d treats a fetal monitoring finding as an explanation for the plot position, which it is not.",
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
      { id: "a", text: "Umbilical cord compression; reposition the mother onto her hands and knees to take the weight of the uterus off the cord and improve umbilical blood flow" },
      { id: "b", text: "Fetal head compression; prepare for immediate spontaneous vaginal delivery, since a deceleration that follows the contraction means the head is descending well" },
      { id: "c", text: "Uteroplacental insufficiency; turn mother to lateral position, apply 10 L oxygen, discontinue oxytocin infusion, and infuse IV fluid bolus" },
      { id: "d", text: "Maternal hypotension from the epidural; place the client supine in Trendelenburg, since laying her flat restores venous return and corrects the placental perfusion" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Uteroplacental insufficiency; turn mother to lateral position, apply 10 L oxygen, discontinue oxytocin infusion, and infuse IV fluid bolus\". Late decelerations are symmetrical, gradual decreases in fetal heart rate that begin AFTER the peak of the contraction and return to baseline after the contraction ends. They indicate uteroplacental insufficiency (inadequate fetal oxygenation and placental perfusion during uterine work). Priority intrauterine resuscitation measures ('L-I-O-N'): (1) Left lateral positioning (relieves aortocaval compression and improves placental blood flow), (2) Increase IV fluids (bolus isotonic crystalloid to expand volume), (3) Oxygen (8–10 L/min via non-rebreather mask), and (4) Notify provider and STOP oxytocin infusion immediately. Why the other options fail: option a describes variable decelerations, which are abrupt rather than gradual and begin with the contraction rather than after its peak. Option b describes early decelerations, which are shallow and recover by the end of the contraction, not after it. Option d treats it as maternal hypotension; the shape and timing of a late deceleration point to uteroplacental insufficiency, and supine positioning would worsen aortocaval compression.",
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
      { id: "a", text: "Pushing hard on the fundus after delivery, removing the placenta by hand within five minutes, and applying ice to the perineum" },
      { id: "b", text: "Clamping the cord within five seconds, asking the mother to bear down to expel the placenta, and packing the uterus with gauze" },
      { id: "c", text: "Repairing the episiotomy, giving an intravenous ergometrine bolus before the shoulders deliver, and waiting sixty minutes before traction" },
      { id: "d", text: "Oxytocin 10 IU IM within a minute of birth, controlled cord traction with counter-traction, and fundal massage after the placenta" }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Oxytocin 10 IU IM within a minute of birth, controlled cord traction with counter-traction, and fundal massage after the placenta\". Active management reduces primary postpartum haemorrhage by more than half, and it works because each of the three actions empties the uterus or keeps it contracted. A prophylactic uterotonic is given within one minute of birth, once a second twin has been excluded; controlled cord traction is applied during a contraction while the other hand counter-tracts on the lower uterine segment above the symphysis, which stops the uterus being pulled down or inverted; and the fundus is palpated and massaged as soon as the placenta is out. Why the other options fail: pushing on the fundus, pulling the placenta out by hand within five minutes and icing the perineum are not part of the triad, and manual removal is reserved for a retained placenta (A); clamping the cord within seconds deprives the newborn of placental transfusion, and uterine packing is not part of active management (B); ergometrine given before the shoulders are delivered can entrap a second twin, and an hour of expectant waiting is the opposite of active management (C).",
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
      { id: "a", text: "Administer 0.2 mg intramuscular ergometrine immediately, since a uterotonic is the fastest way to contract an atonic uterus and stop the bleeding" },
      { id: "b", text: "Place the client in a high Fowler's position, so that gravity drains blood out of the pelvis and the weight of the uterus is taken off the bleeding site" },
      { id: "c", text: "Prepare the client for emergent exploratory laparotomy and hysterectomy, because bleeding this heavy after a normal delivery indicates a uterine rupture" },
      { id: "d", text: "Perform vigorous fundal massage while assisting the client to empty her bladder or catheterizing" }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Perform vigorous fundal massage while assisting the client to empty her bladder or catheterizing\". A soft, 'boggy' fundus indicates uterine atony, the most common cause (70–80%) of primary postpartum hemorrhage. A fundus that is boggy AND displaced upwards or to the right indicates bladder distension, which physically prevents effective uterine myometrial contraction and retraction. The immediate nursing actions are: perform continuous fundal massage to stimulate uterine contraction and empty the bladder (via spontaneous voiding or in-and-out catheterization), followed by uterotonic administration. Why the other options fail: option a reaches for a uterotonic first, but a uterus displaced to the right by a full bladder cannot contract effectively until the bladder is emptied, and ergometrine is contraindicated in hypertension besides. Option c jumps to hysterectomy for atony before any of the simple measures have been tried. Option b sits the client up, which encourages blood to pool and does nothing about either the atony or the full bladder.",
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
      { id: "a", text: "Insert a sterile gloved hand into the vagina to elevate the presenting part off the umbilical cord, and place the mother in knee-chest or Trendelenburg position" },
      { id: "b", text: "Gently push the exposed loop of umbilical cord back inside the uterine cavity, so that it is no longer exposed to the cold air that causes vasospasm" },
      { id: "c", text: "Instruct the mother to bear down firmly and push, since delivery of the baby is the quickest way to relieve the compression and restore the fetal heart rate before theatre is ready" },
      { id: "d", text: "Apply dry sterile gauze around the cord and observe for spontaneous restoration of the fetal heart rate before calling for emergency operative delivery" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"Insert a sterile gloved hand into the vagina to elevate the presenting part off the umbilical cord, and place the mother in knee-chest or Trendelenburg position\". Umbilical cord prolapse is an acute obstetric emergency where the cord falls below the presenting part, leading to mechanical compression between the fetal head/breech and maternal pelvis, causing sudden fetal anoxia. The nurse must insert a gloved hand into the vagina and apply continuous upward pressure on the fetal presenting part to keep it elevated off the cord until delivery in the operating theatre. Position the mother in exaggerated knee-chest or steep Trendelenburg position to use gravity. The cord must NEVER be pushed back into the uterus (causes cord vasospasm). Why the other options fail: option b pushes the cord back, which causes vasospasm and removes the only structure keeping the fetus oxygenated. Option c asks the mother to push, which drives the presenting part down onto the cord and worsens the compression. Option d applies a dressing and waits; cord prolapse is measured in minutes, and the fetal heart rate has already fallen to 70.",
    strategy: "Cord prolapse emergency reflex: Glove hand -> Elevate presenting part off cord -> Knee-chest/Trendelenburg position -> Emergency C-section. NEVER push the cord back inside!",
    difficulty: "hard",
    tags: ["obstetrics", "cord-prolapse", "obstetric-emergency", "fetal-distress", "knee-chest-position"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-OBS-014",
    categorySlug: "maternal-newborn",
    stem: "A shoulder dystocia has just been recognised. Which action must the team avoid?",
    choices: [
      { id: "a", text: "Ask the woman to stop pushing and take slow breaths between efforts" },
      { id: "b", text: "Note the time the head was born and call for extra help and a paediatrician" },
      { id: "c", text: "Turn her onto all fours if the first manoeuvres do not release the shoulder" },
      { id: "d", text: "Press hard on the fundus from above while pulling on the baby's head" }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Press hard on the fundus from above while pulling on the baby's head\". Fundal pressure is the one manoeuvre that must not be used. The shoulder is already jammed against the symphysis pubis, and pushing the uterus down drives it harder into the bone while adding nothing to the room at the outlet; the combination with traction on the head is what snaps the brachial plexus and can rupture the uterus. The pressure that helps is <strong>suprapubic</strong> — downwards and laterally above the bladder, behind the anterior shoulder — and it is used together with the McRoberts manoeuvre, not instead of it.\n\nWhy the other options fail:\n• A — Telling her to stop pushing is correct; each push drives the impacted shoulder further into the symphysis.\n• B — Calling for help and noting the time of the head's birth are both required, because the decision clock for the later manoeuvres starts there.\n• C — All fours is a recognised manoeuvre when the first steps fail, and it is safe.\n\nReference: WHO recommendations on intrapartum care; Ghana STG — obstetric emergencies\n",
    strategy: "Suprapubic, never fundal. Push the shoulder from behind the pubis and never add traction to a jammed shoulder.",
    difficulty: "medium",
    tags: ["obstetrics", "shoulder-dystocia", "mcroberts-maneuver", "suprapubic-pressure", "emergencies"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-OBS-015",
    categorySlug: "maternal-newborn",
    stem: "A woman with severe preeclampsia suddenly begins having generalized tonic-clonic convulsions in the labour room. What is the immediate priority sequence of nursing actions during the active convulsion?",
    choices: [
      { id: "a", text: "Force a padded mouth gag between her teeth, hold down her limbs, and give 10 mg of oral diazepam to terminate the seizure as quickly as possible" },
      { id: "b", text: "Transport the client to the operating theatre immediately while she is actively seizing, so that the delivery can be completed without further delay and the seizure ends with the uterus empty" },
      { id: "c", text: "Call for help, turn the client onto her side (lateral tilt), protect her from physical trauma, maintain airway and oxygenation, and prepare IV magnesium sulfate loading dose" },
      { id: "d", text: "Give rapid intravenous boluses of labetalol to bring the blood pressure below 100/60 mmHg, since the seizure is driven by the hypertension itself" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Call for help, turn the client onto her side (lateral tilt), protect her from physical trauma, maintain airway and oxygenation, and prepare IV magnesium sulfate loading dose\". During an eclamptic seizure, immediate maternal stabilization is the absolute priority: (1) Call for urgent assistance, (2) Turn the woman onto her left side to maintain airway patency, prevent aspiration, and relieve aortocaval compression, (3) Protect the head and body from traumatic injury without physical restraint, (4) Administer high-flow oxygen, and (5) Once the convulsion ceases, administer the loading dose of magnesium sulfate (4 g IV over 10–15 minutes plus 10 g IM) to prevent recurrent seizures. Never insert mouth gags or tongue blades (causes dental fracture, vomiting, and laryngospasm). Delivery occurs only after maternal stabilization. Why the other options fail: option a puts an object in the mouth of a seizing woman, which causes dental fracture and laryngospasm, and gives a drug she cannot swallow. Option b moves a seizing client, which risks injury and delays the treatment that stops the seizure. Option d treats the blood pressure during the seizure rather than the seizure itself, and dropping the pressure abruptly can worsen placental perfusion.",
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
      { id: "b", text: "Purulent, foul-smelling yellow lochia accompanied by a temperature of 38.5 degrees Celsius" },
      { id: "c", text: "Continuous bright red lochia soaking through three perineal pads within 30 minutes" },
      { id: "d", text: "Dark red lochia rubra with occasional small quarter-sized clots and fleshy odour" }
    ],
    "correctChoiceId": "d",
    rationale: "CORRECT (D) — \"Dark red lochia rubra with occasional small quarter-sized clots and fleshy odour\". Normal lochia progression: (1) Lochia rubra: dark red, fleshy odour, consists of blood and decidual debris, lasts from day 1 to day 3–4 postpartum; (2) Lochia serosa: pinkish-brown, watery discharge, days 4 to 10; (3) Lochia alba: yellowish-white discharge, days 10 up to 4–6 weeks. On day 3, dark red lochia rubra with occasional small clots is expected. The fundus should be at or below the umbilicus and decrease by 1 fingerbreadth (1 cm) per day. Soaking a pad in < 1 hour indicates hemorrhage; foul-smelling lochia with fever indicates puerperal endometritis. Why the other options fail: option a describes a fundus above the umbilicus and soft, which suggests atony or retained products on day 3 rather than normal involution. Option c is a pad soaked in 30 minutes, which is postpartum haemorrhage. Option b is purulent malodorous lochia with fever, the picture of puerperal endometritis.",
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
      { id: "a", text: "Stop breastfeeding permanently on both sides and start infant formula, because the infected milk could transmit the bacteria to the infant's gut" },
      { id: "b", text: "Pump and discard all breast milk for fourteen days, since the milk in an infected breast is toxic to the infant until the course of antibiotics is finished" },
      { id: "c", text: "Continue breastfeeding frequently, beginning on the affected right breast or pumping if too painful, while taking prescribed antibiotics" },
      { id: "d", text: "Avoid emptying the affected breast so that the inflamed ducts can rest and heal, and feed only from the unaffected breast until the pain has settled" }
    ],
    "correctChoiceId": "c",
    rationale: "CORRECT (C) — \"Continue breastfeeding frequently, beginning on the affected right breast or pumping if too painful, while taking prescribed antibiotics\". The presentation (unilateral wedge-shaped erythema, fever, chills, flu-like malaise) is diagnostic of Acute Puerperal Mastitis (typically caused by Staphylococcus aureus). The cornerstone of mastitis treatment is COMPLETE and frequent emptying of the breast to relieve milk stasis. The mother must be strongly encouraged to continue breastfeeding on both breasts, starting with the affected breast (or pumping if feeding is unbearable). The bacteria originate from the infant's nasopharynx or maternal skin; ingesting the milk poses no danger to a healthy term infant. Ceasing feeds leads to milk stasis, galactocele, and breast abscess. Why the other options fail: option a stops feeding altogether, which is what causes the stasis that leads to abscess. Option b discards milk for a fortnight on the false premise that it is toxic; the organism is usually already in the infant's nasopharynx. Option d withholds emptying, which is the single measure most likely to convert mastitis into an abscess.",
    strategy: "Mastitis management: Antibiotics + analgesia + KEEP BREASTFEEDING / EMPTYING THE BREAST! Stopping breastfeeding worsens milk stasis and triggers abscess formation.",
    difficulty: "medium",
    tags: ["obstetrics", "mastitis", "breastfeeding", "puerperium", "infection"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-OBS-018",
    categorySlug: "maternal-newborn",
    stem: "At 1 minute after birth, a newborn has a heart rate of 115 beats/minute, a weak and irregular cry, some flexion of the extremities, grimaces in response to bulb suctioning, and a pink body with cyanotic hands and feet (acrocyanosis). What is this infant's 1-minute APGAR score?",
    choices: [
      { id: "a", text: "6" },
      { id: "b", text: "7" },
      { id: "c", text: "5" },
      { id: "d", text: "8" }
    ],
    "correctChoiceId": "a",
    rationale: "CORRECT (A) — \"6\". Score each of the five components and add them. Heart rate 115 beats/minute is above 100, which scores 2. A weak and irregular cry scores 1 for respiratory effort. Some flexion of the extremities scores 1 for muscle tone. Grimacing in response to suctioning scores 1 for reflex irritability. A pink body with cyanotic hands and feet is acrocyanosis, which scores 1 for colour. That is 2 + 1 + 1 + 1 + 1 = 6. A score of 7 would need a second point somewhere, from a stronger cry, active motion or a fully pink colour, and none of those is described. The score is repeated at five minutes. Why the other options fail: Seven would need one more component to score two; five would need muscle tone, reflex response or colour to be absent rather than reduced; eight would need every component at full marks.",
    strategy: "APGAR is five components out of 2, summed: HR > 100 (2) + weak cry (1) + some flexion (1) + grimace (1) + acrocyanosis (1) = 6.",
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
      { id: "a", text: "Increase the oxytocin rate by 2 mU per minute, since the contractions are still lasting less than two minutes and the cervix still needs to dilate" },
      { id: "b", text: "Stop the oxytocin infusion immediately, place the client in a lateral position, and administer oxygen via face mask" },
      { id: "c", text: "Administer 10 mg of intramuscular morphine sulfate for maternal analgesia, because pain is what is driving the uterus to contract so frequently" },
      { id: "d", text: "Document the pattern as a normal response to oxytocin induction and continue the infusion at the current rate, provided the fetal heart rate is reassuring" }
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"Stop the oxytocin infusion immediately, place the client in a lateral position, and administer oxygen via face mask\". The client is experiencing Uterine Tachysystole (hyperstimulation), defined as more than 5 contractions in 10 minutes, contractions lasting longer than 90 seconds, or insufficient uterine relaxation between contractions (< 60 seconds). Tachysystole compromises uteroplacental blood flow during the relaxation phase, causing progressive fetal hypoxia and acidosis, and substantially increases the risk of uterine rupture. The immediate intervention is to TURN OFF the oxytocin infusion immediately, position the client in a left lateral tilt, increase maintenance IV crystalloid fluids, and administer oxygen. Why the other options fail: option a increases the drug that is causing the tachysystole, and six contractions in ten minutes with 95-second durations is already hyperstimulation. Option c treats the pain and leaves the uterus contracting without a relaxation phase, which is what compromises placental perfusion. Option d documents a pathological pattern as normal and continues the infusion, which risks uterine rupture.",
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
      { id: "b", text: "300 mL/hr" },
      { id: "c", text: "200 mL/hr" },
      { id: "d", text: "400 mL/hr" }
    ],
    "correctChoiceId": "b",
    rationale: "CORRECT (B) — \"300 mL/hr\". To calculate the hourly infusion pump rate: Rate (mL/hr) = (Volume in mL / Time in minutes) x 60 minutes/hr. Here: Volume = 100 mL; Time = 20 minutes. Rate = (100 mL / 20 min) x 60 min/hr = 5 mL/min x 60 min/hr = 300 mL/hr. Why the other options fail: option a of 100 mL per hour would run the 100 mL bag over a full hour rather than 20 minutes. Option c of 200 mL per hour doubles nothing in the calculation and would take 30 minutes. Option d of 400 mL per hour runs at four times the volume per hour and would deliver the dose in 15 minutes, which is faster than the prescribed 20.",
    strategy: "Infusion pump math: To run 100 mL over 20 minutes (which is 1/3 of an hour), the rate per full hour must be 3 times 100 = 300 mL/hr.",
    difficulty: "medium",
    tags: ["obstetrics", "dosage-calculation", "magnesium-sulfate", "iv-infusion-rate", "pharmacology"],
    isFree: false,
  },
];
