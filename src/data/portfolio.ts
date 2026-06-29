import type {
  Experience,
  Project,
  SkillCategory,
  Certification,
  ContactItem,
  NavLink,
} from "../types";

export const navLinks: NavLink[] = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const skills: SkillCategory[] = [
  {
    id: "frameworks",
    icon: "⚛️",
    title: "Frameworks & Libraries",
    tags: ["React.js", "Vue.js", "Next.js", "Gatsby.js", "Lit.js"],
  },
  {
    id: "state",
    icon: "🧠",
    title: "State Management",
    tags: ["Redux", "Vuex"],
  },
  {
    id: "languages",
    icon: "💻",
    title: "Languages",
    tags: ["JavaScript ES6+", "TypeScript"],
  },
  {
    id: "styling",
    icon: "🎨",
    title: "Styling",
    tags: ["HTML5", "CSS3", "SCSS/SASS", "LESS", "Tailwind CSS"],
  },
  {
    id: "ui",
    icon: "🧩",
    title: "UI Libraries",
    tags: ["Ant Design", "Material UI", "Reactstrap", "Kendo UI", "Rsuite"],
  },
  {
    id: "tools",
    icon: "🔗",
    title: "APIs & Tools",
    tags: ["REST APIs", "GraphQL", "Axios", "Postman", "Git / GitHub", "GitLab"],
  },
];

export const experiences: Experience[] = [
  {
    id: "tcs",
    role: "System Engineer",
    company: "Tata Consultancy Services (TCS)",
    client: "Client: Standard Chartered Bank — Data Risk Assessment (DRA – PIA & DS)",
    duration: "Apr 2024 — Present",
    current: true,
    description:
      "Enterprise Data Risk Assessment platform used by Standard Chartered Bank to assess, monitor, and mitigate data-related risks across global business units through structured Privacy Impact Assessment and Data Sovereignty workflows.",
    bullets: [
      "Engineered scalable enterprise frontend applications using React.js and Lit.js with reusable component architecture",
      "Developed dynamic rule-driven workflows with complex form validations and secure Role-Based Access Control (RBAC)",
      "Implemented performance-optimized UI components improving rendering efficiency and user experience",
      "Performed end-to-end feature ownership from requirement analysis through production deployment",
      "Resolved production issues through root cause analysis (RCA), improving system stability",
    ],
  },
  {
    id: "apptomate",
    role: "Senior Software Engineer",
    company: "Apptomate Digital Software Services Pvt. Ltd.",
    client: "HealthCare · FinTech · Workforce Platforms",
    duration: "Apr 2022 — Mar 2024",
    description:
      "Led frontend architecture and development for multiple platforms serving thousands of end users across HealthCare, FinTech, and Workforce domains.",
    bullets: [
      "Designed scalable web apps using React.js, Redux, Vue.js, Vuex, Material UI, SCSS delivering high-performance UIs",
      "Integrated real-time communication via Sendbird — chat, voice, and video interactions",
      "Implemented secure financial data integration using Plaid API ensuring compliant data processing",
      "Led development for Happyworkin, Clyear, ACHC, AgentBuddy and Paygov platforms",
    ],
  },
  {
    id: "sketchbrahma",
    role: "Product Engineer",
    company: "Sketch Brahma Technologies Pvt. Ltd.",
    client: "Open-Source · Business Intelligence",
    duration: "May 2021 — Mar 2022",
    bullets: [
      "Developed scalable web applications using React.js, Redux, Next.js, Bootstrap, and SCSS",
      "Collaborated directly with clients and leadership to translate business requirements into technical solutions",
      "Contributed to Chaos Genius — open-source business observability platform for KPI monitoring and anomaly detection",
    ],
  },
  {
    id: "kloudone",
    role: "Software Engineer Trainee",
    company: "KloudOne — Kloud Technology Works Pvt. Ltd.",
    client: "E-Learning Platform",
    duration: "Oct 2020 — Mar 2021",
    bullets: [
      "Built responsive UI components using React.js, Gatsby.js, Bootstrap, and Ant Design",
      "Worked on KloudLearn — next-gen e-learning platform for digital training with course tracking",
      "Delivered sprint commitments with minimal supervision in a fast-paced product environment",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "dra",
    icon: "🏦",
    domain: "Banking / RegTech",
    title: "DRA – PIA & DS",
    description:
      "Enterprise data risk assessment platform for Standard Chartered Bank enabling regulatory compliance through structured Privacy Impact Assessment and Data Sovereignty workflows.",
    tags: ["React.js", "Lit.js", "RBAC"],
  },
  {
    id: "happyworkin",
    icon: "🏥",
    domain: "Healthcare",
    title: "Happyworkin",
    description:
      "Healthcare job marketplace platform connecting medical professionals with hospitals, featuring real-time communication and advanced search capabilities.",
    tags: ["React.js", "Sendbird", "Redux"],
  },
  {
    id: "clyear",
    icon: "🤖",
    domain: "FinTech / AI",
    title: "Clyear",
    description:
      "AI-driven Accounts Payable automation platform with intelligent invoice processing workflows, reducing manual effort significantly.",
    tags: ["React.js", "Plaid API", "TypeScript"],
  },
  {
    id: "achc",
    icon: "✅",
    domain: "Healthcare",
    title: "ACHC",
    description:
      "Healthcare accreditation management system built with Vue.js and Kendo UI handling complex approval workflows and compliance tracking.",
    tags: ["Vue.js", "Kendo UI", "Vuex"],
  },
  {
    id: "chaos",
    icon: "📊",
    domain: "Open Source",
    title: "Chaos Genius",
    description:
      "Open-source business observability platform for KPI monitoring and automated anomaly detection, empowering data-driven decision making.",
    tags: ["React.js", "Next.js", "SCSS"],
  },
  {
    id: "kloudlearn",
    icon: "🎓",
    domain: "E-Learning",
    title: "KloudLearn",
    description:
      "Next-generation e-learning platform enabling organizations to create, manage, and deliver structured digital training programs with progress tracking.",
    tags: ["Gatsby.js", "Ant Design", "Bootstrap"],
  },
];

export const certifications: Certification[] = [
  {
    id: "be",
    icon: "🎓",
    title: "Bachelor of Engineering — Computer Science",
    issuer: "C. Abdul Hakeem College of Engineering & Technology, Vellore",
    date: "2016 – 2020 · CGPA 7.0",
  },
  {
    id: "github-copilot",
    icon: "🏅",
    title: "GitHub Copilot GH-300 Certification",
    issuer: "GitHub",
    date: "Issued February 2026",
    highlighted: true,
  },
];

export const contactItems: ContactItem[] = [
  {
    id: "email",
    icon: "📧",
    label: "Email",
    value: "moghankumar0601@gmail.com",
    href: "mailto:moghankumar0601@gmail.com",
  },
  {
    id: "contact1",
    icon: "📱",
    label: "Contact Number",
    value: "+91 93635 34763",
    href: "tel:+919363534763",
  },
  {
    id: "contact2",
    icon: "📱",
    label: "Alternative Contact Number",
    value: "+91 82203 05435",
    href: "tel:+918220305435",
  },
  {
    id: "linkedin",
    icon: "💼",
    label: "LinkedIn",
    value: "moghankumar0601",
    href: "https://www.linkedin.com/in/moghankumar0601/",
  },
  {
    id: "github",
    icon: "🐙",
    label: "GitHub",
    value: "Moghankumar",
    href: "https://github.com/Moghankumar",
  },
  {
    id: "location",
    icon: "📍",
    label: "Location",
    value: "Vellore, Tamil Nadu, India",
  },
];
