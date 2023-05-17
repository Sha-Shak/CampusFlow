import React from 'react';

function ProjectcodeSkillTable({ type }) {
  return (
    <div>
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Skill Name ➡ {type}</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectcodeSkillTable;
