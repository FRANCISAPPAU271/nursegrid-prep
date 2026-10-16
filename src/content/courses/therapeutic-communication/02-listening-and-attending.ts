import type { CourseModule } from "../types";

export const listeningAndAttending: CourseModule = {
  slug: "listening-and-attending",
  title: "Listening and attending",
  summary:
    "The ears that heal: SOLER attending, four listening levels, minimal encouragers, listening for feelings-gaps-body and killer habits — then presence, therapeutic touch, skilled silence, holding space and self-awareness.",
  lessons: [
    {
      slug: "active-listening-and-soler",
      title: "Active listening and SOLER",
      minutes: 18,
      objectives: [
        "Arrange SOLER in 5 seconds.",
        "Counsel at level-4 listening.",
        "Fuel stories with encouragers.",
        "Kill interrupting + minimising.",
      ],
      blocks: [
        {
          type: "text",
          heading: "SOLER + levels",
          paragraphs: [
            "Egan's <strong>SOLER</strong> (exam pure — learn it!): <strong>S</strong>quarely face them (shoulders to shoulders, not chart-to-patient!) · <strong>O</strong>pen posture (uncross arms — open body, open nurse!) · <strong>L</strong>ean in slightly (interest, not invasion — mirror their space!) · <strong>E</strong>ye contact (attentive, softened for elders who read stares as disrespect!) · <strong>R</strong>elaxed (unhurried breath, still hands — hurry leaks!). Five letters, five seconds to arrange, whole conversations transformed. Add M01's chair + phone-away, and your BODY says 'you matter' before your mouth opens. Then climb the <strong>listening levels</strong>: 1 PRETEND (nodding while planning supper — patients FEEL it!) · 2 SELECTIVE (catching keywords, missing hearts) · 3 ATTENTIVE (full story + feelings tracked) · 4 EMPATHIC (their world, their words, their tears — living inside their sentence!). Counsel at LEVEL 4 or don't counsel; triage at 3 minimum. Exams ask 'which level is this?' — 'nodding while thinking of lunch' = 1, 'repeating her fear back gently' = 4. Fuel stories with <strong>minimal encouragers</strong> — 'mm-hm…', 'go on…', 'and then…?', nodding, leaning — tiny fuels keeping narratives rolling WITHOUT stealing the floor. Silence + nod beats questions for frightened patients: let tears finish before words restart.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-COM-0003.svg",
          alt: "Five SOLER letter boxes square open lean eye relax. SOLER spelled with chair phone note. Listening levels 1-4 with exam guidance. Minimal encouragers with silence-beats-questions line. Listen-for facts feelings gaps body with feelings-first rule. Killers interrupting minimising phone. Culture notes eyes gender silence. Documentation example. Cross-course links. Mantra quoted.",
          caption: "Square, open, lean, eyes, relax — then level-4 listen.",
        },
        {
          type: "text",
          heading: "Listen for + killers",
          paragraphs: [
            "<strong>Listen FOR four things</strong>: FACTS (what happened? when? who was there?) · FEELINGS (which names surface? fear? shame? anger? grief? — repeat feelings FIRST: 'sounds frightening' opens; 'when did it start?' can wait!) · GAPS (what's NOT said? the husband never mentioned? the bleeding minimised? the question dodged twice? — gaps are doors!) · BODY (clenched fists? tears held? face turned away? foot tapping? — body testifies when mouths edit!). Feelings-first is the therapeutic order: acknowledged emotion UNLOCKS facts; interrogated facts LOCK emotion. Then murder the <strong>killers</strong>: INTERRUPTING (top patient complaint WORLDWIDE — average 11 seconds before doctors cut in; nurses must do better!) · finishing sentences (theft of voice!) · rehearsing your reply while they talk (level-1 with eye contact!) · 'at least…' minimising ('at least you have other children' — cruelty dressed as comfort!) · phone-checking (each glance says 'you don't matter' — patients remember the dismissal, not the drug!). Culture notes: soften eye contact for elders; mirror gender/space comfort; never force speech through silence norms. DOCUMENT listening (INF M02!): 'tearful, clenched hands, stated \"I'm scared to sleep\" — sat 10 min, silent presence + hand-hold, fears explored, plan agreed.' Observed + done + quoted = defensible care.",
          ],
        },
        {
          type: "table",
          heading: "Listening checks",
          columns: ["Moment", "Therapeutic", "Killer"],
          rows: [
            ["She starts crying", "Silence + nod + tissue near", "'Don't cry, be strong!'"],
            ["He pauses mid-story", "'Go on… I'm listening'", "Jump in with next question"],
            ["Fear named", "'Sounds frightening — tell me'", "'At least it's treatable!'"],
            ["Long story, busy ward", "SOLER + 2 present minutes", "Doorway hovering + watch-check"],
            ["Something unsaid", "'I notice… tell me about…'", "Bulldoze past the gap"],
            ["After listening", "Feelings-first reflection (M03!)", "Facts-only interrogation"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The 11-second challenge",
          body: "Research: clinicians interrupt after ~11 seconds. Your challenge: let the NEXT five patients speak a full minute uninterrupted — SOLER, encouragers, silence. Time it; feel the itch; don't scratch it. Watch what surfaces in seconds 30–60: the REAL reason for the visit, the hidden fear, the missed dose. Listening is the cheapest diagnostic tool in nursing — and the least used.",
        },
      ],
      keyPoints: [
        "SOLER: square + open + lean + eyes + relaxed — 5 seconds, every contact.",
        "Levels: pretend → selective → attentive → empathic; counsel at 4, triage at 3+.",
        "Encouragers: mm-hm, go on, nods — fuel stories without stealing floor.",
        "Listen for facts + feelings + gaps + body; feelings FIRST unlock facts.",
        "Killers: interrupting, finishing, rehearsing, 'at least…', phone-checking.",
        "Document: observed + done + quoted — listening IS intervention.",
      ],
      quiz: {
        questionIds: ["NG-MOD-TCOM-004", "NG-MOD-TCOM-005"],
        keywords: ["SOLER", "Egan", "listening", "levels", "empathic", "encouragers", "interrupting", "minimising", "feelings", "gaps", "body language", "attending", "silence", "nod", "document"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "presence-touch-and-holding-space",
      title: "Presence, touch and holding space",
      minutes: 18,
      objectives: [
        "Practise therapeutic presence.",
        "Touch with consent + culture.",
        "Use silence skilfully.",
        "Own triggers; debrief well.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Being there fully",
          paragraphs: [
            "<strong>Presence</strong> = being FULLY there: body still, mind unhurried, phone away, eyes soft, agenda surrendered. 'I'm here, I'm not leaving' — said by the CHAIR, not the mouth. Two present minutes beat twenty distracted ones; presence is THE intervention when nothing else fits (dying, grief, terror — M04!). <strong>Therapeutic touch</strong>: consented hand-hold ('may I hold your hand?' — honours ALL), forearm for courage, shoulder for solidarity, blanket-tucking for care, a steadying arm for the dizzy elder. Rules: ASK culture/faith/gender/trauma first (some forbid cross-gender touch; trauma survivors may flinch — watch and STOP instantly!); touch with INTENTION (comfort, not habit); DOCUMENT significant touch ('sat with grieving mother 15 min, hand-hold consented'). Touchless option: close sitting + soft eyes + warm voice does 80% of the work — never force hands where presence suffices. <strong>Skilled silence</strong>: after bad news (let it LAND — words too soon trample!), amid tears (don't mop feelings with chatter!), before decisions (thoughts GATHER in quiet!), with the dying (companionship beyond speech!). The skill is tolerating YOUR discomfort — fleeing silence abandons them inside it. Cap long silences gently: 'I'm here — tell me when you're ready.' Then <strong>holding space</strong>: witnessing suffering WITHOUT fixing — 'I can't take this away, but I won't leave you in it.' The fix-it reflex ('don't cry, be strong!', 'at least…', instant advice) serves YOUR comfort, not theirs. Grief, fear, dying are SAT WITH, not solved.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-COM-0004.svg",
          alt: "Five boxes presence touch silence hold-space know-yourself with examples. Presence defined with chair line and 2-minute rule. Touch types plus ask-culture rules plus flinch-stop plus touchless option. Silence four uses plus discomfort tolerance plus gentle cap. Holding space definition with fix-it warning. Self-awareness triggers reflection swap guidance. Cross-course links. Mantra quoted.",
          caption: "Sit, stay, silent, hand — witness, don't fix.",
        },
        {
          type: "text",
          heading: "Self-awareness + debrief",
          paragraphs: [
            "You cannot hold space you haven't mapped: <strong>self-awareness</strong> is clinical equipment. Know YOUR triggers — stillbirth care after your own miscarriage? alcoholic patients when your father drank? HIV counselling clashing with your preaching? OWNED triggers stay managed (extra supervision, brief swaps, prepared scripts); DENIED ones leak — avoidance ('let the other nurse take her'), tears mid-consult, anger at 'difficult' patients, numbness. Exam/interview gold: 'a case upsets you — what do you do?' Answer: recognise → breathe → stay professional in the moment → debrief after (senior/colleague/counsellor) → REFLECT (Gibbs: what happened? felt? learnt? next time? — PRO-I M7!) → swap briefly if overwhelmed, WITHOUT abandoning ('nurse Kofi continues excellently — I've handed over fully'). Debriefing is not weakness — unprocessed grief becomes burnout, errors and exits (PRO-II wellbeing!). Ward habits: 5-minute end-of-shift shares ('what weighed on you today?'), difficult-case debriefs within 24 hours, permission to cry in the sluice then return. Self-care IS patient safety: the nurse who never weeps never fully feels — and feeling, managed, is what makes presence possible. Mantra: 'sit, stay, silent, hand — witness, don't fix.'",
          ],
        },
        {
          type: "table",
          heading: "Presence moves",
          columns: ["Situation", "Do this", "Never this"],
          rows: [
            ["Fresh grief/tears", "Sit + silence + tissue near + hand offered", "'Don't cry, be strong!' + rush out"],
            ["Bad news landing", "Pause; 'take your time — I'm here'", "Instant plans + leaflets + exit"],
            ["Dying patient, night", "Close sitting + soft voice + touch if welcome", "Corridor checks through glass only"],
            ["Your trigger case", "Breathe + professional + debrief after", "Avoid patient; leak tears/anger"],
            ["Overwhelmed shift", "Brief swap + full handover + return", "Abandon + gossip + numb on"],
            ["After hard case", "Debrief 24h + Gibbs reflection", "Swallow it; 'nurses don't cry'"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Presence prescription",
          body: "This week: choose ONE frightened/grieving patient daily — sit 5 unhurried minutes, SOLER, silence-ready, hand offered. Document it. Notice: their breathing slows, stories surface, thanks flow — and YOUR shift feels purposeful, not frantic. Presence heals both sides of the bed. 'Sit, stay, silent, hand — witness, don't fix.'",
        },
      ],
      keyPoints: [
        "Presence: still body + unhurried mind + phone away — 2 present minutes beat 20 distracted.",
        "Touch: consented + cultured + intentional; flinch = stop; touchless sitting does 80%.",
        "Silence: after news, amid tears, before decisions, with dying — tolerate, cap gently.",
        "Holding space: witness without fixing — 'I won't leave you in it.'",
        "Self-awareness: own triggers; debrief 24h; Gibbs reflect; brief swaps with handover.",
        "Self-care = patient safety: processed grief prevents burnout, errors, exits.",
      ],
      quiz: {
        questionIds: ["NG-MOD-TCOM-006"],
        keywords: ["presence", "touch", "silence", "holding space", "self-awareness", "triggers", "debrief", "Gibbs", "burnout", "grief", "dying", "consent", "culture", "flinch", "reflection"],
        categories: ["fundamentals"],
      },
    },
  ],
};
