import { AuthoredQuestion } from "./authored-bank";

/**
 * 20 Original NCLEX-style clinical scenario practice questions
 * meticulously authored for Gastrointestinal Nursing course modules:
 * - Module 01: Foundations & GI Physical Assessment (NG-MOD-GI-001 - 002)
 * - Module 02: Upper GI Disorders & Surgery (NG-MOD-GI-003 - 005)
 * - Module 03: Diarrhoeal & Enteric Infections (NG-MOD-GI-006 - 007)
 * - Module 04: Bowel Disorders & The Surgical Abdomen (NG-MOD-GI-008 - 010)
 * - Module 05: Liver, Biliary & Pancreatic Disorders (NG-MOD-GI-011 - 014)
 * - Module 06: Stomas, Enteral/Parenteral Nutrition & GI Oncology (NG-MOD-GI-015 - 017)
 * - Module 07: GI Pharmacology & Calculations (NG-MOD-GI-018 - 020)
 */
export const GI_MODULE_SCENARIOS: AuthoredQuestion[] = [
  // ---------------------------------------------------------------------------
  // MODULE 01: Foundations & GI Physical Assessment
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-GI-001",
    categorySlug: "med-surg",
    stem: "A nurse is performing an admission physical assessment on a client admitted with acute mid-abdominal pain. In which sequence should the nurse execute the physical examination of the abdomen?",
    choices: [
      { id: "a", text: "Inspection, auscultation, percussion, palpation" },
      { id: "b", text: "Inspection, palpation, percussion, auscultation" },
      { id: "c", text: "Auscultation, inspection, palpation, percussion" },
      { id: "d", text: "Palpation, percussion, inspection, auscultation" },
    ],
    correctChoiceId: "a",
    rationale: "The correct sequence for abdominal assessment is inspection, auscultation, percussion, and palpation (I-A-P-P). Auscultation must precede percussion and palpation because mechanical manipulation, pressure, or percussion of the abdominal wall stimulates peristalsis and artificially alters the frequency and character of bowel sounds, potentially leading to inaccurate diagnostic findings.",
    strategy: "Remember the abdominal assessment rule: Look (inspect), Listen (auscultate), then Feel (percuss and palpate). Never touch or press before listening.",
    difficulty: "easy",
    tags: ["gastrointestinal", "assessment", "physical-exam", "fundamentals"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GI-002",
    categorySlug: "med-surg",
    stem: "A nurse auscultates the abdomen of a client on postoperative day 2 following a bowel resection. Before documenting that bowel sounds are completely absent, what standard clinical assessment procedure must the nurse follow?",
    choices: [
      { id: "a", text: "Listen for 15 seconds in the right lower quadrant only" },
      { id: "b", text: "Listen continuously over each abdominal quadrant for at least 3 to 5 minutes" },
      { id: "c", text: "Palpate the right upper quadrant vigorously while listening with the stethoscope bell" },
      { id: "d", text: "Administer an oral prokinetic agent and reassess bowel sounds 10 minutes later" },
    ],
    correctChoiceId: "b",
    rationale: "To accurately declare that bowel sounds are absent, the nurse must listen continuously with the diaphragm of the stethoscope for a minimum of 3 to 5 full minutes in each quadrant (or throughout the abdomen). Normal bowel sounds occur irregularly between 5 and 30 times per minute. True absence indicates paralytic ileus or peritonitis. Brief listening (15 seconds) is inadequate to detect hypoactive peristalsis.",
    strategy: "Recall the examination benchmark: Absent bowel sounds require continuous listening for 3 to 5 continuous minutes before being officially documented.",
    difficulty: "easy",
    tags: ["gastrointestinal", "bowel-sounds", "assessment", "postoperative"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 02: Upper GI Disorders & Surgery
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-GI-003",
    categorySlug: "med-surg",
    stem: "A client hospitalized with peptic ulcer disease suddenly reports sudden, excruciating epigastric pain that rapidly spreads across the entire abdomen. On examination, the client lies motionless with knees drawn up, the abdomen is rigid and board-like to light palpation, and bowel sounds are absent. What is the nurse's priority action?",
    choices: [
      { id: "a", text: "Administer 30 mL of liquid aluminum hydroxide antacid via oral syringe" },
      { id: "b", text: "Insert a rectal tube to relieve suspected lower bowel flatulent distension" },
      { id: "c", text: "Maintain strict NPO status, place the client in low-Fowler position with knees flexed, and immediately notify the surgeon" },
      { id: "d", text: "Apply a warm heating pad across the epigastrium to alleviate muscle guarding" },
    ],
    correctChoiceId: "c",
    rationale: "Sudden severe pain, a rigid board-like abdomen, rebound tenderness, and absent bowel sounds are classical hallmarks of acute gastrointestinal perforation, causing chemical peritonitis from leaking gastric contents. This is a life-threatening surgical emergency. The nurse must immediately maintain strict NPO status, position the client in low-Fowler position with knees flexed (to localize peritonitis to the pelvis and decrease abdominal wall tension), obtain vital signs, and summon the surgeon immediately for emergency laparotomy. Oral antacids and heat applications are contraindicated.",
    strategy: "Identify the surgical abdomen: 'Sudden sharp pain + rigid board-like abdomen' = Perforation and peritonitis. First action = NPO + notify surgeon immediately.",
    difficulty: "hard",
    tags: ["gastrointestinal", "peptic-ulcer", "perforation", "surgical-abdomen", "emergency"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GI-004",
    categorySlug: "med-surg",
    stem: "A nurse provides discharge instructions to a client with severe gastroesophageal reflux disease (GERD) and a sliding hiatal hernia. Which lifestyle modification should the nurse instruct the client to adopt?",
    choices: [
      { id: "a", text: "Consume large meals twice daily to minimize gastric acid secretory cycles" },
      { id: "b", text: "Drink a cup of hot peppermint tea immediately before retiring to bed" },
      { id: "c", text: "Lie flat on the back for 45 minutes after eating to facilitate gastric emptying" },
      { id: "d", text: "Elevate the head of the bed 6 inches on blocks and remain upright for at least 2 to 3 hours after meals" },
    ],
    correctChoiceId: "d",
    rationale: "Elevating the head of the bed 6 inches on blocks utilizes gravity to prevent acid reflux into the esophagus during sleep. Remaining upright for 2 to 3 hours after meals allows time for gastric emptying and prevents reflux. Peppermint, chocolate, caffeine, alcohol, fatty foods, and smoking reduce lower esophageal sphincter (LES) tone and worsen reflux. Lying down flat after meals dramatically increases reflux events.",
    strategy: "Focus on anti-reflux biomechanics: Elevate the head of bed, remain upright after eating, eat small frequent meals, and avoid LES-relaxing foods (peppermint, chocolate, caffeine).",
    difficulty: "easy",
    tags: ["gastrointestinal", "gerd", "hiatal-hernia", "patient-education"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-GI-005",
    categorySlug: "med-surg",
    stem: "A client who underwent a partial gastrectomy with gastrojejunostomy (Billroth II procedure) 3 weeks ago reports experiencing weakness, dizziness, palpitations, diaphoresis, and explosive abdominal cramping 20 minutes after meals. The nurse recognizes dumping syndrome. Which dietary teaching should the nurse provide?",
    choices: [
      { id: "a", text: "Eat small, frequent meals high in protein and fat, avoid drinking fluids with meals, and lie down for 20 to 30 minutes after eating" },
      { id: "b", text: "Consume high-carbohydrate smoothies with large amounts of refined sugar at mealtime" },
      { id: "c", text: "Drink at least 500 mL of iced water during each meal to dilute gastric secretions" },
      { id: "d", text: "Ambulate briskly around the ward immediately after consuming heavy meals" },
    ],
    correctChoiceId: "a",
    rationale: "Dumping syndrome results from the rapid transit of hyperosmolar chyme into the jejunum, pulling intravascular fluid into the bowel lumen (hypotension, dizziness, cramping) and triggering reactive hypoglycemia. Dietary management includes: (1) small, frequent meals, (2) low-carbohydrate, moderate-to-high protein and complex fat content to slow gastric transit, (3) consuming liquids between meals rather than with meals (at least 30 to 45 minutes apart) to prevent accelerated gastric emptying, and (4) reclining or lying down for 20 to 30 minutes after meals to slow intestinal transit.",
    strategy: "Recall the dumping syndrome dietary triad: High protein/fat + Low carbs + No fluids with meals + Recline after meals.",
    difficulty: "medium",
    tags: ["gastrointestinal", "gastrectomy", "dumping-syndrome", "nutrition"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 03: Diarrhoeal & Enteric Infections
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-GI-006",
    categorySlug: "safety-infection-control",
    stem: "A hospitalized client receiving broad-spectrum IV antibiotics develops severe watery diarrhea and tests positive for Clostridioides difficile (C. diff). When planning infection control precautions, which practice is essential for the nursing team?",
    choices: [
      { id: "a", text: "Rely exclusively on alcohol-based hand rub formulations for rapid sanitization" },
      { id: "b", text: "Cleanse hands thoroughly with antimicrobial soap and warm water after removing gloves" },
      { id: "c", text: "Place the client on airborne precautions in a negative-pressure isolation room" },
      { id: "d", text: "Disinfect bedside medical equipment using standard quaternary ammonium wipes" },
    ],
    correctChoiceId: "b",
    rationale: "Clostridioides difficile forms hardy bacterial endospores that are resistant to alcohol-based hand sanitizers. Healthcare personnel must wash hands vigorously with soap and water; the mechanical friction and lather rinse the spores off the skin. C. diff requires Contact Precautions (gown and gloves upon entry, dedicated equipment). Disinfection of patient rooms and equipment must be performed with sporicidal, bleach-based (sodium hypochlorite) agents, not quaternary ammonium wipes. Airborne isolation is unnecessary.",
    strategy: "Remember the C. diff rule: Spores survive alcohol! Soap and water handwashing is mandatory. Clean surfaces with bleach.",
    difficulty: "easy",
    tags: ["gastrointestinal", "c-diff", "infection-control", "hand-hygiene"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GI-007",
    categorySlug: "med-surg",
    stem: "A 24-year-old client is hospitalized during the third week of untreated typhoid fever (Salmonella enterica serovar Typhi). The nurse notes a sudden drop in body temperature from 39.8°C (103.6°F) to 36.2°C (97.2°F), accompanied by tachycardia, hypotension, severe abdominal tenderness, and involuntary guarding. Which life-threatening complication must the nurse suspect immediately?",
    choices: [
      { id: "a", text: "Immediate therapeutic resolution of the enteric bacteremia" },
      { id: "b", text: "Acute cholelithiasis resulting in common bile duct obstruction" },
      { id: "c", text: "Intestinal perforation of the terminal ileum with developing septic shock" },
      { id: "d", text: "Self-limiting splenic enlargement resolving spontaneously" },
    ],
    correctChoiceId: "c",
    rationale: "During the second and third weeks of typhoid fever, hyperplastic Peyer's patches in the terminal ileum ulcerate and may necrose, causing life-threatening intestinal perforation and severe lower GI hemorrhage. A sudden hypothermic drop in temperature, tachycardia, hypotension, and generalized peritoneal signs (tenderness, guarding) in week 3 indicate free bowel perforation and acute septic peritonitis. This is a surgical emergency requiring immediate fluid resuscitation, broad-spectrum IV antibiotics, and emergent exploratory laparotomy.",
    strategy: "Identify the classic presentation: Typhoid fever in week 3 with sudden hypothermia, hypotension, and acute abdominal guarding = Intestinal perforation (Peyer's patch necrosis).",
    difficulty: "medium",
    tags: ["gastrointestinal", "typhoid", "peritonitis", "perforation", "emergency"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 04: Bowel Disorders & The Surgical Abdomen
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-GI-008",
    categorySlug: "med-surg",
    stem: "A 16-year-old client presents with right lower quadrant abdominal pain localized at McBurney's point, low-grade fever, nausea, and anorexia. The nurse suspects acute appendicitis. Which provider prescription should the nurse question and withhold?",
    choices: [
      { id: "a", text: "Establish an intravenous line for 0.9% normal saline infusion" },
      { id: "b", text: "Maintain the client on strict NPO status" },
      { id: "c", text: "Obtain blood for complete blood count and serum electrolytes" },
      { id: "d", text: "Administer a warm mineral oil enema to relieve suspected obstipation" },
    ],
    correctChoiceId: "d",
    rationale: "In suspected acute appendicitis, administering enemas, laxatives, or applying heat to the abdomen is strictly contraindicated because increased intraluminal pressure or hyperemic vasodilation can cause sudden appendix perforation and catastrophic diffuse peritonitis. The nurse must question any prescription for enemas, laxatives, or local heat. Keeping the client NPO, starting IV fluids, and obtaining baseline labs are standard and essential preparatory steps.",
    strategy: "Safety rule in suspected appendicitis: Never give enemas/laxatives, and never apply direct heat (risk of appendix rupture).",
    difficulty: "easy",
    tags: ["gastrointestinal", "appendicitis", "safety", "pediatrics"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GI-009",
    categorySlug: "med-surg",
    stem: "A nurse is providing care for a client experiencing an acute flare-up of ulcerative colitis. The client reports passing 12 bloody, mucoid stools per day with severe tenesmus. Which clinical priority should guide the nurse's immediate interventions?",
    choices: [
      { id: "a", text: "Monitor for hypovolemia, electrolyte depletion (especially hypokalemia), and signs of toxic megacolon" },
      { id: "b", text: "Encourage a high-fiber, high-residue diet with fresh raw vegetables to form bulk" },
      { id: "c", text: "Administer daily rectal stimulant suppositories to expedite bowel evacuation" },
      { id: "d", text: "Restrict oral fluid intake to 500 mL per 24 hours to reduce stool frequency" },
    ],
    correctChoiceId: "a",
    rationale: "Severe flare-ups of ulcerative colitis cause extensive mucosal ulceration in the colon and rectum, leading to frequent bloody diarrhea (10–20 stools/day), significant blood loss, dehydration, and severe electrolyte depletion (especially potassium and sodium). Furthermore, severe inflammation can cause paralysis of the colon and rapid dilation (toxic megacolon), predisposing to perforation. The nurse must monitor hydration, electrolytes, hemoglobin, and watch for fever, leukocytosis, and abdominal distension. High-fiber diets exacerbate bowel inflammation during acute flares.",
    strategy: "Identify the life-threats of acute colitis flares: Dehydration, hypokalemia, and toxic megacolon (fever, distension, tachycardia).",
    difficulty: "medium",
    tags: ["gastrointestinal", "ulcerative-colitis", "ibd", "electrolytes"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-GI-010",
    categorySlug: "med-surg",
    stem: "A client is admitted with an acute mechanical small bowel obstruction (SBO) caused by postoperative adhesions. The client exhibits severe abdominal distension, high-pitched hyperactive bowel sounds with rushes, and persistent bilious emesis. Which initial collaborative intervention is the priority?",
    choices: [
      { id: "a", text: "Administer oral polyethylene glycol bowel preparation to clear the obstruction" },
      { id: "b", text: "Insert a nasogastric (NG) tube and attach to low intermittent suction, and initiate IV fluids" },
      { id: "c", text: "Provide a regular diet with high-protein supplements to prevent catabolism" },
      { id: "d", text: "Administer high-dose subcutaneous loperamide to control vomiting" },
    ],
    correctChoiceId: "b",
    rationale: "In mechanical small bowel obstruction, fluid and gas accumulate proximal to the blockage, resulting in massive luminal distension, third-spacing, dehydration, vomiting, and risk of bowel ischemia or perforation. Decompression of the stomach and upper GI tract via a nasogastric tube attached to low intermittent suction relieves distension, alleviates nausea/vomiting, and prevents pulmonary aspiration. Intravenous fluid resuscitation corrects hypovolemia. Oral intake, laxatives, and oral bowel preps are contraindicated because they exacerbate luminal pressure against the mechanical blockage.",
    strategy: "Small bowel obstruction protocol: NPO + NG tube decompression to low intermittent suction + IV fluid rehydration.",
    difficulty: "medium",
    tags: ["gastrointestinal", "bowel-obstruction", "ng-tube", "critical-care"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 05: Liver, Biliary & Pancreatic Disorders
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-GI-011",
    categorySlug: "med-surg",
    stem: "A nurse is caring for a client with end-stage cirrhosis who has developed hepatic encephalopathy. The client exhibits asterixis (flapping tremors of the hands) and progressive disorientation. Oral lactulose 30 mL three times daily is prescribed. What clinical finding indicates that the lactulose therapy is achieving its desired therapeutic outcome?",
    choices: [
      { id: "a", text: "The client develops watery, persistent diarrhea exceeding 8 bowel movements daily" },
      { id: "b", text: "The client has complete absence of bowel movements for 48 hours" },
      { id: "c", text: "The client passes 2 to 3 soft, acidic bowel movements per day and displays clearing cognitive function" },
      { id: "d", text: "The client's serum ammonia level increases above 150 micromol/L" },
    ],
    correctChoiceId: "c",
    rationale: "Lactulose is a non-absorbable disaccharide that acidifies the colon (converting absorbable ammonia [NH3] into non-absorbable ammonium [NH4+]), promoting its rapid excretion in stool. The therapeutic goal of lactulose in hepatic encephalopathy is achieving 2 to 3 soft, formed bowel movements per day, leading to reduced serum ammonia levels and improved mental status. Excessive diarrhea (> 4–5 stools/day) causes dehydration and hypokalemia, which worsens encephalopathy.",
    strategy: "Memorize the lactulose target: The goal is 2 to 3 soft stools per day, NOT profuse watery diarrhea. Clearer mentation reflects reduced ammonia.",
    difficulty: "medium",
    tags: ["gastrointestinal", "cirrhosis", "hepatic-encephalopathy", "lactulose", "pharmacology"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GI-012",
    categorySlug: "med-surg",
    stem: "A client with decompensated alcoholic cirrhosis and known esophageal varices develops massive hematemesis. A Sengstaken-Blakemore balloon tamponade tube is placed by the healthcare provider to control active bleeding. Which item is mandatory for the nurse to keep at the client's bedside at all times?",
    choices: [
      { id: "a", text: "An extra liter of sterile water for balloon irrigation" },
      { id: "b", text: "A bottle of oral activated charcoal" },
      { id: "c", text: "A tracheostomy dilator tray" },
      { id: "d", text: "A pair of surgical scissors" },
    ],
    correctChoiceId: "d",
    rationale: "If the gastric balloon of a Sengstaken-Blakemore or Minnesota tube ruptures or accidentally deflates, the esophageal balloon can migrate upward into the oropharynx, causing complete, acute airway obstruction and asphyxiation. The nurse must keep a pair of scissors at the bedside at all times; in the event of acute respiratory distress, the nurse immediately cuts all lumens of the tube to deflate the balloons instantly and pulls the tube out.",
    strategy: "High-yield NCLEX safety rule: Sengstaken-Blakemore / Minnesota tube at bedside = SCISSORS kept at bedside to cut lumens immediately if airway obstruction occurs.",
    difficulty: "medium",
    tags: ["gastrointestinal", "esophageal-varices", "balloon-tamponade", "safety", "emergency"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-GI-013",
    categorySlug: "med-surg",
    stem: "A client is admitted to the intensive care unit with acute necrotizing pancreatitis. On examination, the nurse notes bluish discoloration around the umbilicus (Cullen's sign) and in the bilateral flank areas (Turner's sign). What do these clinical assessment findings indicate?",
    choices: [
      { id: "a", text: "Severe retroperitoneal hemorrhage and extensive pancreatic necrosis" },
      { id: "b", text: "Benign cutaneous hyperpigmentation from elevated bilirubin" },
      { id: "c", text: "Acute lower urinary tract extravasation of urine" },
      { id: "d", text: "Superficial bacterial cellulitis of the abdominal subcutaneous tissue" },
    ],
    correctChoiceId: "a",
    rationale: "Cullen's sign (periumbilical ecchymosis) and Turner's (Grey Turner's) sign (flank ecchymosis) represent tracking of blood from retroperitoneal tissue into subcutaneous tissue plane walls. In acute pancreatitis, they are ominous physical signs indicating severe retroperitoneal hemorrhage, tissue necrosis, and high mortality. The client requires immediate aggressive crystalloid fluid resuscitation, strict NPO, intensive hemodynamic monitoring, and surgical evaluation.",
    strategy: "Recall the eponyms: Cullen's sign (around the 'C'ircle of the belly button) and Turner's sign ('Turn' over to see the flank) = Retroperitoneal bleeding in severe acute pancreatitis.",
    difficulty: "medium",
    tags: ["gastrointestinal", "pancreatitis", "cullens-sign", "turners-sign", "critical-care"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-GI-014",
    categorySlug: "med-surg",
    stem: "A 45-year-old client presents to the emergency department reporting acute right upper quadrant pain radiating to the right scapula 1 hour after eating fried chicken. The nurse palpates beneath the right costal margin and asks the client to take a deep breath; the client suddenly stops inhaling due to sharp pain (positive Murphy's sign). Which condition is consistent with this finding?",
    choices: [
      { id: "a", text: "Acute diverticulitis of the sigmoid colon" },
      { id: "b", text: "Acute cholecystitis" },
      { id: "c", text: "Acute appendicitis" },
      { id: "d", text: "Gastroenteritis" },
    ],
    correctChoiceId: "b",
    rationale: "A positive Murphy's sign (inspiratory arrest elicited by sharp tenderness when palpating the gallbladder beneath the right costal margin as the diaphragm descends on deep inspiration) is the classic physical diagnostic sign of acute cholecystitis (gallbladder inflammation, usually caused by cystic duct obstruction from gallstones). Pain is typically precipitated by fatty or fried meals (which stimulate cholecystokinin release) and frequently radiates to the right subscapular area or right shoulder.",
    strategy: "Connect Murphy's sign with location: Murphy's sign in RUQ = Acute Cholecystitis (gallbladder).",
    difficulty: "easy",
    tags: ["gastrointestinal", "cholecystitis", "murphys-sign", "assessment"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 06: Stomas, Enteral/Parenteral Nutrition & GI Oncology
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-GI-015",
    categorySlug: "med-surg",
    stem: "A nurse assesses a client on postoperative day 1 following an exploratory laparotomy and formation of an end colostomy. The stoma is dark purple, dusky, and cool to the touch. What is the nurse's priority action?",
    choices: [
      { id: "a", text: "Document the finding as normal initial postoperative venous engorgement" },
      { id: "b", text: "Apply an ice pack directly to the stoma surface to reduce swelling" },
      { id: "c", text: "Immediately notify the surgeon of suspected stomal ischemia and necrosis" },
      { id: "d", text: "Irrigate the stoma with 500 mL of warm normal saline" },
    ],
    correctChoiceId: "c",
    rationale: "A healthy, viable stoma should be moist, beefy red or pink, and warm. A stoma that is pale, dusky, dark purple, brown, or black indicates compromised arterial blood supply or severe venous congestion resulting in ischemia and tissue necrosis. This is a surgical emergency that requires immediate notification of the surgical team for potential urgent surgical re-exploration. Never apply ice or wait, as prolonged ischemia leads to stoma retraction and intraperitoneal perforation.",
    strategy: "Identify the abnormal color: Normal stoma = beefy red and moist. Purple/dusky/black stoma = dead tissue/ischemia! Immediate surgeon notification.",
    difficulty: "easy",
    tags: ["gastrointestinal", "colostomy", "stoma-care", "surgical-emergency"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GI-016",
    categorySlug: "pharmacology-parenteral",
    stem: "A client with short bowel syndrome receives total parenteral nutrition (TPN) via a central venous catheter. The current bag is empty, and the replacement bag from the pharmacy is delayed for 1 hour. What should the nurse infuse temporarily to prevent a life-threatening complication?",
    choices: [
      { id: "a", text: "Infuse 0.9% normal saline at a keep-vein-open (KVO) rate" },
      { id: "b", text: "Infuse sterile water without dextrose" },
      { id: "c", text: "Clamp the central venous catheter line completely until the new bag arrives" },
      { id: "d", text: "Infuse 10% dextrose in water (D10W) at the same infusion rate" },
    ],
    correctChoiceId: "d",
    rationale: "TPN solutions contain high concentrations of dextrose (typically 20% to 50%), stimulating continuous, high-level pancreatic insulin secretion. If a TPN infusion is suddenly stopped or runs out, circulating insulin levels remain high while glucose delivery abruptly drops, precipitating severe rebound hypoglycemia (confusion, diaphoresis, tremors, seizures, coma). To prevent severe rebound hypoglycemia while awaiting a new TPN bag, the nurse must immediately infuse 10% dextrose in water (D10W) at the same prescribed rate.",
    strategy: "Recall the golden rule of TPN gaps: Never stop TPN abruptly. If the next TPN bag is delayed, hang D10W at the same rate to prevent rebound hypoglycemia.",
    difficulty: "medium",
    tags: ["gastrointestinal", "tpn", "hypoglycemia", "parenteral-nutrition", "safety"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-GI-017",
    categorySlug: "med-surg",
    stem: "A 62-year-old client presents for a routine check-up. The client's laboratory results show unexplained microcytic, hypochromic anemia (hemoglobin 8.4 g/dL). The client reports feeling fatigued and having narrower, pencil-thin stools over the past 2 months. Which diagnostic screening test should the nurse anticipate the provider ordering first?",
    choices: [
      { id: "a", text: "Colonoscopy with tissue biopsy" },
      { id: "b", text: "Routine upper GI barium swallow series" },
      { id: "c", text: "Esophagogastroduodenoscopy (EGD)" },
      { id: "d", text: "Pelvic ultrasound" },
    ],
    correctChoiceId: "a",
    rationale: "In an adult older than 50 years, new-onset iron deficiency anemia, unexplained fatigue, change in bowel habits (such as pencil-thin stools), or rectal bleeding must be treated as colorectal cancer until proven otherwise. A colonoscopy allows direct visualization of the entire large intestine from the rectum to the cecum and enables immediate biopsy of any suspicious lesions or polyp removal. It is the gold standard diagnostic procedure.",
    strategy: "Screening red flag: Unexplained iron deficiency anemia + change in bowel caliber/pencil-thin stools in an older adult = Colorectal cancer evaluation via Colonoscopy.",
    difficulty: "medium",
    tags: ["gastrointestinal", "colorectal-cancer", "colonoscopy", "oncology"],
    isFree: false,
  },

  // ---------------------------------------------------------------------------
  // MODULE 07: GI Pharmacology & Calculations
  // ---------------------------------------------------------------------------
  {
    authoredId: "NG-MOD-GI-018",
    categorySlug: "med-surg",
    stem: "A client who has been taking high-dose omeprazole (a proton pump inhibitor [PPI]) daily for over 4 years is admitted to the clinic. The nurse should assess the client for which potential long-term adverse complications associated with prolonged acid suppression?",
    choices: [
      { id: "a", text: "Hypercalcemia, severe hypernatremia, and gouty arthritis" },
      { id: "b", text: "Increased risk of bone fractures (osteoporosis), hypomagnesemia, and Clostridioides difficile colitis" },
      { id: "c", text: "Hypertension, acute hemolytic anemia, and fluid overload" },
      { id: "d", text: "Hypothyroidism, adrenal insufficiency, and peptic ulcer recurrence" },
    ],
    correctChoiceId: "b",
    rationale: "Long-term use of proton pump inhibitors (PPIs) suppresses gastric acid, which impairs the intestinal absorption of calcium and magnesium, leading to hypomagnesemia and significantly increased risks of osteoporosis and bone fractures (hip, wrist, and spine). Furthermore, the loss of the gastric acid bactericidal barrier allows pathogen colonization, increasing the risk of Clostridioides difficile-associated diarrhea and pneumonia. Clients on long-term PPIs require periodic bone density scans and magnesium level monitoring.",
    strategy: "Associate long-term PPI risks: Low acid = low calcium absorption (osteoporosis/fractures) + low magnesium (hypomagnesemia) + lost bacterial barrier (C. diff infection).",
    difficulty: "medium",
    tags: ["gastrointestinal", "omeprazole", "ppi", "pharmacology", "bone-health"],
    isFree: false,
  },
  {
    authoredId: "NG-MOD-GI-019",
    categorySlug: "pharmacology-parenteral",
    stem: "A nurse is caring for a client receiving intravenous metoclopramide for severe diabetic gastroparesis. While assessing the client, the nurse notes involuntary tongue protrusion, repetitive facial grimacing, and lip-smacking movements. Which action should the nurse take immediately?",
    choices: [
      { id: "a", text: "Administer the next scheduled dose on time with a full glass of water" },
      { id: "b", text: "Instruct the client that these movements are benign and will subside with continued therapy" },
      { id: "c", text: "Discontinue the metoclopramide and immediately notify the healthcare provider" },
      { id: "d", text: "Apply warm compresses to the bilateral masseter muscles" },
    ],
    correctChoiceId: "c",
    rationale: "Metoclopramide is a central dopamine antagonist that crosses the blood-brain barrier. It carries a Black Box warning for tardive dyskinesia—a serious, often irreversible extrapyramidal movement disorder characterized by involuntary, repetitive movements of the face, tongue, and limbs (facial grimacing, tongue protrusion, lip smacking, rapid blinking). At the earliest sign of tardive dyskinesia, the medication must be stopped immediately and the provider notified. Continued administration risks permanent neurological dysfunction.",
    strategy: "Identify the critical side effect: Metoclopramide blocks dopamine. Involuntary facial movements/tongue thrusting = Tardive Dyskinesia! Stop the drug immediately.",
    difficulty: "medium",
    tags: ["gastrointestinal", "metoclopramide", "tardive-dyskinesia", "pharmacology", "safety"],
    isFree: true,
  },
  {
    authoredId: "NG-MOD-GI-020",
    categorySlug: "pharmacology-parenteral",
    stem: "A healthcare provider prescribes a continuous intravenous infusion of octreotide at 50 mcg/hour for a client experiencing active bleeding from esophageal varices. The pharmacy delivers an IV infusion bag containing octreotide 500 mcg in 500 mL of 0.9% normal saline. At what rate in milliliters per hour (mL/hr) should the nurse program the electronic infusion pump?",
    choices: [
      { id: "a", text: "25 mL/hr" },
      { id: "b", text: "100 mL/hr" },
      { id: "c", text: "10 mL/hr" },
      { id: "d", text: "50 mL/hr" },
    ],
    correctChoiceId: "d",
    rationale: "To calculate the infusion rate: Concentration = 500 mcg / 500 mL = 1 mcg/mL. Desired dose = 50 mcg/hr. Infusion rate = (Desired dose / Concentration) = 50 mcg/hr / (1 mcg/mL) = 50 mL/hr. Octreotide (a somatostatin analog) reduces portal venous pressure through selective splanchnic vasoconstriction, controlling active variceal hemorrhage.",
    strategy: "Calculate step-by-step: 500 mcg in 500 mL means 1 mcg = 1 mL. For 50 mcg/hr, infuse 50 mL/hr.",
    difficulty: "easy",
    tags: ["gastrointestinal", "octreotide", "calculations", "iv-infusion", "pharmacology"],
    isFree: false,
  },
];
