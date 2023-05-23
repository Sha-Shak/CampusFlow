import React, { useState, useEffect } from 'react';
import AlumniLayout from '../components/alumniComponents/AlumniLayout';
import { useGetStudentWeekInfoByTypeQuery } from '../features/student/studentApi';
import { useGetAssessmentMarksByStudentIDQuery } from '../features/student/studentApi';
import { useGetUnitMarksByStudentIDQuery } from '../features/student/studentApi';
import SkillsRadarChart from '../components/StudentInfo/SkillsRadarChart';
import UnitMarksChart from './../components/StudentInfo/UnitMarks';
import AssessmentMarksChart from './../components/StudentInfo/AssessmentMarksChart';
import ProjectcodeSkillTable from '../components/alumniComponents/ProjectcodeSkillTable';
import { useSelector } from 'react-redux';
function AlumniProjectcode() {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedCheckpoint, setSelectedCheckpoint] = useState(1);
  const [selectedType, setSelectedType] = useState(1);
  const [softSkillTab, setSoftSkillTab] = useState('tab-active font-bold');
  const [techSkillTab, setTechSkillTab] = useState('');
  const [chartData, setChartData] = useState([]);
  const [tableData, setTableData] = useState([]);

  // Getting student id from redux store
  const { _id: id } = useSelector((state) => state?.auth?.user) || {};

  // API calls
  const { data: studentWeekInfo } = useGetStudentWeekInfoByTypeQuery({
    studentId: id,
    week: selectedWeek,
    type: selectedType,
  });
  const { data: midEndData } = useGetMidEndDataByStudentIDQuery({
    studentId: id,
  });
  const { data: assessmentMarks } = useGetAssessmentMarksByStudentIDQuery({
    studentId: id,
  });
  const { data: unitMarks } = useGetUnitMarksByStudentIDQuery({
    studentId: id,
  });

  // Dropdown options
  const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'];
  const checkpoints = ['Mid Junior', 'End Junior', 'Mid Senior', 'End Senior'];
  const types = ['junior', 'senior'];

  useEffect(() => {
    if (studentWeekInfo) {
      setChartData(studentWeekInfo.weekInfo);
      setTableData(studentWeekInfo.weekInfo);
    }
  }, [studentWeekInfo]);

  useEffect(() => {
    if (midEndData) {
      setChartData(midEndData[selectedCheckpoint - 1]);
    }
  }, [midEndData, selectedCheckpoint]);

  console.log('tableData', tableData?.techSkills);

  // All the functions for handling the actions
  const handleSelect = (index) => {
    const weekSelected = index + 1;
    setSelectedWeek(weekSelected);
    setChartData(studentWeekInfo);
  };
  const handleCheckPointSelect = (index) => {
    const checkpoint = index + 1;
    setSelectedCheckpoint(checkpoint);
  };

  const handleType = (index) => {
    const type = index + 1;
    setSelectedType(type);
  };

  const selectSoftSkill = (softSkill) => {
    setSoftSkillTab('tab-active font-bold');
    setTechSkillTab('');
  };
  const selectTechSkill = (techSkill) => {
    setSoftSkillTab('');
    setTechSkillTab('tab-active font-bold');
  };

  return (
    <AlumniLayout>
      <div className="flex justify-center ">
        <div className=" rounded-xl min-h-[80vh] bg-clip-border  shadow-3xl   pt-5 ">
          <div className="flex-[1] rounded-xl min-h-[80vh] bg-clip-border  shadow-3xl  pt-5 ">
            {/* Type Dropdown*/}
            <span className=" dropdown dropdown-hover text-right ml-auto mb-3 ">
              <label
                tabIndex={0}
                className="w-32 text-center btn m-1 bg-orange-100 border-0 text-orange-950 hover:bg-orange-200 hover:text-orange-900 shadow-sm border-b-4 border-b-orange-600"
              >
                {types[selectedType - 1]}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2  bg-base-100 rounded-box w-32  text-center  bg-orange-50 shadow-2xl"
              >
                {types.map((type, index) => (
                  <li key={index} onClick={() => handleType(index)}>
                    <a className="capitalize">{type}</a>
                  </li>
                ))}
              </ul>
            </span>
            {/* Week dropdown */}
            <span className=" dropdown dropdown-hover text-right ml-auto mb-3 ">
              <label
                tabIndex={0}
                className="w-32 text-center btn m-1 bg-purple-100 border-0 text-purple-950 hover:bg-purple-200 hover:text-purple-900 shadow-sm border-b-4 border-b-purple-500"
              >
                {weeks[selectedWeek - 1]}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2  bg-base-100 rounded-box w-32  text-center  bg-purple-50 shadow-2xl"
              >
                {weeks.map((week, index) => (
                  <li key={week} onClick={() => handleSelect(index)}>
                    <a>{week}</a>
                  </li>
                ))}
              </ul>
            </span>
            {/* Checkpoint dropdown */}
            <span className=" dropdown dropdown-hover text-right ml-auto mb-3 ">
              <label
                tabIndex={0}
                className="w-32 text-center btn m-1 bg-green-100 border-0 text-green-950 hover:bg-green-200 hover:text-green-900 shadow-sm border-b-4 border-b-green-600"
              >
                {checkpoints[selectedCheckpoint - 1]}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2  bg-base-100 rounded-box w-32  text-center  bg-green-50 shadow-2xl"
              >
                {checkpoints.map((checkpoint, index) => (
                  <li
                    key={checkpoint}
                    onClick={() => handleCheckPointSelect(index)}
                  >
                    <a>{checkpoint}</a>
                  </li>
                ))}
              </ul>
            </span>
            <div className=" w-[70vw]">
              {/* Student Softskills and Techskills radar chart */}
              <div className="flex justify-between">
                <div className="flex-[0.5] bg-white rounded-3xl h-80 p-5 mr-4 shadow-md pb-10">
                  <span className="text-white bg-purple-500 p-3 rounded-full">
                    Soft Skills
                  </span>
                  <SkillsRadarChart skills={chartData?.softSkills} />
                </div>
                <div className="flex-[0.5] h-80 bg-white rounded-3xl p-5 shadow-md pb-10">
                  <span className="text-white bg-purple-500 p-3 rounded-full">
                    Tech Skills
                  </span>
                  <SkillsRadarChart skills={chartData?.techSkills} />
                </div>
              </div>
              {/* Student Assessment and Unit marks bar chart */}
              <div className="flex justify-between mt-5">
                <div className="flex-[0.35] h-80 bg-white rounded-3xl p-5 mr-4 shadow-md ">
                  <AssessmentMarksChart assessmentMarks={assessmentMarks} />
                </div>
                <div className="flex-[0.65] bg-white rounded-3xl p-5  shadow-md h-80">
                  <UnitMarksChart unitMarks={unitMarks} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" mb-10   w-[100%]">
              <div className="tabs flex justify-center  ">
                <div
                  className={`tab tab-lifted ${softSkillTab}  text-md w-[50%] h-10 bg-purple-200`}
                  onClick={selectSoftSkill}
                >
                  Soft Skill
                </div>
                <div
                  className={`tab tab-lifted ${techSkillTab} text-md w-[50%] h-10 bg-purple-200`}
                  onClick={selectTechSkill}
                >
                  Tech Skill
                </div>
              </div>
              {techSkillTab === 'tab-active font-bold' ? (
                <div>
                  <ProjectcodeSkillTable
                    type="techskills"
                    skills={tableData?.techSkills}
                  />
                </div>
              ) : (
                <>
                  <ProjectcodeSkillTable
                    type="softskills"
                    skills={tableData?.softSkills}
                  />
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
