import type { CourseModule } from "../types";

export const skeletalSystemAndJoints: CourseModule = {
  slug: "skeletal-system-and-joints",
  title: "The skeleton: bones, formation and joints",
  summary:
    "The body's scaffolding: the six jobs of bone, bone shapes and markings, gross and microscopic structure down to the osteon, how bones form, grow and remodel, calcium balance and its emergencies — then the skeleton's two divisions with the bones to name, and joints by structure and movement with fractures, osteoporosis and arthritis.",
  lessons: [
    {
      slug: "bones-structure-formation-and-the-skeleton",
      title: "Bones: structure, formation and the skeleton",
      minutes: 20,
      objectives: [
        "State the six functions of bone and classify bones by shape with an example of each.",
        "Describe the gross and microscopic structure of a long bone, including the cells of remodelling.",
        "Explain ossification, growth at the epiphyseal plate, remodelling and the stages of fracture healing.",
        "Explain calcium balance and recognize hypo- and hypercalcaemia at the bedside.",
        "Divide the skeleton into axial and appendicular bones and name the bones examiners expect.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Six jobs, one tissue",
          paragraphs: [
            "Bone looks dead and still; it is neither. The skeleton <strong>supports</strong> the body against gravity, <strong>protects</strong> the brain, cord, heart and lungs, provides <strong>levers</strong> for muscle to move, <strong>stores</strong> calcium and phosphate and releases them on hormonal order, <strong>makes blood</strong> in its red marrow, and <strong>stores energy</strong> as fat in yellow marrow. A nurse meets every one of these jobs: the collapsed vertebra that shortens an elder, the fractured rib that threatens a lung, the calcium reading that explains tetany, the anaemia that starts in failing marrow.",
            "Bones come in five shapes, each shaped by its work. <strong>Long</strong> bones (femur, humerus, phalanges) are levers. <strong>Short</strong> bones (carpals, tarsals) pack strength into small spaces that glide. <strong>Flat</strong> bones (skull plates, ribs, sternum, scapula) shield and offer broad muscle anchorage. <strong>Irregular</strong> bones (vertebrae, facial bones, coxal bones) fit complex jobs. <strong>Sesamoid</strong> bones (the patella, seeded inside tendons) protect tendons from wear and improve leverage. Their surfaces carry <strong>markings</strong> with a vocabulary of their own: projections that form joints (<strong>condyle</strong>, <strong>head</strong>), projections that anchor muscle (<strong>trochanter</strong>, <strong>tuberosity</strong>, <strong>spine</strong>, <strong>crest</strong>), and openings that pass vessels and nerves (<strong>foramen</strong>, <strong>fissure</strong>, <strong>meatus</strong>).",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0004.svg",
          alt: "The long bone and the osteon. A long bone with proximal and distal epiphyses of spongy bone holding red marrow, capped by articular cartilage; epiphyseal lines where growth plates fused; a periosteum wrapping the shaft; dense compact bone forming the diaphysis around a medullary cavity of yellow marrow. Inset: the osteon — concentric lamellae around a central canal of vessels and nerve. Bone cells: blasts build, clasts resorb, cytes maintain.",
          caption: "Read a long bone end to shaft: cartilage, spongy bone and red marrow, the fused growth line, periosteum, compact wall, yellow marrow.",
        },
        {
          type: "text",
          heading: "From gross bone to the osteon",
          paragraphs: [
            "A long bone reads the same way every time. Each swollen end, the <strong>epiphysis</strong>, is thin-walled <strong>spongy (trabecular) bone</strong> — a honeycomb of struts aligned with stress — filled with <strong>red marrow</strong> and capped where it meets another bone by <strong>articular cartilage</strong>. The shaft, the <strong>diaphysis</strong>, is a thick cylinder of <strong>compact bone</strong> around the <strong>medullary cavity</strong> of <strong>yellow marrow</strong>. The whole bone except the cartilage wears the <strong>periosteum</strong>: a fibrous skin carrying vessels, nerves and the repair cells — which is why fractures hurt so much and why stripped periosteum means dead bone. The dashed <strong>epiphyseal line</strong> is the scar of the childhood growth plate.",
            "Under the microscope, compact bone is cables of <strong>osteons</strong> — concentric rings (<strong>lamellae</strong>) around a <strong>central canal</strong> carrying an arteriole, a venule and a nerve, with bone cells (<strong>osteocytes</strong>) parked between rings and joined by tiny canals. Three cell types run the tissue: <strong>osteoblasts</strong> lay new bone down, <strong>osteoclasts</strong> dissolve it back, and osteocytes coordinate. Their endless tug-of-war is <strong>remodelling</strong>: about a tenth of the skeleton is rebuilt every year, weak struts removed, loaded ones reinforced — bone literally reshapes itself around the forces it feels, which is why the femur of a runner differs from that of a bedbound elder.",
          ],
        },
        {
          type: "text",
          heading: "Formation, growth and healing",
          paragraphs: [
            "Bones form by <strong>ossification</strong> along two routes. <strong>Intramembranous</strong> ossification builds flat bones directly inside fibrous membranes — the skull plates, clavicle and mandible — which is why a newborn's skull has soft <strong>fontanelles</strong> where membranes have not yet ossified. <strong>Endochondral</strong> ossification builds nearly everything else by first modelling it in <strong>cartilage</strong> and then replacing the cartilage with bone from the shaft outward and the ends inward. After birth, length grows at the <strong>epiphyseal (growth) plate</strong> — cartilage cells multiplying on one side and ossifying on the other — until oestrogen and testosterone fuse it, typically between eighteen and twenty-five. Width grows lifelong by deposition under the periosteum balanced against hollowing from within.",
            "Fractures heal in the same language. First a <strong>haematoma</strong> clots around the break and inflammation clears debris. Then a soft <strong>callus</strong> of cartilage and collagen splints it, hardening into a bony callus over weeks. Finally <strong>remodelling</strong> removes the excess and restores the shape over months to a year — fastest in children, slowest in elders, smokers and the malnourished. The nurse's role in this story is alignment kept (casts, traction, positioning), blood supply watched (the neurovascular check), and the patient fed, mobilized and kept from smoking while biology does the rest.",
          ],
        },
        {
          type: "text",
          heading: "Calcium: the bank account in the bones",
          paragraphs: [
            "Ninety-nine per cent of the body's calcium sits in bone, and blood keeps its tiny share in a tight range because nerves, muscle and clotting all depend on it. Falling calcium releases <strong>parathyroid hormone (PTH)</strong>: bone dissolves a little, kidneys keep calcium and waste phosphate, and the gut — with <strong>vitamin D</strong> — absorbs more. Rising calcium releases <strong>calcitonin</strong>, which brakes the osteoclasts. The nurse reads this loop in symptoms. <strong>Hypocalcaemia</strong> makes nerves twitchy: tingling fingers and circumoral numbness, carpopedal spasm, a <strong>Chvostek sign</strong> (tapping the facial nerve twitches the lip) and a <strong>Trousseau sign</strong> (a blood-pressure cuff held inflated claws the hand) — an emergency after thyroid or parathyroid surgery. <strong>Hypercalcaemia</strong> sedates everything: stones (kidney), bones (pain), groans (constipation, confusion) and psychiatric overtones — think malignancy and over-supplementation.",
          ],
        },
        {
          type: "callout",
          tone: "exam",
          title: "The skeleton questions that repeat",
          body: "Order fracture healing (haematoma → soft callus → bony callus → remodelling). Name the calcium hormones and their direction (PTH up, calcitonin down, vitamin D absorbs). Elicit Chvostek and Trousseau and say which emergency they warn of after neck surgery. And state the remodelling trio: blasts build, clasts chew back, cytes keep house.",
        },
        {
          type: "table",
          heading: "The 206 bones, divided — with the names to carry",
          columns: ["Division (count)", "Parts", "Bones to name on sight"],
          rows: [
            ["Axial (80)", "Skull, vertebral column, ribcage", "Frontal, parietal, temporal, occipital, mandible, maxilla; 7 cervical, 12 thoracic, 5 lumbar, sacrum, coccyx; sternum; 12 rib pairs (7 true, 3 false, 2 floating)"],
            ["Appendicular — upper (64)", "Pectoral girdle + arms", "Clavicle, scapula; humerus; radius (thumb side), ulna; 8 carpals, 5 metacarpals, 14 phalanges"],
            ["Appendicular — lower (62)", "Pelvic girdle + legs", "Coxal (ilium, ischium, pubis); femur (longest bone); patella; tibia (weight-bearing), fibula; 7 tarsals incl. calcaneus, 5 metatarsals, 14 phalanges"],
          ],
        },
        {
          type: "text",
          heading: "Landmarks worth more than lists",
          paragraphs: [
            "Examiners test bones through landmarks, not counts. The <strong>mastoid process</strong> behind the ear, the <strong>iliac crest</strong> where hands rest on hips, the <strong>anterior superior iliac spine</strong> that positions injections and incisions, the <strong>greater trochanter</strong> of the femur, the <strong>medial malleolus</strong> at the ankle, the <strong>xiphoid process</strong> that must never take CPR pressure, the <strong>spinous processes</strong> counted down the back to find a lumbar puncture level — each is a bone you locate to do something safely. Learn the skeleton as a map of these points and the names stop being a list and start being a tool.",
          ],
        },
      ],
      keyPoints: [
        "Bone supports, protects, levers movement, stores calcium and phosphate, makes blood and stores fat.",
        "Long, short, flat, irregular, sesamoid — shape follows job; markings are condyles and heads (joints), trochanters and crests (muscle), foramina and fissures (passage).",
        "Epiphysis (spongy + red marrow), diaphysis (compact + yellow marrow), periosteum (pain and repair), cartilage (friction-free).",
        "Osteons are lamellae around a vascular canal; blasts build, clasts resorb, cytes coordinate — remodelling never stops.",
        "Flat bones ossify in membrane (fontanelles!), long bones in cartilage; length grows at the plate until ~18–25.",
        "Fracture healing: haematoma → soft callus → bony callus → remodelling; PTH raises calcium, calcitonin lowers it, vitamin D absorbs it.",
        "206 bones: 80 axial (skull, spine, ribs), 126 appendicular — learn them as landmarks, not lists.",
      ],
      quiz: {
        keywords: ["bone", "skeleton", "osteon", "ossification", "epiphyseal", "calcium", "parathyroid", "chvostek", "trousseau", "fracture healing", "callus", "red marrow", "axial", "appendicular", "vertebrae", "fontanelle"],
        categories: ["fundamentals"],
      },
    },
    {
      slug: "joints-classification-movement-and-disorders",
      title: "Joints: classification, movement and disorders",
      minutes: 18,
      objectives: [
        "Classify joints by structure and by movement, giving an example of each class.",
        "Describe the structures of a synovial joint and state what each contributes.",
        "Define the movement terms and demonstrate the direction each describes.",
        "Compare osteoarthritis with rheumatoid arthritis, and explain fractures, osteoporosis and rickets.",
        "Recognize compartment syndrome and state the emergency response.",
      ],
      blocks: [
        {
          type: "text",
          heading: "Joints: where bones meet and move",
          paragraphs: [
            "A <strong>joint (articulation)</strong> is any union of bones, and classification runs two ways. By <strong>structure</strong>: <strong>fibrous</strong> joints weld bone to bone with dense collagen — the skull <strong>sutures</strong>, the tooth in its socket, the <strong>syndesmosis</strong> binding tibia to fibula; <strong>cartilaginous</strong> joints join with cartilage — the <strong>pubic symphysis</strong> and the <strong>intervertebral discs</strong> (fibrocartilage pads with a gel centre, the <strong>nucleus pulposus</strong>), and the temporary <strong>synchondrosis</strong> of a growth plate; and <strong>synovial</strong> joints, the freely moving majority, with a fluid-filled cavity between the bones. By <strong>movement</strong>: <strong>synarthroses</strong> barely move (sutures), <strong>amphiarthroses</strong> move slightly (discs, symphysis), and <strong>diarthroses</strong> move freely (all synovial joints). Structure predicts movement: the tighter the union, the smaller the motion — and the examination asks you to run the logic in both directions.",
          ],
        },
        {
          type: "diagram",
          src: "/diagrams/NG-ANP-0005.svg",
          alt: "The synovial joint. Two bone ends capped with articular cartilage, separated by a joint cavity of synovial fluid, the whole unit sealed by a fibrous capsule lined with synovial membrane and braced outside by ligaments. Tendon joins muscle to bone; ligament joins bone to bone.",
          caption: "Capsule seals it, fluid oils and feeds it, cartilage glides it, ligaments brace it — and tendons, which pull it, are a different structure.",
        },
        {
          type: "text",
          heading: "Inside a synovial joint",
          paragraphs: [
            "Every synovial joint repeats the same architecture. A <strong>fibrous capsule</strong> encloses the unit and is lined by the <strong>synovial membrane</strong>, which secretes <strong>synovial fluid</strong> — part oil, part cartilage food. The bone ends wear <strong>articular (hyaline) cartilage</strong>, glass-smooth and vessel-free, fed only by fluid squeezed in during movement. Outside, <strong>ligaments</strong> strap bone to bone (never confuse them with <strong>tendons</strong>, which strap muscle to bone). Accessories vary by joint: <strong>menisci</strong> deepen shallow sockets and cushion (the knee's C-shaped pair tears in twisting injuries), <strong>bursae</strong> are fluid pillows where tendon crosses bone (their inflammation is <strong>bursitis</strong>), and fat pads fill the corners. Shape decides motion: <strong>ball-and-socket</strong> (shoulder, hip) moves in all planes, <strong>hinge</strong> (elbow, knee, ankle) in one, <strong>pivot</strong> (atlas on axis — the 'no' joint; proximal radioulnar) rotates, <strong>condyloid</strong> (wrist) and <strong>saddle</strong> (thumb) add gliding freedom, and <strong>gliding</strong> joints (carpals, tarsals) slide.",
          ],
        },
        {
          type: "table",
          heading: "Movement terms — say each with a gesture",
          columns: ["Movement", "Meaning", "Example"],
          rows: [
            ["Flexion / extension", "Decrease / increase the joint angle", "Bending / straightening the elbow; nodding is neck flexion"],
            ["Abduction / adduction", "Away from / toward the midline", "Raising the arm sideways; crossing the leg inward"],
            ["Rotation / circumduction", "Turn around an axis / trace a cone", "Shaking the head 'no'; bowling the arm in a circle"],
            ["Pronation / supination", "Palm down / palm up", "Turning a doorknob; holding soup (supination)"],
            ["Dorsiflexion / plantarflexion", "Foot up toward shin / down to tiptoe", "Standing on heels / standing on tiptoe; foot drop is lost dorsiflexion"],
            ["Inversion / eversion", "Sole inward / sole outward", "The twisted ankle rolls into inversion"],
            ["Elevation / depression", "Lift / lower a part", "Shrugging (elevation); opening the jaw (depression)"],
            ["Opposition", "Thumb meets fingertips", "The grip destroyed by median-nerve injury"],
          ],
        },
        {
          type: "text",
          heading: "When bones and joints fail",
          paragraphs: [
            "<strong>Fractures</strong> classify by pattern: <strong>transverse</strong> (straight across, direct blow), <strong>oblique</strong> and <strong>spiral</strong> (twisting forces — a spiral fracture in a non-walking infant raises safeguarding questions), <strong>comminuted</strong> (shattered into fragments), <strong>greenstick</strong> (children's bone bends and cracks one side), <strong>impacted</strong> (ends driven together), and above all <strong>open (compound)</strong> versus <strong>closed (simple)</strong> — bone through skin means contamination and urgency. <strong>Dislocation</strong> displaces the joint surfaces entirely; <strong>subluxation</strong> partially; a <strong>sprain</strong> tears ligament while a <strong>strain</strong> tears muscle or tendon.",
            "<strong>Osteoporosis</strong> thins the trabeculae until normal loads break them — silent until the <strong>fragility fracture</strong> (hip, wrist, vertebra), commonest in post-menopausal women, and substantially preventable with calcium, vitamin D, weight-bearing exercise and no smoking. <strong>Rickets</strong> (children) and <strong>osteomalacia</strong> (adults) soften bone through vitamin D deficiency — bowed legs and beaded ribs in the child, bone pain and fractures in the adult. And the two arthritides could hardly differ more: <strong>osteoarthritis</strong> is wear-and-tear cartilage loss of the weight-bearers and fingers, worse with use and better with rest, Heberden's nodes at the fingertips; <strong>rheumatoid arthritis</strong> is an autoimmune synovitis, symmetrical small joints, morning stiffness over an hour easing with movement, systemic and destructive — a disease to refer, not to rub.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Compartment syndrome: the fracture complication that costs limbs",
          body: "Suspect it in any limb that is swollen inside a cast or after a crush: pain out of proportion (the earliest and most trusted sign), pain on passive stretch, then pallor, pulselessness, paraesthesia and paralysis — the six Ps, with the last three arriving late. Action: loosen the constriction, keep the limb at heart level (never elevated above it), escalate immediately — fasciotomy is measured in hours, and a dead compartment never revives.",
        },
      ],
      keyPoints: [
        "Fibrous (sutures), cartilaginous (discs, symphysis), synovial (cavity joints) — tighter union, smaller movement.",
        "Synovial joint: capsule seals, membrane makes fluid, cartilage glides, ligaments brace bone to bone; tendons pull.",
        "Shape decides motion: ball-and-socket (all planes), hinge and pivot (one), condyloid, saddle, gliding.",
        "Learn movements as pairs with a gesture: flexion/extension, abduction/adduction, pronation/supination, dorsi/plantarflexion.",
        "Fracture patterns name the force; open beats closed for urgency; sprain is ligament, strain is muscle/tendon.",
        "Osteoporosis is silent until it breaks; OA is wear (worse with use), RA is autoimmune (morning stiffness, symmetrical).",
        "Compartment syndrome: pain out of proportion + pain on stretch → loosen, level with heart, escalate now.",
      ],
      quiz: {
        keywords: ["joint", "synovial", "cartilage", "ligament", "tendon", "flexion", "abduction", "fracture", "osteoporosis", "arthritis", "compartment syndrome", "dislocation", "sprain", "meniscus", "bursitis"],
        categories: ["fundamentals"],
      },
    },
  ],
};
