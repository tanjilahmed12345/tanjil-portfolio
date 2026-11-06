/**
 * Projects
 *
 * Filterable project list. Tabs ("All", "Client Work", "Personal Projects")
 * show a count and slide a shared highlight pill between them; switching tabs
 * cross-fades the intro line and the cards. Data: src/data/projects.js.
 */
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import { projects } from "../../../data";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

/** Filter tabs. `key` matches a project's `category` ("all" shows everything). */
const FILTERS = [
  { key: "all", label: "All", icon: "fa-solid fa-layer-group" },
  { key: "client", label: "Client Work", icon: "fa-solid fa-briefcase" },
  { key: "personal", label: "Personal Projects", icon: "fa-solid fa-code" },
];

/** Intro sentence shown under the tabs for each filter. */
const INTRO = {
  all: "Production work shipped for clients in the USA & Europe, plus full-stack products I've built end-to-end.",
  client:
    "Built at Technext Limited for clients in the USA: pricing platforms, a multilingual SaaS site and Shopify storefronts.",
  personal: "Full-stack products I designed, built and deployed myself. All live and open source.",
};

const projectsFor = (filterKey) =>
  filterKey === "all" ? projects : projects.filter((p) => p.category === filterKey);

/** Project count per filter, computed once. */
const COUNTS = Object.fromEntries(FILTERS.map((f) => [f.key, projectsFor(f.key).length]));

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const visibleProjects = projectsFor(filter);

  return (
    <div id="projects" className="projects-section">
      <h2>
        <i className="fas fa-project-diagram" /> Projects
      </h2>

      {/* Filter tabs */}
      <LayoutGroup id="project-filters">
        <div className="project-filters" role="tablist" aria-label="Filter projects">
          {FILTERS.map((f) => {
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
                  <i className={f.icon} aria-hidden="true" /> {f.label}
                  <span className="project-filter-count">{COUNTS[f.key]}</span>
                </span>
              </button>
            );
          })}
        </div>
      </LayoutGroup>

      {/* Intro line for the active filter */}
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

      {/* Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          className="projects-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.3 }}
        >
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.name} index={index} {...project} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
