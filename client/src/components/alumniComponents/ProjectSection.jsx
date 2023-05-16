import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectCardSmall from './ProjectCardSmall';

const ProjectSection = () => {
  return (
    <div className="flex gap-2">
      <div className="flex gap-2">
        <ProjectCardSmall customWidth="[24rem]" customHeight="[14.5rem]" />
        <ProjectCardSmall customWidth="[24rem]" customHeight="[14.5rem]" />
      </div>
      {/* Right side */}
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <ProjectCardSmall customWidth="[12rem]" customHeight="[7rem]" />
          <ProjectCardSmall customWidth="[12rem]" customHeight="[12vh]" />
        </div>

        <div className="text-indigo-600 text-xs font-semibold">View all</div>
      </div>
    </div>
  );
};

export default ProjectSection;
