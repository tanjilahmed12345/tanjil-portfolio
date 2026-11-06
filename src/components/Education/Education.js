import React from "react";
import { motion } from "framer-motion";
import "./EducationCSS.css";

import { education as educationData } from "../../data/portfolio";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
  hover: {
    y: -6,
    transition: { type: "spring", stiffness: 400, damping: 15 },
  },
};

const Education = () => {
  return (
    <div id="Education" className="education-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <i className="fa-solid fa-user-graduate"></i> Education
      </motion.h2>

      <div className="education-list">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="education-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ amount: 0.2, once: true }}
          >
            <div className="education-row">
              <span className="institute">{item.institute}</span>
              <span className="location">{item.location}</span>
            </div>
            <div className="education-row">
              <span className="degree">{item.degree}</span>
              <span className="year">{item.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
