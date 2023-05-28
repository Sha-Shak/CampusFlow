import React from 'react';
import searchUser from '../../assets/search-user.json';
import Lottie from 'lottie-react';

function SearchLoader() {
  return (
    <div className="flex justify-center items-center  h-screen ">
      <Lottie animationData={searchUser} style={{ height: '800px' }} />
    </div>
  );
}

export default SearchLoader;
