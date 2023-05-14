import React from 'react';

function SkillsChips({ skillsName, type }) {
  return (
    <div className="border-1 rounded-xl border-gray-300 shadow-md mb-10">
      <div className="bg-purple-500 text-white text-center text-xl p-1 rounded-t-xl">
        {type}
      </div>
      <div className="p-2">
        {/* Soft Skills Chips */}
        {skillsName?.map((skill) => (
          <div
            className="badge  badge-lg badge-outline m-1"
            key={skill.skillName}
          >
            {skill.skillName}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsChips;
