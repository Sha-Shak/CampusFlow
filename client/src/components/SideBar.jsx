import React from 'react';

function SideBar({ children }) {
  return (
    <>
      <div>
        <div className="drawer sticky  ">
          <div className="drawer-side ">
            <ul className="menu min-w-[270px] p-4 bg-white text-base-content  m-5 rounded-2xl shadow-xl   min-h-[80vh] sticky top-0">
              <li>
                <a>Sidebar Item 1</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
