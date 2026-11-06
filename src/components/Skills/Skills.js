import React from "react";
import { motion } from "framer-motion";
import "./SkillsCSS.css"; // Make sure CSS uses --skills-* variables

import { skills } from "../../data/portfolio";

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

export default function SkillGrid() {
  return (
    <div id="Skills" className="skills-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <i className="fa fa-cogs" aria-hidden="true"></i> Skills
      </motion.h2>

      <div className="skills-list">
        {Object.entries(skills).map(([category, skillItems], i) => (
          <div className="skill-category" key={category}>
            <h3 className="category-title">{category}</h3>
            <div className="skill-grid">
              {skillItems.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ amount: 0.2, once: true }}
                  className="skill-item group"
                >
                  <div className="skill-card">
                    <div className="corner-br-h"></div>
                    <div className="corner-br-v"></div>

                    {skill.logo ? (
                      <div className="skill-icon skill-logo">
                        <img
                          src={`${process.env.PUBLIC_URL || ""}/images/skillIcons/${skill.logo}.svg`}
                          alt=""
                          width={30}
                          height={30}
                          loading="lazy"
                          decoding="async"
                          draggable="false"
                        />
                      </div>
                    ) : (
                      <div
                        className="skill-icon skill-fa"
                        style={{ backgroundColor: skill.color }}
                      >
                        <i className={skill.fa} aria-hidden="true"></i>
                      </div>
                    )}
                    <div className="skill-name">{skill.name}</div>

                    {/* Animated top-left & bottom-right corners */}
                    <div className="corner-decor">
                      <div className="corner top-left-h" />
                      <div className="corner top-left-v" />
                      <div className="corner bottom-right-h" />
                      <div className="corner bottom-right-v" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
