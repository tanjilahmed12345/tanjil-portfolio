import React from "react";
import "./AboutMeCSS.css";
import { motion } from "framer-motion";
import { profile, about } from "../../data/portfolio";
import CountUp from "./CountUp";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const SOCIALS = [
  { href: profile.linkedin, icon: "fa-brands fa-linkedin-in", label: "LinkedIn" },
  { href: profile.github, icon: "fa-brands fa-github", label: "GitHub" },
  { href: "https://codeforces.com/profile/tanjil-ahmed", icon: "fa-solid fa-chart-simple", label: "Codeforces" },
  { href: `mailto:${profile.email}`, icon: "fa-solid fa-envelope", label: "Email" },
];

const AboutMe = () => {
  return (
    <section id="AboutMe" className="about-section">
      <motion.h2 className="about-heading" {...fadeUp(0)}>
        <i className="fa-regular fa-user"></i> About Me
      </motion.h2>

      <div className="about-grid">
        {/* Left: photo, quick facts, socials */}
        <motion.aside className="about-side" {...fadeUp(0.05)}>
          <div className="about-photo">
            <img
              src={profile.photo}
              alt={profile.name}
              draggable="false"
              loading="lazy"
              decoding="async"
              width={400}
              height={400}
            />
          </div>

          <dl className="about-facts">
            {about.facts.map((f) => (
              <div key={f.label} className="about-fact">
                <i className={f.icon} aria-hidden="true"></i>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="about-socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="about-social"
                aria-label={s.label}
                title={s.label}
              >
                <i className={s.icon} aria-hidden="true"></i>
              </a>
            ))}
          </div>
        </motion.aside>

        {/* Right: the story */}
        <div className="about-story">
          <motion.span className="about-eyebrow" {...fadeUp(0.1)}>
            {about.eyebrow}
          </motion.span>
          <motion.h3 className="about-title" {...fadeUp(0.12)}>
            {about.heading}
          </motion.h3>

          <ol className="about-journey">
            {about.paragraphs.map((para, i) => (
              <motion.li key={i} className="about-step" {...fadeUp(0.15 + i * 0.07)}>
                <span className="about-step-dot" aria-hidden="true" />
                <p>{para}</p>
              </motion.li>
            ))}
          </ol>

          <motion.ul className="about-stats" {...fadeUp(0.3)}>
            {about.stats.map((s) => (
              <li key={s.label} className="about-stat">
                <CountUp value={s.value} className="about-stat-value" />
                <span className="about-stat-label">{s.label}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
