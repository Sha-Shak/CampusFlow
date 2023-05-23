import React, { useEffect, useState } from 'react';
import MarkStudent from './MarkStudent';

function MultiStepForm({ students, isStudentFetchSuccess, week }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(
    new Array(students?.length).fill(false)
  );

  useEffect(() => {
    setCompletedSteps(new Array(students?.length).fill(false));
  }, [students, week]);
  const [studentToMark, setStudentToMark] = useState(students[0]?._id);

  const handleNext = () => {
    setCompletedSteps((prev) => {
      const next = [...prev];
      next[currentStep] = true;
      return next;
    });
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const refetch = (index) => {
    setCurrentStep(index);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const currentStudent = students[currentStep];

  return (
    <div className="flex justify-between">
      <div className="flex-[0.5]">
        <h1>Multi-Step Form</h1>{' '}
        <ul className=" steps steps-vertical cursor-pointer">
          {students.map((student, index) => (
            <Step
              key={student?._id}
              index={index}
              name={student?.name}
              isCurrentStep={index === currentStep}
              isCompleted={completedSteps[index]}
              onClick={() => refetch(index)}
            />
          ))}
        </ul>{' '}
      </div>
      <div className="flex-[0.9]">
        {currentStudent && (
          <MarkStudent
            studentId={currentStudent._id}
            handleNext={handleNext}
            onBack={handleBack}
            week={week}
          />
        )}
      </div>
    </div>
  );
}

function Step({ index, name, isCurrentStep, isCompleted, onClick }) {
  return (
    <>
      <li
        {...(isCompleted && { 'data-content': '✓' })}
        className={` step ${isCurrentStep ? 'step-secondary font-black' : ''} ${
          isCompleted ? 'step-secondary' : ''
        } hover:font-bold`}
        onClick={onClick}
      >
        {name}
      </li>
    </>
  );
}

export default MultiStepForm;
