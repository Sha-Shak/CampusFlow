import React, { useEffect } from 'react';
import { useDeleteSkillMutation } from '../features/skill/skillApi';
import toast, { Toaster } from 'react-hot-toast';

function SkillsChips({ skillsName, type, refetchSkills }) {
  const [deleteSkill, { isSuccess, isError }] = useDeleteSkillMutation();
  const handleDeleteSkill = (skillId) => {
    if (window.confirm('Are you sure you want to delete this skill?')) {
      deleteSkill(skillId);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success('Skill Deleted Successfully');
      refetchSkills();
    }
    if (isError) {
      toast.error('Something went wrong');
    }
  }, [isSuccess, isError]);
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
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className=" w-4 h-4 stroke-current "
              onClick={() => handleDeleteSkill(skill._id)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            {skill.skillName}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsChips;
