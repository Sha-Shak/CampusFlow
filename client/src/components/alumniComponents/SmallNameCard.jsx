import React from 'react';

const SmallNameCard = ({ name, githubUsername, role }) => {
  return (
    <div className="bordered shadow-xl border-purple-200 border-b-4   h-14 flex bg-white p-2 px-5 rounded-lg gap-4">
      <div className="avatar">
        <div className="w-10 rounded-full">
          <img
            src={`https://avatars.githubusercontent.com/${githubUsername}`}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center ml-2">
        <div className="font-semibold">
          <a href="/">{name}</a>
        </div>
        <div className="text-xs text-gray-500 capitalize">{role}</div>
      </div>
    </div>
  );
};

export default SmallNameCard;
