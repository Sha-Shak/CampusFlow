import React from 'react';
import AlumniPortfolioCard from '../components/alumniComponents/AlumniPortfolioCard';
import AlumniLayout from '../components/alumniComponents/AlumniLayout';
import { useGetAlumniByIdQuery } from '../features/alumni/alumniApi';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function AlumniPortfolio() {
  const alumniId = '6468550a3d7ec6aa9065187e';

  const {
    data: alumniInfo,
    isSuccess,
    error,
  } = useGetAlumniByIdQuery(alumniId);
  const projects = alumniInfo?.projects;
  const navigate = useNavigate();
  console.log('projects', projects);
  return (
    <div className="">
      <AlumniLayout>
        <div className="flex flex-col p-10 ml-6">
          <h1 className="text-3xl font-bold">Portfolios</h1>
          <Button
            variant="contained"
            sx={{ width: '15rem', mt: '20px' }}
            size="large"
            onClick={() => {
              navigate('/alumni/add-project');
            }}
          >
            Add New Project
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 ">
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
