# Tanjil Ahmed: Portfolio

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

## Deployment (Vercel)

Live at **https://tanjilahmed.vercel.app**. The Vercel project is linked to this
GitHub repo, so every push to `main` redeploys automatically. Nothing else to do.

For the contact form keys, add the three `REACT_APP_EMAILJS_*` variables in
Vercel → Project → Settings → Environment Variables, then redeploy.
