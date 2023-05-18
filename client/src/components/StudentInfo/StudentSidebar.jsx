import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

function StudentSidebar({ student }) {
  console.log(student);
  const location = useLocation();

  return (
    <>
      <div className="relative flex flex-col items-center rounded-[20px] w-[300px] mx-auto p-4 bg-white bg-clip-border  border-[#701ddc1f] border-2 shadow-3xl dark:!bg-navy-800 dark:text-white dark:!shadow-none min-h-[80vh]">
        <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover">
          <img
            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
            className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"
          />
          <div className="absolute -bottom-12 flex h-[120px] w-[120px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
            <img
              className="h-full w-full rounded-full"
              src={`https://avatars.githubusercontent.com/${student?.githubUsername}`}
              alt={`${student?.name}'s profile`}
            />
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-xl font-bold text-black ">{student?.name}</h4>
          <p className="text-lg font-normal text-gray-600 capitalize">
            {student?.type} Student
          </p>
          <div className="mt-1 border-2 border-purple-00 p-1 px-2 text-sm rounded-full">
            <p className="text-md text-gray-600 capitalize font-semibold">
              {student?.cohortName}
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default StudentSidebar;
