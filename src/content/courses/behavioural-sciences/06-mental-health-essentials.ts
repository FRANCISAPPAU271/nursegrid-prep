import type { CourseModule } from "../types";

export const mentalHealthEssentials: CourseModule = {
  slug: "mental-health-essentials",
  title: "Mental health essentials",
  summary:
    "Minds in crisis, nurses who notice: depression, anxiety, psychosis and substance recognition with PHQ/GAD screening and medical-first rules — then suicide steps with safety planning, Ghana referral pathways, stigma fighting and the therapeutic relationship.",
  lessons: [
    {
      slug: "common-disorders-and-recognition",
      title: "Common disorders and recognition",
      minutes: 18,
      objectives: [
        "Recognise depression/anxiety/psychosis.",
        "Screen PHQ-2/GAD-2.",
        "Rule out medical mimics.",
        "Ask substances kindly.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Big three + substances",
          paragraphs: [
            "<strong>DEPRESSION</strong> (exam!): low mood + ANHEDONIA (joyless — food, friends, faith all grey!) + fatigue + worthlessness/guilt + sleep/appetite SHIFT + poor focus + psychomotor SLOW (or agitated!) + SUICIDAL thoughts — 2+ WEEKS, most days, function IMPAIRED. Postnatal: + bonding FAILURE ('I feel nothing for her!') + intrusive HARM-fears — screen EVERY postnatal visit (NUT M3!). <strong>ANXIETY (GAD)</strong>: EXCESSIVE uncontrollable worry + restlessness + tension + poor focus + irritability + sleeplessness — 6+ MONTHS. Panic attacks: sudden terror + pounding + choking + 'DYING!' — breathe WITH them (slow in-4, out-6!) + rule out MEDICAL (thyroid! asthma! hypoglycaemia! drugs!). <strong>PSYCHOSIS</strong>: HALLUCINATIONS (voices commenting/commanding!) + DELUSIONS (fixed false: persecuted! grandiose! controlled!) + DISORGANISED speech/behaviour + NEGATIVE symptoms (flat affect, withdrawn, self-neglect!). Schizophrenia vs brief psychotic vs drug-induced vs MEDICAL — and medical FIRST: UTI! malaria! typhoid! thyroid! steroids! efavirenz! alcohol withdrawal! Confusion + fever + age = DELIRIUM until proven otherwise (GER M5!). <strong>SUBSTANCES</strong>: alcohol (akpeteshie! pito! beer!) + tramadol + wee + cocaine + sedatives. Ask CAGE-ish, kindly, privately: Cut down tried? Annoyed by comments? Guilty? Eye-opener? Withdrawal KILLS (seizures! DTs!) — MEDICAL management, never 'tough it out'. MI spirit (M05!) + refer, judge NEVER — shame deepens use.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-BEH-0011.svg",
          alt: "Three disorder boxes depression anxiety psychosis with durations. Depression criteria plus postnatal extras. Anxiety GAD plus panic response. Psychosis four symptom groups plus medical rule-outs. Substances Ghana list plus CAGE plus withdrawal warning. PHQ-2 GAD-2 screening plus where depression hides. Medical-first list plus delirium rule. Kind language rule. Cross-course links. Mantra quoted.",
          caption: "Screen two, rule out medical, ask suicide, refer kindly.",
        },
        {
          type: "text",
          heading: "Screen + medical-first",
          paragraphs: [
            "<strong>SCREEN — PHQ-2 + GAD-2</strong> (two questions EACH, 60 seconds!): 'down/depressed/hopeless…? little interest/pleasure…?' + 'nervous/anxious…? can't stop worrying…?' Positives → PHQ-9/GAD-7 FULL + SUICIDE ask (next lesson!) + REFER. Screen EVERY chronic (diabetes! HIV! TB! hypertension!), antenatal, postnatal and elder visit — depression HIDES in medical queues ('my drugs don't work' = hopelessness talking!). Document scores + trends (INF!). <strong>MEDICAL FIRST</strong>, always: thyroid (low = depression! high = anxiety!), ANAEMIA (fatigue + fog!), UTI/malaria/typhoid (delirium!), drugs (steroids! efavirenz! antihypertensives!), alcohol/substances, B12, diabetes swings. Workup before labels: vitals + RDTs + labs + med review + substance ask. <strong>LANGUAGE</strong> (COM M5!): 'person with schizophrenia/depression' — NEVER 'schizo/mad/psycho/crazy'. Ward talk shapes help-seeking: kind wards fill voluntarily; mocking wards fill via police. Exam: 'differentiate delirium/dementia/depression' — delirium ACUTE + fluctuating + inattention (MEDICAL emergency!) · dementia CHRONIC + progressive + memory (GER M5!) · depression + mood + 'can't' + guilt (this lesson!). 'Postnatal mother flat + bonding poor' — screen + suicide ask + support + refer + follow-up. Recognition is the nursing half of psychiatry — own it.",
          ],
        },
        {
          type: "table",
          heading: "Recognition checks",
          columns: ["Presents", "Think", "Do now"],
          rows: [
            ["Joyless 3 weeks + guilt", "DEPRESSION", "PHQ-9 + suicide ask + refer + follow"],
            ["Unstoppable worry 8 months", "GAD/anxiety", "GAD-7 + breathing + counsel + refer"],
            ["Voices + 'poisoned!'", "PSYCHOSIS", "Safety + calm + medical rule-out + urgent refer"],
            ["Confused + fever, 75", "DELIRIUM!", "Medical emergency workup NOW"],
            ["Flat postnatal + no bond", "Postnatal depression", "Screen + suicide ask + support + refer"],
            ["Shakes + 'eye-opener'", "Alcohol dependence", "Withdrawal watch + medical + MI + refer"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Screen-five week",
          body: "This week: PHQ-2/GAD-2 FIVE chronic-clinic or postnatal patients — 60 seconds each. Log scores, actions, referrals. You WILL find hidden depression — and one screened patient who says 'nobody ever asked' will teach you why nurses screen. Recognition is treatment's front door.",
        },
      ],
      keyPoints: [
        "Depression: joyless + guilt + fatigue + sleep/appetite + suicide — 2+ weeks, function hit.",
        "Anxiety: uncontrollable worry 6+ months; panic = breathe-with + medical rule-out.",
        "Psychosis: voices + delusions + disorganised + negatives; medical mimics FIRST.",
        "Substances: CAGE-kindly + withdrawal medical + MI + refer; shame never.",
        "Screen PHQ-2/GAD-2 every chronic/antenatal/postnatal/elder visit; positives → full + refer.",
        "Delirium acute/fluctuating (emergency!) vs dementia chronic vs depression mood/guilt.",
      ],
      quiz: {
        keywords: ["depression", "anhedonia", "anxiety", "GAD", "panic", "psychosis", "hallucinations", "delusions", "PHQ", "GAD-7", "screening", "postnatal", "substances", "CAGE", "delirium"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "stigma-suicide-and-referral",
      title: "Stigma, suicide and referral",
      minutes: 18,
      objectives: [
        "Run suicide 5 steps.",
        "Safety-plan + follow up.",
        "Navigate Ghana pathways.",
        "Fight stigma daily.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Suicide steps",
          paragraphs: [
            "<strong>SUICIDE — five steps, TODAY</strong> (exam + life!): <strong>1. ASK</strong> directly, privately: 'are you thinking of HARMING yourself…? plan…? means…? when…?' (asking OPENS rescue — COM M5!). <strong>2. SAFETY</strong>: means RESTRICTED? (ropes! pesticides! drugs locked away!) watcher NAMED? 24-hour cover arranged? High risk = NEVER leave alone + ESCORT referral. <strong>3. PLAN</strong> — written safety plan: warning SIGNS ('when I…') + coping STEPS ('I'll…') + NUMBERS (CPN! clinic! trusted person!) + clinic RETURN date. Copy to patient + watcher + file. <strong>4. REFER</strong> — psychiatry/CPN TODAY (below's pathways!), warm handover ('Kofi, this is Ama — she's expecting you…'), escort if high-risk. <strong>5. FOLLOW-UP</strong> — YOU call/visit ('Thursday, I promised' — then CALL!): post-discharge + post-crisis WEEKS = peak danger; follow-up IS prevention. Document EVERYTHING (INF!): quotes + risk + plan + referral + follow-up date. <strong>WARNING SIGNS</strong>: giving things AWAY + goodbyes + 'better off DEAD' + sudden CALM after despair (decision made!) + withdrawal + risk-taking + means-BUYING. <strong>GHANA PATHWAYS</strong>: ward/OPD → district DOCTOR → CPN (community psychiatric nurse!) → PSYCHIATRIST (regional/teaching!) → Pantang/Ankaful/specialist as needed. Ring: CHPS + family + pastors + queen mothers + support groups. Know YOUR district's CPN NAME + NUMBER — referral is a PERSON, not a form. Attempt/suicide on ward? PRO-I compass + preserve + support + debrief + review (never blame!).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-BEH-0012.svg",
          alt: "Five boxes ask-direct safety-plan refer-today stigma-fight relationship. Suicide five steps with document and escort rules. Warning signs seven plus peak-danger weeks. Ghana pathways chain plus support ring plus CPN-name rule. Stigma fight five moves plus Mental Health Act. Therapeutic relationship five qualities. Debrief note. Mantra quoted.",
          caption: "Ask, safe, plan, refer, follow — stigma fought, hope held.",
        },
        {
          type: "text",
          heading: "Stigma + relationship",
          paragraphs: [
            "<strong>STIGMA FIGHT</strong> (Goffman's 'spoiled identity' — M01!): NORMALISE ('many mothers feel this after birth… many students…' — common + treatable!) + kind LANGUAGE (person-first, ALWAYS — correct colleagues gently: 'person with…') + privacy FIERCE (gossip kills help-seeking — who's told what, documented!) + chaining/beating/starving REFUSED + REPORTED (prayer camps! homes! shrines! — Ghana's Mental Health Act PROTECTS patients; report abuses to authorities!) + recovery STORIES shared ('Ama finished school after treatment — she's a nurse now!'). Stigma kills quietly: hidden illness → no care → suicide/chronicity. Every normalising sentence is prevention. <strong>THERAPEUTIC RELATIONSHIP</strong>: SAME nurse where possible + PREDICTABLE ('I'll see you Thursday — I keep promises!') + HOPEFUL ('treatment WORKS — I've seen recovery!') + HUMAN (tea + time + kindly humour + listened-to!) + BOUNDARIES (PRO-I — warm, not entangled!). Trust = adherence = recovery — BE the nurse they return to. Involve FAMILY (psychoeducation: 'illness, not spirits/curse — drugs + support heal!') + faith (pastor ALLIES — pray AND prescribe!) + work/school (return planned!). <strong>DEBRIEF YOU</strong>: suicides + attempts + violent incidents WOUND nurses — share + reflect (Gibbs!) + support + review honestly (COM M02!). Guilt examined, never carried silently: 'what did I do right? what'll I change?' — then continue. Hope held for patients requires hope held for self.",
          ],
        },
        {
          type: "table",
          heading: "Crisis + stigma moves",
          columns: ["Moment", "Do this", "Never this"],
          rows: [
            ["'Better off dead' hint", "Direct ask + safety + plan + refer + follow", "Minimise, delay, gossip"],
            ["Voices commanding harm", "Safety + calm + urgent refer + escort", "Argue voices; leave alone"],
            ["Chained at prayer camp", "Treat + report abuse + family counsel", "Shrug 'their culture'"],
            ["Colleague says 'mad'", "Correct kindly: 'person with…'", "Laugh along; label charts"],
            ["Post-discharge week 2", "YOU call — peak danger window", "Assume 'referred = safe'"],
            ["After patient suicide", "Debrief + reflect + support + review", "Blame; carry guilt silent"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Referral is a person",
          body: "This week: learn your district CPN's NAME + NUMBER + clinic days — introduce yourself by phone. A referral that says 'call CPN Ama Mensah 024… — she expects you Thursday' succeeds; 'go to psychiatry' fails. Warm handovers, escorted risks, promised follow-ups: chains of PERSONS save lives that chains of FORMS lose.",
        },
      ],
      keyPoints: [
        "Suicide 5: ask direct → safety → written plan → refer TODAY → YOU follow up.",
        "Warnings: giving away + goodbyes + 'better off dead' + sudden calm + means-buying.",
        "High risk: never alone + escort; document quotes + risk + plan + date.",
        "Pathways: ward → doctor → CPN → psychiatrist → specialist; know CPN by NAME.",
        "Stigma: normalise + person-first + fierce privacy + refuse/report abuse + share recovery.",
        "Relationship: same + predictable + hopeful + human + bounded; debrief self always.",
      ],
      quiz: {
        keywords: ["suicide", "safety plan", "referral", "CPN", "psychiatrist", "follow-up", "warnings", "stigma", "Goffman", "chaining", "Mental Health Act", "relationship", "hope", "debrief", "escort"],
        categories: ["fundamentals"],
      },
    },
  ],
};
