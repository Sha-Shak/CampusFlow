import React from 'react';
import AlumniPortfolioCard from '../components/alumniComponents/AlumniPortfolioCard';
import AlumniLayout from '../components/alumniComponents/AlumniLayout';
import { useGetAlumniByIdQuery } from '../features/alumni/alumniApi';
function AlumniPortfolio() {
  const alumniId = '646213253572798cad80c70e';
  const {
    data: alumniInfo,
    isSuccess,
    error,
  } = useGetAlumniByIdQuery(alumniId);
  const projects = alumniInfo?.projects;
  console.log('projects', projects);
  return (
    <div className="">
      <AlumniLayout>
        <div className="flex flex-wrap justify-center gap-8 m-4 jusify p-5 pl-14 ">
          {projects?.map((project, index) => (
            <div key={index}>
              <AlumniPortfolioCard project={project} />
            </div>
          ))}
        </div>
      </AlumniLayout>
    </div>
  );
}

export default AlumniPortfolio;
