/**
 * Skills grouped by category.
 *
 * Each item has either:
 *   logo  - file name (without .svg) in public/images/skills/, an official brand mark
 *   fa    - a Font Awesome class for concepts and soft skills, drawn on `color`
 */
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
