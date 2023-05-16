import React from 'react';
import AlumniSidebar from '../components/AlumniComponents/AlumniSidebar';
import AlumniInfoCard from '../components/AlumniComponents/AlumniInfoCard';
import Experience from '../components/AlumniComponents/Experience';
import ProjectSection from '../components/AlumniComponents/ProjectSection';
import Portfolio from '../components/AlumniComponents/Portfolio';
import AlumniLayout from '../components/AlumniComponents/AlumniLayout';
import GithubGraph from '../components/AlumniComponents/GithubGraph';

const AlumniProfile = () => {
  return (
    <AlumniLayout>
      <div className="flex gap-4 m-4">
        <div className="flex-[0.3] flex flex-col gap-2">
          <AlumniInfoCard />
          <Experience />
        </div>
        <div className="flex-[0.7]">
          <div className="flex flex-col"></div>
          <Portfolio />
          <GithubGraph />
        </div>
      </div>
    </AlumniLayout>
  );
};

export default AlumniProfile;
