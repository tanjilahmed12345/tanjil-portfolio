# Tanjil Ahmed: Portfolio

Personal portfolio of **Tanjil Ahmed**, Full-Stack Software Engineer (Sylhet, Bangladesh).
Built with React 18, framer-motion and three.js. Light/dark theme, fully responsive.
Live at **https://tanjilahmed.vercel.app**.

> UI and design adapted from [Yogesh Saini's portfolio](https://github.com/saini-yogesh/Portfolio).

## Scripts

```bash
npm install
npm run dev            # local dev server, http://localhost:3000
npm run build          # production build into /build
npm run lint           # ESLint, fails on any warning
npm run format         # Prettier: format src/
npm run format:check   # Prettier: verify formatting (CI-friendly)
```

## Project structure

```
src/
├── index.jsx                 Entry point: global styles, ThemeProvider, <App/>
├── App.jsx                   Page shell; below-the-fold sections are lazy-loaded (SECTIONS list)
│
├── data/                     ALL site content: text, links, images. Edit here, not in components.
│   ├── index.js              Re-exports every data module (import { projects } from "../../../data")
│   ├── profile.js            Name, title, links, résumé, hero text
│   ├── about.jsx             About Me story, facts and stats
│   ├── education.js  skills.js  experience.js  projects.js  publications.js
│   ├── achievements.jsx  activities.js  codingProfiles.js  tapeWords.js
│   ├── navigation.js         Navbar links (href must match a section id)
│   ├── contact.js            EmailJS keys (from env vars)
│   └── paths.js              PUBLIC_URL helper for /public assets
│
├── components/
│   ├── layout/               Page chrome: Navbar, Footer, Background, LoadingScreen, ScrollToTopButton
│   ├── sections/             One folder per page section, in page order:
│   │                         Hero, About, Education, Skills, Tape, Experience, Projects
│   │                         (+ ProjectCard), Publications, Achievements, Activities,
│   │                         CodingProfiles, Contact
│   └── ui/                   Reusable pieces: LazyMount, CountUp, TypingEffect, TechGlobe
│
├── context/ThemeContext.jsx  Dark/light theme state, persisted in localStorage
├── hooks/usePageLoader.js    How long the intro loader stays visible
├── utils/
│   ├── motion.js             Shared framer-motion variants and reduced-motion check
│   └── formatDuration.js     "Feb 2023 – Present" -> "2 yrs 9 mos"
└── styles/global.css         Reset, theme variables, shared heading/button styles
```

### Conventions

| Thing | Convention | Example |
| --- | --- | --- |
| Component folder + file | PascalCase, one component per folder, CSS beside it | `sections/Projects/Projects.jsx`, `Projects.css` |
| Files containing JSX | `.jsx` | `About.jsx`, `about.jsx` (data with JSX) |
| Hooks | `useSomething.js` | `usePageLoader.js` |
| Data / utils modules | camelCase | `codingProfiles.js`, `formatDuration.js` |
| Section `id`s / anchors | kebab-case | `#coding-profiles` |
| CSS classes | kebab-case, prefixed by component | `.project-card`, `.about-stat` |
| Images in `public/images` | kebab-case folders and files | `images/tech-globe/react-original.svg` |
| Module-level constants | UPPER_SNAKE_CASE | `SECTIONS`, `PREVIEW_BULLETS` |

Every file starts with a short header comment describing what it does. Formatting is
enforced by Prettier (`.prettierrc.json`) and linting by ESLint (`react-app` config).

**CSS load order matters:** `global.css` is imported first in `index.jsx` so component
styles (loaded later through `App`) win over global rules of the same specificity.

## Editing content

| What | Where |
| --- | --- |
| Name, links, hero text, résumé link | `src/data/profile.js` |
| Any section's content | the matching file in `src/data/` |
| Profile photo | `public/images/profile.jpg` (square, ≥ 600×600) |
| Project screenshots | `public/images/projects/*` (auto-refreshed by the GitHub Action below) |
| Skill logos | `public/images/skills/<logo>.svg` (referenced by `logo` in `skills.js`) |
| 3D globe logos | `public/images/tech-globe/` + `ICON_FILES` in `components/ui/TechGlobe/TechGlobe.jsx` |
| Résumé PDF | `public/Tanjil_Ahmed_Resume.pdf` (source: `resume/Tanjil_Ahmed_Resume.tex`) |
| SEO tags, JSON-LD | `public/index.html` |

## Contact form (optional)

The form uses [EmailJS](https://www.emailjs.com). Until keys are set, "Submit" opens the
visitor's mail app pre-addressed to you.

1. Create an EmailJS service and a template using `{{user_name}}`, `{{user_email}}`,
   `{{subject}}`, `{{message}}`.
2. `cp .env.example .env` and fill in the three `REACT_APP_EMAILJS_*` values
   (on Vercel: Project → Settings → Environment Variables).

## Deployment

The Vercel project is linked to this repo: every push to `main` builds and deploys
automatically (`vercel.json`). The `build/` folder is not committed.

`.github/workflows/screenshots.yml` runs `scripts/screenshots.mjs` (Playwright) to
refresh project screenshots in `public/images/projects/`.
