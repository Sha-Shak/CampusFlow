import React from 'react';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import moment from 'moment';

function OrganisationCard({ latestExperience }) {
  return (
    <div>
      <div className="card w-full bg-base-100  min-h-52 rounded-none">
        <div className="card-body p-0 mt-2">
          <div className="card-title text-md text-purple-700">
            {latestExperience?.companyName}
          </div>

          <div className="flex justify-between text-sm text-gray-500 font-light ">
            <div className=" flex gap-2">
              <span>
                {moment(`${latestExperience?.fromDate}`).format('MMM YYYY')}
              </span>
              <span>-</span>

              <span>
                {moment(`${latestExperience?.toDate}`).format('MMM YYYY')}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <GoLocation />
              </div>
              <div>Dublin, Ireland</div>
            </div>
          </div>

          <div className="font-lg font-bold">{latestExperience?.jobTitle}</div>

          <p className=" text-justify leading-5 text-md text-gray-600">
            {latestExperience?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrganisationCard;
