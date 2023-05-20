import React from 'react';

const SmallNameCard = () => {
  return (
    <div className="bordered shadow-xl border-purple-200 border-b-4   h-14 flex bg-white p-2 px-5 rounded-lg gap-4">
      <div className="avatar">
        <div className="w-10 rounded-full">
          <img src="https://raw.githubusercontent.com/zahidtwt/zahidlive/main/277801721_1146010236235641_4251157026316733609_n.jpg" />
        </div>
      </div>
      <div className="flex flex-col justify-center ml-2">
        <div className="font-semibold">
          <a href="/">Zahid Ul Islam</a>
        </div>
        <div className="text-xs text-gray-500">Alumni</div>
      </div>
    </div>
  );
};

export default SmallNameCard;
