/**
 * ProjectCard
 *
 * One project: text on one side, a mock browser window with the screenshot
 * on the other (sides alternate by `index`). Tall screenshots scroll inside
 * the 16:10 frame on hover; the scroll distance is measured once the image
 * loads and passed to CSS as --scroll.
 */
import { useState } from "react";
import { motion } from "framer-motion";

import "./ProjectCard.css";

/** Width:height of the screenshot frame. */
const FRAME_RATIO = 16 / 10;

/** Below this many % of hidden image, hover-scrolling is not worth it. */
const MIN_SCROLL_PCT = 2;

/** "https://www.example.com/x" -> "example.com" (shown in the fake URL bar). */
const hostOf = (url) => {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return "";
  }
};

/**
 * @param {object} props  A project from src/data/projects.js, plus:
 * @param {number} props.index Position in the list (odd = image on the left).
 * @param {string} props.languages Tech stack separated by "|".
 * @param {"client"|"personal"} props.category
 */
const ProjectCard = ({
  sourceCodeLink,
  deployedLink,
  name,
  description,
  languages,
  image,
  index,
  projectType,
  highlights,
  category,
}) => {
  const isImageLeft = index % 2 !== 0;
  const deployedLabel = category === "client" ? "Visit Site ↗" : "Live Demo ↗";
  const primaryLink = deployedLink || sourceCodeLink || "";
  const host = hostOf(primaryLink);

  // How far the screenshot can scroll inside the frame (as % of its height).
  const [scrollPct, setScrollPct] = useState(0);
  const handleImageLoad = (event) => {
    const { naturalWidth: w, naturalHeight: h } = event.currentTarget;
    if (!w || !h) return;
    const visibleFraction = w / FRAME_RATIO / h;
    setScrollPct(Math.max(0, (1 - visibleFraction) * 100));
  };
  const canScroll = scrollPct > MIN_SCROLL_PCT;

  return (
    <motion.div
      className={`project-card ${isImageLeft ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="project-content">
        {/* Text side */}
        <div className="project-details">
          <p className="project-subtitle">{projectType}</p>
          <h3 className="project-title">{name}</h3>
          <p>{description}</p>
          {highlights?.length > 0 && (
            <ul className="project-highlights">
              {highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
          <div className="tech-tags">
            {languages.split("|").map((lang, tagIndex) => (
              <motion.span
                key={lang.trim()}
                className="tech-tag"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + tagIndex * 0.04 }}
              >
                {lang.trim()}
              </motion.span>
            ))}
          </div>
          <div className="project-buttons">
            {deployedLink && (
              <motion.a
                href={deployedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn shine-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {deployedLabel}
              </motion.a>
            )}
            {sourceCodeLink && (
              <motion.a
                href={sourceCodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn shine-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub ↗
              </motion.a>
            )}
          </div>
        </div>

        {/* Screenshot side: a mock browser window */}
        <div className="project-image">
          <a
            className="browser-frame"
            href={primaryLink || undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${name}`}
            tabIndex={-1}
          >
            <div className="browser-bar">
              <span className="browser-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="browser-url">
                <i className="fa-solid fa-lock" aria-hidden="true" /> {host}
              </span>
              <span className={`browser-badge ${category || ""}`}>
                {category === "client" ? "Client" : "Personal"}
              </span>
            </div>
            <div
              className={`browser-view ${canScroll ? "can-scroll" : ""}`}
              style={{ "--scroll": `-${scrollPct}%` }}
            >
              <img
                src={image}
                alt={`${name} screenshot`}
                loading="lazy"
                decoding="async"
                onLoad={handleImageLoad}
              />
              {canScroll && (
                <span className="scroll-hint" aria-hidden="true">
                  <i className="fa-solid fa-computer-mouse" /> Hover to scroll
                </span>
              )}
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
