import React from 'react';
import DayCollapseComponent from './DayCollapse.component';

function WeekCollapseComponent({ week }) {
  return (
    <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-2  sm:w-1/2 my-2">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium bg-purple-200">
        {week.week}
      </div>
      <div className="collapse-content">
        {week.days.map((day, index) => (
          <DayCollapseComponent key={index} day={day} />
        ))}
      </div>
    </div>
  );
}

export default WeekCollapseComponent;
