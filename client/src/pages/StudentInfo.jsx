import React from 'react';
import Layout from '../components/Layout';
import SkillsRadarChart from '../components/SkillsRadarChart';
import StudentSidebar from '../components/StudentSidebar';
import UnitMarksChart from '../components/UnitMarks';

function StudentInfo() {
  return (
    <Layout>
      <div className="flex">
        <div className="flex-[0.9] rounded-xl min-h-[80vh] bg-white bg-clip-border  border-[#701ddc1f] border-2 shadow-3xl w-[60vw] p-10 ">
          <div className="flex justify-between">
            <div>
              <SkillsRadarChart />
            </div>
            <div>
              <SkillsRadarChart />
            </div>
            <div>
              <UnitMarksChart />
            </div>
          </div>

          {/* <div className="w-[300px]"> */}
          {/* <SkillsRadarChart /> */}
          {/* </div> */}
        </div>
        <div className="flex-[0.1] ml-2 ">
          <StudentSidebar />
        </div>
      </div>
    </Layout>
  );
}

export default StudentInfo;
