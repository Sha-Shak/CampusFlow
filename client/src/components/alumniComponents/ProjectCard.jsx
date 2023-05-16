import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ProjectCard = ({ widthCustom }) => {
  return (
    <>
      <div className={`card w-${widthCustom} h-56 bg-base-100 shadow-md`}>
        <figure>
          <img
            src="https://raw.githubusercontent.com/zahidtwt/zahidlive/main/277801721_1146010236235641_4251157026316733609_n.jpg"
            alt="project photo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Project Title
            <div className="badge-succeess text-[#007E3F]">
              <FaCheckCircle />
            </div>
          </h2>
          <p>
            Meal mate app for weight loss. This project was completed in 6 days
            .
          </p>
          <div className="justify-end card-actions">
            <div className="badge badge-outline badge-primary">
              Project Code
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
