import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubGraph = () => {
  let userName = 'khrrsn';
  return (
    <div>
      <div className="bg-white h-52 pl-8 pr-8 w-fit rounded-2xl pt-2 pb-2 shadow-md">
        <div className="text-2xl font-bold mb-1">Github</div>
        <GitHubCalendar
          blockMargin={5}
          blockRadius={7}
          blockSize={14}
          username={`${userName}`}
          theme={{
            light: ['ccc', 'purple'],
            dark: ['ccc', 'purple'],
          }}
        />
      </div>
    </div>
  );
};

export default GithubGraph;
