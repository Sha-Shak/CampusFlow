import React from 'react';

function LanguageStats() {
  const userName = 'zahidtwt';
  return (
    <>
      <div className="scale-125">
        <a href={`https://github.com/${userName}`}>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}&layout=donut`}
            alt="Top Langs"
          />
        </a>
      </div>
    </>
  );
}

export default LanguageStats;
