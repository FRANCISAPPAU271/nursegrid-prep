import type { CourseModule } from "../types";

export const privacySecurityEthics: CourseModule = {
  slug: "privacy-security-ethics",
  title: "Privacy, security and ethics",
  summary:
    "The sacred lock: need-to-know, minimum sharing, consent habits and legal exceptions under Ghana's Data Protection Act 843 — then passwords, phishing, phones, USB discipline, the breach drill and the true price of snooping.",
  lessons: [
    {
      slug: "confidentiality-in-the-digital-ward",
      title: "Confidentiality in the digital ward",
      minutes: 18,
      objectives: [
        "Apply need-to-know + minimum necessary.",
        "Summarise Act 843 patient rights.",
        "Handle family requests with consent.",
        "Justify the rare lawful disclosures.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Five locks on every record",
          paragraphs: [
            "A patient's story is lent to you, not given — and digital records make betrayal effortless (one screenshot) and detection certain (audit trails, M02!). Five locks guard every chart. <strong>1. NEED-TO-KNOW:</strong> open only YOUR patients' records, for care you are giving — curiosity is NEVER need-to-know; 'I wanted to see how theMP is doing' fails every disciplinary panel. <strong>2. MINIMUM NECESSARY:</strong> share the least that helps — the physiotherapist needs the mobility plan, not the HIV status. <strong>3. CONSENT HABIT:</strong> 'may I tell your sister the result?' — ask, note the answer, respect 'no'. <strong>4. LEGAL EXCEPTIONS ONLY:</strong> break confidentiality solely to prevent serious harm (suicidal plan, child abuse), for notifiable public-health threats (cholera, TB contacts), or on court order — and document exactly what, to whom, why. <strong>5. DOCUMENTED REASONING:</strong> every disclosure decision written down the same shift. Ghana's <strong>Data Protection Act 2012 (Act 843)</strong> — examinable! — requires personal data to be processed lawfully, fairly and securely; grants patients rights of access, correction and objection; and empowers the <strong>Data Protection Commission</strong> to enforce and sanction. Health data counts as SENSITIVE — the highest guard of all. Quote Act 843 + Commission + patient rights and your ethics answers gain instant authority (PRO-I M2/M3 confidentiality and consent bolt straight on!).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-INF-0005.svg",
          alt: "Five boxes need-to-know minimum consent Act 843 break-only-for with examples. Five locks explained with curiosity warning. Act 843 summary rights Commission sensitive data. Family dilemmas consent-first script plus emergency and HIV guidance. Ward leaks list with whisper rule. Break-glass justified audited rule. Minors extra guard. Cross-course links. Mantra quoted.",
          caption: "Their story, their consent, my lock — broken only to save.",
        },
        {
          type: "text",
          heading: "Families, leaks, break-glass",
          paragraphs: [
            "'Nurse, what is wrong with my husband?' — the daily dilemma. Script: check CONSENT first ('has he said I may share his results with you?'), share the MINIMUM ('he is stable; the doctor will explain the full plan at 2 pm — shall we meet then?'), and involve the patient ('let's tell her together'). Unconscious emergency? Share what treatment NEEDS with whom it NEEDS (allergies, history, contacts) and document why. HIV result and a partner at the desk? Counsel DISCLOSURE, offer mediated telling ('come together tomorrow, I'll support you'), know your facility policy — never ambush-call a partner (PRO-I autonomy + GER dignity + NUT tact all converge!). <strong>Ward leaks</strong> examiners list: corridor case-talk, lift gossip, screens facing visitors (angle them!), printouts abandoned on desks, and photos of charts 'for study' — NEVER; if a visitor could hear it, move the conversation. <strong>Break-glass</strong>: emergencies may override access blocks ('arrest in A&E, need the record NOW') — allowed AND fully audited, so justify it in the record the same shift; a false 'emergency' is snooping with extra steps. <strong>Minors and vulnerable</strong> adults get EXTRA guard: abuse, STI, pregnancy in a teen — share with the care team and safeguarding leads per policy, never with the waiting room; document who knew and why. The mantra: 'their story, their consent, my lock — broken only to save.'",
          ],
        },
        {
          type: "table",
          heading: "Disclosure decisions",
          columns: ["Request", "Response", "Document"],
          rows: [
            ["Spouse asks for results", "Check consent → minimum → joint telling", "Who consented, what shared, when"],
            ["Unconscious patient's kin", "Need-to-treat facts only", "Why, what, to whom"],
            ["Partner re HIV result", "Counsel + mediated disclosure offer", "Counselling + plan + policy cited"],
            ["Police 'just curious'", "Refuse; court order or emergency only", "Request + refusal + supervisor told"],
            ["Notifiable disease contacts", "Disclose per public-health protocol", "Protocol + contacts + officer"],
            ["Researcher wants data", "Consent + ethics approval + de-identify", "Approval ref + consent + dataset"],
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Screenshots are theft",
          body: "One screenshot of a chart 'for study' or 'to show a friend' is a confidentiality breach, an Act 843 violation and — if shared — prosecutable. Study from de-identified, consented teaching material, never live records. The audit trail knows you opened it; the law presumes you meant it. Curiosity has ended nursing careers — let it never end yours.",
        },
      ],
      keyPoints: [
        "Five locks: need-to-know + minimum + consent + legal exceptions + documented reasoning.",
        "Act 843: lawful/fair/secure processing; patient rights; Data Protection Commission; health = sensitive.",
        "Families: consent first → minimum → joint telling; emergencies treatment-need only.",
        "Leaks: corridors, screens, printouts, chart photos — whisper rule, angle screens, shred.",
        "Break-glass: emergency override allowed + audited + justified same shift.",
        "Minors/vulnerable: team + safeguarding only; document who knew and why.",
      ],
      quiz: {
        questionIds: ["NG-MOD-INFO-008"],
        keywords: ["confidentiality", "need-to-know", "minimum necessary", "consent", "Act 843", "Data Protection", "Commission", "disclosure", "family", "break-glass", "screenshots", "minors", "safeguarding", "audit", "HIV"],
        categories: ["leadership-delegation"],
      },
    },
    {
      slug: "passwords-devices-and-incident-response",
      title: "Passwords, devices and incident response",
      minutes: 18,
      objectives: [
        "Build strong password + MFA habits.",
        "Spot and stop phishing.",
        "Keep phones/USB patient-data-free.",
        "Run the breach drill fast.",
      ],
      blocks: [
        {
          type: "text",
          heading: "You are the firewall",
          paragraphs: [
            "Firewalls and antivirus guard the network; but 90% of breaches start with a HUMAN click — a nurse's click. Five habits make you the firewall. <strong>1. LOCK IT:</strong> Windows+L / log out EVERY time you leave a terminal, even for 30 seconds; angle screens from visitors; collect printouts immediately. An open LHIMS session is an open folder trolley in a crowd. <strong>2. STRONG + UNIQUE + MFA:</strong> long passphrases ('koko!7am:wardB'), unique per system, changed per policy, NEVER shared, taped, or emailed. Multi-factor authentication on everything offered. Shared ward logins? REFUSE and report — one nurse, one login, always (M02's legal rule!). <strong>3. VERIFY BEFORE CLICK:</strong> 'urgent: verify your LHIMS password' + odd link = phishing TRAP. Check the sender address, hover links, never open ward-system 'updates' from email, report to IT, warn colleagues — ransomware enters through ONE click, then wards go paper for weeks. <strong>4. CLEAN DEVICES:</strong> no patient photos on personal phones — EVER (dismissal + prosecution territory!); no records on unencrypted USB sticks; ward WhatsApp carries minimum info with consent — no full names, faces or results; lost device = report IMMEDIATELY for remote wipe. <strong>5. REHEARSED RESPONSE:</strong> know the breach drill below BEFORE you need it. Social engineering targets nurses specifically ('I'm Dr Mensah, locked out — what's the ward password?'): verify identity through channels, never surrender credentials by phone.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-INF-0006.svg",
          alt: "Five boxes lock-it strong-MFA no-phish personal-phones breach-stop with examples. Five habits with human-click statistic. Password rules plus shared-login refusal. Phishing anatomy with ransomware warning. Phones USB WhatsApp rules plus lost-device action. Breach drill five steps with cover-up warning. Snooping price audit NMC dismissal. Cross-course links. Mantra quoted.",
          caption: "Lock it, verify it, report it — my click is the firewall.",
        },
        {
          type: "text",
          heading: "Breach drill + snooping price",
          paragraphs: [
            "The <strong>breach drill</strong> (pure exam — five steps, SAME shift!): <strong>1. CONTAIN</strong> — unplug the compromised terminal? lock the session? retrieve the abandoned printout? stop the spread first. <strong>2. REPORT</strong> — supervisor + IT + data protection officer, immediately; night shift still reports (phone the on-call — delays compound harm). <strong>3. ASSESS</strong> — whose data? how many patients? what harm (stigma? fraud? safety?)? <strong>4. NOTIFY</strong> — affected patients + Data Protection Commission per policy; honesty now beats exposure later. <strong>5. LEARN</strong> — root-cause analysis, fix the gap, re-train the team (PRO-II QI cycle!). Cover-ups compound guilt: panels punish the hide far worse than the mistake. Then the <strong>snooping price</strong>: audit trails (M02!) catch EVERY view — curiosity clicks on celebrities, neighbours, colleagues or 'my auntie on ward C' bring queries, suspension, N&MC referral and dismissal. 'Just checking on my auntie' is STILL a breach: visit her, hold her hand, ask the team with her consent — don't snoop. Examiners pair snooping scenarios with Act 843 + professionalism consequences; interviews ask 'a colleague shows you a celebrity's results — what do you do?' (decline, remind, report per policy — PRO-I courage!). Your mantra: 'lock it, verify it, report it — my click is the firewall.'",
          ],
        },
        {
          type: "table",
          heading: "Threats + responses",
          columns: ["Threat", "Sign", "Your move"],
          rows: [
            ["Phishing email", "Urgency + odd sender + link", "Don't click; report to IT; warn team"],
            ["Phone impersonator", "'I'm the doctor, give the password'", "Verify via channels; never surrender"],
            ["Open terminal", "Logged-in, unattended", "Lock it; remind owner; log your own out"],
            ["Lost phone/USB", "May hold patient data", "Report NOW; remote wipe; document"],
            ["Snooping colleague", "Browsing celebrity charts", "Decline to view; remind; report"],
            ["Confirmed breach", "Data seen/taken wrongly", "Contain → report → assess → notify → learn"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          title: "The interview answer",
          body: "'A colleague shows you a famous patient's results on her phone. What do you do?' Distinction answer: 'I decline to look, remind her it's a breach under Act 843 and policy, ask her to delete it, and report to my supervisor — documenting what I saw and did. Patients trust us with their most sensitive data; fame doesn't reduce that trust.' Name the Act, refuse the view, protect the patient, follow policy — hired.",
        },
      ],
      keyPoints: [
        "Firewall habits: lock + strong/MFA + verify-before-click + clean devices + rehearsed drill.",
        "Passwords: long, unique, never shared; MFA everywhere; refuse shared logins.",
        "Phishing: urgency + odd sender = trap; report, warn, never click ward 'updates'.",
        "Phones/USB: zero patient data; ward WhatsApp minimum + consent; lost = report now.",
        "Breach drill: contain → report → assess → notify → learn, same shift, no cover-up.",
        "Snooping: trails catch all; suspension/N&MC/dismissal — visit, don't snoop.",
      ],
      quiz: {
        questionIds: ["NG-MOD-INFO-009","NG-MOD-INFO-010"],
        keywords: ["passwords", "MFA", "phishing", "ransomware", "social engineering", "USB", "WhatsApp", "breach", "contain", "notify", "snooping", "firewall", "lock", "lost device", "interview"],
        categories: ["leadership-delegation"],
      },
    },
  ],
};
