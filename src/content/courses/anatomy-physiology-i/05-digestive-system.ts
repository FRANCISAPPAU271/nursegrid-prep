import type { CourseModule } from "../types";

export const digestiveSystem: CourseModule = {
  slug: "digestive-system",
  title: "The digestive system: tract, organs and absorption",
  summary:
    "Food to fuel: the five digestive processes and the wall that performs them, the tract from mouth to anus with what each segment contributes, peristalsis versus segmentation — then the accessory organs (liver, gallbladder, pancreas), the enzyme table, how carbohydrates, proteins and fats are digested and absorbed, and where water, vitamins and glucose control fit.",
  lessons: [
    {
      slug: "the-digestive-tract-mouth-to-anus",
      title: "The digestive tract: mouth to anus",
      minutes: 20,
      objectives: [
        "State the five digestive processes and the four layers of the gut wall.",
        "Trace the tract naming each segment and the contribution it makes.",
        "Distinguish peristalsis from segmentation and swallowing's three phases.",
        "Explain where absorption mostly happens and what the colon reclaims.",
      ],
      blocks: [
        {
          type: "text",
          heading: "One tube, five processes",
          paragraphs: [
            "The digestive system is a <strong>9-metre tube</strong> — mouth, pharynx, oesophagus, stomach, small intestine, large intestine, rectum, anus — plus accessory organs that pour in helpers. Everything it does reduces to five processes: <strong>ingestion</strong> (taking food in), <strong>propulsion</strong> (moving it along), <strong>digestion</strong> (mechanical chopping plus chemical breakdown), <strong>absorption</strong> (moving products into blood or lymph), and <strong>defecation</strong> (expelling the rest). Propulsion runs two motions: <strong>peristalsis</strong> — waves of contraction behind and relaxation ahead that push contents forward (and run in the oesophagus even upside down), and <strong>segmentation</strong> — stationary squeezes that mix and churn, mostly in the small intestine.",
            "The wall repeats the same four layers almost everywhere: the <strong>mucosa</strong> (epithelium that secretes and absorbs, over connective tissue and a thin muscle slip), the <strong>submucosa</strong> (vessels, nerves, glands), the <strong>muscularis</strong> (circular inside, longitudinal outside — the peristalsis engine, with a third oblique layer in the stomach for churning), and the <strong>serosa</strong> (the peritoneum's visceral slick). Between the muscle sheets sits the <strong>enteric nervous system</strong> — half a billion neurones running digestion locally, which is why the gut keeps working in a brain-dead patient and why anxiety ties the stomach in knots.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0008.svg",
          alt: "The digestive tract and accessory organs. Mouth with salivary glands (chewing plus amylase) draining down the oesophagus (peristalsis only) into the J-shaped stomach (acid plus pepsin making chyme). The liver (bile plus metabolism) with the gallbladder storing bile, the pancreas (enzymes plus bicarbonate) tucked in the duodenal C-loop, the coiled small intestine where digestion ends and absorption happens, framed by the ascending, transverse and descending colon absorbing water, with appendix, sigmoid colon and rectum completing the tube.",
          caption: "Follow one meal down the map: chew, push, churn, mix, absorb, dehydrate, expel.",
        },
        {
          type: "text",
          heading: "Mouth to stomach: preparation and churning",
          paragraphs: [
            "Digestion starts before food arrives — the sight and smell trigger <strong>saliva</strong>, 1–1.5 litres a day carrying <strong>amylase</strong> (starch), <strong>lysozyme</strong> (bacteria) and mucus for the <strong>bolus</strong>. Thirty-two adult <strong>teeth</strong> (twenty deciduous before them) cut, tear and grind while the tongue tastes, rolls and pushes. <strong>Swallowing</strong> then runs three phases: <strong>voluntary</strong> (tongue rams the bolus back), <strong>pharyngeal</strong> (the epiglottis caps the airway, the <strong>upper sphincter</strong> opens — the phase strokes destroy, causing <strong>dysphagia</strong> and aspiration), and <strong>oesophageal</strong> (peristalsis plus gravity deliver through the <strong>lower sphincter</strong>, whose failure refluxes acid as <strong>heartburn</strong>).",
            "The <strong>stomach</strong> is a churn with attitude: <strong>rugae</strong> unfold to hold 1–1.5 litres, <strong>hydrochloric acid</strong> (pH ~2) kills microbes and unfolds proteins, <strong>pepsin</strong> starts digesting them, and a <strong>mucus–bicarbonate barrier</strong> stops the stomach digesting itself — breach it (NSAIDs, <em>H. pylori</em>, alcohol) and <strong>ulcers</strong> follow. Only alcohol, aspirin and some water absorb here; everything else leaves through the <strong>pylorus</strong> as <strong>chyme</strong>, squirted in small batches so the duodenum is never overwhelmed. Vomiting reverses the whole system by central command — and the nurse counts it as fluid, acid and potassium lost.",
          ],
        },
        {
          type: "text",
          heading: "Small intestine: where digestion ends and absorption rules",
          paragraphs: [
            "The <strong>small intestine</strong> — 6 metres of duodenum (25 cm), jejunum and ileum — finishes nearly all digestion and absorbs nearly everything absorbable. The <strong>duodenum</strong> is the mixing bowl: chyme meets bile and pancreatic juice through the <strong>hepatopancreatic ampulla</strong>, acid is neutralized by <strong>bicarbonate</strong>, and enzymes complete the breakdown. The <strong>jejunum</strong> absorbs sugars, amino acids, fatty acids, vitamins and most water; the <strong>ileum</strong> finishes B12 (with intrinsic factor), bile salts and leftovers before the <strong>ileocecal valve</strong> meters flow into the colon. Speed decides stool: hurry transit (infection, anxiety, laxatives) and water escapes as <strong>diarrhoea</strong>; stall it (opioids, immobility, dehydration) and the colon over-dries the residue into <strong>constipation</strong>.",
          ],
        },
        {
          type: "text",
          heading: "Large intestine: reclaim, host, expel",
          paragraphs: [
            "The <strong>large intestine</strong> — caecum and <strong>appendix</strong>, ascending, transverse, descending and sigmoid colon, rectum — absorbs the remaining <strong>water and salts</strong> (about 1.5 litres presented, 100–200 mL lost) and hosts the <strong>flora</strong> that ferment fibre, make <strong>vitamin K</strong> and B vitamins, and crowd out pathogens — the reason broad-spectrum antibiotics cause diarrhoea. Its <strong>haustra</strong> (pouches) and slow mass movements store while they dry; stretch of the <strong>rectum</strong> triggers the <strong>defecation reflex</strong>, voluntary only through the external sphincter. Faeces are three-quarters water plus fibre, bacteria, shed cells and bile pigments (<strong>stercobilin</strong> browns them; pale stools mean blocked bile, black tarry <strong>melaena</strong> means digested blood from above, fresh red blood from below).",
          ],
        },
        {
          type: "table",
          heading: "The tract in one pass",
          columns: ["Segment", "Headline job", "The nurse meets it as"],
          rows: [
            ["Mouth + salivary glands", "Chew, moisten, start starch", "Mouth care, dentures, dysphagia screens"],
            ["Pharynx + oesophagus", "Swallow, push (peristalsis)", "Aspiration risk, NG tube path, heartburn"],
            ["Stomach", "Churn, acid + pepsin → chyme", "Vomiting, ulcers, NG aspirates, feeds"],
            ["Duodenum", "Neutralize, mix, finish digestion", "Peptic ulcer pain, pancreatitis"],
            ["Jejunum + ileum", "Absorb nearly everything", "Diarrhoea, malabsorption, stomas"],
            ["Colon + rectum", "Reclaim water, host flora, expel", "Constipation, impaction, stool watching"],
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Tract questions in one pass",
          body: "Peristalsis pushes, segmentation mixes. Most digestion ends in the duodenum, most absorption in the jejunum, water reclamation in the colon. The stomach absorbs almost nothing (alcohol and aspirin excepted). Dysphagia lives in the pharyngeal phase; heartburn in a failed lower sphincter; B12 is absorbed in the ileum with intrinsic factor made in the stomach — remove either end and anaemia follows.",
        },
      ],
      keyPoints: [
        "Five processes: ingest, propel, digest, absorb, defecate; wall layers are mucosa, submucosa, muscularis, serosa.",
        "Peristalsis pushes forward, segmentation mixes in place; swallowing runs voluntary → pharyngeal → oesophageal.",
        "Mouth chews and starts starch; stomach churns with acid and pepsin into chyme; pylorus meters it out.",
        "Duodenum mixes and neutralizes, jejunum absorbs, ileum finishes B12 and bile salts; speed decides stool.",
        "Colon reclaims water and salts, hosts vitamin-K-making flora; rectal stretch triggers defecation.",
        "Pale stools mean blocked bile, melaena means blood from above, fresh blood from below.",
      ],
      quiz: {
        questionIds: ["NG-MOD-AP1-013"],
        keywords: ["peristalsis", "segmentation", "swallowing", "dysphagia", "stomach", "chyme", "pepsin", "duodenum", "jejunum", "ileum", "colon", "defecation", "constipation", "diarrhoea", "melaena", "ileocecal"],
        categories: ["risk-reduction"],
      },
    },
    {
      slug: "accessory-organs-and-the-chemistry-of-digestion",
      title: "Accessory organs and the chemistry of digestion",
      minutes: 20,
      objectives: [
        "State the digestive and metabolic jobs of the liver, gallbladder and pancreas.",
        "Name the digestive enzymes, their sources, substrates and products.",
        "Trace how carbohydrates, proteins and fats are digested and absorbed, and by which route each travels.",
        "Explain water, vitamin and mineral absorption, including B12, iron and calcium.",
        "Describe the insulin–glucagon control of blood glucose in plain terms.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The three helpers: liver, gallbladder, pancreas",
          paragraphs: [
            "The <strong>liver</strong> — 1.5 kg, the largest internal organ — claims some 500 jobs. Digestively it makes <strong>bile</strong> (bilirubin, bile salts, cholesterol, water): salts <strong>emulsify</strong> fat into droplets enzymes can attack. Metabolically it stores glucose as <strong>glycogen</strong> and releases it on demand, builds <strong>albumin</strong> and <strong>clotting factors</strong>, detoxifies drugs and alcohol, stores iron and vitamins A, D, B12, and clears <strong>bilirubin</strong> — fail at that and <strong>jaundice</strong> yellows the eyes, darkens urine and pales stools. The <strong>gallbladder</strong> stores and concentrates bile, squeezing it out when fat arrives triggers <strong>CCK</strong>; stagnant, cholesterol-heavy bile crystallizes into <strong>gallstones</strong>, whose classic colic strikes the right upper abdomen after fatty food.",
            "The <strong>pancreas</strong> serves two masters. Its <strong>acinar</strong> cells pour a litre of juice daily into the duodenum: <strong>bicarbonate</strong> to neutralize stomach acid plus the enzyme army — <strong>amylase</strong> (starch), <strong>lipase</strong> (fat), <strong>trypsin and chymotrypsin</strong> (protein), and nucleases. Its <strong>islets of Langerhans</strong> pour hormones into blood instead: <strong>insulin</strong> (beta cells) drives glucose into cells, <strong>glucagon</strong> (alpha cells) releases it back. Block the duct (gallstone, alcohol) and enzymes digest the pancreas itself — <strong>pancreatitis</strong>, with pain boring through to the back — while islet failure is <strong>diabetes</strong>, the subject of a whole later course.",
          ],
        },
        {
          type: "table",
          heading: "The enzyme table — source, substrate, product",
          columns: ["Enzyme (helper)", "Made in", "Digests", "Into"],
          rows: [
            ["Salivary amylase", "Salivary glands", "Starch", "Maltose (small start)"],
            ["Pepsin (+ HCl)", "Stomach chief cells", "Proteins", "Peptides"],
            ["Pancreatic amylase", "Pancreas", "Starch", "Maltose"],
            ["Trypsin, chymotrypsin", "Pancreas", "Proteins, peptides", "Small peptides, amino acids"],
            ["Lipase (+ bile)", "Pancreas (bile: liver)", "Fats", "Fatty acids + glycerol"],
            ["Maltase, sucrase, lactase", "Brush border", "Disaccharides", "Glucose (+ fructose, galactose)"],
            ["Peptidases", "Brush border", "Small peptides", "Amino acids"],
          ],
        },
        {
          type: "text",
          heading: "Three nutrients, three journeys",
          paragraphs: [
            "<strong>Carbohydrates</strong> start in the mouth (amylase), pause in stomach acid, resume under pancreatic amylase, and finish at the <strong>brush border</strong>, arriving as <strong>glucose</strong> (plus fructose and galactose, converted by the liver). <strong>Indigestible fibre</strong> never breaks down — it holds water, bulks stool and feeds flora, which is why fibre prevents constipation rather than causing nutrition. <strong>Proteins</strong> unfold in stomach acid, are cut by <strong>pepsin</strong>, then demolished by <strong>trypsin/chymotrypsin</strong> and brush-border peptidases into <strong>amino acids</strong>. <strong>Fats</strong> neediquette: <strong>bile emulsifies</strong> globules into droplets, <strong>lipase</strong> splits them into <strong>fatty acids and glycerol</strong>, which rebuild into chylomicrons inside the cell and leave by the <strong>lacteal</strong> — the only nutrient to travel lymph first. Without bile or lipase, fat slides through undigested as pale, greasy, foul <strong>steatorrhoea</strong>.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0009.svg",
          alt: "The villus: absorption close up. Finger-like villi lined by one-cell-thick epithelium with a microvilli brush border carrying the final enzymes. Inside each villus a capillary loop absorbs sugars and amino acids into blood bound for the liver via the portal vein, while a central lacteal collects fats into lymph. Folds times villi times microvilli expand the surface to about 200 square metres; flattened villi in coeliac disease or severe malnutrition collapse absorption.",
          caption: "Blood takes sugars and amino acids to the liver; lymph takes fats around it — and the brush border finishes what the lumen started.",
        },
        {
          type: "text",
          heading: "Water, vitamins, minerals — and glucose control",
          paragraphs: [
            "Water follows solutes passively along the whole gut — 9 litres presented daily, all but ~150 mL reclaimed, which is why <strong>diarrhoea dehydrates fast</strong>. Fat-soluble <strong>vitamins A, D, E, K</strong> ride with fat (blocked bile starves them); water-soluble <strong>B and C</strong> absorb directly. <strong>Iron</strong> absorbs in the duodenum (vitamin C helps, tea and antacids hinder); <strong>calcium</strong> needs <strong>vitamin D</strong> (Module 03's loop); <strong>B12</strong> needs <strong>intrinsic factor</strong> from stomach parietal cells and an intact ileum — remove the stomach (gastrectomy) or the ileum (Crohn's resection) and <strong>pernicious anaemia</strong> follows months later when liver stores run out.",
            "Absorbed glucose must land in a tight range, and two pancreatic hormones seesaw it there. Rising glucose releases <strong>insulin</strong>: cells take glucose up, the liver stores <strong>glycogen</strong>, blood sugar falls. Falling glucose releases <strong>glucagon</strong> (plus adrenaline, cortisol, growth hormone): glycogen breaks down, new glucose is made, blood sugar rises. Every diabetes story — the thirst and polyuria of highs, the sweat and confusion of lows, what insulin and the tablets do — is this seesaw tilted, and the full telling belongs to the endocrine course. For now, carry the mechanism: <strong>insulin stores, glucagon releases</strong>.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Chemistry questions in one pass",
          body: "Bile emulsifies — it digests nothing (no enzyme in it). Most chemical digestion ends in the duodenum; brush-border enzymes finish disaccharides and peptides. Fats travel lymph-first via lacteals; everything else goes portal-vein-first through the liver. B12 needs stomach-made intrinsic factor plus an intact ileum. Insulin stores glucose, glucagon releases it — and steatorrhoea means fat maldigestion (think bile, lipase, pancreas).",
        },
      ],
      keyPoints: [
        "Liver: bile, glycogen, albumin, clotting factors, detox, bilirubin clearance — jaundice when it fails.",
        "Gallbladder concentrates bile and squeezes on CCK; stones give right-upper-quadrant colic after fatty food.",
        "Pancreas: bicarbonate + amylase + lipase + trypsin into the duct; insulin + glucagon into blood.",
        "Carbs → glucose (brush border finishes); proteins → amino acids (pepsin → trypsin → peptidases); fats → fatty acids + glycerol (bile + lipase → lacteal).",
        "Villi + microvilli ≈ 200 m²; flatten them (coeliac, malnutrition) and absorption collapses.",
        "Iron in duodenum, calcium needs vitamin D, B12 needs intrinsic factor + ileum; insulin stores, glucagon releases.",
      ],
      quiz: {
        questionIds: ["NG-MOD-AP1-014","NG-MOD-AP1-015"],
        keywords: ["liver", "bile", "gallbladder", "pancreas", "amylase", "lipase", "trypsin", "lactase", "villus", "absorption", "steatorrhoea", "jaundice", "bilirubin", "intrinsic factor", "insulin", "glucagon"],
        categories: ["risk-reduction"],
      },
    },
  ],
};
