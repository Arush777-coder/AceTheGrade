export interface BiologyPage {
  pageNumber: number;
  chapter: string;
  title: string;
  subtitle?: string;
  type: string;
  content: any;
}

export const biology9Pages: BiologyPage[] = [
  {
    pageNumber: 1,
    chapter: "Chapter 2: Cell - The Building Block of Life",
    title: "Key Concepts",
    type: "key-concepts",
    content: {
      intro: "Biology is the study of living systems. This chapter covers the foundational unit of all living organisms - the Cell.",
      concepts: [
        {
          heading: "The Cell",
          body: "The fundamental structural and functional unit of life. Every living organism is composed of cells, which perform all vital physiological and biochemical processes."
        },
        {
          heading: "Unicellular vs. Multicellular",
          body: "Some organisms consist of a single cell that performs all life activities (e.g., bacteria, amoeba, yeast), while others comprise millions of cells (e.g., humans, birds, trees) working in division of labor and coordination."
        },
        {
          heading: "Levels of Organisation",
          body: "In multicellular organisms, cells group together to form tissues. Tissues organize to form organs, organs work together as organ systems, and organ systems collectively form a complete functional organism."
        },
        {
          heading: "Microscopy",
          body: "Because cells are smaller than the human eye's limit of resolution (approx. 0.1 mm), light microscopes (using visible light to magnify up to 1500x) and electron microscopes (using electron beams to magnify up to 500,000x for ultra-high detail) are essential study tools."
        }
      ]
    }
  },
  {
    pageNumber: 2,
    chapter: "Chapter 2: Cell - The Building Block of Life",
    title: "Cell Boundaries & Cell Transport",
    type: "boundaries",
    content: {
      boundaries: [
        {
          name: "Cell Membrane (Plasma Membrane)",
          description: "A selectively permeable living boundary composed of lipids and proteins. It regulates the influx and efflux of specific substances, maintaining internal homeostasis."
        },
        {
          name: "Cell Wall",
          description: "A rigid, non-living, fully permeable protective outer covering found outside the cell membrane in plants (cellulose), fungi (chitin), and bacteria (peptidoglycan). It provides mechanical strength, rigidity, and shape."
        }
      ],
      transport: [
        {
          name: "Diffusion",
          description: "The passive movement of gaseous or liquid particles from a region of higher concentration to a region of lower concentration down the concentration gradient, until equilibrium is reached."
        },
        {
          name: "Osmosis",
          description: "A special case of diffusion specifically referring to the passive net movement of water molecules from a region of higher water concentration to a region of lower water concentration across a semi-permeable membrane."
        }
      ]
    }
  },
  {
    pageNumber: 3,
    chapter: "Chapter 2: Cell - The Building Block of Life",
    title: "Cell Organisation & Cell Division",
    type: "division",
    content: {
      organisation: [
        {
          type: "Prokaryotic Cells",
          features: [
            "Lack a well-defined nucleus; genetic material floats freely in a nucleoid region without a nuclear envelope.",
            "Lack membrane-bound organelles (like mitochondria, plastids, or endoplasmic reticulum).",
            "Example: Bacteria, Blue-green Algae."
          ]
        },
        {
          type: "Eukaryotic Cells",
          features: [
            "Possess a well-defined, membrane-bound nucleus housing the chromosomes.",
            "Contain specialized membrane-bound organelles that partition distinct metabolic activities.",
            "Example: Plant cells, Animal cells, Fungi."
          ]
        }
      ],
      division: [
        {
          name: "Mitosis",
          description: "Equational cell division where a single parent cell divides into two genetically identical daughter cells with the same number of chromosomes. It is used for growth, tissue repair, and asexual reproduction."
        },
        {
          name: "Meiosis",
          description: "Reductional cell division where a single diploid parent cell undergoes two sequential divisions to produce four haploid gametes (daughter cells), each with half the parent's chromosome number. This generates genetic variation essential for evolution."
        }
      ],
      quadrant: {
        xLabel: "Low Variation → High Variation",
        yLabel: "Low Chromosomes → High Chromosomes",
        quadrants: [
          { pos: "Top-Left", title: "Mitosis: 2 identical daughter cells", desc: "No crossing over, identical chromosomal number." },
          { pos: "Top-Right", title: "Meiosis: 4 haploid gametes", desc: "Crossing over, recombination, double division." },
          { pos: "Bottom-Left", title: "Mitosis: Growth and repair", desc: "Somatic cells division for healing and structural elongation." },
          { pos: "Bottom-Right", title: "Meiosis: Genetic recombination", desc: "Occurs during prophase-I, driving variation in sexually reproducing offspring." }
        ]
      }
    }
  },
  {
    pageNumber: 4,
    chapter: "Chapter 2: Cell - The Building Block of Life",
    title: "Formula / Fact Bank",
    type: "table",
    content: {
      headers: ["Feature / Metric", "Mathematical Formula / Biological Description"],
      rows: [
        {
          feature: "Total Magnification of Microscope",
          desc: "Magnifying power of Eyepiece (Ocular Lens) × Magnifying power of Objective Lens. Example: 10x Eyepiece paired with 40x Objective yields 400x total magnification."
        },
        {
          feature: "Cell Size Estimation in Field of View",
          desc: "Estimated Cell Size = Diameter of the microscope field of view (in micrometers, μm) / Number of cells aligned end-to-end across that diameter."
        },
        {
          feature: "Cell Membrane Structure Model",
          desc: "Fluid-Mosaic Model (proposed by Singer and Nicolson): Describes the membrane as a dynamic lipid bilayer (phospholipids) wherein diverse proteins float like mosaics, facilitating fluid lateral movement."
        },
        {
          feature: "Nucleus Functionality",
          desc: "The Master Controller of the cell. It houses the cellular genetic material (DNA in chromatin fibers) and dictates metabolic instructions, growth rhythm, and reproductive cell division."
        }
      ]
    }
  },
  {
    pageNumber: 5,
    chapter: "Chapter 2: Cell - The Building Block of Life",
    title: "Diagrammatic Guidance (Hand-Drawn Essentials)",
    type: "key-concepts",
    content: {
      intro: "To score full marks in your theory exams, your biological diagrams must be clear, neat, and labeled with high scientific accuracy. Master these four crucial diagram blueprints:",
      concepts: [
        {
          heading: "1. The Nucleus",
          body: "Always sketch a double-layered nuclear membrane (nuclear envelope). Keep short gaps between the membrane segments to indicate the 'nuclear pores'. Draw a dense, spherical 'nucleolus' and fine, thread-like tangled 'chromatin material' inside."
        },
        {
          heading: "2. The Mitochondrion",
          body: "Sketch a distinct double membrane. The outer membrane should be smooth and oblong. The inner membrane must be highly folded inwards into prominent, finger-like folds called 'cristae' to maximize the surface area for ATP synthesis."
        },
        {
          heading: "3. The Chloroplast",
          body: "Sketch a smooth double-layered outer capsule. Inside, draw stacks of coin-like flattened disc structures called 'thylakoids'. A single stack is a 'granum' (plural: grana), connected together by tubular 'stroma lamellae' in a fluid matrix called 'stroma'."
        },
        {
          heading: "4. Animal Cell vs. Plant Cell Boundaries",
          body: "For plant cells, always draw a thick, double-bordered rigid outer boundary representing the 'cell wall' and a large, singular central vacuole. For animal cells, draw a single, thin, flexible membrane with small, scattered temporary vacuoles."
        }
      ]
    }
  },
  {
    pageNumber: 6,
    chapter: "Chapter 2: Cell - The Building Block of Life",
    title: "Cell Organelles Profile",
    type: "organelles",
    content: {
      organelles: [
        {
          name: "Mitochondria",
          symbol: "⚡",
          role: "Powerhouse of the Cell",
          desc: "Double-membrane bound organelle containing its own circular DNA and 70S ribosomes. It acts as the site of cellular aerobic respiration, generating energy in the form of ATP (Adenosine Triphosphate)."
        },
        {
          name: "Chloroplast",
          symbol: "🌿",
          role: "Kitchen of the Cell",
          desc: "Double-membraned green plastid present only in plant cells. It contains the green pigment chlorophyll which absorbs solar light energy to synthesize glucose via photosynthesis."
        },
        {
          name: "Lysosome",
          symbol: "♻️",
          role: "Suicide Bags of the Cell",
          desc: "Single-membrane bound spherical sacs packed with powerful hydrolytic (digestive) enzymes. They digest foreign pathogens, cellular debris, or worn-out organelles. If a cell is badly damaged, lysosomes burst and their enzymes digest their own cell."
        },
        {
          name: "Endoplasmic Reticulum (ER)",
          symbol: "🕸️",
          role: "Intracellular Transport System",
          desc: "A vast network of membrane-bound tubes and sheets. Rough ER (RER) has ribosomes attached to its surface and synthesizes/transports proteins. Smooth ER (SER) lacks ribosomes and synthesizes lipids, fats, and detoxifies poisons."
        },
        {
          name: "Golgi Apparatus",
          symbol: "📦",
          role: "Packaging & Shipping Centre",
          desc: "A system of membrane-bound, flat parallel sacs called cisternae. It receives proteins and lipids synthesized in the ER, chemically modifies them, packages them into vesicles, and dispatches them to internal or external destinations."
        }
      ]
    }
  },
  {
    pageNumber: 7,
    chapter: "Chapter 2: Cell - The Building Block of Life",
    title: "Plant vs. Animal Cell Structures",
    type: "table",
    content: {
      headers: ["Structural Feature", "Plant Cell", "Animal Cell"],
      rows: [
        { feature: "Cell Wall", plant: "Present (Made of strong, rigid cellulose)", animal: "Absent (Only bounded by thin plasma membrane)" },
        { feature: "Vacuoles", plant: "Single, massive, permanent central vacuole (takes up to 90% space)", animal: "Multiple, small, temporary vacuoles scattered in cytoplasm" },
        { feature: "Plastids", plant: "Present (Chloroplasts, Chromoplasts, Leucoplasts)", animal: "Absent" },
        { feature: "Shape", plant: "Rigid, fixed rectangular/box-like shape", animal: "Flexible, irregular/spherical or oval shape" },
        { feature: "Centrioles & Centrosomes", plant: "Absent (in higher plants)", animal: "Present (critical for organizing spindle fibers during cell division)" },
        { feature: "Plasmodesmata", plant: "Present (cytoplasmic bridges linking adjacent cells)", animal: "Absent (instead has tight junctions, desmosomes, gap junctions)" }
      ]
    }
  },
  {
    pageNumber: 8,
    chapter: "Chapter 2: Cell - The Building Block of Life",
    title: "Watch Out! (Common Exam Traps)",
    type: "traps",
    content: {
      traps: [
        {
          topic: "Osmosis vs. Diffusion Definition",
          trap: "Students often write 'diffusion of water' without specifying the membrane.",
          correction: "Always specify that Osmosis is the movement of water specifically across a 'Selectively Permeable Membrane'. Diffusion does not require a membrane, but osmosis absolutely does."
        },
        {
          topic: "RBCs and Nuclear Status",
          trap: "Assuming all eukaryotic cells always possess a nucleus.",
          correction: "Mature mammalian Red Blood Cells (RBCs) are 'enucleate' (they lose their nucleus, mitochondria, and other organelles at maturity) to maximize interior volume for packing oxygen-carrying hemoglobin."
        },
        {
          topic: "Cell Wall presence in Fungi vs. Plants",
          trap: "Thinking Fungi are plants because they have cell walls.",
          correction: "Fungi are classified in a separate kingdom because their cell walls are made of 'chitin', they are completely heterotrophic, and they lack plastids/chlorophyll, unlike plant cellulose walls."
        },
        {
          topic: "Cell Division Cell Types",
          trap: "Confusing where Mitosis and Meiosis take place.",
          correction: "Mitosis occurs exclusively in 'somatic cells' (body cells) for growth, healing, and tissue repair. Meiosis occurs exclusively in 'germ cells' (reproductive cells) within testes and ovaries to form gametes."
        },
        {
          topic: "The Boiled Potato Experiment",
          trap: "Assuming water will rise in a boiled potato cup placed in water.",
          correction: "Boiling denatures proteins and kills the cells, destroying the selectively permeable properties of the cell membranes. Since the membrane is dead and fully permeable, active selective osmosis cannot occur."
        }
      ]
    }
  },
  {
    pageNumber: 9,
    chapter: "Chapter 2: Cell - The Building Block of Life",
    title: "Life Processes: Flowcharts",
    type: "flowcharts",
    content: {
      titleA: "A. Pathway of Protein Processing and Secretion",
      stepsA: [
        { step: "DNA in Nucleus", desc: "Transcription of genetic instructions to mRNA" },
        { step: "Ribosomes on Rough ER", desc: "Translation of mRNA into raw protein chains" },
        { step: "Rough ER - Synthesis/Transport", desc: "Folding of proteins and transport via transport vesicles" },
        { step: "Golgi Apparatus - Packaging/Sorting", desc: "Chemical modification (e.g. glycosylation), sorting, and packaging into secretory vesicles" },
        { step: "Secretory Vesicles", desc: "Transportation of mature proteins towards cell boundary" },
        { step: "Plasma Membrane - Secretion", desc: "Exocytosis: Vesicle fuses with membrane, releasing proteins outside" }
      ],
      titleB: "B. Cell Division Comparison",
      divisions: [
        {
          name: "Mitosis Pathway",
          flow: "Parent Cell (Diploid 2n) → DNA Replication → Single Nuclear Division → Two Genetically Identical Daughter Cells (Diploid 2n)",
          usage: "Somatic growth, tissue repair, maintaining chromosome constancy across normal body cells."
        },
        {
          name: "Meiosis Pathway",
          flow: "Parent Cell (Diploid 2n) → DNA Replication → Meiosis I (Homologous chromosomes separate) → Meiosis II (Sister chromatids separate) → Four Non-Identical Haploid Gametes (n)",
          usage: "Formation of sperm/eggs, ensuring restored diploidy upon fertilization, introducing evolutionary variation."
        }
      ]
    }
  },
  {
    pageNumber: 10,
    chapter: "Chapter 2: Cell - The Building Block of Life",
    title: "Practice Problems",
    type: "problems",
    content: {
      problems: [
        { num: 1, type: "Application", q: "A plant cell is placed in a solution and it does not shrink, even though its inner content pulls away from the cell wall. What type of solution was it placed in, and what is this phenomenon called?" },
        { num: 2, type: "Comparison", q: "Briefly differentiate between prokaryotic and eukaryotic cells regarding their nucleus and organelle structure." },
        { num: 3, type: "Critical Thinking", q: "Why is the presence of a 'double-layered nuclear membrane' advantageous for a eukaryotic cell?" },
        { num: 4, type: "Identification", q: "You observe an organelle that is rod-shaped, has its own DNA, and has an inner membrane folded into cristae. What is this organelle?" },
        { num: 5, type: "Reasoning", q: "Why are mitochondria often referred to as the 'powerhouses of the cell'?" },
        { num: 6, type: "Function", q: "If a cell is involved in synthesising large amounts of steroid hormones (fats), which type of Endoplasmic Reticulum (RER or SER) would be more abundant? Why?" },
        { num: 7, type: "Classification", q: "Sort the following as prokaryotic or eukaryotic: Bacterial cell, Human cheek cell, Onion peel cell." },
        { num: 8, type: "Concept Check", q: "What is the primary function of leucoplasts in plants, and how do they differ from chloroplasts?" },
        { num: 9, type: "Problem Solving", q: "A student calculates a total magnification of 400X. If the eyepiece is 10X, what is the power of the objective lens used?" },
        { num: 10, type: "Mechanism", q: "Explain how the Golgi apparatus is functionally linked to the Endoplasmic Reticulum." },
        { num: 11, type: "Analysis", q: "Why do lysosomes contain powerful digestive enzymes? What happens if they burst inside a healthy cell?" },
        { num: 12, type: "Terminology", q: "Define the nucleoid in a bacterial cell." },
        { num: 13, type: "Scientific Logic", q: "If a cell loses its nucleus, can it divide? Use the example of RBCs to explain." },
        { num: 14, type: "Process", q: "Compare mitosis and meiosis based on the number of daughter cells produced and their genetic content." },
        { num: 15, type: "Contextual Study", q: "In the onion root tip experiment, why do we use aceto-carmine stain and HCl?" },
        { num: 16, type: "Structural Biology", q: "Explain why animal cells, unlike plant cells, can easily change shape." },
        { num: 17, type: "Theory Formulation", q: "What are the three main pillars of the classical Cell Theory?" }
      ]
    }
  },
  {
    pageNumber: 11,
    chapter: "Chapter 2: Cell - The Building Block of Life",
    title: "Step-by-Step Solutions & Logic",
    type: "solutions",
    content: {
      solutions: [
        { num: 1, label: "Solution", ans: "It was placed in a hypertonic solution. The outward movement of water causes the cytoplast/protoplast to shrink away from the rigid cell wall. This specific phenomenon is called plasmolysis." },
        { num: 2, label: "Difference", ans: "Prokaryotic cells have an unorganized nucleoid (primitive nucleus) lacking a nuclear membrane and lack membrane-bound organelles. Eukaryotic cells have a true nucleus with a double-layered nuclear envelope and contain diverse membrane-bound organelles (mitochondria, chloroplasts, etc.)." },
        { num: 3, label: "Advantage", ans: "It establishes a highly controlled and isolated micro-environment inside the nucleus. This protects the delicate DNA molecules from cytoplasmic metabolic reactions and allows highly selective transport of substances (like RNA and proteins) via nuclear pores." },
        { num: 4, label: "Organelle", ans: "Mitochondrion (plural: mitochondria)." },
        { num: 5, label: "Logic", ans: "Mitochondria carry out the aerobic oxidation of nutrients, breaking down glucose in the presence of oxygen. This releases energy which is stored as chemical ATP molecules (Adenosine Triphosphate - the energy currency of the cell) to fuel vital physiological tasks." },
        { num: 6, label: "Selection", ans: "Smooth Endoplasmic Reticulum (SER) is highly abundant, because it contains the specialized enzymes required for the synthesis and metabolic storage of lipids, steroid hormones, and structural fats." },
        { num: 7, label: "Classification", ans: "Bacterial cell = Prokaryotic. Human cheek cell and Onion peel cell = Eukaryotic." },
        { num: 8, label: "Difference", ans: "Leucoplasts are colourless plastids primarily used for storing starch, proteins, or lipids. Chloroplasts are green plastids packed with chlorophyll used for actively generating food via photosynthesis." },
        { num: 9, label: "Calculation", ans: "Total Magnification = Eyepiece × Objective. Therefore, Objective Lens = Total Magnification / Eyepiece = 400X / 10X = 40X objective lens." },
        { num: 10, label: "Link", ans: "The raw proteins and lipids synthesized in the Endoplasmic Reticulum are transported via transition vesicles to the 'cis' face of the Golgi apparatus. The Golgi modifies these compounds (adding sugars, folding, etc.), packages them into finished vesicles, and dispatches them." },
        { num: 11, label: "Logic", ans: "Lysosomes contain strong hydrolytic enzymes to break down foreign toxic elements or degrade aging cellular parts. If they burst in a healthy cell, their enzymes will digest the surrounding cytoplasm and active organelles, causing rapid cellular autolysis (self-destruction)." },
        { num: 12, label: "Nucleoid", ans: "The irregular, non-membrane bound cytoplasmic region in a prokaryotic cell where the circular, double-stranded chromosomal DNA molecule is localized." },
        { num: 13, label: "Logic", ans: "No. The nucleus contains the chromosomes and genes carrying all replicating blueprints. Without a nucleus, a cell lacks the genetic instructions to organize and undergo cell division. Mammalian RBCs lose their nucleus at maturity and cannot divide." },
        { num: 14, label: "Mitosis vs. Meiosis", ans: "Mitosis produces 2 diploid daughter cells that are genetically identical to the parent. Meiosis produces 4 haploid gametes, each possessing half the chromosome number of the parent, featuring distinct genetic variation." },
        { num: 15, label: "Reasoning", ans: "HCl is heated with the root tips to soften cell walls and dissolve the middle lamella (maceration) so cells can slide apart. Aceto-carmine is a basic stain that binds specifically to acidic DNA, making chromosomes highly visible under a microscope." },
        { num: 16, label: "Flexibility", ans: "Animal cells are enclosed only by a thin, flexible lipid plasma membrane. Plant cells are encased in a rigid, thick, cellulose-based cell wall that resists mechanical deformation and forces a fixed shape." },
        { num: 17, label: "Theory", ans: "Classical Cell Theory (Schleiden, Schwann & Virchow) states: (1) All living organisms are composed of one or more cells. (2) The cell is the basic structural and functional unit of life. (3) All cells arise exclusively from pre-existing cells (Omnis cellula e cellula)." }
      ]
    }
  },
  {
    pageNumber: 12,
    chapter: "Chapter 2: Cell - The Building Block of Life",
    title: "Examiner-Preferred Keywords",
    type: "keywords",
    content: {
      keywords: [
        { term: "Selectively Permeable", def: "A biological barrier property that allows only certain solutes and water to pass while blocking others. Use this instead of 'semi-permeable' when explaining cell membranes." },
        { term: "Fluid-Mosaic Model", def: "The universally accepted structural model of plasma membranes, composed of a fluid bilayer of phospholipids with protein molecules embedded or floating laterally." },
        { term: "Osmosis", def: "Defined specifically as: 'The net passive transport of water from a region of high water concentration to a region of low water concentration across a selectively permeable membrane.'" },
        { term: "Enucleate", def: "A cell that lacks a nucleus. Crucial keyword to describe mature mammalian red blood cells (RBCs) which eject their nucleus to maximize oxygen-carrying capacity." },
        { term: "Contact Inhibition", def: "The physiological mechanism in animal cells that halts cell replication once they contact adjacent cells. Loss of this property is a hallmark of cancerous tumor cells." },
        { term: "Totipotency", def: "The capacity of a single somatic cell to divide and differentiate into all specialized cell types, eventually regenerating a complete, functional multicellular organism." },
        { term: "ATP (Adenosine Triphosphate)", def: "The biological 'energy currency' synthesized in mitochondria. It transfers energy to drive endergonic metabolic activities within living systems." }
      ]
    }
  },
  {
    pageNumber: 13,
    chapter: "Chapter 3: Tissues in Action",
    title: "Key Concepts",
    type: "key-concepts",
    content: {
      intro: "Cells cooperate to form complex structures. This chapter details how groups of specialized cells coordinate as tissues to perform specific bodily tasks.",
      concepts: [
        {
          heading: "Definition of Tissue",
          body: "A group of cells that are similar in structure, origin, and work together in a coordinated manner to perform a specialized, common physiological function."
        },
        {
          heading: "Hierarchy of Organization",
          body: "Living systems build upward in complexity: Cells → Tissues → Organs → Organ Systems → Organism. This structural stacking allows complex metabolic processes to operate concurrently."
        },
        {
          heading: "Division of Labour",
          body: "In multicellular organisms, specific cells or tissues are assigned unique, dedicated tasks (e.g., muscle tissue for contraction, xylem for water conduction). This dramatically increases metabolic efficiency."
        }
      ]
    }
  },
  {
    pageNumber: 14,
    chapter: "Chapter 3: Tissues in Action",
    title: "Plant Tissues Classification",
    type: "boundaries",
    content: {
      boundaries: [
        {
          name: "Meristematic Tissues (Plants)",
          description: "Composed of actively dividing, thin-walled young cells with dense cytoplasm and large nuclei. They lack vacuoles and are responsible for localized growth in plants."
        },
        {
          name: "Permanent Tissues (Plants)",
          description: "Derived from meristematic tissues that have lost the ability to divide and have undergone differentiation to take up a permanent shape, size, and function."
        }
      ],
      transport: [
        {
          name: "Simple Permanent Tissues",
          description: "Composed of only one type of cell structurally and functionally. Includes Parenchyma (storage and photosynthesis), Collenchyma (flexibility and mechanical support in young stems), and Sclerenchyma (rigid, dead strength cells containing lignin)."
        },
        {
          name: "Complex Permanent Tissues",
          description: "Composed of more than one type of cell that work together as a unit to conduct materials. Includes Xylem (conducts water and minerals upward from roots) and Phloem (transports synthesized food from leaves down/up to all plant parts)."
        }
      ]
    }
  },
  {
    pageNumber: 15,
    chapter: "Chapter 3: Tissues in Action",
    title: "Animal Tissues Overview",
    type: "division",
    content: {
      organisation: [
        {
          type: "Epithelial Tissue",
          features: [
            "Forms a continuous protective sheet covering external body surfaces and lining internal organs/cavities.",
            "Cells are tightly packed with minimal intercellular cement. Functions in protection, absorption, and secretion.",
            "Examples: Squamous epithelium, Columnar epithelium, Cuboidal epithelium."
          ]
        },
        {
          type: "Connective Tissue",
          features: [
            "Loosely spaced cells embedded in a non-living intercellular matrix which supports, binds, or cushions organs.",
            "Matrix can be fluid (plasma in blood), solid (calcium/phosphorus in bone), or jelly-like (cartilage).",
            "Examples: Blood, Bone, Cartilage, Ligaments, Tendons."
          ]
        }
      ],
      division: [
        {
          name: "Muscular Tissue",
          description: "Elongated cells (muscle fibers) containing specialized contractile proteins (actin and myosin) that slide past each other to cause movement and locomotion. Classified into Skeletal (voluntary, striated), Smooth (involuntary, non-striated), and Cardiac (involuntary, striated, branched, non-fatiguing)."
        },
        {
          name: "Nervous Tissue",
          description: "Highly specialized tissue that receives stimuli, processes information, and transmits electrochemical nerve impulses rapidly across the body. Consists of neurons (nerve cells), each comprising a cell body (cyton), dendrites, and a long axon."
        }
      ]
    }
  },
  {
    pageNumber: 16,
    chapter: "Chapter 3: Tissues in Action",
    title: "Fact Bank: Key Plant & Animal Tissues",
    type: "table",
    content: {
      headers: ["Tissue Type", "Primary Function", "Key Structural Features"],
      rows: [
        { feature: "Parenchyma", plant: "Food storage, packaging, photosynthesis (Chlorenchyma)", animal: "Thin cell walls, loosely packed with large intercellular spaces, living cells" },
        { feature: "Collenchyma", plant: "Provides flexibility, bending, and mechanical support in young parts", animal: "Elongated cells with unevenly thickened corners rich in pectin, living cells" },
        { feature: "Sclerenchyma", plant: "Provides extreme mechanical strength, rigidity, and protection", animal: "Extremely thick, lignified walls, dead cells at maturity with no protoplast" },
        { feature: "Xylem", plant: "Conducts water and mineral ions unidirectionally upward from roots", animal: "Consists of Tracheids, Vessels (dead conduction tubes), Xylem Fibres (dead), and Xylem Parenchyma (living)" },
        { feature: "Phloem", plant: "Transports synthesized food bidirectionally from leaves to sink organs", animal: "Consists of Sieve Tubes, Companion Cells (living, controls sieve tubes), Phloem Parenchyma (living), and Phloem Fibres (dead)" },
        { feature: "Epithelial", plant: "Protective covering, barrier, selective absorption and secretion", animal: "Closely packed cells, sitting on a basement membrane, minimal intercellular matrix" },
        { feature: "Connective", plant: "Connects, binds, structural support, fluid transport", animal: "Abundant extracellular matrix (fluid/solid) separating widely spaced cells" }
      ]
    }
  },
  {
    pageNumber: 17,
    chapter: "Chapter 3: Tissues in Action",
    title: "Watch Out! (Common Traps)",
    type: "traps",
    content: {
      traps: [
        {
          topic: "Xylem vs. Phloem Direction",
          trap: "Confusing the directionality of conduction in vascular tissues.",
          correction: "Remember: Xylem conducts water 'Xclusively upwards' (unidirectional) from roots. Phloem transports food ('Phood' starts with Ph sound) in 'all directions' (bidirectional) from leaves to roots, flowers, and growing shoots."
        },
        {
          topic: "Vacuoles in Meristematic Cells",
          trap: "Assuming meristematic cells have large vacuoles for storage like permanent cells.",
          correction: "Meristematic cells actually 'lack vacuoles'. They are actively dividing cells with high metabolic rate; they do not need to store food or waste. Large vacuoles would physically interfere with the rapid chromosome division and spindle formation."
        },
        {
          topic: "Bone vs. Cartilage Matrix",
          trap: "Thinking bone and cartilage are similar rigid structural tissues.",
          correction: "Bone has a rigid, hard, non-flexible matrix rich in calcium carbonate, phosphorus, and collagen fibers. Cartilage has a flexible, resilient matrix containing proteins and sugars (chondrin) allowing flexibility at joint endings."
        },
        {
          topic: "Cardiac vs. Skeletal Muscle Control",
          trap: "Assuming striated muscles are always under voluntary conscious control.",
          correction: "Skeletal muscles are voluntary and striated. However, Cardiac muscle is striated but 'completely involuntary' and branching. It contains intercalated discs and is structurally adapted to beat rhythmically without fatigue."
        },
        {
          topic: "Tendons vs. Ligaments",
          trap: "Confusing which connective tissue links bone to bone or muscle to bone.",
          correction: "Remember the mnemonic: 'MTB' (Muscle to Tendon to Bone) and 'BLB' (Bone to Ligament to Bone). Tendons connect Skeletal Muscles to Bones. Ligaments connect Bones to other Bones."
        }
      ]
    }
  },
  {
    pageNumber: 18,
    chapter: "Chapter 3: Tissues in Action",
    title: "Exam-Style Problems (Q1–Q7)",
    type: "problems",
    content: {
      problems: [
        { num: 1, type: "Theory", q: "Why are meristematic cells small, thin-walled, and packed with dense cytoplasm?", ans: "Meristematic cells are actively and rapidly dividing cells. Thin walls allow rapid stretching and cell expansion, while a large nucleus and dense, metabolic-active cytoplasm supply the enzymes and materials required for cellular reproduction. They lack vacuoles to prevent any physical barriers during division." },
        { num: 2, type: "Application", q: "Why does a dry twig break easily when bent, but a fresh green twig bends without snapping?", ans: "Fresh green twigs contain abundant living Collenchyma tissue, which possesses unevenly thickened pectin-corners providing high flexibility and tensile elasticity. Dry twigs have lost their living collenchyma, containing only dead Sclerenchyma with rigid, brittle lignified walls, making them highly brittle." },
        { num: 3, type: "Reasoning", q: "If a plant's root tips are cut off or damaged, what happens to its growth?", ans: "The plant's root tips contain 'Apical Meristem' which is responsible for primary growth (elongation). Cutting the root tips removes this zone of active division, completely halting elongation of roots in depth." },
        { num: 4, type: "Function", q: "What is the primary role of stomata in plants, and which specialized cells control them?", ans: "Stomata facilitate gaseous exchange (oxygen and carbon dioxide) during photosynthesis/respiration and allow Transpiration (water vapor loss to create a suction pull). They are bounded and regulated by a pair of kidney-shaped 'Guard Cells' in dicots." },
        { num: 5, type: "Classification", q: "Why is Xylem classified as a complex permanent tissue, whereas Parenchyma is a simple tissue?", ans: "Parenchyma is a simple tissue because it is made of only one cell type that looks identical. Xylem is complex because it is composed of four structurally distinct cell types (Tracheids, Vessels, Fibres, Parenchyma) working together as a functional unit to conduct water." },
        { num: 6, type: "Application", q: "What happens to a tree if a complete ring of bark is carefully stripped away from its trunk?", ans: " Stripping bark removes the outer phloem layer. This blocks the translocation of synthesized food (carbohydrates) from the leaves down to the roots. The roots starve for energy, die, and eventually the entire tree withers and dies." },
        { num: 7, type: "Comparison", q: "Contrast the intercellular matrix of blood and skeletal bone tissue.", ans: "Blood tissue has a completely fluid, liquid matrix called plasma, allowing blood cells to circulate. Bone has a solid, rigid, non-flexible mineralized matrix containing calcium and phosphorus compounds, housing osteocytes." }
      ]
    }
  },
  {
    pageNumber: 19,
    chapter: "Chapter 3: Tissues in Action",
    title: "Exam-Style Problems (Q8–Q14)",
    type: "problems",
    content: {
      problems: [
        { num: 8, type: "Mechanism", q: "Why do we blink our eyes voluntarily and involuntarily? Detail the muscular control.", ans: "Blinking is coordinated by the skeletal orbicularis oculi muscles. It can be voluntary (under conscious cortical control) or involuntary (reflexive, triggered by dryness, bright light, or dust to protect the cornea)." },
        { num: 9, type: "Comparison", q: "Distinguish between Voluntary and Involuntary movements in animals, giving examples.", ans: "Voluntary movements are under direct conscious control (e.g., walking, writing, speaking) executed by striated Skeletal muscles. Involuntary movements are automatic and not controlled by conscious will (e.g., peristalsis in food canal, heartbeat, pupil constriction) executed by smooth or cardiac muscles." },
        { num: 10, type: "Mechanism", q: "How does a neuron transmit chemical and electrical signals across the body?", ans: "A neuron receives stimuli at its 'Dendrites', converting it into an electrical nerve impulse. This impulse travels down the 'Cell Body' and along the 'Axon' to the axon terminal. Here, it triggers the release of neurotransmitters (chemicals) across the synaptic gap to stimulate the next neuron." },
        { num: 11, type: "Reasoning", q: "What causes the increase in stem diameter (girth) of a tree over years?", ans: "The increase in girth is called secondary growth, which is caused by the activity of 'Lateral Meristems' (specifically Vascular Cambium and Cork Cambium) dividing to form secondary xylem and bark." },
        { num: 12, type: "Theory", q: "What are the three fundamental plant tissue systems?", ans: "They are: (1) Epidermal Tissue System (outer protective skin), (2) Ground Tissue System (bulk packaging, storage, photosynthesis), and (3) Vascular Tissue System (Xylem and Phloem conduction lines)." },
        { num: 13, type: "Analysis", q: "Are all cells in Sclerenchyma living or dead? Explain their status at maturity.", ans: "All sclerenchyma cells are dead at maturity. During differentiation, they deposit extremely thick layers of a highly impermeable organic polymer called 'lignin' inside their cell walls. This seals off the cell, preventing water/nutrient exchange, causing the protoplast to die." },
        { num: 14, type: "Function", q: "Why is Phloem transport necessary for the survival of non-green plant parts?", ans: "Non-green plant tissues (like roots, subterranean tubers, and wood stems) cannot photosynthesize. They rely entirely on Phloem to transport organic sucrose synthesized in the leaves down to supply them with energy." }
      ]
    }
  },
  {
    pageNumber: 20,
    chapter: "Chapter 3: Tissues in Action",
    title: "Exam-Style Problems (Q15–Q20)",
    type: "problems",
    content: {
      problems: [
        { num: 15, type: "Terminology", q: "Define biological 'Differentiation' in multicellular organisms.", ans: "The developmental process by which unspecialized cells (meristematic or stem cells) undergo permanent structural and chemical changes to take up a specific, fixed size, shape, and dedicated physiological function." },
        { num: 16, type: "Function", q: "What is the critical function of companion cells in phloem tissue?", ans: "Companion cells contain a nucleus and rich organelles. Sieve tubes lack nuclei at maturity; companion cells regulate and maintain the pressure gradient and metabolic loading/unloading of sugars in sieve tubes through dense plasmodesmata." },
        { num: 17, type: "Logic", q: "Why is the human skull composed of fixed, immovable joints rather than synovial joints?", ans: "Immovable (fibrous) joints lack joint cavities and lock skull bones tightly together. This provides a stable, highly impact-resistant protective helmet shielding the delicate, complex brain from external mechanical injuries." },
        { num: 18, type: "Comparison", q: "What makes a Hinge Joint unique, and where is it located in the human skeleton?", ans: "A hinge joint allows movement in only one single plane (back and forth, like a door hinge). It is located at the elbow joint, knee joint, and interphalangeal joints of fingers, offering high mechanical leverage." },
        { num: 19, type: "Mechanism", q: "How do skeletal muscles cooperate with bones to execute voluntary limb movements?", ans: "Muscles can only pull; they cannot push. They work in antagonistic pairs (e.g., biceps and triceps). When one contracts, it pulls on its tough 'Tendon', which transmits the tensile force to the bone, rotating it at the joint. Simultaneously, the partner muscle relaxes." },
        { num: 20, type: "Theory", q: "What is Totipotency, and who first demonstrated it?", ans: "Totipotency is the genetic ability of a single isolated plant somatic cell to divide, differentiate, and regenerate into an entire, mature plant. It was experimentally proved by F.C. Steward using isolated phloem cells of a carrot in nutrient culture." }
      ]
    }
  },
  {
    pageNumber: 21,
    chapter: "Chapter 3: Tissues in Action",
    title: "Hand-Drawn Diagrams (Key Structures)",
    type: "key-concepts",
    content: {
      intro: "Ensure you use sharp pencils, draw clean lines, and label these key anatomy items directly:",
      concepts: [
        {
          heading: "1. Plant Vascular Tissue Layout",
          body: "Draw Xylem as thick-walled cylindrical vessels joined end-to-end with dissolved cross walls. Label 'Tracheids' (tapered ends, pitted walls) and 'Vessels'. Draw Phloem showing 'Sieve Tubes' with perforated 'Sieve Plates' on their ends, and adjacent 'Companion Cells' with distinct nucleated cytoplasm."
        },
        {
          heading: "2. Animal Neuron structure",
          body: "Draw a star-shaped cell body (cyton/soma) showing a prominent central nucleus and cytoplasm containing Nissl's granules. Draw multiple radiating branch fibers called 'Dendrites'. Extend one exceptionally long, singular cylinder fiber called the 'Axon' coated in fatty 'Myelin Sheath' blocks, ending in branched 'Axon Terminals'."
        },
        {
          heading: "3. Muscle Fiber Types",
          body: "For Skeletal muscle, draw parallel, long, unbranched cylindrical cells showing alternating dark and light 'Striations' (bands) and multiple nuclei pushed to the periphery. For Smooth muscle, draw isolated spindle-shaped (tapered ends) cells with a single central nucleus and no striations. For Cardiac muscle, draw branching cylinders joined by dark horizontal lines called 'Intercalated Discs'."
        },
        {
          heading: "4. Hierarchy of Biological Organization",
          body: "Flowchart: Cell (Basic structural unit) → Tissue (Group of similar cells coordinating) → Organ (Distinct structures of tissues) → Organ System (Interacting organs working together) → Organism (Complete living individual)."
        }
      ]
    }
  },
  {
    pageNumber: 22,
    chapter: "Chapter 3: Tissues in Action",
    title: "Examiner-Preferred Keywords (Score Maximization)",
    type: "keywords",
    content: {
      keywords: [
        { term: "Totipotency", def: "The innate cellular capability to regenerate a whole organism from a single cell. Use this term in tissue culture answers." },
        { term: "Differentiation", def: "The developmental transition where cells lose division capability to assume permanent, specialized structures and metabolic functions." },
        { term: "Lignification", def: "The deposition of tough, impermeable complex lignin polymer inside cell walls. This is the structural reason for the strength of dead Sclerenchyma cells." },
        { term: "Locomotion", def: "The active, self-propelled displacement of an organism from one geographic place to another. Distinguish this from simple movement of individual body parts." },
        { term: "Transpiration Pull", def: "The continuous upward tension force created in xylem conduits due to the evaporation of water from leaves. This acts as the primary suction pump pulling water hundreds of feet high." },
        { term: "Multinucleate", def: "Cells possessing multiple nuclei in a single shared cytoplasm. A defining histological term for mature Skeletal muscle fibers." },
        { term: "Intercellular Space", def: "The physical micro-gaps existing between adjacent cells. Present and large in Parenchyma; completely absent in tightly packed Meristematic tissues." }
      ]
    }
  },
  {
    pageNumber: 23,
    chapter: "Chapter 11: Reproduction — How Life Continues",
    title: "Key Concepts",
    type: "key-concepts",
    content: {
      intro: "Reproduction is a core life process that ensures the persistence of species over generations on Earth.",
      concepts: [
        {
          heading: "Definition of Reproduction",
          body: "A biological process by which existing living organisms produce new offspring of their own kind, ensuring the continuation and evolutionary survival of their species."
        },
        {
          heading: "Asexual Reproduction",
          body: "A mode of reproduction involving a single parent producing offspring without gamete fusion. Offspring are genetically identical clones of the parent. Highly efficient for rapid expansion in stable environments."
        },
        {
          heading: "Methods of Asexual Reproduction",
          body: "Includes Budding (e.g., Hydra, Yeast - parent forms an outgrowth bud that detaches), Spore Formation (e.g., Rhizopus fungi - releases dry, protected spores), and Vegetative Propagation (e.g., growing plants from stem cuttings, tubers, or root nodules)."
        },
        {
          heading: "Sexual Reproduction",
          body: "Involves two parents contributing genetic material through the fusion of specialized haploid male and female gametes during fertilization. This results in genetically unique offspring, driving evolutionary adaptation."
        }
      ]
    }
  },
  {
    pageNumber: 24,
    chapter: "Chapter 11: Reproduction — How Life Continues",
    title: "Formula / Fact Bank",
    type: "table",
    content: {
      headers: ["Biological Feature", "Asexual Reproduction Mode", "Sexual Reproduction Mode"],
      rows: [
        { feature: "Number of Parents Involved", plant: "Single parent organism", animal: "Typically two parents (Male & Female)" },
        { feature: "Genetic Variation in Offspring", plant: "Completely absent (offspring are identical clones)", animal: "High variation (due to crossing over and random fertilization)" },
        { feature: "Type of Cell Division", plant: "Mitosis division exclusively", animal: "Meiosis for gametogenesis; Mitosis for zygote growth" },
        { feature: "Speed of Reproduction Cycle", plant: "Highly rapid and energy-efficient", animal: "Slower, high energy investment required" },
        { feature: "Adaptability to Changing Environments", plant: "Low adaptability (susceptible to sudden changes)", animal: "High adaptability (variation helps survive environmental shifts)" }
      ]
    }
  },
  {
    pageNumber: 25,
    chapter: "Chapter 11: Reproduction — How Life Continues",
    title: "Watch Out! (Common Traps)",
    type: "traps",
    content: {
      traps: [
        {
          topic: "Pollination vs. Fertilization",
          trap: "Using pollination and fertilization interchangeably.",
          correction: "Pollination is merely the physical transfer of pollen grains from the anther to the stigma of a flower. Fertilization is the chemical fusion of male and female nuclei inside the ovule."
        },
        {
          topic: "Human Chromosome Number",
          trap: "Confusing total chromosomes with chromosome pairs.",
          correction: "Humans possess 46 chromosomes in somatic cells, which are organized in 23 pairs. Human gametes (sperm and egg) contain only 23 single chromosomes, restoring 46 upon fusion."
        },
        {
          topic: "Spontaneous Generation Myth",
          trap: "Believing microscopic molds or bacteria arise spontaneously from decaying food.",
          correction: "All life comes from pre-existing cells (biogenesis). Mold on bread arises from tiny airborne reproductive fungal spores that land and germinate on moist surfaces."
        },
        {
          topic: "Menstrual Cycle Timing",
          trap: "Assuming ovulation always occurs exactly on day 14 of every cycle.",
          correction: "While day 14 is the typical average in a standard 28-day cycle, cycles are variable and influenced by stress, diet, and hormones. Ovulation occurs roughly 14 days before the next menstruation."
        }
      ]
    }
  },
  {
    pageNumber: 26,
    chapter: "Chapter 11: Reproduction — How Life Continues",
    title: "Exam-Style Problems (Q1-Q5)",
    type: "problems",
    content: {
      problems: [
        { num: 1, type: "Theory", q: "Why do simple organisms reproduce asexually while complex multicellular ones prefer sexual reproduction?", ans: "Simple organisms reside in stable niches where identical traits are sufficient. Sexual reproduction is complex but generates massive genetic variation in complex organisms, which is crucial for surviving disease outbreaks and adapting to dynamic environmental changes." },
        { num: 2, type: "Terminology", q: "Define vegetative propagation and list its main artificial methods used in horticulture.", ans: "Vegetative propagation is an asexual reproduction method where a new plant develops from vegetative parts (stems, roots, leaves) rather than seeds. Common artificial methods include: Cutting (rose stems), Layering (jasmine), and Grafting (mango trees)." },
        { num: 3, type: "Logic", q: "How does meiosis solve the problem of doubling chromosomes across sexual generations?", ans: "Meiosis is a reductional division that halves the chromosome number from diploid (2n) to haploid (n) during gamete formation. When sperm (n) and egg (n) fuse during fertilization, the diploid number (2n) is restored in the offspring." },
        { num: 4, type: "Function", q: "What is the biological significance of the scrotum in male mammals?", ans: "The scrotum suspends the testes outside the abdominal cavity. This keeps the testicular temperature 2 to 2.5°C lower than the core body temperature, which is essential for viable sperm production (spermatogenesis)." },
        { num: 5, type: "Comparison", q: "Distinguish between self-pollination and cross-pollination in flowering plants.", ans: "Self-pollination is the transfer of pollen from anther to stigma of the same flower or another flower on the same plant. Cross-pollination is the transfer of pollen from anther to stigma of a flower on a different plant of the same species, promoting genetic diversity." }
      ]
    }
  },
  {
    pageNumber: 27,
    chapter: "Chapter 11: Reproduction — How Life Continues",
    title: "Exam-Style Problems (Q6-Q10)",
    type: "problems",
    content: {
      problems: [
        { num: 6, type: "Function", q: "What is the primary function of the pollen tube during plant fertilization?", ans: "After pollen lands on the stigma, it germinates to form a pollen tube. The tube grows down the style into the ovary to deliver the two male gamete nuclei directly into the ovule for double fertilization." },
        { num: 7, type: "Reasoning", q: "Why do wind-pollinated flowers produce millions of tiny, dry pollen grains?", ans: "Wind dispersal is passive and highly random. The vast majority of pollen is lost in the air. Flowers produce astronomical quantities of lightweight, non-sticky pollen to increase the statistical probability of some landing on a receptive stigma." },
        { num: 8, type: "Mechanism", q: "What happens to the flower's ovary and ovules after fertilization is completed?", ans: "After fertilization, the ovary grows rapidly, ripens, and transforms into the fruit. The fertilized ovules develop tough protective coatings and transform into the seeds containing the plant embryo." },
        { num: 9, type: "Comparison", q: "What are the two main types of fertilization in animals, and which groups perform them?", ans: " (1) External Fertilization: Fusion of gametes occurs outside the body, typical in aquatic environments (e.g., frogs, bony fish). (2) Internal Fertilization: Fusion occurs inside the female body, shielding gametes (e.g., mammals, birds, reptiles)." },
        { num: 10, type: "Application", q: "Why are barrier contraceptives like condoms considered highly effective in family planning?", ans: "Condoms act as a physical barrier that prevents semen from entering the female reproductive tract, blocking pregnancy. Critically, they also prevent the direct exchange of bodily fluids, shielding against sexually transmitted infections (STIs)." }
      ]
    }
  },
  {
    pageNumber: 28,
    chapter: "Chapter 11: Reproduction — How Life Continues",
    title: "Exam-Style Problems (Q11-Q15)",
    type: "problems",
    content: {
      problems: [
        { num: 11, type: "Terminology", q: "Define ovulation in the human female menstrual cycle.", ans: "The physiological process occurring mid-cycle (around day 14 of a 28-day cycle) where a mature Graafian follicle ruptures, releasing a secondary oocyte (egg) from the ovary into the fallopian tube." },
        { num: 12, type: "Logic", q: "What determines the chromosomal sex of a human baby at the moment of fertilization?", ans: "The father's sperm. Human egg cells always contain a single 'X' chromosome. Sperm cells can carry either an 'X' or 'Y' chromosome. If an X-sperm fertilizes the egg, the baby is female (XX). If a Y-sperm fertilizes, the baby is male (XY)." },
        { num: 13, type: "Mechanism", q: "Why does the inner lining of the uterus shed during menstruation?", ans: "During the cycle, the uterus lining (endometrium) thickens and becomes rich in blood vessels to receive a fertilized egg. If fertilization does not occur, progesterone levels plunge, causing the lining to disintegrate and shed as blood and tissue." },
        { num: 14, type: "Application", q: "Explain the plant tissue culture technique and its commercial benefits.", ans: "It involves growing isolated plant tissue fragments (explants) on a sterile, nutrient-rich agar medium containing growth hormones under controlled conditions. It is used to rapidly produce disease-free, high-yield plant clones commercially." },
        { num: 15, type: "Terminology", q: "What is a zygote, and how is it formed?", ans: "A zygote is the single diploid cell (2n) formed by the physical and chemical fusion of a haploid male gamete (n) and a haploid female gamete (n) during fertilization." }
      ]
    }
  },
  {
    pageNumber: 29,
    chapter: "Chapter 11: Reproduction — How Life Continues",
    title: "Exam-Style Problems (Q16-Q20)",
    type: "problems",
    content: {
      problems: [
        { num: 16, type: "Reasoning", q: "Why is breastfeeding considered essential for newborns?", ans: "Mother's milk provides complete, easily digestible nutrition. Crucially, the initial milk (colostrum) is packed with maternal antibodies (Immunoglobulin A) that transfer passive immunity, protecting the vulnerable newborn from infections." },
        { num: 17, type: "Comparison", q: "What is the biological difference between an embryo and a fetus in human development?", ans: "An embryo represents the early developmental stage from fertilization up to 8 weeks, where major organs are initiating. A fetus represents the stage from 9 weeks until birth, characterized by growth and maturation of established organs." },
        { num: 18, type: "Terminology", q: "Define budding as an asexual reproduction mode, giving two examples.", ans: "Budding is a process where a small protrusion (bud) arises on the parent body due to repeated cell divisions. This bud grows, develops parent-like features, and eventually detaches to lead an independent life. Examples: Hydra, Yeast." },
        { num: 19, type: "Function", q: "What is the role of the seminal vesicles in the male reproductive system?", ans: "They secrete an alkaline fluid rich in fructose, proteins, and prostaglandins. This fluid constitutes about 60% of semen volume, providing energy nutrients to nourish sperm and neutralizing the acidic vaginal tract." },
        { num: 20, type: "Ethics & Law", q: "Why is prenatal sex determination strictly prohibited under Indian law?", ans: "To counter the unethical practice of female foeticide driven by cultural preferences for male children. Prohibition helps protect the girl child, ensuring a balanced, healthy societal male-to-female sex ratio." }
      ]
    }
  },
  {
    pageNumber: 30,
    chapter: "Chapter 11: Reproduction — How Life Continues",
    title: "Examiner-Preferred Keywords",
    type: "keywords",
    content: {
      keywords: [
        { term: "Asexual", def: "Reproduction involving one parent, producing genetically identical offspring (clones) via mitotic cell divisions." },
        { term: "Sexual", def: "Reproduction involving fusion of haploid male and female gametes formed by meiosis, producing genetically diverse offspring." },
        { term: "Plant Anatomy Keywords", def: "Includes 'Stamen' (male part: Anther and Filament), 'Pistil/Carpel' (female part: Stigma, Style, and Ovary), 'Pollination' (pollen transfer), and 'Double Fertilization'." },
        { term: "Human Anatomy Keywords", def: "Includes 'Scrotum' (temperature regulator for sperm), 'Vas Deferens' (sperm duct), 'Ovulation' (egg release), 'Menstruation' (uterine lining shedding), and 'Zygote Implantation'." }
      ]
    }
  },
  {
    pageNumber: 31,
    chapter: "Chapter 11: Reproduction — How Life Continues",
    title: "Life Processes Flowchart: Sexual Reproduction",
    type: "flowcharts",
    content: {
      titleA: "Sequence of Events in Sexual Reproduction",
      stepsA: [
        { step: "1. Meiosis", desc: "Diplod germ cells divide to produce haploid sperm and egg gametes, reducing chromosome count by half." },
        { step: "2. Gamete Formation", desc: "Maturation of gametes into functional mobile sperm (male) and nutrient-rich stationary egg (female)." },
        { step: "3. Pollination / Intercourse", desc: "Physical transfer mechanism bringing the male gametes into close proximity to the female gametes." },
        { step: "4. Fertilization", desc: "Chemical and physical fusion of male and female gamete nuclei to form a single diploid cell." },
        { step: "5. Zygote", desc: "The initial single-celled diploid product of fertilization, signifying the start of a new generation." },
        { step: "6. Embryo", desc: "Zygote undergoes repeated mitotic divisions and cell differentiation to form a multicellular pre-organism." },
        { step: "7. Offspring", desc: "Complete development or birth of the new individual, continuing the species line." }
      ]
    }
  },
  {
    pageNumber: 32,
    chapter: "Chapter 11: Reproduction — How Life Continues",
    title: "Plant Anatomy Table",
    type: "table",
    content: {
      headers: ["Organ Structure", "Anatomical Part", "Key Physiological Function"],
      rows: [
        { feature: "Stamen (Male)", plant: "Anther", animal: "Contains pollen sacs that undergo meiosis to produce male haploid pollen grains." },
        { feature: "Stamen (Male)", plant: "Filament", animal: "Slender stalk that supports the anther, presenting it to wind or insect pollinators." },
        { feature: "Pistil / Carpel (Female)", plant: "Stigma", animal: "The sticky, receptive terminal landing pad that captures pollen grains." },
        { feature: "Pistil / Carpel (Female)", plant: "Style", animal: "Long, hollow neck tube through which the germinating pollen tube grows downwards." },
        { feature: "Pistil / Carpel (Female)", plant: "Ovary", animal: "Swollen basal chamber housing the ovules. It ripens into the fruit after fertilization." }
      ]
    }
  },
  {
    pageNumber: 33,
    chapter: "Chapter 11: Reproduction — How Life Continues",
    title: "Hand-Drawn Diagram Guide",
    type: "key-concepts",
    content: {
      intro: "Master these four high-probability diagrams for Chapter 11:",
      concepts: [
        {
          heading: "1. Longitudinal Section (L.S.) of a Flower",
          body: "Sketch a central vase-shaped 'Pistil' (label stigma, style, ovary, ovule). Surround it with long-stalked 'Stamens' (label anther, filament). Draw colorful outer 'Petals' (corolla), green base leaves 'Sepals' (calyx), and the swollen base 'Receptacle'."
        },
        {
          heading: "2. Male Reproductive System",
          body: "Draw the oval 'Testis' enclosed in the 'Scrotum' bag. Trace the tubular loop of 'Vas Deferens' rising around the urinary bladder, joined by 'Seminal Vesicles' and 'Prostate Gland' ducts, merging into the 'Urethra' conduit within the penis."
        },
        {
          heading: "3. Female Reproductive System",
          body: "Draw a central inverted pear-shaped 'Uterus'. Extend a pair of horizontal 'Fallopian Tubes' (oviducts) ending in finger-like projections adjacent to two almond-shaped 'Ovaries'. Sketch the lower muscular neck 'Cervix' leading to the 'Vagina'."
        },
        {
          heading: "4. Fertilization in Plants",
          body: "Draw a close-up of a pollen grain germinating on the stigma, with a long 'Pollen Tube' traveling down the style, entering the micropyle opening of an ovule inside the ovary, delivering male gametes."
        }
      ]
    }
  },
  {
    pageNumber: 34,
    chapter: "Chapter 12: Patterns in Life: Diversity and Classification",
    title: "Key Concepts",
    type: "key-concepts",
    content: {
      intro: "This chapter covers the breathtaking diversity of living forms and the systematic methods scientists use to categorize and study them.",
      concepts: [
        {
          heading: "Biodiversity",
          body: "The immense, rich variety of life forms inhabiting Earth, ranging from microscopic single-celled bacteria to massive blue whales and giant sequoia redwood trees."
        },
        {
          heading: "Classification",
          body: "A systematic framework of grouping organisms based on similarities, structural patterns, and evolutionary relationships (phylogeny) to make studying millions of species practical."
        },
        {
          heading: "Why Classify?",
          body: "It organizes vast volumes of biological information, aids in immediate species identification, establishes ancestral evolutionary links between distinct groups, and forms the foundation of conservation planning."
        },
        {
          heading: "Criteria for Classification",
          body: "Includes: (1) Cell structure: Prokaryotic vs Eukaryotic. (2) Cellularity: Unicellular vs Multicellular. (3) Mode of nutrition: Autotrophic (make own food) vs Heterotrophic (absorb/ingest nutrients). (4) Body organization and evolutionary ancestry (fossils)."
        }
      ]
    }
  },
  {
    pageNumber: 35,
    chapter: "Chapter 12: Patterns in Life: Diversity and Classification",
    title: "Fact Bank: The Five Kingdoms",
    type: "table",
    content: {
      headers: ["Kingdom", "Cell Type", "Cell Structure / Wall", "Mode of Nutrition", "Key Features & Examples"],
      rows: [
        { feature: "Monera", plant: "Prokaryotic", animal: "Unicellular; peptidoglycan cell wall present/absent", price: "Diverse (autotrophic/heterotrophic)", originalPrice: "Primitive single circular chromosome, lacks nuclear envelope. Examples: Bacteria, Cyanobacteria." },
        { feature: "Protista", plant: "Eukaryotic", animal: "Unicellular; cell wall present in some", price: "Diverse (photosynthetic/heterotrophic)", originalPrice: "Contains membrane organelles, has cilia/flagella for locomotion. Examples: Amoeba, Paramecium, Euglena." },
        { feature: "Fungi", plant: "Eukaryotic", animal: "Multicellular (except yeast); wall made of chitin", price: "Heterotrophic (Saprophytic/Parasitic)", originalPrice: "Absorbs organic matter from dead substrates. Crucial natural decomposers. Examples: Mushrooms, Penicillium, Yeast." },
        { feature: "Plantae", plant: "Eukaryotic", animal: "Multicellular; wall made of cellulose", price: "Autotrophic (Photosynthetic)", originalPrice: "Contains chloroplasts and plastids, fixed tissue system. Examples: Mosses, Ferns, Flowering plants." },
        { feature: "Animalia", plant: "Eukaryotic", animal: "Multicellular; cell wall completely absent", price: "Heterotrophic (Holozoic ingestion)", originalPrice: "Cells lack cell walls, exhibit active muscular locomotion and complex nervous coordination. Examples: Insects, Birds, Humans." }
      ]
    }
  },
  {
    pageNumber: 36,
    chapter: "Chapter 12: Patterns in Life: Diversity and Classification",
    title: "Watch Out! (Common Exam Traps)",
    type: "traps",
    content: {
      traps: [
        {
          topic: "Prokaryote vs. Eukaryote Kingdom separation",
          trap: "Confusing Monera with Protista or single-celled Fungi.",
          correction: "Only Kingdom Monera comprises Prokaryotic organisms. Protista, although unicellular, consists strictly of Eukaryotic cells containing a well-defined nucleus and membrane organelles."
        },
        {
          topic: "Kingdom Fungi vs. Plantae",
          trap: "Classifying Fungi under the plant kingdom because they are non-motile and have cell walls.",
          correction: "Fungi are strictly heterotrophic decomposers, completely lack chlorophyll/chloroplasts, and build cell walls out of 'chitin' (nitrogenous polysaccharide) rather than plant cellulose. Hence they are a distinct kingdom."
        },
        {
          topic: "Binomial Nomenclature Writing Rules",
          trap: "Writing scientific names without proper capitalization or underlining.",
          correction: "Always capitalize the first letter of the Genus name, keep the species name in completely lowercase, and either write them in italics (when typed) or underline them 'individually' (when hand-written). Example: <u>Homo</u> <u>sapiens</u>."
        },
        {
          topic: "The 'Amphibians' of the Plant Kingdom",
          trap: "Believing that ferns or algae are the plant amphibians.",
          correction: "'Bryophytes' (mosses, liverworts) are explicitly called amphibians of the plant kingdom because although they live on dry land, they are completely dependent on water for sexual fertilization (sperm must swim to the egg)."
        }
      ]
    }
  },
  {
    pageNumber: 37,
    chapter: "Chapter 12: Patterns in Life: Diversity and Classification",
    title: "Advanced Practice Questions (Q1-Q5)",
    type: "problems",
    content: {
      problems: [
        { num: 1, type: "Theory", q: "How does the presence of a rigid cellulose cell wall influence the evolutionary mode of nutrition in Kingdom Plantae?", ans: "The cell wall provides mechanical rigidity, resisting osmotic turgor pressure. This prevents active locomotion, directing plants to evolve a sedentary, autotrophic (photosynthetic) mode of nutrition, using tall structural growth to capture solar radiation." },
        { num: 2, type: "Reasoning", q: "Why are fungi considered the absolute 'recyclers' of biosphere nutrients?", ans: "Fungi are saprophytes. They secrete powerful extracellular digestive enzymes directly onto organic waste, breaking down complex polymers (lignin, cellulose) into simple minerals. They absorb what they need, returning crucial inorganic minerals to soil for plants." },
        { num: 3, type: "Comparison", q: "What is the primary anatomical difference between the vascular xylem of a fern and a sunflower?", ans: " Ferns are pteridophytes with primitive vascular systems, containing only 'tracheids' in xylem. Sunflowers are advanced angiosperms possessing highly specialized, hollow 'xylem vessels' joined end-to-end for much more efficient water conduction." },
        { num: 4, type: "Application", q: "If you discover an organism in soil with jointed appendages, bilateral symmetry, and a hard chitinous exoskeleton, can it be classified as an Annelid?", ans: "No. These features (jointed appendages and chitinous exoskeleton) are the primary diagnostic traits of Phylum 'Arthropoda'. Annelids are segmented worms with soft bodies lacking jointed legs or skeletons." },
        { num: 5, type: "Conservation", q: "Why does the discovery of the endemic 'Purple Frog' serve as an important case study for biodiversity conservation?", ans: "Discovered in the Western Ghats in 2003, it represents a deep, ancient evolutionary lineage of frogs dating back to Gondwanaland. Protecting this single species safeguards irreplaceable evolutionary history and emphasizes protecting its vulnerable rainforest habitat." }
      ]
    }
  },
  {
    pageNumber: 38,
    chapter: "Chapter 12: Patterns in Life: Diversity and Classification",
    title: "Advanced Practice Questions (Q6-Q9)",
    type: "problems",
    content: {
      problems: [
        { num: 6, type: "Comparison", q: "Compare the gut digestive tube structure of Phylum Nematoda against Phylum Platyhelminthes.", ans: "Platyhelminthes (flatworms) have an incomplete digestive cavity with a single opening acting as both mouth and anus. Nematoda (roundworms) possess an advanced, complete 'tube-within-a-tube' digestive tract featuring separate mouth and anus openings." },
        { num: 7, type: "Evolution", q: "What is the physiological significance of the 'notochord' in chordate evolutionary history?", ans: "The notochord is a flexible, rod-like internal support structures running along the dorsal side. It provides a firm point for muscle attachments allowing fluid swimming movements. In vertebrates, it is replaced by the cartilaginous or bony vertebral column." },
        { num: 8, type: "Reproduction", q: "How do Angiosperms (flowering plants) structurally maximize their reproductive and seed-dispersal efficiency?", ans: "Angiosperms develop flowers with bright colors and nectar to recruit precise animal/insect pollinators. They also enclose seeds inside ovaries which ripen into sweet fruits, encouraging animals to eat and disperse seeds over vast geographical distances." },
        { num: 9, type: "Theory", q: "What scientific criteria differentiate the modern Three-Domain System from Whittaker's classic Five-Kingdom System?", ans: "Whittaker's system is based on cellularity, nutrition, and visible body structure. Carl Woese's Three-Domain System (Archaea, Bacteria, Eukarya) relies on genetic ribosomal RNA (rRNA) sequence comparisons, revealing ancient molecular separations." }
      ]
    }
  },
  {
    pageNumber: 39,
    chapter: "Chapter 12: Patterns in Life: Diversity and Classification",
    title: "Advanced Practice Questions (Q10-Q13)",
    type: "problems",
    content: {
      problems: [
        { num: 10, type: "Ecology", q: "Explain the environmental importance of 'Phumdis' floating vegetation to the endangered Sangai deer of Manipur.", ans: "Phumdis are floating mats of organic soil, vegetation, and decaying matter in Loktak Lake. They form the exclusive, fragile grassland habitat of the highly endangered brow-antlered Sangai deer (dancing deer), supplying their food and shelter." },
        { num: 11, type: "Terminology", q: "Define a biological 'Species' based on Ernst Mayr's biological species concept.", ans: "A group of actually or potentially interbreeding natural populations that are reproductively isolated from other such groups, capable of producing viable, fertile offspring under natural conditions." },
        { num: 12, type: "Analogy", q: "Why is the classification of books in a public library a strong analogy for biological taxonomy?", ans: "A library catalogs millions of books into nested sections (e.g., Science → Physics → Mechanics) to enable immediate retrieval. Similarly, taxonomy groups millions of species into hierarchical categories (Kingdom → Phylum → Class) to organize study." },
        { num: 13, type: "Geology", q: "What was the critical biogeochemical role of ancient photosynthetic Cyanobacteria in Earth's atmospheric history?", ans: "Around 2.5 billion years ago, primitive cyanobacteria evolved oxygenic photosynthesis. This released massive gaseous oxygen into the primitive reducing atmosphere, precipitating the Great Oxidation Event, paving the way for aerobic respiration and complex animal life." }
      ]
    }
  },
  {
    pageNumber: 40,
    chapter: "Chapter 12: Patterns in Life: Diversity and Classification",
    title: "Advanced Practice Questions (Q14-Q17)",
    type: "problems",
    content: {
      problems: [
        { num: 14, type: "Identification", q: "Which anatomical features of the ancient Purple Frog help taxonomists map its ancestral lineage?", ans: "Its unique molecular DNA, lack of normal webbed toes, and a pointed snout adapted for eating underground termites. These traits map directly to fossil records of ancient frog families that branched off during the Mesozoic era." },
        { num: 15, type: "Philosophy", q: "Why does the scientific classification of a specific organism sometimes change over decades?", ans: "Science is an iterative, self-correcting process. As technology advances (e.g., high-resolution electron microscopes, genomic DNA sequencing), older classifications based purely on superficial looks are replaced by true genetic and evolutionary mappings." },
        { num: 16, type: "Comparison", q: "Contrast the skeletal and body cavity structures of Phylum Porifera against Phylum Echinodermata.", ans: "Porifera (sponges) are asymmetrical, cellular-level animals with no true tissues, possessing microscopic silica or calcium spicules as support. Echinodermata (starfish) are highly organized triploblastic coelomate animals with radial symmetry and a hard calcareous internal endoskeleton." },
        { num: 17, type: "Physiology", q: "Why do tall, terrestrial vascular plants require complex specialized transport tissues compared to aquatic Algae?", ans: "Algae float in water, absorbing water/nutrients directly through cell membranes. Tall land plants must extract water from deep soil and transport it hundreds of feet up to leaves. Simple diffusion is too slow; they evolved pressurized Xylem and Phloem lines." }
      ]
    }
  },
  {
    pageNumber: 41,
    chapter: "Chapter 12: Patterns in Life: Diversity and Classification",
    title: "Advanced Practice Questions (Q18-Q20)",
    type: "problems",
    content: {
      problems: [
        { num: 18, type: "Theory", q: "What are the two parts of a binomial scientific name, and who formulated this rule?", ans: "The binomial name consists of: (1) Genus name (capitalized, generic name) followed by (2) Species name (lowercase, specific epithet). This systematic nomenclature system was created and standardized by Carolus Linnaeus." },
        { num: 19, type: "Classification", q: "Why is the Kingdom 'Monera' restricted strictly to prokaryotic cell types?", ans: "Because prokaryotes represent a fundamental evolutionary division of life characterized by cells lacking a nuclear envelope, nucleolus, histones, or double-membraned organelles, which sets them completely apart from all eukaryotic kingdoms." },
        { num: 20, type: "Socio-Economics", q: "How does conserving local forest biodiversity directly benefit local human livelihoods?", ans: "Biodiversity provides direct ecosystem services: natural pollination of food crops, clean water filtration, prevention of soil erosion, and sustainable economic resources like medicinal plants, wild honey, and substrate for commercial mushroom farming." }
      ]
    }
  }
];
