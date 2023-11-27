import React from "react";

const ProjectItem = ({ name, about, technologies }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{about}</p>
      <div>
        {technologies.map((technology, index) => (
          <span key={`${name}-${index}`}>{technology}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
