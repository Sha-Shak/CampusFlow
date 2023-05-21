import React, { useEffect, useState } from 'react';
import AlumniLayout from '../components/alumniComponents/AlumniLayout';
import AlumniEducationCard from '../components/alumniComponents/AlumniEducationCard';
import EducationForm from '../components/alumniComponents/UpdateProfile/EductaionForm.component';
import { useGetAlumniByIdQuery } from '../features/alumni/alumniApi';

function AlumniEducation() {
  const [education, setEducation] = useState([]);

  const {
    data: alumniInfo,
    isSuccess,
    isLoading,
    error,
  } = useGetAlumniByIdQuery('646213253572798cad80c70e');
  useEffect(() => {
    if (isSuccess) {
      setEducation(alumniInfo?.education);
    }
    if (error) {
      console.log(error);
    }
  }, [isSuccess, error]);

  console.log(alumniInfo?.education);

  return (
    <AlumniLayout>
      <div className="flex">
        <div className=" w-[50%] h-screen flex justify-center p-5">
          <div className="p-5 flex flex-col gap-5 ">
            {education.map((edu, key) => (
              <div
                key="key"
                className="card-contatiner p-5 bg-white w-[30vw] rounded-xl shadow-md"
              >
                <AlumniEducationCard eduInfo={edu} />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white w-[50%] h-screen p-10">
          <EducationForm />
        </div>
      </div>
    </AlumniLayout>
  );
}

export default AlumniEducation;
