import React from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';
function Layout({ children }) {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex">
        <div className="">
          <div className="fixed">
            <SideBar></SideBar>
          </div>
        </div>
        <div className="w-[100vw] mt-5 mr-5 ml-[300px]">{children}</div>
      </div>
    </>
  );
}

export default Layout;
