import React from 'react';
import { FiPhoneCall, FiLinkedin, FiGlobe } from 'react-icons/fi';
import { SlEnvolope } from 'react-icons/sl';
import Chip from './Chip';

function AlumniInfoCard({ alumniInfo }) {
  const socialButtonClick = (type) => {
    // alert(type);
    if (type === 'phone') {
      alumniInfo.socialLinks.map((link) => {
        if (link.name === 'phone') {
          // alert(link.url);
          window.open(`tel:${link.url}`);
        }
      });
    }
    if (type === 'email') {
      alumniInfo.socialLinks.map((link) => {
        if (link.name === 'email') {
          // alert(link.url);
          window.open(`mailto:${link.url}`);
        }
      });
    }
    if (type === 'website') {
      alumniInfo.socialLinks.map((link) => {
        // console.log(link);
        if (link.name === 'website') {
          // alert(link.url);
          window.open(`https://${link.url}`);
        }
      });
    }
    if (type === 'linkedin') {
      alumniInfo.socialLinks.map((link) => {
        if (link.name === 'linkedin') {
          // alert(link.url);
          window.open(`https://${link.url}`);
        }
      });
    }
  };

  const cardHead = (
    <div className="flex gap-3 items-center">
      <div className="w-16 rounded-xl bg-[#C39AF7]">
        <img
          src={`https://avatars.githubusercontent.com/${alumniInfo?.githubUsername}`}
          className="rounded-2xl p-1 shadow-xl"
        />
      </div>
      <div className="">
        <div className="text-xl font-semibold text-purple-700 drop-shadow-lg ">
          {alumniInfo?.name}
        </div>
        <div className="text-sm text-gray-700 drop-shadow-lg ">
          Junior Software Engineer
        </div>
      </div>
    </div>
  );
  const cardButtons = (
    <div className="card-actions justify-left mt-1 gap-3">
      <button
        className="p-3 h-10 rounded-xl bg-purple-300 border-none shadow-md"
        onClick={() => socialButtonClick('phone')}
      >
        <FiPhoneCall fontSize={18} color="black" />
      </button>
      <button
        className="p-3 h-10  rounded-xl  bg-purple-300 border-none shadow-md"
        onClick={() => socialButtonClick('email')}
      >
        <SlEnvolope fontSize={16} color="black" />
      </button>
      <button
        className="p-3 h-10 rounded-xl  bg-purple-300 border-none shadow-md"
        onClick={() => socialButtonClick('website')}
      >
        <FiGlobe fontSize={16} color="black" />
      </button>
      <button
        className="p-3 h-10 rounded-xl  bg-purple-300 border-none shadow-md"
        onClick={() => socialButtonClick('linkedin')}
      >
        <FiLinkedin fontSize={16} color="black" />
      </button>
    </div>
  );
  return (
    <>
      <div className="card h-auto bg-base-100 shadow-md">
        <div className="card-body p-5">
          {cardHead}
          <p className=" mt-3 text-justify leading-5 text-md text-gray-600">
            {alumniInfo?.about}
          </p>
          <Chip
            name="Full Stack Developer"
            customColor={'gray-200'}
            borderColor={'purple-200'}
            padding={'3'}
          />
          {cardButtons}
        </div>
      </div>
    </>
  );
}

export default AlumniInfoCard;
