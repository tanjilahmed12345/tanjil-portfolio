/**
 * Achievements
 *
 * List of awards and contest results. An item with a `link` gets a
 * "[Link]" anchor after its text. Data: src/data/achievements.jsx.
 */
import { motion } from "framer-motion";

import { achievements } from "../../../data";
import { headingFadeIn, revealOnce, riseInSpring } from "../../../utils/motion";
import "./Achievements.css";

const Achievements = () => (
  <div id="achievements" className="achievements-section">
    <motion.h2 {...headingFadeIn(0.8)}>
      <i className="fa-solid fa-medal section-icon" /> Achievements
    </motion.h2>

    <div className="achievements-container">
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          className="achievement-item"
          variants={riseInSpring}
          initial="hidden"
          whileInView="visible"
          viewport={revealOnce}
        >
          <i className="fa-solid fa-award achievement-icon" />
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

export default Achievements;
