import React from 'react';
import { FiPhoneCall, FiLinkedin, FiGlobe } from 'react-icons/fi';
import { SlEnvolope } from 'react-icons/sl';
import Chip from '../AlumniComponents/Chip';
import { GoLocation } from 'react-icons/go';
import moment from 'moment';
function TalentCard({ alumniInfo }) {
  const latestExperience =
    alumniInfo?.experiences[alumniInfo?.experiences.length - 1];

  const latestEducation =
    alumniInfo?.education[alumniInfo?.education.length - 1];

  const gotoProfile = () => {
    window.location.href = `/alumni/profile`;
  };

  return (
    <>
      <div
        className="card h-auto bg-base-100 border-2 border-purple-200 w-80 hover:border-purple-300 cursor-pointer"
        onClick={gotoProfile}
      >
        <div className="card-body p-5">
          <div className="flex gap-3 items-center">
            <div className="w-16 rounded-full bg-[#C39AF7]">
              <img
                src={`https://avatars.githubusercontent.com/${alumniInfo?.githubUsername}`}
                className="rounded-full p-1 shadow-xl"
              />
            </div>
            <div>
              <div className="text-xl font-semibold text-purple-700 drop-shadow-lg ">
                {alumniInfo?.name}
              </div>
              <div className="text-sm text-gray-700 drop-shadow-lg">
                Student-Feb-23
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <Chip
                name="Full Stack Engineer"
                padding={2}
                round={'md'}
                customColor={'purple-300'}
                borderColor={'purple-300'}
              />
            </div>
          </div>
          {alumniInfo?.experiences.length > 0 ? (
            <>
              <p className=" mt-1 leading-4 text-sm text-gray-700">
                I've worked with <br />
              </p>
              <span className="text-md text-gray-800">
                <span className="font-bold text-purple-700">
                  {latestExperience?.companyName}
                </span>{' '}
                as {latestExperience?.jobTitle}
              </span>
            </>
          ) : (
            <>
              <p className=" mt-1 leading-4 text-sm text-gray-700">
                Academic Information
                <br />
              </p>
              <span className="text-md text-gray-800">
                <span className="font-bold text-purple-700">
                  {latestEducation?.program}
                </span>{' '}
                from {latestEducation?.instituteName}
              </span>
            </>
          )}
          <div className="card-actions justify-left mt-1 gap-1 flex flex-wrap py-1">
            <Chip
              name={'React'}
              padding={2}
              round={'xl'}
              customColor={'white'}
              borderColor={'purple-300'}
            />
            <Chip
              name={'Node'}
              padding={2}
              round={'xl'}
              customColor={'white'}
              borderColor={'purple-300'}
            />
            <Chip
              name={'MongoDB'}
              padding={2}
              round={'xl'}
              customColor={'white'}
              borderColor={'purple-300'}
            />
            <Chip
              name={'Express'}
              padding={2}
              round={'xl'}
              customColor={'white'}
              borderColor={'purple-300'}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TalentCard;
