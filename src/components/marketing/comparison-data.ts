// Side-by-side comparison against the two things students actually use instead.
//
// Deliberately factual rather than snarky: every claim in the NurseGrid column
// is something the app genuinely does, so the table survives a sceptical reader
// who has used a PDF dump before. The competitor columns describe categories of
// product, not named competitors, so nothing here can be read as a false
// claim about a specific company.

export type ComparisonRow = {
  label: string;
  pdf: string | false;
  foreign: string | false;
  nursegrid: string;
};

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Written for the NMC Ghana syllabus",
    pdf: "Sometimes, unattributed",
    foreign: false,
    nursegrid: "Every question, by category",
  },
  {
    label: "Explains why each wrong option is wrong",
    pdf: false,
    foreign: "Yes, US-style",
    nursegrid: "Yes — per distractor",
  },
  {
    label: "20-second test-taking strategy per question",
    pdf: false,
    foreign: false,
    nursegrid: "Built into every item",
  },
  {
    label: "Pay with MTN Mobile Money",
    pdf: "Cash or MoMo to a seller",
    foreign: false,
    nursegrid: "MoMo or Visa",
  },
  {
    label: "Automatic renewal",
    pdf: "n/a",
    foreign: "Usually yes",
    nursegrid: "Never — one-time payment",
  },
  {
    label: "Works offline / low data",
    pdf: "Yes",
    foreign: false,
    nursegrid: "Yes — installs from browser",
  },
  {
    label: "Tracks which topics you're losing marks in",
    pdf: false,
    foreign: "Yes",
    nursegrid: "Weakness radar by category",
  },
  {
    label: "Plans clinicals, assignments and deadlines too",
    pdf: false,
    foreign: false,
    nursegrid: "Task board, free forever",
  },
];
