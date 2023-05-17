import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import axios from 'axios';
function SiteChip({ alumniInfo }) {
  const onlineJudge = alumniInfo?.onlineJudge[0];
  const [totalSolve, setTotalSolve] = useState();
  axios
    .get(`https://leetcode-stats-api.herokuapp.com/${onlineJudge?.username}`)
    .then((res) => {
      setTotalSolve(res.data.totalSolved);
    });

  // console.log(onlineJudge);
  return (
    <div>
      <div className="card w-48 h-52 bg-purple-200 shadow-md">
        <div className="p-4 flex flex-col gap-8">
          <div className="flex justify-between gap-10 ">
            <div className="indicator">
              <div className="grid bg-purple-400 rounded-xl text-white place-items-center p-1 text-5xl font-bold [text-shadow:_2px_2px_2px_rgb(0_0_0_/_30%)] ">
                <p>{totalSolve}</p>
              </div>
            </div>
            <div>
              <BsArrowRight size={30} />
            </div>
          </div>
          <div className="text-2xl font-semibold text-purple-700 opacity-80">
            <p>{onlineJudge?.name}</p>
            <p>{onlineJudge?.username}</p>
          </div>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
}

export default SiteChip;
