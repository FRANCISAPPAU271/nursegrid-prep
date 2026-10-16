import type { CourseModule } from "../types";

export const leadershipAndWardManagement: CourseModule = {
  slug: "leadership-and-ward-management",
  title: "Leadership and ward management",
  summary:
    "Leading from the uniform: leadership versus management, four styles with situational matching, servant leadership, emotional intelligence and Lewin's change steps — then running the ward with POSDCORB, fair safe rosters, supervision and appraisals, the five conflict styles with bedside-proof process, and supply control where stock-outs carry body counts.",
  lessons: [
    {
      slug: "leadership-styles-and-the-nurse-leader",
      title: "Leadership styles and the nurse leader",
      minutes: 20,
      objectives: [
        "Distinguish leadership from management.",
        "Match four styles to situations correctly.",
        "Apply emotional intelligence's five domains.",
        "Lead change with Lewin's three steps.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Leaders and managers: the ward needs both",
          paragraphs: [
            "<strong>Management</strong> handles <em>things</em> — rosters, stock, budgets, schedules, targets: doing things RIGHT. <strong>Leadership</strong> handles <em>people</em> — vision, trust, motivation, growth, culture: doing the RIGHT things. Ward in-charges must do both, switching by the minute: the morning drug-round check (management) becomes comforting a junior after a death (leadership) becomes re-planning cover when two call sick (management) becomes calming a furious relative (leadership). New graduates lead from day one — handovers, students, relatives, emergencies: <strong>the uniform leads before the rank does</strong>. And PRO-I's ethics follow upward: leaders model confidentiality, candour, consent and courage — teams copy what in-charges DO, not what policies say. A ward where the in-charge shouts, gossips and cuts corners will out-corrupt any protocol within a month.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0015.svg",
          alt: "Four leadership styles: autocratic for arrests fire violence and mass casualty; democratic for rosters protocols and changes needing ownership; laissez-faire for senior experts only, never juniors in crisis; transformational for quality drives and broken culture. Situational rule matches competence times urgency. Servant leadership removes obstacles. Emotional intelligence five domains: self-awareness, self-regulation, motivation, empathy, social skill. Lewin change: unfreeze, move, refreeze.",
          caption: "The best style is the one the situation needs — not the one the leader prefers.",
        },
        {
          type: "text",
          heading: "Styles, EI and change",
          paragraphs: [
            "<strong>Autocratic</strong> ('do this NOW') — decides alone, orders crisp: arrests, fire, violence, mass casualty, where seconds beat consensus. <strong>Democratic</strong> ('what do you think?') — consults, decides with buy-in: rosters, protocol changes, ward redesign. <strong>Laissez-faire</strong> ('you handle it') — trusts experts: senior teams, stable wards — <strong>never</strong> novices, students or crises (abandonment in a kind voice). <strong>Transformational</strong> ('see what we can become') — vision + coaching + inspiration: quality drives, demoralised wards, culture rebuilds. <strong>Servant</strong> overlay: 'what do you need from me?' — removing obstacles so the team shines. <strong>Emotional intelligence</strong>: self-awareness (know your triggers — fatigue, hunger, disrespect), self-regulation (pause before reacting), motivation (purpose beyond pay), empathy (feel the junior's first-night terror), social skill (resolve, persuade, reconcile). High-EI in-charges receive incident reports; low-EI ones receive cover-ups. <strong>Lewin's change</strong>: <strong>unfreeze</strong> (why now? data + story — 'three falls this month, one fractured hip'), <strong>move</strong> (pilot small, train, support loudly), <strong>refreeze</strong> (write protocol, audit, celebrate) — beats 'because I said so' every time.",
          ],
        },
        {
          type: "table",
          heading: "Situation to style: drill answers",
          columns: ["Situation", "Style", "Why"],
          rows: [
            ["Cardiac arrest, junior team freezing", "Autocratic", "Seconds count; clear orders ('you — compressions, you — drugs, you — time') save lives; debrief democratically after"],
            ["New roster system, grumbling ward", "Democratic", "Ownership needs voice; consult, pilot, adjust — imposed rosters breed absenteeism"],
            ["Senior night team, stable ward", "Laissez-faire", "Experts thrive on trust; check outcomes not footsteps; available not hovering"],
            ["Ward with cover-ups, low morale, complaints", "Transformational", "Culture needs vision + coaching + quick wins celebrated; autocracy deepens fear"],
            ["Student's first medication round", "Directive + supportive", "Novice + risk = teach closely, check everything, debrief kindly (situational: low competence, high stakes)"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The two-minute leadership audit",
          body: "Ask your team anonymously each quarter: 'What should I start / stop / continue?' Read every answer twice, thank them publicly, change ONE visible thing within a week, and report back. Leaders who ask and act earn the trust that makes autocratic moments obeyed instantly ('she only orders when it matters') and democratic moments honest ('he actually listens'). The audit costs two minutes; the trust compounds for years. File results in your portfolio (PRO-I M7) as leadership CPD with reflections.",
        },
      ],
      keyPoints: [
        "Management = things done right; leadership = people doing right things; in-charges switch by the minute.",
        "Autocratic (emergencies), democratic (ownership), laissez-faire (experts only), transformational (culture).",
        "Situational rule: competence × urgency picks the style; servant overlay removes obstacles.",
        "EI: self-awareness, self-regulation, motivation, empathy, social skill — high EI gets reports, low EI gets cover-ups.",
        "Lewin: unfreeze (data + story) → move (pilot + support) → refreeze (protocol + audit + celebrate).",
        "New graduates lead from day one; teams copy in-charge behaviour, not policies.",
      ],
      quiz: {
        questionIds: ["NG-MOD-PRO2-001"],
        keywords: ["leadership", "management", "autocratic", "democratic", "laissez-faire", "transformational", "servant", "situational", "emotional intelligence", "Lewin", "change", "vision", "motivation", "culture", "in-charge"],
        categories: ["leadership-delegation"],
      },
    },
    {
      slug: "managing-the-ward",
      title: "Managing the ward",
      minutes: 20,
      objectives: [
        "Run a ward with POSDCORB's seven functions.",
        "Build fair, safe, early rosters with skill mix.",
        "Resolve conflict with the five styles and safe process.",
        "Supervise, appraise and control supplies properly.",
      ],
      blocks: [
        {
          type: "text",
          heading: "POSDCORB: the ward manager's week",
          paragraphs: [
            "Seven functions cycle continuously: <strong>Planning</strong> (targets, rosters, leave calendars, cover plans, budgets — the ward that plans absorbs shocks); <strong>Organising</strong> (teams, zones, duty allocation, who-covers-whom); <strong>Staffing</strong> (right numbers + right mix + right supervision — never all-junior nights); <strong>Directing</strong> (briefing, deciding, ISBAR handovers, motivating); <strong>Co-ordinating</strong> (rounds, referrals, pharmacy, theatre, lab, porters — the nurse as the ward's switchboard); <strong>Reporting</strong> (handovers, statistics, incidents, audits upward and outward); <strong>Budgeting</strong> (imprest, stock, waste, cost control — every wasted cannula is a missing glove). Failures cascade: no planning → crisis staffing → skipped supervision → errors → unreported incidents → repeated harm. In-charges own the system even when they don't own the budget — escalate gaps <strong>in writing</strong> (PRO-I M5/M6: verbal warnings evaporate), prioritize transparently, document deferred care. Management is invisible when excellent and infamous when absent.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0016.svg",
          alt: "POSDCORB: Planning targets rosters leave cover budgets; Organising teams zones roles allocation; Staffing mix supervision mentoring; Directing briefing ISBAR deciding motivating; Co-ordinating rounds referrals pharmacy theatre lab; Reporting handover statistics incidents audits; Budgeting stock imprest waste cost control. Roster rules: fair safe early, skill mix every shift, rest between nights, rotation requests, approved swaps. Five conflict styles: competing, collaborating, compromising, avoiding, accommodating with private soon specific process. Supervision planned supportive signed. Appraisals annual evidence-based two-way. Supplies par levels FEFO controlled-drug counts.",
          caption: "POSDCORB plans the ward; conflict styles protect the team; rosters prove fairness.",
        },
        {
          type: "text",
          heading: "Rosters, conflict, supervision, stock",
          paragraphs: [
            "<strong>Rosters</strong>: fair (rotation for nights/weekends/festivals — favouritism rosters breed grievances and tribunals), safe (skill mix every shift, rest 11h+ between nights, acuity-matched numbers), published early (2–4 weeks — lives need planning), swaps <strong>approved not assumed</strong>, cover planned BEFORE leave granted. <strong>Conflict</strong> (nurse-nurse, nurse-doctor, nurse-relative): choose by stakes — <strong>competing</strong> (safety emergency: my way NOW), <strong>collaborating</strong> (best solution: time + trust allow), <strong>compromising</strong> (split fast: rosters, leave), <strong>avoiding</strong> (trivial or cooling — revisit, never bury), <strong>accommodating</strong> (relationship beats point: concede graciously); process always <strong>private, soon, specific</strong> ('when X, effect Y, suggest Z'), listen fully, agree + document + follow up. <strong>Supervision</strong>: planned (objectives + buddy + checks), supportive (debrief scares same-shift), signed (countersign + competencies) — 'watch and learn' unsupervised abandons two people. <strong>Appraisals</strong>: annual, evidence-based, two-way (strengths + ONE growth goal + support) — surprise criticism = failed year-round feedback. <strong>Supplies</strong>: par levels, first-expiry-first-out, controlled drugs counted per policy, breakages logged — oxytocin/MgSO4/antibiotic stock-outs are management failures with body counts.",
          ],
        },
        {
          type: "table",
          heading: "Ward crises: manage then lead",
          columns: ["Crisis", "Manage (system)", "Lead (people)"],
          rows: [
            ["Two night staff call sick", "Cover ladder (bank → swap → escalate), re-zone, prioritize ABCs + time-critical", "Thank covering staff, debrief morning, fix the pattern not just the night"],
            ["Doctor shouts at junior on round", "Pause round, protect junior, incident the behaviour, policy reminder", "Check junior privately, coach assertive phrases, follow up with doctor peer-to-peer"],
            ["Controlled drugs count wrong", "Freeze + recount + check records + inform in-charge/pharmacist per policy NOW", "No-blame facts first; support the nurse; system-fix storage/access after"],
            ["Relatives crowd + aggression brewing", "Security per protocol, visiting rules enforced, triage visible", "Acknowledge fear, promise update times, keep promises — presence defuses"],
            ["Repeated falls, same bay", "Audit (lighting, beds, staffing, footwear), pilot fixes, re-audit", "Share data + story, invite ideas, celebrate fall-free weeks loudly"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Never all-junior nights",
          body: "The deadliest roster pattern: nights staffed entirely by juniors, students and agency while seniors sleep. Deterioration, arrests, bleeds and confessions of error all peak when experience troughs. Rule: EVERY shift needs a competent decision-maker physically present (skill mix, not headcount); students never the senior cover; agency briefed + buddied, not abandoned. If management demands unsafe numbers, escalate IN WRITING (PRO-I M5/M6) and document deferred care — the in-charge who silently accepts an all-junior night co-owns everything that happens on it.",
        },
      ],
      keyPoints: [
        "POSDCORB: plan, organise, staff, direct, co-ordinate, report, budget — failures cascade to harm.",
        "Rosters: fair rotation, safe skill mix, early publishing, approved swaps, cover before leave.",
        "Conflict: competing/collaborating/compromising/avoiding/accommodating — private, soon, specific, documented.",
        "Supervision: planned + supportive + signed; appraisals annual, evidence-based, two-way, no surprises.",
        "Supplies: par levels, FEFO, controlled-drug counts — stock-outs of lifesavers are management failures.",
        "Never all-junior nights; escalate unsafe staffing in writing with documented deferred care.",
      ],
      quiz: {
        questionIds: ["NG-MOD-PRO2-002","NG-MOD-PRO2-003"],
        keywords: ["POSDCORB", "ward management", "roster", "skill mix", "supervision", "appraisal", "conflict", "competing", "collaborating", "compromising", "supplies", "stock", "controlled drugs", "in-charge", "delegation"],
        categories: ["leadership-delegation"],
      },
    },
  ],
};
