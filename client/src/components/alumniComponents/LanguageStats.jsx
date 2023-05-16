import React from 'react';

function LanguageStats() {
  const userName = 'pollock-nag';
  return (
    <div className="p-24">
      <a href={`https://github.com/${userName}`}>
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}&layout=compact`}
          alt="Top Langs"
          className="h-96 w-96 bg-rose"
        />
      </a>
    </div>
  );
}

export default LanguageStats;
