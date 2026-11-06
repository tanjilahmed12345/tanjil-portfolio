/**
 * Projects shown in the Projects section.
 *
 * category    "client" (built at Technext) or "personal"; drives the filter tabs
 * highlights  up to 3 short bullets under the description
 * image       screenshot in public/images/projects/ (refreshed by the
 *             "Project screenshots" GitHub Action)
 */
import { PUBLIC_URL } from "./paths";

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
    image: `${PUBLIC_URL}/images/projects/sunnah-cure.jpg`,
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
    image: `${PUBLIC_URL}/images/projects/moneypilot.jpg`,
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
    image: `${PUBLIC_URL}/images/projects/pharma-nest-bd.jpg`,
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
      "3 custom hooks for form, templates and export, with zero backend",
    ],
    languages: "React | TypeScript | Vite | Tailwind CSS | jsPDF | html2canvas",
    image: `${PUBLIC_URL}/images/projects/cover-page-generator.jpg`,
    deployedLink: "https://cover-page-generator-blush.vercel.app/",
    sourceCodeLink: "https://github.com/tanjilahmed12345/uni-cover-page-generator",
  },
  {
    category: "client",
    name: "GreySheet",
    projectType: "Client · USA · Coin & Currency Pricing Platform",
    description:
      "Responsive UI for a pricing platform used by coin and currency collectors and dealers, spanning 15+ page modules with real-time API data.",
    highlights: [
      "Marketplace, shopping cart and subscription-gated pricing tool interfaces",
      "Mobile-first layouts for API pricing, dealer directory, news and publications",
      "Consistent UI across Dev, Beta, LiveTest and Production environments",
    ],
    languages: "ASP.NET MVC 5 | Razor | Bootstrap | jQuery | ApexCharts",
    image: `${PUBLIC_URL}/images/projects/greysheet.png`,
    deployedLink: "https://www.greysheet.com/",
    sourceCodeLink: null,
  },
  {
    category: "client",
    name: "OneSuite",
    projectType: "SaaS Product · Multilingual Marketing Website",
    description:
      "A multilingual marketing site for a SaaS platform with a dual i18n system serving 140+ static pages, built for speed and search visibility.",
    highlights: [
      "155+ reusable components covering 9 features and 7 competitor comparison pages",
      "SEO pipeline: Sheets-driven metadata, JSON-LD, auto sitemaps, locale-aware OG tags",
      "Astro SSG with zero-JS-by-default pages, GSAP/Motion animations, React islands",
    ],
    languages: "Astro | React | TypeScript | Tailwind CSS | GSAP | i18n",
    image: `${PUBLIC_URL}/images/projects/onesuite.jpg`,
    deployedLink: "https://onesuite.io/",
    sourceCodeLink: null,
  },
  {
    category: "client",
    name: "Bmboo Lighting",
    projectType: "Client · USA · Shopify Storefront",
    description:
      "Conversion-focused upgrades to a lighting brand's Shopify store, with richer product pages and smoother cart interactions to reduce drop-off.",
    highlights: [
      "Image zoom, variant swatches, sticky add-to-cart and spec toggles",
      "Tuned spacing and typography across 104 sections and 165+ snippets",
      "Category collection templates, quick view, cart drawer, free-shipping progress bar",
    ],
    languages: "Shopify | Liquid | JavaScript | CSS",
    image: `${PUBLIC_URL}/images/projects/bmboo-lighting.png`,
    deployedLink: "https://bmboo-lighting.com/",
    sourceCodeLink: null,
  },
  {
    category: "client",
    name: "DermaQuest",
    projectType: "Client · USA · Skincare E-commerce Store",
    description:
      "A custom design turned into a production Shopify storefront for a professional skincare brand with 20+ years in business and a global customer base.",
    highlights: [
      "Mobile-first responsive layout and a dynamic, easy-to-navigate catalog",
      "International checkout with multiple payment methods",
      "SEO and performance optimisation for fast loads and organic visibility",
    ],
    languages: "Shopify | Liquid | JavaScript | CSS",
    image: `${PUBLIC_URL}/images/projects/dermaquest.jpg`,
    deployedLink: "https://dermaquestinc.com/",
    sourceCodeLink: null,
  },
];
