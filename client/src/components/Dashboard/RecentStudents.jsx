import React from 'react';
import { useNavigate } from 'react-router-dom';
import SmallNameCard from './SmallNameCard';

function RecentStudents({ students }) {
  return (
    <div>
      <div className="text-xl font-bold my-3"> Recent Students Activity </div>
      <div className="flex flex-row">
        {students?.map((student) => (
          <div className="flex-[0.166]" key={student?._id}>
            <SmallNameCard
              name={student?.name}
              type={student?.type}
              githubUsername={student?.githubUsername}
              id={student?._id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentStudents;
