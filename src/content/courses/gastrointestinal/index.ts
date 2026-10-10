import type { Course } from "../types";
import { foundations } from "./01-foundations";
import { upperGastrointestinalDisorders } from "./02-upper-gastrointestinal-disorders";
import { diarrhoealAndEntericInfections } from "./03-diarrhoeal-and-enteric-infections";
import { bowelDisordersAndTheSurgicalAbdomen } from "./04-bowel-disorders-and-the-surgical-abdomen";
import { liverBiliaryAndPancreaticDisorders } from "./05-liver-biliary-and-pancreatic-disorders";
import { stomasNutritionAndGastrointestinalCancers } from "./06-stomas-nutrition-and-gastrointestinal-cancers";
import { gastrointestinalPharmacologyAndCalculations } from "./07-gastrointestinal-pharmacology-and-calculations";

export const gastrointestinalAndHepaticNursing: Course = {
  slug: "gastrointestinal-and-hepatic-nursing",
  code: "NGP-GIT-106",
  title: "Gastrointestinal & Hepatic Nursing",
  tagline: "From the mouth to the anus and through the liver — the abdomen examined in the right order, the bleeding ulcer and the bursting varix, diarrhoea and cholera with the ORS plans that save children, typhoid, worms, the obstructed bowel and the acute abdomen, jaundice, hepatitis B and cirrhosis, the gallbladder and pancreas, the stoma, nutrition support and the cancers of the gut.",
  description:
    "A structured course covering the anatomy and physiology of digestion and the liver, abdominal assessment and GI investigations, reflux, gastritis and peptic ulcer disease with Helicobacter pylori and NSAIDs, upper GI bleeding and oesophageal varices, nausea, vomiting and safe nasogastric tube care, acute diarrhoea, dehydration and the WHO treatment plans, cholera as an outbreak emergency, typhoid, dysentery, amoebiasis and intestinal worms, constipation, bowel obstruction, hernias, inflammatory bowel disease and anorectal conditions, the acute abdomen, appendicitis, peritonitis and perioperative care for abdominal surgery, jaundice in adult and newborn, viral hepatitis with hepatitis B prevention and needlestick response, cirrhosis with ascites, encephalopathy and liver failure, paracetamol overdose and alcohol withdrawal, gallstones, cholangitis and pancreatitis, stoma care, malnutrition, enteral and parenteral nutrition and refeeding syndrome, the red flags and palliative care of gastrointestinal cancers, and GI pharmacology with the calculations nurses make at the bedside. Each lesson is written for Ghanaian nursing and midwifery students, uses the diagrams from the NurseGrid question bank, and ends with practice questions drawn from the same bank. Finish every learning activity, pass the post-test and complete the evaluation to earn your certificate.",
  icon: "🫃",
  level: "Intermediate",
  gradient: "from-emerald-700 via-green-500 to-lime-400",
  creditHours: 4,
  dueInDays: 30,
  outcomes: [
    "Relate the structure and function of each segment of the gastrointestinal tract, the liver, gallbladder and pancreas to the signs produced when it fails, and take a focused GI history and examine the abdomen in the correct order.",
    "Recognise and manage reflux, gastritis and peptic ulcer disease, including Helicobacter pylori eradication, NSAID counselling and the complications of bleeding, perforation and gastric outlet obstruction.",
    "Resuscitate the patient with upper gastrointestinal bleeding, distinguish ulcer from variceal bleeding and deliver the specific therapy and monitoring for each, and assess nausea and vomiting and manage a nasogastric tube safely.",
    "Classify dehydration and apply WHO Plans A, B and C with ORS, zinc and continued feeding, manage cholera and other enteric infections with the correct antibiotics, infection control and notification, and teach prevention through water, sanitation, hygiene and deworming.",
    "Assess and manage constipation, bowel obstruction, hernias, inflammatory bowel disease and anorectal conditions, recognise the acute abdomen, appendicitis and peritonitis, and deliver safe pre- and post-operative care for abdominal surgery including the recognition of complications by day.",
    "Classify jaundice in adults and newborns, care for patients with viral hepatitis, apply hepatitis B screening, vaccination, post-exposure and mother-to-child prevention, and manage cirrhosis with ascites, encephalopathy, variceal risk, coagulopathy, acute liver failure, paracetamol overdose and alcohol withdrawal.",
    "Recognise gallstone disease, cholangitis and acute pancreatitis, deliver the fluid, analgesic, nutritional and monitoring care that determines outcome, and care for patients before and after biliary and pancreatic surgery.",
    "Care for the patient with a stoma from assessment to independence, screen for and treat malnutrition with food-first, enteral and parenteral support while preventing refeeding syndrome, recognise the red flags of gastrointestinal cancer, deliver palliative care, and administer GI and hepatic drugs and calculations safely.",
  ],
  audience: [
    "Final-year nursing and midwifery students preparing for the N&MC licensing examination",
    "Newly qualified nurses on medical, surgical, emergency, paediatric and public health placements where diarrhoea, abdominal pain, GI bleeding, jaundice and the surgical abdomen are met every day",
    "Nurses working in or preparing to join surgical, gastroenterology, infectious disease, nutrition, stoma care, palliative care and community health services",
  ],
  modules: [
    foundations,
    upperGastrointestinalDisorders,
    diarrhoealAndEntericInfections,
    bowelDisordersAndTheSurgicalAbdomen,
    liverBiliaryAndPancreaticDisorders,
    stomasNutritionAndGastrointestinalCancers,
    gastrointestinalPharmacologyAndCalculations,
  ],
  postTest: {
    title: "Post-Test: Gastrointestinal & Hepatic Nursing",
    description:
      "Twenty-five questions drawn at random from the gastrointestinal and hepatic question pool. You need 80% to pass. You may attempt the post-test up to three times in 24 hours; if you do not pass, review the learning activities before trying again.",
    questionCount: 25,
    passMark: 80,
    maxAttemptsPer24h: 3,
    extraKeywords: ["abdominal", "abdomen", "diarrhoea", "vomit", "dehydrat", "cholera", "typhoid", "jaundice", "hepatitis", "cirrhosis", "bowel", "stool", "nasogastric", "ostomy", "appendic", "peritonitis", "pancrea", "gallbladder", "nutrition", "malnutrition", "constipat", "peptic", "varice", "haematemesis", "melaena"],
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
