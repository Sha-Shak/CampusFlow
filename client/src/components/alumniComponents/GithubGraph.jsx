import React, { useEffect, useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubGraph = ({ githubUsername }) => {
  return (
    <>
      {githubUsername && (
        <div>
          <div className="bg-white h-52 pl-8 pr-8 w-fit rounded-2xl pt-2 pb-2 shadow-md">
            <div className="text-2xl font-bold mb-1">Github</div>
            <GitHubCalendar
              blockMargin={5}
              blockRadius={7}
              blockSize={14}
              username={`${githubUsername}`}
              theme={{
                light: ['ccc', 'purple'],
                dark: ['ccc', 'purple'],
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GithubGraph;
