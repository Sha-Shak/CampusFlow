import React, { useState, useRef } from 'react';
import Layout from '../components/common/Layout';
import MigrateByCohort from '../components/MigrateStudents/MigrateByCohort.component';
import MigrateByStudent from '../components/MigrateStudents/MigrateByStudent.component';

function MigrateStudents() {
  const cohortRef = useRef(null);
  const studentRef = useRef(null);

  const [focusedElement, setFocusedElement] = useState('cohort');

  const handleCohortClick = () => {
    setFocusedElement('cohort');
    cohortRef.current.focus();
  };

  const handleStudentClick = () => {
    setFocusedElement('student');
    studentRef.current.focus();
  };

  const cohortClassName =
    focusedElement === 'cohort'
      ? 'bg-purple-300 hover:bg-purple-100'
      : 'bg-white hover:bg-gray-100';
  const studentClassName =
    focusedElement === 'student'
      ? 'bg-purple-300 hover:bg-purple-100'
      : 'bg-white hover:bg-gray-100';

  return (
    <Layout>
      <div className=" bg-white h-[80vh] rounded-2xl shadow-sm p-5">
        <div className="flex justify-around">
          <div
            className={`flex justify-center p-5 w-80  m-5 border-2 border-gray-300 rounded-2xl cursor-pointer  ${cohortClassName}`}
            onClick={handleCohortClick}
            ref={cohortRef}
            tabIndex={0}
          >
            Migrate By Cohort
          </div>
          <div
            className={`flex justify-center p-5 w-80  m-5 border-2 border-gray-300 rounded-2xl cursor-pointer hover:bg-gray-100 ${studentClassName}`}
            onClick={handleStudentClick}
            ref={studentRef}
            tabIndex={1}
          >
            Migrate By Student
          </div>
        </div>
        <div className="p-5  justify-center">
          {focusedElement === 'cohort' && <MigrateByCohort />}
          {focusedElement === 'student' && <MigrateByStudent />}
        </div>
      </div>
    </Layout>
  );
}

export default MigrateStudents;
