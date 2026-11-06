import React from "react";
import "./AboutMeCSS.css";
import { motion } from "framer-motion";

import { profile, about } from "../../data/portfolio";

const profileImage = profile.photo;

const AboutMe = () => {
  return (
    <>
      <div id="AboutMe" className="about-section">
        <div className="about-container">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <h1>
              <i className="fa-regular fa-user"></i> About Me
            </h1>
            <p>{about}</p>
          </motion.div>
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 80,
              damping: 11
            }}
          >
            <motion.img
              src={profileImage}
              alt={`${profile.name} — Software Engineer`}
              draggable="false"
              loading="lazy"
              decoding="async"
              width={400}
              height={400}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
