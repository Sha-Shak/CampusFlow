import React, { useEffect, useState } from 'react';

import AlumniInfoCard from '../components/alumniComponents/AlumniInfoCard';
import Experience from '../components/alumniComponents/Experience';
import Portfolio from '../components/alumniComponents/Portfolio';
import AlumniLayout from '../components/alumniComponents/AlumniLayout';
import GithubGraph from '../components/alumniComponents/GithubGraph';
import SiteChip from '../components/alumniComponents/SiteChip';
import SkillsRadarChart from '../components/StudentInfo/SkillsRadarChart';
import SkillsTabs from './SkillsTabs';
import { useGetAlumniByIdQuery } from '../features/alumni/alumniApi';
import { useGetStudentByIdQuery } from '../features/student/studentApi';
import { useSelector } from 'react-redux';

const AlumniProfile = () => {
  const [activeTab1, setActiveTab1] = useState('tab-active');
  const [activeTab2, setActiveTab2] = useState('');
  const [activeTab3, setActiveTab3] = useState('');
  const [chartData, setChartData] = useState({});
  const [filteredTechSkills, setFilteredTechSkills] = useState([]);
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);
  const [testing, setTesting] = useState([]);

  const { _id: studentId, alumniId } =
    useSelector((state) => state?.auth?.user) || {};

  console.log('studentId', studentId);
  const { data: studentInfo, isSuccess } = useGetStudentByIdQuery({
    studentId,
  });

  const { data: alumniInfo, error } = useGetAlumniByIdQuery(alumniId);

  const techStack = [];
  alumniInfo?.projects.map((project) => {
    project.techStack.map((tech) => {
      techStack.push(tech);
    });
  });
  // ***********************************************

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

  useEffect(() => {
    setChartData(studentInfo?.checkpoints[3]);
    setFilteredTechSkills(
      studentInfo?.checkpoints[3]?.techSkills.filter((skill) => {
        if (skill?.skill?.stack?.length > 0) return skill?.skill;
      })
    );
  }, [studentInfo]);

  useEffect(() => {
    setFrontend(
      filteredTechSkills?.filter((skill) => {
        return skill?.skill?.stack?.includes('frontend') && skill?.marks > 5;
      })
    );
    setBackend(
      filteredTechSkills?.filter((skill) => {
        return skill?.skill?.stack?.includes('backend') && skill?.marks > 5;
      })
    );
    setTesting(
      filteredTechSkills?.filter((skill) => {
        return skill?.skill?.stack?.includes('testing') && skill?.marks > 5;
      })
    );
  }, [filteredTechSkills]);

  return (
    <AlumniLayout>
      <div className="flex gap-4 m-4 ">
        <div className="flex-[0.3] flex flex-col gap-5">
          <AlumniInfoCard
            alumniInfo={alumniInfo}
            githubUsername={studentInfo?.githubUsername}
          />
          <Experience alumniInfo={alumniInfo} />

          {/* <LanguageStats /> */}

          <div className="p-2 bg-white rounded-2xl min-h-[39vh] shadow-md ">
            <div className="tabs">
              <button
                className={`tab tab-lifted tab-lg ${activeTab1} text-lg `}
                onClick={() => activate(1)}
              >
                Frontend
              </button>
              <button
                className={`tab tab-lifted tab-lg ${activeTab2} text-lg`}
                onClick={() => activate(2)}
              >
                Backend
              </button>
              <button
                className={`tab tab-lifted tab-lg ${activeTab3} text-lg`}
                onClick={() => activate(3)}
              >
                Testing
              </button>
            </div>
            {activeTab1 === 'tab-active' ? (
              <SkillsTabs type={'frontend'} skills={frontend} />
            ) : null}
            {activeTab2 === 'tab-active' ? (
              <SkillsTabs type={'backend'} skills={backend} />
            ) : null}
            {activeTab3 === 'tab-active' ? (
              <SkillsTabs type={'testing'} skills={testing} />
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
                <SkillsRadarChart skills={chartData?.softSkills} />
              </div>
              <div className="flex-[0.5] h-64 w-64 bg-white rounded-3xl p-5 shadow-md pb-10">
                <span className="text-white bg-purple-500 p-3 rounded-full">
                  Tech Skills
                </span>
                <SkillsRadarChart skills={chartData?.techSkills} />
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
