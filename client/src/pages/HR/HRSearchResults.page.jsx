import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import SearchLoader from '../../components/HR/SearchLoader';
import TalentCard from '../../components/HR/TalentCard';

function HRSearchResults() {
  const { results } = useSelector((state) => state.results);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (results) {
      console.log(results);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }, [results]);

  return (
    <>
      <div className="flex justify-between mx-10 p-2 px-5 bg-purple-100 shadow-xl  mb-5 ">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        <div className="flex">
          <div className="form-control ">
            <input
              type="text"
              placeholder="Search Candidates"
              className="input input-bordered w-[60vw]"
            />
          </div>
          <button className=" border-0  normal-case text-md mx-5 ">
            <FaSearch size={25} color={'purple'} />
          </button>
        </div>
      </div>
      {isLoading && <SearchLoader />}
      {!isLoading && (
        <div>
          {results?.map((result) => (
            <div className="flex justify-center items-center">
              <TalentCard result={result} studentId={result?.studentId} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default HRSearchResults;
