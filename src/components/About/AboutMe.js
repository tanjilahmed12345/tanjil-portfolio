import React from "react";
import "./AboutMeCSS.css";
import { motion } from "framer-motion";
import { profile, about } from "../../data/portfolio";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const AboutMe = () => {
  return (
    <section id="AboutMe" className="about-section">
      <motion.h2 className="about-heading" {...fadeUp(0)}>
        <i className="fa-regular fa-user"></i> About Me
      </motion.h2>

      <div className="about-grid">
        {/* Profile card */}
        <motion.aside className="about-profile" {...fadeUp(0.05)}>
          <div className="about-photo">
            <img
              src={profile.photo}
              alt={`${profile.name}, ${profile.title}`}
              draggable="false"
              loading="lazy"
              decoding="async"
              width={400}
              height={400}
            />
          </div>
          <h3 className="about-name">{profile.name}</h3>
          <p className="about-role">{profile.title}</p>
          <span className="about-status">
            <span className="about-status-dot" aria-hidden="true" />
            {profile.availability}
          </span>
          <div className="about-links">
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="about-link primary">
              <i className="fa-solid fa-file-lines" aria-hidden="true"></i> Resume
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="about-link" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="about-link" aria-label="GitHub">
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>
            <a href={`mailto:${profile.email}`} className="about-link" aria-label="Email">
              <i className="fa-solid fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </motion.aside>

        {/* Story */}
        <div className="about-story">
          <motion.p className="about-lead" {...fadeUp(0.1)}>
            {about.lead}
          </motion.p>

          {about.paragraphs.map((para, i) => (
            <motion.p className="about-para" key={i} {...fadeUp(0.15 + i * 0.05)}>
              {para}
            </motion.p>
          ))}

          <motion.ul className="about-stats" {...fadeUp(0.25)}>
            {about.stats.map((s) => (
              <li key={s.label} className="about-stat">
                <span className="about-stat-value">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </li>
            ))}
          </motion.ul>

          <motion.dl className="about-facts" {...fadeUp(0.3)}>
            {about.facts.map((f) => (
              <div key={f.label} className="about-fact">
                <i className={f.icon} aria-hidden="true"></i>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
