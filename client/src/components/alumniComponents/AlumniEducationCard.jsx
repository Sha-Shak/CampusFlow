import React from 'react';
import { GoLocation } from 'react-icons/go';
import moment from 'moment';
function AlumniEducationCard({ eduInfo }) {
  return (
    <div>
      <div className="card w-full bg-base-100   rounded-none">
        <div className="card-body p-0 mt-2">
          <div className="card-title text-md text-purple-700">
            {eduInfo?.instituteName}
          </div>

          <div className="courseAndDate">
            <div className="font-lg font-bold">{eduInfo?.program}</div>

            <div className="flex justify-between text-sm text-gray-500 font-light ">
              <div className=" flex gap-2">
                <span>{moment(eduInfo?.fromDate).format('MMM YYYY')}</span>
                <span>-</span>
                {moment(eduInfo?.toDate).format('MMM YYYY')}
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-500 font-light ">
              {eduInfo?.gpa && (
                <div className=" flex gap-2">
                  <span>Description:</span>
                  <span>{eduInfo?.description}</span>
                </div>
              )}
            </div>
            <div className="flex justify-between text-sm text-gray-500 font-light ">
              {eduInfo?.gpa && (
                <div className=" flex gap-2">
                  <span>GPA:</span>
                  <span>{eduInfo?.gpa}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlumniEducationCard;
