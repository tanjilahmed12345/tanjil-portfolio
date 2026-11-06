import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import "./ProjectCSS.css";
import Projectitem from "./Projectitem";
import { projects as projectData } from "../../data/portfolio";

const FILTERS = [
  { key: "all", label: "All", icon: "fa-solid fa-layer-group" },
  { key: "client", label: "Client Work", icon: "fa-solid fa-briefcase" },
  { key: "personal", label: "Personal Projects", icon: "fa-solid fa-code" },
];

const INTRO = {
  all: "Production work shipped for clients in the USA & Europe, plus full-stack products I've built end-to-end.",
  client: "Built at Technext Limited for clients in the USA: pricing platforms, a multilingual SaaS site and Shopify storefronts.",
  personal: "Full-stack products I designed, built and deployed myself. All live and open source.",
};

const Project = () => {
  const [filter, setFilter] = useState("all");
  const visible =
    filter === "all"
      ? projectData
      : projectData.filter((p) => p.category === filter);

  return (
    <div id="Projects" className="projects-section">
      <h2>
        <i className="fas fa-project-diagram"></i> Projects
      </h2>

      <LayoutGroup id="project-filters">
        <div className="project-filters" role="tablist" aria-label="Filter projects">
          {FILTERS.map((f) => {
            const count =
              f.key === "all"
                ? projectData.length
                : projectData.filter((p) => p.category === f.key).length;
            const active = filter === f.key;
            return (
              <button
                key={f.key}
                type="button"
                role="tab"
                aria-selected={active}
                className={`project-filter ${active ? "active" : ""}`}
                onClick={() => setFilter(f.key)}
              >
                {active && (
                  <motion.span
                    layoutId="filter-pill"
                    className="project-filter-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="project-filter-label">
                  <i className={f.icon} aria-hidden="true"></i> {f.label}
                  <span className="project-filter-count">{count}</span>
                </span>
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      <AnimatePresence mode="wait">
        <motion.p
          key={filter}
          className="projects-intro"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
        >
          {INTRO[filter]}
        </motion.p>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          className="projects-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3 }}
        >
          {visible.map((project, index) => (
            <Projectitem
              key={project.name}
              index={index}
              name={project.name}
              description={project.description}
              highlights={project.highlights}
              languages={project.languages}
              image={project.image}
              category={project.category}
              sourceCodeLink={project.sourceCodeLink}
              deployedLink={project.deployedLink}
              deployedLabel={project.category === "client" ? "Visit Site ↗" : "Live Demo ↗"}
              projectType={project.projectType}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Project;
