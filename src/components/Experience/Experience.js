import React, { useState } from "react";
import "./ExperienceCSS.css";
import { motion } from "framer-motion";
import { experience as experienceData } from "../../data/portfolio";

const calculateDuration = (durationStr) => {
  const monthMap = {
    jan: 0,
    january: 0,
    feb: 1,
    february: 1,
    mar: 2,
    march: 2,
    apr: 3,
    april: 3,
    may: 4,
    jun: 5,
    june: 5,
    jul: 6,
    july: 6,
    aug: 7,
    august: 7,
    sep: 8,
    september: 8,
    oct: 9,
    october: 9,
    nov: 10,
    november: 10,
    dec: 11,
    december: 11,
  };

  const parts = durationStr.split(/[–\-\u2013\u2014]/).map((s) => s.trim());
  if (parts.length !== 2) return "";

  const parsePart = (part) => {
    if (part.toLowerCase() === "present") {
      const now = new Date();
      return { year: now.getFullYear(), month: now.getMonth() };
    }
    const match = part.match(/([a-zA-Z]+)\s+(\d{4})/);
    if (!match) return null;
    const monthStr = match[1].toLowerCase().substring(0, 3);
    const year = parseInt(match[2], 10);
    const month = monthMap[monthStr] !== undefined ? monthMap[monthStr] : 0;
    return { year, month };
  };

  const start = parsePart(parts[0]);
  const end = parsePart(parts[1]);

  if (!start || !end) return "";

  const totalMonths =
    (end.year - start.year) * 12 + (end.month - start.month) + 1;
  if (totalMonths <= 0) return "";

  const yrs = Math.floor(totalMonths / 12);
  const mos = totalMonths % 12;

  const partsArray = [];
  if (yrs > 0) {
    partsArray.push(`${yrs} yr${yrs > 1 ? "s" : ""}`);
  }
  if (mos > 0) {
    partsArray.push(`${mos} mo${mos > 1 ? "s" : ""}`);
  }

  return partsArray.join(" ");
};

const Experience = () => {
  const experiences = experienceData;

  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section id="Experience" className="experience-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <i className="fa-solid fa-business-time"></i> Work Experience
      </motion.h2>
      <motion.div
        className="experience-timeline"
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2, // Add staggered animation for items
            },
          },
        }}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
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
              <h3>{experience.role}</h3>
              <p className="organization">{experience.organization}</p>
              <span className="duration">
                {experience.duration}
                {calculateDuration(experience.duration) &&
                  ` · ${calculateDuration(experience.duration)}`}
              </span>
              <div className="details">
                <ul className="timeline-bullets">
                  {(expanded[index]
                    ? experience.details
                    : experience.details.slice(0, 2)
                  ).map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
                {experience.details.length > 2 && (
                <span
                  className="toggle-button"
                  onClick={() => toggleExpanded(index)}
                  style={{ display: "inline-block", marginTop: "0.5rem" }}
                >
                  {expanded[index] ? "See Less" : "See More"}
                </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
