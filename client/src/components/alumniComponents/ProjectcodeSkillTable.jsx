import React from 'react';

function ProjectcodeSkillTable({ type, skills }) {
  return (
    <>
      <div className="overflow-x-auto max-h-[67vh] ">
        <table className="table w-full table-zebra table-auto overflow-auto">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>{type}</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {skills?.map((skill, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{skill?.skill?.skillName}</td>
                <td>{skill?.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProjectcodeSkillTable;
