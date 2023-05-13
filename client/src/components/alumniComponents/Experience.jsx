import React from 'react';
import { BsFillBriefcaseFill, BsArrowRight } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';

import OrganisationCard from './OrganisationCard';

function Experience() {
  const viewAllClickEvent = () => {
    alert('View All Clicked');
  };

  return (
    <div className="p-24">
      <div className="card w-[35vw]  bg-base-100  border-2 border-gray-200 p-5">
        <div className="flex justify-between item-center  px-7 ">
          <div className="font-semibold text-4xl">Experience</div>
          <div
            className="flex items-center gap-2 cursor-pointer "
            onClick={viewAllClickEvent}
          >
            <div className="text-indigo-600 font-semibold">View all</div>

            <BsArrowRight size={25} className="text-indigo-600" />
          </div>
        </div>
        <div className="mb-2">
          <OrganisationCard />
          <OrganisationCard />
          {/* <OrganisationCard /> */}
        </div>
      </div>
    </div>
  );
}

export default Experience;
