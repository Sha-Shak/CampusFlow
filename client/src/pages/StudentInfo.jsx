import React, { useEffect } from 'react';
import AssessmentMarksChart from '../components/StudentInfo/AssessmentMarksChart';
import Layout from '../components/common/Layout';
import SkillsRadarChart from '../components/StudentInfo/SkillsRadarChart';
import StudentSidebar from '../components/StudentInfo/StudentSidebar';
import UnitMarksChart from '../components/StudentInfo/UnitMarks';
import { useState } from 'react';
import { useGetStudentByIdQuery } from '../features/student/studentApi';
import { useGetStudentWeekInfoQuery } from '../features/student/studentApi';
import { useSaveMidEndJuniorCheckpointMutation } from '../features/student/studentApi';
import { useSaveMidEndSeniorCheckpointMutation } from '../features/student/studentApi';
import { useGetMidEndDataByStudentIDQuery } from '../features/student/studentApi';
import { useGetAssessmentMarksByStudentIDQuery } from '../features/student/studentApi';
import { useGetUnitMarksByStudentIDQuery } from '../features/student/studentApi';
import { useParams } from 'react-router-dom';

function StudentInfo() {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedCheckpoint, setSelectedCheckpoint] = useState(1);
  const [chartData, setChartData] = useState([]);
  // get id via params
  const { id } = useParams();

  // API call to get student info
  const { data: studentInfo } = useGetStudentByIdQuery({
    studentId: id,
  });

  const { data: studentWeekInfo } = useGetStudentWeekInfoQuery({
    studentId: id,
    week: selectedWeek,
  });

  const { data: midEndData } = useGetMidEndDataByStudentIDQuery({
    studentId: id,
  });

  const [
    saveMidEndJunior,
    { data: checkpointsDataJunior, isSuccess, isError, error },
  ] = useSaveMidEndJuniorCheckpointMutation();

  const [
    saveMidEndSenior,
    {
      data: checkpointsDataSenior,
      isSuccessSenior,
      isErrorSenior,
      errorSenior,
    },
  ] = useSaveMidEndSeniorCheckpointMutation();

  const { data: assessmentMarks } = useGetAssessmentMarksByStudentIDQuery({
    studentId: id,
  });

  const { data: unitMarks } = useGetUnitMarksByStudentIDQuery({
    studentId: id,
  });

  const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'];
  const checkpoints = ['Mid Junior', 'End Junior', 'Mid Senior', 'End Senior'];

  useEffect(() => {
    if (studentWeekInfo) {
      setChartData(studentWeekInfo);
    }
  }, [studentWeekInfo]);

  const handleSelect = (index) => {
    const weekSelected = index + 1;
    setSelectedWeek(weekSelected);
    setChartData(studentWeekInfo);
  };
  const handleCheckPointSelect = (index) => {
    const checkpoint = index + 1;
    setSelectedCheckpoint(checkpoint);

    // saveMidEndJunior(checkpointInfo);
    // saveMidEndSenior(checkpointInfo);
  };

  useEffect(() => {
    let checkpointInfo = {
      studentId: id,
    };
    saveMidEndJunior(checkpointInfo);
    saveMidEndSenior(checkpointInfo);
  }, []);

  useEffect(() => {
    if (midEndData) {
      setChartData(midEndData[selectedCheckpoint - 1]);
    }
  }, [midEndData, selectedCheckpoint]);
  return (
    <Layout>
      <div className="flex">
        <div className="flex-[0.9] rounded-xl min-h-[80vh] bg-clip-border  shadow-3xl w-[60vw] p-10 pt-5 ">
          {/* 
          
          Week Dropdown
          
          */}

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
          <div className="flex justify-between mt-5">
            <div className="flex-[0.35] h-80 bg-white rounded-3xl p-5 mr-4 shadow-md ">
              <AssessmentMarksChart assessmentMarks={assessmentMarks} />
            </div>
            <div className="flex-[0.65] bg-white rounded-3xl p-5  shadow-md h-80">
              <UnitMarksChart unitMarks={unitMarks} />
            </div>
          </div>
          {/* <div className="w-[300px]"> */}
          {/* <SkillsRadarChart /> */}
          {/* </div> */}
        </div>
        <div className="flex-[0.1] ml-2 ">
          <StudentSidebar student={studentInfo} />
        </div>
      </div>
    </Layout>
  );
}

export default StudentInfo;
