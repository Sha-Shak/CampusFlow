import Lottie from 'lottie-react';
import React from 'react';
import loader from '../../assets/loader.json';

function Loader() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white bg-opacity-70 backdrop-filter backdrop-blur-md z-50">
      <Lottie animationData={loader} style={{ width: '250px' }}></Lottie>
    </div>
  );
}

export default Loader;
