import React, { useState } from 'react';
import AlumniInfoCard from '../components/AlumniComponents/AlumniInfoCard';
import Experience from '../components/AlumniComponents/Experience';
import Portfolio from '../components/alumniComponents/Portfolio';
import AlumniLayout from '../components/alumniComponents/AlumniLayout';
import GithubGraph from '../components/alumniComponents/GithubGraph';
import SiteChip from '../components/AlumniComponents/SiteChip';
import SkillsRadarChart from '../components/StudentInfo/SkillsRadarChart';
import SkillsTabs from './SkillsTabs';
import { useGetAlumniByIdQuery } from '../features/alumni/alumniApi';

const AlumniProfile = () => {
  const alumniId = '646213253572798cad80c70e';
  const {
    data: alumniInfo,
    isSuccess,
    error,
  } = useGetAlumniByIdQuery(alumniId);

  console.log('dbug', alumniInfo);
  const techStack = [];
  alumniInfo?.projects.map((project) => {
    project.techStack.map((tech) => {
      techStack.push(tech);
    });
  });
  // ***********************************************

  const [activeTab1, setActiveTab1] = useState('tab-active');
  const [activeTab2, setActiveTab2] = useState('');
  const [activeTab3, setActiveTab3] = useState('');
  const activate = (tab) => {
    if (tab === 1) {
      setActiveTab1('tab-active');
      setActiveTab2('');
      setActiveTab3('');
    }
    if (tab === 2) {
      setActiveTab1('');
      setActiveTab2('tab-active');
      setActiveTab3('');
    }
    if (tab === 3) {
      setActiveTab1('');
      setActiveTab2('');
      setActiveTab3('tab-active');
    }
  };
  return (
    <AlumniLayout>
      <div className="flex gap-4 m-4 ">
        <div className="flex-[0.3] flex flex-col gap-5">
          <AlumniInfoCard alumniInfo={alumniInfo} />
          <Experience alumniInfo={alumniInfo} />

          {/* <LanguageStats /> */}

          <div className="p-2 bg-white rounded-2xl min-h-[39vh] shadow-md ">
            <div className="tabs">
              <button
                className={`tab tab-lifted ${activeTab1}`}
                onClick={() => activate(1)}
              >
                Frontend
              </button>
              <button
                className={`tab tab-lifted ${activeTab2}`}
                onClick={() => activate(2)}
              >
                Backend
              </button>
              <button
                className={`tab tab-lifted ${activeTab3}`}
                onClick={() => activate(3)}
              >
                Testing
              </button>
            </div>
            {activeTab1 === 'tab-active' ? (
              <SkillsTabs type={'frontend'} />
            ) : null}
            {activeTab2 === 'tab-active' ? (
              <SkillsTabs type={'backend'} />
            ) : null}
            {activeTab3 === 'tab-active' ? (
              <SkillsTabs type={'testing'} />
            ) : null}
          </div>
        </div>
        <div className="flex-[0.7] flex flex-col gap-5">
          <div className="Charts">
            <div className="flex justify-between">
              <div className="flex-[0.5] bg-white rounded-3xl h-64 w-64 p-5 mr-4 shadow-md pb-10">
                <span className="text-white bg-purple-500 p-3 rounded-full">
                  Soft Skills
                </span>
                <SkillsRadarChart />
              </div>
              <div className="flex-[0.5] h-64 w-64 bg-white rounded-3xl p-5 shadow-md pb-10">
                <span className="text-white bg-purple-500 p-3 rounded-full">
                  Tech Skills
                </span>
                <SkillsRadarChart />
              </div>
            </div>
          </div>

          <Portfolio alumniInfo={alumniInfo} techStack={techStack} />
          <div className="flex gap-4">
            <GithubGraph alumniInfo={alumniInfo} />
            <SiteChip alumniInfo={alumniInfo} />
          </div>
        </div>
      </div>
    </AlumniLayout>
  );
};

export default AlumniProfile;
