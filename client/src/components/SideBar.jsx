import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <>
      <div>
        <div className="drawer sticky  ">
          <div className="drawer-side ">
            <ul className="menu min-w-[270px] p-4 bg-white text-base-content  m-5 rounded-2xl shadow-xl   min-h-[80vh] sticky top-0">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/candidates">Candidate List</Link>
              </li>
              <li>
                <Link to="/curriculum">Curriculum</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
