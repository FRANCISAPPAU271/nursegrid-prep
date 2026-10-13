import type { Course } from "../types";
import { foundations } from "./01-foundations";
import { anaemia } from "./02-anaemia";
import { sickleCellDisease } from "./03-sickle-cell-disease";
import { bleedingAndClotting } from "./04-bleeding-and-clotting";
import { bloodTransfusion } from "./05-blood-transfusion";
import { malignancyAndImmunology } from "./06-malignancy-and-immunology";
import { haematologicalPharmacologyAndCalculations } from "./07-pharmacology-and-calculations";

export const haematologyAndImmunologyNursing: Course = {
  slug: "haematology-and-immunology-nursing",
  code: "NGP-HAE-109",
  title: "Haematology & Immunology Nursing",
  tagline: "Blood and immunity from the marrow to the bedside — the full blood count and what each line means, anaemia from iron and hookworm to malaria and G6PD deficiency, sickle cell disease in steady state, in crisis and across the lifespan, the bleeding patient from haemophilia to haemorrhagic shock, DIC and snakebite, the safe transfusion process and every reaction, leukaemia, lymphoma, myeloma and chemotherapy nursing, HIV from the test to viral suppression, hypersensitivity, autoimmunity, immunisation and the immunocompromised patient, and the drugs and calculations that go with all of it.",
  description:
    "A structured course covering the composition and functions of blood, haematopoiesis and the interpretation of the full blood count, film and reticulocyte count, haemostasis and the clotting tests, the immune system and immunological assessment, the assessment and classification of anaemia with iron deficiency, hookworm, malaria, megaloblastic, haemolytic and aplastic anaemia, G6PD deficiency and anaemia in pregnancy and childhood, sickle cell disease genetics, newborn screening, steady-state care, every crisis and emergency, and care of the child, adolescent, pregnant woman, surgical patient and adult with chronic complications, bleeding disorders including thrombocytopenia, haemophilia, von Willebrand disease and vitamin K deficiency, the bleeding patient with haemorrhage, hypovolaemic shock, DIC, snakebite envenoming and massive transfusion, blood groups, blood products, transfusion thresholds, the safe transfusion process, transfusion reactions, neonatal exchange transfusion, anti-D and blood donation, leukaemia, lymphoma, myeloma, oncological emergencies and chemotherapy nursing, HIV testing, antiretroviral therapy, opportunistic infections, PMTCT, prevention and the law, hypersensitivity, autoimmunity, long-term steroids, Ghana's immunisation schedule and cold chain, the immunocompromised patient, and haematological pharmacology with the calculations nurses make at the bedside. Each lesson is written for Ghanaian nursing and midwifery students, uses the diagrams from the NurseGrid question bank, and ends with practice questions drawn from the same bank. The course also covers full blood count interpretation drills. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🩸",
  level: "Intermediate",
  gradient: "from-red-800 via-rose-600 to-red-300",
  creditHours: 4,
  dueInDays: 30,
  outcomes: [
    "Explain the composition and functions of blood, haematopoiesis, haemostasis and the immune system, interpret the full blood count, blood film, reticulocyte count, clotting screen and immunological tests, and take blood samples correctly for each.",
    "Assess anaemia systematically, classify it by cell size and reticulocyte response, and manage iron deficiency, hookworm, malaria, megaloblastic, haemolytic and aplastic anaemia and G6PD deficiency, including anaemia in pregnancy and childhood, with correct iron, folate and B12 therapy and transfusion thresholds.",
    "Explain the inheritance, pathophysiology, screening and diagnosis of sickle cell disease, deliver steady-state care including penicillin, folic acid, hydroxyurea, vaccination and malaria prevention, recognise and manage every crisis — painful, chest, sequestration, aplastic, stroke, infection, priapism — and support the child, adolescent, pregnant woman, surgical patient and adult with chronic complications.",
    "Recognise and manage bleeding disorders — thrombocytopenia, ITP, haemophilia, von Willebrand disease and vitamin K deficiency — apply bleeding precautions and factor replacement, and manage the bleeding patient with haemorrhage, hypovolaemic shock, DIC, snakebite envenoming and massive transfusion using tranexamic acid, antivenom and the massive haemorrhage protocol.",
    "Describe blood groups, compatibility, blood components and transfusion thresholds, carry out the safe transfusion process from sample to traceability without error, recognise and respond to every acute and delayed transfusion reaction, transfuse neonates, children, pregnant women and patients with sickle cell disease safely, assist with exchange transfusion, give anti-D correctly and support blood donation.",
    "Distinguish the leukaemias, lymphomas and myeloma, recognise and respond to febrile neutropenia, tumour lysis, cord compression and the other oncological emergencies, administer and handle chemotherapy safely with body-surface-area dosing and independent checks, and nurse the patient and family through the nadir, abandonment risk and palliative care.",
    "Carry out HIV testing and counselling to the five Cs, start, monitor and support antiretroviral therapy under test-and-treat, recognise and nurse the opportunistic infections, prevent mother-to-child transmission, apply PrEP, PEP, standard precautions and needlestick management, and protect confidentiality and dignity under Ghana's HIV and AIDS Act.",
    "Classify hypersensitivity reactions and manage anaphylaxis and serum sickness, nurse the patient with lupus, on long-term steroids or immunosuppressants, apply Ghana's immunisation schedule, contraindications, injection technique, open-vial and cold-chain rules and adverse event reporting, protect the immunocompromised patient from any cause, and administer haematological drugs with accurate dose, deficit, drip-rate, heparin, factor and body-surface-area calculations.",
  ],
  audience: [
    "Final-year nursing and midwifery students preparing for the N&MC licensing examination",
    "Newly qualified nurses on medical, paediatric, obstetric, emergency, oncology and outpatient placements where anaemia, sickle cell disease, bleeding, transfusion and HIV are met every day",
    "Nurses working in or preparing to join sickle cell, haematology, oncology, blood transfusion, HIV and immunisation services",
  ],
  modules: [
    foundations,
    anaemia,
    sickleCellDisease,
    bleedingAndClotting,
    bloodTransfusion,
    malignancyAndImmunology,
    haematologicalPharmacologyAndCalculations,
  ],
  postTest: {
    title: "Post-Test: Haematology & Immunology Nursing",
    description:
      "Twenty-five questions drawn at random from the haematology and immunology question pool. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["anaemi", "anemi", "haemoglobin", "hemoglobin", "sickle", "transfus", "bleeding", "haemorrhag", "hemorrhag", "platelet", "clotting", "haemophilia", "leukaemia", "lymphoma", "chemotherap", "neutropeni", "hiv ", "antiretroviral", "vaccin", "immunis", "anaphyla", "allerg", "blood group", "rhesus", "iron deficien", "folic", "malaria", "g6pd", "jaundice", "spleen", "snakebite", "antivenom"],
  },
  evaluation: {
    title: "Course Evaluation",
    description: "Your feedback shapes the next version of this course. The evaluation takes about one minute and is required before your certificate is issued.",
    items: [
      { id: "objectives", prompt: "The course met the stated learning outcomes." },
      { id: "content", prompt: "The content was accurate, clear and relevant to nursing practice in Ghana." },
      { id: "diagrams", prompt: "The diagrams and tables helped me understand the material." },
      { id: "questions", prompt: "The practice questions and post-test reflected what was taught." },
      { id: "recommend", prompt: "I would recommend this course to a colleague or classmate." },
    ],
    commentPrompt: "What should we add, remove or explain better?",
  },
};
