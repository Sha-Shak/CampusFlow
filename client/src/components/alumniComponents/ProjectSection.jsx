import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import ProjectCardSmall from './ProjectCardSmall';

const ProjectSection = ({ projects }) => {
  // console.log(projects);
  const thesisProject = projects?.filter(
    (project) => project?.type.toLowerCase() === 'thesis'
  );
  const soloProject = projects?.filter(
    (project) => project?.type.toLowerCase() === 'solo'
  );
  const legacyProject = projects?.filter(
    (project) => project?.type.toLowerCase() === 'legacy'
  );
  const personalProject = projects?.filter(
    (project) => project?.type.toLowerCase() === 'personal'
  );
  console.log(thesisProject);
  const viewAllClickEvent = () => {
    alert('View all clicked');
  };

  return (
    <div className="flex gap-2">
      <div className="flex gap-2">
        <ProjectCardSmall
          project={thesisProject}
          customWidth="[26rem]"
          customHeight="[14.5rem]"
        />
        <ProjectCardSmall
          project={soloProject}
          customWidth="[26rem]"
          customHeight="[14.5rem]"
        />
      </div>
      {/* Right side */}
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <ProjectCardSmall
            project={legacyProject}
            customWidth="[14rem]"
            customHeight="[7rem]"
          />
          <ProjectCardSmall
            project={personalProject}
            customWidth="[14rem]"
            customHeight="[12vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
