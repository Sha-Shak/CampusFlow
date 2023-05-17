import React from 'react';
import { RxDashboard } from 'react-icons/rx';
import { FaCode, FaBrain } from 'react-icons/fa';
import { RiUserSettingsLine } from 'react-icons/ri';
import { BsBriefcase } from 'react-icons/bs';
import { GrCertificate, GrConnect } from 'react-icons/gr';
import { IoCalendarClearOutline } from 'react-icons/io5';
import SmallNameCard from './SmallNameCard';
import { useNavigate } from 'react-router-dom';

const AlumniSidebar = () => {
  const navigate = useNavigate();

  const handleDashboard = () => {
    console.log('Dashboard');
    navigate('/alumni/profile');
  };
  const handleProjectCode = () => {
    console.log('Project Code');
    navigate('/alumni/projectcode');
  };
  const handleTechSkill = () => {
    console.log('Tech Skill');
  };
  const handleSoftSkill = () => {
    console.log('Soft Skill');
  };
  const handleJunior = () => {
    console.log('Junior');
  };
  const handleSenior = () => {
    console.log('Senior');
  };
  const handleExperience = () => {
    console.log('Experience');
  };
  const handleCertification = () => {
    console.log('Certification');
  };

  return (
    <>
      <ul className="menu p-4 w-64 bg-#FFFBFB bg-white shadow-xl h-screen flex-col flex-wrap">
        <div className="flex">
          <a className="btn btn-ghost normal-case text-xl text-purple-700">
            CampusFlow
          </a>
        </div>
        <div className="mt-4">
          <li>
            <a onClick={handleDashboard}>
              <RxDashboard color="gray" />
              Overview
            </a>
          </li>
          <li>
            <a onClick={handleProjectCode}>
              {' '}
              <FaCode color="gray" />
              Project Code
            </a>
          </li>
          <li>
            <a onClick={handleTechSkill}>
              <RiUserSettingsLine color="gray" />
              Tech Skills
            </a>
          </li>
          <li>
            <a onClick={handleSoftSkill}>
              <FaBrain color="gray" />
              Soft Skills
            </a>
          </li>
          <li>
            <a onClick={handleExperience}>
              <BsBriefcase color="gray" />
              Experience
            </a>
          </li>
          <li>
            <a onClick={handleCertification}>
              <GrCertificate />
              Certifications
            </a>
          </li>
        </div>
        <div className="m-auto">
          <SmallNameCard />
        </div>
      </ul>
    </>
  );
};

export default AlumniSidebar;
