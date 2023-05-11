import React from 'react';

const SmallNavProfile = () => {
  return (
    <div className="bordered shadow-lg w-56 h-16 bg-gray-100 p-2 rounded-md flex justify-between">
      <div className="flex flex-col justify-center ml-2">
        <div className="font-semibold">Md Zahid Hossain</div>
        <div className="text-xs text-gray-500 flex justify-end">Alumni</div>
      </div>
      <div className="avatar">
        <div className="w-26 rounded-full">
          <img src="https://raw.githubusercontent.com/zahidtwt/zahidlive/main/277801721_1146010236235641_4251157026316733609_n.jpg" />
        </div>
      </div>
    </div>
  );
};

export default SmallNavProfile;
