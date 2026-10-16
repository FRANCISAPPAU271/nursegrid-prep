import type { CourseModule } from "../types";

export const digitalProfessionalism: CourseModule = {
  slug: "digital-professionalism",
  title: "Digital professionalism",
  summary:
    "The nurse online and ahead: social media's five rules, the pause test, boundaries and cyberbullying response — then using AI wisely, guarding equity, and leading informatics change without leaving anyone behind.",
  lessons: [
    {
      slug: "social-media-and-the-nurses-reputation",
      title: "Social media and the nurse's reputation",
      minutes: 18,
      objectives: [
        "Apply the 5 social media rules.",
        "Run the pause test.",
        "Hold patient boundaries online.",
        "Respond to cyberbullying.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Five rules, one uniform",
          paragraphs: [
            "Online, you wear your uniform even in pyjamas — patients, employers and the N&MC read your posts as a NURSE's words. Five rules keep you safe. <strong>1. ZERO patient content:</strong> no names, faces, stories, wards, 'guess what happened at work today…' — NOTHING. Even 'funny' anecdotes betray trust and breach Act 843 (M03!). <strong>2. Never trust de-identification:</strong> 'but I hid the name!' — ward + diagnosis + date + age IDENTIFIES ('the 19-year-old with eclampsia on Tuesday' = one person). Colleagues identifiable? Same rules. Uniform selfies inside wards? Check policy — backgrounds leak patients, boards, screens. <strong>3. PAUSE before posting</strong> anything work-adjacent. <strong>4. Firm BOUNDARIES:</strong> decline patient/relative friend-requests kindly ('I keep social media separate — reach me via the clinic line'), separate personal/professional accounts, privacy settings high, never discuss cases in DMs. Friended your ward crush-patient? Unfriend and reflect — boundaries protect you both (PRO-I M3!). <strong>5. Positive professional VOICE:</strong> myth-busting threads, vaccination drives, graduation joy, CPD certificates, hand-hygiene dances with CONSENTED colleagues — build the profession's brand and YOUR hireable footprint. Employers google you: let them find a nurse. Screenshots outlive deletions — post like the panel, your patient and your grandmother read everything.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-INF-0011.svg",
          alt: "Five boxes no-patients anonymous-lies pause-rule boundaries post-good with examples. Five rules with screenshot warning. De-identification myth ward-plus-diagnosis math plus selfie policy. Pause test three questions plus rage-post warning. Boundaries scripts separate accounts privacy DMs. Cyberbullying screenshot block report plus support. Post-good examples plus google footprint. Mantra quoted.",
          caption: "In uniform online, always — patients never, pride always.",
        },
        {
          type: "text",
          heading: "Pause test + bullying response",
          paragraphs: [
            "The <strong>pause test</strong> (before EVERY work-related post): would I say it on TV in uniform? Would the PATIENT smile reading it? Would the N&MC panel APPLAUD? Any NO — delete the draft. Special danger: angry posting after brutal shifts. 'My hospital kills people' feels true at midnight and reads as defamation + investigation by morning — SLEEP first, raise concerns through PROPER channels (incident reports, supervisors, unions — PRO-I M6 + PRO-II M6!). Whistleblowing has protected routes; Facebook rants aren't one. <strong>Cyberbullying</strong>: screenshot everything, BLOCK, report (platform + facility + police if threats), and NEVER retaliate-post — retaliation makes two cases from one. Bullied COLLEAGUE? Support privately + encourage reporting + report yourself if it continues — silence enables (PRO-I courage!). Exam scenarios love: 'colleague posts a ward video with patients visible' (ask removal + report + document), 'relative tags you demanding results' (no clinical talk publicly — redirect to clinic channels), 'classmate shares exam paper photos' (academic misconduct — decline + report). And the career angle: a clean, proud, educational footprint WINS jobs — 'show us your professional online presence' is now an interview question. Curate it from student days: learn publicly, celebrate ethically, advocate kindly.",
          ],
        },
        {
          type: "table",
          heading: "Post or delete?",
          columns: ["Draft post", "Verdict", "Why"],
          rows: [
            ["Ward selfie, board behind", "DELETE", "Background leaks patients + plans"],
            ["'Funny patient story lol'", "DELETE", "Breach + cruelty; virality multiplies"],
            ["Vaccination-drive photos, consented", "POST", "Proud, consented, educational"],
            ["Midnight hospital rant", "DELETE + sleep", "Defamation risk; use proper channels"],
            ["CPD certificate + lesson learnt", "POST", "Hireable footprint; inspires peers"],
            ["Patient's DM asking dosage", "REDIRECT", "No clinical DMs — clinic line only"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "The screenshot rule",
          body: "Assume EVERY post, story, DM and 'disappearing' message is screenshotted within a minute and kept forever. Privacy settings, close-friends lists and deletions are wishes, not walls. The only reliably private work content is content never posted. When tempted, run the pause test — panel, patient, grandmother — and let two of three vetoes kill any draft.",
        },
      ],
      keyPoints: [
        "Five rules: zero patients + distrust de-ID + pause + boundaries + positive voice.",
        "Ward + diagnosis + date + age = identified; backgrounds and boards leak too.",
        "Pause test: TV-uniform + patient-smile + panel-applaud — any NO deletes.",
        "Rants ≠ whistleblowing: sleep, then proper channels (reports, supervisors, unions).",
        "Bullying: screenshot + block + report; support colleagues; never retaliate.",
        "Curate a hireable footprint: learn publicly, celebrate ethically, advocate kindly.",
      ],
      quiz: {
        questionIds: ["NG-MOD-INFO-017"],
        keywords: ["social media", "reputation", "de-identification", "pause test", "boundaries", "friend-requests", "cyberbullying", "screenshot", "whistleblowing", "defamation", "footprint", "employers", "NMC", "selfies", "DMs"],
        categories: ["leadership-delegation"],
      },
    },
    {
      slug: "ai-equity-and-leading-change",
      title: "AI, equity and leading change",
      minutes: 18,
      objectives: [
        "Name AI uses + limits in nursing.",
        "Verify AI outputs; protect data.",
        "Design equity into digital services.",
        "Lead change with the 6-step model.",
      ],
      blocks: [
        {
          type: "text",
          heading: "AI assists, nurses decide",
          paragraphs: [
            "Artificial intelligence already sits beside Ghanaian nurses: <strong>triage chatbots</strong> sorting hotline calls, <strong>documentation assistants</strong> drafting notes, <strong>image screening</strong> flagging TB on chest X-rays, <strong>deterioration predictors</strong> watching vital-sign trends, <strong>stock forecasters</strong> preventing drug-outs. More is coming — but the NURSE stays: accountability, touch and judgment can't be automated (M01 wisdom!). Use AI WELL: <strong>verify EVERY output</strong> — hallucinations sound confident ('cites' invented studies!); check against guidelines and your assessment before acting. <strong>Never paste identifiable patient data into public tools</strong> — that prompt is an M03 breach travelling to foreign servers; use only approved, governed systems for patient work. <strong>Know training bias</strong> — models trained on foreign data misread Ghanaian patients (skin-lesion tools on dark skin, risk scores on different populations!): local validation matters. <strong>Document AI-assisted decisions as YOURS</strong> — 'suggested by X, verified against Y, decided by me' — because legally and morally, the nurse decides (automation bias, M04!). <strong>Prompting is TIGER literacy now</strong> (M01!): specific, context-rich requests ('draft a discharge summary for a post-CS mother, Hb 9, twins, Twi-speaking — for MY review') beat vague ones — then VERIFY the draft line by line. Exam frame: AI = powerful junior: fast, tireless, confident — and wrong exactly when confidence peaks. Supervise it like one.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-INF-0012.svg",
          alt: "Five boxes AI-helps AI-limits equity lead-change resistance with examples. AI today plus tomorrow with nurse-stays line. Use-AI-well five rules with prompting note. Equity non-digital paths design-with guidance. Leading change six steps Kotter-lite. Resistance decoded four translations with responses. Cross-course links. Mantra quoted.",
          caption: "AI assists, nurses decide, nobody's left offline.",
        },
        {
          type: "text",
          heading: "Equity + leading change",
          paragraphs: [
            "Every digital service needs a <strong>NON-digital path</strong>: no smartphone? voice calls. No network? CHPS visits + paper logs. No literacy? local-language AUDIO + family-supported routines. No privacy at home? facility-based alternatives. Design WITH elders, rural users and low-literacy patients — not for them; pilot with the least-connected FIRST (if it works for grandmother in the village, it works for everyone). 'Digital first' must never mean 'analog never' (M04's check!). Then <strong>leading change</strong> — the super-user's exam model, six steps: <strong>1. WHY-story</strong> ('falls hurt our mothers — night rounding cut them 8 to 4'); <strong>2. involve EARLY</strong> (ward champions AND sceptics — sceptics spot real flaws!); <strong>3. train HANDS-ON</strong> (super-users, elbow support, practice patients — never lecture-only); <strong>4. QUICK WINS publicised</strong> ('bay B went 30 days fall-free!'); <strong>5. FEEDBACK loops + visible fixes</strong>; <strong>6. SUSTAIN</strong> (audit + onboard every newcomer). <strong>Resistance decoded</strong>: 'no time' = workflow clash (REDESIGN the workflow, don't add clicks!); 'it'll fail' = past trauma (pilot SMALL, win trust); 'patients won't' = projection (ask THEM — they surprise!); 'I'm too old' = training fear (buddy up, celebrate progress). Meet feelings, fix systems, celebrate adopters — never mandate-and-abandon. This is PRO-II M6 leadership through a digital lens — and your interview story: 'I led LHIMS rollout on my ward: champions, elbow support, falls dashboard — adoption 90% in 6 weeks.'",
          ],
        },
        {
          type: "table",
          heading: "Change leadership moves",
          columns: ["Step", "Do this", "Classic failure"],
          rows: [
            ["Why-story", "Patient-centred reason, told vividly", "Memo: 'management requires…'"],
            ["Involve", "Champions + sceptics from day one", "IT builds alone, nurses resist"],
            ["Train", "Hands-on, super-users, elbow support", "One lecture, 200 slides"],
            ["Quick wins", "Publicise early results loudly", "Silent pilot, silent death"],
            ["Feedback", "Visible fixes within weeks", "Suggestion box to nowhere"],
            ["Sustain", "Audit + onboard newcomers always", "Champion leaves, system dies"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "Your change story starts now",
          body: "You don't need permission to lead: run the journal club (M05!), plot the ward's first run chart, buddy the colleague who fears LHIMS, pilot SMS reminders for one clinic. Document each: baseline, action, result, reflection — that's a change portfolio (PRO-I M7!) and an interview arsenal. Leaders aren't appointed; they're the ones who started the chart.",
        },
      ],
      keyPoints: [
        "AI uses: triage, notes, images, predictors, stocks — nurse stays accountable.",
        "Verify outputs; no patient data in public tools; know bias; document as yours.",
        "Prompting = TIGER literacy: specific + context-rich + verified line by line.",
        "Equity: non-digital path for every service; design with the least-connected.",
        "Change: why-story → involve → hands-on train → quick wins → feedback → sustain.",
        "Resistance decoded: redesign workflows, pilot small, ask patients, buddy up.",
      ],
      quiz: {
        questionIds: ["NG-MOD-INFO-018"],
        keywords: ["AI", "artificial intelligence", "hallucinations", "bias", "prompting", "equity", "digital divide", "change", "super-user", "resistance", "Kotter", "champions", "sustain", "leadership", "validation"],
        categories: ["leadership-delegation"],
      },
    },
  ],
};
