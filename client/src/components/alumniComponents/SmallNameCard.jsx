import React from 'react';

const SmallNameCard = () => {
  return (
    <div className="bordered shadow-lg w-30 h-14 flex bg-gray-100 p-2 rounded-md">
      <div className="avatar">
        <div className="w-12 rounded-xl">
          <img src="https://raw.githubusercontent.com/zahidtwt/zahidlive/main/277801721_1146010236235641_4251157026316733609_n.jpg" />
        </div>
      </div>
      <div className="flex flex-col justify-center ml-2">
        <div className="font-semibold">
          {/* TODO: fix href */}
          <a href="/">Md Zahid Hossain</a>
        </div>
        <div className="text-xs text-gray-500">Alumni</div>
      </div>
    </div>
  );
};

export default SmallNameCard;