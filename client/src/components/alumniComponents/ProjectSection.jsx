import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectCardSmall from './ProjectCardSmall';

const ProjectSection = () => {
  const viewAllClickEvent = () => {
    alert('View all clicked');
  };

  return (
    <div className="flex gap-2">
      <div className="flex gap-2">
        <ProjectCardSmall customWidth="[26rem]" customHeight="[14.5rem]" />
        <ProjectCardSmall customWidth="[26rem]" customHeight="[14.5rem]" />
      </div>
      {/* Right side */}
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <ProjectCardSmall customWidth="[14rem]" customHeight="[7rem]" />
          <ProjectCardSmall customWidth="[14rem]" customHeight="[12vh]" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
