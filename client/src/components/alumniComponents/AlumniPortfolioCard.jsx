import React, { useState } from 'react';
import Chip from '../AlumniComponents/Chip';
import { Modal, Box, Typography } from '@mui/material';
import AlumniPortfolioModalView from '../alumniComponents/AlumniPortfolioModalView';
function AlumniPortfolioCard({ project }) {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);

  const handleCardClick = () => {
    // alert('clicked');
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
          <AlumniPortfolioModalView project={project} />
        </div>
      </Modal>

      <div
        className="card card-side bg-base-100 shadow-xl w-[39vw] h-[35vh] hover:border-2 border-purple-400"
        onClick={handleCardClick}
      >
        <figure>
          <img
            src="https://img.freepik.com/premium-vector/comic-youtube-thumbnail-background-comic-style_530597-997.jpg?"
            alt="Movie"
            className="h-[35vh]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-semibold text-purple-400">
            {project?.projectName.toUpperCase()}
          </h2>

          <div className="text-xl mt-2">Techstack</div>
          <div className=" flex flex-wrap gap-2 ">
            {project?.techStack.map((tech) => (
              <Chip
                key={tech}
                name={tech}
                customColor={'gray-50'}
                padding={3}
                borderColor={'purple-200'}
              />
              // <div className="badge badge-outline badge-primary">{tech}</div>
            ))}
          </div>
          <div className="text-xl mt-2 ">Type</div>
          <div className=" flex flex-wrap gap-2 ">
            {project?.techStack.map((tech) => (
              <Chip
                key={tech}
                name={tech}
                customColor={'gray-50'}
                padding={3}
                borderColor={'purple-200'}
              />
              // <div className="badge badge-outline badge-primary">{tech}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AlumniPortfolioCard;
