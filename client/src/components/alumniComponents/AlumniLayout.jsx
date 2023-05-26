import React from 'react';
import AlumniSidebar from '../alumniComponents/AlumniSidebar';

function AlumniLayout({ children }) {
  return (
    <>
      <div className="flex">
        <div className="">
          <div className="fixed">
            <AlumniSidebar></AlumniSidebar>
          </div>
        </div>
        <div className="w-[100vw] ml-[260px]">{children}</div>
      </div>
    </>
  );
}

export default AlumniLayout;
