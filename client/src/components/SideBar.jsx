import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function SideBar() {
  const location = useLocation();
  const route = {
    ['Dashboard']: ['/dashboard'],
    ['Candidate List']: ['/candidates'],
    ['Curriculum']: ['/curriculum'],
    ['Cohorts']: ['/cohorts'],
    ['Mark Students']: ['/markstudents'],
    ['Add Skills']: ['/addskills'],
    ['Migrate Students']: ['/migratestudents'],
    ['Repo Access']: ['/repoaccess'],
  };

  return (
    <>
      <div>
        <div className="drawer sticky">
          <div className="drawer-side">
            <ul className="menu min-w-[270px] p-4  text-base-content m-5 rounded-2xl bg-white bg-clip-border  border-[#701ddc1f] border-2 shadow-3xl min-h-[80vh] sticky top-0">
              {Object.keys(route).map((key, index) => (
                <li
                  key={index}
                  className={
                    location.pathname === route[key][0]
                      ? 'bg-purple-200 rounded-[50px] '
                      : ''
                  }
                >
                  <Link to={route[key][0]}>{key}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
