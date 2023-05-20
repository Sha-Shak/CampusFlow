import React from 'react';

function ProjectcodeSkillTable({ type, skills }) {
  return (
    <div>
      <div className="overflow-x-auto ">
        <table className="table w-full table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>{type}</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {skills?.map((skill, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{skill.skill.skillName}</td>
                <td>{skill.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectcodeSkillTable;
