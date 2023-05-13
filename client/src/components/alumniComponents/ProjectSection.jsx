import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectCardSmall from './ProjectCardSmall';

const ProjectSection = () => {
  return (
    <div className="p-24">
      <ProjectCardSmall customWidth="1/6" customHeight="36" />
    </div>
  );
};

export default ProjectSection;
