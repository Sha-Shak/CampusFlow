import React from 'react';
import HRMultiSteps from '../../components/HR/HRMultiStep';
import WhyProjectCode from '../../components/HR/WhyProjectCode';

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
