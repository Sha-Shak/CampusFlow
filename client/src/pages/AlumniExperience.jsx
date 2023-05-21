import React, { useEffect, useState } from 'react';
import AlumniLayout from '../components/alumniComponents/AlumniLayout';
import AlumniEducationCard from '../components/alumniComponents/AlumniEducationCard';
import EducationForm from '../components/alumniComponents/UpdateProfile/EductaionForm.component';
import { useGetAlumniByIdQuery } from '../features/alumni/alumniApi';
import OrganisationCard from '../components/alumniComponents/OrganisationCard';
import ExperienceForm from '../components/alumniComponents/UpdateProfile/ExperienceForm.component';

function AlumniExperience() {
  const [experiences, setExperiences] = useState([]);

  const {
    data: alumniInfo,
    isSuccess,
    isLoading,
    error,
  } = useGetAlumniByIdQuery('6468550a3d7ec6aa9065187e'); // alumnni id
  useEffect(() => {
    if (isSuccess) {
      setExperiences(alumniInfo?.experiences);
    }
    if (error) {
      console.log(error);
    }
  }, [isSuccess, error]);

  return (
    <AlumniLayout>
      <div className="flex">
        <div className=" w-[50%] h-screen flex justify-center p-5">
          <div className="p-5 flex flex-col gap-5 ">
            {experiences?.map((experience, key) => (
              <div
                key={key}
                className="card-contatiner p-5 bg-white w-[30vw] rounded-xl shadow-md"
              >
                <OrganisationCard latestExperience={experience} />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white w-[50%] h-screen p-10">
          <ExperienceForm />
        </div>
      </div>
    </AlumniLayout>
  );
}

export default AlumniExperience;
