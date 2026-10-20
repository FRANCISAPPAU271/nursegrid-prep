import { AUTHORED_QUESTIONS } from "./authored-bank";
const out = (AUTHORED_QUESTIONS as any[]).map(q => ({
  id: q.authoredId, stem: q.stem, key: q.correctChoiceId,
  choices: q.choices.map((c: any) => ({ id: c.id, text: c.text })),
  rationale: q.rationale || "", strategy: q.strategy || "",
}));
console.log(JSON.stringify(out));
