/**
 * Skills
 *
 * Skills grouped by category. Each card shows a brand logo
 * (public/images/skills/<logo>.svg) or, when no logo exists, a Font Awesome
 * icon on a coloured tile. Data: src/data/skills.js.
 */
import { motion } from "framer-motion";

import { PUBLIC_URL, skills } from "../../../data";
import { headingFadeIn, revealOnce, riseInSpringWithHover } from "../../../utils/motion";
import "./Skills.css";

/** Logo image or Font Awesome fallback for one skill. */
const SkillIcon = ({ skill }) =>
  skill.logo ? (
    <div className="skill-icon skill-logo">
      <img
        src={`${PUBLIC_URL}/images/skills/${skill.logo}.svg`}
        alt=""
        width={30}
        height={30}
        loading="lazy"
        decoding="async"
        draggable="false"
      />
    </div>
  ) : (
    <div className="skill-icon skill-fa" style={{ backgroundColor: skill.color }}>
      <i className={skill.fa} aria-hidden="true" />
    </div>
  );

const Skills = () => (
  <div id="skills" className="skills-section">
    <motion.h2 {...headingFadeIn(1)}>
      <i className="fa fa-cogs" aria-hidden="true" /> Skills
    </motion.h2>

    <div className="skills-list">
      {Object.entries(skills).map(([category, items]) => (
        <div className="skill-category" key={category}>
          <h3 className="category-title">{category}</h3>

          <div className="skill-grid">
            {items.map((skill) => (
              <motion.div
                key={skill.name}
                variants={riseInSpringWithHover}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={revealOnce}
                className="skill-item group"
              >
                <div className="skill-card">
                  {/* Static bottom-right corner marks */}
                  <div className="corner-br-h" />
                  <div className="corner-br-v" />

                  <SkillIcon skill={skill} />
                  <div className="skill-name">{skill.name}</div>

                  {/* Corners that animate in on hover */}
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

export default Skills;
