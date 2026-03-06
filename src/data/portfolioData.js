// ─── PORTFOLIO DATA ───────────────────────────────────────────
// Edit this file to update all content across the portfolio.

export const meta = {
  name:     'Akshata Mhase',
  title:    'Software Developer',
  location: 'Pune, Maharashtra, India',
  email:    'akshatasmhase123@gmail.com',
  phone:    '+91 9175363412',
  summary:  `An entry-level software engineer from Pune with a passion for building
meaningful digital experiences. Skilled in Java, Spring Boot, and modern web
technologies — driven by curiosity, fuelled by creativity, and committed to
turning complex ideas into elegant, reliable solutions.`,
  links: {
    github:     'https://github.com/akshata1805',
    linkedin:   'https://www.linkedin.com/in/akshata-mhase-72a97621a/',
    leetcode:   'https://leetcode.com/u/Akshata1805/',
    hackerrank: 'https://www.hackerrank.com/profile/akshatasmhase123',
  },
  resume: '/Akshata_Sopan_Mhase.pdf',  // place resume in /public folder
}

export const stats = [
  { n: '8.08', l: 'CGPA' },
  { n: '4',    l: 'Projects Built' },
  { n: '1st',  l: 'PRECCON-2025' },
  { n: '∞',   l: 'Curiosity' },
]

export const education = [
  {
    degree:  'B.E. in Computer Science and Design',
    school:  'DR. VITHALRAO VIKHE PATIL COLLEGE OF ENGINEERING, AHILYANAGAR',
    period:  '2021 – 2025',
    grade:   '8.08 CGPA',
  },
  {
    degree:  'HSC — Higher Secondary Certificate',
    school:  'RAMRAO CHAVAN HIGHSCHOOL, AHILYANAGAR, MAHARASHTRA',
    period:  '2019 – 2021',
    grade:   '86.67%',
  },
  {
    degree:  'SSC — Secondary School Certificate',
    school:  'RAMRAO CHAVAN HIGHSCHOOL, AHILYANAGAR, MAHARASHTRA',
    period:  '2018 – 2019',
    grade:   '85%',
  },
]

export const skillGroups = [
  {
    title: '// Languages',
    items: [
      { name: 'Java',       pct: 92 },
      { name: 'C / C++',    pct: 78 },
      { name: 'Python',     pct: 62 },
      { name: 'JavaScript', pct: 75 },
    ],
  },
  {
    title: '// Frameworks',
    items: [
      { name: 'Spring Boot', pct: 88 },
      { name: 'REST APIs',   pct: 85 },
      { name: 'ReactJS',     pct: 70 },
      { name: 'Hibernate',   pct: 75 },
    ],
  },
  {
    title: '// Web & Database',
    items: [
      { name: 'HTML / CSS', pct: 90 },
      { name: 'Bootstrap',  pct: 88 },
      { name: 'MySQL',      pct: 84 },
      { name: 'JDBC',       pct: 80 },
    ],
  },
  {
    title: '// Tools & Platforms',
    items: [
      { name: 'Eclipse',  pct: 85 },
      { name: 'VS Code',  pct: 88 },
      { name: 'Git',      pct: 72 },
      { name: 'OpenKM',   pct: 65 },
    ],
  },
]

export const projects = [
  {
    num:    '01 ——',
    name:   'CivicConnect',
    desc:   'Municipal Corporation Management System — web-based platform managing municipal services and citizen requests with user authentication and RESTful APIs.',
    tags:   ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
    link:   'https://github.com/anushkakawale/CivicConnectFrontend',
    glow:   '#7b2fff',
  },
  {
    num:    '02 ——',
    name:   'SecureMe 🛡️',
    desc:   'AI Application for Women\'s Safety — real-time support with location tracking, emergency alerts, and voice activation focusing on system reliability.',
    tags:   ['AI/ML', 'Mobile', 'Location API'],
    link:   null,
    glow:   '#ff6eb4',
  },
  {
    num:    '03 ——',
    name:   'Giftopia 🎁',
    desc:   'Responsive gift discovery and shopping website — explore and find perfect gifts for every occasion with modern UI and intuitive navigation.',
    tags:   ['HTML', 'CSS', 'Bootstrap'],
    link:   'https://github.com/akshata1805/Giftopia_Bootstrap_Responsive',
    glow:   '#ffd280',
  },
  {
    num:    '04 ——',
    name:   'Ticket Travels ✈️',
    desc:   'Responsive travel and tourism website — showcasing destinations, itineraries, and ticket booking UI with mobile-first design.',
    tags:   ['HTML', 'CSS', 'Bootstrap', 'JS'],
    link:   'https://github.com/akshata1805/Ticket-Tales-Responsive',
    glow:   '#00d4ff',
  },
]

export const certifications = [
  {
    name:  'Full Stack Java Development',
    org:   'ITPRENEUR INSTITUTE, PUNE · AICTE · NSDC',
    date:  'Feb 23, 2026',
    id:    'CEIT4748',
  },
  {
    name:  'B.E. Computer Science & Design',
    org:   'DR. VITHALRAO VIKHE PATIL COLLEGE OF ENGINEERING',
    date:  '2021 – 2025',
    id:    'CGPA: 8.08',
  },
]

export const achievements = [
  { icon: '🏆', title: '1st Rank — PRECCON-2025',    desc: 'National-level paper presentation competition winner, showcasing research and communication excellence.' },
  { icon: '🌐', title: 'Virtual Vista 2.0 Finalist', desc: 'Selected for the final round by IEEE Computer Society, GNITC.' },
  { icon: '🎓', title: 'VidyaVikas Scholarship',     desc: 'Awarded by FUEL NGO (powered by Eaton) for outstanding academic excellence.' },
]

export const hobbies = [
  { icon: '📚', name: 'Reading',       modal: 'books'    },
  { icon: '✈️', name: 'Travelling',    modal: null       },
  { icon: '🌿', name: 'Gardening',     modal: null       },
  { icon: '🎵', name: 'Music',         modal: null       },
  { icon: '💃', name: 'Dancing',       modal: null       },
  { icon: '🎨', name: 'Drawing',       modal: 'drawings' },
  { icon: '🖼️', name: 'Arts & Crafts', modal: null       },
]

export const books = [
  { title: 'Atomic Habits',            author: 'James Clear'                          },
  { title: 'The Alchemist',            author: 'Paulo Coelho'                         },
  { title: 'Rich Dad Poor Dad',        author: 'Robert T. Kiyosaki'                   },
  { title: 'Wings of Fire',            author: 'A.P.J. Abdul Kalam'                   },
  { title: 'Deep Work',                author: 'Cal Newport'                          },
  { title: 'The Pragmatic Programmer', author: 'Andrew Hunt & David Thomas'           },
  { title: 'Ikigai',                   author: 'Héctor García & Francesc Miralles'    },
  { title: 'You Can Win',              author: 'Shiv Khera'                           },
]

export const drawings = [
  { icon: '🌸', label: 'Floral Watercolour' },
  { icon: '🌄', label: 'Landscape Sketch'   },
  { icon: '🦋', label: 'Butterfly Study'    },
  { icon: '🏠', label: 'Architecture Sketch'},
  { icon: '🌿', label: 'Botanical Art'      },
  { icon: '✏️', label: 'Portrait Drawing'  },
]

export const languages = [
  { flag: '🇮🇳', name: 'Marathi' },
  { flag: '🇮🇳', name: 'Hindi'   },
  { flag: '🇬🇧', name: 'English' },
  { flag: '🇯🇵', name: 'Japanese'},
]
