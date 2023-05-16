import React from 'react';
import { FiPhoneCall, FiLinkedin, FiGlobe } from 'react-icons/fi';
import { SlEnvolope } from 'react-icons/sl';
import Chip from './Chip';
function AlumniInfoCard() {
  // JSX elements
  const cardHead = (
    <div className="flex gap-3 items-center">
      <div className="w-16 rounded-xl bg-[#C39AF7]">
        <img
          src="https://avatars.githubusercontent.com/u/75268620?v=4"
          className="rounded-2xl p-1 shadow-xl"
        />
      </div>
      <div className="">
        <div className="text-xl font-semibold text-purple-700 drop-shadow-lg ">
          Pollock Nag
        </div>
        <div className="text-sm text-gray-700 drop-shadow-lg ">
          Junior Software Engineer
        </div>
      </div>
    </div>
  );
  const cardButtons = (
    <div className="card-actions justify-left mt-1 gap-3">
      <button className="p-3 h-10 rounded-xl bg-purple-300 border-none shadow-md">
        <FiPhoneCall fontSize={18} color="black" />
      </button>
      <button className="p-3 h-10  rounded-xl  bg-purple-300 border-none shadow-md">
        <SlEnvolope fontSize={16} color="black" />
      </button>
      <button className="p-3 h-10 rounded-xl  bg-purple-300 border-none shadow-md">
        <FiGlobe fontSize={16} color="black" />
      </button>
      <button className="p-3 h-10 rounded-xl  bg-purple-300 border-none shadow-md">
        <FiLinkedin fontSize={16} color="black" />
      </button>
    </div>
  );
  return (
    <>
      <div className="card h-auto bg-base-100 shadow-xl">
        <div className="card-body p-5">
          {cardHead}
          <p className=" mt-3 text-justify leading-5 text-md text-gray-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum
          </p>
          <Chip name="Full Stack Developer" />
          {cardButtons}
        </div>
      </div>
    </>
  );
}

export default AlumniInfoCard;
