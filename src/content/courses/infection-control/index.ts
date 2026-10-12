import type { Course } from "../types";
import { microbiologyAndTheChainOfInfection } from "./01-microbiology-and-the-chain-of-infection";
import { standardPrecautionsAndHandHygiene } from "./02-standard-precautions-and-hand-hygiene";
import { transmissionBasedPrecautionsAndIsolationNursing } from "./03-transmission-based-precautions-and-isolation-nursing";
import { asepsisDecontaminationAndSterilisation } from "./04-asepsis-decontamination-and-sterilisation";
import { preventingDeviceAndProcedureRelatedInfections } from "./05-preventing-device-and-procedure-related-infections";
import { occupationalHealthSharpsAndHealthCareWaste } from "./06-occupational-health-sharps-and-health-care-waste";
import { specimensStewardshipSurveillanceAndTheIpcProgramme } from "./07-specimens-stewardship-surveillance-and-the-ipc-programme";

export const infectionPreventionAndControl: Course = {
  slug: "infection-prevention-and-control",
  title: "Infection Prevention & Control",
  code: "NGP-IPC-114",
  tagline: "Break the chain — from the Gram stain to the outbreak report.",
  description:
    "A complete course in infection prevention and control for Ghanaian nursing and midwifery practice, built around the tricky topics examiners return to: isolation precautions and asepsis. Seven modules cover the microbiology that explains every rule — bacteria and the Gram stain, spores, capsules and endotoxin, viruses, fungi and parasites, normal flora, colonisation and opportunistic infection, virulence and incubation, innate, adaptive, active, passive and herd immunity — and the chain of infection with its six links, the four transmission routes, fomites and vectors, health care-associated infection and the levels of prevention; standard precautions — the WHO five moments and the patient zone, alcohol rub versus soap and water, technique and the missed areas, surgical hand antisepsis, compliance and the Hawthorne effect, PPE by risk assessment and the order of donning and doffing, the four glove errors, respiratory hygiene, safe injection practice and multi-dose vials, spills, linen and the environment; transmission-based precautions — contact, droplet and airborne with their organisms, PPE, rooms and transport rules, tuberculosis on an open ward and the N95, protective isolation of the neutropenic patient, isolation versus quarantine, nursing the isolated patient with dignity, visitors, specimens, discontinuation, terminal cleaning and care of the deceased, and the high-consequence infections — cholera and the treatment centre, viral haemorrhagic fever, measles and meningitis in outbreaks and the immediately notifiable list; asepsis and decontamination — medical versus surgical asepsis, the rules of the sterile field, the procedure trolley, the aseptic dressing, clean-to-dirty swabbing, cleaning, disinfection and sterilisation, the Spaulding classification, chlorine and the other disinfectants, the autoclave and how to prove it worked, theatre zones and environmental cleaning; device- and procedure-related infection — surgical site infection and its bundle, antibiotic prophylaxis timing, wound infection against normal healing, post-operative fever by the day, dehiscence, gas gangrene and puerperal sepsis, catheter, cannula, central line and ventilator-associated infection and the sepsis that follows; occupational health and waste — sharps safety, the first minutes after a needlestick, post-exposure prophylaxis for HIV and hepatitis B, under-reporting, staff immunisation and fitness to work, Ghana's waste colour code, segregation at source, the placenta, cytotoxic and pharmaceutical waste, the people downstream, water, sanitation and vectors; and specimens, stewardship, surveillance and the programme — blood cultures, urine, sputum, stool and wound swabs done right, critical results, antimicrobial resistance and the nurse's stewardship role, IDSR, zero reporting, recognising and investigating an outbreak, the epidemic curve and attack rate, communication and rumour, the WHO core components, the committee and link nurse, the audit cycle, bundles, the economics of IPC and infection prevention in the community and the home. Each lesson is written for Ghanaian nursing and midwifery students, uses the diagrams from the NurseGrid question bank, and ends with practice questions drawn from the same bank. The course also covers multidrug-resistant organisms. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🧼",
  level: "Intermediate",
  gradient: "from-cyan-700 via-sky-500 to-emerald-300",
  creditHours: 4,
  dueInDays: 30,
  outcomes: [
    "Classify the organisms that cause infection, explain why spores, capsules, endotoxin and enveloped and non-enveloped viruses matter for infection control, distinguish normal flora, colonisation, opportunistic infection and infection, describe innate, adaptive, active, passive and herd immunity, and recognise the patient whose defences are down.",
    "Name the six links of the chain of infection and the nursing intervention that breaks each, distinguish contact, droplet, airborne, vehicle and vector transmission and a fomite from a vector, define health care-associated infection and its four main types, and apply standard precautions to every patient regardless of diagnosis.",
    "Perform hand hygiene at the WHO five moments with the correct product, technique and duration, select, don and doff personal protective equipment by risk assessment and in the correct order, practise respiratory hygiene and safe injection technique, and manage spills, linen, equipment and the environment safely.",
    "Apply contact, droplet and airborne precautions — organisms, PPE, placement, transport and discontinuation — manage tuberculosis on an open Ghanaian ward, run protective isolation for the neutropenic patient, nurse the isolated patient with dignity and confidentiality, carry out terminal cleaning and safe care of the deceased, and respond to cholera, viral haemorrhagic fever, measles and meningitis with the screen-isolate-notify reflex.",
    "Distinguish medical from surgical asepsis, maintain a sterile field and recognise every breach, prepare a trolley and perform an aseptic dressing, swab clean to dirty, choose and prepare the right level of decontamination for every item using the Spaulding classification and correct chlorine strengths, operate and monitor an autoclave, and clean the ward and theatre in the right order.",
    "Prevent surgical site, catheter-associated urinary, cannula and central line bloodstream and ventilator-associated infections with their insertion and maintenance bundles and the daily question of device necessity, recognise wound infection, dehiscence, gas gangrene and puerperal sepsis against normal healing, and act within the first hour on sepsis arising from a device or procedure.",
    "Prevent and manage sharps injuries and occupational exposures — first aid, reporting, risk assessment, HIV and hepatitis B post-exposure prophylaxis and follow-up — maintain the immunisations every health worker needs, segregate, store, transport and dispose of health-care waste by Ghana's colour code, handle cytotoxic and pharmaceutical waste, and apply water, sanitation and vector control in the facility and the household.",
    "Collect, label and transport specimens that answer the laboratory's question, act on critical results, practise antimicrobial stewardship at the bedside, report under IDSR with correct case definitions, immediate notification and zero reporting, recognise and investigate an outbreak with a case definition, line list, epidemic curve and attack rate, communicate without blame, and contribute to an IPC programme through the committee, the link nurse role, the audit cycle, bundles, the economic case and infection prevention in the community and the home.",
    "Prevent, detect and contain multidrug-resistant organisms through screening, isolation, decolonisation and outbreak response.",
  ],
  audience: [
    "Final-year nursing and midwifery students preparing for the N&MC licensing examination, in which isolation precautions, asepsis, sterilisation, hand hygiene, sharps safety, waste and outbreak questions appear in every paper",
    "Newly qualified nurses and midwives on medical, surgical, maternity, paediatric, theatre and emergency units, and those nominated as ward IPC link nurses",
    "Community health nurses and officers at CHPS compounds and health centres who screen, notify, trace contacts and teach households during Ghana's cholera, meningitis, measles and viral haemorrhagic fever responses",
  ],
  modules: [
    microbiologyAndTheChainOfInfection,
    standardPrecautionsAndHandHygiene,
    transmissionBasedPrecautionsAndIsolationNursing,
    asepsisDecontaminationAndSterilisation,
    preventingDeviceAndProcedureRelatedInfections,
    occupationalHealthSharpsAndHealthCareWaste,
    specimensStewardshipSurveillanceAndTheIpcProgramme,
  ],
  postTest: {
    title: "Post-Test: Infection Prevention & Control",
    description:
      "Twenty-five questions drawn at random from the infection prevention and control question pool — microbiology, the chain of infection, hand hygiene and standard precautions, transmission-based precautions and isolation, asepsis and sterilisation, device-related infection, sharps and occupational exposure, waste, specimens, stewardship, surveillance and outbreaks. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["safety infection control", "infection control", "infection prevention", "hand hygiene", "standard precautions", "personal protective equipment", "transmission based precautions", "airborne precautions", "isolation", "quarantine", "aseptic", "sterile field", "sterilisation", "decontamination", "autoclave", "chlorine", "surgical site infection", "wound infection", "catheter associated", "central line", "ventilator associated", "sepsis", "needlestick", "sharps", "post exposure", "hepatitis b", "waste segregation", "health care waste", "cytotoxic", "specimen", "blood culture", "antimicrobial resistance", "antimicrobial stewardship", "notifiable", "surveillance", "outbreak", "epidemic curve", "attack rate", "cholera", "tuberculosis", "measles", "meningitis", "ebola", "lassa", "viral haemorrhagic fever", "chain of infection", "gram", "spores", "immunity", "latrine", "household water", "food hygiene", "cord care"],
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
