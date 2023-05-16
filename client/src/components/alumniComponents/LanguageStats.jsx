import React from 'react';

function LanguageStats() {
  const userName = 'pollock-nag';
  return (
    <>
      <div className="pl-24 pt-10">
        <a href={`https://github.com/${userName}`}>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}&layout=donut`}
            alt="Top Langs"
          />
        </a>
      </div>
      {/* <div className="pl-24 pt-5">
        <a href={`https://github.com/${userName}`}>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}&layout=pie`}
            alt="Top Langs"
          />
        </a>
      </div> */}
    </>
  );
}

export default LanguageStats;
