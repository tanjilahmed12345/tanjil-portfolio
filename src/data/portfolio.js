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
// Rendered as rich text; <b> tags are allowed via JSX.
export const about = (
  <>
    Hi, I'm{" "}
    <b style={{ color: "var(--primary)", fontSize: "1.2em" }}>Tanjil Ahmed</b>{" "}
    — a <b>Full-Stack Software Engineer</b> with <b>2+ years</b> of
    experience delivering scalable web applications, <b>SaaS platforms</b>{" "}
    and <b>e-commerce solutions</b> for clients across the{" "}
    <b>USA and Europe</b>. At <b>Technext Limited</b> I worked on products
    like GreySheet, OneSuite and Shopify storefronts, and on my own I build
    end-to-end apps with <b>Next.js, React, Node.js, Django REST Framework</b>{" "}
    and <b>PostgreSQL</b>. I'm a <b>CSE graduate</b> from Sylhet Engineering
    College (CGPA <b>3.80/4.00</b>), co-author of <b>two IEEE papers</b>, and
    a competitive programmer — <b>Codeforces Expert (1678)</b>, CodeChef 3★
    and an <b>ICPC Asia Dhaka Regional</b> qualifier with{" "}
    <b>2,000+ problems</b> solved. I work comfortably in{" "}
    <b>English, Bengali, Hindi and Urdu</b>.
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
    { name: "NextUI", icon: "UI", color: "#000000", textColor: "#fff" },
    { name: "Redux", icon: "RX", color: "#764abc", textColor: "#fff" },
    { name: "Zustand", icon: "🐻", color: "#443e38", textColor: "#fff" },
    { name: "Tailwind CSS", icon: "TW", color: "#38b2ac", textColor: "#fff" },
    { name: "Bootstrap", icon: "B", color: "#563d7c", textColor: "#fff" },
    { name: "HTML5", icon: "HTML", color: "#e34f26", textColor: "#fff" },
    { name: "CSS3", icon: "CSS", color: "#1572b6", textColor: "#fff" },
    { name: "SCSS / Sass", icon: "Sass", color: "#cc6699", textColor: "#fff" },
    { name: "GSAP / Motion", icon: "✦", color: "#0ae448", textColor: "#000" },
    { name: "Axios", icon: "Ax", color: "#5a29e4", textColor: "#fff" },
  ],
  Backend: [
    { name: "Node.js", icon: "Node", color: "#3c873a", textColor: "#fff" },
    { name: "Express.js", icon: "Ex", color: "#444", textColor: "#fff" },
    { name: "Django", icon: "Dj", color: "#0c4b33", textColor: "#fff" },
    { name: "Django REST Framework", icon: "DRF", color: "#a30000", textColor: "#fff" },
    { name: "REST API Design", icon: "API", color: "#2980b9", textColor: "#fff" },
    { name: "JWT / SimpleJWT", icon: "🔐", color: "#d63aff", textColor: "#fff" },
    { name: "ASP.NET MVC / Razor", icon: ".NET", color: "#512bd4", textColor: "#fff" },
  ],
  "Databases & ORM": [
    { name: "PostgreSQL", icon: "🐘", color: "#336791", textColor: "#fff" },
    { name: "Neon / Supabase", icon: "⚡", color: "#00e599", textColor: "#000" },
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
    { name: "Shopify Themes / Liquid", icon: "🛍️", color: "#95bf47", textColor: "#fff" },
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
