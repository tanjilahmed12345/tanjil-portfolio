import React from "react";
import { motion } from "framer-motion";
import "./ActivitiesCSS.css";
import { activities } from "../../data/portfolio";

const Activities = () => {
  return (
    <section id="Activities" className="activities-section">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <i className="fa-solid fa-users"></i> Leadership &amp; Activities
      </motion.h2>
      <p className="activities-intro">
        University roles at Sylhet Engineering College — leading clubs,
        teaching and running programming contests.
      </p>

      <div className="activities-grid">
        {activities.map((a, index) => (
          <motion.article
            key={`${a.role}-${a.organization}`}
            className="activity-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
          >
            <div className="activity-icon" aria-hidden="true">
              <i className={a.icon}></i>
            </div>
            <div className="activity-body">
              <div className="activity-head">
                <h3>{a.role}</h3>
                <span className="activity-date">{a.duration}</span>
              </div>
              <p className="activity-org">{a.organization}</p>
              <p className="activity-desc">{a.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Activities;
