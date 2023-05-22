import React, { useState, useRef } from 'react';
import Layout from '../components/common/Layout';
import ChangeCohort from '../components/MigrateStudents/ChangeStudentCohort.component';
import MigrateByCohort from '../components/MigrateStudents/MigrateByCohort.component';
import MigrateByStudent from '../components/MigrateStudents/MigrateByStudent.component';

function MigrateStudents() {
  const cohortRef = useRef(null);
  const studentRef = useRef(null);
  const changeCohort = useRef(null);

  const [focusedElement, setFocusedElement] = useState('cohort');

  const handleCohortClick = () => {
    setFocusedElement('cohort');
    cohortRef.current.focus();
  };

  const handleStudentClick = () => {
    setFocusedElement('student');
    studentRef.current.focus();
  };

  const handleChangeCohort = () => {
    setFocusedElement('changeCohort');
    changeCohort.current.focus();
  };

  const cohortClassName =
    focusedElement === 'cohort'
      ? 'bg-purple-300 hover:bg-purple-100'
      : 'bg-white hover:bg-gray-100';
  const studentClassName =
    focusedElement === 'student'
      ? 'bg-purple-300 hover:bg-purple-100'
      : 'bg-white hover:bg-gray-100';

  const changeCohortClassName =
    focusedElement === 'changeCohort'
      ? 'bg-purple-300 hover:bg-purple-100'
      : 'bg-white hover:bg-gray-100';

  return (
    <Layout>
      <div className=" bg-white h-[80vh] rounded-2xl shadow-sm p-5">
        <div className="flex justify-around">
          <div
            className={`transition duration-300 ease-in-out flex justify-center p-5 w-80  m-5 border-2 border-gray-300 rounded-2xl cursor-pointer  ${cohortClassName}`}
            onClick={handleCohortClick}
            ref={cohortRef}
            tabIndex={0}
          >
            Migrate By Cohort
          </div>
          <div
            className={`transition duration-300 ease-in-out flex justify-center p-5 w-80  m-5 border-2 border-gray-300 rounded-2xl cursor-pointer hover:bg-gray-100 ${studentClassName}`}
            onClick={handleStudentClick}
            ref={studentRef}
            tabIndex={1}
          >
            Migrate By Student
          </div>
          <div
            className={`transition duration-300 ease-in-out flex justify-center p-5 w-80  m-5 border-2 border-gray-300 rounded-2xl cursor-pointer hover:bg-gray-100 ${changeCohortClassName}`}
            onClick={handleChangeCohort}
            ref={changeCohort}
            tabIndex={1}
          >
            Change Student Cohort
          </div>
        </div>
        <div className="p-5  justify-center">
          {focusedElement === 'cohort' && <MigrateByCohort />}
          {focusedElement === 'student' && <MigrateByStudent />}
          {focusedElement === 'changeCohort' && <ChangeCohort />}
        </div>
      </div>
    </Layout>
  );
}

export default MigrateStudents;
