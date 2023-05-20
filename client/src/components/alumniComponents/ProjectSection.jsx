import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectCardSmall from './ProjectCardSmall';
import AlumniPortfolioModalView from './AlumniPortfolioModalView';
import { Modal } from '@mui/material';

const ProjectSection = ({ projects }) => {
  const [projectType, setProjectType] = useState('');
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  const handleCardClick = () => {
    // alert('clicked');
    setOpen(true);
  };
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

  const handleThesisProject = () => {
    setProjectType('thesis');
    setOpen(true);
    console.log('Testing ', thesisProject);

    // <AlumniPortfolioModalView project={thesisProject} />;
    // alert('thesis project clicked');
  };
  const handleSoloProject = () => {
    setProjectType('solo');
    setOpen(true);
  };
  const handleLegacyProject = () => {
    setProjectType('legacy');
    setOpen(true);
  };
  const handlePersonalProject = () => {
    setProjectType('personal');
    setOpen(true);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <div className=" flex justify-center w-[45vw] outline-none">
          {projectType === 'thesis' && (
            <AlumniPortfolioModalView project={thesisProject[0]} />
          )}
          {projectType === 'solo' && (
            <AlumniPortfolioModalView project={soloProject[0]} />
          )}
          {projectType === 'legacy' && (
            <AlumniPortfolioModalView project={legacyProject[0]} />
          )}
          {projectType === 'personal' && (
            <AlumniPortfolioModalView project={personalProject[0]} />
          )}
        </div>
      </Modal>

      <div className="flex gap-2">
        <div className="flex gap-2">
          <div onClick={handleThesisProject}>
            <ProjectCardSmall
              project={thesisProject}
              customWidth="[26rem]"
              customHeight="[14.5rem]"
            />
          </div>
          <div onClick={handleSoloProject}>
            <ProjectCardSmall
              project={soloProject}
              customWidth="[26rem]"
              customHeight="[14.5rem]"
            />
          </div>
        </div>
        {/* Right side */}
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <div onClick={handleLegacyProject}>
              <ProjectCardSmall
                project={legacyProject}
                customWidth="[14rem]"
                customHeight="[7rem]"
              />
            </div>
            <div onClick={handlePersonalProject}>
              <ProjectCardSmall
                project={personalProject}
                customWidth="[14rem]"
                customHeight="[12vh]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
