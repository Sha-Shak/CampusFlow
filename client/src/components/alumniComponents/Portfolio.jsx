import React from 'react';
import ProjectSection from './ProjectSection';
import Chip from './Chip';

const Portfolio = () => {
  return (
    <>
      <div className="card  bg-base-100 shadow-sm p-4">
        <div className="flex flex-col m-2">
          <h2 className="text-2xl font-bold m-2">Portfolio</h2>
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
