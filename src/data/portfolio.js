/* ==========================================================================
   PORTFOLIO DATA — Tanjil Ahmed
   --------------------------------------------------------------------------
   Everything that appears on the site lives in this one file.
   Edit text here; you should not need to touch the components.

   Search this file for "TODO" — those are values I could not get from the
   Europass CV and filled with a sensible placeholder. Replace them.
   ========================================================================== */

const PUBLIC = process.env.PUBLIC_URL || "";

/* ---------- Identity ---------- */
export const profile = {
  name: "Tanjil Ahmed",
  firstName: "Tanjil",
  initials: "TA",
  title: "Software Engineer", // shown on loading screen
  footerSubtitle: "Full-Stack Software Engineer",
  heroTagline: "I build things for the WEB",
  heroSubline:
    "Full-Stack Engineer · 2 Yrs Industry Experience · 2,000+ DSA Problems Solved · 2× IEEE Publications",
  availability: "Open to Full-Time Roles",

  email: "ahmedtanjil12345@gmail.com",
  github: "https://github.com/tanjilahmed12345",
  linkedin: "https://www.linkedin.com/in/tanjilahmed01/",

  // Public résumé (personal details like passport no., DOB and home address
  // are removed). Replace the PDF in /public with a newer one any time.
  resume: `${PUBLIC}/Tanjil_Ahmed_Resume.pdf`,

  photo: `${PUBLIC}/images/myPhoto.jpg`,
  logo: `${PUBLIC}/images/logo.png`,
};

/* ---------- About ---------- */
// Rendered as rich text; <b> tags are allowed via JSX.
export const about = (
  <>
    Hi, I'm{" "}
    <b style={{ color: "var(--primary)", fontSize: "1.2em" }}>Tanjil Ahmed</b>{" "}
    — a <b>Computer Science &amp; Engineering</b> graduate from{" "}
    <b>Sylhet Engineering College (SUST)</b> with a CGPA of <b>3.80/4.00</b>{" "}
    and <b>two years of professional experience</b> as a Software Engineer at{" "}
    <b>Technext Limited</b>. I build production-ready full-stack applications
    with Next.js, React, Node.js and Django REST Framework, and I'm the
    co-author of <b>two IEEE-published papers</b> on blockchain systems. A
    competitive programmer at heart — <b>Codeforces Expert (1661)</b>,{" "}
    <b>CodeChef 3★ (1731)</b> and an <b>ICPC Asia Dhaka Regional</b>{" "}
    qualifier with <b>2,000+ problems</b> solved — I'm especially interested
    in applied AI and building reliable, scalable software.
  </>
);

/* ---------- Education ---------- */
export const education = [
  {
    institute: "Sylhet Engineering College (affiliated with SUST)",
    location: "Sylhet, Bangladesh",
    degree: "B.Sc. (Engg.) in Computer Science & Engineering",
    year: "2019 – 2024 · CGPA 3.80/4.00 (With Distinction)",
  },
  {
    institute: "Westpoint College",
    location: "Sylhet, Bangladesh",
    degree: "Higher Secondary Certificate (Science)",
    year: "2016 – 2018", // TODO: add GPA, e.g. "HSC – GPA 5.00, 2018"
  },
  {
    institute: "Baramchal High School and College",
    location: "Sylhet, Bangladesh",
    degree: "Secondary School Certificate (Science)",
    year: "2014 – 2016", // TODO: add GPA, e.g. "SSC – GPA 5.00, 2016"
  },
];

/* ---------- Skills (icon = short label in the coloured square) ---------- */
export const skills = {
  Languages: [
    { name: "C", icon: "C", color: "#5c6bc0", textColor: "#fff" },
    { name: "C++", icon: "C++", color: "#004482", textColor: "#fff" },
    { name: "JavaScript", icon: "JS", color: "#f7df1e", textColor: "#000" },
    { name: "TypeScript", icon: "TS", color: "#3178c6", textColor: "#fff" },
    { name: "Python", icon: "Py", color: "#3776AB", textColor: "#fff" },
    { name: "Java", icon: "☕", color: "#e76f00", textColor: "#fff" },
    { name: "C#", icon: "C#", color: "#68217a", textColor: "#fff" },
  ],
  Frontend: [
    { name: "React.js", icon: "⚛️", color: "#61dafb", textColor: "#000" },
    { name: "Next.js", icon: "Next", color: "#000", textColor: "#fff" },
    { name: "Astro", icon: "🚀", color: "#ff5d01", textColor: "#fff" },
    { name: "Remix", icon: "R", color: "#121212", textColor: "#fff" },
    { name: "Redux", icon: "RX", color: "#764abc", textColor: "#fff" },
    { name: "Zustand", icon: "🐻", color: "#443e38", textColor: "#fff" },
    { name: "Tailwind CSS", icon: "TW", color: "#38b2ac", textColor: "#fff" },
    { name: "Bootstrap", icon: "B", color: "#563d7c", textColor: "#fff" },
    { name: "HTML5", icon: "HTML", color: "#e34f26", textColor: "#fff" },
    { name: "CSS3 / SCSS", icon: "CSS", color: "#1572b6", textColor: "#fff" },
  ],
  Backend: [
    { name: "Node.js", icon: "Node", color: "#3c873a", textColor: "#fff" },
    { name: "Express.js", icon: "Ex", color: "#444", textColor: "#fff" },
    { name: "Django", icon: "Dj", color: "#0c4b33", textColor: "#fff" },
    { name: "Django REST Framework", icon: "DRF", color: "#a30000", textColor: "#fff" },
    { name: "REST API Design", icon: "API", color: "#2980b9", textColor: "#fff" },
    { name: "JWT Authentication", icon: "🔐", color: "#d63aff", textColor: "#fff" },
  ],
  "Databases & ORM": [
    { name: "PostgreSQL", icon: "🐘", color: "#336791", textColor: "#fff" },
    { name: "MySQL", icon: "🐬", color: "#4479A1", textColor: "#fff" },
    { name: "MongoDB", icon: "🍃", color: "#13aa52", textColor: "#fff" },
    { name: "Prisma ORM", icon: "◭", color: "#2d3748", textColor: "#fff" },
    { name: "Django ORM", icon: "ORM", color: "#44b78b", textColor: "#fff" },
  ],
  "DevOps & Platforms": [
    { name: "Docker", icon: "🐳", color: "#2496ed", textColor: "#fff" },
    { name: "Vercel", icon: "▲", color: "#000000", textColor: "#fff" },
    { name: "Netlify", icon: "◈", color: "#00C7B7", textColor: "#fff" },
    { name: "Render", icon: "Rd", color: "#46e3b7", textColor: "#000" },
    { name: "Shopify / Liquid", icon: "🛍️", color: "#95bf47", textColor: "#fff" },
  ],
  "Developer Tools": [
    { name: "Git", icon: "Git", color: "#f34f29", textColor: "#fff" },
    { name: "GitHub", icon: "GH", color: "#171515", textColor: "#fff" },
    { name: "GitLab", icon: "GL", color: "#fc6d26", textColor: "#fff" },
    { name: "VS Code", icon: "VS", color: "#007acc", textColor: "#fff" },
    { name: "Postman", icon: "📬", color: "#ff6c37", textColor: "#fff" },
  ],
  "Concepts & Practices": [
    { name: "Data Structures", icon: "🌲", color: "#27ae60", textColor: "#fff" },
    { name: "Algorithms", icon: "∑", color: "#8e44ad", textColor: "#fff" },
    { name: "System Design", icon: "🏗️", color: "#2c3e50", textColor: "#fff" },
    { name: "Software Architecture", icon: "🧱", color: "#c0392b", textColor: "#fff" },
  ],
  "Soft Skills": [
    { name: "Problem Solving", icon: "🧩", color: "#2980b9", textColor: "#fff" },
    { name: "Team Collaboration", icon: "🤝", color: "#27ae60", textColor: "#fff" },
    { name: "Mentoring", icon: "🎓", color: "#8e44ad", textColor: "#fff" },
    { name: "Leadership", icon: "🧭", color: "#c0392b", textColor: "#fff" },
  ],
};

/* ---------- Scrolling tape words ---------- */
export const tapeWords = [
  "End-to-End Web App",
  "Reliable",
  "Responsive",
  "Robust",
  "Scalable",
  "Secure",
  "Accessible",
  "User Friendly",
  "Maintainable",
  "Interactive",
  "Optimized",
  "Bilingual Ready",
  "Production Grade",
  "Feature-Rich",
];

/* ---------- Experience ----------
   duration format must be "Mon YYYY – Mon YYYY" (or "– Present");
   the length (e.g. "2 yrs") is calculated automatically. */
export const experience = [
  {
    role: "💻 Junior Software Engineer",
    organization: "Technext Limited",
    duration: "Aug 2024 – Jul 2026",
    details: [
      "Optimized GreySheet, an antique coin and banknote pricing platform, to handle over 12 million records (12,228,954 data points) with seamless performance and scalability.",
      "Core member of the JavaScript team, delivering high-quality features across multiple client projects — GreySheet, OneSuite and Bamboo Lighting — within tight deadlines.",
      "Developed and customized Shopify themes with vanilla CSS, JavaScript and the Liquid template engine to build responsive storefronts that met real client business requirements.",
      "Worked as a full-stack developer on diverse projects for European clients, ensuring seamless front-end and back-end integration.",
    ],
  },
  {
    role: "🧑‍💻 Intern Software Engineer",
    organization: "Technext Limited",
    duration: "May 2024 – Jul 2024",
    details: [
      "Contributed to DermaQuest, a client web platform, building UI features with React and modern JavaScript.",
      "Converted to a full-time Junior Software Engineer role at the end of the internship.",
    ],
  },
  {
    role: "🎓 Programming Workshop Instructor",
    organization: "ACM Lab, Sylhet Engineering College",
    duration: "Mar 2020 – Apr 2024",
    details: [
      "Taught data structures, algorithms and competitive programming to undergraduate students.",
      "Trained student teams for national programming contests such as NCPC and ICPC regionals.",
    ],
  },
  {
    role: "🏆 Vice President",
    organization: "SEC Programming Club",
    duration: "Feb 2023 – Feb 2024",
    details: [
      "Led club operations and organised programming contests and training sessions.",
      "Mentored students in competitive programming and grew the club's contest community.",
    ],
  },
  {
    role: "🤝 Vice President",
    organization: "SEC CSE Society",
    duration: "Jun 2023 – Jun 2024",
    details: [
      "Organised academic events and technical seminars for the CSE department.",
      "Coordinated departmental activities between students and faculty.",
    ],
  },
];

/* ---------- Projects ---------- */
export const projects = [
  {
    name: "Sunnah Cure",
    projectType: "Appointment Booking Platform",
    description:
      "Full-stack Islamic medicine platform with 3 role-based dashboards and 40+ REST APIs covering the complete appointment lifecycle. Features JWT auth, FSM-based appointment states, Stripe and bKash/Nagad payments, real-time messaging via Pusher and automated notifications — delivered bilingual (English/Bengali).",
    languages:
      "Next.js | Django REST Framework | PostgreSQL | JWT | Stripe | bKash / Nagad | Pusher | Vercel | Render",
    image: `${PUBLIC}/images/projectImages/sunnah-cure.png`,
    deployedLink: "https://sunnah-cure.vercel.app/",
    sourceCodeLink: null, // TODO: add GitHub repo URL if public
  },
  {
    name: "MoneyPilot",
    projectType: "Personal Finance Dashboard with AI Insights",
    description:
      "Personal finance dashboard covering expenses, budgets, savings goals, net worth and a lend/borrow ledger. Includes AI-powered spending insights, automatic merchant categorisation and anomaly detection, with a client-first Zustand architecture synced to PostgreSQL via Prisma, multi-currency, CSV import and PDF export.",
    languages:
      "Next.js | TypeScript | PostgreSQL | Prisma | Zustand | JWT | AI Insights",
    image: `${PUBLIC}/images/projectImages/moneypilot.png`,
    deployedLink: "https://money-pilot-orcin.vercel.app/auth",
    sourceCodeLink: null, // TODO: add GitHub repo URL if public
  },
  {
    name: "Pharma Nest BD",
    projectType: "Online Pharmacy Platform",
    description:
      "Bilingual pharmacy e-commerce platform with medicine browsing, OTC/Rx filtering and a 7-stage order lifecycle. Prescription upload with pharmacist review, multi-gateway payments (bKash, Nagad, Rocket, COD) and a clean layered architecture with 40+ REST endpoints, Zod validation and role-based dashboards.",
    languages:
      "Next.js | TypeScript | PostgreSQL | Prisma | Zustand | Zod | bKash / Nagad / Rocket",
    image: `${PUBLIC}/images/projectImages/pharma-nest-bd.png`,
    deployedLink: "https://pharma-nest-bd.vercel.app/",
    sourceCodeLink: null, // TODO: add GitHub repo URL if public
  },
  {
    name: "Hospital Management System",
    projectType: "Healthcare Operations Web App",
    description:
      "A web application that automates day-to-day tasks of a healthcare facility — patient records, doctors, appointments and billing — to improve efficiency, reduce costs and support better quality of care. Built on Django with a responsive Bootstrap front-end.",
    languages: "Django | Python | HTML | CSS | Bootstrap | JavaScript",
    image: `${PUBLIC}/images/projectImages/hospital-management.png`,
    deployedLink: null,
    sourceCodeLink: null, // TODO: add GitHub repo URL if public
  },
  {
    name: "DX-Ball Game",
    projectType: "Java Desktop Game",
    description:
      "A classic brick-breaker game built in Java with Swing and object-oriented design, featuring power-ups, multiple levels and smooth paddle-and-ball physics. Praised for its smooth mechanics and captivating visuals.",
    languages: "Java | Swing | OOP | Game Loop | Collision Detection",
    image: `${PUBLIC}/images/projectImages/dx-ball.png`,
    deployedLink: null,
    sourceCodeLink: null, // TODO: add GitHub repo URL if public
  },
];

/* ---------- Publications ---------- */
export const publications = [
  {
    title:
      "S-DrivingRecords: Blockchain Based Enhancing Trust and Transparency in Driving Records Using Hyperledger Fabric",
    authors:
      "Shovon Das Chowdhury, Tanjil Ahmed, Ruhul Amin, Rahat Ahmed Chowdhury, Shah MD Tanjim, Md Lysuzzaman",
    venue: "2024 International Conference (iCACCESS) · IEEE",
    link: "https://ieeexplore.ieee.org/document/10499543",
  },
  {
    title:
      "SafetyNet: A Decentralized Police Complaint Management System for Bangladesh Using Blockchain Technology",
    authors:
      "Shah MD Tanjim, Rahat Ahmed Chowdhury, Tanjil Ahmed, Ruhul Amin, Shovon Das Chowdhury, Md Lysuzzaman",
    venue: "2024 International Conference (iCACCESS) · IEEE",
    link: "https://ieeexplore.ieee.org/document/10499556",
  },
];

/* ---------- Achievements ---------- */
export const achievements = [
  {
    text: (
      <>
        <span className="highlight2">Expert</span> on Codeforces with a maximum rating of{" "}
        <span className="highlight1">1661</span> and <span className="highlight1">1,850+</span> problems solved.
      </>
    ),
    link: "https://codeforces.com/profile/tanjil-ahmed",
  },
  {
    text: (
      <>
        <span className="highlight2">3-star (⭐)</span> on CodeChef with a maximum contest rating of{" "}
        <span className="highlight1">1731</span>.
      </>
    ),
    link: "https://www.codechef.com/users/tanjilvai",
  },
  {
    text: (
      <>
        Qualified for the <span className="highlight2">ICPC Asia Dhaka Regional Contest</span>{" "}
        representing Sylhet Engineering College (<span className="highlight1">2023</span>).
      </>
    ),
    link: null,
  },
  {
    text: (
      <>
        Qualified for the <span className="highlight2">National Collegiate Programming Contest (NCPC) 2023</span>{" "}
        hosted by Jahangirnagar University.
      </>
    ),
    link: null,
  },
  {
    text: (
      <>
        <span className="highlight1">1st Runners-Up</span> at the{" "}
        <span className="highlight2">SEC Idea Hackathon 2022</span>, pitching a technology-based solution under time pressure.
      </>
    ),
    link: null,
  },
  {
    text: (
      <>
        <span className="highlight1">2nd Runners-Up</span> in the{" "}
        <span className="highlight2">CSE DAY Programming Contest 2020</span> at Sylhet Engineering College.
      </>
    ),
    link: null,
  },
  {
    text: (
      <>
        <span className="highlight2">Problem Setter &amp; Judge</span> for the CSE Day 2024 programming contest —
        designed problems and test cases.
      </>
    ),
    link: null,
  },
  {
    text: (
      <>
        Solved <span className="highlight1">2,000+</span> DSA problems across Codeforces, CodeChef, LightOJ and UVa.
      </>
    ),
    link: "https://lightoj.com/user/ahmedtanjil1",
  },
];

/* ---------- Coding profiles ----------
   Entries with an empty `link` are hidden automatically.
   Add more handles any time (e.g. "https://leetcode.com/u/<handle>/"). */
const ICONS = `${PUBLIC}/images/codingProfileIcons/`;
export const codingProfiles = [
  { name: "GitHub", link: "https://github.com/tanjilahmed12345", icon: ICONS + "github.svg" },
  { name: "Codeforces", link: "https://codeforces.com/profile/tanjil-ahmed", icon: ICONS + "codeforces.png" },
  { name: "LeetCode", link: "", icon: ICONS + "leetcode.png" },
  { name: "CodeChef", link: "https://www.codechef.com/users/tanjilvai", icon: ICONS + "codechef.jpg" },
  { name: "LightOJ", link: "https://lightoj.com/user/ahmedtanjil1", icon: ICONS + "lightoj.svg" },
  { name: "AtCoder", link: "", icon: ICONS + "atcoder.png" },
  { name: "GeeksforGeeks", link: "", icon: ICONS + "gfg.png" },
];

/* ---------- Contact form (EmailJS) ----------
   The form sends mail through https://www.emailjs.com (free tier is fine).
   Put your keys in a `.env` file (see .env.example). Until they are set, the
   form falls back to opening the visitor's mail app addressed to you. */
export const emailjs = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || "",
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "",
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "",
};
