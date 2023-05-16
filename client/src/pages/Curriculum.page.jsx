import React from 'react';
import juniorCurriculum from '../assets/juniorCurriculum.json';
import seniorCurriculum from '../assets/seniorCurriculum.json';
import Layout from '../components/common/Layout';
import WeekCollapseComponent from '../components/Curriculum/WeekCollapse.component';

function CurriculumComponent() {
  return (
    <Layout>
      <div className="flex">
        <div className="flex w-full flex-col justify-center items-center">
          <div className="text-2xl font-bold mb-5">Junior</div>
          {juniorCurriculum.map((week, index) => (
            <WeekCollapseComponent key={index} week={week} />
          ))}
        </div>
        <div className="flex w-full flex-col justify-center items-center">
          <div className="text-2xl font-bold mb-5">Senior</div>
          {seniorCurriculum.map((week, index) => (
            <WeekCollapseComponent key={index} week={week} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default CurriculumComponent;
