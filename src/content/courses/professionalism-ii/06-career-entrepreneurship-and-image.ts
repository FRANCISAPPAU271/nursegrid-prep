import type { CourseModule } from "../types";

export const careerEntrepreneurshipAndImage: CourseModule = {
  slug: "career-entrepreneurship-and-image",
  title: "Career, entrepreneurship and image",
  summary:
    "Owning your future: Ghana's nursing ladder from staff nurse to director with the education climb (top-up to PhD), post-basic specialities, study leave and scholarships, promotion fuel with five-year plans — then private-practice licensing in order, viable nurse-owned ventures, business basics with ethical marketing, professional image from uniform to social media, and welfare with burnout shields.",
  lessons: [
    {
      slug: "career-pathways-and-further-education",
      title: "Career pathways and further education",
      minutes: 20,
      objectives: [
        "Climb Ghana's nursing ladder deliberately.",
        "Choose education pathways and specialities.",
        "Win study leave and scholarships.",
        "Fuel promotion with portfolio evidence.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The ladder, rung by rung",
          paragraphs: [
            "Ghana's public-sector climb: <strong>Staff Nurse/Midwife</strong> (bedside foundation — everyone starts here; master it, don't escape it) → <strong>Senior Nursing Officer</strong> (shift leads, preceptors — M01/M02 skills pay here) → <strong>Principal Nursing Officer</strong> (in-charges, specialists, tutors) → <strong>Deputy Director and above</strong> (district/regional leadership) → <strong>Chief/Director</strong> (policy, directorates, national office). Parallel tracks: <strong>clinical specialists</strong> (critical care, perioperative, ophthalmic, ENT, mental health, paediatrics, oncology, nephrology, emergency, midwifery), <strong>educators</strong> (tutors, clinical instructors, lecturers), <strong>researchers</strong> (M03 skills → trials, policy evidence), <strong>managers/leaders</strong> (M01 → matron → director), <strong>public health</strong> (disease control, health promotion, CHPS leadership), <strong>policy/global health</strong> (MOH, WHO, NGOs). Lateral moves teach: CHPS → ICU → classroom → district office — <strong>breadth before height</strong> builds the directors of tomorrow. The nurse who 'just wants promotion' stagnates; the nurse who builds competence + evidence + visibility rises on merit's escalator.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0025.svg",
          alt: "Ladder: staff nurse foundation, senior shift leads, principal in-charge specialists tutors, deputy director regional leadership, chief director policy. Education climb: diploma to BSc top-up to masters to PhD; post-basic speciality certificates listed; study leave serve-apply-bond; scholarships Ghana Commonwealth DAAD facility. Promotion fuel: appraisals, CPD log with QI evidence, STAR interviews, clean record, years served. Five-year plans reviewed with mentor; breadth before height.",
          caption: "Climb deliberately — qualifications open doors, portfolios walk through them.",
        },
        {
          type: "text",
          heading: "Education, leave, scholarships",
          paragraphs: [
            "The climb: <strong>diploma/RGN → BSc top-up</strong> (2–3 years, sandwich/distance options — study while serving where possible) → <strong>MPH/MSc/MPhil</strong> (public health, nursing, leadership, informatics — match degree to dream: ward leaders take leadership, researchers take MPhil) → <strong>PhD/postdoc</strong> (academia, national research, policy peaks). <strong>Post-basic specialities</strong> (certificates/diplomas): critical care, perioperative, ophthalmic, ENT, mental health, paediatrics, oncology, nephrology, emergency nursing, midwifery (post-basic or direct-entry). <strong>Study leave</strong>: serve the required years → apply through channels → honour the <strong>bond</strong> (return-of-service — read YOUR rules; bonded nurses who vanish face recovery + blacklisting). <strong>Scholarships</strong>: Ghana Scholarships Secretariat, Commonwealth, DAAD, WHO/TDR, facility sponsorships, university assistantships — apply EARLY + widely + excellently (transcripts, recommendations from mentors — M02 relationships pay). Rejected? Ask feedback, strengthen, reapply — funded nurses are mostly persistent applicants, not just brilliant ones. Distance + sandwich modes let salaries continue — finance the dream without starving the family.",
          ],
        },
        {
          type: "text",
          heading: "Promotion fuel and five-year plans",
          paragraphs: [
            "<strong>Promotion fuel</strong>: appraisals (M01: evidence-based, two-way — feed your in-charge achievements year-round so appraisal holds no surprises), <strong>CPD log</strong> (PRO-I M7: courses + reflections + QI/audit evidence — the fat honest file wins), interviews (STAR stories from portfolio — Situation-Task-Action-Result), required exams passed, <strong>clean disciplinary record</strong> (PRO-I M3's ladder avoided — one erasure ends every plan), years served + bonds honoured. <strong>Five-year plans</strong>, written + reviewed yearly with a mentor: 'by 2030: BSc + critical-care certificate + SNO + two QI projects published + journal club founded' — specific, dated, owned. Annual review: what moved? what stalled? what changes? Share plans with in-charges (support follows the known) and family (dreams need domestic logistics). Setbacks (failed exam, rejected leave, frozen promotions) get <strong>Gibbs reflection</strong> (PRO-I M7) + adjusted plan, not abandonment: careers are marathons with water stations, and this module is yours.",
          ],
        },
        {
          type: "table",
          heading: "Dreams to first steps",
          columns: ["In 5 years I want…", "First step this month", "Evidence I'll file"],
          rows: [
            ["BSc + SNO", "Request top-up prospectuses + fees plan", "Applications, study timetable, fee savings log"],
            ["Critical-care specialist", "Shadow ICU + ask cert requirements", "Shadowing reflection, requirement checklist"],
            ["Ward in-charge", "Volunteer shift-lead + QI project (M04)", "Roster evidence, PDSA + run chart, feedback"],
            ["Tutor / lecturer", "Precept students excellently + teach pearls (M02)", "Teaching log, student feedback, assessments"],
            ["Study abroad funded", "Shortlist 3 scholarships + draft statement", "Eligibility matrix, mentor-reviewed drafts"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The mentor who has your dream job",
          body: "Find one nurse DOING what you want in 5–10 years and ask: 'What three things got you here? What would you do differently? May I check in quarterly?' (M02: mentors open doors.) Buy the sobolo, take notes, act on advice, report back — mentored planners out-execute solo dreamers threefold. Offer value back (QI help, literature searches, ward cover) — mentorship is exchange, not extraction. Your dream job's occupant is the map; this lesson is the compass; your portfolio is the journey log.",
        },
      ],
      keyPoints: [
        "Ladder: staff → senior → principal → deputy director → chief; parallel tracks reward breadth.",
        "Breadth before height: CHPS → ICU → classroom → office builds directors.",
        "Education: top-up → masters → PhD; post-basic specialities match passion to need.",
        "Study leave: serve → apply → honour bonds; scholarships need early, wide, excellent applications.",
        "Promotion: appraisals + CPD/QI evidence + STAR + clean record + years served.",
        "Five-year plans written + yearly mentor-reviewed; setbacks get reflection, not surrender.",
      ],
      quiz: {
        questionIds: ["NG-MOD-PRO2-016"],
        keywords: ["career", "promotion", "SNO", "principal", "director", "specialities", "top-up", "BSc", "masters", "PhD", "study leave", "scholarships", "bond", "appraisal", "five-year plan"],
        categories: ["leadership-delegation"],
      },
    },
    {
      slug: "entrepreneurship-image-and-welfare",
      title: "Entrepreneurship, image and welfare",
      minutes: 20,
      objectives: [
        "License private practice in correct order.",
        "Choose viable nurse-owned ventures.",
        "Run business basics with ethical marketing.",
        "Guard image and welfare for the long run.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Licence first, open second",
          paragraphs: [
            "Private practice checklist, <strong>in order, no skipping</strong>: <strong>1.</strong> NMC licence current + scope confirmed (Act 857, PRO-I M1/M6 — practise ONLY what you're licensed for; enrolled nurses don't open midwife-led units). <strong>2. HeFRA facility licence</strong> — premises inspected + approved BEFORE opening; unlicensed facilities close + prosecute. <strong>3.</strong> Business registration (Registrar-General) + GRA tax + district permits + SSNIT for staff. <strong>4.</strong> NHIS credentialing IF claiming (M05: accurate claims only — fraud warning stands). <strong>5.</strong> Protocols + records + referral links + emergency plan (PRO-I M5/M6 apply fully in private — tribunals don't discount entrepreneurs). <strong>6.</strong> Insurance (premises + professional indemnity) + waste contract + FDA-legitimate drug sourcing. Locum/moonlighting caution: public-sector rules govern second jobs — permission where required, never poach public patients on duty time, never too exhausted to be safe (fatigue + private nights = public-morning errors — PRO-I M3 owns them all). Unlicensed 'table-top clinics' and home-abortion rackets aren't entrepreneurship — they're crimes wearing scrubs.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-PRO-0026.svg",
          alt: "Private practice checklist six steps: NMC licence, HeFRA premises, business registration plus tax plus permits, NHIS credentialing, protocols records referrals emergency plan, insurance waste drug sourcing. Ventures: home care low capital, clinic or pharmacy licensed, training consultancy locum selling expertise. Business basics: plan, separate money, honest pricing with receipts, ethical marketing, no poaching or moonlighting theft. Image: dress, speech, conduct, social media rules, associations. Welfare: SSNIT pensions insurance wills emergency funds, burnout shields, retire to something.",
          caption: "Licence first, books clean, image guarded — enterprise with ethics.",
        },
        {
          type: "text",
          heading: "Ventures and business basics",
          paragraphs: [
            "Viable nurse-owned ventures: <strong>home care</strong> (post-op, elderly, chronic, palliative — low capital, high trust, ageing population; protocols + documentation + escalation links essential), <strong>clinics</strong> (OPD, ANC, school health, screening — licensed premises, referral networks), <strong>training/consultancy</strong> (BLS, first aid, QI support, CPD courses — sell expertise, M02/M04 skills monetized), <strong>locum agencies</strong> (ethical placement, verified licences), <strong>health products</strong> (FDA-approved supplies, uniforms, equipment — no miracle cures). Business basics: <strong>plan</strong> (service + market + costs + price + break-even month — one page beats none), <strong>separate money</strong> (business account; pay yourself a salary; 'chop money' accounting bankrupts), <strong>price honestly</strong> (cost + fair margin; written estimates; receipts ALWAYS — no surprise bills), <strong>market ethically</strong> (no cure guarantees, no fear ads, no fake testimonials, no 'doctor' title misuse — Act 857 again). Break-even patience: most clinics take 12–24 months; keep public salary until private income stabilizes (dual practice done legally, rested and declared).",
          ],
        },
        {
          type: "text",
          heading: "Image, welfare, longevity",
          paragraphs: [
            "<strong>Image</strong> (the uniform advertises everywhere): dress (clean, complete, ID visible — patients read creases as competence), speech (greet, plain words, no ward slang at patients, no shouting ever), conduct (punctual, sober, phone-down at bedside — the nurse scrolling while relatives wait photographs badly and practises worse), <strong>social media</strong> (PRO-I M6: no patients, no defamation, no ward identifiers — one viral post ends careers; but POSITIVE presence — health education, professional pride — builds brands), associations (GRNA + speciality groups: dues, meetings, voice — M05). <strong>Welfare</strong>: SSNIT tiers + provident/pensions understood, health insurance beyond employer, life insurance, <strong>wills written</strong> (nurses counsel planning but skip their own), emergency funds (3–6 months spending). <strong>Burnout shields</strong>: leave TAKEN not banked, debriefs used (M02), faith/family/friends kept, side-hustles bounded (two jobs + school + family = collapse scheduled), sleep guarded, help sought early (counselling is maintenance, not madness). <strong>Retire TO something</strong> — teach, consult, farm, rest, grandmother full-time: planned landings beat cliff-edges.",
          ],
        },
        {
          type: "table",
          heading: "Image moments: read the room",
          columns: ["Moment", "Image-building response", "Image-burning response"],
          rows: [
            ["Relative films you angrily", "Stay calm, explain, offer in-charge + records (M05: no scene)", "Snatch phone, shout, threaten — viral villain by evening"],
            ["Asked medical advice at church", "General info + 'see your clinic; here's what to ask'", "Diagnose + prescribe + dose — unlicensed consult, liable"],
            ["Colleague gossips about patient", "Redirect + remind confidentiality (PRO-I M4)", "Join in — tribunal exhibit with your voice on it"],
            ["Job interview 'why you?'", "STAR + portfolio + QI evidence + vision", "Vague virtue + certificate listing + salary-first"],
            ["Business slow month 8", "Review plan, cut costs, market ethically, persist", "Borrow hot, cut corners, fake claims — fraud spiral"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Moonlighting theft and title fraud",
          body: "Two career-enders: (1) Diverting public patients, drugs, time or equipment to private gain — theft + fraud + disciplinary erasure (PRO-I M3/M6); declare dual practice, keep hours safe, keep stocks separate. (2) Title fraud — 'doctor', unlicensed 'specialist', fake certificates: Act 857 offences that prosecute AND erase; sign truthfully (RN/RM + real credentials), advertise honestly. Enterprise with ethics builds wealth + respect; enterprise with shortcuts builds dockets. The nurses Ghana trusts most — and pays best — are the ones whose licences, books and words all match.",
        },
      ],
      keyPoints: [
        "Licence order: NMC → HeFRA → registration/tax → NHIS → protocols → insurance; no skipping.",
        "Ventures: home care, clinics, training/consultancy, ethical agencies — licensed and protocoled.",
        "Business: one-page plan, separate money, honest pricing + receipts, ethical marketing.",
        "Image: dress, speech, conduct, phone-down, positive-but-safe social media, associations.",
        "Welfare: pensions, insurance, wills, emergency funds; burnout shields used, not admired.",
        "Moonlighting theft + title fraud end careers; licences, books and words must match.",
      ],
      quiz: {
        questionIds: ["NG-MOD-PRO2-017","NG-MOD-PRO2-018"],
        keywords: ["entrepreneurship", "private practice", "HeFRA", "licence", "home care", "clinic", "business plan", "pricing", "marketing", "image", "social media", "welfare", "pension", "burnout", "title fraud"],
        categories: ["leadership-delegation"],
      },
    },
  ],
};
