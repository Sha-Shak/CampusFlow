import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Modal, Box, Typography } from '@mui/material';

import OrganisationCard from './OrganisationCard';

function Experience({ alumniInfo }) {
  const [open, setOpen] = useState(false);

  const latestExperience =
    alumniInfo?.experiences[alumniInfo?.experiences.length - 1];

  const allExperiences = alumniInfo?.experiences;
  console.log('all Exp', allExperiences);
  const onClose = () => setOpen(false);
  const viewAllClickEvent = () => {
    // alert('View All Clicked');
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
        <div className=" flex justify-center w-[45vw] outline-none ">
          {/* <div className="flex flex-col justify-center gap-5 p-10 mt-5 outline-none w-[50vw] overflow-y-scroll max-h-[80vh] "> */}
          <div className=" overflow-y-scroll max-h-[80vh] p-5 flex flex-col gap-5  ">
            {allExperiences?.map((experience, index) => {
              // console.log(experience);
              return (
                <div
                  className="pt-5 px-5 w-[35vw] min-h-[10vw] bg-white rounded-xl "
                  key={index}
                >
                  <OrganisationCard latestExperience={experience} />
                </div>
              );
            })}
          </div>
        </div>
      </Modal>

      <div className="card bg-base-100  border-2 border-gray-200 p-5">
        <div className="flex justify-between item-center ">
          <div className="font-semibold text-xl">Experience</div>
          <div
            className="flex items-center gap-2 cursor-pointer "
            onClick={viewAllClickEvent}
          >
            <div className="text-indigo-600 text-xs font-semibold">
              {/* <Modal open={open} onClose={onClose} /> */}
              View all
            </div>

            <BsArrowRight size={16} className="text-indigo-600" />
          </div>
        </div>
        <div className="mb-2">
          <OrganisationCard latestExperience={latestExperience} />
          {/* <OrganisationCard /> */}
        </div>
      </div>
    </>
  );
}

export default Experience;
