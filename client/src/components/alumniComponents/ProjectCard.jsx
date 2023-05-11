import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ProjectCard = () => {
  return (
    <div className="m-10">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://picsum.photos/id/1005/400/250"
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
    </div>
  );
};

export default ProjectCard;
