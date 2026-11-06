import React, { useState } from "react";
import "./ProjectCSS.css";
import Projectitem from "./Projectitem";
import { projects as projectData } from "../../data/portfolio";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "client", label: "Client Work" },
  { key: "personal", label: "Personal Projects" },
];

const Project = () => {
  const [filter, setFilter] = useState("all");
  const visible =
    filter === "all"
      ? projectData
      : projectData.filter((p) => p.category === filter);

  return (
    <>
      <div id="Projects" className="projects-section">
        <h2>
          <i className="fas fa-project-diagram"></i> Projects
        </h2>

        <div className="project-filters" role="tablist" aria-label="Filter projects">
          {FILTERS.map((f) => {
            const count =
              f.key === "all"
                ? projectData.length
                : projectData.filter((p) => p.category === f.key).length;
            return (
              <button
                key={f.key}
                type="button"
                role="tab"
                aria-selected={filter === f.key}
                className={`project-filter ${filter === f.key ? "active" : ""}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label} <span className="project-filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="projects-container">
          {visible.map((project, index) => (
            <Projectitem
              key={`${filter}-${project.name}`}
              index={index}
              name={project.name}
              description={project.description}
              highlights={project.highlights}
              languages={project.languages}
              image={project.image}
              sourceCodeLink={project.sourceCodeLink}
              deployedLink={project.deployedLink}
              deployedLabel={project.category === "client" ? "Visit Site ↗" : "Live Demo ↗"}
              projectType={project.projectType}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
