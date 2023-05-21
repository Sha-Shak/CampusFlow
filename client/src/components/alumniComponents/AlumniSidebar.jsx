import React from 'react';
import { RxDashboard } from 'react-icons/rx';
import { FaCode, FaBrain, FaUserGraduate } from 'react-icons/fa';
import { RiUserSettingsLine } from 'react-icons/ri';
import { BsBriefcase } from 'react-icons/bs';
import { GrCertificate, GrConnect } from 'react-icons/gr';
import { IoCalendarClearOutline, IoLogOutOutline } from 'react-icons/io5';
import SmallNameCard from './SmallNameCard';
import { useNavigate } from 'react-router-dom';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { userLoggedOut } from '../../features/auth/authSlice';
import { Button } from '@mui/material';

const AlumniSidebar = () => {
  const dispatch = useDispatch();
  const { name, profileImg, githubUsername } =
    useSelector((state) => state?.auth?.user) || {};
  const role = useSelector((state) => state?.auth?.role);
  const logout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem('role');
    window.location.href = '/';
  };
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate('/alumni/profile');
  };
  const handleProjectCode = () => {
    navigate('/alumni/projectcode');
  };

  const handlePortfolio = () => {
    navigate('/alumni/profile/portfolio');
  };
  const handleEducation = () => {
    navigate('/alumni/education');
  };
  const handleCertification = () => {
    alert('coming soon');
    console.log('Certification');
  };
  const handleExperience = () => {
    navigate('/alumni/experience');
  };

  return (
    <>
      <ul className=" menu p-4 w-64 bg-#FFFBFB bg-white shadow-xl h-screen flex-col flex-wrap">
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
            <a onClick={handlePortfolio}>
              <AiOutlineFundProjectionScreen color="gray" />
              Portfolio
            </a>
          </li>
          <li>
            <a onClick={handleEducation}>
              <FaUserGraduate />
              Education
            </a>
          </li>
          <li>
            <a onClick={handleExperience}>
              <BsBriefcase color="gray" /> Experience
            </a>
          </li>
          <li>
            <a onClick={handleCertification}>
              <GrCertificate />
              Certifications
            </a>
          </li>
        </div>
        <div>
          <div className=" mt-[30vh]">
            <SmallNameCard name={name} profileImg={profileImg} role={role} />
          </div>
          <div className=" mt-5 ">
            <Button
              variant="outlined"
              color="primary"
              onClick={logout}
              fullWidth
              size="small"
            >
              <span className="text-lg capitalize"> Logout </span>
              <IoLogOutOutline className="text-2xl ml-2" onClick={logout} />
            </Button>
          </div>
        </div>
      </ul>
    </>
  );
};

export default AlumniSidebar;
