import type { CourseModule } from "../types";

export const cellsDivisionAndTissues: CourseModule = {
  slug: "cells-division-and-tissues",
  title: "Cells, division and tissues",
  summary:
    "The living unit in detail: the chemicals of the cell, the organelles and their jobs, how substances cross the plasma membrane — and then how cells multiply by mitosis and meiosis, and how they organize into the four tissue types and the membranes that line the body's surfaces and cavities.",
  lessons: [
    {
      slug: "the-cell-chemistry-structures-and-transport",
      title: "The cell: chemistry, structures and transport",
      minutes: 20,
      objectives: [
        "Name the main chemicals of the cell and state what each class does.",
        "Describe the plasma membrane and compare passive with active transport, giving a nursing example of each.",
        "Name the organelles, state the job of each, and link three of them to diseases nurses meet.",
      ],
      blocks: [
        {
          type: "text",
          heading: "The smallest living unit",
          paragraphs: [
            "The <strong>cell</strong> is the smallest structure that carries out all the activities of life — taking in nutrients, releasing energy, responding, growing, reproducing. The body holds some thirty trillion of them in more than two hundred varieties: flat skin cells that tile a surface, long muscle cells that shorten, branching neurones that carry messages a metre or more, red blood cells that discard their nucleus to make room for haemoglobin. This variety follows one rule: <strong>form follows function</strong>, and examiners love asking which shape suits which job.",
            "Because real cells differ so much, teaching uses a <strong>generalized cell</strong> — a composite showing every structure a cell <em>might</em> have, even though no single cell has them all. Learn it once and every tissue, organ and disease story has somewhere to attach: anaemia is a red-cell story, infection a white-cell story, cancer a division story, and wound healing a story of cells migrating, multiplying and laying down tissue.",
          ],
        },
        {
          type: "table",
          heading: "The chemicals of life — what cells are made of",
          columns: ["Chemical", "Job in the cell", "The nurse meets it as"],
          rows: [
            ["Water (60–70% of the cell)", "The solvent everything floats and reacts in", "Dehydration, oedema, IV fluid choice"],
            ["Proteins", "Build, catalyse (enzymes), carry, signal, defend", "Albumin and healing, antibodies, haemoglobin"],
            ["Carbohydrates", "Fast energy; surface markers for recognition", "Blood glucose, blood groups on red-cell surfaces"],
            ["Lipids", "Membranes, stored energy, insulation, hormones", "Cell membranes, cholesterol, steroid drugs"],
            ["Nucleic acids (DNA, RNA)", "DNA stores instructions; RNA carries them out", "Inherited disease, cancer from damaged DNA"],
            ["Salts (sodium, potassium, calcium…)", "Nerve impulses, contraction, fluid balance", "Electrolyte readings, cramps, arrhythmias"],
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0003.svg",
          alt: "The generalized cell. Outer plasma membrane (double line) enclosing cytoplasm with free ribosome dots. Central nucleus holding DNA with a dark nucleolus. Rough endoplasmic reticulum studded with ribosomes for protein assembly, smooth endoplasmic reticulum making lipids, Golgi apparatus packaging products, a mitochondrion making ATP energy, a lysosome for digestion, and a pair of centrioles for cell division.",
          caption: "One composite cell, every structure labelled — learn each organelle with its job, not just its name.",
        },
        {
          type: "table",
          heading: "Inside the cell — organelles, jobs and what fails",
          columns: ["Structure", "Job", "When it fails"],
          rows: [
            ["Plasma membrane", "Selective barrier: decides what enters and leaves", "Burns and frostbite destroy it — fluid pours out, infection pours in"],
            ["Nucleus (with DNA) and nucleolus", "Control centre; stores instructions, builds ribosomes", "Cancer begins as damaged DNA dividing without permission"],
            ["Ribosomes", "Assemble proteins from RNA instructions", "Many antibiotics work by jamming bacterial ribosomes"],
            ["Rough endoplasmic reticulum", "Folds and ships proteins (studded with ribosomes)", "—"],
            ["Smooth endoplasmic reticulum", "Makes lipids, detoxifies drugs and alcohol", "The liver's smooth ER is why alcoholics tolerate sedatives — until the liver fails"],
            ["Golgi apparatus", "Packages and addresses products for export", "—"],
            ["Mitochondria", "Release ATP energy from glucose (need oxygen)", "Cyanide and carbon monoxide kill by stopping mitochondria; muscle fatigue is energy debt"],
            ["Lysosomes", "Digest worn parts and engulfed invaders", "White cells that cannot digest leave the patient defenceless"],
            ["Centrioles and cytoskeleton", "Organize division; internal scaffolding and movement", "Some anti-cancer drugs freeze the skeleton mid-division"],
          ],
        },
        {
          type: "text",
          heading: "Crossing the membrane: transport",
          paragraphs: [
            "The membrane is <strong>selectively permeable</strong> — oxygen, carbon dioxide and small fats slip through, while glucose, salts and proteins need routes. <strong>Passive transport</strong> rides gradients for free: <strong>diffusion</strong> spreads solutes from high to low concentration (oxygen leaving the alveolus for the blood), <strong>facilitated diffusion</strong> lends large molecules a protein doorway (glucose entering most cells), <strong>osmosis</strong> moves <em>water</em> toward the saltier side, and <strong>filtration</strong> pushes fluid through under pressure (the glomerulus filtering blood into urine). <strong>Active transport</strong> spends ATP to move substances <em>uphill</em> — the sodium–potassium pump holds every nerve and muscle cell ready to fire — and <strong>bulk transport</strong> wraps cargo in membrane: <strong>endocytosis</strong> brings things in (a white cell engulfing bacteria is <strong>phagocytosis</strong>; drinking droplets is <strong>pinocytosis</strong>) while <strong>exocytosis</strong> ships things out (hormones, mucus, neurotransmitters).",
            "Osmosis deserves extra attention because IV fluids weaponize it daily. Water always follows salt across a membrane it cannot cross itself. A <strong>hypotonic</strong> solution (fewer salts than the cell) drives water <em>into</em> cells until they swell and may burst; a <strong>hypertonic</strong> solution drags water <em>out</em> until they shrivel; an <strong>isotonic</strong> solution balances and cells hold their shape. That is why normal saline and Ringer's lactate are the default resuscitation fluids, why pure water is never infused into veins, and why the oedematous patient is, at cell level, a story about pressures and proteins across membranes.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "The osmosis traps, defused",
          body: "'-tonic' describes the SOLUTION compared with the cell, not the cell itself. Water moves toward the saltier side — always. So hypotonic fluid → water into cells → swelling and possible rupture; hypertonic fluid → water out of cells → shrinkage and thirst. If a question asks what happens to red cells in distilled water, picture water rushing in with nowhere to drain: they swell and lyse.",
        },
      ],
      keyPoints: [
        "Cells vary because form follows function; the generalized cell is a composite showing every possible structure.",
        "Water, proteins, carbohydrates, lipids, nucleic acids and salts — each maps to something you assess or infuse.",
        "Nucleus (instructions), ribosomes and rough ER (proteins), Golgi (packaging), mitochondria (ATP), lysosomes (digestion), membrane (gatekeeper).",
        "Passive transport rides gradients free — diffusion, facilitated diffusion, osmosis (water!), filtration; active transport spends ATP uphill.",
        "Water follows salt: hypotonic swells cells, hypertonic shrinks them, isotonic holds them — the whole logic of IV fluid choice.",
      ],
      quiz: {
        keywords: ["cell", "organelles", "nucleus", "mitochondria", "osmosis", "diffusion", "active transport", "tonicity", "hypotonic", "hypertonic", "plasma membrane", "phagocytosis"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "division-and-tissues-mitosis-meiosis-and-the-four-fabrics",
      title: "Division and tissues: mitosis, meiosis and the four fabrics",
      minutes: 20,
      objectives: [
        "Order the phases of mitosis and state the headline event of each.",
        "Contrast mitosis with meiosis in purpose, products and chromosome count.",
        "Classify the four tissue types with their locations, and name the four body membranes.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Why cells divide",
          paragraphs: [
            "Division serves three masters: <strong>growth</strong> (one fertilized egg to thirty trillion cells), <strong>replacement</strong> (gut lining every few days, skin constantly, red cells by the million per second) and <strong>repair</strong> (every healing wound). Most of a cell's life is <strong>interphase</strong> — growing, working and quietly duplicating its DNA — with division itself a brief, tightly policed finale. The policing matters: <strong>checkpoints</strong> halt a cell whose DNA is damaged, and cancer is what happens when the checkpoints fail and division runs without permission. From a nurse's viewpoint, tissues divide at wildly different speeds — which is why gut, hair and bone marrow suffer most from anti-cancer drugs, and why nerves and heart muscle barely heal at all.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0299.svg",
          alt: "Mitosis and meiosis — two different jobs. Mitosis: one division producing two genetically identical diploid cells for growth and repair. Meiosis: two divisions producing four genetically different haploid gametes, halving the chromosome number from 46 to 23 so that fertilization restores 46.",
          caption: "Mitosis copies (growth and repair); meiosis halves (gametes). The bank diagram every division question reduces to.",
        },
        {
          type: "list",
          style: "steps",
          heading: "Mitosis in five snapshots (memorize the order)",
          items: [
            "<strong>Interphase</strong> — not division but preparation: the cell grows and duplicates every chromosome (46 become 46 doubled).",
            "<strong>Prophase</strong> — chromatin condenses into visible X-shaped chromosomes; the nuclear envelope breaks down; the spindle forms.",
            "<strong>Metaphase</strong> — chromosomes line up single file on the cell's equator, spindle fibres attached. (M = Middle.)",
            "<strong>Anaphase</strong> — sister halves are pulled Apart to opposite poles. (A = Apart.)",
            "<strong>Telophase + cytokinesis</strong> — two nuclei reform, the cytoplasm pinches in two: two identical diploid cells.",
          ],
        },
        {
          type: "table",
          heading: "Mitosis versus meiosis — the contrast examiners want",
          columns: ["", "Mitosis", "Meiosis"],
          rows: [
            ["Purpose", "Growth, replacement, repair", "Making gametes (sperm and eggs)"],
            ["Where", "Nearly every tissue", "Testes and ovaries only"],
            ["Divisions", "One", "Two (meiosis I and II)"],
            ["Products", "2 identical diploid cells (46 chromosomes)", "4 different haploid cells (23 chromosomes)"],
            ["Variation", "None — clones", "Crossing-over plus shuffling — every gamete unique"],
            ["If it goes wrong", "Cancer (unchecked) or failed healing", "Trisomies such as Down syndrome (extra chromosome 21)"],
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "Numbers that must be automatic",
          body: "Body cells are diploid: 46 chromosomes in 23 pairs. Gametes are haploid: 23 single chromosomes. Fertilization restores 46 in the zygote. Down syndrome is trisomy 21 — three copies of chromosome 21, usually from a gamete that carried 24. If a question gives you any one of these numbers, you should be able to supply the other two.",
        },
        {
          type: "text",
          heading: "Tissues: the four fabrics",
          paragraphs: [
            "A <strong>tissue</strong> is a group of similar cells plus their surrounding material, organized for one job — and the whole body is woven from just four fabrics. <strong>Epithelial tissue</strong> covers and lines: skin surface, gut lining, gland ducts, the exchange walls of lungs and kidneys. It packs cells tightly with almost no matrix, classifies by layers (<strong>simple</strong> = one, for exchange; <strong>stratified</strong> = many, for protection) and by cell shape (<strong>squamous</strong> flat, <strong>cuboidal</strong> cube, <strong>columnar</strong> tall), and it regenerates fast — which is why grazes heal in days. <strong>Connective tissue</strong> is the opposite: few cells in abundant <strong>matrix</strong> — bone and cartilage, blood, fat, tendons, the areolar tissue under the skin. It supports, binds, stores and transports, and it is the most abundant tissue you carry.",
            "<strong>Muscle tissue</strong> shortens on command and comes in three kinds — <strong>skeletal</strong> (voluntary, striped, bolted to bone), <strong>cardiac</strong> (striped but involuntary, branching cells welded by intercalated discs so the heart beats as one), and <strong>smooth</strong> (involuntary, unstriped, squeezing gut, vessels, bladder and uterus). <strong>Nervous tissue</strong> senses and signals: <strong>neurones</strong> carry impulses along axons, and <strong>glial cells</strong> feed, insulate and defend them. Where tissues meet surfaces they form <strong>membranes</strong>: the <strong>cutaneous</strong> membrane (skin), <strong>mucous</strong> membranes (wet linings open to the air — mouth, nose, gut, urinary and reproductive tracts), <strong>serous</strong> membranes (the pleura, pericardium and peritoneum of Module 01, parietal on the wall and visceral on the organ), and <strong>synovial</strong> membranes (oiling joint cavities). Infection and examination both travel these surfaces — which is why the membrane list is clinical, not decorative.",
          ],
        },
        {
          type: "table",
          heading: "The four tissues at a glance",
          columns: ["Tissue", "Varieties", "Found in", "Headline job"],
          rows: [
            ["Epithelial", "Simple / stratified × squamous / cuboidal / columnar; glandular", "Skin surface, gut and airway linings, glands, kidney tubules", "Cover, line, absorb, secrete, protect"],
            ["Connective", "Bone, cartilage, blood, adipose, areolar, dense (tendon/ligament)", "Skeleton, joints, under skin, around organs, vessels", "Support, bind, store, transport, defend"],
            ["Muscle", "Skeletal (voluntary, striped); cardiac; smooth", "Limbs and trunk; heart wall; gut, vessels, bladder, uterus", "Move the body and move substances through it"],
            ["Nervous", "Neurones + glia", "Brain, cord, nerves, sense organs", "Sense, integrate, command — fast control"],
          ],
        },
        {
          type: "text",
          heading: "From tissues to repair",
          paragraphs: [
            "When tissues are damaged, repair runs one of two ways. <strong>Regeneration</strong> replaces destroyed cells with the same kind — skin, gut lining, liver and bone do this well. <strong>Fibrosis</strong> patches the gap with collagen scar — the heart, brain and skeletal muscle default to this, which is why a healed infarct is a scar that cannot contract and a healed brain injury is a gap that cannot think. Which path a tissue takes decides the patient's future: the nurse who knows that cartilage barely heals, that tendons heal slowly, and that pressure damage to muscle runs deeper than the skin shows, positions, offloads and refers with the reason in mind, not just the routine.",
          ],
        },
      ],
      keyPoints: [
        "Interphase duplicates DNA; mitosis runs prophase → metaphase (middle) → anaphase (apart) → telophase + cytokinesis.",
        "Mitosis: one division, 2 identical diploid cells, growth and repair. Meiosis: two divisions, 4 different haploid gametes.",
        "Diploid 46, haploid 23, zygote restores 46; trisomy 21 (Down syndrome) is the classic meiosis error.",
        "Four tissues: epithelial (cover/line), connective (support/bind, most abundant), muscle (three kinds), nervous (neurones + glia).",
        "Four membranes: cutaneous (skin), mucous (wet tracts), serous (pleura/pericardium/peritoneum), synovial (joints).",
        "Repair is regeneration (same tissue back) or fibrosis (collagen scar) — and the tissue decides which.",
      ],
      quiz: {
        keywords: ["mitosis", "meiosis", "chromosomes", "diploid", "haploid", "epithelial", "connective tissue", "muscle tissue", "nervous tissue", "mucous membrane", "serous membrane", "synovial"],
        categories: ["fundamentals"],
      },
    },
  ],
};
