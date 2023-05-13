import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectCardSmall from './ProjectCardSmall';

const ProjectSection = () => {
  return (
    <div className="flex gap-2">
      <div className="flex gap-2">
        <ProjectCardSmall customWidth="[20vw]" customHeight="[35vh]" />
        <ProjectCardSmall customWidth="[20vw]" customHeight="[35vh]" />
      </div>
      {/* Right side */}
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <ProjectCardSmall customWidth="[10vw]" customHeight="[17vh]" />
          <ProjectCardSmall customWidth="[10vw]" customHeight="[17vh]" />
        </div>
        <div className="flex flex-col gap-2">
          <ProjectCardSmall customWidth="[10vw]" customHeight="[17vh]" />
          <ProjectCardSmall customWidth="[10vw]" customHeight="[17vh]" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
