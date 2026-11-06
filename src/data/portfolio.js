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
  title: "Full-Stack Software Engineer", // shown on loading screen
  footerSubtitle: "Full-Stack Software Engineer",
  heroTagline: "I build scalable products for the WEB",
  heroSubline:
    "Full-Stack Software Engineer · Next.js · React · Node.js · Django — 2+ years shipping SaaS, e-commerce and web platforms for clients across the USA & Europe.",
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
export const about = {
  lead: "I build scalable, production-ready web products — from pixel-perfect front-ends to secure, well-structured APIs.",
  paragraphs: [
    <>
      I'm a <b>Full-Stack Software Engineer</b> with 2+ years at{" "}
      <b>Technext Limited</b>, where I shipped SaaS platforms and e-commerce
      storefronts for clients across the <b>USA and Europe</b> — including
      GreySheet, OneSuite and several Shopify brands.
    </>,
    <>
      On my own I build end-to-end products with <b>Next.js, React, Node.js,
      Django REST Framework</b> and <b>PostgreSQL</b>. I'm a competitive
      programmer at heart (Codeforces Expert, ICPC Dhaka Regional qualifier),
      which shapes how I think about clean, efficient code.
    </>,
  ],
  stats: [
    { value: "2+", label: "Years in industry" },
    { value: "8", label: "Projects shipped" },
    { value: "2,000+", label: "Problems solved" },
    { value: "2", label: "IEEE papers" },
  ],
  facts: [
    { icon: "fa-solid fa-location-dot", label: "Based in", value: "Sylhet, Bangladesh" },
    { icon: "fa-solid fa-graduation-cap", label: "Education", value: "B.Sc. in CSE · CGPA 3.80/4.00" },
    { icon: "fa-solid fa-language", label: "Languages", value: "English, Bengali, Hindi, Urdu" },
    { icon: "fa-solid fa-briefcase", label: "Looking for", value: "Full-time Software Engineer roles" },
  ],
};

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

/* ---------- Skills ----------
   logo: file name in public/images/skillIcons/ (official brand mark), or
   fa:   a Font Awesome icon class for concepts and soft skills (shown on `color`). */
export const skills = {
  Languages: [
    { name: "C", logo: "c" },
    { name: "C++", logo: "cplusplus" },
    { name: "JavaScript", logo: "javascript" },
    { name: "TypeScript", logo: "typescript" },
    { name: "Python", logo: "python" },
    { name: "Java", logo: "java" },
    { name: "C#", logo: "csharp" },
  ],
  Frontend: [
    { name: "React.js", logo: "react" },
    { name: "Next.js", logo: "nextjs" },
    { name: "Astro", logo: "astro" },
    { name: "Remix", logo: "remix" },
    { name: "NextUI / HeroUI", logo: "heroui" },
    { name: "Redux", logo: "redux" },
    { name: "Zustand", logo: "zustand" },
    { name: "Tailwind CSS", logo: "tailwindcss" },
    { name: "Bootstrap", logo: "bootstrap" },
    { name: "HTML5", logo: "html5" },
    { name: "CSS3", logo: "css3" },
    { name: "SCSS / Sass", logo: "sass" },
    { name: "GSAP / Motion", logo: "gsap" },
    { name: "Axios", logo: "axios" },
  ],
  Backend: [
    { name: "Node.js", logo: "nodejs" },
    { name: "Express.js", logo: "express" },
    { name: "Django", logo: "django" },
    { name: "Django REST Framework", logo: "djangorest" },
    { name: "ASP.NET MVC / Razor", logo: "dotnet" },
    { name: "JWT / SimpleJWT", logo: "jwt" },
    { name: "REST API Design", fa: "fa-solid fa-plug", color: "#2563eb" },
  ],
  "Databases & ORM": [
    { name: "PostgreSQL", logo: "postgresql" },
    { name: "Neon", logo: "neon" },
    { name: "Supabase", logo: "supabase" },
    { name: "MySQL", logo: "mysql" },
    { name: "MongoDB", logo: "mongodb" },
    { name: "Prisma ORM", logo: "prisma" },
    { name: "Django ORM", logo: "django" },
  ],
  "DevOps & Platforms": [
    { name: "Docker", logo: "docker" },
    { name: "Vercel", logo: "vercel" },
    { name: "Netlify", logo: "netlify" },
    { name: "Render", logo: "render" },
    { name: "Shopify / Liquid", logo: "shopify" },
  ],
  "Developer Tools": [
    { name: "Git", logo: "git" },
    { name: "GitHub", logo: "github" },
    { name: "GitLab", logo: "gitlab" },
    { name: "VS Code", logo: "vscode" },
    { name: "Postman", logo: "postman" },
  ],
  "Concepts & Practices": [
    { name: "Data Structures", fa: "fa-solid fa-sitemap", color: "#16a34a" },
    { name: "Algorithms", fa: "fa-solid fa-code-branch", color: "#7c3aed" },
    { name: "System Design", fa: "fa-solid fa-diagram-project", color: "#0f766e" },
    { name: "Software Architecture", fa: "fa-solid fa-layer-group", color: "#c2410c" },
  ],
  "Soft Skills": [
    { name: "Problem Solving", fa: "fa-solid fa-puzzle-piece", color: "#2563eb" },
    { name: "Team Collaboration", fa: "fa-solid fa-handshake", color: "#16a34a" },
    { name: "Mentoring", fa: "fa-solid fa-chalkboard-user", color: "#7c3aed" },
    { name: "Leadership", fa: "fa-solid fa-compass", color: "#dc2626" },
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
      "Built responsive UI for GreySheet (USA), a coin & currency pricing platform for collectors and dealers — 15+ page modules including marketplace, cart and subscription-gated pricing tools on ASP.NET MVC 5 and Razor.",
      "Built OneSuite's multilingual SaaS marketing site with Astro, React and TypeScript — 140+ static pages, 155+ reusable components and a full SEO pipeline (JSON-LD, auto sitemaps, locale-aware Open Graph).",
      "Upgraded the Bmboo Lighting (USA) Shopify storefront — image zoom, variant swatches, sticky add-to-cart, cart drawer and free-shipping bar — refining 104 sections and 165+ snippets.",
      "Shipped across multi-environment pipelines (Dev, Beta, LiveTest, Production) as a core member of the JavaScript team, delivering features for USA and European clients under tight deadlines.",
    ],
  },
  {
    role: "🧑‍💻 Intern Software Engineer",
    organization: "Technext Limited",
    duration: "May 2024 – Jul 2024",
    details: [
      "Converted a custom design into a production Shopify storefront for DermaQuest (USA), a 20+ year professional skincare brand, with a mobile-first responsive layout.",
      "Built an international checkout with multiple payment methods, a dynamic product catalog, and SEO and performance optimisations — then converted to a full-time role.",
    ],
  },
];

/* ---------- Leadership & Activities (university) ---------- */
export const activities = [
  {
    role: "Vice President",
    organization: "SEC Programming Club",
    duration: "Feb 2023 – Feb 2024",
    icon: "fa-solid fa-code",
    description:
      "Led club operations, organised programming contests and training sessions, and mentored students in competitive programming.",
  },
  {
    role: "Vice President",
    organization: "SEC CSE Society",
    duration: "Jun 2023 – Jun 2024",
    icon: "fa-solid fa-people-group",
    description:
      "Organised academic events and technical seminars, and coordinated departmental activities between students and faculty.",
  },
  {
    role: "Programming Workshop Instructor",
    organization: "ACM Lab, Sylhet Engineering College",
    duration: "Mar 2020 – Apr 2024",
    icon: "fa-solid fa-chalkboard-user",
    description:
      "Taught data structures, algorithms and competitive programming to undergraduates, and trained teams for NCPC and ICPC regionals.",
  },
  {
    role: "Problem Setter & Judge",
    organization: "CSE Day 2024, Sylhet Engineering College",
    duration: "Feb 2024",
    icon: "fa-solid fa-gavel",
    description:
      "Designed algorithmic problems, prepared test cases, and judged the CSE Day 2024 programming contest.",
  },
];

/* ---------- Projects ----------
   category: "client" (built at Technext) or "personal".
   highlights: up to 3 short bullets shown under the description. */
export const projects = [
  {
    category: "personal",
    name: "Sunnah Cure",
    projectType: "Full Stack · Appointment Booking Platform",
    description:
      "A full-stack Islamic medicine platform with 3 role-based dashboards, 34 pages and 40+ REST API endpoints covering the complete appointment lifecycle.",
    highlights: [
      "JWT auth, FSM appointment states, Stripe + bKash/Nagad payments",
      "4-step health assessment, real-time chat via Pusher, Django-signal notifications",
      "Bilingual (English/Bengali), deployed on Vercel + Render with Neon PostgreSQL",
    ],
    languages:
      "Next.js | Django REST Framework | PostgreSQL | Neon | JWT | Stripe | bKash / Nagad | Pusher",
    image: `${PUBLIC}/images/projectImages/sunnah-cure.jpg`,
    deployedLink: "https://sunnah-cure.vercel.app/",
    sourceCodeLink: "https://github.com/tanjilahmed12345/sunnah-cure",
  },
  {
    category: "personal",
    name: "MoneyPilot",
    projectType: "Full Stack · Personal Finance Dashboard",
    description:
      "An all-in-one finance dashboard for expenses, budgets, savings goals, net worth and a lend/borrow ledger, with an app-like feel thanks to optimistic UI.",
    highlights: [
      "Client-first Zustand state synced to PostgreSQL in the background",
      "AI spending insights, auto merchant categorisation, anomaly detection, CSV import",
      "Dark/light themes, multi-currency, PDF export, calendar view, JWT-protected API",
    ],
    languages: "Next.js | TypeScript | PostgreSQL | Prisma | Zustand | JWT",
    image: `${PUBLIC}/images/projectImages/moneypilot.jpg`,
    deployedLink: "https://money-pilot-orcin.vercel.app/auth",
    sourceCodeLink: "https://github.com/tanjilahmed12345/money-pilot",
  },
  {
    category: "personal",
    name: "Pharma Nest BD",
    projectType: "Full Stack · Online Pharmacy Platform",
    description:
      "A production-ready pharmacy e-commerce platform with medicine browsing, OTC/Rx filtering, cart, coupons and a 7-stage order lifecycle from pending to delivered.",
    highlights: [
      "Prescription upload with pharmacist review; bKash, Nagad, Rocket and COD payments",
      "Bilingual UI with Division → District → Upazila address hierarchy",
      "Layered architecture (services → repositories → API → Prisma), Zod, 40+ endpoints",
    ],
    languages: "Next.js | TypeScript | PostgreSQL | Prisma | Zustand | Zod | JWT",
    image: `${PUBLIC}/images/projectImages/pharma-nest-bd.jpg`,
    deployedLink: "https://pharma-nest-bd.vercel.app/",
    sourceCodeLink: "https://github.com/tanjilahmed12345/pharma-nest-bd",
  },
  {
    category: "personal",
    name: "Uni Cover Page Generator",
    projectType: "Frontend · University Assignment Tool",
    description:
      "A client-side tool that generates university assignment cover pages with 25 design templates across 5 categories and a real-time A4 live preview.",
    highlights: [
      "PDF / PNG / JPG / WEBP export via html2canvas and jsPDF",
      "Per-field visibility toggles, independent fonts, logo upload, 3 layout modes",
      "3 custom hooks for form, templates and export — zero backend",
    ],
    languages: "React | TypeScript | Vite | Tailwind CSS | jsPDF | html2canvas",
    image: `${PUBLIC}/images/projectImages/cover-page-generator.jpg`,
    deployedLink: "https://cover-page-generator-blush.vercel.app/",
    sourceCodeLink: "https://github.com/tanjilahmed12345/uni-cover-page-generator",
  },
  {
    category: "client",
    name: "GreySheet",
    projectType: "Client · USA — Coin & Currency Pricing Platform",
    description:
      "Responsive UI for a pricing platform used by coin and currency collectors and dealers, spanning 15+ page modules with real-time API data.",
    highlights: [
      "Marketplace, shopping cart and subscription-gated pricing tool interfaces",
      "Mobile-first layouts for API pricing, dealer directory, news and publications",
      "Consistent UI across Dev, Beta, LiveTest and Production environments",
    ],
    languages: "ASP.NET MVC 5 | Razor | Bootstrap | jQuery | ApexCharts",
    image: `${PUBLIC}/images/projectImages/greysheet.png`,
    deployedLink: "https://www.greysheet.com/",
    sourceCodeLink: null,
  },
  {
    category: "client",
    name: "OneSuite",
    projectType: "SaaS Product — Multilingual Marketing Website",
    description:
      "A multilingual marketing site for a SaaS platform with a dual i18n system serving 140+ static pages, built for speed and search visibility.",
    highlights: [
      "155+ reusable components covering 9 features and 7 competitor comparison pages",
      "SEO pipeline: Sheets-driven metadata, JSON-LD, auto sitemaps, locale-aware OG tags",
      "Astro SSG with zero-JS-by-default pages, GSAP/Motion animations, React islands",
    ],
    languages: "Astro | React | TypeScript | Tailwind CSS | GSAP | i18n",
    image: `${PUBLIC}/images/projectImages/onesuite.jpg`,
    deployedLink: "https://onesuite.io/",
    sourceCodeLink: null,
  },
  {
    category: "client",
    name: "Bmboo Lighting",
    projectType: "Client · USA — Shopify Storefront",
    description:
      "Conversion-focused upgrades to a lighting brand's Shopify store, with richer product pages and smoother cart interactions to reduce drop-off.",
    highlights: [
      "Image zoom, variant swatches, sticky add-to-cart and spec toggles",
      "Tuned spacing and typography across 104 sections and 165+ snippets",
      "Category collection templates, quick view, cart drawer, free-shipping progress bar",
    ],
    languages: "Shopify | Liquid | JavaScript | CSS",
    image: `${PUBLIC}/images/projectImages/bmboo-lighting.png`,
    deployedLink: "https://bmboo-lighting.com/",
    sourceCodeLink: null,
  },
  {
    category: "client",
    name: "DermaQuest",
    projectType: "Client · USA — Skincare E-commerce Store",
    description:
      "A custom design turned into a production Shopify storefront for a professional skincare brand with 20+ years in business and a global customer base.",
    highlights: [
      "Mobile-first responsive layout and a dynamic, easy-to-navigate catalog",
      "International checkout with multiple payment methods",
      "SEO and performance optimisation for fast loads and organic visibility",
    ],
    languages: "Shopify | Liquid | JavaScript | CSS",
    image: `${PUBLIC}/images/projectImages/dermaquest.jpg`,
    deployedLink: "https://dermaquestinc.com/",
    sourceCodeLink: null,
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
        <span className="highlight1">1678</span> and <span className="highlight1">1,850+</span> problems solved.
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
        Graduated <span className="highlight2">With Distinction</span> — CGPA{" "}
        <span className="highlight1">3.80/4.00</span> in Computer Science &amp; Engineering.
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
