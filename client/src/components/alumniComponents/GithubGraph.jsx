import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubGraph = () => {
  let userName = 'khrrsn';
  return (
    <div className="p-24">
      <div className="bg-white p-10">
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
