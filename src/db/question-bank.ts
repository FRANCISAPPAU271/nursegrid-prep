// ---------------------------------------------------------------------------
// Shared question-bank generator: item banks, archetypes, and the
// low-repetition question builder. Used by both seed.ts (full seed) and
// reseed-questions.ts (safe questions-only refresh).
// ---------------------------------------------------------------------------
import type { questions } from "./schema";
import {
  EXTRA_FUNDAMENTALS,
  EXTRA_PHARMACOLOGY,
  EXTRA_MEDSURG,
  EXTRA_MATERNAL,
  EXTRA_PEDIATRICS,
  EXTRA_MENTALHEALTH,
  EXTRA_FLUIDELECTROLYTE,
  EXTRA_SAFETY,
  EXTRA_LEADERSHIP,
  EXTRA_HEALTHPROMO,
  EXTRA_RISKREDUCTION,
  EXTRA_GERONTOLOGY,
} from "./seed-extra-items";

// ---------------------------------------------------------------------------
// Small deterministic helpers (no external RNG dependency needed)
// ---------------------------------------------------------------------------
export function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hashStr(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return h >>> 0;
}

export function seededShuffle<T>(arr: T[], seed: number): T[] {
  const rand = mulberry32(seed);
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// ---------------------------------------------------------------------------
// Item tuples: [name, priorityFinding, priorityAction, correctTeaching, therapeuticResponse]
// ---------------------------------------------------------------------------
type Item = [string, string, string, string, string];

const FUNDAMENTALS: Item[] = [
  ["a client receiving a bed bath and hygiene care", "the client's skin is reddened over the sacrum", "inspect the skin for breakdown before and after the bath", "I should tell the nurse if the water feels too hot", "the client's skin remains intact and free of redness"],
  ["a client with an indwelling urinary catheter", "cloudy, foul-smelling urine with sediment", "keep the drainage bag below the level of the bladder at all times", "I will not disconnect the tubing unless it is medically necessary", "urine remains clear yellow and the client is afebrile"],
  ["a client on prolonged bedrest", "new unilateral calf swelling and tenderness", "encourage active or passive range-of-motion exercises every shift", "I will move my legs and ankles frequently while in bed", "the client shows no signs of deep vein thrombosis"],
  ["a client receiving enteral tube feeding", "a gastric residual volume of 400 mL", "verify tube placement before administering the feeding", "I will keep the head of the bed elevated during and after feeding", "the client tolerates the feeding without vomiting or abdominal distention"],
  ["a client at risk for a pressure injury", "a stage II pressure injury forming on the heel", "reposition the client at least every two hours", "I will use a pillow to keep my heels off the bed", "the wound bed shows granulation tissue and decreasing size"],
  ["a client requiring passive range-of-motion exercises", "a new joint contracture with decreased range of motion", "perform passive range-of-motion exercises to all extremities", "I understand these exercises help prevent stiff, contracted joints", "the client maintains full passive range of motion in all joints"],
  ["a client with dysphagia", "coughing and a wet voice quality after swallowing", "thicken liquids and have the client sit upright to eat", "I will take small bites and swallow twice per bite", "the client swallows without coughing, choking, or pocketing food"],
  ["a client using a walker after hip surgery", "the client advances the walker and the operative leg together", "instruct the client to move the walker first, then the weaker leg", "I will keep the walker close and step into it, not past it", "the client ambulates safely with the walker without loss of balance"],
  ["a client receiving oxygen via nasal cannula", "an oxygen saturation of 84% despite the prescribed flow rate", "assess the client's airway, breathing, and oxygen saturation immediately", "I will not smoke or use open flames near my oxygen", "the client's oxygen saturation is greater than 94% on the prescribed flow"],
  ["a client with a new colostomy", "dusky or purple-colored stoma tissue", "assess stoma color and monitor for signs of ischemia", "a healthy stoma should look pink or red and moist", "the stoma remains pink or red and produces stool as expected"],
  ["a client requiring wound irrigation", "purulent drainage with a foul odor from the wound", "use sterile technique and irrigate with the prescribed solution", "I will wash my hands before and after caring for the wound", "the wound shows decreasing drainage and healthy granulation tissue"],
  ["a client with an NG tube for gastric decompression", "no drainage from the NG tube with increasing abdominal distention", "check patency of the NG tube and verify it is to low suction", "I will let the nurse know if I feel nauseated or bloated", "the client's abdomen becomes softer and less distended"],
  ["a client receiving a blood transfusion", "chills, back pain, and hives ten minutes after starting the transfusion", "stop the transfusion immediately and keep the IV line open with saline", "I will report itching, chills, or back pain right away", "the client's hemoglobin rises and vital signs remain stable"],
  ["a client in bilateral wrist restraints", "a restrained extremity that is cool, pale, and pulseless", "assess circulation, movement, and sensation at least every hour", "restraints will be removed and reassessed at least every two hours", "the client remains safe with intact circulation in the restrained limb"],
  ["a client identified as a high fall risk", "a client attempting to get out of bed unassisted with the call light out of reach", "place the client on a fall-risk protocol with the bed in the lowest position", "I will use my call light and wait for help before getting up", "the client ambulates without falling and uses the call light appropriately"],
  ["a client with a peripheral IV catheter", "swelling, coolness, and pain at the IV insertion site", "stop the infusion and remove the IV if infiltration is suspected", "I will tell the nurse if the IV site starts to hurt or swell", "the IV site remains free of redness, swelling, or drainage"],
  ["a client requiring perineal care", "foul-smelling discharge or excoriation of the perineal skin", "clean from front to back using a clean area of the cloth each time", "I will wipe from front to back to prevent infection", "the perineal skin remains clean, dry, and intact"],
  ["a client with constipation", "no bowel movement in five days with abdominal distention and pain", "encourage fluids, fiber, and ambulation before considering a laxative", "I will increase fiber and fluids and stay as active as possible", "the client has a soft, formed bowel movement without straining"],
  ["a client with urinary retention", "a distended bladder with no voiding in eight hours", "perform a bladder scan to assess for urinary retention", "I will let the nurse know if my bladder feels full but I cannot urinate", "the client voids in adequate amounts without a distended bladder"],
  ["an unconscious client requiring oral hygiene", "dry, cracked oral mucosa with thick secretions", "position the client side-lying and swab the mouth to prevent aspiration", "family will be taught how to perform oral care safely", "the oral mucosa remains moist, clean, and free of lesions"],
  ["a client experiencing sensory deprivation during hospitalization", "a client who becomes disoriented and withdrawn after days in an isolated room", "provide orientation cues such as a clock, calendar, and regular conversation", "family will bring familiar items and visit regularly to provide stimulation", "the client remains oriented and engaged with the environment"],
  ["a postoperative client requiring positioning for comfort", "increased pain when lying flat after abdominal surgery", "position the client in semi-Fowler's to reduce strain on the incision", "I will use a pillow to splint my incision when coughing or moving", "the client reports improved comfort and reduced pain with repositioning"],
  ["a client with an artificial airway requiring suctioning", "an oxygen saturation drop and coarse breath sounds during suctioning", "limit suction passes to less than 10-15 seconds and preoxygenate first", "family will learn to suction only as needed, not on a routine schedule", "the airway is clear with improved breath sounds and oxygenation"],
  ["a client requiring a turning and repositioning schedule", "a reddened area over the coccyx that does not blanch", "reposition the client at least every two hours and document skin checks", "I will remind staff to turn me on a regular schedule", "the client's skin remains intact with no new areas of breakdown"],
  ["a client with hearing loss", "the client does not respond when spoken to from behind or the side", "face the client directly and speak clearly without shouting", "family will get the client's attention before speaking and face them directly", "the client understands and appropriately responds to conversation"],
  ["a client with low vision", "the client trips over objects left in the walking path", "keep the environment free of clutter and orient the client to the room layout", "I will ask staff to describe where items are placed in my room", "the client ambulates safely within the environment without injury"],
  ["a client requiring assisted ambulation", "the client becomes dizzy and diaphoretic when standing", "have the client dangle at the bedside before standing to check for orthostatic hypotension", "I will sit on the edge of the bed for a minute before standing", "the client ambulates without dizziness, weakness, or a drop in blood pressure"],
  ["a client with a Jackson-Pratt surgical drain", "a sudden increase in bright red drainage from the drain", "empty and measure drainage from the drain each shift and record the amount", "I will keep the drain compressed to maintain suction", "drainage decreases steadily and the insertion site remains clean and dry"],
  ["a client using sequential compression devices", "SCDs removed and left off for most of the shift", "ensure SCDs are applied correctly and functioning whenever the client is in bed", "I will keep the compression sleeves on except when walking", "the client shows no signs of calf swelling, redness, or tenderness"],
  ["a hospitalized client with a sleep disturbance", "a client who has been awake most of the night for several days", "cluster nursing care and dim lights at night to promote rest", "I will ask staff to group my care activities to protect my sleep", "the client reports improved sleep and feels more rested"],
];

const PHARMACOLOGY: Item[] = [
  ["a client prescribed warfarin", "bleeding gums and dark, tarry stools", "hold the dose and notify the provider if the INR is critically elevated", "I will get routine INR checks and avoid drastic changes in green leafy vegetable intake", "the client's INR remains within the prescribed therapeutic range"],
  ["a client prescribed heparin", "a sudden drop in platelet count consistent with HIT", "monitor aPTT and platelet counts throughout therapy", "I will report unusual bruising or bleeding right away", "the client's aPTT remains within the prescribed therapeutic range"],
  ["a client prescribed digoxin", "a heart rate of 48 beats/min with nausea and visual halos", "check the apical pulse for one full minute before giving the dose", "I will hold the dose and call the provider if my pulse is below 60", "the client's heart rate and rhythm are within normal limits with improved cardiac output"],
  ["a client prescribed furosemide", "a potassium level of 2.9 mEq/L with muscle weakness", "monitor potassium levels and assess for signs of hypokalemia", "I will eat potassium-rich foods such as bananas and oranges", "the client's edema decreases and urine output increases"],
  ["a client prescribed lisinopril", "a persistent dry cough and facial swelling", "monitor blood pressure and assess for angioedema after the first dose", "I will change positions slowly to avoid dizziness from low blood pressure", "the client's blood pressure decreases to within the target range"],
  ["a client prescribed metoprolol", "a heart rate of 46 beats/min and dizziness", "check heart rate and blood pressure before administering the dose", "I will not stop this medication abruptly", "the client's heart rate and blood pressure are controlled within target limits"],
  ["a client prescribed regular insulin", "shakiness, diaphoresis, and a blood glucose of 52 mg/dL", "check the blood glucose level and treat hypoglycemia if present", "I will always carry a fast-acting source of sugar with me", "the client's blood glucose remains within the target range"],
  ["a client prescribed metformin", "unusual muscle pain, difficulty breathing, and lethargy suggesting lactic acidosis", "hold metformin before procedures requiring contrast dye", "I will take this medication with food to reduce stomach upset", "the client's fasting blood glucose and A1C decrease toward target levels"],
  ["a client prescribed vancomycin", "flushing and redness of the face, neck, and trunk during infusion", "infuse vancomycin slowly over at least 60 minutes", "I will report ringing in my ears or decreased urine output", "the trough level remains within the therapeutic range and the infection resolves"],
  ["a client prescribed gentamicin", "ringing in the ears and decreased urine output", "monitor peak and trough levels and renal function during therapy", "I will report hearing changes or decreased urination immediately", "the client's infection resolves without signs of ototoxicity or nephrotoxicity"],
  ["a client prescribed phenytoin", "gum overgrowth and a rash with fever", "monitor phenytoin levels and assess for signs of toxicity such as nystagmus", "I will maintain good oral hygiene to reduce gum overgrowth", "the client's seizures are controlled with a therapeutic phenytoin level"],
  ["a client prescribed lithium", "coarse hand tremors, vomiting, and confusion", "monitor lithium levels and ensure adequate sodium and fluid intake", "I will maintain a consistent sodium and fluid intake each day", "the client's mood stabilizes with a lithium level in the therapeutic range"],
  ["a client prescribed morphine", "a respiratory rate of 8 breaths/min and pinpoint pupils", "assess respiratory rate before administering each dose of opioid", "I will take a stool softener to prevent constipation while on this medication", "the client reports adequate pain relief without respiratory depression"],
  ["a client prescribed albuterol", "a heart rate of 132 beats/min and tremors after a treatment", "monitor heart rate and for tremors after administering the medication", "I will use my rescue inhaler for sudden shortness of breath, not daily control", "the client's wheezing decreases and airflow improves"],
  ["a client prescribed prednisone", "a blood glucose of 210 mg/dL and a moon face after weeks of therapy", "taper the dose gradually rather than stopping it abruptly", "I will not stop this medication suddenly without provider guidance", "the client's inflammation and symptoms improve"],
  ["a client prescribed levothyroxine", "chest pain, tremors, and a heart rate of 130 beats/min", "give levothyroxine on an empty stomach at the same time each day", "I will take this medication in the morning, 30-60 minutes before breakfast", "the client's TSH level normalizes and energy level improves"],
  ["a client prescribed clopidogrel", "unusual bruising and prolonged bleeding from a small cut", "hold clopidogrel before scheduled invasive procedures as directed", "I will use a soft toothbrush and electric razor to reduce bleeding risk", "the client has no new thrombotic events while on therapy"],
  ["a client prescribed IV potassium chloride", "burning at the IV site and a peaked T wave on the ECG", "never administer potassium chloride as an IV push", "I understand IV potassium must be given slowly and diluted", "the client's serum potassium level returns to within normal limits"],
  ["a client prescribed magnesium sulfate", "absent deep tendon reflexes and a respiratory rate of 10 breaths/min", "assess deep tendon reflexes and respiratory rate before each dose", "I will report muscle weakness or difficulty breathing right away", "the client's blood pressure decreases and seizure activity is prevented"],
  ["a client prescribed methotrexate", "mouth sores, unusual bruising, and a low white blood cell count", "monitor CBC and liver function tests during therapy", "I will avoid alcohol and take folic acid as prescribed", "the client's disease activity or tumor markers decrease"],
  ["a client prescribed clozapine", "a sore throat, fever, and an absolute neutrophil count below 500", "monitor the absolute neutrophil count regularly during therapy", "I will get routine blood tests to monitor my white blood cell count", "the client's psychotic symptoms improve without signs of agranulocytosis"],
  ["a client prescribed sertraline", "agitation, high fever, and muscle rigidity suggesting serotonin syndrome", "assess for serotonin syndrome, especially with other serotonergic drugs", "I understand it may take several weeks to feel the full effect", "the client's mood and depressive symptoms improve"],
  ["a client prescribed enoxaparin", "bruising and swelling greater than 2 inches around the injection site", "inject enoxaparin subcutaneously into the abdomen without aspirating", "I will not rub the injection site after giving the dose", "the client shows no signs of new clot formation"],
  ["a client prescribed theophylline", "nausea, tremors, and a heart rate of 150 beats/min", "monitor theophylline levels to keep within the therapeutic range", "I will avoid excessive caffeine intake while taking this medication", "the client's airway constriction and wheezing decrease"],
  ["a client prescribed isoniazid", "tingling and numbness in the hands and feet", "administer vitamin B6 with isoniazid to prevent peripheral neuropathy", "I will avoid alcohol and have my liver function tests monitored", "the client's sputum cultures convert to negative for tuberculosis"],
  ["a client prescribed hydrochlorothiazide", "muscle cramps and a potassium level of 3.0 mEq/L", "monitor electrolytes, especially potassium, during therapy", "I will get up slowly to prevent dizziness from low blood pressure", "the client's blood pressure and fluid retention decrease"],
  ["a laboring client prescribed oxytocin", "contractions lasting longer than 90 seconds with a fetal heart rate deceleration", "monitor uterine contractions and fetal heart rate continuously during the infusion", "I understand this medication is used to start or strengthen labor contractions", "labor progresses with adequate contractions and a reassuring fetal heart rate"],
  ["a client prescribed terbutaline", "a maternal heart rate of 130 beats/min and palpitations", "monitor maternal heart rate and blood pressure during administration", "I will report chest pain or a racing heartbeat immediately", "uterine contractions decrease, delaying preterm labor"],
  ["a client prescribed epoetin alfa", "a blood pressure of 190/110 mmHg and a severe headache", "monitor blood pressure and hemoglobin during therapy", "I will keep follow-up appointments to monitor my blood counts", "the client's hemoglobin and hematocrit rise toward the target range"],
  ["a client requiring naloxone for an opioid overdose", "a respiratory rate of 4 breaths/min and unresponsiveness", "administer naloxone and reassess respiratory status frequently, since it may wear off before the opioid", "family will be taught to give naloxone and call emergency services for an overdose", "the client's respiratory rate and level of consciousness improve"],
];

const MEDSURG: Item[] = [
  ["a client with an acute myocardial infarction", "crushing chest pain radiating to the jaw with diaphoresis", "obtain a 12-lead ECG and give oxygen, aspirin, and nitroglycerin as ordered", "I will call 911 immediately if chest pain returns after discharge", "the client's chest pain resolves and ECG changes improve"],
  ["a client with heart failure", "a 3 lb weight gain overnight with worsening shortness of breath", "weigh the client daily at the same time and assess lung sounds", "I will weigh myself daily and call if I gain more than 2-3 lbs in a day", "the client's weight stabilizes and breath sounds are clear"],
  ["a client with a COPD exacerbation", "an oxygen saturation of 88% with pursed-lip breathing", "administer oxygen at a low flow rate to avoid suppressing the hypoxic drive", "I will use pursed-lip breathing to help move air out of my lungs", "the client's oxygen saturation improves and work of breathing decreases"],
  ["a client with an asthma exacerbation", "absent breath sounds and inability to speak in full sentences", "administer a rapid-acting bronchodilator and reassess breath sounds", "I will use my peak flow meter daily to monitor my breathing", "the client's wheezing decreases and peak flow improves"],
  ["a client with pneumonia", "a temperature of 103°F with crackles and decreased oxygen saturation", "obtain blood cultures before starting the prescribed antibiotic", "I will finish the entire course of antibiotics even if I feel better", "the client's temperature normalizes and breath sounds clear"],
  ["a client in diabetic ketoacidosis", "fruity breath odor, Kussmaul respirations, and a blood glucose of 480 mg/dL", "start an IV insulin infusion and monitor potassium levels closely", "I will check my blood glucose and ketones when I am sick", "the client's blood glucose, pH, and ketones return toward normal"],
  ["a client with an acute ischemic stroke", "sudden facial droop, slurred speech, and arm weakness", "determine the time of symptom onset and notify the provider immediately", "family will call 911 immediately if these symptoms occur again", "the client's neurologic deficits improve or stabilize"],
  ["a client with a seizure disorder", "a tonic-clonic seizure lasting longer than 5 minutes", "protect the client's airway and turn them to the side during the seizure", "I will take my anti-seizure medication at the same time every day", "the client's seizure frequency decreases with a therapeutic drug level"],
  ["a client with an upper gastrointestinal bleed", "coffee-ground emesis with a drop in blood pressure", "start two large-bore IVs and prepare for a possible blood transfusion", "I will avoid NSAIDs and alcohol to protect my stomach lining", "the client's hemoglobin stabilizes and bleeding stops"],
  ["a client with acute pancreatitis", "severe epigastric pain radiating to the back with an elevated lipase", "keep the client NPO and manage pain as prescribed", "I will avoid alcohol to reduce the risk of future flare-ups", "the client's abdominal pain decreases and lipase trends downward"],
  ["a client with cirrhosis", "confusion, asterixis, and a rising ammonia level", "administer lactulose as prescribed and monitor mental status", "I will avoid alcohol and take lactulose to prevent confusion", "the client's ammonia level decreases and mental status improves"],
  ["a client with suspected appendicitis", "sudden relief of pain followed by a rigid, board-like abdomen", "keep the client NPO and notify the provider of worsening or sudden relief of pain", "I will avoid using heat on my abdomen before surgery", "the client's abdominal pain resolves after appendectomy without signs of infection"],
  ["a client with a bowel obstruction", "absent bowel sounds with a distended, tympanic abdomen and bilious vomiting", "insert or maintain an NG tube to decompress the stomach", "I will report if I stop passing gas or having bowel movements", "the client passes flatus and stool with a soft abdomen"],
  ["a client with chronic kidney disease", "a potassium level of 6.2 mEq/L with peaked T waves", "restrict dietary potassium and monitor cardiac rhythm", "I will limit high-potassium foods such as bananas and potatoes", "the client's potassium and creatinine remain within target limits"],
  ["a client with acute kidney injury", "urine output less than 30 mL/hr for two consecutive hours", "monitor strict intake and output and daily weights", "I will keep track of how much fluid I drink and urinate", "the client's urine output and renal function improve"],
  ["a client with sepsis", "a temperature of 102.9°F, heart rate 128, and blood pressure 82/50", "obtain blood cultures and start broad-spectrum antibiotics within one hour", "family will report any signs of infection returning promptly", "the client's vital signs stabilize and lactate level decreases"],
  ["a client with a deep vein thrombosis or pulmonary embolism", "sudden shortness of breath, chest pain, and a drop in oxygen saturation", "elevate the head of the bed, apply oxygen, and notify the provider immediately", "I will take my anticoagulant exactly as prescribed and watch for bleeding", "the client's oxygen saturation improves and chest pain resolves"],
  ["a client with a hip fracture", "shortening and external rotation of the affected leg", "immobilize the leg and manage pain before and after surgery", "I will not bear weight on my hip until cleared by the surgeon", "the client ambulates safely with assistance after surgical repair"],
  ["a client with a traumatic brain injury", "a widening pulse pressure, bradycardia, and irregular respirations", "elevate the head of the bed and notify the provider of signs of increased ICP", "family will watch for worsening confusion or vomiting and seek care immediately", "the client's level of consciousness and neurologic status improve"],
  ["a client with a spinal cord injury and autonomic dysreflexia", "a pounding headache, severe hypertension, and bradycardia after a full bladder", "sit the client upright and check for a distended bladder or fecal impaction", "I will empty my bladder on a regular schedule to prevent this reaction", "the client's blood pressure returns to baseline once the trigger is removed"],
  ["a client in thyroid storm", "a temperature of 105°F, heart rate of 160, and severe agitation", "administer antithyroid medications and a beta-blocker as prescribed and cool the client", "I will take my thyroid medication consistently and avoid abruptly stopping it", "the client's temperature and heart rate return toward normal"],
  ["a client in an Addisonian crisis", "severe hypotension, weakness, and a blood glucose of 58 mg/dL", "administer IV hydrocortisone and fluids as prescribed immediately", "I will never stop my steroid medication abruptly, even when I feel well", "the client's blood pressure and glucose stabilize"],
  ["a client with severe anemia", "a hemoglobin of 6.2 g/dL with fatigue and tachycardia", "administer oxygen and prepare for a possible blood transfusion", "I will eat iron-rich foods such as leafy greens and lean meats", "the client's hemoglobin rises and energy level improves"],
  ["a client in a sickle cell crisis", "severe bone pain with a temperature of 101.5°F", "administer IV fluids and scheduled opioid analgesics for pain control", "I will drink plenty of fluids and avoid extreme temperatures to prevent crises", "the client's pain decreases and mobility improves"],
  ["a client with neutropenia during chemotherapy", "a temperature of 100.6°F with an absolute neutrophil count of 400", "place the client on neutropenic precautions and notify the provider of any fever", "I will avoid crowds and people who are sick while my counts are low", "the client remains free of infection until neutrophil counts recover"],
  ["a client with a major burn injury", "circumferential burns to the chest with increasing difficulty breathing", "assess airway and breathing first and prepare for possible escharotomy", "I will keep the burn area clean and attend follow-up wound checks", "the wound shows signs of healing without infection"],
  ["a client with peripheral artery disease", "a cool, pale leg with absent pedal pulses and pain when walking", "encourage a supervised walking program and avoid elevating the legs above heart level", "I will inspect my feet daily for cuts or sores", "the client walks longer distances with less claudication pain"],
  ["a client with cardiac tamponade", "muffled heart sounds, jugular vein distention, and hypotension", "notify the provider immediately and prepare for emergency pericardiocentesis", "family will understand this is an emergency requiring immediate treatment", "the client's blood pressure stabilizes and heart sounds normalize"],
  ["a client with increased intracranial pressure", "a decreasing level of consciousness and a dilated, nonreactive pupil", "elevate the head of the bed 30 degrees and keep the neck in neutral alignment", "family will report any new confusion or vomiting immediately", "the client's intracranial pressure decreases and neurologic status improves"],
  ["a client with suspected compartment syndrome", "severe pain unrelieved by medication with a pale, pulseless extremity distal to a cast", "notify the provider immediately and prepare to loosen or remove the cast", "I will report increasing pain or numbness in my casted limb right away", "the client's pain resolves and circulation to the limb is restored"],
];

const MATERNAL: Item[] = [
  ["a client with preeclampsia", "a blood pressure of 168/112 mmHg with a severe headache and visual changes", "administer magnesium sulfate as prescribed and monitor for signs of toxicity", "I will report headaches, visual changes, or swelling right away", "the client's blood pressure decreases and no seizure activity occurs"],
  ["a client with gestational diabetes", "a fasting blood glucose of 160 mg/dL", "teach the client to monitor blood glucose and follow a diabetic diet", "I will check my blood sugar as instructed and follow my meal plan", "the client's blood glucose remains within target range throughout pregnancy"],
  ["a client with placenta previa", "painless, bright red vaginal bleeding in the third trimester", "avoid vaginal exams and prepare for possible cesarean birth", "I will avoid intercourse and report any bleeding immediately", "bleeding stops or is controlled and the fetus remains stable"],
  ["a client with abruptio placentae", "sudden, severe abdominal pain with a rigid, board-like uterus and dark red bleeding", "prepare for emergency cesarean birth and monitor fetal heart rate continuously", "family will call 911 immediately if severe abdominal pain and bleeding occur", "the fetal heart rate remains reassuring and bleeding is controlled"],
  ["a client with a suspected ectopic pregnancy", "sharp unilateral pelvic pain with referred shoulder pain and hypotension", "prepare the client for emergency surgery and monitor for signs of shock", "I will seek care immediately for severe pelvic pain in early pregnancy", "the client's vital signs stabilize after treatment"],
  ["a client with hyperemesis gravidarum", "ketones in the urine with a 5% weight loss and poor skin turgor", "administer IV fluids and antiemetics as prescribed", "I will eat small, frequent, bland meals and stay hydrated", "the client tolerates oral intake without persistent vomiting"],
  ["a client in preterm labor", "regular contractions with cervical change before 37 weeks gestation", "administer tocolytics and corticosteroids for fetal lung maturity as prescribed", "I will rest and stay hydrated, and report any regular contractions", "contractions decrease and preterm birth is delayed"],
  ["a postpartum client with hemorrhage", "a boggy uterus with steady, bright red bleeding soaking a pad in 15 minutes", "massage the fundus firmly and notify the provider immediately", "I will report heavy bleeding or large clots after delivery", "the fundus becomes firm and bleeding decreases to a normal amount"],
  ["a postpartum client with endometritis", "a temperature of 101.8°F with foul-smelling lochia and uterine tenderness", "obtain cultures and administer prescribed IV antibiotics", "I will report fever, foul odor, or increased pain right away", "the client's temperature normalizes and lochia returns to a normal odor"],
  ["a postpartum client with a deep vein thrombosis", "unilateral leg swelling, warmth, and tenderness after delivery", "elevate the leg, avoid massaging it, and notify the provider", "I will walk frequently and avoid sitting for long periods after delivery", "leg swelling and pain resolve without complication"],
  ["a newborn with hypoglycemia", "a newborn blood glucose of 32 mg/dL with jitteriness", "initiate early feeding and recheck the glucose per protocol", "parents will feed the newborn frequently, especially in the first hours of life", "the newborn's blood glucose stabilizes within the normal range"],
  ["a newborn with jaundice", "yellowing of the skin and sclera within the first 24 hours of life", "initiate phototherapy as prescribed and monitor bilirubin levels", "parents will keep the newborn's skin exposed during phototherapy except the eyes and genitals", "the newborn's bilirubin level decreases toward normal"],
  ["a newborn with respiratory distress", "grunting, nasal flaring, and retractions shortly after birth", "provide respiratory support and notify the provider immediately", "parents will learn infant CPR before discharge", "the newborn's respiratory rate and effort normalize"],
  ["a client with umbilical cord prolapse", "a visible or palpable cord with variable fetal heart rate decelerations", "relieve pressure on the cord by repositioning the client and prepare for emergency cesarean", "family will understand this is an obstetric emergency", "the fetal heart rate improves and the cord is decompressed"],
  ["a postpartum client who is breastfeeding", "a poor latch with cracked, bleeding nipples", "assist the client with proper positioning and latch technique", "I will make sure my baby's mouth covers most of the areola, not just the nipple", "the client breastfeeds comfortably and the newborn feeds effectively"],
  ["a laboring client who received epidural anesthesia", "a maternal blood pressure of 78/44 mmHg after epidural placement", "position the client on her side and administer a fluid bolus as prescribed", "I will stay in bed and call for help before getting up", "the client's blood pressure stabilizes and adequate pain relief is achieved"],
  ["a client recovering from a cesarean section", "increasing abdominal pain with a rigid abdomen and a rising temperature", "assess the incision, vital signs, and fundus regularly after surgery", "I will support my incision with a pillow when coughing or moving", "the incision heals without signs of infection or dehiscence"],
  ["an Rh-negative client during pregnancy", "a positive indirect Coombs test in an Rh-negative mother", "administer Rho(D) immune globulin as prescribed", "I will receive RhoGAM at 28 weeks and after delivery if indicated", "the newborn shows no signs of hemolytic disease"],
  ["a laboring client who is group B strep positive", "labor beginning without antibiotics started for a GBS-positive client", "administer IV antibiotics as soon as labor begins or membranes rupture", "I will inform my care team of my GBS status when labor starts", "the newborn shows no signs of early-onset GBS infection"],
  ["a fetus with late decelerations on the monitor", "a gradual decrease in fetal heart rate after the peak of a contraction", "reposition the client to the side, give oxygen, and stop oxytocin if infusing", "family will understand this pattern requires reducing uterine activity", "the fetal heart rate pattern returns to a reassuring baseline"],
  ["a client experiencing precipitous labor", "a rapid labor lasting less than 3 hours with intense contractions", "stay with the client continuously and prepare for imminent delivery", "I will come to the hospital early in future pregnancies given my history", "the newborn is delivered safely with adequate support"],
  ["a postpartum client with uterine atony", "a soft, boggy fundus that does not firm with massage", "massage the fundus and administer uterotonic medications as prescribed", "I will report any feeling of heavy bleeding or passing large clots", "the fundus becomes firm and bleeding is controlled"],
  ["a postpartum client with depression", "persistent sadness, difficulty bonding, and thoughts of self-harm weeks after delivery", "screen for postpartum depression and refer for mental health evaluation", "family will seek help immediately if thoughts of harming self or baby occur", "the client's mood improves with treatment and support"],
  ["a newborn requiring thermoregulation", "a newborn axillary temperature of 96.5°F shortly after birth", "dry the newborn immediately and place skin-to-skin or under a warmer", "parents will dress the newborn in layers and avoid overheating", "the newborn's temperature stabilizes within the normal range"],
  ["a newborn after circumcision", "bright red bleeding from the circumcision site", "apply gentle pressure and petroleum gauze to the site", "parents will apply petroleum jelly with each diaper change until healed", "the site heals without bleeding or signs of infection"],
  ["a client with a twin pregnancy", "fundal height significantly greater than expected with excessive fetal movement", "monitor closely for preterm labor and increased risk of preeclampsia", "I will attend more frequent prenatal visits due to my twin pregnancy", "both fetuses show reassuring growth and heart rate patterns"],
  ["a client with an amniotic fluid embolism", "sudden respiratory distress, hypotension, and cardiac arrest during labor", "call for emergency assistance and begin resuscitation immediately", "family will understand this is a rare, life-threatening emergency", "the client's cardiopulmonary status stabilizes with immediate intervention"],
  ["a client with chorioamnionitis", "maternal fever, fetal tachycardia, and foul-smelling amniotic fluid", "obtain cultures and begin broad-spectrum antibiotics as prescribed", "I will report fever or foul-smelling fluid after my water breaks", "maternal temperature and fetal heart rate return to normal"],
  ["a client with cervical insufficiency", "painless cervical dilation in the second trimester", "prepare the client for cervical cerclage placement as prescribed", "I will limit activity and attend follow-up cervical length checks", "the pregnancy continues without preterm cervical dilation"],
  ["a newborn showing feeding cues", "a newborn who is crying and difficult to console before feeding", "teach parents to recognize early feeding cues such as rooting and hand-to-mouth movements", "parents will feed at the first sign of hunger rather than waiting for crying", "the newborn feeds calmly and gains weight appropriately"],
];

const PEDIATRICS: Item[] = [
  ["an infant with bronchiolitis (RSV)", "nasal flaring, retractions, and an oxygen saturation of 89%", "provide nasal suctioning and humidified oxygen as needed", "family will wash hands frequently to prevent the spread of RSV", "the infant's respiratory effort and oxygen saturation improve"],
  ["a child with croup", "a barking cough with inspiratory stridor at rest", "provide cool mist or humidified air and monitor respiratory status", "family will take the child into cool night air or a steamy bathroom if stridor occurs", "the child's stridor resolves and breathing becomes easier"],
  ["a child with suspected epiglottitis", "drooling, high fever, and tripod positioning with stridor", "avoid examining the throat and prepare for emergency airway management", "family will understand this is a medical emergency requiring immediate care", "the child's airway remains patent after treatment"],
  ["a child with an asthma exacerbation", "use of accessory muscles and inability to complete sentences", "administer a rapid-acting bronchodilator and reassess breathing", "family will help the child avoid known asthma triggers", "the child's wheezing and respiratory distress decrease"],
  ["a child having a febrile seizure", "a generalized seizure lasting 2 minutes with a temperature of 104°F", "protect the child from injury and turn them to the side during the seizure", "family will treat fevers promptly but understand this does not always prevent seizures", "the child returns to baseline neurologic status after the seizure"],
  ["a child with otitis media", "ear pulling, fever, and a bulging tympanic membrane", "administer prescribed antibiotics and analgesics as ordered", "family will complete the full course of antibiotics even if symptoms improve", "the child's ear pain and fever resolve"],
  ["an infant with pyloric stenosis", "projectile, nonbilious vomiting after feeding with a palpable olive-shaped mass", "keep the infant NPO and prepare for surgical correction", "family will feed the infant slowly and burp frequently after surgery", "the infant tolerates feedings without projectile vomiting after surgery"],
  ["a child with intussusception", "currant jelly stools with episodic, severe abdominal pain and a sausage-shaped mass", "prepare the child for an air or contrast enema, which may be therapeutic", "family will seek care immediately if the same symptoms recur", "the child passes normal stools and abdominal pain resolves"],
  ["a child with suspected appendicitis", "sudden relief of abdominal pain followed by a rigid abdomen and fever", "keep the child NPO and notify the provider of worsening symptoms", "family will avoid giving laxatives or enemas for abdominal pain", "the child's abdominal pain resolves after appendectomy"],
  ["an infant with tetralogy of Fallot", "a sudden cyanotic spell with the child squatting", "place the child in a knee-to-chest position and administer oxygen", "family will recognize and respond to hypercyanotic spells using the knee-to-chest position", "the child's oxygen saturation improves and cyanosis decreases"],
  ["a child with Kawasaki disease", "a fever lasting more than 5 days with red, cracked lips and swollen hands", "administer IV immunoglobulin and high-dose aspirin as prescribed", "family will monitor for peeling skin on the fingers and toes during recovery", "the child's fever resolves and inflammatory markers decrease"],
  ["a child with new-onset type 1 diabetes", "polyuria, polydipsia, and a blood glucose of 350 mg/dL with weight loss", "teach the family blood glucose monitoring and insulin administration", "family will rotate injection sites and recognize signs of hypoglycemia", "the child's blood glucose remains within the target range"],
  ["a child with celiac disease", "chronic diarrhea, abdominal distention, and failure to gain weight", "teach the family to eliminate gluten from the child's diet", "family will read food labels carefully to avoid hidden sources of gluten", "the child's growth and stool pattern normalize on a gluten-free diet"],
  ["a child with cystic fibrosis", "greasy, foul-smelling stools and a chronic productive cough", "perform chest physiotherapy and administer pancreatic enzymes with meals", "family will give pancreatic enzymes with every meal and snack", "the child gains weight appropriately with fewer respiratory infections"],
  ["a child with sickle cell disease in vaso-occlusive crisis", "severe joint pain with a low-grade fever during the crisis", "administer IV fluids and scheduled analgesics during the crisis", "family will ensure the child stays hydrated and avoids extreme temperatures", "the child's pain decreases and mobility returns"],
  ["a child with leukemia", "unusual bruising, pallor, and recurrent infections", "protect the child from infection and monitor blood counts closely", "family will avoid crowds and sick contacts during chemotherapy", "the child's blood counts improve and disease markers decrease"],
  ["a child with suspected meningitis", "a stiff neck, high fever, and a petechial rash", "initiate droplet precautions and administer antibiotics promptly", "family will ensure close contacts receive prophylactic antibiotics if indicated", "the child's fever resolves and neurologic status returns to baseline"],
  ["a child with nephrotic syndrome", "periorbital edema and 4+ protein in the urine", "monitor daily weights and urine protein and give corticosteroids as prescribed", "family will test the child's urine for protein and track weight daily", "the child's edema decreases and proteinuria improves"],
  ["an infant with dehydration", "a sunken fontanel, dry mucous membranes, and no tears when crying", "initiate oral or IV rehydration as prescribed and monitor intake and output", "family will offer oral rehydration solution in small, frequent amounts", "the infant's hydration status improves with moist mucous membranes and adequate urine output"],
  ["a child with failure to thrive", "a weight consistently below the 5th percentile for age", "assess feeding patterns and the caregiver-child interaction during feeding", "family will follow a structured feeding schedule and attend follow-up weight checks", "the child demonstrates steady, appropriate weight gain over time"],
  ["a child with suspected abuse", "bruises in various stages of healing in a non-mobile infant", "document objectively and report the concern to child protective services", "family will be educated about safe, age-appropriate discipline", "the child is protected and receives appropriate follow-up services"],
  ["a child with autism spectrum disorder", "a child who becomes distressed with changes in routine and avoids eye contact", "maintain consistent routines and use clear, simple communication", "family will use visual schedules to help the child anticipate changes", "the child demonstrates decreased distress and improved coping with routine changes"],
  ["a child with ADHD", "difficulty sustaining attention and impulsivity affecting school performance", "collaborate with the family and school on a structured behavior plan", "family will give clear, one-step directions and consistent routines", "the child's attention and impulse control improve with treatment"],
  ["a child with lead poisoning", "a blood lead level of 48 mcg/dL with abdominal pain and irritability", "remove the child from the source of lead exposure and initiate chelation therapy if ordered", "family will have the home tested for lead paint hazards", "the child's blood lead level decreases over time"],
  ["a child due for scheduled immunizations", "a caregiver unsure which vaccines are due at a well-child visit", "review the recommended immunization schedule and administer due vaccines", "family will bring the immunization record to every well-child visit", "the child remains up to date on recommended immunizations"],
  ["an infant with developmental hip dysplasia", "asymmetric skin folds and limited hip abduction", "apply and maintain the Pavlik harness as prescribed", "family will keep the harness on as instructed except for diaper changes if allowed", "the infant's hip joint stabilizes with appropriate positioning"],
  ["an infant with a cleft lip and palate", "difficulty latching and milk coming out of the nose during feeding", "use specialized feeding techniques and equipment for infants with a cleft palate", "family will feed the infant in an upright position with frequent burping", "the infant feeds effectively and gains weight appropriately"],
  ["a child with a foreign body airway obstruction", "sudden onset of coughing, gagging, and stridor while eating", "perform back blows and chest thrusts for an infant with a complete airway obstruction", "family will cut food into small pieces and avoid choking hazards", "the airway is cleared and normal breathing resumes"],
  ["a child at risk for anaphylaxis", "facial swelling, hives, and difficulty breathing after a food exposure", "administer the epinephrine autoinjector into the outer thigh immediately", "family will carry two epinephrine autoinjectors at all times", "the child's symptoms of anaphylaxis resolve after treatment"],
  ["a toddler with a feeding/nutrition concern", "a toddler who refuses most foods and drinks large amounts of milk", "limit milk intake and offer a variety of foods without pressure", "family will offer new foods multiple times without forcing the toddler to eat", "the toddler accepts a wider variety of foods and grows appropriately"],
];

const MENTALHEALTH: Item[] = [
  ["a client with major depressive disorder", "a client who gives away belongings and states things will be better soon", "directly ask the client about thoughts of suicide and ensure safety", "family will remove firearms and medications from the home if risk is present", "the client reports improved mood and engages in daily activities"],
  ["a client with suicidal ideation", "a client with a specific plan and access to lethal means", "implement one-to-one observation and remove harmful objects immediately", "I will call the crisis line or go to the emergency department if thoughts return", "the client remains safe and verbalizes no current plan to self-harm"],
  ["a client in an acute manic episode", "pressured speech, grandiosity, and no sleep for three days", "provide a low-stimulation environment and set clear, simple limits", "I will take my mood stabilizer consistently, even when I feel well", "the client's speech and activity level return to a calmer baseline"],
  ["a client with psychosis", "the client responds to voices that others cannot hear", "avoid arguing about the hallucination and focus on the client's feelings", "I will take my antipsychotic medication daily, even if I feel well", "the client's hallucinations decrease and reality testing improves"],
  ["a client with generalized anxiety disorder", "excessive worry, muscle tension, and difficulty concentrating most days", "teach relaxation and deep-breathing techniques to reduce anxiety", "I will practice relaxation techniques daily, not just during anxious moments", "the client reports decreased worry and improved daily functioning"],
  ["a client having a panic attack", "a client hyperventilating with chest tightness and a fear of dying", "stay with the client and use a calm, low-stimulation approach with slow breathing", "I will practice breathing techniques at the first sign of a panic attack", "the client's panic symptoms subside within a short period"],
  ["a client with post-traumatic stress disorder", "recurrent flashbacks and avoidance of crowds", "provide a safe, predictable environment and avoid startling the client", "I will use grounding techniques when flashbacks occur", "the client experiences fewer flashbacks and improved coping"],
  ["a client with obsessive-compulsive disorder", "a client who washes hands until they bleed despite knowing it is excessive", "allow time for rituals initially while gradually working toward reducing them in therapy", "I will practice response prevention techniques taught in therapy", "the client spends less time performing compulsive rituals"],
  ["a client with borderline personality disorder", "a client who idealizes then suddenly devalues the same staff member", "maintain consistent, clear boundaries among all staff members", "I will use my new coping skills instead of self-harm when I feel distressed", "the client demonstrates improved emotional regulation and fewer crises"],
  ["a client with anorexia nervosa", "a body mass index of 15 with amenorrhea and bradycardia", "monitor vital signs and electrolytes closely, especially during refeeding", "I will follow my structured meal plan even when I feel anxious about eating", "the client's weight stabilizes within a safe range"],
  ["a client with bulimia nervosa", "dental erosion, calluses on the knuckles, and a low potassium level", "monitor electrolytes and supervise the client during and after meals", "I will use coping strategies other than binge eating or purging", "the client's binge-purge episodes decrease in frequency"],
  ["a client in alcohol withdrawal", "tremors, tachycardia, and visual hallucinations 48 hours after the last drink", "administer benzodiazepines per protocol and monitor for seizures", "I will follow up with a substance use treatment program after discharge", "the client's withdrawal symptoms are controlled without seizures"],
  ["a client in opioid withdrawal", "severe muscle aches, diarrhea, and dilated pupils with drug cravings", "administer prescribed medications to manage withdrawal symptoms and monitor vital signs", "I will engage in a medication-assisted treatment program to support recovery", "the client's withdrawal symptoms are managed and cravings decrease"],
  ["a client with a substance use disorder", "a client who minimizes the impact of substance use on their life", "use a nonjudgmental, motivational interviewing approach", "I will attend support group meetings regularly as part of my recovery plan", "the client acknowledges the problem and engages in treatment"],
  ["a client experiencing domestic violence", "injuries inconsistent with the client's explanation and a hesitant demeanor", "interview the client privately and provide resources for a safety plan", "I will keep an emergency bag and know a safe place to go if needed", "the client develops and understands a personal safety plan"],
  ["a client experiencing grief and bereavement", "intense mourning with functional impairment beyond a year", "provide a supportive presence and refer for grief counseling if prolonged", "I will allow myself to grieve at my own pace and seek support when needed", "the client demonstrates progression through the grieving process"],
  ["a client with delirium", "acute confusion with fluctuating attention that developed over hours", "identify and treat the underlying cause and reorient the client frequently", "family will bring familiar objects to help reorient their loved one", "the client's mental status returns to baseline once the cause is treated"],
  ["a client with dementia", "progressive memory loss and getting lost in familiar places", "maintain a consistent routine and a safe, structured environment", "family will use simple, one-step instructions and avoid arguing about false beliefs", "the client maintains the highest possible level of function and safety"],
  ["a client with somatic symptom disorder", "persistent physical complaints with normal diagnostic workups causing significant distress", "acknowledge the client's symptoms as real while limiting unnecessary testing", "I will attend scheduled follow-up visits rather than seeking care only during crises", "the client reports improved coping despite ongoing physical symptoms"],
  ["a client with a dissociative disorder", "a client who reports lost time and cannot recall recent events", "provide a safe, calm environment and use grounding techniques", "I will use grounding techniques when I feel like I am dissociating", "the client experiences fewer dissociative episodes over time"],
  ["a client during a therapeutic communication interaction", "a client who becomes defensive when given unsolicited advice", "use open-ended questions and reflection rather than giving advice", "I feel more comfortable sharing my feelings when I am not judged", "the client engages more openly in therapeutic conversation"],
  ["a client requiring involuntary commitment", "a client who is an imminent danger to self but refuses voluntary treatment", "follow facility and legal protocols to initiate an involuntary hold", "family will understand the legal process and the client's rights during commitment", "the client remains safe while receiving needed psychiatric treatment"],
  ["a client requiring restraint or seclusion", "a client who remains combative and unsafe despite verbal de-escalation attempts", "use the least restrictive intervention necessary and reassess frequently", "I understand restraints will be removed as soon as I am safe", "the client returns to a calmer state without injury"],
  ["a client receiving electroconvulsive therapy", "short-term memory loss and confusion immediately after a session", "keep the client NPO before the procedure and monitor closely afterward", "I understand some memory loss around the treatment period is expected and usually temporary", "the client's depressive symptoms improve after a course of treatment"],
  ["a client with antisocial personality disorder", "a client who repeatedly manipulates staff and shows no remorse for harming others", "maintain firm, consistent limits and avoid power struggles", "I will follow the unit rules like everyone else", "the client demonstrates decreased manipulative behavior with consistent limit-setting"],
  ["a child with conduct disorder", "a child who is cruel to animals and frequently violates rules", "provide consistent structure and consequences with the family and school", "family will maintain consistent rules and consequences across all settings", "the child demonstrates decreased aggressive or rule-breaking behavior"],
  ["a postpartum client with psychosis", "delusions and thoughts of harming her infant", "ensure the infant's safety and initiate immediate psychiatric evaluation", "family will not leave the mother alone with the infant until she is stabilized", "the client's psychotic symptoms resolve with treatment"],
  ["a client with an adjustment disorder", "new, excessive distress following a recent job loss", "provide supportive counseling and coping strategies for the stressor", "I will use healthy coping strategies instead of avoiding the problem", "the client's distress decreases and coping improves over time"],
  ["a client with catatonia", "a client who is mute, rigid, and holds unusual postures for long periods", "ensure adequate nutrition, hydration, and skin care while notifying the provider", "family will understand this condition often responds well to treatment", "the client's movement and responsiveness improve with treatment"],
  ["a client with nicotine dependence", "irritability and strong cravings after quitting smoking", "offer nicotine replacement therapy and behavioral support as prescribed", "I will use nicotine replacement therapy and avoid triggers to prevent relapse", "the client's cravings decrease and the client remains smoke-free"],
];

const FLUIDELECTROLYTE: Item[] = [
  ["a client with hyponatremia", "a sodium level of 118 mEq/L with confusion and a seizure", "restrict free water and correct the sodium level slowly", "I will limit excessive water intake as instructed", "the client's sodium level rises gradually and neurologic status improves"],
  ["a client with hypernatremia", "a sodium level of 158 mEq/L with extreme thirst and dry mucous membranes", "administer hypotonic fluids slowly to avoid rapid correction", "I will drink adequate fluids and avoid excessive salty foods", "the client's sodium level decreases gradually toward normal"],
  ["a client with hypokalemia", "a potassium level of 2.8 mEq/L with muscle weakness and flat T waves", "monitor cardiac rhythm and replace potassium as prescribed", "I will eat potassium-rich foods such as bananas and oranges", "the client's potassium level rises to within normal limits"],
  ["a client with hyperkalemia", "a potassium level of 6.8 mEq/L with peaked T waves on the ECG", "administer calcium gluconate to stabilize the cardiac membrane as prescribed", "I will avoid salt substitutes, which are often high in potassium", "the client's potassium level and ECG return to normal"],
  ["a client with hypocalcemia", "positive Trousseau's and Chvostek's signs with perioral tingling", "keep the client on seizure precautions and administer calcium as prescribed", "I will eat calcium-rich foods such as dairy products and leafy greens", "the client's calcium level rises and neuromuscular irritability resolves"],
  ["a client with hypercalcemia", "a calcium level of 13 mg/dL with confusion and constipation", "encourage fluids and mobility and monitor cardiac rhythm", "I will stay well hydrated and as active as possible", "the client's calcium level decreases toward normal"],
  ["a client with hypomagnesemia", "hyperactive deep tendon reflexes and a positive Chvostek's sign", "administer magnesium replacement and monitor cardiac rhythm", "I will eat magnesium-rich foods such as nuts, seeds, and whole grains", "the client's magnesium level rises to within normal limits"],
  ["a client with hypermagnesemia", "absent deep tendon reflexes and a respiratory rate of 8 breaths/min", "hold further magnesium doses and prepare to give calcium gluconate", "I will report muscle weakness or difficulty breathing during magnesium therapy", "the client's magnesium level decreases and reflexes return"],
  ["a client with fluid volume deficit", "poor skin turgor, dry mucous membranes, and a heart rate of 120 beats/min", "administer isotonic IV fluids as prescribed and monitor vital signs", "I will increase my fluid intake, especially during illness or hot weather", "the client's vital signs and hydration status normalize"],
  ["a client with fluid volume excess", "crackles in the lungs, jugular vein distention, and a 5 lb weight gain", "restrict fluids and sodium as prescribed and monitor daily weights", "I will limit my sodium intake and weigh myself daily", "the client's weight decreases and lung sounds clear"],
  ["a client with metabolic acidosis", "an arterial pH of 7.28 with a low bicarbonate level", "treat the underlying cause and monitor for respiratory compensation", "I will manage my underlying condition, such as diabetes, as prescribed", "the client's pH and bicarbonate level return toward normal"],
  ["a client with metabolic alkalosis", "an arterial pH of 7.52 after prolonged vomiting", "replace fluid and electrolyte losses, especially chloride and potassium", "I will take antiemetics as prescribed to prevent prolonged vomiting", "the client's pH and bicarbonate level return toward normal"],
  ["a client with respiratory acidosis", "an arterial pH of 7.26 with a PaCO2 of 62 mmHg", "encourage coughing, deep breathing, and position the client to maximize ventilation", "I will use my inhalers as prescribed to keep my airways open", "the client's PaCO2 decreases and pH returns toward normal"],
  ["a client with respiratory alkalosis", "an arterial pH of 7.52 with a PaCO2 of 28 mmHg from hyperventilation", "coach the client to slow their breathing rate and address the underlying anxiety", "I will use slow breathing techniques when I feel anxious", "the client's respiratory rate and pH return to normal"],
  ["a client with hypophosphatemia", "muscle weakness and confusion in a client recovering from alcohol use disorder", "monitor phosphate levels closely, especially during refeeding", "I will eat phosphate-rich foods such as dairy and meat", "the client's phosphate level rises toward normal"],
  ["a client with hyperphosphatemia", "a phosphate level of 6.2 mg/dL with muscle cramps and kidney disease", "administer phosphate binders with meals as prescribed", "I will take my phosphate binder with food, not on an empty stomach", "the client's phosphate level decreases toward normal"],
  ["a client with SIADH", "a sodium level of 122 mEq/L with concentrated urine and normal blood pressure", "restrict fluid intake and monitor sodium levels closely", "I will limit my fluid intake as instructed by my provider", "the client's sodium level rises and urine output normalizes"],
  ["a client with diabetes insipidus", "urine output of 300 mL/hr with dilute urine and extreme thirst", "monitor intake, output, and serum sodium and give desmopressin as prescribed", "I will take my desmopressin as scheduled and monitor my fluid balance", "the client's urine output decreases and sodium level normalizes"],
  ["a client with third spacing of fluid", "ascites with intravascular volume depletion despite total body fluid excess", "monitor intravascular volume status closely, not just total body weight", "I will report decreased urine output even if I have visible swelling", "fluid shifts back into the intravascular space as the underlying cause resolves"],
  ["a client at risk for refeeding syndrome", "a rapid drop in phosphate, potassium, and magnesium after starting nutrition", "start nutritional support slowly and monitor electrolytes closely", "I will follow the gradual feeding plan even though I want to eat more", "the client's electrolytes remain stable throughout nutritional replenishment"],
  ["a client receiving total parenteral nutrition", "a blood glucose of 260 mg/dL during the infusion", "monitor blood glucose regularly and never stop the infusion abruptly", "I understand my infusion rate must be adjusted gradually", "the client's blood glucose and electrolytes remain within target range"],
  ["a client receiving a rapid IV infusion", "sudden shortness of breath and crackles during the infusion", "slow the infusion rate immediately and notify the provider", "I will report any sudden shortness of breath during my IV infusion", "the client's respiratory status returns to baseline"],
  ["an older adult with dehydration", "confusion, hypotension, and dry oral mucosa after eating poorly", "encourage frequent small amounts of fluid and monitor for orthostatic changes", "family will offer fluids regularly throughout the day, not just at meals", "the client's hydration status and mental clarity improve"],
  ["a client with tumor lysis syndrome", "hyperkalemia, hyperphosphatemia, and hyperuricemia after starting chemotherapy", "administer IV fluids and allopurinol as prescribed before and during treatment", "I will drink extra fluids as instructed before my chemotherapy treatment", "the client's electrolyte levels remain within safe limits during treatment"],
  ["a client with a major burn and fluid shifts", "a drop in blood pressure and urine output in the first 24 hours", "administer fluid resuscitation per the prescribed burn formula", "family will understand large fluid shifts are expected after a major burn", "the client's urine output and blood pressure stabilize with fluid resuscitation"],
  ["a client with fluid loss from vomiting and diarrhea", "poor skin turgor and a potassium level of 3.0 mEq/L after several days", "replace fluids and electrolytes and monitor for worsening dehydration", "I will drink an oral rehydration solution rather than plain water alone", "the client's hydration and electrolyte levels return to normal"],
  ["a client with continuous NG tube suction", "a chloride level of 88 mEq/L during prolonged suctioning", "monitor electrolytes closely and replace losses as prescribed", "I will report increased NG output so my fluids can be adjusted", "the client's electrolyte levels remain stable while on NG suction"],
  ["a client with excessive diaphoresis", "profuse sweating with muscle cramps during strenuous outdoor activity", "move the client to a cool area and replace fluids and electrolytes", "I will hydrate with electrolyte-containing fluids during prolonged exercise in heat", "the client's symptoms resolve with rehydration and cooling"],
  ["a client with renal failure and electrolyte imbalance", "a potassium level of 6.5 mEq/L with oliguric kidney failure", "restrict dietary potassium and prepare for possible dialysis", "I will follow my renal diet restrictions closely", "the client's electrolyte levels are maintained within safe limits with dialysis"],
  ["a client with a chloride imbalance", "muscle twitching and a low chloride level after prolonged vomiting", "replace chloride and monitor acid-base balance closely", "I will take antiemetics as prescribed to reduce fluid and electrolyte losses", "the client's chloride level and acid-base status return to normal"],
];

const SAFETY: Item[] = [
  ["a client requiring standard precautions", "a nurse who does not perform hand hygiene between clients", "perform hand hygiene before and after every client contact", "I will remind visitors to perform hand hygiene before entering my room", "the rate of healthcare-associated infections on the unit decreases"],
  ["a client on contact precautions for C. difficile", "a client cared for using only alcohol-based hand sanitizer", "wash hands with soap and water and wear a gown and gloves", "family will wash their hands with soap and water, not just sanitizer, when visiting", "the infection does not spread to other clients or staff"],
  ["a client on droplet precautions for influenza", "a client cared for in a room without a mask policy in place", "place the client on droplet precautions and have visitors wear a mask", "I will cover my cough and wear a mask when staff enter my room", "no additional cases of influenza occur among staff or other clients"],
  ["a client on airborne precautions for tuberculosis", "a client cared for in a standard room without a respirator", "place the client in a negative-pressure room and wear an N95 respirator", "I will cover my mouth when coughing and wear a mask when leaving my room", "no transmission of tuberculosis occurs to staff or other clients"],
  ["a client where hand hygiene technique is being evaluated", "visibly soiled hands after removing gloves from a dressing change", "wash hands with soap and water when visibly soiled, not just sanitizer", "I will remind my care team to wash their hands before touching me", "the client's infection risk decreases with consistent hand hygiene practice"],
  ["a client at risk for a surgical site infection", "redness, warmth, and purulent drainage from a surgical incision", "use sterile technique for dressing changes and monitor the incision closely", "I will keep my incision clean and dry and watch for signs of infection", "the incision heals without signs of infection"],
  ["a nurse who sustains a needle-stick injury", "a needle-stick injury sustained after giving an injection", "wash the area immediately and report the exposure per facility protocol", "I will always dispose of needles in the sharps container immediately after use", "the exposed staff member receives appropriate follow-up testing and treatment"],
  ["a unit evaluating sharps disposal practices", "an overfilled sharps container with needles protruding from the top", "replace the sharps container before it becomes overfilled", "I will never try to force additional sharps into an overfilled container", "sharps-related injuries on the unit decrease"],
  ["a client's room where a fire safety response is needed", "smoke coming from a wastebasket in a client's room", "rescue the client from immediate danger first, then activate the alarm", "I will know the location of fire exits and extinguishers on my unit", "the fire is contained quickly without harm to clients or staff"],
  ["a unit evaluating electrical and chemical safety", "frayed electrical cords on medical equipment in use", "remove damaged equipment from use and report it to biomedical engineering", "I will report any frayed cords or malfunctioning equipment immediately", "no electrical injuries occur on the unit"],
  ["a client with a central line at risk for infection", "a central line dressing that is soiled and no longer occlusive", "use maximal sterile barrier precautions and change the dressing using sterile technique", "I will ask staff if my central line is still needed each day", "the client remains free of central line-associated bloodstream infection"],
  ["a client with an indwelling urinary catheter at risk for infection", "an indwelling catheter left in place without a documented ongoing need", "assess the continued need for the catheter daily and remove it as soon as possible", "I will ask if my catheter can be removed as soon as I am able to void", "the client remains free of catheter-associated urinary tract infection"],
  ["a ventilated client at risk for pneumonia", "a ventilated client with the head of the bed flat", "keep the head of the bed elevated 30-45 degrees and provide oral care regularly", "family will understand elevating the head of the bed helps prevent pneumonia", "the client remains free of ventilator-associated pneumonia"],
  ["a client colonized with MRSA", "a MRSA-colonized wound cared for without contact precautions", "implement contact precautions and use dedicated equipment for the client", "I will remind visitors to wear gowns and gloves before entering my room", "MRSA is not transmitted to other clients or staff"],
  ["a client colonized with VRE", "shared equipment used between a VRE-positive client and others without cleaning", "dedicate equipment to the VRE-positive client and disinfect shared items thoroughly", "I understand why my care team uses gowns and gloves when caring for me", "VRE is not transmitted to other clients"],
  ["a unit experiencing a C. difficile outbreak", "an increase in new C. difficile cases on the unit over one week", "reinforce contact precautions and use soap and water hand hygiene facility-wide", "family will use soap and water rather than hand sanitizer when visiting", "the number of new C. difficile cases decreases"],
  ["a client meeting criteria for the sepsis bundle", "a client meeting sepsis criteria without cultures or antibiotics started", "obtain blood cultures and begin antibiotics within one hour per the sepsis bundle", "family will notify staff immediately of any signs of worsening infection", "the client's vital signs stabilize and lactate level decreases"],
  ["a nurse preparing to administer medication safely", "a nurse who prepares medication without checking the client's identification", "use two client identifiers before administering any medication", "I will state my name and date of birth when staff give me medication", "medication administration is completed safely without errors"],
  ["a client requiring restraints", "a client in restraints who has not been assessed in over two hours", "assess circulation, skin integrity, and the ongoing need for restraints regularly", "I understand restraints will be removed as soon as it is safe to do so", "the client is released from restraints without injury as soon as safely possible"],
  ["a client using home oxygen", "a client who smokes cigarettes while using home oxygen", "teach the client to avoid smoking and open flames near oxygen equipment", "I will not smoke or allow smoking near my home oxygen equipment", "the client uses home oxygen safely without incident"],
  ["a client with a seizure history requiring precautions", "a client with a seizure history in a room without padded rails", "pad the side rails and keep the bed in the lowest position", "family will time and describe any seizure activity that occurs", "the client remains free of injury during any seizure activity"],
  ["a client with a documented latex allergy", "a client with a latex allergy cared for with standard latex gloves", "use latex-free gloves and supplies for a client with a latex allergy", "I will tell all new providers about my latex allergy before procedures", "the client has no allergic reaction during care"],
  ["a community responding to a mass casualty disaster", "multiple casualties arriving simultaneously after a community disaster", "use a triage system to prioritize care based on survivability and acuity", "family will understand triage prioritizes the most critically ill who can be saved", "resources are allocated efficiently to maximize survival among casualties"],
  ["a client exposed to a hazardous chemical", "a chemical splash to the eyes and skin", "irrigate the affected area with copious amounts of water immediately", "I will remove contaminated clothing and rinse the area right away if exposed", "the client's chemical exposure symptoms resolve without lasting injury"],
  ["a nurse handling a used needle", "a used needle recapped with two hands", "use the one-handed scoop technique or engage the safety device instead of recapping", "I will never recap needles using two hands", "needle-stick injuries related to recapping decrease"],
  ["a staff member donning and doffing personal protective equipment", "gloves removed before removing a contaminated gown", "remove PPE in the correct sequence, gloves before gown, to prevent contamination", "I understand why staff put on and remove protective equipment in a specific order", "healthcare workers avoid self-contamination when removing PPE"],
  ["an isolation room requiring proper signage", "an isolation client's door without appropriate precaution signage posted", "post clear isolation signage indicating the required precautions", "family will read and follow the isolation sign before entering the room", "all visitors and staff follow appropriate precautions consistently"],
  ["a neutropenic, immunocompromised client", "fresh flowers and raw vegetables brought to a neutropenic client's room", "teach visitors to avoid bringing fresh flowers, plants, or raw produce", "family will avoid bringing fresh flowers or plants during my treatment", "the client remains free of infection during the period of neutropenia"],
  ["a staff member performing safe patient handling", "a staff member attempting to manually lift a client alone", "use a mechanical lift or get adequate assistance before moving a dependent client", "I will ask for help moving me rather than trying to help too much on my own", "no injuries occur to the client or staff during transfers"],
  ["a unit responding to a workplace violence incident", "an agitated visitor becoming verbally threatening toward staff", "activate the facility's safety protocol and remove staff and clients from danger", "staff will know the facility's code and evacuation plan for violent situations", "the situation is resolved without injury to staff or clients"],
];

const LEADERSHIP: Item[] = [
  ["a nurse delegating vital sign measurement to unlicensed assistive personnel", "the UAP is asked to interpret an abnormal vital sign", "delegate routine vital sign collection but retain responsibility for interpreting results", "I understand the RN remains accountable even when tasks are delegated", "vital signs are collected accurately and abnormal findings are reported to the RN promptly"],
  ["a nurse delegating a medication task to a licensed practical nurse", "the LPN is asked to give an IV push medication outside their scope", "verify the task is within the LPN's legal scope of practice before delegating", "I will only perform tasks within my legal scope of practice", "medications are administered safely within each team member's scope of practice"],
  ["a nurse prioritizing care among four assigned clients", "one client develops new shortness of breath", "assess the client with an airway or breathing problem first", "I understand life-threatening problems are addressed before stable ones", "the client with the most urgent physiologic need is assessed first without delay"],
  ["a charge nurse assigning a new admission to the team", "the admission is unstable and assigned to an already overloaded nurse", "reassign the admission or provide additional support to balance the workload", "I will notify my charge nurse if my assignment becomes unsafe", "all clients receive timely, safe care despite a new admission"],
  ["a unit operating with unsafe nurse-to-client staffing ratios", "unsafe ratios persisting for an extended period", "notify the nursing supervisor and follow the facility's unsafe staffing protocol", "I will document concerns and report unsafe staffing through proper channels", "staffing levels are adjusted to ensure safe client care"],
  ["a nurse completing an incident report after a medication error", "a medication error occurred but was not documented", "complete an incident report as a factual, objective account separate from the medical record", "I understand incident reports are used to improve system safety, not to punish", "the incident is reviewed and system improvements are identified"],
  ["a nurse using the chain of command to escalate a concern", "a safety concern dismissed by the immediate supervisor", "follow the chain of command and escalate the concern to the next level", "I will use the chain of command when my concerns are not addressed", "the safety concern is addressed at an appropriate level of leadership"],
  ["a client being asked to sign an informed consent form", "the client does not understand the procedure before signing", "notify the surgeon that the client needs further explanation before signing consent", "I will ask questions until I fully understand the risks and benefits of a procedure", "the client provides informed consent with full understanding of the procedure"],
  ["a client's advance directive documentation", "the advance directive is not available in the chart during a critical event", "ensure advance directives are documented and easily accessible in the record", "I will give a copy of my advance directive to my healthcare team and family", "the client's wishes are honored based on their documented advance directive"],
  ["a conversation about a client's protected health information", "client information discussed in a public elevator", "discuss client information only in private, appropriate settings", "I understand my health information will only be shared with those who need it for my care", "client confidentiality is maintained according to HIPAA regulations"],
  ["a nursing student performing a task within their scope of practice", "a task performed without adequate supervision", "ensure appropriate supervision is provided for tasks within a student's scope", "I will ask for supervision when performing a new or complex skill", "care is provided safely within each team member's scope of practice"],
  ["two staff members in conflict over an assignment", "an argument occurring loudly in front of clients", "address the conflict privately and professionally, away from clients", "I will address disagreements with colleagues privately and respectfully", "the conflict is resolved without affecting client care or safety"],
  ["a nurse giving a change-of-shift SBAR report", "an incomplete report that omits a recent change in condition", "use the SBAR format to provide a complete, organized handoff report", "I will ask questions during handoff if information seems incomplete", "the oncoming nurse receives complete information needed for safe care"],
  ["a competent client refusing a prescribed treatment", "a client refuses treatment after being informed of the risks", "respect the client's right to refuse treatment after ensuring they are informed", "I have the right to refuse treatment after understanding the risks and benefits", "the client's autonomy is respected while ensuring they are fully informed"],
  ["a client with a do-not-resuscitate order during a procedure", "confusion among staff about whether the DNR applies during a procedure", "clarify the scope of the DNR order with the provider and document it clearly", "family will understand what the DNR order does and does not include", "the client's end-of-life wishes are honored accurately"],
  ["a family being approached about organ donation", "family members unsure how to approach the topic after a client's death", "involve the organ procurement organization to discuss donation with the family", "family will have their questions about organ donation answered by trained specialists", "the family makes an informed decision about organ donation"],
  ["a new graduate nurse requiring supervision", "an unfamiliar procedure performed without oversight", "provide appropriate supervision until competency is demonstrated", "I will ask for help when performing a procedure for the first time", "the new nurse performs the procedure safely and correctly"],
  ["a unit reviewing a recurring pattern of falls for quality improvement", "a recurring pattern of falls without a formal review", "initiate a quality improvement review to identify root causes and prevention strategies", "staff will participate in reporting near-misses to support quality improvement", "the rate of falls on the unit decreases after improvement measures are implemented"],
  ["a nurse delegating activities of daily living to unlicensed assistive personnel", "the UAP is asked to assess a wound during a bathing task", "delegate the bathing task but reserve wound assessment for the RN", "I understand assessment is a nursing responsibility that cannot be delegated", "ADLs are completed safely while assessments remain within the RN's role"],
  ["a nurse delegating ambulation to unlicensed assistive personnel", "the UAP is asked to ambulate a client who had syncope earlier in the shift", "assess the client's stability yourself before delegating ambulation", "I will let staff know if I feel dizzy or unsteady before walking", "the client ambulates safely without a fall or injury"],
  ["a nurse prioritizing care among several postoperative clients", "a recently returned post-op client has decreasing blood pressure", "assess the post-op client with unstable vital signs first", "I will call for help immediately if I feel something is wrong after surgery", "the client with the most urgent post-operative need receives timely care"],
  ["a triage nurse prioritizing clients in the emergency department", "a client with crushing chest pain arrives with a client with a sprained ankle", "triage the client with chest pain as the highest priority for immediate assessment", "family will understand triage is based on medical urgency, not arrival time", "clients are seen in order of medical urgency to prevent harm"],
  ["a nurse floated to an unfamiliar unit", "unfamiliar equipment encountered without orientation", "request an orientation to unfamiliar equipment and ask for assistance as needed", "I will ask for help with unfamiliar procedures when floated to a new unit", "the floated nurse provides safe care within their competency"],
  ["a nurse receiving a verbal order over the phone", "a verbal order not read back to the provider", "read back all verbal and telephone orders to confirm accuracy", "I understand orders should be read back to prevent miscommunication", "verbal orders are transcribed and carried out accurately"],
  ["a client being discharged home requiring follow-up care", "discharge home without arrangements for needed follow-up care", "coordinate with case management to arrange follow-up services before discharge", "I will attend my follow-up appointments and understand my discharge instructions", "the client transitions home safely with appropriate support services in place"],
  ["a client with complex needs requiring case management", "a client lacking resources for care after discharge", "refer the client to case management for assistance coordinating resources", "I will work with my case manager to access needed community resources", "the client receives the resources and support needed for a safe transition"],
  ["a family and a competent client disagreeing about treatment", "the family wants treatment continued against the client's wishes", "support the competent client's autonomous decision while facilitating family communication", "family will understand that a competent client's wishes must be respected", "the client's autonomy is honored while the family's concerns are acknowledged"],
  ["a nurse who witnesses a colleague's unsafe practice", "a colleague observed diverting medications from clients", "report the suspected unsafe practice through appropriate channels immediately", "I understand reporting unsafe practice protects clients and helps colleagues get help", "the unsafe practice is addressed and client safety is protected"],
  ["a new nurse being mentored by an experienced nurse", "the new nurse appears overwhelmed and hesitant to ask questions", "create a supportive environment that encourages the new nurse to ask questions", "I will ask questions whenever I am unsure, even as I gain experience", "the new nurse gains confidence and competence with mentorship"],
  ["a nurse managing time during an especially busy shift", "falling behind on tasks with several clients needing attention simultaneously", "reprioritize tasks based on urgency and delegate appropriate tasks to the team", "I will ask for help when my workload becomes unsafe to manage alone", "all clients receive timely and safe care despite a busy shift"],
];

const HEALTHPROMO: Item[] = [
  ["a pregnant client due for prenatal care visits", "the client has not been seen since early in the first trimester", "schedule prenatal visits according to the recommended schedule for gestational age", "I will attend all scheduled prenatal visits to monitor my baby's growth", "the pregnancy progresses with normal fetal growth and maternal well-being"],
  ["an adult client due for routine immunizations", "the client is unsure which vaccines are recommended for their age group", "review the adult immunization schedule and administer recommended vaccines", "I will keep a record of my vaccines and get boosters as recommended", "the client remains up to date on recommended adult immunizations"],
  ["a client due for breast cancer screening", "a 45-year-old client who has never had a mammogram", "teach breast self-awareness and schedule a screening mammogram per guidelines", "I will perform breast self-awareness checks and report any new changes", "the client completes recommended breast cancer screening"],
  ["a client due for colorectal cancer screening", "a 50-year-old client who has never been screened", "discuss screening options and schedule a colonoscopy or other recommended test", "I will complete my colorectal cancer screening as recommended for my age", "the client completes appropriate colorectal cancer screening"],
  ["a client with multiple cardiovascular risk factors", "no current lifestyle changes despite multiple risk factors", "counsel the client on diet, exercise, and smoking cessation to reduce cardiac risk", "I will follow a heart-healthy diet and exercise regularly", "the client's blood pressure, cholesterol, and other risk factors improve"],
  ["a client trying to quit smoking", "multiple failed quit attempts in the past", "offer nicotine replacement therapy and behavioral support resources", "I will use nicotine replacement therapy and set a quit date", "the client successfully reduces or stops smoking"],
  ["a client needing nutrition counseling", "obesity with a diet high in processed foods", "collaborate with the client to set realistic, gradual dietary goals", "I will make small, sustainable changes to my eating habits", "the client demonstrates gradual improvement in dietary choices and weight"],
  ["a sedentary client needing an exercise plan", "no regular physical activity reported", "recommend starting with achievable amounts of moderate exercise and gradually increasing", "I will start with short walks and gradually increase my activity level", "the client reports increased physical activity and improved fitness"],
  ["a client with poor sleep hygiene", "difficulty falling asleep while using screens in bed", "teach sleep hygiene practices such as a consistent bedtime and limiting screens", "I will avoid screens before bed and keep a consistent sleep schedule", "the client reports improved sleep quality and duration"],
  ["a client experiencing chronic stress", "chronic stress affecting daily functioning", "teach stress reduction techniques such as mindfulness or relaxation exercises", "I will practice relaxation techniques regularly, not just during stressful times", "the client reports decreased stress and improved coping"],
  ["a client needing sun safety and skin cancer prevention education", "a new, irregularly shaped, changing mole", "recommend the client have any changing or irregular mole evaluated by a provider", "I will use sunscreen and check my skin regularly for changes", "the client's skin is monitored appropriately and changes are evaluated promptly"],
  ["a client needing oral health education", "no dental visit in over five years", "encourage routine dental checkups and proper oral hygiene practices", "I will brush twice daily, floss, and see my dentist regularly", "the client's oral health improves with routine dental care"],
  ["an older adult due for vision and hearing screening", "no vision or hearing screening in years", "recommend routine vision and hearing screening for early detection of changes", "I will schedule regular vision and hearing checkups", "the client's vision and hearing changes are detected and managed early"],
  ["a postmenopausal client at risk for osteoporosis", "low calcium and vitamin D intake", "recommend adequate calcium and vitamin D intake and weight-bearing exercise", "I will take calcium and vitamin D and do weight-bearing exercises", "the client's bone density is preserved and fracture risk decreases"],
  ["a sexually active client needing STI prevention education", "inconsistent use of protection", "provide education on consistent condom use and STI screening", "I will use protection consistently and get tested regularly", "the client demonstrates safer sexual practices and completes STI screening"],
  ["a client seeking contraception counseling", "uncertainty about which method best fits their needs", "discuss the risks, benefits, and options for various contraceptive methods", "I will choose a contraceptive method that fits my health needs and lifestyle", "the client selects and consistently uses an appropriate contraceptive method"],
  ["an older adult due for a wellness visit", "several missed routine wellness visits", "schedule a comprehensive wellness visit to screen for age-related conditions", "I will attend my annual wellness visit even when I feel well", "the client's health conditions are identified and managed early"],
  ["a toddler being screened for developmental milestones", "a 2-year-old not yet using two-word phrases", "screen the toddler's development and refer for further evaluation if delayed", "family will discuss any developmental concerns at well-child visits", "developmental delays are identified early and appropriate services are initiated"],
  ["an adolescent receiving anticipatory guidance", "significant risk-taking behavior typical of the developmental stage", "provide anticipatory guidance about common adolescent risk behaviors to the family", "family will maintain open communication with their teenager about safety", "the adolescent demonstrates safer decision-making with guidance and support"],
  ["an infant's caregiver needing car seat safety education", "an infant placed forward-facing before meeting recommended criteria", "teach caregivers to keep infants rear-facing as long as recommended by guidelines", "family will keep the car seat rear-facing until the child meets height and weight requirements", "the child is transported safely according to current car seat guidelines"],
  ["a child needing helmet safety education", "a child riding a bicycle without a properly fitted helmet", "teach the family the importance of a properly fitted helmet for wheeled activities", "I will always wear my helmet when riding my bike or scooter", "the child wears a helmet consistently during wheeled activities"],
  ["an older adult's home being assessed for safety", "loose rugs and poor lighting in the hallways", "recommend removing throw rugs and improving lighting to reduce fall risk", "I will remove tripping hazards and add nightlights in my home", "the client's home environment is modified to reduce fall risk"],
  ["a client being discharged with a new medication list", "a new medication that duplicates a home medication", "reconcile the client's home and discharge medications to identify discrepancies", "I will bring a list of all my medications to every appointment", "the client's medication list is accurate and free of duplications or omissions"],
  ["a client with limited health literacy", "the client nods but cannot explain discharge instructions", "use the teach-back method to confirm the client's understanding", "I will ask questions if I do not understand my instructions", "the client demonstrates accurate understanding of their care instructions"],
  ["a client whose care plan should reflect cultural preferences", "a care plan that conflicts with the client's cultural or religious beliefs", "incorporate the client's cultural and religious preferences into the plan of care", "I will share my cultural or religious preferences with my care team", "the client's care is provided in a way that respects their cultural beliefs"],
  ["a client experiencing spiritual distress", "spiritual distress related to a new diagnosis", "offer to contact the client's spiritual leader or facility chaplain", "I will let my care team know if I would like a chaplain visit", "the client reports improved spiritual well-being and coping"],
  ["a teenager using e-cigarettes", "vaping despite believing it is harmless", "provide education to the teen and family about the risks of vaping", "I will avoid vaping and tobacco products given the health risks", "the teenager reduces or stops the use of vaping products"],
  ["a client being screened for alcohol use with CAGE", "a CAGE screening suggesting a possible alcohol use disorder", "provide brief counseling and refer for further evaluation as indicated", "I will be honest with my provider about my alcohol use", "the client engages in further evaluation or treatment as appropriate"],
  ["a child with obesity", "a BMI above the 95th percentile for age", "counsel the family on gradual, sustainable changes to diet and activity", "family will offer healthy food choices and limit screen time", "the child's BMI trends toward a healthier range over time"],
  ["a client planning international travel", "no review of needed vaccinations before travel", "review destination-specific vaccine and health recommendations before travel", "I will visit a travel health clinic several weeks before international travel", "the client travels without a vaccine-preventable illness"],
];

const RISKREDUCTION: Item[] = [
  ["a client with an elevated troponin level", "a troponin level significantly above normal with chest pain", "notify the provider immediately and obtain a repeat ECG", "I will seek immediate care if my chest pain returns after discharge", "the client's troponin trends downward as myocardial injury resolves"],
  ["a client with an elevated BNP level", "a BNP of 1200 pg/mL with worsening shortness of breath", "assess for signs of fluid overload and notify the provider", "I will weigh myself daily and report rapid weight gain", "the client's BNP decreases as heart failure symptoms improve"],
  ["a client with elevated creatinine and BUN", "a creatinine of 3.2 mg/dL with decreased urine output", "hold nephrotoxic medications and notify the provider", "I will avoid NSAIDs and stay hydrated to protect my kidney function", "the client's creatinine and BUN trend toward normal"],
  ["a client with an elevated white blood cell count", "a white blood cell count of 22,000/mm3 with fever", "assess for a source of infection and notify the provider", "I will report fever or signs of infection promptly", "the client's white blood cell count decreases as infection resolves"],
  ["a client with a low hemoglobin and hematocrit", "a hemoglobin of 6.8 g/dL with fatigue and tachycardia", "assess for signs of bleeding and prepare for a possible transfusion", "I will report any unusual bleeding or extreme fatigue", "the client's hemoglobin rises toward a safe range"],
  ["a client with an elevated INR on warfarin", "an INR of 6.5 with gum bleeding", "hold the warfarin dose and notify the provider immediately", "I will have my INR checked regularly and report unusual bleeding", "the client's INR returns to the therapeutic range"],
  ["a client with an elevated PTT on heparin", "a PTT more than three times the control value", "hold the heparin infusion and notify the provider", "I will report unusual bruising or bleeding while on this medication", "the client's PTT returns to the therapeutic range"],
  ["a client with elevated liver enzymes", "an AST and ALT several times the upper limit of normal", "hold hepatotoxic medications and notify the provider", "I will avoid alcohol and unnecessary over-the-counter medications that affect the liver", "the client's liver enzymes trend toward normal"],
  ["a client with an elevated ammonia level", "an ammonia level of 110 mcg/dL with confusion", "administer lactulose as prescribed and monitor mental status", "I will take my lactulose as prescribed to prevent confusion", "the client's ammonia level decreases and mental status improves"],
  ["a client with elevated lipase and amylase", "a lipase level five times the upper limit of normal with abdominal pain", "keep the client NPO and notify the provider", "I will avoid alcohol to reduce the risk of future pancreatitis", "the client's lipase level decreases as pancreatitis resolves"],
  ["a client with an elevated blood glucose and A1C", "an A1C of 9.8% in a client with type 2 diabetes", "review the client's medication regimen and lifestyle factors with the provider", "I will monitor my blood glucose and follow my diabetic meal plan", "the client's blood glucose and A1C trend toward target levels"],
  ["a client with a low platelet count", "a platelet count of 18,000/mm3 with petechiae and gum bleeding", "implement bleeding precautions and notify the provider", "I will use a soft toothbrush and avoid activities that could cause injury", "the client's platelet count rises toward a safe range"],
  ["a client with an elevated D-dimer", "new unilateral leg swelling and chest pain", "notify the provider and prepare the client for further diagnostic imaging", "I will report new leg swelling or chest pain promptly", "the client's diagnostic workup identifies and treats the underlying cause"],
  ["a client with an abnormal arterial blood gas", "a pH of 7.25, PaCO2 of 60, and HCO3 of 24", "recognize this as uncompensated respiratory acidosis and support ventilation", "I will use my prescribed respiratory treatments to support my breathing", "the client's arterial blood gas values trend toward normal"],
  ["a client with an elevated CK-MB", "an elevated CK-MB with recent chest pain", "correlate the CK-MB with troponin and ECG findings and notify the provider", "I will report any recurrence of chest pain immediately", "the client's cardiac enzymes trend downward over the following days"],
  ["a client with an elevated PSA", "a rising PSA level in an older male client", "discuss further urologic evaluation with the client", "I will follow up with my provider to determine the cause of my elevated PSA", "the client completes appropriate follow-up evaluation for the elevated PSA"],
  ["a client with an elevated CA-125", "an elevated CA-125 with pelvic pain and bloating", "discuss further gynecologic evaluation with the client", "I will follow up with my provider to discuss what this test result means", "the client completes appropriate follow-up evaluation for the elevated marker"],
  ["a client with a positive blood culture", "a blood culture positive for a gram-negative organism with fever", "notify the provider promptly and ensure appropriate antibiotic coverage", "I will complete my full course of antibiotics as prescribed", "repeat blood cultures become negative as the infection resolves"],
  ["a client with an elevated lactate level", "a lactate level of 4.5 mmol/L with suspected sepsis", "notify the provider and anticipate aggressive fluid resuscitation", "family will notify staff of any worsening confusion or breathing changes", "the client's lactate level decreases with treatment"],
  ["a client with a low albumin level", "an albumin of 2.0 g/dL with generalized edema", "assess nutritional status and collaborate with the provider on nutritional support", "I will eat adequate protein to support healing and prevent swelling", "the client's albumin level and edema improve with nutritional support"],
  ["a client with an elevated uric acid level and gout", "a swollen, red, and exquisitely tender great toe joint", "administer prescribed anti-inflammatory medication and elevate the affected joint", "I will limit foods high in purines, such as organ meats and shellfish", "the client's joint pain and swelling decrease"],
  ["a client recovering after a cardiac catheterization", "a hematoma expanding at the femoral insertion site", "apply firm pressure to the site and notify the provider immediately", "I will keep my leg straight and avoid bending at the insertion site as instructed", "the insertion site remains free of bleeding or hematoma formation"],
  ["a client recovering after a liver biopsy", "increasing right upper quadrant pain and a drop in blood pressure", "position the client on the right side and monitor vital signs closely", "I will lie on my right side after the procedure as instructed", "the client's vital signs remain stable without signs of bleeding"],
  ["a client recovering after a paracentesis", "a drop in blood pressure and dizziness after a large-volume paracentesis", "monitor vital signs closely and assess for signs of hypovolemia", "I will report dizziness or lightheadedness after the procedure", "the client's vital signs remain stable after fluid removal"],
  ["a client recovering after a thoracentesis", "sudden shortness of breath and decreased breath sounds", "assess breath sounds and obtain a chest x-ray to rule out pneumothorax", "I will report any sudden shortness of breath after the procedure", "the client's breath sounds and oxygenation remain stable after the procedure"],
  ["a client being screened for MRI safety", "an implanted pacemaker not verified before a standard MRI", "verify MRI compatibility of any implanted devices before the procedure", "I will inform staff of any metal implants or devices before an MRI", "the MRI is performed safely without harm related to metal or implanted devices"],
  ["a client scheduled for a contrast CT scan", "a creatinine of 2.5 mg/dL before a scheduled contrast CT scan", "notify the provider of impaired renal function before administering contrast", "I will tell staff about any kidney problems or contrast allergies before my scan", "the client does not develop contrast-induced nephropathy"],
  ["a client being prepared for an EEG", "caffeine consumed and hair not washed before the EEG", "instruct the client to avoid caffeine and wash their hair before the EEG", "I will avoid caffeine and sleep medications before my EEG as instructed", "the EEG produces a clear, interpretable recording"],
  ["a client being prepared for a cardiac stress test", "a beta-blocker taken the morning of a scheduled stress test", "clarify with the provider whether to hold beta-blockers before the test", "I will ask which of my medications to hold before my stress test", "the stress test accurately reflects the client's cardiac response to exertion"],
  ["a client preparing for and recovering from a colonoscopy", "an incomplete bowel preparation before the colonoscopy", "ensure the client completes the full prescribed bowel preparation regimen", "I will complete my entire bowel prep as instructed for an accurate exam", "the colonoscopy provides a clear view of the bowel for accurate diagnosis"],
];

const GERONTOLOGY: Item[] = [
  ["an older adult experiencing polypharmacy", "14 different medications from multiple prescribers", "conduct a thorough medication reconciliation and review for inappropriate medications", "I will bring all my medications, including over-the-counter drugs, to every appointment", "the client's medication regimen is simplified with fewer adverse effects"],
  ["an older adult with suspected elder abuse", "unexplained bruising and a fearful demeanor around a caregiver", "interview the client privately and report suspected abuse to adult protective services", "family will know how to report concerns about elder mistreatment", "the client is protected and receives appropriate follow-up services"],
  ["an older adult with a history of falls at home", "two falls at home in the past month", "perform a home safety assessment and a fall risk evaluation", "I will remove tripping hazards and use assistive devices as recommended", "the client experiences no further falls after safety modifications"],
  ["a caregiver of a client with dementia", "caregiver exhaustion and inability to continue providing care alone", "refer the caregiver to respite care and community support resources", "family will use respite care services to prevent caregiver burnout", "the caregiver reports reduced stress and improved ability to provide care"],
  ["a client's home being assessed for safety", "poor lighting, clutter, and no smoke detectors", "recommend home modifications to improve safety", "I will improve lighting and remove clutter to reduce my risk of injury", "the client's home environment is modified to reduce safety risks"],
  ["a client receiving hospice and palliative care", "uncontrolled pain in a client with a terminal illness", "collaborate with the hospice team to optimize the client's comfort and pain control", "family will understand that hospice focuses on comfort rather than cure", "the client's pain and symptoms are well controlled"],
  ["a client completing advance care planning", "no documented healthcare proxy or advance directive", "encourage the client to complete an advance directive and designate a healthcare proxy", "I will discuss my wishes with my family and complete an advance directive", "the client's future care preferences are documented and understood"],
  ["an older adult experiencing isolation and loneliness", "minimal social contact while living alone", "connect the client with community resources such as a senior center or support groups", "I will participate in community activities to reduce feelings of isolation", "the client reports increased social engagement and improved well-being"],
  ["a homebound client at risk for pressure injury", "a Braden score indicating high risk for pressure injury", "implement a turning schedule and pressure-relieving devices at home", "family will reposition their loved one at least every two hours", "the client's skin remains intact without new pressure injuries"],
  ["a client with poor medication adherence", "skipped doses of blood pressure medication due to cost", "connect the client with resources for medication assistance and simplify the regimen", "I will talk to my provider if I cannot afford my medications rather than skipping doses", "the client's blood pressure is controlled with consistent medication adherence"],
  ["a client managing a chronic disease at home", "no understanding of how to manage sick days with diabetes", "teach the client a sick-day management plan for their chronic condition", "I will follow my sick-day plan and check my blood sugar more often when ill", "the client manages chronic disease flares safely at home"],
  ["a community with low immunization rates", "low immunization rates identified in a community health assessment", "organize a community immunization clinic to improve vaccination rates", "community members will attend local immunization clinics to stay up to date", "immunization rates in the community increase"],
  ["a client newly diagnosed with a reportable communicable disease", "a newly diagnosed reportable communicable disease", "report the case to the local health department as required by law", "I understand certain diseases must be reported to protect public health", "public health authorities can track and control the spread of disease"],
  ["a community without a disaster preparedness plan", "no established plan for a natural disaster", "collaborate with community leaders to develop a disaster preparedness plan", "I will keep an emergency supply kit and know my community's evacuation plan", "the community responds effectively when a disaster occurs"],
  ["a community with an environmental health hazard", "elevated rates of respiratory illness near an industrial site", "investigate and report the potential environmental health hazard", "community members will report environmental concerns to local health authorities", "the environmental hazard is identified and addressed to protect community health"],
  ["a family experiencing food insecurity", "running out of food before the end of the month", "connect the family with local food assistance programs and resources", "I will use available community food resources when needed", "the family has consistent access to adequate nutrition"],
  ["a client experiencing homelessness", "an untreated chronic wound without stable housing", "connect the client with shelter resources and accessible wound care follow-up", "I will return to the clinic for follow-up care even without stable housing", "the client's wound heals with consistent access to care"],
  ["a community with limited access to healthcare", "limited access to primary care providers and transportation", "advocate for expanded access, such as mobile clinics or transportation assistance", "community members will use available transportation assistance programs to access care", "more community members receive timely, needed healthcare services"],
  ["an older adult wanting to age in place", "mobility limitations while wanting to remain at home", "recommend home modifications such as grab bars and ramps to support aging in place", "I will install grab bars and remove hazards to safely stay in my home", "the client remains safely in their home with appropriate modifications"],
  ["a family caregiver experiencing burden", "fatigue, irritability, and neglect of the caregiver's own health", "assess for caregiver burden and connect the caregiver with support resources", "I will make time for my own health needs and accept help when offered", "the caregiver reports improved well-being and sustained ability to provide care"],
  ["an older adult with urinary incontinence", "limiting social activities due to fear of incontinence episodes", "assess the type of incontinence and implement an appropriate bladder training program", "I will follow my scheduled toileting program to reduce accidents", "the client experiences fewer incontinence episodes and improved quality of life"],
  ["an older adult with polypharmacy-related falls", "multiple sedating medications with a recent fall at home", "review the medication list for sedating or interacting drugs contributing to falls", "I will ask my provider to review my medications regularly for fall risk", "the client's medication regimen is adjusted and fall risk decreases"],
  ["a client with dementia experiencing sundowning", "increasing agitation and confusion in the late afternoon", "maintain a consistent routine and minimize stimulation in the late afternoon and evening", "family will keep a calm, consistent evening routine to reduce agitation", "the client's evening agitation decreases with a structured routine"],
  ["a client with dementia who continues to drive", "getting lost while driving despite worsening dementia", "discuss driving safety concerns with the client and family and involve the provider", "family will arrange alternative transportation as driving becomes unsafe", "the client transitions safely away from driving without injury to self or others"],
  ["a dying client with distressing symptoms", "labored, irregular breathing and restlessness at the end of life", "reposition the client and administer prescribed medications to ease discomfort", "family will understand these symptoms are common and comfort measures are being provided", "the client appears more comfortable with decreased visible distress"],
  ["a hospice client with uncontrolled pain", "pain that limits participation in meaningful activities", "administer scheduled, not just as-needed, analgesics to maintain consistent pain control", "family will give pain medication on a schedule rather than waiting for severe pain", "the client's pain is controlled, allowing participation in valued activities"],
  ["a community member experiencing prolonged grief", "prolonged grief after a loss affecting daily function", "refer the individual to a community grief support group or counseling service", "I will attend a support group to help process my grief", "the individual demonstrates healthy progression through the grieving process"],
  ["older adults at a community senior center", "limited access to exercise and social programs", "partner with the senior center to offer wellness and exercise programs", "I will participate in senior center programs to stay active and socially engaged", "participating older adults show improved physical and social well-being"],
  ["a rural client needing follow-up care", "inability to travel long distances for routine follow-up", "offer telehealth visits to provide accessible follow-up care", "I will use telehealth visits when travel to the clinic is difficult", "the client receives timely follow-up care despite geographic barriers"],
  ["workers at an occupational health screening", "reported respiratory symptoms with no recent screening", "conduct occupational health screening and assess for workplace exposures", "I will use recommended protective equipment provided at my workplace", "workplace health hazards are identified and addressed to protect employees"],
  ["a student with a chronic condition at school", "no plan in place for managing asthma at school", "develop an individualized health care plan in collaboration with the family and school", "family will provide the school nurse with an updated action plan and medications", "the student's chronic condition is managed safely during school hours"],
];

// ---------------------------------------------------------------------------
// Category metadata + item bank + target question counts
// ---------------------------------------------------------------------------
export const CATEGORY_DEFS = [
  { slug: "fundamentals", name: "Fundamentals of Nursing", clientNeed: "Basic Care and Comfort", icon: "clipboard", description: "Core skills: hygiene, mobility, comfort, elimination, and safe basic care.", items: [...FUNDAMENTALS, ...EXTRA_FUNDAMENTALS] },
  { slug: "pharmacology-parenteral", name: "Pharmacology & Parenteral Therapies", clientNeed: "Pharmacological and Parenteral Therapies", icon: "pill", description: "Therapeutic effects, adverse effects, and safe medication administration.", items: [...PHARMACOLOGY, ...EXTRA_PHARMACOLOGY] },
  { slug: "med-surg", name: "Medical-Surgical Nursing", clientNeed: "Physiological Adaptation", icon: "heart", description: "Acute and chronic adult illness across every body system.", items: [...MEDSURG, ...EXTRA_MEDSURG] },
  { slug: "maternal-newborn", name: "Maternal & Newborn Nursing", clientNeed: "Health Promotion and Maintenance", icon: "baby", description: "Antepartum, intrapartum, postpartum, and newborn care.", items: [...MATERNAL, ...EXTRA_MATERNAL] },
  { slug: "pediatrics", name: "Pediatric Nursing", clientNeed: "Health Promotion and Maintenance", icon: "sunrise", description: "Growth, development, and illness across infancy through adolescence.", items: [...PEDIATRICS, ...EXTRA_PEDIATRICS] },
  { slug: "mental-health", name: "Mental Health Nursing", clientNeed: "Psychosocial Integrity", icon: "brain", description: "Therapeutic communication, crisis intervention, and psychiatric care.", items: [...MENTALHEALTH, ...EXTRA_MENTALHEALTH] },
  { slug: "fluid-electrolyte", name: "Fluid, Electrolyte & Acid-Base Balance", clientNeed: "Physiological Adaptation", icon: "droplet", description: "Electrolyte imbalances, acid-base disorders, and fluid management.", items: [...FLUIDELECTROLYTE, ...EXTRA_FLUIDELECTROLYTE] },
  { slug: "safety-infection-control", name: "Safety & Infection Control", clientNeed: "Safety and Infection Control", icon: "shield", description: "Precautions, error prevention, and a safe care environment.", items: [...SAFETY, ...EXTRA_SAFETY] },
  { slug: "leadership-delegation", name: "Leadership, Delegation & Prioritization", clientNeed: "Management of Care", icon: "users", description: "Delegation, prioritization, ethics, and coordinating client care.", items: [...LEADERSHIP, ...EXTRA_LEADERSHIP] },
  { slug: "health-promotion", name: "Health Promotion & Maintenance", clientNeed: "Health Promotion and Maintenance", icon: "activity", description: "Screenings, wellness, and lifespan development teaching.", items: [...HEALTHPROMO, ...EXTRA_HEALTHPROMO] },
  { slug: "risk-reduction", name: "Reduction of Risk Potential", clientNeed: "Reduction of Risk Potential", icon: "flask", description: "Labs, diagnostics, and post-procedure monitoring.", items: [...RISKREDUCTION, ...EXTRA_RISKREDUCTION] },
  { slug: "gerontology-community", name: "Gerontological & Community Health Nursing", clientNeed: "Basic Care and Comfort", icon: "sunrise", description: "Older adult and population/community health nursing.", items: [...GERONTOLOGY, ...EXTRA_GERONTOLOGY] },
] as const;

// ---------------------------------------------------------------------------
// Archetypes (question "shapes") shared across every category
// ---------------------------------------------------------------------------
type Archetype = {
  key: "priority" | "action" | "teaching" | "response";
  field: 1 | 2 | 3 | 4;
  templates: string[];
  rationale: (name: string, correct: string) => string;
  strategies: string[];
};

export const ARCHETYPES: Archetype[] = [
  {
    key: "priority",
    field: 1,
    templates: [
      "Which finding requires immediate follow-up for {name}?",
      "The nurse should identify which finding as most urgent for {name}?",
      "Which assessment finding should the nurse report to the provider immediately for {name}?",
      "Which of the following findings is most concerning for {name}?",
      "The nurse recognizes which finding as an emergency for {name}?",
      "Which finding should the nurse prioritize for {name}?",
      "Which finding indicates a potential complication for {name}?",
      "Which finding should prompt the nurse to notify the provider immediately for {name}?",
    ],
    rationale: (name, correct) =>
      `"${correct}" is the finding that requires immediate follow-up for ${name} because it may signal a serious complication. The other options describe findings that are common or expected in this situation and warrant continued monitoring rather than urgent action.`,
    strategies: [
      "Use the ABC (airway, breathing, circulation) framework to decide which finding is most urgent.",
      "Ask yourself: is this finding expected with this condition, or does it signal a complication? Complications come first.",
      "Apply Maslow's hierarchy of needs — physiological threats to life take priority over comfort or psychosocial findings.",
      "Look for words like 'sudden,' 'severe,' or a big change from baseline — these usually signal the priority finding.",
      "Eliminate findings that are normal or expected for this condition before choosing the priority finding.",
      "When several findings sound reasonable, choose the one that could cause the most harm if left untreated.",
    ],
  },
  {
    key: "action",
    field: 2,
    templates: [
      "Which nursing action is the priority for {name}?",
      "Which intervention should the nurse implement first for {name}?",
      "Which nursing action is most important for {name}?",
      "Which action should the nurse take first for {name}?",
      "Which nursing action best ensures safety for {name}?",
      "Which intervention should be included as the priority in the plan of care for {name}?",
      "Which action should the nurse perform first for {name}?",
      "Which nursing intervention takes priority for {name}?",
    ],
    rationale: (name, correct) =>
      `"${correct}" is the priority nursing action for ${name} because it addresses the most immediate risk to the client's safety or physiologic stability. The other actions may be appropriate at some point in the plan of care, but they are not the priority right now.`,
    strategies: [
      "Use the nursing process — assess before you intervene, unless the client is in immediate danger.",
      "Choose the action that prevents harm or addresses an airway, breathing, or circulation problem first.",
      "If one option is an assessment and another is a treatment, assess first unless the client is unstable.",
      "Eliminate options that fall outside the nurse's scope or that would delay urgent care.",
      "Pick the action that treats the most life-threatening problem, not just the most commonly performed task.",
      "When two actions both seem correct, choose the one that must logically happen first.",
    ],
  },
  {
    key: "teaching",
    field: 3,
    templates: [
      "Which statement indicates correct understanding of teaching for {name}?",
      "Which statement shows the teaching was effective for {name}?",
      "Which statement indicates no further teaching is needed for {name}?",
      "Which statement demonstrates the teaching goals were met for {name}?",
      "Which statement reflects accurate understanding of self-care for {name}?",
      "Which response best demonstrates understanding of the teaching provided for {name}?",
      "Which statement indicates the teaching about {name} was successful?",
      "Which statement shows a correct grasp of the information taught for {name}?",
    ],
    rationale: (name, correct) =>
      `"${correct}" reflects correct understanding of the teaching provided for ${name}. The other statements reflect misconceptions or unsafe practices that would indicate a need for further teaching.`,
    strategies: [
      "Look for the statement that reflects safe, accurate self-care — eliminate statements with absolute words like 'never' or 'always' unless they are clinically correct.",
      "Correct teaching statements usually describe a specific, safe action the client will take, not just a vague feeling.",
      "Eliminate statements that describe an unsafe practice, even if they sound reasonable at first glance.",
      "The right answer restates the key safety teaching point in the client's own words.",
      "Watch for statements that mix up instructions from a different condition — make sure the statement truly fits this one.",
      "Choose the statement that shows the client knows what to do AND why it matters.",
    ],
  },
  {
    key: "response",
    field: 4,
    templates: [
      "Which finding indicates a therapeutic response to treatment for {name}?",
      "Which finding indicates the treatment is effective for {name}?",
      "Which outcome indicates treatment has been successful for {name}?",
      "Which finding shows a positive response to therapy for {name}?",
      "Which assessment finding demonstrates improvement for {name}?",
      "Which finding indicates the treatment plan is working for {name}?",
      "Which finding best indicates improvement for {name}?",
      "Which finding indicates the desired therapeutic effect has been achieved for {name}?",
    ],
    rationale: (name, correct) =>
      `"${correct}" demonstrates a therapeutic response to treatment for ${name}. The other findings do not indicate the expected therapeutic outcome and may instead suggest an adverse effect, an unrelated finding, or an inadequate response to treatment.`,
    strategies: [
      "A therapeutic response is a sign the treatment is working — it should relate directly to the reason treatment was started.",
      "Eliminate findings that describe an adverse effect or an unrelated symptom; those are not therapeutic responses.",
      "Compare each option to the expected goal of treatment for this specific condition.",
      "Look for measurable improvement in vital signs, labs, or symptoms that matches the treatment's purpose.",
      "If an option describes worsening or an unexpected symptom, it cannot be the therapeutic response.",
      "The correct answer shows the underlying problem is resolving, not just that an intervention was performed.",
    ],
  },
];

// Maximum number of differently-worded variants generated per unique
// knowledge point (item × archetype). Kept low on purpose: repeating the
// same fact 7-8 times with light rewording made the bank feel repetitive.
// Each variant also uses a DIFFERENT distractor set and template, so even
// the second appearance of a fact reads as a fresh question.
export const MAX_VARIANTS_PER_FACT = 2;

export function buildCategoryQuestions(items: Item[], targetCount: number, categoryId: string, categorySlug: string) {
  const N = items.length;
  const TEMPLATE_COUNT = 8;
  const rows: (typeof questions.$inferInsert)[] = [];
  let counter = 0;

  outer: for (let variant = 0; variant < MAX_VARIANTS_PER_FACT; variant++) {
    for (let itemIdx = 0; itemIdx < N; itemIdx++) {
      for (let archIdx = 0; archIdx < ARCHETYPES.length; archIdx++) {
        if (counter >= targetCount) break outer;
        const arch = ARCHETYPES[archIdx];
        const item = items[itemIdx];
        const name = item[0];
        const correctText = item[arch.field];

        // Pick a template deterministically but differently per item and
        // variant, so the same fact never reuses the same wording.
        const tmplIdx = (hashStr(`${categorySlug}-t-${itemIdx}-${archIdx}`) + variant * 3) % TEMPLATE_COUNT;

        // Rotate distractor sets per variant: variant 0 and variant 1 draw
        // different wrong answers, so repeated facts are not near-clones.
        const offsets = variant === 0 ? [7, 13, 19] : [3, 11, 23];
        const distractorIdx = offsets.map((o) => {
          let di = (itemIdx + o) % N;
          if (di === itemIdx) di = (di + 1) % N;
          return di;
        });
        // Guard against duplicate distractor indices in tiny banks.
        const seen = new Set<number>([itemIdx]);
        for (let d = 0; d < distractorIdx.length; d++) {
          while (seen.has(distractorIdx[d])) distractorIdx[d] = (distractorIdx[d] + 1) % N;
          seen.add(distractorIdx[d]);
        }
        const distractors = distractorIdx.map((di) => items[di][arch.field]);

        const seed = hashStr(`${categorySlug}-${variant}-${itemIdx}-${archIdx}`);
        const optionTexts = seededShuffle([correctText, ...distractors], seed);
        const letters = ["a", "b", "c", "d"];
        const choices = optionTexts.map((text, i) => ({ id: letters[i], text }));
        const correctChoiceId = choices[optionTexts.indexOf(correctText)].id;

        const stem = arch.templates[tmplIdx].replace("{name}", name);
        const difficulty = (["medium", "easy", "medium", "hard"] as const)[counter % 4];
        const strategy = arch.strategies[(itemIdx + variant) % arch.strategies.length];
        const isFree = counter < 4;

        rows.push({
          categoryId,
          stem,
          choices,
          correctChoiceId,
          rationale: arch.rationale(name, correctText),
          strategy,
          difficulty,
          tags: [arch.key, categorySlug],
          isFree,
        });

        counter++;
      }
    }
  }

  return rows;
}


// Metadata used to (re)create categories without touching other data.
export const CATEGORY_META = CATEGORY_DEFS.map(({ slug, name, description, clientNeed, icon }) => ({ slug, name, description, clientNeed, icon }));

// Build the full question row set for every category, given a map of
// category slug -> category id.
export function buildAllQuestionRows(categoryIdBySlug: Map<string, string>) {
  const rows: (typeof questions.$inferInsert)[] = [];
  for (const def of CATEGORY_DEFS) {
    const categoryId = categoryIdBySlug.get(def.slug);
    if (!categoryId) throw new Error(`Missing category id for ${def.slug}`);
    const target = def.items.length * ARCHETYPES.length * MAX_VARIANTS_PER_FACT;
    rows.push(...buildCategoryQuestions([...def.items], target, categoryId, def.slug));
  }
  return rows;
}