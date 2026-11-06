/**
 * Publications
 *
 * Paper cards linking to the published version. The owner's name is
 * highlighted in the author list. Data: src/data/publications.js.
 */
import { Fragment } from "react";
import { motion } from "framer-motion";

import { profile, publications } from "../../../data";
import { headingFadeIn, revealOnce, riseInSpring } from "../../../utils/motion";
import "./Publications.css";

/** Renders "A, B, C" with the portfolio owner's name in bold. */
const AuthorList = ({ authors }) => {
  const names = authors.split(", ");
  return names.map((name, i) => (
    <Fragment key={name}>
      {name.startsWith(profile.name) ? <b>{name}</b> : name}
      {i < names.length - 1 ? ", " : ""}
    </Fragment>
  ));
};

const Publications = () => (
  <div id="publications" className="publications-section">
    <motion.h2 {...headingFadeIn(0.8)}>
      <i className="fa-solid fa-book-open" /> Publications
    </motion.h2>

    <div className="publications-container">
      {publications.map((pub, index) => (
        <motion.a
          key={pub.link || index}
          href={pub.link}
          target="_blank"
          rel="noopener noreferrer"
          className="publication-item"
          variants={riseInSpring}
          initial="hidden"
          whileInView="visible"
          viewport={revealOnce}
        >
          <div className="publication-badge">
            <i className="fa-solid fa-file-lines" /> IEEE
          </div>
          <h3 className="publication-title">{pub.title}</h3>
          <p className="publication-authors">
            <AuthorList authors={pub.authors} />
          </p>
          <div className="publication-footer">
            <span className="publication-venue">{pub.venue}</span>
            <span className="publication-link">Read paper ↗</span>
          </div>
        </motion.a>
      ))}
    </div>
  </div>
);

export default Publications;
