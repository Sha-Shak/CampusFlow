import React from 'react';
import AlumniSidebar from '../components/alumniComponents/AlumniSidebar';
import AlumniInfoCard from '../components/alumniComponents/AlumniInfoCard';
import Experience from '../components/alumniComponents/Experience';
import ProjectSection from '../components/alumniComponents/ProjectSection';
import Portfolio from '../components/alumniComponents/Portfolio';
import AlumniLayout from '../components/alumniComponents/AlumniLayout';
import GithubGraph from '../components/alumniComponents/GithubGraph';

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
