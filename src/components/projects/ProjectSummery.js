import React from "react";

const ProjectSummery = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content green-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>{project.content}</p>
        <p className="green-text">5th May, 5pm</p>
      </div>
    </div>
  );
};

export default ProjectSummery;
