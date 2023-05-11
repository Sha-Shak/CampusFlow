import React from 'react';
import { RxDashboard } from 'react-icons/rx';
import { FaCode, FaBrain } from 'react-icons/fa';
import { RiUserSettingsLine } from 'react-icons/ri';
import { BsBriefcase } from 'react-icons/bs';
import { GrCertificate, GrConnect } from 'react-icons/gr';
import { IoCalendarClearOutline } from 'react-icons/io5';
import NavBar from '../NavBar';
import SmallNameCard from './SmallNameCard';

const AlumniSidebar = () => {
  const sideOptions = (
    <>
      <li>
        <a>
          <RxDashboard color="gray" />
          Overview
        </a>
      </li>
      <li>
        <a>
          {' '}
          <FaCode color="gray" />
          Project Code
        </a>
      </li>
      <li>
        <a>
          <RiUserSettingsLine color="gray" />
          Tech Skills
        </a>
      </li>
      <li>
        <a>
          <FaBrain color="gray" />
          Soft Skills
        </a>
      </li>
      <li>
        <a>
          <IoCalendarClearOutline color="gray" />
          Junior
        </a>
      </li>
      <li>
        <a>
          <GrConnect />
          Senior
        </a>
      </li>
      <li>
        <a>
          <BsBriefcase color="gray" />
          Experience
        </a>
      </li>
      <li>
        <a>
          <GrCertificate />
          Certifications
        </a>
      </li>
    </>
  );
  return (
    <>
      {/* <NavBar /> */}
      <ul className="menu p-4 w-60 bg-#FFFBFB bg-white shadow-xl h-screen flex-row flex-wrap ">
        <div>{sideOptions}</div>
        <div className="m-auto">
          <SmallNameCard />
        </div>
      </ul>
    </>
  );
};

export default AlumniSidebar;
