# Tanjil Ahmed — Portfolio

Personal portfolio of **Tanjil Ahmed**, Full-Stack Software Engineer (Sylhet, Bangladesh).
Built with React, framer-motion and three.js. Light/dark theme, fully responsive.

> UI and design adapted from [Yogesh Saini's portfolio](https://github.com/saini-yogesh/Portfolio).

## Edit your content

**Everything you see on the site is in one file: `src/data/portfolio.js`.**
Open it and search for `TODO` to find the values that still need your input.

| What | Where |
| --- | --- |
| Name, links, hero text, résumé | `profile` in `src/data/portfolio.js` |
| About text, education, skills, experience, projects, publications, achievements, coding profiles | same file |
| Profile photo | `public/images/myPhoto.jpg` (square, ≥ 600×600 recommended) |
| Project screenshots | `public/images/projectImages/*.png` (≈1200×760) |
| Résumé PDF | `public/Tanjil_Ahmed_Resume.pdf` |
| Logo / favicon | `public/images/logo.png`, `public/favicon.ico`, `public/logo192.png`, `public/logo512.png` |
| 3D globe icons | `public/images/techGlobeIcons/` + list in `src/components/TechGlobe/TechGlobe.js` |
| SEO tags | `public/index.html` |

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Contact form (optional)

The form uses [EmailJS](https://www.emailjs.com). Until you add keys, "Submit" opens the visitor's
mail app pre-addressed to you.

1. Create a free EmailJS account → add an Email Service (Gmail) → create a template that uses
   `{{user_name}}`, `{{user_email}}`, `{{subject}}`, `{{message}}`.
2. `cp .env.example .env` and paste your Service ID, Template ID and Public Key.
3. Restart `npm run dev` (and rebuild before deploying).

## Deploy to GitHub Pages

1. Create a GitHub repo named **`Portfolio`** under `tanjilahmed12345`.
   *(Using another name? Change `homepage` in `package.json` and the URLs in `public/index.html`,
   `public/sitemap.xml` and `public/robots.txt` to match.)*
2. Push this code:
   ```bash
   git init && git add . && git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/tanjilahmed12345/Portfolio.git
   git push -u origin main
   ```
3. Deploy: `npm run deploy` — this builds and pushes to the `gh-pages` branch.
4. On GitHub: **Settings → Pages → Branch: `gh-pages` / root**.
   Site goes live at `https://tanjilahmed12345.github.io/Portfolio/`.

Want it at `https://tanjilahmed12345.github.io/` instead? Name the repo `tanjilahmed12345.github.io`
and set `"homepage": "https://tanjilahmed12345.github.io"`.
