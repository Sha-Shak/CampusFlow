import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const SkillsRadarChart = ({ skills }) => {
  const createFormattedData = (skills) => {
    return skills?.map((skill) => {
      return {
        skill: skill?.skill?.skillName,
        value: skill?.marks,
      };
    });
  };

  const data = createFormattedData(skills);
  // console.log('data', data);

  return (
    <ResponsiveContainer height={'100%'} width={'100%'}>
      <RadarChart cx="50%" cy="50%" outerRadius="85%" data={data}>
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
