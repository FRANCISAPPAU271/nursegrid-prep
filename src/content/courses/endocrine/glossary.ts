import type { GlossaryEntry } from "../types";

// ---------------------------------------------------------------------------
// Glossary — Endocrine & Diabetes Nursing
//
// Reference material, not a learning activity. Every entry is written to be
// readable on its own, because a learner arrives here from a name they met in
// a lesson and cannot place. Definitions follow the phrasing used in the
// lessons themselves so the two never disagree.
//
// `lesson` points at the lesson that teaches the term; the page renders it as
// a back-link. `alsoKnownAs` carries the abbreviations and spellings a
// learner actually types into the search box (DKA, HHS, HbA1c, "sugar
// diabetes"), which is the difference between a glossary that gets used and
// one that gets skipped.
// ---------------------------------------------------------------------------

export const glossary: GlossaryEntry[] = [
  {
    term: "Addison's disease",
    alsoKnownAs: ["primary adrenal insufficiency", "adrenal insufficiency"],
    definition:
      "Failure of the adrenal cortex itself, so cortisol and aldosterone are both low. The pituitary drives ACTH up in response, which is why the skin darkens. Postural drop, weight loss, salt craving and fatigue are the usual story.",
    lesson: "adrenal-disorders",
  },
  {
    term: "Adrenal crisis",
    alsoKnownAs: ["addisonian crisis"],
    definition:
      "Sudden, life-threatening collapse from cortisol deficiency, usually triggered by infection, surgery, vomiting or stopping steroids abruptly. Hypotension that does not answer to fluid alone is the clue; hydrocortisone must go in before any result comes back.",
    lesson: "the-crashing-endocrine-patient",
  },
  {
    term: "Basal-bolus regimen",
    alsoKnownAs: ["basal bolus", "MDI", "multiple daily injections"],
    definition:
      "A long-acting insulin once or twice a day for background cover, plus a rapid-acting dose with each meal to match what is eaten. It mimics the normal pancreas more closely than two mixed injections a day and is the standard in type 1 diabetes and in hospital.",
    lesson: "insulin-therapy",
  },
  {
    term: "C-peptide",
    definition:
      "A fragment released whenever the body makes its own insulin, so it works as a marker of endogenous insulin production. Low or absent C-peptide supports type 1 diabetes; a high level suggests insulin resistance rather than deficiency.",
    lesson: "types-diagnosis-and-risk",
  },
  {
    term: "Calcitonin",
    definition:
      "A hormone from the thyroid's parafollicular C cells that lowers blood calcium by discouraging bone breakdown. It is not the main calcium regulator — parathyroid hormone is — and it is measured to follow medullary thyroid carcinoma.",
    lesson: "calcium-and-parathyroid-disorders",
  },
  {
    term: "Chvostek's sign",
    definition:
      "Facial twitching when the cheek is tapped just in front of the ear, from increased nerve excitability in low calcium. Seen after thyroid surgery, when the parathyroids have been bruised or removed.",
    lesson: "nursing-the-thyroidectomy-patient",
  },
  {
    term: "Cortisol",
    definition:
      "The adrenal stress hormone. It raises blood glucose, holds blood pressure up by sensitising vessels to adrenaline, and damps inflammation. Too much causes Cushing's syndrome; too little causes Addison's disease and, if sudden, adrenal crisis.",
    lesson: "endocrine-anatomy-physiology-and-feedback",
  },
  {
    term: "Dawn phenomenon",
    definition:
      "Early-morning hyperglycaemia caused by the overnight surge of growth hormone and cortisol, which push glucose up before waking. Insulin is increased to control it — the opposite response to the Somogyi effect.",
    lesson: "insulin-therapy",
  },
  {
    term: "Diabetes insipidus",
    alsoKnownAs: ["DI", "cranial diabetes insipidus", "nephrogenic diabetes insipidus"],
    definition:
      "Passing large volumes of dilute urine because antidiuretic hormone is either not made (cranial) or not responded to by the kidney (nephrogenic). Serum sodium runs high and urine is weak; the urine is never concentrated, however dehydrated the patient becomes.",
    lesson: "pituitary-disorders-and-water-balance",
  },
  {
    term: "Diabetic foot",
    definition:
      "Ulceration and infection of the foot caused by the combination of nerve damage, poor blood supply and pressure. It is the commonest reason a Ghanaian diabetic patient loses a leg, and it is preventable by daily inspection, well-fitting footwear and early reporting.",
    lesson: "the-diabetic-foot",
  },
  {
    term: "Diabetic ketoacidosis",
    alsoKnownAs: ["DKA"],
    definition:
      "A metabolic emergency of absolute insulin deficiency: glucose rises, fat is broken down, ketones accumulate and the blood turns acid. Deep sighing breathing, ketotic breath and dehydration are the picture. Treated in sequence — fluids, then insulin, then potassium, with dextrose added once glucose falls.",
    lesson: "diabetic-ketoacidosis-and-hyperosmolar-state",
  },
  {
    term: "Dipeptidyl peptidase-4 inhibitor",
    alsoKnownAs: ["DPP-4 inhibitor", "gliptin", "sitagliptin"],
    definition:
      "An oral drug that blocks the enzyme destroying incretin hormones, so more insulin is released after a meal and less glucagon is produced. It rarely causes hypoglycaemia on its own because it works only when glucose is high.",
    lesson: "non-insulin-glucose-lowering-drugs",
  },
  {
    term: "Glucagon",
    definition:
      "The hormone that opposes insulin: it mobilises glucose from the liver when levels fall. It is also a drug, given as an intramuscular injection to a hypoglycaemic patient with no working intravenous line who is not able to swallow safely.",
    lesson: "hypoglycaemia",
  },
  {
    term: "Glucose tolerance test",
    alsoKnownAs: ["OGTT", "oral glucose tolerance test"],
    definition:
      "A drink of a known glucose load taken after an overnight fast, with blood glucose measured before and two hours after. It is the test used to diagnose diabetes in pregnancy, where fasting and random values alone are not enough.",
    lesson: "diabetes-in-pregnancy",
  },
  {
    term: "Glycated haemoglobin",
    alsoKnownAs: ["HbA1c", "A1c"],
    definition:
      "The share of haemoglobin that glucose has become attached to over the red cell's life, so it reports average control over the past two to three months. It is not a diagnosis tool in pregnancy, and it misleads in sickle cell disease and after recent transfusion.",
    lesson: "microvascular-and-macrovascular-complications",
  },
  {
    term: "Goitre",
    definition:
      "An enlarged thyroid gland. It appears in iodine deficiency, in Graves' disease and in Hashimoto's thyroiditis, so the swelling alone does not tell you whether the patient is over- or under-active — the hormone results do.",
    lesson: "thyroid-disorders",
  },
  {
    term: "Graves' disease",
    definition:
      "The commonest cause of an overactive thyroid, from antibodies that stimulate the TSH receptor. Goitre, staring eyes with lid retraction and pretibial swelling are the signs that distinguish it from other forms of thyrotoxicosis.",
    lesson: "thyroid-disorders",
  },
  {
    term: "Growth hormone",
    alsoKnownAs: ["GH", "somatotropin"],
    definition:
      "A pituitary hormone that promotes growth and raises blood glucose by opposing insulin. In excess before puberty it causes gigantism, and in adulthood acromegaly with enlarged hands, feet and jaw.",
    lesson: "pituitary-disorders-and-water-balance",
  },
  {
    term: "Hashimoto's thyroiditis",
    alsoKnownAs: ["hashimoto", "chronic lymphocytic thyroiditis"],
    definition:
      "Autoimmune destruction of the thyroid, producing a firm goitre and eventual hypothyroidism. It is the commonest cause of an underactive thyroid in iodine-sufficient areas.",
    lesson: "thyroid-disorders",
  },
  {
    term: "Hyperosmolar hyperglycaemic state",
    alsoKnownAs: ["HHS", "HONK", "hyperosmolar coma"],
    definition:
      "Extreme hyperglycaemia with severe dehydration and very high serum osmolality, typically in an older type 2 patient, with enough insulin present to prevent significant ketosis. Glucose is higher and ketones lower than in DKA, and fluids lead the treatment.",
    lesson: "diabetic-ketoacidosis-and-hyperosmolar-state",
  },
  {
    term: "Hypoglycaemia",
    alsoKnownAs: ["hypo", "low blood sugar"],
    definition:
      "Blood glucose low enough to threaten the brain, conventionally below 3.9 mmol/L for action. Sweating, tremor and hunger come first; confusion, behaviour change, seizures and coma follow. Treat it — do not wait for a laboratory result.",
    lesson: "hypoglycaemia",
  },
  {
    term: "Insulin",
    definition:
      "The only hormone that lowers blood glucose, released by pancreatic beta cells. It moves glucose into muscle and fat, stores glycogen, and stops fat breakdown. Injected insulin is a high-alert medicine: a wrong dose can kill, so it is always checked independently by two nurses.",
    lesson: "insulin-therapy",
  },
  {
    term: "Insulin resistance",
    definition:
      "Cells respond poorly to insulin, so the pancreas must produce more to keep glucose normal. It underlies type 2 diabetes, and when the beta cells can no longer keep up, glucose rises and the disease becomes apparent.",
    lesson: "types-diagnosis-and-risk",
  },
  {
    term: "Isophane insulin",
    alsoKnownAs: ["NPH", "intermediate-acting insulin", "insulin NPH"],
    definition:
      "An intermediate-acting insulin, cloudy in the vial and usually given twice daily to provide background cover in regimens where a long-acting analogue is unaffordable. Because it is cloudy it must be rolled, never shaken, before drawing up.",
    lesson: "insulin-therapy",
  },
  {
    term: "Kussmaul breathing",
    definition:
      "Deep, rapid, sighing breathing that blows off carbon dioxide to compensate for the metabolic acidosis of ketoacidosis. It is a sign of severity, not of breathing difficulty, and it settles as the acidosis is corrected.",
    lesson: "diabetic-ketoacidosis-and-hyperosmolar-state",
  },
  {
    term: "Levothyroxine",
    alsoKnownAs: ["thyroxine", "T4 replacement", "eltroxin"],
    definition:
      "Synthetic thyroxine used to replace thyroid hormone. Taken once daily on an empty stomach, well separated from iron, calcium and antacids, which bind it and make the dose unreliable. Correcting a low thyroid takes weeks, not days.",
    lesson: "thyroid-disorders",
  },
  {
    term: "Metformin",
    definition:
      "The usual first oral drug for type 2 diabetes. It reduces glucose production by the liver and improves insulin sensitivity. Stopped when a patient is vomiting, dehydrated or facing contrast imaging, because in those states it can contribute to lactic acidosis.",
    lesson: "non-insulin-glucose-lowering-drugs",
  },
  {
    term: "Myxoedema coma",
    definition:
      "The decompensated extreme of untreated hypothyroidism: reduced consciousness, low temperature, slow pulse and shallow breathing in a patient with long-standing thyroid failure. It is rare, easily missed, and treated with thyroid hormone and hydrocortisone before results return.",
    lesson: "the-crashing-endocrine-patient",
  },
  {
    term: "Negative feedback",
    definition:
      "The loop by which the end product of a hormone chain switches off its own production. It is how a result form is read in pairs: when the target hormone is low and the stimulating hormone is high, the fault is in the gland, not the pituitary.",
    lesson: "endocrine-anatomy-physiology-and-feedback",
  },
  {
    term: "Osmotic diuresis",
    definition:
      "Passing large volumes of urine because unabsorbable solute — in practice glucose — holds water in the tubule and carries it out. It is the mechanism that dehydrates a hyperglycaemic patient while making them thirsty, and the reason DKA and HHS are states of fluid loss first.",
    lesson: "types-diagnosis-and-risk",
  },
  {
    term: "Parathyroid hormone",
    alsoKnownAs: ["PTH"],
    definition:
      "The main regulator of blood calcium. It draws calcium out of bone, increases reabsorption by the kidney and activates vitamin D so the gut absorbs more. High PTH with low calcium means the parathyroids have been damaged — a classic finding after thyroid surgery.",
    lesson: "calcium-and-parathyroid-disorders",
  },
  {
    term: "Phaeochromocytoma",
    alsoKnownAs: ["pheochromocytoma"],
    definition:
      "A tumour of the adrenal medulla that releases adrenaline and noradrenaline in bursts, causing attacks of severe headache, sweating, palpitations and very high blood pressure. The blood pressure pattern is paroxysmal rather than steady.",
    lesson: "adrenal-disorders",
  },
  {
    term: "Polyuria and polydipsia",
    definition:
      "Passing large volumes of urine and drinking heavily in response. The pair appears in untreated diabetes, in diabetes insipidus and in hypercalcaemia, so it narrows the problem without naming it — the pattern of the urine and the sodium decide which.",
    lesson: "types-diagnosis-and-risk",
  },
  {
    term: "Prediabetes",
    alsoKnownAs: ["impaired glucose tolerance", "impaired fasting glucose"],
    definition:
      "Glucose levels above normal but below the diabetic threshold. It is worth finding, because weight, diet and activity at this stage can prevent or delay progression — which is the whole point of screening a person with a family history.",
    lesson: "types-diagnosis-and-risk",
  },
  {
    term: "SIADH",
    alsoKnownAs: ["syndrome of inappropriate antidiuretic hormone"],
    definition:
      "Too much antidiuretic hormone from a cause other than dehydration — head injury, chest infection, some drugs and some cancers. The patient retains water, so serum sodium falls and urine is concentrated. Fluids are restricted, not pushed.",
    lesson: "pituitary-disorders-and-water-balance",
  },
  {
    term: "Sick day rules",
    definition:
      "The instruction to patients on insulin or certain diabetes drugs about what to do when they are ill — never stop insulin, test more often, maintain fluids and seek help early. Most diabetic emergencies begin with an illness that was managed by stopping the treatment.",
    lesson: "diabetes-in-hospital",
  },
  {
    term: "Sick-day rules",
    definition:
      "The instructions every patient on insulin needs before they go home: never stop the insulin when ill, test more often, drink plenty, and know the warning signs that mean coming to hospital. Illness raises glucose even when the patient is eating nothing, which is the point most people get wrong.",
    lesson: "living-well-with-diabetes",
  },
  {
    term: "Sliding scale insulin",
    definition:
      "A variable insulin regimen adjusted to measured blood glucose, used in hospital when a patient is acutely unwell or not eating normally. It is a temporary measure with frequent monitoring, not a long-term prescription.",
    lesson: "endocrine-drugs-and-calculations",
  },
  {
    term: "Somogyi effect",
    alsoKnownAs: ["rebound hyperglycaemia", "somogyi"],
    definition:
      "High morning glucose produced by a rebound after unrecognised overnight hypoglycaemia. The treatment is to reduce the evening insulin, not increase it — the opposite of the dawn phenomenon, and the two are told apart from a 3 a.m. glucose value.",
    lesson: "insulin-therapy",
  },
  {
    term: "Thyroid function test",
    definition:
      "Blood tests of thyroid stimulating hormone and free thyroxine, used to place a patient on the spectrum from hypothyroid to hyperthyroid. The TSH moves first and in the opposite direction to the thyroid hormones, which is what makes it the most sensitive single test.",
    lesson: "endocrine-assessment-and-investigations",
  },
  {
    term: "Thyroid storm",
    alsoKnownAs: ["thyrotoxic crisis"],
    definition:
      "Decompensated thyrotoxicosis with fever, a racing heart, agitation or delirium and heart failure, usually provoked by infection, surgery or childbirth. It kills quickly and is treated on suspicion, before thyroid function results are available.",
    lesson: "the-crashing-endocrine-patient",
  },
  {
    term: "Thyroid-stimulating hormone",
    alsoKnownAs: ["TSH", "thyrotropin"],
    definition:
      "The pituitary hormone that drives the thyroid. It is the most sensitive first test of thyroid function, and it moves in the opposite direction to the thyroid hormones: high TSH means an underactive thyroid, low TSH an overactive one.",
    lesson: "thyroid-disorders",
  },
  {
    term: "Thyroxine",
    alsoKnownAs: ["T4"],
    definition:
      "The main hormone the thyroid secretes, converted in the tissues to the active form T3. It sets metabolic rate, so too little produces cold intolerance, constipation, slow pulse and weight gain, and too much produces the reverse.",
    lesson: "endocrine-anatomy-physiology-and-feedback",
  },
  {
    term: "Triiodothyronine",
    alsoKnownAs: ["T3"],
    definition:
      "The active thyroid hormone, mostly made in the tissues from thyroxine. It acts faster and is the form that drives the symptoms of thyrotoxicosis.",
    lesson: "endocrine-anatomy-physiology-and-feedback",
  },
  {
    term: "Trousseau's sign",
    definition:
      "Spasm of the hand and wrist when a blood pressure cuff is inflated above systolic pressure, from low calcium. It is looked for alongside Chvostek's sign in the patient who is tingling after thyroid surgery.",
    lesson: "nursing-the-thyroidectomy-patient",
  },
  {
    term: "Type 1 diabetes",
    definition:
      "Absolute insulin deficiency from autoimmune destruction of the beta cells. It comes on usually in the young and quickly, and it always needs insulin from the day of diagnosis — there is no tablet that will do.",
    lesson: "types-diagnosis-and-risk",
  },
  {
    term: "Type 2 diabetes",
    definition:
      "Diabetes from insulin resistance with a relative, progressive loss of insulin production. It comes on slowly, is strongly linked to weight and family history, and is treated in steps from lifestyle through oral drugs to insulin.",
    lesson: "types-diagnosis-and-risk",
  },
];
