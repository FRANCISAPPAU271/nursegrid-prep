import type { CourseModule } from "../types";

export const ethicalPrinciples: CourseModule = {
  slug: "ethical-principles",
  title: "Ethical principles, dilemmas and moral distress",
  summary:
    "The moral toolkit: autonomy with consent, refusal and capacity, beneficence and non-maleficence with double effect and futility, justice with triage and fairness, fidelity and veracity with promises and truth-telling — then professional values, the 4-box decision tool with a worked case, the dilemma bank from DNR to resource allocation, moral distress with its coping ladder, and the limits of conscientious objection.",
  lessons: [
    {
      slug: "the-six-principles",
      title: "The six principles",
      minutes: 20,
      objectives: [
        "Define autonomy, beneficence, non-maleficence, justice, fidelity and veracity.",
        "Explain informed consent, refusal and capacity assessment.",
        "Apply double effect, futility and least-restrictive reasoning.",
        "Resolve the four classic collisions the exams love.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Autonomy: his life, his call",
          paragraphs: [
            "<strong>Autonomy</strong> (self-rule) makes the competent patient's <strong>informed consent</strong> the gate to every touch: <strong>disclosure</strong> (what, why, benefits, risks, alternatives, doing nothing — in language understood), <strong>understanding</strong> (checked back, not assumed), <strong>voluntariness</strong> (no coercion — including family or financial pressure), <strong>competence/capacity</strong> (decision- and time-specific), <strong>consent</strong> (given, documented, withdrawable). Consent may be <strong>implied</strong> (offered arm for BP), <strong>verbal</strong> (most bedside care — document it) or <strong>written</strong> (surgery, anaesthesia, procedures with material risk, research, photography). The nurse's role: <strong>witness + advocate + checker</strong> — confirm understanding, spot coercion, pause the trolley where consent wobbles, and honour <strong>refusal</strong>: the competent adult may refuse ANYTHING, including life-saving treatment (Jehovah's Witness transfusion, DNR acceptance) — assess capacity, inform of consequences, offer alternatives, document, respect. <strong>Capacity</strong>: understand + retain + weigh + communicate — support first (hearing aid, interpreter, right time of day, pain controlled), judge last; incapacity triggers <strong>best-interests</strong> process (consult family/surrogates/team, least-restrictive option, document reasoning) — never the nurse's solo decree. Children: <strong>evolving capacity</strong> + parental responsibility; refusal of life-saving care goes to <strong>court</strong>, not the ward round.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0003.svg",
          alt: "Six principles: autonomy (self-rule, consent, refusal, capacity), beneficence (do good, advocate), non-maleficence (do no harm, safety, restraint minimum), justice (fair share, triage, no discrimination), fidelity (promises, loyalty, confidentiality), veracity (truth, bad news, error disclosure). Collisions: autonomy versus beneficence (refusal wins), veracity versus non-maleficence (truth wins, delivered with SPIKES), justice versus fidelity (fair criteria), confidentiality versus protection (protection wins, minimum disclosure). Footer: capacity support-first, children to court, double effect intent, futility process, euthanasia illegal.",
          caption: "Six lenses, four collisions — and capacity supported before it is ever judged.",
        },
        {
          type: "text",
          heading: "Beneficence, non-maleficence and the space between",
          paragraphs: [
            "<strong>Beneficence</strong> (do good): prevent harm, remove harm, promote welfare — the advocate who chases the delayed scan, the nurse who notices the unleast pressure area. <strong>Non-maleficence</strong> (do no harm): safety systems, <strong>restraint minimization</strong> (least-restrictive: de-escalation → observation → chemical → physical, time-limited, reviewed, documented — restraint without order and review is assault), competent practice within scope, honest error reporting. Between them sits <strong>double effect</strong>: an act with good intent and foreseen-but-unintended bad effect is ethical when the act itself is good/neutral (pain relief), intent is the good effect (comfort — <strong>document intent explicitly</strong>), the bad is not the means to the good, and proportion favors acting. And <strong>futility</strong>: treatment offering no benefit may be <strong>withheld or withdrawn</strong> (ethically equivalent — stopping the ventilator equals never starting it) via team + family + second-opinion process with comfort care guaranteed — never silently, never by one nurse alone, and <strong>euthanasia remains illegal in Ghana</strong>: palliate fully, participate never.",
          ],
        },
        {
          type: "text",
          heading: "Justice, fidelity, veracity",
          paragraphs: [
            "<strong>Justice</strong> (fair share): <strong>distribute by need and likelihood of benefit</strong> (triage protocols, transplant criteria, theatre lists) — never by wealth, status, tribe, religion, noisiness or staff relation; queue-jumping for VIPs is injustice in a white coat, and the nurse who enforces the list serves justice directly. <strong>Fidelity</strong> (keep faith): promises kept (return when you said, finish what you started), loyalty to the patient's interests, <strong>confidentiality</strong> guarded (records, corridor talk, social media — Module 04's full treatment). <strong>Veracity</strong> (tell truth): <strong>bad news delivered honestly and kindly</strong> (SPIKES — Setting, Perception, Invitation, Knowledge, Emotion, Summary — never blunt corridors, never false reassurance), <strong>errors disclosed</strong> (duty of candour: what happened, what it means, what follows, apology — Module 05's incident process), placebos-by-deception refused. Truth-telling bends only for timing and compassion, never into lying: 'I don't know yet, but I will find out and return by noon' beats fabrication every time.",
          ],
        },
        {
          type: "table",
          heading: "Collisions: the exam's favourite stems",
          columns: ["Collision", "Classic stem", "Resolution direction"],
          rows: [
            ["Autonomy vs beneficence", "Competent adult refuses life-saving transfusion/surgery", "Refusal WINS: assess capacity, inform consequences, offer alternatives, document, respect, keep caring"],
            ["Veracity vs non-maleficence", "Family begs 'don't tell him it's cancer'", "Truth WINS: explore fears, negotiate joint disclosure with SPIKES, never lie — collusion isolates the dying"],
            ["Justice vs fidelity", "Your patient vs another for one ventilator/theatre slot", "Fair criteria WINS: triage protocol by need/benefit — advocate your patient INTO the criteria, not past them"],
            ["Confidentiality vs protection", "HIV+ patient won't tell partner; abused child; violent threat", "Protection WINS: disclose MINIMUM to RIGHT authority (partner notification services, DOVVSU/social welfare, police) + document"],
            ["Autonomy vs public safety", "TB patient refusing isolation/treatment; unfit epileptic driver", "Safety WINS within law: least-restrictive containment, treatment order per public health law, report driver per regulations"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Ethics exam technique: P-C-F-D",
          body: "Principles (name the two+ in play) → Collision (state it explicitly) → Framework (capacity? best-interests? 4-box? least-restrictive? law?) → Document + escalate. Markers award the NAMING ('this is autonomy versus beneficence') as heavily as the conclusion — and the conclusion must show process (assess, inform, consult, least-restrictive, document), not just verdict. Never answer 'do what the doctor/family says' — the nurse's independent ethical duty is the point of the question.",
        },
      ],
      keyPoints: [
        "Autonomy: informed consent (disclosure/understanding/voluntariness/capacity/consent) + honoured refusal; capacity supported first, judged last.",
        "Beneficence acts for good; non-maleficence restrains (least-restrictive, reviewed, ordered); double effect needs documented intent.",
        "Futility: withhold = withdraw ethically; team + family + second opinion + comfort care; euthanasia illegal — palliate.",
        "Justice: need/benefit criteria, never wealth/status/queue-jumping; fidelity: promises + confidentiality; veracity: SPIKES + candour.",
        "Collisions: refusal wins (capable), truth wins (kindly), fair criteria win (triage), protection wins (minimum disclosure).",
        "Exam: P-C-F-D — Principles, Collision, Framework, Document — and the nurse's independent duty, not 'doctor said'.",
      ],
      quiz: {
        keywords: ["autonomy", "consent", "refusal", "capacity", "beneficence", "non-maleficence", "double effect", "futility", "justice", "triage", "fidelity", "veracity", "SPIKES", "confidentiality", "euthanasia"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "values-dilemmas-and-moral-distress",
      title: "Values, dilemmas and moral distress",
      minutes: 20,
      objectives: [
        "State professional values and separate them from personal ones.",
        "Apply the 4-box tool to a case with a worked direction.",
        "Work through the dilemma bank: DNR, transfusion, allocation, end-of-life.",
        "Recognize moral distress and climb the coping ladder.",
        "State the limits of conscientious objection.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Values: professional first, personal parked",
          paragraphs: [
            "Professional values — <strong>altruism</strong> (patient before self), <strong>human dignity</strong> (worth beyond condition), <strong>integrity</strong> (honest even when costly), <strong>social justice</strong> (care for the marginalized) — bind regardless of private belief. The nurse cares <strong>non-judgmentally</strong> for the prisoner, the addict, the sex worker, the assault suspect, the patient whose lifestyle/religion/politics offend — <strong>care is not endorsement</strong>, and disgust is a feeling to manage, never a reason to delay analgesia, privacy or gentleness. Personal values surface in reflection and supervision, not at the bedside: the nurse who cannot counsel contraception arranges a colleague (see objection limits below) rather than lecturing; the nurse unsettled by a patient's choices examines the reaction with a mentor rather than punishing with coldness. Values conflicts are normal; <strong>values imposition is misconduct</strong> — document care given, reflect on feelings elsewhere, and escalate where personal limits genuinely threaten safe care.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0004.svg",
          alt: "4-box tool: 1. Medical indications (diagnosis, prognosis, options, burdens, futility — facts first). 2. Patient preferences (capacity, informed, voluntary, wishes, surrogate, refusal honoured). 3. Quality of life (patient's own view, bias check, palliative parallel). 4. Contextual features (family, culture, faith, money, law, resources, team conflict). Escalation ladder: bedside talk, in-charge plus doctor, ethics committee/MDT — document every rung. Worked direction on confused elder refusing NG feed; moral distress ladder (speak up, debrief, write, committee); objection limits (refer, never abandon, no refusal in emergencies).",
          caption: "Four boxes structure the case, the ladder carries the conflict — nothing ethical happens silently.",
        },
        {
          type: "text",
          heading: "The dilemma bank: five wards, five knots",
          paragraphs: [
            "<strong>DNR/futility</strong> (ICU): family demands 'everything' for the imminently dying — 4-box it (indications: CPR success ~nil + burdens certain; preferences: patient's prior voice?; QoL: whose metric?; context: guilt, faith, money), time-limited trial or comfort plan, second opinion, document consensus + dissent. <strong>Transfusion refusal</strong> (theatre): competent Jehovah's Witness bleeds — refusal wins (bloodless techniques optimized, cell salvage where acceptable, document extensively, keep caring; <strong>child</strong> refusal → court, transfuse to save life while legal process runs). <strong>Confidentiality vs harm</strong> (clinic): HIV+ client won't notify partner; child discloses abuse; patient threatens identifiable victim — protection wins via <strong>minimum disclosure to right authority</strong> (partner-notification services, <strong>DOVVSU/police + social welfare</strong> for children — reporting is MANDATORY, Module 06's Act 560, document). <strong>One ventilator, two patients</strong> (emergency): triage protocol by need + likelihood of benefit + (tie-breaks) lottery/first-come — committee/team decision, transparent criteria, both families told honestly, loser palliated fully. <strong>Withdrawing vs withholding</strong> (HDU): stopping dialysis/ventilation feels like killing — ethically equivalent to never starting where futile/burdensome + consented process + comfort guaranteed; the nurse's distress is real and debriefed, never a reason to prolong suffering.",
          ],
        },
        {
          type: "text",
          heading: "Moral distress: knowing right, blocked from doing it",
          paragraphs: [
            "<strong>Moral dilemma</strong> (two rights collide — the bank above) differs from <strong>moral distress</strong> (you know the right act but hierarchy, resources, policy or fear block it: the unsafe discharge ordered, the analgesia withheld, the futile resuscitation prolonged, the abusive colleague protected) — and repeated distress hardens into <strong>moral residue</strong> (lingering guilt, cynicism, burnout, exit from the profession). Signs: dread of shifts, avoidance of certain patients/rooms, anger at self and system, silence in handovers, leaving (bedside or country). The coping ladder: <strong>name it</strong> (to self, then trusted senior), <strong>speak up the chain</strong> (in-charge → doctor → management → ethics committee — Module 02's ladder, documented), <strong>write it</strong> (incident report + personal reflection — paper protects), <strong>debrief</strong> (team + counselling where available), <strong>act within power</strong> (comfort, advocacy, presence — small rights still count), <strong>whistleblow</strong> last resort (protected disclosure per policy/law — Module 06). Managers: ethics rounds, safe reporting, zero retaliation — distress unheard becomes resignation or scandal.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Conscientious objection: narrow, referred, never abandoning",
          body: "A nurse may object to participating in procedures violating deeply-held belief (abortion, contraception, fertility treatments, end-of-life decisions) ONLY within strict limits: declare in advance (not at the bedside mid-crisis), REFER PROMPTLY to a willing competent colleague (the patient's care continues seamlessly), NEVER ABANDON (emergencies admit NO refusal — the bleeding post-abortion patient is resuscitated, full stop), never impose views (no lectures, delays, or shaming — that is misconduct), document handover, follow institutional policy + NMC code. Objection covers direct participation, not associated care (pre/post nursing, analgesia, hygiene, kindness). Students: objections declared to school early; learning objectives still met through observation/alternative placements. The test is simple: did the patient receive timely, non-judgmental care? If yes via proper referral — objection honoured. If delayed, shamed or abandoned — misconduct charged.",
        },
      ],
      keyPoints: [
        "Values: altruism, dignity, integrity, social justice — professional first; care is not endorsement; imposition is misconduct.",
        "4-box: indications → preferences → quality of life → context; worked with team + family + documentation, never solo.",
        "DNR: process + second opinion + comfort; transfusion: adult refusal wins, child to court; confidentiality: minimum to right authority.",
        "Allocation: protocol criteria, transparent, loser palliated; withdrawing = withholding where futile + consented.",
        "Distress (blocked right) vs dilemma (colliding rights) vs residue (lingering harm); ladder: name → speak → write → debrief → committee → whistleblow.",
        "Objection: advance, referred, never abandon, no emergencies refusal, no imposition — patient timely care is the test.",
      ],
      quiz: {
        keywords: ["values", "dignity", "integrity", "4-box", "dilemma", "DNR", "transfusion", "Jehovah", "triage", "allocation", "moral distress", "residue", "debrief", "whistleblowing", "conscientious objection"],
        categories: ["fundamentals"],
      },
    },
  ],
};
