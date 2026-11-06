/**
 * Identity, contact links and shared assets used across the site
 * (hero, footer, loading screen, SEO).
 */
import { PUBLIC_URL } from "./paths";

export const profile = {
  name: "Tanjil Ahmed",
  firstName: "Tanjil",
  initials: "TA",
  title: "Full-Stack Software Engineer", // shown on loading screen
  footerSubtitle: "Full-Stack Software Engineer",
  heroTagline: "I build scalable products for the WEB",
  heroSubline:
    "Full-Stack Software Engineer working with Next.js, React, Node.js and Django. 2+ years shipping SaaS, e-commerce and web platforms for clients across the USA and Europe.",
  availability: "Open to Full-Time Roles",

  email: "ahmedtanjil12345@gmail.com",
  github: "https://github.com/tanjilahmed12345",
  linkedin: "https://www.linkedin.com/in/tanjilahmed01/",

  // Public résumé (personal details like passport no., DOB and home address
  // are removed). Replace the PDF in /public with a newer one any time.
  resume: `${PUBLIC_URL}/Tanjil_Ahmed_Resume.pdf`,

  photo: `${PUBLIC_URL}/images/profile.jpg`,
  logo: `${PUBLIC_URL}/images/logo.png`,
};
