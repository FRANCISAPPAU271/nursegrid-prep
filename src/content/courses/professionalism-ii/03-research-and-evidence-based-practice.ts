import type { CourseModule } from "../types";

export const researchAndEvidenceBasedPractice: CourseModule = {
  slug: "research-and-evidence-based-practice",
  title: "Research and evidence-based practice",
  summary:
    "From tradition to evidence: the six-step research process with quantitative versus qualitative designs, sampling and tools, non-negotiable research ethics with committee approval — then EBP's three legs and five steps, PICO question-building, three-minute appraisal with red flags, the trust pyramid from Ghana protocols to tradition, and barrier-beaters with the journal-club recipe.",
  lessons: [
    {
      slug: "the-research-process",
      title: "The research process",
      minutes: 20,
      objectives: [
        "Run research's six steps in order.",
        "Choose quantitative versus qualitative designs.",
        "Apply sampling and tool basics.",
        "Clear research ethics before collecting data.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Six steps, in order, no skipping",
          paragraphs: [
            "<strong>1. Topic + question</strong> — find the gap (ward problem, literature silence, policy need) and sharpen it into an answerable question ('what is the prevalence of…?' / 'why do mothers…?' / 'does X reduce Y?'). <strong>2. Literature review</strong> — what is already known (databases, journals, theses, WHO/GHS reports) so you extend knowledge instead of repeating it; synthesize, don't list. <strong>3. Design + sample</strong> — the blueprint (below): who, how many, how chosen, what measured. <strong>4. Ethics approval FIRST</strong> — committee clearance before a single questionnaire (below). <strong>5. Collect + analyse</strong> — tools piloted, data clean, statistics honest (quant) or themes rigorous (qual). <strong>6. Share + use</strong> — ward presentation → conference → journal; findings implemented, negative results published too (hidden failures re-harm future patients). <strong>Audit ≠ research</strong>: audit measures practice against a standard (hand-hygiene compliance vs protocol) without claiming new knowledge — still needs permission + confidentiality, but not full committee review. Nurses research nursing: pressure care, falls, feeding, pain, education, adherence — the profession's questions answered by the profession.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0019.svg",
          alt: "Research six steps: topic plus question, literature review, design plus sample, ethics approval, collect plus analyse, share plus use. Quantitative how-many with RCTs cohorts surveys generalising on validity plus reliability; qualitative why-how with interviews focus groups deep meaning on trustworthiness. Designs ladder weak to strong: case report, cross-sectional, case-control, cohort, RCT, systematic review. Sampling random purposive convenience. Tools piloted. Ethics: committee first, informed consent, confidentiality codes, vulnerable shields, no fabrication. Audit versus research distinguished.",
          caption: "Design matches question, ethics precedes data, and shared findings change care.",
        },
        {
          type: "text",
          heading: "Designs, sampling, tools",
          paragraphs: [
            "<strong>Quantitative</strong> (how many/how much?): numbers, counts, trials, surveys — strength is generalizing; ruled by <strong>validity</strong> (measures what it claims) + <strong>reliability</strong> (repeatable results). <strong>Qualitative</strong> (why/how?): stories, interviews, focus groups, phenomenology, ethnography — strength is deep meaning; ruled by <strong>trustworthiness</strong> (credibility, transferability, confirmability). Designs ladder (weak → strong for CAUSE): case report → cross-sectional (snapshot NOW — outbreak? do this today) → case-control → cohort → <strong>RCT</strong> (randomized controlled trial — gold standard for interventions) → <strong>systematic review/meta-analysis</strong> (all trials pooled — strongest). Match design to question: prevalence needs cross-sectional, 'why do mothers delay?' needs qualitative, 'does chlorhexidine beat povidone?' needs RCT. <strong>Sampling</strong>: random (fair, generalizes — lottery from the population), purposive (information-rich cases — the experts, the defaulters), convenience (whoever is handy — cheap, biased: admit limits openly). <strong>Tools</strong>: questionnaires (PILOT on 10 first — unclear questions waste hundreds), observation checklists, interview guides, meters/monitors (calibrated + pretested). Sample size: power it (quant) or saturate it (qual — stop when no new themes).",
          ],
        },
        {
          type: "text",
          heading: "Ethics: approval before data, always",
          paragraphs: [
            "Research ethics are PRO-I consent + confidentiality + non-maleficence applied to inquiry: <strong>committee approval FIRST</strong> — GHS Ethics Review Committee or institutional IRB; no approval, no data, no excuses (retrospective 'approval' is misconduct). <strong>Informed consent</strong> — purpose, procedures, risks, benefits, voluntary, withdraw-anytime, contact person; written (or witnessed thumbprint) in a language understood; parental consent + child assent for minors. <strong>Confidentiality</strong> — codes not names, locked storage, de-identified publication (Act 843, PRO-I M4/M6). <strong>No harm</strong> — vulnerable groups need extra shields: children, prisoners, the critically ill, the bereaved; sensitive topics (abuse, HIV, abortion) need referral pathways ready. <strong>Honesty</strong> — no fabrication, falsification or plagiarism: career-ending fraud that poisons care (fabricated trials kill real patients). <strong>Beneficence + justice</strong> — participants should benefit (feedback of findings, improved care), burdens shared fairly (don't over-research the poor while the wealthy opt out). Student projects need supervisor + school clearance too — 'just a student survey' still touches human dignity.",
          ],
        },
        {
          type: "table",
          heading: "Question to design: match drill",
          columns: ["Question", "Design", "Why"],
          rows: [
            ["How many ward patients fell this quarter?", "Cross-sectional audit/survey", "Prevalence snapshot — fast, cheap, actionable"],
            ["Why do mothers deliver at home despite free care?", "Qualitative interviews/FGDs", "'Why' needs stories, not counts"],
            ["Does turning q2h cut pressure ulcers vs q4h?", "RCT", "Cause + intervention = randomize to prove"],
            ["Do night-shift nurses burn out faster?", "Cohort (follow over time)", "Exposure → outcome over time"],
            ["What does ALL evidence say on cord care?", "Systematic review", "Pooling beats cherry-picking single trials"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Your first study: start ward-small",
          body: "Don't begin with an RCT — begin with a question your ward asks monthly: audit hand hygiene, survey discharge understanding, interview defaulters, count falls by bay. Small + ethical + finished beats grand + stalled: one completed ward study with implemented findings outranks three abandoned theses. Present findings at ward meeting (graphs, one page), implement ONE change, re-audit, log it all as CPD + portfolio gold (PRO-I M7). Researchers are made by finishing, not by starting.",
        },
      ],
      keyPoints: [
        "Six steps: topic → review → design → ethics FIRST → collect/analyse → share/use.",
        "Quantitative (how many, validity + reliability) vs qualitative (why/how, trustworthiness).",
        "Ladder: case report → cross-sectional → case-control → cohort → RCT → systematic review.",
        "Sampling: random (fair), purposive (rich), convenience (biased — admit); pilot all tools.",
        "Ethics: committee approval, informed consent, coded confidentiality, vulnerable shields, zero fraud.",
        "Audit measures vs standard; nurses research nursing questions; finish ward-small first.",
      ],
      quiz: {
        keywords: ["research", "literature review", "quantitative", "qualitative", "RCT", "cohort", "cross-sectional", "systematic review", "sampling", "validity", "reliability", "ethics committee", "IRB", "informed consent", "audit"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "evidence-based-practice",
      title: "Evidence-based practice",
      minutes: 20,
      objectives: [
        "Define EBP's three legs.",
        "Run the five EBP steps with PICO.",
        "Appraise papers in three minutes.",
        "Beat barriers with the journal-club recipe.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Three legs, one stool",
          paragraphs: [
            "Evidence-based practice = <strong>best available evidence</strong> + <strong>clinical expertise</strong> + <strong>patient values/preferences</strong> — remove any leg and the stool topples: evidence without expertise misapplies trials to wrong patients; expertise without evidence fossilizes ('we've always done it'); either without patient values coerces (the 'compliant' patient who never agreed). EBP is NOT 'research says, so obey' — it is structured judgment: the nurse who knows the pressure-ulcer guideline AND recognizes this cachectic elder's skin AND negotiates turning with his pain and sleep practises EBP; the nurse who turns q2h by rote while he weeps practises protocol without practice. Five steps run every question: <strong>1. ASK</strong> (PICO — below) → <strong>2. ACQUIRE</strong> (guidelines + reviews first — Ghana STG, WHO, protocols — then primary studies) → <strong>3. APPRAISE</strong> (valid? big? useful here?) → <strong>4. APPLY</strong> (blend with expertise + patient values, shared decision) → <strong>5. ASSESS</strong> (did it work? audit, adjust, share). One cycle per clinical puzzle; ward-wide, monthly via journal club.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0020.svg",
          alt: "EBP equals evidence plus expertise plus values. Five steps: Ask with PICO, Acquire guidelines and reviews first, Appraise valid big useful-here, Apply blended with shared decision, Assess with audit. PICO example on early mobilisation versus bed rest for DVT. Appraisal three questions with red flags: tiny samples, hidden funding, surrogate outcomes, missing harms, predatory journals. Trust pyramid: Ghana STG and WHO, systematic reviews, RCTs, cohorts, opinion, tradition last. Barriers beaten: journal club, HINARI access, buddies, nursing-owned evidence, pilot plus data.",
          caption: "Ask answerably, acquire hierarchically, appraise skeptically, apply jointly, assess honestly.",
        },
        {
          type: "text",
          heading: "PICO and three-minute appraisal",
          paragraphs: [
            "<strong>PICO</strong> turns worry into searchable question: <strong>P</strong>opulation ('in post-op adults…') + <strong>I</strong>ntervention ('…does early mobilisation…') + <strong>C</strong>omparison ('…versus bed rest…') + <strong>O</strong>utcome ('…cut DVT/pneumonia?') — add <strong>T</strong>ime where apt ('…within 48 hours?'). Un-PICO'd questions ('is mobilisation good?') drown in noise; PICO'd ones retrieve answers. <strong>Appraise</strong> with three questions: <strong>1. VALID?</strong> (right patients? randomized/blinded? follow-up complete? harms reported? intention-to-treat?) → <strong>2. BIG?</strong> (effect size + confidence intervals — statistical significance ≠ clinical importance: 'p<0.05' on a 1 mmHg drop changes nothing) → <strong>3. USEFUL HERE?</strong> (my patients? my resources? my setting? — a US ICU trial with 1:1 nursing may not fit a Ghana district ward with 1:40). <strong>Red flags</strong>: tiny samples, undisclosed industry funding, surrogate outcomes ('lowers X' ≠ 'saves lives'), missing harms, predatory journals (pay-to-publish, no peer review — check indexing). Trust pyramid: Ghana STG/protocols + WHO → systematic reviews → RCTs → cohorts → expert opinion → 'we've always done it' (history, not justification).",
          ],
        },
        {
          type: "text",
          heading: "Barriers, beaters, journal club",
          paragraphs: [
            "<strong>No time?</strong> → journal club 30 min/month, one paper, ward-relevant, during handover overlap. <strong>No access?</strong> → WHO HINARI (free journals for Ghana institutions), open access, library, protocols first (the STG answers 80% of drug questions). <strong>No skill?</strong> → appraisal buddies (pair novice + confident), CPD courses, this module's three questions. <strong>'Doctors decide'?</strong> → nurses own nursing-care evidence: pressure care, falls, feeding, pain, education, adherence — no permission needed to read about your own practice. <strong>No authority?</strong> → pilot small, audit, present data: data persuades where rank resists ('falls fell 40% in Bay B' beats 'please trust me'). Tradition retired by evidence: routine episiotomy, NPO-from-midnight for all, saline-for-everyone, routine perineal shaving — each fell where trials spoke. <strong>Journal club recipe</strong>: 1 paper (circulated a week ahead) + 3 appraisal questions + 'what changes Monday?' (ONE action) + owner + audit date. Monthly rhythm, attendance logged as CPD, changes celebrated. The ward that reads together heals together.",
          ],
        },
        {
          type: "table",
          heading: "Tradition vs evidence: famous falls",
          columns: ["'Always done'", "Evidence said", "EBP lesson"],
          rows: [
            ["Routine episiotomy for all primips", "Restrictive policy: less trauma, faster recovery", "Routine ≠ right; indications individualize"],
            ["NPO from midnight for everyone", "Fasting harms; liberalized fluids to 2h safe", "Blanket rules bow to physiology + trials"],
            ["Bed rest after surgery/MI", "Early mobilisation cuts DVT, pneumonia, stay", "Rest can injure; movement medicates"],
            ["Saline lock flushes + routine IVs", "Clinically-indicated replacement as safe", "Question every routine with PICO"],
            ["Nurses 'just follow orders'", "Nurse-led protocols match/exceed outcomes", "Nursing evidence authorizes nursing action"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Predatory journals: pay-to-publish poison",
          body: "Predatory journals accept anything for a fee with fake or no peer review — their 'evidence' pollutes practice. Spot them: aggressive email solicitations ('Dear Esteemed…'), fake impact factors, no indexing (PubMed/Scopus/DOAJ absent), 48-hour 'acceptance', Ghana-mimicking titles. Before citing or publishing: check indexing, ask your librarian/supervisor, consult Think-Check-Submit. One predatory citation in your thesis or protocol can fail examinations and endanger patients — verify the vessel before trusting the contents.",
        },
      ],
      keyPoints: [
        "EBP = best evidence + clinical expertise + patient values; all three legs always.",
        "Five steps: Ask (PICO) → Acquire (guidelines first) → Appraise → Apply (shared) → Assess (audit).",
        "PICO: population, intervention, comparison, outcome (+ time) — searchable and auditable.",
        "Appraise: valid? big? useful here? — watch tiny samples, hidden funding, surrogates, predators.",
        "Trust pyramid: STG/WHO → reviews → RCTs → cohorts → opinion → tradition last.",
        "Journal club monthly: 1 paper + 3 questions + 'what changes Monday?' + audit date.",
      ],
      quiz: {
        keywords: ["EBP", "evidence-based", "PICO", "appraisal", "validity", "effect size", "guidelines", "STG", "WHO", "systematic review", "predatory", "journal club", "HINARI", "barriers", "tradition"],
        categories: ["fundamentals"],
      },
    },
  ],
};
