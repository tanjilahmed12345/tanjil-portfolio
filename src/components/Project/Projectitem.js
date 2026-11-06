import { useState } from "react";
import { motion } from "framer-motion";
import "./ProjectItemCSS.css";

const hostOf = (url) => {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return "";
  }
};

const Projectitem = (props) => {
  const {
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
    deployedLabel = "Live Demo ↗",
  } = props;
  const isImageLeft = index % 2 !== 0;

  // How far the screenshot can scroll inside the 16:10 frame (as % of its height).
  const [scrollPct, setScrollPct] = useState(0);
  const onImgLoad = (e) => {
    const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
    if (!w || !h) return;
    const visible = (w * 10) / 16 / h; // fraction of the image shown in the frame
    setScrollPct(Math.max(0, (1 - visible) * 100));
  };
  const canScroll = scrollPct > 2;
  const host = hostOf(deployedLink || sourceCodeLink || "");

  return (
    <motion.div
      className={`project-card ${isImageLeft ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="project-content">
        <div className="project-details">
          <p className="project-subtitle">— {projectType}</p>
          <h3 className="project-title">{name}</h3>
          <p>{description}</p>
          {highlights && highlights.length > 0 && (
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

        <div className="project-image">
          <a
            className="browser-frame"
            href={deployedLink || sourceCodeLink || undefined}
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
                <i className="fa-solid fa-lock" aria-hidden="true"></i> {host}
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
                onLoad={onImgLoad}
              />
              {canScroll && (
                <span className="scroll-hint" aria-hidden="true">
                  <i className="fa-solid fa-computer-mouse"></i> Hover to scroll
                </span>
              )}
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Projectitem;
