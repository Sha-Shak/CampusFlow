import React from 'react';

const SmallNameCard = ({ name, profileImg, status }) => {
  return (
    <div
      className="bordered shadow-sm px-5 py-3
     flex bg-white  rounded-2xl mr-5"
    >
      <div className="avatar mr-2">
        <div className="w-12 rounded-full">
          <img src="https://raw.githubusercontent.com/zahidtwt/zahidlive/main/277801721_1146010236235641_4251157026316733609_n.jpg" />
        </div>
      </div>
      <div className="flex flex-col justify-center ">
        <div className="font-semibold text-xl md:text-lg">
          {/* TODO: fix href */}
          <a href="/">Zahid Ul Islam</a>
        </div>
        <div className="text-sm text-gray-500">Alumni</div>
      </div>
    </div>
  );
};

export default SmallNameCard;
