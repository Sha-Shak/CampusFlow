import React from 'react';
import { FiPhoneCall, FiLinkedin, FiGlobe } from 'react-icons/fi';
import { SlEnvolope } from 'react-icons/sl';

function AlumniInfoCard() {
  // JSX elements
  const cardHead = (
    <div className="flex gap-5 items-center">
      <div className="w-32 rounded-xl bg-[#C39AF7]">
        <img
          src="https://avatars.githubusercontent.com/u/75268620?v=4"
          className="rounded-2xl p-3 shadow-xl"
        />
      </div>
      <div className="">
        <div className="text-3xl font-bold text-black drop-shadow-lg ">
          Pollock Nag
        </div>
        <div className="text-lg font-semibold text-black drop-shadow-lg ">
          Junior Software Engineer
        </div>
      </div>
    </div>
  );
  const cardButtons = (
    <div className="card-actions justify-center mt-5 gap-5">
      <button className="btn  rounded-2xl bg-[#C39AF7] border-none shadow-xl">
        <FiPhoneCall fontSize={30} color="white" />
      </button>
      <button className="btn   rounded-2xl bg-[#C39AF7] border-none shadow-xl">
        <SlEnvolope fontSize={30} color="white" />
      </button>
      <button className="btn   rounded-2xl bg-[#C39AF7] border-none shadow-xl">
        <FiGlobe fontSize={30} color="white" />
      </button>
      <button className="btn  rounded-2xl bg-[#C39AF7] border-none shadow-xl">
        <FiLinkedin fontSize={30} color="white" />
      </button>
    </div>
  );
  return (
    <div className="p-24">
      <div className="card w-[30vw] bg-base-100 shadow-xl ">
        <div className="card-body">
          {cardHead}
          <p className="text-xl font-light mt-3 text-justify">
            Pollock represents the untapped talent pool that Project Code is
            unlocking in Bangladesh. Being a round peg in a system with square
            holes, Sajon's profile could have been overlooked by many tech
            companies since he did not tick.{' '}
          </p>
          {cardButtons}
        </div>
      </div>
    </div>
  );
}

export default AlumniInfoCard;
