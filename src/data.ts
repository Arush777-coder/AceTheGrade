import { Subject, StudyKit, Testimonial, FAQItem } from './types';

// Class 9 Subjects (Customized subjects requested)
export const class9Subjects: Subject[] = [
  { name: 'Physics', category: 'Science', iconName: 'Atom', bgColor: 'bg-blue-50', textColor: 'text-blue-700', topicsCount: 24 },
  { name: 'Chemistry', category: 'Science', iconName: 'Beaker', bgColor: 'bg-teal-50', textColor: 'text-teal-700', topicsCount: 22 },
  { name: 'Biology', category: 'Science', iconName: 'Dna', bgColor: 'bg-emerald-50', textColor: 'text-emerald-700', topicsCount: 18 },
  { name: 'Sanskrit', category: 'Languages', iconName: 'BookMarked', bgColor: 'bg-orange-50', textColor: 'text-orange-700', topicsCount: 15 },
  { name: 'History', category: 'Social Science', iconName: 'Scroll', bgColor: 'bg-amber-50', textColor: 'text-amber-700', topicsCount: 20 },
  { name: 'Civics', category: 'Social Science', iconName: 'Quote', bgColor: 'bg-indigo-50', textColor: 'text-indigo-700', topicsCount: 14 },
  { name: 'Geography', category: 'Social Science', iconName: 'Compass', bgColor: 'bg-sky-50', textColor: 'text-sky-700', topicsCount: 17 },
  { name: 'Mathematics', category: 'Mathematics', iconName: 'Binary', bgColor: 'bg-blue-50', textColor: 'text-blue-800', topicsCount: 35 },
];

export const class10Subjects: string[] = [
  'Mathematics (Standard & Basic)',
  'Science (Physics, Chemistry, Biology)',
  'Social Science (History, Geography, Political Science, Economics)',
  'English Language & Literature',
  'Hindi (Course-A / Course-B)',
  'Sanskrit / Computer Applications'
];

export const class11Subjects: string[] = [
  'PCM Group: Physics, Chemistry, Mathematics, English',
  'PCB Group: Physics, Chemistry, Biology, English',
  'Commerce Group: Accountancy, Business Studies, Economics, English',
  'Humanities Group: History, Political Science, Geography, Sociology',
  'Electives: Computer Science, Physical Education, Applied Math'
];

export const class12Subjects: string[] = [
  'Physics, Chemistry, Mathematics (Board + JEE Core Sheets)',
  'Physics, Chemistry, Biology (Board + NEET Core Sheets)',
  'Accountancy, Business Studies, Economics (Board Blueprint Guide)',
  'History, Political Science, Sociology (Board Summary Cards)',
  'English Core & Advanced Grammar Prep Kit'
];

// Study kits across classes (Classes 9, 10, 11, and 12)
const baseStudyKits: StudyKit[] = [
  // Class 9th Study Kits (Exact 4 kits styled in absolute detail matching screenshot prices and formats)
  {
    id: 'c9-science',
    name: 'Ultimate Science Kit (Physics, Chemistry and Bio Included)',
    subtitle: 'Class 9th CBSE/NCERT Foundation',
    description: 'Physics, Chemistry and Biology included',
    price: 349,
    originalPrice: 599,
    badge: 'Best Seller',
    features: [
      'Visual Flowcharts for Chemical Reactions',
      'Physics Derivation Formula Sheet Included',
      'Highly Detailed Hand-drawn Biology Diagrams',
      '150+ Most Asked Question Bank with Perfect Answers',
    ],
    subjectsIncluded: ['Physics', 'Chemistry', 'Biology'],
    classValue: '9',
  },
  {
    id: 'c9-english',
    name: 'Ultimate English Kit (English Literature and English Grammar Included)',
    subtitle: 'Class 9th CBSE/NCERT Topper Guides',
    description: 'English Literature and English Grammar included',
    price: 299,
    originalPrice: 499,
    features: [
      'Chapter-wise Character Sketch Matrices',
      'Crucial Poem Theme Guides & Literary Devices',
      'Active-Passive & Tense Cheat Sheet Rules',
      'Format Blueprints for Letter Writing and Essays',
    ],
    subjectsIncluded: ['English Literature', 'English Grammar'],
    classValue: '9',
  },
  {
    id: 'c9-hindi',
    name: 'Ultimate Hindi Kit (Hindi Literature and Hindi Grammar Included)',
    subtitle: 'Class 9th Complete Board Companion',
    description: 'Hindi Literature and Hindi Grammar included',
    price: 299,
    originalPrice: 499,
    features: [
      'Sparsh & Sanchayan (Kshitij/Kritika) Detailed Summaries',
      'Sandhi & Samas Rules with Quick Short Tricks',
      'Muhavre & Lokoktiyan high-scoring lists',
      'Anuched & Patra Lekhan formal layouts',
    ],
    subjectsIncluded: ['Hindi Literature', 'Hindi Grammar'],
    classValue: '9',
  },
  {
    id: 'c9-social',
    name: 'Ultimate Social Science Kit (History, Civics and Geography Included)',
    subtitle: 'Class 9th Quick-Recall Maps',
    description: 'History, Civics and Geography included',
    price: 499,
    originalPrice: 799,
    badge: 'Academics Choice',
    features: [
      'Timeline Chronology Charts of French/Russian Revolutions',
      'Interactive Maps pointing to Key Geography sites',
      'Brief 3-Point & 5-Point Civil/Constitutional answers',
      'Key vocabulary (demographics, democracy, drainage)',
    ],
    subjectsIncluded: ['History', 'Civics', 'Geography'],
    classValue: '9',
  },

  // Class 10th Study Kits (Exact 4 kits matching screenshot prices and formats)
  {
    id: 'c10-science',
    name: 'Ultimate Science Kit (Physics, Chemistry and Bio Included)',
    subtitle: 'Class 10th CBSE/NCERT Foundation',
    description: 'Physics, Chemistry and Biology included',
    price: 649,
    originalPrice: 1099,
    badge: 'Best Seller',
    features: [
      'Visual Flowcharts for Chemical Reactions',
      'Physics Lens/Mirror, Electricity & Magnetism Maps',
      'Biology Life Processes, Control & Reproduction flowcharts',
      'Examiner Scoring Notes and Trend Analysis'
    ],
    subjectsIncluded: ['Physics', 'Chemistry', 'Biology'],
    classValue: '10',
  },
  {
    id: 'c10-english',
    name: 'Ultimate English Kit (English Literature and English Grammar Included)',
    subtitle: 'Class 10th CBSE/NCERT Topper Guides',
    description: 'English Literature and English Grammar included',
    price: 399,
    originalPrice: 699,
    features: [
      'Chapter-wise Character Sketch Matrices',
      'Crucial Poem Theme Guides & Literary Devices',
      'Integrated Grammar Quick revision cards & patterns',
      'Standard writing layouts and board formats'
    ],
    subjectsIncluded: ['English Literature', 'English Grammar'],
    classValue: '10',
  },
  {
    id: 'c10-hindi',
    name: 'Ultimate Hindi Kit (Hindi Literature and Hindi Grammar Included)',
    subtitle: 'Class 10th Complete Board Companion',
    description: 'Hindi Literature and Hindi Grammar included',
    price: 399,
    originalPrice: 699,
    features: [
      'Sparsh & Sanchayan (Kshitij/Kritika) Detailed Summaries',
      'Sandhi & Samas Rules with Quick Short Tricks',
      'Formal/Informal Letter and Essay format guides',
      'Sure-shot board scoring keywords lists'
    ],
    subjectsIncluded: ['Hindi Literature', 'Hindi Grammar'],
    classValue: '10',
  },
  {
    id: 'c10-social',
    name: 'Ultimate Social Science Kit (History, Civics and Geography Included)',
    subtitle: 'Class 10th Quick-Recall Maps',
    description: 'History, Civics and Geography included',
    price: 699,
    originalPrice: 1199,
    badge: 'Academics Choice',
    features: [
      'Timeline Chronology Charts of Nationalist Movements',
      'Interactive Maps pointing to Key Geography sites',
      'Brief 3-Point & 5-Point Civil/Constitutional answers',
      'Key vocabulary (demographics, democracy, drainage)'
    ],
    subjectsIncluded: ['History', 'Civics', 'Geography'],
    classValue: '10',
  },

  // Class 11th Study Kits
  {
    id: 'c11-pcb',
    name: 'Science (PCB) Stream Cheat Sheet',
    subtitle: 'Biology, Physics & Chemistry Core',
    description: 'Complete visual digital cheat sheets covering advanced Biology cell structures, organic chemistry basics, and physics derivation maps.',
    price: 799,
    originalPrice: 1299,
    badge: 'Popular',
    features: [
      'Interactive Human Physiology & Genetics maps',
      'Advanced Organic and Inorganic Quick Cheats',
      'NCERT High-yielding exemplar questions with clear solvers'
    ],
    subjectsIncluded: ['Biology', 'Physics', 'Chemistry'],
    classValue: '11',
  },
  {
    id: 'c11-pcm',
    name: 'Mathematics (PCM) Stream Cheat Sheet',
    subtitle: 'Physics, Chemistry & Mathematics Prep',
    description: 'Supercharge your PCM scores with detailed Trigonometric functions, Calculus foundation maps, physics formulations, and organic mechanism roadmaps.',
    price: 999,
    originalPrice: 1599,
    badge: 'Recommended',
    features: [
      'Calculus & Trigonometric master formula cards',
      'High priority mechanics & thermodynamics cheat sheets',
      'Step-by-step toppers answer outlines for board preparation'
    ],
    subjectsIncluded: ['Physics', 'Chemistry', 'Mathematics'],
    classValue: '11',
  },
  {
    id: 'c11-commerce',
    name: 'Commerce Stream Cheat Sheet',
    subtitle: 'Accountancy, Economics & Business Studies',
    description: 'Master Double-entry bookkeeping rules, ledger formatting, microeconomic schedules, visual demand charts, and quick recall management concepts.',
    price: 599,
    originalPrice: 999,
    features: [
      'Ledger, Cash Book & Trial Balance formats',
      'Microeconomics supply-demand graphs visual sheets',
      'Business studies quick abbreviations lists'
    ],
    subjectsIncluded: ['Accountancy', 'Economics', 'Business Studies'],
    classValue: '11',
  },
  {
    id: 'c11-humanities',
    name: 'Humanities (Arts) Stream Cheat Sheet',
    subtitle: 'History, Political Science & Sociology',
    description: 'Chronology timelines of key global revolutions, constitution summary grids, sociological concepts, and 3-point/5-point board style toppers outline format.',
    price: 499,
    originalPrice: 899,
    features: [
      'Simplified chronological tables of key historic eras',
      'Constitution and Political theory summaries',
      'High scoring keywords maps for descriptive questions'
    ],
    subjectsIncluded: ['History', 'Political Science', 'Sociology'],
    classValue: '11',
  },
  {
    id: 'c11-pcmb',
    name: 'Science and Mathematics (PCMB) Stream Cheat Sheet',
    subtitle: 'Full PCMB Integrated Support',
    description: 'The definitive visual guide for students studying integrated Science and Mathematics. Includes Physics, Chemistry, Mathematics, and Biology.',
    price: 1499,
    originalPrice: 2499,
    badge: 'Ultimate Bundle',
    features: [
      'Integrates entire PCM + Biology core revision cards',
      'Perfect formulas & pathways maps bundle',
      'Includes board exam blueprint + bonus practice specimens'
    ],
    subjectsIncluded: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    classValue: '11',
  },

  // Class 12th Study Kits (Matching Class 11's 5 major streams)
  {
    id: 'c12-pcb',
    name: 'Science (PCB) Stream Cheat Sheet',
    subtitle: 'Biology, Physics & Chemistry Mastery',
    description: 'Complete visual digital cheat sheets covering advanced 12th Biology genetics, organic chemistry pathways, and physics derivation maps.',
    price: 549,
    originalPrice: 999,
    badge: 'Popular',
    features: [
      'Interactive Genetics, Evolution & Ecology maps',
      'Advanced Organic Named Reactions & Inorganic Cheats',
      'CBSE/ISC High-yielding exemplar questions with clear solvers'
    ],
    subjectsIncluded: ['Biology', 'Physics', 'Chemistry'],
    classValue: '12',
  },
  {
    id: 'c12-pcm',
    name: 'Mathematics (PCM) Stream Cheat Sheet',
    subtitle: 'Physics, Chemistry & Mathematics Focus',
    description: 'Supercharge your PCM scores with detailed 12th Calculus integration maps, Vector algebra notes, physics formulations, and organic mechanism roadmaps.',
    price: 699,
    originalPrice: 1299,
    badge: 'Recommended',
    features: [
      'Calculus (Integrals & Derivatives) master formula cards',
      'High priority Electromagnetism & Optics cheat sheets',
      'Step-by-step toppers answer outlines for board preparation'
    ],
    subjectsIncluded: ['Physics', 'Chemistry', 'Mathematics'],
    classValue: '12',
  },
  {
    id: 'c12-commerce',
    name: 'Commerce Stream Cheat Sheet',
    subtitle: 'Accountancy, Economics & Business Studies',
    description: 'Master partnership accounts, company share formatting, macroeconomics schedules, visual cash flow charts, and quick recall management principles.',
    price: 649,
    originalPrice: 1099,
    features: [
      'Partnership & Share Accounting Journal Shortcuts',
      'National Income & Macroeconomics supply-demand graphs',
      'Business studies case-study structured solver cards'
    ],
    subjectsIncluded: ['Accountancy', 'Economics', 'Business Studies'],
    classValue: '12',
  },
  {
    id: 'c12-humanities',
    name: 'Humanities (Arts) Stream Cheat Sheet',
    subtitle: 'History, Political Science & Sociology',
    description: 'Chronology timelines of post-independence India, global cold war politics summary grids, sociological concepts, and 3-point/5-point board style toppers outline format.',
    price: 549,
    originalPrice: 899,
    features: [
      'Simplified chronological tables of modern history & world wars',
      'Indian Polity & post-independence policy summaries',
      'High scoring keywords maps for descriptive questions'
    ],
    subjectsIncluded: ['History', 'Political Science', 'Sociology'],
    classValue: '12',
  },
  {
    id: 'c12-pcmb',
    name: 'Science and Mathematics (PCMB) Stream Cheat Sheet',
    subtitle: 'Full PCMB Integrated Support',
    description: 'The definitive visual guide for students studying integrated Science and Mathematics in Class 12th. Includes Physics, Chemistry, Mathematics, and Biology.',
    price: 899,
    originalPrice: 1599,
    badge: 'Ultimate Bundle',
    features: [
      'Integrates entire 12th PCM + Biology core revision cards',
      'Perfect formulas, mechanisms & pathways maps bundle',
      'Includes board exam blueprint + bonus practice specimens'
    ],
    subjectsIncluded: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    classValue: '12',
  },
];

const generateSubjectKits = (classNum: '9' | '10'): StudyKit[] => {
  const class9Prices: Record<string, number> = {
    'Physics': 149,
    'Chemistry': 149,
    'Biology': 149,
    'Mathematics': 199,
    'Sanskrit': 199,
    'English Literature': 149,
    'English Grammar': 199,
    'Hindi Literature': 149,
    'Hindi Grammar': 199,
    'History': 199,
    'Civics': 199,
    'Geography': 199,
  };

  const class10Prices: Record<string, number> = {
    'Physics': 249,
    'Chemistry': 249,
    'Biology': 249,
    'Mathematics': 299,
    'Sanskrit': 299,
    'English Literature': 199,
    'English Grammar': 249,
    'Hindi Literature': 199,
    'Hindi Grammar': 249,
    'History': 249,
    'Civics': 249,
    'Geography': 249,
  };

  const class9OriginalPrices: Record<string, number> = {
    'Physics': 249,
    'Chemistry': 249,
    'Biology': 249,
    'Mathematics': 299,
    'Sanskrit': 299,
    'English Literature': 249,
    'English Grammar': 299,
    'Hindi Literature': 249,
    'Hindi Grammar': 299,
    'History': 299,
    'Civics': 299,
    'Geography': 299,
  };

  const class10OriginalPrices: Record<string, number> = {
    'Physics': 399,
    'Chemistry': 399,
    'Biology': 399,
    'Mathematics': 499,
    'Sanskrit': 499,
    'English Literature': 349,
    'English Grammar': 399,
    'Hindi Literature': 349,
    'Hindi Grammar': 399,
    'History': 399,
    'Civics': 399,
    'Geography': 399,
  };

  const prices = classNum === '9' ? class9Prices : class10Prices;
  const originalPrices = classNum === '9' ? class9OriginalPrices : class10OriginalPrices;

  return class9Subjects.map((subject) => {
    const price = prices[subject.name] || (classNum === '9' ? 149 : 249);
    const originalPrice = originalPrices[subject.name] || (classNum === '9' ? 249 : 399);
    
    let features: string[] = [];
    if (subject.name === 'Physics') {
      features = [
        `High-yield formulas for light, electricity, and motion derivations`,
        `Step-by-step circuit and ray diagram visual templates`,
        `Most repeated exam derivations & numerical practice guides`
      ];
    } else if (subject.name === 'Chemistry') {
      features = [
        `Valency charts and chemical equation balancing tips`,
        `Reaction mechanisms & Periodic classification grids`,
        `Acid-Base properties & salt preparation cheat sheets`
      ];
    } else if (subject.name === 'Biology') {
      features = [
        `Hand-drawn cellular and anatomical diagrams with precise labels`,
        `Life processes flowcharts and plant-anatomy tables`,
        `Examiner-preferred keywords for scoring maximum marks`
      ];
    } else if (subject.name === 'Mathematics') {
      features = [
        `All crucial formulas, theorems & algebraic identities`,
        `Trigonometry & Mensuration step-saving calculation methods`,
        `Exemplar problems & CBSE examiner marking-scheme guides`
      ];
    } else if (subject.name === 'Sanskrit') {
      features = [
        `Sandhi rules, Samas shortcuts and shabd-roop tables`,
        `Chapter-wise Shloka translation and word meanings`,
        `Board-format paragraph and letter writing layouts`
      ];
    } else if (subject.name === 'History') {
      features = [
        `Chronological visual timelines of major revolutions & movements`,
        `Key historic dates, events & figures summary cards`,
        `Score-maximizing 3-point and 5-point long answer templates`
      ];
    } else if (subject.name === 'Civics') {
      features = [
        `Key definitions of Constitution & democratic structures`,
        `Quick-recall institutional powers & rights summary charts`,
        `Syllabus-focused short-notes with topper-style answers`
      ];
    } else if (subject.name === 'Geography') {
      features = [
        `High-resolution map pointing and marking master guides`,
        `Drainage rivers, soil types & resources distribution tables`,
        `Visual climatology & mineral distribution summaries`
      ];
    } else if (subject.name === 'English Literature') {
      features = [
        `Chapter-wise character sketch and core theme analysis sheets`,
        `Poetic devices, rhymes & explanation templates for poetry`,
        `Examiner scoring patterns for analytical literature answers`
      ];
    } else if (subject.name === 'English Grammar') {
      features = [
        `Tense, passive voice & direct speech formula rules`,
        `Common error identifiers & editing/omission master tricks`,
        `Formal letters, analytical paragraphs & essay layouts`
      ];
    } else if (subject.name === 'Hindi Literature') {
      features = [
        `Kshitij, Kritika, Sparsh, or Sanchayan summaries`,
        `Character analyses and chapter-wise deep-dive theme guides`,
        `High-yield critical vocabulary list for CBSE/NCERT answer sheets`
      ];
    } else if (subject.name === 'Hindi Grammar') {
      features = [
        `Sandhi, Samas, Alankar, and Vakya-bhed shortcut formulas`,
        `High-recall list of Muhavre, Lokoktiyan & Paryayvachi`,
        `Formal Patra, Anuched, and Vigyapan writing layouts`
      ];
    } else {
      features = [
        `Syllabus formula sheets & revision shortcut tables`,
        `Practice question bank with step-by-step solutions`,
        `Examiner marking-scheme guidelines & topper tips`
      ];
    }

    let customDescription = `Full access to Class ${classNum}th ${subject.name} digital formula maps, fast recall cheat sheets, and board focused study support kits.`;
    if (subject.name === 'Physics') {
      customDescription = `Master Class ${classNum}th Physics with interactive ray diagrams, clear derivation steps for equations of motion/electricity, and high-scoring formula maps.`;
    } else if (subject.name === 'Chemistry') {
      customDescription = `Step-by-step chemical equations, balancing guidelines, periodic classification maps, and structural representation of organic compounds for Class ${classNum}th.`;
    } else if (subject.name === 'Biology') {
      customDescription = `Beautiful, hand-drawn anatomical diagrams of plant/animal cells, life processes flowcharts, and high-yield scoring keywords for Class ${classNum}th Biology.`;
    } else if (subject.name === 'Sanskrit') {
      customDescription = `All-in-one Sanskrit grammar handbook with sandhi rules, shloka meanings, word-by-word translations, and board-standard writing formats for Class ${classNum}th.`;
    } else if (subject.name === 'History') {
      customDescription = `Interactive chronological timelines of major historic movements, French & Russian revolutions, and point-wise answers to master Class ${classNum}th History.`;
    } else if (subject.name === 'Civics') {
      customDescription = `Constitutional frameworks, democratic principles, institutional functions, and brief 3-point/5-point score-maximizing templates for Class ${classNum}th Civics.`;
    } else if (subject.name === 'Geography') {
      customDescription = `High-resolution map work guides, drainage system paths, resource maps, and physical features of India explained visually for Class ${classNum}th Geography.`;
    } else if (subject.name === 'English Literature') {
      customDescription = `Chapter-wise character matrices, theme breakdowns, critical poetic devices, and detailed topper-style answer outlines for Class ${classNum}th English Literature.`;
    } else if (subject.name === 'English Grammar') {
      customDescription = `Active-passive voice conversion cheats, tense matrices, direct-indirect speech formulas, and highly-scoring letter/essay templates for Class ${classNum}th English Grammar.`;
    } else if (subject.name === 'Hindi Literature') {
      customDescription = `Comprehensive summary sheets of Kshitij/Sparsh chapters, key character sketches, and examiner-focused keywords for scoring perfect marks in Class ${classNum}th Hindi Literature.`;
    } else if (subject.name === 'Hindi Grammar') {
      customDescription = `Simplistic sandhi, samas, and muhavre short-tricks with quick revision charts and correct writing formats for Class ${classNum}th Hindi Grammar.`;
    } else if (subject.name === 'Mathematics') {
      customDescription = `All critical formulas, algebraic identities, trigonometric shortcuts, and geometry theorems condensed into a single-page fast-recall grid for Class ${classNum}th Mathematics.`;
    }

    return {
      id: `subject-${classNum}-${subject.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: `${subject.name} Cheat Sheet`,
      subtitle: `Class ${classNum}th Subject Guide`,
      description: customDescription,
      price,
      originalPrice,
      badge: subject.topicsCount > 25 ? 'Mega Content' : undefined,
      features,
      subjectsIncluded: [subject.name],
      classValue: classNum
    };
  });
};

const ALLOWED_KIT_IDS = new Set([
  'subject-9-physics',
  'subject-9-chemistry',
  'subject-9-biology',
  'subject-9-sanskrit',
  'c9-science',
  'c9-english'
]);

const rawKits: StudyKit[] = [
  ...baseStudyKits,
  ...generateSubjectKits('9'),
  ...generateSubjectKits('10'),
  {
    id: 'custom-kit-9',
    name: 'Customized Study Kit',
    subtitle: 'Class 9th Custom Package',
    description: 'A fully customized digital kit created specifically for your selected textbooks, syllabus requirements, and specific weak topics.',
    price: 999,
    originalPrice: 1999,
    badge: '100% Tailored',
    features: [
      'Tailored to your exact school textbook chapters',
      'Custom-drawn formula maps and chapter summaries',
      'Examiner-approved custom answer scoring structures'
    ],
    subjectsIncluded: ['Customized'],
    classValue: '9'
  },
  {
    id: 'custom-kit-10',
    name: 'Customized Study Kit',
    subtitle: 'Class 10th Custom Package',
    description: 'A fully customized digital kit created specifically for your selected textbooks, syllabus requirements, and specific weak topics.',
    price: 999,
    originalPrice: 1999,
    badge: '100% Tailored',
    features: [
      'Tailored to your exact school textbook chapters',
      'Custom-drawn formula maps and chapter summaries',
      'Examiner-approved custom answer scoring structures'
    ],
    subjectsIncluded: ['Customized'],
    classValue: '10'
  },
  {
    id: 'custom-kit-11',
    name: 'Customized Study Kit',
    subtitle: 'Class 11th Custom Package',
    description: 'A fully customized digital kit created specifically for your selected textbooks, syllabus requirements, and specific weak topics.',
    price: 999,
    originalPrice: 1999,
    badge: '100% Tailored',
    features: [
      'Tailored to your exact school textbook chapters',
      'Custom-drawn formula maps and chapter summaries',
      'Examiner-approved custom answer scoring structures'
    ],
    subjectsIncluded: ['Customized'],
    classValue: '11'
  },
  {
    id: 'custom-kit-12',
    name: 'Customized Study Kit',
    subtitle: 'Class 12th Custom Package',
    description: 'A fully customized digital kit created specifically for your selected textbooks, syllabus requirements, and specific weak topics.',
    price: 999,
    originalPrice: 1999,
    badge: '100% Tailored',
    features: [
      'Tailored to your exact school textbook chapters',
      'Custom-drawn formula maps and chapter summaries',
      'Examiner-approved custom answer scoring structures'
    ],
    subjectsIncluded: ['Customized'],
    classValue: '12'
  }
];

export const studyKits: StudyKit[] = rawKits.map(kit => ({
  ...kit,
  isComingSoon: !ALLOWED_KIT_IDS.has(kit.id)
}));

// Testimonials of Indian Board Exam Toppers
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Ananya Sharma',
    role: 'Class 10 CBSE Topper',
    score: '98.6%',
    board: 'CBSE Board',
    location: 'New Delhi',
    text: 'The Ultimate Science & Social Science Kit for Class 9 laid such an amazing foundation. For my Class 10 boards, I relied entirely on AceTheGrade guides. The chemistry mechanisms, timeline charts, and maths formula sheets saved me hours of notes revision. Highly recommended for every board aspirant!',
  },
  {
    id: 't2',
    name: 'Rohan Deshmukh',
    role: 'Class 12 PCM Topper',
    score: '97.4%',
    board: 'HSC Maharashtra Board',
    location: 'Mumbai',
    text: 'AceTheGrade cheat sheets are genuinely designed by academic experts. The organic chemistry Named Reactions chart and Physics derivations cheats were in front of my study table. They helped me turn my boring textbooks into highly structured, actionable maps.',
  },
  {
    id: 't3',
    name: 'Pranav K. Nair',
    role: 'Class 9 CBSE Student',
    score: 'School Rank 1',
    board: 'CBSE Board',
    location: 'Bengaluru',
    text: 'The Sanskrit grammar, Hindi kshitij summary cards, and English Literature character sketch matrices from AceTheGrade are absolute life-savers. My terminal exam scores jumped from 82% to 95%. Ordering the Ultimate Kit was the best decision my parents made!',
  },
  {
    id: 't4',
    name: 'Meenakshi Iyer',
    role: 'Mother of Class 10 Student',
    score: '96.2%',
    board: 'CBSE Parent',
    location: 'Chennai',
    text: 'As a working parent, keeping track of my child’s math and science formulas was tough. AceTheGrade study kits simplified the revision completely. It represents genuine value for money. The online payment and swift email delivery made accessing the material seamless.',
  }
];

// High-Trus FAQs
export const faqs: FAQItem[] = [
  {
    id: 'faq1',
    question: 'What exactly is included in an AceTheGrade Study Kit?',
    answer: 'Each kit contains beautifully formatted revision cheat sheets, formula roadmaps, visual diagrams (like chemical reactions and biology flowcharts), NCERT key concepts simplified, previous 10-year board paper key solvers, and character analyses for literature subjects. All summaries are available as premium, beautifully formatted digital PDF documents sent directly to your email.',
  },
  {
    id: 'faq2',
    question: 'How do I receive the study kits, and are payments secure?',
    answer: 'Once your secure payment is processed and verified, the high-resolution study kit PDFs are delivered directly to your registered Email. No waiting for physical couriers or shipments!',
  },
  {
    id: 'faq3',
    question: 'Are these materials compliant with the CBSE / NCERT curriculum?',
    answer: 'Absolutely. Our expert authors design the curriculum cards specifically to map with the NCERT and CBSE guidelines. When you initiate the checkout order, you receive the exact digital kit customized for the latest CBSE syllabus and marking scheme standards.',
  },
  {
    id: 'faq4',
    question: 'Who writes and reviews the AceTheGrade cheat sheets?',
    answer: 'The content is drafted by highly qualified educators, containing senior board school teachers and curriculum experts with over 15+ years of training. Every sheet undergoes dual review by past board toppers securing 98%+ marks to guarantee clarity and recall accuracy.',
  },
  {
    id: 'faq5',
    question: 'Can I get free specimen samples before making an order?',
    answer: 'Yes! We encourage high transparency. You can click on the "Download Free Sample PDF" button, enter your student email, and immediately access specimen pages of our Class 9-12 cheat sheets to test the high premium quality.',
  }
];

export const statesOfIndia = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
  'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
  'Uttarakhand', 'West Bengal'
];
