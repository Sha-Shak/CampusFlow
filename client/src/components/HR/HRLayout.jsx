import React from 'react';
import AlumniSidebar from '../alumniComponents/AlumniSidebar';
import MiniSearchResults from './MiniSearchResults';

function HRLayout({ children }) {
  return (
    <>
      <div className="flex">
        <div className="">
          <div className="fixed m-4  bg-purple-50 p-2 shadow-lg h-[90vh] rounded-2xl overflow-y-auto">
            <div className="text-2xl mt-4 text-center ">Related Candidates</div>
            <MiniSearchResults />
          </div>
        </div>
        <div className="w-[100vw] ml-[300px]">{children}</div>
      </div>
    </>
  );
}

export default HRLayout;
