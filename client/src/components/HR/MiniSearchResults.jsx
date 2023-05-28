import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Chip from '../alumniComponents/Chip';

function MiniSearchResults() {
  const { results } = useSelector((state) => state.results);
  const [activeId, setActiveId] = useState('');
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/hr/candidate/${id}`);
  };
  const currentUrl = window.location.href;
  useEffect(() => {
    const id = currentUrl.split('/')[5];
    setActiveId(id);
  }, [currentUrl]);

  return (
    <>
      {results?.map((result) => (
        <div
          key={result?.studentId}
          className={`bg-white mt-6 rounded-lg shadow-md p-2 cursor-pointer hover:bg-gray-100 ${
            result?.studentId == activeId
              ? 'bg-purple-200 border-2 border-purple-300'
              : ''
          }`}
          onClick={() => {
            handleClick(result?.studentId);
          }}
        >
          <div className="flex gap-3 items-center">
            <div className="w-16 rounded-xl bg-[#C39AF7]">
              <img
                src={`${result?.alumniDetails?.image}`}
                alt="Profile"
                className="rounded-2xl p-1 shadow-xl"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <div className="text-md font-semibold text-purple-700 drop-shadow-lg">
                  {result?.alumniDetails?.name}
                </div>
                <div className="text-sm text-gray-700 drop-shadow-lg capitalize">
                  {result?.alumniDetails?.stack} developer
                </div>
              </div>
              <Chip
                name="View Profile"
                padding={3}
                round="full"
                customColor="gray-200"
                borderColor="gray-300"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default MiniSearchResults;
