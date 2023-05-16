import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
function SiteChip() {
  return (
    <div className="p-24">
      <div className="card w-48 h-44 bg-[#C9EBED] shadow-xl">
        <div className="p-4 flex flex-col gap-8">
          <div className="flex justify-between gap-10 ">
            <div className="indicator">
              <div className="grid bg-[#99D7DB] rounded-xl text-white place-items-center p-1 text-3xl font-bold [text-shadow:_2px_2px_2px_rgb(0_0_0_/_30%)] ">
                <p>256</p>
              </div>
            </div>
            <div>
              <BsArrowRight size={30} />
            </div>
          </div>
          <div className="text-lg font-semibold">
            <p>Leetcode</p>
            <p>pollock_nag</p>
          </div>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
}

export default SiteChip;
