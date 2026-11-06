import React from "react";
import "./ProjectCSS.css";
import Projectitem from "./Projectitem";
import { projects as projectData } from "../../data/portfolio";

const Project = () => {

  return (
    <>
      <div id="Projects" className="projects-section">
        <h2>
          <i className="fas fa-project-diagram"></i> Projects
        </h2>
        <div className="projects-container">
          {projectData.map((project, index) => (
            <Projectitem
              key={`${project.name}-${index}`}
              index={index}
              name={project.name}
              description={project.description}
              languages={project.languages}
              image={project.image}
              sourceCodeLink={project.sourceCodeLink}
              deployedLink={project.deployedLink}
              projectType={project.projectType}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
