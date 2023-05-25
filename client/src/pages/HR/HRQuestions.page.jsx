import React from 'react';
import WhyProjectCode from '../../components/HR/WhyProjectCode';
import HRMultiSteps from './HRMultiStep';

function HRQuestions() {
  return (
    <div className="flex">
      <div className="ml-5 flex-[0.5]">
        <WhyProjectCode />
      </div>
      <div className="mr-5 flex-[0.5] ">
        <HRMultiSteps />
      </div>
    </div>
  );
}

export default HRQuestions;
