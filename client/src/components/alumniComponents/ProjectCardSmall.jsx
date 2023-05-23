import React from 'react';

const ProjectCardSmall = ({ project, customWidth, customHeight }) => {
  console.log(project);
  if (!project) {
    return null; // Return null or a loading indicator if project is undefined
  }

  return (
    <div
      className={`w-${customWidth} h-${customHeight} rounded-lg shadow-md overflow-hidden relative`}
    >
      <img
        className="absolute inset-0 h-full w-full "
        src="https://img.youtube.com/vi/9vLIYBn3us8/maxresdefault.jpg"
        alt=""
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="flex h-full items-end relative p-4 font-light">
        <h1 className="text-xl text-white tracking">
          {project[0]?.projectName}
        </h1>
      </div>
    </div>
  );
};

export default ProjectCardSmall;
