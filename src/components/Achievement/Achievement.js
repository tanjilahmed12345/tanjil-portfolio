import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations
import "./AchievementCSS.css";

import { achievements as achievementsData } from "../../data/portfolio";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Achievements = () => {
  return (
    <div id="Achievement" className="achievements-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <i className="fa-solid fa-medal section-icon"></i> Achievements
      </motion.h2>

      <div className="achievements-container">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-item"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
          >
            <i className="fa-solid fa-award achievement-icon"></i>
            <p className="achievement-text">
              {achievement.text}{" "}
              {achievement.link && (
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="achievement-link"
              >
                [Link]
              </a>
              )}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;