import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { useGetStudentWeekInfoQuery } from '../features/student/studentApi';

const dummyData = [
  { skill: 'Behaviour', value: 8 },
  { skill: 'Time Management', value: 8 },
  { skill: 'Productivity', value: 8 },
  { skill: 'Teamwork', value: 8 },
  { skill: 'Clean Code', value: 8 },
];

const SkillsRadarChart = () => {
  const {
    data: studentWeekInfo,
    isSuccess,
    error,
    isLoading,
  } = useGetStudentWeekInfoQuery({
    id: '6459f36db9399a5969db9038',
    week: 1,
  });

  console.log('studentWeekInfo', studentWeekInfo);

  const softSkills = studentWeekInfo?.softSkills;

  const createFormattedData = (softSkills) => {
    return softSkills?.map((skills) => {
      return {
        skill: skills.skill.skillName,
        value: skills.marks,
      };
    });
  };

  const data = createFormattedData(softSkills);

  console.log('formatted', data);

  return (
    <ResponsiveContainer width="100%" height={450}>
      <RadarChart cx="50%" cy="50%" outerRadius="85%" data={dummyData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="skill" />
        <PolarRadiusAxis angle={30} domain={[0, 10]} />
        <Radar
          name="Skills"
          dataKey="value"
          stroke="#6f1ddce6"
          fill="#6f1ddc72"
          fillOpacity={0.8}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SkillsRadarChart;
