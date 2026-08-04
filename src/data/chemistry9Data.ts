export interface ChemistryPage {
  pageNumber: number;
  chapter: string;
  title: string;
  subtitle?: string;
  type: string;
  content: any;
}

export const chemistry9Pages: ChemistryPage[] = [
  {
    pageNumber: 1,
    chapter: "Chapter 5: Exploring Mixtures and their Separation",
    title: "Key Concepts",
    type: "key-concepts",
    content: {
      intro: "This chapter covers the classification of matter as pure substances and mixtures, and analyzes physical separation techniques.",
      concepts: [
        {
          heading: "Homogeneous Mixtures (Solutions)",
          body: "Mixtures possessing a completely uniform composition throughout. The individual components are physically indistinguishable by the naked eye or under ordinary microscopes (e.g., salt solution, vinegar, brass alloy)."
        },
        {
          heading: "Heterogeneous Mixtures",
          body: "Mixtures that do not possess a uniform composition throughout. The individual particles remain distinct and can be seen either directly or under microscopic observation (e.g., sand in water, muddy water, smoke)."
        },
        {
          heading: "True Solutions",
          body: "Stable, homogeneous systems formed by mixing a solute in a solvent. Solute particles are smaller than 1 nm (10^-9 m) in diameter, do not settle down, do not exhibit the Tyndall effect, and pass through filter paper."
        },
        {
          heading: "Suspensions",
          body: "Unstable, heterogeneous mixtures containing large solid particles suspended throughout. Particles exceed 1000 nm in diameter, are visible to the naked eye, settle down upon standing, and can be filtered easily."
        },
        {
          heading: "Colloids",
          body: "Heterogeneous systems looking superficially homogeneous. Particle size ranges between 1 nm and 1000 nm. They do not settle, pass through filter paper, but scatter light intensely (exhibiting the Tyndall effect). Examples include blood, milk, and clouds."
        },
        {
          heading: "The Tyndall Effect",
          body: "The distinct scattering of a visible beam of light as it passes through a colloidal dispersion or suspension, illuminating its path. True solutions do not exhibit this phenomenon."
        }
      ]
    }
  },
  {
    pageNumber: 2,
    chapter: "Chapter 5: Exploring Mixtures and their Separation",
    title: "Separation Techniques",
    type: "key-concepts",
    content: {
      intro: "The choice of separation technique depends on the differences in physical properties of the constituents of a mixture.",
      concepts: [
        {
          heading: "Crystallization",
          body: "A gentle cooling process used to separate a pure solid in the form of regular geometric crystals from its hot, saturated solution. It yields purer solids than simple evaporation."
        },
        {
          heading: "Simple Distillation",
          body: "Used to separate two miscible liquids whose boiling points differ by at least 25°C, or to recover a solvent from dissolved non-volatile solids."
        },
        {
          heading: "Fractional Distillation",
          body: "Used to separate miscible liquids whose boiling points differ by less than 25°C (e.g., refining crude petroleum, separating gases from liquid air), using a fractionating column."
        },
        {
          heading: "Separating Funnel",
          body: "Used to separate two completely immiscible liquids based on their differences in density. The denser liquid forms the bottom layer and is drained first."
        },
        {
          heading: "Sublimation",
          body: "Used to separate a sublimable volatile solid (which changes directly from solid to gas on heating) from non-sublimable impurities (e.g., camphor, ammonium chloride, naphthalene from sand)."
        },
        {
          heading: "Centrifugation & Coagulation",
          body: "Centrifugation uses rapid spinning to force heavier suspended particles to settle. Coagulation uses chemical agents (like alum) to force colloidal particles to clump together and settle under gravity."
        },
        {
          heading: "Paper Chromatography",
          body: "An analytical approach separating colored or solute components based on their varying rates of migration across a strip of specialized paper driven by a mobile solvent phase."
        }
      ]
    }
  },
  {
    pageNumber: 3,
    chapter: "Chapter 5: Exploring Mixtures and their Separation",
    title: "Comparative Summary Matrix of Mixtures",
    type: "table",
    content: {
      headers: ["Property", "True Solution", "Colloid", "Suspension"],
      rows: [
        { feature: "Nature", plant: "Homogeneous", animal: "Heterogeneous (appears homogeneous)", price: "Heterogeneous" },
        { feature: "Particle Size", plant: "< 1 nm (< 10^-9 m)", animal: "1 nm to 1000 nm", price: "> 1000 nm (> 10^-6 m)" },
        { feature: "Filterability", plant: "Passes through standard filter paper", animal: "Passes through standard filter paper", price: "Retained on filter paper" },
        { feature: "Stability", plant: "Highly stable; never settles out", animal: "Stable; does not settle under gravity", price: "Unstable; particles settle over time" },
        { feature: "Tyndall Effect", plant: "Does not scatter light (invisible path)", animal: "Scatters light intensely (visible path)", price: "Scatters light (until particles settle)" }
      ]
    }
  },
  {
    pageNumber: 4,
    chapter: "Chapter 5: Exploring Mixtures and their Separation",
    title: "Watch Out! (Common Exam Traps)",
    type: "traps",
    content: {
      traps: [
        {
          topic: "The Solution Mass Denominator Trap",
          trap: "Using only the mass of the solvent in the denominator of concentration calculations.",
          correction: "Mass of solution = Mass of solute + Mass of solvent. Always add both values in the denominator when calculating mass percentage."
        },
        {
          topic: "Colloids Misclassification",
          trap: "Classifying milk or blood as homogeneous solutions because they look uniform.",
          correction: "Milk and blood are heterogeneous colloids. Under a microscope, separate suspended droplets/cells are clearly visible, and they intensely scatter light."
        },
        {
          topic: "Distillation Criteria",
          trap: "Using simple distillation for liquids with boiling point differences less than 25°C.",
          correction: "Simple distillation cannot separate them cleanly because both liquids will vaporize together. You must use 'Fractional Distillation' which provides repeated condensation-vaporization cycles."
        },
        {
          topic: "Chromatography Solvent Level",
          trap: "Letting the ink/dye spot sit below the solvent level at start.",
          correction: "The initial pencil line and ink spot must sit strictly 'above' the solvent level. If submerged, the ink will dissolve directly into the solvent pool instead of crawling up the paper."
        }
      ]
    }
  },
  {
    pageNumber: 5,
    chapter: "Chapter 5: Exploring Mixtures and their Separation",
    title: "Exam-Style Solved Problems (Q1-Q10)",
    type: "problems",
    content: {
      problems: [
        { num: 1, type: "Numerical", q: "A solution is prepared by mixing 45 g of common salt with 300 g of water. Calculate the mass by mass percentage.", ans: "Mass of solute = 45 g, Mass of solvent = 300 g. Total mass of solution = 45 + 300 = 345 g. Mass percentage % m/m = (45 / 345) * 100 = 13.04%." },
        { num: 2, type: "Numerical", q: "A student needs to prepare 250 mL of a 0.9% m/v sodium chloride intravenous solution. Find the mass of pure NaCl needed.", ans: "Volume of solution = 250 mL, Required concentration = 0.9% m/v. % m/v = (Mass of solute / Volume of solution) * 100 => 0.9 = (Mass / 250) * 100 => Mass = (0.9 * 250) / 100 = 2.25 g." },
        { num: 3, type: "Numerical", q: "A commercial perfume directs mixing 12 mL of essential oil concentrate to yield a total volume of 160 mL perfume spray. Find volume percentage.", ans: "Volume of solute = 12 mL, Total volume of solution = 160 mL. % v/v = (12 / 160) * 100 = 7.5%." },
        { num: 4, type: "Numerical", q: "A cosmetic talcum formulation contains 4% m/m zinc oxide powder. How much pure zinc oxide is delivered inside a 350 g retail canister?", ans: "Mass percentage = 4%, Total mass of product mixture = 350 g. Mass of solute = (4 * 350) / 100 = 14 g." },
        { num: 5, type: "Numerical", q: "The solubility of Compound B is 287 g per 100 g water at 60°C and drops to 241 g at 40°C. If a saturated solution containing 100 g of water is cooled from 60°C to 40°C, what mass of compound crystals will separate out?", ans: "Solubility at 60°C = 287 g, solubility at 40°C = 241 g. The excess solute can no longer remain dissolved and must crystallize out. Mass crystallized = 287 - 241 = 46 g." },
        { num: 6, type: "Numerical", q: "The solubility of KNO3 at 40°C is 62 g per 100 g of water. Find what mass is required to prepare a saturated solution in 50 g of water.", ans: "Since we are using 50 g of water (which is half of 100 g), the required mass of solute scales proportionally. Mass needed = 62 * (50 / 100) = 31 g." },
        { num: 7, type: "Numerical", q: "Student A mixes 20g sugar in 80g water, Student B mixes 20g sugar in 100g water, and Student C mixes 30g sugar in 80g water. Calculate and identify the most concentrated.", ans: "Student A: (20/100)*100 = 20%. Student B: (20/120)*100 = 16.67%. Student C: (30/110)*100 = 27.27%. Student C's solution is the most concentrated." },
        { num: 8, type: "Numerical", q: "A brass specimen weighs 150 g and contains 70% copper by mass, with zinc making up the rest. Calculate separate masses of copper and zinc.", ans: "Brass is an alloy. Mass of copper = (70 * 150) / 100 = 105 g. Mass of zinc = Total mass - copper = 150 - 105 = 45 g." },
        { num: 9, type: "Conceptual", q: "Why does a beam of laser light leave no visible path through a salt-water solution, but is clearly illuminated inside a milk-water mixture?", ans: "Salt-water is a true solution with solute particles smaller than 1 nm, which cannot scatter light. Milk-water is a colloid with suspended fat particles between 1 and 1000 nm, which intensely scatter the light beam (Tyndall effect)." },
        { num: 10, type: "Analytical", q: "Evaluate: (1) 'Evaporation and crystallization are identical.' (2) 'In paper chromatography, solvent level starts above sample spot.' Provide corrections.", ans: "(1) False. Evaporation drives away the solvent completely leaving behind an amorphous residue with impurities. Crystallization is a gentle cooling technique yielding highly pure, regularly patterned geometric crystals. (2) False. The solvent level must be strictly 'below' the pencil line sample mark to prevent bleeding into the fluid basin." }
      ]
    }
  },
  {
    pageNumber: 6,
    chapter: "Chapter 5: Exploring Mixtures and their Separation",
    title: "Exam-Style Solved Problems (Q11-Q20)",
    type: "problems",
    content: {
      problems: [
        { num: 11, type: "Conceptual", q: "Why are clouds classified as colloidal systems rather than true solutions or suspensions?", ans: "Clouds consist of tiny liquid water droplets or microscopic ice crystals dispersed in air. These components do not settle down instantly like a suspension, yet they are large enough to scatter sunlight, matching the definition of a colloid (liquid aerosol)." },
        { num: 12, type: "Conceptual", q: "What would happen if human blood behaved like a true suspension inside the vascular system instead of acting as a colloid?", ans: "If blood behaved like a true suspension, the heavy blood cells (RBCs, WBCs, platelets) would settle down inside the blood vessels whenever a person stands still or rests. This sedimentation would block blood flow, preventing oxygen and nutrients from circulating." },
        { num: 13, type: "Analytical", q: "Suggest an effective method to separate a mixture of two miscible liquids: Liquid X (bp 56°C) and Liquid Y (bp 100°C). Explain.", ans: "Since both are completely miscible and their boiling points differ by more than 25°C (100 - 56 = 44°C), 'Simple Distillation' is highly effective. Liquid X with the lower boiling point will vaporize first, pass through the water condenser, and collect as a separate liquid." },
        { num: 14, type: "Analytical", q: "Choose an appropriate separation scheme to isolate pure naphthalene from a mixture containing solid sand particles.", ans: "Since naphthalene is a sublimable solid and sand does not sublime, 'Sublimation' is the best technique. Heating the mixture directly converts naphthalene into a vapor, leaving behind the sand residue. The vapor is then cooled and collected on a cold surface." },
        { num: 15, type: "Conceptual", q: "A laboratory flask contains a mixture of mustard oil and water. Detail the steps and apparatus required to isolate these two phases.", ans: "Mustard oil and water are completely immiscible liquids that split into two layers based on density. We pour the mixture into a 'Separating Funnel' and let it stand. Water is denser and forms the bottom layer; we open the bottom stopcock to drain the water, then close it right when the oil layer reaches the valve." },
        { num: 16, type: "Conceptual", q: "How can you remove fine, suspended clay particles from muddy water when standard filtration fails because particles slip through?", ans: "Clay particles carry negative surface charges that keep them suspended as a colloid. We can introduce a small amount of alum (fitkari) to initiate 'Coagulation'. The dissolved alum neutralizes surface charges, causing clay particles to clump together into larger aggregates that settle by gravity." },
        { num: 17, type: "Conceptual", q: "Determine the separation technique for: (1) Extracting natural perfumes from floral petals. (2) Isolating dense plasma from red blood cells.", ans: "(1) Steam Distillation: Vaporizes volatile essential oils from petals, then condenses them. (2) Centrifugation: Spinning blood at high speeds forces heavier red blood cells to settle at the bottom, leaving lighter plasma at the top." },
        { num: 18, type: "Analytical", q: "State the correct operational sequence of separation techniques needed to break down a solid mixture of Sand, Common Salt, and Camphor.", ans: "Step 1: Sublimation (heating sublimates camphor, leaving sand and salt). Step 2: Dissolution and Filtration (add water to dissolve salt, filter out insoluble sand). Step 3: Evaporation/Crystallization (heat salt-water filtrate to evaporate water, leaving pure salt crystals)." },
        { num: 19, type: "Conceptual", q: "Crude petroleum contains fractions like petrol, diesel, and kerosene with boiling point differences less than 25°C. Name the industrial refining technique and its working principle.", ans: "Fractional Distillation. It utilizes a tall fractionating column that creates a vertical temperature gradient. This allows components with close boiling points to undergo repeated vaporization and condensation cycles up the column, achieving clean separation at different heights." },
        { num: 20, type: "Numerical", q: "You need to separate a mixture of acetone (bp 56°C) and alcohol (bp 78°C). Can you separate them using simple distillation?", ans: "No. The boiling point difference is 78 - 56 = 22°C, which is less than the minimum 25°C threshold required for simple distillation. You must use 'Fractional Distillation' instead to prevent both liquids from vaporizing together." }
      ]
    }
  },
  {
    pageNumber: 7,
    chapter: "Chapter 8: Journey Inside the Atom",
    title: "Key Concepts",
    type: "key-concepts",
    content: {
      intro: "This chapter covers the historical models of the atom and the discovery of subatomic particles.",
      concepts: [
        {
          heading: "Ancient Perspectives",
          body: "Acharya Kanada in ancient India suggested that repeated division of matter (dravya) leads to indivisible particles called parmanus. Greek philosophers Democritus and Leucippus called these indivisible units atomos."
        },
        {
          heading: "Dalton's Atomic Theory",
          body: "Proposed in 1808, it stated that atoms are the indivisible, fundamental building blocks of all matter, and atoms of a given element are identical in mass and properties."
        },
        {
          heading: "Discovery of Electrons",
          body: "J. J. Thomson (1897) discovered streams of negatively charged subatomic particles called electrons using a cathode ray tube at low pressure."
        },
        {
          heading: "Thomson's Plum Pudding Model",
          body: "Visualized the atom as a sphere of positive charge with electrons embedded throughout it, balancing the overall electrical charge, similar to seeds in a watermelon."
        },
        {
          heading: "Rutherford's Gold Foil Experiment & Planetary Model",
          body: "Geiger and Marsden (1911) bombarded a thin gold foil with alpha particles. Observing most passed straight through while a few deflected at large angles, Rutherford concluded the atom has a dense, tiny, positively charged center called the nucleus, containing most of the mass, with electrons orbiting like planets."
        },
        {
          heading: "Limitations of Rutherford's Model",
          body: "According to classical electromagnetic physics, an accelerating charged particle in circular motion must continuously lose energy. Thus, orbiting electrons would spiral inward and collapse into the nucleus, which means Rutherford's model could not explain atomic stability."
        },
        {
          heading: "Bohr's Model of the Atom",
          body: "Niels Bohr (1913) resolved the stability paradox by postulating that electrons revolve around the nucleus only in discrete, non-radiating paths called stationary states, orbits, or shells (K, L, M, N... or n = 1, 2, 3, 4...). Energy is only absorbed or released when an electron transitions between these discrete levels."
        },
        {
          heading: "Discovery of the Neutron",
          body: "James Chadwick (1932) discovered an uncharged subatomic particle in the nucleus called a neutron, which has a mass nearly equal to that of a proton."
        }
      ]
    }
  },
  {
    pageNumber: 8,
    chapter: "Chapter 8: Journey Inside the Atom",
    title: "Atomic Formulations & Valency",
    type: "key-concepts",
    content: {
      intro: "This section explores the quantitative aspects of atomic structure, electron configurations, and chemical combining capacity.",
      concepts: [
        {
          heading: "Atomic Number (Z)",
          body: "Equal to the number of protons present in the nucleus of an atom. In a neutral atom, it is also equal to the number of electrons. It uniquely defines an element's identity."
        },
        {
          heading: "Mass Number (A)",
          body: "The total sum of protons and neutrons (collectively called nucleons) in the nucleus of an atom. A = Z + number of neutrons."
        },
        {
          heading: "Electronic Configuration Rules (Bohr-Bury Scheme)",
          body: "1. The maximum capacity of a shell is 2n^2, where 'n' is the shell number (K=2, L=8, M=18, N=32). 2. The maximum number of electrons that can be accommodated in the outermost shell is strictly 8. 3. Shells are filled in a step-wise, concentric outward manner."
        },
        {
          heading: "Valency",
          body: "The combining capacity of an atom, determined by the number of valence electrons (electrons in the outermost shell). If valence electrons ≤ 4, valency = valence electrons. If valence electrons > 4, valency = 8 - valence electrons. Elements gain, lose, or share electrons to complete a stable octet."
        },
        {
          heading: "Isotopes & Isobars",
          body: "Isotopes are atoms of the same element having the same atomic number (Z) but different mass numbers (A) due to different number of neutrons (e.g., Protium, Deuterium, Tritium). Isobars are atoms of different elements having different atomic numbers but the same mass number (e.g., Argon-40 and Calcium-40)."
        }
      ]
    }
  },
  {
    pageNumber: 9,
    chapter: "Chapter 8: Journey Inside the Atom",
    title: "Subatomic Particle Profiles",
    type: "table",
    content: {
      headers: ["Subatomic Particle", "Symbol", "Relative Charge", "Approx. Relative Mass", "Location", "Discoverer"],
      rows: [
        { feature: "ELECTRON", plant: "e-", animal: "-1", price: "1/2000 of proton", originalPrice: "Orbits/Shells outside nucleus", name: "J. J. Thomson" },
        { feature: "PROTON", plant: "p+", animal: "+1", price: "1 u", originalPrice: "Inside the nucleus", name: "Ernest Rutherford" },
        { feature: "NEUTRON", plant: "n0", animal: "0 (neutral)", price: "1 u", originalPrice: "Inside the nucleus", name: "James Chadwick" }
      ]
    }
  },
  {
    pageNumber: 10,
    chapter: "Chapter 8: Journey Inside the Atom",
    title: "Watch Out! (Common Traps)",
    type: "traps",
    content: {
      traps: [
        {
          topic: "Valency vs. Valence Electrons",
          trap: "Writing the number of valence electrons as the valency for elements with outer shells more than half full.",
          correction: "Valence electrons is the actual count of outermost electrons. Valency is the combining capacity. For Oxygen (Z=8, config 2, 6), valence electrons is 6, but its valency is 8 - 6 = 2. Do not write 6 as valency!"
        },
        {
          topic: "Ion Formation Proton Changes",
          trap: "Subtracting or adding protons when an atom gains or loses charge.",
          correction: "Protons and neutrons are locked deep inside the nucleus and 'never' change during chemical reaction or ion formation. Only electrons in outer shells are gained (-) or lost (+)."
        },
        {
          topic: "Mass Number vs. Atomic Mass",
          trap: "Assuming mass number and atomic mass are exactly the same concept.",
          correction: "Mass number (A) is always a strict integer count of protons + neutrons (nucleons). Atomic mass can be fractional (e.g., Chlorine is 35.5 u) because it represents a weighted average of naturally occurring isotopic abundances."
        },
        {
          topic: "Shell Capacity Oversights",
          trap: "Putting 18 electrons in the outermost M-shell of an atom.",
          correction: "While the M-shell (n=3) has a mathematical capacity of 2(3)^2 = 18 electrons, the Bohr-Bury rules restrict the maximum capacity of any 'outermost' shell of an atom to exactly 8. Extra electrons must go to the N-shell first."
        }
      ]
    }
  },
  {
    pageNumber: 11,
    chapter: "Chapter 8: Journey Inside the Atom",
    title: "Exam-Style Solved Problems (Q1-Q10)",
    type: "problems",
    content: {
      problems: [
        { num: 1, type: "Numerical", q: "An atom with an atomic number of 26 has 56 nucleons. Calculate its number of electrons, protons, and neutrons.", ans: "Atomic number Z = 26, so number of protons = 26, and number of electrons (in neutral atom) = 26. Mass number A = 56. Neutrons n0 = A - Z = 56 - 26 = 30." },
        { num: 2, type: "Numerical", q: "The nucleus of an atom contains 20 protons. If its mass number is 41, calculate the number of neutrons present in it.", ans: "Protons p+ = 20, Mass number A = 41. Since A = p+ + n0, we have 41 = 20 + n0 => n0 = 41 - 20 = 21 neutrons." },
        { num: 3, type: "Conceptual", q: "An atom has 18 neutrons and an atomic number of 17. Find its mass number and express the element in standard notation.", ans: "Z = 17 (protons), n0 = 18. Mass number A = Z + n0 = 17 + 18 = 35. Since Z = 17 is Chlorine (Cl), standard notation is 35_17 Cl." },
        { num: 4, type: "Numerical", q: "An atom represented as 23_11 Na contains 11 electrons. Determine the number of neutrons in its nucleus.", ans: "From notation, Mass number A = 23, Atomic number Z = 11. Number of neutrons n0 = A - Z = 23 - 11 = 12 neutrons." },
        { num: 5, type: "Numerical", q: "Identify the number of valence electrons and outermost shell for the species 19_9 F.", ans: "Atomic number Z = 9, so electronic configuration is K=2, L=7. The outermost shell is the L-shell, and it contains 7 valence electrons." },
        { num: 6, type: "Numerical", q: "Write the electronic configuration and determine the valency of elements having atomic numbers 12, 16, and 18.", ans: "Z=12 (Mg): config = 2, 8, 2. Valence electrons = 2 <= 4, so Valency = 2. Z=16 (S): config = 2, 8, 6. Valence electrons = 6 > 4, so Valency = 8 - 6 = 2. Z=18 (Ar): config = 2, 8, 8. Outer shell is full, so Valency = 0." },
        { num: 7, type: "Conceptual", q: "Solve the following riddle: 'I am an atom with a mass number of 23 and 11 protons. I am a soft metal and react vigorously with water. Who am I and how many neutrons do I have?'", ans: "11 protons means Atomic number Z = 11, which is Sodium (Na). Mass number A = 23. Neutrons n0 = A - Z = 23 - 11 = 12. Identity: Sodium (Na) with 12 neutrons." },
        { num: 8, type: "Numerical", q: "For an atom of Magnesium with a mass number of 24 and atomic number 12, determine the count of fundamental particles and trace its shell arrangement.", ans: "Z = 12, A = 24. Protons = 12, Electrons = 12, Neutrons = 24 - 12 = 12. Shell distribution: K=2, L=8, M=2." },
        { num: 9, type: "Conceptual", q: "The composition of the nuclei of three atomic species is: X (18p, 19n), Y (17p, 18n), Z (17p, 20n). Explain scientific relationships between (1) Y and Z, (2) Z and X.", ans: "Mass numbers: AX = 18+19=37; AY = 17+18=35; AZ = 17+20=37. (1) Y and Z both have 17 protons but different mass numbers (35 vs 37), so they are 'isotopes'. (2) Z and X have different proton counts (17 vs 18) but share the same mass number (37), so they are 'isobars'." },
        { num: 10, type: "Conceptual", q: "Two different atoms have 11 protons each, but one has 12 neutrons and the other has 13 neutrons. State whether they belong to the same element.", ans: "Yes. Since both have 11 protons, their atomic numbers are identical (Z=11). Atomic number uniquely defines an element's chemical identity (both are isotopes of Sodium, Na)." }
      ]
    }
  },
  {
    pageNumber: 12,
    chapter: "Chapter 8: Journey Inside the Atom",
    title: "Exam-Style Solved Problems (Q11-Q20)",
    type: "problems",
    content: {
      problems: [
        { num: 11, type: "Numerical", q: "Calculate the average atomic mass of Bromine if it occurs naturally as a mixture of two isotopes: 79_Br (49.7%) and 81_Br (50.3%).", ans: "Average atomic mass = (79 * 49.7 / 100) + (81 * 50.3 / 100) = 39.263 + 40.743 = 80.006 u (approx. 80 u)." },
        { num: 12, type: "Numerical", q: "An element E has two isotopes: 16_E and 18_E. If the average atomic mass of the element is 16.2 u, compute the percentage abundance of both isotopes.", ans: "Let % of 16_E be x%, so % of 18_E is (100-x)%. Avg Mass = [16x + 18(100-x)] / 100 => 16.2 = (1800 - 2x) / 100 => 1620 = 1800 - 2x => 2x = 180 => x = 90%. Abundances: 16_E = 90%, 18_E = 10%." },
        { num: 13, type: "Conceptual", q: "An element X has a mass number of 35 and contains 18 neutrons. Calculate its valency and determine its relationship with a new atom formed if two extra neutrons are appended to its nucleus.", ans: "Z = A - n0 = 35 - 18 = 17 (Chlorine). Electronic config = 2, 8, 7. Valency = 8 - 7 = 1. Appending 2 neutrons changes mass number to 37 but leaves protons at 17. The two atoms share same atomic number but different mass numbers, so they are 'isotopes'." },
        { num: 14, type: "Conceptual", q: "Imagine all electrons of an atom (12 protons, 12 neutrons) are replaced with particles possessing same charge but 500 times heavier. Predict impact on: (1) Atomic Number, (2) Atomic Mass.", ans: "(1) Atomic number depends strictly on proton count, which remains 12, so 'no change'. (2) Original electron mass is negligible (approx 0). The 12 heavy particles have a combined relative mass of 12 * 500 * (1/2000 u) = 3 u. Atomic mass increases from 24 u to roughly 27 u." },
        { num: 15, type: "Conceptual", q: "Why don't electrons fly out of the atom while orbiting in their shells? What force retains them?", ans: "Electrons carry a negative electrical charge, while the central nucleus contains protons carrying a positive charge. Unlike charges exert an attractive force, so electrons are bound to the atom by the strong electrostatic force of attraction exerted by the nucleus." },
        { num: 16, type: "Numerical", q: "Calculate how many atoms must be stacked together to create a single sheet of textbook paper that is 0.1 mm thick, assuming the diameter of an atom is 10^-10 m.", ans: "Thickness of paper = 0.1 mm = 10^-4 m. Diameter of one atom = 10^-10 m. Number of atoms stacked = Thickness / Diameter = 10^-4 / 10^-10 = 10^6 (one million) atoms." },
        { num: 17, type: "Numerical", q: "An ion M2+ has 10 electrons and 12 neutrons. Determine the atomic number (Z) and mass number (A) of the neutral element M.", ans: "M2+ has lost 2 electrons. In neutral atom, electrons = 10 + 2 = 12. Since neutral, protons Z = 12. Mass number A = Z + neutrons = 12 + 12 = 24." },
        { num: 18, type: "Conceptual", q: "Predict the structural observation changes if the gold foil used in Rutherford's scattering experiment were made significantly thicker.", ans: "If the foil is thick, alpha particles will have to pass through multiple overlapping layers of gold atoms. This significantly increases the probability of hitting a positive nucleus, meaning fewer particles would pass straight through and a much higher percentage would undergo large deflections or bounce back." },
        { num: 19, type: "Conceptual", q: "What would happen if positive alpha particles were replaced with high-speed negative electrons in the gold foil scattering experiment?", ans: "Since electrons are negatively charged and the gold nucleus is positively charged, opposite charges attract. Instead of being repelled and scattered away when approaching the nucleus, the negative electrons would be pulled toward the positive nucleus." },
        { num: 20, type: "Conceptual", q: "Match historical observations to discoveries: (1) Cathode rays independent of gas. (2) 1 in 12000 bounce back. (3) Non-radiating fixed orbits.", ans: "(1) Matches discovery of electrons as fundamental components of all matter. (2) Matches existence of a dense, positive central nucleus. (3) Matches Bohr's stationary energy levels resolving atomic stability." }
      ]
    }
  },
  {
    pageNumber: 13,
    chapter: "Chapter 9: Atomic Foundations of Matter",
    title: "Key Concepts",
    type: "key-concepts",
    content: {
      intro: "This chapter covers the chemical laws of combination, molecules, ions, and chemical formula writing rules.",
      concepts: [
        {
          heading: "Law of Conservation of Mass",
          body: "Formulated by Antoine Lavoisier (1789). It states that matter can neither be created nor destroyed during a chemical reaction. The total mass of reactants is strictly equal to the total mass of products."
        },
        {
          heading: "Law of Constant Proportions",
          body: "Proposed by Joseph Proust. In a pure chemical compound, the constituent elements are always combined in a definite, fixed ratio by mass, completely independent of its source or preparation (e.g., pure H2O always has H:O mass ratio of 1:8)."
        },
        {
          heading: "Molecules and Chemical Bonds",
          body: "A molecule is the smallest electrically neutral entity of an element or compound capable of independent existence while retaining all chemical properties of that substance. The attractive force holding atoms together is a chemical bond."
        },
        {
          heading: "Covalent vs. Ionic Bonding",
          body: "Covalent bonding is formed by sharing valence electrons to complete stable octets (covalent compounds lack free ions and do not conduct electricity). Ionic bonding is formed by the complete transfer of electrons from a metal (forming positive cation) to a non-metal (forming negative anion) bound by electrostatic forces."
        },
        {
          heading: "Electrical Conductivity of Ionic Compounds",
          body: "Ionic compounds cannot conduct electricity in the solid state because their ions are locked in rigid lattice positions. However, they become excellent conductors in aqueous solution or molten state because the ions dissociate and gain freedom of movement."
        },
        {
          heading: "Polyatomic Ions",
          body: "A cluster of covalently bonded atoms that carry a net positive or negative charge and behave as a single structural unit during reactions (e.g., Ammonium NH4+, Carbonate CO3(2-), Hydroxide OH-)."
        }
      ]
    }
  },
  {
    pageNumber: 14,
    chapter: "Chapter 9: Atomic Foundations of Matter",
    title: "Valency Charts & Naming Rules",
    type: "table",
    content: {
      headers: ["Cation Name", "Formula / Valency", "Anion Name", "Formula / Valency"],
      rows: [
        { feature: "Sodium", plant: "Na+ / 1", animal: "Chloride", price: "Cl- / 1" },
        { feature: "Magnesium", plant: "Mg2+ / 2", animal: "Oxide", price: "O2- / 2" },
        { feature: "Aluminium", plant: "Al3+ / 3", animal: "Hydroxide (polyatomic)", price: "OH- / 1" },
        { feature: "Ammonium (polyatomic)", plant: "NH4+ / 1", animal: "Sulfate (polyatomic)", price: "SO4(2-) / 2" },
        { feature: "Iron (Ferric)", plant: "Fe3+ / 3", animal: "Carbonate (polyatomic)", price: "CO3(2-) / 2" },
        { feature: "Calcium", plant: "Ca2+ / 2", animal: "Nitrate (polyatomic)", price: "NO3- / 1" }
      ]
    }
  },
  {
    pageNumber: 15,
    chapter: "Chapter 9: Atomic Foundations of Matter",
    title: "Watch Out! (Common Traps)",
    type: "traps",
    content: {
      traps: [
        {
          topic: "The Escaping Gas Illusion",
          trap: "Assuming reactions involving gas evolution violate the Law of Conservation of Mass.",
          correction: "If a gas escapes from an open system, the recorded mass drops. The law is strictly preserved, but you must run the reaction in a 'closed' container or add the mass of the escaped gas to the final sum."
        },
        {
          topic: "Forgetting Polyatomic Brackets",
          trap: "Writing polyatomic subscripts without brackets (e.g., AlOH3 instead of Al(OH)3).",
          correction: "When criss-crossing valencies, if a polyatomic ion gets a subscript greater than 1, you must enclose the polyatomic unit in brackets. AlOH3 implies 1 Al, 1 O, and 3 H. Al(OH)3 correctly denotes three complete hydroxide units."
        },
        {
          topic: "Neglecting Subscript Simplification",
          trap: "Leaving empirical formulas unsimplified (e.g., Mg2O2 instead of MgO).",
          correction: "Subscripts in chemical formulas must represent the simplest whole-number ratio. Always divide the subscripts by their greatest common divisor (e.g., Mg2O2 simplifies down to MgO)."
        },
        {
          topic: "Molecular Mass vs. Formula Unit Mass",
          trap: "Confusing molecular mass with formula unit mass.",
          correction: "Their mathematical calculations are identical (summing atomic masses). However, conceptually, Molecular Mass applies uniquely to independent molecules (covalent H2O, CO2), while Formula Unit Mass is used for ionic crystal lattices (NaCl) where discrete molecules do not exist."
        }
      ]
    }
  },
  {
    pageNumber: 16,
    chapter: "Chapter 9: Atomic Foundations of Matter",
    title: "Exam-Style Solved Problems",
    type: "problems",
    content: {
      problems: [
        { num: 1, type: "Numerical", q: "Verify the Law of Conservation of Mass: 5.3 g of sodium carbonate reacts with 6.0 g of ethanoic acid to produce 8.2 g of sodium acetate, 0.9 g of water, and 2.2 g of carbon dioxide gas.", ans: "Total mass of reactants = 5.3 + 6.0 = 11.3 g. Total mass of products = 8.2 + 0.9 + 2.2 = 11.3 g. Since Reactant Mass = Product Mass, the law is fully verified." },
        { num: 2, type: "Numerical", q: "When 24 g of carbon completely reacts with 64 g of oxygen gas, 88 g of carbon dioxide is generated. If 6.0 g of carbon is burned completely in abundant oxygen, what mass of CO2 will be produced?", ans: "By Proust's law, carbon combines with oxygen in a fixed mass ratio. Ratio of Carbon to CO2 = 24 / 88 = 3/11. Mass of CO2 produced from 6g Carbon = 6.0 * (11 / 3) = 22 g." },
        { num: 3, type: "Numerical", q: "A pure compound contains 40% sulfur and 60% oxygen by mass. If a separate sample contains 30 g of sulfur, calculate the mass of oxygen required.", ans: "Mass ratio Oxygen/Sulfur = 60 / 40 = 1.5. For 30 g of sulfur, required mass of oxygen = 30 * 1.5 = 45 g." },
        { num: 4, type: "Numerical", q: "Carbon monoxide (CO) contains carbon and oxygen in a strict mass ratio of 3:4. Calculate the exact mass of oxygen needed to combine completely with 15 g of carbon.", ans: "Ratio Carbon / Oxygen = 3/4 => Oxygen = Carbon * (4/3). For 15 g of carbon, required oxygen = 15 * 4/3 = 20 g." },
        { num: 5, type: "Conceptual", q: "Student A prepares copper oxide by reacting 8 g copper with 2 g oxygen. Student B combines 24 g copper with 6 g oxygen. Do these findings justify the Law of Constant Proportions?", ans: "Student A ratio Cu:O = 8 / 2 = 4:1. Student B ratio Cu:O = 24 / 6 = 4:1. Both experimental setups yield an identical mass ratio of 4:1, perfectly validating Proust's law." },
        { num: 6, type: "Chemical Formula", q: "Write chemical formulas for: (1) Aluminium Nitrate, (2) Calcium Oxide, (3) Ammonium Sulfate, (4) Carbon Tetrachloride.", ans: "(1) Al3+ and NO3- => Al(NO3)3. (2) Ca2+ and O2- => Ca2O2 => CaO. (3) NH4+ and SO4(2-) => (NH4)2SO4. (4) C(valency 4) and Cl(valency 1) => CCl4." },
        { num: 7, type: "Conceptual", q: "Name covalent compounds using prefix rules: (1) NO2, (2) SF6, (3) PCl3.", ans: "(1) NO2: Nitrogen dioxide. (2) SF6: Sulfur hexafluoride. (3) PCl3: Phosphorus trichloride." },
        { num: 8, type: "Numerical", q: "Calculate the molecular mass of Nitric acid (HNO3). (Atomic masses: H=1 u, N=14 u, O=16 u).", ans: "Molecular Mass = (1 * H) + (1 * N) + (3 * O) = (1 * 1) + (1 * 14) + (3 * 16) = 1 + 14 + 48 = 63 u." },
        { num: 9, type: "Numerical", q: "Calculate the formula unit mass of Aluminium Sulfate Al2(SO4)3. (Atomic masses: Al=27, S=32, O=16).", ans: "Formula Unit Mass = (2 * Al) + 3 * [S + 4 * O] = (2 * 27) + 3 * [32 + (4 * 16)] = 54 + 3 * [32 + 64] = 54 + 3 * [96] = 54 + 288 = 342 u." },
        { num: 10, type: "Numerical", q: "Find the formula unit mass of Magnesium Hydroxide Mg(OH)2. (Atomic masses: Mg=24, O=16, H=1).", ans: "Formula Unit Mass = Mg + 2 * (O + H) = 24 + 2 * (16 + 1) = 24 + 2 * 17 = 24 + 34 = 58 u." }
      ]
    }
  }
];
