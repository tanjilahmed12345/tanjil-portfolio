/**
 * Education
 *
 * One card per degree/school: institute and location on the first row,
 * degree and years on the second. Data: src/data/education.js.
 */
import { motion } from "framer-motion";

import { education } from "../../../data";
import { headingFadeIn, revealOnce, riseInSpringWithHover } from "../../../utils/motion";
import "./Education.css";

const Education = () => (
  <div id="education" className="education-section">
    <motion.h2 {...headingFadeIn(1)}>
      <i className="fa-solid fa-user-graduate" /> Education
    </motion.h2>

    <div className="education-list">
      {education.map((item) => (
        <motion.div
          key={`${item.institute}-${item.degree}`}
          className="education-item"
          variants={riseInSpringWithHover}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={revealOnce}
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

export default Education;
