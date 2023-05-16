import React from 'react';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';

function OrganisationCard() {
  return (
    <div>
      <div className="card w-full bg-base-100  min-h-52 rounded-none">
        <div className="card-body p-0 mt-2">
          <div className="flex items-center gap-2">
            {/* <div className="w-[42px] h-[42px] border-2 border-green-100 rounded-full">
              <img
                src="https://res.cloudinary.com/dqgdpbbtv/image/upload/v1683951424/CampusFlow/suitcase_1_nrxy3m.png"
                className="p-2"
              />
            </div> */}
            <div className="card-title text-md text-purple-700">Google</div>
          </div>

          <div className="flex justify-between text-sm text-gray-500 font-light ">
            <div>Oct 2018-Present</div>
            <div className="flex items-center gap-1">
              <div>
                <GoLocation />
              </div>
              <div>Dublin, Ireland</div>
            </div>
          </div>

          <div className="font-lg font-bold">Senior Web Developer</div>

          <p className=" text-justify leading-5 text-md text-gray-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis p
          </p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
}

export default OrganisationCard;
