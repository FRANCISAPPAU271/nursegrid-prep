import type { CourseModule } from "../types";

export const pluralistCounselling: CourseModule = {
  slug: "counselling-pluralist-patients",
  title: "Counselling pluralist patients",
  summary:
    "Listen first, judge never: Kleinman's eight questions that surface hidden beliefs and undisclosed remedies, the barriers that silence patients, LEARN negotiation that trades instead of forbids, disclosure conversations, and the five-line note that keeps every nurse on the same plan.",
  lessons: [
    {
      slug: "kleinman-questions-and-listening-first",
      title: "Kleinman questions and listening first",
      minutes: 18,
      objectives: [
        "Ask Kleinman's eight.",
        "Name why patients hide TM.",
        "Listen without judging.",
        "Quote beliefs in notes.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Eight questions",
          paragraphs: [
            "Every patient carries an EXPLANATORY MODEL — their private theory of what's wrong, why, and what should fix it. IGNORE it and your perfect plan collides with their hidden one: drugs spat out, herbs doubled, reviews skipped. Arthur KLEINMAN's eight questions surface it in minutes — ask with WARMTH, write in THEIR words. <strong>THE EIGHT</strong>: 1. What do you CALL this problem? (name reveals worldview — 'sugar disease' vs 'spiritual attack'!) · 2. What CAUSED it, in your view? (germs? witches? worry? ancestors?) · 3. Why did it START when it did? (timing theories — funeral? quarrel? rains?) · 4. What does it DO to you? (how it works in the body — 'eats my blood?') · 5. How SERIOUS is it? What do you FEAR most? (fears drive choices — death? madness? cost? shame?) · 6. What TREATMENT do you think you should receive? (their prescription — herbs? prayers? drip?) · 7. What RESULTS do you hope for? (cure? strength? visions stopped?) · 8. Who ELSE have you consulted? (healer? pastor? mallam? — asked LAST, gently, zero shock on your face!). Then the magic follow-up: 'tell me MORE about that…' — and SILENCE while they do. Understanding ≠ agreeing — you cannot negotiate what you never HEARD.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-TCM-0009.svg",
          alt: "Two boxes Kleinman eight plus barriers. Patient questions one to five with own-words rule. Care questions six to eight plus magic follow-up. Barriers five with warm fixes plus admission ask. Rule quoted.",
          caption: "Eight questions, warm face, their words — then negotiate.",
        },
        {
          type: "text",
          heading: "Why they hide",
          paragraphs: [
            "Patients don't disclose TM use by DEFAULT — assume hidden use until asked. <strong>BARRIERS</strong> (exam!): FEAR OF SCOLDING ('nurse will shout/insult') → ask with visible warmth, NEVER mock ('so the pastor said…? tell me more'); FEAR OF REFUSAL ('they'll send me away') → 'you can tell me ANYTHING here — I won't chase you'; NOBODY ASKED → ask EVERY admission, EVERY review: 'herbs? bitters? healers? prayer camps? creams?'; 'IT'S NOT MEDICINE' → 'teas, bitters, blessed water and prayer ALL count — list everything'; SHAME + POWER GAP (uniform! English! clipboard!) → sit DOWN, local language, unhurried minutes. <strong>LISTENING SKILLS</strong> (COM!): open questions ('what happened next…?') · reflection ('so the dreams started after the funeral…') · NO interruption (count to 3 before speaking!) · notice FEELINGS ('that sounds frightening') · summarise back ('let me check I understood…'). <strong>QUOTE beliefs</strong> in notes: 'believes swollen legs caused by stepping on charm after land dispute — fears amputation; consulted herbalist (bitter leaf wash) + pastor (prayer)' — quoted beliefs guide the WHOLE plan and the next nurse starts INFORMED, not zero. Exam favourite: 'patient refuses transfusion/ARVs/surgery for belief reasons?' — FIRST explore with Kleinman (never coerce/lecture first!) — then negotiate (next lesson!).",
          ],
        },
        {
          type: "table",
          heading: "Barrier fixes",
          columns: ["Barrier", "You hear", "You do"],
          rows: [
            ["Fear of scolding", "Silence, eyes down", "Warmth + 'tell me anything' + no mocking"],
            ["Fear of refusal", "'Will you still treat me?'", "Promise care + both-and language"],
            ["Nobody asked", "Surprise at question", "Ask EVERY admission + review"],
            ["'Not medicine'", "'Only small herbs'", "'Teas, bitters, water all count'"],
            ["Power gap", "Yes-nurse to everything", "Sit, local language, slow down"],
            ["Shame", "Whispered, half-denied", "Normalise: 'many patients use both'"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Three Kleinmans this week",
          body: "Run the full eight questions on THREE patients this week — one chronic (diabetes/HIV), one mother, one elder. Time yourself: under six minutes once practised. Write their models in quotes. Watch adherence transform when the plan finally fits the belief — and watch referrals to healers DROP when the hospital becomes a place that listens.",
        },
      ],
      keyPoints: [
        "Explanatory model: patient's private theory — ignore it and plans collide.",
        "Kleinman 1-5: call it? cause? why now? what does it do? how serious + fears?",
        "Kleinman 6-8: what treatment? what results? who else consulted? + 'tell me more'.",
        "Barriers: scolding fear + refusal fear + never asked + 'not medicine' + power gap.",
        "Listen: open Qs + reflect + never interrupt + feelings + summarise back.",
        "Quote beliefs in notes — next nurse starts informed, exam: explore before coercing.",
      ],
      quiz: {
        questionIds: ["NG-MOD-TCAM-015"],
        keywords: ["Kleinman", "explanatory", "beliefs", "disclose", "barriers", "listening", "reflect", "quote", "admission", "fears", "healer", "warmth", "summarise", "adherence", "model"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "learn-negotiation-and-documentation",
      title: "LEARN negotiation and documentation",
      minutes: 18,
      objectives: [
        "Run LEARN steps.",
        "Trade, sequence, substitute.",
        "Hold disclosure talks.",
        "Write the 5-line note.",
      ],
      blocks: [
        {
          type: "text",
          heading: "LEARN + moves",
          paragraphs: [
            "Heard the model? Now NEGOTIATE a shared plan — LEARN turns conflict into contract. <strong>LEARN</strong>: L — LISTEN to the patient's story (Kleinman done!); E — EXPLAIN your view SIMPLY ('the germs need 3 full days of medicine — half dose lets them return stronger'); A — ACKNOWLEDGE differences openly ('I see it differently because my training shows… — both views matter here'); R — RECOMMEND a plan (clear, concrete, dosed); N — NEGOTIATE agreement — BOTH sides give something ('tablets AND blessed water — deal?'). Negotiation is NOT surrender: safety lines HOLD (transfusion refusals get senior + ethics + law — PRO-I!; child danger gets child protection!). <strong>MOVES</strong>: TRADE don't forbid ('tablets AND the blessed water' — both-and!); SEQUENCE ('finish the 3-day malaria course, THEN the herbs — order matters!'); SUBSTITUTE (safe ritual for dangerous — prayer + anointing INSTEAD of razor cuts; blessed water INSTEAD of purging enemas!); SCHEDULE review ('come back Friday — we CHECK together' — review dates are adherence glue!). Frame trades as RESPECT: 'your pastor prays, our drip works — God guides both hands!' — families accept shared plans they'd REJECT as orders. Exam: 'patient insists herbs only for severe malaria?' — LEARN + sequence + review date + involve elder/pastor + document + follow-up — never shrug, never coerce.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-TCM-0010.svg",
          alt: "Two boxes LEARN plus moves with note panel. LEARN five letters expanded. Negotiation four moves with examples. Five-line note numbered with safety net. Rule quoted.",
          caption: "Listen, explain, acknowledge, recommend, negotiate — then write it.",
        },
        {
          type: "text",
          heading: "Disclose + document",
          paragraphs: [
            "Some conversations need EXTRA care. <strong>DISCLOSURE TALKS</strong>: telling a patient their remedy is HARMFUL ('this powder contains lead — that's why the baby is pale; let's stop it together and check blood') — blame the SUBSTANCE never the mother; telling families a rite must WAIT ('circumcision after the bleeding stops — the mosque understands emergencies'); telling elders hospital rules bind everyone ('no live coals in the ward — fire law; pray + anoint instead'). Rules: privacy + senior present for heavy news + interpreter if needed + time for tears/questions + ALWAYS an alternative offered (never 'stop' without 'start this instead'). <strong>DOCUMENT — the 5-LINE NOTE</strong> (every negotiated plan!): 1. WHAT (remedy name/dose/frequency — 'bitter leaf wash bd + pastor prayer'); 2. WHO advised it (herbalist/pastor/self); 3. WHY patient values it (quoted belief!); 4. WHAT was NEGOTIATED (trade/sequence/substitute + review date); 5. SAFETY NET given ('return at once if… — bring ALL bottles Friday'). If it's not written, the next nurse starts from ZERO — and the patient notices ('I told the morning nurse already!'). Negotiated + documented plans are LEGAL armour too (PRO-I!): consent + reasoning + safety-netting, all charted.",
          ],
        },
        {
          type: "table",
          heading: "Negotiation scripts",
          columns: ["Conflict", "LEARN move", "Script"],
          rows: [
            ["Herbs only, severe malaria", "Sequence + review", "'Drip 3 days first, herbs after — Friday check'"],
            ["Stop ARVs for prayer", "Trade + elder loop", "'Prayer AND tablets — God guides both'"],
            ["Razor cuts for 'bad blood'", "Substitute", "'Anointing + prayer instead — no cuts'"],
            ["Enema purging, dehydrated child", "Refuse harm + alternative", "'ORS now — purge waits; doctor explains'"],
            ["Hidden bitters + warfarin", "Explain + trade", "'Bitters thin blood too — pause, test Friday'"],
            ["Discharge to prayer camp", "Negotiate + safety net", "'Go with drugs + return dates + danger signs'"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Negotiate one plan",
          body: "This week: run ONE full LEARN negotiation and write ONE five-line note. Pick the 'difficult' patient everyone avoids — the refuser, the hider, the prayer-camp transfer. Trade, sequence or substitute; set a review date; document all five lines. Difficult patients are usually unheard patients — one negotiated plan proves it.",
        },
      ],
      keyPoints: [
        "LEARN: Listen + Explain simply + Acknowledge + Recommend + Negotiate both-give.",
        "Moves: TRADE (both-and) + SEQUENCE (order!) + SUBSTITUTE (safe rite) + review dates.",
        "Safety lines hold: seniors + ethics + law for refusals; child danger = protection.",
        "Disclosure: blame substance never mother + privacy + senior + always an alternative.",
        "5-line note: WHAT + WHO advised + WHY valued + WHAT negotiated + SAFETY net.",
        "Unwritten = next nurse starts zero + patient notices; charted = legal armour.",
      ],
      quiz: {
        questionIds: ["NG-MOD-TCAM-016","NG-MOD-TCAM-017"],
        keywords: ["LEARN", "negotiate", "trade", "sequence", "substitute", "review", "disclosure", "document", "safety", "refusal", "ethics", "alternative", "contract", "adherence", "harmful"],
        categories: ["fundamentals"],
      },
    },
  ],
};
