import React from "react";
import { motion } from "framer-motion";
import "./CodingProfileCSS.css";

import { codingProfiles as allProfiles } from "../../data/portfolio";

const CodingProfilesSection = () => {
  const codingProfiles = allProfiles.filter((p) => p.link);

  return (
    <div id="Coding-profiles" className="coding-profiles-section">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <i className="fa-solid fa-code"></i> My Coding Profiles
      </motion.h2>

      <motion.div
        className="coding-profiles-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "linear",
        }}
      >
        {codingProfiles.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="coding-profile-link"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.1 * index,
            }}
          >
            <img
              draggable="false"
              src={profile.icon}
              alt={profile.name}
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
};

export default CodingProfilesSection;
