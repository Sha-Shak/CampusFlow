import React from 'react';
import { BsFillBriefcaseFill, BsArrowRight } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';

import OrganisationCard from './OrganisationCard';

function Experience() {
  const viewAllClickEvent = () => {
    alert('View All Clicked');
  };

  return (
    <>
      <div className="card bg-base-100  border-2 border-gray-200 p-5">
        <div className="flex justify-between item-center ">
          <div className="font-semibold text-xl">Experience</div>
          <div
            className="flex items-center gap-2 cursor-pointer "
            onClick={viewAllClickEvent}
          >
            <div className="text-indigo-600 text-xs font-semibold">
              View all
            </div>

            <BsArrowRight size={16} className="text-indigo-600" />
          </div>
        </div>
        <div className="mb-2">
          <OrganisationCard />
          {/* <OrganisationCard /> */}
        </div>
      </div>
    </>
  );
}

export default Experience;
