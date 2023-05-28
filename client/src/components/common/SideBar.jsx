import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';
import coding from '../../assets/coding.json';

function SideBar() {
  const role = localStorage.getItem('role');
  const location = useLocation();
  const route = {
    Dashboard: ['/dashboard'],
    ...(role === 'student' && { ['Peer Ratings']: ['/peerratings'] }),
    ...(role === 'instructor' && { ['Candidate List']: ['/candidates'] }),
    Curriculum: ['/curriculum'],
    ...(role === 'instructor' && { Cohorts: ['/cohorts'] }),
    ...(role === 'instructor' && { 'Mark Students': ['/markstudents'] }),
    ...(role === 'instructor' && { ['Add Skills']: ['/addskills'] }),
    ...(role === 'instructor' && {
      ['Migrate Students']: ['/migratestudents'],
    }),
    ...(role === 'instructor' && { ['Repo Access']: ['/repoaccess'] }),
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
              <Lottie
                animationData={coding}
                style={{ width: '230px', margin: 'auto' }}
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
