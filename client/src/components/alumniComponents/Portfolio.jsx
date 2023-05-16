import React from 'react';
import ProjectSection from './ProjectSection';
import Chip from './Chip';
import { BsArrowRight } from 'react-icons/bs';

const Portfolio = () => {
  return (
    <>
      <div className="card  bg-base-100 shadow-sm pl-4 pr-1 w-[70rem]">
        <div className="flex flex-col m-2">
          <div className="flex justify-between ">
            <div className="text-2xl font-bold m-2">Portfolio</div>
            {/* View All */}
            <div className=" cursor-pointer flex gap-2 mt-4 mr-4">
              <div className="text-indigo-600 text-xs font-semibold">
                View all
              </div>

              <BsArrowRight size={16} className="text-indigo-600" />
            </div>
          </div>

          <div className="card-body m-2 p-0">
            <ProjectSection />
          </div>
        </div>
        <div className="flex flex-col m-2 items-left">
          <h2 className="text-2xl font-bold m-1">Skills</h2>
          <div className="m-2 flex gap-2 flex-wrap">
            <Chip name="React" />
            <Chip name="React" />
            <Chip name="React" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
