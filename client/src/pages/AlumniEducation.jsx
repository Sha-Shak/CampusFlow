import React from 'react';
import AlumniLayout from '../components/alumniComponents/AlumniLayout';
import AlumniEducationCard from '../components/alumniComponents/AlumniEducationCard';

function AlumniEducation() {
  return (
    <AlumniLayout>
      <div className="flex">
        <div className=" w-[50%] h-screen">
          <div className="p-5 flex flex-col gap-5">
            <div className="card-contatiner p-5 bg-white h-36 w-[30vw] rounded-xl shadow-md">
              <AlumniEducationCard />
            </div>
            <div className="card-contatiner p-5 bg-white h-36 w-[30vw] rounded-xl shadow-md">
              <AlumniEducationCard />
            </div>
            <div className="card-contatiner p-5 bg-white h-36 w-[30vw] rounded-xl shadow-md">
              <AlumniEducationCard />
            </div>
          </div>
        </div>

        <div className="bg-purple-500 w-[50%] h-screen"> FORM</div>
      </div>
    </AlumniLayout>
  );
}

export default AlumniEducation;
