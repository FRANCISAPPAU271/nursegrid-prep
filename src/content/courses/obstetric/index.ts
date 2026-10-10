import type { Course } from "../types";
import { reproductiveFoundations } from "./01-reproductive-foundations";
import { familyPlanningAndGynaecology } from "./02-family-planning-and-gynaecology";
import { pregnancyAndAntenatalCare } from "./03-pregnancy-and-antenatal-care";
import { labourAndBirth } from "./04-labour-and-birth";
import { obstetricEmergencies } from "./05-obstetric-emergencies";
import { postnatalAndNewbornCare } from "./06-postnatal-and-newborn-care";
import { obstetricPharmacologyAndCalculations } from "./07-pharmacology-and-calculations";

export const reproductiveAndObstetricNursing: Course = {
  slug: "reproductive-and-obstetric-nursing",
  code: "NGP-OBS-110",
  title: "Reproductive & Obstetric Nursing",
  tagline: "From the menstrual cycle to the six-week check — reproductive anatomy and conception, family planning and every method, gynaecological nursing, STIs, sexual violence and the law, the eight-contact antenatal model, hypertension and bleeding in pregnancy, malaria, anaemia, HIV and the other complications, normal labour and the partograph, fetal monitoring, abnormal labour and operative birth, postpartum haemorrhage and the other obstetric emergencies, maternal collapse, the puerperium and breastfeeding, essential newborn care and the Golden Minute, the sick and small newborn, and the obstetric drugs and calculations that go with all of it.",
  description:
    "A structured course covering female and male reproductive anatomy, the menstrual cycle, conception, implantation, placental and fetal development and the fetal circulation, family planning counselling and every modern method including emergency contraception and the lactational amenorrhoea method, gynaecological conditions from fibroids and pelvic inflammatory disease to cervical cancer screening and obstetric fistula, sexually transmitted infections and syndromic management, post-abortion care, sexual and gender-based violence, female genital mutilation and the law, the eight-contact antenatal model with its history, examination, investigations, prophylaxis, danger signs and birth preparedness, pre-eclampsia and eclampsia with the magnesium sulphate regimens, bleeding in early and late pregnancy, anaemia, malaria, HIV and PMTCT, syphilis, hepatitis B, diabetes, hyperemesis, preterm labour, rupture of membranes, multiple pregnancy, post-term pregnancy, fetal death and the medical disorders of pregnancy, the stages and mechanism of normal labour and the partograph, intermittent auscultation and cardiotocography, fetal distress, prolonged and obstructed labour, malpresentations, induction and augmentation, instrumental birth and caesarean section, postpartum haemorrhage with the four Ts, retained placenta and uterine inversion, eclampsia, shoulder dystocia, cord prolapse, uterine rupture, amniotic fluid embolism, maternal sepsis, thromboembolism, maternal collapse and resuscitation in pregnancy, the three delays and maternal death review, the puerperium with its four contacts, breastfeeding and its problems, postnatal depression and psychosis, essential newborn care, newborn resuscitation in the Golden Minute, the Apgar score and newborn examination, the low-birth-weight and preterm baby with kangaroo mother care, neonatal hypothermia, hypoglycaemia, respiratory distress, sepsis, tetanus and jaundice, and obstetric pharmacology with the calculations midwives make at the bedside. Each lesson is written for Ghanaian nursing and midwifery students, uses the diagrams from the NurseGrid question bank, and ends with practice questions drawn from the same bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🤰",
  level: "Intermediate",
  gradient: "from-purple-800 via-fuchsia-600 to-pink-300",
  creditHours: 4,
  dueInDays: 30,
  outcomes: [
    "Explain female and male reproductive anatomy, the hormonal control of the menstrual cycle, conception, implantation, placental function and the fetal circulation, and relate them to fertility, pregnancy testing, the signs of pregnancy and the changes of pregnancy.",
    "Counsel on and provide every modern family planning method with its eligibility, timing, side effects, missed-dose rules and follow-up, including emergency contraception and postpartum methods, and nurse women with gynaecological conditions, sexually transmitted infections, post-abortion needs, sexual and gender-based violence and female genital mutilation within Ghanaian law.",
    "Deliver the eight-contact antenatal model — history, examination, investigations, iron and folic acid, IPTp-SP, tetanus–diphtheria, deworming, nets, birth preparedness and danger signs — and recognise and manage pre-eclampsia, eclampsia, bleeding in early and late pregnancy, anaemia, malaria, HIV, syphilis, hepatitis B, diabetes, hyperemesis, preterm labour, rupture of membranes, multiple and post-term pregnancy and fetal death.",
    "Support and monitor normal labour and birth with the partograph, intermittent auscultation and cardiotocography, perform active management of the third stage, repair and care for the perineum, and recognise and manage fetal distress, prolonged and obstructed labour, malpresentation, induction and augmentation, instrumental birth and caesarean section.",
    "Lead the first response to postpartum haemorrhage, retained placenta, uterine inversion, eclampsia, shoulder dystocia, cord prolapse, uterine rupture, amniotic fluid embolism, maternal sepsis, thromboembolism and maternal collapse — including resuscitation adapted for pregnancy — refer safely, and take part in maternal death surveillance and response.",
    "Provide postnatal care at the four contacts, examine the mother, recognise puerperal sepsis, secondary haemorrhage, hypertension, thromboembolism, fistula and the mood disorders, support breastfeeding and manage its problems, and provide postpartum family planning and health teaching.",
    "Deliver essential newborn care and resuscitation in the Golden Minute, score the Apgar, examine the newborn, care for the low-birth-weight and preterm baby with kangaroo mother care, and recognise and manage neonatal hypothermia, hypoglycaemia, respiratory distress, sepsis, tetanus, ophthalmia, jaundice and birth injury with correct pre-referral care.",
    "Administer obstetric drugs safely — uterotonics, tocolytics, magnesium sulphate, antihypertensives, antenatal supplements and prophylaxis, anti-infectives, contraceptives and newborn drugs — avoid the drugs that are unsafe in pregnancy and breastfeeding, and calculate gestational age, oxytocin and magnesium doses and rates, blood loss and blood volume, the shock index and weight-based newborn doses accurately.",
  ],
  audience: [
    "Final-year nursing and midwifery students preparing for the N&MC licensing examination",
    "Newly qualified midwives, community health nurses and nurses on maternity, labour ward, postnatal, neonatal, family planning and reproductive health placements",
    "Nurses and midwives at CHPS compounds and health centres who must recognise, stabilise and refer obstetric and newborn emergencies without a doctor present",
  ],
  modules: [
    reproductiveFoundations,
    familyPlanningAndGynaecology,
    pregnancyAndAntenatalCare,
    labourAndBirth,
    obstetricEmergencies,
    postnatalAndNewbornCare,
    obstetricPharmacologyAndCalculations,
  ],
  postTest: {
    title: "Post-Test: Reproductive & Obstetric Nursing",
    description:
      "Twenty-five questions drawn at random from the reproductive, obstetric and newborn question pool. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["pregnan", "antenatal", "labour and", "in labour", "of labour", "partograph", "foetal heart", "fetal heart", "postpartum", "postnatal", "puerper", "lochia", "breastfeed", "newborn", "neonat", "eclampsia", "magnesium", "oxytocin", "ergometrine", "placenta", "caesarean", "contracep", "family planning", "menstrua", "ectopic", "miscarriage", "apgar", "kangaroo", "jaundice", "cord prolapse", "shoulder dystocia", "obstructed", "vaginal bleeding", "rhesus", "anti d"],
  },
  evaluation: {
    title: "Course Evaluation",
    description: "Your feedback shapes the next version of this course. The evaluation takes about one minute and is required before your certificate is issued.",
    items: [
      { id: "objectives", prompt: "The course met the stated learning outcomes." },
      { id: "content", prompt: "The content was accurate, clear and relevant to nursing and midwifery practice in Ghana." },
      { id: "diagrams", prompt: "The diagrams and tables helped me understand the material." },
      { id: "questions", prompt: "The practice questions and post-test reflected what was taught." },
      { id: "recommend", prompt: "I would recommend this course to a colleague or classmate." },
    ],
    commentPrompt: "What should we add, remove or explain better?",
  },
};
