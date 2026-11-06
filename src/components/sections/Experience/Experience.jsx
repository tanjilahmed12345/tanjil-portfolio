/**
 * Experience
 *
 * Vertical timeline of jobs. Each card shows the role, company, date range
 * with a computed length ("1 yr 11 mos") and the first PREVIEW_BULLETS
 * bullet points; "See More" reveals the rest. Data: src/data/experience.js.
 */
import { useState } from "react";
import { motion } from "framer-motion";

import { experience } from "../../../data";
import { formatDuration } from "../../../utils/formatDuration";
import { headingFadeIn } from "../../../utils/motion";
import "./Experience.css";

/** Bullet points shown before "See More". */
const PREVIEW_BULLETS = 2;

/** One job on the timeline. Owns its own expanded/collapsed state. */
const TimelineItem = ({ job, index }) => {
  const [expanded, setExpanded] = useState(false);

  const length = formatDuration(job.duration);
  const bullets = expanded ? job.details : job.details.slice(0, PREVIEW_BULLETS);
  const canExpand = job.details.length > PREVIEW_BULLETS;

  const toggle = () => setExpanded((open) => !open);
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <motion.div
      className="timeline-item-wrapper"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 25,
        delay: 0.15 * index,
      }}
    >
      <div className="timeline-dot" />
      <div className="timeline-connector" />

      <div className="timeline-card">
        <h3>{job.role}</h3>
        <p className="organization">{job.organization}</p>
        <span className="duration">
          {job.duration}
          {length && ` · ${length}`}
        </span>

        <div className="details">
          <ul className="timeline-bullets">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>

          {canExpand && (
            <span
              className="toggle-button"
              role="button"
              tabIndex={0}
              aria-expanded={expanded}
              onClick={toggle}
              onKeyDown={handleKeyDown}
              style={{ display: "inline-block", marginTop: "0.5rem" }}
            >
              {expanded ? "See Less" : "See More"}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => (
  <section id="experience" className="experience-section">
    <motion.h2 {...headingFadeIn(0.8)}>
      <i className="fa-solid fa-business-time" /> Work Experience
    </motion.h2>

    <motion.div
      className="experience-timeline"
      initial="hidden"
      whileInView="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {experience.map((job, index) => (
        <TimelineItem key={`${job.organization}-${job.role}`} job={job} index={index} />
      ))}
    </motion.div>
  </section>
);

export default Experience;
