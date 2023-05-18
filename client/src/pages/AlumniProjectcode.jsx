import React, { useState } from 'react';
import AlumniLayout from '../components/alumniComponents/AlumniLayout';
import { useGetStudentWeekInfoQuery } from '../features/student/studentApi';
import SkillsRadarChart from '../components/StudentInfo/SkillsRadarChart';
import UnitMarksChart from './../components/StudentInfo/UnitMarks';
// import StudentSidebar from './../components/StudentInfo/StudentSidebar';
import AssessmentMarksChart from './../components/StudentInfo/AssessmentMarksChart';
import ProjectcodeSkillTable from '../components/alumniComponents/ProjectcodeSkillTable';
function AlumniProjectcode() {
  const [selectedWeek, setSelectedWeek] = useState('Week 1');
  const [weekSelected, setWeekSelected] = useState(1);
  const { data: studentWeekInfo } = useGetStudentWeekInfoQuery({
    studentId: '64631226db442509e170a1e5',
    week: weekSelected,
  });

  const [selectedSoftSkillTab, setSelectedSoftSkillTab] =
    useState('tab-active');
  const [selectedTechSkillTab, setSelectedTechSkillTab] = useState('');
  console.log(studentWeekInfo?.softSkills);

  const [selectedCheckpoint, setSelectedCheckpoint] = useState(null);

  const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'];
  const checkpoints = ['Mid Junior', 'End Junior', 'Mid Senior', 'End Senior'];

  const handleSelect = (week, index) => {
    const weekSelected = index + 1;
    setSelectedWeek(week);
    setWeekSelected(weekSelected);
  };
  const handleCheckPointSelect = (checkpoint) => {
    setSelectedCheckpoint(checkpoint);
  };

  const selectSoftSkill = (softSkill) => {
    setSelectedSoftSkillTab('tab-active');
    setSelectedTechSkillTab('');
  };
  const selectTechSkill = (softSkill) => {
    setSelectedSoftSkillTab('');
    setSelectedTechSkillTab('tab-active');
  };

  return (
    <AlumniLayout>
      <div className="flex justify-center">
        <div className=" rounded-xl min-h-[80vh] bg-clip-border  shadow-3xl  p-10 pt-5 ">
          {/* 
          
          Week Dropdown
          
          */}

          <span className=" dropdown dropdown-hover text-right ml-auto mb-3 ">
            <label
              tabIndex={0}
              className="w-32 text-center btn m-1 bg-purple-100 border-0 text-purple-950 hover:bg-purple-200 hover:text-purple-900 shadow-sm border-b-4 border-b-purple-500"
            >
              {selectedWeek || 'Select Week'}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2  bg-base-100 rounded-box w-32  text-center  bg-purple-50 shadow-2xl"
            >
              {weeks.map((week, index) => (
                <li key={week} onClick={() => handleSelect(week, index)}>
                  <a>{week}</a>
                </li>
              ))}
            </ul>
          </span>

          <span className=" dropdown dropdown-hover text-right mb-3 ">
            <label
              tabIndex={0}
              className="w-32 text-center btn m-1 bg-green-100 border-0 text-green-950 hover:bg-green-200 hover:text-green-900 shadow-sm border-b-4 border-b-green-600"
            >
              {selectedCheckpoint || 'Checkpoint'}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2  bg-base-100 rounded-box w-32  text-center  bg-green-50 shadow-2xl"
            >
              {checkpoints.map((checkpoint) => (
                <li
                  key={checkpoint}
                  onClick={() => handleCheckPointSelect(checkpoint)}
                >
                  <a>{checkpoint}</a>
                </li>
              ))}
            </ul>
          </span>
          <div className=" w-[70vw]">
            <div className="flex justify-between ">
              <div className="flex-[0.5] bg-white rounded-3xl h-80 p-5 mr-4 shadow-md pb-10">
                <span className="text-white bg-purple-500 p-3 rounded-full">
                  Soft Skills
                </span>
                <SkillsRadarChart skills={studentWeekInfo?.softSkills || []} />
              </div>
              <div className="flex-[0.5] h-80 bg-white rounded-3xl p-5 shadow-md pb-10">
                <span className="text-white bg-purple-500 p-3 rounded-full">
                  Tech Skills
                </span>
                <SkillsRadarChart skills={studentWeekInfo?.techSkills || []} />
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <div className="flex-[0.35] h-80 bg-white rounded-3xl p-5 mr-4 shadow-md ">
                <AssessmentMarksChart />
              </div>
              <div className="flex-[0.65] bg-white rounded-3xl p-5  shadow-md h-80">
                <UnitMarksChart />
              </div>
            </div>
          </div>
          {/* <div className="w-[300px]"> */}
          {/* <SkillsRadarChart /> */}
          {/* </div> */}
          <div classsName="flex justify-center mt-10">
            <div className=" mb-10 mt-8 ">
              <div className="tabs flex justify-center  ">
                <div
                  className={`tab tab-lifted ${selectedSoftSkillTab}  text-md w-96 h-10 bg-purple-200`}
                  onClick={selectSoftSkill}
                >
                  Soft Skill
                </div>
                <div
                  className={`tab tab-lifted ${selectedTechSkillTab} text-md w-96 h-10 bg-purple-200`}
                  onClick={selectTechSkill}
                >
                  Tech Skill
                </div>
              </div>
              {selectedTechSkillTab === 'tab-active' ? (
                <div className="">
                  <ProjectcodeSkillTable type="techskills" />
                </div>
              ) : (
                <>
                  <ProjectcodeSkillTable type="softskills" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* TAB  */}
    </AlumniLayout>
  );
}

export default AlumniProjectcode;
