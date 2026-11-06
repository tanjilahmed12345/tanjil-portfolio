/**
 * CodingProfiles
 *
 * Row of clickable logos for competitive-programming and developer
 * profiles. Entries without a link in src/data/codingProfiles.js are hidden.
 */
import { motion } from "framer-motion";

import { codingProfiles } from "../../../data";
import "./CodingProfiles.css";

const VISIBLE_PROFILES = codingProfiles.filter((p) => p.link);

const CodingProfiles = () => (
  <div id="coding-profiles" className="coding-profiles-section">
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <i className="fa-solid fa-code" /> My Coding Profiles
    </motion.h2>

    <motion.div
      className="coding-profiles-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "linear" }}
    >
      {VISIBLE_PROFILES.map((item, index) => (
        <motion.a
          key={item.name}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="coding-profile-link"
          aria-label={item.name}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 * index }}
        >
          <img
            draggable="false"
            src={item.icon}
            alt={item.name}
            className="coding-profile-icon"
            loading="lazy"
            decoding="async"
            width={64}
            height={64}
          />
        </motion.a>
      ))}
    </motion.div>
  </div>
);

export default CodingProfiles;
