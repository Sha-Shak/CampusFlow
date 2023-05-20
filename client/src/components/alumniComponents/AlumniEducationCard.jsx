import React from 'react';
import { GoLocation } from 'react-icons/go';
function AlumniEducationCard() {
  return (
    <div>
      <div className="card w-full bg-base-100  min-h-52 rounded-none">
        <div className="card-body p-0 mt-2">
          <div className="card-title text-md text-purple-700">
            Brac University
          </div>

          <div className="courseAndDate">
            <div className="font-lg font-bold">
              Bachelor of Computer Science and Engineering
            </div>

            <div className="flex justify-between text-sm text-gray-500 font-light ">
              <div className=" flex gap-2">
                <span>
                  {/* {moment(`${latestExperience?.fromDate}`).format('MMM YYYY')} */}
                  2018
                </span>
                <span>-</span>

                <span>
                  {/* {moment(`${latestExperience?.toDate}`).format('MMM YYYY')} */}
                  2022
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlumniEducationCard;
