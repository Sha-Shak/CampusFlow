import React from 'react';
import SmallNameCard from './SmallNameCard';

function RecentStudents() {
  return (
    <div>
      <div className="text-xl font-bold my-3"> Recent Students Activity </div>
      <div className="flex flex-row">
        <div className="flex-[0.166]">
          <SmallNameCard />
        </div>
        <div className="flex-[0.166]">
          <SmallNameCard />
        </div>
        <div className="flex-[0.166]">
          <SmallNameCard />
        </div>
        <div className="flex-[0.166]">
          <SmallNameCard />
        </div>
        <div className="flex-[0.166]">
          <SmallNameCard />
        </div>
        <div className="flex-[0.166]">
          <SmallNameCard />
        </div>
      </div>
    </div>
  );
}

export default RecentStudents;
