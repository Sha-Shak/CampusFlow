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
  { skill: 'Communication', value: 10 },
  { skill: 'Problem-solving', value: 4 },
  { skill: 'Leadership', value: 8 },
  { skill: 'Time management', value: 10 },
  { skill: 'Creativity', value: 10 },
  { skill: 'Adaptability', value: 10 },
  { skill: 'Strategic thinking', value: 4 },
  { skill: 'Critical thinking', value: 10 },
  { skill: 'Intelligence', value: 2 },
  { skill: 'Negotiation', value: 10 },
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

  return (
    <ResponsiveContainer height={'100%'} width={'100%'}>
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
