import React from 'react';

const ProjectCardSmall = ({ customWidth, customHeight }) => {
  return (
    <div className=" overflow-hidden ">
      <div
        className="hero w-52 h-36 rounded-xl shadow-xl bg-cover bg-center bg-light-blacks-800 opacity-50"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dru7kzv3i/image/upload/v1682913113/ix3evsc4bk3dlfwlfaz0.jpg")`,
        }}
      >
        <div className="hero"></div>
        <div className="hero-content text-center text-[#181828] ">
          <div className="max-w-md mb-[30vh]">
            <h2 className="mb-5 text-2xl font-bold ">
              <span className="text-[#ffffff]">Project Title</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSmall;
