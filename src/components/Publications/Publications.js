import React from "react";
import { motion } from "framer-motion";
import "./PublicationsCSS.css";
import { publications } from "../../data/portfolio";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Publications = () => {
  return (
    <div id="Publications" className="publications-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <i className="fa-solid fa-book-open"></i> Publications
      </motion.h2>

      <div className="publications-container">
        {publications.map((pub, index) => (
          <motion.a
            key={pub.link || index}
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="publication-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
          >
            <div className="publication-badge">
              <i className="fa-solid fa-file-lines"></i> IEEE
            </div>
            <h3 className="publication-title">{pub.title}</h3>
            <p className="publication-authors">
              {pub.authors.split(", ").map((a, i, arr) => (
                <React.Fragment key={a}>
                  {a.startsWith("Tanjil Ahmed") ? <b>{a}</b> : a}
                  {i < arr.length - 1 ? ", " : ""}
                </React.Fragment>
              ))}
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
};

export default Publications;
