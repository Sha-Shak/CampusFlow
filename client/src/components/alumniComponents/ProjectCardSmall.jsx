import React from 'react';

const ProjectCardSmall = ({ customWidth, customHeight }) => {
  return (
    <div
      className={`w-${customWidth} h-${customHeight} rounded-lg shadow-2xl overflow-hidden relative`}
    >
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://cdn.pixabay.com/photo/2022/08/28/01/40/cyberpunk-city-7415576_1280.jpg"
        alt=""
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="flex h-full items-end relative p-4 font-light">
        <h1 className="text-xl text-white tracking">Easyhome</h1>
      </div>
    </div>
  );
};

export default ProjectCardSmall;
