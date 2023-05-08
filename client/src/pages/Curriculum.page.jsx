import React from 'react'
import curriculum from '../assets/curriculum.json';
import WeekCollapseComponent from '../components/WeekCollapse.component';

function CurriculumComponent() {
  return (
    <div className="flex w-full flex-col justify-center items-center">
      <div className='text-2xl font-bold mb-5'>Curriculum</div>
      {curriculum.map((week, index) => <WeekCollapseComponent key={index} week={week} />)}
    </div>
  )
}

export default CurriculumComponent