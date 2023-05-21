import React from 'react';
import GoogleAuth from '../../components/HR/GoogleAuth';

function HRloginPage() {
  return (
    <div className="flex h-screen  ">
      <div className="left bg-rose-500 w-[50%]">
        <GoogleAuth />
      </div>
      <div className="right bg-indigo-500 w-[50%]">RIGHT</div>
    </div>
  );
}

export default HRloginPage;
