import project1 from "../assets/assets/projects/project-1.jpg";
import project2 from "../assets/assets/projects/project-2.jpg";
import project3 from "../assets/assets/projects/project-3.jpg";
import project4 from "../assets/assets/projects/project-4.jpg";
import project5 from "../assets/assets/projects/project-5.png";

export const HERO_CONTENT = `I am an MCA postgraduate specializing in Full Stack and Blockchain Development. I build robust, secure, and user-centric web applications and decentralized systems (Web3) using React, Node.js, Express, Solidity, Ethers.js, and modern cloud deployment platforms.`;

export const ABOUT_TEXT = `I am a passionate and results-driven MCA postgraduate specializing in Full Stack and Blockchain Development. My technical journey is defined by a deep interest in building decentralized systems (Web3) and robust, scalable web applications using React.js, Node.js, and modern database solutions. 

With hands-on experience as a React Developer Intern at Altezzai LLP, I have honed my skills in creating seamless digital storefronts, integrating REST APIs, and optimizing client-side performance. Beyond traditional web architectures, I actively dive into smart contract engineering on platforms like Solidity, Ethers.js, and the Somnia and Chiliz ecosystems. 

I thrive on solving complex problems, a trait demonstrated in hackathons like the NASA International Space Apps Challenge 2025 and workshops like the Road to Devcon 2024. As an adaptable learner and self-motivated collaborator, I aim to merge traditional enterprise software engineering with blockchain innovation, developing high-impact applications that deliver exceptional user experiences.`;

export const TIMELINE_EVENTS = [
  {
    date: "Jan 2026 - Jun 2026",
    title: "React Developer Intern",
    subtitle: "Altezzai LLP",
    category: "experience",
    description: "Developed frontend features for Shopynker, enabling local businesses to establish digital storefronts. Integrated REST APIs for product and business management, participated in testing/debugging, and improved application performance and user experience.",
    tags: ["React.js", "REST APIs", "Agile Development", "UI/UX Optimization"]
  },
  {
    date: "2024 - 2026 (Pursuing)",
    title: "Master of Computer Applications (MCA)",
    subtitle: "Kannur University",
    category: "education",
    description: "Specializing in software engineering, advanced databases, web technologies, and decentralized ledger concepts. Maintained an aggregate percentage of 70% in coursework.",
    tags: ["MCA", "Computer Science", "Database Systems"]
  },
  {
    date: "2025",
    title: "Galactic Problem Solver - NASA Space Apps",
    subtitle: "NASA International Space Apps Challenge 2025",
    category: "certification",
    description: "Participated in the prestigious global hackathon, solving complex cosmic challenges using NASA's open-source data and working within cross-functional teams.",
    tags: ["Hackathon", "NASA", "Data Analysis", "Problem Solving"]
  },
  {
    date: "May 24 - 25, 2024",
    title: "EthWalk: Enroute to Ethereum Blockchain",
    subtitle: "Kerala Blockchain Academy at IIITM-K, Technopark",
    category: "certification",
    description: "Participated in the Road to Devcon Southeast Asia workshop. Gained hands-on experience with Ethereum fundamentals, smart contract design, and the Web3 developer toolkit.",
    tags: ["Blockchain", "Ethereum", "Smart Contracts", "Web3"]
  },
  {
    date: "2021 - 2024",
    title: "Bachelor of Computer Applications (BCA)",
    subtitle: "Government College Thalassery, Kannur University",
    category: "education",
    description: "Graduated with 67.8%. Built solid foundations in programming languages, web design, networking, and software engineering principles.",
    tags: ["BCA", "Programming", "Computer Science"]
  },
  {
    date: "Professional Development",
    title: "Workshops & Certifications",
    subtitle: "NPTEL & National Workshops",
    category: "certification",
    description: "Earned NPTEL certification in 'Enhancing Soft Skills and Personality'. Participated in a National Workshop focused on Applied Machine Learning and Deep Learning.",
    tags: ["Soft Skills", "Machine Learning", "Deep Learning"]
  }
];

export const SKILLS_CATEGORIES = [
  {
    category: "Programming",
    skills: ["Solidity", "JavaScript", "TypeScript", "Java", "C", "SQL"]
  },
  {
    category: "Frontend",
    skills: ["React.js", "Vite", "Tailwind CSS", "HTML5", "CSS3", "Shadcn/UI", "Radix UI"]
  },
  {
    category: "Backend & DBs",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "PostgreSQL", "MySQL", "Firebase Firestore"]
  },
  {
    category: "Blockchain & Web3",
    skills: ["Solidity", "Web3.js", "Ethers.js", "OpenZeppelin", "MetaMask Integration", "Hardhat", "NFT Development", "Chiliz Ecosystem", "Somnia Testnet"]
  },
  {
    category: "DevOps & Cloud",
    skills: ["Git", "GitHub", "Linux", "Firebase Hosting", "Vercel", "Docker (Learning)", "CI/CD Concepts"]
  },
  {
    category: "CS Fundamentals",
    skills: ["Data Structures", "DBMS", "Operating Systems", "Networking", "Software Engineering"]
  }
];

export const PROJECTS = [
  {
    title: "HackJudge AI",
    category: "web3",
    image: project4,
    description: "A decentralized AI hackathon evaluation platform. Features AI-powered project evaluation, blockchain-based scoring systems, MetaMask integration, and autonomous smart-contract workflows for an on-chain leaderboard on the Somnia Testnet.",
    technologies: ["React", "TypeScript", "Solidity", "Ethers.js", "Somnia Testnet"]
  },
  {
    title: "TicketFuture+",
    category: "web3",
    image: project4,
    description: "A blockchain-based sports ticket marketplace offering NFT match tickets, secure ownership verification, ticket resale features, tier-based seat pricing, match cut-offs, and wallet integration on the Chiliz Testnet.",
    technologies: ["React", "Solidity", "Hardhat", "Ethers.js", "OpenZeppelin", "Chiliz Testnet"]
  },
  {
    title: "Hiep",
    category: "fullstack",
    image: project1,
    description: "A social media marketplace platform designed for fashion designers. Integrates real-time messaging, user authentication, marketplace listing, user profiles, and social networking tools.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"]
  },
  {
    title: "Paysphere",
    category: "web3",
    image: project3,
    description: "A decentralized salary distribution application (DApp) providing automated payroll administration, smart-contract based salary disbursement, transaction logs, and employee tracking.",
    technologies: ["React.js", "Solidity", "Web3.js"]
  },
  {
    title: "Inventory Management System",
    category: "fullstack",
    image: project2,
    description: "A full-featured inventory client for managing customer databases, purchase records, product catalogs, report generation, and automated PDF print-ready invoices.",
    technologies: ["React", "Firebase", "Firestore"]
  },
  {
    title: "Fine Arts Management Portal",
    category: "fullstack",
    image: project4,
    description: "A collaborative event platform supporting cultural activities administration, event coordination, registration queues, media handling, and role-based authentication.",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "UmiDev Stash",
    category: "utility",
    image: project5,
    description: "A developer portal providing Move smart contract boilerplate templates, interactive previews, downloadable starter kits, and deployment educational guides.",
    technologies: ["Move Language", "React", "Tailwind CSS"]
  },
  {
    title: "Vote-Chain",
    category: "web3",
    image: project4,
    description: "A decentralized voting platform engineered for secure, immutable, and transparent election hosting with wallet-based identity authentication.",
    technologies: ["Solidity", "React", "Ethers.js", "Web3.js"]
  },
  {
    title: "Weather Dashboard",
    category: "utility",
    image: project5,
    description: "A neat dashboard tracking live atmospheric conditions using the OpenWeather API. Features search history, geocoding, and custom dynamic styling.",
    technologies: ["JavaScript", "OpenWeather API", "CSS3"]
  },
  {
    title: "Brick Breaker Game",
    category: "utility",
    image: project2,
    description: "An interactive, arcade-style Brick Breaker game featuring responsive control systems, score trackers, audio triggers, and custom difficulty level states.",
    technologies: ["React", "JavaScript", "HTML5 Canvas"]
  }
];

export const CONTACT = {
  address: "Kannur, Kerala, India",
  phoneNo: "+91 8606438971",
  email: "soorajsoorajk136@gmail.com",
  github: "github.com/soorajdotk",
  linkedin: "linkedin.com/in/sooraj-k-b34633230/"
};
