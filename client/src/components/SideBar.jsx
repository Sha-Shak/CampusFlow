import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function SideBar() {
  const location = useLocation();

  return (
    <>
      <div>
        <div className="drawer sticky">
          <div className="drawer-side">
            <ul className="menu min-w-[270px] p-4 bg-white text-base-content m-5 rounded-2xl shadow-xl min-h-[80vh] sticky top-0">
              <li
                className={
                  location.pathname === '/dashboard'
                    ? 'bg-purple-200 rounded-[50px]'
                    : ''
                }
              >
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li
                className={
                  location.pathname === '/candidates'
                    ? 'bg-purple-200 rounded-[50px]'
                    : ''
                }
              >
                <Link to="/candidates">Candidate List</Link>
              </li>
              <li
                className={
                  location.pathname === '/curriculum'
                    ? 'bg-purple-200 rounded-[50px]'
                    : ''
                }
              >
                <Link to="/curriculum">Curriculum</Link>
              </li>
              <li
                className={
                  location.pathname === '/cohorts'
                    ? 'bg-purple-200 rounded-[50px]'
                    : ''
                }
              >
                <Link to="/cohorts">Cohorts</Link>
              </li>
              <li
                className={
                  location.pathname === '/markstudents'
                    ? 'bg-purple-200 rounded-[50px]'
                    : ''
                }
              >
                <Link to="/markstudents">Mark Students</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
