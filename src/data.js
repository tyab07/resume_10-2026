// ------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update the site.
// ------------------------------------------------------------------

export const profile = {
  name: 'Muhammad Tayyab',
  role: 'Software Engineer',
  headline:
    'I build AI-powered features and the backend services behind them — from LLM workflows and retrieval to production APIs.',
  sub: 'BS Software Engineering @ FAST-NUCES · Dean’s List · Teaching Assistant. Open to software and AI internships.',
  email: 'tyab.mujahid@gmail.com',
  phone: '+92 307 8453510',
  phoneRaw: '923078453510',
  location: 'Faisalabad, Pakistan',
  github: 'https://github.com/tyab07',
  linkedin: 'https://www.linkedin.com/in/muhammad-tayyab-76b9923b1',
  // Replace with the direct URL of your LinkedIn post about the AI HRMS project.
  hrmsPost: 'https://www.linkedin.com/in/muhammad-tayyab-76b9923b1/recent-activity/all/',
  resume: '/Muhammad_Tayyab_Resume_2026.pdf',
  timezone: 'Asia/Karachi',
  availability: 'Open to software & AI internships',
  // Short facts shown beside the intro in the hero
  facts: [
    { k: 'Currently', v: 'Teaching Assistant, Operating Systems — FAST-NUCES' },
    { k: 'Previously', v: '.NET Developer — PrimeHRMS' },
    { k: 'Studying', v: 'BS Software Engineering · Dean’s List' },
  ],
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

export const stats = [
  { value: '2', label: 'AI systems built end-to-end' },
  { value: '78–82%', label: 'AUC vs. a 69–70% published baseline' },
  { value: '1', label: 'live client platform in production' },
  { value: '40+', label: 'students mentored as OS teaching assistant' },
]

export const about = {
  paragraphs: [
    'I’m a Software Engineering student at FAST-NUCES. I like building AI features that do real work: LLM workflows, retrieval, and the backend services behind them.',
    'I’ve shipped AI products, backend services, and a live client platform. I also TA Operating Systems labs, which is where I learned to care about reliability.',
  ],
  highlights: [
    { title: 'AI engineering', text: 'LLM features, tool calling and retrieval that solve real tasks.' },
    { title: 'Backend systems', text: 'APIs and services designed for clarity and maintainability.' },
    { title: 'Measurable results', text: 'Evaluation and testing — not just demos.' },
  ],
}

export const skills = [
  {
    group: 'AI & LLM',
    items: ['Python', 'LangChain', 'Tool / function calling', 'RAG', 'Vector embeddings', 'ChromaDB', 'Prompt engineering'],
  },
  {
    group: 'Backend',
    items: ['FastAPI', 'Node.js', 'Express', 'REST APIs', 'JWT auth', 'C# / ASP.NET Core'],
  },
  {
    group: 'Data & ML',
    items: ['PyTorch', 'Scikit-learn', 'XGBoost', 'SHAP', 'Pandas', 'SQL'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Next.js', 'JavaScript', 'Vite', 'Tailwind CSS', 'Redux Toolkit'],
  },
  {
    group: 'Systems & Tools',
    items: ['C / C++', 'Java', 'MySQL', 'MongoDB', 'Firebase', 'Docker', 'GitHub Actions', 'Linux'],
  },
]

export const experience = [
  {
    role: '.NET Developer',
    org: 'PrimeHRMS',
    place: 'Faisalabad, Pakistan',
    period: 'Jun 2026 – Aug 2026',
    points: [
      'Developed backend features for an HR management platform in .NET / C#.',
      'Applied layered Clean Architecture and REST API design practices in a professional team setting.',
    ],
    tags: ['.NET', 'C#', 'REST APIs', 'Clean Architecture'],
  },
  {
    role: 'Teaching Assistant — Operating Systems',
    org: 'FAST-NUCES',
    place: 'Chiniot-Faisalabad Campus',
    period: '2025 – Present',
    points: [
      'Run weekly labs for 40+ students on CPU scheduling, IPC, semaphores and multithreading.',
      'Wrote C/C++ reference implementations, designed and graded assignments, and hold regular office hours.',
    ],
    tags: ['C / C++', 'Concurrency', 'Mentoring'],
  },
  {
    role: 'Front-End Developer — FBR e-Invoicing System',
    org: 'Client project',
    place: 'Live in production',
    period: '2025',
    points: [
      'Led front-end delivery: dashboards, invoice workflows, role-based access control and protected routes.',
      'Built a scalable React component library with Redux Toolkit and Axios; the platform remains in active use.',
    ],
    tags: ['React', 'Redux Toolkit', 'Axios', 'RBAC'],
  },
]

export const education = {
  degree: 'BS Software Engineering',
  school: 'FAST-NUCES, Chiniot-Faisalabad',
  period: '2023 – Present (Expected 2027)',
  notes: ['Dean’s List Honoree — 6th Semester', 'Teaching Assistant, Operating Systems'],
  prior: 'FSc Pre-Engineering — Punjab Group of Colleges (2021 – 2023)',
}

export const projects = [
  {
    featured: true,
    kind: 'agent',
    title: 'AI HRMS Assistant',
    subtitle: 'Natural-language HR operations',
    period: '2026',
    description:
      'An HR system you operate by talking to it. Prompts are parsed into structured parameters and executed as validated leave requests.',
    points: [
      'Commands map to typed business actions through LLM tool calling.',
      'Reuses the same business rules as the standard UI via Clean Architecture.',
    ],
    pipeline: ['Prompt', 'Intent', 'Tool call', 'Validation', 'Action'],
    // Illustrative session shown in the project's preview window
    demo: [
      { t: 'in', v: 'Apply annual leave for me from Monday to Wednesday' },
      { t: 'step', v: 'intent → leave.request' },
      { t: 'step', v: 'tool_call create_leave_request(type: "annual", days: 3)' },
      { t: 'step', v: 'validate balance · overlaps · policy rules' },
      { t: 'ok', v: 'Leave request created and sent for approval' },
    ],
    tags: ['LLM Tool Calling', 'Clean Architecture', '.NET'],
    links: [
      { label: 'Source', href: 'https://github.com/tyab07/HRMS-CleanArchitecture', type: 'github' },
      { label: 'Demo', href: profile.hrmsPost, type: 'linkedin' },
    ],
  },
  {
    featured: true,
    kind: 'rag',
    title: 'FAST_RAGger',
    subtitle: 'Full-stack RAG chatbot',
    period: '2025 – Present',
    description:
      'Answers admissions and campus-life questions from a curated knowledge base using embeddings and semantic search.',
    points: [
      'Document upload, retrieval, AI responses and Firebase authentication.',
      'Python + ChromaDB backend with a modular React frontend.',
    ],
    pipeline: ['Documents', 'Embeddings', 'Retrieval', 'Answer'],
    demo: [
      { t: 'in', v: 'What are the admission requirements for BS Software Engineering?' },
      { t: 'step', v: 'embed query → vector' },
      { t: 'step', v: 'chromadb.query(top_k: 4) · semantic search' },
      { t: 'step', v: 'compose answer from retrieved context' },
      { t: 'ok', v: 'Answer grounded in the curated knowledge base' },
    ],
    tags: ['RAG', 'LangChain', 'ChromaDB', 'Python', 'React', 'Firebase'],
    links: [
      { label: 'Frontend', href: 'https://github.com/tyab07/Fast_RAGger', type: 'github' },
      { label: 'Backend', href: 'https://github.com/tyab07/Fast_RAGger_Backened', type: 'github' },
    ],
  },
  {
    featured: false,
    kind: 'ml',
    title: 'NHANES Depression Prediction',
    subtitle: 'Research replication & improvement',
    period: '2025',
    description:
      'Reproduced a peer-reviewed Frontiers in Computer Science (2025) model and outperformed it on the same dataset.',
    tags: ['Python', 'XGBoost', 'Scikit-learn', 'SHAP', 'Bayesian Optimization'],
    links: [{ label: 'GitHub profile', href: profile.github, type: 'github' }],
  },
  {
    featured: false,
    kind: 'auth',
    title: 'Secure Auth Backend',
    subtitle: 'JWT access + refresh-token sessions',
    period: '2026',
    description:
      'Short-lived access tokens with 7-day refresh tokens in httpOnly cookies, hashed in the database, with session tracking and revocation on logout.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    links: [{ label: 'Source', href: 'https://github.com/tyab07/JWT_Auth-OTP', type: 'github' }],
  },
  {
    featured: false,
    kind: 'net',
    title: 'CampusConnect',
    subtitle: 'Inter-campus messaging system',
    period: '2026',
    description:
      'Multi-threaded central server routing TCP messages between departments, with UDP presence and a GTK3 desktop client.',
    tags: ['C', 'POSIX Threads', 'GTK3', 'TCP/UDP'],
    links: [{ label: 'Source', href: 'https://github.com/tyab07/CampusConnect', type: 'github' }],
  },
  {
    featured: false,
    kind: 'web',
    title: 'Blood Donor Website',
    subtitle: 'Donor discovery web app',
    period: '2026',
    description: 'A responsive Vite web app connecting blood donors with people in need.',
    tags: ['Vite', 'JavaScript', 'Vercel'],
    links: [
      // Vercel deployment is currently down (DEPLOYMENT_NOT_FOUND) — re-add once redeployed:
      // { label: 'Live', href: 'https://blooddonor-nine.vercel.app', type: 'live' },
      { label: 'Source', href: 'https://github.com/tyab07/Blood_Donor_Website', type: 'github' },
    ],
  },
]

export const achievements = [
  'Dean’s List — 6th Semester at FAST-NUCES',
  'Shipped a client platform that remains in active production',
  'Outperformed published authors on the NHANES dataset (AUC +8–12%)',
]
